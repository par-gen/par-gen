import { NFA } from "@par-gen/nfa";
import { DFA } from "./dfa.js";

import { minimize } from "./hopcroft.js";

describe("minimize", () => {
  it("should create an equivalent minimal DFA", () => {
    const dfa = new DFA({
      states: ["1", "2", "3", "4", "5"],
      symbols: ["a", "b", "c", "d"],
      transitions: new Map([
        [
          "1",
          new Map([
            ["a", "2"],
            ["b", "3"],
          ]),
        ],
        ["2", new Map([["c", "4"]])],
        ["3", new Map([["c", "5"]])],
        ["4", new Map([["d", "4"]])],
        ["5", new Map([["d", "5"]])],
      ]),
      start: "1",
      finals: ["4", "5"],
    });

    const minimal = minimize(dfa, { stateMapper: (n) => `S${n}` });

    expect(minimal).toEqual({
      states: ["S0", "S1", "S2"],
      symbols: ["a", "b", "c", "d"],
      transitions: new Map([
        ["S0", new Map([["d", "S0"]])],
        ["S1", new Map([["c", "S0"]])],
        [
          "S2",
          new Map([
            ["a", "S1"],
            ["b", "S1"],
          ]),
        ],
      ]),
      start: "S2",
      finals: ["S0"],
    });
  });

  it("should allow to create custom states", () => {
    const dfa = DFA.fromNFA(NFA.fromRegExp("a"));

    const minimal = minimize(dfa, {
      stateMapper: (n, s) => `S${n} <- Nfa(${s})`,
    });

    expect(minimal).toEqual({
      states: ["S0 <- Nfa(S1)", "S1 <- Nfa(S0)", "S2 <- Nfa(S2)"],
      symbols: ["a"],
      transitions: new Map([
        ["S0 <- Nfa(S1)", new Map([["a", "S2 <- Nfa(S2)"]])],
        ["S1 <- Nfa(S0)", new Map([["a", "S0 <- Nfa(S1)"]])],
        ["S2 <- Nfa(S2)", new Map([["a", "S2 <- Nfa(S2)"]])],
      ]),
      start: "S1 <- Nfa(S0)",
      finals: ["S0 <- Nfa(S1)"],
    });
  });

  it("should minimize a 256-symbol DFA constructed from NFA using byte equivalence classes", () => {
    const dfa = DFA.fromNFA(NFA.fromRegExp("(a|b).c"));
    expect(dfa.description.symbols.length).toBe(256);

    const minimalDesc = minimize(dfa, { stateMapper: (n) => `M${n}` });
    const minimal = new DFA(minimalDesc);

    expect(minimalDesc.symbols.length).toBe(256);
    expect(minimalDesc.states.length).toBeLessThan(
      dfa.description.states.length
    );
    for (const row of minimalDesc.transitions.values()) {
      expect(Array.from(row.keys())).toEqual(minimalDesc.symbols);
    }

    expect(minimal.test(["a", "x", "c"])).toBe(true);
    expect(minimal.test(["b", "!", "c"])).toBe(true);
    expect(minimal.test(["c", "x", "c"])).toBe(false);
  });

  it("should minimize a custom 256-symbol DFA by deduplicating identical symbol columns", () => {
    const symbols = Array.from({ length: 256 }, (_, i) =>
      String.fromCharCode(i)
    );
    /**
     * @param {string} digitTarget
     * @param {string} otherTarget
     */
    const makeRow = (digitTarget, otherTarget) => {
      const row = new Map();
      for (let i = 0; i < 256; i++) {
        row.set(symbols[i], i >= 48 && i <= 57 ? digitTarget : otherTarget);
      }
      return row;
    };

    // States "B1" and "B2" are equivalent; "F1" and "F2" are equivalent finals
    const dfa = new DFA({
      states: ["A", "B1", "B2", "F1", "F2", "ERR"],
      symbols,
      transitions: new Map([
        ["A", makeRow("B1", "B2")],
        ["B1", makeRow("F1", "ERR")],
        ["B2", makeRow("F2", "ERR")],
        ["F1", makeRow("ERR", "ERR")],
        ["F2", makeRow("ERR", "ERR")],
        ["ERR", makeRow("ERR", "ERR")],
      ]),
      start: "A",
      finals: ["F1", "F2"],
    });

    const minimalDesc = minimize(dfa, { stateMapper: (n) => `S${n}` });
    expect(minimalDesc.states.length).toBe(4);
    for (const row of minimalDesc.transitions.values()) {
      expect(Array.from(row.keys())).toEqual(symbols);
    }

    const minimal = new DFA(minimalDesc);
    expect(minimal.test(["5", "9"])).toBe(true);
    expect(minimal.test(["x", "3"])).toBe(true);
    expect(minimal.test(["5", "x"])).toBe(false);
  });
});
