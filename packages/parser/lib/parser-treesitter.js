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
 * @property {Array<Array<string | { type: string, value?: string, name?: string }>>} [precedences]
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
 * @param {string} prop
 * @param {boolean} isNegatedProp
 * @returns {string}
 */
function unicodePropertyClassRange(prop, isNegatedProp) {
  const p = prop.trim();
  if (
    p === "XID_Start" ||
    p === "ID_Start" ||
    p === "L" ||
    p === "Letter" ||
    p === "Alpha" ||
    p === "Alphabetic" ||
    p === "Ll" ||
    p === "Lu" ||
    p === "Lt" ||
    p === "Lm" ||
    p === "Lo"
  ) {
    return isNegatedProp ? "\\x00-\\x40\\x5b-\\x60\\x7b-\\x7f" : "a-zA-Z\\x80-\\xff";
  }
  if (p === "XID_Continue" || p === "ID_Continue" || p === "Alnum") {
    return isNegatedProp
      ? "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x5e\\x60\\x7b-\\x7f"
      : "a-zA-Z0-9_\\x80-\\xff";
  }
  if (p === "Nd" || p === "Digit" || p === "Decimal_Number") {
    return isNegatedProp ? "\\x00-\\x2f\\x3a-\\xff" : "0-9";
  }
  if (p === "Zs" || p === "Space_Separator" || p === "White_Space") {
    return isNegatedProp ? "\\x00-\\x1f\\x21-\\xff" : " ";
  }
  return isNegatedProp ? "\\x00-\\x7f" : "a-zA-Z0-9_\\x80-\\xff";
}

/**
 * @param {string} pattern
 * @param {number} i
 * @param {string} esc
 * @returns {{ codePoint: number, isUnicode: boolean, nextIdx: number } | null}
 */
