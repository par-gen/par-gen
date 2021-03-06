import { generate as genLexer } from "@par-gen/lexer";
import { generate as genParser } from "@par-gen/parser";
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

    const codegen = new JavaScriptCommonJsCodegen({ lexerFile, parserFile });

    await codegen.lexer(genLexer(grammar), "initial");

    const context = vm.createContext({
      output,
      Buffer,
      /**
       * @param {string} id
       */
      require(id) {
        if (id === "lexer-file") {
          const context = vm.createContext({ module: {} });
          new vm.Script(readFileSync(lexerStateFile, "utf-8")).runInContext(
            context
          );
          return context.module.exports;
        }
        throw new Error(`Unable to resolve dependency: ${id}`);
      },
    });

    const script = new vm.Script(
      `
        const { next } = require('lexer-file');

        const input = Buffer.from("abc");
        const matched = next(input, 0);

        output(matched);
      `
    );

    script.runInContext(context);

    expect(results).toEqual({
      state: 0,
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
        if (id === "./lexer-initial.js") {
          const innerContext = vm.createContext({
            module: {},
          });
          new vm.Script(readFileSync(lexerStateFile, "utf-8")).runInContext(
            innerContext
          );
          return innerContext.module.exports;
        } else if (id === "parser-file") {
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
        const { parse } = require('parser-file');

        const matched = parse("abc");

        output(matched);
      `
    );

    script.runInContext(context);

    expect(results).toEqual({
      name: "Rule",
      start: expect.any(Number),
      end: expect.any(Number),
      value: expect.any(Object),
      items: [
        {
          name: "A",
          start: 0,
          end: 3,
          value: expect.any(Object),
          items: undefined,
        },
      ],
    });
  });
});
