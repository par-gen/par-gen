# Performance Findings, Hypotheses & Current Measurements

> [!IMPORTANT]
> **Living Document Policy:** This document contains **only current, verified measurements and active architectural findings**. Do not append historical logs, obsolete numbers, or superseded tables—update tables in place when a change becomes the new baseline.

---

## 1. Benchmark Environment Specification

| Parameter | Value |
| :--- | :--- |
| **Cloud / Instance** | AWS EC2 `c7a.large` Spot (`eu-central-1`, profile `infra-playground-adm`) |
| **CPU** | AMD EPYC 9R14 (Zen 4 / Genoa), 3.7 GHz sustained, `ThreadsPerCore: 1` (no SMT) |
| **Cache Hierarchy (per core)** | 32 KiB L1d, 32 KiB L1i, 1 MiB L2, 8 MiB L3 |
| **OS / Kernel** | Amazon Linux 2023 (`Linux 6.1.x.amzn2023.x86_64`), ASLR disabled (`randomize_va_space=0`) |
| **Core Isolation** | All OS PIDs, IRQs & kernel workqueues pinned to CPU 0; benchmark pinned to CPU 1 (`nice -n -20 taskset -c 1`) |
| **Runtime** | **Node.js `v26.13.0` Active LTS ("Lithium", V8 `14.6.202.34-node.40` with Turboshaft)** |
| **Workloads** | 1. Short JSON (`67`–`68` bytes, 1M iterations)<br>2. `package.json` (`1,841` bytes, `347` tokens, 100k & 200k iterations)<br>3. `package-lock.json` (`494,990` bytes, `67,034` tokens, `112,667` CST nodes, 200 & 500 iterations)<br>4. RegExp Corpus (`8` regexes, 10k iterations = 80k parses) |

---

## 2. Current Verified Measurements (Node.js `v26.13.0` / V8 `14.6.202.34`)

### 2.1 `par-gen` Optimization Progression Across All Tracks (Isolated CPU 1)

| Configuration | Mode | Full Parse (`package.json`, 100k) | Short JSON (`67B`, 1M) | Large File (`package-lock.json` `495 KB`, 200 iter) | CST Walk (`package.json`, 2k walks) | Parser States / Tables |
| :--- | :--- | ---: | ---: | ---: | ---: | ---: |
| **`origin/main` (Initial Baseline)** | `PreserveWS` | 964.93 ms | 1,008.72 ms | *Overflow (> 64 KiB)* | — | 84 states / 143.6 KiB |
| **Round 2 Baseline (`7f611fe`)** | `PreserveWS` | 601.85 ms | 537.70 ms | *Overflow (> 64 KiB)* | — | 84 states / 30.8 KiB |
| **Track 1 Baseline (`c910fc6`)** | `PreserveWS` | 510.36 ms *(min 508.55)* | 477.35 ms *(min 476.13)* | *Overflow (> 64 KiB)* | — | 84 states / 30.8 KiB |
| **+ Tracks A + B + C (`65144e6`)** | `PreserveWS` | 467.93 ms *(min 465.85)* | 330.99 ms *(min 328.65)* | *Overflow (> 64 KiB)* | 305.50 ms | 36 states / 26.9 KiB |
| **+ Track D (`b3611d3`, Compact Dead-End Lexer)** | `PreserveWS` | 465.33 ms *(min 463.55)* | 302.22 ms *(min 300.69)* | *Overflow (> 64 KiB)* | 305.50 ms | 36 states / 22.8 KiB |
| **+ Track G + H (`HEAD`, `b3-tpbits20-end22` + Fast `Proxy` Walk)** | **`PreserveWS` (Default)** | **474.39 ms** *(min **473.94**)* | **328.98 ms** *(min **326.92**)* | **242.92 ms** *(min **242.62**, **408 MB/s**)* | **143.01 ms** *(min **142.76**, **2.14x faster**)* | **36 states / 22.8 KiB** |
| **+ Track H (`v5-cstclass`: Monomorphic `CstNode` Class)** | `PreserveWS` | 481.45 ms *(min 481.18)* | **304.61 ms** *(min **301.98**)* | 248.32 ms *(min 248.20)* | **33.31 ms** *(min **33.29**, **9.17x faster**)* | 36 states / 22.8 KiB |
| **+ Track W (`SkipWS`, 16-bit span `w3`)** | `SkipWS` (<= 64 KB) | **412.58 ms** *(min **410.64**)* | **273.95 ms** *(min **270.97**)* | *Overflow (> 64 KiB)* | — | 22 states / 17.3 KiB |
| **+ Track W + G (`SkipWS` + `b8-tpbits20-end22`)** | **`SkipWS` (`--skip WS`)** | **428.86 ms** *(min **428.68**)* | **343.68 ms** *(min **341.69**)* | **223.41 ms** *(min **222.68**, **443 MB/s**)* | **114.50 ms** *(min **114.49**, **2.67x faster**)* | **22 states / 17.3 KiB** |

