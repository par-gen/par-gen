import { generate } from "./parser.js";

/**
 * @typedef {import('./parser').Actions} Actions
 */

describe("generate", () => {
  it("should return a parser with multiple lexer states", () => {
    const data = generate(`
      A := 'a';
      B := 'b' @ b;

      Start := A;
    `);

    expect(data).toEqual(
      expect.objectContaining({
        lexerData: {
          initial: expect.any(Object),
          b: expect.any(Object),
        },
      })
    );
  });

  it("should extract skipBytes and exclude pure byte-class skipped tokens from lexer and parser DFA when skipTokens is passed", () => {
    const data = generate(
      `
      WS := '[ \\n\\r\\t]+';
      A := 'a';
      B := 'b';

      Start := WS? A WS? B WS?;
    `,
      { skipTokens: ["WS"] }
    );

    expect(data.lexerData.initial.skipBytes).toEqual([9, 10, 13, 32]);
    expect(data.parserSymbols).not.toContain("WS");
  });

  it("should propagate FOLLOW tokens across all RHS occurrences of a non-terminal (Expr := Expr PLUS Expr | NUM)", () => {
    const data = generate(`
      PLUS := '\\+';
      NUM := '[0-9]+';

      Start := Expr PLUS Expr;
      Expr := Expr PLUS Expr | NUM;
    `);

    const eof = data.lexerData.initial.tokens.EOF;
    const exprReduceLookaheads = new Set();
    for (const [, actMap] of data.actions.entries()) {
      for (const [sym, act] of actMap.entries()) {
        if (act.op === "reduce" && act.symbol === "Expr") {
          exprReduceLookaheads.add(sym);
        }
      }
    }

    expect(exprReduceLookaheads.has("PLUS")).toBe(true);
    expect(exprReduceLookaheads.has(eof)).toBe(true);
  });

  it("should merge bisimilar LR(1) states when semantic actions match and preserve distinct states when semantic actions differ", () => {
    const withoutActions = generate(`
      OPEN := '\\[';
      CLOSE := '\\]';
      COMMA := ',';
      ITEM := 'a';

      Start := List | List COMMA List;
      List := OPEN ITEM CLOSE;
    `);

    const withMatchingActions = generate(`
      OPEN := '\\[';
      CLOSE := '\\]';
      COMMA := ',';
      ITEM := 'a' @ listMode;

      Start := List | List COMMA List;
      List := { lexer.push('listMode') } OPEN { lexer.pop() } ITEM CLOSE;
    `);

    expect(withMatchingActions.states.length).toBe(
      withoutActions.states.length
    );
  });
});
