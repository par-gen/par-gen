import {
  parse as parseGrammar,
  SymbolNames,
  SymbolIds,
} from "../generated/parser.js";
import { optionals } from "./optionals.js";

export const EOF = "@par-gen.EOF";
export const ERROR = "@par-gen.ERROR";

/**
 * @typedef {'left' | 'right' | 'nonassoc' | 'none'} Associativity
 */

/**
 * @typedef {Object} PrecedenceRule
 * @property {Associativity=} assoc
 * @property {string[]=} tokens
 * @property {string[]=} symbols
 */

/**
 * @typedef {Object} PrecedenceSpec
 * @property {number=} level
 * @property {number=} precedence
 * @property {Associativity=} assoc
 */

/**
 * @typedef {Object} Token
 * @property {number} uid
 * @property {string} name
 * @property {string} expr
 * @property {string[]} state
 * @property {boolean=} skip
 * @property {number=} precedence
 * @property {Associativity=} assoc
 */

/**
 * @typedef {Object} RuleAction
 * @property {number} at
 * @property {string} code
 */

/**
 * @typedef {Object} Rule
 * @property {number} uid
 * @property {string} name
 * @property {string[]} symbols
 * @property {RuleAction[]} actions
 * @property {(number | { level: number, assoc?: Associativity })=} precedence
 * @property {Associativity=} assoc
 */

/**
 * @typedef {Object} ParseOptions
 * @property {string[]=} skipTokens
 * @property {(PrecedenceRule[] | {[tokenName: string]: PrecedenceSpec})=} precedence
 * @property {string=} word
 * @property {string[]=} contextualKeywords
 */

/** @type {Readonly<Record<string, number>>} */
const GRAMMAR_SYMBOL_IDS =
  SymbolIds ??
  Object.freeze(
    Object.fromEntries(SymbolNames.map((name, id) => [name, id]))
  );

/**
 * @param {string} name
 * @returns {number}
 */
function getGrammarSymbolId(name) {
  const id = GRAMMAR_SYMBOL_IDS[name] ?? SymbolNames.indexOf(name);
  if (id === undefined || id === -1) {
    throw new Error(
      `Expected grammar symbol '${name}' not found in SymbolNames`
    );
  }
  return id;
}

const EXPECTED_GRAMMAR_SYMBOLS = [
  "WS",
  "ASSIGN",
  "SEMICOLON",
  "PIPE",
  "AT",
  "EXPR",
  "ACTION",
  "IDENTIFIER",
  "Grammar",
  "Statements",
  "Statement",
  "Assignment",
  "Expr",
  "Semi",
  "Pipe",
  "StateClause",
  "StateList",
  "StateItem",
  "Alternatives",
  "Alternative",
  "RuleItem",
];
for (const symName of EXPECTED_GRAMMAR_SYMBOLS) {
  getGrammarSymbolId(symName);
}

const SYM_ACTION = getGrammarSymbolId("ACTION");
const SYM_IDENTIFIER = getGrammarSymbolId("IDENTIFIER");
const SYM_EXPR_RULE = getGrammarSymbolId("Expr");

const SYMBOL_ID_MASK = 0xff;
const CHILD_COUNT_SHIFT = 8;
const PTR_MASK = 0xfffff;
const LEAF_END_MASK = 0x3fffff;
const LEAF_LEN_SHIFT = 22;
const DELTA_START_MASK = 0x3ff;

const sharedBuf = Buffer.allocUnsafe(65536);
const stmtScratch = new Uint32Array(2048);
const ruleStmtScratch = new Uint32Array(2048);
const altScratch = new Uint32Array(512);
const itemScratch = new Uint32Array(256);

/**
 * @param {Uint32Array} tree
 * @param {number} p
 * @returns {number}
 */
function nodeId(tree, p) {
  return tree[p] & SYMBOL_ID_MASK;
}

/**
 * @param {Uint32Array} tree
 * @param {number} p
 * @returns {number}
 */
function childCount(tree, p) {
  return tree[p] >>> CHILD_COUNT_SHIFT;
}

/**
 * @param {Uint32Array} tree
 * @param {number} c
 * @returns {number}
 */
function prevSibling(tree, c) {
  return (tree[c] >>> CHILD_COUNT_SHIFT) === 0
    ? c - 2
    : tree[c + 1] & PTR_MASK;
}

/**
 * @param {Uint32Array} tree
 * @param {number} p
 * @returns {number}
 */
function firstLeafPtr(tree, p) {
  return (tree[p] >>> CHILD_COUNT_SHIFT) === 0
    ? p
    : (tree[p + 1] & PTR_MASK) + 2;
}

/**
 * @param {Uint32Array} tree
 * @param {number} p
 * @returns {number}
 */
