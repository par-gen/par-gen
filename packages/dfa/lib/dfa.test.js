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
  });

  describe("toString", () => {
    it("should render a formatted transition table with state colors and escaped symbols", () => {
      const dfa = new DFA({
        states: ["S0", "S1", "S2"],
        symbols: ["a", "\n", "\x01"],
        transitions: new Map([
          [
            "S0",
            new Map([
              ["a", "S1"],
              ["\n", "S2"],
              ["\x01", "S2"],
            ]),
          ],
          [
            "S1",
            new Map([
              ["a", "S1"],
              ["\n", "S1"],
              ["\x01", "S2"],
            ]),
          ],
          [
            "S2",
            new Map([
              ["a", "S2"],
              ["\n", "S2"],
              ["\x01", "S2"],
            ]),
          ],
        ]),
        start: "S0",
        finals: ["S1"],
      });

      const output = dfa.toString();
      const plain = output.replace(/\x1b\[\d+m/g, "");

      expect(plain).toContain("States (3): S0, S1, S2");
      expect(plain).toContain("Symbols (3): a, \\n, \\x01");
      expect(plain).toContain("starting state, accepting state, error state");
      expect(output).toContain("\x1b[34mS0\x1b[0m");
      expect(output).toContain("\x1b[32mS1\x1b[0m");
      expect(output).toContain("\x1b[31mS2\x1b[0m");

      const mapped = dfa.toString((s) => `State_${s}`);
      expect(mapped.replace(/\x1b\[\d+m/g, "")).toContain(
        "States (3): State_S0, State_S1, State_S2"
      );
    });
  });
});
