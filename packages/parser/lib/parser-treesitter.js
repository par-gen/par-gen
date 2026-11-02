import { EOF, ERROR } from "@par-gen/grammar";
import { generate as generateParser } from "./parser.js";

/**
 * @typedef {import('@par-gen/grammar/types/parser').Token} Token
 */

/**
 * @typedef {import('@par-gen/grammar/types/parser').Rule} Rule
 */

/**
 * @typedef {import('@par-gen/grammar/types/parser').RuleAction} RuleAction
 */

/**
 * @typedef {import('@par-gen/grammar/types/parser').Associativity} Associativity
 */

/**
 * @typedef {import('@par-gen/grammar/types/parser').ParseOptions} ParseOptions
 */

/**
 * @typedef {import('./parser').ParserData} ParserData
 */

/**
 * @typedef {Object} TreeSitterNode
 * @property {string} type
 * @property {string | number} [value]
 * @property {string} [name]
 * @property {boolean} [named]
 * @property {TreeSitterNode[]} [members]
 * @property {TreeSitterNode} [content]
 */

/**
 * @typedef {Object} TreeSitterGrammar
 * @property {string} [name]
 * @property {string} [word]
 * @property {{ [ruleName: string]: TreeSitterNode }} rules
 * @property {TreeSitterNode[]} [extras]
 * @property {string[]} [inline]
 * @property {Array<Array<string | { type: string, value: string }>>} [precedences]
 * @property {string[][]} [conflicts]
 * @property {TreeSitterNode[]} [externals]
 * @property {string[]} [supertypes]
 */

/**
 * @typedef {Object} LoweredBranch
 * @property {string[]} symbols
 * @property {number=} precedence
 * @property {Associativity=} assoc
 */

/**
 * @typedef {Object} ExtractedToken
 * @property {string} name
 * @property {string} expr
 * @property {string[]} state
 * @property {boolean} isString
 * @property {boolean} isImmediate
 * @property {boolean} isWord
 * @property {boolean} isExtra
 * @property {number} lexPrec
 * @property {number} order
 */

const OUTSIDE_ESCAPED_BYTES = new Set([
  40, // (
  41, // )
  91, // [
  93, // ]
  124, // |
  46, // .
  42, // *
  63, // ?
  43, // +
  92, // \
  45, // -
  94, // ^
]);

const CLASS_FORBIDDEN_BYTES = new Set([
  91, // [
  93, // ]
  92, // \
  45, // -
  94, // ^
]);

/**
 * @param {number} byte
 * @returns {string}
 */
function formatOutsideByte(byte) {
  if (OUTSIDE_ESCAPED_BYTES.has(byte)) {
    return `\\${String.fromCharCode(byte)}`;
  }
  if (byte >= 0x20 && byte <= 0x7e) {
    return String.fromCharCode(byte);
  }
  return `\\x${byte.toString(16).padStart(2, "0")}`;
}

/**
 * @param {number} byte
 * @returns {string}
 */
function formatClassByte(byte) {
  if (
    byte >= 0x20 &&
    byte <= 0x7e &&
    !CLASS_FORBIDDEN_BYTES.has(byte)
  ) {
    return String.fromCharCode(byte);
  }
  return `\\x${byte.toString(16).padStart(2, "0")}`;
}

/**
 * @param {string} str
 * @returns {string}
 */
export function escapeStringToRegex(str) {
  const bytes = Buffer.from(str, "utf-8");
  let out = "";
  for (let i = 0; i < bytes.length; i++) {
    out += formatOutsideByte(bytes[i]);
  }
  return out;
}

/**
 * @param {string} pattern
 * @param {number} startIdx
 * @returns {{ expr: string, nextIdx: number }}
 */
