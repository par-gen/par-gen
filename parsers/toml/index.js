import { parse, CstNode, TreeCursor } from "./generated/parser.js";
import { parse as parsePreserveExtras } from "./generated/parser-preserve.js";

/**
 * Re-emit the byte stream from a PreserveExtras CST root node losslessly.
 * @param {CstNode} cst
 * @param {Uint8Array} stream
 * @returns {Uint8Array}
 */
export function reemitLossless(cst, stream) {
  const tree = cst.__tree;
  const out = Buffer.allocUnsafe(stream.length);
  let offset = 0;
  const rootPtr = cst.__pointer;
  const startPtr =
    (tree[rootPtr] >>> 8) === 0 ? rootPtr : (tree[rootPtr + 1] & 0xfffff) + 2;

  for (let p = startPtr; p <= rootPtr; p += 2) {
    if ((tree[p] >>> 8) === 0) {
      const span = tree[p + 1];
      const end = span & 0x3fffff;
      const len = span >>> 22;
      const start = end - len;
      out.set(stream.subarray(start, end), offset);
      offset += len;
    }
  }

  return out.subarray(0, offset);
}

export { parse, parsePreserveExtras, CstNode, TreeCursor };
