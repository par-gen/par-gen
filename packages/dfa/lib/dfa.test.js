import { performance } from "perf_hooks";
import { NFA } from "@par-gen/nfa";

import { DFA } from "./dfa.js";

/**
 * @template T
 * @typedef {import('@par-gen/nfa/types/regexp').ParseTree<T>} ParseTree
 */

describe("DFA", () => {
  it("should throw if no states are given", () => {
    expect(
      () =>
        new DFA({
          states: [],
          symbols: [],
          transitions: new Map(),
          start: "",
          finals: [],
        })
    ).toThrow(/Must be created with a list of states/);
  });

  it("should throw if no symbols are given", () => {
    expect(
      () =>
        new DFA({
          states: ["A"],
          symbols: [],
          transitions: new Map(),
          start: "A",
          finals: [],
        })
    ).toThrow(/Must be created with a list of symbols/);
  });

  it("should throw if start state is unknown", () => {
    expect(
      () =>
        new DFA({
          states: ["A"],
          symbols: ["a"],
          transitions: new Map(),
          start: "B",
          finals: [],
        })
    ).toThrow(/Start state 'B' must be included in list of states/);
  });

  it("should throw if final states are now known", () => {
    expect(
      () =>
        new DFA({
          states: ["A"],
          symbols: ["a"],
          transitions: new Map(),
          start: "A",
          finals: ["B"],
        })
    ).toThrow(/Final state 'B' must be included in list of states/);
  });

  it("should throw if transition includes unknown states", () => {
    expect(
      () =>
        new DFA({
          states: ["A"],
          symbols: ["a"],
          transitions: new Map([["B", new Map()]]),
          start: "A",
          finals: ["A"],
        })
    ).toThrow(/Transition contains unknown state 'B'/);
  });

  it("should throw if transition includes unknown symbols", () => {
    expect(
      () =>
        new DFA({
          states: ["A"],
          symbols: ["a"],
          transitions: new Map([["A", new Map([["b", "A"]])]]),
          start: "A",
          finals: ["A"],
        })
    ).toThrow(/Transition from 'A' contains unknown symbol 'b'/);
  });

  it("should throw if transition includes unknown target states", () => {
    expect(
      () =>
        new DFA({
          states: ["A"],
          symbols: ["a"],
          transitions: new Map([["A", new Map([["a", "B"]])]]),
          start: "A",
          finals: ["A"],
        })
    ).toThrow(
      /Transition from 'A' with symbol 'a' contains unknown target state 'B'/
    );
  });

  it("should accept a valid sentence", () => {
    const dfa = new DFA({
      states: ["A", "B", "C"],
      symbols: ["a", "b"],
      transitions: new Map([
        ["A", new Map([["a", "B"]])],
        ["B", new Map([["b", "C"]])],
      ]),
      start: "A",
      finals: ["C"],
    });

    expect(dfa.test(["a", "b"])).toBe(true);
  });

  describe("fromNFA", () => {
    it("should be able to create a DFA from a given NFA", () => {
      const nfa = NFA.fromRegExp("ab(c|d)(e|f)*((gh|ij)(kl|mn))*");

      const dfa = DFA.fromNFA(nfa);

      expect(
        dfa.test([
          "a",
          "b",
          "c",
          "f",
          "f",
          "g",
          "h",
          "m",
          "n",
          "i",
          "j",
          "m",
          "n",
        ])
      ).toBe(true);
    });
  });

  describe("minimal", () => {
    it("should return a minimal compatible DFA", () => {
      const nfa = NFA.fromRegExp("ab(c|d)(e|f)*((gh|ij)(kl|mn))*");

      const dfa = DFA.fromNFA(nfa).minimal();

      expect(
        dfa.test([
          "a",
          "b",
          "c",
          "f",
          "f",
          "g",
          "h",
          "m",
          "n",
          "i",
          "j",
          "m",
          "n",
        ])
      ).toBe(true);
    });
  });

  describe("compile", () => {
    it("should return a minimal compatible compiled DFA", () => {
      const compiled = DFA.fromNFA(
        NFA.fromRegExp("ab(c|d)(e|f)*((gh|ij)(kl|mn))*")
      )
        .minimal()
        .compile((symbol) => symbol.charCodeAt(0));

      expect(compiled(Buffer.from("abcffghmnijmn"))).toBe(true);
    });

    it("should be fast", () => {
      /**
       * @param {string} name
       * @param {() => void} fn
       * @returns {[string, number]}
       */
      const time = (name, fn) => {
        const start = performance.now();
        fn();
        const end = performance.now();
        return [name, end - start];
      };

      const compiled = DFA.fromNFA(
        NFA.fromRegExp("ab(c|d)(e|f)*((gh|ij)(kl|mn))*")
      )
        .minimal()
        .compile((symbol) => symbol.charCodeAt(0));

      const string = "abcffghmnijmn";
      const input = Buffer.from(string);
      const iterations = 50_000_000;

      // make the function hot
      for (let i = 0; i < 1_000; i++) {
        compiled(input);
      }

      const dfaResult = time("dfa", () => {
        for (let i = 0; i < iterations; i++) {
          compiled(input);
        }
      });

      const regexp = new RegExp("ab(?:c|d)(?:e|f)*(?:(?:gh|ij)(?:kl|mn))*");
      // make the expr hot
      for (let i = 0; i < 1_000; i++) {
        regexp.test(string);
      }

      const nativeResult = time("native", () => {
        for (let i = 0; i < iterations; i++) {
          // string.match(regexp);
          regexp.test(string);
        }
      });

      console.log(`
Executing in a loop with ${iterations.toLocaleString()} iterations:
- Running ${dfaResult[0]} took ${dfaResult[1].toFixed(2)} ms
- Running ${nativeResult[0]} took ${nativeResult[1].toFixed(2)} ms
`);

      expect(dfaResult[1]).toBeLessThanOrEqual(nativeResult[1]);
    });
  });
});
