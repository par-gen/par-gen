import fs from "fs";
import path from "path";
import { performance } from "perf_hooks";
import { fileURLToPath } from "url";

import { parse as pargenParse } from "./generated/parser.js";
import {
  parseChevrotainCst,
  parseChevrotainNoCst,
  parsePeggy,
  parseNearley,
  parseAntlr4,
  parseAcorn,
  parseBabelJsonExpression,
  parseTypeScriptJson,
  parseJson5,
} from "./competitors.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "../..");

/**
 * Full TreeCursor DFS traversal visiting every node and reading symbolId, start, end.
 * @param {import("./index.js").CstNode} root
 */
function traverseCursor(root) {
  const cursor = root.cursor();
  let count = 0;
  while (true) {
    count += cursor.isLeaf ? cursor.end - cursor.start : cursor.symbolId;
    if (cursor.gotoFirstChild()) {
      continue;
    }
    while (true) {
      if (cursor.gotoNextSibling()) {
        break;
      }
      if (!cursor.gotoParent()) {
        return count;
      }
    }
  }
}

const smallPkgStr = fs.readFileSync(path.join(repoRoot, "package.json"), "utf8");
const lockFileStr = fs.readFileSync(
  path.join(repoRoot, "package-lock.json"),
  "utf8"
);
const lockObj = JSON.parse(lockFileStr);
const packagesEntries = Object.entries(
  lockObj.packages || lockObj.dependencies || {}
);
const mediumStr = JSON.stringify(
  {
    name: lockObj.name,
    lockfileVersion: lockObj.lockfileVersion,
    packages: Object.fromEntries(packagesEntries.slice(0, 60)),
  },
  null,
  2
);

const workloads = [
  {
    name: "Small JSON (package.json)",
    str: smallPkgStr,
    buf: Buffer.from(smallPkgStr, "utf8"),
    jsExpr: `var a = ${smallPkgStr};`,
    iters: 500,
  },
  {
    name: "Medium JSON (60 packages)",
    str: mediumStr,
    buf: Buffer.from(mediumStr, "utf8"),
    jsExpr: `var a = ${mediumStr};`,
    iters: 50,
  },
  {
    name: "Large JSON (package-lock.json)",
    str: lockFileStr,
    buf: Buffer.from(lockFileStr, "utf8"),
    jsExpr: `var a = ${lockFileStr};`,
    iters: 10,
  },
];

function median(arr) {
  const s = [...arr].sort((a, b) => a - b);
  const mid = s.length >> 1;
  return s.length % 2 !== 0 ? s[mid] : (s[mid - 1] + s[mid]) / 2;
}

const ROUNDS = 7;

console.log(
  "=== Interleaved JSON Benchmark: par-gen vs V8 JSON.parse vs Chevrotain vs Peggy vs Nearley vs ANTLR4 vs Babel vs TypeScript vs JSON5 ===\n"
);

for (const w of workloads) {
  const candidates = [
    {
      name: "par-gen (Buffer)",
      fn: () => pargenParse(w.buf),
    },
    {
      name: "par-gen (string)",
      fn: () => pargenParse(w.str),
    },
    {
      name: "par-gen (Buffer + TreeCursor)",
      fn: () => traverseCursor(pargenParse(w.buf)),
    },
    {
      name: "V8 JSON.parse (native)",
      fn: () => JSON.parse(w.str),
    },
    {
      name: "Chevrotain (v13.2, CST)",
      fn: () => parseChevrotainCst(w.str),
    },
    {
      name: "Chevrotain (v13.2, No-CST)",
      fn: () => parseChevrotainNoCst(w.str),
    },
    {
      name: "Peggy (v5.1)",
      fn: () => parsePeggy(w.str),
    },
    {
      name: "Nearley (v2.20 + moo)",
      fn: () => parseNearley(w.str),
      maxIters: 20,
    },
    {
      name: "ANTLR4 (v4.13)",
      fn: () => parseAntlr4(w.str),
      maxIters: 20,
    },
    {
      name: "acorn (v8.19)",
      fn: () => parseAcorn(w.jsExpr),
    },
    {
      name: "@babel/parser (v8.1)",
      fn: () => parseBabelJsonExpression(w.str),
    },
    {
      name: "typescript (v5.9, parseJsonText)",
      fn: () => parseTypeScriptJson(w.str),
    },
    {
      name: "json5 (v2.2.3)",
      fn: () => parseJson5(w.str),
    },
  ];

  // Warmup
  for (const c of candidates) {
    const warmupIters = Math.max(
      2,
      (c.maxIters ? Math.min(w.iters, c.maxIters) : w.iters) >> 2
    );
    for (let i = 0; i < warmupIters; i++) {
      c.fn();
    }
  }

  const samples = new Map(candidates.map((c) => [c.name, []]));

  for (let r = 0; r < ROUNDS; r++) {
    for (let cIdx = 0; cIdx < candidates.length; cIdx++) {
      const c = candidates[(cIdx + r) % candidates.length];
      const iters = c.maxIters ? Math.min(w.iters, c.maxIters) : w.iters;
      const t0 = performance.now();
      for (let i = 0; i < iters; i++) {
        c.fn();
      }
      const elapsedMs = performance.now() - t0;
      samples.get(c.name).push(elapsedMs / iters);
    }
  }

  console.log(
    `### ${w.name} (${(w.buf.length / 1024).toFixed(2)} KiB, ${w.iters} iters x ${ROUNDS} rounds)`
  );
  const baseMs = median(samples.get("par-gen (Buffer)"));
  for (const c of candidates) {
    const medMs = median(samples.get(c.name));
    const opsPerSec = 1000 / medMs;
    const mbPerSec = (w.buf.length / (1024 * 1024)) * opsPerSec;
    const ratio = medMs / baseMs;
    console.log(
      `  ${c.name.padEnd(34)} | ${(medMs * 1000).toFixed(1).padStart(9)} us | ${opsPerSec.toFixed(0).padStart(8)} ops/s | ${mbPerSec.toFixed(2).padStart(7)} MB/s | ${ratio.toFixed(2)}x`
    );
  }
  console.log("");
}
