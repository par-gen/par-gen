import { parse } from "@par-gen/regexp";

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
  const parsed = /** @type {ParseTree<string>} */ (
    /** @type {*} */ (parse(expression))
  );

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
