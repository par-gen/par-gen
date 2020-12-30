import { NFA } from "@par-gen/nfa";

import { fromNFA } from "./powerset.js";

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
      states: ["S0 <- Nfa(S0)", "S1 <- Nfa(S3)", "S2 <- Nfa()"],
      symbols: ["a"],
      transitions: new Map([
        ["S0 <- Nfa(S0)", new Map([["a", "S1 <- Nfa(S3)"]])],
        ["S1 <- Nfa(S3)", new Map([["a", "S2 <- Nfa()"]])],
        ["S2 <- Nfa()", new Map([["a", "S2 <- Nfa()"]])],
      ]),
      start: "S0 <- Nfa(S0)",
      finals: ["S1 <- Nfa(S3)"],
    });
  });
});
