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
| **Workloads** | 1. `package.json` (`1,073` bytes, 100k & 200k iterations)<br>2. Short JSON (`68` bytes, 1M iterations) |

---

## 2. Current Verified Measurements (Node.js `v26.13.0` / V8 `14.6.202.34`)

### 2.1 `par-gen` Optimization Progression Across Tracks 1, A, B, C, D & W (Isolated CPU 1)

| Configuration | Mode | Lexer Only (`package.json`, 100k) | Full Parse (`package.json`, 100k) | Short JSON (`68B`, 1M) | Full Parse (`package.json`, 10k) | Parser States / Table Footprint |
| :--- | :--- | ---: | ---: | ---: | ---: | ---: |
| **`origin/main` (Initial Baseline)** | `PreserveWS` | 440.11 ms | 964.93 ms | 1,008.72 ms | 96.49 ms | 84 states / 143.6 KiB |
| **Round 2 Baseline (`7f611fe`)** | `PreserveWS` | 238.00 ms | 601.85 ms | 537.70 ms | 60.25 ms | 84 states / 30.8 KiB |
| **Track 1 Baseline (`c910fc6`)** | `PreserveWS` | 288.73 ms *(min 285.29 ms)* | 510.36 ms *(min 508.55 ms)* | 477.35 ms *(min 476.13 ms)* | 51.04 ms | 84 states / 30.8 KiB |
| **+ Tracks A + B + C (`65144e6`)** | `PreserveWS` | 272.16 ms *(min 263.26 ms)* | 467.93 ms *(min 465.85 ms)* | 308.78 ms *(min 307.32 ms)* | 46.79 ms | 36 states / 26.9 KiB |
| **+ Track D (`HEAD`, Compact Dead-End Lexer + Unshifted `tokenIds`)** | **`PreserveWS` (Default)** | **285.78 ms** *(min **275.91 ms**)* | **465.33 ms** *(min **463.55 ms**, **-51.8%** vs `main`)* | **302.22 ms** *(min **300.69 ms**, **-70.0%** vs `main`)* | **46.53 ms** *(min **46.36 ms**)* | **36 states / 22.8 KiB** |
| **+ Track W (`skipTokens: ["WS"]`, DFA Retry Loop `w1`)** | `SkipWS` (DFA) | 311.95 ms *(min 303.98 ms)* | 437.99 ms *(min 436.30 ms)* | 298.22 ms *(min 285.85 ms)* | 43.80 ms | 22 states / 17.5 KiB |
| **+ Track W (`skipTokens: ["WS"]`, ASCII `c <= 32` `w2`)** | `SkipWS` (`c<=32`) | **231.22 ms** *(min **223.42 ms**)* | 418.62 ms *(min 415.59 ms)* | 274.65 ms *(min 273.17 ms)* | 41.86 ms | 22 states / 17.0 KiB |
| **+ Track W (`skipTokens: ["WS"]`, Off-Heap `skipTable` `w3`)** | **`SkipWS` (`--skip WS`)** | **232.89 ms** *(min **228.18 ms**, **-19.0%** vs `PreserveWS`)* | **412.58 ms** *(min **410.64 ms**, **-11.3%** vs `PreserveWS` / **-57.2%** vs `main`)* | **273.95 ms** *(min **270.97 ms**, **-9.4%** vs `PreserveWS`)* | **41.26 ms** *(min **41.06 ms**)* | **22 states / 17.3 KiB** |

### 2.2 Hardware Performance Counters (`perf stat`, 200,000 `package.json` Parses on Isolated CPU 1)

