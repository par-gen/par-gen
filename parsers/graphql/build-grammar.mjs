import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { generateFromTreesitter } from "../../packages/parser/lib/parser-treesitter.js";
import { createGenerator } from "../../packages/cli/lib/generator.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const grammar = JSON.parse(
  fs.readFileSync(path.join(__dirname, "grammar.json"), "utf8")
);
const data = generateFromTreesitter(grammar, { preserveExtras: true });

await createGenerator("javascript", "esm", {
  lexerFile: path.join(__dirname, "generated/lexer.js"),
  parserFile: path.join(__dirname, "generated/parser.js"),
}).parser({ ...data, preserveExtras: false });

await createGenerator("javascript", "esm", {
  lexerFile: path.join(__dirname, "generated/lexer-preserve.js"),
  parserFile: path.join(__dirname, "generated/parser-preserve.js"),
}).parser(data);
