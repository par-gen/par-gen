import { basename, dirname, relative } from "path";

import { JavaScriptBaseCodegen } from "./javascript.js";

/**
 * @typedef {import('./type').LexerData} LexerData
 */

/**
 * @typedef {import('@par-gen/parser/types/parser').Lexers} Lexers
 */

/**
 * @typedef {import('./type').ParserData} ParserData
 */

export class JavaScriptModuleCodegen extends JavaScriptBaseCodegen {
  /**
   * @param {Object} options
   * @param {string} options.lexerFile
   * @param {string} options.parserFile
   * @param {boolean=} options.debug
   */
  constructor(options) {
    super(options);
  }

  _lexerImports() {
    return `
      import { readFileSync } from 'fs';
      import { fileURLToPath } from "url";
      import { dirname, join } from 'path';
    `;
  }

  /**
   * @param {string} name
   */
  _lexerBinRead(name) {
    return `join(dirname(fileURLToPath(import.meta.url)), '${basename(
      this._lexerBinFile(name)
    )}')`;
  }

  _lexerExport() {
    return `
      export { EOF, ERROR, next };
    `;
  }

  /**
   * @param {Lexers} lexers
   */
  _parserImports(lexers) {
    return `
    ${Object.keys(lexers)
      .map(
        (name) =>
          `import { next as nextToken${
            name[0].toUpperCase() + name.substr(1)
          } } from './${relative(
            dirname(this.options.parserFile),
            this._lexerStateFile(name)
          )}';`
      )
      .join("\n")}
    `;
  }

  _parserExports() {
    return `
      export { parse };
    `;
  }
}
