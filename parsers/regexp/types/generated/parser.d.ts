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
export class CstNode {
    constructor(stream: any, tree: any, pointer: any);
    get name(): string;
    get start(): number;
    get end(): number;
    get value(): any;
    get items(): any[] | undefined;
    get __tree(): any;
    get __pointer(): any;
    cursor(): TreeCursor;
    toJSON(): {
        name: string;
        start: number;
        end: number;
        value: any;
        items: any[] | undefined;
    };
    #private;
}
export class TreeCursor {
    constructor(stream: any, tree: any, pointer: any);
    get name(): string;
    get symbolId(): number;
    get childCount(): number;
    get isLeaf(): boolean;
    get start(): number;
    get end(): number;
    get value(): any;
    get pointer(): any;
    get depth(): number;
    reset(): boolean;
    gotoFirstChild(): boolean;
    gotoNextSibling(): boolean;
    gotoParent(): boolean;
    currentNode(): CstNode;
    #private;
}
