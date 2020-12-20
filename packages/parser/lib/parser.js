import { DFA } from "@knisterpeter/expound-dfa";
import { parse } from "@knisterpeter/expound-grammar";
import { generateFromTokens } from "@knisterpeter/expound-lexer";

/**
 * @typedef {import('@knisterpeter/expound-grammar/types/parser').Token} Token
 */

/**
 * @typedef {import('@knisterpeter/expound-grammar/types/parser').Rule} Rule
 */

/**
 * @typedef {import('@knisterpeter/expound-lexer/types/lexer').LexerData} LexerData
 */

/**
 * @typedef {{[stateName: string]: LexerData}} Lexers
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
 * @property {string} lookahead
 * @property {string=} semanticAction
 */

/**
 * @typedef {Set<Item>} ItemState
 */

/**
 * @typedef {Object} ParserData
 * @property {Rule[]} rules
 * @property {Set<Item>[]} states
 * @property {string[]} terminals
 * @property {string[]} nonTerminals
 * @property {Map<Set<Item>, Map<string, Shift | Reduce | Done>>} actions
 * @property {Map<Set<Item>, Map<string, Set<Item>>>} goto
 * @property {ItemState} start
 * @property {Lexers} lexerData
 */

/**
 * @typedef {Object} AST
 */

/**
 * @param {string} grammar
 * @returns {ParserData}
 */
export function generate(grammar) {
  const { tokens, rules } = parse(grammar);

  const tokenGroups = tokens.reduce((groups, token) => {
    let list = groups.get(token.state);
    if (!list) {
      list = [];
      groups.set(token.state, list);
    }
    list.push(token);
    return groups;
  }, /** @type {Map<string, Token[]>} */ (new Map()));

  /** @type {Lexers} */
  const lexers = {};
  for (const [name, tokens] of tokenGroups.entries()) {
    const lexerData = generateFromTokens(tokens);
    lexers[name] = lexerData;
  }
  const EOF = lexers.initial.tokens.EOF;

  const augmentedRules = [
    /** @type {Rule} */
    ({
      name: "S",
      symbols: [rules[0].name],
      actions: [],
    }),
    ...rules,
  ];

  const dfa = createDFA(tokens, EOF, augmentedRules);

  const actions = createActionTable(dfa, EOF);
  const goto = createGotoTable(dfa, augmentedRules);

  /** @type {Set<ItemState>} */
  const states = new Set();
  for (const [from, action] of actions.entries()) {
    states.add(from);
    for (const [, to] of action.entries()) {
      if (to.op === "shift") {
        states.add(to.state);
      }
    }
  }
  for (const [from, target] of goto.entries()) {
    states.add(from);
    for (const [, to] of target) {
      states.add(to);
    }
  }

  const start = dfa.description.start;

  return {
    rules,
    states: Array.from(states),
    // todo: rename terminals and nonTerminals
    // these are rule symbols (e.g. for lookahead) and rule names
    terminals: [EOF, ...dfa.description.symbols],
    nonTerminals: rules.map((rule) => rule.name),
    actions,
    goto,
    start: start,
    lexerData: lexers,
  };
}

/**
 * @param {Token[]} tokens
 * @param {string} EOF
 * @param {Rule[]} rules
 * @returns {DFA<ItemState, string>}
 */
function createDFA(tokens, EOF, rules) {
  const {
    states,
    transitions,
    start,
    finals,
  } = calculateStatesAndTransitionTable(tokens, EOF, rules);

  /** @type {DFADescription<ItemState, string>} */
  const description = {
    states,
    symbols: [
      ...tokens.map((token) => token.name),
      ...rules.map((rule) => rule.name),
    ],
    transitions,
    start,
    finals,
  };

  const dfa = new DFA(description);

  return dfa;
}

/**
 * @param {Partial<Item>} item
 * @returns {string}
 */
function printItem(item) {
  const head = [...(item.tokens ?? [])].slice(0, item.marker ?? 0);
  const tail = [...(item.tokens ?? [])].slice(item.marker ?? 0);

  return `${item.name} -> ${[...head, "•", ...tail].join(" ")}, ${
    item.lookahead
  }`;
}

/**
 * @param {Token[]} tokens
 * @param {string} EOF
 * @param {Rule[]} rules
 * @returns {Item[]}
 */
function createItems(tokens, EOF, rules) {
  return [
    ...rules.flatMap((rule) => [
      ...rule.symbols.flatMap((_, i) => [
        {
          name: rule.name,
          tokens: rule.symbols,
          marker: i,
          lookahead: EOF,
          semanticAction: rule.actions.find((action) => action.at === i)?.code,
        },
        ...tokens.map((token) => ({
          name: rule.name,
          tokens: rule.symbols,
          marker: i,
          lookahead: token.name,
          semanticAction: rule.actions.find((action) => action.at === i)?.code,
        })),
      ]),
      {
        name: rule.name,
        tokens: rule.symbols,
        marker: rule.symbols.length,
        lookahead: EOF,
        semanticAction: rule.actions.find(
          (action) => action.at === rule.symbols.length
        )?.code,
      },
      ...tokens.map((token) => ({
        name: rule.name,
        tokens: rule.symbols,
        marker: rule.symbols.length,
        lookahead: token.name,
        semanticAction: rule.actions.find(
          (action) => action.at === rule.symbols.length
        )?.code,
      })),
    ]),
  ];
}

/**
 *
 * @param {Partial<Item>} needle
 * @param {Item[]} items
 * @returns {Item}
 */
