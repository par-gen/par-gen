# Methodology & Performance Runbook

This runbook defines how we provision benchmark environments, run deterministic measurements, inspect V8 JIT output, and evaluate optimization hypotheses for `par-gen`.

---

## 1. Deterministic Benchmarking on AWS EC2

Local workstations, laptops, containers, and burstable cloud instances (`t2`/`t3`) suffer from thermal throttling, CPU credit bursting, hypervisor noisy neighbors, and background OS interrupts. All official benchmarks must be run on a quiet, dedicated-core EC2 Spot instance.

### 1.1 Instance Selection
- **Recommended Instance Type:** `c7a.large` (AMD EPYC 9R14 / Zen 4, 3.7 GHz) or `c6i.xlarge` / `c7i.xlarge` (Intel Xeon).
- **Why `c7a.large` is ideal for low-cost deterministic benchmarking:**
  - `DefaultCores: 2, DefaultThreadsPerCore: 1` (2 physical x86-64 cores with **no Simultaneous Multithreading / Hyper-Threading** at the hardware level, eliminating SMT sibling contention on L1d/L1i/execution ports).
  - 32 KiB L1d + 32 KiB L1i + 1 MiB L2 per physical core.
  - Spot cost is ~$0.047/hr in `eu-central-1` (< $0.02 per benchmark session).
  - Core 0 handles OS housekeeping, SSH, and hardware interrupts; Core 1 is isolated exclusively for the benchmark process.

### 1.2 Provisioning & Isolation Commands
Launch a one-time Spot instance using `--profile infra-playground-adm` and apply the following isolation steps before running any benchmark:

```bash
# 1. Stop background timers and noisy daemons
sudo systemctl stop apt-daily.timer apt-daily-upgrade.timer \
  unattended-upgrades.service snapd.service snapd.socket \
  cron.service irqbalance.service 2>/dev/null || true

# 2. Disable ASLR for deterministic virtual memory alignment across processes
echo 0 | sudo tee /proc/sys/kernel/randomize_va_space

# 3. Set CPU scaling governor to performance (if exposed by hypervisor/bare-metal)
for gov in /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor; do
  [ -f "$gov" ] && echo performance | sudo tee "$gov"
done

# 4. If running on an Intel SMT instance (e.g. c6i.xlarge / c7i.xlarge),
#    disable TurboBoost and offline the hyper-threading sibling of the benchmark core:
[ -f /sys/devices/system/cpu/intel_pstate/no_turbo ] && \
  echo 1 | sudo tee /sys/devices/system/cpu/intel_pstate/no_turbo
# echo 0 | sudo tee /sys/devices/system/cpu/cpu3/online

# 5. Pin all maskable IRQs, kernel workqueues, and existing OS processes to CPU 0 (mask=1)
for irq in /proc/irq/*/smp_affinity; do
  echo 1 | sudo tee "$irq" >/dev/null 2>&1 || true
done
[ -f /sys/devices/virtual/workqueue/cpumask ] && \
  echo 1 | sudo tee /sys/devices/virtual/workqueue/cpumask >/dev/null 2>&1 || true
for p in $(ps -eo pid=); do
  sudo taskset -pc 0 "$p" >/dev/null 2>&1 || true
done
```

### 1.3 Runtime & Single-Core Pinning Rules
- **Required Runtime:** Always use **Node.js v26 Active LTS (`v26.13.0`, V8 `14.6.202.34` with Turboshaft)** (or at minimum Node.js v22 / v24 maintenance LTS; never use EOL Node.js v20). On minimal Amazon Linux 2023 AMIs, install `libatomic` (`sudo dnf install -y libatomic`) before running the official Node.js v26 binary.

