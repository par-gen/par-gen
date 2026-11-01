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

    const pointerSize = transitions
      .flatMap(([from, transition]) => [
        from,
        ...transition.flatMap(([, to]) => to),
      ])
      .every((state) => state <= 0xffff)
      ? "Uint16Array"
      : "Uint32Array";

    const tokenIdSize = tokenIds.every((id) => id === undefined || id <= 0xff)
      ? "Uint8Array"
      : "Uint16Array";

    /**
     * @param {number} s
     * @returns {number}
     */
    const remapState = (s) => {
      if (s === errorState) {
        return 0;
      }
      return s < errorState ? s + columns : s;
    };

    const errorIndex = errorState / columns;
    const remappedTokenIds = [
      tokenIds[errorIndex],
      ...tokenIds.slice(0, errorIndex),
      ...tokenIds.slice(errorIndex + 1),
    ];
    const remappedTokenNames = [
      tokenNames[errorIndex],
      ...tokenNames.slice(0, errorIndex),
      ...tokenNames.slice(errorIndex + 1),
    ];
    const remappedStart = remapState(start);
    const remappedLastFinal = remapState(finals[finals.length - 1]);

    const code = `${this._lexerPreCode()}
      // @ts-nocheck

      const EOF = "${EOF}";
      const ERROR = "${ERROR}";

      const tokenIds = new ${tokenIdSize}([
        ${remappedTokenIds
          .map((id, i) => `${id ?? 0}, // ${remappedTokenNames[i]}`)
          .join("\n")}
      ]);

      const table = new ${pointerSize}(${columns * remappedTokenIds.length});
      ${transitions
        .flatMap(([from, transition]) =>
          transition.map(([symbol, to]) => {
            if (to === errorState) {
              return undefined;
            }
            const mappedFrom = remapState(from);
            const mappedTo = remapState(to);
            return `table[${mappedFrom + symbol}] = ${mappedTo}; // ${
              remappedTokenNames[mappedTo / columns]
            }`;
          })
        )
        .filter(Boolean)
        .join("\n")}

      /**
       * @param {Uint8Array} input
       * @param {number} offset
       * @returns {{ state: number, start: number, end: number }}
       */
      const next = (input, offset) => {
        // ${remappedStart / columns}
        let state = ${remappedStart};
        let successState = 0;
        let successPos = 0;

        // try to find match
        let i = offset & 0x7fffffff;
        const l = input.length;
        while (i < l) {
          state = table[state + input[i++]];
          if (state <= ${remappedLastFinal}) {
            if (state === 0) {
              break;
            }
            successState = state;
            successPos = i;
          }
        }

        if (successState !== 0) {
          state = tokenIds[successState >> 8];
        } else {
          state = i === l ? ${tokenIds[tokenNames.indexOf(EOF)]} : ${
      tokenIds[tokenNames.indexOf(ERROR)]
    };
          offset = -1;
          successPos = -1;
        }
        return {
          state,
          start: offset,
          end: successPos,
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
      actions,
      goto,
      start,
    } = data;

    let actionsTableIndex = 0;

    const debug = this._debug.bind(this);

    const actionOps = ["shift", "reduce", "done"];
    const requiresSemanticActions = states.some((state) =>
      Array.from(state.values()).some((item) => item.semanticAction)
    );
    const lexerModes = Object.keys(lexerData);
    const hasSingleLexerMode = lexerModes.length === 1;

    const code = `// @ts-nocheck
      ${this._parserImports(lexerData)}

      /*
      ${rules
        .map((rule) => `${rule.name} := ${rule.symbols.join(" ")};`)
        .join("\n")}
      */

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

      const actionsTable = new Uint16Array(${
        states.length * parserSymbols.length
      }).fill(0xffff);
      ${Array.from(actions.entries())
        .flatMap(([from, action]) => {
          const stateIndex = states.indexOf(from);
          const items = Array.from(from.values());
          return Array.from(action.entries()).map(([symbol, to]) => {
            const lookaheadIndex = parserSymbols.indexOf(symbol);
            const opIndex = actionOps.indexOf(to.op);
            let target = 0;
            let reduceLen = 0;
            if (to.op === "shift" && to.state) {
              target = states.indexOf(to.state);
            } else if (to.op === "reduce" && to.symbol) {
              target = parserSymbols.indexOf(to.symbol);
              const matchedItem = items.find(
                (item) =>
                  item.name === to.symbol &&
                  item.marker === item.tokens.length &&
                  item.lookahead === symbol
              );
              reduceLen = matchedItem ? matchedItem.tokens.length : 0;
            }
            const packedAction = (reduceLen << 10) | (target << 2) | opIndex;
            const actionIdx = actionsTableIndex++;
            return `actionsTable[${
              stateIndex * parserSymbols.length + lookaheadIndex
            }] = ${packedAction}; // 'state ${stateIndex}' -> ${symbol} -> ${
              to.op
            } (target=${target}, len=${reduceLen}) -> 'action ${actionIdx}'`;
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

      ${
        hasSingleLexerMode
          ? `const nextToken = nextToken${
              lexerModes[0][0].toUpperCase() + lexerModes[0].substr(1)
            };`
          : `const nextTokens = {
        ${lexerModes
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
      let nextToken;`
      }

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

      const proxyHandler = {
        get(target, prop, receiver) {
          const { stream, tree, pointer } = target;
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
            case "items": {
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
            }
            case "__tree":
              return tree;
            case "__pointer":
              return pointer;
          }
        },
        ownKeys() {
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
      };

      const createProxy = (stream, tree, pointer) =>
        new Proxy({ stream, tree, pointer }, proxyHandler);

      /**
       * @typedef {Object} Node
       * @property {string} name
       * @property {number} start
       * @property {number} end
       * @property {Uint8Array} value
       * @property {Node[]} items
       */

      /**
       * @param {Uint8Array | string} input
       * @returns {Node}
       */
      function parse(input) {
        ${debug(
          () => `
          console.log('--- parse input');
          console.log(input.toString().substr(0, Math.min(input.length, 20)).replace(/\\n/g, '\\\\n') + (Math.min(input.length, 20) < input.length ? '...' : ''));
          console.log('---');
          `
        )}
        ${hasSingleLexerMode ? "" : "lexer.push('initial');"}

        const stream = typeof input === "string" ? Buffer.from(input) : input;

        let result = nextToken(stream, 0);
        let lookahead = result.state;
        let lookaheadStart = result.start;
        let lookaheadEnd = result.end;

        ${debug(
          () => `
          console.log('  lookahead', lookahead, parserSymbols[lookahead], '(' + lookaheadStart + ',' + lookaheadEnd + ')');
          console.log("    '" + input.toString().substring(Math.max(0, lookaheadStart - 10), Math.min(lookaheadStart + 10, input.length)) + "'");
          if (lookaheadStart !== -1) {
            console.log("     " + Array(lookaheadStart - Math.max(0, lookaheadStart - 10)).fill(' ').join('') + "^");
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
            const context = input.toString().substr(lookaheadStart, 10);
            throw new Error(\`Unexpected lookahead \${parserSymbols[lookahead]} at '\${context}'\`);
          }

          switch (actionLookup & 3) {
            case ${actionOps.indexOf("done")}: // done
              ${debug(() => `console.log('steps', steps);`)}
              ${hasSingleLexerMode ? "" : "lexer.pop(true);"}
              return createProxy(stream, tree, tp - 6);
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
              tree[tp + 1] = lookaheadStart;
              tree[tp + 2] = lookaheadEnd;
              tree[tp + 3] = 0; // leaf nodes have no children
              tree[stack[sp -  1] + 5] = tp; // write the current address to the previous item as next sibling

              // shift current address on top of "address stack"
              stack[sp + 1] = tp;

              sp += 2;
              stack[sp] = actionLookup >> 2;

              result = nextToken(stream, lookaheadEnd);
              lookahead = result.state;
              lookaheadStart = result.start;
              lookaheadEnd = result.end;
              ${debug(
                () => `
                console.log('  lookahead', lookahead, parserSymbols[lookahead], '(' + lookaheadStart + ',' + lookaheadEnd + ')');
                console.log("    '" + input.toString().substring(Math.max(0, lookaheadStart - 10), Math.min(lookaheadStart + 10, input.length)) + "'");
                if (lookaheadStart !== -1) {
                  console.log("     " + Array(lookaheadStart - Math.max(0, lookaheadStart - 10)).fill(' ').join('') + "^");
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
              const actionSymbol = (actionLookup >> 2) & 0xff;
              const stackItemsToReduce = actionLookup >> 10;

              ${debug(
                () =>
                  `console.log('action: reduce', actionSymbol,
                    parserSymbols[actionSymbol],
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
                  ? "semanticReducerActions[currentState]?.[actionSymbol][lookahead](stack, sp);"
                  : ""
              }

              // multiply by two because our stack contains adresses and states interleaved
              sp -= stackItemsToReduce * 2;

              tree[tp] = actionSymbol; // name
              tree[tp + 3] = stackItemsToReduce; // number of children
              tree[tp + 4] = stack[sp + 1]; // first child
              tree[stack[sp - 1] + 5] = tp; // next sibling

              stack[sp + 1] = tp;

              const nextState = gotoTable[stack[sp] * ${
                parserSymbols.length
              } + actionSymbol];
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
