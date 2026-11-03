import { Epsilon } from "./constants.js";
import { parse } from "@par-gen/regexp";
import debug from "debug";
import { performance } from "perf_hooks";
import {
  SYM_ESCAPED_CHARACTER,
  SYM_CARET,
  SYM_DOT,
  SYM_QUANTIFIER,
  SYM_REGEXP,
  SYM_EXPRESSION,
  SYM_UNION_RULE,
  SYM_SEQUENCE,
  SYM_ATOM,
  SYM_GROUP,
  SYM_CHARACTER_CLASS,
  SYM_CHARACTER_CLASS_CHARACTERS,
  SYM_CHARACTER_CLASS_CHARACTER,
  SYM_CHARACTER_CLASS_RANGE,
  SYM_CHARACTER_RULE,
  SYM_HEX_ESCAPE,
  nodeId,
  childCount,
  prevSibling,
  getChildren,
  fastLeafStart,
} from "./cst-utils.js";

const log = debug("par-gen:nfa");

const BYTE_CHARS = Array.from({ length: 256 }, (_, i) =>
  String.fromCharCode(i)
);

const DEFAULT_STATES = Array.from({ length: 2048 }, (_, i) => `S${i}`);

/**
 * @param {number} n
 * @returns {string}
 */
function defaultStateFactory(n) {
  return n < 2048 ? DEFAULT_STATES[n] : `S${n}`;
}

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
 * @template STATE, VALUE, SYMBOL
 * @typedef {Object} BuildContext
 * @property {number} counter
 * @property {STATE[]} states
 * @property {Set<SYMBOL>} symbols
 * @property {NFADescription<STATE, SYMBOL>['transitions']} transitions
 * @property {SymbolMapper<VALUE, SYMBOL>} symbolMapper
 * @property {StateFactory<VALUE, STATE>} stateFactory
 */

/**
 * @template STATE, VALUE, SYMBOL
 * @typedef {Object} FlatBuildContext
 * @property {Uint32Array} rawTree
 * @property {string} input
 * @property {number} counter
 * @property {STATE[]} states
 * @property {Set<SYMBOL>} symbols
 * @property {NFADescription<STATE, SYMBOL>['transitions']} transitions
 * @property {SymbolMapper<VALUE, SYMBOL> | null} symbolMapper
 * @property {StateFactory<VALUE, STATE>} stateFactory
 */

/**
 * @template STATE
 * @typedef {Object} StatePair
 * @property {STATE} start
 * @property {STATE} final
 */

/**
 * @param {string} regexp regular expression
 * @returns {NFADescription<string, string>}
 */
