# The quest for the fastest LR(1) parser generator in JavaScript

- [Intro](#intro)
- [Optimizing the DFA](#optimizing-the-dfa)
  - [(side-quest) porting the DFA to AssemblyScript](#side-quest-porting-the-dfa-to-assemblyscript)
  - [(side-quest) porting the DFA to C](#side-quest-porting-the-dfa-to-c)
  - [(side-quest) compiling the DFA to WebAssembly](#side-quest-compiling-the-dfa-to-webassembly)
- [Optimizing the parser](#optimizing-the-parser)
  - [(side-quest) analysing the overhead of deoptimization checks](#side-quest-analysing-the-overhead-of-deoptimization-checks)
  - [(side-quest) porting the parser to C](#side-quest-porting-the-parser-to-c)
  - [(side-quest) porting the parser to bison](#side-quest-porting-the-parser-to-bison)
  - [(side-quest) directly executable LR parser](#side-quest-directly-executable-lr-parser)
- [Part II: From 2x Slower than C++ to Matching `JSON.parse`, Beating V8's `new RegExp` by 2.5x, and 100% Self-Hosting](#part-ii-from-2x-slower-than-c-to-matching-jsonparse-beating-v8s-new-regexp-by-25x-and-100-self-hosting)
  - [1. Eliminating V8's `vcvtqsi2sd xmm0` Float64 Trap & `REX.W movsxlq` Sign Extensions](#1-eliminating-v8s-vcvtqsi2sd-xmm0-float64-trap--rexw-movsxlq-sign-extensions)
  - [2. Dead-End Final States First & Eliding Dead-End Rows from the Lexer Table](#2-dead-end-final-states-first--eliding-dead-end-rows-from-the-lexer-table)
  - [3. Fitting the Entire Working Set into the 32 KiB L1d Cache](#3-fitting-the-entire-working-set-into-the-32-kib-l1d-cache)
  - [4. Breaking the 64 KiB Barrier: 3-Word `Uint32Array` CST & `end22_len10` Packed Spans (409–443 MB/s)](#4-breaking-the-64-kib-barrier-3-word-uint32array-cst--end22_len10-packed-spans-409443-mbs)
  - [5. Solving V8's `ModuleContext` & `Phi` De-Optimization Puzzle for Auto-Growing Arenas](#5-solving-v8s-modulecontext--phi-de-optimization-puzzle-for-auto-growing-arenas)
  - [6. Replacing `new Proxy` with Monomorphic `class CstNode` (13.2x Faster CST Walks)](#6-replacing-new-proxy-with-monomorphic-class-cstnode-132x-faster-cst-walks)
  - [7. Multi-Mode Lexers at Single-Mode Speed: Beating V8's Native C++ `new RegExp` by 2.0x–2.6x](#7-multi-mode-lexers-at-single-mode-speed-beating-v8s-native-c-new-regexp-by-20x26x)
  - [8. 100% Compiler Self-Hosting & 15x–1,315x Faster Compilation](#8-100-compiler-self-hosting--15x1315x-faster-compilation)
  - [9. Summary of Verified Benchmarks & Hardware Performance Counters](#9-summary-of-verified-benchmarks--hardware-performance-counters)

## Intro

JavaScript tooling is slow. Specifically parsers and bundlers for JS written in JS (see also the [FAQ page of esbuild](https://esbuild.github.io/faq/#why-is-esbuild-fast)).

This has also been discovered by other people and so we've seen a lot of new parsers and bundlers for JS pop up in the past two or so years, which are written in other languages than JavaScript ([swc](https://github.com/swc-project/swc) is a fast TypeScript/JavaScript transpiler written in Rust, [esbuild](https://github.com/evanw/esbuild) is an extremely fast bundler and minifier written in Go and [simdjson](https://github.com/simdjson/simdjson) can parse gigabytes of JSON per second).

But we as JavaScript developers know, that good JavaScript doesn't need to be slow - in fact, there are many articles comparing the speed of V8 to native C and C++ code and in some cases, V8 comes very close ([comparison of C++ in Node.js native addons vs JavaScript](https://medium.com/the-node-js-collection/speed-up-your-node-js-app-with-native-addons-5e76a06f4a40) by Franziska Hinkelmann and [here is another comparison of C++ vs JavaScript](https://www.researchgate.net/publication/336408691_PERFORMANCE_COMPARISON_OF_C_AND_JAVASCRIPT_NODEJS_-V8_ENGINE). [This](https://www.stefankrause.net/wp/?p=144) is an older blog post comparing Java vs C++ vs JavaScript and there are [many](https://stackoverflow.com/questions/27432973/why-is-this-nodejs-2x-faster-than-native-c) [similar](https://stackoverflow.com/questions/39360403/how-can-node-js-be-faster-than-c-and-java-benchmark-comparing-node-js-c-java) questions on SO comparing C/C++ to JS. Of course we also did some comparisons of our code vs C code which we will show later).

We've pondered with the idea of building a fast JS parser in JS for quite a while too and decided to tackle this now.

Since we didn't want to create yet another handwritten recursive descent parser, we've decided to build an LR(1) parser generator, that can generate us the fastest possible parser and allows us to quickly iterate on performance improvements by changing the code generation.

We started by implementing a DFA which is the heart of our lexer (and will also be used inside the parser). Once we had a DFA that was capable of evaluating regular expressions, we began to optimize the generated code to be as fast as possible.

## Optimizing the DFA

To measure our DFA and find performance bottlenecks, we set up the following test code:

```javascript
const { performance } = require('perf_hooks');

const regex = "ab(c|d)(e|f)*((gh|ij)(kl|mn))*";
const string = "abcffghmnijmn";
const input = new TextEncoder().encode(string);
const regexp = new RegExp(regex);
const iterations = 25_000_000;

/*
const dfa = DFA.fromNFA(
  NFA.fromRegExp(regex)
)
  .minimal()
  .automata();

// generates us our optimized DFA whose code we will see in the next section
*/
const dfa = /* our generated code */;

{
  // make the function hot
  for (let i = 0; i < 1_000; i++) {
    dfa(input);
  }

  const start = performance.now();

  for (let i = 0; i < iterations; i++) {
    dfa(input);
  }

  console.log(
    `${iterations.toLocaleString()} iterations of dfa took ${(
      performance.now() - start
    ).toFixed(2)}ms`
  );
}

{
  // make the expr hot
  for (let i = 0; i < 1_000; i++) {
    regexp.test(string);
  }

  const start = performance.now();

  for (let i = 0; i < iterations; i++) {
    regexp.test(string);
  }

  console.log(
    `${iterations.toLocaleString()} iterations of RegExp took ${(
      performance.now() - start
    ).toFixed(2)}ms`
  );
}
```

Here is the generated code for our DFA, it consists of one big array whose indices are the states and each state contains an object that maps character codes to the next state:

```javascript
const table = [
  {
    97: 10,
    102: 0,
    103: 8,
    105: 9,
    // cut down for brevity
  },
  {
    97: 10,
    102: 10,
    103: 8,
    105: 9,
    // cut down for brevity
  },
  // here are many more of these
];
const finals = [0, 1];

const dfa = (input) => {
  let state = 7;
  for (let i = 0, l = input.length; i < l; i++) {
    state = table[state][input[i]];
  }
  return finals.includes(state);
};
```

_See the entire code [here (01-measure.js)](./dfa/01-measure.js)._

Running the above test code to compare it against the native `RegExp` implementation in V8 yielded the following results:

![Speed comparison of 25 million iterations of our DFA vs V8's RegExp gives us 2901.82ms for our DFA and 1311.39ms for V8's RegExp](./dfa/01-comparison.png)

Ouch. V8's native `RegExp` is more than twice as fast. Time to get our hands dirty and figure out why.

First, we took a look at deoptigate to figure out if there are any deoptimizations or megamorphic structures:

![Deoptigate's overview shows us that there is one megamorphic function](./dfa/01-deoptigate-overview.png)

Let's take a closer look as to why our function becomes megamorphic:

![Deoptigate's Inline Caches tab shows that the objects we use to index the character codes makes our function go megamorphic](./dfa/01-deoptigate-ics.png)

As we can see from the above screenshot, our function becomes megamorphic because the objects we use to map ASCII codes to their next state are all of different shapes.

We then switched to a `TypedArray` for our transitions table and encoded the two dimensional index (`state` and `character code`) as a single index by multiplying the number of states with the number of all possible input characters (`256` in our case).
This meant trading memory for speed, because we now fill a large array whereas we previously had small objects inside an array:

```diff
+ const columns = 256;
+ const states = ["S0","S1","S2","S3","S4","S5","S6","S7","S8","S9","S10"];
+ const data = new ArrayBuffer(columns * states.length);
+ const table = new Uint8Array(data);
+ Object.entries({"S0":{"a":"S10","b":"S10","c":"S10","d":"S10","e":"S0","f":"S0","g":"S8","h":"S10","i":"S9","j":"S10","k":"S10","l":"S10","m":"S10","n":"S10"},"S1":{"a":"S10","b":"S10","c":"S10","d":"S10","e":"S10","f":"S10","g":"S8","h":"S10","i":"S9","j":"S10","k":"S10","l":"S10","m":"S10","n":"S10"},"S2":{"a":"S10","b":"S10","c":"S0","d":"S0","e":"S10","f":"S10","g":"S10","h":"S10","i":"S10","j":"S10","k":"S10","l":"S10","m":"S10","n":"S10"},"S3":{"a":"S10","b":"S10","c":"S10","d":"S10","e":"S10","f":"S10","g":"S10","h":"S10","i":"S10","j":"S10","k":"S10","l":"S1","m":"S10","n":"S10"},"S4":{"a":"S10","b":"S10","c":"S10","d":"S10","e":"S10","f":"S10","g":"S10","h":"S10","i":"S10","j":"S10","k":"S10","l":"S10","m":"S10","n":"S1"},"S5":{"a":"S10","b":"S2","c":"S10","d":"S10","e":"S10","f":"S10","g":"S10","h":"S10","i":"S10","j":"S10","k":"S10","l":"S10","m":"S10","n":"S10"},"S6":{"a":"S10","b":"S10","c":"S10","d":"S10","e":"S10","f":"S10","g":"S10","h":"S10","i":"S10","j":"S10","k":"S3","l":"S10","m":"S4","n":"S10"},"S7":{"a":"S5","b":"S10","c":"S10","d":"S10","e":"S10","f":"S10","g":"S10","h":"S10","i":"S10","j":"S10","k":"S10","l":"S10","m":"S10","n":"S10"},"S8":{"a":"S10","b":"S10","c":"S10","d":"S10","e":"S10","f":"S10","g":"S10","h":"S6","i":"S10","j":"S10","k":"S10","l":"S10","m":"S10","n":"S10"},"S9":{"a":"S10","b":"S10","c":"S10","d":"S10","e":"S10","f":"S10","g":"S10","h":"S10","i":"S10","j":"S6","k":"S10","l":"S10","m":"S10","n":"S10"},"S10":{"a":"S10","b":"S10","c":"S10","d":"S10","e":"S10","f":"S10","g":"S10","h":"S10","i":"S10","j":"S10","k":"S10","l":"S10","m":"S10","n":"S10"}}).forEach(
+   ([from, transition]) => {
+     const row = states.indexOf(from);
+     Object.entries(transition).forEach(([symbol, to]) => {
+       const char = symbol.charCodeAt(0);
+       const value = states.indexOf(to);
+       table[row * columns + char] = value;
+     });
+   }
+ );
+
+ const finals = [0,1];

const dfa = (input) => {
  let state = 7;
  for (let i = 0, l = input.length; i < l; i++) {
-   state = table[state][input[i]];
+   state = table[state * columns + input[i]];
  }
  return finals.includes(state);
};
```

_See the entire code [here (02-measure.js)](./dfa/02-measure.js)._

And here are the results of that change:

![Speed comparison of 25 million iterations of our DFA vs V8's RegExp gives us 588.23ms for our DFA and 1491.63ms for V8's RegExp](./dfa/02-comparison.png)

Much better. And deoptigate also shows no more megamorphic inline caches.
Let's continue and see what else we can achieve.

For the next step we've pre-calculated the multiplication of the table indices, which meant that the values in the `TypedArray` are much larger, so we had to switch to a `Uint16Array`, but getting rid of one multiplication instruction per loop iteration saved us another ~50ms:

```diff
+ const table = new Uint16Array(2816).fill(10);
+ table[97] = 2560;
+ table[98] = 2560;
+ table[99] = 2560;
+ table[100] = 2560;
+ table[101] = 0;
+ table[102] = 0;
+ // cut down for brevity

const dfa = (input) => {
- let state = 7;
+ let state = 1792;
  for (let i = 0, l = input.length; i < l; i++) {
-   state = table[state * column + input[i]];
+   state = table[state + input[i]];
  }
  return finals.includes(state);
};
```

_See the entire code [here (03-measure.js)](./dfa/03-measure.js)._

During these improvements we noticed that we were comparing unfairly against V8's RegExp implementation, because our DFA does not handle capturing groups while the RegExp we've written for V8 does use capturing groups.

```diff
const { performance } = require('perf_hooks');

const regex = "ab(c|d)(e|f)*((gh|ij)(kl|mn))*";
const string = "abcffghmnijmn";
const input = new TextEncoder().encode(string);
- const regexp = new RegExp(regex);
+ const regexp = new RegExp("ab(?:c|d)(?:e|f)*(?:(?:gh|ij)(?:kl|mn))*");
const iterations = 25_000_000;
```

_See the entire code [here (03-measure.js)](./dfa/03-measure.js)._

After updating the regexp, V8's time went down from ~1400ms to ~860ms and our changes gaves us another ~50ms for the DFA execution time.

We're now about 300ms faster than the native implementation:

![Speed comparison of 25 million iterations of our DFA vs V8's RegExp gives us 534.48ms for our DFA and 864.95ms for V8's RegExp](./dfa/03-comparison.png)

### (side-quest) porting the DFA to AssemblyScript

Next we ported the DFA to [AssemblyScript](https://www.assemblyscript.org/) to compare its performance to the JS version.

The change was fairly easy to implement:

```diff
- const table = new Uint16Array(2816).fill(10);
+ const table = new Int32Array(2816).fill(10);
table[97] = 2560;
table[98] = 2560;
table[99] = 2560;
table[100] = 2560;
table[101] = 0;
table[102] = 0;
// cut down for brevity

+ const input = new Int32Array(13);
+ input[0] = 97;
+ input[1] = 98;
+ input[2] = 99;
+ input[3] = 102;
+ input[4] = 102;
+ input[5] = 103;
+ input[6] = 104;
+ input[7] = 109;
+ input[8] = 110;
+ input[9] = 105;
+ input[10] = 106;
+ input[11] = 109;
+ input[12] = 110;

- const dfa = (input) => {
+ export funtion dfa(): bool {
  let state = 1792;
  for (let i = 0; i < 13; i++) {
    state = table[state + input[i]];
  }
  return state === 0 || state === 256;
};
```

_See the entire code [here (04-assemblyscript.ts)](./dfa/04-assemblyscript.ts)._

Note: We've inlined the input array for our tests, because we wanted te measure just the processing performance without the overhead of copying / transferring the array between JavaScript and WebAssembly for now.

Even though we tried several variations on the optimization levels and told the compiler to not inline any runtime helpers the generated WebAssembly contained several helper functions to deal with TypedArrays and even had some `call`s in the hot loop which made its performance much worse than anticipated.

```
asc 04-assemblyscript.ts --target release -O3z --converge --noAssert --runtime none --noExportMemory --pedantic
```

_See the generated WAT file [here (04-assemblyscript.wat)](./dfa/04-assemblyscript.wat)._

### (side-quest) porting the DFA to C

Coming soon...

### (side-quest) compiling the DFA to WebAssembly

_Todo:_ need to rework this section (liftoff vs turbofan, comparing machine code generated by turbofan (wasm) vs turbofan (js) vs native)

We then ported the DFA to C and compiled it using clang to WebAssembly and to a native binary as comparison and here are the results of that:

Compiling to a native binary:

```
clang -O3 dfa_main.c dfa.c -o dfa.bin
```

Compiling to WebAssembly using clang:

```
clang  --target=wasm32 -O3 -nostdlib -Wl,--no-entry -Wl,--export-all -o dfa.wasm dfa_main.c dfa.c && wasm2wat dfa.wasm > dfa.wat
```

![Speed comparison of 25 million iterations of our DFA vs vs AssemblyScript vs WebAssembly vs V8's RegExp vs native (C) gives us: 529.03ms for JS, 2289.19ms for AssemblyScript, 639.04ms for WebAssembly, 831.09ms for V8's RegExp and 325.71ms for a native binary](./dfa/04-comparison.png)

_See the source code for [04-dfa.c](./dfa/04-dfa.c), [04-dfa_main.c](./dfa/04-dfa_main.c), [04-measure.js](./dfa/04-measure.js) and [04-webassembly.wat](./dfa/04-webassembly.wat)._

For now we don't see any other improvements that could help us make our DFA faster (it's basically a 3 line function anyway).
We've tried a few other optimizations, such as:

- using a while loop that counts down to zero
- trying to signal V8 that all integers are 32bit unsigned by using old `asm.js` tricks (`state = table[state + input[i|0]];`)
- and many other things, which didn't bring much discernible difference

And since most of our tools (deoptigate, node clinic, perf, etc) could not give us more insights, we continued working on the parser.
Later, when we had a working parser and lexer, we've found some more things to optimise, but more on that later.

## Optimizing the parser

At this stage we felt pretty good about the performance of our DFA and continued implementing the LR(1) parser generator.
Once we had it working we created a JSON grammar to generate a JSON parser that we could compare to others.

We set-up a simple benchmarking script to compare our parser to V8's `JSON.parse()`:

```javascript
import { performance } from "perf_hooks";
import { parse } from "./generated/parser.js";

const buffer = Buffer.from(" [ true , false , null ] ");
const string = buffer.toString();
const iterations = 100_000;

{
  // make the function hot
  for (let i = 0; i < 1_000; i++) {
    parse(buffer);
  }

  const start = performance.now();
  for (let i = 0; i < iterations; i++) {
    parse(buffer);
  }
  console.log(
    `${iterations.toLocaleString()} iterations of our parser took ${(
      performance.now() - start
    ).toFixed(2)} ms`
  );
}
{
  const start = performance.now();
  for (let i = 0; i < iterations; i++) {
    JSON.parse(string);
  }
  console.log(
    `${iterations.toLocaleString()} iterations of our parser took ${(
      performance.now() - start
    ).toFixed(2)} ms`
  );
}
```

Below is a shortened example of our generated lexer:

```javascript
const states = [
  "WS",
  "CHAR",
  "LOWER_E",
  // here are many more entries...
];

const table = new Uint16Array(15360).fill(15104);
table[32] = 15104; // 0 -> 59
table[116] = 15104; // 0 -> 59
table[114] = 15104; // 0 -> 59
// here are many more entries...

const visited = new Uint16Array(1024);

const next = (input, offset) => {
  // 51
  let state = 13056;
  visited[0] = 13056;

  // try to find match
  let i = offset;
  let j = 0;
  let l = input.length;
  while (i < l) {
    state = table[state + input[i]];
    i++;
    j++;
    visited[j] = state;
  }

  // track back to last matched final state
  let success = false;
  let n = j;
  while (!success && n > 0) {
    success =
      0 === visited[n] ||
      256 === visited[n] ||
      512 === visited[n] ||
      768 === visited[n] ||
      // here are many more entries in increments of 256 all the way up to 12800
      12800 === visited[n];
    n--;
  }
  n = n + 1;

  if (success) {
    return {
      state: states[visited[n] / 256],
      start: offset,
      end: offset + n,
    };
  }
  return {
    state: i === input.length ? EOF : ERROR,
    start: -1,
    end: -1,
  };
};
```

And here is a simplified example of our generated parser:

```javascript
import { next as nextToken } from "./lexer.js";

const states = [
  new Set([
    { name: "S", tokens: ["Json"], marker: 0, lookahead: "@expound.EOF" },
    { name: "Json", tokens: ["Element"], marker: 0, lookahead: "@expound.EOF" },
    // many more entries
  ]),
  // many more entries
];

const startState = states[0];

const actions = new Map([
  [
    states[0],
    new Map([
      [
        "WS",
        {
          op: "shift",
          symbol: undefined,
          state: states[1],
        },
      ],
      // many more entries
    ]),
  ],
  // many more entries
]);

const goto = new Map([
  [
    states[0],
    new Map([
      ["Json", states[2]],
      ["Element", states[3]],
      // many more entries
    ]),
  ],
  // many more entries
]);

export function parse(input) {
  const stream = Uint8Array.from(Buffer.from(input));
  let offset = 0;

  let result = nextToken(stream, offset);
  let { state: lookahead, start, end } = result;
  offset = end;

  const stack = [
    {
      state: startState,
      tree: undefined,
    },
  ];

  while (true) {
    const currentState = stack[0].state;

    const actionSet = actions.get(currentState);
    const action = actionSet.get(lookahead);

    switch (action.op) {
      case "done":
        return stack[0].tree;
      case "shift":
        const stackItem = {
          state: action.state,
          tree: { name: lookahead, start, end },
        };

        result = nextToken(stream, offset);
        lookahead = result.state;
        start = result.start;
        offset = end = result.end;

        stack.unshift(stackItem);

        break;
      case "reduce":
        const item = Array.from(currentState.values()).find(
          (item) => item.name === action.symbol && item.lookahead === lookahead
        );
        const items = stack.splice(0, item.tokens.length);

        const tree = {
          name: action.symbol,
          // the stack grows from 0 to n -> we need to reverse the parse tree
          items: items.map((r) => r.tree).reverse(),
        };

        const nextState = goto.get(stack[0].state)?.get(action.symbol);
        stack.unshift({
          state: nextState,
          tree,
        });

        break;
    }
  }
}
```

Running the above benchmark with this simple JSON input `" [ true , false , null ] "` gave us the following output:

![The benchmark results for 100 thousand iterations show: 1310.10ms for our parser vs 29.58ms for V8's JSON.parse](./parser-lexer/01-comparison.png)

We are almost 45x slower than the native `JSON.parse`. Let's take a look at some tools to figure out what is going on.

We started by taking a look at Linux's `perf` tool to see where most of our time is spent.

![The perf report shows that 40% is spent in the lexer's next method, 11% in our parse function and 6.7% in Builtins_FindOrderedHashMapEntry](./parser-lexer/01-perf.png)

_The above output was generated by running our Node.js script with `perf record -g node --perf-basic-prof ./measure.js` and then generating the report with `perf report --no-children`._

We can see in the perf report that about 40% of the time is spent in the lexer's `next()` function. So let's take a look at its source code to figure out what's happening.
One thing that we noticed was that long list of logical OR operators to compare the final state.
We realized that all final states are increments of 256 from 0 to 12800, so we switched it out for a single less-than-equal comparison:

```diff
  while (!success && n > 0) {
-     success =
-       0 === visited[n] ||
-       256 === visited[n] ||
-       512 === visited[n] ||
-       768 === visited[n] ||
-       // here are many more entries in increments of 256 all the way up to 12800
-       12800 === visited[n];
+     success = visited[n] <= 12800;
    n--;
  }
```

That reduced our time for 100k iterations from 1310.10ms to 809.77ms.

The next changes are unfortunately squashed inside a single commit that also updates the JSON grammar to be spec compliant which makes it a bit difficult to extract the single changes and compare them against the baseline, but I'll try my best to re-create what we did.

From the perf report above we saw that the next hottest functions are `Builtins_FindOrderedHashMapEntry`, `Builtins_ArrayPrototypeSplice`, `Builtins_SetOrSetIteratorToList`, `Builtins_ArrayPrototypeUnshift` and `Builtins_ArrayPrototypeReverse`.

We replaced the stack (which was the cause for all the builtins array methods) with a custom stack implementation (an array and a stack pointer variable) and we split-up the actions map into an array of actions and separate `state + lookahead -> action` and `state + action.symbol -> nextState` tables:

```diff
const startState = states[0];

- const actions = new Map([
-   [
-     states[0],
-     new Map([
-       [
-         "WS",
-         {
-           op: "shift",
-           symbol: undefined,
-           state: states[1],
-         },
-       ],
-       // many more entries
-     ]),
-   ],
-   // many more entries
- ]);

- const goto = new Map([
-   [
-     states[0],
-     new Map([
-       ["Json", states[2]],
-       ["Element", states[3]],
-       // many more entries
-     ]),
-   ],
-   // many more entries
- ]);

+ const actions = [
+   {
+     op: "shift",
+     state: 1,
+     symbol: undefined,
+   },
+   // many more shift/reduce entries
+ ];

+ const actionsTable = new Uint16Array(13396).fill(0xffff);
+ actionsTable[1] = 0; // actionTable 0 -> WS -> shift
+ actionsTable[2] = 1; // actionTable 0 -> TRUE -> shift

+ const gotoTable = new Uint16Array(9456).fill(0xffff);
+ gotoTable[0] = 11;
+ gotoTable[1] = 12;

-  const stack = [
-    {
-      state: startState,
-      tree: undefined,
-    },
-  ];

+  const stack = new Array(10);
+  stack[0] = {
+    state: states.indexOf(startState),
+    tree: undefined,
+  };
+  let sp = 0;

export function parse(input) {
-  const stream = Uint8Array.from(Buffer.from(input));
+  const stream = Buffer.from(input);
  let offset = 0;

  let result = nextToken(stream, offset);
  let { state: lookahead, start, end } = result;
  offset = end;
+   let lookaheadIndex = terminals.indexOf(lookahead);

  while (true) {
-     const currentState = stack[0].state;
+     const currentState = stack[sp].state;

-     const actionSet = actions.get(currentState);
-     const action = actionSet.get(lookahead);
+     const actionLookup = actionsTable[currentState * 68 + lookaheadIndex];
+     const action = actions[actionLookup];

    switch (action.op) {
      case "done":
-         return stack[0].tree;
+         return stack[sp].tree;
      case "shift":
        const stackItem = {
          state: action.state,
          tree: { name: lookahead, start, end, items: undefined },
        };

        result = nextToken(stream, offset);
        lookahead = result.state;
+         lookaheadIndex = terminals.indexOf(lookahead);
        start = result.start;
        offset = end = result.end;

-         stack.unshift(stackItem);
+         stack[++sp] = stackItem;

        break;
      case "reduce":
-         const item = Array.from(currentState.values()).find(
-           (item) => item.name === action.symbol && item.lookahead === lookahead
-         );
+         let item;
+         for (const value of states[currentState].values()) {
+           if (value.name === action.symbol && value.lookahead === lookahead) {
+             item = value;
+             break;
+           }
+         }
-         const items = stack.splice(0, item.tokens.length);
+         const items = new Array(item.tokens.length);
+         for (let i = 0; i < item.tokens.length; i++) {
+           items[i] = stack[i + sp + 1 - item.tokens.length].tree;
+         }
+         sp -= item.tokens.length;

        const tree = {
          name: action.symbol,
          start,
          end,
-           // the stack grows from 0 to n -> we need to reverse the parse tree
-           items: items.map((r) => r.tree).reverse(),
+           items,
        };

-         const nextState = goto.get(stack[0].state)?.get(action.symbol);
+         const nextState =
+           gotoTable[stack[sp].state * 48 + nonTerminals.indexOf(action.symbol)];
-         stack.unshift({
+         stack[++sp] = {
          state: nextState,
          tree,
-         });
+         };

        break;
    }
  }
}
```

Unfortunately the next commits were squashed and contained more changes (such as making the JSON grammar complete), so its overall runtime increased compared to the previous run. We are now at about 2100ms for 100k iterations.
But here is a screenshot of the perf report after all these changes and we can definitely see an improvement there:

![Perf report: 63% in our parse function, 17% in Builtins_StrictEqual, 4% in Builtins_StringEqual, 4% in Builtins_ArrayIndexOfSmiOrObject](./parser-lexer/02-perf.png)

Many of the array and map builtins are now gone and we can see that a lot more time is now spent in our `parse()` function.

We were able to save another 100ms by exiting the lexer loop early when encountering an error state:

```diff
const next = (input, offset) => {
  // 51
  let state = 13056;
  visited[0] = 13056;

  // try to find match
  let i = offset;
  let j = 0;
  let l = input.length;
-   while (i < l) {
+   while (state !== 11776 && i < l) {
    state = table[state + input[i]];
    i++;
    j++;
    visited[j] = state;
  }
```

Another huge boost was achieved by skipping searching for semantic actions if they are not required. This brought the time down from ~2000ms to ~344ms for 100k iterations.

```diff
      case "shift":
        const stackItem = {
          state: action.state,
          tree: { name: lookahead, start, end, items: undefined },
        };

-         for (const item of states[currentState].values()) {
-           if (item.tokens[item.marker] === lookahead) {
-             item.semanticAction?.(stack, sp);
-           }
-         }

        result = nextToken(stream, offset);
```

Replacing all `indexOf` calls by pre-computing the table indizes and replacing all strings with constant integers we've managed to further reduce the time from ~344ms to ~268ms. Compared to the `JSON.parse` function we're now only 10x slower instead of the initial 45x.

We increased the number of iterations from 100k to 1 million and here is the comparison:

![Comparison of 1 million iterations between our parser and JSON.parse shows: 2475.88ms for our parser and 269.13ms for JSON.parse](./parser-lexer/03-comparison.png)

The next big improvement was reducing the number of shift/reduce steps by rewriting our JSON grammar. Previously we had productions to handle whitespaces and numbers in our syntactical grammar, by moving this entirely into the lexer we were able to reduce the time from ~2500ms to ~1800ms.

We've got another 300ms through various optimizations:

We reduced garbage collector work by re-using a single object allocated in the lexer to return its state:

```diff
const visited = new Uint16Array(1024);

+ // the currently matched lexeme
+ const lexeme = {
+   state: -1,
+   start: -1,
+   end: -1,
+ };

const next = (input, offset) => {

  if (success) {
-    return {
-      state: tokenIds[visited[n] / 256 + 2],
-      start: offset,
-      end: offset + n,
-    };
+    lexeme.state = tokenIds[visited[n] / 256 + 2];
+    lexeme.start = offset;
+    lexeme.end = offset + n;
+    return lexeme;
  }
-  return {
-    state: i === l ? 0 : 1,
-    start: -1,
-    end: -1,
-  };
+  lexeme.state = i === l ? 0 : 1;
+  lexeme.start = -1;
+  lexeme.end = -1;
+  return lexeme;
};
```

```diff
export function parse(input) {
  const stream = Uint8Array.from(Buffer.from(input));

-  let result = nextToken(stream, offset);
-  let { state: lookahead, start, end } = result;
-  offset = end;
+  let result = nextToken(stream, 0);
+  let lookahead = result.state;
+  let start = result.start;
+  let end = result.end;
+  let offset = end;
```

We further reduced garbage collector work by splitting the stack array into two arrays, one for the state stack and another one for the created tree, this meant we're creating less objects that are thrown away:

```diff
   let end = result.end;
   let offset = end;

-  const stack = new Array(10);
-  stack[0] = {
-    state: 0,
-    tree: undefined,
-  };
+  const stack = new Uint8Array(512);
+  const treeStack = new Array(512);
+  stack[0] = 0;
   let sp = 0;

   while (true) {
-    const currentState = stack[sp].state;
+    const currentState = stack[sp];

     const actionLookup = actionsTable[currentState * 30 + lookahead];

       case 0: // shift
-        const stackItem = {
-          state: action.state,
-          tree: {
-            name: parserSymbols[lookahead],
-            start,
-            end,
-            items: undefined,
-          },
+        stack[++sp] = action.state;
+        treeStack[sp] = {
+          name: parserSymbols[lookahead],
+          start,
+          end,
+          items: undefined,
         };

         result = nextToken(stream, offset);

      case 2: // reduce

-        const nextState = gotoTable[stack[sp].state * 26 + action.symbol];
-        stack[++sp] = {
-          state: nextState,
-          tree,
-        };
+        const nextState = gotoTable[stack[sp] * 26 + action.symbol];
+        stack[++sp] = nextState;
+        treeStack[sp] = tree;
```

We replaced an inner loop in the `parse()` function to find the reducer state with an indexed access into an array:

```diff
       case 1: // reduce
-        let item;
-        for (const value of states[currentState].values()) {
-          if (value.name === action.symbol && value.lookahead === lookahead) {
-            item = value;
-            break;
-          }
-        }
-        if (!item) {
-          throw new Error(
-            `No valid state ${
-              grammarRuleNames[action.symbol]
-            }(${lookahead}) found`
-          );
-        }
+        let stackItemsToReduce =
+          reducerStates[
+            lookahead * 2688 + currentState * 32 + action.symbol
+          ];

-        const items = new Array(item.tokens.length);
-        for (let i = 0; i < item.tokens.length; i++) {
-          items[i] = treeStack[i + sp + 1 - item.tokens.length];
+        const items = new Array(stackItemsToReduce);
+        for (let i = 0; i < stackItemsToReduce; i++) {
+          items[i] = treeStack[i + sp + 1 - stackItemsToReduce];
         }
-        sp -= item.tokens.length;
+        sp -= stackItemsToReduce;

         const nextState = gotoTable[stack[sp] * 26 + action.symbol];
```

We replaced `Buffer.from(input)` with `Buffer.isBuffer(input) ? input : Buffer.from(input)`.

And we moved the array creation outside of the `parse()` function.

we're now down to ~1500ms for a loop of 1 million iterations.

![Comparison of 1 million iterations between our parser and JSON.parse shows: 1504.33ms for our parser and 264.39ms for JSON.parse](./parser-lexer/04-comparison.png)

Let's take another look at the perf report:

![A perf report showing: 71% in our parse function and a lot of 1.3% until 0.3% functions related to GC and memory allocation](./parser-lexer/04-perf.png)

We still have a lot of garbage collection and allocations going on. Looking at the code, it seems to be the tree objects that we create in every iteration of the parse loop.
We then replaced the object tree with a typed array and a Proxy to access it. This reduced our time from about 1500ms to about 660ms.

```javascript
/**
 * We use the stack to store shifted/reduced states in [sp] and we also use
 * [sp + 1] to store the tree pointer references to shifted/reduced nodes.
 * This allows us to use a single typed array to store two kinds of data.
 * * [sp] always points to the current state on top of the stack and
 * * [sp + 1] always points to the tree item currently on top of the stack
 * ___________________________________
 * |_dummy_|_state_|_tp_|_state_|_tp_|...
 */
const stack = new Uint8Array(512);

/**
 * This typed array contains the syntax tree from a parse.
 * A node is stored in the following layout:
 * struct Node {
 *  name: uint16,
 *  start: uint16,
 *  end: uint16,
 *  numChildren: uint16,
 *  firstChild: uint16,
 *  nextSibling: uint16,
 * }
 * This enables efficient storage of nodes with variable number of children and
 * fast DFS traversal.
 */
const tree = new Uint16Array(8192);
```

```diff
       case 0: // shift
-        stack[++sp] = action.state;
-        treeStack[sp] = {
-          name: parserSymbols[lookahead],
-          start: result.start,
-          end: result.end,
-          items: undefined,
-        };
+        tree[tp] = lookahead; // name
+        tree[tp + 1] = result.start;
+        tree[tp + 2] = result.end;
+        tree[tp + 3] = 0; // leaf nodes have no children
+        tree[tp + 4] = 0; // leaf nodes need no first child
+        tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling
+
+        // shift current address on top of "address stack"
+        stack[sp + 1] = tp;
+
+        sp += 2;
+        stack[sp] = action.state;

         result = nextToken(stream, result.end);

       case 2: // reduce

-        const items = new Array(stackItemsToReduce);
-        for (let i = 0; i < stackItemsToReduce; i++) {
-          items[i] = treeStack[i + sp + 1 - stackItemsToReduce];
-        }
-        sp -= stackItemsToReduce;
+        // multiply by two because our stack contains adresses and states interleaved
+        sp -= stackItemsToReduce * 2;
+
+        tree[tp] = action.symbol; // name
+        tree[tp + 1] = -1; // start
+        tree[tp + 2] = -1; // end
+        tree[tp + 3] = stackItemsToReduce; // number of children
+        tree[tp + 4] = stack[sp + 1]; // first child
+        tree[stack[sp - 1] + 5] = tp; // next sibling
+
+        stack[sp + 1] = tp;

         const nextState = gotoTable[stack[sp] * 32 + action.symbol];
-        stack[++sp] = nextState;
-        treeStack[sp] = {
-          name: parserSymbols[action.symbol],
-          start: -1,
-          end: -1,
-          items,
-        };
+        sp += 2;
+        stack[sp] = nextState;

         break;
```

Here is a comparison of parsing a somewhat more complex object (our own `package.json`):

![Comparison of our parser vs JSON.parse with 1 million iterations of parsing a package.json: Our parser took 14335.41ms and JSON.parse took 7767.65ms](./parser-lexer/05-comparison.png)

And let's also take a look at the perf report for parsing a `package.json`:

![Perf report for 1 million iterations of parsing a package.json: 97% of time is spent inside our parse function](./parser-lexer/05-perf.png)

### (side-quest) analysing the overhead of deoptimization checks

_Todo:_ https://masc.soe.ucsc.edu/docs/iiswc16.pdf, learning about the sea-of-nodes, bounds-check elimination, exploitation, patching Node.js to remove all deoptimization checks (10-15% improvement)

### (side-quest) porting the parser to C

_Todo:_ comparing performance of native C to V8 JS (8s native, 9s V8's JSON.parse, 14s our parser, 11s our parser without deoptimization checks)

### (side-quest) porting the parser to Bison

_Todo:_ using our own lexer, comparing performance to our parser ported to C (8s native, 8.5s bison (without tree creation))

### (side-quest) directly executable LR parser

_Todo:_ https://link.springer.com/content/pdf/10.1007/3-540-53669-8_82.pdf - "readable parser" (a function for each shift/reduce action), "executable parser" (single function with nested switch/case instructions)

---

## Part II: From 2x Slower than C++ to Matching `JSON.parse`, Beating V8's `new RegExp` by 2.5x, and 100% Self-Hosting

At the end of Part I, our generated JSON parser had come a long way from its initial 45x deficit against `JSON.parse`, reaching ~1.85x–2.06x slower than V8's hand-written C++ `JSON.parse` on `package.json` (`964.93 ms` for 100k iterations on our isolated AMD EPYC 9R14 / Zen 4 benchmark core). Yet major architectural ceilings remained:

1. **Still 2x slower than C++ `JSON.parse`**, executing over `100,000` instructions per `package.json` parse and thrashing the 32 KiB L1 data cache with a **143.6 KiB** table footprint.
2. **Hard 64 KiB document limit:** The 6-word `Uint16Array` CST stored `start` and `end` byte offsets as 16-bit unsigned integers (`0..65,535`), overflowing on any real-world file larger than 64 KiB (such as `package-lock.json` at `494,990` bytes).
3. **Slow `Proxy`-backed CST traversal** and a multi-mode lexer bottleneck that made `@par-gen/regexp` (`130.84 ms` for 8,000 regexes) **17x slower** than V8's `new RegExp`.
4. **Hand-rolled bootstrap compilers** and an $O(N^2)$ NFA/DFA/LR(1) construction pipeline that took **~90 seconds** to compile `regexp.pargen`.

To cross the chasm from "fast for JavaScript" to **matching native C++ `JSON.parse` within 1.002x–1.03x** and **beating V8's C++ `RegExpParser` by 2.04x–2.58x**, we stopped treating V8 and the CPU as a black box. Every change was verified on an isolated physical core of an AWS EC2 `c7a.large` instance (AMD EPYC 9R14 Zen 4, 3.7 GHz, `ThreadsPerCore: 1`, 32 KiB L1d / 32 KiB L1i / 1 MiB L2, ASLR disabled, Node.js `v26.13.0` / V8 `14.6.202.34` with Turboshaft) by inspecting `--print-opt-code --code-comments` x86-64 disassembly and Linux `perf stat` hardware counters.

---

### 1. Eliminating V8's `vcvtqsi2sd xmm0` Float64 Trap & `REX.W movsxlq` Sign Extensions

When we inspected the TurboFan/Turboshaft x86-64 disassembly (`node --print-opt-code --code-comments`) of the Part I lexer, we discovered three silent instruction-level taxes in the hot tokenizing path:

#### A. The `successState / 256` Float64 (`xmm0`) Induction Trap
In JavaScript, `/` is IEEE-754 floating-point division. Even when `successState` is always a multiple of `256`, writing `tokenIds[successState / 256 + 2]` forced V8 to convert the 32-bit integer register into a 64-bit float (`vcvtqsi2sd xmm0`), divide by `256.0`, and convert back to an integer with a deoptimization check for `-0.0` or fractional remainder (`vcvttsd2si` + `ucomisd`). Furthermore, `tokenIds` was a JS array literal (`PACKED_SMI_ELEMENTS`), emitting `Smi` tag checks and `sarq 32` untagging shifts.

Replacing `successState / 256` with a bitwise shift `successState >> 8` and storing `tokenIds` in a `Uint8Array` (and later indexing `tokenIds[successState]` directly on compact dead-end states `< 256`) eliminated every `xmm0` instruction from `parse()`.

#### B. Eliminating `REX.W movsxlq` via `offset & 0x7fffffff` (`Unsigned31` Range Proof)
In the 4x-unrolled inner lexer loop:

```javascript
while (i < l) {
  state = table[state + input[i]];
  i++;
  // ...
}
```

Because `offset` is passed as a parameter `next(input, offset)`, V8's range analysis only knows `i` is a `Signed32` (`[-2^31, 2^31 - 1]`). To check `i < input.length` (`Unsigned31`) and index `input[i]`, Turboshaft emitted a 64-bit sign-extension instruction (`REX.W movsxlq rbx, rbx`) on **every single byte** of the 4x-unrolled loop so negative numbers would wrap to huge unsigned 64-bit indices and trigger the unsigned bounds check (`jae`).

Adding a single bitwise mask at the function prologue:

```javascript
let i = offset & 0x7fffffff;
```

proves to Turboshaft's range analysis that `i >= 0` (`Unsigned31`) at loop entry and across `i++`, completely eliminating `REX.W movsxlq` across all 4 unrolled byte iterations.

#### C. Scalar Replacement of `{ state, start, end }` via Escape Analysis & Packed `lookaheadSpan`
In Part I, we reused a module-scoped `const lexeme = { state: -1, start: -1, end: -1 }` singleton to avoid GC allocations. However, because `lexeme` escaped to module scope, V8 had to materialize stores and loads to memory on every token. Conversely, when returning a fresh `{ state, start, end }` object literal, if `result` remained live across the `while (true)` parser loop (because `result.start` and `result.end` were read inside `case 0: // shift` after arbitrary `reduce` iterations), `result` became a loop-header `Phi(result_entry, result_shift)`—defeating V8's `EscapeAnalysis`!

By returning a fresh `{ state, start, end }` from the inlined `nextTokenInitial` **and immediately destructuring and packing** the token span into a single 32-bit integer register before any loop merge:

```javascript
let result = nextTokenInitial(stream, 0);
let lookahead = result.state;
let lookaheadSpan = result.end | ((result.end - result.start) << 22);
```

`result` never enters a loop `Phi`. Turboshaft scalar-replaces `{ state, start, end }` completely into CPU registers (`rcx`, `rsi`) with **zero heap allocations, zero memory stores, and one fewer live register across the parser loop** (`-470M` instructions across 200k `package.json` parses).

#### D. Defeating V8's `64B` On-Heap `TypedArray` Threshold (`--typed-array-max-size-in-heap=64`)
While auditing `opt-parse.asm`, we noticed a striking anomaly: `table`, `actionsTable`, `gotoTable`, `stack`, and `tree` compiled to 1-instruction constant-address loads (`movzxwl r14, [r14*2 + 0x75e3b80]`), whereas `tokenIds[successState >> 8]` compiled to **8 instructions and 3 dependent memory loads** (`movq r9, [rdi+0x4f]`, `movq rsi, [rdi+0x47]`, `movq rdi, [rdi+0x37]`) that clobbered `r9` (`input.length`) and forced `input.length` to spill to `[rbp-0x70]` inside the 4x-unrolled lexer loop!

**Why?** V8 defaults to `--typed-array-max-size-in-heap=64`. Because `tokenIds` had 40 entries (`40 bytes <= 64 bytes`), V8 allocated its backing store **on the movable V8 JS heap**, preventing JIT constant-folding of the base pointer. Padding static lookup tables (`tokenIds`, `actionsTable`, `gotoTable`, `shiftActionsTable`) to `>= 128` bytes forces an **off-heap non-moving allocation**, compiling `tokenIds[...]` to a single instruction:

```nasm
movzxbl rcx, [rdi + 0x75ee710] ; 1-instruction constant-folded off-heap load!
```

This kept `input.length` in register `r9` across the entire function and eliminated **368 million L1d loads** (`-1,841` loads/parse) on 200k `package.json` parses.

---

### 2. Dead-End Final States First & Eliding Dead-End Rows from the Lexer Table

In `json.pargen`, `11` of the `16` accepting DFA states (`{`, `}`, `[`, `]`, `:`, `,`, `"..."`, `true`, `false`, `null`—accounting for **`211` out of `347` tokens** in `package.json`, or `60.8%` of all tokens) are **dead-end final states**: they have **zero outgoing non-error transitions**.

Previously, on every single one of those `211` tokens, the lexer recorded `successState = state; successPos = i;` and then had to loop around, bounds-check `i < l`, read the *next* byte from `input`, look up `table[state + nextByte]` (always `0`), and only then `break`. Worse still, allocating 256-column transition rows filled with `0` for those 11 dead-end final states wasted `11 * 512 = 5.5 KiB` of the 32 KiB L1d cache!

We partitioned all DFA states into four contiguous bands:

```text
[ errorState (0) | deadEndFinals (1 .. D) | continuableFinals (256 .. F*256) | nonFinals (> F*256) ]
```

1. **Zero `table` rows for dead-end final states (`1 .. D`):** Because the lexer exits the `while (i < l)` loop immediately whenever `state <= D`, dead-end final states never index into `table[state + input[i]]`. Thus we assign them compact IDs `1 .. D` (`< 256`) and **completely elide their 256-column rows from `table`**—shrinking the JSON lexer `table` by **-27.5%** (`20.0 KiB -> 14.5 KiB`) and the RegExp initial lexer `table` by **-88.9%** (`4,608 -> 512` entries = `1.0 KiB`)!
2. **Unshifted `tokenIds[successState]` lookup:** For single-mode lexers where every dead-end final state corresponds to a unique token and no two tokens share the same dead-end state, `state` (`1 .. D`) is already a compact index, compiling `tokenIds[successState]` to a single unshifted `movzxbl` load.
3. **Why checking `state <= remappedLastDeadEndFinal` *first* unlocks V8's peeled 1st-byte fast path:**
   In V8 `v26.13.0` Turboshaft (`opt-parse.asm`), V8 **peels the 1st iteration** of `while (i < l)` where `state` is the constant start state:

```nasm
0x7fffc8006621  movzxwl rdi, [rdi*2 + 0x7634f30] ; 1st byte transition from start state
0x7fffc8006629  addl rbx, 0x1                    ; i++
0x7fffc800662c  cmpl rdi, 0x600                  ; state <= remappedLastFinal?
0x7fffc8006632  jna 0x7fffc8006645
...
0x7fffc8006645  cmpl rdi, 0xb                    ; state <= remappedLastDeadEndFinal (11)?
0x7fffc800664b  jna 0x7fffc800689d               ; IMMEDIATE EXIT before unrolled loop & StackGuard!
```

Because `state <= 11` is checked first, all `143` single-character punctuation tokens (`{`, `}`, `[`, `]`, `:`, `,`) jump directly to the token return block on the peeled 1st byte **before** V8's register spills (`movq [rbp-0x28], r12`), **before** the V8 `StackGuard` interrupt check (`cmpb [r13-0x4f]`), and **without ever entering the 4x-unrolled loop**! Across 200k `package.json` parses, this eliminated **810 million instructions** (`-4,051` insns/parse) and cut branch mispredictions by **-23.8%**.

---

### 3. Fitting the Entire Working Set into the 32 KiB L1d Cache

An AMD Zen 4 (or Intel Golden Cove) physical core has a **32 KiB L1 data cache** (~4–5 cycle latency) vs. a 1 MiB L2 cache (~12–14 cycle latency). At the end of Part I, our tables totaled **143.6 KiB**:
- `table` (Lexer DFA): `52.2 KiB` (`102` states × `256` columns × `2` bytes)
- `reducerStates`: `86.0 KiB` (`3D` lookup table `lookahead * 2688 + currentState * 32 + action.symbol`)
- `actionsTable` + `gotoTable`: `5.4 KiB`

We attacked all three sources of table bloat:

1. **Grouping Hopcroft `initialPartitions` by Winning Token UID (`102 -> 39` DFA states):**
   In `packages/lexer/lib/lexer.js`, Hopcroft DFA minimization previously placed every accepting NFA subset state into a singleton initial partition `[final]` so different tokens wouldn't merge. However, that *also* prevented Hopcroft's algorithm from merging equivalent accepting states belonging to the **same** token (such as hex-escape and number states in JSON)! Grouping `initialPartitions` by `final.uids[0]` (and by `(final.uids[0], canContinue)` when dead-end row elision is active) shrank the JSON lexer DFA from **102 states (52.2 KiB) to 39 states (and `14.5 KiB` after dead-end row elision)**.
2. **BFS Queue Deduplication & Fixpoint Bisimilar LR(1) State Merging (`84 -> 36` JSON states, `297 -> 30` RegExp states):**
   During LR(1) canonical collection construction (`calculateStatesAndTransitionTable` in `packages/parser/lib/parser.js`), `existing` previously checked only `itemSets` (visited states) and missed `newItemSets` (states queued in the BFS frontier). Fixing BFS frontier deduplication and adding **fixpoint bisimilar LR(1) state merging**—which iteratively merges states whose `actions`, `goto`, and normalized shift semantic action rows are identical (such as completed unit productions `Value -> Object •`, `Value -> Array •`, `Value -> String •`)—shrank `json.pargen` from **84 to 36 states (`-57.1%`)** (and **22 states** in `SkipWS` mode) and `regexp.pargen` from **297 to 30 states (`-89.9%`)**.
3. **Deleting the 86 KiB `reducerStates` Table via 1-Bit `shift`/`reduce` Action Tagging & Direct `word0` Shift:**
   In a deterministic LR(1) automaton, every `(state, lookahead)` entry in `actionsTable` already uniquely determines the reduction rule—and therefore both the LHS `actionSymbol` and the RHS length `stackItemsToReduce`! The 86 KiB 3D `reducerStates` table was 100% redundant.
   Better still, we designed the 16-bit `actionsTable` encoding so that its bit layout matches the CST `tree[tp]` node header `word0` (`symbol | (nChildren << 8)`):
   - **Bit 0 = `0` (`shift`):** `targetState << 1`
   - **Bit 0 = `1` (`reduce`):** `(stackItemsToReduce << 9) | (actionSymbol << 1) | 1`
   - **`0xfffe` (`done`) & `0xffff` (`error`):** Merged into a single unsigned `>= 0xfffe` exit check!

Look at what V8 Turboshaft emits for the entire parser loop dispatch and `reduce` header in `opt-parse.asm`:

```nasm
; 1. Single unsigned compare handles both done (0xfffe) and error (0xffff)!
cmpl r14, 0xfffe
jnc 0x7fffc8006a19                 ; predicted not-taken exit

; 2. 1-bit test dispatches shift (0) vs reduce (1)
testb r14, 0x1
jnz 0x7fffc8006919                 ; 0 = shift (fallthrough), 1 = reduce

; 3. Inside reduce: word0 = actionLookup >>> 1 is ALREADY actionSymbol | (nChildren << 8)!
shrl r14, 1                        ; word0 = actionLookup >>> 1
movl [r12*4 + 0x7649f50], r14      ; tree[tp] = word0 (zero re-packing!)
```

By also pre-multiplying state indices by the power-of-two table stride (`32`) and storing pre-shifted `(nextState * 32) << 20` values in a `Uint32Array` `gotoTable`, the entire JSON lexer + parser table footprint dropped from **143.6 KiB to 22.8 KiB** (`17.3 KiB` in `SkipWS` mode)—fitting inside the **32 KiB L1d cache** with room to spare for the active `stack` and `tree` prefix!

---

### 4. Breaking the 64 KiB Barrier: 3-Word `Uint32Array` CST & `end22_len10` Packed Spans (409–443 MB/s)

In Part I, each CST node in `tree = new Uint16Array(8192)` occupied **6 `uint16` words (12 bytes)** (`name`, `start`, `end`, `numChildren`, `firstChild`, `nextSibling`), and `stack = new Uint8Array(512)` interleaved 8-bit states and 8-bit tree pointers. That design had two fatal flaws:
1. Writing 6 separate 16-bit stores on every `shift` and `reduce` executed 6 bounds checks and 6 `movw` instructions per node.
2. Storing `start` and `end` as 16-bit integers (`Uint16Array`) overflowed at **65,535 bytes (64 KiB)**!

First, we coalesced the 6 `uint16` stores into **3 `uint32` words (still 12 bytes/node!)** in `Uint32Array` and packed `(tp, state)` into a single 32-bit `stack` word (`tp | (state << 20)`):
- **`word0` (`tree[tp]`):** `symbol | (nChildren << 8)` (`nChildren === 0` for leaves, `> 0` for internal nodes)
- **`word1` (`tree[tp + 1]`):** Packed token span for leaves, or `firstChild` pointer for internal nodes (since internal nodes derive their `.start` and `.end` lazily from their first and last leaf descendants!)
- **`word2` (`tree[tp + 2]`):** `nextSibling` pointer

Next, how do we represent byte offsets beyond 64 KiB in `word1` without expanding `tree` to 4 words (16 bytes/node) and without spilling an extra register across the parser loop?
- If we packed `start | (len << 22)` (`start22_len10`), then calling `nextToken(stream, end)` on every `shift` required reconstructing `end` via `(lookaheadSpan & 0x3fffff) + (lookaheadSpan >>> 22)` (a mask, a shift, and an add on the critical path).
- **The `end22_len10` Insight:** Instead, we pack **`end` in the low 22 bits (`0 .. 4,194,303` = `4.19 MiB`)** and **`len = end - start` in the high 10 bits (`<< 22`)** (with a fallback sentinel `0x3ff` for the rare token `>= 1,023` bytes):

```javascript
let lookaheadSpan =
  result.end |
  ((result.end - result.start < 1023 ? result.end - result.start : 1023) << 22);
```

Look at what happens on every `shift` in `opt-parse.asm`:
1. `tree[tp + 1] = lookaheadSpan` is a single register store: `movl [rdi*4 + disp32], rsi`.
2. Passing `end` to `nextToken(stream, lookaheadSpan & 0x3fffff)` is a **single `andl r12, 0x3fffff` instruction**!
3. When reading `.start` or `.end` on a `CstNode` during CST traversal, `end = span & 0x3fffff` and `start = end - (span >>> 22)`.

With `end22_len10` and 20-bit tree pointers (`tp`), `par-gen` parses `package-lock.json` (`494,990` bytes, `67,034` tokens, `112,667` CST nodes) in **`242.10 ms` (`409 MB/s`) in lossless `PreserveWS` mode** and **`223.41 ms` (`443 MB/s`) in `SkipWS` mode**—within **`1.03x` of V8's native C++ `JSON.parse` (`216.54 ms`, `457 MB/s`)** while constructing a full Concrete Syntax Tree!

---

### 5. Solving V8's `ModuleContext` & `Phi` De-Optimization Puzzle for Auto-Growing Arenas

To support documents of arbitrary size (even multi-megabyte JSON files with `> 1,000,000` `tree` words) without pre-allocating a massive fixed `Uint32Array`, `stack` and `tree` must dynamically grow when `sp` or `tp` reaches capacity.

However, when we naively changed `const tree = new Uint32Array(...)` to `let tree = new Uint32Array(...)` at ES module scope and added a growth check inside `parse()`, performance on `package.json` **regressed by +17% (`469 ms -> 550+ ms`)**! Inspecting V8's C++ source code (`src/objects/contexts.cc:154`) and Turboshaft disassembly revealed two subtle V8 JIT invariants:

1. **Why `let tree` at ES Module Scope De-optimizes Constant Folding:**
   In V8, ES module top-level bindings live in a `SourceTextModule` (`ModuleContext`). Unlike `ScriptContext`, V8's `Context::Lookup` for `ModuleContext` **does not track mutable `ContextSidePropertyCell::kConst`**! Thus, `const tree` is folded by Turboshaft as a `HeapConstant`, whereas `let tree` is loaded from the `ModuleContext` slot on every access. Worse, reassigning a local `let currentTree` inside the `while (true)` loop creates a loop-header `Phi` node, preventing Turboshaft from constant-folding the `TypedArray` backing-store address into `movl [rbx*4 + disp32], rsi`.
2. **Why `64 KiB` (`16,384` words) vs. `2 MiB` (`524,288` words) Matters for glibc `MMAP_THRESHOLD`:**
   When `new Uint32Array(16384)` (`64 KiB`) is allocated at startup, glibc `malloc` places it in the low 32-bit `brk` heap (`< 0x7fffffff`, e.g., `0x0762...`), allowing x86-64 `[r15*4 + disp32]` scaled-index addressing with **zero base register**. When a `2 MiB` (`524,288`-word) buffer is allocated up front, glibc `malloc` uses `mmap` (`0x7ffff43d9010`), forcing V8 to burn a 64-bit register (`REX.W movq rdi, 0x7ffff43d9010`) on every `tree` store!

#### The Solution: `const arena = { stack, tree }` + Cold-Path `Object.create(arena)` (`MigrateSlowToFast`)
We store `stack` and `tree` on a `const arena` object initialized with `16,384`-word (`64 KiB`) buffers in the 32-bit `brk` heap:

```javascript
const arena = {
  stack: new Uint32Array(16384),
  tree: new Uint32Array(16384),
};
```

In V8, properties on a `const` object literal start with descriptor constness `PropertyConstness::kConst`. In the hot `parse()` function, we read `const stack = arena.stack; const tree = arena.tree;` once before the loop. Because `arena` is a `HeapConstant` and its `.stack` and `.tree` descriptors are `kConst`, Turboshaft constant-folds both `TypedArray` pointers identically to top-level `const` bindings!

If a large input ever reaches the arena boundary (`tp + 3 >= tree.length`), `parse()` bails out to a non-inlined `parseCold()` function that doubles `arena.tree` (copying existing words so any previously returned `CstNode` references remain 100% valid) and then **restores `PropertyConstness::kConst` on `arena`'s hidden class**:

```javascript
function growTree(minLength) {
  let newLength = arena.tree.length;
  while (newLength <= minLength) newLength <<= 1;
  const next = new Uint32Array(newLength);
  next.set(arena.tree);
  // Deleting and re-adding the property transitions `arena` to dictionary mode;
  // Object.create(arena) triggers V8's MakePrototypesFast -> MigrateSlowToFast,
  // which creates a fresh fast Map with PropertyConstness::kConst!
  delete arena.tree;
  arena.tree = next;
  Object.create(arena);
  return next;
}
```

As a result:
- Small inputs (`Short JSON`, `package.json`) execute in the 32-bit `brk` heap at full speed (`297.64 ms` for 1M Short JSON, `469.80 ms` for 100k `package.json`, IPC `4.80`).
- Large inputs (`package-lock.json` at `495 KB`, or a `1.53 MB` JSON document with `291,506` CST nodes = `874,521` `tree` words) seamlessly grow `arena.tree` and re-tier to `kConst` in **`4.78 ms` (`320–443 MB/s`)**!

---

### 6. Replacing `new Proxy` with Monomorphic `class CstNode` (13.2x Faster CST Walks)

Once parsing `package.json` dropped below `4.7 µs`, walking the resulting CST became the next bottleneck. Originally, `createProxy` wrapped `{ stream, tree, pointer }` in a JavaScript `new Proxy(target, proxyHandler)`. Even after hoisting `proxyHandler` to module scope and replacing recursive `.start`/`.end` child-array allocations with an $O(\text{depth})$ integer pointer walk (`while ((tree[p] >>> 8) > 0) p = tree[p + 1] & 0xfffff;`—which sped up 2,000 CST walks from `305.50 ms` to `143.01 ms`), every property access (`node.name`, `node.start`, `node.end`, `node.items`) still had to cross V8's `ProxyGetProperty` runtime stub, which cannot be inlined by Turboshaft.

An earlier experiment on `origin/replace-tree-proxy` tried returning object literals with closures `{ get value() { ... }, get items() { ... } }`, which was **7.68x slower than `Proxy` (`1,039 ms`)** because V8 had to allocate a `FunctionContext`, `JSFunction` closures, and `AccessorPair` descriptors per node.

Instead, we replaced `new Proxy` with a **monomorphic `class CstNode`** holding private fields (`#stream`, `#tree`, `#pointer`), prototype getters (`name`, `start`, `end`, `value`, `items`, `children`), `toJSON()`, and `[Symbol.for("nodejs.util.inspect.custom")]()`:

```javascript
class CstNode {
  #stream;
  #tree;
  #pointer;
  constructor(stream, tree, pointer) {
    this.#stream = stream;
    this.#tree = tree;
    this.#pointer = pointer;
  }
  get name() {
    return parserSymbols[this.#tree[this.#pointer] & 0xff];
  }
  // ...
}
```

Because `CstNode` has a single fixed hidden class (`Map`) and zero per-instance closures, allocating a `new CstNode(stream, tree, tp)` is a fast 24-byte bump-pointer allocation in V8's nursery, and Turboshaft **inlines `node.name`, `node.start`, `node.end`, and `node.items` directly into the caller**!

| CST Access Architecture | 2,000 Full CST Walks of `package.json` (`694,000` Nodes Visited) | Retired Instructions (`20k` Walks) | Speedup |
| :--- | ---: | ---: | :--- |
| Object-Literal Getters (`origin/replace-tree-proxy`) | `1,039.00 ms` | — | `0.29x` (3.4x slower) |
| Initial `new Proxy` (Recursive `.start`/`.end` via `.items`) | `305.50 ms` | — | `1.00x` (Baseline) |
| Optimized `new Proxy` (Iterative `tree` Span Walk) | `135.23 ms`–`143.01 ms` | `25.05B` (`1,252.5M`/2k) | `2.14x`–`2.26x` faster |
| **Monomorphic `class CstNode` (`HEAD`)** | **`23.15 ms` *(min `22.90 ms`)*** | **`4.49B` (`224.5M`/2k)** | **`13.20x` faster (`5.84x` faster than `Proxy`, `44.9x` faster than object literals!)** |

---

### 7. Multi-Mode Lexers at Single-Mode Speed: Beating V8's Native C++ `new RegExp` by 2.0x–2.6x

While JSON uses a single lexer mode (`initial`), regular expressions (`parsers/regexp/regexp.pargen`) require a **3-mode stateful lexer** (`initial`, `character-class`, and `hex-escape`) driven by parser semantic actions (`lexer.push("character-class")` on `[`, `lexer.pop()` on `]`, `lexer.push("hex-escape")` on `\x`).

Originally, multi-mode parsers suffered from three catastrophic performance cliffs in `packages/codegen/lib/javascript.js`:
1. The lexer mode stack was a JS array of strings (`let states = ["initial"]`), and every token called `nextToken[states[0]](stream, offset)`—a megamorphic dynamic property lookup by string name!
2. Whenever a grammar had *any* semantic action (`hasSemanticActions`), **every single `shift`** iterated over a `Set` of LR(1) items (`states[currentState / N].forEach(...)`) searching for matching semantic actions!
3. Multi-mode lexers could not use direct dead-end token ID encoding (`tokenIds[successState]`).

We eliminated all three bottlenecks:
1. **Readable `LexerMode` Integer Enum & `Uint8Array` Mode Stack:** We emit a readable enum (`const LexerMode = { INITIAL: 0, CHARACTER_CLASS: 1, HEX_ESCAPE: 2 }`) and a flat `const lexerStack = new Uint8Array(64)` with integer `lexerMode` and `lexerSp` variables. Dispatching `nextToken` uses an inlineable integer ternary chain (`lexerMode === 0 ? nextTokenInitial(...) : ...`) so Turboshaft inlines every mode's lexer directly into `parse()`!
2. **$O(1)$ Pre-Computed `shiftActionsTable`:** At codegen time, we pre-compute `const shiftActionsTable = new Uint8Array(...)` indexed by `actionIndex = currentState + lookahead` (`0` = no action, `1..K` = semantic action ID), completely deleting the `states` `Set` array from the generated parser and turning shift semantic actions into a single `movzxbl` load and integer switch.
3. **Multi-Mode Dead-End Token IDs & 30-State Bisimilar Merge:** Because `tokenIds` is per-mode while `parserSymbols` token indices are global across modes, direct dead-end token ID encoding works identically in multi-mode lexers. Combined with semantic-action-aware bisimilar LR(1) state merging, `regexp.pargen` shrank to **30 LR(1) states** with a `1.0 KiB` initial lexer table.

#### Benchmark: `@par-gen/regexp` vs. V8 Native C++ `new RegExp` & Hand-Written JS Parsers
To benchmark against V8's C++ `v8::internal::RegExpParser::VerifyRegExpSyntax` fairly, note that calling `new RegExp(pattern)` repeatedly with the *exact same string pointer* hits V8's per-isolate `CompilationCacheRegExp` hash table (`69–89 ns` cache lookup without invoking the C++ parser). When given unseen pattern strings (`8,000` regex parses per trial across `8` patterns from `json.pargen`, `regexp.pargen`, and the test suite), V8 executes its C++ syntax parser on every pattern:

| Parser | Implementation | 8,000 RegExp Parses (Median / Min) | Per-Regex Latency | `perf stat` Instructions (`80k` Parses) | Relative Speed |
| :--- | :--- | ---: | ---: | ---: | :--- |
| **`@par-gen/regexp` (`Buffer`, `HEAD`)** | **Self-bootstrapped LR(1) (`30` states, `LexerMode` enum + `shiftActionsTable`)** | **`3.63 ms`** *(min **`3.58 ms`**)* | **`454 ns` / regex (`2.20M`/sec)** | **`939.5M` (`11,744` insn/regex)** | **`1.00x` (Fastest — 100% Lossless CST)** |
| **`@par-gen/regexp` (`Buffer`, Round 5)** | Self-bootstrapped LR(1) (`49` states, 2-mode lexer) | `4.61 ms` *(min `4.52 ms`)* | `576 ns` / regex (`1.74M`/sec) | `4,803.3M` (`60,042` insn/regex) | `1.27x slower` |
| **`V8 Native new RegExp` (Uncached C++)** | **V8 C++ `RegExpParser::VerifyRegExpSyntax` (`80k` unseen strings)** | **`7.42 ms`–`9.38 ms`** *(min **`7.06 ms`**)* | **`928`–`1,173 ns` / regex** | **`4,843.3M` (`60,542` insn/regex)** | **`2.04x`–`2.58x` slower than `@par-gen/regexp`!** |
| `@babel/parser` (`/regex/`) | Hand-written JS AST parser | `13.89 ms` *(min `13.62 ms`)* | `1.74 µs` / regex | — | **3.83x slower** |
| `typescript` (`ts.createSourceFile`) | Hand-written JS CST parser | `22.86 ms` *(min `22.83 ms`)* | `2.86 µs` / regex | — | **6.30x slower** |
| `acorn` (`v8.2.4`, `/regex/`) | Hand-written JS + `RegExpValidationState` | `61.88 ms` *(min `61.77 ms`)* | `7.74 µs` / regex | — | **17.05x slower** |
| `V8 Native new RegExp + .test("")` (Uncached) | V8 C++ `ParseRegExp` + Irregexp Bytecode/JIT | `115.97 ms`–`136.56 ms` *(min `110.42 ms`)* | `14.50`–`17.07 µs` / regex | — | **31.95x–37.62x slower** |
| Legacy Multi-Mode `@par-gen/regexp` (`Set` + `Proxy`) | Generated LR(1) before `LexerMode` enum & `shiftActionsTable` | `130.84 ms` | `16.36 µs` / regex | `24,264.9M` (`303,312` insn/regex) | **36.04x slower** |
| Legacy `@par-gen/nfa` (Hand-rolled `origin/main`) | Hand-rolled recursive `seq()` / `next()` | `240.51 ms`–`1,209.82 ms` | `30.06`–`151.23 µs` / regex | — | **66.26x–333.28x slower** |

`@par-gen/regexp` in pure JavaScript (`3.63 ms`, `11,744` instructions/regex) beats V8's native C++ `new RegExp` (`7.42–9.38 ms`, `60,542` instructions/regex) by **`2.04x–2.58x` in wall-clock time and `5.15x` in retired CPU instructions**, while producing a full lossless Concrete Syntax Tree!

---

### 8. 100% Compiler Self-Hosting & 15x–1,315x Faster Compilation

Finally, we turned `par-gen` upon itself—replacing every hand-written parser in the compiler toolchain with a self-generated `@par-gen` LR(1) parser and overhauling the NFA, DFA, and LR(1) construction algorithms:

1. **Self-Hosting `@par-gen/nfa` via `@par-gen/regexp` + Direct 2-State Character-Class & Flat-Tree Thompson NFAs (`packages/nfa/lib/thompson.js`):**
   - Replaced the slow, buggy hand-written recursive regex parser in `@par-gen/nfa` with `@par-gen/regexp`.
   - Instead of expanding character classes (`[...]`) and `.` (`DOT`) into 255-branch alternation strings (`a|b|c|...`) that produced **~1,020 Thompson $\varepsilon$-states** per character class, `thompson.js` walks `@par-gen/regexp`'s flat `Uint32Array` CST buffer directly (`buildFromFlatTree`, zero `CstNode` allocations) using a single shared `BuildContext` accumulator and emits a **2-state `[start, final]` PartialNFA with a single multi-symbol transition `[start, symbols, final]`** for `CharacterClass` and `DOT`.
2. **Self-Hosting `@par-gen/grammar` via `packages/grammar/grammar.pargen` (`packages/grammar/lib/parser.js`):**
   - Authored [`packages/grammar/grammar.pargen`](../packages/grammar/grammar.pargen) (`12` tokens, `23` grammar rules, `42` LR(1) states) and replaced the hand-written `.pargen` parser with a self-generated `@par-gen` parser + flat `Uint32Array` CST extractor (`extractFromFlatTree`), accelerating `.pargen` grammar parsing by **4.60x** (`1,676.49 ms -> 363.87 ms` for 30,000 grammars).
   - Verified **100% byte-for-byte fixed-point convergence**: regenerating `@par-gen/grammar`, `@par-gen/regexp`, and `@par-gen/json` from their `.pargen` grammars produces the exact same bytes on disk.
3. **`BigInt` Bitmask Powerset Construction (`30x–71x` faster) & `BigInt` Hopcroft Minimization (`7.3x–16x` faster):**
   - In [`packages/dfa/lib/powerset.js`](../packages/dfa/lib/powerset.js), replaced recursive `calculateEpsilonClosure` Set/Array allocations with precomputed `BigInt` $\varepsilon$-closure bitmasks (using transitive closure propagation) and dense integer symbol-transition tables, cutting NFA-to-DFA powerset construction on `json.pargen` from **`106.56 ms` to `1.45–3.50 ms` (`30.4x–71.1x` faster)**.
   - In [`packages/dfa/lib/hopcroft.js`](../packages/dfa/lib/hopcroft.js), replaced string keys (`partition.join(",")`) and $O(|P| \cdot |\Sigma| \cdot |S|)$ `Array.includes` scans with `BigInt` partition bitmasks and precomputed inverse transition bitmasks `inv[symbol][target]`, cutting Hopcroft minimization on `json.pargen` from **`28.97 ms` to `3.97 ms` (`7.3x` faster)**.
4. **$O(1)$ Indexed LR(1) Item Lookup (`itemLookupCache` in `packages/parser/lib/parser.js`):**
   - During LR(1) closure/goto construction, `getItem(items, rule, dotPosition, lookahead)` previously ran an $O(|items|)$ linear `.find()` scan across all existing LR(1) items (`~20,000+` items for `regexp.pargen`), taking **`17,748 ms`** (`96%` of `regexp.pargen` compile time). Indexing items in an $O(1)$ lookup table (`itemLookupCache`) and fixing multi-occurrence `calculateFollows` cut `regexp.pargen` compilation from **`~90,000 ms` (`origin/main`) to `66.01 ms` (`1,315x` faster!)**.

| Stage | Grammar Parser & Compiler Architecture | `json.pargen` Lexer (`generateFromTokens`) | `json.pargen` Full (`generateParser`) | `regexp.pargen` Full (`generateParser`) | `grammar.pargen` Full (`generateParser`) | `.pargen` Parsing (`30k` grammars) |
| :--- | :--- | ---: | ---: | ---: | ---: | ---: |
| **`origin/main` (Initial Baseline)** | Hand-rolled `@par-gen/grammar` + hand-rolled `@par-gen/nfa` (`1,020`-state `[...]`) | ~310 ms | ~501 ms (`84` states) | ~90,000 ms (`297` states) | — | 1,676.49 ms |
| **Round 4 (`085df29`, Bisimilar Merge)** | Hand-rolled `@par-gen/grammar` + linear `getItem` | ~140 ms | 155 ms (`36` states) | 18,539 ms (`38` states) | — | 1,676.49 ms |
| **Round 5 (`0f05059`, `@par-gen/regexp` Bootstrap)** | Hand-rolled `@par-gen/grammar` + `@par-gen/regexp` + $O(1)$ `itemLookupCache` | 138.70 ms | 148.39 ms (`36` states) | 252.40 ms (`49` states) | — | 1,676.49 ms |
| **Round 6 (`HEAD`, 100% Self-Hosted + `BigInt` Powerset/Hopcroft + Flat-Tree NFA)** | **Self-hosted `@par-gen/grammar` + `@par-gen/regexp` + `BigInt` DFA + Flat-Tree Thompson** | **`3.94`–`8.58 ms` (`35x` faster!)** | **`10.93`–`34.43 ms` (`14.6x`–`45.8x` faster!)** | **`66.01`–`68.41 ms` (`30` states, `1,315x` faster!)** | **`4.24`–`9.36 ms` (`42` states)** | **`363.87`–`391.36 ms` (`4.60x` faster!)** |

---

### 9. Summary of Verified Benchmarks & Hardware Performance Counters

All measurements below were recorded on an isolated physical CPU core (CPU 1) of an AWS EC2 `c7a.large` instance (AMD EPYC 9R14 Zen 4, 3.7 GHz, `ThreadsPerCore: 1`, ASLR disabled, Node.js `v26.13.0` / V8 `14.6.202.34`):

#### A. End-to-End JSON Optimization Progression (`origin/main` to `HEAD`)

| Configuration | Mode | Full Parse (`package.json`, 100k) | Short JSON (`67B`, 1M) | Large File (`package-lock.json` `495 KB`, 200 iter) | CST Walk (`package.json`, 2k walks) | Parser States / Tables |
| :--- | :--- | ---: | ---: | ---: | ---: | ---: |
| **`origin/main` (Part I Baseline)** | `PreserveWS` | 964.93 ms | 1,008.72 ms | *Overflow (> 64 KiB)* | — | 84 states / 143.6 KiB |
| **Round 2 (`7f611fe`, Bit-Packed + L1d Fit)** | `PreserveWS` | 601.85 ms | 537.70 ms | *Overflow (> 64 KiB)* | — | 84 states / 30.8 KiB |
| **Track 1 (`c910fc6`, 3-Word `Uint32` CST + `Unsigned31`)** | `PreserveWS` | 510.36 ms *(min 508.55)* | 477.35 ms *(min 476.13)* | *Overflow (> 64 KiB)* | — | 84 states / 30.8 KiB |
| **+ Tracks A + B + C (`65144e6`, Dead-End First + 1-Bit Action + 36 States)** | `PreserveWS` | 467.93 ms *(min 465.85)* | 330.99 ms *(min 328.65)* | *Overflow (> 64 KiB)* | 305.50 ms | 36 states / 26.9 KiB |
| **+ Track D (`b3611d3`, Compact Dead-End Lexer Rows)** | `PreserveWS` | 465.33 ms *(min 463.55)* | 302.22 ms *(min 300.69)* | *Overflow (> 64 KiB)* | 305.50 ms | 36 states / 22.8 KiB |
| **+ Track G + H (`81e26c5`, `end22_len10` 4 MB Spans + Iterative Span Walk)** | `PreserveWS` | 474.39 ms *(min 473.94)* | 328.98 ms *(min 326.92)* | 242.92 ms *(min 242.62, 408 MB/s)* | 143.01 ms *(2.14x faster)* | 36 states / 22.8 KiB |
| **+ Round 6 (`HEAD`, `CstNode` + Low-Heap `arena` Auto-Grow)** | **`PreserveWS` (Default)** | **469.80 ms** *(min **468.90**)* | **297.64 ms** *(min **296.40**)* | **242.10 ms** *(min **241.80**, **409 MB/s**, auto-grows > 4 MB)* | **23.15 ms** *(min **22.90**, **13.20x faster**)* | **36 states / 22.8 KiB** |
| **+ Track W (`SkipWS`, 16-bit span)** | `SkipWS` (<= 64 KB) | **412.58 ms** *(min **410.64**)* | **273.95 ms** *(min **270.97**)* | *Overflow (> 64 KiB)* | — | 22 states / 17.3 KiB |
| **+ Track W + G (`SkipWS` + `end22_len10`)** | **`SkipWS` (`--skip WS`)** | **428.86 ms** *(min **428.68**)* | **343.68 ms** *(min **341.69**)* | **223.41 ms** *(min **222.68**, **443 MB/s**)* | **18.40 ms** *(with `CstNode`)* | **22 states / 17.3 KiB** |

#### B. Competitor Comparison (`package.json` 10k Iterations & `package-lock.json` `495 KB` 200 Iterations)

| Parser | Implementation Type | CST / Trivia Fidelity | `package.json` (10k iter) | `package-lock.json` (`495 KB`, 200 iter = `99 MB`) | Relative on `package-lock.json` |
| :--- | :--- | :--- | ---: | ---: | :--- |
| `JSON.parse` (V8 Native C++) | Hand-written C++ | Lossy (JS Value Only, No AST/CST) | 40.97 ms | **216.54 ms** *(min 216.09 ms, **457 MB/s**)* | **0.89x** (`SkipWS` is within **1.03x**!) |
| **`par-gen` (`SkipWS`, `--skip WS`)** | **Generated JS LR(1) + CST** | **Syntactic CST (`72,633` nodes)** | **41.26 ms** *(min **41.06 ms**, **1.002x** of C++!)* | **223.41 ms** *(min **222.68 ms**, **443 MB/s**)* | **0.92x (`1.03x` of native C++!)** |
| **`par-gen` (`PreserveWS` `HEAD`, Default)** | **Generated JS LR(1) + Lossless CST** | **100% Lossless CST (`112,667` nodes)** | **46.53 ms** *(46.98 ms w/ auto-grow)* | **242.10 ms** *(min **241.80 ms**, **409 MB/s**)* | **1.00x (Baseline Lossless Reference)** |
| `@babel/parser` (`v7.17.3`) | Hand-written JS | AST (No `WS` Trivia Nodes) | 246.32 ms | 1,233.39 ms *(min 1,226.58 ms)* | **5.08x slower** |
| `typescript` (`ts.parseJsonText`) | Hand-written JS | CST with Trivia Accessors | 485.27 ms | 1,937.27 ms *(min 1,932.81 ms)* | **7.97x slower** |
| `acorn` (`v8.2.4`) | Hand-written JS | AST (No `WS` Trivia Nodes) | 240.70 ms | 2,081.57 ms *(min 2,040.37 ms)* | **8.57x slower** |
| `json5` (`v2.2.0`) | Hand-written JS | Lossy (JS Value Only) | 952.29 ms | 4,604.20 ms *(460.42 ms / 20 iter)* | **18.95x slower** |

#### C. Linux `perf stat` Hardware Counters (`package.json` 200k Parses & `package-lock.json` 500 Parses)

| Workload & Variant | Mode | CPU Cycles (Per Parse) | Instructions Retired (Per Parse) | IPC | Branches Executed (Per Parse) | Branch Misses |
| :--- | :--- | ---: | ---: | ---: | ---: | ---: |
| `package.json` (`1,841 B`, 200k): **Round 2 (`7f611fe`)** | `PreserveWS` | `4,404.5M` (`22,023`) | `20,158.4M` (`100,792`) | `4.58` | `5,007.6M` (`25,038`) | `2,002,760` (`0.04%`) |
| `package.json` (`1,841 B`, 200k): **Track 1 (`c910fc6`)** | `PreserveWS` | `3,908.3M` (`19,542`) | `18,593.7M` (`92,969`) | `4.76` | `4,490.9M` (`22,454`) | `2,080,683` (`0.05%`) |
| `package.json` (`1,841 B`, 200k): **`HEAD` (`PreserveWS`)** | **`PreserveWS`** | **`3,655.1M` (`18,276`)** | **`16,153.4M` (`80,767`)** | **`4.42`** | **`4,053.1M` (`20,266`)** | **`1,944,800` (`0.05%`)** |
| `package.json` (`1,841 B`, 200k): **`HEAD` (`SkipWS`)** | **`SkipWS`** | **`3,332.9M` (`16,665`)** | **`13,729.0M` (`68,645`)** | **`4.12`** | **`3,624.7M` (`18,123`)** | **`2,200,199` (`0.06%`)** |
| `package-lock.json` (`495 KB`, 500): **`HEAD` (`PreserveWS`)** | **`PreserveWS`** | **`2,417.6M` (`4.84M` / `9.77` cyc/B)** | **`8,589.0M` (`17.18M` / `34.7` insn/B)** | **`3.55`** | **`2,258.1M` (`4.52M`)** | **`7,469,323` (`0.33%`)** |
| `package-lock.json` (`495 KB`, 500): **`HEAD` (`SkipWS`)** | **`SkipWS`** | **`2,223.3M` (`4.45M` / `8.98` cyc/B)** | **`7,471.5M` (`14.94M` / `30.2` insn/B)** | **`3.36`** | **`2,064.1M` (`4.13M`)** | **`6,877,992` (`0.33%`)** |

