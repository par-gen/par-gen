export type TokenName =
  | "query"
  | "mutation"
  | "subscription"
  | "{"
  | "}"
  | ":"
  | "("
  | ")"
  | "..."
  | "fragment"
  | "on"
  | "false"
  | "true"
  | "null"
  | "["
  | "]"
  | '"""'
  | '"'
  | "$"
  | "="
  | "!"
  | "@"
  | "schema"
  | "extend"
  | "scalar"
  | "type"
  | "interface"
  | "union"
  | "enum"
  | "input"
  | "implements"
  | "&"
  | "|"
  | "directive"
  | "QUERY"
  | "MUTATION"
  | "SUBSCRIPTION"
  | "FIELD"
  | "FRAGMENT_DEFINITION"
  | "FRAGMENT_SPREAD"
  | "INLINE_FRAGMENT"
  | "VARIABLE_DEFINITION"
  | "SCHEMA"
  | "SCALAR"
  | "OBJECT"
  | "FIELD_DEFINITION"
  | "ARGUMENT_DEFINITION"
  | "INTERFACE"
  | "UNION"
  | "ENUM"
  | "ENUM_VALUE"
  | "INPUT_OBJECT"
  | "INPUT_FIELD_DEFINITION"
  | "IntValue"
  | "FloatValue"
  | "Name"
  | "_StringValue_token1"
  | "_StringValue_token2"
  | "@par-gen.EOF"
  | "@par-gen.ERROR"
  | "comma"
  | "comment";
export type RuleName =
  | "source_file"
  | "Document"
  | "Definition"
  | "ExecutableDefinition"
  | "OperationDefinition"
  | "OperationType"
  | "_SelectionSet_repeat1"
  | "SelectionSet"
  | "Selection"
  | "Field"
  | "Alias"
  | "_Arguments_repeat2"
  | "Arguments"
  | "Argument"
  | "FragmentSpread"
  | "InlineFragment"
  | "FragmentDefinition"
  | "FragmentName"
  | "TypeCondition"
  | "Value"
  | "BooleanValue"
  | "NullValue"
  | "EnumValue"
  | "_ListValue_repeat3"
  | "ListValue"
  | "_ObjectValue_repeat4"
  | "ObjectValue"
  | "ObjectField"
  | "StringValue"
  | "_VariableDefinitions_repeat5"
  | "VariableDefinitions"
  | "VariableDefinition"
  | "Variable"
  | "DefaultValue"
  | "Type"
  | "NamedType"
  | "ListType"
  | "NonNullType"
  | "Directives"
  | "Directive"
  | "TypeSystemDefinition"
  | "TypeSystemExtension"
  | "_SchemaDefinition_repeat6"
  | "SchemaDefinition"
  | "SchemaExtension"
  | "TypeExtension"
  | "ScalarTypeExtension"
  | "ObjectTypeExtension"
  | "InterfaceTypeExtension"
  | "UnionTypeExtension"
  | "EnumTypeExtension"
  | "InputObjectTypeExtension"
  | "OperationTypeDefinition"
  | "Description"
  | "TypeDefinition"
  | "ScalarTypeDefinition"
  | "ObjectTypeDefinition"
  | "_ImplementsInterfaces_repeat7"
  | "ImplementsInterfaces"
  | "_FieldsDefinition_repeat8"
  | "FieldsDefinition"
  | "FieldDefinition"
  | "_ArgumentsDefinition_repeat9"
  | "ArgumentsDefinition"
  | "InputValueDefinition"
  | "InterfaceTypeDefinition"
  | "UnionTypeDefinition"
  | "_UnionMemberTypes_repeat10"
  | "UnionMemberTypes"
  | "EnumTypeDefinition"
  | "_EnumValuesDefinition_repeat11"
  | "EnumValuesDefinition"
  | "EnumValueDefinition"
  | "InputObjectTypeDefinition"
  | "InputFieldsDefinition"
  | "DirectiveDefinition"
  | "_DirectiveLocations_repeat12"
  | "DirectiveLocations"
  | "DirectiveLocation"
  | "ExecutableDirectiveLocation"
  | "TypeSystemDirectiveLocation";
