import { generate as genLexer } from "@par-gen/lexer";
import { generate as genParser } from "@par-gen/parser";
import { promises as fsp } from "fs";
import { tmpdir } from "os";
import { join, basename } from "path";
import * as util from "util";
import * as vm from "vm";

import { JavaScriptModuleCodegen } from "./javascript-esm.js";

describe("JavaScriptModuleCodegen", () => {
  /** @type {string} */
  let directory;
  /** @type {string} */
  let lexerFile;
  /** @type {string} */
  let lexerStateFile;
  /** @type {string} */
  let parserFile;

  beforeEach(async () => {
    directory = await fsp.mkdtemp(join(tmpdir(), "lexer-"));
    lexerFile = join(directory, "lexer.js");
    lexerStateFile = join(directory, "lexer-initial.js");
    parserFile = join(directory, "parser.js");
  });

  afterEach(async () => {
    await fsp.rm(directory, { recursive: true, force: true });
  });

  it("should be possible to write a lexer into a file", async () => {
    /** @type {*} */
    let results;
    /** @type {(_results: *) => void}  */
    const output = (_results) => {
      results = _results;
    };

    const grammar = `
      A := 'abc';
    `;

    const codegen = new JavaScriptModuleCodegen({
      lexerFile,
      parserFile,
    });
    await codegen.lexer(genLexer(grammar), "initial");

    // note: this is not available in the typescript typings currently
    const SourceTextModule = /** @type {*} */ (vm).SourceTextModule;
    const context = vm.createContext({
      output,
      Buffer,
    });

    const module = new SourceTextModule(
      `
        import { next } from 'lexer-file';

        const input = Buffer.from("abc");
        const matched = next(input, 0);

        output(matched);
      `,
      { context }
    );

    await module.link(
      /**
       * @param {string} specifier
       * @param {*} referencingModule
       */
      async function (specifier, referencingModule) {
        if (specifier === "lexer-file") {
          const code = await fsp.readFile(lexerStateFile, "utf-8");
          return new SourceTextModule(code, {
            context: referencingModule.context,
          });
        }
        throw new Error(`Unable to resolve dependency: ${specifier}`);
      }
    );

    await module.evaluate();

    expect(results).toEqual({
      state: 0,
      start: 0,
      end: 3,
    });
  });

  it("should be possible to write a parser into a file", async () => {
    /** @type {*} */
    let results;
    /** @type {(_results: *) => void}  */
    const output = (_results) => {
      results = _results;
    };

    const grammar = `
      A := 'abc';

      Rule := A;
    `;

    const codegen = new JavaScriptModuleCodegen({ lexerFile, parserFile });
    await codegen.parser(genParser(grammar));

    // note: this is not available in the typescript typings currently
    const SourceTextModule = /** @type {*} */ (vm).SourceTextModule;
    const context = vm.createContext({
      output,
      Buffer,
    });

    const module = new SourceTextModule(
      `
        import { parse } from 'parser-file';

        const matched = parse("abc");

        output(matched);
      `,
      { context }
    );

    await module.link(
      /**
       * @param {string} specifier
       * @param {*} referencingModule
       */
      async function (specifier, referencingModule) {
        if (specifier === `./${basename(lexerStateFile)}`) {
          const code = await fsp.readFile(lexerStateFile, "utf-8");
          return new SourceTextModule(code, {
            context: referencingModule.context,
          });
        } else if (specifier === "parser-file") {
          const code = await fsp.readFile(parserFile, "utf-8");
          return new SourceTextModule(code, {
            context: referencingModule.context,
          });
        }
        throw new Error(`Unable to resolve dependency: ${specifier}`);
      }
    );

    await module.evaluate();

    const expected = {
      name: "Rule",
      start: expect.any(Number),
      end: expect.any(Number),
      value: expect.any(Object),
      items: [
        {
          name: "A",
          start: 0,
          end: 3,
          value: expect.any(Object),
          items: undefined,
        },
      ],
    };

    expect(results).toMatchObject(expected);
    expect(results.toJSON()).toEqual(expected);
    expect(util.inspect(results)).toBe(util.inspect(results.toJSON()));

    const cursor = results.cursor();
    expect(cursor.name).toBe("Rule");
    expect(cursor.childCount).toBe(1);
    expect(cursor.isLeaf).toBe(false);
    expect(cursor.depth).toBe(0);
    expect(cursor.start).toBe(0);
    expect(cursor.end).toBe(3);
    expect(cursor.gotoNextSibling()).toBe(false);
    expect(cursor.gotoParent()).toBe(false);
    expect(cursor.gotoFirstChild()).toBe(true);
    expect(cursor.name).toBe("A");
    expect(cursor.childCount).toBe(0);
    expect(cursor.isLeaf).toBe(true);
    expect(cursor.depth).toBe(1);
    expect(cursor.start).toBe(0);
    expect(cursor.end).toBe(3);
    expect(Buffer.from(cursor.value).toString("utf-8")).toBe("abc");
    expect(cursor.gotoFirstChild()).toBe(false);
    expect(cursor.gotoNextSibling()).toBe(false);
    expect(cursor.gotoParent()).toBe(true);
    expect(cursor.name).toBe("Rule");
    expect(cursor.depth).toBe(0);

    const dtsCode = await fsp.readFile(
      join(directory, "parser.d.ts"),
      "utf-8"
    );
    expect(dtsCode).toContain('export type TokenName = "A"');
    expect(dtsCode).toContain('export type RuleName = "Rule"');
    expect(dtsCode).toContain("export type SymbolName = TokenName | RuleName;");
    expect(dtsCode).toContain('export type StartRuleName = "Rule";');
    expect(dtsCode).toContain("export interface TreeCursor {");
    expect(dtsCode).toContain(
      "export interface CstNode<Name extends SymbolName = SymbolName> {"
    );
    expect(dtsCode).toContain(
      "export function parse(input: Uint8Array | string): CstNode<StartRuleName>;"
    );
  });

  it("should emit direct dead-end token IDs and zero or compact tokenIds tables across 1, 2, and 3 continuable tokens", async () => {
    const codegen = new JavaScriptModuleCodegen({ lexerFile, parserFile });

    // 1 continuable token (NUM) + dead-end token (PLUS): no tokenIds table, no successState variable
    await codegen.parser(
      genParser(`
        NUM := '[0-9]+';
        PLUS := '\\+';
        Expr := NUM | Expr PLUS NUM;
      `)
    );
    const code1 = await fsp.readFile(lexerStateFile, "utf-8");
    expect(code1).not.toContain("const tokenIds =");
    expect(code1).not.toContain("let successState =");
    expect(code1).toContain("if (successPos !== 0)");

    // 2 continuable tokens (WS, NUM) + dead-end token (PLUS): no tokenIds table, ternary continuable lookup
    await codegen.parser(
      genParser(`
        WS := '[ ]+';
        NUM := '[0-9]+';
        PLUS := '\\+';
        Expr := WS? NUM | Expr PLUS WS? NUM;
      `)
    );
    const code2 = await fsp.readFile(lexerStateFile, "utf-8");
    expect(code2).not.toContain("const tokenIds =");
    expect(code2).toContain("if (successState !== 0)");

    // 3 continuable tokens (WS, NUM, IDENT) + dead-end token (PLUS): compact tokenIds[successState >> 8]
    await codegen.parser(
      genParser(`
        WS := '[ ]+';
        NUM := '[0-9]+';
        IDENT := '[a-z]+';
        PLUS := '\\+';
        Expr := WS? NUM | WS? IDENT | Expr PLUS Expr;
      `)
    );
    const code3 = await fsp.readFile(lexerStateFile, "utf-8");
    expect(code3).toContain("const tokenIds = new Uint8Array(4);");
    expect(code3).toContain("ti[successState >> 8]");
  });

  it("should coalesce contiguous lexer and parser table runs using .fill()", async () => {
    const grammar = `
      DIGITS := '[0-9]+';
      LETTERS := '[a-z]+';

      Expr := Item | Expr Item;
      Item := DIGITS | LETTERS;
    `;

    const codegen = new JavaScriptModuleCodegen({ lexerFile, parserFile });
    await codegen.parser(genParser(grammar));

    const lexerCode = await fsp.readFile(lexerStateFile, "utf-8");
    const parserCode = await fsp.readFile(parserFile, "utf-8");

    expect(lexerCode).toContain("table.fill(");
    expect(parserCode).toContain("actionsTable.fill(");
  });

  it("should support equivalence-class DFA table compression including when maxDeadEndTokenId >= ecColumns and automatic threshold switching", async () => {
    const SourceTextModule = /** @type {*} */ (vm).SourceTextModule;

    // 1. Force equivalenceClasses: true on a grammar with 40 dead-end tokens (> ecColumns) + 3 continuable tokens
    const deadEndRules = Array.from(
      { length: 40 },
      (_, i) =>
        `OP_${i} := '@${String.fromCharCode(65 + Math.floor(i / 10))}${
          i % 10
        }';`
    ).join("\n");
    const deadEndAlts = Array.from({ length: 40 }, (_, i) => `OP_${i}`).join(
      " | "
    );
    const grammarManyDeadEnds = `
      WS := '[ ]+';
      NUM := '[0-9]+';
      IDENT := '[a-z]+';
      ${deadEndRules}
      Expr := Item | Expr Item;
      Item := WS | NUM | IDENT | ${deadEndAlts};
    `;

    const codegenEc = new JavaScriptModuleCodegen({
      lexerFile,
      parserFile,
      equivalenceClasses: true,
    });
    await codegenEc.parser(genParser(grammarManyDeadEnds, { skipTokens: ["WS"] }));

    const ecLexerCode = await fsp.readFile(lexerStateFile, "utf-8");
    expect(ecLexerCode).toContain("const ec = new Uint8Array(256);");
    expect(ecLexerCode).toContain("t[state + e[input[i++]]]");

    /** @type {*} */
    let parsedResult;
    const context = vm.createContext({
      output: (/** @type {*} */ r) => {
        parsedResult = r;
      },
      Buffer,
    });
    const mod = new SourceTextModule(
      `
        import { parse } from 'parser-file';
        output(parse("abc 123 @A0 @D9 xyz").toJSON());
      `,
      { context }
    );
    await mod.link(
      /**
       * @param {string} specifier
       * @param {*} referencingModule
       */
      async (specifier, referencingModule) => {
        if (specifier === `./${basename(lexerStateFile)}`) {
          const code = await fsp.readFile(lexerStateFile, "utf-8");
          return new SourceTextModule(code, {
            context: referencingModule.context,
          });
        } else if (specifier === "parser-file") {
          const code = await fsp.readFile(parserFile, "utf-8");
          return new SourceTextModule(code, {
            context: referencingModule.context,
          });
        }
        throw new Error(`Unable to resolve dependency: ${specifier}`);
      }
    );
    await mod.evaluate();
    expect(parsedResult.name).toBe("Expr");

    // 2. Automatic threshold switching (> 96 active rows enables equivalenceClasses by default)
    const keywords = [
      "select", "from", "where", "insert", "update", "delete", "create", "table",
      "index", "primary", "foreign", "references", "constraint", "default", "unique",
      "distinct", "group", "order", "having", "limit", "offset", "inner", "outer",
    ];
    const largeGrammar = `
      WS := '[ ]+';
      ${keywords.map((kw, i) => `KW_${i} := '${kw}';`).join("\n")}
      IDENT := '[a-zA-Z_][a-zA-Z0-9_]*';
      Program := Item | Program Item;
      Item := ${keywords.map((_, i) => `KW_${i}`).join(" | ")} | IDENT;
    `;
    const largeParserData = genParser(largeGrammar, { skipTokens: ["WS"] });

    const codegenAuto = new JavaScriptModuleCodegen({ lexerFile, parserFile });
    await codegenAuto.parser(largeParserData);
    const autoLexerCode = await fsp.readFile(lexerStateFile, "utf-8");
    expect(autoLexerCode).toContain("const ec = new Uint8Array(256);");
    expect(autoLexerCode).toContain("t[state + e[input[i++]]]");

    const codegenForcedOff = new JavaScriptModuleCodegen({
      lexerFile,
      parserFile,
      equivalenceClasses: false,
    });
    await codegenForcedOff.parser(largeParserData);
    const forcedOffLexerCode = await fsp.readFile(lexerStateFile, "utf-8");
    expect(forcedOffLexerCode).not.toContain("const ec = new Uint8Array(256);");
    expect(forcedOffLexerCode).toContain("t[state + input[i++]]");
  });

  it("should emit 1st-byte peeling, constant-base non-final self-loop, and pure self-loop final direct exit", async () => {
    const grammar = `
      WS := '[ ]+';
      NUM := '[0-9]+(\\.[0-9]+)?';
      STR := '"[^"]*"';
      PLUS := '\\+';
      Expr := WS? NUM | WS? STR | Expr PLUS Expr;
    `;

    const codegen = new JavaScriptModuleCodegen({ lexerFile, parserFile });
    await codegen.parser(genParser(grammar));

    const lexerCode = await fsp.readFile(lexerStateFile, "utf-8");
    expect(lexerCode).toContain("const t = table;");
    expect(lexerCode).toContain(
      "while (i < l && t[input[i] + 256])"
    );
    expect(lexerCode).toContain(
      "while (i < l && state === (state = t[state + input[i]]))"
    );
    expect(lexerCode).toMatch(
      /while \(i < l && \(state = t\[input\[i\+\+\] \+ \d+\]\) === \d+\);/
    );
    expect(lexerCode).not.toContain("let successState =");
    expect(lexerCode).toContain("if (successPos !== 0)");
  });

  it("should carry top in a register in parse() and cap constant-base non-final self-loops when skipBytes are active", async () => {
    const SourceTextModule = /** @type {*} */ (vm).SourceTextModule;
    const grammar = `
      WS := '[ ]+';
      DSTR := '"[^"]*"';
      SSTR := '\\x27[^\\x27]*\\x27';
      IDENT := '[a-z]+';
      SEMI := ';';
      Program := Stmt | Program Stmt;
      Stmt := DSTR SEMI | SSTR SEMI | IDENT SEMI;
    `;

    const codegen = new JavaScriptModuleCodegen({ lexerFile, parserFile });
    await codegen.parser(genParser(grammar, { skipTokens: ["WS"] }));

    const lexerCode = await fsp.readFile(lexerStateFile, "utf-8");
    const parserCode = await fsp.readFile(parserFile, "utf-8");

    // 1. Verify top register caching & 2-word postorder CST across the parse(input) while(true) loop
    expect(parserCode).toContain("let top = 0;");
    expect(parserCode).toContain("stack[0] = top;");
    expect(parserCode).not.toContain("const top = stack[sp];");
    expect(parserCode).toContain("top = tp | (actionLookup << 23);");
    expect(parserCode).toContain("top = tp | nextState;");
    expect(parserCode).toContain("let tp = 2;");
    expect(parserCode).toContain("tp += 2;");
    expect(parserCode).not.toContain("tp += 3;");
    expect(parserCode).not.toContain("+ 2] = tp;");
    expect(parserCode).not.toContain("tree[tp + 1] = stack[sp];");
    expect(parserCode).toContain("tree[tp + 1] = rtop;");

    // 2. Verify at most 1 constant-base non-final self-loop is emitted when skipBytes.length > 0
    const constSelfLoops = lexerCode.match(
      /while \(i < l && \(state = t\[input\[i\+\+\] \+ \d+\]\) === \d+\);/g
    );
    expect(constSelfLoops ? constSelfLoops.length : 0).toBe(1);

    // 3. Verify both double-quoted and single-quoted strings parse accurately
    /** @type {*} */
    let parsedResult;
    const context = vm.createContext({
      output: (/** @type {*} */ r) => {
        parsedResult = r;
      },
      Buffer,
    });
    const mod = new SourceTextModule(
      `
        import { parse } from 'parser-file';
        output(parse('  "hello world" ; \\'single quoted\\' ; abc ; ').toJSON());
      `,
      { context }
    );
    await mod.link(
      /**
       * @param {string} specifier
       * @param {*} referencingModule
       */
      async (specifier, referencingModule) => {
        if (specifier === `./${basename(lexerStateFile)}`) {
          const code = await fsp.readFile(lexerStateFile, "utf-8");
          return new SourceTextModule(code, {
            context: referencingModule.context,
          });
        } else if (specifier === "parser-file") {
          const code = await fsp.readFile(parserFile, "utf-8");
          return new SourceTextModule(code, {
            context: referencingModule.context,
          });
        }
        throw new Error(`Unable to resolve dependency: ${specifier}`);
      }
    );
    await mod.evaluate();
    expect(parsedResult.name).toBe("Program");
  });

  it("should provide zero-allocation CstNode navigation helpers, toSExpr(), LineIndex, and rich cold-path SyntaxError diagnostics", async () => {
    const SourceTextModule = /** @type {*} */ (vm).SourceTextModule;
    const grammar = `
      WS := '[ \\t\\r\\n]+' @ skip;
      IDENT := '[a-z]+';
      EQ := '=';
      NUM := '[0-9]+';
      SEMI := ';';

      Program := Stmt | Program Stmt;
      Stmt := IDENT EQ NUM SEMI;
    `;

    const codegen = new JavaScriptModuleCodegen({ lexerFile, parserFile });
    await codegen.parser(genParser(grammar));

    const parserCode = await fsp.readFile(parserFile, "utf-8");
    expect(parserCode).toContain("function throwSyntaxError(");

    const dtsCode = await fsp.readFile(
      join(directory, "parser.d.ts"),
      "utf-8"
    );
    expect(dtsCode).toContain("export type NodeName = SymbolName;");
    expect(dtsCode).toContain("export interface SourceLocation {");
    expect(dtsCode).toContain("export interface LineIndex {");
    expect(dtsCode).toContain("export interface ParseSyntaxError extends SyntaxError {");
    expect(dtsCode).toContain("readonly firstChild: CstNode | undefined;");
    expect(dtsCode).toContain("readonly lastChild: CstNode | undefined;");
    expect(dtsCode).toContain("child(index: number): CstNode | undefined;");
    expect(dtsCode).toContain("childByName<ChildName extends SymbolName>(");
    expect(dtsCode).toContain("childrenByName<ChildName extends SymbolName>(");
    expect(dtsCode).toContain("toSExpr(includeText?: boolean): string;");

    /** @type {*} */
    let exportsObj;
    const context = vm.createContext({
      output: (/** @type {*} */ r) => {
        exportsObj = r;
      },
      Buffer,
    });
    const mod = new SourceTextModule(
      `
        import * as parserMod from 'parser-file';
        output(parserMod);
      `,
      { context }
    );
    await mod.link(
      /**
       * @param {string} specifier
       * @param {*} referencingModule
       */
      async (specifier, referencingModule) => {
        if (specifier === `./${basename(lexerStateFile)}`) {
          const code = await fsp.readFile(lexerStateFile, "utf-8");
          return new SourceTextModule(code, {
            context: referencingModule.context,
          });
        } else if (specifier === "parser-file") {
          const code = await fsp.readFile(parserFile, "utf-8");
          return new SourceTextModule(code, {
            context: referencingModule.context,
          });
        }
        throw new Error(`Unable to resolve dependency: ${specifier}`);
      }
    );
    await mod.evaluate();

    const { parse, LineIndex } = exportsObj;
    const validInput = "foo = 123;\n  bar = 456;\n";
    const root = parse(validInput);

    expect(root.name).toBe("Program");
    expect(root.isLeaf).toBe(false);
    expect(root.childCount).toBe(2);
    expect(typeof root.symbolId).toBe("number");
    expect(root.text).toBe("foo = 123;\n  bar = 456;");

    const stmt2 = root.lastChild;
    expect(stmt2).toBeDefined();
    expect(stmt2.name).toBe("Stmt");
    expect(stmt2.childCount).toBe(4);
    expect(stmt2.firstChild.name).toBe("IDENT");
    expect(stmt2.firstChild.text).toBe("bar");
    expect(stmt2.firstChild.isLeaf).toBe(true);
    expect(stmt2.firstChild.firstChild).toBeUndefined();
    expect(stmt2.firstChild.lastChild).toBeUndefined();
    expect(stmt2.lastChild.name).toBe("SEMI");
    expect(stmt2.lastChild.text).toBe(";");
    expect(stmt2.child(0).text).toBe("bar");
    expect(stmt2.child(2).text).toBe("456");
    expect(stmt2.child(-1).text).toBe(";");
    expect(stmt2.child(4)).toBeUndefined();
    expect(stmt2.child(-5)).toBeUndefined();

    expect(stmt2.childByName("NUM").text).toBe("456");
    expect(stmt2.childByName("UNKNOWN")).toBeUndefined();
    expect(stmt2.childrenByName("NUM").map((/** @type {*} */ n) => n.text)).toEqual([
      "456",
    ]);
    expect(stmt2.firstChild.childrenByName("NUM")).toEqual([]);

    expect(stmt2.toSExpr()).toBe("(Stmt (IDENT) (EQ) (NUM) (SEMI))");
    expect(stmt2.toSExpr(true)).toBe(
      '(Stmt (IDENT "bar") (EQ "=") (NUM "456") (SEMI ";"))'
    );

    const cursor = stmt2.cursor();
    expect(cursor.gotoFirstChild()).toBe(true);
    expect(cursor.text).toBe("bar");

    const lineIdx = new LineIndex(validInput);
    expect(lineIdx.locationForOffset(stmt2.start)).toEqual({
      line: 2,
      column: 3,
    });

    // 1. Unexpected token on line 2 (SEMI instead of NUM)
    /** @type {*} */
    let tokenErr;
    try {
      parse("foo = 123;\n  bar = ;");
    } catch (e) {
      tokenErr = e;
    }
    expect(tokenErr).toBeDefined();
    expect(tokenErr.name).toBe("SyntaxError");
    expect(tokenErr.line).toBe(2);
    expect(tokenErr.column).toBe(9);
    expect(tokenErr.found).toBe("SEMI");
    expect(tokenErr.tokenText).toBe(";");
    expect(tokenErr.expected).toEqual(["NUM"]);
    expect(tokenErr.message).toContain("line 2, column 9");
    expect(tokenErr.message).toContain("Expected one of: NUM");
    expect(tokenErr.message).toContain("2 |   bar = ;");

    // 2. Lexer error (@par-gen.ERROR) on line 2
    /** @type {*} */
    let lexErr;
    try {
      parse("foo = 123;\n  bar = @invalid;");
    } catch (e) {
      lexErr = e;
    }
    expect(lexErr).toBeDefined();
    expect(lexErr.name).toBe("SyntaxError");
    expect(lexErr.line).toBe(2);
    expect(lexErr.column).toBe(9);
    expect(lexErr.found).toBe("@par-gen.ERROR");
    expect(lexErr.tokenText).toBe("@");
    expect(lexErr.expected).toEqual(["NUM"]);
    expect(lexErr.message).toContain('(@par-gen.ERROR ("@"))'.slice(1, -1));
    expect(lexErr.message).toContain("2 |   bar = @invalid;");

    // 3. Unexpected EOF (@par-gen.EOF)
    /** @type {*} */
    let eofErr;
    try {
      parse("foo = 123;\n  bar = 456");
    } catch (e) {
      eofErr = e;
    }
    expect(eofErr).toBeDefined();
    expect(eofErr.name).toBe("SyntaxError");
    expect(eofErr.line).toBe(2);
    expect(eofErr.column).toBe(12);
    expect(eofErr.found).toBe("@par-gen.EOF");
    expect(eofErr.expected).toEqual(["SEMI"]);
  });

  it("should support exact .start/.end/.text on >=10KB tokens preceded by whitespace/comments, epsilon rules, >4096 children, deep stack growth, >64 lexerStack, >256 symbols, >4MB inputs, SymbolIds, and reemitLossless()", async () => {
    const SourceTextModule = /** @type {*} */ (vm).SourceTextModule;

    // 1. SkipWS + SkipComment grammar with 10KB token preceded by spaces and 2KB comment,
    //    2-byte token preceded by 2KB comment, and >5000 children in a flat/nested tree
    const grammar = `
      WS := '[ \\t\\r\\n]+' @ skip;
      COMMENT := '/\\*[^*]*\\*/' @ skip;
      STR := '"[^"]*"';
      IDENT := '[a-z]+';
      LPAREN := '\\(';
      RPAREN := '\\)';
      SEMI := ';';

      Program := Stmt | Program Stmt;
      Stmt := IDENT STR SEMI | LPAREN Stmt RPAREN;
    `;

    const pData = genParser(grammar);
    const codegen = new JavaScriptModuleCodegen({ lexerFile, parserFile });
    await codegen.parser(pData);

    /** @type {*} */
    let modExports;
    const context = vm.createContext({
      output: (/** @type {*} */ r) => {
        modExports = r;
      },
      Buffer,
    });
    const mod = new SourceTextModule(
      `
        import * as m from 'parser-file';
        output(m);
      `,
      { context }
    );
    await mod.link(
      /**
       * @param {string} specifier
       * @param {*} referencingModule
       */
      async (specifier, referencingModule) => {
        if (specifier === `./${basename(lexerStateFile)}`) {
          const code = await fsp.readFile(lexerStateFile, "utf-8");
          return new SourceTextModule(code, {
            context: referencingModule.context,
          });
        } else if (specifier === "parser-file") {
          const code = await fsp.readFile(parserFile, "utf-8");
          return new SourceTextModule(code, {
            context: referencingModule.context,
          });
        }
        throw new Error(`Unable to resolve: ${specifier}`);
      }
    );
    await mod.evaluate();

    const { parse, SymbolIds, reemitLossless } = modExports;
    expect(Object.isFrozen(SymbolIds)).toBe(true);
    expect(typeof SymbolIds.Program).toBe("number");
    expect(typeof SymbolIds.STR).toBe("number");

    const longComment = `/*${"c".repeat(2500)}*/`;
    const longStr = `"${"s".repeat(10240)}"`;
    const input = `   ${longComment}  ab     ${longComment}   ${longStr}   ${longComment}  ;  `;
    const root = parse(input);

    expect(root.symbolId).toBe(SymbolIds[root.name]);
    expect(Buffer.from(root.reemitLossless()).toString("utf-8")).toBe(input);
    expect(Buffer.from(reemitLossless(root)).toString("utf-8")).toBe(input);

    const stmt = root.firstChild;
    const identNode = stmt.child(0);
    const strNode = stmt.child(1);
    const semiNode = stmt.child(2);

    const expectedIdentStart = 3 + longComment.length + 2;
    expect(identNode.start).toBe(expectedIdentStart);
    expect(identNode.end).toBe(expectedIdentStart + 2);
    expect(identNode.text).toBe("ab");

    const expectedStrStart = expectedIdentStart + 2 + 5 + longComment.length + 3;
    expect(strNode.start).toBe(expectedStrStart);
    expect(strNode.end).toBe(expectedStrStart + longStr.length);
    expect(strNode.text).toBe(longStr);

    const expectedSemiStart =
      expectedStrStart + longStr.length + 3 + longComment.length + 2;
    expect(semiNode.start).toBe(expectedSemiStart);
    expect(semiNode.end).toBe(expectedSemiStart + 1);
    expect(semiNode.text).toBe(";");

    // Verify TreeCursor returns identical .start, .end, .text
    const cursor = stmt.cursor();
    expect(cursor.gotoFirstChild()).toBe(true);
    expect(cursor.start).toBe(identNode.start);
    expect(cursor.end).toBe(identNode.end);
    expect(cursor.text).toBe("ab");
    expect(cursor.gotoNextSibling()).toBe(true);
    expect(cursor.start).toBe(strNode.start);
    expect(cursor.end).toBe(strNode.end);
    expect(cursor.text).toBe(longStr);
    expect(cursor.gotoNextSibling()).toBe(true);
    expect(cursor.start).toBe(semiNode.start);
    expect(cursor.end).toBe(semiNode.end);
    expect(cursor.text).toBe(";");
    expect(cursor.gotoNextSibling()).toBe(false);
    expect(cursor.gotoParent()).toBe(true);

    // 2. Deeply nested recursion (> 18,000 levels on a tiny ~40KB input) to test independent arena.stack growth
    const depth = 18000;
    const deepInput = `${"(".repeat(depth)}x "y";${")".repeat(depth)}`;
    const deepRoot = parse(deepInput);
    expect(deepRoot.name).toBe("Program");
    expect(deepRoot.start).toBe(0);
    expect(deepRoot.end).toBe(deepInput.length);
    expect(Buffer.from(deepRoot.reemitLossless()).toString("utf-8")).toBe(
      deepInput
    );

    // 3. Giant input (> 4.2 MB, exceeding 0x3fffff 22-bit offset limit -> triggers parseLarge)
    const bigChunk = `foo "${"z".repeat(1000)}";\n`;
    const repeatCount = Math.ceil(4300000 / bigChunk.length);
    const giantBuf = Buffer.from(bigChunk.repeat(repeatCount));
    expect(giantBuf.length).toBeGreaterThan(0x3fffff);
    const giantRoot = parse(giantBuf);
    expect(giantRoot.name).toBe("Program");
    expect(giantRoot.start).toBe(0);
    expect(giantRoot.end).toBe(giantBuf.length - 1);
    const lastStmt = giantRoot.lastChild;
    expect(lastStmt.end).toBe(giantBuf.length - 1);
    expect(lastStmt.start).toBe(giantBuf.length - bigChunk.length);
    expect(lastStmt.text).toBe(bigChunk.trim());
    expect(Buffer.compare(giantRoot.reemitLossless(), giantBuf)).toBe(0);
  });

  it("should support epsilon (reduceLen === 0) rules, >4096 children in TreeCursor, and >256 grammar symbols", async () => {
    const SourceTextModule = /** @type {*} */ (vm).SourceTextModule;

    // Construct a grammar with an explicit epsilon rule (OptTag := ε | IDENT) and >260 symbols
    const baseGrammar = `
      WS := '[ ]+' @ skip;
      SEMI := ';';
      IDENT := '[a-z]+';
      Program := Opt item SEMI;
      Opt := IDENT;
      item := IDENT;
    `;
    const pData = /** @type {*} */ (genParser(baseGrammar));
    // Add an explicit epsilon rule Opt := [] and pad parserSymbols past 260 symbols
    pData.rules.push({ uid: 9999, name: "Opt", symbols: [], actions: [] });
    for (const [state, actMap] of pData.actions.entries()) {
      for (const item of state.values()) {
        if (item.name === "Program" && item.marker === 0) {
          state.add({
            name: "Opt",
            tokens: [],
            marker: 0,
            lookahead: "IDENT",
          });
          if (!actMap.has("IDENT")) {
            actMap.set("IDENT", { op: "reduce", symbol: "Opt" });
          }
        }
      }
    }
    while (pData.parserSymbols.length < 270) {
      pData.parserSymbols.push(`EXTRA_SYM_${pData.parserSymbols.length}`);
    }

    const dir2 = await fsp.mkdtemp(join(tmpdir(), "eps-"));
    const lFile = join(dir2, "lexer.js");
    const lStateFile = join(dir2, "lexer-initial.js");
    const pFile = join(dir2, "parser.js");
    try {
      const codegen = new JavaScriptModuleCodegen({
        lexerFile: lFile,
        parserFile: pFile,
      });
      await codegen.parser(pData);

      const pCode = await fsp.readFile(pFile, "utf-8");
      // With >256 symbols, symMask should be 0x1ff and actionsTable should be Uint32Array
      expect(pCode).toContain("0x1ff");
      expect(pCode).toContain("new Uint32Array(");
      expect(pCode).toContain("if (reduceLen === 0)");

      /** @type {*} */
      let modExports;
      const context = vm.createContext({
        output: (/** @type {*} */ r) => {
          modExports = r;
        },
        Buffer,
      });
      const mod = new SourceTextModule(
        `
          import * as m from 'parser-file';
          output(m);
        `,
        { context }
      );
      await mod.link(
        /**
         * @param {string} specifier
         * @param {*} referencingModule
         */
        async (specifier, referencingModule) => {
          if (specifier === `./${basename(lStateFile)}`) {
            const code = await fsp.readFile(lStateFile, "utf-8");
            return new SourceTextModule(code, {
              context: referencingModule.context,
            });
          } else if (specifier === "parser-file") {
            return new SourceTextModule(pCode, {
              context: referencingModule.context,
            });
          }
          throw new Error(`Unable to resolve: ${specifier}`);
        }
      );
      await mod.evaluate();

      const { CstNode, TreeCursor, SymbolIds } = modExports;
      expect(SymbolIds.EXTRA_SYM_265).toBe(265);

      // Construct asynthetic tree tape with an epsilon node (0 children at offset 5) and a parent node with 5000 children
      const stream = Buffer.from("hello world");
      const nChildren = 5000;
      const tree = new Uint32Array((nChildren + 4) * 2);
      let tp = 2;
      // First child is an epsilon node at byte offset 0
      tree[tp] = SymbolIds.Opt;
      tree[tp + 1] = 0; // byte offset 0, len 0
      tp += 2;
      for (let i = 1; i < nChildren; i++) {
        tree[tp] = SymbolIds.IDENT;
        tree[tp + 1] = 5 | (5 << 22);
        tp += 2;
      }
      const rootPtr = tp;
      tree[rootPtr] = SymbolIds.Program | (nChildren << 9);
      tree[rootPtr + 1] = 0; // subtreeStart - 2 = 0

      const rootNode = new CstNode(stream, tree, rootPtr);
      expect(rootNode.name).toBe("Program");
      expect(rootNode.childCount).toBe(5000);
      const epsChild = rootNode.firstChild;
      expect(epsChild.name).toBe("Opt");
      expect(epsChild.childCount).toBe(0);
      expect(epsChild.start).toBe(0);
      expect(epsChild.end).toBe(0);
      expect(epsChild.text).toBe("");

      const cursor = new TreeCursor(stream, tree, rootPtr);
      expect(cursor.childCount).toBe(5000);
      expect(cursor.gotoFirstChild()).toBe(true);
      expect(cursor.name).toBe("Opt");
      expect(cursor.start).toBe(0);
      expect(cursor.end).toBe(0);
      let count = 1;
      while (cursor.gotoNextSibling()) {
        count++;
      }
      expect(count).toBe(5000);
      expect(cursor.gotoParent()).toBe(true);
      expect(cursor.name).toBe("Program");
    } finally {
      await fsp.rm(dir2, { recursive: true, force: true });
    }
  });

  it("should attach trailing trivia directly to the root node without wrapping in a duplicate root node when preserveExtras is true", async () => {
    const SourceTextModule = /** @type {*} */ (vm).SourceTextModule;
    const grammar = `
      WS := '[ \\t\\r\\n]+' @ skip;
      COMMENT := '//[^\\n]*' @ skip;
      IDENT := '[a-z]+';
      SEMI := ';';
      Program := Stmt | Program Stmt;
      Stmt := IDENT SEMI;
    `;
    const pData = genParser(grammar, /** @type {*} */ ({ preserveExtras: true }));
    const codegen = new JavaScriptModuleCodegen({ lexerFile, parserFile });
    await codegen.parser(pData);

    /** @type {*} */
    let modExports;
    const context = vm.createContext({
      output: (/** @type {*} */ r) => {
        modExports = r;
      },
      Buffer,
    });
    const mod = new SourceTextModule(
      `
        import * as m from 'parser-file';
        output(m);
      `,
      { context }
    );
    await mod.link(
      /**
       * @param {string} specifier
       * @param {*} referencingModule
       */
      async (specifier, referencingModule) => {
        if (specifier === `./${basename(lexerStateFile)}`) {
          const code = await fsp.readFile(lexerStateFile, "utf-8");
          return new SourceTextModule(code, {
            context: referencingModule.context,
          });
        } else if (specifier === "parser-file") {
          const code = await fsp.readFile(parserFile, "utf-8");
          return new SourceTextModule(code, {
            context: referencingModule.context,
          });
        }
        throw new Error(`Unable to resolve: ${specifier}`);
      }
    );
    await mod.evaluate();

    const input = "foo; // trailing comment\n  ";
    const root = modExports.parse(input);
    expect(root.name).toBe("Program");
    expect(root.firstChild.name).not.toBe("Program");
    expect(root.firstChild.name).toBe("Stmt");
    expect(root.lastChild.name).toBe("COMMENT");
    expect(Buffer.from(root.reemitLossless()).toString("utf-8")).toBe(input);
  });
});
