import { describe, expect, it } from "@jest/globals";
import {
  parse,
  parsePreserveExtras,
  reemitLossless,
  CstNode,
  TreeCursor,
} from "./index.js";

/**
 * Walk every node of a CST using TreeCursor and verify invariants.
 * @param {CstNode} root
 * @param {Uint8Array} buf
 */
function walkWithCursor(root, buf) {
  const cursor = root.cursor();
  expect(cursor.constructor.name).toBe("TreeCursor");
  expect(cursor.depth).toBe(0);
  expect(cursor.start).toBe(root.start);
  expect(cursor.end).toBe(root.end);

  let nodeCount = 0;
  let leafCount = 0;
  let maxDepth = 0;

  while (true) {
    nodeCount++;
    if (cursor.depth > maxDepth) {
      maxDepth = cursor.depth;
    }
    expect(typeof cursor.name).toBe("string");
    expect(cursor.name.length).toBeGreaterThan(0);

    if (cursor.isLeaf) {
      leafCount++;
      const start = cursor.start;
      const end = cursor.end;
      expect(start).toBeGreaterThanOrEqual(0);
      expect(end).toBeGreaterThanOrEqual(start);
      expect(end).toBeLessThanOrEqual(buf.length);
      expect(cursor.childCount).toBe(0);
      expect(cursor.value.length).toBe(end - start);
    } else {
      expect(cursor.childCount).toBeGreaterThan(0);
    }

    if (cursor.gotoFirstChild()) {
      continue;
    }
    while (true) {
      if (cursor.gotoNextSibling()) {
        break;
      }
      if (!cursor.gotoParent()) {
        expect(cursor.depth).toBe(0);
        cursor.reset();
        expect(cursor.depth).toBe(0);
        expect(cursor.pointer).toBe(root.__pointer);
        return { nodeCount, leafCount, maxDepth };
      }
    }
  }
}

describe("TOML Parser (@par-gen/toml from tree-sitter-toml)", () => {
  const documents = [
    {
      name: "Cargo.toml manifest with workspace, dependencies, features, and profiles",
      code: `# Cargo.toml example document
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

[[bench]]
name = "throughput"
harness = false
`,
    },
    {
      name: "TOML v1.0 data types: numbers, floats, booleans, dates, dotted keys, inline tables, and multiline strings",
      code: `# TOML v1.0 specification showcase
title = "TOML Example"
literal_path = 'C:\\Users\\nodejs\\templates'
multiline_basic = """
Roses are red
Violets are blue"""
multiline_literal = '''
The first newline is
trimmed in raw strings.
'''

[owner]
name = "Tom Preston-Werner"
dob = 1979-05-27T07:32:00-08:00
local_date = 2026-11-02
local_time = 14:30:59.123
local_dt = 2026-11-02T14:30:59

[numbers]
int_dec = +99
int_zero = 0
int_underscores = 1_000_000
int_hex = 0xdead_beef
int_oct = 0o755
int_bin = 0b11010110
float_pi = 3.1415926
float_exp = -2e-4
float_inf = inf
float_nan = nan
true_key = true
false_key = false

[servers]
[servers.alpha]
ip = "10.0.0.1"
role = "frontend"
ports = [ 8000, 8001, 8002 ]

[servers.beta]
ip = "10.0.0.2"
role = "backend"
endpoint = { host = "localhost", port = 9090, tls = true }
`,
    },
  ];

  for (const doc of documents) {
    it(`parses ${doc.name} and losslessly re-emits 100% of bytes`, () => {
      const buf = Buffer.from(doc.code, "utf8");
      const cst = parse(buf);
      expect(cst).toBeInstanceOf(CstNode);
      expect(cst.name).toBe("document");
      const stats = walkWithCursor(cst, buf);
      expect(stats.nodeCount).toBeGreaterThan(10);

      const cstPreserve = parsePreserveExtras(buf);
      expect(cstPreserve.name).toBe("document");
      walkWithCursor(cstPreserve, buf);
      const reemitted = reemitLossless(cstPreserve, buf);
      expect(Buffer.compare(Buffer.from(reemitted), buf)).toBe(0);
    });
  }

  it("parses and losslessly re-emits a >45KB TOML configuration bundle (parseCold path)", () => {
    const unit = documents.map((d) => d.code).join("\n");
    const largeCode = Array.from({ length: 30 }, (_, i) =>
      unit.replace(/\[package\]/g, `[package_${i}]`)
    ).join("\n");
    const buf = Buffer.from(largeCode, "utf8");
    expect(buf.length).toBeGreaterThan(45000);

    const cst = parse(buf);
    expect(cst.name).toBe("document");

    const cstPreserve = parsePreserveExtras(buf);
    const reemitted = reemitLossless(cstPreserve, buf);
    expect(Buffer.compare(Buffer.from(reemitted), buf)).toBe(0);
  });

  it("rejects invalid TOML syntax", () => {
    expect(() => parse("key = \n")).toThrow();
    expect(() => parse("[unclosed.table\na = 1\n")).toThrow();
    expect(() => parse("arr = [1, 2\n")).toThrow();
  });
});
