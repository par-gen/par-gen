import { dirname, relative } from "path";

import { JavaScriptBaseCodegen } from "./javascript.js";

/**
 * @typedef {import('./type').LexerData} LexerData
 */

/**
 * @typedef {import('./type').ParserData} ParserData
 */

export class JavaScriptModuleCodegen extends JavaScriptBaseCodegen {
  /**
   * @param {Object} options
   * @param {string} options.lexerFile
   * @param {string} options.parserFile
   * @param {boolean} [options.debug]
   */
  constructor(options) {
    super(options);
  }

  _lexerExport() {
    return `
      export { EOF, next };
    `;
  }

  _parserImports() {
    return `
      import { next as nextToken } from './${relative(
        dirname(this.options.parserFile),
        this.options.lexerFile
      )}';
  `;
  }

  _parserExports() {
    return `
      export { parse };
    `;
  }
}
