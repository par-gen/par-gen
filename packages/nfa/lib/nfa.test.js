import { Epsilon } from "./constants";
import { NFA } from "./nfa";

describe("NFA", () => {
  it("should have states", () => {
    expect(
      () =>
        new NFA({
          states: [],
          symbols: ["a"],
          transitions: new Map(),
          start: "",
          finals: [],
        })
    ).toThrow(/Must be created with a list of states/);
  });

  it("should have a valid start state", () => {
    expect(
      () =>
        new NFA({
          states: ["A", "B"],
          symbols: ["a"],
          transitions: new Map(),
          start: "C",
          finals: [],
        })
    ).toThrow(/Start state 'C' must be included in list of states/);
  });

  it("should have valid final states", () => {
    expect(
      () =>
        new NFA({
          states: ["A", "B"],
          symbols: ["a"],
          transitions: new Map(),
          start: "A",
          finals: ["C"],
        })
    ).toThrow(/Final state 'C' must be included in list of states \[A, B\]/);
  });

  it("should have at least one final state", () => {
    expect(
      () =>
        new NFA({
          states: ["A", "B"],
          symbols: ["a"],
          transitions: new Map(),
          start: "A",
          finals: [],
        })
    ).toThrow(/Must have at least one final state/);
  });

  it("should have at least one symbol", () => {
    expect(
      () =>
        new NFA({
          states: ["A", "B"],
          symbols: [],
          transitions: new Map(),
          start: "A",
          finals: [],
        })
    ).toThrow(/Must have at least one symbol/);
  });

  it("should contain only valid states in transition table", () => {
    expect(
      () =>
        new NFA({
          states: ["A"],
          symbols: ["a"],
          transitions: new Map([
            ["A", new Map()],
            ["B", new Map()],
          ]),
          start: "A",
          finals: ["A"],
        })
    ).toThrow(/Transitions contain unknown state 'B'/);
  });

  it("should contain only valid symbols in transition table", () => {
    expect(
      () =>
        new NFA({
          states: ["A", "B"],
          symbols: ["a"],
          transitions: new Map([
            ["A", new Map([["a", []]])],
            [
              "B",
              new Map([
                ["a", []],
                ["b", ["A"]],
              ]),
            ],
          ]),
          start: "A",
          finals: ["A"],
        })
    ).toThrow(/Transitions contain unknown symbol 'b'/);
  });

  it("should contain only valid states as targets in transition table", () => {
    expect(
      () =>
        new NFA({
          states: ["A", "B"],
          symbols: ["a", "b"],
          transitions: new Map([
            [
              "A",
              new Map([
                ["a", []],
                ["b", []],
              ]),
            ],
            [
              "B",
              new Map([
                ["a", []],
                ["b", ["C"]],
              ]),
            ],
          ]),
          start: "A",
          finals: ["A"],
        })
    ).toThrow(/Transitions contain unknown target state 'C'/);
  });

  it("should allow to test the created automata", () => {
    const nfa = new NFA({
      states: ["A", "B"],
      symbols: ["a"],
      transitions: new Map([
        ["A", new Map([["a", ["B"]]])],
        ["B", new Map([["a", []]])],
      ]),
      start: "A",
      finals: ["B"],
    });

    expect(nfa.test(["a"])).toBeTruthy();
  });

  it("should allow epsilon transitions", () => {
    const nfa = new NFA({
      states: ["A", "B"],
      symbols: ["a"],
      transitions: new Map([
        [
          "A",
          new Map([
            [Epsilon, ["B"]],
            /** @type {[string|symbol, string[]]} */ (["a", []]),
          ]),
        ],
        ["B", new Map()],
      ]),
      start: "A",
      finals: ["B"],
    });

    expect(nfa.test([])).toBeTruthy();
  });

  describe("fromRegExp", () => {
    it("should convert a single sequence regexp into a NFA", async () => {
      const nfa = NFA.fromRegExp("a");

      const result = nfa.test(["a"]);

      expect(result).toBeTruthy();
    });
  });

  it("should create a NFA with non string states and symbols", () => {
    const A = { type: "a" };
    const B = { type: "b" };
    const a = { type: "symbol" };

    const nfa = new NFA({
      states: [A, B],
      symbols: [a],
      transitions: new Map([[A, new Map([[a, [B]]])]]),
      start: A,
      finals: [B],
    });

    const result = nfa.test([a]);

    expect(result).toBeTruthy();
  });
});
