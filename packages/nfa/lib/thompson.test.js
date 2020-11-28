import { NFA } from "./nfa.js";
import { ops } from "./regexp.js";
import { fromRegExp, fromRegExpParseTree } from "./thompson.js";

/**
 * @template VALUE
 * @typedef {import('./regexp').ParseTree<VALUE>} ParseTree
 * */

describe("fromRegExp", () => {
  it("should create a NFA from a sequence regular expression", () => {
    const description = fromRegExp("abc");

    const nfa = new NFA(description);

    expect(nfa.test(["a", "b", "c"])).toBeTruthy();
  });

  it("should create a NFA from an optional regular expression", () => {
    const description = fromRegExp("a*");

    const nfa = new NFA(description);

    expect(nfa.test(["a", "a", "a"])).toBeTruthy();
    expect(nfa.test([])).toBeTruthy();
  });

  it("should create a NFA from a choice regular expression", () => {
    const description = fromRegExp("a|b");

    const nfa = new NFA(description);

    expect(nfa.test(["a"])).toBeTruthy();
    expect(nfa.test(["b"])).toBeTruthy();
  });

  it("should create a NFA from a complex regular expression", () => {
    const description = fromRegExp("aa(aa|bb)*cc");

    const nfa = new NFA(description);

    expect(nfa.test(["a", "a", "a", "a", "b", "b", "c", "c"])).toBeTruthy();
    expect(nfa.test(["a", "a", "b", "b", "c", "c"])).toBeTruthy();
    expect(nfa.test(["a", "a", "c", "c"])).toBeTruthy();
  });

  it("should create a NFA with custom symbols and states", () => {
    /** @type {ParseTree<number>} */
    const tree = {
      parent: undefined,
      op: ops.sequence,
      value: undefined,
      node: undefined,
      nodes: [
        {
          parent: undefined,
          op: ops.match,
          value: 1,
          node: undefined,
          nodes: undefined,
          left: undefined,
          right: undefined,
        },
      ],
      left: undefined,
      right: undefined,
    };
    /** @param {number} n */
    const stateFactory = (n) => ({ n });

    const description = fromRegExpParseTree(tree, stateFactory);
    const nfa = new NFA(description);
    const result = nfa.test([1]);

    expect(result).toBeTruthy();
  });
});
