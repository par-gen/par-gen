import { Epsilon } from "./constants.js";
import { parse } from "@par-gen/regexp";
import debug from "debug";
import { performance } from "perf_hooks";

const log = debug("par-gen:nfa");

/**
 * @typedef {import('@par-gen/regexp/types/generated/parser').Node} Node
 */

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
 * @typedef {(n: number, tree: Node) => STATE} StateFactory
 */

/**
 * @param {string} regexp regular expression to create a NFA from
 * @returns {NFADescription<string, string>}
 */
export function fromRegExp(regexp) {
  const tree = parse(regexp);

  return fromRegExpParseTree(tree, {
    symbolMapper: (value) => value?.value,
    stateFactory: (n) => `S${n}`,
  });
}

/**
 * @template STATE, VALUE, SYMBOL
 * @param {Node} tree regular expression parse tree
 * @param {{symbolMapper: SymbolMapper<VALUE, SYMBOL>, stateFactory: StateFactory<VALUE, STATE>}} options
 * @returns {NFADescription<STATE, SYMBOL>}
 */
export function fromRegExpParseTree(tree, { symbolMapper, stateFactory }) {
  const traceStart = performance.now();
  log("enter fromRegExpParseTree");
  try {
    let counter = 0;

    const def = parseIntermediateAST(counter, tree, symbolMapper, stateFactory);

    const result = {
      states: def.states,
      symbols: Array.from(new Set(def.symbols)),
      transitions: def.transitions,
      start: def.start,
      finals: [def.final],
    };

    return result;
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
 * @param {Node} tree
 * @param {SymbolMapper<VALUE, SYMBOL>} symbolMapper
 * @param {StateFactory<VALUE, STATE>} stateFactory
 * @returns {PartialNFA<STATE, SYMBOL>}
 */
function parseIntermediateAST(counter, tree, symbolMapper, stateFactory) {
  switch (tree.name) {
    case "RegExp":
    case "Expression":
      return parseIntermediateAST(
        counter,
        tree.items[0],
        symbolMapper,
        stateFactory
      );
    case "Sequence":
      return sequence(counter, tree, symbolMapper, stateFactory);
    case "Union":
      return union(counter, tree, symbolMapper, stateFactory);
    case "Atom":
      if (tree.items[tree.items.length - 1].name === "QUANTIFIER") {
        return optional(counter, tree, symbolMapper, stateFactory);
      }
      return atom(counter, tree, symbolMapper, stateFactory);
  }
  throw new Error(`Unknown op code '${tree.name.toString()}'`);
}

/**
 * @template STATE, VALUE, SYMBOL
 * @param {number} counter
 * @param {Node} tree
 * @param {SymbolMapper<VALUE, SYMBOL>} symbolMapper
 * @param {StateFactory<VALUE, STATE>} stateFactory
 * @returns {PartialNFA<STATE, SYMBOL>}
 */
function sequence(counter, tree, symbolMapper, stateFactory) {
  const nodes = tree.items ?? [];
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
    switch (node.name) {
      case "Sequence":
        return merge(
          partial,
          sequence(partial.counter, node, symbolMapper, stateFactory)
        );
      case "Atom":
        if (node.items[node.items.length - 1].name === "QUANTIFIER") {
          return merge(
            partial,
            optional(partial.counter, node, symbolMapper, stateFactory)
          );
        }
        return merge(
          partial,
          atom(partial.counter, node, symbolMapper, stateFactory)
        );
    }

    throw new Error(`Unknown op code '${node.name.toString()}'`);
  }, partialStart);
}

/**
 * @template STATE, VALUE, SYMBOL
 * @param {number} counter
 * @param {Node} tree
 * @param {SymbolMapper<VALUE, SYMBOL>} symbolMapper
 * @param {StateFactory<VALUE, STATE>} stateFactory
 * @returns {PartialNFA<STATE, SYMBOL>}
 */