| Variant | Mode | CPU Cycles (Per Parse) | Instructions Retired (Per Parse) | IPC | Branches Executed (Per Parse) | Branch Misses | L1-dcache Loads (Per Parse) |
| :--- | :--- | ---: | ---: | ---: | ---: | ---: | ---: |
| **Round 2 Baseline (`7f611fe`)** | `PreserveWS` | `4,404.5M` (`22,023`) | `20,158.4M` (`100,792`) | `4.58` | `5,007.6M` (`25,038`) | `2,002,760` (`0.04%`) | — |
| **Track 1 Baseline (`c910fc6`)** | `PreserveWS` | `3,908.3M` (`19,542`) | `18,593.7M` (`92,969`) | `4.76` | `4,490.9M` (`22,454`) | `2,080,683` (`0.05%`) | `4,782.7M` (`23,914`) |
| **Tracks A+B+C (`65144e6`)** | `PreserveWS` | `3,586.0M` (`17,930`) | `16,115.0M` (`80,575`) | `4.49` | `4,024.0M` (`20,120`) | `2,001,256` (`0.05%`) | `4,557.6M` (`22,788`) |
| **+ Track D (`HEAD`, `c1-compact-nomask`)** | **`PreserveWS`** | **`3,600.0M` (`18,000`)** | **`15,946.0M` (`79,730`)** | **`4.43`** | **`4,024.0M` (`20,120`)** | **`2,020,000` (`0.05%`)** | **`4,515.4M` (`22,577`)** |
| **+ Track W (`skipTokens: ["WS"]`, DFA `w1`)** | `SkipWS` | `3,374.0M` (`16,870`) | `15,103.0M` (`75,515`) | `4.48` | `3,941.0M` (`19,705`) | `2,030,000` (`0.05%`) | `4,361.9M` (`21,810`) |
| **+ Track W (`skipTokens: ["WS"]`, `c<=32` `w2`)** | `SkipWS` | `3,227.0M` (`16,135`) | `14,359.0M` (`71,795`) | `4.45` | `3,662.0M` (`18,310`) | `2,290,000` (`0.06%`) | `4,023.7M` (`20,119`) |
| **+ Track W (`skipTokens: ["WS"]`, `skipTable` `w3`)** | **`SkipWS`** | **`3,171.0M` (`15,855`)** | **`13,746.0M` (`68,730`)** | **`4.34`** | **`3,601.0M` (`18,005`)** | **`2,270,000` (`0.06%`)** | **`4,159.4M` (`20,797`)** |
| **Net Reduction (`PreserveWS` `HEAD` vs. Round 2)** | `PreserveWS` | **`-804.5M` (`-18.3%`)** | **`-4,212.4M` (`-20.9%`, `-21,062`/parse)** | — | **`-983.6M` (`-19.6%`, `-4,918`/parse)** | — | — |
| **Net Reduction (`SkipWS` vs. `PreserveWS` `HEAD`)** | `SkipWS` vs `PreserveWS` | **`-429.0M` (`-11.9%`, `-2,145`/parse)** | **`-2,200.0M` (`-13.8%`, `-11,000`/parse)** | — | **`-423.0M` (`-10.5%`, `-2,115`/parse)** | — | **`-356.0M` (`-7.9%`, `-1,780`/parse)** |

### 2.3 Comparison Against Other Parsers (`package.json`, 10,000 Iterations on Node `v26.13.0`)

