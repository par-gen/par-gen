import { NFA } from "@knisterpeter/expound-nfa";

import { fromNFA } from "./powerset.js";

describe("fromNFA", () => {
  it("should create a DFA from a given NFA", () => {
    const nfa = NFA.fromRegExp("ab");

    const description = fromNFA(nfa);

    expect(description).toEqual({
      states: ["S0", "S1", "S2"],
      symbols: ["a", "b"],
      transitions: {
        S0: {
          a: "S1",
        },
        S1: {
          b: "S2",
        },
      },
      start: "S0",
      finals: ["S2"],
    });
  });
});
