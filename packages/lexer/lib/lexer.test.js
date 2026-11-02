import { generate, computeEquivalenceClasses } from "./lexer.js";

describe("generate", () => {
  it("should return states, tables, ... to generate a lexer", () => {
    const data = generate(`
      A := 'a';
    `);

    expect(data).toEqual({
      tokens: { EOF: "@par-gen.EOF", ERROR: "@par-gen.ERROR" },
      tokenIds: [0, 0, undefined, 1, 2],
      tokenNames: ["A", "A", undefined, "@par-gen.EOF", "@par-gen.ERROR"],
      errorState: 512,
      transitions: [
        [0, [[97, 512]]],
        [256, [[97, 0]]],
        [512, [[97, 512]]],
      ],
      start: 256,
      finals: [0],
    });
  });

  it("should compute minimal byte equivalence classes with class 0 assigned to the largest class", () => {
    const data = generate(`
      DIGITS := '[0-9]+';
      LETTERS := '[a-z]+';
    `);

    const ec = computeEquivalenceClasses(data);
    expect(ec.numClasses).toBe(3);
    expect(ec.columns).toBe(4);
    expect(ec.shift).toBe(2);
    expect(ec.classMap[0]).toBe(0);
    const digitClass = ec.classMap["0".charCodeAt(0)];
    const letterClass = ec.classMap["a".charCodeAt(0)];
    expect(digitClass).toBeGreaterThan(0);
    expect(letterClass).toBeGreaterThan(0);
    expect(digitClass).not.toBe(letterClass);
    for (let c = "0".charCodeAt(0); c <= "9".charCodeAt(0); c++) {
      expect(ec.classMap[c]).toBe(digitClass);
    }
    for (let c = "a".charCodeAt(0); c <= "z".charCodeAt(0); c++) {
      expect(ec.classMap[c]).toBe(letterClass);
    }
  });
});
