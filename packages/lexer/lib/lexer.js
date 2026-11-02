import { DFA, fromNFA, minimize } from "@par-gen/dfa";
import { EOF, ERROR, parse } from "@par-gen/grammar";
import {
  Epsilon,
  NFA,
  parseRegExp,
  fromRegExpParseTree,
  createChoiceTree,
  convertNode,
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
    const acceptingNfaStates = new Set(nfa.description.finals);
    let epsChanged = true;
    while (epsChanged) {
      epsChanged = false;
      for (const [from, trans] of nfa.description.transitions.entries()) {
        if (acceptingNfaStates.has(from)) {
          continue;
        }
        const epsTargets = trans.get(Epsilon);
        if (epsTargets && epsTargets.some((t) => acceptingNfaStates.has(t))) {
          acceptingNfaStates.add(from);
          epsChanged = true;
        }
      }
    }

    const dfa = new DFA(
      fromNFA(nfa, (n, states) => {
        const accepting = states
          .filter((s) => acceptingNfaStates.has(s) && s.uid !== undefined)
          .sort((a, b) => (a.uid ?? 0) - (b.uid ?? 0));
        const ordered = accepting.length > 0 ? accepting : states;
        return {
          n,
          uids: ordered.map((state) => state.uid).filter(nonFalsyValues),
          names: ordered.map((state) => state.name).filter(nonFalsyValues),
        };
      })
    );

    /** @type {Map<number | undefined, { n: number; uids: number[]; names: string[]; }[]>} */
    const finalsByToken = new Map();
    for (const final of dfa.description.finals) {
      const uid = final.uids[0];
      let group = finalsByToken.get(uid);
      if (!group) {
        group = [];
        finalsByToken.set(uid, group);
      }
      group.push(final);
    }

    const finalsSet = new Set(dfa.description.finals);
    const initialPartitions = [
      ...finalsByToken.values(),
      dfa.description.states.filter((state) => !finalsSet.has(state)),
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
 * @property {number[]=} skipBytes
 * @property {string[]=} skipTokenNames
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

    /** @type {Map<{ n: number; uids: number[]; names: string[]; }, number>} */
    const stateOffsetMap = new Map();
    for (let i = 0; i < d.states.length; i++) {
      stateOffsetMap.set(d.states[i], i * columns);
    }

    const start = /** @type {number} */ (stateOffsetMap.get(d.start));
    const finals = d.finals.map(
      (final) => /** @type {number} */ (stateOffsetMap.get(final))
    );
    const finalsOffsetSet = new Set(finals);

    const transitions = Array.from(d.transitions.entries()).map(
      ([from, transition]) =>
        /** @type {[number, [number, number][]]} */ ([
          /** @type {number} */ (stateOffsetMap.get(from)),
          /** @type {[number, number][]} */ Array.from(
            transition.entries()
          ).map(([symbol, to]) => [
            symbol.charCodeAt(0),
            /** @type {number} */ (stateOffsetMap.get(to)),
          ]),
        ])
    );

    const errorState =
      transitions
        .filter(([from, transition]) =>
          transition.every(([, to]) => from === to)
        )
        .map(([state]) => state)
        .find((state) => !finalsOffsetSet.has(state)) ?? -1;

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
 * @typedef {Object} EquivalenceClasses
 * @property {Uint8Array} classMap
 * @property {number[]} classRep
 * @property {number} numClasses
 * @property {number} columns
 * @property {number} shift
 */

/**
 * @param {Pick<LexerData, "transitions" | "errorState">} data
 * @returns {EquivalenceClasses}
 */
export function computeEquivalenceClasses(data) {
  const { transitions, errorState } = data;
  const numTransRows = transitions.length;
  const dense = new Int32Array(numTransRows * 256).fill(errorState);
  for (let r = 0; r < numTransRows; r++) {
    const [, transition] = transitions[r];
    const rowOffset = r * 256;
    for (let i = 0; i < transition.length; i++) {
      const [symbol, to] = transition[i];
      dense[rowOffset + symbol] = to;
    }
  }

  const rawClassMap = new Uint8Array(256);
  /** @type {number[]} */
  const rawClassRep = [];
  /** @type {number[]} */
  const rawClassCount = [];
  let numClasses = 0;
  let lastMatchedC = 0;

  for (let b = 0; b < 256; b++) {
    let matchedC = -1;
    if (numClasses > 0) {
      const rep0 = rawClassRep[lastMatchedC];
      let eq0 = true;
      for (let r = 0; r < numTransRows; r++) {
        const rowOffset = r * 256;
        if (dense[rowOffset + b] !== dense[rowOffset + rep0]) {
          eq0 = false;
          break;
        }
      }
      if (eq0) {
        matchedC = lastMatchedC;
      } else {
        for (let c = 0; c < numClasses; c++) {
          if (c === lastMatchedC) {
            continue;
          }
          const rep = rawClassRep[c];
          let eq = true;
          for (let r = 0; r < numTransRows; r++) {
            const rowOffset = r * 256;
            if (dense[rowOffset + b] !== dense[rowOffset + rep]) {
              eq = false;
              break;
            }
          }
          if (eq) {
            matchedC = c;
            break;
          }
        }
      }
    }
    if (matchedC === -1) {
      matchedC = numClasses++;
      rawClassRep.push(b);
      rawClassCount.push(0);
    }
    rawClassMap[b] = matchedC;
    rawClassCount[matchedC]++;
    lastMatchedC = matchedC;
  }

  let maxCountClass = 0;
  for (let c = 1; c < numClasses; c++) {
    if (rawClassCount[c] > rawClassCount[maxCountClass]) {
      maxCountClass = c;
    }
  }

  const classMap = new Uint8Array(256);
  /** @type {number[]} */
  const classRep = new Array(numClasses);
  if (maxCountClass === 0) {
    classMap.set(rawClassMap);
    for (let c = 0; c < numClasses; c++) {
      classRep[c] = rawClassRep[c];
    }
  } else {
    for (let c = 0; c < numClasses; c++) {
      const newC = c === 0 ? maxCountClass : c === maxCountClass ? 0 : c;
      classRep[newC] = rawClassRep[c];
    }
    for (let b = 0; b < 256; b++) {
      const oldC = rawClassMap[b];
      classMap[b] =
        oldC === 0 ? maxCountClass : oldC === maxCountClass ? 0 : oldC;
    }
  }

  const shift = Math.ceil(Math.log2(Math.max(2, numClasses)));
  const columns = 1 << shift;

  return {
    classMap,
    classRep,
    numClasses,
    columns,
    shift,
  };
}

/**
 * @param {string} grammar
 * @returns {LexerData}
 */
export function generate(grammar) {
  const { tokens } = parse(grammar);

  return generateFromTokens(tokens);
}
