import { DFA } from "@knisterpeter/expound-dfa";
import { parse } from "@knisterpeter/expound-grammar";
import { lexer } from "@knisterpeter/expound-lexer";

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
 * @typedef {Set<Item>} ItemState
 */

/**
 * @typedef {Object} AST
 */

// todo: move into lexer
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
  // todo: this should be integrated into the lexer
  const augmentedTokens = [EOF, ...tokens];

  /** @type {Rule[]} */
  const augmentedRules = [
    {
      name: "S",
      symbols: [rules[0].name],
    },
    ...rules,
  ];

  const {
    states,
    transitions,
    start,
    finals,
  } = calculateStatesAndTransitionTable(augmentedTokens, augmentedRules);

  /** @type {DFADescription<ItemState, string>} */
  const description = {
    states,
    symbols: [
      ...augmentedTokens.map((token) => token.name),
      ...augmentedRules.map((rule) => rule.name),
    ],
    transitions,
    start,
    finals,
  };

  const dfa = new DFA(description);

  const actions = createActionTable(dfa);
  const goto = createGotoTable(dfa, augmentedRules);

  const { next: nextToken } = new Function(
    lexer(grammar, {
      codegen: {
        module: "function",
      },
    })
  )();

  return (input) => {
    const stream = Uint8Array.from(Buffer.from(input));
    let rest = stream.subarray(0);

    let result = nextToken(rest);
    let { state: lookahead, value } = result;
    rest = rest.subarray(value.length);

    /** @type {{state: ItemState, tree: *}[]} */
    const stack = [
      {
        state: dfa.description.start,
        tree: undefined,
      },
    ];

    while (true) {
      const currentState = stack[0].state;

      const actionSet = actions.get(currentState);
      if (!actionSet) {
        throw new Error(`Invalid state '${printState(currentState)}'`);
      }
      const action = actionSet.get(lookahead);
      if (!action) {
        throw new Error(
          `Unknown lookahead(${lookahead}) for state ${printState(
            currentState
          )}`
        );
      }

      switch (action.op) {
        case "done":
          return stack[0].tree;
        case "shift":
          const stackItem = {
            state: action.state,
            tree: { name: lookahead, value },
          };

          // todo: make lexer typesafe
          result = nextToken(rest);
          // todo: move EOF into lexer
          lookahead = result.state ? result.state : EOF.name;
          value = result.value;
          rest = value !== undefined ? rest.subarray(value.length) : rest;

          stack.unshift(stackItem);

          break;
        case "reduce":
          const item = Array.from(currentState.values()).find(
            (item) =>
              item.name === action.symbol && item.lookahead[0] === lookahead
          );
          if (!item) {
            throw new Error(
              `No valid state ${action.symbol}(${lookahead}) found`
            );
          }
          const items = stack.splice(0, item.tokens.length);

          const tree = {
            name: action.symbol,
            // the stack grown from 0 to n -> we need to reverse the
            // parse tree
            items: items.map((r) => r.tree).reverse(),
          };

          // note: do note use `currentState` here, since we did
          // changed the stack a few lines before
          const nextState = goto.get(stack[0].state)?.get(action.symbol);
          if (!nextState) {
            throw new Error(
              `Unable to lookup goto state for ${printState(stack[0].state)}(${
                action.symbol
              })`
            );
          }
          stack.unshift({
            state: nextState,
            tree,
          });

          break;
        default:
          throw new Error("Parser Error");
      }
    }
  };
}

/**
 * @param {Partial<Item>} item
 * @returns {string}
 */
function printItem(item) {
  const head = [...(item.tokens ?? [])].slice(0, item.marker ?? 0);
  const tail = [...(item.tokens ?? [])].slice(item.marker ?? 0);

  return `${item.name} -> ${[...head, "•", ...tail].join(
    " "
  )}, ${item.lookahead?.join(" ")}`;
}

/**
 * @param {ItemState} state
 * @returns {string}
 */
function printState(state) {
  return Array.from(state.values())
    .map((item) => printItem(item))
    .join(" | ");
}

/**
 * @param {Token[]} tokens
 * @param {Rule[]} rules
 * @returns {Item[]}
 */
function createItems(tokens, rules) {
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
 * @param {Rule[]} rules
 * @returns {Map<string, Set<Token>>}
 */
function calculateFollows(firsts, tokens, rules) {
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

/**
 * @param {Token[]} tokens
 * @param {Rule[]} rules
 * @returns {{states: ItemState[], transitions: Map<ItemState, Map<string, ItemState>>, start: ItemState, finals: ItemState[]}}
 */
function calculateStatesAndTransitionTable(tokens, rules) {
  /** @type {Map<ItemState, Map<string, ItemState>>} */
  const transitions = new Map();

  const items = createItems(tokens, rules);

  const firsts = calculateFirsts(tokens, rules);
  const follows = calculateFollows(firsts, tokens, rules);

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
      lookahead: [EOF.name],
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
 * @returns {Map<ItemState, Map<string, Actions>>}
 */
function createActionTable(dfa) {
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
    dfa.description.symbols.forEach((symbol) => {
      const ends = Array.from(currentState.values()).filter(
        (item) => item.marker >= item.tokens.length
      );

      ends.forEach((end) => {
        if (end.lookahead[0] === symbol) {
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
    actions.get(finalState)?.set(EOF.name, {
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