function normalizeCharClass(pattern, startIdx) {
  let i = startIdx + 1;
  const len = pattern.length;
  let negated = false;
  if (i < len && pattern[i] === "^") {
    negated = true;
    i++;
  }

  /** @type {Array<{ type: 'byte', value: number } | { type: 'dash' } | { type: 'raw', value: string }>} */
  const items = [];
  let first = true;

  while (i < len) {
    const ch = pattern[i];
    if (ch === "]" && !first) {
      i++;
      break;
    }
    first = false;

    if (ch === "\\") {
      i++;
      if (i >= len) {
        items.push({ type: "byte", value: 92 });
        break;
      }
      const esc = pattern[i++];
      if (esc === "d") {
        items.push({ type: "raw", value: "0-9" });
      } else if (esc === "D") {
        items.push({ type: "raw", value: "\\x00-\\x2f\\x3a-\\xff" });
      } else if (esc === "w") {
        items.push({ type: "raw", value: "a-zA-Z0-9_" });
      } else if (esc === "W") {
        items.push({
          type: "raw",
          value: "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x5e\\x60\\x7b-\\xff",
        });
      } else if (esc === "s") {
        items.push({ type: "raw", value: "\\x09\\x0a\\x0b\\x0c\\x0d " });
      } else if (esc === "S") {
        items.push({
          type: "raw",
          value: "\\x00-\\x08\\x0e-\\x1f\\x21-\\xff",
        });
      } else if (esc === "x" && i + 2 <= len) {
        const hex = pattern.slice(i, i + 2);
        if (/^[0-9a-fA-F]{2}$/.test(hex)) {
          items.push({ type: "byte", value: parseInt(hex, 16) });
          i += 2;
        } else {
          items.push({ type: "byte", value: esc.charCodeAt(0) });
        }
      } else if (esc === "u") {
        if (pattern[i] === "{") {
          const closeBrace = pattern.indexOf("}", i + 1);
          if (closeBrace !== -1) {
            const hex = pattern.slice(i + 1, closeBrace);
            const cp = parseInt(hex, 16);
            items.push({
              type: "byte",
              value: Number.isNaN(cp) ? 0 : Math.min(0xff, cp),
            });
            i = closeBrace + 1;
          } else {
            items.push({ type: "byte", value: 117 });
          }
        } else if (i + 4 <= len) {
          const hex = pattern.slice(i, i + 4);
          if (/^[0-9a-fA-F]{4}$/.test(hex)) {
            items.push({
              type: "byte",
              value: Math.min(0xff, parseInt(hex, 16)),
            });
            i += 4;
          } else {
            items.push({ type: "byte", value: 117 });
          }
        } else {
          items.push({ type: "byte", value: 117 });
        }
      } else if (esc === "n") {
        items.push({ type: "byte", value: 0x0a });
      } else if (esc === "r") {
        items.push({ type: "byte", value: 0x0d });
      } else if (esc === "t") {
        items.push({ type: "byte", value: 0x09 });
      } else if (esc === "b") {
        items.push({ type: "byte", value: 0x08 });
      } else if (esc === "f") {
        items.push({ type: "byte", value: 0x0c });
      } else if (esc === "v") {
        items.push({ type: "byte", value: 0x0b });
      } else if (esc === "0") {
        items.push({ type: "byte", value: 0x00 });
      } else {
        items.push({ type: "byte", value: esc.charCodeAt(0) & 0xff });
      }
    } else if (ch === "-") {
      items.push({ type: "dash" });
      i++;
    } else {
      const code = pattern.codePointAt(i) ?? 0;
      items.push({ type: "byte", value: Math.min(0xff, code) });
      i += code > 0xffff ? 2 : 1;
    }
  }

  let body = "";
  let k = 0;
  while (k < items.length) {
    const cur = items[k];
    const next1 = items[k + 1];
    const next2 = items[k + 2];
    if (
      cur.type === "byte" &&
      next1 &&
      next1.type === "dash" &&
      next2 &&
      next2.type === "byte"
    ) {
      const lo = Math.min(cur.value, next2.value);
      const hi = Math.max(cur.value, next2.value);
      body += `${formatClassByte(lo)}-${formatClassByte(hi)}`;
      k += 3;
    } else if (cur.type === "dash") {
      body += "\\x2d";
      k += 1;
    } else if (cur.type === "byte") {
      body += formatClassByte(cur.value);
      k += 1;
    } else {
      body += cur.value;
      k += 1;
    }
  }

  return {
    expr: `[${negated ? "^" : ""}${body}]`,
    nextIdx: i,
  };
}

/**
 * @param {string} atom
 * @returns {boolean}
 */
function endsWithQuantifier(atom) {
  if (atom.length === 0) {
    return false;
  }
  const last = atom[atom.length - 1];
  if (last !== "*" && last !== "+" && last !== "?") {
    return false;
  }
  let backslashes = 0;
  for (let i = atom.length - 2; i >= 0 && atom[i] === "\\"; i--) {
    backslashes++;
  }
  return backslashes % 2 === 0;
}

/**
 * @param {string} atom
 * @param {string} q
 * @returns {string}
 */
function applyQuantifier(atom, q) {
  if (!atom) {
    return "";
  }
  const base = endsWithQuantifier(atom) ? `(${atom})` : atom;
  return `${base}${q}`;
}

/**
 * @param {string} pattern
 * @param {number} startIdx
 * @param {boolean} stopOnCloseParen
 * @returns {{ expr: string, nextIdx: number }}
 */
