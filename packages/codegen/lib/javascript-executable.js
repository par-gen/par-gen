import { promises as fsp } from "fs";
import { relative, dirname } from "path";
import prettier from "prettier";

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

export class JavaScriptExecutableCodegen extends JavaScriptBaseCodegen {
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
      export { EOF, ERROR, next };
    `;
  }

  /**
   * @abstract
   * @param {ParserData} data
   * @returns {Promise<void>}
   */
  async parser(data) {
    for (const [name, lexerData] of Object.entries(data.lexerData)) {
      await this.lexer(lexerData, name);
    }

    const code = this._execParserCode(data);

    await fsp.mkdir(dirname(this.options.parserFile), { recursive: true });
    await fsp.writeFile(this.options.parserFile, code);
  }

  /**
   * @private
   * @param {ParserData} data
   * @returns {string}
   */
  _execParserCode(data) {
    const { lexerData, parserSymbols, states, actions, goto, start } = data;

    const code = `// @ts-nocheck
      ${this._parserImports(lexerData)}

      const next = nextTokenInitial;

      const parserSymbols = ${JSON.stringify(parserSymbols)};
      const reduces = [
        ${states
          .map((state) => {
            return `{
              ${Array.from(state.values())
                .map((item) => {
                  if (item.marker < item.tokens.length) {
                    return "";
                  }
                  return `'${parserSymbols.indexOf(item.lookahead)}': ${
                    item.tokens.length
                  },`;
                })
                .join("\n")}
            }`;
          })
          .join(",\n")}
      ];
      const goto = {
        ${Array.from(goto.entries())
          .map(([from, transition]) => {
            return `${states.indexOf(from)}: {
              ${Array.from(transition.entries())
                .map(([lookahead, to]) => {
                  return `${parserSymbols.indexOf(lookahead)}: ${states.indexOf(
                    to
                  )}`;
                })
                .join(",\n")}
            }`;
          })
          .join(",\n")}
        };

      function parse(input) {
        const stream = Buffer.isBuffer(input) ? input : Buffer.from(input);
        let lexer = next(stream, 0);
        const stack = [${states.indexOf(start)}];

        do {
          switch (stack[stack.length - 1]) {
            ${states
              .map((state, i) => {
                const possibleActions = actions.get(state);
                if (!possibleActions) {
                  return "";
                }
                return `
                  case ${i}: {
                    switch (lexer.state) {
                      ${Array.from(possibleActions.entries())
                        .map(([lookahead, action]) => {
                          if (action.op === "shift") {
                            return `
                              case ${parserSymbols.indexOf(
                                lookahead
                              )}: { // ${lookahead}
                                // ${action.op}
                                stack.push(${states.indexOf(action.state)});
                                lexer = next(stream, lexer.end);
                              }
                              break;
                            `;
                          } else if (action.op === "reduce") {
                            return `
                              case ${parserSymbols.indexOf(
                                lookahead
                              )}: { // ${lookahead}
                                // ${action.op}
                                let n = reduces[stack[stack.length - 1]][lexer.state];
                                while (n > 0) {
                                  stack.pop();
                                  n--;
                                }
                                stack.push(goto[stack[stack.length - 1]][${parserSymbols.indexOf(
                                  action.symbol
                                )}]);
                              }
                              break;
                            `;
                          } else if (action.op === "done") {
                            return `
                              case ${parserSymbols.indexOf(
                                lookahead
                              )}: { // ${lookahead}
                                // ${action.op}
                                return true;
                              }
                              break;
                              `;
                          }
                          return "";
                        })
                        .join("\n")}
                    }
                  }
                  break;
                `;
              })
              .join("\n")};
            }
        } while (true);
      }

      ${this._parserExports()}
    `;

    const formattedCode = prettier.format(code, {
      filepath: this.options.parserFile,
    });

    return formattedCode;
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
