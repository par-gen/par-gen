#!/usr/bin/env node

import { readFileSync } from "fs";
import { dirname, join } from "path";
import { URL } from "url";
import sade from "sade";

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
  .command("codegen <grammar-file>", "Generates lexer and parser")
  .example("codegen ./json.expound")
  .action(async (grammarFile) => {
    console.log(grammarFile);
    throw new Error("yolo");
  });

try {
  await cli.parse(process.argv);
} catch (e) {
  console.error(`Critical error: ${e.message}`);
  process.exit(1);
}