function parseSubPattern(pattern, startIdx, stopOnCloseParen) {
  let i = startIdx;
  const len = pattern.length;
  /** @type {string[][]} */
  const alternatives = [[]];

  while (i < len) {
    const ch = pattern[i];
    if (stopOnCloseParen && ch === ")") {
      i++;
      break;
    }

    if (ch === "|") {
      alternatives.push([]);
      i++;
      continue;
    }

    const currentAlt = alternatives[alternatives.length - 1];

    if (ch === "[") {
      const { expr, nextIdx } = normalizeCharClass(pattern, i);
      currentAlt.push(expr);
      i = nextIdx;
      continue;
    }

    if (ch === "(") {
      i++;
      if (pattern.slice(i, i + 2) === "?:") {
        i += 2;
      } else if (
        pattern.slice(i, i + 2) === "?=" ||
        pattern.slice(i, i + 2) === "?!"
      ) {
        i += 2;
      }
      const { expr, nextIdx } = parseSubPattern(pattern, i, true);
      if (expr !== "") {
        currentAlt.push(`(${expr})`);
      }
      i = nextIdx;
      continue;
    }

    if (ch === ".") {
      currentAlt.push(".");
      i++;
      continue;
    }

    if (ch === "*" || ch === "+" || ch === "?") {
      i++;
      if (i < len && pattern[i] === "?") {
        i++;
      }
      if (currentAlt.length > 0) {
        const prev = /** @type {string} */ (currentAlt.pop());
        currentAlt.push(applyQuantifier(prev, ch));
      }
      continue;
    }

    if (ch === "{") {
      const match = /^\{(\d+)(?:,(\d*))?\}/.exec(pattern.slice(i));
      if (match && currentAlt.length > 0) {
        i += match[0].length;
        if (i < len && pattern[i] === "?") {
          i++;
        }
        const prev = /** @type {string} */ (currentAlt.pop());
        const base = endsWithQuantifier(prev) ? `(${prev})` : prev;
        const min = parseInt(match[1], 10);
        const max =
          match[2] === undefined
            ? min
            : match[2] === ""
            ? Infinity
            : parseInt(match[2], 10);
        let unrolled = "";
        for (let r = 0; r < min; r++) {
          unrolled += base;
        }
        if (max === Infinity) {
          unrolled += min === 0 ? `${base}*` : `${base}*`;
        } else {
          for (let r = min; r < max; r++) {
            unrolled += `${base}?`;
          }
        }
        if (unrolled !== "") {
          currentAlt.push(`(${unrolled})`);
        }
        continue;
      }
      currentAlt.push("{");
      i++;
      continue;
    }

    if (ch === "\\") {
      i++;
      if (i >= len) {
        currentAlt.push("\\\\");
        break;
      }
      const esc = pattern[i++];
      if (esc === "s") {
        currentAlt.push("[\\x09\\x0a\\x0b\\x0c\\x0d ]");
      } else if (esc === "S") {
        currentAlt.push("[^\\x09\\x0a\\x0b\\x0c\\x0d ]");
      } else if (esc === "d") {
        currentAlt.push("[0-9]");
      } else if (esc === "D") {
        currentAlt.push("[^0-9]");
      } else if (esc === "w") {
        currentAlt.push("[a-zA-Z0-9_]");
      } else if (esc === "W") {
        currentAlt.push("[^a-zA-Z0-9_]");
      } else if (esc === "x" && i + 2 <= len) {
        const hex = pattern.slice(i, i + 2);
        if (/^[0-9a-fA-F]{2}$/.test(hex)) {
          currentAlt.push(`\\x${hex.toLowerCase()}`);
          i += 2;
        } else {
          currentAlt.push(escapeStringToRegex(esc));
        }
      } else if (esc === "u") {
        if (pattern[i] === "{") {
          const closeBrace = pattern.indexOf("}", i + 1);
          if (closeBrace !== -1) {
            const hex = pattern.slice(i + 1, closeBrace);
            const cp = parseInt(hex, 16);
            const encoded = escapeStringToRegex(
              String.fromCodePoint(Number.isNaN(cp) ? 0 : cp)
            );
            currentAlt.push(encoded.length > 4 ? `(${encoded})` : encoded);
            i = closeBrace + 1;
          } else {
            currentAlt.push("u");
          }
        } else if (i + 4 <= len) {
          const hex = pattern.slice(i, i + 4);
          if (/^[0-9a-fA-F]{4}$/.test(hex)) {
            const cp = parseInt(hex, 16);
            const encoded = escapeStringToRegex(String.fromCodePoint(cp));
            currentAlt.push(encoded.length > 4 ? `(${encoded})` : encoded);
            i += 4;
          } else {
            currentAlt.push("u");
          }
        } else {
          currentAlt.push("u");
        }
      } else if (
        esc === "n" ||
        esc === "r" ||
        esc === "t" ||
        esc === "b" ||
        esc === "f"
      ) {
        currentAlt.push(`\\${esc}`);
      } else if (esc === "v") {
        currentAlt.push("\\x0b");
      } else if (esc === "0") {
        currentAlt.push("\\x00");
      } else {
        currentAlt.push(escapeStringToRegex(esc));
      }
      continue;
    }

    const cp = pattern.codePointAt(i) ?? 0;
    const chStr = String.fromCodePoint(cp);
    const encoded = escapeStringToRegex(chStr);
    currentAlt.push(Buffer.byteLength(chStr) > 1 ? `(${encoded})` : encoded);
    i += cp > 0xffff ? 2 : 1;
  }

  let hasEmpty = false;
  /** @type {string[]} */
  const nonEmpty = [];
  for (const alt of alternatives) {
    if (alt.length === 0) {
      hasEmpty = true;
    } else {
      nonEmpty.push(alt.join(""));
    }
  }

  if (nonEmpty.length === 0) {
    return { expr: "", nextIdx: i };
  }

  const joined =
    nonEmpty.length === 1 ? nonEmpty[0] : nonEmpty.join("|");
  return {
    expr: hasEmpty ? `(${joined})?` : joined,
    nextIdx: i,
  };
}

