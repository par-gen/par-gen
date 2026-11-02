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
 * @property {number=} wordTokenId
 * @property {string=} wordTokenName
 * @property {number[]=} contextualKeywordTokenIds
 * @property {string[]=} contextualKeywordTokenNames
 * @property {boolean=} preserveExtras
 * @property {number=} extraTokenId
 * @property {string=} extraTokenName
 */

/**
 * @typedef {Object} AST
 */

/**
 * @typedef {import('@par-gen/grammar/types/parser').ParseOptions} ParseOptions
 */

/**
 * @param {Token} candidateToken
 * @param {LexerData} wordDfa
 * @param {Token[]} specialTokens
 * @returns {boolean}
 */
function isTokenLanguageSubset(candidateToken, wordDfa, specialTokens) {
  const candDfa = generateFromTokens([candidateToken, ...specialTokens]);
  if (candDfa.finals.length === 0) {
    return false;
  }

  /** @type {Map<number, Map<number, number>>} */
  const wordTrans = new Map();
  for (const [from, tr] of wordDfa.transitions) {
    wordTrans.set(from, new Map(tr));
  }
  const wordFinalSet = new Set(wordDfa.finals);

  const candTrans = new Map(candDfa.transitions);
  const candFinalSet = new Set(candDfa.finals);

  /** @type {Array<[number, number]>} */
  const queue = [[candDfa.start, wordDfa.start]];
  /** @type {Set<string>} */
  const visited = new Set([`${candDfa.start}:${wordDfa.start}`]);

  while (queue.length > 0) {
    const pair = queue.shift();
    if (!pair) {
      continue;
    }
    const [sC, sW] = pair;
    if (candFinalSet.has(sC) && !wordFinalSet.has(sW)) {
      return false;
    }
    const trC = candTrans.get(sC) ?? [];
    const trW = wordTrans.get(sW);
    for (const [byte, nextC] of trC) {
      if (nextC === candDfa.errorState) {
        continue;
      }
      const nextW = trW?.get(byte) ?? wordDfa.errorState;
      if (nextW === wordDfa.errorState) {
        return false;
      }
      const key = `${nextC}:${nextW}`;
      if (!visited.has(key)) {
        visited.add(key);
        queue.push([nextC, nextW]);
      }
    }
  }

  return true;
}

/**
 * @param {string | { tokens: Token[], rules: Rule[], precedence?: ParseOptions['precedence'], word?: string }} grammar
 * @param {ParseOptions=} options
 * @returns {ParserData}
 */
