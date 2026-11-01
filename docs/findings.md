# Performance Findings, Hypotheses & Current Measurements

> [!IMPORTANT]
> **Living Document Policy:** This document contains **only current, verified measurements and active architectural findings**. Do not append historical logs, obsolete numbers, or superseded tables—update tables in place when a change becomes the new baseline.

---

## 1. Benchmark Environment Specification

| Parameter | Value |
| :--- | :--- |
| **Cloud / Instance** | AWS EC2 `c7a.large` Spot (`us-east-1`, profile `infra-playground-adm`) |
| **CPU** | AMD EPYC 9R14 (Zen 4 / Genoa), 3.7 GHz sustained, `ThreadsPerCore: 1` (no SMT) |
| **Cache Hierarchy (per core)** | 32 KiB L1d, 32 KiB L1i, 1 MiB L2, 8 MiB L3 |
| **OS / Kernel** | Amazon Linux 2023 (`Linux 6.1.x.amzn2023.x86_64`), ASLR disabled (`randomize_va_space=0`) |
| **Core Isolation** | All OS PIDs, IRQs & kernel workqueues pinned to CPU 0; benchmark pinned to CPU 1 (`nice -n -20 taskset -c 1`) |
| **Runtime** | **Node.js `v26.13.0` Active LTS ("Lithium", V8 `14.6.202.34-node.40` with Turboshaft)** |
| **Workloads** | 1. `package.json` (`1,073` bytes, 100k & 10k iterations, 11 trials)<br>2. Short JSON (`68` bytes, 1M iterations, 11 trials) |

---

## 2. Current Verified Measurements (Node.js `v26.13.0` / V8 `14.6.202.34`)

### 2.1 `par-gen` Track 1 Optimization Progression (Isolated CPU 1)

| Configuration | Lexer Only (`package.json`, 100k) | Full Parse (`package.json`, 100k) | Short JSON (`68B`, 1M) | Full Parse (`package.json`, 10k) | Table Footprint / `parse()` Code Size |
| :--- | ---: | ---: | ---: | ---: | ---: |
| **Round 2 Baseline (`v0-head` @ `7f611fe`)** | 238.00 ms *(CV 2.40%)* | 601.85 ms *(CV 0.27%)* | 537.70 ms *(CV 0.34%)* | 60.25 ms *(CV 0.26%)* | 30.8 KiB / 3,576 B |
| **+ `v1-nonneg`:** Mask `let i = offset & 0x7fffffff` (`Unsigned31`) | 233.08 ms *(CV 2.29%, **-2.1%**)* | 584.18 ms *(CV 0.26%, **-2.9%**)* | 532.29 ms *(CV 0.36%, **-1.0%**)* | 58.52 ms *(CV 0.24%, **-2.9%**)* | 30.8 KiB / 3,572 B |
| **+ `v2-tree32-stack32`:** 32-bit coalesced `tree` & `stack` (`Uint32Array`) | 233.15 ms *(CV 2.25%, **-2.0%**)* | 548.33 ms *(CV 0.30%, **-8.9%**)* | 482.58 ms *(CV 0.40%, **-10.3%**)* | 54.85 ms *(CV 0.27%, **-9.0%**)* | 30.8 KiB / 3,384 B |
| **+ `v3-premul-t5`:** Pre-multiplied state offsets + live-range `reduce` | 232.80 ms *(CV 2.55%, **-2.2%**)* | 514.48 ms *(CV 0.32%, **-14.5%**)* | 452.59 ms *(CV 0.50%, **-15.8%**)* | 51.52 ms *(CV 0.30%, **-14.5%**)* | 30.8 KiB / 3,356 B |
| **Track 1 Combined (`v4-combined` @ `HEAD`)** | **232.56 ms** *(CV 2.45%, **-2.3%**)* | **510.81 ms** *(CV 0.33%, **-15.1%**)* | **445.20 ms** *(CV 0.42%, **-17.2%**)* | **51.08 ms** *(100k/10)* | **30.8 KiB / 3,324 B** |

### 2.2 Hardware Performance Counters (`perf stat`, 200,000 `package.json` Parses on Isolated CPU 1)

