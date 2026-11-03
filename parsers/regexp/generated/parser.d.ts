export type TokenName =
  | "CHARACTER"
  | "HEX_PREFIX"
  | "HEX_NUMBER"
  | "ESCAPED_CHARACTER"
  | "CARET"
  | "DASH"
  | "DOT"
  | "UNION"
  | "PAREN_OPEN"
  | "PAREN_CLOSE"
  | "QUANTIFIER"
  | "BRACKET_OPEN"
  | "BRACKET_CLOSE"
  | "@par-gen.EOF"
  | "@par-gen.ERROR";
export type RuleName =
  | "RegExp"
  | "Expression"
  | "Union"
  | "Sequence"
  | "Atom"
  | "Group"
  | "CharacterClass"
  | "CharacterClassCharacters"
  | "CharacterClassCharacter"
  | "CharacterClassRange"
  | "Character"
  | "HexEscape";
export type SymbolName = TokenName | RuleName;
export type NodeName = SymbolName;
export type StartRuleName = "RegExp";

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
  RegExp: [CstNode<"Expression">];
  Expression: [CstNode<"Union">] | [CstNode<"Sequence">] | [CstNode<"Atom">];
  Union:
    | [CstNode<"Union">, CstNode<"UNION">, CstNode<"Sequence">]
    | [CstNode<"Union">, CstNode<"UNION">, CstNode<"Atom">]
    | [CstNode<"Union">, CstNode<"UNION">]
    | [CstNode<"Sequence">, CstNode<"UNION">, CstNode<"Sequence">]
    | [CstNode<"Sequence">, CstNode<"UNION">, CstNode<"Atom">]
    | [CstNode<"Sequence">, CstNode<"UNION">]
    | [CstNode<"Atom">, CstNode<"UNION">, CstNode<"Sequence">]
    | [CstNode<"Atom">, CstNode<"UNION">, CstNode<"Atom">]
    | [CstNode<"Atom">, CstNode<"UNION">];
  Sequence:
    | [CstNode<"Atom">, CstNode<"Atom">]
    | [CstNode<"Sequence">, CstNode<"Atom">];
  Atom:
    | [CstNode<"Character">]
    | [CstNode<"Character">, CstNode<"QUANTIFIER">]
    | [CstNode<"DOT">]
    | [CstNode<"DOT">, CstNode<"QUANTIFIER">]
    | [CstNode<"Group">]
    | [CstNode<"Group">, CstNode<"QUANTIFIER">]
    | [CstNode<"CharacterClass">]
    | [CstNode<"CharacterClass">, CstNode<"QUANTIFIER">];
  Group:
    | [CstNode<"PAREN_OPEN">, CstNode<"Union">, CstNode<"PAREN_CLOSE">]
    | [CstNode<"PAREN_OPEN">, CstNode<"Sequence">, CstNode<"PAREN_CLOSE">]
    | [CstNode<"PAREN_OPEN">, CstNode<"Atom">, CstNode<"PAREN_CLOSE">];
  CharacterClass:
    | [
        CstNode<"BRACKET_OPEN">,
        CstNode<"CharacterClassCharacters">,
        CstNode<"BRACKET_CLOSE">
      ]
    | [
        CstNode<"BRACKET_OPEN">,
        CstNode<"CARET">,
        CstNode<"CharacterClassCharacters">,
        CstNode<"BRACKET_CLOSE">
      ];
  CharacterClassCharacters:
    | [CstNode<"CharacterClassCharacter">]
    | [CstNode<"CharacterClassCharacters">, CstNode<"CharacterClassCharacter">];
  CharacterClassCharacter:
    | [CstNode<"CHARACTER">]
    | [CstNode<"ESCAPED_CHARACTER">]
    | [CstNode<"HexEscape">]
    | [CstNode<"CharacterClassRange">];
  CharacterClassRange:
    | [CstNode<"CHARACTER">, CstNode<"DASH">, CstNode<"CHARACTER">]
    | [CstNode<"HexEscape">, CstNode<"DASH">, CstNode<"HexEscape">]
    | [CstNode<"HexEscape">, CstNode<"DASH">, CstNode<"CHARACTER">]
    | [CstNode<"CHARACTER">, CstNode<"DASH">, CstNode<"HexEscape">];
  Character:
    | [CstNode<"CHARACTER">]
    | [CstNode<"ESCAPED_CHARACTER">]
    | [CstNode<"HexEscape">];
  HexEscape: [
    CstNode<"HEX_PREFIX">,
    CstNode<"HEX_NUMBER">,
    CstNode<"HEX_NUMBER">
  ];
}

export type RuleNode<Name extends RuleName = RuleName> = CstNode<Name> & {
  readonly items: RuleChildrenMap[Name];
};

export type TypedCstNode =
  | { [K in TokenName]: TokenNode<K> }[TokenName]
  | { [K in RuleName]: RuleNode<K> }[RuleName];

export type Node = CstNode;

export function parse(input: Uint8Array | string): CstNode<StartRuleName>;
