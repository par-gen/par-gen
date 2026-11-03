import { generate as genParser } from "@par-gen/parser";
import { promises as fsp, existsSync } from "fs";
import { tmpdir } from "os";
import { join, basename } from "path";
import * as vm from "vm";

import { JavaScriptModuleCodegen } from "./javascript-esm.js";

describe("Lexer States", () => {
  /** @type {string} */
  let directory;
  /** @type {string} */
  let lexerFile;
  /** @type {string} */
  let lexerInitialFile;
  /** @type {string} */
  let lexerStateFile;
  /** @type {string} */
  let parserFile;

  beforeEach(async () => {
    directory = await fsp.mkdtemp(join(tmpdir(), "lexer-"));
    lexerFile = join(directory, "lexer.js");
    lexerInitialFile = join(directory, "lexer-initial.js");
    lexerStateFile = join(directory, "lexer-state.js");
    parserFile = join(directory, "parser.js");
  });

  afterEach(async () => {
    await fsp.rm(directory, { recursive: true, force: true });
  });

  it("should create a multi-state lexer", async () => {
    /** @type {*} */
    let results;
    /** @type {(_results: *) => void}  */
    const output = (_results) => {
      results = _results;
    };

    const grammar = `
      A := 'a';
      B := 'b' @ state;
      C := 'c';

      RuleA := { lexer.push('state') } A RuleB;
      RuleB := { lexer.pop() } B RuleC;
      RuleC := C;
    `;

    const codegen = new JavaScriptModuleCodegen({
      lexerFile,
      parserFile,
      debug: false,
    });
    await codegen.parser(genParser(grammar));

    // note: this is not available in the typescript typings currently
    const SourceTextModule = /** @type {*} */ (vm).SourceTextModule;
    const context = vm.createContext({
      output,
      Buffer,
      console,
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
        if (specifier === `./${basename(lexerInitialFile)}`) {
          const code = await fsp.readFile(lexerInitialFile, "utf-8");
          return new SourceTextModule(code, {
            context: referencingModule.context,
            identifier: lexerInitialFile,
          });
        } else if (specifier === `./${basename(lexerStateFile)}`) {
          const code = await fsp.readFile(lexerStateFile, "utf-8");
          return new SourceTextModule(code, {
            context: referencingModule.context,
            identifier: lexerStateFile,
          });
        } else if (specifier === "parser-file") {
          const code = await fsp.readFile(parserFile, "utf-8");

          return new SourceTextModule(code, {
            context: referencingModule.context,
            identifier: parserFile,
          });
        }
        throw new Error(`Unable to resolve dependency: ${specifier}`);
      }
    );

    expect(existsSync(lexerInitialFile)).toBeTruthy();
    expect(existsSync(lexerStateFile)).toBeTruthy();

    await module.evaluate();

    const expected = {
      name: "RuleA",
      start: expect.any(Number),
      end: expect.any(Number),
      value: expect.any(Object),
      items: [
        {
          name: "A",
          start: 0,
          end: 1,
          value: expect.any(Object),
          items: undefined,
        },
        {
          name: "RuleB",
          start: expect.any(Number),
          end: expect.any(Number),
          value: expect.any(Object),
          items: [
            {
              name: "B",
              start: 1,
              end: 2,
              value: expect.any(Object),
              items: undefined,
            },
            {
              name: "RuleC",
              start: expect.any(Number),
              end: expect.any(Number),
              value: expect.any(Object),
              items: [
                {
                  name: "C",
                  start: 2,
                  end: 3,
                  value: expect.any(Object),
                  items: undefined,
                },
              ],
            },
          ],
        },
      ],
    };

    expect(results).toMatchObject(expected);
    expect(results.toJSON()).toEqual(expected);
  });

  it("should emit LexerMode enum, Uint8Array lexerStack, and shiftActionsTable for hyphenated multi-mode lexers", async () => {
    /** @type {any[]} */
    const results = [];
    /** @type {(_result: *) => void} */
    const output = (_result) => {
      results.push(_result);
    };

    const grammar = `
      BRACKET_OPEN := '\\[' @ initial, character-class;
      BRACKET_CLOSE := '\\]' @ character-class;
      HEX_PREFIX := '\\\\x' @ initial, character-class;
      HEX_DIGIT := '[0-9a-fA-F]' @ hex-escape;
      CLASS_CHAR := '[^\\]\\\\]' @ character-class;
      CHAR := '[^\\[\\\\]' @ initial;

      Expr := Item | Expr Item;
      Item := CharClass | HexEscape | CHAR;
      CharClass := { lexer.push('character-class') } BRACKET_OPEN ClassItems { lexer.pop() } BRACKET_CLOSE;
      ClassItems := ClassItem | ClassItems ClassItem;
      ClassItem := HexEscape | CLASS_CHAR;
      HexEscape := { lexer.push('hex-escape') } HEX_PREFIX HEX_DIGIT { lexer.pop() } HEX_DIGIT;
    `;

    const codegen = new JavaScriptModuleCodegen({
      lexerFile,
      parserFile,
      debug: false,
    });
    await codegen.parser(genParser(grammar));

    const generatedParserCode = await fsp.readFile(parserFile, "utf-8");
    expect(generatedParserCode).toContain("const LexerMode = {");
    expect(generatedParserCode).toContain("INITIAL: 0");
    expect(generatedParserCode).toContain("CHARACTER_CLASS: 1");
    expect(generatedParserCode).toContain("HEX_ESCAPE: 2");
    expect(generatedParserCode).toContain("let lexerStack = new Uint8Array(64)");
    expect(generatedParserCode).toContain("const shiftActionsTable = new Uint8Array(");
    expect(generatedParserCode).toContain("lexer.push(LexerMode.CHARACTER_CLASS)");
    expect(generatedParserCode).toContain("lexer.push(LexerMode.HEX_ESCAPE)");
    expect(generatedParserCode).not.toContain("const states = [");

    const SourceTextModule = /** @type {*} */ (vm).SourceTextModule;
    const context = vm.createContext({
      output,
      Buffer,
      console,
    });

    const module = new SourceTextModule(
      `
        import { parse } from 'parser-file';

        output(parse("a[b\\\\x41c]\\\\x39"));
        output(parse("[\\\\x20]z"));
      `,
      { context }
    );

    await module.link(
      /**
       * @param {string} specifier
       * @param {*} referencingModule
       */
      async function (specifier, referencingModule) {
        if (specifier === "parser-file") {
          const code = await fsp.readFile(parserFile, "utf-8");
          return new SourceTextModule(code, {
            context: referencingModule.context,
            identifier: parserFile,
          });
        }
        if (specifier.startsWith("./")) {
          const targetPath = join(directory, specifier.slice(2));
          const code = await fsp.readFile(targetPath, "utf-8");
          return new SourceTextModule(code, {
            context: referencingModule.context,
            identifier: targetPath,
          });
        }
        throw new Error(`Unable to resolve dependency: ${specifier}`);
      }
    );

    await module.evaluate();

    expect(results).toHaveLength(2);
    expect(results[0].name).toBe("Expr");
    expect(results[0].end).toBe(13);
    expect(results[1].name).toBe("Expr");
    expect(results[1].end).toBe(7);
  });
});
