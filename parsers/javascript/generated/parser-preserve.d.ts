export type TokenName =
  | "true"
  | "false"
  | "null"
  | "this"
  | "super"
  | "{"
  | "}"
  | "if"
  | "("
  | ")"
  | "else"
  | "while"
  | "do"
  | ";"
  | "for"
  | "const"
  | "let"
  | "var"
  | "of"
  | "in"
  | "return"
  | "throw"
  | "try"
  | "catch"
  | "finally"
  | "switch"
  | "case"
  | ":"
  | "default"
  | "break"
  | "continue"
  | "import"
  | "from"
  | ","
  | "*"
  | "as"
  | "type"
  | "export"
  | "declare"
  | "="
  | "..."
  | "["
  | "]"
  | "async"
  | "function"
  | "static"
  | "readonly"
  | "get"
  | "set"
  | "class"
  | "extends"
  | "implements"
  | "interface"
  | "?:"
  | "<"
  | ">"
  | "|"
  | "&"
  | "=>"
  | "void"
  | "typeof"
  | "is"
  | "new"
  | "?"
  | "||"
  | "??"
  | "&&"
  | "^"
  | "instanceof"
  | "+"
  | "-"
  | "**"
  | "!"
  | "~"
  | "delete"
  | "await"
  | "?."
  | "."
  | "identifier"
  | "private_property_identifier"
  | "number"
  | "string"
  | "template_string"
  | "accessibility_modifier"
  | "compound_assignment_operator"
  | "equality_operator"
  | "relational_operator"
  | "shift_operator"
  | "multiplicative_operator"
  | "update_operator"
  | "regex"
  | "@par-gen.EOF"
  | "@par-gen.ERROR"
  | "comment";
export type RuleName =
  | "program"
  | "_statement"
  | "_statement_block_repeat1"
  | "statement_block"
  | "if_statement"
  | "while_statement"
  | "do_statement"
  | "for_statement"
  | "for_in_statement"
  | "return_statement"
  | "throw_statement"
  | "try_statement"
  | "catch_clause"
  | "finally_clause"
  | "switch_statement"
  | "_switch_body_repeat2"
  | "switch_body"
  | "switch_case"
  | "switch_default"
  | "break_statement"
  | "continue_statement"
  | "expression_statement"
  | "_declaration"
  | "import_statement"
  | "import_clause"
  | "namespace_import"
  | "_named_imports_repeat3"
  | "named_imports"
  | "import_specifier"
  | "export_statement"
  | "_variable_declaration_repeat4"
  | "variable_declaration"
  | "variable_declarator"
  | "_binding_pattern"
  | "_object_pattern_repeat5"
  | "object_pattern"
  | "object_pattern_property"
  | "_array_pattern_repeat6"
  | "array_pattern"
  | "array_pattern_element"
  | "function_declaration"
  | "_formal_parameters_repeat7"
  | "formal_parameters"
  | "formal_parameter"
  | "_typed_parameters_repeat8"
  | "typed_parameters"
  | "typed_parameter"
  | "member_modifiers"
  | "class_declaration"
  | "class_heritage"
  | "_implements_clause_repeat9"
  | "implements_clause"
  | "_class_body_repeat10"
  | "class_body"
  | "method_definition"
  | "field_definition"
  | "interface_declaration"
  | "extends_type_clause"
  | "type_alias_declaration"
  | "type_annotation"
  | "_type_parameters_repeat11"
  | "type_parameters"
  | "type_parameter"
  | "type_arguments"
  | "_type"
  | "union_type"
  | "intersection_type"
  | "function_type"
  | "_primary_type"
  | "generic_type"
  | "array_type"
  | "indexed_access_type"
  | "tuple_type"
  | "parenthesized_type"
  | "typeof_type"
  | "type_predicate"
  | "_object_type_repeat12"
  | "object_type"
  | "property_signature"
  | "method_signature"
  | "construct_signature"
  | "index_signature"
  | "_expression"
  | "_contextual_id"
  | "_primary_expression"
  | "_parenthesized_expression_repeat13"
  | "parenthesized_expression"
  | "_lhs_expression"
  | "assignment_expression"
  | "augmented_assignment_expression"
  | "arrow_function"
  | "ternary_expression"
  | "binary_expression"
  | "as_expression"
  | "unary_expression"
  | "await_expression"
  | "update_expression"
  | "new_expression"
  | "call_expression"
  | "member_expression"
  | "subscript_expression"
  | "arguments"
  | "argument"
  | "spread_element"
  | "_array_repeat14"
  | "array"
  | "_object_repeat15"
  | "object"
  | "object_member"
  | "object_method"
  | "pair"
  | "shorthand_property_identifier"
  | "_property_name"
  | "computed_property_name"
  | "function_expression"
  | "class_expression";
