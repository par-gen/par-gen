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
export class CCodeGen {
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
    return join(dir, `${base}-${name}.c`);
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

    const code = `#include "parser.h"

const static unsigned short tokenIds[] = {
  ${tokenIds.map((id, i) => `${id}, // ${tokenNames[i]}`).join("\n\t")}
};

const static unsigned short table[] = {
  ${transitions
    .flatMap(([state, transition]) => {
      const sorted = transition.slice().sort((a, b) => a[0] - b[0]);
      const stateTransitions = sorted
        .map(([symbol, to]) => {
          return `[${state} + 0x${symbol
            .toString(16)
            .padStart(2, "0")}] = ${to},\t\t// state: ${state
            .toString(10)
            .padStart(2, " ")} + symbol: 0x${symbol
            .toString(16)
            .padStart(2, "0")} (${String.fromCharCode(symbol).replace(
            /([\r\n\b\t\f])/,
            (_, /** @type {string} */ match) => {
              /** @type {{ [key: string]: string }} */
              const replace = {
                "\r": "\\r",
                "\n": "\\n",
                "\b": "\\b",
                "\t": "\\t",
                "\f": "\\f",
              };

              return replace[match];
            }
          )}) => state: ${to}`;
        })
        .filter(Boolean);

      return stateTransitions.length > 0
        ? stateTransitions.concat("\n")
        : stateTransitions;
    })
    .join("\n\t")}
};

// the currently matched lexeme
struct lexeme lexeme = {
  0,
  -1,
  -1,
};

void lexer_next(const char *input, const unsigned int offset,
                const unsigned int l)
{
  unsigned int state;
  unsigned int success_state;
  unsigned int success_pos;
  unsigned int i;

  state = ${start};
  success_state = ${errorState};
  success_pos = 0;

  i = offset;
  while (i < l)
  {
    state = table[state + input[i++]];
    if (state <= ${finals[finals.length - 1]})
    {
      success_state = state;
      success_pos = i;
    } else if (state == ${errorState})
    {
      break;
    }
  }

  if (success_state != ${errorState})
  {
    lexeme.state = tokenIds[success_state / ${columns}];
    lexeme.start = offset;
    lexeme.end = success_pos;
    return;
  }

  lexeme.state = (i == l ? ${tokenIds[tokenNames.indexOf(EOF)]} : ${
      tokenIds[tokenNames.indexOf(ERROR)]
    });
  lexeme.start = -1;
  lexeme.end = -1;
};
`;

    return code;
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
    const headerCode = this._headerCode();

    const dir = dirname(this.options.parserFile);
    const ext = extname(this.options.parserFile);
    const base = basename(this.options.parserFile, ext);

    await fsp.mkdir(dirname(this.options.parserFile), { recursive: true });
    await fsp.writeFile(join(dir, `${base}.c`), code);
    await fsp.writeFile(join(dir, `${base}.h`), headerCode);
  }

  /**
   * @private
   * @returns {string}
   */
  _headerCode() {
    return `#define undefined (-1)

struct lexeme
{
  unsigned int state;
  int start;
  int end;
};

extern struct lexeme lexeme;

void lexer_next(const char *input, const unsigned int offset,
                const unsigned int l);
`;
  }

  /**
   * @private
   * @param {ParserData} data
   * @returns {string}
   */
  _parserCode(data) {
    const { states, parserSymbols, actions, goto, start } = data;

    let actionIndex = 0;
    let actionsTableIndex = 0;

    const actionOps = ["shift", "reduce", "done"];

    const code = `#include "parser.h"
#include <time.h>
#include <stdio.h>
#include <stdint.h>
#include <stdlib.h>

struct action
{
  unsigned char op;
  union
  {
    unsigned char state;
    unsigned char symbol;
  };
};

