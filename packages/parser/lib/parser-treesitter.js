/**
 * @typedef {import('@par-gen/grammar/types/parser').Token} Token
 */

import { generateFromTokens } from "@par-gen/lexer";

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
 * @typedef {Object} TreeSitterNode
 * @property {string} type
 * @property {string} [value]
 * @property {any[]} [members]
 * @property {TreeSitterNode} [content]
 */

/**
 * @param {string} input
 * @returns {ParserData}
 */

export function generate(input) {
  const grammar = JSON.parse(input);
  const tokens = new Set();
  tokens.add("@par-gen.EOF");
  tokens.add("@par-gen.ERROR");

  /**
   * @param {TreeSitterNode} param0
   * @returns {string[]}
   */
  function getTokens({ type, value, members, content }) {
    if (type === "STRING" && typeof value !== "undefined") {
      return [value];
    }

    if (type === "PATTERN" && typeof value !== "undefined") {
      return [value];
    }

    if (Array.isArray(members)) {
      return members.flatMap((member) => getTokens(member));
    }

    if (content) {
      return getTokens(content);
    }

    return [];
  }

  Object.keys(grammar.rules).forEach((ruleName) => {
    const rule = grammar.rules[ruleName];
    getTokens(rule).forEach((token) => tokens.add(token));
  });

  const lexerData = generateFromTokens(
    Array.from(tokens).map((token, index) => {
      return {
        uid: index,
        name: token,
        expr: token === "[" || token === "]" ? `\\${token}` : token,
        state: [],
      };
    })
  );

  return {
    rules: [],
    states: [],
    parserSymbols: [],
    parserSymbolIds: [],
    grammarRuleNames: [],
    actions: new Map(),
    goto: new Map(),
    start: new Set(),
    lexerData: {
      initial: lexerData,
    },
  };
}
