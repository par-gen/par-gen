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
});
