/**
 * @typedef {import('@par-gen/lexer/types/lexer').LexerData} LexerData
 */

/**
 * @typedef {import('@par-gen/parser/types/parser').Item} Item
 */

/**
 * @typedef {import('@par-gen/parser/types/parser').ItemState} ItemState
 */

/**
 * @typedef {import('@par-gen/parser/types/parser').ParserData} ParserData
 */

/**
 * @typedef {import('@par-gen/parser/types/parser').AST} AST
 */

/**
 * @typedef {import('./type').Codegen} Codegen
 */

/**
 * @typedef {{ EOF: string, next(input: Uint8Array, offset: number): { state: string; start: number; end: number; }; }} LexerResult
 */

/**
 * @extends {Codegen}
 */
export class JavaScriptFunctionCodegen {
  /**
   * @public
   * @param {LexerData} data
   * @return {Promise<LexerResult>}
   */
  async lexer(data) {
    const {
      tokens: { EOF, ERROR },
      tokenNames,
      errorState,
      transitions,
      start,
      finals,
    } = data;

    const columns = 256;
    const finalSet = new Set(finals);
    /** @type {Map<number, [number, number][]>} */
    const transMap = new Map(transitions);
    const totalStates = tokenNames.length;
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
        stateRemap.set(
          origState,
          (continuableFinals.length + 1 + idx) * columns
        );
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

    /** @type {(string | undefined)[]} */
    const stateNames = new Array(
      compactDeadEndFinals
        ? (continuableFinals.length + 1) * columns
        : rowStates.length
    );

    if (compactDeadEndFinals) {
      deadEndFinals.forEach((origState, idx) => {
        stateNames[idx + 1] = tokenNames[origState / columns];
      });
      continuableFinals.forEach((origState, idx) => {
        stateNames[(idx + 1) * columns] = tokenNames[origState / columns];
      });
    } else {
      rowStates.forEach((origState, idx) => {
        stateNames[idx] = tokenNames[origState / columns];
      });
    }

    const tableSize = columns * rowStates.length;
    const table =
      tableSize <= 0xffff
        ? new Uint16Array(tableSize)
        : new Uint32Array(tableSize);

    for (const [from, transition] of transitions) {
      if (compactDeadEndFinals && deadEndFinals.includes(from)) {
        continue;
      }
      const mappedFrom = remapState(from);
      for (const [symbol, to] of transition) {
        if (to !== errorState) {
          table[mappedFrom + symbol] = remapState(to);
        }
      }
    }

    const skipBytes = data.skipBytes ?? [];
    /** @type {Uint8Array | null} */
    let skipTable = null;
    if (skipBytes.length > 0) {
      skipTable = new Uint8Array(256);
      for (const b of skipBytes) {
        skipTable[b] = 1;
      }
    }

    const skipTokenNames = new Set(data.skipTokenNames ?? []);
    const hasSkipTokens = skipTokenNames.size > 0;
    const allDeadEnd = deadEndFinals.length === finals.length;
    const hasDeadEnd = deadEndFinals.length > 0;

    /**
     * @param {Uint8Array} input
     * @param {number} offset
     */
    const next = (input, offset) => {
      let i = offset;
      const l = input.length;

      while (true) {
        if (skipTable !== null) {
          while (i < l && skipTable[input[i]] !== 0) {
            i++;
          }
          offset = i;
        }

        let state = remappedStart;
        let successState = 0;
        let successPos = 0;

        if (allDeadEnd) {
          while (i < l) {
            state = table[state + input[i++]];
            if (state <= remappedLastFinal) {
              if (state !== 0) {
                successState = state;
                successPos = i;
              }
              break;
            }
          }
        } else if (hasDeadEnd) {
          while (i < l) {
            state = table[state + input[i++]];
            if (state <= remappedLastFinal) {
              if (state <= remappedLastDeadEndFinal) {
                if (state !== 0) {
                  successState = state;
                  successPos = i;
                }
                break;
              }
              successState = state;
              successPos = i;
            }
          }
        } else {
          while (i < l) {
            state = table[state + input[i++]];
            if (state <= remappedLastFinal) {
              if (state === 0) {
                break;
              }
              successState = state;
              successPos = i;
            }
          }
        }

        if (successState !== 0) {
          const matched = compactDeadEndFinals
            ? stateNames[successState]
            : stateNames[successState >>> 8];
          if (matched) {
            if (hasSkipTokens && skipTokenNames.has(matched)) {
              offset = successPos;
              i = successPos;
              continue;
            }
            return {
              state: matched,
              start: offset,
              end: successPos,
            };
          }
        }

        return {
          state: i === l ? EOF : ERROR,
          start: -1,
          end: -1,
        };
      }
    };

    return { EOF, next };
  }

