import { generate as genLexer } from "@knisterpeter/expound-lexer";
import { generate as genParser } from "@knisterpeter/expound-parser";
import { promises as fsp } from "fs";
import { tmpdir } from "os";
import { join, basename } from "path";
import * as vm from "vm";

import { JavaScriptModuleCodegen } from "./javascript-esm.js";

describe("JavaScriptModuleCodegen", () => {
  /** @type {string} */
  let directory;
  /** @type {string} */
  let lexerFile;
  /** @type {string} */
  let lexerStateFile;
  /** @type {string} */
  let parserFile;

  beforeEach(async () => {
    directory = await fsp.mkdtemp(join(tmpdir(), "lexer-"));
    lexerFile = join(directory, "lexer.js");
    lexerStateFile = join(directory, "lexer-initial.js");
    parserFile = join(directory, "parser.js");
  });

  afterEach(async () => {
    await fsp.rm(directory, { recursive: true, force: true });
  });

  it("should be possible to write a lexer into a file", async () => {
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
      parserFile,
    });
    await codegen.lexer(genLexer(grammar), "initial");

    // note: this is not available in the typescript typings currently
    const SourceTextModule = /** @type {*} */ (vm).SourceTextModule;
    const context = vm.createContext({
      output,
      Buffer,
    });

    const module = new SourceTextModule(
      `
        import { next } from '${lexerStateFile}';

        const input = Buffer.from("abc");
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
        if (specifier === lexerStateFile) {
          const code = await fsp.readFile(lexerStateFile, "utf-8");
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

  it("should be possible to write a parser into a file", async () => {
    let results;
    /** @type {(_results: *) => void}  */
    const output = (_results) => {
      results = _results;
    };

    const grammar = `
      A := 'abc';

      Rule := A;
    `;

    const codegen = new JavaScriptModuleCodegen({ lexerFile, parserFile });
    await codegen.parser(genParser(grammar));

    // note: this is not available in the typescript typings currently
    const SourceTextModule = /** @type {*} */ (vm).SourceTextModule;
    const context = vm.createContext({
      output,
      Buffer,
    });

    const module = new SourceTextModule(
      `
        import { parse } from '${parserFile}';

        const matched = parse("abc");

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
        if (specifier === `./${basename(lexerStateFile)}`) {
          const code = await fsp.readFile(lexerStateFile, "utf-8");
          return new SourceTextModule(code, {
            context: referencingModule.context,
          });
        } else if (specifier === parserFile) {
          const code = await fsp.readFile(parserFile, "utf-8");
          return new SourceTextModule(code, {
            context: referencingModule.context,
          });
        }
        throw new Error(`Unable to resolve dependency: ${specifier}`);
      }
    );

    await module.evaluate();

    expect(results).toEqual({
      name: "Rule",
      start: -1,
      end: -1,
      items: [
        {
          name: "A",
          start: 0,
          end: 3,
          items: undefined,
        },
      ],
    });
  });
});
