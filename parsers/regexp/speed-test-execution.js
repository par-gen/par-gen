import { performance } from "perf_hooks";
import { parse as acornParse } from "acorn";
import { parse as babelParse } from "@babel/parser";
import ts from "typescript";

import { parse as pargenParse } from "./generated/parser.js";

const CORPUS = [
  "( |\\n|\\r|\\t)( |\\n|\\r|\\t)*",
  '"([^"\\\\]|\\\\["\\\\/bfnrt]|\\\\u[0-9a-fA-F][0-9a-fA-F][0-9a-fA-F][0-9a-fA-F])*"',
  "(-|)(0|[1-9][0-9]*)(\\.[0-9][0-9]*|)([Ee]([\\-+]|)(0|[1-9][0-9]*)|)",
  "[^\\(\\)\\[\\]\\|\\.\\*?+\\r\\n\\b\\t\\frnbtf\\\\\\-\\^x0-9a-f]",
  "[0-9c-ea]",
  "[rnt]",
  "[\\*?+]",
  "ab(c|d)(e|f)*((gh|ij)(kl|mn))*",
];

/**
 * @param {number} iterations
 */
async function run(iterations) {
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
  const buffers = CORPUS.map((s) => Buffer.from(s, "utf-8"));
  const jsSources = CORPUS.map((s) => `var r = /${s}/;`);

  // Pre-build unique regex strings so V8's CompilationCacheRegExp does not short-circuit native parsing
  const unseenNativeStrings = new Array(iterations * CORPUS.length);
  for (let i = 0, k = 0; i < iterations; i++) {
    for (let j = 0; j < CORPUS.length; j++, k++) {
      unseenNativeStrings[k] = `${CORPUS[j]}(${i})`;
    }
  }

  for (let i = 0; i < warmup; i++) {
    for (let j = 0; j < buffers.length; j++) {
      pargenParse(buffers[j]);
    }
  }

  const pargen = time("par-gen", () => {
    for (let i = 0; i < iterations; i++) {
      for (let j = 0; j < buffers.length; j++) {
        pargenParse(buffers[j]);
      }
    }
  });

  const native = time("native", () => {
    for (let k = 0; k < unseenNativeStrings.length; k++) {
      new RegExp(unseenNativeStrings[k]);
    }
  });

  for (let i = 0; i < warmup; i++) {
    for (let j = 0; j < jsSources.length; j++) {
      acornParse(jsSources[j], { ecmaVersion: 2020 });
    }
  }

  const acorn = time("acorn", () => {
    for (let i = 0; i < iterations; i++) {
      for (let j = 0; j < jsSources.length; j++) {
        acornParse(jsSources[j], { ecmaVersion: 2020 });
      }
    }
  });

  for (let i = 0; i < warmup; i++) {
    for (let j = 0; j < jsSources.length; j++) {
      babelParse(jsSources[j]);
    }
  }

  const babel = time("babel", () => {
    for (let i = 0; i < iterations; i++) {
      for (let j = 0; j < jsSources.length; j++) {
        babelParse(jsSources[j]);
      }
    }
  });

  for (let i = 0; i < warmup; i++) {
    for (let j = 0; j < jsSources.length; j++) {
      ts.createSourceFile("file.ts", jsSources[j], ts.ScriptTarget.Latest);
    }
  }

  const typescript = time("typescript", () => {
    for (let i = 0; i < iterations; i++) {
      for (let j = 0; j < jsSources.length; j++) {
        ts.createSourceFile("file.ts", jsSources[j], ts.ScriptTarget.Latest);
      }
    }
  });

  process.send?.({
    command: "done",
    body: {
      pargen,
      native,
      acorn,
      babel,
      typescript,
    },
  });

  process.exit(0);
}

process.on("message", async ({ command, body }) => {
  if (command === "start") {
    const { iterations } = body;
    run(iterations);
  }
});

process.send?.({ command: "ready" });
