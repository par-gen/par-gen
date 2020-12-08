import { DFA, fromNFA, minimize } from "@knisterpeter/expound-dfa";
import { parse } from "@knisterpeter/expound-grammar";
import {
  NFA,
  parseRegExp,
  fromRegExpParseTree,
  createChoiceTree,
  convertNode,
} from "@knisterpeter/expound-nfa";

/**
 * @template T
 * @typedef {import('@knisterpeter/expound-nfa/types/regexp').ParseTree<T>} ParseTree
 */

/**
 * @typedef {ParseTree<{name: string, value: string | undefined}>} NamedParseTree
 */

/**
 * @typedef {NFA<{ n: number; name: string | undefined; }, string>} StringNFA
 */

/**
 * @typedef {DFA<{ n: number; names: string[]; }, string>} StringDFA
 */

export const EOF = "@expound.EOF";
export const ERROR = "@expound.ERROR";

/**
 * @template T
 * @param {T | undefined} value
 * @returns {value is T}
 */
function nonFalsyValues(value) {
  return Boolean(value);
}

/**
 * @param {string} name
 * @returns {(value: string | undefined) => {name: string, value: string | undefined}}
 */
function addTag(name) {
  /**
   * @param {string | undefined} value
   * @returns {{name: string, value: string | undefined}}
   */
  const fn = (value) => ({ name, value });
  return fn;
}

/**
 * @param {string} name
 * @param {string} expression
 * @returns {NamedParseTree}
 */
function parseTerminalRule(name, expression) {
  return convertNode(parseRegExp(expression), addTag(name));
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
  const dfa = new DFA(
    fromNFA(nfa, (n, states) => ({
      n,
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
     * @type {Map<number, {n: number, names: string[]}>}
     */
    const cache = new Map();
    /**
     * @param {number} n
     * @param {{ n: number; names: string[]; }[]} states
     */
    const fn = (n, states) => {
      let state = cache.get(n);
      if (!state) {
        state = {
          n,
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
}

/**
 * @param {string} grammar
 * @returns {StringDFA}
 */
function createAutomata(grammar) {
  const { tokens } = parse(grammar);

  const tree = createCombinedExpression(
    ...tokens.map((token) => parseTerminalRule(token.name, token.expr))
  );

  const nfa = new NFA(
    fromRegExpParseTree(tree, {
      symbolMapper: (value) => value?.value,
      stateFactory: (n, tree) => ({
        n,
        name: tree.value?.name,
      }),
    })
  );

  return createOptimalDFA(nfa);
}

/**
 * @typedef {Object} LexerData
 * @property {Object} tokens
 * @property {string} tokens.EOF
 * @property {string} tokens.ERROR
 * @property {string[]} stateNames
 * @property {number} errorState
 * @property {[number, [number, number][]][]} transitions
 * @property {number} start
 * @property {number[]} finals
 */

/**
 * @param {string} grammar
 * @returns {LexerData}
 */
export function generate(grammar) {
  const dfa = createAutomata(grammar);

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
      .filter(([from, transition]) => transition.every(([, to]) => from === to))
      .map(([state]) => state)
      .find((state) => !finals.includes(state)) ?? -1;

  const stateNames = d.states.map((state) => state.names[0]);

  return {
    tokens: {
      EOF,
      ERROR,
    },
    stateNames,
    errorState,
    transitions,
    start,
    finals,
  };
}