function getItem(needle, items) {
  const item = items.find((item) => {
    const tokensEqual = () => {
      let equal = needle.tokens?.length === item.tokens.length;
      for (let i = 0; equal && i < item.tokens.length; i++) {
        equal = needle.tokens?.[i] === item.tokens[i];
      }
      return equal;
    };

    return (
      item.name === needle.name &&
      item.marker === needle.marker &&
      item.tokens.length === needle.tokens?.length &&
      tokensEqual() &&
      item.lookahead === needle.lookahead
    );
  });

  if (!item) {
    throw new Error(`Unable to find item [${printItem(needle)}]`);
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
      lookahead: "dummy",
      semanticAction: undefined,
    },
    rules
  );

  /** @type {Item[]} */
  const itemSet = closure.flatMap((item) =>
    Array.from(/** @type {Set<Token>} */ (follows.get(item.name))).map(
      (token) => ({
        ...item,
        lookahead: token.name,
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
            lookahead: token.name,
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
        lookahead: "dummy",
      }))
    );
  }

  return closure;
}

/**
 * @param {Token[]} tokens
 * @param {Rule[]} rules
 * @returns {Map<string, Set<Token>>}
 */
function calculateFirsts(tokens, rules) {
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
 * @param {Token[]} tokens
 * @param {string} EOF
 * @param {Rule[]} rules
 * @returns {Map<string, Set<Token>>}
 */
function calculateFollows(firsts, tokens, EOF, rules) {
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
      follows.add({
        name: EOF,
        expr: EOF,
        state: "initial",
      });
    }
    const rhsRules = rules.filter((rule) => rule.symbols.includes(ruleName));

    rhsRules.forEach((rule) => {
      const current = rule.symbols.indexOf(ruleName);
      const next = current + 1;
      if (next < rule.symbols.length) {
        const symbol = rule.symbols[next];
        const isNonTerminal = rulesNames.has(symbol);
        if (isNonTerminal) {
          firsts.get(symbol)?.forEach((name) => {
            follows.add(name);
          });
        } else {
          const token = tokenCache.get(symbol);
          if (!token) {
            throw new Error(`Illegal state: No token for '${symbol}'`);
          }
          follows.add(token);
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

/**
 * @param {Token[]} tokens
 * @param {string} EOF
 * @param {Rule[]} rules
 * @returns {{states: ItemState[], transitions: Map<ItemState, Map<string, ItemState>>, start: ItemState, finals: ItemState[]}}
 */
function calculateStatesAndTransitionTable(tokens, EOF, rules) {
  /** @type {Map<ItemState, Map<string, ItemState>>} */
  const transitions = new Map();

  const items = createItems(tokens, EOF, rules);

  const firsts = calculateFirsts(tokens, rules);
  const follows = calculateFollows(firsts, tokens, EOF, rules);

  /** @type {ItemState[]} */
  const itemSets = [];

  /** @type {ItemState[]} */
  const newItemSets = [firstItemSet(rules[0], rules, items, follows)];
  while (newItemSets.length > 0) {
    const fromItemSet = newItemSets.shift();
    if (!fromItemSet) {
      continue;
    }
    itemSets.push(fromItemSet);

    const nextStates = nextItemSets(fromItemSet, rules, items, follows);

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
      tokens: rules[0].symbols,
      marker: 1,
      lookahead: EOF,
    },
    items
  );

  return {
    states: itemSets,
    transitions,
    start: itemSets[0],
    finals: itemSets.filter((state) => state.has(finalItem)),
  };
}

/**
 * @typedef {Object} Shift
 * @property {'shift'} op
 * @property {ItemState} state
 * @property {undefined} symbol
 */

/**
 * @typedef {Object} Reduce
 * @property {'reduce'} op
 * @property {undefined} state
 * @property {string} symbol
 */

/**
 * @typedef {Object} Done
 * @property {'done'} op
 * @property {undefined} state
 * @property {undefined} symbol
 */

/**
 * @typedef {Shift | Reduce | Done} Actions
 */

/**
 * @param {DFA<ItemState, string>} dfa
 * @param {string} EOF
 * @returns {Map<ItemState, Map<string, Actions>>}
 */
function createActionTable(dfa, EOF) {
  /** @type {Map<ItemState, Map<string, Actions>>} */
  const actions = new Map();

  dfa.description.states.forEach((currentState) => {
    const transition = dfa.description.transitions.get(currentState);
    dfa.description.symbols.forEach((symbol) => {
      const ns = transition?.get(symbol);
      if (ns) {
        actions.set(
          currentState,
          new Map([
            ...Array.from(actions.get(currentState)?.entries() ?? []),
            [symbol, { op: "shift", state: ns, symbol: undefined }],
          ])
        );
      }
    });
    [...dfa.description.symbols, EOF].forEach((symbol) => {
      const ends = Array.from(currentState.values()).filter(
        (item) => item.marker >= item.tokens.length
      );

      ends.forEach((end) => {
        if (end.lookahead === symbol) {
          actions.set(
            currentState,
            new Map([
              ...Array.from(actions.get(currentState)?.entries() ?? []),
              [symbol, { op: "reduce", state: undefined, symbol: end.name }],
            ])
          );
        }
      });
    });
  });
  dfa.description.finals.forEach((finalState) => {
    actions.get(finalState)?.set(EOF, {
      op: "done",
      state: undefined,
      symbol: undefined,
    });
  });

  return actions;
}

/**
 * @param {DFA<ItemState, string>} dfa
 * @param {Rule[]} rules
 * @returns {Map<ItemState, Map<string, ItemState>>}
 */
function createGotoTable(dfa, rules) {
  const ruleNames = rules.map((rule) => rule.name);

  /** @type {Map<ItemState, Map<string, ItemState>>} */
  const goto = new Map();

  dfa.description.states.forEach((currentState) => {
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

  return goto;
}
