import { Epsilon } from "./constants.js";
import { parse, ops } from "./regexp.js";

/**
 * @param {string} regexp regular expression to create a NFA from
 * @returns {import('./nfa').NFADescription}
 */
export function fromRegExp(regexp) {
  const tree = parse(regexp);

  let counter = 0;

  const def = ((node) => {
    switch (node.op) {
      case ops.sequence:
        return sequence(counter, node);
      case ops.choice:
        return choice(counter, node);
      case ops.optional:
        return optional(counter, node);
      case ops.match:
        return match(counter, node);
    }
    throw new Error(`Unknown op code '${node.op.toString()}'`);
  })(tree);

  return {
    states: def.states,
    symbols: def.symbols,
    transitions: def.transition,
    start: def.start,
    finals: [def.final],
  };
}

/**
 * @typedef {Object} PartialNFA
 * @property {number} counter
 * @property {string[]} states
 * @property {string[]} symbols
 * @property {import('./nfa').NFADescription['transitions']} transition
 * @property {string} start
 * @property {string} final
 */

/**
 * @param {number} counter
 * @param {import('./regexp').ParseTree} tree
 * @returns {PartialNFA}
 */
function sequence(counter, tree) {
  const nodes = tree.nodes ?? [];
  const start = `S${counter}`;
  const final = `S${counter + 1}`;

  /** @type {PartialNFA} */
  const partialStart = {
    counter: counter + 2,
    states: [start, final],
    symbols: [],
    transition: {
      [start]: {
        [Epsilon]: [final],
      },
    },
    start,
    final,
  };

  /**
   * @param {PartialNFA} a
   * @param {PartialNFA} b
   */
  const merge = (a, b) => {
    return /** @type {PartialNFA} */ ({
      counter: b.counter,
      states: [...a.states, ...b.states],
      symbols: [...a.symbols, ...b.symbols],
      transition: {
        ...a.transition,
        ...b.transition,
        [a.final]: {
          [Epsilon]: [b.start],
        },
        [b.final]: {},
      },
      start: a.start,
      final: b.final,
    });
  };

  return nodes.reduce((partial, node) => {
    switch (node.op) {
      case ops.sequence:
        return merge(partial, sequence(partial.counter, node));
      case ops.choice:
        return merge(partial, choice(partial.counter, node));
      case ops.optional:
        return merge(partial, optional(partial.counter, node));
      case ops.match:
        return merge(partial, match(partial.counter, node));
    }

    throw new Error(`Unknown op code '${node.op.toString()}'`);
  }, partialStart);
}

/**
 * @param {number} counter
 * @param {import('./regexp').ParseTree} tree
 * @returns {PartialNFA}
 */
function match(counter, tree) {
  const value = tree.value;
  if (!value) {
    throw new Error("Illegal state");
  }
  const start = `S${counter}`;
  const final = `S${counter + 1}`;

  return {
    counter: counter + 2,
    states: [start, final],
    symbols: [value],
    transition: {
      [start]: {
        [value]: [final],
      },
    },
    start,
    final,
  };
}

/**
 * @param {number} counter
 * @param {import('./regexp').ParseTree} tree
 * @returns {PartialNFA}
 */
function choice(counter, tree) {
  const left = tree.left;
  if (!left) {
    throw new Error("Illegal state");
  }
  const right = tree.right;
  if (!right) {
    throw new Error("Illegal state");
  }
  const start = `S${counter}`;
  const final = `S${counter + 1}`;

  /**
   * @param {number} counter
   * @param {import('./regexp').ParseTree} node
   */
  const cratePartial = (counter, node) => {
    switch (node.op) {
      case ops.sequence:
        return sequence(counter, node);
      case ops.choice:
        return choice(counter, node);
      case ops.optional:
        return optional(counter, node);
      case ops.match:
        return match(counter, node);
    }
    throw new Error(`Unknown op code '${node.op.toString()}'`);
  };

  const leftPartial = cratePartial(counter + 2, left);
  const rightPartial = cratePartial(leftPartial.counter, right);

  return {
    counter: rightPartial.counter,
    states: [start, final, ...leftPartial.states, ...rightPartial.states],
    symbols: [...leftPartial.symbols, ...rightPartial.symbols],
    transition: {
      ...leftPartial.transition,
      ...rightPartial.transition,
      [start]: {
        [Epsilon]: [leftPartial.start, rightPartial.start],
      },
      [leftPartial.final]: {
        [Epsilon]: [final],
      },
      [rightPartial.final]: {
        [Epsilon]: [final],
      },
      [final]: {},
    },
    start,
    final,
  };
}

/**
 * @param {number} counter
 * @param {import('./regexp').ParseTree} tree
 * @returns {PartialNFA}
 */
function optional(counter, tree) {
  const node = tree.node;
  if (!node) {
    throw new Error("Illegal state");
  }
  const start = `S${counter}`;
  const final = `S${counter + 1}`;
  const nextCounter = counter + 2;

  const partial = ((node) => {
    switch (node.op) {
      case ops.sequence:
        return sequence(nextCounter, node);
      case ops.choice:
        return choice(nextCounter, node);
      case ops.optional:
        return optional(nextCounter, node);
      case ops.match:
        return match(nextCounter, node);
    }
    throw new Error(`Unknown op code '${node.op.toString()}'`);
  })(node);

  return {
    counter: partial.counter,
    states: [start, final, ...partial.states],
    symbols: partial.symbols,
    transition: {
      ...partial.transition,
      [start]: {
        [Epsilon]: [partial.start, final],
      },
      [partial.final]: {
        [Epsilon]: [final, partial.start],
      },
      [final]: {},
    },
    start,
    final,
  };
}
