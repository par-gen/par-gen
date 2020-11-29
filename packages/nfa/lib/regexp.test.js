import { parse, ops, convertNode } from "./regexp.js";

/**
 * @template T
 * @typedef {import('./regexp').ParseTree<T>} ParseTree
 */

/**
 * @template T
 * @param {Partial<ParseTree<T>>} template
 * @returns {ParseTree<T>}
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

describe("parse", () => {
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

describe("convertNode", () => {
  it("should convert an any node", () => {
    expect(
      convertNode(
        node({
          op: ops.any,
          value: undefined,
        }),
        (value) => ({
          name: "name",
          value: value,
        })
      )
    ).toEqual(
      node({
        op: ops.any,
        value: {
          name: "name",
          value: undefined,
        },
      })
    );
  });

  it("should convert a match node", () => {
    expect(
      convertNode(
        node({
          op: ops.match,
          value: "a",
        }),
        (value) => ({
          name: "name",
          value: value,
        })
      )
    ).toEqual(
      node({
        op: ops.match,
        value: {
          name: "name",
          value: "a",
        },
      })
    );
  });

  it("should convert a choice node", () => {
    expect(
      convertNode(
        node({
          op: ops.choice,
          left: node({}),
          right: node({}),
        }),
        (value) => ({
          name: "name",
          value: value,
        })
      )
    ).toEqual(
      node({
        op: ops.choice,
        value: {
          name: "name",
          value: undefined,
        },
        left: node({
          value: {
            name: "name",
            value: undefined,
          },
        }),
        right: node({
          value: {
            name: "name",
            value: undefined,
          },
        }),
      })
    );
  });

  it("should convert an optional node", () => {
    expect(
      convertNode(
        node({
          op: ops.optional,
          node: node({}),
        }),
        (value) => ({
          name: "name",
          value: value,
        })
      )
    ).toEqual(
      node({
        op: ops.optional,
        value: {
          name: "name",
          value: undefined,
        },
        node: node({
          value: {
            name: "name",
            value: undefined,
          },
        }),
      })
    );
  });

  it("should convert an sequence node", () => {
    expect(
      convertNode(
        node({
          op: ops.sequence,
          nodes: [node({}), node({})],
        }),
        (value) => ({
          name: "name",
          value: value,
        })
      )
    ).toEqual(
      node({
        op: ops.sequence,
        value: {
          name: "name",
          value: undefined,
        },
        nodes: [
          node({
            value: {
              name: "name",
              value: undefined,
            },
          }),
          node({
            value: {
              name: "name",
              value: undefined,
            },
          }),
        ],
      })
    );
  });
});
