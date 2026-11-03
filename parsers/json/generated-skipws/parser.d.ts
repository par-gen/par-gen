export type TokenName =
  | "TRUE"
  | "FALSE"
  | "NULL"
  | "CURLY_OPEN"
  | "CURLY_CLOSE"
  | "COMMA"
  | "COLON"
  | "STRING"
  | "BRACKET_OPEN"
  | "BRACKET_CLOSE"
  | "NUMBER"
  | "@par-gen.EOF"
  | "@par-gen.ERROR";
export type RuleName =
  | "Json"
  | "Element"
  | "Value"
  | "Object"
  | "Members"
  | "Member"
  | "Array"
  | "Elements";
export type SymbolName = TokenName | RuleName;
export type NodeName = SymbolName;
export type StartRuleName = "Json";

export interface SourceLocation {
  readonly line: number;
  readonly column: number;
}

export interface LineIndex {
  locationForOffset(offset: number): SourceLocation;
}

export declare const LineIndex: {
  new (input: Uint8Array | string): LineIndex;
};

export interface ParseSyntaxError extends SyntaxError {
  readonly line: number;
  readonly column: number;
  readonly offset: number;
  readonly endOffset: number;
  readonly found: SymbolName | string;
  readonly tokenText: string;
  readonly expected: TokenName[];
}

export interface TreeCursor {
  readonly name: SymbolName;
  readonly symbolId: number;
  readonly childCount: number;
  readonly isLeaf: boolean;
  readonly start: number;
  readonly end: number;
  readonly value: Uint8Array;
  readonly text: string;
  readonly pointer: number;
  readonly depth: number;
  reset(): boolean;
  gotoFirstChild(): boolean;
  gotoNextSibling(): boolean;
  gotoParent(): boolean;
  currentNode(): CstNode;
}

export declare const TreeCursor: {
  new (stream: Uint8Array, tree: Uint32Array, pointer: number): TreeCursor;
};

export interface CstNode<Name extends SymbolName = SymbolName> {
  readonly name: Name;
  readonly symbolId: number;
  readonly childCount: number;
  readonly isLeaf: boolean;
  readonly start: number;
  readonly end: number;
  readonly value: Uint8Array;
  readonly text: string;
  readonly firstChild: CstNode | undefined;
  readonly lastChild: CstNode | undefined;
  readonly items: CstNode[] | undefined;
  readonly __tree: Uint32Array;
  readonly __pointer: number;
  child(index: number): CstNode | undefined;
  childByName<ChildName extends SymbolName>(
    name: ChildName
  ): CstNode<ChildName> | undefined;
  childrenByName<ChildName extends SymbolName>(
    name: ChildName
  ): CstNode<ChildName>[];
  cursor(): TreeCursor;
  reemitLossless(input?: Uint8Array | string): Uint8Array;
  toSExpr(includeText?: boolean): string;
  toJSON(): {
    name: Name;
    start: number;
    end: number;
    value: Uint8Array;
    items: ReturnType<CstNode["toJSON"]>[] | undefined;
  };
}

export declare const CstNode: {
  new <Name extends SymbolName = SymbolName>(
    stream: Uint8Array,
    tree: Uint32Array,
    pointer: number
  ): CstNode<Name>;
};

export declare const SymbolNames: ReadonlyArray<string>;
export declare const SymbolIds: { readonly [key: string]: number };

export function reemitLossless(
  cst: CstNode,
  input?: Uint8Array | string
): Uint8Array;

export type TokenNode<Name extends TokenName = TokenName> = CstNode<Name> & {
  readonly items: undefined;
};

export interface RuleChildrenMap {
  Json: [CstNode<"Element">];
  Element: [CstNode<"Value">];
  Value:
    | [CstNode<"Object">]
    | [CstNode<"Array">]
    | [CstNode<"STRING">]
    | [CstNode<"NUMBER">]
    | [CstNode<"TRUE">]
    | [CstNode<"FALSE">]
    | [CstNode<"NULL">];
  Object:
    | [CstNode<"CURLY_OPEN">, CstNode<"CURLY_CLOSE">]
    | [CstNode<"CURLY_OPEN">, CstNode<"Members">, CstNode<"CURLY_CLOSE">];
  Members:
    | [CstNode<"Member">]
    | [CstNode<"Members">, CstNode<"COMMA">, CstNode<"Member">];
  Member: [CstNode<"STRING">, CstNode<"COLON">, CstNode<"Element">];
  Array:
    | [CstNode<"BRACKET_OPEN">, CstNode<"BRACKET_CLOSE">]
    | [CstNode<"BRACKET_OPEN">, CstNode<"Elements">, CstNode<"BRACKET_CLOSE">];
  Elements:
    | [CstNode<"Element">]
    | [CstNode<"Elements">, CstNode<"COMMA">, CstNode<"Element">];
}

export type RuleNode<Name extends RuleName = RuleName> = CstNode<Name> & {
  readonly items: RuleChildrenMap[Name];
};

export type TypedCstNode =
  | { [K in TokenName]: TokenNode<K> }[TokenName]
  | { [K in RuleName]: RuleNode<K> }[RuleName];

export type Node = CstNode;

export function parse(input: Uint8Array | string): CstNode<StartRuleName>;
