import { fork } from "child_process";
import { fileURLToPath } from "url";
import { dirname, resolve as pathResolve } from "path";
import { jest } from "@jest/globals";

const iterations = 2_000;

/**
 * @param {{[name: string]: [string, number]}} results
 */
const result = (results) => {
  console.log(`
Executing in a loop with ${iterations.toLocaleString()} iterations:
${Object.values(results)
  .map((result) => `  - Running ${result[0]} took ${result[1].toFixed(2)} ms`)
  .join("\n")}
  `);
};

jest.setTimeout(30_000);

if (process.env.RUN_SLOW_TESTS) {
  describe("JSON", () => {
    it("should compare to others", async () => {
      const results = await new Promise((resolve, reject) => {
        try {
          const child = fork("./speed-test-execution.js", {
            cwd: dirname(fileURLToPath(import.meta.url)),
            stdio: "inherit",
          });

          child.on(
            "message",
            /**
             * @param {{command: string, body?: any}} event
             */
            (event) => {
              if (event.command === "ready") {
                child.send({
                  command: "start",
                  body: {
                    file: pathResolve("package.json"),
                    iterations,
                  },
                });
              } else if (event.command === "done") {
                resolve(event.body);
              }
            }
          );

          child.on("exit", (code) => {
            if (code !== 0) {
              reject(code);
            }
          });
        } catch (e) {
          reject(e);
        }
      });

      result(results);

      // expect pargen to run within 3x of native V8 JSON.parse and faster than all 3rd-party JS/TS/PEG/LL/LR parsers
      expect(results.pargen[1]).toBeLessThanOrEqual(results.native[1] * 3);
      expect(results.pargen[1]).toBeLessThanOrEqual(results.chevrotain[1]);
      expect(results.pargen[1]).toBeLessThanOrEqual(results.chevrotainNoCst[1]);
      expect(results.pargen[1]).toBeLessThanOrEqual(results.peggy[1]);
      expect(results.pargen[1]).toBeLessThanOrEqual(results.nearley[1]);
      expect(results.pargen[1]).toBeLessThanOrEqual(results.antlr4[1]);
      expect(results.pargen[1]).toBeLessThanOrEqual(results.acorn[1]);
      expect(results.pargen[1]).toBeLessThanOrEqual(results.babel[1]);
      expect(results.pargen[1]).toBeLessThanOrEqual(results.typescript[1]);
      expect(results.pargen[1]).toBeLessThanOrEqual(results.json5[1]);
    });
  });
} else {
  test.skip("Skipped speed test", () => undefined);
}