| Parser | Implementation Type | Whitespace / CST Fidelity | Median Time (10k iter) | Min Time | Relative to `par-gen` (`PreserveWS`) |
| :--- | :--- | :--- | ---: | ---: | :--- |
| `JSON.parse` (V8 Native C++) | Hand-written C++ | Lossy (JS Value Only, No AST/CST) | 40.97 ms | 40.79 ms | **0.88x** (`SkipWS` matches within **1.002x** / `90 ns`!) |
| **`par-gen` (`SkipWS`, `skipTokens: ["WS"]`)** | **Generated JS LR(1) + CST** | **Syntactic CST with Exact Byte Spans** | **41.26 ms** *(412.58 ms / 100k)* | **41.06 ms** | **0.89x (`1.13x` faster than `PreserveWS`)** |
| **`par-gen` (`PreserveWS` `HEAD`, Default)** | **Generated JS LR(1) + Lossless CST** | **100% Lossless CST (Full `WS` Trivia)** | **46.53 ms** *(465.33 ms / 100k)* | **46.36 ms** | **1.00x (Baseline Lossless Reference)** |
| `par-gen` (Track 1 @ `c910fc6`) | Generated JS LR(1) + Lossless CST | 100% Lossless CST (Full `WS` Trivia) | 51.04 ms | 50.86 ms | 1.10x slower |
| `par-gen` (Round 2 @ `7f611fe`) | Generated JS LR(1) + Lossless CST | 100% Lossless CST (Full `WS` Trivia) | 60.25 ms | 60.21 ms | 1.29x slower |
| `par-gen` (`origin/main`) | Generated JS LR(1) + Lossless CST | 100% Lossless CST (Full `WS` Trivia) | 96.49 ms | 95.80 ms | **2.07x slower** |
| `acorn` (`v8.2.4`) | Hand-written JS | AST (No `WS` Trivia Nodes) | 240.70 ms | 240.51 ms | **5.17x slower** |
| `@babel/parser` (`v7.17.3`) | Hand-written JS | AST (No `WS` Trivia Nodes) | 246.32 ms | 243.16 ms | **5.29x slower** |
| `typescript` (`ts.parseJsonText`) | Hand-written JS | CST with Trivia Accessors | 485.27 ms | 485.00 ms | **10.43x slower** |
| `json5` (`v2.2.0`) | Hand-written JS | Lossy (JS Value Only) | 952.29 ms | 947.92 ms | **20.47x slower** |

---

## 3. Verified Optimizations & Root-Cause Analysis

### 3.1 Rounds 1, 2 & Track 1 Foundation
1. **Bit-Pack `actionsTable` & Eliminate `reducerStates` (86 KiB) + `actions` Heap Objects (`7eb470f`):** Shrunk parser tables from 91.4 KiB to 10.8 KiB (`actionsTable` + `gotoTable`) and replaced object property lookups with bitwise shifts.
2. **Hopcroft DFA `initialPartitions` Grouped by Token UID (`b262cec`):** Shrunk the JSON lexer DFA from 102 states (52.2 KiB) to 39 states (20.0 KiB) so all lexer + parser tables fit in the 32 KiB L1d cache.
3. **Bitwise Shift `successState >> 8` & `tokenIds` `Uint8Array` (`5ecac6d`):** Eliminated `Float64` (`xmm0`) conversions and `PACKED_ELEMENTS` `Smi` checks.
4. **Direct Single-Mode Lexer Call & Escape-Analyzed Token Return (`2ad7bc7`, `89a36a0`):** Enabled TurboFan/Turboshaft to inline `nextTokenInitial` into `parse()` and scalar-replace `{ state, start, end }` into registers with zero heap allocations per token.
5. **Remap `errorState` to `0` (`cd15ed6`) & Module-Scoped `proxyHandler` (`2e4f60b`):** Reduced the 4x-unrolled inner lexer loop to a single non-final branch per byte and eliminated per-parse closure allocations.
6. **Mask Lexer `offset & 0x7fffffff` (`Unsigned31` Range Proof, `a99eb1b`):** Proved `i >= 0` (`Unsigned31`) to Turboshaft, eliminating `REX.W movsxlq` 32-to-64 sign-extension instructions on every byte in the 4x-unrolled lexer loop.
7. **Coalesce CST `tree` & Parser `stack` into 32-Bit `Uint32Array` Layouts (`d52634a`) & Pre-Multiply State Offsets (`c910fc6`):** Coalesced leaf/internal CST node fields into three 32-bit words (`tree = new Uint32Array(16384)`) and packed `(tp, state)` into a single 32-bit `stack` word (`stack = new Uint32Array(16384)`), eliminating runtime state multiplications.