export function fromRegExp(regexp) {
  const parsed = /** @type {*} */ (parse(regexp));
  const rawTree = /** @type {Uint32Array | undefined} */ (parsed.__tree);
  const rootPtr = /** @type {number | undefined} */ (parsed.__pointer);

  if (rawTree !== undefined && rootPtr !== undefined) {
    return buildFromFlatTree(
      rawTree,
      rootPtr,
      regexp,
      null,
      defaultStateFactory
    );
  }

  return fromRegExpParseTree(parsed, {
    symbolMapper: (value) => value?.value ?? /** @type {*} */ (value),
    stateFactory: defaultStateFactory,
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
    const anyTree = /** @type {*} */ (tree);
    if (anyTree.__tree !== undefined && anyTree.__pointer !== undefined) {
      let input = anyTree.__input;
      if (typeof input !== "string") {
        const rootBuf = tree.value;
        if (Buffer.isBuffer(rootBuf)) {
          input = Buffer.from(
            rootBuf.buffer,
            rootBuf.byteOffset - tree.start,
            tree.end
          ).toString("utf-8");
        } else {
          input = String(rootBuf ?? "");
        }
      }
      return buildFromFlatTree(
        anyTree.__tree,
        anyTree.__pointer,
        input,
        symbolMapper,
        stateFactory
      );
    }

    /** @type {BuildContext<STATE, VALUE, SYMBOL>} */
    const ctx = {
      counter: 0,
      states: [],
      symbols: new Set(),
      transitions: new Map(),
      symbolMapper,
      stateFactory,
    };

    const def = parseIntermediateAST(ctx, tree);

    return {
      states: ctx.states,
      symbols: Array.from(ctx.symbols),
      transitions: ctx.transitions,
      start: def.start,
      finals: [def.final],
    };
  } finally {
    const traceEnd = performance.now();
    log("exit fromRegExpParseTree (took %d ms)", traceEnd - traceStart);
  }
}

/**
 * @param {Uint32Array} rawTree
 * @param {number} ptr
 * @param {string} input
 * @returns {string}
 */
function extractFlatChar(rawTree, ptr, input) {
  return BYTE_CHARS[input.charCodeAt(fastLeafStart(rawTree, ptr))];
}

/**
 * @param {Uint32Array} rawTree
 * @param {number} ptr
 * @param {string} input
 * @returns {number}
 */
function extractFlatCharCode(rawTree, ptr, input) {
  return input.charCodeAt(fastLeafStart(rawTree, ptr));
}

/**
 * @param {number} code
 * @returns {number}
 */
function hexDigitValue(code) {
  if (code >= 48 && code <= 57) {
    return code - 48;
  }
  if (code >= 97 && code <= 102) {
    return code - 87;
  }
  if (code >= 65 && code <= 70) {
    return code - 55;
  }
  return 0;
}

/**
 * @param {Uint32Array} rawTree
 * @param {number} hexPtr
 * @param {string} input
 * @returns {number}
 */
function decodeFlatHexEscapeCode(rawTree, hexPtr, input) {
  const last = hexPtr - 2;
  const prev = prevSibling(rawTree, last);
  const d1 = hexDigitValue(extractFlatCharCode(rawTree, prev, input));
  const d2 = hexDigitValue(extractFlatCharCode(rawTree, last, input));
  return (d1 << 4) | d2;
}

/**
 * @param {Uint32Array} rawTree
 * @param {number} p
 * @param {number[]} out
 */
function collectFlatSequenceNodes(rawTree, p, out) {
  const children = getChildren(rawTree, p);
  for (let i = 0; i < children.length; i++) {
    const c = children[i];
    if (nodeId(rawTree, c) === SYM_SEQUENCE) {
      collectFlatSequenceNodes(rawTree, c, out);
    } else {
      out.push(c);
    }
  }
}

/**
 * @template STATE, VALUE, SYMBOL
 * @param {FlatBuildContext<STATE, VALUE, SYMBOL>} ctx
 * @param {string} ch
 * @returns {SYMBOL}
 */
function mapFlatChar(ctx, ch) {
  if (ctx.symbolMapper === null) {
    return /** @type {SYMBOL} */ (/** @type {*} */ (ch));
  }
  const mapped = ctx.symbolMapper(
    /** @type {VALUE} */ (/** @type {*} */ ({ value: ch }))
  );
  if (mapped === undefined || mapped === null) {
    throw new Error("Illegal state");
  }
  return mapped;
}

/**
 * @template STATE, VALUE, SYMBOL
 * @param {FlatBuildContext<STATE, VALUE, SYMBOL>} ctx
 * @param {number} p
 * @param {Uint8Array | null} excluded
 * @param {Map<SYMBOL | typeof Epsilon, STATE[]>} transitionMap
 * @param {STATE[]} finalTarget
 */
function walkFlatCharacterClass(ctx, p, excluded, transitionMap, finalTarget) {
  const { rawTree, input } = ctx;
  const symId = nodeId(rawTree, p);

  if (symId === SYM_CHARACTER_CLASS_CHARACTER) {
    const nChildren = childCount(rawTree, p);
    if (nChildren === 2) {
      const c1 = p - 2;
      const ch = decodeEscapedChar(extractFlatChar(rawTree, c1, input));
      if (excluded !== null) {
        excluded[ch.charCodeAt(0)] = 1;
      } else {
        const sym = mapFlatChar(ctx, ch);
        if (!transitionMap.has(sym)) {
          ctx.symbols.add(sym);
          transitionMap.set(sym, finalTarget);
        }
      }
    } else if (nChildren === 1) {
      const c0 = p - 2;
      const childSym = nodeId(rawTree, c0);
      if (childSym === SYM_CHARACTER_CLASS_RANGE) {
        const r2 = c0 - 2;
        const r1 = prevSibling(rawTree, r2);
        const r0 = prevSibling(rawTree, r1);
        const fromCode =
          nodeId(rawTree, r0) === SYM_HEX_ESCAPE
            ? decodeFlatHexEscapeCode(rawTree, r0, input)
            : extractFlatCharCode(rawTree, r0, input);
        const toCode =
          nodeId(rawTree, r2) === SYM_HEX_ESCAPE
            ? decodeFlatHexEscapeCode(rawTree, r2, input)
            : extractFlatCharCode(rawTree, r2, input);
        if (excluded !== null) {
          for (let c = fromCode; c <= toCode; c++) {
            excluded[c] = 1;
          }
        } else {
          for (let c = fromCode; c <= toCode; c++) {
            const sym = mapFlatChar(ctx, BYTE_CHARS[c]);
            if (!transitionMap.has(sym)) {
              ctx.symbols.add(sym);
              transitionMap.set(sym, finalTarget);
            }
          }
        }
      } else if (childSym === SYM_ESCAPED_CHARACTER) {
        const start = fastLeafStart(rawTree, c0);
        const ch = decodeEscapedChar(BYTE_CHARS[input.charCodeAt(start + 1)]);
        if (excluded !== null) {
          excluded[ch.charCodeAt(0)] = 1;
        } else {
          const sym = mapFlatChar(ctx, ch);
          if (!transitionMap.has(sym)) {
            ctx.symbols.add(sym);
            transitionMap.set(sym, finalTarget);
          }
        }
      } else {
        const code =
          childSym === SYM_HEX_ESCAPE
            ? decodeFlatHexEscapeCode(rawTree, c0, input)
            : extractFlatCharCode(rawTree, c0, input);
        if (excluded !== null) {
          excluded[code] = 1;
        } else {
          const sym = mapFlatChar(ctx, BYTE_CHARS[code]);
          if (!transitionMap.has(sym)) {
            ctx.symbols.add(sym);
            transitionMap.set(sym, finalTarget);
          }
        }
      }
    }
    return;
  }

  const children = getChildren(rawTree, p);
  for (let i = 0; i < children.length; i++) {
    walkFlatCharacterClass(
      ctx,
      children[i],
      excluded,
      transitionMap,
      finalTarget
    );
  }
}

/**
 * @template STATE, VALUE, SYMBOL
 * @param {FlatBuildContext<STATE, VALUE, SYMBOL>} ctx
 * @param {number} ptr
 * @returns {StatePair<STATE>}
 */
function visitFlat(ctx, ptr) {
  const { rawTree, input, states, symbols, transitions, stateFactory } = ctx;
  const dummyNode = /** @type {ParseTree<VALUE>} */ (
    /** @type {*} */ (undefined)
  );

  let currentPtr = ptr;
  while (true) {
    const s = nodeId(rawTree, currentPtr);
    const n = childCount(rawTree, currentPtr);
    if (s === SYM_REGEXP || s === SYM_EXPRESSION) {
      if (n === 0) {
        throw new Error("Illegal state");
      }
      currentPtr -= 2;
    } else if (s === SYM_GROUP) {
      if (n < 2) {
        throw new Error("Illegal state");
      }
      currentPtr =
        n === 2 ? currentPtr - 2 : prevSibling(rawTree, currentPtr - 2);
    } else {
      break;
    }
  }

  const symId = nodeId(rawTree, currentPtr);
  const nChildren = childCount(rawTree, currentPtr);

  switch (symId) {
    case SYM_SEQUENCE: {
      /** @type {number[]} */
      const seqNodes = [];
      collectFlatSequenceNodes(rawTree, currentPtr, seqNodes);

      const start = stateFactory(ctx.counter++, dummyNode);
      const firstFinal = stateFactory(ctx.counter++, dummyNode);
      states.push(start, firstFinal);
      transitions.set(start, new Map([[Epsilon, [firstFinal]]]));

      let currentFinal = firstFinal;
      for (let i = 0; i < seqNodes.length; i++) {
        const b = visitFlat(ctx, seqNodes[i]);
        transitions.set(currentFinal, new Map([[Epsilon, [b.start]]]));
        transitions.set(b.final, new Map());
        currentFinal = b.final;
      }
      return { start, final: currentFinal };
    }

    case SYM_UNION_RULE: {
      if (nChildren === 0) {
        throw new Error("Illegal state");
      }
      const hasRight = nChildren >= 3;
      const rightPtr = hasRight ? currentPtr - 2 : 0;
      const unionTokPtr = hasRight
        ? prevSibling(rawTree, rightPtr)
        : currentPtr - 2;
      const leftPtr =
        nChildren === 1 ? currentPtr - 2 : prevSibling(rawTree, unionTokPtr);

      const start = stateFactory(ctx.counter++, dummyNode);
      const final = stateFactory(ctx.counter++, dummyNode);
      states.push(start, final);

      /** @type {Map<SYMBOL | typeof Epsilon, STATE[]>} */
      const startMap = new Map();
      transitions.set(start, startMap);

      const leftPartial = visitFlat(ctx, leftPtr);
      /** @type {StatePair<STATE>} */
      let rightPartial;
      if (hasRight) {
        rightPartial = visitFlat(ctx, rightPtr);
      } else {
        const rStart = stateFactory(ctx.counter++, dummyNode);
        const rFinal = stateFactory(ctx.counter++, dummyNode);
        states.push(rStart, rFinal);
        transitions.set(rStart, new Map([[Epsilon, [rFinal]]]));
        rightPartial = { start: rStart, final: rFinal };
      }

      startMap.set(Epsilon, [leftPartial.start, rightPartial.start]);
      transitions.set(leftPartial.final, new Map([[Epsilon, [final]]]));
      transitions.set(rightPartial.final, new Map([[Epsilon, [final]]]));
      return { start, final };
    }

    case SYM_ATOM: {
      if (nChildren === 0) {
        throw new Error("Illegal state");
      }
      const last = currentPtr - 2;
      let c0 = last;
      for (let i = 1; i < nChildren; i++) {
        c0 = prevSibling(rawTree, c0);
      }
      if (nChildren > 1) {
        if (nodeId(rawTree, last) === SYM_QUANTIFIER) {
          const quantifier = extractFlatChar(rawTree, last, input) || "*";
          const start = stateFactory(ctx.counter++, dummyNode);
          const final = stateFactory(ctx.counter++, dummyNode);
          states.push(start, final);

          const partial = visitFlat(ctx, c0);
          const startTargets =
            quantifier === "+" ? [partial.start] : [partial.start, final];
          const finalTargets =
            quantifier === "?" ? [final] : [final, partial.start];

          transitions.set(start, new Map([[Epsilon, startTargets]]));
          transitions.set(partial.final, new Map([[Epsilon, finalTargets]]));
          return { start, final };
        }
      }
      return visitFlat(ctx, c0);
    }

    case SYM_CHARACTER_RULE: {
      let decoded = "";
      if (nChildren === 2) {
        const c1 = currentPtr - 2;
        decoded = decodeEscapedChar(extractFlatChar(rawTree, c1, input));
      } else if (nChildren === 4) {
        decoded =
          BYTE_CHARS[decodeFlatHexEscapeCode(rawTree, currentPtr, input)];
      } else {
        const c0 = currentPtr - 2;
        const childSym = nodeId(rawTree, c0);
        if (childSym === SYM_ESCAPED_CHARACTER) {
          const start = fastLeafStart(rawTree, c0);
          decoded = decodeEscapedChar(BYTE_CHARS[input.charCodeAt(start + 1)]);
        } else if (childSym === SYM_HEX_ESCAPE) {
          decoded = BYTE_CHARS[decodeFlatHexEscapeCode(rawTree, c0, input)];
        } else {
          decoded = extractFlatChar(rawTree, c0, input);
        }
      }

      const sym = mapFlatChar(ctx, decoded);
      const start = stateFactory(ctx.counter++, dummyNode);
      const final = stateFactory(ctx.counter++, dummyNode);
      states.push(start, final);
      symbols.add(sym);
      transitions.set(start, new Map([[sym, [final]]]));
      return { start, final };
    }

    case SYM_CHARACTER_CLASS: {
      const closeBracket = currentPtr - 2;
      const charsNode = prevSibling(rawTree, closeBracket);
      const beforeChars = prevSibling(rawTree, charsNode);
      const negative = nodeId(rawTree, beforeChars) === SYM_CARET;
      if (
        !charsNode ||
        nodeId(rawTree, charsNode) !== SYM_CHARACTER_CLASS_CHARACTERS
      ) {
        throw new Error(`Unknown op code '${nodeId(rawTree, charsNode)}'`);
      }

      const start = stateFactory(ctx.counter++, dummyNode);
      const final = stateFactory(ctx.counter++, dummyNode);
      states.push(start, final);

      const finalTarget = [final];
      /** @type {Map<SYMBOL | typeof Epsilon, STATE[]>} */
      const transitionMap = new Map();

      if (negative) {
        const excluded = new Uint8Array(256);
        walkFlatCharacterClass(
          ctx,
          charsNode,
          excluded,
          transitionMap,
          finalTarget
        );
        for (let i = 0; i <= 255; i++) {
          if (excluded[i] === 0) {
            const sym = mapFlatChar(ctx, BYTE_CHARS[i]);
            symbols.add(sym);
            transitionMap.set(sym, finalTarget);
          }
        }
      } else {
        walkFlatCharacterClass(
          ctx,
          charsNode,
          null,
          transitionMap,
          finalTarget
        );
      }

      transitions.set(start, transitionMap);
      return { start, final };
    }

    case SYM_DOT: {
      const start = stateFactory(ctx.counter++, dummyNode);
      const final = stateFactory(ctx.counter++, dummyNode);
      states.push(start, final);

      const finalTarget = [final];
      /** @type {Map<SYMBOL | typeof Epsilon, STATE[]>} */
      const transitionMap = new Map();
      for (let i = 0; i <= 255; i++) {
        const sym = mapFlatChar(ctx, BYTE_CHARS[i]);
        symbols.add(sym);
        transitionMap.set(sym, finalTarget);
      }

      transitions.set(start, transitionMap);
      return { start, final };
    }
  }

  throw new Error(`Unknown op code '${symId}'`);
}

/**
 * @template STATE, VALUE, SYMBOL
 * @param {Uint32Array} rawTree
 * @param {number} rootPtr
 * @param {string} input
 * @param {SymbolMapper<VALUE, SYMBOL> | null} symbolMapper
 * @param {StateFactory<VALUE, STATE>} stateFactory
 * @returns {NFADescription<STATE, SYMBOL>}
 */
function buildFromFlatTree(
  rawTree,
  rootPtr,
  input,
  symbolMapper,
  stateFactory
) {
  const traceStart = performance.now();
  log("enter fromRegExpParseTree");
  try {
    /** @type {FlatBuildContext<STATE, VALUE, SYMBOL>} */
    const ctx = {
      rawTree,
      input,
      counter: 0,
      states: [],
      symbols: new Set(),
      transitions: new Map(),
      symbolMapper,
      stateFactory,
    };

    const def = visitFlat(ctx, rootPtr);

    return {
      states: ctx.states,
      symbols: Array.from(ctx.symbols),
      transitions: ctx.transitions,
      start: def.start,
      finals: [def.final],
    };
  } finally {
    const traceEnd = performance.now();
    log("exit fromRegExpParseTree (took %d ms)", traceEnd - traceStart);
  }
}

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
  const offset = items.length === 3 ? 1 : 2;
  const d1 = extractRawString(items[offset]) ?? "0";
  const d2 = extractRawString(items[offset + 1]) ?? "0";
  return BYTE_CHARS[parseInt(d1 + d2, 16)];
}

