import { readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

import { EOF, ERROR, parse } from "./parser.js";

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
        tokens: expect.arrayContaining([
          expect.objectContaining({
            name: EOF,
          }),
          expect.objectContaining({
            name: ERROR,
          }),
          {
            uid: expect.any(Number),
            name: "WS",
            expr: " ",
            state: ["initial"],
          },
          {
            uid: expect.any(Number),
            name: "NUMBER",
            expr: "0|1|2|3|4|5|6|7|8|9",
            state: ["initial"],
          },
          {
            uid: expect.any(Number),
            name: "PLUS",
            expr: "+",
            state: ["initial"],
          },
          {
            uid: expect.any(Number),
            name: "MINUS",
            expr: "-",
            state: ["initial"],
          },
        ]),
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
      tokens: expect.arrayContaining([
        expect.objectContaining({
          name: EOF,
        }),
        expect.objectContaining({
          name: ERROR,
        }),
        {
          uid: expect.any(Number),
          name: "A",
          expr: " ",
          state: expect.any(Array),
        },
      ]),
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
      tokens: expect.arrayContaining([
        expect.objectContaining({
          name: EOF,
        }),
        expect.objectContaining({
          name: ERROR,
        }),
        {
          uid: expect.any(Number),
          name: "A_B",
          expr: " ",
          state: expect.any(Array),
        },
      ]),
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
      tokens: expect.arrayContaining([
        expect.objectContaining({
          name: EOF,
        }),
        expect.objectContaining({
          name: ERROR,
        }),
        {
          uid: expect.any(Number),
          name: "A",
          expr: "a",
          state: expect.any(Array),
        },
        {
          uid: expect.any(Number),
          name: "B",
          expr: "b",
          state: expect.any(Array),
        },
      ]),
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
      tokens: expect.arrayContaining([
        expect.objectContaining({
          name: EOF,
        }),
        expect.objectContaining({
          name: ERROR,
        }),
        {
          uid: expect.any(Number),
          name: "A",
          expr: "a",
          state: expect.any(Array),
        },
        {
          uid: expect.any(Number),
          name: "B",
          expr: "b",
          state: expect.any(Array),
        },
      ]),
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
        tokens: expect.arrayContaining([
          expect.objectContaining({
            name: EOF,
          }),
          expect.objectContaining({
            name: ERROR,
          }),
          {
            uid: expect.any(Number),
            name: "A",
            expr: "a",
            state: expect.any(Array),
          },
          {
            uid: expect.any(Number),
            name: "B",
            expr: "b",
            state: expect.any(Array),
          },
        ]),
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

  it("should allow lexer states in tokens", () => {
    const grammar = parse(`
      A := 'a';
      B := 'b' @ b;
      Rule := A B;
    `);

    expect(grammar).toEqual(
      expect.objectContaining({
        tokens: expect.arrayContaining([
          expect.objectContaining({
            name: EOF,
          }),
          expect.objectContaining({
            name: ERROR,
          }),
          {
            uid: expect.any(Number),
            name: "A",
            expr: "a",
            state: ["initial"],
          },
          {
            uid: expect.any(Number),
            name: "B",
            expr: "b",
            state: ["b"],
          },
        ]),
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
        tokens: expect.arrayContaining([
          {
            uid: 0,
            name: "A",
            expr: "a",
            state: expect.any(Array),
          },
          {
            uid: 1,
            name: "B",
            expr: "b",
            state: expect.any(Array),
          },
          expect.objectContaining({
            uid: 2,
            name: EOF,
          }),
          expect.objectContaining({
            uid: 3,
            name: ERROR,
          }),
        ]),
        rules: [
          {
            uid: 4,
            name: "Rule1",
            symbols: ["A"],
            actions: [],
          },
          {
            uid: 5,
            name: "Rule2",
            symbols: ["B"],
            actions: [],
          },
        ],
      })
    );
  });

  it("should strip skipped tokens and deduplicate expanded rules when skipTokens is passed", () => {
    const grammar = parse(
      `
      WS := '[ \\n\\r\\t]+';
      A := 'a';
      B := 'b';
      Rule := WS? A WS B WS?;
    `,
      { skipTokens: ["WS"] }
    );

    expect(grammar.rules).toEqual([
      {
        uid: expect.any(Number),
        name: "Rule",
        symbols: ["A", "B"],
        actions: [],
      },
    ]);
  });

  it("should self-parse grammar.pargen", () => {
    const selfGrammar = readFileSync(
      join(dirname(fileURLToPath(import.meta.url)), "../grammar.pargen"),
      "utf-8"
    );
    const parsed = parse(selfGrammar);

    expect(parsed.tokens.map((t) => t.name)).toEqual([
      "WS",
      "ASSIGN",
      "SEMICOLON",
      "PIPE",
      "AT",
      "EXPR",
      "ACTION",
      "IDENTIFIER",
      EOF,
      ERROR,
    ]);
    expect(parsed.rules[0].name).toBe("Grammar");
    expect(parsed.rules.length).toBeGreaterThan(20);
  });

  it("should support @ skip, @ <state>, skip, and @ <state> -> skip on token declarations", () => {
    const grammar = parse(`
      WS := '[ \\t\\r\\n]+' @ skip;
      LINE_COMMENT := '//[^\\n]*' @ initial, skip;
      BLOCK_COMMENT := '#[^\\n]*' @ custom -> skip;
      A := 'a';
      B := 'b';
      Rule := WS? A B;
    `);

    expect(grammar.tokens).toEqual(
      expect.arrayContaining([
        {
          uid: expect.any(Number),
          name: "WS",
          expr: "[ \\t\\r\\n]+",
          state: ["initial"],
          skip: true,
        },
        {
          uid: expect.any(Number),
          name: "LINE_COMMENT",
          expr: "//[^\\n]*",
          state: ["initial"],
          skip: true,
        },
        {
          uid: expect.any(Number),
          name: "BLOCK_COMMENT",
          expr: "#[^\\n]*",
          state: ["custom"],
          skip: true,
        },
      ])
    );

    expect(grammar.rules).toEqual([
      {
        uid: expect.any(Number),
        name: "Rule",
        symbols: ["A", "B"],
        actions: [],
      },
    ]);
  });

  it("should extract %left, %right, and %nonassoc precedence declarations in order", () => {
    const grammar = parse(`
      %left PLUS MINUS;
      %left STAR SLASH;
      %right POW;
      %nonassoc EQ NEQ;

      PLUS := '\\+';
      MINUS := '-';
      STAR := '\\*';
      SLASH := '/';
      POW := '\\^';
      EQ := '==';
      NEQ := '!=';
      NUM := '[0-9]+';

      Expr := Expr PLUS Expr | NUM;
    `);

    expect(grammar.precedence).toEqual([
      { assoc: "left", symbols: ["PLUS", "MINUS"] },
      { assoc: "left", symbols: ["STAR", "SLASH"] },
      { assoc: "right", symbols: ["POW"] },
      { assoc: "nonassoc", symbols: ["EQ", "NEQ"] },
    ]);
  });

  it("should expand EBNF + and * quantifiers into left-recursive __plus helper rules", () => {
    const grammar = parse(`
      OPEN := '\\[';
      CLOSE := '\\]';
      ITEM := '[a-z]+';

      List := OPEN ITEM* CLOSE;
      NonEmpty := ITEM+;
      WholeStar := ITEM*;
    `);

    expect(grammar.rules).toEqual([
      {
        uid: expect.any(Number),
        name: "List",
        symbols: ["OPEN", "CLOSE"],
        actions: [],
      },
      {
        uid: expect.any(Number),
        name: "List",
        symbols: ["OPEN", "ITEM__plus", "CLOSE"],
        actions: [],
      },
      {
        uid: expect.any(Number),
        name: "NonEmpty",
        symbols: ["ITEM__plus"],
        actions: [],
      },
      {
        uid: expect.any(Number),
        name: "WholeStar",
        symbols: [],
        actions: [],
      },
      {
        uid: expect.any(Number),
        name: "WholeStar",
        symbols: ["ITEM__plus"],
        actions: [],
      },
      {
        uid: expect.any(Number),
        name: "ITEM__plus",
        symbols: ["ITEM"],
        actions: [],
      },
      {
        uid: expect.any(Number),
        name: "ITEM__plus",
        symbols: ["ITEM__plus", "ITEM"],
        actions: [],
      },
    ]);
  });
});
