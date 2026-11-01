import { Epsilon } from "./constants.js";
import { parse } from "@par-gen/regexp";
import debug from "debug";
import { performance } from "perf_hooks";

const log = debug("par-gen:nfa");

/**
 * @template VALUE
 * @typedef {import('./regexp').ParseTree<VALUE>} ParseTree
 */

/**
 * @template STATE, SYMBOL
 * @typedef {import('./nfa').NFADescription<STATE, SYMBOL>} NFADescription
 */

/**
 * @template VALUE, SYMBOL
 * @typedef {(value: VALUE | undefined) => SYMBOL | undefined} SymbolMapper
 */

/**
 * @template VALUE, STATE
 * @typedef {(n: number, tree: ParseTree<VALUE>) => STATE} StateFactory
 */

/**
 * @param {string} regexp regular expression
 * @returns {NFADescription<string, string>}
 */
export function fromRegExp(regexp) {
  const tree = /** @type {ParseTree<{ value: string }>} */ (
    /** @type {*} */ (parse(regexp))
  );

  return fromRegExpParseTree(tree, {
    symbolMapper: (value) => value?.value ?? /** @type {*} */ (value),
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
    const counter = 0;

    const def = parseIntermediateAST(counter, tree, symbolMapper, stateFactory);

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
 * @template VALUE
 * @param {ParseTree<VALUE> | undefined} node
 * @returns {string | undefined}
 */
function extractRawString(node) {
  if (!node) {
    return undefined;
  }
  const val = node.value;
  if (Buffer.isBuffer(val)) {
    return val.toString("utf-8");
  }
  if (typeof val === "string") {
    return val;
  }
  if (
    typeof val === "object" &&
    val !== null &&
    "value" in val &&
    typeof (/** @type {*} */ (val).value) === "string"
  ) {
    return /** @type {*} */ (val).value;
  }
  return undefined;
}

/**
 * @template VALUE
 * @param {VALUE | undefined} rawVal
 * @param {string} decodedChar
 * @returns {VALUE}
 */
function replaceRawValue(rawVal, decodedChar) {
  if (
    typeof rawVal === "object" &&
    rawVal !== null &&
    !Buffer.isBuffer(rawVal)
  ) {
    return /** @type {VALUE} */ ({
      ...rawVal,
      value: decodedChar,
    });
  }
  return /** @type {VALUE} */ (/** @type {*} */ ({ value: decodedChar }));
}

/**
 * @param {string} ch
 * @returns {string}
 */
function decodeEscapedChar(ch) {
  switch (ch) {
    case "n":
      return "\n";
    case "r":
      return "\r";
    case "t":
      return "\t";
    case "b":
      return "\b";
    case "f":
      return "\f";
    default:
      return ch;
  }
}

/**
 * @template VALUE
 * @param {ParseTree<VALUE>} hexNode
 * @returns {string}
 */
function decodeHexEscapeNode(hexNode) {
  const items = hexNode.items ?? [];
  const d1 = extractRawString(items[2]) ?? "0";
  const d2 = extractRawString(items[3]) ?? "0";
  return String.fromCharCode(parseInt(d1 + d2, 16));
}

/**
 * @template STATE, VALUE, SYMBOL
 * @param {number} counter
 * @param {ParseTree<VALUE>} tree
 * @param {SymbolMapper<VALUE, SYMBOL>} symbolMapper
 * @param {StateFactory<VALUE, STATE>} stateFactory
 * @returns {PartialNFA<STATE, SYMBOL>}
 */
function parseIntermediateAST(counter, tree, symbolMapper, stateFactory) {
  switch (tree.name) {
    case "RegExp":
    case "Expression": {
      const child = tree.items?.[0];
      if (!child) {
        throw new Error("Illegal state");
      }
      return parseIntermediateAST(counter, child, symbolMapper, stateFactory);
    }
    case "Sequence":
      return sequence(counter, tree, symbolMapper, stateFactory);
    case "Union":
      return union(counter, tree, symbolMapper, stateFactory);
    case "Atom": {
      const items = tree.items ?? [];
      if (items.length > 1 && items[items.length - 1].name === "QUANTIFIER") {
        return quantified(counter, tree, symbolMapper, stateFactory);
      }
      return atom(counter, tree, symbolMapper, stateFactory);
    }
    case "Group":
      return group(counter, tree, symbolMapper, stateFactory);
    case "Character":
    case "CharacterClass":
    case "DOT":
      return atom(counter, tree, symbolMapper, stateFactory);
  }
  throw new Error(`Unknown op code '${tree.name.toString()}'`);
}

/**
 * @template VALUE
 * @param {ParseTree<VALUE>} node
 * @returns {ParseTree<VALUE>[]}
 */
function flattenSequenceNodes(node) {
  const items = node.items ?? [];
  /** @type {ParseTree<VALUE>[]} */
  const flat = [];
  for (const child of items) {
    if (child.name === "Sequence") {
      flat.push(...flattenSequenceNodes(child));
    } else {
      flat.push(child);
    }
  }
  return flat;
}

/**
 * @template STATE, VALUE, SYMBOL
 * @param {number} counter
 * @param {ParseTree<VALUE>} tree
 * @param {SymbolMapper<VALUE, SYMBOL>} symbolMapper
 * @param {StateFactory<VALUE, STATE>} stateFactory
 * @returns {PartialNFA<STATE, SYMBOL>}
 */
function sequence(counter, tree, symbolMapper, stateFactory) {
  const nodes = flattenSequenceNodes(tree);
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
    return merge(
      partial,
      parseIntermediateAST(partial.counter, node, symbolMapper, stateFactory)
    );
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
function union(counter, tree, symbolMapper, stateFactory) {
  const items = tree.items ?? [];
  const left = items[0];
  if (!left) {
    throw new Error("Illegal state");
  }
  /** @type {ParseTree<VALUE>} */
  const right = items[2] ?? {
    name: "Sequence",
    start: -1,
    end: -1,
    value: tree.value,
    items: [],
  };

  const start = stateFactory(counter, tree);
  const final = stateFactory(counter + 1, tree);

  const leftPartial = parseIntermediateAST(
    counter + 2,
    left,
    symbolMapper,
    stateFactory
  );
  const rightPartial = parseIntermediateAST(
    leftPartial.counter,
    right,
    symbolMapper,
    stateFactory
  );

  return {
    counter: rightPartial.counter,
    states: [start, final, ...leftPartial.states, ...rightPartial.states],
    symbols: [...leftPartial.symbols, ...rightPartial.symbols],
    transitions: new Map([
      [start, new Map([[Epsilon, [leftPartial.start, rightPartial.start]]])],
      ...Array.from(leftPartial.transitions.entries()),
      ...Array.from(rightPartial.transitions.entries()),
      [leftPartial.final, new Map([[Epsilon, [final]]])],
      [rightPartial.final, new Map([[Epsilon, [final]]])],
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
function quantified(counter, tree, symbolMapper, stateFactory) {
  const items = tree.items ?? [];
  const node = items[0];
  const quantifierNode = items[items.length - 1];
  if (!node || !quantifierNode) {
    throw new Error("Illegal state");
  }
  const quantifier = extractRawString(quantifierNode) ?? "*";

  const start = stateFactory(counter, tree);
  const final = stateFactory(counter + 1, tree);
  const nextCounter = counter + 2;

  const partial = parseIntermediateAST(
    nextCounter,
    node,
    symbolMapper,
    stateFactory
  );

  const startTargets =
    quantifier === "+" ? [partial.start] : [partial.start, final];
  const finalTargets =
    quantifier === "?" ? [final] : [final, partial.start];

  return {
    counter: partial.counter,
    states: [start, final, ...partial.states],
    symbols: [...partial.symbols],
    transitions: new Map([
      ...Array.from(partial.transitions.entries()),
      [start, new Map([[Epsilon, startTargets]])],
      [partial.final, new Map([[Epsilon, finalTargets]])],
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
function atom(counter, tree, symbolMapper, stateFactory) {
  const node = tree.name === "Atom" ? tree.items?.[0] : tree;
  if (!node) {
    throw new Error("Illegal state");
  }

  switch (node.name) {
    case "Group":
      return group(counter, node, symbolMapper, stateFactory);
    case "CharacterClass":
      return characterClass(counter, node, symbolMapper, stateFactory);
    case "DOT":
      return dotWildcard(counter, node, symbolMapper, stateFactory);
    case "Character": {
      const charItems = node.items ?? [];
      let symbolValue = node.value;
      if (extractRawString(node) !== undefined) {
        let decoded = "";
        if (charItems[0]?.name === "HexEscape") {
          decoded = decodeHexEscapeNode(charItems[0]);
        } else if (charItems.length === 4) {
          decoded = decodeHexEscapeNode(node);
        } else if (charItems.length === 2) {
          decoded = decodeEscapedChar(extractRawString(charItems[1]) ?? "");
        } else {
          decoded = extractRawString(charItems[0] ?? node) ?? "";
        }
        symbolValue = replaceRawValue(node.value, decoded);
      }

      const value = symbolMapper(symbolValue);
      if (value === undefined || value === null) {
        throw new Error("Illegal state");
      }
      const start = stateFactory(counter, node);
      const final = stateFactory(counter + 1, node);

      return {
        counter: counter + 2,
        states: [start, final],
        symbols: [value],
        transitions: new Map([[start, new Map([[value, [final]]])]]),
        start,
        final,
      };
    }
  }

  throw new Error(`Unknown op code '${node.name.toString()}'`);
}

/**
 * @template STATE, VALUE, SYMBOL
 * @param {number} counter
 * @param {ParseTree<VALUE>} tree
 * @param {SymbolMapper<VALUE, SYMBOL>} symbolMapper
 * @param {StateFactory<VALUE, STATE>} stateFactory
 * @returns {PartialNFA<STATE, SYMBOL>}
 */
function group(counter, tree, symbolMapper, stateFactory) {
  const node = tree.items?.[1];
  if (!node) {
    throw new Error("Illegal state");
  }
  return parseIntermediateAST(counter, node, symbolMapper, stateFactory);
}

/**
 * @template VALUE
 * @param {ParseTree<VALUE>} endpoint
 * @returns {string}
 */
function decodeRangeEndpoint(endpoint) {
  if (endpoint.name === "HexEscape") {
    return decodeHexEscapeNode(endpoint);
  }
  return extractRawString(endpoint) ?? "";
}

/**
 * @template VALUE
 * @param {ParseTree<VALUE>} tree
 * @returns {string[]}
 */
function collectCharacterClassChars(tree) {
  /** @type {ParseTree<VALUE>[]} */
  const ccNodes = [];

  /** @param {ParseTree<VALUE>} n */
  function walk(n) {
    if (n.name === "CharacterClassCharacter") {
      ccNodes.push(n);
    } else if (n.items) {
      for (const item of n.items) {
        walk(item);
      }
    }
  }
  walk(tree);

  /** @type {string[]} */
  const chars = [];
  for (const cc of ccNodes) {
    const items = cc.items ?? [];
    if (items.length === 2) {
      // BACKSLASH followed by DASH, CARET, EscapedCharacter, etc.
      const raw = extractRawString(items[1]) ?? "";
      chars.push(decodeEscapedChar(raw));
    } else if (items.length === 1) {
      const child = items[0];
      if (child.name === "CharacterClassRange") {
        const rangeItems = child.items ?? [];
        const fromChar = decodeRangeEndpoint(rangeItems[0]);
        const toChar = decodeRangeEndpoint(rangeItems[2]);
        for (
          let c = fromChar.charCodeAt(0), last = toChar.charCodeAt(0);
          c <= last;
          c++
        ) {
          chars.push(String.fromCharCode(c));
        }
      } else if (child.name === "HexEscape") {
        chars.push(decodeHexEscapeNode(child));
      } else {
        chars.push(extractRawString(child) ?? "");
      }
    }
  }
  return chars;
}

/**
 * @template STATE, VALUE, SYMBOL
 * @param {number} counter
 * @param {ParseTree<VALUE>} tree
 * @param {SymbolMapper<VALUE, SYMBOL>} symbolMapper
 * @param {StateFactory<VALUE, STATE>} stateFactory
 * @returns {PartialNFA<STATE, SYMBOL>}
 */
function characterClass(counter, tree, symbolMapper, stateFactory) {
  const items = tree.items ?? [];
  const negative = items[1]?.name === "CARET";
  const charsNode = items[negative ? 2 : 1];
  if (!charsNode || charsNode.name !== "CharacterClassCharacters") {
    throw new Error(`Unknown op code '${charsNode?.name}'`);
  }

  let list = collectCharacterClassChars(charsNode);

  if (negative) {
    const excluded = new Set(list);
    list = [];
    for (let i = 0; i <= 255; i++) {
      const ch = String.fromCharCode(i);
      if (!excluded.has(ch)) {
        list.push(ch);
      }
    }
  } else {
    list = Array.from(new Set(list));
  }

  const start = stateFactory(counter, tree);
  const final = stateFactory(counter + 1, tree);
  const symbols = list.map(
    (ch) =>
      /** @type {SYMBOL} */ (symbolMapper(replaceRawValue(tree.value, ch)))
  );
  /** @type {Map<SYMBOL | typeof Epsilon, STATE[]>} */
  const transitionMap = new Map(symbols.map((sym) => [sym, [final]]));

  return {
    counter: counter + 2,
    states: [start, final],
    symbols,
    transitions: new Map([[start, transitionMap]]),
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
function dotWildcard(counter, tree, symbolMapper, stateFactory) {
  /** @type {string[]} */
  const list = [];
  for (let i = 0; i <= 255; i++) {
    list.push(String.fromCharCode(i));
  }

  const start = stateFactory(counter, tree);
  const final = stateFactory(counter + 1, tree);
  const symbols = list.map(
    (ch) =>
      /** @type {SYMBOL} */ (symbolMapper(replaceRawValue(tree.value, ch)))
  );
  /** @type {Map<SYMBOL | typeof Epsilon, STATE[]>} */
  const transitionMap = new Map(symbols.map((sym) => [sym, [final]]));

  return {
    counter: counter + 2,
    states: [start, final],
    symbols,
    transitions: new Map([[start, transitionMap]]),
    start,
    final,
  };
}