const static unsigned char reducerStates[] = {
  ${states
    .reduce((table, state, stateIndex) => {
      const items = Array.from(state.values());

      parserSymbols.forEach((symbol, symbolIndex) => {
        const matchedItems = items.filter(
          (item) => item.name === symbol && item.marker === item.tokens.length
        );

        parserSymbols.forEach((lookahead, lookaheadIndex) => {
          const item = matchedItems.find(
            (item) => item.lookahead === lookahead
          );

          if (!item) {
            return;
          }

          table.push(
            `[${
              lookaheadIndex * states.length * parserSymbols.length +
              stateIndex * parserSymbols.length +
              symbolIndex
            }] = ${
              item.tokens.length
            }, // 'state ${stateIndex}' -> ${symbol} -> ${lookahead}`
          );
        });
      });
      return table;
    }, /** @type {string[]} */ ([]))
    .join("\n\t")}
};
const static unsigned short actionsTable[] = {
  ${Array.from(actions.entries())
    .flatMap(([from, action]) => {
      return Array.from(action.entries()).map(([symbol, to]) => {
        const action = actionsTableIndex++;
        return `[${
          states.indexOf(from) * parserSymbols.length +
          parserSymbols.indexOf(symbol)
        }] = ${action}, // 'state ${states.indexOf(from)}' -> ${symbol} -> ${
          to.op
        } -> 'action ${action}'`;
      });
    })
    .join("\n\t")}
};
const static unsigned char gotoTable[] = {
  ${Array.from(goto.entries())
    .flatMap(([from, target]) => {
      return Array.from(target.entries()).map(([symbol, to]) => {
        return `[${
          states.indexOf(from) * parserSymbols.length +
          parserSymbols.indexOf(symbol)
        }] = ${states.indexOf(to)}, // 'state ${states.indexOf(to)}'`;
      });
    })
    .join("\n\t")}
};
const static struct action actions[] = {
  ${Array.from(actions.entries())
    .flatMap(([, action]) => {
      return Array.from(action.entries()).map(([, to]) => {
        const i = actionIndex++;

        return `\t// 'action ${i}'
  [${i}].op = ${actionOps.indexOf(to.op)}, // ${to.op};
  ${(() => {
    if (to.state) {
      return `[${i}].state = ${states.indexOf(
        to.state
      )}, // 'state ${states.indexOf(to.state)}'`;
    } else if (to.symbol) {
      return `[${i}].symbol = ${parserSymbols.indexOf(to.symbol)}, // ${
        to.symbol
      }`;
    }
    return "";
  })()}`;
      });
    })
    .join("\n\t")}
};

unsigned int *parse(char *input, unsigned int l, unsigned int *stack,
                    unsigned int *tree)
{
  lexer_next(input, 0, l);

  unsigned int lookahead = lexeme.state;

  stack[0] = 0; // dummy entry
  stack[1] = ${states.indexOf(start)}; // starting state
  unsigned int sp = 1;
  unsigned int tp = 6;
  unsigned int stackItemsToReduce, currentState, actionLookup, nextState;
  const struct action *action;

  while (1)
  {
    currentState = stack[sp];

    actionLookup = actionsTable[currentState * ${
      parserSymbols.length
    } + lookahead];
    action = &actions[actionLookup];

    switch (action->op)
    {
    case ${actionOps.indexOf("done")}: // done
      return tree;
    case ${actionOps.indexOf("shift")}: // shift
      tree[tp + 0] = lookahead;
      tree[tp + 1] = lexeme.start;
      tree[tp + 2] = lexeme.end;
      tree[tp + 3] = 0;
      tree[tp + 4] = 0;
      tree[stack[sp - 1] + 5] = tp;

      stack[sp + 1] = tp;
      sp += 2;
      stack[sp] = action->state;

      lexer_next(input, lexeme.end, l);
      lookahead = lexeme.state;
      break;
    case ${actionOps.indexOf("reduce")}: // reduce
      stackItemsToReduce = reducerStates[lookahead * ${states.length} * ${
      parserSymbols.length
    } + currentState * ${parserSymbols.length} + action->symbol];

      sp -= stackItemsToReduce * 2;

      tree[tp + 0] = action->symbol;
      tree[tp + 1] = -1;
      tree[tp + 2] = -1;
      tree[tp + 3] = stackItemsToReduce;
      tree[tp + 4] = stack[sp + 1];
      tree[stack[sp - 1] + 5] = tp;

      stack[sp + 1] = tp;

      nextState = gotoTable[stack[sp] * ${
        parserSymbols.length
      } + action->symbol];
      sp += 2;
      stack[sp] = nextState;

      break;
    }

    tp += 6;
  }
}

int64_t timespecDiff(struct timespec *timeA_p, struct timespec *timeB_p)
{
  return ((timeA_p->tv_sec * 1000000000) + timeA_p->tv_nsec) -
         ((timeB_p->tv_sec * 1000000000) + timeB_p->tv_nsec);
}

int main()
{
  FILE *infile;
  char *buffer;
  long numbytes;

  infile = fopen("/home/zaubernerd/workspace/par-gen/pull_request.closed.json", "r");
  fseek(infile, 0, SEEK_END);
  numbytes = ftell(infile);
  fseek(infile, 0, SEEK_SET);
  buffer = (char *)malloc(numbytes + 1);
  fread(buffer, sizeof(char), numbytes, infile);

  unsigned int *stack = malloc(2 + numbytes * 2 * sizeof(unsigned int));
  unsigned int *tree = malloc(6 + numbytes * 6 * sizeof(unsigned int));

  struct timespec start, end;

  clock_gettime(CLOCK_MONOTONIC, &start);

  for (int i = 0; i < 10000; i++)
  {
    parse(buffer, numbytes, stack, tree);
  }

  clock_gettime(CLOCK_MONOTONIC, &end);

  printf("Elapsed: %f ms\\n", (double)timespecDiff(&end, &start) / 1000 / 1000);

  fclose(infile);
  free(buffer);

  return 0;
}
`;

    return code;
  }
}
