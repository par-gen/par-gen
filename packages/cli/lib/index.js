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
  .example("codegen ./json.pargen ./generated")
  .action(
    /**
     * @param {string} grammarFile
     * @param {string} targetDirectory
     * @param {Object} opts
     * @param {string} opts.language
     * @param {string} opts.module
     * @param {boolean} opts.debug
     */
    async (grammarFile, targetDirectory, opts) => {
      const codegen = createGenerator(opts.language, opts.module, {
        lexerFile: join(targetDirectory, "lexer.js"),
        parserFile: join(targetDirectory, "parser.js"),
        debug: opts.debug,
      });

      await execute(grammarFile, codegen);
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
