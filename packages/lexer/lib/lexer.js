import { DFA, fromNFA, minimize } from "@par-gen/dfa";
import { EOF, ERROR, parse } from "@par-gen/grammar";
import {
  NFA,
  parseRegExp,
  fromRegExpParseTree,
  createChoiceTree,
  convertNode,
  print,
} from "@par-gen/nfa";
import debug from "debug";
import { performance } from "perf_hooks";

export { EOF, ERROR };

const log = debug("par-gen:lexer");

/**
 * @typedef {import('@par-gen/grammar/types/parser').Token} Token
 */

/**
 * @template T
 * @typedef {import('@par-gen/nfa/types/regexp').ParseTree<T>} ParseTree
 */

/**
 * @typedef {ParseTree<{uid: number, name: string, value: string | undefined}>} NamedParseTree
 */

/**
 * @typedef {NFA<{ n: number; uid: number | undefined, name: string | undefined; }, string>} StringNFA
 */

/**
 * @typedef {DFA<{ n: number; uids: number[], names: string[]; }, string>} StringDFA
 */

/**
 * @template T
 * @param {T | undefined} value
 * @returns {value is T}
 */
function nonFalsyValues(value) {
  return value !== null && value !== undefined;
}

/**
 * @param {number} uid
 * @param {string} name
 * @returns {(value: string | undefined) => {uid: number, name: string, value: string | undefined}}
 */
function addTag(uid, name) {
  /**
   * @param {string | undefined} value
   * @returns {{uid: number, name: string, value: string | undefined}}
   */
  const fn = (value) => ({ uid, name, value });
  return fn;
}

/**
 * @param {number} uid
 * @param {string} name
 * @param {string} expression
 * @returns {NamedParseTree}
 */
function parseTerminalRule(uid, name, expression) {
  return convertNode(parseRegExp(expression), addTag(uid, name));
}

/**
 * @param {NamedParseTree[]} trees
 */
function createCombinedExpression(...trees) {
  return trees.slice(1).reduce((combined, tree) => {
    return createChoiceTree(combined, tree);
  }, trees[0]);
}

/**
 * @param {StringNFA} nfa
 * @returns {StringDFA}
 */
function createOptimalDFA(nfa) {
  const traceStart = performance.now();
  log("enter createOptimalDFA");
  try {
    const dfa = new DFA(
      fromNFA(nfa, (n, states) => ({
        n,
        uids: states.map((state) => state.uid).filter(nonFalsyValues),
        names: states.map((state) => state.name).filter(nonFalsyValues),
      }))
    );

    const initialPartitions = [
      ...dfa.description.finals.map((final) => [final]),
      dfa.description.states.filter(
        (state) => !dfa.description.finals.includes(state)
      ),
    ];

    const optimizedStateMapper = () => {
      /**
       * @type {Map<number, {n: number, uids: number[], names: string[]}>}
       */
      const cache = new Map();
      /**
       * @param {number} n
       * @param {{ n: number; uids: number[]; names: string[]; }[]} states
       */
      const fn = (n, states) => {
        let state = cache.get(n);
        if (!state) {
          state = {
            n,
            uids: states.flatMap((s) => s.uids).filter(nonFalsyValues),
            names: states.flatMap((s) => s.names).filter(nonFalsyValues),
          };
          cache.set(n, state);
        }
        return state;
      };
      return fn;
    };

    const minimal = minimize(dfa, {
      partitionizer: () => initialPartitions,
      stateMapper: optimizedStateMapper(),
    });

    return new DFA(minimal);
  } finally {
    const traceEnd = performance.now();
    log("exit createOptimalDFA (took %d ms)", traceEnd - traceStart);
  }
}

/**
 * @param {Token[]} tokens
 * @returns {StringDFA}
 */
