import { optionals } from "./optionals.js";

describe("optionals", () => {
  it("should return a list from given non-optional elements", () => {
    expect(optionals(["A", "B"])).toEqual([["A", "B"]]);
  });

  it("should return an empty list from given from non elements", () => {
    expect(optionals([])).toEqual([]);
  });

  it("should return a list of permutations from optional elements", () => {
    expect(optionals(["A?"])).toEqual(expect.arrayContaining([["A"], []]));
    expect(optionals(["A?", "B"])).toEqual(
      expect.arrayContaining([["A", "B"], ["B"]])
    );
    expect(optionals(["A?", "B", "C?"])).toEqual(
      expect.arrayContaining([["A", "B", "C"], ["A", "B"], ["B", "C"], ["B"]])
    );
  });
});