| Hardware Counter | Round 2 Baseline (`v0-head`) | Track 1 Combined (`HEAD`) | Net Reduction |
| :--- | ---: | ---: | :--- |
| **CPU Cycles** | `4,404,517,202` | **`3,888,704,762`** | **`-515.8M cycles` (`-11.7%`, `-2,579` cycles/parse)** |
| **Instructions Retired** | `20,158,368,303` | **`18,515,792,407`** | **`-1.643B instructions` (`-8.15%`, `-8,213` insns/parse)** |
| **Branches Executed** | `5,007,615,616` | **`4,452,093,518`** | **`-555.5M branches` (`-11.1%`, `-2,778` branches/parse)** |
| **Branch Misses** | `2,002,760` *(0.04%)* | `2,507,312` *(0.06%)* | `99.94%` branch prediction accuracy |
| **Instructions Per Cycle (IPC)** | `4.58` | **`4.76`** | **`+3.9%` higher IPC** |
| **Total Elapsed Wall Time** | `1.248 s` | **`1.062 s`** | **`-14.9%` wall time** |

### 2.3 Comparison Against Other Parsers (`package.json`, 10,000 Iterations on Node `v26.13.0`)

| Parser | Implementation Type | Median Time (10k iter) | Min Time | CV% | Relative to `par-gen` (`HEAD`) |
| :--- | :--- | ---: | ---: | ---: | :--- |
| `JSON.parse` (V8 Native C++) | Hand-written C++ | 40.97 ms | 40.79 ms | 0.26% | **0.80x** (`par-gen` is within **1.25x** / `1.01 µs` of native C++!) |
| **`par-gen` (`HEAD`, Track 1 Combined)** | **Generated JS LR(1)** | **51.08 ms** *(510.81 ms / 100k)* | **51.06 ms** | **0.33%** | **1.00x (Baseline JS Reference)** |
| `par-gen` (Round 2 Baseline @ `7f611fe`) | Generated JS LR(1) | 60.25 ms | 60.21 ms | 0.26% | 1.18x slower |
| `acorn` (`v8.2.4`) | Hand-written JS | 240.70 ms | 240.51 ms | 2.55% | **4.71x slower** |
| `@babel/parser` (`v7.17.3`) | Hand-written JS | 246.32 ms | 243.16 ms | 5.20% | **4.82x slower** |
| `typescript` (`ts.parseJsonText`) | Hand-written JS | 485.27 ms | 485.00 ms | 1.20% | **9.50x slower** |
| `json5` (`v2.2.0`) | Hand-written JS | 952.29 ms | 947.92 ms | 0.39% | **18.64x slower** |

---

## 3. Verified Optimizations & Root-Cause Analysis

### 3.1 Rounds 1 & 2 Foundation
1. **Bit-Pack `actionsTable` & Eliminate `reducerStates` (86 KiB) + `actions` Heap Objects (`7eb470f`):** Shrunk parser tables from 91.4 KiB to 10.8 KiB (`actionsTable` + `gotoTable`) and replaced object property lookups with bitwise shifts.
2. **Hopcroft DFA `initialPartitions` Grouped by Token UID (`b262cec`):** Shrunk the JSON lexer DFA from 102 states (52.2 KiB) to 39 states (20.0 KiB) so all lexer + parser tables (`30.8 KiB`) fit in the 32 KiB L1d cache.
3. **Bitwise Shift `successState >> 8` & `tokenIds` `Uint8Array` (`5ecac6d`):** Eliminated `Float64` (`xmm0`) conversions and `PACKED_ELEMENTS` `Smi` checks.
4. **Direct Single-Mode Lexer Call & Escape-Analyzed Token Return (`2ad7bc7`, `89a36a0`):** Enabled TurboFan/Turboshaft to inline `nextTokenInitial` into `parse()` and scalar-replace `{ state, start, end }` into registers with zero heap allocations per token.
5. **Remap `errorState` to `0` (`cd15ed6`) & Module-Scoped `proxyHandler` (`2e4f60b`):** Reduced the 4x-unrolled inner lexer loop to a single non-final branch per byte and eliminated per-parse closure allocations.

