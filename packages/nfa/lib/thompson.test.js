import { NFA } from "./nfa.js";
import { fromRegExp, fromRegExpParseTree } from "./thompson.js";

/**
 * @typedef {import('@par-gen/regexp/types/generated/parser').Node} Node
 * */

describe("fromRegExp", () => {
  it("should create a NFA from a sequence regular expression", () => {
    const description = fromRegExp("abc");

    const nfa = new NFA(description);

    expect(nfa.test(["a", "b", "c"])).toBe(true);
  });

  it("should create a NFA from an optional regular expression", () => {
    const description = fromRegExp("a*");

    const nfa = new NFA(description);

    expect(nfa.test(["a", "a", "a"])).toBe(true);
    expect(nfa.test([])).toBe(true);
  });

  it("should create a NFA from a choice regular expression", () => {
    const description = fromRegExp("a|b");

    const nfa = new NFA(description);

    expect(nfa.test(["a"])).toBe(true);
    expect(nfa.test(["b"])).toBe(true);
  });

  it("should create a NFA from a character class regular expression", () => {
    const description = fromRegExp("[abc]");

    const nfa = new NFA(description);

    expect(nfa.test(["a"])).toBe(true);
    expect(nfa.test(["b"])).toBe(true);
  });

  it("should create a NFA from a negative character class regular expression", () => {
    const description = fromRegExp("[^abc]");

    const nfa = new NFA(description);

    expect(nfa.test(["d"])).toBe(true);
  });

  it("should create a NFA from a complex regular expression", () => {
    const description = fromRegExp("aa(aa|bb)*(cc)");

    const nfa = new NFA(description);

    expect(nfa.test(["a", "a", "a", "a", "b", "b", "c", "c"])).toBe(true);
    expect(nfa.test(["a", "a", "b", "b", "c", "c"])).toBe(true);
    expect(nfa.test(["a", "a", "c", "c"])).toBe(true);
  });

  it("should support escape sequences", () => {
    const description = fromRegExp("\\.");

    const nfa = new NFA(description);

    expect(nfa.test(["."])).toBe(true);
  });
});

describe("fromRegExpParseTree", () => {
  it("should create a NFA with custom symbols and states", () => {
    /** @type {Node} */
    const tree = {
      name: "RegExp",
      start: 0,
      end: 1,
      value: 1,
      items: [
        {
          name: "Expression",
          start: 0,
          end: 1,
          value: 1,
          items: [
            {
              name: "Atom",
              start: 0,
              end: 1,
              value: 1,
              items: [
                {
                  name: "Character",
                  start: 0,
                  end: 1,
                  value: 1,
                  items: [
                    {
                      name: "CHARACTER",
                      start: 0,
                      end: 1,
                      value: 1,
                      items: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };
    /** @param {number | undefined} v */
    const symbolMapper = (v) => v;
    /**
     * @param {number} n
     */
    const stateFactory = (n) => ({ n });

    const description = fromRegExpParseTree(tree, {
      symbolMapper,
      stateFactory,
    });
    const nfa = new NFA(description);
    const result = nfa.test([1]);

    expect(result).toBe(true);
  });
});