/**
 * @template STATE, VALUE, SYMBOL
 * @param {BuildContext<STATE, VALUE, SYMBOL>} ctx
 * @param {ParseTree<VALUE>} tree
 * @returns {StatePair<STATE>}
 */
function parseIntermediateAST(ctx, tree) {
  switch (tree.name) {
    case "RegExp":
    case "Expression": {
      const child = tree.items?.[0];
      if (!child) {
        throw new Error("Illegal state");
      }
      return parseIntermediateAST(ctx, child);
    }
    case "Sequence":
      return sequence(ctx, tree);
    case "Union":
      return union(ctx, tree);
    case "Atom": {
      const items = tree.items ?? [];
      if (items.length > 1 && items[items.length - 1].name === "QUANTIFIER") {
        return quantified(ctx, tree);
      }
      return atom(ctx, tree);
    }
    case "Group":
      return group(ctx, tree);
    case "Character":
    case "CharacterClass":
    case "DOT":
      return atom(ctx, tree);
  }
  throw new Error(`Unknown op code '${tree.name.toString()}'`);
}

/**
 * @template VALUE
 * @param {ParseTree<VALUE>} node
 * @param {ParseTree<VALUE>[]} out
 */
function collectSequenceNodes(node, out) {
  const items = node.items ?? [];
  for (let i = 0; i < items.length; i++) {
    const child = items[i];
    if (child.name === "Sequence") {
      collectSequenceNodes(child, out);
    } else {
      out.push(child);
    }
  }
}

