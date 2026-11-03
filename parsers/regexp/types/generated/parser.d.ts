declare const SymbolIds: Readonly<{
    CHARACTER: 0;
    HEX_PREFIX: 1;
    HEX_NUMBER: 2;
    ESCAPED_CHARACTER: 3;
    CARET: 4;
    DASH: 5;
    DOT: 6;
    UNION: 7;
    PAREN_OPEN: 8;
    PAREN_CLOSE: 9;
    QUANTIFIER: 10;
    BRACKET_OPEN: 11;
    BRACKET_CLOSE: 12;
    "@par-gen.EOF": 13;
    "@par-gen.ERROR": 14;
    S: 15;
    RegExp: 16;
    Expression: 17;
    Union: 18;
    Sequence: 19;
    Atom: 20;
    Group: 21;
    CharacterClass: 22;
    CharacterClassCharacters: 23;
    CharacterClassCharacter: 24;
    CharacterClassRange: 25;
    Character: 26;
    HexEscape: 27;
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
