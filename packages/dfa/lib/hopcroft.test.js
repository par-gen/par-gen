import { NFA } from "@knisterpeter/expound-nfa";
import { DFA } from "./dfa.js";

import { hopcroft } from "./hopcroft.js";

describe("hopcroft", () => {
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

    const minimal = hopcroft(dfa, (n) => `S${n}`);

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

    const minimal = hopcroft(dfa, (n, s) => `S${n} <- Nfa(${s})`);

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
});