function getLeafStart(tree, p) {
  let q = p - 2;
  while (q >= 2 && (tree[q] >>> CHILD_COUNT_SHIFT) > 0) {
    q -= 2;
  }
  const prevEnd = q >= 2 ? tree[q + 1] & LEAF_END_MASK : 0;
  const span = tree[p + 1];
  const end = span & LEAF_END_MASK;
  return (
    prevEnd +
    (((end - prevEnd) - (span >>> LEAF_LEN_SHIFT)) & DELTA_START_MASK)
  );
}

/**
 * @param {Uint32Array} tree
 * @param {number} p
 * @returns {number}
 */
function getLeafEnd(tree, p) {
  return tree[p + 1] & LEAF_END_MASK;
}

/**
 * @param {Uint32Array} tree
 * @param {number} sl
 * @param {Buffer} stream
 * @param {string} grammar
 * @param {boolean} isAscii
 * @returns {string[]}
 */
function extractStateList(tree, sl, stream, grammar, isAscii) {
  /** @type {string[]} */
  const list = [];
  while (childCount(tree, sl) === 2) {
    const stateItem = sl - 2;
    const stLeaf = firstLeafPtr(tree, stateItem);
    let stEnd = getLeafEnd(tree, stLeaf);
    const stStart = getLeafStart(tree, stLeaf);
    if (stream[stEnd - 1] === 44) {
      stEnd--;
    }
    list.push(
      isAscii
        ? grammar.slice(stStart, stEnd)
        : stream.toString("utf-8", stStart, stEnd)
    );
    sl = prevSibling(tree, stateItem);
  }
  const firstStateItem = sl - 2;
  const stLeaf = firstLeafPtr(tree, firstStateItem);
  let stEnd = getLeafEnd(tree, stLeaf);
  const stStart = getLeafStart(tree, stLeaf);
  if (stream[stEnd - 1] === 44) {
    stEnd--;
  }
  list.push(
    isAscii
      ? grammar.slice(stStart, stEnd)
      : stream.toString("utf-8", stStart, stEnd)
  );
  list.reverse();
  return list;
}

/**
 * @param {string} grammar
 * @param {ParseOptions=} options
 * @returns {{tokens: Token[], rules: Rule[], precedence?: {assoc: 'left' | 'right' | 'nonassoc', symbols: string[]}[], word?: string}}
 */
