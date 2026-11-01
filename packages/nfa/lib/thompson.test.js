import { NFA } from "./nfa.js";
import { fromRegExp, fromRegExpParseTree } from "./thompson.js";

/**
 * @template VALUE
 * @typedef {import('./regexp').ParseTree<VALUE>} ParseTree
 */

describe("fromRegExp", () => {
  it("should create a NFA from a sequence regular expression", () => {
    const description = fromRegExp("abc");

    const nfa = new NFA(description);

    expect(nfa.test(["a", "b", "c"])).toBe(true);
  });

  it("should create a NFA from an optional (*) regular expression", () => {
    const description = fromRegExp("a*");

    const nfa = new NFA(description);

    expect(nfa.test(["a", "a", "a"])).toBe(true);
    expect(nfa.test([])).toBe(true);
  });

  it("should create a NFA from one-or-more (+) and zero-or-one (?) quantifiers", () => {
    const plusNfa = new NFA(fromRegExp("a+b"));
    expect(plusNfa.test(["b"])).toBe(false);
    expect(plusNfa.test(["a", "b"])).toBe(true);
    expect(plusNfa.test(["a", "a", "a", "b"])).toBe(true);

    const optNfa = new NFA(fromRegExp("a?b"));
    expect(optNfa.test(["b"])).toBe(true);
    expect(optNfa.test(["a", "b"])).toBe(true);
    expect(optNfa.test(["a", "a", "b"])).toBe(false);
  });

  it("should create a NFA from a choice regular expression", () => {
    const description = fromRegExp("a|b");

    const nfa = new NFA(description);

    expect(nfa.test(["a"])).toBe(true);
    expect(nfa.test(["b"])).toBe(true);
  });

  it("should create a NFA from a character class regular expression", () => {
    const description = fromRegExp("[a-c]");

    const nfa = new NFA(description);

    expect(nfa.test(["a"])).toBe(true);
    expect(nfa.test(["b"])).toBe(true);
    expect(nfa.test(["c"])).toBe(true);
    expect(() => nfa.test(["d"])).toThrow("Invalid symbol: 'd'");
  });

  it("should create a NFA from a negative character class regular expression", () => {
    const description = fromRegExp("[^abc]");

    const nfa = new NFA(description);

    expect(() => nfa.test(["a"])).toThrow("Invalid symbol: 'a'");
    expect(nfa.test(["d"])).toBe(true);
  });

  it("should create a NFA from a dot wildcard regular expression", () => {
    const nfa = new NFA(fromRegExp("."));

    expect(nfa.test(["a"])).toBe(true);
    expect(nfa.test(["\x00"])).toBe(true);
    expect(nfa.test(["\xff"])).toBe(true);
  });

  it("should create a NFA from a complex regular expression", () => {
    const description = fromRegExp("aa(aa|bb)*(cc)");

    const nfa = new NFA(description);

    expect(nfa.test(["a", "a", "a", "a", "b", "b", "c", "c"])).toBe(true);
    expect(nfa.test(["a", "a", "b", "b", "c", "c"])).toBe(true);
    expect(nfa.test(["a", "a", "c", "c"])).toBe(true);
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
    ["*", "[\\x2a-\\x2a]"],
  ])("should support escape sequence %p (as %p)", (expected, input) => {
    const nfa = new NFA(fromRegExp(input));

    expect(nfa.test([expected])).toBe(true);
  });
});

describe("fromRegExpParseTree", () => {
  it("should create a NFA with custom symbols and states", () => {
    /** @type {ParseTree<number>} */
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
