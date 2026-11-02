import { promises as fsp } from "fs";
import { tmpdir } from "os";
import { join } from "path";
import * as vm from "vm";
import {
  JavaScriptCommonJsCodegen,
  JavaScriptModuleCodegen,
} from "@par-gen/codegen";

import { createGenerator, execute } from "./generator.js";

/**
 * @param {string} dir
 * @returns {Promise<(input: string | Uint8Array) => any>}
 */
async function loadGeneratedEsmParser(dir) {
  const SourceTextModule = /** @type {*} */ (vm).SourceTextModule;
  const context = vm.createContext({ Buffer });
  const parserMod = new SourceTextModule(
    await fsp.readFile(join(dir, "parser.js"), "utf-8"),
    { context }
  );
  const lexerMod = new SourceTextModule(
    await fsp.readFile(join(dir, "lexer-initial.js"), "utf-8"),
    { context }
  );
  await parserMod.link(async () => lexerMod);
  await parserMod.evaluate();
  return /** @type {*} */ (parserMod.namespace).parse;
}

describe("createGenerator", () => {
  it("should create a module generator", () => {
    const codegen = createGenerator("JavaScript", "ESM", {
      lexerFile: "lexerFile",
      parserFile: "parserFile",
    });

    expect(codegen).toBeInstanceOf(JavaScriptModuleCodegen);

    expect(codegen).toEqual(
      expect.objectContaining({
        options: {
          lexerFile: "lexerFile",
          parserFile: "parserFile",
        },
      })
    );
  });

  it("should create a commonjs generator", () => {
    const codegen = createGenerator("JavaScript", "cjs", {
      lexerFile: "lexerFile",
      parserFile: "parserFile",
    });

    expect(codegen).toBeInstanceOf(JavaScriptCommonJsCodegen);

    expect(codegen).toEqual(
      expect.objectContaining({
        options: {
          lexerFile: "lexerFile",
          parserFile: "parserFile",
        },
      })
    );
  });
});

describe("execute", () => {
  it("should generate a working parser from a Tree-sitter grammar.json file", async () => {
    const dir = await fsp.mkdtemp(join(tmpdir(), "pargen-cli-ts-"));
    try {
      const grammarPath = join(dir, "grammar.json");
      const lexerFile = join(dir, "lexer.js");
      const parserFile = join(dir, "parser.js");

      const tsGrammar = {
        name: "mini_lang",
        word: "identifier",
        rules: {
          program: {
            type: "SEQ",
            members: [
              { type: "STRING", value: "let" },
              { type: "SYMBOL", name: "identifier" },
              { type: "STRING", value: "=" },
              { type: "SYMBOL", name: "number" },
              { type: "STRING", value: ";" },
            ],
          },
          identifier: {
            type: "PATTERN",
            value: "[a-zA-Z_][a-zA-Z0-9_]*",
          },
          number: {
            type: "PATTERN",
            value: "\\d+",
          },
          ws: {
            type: "PATTERN",
            value: "\\s+",
          },
        },
        extras: [{ type: "SYMBOL", name: "ws" }],
      };

      await fsp.writeFile(grammarPath, JSON.stringify(tsGrammar, null, 2));
      const codegen = createGenerator("javascript", "esm", {
        lexerFile,
        parserFile,
      });

      await execute(grammarPath, codegen);

      const parse = await loadGeneratedEsmParser(dir);
      const cst = parse("let let = 42;").toJSON();
      expect(cst.name).toBe("program");
      expect(cst.items).toHaveLength(5);
      expect(cst.items[1].name).toBe("identifier");
      expect(Buffer.from(cst.items[1].value).toString("utf-8")).toBe("let");
    } finally {
      await fsp.rm(dir, { recursive: true, force: true });
    }
  });

  it("should pass skipTokens options when executing on a .pargen grammar", async () => {
    const dir = await fsp.mkdtemp(join(tmpdir(), "pargen-cli-skip-"));
    try {
      const grammarPath = join(dir, "calc.pargen");
      const lexerFile = join(dir, "lexer.js");
      const parserFile = join(dir, "parser.js");

      await fsp.writeFile(
        grammarPath,
        `
          WS := '[ \\t\\r\\n]+';
          COMMENT := '//[^\\n]*';
          PLUS := '\\+';
          NUM := '[0-9]+';
          Expr := NUM PLUS NUM;
        `
      );

      const codegen = createGenerator("javascript", "esm", {
        lexerFile,
        parserFile,
      });

      await execute(grammarPath, codegen, { skipTokens: ["WS", "COMMENT"] });

      const parse = await loadGeneratedEsmParser(dir);
      const cst = parse("10 // comment\n + 20").toJSON();
      expect(cst.name).toBe("Expr");
      expect(cst.items.map(/** @param {*} n */ (n) => n.name)).toEqual([
        "NUM",
        "PLUS",
        "NUM",
      ]);
    } finally {
      await fsp.rm(dir, { recursive: true, force: true });
    }
  });
});