export function parse(grammar, options) {
  let uid = 0;

  /** @type {Buffer} */
  let stream;
  if (grammar.length <= 16384) {
    const byteLen = sharedBuf.write(grammar, 0, "utf-8");
    stream = sharedBuf.subarray(0, byteLen);
  } else {
    stream = Buffer.from(grammar);
  }
  const isAscii = stream.length === grammar.length;
  const root = /** @type {*} */ (parseGrammar(stream));
  /** @type {Uint32Array} */
  const tree = root.__tree;
  /** @type {number} */
  const rootPtr = root.__pointer;

  let stmts = rootPtr - 2;

  let stmtCount = 0;
  while (childCount(tree, stmts) === 2) {
    const stmt = stmts - 2;
    stmtScratch[stmtCount++] = stmt;
    stmts = prevSibling(tree, stmt);
  }
  stmtScratch[stmtCount++] = stmts - 2;

  /** @type {Token[]} */
  const tokens = [];
  /** @type {string[]} */
  const grammarSkipTokens = [];
  /** @type {{assoc: 'left' | 'right' | 'nonassoc', symbols: string[]}[]} */
  const precedence = [];
  /** @type {string | undefined} */
  let wordToken;
  /** @type {Set<string>} */
  const knownSymbols = new Set();
  let hasCustomState = false;
  let ruleStmtCount = 0;

  for (let s = stmtCount - 1; s >= 0; s--) {
    const stmtPtr = stmtScratch[s];
    const nChildren = childCount(tree, stmtPtr);
    const semiPtr = stmtPtr - 2;
    const beforeSemi = prevSibling(tree, semiPtr);
    if (nChildren === 2) {
      const items = extractStateList(
        tree,
        beforeSemi,
        stream,
        grammar,
        isAscii
      );
      const directive = items[0];
      if (directive === "%word") {
        if (items.length !== 2) {
          throw new Error("%word directive requires a single token name");
        }
        wordToken = items[1];
        continue;
      }
      if (
        directive !== "%left" &&
        directive !== "%right" &&
        directive !== "%nonassoc"
      ) {
        throw new Error(`Unknown directive '${directive}'`);
      }
      const assoc = /** @type {'left' | 'right' | 'nonassoc'} */ (
        directive.slice(1)
      );
      precedence.push({
        assoc,
        symbols: items.slice(1),
      });
      continue;
    }

    const c1 = nChildren === 4 ? prevSibling(tree, beforeSemi) : beforeSemi;
    const assignPtr = prevSibling(tree, c1);
    const nameIdPtr = firstLeafPtr(tree, assignPtr);

    if (nodeId(tree, c1) === SYM_EXPR_RULE) {
      const exprLeafPtr = firstLeafPtr(tree, c1);
      /** @type {string[]} */
      let state = ["initial"];
      let isSkip = false;
      if (nChildren === 4) {
        const scPtr = beforeSemi;
        const sl = scPtr - 2;
        const rawStates = extractStateList(tree, sl, stream, grammar, isAscii);
        state = [];
        for (let i = 0; i < rawStates.length; i++) {
          const item = rawStates[i];
          if (item === "->") {
            continue;
          }
          if (item.includes("->")) {
            const parts = item.split("->").filter(Boolean);
            for (const part of parts) {
              if (part === "skip") {
                isSkip = true;
              } else {
                state.push(part);
              }
            }
          } else if (item === "skip") {
            isSkip = true;
          } else {
            state.push(item);
          }
        }
        if (state.length === 0) {
          state = ["initial"];
        }
        if (state.some((st) => st !== "initial")) {
          hasCustomState = true;
        }
      }
      const nameEnd = getLeafEnd(tree, nameIdPtr);
      const nameStart = getLeafStart(tree, nameIdPtr);
      const tokenName = isAscii
        ? grammar.slice(nameStart, nameEnd)
        : stream.toString("utf-8", nameStart, nameEnd);

      const exprEnd = getLeafEnd(tree, exprLeafPtr) - 1;
      const exprStart = getLeafStart(tree, exprLeafPtr) + 1;
      const tokenExpr = isAscii
        ? grammar.slice(exprStart, exprEnd)
        : stream.toString("utf-8", exprStart, exprEnd);

      knownSymbols.add(tokenName);
      if (isSkip) {
        if (!grammarSkipTokens.includes(tokenName)) {
          grammarSkipTokens.push(tokenName);
        }
        tokens.push({
          uid: uid++,
          name: tokenName,
          expr: tokenExpr,
          state,
          skip: true,
        });
      } else {
        tokens.push({
          uid: uid++,
          name: tokenName,
          expr: tokenExpr,
          state,
        });
      }
    } else {
      ruleStmtScratch[ruleStmtCount++] = stmtPtr;
    }
  }

  const effectiveSkipList =
    grammarSkipTokens.length > 0
      ? [...(options?.skipTokens ?? []), ...grammarSkipTokens]
      : options?.skipTokens;
  const hasSkip = Boolean(effectiveSkipList && effectiveSkipList.length > 0);
  const skipSymbols =
    hasSkip && effectiveSkipList
      ? new Set(
          effectiveSkipList.flatMap((name) => [
            name,
            `${name}?`,
            `${name}*`,
            `${name}+`,
          ])
        )
      : null;

  /** @type {Token} */
  const eofToken = {
    uid: uid++,
    name: EOF,
    expr: "",
    state: ["initial"],
  };

  /** @type {Token} */
  const errorToken = {
    uid: uid++,
    name: ERROR,
    expr: "",
    state: ["initial"],
  };

  tokens.push(eofToken, errorToken);
  knownSymbols.add(EOF);
  knownSymbols.add(ERROR);

  const tokenStates = hasCustomState
    ? Array.from(new Set(tokens.flatMap((token) => token.state)))
    : ["initial"];
  eofToken.state = tokenStates;
  errorToken.state = tokenStates;

  /** @type {Rule[]} */
  const rules = [];
  /** @type {Set<string> | null} */
  const dedupSet = hasSkip ? new Set() : null;
  /** @type {string[]} */
  const plusBaseSymbols = [];
  /** @type {Set<string>} */
  const plusBaseSymbolSet = new Set();

  for (let s = 0; s < ruleStmtCount; s++) {
    const stmtPtr = ruleStmtScratch[s];
    const nChildren = childCount(tree, stmtPtr);
    const semiPtr = stmtPtr - 2;
    let alts = prevSibling(tree, semiPtr);
    const c1 = nChildren === 4 ? prevSibling(tree, alts) : alts;
    const assignPtr = prevSibling(tree, c1);
    const nameIdPtr = firstLeafPtr(tree, assignPtr);
    const nameEnd = getLeafEnd(tree, nameIdPtr);
    const nameStart = getLeafStart(tree, nameIdPtr);
    const ruleName = isAscii
      ? grammar.slice(nameStart, nameEnd)
      : stream.toString("utf-8", nameStart, nameEnd);

    if (knownSymbols.has(ruleName)) {
      continue;
    }
    const hasLeadingPipe = nChildren === 4;
    if (hasLeadingPipe) {
      uid++;
    }
    let altCount = 0;
    while (childCount(tree, alts) === 3) {
      const alt = alts - 2;
      altScratch[altCount++] = alt;
      const pipe = prevSibling(tree, alt);
      alts = prevSibling(tree, pipe);
    }
    altScratch[altCount++] = alts - 2;

    for (let a = altCount - 1; a >= 0; a--) {
      let alt = altScratch[a];
      let itemCount = 0;
      while (childCount(tree, alt) === 2) {
        const item = alt - 2;
        itemScratch[itemCount++] = item;
        alt = prevSibling(tree, item);
      }
      itemScratch[itemCount++] = alt - 2;

      /** @type {string[]} */
      let symbols = [];
      /** @type {RuleAction[]} */
      const actions = [];

      for (let it = itemCount - 1; it >= 0; it--) {
        const ruleItem = itemScratch[it];
        const leaf = firstLeafPtr(tree, ruleItem);
        const leafSym = nodeId(tree, leaf);
        const leafEnd = getLeafEnd(tree, leaf);
        const leafStart = getLeafStart(tree, leaf);
        if (leafSym === SYM_IDENTIFIER) {
          const sym = isAscii
            ? grammar.slice(leafStart, leafEnd)
            : stream.toString("utf-8", leafStart, leafEnd);
          symbols.push(sym);
        } else if (leafSym === SYM_ACTION) {
          const actStr = isAscii
            ? grammar.slice(leafStart + 1, leafEnd - 1)
            : stream.toString("utf-8", leafStart + 1, leafEnd - 1);
          actions.push({
            at: symbols.length,
            code: actStr.replace(/\s+/g, " ").trim(),
          });
        }
      }

      const ruleUid = uid++;
      if (hasSkip && skipSymbols) {
        symbols = symbols.filter((sym) => !skipSymbols.has(sym));
      }

      if (symbols.length === 0) {
        continue;
      }

      let hasOptional = false;
      for (let i = 0; i < symbols.length; i++) {
        const sym = symbols[i];
        const lastChar = sym.charCodeAt(sym.length - 1);
        if (lastChar === 63) {
          hasOptional = true;
        } else if (lastChar === 43) {
          const baseSym = sym.slice(0, -1);
          if (!plusBaseSymbolSet.has(baseSym)) {
            plusBaseSymbolSet.add(baseSym);
            plusBaseSymbols.push(baseSym);
          }
          symbols[i] = `${baseSym}__plus`;
        } else if (lastChar === 42) {
          const baseSym = sym.slice(0, -1);
          if (!plusBaseSymbolSet.has(baseSym)) {
            plusBaseSymbolSet.add(baseSym);
            plusBaseSymbols.push(baseSym);
          }
          symbols[i] = `${baseSym}__plus?`;
          hasOptional = true;
        }
      }

      if (!hasOptional) {
        if (dedupSet && actions.length === 0) {
          const key = `${ruleName}::${symbols.join(" ")}`;
          if (dedupSet.has(key)) {
            continue;
          }
          dedupSet.add(key);
        }
        rules.push({
          uid: ruleUid,
          name: ruleName,
          symbols,
          actions,
        });
      } else {
        const expandedList = optionals(symbols);
        for (let e = 0; e < expandedList.length; e++) {
          const expSyms = expandedList[e];
          if (dedupSet && actions.length === 0) {
            const key = `${ruleName}::${expSyms.join(" ")}`;
            if (dedupSet.has(key)) {
              continue;
            }
            dedupSet.add(key);
          }
          rules.push({
            uid: ruleUid,
            name: ruleName,
            symbols: expSyms,
            actions,
          });
        }
      }
    }
  }

  for (let i = 0; i < plusBaseSymbols.length; i++) {
    const baseSym = plusBaseSymbols[i];
    const plusName = `${baseSym}__plus`;
    rules.push(
      {
        uid: uid++,
        name: plusName,
        symbols: [baseSym],
        actions: [],
      },
      {
        uid: uid++,
        name: plusName,
        symbols: [plusName, baseSym],
        actions: [],
      }
    );
  }

  for (let i = 0; i < rules.length; i++) {
    knownSymbols.add(rules[i].name);
  }

  for (let i = 0; i < rules.length; i++) {
    const rule = rules[i];
    const syms = rule.symbols;
    for (let j = 0; j < syms.length; j++) {
      if (!knownSymbols.has(syms[j])) {
        throw new Error(`Unknown symbol '${syms[j]}' in rule '${rule.name}'`);
      }
    }
  }

  /** @type {{tokens: Token[], rules: Rule[], precedence?: {assoc: 'left' | 'right' | 'nonassoc', symbols: string[]}[], word?: string}} */
  const result = {
    tokens,
    rules,
  };
  if (precedence.length > 0) {
    result.precedence = precedence;
  }
  if (wordToken !== undefined) {
    result.word = wordToken;
  }
  return result;
}
