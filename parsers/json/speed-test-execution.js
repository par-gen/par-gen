import { promises as fsp } from "fs";
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

  const warmup = Math.min(200, Math.max(20, iterations >> 2));

  const buffer = await fsp.readFile(file);
  const string = buffer.toString("utf8");
  const source = `var a = ${string};`;

  // 1. par-gen (Buffer)
  for (let i = 0; i < warmup; i++) {
    pargenParse(buffer);
  }
  const pargen = time("par-gen (Buffer)", () => {
    for (let i = 0; i < iterations; i++) {
      pargenParse(buffer);
    }
  });

  // 2. par-gen (string)
  for (let i = 0; i < warmup; i++) {
    pargenParse(string);
  }
  const pargenString = time("par-gen (string)", () => {
    for (let i = 0; i < iterations; i++) {
      pargenParse(string);
    }
  });

  // 3. V8 JSON.parse (native)
  const native = time("V8 JSON.parse", () => {
    for (let i = 0; i < iterations; i++) {
      JSON.parse(string);
    }
  });

  // 4. Chevrotain (CST)
  for (let i = 0; i < warmup; i++) {
    parseChevrotainCst(string);
  }
  const chevrotain = time("Chevrotain (CST)", () => {
    for (let i = 0; i < iterations; i++) {
      parseChevrotainCst(string);
    }
  });

  // 5. Chevrotain (No-CST)
  for (let i = 0; i < warmup; i++) {
    parseChevrotainNoCst(string);
  }
  const chevrotainNoCst = time("Chevrotain (No-CST)", () => {
    for (let i = 0; i < iterations; i++) {
      parseChevrotainNoCst(string);
    }
  });

  // 6. Peggy
  for (let i = 0; i < warmup; i++) {
    parsePeggy(string);
  }
  const peggy = time("Peggy", () => {
    for (let i = 0; i < iterations; i++) {
      parsePeggy(string);
    }
  });

  // 7. Nearley (with moo lexer)
  for (let i = 0; i < warmup; i++) {
    parseNearley(string);
  }
  const nearley = time("Nearley (moo)", () => {
    for (let i = 0; i < iterations; i++) {
      parseNearley(string);
    }
  });

  // 8. ANTLR4
  for (let i = 0; i < warmup; i++) {
    parseAntlr4(string);
  }
  const antlr4 = time("ANTLR4", () => {
    for (let i = 0; i < iterations; i++) {
      parseAntlr4(string);
    }
  });

  // 9. acorn (v8.19)
  for (let i = 0; i < warmup; i++) {
    parseAcorn(source);
  }
  const acorn = time("acorn (v8.19)", () => {
    for (let i = 0; i < iterations; i++) {
      parseAcorn(source);
    }
  });

  // 10. @babel/parser (v8.1)
  for (let i = 0; i < warmup; i++) {
    parseBabelJsonExpression(string);
  }
  const babel = time("@babel/parser (v8.1)", () => {
    for (let i = 0; i < iterations; i++) {
      parseBabelJsonExpression(string);
    }
  });

  // 11. typescript (v5.9)
  for (let i = 0; i < warmup; i++) {
    parseTypeScriptJson(string);
  }
  const typescript = time("typescript (v5.9)", () => {
    for (let i = 0; i < iterations; i++) {
      parseTypeScriptJson(string);
    }
  });

  // 12. json5 (v2.2.3)
  for (let i = 0; i < warmup; i++) {
    parseJson5(string);
  }
  const json5 = time("json5 (v2.2.3)", () => {
    for (let i = 0; i < iterations; i++) {
      parseJson5(string);
    }
  });

  const body = {
    pargen,
    pargenString,
    native,
    chevrotain,
    chevrotainNoCst,
    peggy,
    nearley,
    antlr4,
    acorn,
    babel,
    typescript,
    json5,
  };

  if (process.send) {
    process.send({
      command: "done",
      body,
    });
  } else {
    console.log(
      `=== JSON Benchmark (${path.basename(file)}, ${buffer.length} B, ${iterations.toLocaleString()} iterations) ===`
    );
    const baseMs = pargen[1];
    for (const [name, totalMs] of Object.values(body)) {
      const usPerIter = (totalMs * 1000) / iterations;
      const mbPerSec =
        ((buffer.length * iterations) / (1024 * 1024)) / (totalMs / 1000);
      const ratio = totalMs / baseMs;
      console.log(
        `  ${name.padEnd(24)} | ${totalMs.toFixed(2).padStart(8)} ms total | ${usPerIter.toFixed(2).padStart(8)} us/op | ${mbPerSec.toFixed(2).padStart(7)} MB/s | ${ratio.toFixed(2)}x`
      );
    }
  }

  process.exit(0);
}

if (process.send) {
  process.on("message", async ({ command, body }) => {
    if (command === "start") {
      const { file, iterations } = body;
      run(file, iterations);
    }
  });

  process.send({ command: "ready" });
} else {
  const defaultFile = path.resolve(__dirname, "../../package.json");
  run(defaultFile, 1_000);
}
