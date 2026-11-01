# Performance Findings, Hypotheses & Current Measurements

> [!IMPORTANT]
> **Living Document Policy:** This document contains **only current, verified measurements and active architectural findings**. Do not append historical logs, obsolete numbers, or superseded tables—update tables in place when a change becomes the new baseline.

---

## 1. Benchmark Environment Specification

| Parameter | Value |
| :--- | :--- |
| **Cloud / Instance** | AWS EC2 `c7a.large` Spot (`eu-central-1a`) |
| **CPU** | AMD EPYC 9R14 (Zen 4 / Genoa), 3.7 GHz sustained, `ThreadsPerCore: 1` (no SMT) |
| **Cache Hierarchy (per core)** | 32 KiB L1d, 32 KiB L1i, 1 MiB L2, 8 MiB L3 |
| **OS / Kernel** | Ubuntu 24.04 LTS (`Linux 7.0.0-1014-aws x86_64`), ASLR disabled (`randomize_va_space=0`) |
| **Core Isolation** | IRQs & kernel workqueues pinned to CPU 0; benchmark pinned to CPU 1 (`nice -n -20 taskset -c 1`) |
| **Runtime** | Node.js `v20.18.0` (V8 `11.3.244.8`) |
| **Workloads** | 1. `package.json` (1,073 bytes, 100k & 10k iterations, 11 trials)<br>2. Short JSON (`68` bytes, 1M iterations, 11 trials) |

---

## 2. Current Verified Measurements

### 2.1 `par-gen` Optimization Progression (Isolated CPU 1)

| Configuration | Lexer Only (`package.json`, 100k) | Full Parse (`package.json`, 100k) | Short JSON (`68B`, 1M) | Full Parse (`package.json`, 10k) | Table Footprint (Lexer + Parser) |
| :--- | ---: | ---: | ---: | ---: | ---: |
| **Baseline (`main` @ `0f71cef`)** | 399.05 ms *(CV 1.64%)* | 1034.15 ms *(CV 0.20%)* | 994.06 ms *(CV 0.17%)* | 103.35 ms *(CV 0.07%)* | 52.2 KiB + 91.4 KiB = **143.6 KiB** |
| **Opt 1 Only:** Bit-pack `actionsTable` & remove `reducerStates`/`actions` | 334.24 ms *(CV 1.50%)* | 712.68 ms *(CV 0.36%, **-31.1%**)* | 681.49 ms *(CV 0.19%, **-31.4%**)* | 71.28 ms *(CV 0.10%, **-31.0%**)* | 52.2 KiB + 10.8 KiB = **63.0 KiB** |
| **Opt 2 Only:** Hopcroft DFA `initialPartitions` grouped by token UID | 325.23 ms *(CV 1.96%, **-18.5%**)* | 941.92 ms *(CV 0.25%, **-8.9%**)* | 947.46 ms *(CV 0.14%, **-4.7%**)* | 94.12 ms *(CV 0.09%, **-8.9%**)* | 20.0 KiB + 91.4 KiB = **111.4 KiB** |
| **Opt 3 Only:** `successState >> 8` & `tokenIds` `Uint8Array` | 388.85 ms *(CV 0.79%, **-2.6%**)* | 1011.24 ms *(CV 0.18%, **-2.2%**)* | 959.40 ms *(CV 0.16%, **-3.5%**)* | 101.16 ms *(CV 0.13%, **-2.1%**)* | 52.2 KiB + 91.4 KiB = **143.6 KiB** |
| **Opt 4 Only:** Direct `const` lexer call & remove dead `tree` stores | 404.65 ms *(CV 0.83%)* | 1000.99 ms *(CV 0.15%, **-3.2%**)* | 946.30 ms *(CV 0.08%, **-4.8%**)* | 100.13 ms *(CV 0.08%, **-3.1%**)* | 52.2 KiB + 91.4 KiB = **143.6 KiB** |
| **Combined (Opt 1 + 2 + 3 + 4)** | **321.94 ms** *(CV 0.73%, **-19.3%**)* | **703.34 ms** *(CV 0.34%, **-32.0%**)* | **645.27 ms** *(CV 0.26%, **-35.1%**)* | **70.31 ms** *(CV 0.09%, **-32.0%**)* | **20.0 KiB + 10.8 KiB = 30.8 KiB** |

### 2.2 Comparison Against Other Parsers (`package.json`, 10,000 Iterations on Isolated CPU 1)

