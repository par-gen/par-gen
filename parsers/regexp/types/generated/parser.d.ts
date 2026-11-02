declare class TreeCursor {
    #private;
    constructor(stream: any, tree: any, pointer: any);
    get name(): string;
    get symbolId(): number;
    get childCount(): number;
    get isLeaf(): boolean;
    get start(): number;
    get end(): number;
    get value(): any;
    get text(): string;
    get pointer(): any;
    get depth(): number;
    reset(): boolean;
    gotoFirstChild(): boolean;
    gotoNextSibling(): boolean;
    gotoParent(): boolean;
    currentNode(): CstNode;
}
declare class CstNode {
    #private;
    constructor(stream: any, tree: any, pointer: any);
    get name(): string;
    get symbolId(): number;
    get childCount(): number;
    get isLeaf(): boolean;
    get start(): number;
    get end(): number;
    get value(): any;
    get text(): string;
    get firstChild(): CstNode | undefined;
    get lastChild(): CstNode | undefined;
    child(index: any): CstNode | undefined;
    childByName(name: any): CstNode | undefined;
    childrenByName(name: any): any[];
    get items(): any[] | undefined;
    get __tree(): any;
    get __pointer(): any;
    cursor(): TreeCursor;
    toSExpr(includeText?: boolean): string;
    toJSON(): {
        name: string;
        start: number;
        end: number;
        value: any;
        items: any[] | undefined;
    };
}
declare class LineIndex {
    #private;
    constructor(input: any);
    locationForOffset(offset: any): {
        line: number;
        column: number;
    };
}
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
declare function parse(input: Uint8Array | string): Node;
export { parse, CstNode, TreeCursor, LineIndex };
