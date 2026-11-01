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

### 2.1 `par-gen` Optimization Progression Across Tracks 1, A, B & C (Isolated CPU 1)

| Configuration | Lexer Only (`package.json`, 100k) | Full Parse (`package.json`, 100k) | Short JSON (`68B`, 1M) | Full Parse (`package.json`, 10k) | Parser States / Table Footprint |
| :--- | ---: | ---: | ---: | ---: | ---: |
| **`origin/main` (Initial Baseline)** | 440.11 ms | 964.93 ms | 1,008.72 ms | 96.49 ms | 84 states / 143.6 KiB |
| **Round 2 Baseline (`7f611fe`)** | 238.00 ms | 601.85 ms | 537.70 ms | 60.25 ms | 84 states / 30.8 KiB |
| **Track 1 Baseline (`c910fc6`)** | 288.73 ms *(min 285.29 ms)* | 510.36 ms *(min 508.55 ms, CV 0.65%)* | 477.35 ms *(min 476.13 ms, CV 0.14%)* | 51.04 ms | 84 states / 30.8 KiB |
| **+ Track A (`v1b`):** Dead-End Final States First in Lexer | **272.16 ms** *(min **263.26 ms**, **-5.7%**)* | 504.58 ms *(min 500.37 ms, **-1.1%**)* | 466.54 ms *(min 465.66 ms, **-2.3%**)* | 50.46 ms | 84 states / 30.8 KiB |
| **+ Track B (`v2c`):** 1-Bit Action Tag + `word0` + `Uint32` `gotoTable` | 288.73 ms | 502.53 ms *(min 501.61 ms, **-1.5%**)* | 464.69 ms *(min 463.04 ms, **-2.7%**)* | 50.25 ms | 84 states / 36.1 KiB |
| **+ Track C (`v3`):** BFS Queue Dedup + Bisimilar State Merging | 288.73 ms | 512.16 ms *(min 508.81 ms)* | 482.61 ms *(min 479.96 ms)* | 51.22 ms | **36 states / 24.6 KiB** |
| **+ Tracks A + B + C + 128B Off-Heap `tokenIds` (`v4g-offheap`)** | 272.16 ms | 473.39 ms *(min 469.94 ms, **-7.2%**)* | 434.81 ms *(min 433.31 ms, **-8.9%**)* | 47.34 ms | **36 states / 26.9 KiB** |
| **All Combined + Packed `lookaheadSpan` (`HEAD`, `v4i`)** | **272.16 ms** *(min **263.26 ms**)* | **467.93 ms** *(min **465.85 ms**, CV 0.44%, **-8.3%** vs Track 1 / **-51.5%** vs `main`)* | **428.41 ms** *(min **427.27 ms**, CV 0.25%, **-10.3%** vs Track 1 / **-57.5%** vs `main`)* | **46.79 ms** *(100k/10)* | **36 states / 26.9 KiB** |

### 2.2 Hardware Performance Counters (`perf stat`, 200,000 `package.json` Parses on Isolated CPU 1)

| Variant | CPU Cycles (Per Parse) | Instructions Retired (Per Parse) | IPC | Branches Executed (Per Parse) | Branch Misses | L1-dcache Loads (Per Parse) |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: |
| **Round 2 Baseline (`7f611fe`)** | `4,404.5M` (`22,023`) | `20,158.4M` (`100,792`) | `4.58` | `5,007.6M` (`25,038`) | `2,002,760` (`0.04%`) | — |
| **Track 1 Baseline (`c910fc6`)** | `3,908.3M` (`19,542`) | `18,593.7M` (`92,969`) | `4.76` | `4,490.9M` (`22,454`) | `2,080,683` (`0.05%`) | `4,782.7M` (`23,914`) |
| **Track A Only (`v1b-deadend-first`)** | `3,853.1M` (`19,265`) | `17,783.7M` (`88,918`) | `4.62` | `4,325.2M` (`21,626`) | **`1,584,798`** (**`-23.8%`**) | `4,654.2M` (`23,271`) |
| **Track B Only (`v2c-goto32`)** | `3,853.0M` (`19,265`) | `17,583.4M` (`87,917`) | `4.56` | `4,402.2M` (`22,011`) | `1,923,467` (`0.04%`) | `4,757.1M` (`23,785`) |
| **Tracks A+B+C (`v4g`, 40B `tokenIds`)** | `3,779.1M` (`18,895`) | `16,721.2M` (`83,606`) | `4.42` | `4,190.0M` (`20,950`) | `1,514,492` (`0.04%`) | `5,152.9M` (`25,764`) |
| **+ 128B Off-Heap `tokenIds` (`v4g-offheap`)** | `3,678.7M` (`18,393`) | `16,327.6M` (`81,638`) | `4.44` | `4,173.2M` (`20,866`) | `1,528,162` (`0.04%`) | `4,784.6M` (`23,923`) |
| **All Combined (`HEAD`, `v4i-packed-span`)** | **`3,605.2M` (`18,026`)** | **`15,857.4M` (`79,287`)** | **`4.40`** | **`4,049.0M` (`20,245`)** | **`1,500,809` (`0.04%`)** | **`4,557.6M` (`22,788`)** |
| **Net Reduction vs. Track 1 (`c910fc6`)** | **`-303.1M` (`-7.76%`)** | **`-2,736.3M` (`-14.72%`, `-13,682`/parse)** | — | **`-441.9M` (`-9.84%`, `-2,209`/parse)** | **`-579.9K` (`-27.9%`)** | **`-225.1M` (`-4.71%`, `-1,126`/parse)** |
| **Net Reduction vs. Round 2 (`7f611fe`)** | **`-799.3M` (`-18.15%`)** | **`-4,301.0M` (`-21.34%`, `-21,505`/parse)** | — | **`-958.6M` (`-19.14%`, `-4,793`/parse)** | **`-502.0K` (`-25.1%`)** | — |