/**
 * @param {string} pattern
 * @returns {string}
 */
export function normalizePattern(pattern) {
  return parseSubPattern(pattern, 0, false).expr;
}

/**
 * @param {TreeSitterNode} node
 * @param {{ [ruleName: string]: TreeSitterNode }} [grammarRules]
 * @returns {string}
 */
export function ruleToRegex(node, grammarRules = {}) {
  switch (node.type) {
    case "BLANK":
      return "";
    case "STRING":
      return escapeStringToRegex(String(node.value ?? ""));
    case "PATTERN":
    case "CHARACTER_SET":
      return normalizePattern(String(node.value ?? ""));
    case "TOKEN":
    case "IMMEDIATE_TOKEN":
    case "ALIAS":
    case "FIELD":
    case "PREC":
    case "PREC_LEFT":
    case "PREC_RIGHT":
    case "PREC_DYNAMIC":
      return node.content ? ruleToRegex(node.content, grammarRules) : "";
    case "SYMBOL": {
      const target = node.name ? grammarRules[node.name] : undefined;
      return target ? ruleToRegex(target, grammarRules) : "";
    }
    case "SEQ": {
      const parts = (node.members ?? [])
        .map((m) => ruleToRegex(m, grammarRules))
        .filter((s) => s !== "");
      if (parts.length === 0) {
        return "";
      }
      if (parts.length === 1) {
        return parts[0];
      }
      return `(${parts.join("")})`;
    }
    case "CHOICE": {
      const members = node.members ?? [];
      let hasBlank = false;
      /** @type {string[]} */
      const nonBlank = [];
      for (const m of members) {
        if (m.type === "BLANK") {
          hasBlank = true;
          continue;
        }
        const sub = ruleToRegex(m, grammarRules);
        if (sub === "") {
          hasBlank = true;
        } else if (!nonBlank.includes(sub)) {
          nonBlank.push(sub);
        }
      }
      if (nonBlank.length === 0) {
        return "";
      }
      const joined =
        nonBlank.length === 1 ? nonBlank[0] : `(${nonBlank.join("|")})`;
      return hasBlank ? `(${joined})?` : joined;
    }
    case "REPEAT1": {
      const inner = node.content ? ruleToRegex(node.content, grammarRules) : "";
      return inner === "" ? "" : `(${inner})+`;
    }
    case "REPEAT": {
      const inner = node.content ? ruleToRegex(node.content, grammarRules) : "";
      return inner === "" ? "" : `(${inner})*`;
    }
    default:
      return "";
  }
}

/**
 * @param {TreeSitterNode} node
 * @returns {TreeSitterNode}
 */
function unwrapMeta(node) {
  let curr = node;
  while (
    curr &&
    (curr.type === "ALIAS" ||
      curr.type === "FIELD" ||
      curr.type === "PREC" ||
      curr.type === "PREC_LEFT" ||
      curr.type === "PREC_RIGHT" ||
      curr.type === "PREC_DYNAMIC") &&
    curr.content
  ) {
    curr = curr.content;
  }
  return curr;
}

/**
 * @param {TreeSitterNode} node
 * @param {Map<string, number>} namedPrecMap
 * @returns {number}
 */
function extractLexicalPrecedence(node, namedPrecMap) {
  let curr = node;
  while (curr) {
    if (
      (curr.type === "PREC" ||
        curr.type === "PREC_LEFT" ||
        curr.type === "PREC_RIGHT" ||
        curr.type === "PREC_DYNAMIC") &&
      curr.value !== undefined
    ) {
      if (typeof curr.value === "number") {
        return curr.value;
      }
      const mapped = namedPrecMap.get(String(curr.value));
      if (mapped !== undefined) {
        return mapped;
      }
    }
    if (curr.content) {
      curr = curr.content;
    } else {
      break;
    }
  }
  return 0;
}

/**
 * @param {string | number | undefined} val
 * @param {Map<string, number>} namedPrecMap
 * @returns {number}
 */
