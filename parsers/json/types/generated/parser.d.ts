declare const SymbolIds: Readonly<{
    WS: 0;
    TRUE: 1;
    FALSE: 2;
    NULL: 3;
    CURLY_OPEN: 4;
    CURLY_CLOSE: 5;
    COMMA: 6;
    COLON: 7;
    STRING: 8;
    BRACKET_OPEN: 9;
    BRACKET_CLOSE: 10;
    NUMBER: 11;
    "@par-gen.EOF": 12;
    "@par-gen.ERROR": 13;
    S: 14;
    Json: 15;
    Element: 16;
    Value: 17;
    Object: 18;
    Members: 19;
    Member: 20;
    Array: 21;
    Elements: 22;
}>;
declare class TreeCursor {
    #private;
    constructor(stream: any, tree: any, pointer: any);
    get name(): string;
    get symbolId(): number;
    get childCount(): number;
    get isLeaf(): boolean;
    get start(): any;
    get end(): any;
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
    get start(): any;
    get end(): any;
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
    reemitLossless(input: any): Buffer<ArrayBuffer>;
    toSExpr(includeText?: boolean): string;
    toJSON(): {
        name: string;
        start: any;
        end: any;
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
declare function reemitLossless(cst: any, input: any): any;
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
export { parse, CstNode, TreeCursor, LineIndex, SymbolIds, reemitLossless };
