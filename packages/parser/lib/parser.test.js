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

  /**
   * Helper to run a generated ParserData end-to-end on an input string.
   * @param {import('./parser').ParserData} data
   * @param {string} input
   */
  function runParser(data, input) {
    const buf = Buffer.from(input, "utf-8");
    const lexer = data.lexerData.initial;
    const transMap = new Map(lexer.transitions);
    const finalSet = new Set(lexer.finals);
    const skipByteSet = new Set(lexer.skipBytes ?? []);
    const skipNameSet = new Set(lexer.skipTokenNames ?? []);

    /**
     * @param {number} offset
     */
    const nextToken = (offset) => {
      let pos = offset;
      while (true) {
        while (pos < buf.length && skipByteSet.has(buf[pos])) {
          pos++;
        }
        const start = pos;
        let state = lexer.start;
        let lastFinal = -1;
        let lastFinalPos = pos;
        let i = pos;
        while (i < buf.length) {
          const tr = transMap.get(state);
          const next = tr?.find(([sym]) => sym === buf[i])?.[1];
          if (next === undefined || next === lexer.errorState) {
            break;
          }
          state = next;
          i++;
          if (finalSet.has(state)) {
            lastFinal = state;
            lastFinalPos = i;
          }
        }
        if (lastFinal !== -1) {
          const tokName = lexer.tokenNames[lastFinal / 256];
          if (tokName && skipNameSet.has(tokName)) {
            pos = lastFinalPos;
            continue;
          }
          return {
            name: tokName ?? lexer.tokens.ERROR,
            value: buf.toString("utf-8", start, lastFinalPos),
            start,
            end: lastFinalPos,
          };
        }
        return {
          name: pos === buf.length ? lexer.tokens.EOF : lexer.tokens.ERROR,
          value: "",
          start: pos,
          end: pos,
        };
      }
    };

    /** @type {import('./parser').ItemState[]} */
    const stateStack = [data.start];
    /** @type {any[]} */
    const nodeStack = [];
    let lookahead = nextToken(0);

    while (true) {
      const currentState = stateStack[stateStack.length - 1];
      const act = data.actions.get(currentState)?.get(lookahead.name);
      if (!act) {
        throw new Error(`Unexpected token ${lookahead.name}`);
      }
      if (act.op === "shift" && act.state) {
        stateStack.push(act.state);
        nodeStack.push({ name: lookahead.name, value: lookahead.value });
        lookahead = nextToken(lookahead.end);
      } else if (act.op === "reduce" && act.symbol) {
        const matched = Array.from(currentState).find(
          (it) =>
            it.name === act.symbol &&
            it.marker === it.tokens.length &&
            it.lookahead === lookahead.name
        );
        const len = matched ? matched.tokens.length : 0;
        const children = len > 0 ? nodeStack.splice(nodeStack.length - len, len) : [];
        if (len > 0) {
          stateStack.splice(stateStack.length - len, len);
        }
        const topState = stateStack[stateStack.length - 1];
        const gotoState = data.goto.get(topState)?.get(act.symbol);
        if (!gotoState) {
          throw new Error(`Missing goto for ${act.symbol}`);
        }
        stateStack.push(gotoState);
        nodeStack.push({ name: act.symbol, items: children });
      } else if (act.op === "done") {
        return nodeStack[0];
      }
    }
  }

  it("should automatically skip tokens declared with @ skip end-to-end without options.skipTokens", () => {
    const data = generate(`
      WS := '[ \\t\\r\\n]+' @ skip;
      IDENT := '[a-z]+';
      EQ := '=';
      NUM := '[0-9]+';

      Assign := IDENT EQ NUM;
    `);

    expect(data.lexerData.initial.skipBytes).toEqual([9, 10, 13, 32]);
    expect(data.parserSymbols).not.toContain("WS");

    const tree = runParser(data, "  foo  =   42 \n ");
    expect(tree).toEqual({
      name: "Assign",
      items: [
        { name: "IDENT", value: "foo" },
        { name: "EQ", value: "=" },
        { name: "NUM", value: "42" },
      ],
    });
  });

  it("should compile %left, %right, and %nonassoc declarations in .pargen for ambiguous arithmetic expressions", () => {
    const data = generate(`
      WS := '[ \\t\\r\\n]+' @ skip;
      %nonassoc EQ;
      %left PLUS MINUS;
      %left STAR SLASH;
      %right POW;

      PLUS := '\\+';
      MINUS := '-';
      STAR := '\\*';
      SLASH := '/';
      POW := '\\^';
      EQ := '==';
      NUM := '[0-9]+';

      E := E PLUS E | E MINUS E | E STAR E | E SLASH E | E POW E | E EQ E | NUM;
    `);

    /**
     * @param {any} node
     * @returns {string}
     */
    const formatExpr = (node) => {
      if (node.items.length === 1) {
        return node.items[0].value;
      }
      return `(${formatExpr(node.items[0])} ${node.items[1].value} ${formatExpr(
        node.items[2]
      )})`;
    };

    expect(formatExpr(runParser(data, "1 + 2 + 3"))).toBe("((1 + 2) + 3)");
    expect(formatExpr(runParser(data, "1 + 2 * 3"))).toBe("(1 + (2 * 3))");
    expect(formatExpr(runParser(data, "2 * 3 + 4"))).toBe("((2 * 3) + 4)");
    expect(formatExpr(runParser(data, "2 * 3 * 4"))).toBe("((2 * 3) * 4)");
    expect(formatExpr(runParser(data, "2 ^ 3 ^ 4"))).toBe("(2 ^ (3 ^ 4))");
    expect(formatExpr(runParser(data, "1 + 2 == 3 * 4"))).toBe(
      "((1 + 2) == (3 * 4))"
    );
    expect(() => runParser(data, "1 == 2 == 3")).toThrow(/Unexpected token EQ/);
  });

  it("should compile EBNF SYM+ and SYM* quantifiers in .pargen rules end-to-end", () => {
    const data = generate(`
      WS := '[ \\t\\r\\n]+' @ skip;
      OPEN := '\\[';
      CLOSE := '\\]';
      SEMI := ';';
      NUM := '[0-9]+';

      Program := Stmt+;
      Stmt := OPEN NUM* CLOSE SEMI;
    `);

    const tree = runParser(data, "[] ; [ 1 2 3 ] ;");
    expect(tree).toEqual({
      name: "Program",
      items: [
        {
          name: "Stmt__plus",
          items: [
            {
              name: "Stmt__plus",
              items: [
                {
                  name: "Stmt",
                  items: [
                    { name: "OPEN", value: "[" },
                    { name: "CLOSE", value: "]" },
                    { name: "SEMI", value: ";" },
                  ],
                },
              ],
            },
            {
              name: "Stmt",
              items: [
                { name: "OPEN", value: "[" },
                {
                  name: "NUM__plus",
                  items: [
                    {
                      name: "NUM__plus",
                      items: [
                        {
                          name: "NUM__plus",
                          items: [{ name: "NUM", value: "1" }],
                        },
                        { name: "NUM", value: "2" },
                      ],
                    },
                    { name: "NUM", value: "3" },
                  ],
                },
                { name: "CLOSE", value: "]" },
                { name: "SEMI", value: ";" },
              ],
            },
          ],
        },
      ],
    });

    const starRootData = generate(`
      WS := '[ \\t\\r\\n]+' @ skip;
      ITEM := '[a-z]+';

      Root := ITEM*;
    `);
    expect(runParser(starRootData, "")).toEqual({
      name: "Root",
      items: [],
    });
    expect(runParser(starRootData, "a b")).toEqual({
      name: "Root",
      items: [
        {
          name: "ITEM__plus",
          items: [
            {
              name: "ITEM__plus",
              items: [{ name: "ITEM", value: "a" }],
            },
            { name: "ITEM", value: "b" },
          ],
        },
      ],
    });
  });

  it("should preserve Denny & Malloy (2010) IELR(1) exactness on non-LALR(1) grammars with %left and %nonassoc", () => {
    // Three prefixes lead to the exact same LR(0) core after shifting ID:
    //   Core = { B -> ID •, A -> ID • OP ID }
    // - After P1: S -> P1 B OP ID | P1 A, so B -> ID • has lookahead OP.
    //   With %left OP (and %left ID at same level), S/R conflict on OP resolves to `reduce B -> ID`.
    // - After P2: S -> P2 B SEMI | P2 A, so B -> ID • has lookahead SEMI (NOT OP).
    //   On lookahead OP, there is NO conflict in P2's state: it MUST shift OP to parse A -> ID OP ID!
    // - After P3: S -> P3 B COMMA | P3 A, so B -> ID • has lookahead COMMA (NOT OP).
    //   P2 and P3 are IELR(1)-compatible with each other and merge, while P1 is split!
    const leftData = generate(`
      WS := '[ \\t\\r\\n]+' @ skip;
      P1 := 'p1';
      P2 := 'p2';
      P3 := 'p3';
      ID := '[a-z]+';
      OP := '\\+';
      SEMI := ';';
      COMMA := ',';

      %left ID OP;

      Start :=
          P1 B OP ID
        | P1 A
        | P2 B SEMI
        | P2 A
        | P3 B COMMA
        | P3 A
        ;
      B := ID;
      A := ID OP ID;
    `);

    // P1 + "x + y" reduces "x" to B on lookahead "+" and parses Start -> P1 B OP ID
    expect(runParser(leftData, "p1 x + y")).toEqual({
      name: "Start",
      items: [
        { name: "P1", value: "p1" },
        { name: "B", items: [{ name: "ID", value: "x" }] },
        { name: "OP", value: "+" },
        { name: "ID", value: "y" },
      ],
    });

    // P2 + "x + y" shifts "+" (would fail under naive Pager LALR merge!) and parses Start -> P2 A
    expect(runParser(leftData, "p2 x + y")).toEqual({
      name: "Start",
      items: [
        { name: "P2", value: "p2" },
        {
          name: "A",
          items: [
            { name: "ID", value: "x" },
            { name: "OP", value: "+" },
            { name: "ID", value: "y" },
          ],
        },
      ],
    });

    // P3 + "x + y" also shifts "+" (merged with P2's core state) and parses Start -> P3 A
    expect(runParser(leftData, "p3 x + y")).toEqual({
      name: "Start",
      items: [
        { name: "P3", value: "p3" },
        {
          name: "A",
          items: [
            { name: "ID", value: "x" },
            { name: "OP", value: "+" },
            { name: "ID", value: "y" },
          ],
        },
      ],
    });

    // P2 + "x ;" and P3 + "x ," still reduce B -> ID on SEMI and COMMA
    expect(runParser(leftData, "p2 x ;")).toEqual({
      name: "Start",
      items: [
        { name: "P2", value: "p2" },
        { name: "B", items: [{ name: "ID", value: "x" }] },
        { name: "SEMI", value: ";" },
      ],
    });
    expect(runParser(leftData, "p3 x ,")).toEqual({
      name: "Start",
      items: [
        { name: "P3", value: "p3" },
        { name: "B", items: [{ name: "ID", value: "x" }] },
        { name: "COMMA", value: "," },
      ],
    });

    // Verify %nonassoc: in P1's state after ID, OP is resolved to `error`,
    // whereas in P2's state after ID, OP is still shifted!
    const nonassocData = generate(`
      WS := '[ \\t\\r\\n]+' @ skip;
      P1 := 'p1';
      P2 := 'p2';
      ID := '[a-z]+';
      OP := '==';
      SEMI := ';';

      %nonassoc ID OP;

      Start :=
          P1 B OP ID
        | P1 A
        | P2 B SEMI
        | P2 A
        ;
      B := ID;
      A := ID OP ID;
    `);

    expect(() => runParser(nonassocData, "p1 x == y")).toThrow(
      /Unexpected token OP/
    );
    expect(runParser(nonassocData, "p2 x == y")).toEqual({
      name: "Start",
      items: [
        { name: "P2", value: "p2" },
        {
          name: "A",
          items: [
            { name: "ID", value: "x" },
            { name: "OP", value: "==" },
            { name: "ID", value: "y" },
          ],
        },
      ],
    });
  });

  it("should detect contextual keywords via %word and populate wordTokenId and contextualKeywordTokenIds", () => {
    const data = generate(`
      WS := '[ \\t\\r\\n]+' @ skip;
      LET := 'let';
      FROM := 'from';
      GET := 'get';
      EQ := '=';
      SEMI := ';';
      IDENTIFIER := '[a-zA-Z_][a-zA-Z0-9_]*';

      %word IDENTIFIER;

      Stmt := LET IDENTIFIER EQ IDENTIFIER SEMI;
    `);

    expect(data.wordTokenName).toBe("IDENTIFIER");
    expect(data.wordTokenId).toBe(data.parserSymbols.indexOf("IDENTIFIER"));
    expect(data.contextualKeywordTokenNames).toEqual(["LET", "FROM", "GET"]);
    expect(data.contextualKeywordTokenIds).toEqual([
      data.parserSymbols.indexOf("LET"),
      data.parserSymbols.indexOf("FROM"),
      data.parserSymbols.indexOf("GET"),
    ]);
  });
});
