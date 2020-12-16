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
function nonFalsyValues(input) {
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
    .filter(nonFalsyValues);

  const tokens = lines
    .map((line) => line.match(/(?<token>[A-Z_]+)\s*:=\s*'(?<expr>[^;]+)'\s*;/))
    .filter(nonFalsyValues)
    .map(
      (match) =>
        /** @type {Token} */ ({
          name: match.groups?.token?.trim(),
          expr: match.groups?.expr,
        })
    );
  const tokenNames = tokens.map((token) => token.name);

  const rules = lines
    .map((line) =>
      line.match(
        /(?<rule>[A-Z][A-Za-z0-9_]*?[a-z0-9_][A-Za-z0-9_]*)\s*:=\s*(?<expr>[^;]+)\s*;/
      )
    )
    .filter(nonFalsyValues)
    .flatMap((match) =>
      match.groups?.expr.split("|").flatMap((expr) => [
        {
          rule: match.groups?.rule,
          expr: expr,
        },
      ])
    )
    .filter(nonFalsyValues)
    .map(
      (match) =>
        /** @type {Rule} */ ({
          name: match.rule?.trim(),
          symbols: match.expr?.trim().split(/\s+/),
        })
    )
    .filter((rule) => !tokenNames.includes(rule.name));
  const ruleNames = rules.map((rule) => rule.name);

  const knownSymbols = [...tokenNames, ...ruleNames];

  rules.forEach((rule) => {
    rule.symbols.forEach((symbol) => {
      if (!knownSymbols.includes(symbol)) {
        throw new Error(`Unknown symbol '${symbol}'`);
      }
    });
  });

  return {
    tokens,
    rules,
  };
}
