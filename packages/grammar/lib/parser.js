import { optionals } from "./optionals.js";

/**
 * @typedef {Object} Token
 * @property {string} name
 * @property {string} expr
 */

/**
 * @typedef {Object} Rule
 * @property {string} name
 * @property {string[]} symbols
 * @property {Object[]} actions
 * @property {number} actions.at
 * @property {string} actions.code
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
 * @param {Object} match
 * @param {string} match.rule
 * @param {string} match.expr
 * @returns {Rule}
 */
function parseRule(match) {
  /** @type {string[]} */
  const symbols = [];
  /** @type {{at: number, code: string}[]} */
  const actions = [];
  /** @type {string[]} */
  const current = [];
  const str = (match.expr ?? "").trim().replace(/\s+/g, " ");
  let action = false;
  for (let i = 0; i < str.length; i++) {
    current.push(str[i]);
    if (action) {
      if (str[i] === "}") {
        actions.push({
          at: symbols.length,
          code: current
            .join("")
            .replace(/^\{(.*)\}$/, "$1")
            .trim(),
        });
        current.splice(0, current.length);
        action = false;
      }
    } else {
      if (str[i] === "{") {
        action = true;
      } else if (str[i] === " ") {
        const symbol = current.join("").trim();
        if (symbol) {
          symbols.push(symbol);
          current.splice(0, current.length);
        }
      }
    }
  }
  if (action) {
    actions.push({
      at: 0,
      code: current
        .join("")
        .replace(/^\{(.*)\}$/, "$1")
        .trim(),
    });
  } else {
    const symbol = current.join("").trim();
    if (symbol) {
      symbols.push(symbol);
    }
  }

  return {
    name: match.rule?.trim(),
    symbols,
    actions,
  };
}

/**
 * @param {string} grammar
 * @returns {{tokens: Token[], rules: Rule[]}}
 */
export function parse(grammar) {
  const lines = grammar
    .split("\n")
    .map((line) => line.trimStart())
    .filter((line) => !line.startsWith("#"))
    .join(" ")
    .split(";")
    .map((line) => line.trim())
    .filter(nonFalsyValues);

  const tokens = lines
    .map((line) => line.match(/(?<token>[A-Z_]+)\s*:=\s*'(?<expr>[^;]+)'\s*/))
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
        /(?<rule>[A-Z][A-Za-z0-9_]*?[a-z0-9_][A-Za-z0-9_]*)\s*:=\s*(?<expr>[^;]+)\s*/
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
    .filter(
      /** @returns {match is {rule: string, expr: string}} */
      (match) => Boolean(match.rule && !tokenNames.includes(match.rule))
    )
    .map(parseRule)
    .flatMap((rule) => {
      return optionals(rule.symbols).map((symbols) => ({
        ...rule,
        symbols,
      }));
    });
  const ruleNames = rules.map((rule) => rule.name);

  const knownSymbols = [...tokenNames, ...ruleNames];

  rules.forEach((rule) => {
    rule.symbols.forEach((symbol) => {
      if (!knownSymbols.includes(symbol)) {
        throw new Error(`Unknown symbol '${symbol}' in rule '${rule.name}'`);
      }
    });
  });

  return {
    tokens,
    rules,
  };
}
