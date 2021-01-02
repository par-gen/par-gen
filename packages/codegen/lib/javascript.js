import { promises as fsp } from "fs";
import { join, dirname, basename, extname } from "path";
import prettier from "prettier";

/**
 * @typedef {import('@par-gen/lexer/types/lexer').LexerData} LexerData
 */

/**
 * @typedef {import('@par-gen/parser/types/parser').Lexers} Lexers
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

    const pointerSize = transitions
      .flatMap(([from, transition]) => [
        from,
        ...transition.flatMap(([, to]) => to),
      ])
      .every((state) => state <= 0xffff)
      ? "Uint16Array"
      : "Uint32Array";

    const code = `${this._lexerPreCode()}
      // @ts-nocheck

      const EOF = "${EOF}";
      const ERROR = "${ERROR}";

      const tokenIds = [
        ${tokenIds.map((id, i) => `${id}, // ${tokenNames[i]}`).join("\n")}
      ];

      const table = new ${pointerSize}(${columns * tokenIds.length});
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

      const visited = new ${pointerSize}(1024);

      // the currently matched lexeme
      const lexeme = {
        state: -1,
        start: -1,
        end: -1,
      };

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
              ? `success = visited[n] <= ${finals[finals.length - 1]};`
              : `success = ${finals
                  .map((final) => `${final} === visited[n]`)
                  .join(" || ")};`;
          })()}
          n--;
        }
        n = n + 1;

        if (success) {
          lexeme.state = tokenIds[(visited[n] / ${columns})];
          lexeme.start = offset;
          lexeme.end = offset + n;
          return lexeme;
        }
        lexeme.state = i === l ? ${tokenIds[tokenNames.indexOf(EOF)]} : ${
      tokenIds[tokenNames.indexOf(ERROR)]
    };
        lexeme.start = -1;
        lexeme.end = -1;
        return lexeme;
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
      actions,
      goto,
      start,
    } = data;

    let actionIndex = 0;
    let actionsTableIndex = 0;

    const debug = this._debug.bind(this);

    const actionOps = ["shift", "reduce", "done"];
    const requiresSemanticActions = states.some((state) =>
      Array.from(state.values()).some((item) => item.semanticAction)
    );

    const code = `// @ts-nocheck
      ${this._parserImports(lexerData)}

      /*
      ${rules
        .map((rule) => `${rule.name} := ${rule.symbols.join(" ")};`)
        .join("\n")}
      */

      const reducerStates = new Uint8Array(${
        states.length * parserSymbols.length * parserSymbols.length
      });
      ${states
        .reduce((table, state, stateIndex) => {
          const items = Array.from(state.values());

          parserSymbols.forEach((symbol, symbolIndex) => {
            const matchedItems = items.filter(
              (item) =>
                item.name === symbol && item.marker === item.tokens.length
            );

            parserSymbols.forEach((lookahead, lookaheadIndex) => {
              const item = matchedItems.find(
                (item) => item.lookahead === lookahead
              );

              if (!item) {
                return;
              }

              table.push(
                `reducerStates[${
                  lookaheadIndex * states.length * parserSymbols.length +
                  stateIndex * parserSymbols.length +
                  symbolIndex
                }] = ${
                  item.tokens.length
                }; // 'state ${stateIndex}' -> ${symbol} -> ${lookahead}`
              );
            });
          });
          return table;
        }, /** @type {string[]} */ ([]))
        .join("\n")}

      ${
        requiresSemanticActions
          ? `const semanticReducerActions = [
          ${states
            .map((state) => {
              const items = Array.from(state.values());
              const hasSemanticActions = items.some((item) =>
                Boolean(
                  item.semanticAction && item.marker === item.tokens.length
                )
              );
              if (hasSemanticActions) {
                throw new Error("Semantic reducer actions are not implemented");
              }
              return `undefined,`;
            })
            .join("\n")}
          ];
          `
          : ""
      }

      ${
        requiresSemanticActions
          ? `
          const states = [
            ${states
              .map(
                (state, i) =>
                  `
                  // 'state ${i}'
                  new Set([${Array.from(state.values())
                    .map(
                      (item) => `{
                      name: ${parserSymbols.indexOf(item.name)}, // ${item.name}
                      tokens: ${JSON.stringify(item.tokens)},
                      marker: ${item.marker},
                      lookahead: ${parserSymbols.indexOf(item.lookahead)}, // ${
                        item.lookahead
                      }
                      semanticAction: ${
                        item.semanticAction
                          ? `(stack, sp) => { ${item.semanticAction}; }`
                          : "undefined"
                      }
                    }`
                    )
                    .join(",\n")}])`
              )
              .join(",\n")}
          ];
          `
          : ""
      }

      const parserSymbols = [
        ${parserSymbols
          .map((symbol, i) => {
            return `"${symbol}", // ${i}`;
          })
          .join("\n")}
      ];

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
                    ? `${parserSymbols.indexOf(to.symbol)}, // ${to.symbol}`
                    : "undefined,"
                }
              }`;
            });
          })
          .join(",\n")}
      ];
      const actionsTable = new Uint16Array(${
        states.length * parserSymbols.length
      }).fill(0xffff);
      ${Array.from(actions.entries())
        .flatMap(([from, action]) => {
          return Array.from(action.entries()).map(([symbol, to]) => {
            const action = actionsTableIndex++;
            return `actionsTable[${
              states.indexOf(from) * parserSymbols.length +
              parserSymbols.indexOf(symbol)
            }] = ${action}; // 'state ${states.indexOf(
              from
            )}' -> ${symbol} -> ${to.op} -> 'action ${action}'`;
          });
        })
        .join("\n")}

      const gotoTable = new Uint16Array(${
        states.length * parserSymbols.length
      }).fill(0xffff);
      ${Array.from(goto.entries())
        .flatMap(([from, target]) => {
          return Array.from(target.entries()).map(([symbol, to]) => {
            return `gotoTable[${
              states.indexOf(from) * parserSymbols.length +
              parserSymbols.indexOf(symbol)
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
        pop(done) {
          lexer._stack.pop();
          if (done) {
            return;
          } else if (lexer._stack.length === 0) {
            throw new Error("Cannot remove more lexer states than have been pushed.");
          }
          nextToken = lexer._stack[lexer._stack.length - 1];
        }
      };
      let nextToken;

      /**
       * We use the stack to store shifted/reduced states in [sp] and we also use
       * [sp + 1] to store the tree pointer references to shifted/reduced nodes.
       * This allows us to use a single typed array to store two kinds of data.
       * * [sp] always points to the current state on top of the stack and
       * * [sp + 1] always points to the tree item currently on top of the stack
       * ___________________________________
       * |_dummy_|_state_|_tp_|_state_|_tp_|...
       */
      const stack = new Uint16Array(32768);

      /**
       * This typed array contains the syntax tree from a parse.
       * A node is stored in the following layout:
       * struct Node {
       *  name: uint16,
       *  start: uint16,
       *  end: uint16,
       *  numChildren: uint16,
       *  firstChild: uint16,
       *  nextSibling: uint16,
       * }
       * This enables efficient storage of nodes with variable number of children and
       * fast DFS traversal.
       */
      const tree = new Uint16Array(32768);

      const createProxy = (tree, pointer) => {
        return new Proxy(
          {},
          {
            get(target, prop) {
              switch (prop) {
                case "name":
                  return parserSymbols[tree[pointer]];
                case "start":
                  return tree[pointer + 1] === 0xffff ? -1 : tree[pointer + 1];
                case "end":
                  return tree[pointer + 2] === 0xffff ? -1 : tree[pointer + 2];
                case "items":
                  const nChildren = tree[pointer + 3];

                  if (nChildren === 0) {
                    return undefined;
                  }

                  const firstChild = tree[pointer + 4];
                  const children = [createProxy(tree, firstChild)];
                  let nextChild = tree[firstChild + 5];

                  for (let i = 1; i < nChildren; i++) {
                    children.push(createProxy(tree, nextChild));
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
              return ["name", "start", "end", "items"];
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
        ${debug(
          () => `
          console.log('--- parse input');
          console.log(input.toString().substr(0, Math.min(input.length, 20)).replace(/\\n/g, '\\\\n') + (Math.min(input.length, 20) < input.length ? '...' : ''));
          console.log('---');
          `
        )}
        lexer.push('initial');

        const stream = Buffer.isBuffer(input) ? input : Buffer.from(input);

        let result = nextToken(stream, 0);
        let lookahead = result.state;

        ${debug(
          () => `
          console.log('  lookahead', lookahead, parserSymbols[lookahead], '(' + result.start + ',' + result.end + ')');
          console.log("    '" + input.toString().substring(Math.max(0, result.start - 10), Math.min(result.start + 10, input.length)) + "'");
          if (result.start !== -1) {
            console.log("     " + Array(result.start - Math.max(0, result.start - 10)).fill(' ').join('') + "^");
          }
          `
        )}

        // add a dummy entry to ensure no out-of-bounds reads for [sp - 1]
        stack[0] = 0;
        stack[1] = ${states.indexOf(start)}; // starting state
        let sp = 1;
        // let the tree stack start from offset 6
        // offset 0 means an error occurred and should be used by the parser
        let tp = 6;

        ${debug(() => `let steps = 0;`)}
        while (true) {
          ${debug(() => `steps++;`)}
          const currentState = stack[sp];

          const actionLookup = actionsTable[currentState * ${
            parserSymbols.length
          } + lookahead];
          if (actionLookup === 0xffff) {
            const context = input.toString().substr(result.start, 10);
            throw new Error(\`Unexpected lookahead \${parserSymbols[lookahead]} at '\${context}'\`);
          }
          const action = actions[actionLookup];

          switch (action.op) {
            case ${actionOps.indexOf("done")}: // done
              ${debug(() => `console.log('steps', steps);`)}
              lexer.pop(true);
              return createProxy(tree, tp - 6);
            case ${actionOps.indexOf("shift")}: // shift
              ${debug(
                () =>
                  `console.log('action: shift', lookahead, parserSymbols[lookahead]);`
              )}
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

              tree[tp] = lookahead; // name
              tree[tp + 1] = result.start;
              tree[tp + 2] = result.end;
              tree[tp + 3] = 0; // leaf nodes have no children
              tree[tp + 4] = 0; // leaf nodes have first child
              tree[stack[sp -  1] + 5] = tp; // write the current address to the previous item as next sibling

              // shift current address on top of "address stack"
              stack[sp + 1] = tp;

              sp += 2;
              stack[sp] = action.state;

              result = nextToken(stream, result.end);
              lookahead = result.state;
              ${debug(
                () => `
                console.log('  lookahead', lookahead, parserSymbols[lookahead], '(' + result.start + ',' + result.end + ')');
                console.log("    '" + input.toString().substring(Math.max(0, result.start - 10), Math.min(result.start + 10, input.length)) + "'");
                if (result.start !== -1) {
                  console.log("     " + Array(result.start - Math.max(0, result.start - 10)).fill(' ').join('') + "^");
                }
                `
              )}

              ${debug(
                () => `
                console.log('  next state', stack[sp]);
                console.log('');
                `
              )}
              break;
            case ${actionOps.indexOf("reduce")}: // reduce
              let stackItemsToReduce = reducerStates[lookahead * ${
                states.length
              } * ${parserSymbols.length} +
                currentState * ${parserSymbols.length} +
                action.symbol];

              ${debug(
                () =>
                  `console.log('action: reduce', action.symbol,
                    parserSymbols[action.symbol],
                    Array.from({ length: stackItemsToReduce })
                      .map((_, i) => parserSymbols[tree[stack[sp - i * 2 - 1]]])
                      .reverse()
                  );`
              )}
              ${debug(
                () => `
                console.log('  lookahead', lookahead, parserSymbols[lookahead], '(' + result.start + ',' + result.end + ')');
                console.log("    '" + input.toString().substring(Math.max(0, result.start - 10), Math.min(result.start + 10, input.length)) + "'");
                if (result.start !== -1) {
                  console.log("     " + Array(result.start - Math.max(0, result.start - 10)).fill(' ').join('') + "^");
                }
                `
              )}
              ${
                requiresSemanticActions
                  ? "semanticReducerActions[currentState]?.[action.symbol][lookahead](stack, sp);"
                  : ""
              }

              // multiply by two because our stack contains adresses and states interleaved
              sp -= stackItemsToReduce * 2;

              tree[tp] = action.symbol; // name
              tree[tp + 1] = -1;        // start
              tree[tp + 2] = -1;        // end
              tree[tp + 3] = stackItemsToReduce; // number of children
              tree[tp + 4] = stack[sp + 1]; // first child
              tree[stack[sp - 1] + 5] = tp; // next sibling

              stack[sp + 1] = tp;

              const nextState = gotoTable[stack[sp] * ${
                parserSymbols.length
              } + action.symbol];
              sp += 2;
              stack[sp] = nextState;

              ${debug(
                () => `
                console.log('  next state', stack[sp]);
                console.log('');
                `
              )}
              break;
            default:
              throw new Error("Parser Error");
          }

          tp += 6;
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