export type SymbolName = TokenName | RuleName;
export type NodeName = SymbolName;
export type StartRuleName = "program";

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
  program:
    | [CstNode<"_statement">]
    | [CstNode<"program">, CstNode<"_statement">];
  _statement:
    | [CstNode<"_declaration">]
    | [CstNode<"statement_block">]
    | [CstNode<"if_statement">]
    | [CstNode<"while_statement">]
    | [CstNode<"do_statement">]
    | [CstNode<"for_statement">]
    | [CstNode<"for_in_statement">]
    | [CstNode<"return_statement">]
    | [CstNode<"throw_statement">]
    | [CstNode<"try_statement">]
    | [CstNode<"switch_statement">]
    | [CstNode<"break_statement">]
    | [CstNode<"continue_statement">]
    | [CstNode<"expression_statement">];
  _statement_block_repeat1:
    | [CstNode<"_statement">]
    | [CstNode<"_statement_block_repeat1">, CstNode<"_statement">];
  statement_block:
    | [CstNode<"{">, CstNode<"_statement_block_repeat1">, CstNode<"}">]
    | [CstNode<"{">, CstNode<"}">];
  if_statement:
    | [
        CstNode<"if">,
        CstNode<"(">,
        CstNode<"_expression">,
        CstNode<")">,
        CstNode<"_statement">
      ]
    | [
        CstNode<"if">,
        CstNode<"(">,
        CstNode<"_expression">,
        CstNode<")">,
        CstNode<"_statement">,
        CstNode<"else">,
        CstNode<"_statement">
      ];
  while_statement: [
    CstNode<"while">,
    CstNode<"(">,
    CstNode<"_expression">,
    CstNode<")">,
    CstNode<"_statement">
  ];
  do_statement:
    | [
        CstNode<"do">,
        CstNode<"_statement">,
        CstNode<"while">,
        CstNode<"(">,
        CstNode<"_expression">,
        CstNode<")">,
        CstNode<";">
      ]
    | [
        CstNode<"do">,
        CstNode<"_statement">,
        CstNode<"while">,
        CstNode<"(">,
        CstNode<"_expression">,
        CstNode<")">
      ];
  for_statement:
    | [
        CstNode<"for">,
        CstNode<"(">,
        CstNode<"variable_declaration">,
        CstNode<"_expression">,
        CstNode<";">,
        CstNode<"_expression">,
        CstNode<")">,
        CstNode<"_statement">
      ]
    | [
        CstNode<"for">,
        CstNode<"(">,
        CstNode<"variable_declaration">,
        CstNode<"_expression">,
        CstNode<";">,
        CstNode<")">,
        CstNode<"_statement">
      ]
    | [
        CstNode<"for">,
        CstNode<"(">,
        CstNode<"variable_declaration">,
        CstNode<";">,
        CstNode<"_expression">,
        CstNode<")">,
        CstNode<"_statement">
      ]
    | [
        CstNode<"for">,
        CstNode<"(">,
        CstNode<"variable_declaration">,
        CstNode<";">,
        CstNode<")">,
        CstNode<"_statement">
      ]
    | [
        CstNode<"for">,
        CstNode<"(">,
        CstNode<"_expression">,
        CstNode<";">,
        CstNode<"_expression">,
        CstNode<";">,
        CstNode<"_expression">,
        CstNode<")">,
        CstNode<"_statement">
      ]
    | [
        CstNode<"for">,
        CstNode<"(">,
        CstNode<"_expression">,
        CstNode<";">,
        CstNode<"_expression">,
        CstNode<";">,
        CstNode<")">,
        CstNode<"_statement">
      ]
    | [
        CstNode<"for">,
        CstNode<"(">,
        CstNode<"_expression">,
        CstNode<";">,
        CstNode<";">,
        CstNode<"_expression">,
        CstNode<")">,
        CstNode<"_statement">
      ]
    | [
        CstNode<"for">,
        CstNode<"(">,
        CstNode<"_expression">,
        CstNode<";">,
        CstNode<";">,
        CstNode<")">,
        CstNode<"_statement">
      ]
    | [
        CstNode<"for">,
        CstNode<"(">,
        CstNode<";">,
        CstNode<"_expression">,
        CstNode<";">,
        CstNode<"_expression">,
        CstNode<")">,
        CstNode<"_statement">
      ]
    | [
        CstNode<"for">,
        CstNode<"(">,
        CstNode<";">,
        CstNode<"_expression">,
        CstNode<";">,
        CstNode<")">,
        CstNode<"_statement">
      ]
    | [
        CstNode<"for">,
        CstNode<"(">,
        CstNode<";">,
        CstNode<";">,
        CstNode<"_expression">,
        CstNode<")">,
        CstNode<"_statement">
      ]
    | [
        CstNode<"for">,
        CstNode<"(">,
        CstNode<";">,
        CstNode<";">,
        CstNode<")">,
        CstNode<"_statement">
      ];
  for_in_statement:
    | [
        CstNode<"for">,
        CstNode<"(">,
        CstNode<"const">,
        CstNode<"_binding_pattern">,
        CstNode<"of">,
        CstNode<"_expression">,
        CstNode<")">,
        CstNode<"_statement">
      ]
    | [
        CstNode<"for">,
        CstNode<"(">,
        CstNode<"const">,
        CstNode<"_binding_pattern">,
        CstNode<"in">,
        CstNode<"_expression">,
        CstNode<")">,
        CstNode<"_statement">
      ]
    | [
        CstNode<"for">,
        CstNode<"(">,
        CstNode<"let">,
        CstNode<"_binding_pattern">,
        CstNode<"of">,
        CstNode<"_expression">,
        CstNode<")">,
        CstNode<"_statement">
      ]
    | [
        CstNode<"for">,
        CstNode<"(">,
        CstNode<"let">,
        CstNode<"_binding_pattern">,
        CstNode<"in">,
        CstNode<"_expression">,
        CstNode<")">,
        CstNode<"_statement">
      ]
    | [
        CstNode<"for">,
        CstNode<"(">,
        CstNode<"var">,
        CstNode<"_binding_pattern">,
        CstNode<"of">,
        CstNode<"_expression">,
        CstNode<")">,
        CstNode<"_statement">
      ]
    | [
        CstNode<"for">,
        CstNode<"(">,
        CstNode<"var">,
        CstNode<"_binding_pattern">,
        CstNode<"in">,
        CstNode<"_expression">,
        CstNode<")">,
        CstNode<"_statement">
      ];
  return_statement:
    | [CstNode<"return">, CstNode<"_expression">, CstNode<";">]
    | [CstNode<"return">, CstNode<"_expression">]
    | [CstNode<"return">, CstNode<";">]
    | [CstNode<"return">];
  throw_statement:
    | [CstNode<"throw">, CstNode<"_expression">, CstNode<";">]
    | [CstNode<"throw">, CstNode<"_expression">];
  try_statement:
    | [
        CstNode<"try">,
        CstNode<"statement_block">,
        CstNode<"catch_clause">,
        CstNode<"finally_clause">
      ]
    | [CstNode<"try">, CstNode<"statement_block">, CstNode<"catch_clause">]
    | [CstNode<"try">, CstNode<"statement_block">, CstNode<"finally_clause">]
    | [CstNode<"try">, CstNode<"statement_block">];
  catch_clause:
    | [
        CstNode<"catch">,
        CstNode<"(">,
        CstNode<"_binding_pattern">,
        CstNode<"type_annotation">,
        CstNode<")">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"catch">,
        CstNode<"(">,
        CstNode<"_binding_pattern">,
        CstNode<")">,
        CstNode<"statement_block">
      ]
    | [CstNode<"catch">, CstNode<"statement_block">];
  finally_clause: [CstNode<"finally">, CstNode<"statement_block">];
  switch_statement: [
    CstNode<"switch">,
    CstNode<"(">,
    CstNode<"_expression">,
    CstNode<")">,
    CstNode<"switch_body">
  ];
  _switch_body_repeat2:
    | [CstNode<"switch_case">]
    | [CstNode<"_switch_body_repeat2">, CstNode<"switch_case">]
    | [CstNode<"switch_default">]
    | [CstNode<"_switch_body_repeat2">, CstNode<"switch_default">];
  switch_body:
    | [CstNode<"{">, CstNode<"_switch_body_repeat2">, CstNode<"}">]
    | [CstNode<"{">, CstNode<"}">];
  switch_case:
    | [
        CstNode<"case">,
        CstNode<"_expression">,
        CstNode<":">,
        CstNode<"_statement_block_repeat1">
      ]
    | [CstNode<"case">, CstNode<"_expression">, CstNode<":">];
  switch_default:
    | [CstNode<"default">, CstNode<":">, CstNode<"_statement_block_repeat1">]
    | [CstNode<"default">, CstNode<":">];
  break_statement:
    | [CstNode<"break">, CstNode<"identifier">, CstNode<";">]
    | [CstNode<"break">, CstNode<"identifier">]
    | [CstNode<"break">, CstNode<";">]
    | [CstNode<"break">];
  continue_statement:
    | [CstNode<"continue">, CstNode<"identifier">, CstNode<";">]
    | [CstNode<"continue">, CstNode<"identifier">]
    | [CstNode<"continue">, CstNode<";">]
    | [CstNode<"continue">];
  expression_statement:
    | [CstNode<"_expression">, CstNode<";">]
    | [CstNode<"_expression">];
  _declaration:
    | [CstNode<"import_statement">]
    | [CstNode<"export_statement">]
    | [CstNode<"variable_declaration">]
    | [CstNode<"function_declaration">]
    | [CstNode<"class_declaration">]
    | [CstNode<"interface_declaration">]
    | [CstNode<"type_alias_declaration">];
  import_statement:
    | [
        CstNode<"import">,
        CstNode<"import_clause">,
        CstNode<"from">,
        CstNode<"string">,
        CstNode<";">
      ]
    | [
        CstNode<"import">,
        CstNode<"import_clause">,
        CstNode<"from">,
        CstNode<"string">
      ]
    | [CstNode<"import">, CstNode<"string">, CstNode<";">]
    | [CstNode<"import">, CstNode<"string">];
  import_clause:
    | [CstNode<"identifier">]
    | [CstNode<"named_imports">]
    | [CstNode<"namespace_import">]
    | [CstNode<"identifier">, CstNode<",">, CstNode<"named_imports">]
    | [CstNode<"identifier">, CstNode<",">, CstNode<"namespace_import">];
  namespace_import: [CstNode<"*">, CstNode<"as">, CstNode<"identifier">];
  _named_imports_repeat3:
    | [CstNode<",">, CstNode<"import_specifier">]
    | [
        CstNode<"_named_imports_repeat3">,
        CstNode<",">,
        CstNode<"import_specifier">
      ];
  named_imports:
    | [
        CstNode<"{">,
        CstNode<"import_specifier">,
        CstNode<"_named_imports_repeat3">,
        CstNode<",">,
        CstNode<"}">
      ]
    | [
        CstNode<"{">,
        CstNode<"import_specifier">,
        CstNode<"_named_imports_repeat3">,
        CstNode<"}">
      ]
    | [CstNode<"{">, CstNode<"import_specifier">, CstNode<",">, CstNode<"}">]
    | [CstNode<"{">, CstNode<"import_specifier">, CstNode<"}">]
    | [CstNode<"{">, CstNode<"}">];
  import_specifier:
    | [
        CstNode<"type">,
        CstNode<"identifier">,
        CstNode<"as">,
        CstNode<"identifier">
      ]
    | [CstNode<"type">, CstNode<"identifier">]
    | [CstNode<"identifier">, CstNode<"as">, CstNode<"identifier">]
    | [CstNode<"identifier">];
  export_statement:
    | [CstNode<"export">, CstNode<"declare">, CstNode<"_declaration">]
    | [CstNode<"export">, CstNode<"_declaration">]
    | [
        CstNode<"export">,
        CstNode<"default">,
        CstNode<"_expression">,
        CstNode<";">
      ]
    | [CstNode<"export">, CstNode<"default">, CstNode<"_expression">]
    | [
        CstNode<"export">,
        CstNode<"default">,
        CstNode<"function_declaration">,
        CstNode<";">
      ]
    | [CstNode<"export">, CstNode<"default">, CstNode<"function_declaration">]
    | [
        CstNode<"export">,
        CstNode<"default">,
        CstNode<"class_declaration">,
        CstNode<";">
      ]
    | [CstNode<"export">, CstNode<"default">, CstNode<"class_declaration">]
    | [
        CstNode<"export">,
        CstNode<"named_imports">,
        CstNode<"from">,
        CstNode<"string">,
        CstNode<";">
      ]
    | [
        CstNode<"export">,
        CstNode<"named_imports">,
        CstNode<"from">,
        CstNode<"string">
      ]
    | [CstNode<"export">, CstNode<"named_imports">, CstNode<";">]
    | [CstNode<"export">, CstNode<"named_imports">]
    | [
        CstNode<"export">,
        CstNode<"*">,
        CstNode<"as">,
        CstNode<"identifier">,
        CstNode<"from">,
        CstNode<"string">,
        CstNode<";">
      ]
    | [
        CstNode<"export">,
        CstNode<"*">,
        CstNode<"as">,
        CstNode<"identifier">,
        CstNode<"from">,
        CstNode<"string">
      ]
    | [
        CstNode<"export">,
        CstNode<"*">,
        CstNode<"from">,
        CstNode<"string">,
        CstNode<";">
      ]
    | [CstNode<"export">, CstNode<"*">, CstNode<"from">, CstNode<"string">];
  _variable_declaration_repeat4:
    | [CstNode<",">, CstNode<"variable_declarator">]
    | [
        CstNode<"_variable_declaration_repeat4">,
        CstNode<",">,
        CstNode<"variable_declarator">
      ];
  variable_declaration:
    | [
        CstNode<"const">,
        CstNode<"variable_declarator">,
        CstNode<"_variable_declaration_repeat4">,
        CstNode<";">
      ]
    | [
        CstNode<"const">,
        CstNode<"variable_declarator">,
        CstNode<"_variable_declaration_repeat4">
      ]
    | [CstNode<"const">, CstNode<"variable_declarator">, CstNode<";">]
    | [CstNode<"const">, CstNode<"variable_declarator">]
    | [
        CstNode<"let">,
        CstNode<"variable_declarator">,
        CstNode<"_variable_declaration_repeat4">,
        CstNode<";">
      ]
    | [
        CstNode<"let">,
        CstNode<"variable_declarator">,
        CstNode<"_variable_declaration_repeat4">
      ]
    | [CstNode<"let">, CstNode<"variable_declarator">, CstNode<";">]
    | [CstNode<"let">, CstNode<"variable_declarator">]
    | [
        CstNode<"var">,
        CstNode<"variable_declarator">,
        CstNode<"_variable_declaration_repeat4">,
        CstNode<";">
      ]
    | [
        CstNode<"var">,
        CstNode<"variable_declarator">,
        CstNode<"_variable_declaration_repeat4">
      ]
    | [CstNode<"var">, CstNode<"variable_declarator">, CstNode<";">]
    | [CstNode<"var">, CstNode<"variable_declarator">];
  variable_declarator:
    | [
        CstNode<"_binding_pattern">,
        CstNode<"type_annotation">,
        CstNode<"=">,
        CstNode<"_expression">
      ]
    | [CstNode<"_binding_pattern">, CstNode<"type_annotation">]
    | [CstNode<"_binding_pattern">, CstNode<"=">, CstNode<"_expression">]
    | [CstNode<"_binding_pattern">];
  _binding_pattern:
    | [CstNode<"identifier">]
    | [CstNode<"object_pattern">]
    | [CstNode<"array_pattern">];
  _object_pattern_repeat5:
    | [CstNode<",">, CstNode<"object_pattern_property">]
    | [
        CstNode<"_object_pattern_repeat5">,
        CstNode<",">,
        CstNode<"object_pattern_property">
      ];
  object_pattern:
    | [
        CstNode<"{">,
        CstNode<"object_pattern_property">,
        CstNode<"_object_pattern_repeat5">,
        CstNode<",">,
        CstNode<"}">
      ]
    | [
        CstNode<"{">,
        CstNode<"object_pattern_property">,
        CstNode<"_object_pattern_repeat5">,
        CstNode<"}">
      ]
    | [
        CstNode<"{">,
        CstNode<"object_pattern_property">,
        CstNode<",">,
        CstNode<"}">
      ]
    | [CstNode<"{">, CstNode<"object_pattern_property">, CstNode<"}">]
    | [CstNode<"{">, CstNode<"}">];
  object_pattern_property:
    | [CstNode<"identifier">, CstNode<"=">, CstNode<"_expression">]
    | [CstNode<"identifier">]
    | [
        CstNode<"_property_name">,
        CstNode<":">,
        CstNode<"_binding_pattern">,
        CstNode<"=">,
        CstNode<"_expression">
      ]
    | [CstNode<"_property_name">, CstNode<":">, CstNode<"_binding_pattern">]
    | [CstNode<"...">, CstNode<"_binding_pattern">];
  _array_pattern_repeat6:
    | [CstNode<",">, CstNode<"array_pattern_element">]
    | [
        CstNode<"_array_pattern_repeat6">,
        CstNode<",">,
        CstNode<"array_pattern_element">
      ]
    | [CstNode<",">]
    | [CstNode<"_array_pattern_repeat6">, CstNode<",">];
  array_pattern:
    | [
        CstNode<"[">,
        CstNode<",">,
        CstNode<"array_pattern_element">,
        CstNode<"_array_pattern_repeat6">,
        CstNode<"]">
      ]
    | [
        CstNode<"[">,
        CstNode<",">,
        CstNode<"array_pattern_element">,
        CstNode<"]">
      ]
    | [
        CstNode<"[">,
        CstNode<"array_pattern_element">,
        CstNode<"_array_pattern_repeat6">,
        CstNode<"]">
      ]
    | [CstNode<"[">, CstNode<"array_pattern_element">, CstNode<"]">]
    | [CstNode<"[">, CstNode<"]">];
  array_pattern_element:
    | [CstNode<"_binding_pattern">, CstNode<"=">, CstNode<"_expression">]
    | [CstNode<"_binding_pattern">]
    | [CstNode<"...">, CstNode<"_binding_pattern">];
  function_declaration:
    | [
        CstNode<"async">,
        CstNode<"function">,
        CstNode<"identifier">,
        CstNode<"type_parameters">,
        CstNode<"formal_parameters">,
        CstNode<"type_annotation">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"async">,
        CstNode<"function">,
        CstNode<"identifier">,
        CstNode<"type_parameters">,
        CstNode<"formal_parameters">,
        CstNode<"type_annotation">,
        CstNode<";">
      ]
    | [
        CstNode<"async">,
        CstNode<"function">,
        CstNode<"identifier">,
        CstNode<"type_parameters">,
        CstNode<"formal_parameters">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"async">,
        CstNode<"function">,
        CstNode<"identifier">,
        CstNode<"type_parameters">,
        CstNode<"formal_parameters">,
        CstNode<";">
      ]
    | [
        CstNode<"async">,
        CstNode<"function">,
        CstNode<"identifier">,
        CstNode<"formal_parameters">,
        CstNode<"type_annotation">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"async">,
        CstNode<"function">,
        CstNode<"identifier">,
        CstNode<"formal_parameters">,
        CstNode<"type_annotation">,
        CstNode<";">
      ]
    | [
        CstNode<"async">,
        CstNode<"function">,
        CstNode<"identifier">,
        CstNode<"formal_parameters">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"async">,
        CstNode<"function">,
        CstNode<"identifier">,
        CstNode<"formal_parameters">,
        CstNode<";">
      ]
    | [
        CstNode<"function">,
        CstNode<"identifier">,
        CstNode<"type_parameters">,
        CstNode<"formal_parameters">,
        CstNode<"type_annotation">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"function">,
        CstNode<"identifier">,
        CstNode<"type_parameters">,
        CstNode<"formal_parameters">,
        CstNode<"type_annotation">,
        CstNode<";">
      ]
    | [
        CstNode<"function">,
        CstNode<"identifier">,
        CstNode<"type_parameters">,
        CstNode<"formal_parameters">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"function">,
        CstNode<"identifier">,
        CstNode<"type_parameters">,
        CstNode<"formal_parameters">,
        CstNode<";">
      ]
    | [
        CstNode<"function">,
        CstNode<"identifier">,
        CstNode<"formal_parameters">,
        CstNode<"type_annotation">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"function">,
        CstNode<"identifier">,
        CstNode<"formal_parameters">,
        CstNode<"type_annotation">,
        CstNode<";">
      ]
    | [
        CstNode<"function">,
        CstNode<"identifier">,
        CstNode<"formal_parameters">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"function">,
        CstNode<"identifier">,
        CstNode<"formal_parameters">,
        CstNode<";">
      ];
  _formal_parameters_repeat7:
    | [CstNode<",">, CstNode<"formal_parameter">]
    | [
        CstNode<"_formal_parameters_repeat7">,
        CstNode<",">,
        CstNode<"formal_parameter">
      ];
  formal_parameters:
    | [
        CstNode<"(">,
        CstNode<"formal_parameter">,
        CstNode<"_formal_parameters_repeat7">,
        CstNode<",">,
        CstNode<")">
      ]
    | [
        CstNode<"(">,
        CstNode<"formal_parameter">,
        CstNode<"_formal_parameters_repeat7">,
        CstNode<")">
      ]
    | [CstNode<"(">, CstNode<"formal_parameter">, CstNode<",">, CstNode<")">]
    | [CstNode<"(">, CstNode<"formal_parameter">, CstNode<")">]
    | [CstNode<"(">, CstNode<")">];
  formal_parameter:
    | [
        CstNode<"member_modifiers">,
        CstNode<"_binding_pattern">,
        CstNode<"type_annotation">,
        CstNode<"=">,
        CstNode<"_expression">
      ]
    | [
        CstNode<"member_modifiers">,
        CstNode<"_binding_pattern">,
        CstNode<"type_annotation">
      ]
    | [
        CstNode<"member_modifiers">,
        CstNode<"_binding_pattern">,
        CstNode<"=">,
        CstNode<"_expression">
      ]
    | [CstNode<"member_modifiers">, CstNode<"_binding_pattern">]
    | [
        CstNode<"_binding_pattern">,
        CstNode<"type_annotation">,
        CstNode<"=">,
        CstNode<"_expression">
      ]
    | [CstNode<"_binding_pattern">, CstNode<"type_annotation">]
    | [CstNode<"_binding_pattern">, CstNode<"=">, CstNode<"_expression">]
    | [CstNode<"_binding_pattern">]
    | [CstNode<"...">, CstNode<"_binding_pattern">, CstNode<"type_annotation">]
    | [CstNode<"...">, CstNode<"_binding_pattern">];
  _typed_parameters_repeat8:
    | [CstNode<",">, CstNode<"typed_parameter">]
    | [
        CstNode<"_typed_parameters_repeat8">,
        CstNode<",">,
        CstNode<"typed_parameter">
      ]
    | [CstNode<",">, CstNode<"argument">]
    | [CstNode<"_typed_parameters_repeat8">, CstNode<",">, CstNode<"argument">];
  typed_parameters:
    | [
        CstNode<"(">,
        CstNode<"typed_parameter">,
        CstNode<"_typed_parameters_repeat8">,
        CstNode<",">,
        CstNode<")">
      ]
    | [
        CstNode<"(">,
        CstNode<"typed_parameter">,
        CstNode<"_typed_parameters_repeat8">,
        CstNode<")">
      ]
    | [CstNode<"(">, CstNode<"typed_parameter">, CstNode<",">, CstNode<")">]
    | [CstNode<"(">, CstNode<"typed_parameter">, CstNode<")">];
  typed_parameter:
    | [
        CstNode<"...">,
        CstNode<"identifier">,
        CstNode<"type_annotation">,
        CstNode<"=">,
        CstNode<"_expression">
      ]
    | [CstNode<"...">, CstNode<"identifier">, CstNode<"type_annotation">]
    | [
        CstNode<"...">,
        CstNode<"object">,
        CstNode<"type_annotation">,
        CstNode<"=">,
        CstNode<"_expression">
      ]
    | [CstNode<"...">, CstNode<"object">, CstNode<"type_annotation">]
    | [
        CstNode<"...">,
        CstNode<"array">,
        CstNode<"type_annotation">,
        CstNode<"=">,
        CstNode<"_expression">
      ]
    | [CstNode<"...">, CstNode<"array">, CstNode<"type_annotation">]
    | [
        CstNode<"identifier">,
        CstNode<"type_annotation">,
        CstNode<"=">,
        CstNode<"_expression">
      ]
    | [CstNode<"identifier">, CstNode<"type_annotation">]
    | [
        CstNode<"object">,
        CstNode<"type_annotation">,
        CstNode<"=">,
        CstNode<"_expression">
      ]
    | [CstNode<"object">, CstNode<"type_annotation">]
    | [
        CstNode<"array">,
        CstNode<"type_annotation">,
        CstNode<"=">,
        CstNode<"_expression">
      ]
    | [CstNode<"array">, CstNode<"type_annotation">];
  member_modifiers:
    | [CstNode<"accessibility_modifier">]
    | [CstNode<"member_modifiers">, CstNode<"accessibility_modifier">]
    | [CstNode<"static">]
    | [CstNode<"member_modifiers">, CstNode<"static">]
    | [CstNode<"async">]
    | [CstNode<"member_modifiers">, CstNode<"async">]
    | [CstNode<"readonly">]
    | [CstNode<"member_modifiers">, CstNode<"readonly">]
    | [CstNode<"get">]
    | [CstNode<"member_modifiers">, CstNode<"get">]
    | [CstNode<"set">]
    | [CstNode<"member_modifiers">, CstNode<"set">];
  class_declaration:
    | [
        CstNode<"class">,
        CstNode<"identifier">,
        CstNode<"type_parameters">,
        CstNode<"class_heritage">,
        CstNode<"class_body">
      ]
    | [
        CstNode<"class">,
        CstNode<"identifier">,
        CstNode<"type_parameters">,
        CstNode<"class_body">
      ]
    | [
        CstNode<"class">,
        CstNode<"identifier">,
        CstNode<"class_heritage">,
        CstNode<"class_body">
      ]
    | [CstNode<"class">, CstNode<"identifier">, CstNode<"class_body">];
  class_heritage:
    | [CstNode<"extends">, CstNode<"_expression">, CstNode<"implements_clause">]
    | [CstNode<"extends">, CstNode<"_expression">]
    | [CstNode<"implements_clause">];
  _implements_clause_repeat9:
    | [CstNode<",">, CstNode<"_type">]
    | [CstNode<"_implements_clause_repeat9">, CstNode<",">, CstNode<"_type">];
  implements_clause:
    | [
        CstNode<"implements">,
        CstNode<"_type">,
        CstNode<"_implements_clause_repeat9">
      ]
    | [CstNode<"implements">, CstNode<"_type">];
  _class_body_repeat10:
    | [CstNode<"method_definition">]
    | [CstNode<"_class_body_repeat10">, CstNode<"method_definition">]
    | [CstNode<"field_definition">]
    | [CstNode<"_class_body_repeat10">, CstNode<"field_definition">]
    | [CstNode<";">]
    | [CstNode<"_class_body_repeat10">, CstNode<";">];
  class_body:
    | [CstNode<"{">, CstNode<"_class_body_repeat10">, CstNode<"}">]
    | [CstNode<"{">, CstNode<"}">];
  method_definition:
    | [
        CstNode<"member_modifiers">,
        CstNode<"_property_name">,
        CstNode<"type_parameters">,
        CstNode<"formal_parameters">,
        CstNode<"type_annotation">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"member_modifiers">,
        CstNode<"_property_name">,
        CstNode<"type_parameters">,
        CstNode<"formal_parameters">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"member_modifiers">,
        CstNode<"_property_name">,
        CstNode<"formal_parameters">,
        CstNode<"type_annotation">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"member_modifiers">,
        CstNode<"_property_name">,
        CstNode<"formal_parameters">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"member_modifiers">,
        CstNode<"private_property_identifier">,
        CstNode<"type_parameters">,
        CstNode<"formal_parameters">,
        CstNode<"type_annotation">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"member_modifiers">,
        CstNode<"private_property_identifier">,
        CstNode<"type_parameters">,
        CstNode<"formal_parameters">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"member_modifiers">,
        CstNode<"private_property_identifier">,
        CstNode<"formal_parameters">,
        CstNode<"type_annotation">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"member_modifiers">,
        CstNode<"private_property_identifier">,
        CstNode<"formal_parameters">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"_property_name">,
        CstNode<"type_parameters">,
        CstNode<"formal_parameters">,
        CstNode<"type_annotation">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"_property_name">,
        CstNode<"type_parameters">,
        CstNode<"formal_parameters">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"_property_name">,
        CstNode<"formal_parameters">,
        CstNode<"type_annotation">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"_property_name">,
        CstNode<"formal_parameters">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"private_property_identifier">,
        CstNode<"type_parameters">,
        CstNode<"formal_parameters">,
        CstNode<"type_annotation">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"private_property_identifier">,
        CstNode<"type_parameters">,
        CstNode<"formal_parameters">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"private_property_identifier">,
        CstNode<"formal_parameters">,
        CstNode<"type_annotation">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"private_property_identifier">,
        CstNode<"formal_parameters">,
        CstNode<"statement_block">
      ];
  field_definition:
    | [
        CstNode<"member_modifiers">,
        CstNode<"_property_name">,
        CstNode<"type_annotation">,
        CstNode<"=">,
        CstNode<"_expression">,
        CstNode<";">
      ]
    | [
        CstNode<"member_modifiers">,
        CstNode<"_property_name">,
        CstNode<"type_annotation">,
        CstNode<"=">,
        CstNode<"_expression">
      ]
    | [
        CstNode<"member_modifiers">,
        CstNode<"_property_name">,
        CstNode<"type_annotation">,
        CstNode<";">
      ]
    | [
        CstNode<"member_modifiers">,
        CstNode<"_property_name">,
        CstNode<"type_annotation">
      ]
    | [
        CstNode<"member_modifiers">,
        CstNode<"_property_name">,
        CstNode<"=">,
        CstNode<"_expression">,
        CstNode<";">
      ]
    | [
        CstNode<"member_modifiers">,
        CstNode<"_property_name">,
        CstNode<"=">,
        CstNode<"_expression">
      ]
    | [CstNode<"member_modifiers">, CstNode<"_property_name">, CstNode<";">]
    | [CstNode<"member_modifiers">, CstNode<"_property_name">]
    | [
        CstNode<"member_modifiers">,
        CstNode<"private_property_identifier">,
        CstNode<"type_annotation">,
        CstNode<"=">,
        CstNode<"_expression">,
        CstNode<";">
      ]
    | [
        CstNode<"member_modifiers">,
        CstNode<"private_property_identifier">,
        CstNode<"type_annotation">,
        CstNode<"=">,
        CstNode<"_expression">
      ]
    | [
        CstNode<"member_modifiers">,
        CstNode<"private_property_identifier">,
        CstNode<"type_annotation">,
        CstNode<";">
      ]
    | [
        CstNode<"member_modifiers">,
        CstNode<"private_property_identifier">,
        CstNode<"type_annotation">
      ]
    | [
        CstNode<"member_modifiers">,
        CstNode<"private_property_identifier">,
        CstNode<"=">,
        CstNode<"_expression">,
        CstNode<";">
      ]
    | [
        CstNode<"member_modifiers">,
        CstNode<"private_property_identifier">,
        CstNode<"=">,
        CstNode<"_expression">
      ]
    | [
        CstNode<"member_modifiers">,
        CstNode<"private_property_identifier">,
        CstNode<";">
      ]
    | [CstNode<"member_modifiers">, CstNode<"private_property_identifier">]
    | [
        CstNode<"_property_name">,
        CstNode<"type_annotation">,
        CstNode<"=">,
        CstNode<"_expression">,
        CstNode<";">
      ]
    | [
        CstNode<"_property_name">,
        CstNode<"type_annotation">,
        CstNode<"=">,
        CstNode<"_expression">
      ]
    | [CstNode<"_property_name">, CstNode<"type_annotation">, CstNode<";">]
    | [CstNode<"_property_name">, CstNode<"type_annotation">]
    | [
        CstNode<"_property_name">,
        CstNode<"=">,
        CstNode<"_expression">,
        CstNode<";">
      ]
    | [CstNode<"_property_name">, CstNode<"=">, CstNode<"_expression">]
    | [CstNode<"_property_name">, CstNode<";">]
    | [CstNode<"_property_name">]
    | [
        CstNode<"private_property_identifier">,
        CstNode<"type_annotation">,
        CstNode<"=">,
        CstNode<"_expression">,
        CstNode<";">
      ]
    | [
        CstNode<"private_property_identifier">,
        CstNode<"type_annotation">,
        CstNode<"=">,
        CstNode<"_expression">
      ]
    | [
        CstNode<"private_property_identifier">,
        CstNode<"type_annotation">,
        CstNode<";">
      ]
    | [CstNode<"private_property_identifier">, CstNode<"type_annotation">]
    | [
        CstNode<"private_property_identifier">,
        CstNode<"=">,
        CstNode<"_expression">,
        CstNode<";">
      ]
    | [
        CstNode<"private_property_identifier">,
        CstNode<"=">,
        CstNode<"_expression">
      ]
    | [CstNode<"private_property_identifier">, CstNode<";">]
    | [CstNode<"private_property_identifier">];
  interface_declaration:
    | [
        CstNode<"interface">,
        CstNode<"identifier">,
        CstNode<"type_parameters">,
        CstNode<"extends_type_clause">,
        CstNode<"object_type">
      ]
    | [
        CstNode<"interface">,
        CstNode<"identifier">,
        CstNode<"type_parameters">,
        CstNode<"object_type">
      ]
    | [
        CstNode<"interface">,
        CstNode<"identifier">,
        CstNode<"extends_type_clause">,
        CstNode<"object_type">
      ]
    | [CstNode<"interface">, CstNode<"identifier">, CstNode<"object_type">];
  extends_type_clause:
    | [
        CstNode<"extends">,
        CstNode<"_type">,
        CstNode<"_implements_clause_repeat9">
      ]
    | [CstNode<"extends">, CstNode<"_type">];
  type_alias_declaration:
    | [
        CstNode<"type">,
        CstNode<"identifier">,
        CstNode<"type_parameters">,
        CstNode<"=">,
        CstNode<"_type">,
        CstNode<";">
      ]
    | [
        CstNode<"type">,
        CstNode<"identifier">,
        CstNode<"type_parameters">,
        CstNode<"=">,
        CstNode<"_type">
      ]
    | [
        CstNode<"type">,
        CstNode<"identifier">,
        CstNode<"=">,
        CstNode<"_type">,
        CstNode<";">
      ]
    | [CstNode<"type">, CstNode<"identifier">, CstNode<"=">, CstNode<"_type">];
  type_annotation:
    | [CstNode<":">, CstNode<"_type">]
    | [CstNode<"?:">, CstNode<"_type">];
  _type_parameters_repeat11:
    | [CstNode<",">, CstNode<"type_parameter">]
    | [
        CstNode<"_type_parameters_repeat11">,
        CstNode<",">,
        CstNode<"type_parameter">
      ];
  type_parameters:
    | [
        CstNode<"<">,
        CstNode<"type_parameter">,
        CstNode<"_type_parameters_repeat11">,
        CstNode<",">,
        CstNode<">">
      ]
    | [
        CstNode<"<">,
        CstNode<"type_parameter">,
        CstNode<"_type_parameters_repeat11">,
        CstNode<">">
      ]
    | [CstNode<"<">, CstNode<"type_parameter">, CstNode<",">, CstNode<">">]
    | [CstNode<"<">, CstNode<"type_parameter">, CstNode<">">];
  type_parameter:
    | [
        CstNode<"identifier">,
        CstNode<"extends">,
        CstNode<"_type">,
        CstNode<"=">,
        CstNode<"_type">
      ]
    | [CstNode<"identifier">, CstNode<"extends">, CstNode<"_type">]
    | [CstNode<"identifier">, CstNode<"=">, CstNode<"_type">]
    | [CstNode<"identifier">];
  type_arguments:
    | [
        CstNode<"<">,
        CstNode<"_type">,
        CstNode<"_implements_clause_repeat9">,
        CstNode<",">,
        CstNode<">">
      ]
    | [
        CstNode<"<">,
        CstNode<"_type">,
        CstNode<"_implements_clause_repeat9">,
        CstNode<">">
      ]
    | [CstNode<"<">, CstNode<"_type">, CstNode<",">, CstNode<">">]
    | [CstNode<"<">, CstNode<"_type">, CstNode<">">];
  _type:
    | [CstNode<"union_type">]
    | [CstNode<"intersection_type">]
    | [CstNode<"function_type">]
    | [CstNode<"_primary_type">];
  union_type:
    | [CstNode<"_type">, CstNode<"|">, CstNode<"_type">]
    | [CstNode<"|">, CstNode<"_type">];
  intersection_type: [CstNode<"_type">, CstNode<"&">, CstNode<"_type">];
  function_type:
    | [
        CstNode<"type_parameters">,
        CstNode<"(">,
        CstNode<")">,
        CstNode<"=>">,
        CstNode<"_type">
      ]
    | [CstNode<"(">, CstNode<")">, CstNode<"=>">, CstNode<"_type">]
    | [
        CstNode<"type_parameters">,
        CstNode<"typed_parameters">,
        CstNode<"=>">,
        CstNode<"_type">
      ]
    | [CstNode<"typed_parameters">, CstNode<"=>">, CstNode<"_type">]
    | [
        CstNode<"type_parameters">,
        CstNode<"formal_parameters">,
        CstNode<"=>">,
        CstNode<"_type">
      ]
    | [CstNode<"parenthesized_type">, CstNode<"=>">, CstNode<"_type">];
  _primary_type:
    | [CstNode<"identifier">]
    | [CstNode<"generic_type">]
    | [CstNode<"array_type">]
    | [CstNode<"indexed_access_type">]
    | [CstNode<"tuple_type">]
    | [CstNode<"object_type">]
    | [CstNode<"typeof_type">]
    | [CstNode<"type_predicate">]
    | [CstNode<"parenthesized_type">]
    | [CstNode<"string">]
    | [CstNode<"number">]
    | [CstNode<"true">]
    | [CstNode<"false">]
    | [CstNode<"null">]
    | [CstNode<"void">];
  generic_type: [CstNode<"identifier">, CstNode<"type_arguments">];
  array_type: [CstNode<"_primary_type">, CstNode<"[">, CstNode<"]">];
  indexed_access_type: [
    CstNode<"_primary_type">,
    CstNode<"[">,
    CstNode<"_type">,
    CstNode<"]">
  ];
  tuple_type:
    | [
        CstNode<"[">,
        CstNode<"_type">,
        CstNode<"_implements_clause_repeat9">,
        CstNode<",">,
        CstNode<"]">
      ]
    | [
        CstNode<"[">,
        CstNode<"_type">,
        CstNode<"_implements_clause_repeat9">,
        CstNode<"]">
      ]
    | [CstNode<"[">, CstNode<"_type">, CstNode<",">, CstNode<"]">]
    | [CstNode<"[">, CstNode<"_type">, CstNode<"]">]
    | [CstNode<"[">, CstNode<"]">];
  parenthesized_type: [CstNode<"(">, CstNode<"_type">, CstNode<")">];
  typeof_type: [CstNode<"typeof">, CstNode<"identifier">];
  type_predicate: [CstNode<"identifier">, CstNode<"is">, CstNode<"_type">];
  _object_type_repeat12:
    | [CstNode<"property_signature">, CstNode<";">]
    | [
        CstNode<"_object_type_repeat12">,
        CstNode<"property_signature">,
        CstNode<";">
      ]
    | [CstNode<"property_signature">, CstNode<",">]
    | [
        CstNode<"_object_type_repeat12">,
        CstNode<"property_signature">,
        CstNode<",">
      ]
    | [CstNode<"property_signature">]
    | [CstNode<"_object_type_repeat12">, CstNode<"property_signature">]
    | [CstNode<"method_signature">, CstNode<";">]
    | [
        CstNode<"_object_type_repeat12">,
        CstNode<"method_signature">,
        CstNode<";">
      ]
    | [CstNode<"method_signature">, CstNode<",">]
    | [
        CstNode<"_object_type_repeat12">,
        CstNode<"method_signature">,
        CstNode<",">
      ]
    | [CstNode<"method_signature">]
    | [CstNode<"_object_type_repeat12">, CstNode<"method_signature">]
    | [CstNode<"construct_signature">, CstNode<";">]
    | [
        CstNode<"_object_type_repeat12">,
        CstNode<"construct_signature">,
        CstNode<";">
      ]
    | [CstNode<"construct_signature">, CstNode<",">]
    | [
        CstNode<"_object_type_repeat12">,
        CstNode<"construct_signature">,
        CstNode<",">
      ]
    | [CstNode<"construct_signature">]
    | [CstNode<"_object_type_repeat12">, CstNode<"construct_signature">]
    | [CstNode<"index_signature">, CstNode<";">]
    | [
        CstNode<"_object_type_repeat12">,
        CstNode<"index_signature">,
        CstNode<";">
      ]
    | [CstNode<"index_signature">, CstNode<",">]
    | [
        CstNode<"_object_type_repeat12">,
        CstNode<"index_signature">,
        CstNode<",">
      ]
    | [CstNode<"index_signature">]
    | [CstNode<"_object_type_repeat12">, CstNode<"index_signature">];
  object_type:
    | [CstNode<"{">, CstNode<"_object_type_repeat12">, CstNode<"}">]
    | [CstNode<"{">, CstNode<"}">];
  property_signature:
    | [
        CstNode<"readonly">,
        CstNode<"_property_name">,
        CstNode<"type_annotation">
      ]
    | [CstNode<"_property_name">, CstNode<"type_annotation">];
  method_signature:
    | [
        CstNode<"_property_name">,
        CstNode<"type_parameters">,
        CstNode<"formal_parameters">,
        CstNode<"type_annotation">
      ]
    | [
        CstNode<"_property_name">,
        CstNode<"type_parameters">,
        CstNode<"formal_parameters">
      ]
    | [
        CstNode<"_property_name">,
        CstNode<"formal_parameters">,
        CstNode<"type_annotation">
      ]
    | [CstNode<"_property_name">, CstNode<"formal_parameters">];
  construct_signature:
    | [
        CstNode<"new">,
        CstNode<"type_parameters">,
        CstNode<"formal_parameters">,
        CstNode<"type_annotation">
      ]
    | [CstNode<"new">, CstNode<"type_parameters">, CstNode<"formal_parameters">]
    | [CstNode<"new">, CstNode<"formal_parameters">, CstNode<"type_annotation">]
    | [CstNode<"new">, CstNode<"formal_parameters">];
  index_signature:
    | [
        CstNode<"readonly">,
        CstNode<"[">,
        CstNode<"identifier">,
        CstNode<":">,
        CstNode<"_type">,
        CstNode<"]">,
        CstNode<"type_annotation">
      ]
    | [
        CstNode<"readonly">,
        CstNode<"[">,
        CstNode<"identifier">,
        CstNode<"in">,
        CstNode<"_type">,
        CstNode<"]">,
        CstNode<"type_annotation">
      ]
    | [
        CstNode<"[">,
        CstNode<"identifier">,
        CstNode<":">,
        CstNode<"_type">,
        CstNode<"]">,
        CstNode<"type_annotation">
      ]
    | [
        CstNode<"[">,
        CstNode<"identifier">,
        CstNode<"in">,
        CstNode<"_type">,
        CstNode<"]">,
        CstNode<"type_annotation">
      ];
  _expression:
    | [CstNode<"_primary_expression">]
    | [CstNode<"assignment_expression">]
    | [CstNode<"augmented_assignment_expression">]
    | [CstNode<"arrow_function">]
    | [CstNode<"ternary_expression">]
    | [CstNode<"binary_expression">]
    | [CstNode<"as_expression">]
    | [CstNode<"unary_expression">]
    | [CstNode<"update_expression">]
    | [CstNode<"await_expression">]
    | [CstNode<"new_expression">]
    | [CstNode<"call_expression">]
    | [CstNode<"member_expression">]
    | [CstNode<"subscript_expression">];
  _contextual_id:
    | [CstNode<"async">]
    | [CstNode<"set">]
    | [CstNode<"get">]
    | [CstNode<"type">]
    | [CstNode<"from">]
    | [CstNode<"of">];
  _primary_expression:
    | [CstNode<"identifier">]
    | [CstNode<"_contextual_id">]
    | [CstNode<"number">]
    | [CstNode<"string">]
    | [CstNode<"template_string">]
    | [CstNode<"regex">]
    | [CstNode<"true">]
    | [CstNode<"false">]
    | [CstNode<"null">]
    | [CstNode<"this">]
    | [CstNode<"super">]
    | [CstNode<"array">]
    | [CstNode<"object">]
    | [CstNode<"function_expression">]
    | [CstNode<"class_expression">]
    | [CstNode<"parenthesized_expression">];
  _parenthesized_expression_repeat13:
    | [CstNode<",">, CstNode<"argument">]
    | [
        CstNode<"_parenthesized_expression_repeat13">,
        CstNode<",">,
        CstNode<"argument">
      ];
  parenthesized_expression:
    | [
        CstNode<"(">,
        CstNode<"argument">,
        CstNode<"_parenthesized_expression_repeat13">,
        CstNode<",">,
        CstNode<")">
      ]
    | [
        CstNode<"(">,
        CstNode<"argument">,
        CstNode<"_parenthesized_expression_repeat13">,
        CstNode<")">
      ]
    | [CstNode<"(">, CstNode<"argument">, CstNode<",">, CstNode<")">]
    | [CstNode<"(">, CstNode<"argument">, CstNode<")">];
  _lhs_expression:
    | [CstNode<"identifier">]
    | [CstNode<"_contextual_id">]
    | [CstNode<"member_expression">]
    | [CstNode<"subscript_expression">]
    | [CstNode<"array">]
    | [CstNode<"object">];
  assignment_expression: [
    CstNode<"_lhs_expression">,
    CstNode<"=">,
    CstNode<"_expression">
  ];
  augmented_assignment_expression: [
    CstNode<"_lhs_expression">,
    CstNode<"compound_assignment_operator">,
    CstNode<"_expression">
  ];
  arrow_function:
    | [
        CstNode<"async">,
        CstNode<"identifier">,
        CstNode<"=>">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"async">,
        CstNode<"identifier">,
        CstNode<"=>">,
        CstNode<"_expression">
      ]
    | [CstNode<"identifier">, CstNode<"=>">, CstNode<"statement_block">]
    | [CstNode<"identifier">, CstNode<"=>">, CstNode<"_expression">]
    | [
        CstNode<"async">,
        CstNode<"parenthesized_expression">,
        CstNode<"type_annotation">,
        CstNode<"=>">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"async">,
        CstNode<"parenthesized_expression">,
        CstNode<"type_annotation">,
        CstNode<"=>">,
        CstNode<"_expression">
      ]
    | [
        CstNode<"async">,
        CstNode<"parenthesized_expression">,
        CstNode<"=>">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"async">,
        CstNode<"parenthesized_expression">,
        CstNode<"=>">,
        CstNode<"_expression">
      ]
    | [
        CstNode<"parenthesized_expression">,
        CstNode<"type_annotation">,
        CstNode<"=>">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"parenthesized_expression">,
        CstNode<"type_annotation">,
        CstNode<"=>">,
        CstNode<"_expression">
      ]
    | [
        CstNode<"parenthesized_expression">,
        CstNode<"=>">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"parenthesized_expression">,
        CstNode<"=>">,
        CstNode<"_expression">
      ]
    | [
        CstNode<"async">,
        CstNode<"(">,
        CstNode<")">,
        CstNode<"type_annotation">,
        CstNode<"=>">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"async">,
        CstNode<"(">,
        CstNode<")">,
        CstNode<"type_annotation">,
        CstNode<"=>">,
        CstNode<"_expression">
      ]
    | [
        CstNode<"async">,
        CstNode<"(">,
        CstNode<")">,
        CstNode<"=>">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"async">,
        CstNode<"(">,
        CstNode<")">,
        CstNode<"=>">,
        CstNode<"_expression">
      ]
    | [
        CstNode<"(">,
        CstNode<")">,
        CstNode<"type_annotation">,
        CstNode<"=>">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"(">,
        CstNode<")">,
        CstNode<"type_annotation">,
        CstNode<"=>">,
        CstNode<"_expression">
      ]
    | [CstNode<"(">, CstNode<")">, CstNode<"=>">, CstNode<"statement_block">]
    | [CstNode<"(">, CstNode<")">, CstNode<"=>">, CstNode<"_expression">]
    | [
        CstNode<"async">,
        CstNode<"typed_parameters">,
        CstNode<"type_annotation">,
        CstNode<"=>">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"async">,
        CstNode<"typed_parameters">,
        CstNode<"type_annotation">,
        CstNode<"=>">,
        CstNode<"_expression">
      ]
    | [
        CstNode<"async">,
        CstNode<"typed_parameters">,
        CstNode<"=>">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"async">,
        CstNode<"typed_parameters">,
        CstNode<"=>">,
        CstNode<"_expression">
      ]
    | [
        CstNode<"typed_parameters">,
        CstNode<"type_annotation">,
        CstNode<"=>">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"typed_parameters">,
        CstNode<"type_annotation">,
        CstNode<"=>">,
        CstNode<"_expression">
      ]
    | [CstNode<"typed_parameters">, CstNode<"=>">, CstNode<"statement_block">]
    | [CstNode<"typed_parameters">, CstNode<"=>">, CstNode<"_expression">]
    | [
        CstNode<"async">,
        CstNode<"type_parameters">,
        CstNode<"formal_parameters">,
        CstNode<"type_annotation">,
        CstNode<"=>">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"async">,
        CstNode<"type_parameters">,
        CstNode<"formal_parameters">,
        CstNode<"type_annotation">,
        CstNode<"=>">,
        CstNode<"_expression">
      ]
    | [
        CstNode<"async">,
        CstNode<"type_parameters">,
        CstNode<"formal_parameters">,
        CstNode<"=>">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"async">,
        CstNode<"type_parameters">,
        CstNode<"formal_parameters">,
        CstNode<"=>">,
        CstNode<"_expression">
      ]
    | [
        CstNode<"type_parameters">,
        CstNode<"formal_parameters">,
        CstNode<"type_annotation">,
        CstNode<"=>">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"type_parameters">,
        CstNode<"formal_parameters">,
        CstNode<"type_annotation">,
        CstNode<"=>">,
        CstNode<"_expression">
      ]
    | [
        CstNode<"type_parameters">,
        CstNode<"formal_parameters">,
        CstNode<"=>">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"type_parameters">,
        CstNode<"formal_parameters">,
        CstNode<"=>">,
        CstNode<"_expression">
      ];
  ternary_expression: [
    CstNode<"_expression">,
    CstNode<"?">,
    CstNode<"_expression">,
    CstNode<":">,
    CstNode<"_expression">
  ];
  binary_expression:
    | [CstNode<"_expression">, CstNode<"||">, CstNode<"_expression">]
    | [CstNode<"_expression">, CstNode<"??">, CstNode<"_expression">]
    | [CstNode<"_expression">, CstNode<"&&">, CstNode<"_expression">]
    | [CstNode<"_expression">, CstNode<"|">, CstNode<"_expression">]
    | [CstNode<"_expression">, CstNode<"^">, CstNode<"_expression">]
    | [CstNode<"_expression">, CstNode<"&">, CstNode<"_expression">]
    | [
        CstNode<"_expression">,
        CstNode<"equality_operator">,
        CstNode<"_expression">
      ]
    | [CstNode<"_expression">, CstNode<"<">, CstNode<"_expression">]
    | [CstNode<"_expression">, CstNode<">">, CstNode<"_expression">]
    | [
        CstNode<"_expression">,
        CstNode<"relational_operator">,
        CstNode<"_expression">
      ]
    | [CstNode<"_expression">, CstNode<"in">, CstNode<"_expression">]
    | [CstNode<"_expression">, CstNode<"instanceof">, CstNode<"_expression">]
    | [
        CstNode<"_expression">,
        CstNode<"shift_operator">,
        CstNode<"_expression">
      ]
    | [CstNode<"_expression">, CstNode<"+">, CstNode<"_expression">]
    | [CstNode<"_expression">, CstNode<"-">, CstNode<"_expression">]
    | [CstNode<"_expression">, CstNode<"*">, CstNode<"_expression">]
    | [
        CstNode<"_expression">,
        CstNode<"multiplicative_operator">,
        CstNode<"_expression">
      ]
    | [CstNode<"_expression">, CstNode<"**">, CstNode<"_expression">];
  as_expression: [CstNode<"_expression">, CstNode<"as">, CstNode<"_type">];
  unary_expression:
    | [CstNode<"!">, CstNode<"_expression">]
    | [CstNode<"~">, CstNode<"_expression">]
    | [CstNode<"-">, CstNode<"_expression">]
    | [CstNode<"+">, CstNode<"_expression">]
    | [CstNode<"typeof">, CstNode<"_expression">]
    | [CstNode<"void">, CstNode<"_expression">]
    | [CstNode<"delete">, CstNode<"_expression">];
  await_expression: [CstNode<"await">, CstNode<"_expression">];
  update_expression:
    | [CstNode<"update_operator">, CstNode<"_expression">]
    | [CstNode<"_expression">, CstNode<"update_operator">];
  new_expression:
    | [
        CstNode<"new">,
        CstNode<"_primary_expression">,
        CstNode<"type_arguments">,
        CstNode<"arguments">
      ]
    | [CstNode<"new">, CstNode<"_primary_expression">, CstNode<"arguments">]
    | [CstNode<"new">, CstNode<"_primary_expression">];
  call_expression:
    | [CstNode<"_expression">, CstNode<"?.">, CstNode<"arguments">]
    | [CstNode<"_expression">, CstNode<"arguments">];
  member_expression:
    | [CstNode<"_expression">, CstNode<".">, CstNode<"identifier">]
    | [
        CstNode<"_expression">,
        CstNode<".">,
        CstNode<"private_property_identifier">
      ]
    | [CstNode<"_expression">, CstNode<"?.">, CstNode<"identifier">]
    | [
        CstNode<"_expression">,
        CstNode<"?.">,
        CstNode<"private_property_identifier">
      ];
  subscript_expression:
    | [
        CstNode<"_expression">,
        CstNode<"?.">,
        CstNode<"[">,
        CstNode<"_expression">,
        CstNode<"]">
      ]
    | [
        CstNode<"_expression">,
        CstNode<"[">,
        CstNode<"_expression">,
        CstNode<"]">
      ];
  arguments:
    | [
        CstNode<"(">,
        CstNode<"argument">,
        CstNode<"_parenthesized_expression_repeat13">,
        CstNode<",">,
        CstNode<")">
      ]
    | [
        CstNode<"(">,
        CstNode<"argument">,
        CstNode<"_parenthesized_expression_repeat13">,
        CstNode<")">
      ]
    | [CstNode<"(">, CstNode<"argument">, CstNode<",">, CstNode<")">]
    | [CstNode<"(">, CstNode<"argument">, CstNode<")">]
    | [CstNode<"(">, CstNode<")">];
  argument: [CstNode<"_expression">] | [CstNode<"spread_element">];
  spread_element: [CstNode<"...">, CstNode<"_expression">];
  _array_repeat14:
    | [CstNode<",">, CstNode<"argument">]
    | [CstNode<"_array_repeat14">, CstNode<",">, CstNode<"argument">]
    | [CstNode<",">]
    | [CstNode<"_array_repeat14">, CstNode<",">];
  array:
    | [
        CstNode<"[">,
        CstNode<",">,
        CstNode<"argument">,
        CstNode<"_array_repeat14">,
        CstNode<"]">
      ]
    | [CstNode<"[">, CstNode<",">, CstNode<"argument">, CstNode<"]">]
    | [
        CstNode<"[">,
        CstNode<"argument">,
        CstNode<"_array_repeat14">,
        CstNode<"]">
      ]
    | [CstNode<"[">, CstNode<"argument">, CstNode<"]">]
    | [CstNode<"[">, CstNode<"]">];
  _object_repeat15:
    | [CstNode<",">, CstNode<"object_member">]
    | [CstNode<"_object_repeat15">, CstNode<",">, CstNode<"object_member">];
  object:
    | [
        CstNode<"{">,
        CstNode<"object_member">,
        CstNode<"_object_repeat15">,
        CstNode<",">,
        CstNode<"}">
      ]
    | [
        CstNode<"{">,
        CstNode<"object_member">,
        CstNode<"_object_repeat15">,
        CstNode<"}">
      ]
    | [CstNode<"{">, CstNode<"object_member">, CstNode<",">, CstNode<"}">]
    | [CstNode<"{">, CstNode<"object_member">, CstNode<"}">]
    | [CstNode<"{">, CstNode<"}">];
  object_member:
    | [CstNode<"pair">]
    | [CstNode<"shorthand_property_identifier">]
    | [CstNode<"object_method">]
    | [CstNode<"spread_element">];
  object_method:
    | [
        CstNode<"async">,
        CstNode<"_property_name">,
        CstNode<"type_parameters">,
        CstNode<"formal_parameters">,
        CstNode<"type_annotation">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"async">,
        CstNode<"_property_name">,
        CstNode<"type_parameters">,
        CstNode<"formal_parameters">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"async">,
        CstNode<"_property_name">,
        CstNode<"formal_parameters">,
        CstNode<"type_annotation">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"async">,
        CstNode<"_property_name">,
        CstNode<"formal_parameters">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"get">,
        CstNode<"_property_name">,
        CstNode<"type_parameters">,
        CstNode<"formal_parameters">,
        CstNode<"type_annotation">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"get">,
        CstNode<"_property_name">,
        CstNode<"type_parameters">,
        CstNode<"formal_parameters">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"get">,
        CstNode<"_property_name">,
        CstNode<"formal_parameters">,
        CstNode<"type_annotation">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"get">,
        CstNode<"_property_name">,
        CstNode<"formal_parameters">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"set">,
        CstNode<"_property_name">,
        CstNode<"type_parameters">,
        CstNode<"formal_parameters">,
        CstNode<"type_annotation">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"set">,
        CstNode<"_property_name">,
        CstNode<"type_parameters">,
        CstNode<"formal_parameters">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"set">,
        CstNode<"_property_name">,
        CstNode<"formal_parameters">,
        CstNode<"type_annotation">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"set">,
        CstNode<"_property_name">,
        CstNode<"formal_parameters">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"_property_name">,
        CstNode<"type_parameters">,
        CstNode<"formal_parameters">,
        CstNode<"type_annotation">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"_property_name">,
        CstNode<"type_parameters">,
        CstNode<"formal_parameters">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"_property_name">,
        CstNode<"formal_parameters">,
        CstNode<"type_annotation">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"_property_name">,
        CstNode<"formal_parameters">,
        CstNode<"statement_block">
      ];
  pair: [CstNode<"_property_name">, CstNode<":">, CstNode<"_expression">];
  shorthand_property_identifier:
    | [CstNode<"identifier">]
    | [CstNode<"_contextual_id">];
  _property_name:
    | [CstNode<"identifier">]
    | [CstNode<"_contextual_id">]
    | [CstNode<"string">]
    | [CstNode<"number">]
    | [CstNode<"computed_property_name">];
  computed_property_name: [CstNode<"[">, CstNode<"_expression">, CstNode<"]">];
  function_expression:
    | [
        CstNode<"async">,
        CstNode<"function">,
        CstNode<"identifier">,
        CstNode<"type_parameters">,
        CstNode<"formal_parameters">,
        CstNode<"type_annotation">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"async">,
        CstNode<"function">,
        CstNode<"identifier">,
        CstNode<"type_parameters">,
        CstNode<"formal_parameters">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"async">,
        CstNode<"function">,
        CstNode<"identifier">,
        CstNode<"formal_parameters">,
        CstNode<"type_annotation">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"async">,
        CstNode<"function">,
        CstNode<"identifier">,
        CstNode<"formal_parameters">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"async">,
        CstNode<"function">,
        CstNode<"type_parameters">,
        CstNode<"formal_parameters">,
        CstNode<"type_annotation">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"async">,
        CstNode<"function">,
        CstNode<"type_parameters">,
        CstNode<"formal_parameters">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"async">,
        CstNode<"function">,
        CstNode<"formal_parameters">,
        CstNode<"type_annotation">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"async">,
        CstNode<"function">,
        CstNode<"formal_parameters">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"function">,
        CstNode<"identifier">,
        CstNode<"type_parameters">,
        CstNode<"formal_parameters">,
        CstNode<"type_annotation">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"function">,
        CstNode<"identifier">,
        CstNode<"type_parameters">,
        CstNode<"formal_parameters">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"function">,
        CstNode<"identifier">,
        CstNode<"formal_parameters">,
        CstNode<"type_annotation">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"function">,
        CstNode<"identifier">,
        CstNode<"formal_parameters">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"function">,
        CstNode<"type_parameters">,
        CstNode<"formal_parameters">,
        CstNode<"type_annotation">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"function">,
        CstNode<"type_parameters">,
        CstNode<"formal_parameters">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"function">,
        CstNode<"formal_parameters">,
        CstNode<"type_annotation">,
        CstNode<"statement_block">
      ]
    | [
        CstNode<"function">,
        CstNode<"formal_parameters">,
        CstNode<"statement_block">
      ];
  class_expression:
    | [
        CstNode<"class">,
        CstNode<"identifier">,
        CstNode<"type_parameters">,
        CstNode<"class_heritage">,
        CstNode<"class_body">
      ]
    | [
        CstNode<"class">,
        CstNode<"identifier">,
        CstNode<"type_parameters">,
        CstNode<"class_body">
      ]
    | [
        CstNode<"class">,
        CstNode<"identifier">,
        CstNode<"class_heritage">,
        CstNode<"class_body">
      ]
    | [CstNode<"class">, CstNode<"identifier">, CstNode<"class_body">]
    | [
        CstNode<"class">,
        CstNode<"type_parameters">,
        CstNode<"class_heritage">,
        CstNode<"class_body">
      ]
    | [CstNode<"class">, CstNode<"type_parameters">, CstNode<"class_body">]
    | [CstNode<"class">, CstNode<"class_heritage">, CstNode<"class_body">]
    | [CstNode<"class">, CstNode<"class_body">];
}

export type RuleNode<Name extends RuleName = RuleName> = CstNode<Name> & {
  readonly items: RuleChildrenMap[Name];
};

export type TypedCstNode =
  | { [K in TokenName]: TokenNode<K> }[TokenName]
  | { [K in RuleName]: RuleNode<K> }[RuleName];

export type Node = CstNode;

export function parse(input: Uint8Array | string): CstNode<StartRuleName>;
