export type TokenName =
  | '"""'
  | "'''"
  | "["
  | "]"
  | "[["
  | "]]"
  | "="
  | "."
  | '"'
  | ","
  | "{"
  | "}"
  | "escape_sequence"
  | "_escape_line_ending"
  | "_literal_string"
  | "boolean"
  | "offset_date_time"
  | "local_date_time"
  | "local_date"
  | "local_time"
  | "_multiline_basic_string_content"
  | "_multiline_literal_string_content"
  | "_document_token1"
  | "__basic_string_token2"
  | "__multiline_basic_string_token3"
  | "__multiline_basic_string_token4"
  | "__multiline_literal_string_token5"
  | "__multiline_literal_string_token6"
  | "_integer_token7"
  | "_integer_token8"
  | "_integer_token9"
  | "_integer_token10"
  | "_float_token11"
  | "_float_token12"
  | "bare_key"
  | "@par-gen.EOF"
  | "@par-gen.ERROR"
  | "comment";
export type RuleName =
  | "document"
  | "_document_repeat1"
  | "_document_repeat2"
  | "table"
  | "table_array_element"
  | "pair"
  | "_inline_pair"
  | "_key"
  | "dotted_key"
  | "quoted_key"
  | "_inline_value"
  | "string"
  | "__basic_string_repeat3"
  | "_basic_string"
  | "__multiline_basic_string_repeat4"
  | "_multiline_basic_string"
  | "__multiline_literal_string_repeat5"
  | "_multiline_literal_string"
  | "integer"
  | "float"
  | "_array_repeat6"
  | "_array_repeat7"
  | "array"
  | "_inline_table_repeat8"
  | "inline_table"
  | "_line_ending_or_eof";
export type SymbolName = TokenName | RuleName;
export type NodeName = SymbolName;
export type StartRuleName = "document";

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

export type TokenNode<Name extends TokenName = TokenName> = CstNode<Name> & {
  readonly items: undefined;
};

