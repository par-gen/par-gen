import { execFileSync, execSync } from "child_process";
import fs from "fs";
import os from "os";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CACHE_DIR = "/tmp/pargen-native-bench";
const BIN_DIR = path.join(CACHE_DIR, "bin");
const PAYLOAD_DIR = path.join(CACHE_DIR, "payloads");

function findBin(candidates) {
  for (const c of candidates) {
    if (c.startsWith("/")) {
      if (fs.existsSync(c)) return c;
    } else {
      try {
        return execSync(`command -v ${c}`, { encoding: "utf8" }).trim();
      } catch {
        // ignore
      }
    }
  }
  return null;
}

function ensureNativeBinaries(mode) {
  fs.mkdirSync(BIN_DIR, { recursive: true });
  fs.mkdirSync(PAYLOAD_DIR, { recursive: true });

  const rustBin = path.join(BIN_DIR, "bench_rust");
  if (!fs.existsSync(rustBin)) {
    const cargo = findBin([
      path.join(os.homedir(), ".cargo/bin/cargo"),
      "cargo",
    ]);
    if (cargo) {
      const rustDir = path.join(__dirname, "rust-bench");
      const targetDir = fs.existsSync("/tmp/r11-cross-lang-bench/rust-bench/target")
        ? "/tmp/r11-cross-lang-bench/rust-bench/target"
        : path.join(CACHE_DIR, "rust-target");
      execFileSync(cargo, ["build", "--release"], {
        cwd: rustDir,
        env: { ...process.env, CARGO_TARGET_DIR: targetDir },
        stdio: "ignore",
      });
      fs.copyFileSync(path.join(targetDir, "release/r11-rust-bench"), rustBin);
    }
  }

  const goBin = path.join(BIN_DIR, "bench_go");
  if (!fs.existsSync(goBin)) {
    const go = findBin(["/tmp/toolchains/go/bin/go", "go"]);
    if (go && fs.existsSync("/tmp/r11-cross-lang-bench/go-esbuild")) {
      fs.copyFileSync(
        path.join(__dirname, "go-bench/main.go"),
        "/tmp/r11-cross-lang-bench/go-esbuild/cmd/bench-go/main.go"
      );
      execFileSync(go, ["build", "-o", goBin, "./cmd/bench-go"], {
        cwd: "/tmp/r11-cross-lang-bench/go-esbuild",
        stdio: "ignore",
      });
    }
  }

  if (mode === "json") {
    const zigBin = path.join(BIN_DIR, "bench_zig");
    if (!fs.existsSync(zigBin)) {
      const zig = findBin([
        "/tmp/toolchains/zig-linux-x86_64-0.13.0/zig",
        "zig",
      ]);
      if (zig) {
        execFileSync(
          zig,
          [
            "build-exe",
            path.join(__dirname, "zig-bench/bench_json.zig"),
            "-O",
            "ReleaseFast",
            `-femit-bin=${zigBin}`,
          ],
          { cwd: BIN_DIR, stdio: "ignore" }
        );
      }
    }

    const cppBin = path.join(BIN_DIR, "bench_cpp");
    if (!fs.existsSync(cppBin)) {
      const gpp = findBin(["g++", "clang++"]);
      const gcc = findBin(["gcc", "clang"]);
      if (gpp && gcc && fs.existsSync("/tmp/r11-cross-lang-bench/c-cpp-bench")) {
        const yyjsonObj = path.join(BIN_DIR, "yyjson.o");
        const simdjsonObj = path.join(BIN_DIR, "simdjson.o");
        execFileSync(
          gcc,
          [
            "-O3",
            "-march=native",
            "-c",
            "/tmp/r11-cross-lang-bench/c-cpp-bench/yyjson/src/yyjson.c",
            "-o",
            yyjsonObj,
          ],
          { stdio: "ignore" }
        );
        execFileSync(
          gpp,
          [
            "-O3",
            "-march=native",
            "-std=c++17",
            "-c",
            "/tmp/r11-cross-lang-bench/c-cpp-bench/simdjson.cpp",
            "-o",
            simdjsonObj,
          ],
          { stdio: "ignore" }
        );
        execFileSync(
          gpp,
          [
            "-O3",
            "-march=native",
            "-std=c++17",
            "-I/tmp/r11-cross-lang-bench/c-cpp-bench",
            path.join(__dirname, "cpp-bench/bench_json.cpp"),
            simdjsonObj,
            yyjsonObj,
            "-o",
            cppBin,
          ],
          { stdio: "ignore" }
        );
      }
    }
  }
}

