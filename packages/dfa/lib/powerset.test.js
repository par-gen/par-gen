import { NFA } from "@par-gen/nfa";

import { DFA } from "./dfa.js";
import { fromNFA, transitionEquivClasses } from "./powerset.js";

describe("fromNFA", () => {
  it("should create a DFA from a given NFA", () => {
    const nfa = NFA.fromRegExp("ab");

    const description = fromNFA(nfa, (n) => `S${n}`);

    expect(description).toEqual({
      states: ["S0", "S1", "S2", "S3"],
      symbols: ["a", "b"],
      transitions: new Map([
        [
          "S0",
          new Map([
            ["a", "S1"],
            ["b", "S2"],
          ]),
        ],
        [
          "S1",
          new Map([
            ["a", "S2"],
            ["b", "S3"],
          ]),
        ],
        [
          "S2",
          new Map([
            ["a", "S2"],
            ["b", "S2"],
          ]),
        ],
        [
          "S3",
          new Map([
            ["a", "S2"],
            ["b", "S2"],
          ]),
        ],
      ]),
      start: "S0",
      finals: ["S3"],
    });
  });

  it("should allow to create custom states", () => {
    const nfa = NFA.fromRegExp("a");

    const description = fromNFA(nfa, (n, o) => `S${n} <- Nfa(${o})`);

    expect(description).toEqual({
      states: ["S0 <- Nfa(S0)", "S1 <- Nfa(S1)", "S2 <- Nfa()"],
      symbols: ["a"],
      transitions: new Map([
        ["S0 <- Nfa(S0)", new Map([["a", "S1 <- Nfa(S1)"]])],
        ["S1 <- Nfa(S1)", new Map([["a", "S2 <- Nfa()"]])],
        ["S2 <- Nfa()", new Map([["a", "S2 <- Nfa()"]])],
      ]),
      start: "S0 <- Nfa(S0)",
      finals: ["S1 <- Nfa(S1)"],
    });
  });

  it("should partition a 256-symbol alphabet into byte equivalence classes", () => {
    const nfa = NFA.fromRegExp('a([^"\\\\]|\\\\.)*b');
    const description = fromNFA(nfa, (n) => `S${n}`);

    expect(description.symbols.length).toBe(256);

    const equiv = transitionEquivClasses.get(description.transitions);
    expect(equiv).toBeDefined();
    expect(equiv?.symClass.length).toBe(256);
    // Only 'a', 'b', '"', and '\\' vs other bytes are distinguished (<= 5 equivalence classes)
    expect(equiv?.classRep.length).toBeLessThanOrEqual(5);

    // Every symbol in the same equivalence class must have identical transitions across all DFA states
    for (const row of description.transitions.values()) {
      expect(Array.from(row.keys())).toEqual(description.symbols);
      for (let sIdx = 0; sIdx < description.symbols.length; sIdx++) {
        const c = /** @type {number} */ (equiv?.symClass[sIdx]);
        const repIdx = /** @type {number} */ (equiv?.classRep[c]);
        expect(row.get(description.symbols[sIdx])).toBe(
          row.get(description.symbols[repIdx])
        );
      }
    }

    const dfa = new DFA(description);
    expect(dfa.test(["a", "x", "y", "b"])).toBe(true);
    expect(dfa.test(["a", "\\", '"', "b"])).toBe(true);
    expect(dfa.test(["a", '"', "b"])).toBe(false);
    expect(dfa.test(["a", "\\", "b"])).toBe(false);
  });

  it("should handle 256-symbol NFAs where a single state has multiple distinct target masks", () => {
    const symbols = Array.from({ length: 256 }, (_, i) =>
      String.fromCharCode(i)
    );
    const s0Trans = new Map();
    for (let i = 0; i < 256; i++) {
      const ch = symbols[i];
      if (i >= 48 && i <= 57) {
        s0Trans.set(ch, ["N1"]);
      } else if (i >= 97 && i <= 122) {
        s0Trans.set(ch, ["N2"]);
      }
    }
    const nfa = new NFA({
      states: ["N0", "N1", "N2"],
      symbols,
      transitions: new Map([["N0", s0Trans]]),
      start: "N0",
      finals: ["N1", "N2"],
    });

    const description = fromNFA(nfa, (n) => `S${n}`);
    const equiv = transitionEquivClasses.get(description.transitions);
    expect(equiv?.classRep.length).toBe(3);

    const dfa = new DFA(description);
    expect(dfa.test(["5"])).toBe(true);
    expect(dfa.test(["m"])).toBe(true);
    expect(dfa.test(["!"])).toBe(false);
  });
});
