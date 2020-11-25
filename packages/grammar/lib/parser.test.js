import { parse } from "./parser.js";

describe("parse", () => {
  it("should return a list of tokens from a grammar", () => {
    const result = parse(`
      # terminals

      NUMBER := 0|1|2|3|4|5|6|7|8|9;
      
      # rules
      
      Expression <- Plus | Minus;
      Plus <- NUMBER '+' NUMBER;
      Minus <- NUMBER '-' NUMBER;
    `);

    expect(result).toEqual(
      expect.objectContaining({
        tokens: [
          {
            name: "NUMBER",
            expr: "0|1|2|3|4|5|6|7|8|9",
          },
        ],
      })
    );
  });
});
