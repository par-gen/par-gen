import { parse } from "@par-gen/regexp";

const REGEXP_SYMBOLS = [
  "CHARACTER", // 0
  "HEX_PREFIX", // 1
  "HEX_NUMBER", // 2
  "ESCAPED_CHARACTER", // 3
  "CARET", // 4
  "DASH", // 5
  "DOT", // 6
  "UNION", // 7
  "PAREN_OPEN", // 8
  "PAREN_CLOSE", // 9
  "QUANTIFIER", // 10
  "BRACKET_OPEN", // 11
  "BRACKET_CLOSE", // 12
  "@par-gen.EOF", // 13
  "@par-gen.ERROR", // 14
  "S", // 15
  "RegExp", // 16
  "Expression", // 17
  "Union", // 18
  "Sequence", // 19
  "Atom", // 20
  "Group", // 21
  "CharacterClass", // 22
  "CharacterClassCharacters", // 23
  "CharacterClassCharacter", // 24
  "CharacterClassRange", // 25
  "Character", // 26
  "HexEscape", // 27
];

const SYM_REGEXP = 16;
const SYM_EXPRESSION = 17;

/**
 * @template VALUE
 * @typedef {Object} ParseTree
 * @property {string} name
 * @property {number} start
 * @property {number} end
 * @property {VALUE | undefined} value
 * @property {ParseTree<VALUE>[] | undefined} items
 */

class FlatCstNode {
  /**
   * @param {Uint32Array} tree
   * @param {number} pointer
   * @param {string} input
   */
  constructor(tree, pointer, input) {
    /** @type {Uint32Array} */
    this.__tree = tree;
    /** @type {number} */
    this.__pointer = pointer;
    /** @type {string} */
    this.__input = input;
  }

  get name() {
    return REGEXP_SYMBOLS[this.__tree[this.__pointer] & 0xff];
  }

  get start() {
    const rawTree = this.__tree;
    let p = this.__pointer;
    while (rawTree[p] >>> 8 > 0) {
      p = rawTree[p + 1] & 0xfffff;
    }
    const span = rawTree[p + 1];
    return (span & 0x3fffff) - (span >>> 22);
  }

  get end() {
    const rawTree = this.__tree;
    let p = this.__pointer;
    let n = rawTree[p] >>> 8;
    while (n > 0) {
      p = rawTree[p + 1] & 0xfffff;
      for (let i = 1; i < n; i++) {
        p = rawTree[p + 2];
      }
      n = rawTree[p] >>> 8;
    }
    return rawTree[p + 1] & 0x3fffff;
  }

  get value() {
    return this.__input.slice(this.start, this.end);
  }

  get items() {
    const rawTree = this.__tree;
    const nChildren = rawTree[this.__pointer] >>> 8;
    if (nChildren === 0) {
      return undefined;
    }
    /** @type {ParseTree<string>[]} */
    const children = new Array(nChildren);
    let child = rawTree[this.__pointer + 1] & 0xfffff;
    children[0] = new FlatCstNode(rawTree, child, this.__input);
    for (let i = 1; i < nChildren; i++) {
      child = rawTree[child + 2];
      children[i] = new FlatCstNode(rawTree, child, this.__input);
    }
    return children;
  }
}

/**
 * @template V
 * @param {Uint32Array} rawTree
 * @param {number} ptr
 * @param {string} input
 * @param {(value: * | undefined) => V} mapper
 * @returns {ParseTree<V>}
 */
function convertFlatNode(rawTree, ptr, input, mapper) {
  const word0 = rawTree[ptr];
  const name = REGEXP_SYMBOLS[word0 & 0xff];
  const nChildren = word0 >>> 8;

  if (nChildren === 0) {
    const span = rawTree[ptr + 1];
    const end = span & 0x3fffff;
    const start = end - (span >>> 22);
    const raw =
      end - start === 1 ? input.charAt(start) : input.slice(start, end);
    return {
      name,
      start,
      end,
      value: mapper(raw),
      items: undefined,
    };
  }

  /** @type {ParseTree<V>[]} */
  const items = new Array(nChildren);
  let child = rawTree[ptr + 1] & 0xfffff;
  items[0] = convertFlatNode(rawTree, child, input, mapper);
  for (let i = 1; i < nChildren; i++) {
    child = rawTree[child + 2];
    items[i] = convertFlatNode(rawTree, child, input, mapper);
  }

  const start = items[0].start;
  const end = items[nChildren - 1].end;
  const raw = end - start === 1 ? input.charAt(start) : input.slice(start, end);

  return {
    name,
    start,
    end,
    value: mapper(raw),
    items,
  };
}

/**
 * @template U, V
 * @param {ParseTree<U>} tree
 * @param {(value: U | undefined) => V} mapper
 * @returns {ParseTree<V>}
 */
export function convertNode(tree, mapper) {
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
    return convertFlatNode(anyTree.__tree, anyTree.__pointer, input, mapper);
  }

  const raw = Buffer.isBuffer(tree.value)
    ? /** @type {*} */ (tree.value.toString("utf-8"))
    : tree.value;
  const value = mapper(raw);
  const items = tree.items
    ? tree.items.map((node) => convertNode(node, mapper))
    : undefined;

  return {
    name: tree.name,
    start: tree.start,
    end: tree.end,
    value,
    items,
  };
}

/**
 * @param {string} expression
 * @returns {ParseTree<string>}
 */
export function parseRegExp(expression) {
  const parsed = /** @type {*} */ (parse(expression));
  const rawTree = /** @type {Uint32Array | undefined} */ (parsed.__tree);
  const rootPtr = /** @type {number | undefined} */ (parsed.__pointer);

  if (rawTree !== undefined && rootPtr !== undefined) {
    let ptr = rootPtr;
    while (true) {
      const word0 = rawTree[ptr];
      const symId = word0 & 0xff;
      if (
        (symId === SYM_REGEXP || symId === SYM_EXPRESSION) &&
        word0 >>> 8 > 0
      ) {
        ptr = rawTree[ptr + 1] & 0xfffff;
      } else {
        break;
      }
    }
    return new FlatCstNode(rawTree.slice(0, rootPtr + 3), ptr, expression);
  }

  /**
   * @param {ParseTree<string>} tree
   * @returns {ParseTree<string>}
   */
  function unwrap(tree) {
    if (
      (tree.name === "RegExp" || tree.name === "Expression") &&
      tree.items?.[0]
    ) {
      return unwrap(tree.items[0]);
    }
    return tree;
  }

  return unwrap(parsed);
}

/**
 * @template VALUE
 * @param {ParseTree<VALUE>} left
 * @param {ParseTree<VALUE>} right
 * @returns {ParseTree<VALUE>}
 */
export function createChoiceTree(left, right) {
  return {
    name: "Union",
    start: -1,
    end: -1,
    value: undefined,
    items: [
      left,
      {
        name: "UNION",
        start: -1,
        end: -1,
        value: undefined,
        items: undefined,
      },
      right,
    ],
  };
}
