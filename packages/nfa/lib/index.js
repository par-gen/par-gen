export { Epsilon } from "./constants.js";
export { NFA } from "./nfa.js";
export { convertNode } from "./regexp.js";
export { fromRegExp, fromRegExpParseTree } from "./thompson.js";
export { parse as parseRegExp } from "@par-gen/regexp";

/**
 * @typedef {import('@par-gen/regexp/types/generated/parser').Node} Node
 */

/**
 * @param {Node} left
 * @param {Node} right
 * @returns {Node}
 */
export function createChoiceTree(left, right) {
  return {
    name: "Union",
    start: -1,
    end: -1,
    value: undefined,
    items: [
      left,
      {
        name: "UNION",
        start: -1,
        end: -1,
        value: undefined,
        items: undefined,
      },
      right,
    ],
  };
}
