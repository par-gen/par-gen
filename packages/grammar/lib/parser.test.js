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
            uid: expect.any(Number),
            name: "WS",
            expr: " ",
            state: "initial",
          },
          {
            uid: expect.any(Number),
            name: "NUMBER",
            expr: "0|1|2|3|4|5|6|7|8|9",
            state: "initial",
          },
          {
            uid: expect.any(Number),
            name: "PLUS",
            expr: "+",
            state: "initial",
          },
          {
            uid: expect.any(Number),
            name: "MINUS",
            expr: "-",
            state: "initial",
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
            uid: expect.any(Number),
            name: "Expression",
            symbols: ["Plus"],
            actions: [],
          },
          {
            uid: expect.any(Number),
            name: "Expression",
            symbols: ["Minus"],
            actions: [],
          },
          {
            uid: expect.any(Number),
            name: "Plus",
            symbols: ["NUMBER", "WS", "PLUS", "WS", "NUMBER"],
            actions: [],
          },
          {
            uid: expect.any(Number),
            name: "Minus",
            symbols: ["NUMBER", "WS", "MINUS", "WS", "NUMBER"],
            actions: [],
          },
        ],
      })
    );
  });

  it("should allow multiline rules", () => {
    const result = parse(`
      A := ' ';
      Rule :=
        A
        ;
    `);

    expect(result).toEqual({
      tokens: [
        {
          uid: expect.any(Number),
          name: "A",
          expr: " ",
          state: "initial",
        },
      ],
      rules: [
        {
          uid: expect.any(Number),
          name: "Rule",
          symbols: ["A"],
          actions: [],
        },
      ],
    });
  });

  it("should prefer tokens over rules if ambiguous", () => {
    const result = parse(`
      A_B := ' ';
    `);

    expect(result).toEqual({
      tokens: [
        {
          uid: expect.any(Number),
          name: "A_B",
          expr: " ",
          state: "initial",
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
        {
          uid: expect.any(Number),
          name: "A",
          expr: "a",
          state: "initial",
        },
        {
          uid: expect.any(Number),
          name: "B",
          expr: "b",
          state: "initial",
        },
      ],
      rules: [
        {
          uid: expect.any(Number),
          name: "Rule",
          symbols: ["A"],
          actions: [],
        },
        {
          uid: expect.any(Number),
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
        {
          uid: expect.any(Number),
          name: "A",
          expr: "a",
          state: "initial",
        },
        {
          uid: expect.any(Number),
          name: "B",
          expr: "b",
          state: "initial",
        },
      ],
      rules: expect.arrayContaining([
        {
          uid: expect.any(Number),
          name: "Rule",
          symbols: ["A", "B", "A"],
          actions: [],
        },
        {
          uid: expect.any(Number),
          name: "Rule",
          symbols: ["B", "A"],
          actions: [],
        },
        {
          uid: expect.any(Number),
          name: "Rule",
          symbols: ["A", "B"],
          actions: [],
        },
        {
          uid: expect.any(Number),
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
            uid: expect.any(Number),
            name: "A",
            expr: "a",
            state: "initial",
          },
          {
            uid: expect.any(Number),
            name: "B",
            expr: "b",
            state: "initial",
          },
        ],
        rules: [
          {
            uid: expect.any(Number),
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

  it("should allow semantic actions in rules", () => {
    const grammar = parse(`
      A := 'a';
      B := 'b' @ b;
      Rule := A B;
    `);

    expect(grammar).toEqual(
      expect.objectContaining({
        tokens: [
          {
            uid: expect.any(Number),
            name: "A",
            expr: "a",
            state: "initial",
          },
          {
            uid: expect.any(Number),
            name: "B",
            expr: "b",
            state: "b",
          },
        ],
        rules: [
          {
            uid: expect.any(Number),
            name: "Rule",
            symbols: ["A", "B"],
            actions: [],
          },
        ],
      })
    );
  });

  it("should assign unique ids to all tokens and rules", () => {
    const grammar = parse(`
      A := 'a';
      B := 'b';

      Rule1 := A;
      Rule2 := B;
    `);

    expect(grammar).toEqual(
      expect.objectContaining({
        tokens: [
          {
            uid: 0,
            name: "A",
            expr: "a",
            state: "initial",
          },
          {
            uid: 1,
            name: "B",
            expr: "b",
            state: "initial",
          },
        ],
        rules: [
          {
            uid: 2,
            name: "Rule1",
            symbols: ["A"],
            actions: [],
          },
          {
            uid: 3,
            name: "Rule2",
            symbols: ["B"],
            actions: [],
          },
        ],
      })
    );
  });
});
