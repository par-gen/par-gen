/**
 * @typedef {Object} Token
 * @property {string} name
 * @property {string} expr
 */

/**
 * @typedef {Object} Rule
 * @property {string} name
 * @property {string[]} symbols
 */

/**
 * @template T
 * @param {T | undefined | null} input
 * @returns {input is T}
 */
function removeFalsyValues(input) {
  return Boolean(input);
}

/**
 * @param {string} grammar
 * @returns {{tokens: Token[], rules: Rule[]}}
 */
export function parse(grammar) {
  const lines = grammar
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => !line.startsWith("#"))
    .filter(removeFalsyValues);

  const tokens = lines
    .map((line) => line.match(/(?<token>[A-Z]+)\s*:=(?<expr>[^;]+);/))
    .filter(removeFalsyValues)
    .map(
      (match) =>
        /** @type {Token} */ ({
          name: match.groups?.token?.trim(),
          expr: match.groups?.expr?.trim(),
        })
    );

  const rules = lines
    .map((line) =>
      line.match(
        /(?<rule>[A-Z][A-Za-z0-9_]+[a-z0-9_][A-Za-z0-9_]+)\s*<-(?<expr>[^;]+);/
      )
    )
    .filter(removeFalsyValues)
    .map(
      (match) =>
        /** @type {Rule} */ ({
          name: match.groups?.rule?.trim(),
          symbols: match.groups?.expr?.trim().split(/\s+/),
        })
    );

  return {
    tokens,
    rules,
  };
}