### 3.2 Track 1: 32-Bit Coalescing, `Unsigned31` Offset Hint & Pre-Multiplied State Offsets
6. **Mask Lexer `offset & 0x7fffffff` (`Unsigned31` Range Proof, `a99eb1b`):**
   - **Root Cause:** Because `next()` sets `offset = -1; successPos = -1` on `EOF`/`ERROR`, `result.end` has static type `Range(-1, 0x7fffffff)` (`Signed32`). When `nextToken(stream, lookaheadEnd)` is inlined into `case 0: // shift`, V8 Turboshaft emitted `REX.W movsxlq rdi, rdx` (32-to-64 sign extension) and allocated an extra scratch register on **every byte** in the 4x-unrolled lexer loop.
   - **Fix:** Writing `let i = offset & 0x7fffffff;` in [`javascript.js`](file:///workspaces/par-gen/packages/codegen/lib/javascript.js#L160) proves `i >= 0` (`Unsigned31`), eliminating all four `REX.W movsxlq` instructions from the unrolled loop (**-2.9%** parse time).
7. **Coalesce CST `tree` & Parser `stack` into 32-Bit `Uint32Array` Layouts (`d52634a`):**
   - **Root Cause:** A CST node only uses `(start, end)` on leaves (`nChildren === 0`) and `firstChild` on internal nodes (`nChildren > 0`). Storing 6 separate `uint16` fields required 5 stores + 5 bounds checks on `shift` and 4 stores + 4 bounds checks on `reduce`, plus 2 interleaved `uint16` `stack` stores.
   - **Fix:** Using `tree = new Uint32Array(16384)` (3 `uint32` words per node: `name | (nChildren << 16)`, `start | (end << 16)` or `firstChild`, `nextSibling`) and `stack = new Uint32Array(16384)` (`tp | (state << 16)`):
     - On `shift`, `tree[tp] = lookahead` writes both `name` and `nChildren = 0` in one 32-bit `movl` instruction with zero bit-packing ALU ops, `tree[tp + 1] = lookaheadStart | (lookaheadEnd << 16)` writes `start` and `end` in one `movl`, and `top & 0xffff` is already in register `rsi` from the loop header (**zero `stack` memory loads on `shift`**).
     - Omitting the redundant `tree` property from `{ stream, pointer }` in `createProxy` shrinks the target object from `Map[48]` to `Map[40]`.
8. **Pre-Multiply State Offsets in `actionsTable` & `gotoTable` + Live-Range-Minimized `reduce` (`c910fc6`):**
   - **Root Cause:** Every iteration of the `while (true)` loop and every `reduce` step shifted `top >>> 16` and then multiplied by `parserSymbols.length` (`shll 5` or `imull`). Furthermore, keeping `actionSymbol` alive across all `tree` stores in `reduce` caused V8's register allocator to spill and reload `lookaheadStart` (`[rbp-0x30]`).
   - **Fix:** Pre-multiplying state targets by `parserSymbols.length` at codegen time (whenever `states.length * parserSymbols.length < 16384`) eliminates the runtime multiplication on every loop header and `reduce`. Computing `nextState = gotoTable[(rtop >>> 16) + actionSymbol]` before loading `firstChild = stack[sp] & 0xffff` kills `actionSymbol`'s live range early, keeping `lookaheadStart` in register `r15` across `reduce` and allowing Turboshaft CSE to eliminate the bounds check on `stack[sp] = tp | (nextState << 16)`.

---

## 4. Rejected Hypotheses (Tested & Discarded)

| Hypothesis | Measured / Assembly Impact | Why It Regressed |
| :--- | :--- | :--- |
| **Merge `gotoTable` into `actionsTable` (Opt F)** | `+5.8%` slower | Both tables (`30.8 KiB` total) already fit in the 32 KiB L1d cache; sharing one table pointer across loop dispatch and `reduce` extends register live ranges and adds `+nTokens` offset arithmetic. |
| **Carry `currentState` and `currentTp` as Loop-Header `Phi` Variables (`t1`)** | Spilled 3 extra registers at loop header (`[rbp-0x38]`, `[rbp-0x58]`, `[rbp-0x60]`) | Carrying unpacked `currentState` and `currentTp` alongside `sp` and `tp` across the inlined lexer call exceeded x86-64's 14 general-purpose registers; unpacking `const top = stack[sp]` inside the loop header keeps only `sp` and `tp` live. |
| **Replace `((actionLookup >> 2) << 16)` with `(actionLookup << 14)` on `shift` (`t4`)** | Spilled `input.length` (`r9` $\rightarrow$ `[rbp-0x68]`), adding 8 stack loads per 4-byte lexer iteration | Turboshaft schedules `actionLookup >> 2` at the start of `case 0: // shift`, killing `actionLookup`'s register before the `tree` stores; `actionLookup << 14` delayed the shift until after `tree` stores, increasing peak register pressure by 1 and spilling `r9`. |
