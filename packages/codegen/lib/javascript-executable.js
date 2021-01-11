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

      const stack = new Uint16Array(32768);
      const tree = new Uint16Array(32768);

      const createProxy = (stream, tree, pointer) => {
        return new Proxy(
          {},
          {
            get(target, prop, receiver) {
              const nChildren = tree[pointer + 3];

              switch (prop) {
                case "name":
                  return parserSymbols[tree[pointer]];
                case "start":
                  return nChildren > 0 ? receiver.items[0].start : tree[pointer + 1];
                case "end":
                  return nChildren > 0 ? receiver.items[nChildren - 1].end : tree[pointer + 2];
                case "value":
                  return stream.subarray(receiver.start, receiver.end);
                case "items":
                  if (nChildren === 0) {
                    return undefined;
                  }

                  const firstChild = tree[pointer + 4];
                  const children = [createProxy(stream, tree, firstChild)];
                  let nextChild = tree[firstChild + 5];

                  for (let i = 1; i < nChildren; i++) {
                    children.push(createProxy(stream, tree, nextChild));
                    nextChild = tree[nextChild + 5];
                  }

                  return children;
                case "__tree":
                  return tree;
                case "__pointer":
                  return pointer;
              }
            },
            ownKeys(target) {
              return ["name", "start", "end", "value", "items"];
            },
            has(target, prop) {
              return this.ownKeys(target).includes(prop);
            },
            getOwnPropertyDescriptor(target, prop) {
              return this.has(target, prop)
                ? { enumerable: true, configurable: true }
                : undefined;
            },
          }
        );
      };

      function parse(input) {
        const stream = Buffer.isBuffer(input) ? input : Buffer.from(input);
        let lexer = next(stream, 0);
        stack[0] = 0;
        stack[1] = ${states.indexOf(start)};
        let sp = 1;
        let tp = 6;

        do {
          switch (stack[sp]) {
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

                                tree[tp] = ${parserSymbols.indexOf(
                                  lookahead
                                )}; // name
                                tree[tp + 1] = lexer.start;
                                tree[tp + 2] = lexer.end;
                                tree[tp + 3] = 0; // leaf nodes have no children
                                tree[tp + 4] = 0; // leaf nodes have first child
                                tree[stack[sp -  1] + 5] = tp; // write the current address to the previous item as next sibling

                                sp += 2;
                                stack[sp - 1] = tp;
                                stack[sp] = ${states.indexOf(action.state)};
                                lexer = next(stream, lexer.end);
                                tp += 6;
                              }
                              break;
                            `;
                          } else if (action.op === "reduce") {
                            return `
                              case ${parserSymbols.indexOf(
                                lookahead
                              )}: { // ${lookahead}
                                // ${action.op}
                                const n = reduces[stack[sp]][lexer.state];
                                sp -= n * 2;

                                tree[tp] = ${parserSymbols.indexOf(
                                  action.symbol
                                )}; // name
                                tree[tp + 1] = -1;        // start
                                tree[tp + 2] = -1;        // end
                                tree[tp + 3] = n; // number of children
                                tree[tp + 4] = stack[sp + 1]; // first child
                                tree[stack[sp - 1] + 5] = tp; // next sibling

                                const next = goto[stack[sp]][${parserSymbols.indexOf(
                                  action.symbol
                                )}];
                                sp += 2;
                                stack[sp - 1] = tp;
                                stack[sp] = next;
                                tp += 6;
                              }
                              break;
                            `;
                          } else if (action.op === "done") {
                            return `
                              case ${parserSymbols.indexOf(
                                lookahead
                              )}: { // ${lookahead}
                                // ${action.op}
                                return createProxy(stream, tree, tp - 6);
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