### 2.2 Hardware Performance Counters (`perf stat`, Isolated CPU 1)

#### A. `package.json` (`1,841` bytes, 200,000 Parses = `368.2 MB`)

| Variant | Mode | CPU Cycles (Per Parse) | Instructions Retired (Per Parse) | IPC | Branches Executed (Per Parse) | Branch Misses |
| :--- | :--- | ---: | ---: | ---: | ---: | ---: |
| **Round 2 Baseline (`7f611fe`)** | `PreserveWS` | `4,404.5M` (`22,023`) | `20,158.4M` (`100,792`) | `4.58` | `5,007.6M` (`25,038`) | `2,002,760` (`0.04%`) |
| **Track 1 Baseline (`c910fc6`)** | `PreserveWS` | `3,908.3M` (`19,542`) | `18,593.7M` (`92,969`) | `4.76` | `4,490.9M` (`22,454`) | `2,080,683` (`0.05%`) |
| **Track D (`b0-head`, 16-bit span)** | `PreserveWS` | `3,600.0M` (`18,000`) | `15,915.8M` (`79,579`) | `4.42` | `4,024.0M` (`20,120`) | `1,903,872` (`0.05%`) |
| **Track G (`HEAD`, `b3-tpbits20-end22`, 4 MB span)** | **`PreserveWS`** | **`3,655.1M` (`18,276`)** | **`16,153.4M` (`80,767`)** | **`4.42`** | **`4,053.1M` (`20,266`)** | **`1,944,800` (`0.05%`)** |
| **Track W + G (`b8-skipws-tpbits20-end22`)** | **`SkipWS`** | **`3,332.9M` (`16,665`)** | **`13,729.0M` (`68,645`)** | **`4.12`** | **`3,624.7M` (`18,123`)** | **`2,200,199` (`0.06%`)** |

#### B. `package-lock.json` (`494,990` bytes, 500 Parses = `247.5 MB`, `56.33M` CST Nodes in `PreserveWS`)

| Variant | Mode | CPU Cycles (Per Parse / Per Byte) | Instructions Retired (Per Parse / Per Byte) | IPC | Branches Executed (Per Parse) | Branch Misses |
| :--- | :--- | ---: | ---: | ---: | ---: | ---: |
| **`b3-tpbits20-end22` (`HEAD`)** | **`PreserveWS`** | **`2,417.6M` (`4.84M` / `9.77` cyc/B)** | **`8,589.0M` (`17.18M` / `34.7` insn/B)** | **`3.55`** | **`2,258.1M` (`4.52M`)** | **`7,469,323` (`0.33%`)** |
| **`b8-skipws-tpbits20-end22`** | **`SkipWS`** | **`2,223.3M` (`4.45M` / `8.98` cyc/B)** | **`7,471.5M` (`14.94M` / `30.2` insn/B)** | **`3.36`** | **`2,064.1M` (`4.13M`)** | **`6,877,992` (`0.33%`)** |

### 2.3 Competitor Comparison Across Both Small (`package.json`, 10k iter) and Large (`package-lock.json`, 200 iter) Documents