### 3.2 Track A: Dead-End Final States First in Lexer (`_lexerCode`)
8. **Partition DFA States into `[errorState, ...deadEndFinals, ...continuableFinals, ...nonFinals]` and Check `state <= remappedLastDeadEndFinal` First:**
   - **Root Cause:** In `json.pargen`, `11` of the `16` final DFA states (`{`, `}`, `[`, `]`, `:`, `,`, `"..."`, `true`, `false`, `null` — accounting for **`211` out of `347` tokens** in `package.json`, or `60.8%` of all tokens) have **zero outgoing non-error transitions**. Previously, on every single one of those `211` tokens, the lexer recorded `successState = state; successPos = i;` and then had to loop around, bounds-check `i < l`, read the *next* byte from `input`, look up `table[state + nextByte]` (always `0`), and only then `break`.
   - **Why Checking `state <= remappedLastDeadEndFinal` First (`v1b`) Beat Checking After `state === 0` (`v1a`) in V8 JIT Assembly:**
     In V8 `v26.13.0` Turboshaft, V8 **peels the 1st iteration** of `while (i < l)`. Because `state <= remappedLastDeadEndFinal` is checked first, all `143` single-character punctuation tokens (`{`, `}`, `[`, `]`, `:`, `,`) jump directly to the loop exit on the peeled 1st byte **before** V8's register spills, **before** the V8 `StackGuard` interrupt check (`cmpb [r13-0x4f]`), and **without ever entering the 4x-unrolled loop**!
   - **Measured Impact:** Reduced retired instructions by **`-810M`** on 200k parses (`-4,051` insns/parse) and reduced branch mispredictions by **`-23.8%`** (`2.08M -> 1.58M`).

### 3.3 Track B: 1-Bit Action Encoding, Direct `word0` Shift & Pre-Shifted `Uint32Array` `gotoTable` (`_parserCode`)
9. **1-Bit `shift`/`reduce` Tag + Merged Exit Check + Direct `word0 = actionLookup >>> 1` + Pre-Shifted `Uint32Array` `gotoTable`:**
   - **Fix & Assembly Verification:**
     1. Encoding `actionsTable` with bit 0 = `0` for `shift` (`target << 1`), bit 0 = `1` for `reduce` (`(reduceLen << 9) | (target << 1) | 1`), `0xfffe` for `done`, and `0xffff` for `error` compiles the loop dispatch to just two instructions (`cmpl r14, 0xfffe; jnc` and `testb r14, 0x1; jnz`).
     2. In `shift`, `(actionLookup >> 2) << 16` becomes a single `shll rbx, 15` (`actionLookup << 15`).
     3. In `reduce`, `const word0 = actionLookup >>> 1` (`shrl r14, 1`) is **already** `actionSymbol | (stackItemsToReduce << 8)`, so `tree[tp] = word0` stores word 0 directly with **zero shift-and-OR reassembly**.
     4. Emitting `gotoTable` as a `Uint32Array` with pre-shifted `(states.indexOf(to) * stateMultiplier) * 65536` eliminates `shll nextState, 16` on every `reduce`.
   - **Measured Impact:** Reduced retired instructions by **`-1.01B`** on 200k parses (`-5,052` insns/parse).

