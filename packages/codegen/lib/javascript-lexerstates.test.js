import { generate as genParser } from "@par-gen/parser";
import { promises as fsp, existsSync } from "fs";
import { tmpdir } from "os";
import { join, basename } from "path";
import * as vm from "vm";

import * as fs from "fs";
import * as url from "url";
import * as path from "path";

import { JavaScriptModuleCodegen } from "./javascript-esm.js";

describe("Lexer States", () => {
  /** @type {string} */
  let directory;
  /** @type {string} */
  let lexerFile;
  /** @type {string} */
  let lexerInitialFile;
  /** @type {string} */
  let lexerStateFile;
  /** @type {string} */
  let parserFile;

  beforeEach(async () => {
    directory = await fsp.mkdtemp(join(tmpdir(), "lexer-"));
    lexerFile = join(directory, "lexer.js");
    lexerInitialFile = join(directory, "lexer-initial.js");
    lexerStateFile = join(directory, "lexer-state.js");
    parserFile = join(directory, "parser.js");
  });

  afterEach(async () => {
    await fsp.rm(directory, { recursive: true, force: true });
  });

  it("should create a multi-state lexer", async () => {
    let results;
    /** @type {(_results: *) => void}  */
    const output = (_results) => {
      results = _results;
    };

    const grammar = `
      A := 'a';
      B := 'b' @ state;
      C := 'c';

      RuleA := { lexer.push('state') } A RuleB;
      RuleB := { lexer.pop() } B RuleC;
      RuleC := C;
    `;

    const codegen = new JavaScriptModuleCodegen({
      lexerFile,
      parserFile,
      debug: false,
    });
    await codegen.parser(genParser(grammar));

    // note: this is not available in the typescript typings currently
    const SourceTextModule = /** @type {*} */ (vm).SourceTextModule;
    const SyntheticModule = /** @type {*} */ (vm).SyntheticModule;
    const context = vm.createContext({
      output,
      Buffer,
      console,
    });

    const module = new SourceTextModule(
      `
        import { parse } from 'parser-file';

        const matched = parse("abc");

        output(matched);
      `,
      { context }
    );

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
        if (specifier === `./${basename(lexerInitialFile)}`) {
          const code = await fsp.readFile(lexerInitialFile, "utf-8");

          return new SourceTextModule(code, {
            context: referencingModule.context,
            identifier: lexerInitialFile,
            /**
             * @param {*} meta
             */
            initializeImportMeta(meta) {
              meta.url = url
                .pathToFileURL(join(directory, "index.js"))
                .toString();
            },
          });
        } else if (specifier === `./${basename(lexerStateFile)}`) {
          const code = await fsp.readFile(lexerStateFile, "utf-8");

          return new SourceTextModule(code, {
            context: referencingModule.context,
            identifier: lexerStateFile,
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
            identifier: parserFile,
          });
        }
        throw new Error(`Unable to resolve dependency: ${specifier}`);
      }
    );

    expect(existsSync(lexerInitialFile)).toBeTruthy();
    expect(existsSync(lexerStateFile)).toBeTruthy();

    await module.evaluate();

    expect(results).toEqual({
      name: "RuleA",
      start: -1,
      end: -1,
      items: [
        {
          name: "A",
          start: 0,
          end: 1,
          items: undefined,
        },
        {
          name: "RuleB",
          start: -1,
          end: -1,
          items: [
            {
              name: "B",
              start: 1,
              end: 2,
              items: undefined,
            },
            {
              name: "RuleC",
              start: -1,
              end: -1,
              items: [
                {
                  name: "C",
                  start: 2,
                  end: 3,
                  items: undefined,
                },
              ],
            },
          ],
        },
      ],
    });
  });
});
