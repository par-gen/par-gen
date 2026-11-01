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

    const skipBytes = data.skipBytes ?? [];
    const skipTokenNames = new Set(data.skipTokenNames ?? []);

    const compactDeadEndFinals =
      deadEndFinals.length > 0 && deadEndFinals.length < columns;

    const maxDeadEndTokenId = deadEndFinals.reduce((max, origState) => {
      const id = tokenIds[origState / columns] ?? 0;
      return id > max ? id : max;
    }, 0);

    const directDeadEndTokenIds =
      compactDeadEndFinals &&
      skipTokenNames.size === 0 &&
      deadEndFinals.every((origState) => {
        const id = tokenIds[origState / columns];
        return id !== undefined && id + 1 < columns;
      });

    if (directDeadEndTokenIds && continuableFinals.length > 1) {
      continuableFinals.sort(
        (a, b) =>
          (tokenIds[a / columns] ?? 0) - (tokenIds[b / columns] ?? 0)
      );
    }

    const rowStates = compactDeadEndFinals
      ? [errorState, ...continuableFinals, ...nonFinals]
      : [errorState, ...deadEndFinals, ...continuableFinals, ...nonFinals];

    /** @type {Map<number, number>} */
    const stateRemap = new Map();
    if (directDeadEndTokenIds) {
      stateRemap.set(errorState, 0);
      deadEndFinals.forEach((origState) => {
        const id = tokenIds[origState / columns] ?? 0;
        stateRemap.set(origState, id + 1);
      });
      continuableFinals.forEach((origState, idx) => {
        stateRemap.set(origState, (idx + 1) * columns);
      });
      nonFinals.forEach((origState, idx) => {
        stateRemap.set(
          origState,
          (continuableFinals.length + 1 + idx) * columns
        );
      });
    } else if (compactDeadEndFinals) {
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
    const remappedLastDeadEndFinal = directDeadEndTokenIds
      ? maxDeadEndTokenId + 1
      : compactDeadEndFinals
      ? deadEndFinals.length
      : deadEndFinals.length * columns;
    const remappedLastFinal = directDeadEndTokenIds
      ? continuableFinals.length > 0
        ? continuableFinals.length * columns
        : maxDeadEndTokenId + 1
      : compactDeadEndFinals
      ? continuableFinals.length > 0
        ? continuableFinals.length * columns
        : deadEndFinals.length
      : finals.length * columns;

    const continuableTokenIds = continuableFinals.map(
      (origState) => tokenIds[origState / columns] ?? 0
    );
    const distinctContinuableTokenIds = Array.from(
      new Set(continuableTokenIds)
    );
    const needsContinuableTokenIdsTable =
      directDeadEndTokenIds && distinctContinuableTokenIds.length >= 3;

    let continuableTokenIdExpr = "tokenIds[successState >> 8]";
    if (directDeadEndTokenIds && continuableFinals.length > 0) {
      if (distinctContinuableTokenIds.length === 1) {
        continuableTokenIdExpr = `${distinctContinuableTokenIds[0]}`;
      } else if (distinctContinuableTokenIds.length === 2) {
        const id0 = distinctContinuableTokenIds[0];
        const id1 = distinctContinuableTokenIds[1];
        const count0 = continuableTokenIds.filter((id) => id === id0).length;
        const count1 = continuableFinals.length - count0;
        if (count0 === 1) {
          continuableTokenIdExpr = `successState === ${columns} ? ${id0} : ${id1}`;
        } else if (count1 === 1) {
          continuableTokenIdExpr = `successState === ${
            continuableFinals.length * columns
          } ? ${id1} : ${id0}`;
        } else {
          continuableTokenIdExpr = `successState <= ${
            count0 * columns
          } ? ${id0} : ${id1}`;
        }
      }
    }

    const paddedTokenIdsLength = needsContinuableTokenIdsTable
      ? continuableFinals.length + 1
      : compactDeadEndFinals
      ? Math.max(128, (continuableFinals.length + 1) * columns)
      : Math.max(128, rowStates.length);

    /** @type {string[]} */
    const tokenIdsAssignments = [];
    if (needsContinuableTokenIdsTable) {
      continuableFinals.forEach((origState, idx) => {
        const origIdx = origState / columns;
        const id = tokenIds[origIdx];
        const name = tokenNames[origIdx];
        if (id !== undefined && id !== 0) {
          tokenIdsAssignments.push(`tokenIds[${idx + 1}] = ${id}; // ${name}`);
        } else {
          tokenIdsAssignments.push(`// tokenIds[${idx + 1}] = 0; // ${name}`);
        }
      });
    } else if (!directDeadEndTokenIds) {
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
    }

    /** @type {Map<number, string | undefined>} */
    const mappedStateNames = new Map();
    allOrigStates.forEach((origState) => {
      mappedStateNames.set(
        remapState(origState),
        tokenNames[origState / columns]
      );
    });

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

      ${
        directDeadEndTokenIds && !needsContinuableTokenIdsTable
          ? ""
          : `const tokenIds = new ${tokenIdSize}(${paddedTokenIdsLength});
      ${tokenIdsAssignments.join("\n")}`
      }

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
          directDeadEndTokenIds && continuableFinals.length === 0
            ? `// ${remappedStart / columns}
        let state = ${remappedStart};

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
            break;
          }
        }

        state -= 1;
        if (state >>> 0 >= ${remappedLastFinal}) {
          state = i === l ? ${tokenIds[tokenNames.indexOf(EOF)]} : ${
                tokenIds[tokenNames.indexOf(ERROR)]
              };
          offset = -1;
          i = -1;
        }
        return {
          state,
          start: offset,
          end: i,
        };`
            : directDeadEndTokenIds
            ? `// ${remappedStart / columns}
        let state = ${remappedStart};
        ${
          distinctContinuableTokenIds.length === 1
            ? ""
            : "let successState = 0;"
        }
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
            if (state <= ${remappedLastDeadEndFinal}) {
              break;
            }
            ${
              distinctContinuableTokenIds.length === 1
                ? ""
                : "successState = state;"
            }
            successPos = i;
          }
        }

        state -= 1;
        if (state >>> 0 >= ${remappedLastDeadEndFinal}) {
          if (${
            distinctContinuableTokenIds.length === 1
              ? "successPos !== 0"
              : "successState !== 0"
          }) {
            state = ${continuableTokenIdExpr};
            i = successPos;
          } else {
            state = i === l ? ${tokenIds[tokenNames.indexOf(EOF)]} : ${
                tokenIds[tokenNames.indexOf(ERROR)]
              };
            offset = -1;
            i = -1;
          }
        }
        return {
          state,
          start: offset,
          end: i,
        };`
            : skipMappedStates.length > 0
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
    const canPreMultiplyState = states.length * parserSymbols.length < 2048;
    const stateMultiplier = canPreMultiplyState ? parserSymbols.length : 1;
    const ruleNamesSet = new Set(["S", ...rules.map((r) => r.name)]);
    const paddedTableSize = Math.max(64, states.length * parserSymbols.length);

    if (requiresSemanticActions) {
      for (const state of states) {
        for (const item of state.values()) {
          if (item.semanticAction && item.marker === item.tokens.length) {
            throw new Error("Semantic reducer actions are not implemented");
          }
        }
      }
    }

    /**
     * @param {string} actionCode
     */
    const transformSemanticAction = (actionCode) => {
      if (hasSingleLexerMode) {
        return actionCode;
      }
      return actionCode.replace(
        /\blexer\.push\(\s*(['"])([^'"]+)\1\s*\)/g,
        (match, _quote, modeName) => {
          if (Object.prototype.hasOwnProperty.call(lexerData, modeName)) {
            return `lexer.push(LexerMode.${this._lexerModeEnumKey(modeName)})`;
          }
          return match;
        }
      );
    };

    /** @type {string[]} */
    const shiftActionBodies = [];
    /** @type {Map<string, number>} */
    const shiftActionBodyToId = new Map();
    /** @type {Array<{ tableIndex: number, stateIndex: number, symbol: string, actionId: number, code: string }>} */
    const shiftActionEntries = [];

    if (requiresSemanticActions) {
      for (const [from, action] of actions.entries()) {
        const stateIndex = states.indexOf(from);
        const items = Array.from(from.values());
        for (const [symbol, to] of action.entries()) {
          if (ruleNamesSet.has(symbol) || to.op !== "shift") {
            continue;
          }
          /** @type {string[]} */
          const matchingActions = [];
          for (const item of items) {
            if (item.tokens[item.marker] === symbol && item.semanticAction) {
              const transformed = transformSemanticAction(
                item.semanticAction.trim()
              );
              if (!matchingActions.includes(transformed)) {
                matchingActions.push(transformed);
              }
            }
          }
          if (matchingActions.length > 0) {
            const combinedCode = matchingActions.join("; ");
            let actionId = shiftActionBodyToId.get(combinedCode);
            if (actionId === undefined) {
              shiftActionBodies.push(combinedCode);
              actionId = shiftActionBodies.length;
              shiftActionBodyToId.set(combinedCode, actionId);
            }
            const lookaheadIndex = parserSymbols.indexOf(symbol);
            shiftActionEntries.push({
              tableIndex: stateIndex * parserSymbols.length + lookaheadIndex,
              stateIndex,
              symbol,
              actionId,
              code: combinedCode,
            });
          }
        }
      }
    }
    const hasShiftSemanticActions = shiftActionEntries.length > 0;

    const nextTokenExpr = hasSingleLexerMode
      ? "nextToken(stream, lookaheadSpan & 0x3fffff)"
      : lexerModes
          .slice(0, -1)
          .map(
            (name) =>
              `lexerMode === LexerMode.${this._lexerModeEnumKey(
                name
              )} ? nextToken${this._lexerModePascalCase(
                name
              )}(stream, lookaheadSpan & 0x3fffff) : `
          )
          .join("") +
        `nextToken${this._lexerModePascalCase(
          lexerModes[lexerModes.length - 1]
        )}(stream, lookaheadSpan & 0x3fffff)`;

    const shiftActionDispatchCode = hasShiftSemanticActions
      ? shiftActionBodies.length === 1
        ? `if (shiftActionsTable[actionIndex] !== 0) {
              ${shiftActionBodies[0]};
            }`
        : `const shiftAction = shiftActionsTable[actionIndex];
            if (shiftAction !== 0) {
              switch (shiftAction) {
                ${shiftActionBodies
                  .map(
                    (body, idx) => `case ${idx + 1}:
                  ${body};
                  break;`
                  )
                  .join("\n")}
              }
            }`
      : "";

    const actionLookupCode = hasShiftSemanticActions
      ? `const actionIndex = ${
          canPreMultiplyState
            ? "currentState"
            : `currentState * ${parserSymbols.length}`
        } + lookahead;
          const actionLookup = actionsTable[actionIndex];`
      : `const actionLookup = actionsTable[${
          canPreMultiplyState
            ? "currentState"
            : `currentState * ${parserSymbols.length}`
        } + lookahead];`;

    const code = `// @ts-nocheck
      ${this._parserImports(lexerData)}

      /*
      ${rules
        .map((rule) => `${rule.name} := ${rule.symbols.join(" ")};`)
        .join("\n")}
      */

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

      ${
        hasShiftSemanticActions
          ? `const shiftActionsTable = new Uint8Array(${paddedTableSize});
      ${shiftActionEntries
        .map(
          (entry) =>
            `shiftActionsTable[${entry.tableIndex}] = ${entry.actionId}; // 'state ${entry.stateIndex}' -> ${entry.symbol} -> ${entry.code}`
        )
        .join("\n")}`
          : ""
      }

      const gotoTable = new Uint32Array(${paddedTableSize});
      ${Array.from(goto.entries())
        .flatMap(([from, target]) => {
          return Array.from(target.entries()).map(([symbol, to]) => {
            return `gotoTable[${
              states.indexOf(from) * parserSymbols.length +
              parserSymbols.indexOf(symbol)
            }] = ${
              states.indexOf(to) * stateMultiplier * 1048576
            }; // 'state ${states.indexOf(to)}'`;
          });
        })
        .join("\n")}

      ${
        hasSingleLexerMode
          ? `const nextToken = nextToken${this._lexerModePascalCase(
              lexerModes[0]
            )};`
          : `const LexerMode = {
        ${lexerModes
          .map((name, idx) => `${this._lexerModeEnumKey(name)}: ${idx},`)
          .join("\n")}
      };

      const lexerModeNames = {
        ${lexerModes
          .map((name, idx) => `${JSON.stringify(name)}: ${idx},`)
          .join("\n")}
      };

      const lexerStack = new Uint8Array(64);
      let lexerSp = 0;
      let lexerMode = LexerMode.${this._lexerModeEnumKey(lexerModes[0])};

      const lexer = {
        push(mode) {
          const modeId = typeof mode === "number" ? mode : lexerModeNames[mode];
          lexerStack[++lexerSp] = modeId;
          lexerMode = modeId;
        },
        pop() {
          if (lexerSp === 0) {
            throw new Error("Cannot remove more lexer states than have been pushed.");
          }
          lexerMode = lexerStack[--lexerSp];
        },
      };`
      }

      /**
       * Auto-growing stack and CST arenas starting at 16,384 words (64 KiB each),
       * which glibc malloc places in the low 32-bit brk heap ([reg*4 + disp32]).
       *
       * Each 32-bit stack entry packs:
       * - low 20 bits: tree pointer (tp) of the shifted/reduced CST node (up to 1,048,575 words)
       * - high 12 bits: parser state
       *
       * Each CST node in tree occupies 3 uint32 words:
       * - word 0 (tp + 0): name | (numChildren << 8)
       * - word 1 (tp + 1): end | ((end - start) << 22) (leaf) or firstChild (internal)
       * - word 2 (tp + 2): nextSibling
       */
      const arena = {
        stack: new Uint32Array(16384),
        tree: new Uint32Array(16384),
      };

      function growBuffer(buf, usedLen) {
        const next = new Uint32Array(buf.length << 1);
        if (usedLen > 0) {
          next.set(buf.subarray(0, usedLen));
        }
        return next;
      }

      class TreeCursor {
        #stream;
        #tree;
        #rootPointer;
        #pointer;
        #parentStack = new Uint32Array(256);
        #depth = 0;

        constructor(stream, tree, pointer) {
          this.#stream = stream;
          this.#tree = tree;
          this.#rootPointer = pointer;
          this.#pointer = pointer;
        }

        get name() {
          return parserSymbols[this.#tree[this.#pointer] & 0xff];
        }

        get symbolId() {
          return this.#tree[this.#pointer] & 0xff;
        }

        get childCount() {
          return this.#tree[this.#pointer] >>> 8;
        }

        get isLeaf() {
          return (this.#tree[this.#pointer] >>> 8) === 0;
        }

        get start() {
          const t = this.#tree;
          let p = this.#pointer;
          while ((t[p] >>> 8) > 0) {
            p = t[p + 1] & 0xfffff;
          }
          const span = t[p + 1];
          const end = span & 0x3fffff;
          let q = p - 3;
          while (q >= 3 && (t[q] >>> 8) > 0) {
            q -= 3;
          }
          const prevEnd = q >= 3 ? t[q + 1] & 0x3fffff : 0;
          return prevEnd + (((end - prevEnd) - (span >>> 22)) & 0x3ff);
        }

        get end() {
          const t = this.#tree;
          let p = this.#pointer;
          let n = t[p] >>> 8;
          while (n > 0) {
            p = t[p + 1] & 0xfffff;
            for (let i = 1; i < n; i++) {
              p = t[p + 2];
            }
            n = t[p] >>> 8;
          }
          return t[p + 1] & 0x3fffff;
        }

        get value() {
          return this.#stream.subarray(this.start, this.end);
        }

        get pointer() {
          return this.#pointer;
        }

        get depth() {
          return this.#depth;
        }

        reset() {
          this.#pointer = this.#rootPointer;
          this.#depth = 0;
          return true;
        }

        gotoFirstChild() {
          const t = this.#tree;
          const p = this.#pointer;
          const n = t[p] >>> 8;
          if (n === 0) {
            return false;
          }
          const d = this.#depth + 1;
          let stack = this.#parentStack;
          if (d >= stack.length) {
            stack = this.#parentStack = growBuffer(stack, d);
          }
          stack[d] = p | ((n - 1) << 20);
          this.#depth = d;
          this.#pointer = t[p + 1] & 0xfffff;
          return true;
        }

        gotoNextSibling() {
          const d = this.#depth;
          const stack = this.#parentStack;
          const entry = stack[d];
          if (entry < 0x100000) {
            return false;
          }
          stack[d] = entry - 0x100000;
          this.#pointer = this.#tree[this.#pointer + 2];
          return true;
        }

        gotoParent() {
          const d = this.#depth;
          if (d === 0) {
            return false;
          }
          this.#depth = d - 1;
          this.#pointer = this.#parentStack[d] & 0xfffff;
          return true;
        }

        currentNode() {
          return new CstNode(this.#stream, this.#tree, this.#pointer);
        }
      }

      class CstNode {
        #stream;
        #tree;
        #pointer;

        constructor(stream, tree, pointer) {
          this.#stream = stream;
          this.#tree = tree;
          this.#pointer = pointer;
        }

        get name() {
          return parserSymbols[this.#tree[this.#pointer] & 0xff];
        }

        get start() {
          const t = this.#tree;
          let p = this.#pointer;
          while ((t[p] >>> 8) > 0) {
            p = t[p + 1] & 0xfffff;
          }
          const span = t[p + 1];
          const end = span & 0x3fffff;
          let q = p - 3;
          while (q >= 3 && (t[q] >>> 8) > 0) {
            q -= 3;
          }
          const prevEnd = q >= 3 ? t[q + 1] & 0x3fffff : 0;
          return prevEnd + (((end - prevEnd) - (span >>> 22)) & 0x3ff);
        }

        get end() {
          const t = this.#tree;
          let p = this.#pointer;
          let n = t[p] >>> 8;
          while (n > 0) {
            p = t[p + 1] & 0xfffff;
            for (let i = 1; i < n; i++) {
              p = t[p + 2];
            }
            n = t[p] >>> 8;
          }
          return t[p + 1] & 0x3fffff;
        }

        get value() {
          return this.#stream.subarray(this.start, this.end);
        }

        get items() {
          const t = this.#tree;
          const pointer = this.#pointer;
          const nChildren = t[pointer] >>> 8;
          if (nChildren === 0) {
            return undefined;
          }

          const stream = this.#stream;
          const children = new Array(nChildren);
          let child = t[pointer + 1] & 0xfffff;
          children[0] = new CstNode(stream, t, child);

          for (let i = 1; i < nChildren; i++) {
            child = t[child + 2];
            children[i] = new CstNode(stream, t, child);
          }

          return children;
        }

        get __tree() {
          return this.#tree;
        }

        get __pointer() {
          return this.#pointer;
        }

        cursor() {
          return new TreeCursor(this.#stream, this.#tree, this.#pointer);
        }

        toJSON() {
          return {
            name: this.name,
            start: this.start,
            end: this.end,
            value: this.value,
            items: this.items?.map((item) => item.toJSON()),
          };
        }

        [Symbol.for("nodejs.util.inspect.custom")]() {
          return this.toJSON();
        }
      }

      function parseCold(
        stream,
        input,
        sp,
        tp,
        lookahead,
        lookaheadSpan,
        result
      ) {
        let s = arena.stack;
        let t = tp === 3 ? new Uint32Array(arena.tree.length) : arena.tree;
        if (tp === 3) {
          s[0] = ${
            states.indexOf(start) * stateMultiplier * 1048576
          }; // starting state
        }

        while (true) {
          if (tp >= t.length - 2) {
            t = growBuffer(t, tp);
          }
          if (sp >= s.length - 1) {
            s = growBuffer(s, sp + 1);
          }
          const top = s[sp];
          const currentState = top >>> 20;

          ${actionLookupCode}
          if (actionLookup >= 0xfffe) {
            if (actionLookup === 0xfffe) {
              if (s !== arena.stack || t !== arena.tree) {
                delete arena.stack;
                delete arena.tree;
                arena.stack = s;
                arena.tree = t;
                Object.create(arena);
              }
              return new CstNode(stream, t, tp - 3);
            }
            const context = input.toString().substr(result.start, 10);
            throw new Error(\`Unexpected lookahead \${parserSymbols[lookahead]} at '\${context}'\`);
          }

          if ((actionLookup & 1) === 0) {
            ${shiftActionDispatchCode}

            t[tp] = lookahead;
            t[tp + 1] = lookaheadSpan;
            t[(top & 0xfffff) + 2] = tp;

            sp += 1;
            s[sp] = tp | (actionLookup << 19);

            result = ${nextTokenExpr};
            lookahead = result.state;
            lookaheadSpan = result.end | ((result.end - result.start) << 22);
          } else {
            const word0 = actionLookup >>> 1;
            const actionSymbol = word0 & 0xff;
            const stackItemsToReduce = word0 >>> 8;

            sp -= stackItemsToReduce;
            t[tp] = word0;

            const rtop = s[sp];
            const nextState = gotoTable[${
              canPreMultiplyState
                ? "(rtop >>> 20)"
                : `(rtop >>> 20) * ${parserSymbols.length}`
            } + actionSymbol];
            t[(rtop & 0xfffff) + 2] = tp;

            sp += 1;
            t[tp + 1] = s[sp];
            s[sp] = tp | nextState;
          }

          tp += 3;
        }
      }

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
        ${
          hasSingleLexerMode
            ? ""
            : `lexerSp = 0;
        lexerStack[0] = LexerMode.${this._lexerModeEnumKey(lexerModes[0])};
        lexerMode = LexerMode.${this._lexerModeEnumKey(lexerModes[0])};`
        }

        const stream = typeof input === "string" ? Buffer.from(input) : input;

        let result = ${
          hasSingleLexerMode
            ? "nextToken(stream, 0)"
            : `nextToken${this._lexerModePascalCase(lexerModes[0])}(stream, 0)`
        };
        let lookahead = result.state;
        let lookaheadSpan = result.end | ((result.end - result.start) << 22);

        ${debug(
          () => `
          console.log('  lookahead', lookahead, parserSymbols[lookahead], '(' + result.start + ',' + result.end + ')');
          console.log("    '" + input.toString().substring(Math.max(0, result.start - 10), Math.min(result.start + 10, input.length)) + "'");
          if (result.start !== -1) {
            console.log("     " + Array(result.start - Math.max(0, result.start - 10)).fill(' ').join('') + "^");
          }
          `
        )}

        const stack = arena.stack;
        const tree = arena.tree;
        if (stream.length >>> 1 > tree.length) {
          return parseCold(
            stream,
            input,
            0,
            3,
            lookahead,
            lookaheadSpan,
            result
          );
        }

        stack[0] = ${
          states.indexOf(start) * stateMultiplier * 1048576
        }; // starting state
        let sp = 0;
        // let the tree stack start from offset 3
        // offset 0 means an error occurred and should be used by the parser
        let tp = 3;

        ${debug(() => `let steps = 0;`)}
        while (true) {
          ${debug(() => `steps++;`)}
          const top = stack[sp];
          const currentState = top >>> 20;

          ${actionLookupCode}
          if (actionLookup >= 0xfffe) {
            if (actionLookup === 0xfffe) {
              ${debug(() => `console.log('steps', steps);`)}
              return new CstNode(stream, tree, tp - 3);
            }
            const context = input.toString().substr(result.start, 10);
            throw new Error(\`Unexpected lookahead \${parserSymbols[lookahead]} at '\${context}'\`);
          }

          if ((actionLookup & 1) === 0) {
            // shift
            ${debug(
              () =>
                `console.log('action: shift', lookahead, parserSymbols[lookahead]);`
            )}
            ${shiftActionDispatchCode}

            tree[tp] = lookahead; // name (and nChildren = 0)
            tree[tp + 1] = lookaheadSpan;
            tree[(top & 0xfffff) + 2] = tp; // write the current address to the previous item as next sibling

            sp += 1;
            stack[sp] = tp | (actionLookup << 19);

            result = ${nextTokenExpr};
            lookahead = result.state;
            lookaheadSpan = result.end | ((result.end - result.start) << 22);
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
              console.log('  next state', (stack[sp] >>> 20) / ${stateMultiplier});
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
                    .map((_, i) => parserSymbols[tree[stack[sp - i] & 0xfffff] & 0xff])
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

            sp -= stackItemsToReduce;
            tree[tp] = word0; // name and number of children

            const rtop = stack[sp];
            const nextState = gotoTable[${
              canPreMultiplyState
                ? "(rtop >>> 20)"
                : `(rtop >>> 20) * ${parserSymbols.length}`
            } + actionSymbol];
            tree[(rtop & 0xfffff) + 2] = tp; // next sibling

            sp += 1;
            tree[tp + 1] = stack[sp]; // first child
            stack[sp] = tp | nextState;

            ${debug(
              () => `
              console.log('  next state', (stack[sp] >>> 20) / ${stateMultiplier});
              console.log('');
              `
            )}
          }

          tp += 3;
          if (tp >= tree.length - 2) {
            return parseCold(
              stream,
              input,
              sp,
              tp,
              lookahead,
              lookaheadSpan,
              result
            );
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
   * @param {string} name
   * @returns {string}
   */
  _lexerModePascalCase(name) {
    return name
      .split(/[^a-zA-Z0-9]+/)
      .filter(Boolean)
      .map((part) => part[0].toUpperCase() + part.slice(1))
      .join("");
  }

  /**
   * @protected
   * @param {string} name
   * @returns {string}
   */
  _lexerModeEnumKey(name) {
    return name
      .replace(/([a-z0-9])([A-Z])/g, "$1_$2")
      .replace(/[^a-zA-Z0-9]+/g, "_")
      .replace(/^_+|_+$/g, "")
      .toUpperCase();
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