> [!IMPORTANT]
> **Critical V8 + Single-Core Pinning Pitfalls:**
> 1. **Never use `chrt -f 99` (`SCHED_FIFO`) with `taskset -c 1` on Node.js:** When `node-MainThread` and all four `node-V8Worker` background compiler/GC threads are pinned to a single core (`CPU 1`) at equal `SCHED_FIFO` priority (`PRI 139`), Linux `SCHED_FIFO` has no time-slicing. Because `node-MainThread` never makes a blocking syscall during a tight JS loop, it completely starves the four `node-V8Worker` threads (`0.0%` CPU in runnable `Rl` state). Consequently, Maglev/TurboFan/Turboshaft background compilation never executes, forcing `parse()` to run in the unoptimized Ignition bytecode interpreter (~33x slower) and livelocking when concurrent GC is triggered. Always use `sudo nice -n -20 taskset -c 1` (`SCHED_OTHER` at highest priority), which allows `node-V8Worker` threads to finish tier-up compilation during warmup and sleep during timed trials.
> 2. **Use `sudo pkill -9 node` (not `killall`) on Amazon Linux 2023:** Minimal AL2023 images do not include `killall` (`psmisc`). Always use `pkill -9 node` and verify with `ps -ef | grep [n]ode` before starting a benchmark so stale processes cannot contend on CPU 1.
> 3. **Resolve `acorn` from `parsers/json/node_modules/acorn` (`v8.2.4`):** The workspace root `node_modules/acorn` is `v7.4.1` (transitive dependency of Jest/ESLint), which enters an infinite loop when passed `{ ecmaVersion: "latest" }`. Always resolve `acorn` from `./parsers/json/node_modules/acorn/dist/acorn.mjs` (`v8.2.4`).
> 4. **Note on `ArrayBufferDetachingProtector` (Fixed in Node v26 / V8 14.6):** In older V8 (Node v20), importing large CommonJS bundles via ESM caused `cjs-module-lexer`'s `WebAssembly.Memory.prototype.grow()` to invalidate `ArrayBufferDetachingProtector`. In Node `v26.13.0` (V8 `14.6`), Wasm memory growth no longer invalidates `ArrayBufferDetachingProtector` (`--trace-deopt-verbose` confirms zero protector invalidations).

Run benchmarks pinned to CPU 1 with highest CFS priority (`nice -n -20`):

```bash
sudo nice -n -20 taskset -c 1 /usr/local/bin/node bench.mjs
```

### 1.4 Teardown
Always terminate the Spot instance and delete temporary security groups and key pairs immediately after completing the benchmark run:

```bash
aws ec2 terminate-instances --profile infra-playground-adm --instance-ids "$INSTANCE_ID"
aws ec2 wait instance-terminated --profile infra-playground-adm --instance-ids "$INSTANCE_ID"
aws ec2 delete-security-group --profile infra-playground-adm --group-id "$SG_ID"
aws ec2 delete-key-pair --profile infra-playground-adm --key-name pargen-bench-key
```

---

## 2. V8 Bytecode & Assembly Inspection Cheat Sheet

### 2.1 Ignition Bytecode
Inspect the bytecode generated for the lexer (`next`) and parser (`parse`):

```bash
node --print-bytecode --print-bytecode-filter=next bench.mjs > bytecode-lexer.txt
node --print-bytecode --print-bytecode-filter=parse bench.mjs > bytecode-parser.txt
```

### 2.2 TurboFan Optimized x86-64 Disassembly
Inspect the optimized machine code emitted by TurboFan after warmup:

```bash
node --print-opt-code --code-comments --print-opt-code-filter=next bench.mjs > opt-lexer.asm
node --print-opt-code --code-comments --print-opt-code-filter=parse bench.mjs > opt-parser.asm
```

### 2.3 Inlining & Deoptimization Tracing
Verify that helper functions (such as `next` into `parse`) are inlined and that zero deoptimizations occur in the hot loop:

```bash
node --trace-opt --trace-deopt --trace-inlining bench.mjs
```

### 2.4 What to Audit in TurboFan Assembly
When reading `opt-lexer.asm` and `opt-parser.asm`, systematically check for:
1. **Accidental `Float64` (`xmm`) Operations:**
   - JavaScript `/` (e.g. `successState / 256`) produces a `Number` (`Float64`) unless truncated via bitwise operators (`successState >> 8` or `successState >>> 8`). Look for `vcvtqsi2sd` / `vcvttsd2si` / `ucomisd` instructions and eliminate them.
