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
    expect(code3).toContain("tokenIds[successState >> 8]");
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
    expect(ecLexerCode).toContain("table[state + ec[input[i++]]]");

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
    expect(autoLexerCode).toContain("table[state + ec[input[i++]]]");

    const codegenForcedOff = new JavaScriptModuleCodegen({
      lexerFile,
      parserFile,
      equivalenceClasses: false,
    });
    await codegenForcedOff.parser(largeParserData);
    const forcedOffLexerCode = await fsp.readFile(lexerStateFile, "utf-8");
    expect(forcedOffLexerCode).not.toContain("const ec = new Uint8Array(256);");
    expect(forcedOffLexerCode).toContain("table[state + input[i++]]");
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
      "while (i < l && t[state + input[i]] === state)"
    );
    expect(lexerCode).toMatch(
      /while \(i < l && \(state = t\[\d+ \+ input\[i\+\+\]\]\) === \d+\);/
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

    // 1. Verify top register caching across the parse(input) while(true) loop
    expect(parserCode).toContain("let top = 0;");
    expect(parserCode).toContain("stack[0] = top;");
    expect(parserCode).not.toContain("const top = stack[sp];");
    expect(parserCode).toContain("top = tp | (actionLookup << 19);");
    expect(parserCode).toContain("top = tp | nextState;");

    // 2. Verify at most 1 constant-base non-final self-loop is emitted when skipBytes.length > 0
    const constSelfLoops = lexerCode.match(
      /while \(i < l && \(state = t\[\d+ \+ input\[i\+\+\]\]\) === \d+\);/g
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
});
