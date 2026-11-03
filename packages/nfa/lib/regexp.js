import { parse } from "@par-gen/regexp";
import {
  SYM_REGEXP,
  SYM_EXPRESSION,
  nodeId,
  nodeName,
  childCount,
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

/**
 * @template U, V
 * @param {ParseTree<U>} tree
 * @param {(value: U | undefined) => V} mapper
 * @returns {ParseTree<V>}
 */
export function convertNode(tree, mapper) {
  const anyTree = /** @type {*} */ (tree);
  if (anyTree.__tree !== undefined && anyTree.__pointer !== undefined) {
    const prevMapper = anyTree.__mapper;
    const nextMapper = prevMapper
      ? /** @param {*} val */ (val) => mapper(prevMapper(val))
      : mapper;
    return /** @type {*} */ ({
      __tree: anyTree.__tree,
      __pointer: anyTree.__pointer,
      __input: anyTree.__input,
      __mapper: nextMapper,
      name: tree.name,
      start: tree.start,
      end: tree.end,
      value: nextMapper(undefined),
      items: undefined,
    });
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
  const rawTree = /** @type {Uint32Array} */ (parsed.__tree);
  const rootPtr = /** @type {number} */ (parsed.__pointer);
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
  return /** @type {*} */ ({
    __tree: rawTree.slice(0, rootPtr + 2),
    __pointer: ptr,
    __input: expression,
    name: nodeName(rawTree, ptr),
    start: 0,
    end: expression.length,
    value: expression,
    items: undefined,
  });
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