### 2.3 Comparison Against Other Parsers (`package.json`, 10,000 Iterations on Node `v26.13.0`)

| Parser | Implementation Type | Median Time (10k iter) | Min Time | CV% | Relative to `par-gen` (`HEAD`) |
| :--- | :--- | ---: | ---: | ---: | :--- |
| `JSON.parse` (V8 Native C++) | Hand-written C++ | 40.97 ms | 40.79 ms | 0.26% | **0.88x** (`par-gen` is within **1.14x** / `0.58 µs` of native C++!) |
| **`par-gen` (`HEAD`, Tracks 1+A+B+C)** | **Generated JS LR(1) + Lossless CST** | **46.79 ms** *(467.93 ms / 100k)* | **46.59 ms** | **0.44%** | **1.00x (Baseline JS Reference)** |
| `par-gen` (Track 1 @ `c910fc6`) | Generated JS LR(1) + Lossless CST | 51.04 ms | 50.86 ms | 0.65% | 1.09x slower |
| `par-gen` (Round 2 @ `7f611fe`) | Generated JS LR(1) + Lossless CST | 60.25 ms | 60.21 ms | 0.26% | 1.29x slower |
| `par-gen` (`origin/main`) | Generated JS LR(1) + Lossless CST | 96.49 ms | 95.80 ms | 0.45% | **2.06x slower** |
| `acorn` (`v8.2.4`) | Hand-written JS | 240.70 ms | 240.51 ms | 2.55% | **5.14x slower** |
| `@babel/parser` (`v7.17.3`) | Hand-written JS | 246.32 ms | 243.16 ms | 5.20% | **5.26x slower** |
| `typescript` (`ts.parseJsonText`) | Hand-written JS | 485.27 ms | 485.00 ms | 1.20% | **10.37x slower** |
| `json5` (`v2.2.0`) | Hand-written JS | 952.29 ms | 947.92 ms | 0.39% | **20.35x slower** |

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
     In V8 `v26.13.0` Turboshaft (`opt-parse-v4i-packed-span.asm`, lines 328–339), V8 **peels the 1st iteration** of `while (i < l)` (where `state` is the constant start state `0x1100`):
     ```asm
     0x7fffc8006621  movzxwl rdi, [rdi*2 + 0x7634f30] ; 1st byte transition from start state
     0x7fffc8006629  addl rbx, 0x1                    ; i++
     0x7fffc800662c  cmpl rdi, 0x1000                 ; state <= remappedLastFinal?
     0x7fffc8006632  jna 0x7fffc8006645
     ...
     0x7fffc8006645  cmpl rdi, 0xb00                  ; state <= remappedLastDeadEndFinal?
     0x7fffc800664b  jna 0x7fffc800689d               ; IMMEDIATE EXIT before unrolled loop & StackGuard!
     ```
     Because `v1b` checks `state <= 0xb00` first, all `143` single-character punctuation tokens (`{`, `}`, `[`, `]`, `:`, `,`) jump directly to `0x7fffc800689d` on the peeled 1st byte **before** V8's register spills (`movq [rbp-0x28], r12`), **before** the V8 `StackGuard` interrupt check (`cmpb [r13-0x4f]`), and **without ever entering the 4x-unrolled loop**!
   - **Measured Impact:** Reduced retired instructions by **`-810M`** on 200k parses (`-4,051` insns/parse), reduced branch mispredictions by **`-23.8%`** (`2.08M -> 1.58M`), and cut lexer-only 100k time from `288.73 ms` (min `285.29 ms`) to **`272.16 ms` (min `263.26 ms`)**.

