import { Epsilon } from "./constants.js";
import { parse, ops } from "./regexp.js";

/**
 * @param {string} regexp regular expression to create a NFA from
 * @returns {import('./nfa').NFADescription<string, string>}
 */
export function fromRegExp(regexp) {
  const tree = parse(regexp);

  return fromRegExpParseTree(tree, (n) => `S${n}`);
}

/**
 * @template STATE, VALUE
 * @param {import('./regexp').ParseTree<VALUE>} tree regular expression parse tree
 * @param {(n: number) => STATE} stateFactory
 * @returns {import('./nfa').NFADescription<STATE, VALUE>}
 */
export function fromRegExpParseTree(tree, stateFactory) {
  let counter = 0;

  const def = ((node) => {
    switch (node.op) {
      case ops.sequence:
        return sequence(counter, node, stateFactory);
      case ops.choice:
        return choice(counter, node, stateFactory);
      case ops.optional:
        return optional(counter, node, stateFactory);
      case ops.match:
        return match(counter, node, stateFactory);
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
}

/**
 * @template STATE, VALUE
 * @typedef {Object} PartialNFA
 * @property {number} counter
 * @property {STATE[]} states
 * @property {VALUE[]} symbols
 * @property {import('./nfa').NFADescription<STATE, VALUE>['transitions']} transitions
 * @property {STATE} start
 * @property {STATE} final
 */

/**
 * @template STATE, VALUE
 * @param {number} counter
 * @param {import('./regexp').ParseTree<VALUE>} tree
 * @param {(n: number) => STATE} stateFactory
 * @returns {PartialNFA<STATE, VALUE>}
 */
function sequence(counter, tree, stateFactory) {
  const nodes = tree.nodes ?? [];
  const start = stateFactory(counter);
  const final = stateFactory(counter + 1);

  /** @type {PartialNFA<STATE, VALUE>} */
  const partialStart = {
    counter: counter + 2,
    states: [start, final],
    symbols: [],
    transitions: new Map([[start, new Map([[Epsilon, [final]]])]]),
    start,
    final,
  };

  /**
   * @param {PartialNFA<STATE, VALUE>} a
   * @param {PartialNFA<STATE, VALUE>} b
   */
  const merge = (a, b) => {
    return /** @type {PartialNFA<STATE, VALUE>} */ ({
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
        return merge(partial, sequence(partial.counter, node, stateFactory));
      case ops.choice:
        return merge(partial, choice(partial.counter, node, stateFactory));
      case ops.optional:
        return merge(partial, optional(partial.counter, node, stateFactory));
      case ops.match:
        return merge(partial, match(partial.counter, node, stateFactory));
    }

    throw new Error(`Unknown op code '${node.op.toString()}'`);
  }, partialStart);
}

/**
 * @template STATE, VALUE
 * @param {number} counter
 * @param {import('./regexp').ParseTree<VALUE>} tree
 * @param {(n: number) => STATE} stateFactory
 * @returns {PartialNFA<STATE, VALUE>}
 */
function match(counter, tree, stateFactory) {
  const value = tree.value;
  if (!value) {
    throw new Error("Illegal state");
  }
  const start = stateFactory(counter);
  const final = stateFactory(counter + 1);

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
 * @template STATE, VALUE
 * @param {number} counter
 * @param {import('./regexp').ParseTree<VALUE>} tree
 * @param {(n: number) => STATE} stateFactory
 * @returns {PartialNFA<STATE, VALUE>}
 */
function choice(counter, tree, stateFactory) {
  const left = tree.left;
  if (!left) {
    throw new Error("Illegal state");
  }
  const right = tree.right;
  if (!right) {
    throw new Error("Illegal state");
  }
  const start = stateFactory(counter);
  const final = stateFactory(counter + 1);

  /**
   * @param {number} counter
   * @param {import('./regexp').ParseTree<VALUE>} node
   */
  const cratePartial = (counter, node) => {
    switch (node.op) {
      case ops.sequence:
        return sequence(counter, node, stateFactory);
      case ops.choice:
        return choice(counter, node, stateFactory);
      case ops.optional:
        return optional(counter, node, stateFactory);
      case ops.match:
        return match(counter, node, stateFactory);
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
 * @template STATE, VALUE
 * @param {number} counter
 * @param {import('./regexp').ParseTree<VALUE>} tree
 * @param {(n: number) => STATE} stateFactory
 * @returns {PartialNFA<STATE, VALUE>}
 */
function optional(counter, tree, stateFactory) {
  const node = tree.node;
  if (!node) {
    throw new Error("Illegal state");
  }
  const start = stateFactory(counter);
  const final = stateFactory(counter + 1);
  const nextCounter = counter + 2;

  const partial = ((node) => {
    switch (node.op) {
      case ops.sequence:
        return sequence(nextCounter, node, stateFactory);
      case ops.choice:
        return choice(nextCounter, node, stateFactory);
      case ops.optional:
        return optional(nextCounter, node, stateFactory);
      case ops.match:
        return match(nextCounter, node, stateFactory);
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
