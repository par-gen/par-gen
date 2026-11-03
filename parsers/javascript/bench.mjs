import fs from "fs";
import os from "os";
import path from "path";
import { performance } from "perf_hooks";
import { fileURLToPath } from "url";
import * as acorn from "acorn";
import * as babelParser from "@babel/parser";
import * as meriyah from "meriyah";
import * as oxc from "oxc-parser";
import * as swc from "@swc/core";
import * as esbuild from "esbuild";
import ts from "typescript";
import { API as TsGoAPI } from "tsgo/sync";
import { API as TsRsAPI } from "tsrs/sync";
import { API as TscRsAPI } from "tsc-rs/unstable/sync";
import { parse, parsePreserveExtras } from "./index.js";
import { runNativeJsBenchmarks } from "../../benchmarks/native/index.mjs";

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

/**
 * Creates a reusable TypeScript 7.1 RPC parser harness for tsgo (Go), tsrs (Cloudflare/Oxc Rust),
 * and tsc-rs (Theo/Ping.gg Rust) using the direct `createSourceFileFromFile` endpoint.
 * Uses an 8-byte in-place pwrite trailer in RAM disk (/dev/shm) so each invocation
 * has a fresh content hash and never short-circuits on the server's ParseCache.
 * @param {string} fileName
 * @param {string} code
 */
function createNativeTs7Harness(fileName, code) {
  const baseTmp = fs.existsSync("/dev/shm") ? "/dev/shm" : os.tmpdir();
  const dir = fs.mkdtempSync(path.join(baseTmp, "pargen-ts7-"));
  const filePath = path.join(dir, fileName);

  const baseBuf = Buffer.from(`${code}\n// 00000000\n`, "utf8");
  const patchOffset = baseBuf.length - 9;
  fs.writeFileSync(filePath, baseBuf);
  const fd = fs.openSync(filePath, "r+");
  const patchBuf = Buffer.alloc(8);
  let seq = 1;

  const tsgoApi = new TsGoAPI({ cwd: dir });
  const tsrsApi = new TsRsAPI({ cwd: dir });
  const tscRsApi = new TscRsAPI({ cwd: dir });

  function parseWith(api) {
    patchBuf.write(String(seq++).padStart(8, "0"), 0, 8, "ascii");
    fs.writeSync(fd, patchBuf, 0, 8, patchOffset);
    api.clearSourceFileCache();
    const retained = api.createSourceFileFromFile(filePath);
    const sf = retained.sourceFile;
    retained.dispose();
    return sf;
  }

  return {
    parseTsGo: () => parseWith(tsgoApi),
    parseTsRs: () => parseWith(tsrsApi),
    parseTscRs: () => parseWith(tscRsApi),
    close() {
      tsgoApi.close();
      tsrsApi.close();
      tscRsApi.close();
      fs.closeSync(fd);
      fs.rmSync(dir, { recursive: true, force: true });
    },
  };
}

const smallJsCode = fs.readFileSync(
  path.join(repoRoot, "packages/cli/lib/generator.js"),
  "utf8"
);
const smallDtsCode = fs.readFileSync(
  path.join(repoRoot, "parsers/json/generated/parser.d.ts"),
  "utf8"
);
const medHopcroftCode = fs.readFileSync(
  path.join(repoRoot, "packages/dfa/lib/hopcroft.js"),
  "utf8"
);
const medParserCode = fs.readFileSync(
  path.join(repoRoot, "packages/parser/lib/parser.js"),
  "utf8"
);

// Build a ~308 KB concatenated real-world JS/JSDoc corpus from packages/
const corpusFiles = [
  "packages/cli/lib/generator.js",
  "packages/dfa/lib/hopcroft.js",
  "packages/dfa/lib/powerset.js",
  "packages/dfa/lib/dfa.js",
  "packages/nfa/lib/thompson.js",
  "packages/lexer/lib/lexer.js",
  "packages/grammar/lib/parser.js",
  "packages/parser/lib/parser.js",
];
const largeJsBundle = [...corpusFiles, ...corpusFiles]
  .map((f, idx) => {
    const src = fs.readFileSync(path.join(repoRoot, f), "utf8");
    const strippedImports = src
      .replace(/^import\s+[^;]+;\s*$/gm, "")
      .replace(/^export\s+default\s+/gm, "")
      .replace(/^export\s+\{[^}]*\};?\s*$/gm, "")
      .replace(/^export\s+/gm, "");
    return `function mod_${idx}() {\n${strippedImports}\n}`;
  })
  .join("\n\n");