function createAutomata(tokens) {
  const traceStart = performance.now();
  log("enter createAutomata");
  try {
    const tree = createCombinedExpression(
      ...tokens
        .filter((token) => token.name !== EOF && token.name !== ERROR)
        .map((token) => parseTerminalRule(token.uid, token.name, token.expr))
    );

    console.log(
      tree,
      tokens,
      print(tree, (value) => {
        if (value?.value === "\n") {
          return "\\n";
        } else if (value?.value === "\t") {
          return "\\t";
        } else if (value?.value === "\r") {
          return "\\r";
        } else if (value?.value === "{") {
          return "\\{";
        } else if (value?.value === "}") {
          return "\\}";
        } else if (value?.value === "[") {
          return "\\[";
        } else if (value?.value === "]") {
          return "\\]";
        } else if (value?.value === "(") {
          return "\\(";
        } else if (value?.value === ")") {
          return "\\)";
        } else if (value?.value === ".") {
          return "\\.";
        } else if (value?.value === "+") {
          return "\\+";
        } else if (value?.value === "*") {
          return "\\*";
        } else if (value?.value === "|") {
          return "\\|";
        } else if (value?.value === "?") {
          return "\\?";
        } else if (value?.value === "/") {
          return "\\/";
        }
        return value.value
          ?.split("")
          .map((c) => c.charCodeAt(0))
          .map((c) =>
            c < 32 || c > 126
              ? `\\x${c.toString(16).padStart(2, "0")}`
              : String.fromCharCode(c)
          )
          .join("");
      })
    );

    const nfa = new NFA(
      fromRegExpParseTree(tree, {
        symbolMapper: (value) => value?.value,
        stateFactory: (n, tree) => ({
          n,
          uid: tree.value?.uid,
          name: tree.value?.name,
        }),
      })
    );

    return createOptimalDFA(nfa);
  } finally {
    const traceEnd = performance.now();
    log("exit createAutomata (took %d ms)", traceEnd - traceStart);
  }
}

/**
 * @typedef {Object} LexerData
 * @property {Object} tokens
 * @property {string} tokens.EOF
 * @property {string} tokens.ERROR
 * @property {(number | undefined)[]} tokenIds
 * @property {(string | undefined)[]} tokenNames
 * @property {number} errorState
 * @property {[number, [number, number][]][]} transitions
 * @property {number} start
 * @property {number[]} finals
 */

/**
 * @param {Token[]} tokens
 * @returns {LexerData}
 */
export function generateFromTokens(tokens) {
  const traceStart = performance.now();
  log("enter generateFromTokens");
  try {
    const eofToken = tokens.find((token) => token.name === EOF);
    if (!eofToken) {
      throw new Error(`Unable to find ${EOF} token`);
    }
    const errorToken = tokens.find((token) => token.name === ERROR);
    if (!errorToken) {
      throw new Error(`Unable to find ${ERROR} token`);
    }

    const dfa = createAutomata(tokens);

    const d = dfa.description;

    const columns = 256;

    const start = d.states.indexOf(d.start) * columns;
    const finals = d.finals.map((final) => d.states.indexOf(final) * columns);

    const transitions = Array.from(d.transitions.entries()).map(
      ([from, transition]) =>
        /** @type {[number, [number, number][]]} */ ([
          d.states.indexOf(from) * columns,
          /** @type {[number, number][]} */ Array.from(
            transition.entries()
          ).map(([symbol, to]) => [
            symbol.charCodeAt(0),
            d.states.indexOf(to) * columns,
          ]),
        ])
    );

    const errorState =
      transitions
        .filter(([from, transition]) =>
          transition.every(([, to]) => from === to)
        )
        .map(([state]) => state)
        .find((state) => !finals.includes(state)) ?? -1;

    const tokenIds = [
      ...d.states.map((state) => state.uids[0]),
      eofToken.uid,
      errorToken.uid,
    ];
    const tokenNames = [
      ...d.states.map((state) => state.names[0]),
      eofToken.name,
      errorToken.name,
    ];

    return {
      tokens: {
        EOF,
        ERROR,
      },
      tokenIds,
      tokenNames,
      errorState,
      transitions,
      start,
      finals,
    };
  } finally {
    const traceEnd = performance.now();
    log("exit generateFromTokens (took %d ms)", traceEnd - traceStart);
  }
}

/**
 * @param {string} grammar
 * @returns {LexerData}
 */
export function generate(grammar) {
  const { tokens } = parse(grammar);

  return generateFromTokens(tokens);
}
