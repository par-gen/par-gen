#![allow(dead_code)]
use serde::Deserialize;
use std::borrow::Cow;
use std::collections::HashMap;
use std::env;
use std::fs;
use std::hint::black_box;
use std::time::Instant;

use biome_js_parser::{parse as biome_parse, JsParserOptions};
use biome_js_syntax::JsFileSource;
use oxc_allocator::Allocator;
use oxc_parser::Parser as OxcParser;
use oxc_span::SourceType as OxcSourceType;
use swc_common::BytePos;
use swc_ecma_ast::EsVersion;
use swc_ecma_parser::{
    lexer::Lexer as SwcLexer, EsSyntax, Parser as SwcParser, StringInput, Syntax, TsSyntax,
};

#[derive(Deserialize)]
struct SynthEntry<'a> {
    id: u64,
    #[serde(borrow)]
    name: &'a str,
    #[serde(borrow)]
    version: &'a str,
    #[serde(borrow)]
    resolved: &'a str,
    #[serde(borrow)]
    integrity: &'a str,
    dev: bool,
}

#[derive(Deserialize)]
struct PackageJsonDoc<'a> {
    #[serde(borrow, default)]
    name: Cow<'a, str>,
    #[serde(borrow, default)]
    version: Option<Cow<'a, str>>,
    #[serde(borrow, default)]
    workspaces: Option<Vec<Cow<'a, str>>>,
    #[serde(borrow, default)]
    scripts: Option<HashMap<Cow<'a, str>, Cow<'a, str>>>,
    #[serde(borrow, default)]
    dependencies: Option<HashMap<Cow<'a, str>, Cow<'a, str>>>,
    #[serde(borrow, default)]
    #[serde(rename = "devDependencies")]
    dev_dependencies: Option<HashMap<Cow<'a, str>, Cow<'a, str>>>,
}

#[derive(Deserialize)]
struct LockPkg<'a> {
    #[serde(borrow, default)]
    name: Option<Cow<'a, str>>,
    #[serde(borrow, default)]
    version: Option<Cow<'a, str>>,
    #[serde(borrow, default)]
    resolved: Option<Cow<'a, str>>,
    #[serde(borrow, default)]
    integrity: Option<Cow<'a, str>>,
    #[serde(default)]
    dev: Option<bool>,
    #[serde(default)]
    optional: Option<bool>,
    #[serde(borrow, default)]
    dependencies: Option<HashMap<Cow<'a, str>, Cow<'a, str>>>,
    #[serde(borrow, default)]
    #[serde(rename = "devDependencies")]
    dev_dependencies: Option<HashMap<Cow<'a, str>, Cow<'a, str>>>,
}

#[derive(Deserialize)]
struct LockDep<'a> {
    #[serde(borrow, default)]
    version: Option<Cow<'a, str>>,
    #[serde(borrow, default)]
    resolved: Option<Cow<'a, str>>,
    #[serde(borrow, default)]
    integrity: Option<Cow<'a, str>>,
    #[serde(default)]
    dev: Option<bool>,
}

#[derive(Deserialize)]
struct LockfileDoc<'a> {
    #[serde(borrow, default)]
    name: Cow<'a, str>,
    #[serde(default)]
    #[serde(rename = "lockfileVersion")]
    lockfile_version: Option<u32>,
    #[serde(borrow, default)]
    packages: Option<HashMap<Cow<'a, str>, LockPkg<'a>>>,
    #[serde(borrow, default)]
    dependencies: Option<HashMap<Cow<'a, str>, LockDep<'a>>>,
}

fn run_bench<F: FnMut()>(name: &str, bytes: usize, iters: usize, rounds: usize, mut f: F, comma: bool) {
    let warmup = (iters / 4).max(3);
    for _ in 0..warmup {
        f();
    }
    let mut samples = Vec::with_capacity(rounds);
    for _ in 0..rounds {
        let t0 = Instant::now();
        for _ in 0..iters {
            f();
        }
        let elapsed_us = t0.elapsed().as_nanos() as f64 / 1000.0;
        samples.push(elapsed_us / iters as f64);
    }
    samples.sort_by(|a, b| a.partial_cmp(b).unwrap());
    let med_us = samples[rounds / 2];
    let min_us = samples[0];
    let ops_s = 1e6 / med_us;
    let mb_s = (bytes as f64 * ops_s) / (1024.0 * 1024.0);
    println!(
        "      \"{}\": {{ \"medianUs\": {:.4}, \"minUs\": {:.4}, \"opsPerSec\": {:.1}, \"mbPerSec\": {:.2} }}{}",
        name,
        med_us,
        min_us,
        ops_s,
        mb_s,
        if comma { "," } else { "" }
    );
}

