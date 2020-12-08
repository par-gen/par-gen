import { generate } from "@knisterpeter/expound-lexer";
import { promises as fsp } from "fs";
import { tmpdir } from "os";
import { join } from "path";
import * as vm from "vm";

import { JavaScriptModuleCodegen } from "./javascript-esm.js";

describe("JavaScriptModuleCodegen", () => {
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

    const codegen = new JavaScriptModuleCodegen({
      lexerFile,
    });
    await codegen.lexer(generate(grammar));

    // note: this is not available in the typescript typings currently
    const SourceTextModule = /** @type {*} */ (vm).SourceTextModule;
    const context = vm.createContext({
      output,
      Buffer,
    });

    const module = new SourceTextModule(
      `
        import { next } from '${lexerFile}';

        const input = new Uint8Array(Buffer.from("abc"));
        const matched = next(input, 0);

        output(matched);
      `,
      { context }
    );

    await module.link(
      /**
       * @param {string} specifier
       * @param {*} referencingModule
       */
      async function (specifier, referencingModule) {
        if (specifier === lexerFile) {
          const code = await fsp.readFile(lexerFile, "utf-8");
          return new SourceTextModule(code, {
            context: referencingModule.context,
          });
        }
        throw new Error(`Unable to resolve dependency: ${specifier}`);
      }
    );

    await module.evaluate();

    expect(results).toEqual({
      state: "A",
      start: 0,
      end: 3,
    });
  });
});
