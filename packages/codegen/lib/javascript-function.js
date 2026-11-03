import { JavaScriptBaseCodegen } from "./javascript.js";

/** @typedef {import('@par-gen/lexer/types/lexer').LexerData} LexerData */
/** @typedef {import('@par-gen/parser/types/parser').Lexers} Lexers */
/** @typedef {import('@par-gen/parser/types/parser').ParserData} ParserData */
/** @typedef {import('@par-gen/parser/types/parser').AST} AST */
/** @typedef {{ EOF: string, next(input: Uint8Array, offset: number): { state: string; start: number; end: number; }; rawNext?: * }} LexerResult */

/** @param {*} n @returns {*} */
const toAst = (n) =>
  n.isLeaf
    ? { name: n.name, start: n.start, end: n.end }
    : { name: n.name, items: n.items.map(toAst) };

export class JavaScriptFunctionCodegen extends JavaScriptBaseCodegen {
  /** @param {{ debug?: boolean, equivalenceClasses?: boolean }=} options */
  constructor(options = {}) {
    super({ lexerFile: "lexer.js", parserFile: "parser.js", ...options });
  }

  _lexerExport() {
    return "return { EOF, ERROR, next };";
  }

  /** @param {Lexers} lexers */
  _parserImports(lexers) {
    return Object.keys(lexers)
      .map((n) => `const nextToken${this._lexerModePascalCase(n)} = __lexers[${JSON.stringify(n)}];`)
      .join("\n");
  }

  _parserExports() {
    return "return { parse };";
  }

  /** @param {LexerData} data @return {Promise<LexerResult>} */
  async lexer(data) {
    const { EOF, next: rawNext } = new Function("Buffer", this._lexerCode(data))(Buffer);
    /** @type {(string | undefined)[]} */
    const idToName = [];
    data.tokenIds.forEach((id, idx) => {
      if (id !== undefined) idToName[id] = data.tokenNames[idx];
    });
    return {
      EOF,
      rawNext,
      next: (input, offset) => {
        const r = rawNext(input, offset);
        return { state: /** @type {string} */ (idToName[r.state]), start: r.start, end: r.end };
      },
    };
  }

  /** @param {ParserData} data @returns {Promise<{parse(input: string | Uint8Array): AST}>} */
  async parser(data) {
    /** @type {{ [name: string]: * }} */
    const rawLexers = {};
    for (const [name, lexerData] of Object.entries(data.lexerData)) {
      rawLexers[name] = (await this.lexer(lexerData)).rawNext;
    }
    const { parse } = new Function("Buffer", "__lexers", this._parserCode(data))(Buffer, rawLexers);
    return { parse: (input) => toAst(parse(input)) };
  }
}