  /**
   * @public
   * @param {ParserData} data
   * @returns {Promise<{parse(input: string | Uint8Array): AST}>}
   */
  async parser(data) {
    const {
      actions,
      goto,
      start: startState,
      states,
      parserSymbols,
      lexerData,
    } = data;

    /** @type {{[lexerState: string]: LexerResult['next']}} */
    const lexers = {};
    for await (const [name, lData] of Object.entries(lexerData)) {
      lexers[name] = (await this.lexer(lData)).next;
    }

    const stateList =
      states && states.length > 0 ? states : Array.from(actions.keys());
    /** @type {Map<ItemState, number>} */
    const stateToIndex = new Map();
    stateList.forEach((st, idx) => {
      stateToIndex.set(st, idx);
    });

    /** @type {string[]} */
    const symbolList =
      parserSymbols && parserSymbols.length > 0
        ? parserSymbols.filter(Boolean)
        : [];
    /** @type {Map<string, number>} */
    const symbolToIndex = new Map();
    for (const sym of symbolList) {
      if (!symbolToIndex.has(sym)) {
        symbolToIndex.set(sym, symbolToIndex.size);
      }
    }
    for (const [, actMap] of actions.entries()) {
      for (const [sym, act] of actMap.entries()) {
        if (!symbolToIndex.has(sym)) {
          symbolToIndex.set(sym, symbolToIndex.size);
        }
        if (act.op === "reduce" && act.symbol && !symbolToIndex.has(act.symbol)) {
          symbolToIndex.set(act.symbol, symbolToIndex.size);
        }
      }
    }
    for (const [, gotoMap] of goto.entries()) {
      for (const [sym] of gotoMap.entries()) {
        if (!symbolToIndex.has(sym)) {
          symbolToIndex.set(sym, symbolToIndex.size);
        }
      }
    }

    const numStates = stateList.length;
    const numSymbols = symbolToIndex.size;
    /** @type {string[]} */
    const indexToSymbol = new Array(numSymbols);
    for (const [sym, idx] of symbolToIndex.entries()) {
      indexToSymbol[idx] = sym;
    }

    // Action encoding in Int32Array:
    // 0: invalid / error
    // 1: done
    // (targetState << 2) | 2: shift to targetState
    // (reduceLen << 18) | (symbolId << 2) | 3: reduce symbolId of length reduceLen
    const actionTable = new Int32Array(numStates * numSymbols);
    const gotoTable = new Int32Array(numStates * numSymbols).fill(-1);

    /** @type {(Map<number, (lexer: *, stack: *, sp: number) => void> | undefined)[]} */
    const shiftSemanticActions = new Array(numStates);
    let hasSemanticActions = false;

    for (let sIdx = 0; sIdx < numStates; sIdx++) {
      const st = stateList[sIdx];
      const items = Array.from(st.values());

      for (const item of items) {
        if (item.semanticAction) {
          if (item.marker === item.tokens.length) {
            throw new Error("Semantic reducer actions are not implemented");
          }
          const tokName = item.tokens[item.marker];
          const tokId = symbolToIndex.get(tokName);
          if (tokId !== undefined) {
            hasSemanticActions = true;
            let map = shiftSemanticActions[sIdx];
            if (!map) {
              map = new Map();
              shiftSemanticActions[sIdx] = map;
            }
            const fn = /** @type {(lexer: *, stack: *, sp: number) => void} */ (
              new Function("lexer", "stack", "sp", item.semanticAction)
            );
            const prev = map.get(tokId);
            if (prev) {
              map.set(tokId, (lexer, stack, sp) => {
                prev(lexer, stack, sp);
                fn(lexer, stack, sp);
              });
            } else {
              map.set(tokId, fn);
            }
          }
        }
      }

      const actMap = actions.get(st);
      if (actMap) {
        for (const [sym, act] of actMap.entries()) {
          const symId = symbolToIndex.get(sym);
          if (symId === undefined) {
            continue;
          }
          const cell = sIdx * numSymbols + symId;
          if (act.op === "done") {
            actionTable[cell] = 1;
          } else if (act.op === "shift" && act.state) {
            const targetIdx = stateToIndex.get(act.state);
            if (targetIdx !== undefined) {
              actionTable[cell] = (targetIdx << 2) | 2;
            }
          } else if (act.op === "reduce" && act.symbol) {
            const targetSymId = symbolToIndex.get(act.symbol);
            const matchedItem =
              items.find(
                (it) =>
                  it.name === act.symbol &&
                  it.marker === it.tokens.length &&
                  it.lookahead === sym
              ) ??
              items.find(
                (it) => it.name === act.symbol && it.lookahead === sym
              );
            if (matchedItem && targetSymId !== undefined) {
              actionTable[cell] =
                (matchedItem.tokens.length << 18) | (targetSymId << 2) | 3;
            }
          }
        }
      }

      const gotoMap = goto.get(st);
      if (gotoMap) {
        for (const [sym, targetState] of gotoMap.entries()) {
          const symId = symbolToIndex.get(sym);
          const targetIdx = stateToIndex.get(targetState);
          if (symId !== undefined && targetIdx !== undefined) {
            gotoTable[sIdx * numSymbols + symId] = targetIdx;
          }
        }
      }
    }

    const startStateIdx = stateToIndex.get(startState) ?? 0;
    const initialLexer = lexers["initial"];
    let stateStack = new Int32Array(1024);
    let treeStack = new Array(1024);

    /**
     * @param {string | Uint8Array} input
     */
    const parse = (input) => {
      const stream = typeof input === "string" ? Buffer.from(input) : input;
      let offset = 0;

      let nextToken = initialLexer;
      /** @type {LexerResult['next'][]} */
      const lexerStack = hasSemanticActions ? [initialLexer] : [];
      const lexer = hasSemanticActions
        ? {
            /** @param {string} name */
            push(name) {
              nextToken = lexers[name];
              lexerStack.push(nextToken);
            },
            /** @param {boolean=} done */
            pop(done) {
              lexerStack.pop();
              if (done) {
                return;
              }
              if (lexerStack.length === 0) {
                throw new Error(
                  "Cannot remove more lexer states than have been pushed."
                );
              }
              nextToken = lexerStack[lexerStack.length - 1];
            },
          }
        : undefined;

      let result = nextToken(stream, offset);
      let lookahead = result.state;
      let lookaheadId = symbolToIndex.get(lookahead) ?? -1;
      let start = result.start;
      let end = result.end;
      offset = end;

      stateStack[0] = startStateIdx;
      treeStack[0] = undefined;
      let sp = 0;

      while (true) {
        const currentStateIdx = stateStack[sp];
        const packed =
          lookaheadId >= 0
            ? actionTable[currentStateIdx * numSymbols + lookaheadId]
            : 0;

        if (packed === 0) {
          const currentState = stateList[currentStateIdx];
          if (!actions.get(currentState)) {
            throw new Error(`Invalid state
${printState(currentState)}`);
          }
          throw new Error(
            `Unknown lookahead(${lookahead}) for state:
${printState(currentState)}`
          );
        }

        const op = packed & 3;
        if (op === 2) {
          // shift
          if (hasSemanticActions) {
            const semFn = shiftSemanticActions[currentStateIdx]?.get(
              lookaheadId
            );
            if (semFn) {
              semFn(lexer, treeStack, sp);
            }
          }

          const node = { name: lookahead, start, end };

          result = nextToken(stream, offset);
          lookahead = result.state;
          lookaheadId = symbolToIndex.get(lookahead) ?? -1;
          start = result.start;
          offset = end = result.end;

          if (++sp >= stateStack.length) {
            const nextStates = new Int32Array(stateStack.length * 2);
            nextStates.set(stateStack);
            stateStack = nextStates;
            treeStack.length = stateStack.length;
          }
          stateStack[sp] = packed >>> 2;
          treeStack[sp] = node;
        } else if (op === 3) {
          // reduce
          const len = packed >>> 18;
          const symId = (packed >>> 2) & 0xffff;
          const symbolName = indexToSymbol[symId];

          const items = new Array(len);
          const base = sp + 1 - len;
          for (let i = 0; i < len; i++) {
            items[i] = treeStack[base + i];
          }
          sp -= len;

          const nextStateIdx = gotoTable[stateStack[sp] * numSymbols + symId];
          if (nextStateIdx < 0) {
            throw new Error(
              `Unable to lookup goto state (${symbolName}) for
${printState(stateList[stateStack[sp]])}`
            );
          }

          if (++sp >= stateStack.length) {
            const nextStates = new Int32Array(stateStack.length * 2);
            nextStates.set(stateStack);
            stateStack = nextStates;
            treeStack.length = stateStack.length;
          }
          stateStack[sp] = nextStateIdx;
          treeStack[sp] = {
            name: symbolName,
            items,
          };
        } else if (op === 1) {
          // done
          return treeStack[sp];
        } else {
          throw new Error("Parser Error");
        }
      }
    };

    return { parse };
  }
}

/**
 * @param {ItemState} state
 * @returns {string}
 */
function printState(state) {
  return Array.from(state.values())
    .map((item) => printItem(item))
    .join("\n");
}

/**
 * @param {Partial<Item>} item
 * @returns {string}
 */
function printItem(item) {
  const head = [...(item.tokens ?? [])].slice(0, item.marker ?? 0);
  const tail = [...(item.tokens ?? [])].slice(item.marker ?? 0);

  return `${item.name} -> ${[...head, "•", ...tail].join(" ")}, ${
    item.lookahead
  }`;
}
