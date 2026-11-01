# Performance Findings, Hypotheses & Current Measurements

> [!IMPORTANT]
> **Living Document Policy:** This document contains **only current, verified measurements and active architectural findings**. Do not append historical logs, obsolete numbers, or superseded tables—update tables in place when a change becomes the new baseline.

---

## 1. Benchmark Environment Specification

| Parameter | Value |
| :--- | :--- |
| **Cloud / Instance** | AWS EC2 `c7a.large` Spot (`eu-central-1b`) |
| **CPU** | AMD EPYC 9R14 (Zen 4 / Genoa), 3.7 GHz sustained, `ThreadsPerCore: 1` (no SMT) |
| **Cache Hierarchy (per core)** | 32 KiB L1d, 32 KiB L1i, 1 MiB L2, 8 MiB L3 |
| **OS / Kernel** | Amazon Linux 2023 (`Linux 6.1.163-186.299.amzn2023.x86_64`), ASLR disabled (`randomize_va_space=0`) |
| **Core Isolation** | All OS PIDs, IRQs & kernel workqueues pinned to CPU 0; benchmark pinned to CPU 1 (`nice -n -20 taskset -c 1`) |
| **Runtime** | Node.js `v20.18.0` (V8 `11.3.244.8`) |
| **Workloads** | 1. `package.json` (1,073 bytes, 100k & 10k iterations, 11 trials)<br>2. Short JSON (`68` bytes, 1M iterations, 11 trials) |

---

## 2. Current Verified Measurements

### 2.1 `par-gen` Optimization Progression (Isolated CPU 1)

| Configuration | Lexer Only (`package.json`, 100k) | Full Parse (`package.json`, 100k) | Short JSON (`68B`, 1M) | Full Parse (`package.json`, 10k) | Table Footprint / `parse()` Code Size |
| :--- | ---: | ---: | ---: | ---: | ---: |
| **Baseline (`origin/main` @ `0f71cef`)** | 364.73 ms *(CV 1.29%)* | 964.93 ms *(CV 0.18%)* | 1008.72 ms *(CV 0.02%)* | 96.43 ms *(CV 0.18%)* | 143.6 KiB / 5,120 B |
| **Round 1 Combined (Opt 1–4 @ `0071c90`)** | 313.15 ms *(CV 0.82%, **-14.1%**)* | 683.30 ms *(CV 0.25%, **-29.2%**)* | 638.30 ms *(CV 0.01%, **-36.7%**)* | 68.20 ms *(CV 0.22%, **-29.3%**)* | 30.8 KiB / 4,708 B |
| **+ Opt A Only:** Unbox `lexeme` via Escape Analysis + pre-loop destructuring | 274.71 ms *(CV 1.07%, **-12.3% vs R1**)* | 654.56 ms *(CV 0.26%, **-4.2% vs R1**)* | 627.02 ms *(CV 0.03%, **-1.8% vs R1**)* | 65.37 ms *(CV 0.23%, **-4.1% vs R1**)* | 30.8 KiB / 4,180 B |
| **+ Opt B Only:** Hoist `proxyHandler` to module scope | 313.71 ms *(CV 0.65%)* | 680.06 ms *(CV 0.27%, **-0.5% vs R1**)* | 610.91 ms *(CV 0.03%, **-4.3% vs R1**)* | 68.11 ms *(CV 0.34%)* | 30.8 KiB / 3,420 B |
| **+ Opt C Only:** Remove dead `tree[tp + 4] = 0` on `shift` | 312.82 ms *(CV 0.90%)* | 683.08 ms *(CV 0.22%)* | 640.57 ms *(CV 0.01%)* | 68.21 ms *(CV 0.17%)* | 30.8 KiB / 4,680 B |
| **+ Opt D Only:** `typeof input === "string"` prologue | 314.66 ms *(CV 0.56%)* | 682.13 ms *(CV 0.18%)* | 629.38 ms *(CV 0.02%, **-1.4% vs R1**)* | 68.13 ms *(CV 0.22%)* | 30.8 KiB / 4,512 B |
| **+ Opt E Only:** Remap `errorState` to `0` (single-branch lexer loop) | 301.31 ms *(CV 0.66%, **-3.8% vs R1**)* | 677.23 ms *(CV 0.25%, **-0.9% vs R1**)* | 633.66 ms *(CV 0.02%, **-0.7% vs R1**)* | 67.62 ms *(CV 0.26%, **-0.9% vs R1**)* | 30.8 KiB / 4,612 B |
| **Combined (Round 1 + Opt A+B+C+D+E @ `HEAD`)** | **262.48 ms** *(CV 0.96%, **-28.0% vs `main`**)* | **624.78 ms** *(CV 0.22%, **-35.3% vs `main`**)* | **555.50 ms** *(CV 0.01%, **-44.9% vs `main`**)* | **62.47 ms** *(CV 0.14%, **-35.2% vs `main`**)* | **30.8 KiB / 2,840 B** |

