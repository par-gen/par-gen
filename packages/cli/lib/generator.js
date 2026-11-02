import {
  JavaScriptCommonJsCodegen,
  JavaScriptModuleCodegen,
} from "@par-gen/codegen";
import { generate, generateFromTreesitter } from "@par-gen/parser";
import { promises as fsp } from "fs";

/**
 * @typedef {import('@par-gen/codegen/types/type').Codegen} Codegen
 */

/**
 * @typedef {import('@par-gen/grammar/types/parser').ParseOptions} ParseOptions
 */

/**
 * @param {string} language
 * @param {string} module
 * @param {Object} options
 * @param {string} options.lexerFile
 * @param {string} options.parserFile
 * @param {boolean=} options.debug
 */
export function createGenerator(language, module, options) {
  switch (language.toLowerCase()) {
    case "javascript":
      switch (module.toLowerCase()) {
        case "esm":
        case "module":
          return new JavaScriptModuleCodegen(options);
        case "cjs":
        case "commonjs":
          return new JavaScriptCommonJsCodegen(options);
        default:
          throw new Error(`Unsupported module system '${module}'`);
      }
      break;
    default:
      throw new Error(`Unsupported language '${language}'`);
  }
}

/**
 * @param {string} grammarFile
 * @param {Codegen} codegen
 * @param {ParseOptions=} options
 */
export async function execute(grammarFile, codegen, options) {
  const source = await fsp.readFile(grammarFile, "utf-8");
  const isTreesitterJson =
    grammarFile.endsWith(".json") || source.trimStart().startsWith("{");
  const data = isTreesitterJson
    ? generateFromTreesitter(source, options)
    : generate(source, options);
  await codegen.parser(data);
}