2. **Heap Object `Map` Checks & Pointer Chasing:**
   - Accessing properties on JS objects (`action.op`, `action.state`, `action.symbol`) or reading JS arrays containing `undefined` (`PACKED_ELEMENTS`) emits hidden-class `Map` comparisons (`cmpq [reg - 1], r13`), `Smi` tag checks (`testb reg, 1`), and untagging shifts (`sarq reg, 32`). Replace hot object/array tables with flat `TypedArray`s (`Uint8Array` / `Uint16Array` / `Uint32Array`).
3. **Bounds Checks (`cmpq` + `jae`):**
   - Check every `TypedArray` load/store in the loop. Ensure indices are provably non-negative integers and eliminate redundant `TypedArray` accesses.
4. **Call Overhead vs. Inlining:**
   - Indirect calls through mutable variables (`let nextToken`) or object methods (`lexer.push` / `lexer.pop`) prevent static call resolution or add unnecessary prologue/epilogue work. Use direct `const` function references whenever the grammar has a single lexer mode.
5. **Dead Stores:**
   - Every `movw [r14 + offset], imm` to the `tree` or `stack` array in the shift/reduce cases must be read by consumers; remove stores that are never read.
6. **On-Heap vs. Off-Heap `TypedArray` Backing Stores (`64B` Threshold):**
   - V8 defaults to `--typed-array-max-size-in-heap=64`. Any `TypedArray` whose byte length is `<= 64` bytes has its backing store allocated **on the movable V8 JS heap**. Because GC can relocate on-heap backing stores, V8 cannot constant-fold their base address in JIT code; instead, every access emits 3 dependent memory loads (`[reg+0x4f]` external_pointer, `[reg+0x47]` base_pointer, `[reg+0x37]` byte_length) and consumes 3 scratch registers. Padding static module-scoped `TypedArray`s (`tokenIds`, `actionsTable`, `gotoTable`) to `>= 128` bytes forces V8 to allocate an off-heap non-moving backing store and constant-fold its 64-bit address directly into the displacement of a single `movzxbl` / `movzxwl` / `movl` instruction.

---

## 3. Hardware Cache & Pipeline Analysis

### 3.1 Cache Hierarchy Budget (per physical core)
| Cache Level | Typical Size | Latency | Target Resident Structures |
| :--- | :--- | :--- | :--- |
| **L1d** | **32 KiB** | ~4–5 cycles | Lexer `table`, `tokenIds`, Parser `actionsTable`, `gotoTable`, active `stack` & `tree` prefix |
| **L1i** | **32 KiB** | ~4 cycles | JIT-compiled `parse()` + inlined `next()` machine code |
| **L2** | **512 KiB – 1 MiB** | ~12–14 cycles | Full syntax `tree` buffer for large inputs, input `Uint8Array` stream |

### 3.2 Linux `perf stat` Command
When hardware performance counters are available, measure IPC, cache misses, and branch mispredictions:

```bash
perf stat -e cycles,instructions,L1-dcache-loads,L1-dcache-load-misses,branch-instructions,branch-misses \
  node --single-threaded-gc --v8-pool-size=1 bench.mjs
```

---

## 4. Workflow for Testing Optimizations

Every optimization hypothesis must follow this strict loop:
1. **Formulate Hypothesis:** Identify the exact bottleneck in assembly, cache footprint, or algorithmic complexity, and predict its effect.
2. **Implement Minimal Change:** Modify [`packages/codegen/lib/javascript.js`](file:///workspaces/par-gen/packages/codegen/lib/javascript.js) or [`packages/lexer/lib/lexer.js`](file:///workspaces/par-gen/packages/lexer/lib/lexer.js) and regenerate the parser (`npm run generate`).
3. **Verify Correctness & Types:** Run `npm test` and `npm run check` (`tsc --build .`).
4. **Verify JIT Assembly:** Diff `--print-opt-code` output before and after to confirm the expected instruction/table change occurred.
5. **Run Deterministic Benchmark:** Measure on the isolated EC2 core across multiple trials (reporting median, min, mean, stddev, and CV%).
6. **Update [`docs/findings.md`](file:///workspaces/par-gen/docs/findings.md):** Keep only current, verified measurements and active hypotheses in the living findings document.
