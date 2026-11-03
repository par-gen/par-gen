export type TokenName =
  | "["
  | "from"
  | "to"
  | ":"
  | "@import"
  | ","
  | ";"
  | "@media"
  | "@charset"
  | "@namespace"
  | "@keyframes"
  | "{"
  | "}"
  | "@supports"
  | "@scope"
  | "("
  | ")"
  | "&"
  | "*"
  | "."
  | "has"
  | "not"
  | "is"
  | "where"
  | "host"
  | "host-context"
  | "nth-child"
  | "nth-last-child"
  | "::"
  | "#"
  | "="
  | "~="
  | "^="
  | "|="
  | "*="
  | "$="
  | "]"
  | ">"
  | "~"
  | "+"
  | "|"
  | "even"
  | "odd"
  | "of"
  | "!important"
  | "and"
  | "or"
  | "only"
  | "selector"
  | "'"
  | '"'
  | "-"
  | "/"
  | "_nth_functional_notation"
  | "color_value"
  | "escape_sequence"
  | "integer_value"
  | "float_value"
  | "identifier"
  | "at_keyword"
  | "plain_value"
  | "important_value"
  | "_keyframes_statement_token1"
  | "_string_value_token2"
  | "_string_value_token3"
  | "_class_name_token4"
  | "@par-gen.EOF"
  | "@par-gen.ERROR"
  | "comment"
  | "js_comment";
export type RuleName =
  | "stylesheet"
  | "_import_statement_repeat1"
  | "import_statement"
  | "media_statement"
  | "charset_statement"
  | "namespace_statement"
  | "keyframes_statement"
  | "_keyframe_block_list_repeat2"
  | "keyframe_block_list"
  | "_keyframe_block_repeat3"
  | "keyframe_block"
  | "supports_statement"
  | "scope_statement"
  | "_postcss_statement_repeat4"
  | "postcss_statement"
  | "at_rule"
  | "rule_set"
  | "_selectors_repeat5"
  | "selectors"
  | "_block_repeat6"
  | "block"
  | "_selector"
  | "nesting_selector"
  | "universal_selector"
  | "class_selector"
  | "pseudo_class_selector"
  | "_nth_child_pseudo_class_selector"
  | "pseudo_element_selector"
  | "id_selector"
  | "attribute_selector"
  | "child_selector"
  | "descendant_selector"
  | "sibling_selector"
  | "adjacent_sibling_selector"
  | "namespace_selector"
  | "_pseudo_class_arguments_repeat7"
  | "_pseudo_class_arguments_repeat8"
  | "pseudo_class_arguments"
  | "pseudo_class_with_selector_arguments"
  | "pseudo_class_nth_child_arguments"
  | "pseudo_element_arguments"
  | "_declaration_repeat9"
  | "declaration"
  | "last_declaration"
  | "important"
  | "_query"
  | "feature_query"
  | "parenthesized_query"
  | "binary_query"
  | "unary_query"
  | "selector_query"
  | "_value"
  | "parenthesized_value"
  | "_string_value_repeat10"
  | "_string_value_repeat11"
  | "string_value"
  | "_grid_value_repeat12"
  | "grid_value"
  | "call_expression"
  | "binary_expression"
  | "_arguments_repeat13"
  | "arguments"
  | "_class_name_repeat14"
  | "class_name";
