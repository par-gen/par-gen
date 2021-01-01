# The quest for the fastest LR(1) parser generator in JavaScript

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

![Deoptigate's Inline Caches tab shows that the objects we use to index the character codes makes our function go megamorphic](./dfa/01-deoptigate-overview.png)

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

## Optimizing the parser and lexer

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

Here we can see what our lexer initially looked like:

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