| Parser | Implementation Type | Median Time (10k iter) | Min Time | Stddev (CV%) | Relative to `par-gen` (Combined) |
| :--- | :--- | ---: | ---: | ---: | ---: |
| `JSON.parse` (V8 Native C++) | Hand-written C++ | 54.29 ms | 54.20 ms | 0.05 ms *(0.10%)* | **0.77x** (`par-gen` is within **1.29x** of native C++!) |
| **`par-gen` (Combined Opt 1–4)** | **Generated JS LR(1)** | **70.31 ms** | **70.20 ms** | **0.06 ms *(0.09%)*** | **1.00x (Baseline JS Reference)** |
| `par-gen` (`main` @ `0f71cef`) | Generated JS LR(1) | 103.35 ms | 103.31 ms | 0.08 ms *(0.07%)* | 1.47x slower |
| `acorn` (`v7.3.1` / `v8.2.4`) | Hand-written JS | 285.21 ms | 283.75 ms | 0.71 ms *(0.25%)* | **4.06x slower** |
| `@babel/parser` (`v7.17.3`) | Hand-written JS | 334.61 ms | 333.62 ms | 1.41 ms *(0.42%)* | **4.76x slower** |
| `typescript` (`ts.parseJsonText`) | Hand-written JS | 476.67 ms | 476.06 ms | 0.89 ms *(0.19%)* | **6.78x slower** |
| `json5` (`v2.2.0`) | Hand-written JS | 1333.20 ms | 1322.67 ms | 5.81 ms *(0.44%)* | **18.96x slower** |

---

## 3. Active Hypotheses & Root-Cause Analysis

