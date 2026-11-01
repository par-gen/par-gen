export type TokenName =
  | "WS"
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
export type StartRuleName = "Json";

export interface TreeCursor {
  readonly name: SymbolName;
  readonly symbolId: number;
  readonly childCount: number;
  readonly isLeaf: boolean;
  readonly start: number;
  readonly end: number;
  readonly value: Uint8Array;
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
  readonly start: number;
  readonly end: number;
  readonly value: Uint8Array;
  readonly items: CstNode[] | undefined;
  readonly __tree: Uint32Array;
  readonly __pointer: number;
  cursor(): TreeCursor;
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

export type TokenNode<Name extends TokenName = TokenName> = CstNode<Name> & {
  readonly items: undefined;
};

export interface RuleChildrenMap {
  Json: [CstNode<"Element">];
  Element:
    | [CstNode<"Value">]
    | [CstNode<"Value">, CstNode<"WS">]
    | [CstNode<"WS">, CstNode<"Value">]
    | [CstNode<"WS">, CstNode<"Value">, CstNode<"WS">];
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
    | [CstNode<"CURLY_OPEN">, CstNode<"WS">, CstNode<"CURLY_CLOSE">]
    | [CstNode<"CURLY_OPEN">, CstNode<"Members">, CstNode<"CURLY_CLOSE">];
  Members:
    | [CstNode<"Member">]
    | [CstNode<"Members">, CstNode<"COMMA">, CstNode<"Member">];
  Member:
    | [CstNode<"STRING">, CstNode<"COLON">, CstNode<"Element">]
    | [CstNode<"STRING">, CstNode<"WS">, CstNode<"COLON">, CstNode<"Element">]
    | [CstNode<"WS">, CstNode<"STRING">, CstNode<"COLON">, CstNode<"Element">]
    | [
        CstNode<"WS">,
        CstNode<"STRING">,
        CstNode<"WS">,
        CstNode<"COLON">,
        CstNode<"Element">
      ];
  Array:
    | [CstNode<"BRACKET_OPEN">, CstNode<"BRACKET_CLOSE">]
    | [CstNode<"BRACKET_OPEN">, CstNode<"WS">, CstNode<"BRACKET_CLOSE">]
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
