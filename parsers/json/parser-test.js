import { readFileSync, writeFileSync } from "fs";
import { performance } from "perf_hooks";

import { parse } from "./generated/parser.js";
// import { parse } from "./lexer-unrolled.js";

const n = parseInt(process.argv[2] ?? "1000", 10);

const buffer = readFileSync("github_events.json");
const string = buffer.toString();
const length = buffer.length;

const arr = new Array(1000).fill(1);
const str = JSON.stringify(JSON.stringify(arr));
const buf = Buffer.from(str);

{
  const memory = new WebAssembly.Memory({ initial: 32767 });
  const binary = readFileSync("./c/parser.wasm");
  const { instance } = await WebAssembly.instantiate(binary, {
    env: { memory },
  });
  const { parse, __heap_base } = instance.exports;

  const view = new Uint8Array(memory.buffer);
  for (let i = 0; i < buffer.length; i++) {
    view[__heap_base + i] = buffer[i];
  }

  const s = performance.now();
  for (let i = 0; i < n; i++) {
    parse(__heap_base, length);
  }
  const e = performance.now();
  console.log("pargen wasm time", e - s, "ms");
}

// {
//   for (let i = 0; i < 10_000; i++) {
//     parse(buffer);
//   }

//   const s = performance.now();
//   for (let i = 0; i < n; i++) {
//     parse(buffer);
//   }
//   const e = performance.now();
//   console.log("pargen js time", e - s, "ms");
// }

// {
//   const s = performance.now();
//   for (let i = 0; i < n; i++) {
//     JSON.parse(string);
//   }
//   const e = performance.now();
//   console.log("native time", e - s, "ms");
// }