function runBin(binName, mode, manifestPath, rounds) {
  const binPath = path.join(BIN_DIR, binName);
  if (!fs.existsSync(binPath)) return {};
  try {
    const out = execFileSync(binPath, [mode, manifestPath, String(rounds)], {
      encoding: "utf8",
      maxBuffer: 16 * 1024 * 1024,
    });
    return JSON.parse(out);
  } catch (err) {
    console.error(`[native-bench] Warning: ${binName} (${mode}) failed:`, err.message);
    return {};
  }
}

/**
 * Runs pure native (zero N-API, in-memory) JSON benchmarks across C/C++, Rust, Zig, and Go.
 * @param {Array<{ key: string, name: string, buf: Buffer, iters: number }>} workloads
 * @param {number} rounds
 */
export function runNativeJsonBenchmarks(workloads, rounds = 7) {
  ensureNativeBinaries("json");
  const manifestLines = [];
  for (const w of workloads) {
    const filePath = path.join(PAYLOAD_DIR, `${w.key}.json`);
    fs.writeFileSync(filePath, w.buf);
    manifestLines.push(`${w.key}\t${filePath}\t${w.iters}`);
  }
  const manifestPath = path.join(CACHE_DIR, "manifest-json.tsv");
  fs.writeFileSync(manifestPath, `${manifestLines.join("\n")}\n`, "utf8");

  const cppRes = runBin("bench_cpp", "json", manifestPath, rounds);
  const rustRes = runBin("bench_rust", "json", manifestPath, rounds);
  const zigRes = runBin("bench_zig", "json", manifestPath, rounds);
  const goRes = runBin("bench_go", "json", manifestPath, rounds);

  const orderedNames = [
    "simdjson (Native C++ SIMD)",
    "sonic-rs (Native Rust SIMD)",
    "yyjson (Native C)",
    "serde_json (Native Rust zero-copy/borrowed)",
    "serde_json (Native Rust DOM)",
    "std.json (Native Zig)",
    "encoding/json (Native Go)",
  ];

  const byWorkload = new Map();
  for (const w of workloads) {
    const merged = {
      ...(cppRes[w.key] || {}),
      ...(rustRes[w.key] || {}),
      ...(zigRes[w.key] || {}),
      ...(goRes[w.key] || {}),
    };
    const rows = [];
    for (const name of orderedNames) {
      if (merged[name]) {
        rows.push({ name, ...merged[name] });
      }
    }
    byWorkload.set(w.key, rows);
  }
  return byWorkload;
}

/**
 * Runs pure native (zero N-API, in-memory) JS/TS benchmarks across Rust (oxc, swc, biome) and Go (esbuild).
 * @param {Array<{ key: string, name: string, buf: Buffer, iters: number, isTsOnly: boolean, isDts: boolean }>} workloads
 * @param {number} rounds
 */
export function runNativeJsBenchmarks(workloads, rounds = 7) {
  ensureNativeBinaries("js");
  const manifestLines = [];
  for (const w of workloads) {
    const ext = w.isDts ? "d.ts" : w.isTsOnly ? "ts" : "js";
    const filePath = path.join(PAYLOAD_DIR, `${w.key}.${ext}`);
    fs.writeFileSync(filePath, w.buf);
    manifestLines.push(
      `${w.key}\t${filePath}\t${w.iters}\t${w.isTsOnly ? 1 : 0}\t${w.isDts ? 1 : 0}`
    );
  }
  const manifestPath = path.join(CACHE_DIR, "manifest-js.tsv");
  fs.writeFileSync(manifestPath, `${manifestLines.join("\n")}\n`, "utf8");

  const rustRes = runBin("bench_rust", "js", manifestPath, rounds);
  const goRes = runBin("bench_go", "js", manifestPath, rounds);

  const orderedNames = [
    "oxc_parser (Native Rust arena, zero N-API)",
    "esbuild (Native Go js_parser.Parse, zero N-API)",
    "swc_ecma_parser (Native Rust AST, zero N-API)",
    "biome_js_parser (Native Rust CST, zero N-API)",
  ];

  const byWorkload = new Map();
  for (const w of workloads) {
    const merged = {
      ...(rustRes[w.key] || {}),
      ...(goRes[w.key] || {}),
    };
    const rows = [];
    for (const name of orderedNames) {
      if (merged[name]) {
        rows.push({ name, ...merged[name] });
      }
    }
    byWorkload.set(w.key, rows);
  }
  return byWorkload;
}
