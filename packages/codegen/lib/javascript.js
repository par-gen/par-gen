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

    const finalSet = new Set(finals);
    /** @type {Map<number, [number, number][]>} */
    const transMap = new Map(transitions);
    const totalStates = tokenIds.length;
    /** @type {number[]} */
    const allOrigStates = [];
    for (let i = 0; i < totalStates; i++) {
      allOrigStates.push(i * columns);
    }

    const deadEndFinals = finals.filter((s) => {
      const tr = transMap.get(s) || [];
      return tr.every(([, to]) => to === errorState);
    });
    const continuableFinals = finals.filter((s) => {
      const tr = transMap.get(s) || [];
      return !tr.every(([, to]) => to === errorState);
    });
    const nonFinals = allOrigStates.filter(
      (s) => s !== errorState && !finalSet.has(s)
    );

    const compactDeadEndFinals =
      deadEndFinals.length > 0 && deadEndFinals.length < columns;

    const rowStates = compactDeadEndFinals
      ? [errorState, ...continuableFinals, ...nonFinals]
      : [errorState, ...deadEndFinals, ...continuableFinals, ...nonFinals];

    /** @type {Map<number, number>} */
    const stateRemap = new Map();
    if (compactDeadEndFinals) {
      stateRemap.set(errorState, 0);
      deadEndFinals.forEach((origState, idx) => {
        stateRemap.set(origState, idx + 1);
      });
      continuableFinals.forEach((origState, idx) => {
        stateRemap.set(origState, (idx + 1) * columns);
      });
      nonFinals.forEach((origState, idx) => {
        stateRemap.set(origState, (continuableFinals.length + 1 + idx) * columns);
      });
    } else {
      rowStates.forEach((origState, newIdx) => {
        stateRemap.set(origState, newIdx * columns);
      });
    }

    /**
     * @param {number} s
     * @returns {number}
     */
    const remapState = (s) => stateRemap.get(s) ?? 0;

    const remappedStart = remapState(start);
    const remappedLastDeadEndFinal = compactDeadEndFinals
      ? deadEndFinals.length
      : deadEndFinals.length * columns;
    const remappedLastFinal = compactDeadEndFinals
      ? continuableFinals.length > 0
        ? continuableFinals.length * columns
        : deadEndFinals.length
      : finals.length * columns;

    const paddedTokenIdsLength = compactDeadEndFinals
      ? Math.max(128, (continuableFinals.length + 1) * columns)
      : Math.max(128, rowStates.length);

    /** @type {string[]} */
    const tokenIdsAssignments = [];
    if (compactDeadEndFinals) {
      deadEndFinals.forEach((origState, idx) => {
        const origIdx = origState / columns;
        const id = tokenIds[origIdx];
        const name = tokenNames[origIdx];
        if (id !== undefined && id !== 0) {
          tokenIdsAssignments.push(`tokenIds[${idx + 1}] = ${id}; // ${name}`);
        } else {
          tokenIdsAssignments.push(`// tokenIds[${idx + 1}] = 0; // ${name}`);
        }
      });
      continuableFinals.forEach((origState, idx) => {
        const origIdx = origState / columns;
        const id = tokenIds[origIdx];
        const name = tokenNames[origIdx];
        const mappedState = (idx + 1) * columns;
        if (id !== undefined && id !== 0) {
          tokenIdsAssignments.push(
            `tokenIds[${mappedState}] = ${id}; // ${name}`
          );
        } else {
          tokenIdsAssignments.push(
            `// tokenIds[${mappedState}] = 0; // ${name}`
          );
        }
      });
    } else {
      rowStates.forEach((origState, i) => {
        const origIdx = origState / columns;
        const id = tokenIds[origIdx];
        const name = tokenNames[origIdx];
        if (id !== undefined && id !== 0) {
          tokenIdsAssignments.push(`tokenIds[${i}] = ${id}; // ${name}`);
        } else {
          tokenIdsAssignments.push(`// tokenIds[${i}] = 0; // ${name}`);
        }
      });
    }

    /** @type {Map<number, string | undefined>} */
    const mappedStateNames = new Map();
    allOrigStates.forEach((origState) => {
      mappedStateNames.set(
        remapState(origState),
        tokenNames[origState / columns]
      );
    });

    const skipBytes = data.skipBytes ?? [];
    const skipTokenNames = new Set(data.skipTokenNames ?? []);
    const skipMappedStates = finals
      .filter((origState) => {
        const name = tokenNames[origState / columns];
        return Boolean(name && skipTokenNames.has(name));
      })
      .map((origState) => remapState(origState));

    const code = `${this._lexerPreCode()}
      // @ts-nocheck

      const EOF = "${EOF}";
      const ERROR = "${ERROR}";

      ${
        skipBytes.length > 0
          ? `const skipTable = new Uint8Array(256);
      ${skipBytes.map((b) => `skipTable[${b}] = 1;`).join("\n")}`
          : ""
      }

      const tokenIds = new ${tokenIdSize}(${paddedTokenIdsLength});
      ${tokenIdsAssignments.join("\n")}

      const table = new ${pointerSize}(${columns * rowStates.length});
      ${transitions
        .flatMap(([from, transition]) => {
          if (compactDeadEndFinals && deadEndFinals.includes(from)) {
            return [];
          }
          return transition.map(([symbol, to]) => {
            if (to === errorState) {
              return undefined;
            }
            const mappedFrom = remapState(from);
            const mappedTo = remapState(to);
            return `table[${mappedFrom + symbol}] = ${mappedTo}; // ${
              mappedStateNames.get(mappedTo)
            }`;
          });
        })
        .filter(Boolean)
        .join("\n")}

      /**
       * @param {Uint8Array} input
       * @param {number} offset
       * @returns {{ state: number, start: number, end: number }}
       */
      const next = (input, offset) => {
        ${
          skipMappedStates.length > 0
            ? `let i = offset & 0x7fffffff;
        const l = input.length;
        while (true) {
          let state = ${remappedStart};
          let successState = 0;
          let successPos = 0;
          while (i < l) {
            state = table[state + input[i++]];
            if (state <= ${remappedLastFinal}) {
              ${
                deadEndFinals.length === finals.length
                  ? `if (state !== 0) {
                successState = state;
                successPos = i;
              }
              break;`
                  : deadEndFinals.length > 0
                  ? `if (state <= ${remappedLastDeadEndFinal}) {
                if (state !== 0) {
                  successState = state;
                  successPos = i;
                }
                break;
              }
              successState = state;
              successPos = i;`
                  : `if (state === 0) {
                break;
              }
              successState = state;
              successPos = i;`
              }
            }
          }
          if (successState !== 0) {
            if (${skipMappedStates
              .map((s) => `successState === ${s}`)
              .join(" || ")}) {
              offset = successPos;
              i = successPos;
              continue;
            }
            state = ${
              compactDeadEndFinals
                ? "tokenIds[successState]"
                : "tokenIds[successState >> 8]"
            };
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
        }`
            : `// ${remappedStart / columns}
        let state = ${remappedStart};
        let successState = 0;
        let successPos = 0;

        // try to find match
        let i = offset & 0x7fffffff;
        const l = input.length;
        ${
          skipBytes.length > 0
            ? `while (i < l && skipTable[input[i]] !== 0) {
          i++;
        }
        offset = i;`
            : ""
        }
        while (i < l) {
          state = table[state + input[i++]];
          if (state <= ${remappedLastFinal}) {
            ${
              deadEndFinals.length === finals.length
                ? `if (state !== 0) {
              successState = state;
              successPos = i;
            }
            break;`
                : deadEndFinals.length > 0
                ? `if (state <= ${remappedLastDeadEndFinal}) {
              if (state !== 0) {
                successState = state;
                successPos = i;
              }
              break;
            }
            successState = state;
            successPos = i;`
                : `if (state === 0) {
              break;
            }
            successState = state;
            successPos = i;`
            }
          }
        }

        if (successState !== 0) {
          state = ${
            compactDeadEndFinals
              ? "tokenIds[successState]"
              : "tokenIds[successState >> 8]"
          };
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
        };`
        }
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

    const requiresSemanticActions = states.some((state) =>
      Array.from(state.values()).some((item) => item.semanticAction)
    );
    const lexerModes = Object.keys(lexerData);
    const hasSingleLexerMode = lexerModes.length === 1;
    const canPreMultiplyState = states.length * parserSymbols.length < 32767;
    const stateMultiplier = canPreMultiplyState ? parserSymbols.length : 1;
    const ruleNamesSet = new Set(["S", ...rules.map((r) => r.name)]);
    const paddedTableSize = Math.max(64, states.length * parserSymbols.length);

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

      const actionsTable = new Uint16Array(${paddedTableSize}).fill(0xffff);
      ${Array.from(actions.entries())
        .flatMap(([from, action]) => {
          const stateIndex = states.indexOf(from);
          const items = Array.from(from.values());
          return Array.from(action.entries())
            .filter(([symbol]) => !ruleNamesSet.has(symbol))
            .map(([symbol, to]) => {
              const lookaheadIndex = parserSymbols.indexOf(symbol);
              let packedAction = 0xffff;
              let target = 0;
              let reduceLen = 0;
              if (to.op === "shift" && to.state) {
                target = states.indexOf(to.state) * stateMultiplier;
                packedAction = target << 1;
              } else if (to.op === "reduce" && to.symbol) {
                target = parserSymbols.indexOf(to.symbol);
                const matchedItem = items.find(
                  (item) =>
                    item.name === to.symbol &&
                    item.marker === item.tokens.length &&
                    item.lookahead === symbol
                );
                reduceLen = matchedItem ? matchedItem.tokens.length : 0;
                packedAction = (reduceLen << 9) | (target << 1) | 1;
              } else if (to.op === "done") {
                packedAction = 0xfffe;
              }
              const actionIdx = actionsTableIndex++;
              return `actionsTable[${
                stateIndex * parserSymbols.length + lookaheadIndex
              }] = ${packedAction}; // 'state ${stateIndex}' -> ${symbol} -> ${
                to.op
              } (target=${target}, len=${reduceLen}) -> 'action ${actionIdx}'`;
            });
        })
        .join("\n")}

      const gotoTable = new Uint32Array(${paddedTableSize});
      ${Array.from(goto.entries())
        .flatMap(([from, target]) => {
          return Array.from(target.entries()).map(([symbol, to]) => {
            return `gotoTable[${
              states.indexOf(from) * parserSymbols.length +
              parserSymbols.indexOf(symbol)
            }] = ${
              states.indexOf(to) * stateMultiplier * 65536
            }; // 'state ${states.indexOf(to)}'`;
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
       * Each 32-bit stack entry packs:
       * - low 16 bits: tree pointer (tp) of the shifted/reduced CST node
       * - high 16 bits: parser state
       */
      const stack = new Uint32Array(16384);

      /**
       * This typed array contains the syntax tree from a parse.
       * Each CST node occupies 3 uint32 words:
       * - word 0 (tp + 0): name | (numChildren << 8)
       * - word 1 (tp + 1): start | (end << 16) (leaf) or firstChild (internal)
       * - word 2 (tp + 2): nextSibling
       * This enables 32-bit coalesced stores and fast DFS traversal.
       */
      const tree = new Uint32Array(16384);

      const proxyHandler = {
        get(target, prop, receiver) {
          const { stream, pointer } = target;
          const word0 = tree[pointer];
          const nChildren = word0 >>> 8;

          switch (prop) {
            case "name":
              return parserSymbols[word0 & 0xff];
            case "start":
              return nChildren > 0 ? receiver.items[0].start : tree[pointer + 1] & 0xffff;
            case "end":
              return nChildren > 0 ? receiver.items[nChildren - 1].end : tree[pointer + 1] >>> 16;
            case "value":
              return stream.subarray(receiver.start, receiver.end);
            case "items": {
              if (nChildren === 0) {
                return undefined;
              }

              const firstChild = tree[pointer + 1] & 0xffff;
              const children = [createProxy(stream, firstChild)];
              let nextChild = tree[firstChild + 2];

              for (let i = 1; i < nChildren; i++) {
                children.push(createProxy(stream, nextChild));
                nextChild = tree[nextChild + 2];
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

      const createProxy = (stream, pointer) =>
        new Proxy({ stream, pointer }, proxyHandler);

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
        let lookaheadSpan = result.start | (result.end << 16);

        ${debug(
          () => `
          console.log('  lookahead', lookahead, parserSymbols[lookahead], '(' + result.start + ',' + result.end + ')');
          console.log("    '" + input.toString().substring(Math.max(0, result.start - 10), Math.min(result.start + 10, input.length)) + "'");
          if (result.start !== -1) {
            console.log("     " + Array(result.start - Math.max(0, result.start - 10)).fill(' ').join('') + "^");
          }
          `
        )}

        stack[0] = ${
          states.indexOf(start) * stateMultiplier * 65536
        }; // starting state
        let sp = 0;
        // let the tree stack start from offset 3
        // offset 0 means an error occurred and should be used by the parser
        let tp = 3;

        ${debug(() => `let steps = 0;`)}
        while (true) {
          ${debug(() => `steps++;`)}
          const top = stack[sp];
          const currentState = top >>> 16;

          const actionLookup = actionsTable[${
            canPreMultiplyState
              ? "currentState"
              : `currentState * ${parserSymbols.length}`
          } + lookahead];
          if (actionLookup >= 0xfffe) {
            if (actionLookup === 0xfffe) {
              ${debug(() => `console.log('steps', steps);`)}
              ${hasSingleLexerMode ? "" : "lexer.pop(true);"}
              return createProxy(stream, tp - 3);
            }
            const lookaheadStart = (lookaheadSpan << 16) >> 16;
            const context = input.toString().substr(lookaheadStart, 10);
            throw new Error(\`Unexpected lookahead \${parserSymbols[lookahead]} at '\${context}'\`);
          }

          if ((actionLookup & 1) === 0) {
            // shift
            ${debug(
              () =>
                `console.log('action: shift', lookahead, parserSymbols[lookahead]);`
            )}
            ${
              requiresSemanticActions
                ? `
                for (const item of states[${
                  canPreMultiplyState
                    ? `currentState / ${parserSymbols.length}`
                    : "currentState"
                }].values()) {
                  if (item.tokens[item.marker] === parserSymbols[lookahead]) {
                    item.semanticAction?.(stack, sp);
                  }
                }
                `
                : ""
            }

            tree[tp] = lookahead; // name (and nChildren = 0)
            tree[tp + 1] = lookaheadSpan;
            tree[(top & 0xffff) + 2] = tp; // write the current address to the previous item as next sibling

            sp += 1;
            stack[sp] = tp | (actionLookup << 15);

            result = nextToken(stream, lookaheadSpan >>> 16);
            lookahead = result.state;
            lookaheadSpan = result.start | (result.end << 16);
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
              console.log('  next state', (stack[sp] >>> 16) / ${stateMultiplier});
              console.log('');
              `
            )}
          } else {
            // reduce
            const word0 = actionLookup >>> 1;
            const actionSymbol = word0 & 0xff;
            const stackItemsToReduce = word0 >>> 8;

            ${debug(
              () =>
                `console.log('action: reduce', actionSymbol,
                  parserSymbols[actionSymbol],
                  Array.from({ length: stackItemsToReduce })
                    .map((_, i) => parserSymbols[tree[stack[sp - i] & 0xffff] & 0xff])
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
                ? `semanticReducerActions[${
                    canPreMultiplyState
                      ? `currentState / ${parserSymbols.length}`
                      : "currentState"
                  }]?.[actionSymbol][lookahead](stack, sp);`
                : ""
            }

            sp -= stackItemsToReduce;
            tree[tp] = word0; // name and number of children

            const rtop = stack[sp];
            const nextState = gotoTable[${
              canPreMultiplyState
                ? "(rtop >>> 16)"
                : `(rtop >>> 16) * ${parserSymbols.length}`
            } + actionSymbol];
            tree[(rtop & 0xffff) + 2] = tp; // next sibling

            sp += 1;
            tree[tp + 1] = stack[sp]; // first child
            stack[sp] = tp | nextState;

            ${debug(
              () => `
              console.log('  next state', (stack[sp] >>> 16) / ${stateMultiplier});
              console.log('');
              `
            )}
          }

          tp += 3;
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
