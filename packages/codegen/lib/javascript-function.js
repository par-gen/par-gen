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

    const states = tokenNames;

    const table = new Uint16Array(columns * tokenNames.length);
    table.fill(errorState);
    transitions.forEach(([from, transition]) => {
      transition.forEach(([symbol, to]) => {
        table[from + symbol] = to;
      });
    });

    const visited = new Uint16Array(1024);

    const finalStateLoop = (() => {
      let isOptimizable = finals.every((final) => final % 256 === 0);

      for (let i = 1; i < finals.length && isOptimizable; i++) {
        isOptimizable = finals[i] / columns - finals[i - 1] / columns === 1;
      }

      /**
       * @type {(success: boolean, n: number) => [boolean, number]}
       */
      let fn = (success, n) => {
        while (!success && n > 0) {
          success = success || finals.includes(visited[n]);
          n--;
        }
        return [success, n + 1];
      };

      if (isOptimizable) {
        fn = (success, n) => {
          while (!success && n > 0) {
            success =
              visited[n] <= finals[finals.length - 1] &&
              visited[n] % columns === 0;
            n--;
          }
          return [success, n + 1];
        };
      }

      return fn;
    })();

    /**
     * @param {Uint8Array} input
     * @param {number} offset
     */
    const next = (input, offset) => {
      let state = start;
      visited[0] = start;

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
      const [success, n] = finalStateLoop(false, j);

      if (success) {
        const state = states[visited[n] / columns];
        if (state) {
          return {
            state: state,
            start: offset,
            end: offset + n,
          };
        }
      }
      return {
        state: i === input.length ? EOF : ERROR,
        start: -1,
        end: -1,
      };
    };

    return { EOF, next };
  }

  /**
   * @public
   * @param {ParserData} data
   * @returns {Promise<{parse(input: string): AST}>}
   */
  async parser(data) {
    const { actions, goto, start: startState, lexerData } = data;

    /** @type {{[lexerState: string]: LexerResult['next']}} */
    const lexers = {};
    for await (const [name, data] of Object.entries(lexerData)) {
      lexers[name] = (await this.lexer(data)).next;
    }

    /**
     * @param {string} input
     */
    const parse = (input) => {
      const stream = Buffer.from(input);
      let offset = 0;

      let result = lexers["initial"](stream, offset);
      let { state: lookahead, start, end } = result;
      offset = end;

      /** @type {{state: ItemState, tree: *}[]} */
      const stack = new Array(10);
      stack[0] = {
        state: startState,
        tree: undefined,
      };
      let sp = 0;

      while (true) {
        const currentState = stack[sp].state;

        const actionSet = actions.get(currentState);
        if (!actionSet) {
          throw new Error(`Invalid state
${printState(currentState)}`);
        }
        const action = actionSet.get(lookahead);
        if (!action) {
          throw new Error(
            `Unknown lookahead(${lookahead}) for state:
${printState(currentState)}`
          );
        }

        switch (action.op) {
          case "done":
            return stack[sp].tree;
          case "shift":
            const stackItem = {
              state: action.state,
              tree: { name: lookahead, start, end },
            };

            result = lexers["initial"](stream, offset);
            lookahead = result.state;
            start = result.start;
            offset = end = result.end;

            stack[++sp] = stackItem;

            break;
          case "reduce":
            let item;
            for (const value of currentState.values()) {
              if (
                value.name === action.symbol &&
                value.lookahead === lookahead
              ) {
                item = value;
                break;
              }
            }
            if (!item) {
              throw new Error(
                `No valid state ${action.symbol}(${lookahead}) found`
              );
            }

            const items = new Array(item.tokens.length);
            for (let i = 0; i < item.tokens.length; i++) {
              items[i] = stack[i + sp + 1 - item.tokens.length].tree;
            }
            sp -= item.tokens.length;

            const tree = {
              name: action.symbol,
              items,
            };

            const nextState = goto.get(stack[sp].state)?.get(action.symbol);
            if (!nextState) {
              throw new Error(
                `Unable to lookup goto state (${action.symbol}) for
${printState(stack[sp].state)}`
              );
            }
            stack[++sp] = {
              state: nextState,
              tree,
            };

            break;
          default:
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
