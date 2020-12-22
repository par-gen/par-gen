import { parse, ops, convertNode, print } from "./regexp.js";

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
  if (template.nodes?.forEach) {
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
    const tree = parse(".");

    /**
     * @param {ParseTree<string> | undefined} tree
     * @returns {ParseTree<string>[]}
     */
    const getNodes = (tree) => {
      if (!tree) {
        return [];
      }
      return [
        tree,
        ...getNodes(tree.left),
        ...getNodes(tree.right),
        ...getNodes(tree.node),
        ...(tree.nodes ?? []).flatMap((node) => getNodes(node)),
      ];
    };

    const values = getNodes(tree)
      .filter((node) => node.op === ops.match)
      .map((node) => node.value);

    // should contain all 256 possible bytes
    for (let i = 0; i < 256; i++) {
      expect(values).toContain(String.fromCharCode(i));
    }
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

  it("should parse a choice expression with empty branch", () => {
    expect(parse("aa|")).toEqual(
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
              nodes: [],
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

  it.each([
    ["\\", "\\\\"],
    ["(", "\\("],
    [")", "\\)"],
    ["[", "\\["],
    ["]", "\\]"],
    [".", "\\."],
    ["|", "\\|"],
    ["*", "\\*"],
    ["\n", "\\n"],
    ["\r", "\\r"],
    ["\t", "\\t"],
    ["\b", "\\b"],
    ["\f", "\\f"],
    ["a", "\\x61"],
  ])("should allow special character %p (escaped as %p)", (expected, input) => {
    expect(parse(input)).toEqual(
      node({
        op: ops.sequence,
        nodes: [
          node({
            op: ops.match,
            value: expected,
          }),
        ],
      })
    );
  });

  it("should accept character classes", () => {
    expect(parse("[a-c]")).toEqual(
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
              ],
            }),
            right: node({
              op: ops.sequence,
              nodes: [
                node({
                  op: ops.choice,
                  left: node({
                    op: ops.sequence,
                    nodes: [
                      node({
                        op: ops.match,
                        value: "b",
                      }),
                    ],
                  }),
                  right: node({
                    op: ops.sequence,
                    nodes: [
                      node({
                        op: ops.match,
                        value: "c",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        ],
      })
    );
  });

  it("should accept character classes including dash", () => {
    expect(parse("[-]")).toEqual(
      node({
        op: ops.sequence,
        nodes: expect.any(Array),
      })
    );
    expect(parse("[a-]")).toEqual(
      node({
        op: ops.sequence,
        nodes: expect.any(Array),
      })
    );
    expect(parse("[-a]")).toEqual(
      node({
        op: ops.sequence,
        nodes: expect.any(Array),
      })
    );
  });

  it("should accept negative character classes", () => {
    expect(parse("[^\x00-\x60\x64-\xff]")).toEqual(
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
              ],
            }),
            right: node({
              op: ops.sequence,
              nodes: [
                node({
                  op: ops.choice,
                  left: node({
                    op: ops.sequence,
                    nodes: [
                      node({
                        op: ops.match,
                        value: "b",
                      }),
                    ],
                  }),
                  right: node({
                    op: ops.sequence,
                    nodes: [
                      node({
                        op: ops.match,
                        value: "c",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        ],
      })
    );
  });

  it("should accept character classes with special characters", () => {
    expect(parse("[\\x2a-\\x2a]")).toEqual(
      node({
        op: ops.sequence,
        nodes: [
          node({
            op: ops.match,
            value: "*",
          }),
        ],
      })
    );
  });
});

describe("convertNode", () => {
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

describe("print", () => {
  const valueMapper = (value) => value;
  it("should print a sequence node", () => {
    expect(
      print(
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
        }),
        valueMapper
      )
    ).toEqual("abc");
  });

  it("should print an any node", () => {
    expect(
      print(
        node({
          op: ops.sequence,
          nodes: [
            node({
              op: ops.any,
            }),
          ],
        }),
        valueMapper
      )
    ).toEqual(".");
  });

  it("should print an optional node", () => {
    expect(
      print(
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
        }),
        valueMapper
      )
    ).toEqual("a*");
  });

  it("should print a choice node", () => {
    expect(
      print(
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
        }),
        valueMapper
      )
    ).toEqual("aa|bb");
  });

  it("should print a sub expression", () => {
    expect(
      print(
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
        }),
        valueMapper
      )
    ).toEqual("(ab)");
  });

  it("should print a complex expression", () => {
    expect(
      print(
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
        }),
        valueMapper
      )
    ).toEqual("aa(aa|bb)*cc");
  });
});

// /0xff/
