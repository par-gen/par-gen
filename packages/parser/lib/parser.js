import { DFA } from "@par-gen/dfa";
import { parse } from "@par-gen/grammar";
import { generateFromTokens } from "@par-gen/lexer";
import debug from "debug";
import { performance } from "perf_hooks";

const log = debug("par-gen:parser");

/**
 * @typedef {import('@par-gen/grammar/types/parser').Token} Token
 */

/**
 * @typedef {import('@par-gen/grammar/types/parser').Rule} Rule
 */

/**
 * @typedef {import('@par-gen/lexer/types/lexer').LexerData} LexerData
 */

/**
 * @typedef {{[stateName: string]: LexerData}} Lexers
 */

/**
 * @template STATE, SYMBOL
 * @typedef {import('@par-gen/dfa/types/dfa').DFADescription<STATE, SYMBOL>} DFADescription
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
 * @property {string[]} parserSymbols
 * @property {number[]} parserSymbolIds
 * @property {string[]} grammarRuleNames
 * @property {Map<Set<Item>, Map<string, Shift | Reduce | Done>>} actions
 * @property {Map<Set<Item>, Map<string, Set<Item>>>} goto
 * @property {ItemState} start
 * @property {Lexers} lexerData
 */

/**
 * @typedef {Object} AST
 */

/**
 * @typedef {import('@par-gen/grammar/types/parser').ParseOptions} ParseOptions
 */

/**
 * @param {string} grammar
 * @param {ParseOptions=} options
 * @returns {ParserData}
 */
