import {
  JavaScriptCommonJsCodegen,
  JavaScriptModuleCodegen,
} from "@par-gen/codegen";
import { generate, generateFromTreesitter } from "@par-gen/parser";
import { promises as fsp } from "fs";
import { resolve } from "path";
import { pathToFileURL } from "url";

/**
 * @typedef {import('@par-gen/codegen/types/type').Codegen} Codegen
 */

/**
 * @typedef {import('@par-gen/grammar/types/parser').ParseOptions} ParseOptions
 */

/**
 * @typedef {ParseOptions & {
 *   fromTreesitter?: boolean,
 *   preserveExtras?: boolean,
 *   scanner?: string,
 *   maxStates?: number,
 *   externals?: Record<string, *>
 * }} ExecuteOptions
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
 * @param {ExecuteOptions=} options
 */
export async function execute(grammarFile, codegen, options) {
  const source = await fsp.readFile(grammarFile, "utf-8");
  const isTreesitterJson =
    Boolean(options?.fromTreesitter) ||
    grammarFile.endsWith(".json") ||
    source.trimStart().startsWith("{");

  /** @type {ExecuteOptions | undefined} */
  let effectiveOptions = options;
  if (isTreesitterJson && options?.scanner) {
    const scannerUrl = pathToFileURL(resolve(options.scanner)).href;
    const scannerMod = await import(scannerUrl);
    const loadedExternals =
      scannerMod.externals ??
      scannerMod.default?.externals ??
      scannerMod.default;
    if (loadedExternals && typeof loadedExternals === "object") {
      effectiveOptions = {
        ...options,
        externals: {
          ...loadedExternals,
          ...(options.externals ?? {}),
        },
      };
    }
  }

  const data = isTreesitterJson
    ? generateFromTreesitter(source, effectiveOptions)
    : generate(source, effectiveOptions);
  await codegen.parser(data);
}

export { execute as generateParser };
