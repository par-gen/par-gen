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
  const dfsStack = [cst.__pointer];

  while (dfsStack.length > 0) {
    const p = /** @type {number} */ (dfsStack.pop());
    const word0 = tree[p];
    const nChildren = word0 >>> 8;
    if (nChildren === 0) {
      const span = tree[p + 1];
      const end = span & 0x3fffff;
      const len = span >>> 22;
      const start = end - len;
      out.set(stream.subarray(start, end), offset);
      offset += len;
    } else {
      const children = new Array(nChildren);
      let child = tree[p + 1] & 0xfffff;
      children[0] = child;
      for (let i = 1; i < nChildren; i++) {
        child = tree[child + 2];
        children[i] = child;
      }
      for (let i = nChildren - 1; i >= 0; i--) {
        dfsStack.push(children[i]);
      }
    }
  }

  return out.subarray(0, offset);
}

export { parse, parsePreserveExtras, CstNode, TreeCursor };
