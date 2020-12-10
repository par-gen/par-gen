#!/usr/bin/env node

import { readFileSync } from "fs";
import { dirname, join } from "path";
import { URL } from "url";
import sade from "sade";

import { createGenerator, execute } from "./generator.js";

const cli = sade("expound");

cli.version(
  JSON.parse(
    readFileSync(
      join(dirname(new URL(import.meta.url).pathname), "../package.json"),
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
  .example("codegen ./json.expound ./generated")
  .action(
    /**
     * @param {string} grammarFile
     * @param {string} targetDirectory
     * @param {Object} opts
     * @param {string} opts.language
     * @param {string} opts.module
     */
    async (grammarFile, targetDirectory, opts) => {
      const codegen = createGenerator(opts.language, opts.module, {
        lexerFile: join(targetDirectory, "lexer.js"),
        parserFile: join(targetDirectory, "parser.js"),
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