fn bench_json(manifest_path: &str, rounds: usize) {
    let manifest = fs::read_to_string(manifest_path).expect("read manifest");
    let lines: Vec<&str> = manifest.lines().filter(|l| !l.trim().is_empty()).collect();
    println!("{{");
    for (idx, line) in lines.iter().enumerate() {
        let parts: Vec<&str> = line.split('\t').collect();
        let key = parts[0];
        let path = parts[1];
        let iters: usize = parts[2].parse().unwrap_or(10);
        let data = fs::read(path).expect("read json payload");
        let len = data.len();
        let is_array = data.iter().find(|&&b| !b.is_ascii_whitespace()) == Some(&b'[');
        let is_pkg_json = key == "small";

        println!("  \"{}\": {{", key);

        run_bench(
            "serde_json (Native Rust zero-copy/borrowed)",
            len,
            iters,
            rounds,
            || {
                if is_array {
                    let entries: Vec<SynthEntry> = serde_json::from_slice(black_box(&data)).unwrap();
                    black_box(entries.len() as u64 + entries.first().map(|e| e.id + e.name.len() as u64).unwrap_or(0));
                } else if is_pkg_json {
                    let doc: PackageJsonDoc = serde_json::from_slice(black_box(&data)).unwrap();
                    black_box(
                        doc.name.len() as u64
                            + doc.scripts.as_ref().map(|m| m.len() as u64).unwrap_or(0),
                    );
                } else {
                    let doc: LockfileDoc = serde_json::from_slice(black_box(&data)).unwrap();
                    black_box(
                        doc.name.len() as u64
                            + doc.packages.as_ref().map(|m| m.len() as u64).unwrap_or(0),
                    );
                }
            },
            true,
        );

        run_bench(
            "serde_json (Native Rust DOM)",
            len,
            iters,
            rounds,
            || {
                let v: serde_json::Value = serde_json::from_slice(black_box(&data)).unwrap();
                black_box(&v);
            },
            true,
        );

        run_bench(
            "sonic-rs (Native Rust SIMD)",
            len,
            iters,
            rounds,
            || {
                let v: sonic_rs::Value = sonic_rs::from_slice(black_box(&data)).unwrap();
                black_box(&v);
            },
            false,
        );

        println!("  }}{}", if idx + 1 == lines.len() { "" } else { "," });
    }
    println!("}}");
}

fn bench_js(manifest_path: &str, rounds: usize) {
    let manifest = fs::read_to_string(manifest_path).expect("read manifest");
    let lines: Vec<&str> = manifest.lines().filter(|l| !l.trim().is_empty()).collect();
    let mut oxc_alloc = Allocator::default();
    println!("{{");
    for (idx, line) in lines.iter().enumerate() {
        let parts: Vec<&str> = line.split('\t').collect();
        let key = parts[0];
        let path = parts[1];
        let iters: usize = parts[2].parse().unwrap_or(10);
        let is_ts = parts.get(3).map(|&s| s == "1").unwrap_or(false);
        let is_dts = parts.get(4).map(|&s| s == "1").unwrap_or(false);

        let src = fs::read_to_string(path).expect("read js payload");
        let len = src.len();
        println!("  \"{}\": {{", key);

        let oxc_source_type = if is_dts {
            OxcSourceType::d_ts()
        } else if is_ts {
            OxcSourceType::ts()
        } else {
            OxcSourceType::mjs()
        };

        run_bench(
            "oxc_parser (Native Rust arena, zero N-API)",
            len,
            iters,
            rounds,
            || {
                oxc_alloc.reset();
                let ret = OxcParser::new(&oxc_alloc, black_box(&src), oxc_source_type).parse();
                black_box(ret.program.body.len());
            },
            true,
        );

        let swc_syntax = if is_ts {
            Syntax::Typescript(TsSyntax {
                tsx: false,
                decorators: false,
                dts: is_dts,
                no_early_errors: true,
                disallow_ambiguous_jsx_like: false,
            })
        } else {
            Syntax::Es(EsSyntax::default())
        };

        run_bench(
            "swc_ecma_parser (Native Rust AST, zero N-API)",
            len,
            iters,
            rounds,
            || {
                let input = StringInput::new(black_box(&src), BytePos(1), BytePos(1 + len as u32));
                let lexer = SwcLexer::new(swc_syntax, EsVersion::latest(), input, None);
                let mut parser = SwcParser::new_from(lexer);
                let m = parser.parse_module().unwrap();
                black_box(m.body.len());
            },
            true,
        );

        let biome_source = if is_dts {
            JsFileSource::d_ts()
        } else if is_ts {
            JsFileSource::ts()
        } else {
            JsFileSource::js_module()
        };

        run_bench(
            "biome_js_parser (Native Rust CST, zero N-API)",
            len,
            iters,
            rounds,
            || {
                let parsed = biome_parse(black_box(&src), biome_source, JsParserOptions::default());
                black_box(parsed.syntax());
            },
            false,
        );

        println!("  }}{}", if idx + 1 == lines.len() { "" } else { "," });
    }
    println!("}}");
}

fn main() {
    let args: Vec<String> = env::args().collect();
    let mode = args.get(1).map(|s| s.as_str()).unwrap_or("json");
    let manifest_path = args.get(2).map(|s| s.as_str()).expect("manifest path required");
    let rounds: usize = args.get(3).and_then(|s| s.parse().ok()).unwrap_or(7);
    if mode == "js" {
        bench_js(manifest_path, rounds);
    } else {
        bench_json(manifest_path, rounds);
    }
}