export type SymbolName = TokenName | RuleName;
export type NodeName = SymbolName;
export type StartRuleName = "stylesheet";

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
  stylesheet:
    | [CstNode<"declaration">]
    | [CstNode<"stylesheet">, CstNode<"declaration">]
    | [CstNode<"rule_set">]
    | [CstNode<"stylesheet">, CstNode<"rule_set">]
    | [CstNode<"import_statement">]
    | [CstNode<"stylesheet">, CstNode<"import_statement">]
    | [CstNode<"media_statement">]
    | [CstNode<"stylesheet">, CstNode<"media_statement">]
    | [CstNode<"charset_statement">]
    | [CstNode<"stylesheet">, CstNode<"charset_statement">]
    | [CstNode<"namespace_statement">]
    | [CstNode<"stylesheet">, CstNode<"namespace_statement">]
    | [CstNode<"keyframes_statement">]
    | [CstNode<"stylesheet">, CstNode<"keyframes_statement">]
    | [CstNode<"supports_statement">]
    | [CstNode<"stylesheet">, CstNode<"supports_statement">]
    | [CstNode<"scope_statement">]
    | [CstNode<"stylesheet">, CstNode<"scope_statement">]
    | [CstNode<"at_rule">]
    | [CstNode<"stylesheet">, CstNode<"at_rule">];
  _import_statement_repeat1:
    | [CstNode<",">, CstNode<"_query">]
    | [CstNode<"_import_statement_repeat1">, CstNode<",">, CstNode<"_query">];
  import_statement:
    | [
        CstNode<"@import">,
        CstNode<"_value">,
        CstNode<"_query">,
        CstNode<"_import_statement_repeat1">,
        CstNode<";">
      ]
    | [CstNode<"@import">, CstNode<"_value">, CstNode<"_query">, CstNode<";">]
    | [CstNode<"@import">, CstNode<"_value">, CstNode<";">];
  media_statement:
    | [
        CstNode<"@media">,
        CstNode<"_query">,
        CstNode<"_import_statement_repeat1">,
        CstNode<"block">
      ]
    | [CstNode<"@media">, CstNode<"_query">, CstNode<"block">];
  charset_statement: [CstNode<"@charset">, CstNode<"_value">, CstNode<";">];
  namespace_statement:
    | [
        CstNode<"@namespace">,
        CstNode<"identifier">,
        CstNode<"string_value">,
        CstNode<";">
      ]
    | [
        CstNode<"@namespace">,
        CstNode<"identifier">,
        CstNode<"call_expression">,
        CstNode<";">
      ]
    | [CstNode<"@namespace">, CstNode<"string_value">, CstNode<";">]
    | [CstNode<"@namespace">, CstNode<"call_expression">, CstNode<";">];
  keyframes_statement:
    | [
        CstNode<"@keyframes">,
        CstNode<"identifier">,
        CstNode<"keyframe_block_list">
      ]
    | [
        CstNode<"_keyframes_statement_token1">,
        CstNode<"identifier">,
        CstNode<"keyframe_block_list">
      ];
  _keyframe_block_list_repeat2:
    | [CstNode<"keyframe_block">]
    | [CstNode<"_keyframe_block_list_repeat2">, CstNode<"keyframe_block">];
  keyframe_block_list:
    | [CstNode<"{">, CstNode<"_keyframe_block_list_repeat2">, CstNode<"}">]
    | [CstNode<"{">, CstNode<"}">];
  _keyframe_block_repeat3:
    | [CstNode<",">, CstNode<"from">]
    | [CstNode<"_keyframe_block_repeat3">, CstNode<",">, CstNode<"from">]
    | [CstNode<",">, CstNode<"to">]
    | [CstNode<"_keyframe_block_repeat3">, CstNode<",">, CstNode<"to">]
    | [CstNode<",">, CstNode<"integer_value">]
    | [
        CstNode<"_keyframe_block_repeat3">,
        CstNode<",">,
        CstNode<"integer_value">
      ];
  keyframe_block:
    | [CstNode<"from">, CstNode<"_keyframe_block_repeat3">, CstNode<"block">]
    | [CstNode<"from">, CstNode<"block">]
    | [CstNode<"to">, CstNode<"_keyframe_block_repeat3">, CstNode<"block">]
    | [CstNode<"to">, CstNode<"block">]
    | [
        CstNode<"integer_value">,
        CstNode<"_keyframe_block_repeat3">,
        CstNode<"block">
      ]
    | [CstNode<"integer_value">, CstNode<"block">];
  supports_statement: [
    CstNode<"@supports">,
    CstNode<"_query">,
    CstNode<"block">
  ];
  scope_statement:
    | [
        CstNode<"@scope">,
        CstNode<"(">,
        CstNode<"_selector">,
        CstNode<")">,
        CstNode<"to">,
        CstNode<"(">,
        CstNode<"_selector">,
        CstNode<")">,
        CstNode<"block">
      ]
    | [
        CstNode<"@scope">,
        CstNode<"(">,
        CstNode<"_selector">,
        CstNode<")">,
        CstNode<"block">
      ]
    | [CstNode<"@scope">, CstNode<"block">];
  _postcss_statement_repeat4:
    | [CstNode<"_value">]
    | [CstNode<"_postcss_statement_repeat4">, CstNode<"_value">]
    | [CstNode<"important_value">]
    | [CstNode<"_postcss_statement_repeat4">, CstNode<"important_value">];
  postcss_statement:
    | [
        CstNode<"at_keyword">,
        CstNode<"_postcss_statement_repeat4">,
        CstNode<";">
      ]
    | [CstNode<"at_keyword">, CstNode<";">];
  at_rule:
    | [
        CstNode<"at_keyword">,
        CstNode<"_query">,
        CstNode<"_import_statement_repeat1">,
        CstNode<";">
      ]
    | [
        CstNode<"at_keyword">,
        CstNode<"_query">,
        CstNode<"_import_statement_repeat1">,
        CstNode<"block">
      ]
    | [CstNode<"at_keyword">, CstNode<"_query">, CstNode<";">]
    | [CstNode<"at_keyword">, CstNode<"_query">, CstNode<"block">]
    | [CstNode<"at_keyword">, CstNode<";">]
    | [CstNode<"at_keyword">, CstNode<"block">];
  rule_set: [CstNode<"selectors">, CstNode<"block">];
  _selectors_repeat5:
    | [CstNode<",">, CstNode<"_selector">]
    | [CstNode<"_selectors_repeat5">, CstNode<",">, CstNode<"_selector">];
  selectors:
    | [CstNode<"_selector">, CstNode<"_selectors_repeat5">]
    | [CstNode<"_selector">];
  _block_repeat6:
    | [CstNode<"declaration">]
    | [CstNode<"_block_repeat6">, CstNode<"declaration">]
    | [CstNode<"rule_set">]
    | [CstNode<"_block_repeat6">, CstNode<"rule_set">]
    | [CstNode<"import_statement">]
    | [CstNode<"_block_repeat6">, CstNode<"import_statement">]
    | [CstNode<"media_statement">]
    | [CstNode<"_block_repeat6">, CstNode<"media_statement">]
    | [CstNode<"charset_statement">]
    | [CstNode<"_block_repeat6">, CstNode<"charset_statement">]
    | [CstNode<"namespace_statement">]
    | [CstNode<"_block_repeat6">, CstNode<"namespace_statement">]
    | [CstNode<"keyframes_statement">]
    | [CstNode<"_block_repeat6">, CstNode<"keyframes_statement">]
    | [CstNode<"supports_statement">]
    | [CstNode<"_block_repeat6">, CstNode<"supports_statement">]
    | [CstNode<"scope_statement">]
    | [CstNode<"_block_repeat6">, CstNode<"scope_statement">]
    | [CstNode<"postcss_statement">]
    | [CstNode<"_block_repeat6">, CstNode<"postcss_statement">]
    | [CstNode<"at_rule">]
    | [CstNode<"_block_repeat6">, CstNode<"at_rule">];
  block:
    | [
        CstNode<"{">,
        CstNode<"_block_repeat6">,
        CstNode<"last_declaration">,
        CstNode<"}">
      ]
    | [CstNode<"{">, CstNode<"_block_repeat6">, CstNode<"}">]
    | [CstNode<"{">, CstNode<"last_declaration">, CstNode<"}">]
    | [CstNode<"{">, CstNode<"}">];
  _selector:
    | [CstNode<"universal_selector">]
    | [CstNode<"identifier">]
    | [CstNode<"class_selector">]
    | [CstNode<"nesting_selector">]
    | [CstNode<"pseudo_class_selector">]
    | [CstNode<"pseudo_element_selector">]
    | [CstNode<"id_selector">]
    | [CstNode<"attribute_selector">]
    | [CstNode<"string_value">]
    | [CstNode<"child_selector">]
    | [CstNode<"descendant_selector">]
    | [CstNode<"sibling_selector">]
    | [CstNode<"adjacent_sibling_selector">]
    | [CstNode<"namespace_selector">];
  nesting_selector: [CstNode<"&">];
  universal_selector: [CstNode<"*">];
  class_selector:
    | [CstNode<"_selector">, CstNode<".">, CstNode<"class_name">]
    | [CstNode<".">, CstNode<"class_name">];
  pseudo_class_selector:
    | [
        CstNode<"_selector">,
        CstNode<":">,
        CstNode<"has">,
        CstNode<"pseudo_class_with_selector_arguments">
      ]
    | [
        CstNode<"_selector">,
        CstNode<":">,
        CstNode<"not">,
        CstNode<"pseudo_class_with_selector_arguments">
      ]
    | [
        CstNode<"_selector">,
        CstNode<":">,
        CstNode<"is">,
        CstNode<"pseudo_class_with_selector_arguments">
      ]
    | [
        CstNode<"_selector">,
        CstNode<":">,
        CstNode<"where">,
        CstNode<"pseudo_class_with_selector_arguments">
      ]
    | [
        CstNode<"_selector">,
        CstNode<":">,
        CstNode<"host">,
        CstNode<"pseudo_class_with_selector_arguments">
      ]
    | [
        CstNode<"_selector">,
        CstNode<":">,
        CstNode<"host-context">,
        CstNode<"pseudo_class_with_selector_arguments">
      ]
    | [
        CstNode<"_selector">,
        CstNode<":">,
        CstNode<"_nth_child_pseudo_class_selector">
      ]
    | [
        CstNode<"_selector">,
        CstNode<":">,
        CstNode<"class_name">,
        CstNode<"pseudo_class_arguments">
      ]
    | [CstNode<"_selector">, CstNode<":">, CstNode<"class_name">]
    | [CstNode<"_selector">, CstNode<":">, CstNode<"host">]
    | [
        CstNode<":">,
        CstNode<"has">,
        CstNode<"pseudo_class_with_selector_arguments">
      ]
    | [
        CstNode<":">,
        CstNode<"not">,
        CstNode<"pseudo_class_with_selector_arguments">
      ]
    | [
        CstNode<":">,
        CstNode<"is">,
        CstNode<"pseudo_class_with_selector_arguments">
      ]
    | [
        CstNode<":">,
        CstNode<"where">,
        CstNode<"pseudo_class_with_selector_arguments">
      ]
    | [
        CstNode<":">,
        CstNode<"host">,
        CstNode<"pseudo_class_with_selector_arguments">
      ]
    | [
        CstNode<":">,
        CstNode<"host-context">,
        CstNode<"pseudo_class_with_selector_arguments">
      ]
    | [CstNode<":">, CstNode<"_nth_child_pseudo_class_selector">]
    | [CstNode<":">, CstNode<"class_name">, CstNode<"pseudo_class_arguments">]
    | [CstNode<":">, CstNode<"class_name">]
    | [CstNode<":">, CstNode<"host">];
  _nth_child_pseudo_class_selector:
    | [CstNode<"nth-child">, CstNode<"pseudo_class_nth_child_arguments">]
    | [CstNode<"nth-last-child">, CstNode<"pseudo_class_nth_child_arguments">];
  pseudo_element_selector:
    | [
        CstNode<"_selector">,
        CstNode<"::">,
        CstNode<"identifier">,
        CstNode<"pseudo_element_arguments">
      ]
    | [CstNode<"_selector">, CstNode<"::">, CstNode<"identifier">]
    | [
        CstNode<"::">,
        CstNode<"identifier">,
        CstNode<"pseudo_element_arguments">
      ]
    | [CstNode<"::">, CstNode<"identifier">];
  id_selector:
    | [CstNode<"_selector">, CstNode<"#">, CstNode<"identifier">]
    | [CstNode<"#">, CstNode<"identifier">];
  attribute_selector:
    | [
        CstNode<"_selector">,
        CstNode<"[">,
        CstNode<"identifier">,
        CstNode<"=">,
        CstNode<"_value">,
        CstNode<"]">
      ]
    | [
        CstNode<"_selector">,
        CstNode<"[">,
        CstNode<"identifier">,
        CstNode<"~=">,
        CstNode<"_value">,
        CstNode<"]">
      ]
    | [
        CstNode<"_selector">,
        CstNode<"[">,
        CstNode<"identifier">,
        CstNode<"^=">,
        CstNode<"_value">,
        CstNode<"]">
      ]
    | [
        CstNode<"_selector">,
        CstNode<"[">,
        CstNode<"identifier">,
        CstNode<"|=">,
        CstNode<"_value">,
        CstNode<"]">
      ]
    | [
        CstNode<"_selector">,
        CstNode<"[">,
        CstNode<"identifier">,
        CstNode<"*=">,
        CstNode<"_value">,
        CstNode<"]">
      ]
    | [
        CstNode<"_selector">,
        CstNode<"[">,
        CstNode<"identifier">,
        CstNode<"$=">,
        CstNode<"_value">,
        CstNode<"]">
      ]
    | [CstNode<"_selector">, CstNode<"[">, CstNode<"identifier">, CstNode<"]">]
    | [
        CstNode<"_selector">,
        CstNode<"[">,
        CstNode<"namespace_selector">,
        CstNode<"=">,
        CstNode<"_value">,
        CstNode<"]">
      ]
    | [
        CstNode<"_selector">,
        CstNode<"[">,
        CstNode<"namespace_selector">,
        CstNode<"~=">,
        CstNode<"_value">,
        CstNode<"]">
      ]
    | [
        CstNode<"_selector">,
        CstNode<"[">,
        CstNode<"namespace_selector">,
        CstNode<"^=">,
        CstNode<"_value">,
        CstNode<"]">
      ]
    | [
        CstNode<"_selector">,
        CstNode<"[">,
        CstNode<"namespace_selector">,
        CstNode<"|=">,
        CstNode<"_value">,
        CstNode<"]">
      ]
    | [
        CstNode<"_selector">,
        CstNode<"[">,
        CstNode<"namespace_selector">,
        CstNode<"*=">,
        CstNode<"_value">,
        CstNode<"]">
      ]
    | [
        CstNode<"_selector">,
        CstNode<"[">,
        CstNode<"namespace_selector">,
        CstNode<"$=">,
        CstNode<"_value">,
        CstNode<"]">
      ]
    | [
        CstNode<"_selector">,
        CstNode<"[">,
        CstNode<"namespace_selector">,
        CstNode<"]">
      ]
    | [
        CstNode<"[">,
        CstNode<"identifier">,
        CstNode<"=">,
        CstNode<"_value">,
        CstNode<"]">
      ]
    | [
        CstNode<"[">,
        CstNode<"identifier">,
        CstNode<"~=">,
        CstNode<"_value">,
        CstNode<"]">
      ]
    | [
        CstNode<"[">,
        CstNode<"identifier">,
        CstNode<"^=">,
        CstNode<"_value">,
        CstNode<"]">
      ]
    | [
        CstNode<"[">,
        CstNode<"identifier">,
        CstNode<"|=">,
        CstNode<"_value">,
        CstNode<"]">
      ]
    | [
        CstNode<"[">,
        CstNode<"identifier">,
        CstNode<"*=">,
        CstNode<"_value">,
        CstNode<"]">
      ]
    | [
        CstNode<"[">,
        CstNode<"identifier">,
        CstNode<"$=">,
        CstNode<"_value">,
        CstNode<"]">
      ]
    | [CstNode<"[">, CstNode<"identifier">, CstNode<"]">]
    | [
        CstNode<"[">,
        CstNode<"namespace_selector">,
        CstNode<"=">,
        CstNode<"_value">,
        CstNode<"]">
      ]
    | [
        CstNode<"[">,
        CstNode<"namespace_selector">,
        CstNode<"~=">,
        CstNode<"_value">,
        CstNode<"]">
      ]
    | [
        CstNode<"[">,
        CstNode<"namespace_selector">,
        CstNode<"^=">,
        CstNode<"_value">,
        CstNode<"]">
      ]
    | [
        CstNode<"[">,
        CstNode<"namespace_selector">,
        CstNode<"|=">,
        CstNode<"_value">,
        CstNode<"]">
      ]
    | [
        CstNode<"[">,
        CstNode<"namespace_selector">,
        CstNode<"*=">,
        CstNode<"_value">,
        CstNode<"]">
      ]
    | [
        CstNode<"[">,
        CstNode<"namespace_selector">,
        CstNode<"$=">,
        CstNode<"_value">,
        CstNode<"]">
      ]
    | [CstNode<"[">, CstNode<"namespace_selector">, CstNode<"]">];
  child_selector:
    | [CstNode<"_selector">, CstNode<">">, CstNode<"_selector">]
    | [CstNode<">">, CstNode<"_selector">];
  descendant_selector: [CstNode<"_selector">, CstNode<"_selector">];
  sibling_selector:
    | [CstNode<"_selector">, CstNode<"~">, CstNode<"_selector">]
    | [CstNode<"~">, CstNode<"_selector">];
  adjacent_sibling_selector:
    | [CstNode<"_selector">, CstNode<"+">, CstNode<"_selector">]
    | [CstNode<"+">, CstNode<"_selector">];
  namespace_selector:
    | [CstNode<"_selector">, CstNode<"|">, CstNode<"_selector">]
    | [CstNode<"|">, CstNode<"_selector">];
  _pseudo_class_arguments_repeat7:
    | [CstNode<"_value">]
    | [CstNode<"_pseudo_class_arguments_repeat7">, CstNode<"_value">];
  _pseudo_class_arguments_repeat8:
    | [CstNode<",">, CstNode<"_selector">]
    | [
        CstNode<"_pseudo_class_arguments_repeat8">,
        CstNode<",">,
        CstNode<"_selector">
      ]
    | [CstNode<",">, CstNode<"_pseudo_class_arguments_repeat7">]
    | [
        CstNode<"_pseudo_class_arguments_repeat8">,
        CstNode<",">,
        CstNode<"_pseudo_class_arguments_repeat7">
      ];
  pseudo_class_arguments:
    | [
        CstNode<"(">,
        CstNode<"_selector">,
        CstNode<"_pseudo_class_arguments_repeat8">,
        CstNode<")">
      ]
    | [CstNode<"(">, CstNode<"_selector">, CstNode<")">]
    | [
        CstNode<"(">,
        CstNode<"_pseudo_class_arguments_repeat7">,
        CstNode<"_pseudo_class_arguments_repeat8">,
        CstNode<")">
      ]
    | [CstNode<"(">, CstNode<"_pseudo_class_arguments_repeat7">, CstNode<")">]
    | [CstNode<"(">, CstNode<")">];
  pseudo_class_with_selector_arguments:
    | [
        CstNode<"(">,
        CstNode<"_selector">,
        CstNode<"_selectors_repeat5">,
        CstNode<")">
      ]
    | [CstNode<"(">, CstNode<"_selector">, CstNode<")">]
    | [CstNode<"(">, CstNode<")">];
  pseudo_class_nth_child_arguments:
    | [
        CstNode<"(">,
        CstNode<"even">,
        CstNode<"of">,
        CstNode<"_selector">,
        CstNode<")">
      ]
    | [CstNode<"(">, CstNode<"even">, CstNode<")">]
    | [
        CstNode<"(">,
        CstNode<"odd">,
        CstNode<"of">,
        CstNode<"_selector">,
        CstNode<")">
      ]
    | [CstNode<"(">, CstNode<"odd">, CstNode<")">]
    | [
        CstNode<"(">,
        CstNode<"integer_value">,
        CstNode<"of">,
        CstNode<"_selector">,
        CstNode<")">
      ]
    | [CstNode<"(">, CstNode<"integer_value">, CstNode<")">]
    | [
        CstNode<"(">,
        CstNode<"_nth_functional_notation">,
        CstNode<"of">,
        CstNode<"_selector">,
        CstNode<")">
      ]
    | [CstNode<"(">, CstNode<"_nth_functional_notation">, CstNode<")">];
  pseudo_element_arguments:
    | [
        CstNode<"(">,
        CstNode<"_selector">,
        CstNode<"_pseudo_class_arguments_repeat8">,
        CstNode<")">
      ]
    | [CstNode<"(">, CstNode<"_selector">, CstNode<")">]
    | [
        CstNode<"(">,
        CstNode<"_pseudo_class_arguments_repeat7">,
        CstNode<"_pseudo_class_arguments_repeat8">,
        CstNode<")">
      ]
    | [CstNode<"(">, CstNode<"_pseudo_class_arguments_repeat7">, CstNode<")">]
    | [CstNode<"(">, CstNode<")">];
  _declaration_repeat9:
    | [CstNode<",">, CstNode<"_value">]
    | [CstNode<"_declaration_repeat9">, CstNode<",">, CstNode<"_value">]
    | [CstNode<"_value">]
    | [CstNode<"_declaration_repeat9">, CstNode<"_value">];
  declaration:
    | [
        CstNode<"identifier">,
        CstNode<":">,
        CstNode<"_value">,
        CstNode<"_declaration_repeat9">,
        CstNode<"important">,
        CstNode<";">
      ]
    | [
        CstNode<"identifier">,
        CstNode<":">,
        CstNode<"_value">,
        CstNode<"_declaration_repeat9">,
        CstNode<";">
      ]
    | [
        CstNode<"identifier">,
        CstNode<":">,
        CstNode<"_value">,
        CstNode<"important">,
        CstNode<";">
      ]
    | [CstNode<"identifier">, CstNode<":">, CstNode<"_value">, CstNode<";">];
  last_declaration:
    | [
        CstNode<"identifier">,
        CstNode<":">,
        CstNode<"_value">,
        CstNode<"_declaration_repeat9">,
        CstNode<"important">
      ]
    | [
        CstNode<"identifier">,
        CstNode<":">,
        CstNode<"_value">,
        CstNode<"_declaration_repeat9">
      ]
    | [
        CstNode<"identifier">,
        CstNode<":">,
        CstNode<"_value">,
        CstNode<"important">
      ]
    | [CstNode<"identifier">, CstNode<":">, CstNode<"_value">];
  important: [CstNode<"!important">];
  _query:
    | [CstNode<"identifier">]
    | [CstNode<"feature_query">]
    | [CstNode<"binary_query">]
    | [CstNode<"unary_query">]
    | [CstNode<"selector_query">]
    | [CstNode<"parenthesized_query">];
  feature_query: [
    CstNode<"(">,
    CstNode<"identifier">,
    CstNode<":">,
    CstNode<"_pseudo_class_arguments_repeat7">,
    CstNode<")">
  ];
  parenthesized_query: [CstNode<"(">, CstNode<"_query">, CstNode<")">];
  binary_query:
    | [CstNode<"_query">, CstNode<"and">, CstNode<"_query">]
    | [CstNode<"_query">, CstNode<"or">, CstNode<"_query">];
  unary_query:
    | [CstNode<"not">, CstNode<"_query">]
    | [CstNode<"only">, CstNode<"_query">];
  selector_query: [
    CstNode<"selector">,
    CstNode<"(">,
    CstNode<"_selector">,
    CstNode<")">
  ];
  _value:
    | [CstNode<"identifier">]
    | [CstNode<"plain_value">]
    | [CstNode<"color_value">]
    | [CstNode<"integer_value">]
    | [CstNode<"float_value">]
    | [CstNode<"string_value">]
    | [CstNode<"grid_value">]
    | [CstNode<"binary_expression">]
    | [CstNode<"parenthesized_value">]
    | [CstNode<"call_expression">]
    | [CstNode<"important">];
  parenthesized_value: [CstNode<"(">, CstNode<"_value">, CstNode<")">];
  _string_value_repeat10:
    | [CstNode<"_string_value_token2">]
    | [CstNode<"_string_value_repeat10">, CstNode<"_string_value_token2">]
    | [CstNode<"escape_sequence">]
    | [CstNode<"_string_value_repeat10">, CstNode<"escape_sequence">];
  _string_value_repeat11:
    | [CstNode<"_string_value_token3">]
    | [CstNode<"_string_value_repeat11">, CstNode<"_string_value_token3">]
    | [CstNode<"escape_sequence">]
    | [CstNode<"_string_value_repeat11">, CstNode<"escape_sequence">];
  string_value:
    | [CstNode<"'">, CstNode<"_string_value_repeat10">, CstNode<"'">]
    | [CstNode<"'">, CstNode<"'">]
    | [CstNode<'"'>, CstNode<"_string_value_repeat11">, CstNode<'"'>]
    | [CstNode<'"'>, CstNode<'"'>];
  _grid_value_repeat12:
    | [CstNode<",">, CstNode<"_value">]
    | [CstNode<"_grid_value_repeat12">, CstNode<",">, CstNode<"_value">];
  grid_value:
    | [
        CstNode<"[">,
        CstNode<"_value">,
        CstNode<"_grid_value_repeat12">,
        CstNode<"]">
      ]
    | [CstNode<"[">, CstNode<"_value">, CstNode<"]">];
  call_expression: [CstNode<"identifier">, CstNode<"arguments">];
  binary_expression:
    | [CstNode<"_value">, CstNode<"+">, CstNode<"_value">]
    | [CstNode<"_value">, CstNode<"-">, CstNode<"_value">]
    | [CstNode<"_value">, CstNode<"*">, CstNode<"_value">]
    | [CstNode<"_value">, CstNode<"/">, CstNode<"_value">];
  _arguments_repeat13:
    | [CstNode<",">, CstNode<"_pseudo_class_arguments_repeat7">]
    | [
        CstNode<"_arguments_repeat13">,
        CstNode<",">,
        CstNode<"_pseudo_class_arguments_repeat7">
      ]
    | [CstNode<";">, CstNode<"_pseudo_class_arguments_repeat7">]
    | [
        CstNode<"_arguments_repeat13">,
        CstNode<";">,
        CstNode<"_pseudo_class_arguments_repeat7">
      ];
  arguments:
    | [
        CstNode<"(">,
        CstNode<"_pseudo_class_arguments_repeat7">,
        CstNode<"_arguments_repeat13">,
        CstNode<")">
      ]
    | [CstNode<"(">, CstNode<"_pseudo_class_arguments_repeat7">, CstNode<")">]
    | [CstNode<"(">, CstNode<")">];
  _class_name_repeat14:
    | [CstNode<"_class_name_token4">]
    | [CstNode<"_class_name_repeat14">, CstNode<"_class_name_token4">]
    | [CstNode<"escape_sequence">]
    | [CstNode<"_class_name_repeat14">, CstNode<"escape_sequence">];
  class_name:
    | [CstNode<"identifier">, CstNode<"_class_name_repeat14">]
    | [CstNode<"identifier">]
    | [CstNode<"escape_sequence">, CstNode<"_class_name_repeat14">]
    | [CstNode<"escape_sequence">];
}

export type RuleNode<Name extends RuleName = RuleName> = CstNode<Name> & {
  readonly items: RuleChildrenMap[Name];
};

export type TypedCstNode =
  | { [K in TokenName]: TokenNode<K> }[TokenName]
  | { [K in RuleName]: RuleNode<K> }[RuleName];

export type Node = CstNode;

export function parse(input: Uint8Array | string): CstNode<StartRuleName>;