/**
 * @template STATE, VALUE, SYMBOL
 * @param {BuildContext<STATE, VALUE, SYMBOL>} ctx
 * @param {ParseTree<VALUE>} tree
 * @returns {StatePair<STATE>}
 */
function sequence(ctx, tree) {
  /** @type {ParseTree<VALUE>[]} */
  const nodes = [];
  collectSequenceNodes(tree, nodes);

  const start = ctx.stateFactory(ctx.counter++, tree);
  const firstFinal = ctx.stateFactory(ctx.counter++, tree);
  ctx.states.push(start, firstFinal);
  ctx.transitions.set(start, new Map([[Epsilon, [firstFinal]]]));

  let currentFinal = firstFinal;
  for (let i = 0; i < nodes.length; i++) {
    const b = parseIntermediateAST(ctx, nodes[i]);
    ctx.transitions.set(currentFinal, new Map([[Epsilon, [b.start]]]));
    ctx.transitions.set(b.final, new Map());
    currentFinal = b.final;
  }

  return { start, final: currentFinal };
}

/**
 * @template STATE, VALUE, SYMBOL
 * @param {BuildContext<STATE, VALUE, SYMBOL>} ctx
 * @param {ParseTree<VALUE>} tree
 * @returns {StatePair<STATE>}
 */
