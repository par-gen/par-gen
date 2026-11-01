# True North

## Primary Goal

**Generate the fastest JavaScript-based parser that can ever be generated.**

`par-gen` compiles declarative grammar definitions (`.pargen`) into standalone JavaScript LR(1) parsers and DFA lexers. Our number one objective is raw parsing throughput and low latency in JavaScript (V8)—outperforming every hand-written JavaScript parser (`acorn`, `@babel/parser`, `typescript`, `json5`) and closing the gap to native C/C++ implementations (`JSON.parse`, Bison, Tree-sitter).

---

## Core Engineering Principles

### 1. Mechanical Sympathy Down to the Metal
We do not treat the JavaScript engine or the CPU as a black box. Every design decision in [`@par-gen/codegen`](file:///workspaces/par-gen/packages/codegen/lib/javascript.js), [`@par-gen/lexer`](file:///workspaces/par-gen/packages/lexer/lib/lexer.js), and [`@par-gen/parser`](file:///workspaces/par-gen/packages/parser/lib/parser.js) is guided by how it compiles and executes across every layer of the stack:
- **V8 Ignition & TurboFan (Sea of Nodes):** Write generated JS that translates into tight `Word32` integer arithmetic, allows inlining of the lexer into the parser loop, avoids polymorphic inline caches, and eliminates deoptimization bailouts (`--trace-deopt`).
- **x86-64 / ARM64 Machine Code:** Inspect every instruction emitted by TurboFan (`--print-opt-code --code-comments`). Eliminate unnecessary instructions: heap `Map` checks, `Smi` tagging/untagging, `Float64` (`xmm`) conversions, redundant bounds checks, and stack spills.
- **CPU Cache Hierarchy (L1d / L1i / L2):** A modern core has a **32 KiB L1 data cache**. Lookup tables (`table`, `actionsTable`, `gotoTable`) and hot working memory (`stack`, `tree`) must be sized and packed to stay resident in L1d.
- **Branch Prediction & Instruction-Level Parallelism (ILP):** Minimize unpredictable branches in the inner lexer loop and keep data dependencies shallow so out-of-order CPU execution units (ALUs/AGUs) stay saturated.

### 2. Empirical Rigor Over Intuition
- **Measure, Don't Guess:** No optimization or branch experiment is merged without deterministic, low-variance (`CV < 1%`) benchmark numbers on an isolated physical CPU core, backed by a clear explanation of *why* the hardware/JIT executed it faster.
- **One Variable at a Time:** Each hypothesis is tested in isolation against the current baseline before combining changes. If an idea does not measurably improve performance (or simplifies code at zero performance cost), we do not adopt it.

### 3. Zero-Allocation Hot Loops
- Both the lexer (`next`) and parser (`parse`) hot loops must operate exclusively on flat, pre-allocated `TypedArray` buffers (`Uint8Array`, `Uint16Array`, `Uint32Array`) and scalar integer variables.
- No heap objects, arrays, closures, or strings may be allocated inside the tokenizing or shift/reduce loops. Syntax trees are written into a flat `Uint16Array` arena (`tree`) and exposed lazily when traversed.

### 4. Clean, Readable, Strictly Typed Generator Architecture
- While the *generated* code is ruthlessly specialized for V8 and CPU execution, the *generator* codebase (`packages/*`) must remain clean, readable, modular modern JavaScript (ESM).
- Every package must pass strict TypeScript type-checking via JSDoc annotations (`npm run check` / `tsc --build .`) and the full unit and specification test suite (`npm test`).
