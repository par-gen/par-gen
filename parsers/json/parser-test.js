import { readFileSync, writeFileSync } from "fs";
import { performance } from "perf_hooks";

import { parse } from "./generated/parser.js";
// import { parse } from "./lexer-unrolled.js";

const n = parseInt(process.argv[2] ?? "10000", 10);

const buffer = readFileSync("package.json");
const string = buffer.toString();

const arr = new Array(1000).fill(1);
const str = JSON.stringify(JSON.stringify(arr));
const buf = Buffer.from(str);

{
  for (let i = 0; i < 10_000; i++) {
    parse(buffer);
  }

  const s = performance.now();
  for (let i = 0; i < n; i++) {
    parse(buffer);
  }
  const e = performance.now();
  console.log("expound time", e - s, "ms");
}
// {
//   const s = performance.now();
//   for (let i = 0; i < n; i++) {
//     JSON.parse(string);
//   }
//   const e = performance.now();
//   console.log("native time", e - s, "ms");
// }
