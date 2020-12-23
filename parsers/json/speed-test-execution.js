import { promises as fsp } from "fs";
import { performance } from "perf_hooks";
import { parse as acornParse } from "acorn";
import { parse as babelParse } from "@babel/parser";
import simdJsonParser from "simdjson";
import ts from "typescript";
// import esbuildParser from "esbuild";
import json5Parser from "json5";

import { parse as expoundParse } from "./generated/parser.js";

/**
 * @param {string} file
 * @param {number} iterations
 */
async function run(file, iterations) {
  /**
   * @param {string} name
   * @param {() => void} fn
   * @returns {[string, number]}
   */
  const time = (name, fn) => {
    const start = performance.now();
    fn();
    const end = performance.now();
    return [name, end - start];
  };

  const warmup = 1_000;

  const buffer = await fsp.readFile(file);
  const string = buffer.toString();
  const source = `var a = ${string};`;

  // warm
  for (let i = 0; i < warmup; i++) {
    expoundParse(buffer);
  }

  const expound = time("expound", () => {
    for (let i = 0; i < iterations; i++) {
      expoundParse(buffer);
    }
  });

  // warm
  // no warm-up required (native code)

  const native = time("native", () => {
    for (let i = 0; i < iterations; i++) {
      JSON.parse(string);
    }
  });

  // warm
  for (let i = 0; i < warmup; i++) {
    acornParse(source, { ecmaVersion: "latest" });
  }

  const acorn = time("acorn", () => {
    for (let i = 0; i < iterations; i++) {
      acornParse(source, { ecmaVersion: "latest" });
    }
  });

  // warm
  for (let i = 0; i < warmup; i++) {
    babelParse(source);
  }

  const babel = time("babel", () => {
    for (let i = 0; i < iterations; i++) {
      babelParse(source);
    }
  });

  // warm
  // no warm-up required (native code)

  const simdJson = time("simdjson", () => {
    for (let i = 0; i < iterations; i++) {
      simdJsonParser.parse(string);
    }
  });

  // warm
  for (let i = 0; i < warmup; i++) {
    ts.parseJsonText("file", string);
  }

  const typescript = time("typescript", () => {
    for (let i = 0; i < iterations; i++) {
      ts.parseJsonText("file", string);
    }
  });

  // skip esbuild because its too slow to parse just json
  // warm
  // no warm-up required (native code)

  // const esbuild = time("esbuild", () => {
  //   for (let i = 0; i < 1_000; i++) {
  //     esbuildParser.transformSync(source, { loader: "js", minify: false });
  //   }
  // });

  // warm
  for (let i = 0; i < warmup; i++) {
    json5Parser.parse(string);
  }

  const json5 = time("json5", () => {
    for (let i = 0; i < iterations; i++) {
      json5Parser.parse(string);
    }
  });

  process.send?.({
    command: "done",
    body: {
      expound,
      native,
      acorn,
      babel,
      simdJson,
      typescript,
      // esbuild,
      json5,
    },
  });

  process.exit(0);
}

process.on("message", async ({ command, body }) => {
  if (command === "start") {
    const { file, iterations } = body;
    run(file, iterations);
  }
});

process.send?.({ command: "ready" });
