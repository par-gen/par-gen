import { DFA } from "@knisterpeter/expound-dfa";
import { parse } from "@knisterpeter/expound-grammar";
import { lexer } from "@knisterpeter/expound-lexer";

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

  /** @type {Map<Set<Item>, Map<string, Set<Item>>>} */
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
          ...Array.from(transitions.get(fromItemSet)?.entries() ?? []),
          [token, existing !== -1 ? itemSets[existing] : toItemSet],
        ])
      );
      if (existing === -1) {
        newItemSets.push(toItemSet);
      }
    }
  }

  const finalItem = getItem(
    {
      name: "S",
      tokens: [rules[0].name],
      marker: 1,
      lookahead: [EOF.name],
    },
    items
  );

  /** @type {DFADescription<Set<Item>, string>} */
  const description = {
    states: itemSets,
    symbols: [
      ...augmentedTokens.map((token) => token.name),
      ...augmentedRules.map((rule) => rule.name),
    ],
    transitions,
    start: itemSets[0],
    finals: itemSets.filter((itemSet) => itemSet.has(finalItem)),
  };

  const dfa = new DFA(description);

  /** @type {Map<Set<Item>, Map<string, {op: string, st: Set<Item> | undefined, sym: string | undefined}>>} */
  const actions = new Map();
  dfa.description.states.forEach((cs) => {
    const transition = dfa.description.transitions.get(cs);
    dfa.description.symbols.forEach((symbol) => {
      const ns = transition?.get(symbol);
      if (ns) {
        actions.set(
          cs,
          new Map([
            ...Array.from(actions.get(cs)?.entries() ?? []),
            [symbol, { op: "shift", st: ns, sym: undefined }],
          ])
        );
      }
    });
    dfa.description.symbols.forEach((symbol) => {
      const ends = Array.from(cs.values()).filter(
        (item) => item.marker >= item.tokens.length
      );
      ends.forEach((end) => {
        if (end.lookahead[0] === symbol) {
          actions.set(
            cs,
            new Map([
              ...Array.from(actions.get(cs)?.entries() ?? []),
              [symbol, { op: "reduce", st: undefined, sym: end.name }],
            ])
          );
        }
      });
    });
  });

  /** @type {Map<Set<Item>, Map<string, Set<Item>>>} */
  const goto = new Map();
  dfa.description.states.forEach((currentState) => {
    const ruleNames = rules.map((rule) => rule.name);

    const transition = dfa.description.transitions.get(currentState);
    Array.from(transition?.entries() ?? [])
      .filter(([from]) => ruleNames.includes(from))
      .forEach(([ruleName, to]) => {
        goto.set(
          currentState,
          new Map([
            ...Array.from(goto.get(currentState)?.entries() ?? []),
            [ruleName, to],
          ])
        );
      });
  });

  const code = lexer(grammar, {
    codegen: {
      module: "function",
    },
  });
  const { next } = new Function(code)();

  return (input) => {
    const stream = Uint8Array.from(Buffer.from(input));
    let rest = stream.subarray(0);

    let result = next(rest);
    let { state: la, value } = result;
    rest = rest.subarray(value.length);

    /** @type {{state: Set<Item>, tree: *}[]} */
    const stack = [
      {
        state: dfa.description.start,
        tree: undefined,
      },
    ];

    while (true) {
      const actionSet = actions.get(stack[0].state);
      const action = actionSet?.get(la);

      if (action === undefined) {
        if (la === EOF.name) {
          return stack[0].tree.items[0];
        }
        return false;
      }

      switch (action?.op) {
        case "shift":
          /** @type {Partial<{state: Set<Item>, tree: *}>} */
          const stackItem = {
            state: undefined,
            tree: { name: la, value },
          };

          result = next(rest);
          la = result.state ? result.state : EOF.name;
          value = result.value;
          rest = value !== undefined ? rest.subarray(value.length) : rest;

          stackItem.state = /** @type {Set<Item>} */ (action.st);
          stack.unshift(/** @type {{state: Set<Item>, tree: *}} */ (stackItem));

          break;
        case "reduce":
          const item = Array.from(stack[0].state.values()).find(
            (item) => item.name === action.sym && item.lookahead[0] === la
          );
          if (!item) {
            throw new Error("Illegal state");
          }
          const n = item.tokens.length;
          const removed = stack.splice(0, n);

          const tree = {
            name: action.sym,
            items: removed.map((r) => r.tree).reverse(),
          };

          const goto0 = goto.get(stack[0].state);
          const ns = goto0?.get(/** @type {string} */ (action.sym));
          stack.unshift({
            state: /** @type {Set<Item>} */ (ns),
            tree,
          });

          break;
        default:
          log({
            action,
            result,
            stackLenght: stack.length,
            stack: stack.map((entry) => entry.tree),
            state: stack[0].state,
          });
          throw new Error("not sure what you want " + action?.op);
      }
    }

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
      }))
    ),
    ...tokens.map((token) => ({
      name: rule.name,
      tokens: rule.symbols,
      marker: rule.symbols.length,
      lookahead: [token.name],
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