### 3.3 Track B: 1-Bit Action Encoding, Direct `word0` Shift & Pre-Shifted `Uint32Array` `gotoTable` (`_parserCode`)
9. **1-Bit `shift`/`reduce` Tag + Merged Exit Check + Direct `word0 = actionLookup >>> 1` + Pre-Shifted `Uint32Array` `gotoTable`:**
   - **Root Cause:** Previously, every parser iteration executed `if (actionLookup === 0xffff)` followed by a 4-way `switch (actionLookup & 3)` (including a dead `default: throw` branch), shifted `(actionLookup >> 2) << 16` (2 shifts) on `shift`, unpacked `actionSymbol` and `stackItemsToReduce` only to re-pack `actionSymbol | (stackItemsToReduce << 16)` on `reduce`, masked `stack[sp] & 0xffff` eagerly on every `reduce`, and shifted `nextState << 16` after reading `gotoTable`.
   - **Fix & Assembly Verification (`opt-parse-v4i-packed-span.asm`):**
     1. Encoding `actionsTable` with bit 0 = `0` for `shift` (`target << 1`), bit 0 = `1` for `reduce` (`(reduceLen << 9) | (target << 1) | 1`), `0xfffe` for `done`, and `0xffff` for `error` compiles the loop dispatch (lines 287–290) to just two instructions:
        ```asm
        cmpl r14, 0xfffe
        jnc 0x7fffc8006a19   ; single predicted-not-taken exit for both done (0xfffe) & error (0xffff)
        testb r14, 0x1
        jnz 0x7fffc8006919   ; 0 = shift (fallthrough), 1 = reduce
        ```
     2. In `shift` (line 310), `(actionLookup >> 2) << 16` becomes a single `shll rbx, 15` (`actionLookup << 15`).
     3. In `reduce` (lines 492–499), `const word0 = actionLookup >>> 1` (`shrl r14, 1`) is **already** `actionSymbol | (stackItemsToReduce << 8)`, so `tree[tp] = word0` (`movl [r12*4 + 0x7649f50], r14`) stores word 0 directly with **zero shift-and-OR reassembly**! Moving `& 0xffff` on `firstChild` to lazy `proxyHandler.get` saves another ALU instruction on every `reduce`.
     4. Emitting `gotoTable` as a `Uint32Array` with pre-shifted `(states.indexOf(to) * stateMultiplier) * 65536` (lines 511, 526) eliminates `shll nextState, 16` on every `reduce` (`orl rcx, r12` directly combines `nextState` with `tp`).
   - **Measured Impact:** Reduced retired instructions by **`-1.01B`** on 200k parses (`-5,052` insns/parse).