function union(ctx, tree) {
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

  const start = ctx.stateFactory(ctx.counter++, tree);
  const final = ctx.stateFactory(ctx.counter++, tree);
  ctx.states.push(start, final);

  /** @type {Map<SYMBOL | typeof Epsilon, STATE[]>} */
  const startMap = new Map();
  ctx.transitions.set(start, startMap);

  const leftPartial = parseIntermediateAST(ctx, left);
  const rightPartial = parseIntermediateAST(ctx, right);

  startMap.set(Epsilon, [leftPartial.start, rightPartial.start]);
  ctx.transitions.set(leftPartial.final, new Map([[Epsilon, [final]]]));
  ctx.transitions.set(rightPartial.final, new Map([[Epsilon, [final]]]));

  return { start, final };
}

/**
 * @template STATE, VALUE, SYMBOL
 * @param {BuildContext<STATE, VALUE, SYMBOL>} ctx
 * @param {ParseTree<VALUE>} tree
 * @returns {StatePair<STATE>}
 */
function quantified(ctx, tree) {
  const items = tree.items ?? [];
  const node = items[0];
  const quantifierNode = items[items.length - 1];
  if (!node || !quantifierNode) {
    throw new Error("Illegal state");
  }
  const quantifier = extractRawString(quantifierNode) ?? "*";

  const start = ctx.stateFactory(ctx.counter++, tree);
  const final = ctx.stateFactory(ctx.counter++, tree);
  ctx.states.push(start, final);

  const partial = parseIntermediateAST(ctx, node);

  const startTargets =
    quantifier === "+" ? [partial.start] : [partial.start, final];
  const finalTargets =
    quantifier === "?" ? [final] : [final, partial.start];

  ctx.transitions.set(start, new Map([[Epsilon, startTargets]]));
  ctx.transitions.set(partial.final, new Map([[Epsilon, finalTargets]]));

  return { start, final };
}

