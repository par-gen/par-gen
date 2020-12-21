import { Epsilon } from "./constants.js";
import { parse, ops } from "./regexp.js";
import debug from "debug";
import { performance } from "perf_hooks";

const log = debug("expound:nfa");

/**
 * @template VALUE
 * @typedef {import('./regexp').ParseTree<VALUE>} ParseTree
 */

/**
 * @template STATE, SYMBOL
 * @typedef {import('./nfa').NFADescription<STATE, SYMBOL>} NFADescription
 */

/**
 * @template INPUT, OUTPUT
 * @typedef {(input: INPUT | undefined) => OUTPUT | undefined} SymbolMapper
 */

/**
 * @template VALUE, STATE
 * @typedef {(n: number, tree: ParseTree<VALUE>) => STATE} StateFactory
 */

/**
 * @param {string} regexp regular expression to create a NFA from
 * @returns {NFADescription<string, string>}
 */
export function fromRegExp(regexp) {
  const tree = parse(regexp);

  return fromRegExpParseTree(tree, {
    symbolMapper: (value) => value,
    stateFactory: (n) => `S${n}`,
  });
}

/**
 * @template STATE, VALUE, SYMBOL
 * @param {ParseTree<VALUE>} tree regular expression parse tree
 * @param {{symbolMapper: SymbolMapper<VALUE, SYMBOL>, stateFactory: StateFactory<VALUE, STATE>}} options
 * @returns {NFADescription<STATE, SYMBOL>}
 */
export function fromRegExpParseTree(tree, { symbolMapper, stateFactory }) {
  const traceStart = performance.now();
  log("enter fromRegExpParseTree");
  try {
    let counter = 0;

    const def = ((node) => {
      switch (node.op) {
        case ops.sequence:
          return sequence(counter, node, symbolMapper, stateFactory);
        case ops.choice:
          return choice(counter, node, symbolMapper, stateFactory);
        case ops.optional:
          return optional(counter, node, symbolMapper, stateFactory);
        case ops.match:
          return match(counter, node, symbolMapper, stateFactory);
      }
      throw new Error(`Unknown op code '${node.op.toString()}'`);
    })(tree);

    return {
      states: def.states,
      symbols: Array.from(new Set(def.symbols)),
      transitions: def.transitions,
      start: def.start,
      finals: [def.final],
    };
  } finally {
    const traceEnd = performance.now();
    log("exit fromRegExpParseTree (took %d ms)", traceEnd - traceStart);
  }
}

/**
 * @template STATE, SYMBOL
 * @typedef {Object} PartialNFA
 * @property {number} counter
 * @property {STATE[]} states
 * @property {SYMBOL[]} symbols
 * @property {NFADescription<STATE, SYMBOL>['transitions']} transitions
 * @property {STATE} start
 * @property {STATE} final
 */

/**
 * @template STATE, VALUE, SYMBOL
 * @param {number} counter
 * @param {ParseTree<VALUE>} tree
 * @param {SymbolMapper<VALUE, SYMBOL>} symbolMapper
 * @param {StateFactory<VALUE, STATE>} stateFactory
 * @returns {PartialNFA<STATE, SYMBOL>}
 */
function sequence(counter, tree, symbolMapper, stateFactory) {
  const nodes = tree.nodes ?? [];
  const start = stateFactory(counter, tree);
  const final = stateFactory(counter + 1, tree);

  /** @type {PartialNFA<STATE, SYMBOL>} */
  const partialStart = {
    counter: counter + 2,
    states: [start, final],
    symbols: [],
    transitions: new Map([[start, new Map([[Epsilon, [final]]])]]),
    start,
    final,
  };

  /**
   * @param {PartialNFA<STATE, SYMBOL>} a
   * @param {PartialNFA<STATE, SYMBOL>} b
   */
  const merge = (a, b) => {
    return /** @type {PartialNFA<STATE, SYMBOL>} */ ({
      counter: b.counter,
      states: [...a.states, ...b.states],
      symbols: [...a.symbols, ...b.symbols],
      transitions: new Map([
        ...a.transitions,
        ...b.transitions,
        [a.final, new Map([[Epsilon, [b.start]]])],
        [b.final, new Map()],
      ]),
      start: a.start,
      final: b.final,
    });
  };

  return nodes.reduce((partial, node) => {
    switch (node.op) {
      case ops.sequence:
        return merge(
          partial,
          sequence(partial.counter, node, symbolMapper, stateFactory)
        );
      case ops.choice:
        return merge(
          partial,
          choice(partial.counter, node, symbolMapper, stateFactory)
        );
      case ops.optional:
        return merge(
          partial,
          optional(partial.counter, node, symbolMapper, stateFactory)
        );
      case ops.match:
        return merge(
          partial,
          match(partial.counter, node, symbolMapper, stateFactory)
        );
    }

    throw new Error(`Unknown op code '${node.op.toString()}'`);
  }, partialStart);
}

