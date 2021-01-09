/**
 * @typedef {import('@par-gen/regexp/types/generated/parser').Node} Node
 */

/**
 * @template VALUE
 * @typedef {Object} ParseTree
 * @property {ParseTree<VALUE> | undefined} parent
 * @property {symbol} op
 * @property {VALUE | undefined} value
 * @property {ParseTree<VALUE> | undefined} node
 * @property {ParseTree<VALUE>[] | undefined} nodes
 * @property {ParseTree<VALUE> | undefined} left
 * @property {ParseTree<VALUE> | undefined} right
 */

/**
 * @template U, V
 * @param {Node} tree
 * @param {(value: U | undefined) => V} mapper
 * @returns {Node}
 */
export function convertNode(tree, mapper) {
  const value = mapper(
    Buffer.isBuffer(tree.value) ? tree.value.toString() : tree.value
  );
  const items = tree.items
    ? tree.items.map((node) => convertNode(node, mapper))
    : undefined;

  const result = {
    name: tree.name,
    start: tree.start,
    end: tree.end,
    value,
    items,
  };
  return result;
}
