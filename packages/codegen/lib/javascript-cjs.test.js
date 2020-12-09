import { generate as genLexer } from "@knisterpeter/expound-lexer";
import { generate as genParser } from "@knisterpeter/expound-parser";
import { promises as fsp, readFileSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";
import * as vm from "vm";

import { JavaScriptCommonJsCodegen } from "./javascript-cjs.js";

describe("JavaScriptCommonJsCodegen", () => {
  /** @type {string} */
  let directory;
  /** @type {string} */
  let lexerFile;
  /** @type {string} */
  let parserFile;

  beforeEach(async () => {
    directory = await fsp.mkdtemp(join(tmpdir(), "lexer-"));
    lexerFile = join(directory, "lexer.js");
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

    const codegen = new JavaScriptCommonJsCodegen({ lexerFile, parserFile });

    await codegen.lexer(genLexer(grammar));

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

    const codegen = new JavaScriptCommonJsCodegen({ lexerFile, parserFile });
    await codegen.parser(genParser(grammar));

    const context = vm.createContext({
      output,
      Buffer,
      /**
       * @param {string} id
       */
      require(id) {
        if (id === "./lexer.js") {
          const innerContext = vm.createContext({
            module: {},
          });
          new vm.Script(readFileSync(lexerFile, "utf-8")).runInContext(
            innerContext
          );
          return innerContext.module.exports;
        } else if (id === parserFile) {
          const innerContext = vm.createContext({
            module: {},
            require: context.require,
            Buffer: context.Buffer,
          });
          new vm.Script(readFileSync(parserFile, "utf-8")).runInContext(
            innerContext
          );
          return innerContext.module.exports;
        }
        throw new Error(`Unable to resolve dependency: ${id}`);
      },
    });

    const script = new vm.Script(
      `
        const { parse } = require('${parserFile}');

        const matched = parse("abc");

        output(matched);
      `
    );

    script.runInContext(context);

    expect(results).toEqual({
      name: "Rule",
      items: [
        {
          name: "A",
          start: 0,
          end: 3,
        },
      ],
    });
  });
});