/**
 * @template STATE, VALUE, SYMBOL
 * @param {BuildContext<STATE, VALUE, SYMBOL>} ctx
 * @param {ParseTree<VALUE>} tree
 * @returns {StatePair<STATE>}
 */
function atom(ctx, tree) {
  const node = tree.name === "Atom" ? tree.items?.[0] : tree;
  if (!node) {
    throw new Error("Illegal state");
  }

  switch (node.name) {
    case "Group":
      return group(ctx, node);
    case "CharacterClass":
      return characterClass(ctx, node);
    case "DOT":
      return dotWildcard(ctx, node);
    case "Character": {
      const charItems = node.items ?? [];
      let symbolValue = node.value;
      if (extractRawString(node) !== undefined) {
        let decoded = "";
        if (charItems[0]?.name === "HexEscape") {
          decoded = decodeHexEscapeNode(charItems[0]);
        } else if (charItems[0]?.name === "ESCAPED_CHARACTER") {
          decoded = decodeEscapedChar(
            (extractRawString(charItems[0]) ?? "").slice(1)
          );
        } else if (charItems.length === 4) {
          decoded = decodeHexEscapeNode(node);
        } else if (charItems.length === 2) {
          decoded = decodeEscapedChar(extractRawString(charItems[1]) ?? "");
        } else {
          decoded = extractRawString(charItems[0] ?? node) ?? "";
        }
        symbolValue = replaceRawValue(node.value, decoded);
      }

      const value = ctx.symbolMapper(symbolValue);
      if (value === undefined || value === null) {
        throw new Error("Illegal state");
      }
      const start = ctx.stateFactory(ctx.counter++, node);
      const final = ctx.stateFactory(ctx.counter++, node);
      ctx.states.push(start, final);
      ctx.symbols.add(value);
      ctx.transitions.set(start, new Map([[value, [final]]]));

      return { start, final };
    }
  }

  throw new Error(`Unknown op code '${node.name.toString()}'`);
}

