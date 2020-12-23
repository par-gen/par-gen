import { fork } from "child_process";
import { fileURLToPath } from "url";
import { dirname, resolve as pathResolve } from "path";
import { jest } from "@jest/globals";

const iterations = 10_000;

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

jest.setTimeout(10_000);

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

    Object.values(results).forEach(([, time]) => {
      expect(results.expound[1]).toBeLessThanOrEqual(time);
    });
  });
});
