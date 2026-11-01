import { generate } from "./parser.js";

/**
 * @typedef {import('./parser').Actions} Actions
 */

describe("generate", () => {
  it("should return a parser with multiple lexer states", () => {
    const data = generate(`
      A := 'a';
      B := 'b' @ b;

      Start := A;
    `);

    expect(data).toEqual(
      expect.objectContaining({
        lexerData: {
          initial: expect.any(Object),
          b: expect.any(Object),
        },
      })
    );
  });

  it("should extract skipBytes and exclude pure byte-class skipped tokens from lexer and parser DFA when skipTokens is passed", () => {
    const data = generate(
      `
      WS := '( |\\n|\\r|\\t)( |\\n|\\r|\\t)*';
      A := 'a';
      B := 'b';

      Start := WS? A WS? B WS?;
    `,
      { skipTokens: ["WS"] }
    );

    expect(data.lexerData.initial.skipBytes).toEqual([9, 10, 13, 32]);
    expect(data.parserSymbols).not.toContain("WS");
  });
});