function parseHexOrUnicodeEscape(pattern, i, esc) {
  const len = pattern.length;
  if (esc === "x" && i + 2 <= len) {
    const hex = pattern.slice(i, i + 2);
    if (/^[0-9a-fA-F]{2}$/.test(hex)) {
      return { codePoint: parseInt(hex, 16), isUnicode: false, nextIdx: i + 2 };
    }
  } else if (esc === "u") {
    if (pattern[i] === "{") {
      const closeBrace = pattern.indexOf("}", i + 1);
      if (closeBrace !== -1) {
        const cp = parseInt(pattern.slice(i + 1, closeBrace), 16);
        return {
          codePoint: Number.isNaN(cp) ? 0 : cp,
          isUnicode: true,
          nextIdx: closeBrace + 1,
        };
      }
    } else if (i + 4 <= len) {
      const hex = pattern.slice(i, i + 4);
      if (/^[0-9a-fA-F]{4}$/.test(hex)) {
        return {
          codePoint: parseInt(hex, 16),
          isUnicode: true,
          nextIdx: i + 4,
        };
      }
    }
  }
  return null;
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

  /** @type {Array<{ type: 'byte', value: number, isUnicodeCp?: boolean } | { type: 'dash' } | { type: 'raw', value: string }>} */
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
      } else if ((esc === "p" || esc === "P") && pattern[i] === "{") {
        const closeBrace = pattern.indexOf("}", i + 1);
        if (closeBrace !== -1) {
          const prop = pattern.slice(i + 1, closeBrace);
          items.push({
            type: "raw",
            value: unicodePropertyClassRange(prop, esc === "P"),
          });
          i = closeBrace + 1;
        } else {
          items.push({ type: "byte", value: esc.charCodeAt(0) });
        }
      } else if (esc === "x" || esc === "u") {
        const parsedHex = parseHexOrUnicodeEscape(pattern, i, esc);
        if (parsedHex) {
          items.push({
            type: "byte",
            value: parsedHex.codePoint,
            isUnicodeCp: parsedHex.isUnicode,
          });
          i = parsedHex.nextIdx;
        } else {
          items.push({ type: "byte", value: esc.charCodeAt(0) });
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
      items.push({ type: "byte", value: code, isUnicodeCp: code > 0x7f });
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
      if (lo <= 0xff) {
        const clampedLo = Math.min(0xff, lo);
        const clampedHi = Math.min(0xff, hi);
        body += `${formatClassByte(clampedLo)}-${formatClassByte(clampedHi)}`;
      }
      k += 3;
    } else if (cur.type === "dash") {
      body += "\\x2d";
      k += 1;
    } else if (cur.type === "byte") {
      if (cur.value <= 0x7f || (!cur.isUnicodeCp && cur.value <= 0xff)) {
        body += formatClassByte(cur.value);
      }
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
      currentAlt.push("[^\\x0a]");
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
      } else if ((esc === "p" || esc === "P") && pattern[i] === "{") {
        const closeBrace = pattern.indexOf("}", i + 1);
        if (closeBrace !== -1) {
          const prop = pattern.slice(i + 1, closeBrace);
          currentAlt.push(
            `[${unicodePropertyClassRange(prop, esc === "P")}]`
          );
          i = closeBrace + 1;
        } else {
          currentAlt.push(escapeStringToRegex(esc));
        }
      } else if (esc === "x" || esc === "u") {
        const parsedHex = parseHexOrUnicodeEscape(pattern, i, esc);
        if (parsedHex) {
          if (!parsedHex.isUnicode) {
            currentAlt.push(
              `\\x${parsedHex.codePoint.toString(16).padStart(2, "0")}`
            );
          } else {
            const encoded = escapeStringToRegex(
              String.fromCodePoint(parsedHex.codePoint)
            );
            currentAlt.push(encoded.length > 4 ? `(${encoded})` : encoded);
          }
          i = parsedHex.nextIdx;
        } else {
          currentAlt.push(escapeStringToRegex(esc));
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
      const safeParts = parts.map((p) => {
        let inEscape = false;
        let inClass = false;
        let depth = 0;
        for (let i = 0; i < p.length; i++) {
          const ch = p[i];
          if (inEscape) {
            inEscape = false;
            continue;
          }
          if (ch === "\\") {
            inEscape = true;
            continue;
          }
          if (inClass) {
            if (ch === "]") {
              inClass = false;
            }
            continue;
          }
          if (ch === "[") {
            inClass = true;
            continue;
          }
          if (ch === "(") {
            depth++;
          } else if (ch === ")") {
            depth--;
          } else if (ch === "|" && depth === 0) {
            return `(${p})`;
          }
        }
        return p;
      });
      return `(${safeParts.join("")})`;
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
 * Checks whether a Tree-sitter node is a contiguous sequence of terminal tokens
 * where every subsequent token after the first is an `IMMEDIATE_TOKEN` (or optional
 * immediate token). Examples in `tree-sitter-css`:
 * - `color_value`: `seq('#', token.immediate(/[0-9a-fA-F]{3,8}/))`
 * - `integer_value`: `seq(token(...), optional($.unit))` where `unit` is `token.immediate(...)`
 *
 * @param {TreeSitterNode} node
 * @param {{ [ruleName: string]: TreeSitterNode }} rules
 * @param {Set<string>=} visited
 * @returns {boolean}
 */
function isContiguousImmediateTokenSeq(node, rules, visited = new Set()) {
  const unwrapped = unwrapMeta(node);
  if (unwrapped.type !== "SEQ" || !Array.isArray(unwrapped.members) || unwrapped.members.length < 2) {
    return false;
  }

  /**
   * @param {TreeSitterNode} m
   * @param {boolean} requireImmediate
   * @returns {boolean}
   */
  const checkMember = (m, requireImmediate) => {
    const u = unwrapMeta(m);
    if (u.type === "BLANK") {
      return true;
    }
    if (u.type === "CHOICE" && Array.isArray(u.members)) {
      return u.members.every((sub) => checkMember(sub, requireImmediate));
    }
    if (u.type === "IMMEDIATE_TOKEN") {
      return ruleToRegex(u, rules) !== "";
    }
    if (!requireImmediate && (u.type === "STRING" || u.type === "PATTERN" || u.type === "TOKEN" || u.type === "CHARACTER_SET")) {
      return ruleToRegex(u, rules) !== "";
    }
    if (u.type === "SYMBOL" && u.name && rules[u.name] && !visited.has(u.name)) {
      const nextVisited = new Set(visited);
      nextVisited.add(u.name);
      return checkMember(rules[u.name], requireImmediate);
    }
    return false;
  };

  if (!checkMember(unwrapped.members[0], false)) {
    return false;
  }
  for (let i = 1; i < unwrapped.members.length; i++) {
    if (!checkMember(unwrapped.members[i], true)) {
      return false;
    }
  }
  return true;
}

/**
 * Collects all unnamed ALIAS mappings (`alias($.sym, "literal")`) in the grammar.
 * Used to infer literal fallbacks for external scanner symbols (e.g. `_pseudo_class_selector_colon` -> `":"` in CSS).
 *
 * @param {{ [ruleName: string]: TreeSitterNode }} rules
 * @returns {Map<string, Set<string>>}
 */
function collectUnnamedSymbolAliases(rules) {
  /** @type {Map<string, Set<string>>} */
  const aliasMap = new Map();
  /**
   * @param {TreeSitterNode | undefined} node
   */
  const walk = (node) => {
    if (!node || typeof node !== "object") {
      return;
    }
    if (
      node.type === "ALIAS" &&
      node.named === false &&
      typeof node.value === "string" &&
      node.content?.type === "SYMBOL" &&
      typeof node.content.name === "string"
    ) {
      let set = aliasMap.get(node.content.name);
      if (!set) {
        set = new Set();
        aliasMap.set(node.content.name, set);
      }
      set.add(node.value);
    }
    if (node.content) {
      walk(node.content);
    }
    if (Array.isArray(node.members)) {
      for (const m of node.members) {
        walk(m);
      }
    }
  };
  for (const r of Object.values(rules)) {
    walk(r);
  }
  return aliasMap;
}

/**
 * Built-in declarative fallbacks for common stateless external scanner tokens
 * in popular Tree-sitter grammars (e.g. `tree-sitter-toml`, `tree-sitter-css`).
 * Can also be overridden or extended via `options.externals`.
 *
 * @type {Record<string, Record<string, TreeSitterNode>>}
 */
const BUILTIN_EXTERNAL_OVERRIDES = {
  toml: {
    _line_ending_or_eof: {
      type: "CHOICE",
      members: [
        { type: "PATTERN", value: "\\r?\\n" },
        { type: "BLANK" },
      ],
    },
    _multiline_basic_string_content: {
      type: "IMMEDIATE_TOKEN",
      content: { type: "PATTERN", value: '""?[^"\\\\]' },
    },
    _multiline_basic_string_end: {
      type: "STRING",
      value: '"""',
    },
    _multiline_literal_string_content: {
      type: "IMMEDIATE_TOKEN",
      content: { type: "PATTERN", value: "''?[^']" },
    },
    _multiline_literal_string_end: {
      type: "STRING",
      value: "'''",
    },
  },
  css: {
    _descendant_operator: {
      type: "BLANK",
    },
    _pseudo_class_selector_colon: {
      type: "STRING",
      value: ":",
    },
    __error_recovery: {
      type: "BLANK",
    },
    plain_value: {
      type: "PATTERN",
      value: "[-_a-zA-Z][a-zA-Z0-9-_]*",
    },
  },
};

/**
 * @typedef {ParseOptions & { externals?: Record<string, TreeSitterNode> }} TreeSitterParseOptions
 */

const PREC_NAME_PREFIX = "S:";
const PREC_SYMBOL_PREFIX = "R:";

/**
 * Check whether `expr` contains an unescaped negated character class (`[^...]`).
 *
 * @param {string} expr
 * @returns {boolean}
 */
export function hasUnescapedNegatedCharClass(expr) {
  let inEscape = false;
  let inClass = false;
  for (let i = 0; i < expr.length; i++) {
    const ch = expr[i];
    if (inEscape) {
      inEscape = false;
      continue;
    }
    if (ch === "\\") {
      inEscape = true;
      continue;
    }
    if (inClass) {
      if (ch === "]") {
        inClass = false;
      }
      continue;
    }
    if (ch === "[") {
      if (expr[i + 1] === "^") {
        return true;
      }
      inClass = true;
    }
  }
  return false;
}

/**
 * Score a token regex expression by lexical specificity (higher = more specific):
 * - `3`: Fixed string literals (`isKeywordLike === true`) or pure literal unions (e.g. `(true|false)`)
 * - `2`: Structured regex tokens (multi-part identifiers like `[a-zA-Z_$][a-zA-Z0-9_$]*`, numbers, dates)
 * - `1`: Broad single-character-class repeats (`/^\[\^?[^\]]+\][+*]$/` matching both letters and digits)
 * - `0`: Catch-all negated character class / wildcard / whitespace tokens
 *
 * @param {string} expr
 * @param {boolean} [isKeywordLike=false]
 * @returns {number}
 */
export function computeTokenSpecificity(expr, isKeywordLike = false) {
  if (isKeywordLike) {
    return 3;
  }
  if (/^\(?[a-zA-Z0-9_]+(\|[a-zA-Z0-9_]+)*\)?$/.test(expr)) {
    return 3;
  }
  if (
    hasUnescapedNegatedCharClass(expr) ||
    /(^|[^\\])\\s/.test(expr) ||
    /(^|[^\\])\./.test(expr)
  ) {
    return 0;
  }
  if (/^\[(?=[^\]]*[a-zA-Z])(?=[^\]]*[0-9])[^\^\]][^\]]*\][+*]$/.test(expr)) {
    return 1;
  }
  return 2;
}

