import { convertNode } from "./regexp.js";

/**
 * @template VALUE
 * @typedef {import('./regexp').ParseTree<VALUE>} ParseTree
 */

/**
 * @template T
 * @param {Partial<ParseTree<T>>} template
 * @returns {ParseTree<T>}
 */
const node = (template) => {
  return {
    name: "",
    start: -1,
    end: -1,
    value: undefined,
    items: [],
    ...template,
  };
};

describe("convertNode", () => {
  it("should convert a match node", () => {
    expect(
      convertNode(
        node({
          name: "Character",
          value: /** @type {*} */ (Buffer.from("a")),
        }),
        (value) => ({
          name: "name",
          value: value,
        })
      )
    ).toEqual(
      node({
        name: "Character",
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
          name: "Union",
          items: [
            node({}),
            node({
              name: "UNION",
            }),
            node({}),
          ],
        }),
        (value) => ({
          name: "name",
          value: value,
        })
      )
    ).toEqual(
      node({
        name: "Union",
        value: {
          name: "name",
          value: undefined,
        },
        items: [
          node({
            value: {
              name: "name",
              value: undefined,
            },
          }),
          node({
            name: "UNION",
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

  it("should convert an optional node", () => {
    expect(
      convertNode(
        node({
          name: "Atom",
          items: [
            node({}),
            node({
              name: "QUANTIFIER",
            }),
          ],
        }),
        (value) => ({
          name: "name",
          value: value,
        })
      )
    ).toEqual(
      node({
        name: "Atom",
        value: {
          name: "name",
          value: undefined,
        },
        items: [
          node({
            value: {
              name: "name",
              value: undefined,
            },
          }),
          node({
            name: "QUANTIFIER",
            value: {
              name: "name",
              value: undefined,
            },
          }),
        ],
      })
    );
  });

  it("should convert an sequence node", () => {
    expect(
      convertNode(
        node({
          name: "Sequence",
          items: [node({}), node({})],
        }),
        (value) => ({
          name: "name",
          value: value,
        })
      )
    ).toEqual(
      node({
        name: "Sequence",
        value: {
          name: "name",
          value: undefined,
        },
        items: [
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