| Parser | Implementation Type | CST / Trivia Fidelity | `package.json` (10k iter) | `package-lock.json` (`495 KB`, 200 iter = `99 MB`) | Relative on `package-lock.json` |
| :--- | :--- | :--- | ---: | ---: | :--- |
| `JSON.parse` (V8 Native C++) | Hand-written C++ | Lossy (JS Value Only, No AST/CST) | 40.97 ms | **216.54 ms** *(min 216.09 ms, **457 MB/s**)* | **0.89x** (`SkipWS` is within **1.03x**!) |
| **`par-gen` (`SkipWS`, `--skip WS`)** | **Generated JS LR(1) + CST** | **Syntactic CST (`72,633` nodes)** | **41.26 ms** *(42.89 ms w/ 4MB span)* | **223.41 ms** *(min **222.68 ms**, **443 MB/s**)* | **0.92x (`1.03x` of native C++!)** |
| **`par-gen` (`PreserveWS` `HEAD`, Default)** | **Generated JS LR(1) + Lossless CST** | **100% Lossless CST (`112,667` nodes)** | **46.53 ms** *(47.44 ms w/ 4MB span)* | **242.92 ms** *(min **242.62 ms**, **408 MB/s**)* | **1.00x (Baseline Lossless Reference)** |
| `@babel/parser` (`v7.17.3`) | Hand-written JS | AST (No `WS` Trivia Nodes) | 246.32 ms | 1,233.39 ms *(min 1,226.58 ms)* | **5.08x slower** |
| `typescript` (`ts.parseJsonText`) | Hand-written JS | CST with Trivia Accessors | 485.27 ms | 1,937.27 ms *(min 1,932.81 ms)* | **7.97x slower** |
| `acorn` (`v8.2.4`) | Hand-written JS | AST (No `WS` Trivia Nodes) | 240.70 ms | 2,081.57 ms *(min 2,040.37 ms)* | **8.57x slower** |
| `json5` (`v2.2.0`) | Hand-written JS | Lossy (JS Value Only) | 952.29 ms | 4,604.20 ms *(460.42 ms / 20 iter)* | **18.95x slower** |

### 2.4 `@par-gen/regexp` (Self-Bootstrapped Generated LR(1) Parser) vs. V8 Native C++ `new RegExp` & JS Competitors

Measured on isolated EC2 `c7a.large` CPU 1 across `8,000` regex parses per trial (`1,000` iterations × `8` regex patterns from `json.pargen`, `regexp.pargen`, and the test suite):

| Parser | Implementation | 8,000 RegExp Parses (Median / Min) | Per-Regex Latency | `perf stat` Instructions (`80k` Parses) | Relative Speed |
| :--- | :--- | ---: | ---: | ---: | :--- |
| **`@par-gen/regexp` (`Buffer`, `HEAD`)** | **Self-bootstrapped LR(1) (`49` states, compact 2-mode lexer)** | **`4.61 ms`** *(min **`4.52 ms`**)* | **`576 ns` / regex (`1.74M`/sec)** | **`4,803.3M` (`60,042` insn/regex)** | **`1.00x` (Baseline Fastest Parser)** |
| **`@par-gen/regexp` (`string`, `HEAD`)** | **Self-bootstrapped LR(1) (`Buffer.from` included)** | **`5.28 ms`** *(min **`5.15 ms`**)* | **`660 ns` / regex (`1.52M`/sec)** | — | **`1.15x`** |
| **`@par-gen/regexp` (`Unseen Buffer`s)** | **Self-bootstrapped LR(1) (`80k` distinct buffers)** | **`5.96 ms`** *(min **`5.95 ms`**)* | **`745 ns` / regex (`1.34M`/sec)** | — | **`1.29x`** |
| **`V8 Native new RegExp` (Uncached C++)** | **V8 C++ `RegExpParser::VerifyRegExpSyntax` (`80k` unseen strings)** | **`7.42 ms`–`8.15 ms`** *(min **`7.06 ms`**)* | **`928`–`1,019 ns` / regex** | **`4,843.3M` (`60,542` insn/regex)** | **`1.61x`–`1.77x` slower than `@par-gen/regexp`!** |
| `@babel/parser` (`/regex/`) | Hand-written JS AST parser | `13.89 ms` *(min `13.62 ms`)* | `1.74 µs` / regex | — | **3.01x slower** |
| `typescript` (`ts.createSourceFile`) | Hand-written JS CST parser | `22.86 ms` *(min `22.83 ms`)* | `2.86 µs` / regex | — | **4.96x slower** |
| `acorn` (`v8.2.4`, `/regex/`) | Hand-written JS + `RegExpValidationState` | `61.88 ms` *(min `61.77 ms`)* | `7.74 µs` / regex | — | **13.42x slower** |
| `V8 Native new RegExp + .test("")` (Uncached) | V8 C++ `ParseRegExp` + Irregexp Bytecode/JIT | `115.97 ms`–`136.56 ms` *(min `110.42 ms`)* | `14.50`–`17.07 µs` / regex | — | **25.16x–29.62x slower** |
| Legacy `@par-gen/nfa` (Hand-rolled `origin/main`) | Hand-rolled recursive `seq()` / `next()` | `240.51 ms`–`1,209.82 ms` | `30.06`–`151.23 µs` / regex | — | **52.17x–262.43x slower** |