function resolvePrecedenceLevel(val, namedPrecMap) {
  if (typeof val === "number") {
    return val;
  }
  if (typeof val === "string") {
    return namedPrecMap.get(val) ?? 0;
  }
  return 0;
}

/**
 * @param {string | TreeSitterGrammar} input
 * @param {ParseOptions=} options
 * @returns {ParserData}
 */
export function generate(input, options) {
  /** @type {TreeSitterGrammar} */
  const grammar = typeof input === "string" ? JSON.parse(input) : input;
  const grammarRules = grammar.rules ?? {};
  const ruleNames = Object.keys(grammarRules);
  if (ruleNames.length === 0) {
    throw new Error("Tree-sitter grammar contains no rules");
  }
  const startRuleName = ruleNames[0];

  /** @type {Map<string, number>} */
  const namedPrecMap = new Map();
  if (Array.isArray(grammar.precedences)) {
    for (const group of grammar.precedences) {
      const total = group.length;
      group.forEach((entry, idx) => {
        const name = typeof entry === "string" ? entry : entry?.value;
        if (name) {
          namedPrecMap.set(name, (total - idx) * 10);
        }
      });
    }
  }

  const inlineSet = new Set(grammar.inline ?? []);
  inlineSet.delete(startRuleName);

  /** @type {Map<string, ExtractedToken>} */
  const tokenByName = new Map();
  /** @type {Map<string, string>} */
  const stringValToTokenName = new Map();
  let tokenOrder = 0;
  let anonTokenCounter = 0;

  /**
   * @param {string} value
   * @param {number=} lexPrec
   * @returns {string}
   */
  const ensureStringToken = (value, lexPrec = 0) => {
    const existingName = stringValToTokenName.get(value);
    if (existingName !== undefined) {
      const tok = tokenByName.get(existingName);
      if (tok && lexPrec > tok.lexPrec) {
        tok.lexPrec = lexPrec;
      }
      return existingName;
    }
    const name = value;
    const expr = escapeStringToRegex(value);
    stringValToTokenName.set(value, name);
    tokenByName.set(name, {
      name,
      expr,
      state: ["initial"],
      isString: true,
      isImmediate: false,
      isWord: grammar.word === name,
      isExtra: false,
      lexPrec,
      order: tokenOrder++,
    });
    return name;
  };

  /** @type {Set<string>} */
  const terminalRuleNames = new Set();

  for (const rName of ruleNames) {
    if (rName === startRuleName) {
      continue;
    }
    const rawRule = grammarRules[rName];
    const unwrapped = unwrapMeta(rawRule);
    if (unwrapped.type === "STRING") {
      const strVal = String(unwrapped.value ?? "");
      const lexPrec = extractLexicalPrecedence(rawRule, namedPrecMap);
      if (rName === strVal) {
        ensureStringToken(strVal, lexPrec);
        terminalRuleNames.add(rName);
      }
    } else if (
      unwrapped.type === "PATTERN" ||
      unwrapped.type === "TOKEN" ||
      unwrapped.type === "IMMEDIATE_TOKEN" ||
      unwrapped.type === "CHARACTER_SET"
    ) {
      const expr = ruleToRegex(rawRule, grammarRules);
      const isImmediate = unwrapped.type === "IMMEDIATE_TOKEN";
      const lexPrec = extractLexicalPrecedence(rawRule, namedPrecMap);
      tokenByName.set(rName, {
        name: rName,
        expr,
        state: ["initial"],
        isString: false,
        isImmediate,
        isWord: grammar.word === rName,
        isExtra: false,
        lexPrec,
        order: tokenOrder++,
      });
      terminalRuleNames.add(rName);
    }
  }

  /** @type {string[]} */
  const skipTokens = [...(options?.skipTokens ?? [])];
  if (Array.isArray(grammar.extras)) {
    grammar.extras.forEach((extra, idx) => {
      if (extra.type === "SYMBOL" && extra.name) {
        const targetTok = tokenByName.get(extra.name);
        if (targetTok) {
          targetTok.isExtra = true;
        }
        if (!skipTokens.includes(extra.name)) {
          skipTokens.push(extra.name);
        }
      } else {
        const rawExpr = ruleToRegex(extra, grammarRules);
        if (rawExpr !== "") {
          const extraName = `_extra_${idx}`;
          const expr =
            extra.type === "PATTERN" &&
            !rawExpr.endsWith("+") &&
            !rawExpr.endsWith("*")
              ? `(${rawExpr})+`
              : rawExpr;
          tokenByName.set(extraName, {
            name: extraName,
            expr,
            state: ["initial"],
            isString: false,
            isImmediate: false,
            isWord: false,
            isExtra: true,
            lexPrec: -100,
            order: tokenOrder++,
          });
          if (!skipTokens.includes(extraName)) {
            skipTokens.push(extraName);
          }
        }
      }
    });
  }

  /** @type {Array<{ name: string, symbols: string[], actions: RuleAction[], precedence?: number, assoc?: Associativity }>} */
  const rawProductions = [];
  /** @type {Set<string>} */
  const nullableRules = new Set();
  /** @type {Map<string, string>} */
  const repeatRuleBySig = new Map();
  let repeatCounter = 0;

  /**
   * @param {TreeSitterNode} node
   * @param {string} currentRuleName
   * @param {Set<string>} inlineStack
   * @returns {LoweredBranch[]}
   */
  function lowerNode(node, currentRuleName, inlineStack) {
    switch (node.type) {
      case "BLANK":
        return [{ symbols: [] }];

      case "STRING": {
        const tokName = ensureStringToken(String(node.value ?? ""));
        return [{ symbols: [tokName] }];
      }

      case "PATTERN":
      case "CHARACTER_SET":
      case "TOKEN":
      case "IMMEDIATE_TOKEN": {
        const isImmediate = node.type === "IMMEDIATE_TOKEN";
        const expr = ruleToRegex(node, grammarRules);
        const lexPrec = extractLexicalPrecedence(node, namedPrecMap);
        const tokName = `_${currentRuleName}_token${++anonTokenCounter}`;
        tokenByName.set(tokName, {
          name: tokName,
          expr,
          state: ["initial"],
          isString: false,
          isImmediate,
          isWord: false,
          isExtra: false,
          lexPrec,
          order: tokenOrder++,
        });
        return [{ symbols: [tokName] }];
      }

      case "SYMBOL": {
        const symName = String(node.name ?? "");
        if (
          inlineSet.has(symName) &&
          !terminalRuleNames.has(symName) &&
          !inlineStack.has(symName) &&
          grammarRules[symName]
        ) {
          const nextStack = new Set(inlineStack);
          nextStack.add(symName);
          return lowerNode(grammarRules[symName], currentRuleName, nextStack);
        }
        return [{ symbols: [symName] }];
      }

      case "FIELD":
      case "ALIAS": {
        if (!node.content) {
          return [{ symbols: [] }];
        }
        return lowerNode(node.content, currentRuleName, inlineStack);
      }

      case "PREC":
      case "PREC_DYNAMIC":
      case "PREC_LEFT":
      case "PREC_RIGHT": {
        if (!node.content) {
          return [{ symbols: [] }];
        }
        const level = resolvePrecedenceLevel(node.value, namedPrecMap);
        /** @type {Associativity} */
        const assoc =
          node.type === "PREC_LEFT"
            ? "left"
            : node.type === "PREC_RIGHT"
            ? "right"
            : "none";
        const innerBranches = lowerNode(
          node.content,
          currentRuleName,
          inlineStack
        );
        return innerBranches.map((b) => ({
          symbols: b.symbols,
          precedence: b.precedence ?? level,
          assoc: b.assoc ?? assoc,
        }));
      }

      case "CHOICE": {
        /** @type {LoweredBranch[]} */
        const result = [];
        /** @type {Set<string>} */
        const seen = new Set();
        for (const member of node.members ?? []) {
          const branches = lowerNode(member, currentRuleName, inlineStack);
          for (const b of branches) {
            const key = `${b.symbols.join("\0")}\0${b.precedence ?? ""}\0${
              b.assoc ?? ""
            }`;
            if (!seen.has(key)) {
              seen.add(key);
              result.push(b);
            }
          }
        }
        return result;
      }

      case "SEQ": {
        /** @type {LoweredBranch[]} */
        let acc = [{ symbols: [] }];
        for (const member of node.members ?? []) {
          const memberBranches = lowerNode(
            member,
            currentRuleName,
            inlineStack
          );
          /** @type {LoweredBranch[]} */
          const nextAcc = [];
          for (const a of acc) {
            for (const b of memberBranches) {
              nextAcc.push({
                symbols: [...a.symbols, ...b.symbols],
                precedence: b.precedence ?? a.precedence,
                assoc: b.assoc ?? a.assoc,
              });
            }
          }
          acc = nextAcc;
        }
        return acc;
      }

      case "REPEAT1":
      case "REPEAT": {
        if (!node.content) {
          return [{ symbols: [] }];
        }
        const contentBranches = lowerNode(
          node.content,
          currentRuleName,
          inlineStack
        );
        let hasEmpty = node.type === "REPEAT";
        /** @type {LoweredBranch[]} */
        const nonEmptyBranches = [];
        for (const b of contentBranches) {
          if (b.symbols.length === 0) {
            hasEmpty = true;
            continue;
          }
          nonEmptyBranches.push(b);
        }
        if (nonEmptyBranches.length === 0) {
          return [{ symbols: [] }];
        }
        const sig = nonEmptyBranches
          .map(
            (b) =>
              `${b.symbols.join("\0")}\0${b.precedence ?? ""}\0${b.assoc ?? ""}`
          )
          .join("\n");
        let repName = repeatRuleBySig.get(sig);
        if (!repName) {
          repName = `_${currentRuleName}_repeat${++repeatCounter}`;
          repeatRuleBySig.set(sig, repName);
          for (const b of nonEmptyBranches) {
            rawProductions.push({
              name: repName,
              symbols: [...b.symbols],
              actions: [],
              precedence: b.precedence,
              assoc: b.assoc,
            });
            rawProductions.push({
              name: repName,
              symbols: [repName, ...b.symbols],
              actions: [],
              precedence: b.precedence,
              assoc: b.assoc,
            });
          }
        }
        return hasEmpty
          ? [{ symbols: [repName] }, { symbols: [] }]
          : [{ symbols: [repName] }];
      }

      default:
        return [{ symbols: [] }];
    }
  }

  for (const rName of ruleNames) {
    if (terminalRuleNames.has(rName) || inlineSet.has(rName)) {
      continue;
    }
    const ruleNode = grammarRules[rName];
    const unwrapped = unwrapMeta(ruleNode);

    if (
      (unwrapped.type === "REPEAT1" || unwrapped.type === "REPEAT") &&
      unwrapped === ruleNode &&
      unwrapped.content
    ) {
      const contentBranches = lowerNode(
        unwrapped.content,
        rName,
        new Set([rName])
      );
      if (unwrapped.type === "REPEAT") {
        nullableRules.add(rName);
      }
      for (const b of contentBranches) {
        if (b.symbols.length === 0) {
          nullableRules.add(rName);
          continue;
        }
        rawProductions.push({
          name: rName,
          symbols: [...b.symbols],
          actions: [],
          precedence: b.precedence,
          assoc: b.assoc,
        });
        rawProductions.push({
          name: rName,
          symbols: [rName, ...b.symbols],
          actions: [],
          precedence: b.precedence,
          assoc: b.assoc,
        });
      }
      continue;
    }

    const branches = lowerNode(ruleNode, rName, new Set([rName]));
    for (const b of branches) {
      if (b.symbols.length === 0) {
        nullableRules.add(rName);
        continue;
      }
      rawProductions.push({
        name: rName,
        symbols: b.symbols,
        actions: [],
        precedence: b.precedence,
        assoc: b.assoc,
      });
    }
  }

  if (nullableRules.size > 0) {
    let changed = true;
    while (changed) {
      changed = false;
      for (const prod of rawProductions) {
        if (
          !nullableRules.has(prod.name) &&
          prod.symbols.every((s) => nullableRules.has(s))
        ) {
          nullableRules.add(prod.name);
          changed = true;
        }
      }
    }

    /** @type {typeof rawProductions} */
    const expandedProductions = [];
    /** @type {Set<string>} */
    const prodDedup = new Set();

    for (const prod of rawProductions) {
      /** @type {string[][]} */
      let symbolCombinations = [[]];
      for (const sym of prod.symbols) {
        /** @type {string[][]} */
        const nextCombos = [];
        for (const prefix of symbolCombinations) {
          nextCombos.push([...prefix, sym]);
          if (nullableRules.has(sym) && sym !== prod.name) {
            nextCombos.push([...prefix]);
          }
        }
        symbolCombinations = nextCombos;
      }

      for (const syms of symbolCombinations) {
        if (syms.length === 0) {
          continue;
        }
        const key = `${prod.name}\0${syms.join("\0")}\0${
          prod.precedence ?? ""
        }\0${prod.assoc ?? ""}`;
        if (!prodDedup.has(key)) {
          prodDedup.add(key);
          expandedProductions.push({
            name: prod.name,
            symbols: syms,
            actions: [...prod.actions],
            precedence: prod.precedence,
            assoc: prod.assoc,
          });
        }
      }
    }
    rawProductions.length = 0;
    for (const prod of expandedProductions) {
      rawProductions.push(prod);
    }
  }

  // Detect delimited rules wrapping IMMEDIATE_TOKENs (such as `string` in tree-sitter-json)
  const immediateTokenNames = new Set(
    Array.from(tokenByName.values())
      .filter((t) => t.isImmediate)
      .map((t) => t.name)
  );

  if (immediateTokenNames.size > 0) {
    /** @type {Map<string, typeof rawProductions>} */
    const prodsByName = new Map();
    for (const prod of rawProductions) {
      let list = prodsByName.get(prod.name);
      if (!list) {
        list = [];
        prodsByName.set(prod.name, list);
      }
      list.push(prod);
    }

    /** @type {Set<string>} */
    const immediateOnlyRules = new Set();
    let immChanged = true;
    while (immChanged) {
      immChanged = false;
      for (const [rName, prods] of prodsByName.entries()) {
        if (immediateOnlyRules.has(rName) || rName === startRuleName) {
          continue;
        }
        const allImm = prods.every(
          (p) =>
            p.symbols.length > 0 &&
            p.symbols.every(
              (s) =>
                s === rName ||
                immediateTokenNames.has(s) ||
                immediateOnlyRules.has(s)
            )
        );
        if (allImm) {
          immediateOnlyRules.add(rName);
          immChanged = true;
        }
      }
    }

    for (const [rName, prods] of prodsByName.entries()) {
      if (immediateOnlyRules.has(rName)) {
        continue;
      }
      const usesImmediate = prods.some((p) =>
        p.symbols.some(
          (s) => immediateTokenNames.has(s) || immediateOnlyRules.has(s)
        )
      );
      if (!usesImmediate) {
        continue;
      }

      const isDelimited = prods.every((p) => {
        if (p.symbols.length < 2) {
          return false;
        }
        const openSym = p.symbols[0];
        const closeSym = p.symbols[p.symbols.length - 1];
        if (!tokenByName.has(openSym) || !tokenByName.has(closeSym)) {
          return false;
        }
        for (let i = 1; i < p.symbols.length - 1; i++) {
          const mid = p.symbols[i];
          if (!immediateTokenNames.has(mid) && !immediateOnlyRules.has(mid)) {
            return false;
          }
        }
        return true;
      });

      if (isDelimited) {
        const modeName = `imm_${rName}`;
        /** @type {Set<string>} */
        const visitedRules = new Set();
        /** @type {Set<string>} */
        const reachableImmTokens = new Set();

        /**
         * @param {string} sym
         */
        const collectImmTokens = (sym) => {
          if (immediateTokenNames.has(sym)) {
            reachableImmTokens.add(sym);
            return;
          }
          if (immediateOnlyRules.has(sym) && !visitedRules.has(sym)) {
            visitedRules.add(sym);
            for (const subProd of prodsByName.get(sym) ?? []) {
              for (const s of subProd.symbols) {
                collectImmTokens(s);
              }
            }
          }
        };

        for (const p of prods) {
          const closeSym = p.symbols[p.symbols.length - 1];
          const closeTok = tokenByName.get(closeSym);
          if (closeTok && !closeTok.state.includes(modeName)) {
            closeTok.state.push(modeName);
          }
          for (let i = 1; i < p.symbols.length - 1; i++) {
            collectImmTokens(p.symbols[i]);
          }
          p.actions = [
            { at: 0, code: `lexer.push('${modeName}')` },
            { at: p.symbols.length - 1, code: "lexer.pop()" },
          ];
        }

        for (const immTokName of reachableImmTokens) {
          const immTok = tokenByName.get(immTokName);
          if (immTok) {
            immTok.state = immTok.state.filter((s) => s !== "initial");
            if (!immTok.state.includes(modeName)) {
              immTok.state.push(modeName);
            }
          }
        }
      }
    }
  }

  // Order start rule productions first
  const startProds = rawProductions.filter((p) => p.name === startRuleName);
  const otherProds = rawProductions.filter((p) => p.name !== startRuleName);
  const orderedProds = [...startProds, ...otherProds];

  // Sort tokens: higher lexPrec first, then STRING literals before PATTERN/TOKEN, then non-word before word, then extras last
  const sortedTokens = Array.from(tokenByName.values()).sort((a, b) => {
    if (a.isExtra !== b.isExtra) {
      return a.isExtra ? 1 : -1;
    }
    if (a.lexPrec !== b.lexPrec) {
      return b.lexPrec - a.lexPrec;
    }
    if (a.isString !== b.isString) {
      return a.isString ? -1 : 1;
    }
    if (a.isWord !== b.isWord) {
      return a.isWord ? 1 : -1;
    }
    return a.order - b.order;
  });

  const allLexerStates = Array.from(
    new Set(["initial", ...sortedTokens.flatMap((t) => t.state)])
  );

  let uid = 0;
  /** @type {Token[]} */
  const tokens = sortedTokens.map((t) => ({
    uid: uid++,
    name: t.name,
    expr: t.expr,
    state: t.state,
  }));

  tokens.push(
    {
      uid: uid++,
      name: EOF,
      expr: "",
      state: allLexerStates,
    },
    {
      uid: uid++,
      name: ERROR,
      expr: "",
      state: allLexerStates,
    }
  );

  /** @type {Rule[]} */
  const rules = orderedProds.map((p) => ({
    uid: uid++,
    name: p.name,
    symbols: p.symbols,
    actions: p.actions,
    precedence: p.precedence,
    assoc: p.assoc,
  }));

  return generateParser(
    { tokens, rules, word: grammar.word },
    {
      ...options,
      skipTokens,
      word: options?.word ?? grammar.word,
    }
  );
}

export { generate as generateFromTreesitter };
