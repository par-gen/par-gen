import fs from "fs";
import path from "path";
import { performance } from "perf_hooks";
import { fileURLToPath } from "url";
import * as acorn from "acorn";
import * as babelParser from "@babel/parser";
import ts from "typescript";
import { parse, parsePreserveExtras } from "./index.js";

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
const largeTsBundle = new Array(80).fill(0).map((_, i) =>
  tsUnit
    .replace(/Repository/g, `Repository_${i}`)
    .replace(/QueryResult/g, `QueryResult_${i}`)
).join("\n");

const workloads = [
  {
    name: "Small JS (generator.js)",
    code: smallJsCode,
    buf: Buffer.from(smallJsCode, "utf8"),
    isTsOnly: false,
    iters: 500,
  },
  {
    name: "Small TS (parser.d.ts)",
    code: smallDtsCode,
    buf: Buffer.from(smallDtsCode, "utf8"),
    isTsOnly: true,
    iters: 500,
  },
  {
    name: "Medium JS (hopcroft.js)",
    code: medHopcroftCode,
    buf: Buffer.from(medHopcroftCode, "utf8"),
    isTsOnly: false,
    iters: 150,
  },
  {
    name: "Medium-Large JS (parser.js)",
    code: medParserCode,
    buf: Buffer.from(medParserCode, "utf8"),
    isTsOnly: false,
    iters: 30,
  },
  {
    name: "Large TS Corpus (80x modules)",
    code: largeTsBundle,
    buf: Buffer.from(largeTsBundle, "utf8"),
    isTsOnly: true,
    iters: 15,
  },
  {
    name: "Large JS Bundle (2x codebase)",
    code: largeJsBundle,
    buf: Buffer.from(largeJsBundle, "utf8"),
    isTsOnly: false,
    iters: 8,
  },
];

function median(arr) {
  const s = [...arr].sort((a, b) => a - b);
  const mid = s.length >> 1;
  return s.length % 2 !== 0 ? s[mid] : (s[mid - 1] + s[mid]) / 2;
}

const ROUNDS = 7;

console.log("=== Interleaved Head-to-Head Benchmark: par-gen vs acorn vs @babel/parser vs typescript ===\n");

for (const w of workloads) {
  const candidates = [
    {
      name: "par-gen (SkipExtras)",
      fn: () => parse(w.buf),
    },
    {
      name: "par-gen (SkipExtras + Cursor)",
      fn: () => traverseCursor(parse(w.buf)),
    },
    {
      name: "par-gen (PreserveExtras)",
      fn: () => parsePreserveExtras(w.buf),
    },
    ...(w.isTsOnly
      ? []
      : [
          {
            name: "acorn",
            fn: () =>
              acorn.parse(w.code, {
                ecmaVersion: 2020,
                sourceType: "module",
              }),
          },
        ]),
    {
      name: "@babel/parser (TS)",
      fn: () =>
        babelParser.parse(w.code, {
          sourceType: "module",
          plugins: ["typescript"],
        }),
    },
    {
      name: "typescript (createSourceFile)",
      fn: () =>
        ts.createSourceFile("bench.ts", w.code, ts.ScriptTarget.Latest, true),
    },
  ];

  // Warmup
  for (const c of candidates) {
    for (let i = 0; i < Math.max(5, w.iters >> 2); i++) {
      c.fn();
    }
  }

  const samples = new Map(candidates.map((c) => [c.name, []]));

  for (let r = 0; r < ROUNDS; r++) {
    for (let cIdx = 0; cIdx < candidates.length; cIdx++) {
      // Rotate candidate order each round
      const c = candidates[(cIdx + r) % candidates.length];
      const t0 = performance.now();
      for (let i = 0; i < w.iters; i++) {
        c.fn();
      }
      const elapsedMs = performance.now() - t0;
      samples.get(c.name).push(elapsedMs / w.iters);
    }
  }

  console.log(`### ${w.name} (${(w.buf.length / 1024).toFixed(2)} KiB, ${w.iters} iters x ${ROUNDS} rounds)`);
  const baseMs = median(samples.get("par-gen (SkipExtras)"));
  for (const c of candidates) {
    const medMs = median(samples.get(c.name));
    const opsPerSec = 1000 / medMs;
    const mbPerSec = (w.buf.length / (1024 * 1024)) * opsPerSec;
    const ratio = medMs / baseMs;
    console.log(
      `  ${c.name.padEnd(30)} | ${(medMs * 1000).toFixed(1).padStart(9)} us | ${opsPerSec.toFixed(0).padStart(8)} ops/s | ${mbPerSec.toFixed(2).padStart(7)} MB/s | ${ratio.toFixed(2)}x`
    );
  }
  console.log("");
}