// Build a ~120 KB TypeScript corpus with interfaces, generics, classes, and typed functions
const tsUnit = `
export interface Repository<T extends Identifiable, ID = string> {
  readonly name: string;
  findById(id: ID): Promise<T | null>;
  findAll(filter?: (item: T) => boolean): Promise<T[]>;
  save(entity: T): Promise<T>;
  delete(id: ID): Promise<boolean>;
}

export type QueryResult<T, E = Error> =
  | { ok: true; data: T; count: number }
  | { ok: false; error: E; retryable: boolean };

export class MemoryRepository<T extends Identifiable> implements Repository<T, string> {
  readonly name: string;
  private store: Map<string, T>;

  constructor(name: string, initial: T[] = []) {
    this.name = name;
    this.store = new Map();
    for (const item of initial) {
      this.store.set(item.id, item);
    }
  }

  get size(): number {
    return this.store.size;
  }

  async findById(id: string): Promise<T | null> {
    const found = this.store.get(id);
    return found ?? null;
  }

  async findAll(filter?: (item: T) => boolean): Promise<T[]> {
    const out: T[] = [];
    for (const item of this.store.values()) {
      if (!filter || filter(item)) {
        out.push(item);
      }
    }
    return out;
  }

  async save(entity: T): Promise<T> {
    this.store.set(entity.id, entity);
    return entity;
  }

  async delete(id: string): Promise<boolean> {
    return this.store.delete(id);
  }
}
`;
const largeTsBundle = new Array(80)
  .fill(0)
  .map((_, i) =>
    tsUnit
      .replace(/Repository/g, `Repository_${i}`)
      .replace(/QueryResult/g, `QueryResult_${i}`)
  )
  .join("\n");

const workloads = [
  {
    key: "small_js",
    name: "Small JS (generator.js)",
    fileName: "bench.js",
    code: smallJsCode,
    buf: Buffer.from(smallJsCode, "utf8"),
    isTsOnly: false,
    isDts: false,
    iters: 500,
  },
  {
    key: "small_ts",
    name: "Small TS (parser.d.ts)",
    fileName: "bench.d.ts",
    code: smallDtsCode,
    buf: Buffer.from(smallDtsCode, "utf8"),
    isTsOnly: true,
    isDts: true,
    iters: 500,
  },
  {
    key: "med_js",
    name: "Medium JS (hopcroft.js)",
    fileName: "bench.js",
    code: medHopcroftCode,
    buf: Buffer.from(medHopcroftCode, "utf8"),
    isTsOnly: false,
    isDts: false,
    iters: 150,
  },
  {
    key: "med_large_js",
    name: "Medium-Large JS (parser.js)",
    fileName: "bench.js",
    code: medParserCode,
    buf: Buffer.from(medParserCode, "utf8"),
    isTsOnly: false,
    isDts: false,
    iters: 30,
  },
  {
    key: "large_ts",
    name: "Large TS Corpus (80x modules)",
    fileName: "bench.ts",
    code: largeTsBundle,
    buf: Buffer.from(largeTsBundle, "utf8"),
    isTsOnly: true,
    isDts: false,
    iters: 15,
  },
  {
    key: "large_js",
    name: "Large JS Bundle (2x codebase)",
    fileName: "bench.js",
    code: largeJsBundle,
    buf: Buffer.from(largeJsBundle, "utf8"),
    isTsOnly: false,
    isDts: false,
    iters: 8,
  },
];

function median(arr) {
  const s = [...arr].sort((a, b) => a - b);
  const mid = s.length >> 1;
  return s.length % 2 !== 0 ? s[mid] : (s[mid - 1] + s[mid]) / 2;
}

const ROUNDS = 7;

console.log(
  "=== Interleaved Head-to-Head Benchmark: par-gen vs Pure Native Zero-NAPI (oxc_parser, swc_ecma_parser, biome_js_parser, esbuild Go) vs N-API/RPC (oxc, swc, tsrs, tsc-rs, tsgo, esbuild) vs Pure JS (meriyah, acorn, babel, typescript 5.9) ===\n"
);

const nativeResultsByWorkload = runNativeJsBenchmarks(workloads, ROUNDS);

