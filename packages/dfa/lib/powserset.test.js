import { NFA } from "@knisterpeter/expound-nfa";

import { fromNFA } from "./powerset.js";

describe("fromNFA", () => {
  it("should create a DFA from a given NFA", () => {
    const nfa = NFA.fromRegExp("ab");

    const description = fromNFA(nfa);

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
});