/**
 * Structurally infer the grammar's primary word/identifier token when `grammar.word`
 * is not explicitly declared:
 * 1. Explicit `options?.word` or `grammar.word`
 * 2. Top-level `"identifier"` rule if present
 * 3. First top-level single-`PATTERN` rule whose pattern is an unnegated ASCII letter/alphanumeric
 *    character-class repetition (`/^\[(?=[^\]]*a-z)(?=[^\]]*A-Z)[^\^\]][^\]]*\][+*]$/`).
 *
 * @param {TreeSitterGrammar} grammar
 * @param {Record<string, TreeSitterNode>} grammarRules
 * @param {string=} explicitWord
 * @returns {string | undefined}
 */
function inferWordToken(grammar, grammarRules, explicitWord) {
  if (explicitWord) {
    return explicitWord;
  }
  if (grammar.word) {
    return grammar.word;
  }
  if (Object.prototype.hasOwnProperty.call(grammarRules, "identifier")) {
    return "identifier";
  }
  const names = Object.keys(grammarRules);
  for (let i = 1; i < names.length; i++) {
    const rName = names[i];
    if (rName.startsWith("_")) {
      continue;
    }
    const unwrapped = unwrapMeta(grammarRules[rName]);
    if (
      unwrapped.type === "PATTERN" &&
      typeof unwrapped.value === "string" &&
      /^\[(?=[^\]]*a-z)(?=[^\]]*A-Z)[^\^\]][^\]]*\][+*]$/.test(unwrapped.value)
    ) {
      return rName;
    }
  }
  return undefined;
}

