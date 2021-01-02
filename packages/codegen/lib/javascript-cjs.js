import { basename, dirname, relative } from "path";

import { JavaScriptBaseCodegen } from "./javascript.js";

/**
 * @typedef {import('@par-gen/lexer/types/lexer').LexerData} LexerData
 */

/**
 * @typedef {import('@par-gen/parser/types/parser').Lexers} Lexers
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

  _lexerImports() {
    return `
      const { readFileSync } = require('fs');
      const { join } = require('path');
    `;
  }

  /**
   * @param {string} name
   */
  _lexerBinRead(name) {
    return `join(__dirname, '${basename(this._lexerBinFile(name))}')`;
  }

  _lexerExport() {
    return `
      module.exports = { EOF, ERROR, next };
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
            `const { next: nextToken${
              name[0].toUpperCase() + name.substr(1)
            } } = require('./${relative(
              dirname(this.options.parserFile),
              this._lexerStateFile(name)
            )}');`
        )
        .join("\n")}
    `;
  }

  _parserExports() {
    return `
      module.exports = { parse };
    `;
  }
}