### 2.2 Comparison Against Other Parsers (`package.json`, 10,000 Iterations on Isolated CPU 1)

| Parser | Implementation Type | Median Time (10k iter) | Min Time | Stddev (CV%) | Relative to `par-gen` (`HEAD`) |
| :--- | :--- | ---: | ---: | ---: | ---: |
| `JSON.parse` (V8 Native C++) | Hand-written C++ | 53.49 ms | 53.46 ms | 0.05 ms *(0.10%)* | **0.86x** (`par-gen` is within **1.17x** / `0.90 µs` of native C++!) |
| **`par-gen` (`HEAD`, Opt 1–4 + A–E)** | **Generated JS LR(1)** | **62.47 ms** | **62.31 ms** | **0.09 ms *(0.14%)*** | **1.00x (Baseline JS Reference)** |
| `par-gen` (Round 1 Combined @ `0071c90`) | Generated JS LR(1) | 68.20 ms | 67.97 ms | 0.15 ms *(0.22%)* | 1.09x slower |
| `par-gen` (`origin/main` @ `0f71cef`) | Generated JS LR(1) | 96.43 ms | 96.14 ms | 0.18 ms *(0.18%)* | 1.54x slower |
| `acorn` (`v8.2.4`) | Hand-written JS | 285.58 ms | 285.32 ms | 0.49 ms *(0.17%)* | **4.57x slower** |
| `@babel/parser` (`v7.17.3`) | Hand-written JS | 328.13 ms | 325.10 ms | 3.41 ms *(1.04%)* | **5.25x slower** |
| `typescript` (`ts.parseJsonText`) | Hand-written JS | 496.82 ms | 495.59 ms | 2.18 ms *(0.44%)* | **7.95x slower** |
| `json5` (`v2.2.0`) | Hand-written JS | 1338.61 ms | 1327.08 ms | 8.85 ms *(0.66%)* | **21.43x slower** |

---

## 3. Verified Optimizations & Root-Cause Analysis

### 3.1 Round 1: Cache-Resident Tables, Bit-Packed Actions & Direct Single-Mode Lexing
1. **Bit-Pack `actionsTable` & Eliminate `reducerStates` (86 KiB) + `actions` Heap Objects (`7eb470f`):**
   - `reducerStates` was a 3D `Uint8Array(86016)` exceeding the 32 KiB L1d cache by 2.7x, and `actions` was an array of 385 heap objects (`{ op, state, symbol }`) requiring pointer chasing, `Map` checks, and `Smi` untagging on every LR step.
   - Packing `op` (bits 0–1), `state`/`symbol` (bits 2–9), and `stackItemsToReduce` (bits 10–15) into `actionsTable` (`Uint16Array`, or `Uint32Array` for large grammars) shrank parser lookup tables from **91.4 KiB to 10.8 KiB** (`actionsTable` + `gotoTable`) and reduced LR dispatch to pure bitwise register operations.