/**
 * @param {string | TreeSitterGrammar} input
 * @param {TreeSitterParseOptions=} options
 * @returns {ParserData}
 */
export function generate(input, options) {
  /** @type {TreeSitterGrammar} */
  const grammar = typeof input === "string" ? JSON.parse(input) : input;
  const grammarRules = { ...(grammar.rules ?? {}) };
  const ruleNames = Object.keys(grammarRules);
  if (ruleNames.length === 0) {
    throw new Error("Tree-sitter grammar contains no rules");
  }
  const startRuleName = ruleNames[0];
  const effectiveWord = inferWordToken(grammar, grammarRules, options?.word);

  // Handle `externals` and built-in/user rule overrides: apply options.externals, built-in overrides, or automatic alias/blank inference
  const builtinMap = (grammar.name && BUILTIN_EXTERNAL_OVERRIDES[grammar.name]) || {};
  const userExternals = options?.externals ?? {};
  for (const [overrideName, overrideNode] of Object.entries({ ...builtinMap, ...userExternals })) {
    grammarRules[overrideName] = overrideNode;
    if (!ruleNames.includes(overrideName)) {
      ruleNames.push(overrideName);
    }
  }
  if (Array.isArray(grammar.externals) && grammar.externals.length > 0) {
    const unnamedAliases = collectUnnamedSymbolAliases(grammarRules);

    for (const ext of grammar.externals) {
      if (ext.type === "SYMBOL" && typeof ext.name === "string") {
        const extName = ext.name;
        if (grammarRules[extName] !== undefined) {
          continue;
        }
        const aliases = unnamedAliases.get(extName);
        if (aliases && aliases.size === 1) {
          const [literalVal] = aliases;
          grammarRules[extName] = { type: "STRING", value: literalVal };
        } else {
          grammarRules[extName] = { type: "BLANK" };
        }
        if (!ruleNames.includes(extName)) {
          ruleNames.push(extName);
        }
      }
    }
  }

  // Resolve named `precedences` (which may form a DAG across multiple sub-arrays and include SYMBOL entries)
  /** @type {Map<string, number>} */
  const namedPrecMap = new Map();
  /** @type {Map<string, number>} */
  const symbolDefaultPrecMap = new Map();
  if (Array.isArray(grammar.precedences)) {
    /** @type {Array<{ key: string, isSymbol: boolean }[]>} */
    const groups = [];
    /** @type {Set<string>} */
    const allKeys = new Set();
    /** @type {Map<string, Set<string>>} */
    const lowerNeighbors = new Map();

    for (const group of grammar.precedences) {
      if (!Array.isArray(group)) {
        continue;
      }
      /** @type {{ key: string, isSymbol: boolean }[]} */
      const parsedGroup = [];
      for (const entry of group) {
        if (typeof entry === "string") {
          parsedGroup.push({ key: `${PREC_NAME_PREFIX}${entry}`, isSymbol: false });
        } else if (entry && typeof entry === "object") {
          if (entry.type === "SYMBOL" && typeof entry.name === "string") {
            parsedGroup.push({ key: `${PREC_SYMBOL_PREFIX}${entry.name}`, isSymbol: true });
          } else if (typeof entry.value === "string") {
            parsedGroup.push({ key: `${PREC_NAME_PREFIX}${entry.value}`, isSymbol: false });
          }
        }
      }
      for (const item of parsedGroup) {
        allKeys.add(item.key);
        if (!lowerNeighbors.has(item.key)) {
          lowerNeighbors.set(item.key, new Set());
        }
      }
      for (let i = 0; i < parsedGroup.length; i++) {
        for (let j = i + 1; j < parsedGroup.length; j++) {
          if (parsedGroup[i].key !== parsedGroup[j].key) {
            lowerNeighbors.get(parsedGroup[i].key)?.add(parsedGroup[j].key);
          }
        }
      }
      groups.push(parsedGroup);
    }

    // Compute longest path in DAG so if A appears before B in any precedence list, rank(A) > rank(B)
    /** @type {Map<string, number>} */
    const rankMemo = new Map();
    /** @type {Set<string>} */
    const visiting = new Set();
    /**
     * @param {string} key
     * @returns {number}
     */
    const getRank = (key) => {
      if (rankMemo.has(key)) {
        return /** @type {number} */ (rankMemo.get(key));
      }
      if (visiting.has(key)) {
        return 1;
      }
      visiting.add(key);
      let maxChild = 0;
      for (const lower of lowerNeighbors.get(key) ?? []) {
        const r = getRank(lower);
        if (r > maxChild) {
          maxChild = r;
        }
      }
      visiting.delete(key);
      const rank = maxChild + 1;
      rankMemo.set(key, rank);
      return rank;
    };

    for (const key of allKeys) {
      const score = getRank(key) * 10;
      if (key.startsWith(PREC_NAME_PREFIX)) {
        namedPrecMap.set(key.slice(PREC_NAME_PREFIX.length), score);
      } else if (key.startsWith(PREC_SYMBOL_PREFIX)) {
        symbolDefaultPrecMap.set(key.slice(PREC_SYMBOL_PREFIX.length), score);
      }
    }
  }

  const inlineSet = new Set(grammar.inline ?? []);
  inlineSet.delete(startRuleName);

  // Identify rules referenced directly as SYMBOL in `extras`
  /** @type {Set<string>} */
  const extraSymbolNames = new Set();
  if (Array.isArray(grammar.extras)) {
    for (const extra of grammar.extras) {
      if (extra.type === "SYMBOL" && typeof extra.name === "string") {
        extraSymbolNames.add(extra.name);
      }
    }
  }

  /** @type {Map<string, ExtractedToken>} */
  const tokenByName = new Map();
  /** @type {Map<string, string>} */
  const stringValToTokenName = new Map();
  /** @type {Map<string, string>} */
  const inlinePatternToTokenName = new Map();
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
    // Avoid colliding with a non-terminal rule that has the exact same name as the string literal
    // (e.g., `permits` or `throws` in tree-sitter-java, `import` in tree-sitter-javascript, `type` in tree-sitter-python)
    const collidesWithRule =
      Object.prototype.hasOwnProperty.call(grammarRules, value) &&
      (value === startRuleName || unwrapMeta(grammarRules[value]).type !== "STRING");
    const name = collidesWithRule ? `'${value}'` : value;
    const expr = escapeStringToRegex(value);
    stringValToTokenName.set(value, name);
    tokenByName.set(name, {
      name,
      expr,
      state: ["initial"],
      isString: true,
      isImmediate: false,
      isWord: effectiveWord === name,
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
      } else if (extraSymbolNames.has(rName)) {
        const expr = escapeStringToRegex(strVal);
        tokenByName.set(rName, {
          name: rName,
          expr,
          state: ["initial"],
          isString: true,
          isImmediate: false,
          isWord: effectiveWord === rName,
          isExtra: true,
          lexPrec,
          order: tokenOrder++,
        });
        terminalRuleNames.add(rName);
      } else if (rName.startsWith("_")) {
        ensureStringToken(strVal, lexPrec);
        inlineSet.add(rName);
      }
    } else if (
      unwrapped.type === "PATTERN" ||
      unwrapped.type === "TOKEN" ||
      unwrapped.type === "IMMEDIATE_TOKEN" ||
      unwrapped.type === "CHARACTER_SET" ||
      extraSymbolNames.has(rName) ||
      isContiguousImmediateTokenSeq(rawRule, grammarRules, new Set([rName]))
    ) {
      const expr = ruleToRegex(rawRule, grammarRules);
      if (expr !== "") {
        const isImmediate = unwrapped.type === "IMMEDIATE_TOKEN";
        const lexPrec = extractLexicalPrecedence(rawRule, namedPrecMap);
        tokenByName.set(rName, {
          name: rName,
          expr,
          state: ["initial"],
          isString: false,
          isImmediate,
          isWord: effectiveWord === rName,
          isExtra: extraSymbolNames.has(rName),
          lexPrec,
          order: tokenOrder++,
        });
        terminalRuleNames.add(rName);
      }
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
          if (!skipTokens.includes(extra.name)) {
            skipTokens.push(extra.name);
          }
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
   * If a regex pattern is a single atom/class with a trailing `*` (0-or-more quantifier,
   * such as `[^"\\\n]*` in GraphQL or `[^`]*` in Go), convert the outer `*` to `+` so
   * the lexer token never matches 0 bytes, and return `{ nonEmptyExpr, isNullable: true }`.
   *
   * @param {string} expr
   * @returns {{ nonEmptyExpr: string, isNullable: boolean }}
   */
  function splitNullableRegexQuantifier(expr) {
    if (!expr.endsWith("*") || expr.endsWith("\\*")) {
      return { nonEmptyExpr: expr, isNullable: false };
    }
    const body = expr.slice(0, -1);
    const openChar = body[0];
    const closeChar = body[body.length - 1];
    if (
      (openChar === "[" && closeChar === "]") ||
      (openChar === "(" && closeChar === ")")
    ) {
      let inEscape = false;
      let inClass = openChar === "[";
      let depth = openChar === "(" ? 1 : 0;
      for (let i = 1; i < body.length - 1; i++) {
        const ch = body[i];
        if (inEscape) {
          inEscape = false;
        } else if (ch === "\\") {
          inEscape = true;
        } else if (inClass) {
          if (ch === "]") {
            if (openChar === "[") {
              return { nonEmptyExpr: expr, isNullable: false };
            }
            inClass = false;
          }
        } else if (ch === "[") {
          inClass = true;
        } else if (openChar === "(") {
          if (ch === "(") {
            depth++;
          } else if (ch === ")" && --depth === 0) {
            return { nonEmptyExpr: expr, isNullable: false };
          }
        }
      }
      if (depth <= 1 && (!inClass || openChar === "[")) {
        return { nonEmptyExpr: `${body}+`, isNullable: true };
      }
    }
    return { nonEmptyExpr: expr, isNullable: false };
  }

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
        // If TOKEN or IMMEDIATE_TOKEN wraps a single STRING literal (e.g. `token.immediate('(')` in C/CSS
        // or `token(prec(1, '['))` in CSS), reuse the canonical string token so it isn't shadowed in the DFA!
        const innerUnwrapped =
          (node.type === "TOKEN" || node.type === "IMMEDIATE_TOKEN") && node.content
            ? unwrapMeta(node.content)
            : null;
        const lexPrec = extractLexicalPrecedence(node, namedPrecMap);
        if (innerUnwrapped && innerUnwrapped.type === "STRING") {
          const tokName = ensureStringToken(String(innerUnwrapped.value ?? ""), lexPrec);
          return [{ symbols: [tokName] }];
        }

        const rawExpr = ruleToRegex(node, grammarRules);
        if (rawExpr === "") {
          return [{ symbols: [] }];
        }
        const { nonEmptyExpr: expr, isNullable } = splitNullableRegexQuantifier(rawExpr);
        // Treat inline negated character class patterns (like `[^"\\\n]+` inside string rules) as immediate-eligible
        const isNegatedCharClass = hasUnescapedNegatedCharClass(expr);
        const isImmediate = node.type === "IMMEDIATE_TOKEN" || isNegatedCharClass;
        if (!isImmediate) {
          const existingPatTok = inlinePatternToTokenName.get(expr);
          if (existingPatTok !== undefined) {
            const tok = tokenByName.get(existingPatTok);
            if (tok && lexPrec > tok.lexPrec) {
              tok.lexPrec = lexPrec;
            }
            return isNullable
              ? [{ symbols: [existingPatTok] }, { symbols: [] }]
              : [{ symbols: [existingPatTok] }];
          }
        }
        const tokName = `_${currentRuleName}_token${++anonTokenCounter}`;
        if (!isImmediate) {
          inlinePatternToTokenName.set(expr, tokName);
        }
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
        return isNullable
          ? [{ symbols: [tokName] }, { symbols: [] }]
          : [{ symbols: [tokName] }];
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
    const defaultPrec = symbolDefaultPrecMap.get(rName);

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
          precedence: b.precedence ?? defaultPrec,
          assoc: b.assoc,
        });
        rawProductions.push({
          name: rName,
          symbols: [rName, ...b.symbols],
          actions: [],
          precedence: b.precedence ?? defaultPrec,
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
        precedence: b.precedence ?? defaultPrec,
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

    // Track which rules actually have at least one non-empty production
    /** @type {Set<string>} */
    const nonEmptyRuleNames = new Set();
    for (const prod of rawProductions) {
      if (prod.symbols.some((s) => !nullableRules.has(s) || tokenByName.has(s))) {
        nonEmptyRuleNames.add(prod.name);
      }
    }
    let nonEmptyChanged = true;
    while (nonEmptyChanged) {
      nonEmptyChanged = false;
      for (const prod of rawProductions) {
        if (
          !nonEmptyRuleNames.has(prod.name) &&
          prod.symbols.some((s) => nonEmptyRuleNames.has(s) || tokenByName.has(s))
        ) {
          nonEmptyRuleNames.add(prod.name);
          nonEmptyChanged = true;
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
        const isPurelyEmpty =
          nullableRules.has(sym) &&
          !nonEmptyRuleNames.has(sym) &&
          !tokenByName.has(sym);
        for (const prefix of symbolCombinations) {
          if (!isPurelyEmpty) {
            nextCombos.push([...prefix, sym]);
          }
          if (nullableRules.has(sym) && sym !== prod.name) {
            nextCombos.push([...prefix]);
          }
        }
        symbolCombinations = nextCombos;
      }

      for (const syms of symbolCombinations) {
        if (
          syms.length === 0 ||
          (syms.length === 1 && syms[0] === prod.name)
        ) {
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

  // Detect delimited rules wrapping IMMEDIATE_TOKENs (such as `string` in tree-sitter-json,
  // `StringValue` in tree-sitter-graphql, `string_value` in tree-sitter-css, or `basic_string` in tree-sitter-toml)
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
    const terminalHelperRules = new Set();
    /** @type {Set<string>} */
    const rulesUsingImmediate = new Set();
    let immChanged = true;
    while (immChanged) {
      immChanged = false;
      for (const [rName, prods] of prodsByName.entries()) {
        if (
          rName === startRuleName ||
          (!rName.includes("_repeat") && !rName.endsWith("_content"))
        ) {
          continue;
        }
        if (!terminalHelperRules.has(rName)) {
          const allTerm = prods.every(
            (p) =>
              p.symbols.length > 0 &&
              p.symbols.every(
                (s) =>
                  s === rName ||
                  tokenByName.has(s) ||
                  terminalHelperRules.has(s)
              )
          );
          if (allTerm) {
            terminalHelperRules.add(rName);
            immChanged = true;
          }
        }
        if (!rulesUsingImmediate.has(rName)) {
          const usesImm = prods.some((p) =>
            p.symbols.some(
              (s) => immediateTokenNames.has(s) || rulesUsingImmediate.has(s)
            )
          );
          if (usesImm) {
            rulesUsingImmediate.add(rName);
            immChanged = true;
          }
        }
      }
    }

    for (const [rName, prods] of prodsByName.entries()) {
      if (terminalHelperRules.has(rName)) {
        continue;
      }
      const usesImmediate = prods.some((p) =>
        p.symbols.some(
          (s) => immediateTokenNames.has(s) || rulesUsingImmediate.has(s)
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
          if (!tokenByName.has(mid) && !terminalHelperRules.has(mid)) {
            return false;
          }
        }
        return true;
      });

      if (isDelimited) {
        // Group delimited productions by closing delimiter token so rules with multiple
        // quote types (e.g. `'` and `"` in CSS `string_value`) get dedicated lexer modes per quote!
        /** @type {Map<string, typeof prods>} */
        const prodsByCloseSym = new Map();
        for (const p of prods) {
          const closeSym = p.symbols[p.symbols.length - 1];
          let group = prodsByCloseSym.get(closeSym);
          if (!group) {
            group = [];
            prodsByCloseSym.set(closeSym, group);
          }
          group.push(p);
        }

        let groupIdx = 0;
        for (const [closeSym, groupProds] of prodsByCloseSym.entries()) {
          const modeName =
            prodsByCloseSym.size === 1
              ? `imm_${rName}`
              : `imm_${rName}_${groupIdx++}`;
          /** @type {Set<string>} */
          const visitedRules = new Set();
          /** @type {Set<string>} */
          const reachableMidTokens = new Set();

          /**
           * @param {string} sym
           */
          const collectMidTokens = (sym) => {
            if (tokenByName.has(sym)) {
              reachableMidTokens.add(sym);
              return;
            }
            if (terminalHelperRules.has(sym) && !visitedRules.has(sym)) {
              visitedRules.add(sym);
              for (const subProd of prodsByName.get(sym) ?? []) {
                for (const s of subProd.symbols) {
                  collectMidTokens(s);
                }
              }
            }
          };

          const closeTok = tokenByName.get(closeSym);
          if (closeTok && !closeTok.state.includes(modeName)) {
            closeTok.state.push(modeName);
          }
          for (const p of groupProds) {
            for (let i = 1; i < p.symbols.length - 1; i++) {
              collectMidTokens(p.symbols[i]);
            }
            p.actions = [
              { at: 0, code: `lexer.push('${modeName}')` },
              { at: p.symbols.length - 1, code: "lexer.pop()" },
            ];
          }

          for (const midTokName of reachableMidTokens) {
            const midTok = tokenByName.get(midTokName);
            if (midTok) {
              if (midTok.isImmediate) {
                midTok.state = midTok.state.filter((s) => s !== "initial");
              }
              if (!midTok.state.includes(modeName)) {
                midTok.state.push(modeName);
              }
            }
          }
        }
      }
    }
  }

  // If the grammar defines an explicit newline token (\n or \r?\n) in `"initial"`,
  // remove \x0a from whitespace `_extra_*` tokens so multi-char sequences like `\n\t` or `\n\n`
  // do not swallow statement-terminating newlines via maximal munch, and so horizontal whitespace
  // can be accelerated via `skipBytes`.
  const hasExplicitNewlineToken = Array.from(tokenByName.values()).some(
    (t) =>
      !t.isExtra &&
      t.state.includes("initial") &&
      (t.expr === "\\n" || t.expr === "\\r?\\n")
  );
  if (hasExplicitNewlineToken) {
    for (const t of tokenByName.values()) {
      if (t.isExtra && t.expr.includes("\\x09\\x0a\\x0b\\x0c\\x0d ")) {
        t.expr = t.expr.replace(
          /\\x09\\x0a\\x0b\\x0c\\x0d /g,
          "\\x09\\x0b\\x0c\\x0d "
        );
      }
    }
  }

  // Order start rule productions first
  const startProds = rawProductions.filter((p) => p.name === startRuleName);
  const otherProds = rawProductions.filter((p) => p.name !== startRuleName);
  const orderedProds = [...startProds, ...otherProds];

  // Filter out any non-extra tokens that are never referenced in any production
  // (e.g., helper immediate tokens like `unit` in CSS that were folded into `integer_value` / `float_value`)
  /** @type {Set<string>} */
  const referencedSymbols = new Set();
  for (const p of orderedProds) {
    for (const s of p.symbols) {
      referencedSymbols.add(s);
    }
  }

  // Sort tokens: higher lexPrec first, then STRING literals before PATTERN/TOKEN, then by token specificity when comparing word vs non-word tokens, then extras last
  const sortedTokens = Array.from(tokenByName.values())
    .filter((t) => t.isExtra || referencedSymbols.has(t.name))
    .sort((a, b) => {
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
        const wordTok = a.isWord ? a : b;
        if (computeTokenSpecificity(wordTok.expr, wordTok.isString) <= 1) {
          return a.isWord ? 1 : -1;
        }
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
    { tokens, rules, word: effectiveWord },
    {
      ...options,
      skipTokens,
      word: effectiveWord,
    }
  );
}

export { generate as generateFromTreesitter };
