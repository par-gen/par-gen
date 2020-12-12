import { promises as fsp } from "fs";
import { dirname, relative } from "path";
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
export class JavaScriptCommonJsCodegen {
  /**
   * @param {Object} options
   * @param {string} options.lexerFile
   * @param {string} options.parserFile
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

    const code = `'use strict';

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

      module.exports = { EOF, next };
    `;

    await fsp.mkdir(dirname(this.options.lexerFile), { recursive: true });
    await fsp.writeFile(this.options.lexerFile, code);
  }

  /**
   * @public
   * @param {ParserData} data
   * @returns {Promise<void>}
   */
  async parser(data) {
    const { lexerData, states, actions, goto, start } = data;

    await this.lexer(lexerData);

    const code = `
      const { next: nextToken } = require('./${relative(
        dirname(this.options.parserFile),
        this.options.lexerFile
      )}');


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
            (state) =>
              `new Set([${Array.from(state.values())
                .map((item) => JSON.stringify(item))
                .join(",\n")}])`
          )
          .join(",\n")}
      ];

      const startState = states[${states.indexOf(start)}];

      const actions = new Map([
        ${Array.from(actions.entries())
          .map(([from, action]) => {
            return `
              [ states[${states.indexOf(from)}]
                ,
                new Map([
                  ${Array.from(action.entries())
                    .map(([symbol, to]) => {
                      return `
                        [
                          "${symbol}",
                          {
                            op: '${to.op}',
                            symbol: ${JSON.stringify(to.symbol)},
                            state: ${
                              to.state
                                ? `states[${states.indexOf(to.state)}]`
                                : undefined
                            }
                          }
                        ]
                      `;
                    })
                    .join(",\n")}
                ])
              ]
            `;
          })
          .join(",\n")}
      ]);

      const goto = new Map([
        ${Array.from(goto.entries())
          .map(([from, target]) => {
            return `
              [states[${states.indexOf(from)}], new Map([
                ${Array.from(target.entries())
                  .map(([symbol, to]) => {
                    return `[
                      "${symbol}",
                      states[${states.indexOf(to)}]
                    ]`;
                  })
                  .join(",\n")}
              ])]
            `;
          })
          .join(",\n")}
      ]);

      function parse(input) {
        const stream = Uint8Array.from(Buffer.from(input));
        let offset = 0;

        let result = nextToken(stream, offset);
        let { state: lookahead, start, end } = result;
        offset = end;

        const stack = [
          {
            state: startState,
            tree: undefined,
          },
        ];

        while (true) {
          const currentState = stack[0].state;

          const actionSet = actions.get(currentState);
          if (!actionSet) {
            throw new Error(\`Invalid state\\n\${printState(currentState)}\`);
          }
          const action = actionSet.get(lookahead);
          if (!action) {
            throw new Error(
              \`Unknown lookahead(\${lookahead}) for state:\\n\${printState(currentState)}\`
            );
          }

          switch (action.op) {
            case "done":
              return stack[0].tree;
            case "shift":
              const stackItem = {
                state: action.state,
                tree: { name: lookahead, start, end },
              };

              result = nextToken(stream, offset);
              lookahead = result.state;
              start = result.start;
              offset = end = result.end;

              stack.unshift(stackItem);

              break;
            case "reduce":
              const item = Array.from(currentState.values()).find(
                (item) =>
                  item.name === action.symbol && item.lookahead === lookahead
              );
              if (!item) {
                throw new Error(
                  \`No valid state \${action.symbol}(\${lookahead}) found\`
                );
              }
              const items = stack.splice(0, item.tokens.length);

              const tree = {
                name: action.symbol,
                // the stack grown from 0 to n -> we need to reverse the
                // parse tree
                items: items.map((r) => r.tree).reverse(),
              };

              const nextState = goto.get(stack[0].state)?.get(action.symbol);
              if (!nextState) {
                throw new Error(
                  \`Unable to lookup goto state (\${action.symbol}) for\\n\${printState(stack[0].state)}\`
                );
              }
              stack.unshift({
                state: nextState,
                tree,
              });

              break;
            default:
              throw new Error("Parser Error");
          }
        }
      }

      module.exports = { parse };
    `;

    const formattedCode = prettier.format(code, {
      filepath: this.options.parserFile,
    });

    await fsp.mkdir(dirname(this.options.parserFile), { recursive: true });
    await fsp.writeFile(this.options.parserFile, formattedCode);
  }
}
