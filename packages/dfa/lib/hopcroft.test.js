import { DFA } from "./dfa.js";

import { hopcroft } from "./hopcroft.js";

describe("hopcroft", () => {
  it("should create an equivalent minimal DFA", () => {
    const dfa = new DFA({
      states: ["1", "2", "3", "4", "5"],
      symbols: ["a", "b", "c", "d"],
      transitions: {
        1: {
          a: "2",
          b: "3",
        },
        2: {
          c: "4",
        },
        3: {
          c: "5",
        },
        4: {
          d: "4",
        },
        5: {
          d: "5",
        },
      },
      start: "1",
      finals: ["4", "5"],
    });

    const minimal = hopcroft(dfa);

    expect(minimal).toEqual({
      states: ["S0", "S1", "S2"],
      symbols: ["a", "b", "c", "d"],
      transitions: {
        S0: {
          d: "S0",
        },
        S1: {
          c: "S0",
        },
        S2: {
          a: "S1",
          b: "S1",
        },
      },
      start: "S2",
      finals: ["S0"],
    });
  });
});
