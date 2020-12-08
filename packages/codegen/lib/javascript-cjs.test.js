import { generate } from "@knisterpeter/expound-lexer";
import { promises as fsp, readFileSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";
import * as vm from "vm";

import { JavaScriptCommonJsCodegen } from "./javascript-cjs.js";

describe("JavaScriptCommonJsCodegen", () => {
  /** @type {string} */
  let directory;

  beforeEach(async () => {
    directory = await fsp.mkdtemp(join(tmpdir(), "lexer-"));
  });

  afterEach(async () => {
    await fsp.rm(directory, { recursive: true, force: true });
  });

  it("should be possible to write a lexer into a file", async () => {
    const lexerFile = join(directory, "lexer.js");

    let results;
    /** @type {(_results: *) => void}  */
    const output = (_results) => {
      results = _results;
    };

    const grammar = `
      A := 'abc';
    `;

    const codegen = new JavaScriptCommonJsCodegen({ lexerFile });

    await codegen.lexer(generate(grammar));

    const context = vm.createContext({
      output,
      Buffer,
      /**
       * @param {string} id
       */
      require(id) {
        if (id === lexerFile) {
          const context = vm.createContext({ module: {} });
          new vm.Script(readFileSync(lexerFile, "utf-8")).runInContext(context);
          return context.module.exports;
        }
        throw new Error(`Unable to resolve dependency: ${id}`);
      },
    });

    const script = new vm.Script(
      `
        const { next } = require('${lexerFile}');

        const input = new Uint8Array(Buffer.from("abc"));
        const matched = next(input, 0);

        output(matched);
      `
    );

    script.runInContext(context);

    expect(results).toEqual({
      state: "A",
      start: 0,
      end: 3,
    });
  });
});
