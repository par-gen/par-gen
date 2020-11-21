import { NFA } from "./nfa.js";
import { fromRegExp } from "./thompson.js";

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

  it("should create a NFA from a complex regular expression ", () => {
    const description = fromRegExp("aa(aa|bb)*cc");

    const nfa = new NFA(description);

    expect(nfa.test(["a", "a", "a", "a", "b", "b", "c", "c"])).toBeTruthy();
    expect(nfa.test(["a", "a", "b", "b", "c", "c"])).toBeTruthy();
    expect(nfa.test(["a", "a", "c", "c"])).toBeTruthy();
  });
});
