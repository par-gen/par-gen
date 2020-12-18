import { promises as fsp } from "fs";
import { dirname, join } from "path";
import { URL } from "url";
import * as vm from "vm";
import { jest } from "@jest/globals";

import * as fs from "fs";
import * as url from "url";
import * as path from "path";
import * as sade from "sade";

describe("cli", () => {
  /** @type {string} */
  let base;

  beforeAll(() => {
    base = dirname(new URL(import.meta.url).pathname);
  });

  /**
   * Create new index.js in a vm scope and mock
   * all required imports.
   *
   * @param {vm.Context} context
   */
  async function runCli(context) {
    // note: this is not available in the typescript typings currently
    const SourceTextModule = /** @type {*} */ (vm).SourceTextModule;
    const SyntheticModule = /** @type {*} */ (vm).SyntheticModule;

    const module = new SourceTextModule(
      await fsp.readFile(join(base, "index.js"), "utf-8"),
      {
        context,
        /**
         * @param {*} meta
         */
        initializeImportMeta(meta) {
          meta.url = `file://${join(base, "index.js")}`;
        },
      }
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
      async function linker(specifier, referencingModule) {
        if (specifier === "fs") {
          return systemModule(fs, specifier);
        }
        if (specifier === "url") {
          return systemModule(url, specifier);
        }
        if (specifier === "path") {
          return systemModule(path, specifier);
        }
        if (specifier === "sade") {
          return systemModule(sade, specifier);
        }
        if (specifier === "./generator.js") {
          return new SourceTextModule(
            `
              export function createGenerator(...args) {
                return createGeneratorMock(...args);
              };
              export function execute(...args) {
                return executeMock(...args);
              }
            `,
            {
              context: referencingModule.context,
            }
          );
        }
        throw new Error(`Unable to resolve dependency: ${specifier}`);
      }
    );

    await module.evaluate();
  }

  it("should run a code generator", async () => {
    const codegen = {};
    const createGeneratorMock = jest.fn().mockReturnValue(codegen);
    const executeMock = jest.fn();
    const processExit = jest.fn();

    const context = vm.createContext({
      createGeneratorMock,
      executeMock,
      console,
      process: {
        argv: ["node", "path", "codegen", "grammar", "target"],
        exit: processExit,
      },
    });

    await runCli(context);

    expect(processExit).not.toHaveBeenCalled();
    expect(createGeneratorMock).toHaveBeenCalledWith("javascript", "esm", {
      lexerFile: "target/lexer.js",
      parserFile: "target/parser.js",
      debug: false,
    });
    expect(executeMock).toHaveBeenCalledWith("grammar", codegen);
  });
});
