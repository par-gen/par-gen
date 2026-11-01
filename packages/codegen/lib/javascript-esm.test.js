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
});
