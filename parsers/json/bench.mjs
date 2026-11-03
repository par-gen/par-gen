import fs from "fs";
import path from "path";
import { performance } from "perf_hooks";
import { fileURLToPath } from "url";

import { parse as pargenParsePreserveWs } from "./generated/parser.js";
import { parse as pargenParseSkipWs } from "./generated-skipws/parser.js";
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
import { runNativeJsonBenchmarks } from "../../benchmarks/native/index.mjs";

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

// Synthetic ~1.5 MB JSON document (5,300 package entries, ~265,000 CST nodes)
const synthEntries = new Array(5300);
for (let i = 0; i < 5300; i++) {
  synthEntries[i] =
    `{"id":${i},"name":"@par-gen/synthetic-pkg-${i}",` +
    `"version":"1.${i % 20}.${i % 100}",` +
    `"resolved":"https://registry.npmjs.org/@par-gen/synthetic-pkg-${i}/-/synthetic-pkg-${i}-1.0.0.tgz",` +
    `"integrity":"sha512-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",` +
    `"dev":true}`;
}
const synthStr = `[\n${synthEntries.join(",\n")}\n]\n`;

const workloads = [
  {
    key: "small",
    name: "Small JSON (package.json)",
    str: smallPkgStr,
    buf: Buffer.from(smallPkgStr, "utf8"),
    jsExpr: `var a = ${smallPkgStr};`,
    iters: 500,
  },
  {
    key: "medium",
    name: "Medium JSON (60 packages)",
    str: mediumStr,
    buf: Buffer.from(mediumStr, "utf8"),
    jsExpr: `var a = ${mediumStr};`,
    iters: 50,
  },
  {
    key: "large",
    name: "Large JSON (package-lock.json)",
    str: lockFileStr,
    buf: Buffer.from(lockFileStr, "utf8"),
    jsExpr: `var a = ${lockFileStr};`,
    iters: 10,
  },
  {
    key: "synth_1_5mb",
    name: "1.5 MB Synthetic JSON (5,300 packages)",
    str: synthStr,
    buf: Buffer.from(synthStr, "utf8"),
    jsExpr: `var a = ${synthStr};`,
    iters: 5,
  },
];

function median(arr) {
  const s = [...arr].sort((a, b) => a - b);
  const mid = s.length >> 1;
  return s.length % 2 !== 0 ? s[mid] : (s[mid - 1] + s[mid]) / 2;
}

const ROUNDS = 7;

console.log(
  "=== Interleaved JSON Benchmark: @par-gen/json (SkipWS & PreserveWS) vs V8 JSON.parse vs Pure Native (simdjson, sonic-rs, yyjson, serde_json, Zig, Go) vs Pure JS (Chevrotain, Peggy, Nearley, ANTLR4, Acorn, Babel, TS, JSON5) ===\n"
);

const nativeResultsByWorkload = runNativeJsonBenchmarks(workloads, ROUNDS);

for (const w of workloads) {
  const slowMaxIters = w.key === "synth_1_5mb" ? 2 : 20;
  const candidates = [
    {
      name: "@par-gen/json (SkipWS, Buffer)",
      fn: () => pargenParseSkipWs(w.buf),
    },
    {
      name: "@par-gen/json (SkipWS, string)",
      fn: () => pargenParseSkipWs(w.str),
    },
    {
      name: "@par-gen/json (PreserveWS, Buffer)",
      fn: () => pargenParsePreserveWs(w.buf),
    },
    {
      name: "@par-gen/json (PreserveWS, string)",
      fn: () => pargenParsePreserveWs(w.str),
    },
    {
      name: "@par-gen/json (PreserveWS + TreeCursor)",
      fn: () => traverseCursor(pargenParsePreserveWs(w.buf)),
    },
    {
      name: "V8 JSON.parse (C++ native)",
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
      maxIters: slowMaxIters,
    },
    {
      name: "ANTLR4 (v4.13)",
      fn: () => parseAntlr4(w.str),
      maxIters: slowMaxIters,
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
  const baseMs = median(samples.get("@par-gen/json (SkipWS, Buffer)"));
  const baseUs = baseMs * 1000;

  // Print par-gen + V8 JSON.parse first, then Pure Native (Zero N-API), then JS competitors
  const jsRows = candidates.map((c) => {
    const medMs = median(samples.get(c.name));
    const medianUs = medMs * 1000;
    const opsPerSec = 1000 / medMs;
    const mbPerSec = (w.buf.length / (1024 * 1024)) * opsPerSec;
    return { name: c.name, medianUs, opsPerSec, mbPerSec };
  });

  const nativeRows = nativeResultsByWorkload.get(w.key) || [];
  const allRows = [
    ...jsRows.slice(0, 6),
    ...nativeRows,
    ...jsRows.slice(6),
  ];

  for (const row of allRows) {
    const ratio = row.medianUs / baseUs;
    console.log(
      `  ${row.name.padEnd(44)} | ${row.medianUs.toFixed(1).padStart(9)} us | ${row.opsPerSec.toFixed(0).padStart(8)} ops/s | ${row.mbPerSec.toFixed(2).padStart(7)} MB/s | ${ratio.toFixed(2)}x`
    );
  }
  console.log("");
}
