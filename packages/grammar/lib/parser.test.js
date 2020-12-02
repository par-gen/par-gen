import { parse } from "./parser.js";

describe("parse", () => {
  it("should return a list of tokens from a grammar", () => {
    const result = parse(`
      # terminals

      NUMBER := 0|1|2|3|4|5|6|7|8|9;
      PLUS := +;
      MINUS := -;
      
      # rules
      
      Expression <- Plus;
      Expression <- Minus;
      Plus <- NUMBER PLUS NUMBER;
      Minus <- NUMBER MINUS NUMBER;
    `);

    expect(result).toEqual(
      expect.objectContaining({
        tokens: [
          {
            name: "NUMBER",
            expr: "0|1|2|3|4|5|6|7|8|9",
          },
          {
            name: "PLUS",
            expr: "+",
          },
          {
            name: "MINUS",
            expr: "-",
          },
        ],
      })
    );
  });

  it("should return a list of rules fro a grammar", () => {
    const result = parse(`
      # terminals

      NUMBER := 0|1|2|3|4|5|6|7|8|9;
      PLUS := +;
      MINUS := -;
      
      # rules
      
      Expression <- Plus;
      Expression <- Minus;
      Plus <- NUMBER PLUS NUMBER;
      Minus <- NUMBER MINUS NUMBER;
    `);

    expect(result).toEqual(
      expect.objectContaining({
        rules: [
          {
            name: "Expression",
            symbols: ["Plus"],
          },
          {
            name: "Expression",
            symbols: ["Minus"],
          },
          {
            name: "Plus",
            symbols: ["NUMBER", "PLUS", "NUMBER"],
          },
          {
            name: "Minus",
            symbols: ["NUMBER", "MINUS", "NUMBER"],
          },
        ],
      })
    );
  });
});
