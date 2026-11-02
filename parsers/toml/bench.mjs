import { performance } from "perf_hooks";
import { createRequire } from "module";
import { parse, parsePreserveExtras } from "./index.js";

const require = createRequire(import.meta.url);

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

let tsParser = null;
try {
  const Parser = require("tree-sitter");
  const TOML = require("tree-sitter-toml");
  tsParser = new Parser();
  tsParser.setLanguage(TOML);
} catch {}

let smolTomlParse = null;
try {
  smolTomlParse = require("smol-toml").parse;
} catch {}

let iarnaTomlParse = null;
try {
  iarnaTomlParse = require("@iarna/toml").parse;
} catch {}

const smallCargoToml = `# Cargo.toml package manifest
[package]
name = "par-gen-runtime"
version = "0.1.0"
edition = "2021"
rust-version = "1.75"
publish = false
authors = ["Par-Gen Team <team@example.com>"]
keywords = ["parser", "lr1", "ielr", "tree-sitter"]

[workspace]
members = [
  "crates/core",
  "crates/lexer",
  "crates/codegen",
]
resolver = "2"

[dependencies]
serde = { version = "1.0.197", features = ["derive"] }
tokio = { version = "1.36.0", default-features = false, features = ["rt-multi-thread", "macros"] }
regex-automata = "0.4.6"

[features]
default = ["std", "simd"]
std = []
simd = []

[profile.release]
opt-level = 3
lto = true
codegen-units = 1
panic = "abort"

[[bin]]
name = "par-gen-cli"
path = "src/main.rs"
test = false
`;

const mediumToml = Array.from({ length: 16 }, (_, i) =>
  smallCargoToml
    .replace(/\[package\]/g, `[package_${i}]`)
    .replace(/\[workspace\]/g, `[workspace_${i}]`)
    .replace(/\[dependencies\]/g, `[dependencies_${i}]`)
    .replace(/\[features\]/g, `[features_${i}]`)
    .replace(/\[profile\.release\]/g, `[profile_${i}.release]`)
).join("\n");

const largeToml = Array.from({ length: 180 }, (_, i) =>
  smallCargoToml
    .replace(/\[package\]/g, `[package_${i}]`)
    .replace(/\[workspace\]/g, `[workspace_${i}]`)
    .replace(/\[dependencies\]/g, `[dependencies_${i}]`)
    .replace(/\[features\]/g, `[features_${i}]`)
    .replace(/\[profile\.release\]/g, `[profile_${i}.release]`)
).join("\n");

const workloads = [
  {
    name: "Small Cargo.toml (0.8 KiB)",
    code: smallCargoToml,
    buf: Buffer.from(smallCargoToml, "utf8"),
    iters: 2000,
  },
  {
    name: "Medium TOML Config (13.3 KiB)",
    code: mediumToml,
    buf: Buffer.from(mediumToml, "utf8"),
    iters: 250,
  },
  {
    name: "Large TOML Bundle (151 KiB)",
    code: largeToml,
    buf: Buffer.from(largeToml, "utf8"),
    iters: 20,
  },
];

function median(arr) {
  const s = [...arr].sort((a, b) => a - b);
  const mid = s.length >> 1;
  return s.length % 2 !== 0 ? s[mid] : (s[mid - 1] + s[mid]) / 2;
}

const ROUNDS = 7;

console.log("=== Interleaved Benchmark: @par-gen/toml vs native tree-sitter-toml vs smol-toml / @iarna/toml ===\n");

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
    ...(tsParser
      ? [
          {
            name: "tree-sitter-toml (C N-API)",
            fn: () => tsParser.parse(w.code),
          },
        ]
      : []),
    ...(smolTomlParse
      ? [
          {
            name: "smol-toml (parse)",
            fn: () => smolTomlParse(w.code),
          },
        ]
      : []),
    ...(iarnaTomlParse
      ? [
          {
            name: "@iarna/toml (parse)",
            fn: () => iarnaTomlParse(w.code),
          },
        ]
      : []),
  ];

  for (const c of candidates) {
    for (let i = 0; i < Math.max(5, w.iters >> 2); i++) {
      c.fn();
    }
  }

  const samples = new Map(candidates.map((c) => [c.name, []]));

  for (let r = 0; r < ROUNDS; r++) {
    for (let cIdx = 0; cIdx < candidates.length; cIdx++) {
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
