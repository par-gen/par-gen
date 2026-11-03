import { SymbolNames, SymbolIds } from "@par-gen/regexp";

export { SymbolNames, SymbolIds };

/** @type {Readonly<Record<string, number>>} */
const SYMBOL_ID_MAP =
  SymbolIds ??
  Object.freeze(
    Object.fromEntries(SymbolNames.map((name, id) => [name, id]))
  );

/**
 * Resolves a RegExp parser symbol name to its integer symbol ID, throwing at module
 * initialization if an expected symbol does not exist in `SymbolNames`.
 *
 * @param {string} name
 * @returns {number}
 */
export function getSymbolId(name) {
  const id = SYMBOL_ID_MAP[name] ?? SymbolNames.indexOf(name);
  if (id === undefined || id === -1) {
    throw new Error(`Expected RegExp CST symbol '${name}' not found in SymbolNames`);
  }
  return id;
}

export const SYM_CHARACTER = getSymbolId("CHARACTER");
export const SYM_HEX_PREFIX = getSymbolId("HEX_PREFIX");
export const SYM_HEX_NUMBER = getSymbolId("HEX_NUMBER");
export const SYM_ESCAPED_CHARACTER = getSymbolId("ESCAPED_CHARACTER");
export const SYM_CARET = getSymbolId("CARET");
export const SYM_DASH = getSymbolId("DASH");
export const SYM_DOT = getSymbolId("DOT");
export const SYM_UNION = getSymbolId("UNION");
export const SYM_PAREN_OPEN = getSymbolId("PAREN_OPEN");
export const SYM_PAREN_CLOSE = getSymbolId("PAREN_CLOSE");
export const SYM_QUANTIFIER = getSymbolId("QUANTIFIER");
export const SYM_BRACKET_OPEN = getSymbolId("BRACKET_OPEN");
export const SYM_BRACKET_CLOSE = getSymbolId("BRACKET_CLOSE");
export const SYM_REGEXP = getSymbolId("RegExp");
export const SYM_EXPRESSION = getSymbolId("Expression");
export const SYM_UNION_RULE = getSymbolId("Union");
export const SYM_SEQUENCE = getSymbolId("Sequence");
export const SYM_ATOM = getSymbolId("Atom");
export const SYM_GROUP = getSymbolId("Group");
export const SYM_CHARACTER_CLASS = getSymbolId("CharacterClass");
export const SYM_CHARACTER_CLASS_CHARACTERS = getSymbolId(
  "CharacterClassCharacters"
);
export const SYM_CHARACTER_CLASS_CHARACTER = getSymbolId(
  "CharacterClassCharacter"
);
export const SYM_CHARACTER_CLASS_RANGE = getSymbolId("CharacterClassRange");
export const SYM_CHARACTER_RULE = getSymbolId("Character");
export const SYM_HEX_ESCAPE = getSymbolId("HexEscape");

export const SYMBOL_ID_MASK = 0xff;
export const CHILD_COUNT_SHIFT = 8;
export const PTR_MASK = 0xfffff;
export const LEAF_END_MASK = 0x3fffff;
export const LEAF_LEN_SHIFT = 22;
export const DELTA_START_MASK = 0x3ff;

/**
 * @param {Uint32Array} rawTree
 * @param {number} ptr
 * @returns {number}
 */
export function nodeId(rawTree, ptr) {
  return rawTree[ptr] & SYMBOL_ID_MASK;
}

/**
 * @param {Uint32Array} rawTree
 * @param {number} ptr
 * @returns {string}
 */
export function nodeName(rawTree, ptr) {
  return SymbolNames[rawTree[ptr] & SYMBOL_ID_MASK];
}

/**
 * @param {Uint32Array} rawTree
 * @param {number} ptr
 * @returns {number}
 */
export function childCount(rawTree, ptr) {
  return rawTree[ptr] >>> CHILD_COUNT_SHIFT;
}

/**
 * @param {Uint32Array} rawTree
 * @param {number} c
 * @returns {number}
 */
export function prevSibling(rawTree, c) {
  return (rawTree[c] >>> CHILD_COUNT_SHIFT) === 0
    ? c - 2
    : rawTree[c + 1] & PTR_MASK;
}

/**
 * @param {Uint32Array} rawTree
 * @param {number} ptr
 * @returns {number}
 */
export function firstLeafPtr(rawTree, ptr) {
  return (rawTree[ptr] >>> CHILD_COUNT_SHIFT) === 0
    ? ptr
    : (rawTree[ptr + 1] & PTR_MASK) + 2;
}

/**
 * @param {Uint32Array} rawTree
 * @param {number} ptr
 * @returns {number}
 */
export function lastLeafPtr(rawTree, ptr) {
  let p = ptr;
  while ((rawTree[p] >>> CHILD_COUNT_SHIFT) > 0) {
    p -= 2;
  }
  return p;
}

/**
 * @param {Uint32Array} rawTree
 * @param {number} ptr
 * @returns {number[]}
 */
export function getChildren(rawTree, ptr) {
  const n = rawTree[ptr] >>> CHILD_COUNT_SHIFT;
  if (n === 0) {
    return [];
  }
  /** @type {number[]} */
  const children = new Array(n);
  let child = ptr - 2;
  for (let i = n - 1; i >= 0; i--) {
    children[i] = child;
    if (i > 0) {
      child = prevSibling(rawTree, child);
    }
  }
  return children;
}

/**
 * @param {Uint32Array} rawTree
 * @param {number} leafPtr
 * @returns {number}
 */
export function leafStart(rawTree, leafPtr) {
  let q = leafPtr - 2;
  while (q >= 2 && (rawTree[q] >>> CHILD_COUNT_SHIFT) > 0) {
    q -= 2;
  }
  const prevEnd = q >= 2 ? rawTree[q + 1] & LEAF_END_MASK : 0;
  const span = rawTree[leafPtr + 1];
  const end = span & LEAF_END_MASK;
  return (
    prevEnd +
    (((end - prevEnd) - (span >>> LEAF_LEN_SHIFT)) & DELTA_START_MASK)
  );
}

/**
 * @param {Uint32Array} rawTree
 * @param {number} leafPtr
 * @returns {number}
 */
export function leafEnd(rawTree, leafPtr) {
  return rawTree[leafPtr + 1] & LEAF_END_MASK;
}

/**
 * @param {Uint32Array} rawTree
 * @param {number} ptr
 * @returns {number}
 */
export function nodeStart(rawTree, ptr) {
  return leafStart(rawTree, firstLeafPtr(rawTree, ptr));
}

/**
 * @param {Uint32Array} rawTree
 * @param {number} ptr
 * @returns {number}
 */
export function nodeEnd(rawTree, ptr) {
  return leafEnd(rawTree, lastLeafPtr(rawTree, ptr));
}

/**
 * Fast leaf start offset for RegExp tokens (which never skip trivia or exceed 1023 bytes).
 *
 * @param {Uint32Array} rawTree
 * @param {number} ptr
 * @returns {number}
 */
export function fastLeafStart(rawTree, ptr) {
  const p = firstLeafPtr(rawTree, ptr);
  const span = rawTree[p + 1];
  return (span & LEAF_END_MASK) - (span >>> LEAF_LEN_SHIFT);
}
