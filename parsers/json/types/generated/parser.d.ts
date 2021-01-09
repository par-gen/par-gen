export type Node = {
    name: string;
    start: number;
    end: number;
    value: Uint8Array;
    items: Node[];
};
/**
 * @typedef {Object} Node
 * @property {string} name
 * @property {number} start
 * @property {number} end
 * @property {Uint8Array} value
 * @property {Node[]} items
 */
/**
 * @param {Uint8Array | string} input
 * @returns {Node}
 */
export function parse(input: Uint8Array | string): Node;
