export const ops = {
  sequence: Symbol("regexp.sequence"),
  match: Symbol("regexp.match"),
  optional: Symbol("regexp.optional"),
  choice: Symbol("regexp.choice"),
};

/**
 * @typedef {Object} ParseTree
 * @property {symbol} op
 * @property {string | undefined} value
 * @property {ParseTree | undefined} node
 * @property {ParseTree[] | undefined} nodes
 * @property {ParseTree | undefined} left
 * @property {ParseTree | undefined} right
 */

/**
 * @param {string} input
 * @returns {ParseTree}
 */
export function parse(input) {
  return seq(input)[1];
}

/**
 * @param {string} input
 * @returns {[number, ParseTree]}
 */
function seq(input) {
  /** @type {ParseTree[]} */
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

  return [
    i,
    {
      op: ops.sequence,
      value: undefined,
      node: undefined,
      nodes: stack,
      left: undefined,
      right: undefined,
    },
  ];
}

/**
 * @param {ParseTree[]} stack
 * @param {string} input
 * @returns {number}
 */
function next(stack, input) {
  switch (input[0]) {
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
      stack.splice(0, stack.length, {
        op: ops.choice,
        value: undefined,
        node: undefined,
        nodes: undefined,
        left: {
          op: ops.sequence,
          value: undefined,
          node: undefined,
          nodes: [...stack],
          left: undefined,
          right: undefined,
        },
        right,
      });
      return n + 1;
    }
    case "*": {
      stack.push({
        op: ops.optional,
        value: undefined,
        node: stack.pop(),
        nodes: undefined,
        left: undefined,
        right: undefined,
      });
      return 1;
    }
    default: {
      stack.push({
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