> [!NOTE]
> When `new RegExp(pattern)` is called repeatedly with the **exact same string pointer**, V8's per-isolate `CompilationCacheRegExp` hash table returns the cached `FixedArray` Boilerplate in `0.55`–`0.71 ms` (`69`–`89 ns`/lookup) without invoking `v8::internal::RegExpParser` at all. When given unseen patterns so V8 actually executes its C++ syntax parser (`RegExpParser::VerifyRegExpSyntax`), `@par-gen/regexp` in pure JavaScript (`4.61 ms` on `Buffer`, `5.28 ms` on `string`, `5.96 ms` on unseen `Buffer`s) beats V8's C++ `new RegExp` (`7.42`–`8.15 ms`) by **`1.25x`–`1.77x`** while producing a full lossless CST.

### 2.5 Self-Bootstrapping Compile-Time Progression (`regexp.pargen` & `json.pargen`, Isolated EC2 `c7a.large` CPU 1)

| Stage | RegExp Engine Used by `@par-gen/nfa` | `regexp.pargen` Lexer (`generateFromTokens`) | `regexp.pargen` Full (`generateParser`) | `json.pargen` Full (`generateParser`) | Speedup on `regexp.pargen` |
| :--- | :--- | ---: | ---: | ---: | ---: |
| **`origin/main` (Initial Baseline)** | Hand-rolled recursive (`1,020`-state `[...]` expansion) | ~1,800 ms | ~90,000 ms (`297` states) | ~420 ms (`84` states) | `1.0x` |
| **Round 4 (`085df29`, Bisimilar Merge)** | Hand-rolled recursive + $O(\|\text{items}\|)$ linear `getItem` | 790 ms | 18,539 ms (`38` states) | 155 ms (`36` states) | `4.9x` |
| **Round 5 (`HEAD`, Self-Bootstrapped)** | **Generated `@par-gen/regexp` + 2-State `[...]` NFA + $O(1)$ `itemLookupCache`** | **`36.93`–`50.30 ms`** | **`252.40`–`381.12 ms` (`49` states)** | **`98.98`–`146.43 ms` (`36` states)** | **`236x`–`356x` faster!** |

---

## 3. Verified Optimizations & Root-Cause Analysis

