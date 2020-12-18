import { dirname, relative } from "path";

import { JavaScriptBaseCodegen } from "./javascript.js";

/**
 * @typedef {import('@knisterpeter/expound-lexer/types/lexer').LexerData} LexerData
 */

/**
 * @typedef {import('./type').ParserData} ParserData
 */

export class JavaScriptCommonJsCodegen extends JavaScriptBaseCodegen {
  /**
   * @param {Object} options
   * @param {string} options.lexerFile
   * @param {string} options.parserFile
   * @param {boolean=} options.debug
   */
  constructor(options) {
    super(options);
  }

  _lexerPreCode() {
    return `'use strict';`;
  }

  _lexerExport() {
    return `
      module.exports = { EOF, next };
    `;
  }

  _parserImports() {
    return `
      const { next: nextToken } = require('./${relative(
        dirname(this.options.parserFile),
        this.options.lexerFile
      )}');
    `;
  }

  _parserExports() {
    return `
      module.exports = { parse };
    `;
  }
}
