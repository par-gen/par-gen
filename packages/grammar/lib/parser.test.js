import { parse } from "./parser.js";

describe("parse", () => {
  let testGrammar = `
    # terminals

    WS := ' ';
    NUMBER := '0|1|2|3|4|5|6|7|8|9';
    PLUS := '+';
    MINUS := '-';
    
    # rules
    
    Expression := Plus;
    Expression := Minus;
    Plus := NUMBER WS PLUS WS NUMBER;
    Minus := NUMBER WS MINUS WS NUMBER;
  `;

  it("should return a list of tokens from a grammar", () => {
    const result = parse(testGrammar);

    expect(result).toEqual(
      expect.objectContaining({
        tokens: [
          {
            name: "WS",
            expr: " ",
          },
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

  it("should return a list of rules from a grammar", () => {
    const result = parse(testGrammar);

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
            symbols: ["NUMBER", "WS", "PLUS", "WS", "NUMBER"],
          },
          {
            name: "Minus",
            symbols: ["NUMBER", "WS", "MINUS", "WS", "NUMBER"],
          },
        ],
      })
    );
  });

  it("should prefer tokens over rules if ambiguous", () => {
    const result = parse(`
      A_B := ' ';
    `);

    expect(result).toEqual({
      tokens: [
        {
          name: "A_B",
          expr: " ",
        },
      ],
      rules: [],
    });
  });

  it("should throw if rule contains unknown symbols", () => {
    expect(() => parse("Rule := TOKEN;")).toThrow(/Unknown symbol 'TOKEN'/);
  });
});
