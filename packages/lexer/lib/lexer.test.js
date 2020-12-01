import { lexer } from "./lexer.js";

describe("lexer", () => {
  it("should", () => {
    const code = lexer();

    const fn = Function(code)();
    const result = fn(new Uint8Array(Buffer.from("ab")));

    // console.log({ code, result });

    expect(result).toEqual(
      expect.objectContaining({
        length: 2,
      })
    );
  });
});
