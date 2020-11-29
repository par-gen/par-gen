export const ops = {
  sequence: Symbol("regexp.sequence"),
  match: Symbol("regexp.match"),
  optional: Symbol("regexp.optional"),
  choice: Symbol("regexp.choice"),
  any: Symbol("regexp.any"),
};

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
 * @template VALUE
 * @param {ParseTree<VALUE>} left
 * @param {ParseTree<VALUE>} right
 * @returns {ParseTree<VALUE>}
 */
export function choice(left, right) {
  const node = {
    parent: undefined,
    op: ops.choice,
    value: undefined,
    node: undefined,
    nodes: undefined,
    left,
    right,
  };
  left.parent = node;
  right.parent = node;
  return node;
}

/**
 * @template U, V
 * @param {ParseTree<U>} tree
 * @param {(value: U | undefined) => V} mapper
 * @returns {ParseTree<V>}
 */
export function convertNode(tree, mapper) {
  const value = mapper(tree.value);
  const node = tree.node ? convertNode(tree.node, mapper) : undefined;
  const nodes = tree.nodes
    ? tree.nodes.map((node) => convertNode(node, mapper))
    : undefined;
  const left = tree.left ? convertNode(tree.left, mapper) : undefined;
  const right = tree.right ? convertNode(tree.right, mapper) : undefined;

  const result = {
    parent: undefined,
    op: tree.op,
    value,
    node,
    nodes,
    left,
    right,
  };
  if (node) {
    node.parent = result;
  }
  if (nodes) {
    nodes.forEach((node) => (node.parent = result));
  }
  if (left) {
    left.parent = result;
  }
  if (right) {
    right.parent = result;
  }
  return result;
}

/**
 * @param {string} input
 * @returns {ParseTree<string>}
 */
export function parse(input) {
  return seq(input)[1];
}

/**
 * @param {string} input
 * @returns {[number, ParseTree<string>]}
 */
function seq(input) {
  /** @type {ParseTree<string>[]} */
  const stack = [];
  let i = 0;

  while (i < input.length) {
    const n = next(stack, input.slice(i));
    if (n === Number.MAX_SAFE_INTEGER) {
      // end of sub
      break;
    }
    i = i + n;
  }

  const node = {
    parent: undefined,
    op: ops.sequence,
    value: undefined,
    node: undefined,
    nodes: stack,
    left: undefined,
    right: undefined,
  };
  node.nodes.forEach((child) => (child.parent = node));

  return [i, node];
}

/**
 * @param {ParseTree<string>[]} stack
 * @param {string} input
 * @returns {number}
 */
function next(stack, input) {
  switch (input[0]) {
    case ".": {
      stack.push({
        parent: undefined,
        op: ops.any,
        value: undefined,
        node: undefined,
        nodes: undefined,
        left: undefined,
        right: undefined,
      });
      return 1;
    }
    case "(": {
      const [n, node] = seq(input.slice(1));
      stack.push(node);
      return n + 2;
    }
    case ")": {
      return Number.MAX_SAFE_INTEGER;
    }
    case "|": {
      const [n, right] = seq(input.slice(1));

      const nodes = [...stack];
      /** @type {ParseTree<string>} */
      const left = {
        parent: undefined,
        op: ops.sequence,
        value: undefined,
        node: undefined,
        nodes,
        left: undefined,
        right: undefined,
      };
      nodes.forEach((child) => (child.parent = left));

      const node = {
        parent: undefined,
        op: ops.choice,
        value: undefined,
        node: undefined,
        nodes: undefined,
        left,
        right,
      };
      left.parent = node;
      right.parent = node;

      stack.splice(0, stack.length, node);
      return n + 1;
    }
    case "*": {
      const child = stack.pop();
      if (!child) {
        throw new Error("Illegal state");
      }
      const node = {
        parent: undefined,
        op: ops.optional,
        value: undefined,
        node: child,
        nodes: undefined,
        left: undefined,
        right: undefined,
      };
      child.parent = node;
      stack.push(node);
      return 1;
    }
    default: {
      stack.push({
        parent: undefined,
        op: ops.match,
        value: input[0],
        node: undefined,
        nodes: undefined,
        left: undefined,
        right: undefined,
      });
      return 1;
    }
  }
}
