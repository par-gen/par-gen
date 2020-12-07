import { lexer } from "./lexer.js";

describe("lexer", () => {
  it("should create a lexer which is executable as evaluated function", () => {
    const grammar = `
      A := 'ab|ac';
      B := 'b';
      C := 'c';
      D := 'd';
    `;
    const code = lexer(grammar, { codegen: { module: "function" } });
    /**
     * @type {{next(input: Uint8Array, offset: number): {success: boolean, state?: string, value?: string}}}
     */
    const { next } = Function(code)();

    const input = new Uint8Array(Buffer.from("abbz"));

    [
      // match
      [
        {
          state: "A",
          start: 0,
          end: 2,
        },
        0,
      ],
      // match
      [
        {
          state: "B",
          start: 2,
          end: 3,
        },
        2,
      ],
      // miss
      [
        {
          state: undefined,
          start: -1,
          end: -1,
        },
        3,
      ],
    ].forEach(([expected, offset]) => {
      const matched = next(input, /** @type {number} */ (offset));
      expect(matched).toEqual(expected);
    });
  });

  it("should create a lexer with support for escaped tokens", () => {
    const grammar = `
      A := '\\|';
    `;
    const code = lexer(grammar, { codegen: { module: "function" } });
    /**
     * @type {{next(input: Uint8Array, offset: number): {success: boolean, state?: string, value?: string}}}
     */
    const { next } = Function(code)();

    const input = new Uint8Array(Buffer.from("|"));

    const matched = next(input, /** @type {number} */ (0));

    expect(matched).toEqual({
      state: "A",
      start: 0,
      end: 1,
    });
  });
});