/**
 * @template STATE, VALUE, SYMBOL
 * @param {number} counter
 * @param {ParseTree<VALUE>} tree
 * @param {SymbolMapper<VALUE, SYMBOL>} symbolMapper
 * @param {StateFactory<VALUE, STATE>} stateFactory
 * @returns {PartialNFA<STATE, SYMBOL>}
 */
function match(counter, tree, symbolMapper, stateFactory) {
  const value = symbolMapper(tree.value);
  if (!value) {
    throw new Error("Illegal state");
  }
  const start = stateFactory(counter, tree);
  const final = stateFactory(counter + 1, tree);

  return {
    counter: counter + 2,
    states: [start, final],
    symbols: [value],
    transitions: new Map([[start, new Map([[value, [final]]])]]),
    start,
    final,
  };
}

/**
 * @template STATE, VALUE, SYMBOL
 * @param {number} counter
 * @param {ParseTree<VALUE>} tree
 * @param {SymbolMapper<VALUE, SYMBOL>} symbolMapper
 * @param {StateFactory<VALUE, STATE>} stateFactory
 * @returns {PartialNFA<STATE, SYMBOL>}
 */
function choice(counter, tree, symbolMapper, stateFactory) {
  const left = tree.left;
  if (!left) {
    throw new Error("Illegal state");
  }
  const right = tree.right;
  if (!right) {
    throw new Error("Illegal state");
  }
  const start = stateFactory(counter, tree);
  const final = stateFactory(counter + 1, tree);

  /**
   * @param {number} counter
   * @param {ParseTree<VALUE>} node
   */
  const cratePartial = (counter, node) => {
    switch (node.op) {
      case ops.sequence:
        return sequence(counter, node, symbolMapper, stateFactory);
      case ops.choice:
        return choice(counter, node, symbolMapper, stateFactory);
      case ops.optional:
        return optional(counter, node, symbolMapper, stateFactory);
      case ops.match:
        return match(counter, node, symbolMapper, stateFactory);
    }
    throw new Error(`Unknown op code '${node.op.toString()}'`);
  };

  const leftPartial = cratePartial(counter + 2, left);
  const rightPartial = cratePartial(leftPartial.counter, right);

  return {
    counter: rightPartial.counter,
    states: [start, final, ...leftPartial.states, ...rightPartial.states],
    symbols: [...leftPartial.symbols, ...rightPartial.symbols],
    transitions: new Map([
      ...leftPartial.transitions,
      ...rightPartial.transitions,
      [start, new Map([[Epsilon, [leftPartial.start, rightPartial.start]]])],
      [leftPartial.final, new Map([[Epsilon, [final]]])],
      [rightPartial.final, new Map([[Epsilon, [final]]])],
      [final, new Map()],
    ]),
    start,
    final,
  };
}

/**
 * @template STATE, VALUE, SYMBOL
 * @param {number} counter
 * @param {ParseTree<VALUE>} tree
 * @param {SymbolMapper<VALUE, SYMBOL>} symbolMapper
 * @param {StateFactory<VALUE, STATE>} stateFactory
 * @returns {PartialNFA<STATE, SYMBOL>}
 */
function optional(counter, tree, symbolMapper, stateFactory) {
  const node = tree.node;
  if (!node) {
    throw new Error("Illegal state");
  }
  const start = stateFactory(counter, tree);
  const final = stateFactory(counter + 1, tree);
  const nextCounter = counter + 2;

  const partial = ((node) => {
    switch (node.op) {
      case ops.sequence:
        return sequence(nextCounter, node, symbolMapper, stateFactory);
      case ops.choice:
        return choice(nextCounter, node, symbolMapper, stateFactory);
      case ops.optional:
        return optional(nextCounter, node, symbolMapper, stateFactory);
      case ops.match:
        return match(nextCounter, node, symbolMapper, stateFactory);
    }
    throw new Error(`Unknown op code '${node.op.toString()}'`);
  })(node);

  return {
    counter: partial.counter,
    states: [start, final, ...partial.states],
    symbols: partial.symbols,
    transitions: new Map([
      ...partial.transitions,
      [start, new Map([[Epsilon, [final, partial.start]]])],
      [partial.final, new Map([[Epsilon, [final, partial.start]]])],
      [final, new Map()],
    ]),
    start,
    final,
  };
}
