import { parse, CstNode, TreeCursor } from "./generated/parser.js";
import { parse as parsePreserveExtras } from "./generated/parser-preserve.js";
import { reemitLossless as sharedReemitLossless } from "@par-gen/parser";

/**
 * Re-emit the byte stream from a PreserveExtras CST root node losslessly.
 * @param {CstNode} cst
 * @param {Uint8Array} stream
 * @returns {Uint8Array}
 */
export function reemitLossless(cst, stream) {
  return typeof /** @type {*} */ (cst).reemitLossless === "function"
    ? /** @type {*} */ (cst).reemitLossless(stream)
    : sharedReemitLossless(cst, stream);
}

export { parse, parsePreserveExtras, CstNode, TreeCursor };
