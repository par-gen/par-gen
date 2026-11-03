/**
 * Re-emit the byte stream from a PreserveExtras CST root node losslessly.
 *
 * @param {{ reemitLossless: (stream?: Uint8Array) => Uint8Array }} cst
 * @param {Uint8Array=} stream
 * @returns {Uint8Array}
 */
export function reemitLossless(cst, stream) {
  return cst.reemitLossless(stream);
}
