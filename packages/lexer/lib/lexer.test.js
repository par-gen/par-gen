import { generate } from "./lexer.js";

describe("generate", () => {
  it("should return states, tables, ... to generate a lexer", () => {
    const data = generate(`
      A := 'a';
    `);

    expect(data).toEqual({
      tokens: { EOF: "@par-gen.EOF", ERROR: "@par-gen.ERROR" },
      tokenIds: [0, 1, 2, 2, undefined],
      tokenNames: ["@par-gen.EOF", "@par-gen.ERROR", "A", "A", undefined],
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
});
