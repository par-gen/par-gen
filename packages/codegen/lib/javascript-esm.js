import { dirname, relative } from "path";

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

  _lexerExport() {
    return `
      export { EOF, ERROR, tokenNames, next };
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