### 3.1 Rounds 1, 2 & Track 1 Foundation
1. **Bit-Pack `actionsTable` & Eliminate `reducerStates` (86 KiB) + `actions` Heap Objects (`7eb470f`):** Shrunk parser tables from 91.4 KiB to 10.8 KiB (`actionsTable` + `gotoTable`) and replaced object property lookups with bitwise shifts.
2. **Hopcroft DFA `initialPartitions` Grouped by Token UID (`b262cec`):** Shrunk the JSON lexer DFA from 102 states (52.2 KiB) to 39 states (20.0 KiB) so all lexer + parser tables fit in the 32 KiB L1d cache.
3. **Bitwise Shift `successState >> 8` & `tokenIds` `Uint8Array` (`5ecac6d`):** Eliminated `Float64` (`xmm0`) conversions and `PACKED_ELEMENTS` `Smi` checks.
4. **Direct Single-Mode Lexer Call & Escape-Analyzed Token Return (`2ad7bc7`, `89a36a0`):** Enabled TurboFan/Turboshaft to inline `nextTokenInitial` into `parse()` and scalar-replace `{ state, start, end }` into registers with zero heap allocations per token.
5. **Remap `errorState` to `0` (`cd15ed6`) & Module-Scoped `proxyHandler` (`2e4f60b`):** Reduced the 4x-unrolled inner lexer loop to a single non-final branch per byte and eliminated per-parse closure allocations.
6. **Mask Lexer `offset & 0x7fffffff` (`Unsigned31` Range Proof, `a99eb1b`):** Proved `i >= 0` (`Unsigned31`) to Turboshaft, eliminating `REX.W movsxlq` 32-to-64 sign-extension instructions on every byte in the 4x-unrolled lexer loop.
7. **Coalesce CST `tree` & Parser `stack` into 32-Bit `Uint32Array` Layouts (`d52634a`) & Pre-Multiply State Offsets (`c910fc6`):** Coalesced leaf/internal CST node fields into three 32-bit words and packed `(tp, state)` into a single 32-bit `stack` word, eliminating runtime state multiplications.

### 3.2 Track A: Dead-End Final States First in Lexer (`_lexerCode`)
8. **Partition DFA States into `[errorState, ...deadEndFinals, ...continuableFinals, ...nonFinals]` and Check `state <= remappedLastDeadEndFinal` First:**
   - All `143` single-character punctuation tokens (`{`, `}`, `[`, `]`, `:`, `,`) jump directly to the loop exit on the peeled 1st byte **before** V8's register spills, **before** the V8 `StackGuard` interrupt check (`cmpb [r13-0x4f]`), and **without ever entering the 4x-unrolled loop**.

### 3.3 Track B: 1-Bit Action Encoding, Direct `word0` Shift & Pre-Shifted `Uint32Array` `gotoTable` (`_parserCode`)
9. **1-Bit `shift`/`reduce` Tag + Merged Exit Check + Direct `word0 = actionLookup >>> 1` + Pre-Shifted `Uint32Array` `gotoTable`:**
   - Encoding `actionsTable` with bit 0 = `0` for `shift`, bit 0 = `1` for `reduce`, `0xfffe` for `done`, and `0xffff` for `error` compiles loop dispatch to two instructions (`cmpl r14, 0xfffe; jnc` and `testb r14, 0x1; jnz`) and makes `actionLookup >>> 1` identical to `tree[tp]`'s `word0` (`actionSymbol | (stackItemsToReduce << 8)`).

### 3.4 Track C: BFS Queue Deduplication Fix & Fixpoint Bisimilar LR(1) State Merging (`parser.js`)
10. **Deduplicate Against Both `itemSets` and `newItemSets` + Merge Bisimilar LR(1) States:**
    - Shrunk `json.pargen` from `84 -> 36` states (`-57.1%`) and `regexp.pargen` from `297 -> 38` states (`-87.2%`). Also fixed `Math.pow(2, Math.ceil(Math.sqrt(parserSymbols.length)))` to `Math.pow(2, Math.ceil(Math.log2(parserSymbols.length)))`.

### 3.5 Off-Heap `TypedArray` Padding (`> 64B`) & Packed `lookaheadSpan` (`v4g-offheap` & `v4i`)
11. **Pad `tokenIds`, `actionsTable`, and `gotoTable` to `>= 128` Bytes:**
    - Defeats V8's `--typed-array-max-size-in-heap=64` threshold so V8 allocates off-heap non-moving backing stores and constant-folds their base addresses.

