import { promises as fsp } from "fs";

/**
 * @typedef {import('@knisterpeter/expound-lexer/types/lexer').LexerData} LexerData
 */

/**
 * @typedef {import('./type').Codegen} Codegen
 */

/**
 * @extends {Codegen}
 */
export class JavaScriptModuleCodegen {
  /**
   * @param {Object} options
   * @param {string} options.lexerFile
   */
  constructor(options) {
    /** @private */
    this.options = options;
  }

  /**
   * @public
   * @param {LexerData} data
   * @returns {Promise<void>}
   */
  async lexer(data) {
    const {
      tokens: { EOF, ERROR },
      stateNames,
      errorState,
      transitions,
      start,
      finals,
    } = data;

    const columns = 256;

    const code = `
      const EOF = "${EOF}";
      const ERROR = "${ERROR}";

      const states = ${JSON.stringify(stateNames)};

      const table = new Uint16Array(${columns * stateNames.length});
      table.fill(${errorState ?? -1});
      ${transitions
        .flatMap(([from, transition]) =>
          transition.map(
            ([symbol, to]) =>
              `table[${from + symbol}] = ${to}; // ${from / columns} -> ${
                to / columns
              }`
          )
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
          success = success || ${finals
            .map((final) => `${final} === visited[n]`)
            .join(" || ")};
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

      export { EOF, next };
    `;

    await fsp.writeFile(this.options.lexerFile, code);
  }

  /**
   * @public
   */
  parser() {
    throw new Error("Unimplemented");
  }
}
