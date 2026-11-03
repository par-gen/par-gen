const CHILD_COUNT_SHIFT = 8;
const FIRST_LEAF_MASK = 0xfffff;
const LEAF_END_MASK = 0x3fffff;
const LEAF_LEN_SHIFT = 22;

/**
 * Re-emit the byte stream from a PreserveExtras CST root node losslessly.
 * Delegates to `cst.reemitLossless(stream)` when present on the generated `CstNode`,
 * with a shared fallback implementation.
 *
 * @param {{ __tree: Uint32Array, __pointer: number, __stream?: Uint8Array, reemitLossless?: (stream?: Uint8Array) => Uint8Array }} cst
 * @param {Uint8Array=} stream
 * @returns {Uint8Array}
 */
export function reemitLossless(cst, stream = cst.__stream) {
  if (typeof cst.reemitLossless === "function") {
    return cst.reemitLossless(stream);
  }
  if (!stream) {
    throw new Error("reemitLossless requires a Uint8Array stream");
  }
  const tree = cst.__tree;
  const out = Buffer.allocUnsafe(stream.length);
  let offset = 0;
  const rootPtr = cst.__pointer;
  const startPtr =
    (tree[rootPtr] >>> CHILD_COUNT_SHIFT) === 0
      ? rootPtr
      : (tree[rootPtr + 1] & FIRST_LEAF_MASK) + 2;

  for (let p = startPtr; p <= rootPtr; p += 2) {
    if ((tree[p] >>> CHILD_COUNT_SHIFT) === 0) {
      const span = tree[p + 1];
      const end = span & LEAF_END_MASK;
      const len = span >>> LEAF_LEN_SHIFT;
      const start = end - len;
      out.set(stream.subarray(start, end), offset);
      offset += len;
    }
  }

  return out.subarray(0, offset);
}