2. **Hopcroft DFA `initialPartitions` Grouped by Token UID (`b262cec`):**
   - [`packages/lexer/lib/lexer.js`](file:///workspaces/par-gen/packages/lexer/lib/lexer.js#L96-L110) previously placed every accepting DFA state into a singleton partition `[final]`, preventing Hopcroft's algorithm from merging equivalent accepting states for the same token.
   - Grouping `finals` by winning token UID (`final.uids[0]`) shrank the JSON lexer DFA from **102 states (52.2 KiB) to 39 states (20.0 KiB)**, bringing total lexer + parser tables (`30.8 KiB`) inside the **32 KiB L1d cache**.
3. **Bitwise Shift `successState >> 8` & `tokenIds` `Uint8Array` (`5ecac6d`):**
   - Replaced floating-point division `successState / 256` with `successState >> 8` and `PACKED_ELEMENTS` array `tokenIds` with `Uint8Array`, eliminating `vcvtqsi2sd`/`vcvttsd2si` (`xmm0`) and heap `Smi` checks.
4. **Direct Single-Mode Lexer Call & Dead `reduce` Tree Stores Removal (`2ad7bc7`):**
   - Bypassed `lexer.push`/`lexer.pop` and mutable `let nextToken` when `Object.keys(lexerData).length === 1` so TurboFan inlines `nextTokenInitial` directly into `parse()`, and removed dead `tree[tp + 1] = -1; tree[tp + 2] = -1` stores on `reduce`.

### 3.2 Round 2: Instruction-Level TurboFan Assembly Optimizations
5. **Unbox Lexer Token Return via Escape Analysis + Pre-Loop Destructuring (Opt A, `89a36a0`):**
   - **Root Cause:** Returning the module-scoped singleton `lexeme` prevented TurboFan's Escape Analysis from scalar-replacing it (`lexeme` escaped to module scope). Even when returning a fresh `{ state, start, end }` object, reading `result.start` and `result.end` inside `case 0: // shift` after potentially multiple `reduce` iterations forced `result` into a loop-header `Phi(result_entry, result_shift)`, which prevents TurboFan's `EscapeAnalysis` from unboxing the object!
   - **Fix:** Return a fresh object `{ state: tokenIds[successState >> 8], start: offset, end: successPos }` in [`javascript.js`](file:///workspaces/par-gen/packages/codegen/lib/javascript.js#L156-L160) AND immediately destructure `let lookahead = result.state; let lookaheadStart = result.start; let lookaheadEnd = result.end;` before the `while (true)` loop and inside `case 0: // shift`. Because the returned object never enters a loop `Phi`, TurboFan's `EscapeAnalysis` scalar-replaces it completely: **zero heap allocations, zero Smi-tagging shifts, and zero memory loads/stores per token**.
6. **Hoist `proxyHandler` to Module Scope (Opt B, `2e4f60b`):**
   - **Root Cause:** `createProxy` previously allocated 7 heap objects (392 bytes: `FUNCTION_CONTEXT_TYPE`, target `{}`, handler `{...}`, and 4 `JSFunction` closures) on every `parse()` return and `.items` access.
   - **Fix:** Hoisting `proxyHandler` to module scope and storing `{ stream, tree, pointer }` on the target object in [`javascript.js`](file:///workspaces/par-gen/packages/codegen/lib/javascript.js#L430-L506) eliminates the `FUNCTION_CONTEXT_TYPE`, the handler object, and all 4 closure allocations, shrinking `parse()` machine code by ~1,280 bytes and cutting short-JSON parse time by **-4.3%** (and **-13.0%** combined).
7. **Remove Dead `tree[tp + 4] = 0` Leaf Store on `shift` (Opt C, `7392835`):**
   - **Root Cause:** `tree[tp + 4]` (`firstChild`) is never read when `tree[tp + 3]` (`nChildren`) is `0`. Removing `tree[tp + 4] = 0` eliminates a bounds check and 16-bit memory store on every shifted token.
8. **Fast `typeof input === "string"` Input Prologue (Opt D, `7392835`):**
   - **Root Cause:** `Buffer.isBuffer(input)` emitted 62 instructions including a `LoadGlobalIC` lookup for `Buffer` and a 4x-unrolled prototype walk.
   - **Fix:** `typeof input === "string" ? Buffer.from(input) : input` compiles to a 4-instruction `Smi` + `InstanceType == SeqOneByteString` check with zero global IC lookups.
9. **Remap `errorState` to `0` for Single-Branch Inner Lexer Loop (Opt E, `cd15ed6`):**
   - **Root Cause:** The 4x-unrolled lexer loop previously executed two conditional branches per byte (`if (state <= lastFinal)` and `else if (state === errorState) break`).
   - **Fix:** Remapping `errorState -> 0` and shifting states `< errorState` by `+256` places `errorState` at `0`, `finals` at `256 .. K`, and `nonFinals` at `> K`. Each unrolled byte step now executes a single `cmpl state, K; ja next_byte` for non-final states, and final states fall straight through `jz break` with **zero taken-branch BTB penalties**.

---

## 4. Rejected Hypotheses (Tested & Discarded)

| Hypothesis | Measured Impact (100k `package.json`) | Why It Regressed |
| :--- | :--- | :--- |
| **Merge `gotoTable` into `actionsTable` (Opt F)** | `683.30 ms` $\rightarrow$ `722.78 ms` (**+5.8% slower** alone; `624.78 ms` $\rightarrow$ `640.55 ms` combined) | Total tables (`30.8 KiB`) already fit in the 32 KiB L1d cache, so merging saves zero L1d misses. Meanwhile, sharing one table pointer across both `while (true)` dispatch and `case 1: // reduce` extends `actionsTable`'s register live range and shifts `symbol` indices by `+nTokens`, adding register pressure in the hot loop. |
| **Keep `result` Object Alive Across `reduce` Loop Without Pre-Destructuring** | Prevented Escape Analysis unboxing in `parse()` | When `result.start` / `result.end` are read after `while (true)` loop merges, `result` becomes a loop-carried `Phi` node and TurboFan materializes a 32-byte `JSObject` allocation on every token. Immediate scalar destructuring (`lookahead`, `lookaheadStart`, `lookaheadEnd`) solved this completely. |

---

## 5. V8 TurboFan Assembly Audit & Isolate Protector Findings (`HEAD`)

### 5.1 Current Machine Code Footprint (`parse()` with Inlined `next()` and `createProxy()`)
- **Total Optimized Machine Code Size:** **`2,840 bytes`** on Node v20 / V8 11.3 (down **-39.7%** from `4,708 bytes` in Round 1 and `-44.5%` from `5,120 bytes` on `origin/main` — comfortably < 9% of the 32 KiB L1i cache).
- **Prologue (`+0x00`–`+0x66`):** 4 instructions (`testb rcx, 1; jz; movzwl rdi, [rcx-1]; cmpw rdi, 0x80` instance-type check) for `typeof input === "string"`, bypassing `Buffer.isBuffer` completely.
- **4x Unrolled Inner Lexer Loop (`+0x295`–`+0x3e0`):**
  - 13 instructions per byte step.
  - Non-final transitions take 1 macro-fused branch (`cmpl rbx, 0x1000; ja next_byte`).
  - Final transitions execute 2 fall-through (not-taken) branches (`ja` not taken, `testl rbx, rbx; jz` not taken) followed by `movl` register moves (`successState = state; successPos = i`) with zero unconditional jumps.
- **Zero Per-Token Object Allocations or Smi Tagging:**
  - `lookahead`, `lookaheadStart`, and `lookaheadEnd` remain in 32-bit general-purpose registers across `nextTokenInitial` and `parse()`.
- **Return Path (`createProxy` Inlined):**
  - Allocates only the lightweight target `{ stream, tree, pointer }` and invokes `ProxyConstructor` with the static module-scoped `proxyHandler`.

### 5.2 Critical V8 Discovery: `ArrayBufferDetachingProtector` Invalidation via Node ESM `cjs-module-lexer`
- **Observation:** Importing large CommonJS packages (`acorn`, `@babel/parser`, `typescript`) via standard ES module `import` statements in Node.js v20 slowed `par-gen` down by ~18% (`624 ms` $\rightarrow$ `744 ms`) and bloated `parse()` from `2,840` to `3,544` bytes in that process, even before calling the other parsers.
- **Root Cause (Proven via `--trace-deopt-verbose` & Assembly Diff):**
  - When Node.js v20 loads an `import` of a CommonJS package whose source exceeds the initial Wasm buffer of `cjs-module-lexer`, `cjs-module-lexer` calls `WebAssembly.Memory.prototype.grow()`.
  - In V8 11.3, `WebAssembly.Memory.prototype.grow()` detaches the previous `JSArrayBuffer`, which invalidates V8's Isolate-wide `ArrayBufferDetachingProtector`.
  - Once `ArrayBufferDetachingProtector` is invalidated, TurboFan can no longer assume backing stores of `Uint8Array`/`Uint16Array` (`input`, `table`, `tokenIds`, `actionsTable`, `gotoTable`, `stack`, `tree`) remain attached, and inserts `movq rdi, [rbp - offset]; testb [rdi + 0x3f], 0x4; jnz deopt` (`CheckArrayBufferNotDetached`) on **every single `TypedArray` access** in the hot loop!
- **Resolution:** Loading CJS comparison libraries via `createRequire(import.meta.url)` bypasses `cjs-module-lexer` Wasm `memory.grow()`, preserving `ArrayBufferDetachingProtector` across the Isolate.
