/**
 * @typedef {Object} Token
 * @property {string} name
 * @property {string} expr
 */

/**
 * @param {string} grammar
 * @returns {{tokens: Token[]}}
 */
export function parse(grammar) {
  const lines = grammar
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => !line.startsWith("#"))
    .filter(Boolean);

  const tokens = lines
    .map((line) => line.match(/(?<token>[A-Z]+)\s*:=(?<expr>[^;]+);/))
    .filter(Boolean)
    .map(
      (match) =>
        /** @type {Token} */ ({
          name: match?.groups?.token?.trim(),
          expr: match?.groups?.expr?.trim(),
        })
    );

  return {
    tokens,
  };
}