### 3.6 Track D: Eliminating Dead-End Final Rows from Lexer `table` + Unshifted `tokenIds[successState]` Lookup (`b3611d3`)
12. **Map Dead-End Finals to `1..D` (`< 256`) Without Allocating 256-Column `table` Rows + Unshifted `tokenIds[successState]`:**
    - Shrunk the JSON lexer `table` by **-27.5%** (`20.0 KiB -> 14.5 KiB`) and the RegExp initial lexer `table` by **-88.9%** (`4,608 -> 512` entries = `1.0 KiB`), and compiled `state = tokenIds[successState]` to a single unshifted `movzxbl` load.

### 3.7 Track W: Compile-Time Whitespace-Preserving (`PreserveWS`) vs. Whitespace-Skipping (`skipTokens: ["WS"]`) Toggle
13. **Automatic Grammar Rule Stripping + Pure Byte-Class (`B+`) `skipTable` Extraction (`--skip WS` / `{ skipTokens: ["WS"] }`):**
    - Reduces `json.pargen` to **18 rules and 22 LR(1) states**, emits a 256-byte off-heap `skipTable`, and matches V8's native C++ `JSON.parse` within **`1.002x` on `package.json`** (`41.06 ms` vs `40.97 ms`) and **`1.03x` on `package-lock.json`** (`223.41 ms` vs `216.54 ms`).

### 3.8 Track G: Large-Document (`package-lock.json` `495 KB`) Support via `end22_len10` Packed Spans & 20-Bit `tp` (`b3-tpbits20-end22`)
14. **Pack `result.end | ((result.end - result.start) << 22)` + 20-Bit `tp` (`0xfffff`) in `stack` (`tree = new Uint32Array(524288)`):**
    - **Root Cause:** 16-bit `start | (end << 16)` overflowed at `65,535` bytes (`64 KiB`), and `tree = new Uint32Array(16384)` (`5,461` CST nodes) overflowed on `package-lock.json` (`494,990` bytes, `67,034` tokens, `112,667` CST nodes = `338,001` `tree` words).
    - **Why `end22_len10` (`b3`) Beat `start22_len10` (`v1`) and `4-word tree` (`v2`):**
      In `v1` (`start | (len << 22)`), calling `nextToken(stream, ...)` on every `shift` required reconstructing `end` via `(lookaheadSpan & 0x3fffff) + (lookaheadSpan >>> 22)` (mask + shift + add). By instead packing **`end` in the low 22 bits (`0 .. 4,194,303` = `4.19 MiB`)** and **`len = end - start` in the high 10 bits (`<< 22`)**, `shift` passes `lookaheadSpan & 0x3fffff` (a single `andl r12, 0x3fffff` instruction in `opt-parse-b3.asm` line 308!) directly to `nextToken`, while keeping `tree` at 3 words per node (`12` bytes/node) and keeping `lookaheadSpan` in a single register (`rsi`)!
    - **Assembly Discovery on glibc `MMAP_THRESHOLD` (`opt-parse-b3.asm` line 312):**
      When `tree` is `<= 64 KiB` (`16,384` words), glibc `malloc` places it in the low 32-bit brk heap (`0x0762...`), allowing x86-64 `[r15*4 + disp32]` addressing with zero base register. When `tree` is `>= 128 KiB` (`524,288` words = `2 MiB`), glibc `malloc` uses `mmap` (`0x7ffff43d9010`), requiring V8 to load the 64-bit base address into a register (`REX.W movq rdi, 0x7ffff43d9010`). Even with that 64-bit base load, `b3-tpbits20-end22` achieves **`474.39 ms`** on `package.json` 100k, **`328.98 ms`** on Short JSON 1M, and **`242.92 ms` (`408 MB/s`)** on 200 iterations of `package-lock.json` (`494,990` bytes) with **100% verified byte-for-byte lossless re-emission**!