/**
 * @template STATE, VALUE, SYMBOL
 * @param {BuildContext<STATE, VALUE, SYMBOL>} ctx
 * @param {ParseTree<VALUE>} tree
 * @returns {StatePair<STATE>}
 */
function group(ctx, tree) {
  const node = tree.items?.[1];
  if (!node) {
    throw new Error("Illegal state");
  }
  return parseIntermediateAST(ctx, node);
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
 * @template STATE, VALUE, SYMBOL
 * @param {BuildContext<STATE, VALUE, SYMBOL>} ctx
 * @param {ParseTree<VALUE>} tree
 * @param {ParseTree<VALUE>} n
 * @param {Uint8Array | null} excluded
 * @param {Map<SYMBOL | typeof Epsilon, STATE[]>} transitionMap
 * @param {STATE[]} finalTarget
 */
function walkCharacterClassNode(
  ctx,
  tree,
  n,
  excluded,
  transitionMap,
  finalTarget
) {
  if (n.name === "CharacterClassCharacter") {
    const items = n.items ?? [];
    if (items.length === 2) {
      const raw = extractRawString(items[1]) ?? "";
      const ch = decodeEscapedChar(raw);
      if (excluded !== null) {
        excluded[ch.charCodeAt(0)] = 1;
      } else {
        const sym = /** @type {SYMBOL} */ (
          ctx.symbolMapper(replaceRawValue(tree.value, ch))
        );
        if (!transitionMap.has(sym)) {
          ctx.symbols.add(sym);
          transitionMap.set(sym, finalTarget);
        }
      }
    } else if (items.length === 1) {
      const child = items[0];
      if (child.name === "CharacterClassRange") {
        const rangeItems = child.items ?? [];
        const fromCode = decodeRangeEndpoint(rangeItems[0]).charCodeAt(0);
        const toCode = decodeRangeEndpoint(rangeItems[2]).charCodeAt(0);
        if (excluded !== null) {
          for (let c = fromCode; c <= toCode; c++) {
            excluded[c] = 1;
          }
        } else {
          for (let c = fromCode; c <= toCode; c++) {
            const sym = /** @type {SYMBOL} */ (
              ctx.symbolMapper(replaceRawValue(tree.value, BYTE_CHARS[c]))
            );
            if (!transitionMap.has(sym)) {
              ctx.symbols.add(sym);
              transitionMap.set(sym, finalTarget);
            }
          }
        }
      } else {
        const ch =
          child.name === "HexEscape"
            ? decodeHexEscapeNode(child)
            : child.name === "ESCAPED_CHARACTER"
            ? decodeEscapedChar((extractRawString(child) ?? "").slice(1))
            : extractRawString(child) ?? "";
        if (excluded !== null) {
          excluded[ch.charCodeAt(0)] = 1;
        } else {
          const sym = /** @type {SYMBOL} */ (
            ctx.symbolMapper(replaceRawValue(tree.value, ch))
          );
          if (!transitionMap.has(sym)) {
            ctx.symbols.add(sym);
            transitionMap.set(sym, finalTarget);
          }
        }
      }
    }
    return;
  }

  if (n.items) {
    for (let i = 0; i < n.items.length; i++) {
      walkCharacterClassNode(
        ctx,
        tree,
        n.items[i],
        excluded,
        transitionMap,
        finalTarget
      );
    }
  }
}

/**
 * @template STATE, VALUE, SYMBOL
 * @param {BuildContext<STATE, VALUE, SYMBOL>} ctx
 * @param {ParseTree<VALUE>} tree
 * @returns {StatePair<STATE>}
 */
function characterClass(ctx, tree) {
  const items = tree.items ?? [];
  const negative = items[1]?.name === "CARET";
  const charsNode = items[negative ? 2 : 1];
  if (!charsNode || charsNode.name !== "CharacterClassCharacters") {
    throw new Error(`Unknown op code '${charsNode?.name}'`);
  }

  const start = ctx.stateFactory(ctx.counter++, tree);
  const final = ctx.stateFactory(ctx.counter++, tree);
  ctx.states.push(start, final);

  const finalTarget = [final];
  /** @type {Map<SYMBOL | typeof Epsilon, STATE[]>} */
  const transitionMap = new Map();

  if (negative) {
    const excluded = new Uint8Array(256);
    walkCharacterClassNode(
      ctx,
      tree,
      charsNode,
      excluded,
      transitionMap,
      finalTarget
    );
    for (let i = 0; i <= 255; i++) {
      if (excluded[i] === 0) {
        const sym = /** @type {SYMBOL} */ (
          ctx.symbolMapper(replaceRawValue(tree.value, BYTE_CHARS[i]))
        );
        ctx.symbols.add(sym);
        transitionMap.set(sym, finalTarget);
      }
    }
  } else {
    walkCharacterClassNode(
      ctx,
      tree,
      charsNode,
      null,
      transitionMap,
      finalTarget
    );
  }

  ctx.transitions.set(start, transitionMap);
  return { start, final };
}

/**
 * @template STATE, VALUE, SYMBOL
 * @param {BuildContext<STATE, VALUE, SYMBOL>} ctx
 * @param {ParseTree<VALUE>} tree
 * @returns {StatePair<STATE>}
 */
function dotWildcard(ctx, tree) {
  const start = ctx.stateFactory(ctx.counter++, tree);
  const final = ctx.stateFactory(ctx.counter++, tree);
  ctx.states.push(start, final);

  const finalTarget = [final];
  /** @type {Map<SYMBOL | typeof Epsilon, STATE[]>} */
  const transitionMap = new Map();
  for (let i = 0; i <= 255; i++) {
    const sym = /** @type {SYMBOL} */ (
      ctx.symbolMapper(replaceRawValue(tree.value, BYTE_CHARS[i]))
    );
    ctx.symbols.add(sym);
    transitionMap.set(sym, finalTarget);
  }

  ctx.transitions.set(start, transitionMap);
  return { start, final };
}