export function generate(grammar, options) {
  const traceStart = performance.now();
  log("enter generate");
  try {
    const { tokens, rules } = parse(grammar, options);
    const skipTokenSet = new Set(options?.skipTokens ?? []);

    const tokenGroups = tokens.reduce((groups, token) => {
      token.state.forEach((state) => {
        let list = groups.get(state);
        if (!list) {
          list = [];
          groups.set(state, list);
        }
        list.push(token);
      });
      return groups;
    }, /** @type {Map<string, Token[]>} */ (new Map()));

    /** @type {Lexers} */
    const lexers = {};
    /** @type {Set<string>} */
    const byteTableSkippedTokens = new Set();

    for (const [name, stateTokens] of tokenGroups.entries()) {
      const skippedInState = stateTokens.filter((t) =>
        skipTokenSet.has(t.name)
      );
      if (skippedInState.length === 0) {
        lexers[name] = generateFromTokens(stateTokens);
        continue;
      }

      const keptInState = stateTokens.filter((t) => !skipTokenSet.has(t.name));
      const specialTokens = stateTokens.filter((t) => t.expr === "");
      const skipDfa = generateFromTokens([...skippedInState, ...specialTokens]);
      const keptDfa = generateFromTokens(keptInState);

      const skipTransMap = new Map(skipDfa.transitions);
      const keptTransMap = new Map(keptDfa.transitions);
      const finalState = skipDfa.finals[0];
      const nonErrorStates = skipDfa.transitions
        .map(([from]) => from)
        .filter((s) => s !== skipDfa.errorState);

      const startTr = skipTransMap.get(skipDfa.start) ?? [];
      const finalTr =
        finalState !== undefined ? skipTransMap.get(finalState) ?? [] : [];

      const startBytes = startTr
        .filter(([, to]) => to === finalState)
        .map(([sym]) => sym)
        .sort((a, b) => a - b);
      const loopBytes = finalTr
        .filter(([, to]) => to === finalState)
        .map(([sym]) => sym)
        .sort((a, b) => a - b);

      const isPureBytePlus =
        skipDfa.finals.length === 1 &&
        finalState !== skipDfa.start &&
        nonErrorStates.every(
          (s) => s === skipDfa.start || s === finalState
        ) &&
        startTr.every(
          ([, to]) => to === finalState || to === skipDfa.errorState
        ) &&
        finalTr.every(
          ([, to]) => to === finalState || to === skipDfa.errorState
        ) &&
        startBytes.length > 0 &&
        startBytes.length === loopBytes.length &&
        startBytes.every((b, idx) => b === loopBytes[idx]);

      const keptStartTr = keptTransMap.get(keptDfa.start) ?? [];
      const keptStartByteSet = new Set(
        keptStartTr
          .filter(([, to]) => to !== keptDfa.errorState)
          .map(([sym]) => sym)
      );
      const disjointFromKept = startBytes.every(
        (b) => !keptStartByteSet.has(b)
      );

      if (isPureBytePlus && disjointFromKept) {
        keptDfa.skipBytes = startBytes;
        lexers[name] = keptDfa;
        skippedInState.forEach((t) => byteTableSkippedTokens.add(t.name));
      } else {
        const fullDfa = generateFromTokens(stateTokens);
        fullDfa.skipTokenNames = skippedInState.map((t) => t.name);
        lexers[name] = fullDfa;
      }
    }
    const EOF = lexers.initial.tokens.EOF;
    const filteredTokens =
      byteTableSkippedTokens.size > 0
        ? tokens.filter((t) => !byteTableSkippedTokens.has(t.name))
        : tokens;
    const parserTokens = filteredTokens.filter(
      (t, idx, arr) => arr.findIndex((x) => x.name === t.name) === idx
    );

    const augmentedRules = [
      /** @type {Rule} */
      ({
        uid: Number.MAX_SAFE_INTEGER,
        name: "S",
        symbols: [rules[0].name],
        actions: [],
      }),
      ...rules,
    ];

    const dfa = createDFA(parserTokens, EOF, augmentedRules);

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

    let start = dfa.description.start;

    let changed = true;
    while (changed) {
      changed = false;
      const stateList = Array.from(states);
      /** @type {Map<string, ItemState>} */
      const sigMap = new Map();
      /** @type {Map<ItemState, ItemState>} */
      const replacement = new Map();

      for (const st of stateList) {
        const actMap = actions.get(st);
        const items = Array.from(st.values());
        const actEntries = actMap
          ? Array.from(actMap.entries())
              .map(([sym, act]) => {
                if (act.op === "shift") {
                  const semActs = items
                    .filter(
                      (it) => it.tokens[it.marker] === sym && it.semanticAction
                    )
                    .map((it) => it.semanticAction?.trim())
                    .filter((v, idx, arr) => arr.indexOf(v) === idx)
                    .join(",");
                  return `${sym}:S:${stateList.indexOf(act.state)}:${semActs}`;
                }
                if (act.op === "reduce") {
                  const matched = items.find(
                    (it) =>
                      it.name === act.symbol &&
                      it.marker === it.tokens.length &&
                      it.lookahead === sym
                  );
                  const len = matched ? matched.tokens.length : 0;
                  const semAct = matched?.semanticAction ?? "";
                  return `${sym}:R:${act.symbol}:${len}:${semAct}`;
                }
                return `${sym}:D`;
              })
              .sort()
              .join("|")
          : "";

        const gotoMap = goto.get(st);
        const gotoEntries = gotoMap
          ? Array.from(gotoMap.entries())
              .map(([sym, target]) => `${sym}:G:${stateList.indexOf(target)}`)
              .sort()
              .join("|")
          : "";

        const sig = `${actEntries}#${gotoEntries}`;
        const canonical = sigMap.get(sig);
        if (canonical) {
          replacement.set(st, canonical);
          changed = true;
        } else {
          sigMap.set(sig, st);
        }
      }

      if (changed) {
        for (const [dup, canonical] of replacement.entries()) {
          states.delete(dup);
          actions.delete(dup);
          goto.delete(dup);
          if (start === dup) {
            start = canonical;
          }
        }
        for (const [, actMap] of actions.entries()) {
          for (const [sym, act] of actMap.entries()) {
            if (act.op === "shift") {
              const redirected = replacement.get(act.state);
              if (redirected) {
                actMap.set(sym, {
                  op: "shift",
                  state: redirected,
                  symbol: undefined,
                });
              }
            }
          }
        }
        for (const [, gotoMap] of goto.entries()) {
          for (const [sym, target] of gotoMap.entries()) {
            const redirected = replacement.get(target);
            if (redirected) {
              gotoMap.set(sym, redirected);
            }
          }
        }
      }
    }

    const allTokenNames = Object.values(lexers).flatMap(
      (data) => data.tokenNames
    );

    let parserSymbols = Array.from(new Set(dfa.description.symbols));
    // add to align to power of 2 when it does not exceed the 11-bit pre-multiplied state budget
    const nextPow2 = Math.pow(2, Math.ceil(Math.log2(parserSymbols.length)));
    if (
      states.size * nextPow2 < 2048 ||
      states.size * parserSymbols.length >= 2048
    ) {
      for (let i = 0, n = nextPow2 - parserSymbols.length; i < n; i++) {
        parserSymbols.push(/** @type {*} */ (undefined));
      }
    }

    for (const data of Object.values(lexers)) {
      data.tokenIds = data.tokenNames.map((name) => {
        if (name === undefined) {
          return undefined;
        }
        const idx = parserSymbols.indexOf(name);
        return idx === -1 ? undefined : idx;
      });
    }

    const parserSymbolIds = parserSymbols.map((symbol) => {
      let index = allTokenNames.indexOf(symbol);
      if (index === -1) {
        // lookup from rules?
      }
      return index;
    });

    return {
      rules,
      states: Array.from(states),
      parserSymbols,
      parserSymbolIds,
      grammarRuleNames: rules.map((rule) => rule.name),
      actions,
      goto,
      start: start,
      lexerData: lexers,
    };
  } finally {
    const traceEnd = performance.now();
    log("exit generate (took %d ms)", traceEnd - traceStart);
  }
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

/** @type {WeakMap<Item[], Map<string, Item>>} */
const itemLookupCache = new WeakMap();

/**
 * @param {Partial<Item>} needle
 * @returns {string}
 */
function getItemKey(needle) {
  return `${needle.name}\0${needle.marker}\0${needle.lookahead}\0${
    needle.tokens ? needle.tokens.join("\0") : ""
  }`;
}

/**
 *
 * @param {Partial<Item>} needle
 * @param {Item[]} items
 * @returns {Item}
 */
function getItem(needle, items) {
  let index = itemLookupCache.get(items);
  if (!index) {
    index = new Map();
    for (const it of items) {
      const key = getItemKey(it);
      if (!index.has(key)) {
        index.set(key, it);
      }
    }
    itemLookupCache.set(items, index);
  }

  const item = index.get(getItemKey(needle));

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
      const eofToken = tokens.find((token) => token.name === EOF);
      if (!eofToken) {
        throw new Error(`Unable to find ${EOF} token`);
      }
      follows.add(eofToken);
    }
    const rhsRules = rules.filter((rule) => rule.symbols.includes(ruleName));

    if (rhsRules.length === 0 && rules[0].name !== ruleName) {
      // this rule is not referenced; skip
      continue;
    }

    for (const rule of rhsRules) {
      for (let current = 0; current < rule.symbols.length; current++) {
        if (rule.symbols[current] !== ruleName) {
          continue;
        }
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
      }
    }

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
      const allStates = [...itemSets, ...newItemSets];
      const existing = allStates.find((exiting) => {
        return (
          exiting.size === toItemSet.size &&
          Array.from(toItemSet.values()).every((item) => exiting.has(item))
        );
      });
      let stateTransitions = transitions.get(fromItemSet);
      if (!stateTransitions) {
        stateTransitions = new Map();
        transitions.set(fromItemSet, stateTransitions);
      }
      stateTransitions.set(token, existing ?? toItemSet);
      if (!existing) {
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
    let stateActions = actions.get(currentState);
    dfa.description.symbols.forEach((symbol) => {
      const ns = transition?.get(symbol);
      if (ns) {
        if (!stateActions) {
          stateActions = new Map();
          actions.set(currentState, stateActions);
        }
        stateActions.set(symbol, { op: "shift", state: ns, symbol: undefined });
      }
    });
    const ends = Array.from(currentState.values()).filter(
      (item) => item.marker >= item.tokens.length
    );
    dfa.description.symbols.forEach((symbol) => {
      ends.forEach((end) => {
        if (end.lookahead === symbol) {
          if (!stateActions) {
            stateActions = new Map();
            actions.set(currentState, stateActions);
          }
          stateActions.set(symbol, {
            op: "reduce",
            state: undefined,
            symbol: end.name,
          });
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
    let stateGoto = goto.get(currentState);
    Array.from(transition?.entries() ?? [])
      .filter(([from]) => ruleNames.includes(from))
      .forEach(([ruleName, to]) => {
        if (!stateGoto) {
          stateGoto = new Map();
          goto.set(currentState, stateGoto);
        }
        stateGoto.set(ruleName, to);
      });
  });

  return goto;
}