export interface RuleChildrenMap {
  document:
    | [CstNode<"_document_repeat1">, CstNode<"_document_repeat2">]
    | [CstNode<"_document_repeat1">]
    | [CstNode<"_document_repeat2">];
  _document_repeat1:
    | [CstNode<"pair">]
    | [CstNode<"_document_repeat1">, CstNode<"pair">]
    | [CstNode<"_document_token1">]
    | [CstNode<"_document_repeat1">, CstNode<"_document_token1">];
  _document_repeat2:
    | [CstNode<"table">]
    | [CstNode<"_document_repeat2">, CstNode<"table">]
    | [CstNode<"table_array_element">]
    | [CstNode<"_document_repeat2">, CstNode<"table_array_element">];
  table:
    | [
        CstNode<"[">,
        CstNode<"dotted_key">,
        CstNode<"]">,
        CstNode<"_line_ending_or_eof">,
        CstNode<"_document_repeat1">
      ]
    | [
        CstNode<"[">,
        CstNode<"dotted_key">,
        CstNode<"]">,
        CstNode<"_document_repeat1">
      ]
    | [
        CstNode<"[">,
        CstNode<"dotted_key">,
        CstNode<"]">,
        CstNode<"_line_ending_or_eof">
      ]
    | [CstNode<"[">, CstNode<"dotted_key">, CstNode<"]">]
    | [
        CstNode<"[">,
        CstNode<"_key">,
        CstNode<"]">,
        CstNode<"_line_ending_or_eof">,
        CstNode<"_document_repeat1">
      ]
    | [
        CstNode<"[">,
        CstNode<"_key">,
        CstNode<"]">,
        CstNode<"_document_repeat1">
      ]
    | [
        CstNode<"[">,
        CstNode<"_key">,
        CstNode<"]">,
        CstNode<"_line_ending_or_eof">
      ]
    | [CstNode<"[">, CstNode<"_key">, CstNode<"]">];
  table_array_element:
    | [
        CstNode<"[[">,
        CstNode<"dotted_key">,
        CstNode<"]]">,
        CstNode<"_line_ending_or_eof">,
        CstNode<"_document_repeat1">
      ]
    | [
        CstNode<"[[">,
        CstNode<"dotted_key">,
        CstNode<"]]">,
        CstNode<"_document_repeat1">
      ]
    | [
        CstNode<"[[">,
        CstNode<"dotted_key">,
        CstNode<"]]">,
        CstNode<"_line_ending_or_eof">
      ]
    | [CstNode<"[[">, CstNode<"dotted_key">, CstNode<"]]">]
    | [
        CstNode<"[[">,
        CstNode<"_key">,
        CstNode<"]]">,
        CstNode<"_line_ending_or_eof">,
        CstNode<"_document_repeat1">
      ]
    | [
        CstNode<"[[">,
        CstNode<"_key">,
        CstNode<"]]">,
        CstNode<"_document_repeat1">
      ]
    | [
        CstNode<"[[">,
        CstNode<"_key">,
        CstNode<"]]">,
        CstNode<"_line_ending_or_eof">
      ]
    | [CstNode<"[[">, CstNode<"_key">, CstNode<"]]">];
  pair:
    | [CstNode<"_inline_pair">, CstNode<"_line_ending_or_eof">]
    | [CstNode<"_inline_pair">];
  _inline_pair:
    | [CstNode<"dotted_key">, CstNode<"=">, CstNode<"_inline_value">]
    | [CstNode<"_key">, CstNode<"=">, CstNode<"_inline_value">];
  _key: [CstNode<"bare_key">] | [CstNode<"quoted_key">];
  dotted_key:
    | [CstNode<"dotted_key">, CstNode<".">, CstNode<"_key">]
    | [CstNode<"_key">, CstNode<".">, CstNode<"_key">];
  quoted_key: [CstNode<"_basic_string">] | [CstNode<"_literal_string">];
  _inline_value:
    | [CstNode<"string">]
    | [CstNode<"integer">]
    | [CstNode<"float">]
    | [CstNode<"boolean">]
    | [CstNode<"offset_date_time">]
    | [CstNode<"local_date_time">]
    | [CstNode<"local_date">]
    | [CstNode<"local_time">]
    | [CstNode<"array">]
    | [CstNode<"inline_table">];
  string:
    | [CstNode<"_basic_string">]
    | [CstNode<"_multiline_basic_string">]
    | [CstNode<"_literal_string">]
    | [CstNode<"_multiline_literal_string">];
  __basic_string_repeat3:
    | [CstNode<"__basic_string_token2">]
    | [CstNode<"__basic_string_repeat3">, CstNode<"__basic_string_token2">]
    | [CstNode<"escape_sequence">]
    | [CstNode<"__basic_string_repeat3">, CstNode<"escape_sequence">];
  _basic_string:
    | [CstNode<'"'>, CstNode<"__basic_string_repeat3">, CstNode<'"'>]
    | [CstNode<'"'>, CstNode<'"'>];
  __multiline_basic_string_repeat4:
    | [CstNode<"__multiline_basic_string_token3">]
    | [
        CstNode<"__multiline_basic_string_repeat4">,
        CstNode<"__multiline_basic_string_token3">
      ]
    | [CstNode<"_multiline_basic_string_content">]
    | [
        CstNode<"__multiline_basic_string_repeat4">,
        CstNode<"_multiline_basic_string_content">
      ]
    | [CstNode<"__multiline_basic_string_token4">]
    | [
        CstNode<"__multiline_basic_string_repeat4">,
        CstNode<"__multiline_basic_string_token4">
      ]
    | [CstNode<"escape_sequence">]
    | [CstNode<"__multiline_basic_string_repeat4">, CstNode<"escape_sequence">]
    | [CstNode<"_escape_line_ending">]
    | [
        CstNode<"__multiline_basic_string_repeat4">,
        CstNode<"_escape_line_ending">
      ];
  _multiline_basic_string:
    | [
        CstNode<'"""'>,
        CstNode<"__multiline_basic_string_repeat4">,
        CstNode<'"""'>
      ]
    | [CstNode<'"""'>, CstNode<'"""'>];
  __multiline_literal_string_repeat5:
    | [CstNode<"__multiline_literal_string_token5">]
    | [
        CstNode<"__multiline_literal_string_repeat5">,
        CstNode<"__multiline_literal_string_token5">
      ]
    | [CstNode<"_multiline_literal_string_content">]
    | [
        CstNode<"__multiline_literal_string_repeat5">,
        CstNode<"_multiline_literal_string_content">
      ]
    | [CstNode<"__multiline_literal_string_token6">]
    | [
        CstNode<"__multiline_literal_string_repeat5">,
        CstNode<"__multiline_literal_string_token6">
      ];
  _multiline_literal_string:
    | [
        CstNode<"'''">,
        CstNode<"__multiline_literal_string_repeat5">,
        CstNode<"'''">
      ]
    | [CstNode<"'''">, CstNode<"'''">];
  integer:
    | [CstNode<"_integer_token7">]
    | [CstNode<"_integer_token8">]
    | [CstNode<"_integer_token9">]
    | [CstNode<"_integer_token10">];
  float: [CstNode<"_float_token11">] | [CstNode<"_float_token12">];
  _array_repeat6:
    | [CstNode<"_document_token1">]
    | [CstNode<"_array_repeat6">, CstNode<"_document_token1">];
  _array_repeat7:
    | [
        CstNode<",">,
        CstNode<"_array_repeat6">,
        CstNode<"_inline_value">,
        CstNode<"_array_repeat6">
      ]
    | [
        CstNode<"_array_repeat7">,
        CstNode<",">,
        CstNode<"_array_repeat6">,
        CstNode<"_inline_value">,
        CstNode<"_array_repeat6">
      ]
    | [CstNode<",">, CstNode<"_array_repeat6">, CstNode<"_inline_value">]
    | [
        CstNode<"_array_repeat7">,
        CstNode<",">,
        CstNode<"_array_repeat6">,
        CstNode<"_inline_value">
      ]
    | [CstNode<",">, CstNode<"_inline_value">, CstNode<"_array_repeat6">]
    | [
        CstNode<"_array_repeat7">,
        CstNode<",">,
        CstNode<"_inline_value">,
        CstNode<"_array_repeat6">
      ]
    | [CstNode<",">, CstNode<"_inline_value">]
    | [CstNode<"_array_repeat7">, CstNode<",">, CstNode<"_inline_value">];
  array:
    | [
        CstNode<"[">,
        CstNode<"_array_repeat6">,
        CstNode<"_inline_value">,
        CstNode<"_array_repeat6">,
        CstNode<"_array_repeat7">,
        CstNode<",">,
        CstNode<"_array_repeat6">,
        CstNode<"]">
      ]
    | [
        CstNode<"[">,
        CstNode<"_array_repeat6">,
        CstNode<"_inline_value">,
        CstNode<"_array_repeat6">,
        CstNode<"_array_repeat7">,
        CstNode<",">,
        CstNode<"]">
      ]
    | [
        CstNode<"[">,
        CstNode<"_array_repeat6">,
        CstNode<"_inline_value">,
        CstNode<"_array_repeat6">,
        CstNode<"_array_repeat7">,
        CstNode<"]">
      ]
    | [
        CstNode<"[">,
        CstNode<"_array_repeat6">,
        CstNode<"_inline_value">,
        CstNode<"_array_repeat6">,
        CstNode<",">,
        CstNode<"_array_repeat6">,
        CstNode<"]">
      ]
    | [
        CstNode<"[">,
        CstNode<"_array_repeat6">,
        CstNode<"_inline_value">,
        CstNode<"_array_repeat6">,
        CstNode<",">,
        CstNode<"]">
      ]
    | [
        CstNode<"[">,
        CstNode<"_array_repeat6">,
        CstNode<"_inline_value">,
        CstNode<"_array_repeat6">,
        CstNode<"]">
      ]
    | [
        CstNode<"[">,
        CstNode<"_array_repeat6">,
        CstNode<"_inline_value">,
        CstNode<"_array_repeat7">,
        CstNode<",">,
        CstNode<"_array_repeat6">,
        CstNode<"]">
      ]
    | [
        CstNode<"[">,
        CstNode<"_array_repeat6">,
        CstNode<"_inline_value">,
        CstNode<"_array_repeat7">,
        CstNode<",">,
        CstNode<"]">
      ]
    | [
        CstNode<"[">,
        CstNode<"_array_repeat6">,
        CstNode<"_inline_value">,
        CstNode<"_array_repeat7">,
        CstNode<"]">
      ]
    | [
        CstNode<"[">,
        CstNode<"_array_repeat6">,
        CstNode<"_inline_value">,
        CstNode<",">,
        CstNode<"_array_repeat6">,
        CstNode<"]">
      ]
    | [
        CstNode<"[">,
        CstNode<"_array_repeat6">,
        CstNode<"_inline_value">,
        CstNode<",">,
        CstNode<"]">
      ]
    | [
        CstNode<"[">,
        CstNode<"_array_repeat6">,
        CstNode<"_inline_value">,
        CstNode<"]">
      ]
    | [CstNode<"[">, CstNode<"_array_repeat6">, CstNode<"]">]
    | [
        CstNode<"[">,
        CstNode<"_inline_value">,
        CstNode<"_array_repeat6">,
        CstNode<"_array_repeat7">,
        CstNode<",">,
        CstNode<"_array_repeat6">,
        CstNode<"]">
      ]
    | [
        CstNode<"[">,
        CstNode<"_inline_value">,
        CstNode<"_array_repeat6">,
        CstNode<"_array_repeat7">,
        CstNode<",">,
        CstNode<"]">
      ]
    | [
        CstNode<"[">,
        CstNode<"_inline_value">,
        CstNode<"_array_repeat6">,
        CstNode<"_array_repeat7">,
        CstNode<"]">
      ]
    | [
        CstNode<"[">,
        CstNode<"_inline_value">,
        CstNode<"_array_repeat6">,
        CstNode<",">,
        CstNode<"_array_repeat6">,
        CstNode<"]">
      ]
    | [
        CstNode<"[">,
        CstNode<"_inline_value">,
        CstNode<"_array_repeat6">,
        CstNode<",">,
        CstNode<"]">
      ]
    | [
        CstNode<"[">,
        CstNode<"_inline_value">,
        CstNode<"_array_repeat6">,
        CstNode<"]">
      ]
    | [
        CstNode<"[">,
        CstNode<"_inline_value">,
        CstNode<"_array_repeat7">,
        CstNode<",">,
        CstNode<"_array_repeat6">,
        CstNode<"]">
      ]
    | [
        CstNode<"[">,
        CstNode<"_inline_value">,
        CstNode<"_array_repeat7">,
        CstNode<",">,
        CstNode<"]">
      ]
    | [
        CstNode<"[">,
        CstNode<"_inline_value">,
        CstNode<"_array_repeat7">,
        CstNode<"]">
      ]
    | [
        CstNode<"[">,
        CstNode<"_inline_value">,
        CstNode<",">,
        CstNode<"_array_repeat6">,
        CstNode<"]">
      ]
    | [CstNode<"[">, CstNode<"_inline_value">, CstNode<",">, CstNode<"]">]
    | [CstNode<"[">, CstNode<"_inline_value">, CstNode<"]">]
    | [CstNode<"[">, CstNode<"]">];
  _inline_table_repeat8:
    | [CstNode<",">, CstNode<"_inline_pair">]
    | [CstNode<"_inline_table_repeat8">, CstNode<",">, CstNode<"_inline_pair">];
  inline_table:
    | [
        CstNode<"{">,
        CstNode<"_inline_pair">,
        CstNode<"_inline_table_repeat8">,
        CstNode<"}">
      ]
    | [CstNode<"{">, CstNode<"_inline_pair">, CstNode<"}">]
    | [CstNode<"{">, CstNode<"}">];
  _line_ending_or_eof: [CstNode<"_document_token1">];
}

export type RuleNode<Name extends RuleName = RuleName> = CstNode<Name> & {
  readonly items: RuleChildrenMap[Name];
};

export type TypedCstNode =
  | { [K in TokenName]: TokenNode<K> }[TokenName]
  | { [K in RuleName]: RuleNode<K> }[RuleName];

export type Node = CstNode;

export function parse(input: Uint8Array | string): CstNode<StartRuleName>;
