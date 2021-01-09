import { generate as genLexer } from "@par-gen/lexer";
import { generate as genParser } from "@par-gen/parser";
import { promises as fsp } from "fs";
import { tmpdir } from "os";
import { join, basename } from "path";
import * as vm from "vm";

import * as fs from "fs";
import * as url from "url";
import * as path from "path";

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
    const SyntheticModule = /** @type {*} */ (vm).SyntheticModule;
    const context = vm.createContext({
      output,
      Buffer,
    });

    /**
     * @param {*} m
     * @param {string} specifier
     */
    function systemModule(m, specifier) {
      return new SyntheticModule(
        Object.keys(m),
        function () {
          Object.keys(m).forEach((name) => {
            // @ts-expect-error
            this.setExport(name, m[name]);
          });
        },
        {
          context,
          identifier: specifier,
        }
      );
    }

    const module = new SourceTextModule(
      `
        import { next } from 'lexer-file';

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
        if (specifier === "fs") {
          return systemModule(fs, specifier);
        }
        if (specifier === "url") {
          return systemModule(url, specifier);
        }
        if (specifier === "path") {
          return systemModule(path, specifier);
        }
        if (specifier === "lexer-file") {
          const code = await fsp.readFile(lexerStateFile, "utf-8");

          return new SourceTextModule(code, {
            context: referencingModule.context,
            /**
             * @param {*} meta
             */
            initializeImportMeta(meta) {
              meta.url = url
                .pathToFileURL(join(directory, "index.js"))
                .toString();
            },
          });
        }
        throw new Error(`Unable to resolve dependency: ${specifier}`);
      }
    );

    await module.evaluate();

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

    const codegen = new JavaScriptModuleCodegen({ lexerFile, parserFile });
    const SyntheticModule = /** @type {*} */ (vm).SyntheticModule;
    await codegen.parser(genParser(grammar));

    // note: this is not available in the typescript typings currently
    const SourceTextModule = /** @type {*} */ (vm).SourceTextModule;
    const context = vm.createContext({
      output,
      Buffer,
    });

    /**
     * @param {*} m
     * @param {string} specifier
     */
    function systemModule(m, specifier) {
      return new SyntheticModule(
        Object.keys(m),
        function () {
          Object.keys(m).forEach((name) => {
            // @ts-expect-error
            this.setExport(name, m[name]);
          });
        },
        {
          context,
          identifier: specifier,
        }
      );
    }

    const module = new SourceTextModule(
      `
        import { parse } from 'parser-file';

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
        if (specifier === "fs") {
          return systemModule(fs, specifier);
        }
        if (specifier === "url") {
          return systemModule(url, specifier);
        }
        if (specifier === "path") {
          return systemModule(path, specifier);
        }
        if (specifier === `./${basename(lexerStateFile)}`) {
          const code = await fsp.readFile(lexerStateFile, "utf-8");
          return new SourceTextModule(code, {
            context: referencingModule.context,
            /**
             * @param {*} meta
             */
            initializeImportMeta(meta) {
              meta.url = url
                .pathToFileURL(join(directory, "index.js"))
                .toString();
            },
          });
        } else if (specifier === "parser-file") {
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