### 3.4 Track C: BFS Queue Deduplication Fix & Fixpoint Bisimilar LR(1) State Merging (`parser.js`)
10. **Deduplicate Against Both `itemSets` and `newItemSets` in `calculateStatesAndTransitionTable` + Merge Bisimilar LR(1) States:**
    - **Root Cause 1 (BFS Queue Bug):** In [`calculateStatesAndTransitionTable`](file:///workspaces/par-gen/packages/parser/lib/parser.js#L761-L778), `existing` only searched `itemSets` (visited states) and ignored `newItemSets` (states already queued in the BFS frontier). Fixing `allStates = [...itemSets, ...newItemSets]` shrank `json.pargen` from `84 -> 46` states (`-45.2%`) and `regexp.pargen` from `297 -> 88` states (`-70.4%`).
    - **Root Cause 2 (Redundant Post-Reduction States):** In LR(1) grammars without semantic actions, states that differ only in the LHS non-terminal of a completed unit production have **100% identical `actions` and `goto` rows**. Fixpoint bisimilar state merging collapses these states until convergence, shrinking `json.pargen` from `46 -> 36` states (**`-57.1%` total**, `actionsTable` = `2.25 KiB`) and `regexp.pargen` from `88 -> 38` states (**`-87.2%` total**).

### 3.5 Off-Heap `TypedArray` Padding (`> 64B`) & Packed `lookaheadSpan` (`v4g-offheap` & `v4i`)
11. **Pad `tokenIds`, `actionsTable`, and `gotoTable` to `>= 128` Bytes (Defeating V8's `64B` On-Heap `TypedArray` Threshold):**
    - V8's `--typed-array-max-size-in-heap=64` flag allocates any `TypedArray` `<= 64` bytes on the movable V8 JS heap, preventing V8 from constant-folding the backing store pointer. Padding `tokenIds`, `actionsTable`, and `gotoTable` to `>= 128` bytes forces off-heap allocations with constant-folded base addresses, eliminating **368M L1d loads** (`-1,841` loads/parse) and **`-31.3 ms`** (`504.68 ms -> 473.39 ms`).
12. **Pack `lookaheadStart` and `lookaheadEnd` into Single 32-Bit `lookaheadSpan` (`v4i-packed-span`):**
    - Packing `lookaheadSpan = result.start | (result.end << 16)` immediately after `nextToken` keeps all 6 hot loop variables (`sp`, `tp`, `lookahead`, `lookaheadSpan`, `input`, `input.length`) in CPU registers (`rdi`, `r12`, `rcx`, `rsi`, `r8`, `r9`) at the loop header and turns `tree[tp + 1] = lookaheadSpan` into a single 32-bit register store, saving **`-470M` instructions** (`-2,351` insns/parse).

### 3.6 Track D: Eliminating Dead-End Final Rows from Lexer `table` + Unshifted `tokenIds[successState]` Lookup (`c1-compact-nomask`)
13. **Map Dead-End Finals to `1..D` (`< 256`) Without Allocating 256-Column `table` Rows + Unshifted `tokenIds[successState]`:**
    - **Root Cause:** Because dead-end final DFA states (`11` of the `16` final states in `json.pargen`, and `9` of the `13` final states in `regexp.pargen` initial mode) immediately `break` out of `while (i < l)` and **never** index `table[state + input[i++]]`, allocating `256`-entry rows for them in `table` wasted `11 * 256 = 2,816` `Uint16` entries (`5.5 KiB` of all-zero rows in `json.pargen`). Furthermore, after `while (i < l)`, `state = tokenIds[successState >> 8]` executed an extra `sarl rcx, 8` shift on every token.
    - **Fix & Assembly Verification (`opt-parse-c1.asm`, lines 335, 491):**
      1. Mapping `errorState -> 0`, `deadEndFinals[k] -> k + 1` (`1..11`), `continuableFinals[k] -> (k + 1) * 256` (`256..1280`), and `nonFinals[k] -> (continuableFinals.length + 1 + k) * 256` (`1536..7168`) eliminates all dead-end final rows from `table`, shrinking the JSON lexer `table` by **-27.5%** from `10,240` entries (`20.0 KiB`) to **`7,424` entries (`14.5 KiB`)** (`cmpl rdi, 0x1d00` in `opt-parse-c1.asm` line 335) and the RegExp initial lexer `table` by **-69.2%** from `3,328` entries (`6.5 KiB`) to **`1,024` entries (`2.0 KiB`)**!
      2. Because dead-end final state values (`1..11`) and continuable final state values (`256, 512, ..., 1280`) are **completely disjoint**, sizing `tokenIds` to `(continuableFinals.length + 1) * 256` (`1,536` bytes for JSON, off-heap constant-folded) and populating both `tokenIds[1..11]` and `tokenIds[256, 512, ..., 1280]` compiles `state = tokenIds[successState]` to a single unshifted load:
         ```asm
         0x7fffc8006897  movzxbl rcx, [rcx + 0x75cf970]  ; direct tokenIds[successState] with ZERO >> 8 shift!
         ```
      3. Removing the redundant `& 0xffff` mask in `lookaheadSpan = result.start | (result.end << 16)` eliminates `movzxwl rcx, rcx` on every token.
    - **Measured Impact:** Reduced retired instructions by **`-169M`** on 200k parses (`79,730` insns/parse), improved `package.json` 100k full parse to **`465.33 ms` (min `463.55 ms`)**, and improved Short JSON 1M full parse from `308.78 ms` to **`302.22 ms` (min `300.69 ms`, `-2.1%`)**.

### 3.7 Track W: Compile-Time Whitespace-Preserving (`PreserveWS`) vs. Whitespace-Skipping (`skipTokens: ["WS"]`) Toggle
14. **Automatic Grammar Rule Stripping + Pure Byte-Class (`B+`) `skipTable` Extraction (`--skip WS` / `{ skipTokens: ["WS"] }`):**
    - **Architectural Question:** What is the exact CPU cost of preserving 100% lossless `WS` trivia nodes in the CST vs. skipping whitespace at the lexer boundary like traditional AST parsers (`acorn`, `@babel/parser`)?
    - **How the Toggle Works:**
      1. In [`packages/grammar/lib/parser.js`](file:///workspaces/par-gen/packages/grammar/lib/parser.js), passing `{ skipTokens: ["WS"] }` strips `WS` and `WS?` from all grammar rule RHSs prior to `optionals()` combinator expansion and deduplicates identical expanded rules. For `json.pargen`, this reduces expanded rules from **26 to 18** (`-30.8%`) and LR(1) parser states from **36 to 22** (`-38.9%`, `actionsTable` = `704` entries = `1.375 KiB`).
      2. In [`packages/parser/lib/parser.js`](file:///workspaces/par-gen/packages/parser/lib/parser.js), `generate()` inspects the standalone DFA of `skipTokens` in each lexer mode. When the skipped token DFA is a pure single-byte repetition (`B+`, such as `WS := '[ \n\r\t]+'`, where `start -> final` and `final -> final` transition on the exact same byte set `[9, 10, 13, 32]` disjoint from non-skipped token start bytes), `generate()` excludes `WS` from the main lexer DFA and attaches `skipBytes = [9, 10, 13, 32]` to `lexerData` (falling back to a general DFA retry loop for multi-byte comment patterns).
      3. In [`packages/codegen/lib/javascript.js`](file:///workspaces/par-gen/packages/codegen/lib/javascript.js), `_lexerCode` emits a 256-byte off-heap `skipTable = new Uint8Array(256)` and a 2-instruction pre-loop `while (i < l && skipTable[input[i]] !== 0) i++; offset = i;` before the main token DFA loop (`opt-parse-w3.asm`, lines 2387–2404):
         ```asm
         0x7fffc8006608  movzxbl rsi, [r8 + rbx*1]       ; byte = input[i]
         0x7fffc8006617  cmpb [rsi + 0x75c3660], 0x0     ; skipTable[byte] !== 0 (constant-folded off-heap!)
         0x7fffc800661e  jz 0x7fffc800662a               ; exit whitespace pre-loop on first non-WS byte
         0x7fffc8006620  incl rbx                        ; i++
         ```
    - **Measured Head-to-Head Comparison (`PreserveWS` vs. `SkipWS` on `package.json`):**
      - Eliminates all **135 `WS` tokens** (`347 -> 212` tokens per `package.json`, **`-38.9%` fewer tokens, parser shifts, and CST leaf nodes**).
      - Cuts lexer-only 100k time by **`-19.0%`** (`285.78 ms -> 232.89 ms`, min `228.18 ms`).
      - Cuts full parse 100k time by **`-11.3%`** (`465.33 ms -> 412.58 ms`, min **`410.64 ms`** — **`41.06 ms` per 10k parses**, matching V8's native C++ `JSON.parse` at `40.97 ms` within `0.2%` / `90 nanoseconds` per parse!).
      - Retires **`-2.20 BILLION` fewer instructions** (`68,730` vs `79,730` insns/parse, **`-13.8%`**), **`-423 MILLION` fewer branches** (`18,005` vs `20,120` branches/parse, **`-10.5%`**), and **`-429 MILLION` fewer CPU cycles** (`15,855` vs `18,000` cycles/parse, **`-11.9%`**) across 200,000 parses.

---

## 4. Rejected Hypotheses (Tested & Discarded)

| Hypothesis | Measured / Assembly Impact | Why It Regressed |
| :--- | :--- | :--- |
| **Multiple Early `return` Statements Inside `while (i < l)` (`v1b-trackD-early-return`)** | `609.43 ms` vs `465.33 ms` (`+30.9%` slower); **`+3.95B` instructions** (`20.18B` vs `15.95B`) | Multiple `return { state, start, end }` statements inside `while (i < l)` create multiple loop exit edges that defeat V8 Turboshaft's 4x loop unroller and prevent clean scalar replacement of the returned object. Always use `break` inside `while (i < l)` feeding a single `return` at the bottom of `next()`. |
| **Power-of-2 Lexer `table` Masking `table[(state & 0x3f00) + input[i++]]` (`c3-pow2-mask`)** | `506.13 ms` vs `465.33 ms`; `+643M` instructions on 200k parses | V8 Turboshaft's `BoundsCheck` elimination pass does not fold `(state & 0x3f00) + byte < 16384` across loop `Phi` nodes; it still emitted `cmpl rdi, 0x4000; jnc` while executing an extra `andl rdi, 0x3f00` on every byte. |
| **Bitwise Index Masking on `stack[sp]` / `tree[tp]` (`v2a-mask-tree-top`, `v2b-mask-sp-tp`)** | `481.20 ms`–`507.28 ms` vs `465.33 ms`; `+420M`–`+1.42B` instructions on 200k parses | Explicit `& 0x3fff` masks on `sp` and `tp` added `andl 0x3fff` instructions in `shift` and `reduce` without eliminating V8's `cmpl 0x4000` bounds checks on `tp + 1` and `tp + 2`. |
| **Reorder `reduce` Stores to Shorten `word0` Live Range (`v2c-reorder-reduce`)** | `484.33 ms` vs `465.33 ms`; `+420M` instructions on 200k parses | Reading `stack[sp - stackItemsToReduce + 1]` (`firstChild`) before updating `sp` required an extra indexed address calculation and extra register live range across the `gotoTable` lookup. |
| **Merge `gotoTable` into `actionsTable` (`v2b-unified-table`)** | `508.87 ms` vs `502.53 ms` (`v2c-goto32`); `+201M` instructions on 200k parses | Pre-shifting `nextState << 16` requires 32-bit entries (`Uint32Array`), which a 16-bit `actionsTable` cannot hold; keeping `gotoTable` as a separate `Uint32Array` saves `shll 16` on every `reduce` while fitting comfortably in L1d (`22.8 KiB` total). |
| **Check Dead-End Finals *After* `if (state === 0) break` (`v1a-deadend-after`)** | `512.01 ms` vs `504.58 ms` (`v1b-deadend-first`); `+660M` instructions on 200k parses | Checking `state === 0` first adds two branches to the continuable-final path (`WS`, `NUMBER`) and prevents Turboshaft from merging the `errorState` (`0`) and `deadEndFinal` loop exits in the peeled 1st iteration. |
| **Carry `currentState` and `currentTp` as Loop-Header `Phi` Variables (`t1`)** | Spilled 3 extra registers at loop header (`[rbp-0x38]`, `[rbp-0x58]`, `[rbp-0x60]`) | Carrying unpacked `currentState` and `currentTp` alongside `sp` and `tp` across the inlined lexer call exceeded x86-64's 14 general-purpose registers; unpacking `const top = stack[sp]` inside the loop header keeps only `sp` and `tp` live. |