### 3.9 Track H: CST Traversal & Lossless Re-Emission Optimization (`Walk2k`)
15. **Iterative `tree` Pointer Span Walk + Pre-Sized `new Array(nChildren)` in `proxyHandler` (`2.14x` Faster CST Walks):**
    - **Root Cause:** Previously, reading `node.start` or `node.end` on an internal CST node executed `receiver.items[0].start` / `receiver.items[nChildren - 1].end`, which recursively allocated `Array` and `Proxy` instances for **every child at every level** down the spine of the CST!
    - **Fix:** Walking `tree` pointers directly in an integer loop (`while ((tree[p] >>> 8) > 0) p = tree[p + 1] & 0xfffff;`) inside `proxyHandler.get` computes `.start`, `.end`, and `.value` on any internal node in **O(depth) integer loads with zero heap allocations**, cutting 2,000 full CST walks of `package.json` from **`305.50 ms` to `143.01 ms` (`2.14x` faster, `-53.2%`)** while preserving 100% compatibility with `Object.keys(node)` and Jest `.toEqual()`. (When `Proxy` is replaced by a monomorphic `CstNode` class in `v5-cstclass`, `Walk2k` drops further to **`33.31 ms` — `9.17x` faster**.)

### 3.10 Round 5: Full Self-Bootstrapping (`@par-gen/nfa` Powered by `@par-gen/regexp`), Direct 2-State Character-Class NFAs & $O(1)$ LR(1) Item Lookup
16. **Replacing the Hand-Rolled RegExp Parser with `@par-gen/regexp` + Direct 2-State Multi-Symbol Character-Class NFAs (`packages/nfa/lib/thompson.js`):**
    - **Pitfalls Avoided from `origin/replace-regexp-parser`:**
      The earlier experimental branch `origin/replace-regexp-parser` attempted to bootstrap `@par-gen/nfa` by (a) copying `tree.slice()` on every parse in `javascript.js`, and (b) expanding every `CharacterClass` (`[...]`) and `DOT` (`.`) in `thompson.js` into a synthetic `a|b|c|...` regex string and recursively calling `parse()` on it! For a single negated character class (`[^...]`), that created ~255 alternation branches and **~1,020 Thompson $\varepsilon$-states**, blowing up `generateFromTokens` on `regexp.pargen` (`790 ms`).
    - **Fix:**
      1. Extended [`parsers/regexp/regexp.pargen`](file:///workspaces/par-gen/parsers/regexp/regexp.pargen) to support unescaped `.` (`DOT` / `DOT QUANTIFIER`), hex escapes (`\x00`–`\xff`), and escaped characters inside `[...]`.
      2. Updated [`packages/nfa/lib/thompson.js`](file:///workspaces/par-gen/packages/nfa/lib/thompson.js) to walk the `@par-gen/regexp` CST directly (zero `tree.slice()` copies) and construct a **2-state `[start, final]` PartialNFA with a single multi-symbol transition `[start, symbols, final]`** for `CharacterClass` and `DOT`, plus direct Thompson NFA rules for `*` (`0+`), `+` (`1+`), and `?` (`0..1`).
      3. Result: `generateFromTokens(regexp.pargen)` dropped from **`790 ms` to `36.93 ms` (`21.4x` faster)**, and regenerating [`parsers/regexp/generated/parser.js`](file:///workspaces/par-gen/parsers/regexp/generated/parser.js) and [`parsers/json/generated/parser.js`](file:///workspaces/par-gen/parsers/json/generated/parser.js) reaches a **100% byte-for-byte fixed point**.
17. **$O(1)$ Indexed LR(1) Item Lookup (`itemLookupCache` in `packages/parser/lib/parser.js`):**
    - **Root Cause:** During LR(1) closure/goto table construction (`createDFA` in [`packages/parser/lib/parser.js`](file:///workspaces/par-gen/packages/parser/lib/parser.js)), `getItem(items, rule, dotPosition, lookahead)` previously ran an $O(|items|)$ linear `.find()` scan across all existing LR(1) items (`~20,000+` items for `regexp.pargen`), taking **`17,748 ms`** (`96%` of `regexp.pargen` compile time).
    - **Fix:** Indexed `items` by `${rule.name}\0${dotPosition}\0${lookahead}` in a `WeakMap<Item[], Map<string, Item>>` (`itemLookupCache`), cutting `createDFA` on `regexp.pargen` from **`17,748 ms` to `215 ms` (`82.5x` faster)** and bringing full `regexp.pargen` parser generation down from `~90,000 ms` (`origin/main`) / `18,539 ms` (Round 4) to **`252.40 ms` (`356x` faster than `origin/main`)**!

---

## 4. Rejected Hypotheses (Tested & Discarded)

| Hypothesis | Measured / Assembly Impact | Why It Regressed |
| :--- | :--- | :--- |
| **Offset `gotoTable` by `- firstNonTerminalIdx` with Compact Stride 16 (`b4-tpbits20-end22-stride16`)** | `497.69 ms` vs `474.39 ms` (`b3`) on `Pkg 100k` | Subtracting `- 16` (`actionSymbol - 16`) in `gotoTable[(rtop >>> 20) + actionSymbol - 16]` prevented Turboshaft from proving the index is `Unsigned32`, adding an extra subtraction and signed bounds check on every `reduce`. |
| **Special-Case `stackItemsToReduce === 1` Branch in `reduce` (`v4-h2-reduce1-preserve`)** | `486.32 ms` vs `480.52 ms` (`v3`) on `Pkg 100k`; `252.05 ms` vs `248.26 ms` on `Lock 200` | The unpredictable branch `if (stackItemsToReduce === 1)` inside `reduce` cost more in branch mispredictions than the `sp -= 1; sp += 1` ALU instructions it saved. |
| **4-Word `tree` Layout (`v2-g2-4word-32span`) vs. 3-Word `end22_len10` (`b3-tpbits20-end22`)** | `487.31 ms` vs `474.39 ms` on `Pkg 100k`; `250.19 ms` vs `243.90 ms` on `Lock 200` | Carrying both `lookaheadStart` and `lookaheadEnd` across the parser loop spilled an extra register at the loop header and increased `tree` memory writes by `+33%` (16 bytes vs 12 bytes per CST node). |
| **Multiple Early `return` Statements Inside `while (i < l)` (`v1b-trackD-early-return`)** | `609.43 ms` vs `465.33 ms` (`+30.9%` slower); **`+3.95B` instructions** (`20.18B` vs `15.95B`) | Multiple `return { state, start, end }` statements inside `while (i < l)` create multiple loop exit edges that defeat V8 Turboshaft's 4x loop unroller and prevent clean scalar replacement of the returned object. |
| **Power-of-2 Lexer `table` Masking `table[(state & 0x3f00) + input[i++]]` (`c3-pow2-mask`)** | `506.13 ms` vs `465.33 ms`; `+643M` instructions on 200k parses | V8 Turboshaft's `BoundsCheck` elimination pass does not fold `(state & 0x3f00) + byte < 16384` across loop `Phi` nodes; it still emitted `cmpl rdi, 0x4000; jnc` while executing an extra `andl rdi, 0x3f00` on every byte. |
| **Bitwise Index Masking on `stack[sp]` / `tree[tp]` (`v2a-mask-tree-top`, `v2b-mask-sp-tp`)** | `481.20 ms`–`507.28 ms` vs `465.33 ms`; `+420M`–`+1.42B` instructions on 200k parses | Explicit `& 0x3fff` masks on `sp` and `tp` added `andl 0x3fff` instructions in `shift` and `reduce` without eliminating V8's `cmpl 0x4000` bounds checks on `tp + 1` and `tp + 2`. |
| **Merge `gotoTable` into `actionsTable` (`v2b-unified-table`)** | `508.87 ms` vs `502.53 ms` (`v2c-goto32`); `+201M` instructions on 200k parses | Pre-shifting `nextState << 16` requires 32-bit entries (`Uint32Array`), which a 16-bit `actionsTable` cannot hold; keeping `gotoTable` as a separate `Uint32Array` saves `shll 16` on every `reduce`. |
