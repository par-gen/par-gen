import { jest } from "@jest/globals";
import { generate as genLexer } from "@par-gen/lexer";
import { generate as genParser } from "@par-gen/parser";

import { JavaScriptFunctionCodegen } from "./javascript-function.js";

describe("JavaScriptFunctionCodegen", () => {
  it("should create a lexer which is executable as evaluated function", async () => {
    const grammar = `
    A := 'ab|ac';
    B := 'b';
    C := 'c';
    D := 'd';
  `;

    const codegen = new JavaScriptFunctionCodegen();
    const { EOF, next } = await codegen.lexer(genLexer(grammar));

    const input = Buffer.from("abbz");

    [
      // match
      [
        {
          state: "A",
          start: 0,
          end: 2,
        },
        0,
      ],
      // match
      [
        {
          state: "B",
          start: 2,
          end: 3,
        },
        2,
      ],
      // miss
      [
        {
          state: EOF,
          start: -1,
          end: -1,
        },
        3,
      ],
    ].forEach(([expected, offset]) => {
      const matched = next(input, /** @type {number} */ (offset));
      expect(matched).toEqual(expected);
    });
  });

  it("should create a lexer with support for escaped tokens", async () => {
    const grammar = `
    A := '\\|';
  `;
    const codegen = new JavaScriptFunctionCodegen();
    const { next } = await codegen.lexer(genLexer(grammar));

    const input = Buffer.from("|");

    const matched = next(input, /** @type {number} */ (0));

    expect(matched).toEqual({
      state: "A",
      start: 0,
      end: 1,
    });
  });

  it("should generate a full executable parser", async () => {
    const data = genParser(`
      POPEN := '\\(';
      PCLOSE := '\\)';
      NUMBER := '0|1|2|3|4|5|6|7|8|9';
      PLUS := '\\+';

      # S := Expr
      Expr := Term;
      Expr := POPEN Expr PCLOSE;
      Term := NUMBER;
      Term := PLUS Term;
      Term := Term PLUS NUMBER;
    `);

    const codegen = new JavaScriptFunctionCodegen();
    const { parse } = await codegen.parser(data);

    const ast = parse("1+1");

    expect(ast).toEqual({
      name: "Expr",
      items: [
        {
          name: "Term",
          items: [
            {
              name: "Term",
              items: [
                {
                  name: "NUMBER",
                  start: 0,
                  end: 1,
                },
              ],
            },
            {
              name: "PLUS",
              start: 1,
              end: 2,
            },
            {
              name: "NUMBER",
              start: 2,
              end: 3,
            },
          ],
        },
      ],
    });
  });

  it("should generate a parser with multiple lexer states", async () => {
    const data = genParser(`
      A := 'a';
      B := 'b' @ b;

      Rule := A;
    `);

    const codegen = new JavaScriptFunctionCodegen();
    const spy = jest.spyOn(codegen, "lexer");

    const { parse } = await codegen.parser(data);

    const ast = parse("a");

    expect(spy).toBeCalledTimes(2);

    expect(ast).toEqual({
      name: "Rule",
      items: [
        {
          name: "A",
          start: 0,
          end: 1,
        },
      ],
    });
  });

  it("should execute multi-state lexer switching via semantic actions", async () => {
    const data = genParser(`
      A := 'a';
      B := 'b' @ b;
      C := 'c';

      RuleA := { lexer.push('b') } A RuleB;
      RuleB := { lexer.pop() } B RuleC;
      RuleC := C;
    `);

    const codegen = new JavaScriptFunctionCodegen();
    const { parse } = await codegen.parser(data);

    const ast = parse("abc");

    expect(ast).toEqual({
      name: "RuleA",
      items: [
        {
          name: "A",
          start: 0,
          end: 1,
        },
        {
          name: "RuleB",
          items: [
            {
              name: "B",
              start: 1,
              end: 2,
            },
            {
              name: "RuleC",
              items: [
                {
                  name: "C",
                  start: 2,
                  end: 3,
                },
              ],
            },
          ],
        },
      ],
    });
  });

  it("should lex and parse inputs larger than 1024 bytes", async () => {
    const data = genParser(`
      NUMBER := '[0-9]+';
      PLUS := '\\+';

      Expr := NUMBER;
      Expr := Expr PLUS NUMBER;
    `);

    const codegen = new JavaScriptFunctionCodegen();
    const { parse } = await codegen.parser(data);

    // 1025 terms of "1+" followed by "1" = 2051 bytes (> 1024 bytes)
    const largeInput = Array(1025).fill("1").join("+");
    expect(largeInput.length).toBeGreaterThan(2048);

    const ast = /** @type {*} */ (parse(largeInput));
    expect(ast.name).toBe("Expr");
    expect(ast.items[2]).toEqual({
      name: "NUMBER",
      start: largeInput.length - 1,
      end: largeInput.length,
    });
  });
});
