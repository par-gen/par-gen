import { promises as fsp } from "fs";
import { join, dirname, basename, extname } from "path";
import prettier from "prettier";

/**
 * @typedef {import('@knisterpeter/expound-lexer/types/lexer').LexerData} LexerData
 */

/**
 * @typedef {import('@knisterpeter/expound-parser/types/parser').Lexers} Lexers
 */

/**
 * @typedef {import('./type').ParserData} ParserData
 */

/**
 * @typedef {import('./type').Codegen} Codegen
 */

/**
 * @extends {Codegen}
 */
export class JavaScriptBaseCodegen {
  /**
   * @param {Object} options
   * @param {string} options.lexerFile
   * @param {string} options.parserFile
   * @param {boolean=} options.debug
   */
  constructor(options) {
    /** @protected */
    this.options = options;
  }

  /**
   * @protected
   * @param {string} name
   * @returns {string}
   */
  _lexerStateFile(name) {
    const dir = dirname(this.options.lexerFile);
    const ext = extname(this.options.lexerFile);
    const base = basename(this.options.lexerFile, ext);
    return join(dir, `${base}-${name}${ext}`);
  }

  /**
   * @public
   * @param {LexerData} data
   * @param {string} name
   * @returns {Promise<void>}
   */
  async lexer(data, name) {
    const code = this._lexerCode(data);

    const lexerFile = this._lexerStateFile(name);

    await fsp.mkdir(dirname(lexerFile), { recursive: true });
    await fsp.writeFile(lexerFile, code);
  }

  /**
   * @private
   * @param {LexerData} data
   * @returns {string}
   */
  _lexerCode(data) {
    const {
      tokens: { EOF, ERROR },
      tokenIds,
      tokenNames,
      errorState,
      transitions,
      start,
      finals,
    } = data;

    const columns = 256;

    let isOptimizable = finals.every((final) => final % columns === 0);
    for (let i = 1; i < finals.length && isOptimizable; i++) {
      isOptimizable = finals[i] / columns - finals[i - 1] / columns === 1;
    }

    const code = `${this._lexerPreCode()}

      const EOF = "${EOF}";
      const ERROR = "${ERROR}";

      const tokenNames = ${JSON.stringify(tokenNames)};
      const tokenIds = [
        ${tokenIds.map((id, i) => `${id}, // ${tokenNames[i]}`).join("\n")}
      ];

      const table = new Uint16Array(${columns * tokenIds.length});
      table.fill(${errorState ?? -1});
      ${transitions
        .flatMap(([from, transition]) =>
          transition.map(([symbol, to]) => {
            if (to === errorState) {
              return undefined;
            }
            return `table[${from + symbol}] = ${to}; // ${
              tokenNames[to / columns]
            }`;
          })
        )
        .filter(Boolean)
        .join("\n")}

      const visited = new Uint16Array(1024);

      const next = (input, offset) => {
        // ${start / columns}
        let state = ${start};
        visited[0] = ${start};

        // try to find match
        let i = offset;
        let j = 0;
        let l = input.length;
        while (state !== ${errorState} && i < l) {
          state = table[state + input[i]];
          i++;
          j++;
          visited[j] = state;
        }

        // track back to last matched final state
        let success = false;
        let n = j;
        while (!success && n > 0) {
          ${(() => {
            return isOptimizable
              ? `success = visited[n] <= ${
                  finals[finals.length - 1]
                } && visited[n] % ${columns} === 0;`
              : `success = ${finals
                  .map((final) => `${final} === visited[n]`)
                  .join(" || ")};`;
          })()}
          n--;
        }
        n = n + 1;

        if (success) {
          return {
            state: tokenIds[(visited[n] / ${columns}) + 2],
            start: offset,
            end: offset + n,
          };
        }
        return {
          state: i === l ? ${tokenIds[tokenNames.indexOf(EOF)]} : ${
      tokenIds[tokenNames.indexOf(ERROR)]
    },
          start: -1,
          end: -1,
        };
      };

