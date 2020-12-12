import { promises as fsp } from "fs";
import { dirname, relative } from "path";
import prettier from "prettier";

/**
 * @typedef {import('./type').LexerData} LexerData
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
export class JavaScriptModuleCodegen {
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

    const uniqueStateNames = Array.from(new Set([EOF, ERROR, ...stateNames]));

    const code = `
      const EOF = "${EOF}";
      const ERROR = "${ERROR}";

      const states = ${JSON.stringify(
        stateNames.map((name) => uniqueStateNames.indexOf(name))
      )};

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
          state: i === input.length ? ${uniqueStateNames.indexOf(
            EOF
          )} : ${uniqueStateNames.indexOf(ERROR)},
          start: -1,
          end: -1,
        };
      };

      export { EOF, next };
    `;

    const formattedCode = prettier.format(code, {
      filepath: this.options.lexerFile,
    });

    await fsp.mkdir(dirname(this.options.lexerFile), { recursive: true });
    await fsp.writeFile(this.options.lexerFile, formattedCode);
  }

  /**
   * @public
   * @param {ParserData} data
   * @returns {Promise<void>}
   */
  async parser(data) {
    const {
      lexerData,
      states,
      terminals,
      nonTerminals,
      actions,
      goto,
      start,
    } = data;

    await this.lexer(lexerData);

    let actionsIndex = 0;

    const uniqueStateNames = Array.from(
      new Set([
        lexerData.tokens.EOF,
        lexerData.tokens.ERROR,
        ...lexerData.stateNames,
      ])
    );
    const allSymbols = Array.from(
      new Set([...uniqueStateNames, ...terminals, ...nonTerminals])
    );

    const code = `
      import { next as nextToken } from './${relative(
        dirname(this.options.parserFile),
        this.options.lexerFile
      )}';


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

      const allSymbols = ${JSON.stringify(allSymbols)};

      const states = [];
      ${states
        .map((state, i) => {
          return `states[${i}] = new Uint16Array(${
            state.size * allSymbols.length * allSymbols.length
          }).fill(-1)\n;
          ${Array.from(state.values())
            .map((item) => {
              const name = allSymbols.indexOf(item.name);
              const lookahead = allSymbols.indexOf(item.lookahead);
              return `states[${i}][${name * allSymbols.length + lookahead}] = ${
                item.tokens.length
              }`;
            })
            .join(";\n")}`;
        })
        .join("\n")}

      const startState = ${states.indexOf(start)};

      const actions = [
        ${Array.from(actions.entries())
          .flatMap(([, action]) => {
            return Array.from(action.entries()).map(([, to]) => {
              return `{
                op: "${to.op}",
                state: ${
                  to.state ? `${states.indexOf(to.state)}` : "undefined"
                },
                symbol: ${
                  to.symbol ? `${allSymbols.indexOf(to.symbol)}` : "undefined"
                },
              }`;
            });
          })
          .join(",\n")}
      ];
      const actionsTable = new Uint16Array(${
        states.length * allSymbols.length
      }).fill(-1);
      ${Array.from(actions.entries())
        .flatMap(([from, action]) => {
          return Array.from(action.entries()).map(([symbol, to]) => {
            return `
            // ${states.indexOf(from)} -> ${symbol} -> ${to.op}
            actionsTable[${
              states.indexOf(from) * allSymbols.length +
              allSymbols.indexOf(symbol)
            }] = ${actionsIndex++};
            `;
          });
        })
        .join("\n")}

      const gotoTable = new Uint16Array(${
        states.length * allSymbols.length
      }).fill(-1);
      ${Array.from(goto.entries())
        .flatMap(([from, target]) => {
          return Array.from(target.entries()).map(([symbol, to]) => {
            return `
              gotoTable[${
                states.indexOf(from) * allSymbols.length +
                allSymbols.indexOf(symbol)
              }] = ${states.indexOf(to)};`;
          });
        })
        .join("\n")}

      export function parse(input) {
        const stream = Uint8Array.from(Buffer.from(input));
        let offset = 0;

        let result = nextToken(stream, offset);
        let { state: lookahead, start, end } = result;
        offset = end;

        const stack = new Array(10);
        stack[0] = {
          state: startState,
          tree: undefined,
        };
        let sp = 0;

        while (true) {
          const currentState = stack[sp].state;

          const action = actions[actionsTable[currentState * ${
            allSymbols.length
          } + lookahead]];

          switch (action.op) {
            case "done":
              return stack[sp].tree;
            case "shift":
              const stackItem = {
                state: action.state,
                tree: { name: allSymbols[lookahead], start, end, items: undefined },
              };

              result = nextToken(stream, offset);
              lookahead = result.state;
              start = result.start;
              offset = end = result.end;

              stack[++sp] = stackItem;

              break;
            case "reduce":
              const numTokens = states[currentState][action.symbol * ${
                allSymbols.length
              } + lookahead];
              if (!numTokens) {
                throw new Error(
                  \`No valid state \${allSymbols[action.symbol]}(\${allSymbols[lookahead]}) found\`
                );
              }

              const items = new Array(numTokens);
              for (let i = 0; i < numTokens; i++) {
                items[i] = stack[i + sp + 1 - numTokens].tree;
              }
              sp -= numTokens;

              const tree = {
                name: allSymbols[action.symbol],
                start: -1,
                end: -1,
                items,
              };

              const nextState = gotoTable[stack[sp].state * ${
                allSymbols.length
              } + action.symbol]
              if (!nextState) {
                throw new Error(
                  \`Unable to lookup goto state (\${allSymbols[action.symbol]}) for\\n\${printState(states[stack[sp].state])}\`
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
      }
    `;

    const formattedCode = prettier.format(code, {
      filepath: this.options.parserFile,
    });

    await fsp.mkdir(dirname(this.options.parserFile), { recursive: true });
    await fsp.writeFile(this.options.parserFile, formattedCode);
  }
}