export function generate(grammar, options) {
  const traceStart = performance.now();
  log("enter generate");
  try {
    const parsedGrammar =
      typeof grammar === "string" ? parse(grammar, options) : grammar;
    const { tokens, rules } = parsedGrammar;
    const skipTokenSet = new Set(options?.skipTokens ?? []);
    for (const token of tokens) {
      if (token.skip) {
        skipTokenSet.add(token.name);
      }
    }
    const effectiveOptions =
      (!options?.precedence && parsedGrammar.precedence) ||
      (!options?.word && parsedGrammar.word)
        ? {
            ...options,
            precedence: options?.precedence ?? parsedGrammar.precedence,
            word: options?.word ?? parsedGrammar.word,
          }
        : options;

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
    /** @type {Set<string>} */
    const dfaSkippedTokens = new Set();

    /**
     * @param {LexerData} dfaData
     * @returns {number[] | null}
     */
    const extractPureBytePlusBytes = (dfaData) => {
      if (dfaData.finals.length !== 1) {
        return null;
      }
      const finalState = dfaData.finals[0];
      if (finalState === undefined || finalState === dfaData.start) {
        return null;
      }
      const transMap = new Map(dfaData.transitions);
      const nonErrorStates = dfaData.transitions
        .map(([from]) => from)
        .filter((s) => s !== dfaData.errorState);
      if (
        !nonErrorStates.every((s) => s === dfaData.start || s === finalState)
      ) {
        return null;
      }
      const startTr = transMap.get(dfaData.start) ?? [];
      const finalTr = transMap.get(finalState) ?? [];
      if (
        !startTr.every(
          ([, to]) => to === finalState || to === dfaData.errorState
        ) ||
        !finalTr.every(
          ([, to]) => to === finalState || to === dfaData.errorState
        )
      ) {
        return null;
      }
      const startBytes = startTr
        .filter(([, to]) => to === finalState)
        .map(([sym]) => sym)
        .sort((a, b) => a - b);
      const loopBytes = finalTr
        .filter(([, to]) => to === finalState)
        .map(([sym]) => sym)
        .sort((a, b) => a - b);
      if (
        startBytes.length === 0 ||
        startBytes.length !== loopBytes.length ||
        !startBytes.every((b, idx) => b === loopBytes[idx])
      ) {
        return null;
      }
      return startBytes;
    };

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

      /** @type {Array<{ token: Token, bytes: number[] }>} */
      const pureByteCandidates = [];
      /** @type {Token[]} */
      const dfaSkipped = [];

      for (const skTok of skippedInState) {
        const singleSkipDfa = generateFromTokens([skTok, ...specialTokens]);
        const bytes = extractPureBytePlusBytes(singleSkipDfa);
        if (bytes) {
          pureByteCandidates.push({ token: skTok, bytes });
        } else {
          dfaSkipped.push(skTok);
        }
      }

      if (pureByteCandidates.length > 0) {
        let remDfa = generateFromTokens([...keptInState, ...dfaSkipped]);
        let remTransMap = new Map(remDfa.transitions);
        let remStartTr = remTransMap.get(remDfa.start) ?? [];
        let remStartByteSet = new Set(
          remStartTr
            .filter(([, to]) => to !== remDfa.errorState)
            .map(([sym]) => sym)
        );

        /** @type {Array<{ token: Token, bytes: number[] }>} */
        const acceptedPure = [];
        let dfaChanged = false;
        for (const cand of pureByteCandidates) {
          if (cand.bytes.every((b) => !remStartByteSet.has(b))) {
            acceptedPure.push(cand);
          } else {
            dfaSkipped.push(cand.token);
            dfaChanged = true;
          }
        }

        if (dfaChanged && acceptedPure.length > 0) {
          remDfa = generateFromTokens([...keptInState, ...dfaSkipped]);
          remTransMap = new Map(remDfa.transitions);
          remStartTr = remTransMap.get(remDfa.start) ?? [];
          remStartByteSet = new Set(
            remStartTr
              .filter(([, to]) => to !== remDfa.errorState)
              .map(([sym]) => sym)
          );
          for (let i = acceptedPure.length - 1; i >= 0; i--) {
            if (!acceptedPure[i].bytes.every((b) => !remStartByteSet.has(b))) {
              dfaSkipped.push(acceptedPure[i].token);
              acceptedPure.splice(i, 1);
            }
          }
          if (acceptedPure.length > 0 && dfaSkipped.length > 0) {
            remDfa = generateFromTokens([...keptInState, ...dfaSkipped]);
          }
        }

        if (acceptedPure.length > 0) {
          /** @type {Set<number>} */
          const skipByteSet = new Set();
          for (const acc of acceptedPure) {
            byteTableSkippedTokens.add(acc.token.name);
            for (const b of acc.bytes) {
              skipByteSet.add(b);
            }
          }
          remDfa.skipBytes = Array.from(skipByteSet).sort((a, b) => a - b);
          if (dfaSkipped.length > 0) {
            remDfa.skipTokenNames = dfaSkipped.map((t) => t.name);
            dfaSkipped.forEach((t) => dfaSkippedTokens.add(t.name));
          }
          lexers[name] = remDfa;
        } else {
          const fullDfa = generateFromTokens(stateTokens);
          fullDfa.skipTokenNames = skippedInState.map((t) => t.name);
          skippedInState.forEach((t) => dfaSkippedTokens.add(t.name));
          lexers[name] = fullDfa;
        }
      } else {
        const fullDfa = generateFromTokens(stateTokens);
        fullDfa.skipTokenNames = skippedInState.map((t) => t.name);
        skippedInState.forEach((t) => dfaSkippedTokens.add(t.name));
        lexers[name] = fullDfa;
      }
    }
    const EOF = lexers.initial.tokens.EOF;
    const ruleReferencedSymbols = new Set(rules.flatMap((r) => r.symbols));
    const filteredTokens = tokens.filter(
      (t) =>
        !byteTableSkippedTokens.has(t.name) &&
        (!dfaSkippedTokens.has(t.name) || ruleReferencedSymbols.has(t.name))
    );
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

    log("start createDFA (rules=%d, tokens=%d)", augmentedRules.length, parserTokens.length);
    const dfa = createDFA(
      parserTokens,
      EOF,
      augmentedRules,
      effectiveOptions
    );
    log("done createDFA (states=%d)", dfa.description.states.length);

    const actions = createActionTable(
      dfa,
      EOF,
      augmentedRules,
      parserTokens,
      effectiveOptions
    );
    log("done createActionTable");
    const goto = createGotoTable(dfa, augmentedRules);
    log("done createGotoTable");

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

    const preserveExtras = Boolean(
      /** @type {*} */ (effectiveOptions)?.preserveExtras
    );
    const configuredExtraTokenName = /** @type {string | undefined} */ (
      /** @type {*} */ (effectiveOptions)?.extraTokenName
    );
    const extraTokenName = preserveExtras
      ? configuredExtraTokenName ??
        Array.from(dfaSkippedTokens)[0] ??
        Array.from(byteTableSkippedTokens)[0] ??
        "extras"
      : undefined;

    let parserSymbols = Array.from(
      new Set([
        ...dfa.description.symbols,
        ...dfaSkippedTokens,
        ...(extraTokenName ? [extraTokenName] : []),
      ])
    );
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

    /** @type {number | undefined} */
    let wordTokenId;
    /** @type {string | undefined} */
    let wordTokenName;
    /** @type {number[] | undefined} */
    let contextualKeywordTokenIds;
    /** @type {string[] | undefined} */
    let contextualKeywordTokenNames;

    const configuredWord = effectiveOptions?.word;
    if (configuredWord) {
      const wordTok = parserTokens.find(
        (t) => t.name === configuredWord && t.expr !== ""
      );
      const wIdx = parserSymbols.indexOf(configuredWord);
      if (wordTok && wIdx !== -1) {
        wordTokenId = wIdx;
        wordTokenName = configuredWord;
        const explicitContextual = effectiveOptions?.contextualKeywords;
        if (Array.isArray(explicitContextual)) {
          const validNames = explicitContextual.filter(
            (name) =>
              name !== configuredWord && parserSymbols.indexOf(name) !== -1
          );
          contextualKeywordTokenNames = validNames;
          contextualKeywordTokenIds = validNames.map((name) =>
            parserSymbols.indexOf(name)
          );
        } else {
          const specialTokens = tokens.filter((t) => t.expr === "");
          const wordDfa = generateFromTokens([wordTok, ...specialTokens]);
          contextualKeywordTokenNames = [];
          contextualKeywordTokenIds = [];
          for (const tok of parserTokens) {
            if (
              tok.name === configuredWord ||
              tok.expr === "" ||
              skipTokenSet.has(tok.name)
            ) {
              continue;
            }
            const tokSymbolIdx = parserSymbols.indexOf(tok.name);
            if (
              tokSymbolIdx !== -1 &&
              isTokenLanguageSubset(tok, wordDfa, specialTokens)
            ) {
              contextualKeywordTokenNames.push(tok.name);
              contextualKeywordTokenIds.push(tokSymbolIdx);
            }
          }
        }
      }
    }

    /** @type {ParserData} */
    const parserData = {
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
    if (wordTokenId !== undefined) {
      parserData.wordTokenId = wordTokenId;
      parserData.wordTokenName = wordTokenName;
      parserData.contextualKeywordTokenIds = contextualKeywordTokenIds ?? [];
      parserData.contextualKeywordTokenNames =
        contextualKeywordTokenNames ?? [];
    }
    if (preserveExtras && extraTokenName) {
      const extraIdx = parserSymbols.indexOf(extraTokenName);
      if (extraIdx !== -1) {
        parserData.preserveExtras = true;
        parserData.extraTokenId = extraIdx;
        parserData.extraTokenName = extraTokenName;
      }
    }
    return parserData;
  } finally {
    const traceEnd = performance.now();
    log("exit generate (took %d ms)", traceEnd - traceStart);
  }
}

/**
 * @param {Token[]} tokens
 * @param {string} EOF
 * @param {Rule[]} rules
 * @param {ParseOptions=} options
 * @returns {DFA<ItemState, string>}
 */
