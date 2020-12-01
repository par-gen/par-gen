import { lexer } from "./lexer.js";

describe("lexer", () => {
  it("should create a lexer which is executable as evaluated function", () => {
    const code = lexer({ codegen: { module: "function" } });
    const { next } = Function(code)();

    const input = new Uint8Array(Buffer.from("ab z"));

    // match 1
    const matched1 = next(input);

    expect(matched1).toEqual({
      success: true,
      s: "A",
      value: input.subarray(0, 2),
    });

    // match 1
    const matched2 = next(input.subarray(2));

    expect(matched2).toEqual({
      success: true,
      s: "WS",
      value: input.subarray(2, 3),
    });

    // non-match
    const matched3 = next(input.subarray(3));

    expect(matched3).toEqual({
      success: false,
      s: undefined,
      value: undefined,
    });
  });
});
