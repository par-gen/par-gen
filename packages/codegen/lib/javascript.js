import { promises as fsp } from "fs";
import { dirname } from "path";
import prettier from "prettier";

/**
 * @typedef {import('@knisterpeter/expound-lexer/types/lexer').LexerData} LexerData
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
   * @public
   * @param {LexerData} data
   * @returns {Promise<void>}
   */
  async lexer(data) {
    const code = this._lexerCode(data);

    await fsp.mkdir(dirname(this.options.lexerFile), { recursive: true });
    await fsp.writeFile(this.options.lexerFile, code);
  }

  /**
   * @private
   * @param {LexerData} data
   * @returns {string}
   */
  _lexerCode(data) {
    const {
      tokens: { EOF, ERROR },
      stateNames,
      errorState,
      transitions,
      start,
      finals,
    } = data;

    const columns = 256;

    const code = `${this._lexerPreCode()}

      const EOF = "${EOF}";
      const ERROR = "${ERROR}";

      const states = ${JSON.stringify(stateNames)};

      const table = new Uint16Array(${columns * stateNames.length});
      table.fill(${errorState ?? -1});
      ${transitions
        .flatMap(([from, transition]) =>
          transition.map(([symbol, to]) => `table[${from + symbol}] = ${to};`)
        )
        .join("\n")}

      const finals = ${JSON.stringify(finals)};

      const visited = new Uint16Array(1024);

      const next = (input, offset) => {
        // ${start / columns}
        let state = ${start};
        visited[0] = ${start};

        // try to find match
        let i = offset;
        let j = 0;
        let l = input.length;
        while (i < l) {
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
            let isOptimizable = finals.every((final) => final % columns === 0);
            for (let i = 1; i < finals.length && isOptimizable; i++) {
              isOptimizable =
                finals[i] / columns - finals[i - 1] / columns === 1;
            }

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
            state: states[visited[n] / ${columns}],
            start: offset,
            end: offset + n,
          };
        }
        return {
          state: i === input.length ? EOF : ERROR,
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
    await this.lexer(data.lexerData);

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
      rules,
      states,
      terminals,
      nonTerminals,
      actions,
      goto,
      start,
    } = data;

    let actionsIndex = 0;

    const debug = this._debug.bind(this);

    const code = `
      ${this._parserImports()}

      /*
      ${rules
        .map((rule) => `${rule.name} := ${rule.symbols.join(" ")};`)
        .join("\n")}
      */

      function printState(state) {
        return Array.from(state.values())
          .map((item) => printItem(item))
          .join("\\n");
      }

      function printItem(item) {
        const head = [...(item.tokens ?? [])].slice(0, item.marker ?? 0);
        const tail = [...(item.tokens ?? [])].slice(item.marker ?? 0);

        return \`\${item.name} -> \${[...head, "•", ...tail].join(" ")}, \${
          item.lookahead
        }\`;
      }

      const states = [
        ${states
          .map(
            (state, i) =>
              `
              // state ${i}
              new Set([${Array.from(state.values())
                .map((item) => JSON.stringify(item))
                .join(",\n")}])`
          )
          .join(",\n")}
      ];

      const terminals = ${JSON.stringify(terminals)};
      const nonTerminals = ${JSON.stringify(nonTerminals)};

      const startState = states[${states.indexOf(start)}];

      const actions = [
        ${Array.from(actions.entries())
          .flatMap(([, action]) => {
            return Array.from(action.entries()).map(([, to]) => {
              return `{
                op: "${to.op}",
                state: ${
                  to.state ? `${states.indexOf(to.state)}` : "undefined"
                },
                symbol: ${to.symbol ? `"${to.symbol}"` : "undefined"},
              }`;
            });
          })
          .join(",\n")}
      ];
      const actionsTable = new Uint16Array(${
        states.length * terminals.length
      }).fill(-1);
      ${Array.from(actions.entries())
        .flatMap(([from, action]) => {
          return Array.from(action.entries()).map(([symbol, to]) => {
            return `// actionTable ${states.indexOf(from)} -> ${symbol} -> ${
              to.op
            }
            actionsTable[${
              states.indexOf(from) * terminals.length +
              terminals.indexOf(symbol)
            }] = ${actionsIndex++};`;
          });
        })
        .join("\n")}

      const gotoTable = new Uint16Array(${
        states.length * nonTerminals.length
      }).fill(-1);
      ${Array.from(goto.entries())
        .flatMap(([from, target]) => {
          return Array.from(target.entries()).map(([symbol, to]) => {
            return `gotoTable[${
              states.indexOf(from) * nonTerminals.length +
              nonTerminals.indexOf(symbol)
            }] = ${states.indexOf(to)};`;
          });
        })
        .join("\n")}

      function parse(input) {
        ${debug(
          () => `
          console.log('--- parse input');
          console.log(input.substr(0, Math.min(input.length, 20)).replace(/\\n/g, '\\\\n') + (Math.min(input.length, 20) < input.length ? '...' : ''));
          console.log('---');
          `
        )}
        const stream = Uint8Array.from(Buffer.from(input));
        let offset = 0;

        let result = nextToken(stream, offset);
        let { state: lookahead, start, end } = result;
        offset = end;
        let lookaheadIndex = terminals.indexOf(lookahead);
        ${debug(
          () => `
          console.log('  lookahead', lookahead, '(' + start + ',' + end + ')');
          console.log("    '" + input.substring(Math.max(0, start - 10), Math.min(start + 10, input.length)) + "'");
          if (start !== -1) {
            console.log("     " + Array(start - Math.max(0, start - 10)).fill(' ').join('') + "^");
          }
          `
        )}

        const stack = new Array(10);
        stack[0] = {
          state: states.indexOf(startState),
          tree: undefined,
        };
        let sp = 0;

        while (true) {
          const currentState = stack[sp].state;

          const actionLookup = actionsTable[currentState * ${
            terminals.length
          } + lookaheadIndex];
          const action = actions[actionLookup];

          switch (action.op) {
            case "done":
              return stack[sp].tree;
            case "shift":
              ${debug(() => `console.log('action: shift', lookahead);`)}
              const stackItem = {
                state: action.state,
                tree: { name: lookahead, start, end, items: undefined },
              };

              result = nextToken(stream, offset);
              lookahead = result.state;
              lookaheadIndex = terminals.indexOf(lookahead);
              start = result.start;
              offset = end = result.end;
              ${debug(
                () => `
                console.log('  lookahead', lookahead, '(' + start + ',' + end + ')');
                console.log("    '" + input.substring(Math.max(0, start - 10), Math.min(start + 10, input.length)) + "'");
                if (start !== -1) {
                  console.log("     " + Array(start - Math.max(0, start - 10)).fill(' ').join('') + "^");
                }
                `
              )}

              stack[++sp] = stackItem;

              ${debug(
                () => `
                console.log('  next state', stack[sp].state);
                console.log();
                `
              )}
              break;
            case "reduce":
              ${debug(() => `console.log('action: reduce', action.symbol);`)}
              ${debug(
                () => `
                console.log('  lookahead', lookahead, '(' + start + ',' + end + ')');
                console.log("    '" + input.substring(Math.max(0, start - 10), Math.min(start + 10, input.length)) + "'");
                if (start !== -1) {
                  console.log("     " + Array(start - Math.max(0, start - 10)).fill(' ').join('') + "^");
                }
                `
              )}
              let item;
              for (const value of states[currentState].values()) {
                if (value.name === action.symbol && value.lookahead === lookahead) {
                  item = value;
                  break;
                }
              }
              if (!item) {
                throw new Error(
                  \`No valid state \${action.symbol}(\${lookahead}) found\`
                );
              }

              const items = new Array(item.tokens.length);
              for (let i = 0; i < item.tokens.length; i++) {
                items[i] = stack[i + sp + 1 - item.tokens.length].tree;
              }
              sp -= item.tokens.length;

              const tree = {
                name: action.symbol,
                start: -1,
                end: -1,
                items,
              };

              const nextState = gotoTable[stack[sp].state * ${
                nonTerminals.length
              } + nonTerminals.indexOf(action.symbol)]
              if (nextState === -1) {
                throw new Error(
                  \`Unable to lookup goto state (\${action.symbol}) for\\n\${printState(states[stack[sp].state])}\`
                );
              }
              stack[++sp] = {
                state: nextState,
                tree,
              };

              ${debug(
                () => `
                console.log('  next state', stack[sp].state);
                console.log();
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
   * @returns {string}
   */
  _parserImports() {
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