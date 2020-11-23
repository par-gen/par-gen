import { NFA } from "@knisterpeter/expound-nfa";

import { DFA } from "./dfa.js";

describe("DFA", () => {
  it("should throw if no states are given", () => {
    expect(
      () =>
        new DFA({
          states: [],
          symbols: [],
          transitions: {},
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
          transitions: {},
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
          transitions: {},
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
          transitions: {},
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
          transitions: {
            B: {},
          },
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
          transitions: {
            A: {
              b: "A",
            },
          },
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
          transitions: {
            A: {
              a: "B",
            },
          },
          start: "A",
          finals: ["A"],
        })
    ).toThrow(
      /Transition from 'A' with symbol 'a' contains unknown target state 'B'/
    );
  });

  it("should accept a define valid sentence", () => {
    const dfa = new DFA({
      states: ["A", "B", "C"],
      symbols: ["a", "b"],
      transitions: {
        A: {
          a: "B",
        },
        B: {
          b: "C",
        },
      },
      start: "A",
      finals: ["C"],
    });

    expect(dfa.test(["a", "b"])).toBeTruthy();
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
      ).toBeTruthy();
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
      ).toBeTruthy();
    });
  });

  describe("generate", () => {
    it("should return the dfa code", () => {
      const automata = DFA.fromNFA(
        NFA.fromRegExp("ab(c|d)(e|f)*((gh|ij)(kl|mn))*")
      )
        .minimal()
        .automata();

      expect(
        automata(Uint8Array.from(Buffer.from("abcffghmnijmn")))
      ).toBeTruthy();
    });
  });
});
