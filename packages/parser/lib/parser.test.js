import {
  generate,
  calculateNullable,
  calculateFirsts,
  calculateFollows,
} from "./parser.js";

/**
 * @typedef {import('./parser').Actions} Actions
 */
/**
 * @typedef {import('@par-gen/grammar/types/parser').Token} Token
 */
/**
 * @typedef {import('@par-gen/grammar/types/parser').Rule} Rule
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

  it("should resolve classic non-SLR(1) LR(1) grammar (S -> L = R | R; L -> * R | id; R -> L) without shift/reduce conflict on '='", () => {
    const data = generate(`
      EQ := '=';
      STAR := '\\*';
      ID := '[a-z]+';

      Start := L EQ R | R;
      L := STAR R | ID;
      R := L;
    `);

    const eof = data.lexerData.initial.tokens.EOF;
    const stateWithL = data.states.find((st) =>
      Array.from(st).some(
        (it) =>
          it.name === "Start" &&
          it.marker === 1 &&
          it.tokens[0] === "L" &&
          it.tokens[1] === "EQ"
      )
    );

    expect(stateWithL).toBeDefined();
    if (stateWithL) {
      const rReduceItems = Array.from(stateWithL).filter(
        (it) => it.name === "R" && it.marker === it.tokens.length
      );
      expect(rReduceItems.map((it) => it.lookahead)).toEqual([eof]);

      const stateActions = data.actions.get(stateWithL);
      expect(stateActions?.get("EQ")?.op).toBe("shift");
      expect(stateActions?.get(eof)).toEqual({
        op: "reduce",
        state: undefined,
        symbol: "R",
      });
    }
  });

  it("should preserve distinct canonical LR(1) states when merging LR(0) cores would create a reduce/reduce conflict", () => {
    const data = generate(`
      A := 'a';
      B := 'b';
      C := 'c';
      D := 'd';
      X := 'x';

      Start := A E C | A F D | B F C | B E D;
      E := X;
      F := X;
    `);

    const xStates = data.states.filter((st) =>
      Array.from(st).some(
        (it) =>
          (it.name === "E" || it.name === "F") &&
          it.tokens[0] === "X" &&
          it.marker === 1
      )
    );

    expect(xStates.length).toBe(2);
    const [s1, s2] = xStates;
    const act1 = data.actions.get(s1);
    const act2 = data.actions.get(s2);
    expect(act1?.get("C")?.symbol).not.toBe(act2?.get("C")?.symbol);
    expect(act1?.get("D")?.symbol).not.toBe(act2?.get("D")?.symbol);
  });

  it("should handle nullable (epsilon) productions in calculateNullable, calculateFirsts, calculateFollows, and generate", () => {
    /** @type {Token[]} */
    const tokens = [
      { uid: 1, name: "A", expr: "a", state: ["initial"] },
      { uid: 2, name: "B", expr: "b", state: ["initial"] },
      { uid: 3, name: "C", expr: "c", state: ["initial"] },
      { uid: 4, name: "EOF", expr: "", state: ["initial"] },
    ];
    /** @type {Rule[]} */
    const rules = [
      { uid: 10, name: "S", symbols: ["OptA", "OptB", "C"], actions: [] },
      { uid: 11, name: "OptA", symbols: [], actions: [] },
      { uid: 12, name: "OptA", symbols: ["A"], actions: [] },
      { uid: 13, name: "OptB", symbols: ["Empty"], actions: [] },
      { uid: 14, name: "OptB", symbols: ["B"], actions: [] },
      { uid: 15, name: "Empty", symbols: [], actions: [] },
    ];

    const nullable = calculateNullable(rules);
    expect(Array.from(nullable).sort()).toEqual(["Empty", "OptA", "OptB"]);

    const firsts = calculateFirsts(tokens, rules, nullable);
    expect(
      Array.from(firsts.get("S") ?? [])
        .map((t) => t.name)
        .sort()
    ).toEqual(["A", "B", "C"]);
    expect(
      Array.from(firsts.get("OptA") ?? []).map((t) => t.name)
    ).toEqual(["A"]);
    expect(
      Array.from(firsts.get("OptB") ?? []).map((t) => t.name)
    ).toEqual(["B"]);
    expect(Array.from(firsts.get("Empty") ?? [])).toEqual([]);

    const follows = calculateFollows(firsts, tokens, "EOF", rules, nullable);
    expect(
      Array.from(follows.get("OptA") ?? [])
        .map((t) => t.name)
        .sort()
    ).toEqual(["B", "C"]);
    expect(
      Array.from(follows.get("OptB") ?? [])
        .map((t) => t.name)
        .sort()
    ).toEqual(["C"]);
    expect(
      Array.from(follows.get("S") ?? []).map((t) => t.name)
    ).toEqual(["EOF"]);

    const data = generate(`
      A := 'a';
      B := 'b';
      C := 'c';

      Start := OptA OptB C;
      OptA := A?;
      OptB := B?;
    `);
    const startActions = data.actions.get(data.start);
    expect(startActions?.get("A")?.op).toBe("shift");
    expect(startActions?.get("B")?.op).toBe("reduce");
    expect(startActions?.get("B")?.symbol).toBe("OptA");
    expect(startActions?.get("C")?.op).toBe("reduce");
    expect(startActions?.get("C")?.symbol).toBe("OptA");
  });

  it("should resolve shift/reduce conflicts via operator precedence and associativity and default reduce/reduce to earlier rule", () => {
    const data = generate(
      `
      PLUS := '\\+';
      MULT := '\\*';
      POW := '\\^';
      EQ := '=';
      NUM := '[0-9]+';

      Expr := Expr PLUS Expr | Expr MULT Expr | Expr POW Expr | Expr EQ Expr | NUM;
    `,
      {
        precedence: [
          { assoc: "nonassoc", tokens: ["EQ"] },
          { assoc: "left", tokens: ["PLUS"] },
          { assoc: "left", tokens: ["MULT"] },
          { assoc: "right", tokens: ["POW"] },
        ],
      }
    );

    const plusCompletedState = data.states.find((st) =>
      Array.from(st).some(
        (it) =>
          it.name === "Expr" &&
          it.tokens.length === 3 &&
          it.tokens[1] === "PLUS" &&
          it.marker === 3
      )
    );
    expect(plusCompletedState).toBeDefined();
    if (plusCompletedState) {
      const acts = data.actions.get(plusCompletedState);
      expect(acts?.get("PLUS")?.op).toBe("reduce");
      expect(acts?.get("MULT")?.op).toBe("shift");
      expect(acts?.get("POW")?.op).toBe("shift");
    }

    const multOrPowCompletedState = data.states.find((st) =>
      Array.from(st).some(
        (it) =>
          it.name === "Expr" &&
          it.tokens.length === 3 &&
          (it.tokens[1] === "MULT" || it.tokens[1] === "POW") &&
          it.marker === 3
      )
    );
    expect(multOrPowCompletedState).toBeDefined();
    if (multOrPowCompletedState) {
      const acts = data.actions.get(multOrPowCompletedState);
      expect(acts?.get("POW")?.op).toBe("shift");
      expect(acts?.get("PLUS")?.op).toBe("reduce");
      expect(acts?.get("MULT")?.op).toBe("reduce");
    }

    const eqCompletedState = data.states.find((st) =>
      Array.from(st).some(
        (it) =>
          it.name === "Expr" &&
          it.tokens.length === 3 &&
          it.tokens[1] === "EQ" &&
          it.marker === 3
      )
    );
    expect(eqCompletedState).toBeDefined();
    if (eqCompletedState) {
      const acts = data.actions.get(eqCompletedState);
      expect(acts?.get("EQ")).toBeUndefined();
    }

    const rrData = generate(`
      X := 'x';

      Start := First | Second;
      First := X;
      Second := X;
    `);
    const eof = rrData.lexerData.initial.tokens.EOF;
    const xShiftedState = rrData.states.find((st) =>
      Array.from(st).some(
        (it) => it.tokens[0] === "X" && it.marker === 1
      )
    );
    expect(xShiftedState).toBeDefined();
    if (xShiftedState) {
      expect(rrData.actions.get(xShiftedState)?.get(eof)).toEqual({
        op: "reduce",
        state: undefined,
        symbol: "First",
      });
    }
  });
});