export type SymbolName = TokenName | RuleName;
export type NodeName = SymbolName;
export type StartRuleName = "source_file";

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
  source_file: [CstNode<"Document">];
  Document:
    | [CstNode<"Definition">]
    | [CstNode<"Document">, CstNode<"Definition">];
  Definition:
    | [CstNode<"ExecutableDefinition">]
    | [CstNode<"TypeSystemDefinition">]
    | [CstNode<"TypeSystemExtension">];
  ExecutableDefinition:
    | [CstNode<"OperationDefinition">]
    | [CstNode<"FragmentDefinition">];
  OperationDefinition:
    | [CstNode<"SelectionSet">]
    | [
        CstNode<"OperationType">,
        CstNode<"Name">,
        CstNode<"VariableDefinitions">,
        CstNode<"Directives">,
        CstNode<"SelectionSet">
      ]
    | [
        CstNode<"OperationType">,
        CstNode<"Name">,
        CstNode<"VariableDefinitions">,
        CstNode<"SelectionSet">
      ]
    | [
        CstNode<"OperationType">,
        CstNode<"Name">,
        CstNode<"Directives">,
        CstNode<"SelectionSet">
      ]
    | [CstNode<"OperationType">, CstNode<"Name">, CstNode<"SelectionSet">]
    | [
        CstNode<"OperationType">,
        CstNode<"VariableDefinitions">,
        CstNode<"Directives">,
        CstNode<"SelectionSet">
      ]
    | [
        CstNode<"OperationType">,
        CstNode<"VariableDefinitions">,
        CstNode<"SelectionSet">
      ]
    | [CstNode<"OperationType">, CstNode<"Directives">, CstNode<"SelectionSet">]
    | [CstNode<"OperationType">, CstNode<"SelectionSet">];
  OperationType:
    | [CstNode<"query">]
    | [CstNode<"mutation">]
    | [CstNode<"subscription">];
  _SelectionSet_repeat1:
    | [CstNode<"Selection">]
    | [CstNode<"_SelectionSet_repeat1">, CstNode<"Selection">];
  SelectionSet: [CstNode<"{">, CstNode<"_SelectionSet_repeat1">, CstNode<"}">];
  Selection:
    | [CstNode<"Field">]
    | [CstNode<"FragmentSpread">]
    | [CstNode<"InlineFragment">];
  Field:
    | [
        CstNode<"Alias">,
        CstNode<"Name">,
        CstNode<"Arguments">,
        CstNode<"Directives">,
        CstNode<"SelectionSet">
      ]
    | [
        CstNode<"Alias">,
        CstNode<"Name">,
        CstNode<"Arguments">,
        CstNode<"Directives">
      ]
    | [
        CstNode<"Alias">,
        CstNode<"Name">,
        CstNode<"Arguments">,
        CstNode<"SelectionSet">
      ]
    | [CstNode<"Alias">, CstNode<"Name">, CstNode<"Arguments">]
    | [
        CstNode<"Alias">,
        CstNode<"Name">,
        CstNode<"Directives">,
        CstNode<"SelectionSet">
      ]
    | [CstNode<"Alias">, CstNode<"Name">, CstNode<"Directives">]
    | [CstNode<"Alias">, CstNode<"Name">, CstNode<"SelectionSet">]
    | [CstNode<"Alias">, CstNode<"Name">]
    | [
        CstNode<"Name">,
        CstNode<"Arguments">,
        CstNode<"Directives">,
        CstNode<"SelectionSet">
      ]
    | [CstNode<"Name">, CstNode<"Arguments">, CstNode<"Directives">]
    | [CstNode<"Name">, CstNode<"Arguments">, CstNode<"SelectionSet">]
    | [CstNode<"Name">, CstNode<"Arguments">]
    | [CstNode<"Name">, CstNode<"Directives">, CstNode<"SelectionSet">]
    | [CstNode<"Name">, CstNode<"Directives">]
    | [CstNode<"Name">, CstNode<"SelectionSet">]
    | [CstNode<"Name">];
  Alias: [CstNode<"Name">, CstNode<":">];
  _Arguments_repeat2:
    | [CstNode<"Argument">]
    | [CstNode<"_Arguments_repeat2">, CstNode<"Argument">];
  Arguments: [CstNode<"(">, CstNode<"_Arguments_repeat2">, CstNode<")">];
  Argument: [CstNode<"Name">, CstNode<":">, CstNode<"Value">];
  FragmentSpread:
    | [CstNode<"...">, CstNode<"FragmentName">, CstNode<"Directives">]
    | [CstNode<"...">, CstNode<"FragmentName">];
  InlineFragment:
    | [
        CstNode<"...">,
        CstNode<"TypeCondition">,
        CstNode<"Directives">,
        CstNode<"SelectionSet">
      ]
    | [CstNode<"...">, CstNode<"TypeCondition">, CstNode<"SelectionSet">]
    | [CstNode<"...">, CstNode<"Directives">, CstNode<"SelectionSet">]
    | [CstNode<"...">, CstNode<"SelectionSet">];
  FragmentDefinition:
    | [
        CstNode<"fragment">,
        CstNode<"FragmentName">,
        CstNode<"TypeCondition">,
        CstNode<"Directives">,
        CstNode<"SelectionSet">
      ]
    | [
        CstNode<"fragment">,
        CstNode<"FragmentName">,
        CstNode<"TypeCondition">,
        CstNode<"SelectionSet">
      ];
  FragmentName: [CstNode<"Name">];
  TypeCondition: [CstNode<"on">, CstNode<"NamedType">];
  Value:
    | [CstNode<"Variable">]
    | [CstNode<"IntValue">]
    | [CstNode<"FloatValue">]
    | [CstNode<"StringValue">]
    | [CstNode<"BooleanValue">]
    | [CstNode<"NullValue">]
    | [CstNode<"EnumValue">]
    | [CstNode<"ListValue">]
    | [CstNode<"ObjectValue">];
  BooleanValue: [CstNode<"false">] | [CstNode<"true">];
  NullValue: [CstNode<"null">];
  EnumValue: [CstNode<"Name">];
  _ListValue_repeat3:
    | [CstNode<"Value">]
    | [CstNode<"_ListValue_repeat3">, CstNode<"Value">];
  ListValue:
    | [CstNode<"[">, CstNode<"_ListValue_repeat3">, CstNode<"]">]
    | [CstNode<"[">, CstNode<"]">];
  _ObjectValue_repeat4:
    | [CstNode<"ObjectField">]
    | [CstNode<"_ObjectValue_repeat4">, CstNode<"ObjectField">];
  ObjectValue:
    | [CstNode<"{">, CstNode<"_ObjectValue_repeat4">, CstNode<"}">]
    | [CstNode<"{">, CstNode<"}">];
  ObjectField: [CstNode<"Name">, CstNode<":">, CstNode<"Value">];
  StringValue:
    | [CstNode<'"""'>, CstNode<"_StringValue_token1">, CstNode<'"""'>]
    | [CstNode<'"""'>, CstNode<'"""'>]
    | [CstNode<'"'>, CstNode<"_StringValue_token2">, CstNode<'"'>]
    | [CstNode<'"'>, CstNode<'"'>];
  _VariableDefinitions_repeat5:
    | [CstNode<"VariableDefinition">]
    | [CstNode<"_VariableDefinitions_repeat5">, CstNode<"VariableDefinition">];
  VariableDefinitions: [
    CstNode<"(">,
    CstNode<"_VariableDefinitions_repeat5">,
    CstNode<")">
  ];
  VariableDefinition:
    | [
        CstNode<"Variable">,
        CstNode<":">,
        CstNode<"Type">,
        CstNode<"DefaultValue">
      ]
    | [CstNode<"Variable">, CstNode<":">, CstNode<"Type">];
  Variable: [CstNode<"$">, CstNode<"Name">];
  DefaultValue: [CstNode<"=">, CstNode<"Value">];
  Type:
    | [CstNode<"NamedType">]
    | [CstNode<"ListType">]
    | [CstNode<"NonNullType">];
  NamedType: [CstNode<"Name">];
  ListType: [CstNode<"[">, CstNode<"Type">, CstNode<"]">];
  NonNullType:
    | [CstNode<"NamedType">, CstNode<"!">]
    | [CstNode<"ListType">, CstNode<"!">];
  Directives:
    | [CstNode<"Directive">]
    | [CstNode<"Directives">, CstNode<"Directive">];
  Directive:
    | [CstNode<"@">, CstNode<"Name">, CstNode<"Arguments">]
    | [CstNode<"@">, CstNode<"Name">];
  TypeSystemDefinition:
    | [CstNode<"SchemaDefinition">]
    | [CstNode<"TypeDefinition">]
    | [CstNode<"DirectiveDefinition">];
  TypeSystemExtension:
    | [CstNode<"SchemaExtension">]
    | [CstNode<"TypeExtension">];
  _SchemaDefinition_repeat6:
    | [CstNode<"OperationTypeDefinition">]
    | [
        CstNode<"_SchemaDefinition_repeat6">,
        CstNode<"OperationTypeDefinition">
      ];
  SchemaDefinition:
    | [
        CstNode<"schema">,
        CstNode<"Directives">,
        CstNode<"{">,
        CstNode<"_SchemaDefinition_repeat6">,
        CstNode<"}">
      ]
    | [
        CstNode<"schema">,
        CstNode<"{">,
        CstNode<"_SchemaDefinition_repeat6">,
        CstNode<"}">
      ];
  SchemaExtension:
    | [
        CstNode<"extend">,
        CstNode<"schema">,
        CstNode<"Directives">,
        CstNode<"{">,
        CstNode<"_SchemaDefinition_repeat6">,
        CstNode<"}">
      ]
    | [
        CstNode<"extend">,
        CstNode<"schema">,
        CstNode<"{">,
        CstNode<"_SchemaDefinition_repeat6">,
        CstNode<"}">
      ]
    | [CstNode<"extend">, CstNode<"schema">, CstNode<"Directives">];
  TypeExtension:
    | [CstNode<"ScalarTypeExtension">]
    | [CstNode<"ObjectTypeExtension">]
    | [CstNode<"InterfaceTypeExtension">]
    | [CstNode<"UnionTypeExtension">]
    | [CstNode<"EnumTypeExtension">]
    | [CstNode<"InputObjectTypeExtension">];
  ScalarTypeExtension: [
    CstNode<"extend">,
    CstNode<"scalar">,
    CstNode<"Name">,
    CstNode<"Directives">
  ];
  ObjectTypeExtension:
    | [
        CstNode<"extend">,
        CstNode<"type">,
        CstNode<"Name">,
        CstNode<"ImplementsInterfaces">,
        CstNode<"Directives">,
        CstNode<"FieldsDefinition">
      ]
    | [
        CstNode<"extend">,
        CstNode<"type">,
        CstNode<"Name">,
        CstNode<"ImplementsInterfaces">,
        CstNode<"FieldsDefinition">
      ]
    | [
        CstNode<"extend">,
        CstNode<"type">,
        CstNode<"Name">,
        CstNode<"Directives">,
        CstNode<"FieldsDefinition">
      ]
    | [
        CstNode<"extend">,
        CstNode<"type">,
        CstNode<"Name">,
        CstNode<"FieldsDefinition">
      ]
    | [
        CstNode<"extend">,
        CstNode<"type">,
        CstNode<"Name">,
        CstNode<"ImplementsInterfaces">,
        CstNode<"Directives">
      ]
    | [
        CstNode<"extend">,
        CstNode<"type">,
        CstNode<"Name">,
        CstNode<"Directives">
      ]
    | [
        CstNode<"extend">,
        CstNode<"type">,
        CstNode<"Name">,
        CstNode<"ImplementsInterfaces">
      ];
  InterfaceTypeExtension:
    | [
        CstNode<"extend">,
        CstNode<"interface">,
        CstNode<"Name">,
        CstNode<"Directives">,
        CstNode<"FieldsDefinition">
      ]
    | [
        CstNode<"extend">,
        CstNode<"interface">,
        CstNode<"Name">,
        CstNode<"FieldsDefinition">
      ]
    | [
        CstNode<"extend">,
        CstNode<"interface">,
        CstNode<"Name">,
        CstNode<"Directives">
      ];
  UnionTypeExtension:
    | [
        CstNode<"extend">,
        CstNode<"union">,
        CstNode<"Name">,
        CstNode<"Directives">,
        CstNode<"UnionMemberTypes">
      ]
    | [
        CstNode<"extend">,
        CstNode<"union">,
        CstNode<"Name">,
        CstNode<"UnionMemberTypes">
      ]
    | [
        CstNode<"extend">,
        CstNode<"union">,
        CstNode<"Name">,
        CstNode<"Directives">
      ];
  EnumTypeExtension:
    | [
        CstNode<"extend">,
        CstNode<"enum">,
        CstNode<"Name">,
        CstNode<"Directives">,
        CstNode<"EnumValuesDefinition">
      ]
    | [
        CstNode<"extend">,
        CstNode<"enum">,
        CstNode<"Name">,
        CstNode<"EnumValuesDefinition">
      ]
    | [
        CstNode<"extend">,
        CstNode<"enum">,
        CstNode<"Name">,
        CstNode<"Directives">
      ];
  InputObjectTypeExtension:
    | [
        CstNode<"extend">,
        CstNode<"input">,
        CstNode<"Name">,
        CstNode<"Directives">,
        CstNode<"InputFieldsDefinition">
      ]
    | [
        CstNode<"extend">,
        CstNode<"input">,
        CstNode<"Name">,
        CstNode<"InputFieldsDefinition">
      ]
    | [
        CstNode<"extend">,
        CstNode<"input">,
        CstNode<"Name">,
        CstNode<"Directives">
      ];
  OperationTypeDefinition: [
    CstNode<"OperationType">,
    CstNode<":">,
    CstNode<"NamedType">
  ];
  Description: [CstNode<"StringValue">];
  TypeDefinition:
    | [CstNode<"ScalarTypeDefinition">]
    | [CstNode<"ObjectTypeDefinition">]
    | [CstNode<"InterfaceTypeDefinition">]
    | [CstNode<"UnionTypeDefinition">]
    | [CstNode<"EnumTypeDefinition">]
    | [CstNode<"InputObjectTypeDefinition">];
  ScalarTypeDefinition:
    | [
        CstNode<"Description">,
        CstNode<"scalar">,
        CstNode<"Name">,
        CstNode<"Directives">
      ]
    | [CstNode<"Description">, CstNode<"scalar">, CstNode<"Name">]
    | [CstNode<"scalar">, CstNode<"Name">, CstNode<"Directives">]
    | [CstNode<"scalar">, CstNode<"Name">];
  ObjectTypeDefinition:
    | [
        CstNode<"Description">,
        CstNode<"type">,
        CstNode<"Name">,
        CstNode<"ImplementsInterfaces">,
        CstNode<"Directives">,
        CstNode<"FieldsDefinition">
      ]
    | [
        CstNode<"Description">,
        CstNode<"type">,
        CstNode<"Name">,
        CstNode<"ImplementsInterfaces">,
        CstNode<"Directives">
      ]
    | [
        CstNode<"Description">,
        CstNode<"type">,
        CstNode<"Name">,
        CstNode<"ImplementsInterfaces">,
        CstNode<"FieldsDefinition">
      ]
    | [
        CstNode<"Description">,
        CstNode<"type">,
        CstNode<"Name">,
        CstNode<"ImplementsInterfaces">
      ]
    | [
        CstNode<"Description">,
        CstNode<"type">,
        CstNode<"Name">,
        CstNode<"Directives">,
        CstNode<"FieldsDefinition">
      ]
    | [
        CstNode<"Description">,
        CstNode<"type">,
        CstNode<"Name">,
        CstNode<"Directives">
      ]
    | [
        CstNode<"Description">,
        CstNode<"type">,
        CstNode<"Name">,
        CstNode<"FieldsDefinition">
      ]
    | [CstNode<"Description">, CstNode<"type">, CstNode<"Name">]
    | [
        CstNode<"type">,
        CstNode<"Name">,
        CstNode<"ImplementsInterfaces">,
        CstNode<"Directives">,
        CstNode<"FieldsDefinition">
      ]
    | [
        CstNode<"type">,
        CstNode<"Name">,
        CstNode<"ImplementsInterfaces">,
        CstNode<"Directives">
      ]
    | [
        CstNode<"type">,
        CstNode<"Name">,
        CstNode<"ImplementsInterfaces">,
        CstNode<"FieldsDefinition">
      ]
    | [CstNode<"type">, CstNode<"Name">, CstNode<"ImplementsInterfaces">]
    | [
        CstNode<"type">,
        CstNode<"Name">,
        CstNode<"Directives">,
        CstNode<"FieldsDefinition">
      ]
    | [CstNode<"type">, CstNode<"Name">, CstNode<"Directives">]
    | [CstNode<"type">, CstNode<"Name">, CstNode<"FieldsDefinition">]
    | [CstNode<"type">, CstNode<"Name">];
  _ImplementsInterfaces_repeat7:
    | [CstNode<"&">, CstNode<"NamedType">]
    | [
        CstNode<"_ImplementsInterfaces_repeat7">,
        CstNode<"&">,
        CstNode<"NamedType">
      ];
  ImplementsInterfaces:
    | [
        CstNode<"implements">,
        CstNode<"&">,
        CstNode<"NamedType">,
        CstNode<"_ImplementsInterfaces_repeat7">
      ]
    | [CstNode<"implements">, CstNode<"&">, CstNode<"NamedType">]
    | [
        CstNode<"implements">,
        CstNode<"NamedType">,
        CstNode<"_ImplementsInterfaces_repeat7">
      ]
    | [CstNode<"implements">, CstNode<"NamedType">];
  _FieldsDefinition_repeat8:
    | [CstNode<"FieldDefinition">]
    | [CstNode<"_FieldsDefinition_repeat8">, CstNode<"FieldDefinition">];
  FieldsDefinition: [
    CstNode<"{">,
    CstNode<"_FieldsDefinition_repeat8">,
    CstNode<"}">
  ];
  FieldDefinition:
    | [
        CstNode<"Description">,
        CstNode<"Name">,
        CstNode<"ArgumentsDefinition">,
        CstNode<":">,
        CstNode<"Type">,
        CstNode<"Directive">
      ]
    | [
        CstNode<"Description">,
        CstNode<"Name">,
        CstNode<"ArgumentsDefinition">,
        CstNode<":">,
        CstNode<"Type">
      ]
    | [
        CstNode<"Description">,
        CstNode<"Name">,
        CstNode<":">,
        CstNode<"Type">,
        CstNode<"Directive">
      ]
    | [CstNode<"Description">, CstNode<"Name">, CstNode<":">, CstNode<"Type">]
    | [
        CstNode<"Name">,
        CstNode<"ArgumentsDefinition">,
        CstNode<":">,
        CstNode<"Type">,
        CstNode<"Directive">
      ]
    | [
        CstNode<"Name">,
        CstNode<"ArgumentsDefinition">,
        CstNode<":">,
        CstNode<"Type">
      ]
    | [CstNode<"Name">, CstNode<":">, CstNode<"Type">, CstNode<"Directive">]
    | [CstNode<"Name">, CstNode<":">, CstNode<"Type">];
  _ArgumentsDefinition_repeat9:
    | [CstNode<"InputValueDefinition">]
    | [
        CstNode<"_ArgumentsDefinition_repeat9">,
        CstNode<"InputValueDefinition">
      ];
  ArgumentsDefinition: [
    CstNode<"(">,
    CstNode<"_ArgumentsDefinition_repeat9">,
    CstNode<")">
  ];
  InputValueDefinition:
    | [
        CstNode<"Description">,
        CstNode<"Name">,
        CstNode<":">,
        CstNode<"Type">,
        CstNode<"DefaultValue">,
        CstNode<"Directives">
      ]
    | [
        CstNode<"Description">,
        CstNode<"Name">,
        CstNode<":">,
        CstNode<"Type">,
        CstNode<"DefaultValue">
      ]
    | [
        CstNode<"Description">,
        CstNode<"Name">,
        CstNode<":">,
        CstNode<"Type">,
        CstNode<"Directives">
      ]
    | [CstNode<"Description">, CstNode<"Name">, CstNode<":">, CstNode<"Type">]
    | [
        CstNode<"Name">,
        CstNode<":">,
        CstNode<"Type">,
        CstNode<"DefaultValue">,
        CstNode<"Directives">
      ]
    | [CstNode<"Name">, CstNode<":">, CstNode<"Type">, CstNode<"DefaultValue">]
    | [CstNode<"Name">, CstNode<":">, CstNode<"Type">, CstNode<"Directives">]
    | [CstNode<"Name">, CstNode<":">, CstNode<"Type">];
  InterfaceTypeDefinition:
    | [
        CstNode<"Description">,
        CstNode<"interface">,
        CstNode<"Name">,
        CstNode<"Directives">,
        CstNode<"FieldsDefinition">
      ]
    | [
        CstNode<"Description">,
        CstNode<"interface">,
        CstNode<"Name">,
        CstNode<"Directives">
      ]
    | [
        CstNode<"Description">,
        CstNode<"interface">,
        CstNode<"Name">,
        CstNode<"FieldsDefinition">
      ]
    | [CstNode<"Description">, CstNode<"interface">, CstNode<"Name">]
    | [
        CstNode<"interface">,
        CstNode<"Name">,
        CstNode<"Directives">,
        CstNode<"FieldsDefinition">
      ]
    | [CstNode<"interface">, CstNode<"Name">, CstNode<"Directives">]
    | [CstNode<"interface">, CstNode<"Name">, CstNode<"FieldsDefinition">]
    | [CstNode<"interface">, CstNode<"Name">];
  UnionTypeDefinition:
    | [
        CstNode<"Description">,
        CstNode<"union">,
        CstNode<"Name">,
        CstNode<"Directives">,
        CstNode<"UnionMemberTypes">
      ]
    | [
        CstNode<"Description">,
        CstNode<"union">,
        CstNode<"Name">,
        CstNode<"Directives">
      ]
    | [
        CstNode<"Description">,
        CstNode<"union">,
        CstNode<"Name">,
        CstNode<"UnionMemberTypes">
      ]
    | [CstNode<"Description">, CstNode<"union">, CstNode<"Name">]
    | [
        CstNode<"union">,
        CstNode<"Name">,
        CstNode<"Directives">,
        CstNode<"UnionMemberTypes">
      ]
    | [CstNode<"union">, CstNode<"Name">, CstNode<"Directives">]
    | [CstNode<"union">, CstNode<"Name">, CstNode<"UnionMemberTypes">]
    | [CstNode<"union">, CstNode<"Name">];
  _UnionMemberTypes_repeat10:
    | [CstNode<"|">, CstNode<"NamedType">]
    | [
        CstNode<"_UnionMemberTypes_repeat10">,
        CstNode<"|">,
        CstNode<"NamedType">
      ];
  UnionMemberTypes:
    | [
        CstNode<"=">,
        CstNode<"|">,
        CstNode<"NamedType">,
        CstNode<"_UnionMemberTypes_repeat10">
      ]
    | [CstNode<"=">, CstNode<"|">, CstNode<"NamedType">]
    | [
        CstNode<"=">,
        CstNode<"NamedType">,
        CstNode<"_UnionMemberTypes_repeat10">
      ]
    | [CstNode<"=">, CstNode<"NamedType">];
  EnumTypeDefinition:
    | [
        CstNode<"Description">,
        CstNode<"enum">,
        CstNode<"Name">,
        CstNode<"Directives">,
        CstNode<"EnumValuesDefinition">
      ]
    | [
        CstNode<"Description">,
        CstNode<"enum">,
        CstNode<"Name">,
        CstNode<"Directives">
      ]
    | [
        CstNode<"Description">,
        CstNode<"enum">,
        CstNode<"Name">,
        CstNode<"EnumValuesDefinition">
      ]
    | [CstNode<"Description">, CstNode<"enum">, CstNode<"Name">]
    | [
        CstNode<"enum">,
        CstNode<"Name">,
        CstNode<"Directives">,
        CstNode<"EnumValuesDefinition">
      ]
    | [CstNode<"enum">, CstNode<"Name">, CstNode<"Directives">]
    | [CstNode<"enum">, CstNode<"Name">, CstNode<"EnumValuesDefinition">]
    | [CstNode<"enum">, CstNode<"Name">];
  _EnumValuesDefinition_repeat11:
    | [CstNode<"EnumValueDefinition">]
    | [
        CstNode<"_EnumValuesDefinition_repeat11">,
        CstNode<"EnumValueDefinition">
      ];
  EnumValuesDefinition: [
    CstNode<"{">,
    CstNode<"_EnumValuesDefinition_repeat11">,
    CstNode<"}">
  ];
  EnumValueDefinition:
    | [CstNode<"Description">, CstNode<"EnumValue">, CstNode<"Directives">]
    | [CstNode<"Description">, CstNode<"EnumValue">]
    | [CstNode<"EnumValue">, CstNode<"Directives">]
    | [CstNode<"EnumValue">];
  InputObjectTypeDefinition:
    | [
        CstNode<"Description">,
        CstNode<"input">,
        CstNode<"Name">,
        CstNode<"Directives">,
        CstNode<"InputFieldsDefinition">
      ]
    | [
        CstNode<"Description">,
        CstNode<"input">,
        CstNode<"Name">,
        CstNode<"Directives">
      ]
    | [
        CstNode<"Description">,
        CstNode<"input">,
        CstNode<"Name">,
        CstNode<"InputFieldsDefinition">
      ]
    | [CstNode<"Description">, CstNode<"input">, CstNode<"Name">]
    | [
        CstNode<"input">,
        CstNode<"Name">,
        CstNode<"Directives">,
        CstNode<"InputFieldsDefinition">
      ]
    | [CstNode<"input">, CstNode<"Name">, CstNode<"Directives">]
    | [CstNode<"input">, CstNode<"Name">, CstNode<"InputFieldsDefinition">]
    | [CstNode<"input">, CstNode<"Name">];
  InputFieldsDefinition: [
    CstNode<"{">,
    CstNode<"_ArgumentsDefinition_repeat9">,
    CstNode<"}">
  ];
  DirectiveDefinition:
    | [
        CstNode<"Description">,
        CstNode<"directive">,
        CstNode<"@">,
        CstNode<"Name">,
        CstNode<"ArgumentsDefinition">,
        CstNode<"on">,
        CstNode<"DirectiveLocations">
      ]
    | [
        CstNode<"Description">,
        CstNode<"directive">,
        CstNode<"@">,
        CstNode<"Name">,
        CstNode<"on">,
        CstNode<"DirectiveLocations">
      ]
    | [
        CstNode<"directive">,
        CstNode<"@">,
        CstNode<"Name">,
        CstNode<"ArgumentsDefinition">,
        CstNode<"on">,
        CstNode<"DirectiveLocations">
      ]
    | [
        CstNode<"directive">,
        CstNode<"@">,
        CstNode<"Name">,
        CstNode<"on">,
        CstNode<"DirectiveLocations">
      ];
  _DirectiveLocations_repeat12:
    | [CstNode<"|">, CstNode<"DirectiveLocation">]
    | [
        CstNode<"_DirectiveLocations_repeat12">,
        CstNode<"|">,
        CstNode<"DirectiveLocation">
      ];
  DirectiveLocations:
    | [
        CstNode<"|">,
        CstNode<"DirectiveLocation">,
        CstNode<"_DirectiveLocations_repeat12">
      ]
    | [CstNode<"|">, CstNode<"DirectiveLocation">]
    | [CstNode<"DirectiveLocation">, CstNode<"_DirectiveLocations_repeat12">]
    | [CstNode<"DirectiveLocation">];
  DirectiveLocation:
    | [CstNode<"ExecutableDirectiveLocation">]
    | [CstNode<"TypeSystemDirectiveLocation">];
  ExecutableDirectiveLocation:
    | [CstNode<"QUERY">]
    | [CstNode<"MUTATION">]
    | [CstNode<"SUBSCRIPTION">]
    | [CstNode<"FIELD">]
    | [CstNode<"FRAGMENT_DEFINITION">]
    | [CstNode<"FRAGMENT_SPREAD">]
    | [CstNode<"INLINE_FRAGMENT">]
    | [CstNode<"VARIABLE_DEFINITION">];
  TypeSystemDirectiveLocation:
    | [CstNode<"SCHEMA">]
    | [CstNode<"SCALAR">]
    | [CstNode<"OBJECT">]
    | [CstNode<"FIELD_DEFINITION">]
    | [CstNode<"ARGUMENT_DEFINITION">]
    | [CstNode<"INTERFACE">]
    | [CstNode<"UNION">]
    | [CstNode<"ENUM">]
    | [CstNode<"ENUM_VALUE">]
    | [CstNode<"INPUT_OBJECT">]
    | [CstNode<"INPUT_FIELD_DEFINITION">];
}

export type RuleNode<Name extends RuleName = RuleName> = CstNode<Name> & {
  readonly items: RuleChildrenMap[Name];
};

export type TypedCstNode =
  | { [K in TokenName]: TokenNode<K> }[TokenName]
  | { [K in RuleName]: RuleNode<K> }[RuleName];

export type Node = CstNode;

export function parse(input: Uint8Array | string): CstNode<StartRuleName>;
