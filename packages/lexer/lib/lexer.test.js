import { lexer } from "./lexer.js";

describe("lexer", () => {
  it("should create a lexer which is executable as evaluated function", () => {
    const grammar = `
      A := ab|ac;
      B := b;
      C := c;
      D := d;
    `;
    const code = lexer(grammar, { codegen: { module: "function" } });
    /**
     * @type {{next(input: Uint8Array): {success: boolean, state?: string, value?: string}}}
     */
    const { next } = Function(code)();

    const input = new Uint8Array(Buffer.from("abbz"));
    let view = input.subarray(0);

    [
      // match
      {
        success: true,
        state: "A",
        value: input.subarray(0, 2),
      },
      // match
      {
        success: true,
        state: "B",
        value: input.subarray(2, 3),
      },
      // miss
      {
        success: false,
        state: undefined,
        value: undefined,
      },
    ].forEach((expected) => {
      const matched = next(view);
      expect(matched).toEqual(expected);

      if (matched.value) {
        view = view.subarray(matched.value.length);
      }
    });
  });
});