for (const w of workloads) {
  const ts7Harness = createNativeTs7Harness(w.fileName, w.code);

  const candidates = [
    {
      name: "par-gen (SkipExtras, Buffer)",
      fn: () => parse(w.buf),
    },
    {
      name: "par-gen (SkipExtras, string)",
      fn: () => parse(w.code),
    },
    {
      name: "par-gen (SkipExtras + TreeCursor)",
      fn: () => traverseCursor(parse(w.buf)),
    },
    {
      name: "par-gen (PreserveExtras, Buffer)",
      fn: () => parsePreserveExtras(w.buf),
    },
    {
      name: "oxc-parser (v0.157, N-API)",
      fn: () => oxc.parseSync(w.fileName, w.code),
    },
    {
      name: "@swc/core (v1.16, N-API)",
      fn: () =>
        swc.parseSync(w.code, {
          syntax: w.isTsOnly ? "typescript" : "ecmascript",
          dts: w.isDts,
        }),
    },
    {
      name: "tsrs (v0.20, Cloudflare/Oxc Rust TS)",
      fn: () => ts7Harness.parseTsRs(),
      maxIters: 10,
    },
    {
      name: "tsc-rs (v0.8, Theo/Ping.gg Rust TS)",
      fn: () => ts7Harness.parseTscRs(),
      maxIters: 10,
    },
    {
      name: "tsgo (v7.1-beta, Microsoft Go TS)",
      fn: () => ts7Harness.parseTsGo(),
      maxIters: 10,
    },
    {
      name: "esbuild (v0.28, N-API/IPC)",
      fn: () =>
        esbuild.transformSync(w.code, { loader: w.isTsOnly ? "ts" : "js" }),
    },
    ...(w.isTsOnly
      ? []
      : [
          {
            name: "meriyah (v7.4, Pure JS ESTree)",
            fn: () => meriyah.parseModule(w.code, { next: true }),
          },
          {
            name: "acorn (v8.19, Pure JS ESTree)",
            fn: () =>
              acorn.parse(w.code, {
                ecmaVersion: "latest",
                sourceType: "module",
              }),
          },
        ]),
    {
      name: "@babel/parser (v8.1, Pure JS TS AST)",
      fn: () =>
        babelParser.parse(w.code, {
          sourceType: "module",
          plugins: w.isDts ? [["typescript", { dts: true }]] : ["typescript"],
        }),
    },
    {
      name: "typescript (v5.9, Pure JS AST)",
      fn: () =>
        ts.createSourceFile(w.fileName, w.code, ts.ScriptTarget.Latest, true),
    },
  ];

  try {
    // Warmup
    for (const c of candidates) {
      const warmupIters = Math.max(
        3,
        (c.maxIters ? Math.min(w.iters, c.maxIters) : w.iters) >> 2
      );
      for (let i = 0; i < warmupIters; i++) {
        c.fn();
      }
    }

    const samples = new Map(candidates.map((c) => [c.name, []]));

    for (let r = 0; r < ROUNDS; r++) {
      for (let cIdx = 0; cIdx < candidates.length; cIdx++) {
        // Rotate candidate order each round
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
    const baseMs = median(samples.get("par-gen (SkipExtras, Buffer)"));
    const baseUs = baseMs * 1000;

    const jsRows = candidates.map((c) => {
      const medMs = median(samples.get(c.name));
      const medianUs = medMs * 1000;
      const opsPerSec = 1000 / medMs;
      const mbPerSec = (w.buf.length / (1024 * 1024)) * opsPerSec;
      return { name: c.name, medianUs, opsPerSec, mbPerSec };
    });

    const nativeRows = nativeResultsByWorkload.get(w.key) || [];
    const allRows = [
      ...jsRows.slice(0, 4),
      ...nativeRows,
      ...jsRows.slice(4),
    ];

    for (const row of allRows) {
      const ratio = row.medianUs / baseUs;
      console.log(
        `  ${row.name.padEnd(46)} | ${row.medianUs.toFixed(1).padStart(9)} us | ${row.opsPerSec.toFixed(0).padStart(8)} ops/s | ${row.mbPerSec.toFixed(2).padStart(7)} MB/s | ${ratio.toFixed(2)}x`
      );
    }
    console.log("");
  } finally {
    ts7Harness.close();
  }
}
