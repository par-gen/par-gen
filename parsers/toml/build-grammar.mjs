import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { generateFromTreesitter } from "../../packages/parser/lib/parser-treesitter.js";
import { createGenerator } from "../../packages/cli/lib/generator.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const grammar = JSON.parse(
  fs.readFileSync(path.join(__dirname, "grammar.json"), "utf8")
);

console.time("generateFromTreesitter (toml)");
const data = generateFromTreesitter(grammar);
console.timeEnd("generateFromTreesitter (toml)");
console.log("States:", data.states.length);
console.log(
  "ParserSymbols:",
  data.parserSymbols.length,
  "Non-null:",
  data.parserSymbols.filter(Boolean).length
);
console.log("Contextual keywords:", data.contextualKeywordTokenNames?.length ?? 0);
console.log("SkipBytes:", data.lexerData.initial.skipBytes);
console.log("SkipTokenNames:", data.lexerData.initial.skipTokenNames);

const codegenSkip = createGenerator("javascript", "esm", {
  lexerFile: path.join(__dirname, "generated/lexer.js"),
  parserFile: path.join(__dirname, "generated/parser.js"),
});
await codegenSkip.parser(data);

const extraTokenName =
  data.lexerData.initial.skipTokenNames?.find((n) =>
    data.parserSymbols.includes(n)
  ) ?? "comment";
const preserveData = {
  ...data,
  preserveExtras: true,
  extraTokenId: data.parserSymbols.indexOf(extraTokenName),
  extraTokenName,
};
const codegenPreserve = createGenerator("javascript", "esm", {
  lexerFile: path.join(__dirname, "generated/lexer-preserve.js"),
  parserFile: path.join(__dirname, "generated/parser-preserve.js"),
});
await codegenPreserve.parser(preserveData);
console.log("Generated both SkipExtras and PreserveExtras TOML ESM parsers!");