      ${this._lexerExport()}
    `;

    const formattedCode = prettier.format(code, {
      filepath: this.options.lexerFile,
    });

    return formattedCode;
  }

  /**
   * @protected
   * @returns {string}
   */
  _lexerPreCode() {
    return "";
  }

  /**
   * @protected
   * @returns {string}
   */
  _lexerExport() {
    throw new Error(
      `${Object.getPrototypeOf(this).constructor.name}#${
        this._lexerExport.name
      }() unimplemented`
    );
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

    const code = this._parserCode(data);

    await fsp.mkdir(dirname(this.options.parserFile), { recursive: true });
    await fsp.writeFile(this.options.parserFile, code);
  }

  /**
   * @private
   * @param {ParserData} data
   * @returns {string}
   */
  _parserCode(data) {
    const {
      lexerData,
      rules,
      states,
      parserSymbols,
      parserSymbolIds,
      grammarRuleNames,
      actions,
      goto,
      start,
    } = data;

    let actionIndex = 0;
    let actionsTableIndex = 0;

    const debug = this._debug.bind(this);

    const actionOps = ["shift", "reduce", "done"];
    let requiresSemanticActions = false;

    const code = `
      ${this._parserImports(lexerData)}

      /*
      ${rules
        .map((rule) => `${rule.name} := ${rule.symbols.join(" ")};`)
        .join("\n")}
      */

      const states = [
        ${states
          .map(
            (state, i) =>
              `
              // 'state ${i}'
              new Set([${Array.from(state.values())
                .map(
                  (item) => `{
                  name: '${item.name}',
                  tokens: ${JSON.stringify(item.tokens)},
                  marker: ${item.marker},
                  lookahead: ${parserSymbols.indexOf(item.lookahead)}, // ${
                    item.lookahead
                  }
                  semanticAction: ${
                    item.semanticAction
                      ? ((requiresSemanticActions = true),
                        `(stack, sp) => { ${item.semanticAction}; }`)
                      : "undefined"
                  }
                }`
                )
                .join(",\n")}])`
          )
          .join(",\n")}
      ];

      const parserSymbols = [
        ${parserSymbols
          .map((symbol, i) => {
            return `"${symbol}", // ${parserSymbolIds[i]}`;
          })
          .join("\n")}
      ];
      const grammarRuleNames = ${JSON.stringify(grammarRuleNames)};

      const actions = [
        ${Array.from(actions.entries())
          .flatMap(([, action]) => {
            return Array.from(action.entries()).map(([, to]) => {
              return `// 'action ${actionIndex++}'
              {
                op: ${actionOps.indexOf(to.op)}, // ${to.op}
                state: ${
                  to.state
                    ? `${states.indexOf(to.state)}, // 'state ${states.indexOf(
                        to.state
                      )}'`
                    : "undefined,"
                }
                symbol: ${
                  to.symbol
                    ? `${grammarRuleNames.indexOf(to.symbol)}, // ${to.symbol}`
                    : "undefined,"
                }
              }`;
            });
          })
          .join(",\n")}
      ];
      const actionsTable = new Uint16Array(${
        states.length * parserSymbolIds.length
      }).fill(0xffff);
      ${Array.from(actions.entries())
        .flatMap(([from, action]) => {
          return Array.from(action.entries()).map(([symbol, to]) => {
            const action = actionsTableIndex++;
            return `actionsTable[${
              states.indexOf(from) * parserSymbolIds.length +
              parserSymbols.indexOf(symbol)
            }] = ${action}; // 'state ${states.indexOf(
              from
            )}' -> ${symbol} -> ${to.op} -> 'action ${action}'`;
          });
        })
        .join("\n")}

      const gotoTable = new Uint16Array(${
        states.length * grammarRuleNames.length
      }).fill(0xffff);
      ${Array.from(goto.entries())
        .flatMap(([from, target]) => {
          return Array.from(target.entries()).map(([symbol, to]) => {
            return `gotoTable[${
              states.indexOf(from) * grammarRuleNames.length +
              grammarRuleNames.indexOf(symbol)
            }] = ${states.indexOf(to)}; // 'state ${states.indexOf(to)}'`;
          });
        })
        .join("\n")}

      const nextTokens = {
        ${Object.keys(lexerData)
          .map(
            (name) =>
              `${name}: nextToken${name[0].toUpperCase() + name.substr(1)},`
          )
          .join("\n")}
      };

      const lexer = {
        _stack: [],
        push(name) {
          nextToken = nextTokens[name];
          lexer._stack.push(nextToken);
        },
        pop() {
          lexer._stack.pop();
          nextToken = lexer._stack[lexer._stack.length - 1];
        }
      };
      let nextToken;

      function parse(input) {
        ${debug(
          () => `
          console.log('--- parse input');
          console.log(input.toString().substr(0, Math.min(input.length, 20)).replace(/\\n/g, '\\\\n') + (Math.min(input.length, 20) < input.length ? '...' : ''));
          console.log('---');
          `
        )}
        lexer.push('initial');

        const stream = Buffer.from(input);
        let offset = 0;

        let result = nextToken(stream, offset);
        let { state: lookahead, start, end } = result;
        offset = end;
        ${debug(
          () => `
          console.log('  lookahead', lookahead, parserSymbols[lookahead], '(' + start + ',' + end + ')');
          console.log("    '" + input.toString().substring(Math.max(0, start - 10), Math.min(start + 10, input.length)) + "'");
          if (start !== -1) {
            console.log("     " + Array(start - Math.max(0, start - 10)).fill(' ').join('') + "^");
          }
          `
        )}

        const stack = new Array(10);
        stack[0] = {
          state: ${states.indexOf(start)},
          tree: undefined,
        };
        let sp = 0;

        ${debug(() => `let steps = 0;`)}
        while (true) {
          ${debug(() => `steps++;`)}
          const currentState = stack[sp].state;

          const actionLookup = actionsTable[currentState * ${
            parserSymbolIds.length
          } + lookahead];
          if (actionLookup === 0xffff) {
            throw new Error(\`Unexpected lookahead \${parserSymbols[lookahead]}\`);
          }
          const action = actions[actionLookup];

          switch (action.op) {
            case ${actionOps.indexOf("done")}: // done
              ${debug(() => `console.log('steps', steps);`)}
              lexer.pop();
              return stack[sp].tree;
            case ${actionOps.indexOf("shift")}: // shift
              ${debug(
                () =>
                  `console.log('action: shift', lookahead, parserSymbols[lookahead]);`
              )}
              const stackItem = {
                state: action.state,
                tree: { name: parserSymbols[lookahead], start, end, items: undefined },
              };
              ${
                requiresSemanticActions
                  ? `
                  for (const item of states[currentState].values()) {
                    if (item.tokens[item.marker] === parserSymbols[lookahead]) {
                      item.semanticAction?.(stack, sp);
                    }
                  }
                  `
                  : ""
              }

              result = nextToken(stream, offset);
              lookahead = result.state;
              start = result.start;
              offset = end = result.end;
              ${debug(
                () => `
                console.log('  lookahead', lookahead, parserSymbols[lookahead], '(' + start + ',' + end + ')');
                console.log("    '" + input.toString().substring(Math.max(0, start - 10), Math.min(start + 10, input.length)) + "'");
                if (start !== -1) {
                  console.log("     " + Array(start - Math.max(0, start - 10)).fill(' ').join('') + "^");
                }
                `
              )}

              stack[++sp] = stackItem;

              ${debug(
                () => `
                console.log('  next state', stack[sp].state);
                console.log('');
                `
              )}
              break;
            case ${actionOps.indexOf("reduce")}: // reduce
              ${debug(
                () =>
                  `console.log('action: reduce', action.symbol, grammarRuleNames[action.symbol]);`
              )}
              ${debug(
                () => `
                console.log('  lookahead', lookahead, parserSymbols[lookahead], '(' + start + ',' + end + ')');
                console.log("    '" + input.toString().substring(Math.max(0, start - 10), Math.min(start + 10, input.length)) + "'");
                if (start !== -1) {
                  console.log("     " + Array(start - Math.max(0, start - 10)).fill(' ').join('') + "^");
                }
                `
              )}
              let item;
              const actionSymbol = grammarRuleNames[action.symbol];
              for (const value of states[currentState].values()) {
                if (value.name === actionSymbol && value.lookahead === lookahead) {
                  item = value;
                  break;
                }
              }
              if (!item) {
                throw new Error(
                  \`No valid state \${actionSymbol}(\${lookahead}) found\`
                );
              }
              ${
                requiresSemanticActions
                  ? "item.semanticAction?.(stack, sp);"
                  : ""
              }

              const items = new Array(item.tokens.length);
              for (let i = 0; i < item.tokens.length; i++) {
                items[i] = stack[i + sp + 1 - item.tokens.length].tree;
              }
              sp -= item.tokens.length;

              const tree = {
                name: actionSymbol,
                start: -1,
                end: -1,
                items,
              };

              const nextState = gotoTable[stack[sp].state * ${
                grammarRuleNames.length
              } + action.symbol]
              stack[++sp] = {
                state: nextState,
                tree,
              };

              ${debug(
                () => `
                console.log('  next state', stack[sp].state);
                console.log('');
                `
              )}
              break;
            default:
              throw new Error("Parser Error");
          }
        }
      }

      ${this._parserExports()}
    `;

    const formattedCode = prettier.format(code, {
      filepath: this.options.parserFile,
    });

    return formattedCode;
  }

  /**
   * @protected
   * @param {Lexers} _lexers
   * @returns {string}
   */
  _parserImports(_lexers) {
    throw new Error(
      `${Object.getPrototypeOf(this).constructor.name}#${
        this._parserImports.name
      }() unimplemented`
    );
  }

  /**
   * @protected
   * @returns {string}
   */
  _parserExports() {
    throw new Error(
      `${Object.getPrototypeOf(this).constructor.name}#${
        this._parserExports.name
      }() unimplemented`
    );
  }

  /**
   * @param {() => string} fn
   * @returns {string}
   */
  _debug(fn) {
    if (this.options.debug) {
      return fn();
    }
    return "";
  }
}
