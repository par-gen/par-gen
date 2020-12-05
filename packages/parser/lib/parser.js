import { DFA } from "@knisterpeter/expound-dfa";
import { parse } from "@knisterpeter/expound-grammar";

import { inspect } from "util";

/**
 * @param {unknown} o
 */
function log(o) {
  console.log(inspect(o, { colors: true, depth: 10 }));
}

/**
 * @typedef {import('@knisterpeter/expound-grammar/types/parser').Token} Token
 */

/**
 * @typedef {import('@knisterpeter/expound-grammar/types/parser').Rule} Rule
 */

/**
 * @template STATE, SYMBOL
 * @typedef {import('@knisterpeter/expound-dfa/types/dfa').DFADescription<STATE, SYMBOL>} DFADescription
 */

/**
 * @typedef {Object} Item
 * @property {string} name
 * @property {string[]} tokens
 * @property {number} marker
 * @property {string[]} lookahead
 * @property {boolean} kernel
 */

/**
 * @typedef {Object} AST
 */

/** @type {Token} */
const EOF = {
  name: "EOF",
  expr: "",
};

/**
 * @param {string} grammar
 * @returns {(input: string) => AST}
 */
export function parser(grammar) {
  const { tokens, rules } = parse(grammar);

  /** @type {Token[]} */
  const augmentedTokens = [EOF, ...tokens];

  /** @type {Rule[]} */
  const augmentedRules = [
    {
      name: "S",
      symbols: [rules[0].name],
    },
    ...rules,
  ];

  const items = createItems(augmentedRules, augmentedTokens);
  const firsts = calculateFirsts(augmentedRules, augmentedTokens);
  const follows = calculateFollows(firsts, augmentedRules, augmentedTokens);

  /** @type {Map<Set<Item>, Map<Token, Set<Item>>>} */
  const transitions = new Map();

  /** @type {Set<Item>[]} */
  const itemSets = [];

  /** @type {Set<Item>[]} */
  const newItemSets = [firstItemSet(augmentedRules[0], rules, items, follows)];
  while (newItemSets.length > 0) {
    const fromItemSet = newItemSets.shift();
    if (!fromItemSet) {
      continue;
    }
    itemSets.push(fromItemSet);

    const nextStates = nextItemSets(
      fromItemSet,
      augmentedRules,
      items,
      follows
    );

    for (const [token, toItemSet] of nextStates.entries()) {
      const existing = itemSets.findIndex((exiting) => {
        return (
          exiting.size === toItemSet.size &&
          Array.from(toItemSet.values()).every((item) => exiting.has(item))
        );
      });
      transitions.set(
        fromItemSet,
        new Map([
          [
            /** @type {Token} */ (augmentedTokens.find(
              (t) => t.name === token
            )),
            existing !== -1 ? itemSets[existing] : toItemSet,
          ],
        ])
      );
      if (existing === -1) {
        newItemSets.push(toItemSet);
      }
    }
  }

  /** @type {DFADescription<Set<Item>, Token>} */
  const description = {
    states: itemSets,
    symbols: augmentedTokens,
    transitions,
    start: itemSets[0],
    finals: [],
  };

  const dfa = new DFA(description);

  log({ dfa });

  return () => {
    return {};
  };
}

/**
 * @param {Rule[]} rules
 * @param {Token[]} tokens
 * @returns {Item[]}
 */
function createItems(rules, tokens) {
  return rules.flatMap((rule) => [
    ...rule.symbols.flatMap((_, i) =>
      tokens.map((token) => ({
        name: rule.name,
        tokens: rule.symbols,
        marker: i,
        lookahead: [token.name],
        kernel: false,
      }))
    ),
    ...tokens.map((token) => ({
      name: rule.name,
      tokens: rule.symbols,
      marker: rule.symbols.length,
      lookahead: [token.name],
      kernel: false,
    })),
  ]);
}

/**
 *
 * @param {Partial<Item>} needle
 * @param {Item[]} items
 * @returns {Item}
 */
function getItem(needle, items) {
  const item = items.find((item) => {
    return (
      item.name === needle.name &&
      item.marker === needle.marker &&
      item.tokens.length === needle.tokens?.length &&
      item.tokens.every((token) => needle.tokens?.includes(token)) &&
      item.lookahead.length === needle.lookahead?.length &&
      item.lookahead.every((la) => needle.lookahead?.includes(la))
    );
  });

  if (!item) {
    log({
      needle,
      found: item,
    });
    throw new Error("Illegal state");
  }
  return item;
}

/**
 * @param {Rule} rule
 * @param {Rule[]} rules
 * @param {Item[]} items
 * @param {Map<string, Set<Token>>} follows
 * @returns {Set<Item>}
 */
function firstItemSet(rule, rules, items, follows) {
  const closure = createItemClosure(
    {
      name: rule.name,
      tokens: rule.symbols,
      marker: 0,
      kernel: true,
      lookahead: [],
    },
    rules
  );

  /** @type {Item[]} */
  const itemSet = closure.flatMap((item) =>
    Array.from(/** @type {Set<Token>} */ (follows.get(item.name))).map(
      (token) => ({
        ...item,
        lookahead: [token.name],
      })
    )
  );

  return new Set(itemSet.map((item) => getItem(item, items)));
}

/**
 * @param {Set<Item>} itemSet
 * @param {Rule[]} rules
 * @param {Item[]} items
 * @param {Map<string, Set<Token>>} follows
 * @returns {Map<String, Set<Item>>}
 */