### 3.4 Track C: BFS Queue Deduplication Fix & Fixpoint Bisimilar LR(1) State Merging (`parser.js`)
10. **Deduplicate Against Both `itemSets` and `newItemSets` in `calculateStatesAndTransitionTable` + Merge Bisimilar LR(1) States:**
    - **Root Cause 1 (BFS Queue Bug):** In [`calculateStatesAndTransitionTable`](file:///workspaces/par-gen/packages/parser/lib/parser.js#L692-L709), `existing` only searched `itemSets` (visited states) and ignored `newItemSets` (states already queued in the BFS frontier). Whenever multiple states transitioned to the same unvisited target state before it was popped from `newItemSets`, duplicate `Set` instances were created and expanded. Fixing `allStates = [...itemSets, ...newItemSets]` shrank `json.pargen` from `84 -> 46` states (`-45.2%`) and `regexp.pargen` from `297 -> 88` states (`-70.4%`, cutting `regexp` parser generation time from `~32s` to `<1.5s`).
    - **Root Cause 2 (Redundant Post-Reduction States):** In LR(1) grammars without semantic actions, states that differ only in the LHS non-terminal of a completed unit production (such as the 7 states `Value -> Object •`, `Value -> Array •`, `Value -> String •`, `Value -> Number •`, `Value -> "true" •`, `Value -> "false" •`, `Value -> "null" •`) have **100% identical `actions` and `goto` rows**. Fixpoint bisimilar state merging collapses these states until convergence, shrinking `json.pargen` from `46 -> 36` states (**`-57.1%` total**, `actionsTable` = `2.25 KiB`) and `regexp.pargen` from `88 -> 38` states (**`-87.2%` total**, enabling `canPreMultiplyState` for `regexp.pargen` as well).

### 3.5 Off-Heap `TypedArray` Padding (`> 64B`) & Packed `lookaheadSpan` (`v4g-offheap` & `v4i`)
11. **Pad `tokenIds`, `actionsTable`, and `gotoTable` to `>= 128` Bytes (Defeating V8's `64B` On-Heap `TypedArray` Threshold):**
    - **Root Cause Discovered in Assembly (`opt-parse-v4g-first-goto32-36.asm`, lines 498–506):** While `table`, `actionsTable`, `gotoTable`, `stack`, and `tree` compiled to 1-instruction constant-address loads (`movzxwl r14, [r14*2 + 0x75e3b80]`), `tokenIds[successState >> 8]` compiled to **8 instructions and 3 dependent memory loads** (`movq r9, [rdi+0x4f]`, `movq rsi, [rdi+0x47]`, `movq rdi, [rdi+0x37]`) that clobbered `r9` (`input.length`) and forced `input.length` to spill to `[rbp-0x70]` inside the 4x-unrolled lexer loop!
    - **Why:** V8's `--typed-array-max-size-in-heap=64` flag allocates any `TypedArray` `<= 64` bytes **on the movable V8 JS heap** (`tokenIds` was `40` bytes). Because GC can move on-heap backing stores, V8 cannot constant-fold the backing store pointer.
    - **Fix (`opt-parse-v4i-packed-span.asm`, line 487):** Padding `tokenIds` to `Math.max(128, remappedTokenIds.length)` (`128` bytes `> 64` bytes) forces an **off-heap non-moving allocation**, compiling `tokenIds[successState >> 8]` to a single `movzxbl rcx, [rdi + 0x75ee710]` instruction, keeping `input.length` in register `r9` across the entire function (`cmpl r8, r9`), and eliminating **368M L1d loads** (`-1,841` loads/parse) and **`-31.3 ms`** (`504.68 ms -> 473.39 ms`)!
12. **Pack `lookaheadStart` and `lookaheadEnd` into Single 32-Bit `lookaheadSpan` (`v4i-packed-span`):**
    - **Root Cause:** Keeping `lookaheadStart` and `lookaheadEnd` as two separate live variables across the parser loop spilled both to `[rbp-0x40]` and `[rbp-0x38]` and required shifting/ORing them on every `shift` (`lookaheadStart | (lookaheadEnd << 16)`).
    - **Fix (`opt-parse-v4i-packed-span.asm`, lines 292–303, 489–491):** Packing `lookaheadSpan = (result.start & 0xffff) | (result.end << 16)` immediately after `nextToken` reduces live loop variables by 1 (so all 6 hot loop variables `sp`, `tp`, `lookahead`, `lookaheadSpan`, `input`, `input.length` remain in CPU registers `rdi`, `r12`, `rcx`, `rsi`, `r8`, `r9` at the loop header) and turns `tree[tp + 1] = lookaheadSpan` into a direct register store `movl [rdi*4 + 0x7649f50], rsi`, saving another **`-470M` instructions** (`-2,351` insns/parse)!

---

## 4. Rejected Hypotheses (Tested & Discarded)

| Hypothesis | Measured / Assembly Impact | Why It Regressed |
| :--- | :--- | :--- |
| **Merge `gotoTable` into `actionsTable` (`v2b-unified-table`)** | `508.87 ms` vs `502.53 ms` (`v2c-goto32`); `+201M` instructions on 200k parses | Pre-shifting `nextState << 16` requires 32-bit entries (`Uint32Array`), which a 16-bit `actionsTable` cannot hold; keeping `gotoTable` as a separate `Uint32Array` saves `shll 16` on every `reduce` while fitting comfortably in L1d (`26.9 KiB` total). |
| **Check Dead-End Finals *After* `if (state === 0) break` (`v1a-deadend-after`)** | `512.01 ms` vs `504.58 ms` (`v1b-deadend-first`); `+660M` instructions on 200k parses | Checking `state === 0` first adds two branches to the continuable-final path (`WS`, `NUMBER`) and prevents Turboshaft from merging the `errorState` (`0`) and `deadEndFinal` (`<= 2816`) loop exits in the peeled 1st iteration. |
| **Carry `currentState` and `currentTp` as Loop-Header `Phi` Variables (`t1`)** | Spilled 3 extra registers at loop header (`[rbp-0x38]`, `[rbp-0x58]`, `[rbp-0x60]`) | Carrying unpacked `currentState` and `currentTp` alongside `sp` and `tp` across the inlined lexer call exceeded x86-64's 14 general-purpose registers; unpacking `const top = stack[sp]` inside the loop header keeps only `sp` and `tp` live. |
