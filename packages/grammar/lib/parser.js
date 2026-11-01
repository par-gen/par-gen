import { parse as parseGrammar } from "../generated/parser.js";
import { optionals } from "./optionals.js";

export const EOF = "@par-gen.EOF";
export const ERROR = "@par-gen.ERROR";

/**
 * @typedef {Object} Token
 * @property {number} uid
 * @property {string} name
 * @property {string} expr
 * @property {string[]} state
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
 */

/**
 * @typedef {Object} ParseOptions
 * @property {string[]=} skipTokens
 */

const SYM_WS = 0;
const SYM_ACTION = 6;
const SYM_IDENTIFIER = 7;
const SYM_EXPR_RULE = 15;

const sharedBuf = Buffer.allocUnsafe(65536);
const stmtScratch = new Uint32Array(2048);
const ruleStmtScratch = new Uint32Array(2048);
const altScratch = new Uint32Array(512);
const itemScratch = new Uint32Array(256);

/**
 * @param {string} grammar
 * @param {ParseOptions=} options
 * @returns {{tokens: Token[], rules: Rule[]}}
 */
export function parse(grammar, options) {
  let uid = 0;
  const skipList = options?.skipTokens;
  const hasSkip = Boolean(skipList && skipList.length > 0);
  const skipSymbols =
    hasSkip && skipList
      ? new Set(skipList.flatMap((name) => [name, `${name}?`]))
      : null;

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

  let stmts = tree[rootPtr + 1] & 0xfffff;
  if ((tree[stmts] & 0xff) === SYM_WS) {
    stmts = tree[stmts + 2];
  }

  let stmtCount = 0;
  while (tree[stmts] >>> 8 === 2) {
    const first = tree[stmts + 1] & 0xfffff;
    stmtScratch[stmtCount++] = tree[first + 2];
    stmts = first;
  }
  stmtScratch[stmtCount++] = tree[stmts + 1] & 0xfffff;

  /** @type {Token[]} */
  const tokens = [];
  /** @type {Set<string>} */
  const knownSymbols = new Set();
  let hasCustomState = false;
  let ruleStmtCount = 0;

  for (let s = stmtCount - 1; s >= 0; s--) {
    const stmtPtr = stmtScratch[s];
    const nChildren = tree[stmtPtr] >>> 8;
    const assignPtr = tree[stmtPtr + 1] & 0xfffff;
    const nameIdPtr = tree[assignPtr + 1] & 0xfffff;
    const c1 = tree[assignPtr + 2];

    if ((tree[c1] & 0xff) === SYM_EXPR_RULE) {
      const exprLeafPtr = tree[c1 + 1] & 0xfffff;
      /** @type {string[]} */
      let state = ["initial"];
      if (nChildren === 4) {
        hasCustomState = true;
        const scPtr = tree[c1 + 2];
        const scFirst = tree[scPtr + 1] & 0xfffff;
        const scSecond = tree[scFirst + 2];
        let sl = tree[scPtr] >>> 8 === 2 ? scSecond : tree[scSecond + 2];
        state = [];
        while (tree[sl] >>> 8 === 2) {
          const first = tree[sl + 1] & 0xfffff;
          const stateItem = tree[first + 2];
          const stLeaf = tree[stateItem + 1] & 0xfffff;
          const stSpan = tree[stLeaf + 1];
          let stEnd = stSpan & 0x3fffff;
          const stStart = stEnd - (stSpan >>> 22);
          if (stream[stEnd - 1] === 44) {
            stEnd--;
          }
          state.push(
            isAscii
              ? grammar.slice(stStart, stEnd)
              : stream.toString("utf-8", stStart, stEnd)
          );
          sl = first;
        }
        const firstStateItem = tree[sl + 1] & 0xfffff;
        const stLeaf = tree[firstStateItem + 1] & 0xfffff;
        const stSpan = tree[stLeaf + 1];
        let stEnd = stSpan & 0x3fffff;
        const stStart = stEnd - (stSpan >>> 22);
        if (stream[stEnd - 1] === 44) {
          stEnd--;
        }
        state.push(
          isAscii
            ? grammar.slice(stStart, stEnd)
            : stream.toString("utf-8", stStart, stEnd)
        );
        state.reverse();
      }
      const nameSpan = tree[nameIdPtr + 1];
      const nameEnd = nameSpan & 0x3fffff;
      const nameStart = nameEnd - (nameSpan >>> 22);
      const tokenName = isAscii
        ? grammar.slice(nameStart, nameEnd)
        : stream.toString("utf-8", nameStart, nameEnd);

      const exprSpan = tree[exprLeafPtr + 1];
      const exprEnd = (exprSpan & 0x3fffff) - 1;
      const exprStart = exprEnd + 2 - (exprSpan >>> 22);
      const tokenExpr = isAscii
        ? grammar.slice(exprStart, exprEnd)
        : stream.toString("utf-8", exprStart, exprEnd);

      knownSymbols.add(tokenName);
      tokens.push({
        uid: uid++,
        name: tokenName,
        expr: tokenExpr,
        state,
      });
    } else {
      ruleStmtScratch[ruleStmtCount++] = stmtPtr;
    }
  }

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

  for (let s = 0; s < ruleStmtCount; s++) {
    const stmtPtr = ruleStmtScratch[s];
    const nChildren = tree[stmtPtr] >>> 8;
    const assignPtr = tree[stmtPtr + 1] & 0xfffff;
    const nameIdPtr = tree[assignPtr + 1] & 0xfffff;
    const nameSpan = tree[nameIdPtr + 1];
    const nameEnd = nameSpan & 0x3fffff;
    const nameStart = nameEnd - (nameSpan >>> 22);
    const ruleName = isAscii
      ? grammar.slice(nameStart, nameEnd)
      : stream.toString("utf-8", nameStart, nameEnd);

    if (knownSymbols.has(ruleName)) {
      continue;
    }
    const c1 = tree[assignPtr + 2];
    const hasLeadingPipe = nChildren === 4;
    if (hasLeadingPipe) {
      uid++;
    }
    let alts = hasLeadingPipe ? tree[c1 + 2] : c1;
    let altCount = 0;
    while (tree[alts] >>> 8 === 3) {
      const first = tree[alts + 1] & 0xfffff;
      const pipe = tree[first + 2];
      altScratch[altCount++] = tree[pipe + 2];
      alts = first;
    }
    altScratch[altCount++] = tree[alts + 1] & 0xfffff;

    for (let a = altCount - 1; a >= 0; a--) {
      let alt = altScratch[a];
      let itemCount = 0;
      while (tree[alt] >>> 8 === 2) {
        const first = tree[alt + 1] & 0xfffff;
        itemScratch[itemCount++] = tree[first + 2];
        alt = first;
      }
      itemScratch[itemCount++] = tree[alt + 1] & 0xfffff;

      /** @type {string[]} */
      let symbols = [];
      /** @type {RuleAction[]} */
      const actions = [];
      let hasOptional = false;

      for (let it = itemCount - 1; it >= 0; it--) {
        const ruleItem = itemScratch[it];
        const leaf = tree[ruleItem + 1] & 0xfffff;
        const leafSym = tree[leaf] & 0xff;
        const leafSpan = tree[leaf + 1];
        const leafEnd = leafSpan & 0x3fffff;
        const leafStart = leafEnd - (leafSpan >>> 22);
        if (leafSym === SYM_IDENTIFIER) {
          const sym = isAscii
            ? grammar.slice(leafStart, leafEnd)
            : stream.toString("utf-8", leafStart, leafEnd);
          symbols.push(sym);
          if (!hasSkip && sym.charCodeAt(sym.length - 1) === 63) {
            hasOptional = true;
          }
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
        hasOptional = false;
        for (let i = 0; i < symbols.length; i++) {
          const sym = symbols[i];
          if (sym.charCodeAt(sym.length - 1) === 63) {
            hasOptional = true;
            break;
          }
        }
      }

      if (symbols.length === 0) {
        continue;
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

  return {
    tokens,
    rules,
  };
}
