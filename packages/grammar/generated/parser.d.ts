export type TokenName =
  | "WS"
  | "ASSIGN"
  | "SEMICOLON"
  | "PIPE"
  | "AT"
  | "EXPR"
  | "ACTION"
  | "IDENTIFIER"
  | "@par-gen.EOF"
  | "@par-gen.ERROR";
export type RuleName =
  | "Grammar"
  | "Statements"
  | "Statement"
  | "Assignment"
  | "Expr"
  | "Semi"
  | "Pipe"
  | "StateClause"
  | "StateList"
  | "StateItem"
  | "Alternatives"
  | "Alternative"
  | "RuleItem";
export type SymbolName = TokenName | RuleName;
export type NodeName = SymbolName;
export type StartRuleName = "Grammar";

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

export declare const SymbolIds: { readonly [key: string]: number };

export function reemitLossless(
  cst: CstNode,
  input?: Uint8Array | string
): Uint8Array;

export type TokenNode<Name extends TokenName = TokenName> = CstNode<Name> & {
  readonly items: undefined;
};

export interface RuleChildrenMap {
  Grammar: [CstNode<"Statements">] | [CstNode<"WS">, CstNode<"Statements">];
  Statements:
    | [CstNode<"Statement">]
    | [CstNode<"Statements">, CstNode<"Statement">];
  Statement:
    | [CstNode<"Assignment">, CstNode<"Expr">, CstNode<"Semi">]
    | [
        CstNode<"Assignment">,
        CstNode<"Expr">,
        CstNode<"StateClause">,
        CstNode<"Semi">
      ]
    | [CstNode<"Assignment">, CstNode<"Alternatives">, CstNode<"Semi">]
    | [
        CstNode<"Assignment">,
        CstNode<"Pipe">,
        CstNode<"Alternatives">,
        CstNode<"Semi">
      ]
    | [CstNode<"StateList">, CstNode<"Semi">];
  Assignment:
    | [CstNode<"IDENTIFIER">, CstNode<"ASSIGN">]
    | [CstNode<"IDENTIFIER">, CstNode<"ASSIGN">, CstNode<"WS">]
    | [CstNode<"IDENTIFIER">, CstNode<"WS">, CstNode<"ASSIGN">]
    | [CstNode<"IDENTIFIER">, CstNode<"WS">, CstNode<"ASSIGN">, CstNode<"WS">];
  Expr: [CstNode<"EXPR">] | [CstNode<"EXPR">, CstNode<"WS">];
  Semi: [CstNode<"SEMICOLON">] | [CstNode<"SEMICOLON">, CstNode<"WS">];
  Pipe: [CstNode<"PIPE">] | [CstNode<"PIPE">, CstNode<"WS">];
  StateClause:
    | [CstNode<"AT">, CstNode<"StateList">]
    | [CstNode<"AT">, CstNode<"WS">, CstNode<"StateList">];
  StateList:
    | [CstNode<"StateItem">]
    | [CstNode<"StateList">, CstNode<"StateItem">];
  StateItem: [CstNode<"IDENTIFIER">] | [CstNode<"IDENTIFIER">, CstNode<"WS">];
  Alternatives:
    | [CstNode<"Alternative">]
    | [CstNode<"Alternatives">, CstNode<"Pipe">, CstNode<"Alternative">];
  Alternative:
    | [CstNode<"RuleItem">]
    | [CstNode<"Alternative">, CstNode<"RuleItem">];
  RuleItem:
    | [CstNode<"IDENTIFIER">]
    | [CstNode<"IDENTIFIER">, CstNode<"WS">]
    | [CstNode<"ACTION">]
    | [CstNode<"ACTION">, CstNode<"WS">];
}

export type RuleNode<Name extends RuleName = RuleName> = CstNode<Name> & {
  readonly items: RuleChildrenMap[Name];
};

export type TypedCstNode =
  | { [K in TokenName]: TokenNode<K> }[TokenName]
  | { [K in RuleName]: RuleNode<K> }[RuleName];

export type Node = CstNode;

export function parse(input: Uint8Array | string): CstNode<StartRuleName>;
