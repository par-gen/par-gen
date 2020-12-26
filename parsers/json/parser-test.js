import { readFileSync } from "fs";
import { performance } from "perf_hooks";

import { parse } from "./generated/parser.js";

const n = parseInt(process.argv[2] ?? "10000", 10);

const buffer = readFileSync("package.json");
const string = buffer.toString();

{
  for (let i = 0; i < 10_000; i++) {
    parse(buffer);
    // JSON.parse(string);
  }

  const s = performance.now();
  for (let i = 0; i < n; i++) {
    parse(buffer);
    // JSON.parse(string);
  }
  const e = performance.now();
  console.log("expound time", e - s, "ms");
}
{
  const s = performance.now();
  for (let i = 0; i < n; i++) {
    JSON.parse(string);
  }
  const e = performance.now();
  console.log("native time", e - s, "ms");
}
