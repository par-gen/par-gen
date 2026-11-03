#!/usr/bin/env node

import { readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import sade from "sade";

import { createGenerator, execute } from "./generator.js";

const cli = sade("par-gen");

cli.version(
  JSON.parse(
    readFileSync(
      join(dirname(fileURLToPath(import.meta.url)), "../package.json"),
      "utf-8"
    )
  ).version
);

cli
  .command(
    "codegen <grammar-file> <target-directory>",
    "Generates lexer and parser"
  )
  .option("--language, -l", "Defines the output language", "javascript")
  .option(
    "--module, -m",
    "Defines the module system. Currently esm and commonjs are supported",
    "esm"
  )
  .option("--debug, -d", "Creates parser with debug output", false)
  .option(
    "--skip, -s",
    "Comma-separated list of token names to skip (e.g. WS)",
    ""
  )
  .option(
    "--from-treesitter",
    "Interpret the grammar file as a Tree-sitter grammar.json"
  )
  .option(
    "--preserve-extras",
    "Preserve trivia/extra tokens in the CST for lossless round-tripping"
  )
  .option(
    "--scanner",
    "Path to an external scanner overrides module for Tree-sitter grammars"
  )
  .example("codegen ./json.pargen ./generated")
  .example("codegen ./grammar.json ./generated --preserve-extras")
  .action(
    /**
     * @param {string} grammarFile
     * @param {string} targetDirectory
     * @param {{
     *   language: string,
     *   module: string,
     *   debug: boolean,
     *   skip?: string,
     *   scanner?: string,
     *   "from-treesitter"?: boolean,
     *   "preserve-extras"?: boolean
     * }} opts
     */
    async (grammarFile, targetDirectory, opts) => {
      const codegen = createGenerator(opts.language, opts.module, {
        lexerFile: join(targetDirectory, "lexer.js"),
        parserFile: join(targetDirectory, "parser.js"),
        debug: opts.debug,
      });

      const skipTokens = (opts.skip ?? "")
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);

      /** @type {import('./generator.js').ExecuteOptions} */
      const execOptions = {};
      if (skipTokens.length > 0) {
        execOptions.skipTokens = skipTokens;
      }
      if (opts["from-treesitter"]) {
        execOptions.fromTreesitter = true;
      }
      if (opts["preserve-extras"]) {
        execOptions.preserveExtras = true;
      }
      if (opts.scanner) {
        execOptions.scanner = String(opts.scanner);
      }

      if (Object.keys(execOptions).length > 0) {
        await execute(grammarFile, codegen, execOptions);
      } else {
        await execute(grammarFile, codegen);
      }
    }
  );

try {
  // note: we do await and try catch here even if the types
  // suggest not to -> we get a promise as a result of the
  // async action handler
  await cli.parse(process.argv);
} catch (e) {
  console.error(`Critical error: ${e.message}`);
  process.exit(1);
}