function nextItemSets(itemSet, rules, items, follows) {
  /** @type {Map<string, Set<Item>>} */
  const nextItemSets = new Map();

  for (const item of itemSet) {
    if (item.marker >= item.tokens.length) {
      continue;
    }
    const token = item.tokens[item.marker];
    const set = nextItemSets.get(token) ?? new Set();
    set.add(item);
    nextItemSets.set(token, set);
  }

  const closedMap = new Map(
    Array.from(nextItemSets.entries()).map(([token, itemSet]) => [
      token,
      Array.from(itemSet.values()).flatMap((item) => {
        return createItemClosure(
          getItem(
            { ...item, marker: Math.min(item.marker + 1, item.tokens.length) },
            items
          ),
          rules
        );
      }),
    ])
  );

  /** @type {Map<string, Item[]>} */
  const lookaheadNextItemsSets = new Map(
    Array.from(closedMap.entries()).map(([token, closure]) => [
      token,
      closure.flatMap((item) =>
        Array.from(/** @type {Set<Token>} */ (follows.get(item.name))).map(
          (token) => ({
            ...item,
            lookahead: [token.name],
          })
        )
      ),
    ])
  );

  return new Map(
    Array.from(lookaheadNextItemsSets.entries()).map(([token, itemSet]) => [
      token,
      new Set(itemSet.map((item) => getItem(item, items))),
    ])
  );
}

/**
 * @param {Item} item
 * @param {Rule[]} rules
 * @returns {Item[]}
 */
function createItemClosure(item, rules) {
  /** @type {Item[]} */
  const closure = [];

  /** @type {Item[]} */
  const open = [item];
  while (open.length > 0) {
    const item = open.shift();
    if (!item) {
      continue;
    }
    // add open item to closure
    closure.push(item);

    if (item.marker >= item.tokens.length) {
      continue;
    }

    const token = item.tokens[item.marker];
    if (open.some((item) => item.name === token)) {
      // already processing this token? => stop
      continue;
    }

    if (closure.some((item) => item.name === token && item.marker === 0)) {
      // already processed this token? => stop
      continue;
    }

    // is non-terminal?
    const nextRules = rules.filter((rule) => rule.name === token);
    if (nextRules.length === 0) {
      continue;
    }

    open.push(
      ...nextRules.map((rule) => ({
        name: rule.name,
        tokens: rule.symbols,
        marker: 0,
        kernel: false,
        lookahead: [],
        symbol: undefined,
        itemSet: undefined,
      }))
    );
  }

  return closure;
}

/**
 * @param {Rule[]} rules
 * @param {Token[]} tokens
 * @returns {Map<string, Set<Token>>}
 */
function calculateFirsts(rules, tokens) {
  // todo: handle epsilon (http://david.tribble.com/text/lrk_parsing.html)

  const rulesNames = new Set(rules.map((rule) => rule.name));
  const tokenCache = new Map(tokens.map((token) => [token.name, token]));

  /** @type {Map<string, Set<Token>>} */
  const computed = new Map();

  let changes = true;
  const open = [...rulesNames];
  while (open.length > 0 || !changes) {
    const ruleName = open.shift();
    if (!ruleName) {
      continue;
    }
    changes = false;

    const rule = rules
      .filter((rule) => rule.name === ruleName)
      .filter((rule) => rule.symbols[0] !== ruleName);

    const symbols = rule.map((rule) => rule.symbols[0]);
    const nonTerminals = symbols.filter((token) => rulesNames.has(token));

    if (
      nonTerminals.length === 0 ||
      nonTerminals.every((token) => computed.has(token))
    ) {
      const terminals = new Set(
        symbols
          .filter((token) => !rulesNames.has(token))
          .map((symbol) => /** @type {Token} */ (tokenCache.get(symbol)))
      );

      nonTerminals.forEach((token) => {
        for (const terminal of computed.get(token) ?? new Set()) {
          terminals.add(terminal);
        }
      });

      computed.set(ruleName, terminals);
      changes = true;
    } else {
      open.push(ruleName);
    }
  }

  if (open.length > 0) {
    throw new Error(`Grammar is invalid: ${open}`);
  }

  return computed;
}

/**
 * @param {Map<string, Set<Token>>} firsts
 * @param {Rule[]} rules
 * @param {Token[]} tokens
 * @returns {Map<string, Set<Token>>}
 */
function calculateFollows(firsts, rules, tokens) {
  // todo: handle epsilon (http://david.tribble.com/text/lrk_parsing.html)

  const rulesNames = new Set(rules.map((rule) => rule.name));
  const tokenCache = new Map(tokens.map((token) => [token.name, token]));

  /** @type {Map<string, Set<Token>>} */
  const computed = new Map();

  const open = [...rulesNames];
  while (open.length > 0) {
    const ruleName = open.shift();
    if (!ruleName) {
      continue;
    }

    let incomplete = false;
    /** @type {Set<Token>} */
    const follows = new Set();

    if (rules[0].name === ruleName) {
      follows.add(EOF);
    }
    const rhsRules = rules.filter((rule) => rule.symbols.includes(ruleName));

    rhsRules.forEach((rule) => {
      const current = rule.symbols.indexOf(ruleName);
      const next = current + 1;
      if (next < rule.symbols.length) {
        const symbol = rule.symbols[next];
        const isNonTerminal = ruleName.includes(symbol);
        if (isNonTerminal) {
          firsts.get(symbol)?.forEach((name) => {
            follows.add(name);
          });
        } else {
          follows.add(/** @type {Token} */ (tokenCache.get(symbol)));
        }
      } else if (rule.name !== ruleName) {
        if (computed.has(rule.name)) {
          for (const name of computed.get(rule.name) ?? new Set()) {
            follows.add(name);
          }
        } else {
          incomplete = true;
        }
      }
    });

    if (incomplete || follows.size === 0) {
      open.push(ruleName);
    } else {
      computed.set(ruleName, follows);
    }
  }

  return computed;
}