function createDFA(tokens, EOF, rules, options) {
  const {
    states,
    transitions,
    start,
    finals,
  } = calculateStatesAndTransitionTable(tokens, EOF, rules, options);

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
 * @param {string[]} seq
 * @param {number} startIndex
 * @param {string} lookahead
 * @param {Map<string, Set<Token>>} firsts
 * @param {Set<string>} nullable
 * @param {Set<string>} rulesNames
 * @returns {string[]}
 */
function computeSequenceFirsts(
  seq,
  startIndex,
  lookahead,
  firsts,
  nullable,
  rulesNames
) {
  /** @type {Set<string>} */
  const result = new Set();
  let allNullable = true;

  for (let i = startIndex; i < seq.length; i++) {
    const sym = seq[i];
    if (rulesNames.has(sym)) {
      const symFirsts = firsts.get(sym);
      if (symFirsts) {
        for (const tok of symFirsts) {
          result.add(tok.name);
        }
      }
      if (!nullable.has(sym)) {
        allNullable = false;
        break;
      }
    } else {
      result.add(sym);
      allNullable = false;
      break;
    }
  }

  if (allNullable && lookahead && lookahead !== "dummy") {
    result.add(lookahead);
  }

  return Array.from(result);
}

/**
 * @param {Rule} rule
 * @param {Rule[]} rules
 * @param {Item[]} items
 * @param {Map<string, Set<Token>>} follows
 * @param {Map<string, Set<Token>>=} firsts
 * @param {Set<string>=} nullable
 * @returns {Set<Item>}
 */
export function firstItemSet(rule, rules, items, follows, firsts, nullable) {
  const effectiveNullable = nullable ?? calculateNullable(rules);
  const initialLookaheads = Array.from(follows.get(rule.name) ?? []);

  if (firsts && initialLookaheads.length > 0) {
    const itemSet = initialLookaheads.flatMap((token) =>
      createItemClosure(
        {
          name: rule.name,
          tokens: rule.symbols,
          marker: 0,
          lookahead: token.name,
          semanticAction: rule.actions.find((action) => action.at === 0)?.code,
        },
        rules,
        firsts,
        effectiveNullable
      )
    );
    return new Set(itemSet.map((item) => getItem(item, items)));
  }

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

/** @type {WeakMap<Rule[], { rulesNames: Set<string>, rulesByName: Map<string, Rule[]>, nonTermClosureCache: Map<string, Item[]> }>} */
const rulesMetaCache = new WeakMap();

/**
 * @param {Rule[]} rules
 */
function getRulesMeta(rules) {
  let meta = rulesMetaCache.get(rules);
  if (!meta) {
    const rulesNames = new Set(rules.map((rule) => rule.name));
    /** @type {Map<string, Rule[]>} */
    const rulesByName = new Map();
    for (const rule of rules) {
      let list = rulesByName.get(rule.name);
      if (!list) {
        list = [];
        rulesByName.set(rule.name, list);
      }
      list.push(rule);
    }
    meta = {
      rulesNames,
      rulesByName,
      nonTermClosureCache: new Map(),
    };
    rulesMetaCache.set(rules, meta);
  }
  return meta;
}

/**
 * @param {string} nonTerm
 * @param {string} lookahead
 * @param {Rule[]} rules
 * @param {Map<string, Set<Token>>} firsts
 * @param {Set<string>} effectiveNullable
 * @param {Item[]=} items
 * @returns {Item[]}
 */
function getNonTermLookaheadClosure(
  nonTerm,
  lookahead,
  rules,
  firsts,
  effectiveNullable,
  items
) {
  const { rulesNames, rulesByName, nonTermClosureCache } = getRulesMeta(rules);
  const cacheKey = `${nonTerm}\0${lookahead}`;
  let cached = nonTermClosureCache.get(cacheKey);
  if (cached) {
    return cached;
  }

  const startRules = rulesByName.get(nonTerm);
  if (!startRules || startRules.length === 0) {
    nonTermClosureCache.set(cacheKey, []);
    return [];
  }

  /** @type {Item[]} */
  const closure = [];
  /** @type {Set<string>} */
  const seenItems = new Set();
  /** @type {Set<string>} */
  const expandedNonTermLookahead = new Set([cacheKey]);
  /** @type {Item[]} */
  const open = [];

  for (const rule of startRules) {
    /** @type {Item} */
    const rawItem = {
      name: rule.name,
      tokens: rule.symbols,
      marker: 0,
      lookahead,
      semanticAction: rule.actions.find((action) => action.at === 0)?.code,
    };
    const item = items ? getItem(rawItem, items) : rawItem;
    const key = getItemKey(item);
    if (!seenItems.has(key)) {
      seenItems.add(key);
      open.push(item);
    }
  }

  while (open.length > 0) {
    const current = open.shift();
    if (!current) {
      continue;
    }
    closure.push(current);

    if (current.marker >= current.tokens.length) {
      continue;
    }

    const token = current.tokens[current.marker];
    const nextRules = rulesByName.get(token);
    if (!nextRules || nextRules.length === 0) {
      continue;
    }

    const lookaheads = computeSequenceFirsts(
      current.tokens,
      current.marker + 1,
      current.lookahead,
      firsts,
      effectiveNullable,
      rulesNames
    );

    for (const la of lookaheads) {
      const expKey = `${token}\0${la}`;
      if (expandedNonTermLookahead.has(expKey)) {
        continue;
      }
      expandedNonTermLookahead.add(expKey);

      for (const rule of nextRules) {
        /** @type {Item} */
        const rawNext = {
          name: rule.name,
          tokens: rule.symbols,
          marker: 0,
          lookahead: la,
          semanticAction: rule.actions.find((action) => action.at === 0)?.code,
        };
        const nextItem = items ? getItem(rawNext, items) : rawNext;
        const itemKey = getItemKey(nextItem);
        if (!seenItems.has(itemKey)) {
          seenItems.add(itemKey);
          open.push(nextItem);
        }
      }
    }
  }

  if (items) {
    nonTermClosureCache.set(cacheKey, closure);
  }
  return closure;
}

/**
 * @param {Set<Item>} itemSet
 * @param {Rule[]} rules
 * @param {Item[]} items
 * @param {Map<string, Set<Token>>} follows
 * @param {Map<string, Set<Token>>=} firsts
 * @param {Set<string>=} nullable
 * @returns {Map<String, Set<Item>>}
 */
export function nextItemSets(itemSet, rules, items, follows, firsts, nullable) {
  const effectiveNullable = nullable ?? calculateNullable(rules);
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

  if (firsts) {
    const { rulesNames, rulesByName } = getRulesMeta(rules);
    return new Map(
      Array.from(nextItemSets.entries()).map(([token, kernelItems]) => {
        /** @type {Set<Item>} */
        const resultSet = new Set();
        /** @type {Set<string>} */
        const expandedPairs = new Set();
        for (const item of kernelItems) {
          const shifted = getItem(
            {
              ...item,
              marker: Math.min(item.marker + 1, item.tokens.length),
            },
            items
          );
          resultSet.add(shifted);
          if (shifted.marker < shifted.tokens.length) {
            const nextSym = shifted.tokens[shifted.marker];
            if (rulesByName.has(nextSym)) {
              const lookaheads = computeSequenceFirsts(
                shifted.tokens,
                shifted.marker + 1,
                shifted.lookahead,
                firsts,
                effectiveNullable,
                rulesNames
              );
              for (const la of lookaheads) {
                const pairKey = `${nextSym}\0${la}`;
                if (!expandedPairs.has(pairKey)) {
                  expandedPairs.add(pairKey);
                  const subClosure = getNonTermLookaheadClosure(
                    nextSym,
                    la,
                    rules,
                    firsts,
                    effectiveNullable,
                    items
                  );
                  for (const subItem of subClosure) {
                    resultSet.add(subItem);
                  }
                }
              }
            }
          }
        }
        return [token, resultSet];
      })
    );
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
 * @param {Map<string, Set<Token>>=} firsts
 * @param {Set<string>=} nullable
 * @returns {Item[]}
 */
export function createItemClosure(item, rules, firsts, nullable) {
  if (!firsts || item.lookahead === "dummy") {
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

  const effectiveNullable = nullable ?? calculateNullable(rules);
  const { rulesNames, rulesByName } = getRulesMeta(rules);
  if (item.marker >= item.tokens.length) {
    return [item];
  }
  const nextSym = item.tokens[item.marker];
  if (!rulesByName.has(nextSym)) {
    return [item];
  }
  const lookaheads = computeSequenceFirsts(
    item.tokens,
    item.marker + 1,
    item.lookahead,
    firsts,
    effectiveNullable,
    rulesNames
  );
  /** @type {Item[]} */
  const closure = [item];
  /** @type {Set<string>} */
  const seenKeys = new Set([getItemKey(item)]);
  for (const la of lookaheads) {
    const sub = getNonTermLookaheadClosure(
      nextSym,
      la,
      rules,
      firsts,
      effectiveNullable
    );
    for (const subItem of sub) {
      const k = getItemKey(subItem);
      if (!seenKeys.has(k)) {
        seenKeys.add(k);
        closure.push(subItem);
      }
    }
  }
  return closure;
}

/**
 * @param {Rule[]} rules
 * @returns {Set<string>}
 */
export function calculateNullable(rules) {
  /** @type {Set<string>} */
  const nullable = new Set();
  let changed = true;
  while (changed) {
    changed = false;
    for (const rule of rules) {
      if (nullable.has(rule.name)) {
        continue;
      }
      if (
        rule.symbols.length === 0 ||
        rule.symbols.every((sym) => nullable.has(sym))
      ) {
        nullable.add(rule.name);
        changed = true;
      }
    }
  }
  return nullable;
}

/**
 * @param {Token[]} tokens
 * @param {Rule[]} rules
 * @param {Set<string>=} nullable
 * @returns {Map<string, Set<Token>>}
 */
export function calculateFirsts(
  tokens,
  rules,
  nullable = calculateNullable(rules)
) {
  const rulesNames = new Set(rules.map((rule) => rule.name));
  const tokenCache = new Map(tokens.map((token) => [token.name, token]));

  /** @type {Map<string, Set<Token>>} */
  const computed = new Map();
  for (const ruleName of rulesNames) {
    computed.set(ruleName, new Set());
  }

  let changed = true;
  while (changed) {
    changed = false;
    for (const rule of rules) {
      const firstSet = /** @type {Set<Token>} */ (computed.get(rule.name));
      for (let i = 0; i < rule.symbols.length; i++) {
        const symbol = rule.symbols[i];
        if (rulesNames.has(symbol)) {
          const symFirsts = computed.get(symbol);
          if (symFirsts) {
            for (const tok of symFirsts) {
              if (!firstSet.has(tok)) {
                firstSet.add(tok);
                changed = true;
              }
            }
          }
          if (!nullable.has(symbol)) {
            break;
          }
        } else {
          const token = tokenCache.get(symbol);
          if (!token) {
            throw new Error(`Grammar is invalid: ${symbol}`);
          }
          if (!firstSet.has(token)) {
            firstSet.add(token);
            changed = true;
          }
          break;
        }
      }
    }
  }

  for (const ruleName of rulesNames) {
    const firstSet = computed.get(ruleName);
    if ((!firstSet || firstSet.size === 0) && !nullable.has(ruleName)) {
      throw new Error(`Grammar is invalid: ${ruleName}`);
    }
  }

  return computed;
}

/**
 * @param {Map<string, Set<Token>>} firsts
 * @param {Token[]} tokens
 * @param {string} EOF
 * @param {Rule[]} rules
 * @param {Set<string>=} nullable
 * @returns {Map<string, Set<Token>>}
 */
export function calculateFollows(
  firsts,
  tokens,
  EOF,
  rules,
  nullable = calculateNullable(rules)
) {
  const rulesNames = new Set(rules.map((rule) => rule.name));
  const tokenCache = new Map(tokens.map((token) => [token.name, token]));

  /** @type {Map<string, Set<Token>>} */
  const computed = new Map();

  if (rules.length === 0) {
    return computed;
  }

  const eofToken = tokens.find((token) => token.name === EOF);
  if (!eofToken) {
    throw new Error(`Unable to find ${EOF} token`);
  }

  for (const ruleName of rulesNames) {
    if (
      ruleName === rules[0].name ||
      rules.some((rule) => rule.symbols.includes(ruleName))
    ) {
      computed.set(ruleName, new Set());
    }
  }
  computed.get(rules[0].name)?.add(eofToken);

  let changed = true;
  while (changed) {
    changed = false;
    for (const rule of rules) {
      for (let current = 0; current < rule.symbols.length; current++) {
        const target = rule.symbols[current];
        if (!rulesNames.has(target)) {
          continue;
        }
        let follows = computed.get(target);
        if (!follows) {
          follows = new Set();
          computed.set(target, follows);
        }

        let tailNullable = true;
        for (let next = current + 1; next < rule.symbols.length; next++) {
          const symbol = rule.symbols[next];
          if (rulesNames.has(symbol)) {
            const symFirsts = firsts.get(symbol);
            if (symFirsts) {
              for (const tok of symFirsts) {
                if (!follows.has(tok)) {
                  follows.add(tok);
                  changed = true;
                }
              }
            }
            if (!nullable.has(symbol)) {
              tailNullable = false;
              break;
            }
          } else {
            const token = tokenCache.get(symbol);
            if (!token) {
              throw new Error(`Illegal state: No token for '${symbol}'`);
            }
            if (!follows.has(token)) {
              follows.add(token);
              changed = true;
            }
            tailNullable = false;
            break;
          }
        }

        if (tailNullable) {
          const lhsFollows = computed.get(rule.name);
          if (lhsFollows) {
            for (const tok of lhsFollows) {
              if (!follows.has(tok)) {
                follows.add(tok);
                changed = true;
              }
            }
          }
        }
      }
    }
  }

  return computed;
}

/**
 * @param {Item} item
 * @returns {string}
 */
function getCoreItemKey(item) {
  let k = /** @type {*} */ (item)._coreKey;
  if (k === undefined) {
    k = `${item.name}\0${item.marker}\0${
      item.semanticAction ?? ""
    }\0${item.tokens.join("\0")}`;
    /** @type {*} */ (item)._coreKey = k;
  }
  return k;
}

/**
 * @param {ItemState} state
 * @returns {string}
 */
function getCoreSignature(state) {
  /** @type {Set<string>} */
  const coreKeys = new Set();
  for (const item of state) {
    if (item.marker > 0 || item.name === "S") {
      coreKeys.add(getCoreItemKey(item));
    }
  }
  if (coreKeys.size === 0) {
    for (const item of state) {
      coreKeys.add(getCoreItemKey(item));
    }
  }
  return Array.from(coreKeys).sort().join("\n");
}

/**
 * @param {Item} item
 * @returns {string}
 */
function getCompletedRuleKey(item) {
  let k = /** @type {*} */ (item)._ruleKey;
  if (k === undefined) {
    k = `${item.name}\0${item.semanticAction ?? ""}\0${item.tokens.join("\0")}`;
    /** @type {*} */ (item)._ruleKey = k;
  }
  return k;
}

/**
 * @typedef {Object} PrecedenceContext
 * @property {Set<string>} ruleNamesSet
 * @property {Map<string, ResolvedPrecedence>} symbolPrecedence
 * @property {Map<string, { order: number, precedence: ResolvedPrecedence | undefined }>} ruleMetaByKey
 * @property {boolean} hasExplicitRulePrecedence
 * @property {boolean} hasAnyPrecedence
 * @property {(item: Item) => { order: number, precedence: ResolvedPrecedence | undefined } | undefined} getItemMeta
 * @property {(matchingEnds: Item[]) => Item} pickWinningEnd
 * @property {(state: ItemState, symbol: string, winningEnd: Item) => 'shift' | 'reduce' | 'error'} resolveShiftReduce
 */

/**
 * @param {Rule[]} rules
 * @param {Token[]} tokens
 * @param {ParseOptions=} options
 * @param {Set<string>=} precomputedNullable
 * @param {Map<string, Set<Token>>=} precomputedFirsts
 * @returns {PrecedenceContext}
 */
function buildPrecedenceContext(
  rules,
  tokens,
  options,
  precomputedNullable,
  precomputedFirsts
) {
  const ruleNamesSet = new Set(rules.map((r) => r.name));
  /** @type {Map<string, ResolvedPrecedence>} */
  const symbolPrecedence = new Map();

  for (const token of tokens) {
    if (token.precedence !== undefined) {
      symbolPrecedence.set(token.name, {
        level: token.precedence,
        assoc: token.assoc ?? "left",
      });
    }
  }

  if (options?.precedence) {
    if (Array.isArray(options.precedence)) {
      options.precedence.forEach((entry, idx) => {
        const assoc = entry.assoc ?? "left";
        const level = idx + 1;
        const tokList = entry.symbols ?? entry.tokens ?? [];
        for (const tokName of tokList) {
          symbolPrecedence.set(tokName, { level, assoc });
        }
      });
    } else if (typeof options.precedence === "object") {
      for (const [tokName, spec] of Object.entries(options.precedence)) {
        symbolPrecedence.set(tokName, {
          level: spec.level ?? spec.precedence ?? 0,
          assoc: spec.assoc ?? "left",
        });
      }
    }
  }

  let hasExplicitRulePrecedence = false;
  /** @type {Map<string, { order: number, precedence: ResolvedPrecedence | undefined }>} */
  const ruleMetaByKey = new Map();
  rules.forEach((rule, idx) => {
    const endAction = rule.actions.find(
      (a) => a.at === rule.symbols.length
    )?.code;
    const key = `${rule.name}\0${endAction ?? ""}\0${rule.symbols.join("\0")}`;
    if (ruleMetaByKey.has(key)) {
      return;
    }
    /** @type {ResolvedPrecedence | undefined} */
    let prec;
    if (rule.precedence !== undefined) {
      hasExplicitRulePrecedence = true;
      if (typeof rule.precedence === "object" && rule.precedence !== null) {
        prec = {
          level: rule.precedence.level,
          assoc: rule.precedence.assoc ?? rule.assoc ?? "left",
        };
      } else {
        prec = {
          level: rule.precedence,
          assoc: rule.assoc ?? "left",
        };
      }
    } else {
      for (let i = rule.symbols.length - 1; i >= 0; i--) {
        const sym = rule.symbols[i];
        if (!ruleNamesSet.has(sym)) {
          const symPrec = symbolPrecedence.get(sym);
          if (symPrec) {
            prec = symPrec;
          }
          break;
        }
      }
    }
    ruleMetaByKey.set(key, { order: idx, precedence: prec });
  });

  const nullable = hasExplicitRulePrecedence
    ? precomputedNullable ?? calculateNullable(rules)
    : undefined;
  const firsts =
    hasExplicitRulePrecedence && nullable
      ? precomputedFirsts ?? calculateFirsts(tokens, rules, nullable)
      : undefined;

  /**
   * @param {Item} item
   */
  const getItemMeta = (item) => {
    const key = getCompletedRuleKey(item);
    return ruleMetaByKey.get(key);
  };

  /**
   * @param {Item[]} matchingEnds
   * @returns {Item}
   */
  const pickWinningEnd = (matchingEnds) => {
    let winningEnd = matchingEnds[0];
    for (let i = 1; i < matchingEnds.length; i++) {
      const candidate = matchingEnds[i];
      const winMeta = getItemMeta(winningEnd);
      const candMeta = getItemMeta(candidate);
      const winPrec = winMeta?.precedence?.level;
      const candPrec = candMeta?.precedence?.level;

      if (
        (winPrec !== undefined || candPrec !== undefined) &&
        (winPrec ?? 0) !== (candPrec ?? 0)
      ) {
        if ((candPrec ?? 0) > (winPrec ?? 0)) {
          winningEnd = candidate;
        }
      } else if (
        (candMeta?.order ?? Number.MAX_SAFE_INTEGER) <
        (winMeta?.order ?? Number.MAX_SAFE_INTEGER)
      ) {
        winningEnd = candidate;
      }
    }
    return winningEnd;
  };

  /** @type {Map<string, ResolvedPrecedence | null>} */
  const shiftPrecCache = new Map();

  /**
   * @param {ItemState} currentState
   * @param {string} symbol
   * @param {Item} winningEnd
   * @returns {'shift' | 'reduce' | 'error'}
   */
  const resolveShiftReduce = (currentState, symbol, winningEnd) => {
    let shiftPrec = symbolPrecedence.get(symbol);
    if (shiftPrec === undefined && hasExplicitRulePrecedence) {
      const cacheKey = `${getCoreSignature(currentState)}\0${symbol}`;
      if (shiftPrecCache.has(cacheKey)) {
        shiftPrec = shiftPrecCache.get(cacheKey) ?? undefined;
      } else {
        /** @type {Set<string>} */
        const seenCore = new Set();
        for (const item of currentState.values()) {
          if (
            item.marker < item.tokens.length &&
            item.tokens[item.marker] === symbol
          ) {
            const ck = getCoreItemKey(item);
            if (seenCore.has(ck)) {
              continue;
            }
            seenCore.add(ck);
            const itemPrec = getItemMeta(item)?.precedence;
            if (
              itemPrec !== undefined &&
              (shiftPrec === undefined || itemPrec.level > shiftPrec.level)
            ) {
              shiftPrec = itemPrec;
            }
          }
        }
        if (shiftPrec === undefined && firsts && nullable) {
          seenCore.clear();
          for (const item of currentState.values()) {
            if (item.marker > 0 && item.marker < item.tokens.length) {
              const ck = getCoreItemKey(item);
              if (seenCore.has(ck)) {
                continue;
              }
              seenCore.add(ck);
              const itemPrec = getItemMeta(item)?.precedence;
              if (itemPrec !== undefined) {
                const seqFirsts = computeSequenceFirsts(
                  item.tokens,
                  item.marker,
                  "",
                  firsts,
                  nullable,
                  ruleNamesSet
                );
                if (
                  seqFirsts.includes(symbol) &&
                  (shiftPrec === undefined || itemPrec.level > shiftPrec.level)
                ) {
                  shiftPrec = itemPrec;
                }
              }
            }
          }
        }
        shiftPrecCache.set(cacheKey, shiftPrec ?? null);
      }
    }
    const reducePrec = getItemMeta(winningEnd)?.precedence;
    const effShiftPrec =
      shiftPrec ??
      (hasExplicitRulePrecedence && reducePrec !== undefined
        ? { level: 0, assoc: /** @type {Associativity} */ ("none") }
        : undefined);
    const effReducePrec =
      reducePrec ??
      (hasExplicitRulePrecedence && shiftPrec !== undefined
        ? { level: 0, assoc: /** @type {Associativity} */ ("none") }
        : undefined);

    /** @type {'shift' | 'reduce' | 'error'} */
    let resolution = "shift";
    if (effShiftPrec !== undefined && effReducePrec !== undefined) {
      if (effReducePrec.level > effShiftPrec.level) {
        resolution = "reduce";
      } else if (effShiftPrec.level > effReducePrec.level) {
        resolution = "shift";
      } else {
        const assoc =
          effShiftPrec.assoc !== "none"
            ? effShiftPrec.assoc
            : effReducePrec.assoc;
        if (assoc === "left") {
          resolution = "reduce";
        } else if (assoc === "right") {
          resolution = "shift";
        } else if (
          assoc === "nonassoc" ||
          (!hasExplicitRulePrecedence && assoc === "none")
        ) {
          resolution = "error";
        }
      }
    }
    return resolution;
  };

  const hasAnyPrecedence =
    symbolPrecedence.size > 0 || hasExplicitRulePrecedence;

  return {
    ruleNamesSet,
    symbolPrecedence,
    ruleMetaByKey,
    hasExplicitRulePrecedence,
    hasAnyPrecedence,
    getItemMeta,
    pickWinningEnd,
    resolveShiftReduce,
  };
}

/**
 * @param {ItemState[]} group
 * @param {PrecedenceContext=} precContext
 * @returns {boolean}
 */
function canMergeCoreGroup(group, precContext) {
  /** @type {Set<string>} */
  const existingConflicts = new Set();
  /** @type {Map<string, Set<string>>} */
  const unionByLa = new Map();
  /** @type {Map<string, Item[]>[]} */
  const stateEndsByLa = [];

  for (const state of group) {
    /** @type {Map<string, string[]>} */
    const byLa = new Map();
    /** @type {Map<string, Item[]>} */
    const endsMap = new Map();
    stateEndsByLa.push(endsMap);
    for (const item of state) {
      if (item.marker >= item.tokens.length) {
        const key = getCompletedRuleKey(item);
        let list = byLa.get(item.lookahead);
        if (!list) {
          list = [];
          byLa.set(item.lookahead, list);
        }
        if (!list.includes(key)) {
          list.push(key);
        }
        let endItems = endsMap.get(item.lookahead);
        if (!endItems) {
          endItems = [];
          endsMap.set(item.lookahead, endItems);
        }
        endItems.push(item);
        let set = unionByLa.get(item.lookahead);
        if (!set) {
          set = new Set();
          unionByLa.set(item.lookahead, set);
        }
        set.add(key);
      }
    }
    for (const [la, keys] of byLa.entries()) {
      if (keys.length > 1) {
        keys.sort();
        for (let i = 0; i < keys.length; i++) {
          for (let j = i + 1; j < keys.length; j++) {
            existingConflicts.add(`${la}\0${keys[i]}\0${keys[j]}`);
          }
        }
      }
    }
  }

    if (unionByLa.size === 0) {
      return true;
    }

  for (const [la, keySet] of unionByLa.entries()) {
    if (keySet.size > 1) {
      const keys = Array.from(keySet).sort();
      for (let i = 0; i < keys.length; i++) {
        for (let j = i + 1; j < keys.length; j++) {
          if (!existingConflicts.has(`${la}\0${keys[i]}\0${keys[j]}`)) {
            return false;
          }
        }
      }
      if (precContext) {
        /** @type {string | undefined} */
        let expectedWinningKey;
        for (let sIdx = 0; sIdx < group.length; sIdx++) {
          const matchingEnds = stateEndsByLa[sIdx].get(la);
          if (matchingEnds && matchingEnds.length > 0) {
            const winKey = getCompletedRuleKey(
              precContext.pickWinningEnd(matchingEnds)
            );
            if (expectedWinningKey === undefined) {
              expectedWinningKey = winKey;
            } else if (expectedWinningKey !== winKey) {
              return false;
            }
          }
        }
      }
    }
  }

  // Denny & Malloy (2010) IELR(1) exactness check for Shift/Reduce conflict resolution:
  // If any state in the core group has a completed item on a shiftable terminal `symbol`
  // whose S/R conflict resolves to `reduce` or `error` (e.g. via %left, %nonassoc, or rule precedence),
  // every state in `group` must resolve `symbol` to that exact same action.
  if (precContext && precContext.hasAnyPrecedence && group.length > 1) {
    /** @type {Set<string>} */
    const shiftTerminals = new Set();
    for (const item of group[0]) {
      if (item.marker < item.tokens.length) {
        const sym = item.tokens[item.marker];
        if (!precContext.ruleNamesSet.has(sym)) {
          shiftTerminals.add(sym);
        }
      }
    }

    for (const symbol of shiftTerminals) {
      if (!unionByLa.has(symbol)) {
        continue;
      }
      /** @type {string | undefined} */
      let expectedResolution;
      for (let sIdx = 0; sIdx < group.length; sIdx++) {
        const matchingEnds = stateEndsByLa[sIdx].get(symbol);
        let stateResolution = "shift";
        if (matchingEnds && matchingEnds.length > 0) {
          const winningEnd = precContext.pickWinningEnd(matchingEnds);
          const sr = precContext.resolveShiftReduce(
            group[0],
            symbol,
            winningEnd
          );
          stateResolution =
            sr === "reduce"
              ? `reduce:${getCompletedRuleKey(winningEnd)}`
              : sr;
        }
        if (expectedResolution === undefined) {
          expectedResolution = stateResolution;
        } else if (expectedResolution !== stateResolution) {
          return false;
        }
      }
    }
  }

  return true;
}

/**
 * @param {Token[]} tokens
 * @param {string} EOF
 * @param {Rule[]} rules
 * @param {ParseOptions=} options
 * @returns {{states: ItemState[], transitions: Map<ItemState, Map<string, ItemState>>, start: ItemState, finals: ItemState[]}}
 */
function calculateStatesAndTransitionTable(tokens, EOF, rules, options) {
  /** @type {Map<ItemState, Map<string, ItemState>>} */
  const transitions = new Map();

  const items = createItems(tokens, EOF, rules);

  log("createItems done (%d items)", items.length);
  const nullable = calculateNullable(rules);
  const firsts = calculateFirsts(tokens, rules, nullable);
  const follows = calculateFollows(firsts, tokens, EOF, rules, nullable);
  log("nullable/firsts/follows done");
  const precContext = buildPrecedenceContext(
    rules,
    tokens,
    options,
    nullable,
    firsts
  );

  /** @type {ItemState[]} */
  const itemSets = [];

  const initialSet = firstItemSet(
    rules[0],
    rules,
    items,
    follows,
    firsts,
    nullable
  );
  /** @type {ItemState[]} */
  const newItemSets = [initialSet];
  /** @type {Set<ItemState>} */
  const queuedSet = new Set([initialSet]);
  /** @type {Set<ItemState>} */
  const recordedSet = new Set([initialSet]);
  itemSets.push(initialSet);
  /** @type {Map<number, ItemState[]>} */
  const knownStatesBySize = new Map([[initialSet.size, [initialSet]]]);
  const useOnTheFlyCoreMerge = rules.length > 64;
  /** @type {Map<string, ItemState[]>} */
  const knownStatesByCore = new Map();
  if (useOnTheFlyCoreMerge) {
    knownStatesByCore.set(getCoreSignature(initialSet), [initialSet]);
  }

  while (newItemSets.length > 0) {
    const fromItemSet = newItemSets.shift();
    if (!fromItemSet) {
      continue;
    }
    queuedSet.delete(fromItemSet);
    if (!recordedSet.has(fromItemSet)) {
      recordedSet.add(fromItemSet);
      itemSets.push(fromItemSet);
    }

    const nextStates = nextItemSets(
      fromItemSet,
      rules,
      items,
      follows,
      firsts,
      nullable
    );

    for (const [token, toItemSet] of nextStates.entries()) {
      let stateTransitions = transitions.get(fromItemSet);
      if (!stateTransitions) {
        stateTransitions = new Map();
        transitions.set(fromItemSet, stateTransitions);
      }

      if (useOnTheFlyCoreMerge) {
        const existingTarget = stateTransitions.get(token);
        if (existingTarget) {
          let allPresent = true;
          for (const it of toItemSet) {
            if (!existingTarget.has(it)) {
              allPresent = false;
              break;
            }
          }
          if (allPresent) {
            continue;
          }
          if (canMergeCoreGroup([existingTarget, toItemSet], precContext)) {
            for (const it of toItemSet) {
              existingTarget.add(it);
            }
            if (!queuedSet.has(existingTarget)) {
              queuedSet.add(existingTarget);
              newItemSets.push(existingTarget);
            }
            continue;
          }
        }

        const coreSig = getCoreSignature(toItemSet);
        let coreBucket = knownStatesByCore.get(coreSig);
        /** @type {ItemState | undefined} */
        let mergedTarget;
        if (coreBucket) {
          for (const candidate of coreBucket) {
            let isSubset = true;
            for (const it of toItemSet) {
              if (!candidate.has(it)) {
                isSubset = false;
                break;
              }
            }
            if (isSubset) {
              mergedTarget = candidate;
              break;
            }
            if (canMergeCoreGroup([candidate, toItemSet], precContext)) {
              for (const it of toItemSet) {
                candidate.add(it);
              }
              mergedTarget = candidate;
              if (!queuedSet.has(candidate)) {
                queuedSet.add(candidate);
                newItemSets.push(candidate);
              }
              break;
            }
          }
        }
        if (mergedTarget) {
          stateTransitions.set(token, mergedTarget);
        } else {
          stateTransitions.set(token, toItemSet);
          if (!coreBucket) {
            coreBucket = [];
            knownStatesByCore.set(coreSig, coreBucket);
          }
          coreBucket.push(toItemSet);
          recordedSet.add(toItemSet);
          itemSets.push(toItemSet);
          queuedSet.add(toItemSet);
          newItemSets.push(toItemSet);
        }
        continue;
      }

      const sameSizeBucket = knownStatesBySize.get(toItemSet.size);
      const existing = sameSizeBucket?.find((exiting) => {
        for (const item of toItemSet) {
          if (!exiting.has(item)) {
            return false;
          }
        }
        return true;
      });
      stateTransitions.set(token, existing ?? toItemSet);
      if (!existing) {
        newItemSets.push(toItemSet);
        if (sameSizeBucket) {
          sameSizeBucket.push(toItemSet);
        } else {
          knownStatesBySize.set(toItemSet.size, [toItemSet]);
        }
      }
    }
  }

  /** @type {Map<string, ItemState[]>} */
  const coreGroups = new Map();
  for (const state of itemSets) {
    const sig = getCoreSignature(state);
    let group = coreGroups.get(sig);
    if (!group) {
      group = [];
      coreGroups.set(sig, group);
    }
    group.push(state);
  }

  /** @type {ItemState[][]} */
  let mergeableGroups = [];
  for (const group of coreGroups.values()) {
    if (group.length > 1) {
      if (canMergeCoreGroup(group, precContext)) {
        mergeableGroups.push(group);
      } else if (group.length > 2) {
        /** @type {ItemState[][]} */
        const subgroups = [];
        for (const st of group) {
          let placed = false;
          for (const sub of subgroups) {
            if (canMergeCoreGroup([...sub, st], precContext)) {
              sub.push(st);
              placed = true;
              break;
            }
          }
          if (!placed) {
            subgroups.push([st]);
          }
        }
        for (const sub of subgroups) {
          if (sub.length > 1) {
            mergeableGroups.push(sub);
          }
        }
      }
    }
  }

  let groupChanged = true;
  while (groupChanged && mergeableGroups.length > 0) {
    groupChanged = false;
    /** @type {Map<ItemState, ItemState>} */
    const tentativeTarget = new Map();
    for (const group of mergeableGroups) {
      const canonical = group[0];
      for (const st of group) {
        tentativeTarget.set(st, canonical);
      }
    }

    /** @type {ItemState[][]} */
    const nextMergeable = [];
    for (const group of mergeableGroups) {
      const baseTr = transitions.get(group[0]);
      if (!baseTr) {
        nextMergeable.push(group);
        continue;
      }
      /** @type {ItemState[][]} */
      const buckets = [[group[0]]];
      for (let i = 1; i < group.length; i++) {
        const st = group[i];
        const stTr = transitions.get(st);
        let matchedBucket = false;
        for (const bucket of buckets) {
          const refTr = transitions.get(bucket[0]);
          let same = true;
          if (refTr) {
            for (const [sym, refTo] of refTr.entries()) {
              const otherTo = stTr?.get(sym);
              const mappedRef = tentativeTarget.get(refTo) ?? refTo;
              const mappedOther = otherTo
                ? tentativeTarget.get(otherTo) ?? otherTo
                : undefined;
              if (mappedRef !== mappedOther) {
                same = false;
                break;
              }
            }
          }
          if (same) {
            bucket.push(st);
            matchedBucket = true;
            break;
          }
        }
        if (!matchedBucket) {
          buckets.push([st]);
        }
      }
      if (buckets.length === 1) {
        nextMergeable.push(group);
      } else {
        groupChanged = true;
        for (const bucket of buckets) {
          if (bucket.length > 1) {
            nextMergeable.push(bucket);
          }
        }
      }
    }
    mergeableGroups = nextMergeable;
  }

  if (mergeableGroups.length > 0) {
    /** @type {Map<ItemState, ItemState>} */
    const replacement = new Map();
    /** @type {Set<ItemState>} */
    const removed = new Set();

    for (const group of mergeableGroups) {
      const canonical = group[0];
      for (let i = 1; i < group.length; i++) {
        const dup = group[i];
        for (const item of dup) {
          canonical.add(item);
        }
        replacement.set(dup, canonical);
        removed.add(dup);
        transitions.delete(dup);
      }
    }

    for (let i = itemSets.length - 1; i >= 0; i--) {
      if (removed.has(itemSets[i])) {
        itemSets.splice(i, 1);
      }
    }

    for (const [, trMap] of transitions.entries()) {
      for (const [sym, target] of trMap.entries()) {
        const mapped = replacement.get(target);
        if (mapped) {
          trMap.set(sym, mapped);
        }
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
 * @typedef {'left' | 'right' | 'nonassoc' | 'none'} Associativity
 */

/**
 * @typedef {Object} ResolvedPrecedence
 * @property {number} level
 * @property {Associativity} assoc
 */

/**
 * @param {DFA<ItemState, string>} dfa
 * @param {string} EOF
 * @param {Rule[]=} rules
 * @param {Token[]=} tokens
 * @param {ParseOptions=} options
 * @returns {Map<ItemState, Map<string, Actions>>}
 */
function createActionTable(dfa, EOF, rules = [], tokens = [], options) {
  /** @type {Map<ItemState, Map<string, Actions>>} */
  const actions = new Map();

  const precContext = buildPrecedenceContext(rules, tokens, options);

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
      const matchingEnds = ends.filter((end) => end.lookahead === symbol);
      if (matchingEnds.length === 0) {
        return;
      }

      const winningEnd = precContext.pickWinningEnd(matchingEnds);

      if (matchingEnds.length > 1) {
        for (const end of matchingEnds) {
          if (end !== winningEnd) {
            currentState.delete(end);
          }
        }
      }

      const existingShift = stateActions?.get(symbol);
      if (existingShift && existingShift.op === "shift") {
        const resolution = precContext.resolveShiftReduce(
          currentState,
          symbol,
          winningEnd
        );

        if (resolution === "reduce") {
          stateActions?.set(symbol, {
            op: "reduce",
            state: undefined,
            symbol: winningEnd.name,
          });
        } else if (resolution === "error") {
          stateActions?.delete(symbol);
        }
        return;
      }

      if (!stateActions) {
        stateActions = new Map();
        actions.set(currentState, stateActions);
      }
      stateActions.set(symbol, {
        op: "reduce",
        state: undefined,
        symbol: winningEnd.name,
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
