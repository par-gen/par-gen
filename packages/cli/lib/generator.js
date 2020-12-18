import {
  JavaScriptCommonJsCodegen,
  JavaScriptModuleCodegen,
} from "@knisterpeter/expound-codegen";
import { generate } from "@knisterpeter/expound-parser";
import { promises as fsp } from "fs";

/**
 * @typedef {import('@knisterpeter/expound-codegen/types/type').Codegen} Codegen
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
 */
export async function execute(grammarFile, codegen) {
  const data = generate(await fsp.readFile(grammarFile, "utf-8"));
  await codegen.parser(data);
}
