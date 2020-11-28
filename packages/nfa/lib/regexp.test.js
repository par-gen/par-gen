import { parse, ops } from "./regexp.js";

/**
 * @template T
 * @typedef {import('./regexp').ParseTree<T>} ParseTree
 */

/**
 * @param {Partial<ParseTree<string>>} template
 * @returns {ParseTree<string>}
 */
const node = (template) => {
  const parent = {
    parent: undefined,
    op: ops.match,
    value: undefined,
    node: undefined,
    nodes: undefined,
    left: undefined,
    right: undefined,
    ...template,
  };
  if (template.node) {
    template.node.parent = parent;
  }
  if (template.nodes) {
    template.nodes.forEach((child) => (child.parent = parent));
  }
  if (template.left) {
    template.left.parent = parent;
  }
  if (template.right) {
    template.right.parent = parent;
  }
  return parent;
};

describe("regexp", () => {
  it("should parse a sequence of characters", () => {
    expect(parse("abc")).toEqual(
      node({
        op: ops.sequence,
        nodes: [
          node({
            op: ops.match,
            value: "a",
          }),
          node({
            op: ops.match,
            value: "b",
          }),
          node({
            op: ops.match,
            value: "c",
          }),
        ],
      })
    );
  });

  it("should parse an any character", () => {
    expect(parse(".")).toEqual(
      node({
        op: ops.sequence,
        nodes: [
          node({
            op: ops.any,
          }),
        ],
      })
    );
  });

  it("should parse an optional expression", () => {
    expect(parse("a*")).toEqual(
      node({
        op: ops.sequence,
        nodes: [
          node({
            op: ops.optional,
            node: node({
              op: ops.match,
              value: "a",
            }),
          }),
        ],
      })
    );
  });

  it("should parse a choice expression", () => {
    expect(parse("aa|bb")).toEqual(
      node({
        op: ops.sequence,
        nodes: [
          node({
            op: ops.choice,
            left: node({
              op: ops.sequence,
              nodes: [
                node({
                  op: ops.match,
                  value: "a",
                }),
                node({
                  op: ops.match,
                  value: "a",
                }),
              ],
            }),
            right: node({
              op: ops.sequence,
              nodes: [
                node({
                  op: ops.match,
                  value: "b",
                }),
                node({
                  op: ops.match,
                  value: "b",
                }),
              ],
            }),
          }),
        ],
      })
    );
  });

  it("should parse a sub-expression", () => {
    expect(parse("(ab)")).toEqual(
      node({
        op: ops.sequence,
        nodes: [
          node({
            op: ops.sequence,
            nodes: [
              node({
                op: ops.match,
                value: "a",
              }),
              node({
                op: ops.match,
                value: "b",
              }),
            ],
          }),
        ],
      })
    );
  });

  it("should parse a complex expression", () => {
    expect(parse("aa(aa|bb)*cc")).toEqual(
      node({
        op: ops.sequence,
        nodes: [
          node({
            op: ops.match,
            value: "a",
          }),
          node({
            op: ops.match,
            value: "a",
          }),
          node({
            op: ops.optional,
            node: node({
              op: ops.sequence,
              nodes: [
                node({
                  op: ops.choice,
                  left: node({
                    op: ops.sequence,
                    nodes: [
                      node({
                        op: ops.match,
                        value: "a",
                      }),
                      node({
                        op: ops.match,
                        value: "a",
                      }),
                    ],
                  }),
                  right: node({
                    op: ops.sequence,
                    nodes: [
                      node({
                        op: ops.match,
                        value: "b",
                      }),
                      node({
                        op: ops.match,
                        value: "b",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
          node({
            op: ops.match,
            value: "c",
          }),
          node({
            op: ops.match,
            value: "c",
          }),
        ],
      })
    );
  });
});