function union(counter, tree, symbolMapper, stateFactory) {
  const left = tree.items[0];
  if (!left) {
    throw new Error("Illegal state");
  }
  let right = tree.items[2];
  if (!right) {
    right = {
      name: "Sequence",
      start: -1,
      end: -1,
      value: undefined,
      items: undefined,
    };
  }
  const start = stateFactory(counter, tree);
  const final = stateFactory(counter + 1, tree);

  /**
   * @param {number} counter
   * @param {Node} node
   */
  const cratePartial = (counter, node) => {
    switch (node.name) {
      case "Sequence":
        return sequence(counter, node, symbolMapper, stateFactory);
      case "Union":
        return union(counter, node, symbolMapper, stateFactory);
      case "Atom":
        if (node.items[node.items.length - 1].name === "QUANTIFIER") {
          return optional(counter, node, symbolMapper, stateFactory);
        }
        return atom(counter, node, symbolMapper, stateFactory);
    }
    throw new Error(`Unknown op code '${node.name.toString()}'`);
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
 * @param {Node} tree
 * @param {SymbolMapper<VALUE, SYMBOL>} symbolMapper
 * @param {StateFactory<VALUE, STATE>} stateFactory
 * @returns {PartialNFA<STATE, SYMBOL>}
 */
function optional(counter, tree, symbolMapper, stateFactory) {
  const node = tree.items[0];
  if (!node) {
    throw new Error("Illegal state");
  }
  const start = stateFactory(counter, tree);
  const final = stateFactory(counter + 1, tree);
  const nextCounter = counter + 2;

  const partial = ((node) => {
    switch (node.name) {
      case "Group":
        return group(nextCounter, node, symbolMapper, stateFactory);
      case "Character":
        return atom(nextCounter, node, symbolMapper, stateFactory);
      case "CharacterClass":
        return characterclass(nextCounter, node, symbolMapper, stateFactory);
    }
    throw new Error(`Unknown op code '${node.name.toString()}'`);
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

/**
 * @template STATE, VALUE, SYMBOL
 * @param {number} counter
 * @param {Node} tree
 * @param {SymbolMapper<VALUE, SYMBOL>} symbolMapper
 * @param {StateFactory<VALUE, STATE>} stateFactory
 * @returns {PartialNFA<STATE, SYMBOL>}
 */
function atom(counter, tree, symbolMapper, stateFactory) {
  const node = tree.items[0];

  switch (node.name) {
    case "Group":
      return group(counter, node, symbolMapper, stateFactory);
    case "CharacterClass":
      return characterclass(counter, node, symbolMapper, stateFactory);
    case "Character":
      if (node.items[node.items.length - 1].name === "EscapedCharacter") {
        return atom(counter, node.items[1], symbolMapper, stateFactory);
      }
      return atom(counter, node, symbolMapper, stateFactory);
  }
  // todo: update generic types
  const value = symbolMapper(
    /** @type {*} */ (Buffer.isBuffer(tree.value)
      ? { value: decode(tree.value.toString()) }
      : tree.value)
  );
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
 * @param {Node} tree
 * @param {SymbolMapper<VALUE, SYMBOL>} symbolMapper
 * @param {StateFactory<VALUE, STATE>} stateFactory
 * @returns {PartialNFA<STATE, SYMBOL>}
 */
function group(counter, tree, symbolMapper, stateFactory) {
  const node = tree.items[1];

  switch (node.name) {
    case "Sequence":
      return sequence(counter, node, symbolMapper, stateFactory);
    case "Union":
      return union(counter, node, symbolMapper, stateFactory);
    case "Atom":
      if (node.items[node.items.length - 1].name === "QUANTIFIER") {
        return optional(counter, node, symbolMapper, stateFactory);
      }
      return atom(counter, node, symbolMapper, stateFactory);
  }

  throw new Error(`Unknown op code '${node.name.toString()}'`);
}

/**
 * @template STATE, VALUE, SYMBOL
 * @param {number} counter
 * @param {Node} tree
 * @param {SymbolMapper<VALUE, SYMBOL>} symbolMapper
 * @param {StateFactory<VALUE, STATE>} stateFactory
 * @returns {PartialNFA<STATE, SYMBOL>}
 */
function characterclass(counter, tree, symbolMapper, stateFactory) {
  const negative = tree.items[1].name === "CARET";
  const node = tree.items[negative ? 2 : 1];

  switch (node.name) {
    case "CharacterClassCharacters":
      return characterclasscharacters(
        counter,
        node,
        symbolMapper,
        stateFactory,
        negative
      );
  }
  throw new Error(`Unknown op code '${node.name.toString()}'`);
}

/**
 * @template STATE, VALUE, SYMBOL
 * @param {number} counter
 * @param {Node} tree
 * @param {SymbolMapper<VALUE, SYMBOL>} symbolMapper
 * @param {StateFactory<VALUE, STATE>} stateFactory
 * @param {boolean} negative
 * @returns {PartialNFA<STATE, SYMBOL>}
 */
function characterclasscharacters(
  counter,
  tree,
  symbolMapper,
  stateFactory,
  negative
) {
  function unionize(node) {
    if (node.name === "CharacterClassCharacter") {
      return node.items[0].value.toString("utf-8");
    } else if (node.items) {
      return node.items.flatMap((item) => unionize(item));
    }
  }

  let list = unionize(tree);

  if (negative) {
    const positiveList = list;
    list = [];
    for (let i = 0; i <= 255; i++) {
      const char = String.fromCharCode(i);
      if (!positiveList.includes(char)) {
        list.push(char);
      }
    }
  }

  const expression = list.map(encode).join("|");

  return parseIntermediateAST(
    counter,
    parse(expression),
    symbolMapper,
    stateFactory
  );
}

/**
 * @param {string} character
 * @returns {string}
 */
function encode(character) {
  if (character.startsWith("\\x")) {
    return character;
  }

  return `\\x${character.charCodeAt(0).toString(16).padStart(2, "0")}`;
}

/**
 * @param {string} string
 * @returns {string}
 */
function decode(string) {
  if (!string.startsWith("\\x")) {
    return string;
  }

  return String.fromCharCode(parseInt(`0${string.slice(1)}`, 16));
}
