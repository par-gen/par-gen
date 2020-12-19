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
            actions: [],
          },
          {
            name: "Expression",
            symbols: ["Minus"],
            actions: [],
          },
          {
            name: "Plus",
            symbols: ["NUMBER", "WS", "PLUS", "WS", "NUMBER"],
            actions: [],
          },
          {
            name: "Minus",
            symbols: ["NUMBER", "WS", "MINUS", "WS", "NUMBER"],
            actions: [],
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

  it("should allow alternatives in rules", () => {
    const grammar = parse(`
      A := 'a';
      B := 'b';
      Rule := A | B;
    `);
    expect(grammar).toEqual({
      tokens: [
        { name: "A", expr: "a" },
        { name: "B", expr: "b" },
      ],
      rules: [
        {
          name: "Rule",
          symbols: ["A"],
          actions: [],
        },
        {
          name: "Rule",
          symbols: ["B"],
          actions: [],
        },
      ],
    });
  });

  it("should allow optional symbols in rules", () => {
    const grammar = parse(`
      A := 'a';
      B := 'b';
      Rule := A? B A?;
    `);
    expect(grammar).toEqual({
      tokens: [
        { name: "A", expr: "a" },
        { name: "B", expr: "b" },
      ],
      rules: expect.arrayContaining([
        {
          name: "Rule",
          symbols: ["A", "B", "A"],
          actions: [],
        },
        {
          name: "Rule",
          symbols: ["B", "A"],
          actions: [],
        },
        {
          name: "Rule",
          symbols: ["A", "B"],
          actions: [],
        },
        {
          name: "Rule",
          symbols: ["B"],
          actions: [],
        },
      ]),
    });
  });

  it("should allow semantic actions in rules", () => {
    const grammar = parse(`
      A := 'a';
      B := 'b';
      Rule := { /* code */ } A B A { /* code */ };
    `);

    expect(grammar).toEqual(
      expect.objectContaining({
        tokens: [
          {
            name: "A",
            expr: "a",
          },
          {
            name: "B",
            expr: "b",
          },
        ],
        rules: [
          {
            name: "Rule",
            symbols: ["A", "B", "A"],
            actions: [
              { at: 0, code: "/* code */" },
              { at: 3, code: "/* code */" },
            ],
          },
        ],
      })
    );
  });
});