### Hypothesis 1: Bit-Pack `actionsTable` & Eliminate `reducerStates` (86 KiB) + `actions` Heap Objects
- **Root Cause (Parser Memory & V8 IR):**
  - In [`packages/codegen/lib/javascript.js`](file:///workspaces/par-gen/packages/codegen/lib/javascript.js#L242-L381), `reducerStates` is a 3D `Uint8Array(86016)` (`lookahead * states * symbols + currentState * symbols + action.symbol`) that exceeds the 32 KiB L1d cache by nearly 3x despite storing only ~400 non-zero entries.
  - `actions` is an array of 385 heap objects (`{ op, state, symbol }`). Every iteration of `while (true)` executes `const action = actions[actionLookup]`, which in TurboFan assembly emits a heap pointer load, hidden-class `Map` check, and `Smi` untagging shifts (`sarq reg, 32`) for `action.op`, `action.state`, and `action.symbol`.
- **Mechanism:**
  - Since `actionsTable` is already indexed by `currentState * parserSymbols.length + lookahead`, every cell uniquely determines `(op, targetStateOrSymbol, stackItemsToReduce)`.
  - Packing these three fields into a single integer in `actionsTable` (`op` in bits 0–1, `state`/`symbol` in bits 2–9, `stackItemsToReduce` in bits 10–15 of a `Uint16Array`, or `Uint32Array` for large grammars) completely eliminates `reducerStates` (86 KiB) and `actions` (385 heap objects).
  - Parser lookup tables shrink from **~91.4 KiB to 5.4 KiB**, fitting inside L1d alongside the lexer table.

### Hypothesis 2: Fix Hopcroft DFA Minimization `initialPartitions` in `@par-gen/lexer`
- **Root Cause (Lexer Cache Footprint):**
  - In [`packages/lexer/lib/lexer.js`](file:///workspaces/par-gen/packages/lexer/lib/lexer.js#L96-L101), `createOptimalDFA` constructs `initialPartitions` with `...dfa.description.finals.map((final) => [final])`.
  - Placing every accepting DFA state into its own singleton partition `[final]` prevents Hopcroft's algorithm ([`packages/dfa/lib/hopcroft.js`](file:///workspaces/par-gen/packages/dfa/lib/hopcroft.js)) from ever merging equivalent final states that produce the same token.
  - As a result, the generated JSON lexer has **102 states** (`Uint16Array(26112)` = **52.2 KiB**), spilling out of the 32 KiB L1d cache.
- **Mechanism:**
  - Group `dfa.description.finals` by their winning token UID (`final.uids[0]`) so all accepting states for the same token start in the same partition while remaining distinct from other tokens and contiguous at the start of `partitions` (`0..k-1`).
  - This shrinks the JSON lexer DFA from **102 states (52.2 KiB) to ~22 states (~11.3 KiB)**, fitting completely inside L1d.

### Hypothesis 3: Replace `successState / 256` with `successState >> 8` and `tokenIds` Array with `Uint8Array`
- **Root Cause (TurboFan Float64 Promotion & `PACKED_ELEMENTS` Check):**
  - In [`packages/codegen/lib/javascript.js`](file:///workspaces/par-gen/packages/codegen/lib/javascript.js#L148), `tokenIds[(successState / 256)]` uses floating-point division `/`. TurboFan types `successState` as `Float64` (`xmm0`) inside the hot `while (i < l)` loop (`vcvtqsi2sd xmm0, xmm15, r10`) and emits a `Float64 -> Int32` conversion with a precision/NaN deoptimization check upon loop exit.
  - Additionally, `const tokenIds = [0, 1, ..., undefined, ...]` contains `undefined` for non-final states, giving it a `PACKED_ELEMENTS` elements kind requiring a heap load and `Smi` tag check.
- **Mechanism:**
  - Use `successState >> 8` (keeping `successState` in a 32-bit general-purpose register) and store `tokenIds` as `new Uint8Array(...)` (or `Uint16Array` when token count > 255).

### Hypothesis 4: Direct Lexer Function Call for Single-Mode Grammars & Dead `tree` Store Removal
- **Root Cause (Call Overhead & Redundant Memory Writes):**
  - In [`packages/codegen/lib/javascript.js`](file:///workspaces/par-gen/packages/codegen/lib/javascript.js#L406-L422), grammars with a single lexer mode (`initial`) still push/pop `lexer._stack` on every `parse()` call and invoke the lexer through a mutable module-scoped `let nextToken` binding.
  - In `case 1: // reduce` ([`javascript.js`](file:///workspaces/par-gen/packages/codegen/lib/javascript.js#L652-L653)), `tree[tp + 1] = -1; tree[tp + 2] = -1;` write `0xffff` to `start` and `end` of internal non-terminal nodes on every reduction, even though `createProxy` never reads `tree[pointer + 1]` or `tree[pointer + 2]` when `nChildren > 0`.
- **Mechanism:**
  - Emit a direct call to `nextTokenInitial` (skipping `lexer.push` / `lexer.pop` and mutable `let nextToken`) when `Object.keys(lexerData).length === 1`, allowing TurboFan to inline `nextTokenInitial` directly into `parse()`.
  - Remove the two dead stores `tree[tp + 1] = -1` and `tree[tp + 2] = -1` on `reduce`.

---

## 4. V8 Ignition, TurboFan Assembly & Statistical Profiler Analysis (Combined Opt 1–4)

### 4.1 V8 Statistical Tick Profile (`--prof` / `--prof-process`, 500k `package.json` Iterations)
| Category / Symbol | Ticks | Share of Total | Notes |
| :--- | ---: | ---: | :--- |
| **`JS: *parse` (TurboFan-compiled)** | **5,144** | **97.6%** | Contains inlined `next()`, `isBuffer()`, and `createProxy()` |
| **V8 Garbage Collector (GC)** | **39** | **0.7%** | Driven almost entirely by `createProxy` closure/Proxy allocations on return |
| **`Builtin: ProxyConstructor` + `JSBuiltinsConstructStub`** | **14** | **0.3%** | `new Proxy(...)` C++ constructor stub at end of `parse()` |
| **`Builtin: LoadGlobalIC` / `LoadGlobalICTrampoline`** | **4** | **0.1%** | Global `Buffer` lookup in `Buffer.isBuffer(input)` prologue |
| **Shared Libraries (`node` / `libc`)** | **80** | **1.5%** | Runtime housekeeping |
| **Deoptimizations (`--trace-deopt`)** | **0** | **0.0%** | Only 1 one-time OSR entry bailout when tiering up from Maglev to TurboFan |

### 4.2 TurboFan Inlining & Machine Code Audit (`--trace-turbo-inlining --print-opt-code`)
1. **Full Inlining Achieved (`Budget used: 440/920`):**
   - `next` (`nextTokenInitial`, bytecode size 186) is inlined at **both** call sites inside `parse()` (initial lookahead `#57` and inside `case 0: // shift` `#303`).
   - `createProxy` (bytecode size 68) and `Buffer.isBuffer` are also inlined directly into `parse()`.
2. **4x Loop Unrolling of the Inner Lexer Loop (`+0x800` to `+0x9a7`):**
   - TurboFan automatically unrolls `while (i < l)` 4x inside `parse()`.
   - Each unrolled byte step executes 14 instructions: bounds check `i < l`, `movzxbl` byte load from `input`, `addl` state offset, bounds check `< 0x2800` (`10240`), `movzxwl` transition load from constant address `0x162a1f70` (`table`), and two state comparisons (`cmpl state, 0xf00; jna` for final states and `cmpl state, 0x2500; jz` for error trap state).
3. **Zero `Float64` (`xmm`) Instructions:**
   - Replacing `successState / 256` with `successState >> 8` (`sarl rcx, 8` at `+0x48a` and `+0xa4b`) completely eliminated `vcvtqsi2sd` and `vcvttsd2si` (`xmm0`).
4. **Shift/Reduce Dispatch Reduced to Bitwise Register Ops (`+0x598` to `+0xc0e`):**
   - `actionsTable` load (`movzxwl r12, [r12*2 + const_base]`) is followed immediately by `andl rdi, 0x3` (`actionLookup & 3`), `sarl rdi, 2` (`actionLookup >> 2` on shift), and `sarl r15, 2; movzxbl r15, r15; sarl r12, 10` (`(actionLookup >> 2) & 0xff` and `actionLookup >> 10` on reduce).
   - Zero heap `Map` checks or `Smi` untagging shifts remain in the LR state dispatch.

---

## 5. Next-Generation Optimization Opportunities Identified in Assembly

Inspecting the 4,708-byte TurboFan disassembly of `parse()` line-by-line reveals 5 concrete low-level bottlenecks where further speedups lie:

### Opportunity A: Eliminate Module-Global `lexeme` Singleton Escapes (`+0x4a4`–`+0x52b` & `+0xa66`–`+0xad7`)
- **Assembly Evidence:** Even though `next()` is inlined into `parse()`, `const lexeme = { state: -1, start: -1, end: -1 }` is a module-scoped object in `lexer-initial.js`. Because `lexeme` escapes to module scope, TurboFan's Escape Analysis **cannot scalar-replace it**. On every single token (`+0xa66`–`+0xad7`), V8 executes:
  - `shlq r11, 32` (Smi-tag `state`) $\rightarrow$ `movq [r14+0x17], r11` (heap store to `lexeme.state`) $\rightarrow$ `movq r8, [r11+0x17]` (heap load from `lexeme.state`) $\rightarrow$ `sarq r8, 32` (Smi-untag)!
  - Same Smi-tag + heap store + stack spill (`movq [rbp-0x28], r15`) + heap load + Smi-untag for `lexeme.start` (`+0x617`–`+0x62c`) and `lexeme.end` (`+0x63d`–`+0x65a`)!
- **Fix:** Either inline the single-mode lexer directly or return/store token fields in unboxed registers / a shared `Uint32Array(3)` or local scalar variables so zero Smi tagging/untagging and zero heap object stores occur per token.

### Opportunity B: Hoist `proxyHandler` & Eliminate 6 Heap Allocations per `parse()` (`+0xc58`–`+0xe8d`)
- **Assembly Evidence:** At `+0xc58`–`+0xe8d` (115 instructions!), `createProxy(stream, tree, tp - 6)` allocates **7 heap objects** (`0x188` = 392 bytes bump-pointer allocated from `IsolateData::new_allocation_info_top_address()`) before calling `JSBuiltinsConstructStub`:
  1. `FUNCTION_CONTEXT_TYPE` (`0x38` bytes) capturing `(stream, tree, pointer)`
  2. Target object `{}` (`0x38` bytes)
  3. Handler object `{ get, ownKeys, has, getOwnPropertyDescriptor }` (`0x38` bytes)
  4. Four fresh `JSFunction` closures (`4 * 0x38` bytes) for `get`, `ownKeys`, `has`, `getOwnPropertyDescriptor`!
- **Fix:** Store `{ stream, tree, pointer }` on the Proxy target object itself (or a lightweight `NodeView` class) and hoist the Proxy handler to a single static module-level `const proxyHandler = { get(target, prop, receiver) { ... }, ... }`. This eliminates the `FUNCTION_CONTEXT_TYPE`, the handler object, and all 4 closure allocations on every `parse()` call and every child `.items` traversal.

### Opportunity C: Remove Dead `tree[tp + 4] = 0` Store & Bounds Check on `shift` (`+0x686`–`+0x697`)
- **Assembly Evidence:** In `case 0: // shift`, after setting `tree[tp + 3] = 0` (`nChildren = 0`), lines `+0x686`–`+0x697` execute `leal r15, [rsi+0x4]; cmpl r15, 0x8000; jnc deopt; movw [r15*2+0x162e3f50], 0x0` (`tree[tp + 4] = 0`).
- **Why It Is Dead:** `createProxy` only reads `tree[pointer + 4]` (`firstChild`) inside `case "items":`, after checking `if (nChildren === 0) return undefined;`. For leaf nodes (`nChildren === 0`), `tree[tp + 4]` is never read.

### Opportunity D: Replace `Buffer.isBuffer(input)` Prologue with `typeof input === "string"` (`+0x21`–`+0x187`)
- **Assembly Evidence:** Lines `+0x21`–`+0x187` (62 instructions!) call `LoadGlobalICTrampoline` to load the global `Buffer` constructor, check its `isBuffer` method map, and run a 4x-unrolled prototype-chain walk (`cmpq r9, FastBuffer; movq r9, [r15+0x17]`) on every `parse()` invocation.
- **Fix:** Since `@param {Uint8Array | string} input` only accepts a `Uint8Array`/`Buffer` or `string`, checking `typeof input === "string" ? Buffer.from(input) : input` compiles to a 2-instruction `Smi` + `InstanceType` check with zero global IC call and zero prototype-chain walk.

### Opportunity E: Reorder DFA States for a Single-Branch Inner Lexer Loop (`+0x846`–`+0x860`)
- **Assembly Evidence:** Inside the 4x-unrolled lexer loop (`+0x846`–`+0x860`), every byte executes **two** conditional branches on `state`:
  ```asm
  cmpl r11, 0xf00    ; is state <= lastFinalState (3840)?
  jna  record_match
  cmpl r11, 0x2500   ; is state === errorState (9472)?
  jz   break_loop
  ```
- **Fix:** Place `errorState` at index `0`, `finals` at `256 .. K`, and `nonFinals` at `> K`. Then a single comparison `if (state <= K)` handles both `final` and `error` (`if (state === 0) break; successState = state; successPos = i;`), removing one conditional branch from every non-final byte transition.

---

## 6. Evaluation of Earlier Branch Ideas & Architectural Candidates

| Candidate / Branch | Mechanism | Verdict & Priority |
| :--- | :--- | :--- |
| **`origin/replace-tree-proxy` (Class AST Node vs. `Proxy`)** | Replace `new Proxy({}, { get... })` with a `Node` class using prototype getters (`name`, `start`, `end`, `value`, `items`). | **High Priority (Tier 1 — Opportunity B):** Confirmed by assembly (`+0xc58`–`+0xe8d`) to eliminate 6 heap allocations (4 closures + context + handler) and the C++ `ProxyConstructor` stub on every `parse()` and `.items` access. |
| **`origin/parse-buffer-api` (Fast Input Check)** | Avoid `Buffer.isBuffer` / `Buffer.from` overhead when `Uint8Array` is passed. | **High Priority (Tier 1 — Opportunity D):** Confirmed by assembly (`+0x21`–`+0x187`) that `Buffer.isBuffer` emits 62 instructions + `LoadGlobalICTrampoline` + prototype walk. Use `typeof input === "string" ? Buffer.from(input) : input`. |
| **Inlined Single-Mode Lexer / Unboxed `lexeme` (Opportunity A)** | Inline `nextTokenInitial` logic or return scalar/unboxed token values instead of mutating module-global `lexeme`. | **High Priority (Tier 1 — Opportunity A):** Eliminates 3x Smi-tag + 64-bit heap store + 64-bit heap load + Smi-untag on every token. |
| **Single-Branch Lexer State Layout (Opportunity E)** | Order DFA states as `[errorState (0), ...finals, ...nonFinals]` so `state <= lastFinal` covers both final and error states. | **Medium-High Priority (Tier 2 — Opportunity E):** Saves 1 conditional branch per input byte inside the 4x-unrolled lexer loop. |
| **`origin/dfa-compression` (Alphabet Equivalence Classes)** | Compress 256-column ASCII table into $K$ equivalence classes via `ec[input[i]]`. | **Hold / Large-Grammar Only:** Hopcroft partition grouping (Opt 2) already shrank JSON's lexer table from 52.2 KiB to 20.0 KiB (fitting in 32 KiB L1d). Adding an extra dependent load `ec[input[i]]` per byte hurts L1-resident lexers, though useful when `states > 120`. |
| **`origin/lexer-bin` (Base64 Binary Table Initialization)** | Decode `table` from a base64 string instead of `table[i] = v` statements. | **Startup / Bundle Size Only:** Reduces generated `.js` file size and V8 initial script parse time, but does not change hot-loop execution speed. |
| **`origin/type-refinement`** | Stricter TypeScript JSDoc types across generator packages. | **Code Quality:** Orthogonal to runtime speed; good for maintainability. |



