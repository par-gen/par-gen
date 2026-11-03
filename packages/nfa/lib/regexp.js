import { parse } from "@par-gen/regexp";
import {
  SYM_REGEXP,
  SYM_EXPRESSION,
  nodeId,
  nodeName,
  childCount,
  prevSibling,
  leafStart,
  leafEnd,
  nodeStart,
  nodeEnd,
} from "./cst-utils.js";

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
    return nodeName(this.__tree, this.__pointer);
  }

  get start() {
    return nodeStart(this.__tree, this.__pointer);
  }

  get end() {
    return nodeEnd(this.__tree, this.__pointer);
  }

  get value() {
    return this.__input.slice(this.start, this.end);
  }

  get items() {
    const rawTree = this.__tree;
    const pointer = this.__pointer;
    const nChildren = childCount(rawTree, pointer);
    if (nChildren === 0) {
      return undefined;
    }
    /** @type {ParseTree<string>[]} */
    const children = new Array(nChildren);
    let child = pointer - 2;
    for (let i = nChildren - 1; i > 0; i--) {
      children[i] = new FlatCstNode(rawTree, child, this.__input);
      child = prevSibling(rawTree, child);
    }
    children[0] = new FlatCstNode(rawTree, child, this.__input);
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
  const name = nodeName(rawTree, ptr);
  const nChildren = childCount(rawTree, ptr);

  if (nChildren === 0) {
    const start = leafStart(rawTree, ptr);
    const end = leafEnd(rawTree, ptr);
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
  let child = ptr - 2;
  for (let i = nChildren - 1; i > 0; i--) {
    items[i] = convertFlatNode(rawTree, child, input, mapper);
    child = prevSibling(rawTree, child);
  }
  items[0] = convertFlatNode(rawTree, child, input, mapper);

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
      const symId = nodeId(rawTree, ptr);
      if (
        (symId === SYM_REGEXP || symId === SYM_EXPRESSION) &&
        childCount(rawTree, ptr) > 0
      ) {
        ptr -= 2;
      } else {
        break;
      }
    }
    return new FlatCstNode(rawTree.slice(0, rootPtr + 2), ptr, expression);
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
