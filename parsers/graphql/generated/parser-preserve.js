// @ts-nocheck

import { next as nextTokenInitial } from "./lexer-preserve-initial.js";
import { next as nextTokenImmStringValue0 } from "./lexer-preserve-imm_StringValue_0.js";
import { next as nextTokenImmStringValue1 } from "./lexer-preserve-imm_StringValue_1.js";

/*
      source_file := Document;
Document := Definition;
Document := Document Definition;
Definition := ExecutableDefinition;
Definition := TypeSystemDefinition;
Definition := TypeSystemExtension;
ExecutableDefinition := OperationDefinition;
ExecutableDefinition := FragmentDefinition;
OperationDefinition := SelectionSet;
OperationDefinition := OperationType Name VariableDefinitions Directives SelectionSet;
OperationDefinition := OperationType Name VariableDefinitions SelectionSet;
OperationDefinition := OperationType Name Directives SelectionSet;
OperationDefinition := OperationType Name SelectionSet;
OperationDefinition := OperationType VariableDefinitions Directives SelectionSet;
OperationDefinition := OperationType VariableDefinitions SelectionSet;
OperationDefinition := OperationType Directives SelectionSet;
OperationDefinition := OperationType SelectionSet;
OperationType := query;
OperationType := mutation;
OperationType := subscription;
_SelectionSet_repeat1 := Selection;
_SelectionSet_repeat1 := _SelectionSet_repeat1 Selection;
SelectionSet := { _SelectionSet_repeat1 };
Selection := Field;
Selection := FragmentSpread;
Selection := InlineFragment;
Field := Alias Name Arguments Directives SelectionSet;
Field := Alias Name Arguments Directives;
Field := Alias Name Arguments SelectionSet;
Field := Alias Name Arguments;
Field := Alias Name Directives SelectionSet;
Field := Alias Name Directives;
Field := Alias Name SelectionSet;
Field := Alias Name;
Field := Name Arguments Directives SelectionSet;
Field := Name Arguments Directives;
Field := Name Arguments SelectionSet;
Field := Name Arguments;
Field := Name Directives SelectionSet;
Field := Name Directives;
Field := Name SelectionSet;
Field := Name;
Alias := Name :;
_Arguments_repeat2 := Argument;
_Arguments_repeat2 := _Arguments_repeat2 Argument;
Arguments := ( _Arguments_repeat2 );
Argument := Name : Value;
FragmentSpread := ... FragmentName Directives;
FragmentSpread := ... FragmentName;
InlineFragment := ... TypeCondition Directives SelectionSet;
InlineFragment := ... TypeCondition SelectionSet;
InlineFragment := ... Directives SelectionSet;
InlineFragment := ... SelectionSet;
FragmentDefinition := fragment FragmentName TypeCondition Directives SelectionSet;
FragmentDefinition := fragment FragmentName TypeCondition SelectionSet;
FragmentName := Name;
TypeCondition := on NamedType;
Value := Variable;
Value := IntValue;
Value := FloatValue;
Value := StringValue;
Value := BooleanValue;
Value := NullValue;
Value := EnumValue;
Value := ListValue;
Value := ObjectValue;
BooleanValue := false;
BooleanValue := true;
NullValue := null;
EnumValue := Name;
_ListValue_repeat3 := Value;
_ListValue_repeat3 := _ListValue_repeat3 Value;
ListValue := [ _ListValue_repeat3 ];
ListValue := [ ];
_ObjectValue_repeat4 := ObjectField;
_ObjectValue_repeat4 := _ObjectValue_repeat4 ObjectField;
ObjectValue := { _ObjectValue_repeat4 };
ObjectValue := { };
ObjectField := Name : Value;
StringValue := """ _StringValue_token1 """;
StringValue := """ """;
StringValue := " _StringValue_token2 ";
StringValue := " ";
_VariableDefinitions_repeat5 := VariableDefinition;
_VariableDefinitions_repeat5 := _VariableDefinitions_repeat5 VariableDefinition;
VariableDefinitions := ( _VariableDefinitions_repeat5 );
VariableDefinition := Variable : Type DefaultValue;
VariableDefinition := Variable : Type;
Variable := $ Name;
DefaultValue := = Value;
Type := NamedType;
Type := ListType;
Type := NonNullType;
NamedType := Name;
ListType := [ Type ];
NonNullType := NamedType !;
NonNullType := ListType !;
Directives := Directive;
Directives := Directives Directive;
Directive := @ Name Arguments;
Directive := @ Name;
TypeSystemDefinition := SchemaDefinition;
TypeSystemDefinition := TypeDefinition;
TypeSystemDefinition := DirectiveDefinition;
TypeSystemExtension := SchemaExtension;
TypeSystemExtension := TypeExtension;
_SchemaDefinition_repeat6 := OperationTypeDefinition;
_SchemaDefinition_repeat6 := _SchemaDefinition_repeat6 OperationTypeDefinition;
SchemaDefinition := schema Directives { _SchemaDefinition_repeat6 };
SchemaDefinition := schema { _SchemaDefinition_repeat6 };
SchemaExtension := extend schema Directives { _SchemaDefinition_repeat6 };
SchemaExtension := extend schema { _SchemaDefinition_repeat6 };
SchemaExtension := extend schema Directives;
TypeExtension := ScalarTypeExtension;
TypeExtension := ObjectTypeExtension;
TypeExtension := InterfaceTypeExtension;
TypeExtension := UnionTypeExtension;
TypeExtension := EnumTypeExtension;
TypeExtension := InputObjectTypeExtension;
ScalarTypeExtension := extend scalar Name Directives;
ObjectTypeExtension := extend type Name ImplementsInterfaces Directives FieldsDefinition;
ObjectTypeExtension := extend type Name ImplementsInterfaces FieldsDefinition;
ObjectTypeExtension := extend type Name Directives FieldsDefinition;
ObjectTypeExtension := extend type Name FieldsDefinition;
ObjectTypeExtension := extend type Name ImplementsInterfaces Directives;
ObjectTypeExtension := extend type Name Directives;
ObjectTypeExtension := extend type Name ImplementsInterfaces;
InterfaceTypeExtension := extend interface Name Directives FieldsDefinition;
InterfaceTypeExtension := extend interface Name FieldsDefinition;
InterfaceTypeExtension := extend interface Name Directives;
UnionTypeExtension := extend union Name Directives UnionMemberTypes;
UnionTypeExtension := extend union Name UnionMemberTypes;
UnionTypeExtension := extend union Name Directives;
EnumTypeExtension := extend enum Name Directives EnumValuesDefinition;
EnumTypeExtension := extend enum Name EnumValuesDefinition;
EnumTypeExtension := extend enum Name Directives;
InputObjectTypeExtension := extend input Name Directives InputFieldsDefinition;
InputObjectTypeExtension := extend input Name InputFieldsDefinition;
InputObjectTypeExtension := extend input Name Directives;
OperationTypeDefinition := OperationType : NamedType;
Description := StringValue;
TypeDefinition := ScalarTypeDefinition;
TypeDefinition := ObjectTypeDefinition;
TypeDefinition := InterfaceTypeDefinition;
TypeDefinition := UnionTypeDefinition;
TypeDefinition := EnumTypeDefinition;
TypeDefinition := InputObjectTypeDefinition;
ScalarTypeDefinition := Description scalar Name Directives;
ScalarTypeDefinition := Description scalar Name;
ScalarTypeDefinition := scalar Name Directives;
ScalarTypeDefinition := scalar Name;
ObjectTypeDefinition := Description type Name ImplementsInterfaces Directives FieldsDefinition;
ObjectTypeDefinition := Description type Name ImplementsInterfaces Directives;
ObjectTypeDefinition := Description type Name ImplementsInterfaces FieldsDefinition;
ObjectTypeDefinition := Description type Name ImplementsInterfaces;
ObjectTypeDefinition := Description type Name Directives FieldsDefinition;
ObjectTypeDefinition := Description type Name Directives;
ObjectTypeDefinition := Description type Name FieldsDefinition;
ObjectTypeDefinition := Description type Name;
ObjectTypeDefinition := type Name ImplementsInterfaces Directives FieldsDefinition;
ObjectTypeDefinition := type Name ImplementsInterfaces Directives;
ObjectTypeDefinition := type Name ImplementsInterfaces FieldsDefinition;
ObjectTypeDefinition := type Name ImplementsInterfaces;
ObjectTypeDefinition := type Name Directives FieldsDefinition;
ObjectTypeDefinition := type Name Directives;
ObjectTypeDefinition := type Name FieldsDefinition;
ObjectTypeDefinition := type Name;
_ImplementsInterfaces_repeat7 := & NamedType;
_ImplementsInterfaces_repeat7 := _ImplementsInterfaces_repeat7 & NamedType;
ImplementsInterfaces := implements & NamedType _ImplementsInterfaces_repeat7;
ImplementsInterfaces := implements & NamedType;
ImplementsInterfaces := implements NamedType _ImplementsInterfaces_repeat7;
ImplementsInterfaces := implements NamedType;
_FieldsDefinition_repeat8 := FieldDefinition;
_FieldsDefinition_repeat8 := _FieldsDefinition_repeat8 FieldDefinition;
FieldsDefinition := { _FieldsDefinition_repeat8 };
FieldDefinition := Description Name ArgumentsDefinition : Type Directive;
FieldDefinition := Description Name ArgumentsDefinition : Type;
FieldDefinition := Description Name : Type Directive;
FieldDefinition := Description Name : Type;
FieldDefinition := Name ArgumentsDefinition : Type Directive;
FieldDefinition := Name ArgumentsDefinition : Type;
FieldDefinition := Name : Type Directive;
FieldDefinition := Name : Type;
_ArgumentsDefinition_repeat9 := InputValueDefinition;
_ArgumentsDefinition_repeat9 := _ArgumentsDefinition_repeat9 InputValueDefinition;
ArgumentsDefinition := ( _ArgumentsDefinition_repeat9 );
InputValueDefinition := Description Name : Type DefaultValue Directives;
InputValueDefinition := Description Name : Type DefaultValue;
InputValueDefinition := Description Name : Type Directives;
InputValueDefinition := Description Name : Type;
InputValueDefinition := Name : Type DefaultValue Directives;
InputValueDefinition := Name : Type DefaultValue;
InputValueDefinition := Name : Type Directives;
InputValueDefinition := Name : Type;
InterfaceTypeDefinition := Description interface Name Directives FieldsDefinition;
InterfaceTypeDefinition := Description interface Name Directives;
InterfaceTypeDefinition := Description interface Name FieldsDefinition;
InterfaceTypeDefinition := Description interface Name;
InterfaceTypeDefinition := interface Name Directives FieldsDefinition;
InterfaceTypeDefinition := interface Name Directives;
InterfaceTypeDefinition := interface Name FieldsDefinition;
InterfaceTypeDefinition := interface Name;
UnionTypeDefinition := Description union Name Directives UnionMemberTypes;
UnionTypeDefinition := Description union Name Directives;
UnionTypeDefinition := Description union Name UnionMemberTypes;
UnionTypeDefinition := Description union Name;
UnionTypeDefinition := union Name Directives UnionMemberTypes;
UnionTypeDefinition := union Name Directives;
UnionTypeDefinition := union Name UnionMemberTypes;
UnionTypeDefinition := union Name;
_UnionMemberTypes_repeat10 := | NamedType;
_UnionMemberTypes_repeat10 := _UnionMemberTypes_repeat10 | NamedType;
UnionMemberTypes := = | NamedType _UnionMemberTypes_repeat10;
UnionMemberTypes := = | NamedType;
UnionMemberTypes := = NamedType _UnionMemberTypes_repeat10;
UnionMemberTypes := = NamedType;
EnumTypeDefinition := Description enum Name Directives EnumValuesDefinition;
EnumTypeDefinition := Description enum Name Directives;
EnumTypeDefinition := Description enum Name EnumValuesDefinition;
EnumTypeDefinition := Description enum Name;
EnumTypeDefinition := enum Name Directives EnumValuesDefinition;
EnumTypeDefinition := enum Name Directives;
EnumTypeDefinition := enum Name EnumValuesDefinition;
EnumTypeDefinition := enum Name;
_EnumValuesDefinition_repeat11 := EnumValueDefinition;
_EnumValuesDefinition_repeat11 := _EnumValuesDefinition_repeat11 EnumValueDefinition;
EnumValuesDefinition := { _EnumValuesDefinition_repeat11 };
EnumValueDefinition := Description EnumValue Directives;
EnumValueDefinition := Description EnumValue;
EnumValueDefinition := EnumValue Directives;
EnumValueDefinition := EnumValue;
InputObjectTypeDefinition := Description input Name Directives InputFieldsDefinition;
InputObjectTypeDefinition := Description input Name Directives;
InputObjectTypeDefinition := Description input Name InputFieldsDefinition;
InputObjectTypeDefinition := Description input Name;
InputObjectTypeDefinition := input Name Directives InputFieldsDefinition;
InputObjectTypeDefinition := input Name Directives;
InputObjectTypeDefinition := input Name InputFieldsDefinition;
InputObjectTypeDefinition := input Name;
InputFieldsDefinition := { _ArgumentsDefinition_repeat9 };
DirectiveDefinition := Description directive @ Name ArgumentsDefinition on DirectiveLocations;
DirectiveDefinition := Description directive @ Name on DirectiveLocations;
DirectiveDefinition := directive @ Name ArgumentsDefinition on DirectiveLocations;
DirectiveDefinition := directive @ Name on DirectiveLocations;
_DirectiveLocations_repeat12 := | DirectiveLocation;
_DirectiveLocations_repeat12 := _DirectiveLocations_repeat12 | DirectiveLocation;
DirectiveLocations := | DirectiveLocation _DirectiveLocations_repeat12;
DirectiveLocations := | DirectiveLocation;
DirectiveLocations := DirectiveLocation _DirectiveLocations_repeat12;
DirectiveLocations := DirectiveLocation;
DirectiveLocation := ExecutableDirectiveLocation;
DirectiveLocation := TypeSystemDirectiveLocation;
ExecutableDirectiveLocation := QUERY;
ExecutableDirectiveLocation := MUTATION;
ExecutableDirectiveLocation := SUBSCRIPTION;
ExecutableDirectiveLocation := FIELD;
ExecutableDirectiveLocation := FRAGMENT_DEFINITION;
ExecutableDirectiveLocation := FRAGMENT_SPREAD;
ExecutableDirectiveLocation := INLINE_FRAGMENT;
ExecutableDirectiveLocation := VARIABLE_DEFINITION;
TypeSystemDirectiveLocation := SCHEMA;
TypeSystemDirectiveLocation := SCALAR;
TypeSystemDirectiveLocation := OBJECT;
TypeSystemDirectiveLocation := FIELD_DEFINITION;
TypeSystemDirectiveLocation := ARGUMENT_DEFINITION;
TypeSystemDirectiveLocation := INTERFACE;
TypeSystemDirectiveLocation := UNION;
TypeSystemDirectiveLocation := ENUM;
TypeSystemDirectiveLocation := ENUM_VALUE;
TypeSystemDirectiveLocation := INPUT_OBJECT;
TypeSystemDirectiveLocation := INPUT_FIELD_DEFINITION;
      */

const parserSymbols = [
  "query", // 0
  "mutation", // 1
  "subscription", // 2
  "{", // 3
  "}", // 4
  ":", // 5
  "(", // 6
  ")", // 7
  "...", // 8
  "fragment", // 9
  "on", // 10
  "false", // 11
  "true", // 12
  "null", // 13
  "[", // 14
  "]", // 15
  '"""', // 16
  '"', // 17
  "$", // 18
  "=", // 19
  "!", // 20
  "@", // 21
  "schema", // 22
  "extend", // 23
  "scalar", // 24
  "type", // 25
  "interface", // 26
  "union", // 27
  "enum", // 28
  "input", // 29
  "implements", // 30
  "&", // 31
  "|", // 32
  "directive", // 33
  "QUERY", // 34
  "MUTATION", // 35
  "SUBSCRIPTION", // 36
  "FIELD", // 37
  "FRAGMENT_DEFINITION", // 38
  "FRAGMENT_SPREAD", // 39
  "INLINE_FRAGMENT", // 40
  "VARIABLE_DEFINITION", // 41
  "SCHEMA", // 42
  "SCALAR", // 43
  "OBJECT", // 44
  "FIELD_DEFINITION", // 45
  "ARGUMENT_DEFINITION", // 46
  "INTERFACE", // 47
  "UNION", // 48
  "ENUM", // 49
  "ENUM_VALUE", // 50
  "INPUT_OBJECT", // 51
  "INPUT_FIELD_DEFINITION", // 52
  "IntValue", // 53
  "FloatValue", // 54
  "Name", // 55
  "_StringValue_token1", // 56
  "_StringValue_token2", // 57
  "@par-gen.EOF", // 58
  "@par-gen.ERROR", // 59
  "comma", // 60
  "comment", // 61
  "S", // 62
  "source_file", // 63
  "Document", // 64
  "Definition", // 65
  "ExecutableDefinition", // 66
  "OperationDefinition", // 67
  "OperationType", // 68
  "_SelectionSet_repeat1", // 69
  "SelectionSet", // 70
  "Selection", // 71
  "Field", // 72
  "Alias", // 73
  "_Arguments_repeat2", // 74
  "Arguments", // 75
  "Argument", // 76
  "FragmentSpread", // 77
  "InlineFragment", // 78
  "FragmentDefinition", // 79
  "FragmentName", // 80
  "TypeCondition", // 81
  "Value", // 82
  "BooleanValue", // 83
  "NullValue", // 84
  "EnumValue", // 85
  "_ListValue_repeat3", // 86
  "ListValue", // 87
  "_ObjectValue_repeat4", // 88
  "ObjectValue", // 89
  "ObjectField", // 90
  "StringValue", // 91
  "_VariableDefinitions_repeat5", // 92
  "VariableDefinitions", // 93
  "VariableDefinition", // 94
  "Variable", // 95
  "DefaultValue", // 96
  "Type", // 97
  "NamedType", // 98
  "ListType", // 99
  "NonNullType", // 100
  "Directives", // 101
  "Directive", // 102
  "TypeSystemDefinition", // 103
  "TypeSystemExtension", // 104
  "_SchemaDefinition_repeat6", // 105
  "SchemaDefinition", // 106
  "SchemaExtension", // 107
  "TypeExtension", // 108
  "ScalarTypeExtension", // 109
  "ObjectTypeExtension", // 110
  "InterfaceTypeExtension", // 111
  "UnionTypeExtension", // 112
  "EnumTypeExtension", // 113
  "InputObjectTypeExtension", // 114
  "OperationTypeDefinition", // 115
  "Description", // 116
  "TypeDefinition", // 117
  "ScalarTypeDefinition", // 118
  "ObjectTypeDefinition", // 119
  "_ImplementsInterfaces_repeat7", // 120
  "ImplementsInterfaces", // 121
  "_FieldsDefinition_repeat8", // 122
  "FieldsDefinition", // 123
  "FieldDefinition", // 124
  "_ArgumentsDefinition_repeat9", // 125
  "ArgumentsDefinition", // 126
  "InputValueDefinition", // 127
  "InterfaceTypeDefinition", // 128
  "UnionTypeDefinition", // 129
  "_UnionMemberTypes_repeat10", // 130
  "UnionMemberTypes", // 131
  "EnumTypeDefinition", // 132
  "_EnumValuesDefinition_repeat11", // 133
  "EnumValuesDefinition", // 134
  "EnumValueDefinition", // 135
  "InputObjectTypeDefinition", // 136
  "InputFieldsDefinition", // 137
  "DirectiveDefinition", // 138
  "_DirectiveLocations_repeat12", // 139
  "DirectiveLocations", // 140
  "DirectiveLocation", // 141
  "ExecutableDirectiveLocation", // 142
  "TypeSystemDirectiveLocation", // 143
];

const SymbolIds = Object.freeze({
  query: 0,
  mutation: 1,
  subscription: 2,
  "{": 3,
  "}": 4,
  ":": 5,
  "(": 6,
  ")": 7,
  "...": 8,
  fragment: 9,
  on: 10,
  false: 11,
  true: 12,
  null: 13,
  "[": 14,
  "]": 15,
  '"""': 16,
  '"': 17,
  $: 18,
  "=": 19,
  "!": 20,
  "@": 21,
  schema: 22,
  extend: 23,
  scalar: 24,
  type: 25,
  interface: 26,
  union: 27,
  enum: 28,
  input: 29,
  implements: 30,
  "&": 31,
  "|": 32,
  directive: 33,
  QUERY: 34,
  MUTATION: 35,
  SUBSCRIPTION: 36,
  FIELD: 37,
  FRAGMENT_DEFINITION: 38,
  FRAGMENT_SPREAD: 39,
  INLINE_FRAGMENT: 40,
  VARIABLE_DEFINITION: 41,
  SCHEMA: 42,
  SCALAR: 43,
  OBJECT: 44,
  FIELD_DEFINITION: 45,
  ARGUMENT_DEFINITION: 46,
  INTERFACE: 47,
  UNION: 48,
  ENUM: 49,
  ENUM_VALUE: 50,
  INPUT_OBJECT: 51,
  INPUT_FIELD_DEFINITION: 52,
  IntValue: 53,
  FloatValue: 54,
  Name: 55,
  _StringValue_token1: 56,
  _StringValue_token2: 57,
  "@par-gen.EOF": 58,
  "@par-gen.ERROR": 59,
  comma: 60,
  comment: 61,
  S: 62,
  source_file: 63,
  Document: 64,
  Definition: 65,
  ExecutableDefinition: 66,
  OperationDefinition: 67,
  OperationType: 68,
  _SelectionSet_repeat1: 69,
  SelectionSet: 70,
  Selection: 71,
  Field: 72,
  Alias: 73,
  _Arguments_repeat2: 74,
  Arguments: 75,
  Argument: 76,
  FragmentSpread: 77,
  InlineFragment: 78,
  FragmentDefinition: 79,
  FragmentName: 80,
  TypeCondition: 81,
  Value: 82,
  BooleanValue: 83,
  NullValue: 84,
  EnumValue: 85,
  _ListValue_repeat3: 86,
  ListValue: 87,
  _ObjectValue_repeat4: 88,
  ObjectValue: 89,
  ObjectField: 90,
  StringValue: 91,
  _VariableDefinitions_repeat5: 92,
  VariableDefinitions: 93,
  VariableDefinition: 94,
  Variable: 95,
  DefaultValue: 96,
  Type: 97,
  NamedType: 98,
  ListType: 99,
  NonNullType: 100,
  Directives: 101,
  Directive: 102,
  TypeSystemDefinition: 103,
  TypeSystemExtension: 104,
  _SchemaDefinition_repeat6: 105,
  SchemaDefinition: 106,
  SchemaExtension: 107,
  TypeExtension: 108,
  ScalarTypeExtension: 109,
  ObjectTypeExtension: 110,
  InterfaceTypeExtension: 111,
  UnionTypeExtension: 112,
  EnumTypeExtension: 113,
  InputObjectTypeExtension: 114,
  OperationTypeDefinition: 115,
  Description: 116,
  TypeDefinition: 117,
  ScalarTypeDefinition: 118,
  ObjectTypeDefinition: 119,
  _ImplementsInterfaces_repeat7: 120,
  ImplementsInterfaces: 121,
  _FieldsDefinition_repeat8: 122,
  FieldsDefinition: 123,
  FieldDefinition: 124,
  _ArgumentsDefinition_repeat9: 125,
  ArgumentsDefinition: 126,
  InputValueDefinition: 127,
  InterfaceTypeDefinition: 128,
  UnionTypeDefinition: 129,
  _UnionMemberTypes_repeat10: 130,
  UnionMemberTypes: 131,
  EnumTypeDefinition: 132,
  _EnumValuesDefinition_repeat11: 133,
  EnumValuesDefinition: 134,
  EnumValueDefinition: 135,
  InputObjectTypeDefinition: 136,
  InputFieldsDefinition: 137,
  DirectiveDefinition: 138,
  _DirectiveLocations_repeat12: 139,
  DirectiveLocations: 140,
  DirectiveLocation: 141,
  ExecutableDirectiveLocation: 142,
  TypeSystemDirectiveLocation: 143,
});

const actionsTable = new Uint16Array(41408).fill(0xffff);
actionsTable.fill(300, 0, 3); // 'state 0' -> query..subscription -> shift (target=150, len=0)
actionsTable[3] = 2; // 'state 0' -> { -> shift (target=1, len=0)
actionsTable[9] = 4; // 'state 0' -> fragment -> shift (target=2, len=0)
actionsTable[16] = 302; // 'state 0' -> """ -> shift (target=151, len=0)
actionsTable[17] = 304; // 'state 0' -> " -> shift (target=152, len=0)
actionsTable[22] = 6; // 'state 0' -> schema -> shift (target=3, len=0)
actionsTable[23] = 306; // 'state 0' -> extend -> shift (target=153, len=0)
actionsTable[24] = 308; // 'state 0' -> scalar -> shift (target=154, len=0)
actionsTable[25] = 310; // 'state 0' -> type -> shift (target=155, len=0)
actionsTable[26] = 312; // 'state 0' -> interface -> shift (target=156, len=0)
actionsTable[27] = 314; // 'state 0' -> union -> shift (target=157, len=0)
actionsTable[28] = 316; // 'state 0' -> enum -> shift (target=158, len=0)
actionsTable[29] = 318; // 'state 0' -> input -> shift (target=159, len=0)
actionsTable[33] = 320; // 'state 0' -> directive -> shift (target=160, len=0)
actionsTable[136] = 28; // 'state 1' -> ... -> shift (target=14, len=0)
actionsTable[183] = 30; // 'state 1' -> Name -> shift (target=15, len=0)
actionsTable[311] = 352; // 'state 2' -> Name -> shift (target=176, len=0)
actionsTable[387] = 22; // 'state 3' -> { -> shift (target=11, len=0)
actionsTable[405] = 346; // 'state 3' -> @ -> shift (target=173, len=0)
actionsTable.fill(300, 512, 515); // 'state 4' -> query..subscription -> shift (target=150, len=0)
actionsTable[515] = 2; // 'state 4' -> { -> shift (target=1, len=0)
actionsTable[521] = 4; // 'state 4' -> fragment -> shift (target=2, len=0)
actionsTable[528] = 302; // 'state 4' -> """ -> shift (target=151, len=0)
actionsTable[529] = 304; // 'state 4' -> " -> shift (target=152, len=0)
actionsTable[534] = 6; // 'state 4' -> schema -> shift (target=3, len=0)
actionsTable[535] = 306; // 'state 4' -> extend -> shift (target=153, len=0)
actionsTable[536] = 308; // 'state 4' -> scalar -> shift (target=154, len=0)
actionsTable[537] = 310; // 'state 4' -> type -> shift (target=155, len=0)
actionsTable[538] = 312; // 'state 4' -> interface -> shift (target=156, len=0)
actionsTable[539] = 314; // 'state 4' -> union -> shift (target=157, len=0)
actionsTable[540] = 316; // 'state 4' -> enum -> shift (target=158, len=0)
actionsTable[541] = 318; // 'state 4' -> input -> shift (target=159, len=0)
actionsTable[545] = 320; // 'state 4' -> directive -> shift (target=160, len=0)
actionsTable[570] = 639; // 'state 4' -> @par-gen.EOF -> reduce (target=63, len=1)
actionsTable[643] = 2; // 'state 5' -> { -> shift (target=1, len=0)
actionsTable[646] = 12; // 'state 5' -> ( -> shift (target=6, len=0)
actionsTable[661] = 346; // 'state 5' -> @ -> shift (target=173, len=0)
actionsTable[695] = 14; // 'state 5' -> Name -> shift (target=7, len=0)
actionsTable[786] = 396; // 'state 6' -> $ -> shift (target=198, len=0)
actionsTable[899] = 2; // 'state 7' -> { -> shift (target=1, len=0)
actionsTable[902] = 12; // 'state 7' -> ( -> shift (target=6, len=0)
actionsTable[917] = 346; // 'state 7' -> @ -> shift (target=173, len=0)
actionsTable[1027] = 2; // 'state 8' -> { -> shift (target=1, len=0)
actionsTable[1045] = 346; // 'state 8' -> @ -> shift (target=173, len=0)
actionsTable[1155] = 2; // 'state 9' -> { -> shift (target=1, len=0)
actionsTable[1173] = 346; // 'state 9' -> @ -> shift (target=173, len=0)
actionsTable[1290] = 54; // 'state 10' -> on -> shift (target=27, len=0)
actionsTable.fill(300, 1408, 1411); // 'state 11' -> query..subscription -> shift (target=150, len=0)
actionsTable[1539] = 58; // 'state 12' -> { -> shift (target=29, len=0)
actionsTable[1557] = 346; // 'state 12' -> @ -> shift (target=173, len=0)
actionsTable[1667] = 76; // 'state 13' -> { -> shift (target=38, len=0)
actionsTable[1685] = 346; // 'state 13' -> @ -> shift (target=173, len=0)
actionsTable[1795] = 2; // 'state 14' -> { -> shift (target=1, len=0)
actionsTable[1802] = 54; // 'state 14' -> on -> shift (target=27, len=0)
actionsTable[1813] = 346; // 'state 14' -> @ -> shift (target=173, len=0)
actionsTable[1847] = 352; // 'state 14' -> Name -> shift (target=176, len=0)
actionsTable[1923] = 2; // 'state 15' -> { -> shift (target=1, len=0)
actionsTable[1924] = 657; // 'state 15' -> } -> reduce (target=72, len=1)
actionsTable[1925] = 414; // 'state 15' -> : -> shift (target=207, len=0)
actionsTable[1926] = 94; // 'state 15' -> ( -> shift (target=47, len=0)
actionsTable[1928] = 657; // 'state 15' -> ... -> reduce (target=72, len=1)
actionsTable[1941] = 346; // 'state 15' -> @ -> shift (target=173, len=0)
actionsTable[1975] = 657; // 'state 15' -> Name -> reduce (target=72, len=1)
actionsTable[2052] = 410; // 'state 16' -> } -> shift (target=205, len=0)
actionsTable[2056] = 28; // 'state 16' -> ... -> shift (target=14, len=0)
actionsTable[2103] = 30; // 'state 16' -> Name -> shift (target=15, len=0)
actionsTable.fill(1261, 2176, 2180); // 'state 17' -> query..{ -> reduce (target=118, len=2)
actionsTable[2185] = 1261; // 'state 17' -> fragment -> reduce (target=118, len=2)
actionsTable.fill(1261, 2192, 2194); // 'state 17' -> """.." -> reduce (target=118, len=2)
actionsTable[2197] = 346; // 'state 17' -> @ -> shift (target=173, len=0)
actionsTable.fill(1261, 2198, 2206); // 'state 17' -> schema..input -> reduce (target=118, len=2)
actionsTable[2209] = 1261; // 'state 17' -> directive -> reduce (target=118, len=2)
actionsTable[2234] = 1261; // 'state 17' -> @par-gen.EOF -> reduce (target=118, len=2)
actionsTable.fill(1263, 2304, 2307); // 'state 18' -> query..subscription -> reduce (target=119, len=2)
actionsTable[2307] = 108; // 'state 18' -> { -> shift (target=54, len=0)
actionsTable[2313] = 1263; // 'state 18' -> fragment -> reduce (target=119, len=2)
actionsTable.fill(1263, 2320, 2322); // 'state 18' -> """.." -> reduce (target=119, len=2)
actionsTable[2325] = 346; // 'state 18' -> @ -> shift (target=173, len=0)
actionsTable.fill(1263, 2326, 2334); // 'state 18' -> schema..input -> reduce (target=119, len=2)
actionsTable[2334] = 110; // 'state 18' -> implements -> shift (target=55, len=0)
actionsTable[2337] = 1263; // 'state 18' -> directive -> reduce (target=119, len=2)
actionsTable[2362] = 1263; // 'state 18' -> @par-gen.EOF -> reduce (target=119, len=2)
actionsTable.fill(1281, 2432, 2435); // 'state 19' -> query..subscription -> reduce (target=128, len=2)
actionsTable[2435] = 108; // 'state 19' -> { -> shift (target=54, len=0)
actionsTable[2441] = 1281; // 'state 19' -> fragment -> reduce (target=128, len=2)
actionsTable.fill(1281, 2448, 2450); // 'state 19' -> """.." -> reduce (target=128, len=2)
actionsTable[2453] = 346; // 'state 19' -> @ -> shift (target=173, len=0)
actionsTable.fill(1281, 2454, 2462); // 'state 19' -> schema..input -> reduce (target=128, len=2)
actionsTable[2465] = 1281; // 'state 19' -> directive -> reduce (target=128, len=2)
actionsTable[2490] = 1281; // 'state 19' -> @par-gen.EOF -> reduce (target=128, len=2)
actionsTable.fill(1283, 2560, 2564); // 'state 20' -> query..{ -> reduce (target=129, len=2)
actionsTable[2569] = 1283; // 'state 20' -> fragment -> reduce (target=129, len=2)
actionsTable.fill(1283, 2576, 2578); // 'state 20' -> """.." -> reduce (target=129, len=2)
actionsTable[2579] = 118; // 'state 20' -> = -> shift (target=59, len=0)
actionsTable[2581] = 346; // 'state 20' -> @ -> shift (target=173, len=0)
actionsTable.fill(1283, 2582, 2590); // 'state 20' -> schema..input -> reduce (target=129, len=2)
actionsTable[2593] = 1283; // 'state 20' -> directive -> reduce (target=129, len=2)
actionsTable[2618] = 1283; // 'state 20' -> @par-gen.EOF -> reduce (target=129, len=2)
actionsTable.fill(1289, 2688, 2691); // 'state 21' -> query..subscription -> reduce (target=132, len=2)
actionsTable[2691] = 122; // 'state 21' -> { -> shift (target=61, len=0)
actionsTable[2697] = 1289; // 'state 21' -> fragment -> reduce (target=132, len=2)
actionsTable.fill(1289, 2704, 2706); // 'state 21' -> """.." -> reduce (target=132, len=2)
actionsTable[2709] = 346; // 'state 21' -> @ -> shift (target=173, len=0)
actionsTable.fill(1289, 2710, 2718); // 'state 21' -> schema..input -> reduce (target=132, len=2)
actionsTable[2721] = 1289; // 'state 21' -> directive -> reduce (target=132, len=2)
actionsTable[2746] = 1289; // 'state 21' -> @par-gen.EOF -> reduce (target=132, len=2)
actionsTable.fill(1297, 2816, 2819); // 'state 22' -> query..subscription -> reduce (target=136, len=2)
actionsTable[2819] = 126; // 'state 22' -> { -> shift (target=63, len=0)
actionsTable[2825] = 1297; // 'state 22' -> fragment -> reduce (target=136, len=2)
actionsTable.fill(1297, 2832, 2834); // 'state 22' -> """.." -> reduce (target=136, len=2)
actionsTable[2837] = 346; // 'state 22' -> @ -> shift (target=173, len=0)
actionsTable.fill(1297, 2838, 2846); // 'state 22' -> schema..input -> reduce (target=136, len=2)
actionsTable[2849] = 1297; // 'state 22' -> directive -> reduce (target=136, len=2)
actionsTable[2874] = 1297; // 'state 22' -> @par-gen.EOF -> reduce (target=136, len=2)
actionsTable[2947] = 2; // 'state 23' -> { -> shift (target=1, len=0)
actionsTable[2965] = 346; // 'state 23' -> @ -> shift (target=173, len=0)
actionsTable[3075] = 2; // 'state 24' -> { -> shift (target=1, len=0)
actionsTable[3093] = 346; // 'state 24' -> @ -> shift (target=173, len=0)
actionsTable[3207] = 434; // 'state 25' -> ) -> shift (target=217, len=0)
actionsTable[3218] = 396; // 'state 25' -> $ -> shift (target=198, len=0)
actionsTable.fill(1229, 3328, 3333); // 'state 26' -> query..} -> reduce (target=102, len=2)
actionsTable[3334] = 94; // 'state 26' -> ( -> shift (target=47, len=0)
actionsTable.fill(1229, 3335, 3338); // 'state 26' -> )..fragment -> reduce (target=102, len=2)
actionsTable.fill(1229, 3344, 3346); // 'state 26' -> """.." -> reduce (target=102, len=2)
actionsTable[3347] = 1229; // 'state 26' -> = -> reduce (target=102, len=2)
actionsTable.fill(1229, 3349, 3358); // 'state 26' -> @..input -> reduce (target=102, len=2)
actionsTable[3361] = 1229; // 'state 26' -> directive -> reduce (target=102, len=2)
actionsTable[3383] = 1229; // 'state 26' -> Name -> reduce (target=102, len=2)
actionsTable[3386] = 1229; // 'state 26' -> @par-gen.EOF -> reduce (target=102, len=2)
actionsTable[3511] = 444; // 'state 27' -> Name -> shift (target=222, len=0)
actionsTable[3587] = 2; // 'state 28' -> { -> shift (target=1, len=0)
actionsTable[3605] = 346; // 'state 28' -> @ -> shift (target=173, len=0)
actionsTable.fill(300, 3712, 3715); // 'state 29' -> query..subscription -> shift (target=150, len=0)
actionsTable.fill(300, 3840, 3843); // 'state 30' -> query..subscription -> shift (target=150, len=0)
actionsTable[3844] = 448; // 'state 30' -> } -> shift (target=224, len=0)
actionsTable.fill(1773, 3968, 3972); // 'state 31' -> query..{ -> reduce (target=118, len=3)
actionsTable[3977] = 1773; // 'state 31' -> fragment -> reduce (target=118, len=3)
actionsTable.fill(1773, 3984, 3986); // 'state 31' -> """.." -> reduce (target=118, len=3)
actionsTable[3989] = 346; // 'state 31' -> @ -> shift (target=173, len=0)
actionsTable.fill(1773, 3990, 3998); // 'state 31' -> schema..input -> reduce (target=118, len=3)
actionsTable[4001] = 1773; // 'state 31' -> directive -> reduce (target=118, len=3)
actionsTable[4026] = 1773; // 'state 31' -> @par-gen.EOF -> reduce (target=118, len=3)
actionsTable.fill(1775, 4096, 4099); // 'state 32' -> query..subscription -> reduce (target=119, len=3)
actionsTable[4099] = 108; // 'state 32' -> { -> shift (target=54, len=0)
actionsTable[4105] = 1775; // 'state 32' -> fragment -> reduce (target=119, len=3)
actionsTable.fill(1775, 4112, 4114); // 'state 32' -> """.." -> reduce (target=119, len=3)
actionsTable[4117] = 346; // 'state 32' -> @ -> shift (target=173, len=0)
actionsTable.fill(1775, 4118, 4126); // 'state 32' -> schema..input -> reduce (target=119, len=3)
actionsTable[4126] = 110; // 'state 32' -> implements -> shift (target=55, len=0)
actionsTable[4129] = 1775; // 'state 32' -> directive -> reduce (target=119, len=3)
actionsTable[4154] = 1775; // 'state 32' -> @par-gen.EOF -> reduce (target=119, len=3)
actionsTable.fill(1793, 4224, 4227); // 'state 33' -> query..subscription -> reduce (target=128, len=3)
actionsTable[4227] = 108; // 'state 33' -> { -> shift (target=54, len=0)
actionsTable[4233] = 1793; // 'state 33' -> fragment -> reduce (target=128, len=3)
actionsTable.fill(1793, 4240, 4242); // 'state 33' -> """.." -> reduce (target=128, len=3)
actionsTable[4245] = 346; // 'state 33' -> @ -> shift (target=173, len=0)
actionsTable.fill(1793, 4246, 4254); // 'state 33' -> schema..input -> reduce (target=128, len=3)
actionsTable[4257] = 1793; // 'state 33' -> directive -> reduce (target=128, len=3)
actionsTable[4282] = 1793; // 'state 33' -> @par-gen.EOF -> reduce (target=128, len=3)
actionsTable.fill(1795, 4352, 4356); // 'state 34' -> query..{ -> reduce (target=129, len=3)
actionsTable[4361] = 1795; // 'state 34' -> fragment -> reduce (target=129, len=3)
actionsTable.fill(1795, 4368, 4370); // 'state 34' -> """.." -> reduce (target=129, len=3)
actionsTable[4371] = 118; // 'state 34' -> = -> shift (target=59, len=0)
actionsTable[4373] = 346; // 'state 34' -> @ -> shift (target=173, len=0)
actionsTable.fill(1795, 4374, 4382); // 'state 34' -> schema..input -> reduce (target=129, len=3)
actionsTable[4385] = 1795; // 'state 34' -> directive -> reduce (target=129, len=3)
actionsTable[4410] = 1795; // 'state 34' -> @par-gen.EOF -> reduce (target=129, len=3)
actionsTable.fill(1801, 4480, 4483); // 'state 35' -> query..subscription -> reduce (target=132, len=3)
actionsTable[4483] = 122; // 'state 35' -> { -> shift (target=61, len=0)
actionsTable[4489] = 1801; // 'state 35' -> fragment -> reduce (target=132, len=3)
actionsTable.fill(1801, 4496, 4498); // 'state 35' -> """.." -> reduce (target=132, len=3)
actionsTable[4501] = 346; // 'state 35' -> @ -> shift (target=173, len=0)
actionsTable.fill(1801, 4502, 4510); // 'state 35' -> schema..input -> reduce (target=132, len=3)
actionsTable[4513] = 1801; // 'state 35' -> directive -> reduce (target=132, len=3)
actionsTable[4538] = 1801; // 'state 35' -> @par-gen.EOF -> reduce (target=132, len=3)
actionsTable.fill(1809, 4608, 4611); // 'state 36' -> query..subscription -> reduce (target=136, len=3)
actionsTable[4611] = 126; // 'state 36' -> { -> shift (target=63, len=0)
actionsTable[4617] = 1809; // 'state 36' -> fragment -> reduce (target=136, len=3)
actionsTable.fill(1809, 4624, 4626); // 'state 36' -> """.." -> reduce (target=136, len=3)
actionsTable[4629] = 346; // 'state 36' -> @ -> shift (target=173, len=0)
actionsTable.fill(1809, 4630, 4638); // 'state 36' -> schema..input -> reduce (target=136, len=3)
actionsTable[4641] = 1809; // 'state 36' -> directive -> reduce (target=136, len=3)
actionsTable[4666] = 1809; // 'state 36' -> @par-gen.EOF -> reduce (target=136, len=3)
actionsTable[4742] = 156; // 'state 37' -> ( -> shift (target=78, len=0)
actionsTable[4746] = 158; // 'state 37' -> on -> shift (target=79, len=0)
actionsTable.fill(300, 4864, 4867); // 'state 38' -> query..subscription -> shift (target=150, len=0)
actionsTable.fill(1751, 4992, 4996); // 'state 39' -> query..{ -> reduce (target=107, len=3)
actionsTable[5001] = 1751; // 'state 39' -> fragment -> reduce (target=107, len=3)
actionsTable.fill(1751, 5008, 5010); // 'state 39' -> """.." -> reduce (target=107, len=3)
actionsTable[5013] = 346; // 'state 39' -> @ -> shift (target=173, len=0)
actionsTable.fill(1751, 5014, 5022); // 'state 39' -> schema..input -> reduce (target=107, len=3)
actionsTable[5025] = 1751; // 'state 39' -> directive -> reduce (target=107, len=3)
actionsTable[5050] = 1751; // 'state 39' -> @par-gen.EOF -> reduce (target=107, len=3)
actionsTable[5141] = 346; // 'state 40' -> @ -> shift (target=173, len=0)
actionsTable[5251] = 108; // 'state 41' -> { -> shift (target=54, len=0)
actionsTable[5269] = 346; // 'state 41' -> @ -> shift (target=173, len=0)
actionsTable[5278] = 110; // 'state 41' -> implements -> shift (target=55, len=0)
actionsTable[5379] = 108; // 'state 42' -> { -> shift (target=54, len=0)
actionsTable[5397] = 346; // 'state 42' -> @ -> shift (target=173, len=0)
actionsTable[5523] = 118; // 'state 43' -> = -> shift (target=59, len=0)
actionsTable[5525] = 346; // 'state 43' -> @ -> shift (target=173, len=0)
actionsTable[5635] = 122; // 'state 44' -> { -> shift (target=61, len=0)
actionsTable[5653] = 346; // 'state 44' -> @ -> shift (target=173, len=0)
actionsTable[5763] = 126; // 'state 45' -> { -> shift (target=63, len=0)
actionsTable[5781] = 346; // 'state 45' -> @ -> shift (target=173, len=0)
actionsTable[5891] = 2; // 'state 46' -> { -> shift (target=1, len=0)
actionsTable[5892] = 1169; // 'state 46' -> } -> reduce (target=72, len=2)
actionsTable[5894] = 94; // 'state 46' -> ( -> shift (target=47, len=0)
actionsTable[5896] = 1169; // 'state 46' -> ... -> reduce (target=72, len=2)
actionsTable[5909] = 346; // 'state 46' -> @ -> shift (target=173, len=0)
actionsTable[5943] = 1169; // 'state 46' -> Name -> reduce (target=72, len=2)
actionsTable[6071] = 476; // 'state 47' -> Name -> shift (target=238, len=0)
actionsTable[6147] = 2; // 'state 48' -> { -> shift (target=1, len=0)
actionsTable[6148] = 1169; // 'state 48' -> } -> reduce (target=72, len=2)
actionsTable[6152] = 1169; // 'state 48' -> ... -> reduce (target=72, len=2)
actionsTable[6165] = 346; // 'state 48' -> @ -> shift (target=173, len=0)
actionsTable[6199] = 1169; // 'state 48' -> Name -> reduce (target=72, len=2)
actionsTable[6275] = 2; // 'state 49' -> { -> shift (target=1, len=0)
actionsTable[6276] = 1169; // 'state 49' -> } -> reduce (target=72, len=2)
actionsTable[6280] = 1169; // 'state 49' -> ... -> reduce (target=72, len=2)
actionsTable[6293] = 346; // 'state 49' -> @ -> shift (target=173, len=0)
actionsTable[6327] = 1169; // 'state 49' -> Name -> reduce (target=72, len=2)
actionsTable[6404] = 1179; // 'state 50' -> } -> reduce (target=77, len=2)
actionsTable[6408] = 1179; // 'state 50' -> ... -> reduce (target=77, len=2)
actionsTable[6421] = 346; // 'state 50' -> @ -> shift (target=173, len=0)
actionsTable[6455] = 1179; // 'state 50' -> Name -> reduce (target=77, len=2)
actionsTable[6531] = 2; // 'state 51' -> { -> shift (target=1, len=0)
actionsTable[6549] = 346; // 'state 51' -> @ -> shift (target=173, len=0)
actionsTable[6659] = 2; // 'state 52' -> { -> shift (target=1, len=0)
actionsTable[6677] = 346; // 'state 52' -> @ -> shift (target=173, len=0)
actionsTable.fill(1773, 6784, 6788); // 'state 53' -> query..{ -> reduce (target=118, len=3)
actionsTable[6793] = 1773; // 'state 53' -> fragment -> reduce (target=118, len=3)
actionsTable.fill(1773, 6800, 6802); // 'state 53' -> """.." -> reduce (target=118, len=3)
actionsTable[6805] = 346; // 'state 53' -> @ -> shift (target=173, len=0)
actionsTable.fill(1773, 6806, 6814); // 'state 53' -> schema..input -> reduce (target=118, len=3)
actionsTable[6817] = 1773; // 'state 53' -> directive -> reduce (target=118, len=3)
actionsTable[6842] = 1773; // 'state 53' -> @par-gen.EOF -> reduce (target=118, len=3)
actionsTable[6928] = 302; // 'state 54' -> """ -> shift (target=151, len=0)
actionsTable[6929] = 304; // 'state 54' -> " -> shift (target=152, len=0)
actionsTable[6967] = 190; // 'state 54' -> Name -> shift (target=95, len=0)
actionsTable[7071] = 186; // 'state 55' -> & -> shift (target=93, len=0)
actionsTable[7095] = 444; // 'state 55' -> Name -> shift (target=222, len=0)
actionsTable.fill(1775, 7168, 7171); // 'state 56' -> query..subscription -> reduce (target=119, len=3)
actionsTable[7171] = 108; // 'state 56' -> { -> shift (target=54, len=0)
actionsTable[7177] = 1775; // 'state 56' -> fragment -> reduce (target=119, len=3)
actionsTable.fill(1775, 7184, 7186); // 'state 56' -> """.." -> reduce (target=119, len=3)
actionsTable[7189] = 346; // 'state 56' -> @ -> shift (target=173, len=0)
actionsTable.fill(1775, 7190, 7198); // 'state 56' -> schema..input -> reduce (target=119, len=3)
actionsTable[7201] = 1775; // 'state 56' -> directive -> reduce (target=119, len=3)
actionsTable[7226] = 1775; // 'state 56' -> @par-gen.EOF -> reduce (target=119, len=3)
actionsTable.fill(1775, 7296, 7299); // 'state 57' -> query..subscription -> reduce (target=119, len=3)
actionsTable[7299] = 108; // 'state 57' -> { -> shift (target=54, len=0)
actionsTable[7305] = 1775; // 'state 57' -> fragment -> reduce (target=119, len=3)
actionsTable.fill(1775, 7312, 7314); // 'state 57' -> """.." -> reduce (target=119, len=3)
actionsTable[7317] = 346; // 'state 57' -> @ -> shift (target=173, len=0)
actionsTable.fill(1775, 7318, 7326); // 'state 57' -> schema..input -> reduce (target=119, len=3)
actionsTable[7329] = 1775; // 'state 57' -> directive -> reduce (target=119, len=3)
actionsTable[7354] = 1775; // 'state 57' -> @par-gen.EOF -> reduce (target=119, len=3)
actionsTable.fill(1793, 7424, 7427); // 'state 58' -> query..subscription -> reduce (target=128, len=3)
actionsTable[7427] = 108; // 'state 58' -> { -> shift (target=54, len=0)
actionsTable[7433] = 1793; // 'state 58' -> fragment -> reduce (target=128, len=3)
actionsTable.fill(1793, 7440, 7442); // 'state 58' -> """.." -> reduce (target=128, len=3)
actionsTable[7445] = 346; // 'state 58' -> @ -> shift (target=173, len=0)
actionsTable.fill(1793, 7446, 7454); // 'state 58' -> schema..input -> reduce (target=128, len=3)
actionsTable[7457] = 1793; // 'state 58' -> directive -> reduce (target=128, len=3)
actionsTable[7482] = 1793; // 'state 58' -> @par-gen.EOF -> reduce (target=128, len=3)
actionsTable[7584] = 194; // 'state 59' -> | -> shift (target=97, len=0)
actionsTable[7607] = 444; // 'state 59' -> Name -> shift (target=222, len=0)
actionsTable.fill(1795, 7680, 7684); // 'state 60' -> query..{ -> reduce (target=129, len=3)
actionsTable[7689] = 1795; // 'state 60' -> fragment -> reduce (target=129, len=3)
actionsTable.fill(1795, 7696, 7698); // 'state 60' -> """.." -> reduce (target=129, len=3)
actionsTable[7699] = 118; // 'state 60' -> = -> shift (target=59, len=0)
actionsTable[7701] = 346; // 'state 60' -> @ -> shift (target=173, len=0)
actionsTable.fill(1795, 7702, 7710); // 'state 60' -> schema..input -> reduce (target=129, len=3)
actionsTable[7713] = 1795; // 'state 60' -> directive -> reduce (target=129, len=3)
actionsTable[7738] = 1795; // 'state 60' -> @par-gen.EOF -> reduce (target=129, len=3)
actionsTable[7824] = 302; // 'state 61' -> """ -> shift (target=151, len=0)
actionsTable[7825] = 304; // 'state 61' -> " -> shift (target=152, len=0)
actionsTable[7863] = 486; // 'state 61' -> Name -> shift (target=243, len=0)
actionsTable.fill(1801, 7936, 7939); // 'state 62' -> query..subscription -> reduce (target=132, len=3)
actionsTable[7939] = 122; // 'state 62' -> { -> shift (target=61, len=0)
actionsTable[7945] = 1801; // 'state 62' -> fragment -> reduce (target=132, len=3)
actionsTable.fill(1801, 7952, 7954); // 'state 62' -> """.." -> reduce (target=132, len=3)
actionsTable[7957] = 346; // 'state 62' -> @ -> shift (target=173, len=0)
actionsTable.fill(1801, 7958, 7966); // 'state 62' -> schema..input -> reduce (target=132, len=3)
actionsTable[7969] = 1801; // 'state 62' -> directive -> reduce (target=132, len=3)
actionsTable[7994] = 1801; // 'state 62' -> @par-gen.EOF -> reduce (target=132, len=3)
actionsTable[8080] = 302; // 'state 63' -> """ -> shift (target=151, len=0)
actionsTable[8081] = 304; // 'state 63' -> " -> shift (target=152, len=0)
actionsTable[8119] = 490; // 'state 63' -> Name -> shift (target=245, len=0)
actionsTable.fill(1809, 8192, 8195); // 'state 64' -> query..subscription -> reduce (target=136, len=3)
actionsTable[8195] = 126; // 'state 64' -> { -> shift (target=63, len=0)
actionsTable[8201] = 1809; // 'state 64' -> fragment -> reduce (target=136, len=3)
actionsTable.fill(1809, 8208, 8210); // 'state 64' -> """.." -> reduce (target=136, len=3)
actionsTable[8213] = 346; // 'state 64' -> @ -> shift (target=173, len=0)
actionsTable.fill(1809, 8214, 8222); // 'state 64' -> schema..input -> reduce (target=136, len=3)
actionsTable[8225] = 1809; // 'state 64' -> directive -> reduce (target=136, len=3)
actionsTable[8250] = 1809; // 'state 64' -> @par-gen.EOF -> reduce (target=136, len=3)
actionsTable[8323] = 2; // 'state 65' -> { -> shift (target=1, len=0)
actionsTable[8341] = 346; // 'state 65' -> @ -> shift (target=173, len=0)
actionsTable[8462] = 206; // 'state 66' -> [ -> shift (target=103, len=0)
actionsTable[8503] = 444; // 'state 66' -> Name -> shift (target=222, len=0)
actionsTable[8579] = 2; // 'state 67' -> { -> shift (target=1, len=0)
actionsTable[8597] = 346; // 'state 67' -> @ -> shift (target=173, len=0)
actionsTable.fill(300, 8704, 8707); // 'state 68' -> query..subscription -> shift (target=150, len=0)
actionsTable[8708] = 504; // 'state 68' -> } -> shift (target=252, len=0)
actionsTable[8887] = 444; // 'state 69' -> Name -> shift (target=222, len=0)
actionsTable[8966] = 156; // 'state 70' -> ( -> shift (target=78, len=0)
actionsTable[8970] = 210; // 'state 70' -> on -> shift (target=105, len=0)
actionsTable.fill(2285, 9088, 9092); // 'state 71' -> query..{ -> reduce (target=118, len=4)
actionsTable[9097] = 2285; // 'state 71' -> fragment -> reduce (target=118, len=4)
actionsTable.fill(2285, 9104, 9106); // 'state 71' -> """.." -> reduce (target=118, len=4)
actionsTable[9109] = 346; // 'state 71' -> @ -> shift (target=173, len=0)
actionsTable.fill(2285, 9110, 9118); // 'state 71' -> schema..input -> reduce (target=118, len=4)
actionsTable[9121] = 2285; // 'state 71' -> directive -> reduce (target=118, len=4)
actionsTable[9146] = 2285; // 'state 71' -> @par-gen.EOF -> reduce (target=118, len=4)
actionsTable.fill(2287, 9216, 9219); // 'state 72' -> query..subscription -> reduce (target=119, len=4)
actionsTable[9219] = 108; // 'state 72' -> { -> shift (target=54, len=0)
actionsTable[9225] = 2287; // 'state 72' -> fragment -> reduce (target=119, len=4)
actionsTable.fill(2287, 9232, 9234); // 'state 72' -> """.." -> reduce (target=119, len=4)
actionsTable[9237] = 346; // 'state 72' -> @ -> shift (target=173, len=0)
actionsTable.fill(2287, 9238, 9246); // 'state 72' -> schema..input -> reduce (target=119, len=4)
actionsTable[9249] = 2287; // 'state 72' -> directive -> reduce (target=119, len=4)
actionsTable[9274] = 2287; // 'state 72' -> @par-gen.EOF -> reduce (target=119, len=4)
actionsTable.fill(2287, 9344, 9347); // 'state 73' -> query..subscription -> reduce (target=119, len=4)
actionsTable[9347] = 108; // 'state 73' -> { -> shift (target=54, len=0)
actionsTable[9353] = 2287; // 'state 73' -> fragment -> reduce (target=119, len=4)
actionsTable.fill(2287, 9360, 9362); // 'state 73' -> """.." -> reduce (target=119, len=4)
actionsTable[9365] = 346; // 'state 73' -> @ -> shift (target=173, len=0)
actionsTable.fill(2287, 9366, 9374); // 'state 73' -> schema..input -> reduce (target=119, len=4)
actionsTable[9377] = 2287; // 'state 73' -> directive -> reduce (target=119, len=4)
actionsTable[9402] = 2287; // 'state 73' -> @par-gen.EOF -> reduce (target=119, len=4)
actionsTable.fill(2305, 9472, 9475); // 'state 74' -> query..subscription -> reduce (target=128, len=4)
actionsTable[9475] = 108; // 'state 74' -> { -> shift (target=54, len=0)
actionsTable[9481] = 2305; // 'state 74' -> fragment -> reduce (target=128, len=4)
actionsTable.fill(2305, 9488, 9490); // 'state 74' -> """.." -> reduce (target=128, len=4)
actionsTable[9493] = 346; // 'state 74' -> @ -> shift (target=173, len=0)
actionsTable.fill(2305, 9494, 9502); // 'state 74' -> schema..input -> reduce (target=128, len=4)
actionsTable[9505] = 2305; // 'state 74' -> directive -> reduce (target=128, len=4)
actionsTable[9530] = 2305; // 'state 74' -> @par-gen.EOF -> reduce (target=128, len=4)
actionsTable.fill(2307, 9600, 9604); // 'state 75' -> query..{ -> reduce (target=129, len=4)
actionsTable[9609] = 2307; // 'state 75' -> fragment -> reduce (target=129, len=4)
actionsTable.fill(2307, 9616, 9618); // 'state 75' -> """.." -> reduce (target=129, len=4)
actionsTable[9619] = 118; // 'state 75' -> = -> shift (target=59, len=0)
actionsTable[9621] = 346; // 'state 75' -> @ -> shift (target=173, len=0)
actionsTable.fill(2307, 9622, 9630); // 'state 75' -> schema..input -> reduce (target=129, len=4)
actionsTable[9633] = 2307; // 'state 75' -> directive -> reduce (target=129, len=4)
actionsTable[9658] = 2307; // 'state 75' -> @par-gen.EOF -> reduce (target=129, len=4)
actionsTable.fill(2313, 9728, 9731); // 'state 76' -> query..subscription -> reduce (target=132, len=4)
actionsTable[9731] = 122; // 'state 76' -> { -> shift (target=61, len=0)
actionsTable[9737] = 2313; // 'state 76' -> fragment -> reduce (target=132, len=4)
actionsTable.fill(2313, 9744, 9746); // 'state 76' -> """.." -> reduce (target=132, len=4)
actionsTable[9749] = 346; // 'state 76' -> @ -> shift (target=173, len=0)
actionsTable.fill(2313, 9750, 9758); // 'state 76' -> schema..input -> reduce (target=132, len=4)
actionsTable[9761] = 2313; // 'state 76' -> directive -> reduce (target=132, len=4)
actionsTable[9786] = 2313; // 'state 76' -> @par-gen.EOF -> reduce (target=132, len=4)
actionsTable.fill(2321, 9856, 9859); // 'state 77' -> query..subscription -> reduce (target=136, len=4)
actionsTable[9859] = 126; // 'state 77' -> { -> shift (target=63, len=0)
actionsTable[9865] = 2321; // 'state 77' -> fragment -> reduce (target=136, len=4)
actionsTable.fill(2321, 9872, 9874); // 'state 77' -> """.." -> reduce (target=136, len=4)
actionsTable[9877] = 346; // 'state 77' -> @ -> shift (target=173, len=0)
actionsTable.fill(2321, 9878, 9886); // 'state 77' -> schema..input -> reduce (target=136, len=4)
actionsTable[9889] = 2321; // 'state 77' -> directive -> reduce (target=136, len=4)
actionsTable[9914] = 2321; // 'state 77' -> @par-gen.EOF -> reduce (target=136, len=4)
actionsTable[10000] = 302; // 'state 78' -> """ -> shift (target=151, len=0)
actionsTable[10001] = 304; // 'state 78' -> " -> shift (target=152, len=0)
actionsTable[10039] = 490; // 'state 78' -> Name -> shift (target=245, len=0)
actionsTable[10144] = 216; // 'state 79' -> | -> shift (target=108, len=0)
actionsTable.fill(520, 10146, 10154); // 'state 79' -> QUERY..VARIABLE_DEFINITION -> shift (target=260, len=0)
actionsTable.fill(522, 10154, 10165); // 'state 79' -> SCHEMA..INPUT_FIELD_DEFINITION -> shift (target=261, len=0)
actionsTable.fill(300, 10240, 10243); // 'state 80' -> query..subscription -> shift (target=150, len=0)
actionsTable[10244] = 528; // 'state 80' -> } -> shift (target=264, len=0)
actionsTable.fill(2267, 10368, 10372); // 'state 81' -> query..{ -> reduce (target=109, len=4)
actionsTable[10377] = 2267; // 'state 81' -> fragment -> reduce (target=109, len=4)
actionsTable.fill(2267, 10384, 10386); // 'state 81' -> """.." -> reduce (target=109, len=4)
actionsTable[10389] = 346; // 'state 81' -> @ -> shift (target=173, len=0)
actionsTable.fill(2267, 10390, 10398); // 'state 81' -> schema..input -> reduce (target=109, len=4)
actionsTable[10401] = 2267; // 'state 81' -> directive -> reduce (target=109, len=4)
actionsTable[10426] = 2267; // 'state 81' -> @par-gen.EOF -> reduce (target=109, len=4)
actionsTable.fill(2269, 10496, 10500); // 'state 82' -> query..{ -> reduce (target=110, len=4)
actionsTable[10505] = 2269; // 'state 82' -> fragment -> reduce (target=110, len=4)
actionsTable.fill(2269, 10512, 10514); // 'state 82' -> """.." -> reduce (target=110, len=4)
actionsTable[10517] = 346; // 'state 82' -> @ -> shift (target=173, len=0)
actionsTable.fill(2269, 10518, 10526); // 'state 82' -> schema..input -> reduce (target=110, len=4)
actionsTable[10529] = 2269; // 'state 82' -> directive -> reduce (target=110, len=4)
actionsTable[10554] = 2269; // 'state 82' -> @par-gen.EOF -> reduce (target=110, len=4)
actionsTable.fill(2269, 10624, 10628); // 'state 83' -> query..{ -> reduce (target=110, len=4)
actionsTable[10633] = 2269; // 'state 83' -> fragment -> reduce (target=110, len=4)
actionsTable.fill(2269, 10640, 10642); // 'state 83' -> """.." -> reduce (target=110, len=4)
actionsTable[10645] = 346; // 'state 83' -> @ -> shift (target=173, len=0)
actionsTable.fill(2269, 10646, 10654); // 'state 83' -> schema..input -> reduce (target=110, len=4)
actionsTable[10657] = 2269; // 'state 83' -> directive -> reduce (target=110, len=4)
actionsTable[10682] = 2269; // 'state 83' -> @par-gen.EOF -> reduce (target=110, len=4)
actionsTable.fill(2271, 10752, 10756); // 'state 84' -> query..{ -> reduce (target=111, len=4)
actionsTable[10761] = 2271; // 'state 84' -> fragment -> reduce (target=111, len=4)
actionsTable.fill(2271, 10768, 10770); // 'state 84' -> """.." -> reduce (target=111, len=4)
actionsTable[10773] = 346; // 'state 84' -> @ -> shift (target=173, len=0)
actionsTable.fill(2271, 10774, 10782); // 'state 84' -> schema..input -> reduce (target=111, len=4)
actionsTable[10785] = 2271; // 'state 84' -> directive -> reduce (target=111, len=4)
actionsTable[10810] = 2271; // 'state 84' -> @par-gen.EOF -> reduce (target=111, len=4)
actionsTable.fill(2273, 10880, 10884); // 'state 85' -> query..{ -> reduce (target=112, len=4)
actionsTable[10889] = 2273; // 'state 85' -> fragment -> reduce (target=112, len=4)
actionsTable.fill(2273, 10896, 10898); // 'state 85' -> """.." -> reduce (target=112, len=4)
actionsTable[10899] = 118; // 'state 85' -> = -> shift (target=59, len=0)
actionsTable[10901] = 346; // 'state 85' -> @ -> shift (target=173, len=0)
actionsTable.fill(2273, 10902, 10910); // 'state 85' -> schema..input -> reduce (target=112, len=4)
actionsTable[10913] = 2273; // 'state 85' -> directive -> reduce (target=112, len=4)
actionsTable[10938] = 2273; // 'state 85' -> @par-gen.EOF -> reduce (target=112, len=4)
actionsTable.fill(2275, 11008, 11012); // 'state 86' -> query..{ -> reduce (target=113, len=4)
actionsTable[11017] = 2275; // 'state 86' -> fragment -> reduce (target=113, len=4)
actionsTable.fill(2275, 11024, 11026); // 'state 86' -> """.." -> reduce (target=113, len=4)
actionsTable[11029] = 346; // 'state 86' -> @ -> shift (target=173, len=0)
actionsTable.fill(2275, 11030, 11038); // 'state 86' -> schema..input -> reduce (target=113, len=4)
actionsTable[11041] = 2275; // 'state 86' -> directive -> reduce (target=113, len=4)
actionsTable[11066] = 2275; // 'state 86' -> @par-gen.EOF -> reduce (target=113, len=4)
actionsTable.fill(2277, 11136, 11140); // 'state 87' -> query..{ -> reduce (target=114, len=4)
actionsTable[11145] = 2277; // 'state 87' -> fragment -> reduce (target=114, len=4)
actionsTable.fill(2277, 11152, 11154); // 'state 87' -> """.." -> reduce (target=114, len=4)
actionsTable[11157] = 346; // 'state 87' -> @ -> shift (target=173, len=0)
actionsTable.fill(2277, 11158, 11166); // 'state 87' -> schema..input -> reduce (target=114, len=4)
actionsTable[11169] = 2277; // 'state 87' -> directive -> reduce (target=114, len=4)
actionsTable[11194] = 2277; // 'state 87' -> @par-gen.EOF -> reduce (target=114, len=4)
actionsTable[11267] = 2; // 'state 88' -> { -> shift (target=1, len=0)
actionsTable[11268] = 1681; // 'state 88' -> } -> reduce (target=72, len=3)
actionsTable[11272] = 1681; // 'state 88' -> ... -> reduce (target=72, len=3)
actionsTable[11285] = 346; // 'state 88' -> @ -> shift (target=173, len=0)
actionsTable[11319] = 1681; // 'state 88' -> Name -> reduce (target=72, len=3)
actionsTable[11395] = 2; // 'state 89' -> { -> shift (target=1, len=0)
actionsTable[11396] = 1681; // 'state 89' -> } -> reduce (target=72, len=3)
actionsTable[11400] = 1681; // 'state 89' -> ... -> reduce (target=72, len=3)
actionsTable[11413] = 346; // 'state 89' -> @ -> shift (target=173, len=0)
actionsTable[11447] = 1681; // 'state 89' -> Name -> reduce (target=72, len=3)
actionsTable[11527] = 542; // 'state 90' -> ) -> shift (target=271, len=0)
actionsTable[11575] = 476; // 'state 90' -> Name -> shift (target=238, len=0)
actionsTable[11652] = 1691; // 'state 91' -> } -> reduce (target=77, len=3)
actionsTable[11656] = 1691; // 'state 91' -> ... -> reduce (target=77, len=3)
actionsTable[11669] = 346; // 'state 91' -> @ -> shift (target=173, len=0)
actionsTable[11703] = 1691; // 'state 91' -> Name -> reduce (target=77, len=3)
actionsTable[11779] = 2; // 'state 92' -> { -> shift (target=1, len=0)
actionsTable[11797] = 346; // 'state 92' -> @ -> shift (target=173, len=0)
actionsTable[11959] = 444; // 'state 93' -> Name -> shift (target=222, len=0)
actionsTable.fill(1267, 12032, 12036); // 'state 94' -> query..{ -> reduce (target=121, len=2)
actionsTable[12041] = 1267; // 'state 94' -> fragment -> reduce (target=121, len=2)
actionsTable.fill(1267, 12048, 12050); // 'state 94' -> """.." -> reduce (target=121, len=2)
actionsTable.fill(1267, 12053, 12062); // 'state 94' -> @..input -> reduce (target=121, len=2)
actionsTable[12063] = 232; // 'state 94' -> & -> shift (target=116, len=0)
actionsTable[12065] = 1267; // 'state 94' -> directive -> reduce (target=121, len=2)
actionsTable[12090] = 1267; // 'state 94' -> @par-gen.EOF -> reduce (target=121, len=2)
actionsTable[12165] = 236; // 'state 95' -> : -> shift (target=118, len=0)
actionsTable[12166] = 156; // 'state 95' -> ( -> shift (target=78, len=0)
actionsTable[12292] = 550; // 'state 96' -> } -> shift (target=275, len=0)
actionsTable[12304] = 302; // 'state 96' -> """ -> shift (target=151, len=0)
actionsTable[12305] = 304; // 'state 96' -> " -> shift (target=152, len=0)
actionsTable[12343] = 190; // 'state 96' -> Name -> shift (target=95, len=0)
actionsTable[12471] = 444; // 'state 97' -> Name -> shift (target=222, len=0)
actionsTable.fill(1287, 12544, 12548); // 'state 98' -> query..{ -> reduce (target=131, len=2)
actionsTable[12553] = 1287; // 'state 98' -> fragment -> reduce (target=131, len=2)
actionsTable.fill(1287, 12560, 12562); // 'state 98' -> """.." -> reduce (target=131, len=2)
actionsTable.fill(1287, 12566, 12574); // 'state 98' -> schema..input -> reduce (target=131, len=2)
actionsTable[12576] = 240; // 'state 98' -> | -> shift (target=120, len=0)
actionsTable[12577] = 1287; // 'state 98' -> directive -> reduce (target=131, len=2)
actionsTable[12602] = 1287; // 'state 98' -> @par-gen.EOF -> reduce (target=131, len=2)
actionsTable[12676] = 783; // 'state 99' -> } -> reduce (target=135, len=1)
actionsTable.fill(783, 12688, 12690); // 'state 99' -> """.." -> reduce (target=135, len=1)
actionsTable[12693] = 346; // 'state 99' -> @ -> shift (target=173, len=0)
actionsTable[12727] = 783; // 'state 99' -> Name -> reduce (target=135, len=1)
actionsTable[12855] = 486; // 'state 100' -> Name -> shift (target=243, len=0)
actionsTable[12932] = 558; // 'state 101' -> } -> shift (target=279, len=0)
actionsTable[12944] = 302; // 'state 101' -> """ -> shift (target=151, len=0)
actionsTable[12945] = 304; // 'state 101' -> " -> shift (target=152, len=0)
actionsTable[12983] = 486; // 'state 101' -> Name -> shift (target=243, len=0)
actionsTable[13060] = 562; // 'state 102' -> } -> shift (target=281, len=0)
actionsTable[13072] = 302; // 'state 102' -> """ -> shift (target=151, len=0)
actionsTable[13073] = 304; // 'state 102' -> " -> shift (target=152, len=0)
actionsTable[13111] = 490; // 'state 102' -> Name -> shift (target=245, len=0)
actionsTable[13198] = 206; // 'state 103' -> [ -> shift (target=103, len=0)
actionsTable[13239] = 444; // 'state 103' -> Name -> shift (target=222, len=0)
actionsTable[13319] = 1725; // 'state 104' -> ) -> reduce (target=94, len=3)
actionsTable[13330] = 1725; // 'state 104' -> $ -> reduce (target=94, len=3)
actionsTable[13331] = 248; // 'state 104' -> = -> shift (target=124, len=0)
actionsTable[13472] = 216; // 'state 105' -> | -> shift (target=108, len=0)
actionsTable.fill(520, 13474, 13482); // 'state 105' -> QUERY..VARIABLE_DEFINITION -> shift (target=260, len=0)
actionsTable.fill(522, 13482, 13493); // 'state 105' -> SCHEMA..INPUT_FIELD_DEFINITION -> shift (target=261, len=0)
actionsTable.fill(2799, 13568, 13571); // 'state 106' -> query..subscription -> reduce (target=119, len=5)
actionsTable[13571] = 108; // 'state 106' -> { -> shift (target=54, len=0)
actionsTable[13577] = 2799; // 'state 106' -> fragment -> reduce (target=119, len=5)
actionsTable.fill(2799, 13584, 13586); // 'state 106' -> """.." -> reduce (target=119, len=5)
actionsTable[13589] = 346; // 'state 106' -> @ -> shift (target=173, len=0)
actionsTable.fill(2799, 13590, 13598); // 'state 106' -> schema..input -> reduce (target=119, len=5)
actionsTable[13601] = 2799; // 'state 106' -> directive -> reduce (target=119, len=5)
actionsTable[13626] = 2799; // 'state 106' -> @par-gen.EOF -> reduce (target=119, len=5)
actionsTable[13703] = 578; // 'state 107' -> ) -> shift (target=289, len=0)
actionsTable[13712] = 302; // 'state 107' -> """ -> shift (target=151, len=0)
actionsTable[13713] = 304; // 'state 107' -> " -> shift (target=152, len=0)
actionsTable[13751] = 490; // 'state 107' -> Name -> shift (target=245, len=0)
actionsTable.fill(520, 13858, 13866); // 'state 108' -> QUERY..VARIABLE_DEFINITION -> shift (target=260, len=0)
actionsTable.fill(522, 13866, 13877); // 'state 108' -> SCHEMA..INPUT_FIELD_DEFINITION -> shift (target=261, len=0)
actionsTable.fill(793, 13952, 13956); // 'state 109' -> query..{ -> reduce (target=140, len=1)
actionsTable[13961] = 793; // 'state 109' -> fragment -> reduce (target=140, len=1)
actionsTable.fill(793, 13968, 13970); // 'state 109' -> """.." -> reduce (target=140, len=1)
actionsTable.fill(793, 13974, 13982); // 'state 109' -> schema..input -> reduce (target=140, len=1)
actionsTable[13984] = 254; // 'state 109' -> | -> shift (target=127, len=0)
actionsTable[13985] = 793; // 'state 109' -> directive -> reduce (target=140, len=1)
actionsTable[14010] = 793; // 'state 109' -> @par-gen.EOF -> reduce (target=140, len=1)
actionsTable.fill(300, 14080, 14083); // 'state 110' -> query..subscription -> shift (target=150, len=0)
actionsTable.fill(300, 14208, 14211); // 'state 111' -> query..subscription -> shift (target=150, len=0)
actionsTable[14212] = 582; // 'state 111' -> } -> shift (target=291, len=0)
actionsTable.fill(2781, 14336, 14340); // 'state 112' -> query..{ -> reduce (target=110, len=5)
actionsTable[14345] = 2781; // 'state 112' -> fragment -> reduce (target=110, len=5)
actionsTable.fill(2781, 14352, 14354); // 'state 112' -> """.." -> reduce (target=110, len=5)
actionsTable[14357] = 346; // 'state 112' -> @ -> shift (target=173, len=0)
actionsTable.fill(2781, 14358, 14366); // 'state 112' -> schema..input -> reduce (target=110, len=5)
actionsTable[14369] = 2781; // 'state 112' -> directive -> reduce (target=110, len=5)
actionsTable[14394] = 2781; // 'state 112' -> @par-gen.EOF -> reduce (target=110, len=5)
actionsTable[14467] = 2; // 'state 113' -> { -> shift (target=1, len=0)
actionsTable[14468] = 2193; // 'state 113' -> } -> reduce (target=72, len=4)
actionsTable[14472] = 2193; // 'state 113' -> ... -> reduce (target=72, len=4)
actionsTable[14485] = 346; // 'state 113' -> @ -> shift (target=173, len=0)
actionsTable[14519] = 2193; // 'state 113' -> Name -> reduce (target=72, len=4)
actionsTable[14595] = 256; // 'state 114' -> { -> shift (target=128, len=0)
actionsTable.fill(588, 14603, 14605); // 'state 114' -> false..true -> shift (target=294, len=0)
actionsTable[14605] = 590; // 'state 114' -> null -> shift (target=295, len=0)
actionsTable[14606] = 258; // 'state 114' -> [ -> shift (target=129, len=0)
actionsTable[14608] = 302; // 'state 114' -> """ -> shift (target=151, len=0)
actionsTable[14609] = 304; // 'state 114' -> " -> shift (target=152, len=0)
actionsTable[14610] = 396; // 'state 114' -> $ -> shift (target=198, len=0)
actionsTable.fill(592, 14645, 14647); // 'state 114' -> IntValue..FloatValue -> shift (target=296, len=0)
actionsTable[14647] = 486; // 'state 114' -> Name -> shift (target=243, len=0)
actionsTable.fill(1779, 14720, 14724); // 'state 115' -> query..{ -> reduce (target=121, len=3)
actionsTable[14729] = 1779; // 'state 115' -> fragment -> reduce (target=121, len=3)
actionsTable.fill(1779, 14736, 14738); // 'state 115' -> """.." -> reduce (target=121, len=3)
actionsTable.fill(1779, 14741, 14750); // 'state 115' -> @..input -> reduce (target=121, len=3)
actionsTable[14751] = 232; // 'state 115' -> & -> shift (target=116, len=0)
actionsTable[14753] = 1779; // 'state 115' -> directive -> reduce (target=121, len=3)
actionsTable[14778] = 1779; // 'state 115' -> @par-gen.EOF -> reduce (target=121, len=3)
actionsTable[14903] = 444; // 'state 116' -> Name -> shift (target=222, len=0)
actionsTable[14981] = 262; // 'state 117' -> : -> shift (target=131, len=0)
actionsTable[14982] = 156; // 'state 117' -> ( -> shift (target=78, len=0)
actionsTable[15118] = 206; // 'state 118' -> [ -> shift (target=103, len=0)
actionsTable[15159] = 444; // 'state 118' -> Name -> shift (target=222, len=0)
actionsTable.fill(1799, 15232, 15236); // 'state 119' -> query..{ -> reduce (target=131, len=3)
actionsTable[15241] = 1799; // 'state 119' -> fragment -> reduce (target=131, len=3)
actionsTable.fill(1799, 15248, 15250); // 'state 119' -> """.." -> reduce (target=131, len=3)
actionsTable.fill(1799, 15254, 15262); // 'state 119' -> schema..input -> reduce (target=131, len=3)
actionsTable[15264] = 240; // 'state 119' -> | -> shift (target=120, len=0)
actionsTable[15265] = 1799; // 'state 119' -> directive -> reduce (target=131, len=3)
actionsTable[15290] = 1799; // 'state 119' -> @par-gen.EOF -> reduce (target=131, len=3)
actionsTable[15415] = 444; // 'state 120' -> Name -> shift (target=222, len=0)
actionsTable[15492] = 1295; // 'state 121' -> } -> reduce (target=135, len=2)
actionsTable.fill(1295, 15504, 15506); // 'state 121' -> """.." -> reduce (target=135, len=2)
actionsTable[15509] = 346; // 'state 121' -> @ -> shift (target=173, len=0)
actionsTable[15543] = 1295; // 'state 121' -> Name -> reduce (target=135, len=2)
actionsTable[15620] = 1295; // 'state 122' -> } -> reduce (target=135, len=2)
actionsTable.fill(1295, 15632, 15634); // 'state 122' -> """.." -> reduce (target=135, len=2)
actionsTable[15637] = 346; // 'state 122' -> @ -> shift (target=173, len=0)
actionsTable[15671] = 1295; // 'state 122' -> Name -> reduce (target=135, len=2)
actionsTable[15758] = 206; // 'state 123' -> [ -> shift (target=103, len=0)
actionsTable[15799] = 444; // 'state 123' -> Name -> shift (target=222, len=0)
actionsTable[15875] = 256; // 'state 124' -> { -> shift (target=128, len=0)
actionsTable.fill(588, 15883, 15885); // 'state 124' -> false..true -> shift (target=294, len=0)
actionsTable[15885] = 590; // 'state 124' -> null -> shift (target=295, len=0)
actionsTable[15886] = 258; // 'state 124' -> [ -> shift (target=129, len=0)
actionsTable[15888] = 302; // 'state 124' -> """ -> shift (target=151, len=0)
actionsTable[15889] = 304; // 'state 124' -> " -> shift (target=152, len=0)
actionsTable[15890] = 396; // 'state 124' -> $ -> shift (target=198, len=0)
actionsTable.fill(592, 15925, 15927); // 'state 124' -> IntValue..FloatValue -> shift (target=296, len=0)
actionsTable[15927] = 486; // 'state 124' -> Name -> shift (target=243, len=0)
actionsTable[16032] = 216; // 'state 125' -> | -> shift (target=108, len=0)
actionsTable.fill(520, 16034, 16042); // 'state 125' -> QUERY..VARIABLE_DEFINITION -> shift (target=260, len=0)
actionsTable.fill(522, 16042, 16053); // 'state 125' -> SCHEMA..INPUT_FIELD_DEFINITION -> shift (target=261, len=0)
actionsTable.fill(1305, 16128, 16132); // 'state 126' -> query..{ -> reduce (target=140, len=2)
actionsTable[16137] = 1305; // 'state 126' -> fragment -> reduce (target=140, len=2)
actionsTable.fill(1305, 16144, 16146); // 'state 126' -> """.." -> reduce (target=140, len=2)
actionsTable.fill(1305, 16150, 16158); // 'state 126' -> schema..input -> reduce (target=140, len=2)
actionsTable[16160] = 254; // 'state 126' -> | -> shift (target=127, len=0)
actionsTable[16161] = 1305; // 'state 126' -> directive -> reduce (target=140, len=2)
actionsTable[16186] = 1305; // 'state 126' -> @par-gen.EOF -> reduce (target=140, len=2)
actionsTable.fill(520, 16290, 16298); // 'state 127' -> QUERY..VARIABLE_DEFINITION -> shift (target=260, len=0)
actionsTable.fill(522, 16298, 16309); // 'state 127' -> SCHEMA..INPUT_FIELD_DEFINITION -> shift (target=261, len=0)
actionsTable[16388] = 620; // 'state 128' -> } -> shift (target=310, len=0)
actionsTable[16439] = 622; // 'state 128' -> Name -> shift (target=311, len=0)
actionsTable[16515] = 256; // 'state 129' -> { -> shift (target=128, len=0)
actionsTable.fill(588, 16523, 16525); // 'state 129' -> false..true -> shift (target=294, len=0)
actionsTable[16525] = 590; // 'state 129' -> null -> shift (target=295, len=0)
actionsTable[16526] = 258; // 'state 129' -> [ -> shift (target=129, len=0)
actionsTable[16527] = 616; // 'state 129' -> ] -> shift (target=308, len=0)
actionsTable[16528] = 302; // 'state 129' -> """ -> shift (target=151, len=0)
actionsTable[16529] = 304; // 'state 129' -> " -> shift (target=152, len=0)
actionsTable[16530] = 396; // 'state 129' -> $ -> shift (target=198, len=0)
actionsTable.fill(592, 16565, 16567); // 'state 129' -> IntValue..FloatValue -> shift (target=296, len=0)
actionsTable[16567] = 486; // 'state 129' -> Name -> shift (target=243, len=0)
actionsTable[16695] = 444; // 'state 130' -> Name -> shift (target=222, len=0)
actionsTable[16782] = 206; // 'state 131' -> [ -> shift (target=103, len=0)
actionsTable[16823] = 444; // 'state 131' -> Name -> shift (target=222, len=0)
actionsTable[16900] = 1785; // 'state 132' -> } -> reduce (target=124, len=3)
actionsTable.fill(1785, 16912, 16914); // 'state 132' -> """.." -> reduce (target=124, len=3)
actionsTable[16917] = 346; // 'state 132' -> @ -> shift (target=173, len=0)
actionsTable[16951] = 1785; // 'state 132' -> Name -> reduce (target=124, len=3)
actionsTable[17079] = 444; // 'state 133' -> Name -> shift (target=222, len=0)
actionsTable[17156] = 1807; // 'state 134' -> } -> reduce (target=135, len=3)
actionsTable.fill(1807, 17168, 17170); // 'state 134' -> """.." -> reduce (target=135, len=3)
actionsTable[17173] = 346; // 'state 134' -> @ -> shift (target=173, len=0)
actionsTable[17207] = 1807; // 'state 134' -> Name -> reduce (target=135, len=3)
actionsTable[17294] = 206; // 'state 135' -> [ -> shift (target=103, len=0)
actionsTable[17335] = 444; // 'state 135' -> Name -> shift (target=222, len=0)
actionsTable[17412] = 1791; // 'state 136' -> } -> reduce (target=127, len=3)
actionsTable[17415] = 1791; // 'state 136' -> ) -> reduce (target=127, len=3)
actionsTable.fill(1791, 17424, 17426); // 'state 136' -> """.." -> reduce (target=127, len=3)
actionsTable[17427] = 248; // 'state 136' -> = -> shift (target=124, len=0)
actionsTable[17429] = 346; // 'state 136' -> @ -> shift (target=173, len=0)
actionsTable[17463] = 1791; // 'state 136' -> Name -> reduce (target=127, len=3)
actionsTable.fill(520, 17570, 17578); // 'state 137' -> QUERY..VARIABLE_DEFINITION -> shift (target=260, len=0)
actionsTable.fill(522, 17578, 17589); // 'state 137' -> SCHEMA..INPUT_FIELD_DEFINITION -> shift (target=261, len=0)
actionsTable[17667] = 256; // 'state 138' -> { -> shift (target=128, len=0)
actionsTable.fill(588, 17675, 17677); // 'state 138' -> false..true -> shift (target=294, len=0)
actionsTable[17677] = 590; // 'state 138' -> null -> shift (target=295, len=0)
actionsTable[17678] = 258; // 'state 138' -> [ -> shift (target=129, len=0)
actionsTable[17679] = 634; // 'state 138' -> ] -> shift (target=317, len=0)
actionsTable[17680] = 302; // 'state 138' -> """ -> shift (target=151, len=0)
actionsTable[17681] = 304; // 'state 138' -> " -> shift (target=152, len=0)
actionsTable[17682] = 396; // 'state 138' -> $ -> shift (target=198, len=0)
actionsTable.fill(592, 17717, 17719); // 'state 138' -> IntValue..FloatValue -> shift (target=296, len=0)
actionsTable[17719] = 486; // 'state 138' -> Name -> shift (target=243, len=0)
actionsTable[17796] = 638; // 'state 139' -> } -> shift (target=319, len=0)
actionsTable[17847] = 622; // 'state 139' -> Name -> shift (target=311, len=0)
actionsTable[17934] = 206; // 'state 140' -> [ -> shift (target=103, len=0)
actionsTable[17975] = 444; // 'state 140' -> Name -> shift (target=222, len=0)
actionsTable[18052] = 2297; // 'state 141' -> } -> reduce (target=124, len=4)
actionsTable.fill(2297, 18064, 18066); // 'state 141' -> """.." -> reduce (target=124, len=4)
actionsTable[18069] = 346; // 'state 141' -> @ -> shift (target=173, len=0)
actionsTable[18103] = 2297; // 'state 141' -> Name -> reduce (target=124, len=4)
actionsTable[18180] = 2303; // 'state 142' -> } -> reduce (target=127, len=4)
actionsTable[18183] = 2303; // 'state 142' -> ) -> reduce (target=127, len=4)
actionsTable.fill(2303, 18192, 18194); // 'state 142' -> """.." -> reduce (target=127, len=4)
actionsTable[18195] = 248; // 'state 142' -> = -> shift (target=124, len=0)
actionsTable[18197] = 346; // 'state 142' -> @ -> shift (target=173, len=0)
actionsTable[18231] = 2303; // 'state 142' -> Name -> reduce (target=127, len=4)
actionsTable[18308] = 2303; // 'state 143' -> } -> reduce (target=127, len=4)
actionsTable[18311] = 2303; // 'state 143' -> ) -> reduce (target=127, len=4)
actionsTable.fill(2303, 18320, 18322); // 'state 143' -> """.." -> reduce (target=127, len=4)
actionsTable[18325] = 346; // 'state 143' -> @ -> shift (target=173, len=0)
actionsTable[18359] = 2303; // 'state 143' -> Name -> reduce (target=127, len=4)
actionsTable[18436] = 2303; // 'state 144' -> } -> reduce (target=127, len=4)
actionsTable[18439] = 2303; // 'state 144' -> ) -> reduce (target=127, len=4)
actionsTable.fill(2303, 18448, 18450); // 'state 144' -> """.." -> reduce (target=127, len=4)
actionsTable[18453] = 346; // 'state 144' -> @ -> shift (target=173, len=0)
actionsTable[18487] = 2303; // 'state 144' -> Name -> reduce (target=127, len=4)
actionsTable[18563] = 256; // 'state 145' -> { -> shift (target=128, len=0)
actionsTable.fill(588, 18571, 18573); // 'state 145' -> false..true -> shift (target=294, len=0)
actionsTable[18573] = 590; // 'state 145' -> null -> shift (target=295, len=0)
actionsTable[18574] = 258; // 'state 145' -> [ -> shift (target=129, len=0)
actionsTable[18576] = 302; // 'state 145' -> """ -> shift (target=151, len=0)
actionsTable[18577] = 304; // 'state 145' -> " -> shift (target=152, len=0)
actionsTable[18578] = 396; // 'state 145' -> $ -> shift (target=198, len=0)
actionsTable.fill(592, 18613, 18615); // 'state 145' -> IntValue..FloatValue -> shift (target=296, len=0)
actionsTable[18615] = 486; // 'state 145' -> Name -> shift (target=243, len=0)
actionsTable[18692] = 2809; // 'state 146' -> } -> reduce (target=124, len=5)
actionsTable.fill(2809, 18704, 18706); // 'state 146' -> """.." -> reduce (target=124, len=5)
actionsTable[18709] = 346; // 'state 146' -> @ -> shift (target=173, len=0)
actionsTable[18743] = 2809; // 'state 146' -> Name -> reduce (target=124, len=5)
actionsTable[18820] = 2815; // 'state 147' -> } -> reduce (target=127, len=5)
actionsTable[18823] = 2815; // 'state 147' -> ) -> reduce (target=127, len=5)
actionsTable.fill(2815, 18832, 18834); // 'state 147' -> """.." -> reduce (target=127, len=5)
actionsTable[18837] = 346; // 'state 147' -> @ -> shift (target=173, len=0)
actionsTable[18871] = 2815; // 'state 147' -> Name -> reduce (target=127, len=5)
actionsTable[18948] = 2815; // 'state 148' -> } -> reduce (target=127, len=5)
actionsTable[18951] = 2815; // 'state 148' -> ) -> reduce (target=127, len=5)
actionsTable.fill(2815, 18960, 18962); // 'state 148' -> """.." -> reduce (target=127, len=5)
actionsTable[18965] = 346; // 'state 148' -> @ -> shift (target=173, len=0)
actionsTable[18999] = 2815; // 'state 148' -> Name -> reduce (target=127, len=5)
actionsTable[19076] = 3327; // 'state 149' -> } -> reduce (target=127, len=6)
actionsTable[19079] = 3327; // 'state 149' -> ) -> reduce (target=127, len=6)
actionsTable.fill(3327, 19088, 19090); // 'state 149' -> """.." -> reduce (target=127, len=6)
actionsTable[19093] = 346; // 'state 149' -> @ -> shift (target=173, len=0)
actionsTable[19127] = 3327; // 'state 149' -> Name -> reduce (target=127, len=6)
actionsTable[19203] = 649; // 'state 150' -> { -> reduce (target=68, len=1)
actionsTable.fill(649, 19205, 19207); // 'state 150' -> :..( -> reduce (target=68, len=1)
actionsTable[19221] = 649; // 'state 150' -> @ -> reduce (target=68, len=1)
actionsTable[19255] = 649; // 'state 150' -> Name -> reduce (target=68, len=1)
actionsTable[19344] = 388; // 'state 151' -> """ -> shift (target=194, len=0)
actionsTable[19384] = 390; // 'state 151' -> _StringValue_token1 -> shift (target=195, len=0)
actionsTable[19473] = 388; // 'state 152' -> " -> shift (target=194, len=0)
actionsTable[19513] = 392; // 'state 152' -> _StringValue_token2 -> shift (target=196, len=0)
actionsTable[19606] = 26; // 'state 153' -> schema -> shift (target=13, len=0)
actionsTable[19608] = 370; // 'state 153' -> scalar -> shift (target=185, len=0)
actionsTable[19609] = 372; // 'state 153' -> type -> shift (target=186, len=0)
actionsTable[19610] = 374; // 'state 153' -> interface -> shift (target=187, len=0)
actionsTable[19611] = 376; // 'state 153' -> union -> shift (target=188, len=0)
actionsTable[19612] = 378; // 'state 153' -> enum -> shift (target=189, len=0)
actionsTable[19613] = 380; // 'state 153' -> input -> shift (target=190, len=0)
actionsTable[19767] = 34; // 'state 154' -> Name -> shift (target=17, len=0)
actionsTable[19895] = 36; // 'state 155' -> Name -> shift (target=18, len=0)
actionsTable[20023] = 38; // 'state 156' -> Name -> shift (target=19, len=0)
actionsTable[20151] = 40; // 'state 157' -> Name -> shift (target=20, len=0)
actionsTable[20279] = 42; // 'state 158' -> Name -> shift (target=21, len=0)
actionsTable[20407] = 44; // 'state 159' -> Name -> shift (target=22, len=0)
actionsTable[20501] = 368; // 'state 160' -> @ -> shift (target=184, len=0)
actionsTable[20666] = 65534; // 'state 161' -> @par-gen.EOF -> done (target=0, len=0)
actionsTable.fill(641, 20736, 20740); // 'state 162' -> query..{ -> reduce (target=64, len=1)
actionsTable[20745] = 641; // 'state 162' -> fragment -> reduce (target=64, len=1)
actionsTable.fill(641, 20752, 20754); // 'state 162' -> """.." -> reduce (target=64, len=1)
actionsTable.fill(641, 20758, 20766); // 'state 162' -> schema..input -> reduce (target=64, len=1)
actionsTable[20769] = 641; // 'state 162' -> directive -> reduce (target=64, len=1)
actionsTable[20794] = 641; // 'state 162' -> @par-gen.EOF -> reduce (target=64, len=1)
actionsTable.fill(643, 20864, 20868); // 'state 163' -> query..{ -> reduce (target=65, len=1)
actionsTable[20873] = 643; // 'state 163' -> fragment -> reduce (target=65, len=1)
actionsTable.fill(643, 20880, 20882); // 'state 163' -> """.." -> reduce (target=65, len=1)
actionsTable.fill(643, 20886, 20894); // 'state 163' -> schema..input -> reduce (target=65, len=1)
actionsTable[20897] = 643; // 'state 163' -> directive -> reduce (target=65, len=1)
actionsTable[20922] = 643; // 'state 163' -> @par-gen.EOF -> reduce (target=65, len=1)
actionsTable.fill(645, 20992, 20996); // 'state 164' -> query..{ -> reduce (target=66, len=1)
actionsTable[21001] = 645; // 'state 164' -> fragment -> reduce (target=66, len=1)
actionsTable.fill(645, 21008, 21010); // 'state 164' -> """.." -> reduce (target=66, len=1)
actionsTable.fill(645, 21014, 21022); // 'state 164' -> schema..input -> reduce (target=66, len=1)
actionsTable[21025] = 645; // 'state 164' -> directive -> reduce (target=66, len=1)
actionsTable[21050] = 645; // 'state 164' -> @par-gen.EOF -> reduce (target=66, len=1)
actionsTable.fill(647, 21120, 21124); // 'state 165' -> query..{ -> reduce (target=67, len=1)
actionsTable[21129] = 647; // 'state 165' -> fragment -> reduce (target=67, len=1)
actionsTable.fill(647, 21136, 21138); // 'state 165' -> """.." -> reduce (target=67, len=1)
actionsTable.fill(647, 21142, 21150); // 'state 165' -> schema..input -> reduce (target=67, len=1)
actionsTable[21153] = 647; // 'state 165' -> directive -> reduce (target=67, len=1)
actionsTable[21178] = 647; // 'state 165' -> @par-gen.EOF -> reduce (target=67, len=1)
actionsTable.fill(745, 21272, 21278); // 'state 166' -> scalar..input -> reduce (target=116, len=1)
actionsTable[21281] = 745; // 'state 166' -> directive -> reduce (target=116, len=1)
actionsTable[21303] = 745; // 'state 166' -> Name -> reduce (target=116, len=1)
actionsTable.fill(719, 21376, 21380); // 'state 167' -> query..{ -> reduce (target=103, len=1)
actionsTable[21385] = 719; // 'state 167' -> fragment -> reduce (target=103, len=1)
actionsTable.fill(719, 21392, 21394); // 'state 167' -> """.." -> reduce (target=103, len=1)
actionsTable.fill(719, 21398, 21406); // 'state 167' -> schema..input -> reduce (target=103, len=1)
actionsTable[21409] = 719; // 'state 167' -> directive -> reduce (target=103, len=1)
actionsTable[21434] = 719; // 'state 167' -> @par-gen.EOF -> reduce (target=103, len=1)
actionsTable.fill(721, 21504, 21508); // 'state 168' -> query..{ -> reduce (target=104, len=1)
actionsTable[21513] = 721; // 'state 168' -> fragment -> reduce (target=104, len=1)
actionsTable.fill(721, 21520, 21522); // 'state 168' -> """.." -> reduce (target=104, len=1)
actionsTable.fill(721, 21526, 21534); // 'state 168' -> schema..input -> reduce (target=104, len=1)
actionsTable[21537] = 721; // 'state 168' -> directive -> reduce (target=104, len=1)
actionsTable[21562] = 721; // 'state 168' -> @par-gen.EOF -> reduce (target=104, len=1)
actionsTable.fill(729, 21632, 21636); // 'state 169' -> query..{ -> reduce (target=108, len=1)
actionsTable[21641] = 729; // 'state 169' -> fragment -> reduce (target=108, len=1)
actionsTable.fill(729, 21648, 21650); // 'state 169' -> """.." -> reduce (target=108, len=1)
actionsTable.fill(729, 21654, 21662); // 'state 169' -> schema..input -> reduce (target=108, len=1)
actionsTable[21665] = 729; // 'state 169' -> directive -> reduce (target=108, len=1)
actionsTable[21690] = 729; // 'state 169' -> @par-gen.EOF -> reduce (target=108, len=1)
actionsTable[21784] = 354; // 'state 170' -> scalar -> shift (target=177, len=0)
actionsTable[21785] = 356; // 'state 170' -> type -> shift (target=178, len=0)
actionsTable[21786] = 358; // 'state 170' -> interface -> shift (target=179, len=0)
actionsTable[21787] = 360; // 'state 170' -> union -> shift (target=180, len=0)
actionsTable[21788] = 362; // 'state 170' -> enum -> shift (target=181, len=0)
actionsTable[21789] = 364; // 'state 170' -> input -> shift (target=182, len=0)
actionsTable[21793] = 366; // 'state 170' -> directive -> shift (target=183, len=0)
actionsTable.fill(747, 21888, 21892); // 'state 171' -> query..{ -> reduce (target=117, len=1)
actionsTable[21897] = 747; // 'state 171' -> fragment -> reduce (target=117, len=1)
actionsTable.fill(747, 21904, 21906); // 'state 171' -> """.." -> reduce (target=117, len=1)
actionsTable.fill(747, 21910, 21918); // 'state 171' -> schema..input -> reduce (target=117, len=1)
actionsTable[21921] = 747; // 'state 171' -> directive -> reduce (target=117, len=1)
actionsTable[21946] = 747; // 'state 171' -> @par-gen.EOF -> reduce (target=117, len=1)
actionsTable.fill(1153, 22016, 22020); // 'state 172' -> query..{ -> reduce (target=64, len=2)
actionsTable[22025] = 1153; // 'state 172' -> fragment -> reduce (target=64, len=2)
actionsTable.fill(1153, 22032, 22034); // 'state 172' -> """.." -> reduce (target=64, len=2)
actionsTable.fill(1153, 22038, 22046); // 'state 172' -> schema..input -> reduce (target=64, len=2)
actionsTable[22049] = 1153; // 'state 172' -> directive -> reduce (target=64, len=2)
actionsTable[22074] = 1153; // 'state 172' -> @par-gen.EOF -> reduce (target=64, len=2)
actionsTable[22199] = 52; // 'state 173' -> Name -> shift (target=26, len=0)
actionsTable.fill(1159, 22272, 22276); // 'state 174' -> query..{ -> reduce (target=67, len=2)
actionsTable[22281] = 1159; // 'state 174' -> fragment -> reduce (target=67, len=2)
actionsTable.fill(1159, 22288, 22290); // 'state 174' -> """.." -> reduce (target=67, len=2)
actionsTable.fill(1159, 22294, 22302); // 'state 174' -> schema..input -> reduce (target=67, len=2)
actionsTable[22305] = 1159; // 'state 174' -> directive -> reduce (target=67, len=2)
actionsTable[22330] = 1159; // 'state 174' -> @par-gen.EOF -> reduce (target=67, len=2)
actionsTable.fill(715, 22400, 22405); // 'state 175' -> query..} -> reduce (target=101, len=1)
actionsTable.fill(715, 22407, 22410); // 'state 175' -> )..fragment -> reduce (target=101, len=1)
actionsTable.fill(715, 22416, 22418); // 'state 175' -> """.." -> reduce (target=101, len=1)
actionsTable[22419] = 715; // 'state 175' -> = -> reduce (target=101, len=1)
actionsTable.fill(715, 22421, 22430); // 'state 175' -> @..input -> reduce (target=101, len=1)
actionsTable[22433] = 715; // 'state 175' -> directive -> reduce (target=101, len=1)
actionsTable[22455] = 715; // 'state 175' -> Name -> reduce (target=101, len=1)
actionsTable[22458] = 715; // 'state 175' -> @par-gen.EOF -> reduce (target=101, len=1)
actionsTable[22532] = 673; // 'state 176' -> } -> reduce (target=80, len=1)
actionsTable[22536] = 673; // 'state 176' -> ... -> reduce (target=80, len=1)
actionsTable[22538] = 673; // 'state 176' -> on -> reduce (target=80, len=1)
actionsTable[22549] = 673; // 'state 176' -> @ -> reduce (target=80, len=1)
actionsTable[22583] = 673; // 'state 176' -> Name -> reduce (target=80, len=1)
actionsTable[22711] = 62; // 'state 177' -> Name -> shift (target=31, len=0)
actionsTable[22839] = 64; // 'state 178' -> Name -> shift (target=32, len=0)
actionsTable[22967] = 66; // 'state 179' -> Name -> shift (target=33, len=0)
actionsTable[23095] = 68; // 'state 180' -> Name -> shift (target=34, len=0)
actionsTable[23223] = 70; // 'state 181' -> Name -> shift (target=35, len=0)
actionsTable[23351] = 72; // 'state 182' -> Name -> shift (target=36, len=0)
actionsTable[23445] = 408; // 'state 183' -> @ -> shift (target=204, len=0)
actionsTable[23607] = 74; // 'state 184' -> Name -> shift (target=37, len=0)
actionsTable[23735] = 80; // 'state 185' -> Name -> shift (target=40, len=0)
actionsTable[23863] = 82; // 'state 186' -> Name -> shift (target=41, len=0)
actionsTable[23991] = 84; // 'state 187' -> Name -> shift (target=42, len=0)
actionsTable[24119] = 86; // 'state 188' -> Name -> shift (target=43, len=0)
actionsTable[24247] = 88; // 'state 189' -> Name -> shift (target=44, len=0)
actionsTable[24375] = 90; // 'state 190' -> Name -> shift (target=45, len=0)
actionsTable[24452] = 651; // 'state 191' -> } -> reduce (target=69, len=1)
actionsTable[24456] = 651; // 'state 191' -> ... -> reduce (target=69, len=1)
actionsTable[24503] = 651; // 'state 191' -> Name -> reduce (target=69, len=1)
actionsTable[24580] = 655; // 'state 192' -> } -> reduce (target=71, len=1)
actionsTable[24584] = 655; // 'state 192' -> ... -> reduce (target=71, len=1)
actionsTable[24631] = 655; // 'state 192' -> Name -> reduce (target=71, len=1)
actionsTable[24759] = 92; // 'state 193' -> Name -> shift (target=46, len=0)
actionsTable.fill(1207, 24835, 24837); // 'state 194' -> {..} -> reduce (target=91, len=2)
actionsTable[24839] = 1207; // 'state 194' -> ) -> reduce (target=91, len=2)
actionsTable.fill(1207, 24843, 24851); // 'state 194' -> false..$ -> reduce (target=91, len=2)
actionsTable[24853] = 1207; // 'state 194' -> @ -> reduce (target=91, len=2)
actionsTable.fill(1207, 24856, 24862); // 'state 194' -> scalar..input -> reduce (target=91, len=2)
actionsTable[24865] = 1207; // 'state 194' -> directive -> reduce (target=91, len=2)
actionsTable.fill(1207, 24885, 24888); // 'state 194' -> IntValue..Name -> reduce (target=91, len=2)
actionsTable[24976] = 430; // 'state 195' -> """ -> shift (target=215, len=0)
actionsTable[25105] = 430; // 'state 196' -> " -> shift (target=215, len=0)
actionsTable.fill(1671, 25216, 25220); // 'state 197' -> query..{ -> reduce (target=67, len=3)
actionsTable[25225] = 1671; // 'state 197' -> fragment -> reduce (target=67, len=3)
actionsTable.fill(1671, 25232, 25234); // 'state 197' -> """.." -> reduce (target=67, len=3)
actionsTable.fill(1671, 25238, 25246); // 'state 197' -> schema..input -> reduce (target=67, len=3)
actionsTable[25249] = 1671; // 'state 197' -> directive -> reduce (target=67, len=3)
actionsTable[25274] = 1671; // 'state 197' -> @par-gen.EOF -> reduce (target=67, len=3)
actionsTable[25399] = 438; // 'state 198' -> Name -> shift (target=219, len=0)
actionsTable[25479] = 697; // 'state 199' -> ) -> reduce (target=92, len=1)
actionsTable[25490] = 697; // 'state 199' -> $ -> reduce (target=92, len=1)
actionsTable[25605] = 132; // 'state 200' -> : -> shift (target=66, len=0)
actionsTable.fill(1227, 25728, 25733); // 'state 201' -> query..} -> reduce (target=101, len=2)
actionsTable.fill(1227, 25735, 25738); // 'state 201' -> )..fragment -> reduce (target=101, len=2)
actionsTable.fill(1227, 25744, 25746); // 'state 201' -> """.." -> reduce (target=101, len=2)
actionsTable[25747] = 1227; // 'state 201' -> = -> reduce (target=101, len=2)
actionsTable.fill(1227, 25749, 25758); // 'state 201' -> @..input -> reduce (target=101, len=2)
actionsTable[25761] = 1227; // 'state 201' -> directive -> reduce (target=101, len=2)
actionsTable[25783] = 1227; // 'state 201' -> Name -> reduce (target=101, len=2)
actionsTable[25786] = 1227; // 'state 201' -> @par-gen.EOF -> reduce (target=101, len=2)
actionsTable[25861] = 138; // 'state 202' -> : -> shift (target=69, len=0)
actionsTable.fill(723, 25984, 25987); // 'state 203' -> query..subscription -> reduce (target=105, len=1)
actionsTable[25988] = 723; // 'state 203' -> } -> reduce (target=105, len=1)
actionsTable[26167] = 140; // 'state 204' -> Name -> shift (target=70, len=0)
actionsTable.fill(1677, 26240, 26245); // 'state 205' -> query..} -> reduce (target=70, len=3)
actionsTable.fill(1677, 26248, 26250); // 'state 205' -> .....fragment -> reduce (target=70, len=3)
actionsTable.fill(1677, 26256, 26258); // 'state 205' -> """.." -> reduce (target=70, len=3)
actionsTable.fill(1677, 26262, 26270); // 'state 205' -> schema..input -> reduce (target=70, len=3)
actionsTable[26273] = 1677; // 'state 205' -> directive -> reduce (target=70, len=3)
actionsTable[26295] = 1677; // 'state 205' -> Name -> reduce (target=70, len=3)
actionsTable[26298] = 1677; // 'state 205' -> @par-gen.EOF -> reduce (target=70, len=3)
actionsTable[26372] = 1163; // 'state 206' -> } -> reduce (target=69, len=2)
actionsTable[26376] = 1163; // 'state 206' -> ... -> reduce (target=69, len=2)
actionsTable[26423] = 1163; // 'state 206' -> Name -> reduce (target=69, len=2)
actionsTable[26551] = 1171; // 'state 207' -> Name -> reduce (target=73, len=2)
actionsTable[26628] = 1169; // 'state 208' -> } -> reduce (target=72, len=2)
actionsTable[26632] = 1169; // 'state 208' -> ... -> reduce (target=72, len=2)
actionsTable[26679] = 1169; // 'state 208' -> Name -> reduce (target=72, len=2)
actionsTable[26756] = 1181; // 'state 209' -> } -> reduce (target=78, len=2)
actionsTable[26760] = 1181; // 'state 209' -> ... -> reduce (target=78, len=2)
actionsTable[26807] = 1181; // 'state 209' -> Name -> reduce (target=78, len=2)
actionsTable.fill(1775, 26880, 26884); // 'state 210' -> query..{ -> reduce (target=119, len=3)
actionsTable[26889] = 1775; // 'state 210' -> fragment -> reduce (target=119, len=3)
actionsTable.fill(1775, 26896, 26898); // 'state 210' -> """.." -> reduce (target=119, len=3)
actionsTable.fill(1775, 26902, 26910); // 'state 210' -> schema..input -> reduce (target=119, len=3)
actionsTable[26913] = 1775; // 'state 210' -> directive -> reduce (target=119, len=3)
actionsTable[26938] = 1775; // 'state 210' -> @par-gen.EOF -> reduce (target=119, len=3)
actionsTable.fill(1793, 27008, 27012); // 'state 211' -> query..{ -> reduce (target=128, len=3)
actionsTable[27017] = 1793; // 'state 211' -> fragment -> reduce (target=128, len=3)
actionsTable.fill(1793, 27024, 27026); // 'state 211' -> """.." -> reduce (target=128, len=3)
actionsTable.fill(1793, 27030, 27038); // 'state 211' -> schema..input -> reduce (target=128, len=3)
actionsTable[27041] = 1793; // 'state 211' -> directive -> reduce (target=128, len=3)
actionsTable[27066] = 1793; // 'state 211' -> @par-gen.EOF -> reduce (target=128, len=3)
actionsTable.fill(1795, 27136, 27140); // 'state 212' -> query..{ -> reduce (target=129, len=3)
actionsTable[27145] = 1795; // 'state 212' -> fragment -> reduce (target=129, len=3)
actionsTable.fill(1795, 27152, 27154); // 'state 212' -> """.." -> reduce (target=129, len=3)
actionsTable.fill(1795, 27158, 27166); // 'state 212' -> schema..input -> reduce (target=129, len=3)
actionsTable[27169] = 1795; // 'state 212' -> directive -> reduce (target=129, len=3)
actionsTable[27194] = 1795; // 'state 212' -> @par-gen.EOF -> reduce (target=129, len=3)
actionsTable.fill(1801, 27264, 27268); // 'state 213' -> query..{ -> reduce (target=132, len=3)
actionsTable[27273] = 1801; // 'state 213' -> fragment -> reduce (target=132, len=3)
actionsTable.fill(1801, 27280, 27282); // 'state 213' -> """.." -> reduce (target=132, len=3)
actionsTable.fill(1801, 27286, 27294); // 'state 213' -> schema..input -> reduce (target=132, len=3)
actionsTable[27297] = 1801; // 'state 213' -> directive -> reduce (target=132, len=3)
actionsTable[27322] = 1801; // 'state 213' -> @par-gen.EOF -> reduce (target=132, len=3)
actionsTable.fill(1809, 27392, 27396); // 'state 214' -> query..{ -> reduce (target=136, len=3)
actionsTable[27401] = 1809; // 'state 214' -> fragment -> reduce (target=136, len=3)
actionsTable.fill(1809, 27408, 27410); // 'state 214' -> """.." -> reduce (target=136, len=3)
actionsTable.fill(1809, 27414, 27422); // 'state 214' -> schema..input -> reduce (target=136, len=3)
actionsTable[27425] = 1809; // 'state 214' -> directive -> reduce (target=136, len=3)
actionsTable[27450] = 1809; // 'state 214' -> @par-gen.EOF -> reduce (target=136, len=3)
actionsTable.fill(1719, 27523, 27525); // 'state 215' -> {..} -> reduce (target=91, len=3)
actionsTable[27527] = 1719; // 'state 215' -> ) -> reduce (target=91, len=3)
actionsTable.fill(1719, 27531, 27539); // 'state 215' -> false..$ -> reduce (target=91, len=3)
actionsTable[27541] = 1719; // 'state 215' -> @ -> reduce (target=91, len=3)
actionsTable.fill(1719, 27544, 27550); // 'state 215' -> scalar..input -> reduce (target=91, len=3)
actionsTable[27553] = 1719; // 'state 215' -> directive -> reduce (target=91, len=3)
actionsTable.fill(1719, 27573, 27576); // 'state 215' -> IntValue..Name -> reduce (target=91, len=3)
actionsTable.fill(2183, 27648, 27652); // 'state 216' -> query..{ -> reduce (target=67, len=4)
actionsTable[27657] = 2183; // 'state 216' -> fragment -> reduce (target=67, len=4)
actionsTable.fill(2183, 27664, 27666); // 'state 216' -> """.." -> reduce (target=67, len=4)
actionsTable.fill(2183, 27670, 27678); // 'state 216' -> schema..input -> reduce (target=67, len=4)
actionsTable[27681] = 2183; // 'state 216' -> directive -> reduce (target=67, len=4)
actionsTable[27706] = 2183; // 'state 216' -> @par-gen.EOF -> reduce (target=67, len=4)
actionsTable[27779] = 1723; // 'state 217' -> { -> reduce (target=93, len=3)
actionsTable[27797] = 1723; // 'state 217' -> @ -> reduce (target=93, len=3)
actionsTable[27911] = 1209; // 'state 218' -> ) -> reduce (target=92, len=2)
actionsTable[27922] = 1209; // 'state 218' -> $ -> reduce (target=92, len=2)
actionsTable.fill(1215, 28035, 28038); // 'state 219' -> {..: -> reduce (target=95, len=2)
actionsTable[28039] = 1215; // 'state 219' -> ) -> reduce (target=95, len=2)
actionsTable.fill(1215, 28043, 28051); // 'state 219' -> false..$ -> reduce (target=95, len=2)
actionsTable[28053] = 1215; // 'state 219' -> @ -> reduce (target=95, len=2)
actionsTable.fill(1215, 28085, 28088); // 'state 219' -> IntValue..Name -> reduce (target=95, len=2)
actionsTable.fill(1741, 28160, 28165); // 'state 220' -> query..} -> reduce (target=102, len=3)
actionsTable.fill(1741, 28167, 28170); // 'state 220' -> )..fragment -> reduce (target=102, len=3)
actionsTable.fill(1741, 28176, 28178); // 'state 220' -> """.." -> reduce (target=102, len=3)
actionsTable[28179] = 1741; // 'state 220' -> = -> reduce (target=102, len=3)
actionsTable.fill(1741, 28181, 28190); // 'state 220' -> @..input -> reduce (target=102, len=3)
actionsTable[28193] = 1741; // 'state 220' -> directive -> reduce (target=102, len=3)
actionsTable[28215] = 1741; // 'state 220' -> Name -> reduce (target=102, len=3)
actionsTable[28218] = 1741; // 'state 220' -> @par-gen.EOF -> reduce (target=102, len=3)
actionsTable.fill(2207, 28288, 28292); // 'state 221' -> query..{ -> reduce (target=79, len=4)
actionsTable[28297] = 2207; // 'state 221' -> fragment -> reduce (target=79, len=4)
actionsTable.fill(2207, 28304, 28306); // 'state 221' -> """.." -> reduce (target=79, len=4)
actionsTable.fill(2207, 28310, 28318); // 'state 221' -> schema..input -> reduce (target=79, len=4)
actionsTable[28321] = 2207; // 'state 221' -> directive -> reduce (target=79, len=4)
actionsTable[28346] = 2207; // 'state 221' -> @par-gen.EOF -> reduce (target=79, len=4)
actionsTable.fill(709, 28416, 28421); // 'state 222' -> query..} -> reduce (target=98, len=1)
actionsTable[28423] = 709; // 'state 222' -> ) -> reduce (target=98, len=1)
actionsTable[28425] = 709; // 'state 222' -> fragment -> reduce (target=98, len=1)
actionsTable.fill(709, 28431, 28446); // 'state 222' -> ]..input -> reduce (target=98, len=1)
actionsTable.fill(709, 28447, 28450); // 'state 222' -> &..directive -> reduce (target=98, len=1)
actionsTable[28471] = 709; // 'state 222' -> Name -> reduce (target=98, len=1)
actionsTable[28474] = 709; // 'state 222' -> @par-gen.EOF -> reduce (target=98, len=1)
actionsTable[28547] = 1187; // 'state 223' -> { -> reduce (target=81, len=2)
actionsTable[28565] = 1187; // 'state 223' -> @ -> reduce (target=81, len=2)
actionsTable.fill(2261, 28672, 28676); // 'state 224' -> query..{ -> reduce (target=106, len=4)
actionsTable[28681] = 2261; // 'state 224' -> fragment -> reduce (target=106, len=4)
actionsTable.fill(2261, 28688, 28690); // 'state 224' -> """.." -> reduce (target=106, len=4)
actionsTable.fill(2261, 28694, 28702); // 'state 224' -> schema..input -> reduce (target=106, len=4)
actionsTable[28705] = 2261; // 'state 224' -> directive -> reduce (target=106, len=4)
actionsTable[28730] = 2261; // 'state 224' -> @par-gen.EOF -> reduce (target=106, len=4)
actionsTable.fill(1235, 28800, 28803); // 'state 225' -> query..subscription -> reduce (target=105, len=2)
actionsTable[28804] = 1235; // 'state 225' -> } -> reduce (target=105, len=2)
actionsTable.fill(2287, 28928, 28932); // 'state 226' -> query..{ -> reduce (target=119, len=4)
actionsTable[28937] = 2287; // 'state 226' -> fragment -> reduce (target=119, len=4)
actionsTable.fill(2287, 28944, 28946); // 'state 226' -> """.." -> reduce (target=119, len=4)
actionsTable.fill(2287, 28950, 28958); // 'state 226' -> schema..input -> reduce (target=119, len=4)
actionsTable[28961] = 2287; // 'state 226' -> directive -> reduce (target=119, len=4)
actionsTable[28986] = 2287; // 'state 226' -> @par-gen.EOF -> reduce (target=119, len=4)
actionsTable.fill(2305, 29056, 29060); // 'state 227' -> query..{ -> reduce (target=128, len=4)
actionsTable[29065] = 2305; // 'state 227' -> fragment -> reduce (target=128, len=4)
actionsTable.fill(2305, 29072, 29074); // 'state 227' -> """.." -> reduce (target=128, len=4)
actionsTable.fill(2305, 29078, 29086); // 'state 227' -> schema..input -> reduce (target=128, len=4)
actionsTable[29089] = 2305; // 'state 227' -> directive -> reduce (target=128, len=4)
actionsTable[29114] = 2305; // 'state 227' -> @par-gen.EOF -> reduce (target=128, len=4)
actionsTable.fill(2307, 29184, 29188); // 'state 228' -> query..{ -> reduce (target=129, len=4)
actionsTable[29193] = 2307; // 'state 228' -> fragment -> reduce (target=129, len=4)
actionsTable.fill(2307, 29200, 29202); // 'state 228' -> """.." -> reduce (target=129, len=4)
actionsTable.fill(2307, 29206, 29214); // 'state 228' -> schema..input -> reduce (target=129, len=4)
actionsTable[29217] = 2307; // 'state 228' -> directive -> reduce (target=129, len=4)
actionsTable[29242] = 2307; // 'state 228' -> @par-gen.EOF -> reduce (target=129, len=4)
actionsTable.fill(2313, 29312, 29316); // 'state 229' -> query..{ -> reduce (target=132, len=4)
actionsTable[29321] = 2313; // 'state 229' -> fragment -> reduce (target=132, len=4)
actionsTable.fill(2313, 29328, 29330); // 'state 229' -> """.." -> reduce (target=132, len=4)
actionsTable.fill(2313, 29334, 29342); // 'state 229' -> schema..input -> reduce (target=132, len=4)
actionsTable[29345] = 2313; // 'state 229' -> directive -> reduce (target=132, len=4)
actionsTable[29370] = 2313; // 'state 229' -> @par-gen.EOF -> reduce (target=132, len=4)
actionsTable.fill(2321, 29440, 29444); // 'state 230' -> query..{ -> reduce (target=136, len=4)
actionsTable[29449] = 2321; // 'state 230' -> fragment -> reduce (target=136, len=4)
actionsTable.fill(2321, 29456, 29458); // 'state 230' -> """.." -> reduce (target=136, len=4)
actionsTable.fill(2321, 29462, 29470); // 'state 230' -> schema..input -> reduce (target=136, len=4)
actionsTable[29473] = 2321; // 'state 230' -> directive -> reduce (target=136, len=4)
actionsTable[29498] = 2321; // 'state 230' -> @par-gen.EOF -> reduce (target=136, len=4)
actionsTable[29578] = 210; // 'state 231' -> on -> shift (target=105, len=0)
actionsTable.fill(2269, 29696, 29700); // 'state 232' -> query..{ -> reduce (target=110, len=4)
actionsTable[29705] = 2269; // 'state 232' -> fragment -> reduce (target=110, len=4)
actionsTable.fill(2269, 29712, 29714); // 'state 232' -> """.." -> reduce (target=110, len=4)
actionsTable.fill(2269, 29718, 29726); // 'state 232' -> schema..input -> reduce (target=110, len=4)
actionsTable[29729] = 2269; // 'state 232' -> directive -> reduce (target=110, len=4)
actionsTable[29754] = 2269; // 'state 232' -> @par-gen.EOF -> reduce (target=110, len=4)
actionsTable.fill(2271, 29824, 29828); // 'state 233' -> query..{ -> reduce (target=111, len=4)
actionsTable[29833] = 2271; // 'state 233' -> fragment -> reduce (target=111, len=4)
actionsTable.fill(2271, 29840, 29842); // 'state 233' -> """.." -> reduce (target=111, len=4)
actionsTable.fill(2271, 29846, 29854); // 'state 233' -> schema..input -> reduce (target=111, len=4)
actionsTable[29857] = 2271; // 'state 233' -> directive -> reduce (target=111, len=4)
actionsTable[29882] = 2271; // 'state 233' -> @par-gen.EOF -> reduce (target=111, len=4)
actionsTable.fill(2273, 29952, 29956); // 'state 234' -> query..{ -> reduce (target=112, len=4)
actionsTable[29961] = 2273; // 'state 234' -> fragment -> reduce (target=112, len=4)
actionsTable.fill(2273, 29968, 29970); // 'state 234' -> """.." -> reduce (target=112, len=4)
actionsTable.fill(2273, 29974, 29982); // 'state 234' -> schema..input -> reduce (target=112, len=4)
actionsTable[29985] = 2273; // 'state 234' -> directive -> reduce (target=112, len=4)
actionsTable[30010] = 2273; // 'state 234' -> @par-gen.EOF -> reduce (target=112, len=4)
actionsTable.fill(2275, 30080, 30084); // 'state 235' -> query..{ -> reduce (target=113, len=4)
actionsTable[30089] = 2275; // 'state 235' -> fragment -> reduce (target=113, len=4)
actionsTable.fill(2275, 30096, 30098); // 'state 235' -> """.." -> reduce (target=113, len=4)
actionsTable.fill(2275, 30102, 30110); // 'state 235' -> schema..input -> reduce (target=113, len=4)
actionsTable[30113] = 2275; // 'state 235' -> directive -> reduce (target=113, len=4)
actionsTable[30138] = 2275; // 'state 235' -> @par-gen.EOF -> reduce (target=113, len=4)
actionsTable.fill(2277, 30208, 30212); // 'state 236' -> query..{ -> reduce (target=114, len=4)
actionsTable[30217] = 2277; // 'state 236' -> fragment -> reduce (target=114, len=4)
actionsTable.fill(2277, 30224, 30226); // 'state 236' -> """.." -> reduce (target=114, len=4)
actionsTable.fill(2277, 30230, 30238); // 'state 236' -> schema..input -> reduce (target=114, len=4)
actionsTable[30241] = 2277; // 'state 236' -> directive -> reduce (target=114, len=4)
actionsTable[30266] = 2277; // 'state 236' -> @par-gen.EOF -> reduce (target=114, len=4)
actionsTable[30340] = 1681; // 'state 237' -> } -> reduce (target=72, len=3)
actionsTable[30344] = 1681; // 'state 237' -> ... -> reduce (target=72, len=3)
actionsTable[30391] = 1681; // 'state 237' -> Name -> reduce (target=72, len=3)
actionsTable[30469] = 228; // 'state 238' -> : -> shift (target=114, len=0)
actionsTable[30599] = 661; // 'state 239' -> ) -> reduce (target=74, len=1)
actionsTable[30647] = 661; // 'state 239' -> Name -> reduce (target=74, len=1)
actionsTable[30724] = 1693; // 'state 240' -> } -> reduce (target=78, len=3)
actionsTable[30728] = 1693; // 'state 240' -> ... -> reduce (target=78, len=3)
actionsTable[30775] = 1693; // 'state 240' -> Name -> reduce (target=78, len=3)
actionsTable[30903] = 234; // 'state 241' -> Name -> shift (target=117, len=0)
actionsTable[30980] = 757; // 'state 242' -> } -> reduce (target=122, len=1)
actionsTable.fill(757, 30992, 30994); // 'state 242' -> """.." -> reduce (target=122, len=1)
actionsTable[31031] = 757; // 'state 242' -> Name -> reduce (target=122, len=1)
actionsTable.fill(683, 31107, 31109); // 'state 243' -> {..} -> reduce (target=85, len=1)
actionsTable[31111] = 683; // 'state 243' -> ) -> reduce (target=85, len=1)
actionsTable.fill(683, 31115, 31123); // 'state 243' -> false..$ -> reduce (target=85, len=1)
actionsTable[31125] = 683; // 'state 243' -> @ -> reduce (target=85, len=1)
actionsTable.fill(683, 31157, 31160); // 'state 243' -> IntValue..Name -> reduce (target=85, len=1)
actionsTable[31236] = 779; // 'state 244' -> } -> reduce (target=133, len=1)
actionsTable.fill(779, 31248, 31250); // 'state 244' -> """.." -> reduce (target=133, len=1)
actionsTable[31287] = 779; // 'state 244' -> Name -> reduce (target=133, len=1)
actionsTable[31365] = 246; // 'state 245' -> : -> shift (target=123, len=0)
actionsTable[31543] = 566; // 'state 246' -> Name -> shift (target=283, len=0)
actionsTable[31620] = 763; // 'state 247' -> } -> reduce (target=125, len=1)
actionsTable[31623] = 763; // 'state 247' -> ) -> reduce (target=125, len=1)
actionsTable.fill(763, 31632, 31634); // 'state 247' -> """.." -> reduce (target=125, len=1)
actionsTable[31671] = 763; // 'state 247' -> Name -> reduce (target=125, len=1)
actionsTable.fill(2695, 31744, 31748); // 'state 248' -> query..{ -> reduce (target=67, len=5)
actionsTable[31753] = 2695; // 'state 248' -> fragment -> reduce (target=67, len=5)
actionsTable.fill(2695, 31760, 31762); // 'state 248' -> """.." -> reduce (target=67, len=5)
actionsTable.fill(2695, 31766, 31774); // 'state 248' -> schema..input -> reduce (target=67, len=5)
actionsTable[31777] = 2695; // 'state 248' -> directive -> reduce (target=67, len=5)
actionsTable[31802] = 2695; // 'state 248' -> @par-gen.EOF -> reduce (target=67, len=5)
actionsTable[31876] = 707; // 'state 249' -> } -> reduce (target=97, len=1)
actionsTable[31879] = 707; // 'state 249' -> ) -> reduce (target=97, len=1)
actionsTable.fill(707, 31887, 31892); // 'state 249' -> ]..= -> reduce (target=97, len=1)
actionsTable[31892] = 570; // 'state 249' -> ! -> shift (target=285, len=0)
actionsTable[31893] = 707; // 'state 249' -> @ -> reduce (target=97, len=1)
actionsTable[31927] = 707; // 'state 249' -> Name -> reduce (target=97, len=1)
actionsTable[32004] = 707; // 'state 250' -> } -> reduce (target=97, len=1)
actionsTable[32007] = 707; // 'state 250' -> ) -> reduce (target=97, len=1)
actionsTable.fill(707, 32015, 32020); // 'state 250' -> ]..= -> reduce (target=97, len=1)
actionsTable[32021] = 707; // 'state 250' -> @ -> reduce (target=97, len=1)
actionsTable[32055] = 707; // 'state 250' -> Name -> reduce (target=97, len=1)
actionsTable.fill(2719, 32128, 32132); // 'state 251' -> query..{ -> reduce (target=79, len=5)
actionsTable[32137] = 2719; // 'state 251' -> fragment -> reduce (target=79, len=5)
actionsTable.fill(2719, 32144, 32146); // 'state 251' -> """.." -> reduce (target=79, len=5)
actionsTable.fill(2719, 32150, 32158); // 'state 251' -> schema..input -> reduce (target=79, len=5)
actionsTable[32161] = 2719; // 'state 251' -> directive -> reduce (target=79, len=5)
actionsTable[32186] = 2719; // 'state 251' -> @par-gen.EOF -> reduce (target=79, len=5)
actionsTable.fill(2773, 32256, 32260); // 'state 252' -> query..{ -> reduce (target=106, len=5)
actionsTable[32265] = 2773; // 'state 252' -> fragment -> reduce (target=106, len=5)
actionsTable.fill(2773, 32272, 32274); // 'state 252' -> """.." -> reduce (target=106, len=5)
actionsTable.fill(2773, 32278, 32286); // 'state 252' -> schema..input -> reduce (target=106, len=5)
actionsTable[32289] = 2773; // 'state 252' -> directive -> reduce (target=106, len=5)
actionsTable[32314] = 2773; // 'state 252' -> @par-gen.EOF -> reduce (target=106, len=5)
actionsTable.fill(1767, 32384, 32387); // 'state 253' -> query..subscription -> reduce (target=115, len=3)
actionsTable[32388] = 1767; // 'state 253' -> } -> reduce (target=115, len=3)
actionsTable[32522] = 250; // 'state 254' -> on -> shift (target=125, len=0)
actionsTable.fill(2799, 32640, 32644); // 'state 255' -> query..{ -> reduce (target=119, len=5)
actionsTable[32649] = 2799; // 'state 255' -> fragment -> reduce (target=119, len=5)
actionsTable.fill(2799, 32656, 32658); // 'state 255' -> """.." -> reduce (target=119, len=5)
actionsTable.fill(2799, 32662, 32670); // 'state 255' -> schema..input -> reduce (target=119, len=5)
actionsTable[32673] = 2799; // 'state 255' -> directive -> reduce (target=119, len=5)
actionsTable[32698] = 2799; // 'state 255' -> @par-gen.EOF -> reduce (target=119, len=5)
actionsTable.fill(2817, 32768, 32772); // 'state 256' -> query..{ -> reduce (target=128, len=5)
actionsTable[32777] = 2817; // 'state 256' -> fragment -> reduce (target=128, len=5)
actionsTable.fill(2817, 32784, 32786); // 'state 256' -> """.." -> reduce (target=128, len=5)
actionsTable.fill(2817, 32790, 32798); // 'state 256' -> schema..input -> reduce (target=128, len=5)
actionsTable[32801] = 2817; // 'state 256' -> directive -> reduce (target=128, len=5)
actionsTable[32826] = 2817; // 'state 256' -> @par-gen.EOF -> reduce (target=128, len=5)
actionsTable.fill(2819, 32896, 32900); // 'state 257' -> query..{ -> reduce (target=129, len=5)
actionsTable[32905] = 2819; // 'state 257' -> fragment -> reduce (target=129, len=5)
actionsTable.fill(2819, 32912, 32914); // 'state 257' -> """.." -> reduce (target=129, len=5)
actionsTable.fill(2819, 32918, 32926); // 'state 257' -> schema..input -> reduce (target=129, len=5)
actionsTable[32929] = 2819; // 'state 257' -> directive -> reduce (target=129, len=5)
actionsTable[32954] = 2819; // 'state 257' -> @par-gen.EOF -> reduce (target=129, len=5)
actionsTable.fill(2825, 33024, 33028); // 'state 258' -> query..{ -> reduce (target=132, len=5)
actionsTable[33033] = 2825; // 'state 258' -> fragment -> reduce (target=132, len=5)
actionsTable.fill(2825, 33040, 33042); // 'state 258' -> """.." -> reduce (target=132, len=5)
actionsTable.fill(2825, 33046, 33054); // 'state 258' -> schema..input -> reduce (target=132, len=5)
actionsTable[33057] = 2825; // 'state 258' -> directive -> reduce (target=132, len=5)
actionsTable[33082] = 2825; // 'state 258' -> @par-gen.EOF -> reduce (target=132, len=5)
actionsTable.fill(2833, 33152, 33156); // 'state 259' -> query..{ -> reduce (target=136, len=5)
actionsTable[33161] = 2833; // 'state 259' -> fragment -> reduce (target=136, len=5)
actionsTable.fill(2833, 33168, 33170); // 'state 259' -> """.." -> reduce (target=136, len=5)
actionsTable.fill(2833, 33174, 33182); // 'state 259' -> schema..input -> reduce (target=136, len=5)
actionsTable[33185] = 2833; // 'state 259' -> directive -> reduce (target=136, len=5)
actionsTable[33210] = 2833; // 'state 259' -> @par-gen.EOF -> reduce (target=136, len=5)
actionsTable.fill(797, 33280, 33284); // 'state 260' -> query..{ -> reduce (target=142, len=1)
actionsTable[33289] = 797; // 'state 260' -> fragment -> reduce (target=142, len=1)
actionsTable.fill(797, 33296, 33298); // 'state 260' -> """.." -> reduce (target=142, len=1)
actionsTable.fill(797, 33302, 33310); // 'state 260' -> schema..input -> reduce (target=142, len=1)
actionsTable.fill(797, 33312, 33314); // 'state 260' -> |..directive -> reduce (target=142, len=1)
actionsTable[33338] = 797; // 'state 260' -> @par-gen.EOF -> reduce (target=142, len=1)
actionsTable.fill(799, 33408, 33412); // 'state 261' -> query..{ -> reduce (target=143, len=1)
actionsTable[33417] = 799; // 'state 261' -> fragment -> reduce (target=143, len=1)
actionsTable.fill(799, 33424, 33426); // 'state 261' -> """.." -> reduce (target=143, len=1)
actionsTable.fill(799, 33430, 33438); // 'state 261' -> schema..input -> reduce (target=143, len=1)
actionsTable.fill(799, 33440, 33442); // 'state 261' -> |..directive -> reduce (target=143, len=1)
actionsTable[33466] = 799; // 'state 261' -> @par-gen.EOF -> reduce (target=143, len=1)
actionsTable.fill(2837, 33536, 33540); // 'state 262' -> query..{ -> reduce (target=138, len=5)
actionsTable[33545] = 2837; // 'state 262' -> fragment -> reduce (target=138, len=5)
actionsTable.fill(2837, 33552, 33554); // 'state 262' -> """.." -> reduce (target=138, len=5)
actionsTable.fill(2837, 33558, 33566); // 'state 262' -> schema..input -> reduce (target=138, len=5)
actionsTable[33569] = 2837; // 'state 262' -> directive -> reduce (target=138, len=5)
actionsTable[33594] = 2837; // 'state 262' -> @par-gen.EOF -> reduce (target=138, len=5)
actionsTable.fill(795, 33664, 33668); // 'state 263' -> query..{ -> reduce (target=141, len=1)
actionsTable[33673] = 795; // 'state 263' -> fragment -> reduce (target=141, len=1)
actionsTable.fill(795, 33680, 33682); // 'state 263' -> """.." -> reduce (target=141, len=1)
actionsTable.fill(795, 33686, 33694); // 'state 263' -> schema..input -> reduce (target=141, len=1)
actionsTable.fill(795, 33696, 33698); // 'state 263' -> |..directive -> reduce (target=141, len=1)
actionsTable[33722] = 795; // 'state 263' -> @par-gen.EOF -> reduce (target=141, len=1)
actionsTable.fill(2775, 33792, 33796); // 'state 264' -> query..{ -> reduce (target=107, len=5)
actionsTable[33801] = 2775; // 'state 264' -> fragment -> reduce (target=107, len=5)
actionsTable.fill(2775, 33808, 33810); // 'state 264' -> """.." -> reduce (target=107, len=5)
actionsTable.fill(2775, 33814, 33822); // 'state 264' -> schema..input -> reduce (target=107, len=5)
actionsTable[33825] = 2775; // 'state 264' -> directive -> reduce (target=107, len=5)
actionsTable[33850] = 2775; // 'state 264' -> @par-gen.EOF -> reduce (target=107, len=5)
actionsTable.fill(2781, 33920, 33924); // 'state 265' -> query..{ -> reduce (target=110, len=5)
actionsTable[33929] = 2781; // 'state 265' -> fragment -> reduce (target=110, len=5)
actionsTable.fill(2781, 33936, 33938); // 'state 265' -> """.." -> reduce (target=110, len=5)
actionsTable.fill(2781, 33942, 33950); // 'state 265' -> schema..input -> reduce (target=110, len=5)
actionsTable[33953] = 2781; // 'state 265' -> directive -> reduce (target=110, len=5)
actionsTable[33978] = 2781; // 'state 265' -> @par-gen.EOF -> reduce (target=110, len=5)
actionsTable.fill(2783, 34048, 34052); // 'state 266' -> query..{ -> reduce (target=111, len=5)
actionsTable[34057] = 2783; // 'state 266' -> fragment -> reduce (target=111, len=5)
actionsTable.fill(2783, 34064, 34066); // 'state 266' -> """.." -> reduce (target=111, len=5)
actionsTable.fill(2783, 34070, 34078); // 'state 266' -> schema..input -> reduce (target=111, len=5)
actionsTable[34081] = 2783; // 'state 266' -> directive -> reduce (target=111, len=5)
actionsTable[34106] = 2783; // 'state 266' -> @par-gen.EOF -> reduce (target=111, len=5)
actionsTable.fill(2785, 34176, 34180); // 'state 267' -> query..{ -> reduce (target=112, len=5)
actionsTable[34185] = 2785; // 'state 267' -> fragment -> reduce (target=112, len=5)
actionsTable.fill(2785, 34192, 34194); // 'state 267' -> """.." -> reduce (target=112, len=5)
actionsTable.fill(2785, 34198, 34206); // 'state 267' -> schema..input -> reduce (target=112, len=5)
actionsTable[34209] = 2785; // 'state 267' -> directive -> reduce (target=112, len=5)
actionsTable[34234] = 2785; // 'state 267' -> @par-gen.EOF -> reduce (target=112, len=5)
actionsTable.fill(2787, 34304, 34308); // 'state 268' -> query..{ -> reduce (target=113, len=5)
actionsTable[34313] = 2787; // 'state 268' -> fragment -> reduce (target=113, len=5)
actionsTable.fill(2787, 34320, 34322); // 'state 268' -> """.." -> reduce (target=113, len=5)
actionsTable.fill(2787, 34326, 34334); // 'state 268' -> schema..input -> reduce (target=113, len=5)
actionsTable[34337] = 2787; // 'state 268' -> directive -> reduce (target=113, len=5)
actionsTable[34362] = 2787; // 'state 268' -> @par-gen.EOF -> reduce (target=113, len=5)
actionsTable.fill(2789, 34432, 34436); // 'state 269' -> query..{ -> reduce (target=114, len=5)
actionsTable[34441] = 2789; // 'state 269' -> fragment -> reduce (target=114, len=5)
actionsTable.fill(2789, 34448, 34450); // 'state 269' -> """.." -> reduce (target=114, len=5)
actionsTable.fill(2789, 34454, 34462); // 'state 269' -> schema..input -> reduce (target=114, len=5)
actionsTable[34465] = 2789; // 'state 269' -> directive -> reduce (target=114, len=5)
actionsTable[34490] = 2789; // 'state 269' -> @par-gen.EOF -> reduce (target=114, len=5)
actionsTable[34564] = 2193; // 'state 270' -> } -> reduce (target=72, len=4)
actionsTable[34568] = 2193; // 'state 270' -> ... -> reduce (target=72, len=4)
actionsTable[34615] = 2193; // 'state 270' -> Name -> reduce (target=72, len=4)
actionsTable.fill(1687, 34688, 34693); // 'state 271' -> query..} -> reduce (target=75, len=3)
actionsTable.fill(1687, 34695, 34698); // 'state 271' -> )..fragment -> reduce (target=75, len=3)
actionsTable.fill(1687, 34704, 34706); // 'state 271' -> """.." -> reduce (target=75, len=3)
actionsTable[34707] = 1687; // 'state 271' -> = -> reduce (target=75, len=3)
actionsTable.fill(1687, 34709, 34718); // 'state 271' -> @..input -> reduce (target=75, len=3)
actionsTable[34721] = 1687; // 'state 271' -> directive -> reduce (target=75, len=3)
actionsTable[34743] = 1687; // 'state 271' -> Name -> reduce (target=75, len=3)
actionsTable[34746] = 1687; // 'state 271' -> @par-gen.EOF -> reduce (target=75, len=3)
actionsTable[34823] = 1173; // 'state 272' -> ) -> reduce (target=74, len=2)
actionsTable[34871] = 1173; // 'state 272' -> Name -> reduce (target=74, len=2)
actionsTable[34948] = 2205; // 'state 273' -> } -> reduce (target=78, len=4)
actionsTable[34952] = 2205; // 'state 273' -> ... -> reduce (target=78, len=4)
actionsTable[34999] = 2205; // 'state 273' -> Name -> reduce (target=78, len=4)
actionsTable.fill(1779, 35072, 35076); // 'state 274' -> query..{ -> reduce (target=121, len=3)
actionsTable[35081] = 1779; // 'state 274' -> fragment -> reduce (target=121, len=3)
actionsTable.fill(1779, 35088, 35090); // 'state 274' -> """.." -> reduce (target=121, len=3)
actionsTable.fill(1779, 35093, 35102); // 'state 274' -> @..input -> reduce (target=121, len=3)
actionsTable[35103] = 260; // 'state 274' -> & -> shift (target=130, len=0)
actionsTable[35105] = 1779; // 'state 274' -> directive -> reduce (target=121, len=3)
actionsTable[35130] = 1779; // 'state 274' -> @par-gen.EOF -> reduce (target=121, len=3)
actionsTable.fill(1783, 35200, 35204); // 'state 275' -> query..{ -> reduce (target=123, len=3)
actionsTable[35209] = 1783; // 'state 275' -> fragment -> reduce (target=123, len=3)
actionsTable.fill(1783, 35216, 35218); // 'state 275' -> """.." -> reduce (target=123, len=3)
actionsTable.fill(1783, 35222, 35230); // 'state 275' -> schema..input -> reduce (target=123, len=3)
actionsTable[35233] = 1783; // 'state 275' -> directive -> reduce (target=123, len=3)
actionsTable[35258] = 1783; // 'state 275' -> @par-gen.EOF -> reduce (target=123, len=3)
actionsTable[35332] = 1269; // 'state 276' -> } -> reduce (target=122, len=2)
actionsTable.fill(1269, 35344, 35346); // 'state 276' -> """.." -> reduce (target=122, len=2)
actionsTable[35383] = 1269; // 'state 276' -> Name -> reduce (target=122, len=2)
actionsTable[35461] = 262; // 'state 277' -> : -> shift (target=131, len=0)
actionsTable.fill(1799, 35584, 35588); // 'state 278' -> query..{ -> reduce (target=131, len=3)
actionsTable[35593] = 1799; // 'state 278' -> fragment -> reduce (target=131, len=3)
actionsTable.fill(1799, 35600, 35602); // 'state 278' -> """.." -> reduce (target=131, len=3)
actionsTable.fill(1799, 35606, 35614); // 'state 278' -> schema..input -> reduce (target=131, len=3)
actionsTable[35616] = 266; // 'state 278' -> | -> shift (target=133, len=0)
actionsTable[35617] = 1799; // 'state 278' -> directive -> reduce (target=131, len=3)
actionsTable[35642] = 1799; // 'state 278' -> @par-gen.EOF -> reduce (target=131, len=3)
actionsTable.fill(1805, 35712, 35716); // 'state 279' -> query..{ -> reduce (target=134, len=3)
actionsTable[35721] = 1805; // 'state 279' -> fragment -> reduce (target=134, len=3)
actionsTable.fill(1805, 35728, 35730); // 'state 279' -> """.." -> reduce (target=134, len=3)
actionsTable.fill(1805, 35734, 35742); // 'state 279' -> schema..input -> reduce (target=134, len=3)
actionsTable[35745] = 1805; // 'state 279' -> directive -> reduce (target=134, len=3)
actionsTable[35770] = 1805; // 'state 279' -> @par-gen.EOF -> reduce (target=134, len=3)
actionsTable[35844] = 1291; // 'state 280' -> } -> reduce (target=133, len=2)
actionsTable.fill(1291, 35856, 35858); // 'state 280' -> """.." -> reduce (target=133, len=2)
actionsTable[35895] = 1291; // 'state 280' -> Name -> reduce (target=133, len=2)
actionsTable.fill(1811, 35968, 35972); // 'state 281' -> query..{ -> reduce (target=137, len=3)
actionsTable[35977] = 1811; // 'state 281' -> fragment -> reduce (target=137, len=3)
actionsTable.fill(1811, 35984, 35986); // 'state 281' -> """.." -> reduce (target=137, len=3)
actionsTable.fill(1811, 35990, 35998); // 'state 281' -> schema..input -> reduce (target=137, len=3)
actionsTable[36001] = 1811; // 'state 281' -> directive -> reduce (target=137, len=3)
actionsTable[36026] = 1811; // 'state 281' -> @par-gen.EOF -> reduce (target=137, len=3)
actionsTable[36100] = 1275; // 'state 282' -> } -> reduce (target=125, len=2)
actionsTable[36103] = 1275; // 'state 282' -> ) -> reduce (target=125, len=2)
actionsTable.fill(1275, 36112, 36114); // 'state 282' -> """.." -> reduce (target=125, len=2)
actionsTable[36151] = 1275; // 'state 282' -> Name -> reduce (target=125, len=2)
actionsTable[36229] = 270; // 'state 283' -> : -> shift (target=135, len=0)
actionsTable[36359] = 2237; // 'state 284' -> ) -> reduce (target=94, len=4)
actionsTable[36370] = 2237; // 'state 284' -> $ -> reduce (target=94, len=4)
actionsTable[36484] = 1225; // 'state 285' -> } -> reduce (target=100, len=2)
actionsTable[36487] = 1225; // 'state 285' -> ) -> reduce (target=100, len=2)
actionsTable.fill(1225, 36495, 36500); // 'state 285' -> ]..= -> reduce (target=100, len=2)
actionsTable[36501] = 1225; // 'state 285' -> @ -> reduce (target=100, len=2)
actionsTable[36535] = 1225; // 'state 285' -> Name -> reduce (target=100, len=2)
actionsTable[36623] = 608; // 'state 286' -> ] -> shift (target=304, len=0)
actionsTable.fill(3349, 36736, 36740); // 'state 287' -> query..{ -> reduce (target=138, len=6)
actionsTable[36745] = 3349; // 'state 287' -> fragment -> reduce (target=138, len=6)
actionsTable.fill(3349, 36752, 36754); // 'state 287' -> """.." -> reduce (target=138, len=6)
actionsTable.fill(3349, 36758, 36766); // 'state 287' -> schema..input -> reduce (target=138, len=6)
actionsTable[36769] = 3349; // 'state 287' -> directive -> reduce (target=138, len=6)
actionsTable[36794] = 3349; // 'state 287' -> @par-gen.EOF -> reduce (target=138, len=6)
actionsTable.fill(3311, 36864, 36868); // 'state 288' -> query..{ -> reduce (target=119, len=6)
actionsTable[36873] = 3311; // 'state 288' -> fragment -> reduce (target=119, len=6)
actionsTable.fill(3311, 36880, 36882); // 'state 288' -> """.." -> reduce (target=119, len=6)
actionsTable.fill(3311, 36886, 36894); // 'state 288' -> schema..input -> reduce (target=119, len=6)
actionsTable[36897] = 3311; // 'state 288' -> directive -> reduce (target=119, len=6)
actionsTable[36922] = 3311; // 'state 288' -> @par-gen.EOF -> reduce (target=119, len=6)
actionsTable[36997] = 1789; // 'state 289' -> : -> reduce (target=126, len=3)
actionsTable[37002] = 1789; // 'state 289' -> on -> reduce (target=126, len=3)
actionsTable.fill(1305, 37120, 37124); // 'state 290' -> query..{ -> reduce (target=140, len=2)
actionsTable[37129] = 1305; // 'state 290' -> fragment -> reduce (target=140, len=2)
actionsTable.fill(1305, 37136, 37138); // 'state 290' -> """.." -> reduce (target=140, len=2)
actionsTable.fill(1305, 37142, 37150); // 'state 290' -> schema..input -> reduce (target=140, len=2)
actionsTable[37152] = 274; // 'state 290' -> | -> shift (target=137, len=0)
actionsTable[37153] = 1305; // 'state 290' -> directive -> reduce (target=140, len=2)
actionsTable[37178] = 1305; // 'state 290' -> @par-gen.EOF -> reduce (target=140, len=2)
actionsTable.fill(3287, 37248, 37252); // 'state 291' -> query..{ -> reduce (target=107, len=6)
actionsTable[37257] = 3287; // 'state 291' -> fragment -> reduce (target=107, len=6)
actionsTable.fill(3287, 37264, 37266); // 'state 291' -> """.." -> reduce (target=107, len=6)
actionsTable.fill(3287, 37270, 37278); // 'state 291' -> schema..input -> reduce (target=107, len=6)
actionsTable[37281] = 3287; // 'state 291' -> directive -> reduce (target=107, len=6)
actionsTable[37306] = 3287; // 'state 291' -> @par-gen.EOF -> reduce (target=107, len=6)
actionsTable.fill(3293, 37376, 37380); // 'state 292' -> query..{ -> reduce (target=110, len=6)
actionsTable[37385] = 3293; // 'state 292' -> fragment -> reduce (target=110, len=6)
actionsTable.fill(3293, 37392, 37394); // 'state 292' -> """.." -> reduce (target=110, len=6)
actionsTable.fill(3293, 37398, 37406); // 'state 292' -> schema..input -> reduce (target=110, len=6)
actionsTable[37409] = 3293; // 'state 292' -> directive -> reduce (target=110, len=6)
actionsTable[37434] = 3293; // 'state 292' -> @par-gen.EOF -> reduce (target=110, len=6)
actionsTable[37508] = 2705; // 'state 293' -> } -> reduce (target=72, len=5)
actionsTable[37512] = 2705; // 'state 293' -> ... -> reduce (target=72, len=5)
actionsTable[37559] = 2705; // 'state 293' -> Name -> reduce (target=72, len=5)
actionsTable.fill(679, 37635, 37637); // 'state 294' -> {..} -> reduce (target=83, len=1)
actionsTable[37639] = 679; // 'state 294' -> ) -> reduce (target=83, len=1)
actionsTable.fill(679, 37643, 37651); // 'state 294' -> false..$ -> reduce (target=83, len=1)
actionsTable[37653] = 679; // 'state 294' -> @ -> reduce (target=83, len=1)
actionsTable.fill(679, 37685, 37688); // 'state 294' -> IntValue..Name -> reduce (target=83, len=1)
actionsTable.fill(681, 37763, 37765); // 'state 295' -> {..} -> reduce (target=84, len=1)
actionsTable[37767] = 681; // 'state 295' -> ) -> reduce (target=84, len=1)
actionsTable.fill(681, 37771, 37779); // 'state 295' -> false..$ -> reduce (target=84, len=1)
actionsTable[37781] = 681; // 'state 295' -> @ -> reduce (target=84, len=1)
actionsTable.fill(681, 37813, 37816); // 'state 295' -> IntValue..Name -> reduce (target=84, len=1)
actionsTable.fill(677, 37891, 37893); // 'state 296' -> {..} -> reduce (target=82, len=1)
actionsTable[37895] = 677; // 'state 296' -> ) -> reduce (target=82, len=1)
actionsTable.fill(677, 37899, 37907); // 'state 296' -> false..$ -> reduce (target=82, len=1)
actionsTable[37909] = 677; // 'state 296' -> @ -> reduce (target=82, len=1)
actionsTable.fill(677, 37941, 37944); // 'state 296' -> IntValue..Name -> reduce (target=82, len=1)
actionsTable[38023] = 1689; // 'state 297' -> ) -> reduce (target=76, len=3)
actionsTable[38071] = 1689; // 'state 297' -> Name -> reduce (target=76, len=3)
actionsTable.fill(2291, 38144, 38148); // 'state 298' -> query..{ -> reduce (target=121, len=4)
actionsTable[38153] = 2291; // 'state 298' -> fragment -> reduce (target=121, len=4)
actionsTable.fill(2291, 38160, 38162); // 'state 298' -> """.." -> reduce (target=121, len=4)
actionsTable.fill(2291, 38165, 38174); // 'state 298' -> @..input -> reduce (target=121, len=4)
actionsTable[38175] = 260; // 'state 298' -> & -> shift (target=130, len=0)
actionsTable[38177] = 2291; // 'state 298' -> directive -> reduce (target=121, len=4)
actionsTable[38202] = 2291; // 'state 298' -> @par-gen.EOF -> reduce (target=121, len=4)
actionsTable.fill(1265, 38272, 38276); // 'state 299' -> query..{ -> reduce (target=120, len=2)
actionsTable[38281] = 1265; // 'state 299' -> fragment -> reduce (target=120, len=2)
actionsTable.fill(1265, 38288, 38290); // 'state 299' -> """.." -> reduce (target=120, len=2)
actionsTable.fill(1265, 38293, 38302); // 'state 299' -> @..input -> reduce (target=120, len=2)
actionsTable[38303] = 1265; // 'state 299' -> & -> reduce (target=120, len=2)
actionsTable[38305] = 1265; // 'state 299' -> directive -> reduce (target=120, len=2)
actionsTable[38330] = 1265; // 'state 299' -> @par-gen.EOF -> reduce (target=120, len=2)
actionsTable[38405] = 280; // 'state 300' -> : -> shift (target=140, len=0)
actionsTable.fill(2311, 38528, 38532); // 'state 301' -> query..{ -> reduce (target=131, len=4)
actionsTable[38537] = 2311; // 'state 301' -> fragment -> reduce (target=131, len=4)
actionsTable.fill(2311, 38544, 38546); // 'state 301' -> """.." -> reduce (target=131, len=4)
actionsTable.fill(2311, 38550, 38558); // 'state 301' -> schema..input -> reduce (target=131, len=4)
actionsTable[38560] = 266; // 'state 301' -> | -> shift (target=133, len=0)
actionsTable[38561] = 2311; // 'state 301' -> directive -> reduce (target=131, len=4)
actionsTable[38586] = 2311; // 'state 301' -> @par-gen.EOF -> reduce (target=131, len=4)
actionsTable.fill(1285, 38656, 38660); // 'state 302' -> query..{ -> reduce (target=130, len=2)
actionsTable[38665] = 1285; // 'state 302' -> fragment -> reduce (target=130, len=2)
actionsTable.fill(1285, 38672, 38674); // 'state 302' -> """.." -> reduce (target=130, len=2)
actionsTable.fill(1285, 38678, 38686); // 'state 302' -> schema..input -> reduce (target=130, len=2)
actionsTable.fill(1285, 38688, 38690); // 'state 302' -> |..directive -> reduce (target=130, len=2)
actionsTable[38714] = 1285; // 'state 302' -> @par-gen.EOF -> reduce (target=130, len=2)
actionsTable[38788] = 1217; // 'state 303' -> } -> reduce (target=96, len=2)
actionsTable[38791] = 1217; // 'state 303' -> ) -> reduce (target=96, len=2)
actionsTable.fill(1217, 38800, 38803); // 'state 303' -> """..$ -> reduce (target=96, len=2)
actionsTable[38805] = 1217; // 'state 303' -> @ -> reduce (target=96, len=2)
actionsTable[38839] = 1217; // 'state 303' -> Name -> reduce (target=96, len=2)
actionsTable[38916] = 1735; // 'state 304' -> } -> reduce (target=99, len=3)
actionsTable[38919] = 1735; // 'state 304' -> ) -> reduce (target=99, len=3)
actionsTable.fill(1735, 38927, 38934); // 'state 304' -> ]..@ -> reduce (target=99, len=3)
actionsTable[38967] = 1735; // 'state 304' -> Name -> reduce (target=99, len=3)
actionsTable.fill(3861, 39040, 39044); // 'state 305' -> query..{ -> reduce (target=138, len=7)
actionsTable[39049] = 3861; // 'state 305' -> fragment -> reduce (target=138, len=7)
actionsTable.fill(3861, 39056, 39058); // 'state 305' -> """.." -> reduce (target=138, len=7)
actionsTable.fill(3861, 39062, 39070); // 'state 305' -> schema..input -> reduce (target=138, len=7)
actionsTable[39073] = 3861; // 'state 305' -> directive -> reduce (target=138, len=7)
actionsTable[39098] = 3861; // 'state 305' -> @par-gen.EOF -> reduce (target=138, len=7)
actionsTable.fill(1817, 39168, 39172); // 'state 306' -> query..{ -> reduce (target=140, len=3)
actionsTable[39177] = 1817; // 'state 306' -> fragment -> reduce (target=140, len=3)
actionsTable.fill(1817, 39184, 39186); // 'state 306' -> """.." -> reduce (target=140, len=3)
actionsTable.fill(1817, 39190, 39198); // 'state 306' -> schema..input -> reduce (target=140, len=3)
actionsTable[39200] = 274; // 'state 306' -> | -> shift (target=137, len=0)
actionsTable[39201] = 1817; // 'state 306' -> directive -> reduce (target=140, len=3)
actionsTable[39226] = 1817; // 'state 306' -> @par-gen.EOF -> reduce (target=140, len=3)
actionsTable.fill(1303, 39296, 39300); // 'state 307' -> query..{ -> reduce (target=139, len=2)
actionsTable[39305] = 1303; // 'state 307' -> fragment -> reduce (target=139, len=2)
actionsTable.fill(1303, 39312, 39314); // 'state 307' -> """.." -> reduce (target=139, len=2)
actionsTable.fill(1303, 39318, 39326); // 'state 307' -> schema..input -> reduce (target=139, len=2)
actionsTable.fill(1303, 39328, 39330); // 'state 307' -> |..directive -> reduce (target=139, len=2)
actionsTable[39354] = 1303; // 'state 307' -> @par-gen.EOF -> reduce (target=139, len=2)
actionsTable.fill(1199, 39427, 39429); // 'state 308' -> {..} -> reduce (target=87, len=2)
actionsTable[39431] = 1199; // 'state 308' -> ) -> reduce (target=87, len=2)
actionsTable.fill(1199, 39435, 39443); // 'state 308' -> false..$ -> reduce (target=87, len=2)
actionsTable[39445] = 1199; // 'state 308' -> @ -> reduce (target=87, len=2)
actionsTable.fill(1199, 39477, 39480); // 'state 308' -> IntValue..Name -> reduce (target=87, len=2)
actionsTable[39555] = 685; // 'state 309' -> { -> reduce (target=86, len=1)
actionsTable.fill(685, 39563, 39571); // 'state 309' -> false..$ -> reduce (target=86, len=1)
actionsTable.fill(685, 39605, 39608); // 'state 309' -> IntValue..Name -> reduce (target=86, len=1)
actionsTable.fill(1203, 39683, 39685); // 'state 310' -> {..} -> reduce (target=89, len=2)
actionsTable[39687] = 1203; // 'state 310' -> ) -> reduce (target=89, len=2)
actionsTable.fill(1203, 39691, 39699); // 'state 310' -> false..$ -> reduce (target=89, len=2)
actionsTable[39701] = 1203; // 'state 310' -> @ -> reduce (target=89, len=2)
actionsTable.fill(1203, 39733, 39736); // 'state 310' -> IntValue..Name -> reduce (target=89, len=2)
actionsTable[39813] = 290; // 'state 311' -> : -> shift (target=145, len=0)
actionsTable[39940] = 689; // 'state 312' -> } -> reduce (target=88, len=1)
actionsTable[39991] = 689; // 'state 312' -> Name -> reduce (target=88, len=1)
actionsTable.fill(1777, 40064, 40068); // 'state 313' -> query..{ -> reduce (target=120, len=3)
actionsTable[40073] = 1777; // 'state 313' -> fragment -> reduce (target=120, len=3)
actionsTable.fill(1777, 40080, 40082); // 'state 313' -> """.." -> reduce (target=120, len=3)
actionsTable.fill(1777, 40085, 40094); // 'state 313' -> @..input -> reduce (target=120, len=3)
actionsTable[40095] = 1777; // 'state 313' -> & -> reduce (target=120, len=3)
actionsTable[40097] = 1777; // 'state 313' -> directive -> reduce (target=120, len=3)
actionsTable[40122] = 1777; // 'state 313' -> @par-gen.EOF -> reduce (target=120, len=3)
actionsTable[40196] = 2297; // 'state 314' -> } -> reduce (target=124, len=4)
actionsTable.fill(2297, 40208, 40210); // 'state 314' -> """.." -> reduce (target=124, len=4)
actionsTable[40247] = 2297; // 'state 314' -> Name -> reduce (target=124, len=4)
actionsTable.fill(1797, 40320, 40324); // 'state 315' -> query..{ -> reduce (target=130, len=3)
actionsTable[40329] = 1797; // 'state 315' -> fragment -> reduce (target=130, len=3)
actionsTable.fill(1797, 40336, 40338); // 'state 315' -> """.." -> reduce (target=130, len=3)
actionsTable.fill(1797, 40342, 40350); // 'state 315' -> schema..input -> reduce (target=130, len=3)
actionsTable.fill(1797, 40352, 40354); // 'state 315' -> |..directive -> reduce (target=130, len=3)
actionsTable[40378] = 1797; // 'state 315' -> @par-gen.EOF -> reduce (target=130, len=3)
actionsTable.fill(1815, 40448, 40452); // 'state 316' -> query..{ -> reduce (target=139, len=3)
actionsTable[40457] = 1815; // 'state 316' -> fragment -> reduce (target=139, len=3)
actionsTable.fill(1815, 40464, 40466); // 'state 316' -> """.." -> reduce (target=139, len=3)
actionsTable.fill(1815, 40470, 40478); // 'state 316' -> schema..input -> reduce (target=139, len=3)
actionsTable.fill(1815, 40480, 40482); // 'state 316' -> |..directive -> reduce (target=139, len=3)
actionsTable[40506] = 1815; // 'state 316' -> @par-gen.EOF -> reduce (target=139, len=3)
actionsTable.fill(1711, 40579, 40581); // 'state 317' -> {..} -> reduce (target=87, len=3)
actionsTable[40583] = 1711; // 'state 317' -> ) -> reduce (target=87, len=3)
actionsTable.fill(1711, 40587, 40595); // 'state 317' -> false..$ -> reduce (target=87, len=3)
actionsTable[40597] = 1711; // 'state 317' -> @ -> reduce (target=87, len=3)
actionsTable.fill(1711, 40629, 40632); // 'state 317' -> IntValue..Name -> reduce (target=87, len=3)
actionsTable[40707] = 1197; // 'state 318' -> { -> reduce (target=86, len=2)
actionsTable.fill(1197, 40715, 40723); // 'state 318' -> false..$ -> reduce (target=86, len=2)
actionsTable.fill(1197, 40757, 40760); // 'state 318' -> IntValue..Name -> reduce (target=86, len=2)
actionsTable.fill(1715, 40835, 40837); // 'state 319' -> {..} -> reduce (target=89, len=3)
actionsTable[40839] = 1715; // 'state 319' -> ) -> reduce (target=89, len=3)
actionsTable.fill(1715, 40843, 40851); // 'state 319' -> false..$ -> reduce (target=89, len=3)
actionsTable[40853] = 1715; // 'state 319' -> @ -> reduce (target=89, len=3)
actionsTable.fill(1715, 40885, 40888); // 'state 319' -> IntValue..Name -> reduce (target=89, len=3)
actionsTable[40964] = 1201; // 'state 320' -> } -> reduce (target=88, len=2)
actionsTable[41015] = 1201; // 'state 320' -> Name -> reduce (target=88, len=2)
actionsTable[41092] = 2809; // 'state 321' -> } -> reduce (target=124, len=5)
actionsTable.fill(2809, 41104, 41106); // 'state 321' -> """.." -> reduce (target=124, len=5)
actionsTable[41143] = 2809; // 'state 321' -> Name -> reduce (target=124, len=5)
actionsTable[41220] = 1717; // 'state 322' -> } -> reduce (target=90, len=3)
actionsTable[41271] = 1717; // 'state 322' -> Name -> reduce (target=90, len=3)
actionsTable[41348] = 3321; // 'state 323' -> } -> reduce (target=124, len=6)
actionsTable.fill(3321, 41360, 41362); // 'state 323' -> """.." -> reduce (target=124, len=6)
actionsTable[41399] = 3321; // 'state 323' -> Name -> reduce (target=124, len=6)

const shiftActionsTable = new Uint8Array(41408);
shiftActionsTable[16] = 1; // 'state 0' -> """ -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[17] = 2; // 'state 0' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[528] = 1; // 'state 4' -> """ -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[529] = 2; // 'state 4' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[6928] = 1; // 'state 54' -> """ -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[6929] = 2; // 'state 54' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[7824] = 1; // 'state 61' -> """ -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[7825] = 2; // 'state 61' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[8080] = 1; // 'state 63' -> """ -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[8081] = 2; // 'state 63' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[10000] = 1; // 'state 78' -> """ -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[10001] = 2; // 'state 78' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[12304] = 1; // 'state 96' -> """ -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[12305] = 2; // 'state 96' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[12944] = 1; // 'state 101' -> """ -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[12945] = 2; // 'state 101' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[13072] = 1; // 'state 102' -> """ -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[13073] = 2; // 'state 102' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[13712] = 1; // 'state 107' -> """ -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[13713] = 2; // 'state 107' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[14608] = 1; // 'state 114' -> """ -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[14609] = 2; // 'state 114' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[15888] = 1; // 'state 124' -> """ -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[15889] = 2; // 'state 124' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[16528] = 1; // 'state 129' -> """ -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[16529] = 2; // 'state 129' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[17680] = 1; // 'state 138' -> """ -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[17681] = 2; // 'state 138' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[18576] = 1; // 'state 145' -> """ -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[18577] = 2; // 'state 145' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[19344] = 3; // 'state 151' -> """ -> lexer.pop()
shiftActionsTable[19473] = 3; // 'state 152' -> " -> lexer.pop()
shiftActionsTable[24976] = 3; // 'state 195' -> """ -> lexer.pop()
shiftActionsTable[25105] = 3; // 'state 196' -> " -> lexer.pop()

const gotoTable = new Uint16Array(19216);
gotoTable[63] = 161; // 'state 161'
gotoTable[64] = 4; // 'state 4'
gotoTable[65] = 162; // 'state 162'
gotoTable[66] = 163; // 'state 163'
gotoTable[67] = 164; // 'state 164'
gotoTable[68] = 5; // 'state 5'
gotoTable[70] = 165; // 'state 165'
gotoTable[79] = 164; // 'state 164'
gotoTable[91] = 166; // 'state 166'
gotoTable.fill(163, 103, 105); // 'state 163'
gotoTable[106] = 167; // 'state 167'
gotoTable.fill(168, 107, 109); // 'state 168'
gotoTable.fill(169, 109, 115); // 'state 169'
gotoTable[116] = 170; // 'state 170'
gotoTable[117] = 167; // 'state 167'
gotoTable.fill(171, 118, 120); // 'state 171'
gotoTable.fill(171, 128, 130); // 'state 171'
gotoTable[132] = 171; // 'state 171'
gotoTable[136] = 171; // 'state 171'
gotoTable[138] = 167; // 'state 167'
gotoTable[197] = 16; // 'state 16'
gotoTable[199] = 191; // 'state 191'
gotoTable[200] = 192; // 'state 192'
gotoTable[201] = 193; // 'state 193'
gotoTable.fill(192, 205, 207); // 'state 192'
gotoTable[336] = 10; // 'state 10'
gotoTable[485] = 12; // 'state 12'
gotoTable[486] = 175; // 'state 175'
gotoTable[577] = 172; // 'state 172'
gotoTable[578] = 163; // 'state 163'
gotoTable[579] = 164; // 'state 164'
gotoTable[580] = 5; // 'state 5'
gotoTable[582] = 165; // 'state 165'
gotoTable[591] = 164; // 'state 164'
gotoTable[603] = 166; // 'state 166'
gotoTable.fill(163, 615, 617); // 'state 163'
gotoTable[618] = 167; // 'state 167'
gotoTable.fill(168, 619, 621); // 'state 168'
gotoTable.fill(169, 621, 627); // 'state 169'
gotoTable[628] = 170; // 'state 170'
gotoTable[629] = 167; // 'state 167'
gotoTable.fill(171, 630, 632); // 'state 171'
gotoTable.fill(171, 640, 642); // 'state 171'
gotoTable[644] = 171; // 'state 171'
gotoTable[648] = 171; // 'state 171'
gotoTable[650] = 167; // 'state 167'
gotoTable[710] = 174; // 'state 174'
gotoTable[733] = 8; // 'state 8'
gotoTable[741] = 9; // 'state 9'
gotoTable[742] = 175; // 'state 175'
gotoTable[860] = 25; // 'state 25'
gotoTable[862] = 199; // 'state 199'
gotoTable[863] = 200; // 'state 200'
gotoTable[966] = 197; // 'state 197'
gotoTable[989] = 23; // 'state 23'
gotoTable[997] = 24; // 'state 24'
gotoTable[998] = 175; // 'state 175'
gotoTable[1094] = 197; // 'state 197'
gotoTable[1125] = 24; // 'state 24'
gotoTable[1126] = 175; // 'state 175'
gotoTable[1222] = 197; // 'state 197'
gotoTable[1254] = 201; // 'state 201'
gotoTable[1361] = 28; // 'state 28'
gotoTable[1476] = 202; // 'state 202'
gotoTable[1513] = 30; // 'state 30'
gotoTable[1523] = 203; // 'state 203'
gotoTable[1638] = 201; // 'state 201'
gotoTable[1765] = 39; // 'state 39'
gotoTable[1766] = 175; // 'state 175'
gotoTable[1862] = 209; // 'state 209'
gotoTable[1872] = 50; // 'state 50'
gotoTable[1873] = 51; // 'state 51'
gotoTable[1893] = 52; // 'state 52'
gotoTable[1894] = 175; // 'state 175'
gotoTable[1990] = 208; // 'state 208'
gotoTable[1995] = 48; // 'state 48'
gotoTable[2021] = 49; // 'state 49'
gotoTable[2022] = 175; // 'state 175'
gotoTable[2119] = 206; // 'state 206'
gotoTable[2120] = 192; // 'state 192'
gotoTable[2121] = 193; // 'state 193'
gotoTable.fill(192, 2125, 2127); // 'state 192'
gotoTable[2277] = 53; // 'state 53'
gotoTable[2278] = 175; // 'state 175'
gotoTable[2405] = 56; // 'state 56'
gotoTable[2406] = 175; // 'state 175'
gotoTable[2425] = 57; // 'state 57'
gotoTable[2427] = 210; // 'state 210'
gotoTable[2533] = 58; // 'state 58'
gotoTable[2534] = 175; // 'state 175'
gotoTable[2555] = 211; // 'state 211'
gotoTable[2661] = 60; // 'state 60'
gotoTable[2662] = 175; // 'state 175'
gotoTable[2691] = 212; // 'state 212'
gotoTable[2789] = 62; // 'state 62'
gotoTable[2790] = 175; // 'state 175'
gotoTable[2822] = 213; // 'state 213'
gotoTable[2917] = 64; // 'state 64'
gotoTable[2918] = 175; // 'state 175'
gotoTable[2953] = 214; // 'state 214'
gotoTable[3014] = 216; // 'state 216'
gotoTable[3045] = 65; // 'state 65'
gotoTable[3046] = 175; // 'state 175'
gotoTable[3142] = 216; // 'state 216'
gotoTable[3174] = 201; // 'state 201'
gotoTable[3294] = 218; // 'state 218'
gotoTable[3295] = 200; // 'state 200'
gotoTable[3403] = 220; // 'state 220'
gotoTable[3554] = 223; // 'state 223'
gotoTable[3654] = 221; // 'state 221'
gotoTable[3685] = 67; // 'state 67'
gotoTable[3686] = 175; // 'state 175'
gotoTable[3780] = 202; // 'state 202'
gotoTable[3817] = 68; // 'state 68'
gotoTable[3827] = 203; // 'state 203'
gotoTable[3908] = 202; // 'state 202'
gotoTable[3955] = 225; // 'state 225'
gotoTable[4069] = 71; // 'state 71'
gotoTable[4070] = 175; // 'state 175'
gotoTable[4197] = 72; // 'state 72'
gotoTable[4198] = 175; // 'state 175'
gotoTable[4217] = 73; // 'state 73'
gotoTable[4219] = 226; // 'state 226'
gotoTable[4325] = 74; // 'state 74'
gotoTable[4326] = 175; // 'state 175'
gotoTable[4347] = 227; // 'state 227'
gotoTable[4453] = 75; // 'state 75'
gotoTable[4454] = 175; // 'state 175'
gotoTable[4483] = 228; // 'state 228'
gotoTable[4581] = 76; // 'state 76'
gotoTable[4582] = 175; // 'state 175'
gotoTable[4614] = 229; // 'state 229'
gotoTable[4709] = 77; // 'state 77'
gotoTable[4710] = 175; // 'state 175'
gotoTable[4745] = 230; // 'state 230'
gotoTable[4862] = 231; // 'state 231'
gotoTable[4932] = 202; // 'state 202'
gotoTable[4969] = 80; // 'state 80'
gotoTable[4979] = 203; // 'state 203'
gotoTable[5094] = 201; // 'state 201'
gotoTable[5221] = 81; // 'state 81'
gotoTable[5222] = 175; // 'state 175'
gotoTable[5349] = 82; // 'state 82'
gotoTable[5350] = 175; // 'state 175'
gotoTable[5369] = 83; // 'state 83'
gotoTable[5371] = 232; // 'state 232'
gotoTable[5477] = 84; // 'state 84'
gotoTable[5478] = 175; // 'state 175'
gotoTable[5499] = 233; // 'state 233'
gotoTable[5605] = 85; // 'state 85'
gotoTable[5606] = 175; // 'state 175'
gotoTable[5635] = 234; // 'state 234'
gotoTable[5733] = 86; // 'state 86'
gotoTable[5734] = 175; // 'state 175'
gotoTable[5766] = 235; // 'state 235'
gotoTable[5861] = 87; // 'state 87'
gotoTable[5862] = 175; // 'state 175'
gotoTable[5897] = 236; // 'state 236'
gotoTable[5958] = 237; // 'state 237'
gotoTable[5963] = 88; // 'state 88'
gotoTable[5989] = 89; // 'state 89'
gotoTable[5990] = 175; // 'state 175'
gotoTable[6090] = 90; // 'state 90'
gotoTable[6092] = 239; // 'state 239'
gotoTable[6214] = 237; // 'state 237'
gotoTable[6245] = 89; // 'state 89'
gotoTable[6246] = 175; // 'state 175'
gotoTable[6342] = 237; // 'state 237'
gotoTable[6374] = 201; // 'state 201'
gotoTable[6501] = 91; // 'state 91'
gotoTable[6502] = 175; // 'state 175'
gotoTable[6598] = 240; // 'state 240'
gotoTable[6629] = 92; // 'state 92'
gotoTable[6630] = 175; // 'state 175'
gotoTable[6726] = 240; // 'state 240'
gotoTable[6758] = 201; // 'state 201'
gotoTable[6886] = 201; // 'state 201'
gotoTable[7003] = 166; // 'state 166'
gotoTable[7028] = 241; // 'state 241'
gotoTable[7034] = 96; // 'state 96'
gotoTable[7036] = 242; // 'state 242'
gotoTable[7138] = 94; // 'state 94'
gotoTable[7270] = 201; // 'state 201'
gotoTable[7291] = 226; // 'state 226'
gotoTable[7397] = 72; // 'state 72'
gotoTable[7398] = 175; // 'state 175'
gotoTable[7419] = 226; // 'state 226'
gotoTable[7526] = 201; // 'state 201'
gotoTable[7547] = 227; // 'state 227'
gotoTable[7650] = 98; // 'state 98'
gotoTable[7782] = 201; // 'state 201'
gotoTable[7811] = 228; // 'state 228'
gotoTable[7893] = 99; // 'state 99'
gotoTable[7899] = 166; // 'state 166'
gotoTable[7924] = 100; // 'state 100'
gotoTable[7941] = 101; // 'state 101'
gotoTable[7943] = 244; // 'state 244'
gotoTable[8038] = 201; // 'state 201'
gotoTable[8070] = 229; // 'state 229'
gotoTable[8155] = 166; // 'state 166'
gotoTable[8180] = 246; // 'state 246'
gotoTable[8189] = 102; // 'state 102'
gotoTable[8191] = 247; // 'state 247'
gotoTable[8294] = 201; // 'state 201'
gotoTable[8329] = 230; // 'state 230'
gotoTable[8390] = 248; // 'state 248'
gotoTable[8422] = 201; // 'state 201'
gotoTable[8545] = 104; // 'state 104'
gotoTable.fill(249, 8546, 8548); // 'state 249'
gotoTable[8548] = 250; // 'state 250'
gotoTable[8646] = 251; // 'state 251'
gotoTable[8678] = 201; // 'state 201'
gotoTable[8772] = 202; // 'state 202'
gotoTable[8819] = 225; // 'state 225'
gotoTable[8930] = 253; // 'state 253'
gotoTable[9086] = 254; // 'state 254'
gotoTable[9190] = 201; // 'state 201'
gotoTable[9318] = 201; // 'state 201'
gotoTable[9339] = 255; // 'state 255'
gotoTable[9445] = 106; // 'state 106'
gotoTable[9446] = 175; // 'state 175'
gotoTable[9467] = 255; // 'state 255'
gotoTable[9574] = 201; // 'state 201'
gotoTable[9595] = 256; // 'state 256'
gotoTable[9702] = 201; // 'state 201'
gotoTable[9731] = 257; // 'state 257'
gotoTable[9830] = 201; // 'state 201'
gotoTable[9862] = 258; // 'state 258'
gotoTable[9958] = 201; // 'state 201'
gotoTable[9993] = 259; // 'state 259'
gotoTable[10075] = 166; // 'state 166'
gotoTable[10100] = 246; // 'state 246'
gotoTable[10109] = 107; // 'state 107'
gotoTable[10111] = 247; // 'state 247'
gotoTable[10252] = 262; // 'state 262'
gotoTable[10253] = 109; // 'state 109'
gotoTable.fill(263, 10254, 10256); // 'state 263'
gotoTable[10308] = 202; // 'state 202'
gotoTable[10355] = 225; // 'state 225'
gotoTable[10470] = 201; // 'state 201'
gotoTable[10598] = 201; // 'state 201'
gotoTable[10619] = 265; // 'state 265'
gotoTable[10725] = 112; // 'state 112'
gotoTable[10726] = 175; // 'state 175'
gotoTable[10747] = 265; // 'state 265'
gotoTable[10854] = 201; // 'state 201'
gotoTable[10875] = 266; // 'state 266'
gotoTable[10982] = 201; // 'state 201'
gotoTable[11011] = 267; // 'state 267'
gotoTable[11110] = 201; // 'state 201'
gotoTable[11142] = 268; // 'state 268'
gotoTable[11238] = 201; // 'state 201'
gotoTable[11273] = 269; // 'state 269'
gotoTable[11334] = 270; // 'state 270'
gotoTable[11365] = 113; // 'state 113'
gotoTable[11366] = 175; // 'state 175'
gotoTable[11462] = 270; // 'state 270'
gotoTable[11494] = 201; // 'state 201'
gotoTable[11596] = 272; // 'state 272'
gotoTable[11750] = 201; // 'state 201'
gotoTable[11846] = 273; // 'state 273'
gotoTable[11878] = 201; // 'state 201'
gotoTable[12002] = 115; // 'state 115'
gotoTable[12152] = 274; // 'state 274'
gotoTable[12286] = 277; // 'state 277'
gotoTable[12379] = 166; // 'state 166'
gotoTable[12404] = 241; // 'state 241'
gotoTable[12412] = 276; // 'state 276'
gotoTable[12514] = 119; // 'state 119'
gotoTable[12674] = 278; // 'state 278'
gotoTable[12773] = 122; // 'state 122'
gotoTable[12774] = 175; // 'state 175'
gotoTable[12885] = 121; // 'state 121'
gotoTable[13013] = 99; // 'state 99'
gotoTable[13019] = 166; // 'state 166'
gotoTable[13044] = 100; // 'state 100'
gotoTable[13063] = 280; // 'state 280'
gotoTable[13147] = 166; // 'state 166'
gotoTable[13172] = 246; // 'state 246'
gotoTable[13183] = 282; // 'state 282'
gotoTable[13281] = 286; // 'state 286'
gotoTable.fill(249, 13282, 13284); // 'state 249'
gotoTable[13284] = 250; // 'state 250'
gotoTable[13408] = 284; // 'state 284'
gotoTable[13580] = 287; // 'state 287'
gotoTable[13581] = 109; // 'state 109'
gotoTable.fill(263, 13582, 13584); // 'state 263'
gotoTable[13670] = 201; // 'state 201'
gotoTable[13691] = 288; // 'state 288'
gotoTable[13787] = 166; // 'state 166'
gotoTable[13812] = 246; // 'state 246'
gotoTable[13823] = 282; // 'state 282'
gotoTable[13965] = 126; // 'state 126'
gotoTable.fill(263, 13966, 13968); // 'state 263'
gotoTable[14091] = 290; // 'state 290'
gotoTable[14148] = 202; // 'state 202'
gotoTable[14185] = 111; // 'state 111'
gotoTable[14195] = 203; // 'state 203'
gotoTable[14276] = 202; // 'state 202'
gotoTable[14323] = 225; // 'state 225'
gotoTable[14438] = 201; // 'state 201'
gotoTable[14459] = 292; // 'state 292'
gotoTable[14534] = 293; // 'state 293'
gotoTable[14566] = 201; // 'state 201'
gotoTable[14674] = 297; // 'state 297'
gotoTable.fill(296, 14675, 14678); // 'state 296'
gotoTable[14679] = 296; // 'state 296'
gotoTable[14681] = 296; // 'state 296'
gotoTable[14683] = 296; // 'state 296'
gotoTable[14687] = 296; // 'state 296'
gotoTable[14840] = 298; // 'state 298'
gotoTable[14946] = 299; // 'state 299'
gotoTable[15102] = 300; // 'state 300'
gotoTable[15201] = 132; // 'state 132'
gotoTable.fill(249, 15202, 15204); // 'state 249'
gotoTable[15204] = 250; // 'state 250'
gotoTable[15362] = 301; // 'state 301'
gotoTable[15458] = 302; // 'state 302'
gotoTable[15589] = 134; // 'state 134'
gotoTable[15590] = 175; // 'state 175'
gotoTable[15718] = 201; // 'state 201'
gotoTable[15841] = 136; // 'state 136'
gotoTable.fill(249, 15842, 15844); // 'state 249'
gotoTable[15844] = 250; // 'state 250'
gotoTable[15954] = 303; // 'state 303'
gotoTable.fill(296, 15955, 15958); // 'state 296'
gotoTable[15959] = 296; // 'state 296'
gotoTable[15961] = 296; // 'state 296'
gotoTable[15963] = 296; // 'state 296'
gotoTable[15967] = 296; // 'state 296'
gotoTable[16140] = 305; // 'state 305'
gotoTable[16141] = 109; // 'state 109'
gotoTable.fill(263, 16142, 16144); // 'state 263'
gotoTable[16267] = 306; // 'state 306'
gotoTable[16397] = 307; // 'state 307'
gotoTable.fill(263, 16398, 16400); // 'state 263'
gotoTable[16472] = 139; // 'state 139'
gotoTable[16474] = 312; // 'state 312'
gotoTable[16594] = 309; // 'state 309'
gotoTable.fill(296, 16595, 16598); // 'state 296'
gotoTable[16598] = 138; // 'state 138'
gotoTable[16599] = 296; // 'state 296'
gotoTable[16601] = 296; // 'state 296'
gotoTable[16603] = 296; // 'state 296'
gotoTable[16607] = 296; // 'state 296'
gotoTable[16738] = 313; // 'state 313'
gotoTable[16865] = 141; // 'state 141'
gotoTable.fill(249, 16866, 16868); // 'state 249'
gotoTable[16868] = 250; // 'state 250'
gotoTable[16998] = 314; // 'state 314'
gotoTable[17122] = 315; // 'state 315'
gotoTable[17254] = 201; // 'state 201'
gotoTable[17377] = 142; // 'state 142'
gotoTable.fill(249, 17378, 17380); // 'state 249'
gotoTable[17380] = 250; // 'state 250'
gotoTable[17504] = 143; // 'state 143'
gotoTable[17509] = 144; // 'state 144'
gotoTable[17510] = 175; // 'state 175'
gotoTable[17677] = 316; // 'state 316'
gotoTable.fill(263, 17678, 17680); // 'state 263'
gotoTable[17746] = 318; // 'state 318'
gotoTable.fill(296, 17747, 17750); // 'state 296'
gotoTable[17751] = 296; // 'state 296'
gotoTable[17753] = 296; // 'state 296'
gotoTable[17755] = 296; // 'state 296'
gotoTable[17759] = 296; // 'state 296'
gotoTable[17882] = 320; // 'state 320'
gotoTable[18017] = 146; // 'state 146'
gotoTable.fill(249, 18018, 18020); // 'state 249'
gotoTable[18020] = 250; // 'state 250'
gotoTable[18150] = 321; // 'state 321'
gotoTable[18272] = 147; // 'state 147'
gotoTable[18277] = 148; // 'state 148'
gotoTable[18278] = 175; // 'state 175'
gotoTable[18405] = 148; // 'state 148'
gotoTable[18406] = 175; // 'state 175'
gotoTable[18534] = 201; // 'state 201'
gotoTable[18642] = 322; // 'state 322'
gotoTable.fill(296, 18643, 18646); // 'state 296'
gotoTable[18647] = 296; // 'state 296'
gotoTable[18649] = 296; // 'state 296'
gotoTable[18651] = 296; // 'state 296'
gotoTable[18655] = 296; // 'state 296'
gotoTable[18790] = 323; // 'state 323'
gotoTable[18917] = 149; // 'state 149'
gotoTable[18918] = 175; // 'state 175'
gotoTable[19046] = 201; // 'state 201'
gotoTable[19174] = 201; // 'state 201'

const wordFallbackTable = new Uint8Array(64);
wordFallbackTable.fill(1, 0, 3); // query..subscription
wordFallbackTable.fill(1, 9, 14); // fragment..null
wordFallbackTable.fill(1, 22, 31); // schema..implements
wordFallbackTable.fill(1, 33, 53); // directive..INPUT_FIELD_DEFINITION

const LexerMode = {
  INITIAL: 0,
  IMM_STRING_VALUE_0: 1,
  IMM_STRING_VALUE_1: 2,
};

const lexerModeNames = {
  initial: 0,
  imm_StringValue_0: 1,
  imm_StringValue_1: 2,
};

let lexerStack = new Uint8Array(64);
let lexerSp = 0;
let lexerMode = LexerMode.INITIAL;

const lexer = {
  push(mode) {
    const modeId = typeof mode === "number" ? mode : lexerModeNames[mode];
    if (++lexerSp >= lexerStack.length) {
      const next = new Uint8Array(lexerStack.length << 1);
      next.set(lexerStack);
      lexerStack = next;
    }
    lexerStack[lexerSp] = modeId;
    lexerMode = modeId;
  },
  pop() {
    if (lexerSp === 0) {
      throw new Error("Cannot remove more lexer states than have been pushed.");
    }
    lexerMode = lexerStack[--lexerSp];
  },
};

/**
 * Auto-growing stack and CST arenas starting at 16,384 words (64 KiB each),
 * which glibc malloc places in the low 32-bit brk heap ([reg*4 + disp32]).
 *
 * Each 32-bit stack entry packs:
 * - low 20 bits: tree pointer (tp) of the shifted/reduced CST node (up to 1,048,575 words)
 * - high 12 bits: parser state
 *
 * Each CST node in tree occupies 2 uint32 words (postorder layout):
 * - word 0 (tp + 0): name | (numChildren << 8)
 * - word 1 (tp + 1): end | ((end - start) << 22) (leaf) or rtop (internal: low 20 bits = prevSibling / subtreeStart - 2)
 */
const arena = {
  stack: new Uint32Array(262144),
  tree: new Uint32Array(524288),
};

class TreeCursor {
  #stream;
  #tree;
  #rootPointer;
  #pointer;
  #parentStack = new Uint32Array(128);
  #siblingStack = new Uint32Array(128);
  #depth = 0;
  #siblingSp = 0;

  constructor(stream, tree, pointer) {
    this.#stream = stream;
    this.#tree = tree;
    this.#rootPointer = pointer;
    this.#pointer = pointer;
  }

  get name() {
    return parserSymbols[this.#tree[this.#pointer] & 0xff];
  }

  get symbolId() {
    return this.#tree[this.#pointer] & 0xff;
  }

  get childCount() {
    return this.#tree[this.#pointer] >>> 8;
  }

  get isLeaf() {
    return this.#tree[this.#pointer] >>> 8 === 0;
  }

  #exactLeafStart(p, end) {
    const t = this.#tree;
    let q = p - 2;
    while (q >= 2 && t[q] >>> 8 > 0) {
      q -= 2;
    }
    const prevEnd = q >= 2 ? (t[0] === 0 ? t[q + 1] & 0x3fffff : t[q + 1]) : 0;
    if (prevEnd >= end) {
      return end;
    }
    return prevEnd;
  }

  get start() {
    const t = this.#tree;
    let p = this.#pointer;
    if (t[p] >>> 8 > 0) {
      const mask = t[0] === 0 ? 0x7fffff : 0xffffffff;
      p = (t[p + 1] & mask) + 2;
    }
    if (t[0] !== 0) {
      return this.#exactLeafStart(p, t[p + 1]);
    }
    const span = t[p + 1];
    const end = span & 0x3fffff;
    const len = span >>> 22;
    if (len < 1023) {
      return end - len;
    }
    return this.#exactLeafStart(p, end);
  }

  get end() {
    const t = this.#tree;
    let p = this.#pointer;
    while (t[p] >>> 8 > 0) {
      p -= 2;
    }
    return t[0] === 0 ? t[p + 1] & 0x3fffff : t[p + 1];
  }

  get value() {
    return this.#stream.subarray(this.start, this.end);
  }

  get text() {
    return Buffer.from(this.#stream.subarray(this.start, this.end)).toString(
      "utf-8"
    );
  }

  get pointer() {
    return this.#pointer;
  }

  get depth() {
    return this.#depth;
  }

  reset() {
    this.#pointer = this.#rootPointer;
    this.#depth = 0;
    this.#siblingSp = 0;
    return true;
  }

  gotoFirstChild() {
    const t = this.#tree;
    const p = this.#pointer;
    const n = t[p] >>> 8;
    if (n === 0) {
      return false;
    }
    const d = this.#depth + 1;
    let stack = this.#parentStack;
    if ((d << 1) + 1 >= stack.length) {
      const next = new Uint32Array(stack.length << 1);
      next.set(stack);
      stack = this.#parentStack = next;
    }
    const idx = d << 1;
    stack[idx] = p;
    stack[idx + 1] = n - 1;
    this.#depth = d;
    let c = p - 2;
    if (n > 1) {
      const mask = t[0] === 0 ? 0x7fffff : 0xffffffff;
      let sp = this.#siblingSp;
      let sStack = this.#siblingStack;
      if (sp + n >= sStack.length) {
        const next = new Uint32Array((sStack.length + n) << 1);
        next.set(sStack);
        sStack = this.#siblingStack = next;
      }
      for (let k = 1; k < n; k++) {
        sStack[++sp] = c;
        c = t[c] >>> 8 === 0 ? c - 2 : t[c + 1] & mask;
      }
      this.#siblingSp = sp;
    }
    this.#pointer = c;
    return true;
  }

  gotoNextSibling() {
    const d = this.#depth;
    if (d === 0) {
      return false;
    }
    const stack = this.#parentStack;
    const remIdx = (d << 1) + 1;
    const rem = stack[remIdx];
    if (rem === 0) {
      return false;
    }
    stack[remIdx] = rem - 1;
    const sp = this.#siblingSp;
    this.#pointer = this.#siblingStack[sp];
    this.#siblingSp = sp - 1;
    return true;
  }

  gotoParent() {
    const d = this.#depth;
    if (d === 0) {
      return false;
    }
    const stack = this.#parentStack;
    const idx = d << 1;
    this.#siblingSp -= stack[idx + 1];
    this.#depth = d - 1;
    this.#pointer = stack[idx];
    return true;
  }

  currentNode() {
    return new CstNode(this.#stream, this.#tree, this.#pointer);
  }
}

class CstNode {
  #stream;
  #tree;
  #pointer;

  constructor(stream, tree, pointer) {
    this.#stream = stream;
    this.#tree = tree;
    this.#pointer = pointer;
  }

  get name() {
    return parserSymbols[this.#tree[this.#pointer] & 0xff];
  }

  get symbolId() {
    return this.#tree[this.#pointer] & 0xff;
  }

  get childCount() {
    return this.#tree[this.#pointer] >>> 8;
  }

  get isLeaf() {
    return this.#tree[this.#pointer] >>> 8 === 0;
  }

  #exactLeafStart(p, end) {
    const t = this.#tree;
    let q = p - 2;
    while (q >= 2 && t[q] >>> 8 > 0) {
      q -= 2;
    }
    const prevEnd = q >= 2 ? (t[0] === 0 ? t[q + 1] & 0x3fffff : t[q + 1]) : 0;
    if (prevEnd >= end) {
      return end;
    }
    return prevEnd;
  }

  get start() {
    const t = this.#tree;
    let p = this.#pointer;
    if (t[p] >>> 8 > 0) {
      const mask = t[0] === 0 ? 0x7fffff : 0xffffffff;
      p = (t[p + 1] & mask) + 2;
    }
    if (t[0] !== 0) {
      return this.#exactLeafStart(p, t[p + 1]);
    }
    const span = t[p + 1];
    const end = span & 0x3fffff;
    const len = span >>> 22;
    if (len < 1023) {
      return end - len;
    }
    return this.#exactLeafStart(p, end);
  }

  get end() {
    const t = this.#tree;
    let p = this.#pointer;
    while (t[p] >>> 8 > 0) {
      p -= 2;
    }
    return t[0] === 0 ? t[p + 1] & 0x3fffff : t[p + 1];
  }

  get value() {
    return this.#stream.subarray(this.start, this.end);
  }

  get text() {
    return Buffer.from(this.#stream.subarray(this.start, this.end)).toString(
      "utf-8"
    );
  }

  get firstChild() {
    const t = this.#tree;
    const pointer = this.#pointer;
    const nChildren = t[pointer] >>> 8;
    if (nChildren === 0) {
      return undefined;
    }
    const mask = t[0] === 0 ? 0x7fffff : 0xffffffff;
    let c = pointer - 2;
    for (let i = 1; i < nChildren; i++) {
      c = t[c] >>> 8 === 0 ? c - 2 : t[c + 1] & mask;
    }
    return new CstNode(this.#stream, t, c);
  }

  get lastChild() {
    const t = this.#tree;
    const pointer = this.#pointer;
    if (t[pointer] >>> 8 === 0) {
      return undefined;
    }
    return new CstNode(this.#stream, t, pointer - 2);
  }

  child(index) {
    const t = this.#tree;
    const pointer = this.#pointer;
    const nChildren = t[pointer] >>> 8;
    const idx = index < 0 ? nChildren + index : index;
    if (idx < 0 || idx >= nChildren) {
      return undefined;
    }
    const mask = t[0] === 0 ? 0x7fffff : 0xffffffff;
    let c = pointer - 2;
    for (let i = nChildren - 1; i > idx; i--) {
      c = t[c] >>> 8 === 0 ? c - 2 : t[c + 1] & mask;
    }
    return new CstNode(this.#stream, t, c);
  }

  childByName(name) {
    const t = this.#tree;
    const pointer = this.#pointer;
    const nChildren = t[pointer] >>> 8;
    if (nChildren === 0) {
      return undefined;
    }
    const mask = t[0] === 0 ? 0x7fffff : 0xffffffff;
    let match = -1;
    let c = pointer - 2;
    for (let i = 0; i < nChildren; i++) {
      if (parserSymbols[t[c] & 0xff] === name) {
        match = c;
      }
      if (i + 1 < nChildren) {
        c = t[c] >>> 8 === 0 ? c - 2 : t[c + 1] & mask;
      }
    }
    return match === -1 ? undefined : new CstNode(this.#stream, t, match);
  }

  childrenByName(name) {
    const t = this.#tree;
    const pointer = this.#pointer;
    const nChildren = t[pointer] >>> 8;
    const result = [];
    if (nChildren === 0) {
      return result;
    }
    const mask = t[0] === 0 ? 0x7fffff : 0xffffffff;
    const stream = this.#stream;
    let c = pointer - 2;
    for (let i = 0; i < nChildren; i++) {
      if (parserSymbols[t[c] & 0xff] === name) {
        result.push(new CstNode(stream, t, c));
      }
      if (i + 1 < nChildren) {
        c = t[c] >>> 8 === 0 ? c - 2 : t[c + 1] & mask;
      }
    }
    result.reverse();
    return result;
  }

  get items() {
    const t = this.#tree;
    const pointer = this.#pointer;
    const nChildren = t[pointer] >>> 8;
    if (nChildren === 0) {
      return undefined;
    }

    const mask = t[0] === 0 ? 0x7fffff : 0xffffffff;
    const stream = this.#stream;
    const children = new Array(nChildren);
    let child = pointer - 2;
    for (let i = nChildren - 1; i > 0; i--) {
      children[i] = new CstNode(stream, t, child);
      child = t[child] >>> 8 === 0 ? child - 2 : t[child + 1] & mask;
    }
    children[0] = new CstNode(stream, t, child);

    return children;
  }

  get __tree() {
    return this.#tree;
  }

  get __pointer() {
    return this.#pointer;
  }

  cursor() {
    return new TreeCursor(this.#stream, this.#tree, this.#pointer);
  }

  reemitLossless(input) {
    const stream =
      input === undefined
        ? this.#stream
        : typeof input === "string"
        ? Buffer.from(input)
        : input;
    const t = this.#tree;
    const rootPtr = this.#pointer;
    const mask = t[0] === 0 ? 0x7fffff : 0xffffffff;
    const startPtr =
      t[rootPtr] >>> 8 === 0 ? rootPtr : (t[rootPtr + 1] & mask) + 2;
    const isRoot = startPtr === 2 && (t[1] === 0 || rootPtr === t[1]);
    const outLen = isRoot ? stream.length : this.end - this.start;
    const out = Buffer.allocUnsafe(outLen);
    let offset = 0;
    let prevEnd = isRoot ? 0 : this.start;

    for (let p = startPtr; p <= rootPtr; p += 2) {
      if (t[p] >>> 8 === 0) {
        const end = t[0] === 0 ? t[p + 1] & 0x3fffff : t[p + 1];
        if (end > prevEnd) {
          out.set(stream.subarray(prevEnd, end), offset);
          offset += end - prevEnd;
          prevEnd = end;
        }
      }
    }
    if (isRoot && prevEnd < stream.length) {
      out.set(stream.subarray(prevEnd, stream.length), offset);
      offset += stream.length - prevEnd;
    }
    return out.subarray(0, offset);
  }

  toSExpr(includeText = false) {
    const t = this.#tree;
    const stream = this.#stream;
    const mask = t[0] === 0 ? 0x7fffff : 0xffffffff;
    const formatNode = (p) => {
      const w0 = t[p];
      const name = parserSymbols[w0 & 0xff];
      const n = w0 >>> 8;
      if (n === 0) {
        if (!includeText) {
          return "(" + name + ")";
        }
        const node = new CstNode(stream, t, p);
        return "(" + name + " " + JSON.stringify(node.text) + ")";
      }
      const childPtrs = new Uint32Array(n);
      let c = p - 2;
      for (let i = n - 1; i >= 0; i--) {
        childPtrs[i] = c;
        if (i > 0) {
          c = t[c] >>> 8 === 0 ? c - 2 : t[c + 1] & mask;
        }
      }
      let out = "(" + name;
      for (let i = 0; i < n; i++) {
        out += " " + formatNode(childPtrs[i]);
      }
      return out + ")";
    };
    return formatNode(this.#pointer);
  }

  toJSON() {
    return {
      name: this.name,
      start: this.start,
      end: this.end,
      value: this.value,
      items: this.items?.map((item) => item.toJSON()),
    };
  }

  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.toJSON();
  }
}

class LineIndex {
  #lineStarts;

  constructor(input) {
    const stream = typeof input === "string" ? Buffer.from(input) : input;
    let count = 1;
    for (let i = 0; i < stream.length; i++) {
      if (stream[i] === 10) {
        count++;
      }
    }
    const starts = new Uint32Array(count);
    starts[0] = 0;
    let idx = 1;
    for (let i = 0; i < stream.length; i++) {
      if (stream[i] === 10) {
        starts[idx++] = i + 1;
      }
    }
    this.#lineStarts = starts;
  }

  locationForOffset(offset) {
    const starts = this.#lineStarts;
    let low = 0;
    let high = starts.length - 1;
    while (low <= high) {
      const mid = (low + high) >>> 1;
      if (starts[mid] <= offset) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return {
      line: high + 1,
      column: offset - starts[high] + 1,
    };
  }
}

function throwSyntaxError(
  stream,
  tree,
  tp,
  lookahead,
  lookaheadSpan,
  stateOffset
) {
  const symName = parserSymbols[lookahead] ?? String(lookahead);
  const rawEnd = lookaheadSpan & 0x3fffff;
  let offset = 0;
  let endOffset = 0;
  if (rawEnd !== 0x3fffff) {
    endOffset = rawEnd;
    offset = endOffset - (lookaheadSpan >>> 22);
  } else if (symName === "@par-gen.EOF") {
    offset = stream.length;
    endOffset = stream.length;
  } else {
    let q = tp - 2;
    while (q >= 2 && (tree[q] >>> 8 > 0 || (tree[q] & 0xff) > 61)) {
      q -= 2;
    }
    offset =
      q >= 2 ? (tree[0] === 0 ? tree[q + 1] & 0x3fffff : tree[q + 1]) : 0;
    while (
      offset < stream.length &&
      (stream[offset] === 32 ||
        stream[offset] === 9 ||
        stream[offset] === 10 ||
        stream[offset] === 13)
    ) {
      offset++;
    }
    endOffset = offset < stream.length ? offset + 1 : offset;
  }

  let line = 1;
  let lineStart = 0;
  for (let i = 0; i < offset && i < stream.length; i++) {
    if (stream[i] === 10) {
      line++;
      lineStart = i + 1;
    }
  }
  const column = offset - lineStart + 1;

  let lineEnd = offset;
  while (
    lineEnd < stream.length &&
    stream[lineEnd] !== 10 &&
    stream[lineEnd] !== 13
  ) {
    lineEnd++;
  }

  const expected = [];
  for (let t = 0; t <= 61; t++) {
    if (actionsTable[stateOffset + t] !== 0xffff) {
      const name = parserSymbols[t];
      if (name && name !== "@par-gen.ERROR") {
        expected.push(name);
      }
    }
  }

  const tokenText =
    endOffset > offset
      ? Buffer.from(stream.subarray(offset, endOffset)).toString("utf-8")
      : "";
  const foundDesc =
    symName === "@par-gen.EOF"
      ? "@par-gen.EOF (end of input)"
      : tokenText && tokenText !== symName
      ? `${symName} (${JSON.stringify(tokenText)})`
      : symName;
  const expectedDesc =
    expected.length > 0 ? `. Expected one of: ${expected.join(", ")}` : "";

  let winStart = lineStart;
  let winEnd = lineEnd;
  let prefix = "";
  let suffix = "";
  if (lineEnd - lineStart > 120) {
    winStart = Math.max(lineStart, offset - 40);
    winEnd = Math.min(lineEnd, offset + 60);
    if (winStart > lineStart) prefix = "...";
    if (winEnd < lineEnd) suffix = "...";
  }
  const lineStr =
    prefix +
    Buffer.from(stream.subarray(winStart, winEnd)).toString("utf-8") +
    suffix;
  const lineNumStr = String(line);
  const gutterPad = " ".repeat(lineNumStr.length);
  const caretCol = Math.max(0, offset - winStart + prefix.length);
  const caretLen = Math.max(1, Math.min(endOffset - offset, winEnd - offset));
  const frame = `${gutterPad} |\n${lineNumStr} | ${lineStr}\n${gutterPad} | ${" ".repeat(
    caretCol
  )}${"^".repeat(caretLen)}`;

  const err = new SyntaxError(
    `Unexpected lookahead ${foundDesc} at line ${line}, column ${column}${expectedDesc}\n${frame}`
  );
  err.line = line;
  err.column = column;
  err.offset = offset;
  err.endOffset = endOffset;
  err.found = symName;
  err.tokenText = tokenText;
  err.expected = expected;
  throw err;
}

function reemitLossless(cst, input) {
  return cst.reemitLossless(input);
}

function parseLarge(stream) {
  lexerSp = 0;
  lexerStack[0] = LexerMode.INITIAL;
  lexerMode = LexerMode.INITIAL;
  const firstRes = nextTokenInitial(stream, 0);
  let lookahead = firstRes.state;
  let lookaheadStart = firstRes.start;
  let lookaheadEnd = firstRes.end;

  let stackCap = 65536;
  let stackStates = new Uint32Array(stackCap);
  let stackTps = new Uint32Array(stackCap);
  let treeCap = 1048576;
  while (treeCap <= stream.length) {
    treeCap <<= 1;
  }
  let tree = new Uint32Array(treeCap);
  tree[0] = 1;
  const actions = actionsTable;
  const goto = gotoTable;
  const sa = shiftActionsTable;
  const wf = wordFallbackTable;

  let topState = 0;
  stackStates[0] = topState;
  stackTps[0] = 0;
  let sp = 0;
  let tp = 2;
  let prevEnd = 0;

  while (true) {
    const currentState = topState;
    const actionIndex = (currentState << 7) + lookahead;
    const actionLookup = actions[actionIndex];
    if ((actionLookup & 1) === 0) {
      if (actionLookup === 0xfffe) {
        if (prevEnd < stream.length) {
          const rootPtr = tp - 2;
          if (tp + 4 >= treeCap) {
            treeCap <<= 1;
            const nextTree = new Uint32Array(treeCap);
            nextTree.set(tree);
            tree = nextTree;
          }
          tree[tp] = 60;
          tree[tp + 1] = stream.length;
          tp += 2;
          tree[tp] = (tree[rootPtr] & 0xff) | (2 << 8);
          tree[tp + 1] = 0;
          tp += 2;
        }
        tree[1] = tp - 2;
        return new CstNode(stream, tree, tp - 2);
      }
      const shiftAction = sa[actionIndex];
      if (shiftAction !== 0) {
        switch (shiftAction) {
          case 1:
            lexer.push(LexerMode.IMM_STRING_VALUE_0);
            break;
          case 2:
            lexer.push(LexerMode.IMM_STRING_VALUE_1);
            break;
          case 3:
            lexer.pop();
            break;
        }
      }
      if (sp + 2 >= stackCap) {
        stackCap <<= 1;
        const nextS = new Uint32Array(stackCap);
        nextS.set(stackStates);
        stackStates = nextS;
        const nextT = new Uint32Array(stackCap);
        nextT.set(stackTps);
        stackTps = nextT;
      }
      if (lookaheadStart === prevEnd) {
        tree[tp] = lookahead;
        tree[tp + 1] = lookaheadEnd;
        sp += 1;
        topState = actionLookup >>> 1;
        stackStates[sp] = topState;
        stackTps[sp] = tp;
        prevEnd = lookaheadEnd;
      } else {
        if (tp + 6 >= treeCap) {
          treeCap <<= 1;
          const nextTree = new Uint32Array(treeCap);
          nextTree.set(tree);
          tree = nextTree;
        }
        const prevTp = stackTps[sp];
        tree[tp] = 60;
        tree[tp + 1] = lookaheadStart;
        tp += 2;
        tree[tp] = lookahead;
        tree[tp + 1] = lookaheadEnd;
        tp += 2;
        tree[tp] = lookahead | (2 << 8);
        tree[tp + 1] = prevTp;
        sp += 1;
        topState = actionLookup >>> 1;
        stackStates[sp] = topState;
        stackTps[sp] = tp;
        prevEnd = lookaheadEnd;
      }
      const res =
        lexerMode === LexerMode.INITIAL
          ? nextTokenInitial(stream, lookaheadEnd)
          : lexerMode === LexerMode.IMM_STRING_VALUE_0
          ? nextTokenImmStringValue0(stream, lookaheadEnd)
          : nextTokenImmStringValue1(stream, lookaheadEnd);
      lookahead = res.state;
      lookaheadStart = res.start;
      lookaheadEnd = res.end;
    } else {
      if (actionLookup === 0xffff) {
        if (
          wf[lookahead] !== 0 &&
          actions[(currentState << 7) + 55] !== 0xffff
        ) {
          lookahead = 55;
          continue;
        }

        const errLen = lookaheadEnd - lookaheadStart;
        const errSpan =
          lookaheadEnd === -1
            ? -1
            : (lookaheadEnd & 0x3fffff) |
              ((errLen < 1023 ? errLen : 1023) << 22);
        throwSyntaxError(
          stream,
          tree,
          tp,
          lookahead,
          errSpan,
          currentState << 7
        );
      }
      const reduceLen = actionLookup >>> 9;
      sp -= reduceLen;
      const rtopState = stackStates[sp];
      const rtopTp = stackTps[sp];
      const word0 = actionLookup >>> 1;
      tree[tp] = word0;
      tree[tp + 1] = rtopTp;
      const rawNextState = goto[(rtopState << 7) + (word0 & 0xff)];
      topState = rawNextState;
      sp += 1;
      if (sp >= stackCap) {
        stackCap <<= 1;
        const nextS = new Uint32Array(stackCap);
        nextS.set(stackStates);
        stackStates = nextS;
        const nextT = new Uint32Array(stackCap);
        nextT.set(stackTps);
        stackTps = nextT;
      }
      stackStates[sp] = topState;
      stackTps[sp] = tp;
    }
    tp += 2;
    if (tp >= treeCap - 2) {
      treeCap <<= 1;
      const nextTree = new Uint32Array(treeCap);
      nextTree.set(tree);
      tree = nextTree;
    }
  }
}

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
function parse(input) {
  const stream = typeof input === "string" ? Buffer.from(input) : input;

  lexerSp = 0;
  lexerStack[0] = LexerMode.INITIAL;
  lexerMode = LexerMode.INITIAL;

  const firstRes = nextTokenInitial(stream, 0);
  let lookahead = firstRes.state;
  let lookaheadStart = firstRes.start;
  const firstLen = firstRes.end - firstRes.start;
  let lookaheadSpan =
    firstRes.end | ((firstLen < 1023 ? firstLen : 1023) << 22);

  const stack = arena.stack;
  const tree = arena.tree;
  const actions = actionsTable;
  const goto = gotoTable;
  const sa = shiftActionsTable;
  const wf = wordFallbackTable;
  if (stream.length >>> 1 <= tree.length) {
    let top = 0; // starting state
    stack[0] = top;
    let sp = 0;
    // let the tree stack start from offset 2
    // offset 0 means an error occurred and should be used by the parser
    let tp = 2;
    let prevEnd = 0;

    while (true) {
      const currentState = top >>> 23;

      const actionIndex = (currentState << 7) + lookahead;
      const actionLookup = actions[actionIndex];
      if ((actionLookup & 1) === 0) {
        // shift
        if (actionLookup === 0xfffe) {
          if (prevEnd < stream.length) {
            const rootPtr = tp - 2;
            let remStart = prevEnd;
            const endPos = stream.length;
            const needed = (Math.ceil((endPos - remStart) / 1023) + 1) * 2;
            if (tp + needed >= tree.length - 1) {
              break;
            }
            let chunks = 0;
            while (remStart < endPos) {
              const chunkLen =
                endPos - remStart > 1023 ? 1023 : endPos - remStart;
              const chunkEnd = remStart + chunkLen;
              tree[tp] = 60;
              tree[tp + 1] = chunkEnd | (chunkLen << 22);
              tp += 2;
              remStart = chunkEnd;
              chunks++;
            }
            tree[tp] = (tree[rootPtr] & 0xff) | ((1 + chunks) << 8);
            tree[tp + 1] = 0;
            tp += 2;
          }

          tree[1] = tp - 2;
          return new CstNode(stream, tree, tp - 2);
        }

        const shiftAction = sa[actionIndex];
        if (shiftAction !== 0) {
          switch (shiftAction) {
            case 1:
              lexer.push(LexerMode.IMM_STRING_VALUE_0);
              break;
            case 2:
              lexer.push(LexerMode.IMM_STRING_VALUE_1);
              break;
            case 3:
              lexer.pop();
              break;
          }
        }

        const tokEnd = lookaheadSpan & 0x3fffff;
        const tokStart = lookaheadStart;
        if (tokStart === prevEnd && tokEnd - tokStart <= 1023) {
          tree[tp] = lookahead;
          tree[tp + 1] = lookaheadSpan;
          sp += 1;
          top = tp | (actionLookup << 22);
          stack[sp] = top;
          prevEnd = tokEnd;
        } else {
          const triviaChunks =
            tokStart > prevEnd ? Math.ceil((tokStart - prevEnd) / 1023) : 0;
          const tokChunks = Math.ceil((tokEnd - tokStart) / 1023) || 1;
          if (tp + (triviaChunks + tokChunks + 1) * 2 >= tree.length - 1) {
            break;
          }
          let nLeaves = 0;
          let cur = prevEnd;
          while (cur < tokStart) {
            const cLen = tokStart - cur > 1023 ? 1023 : tokStart - cur;
            const cEnd = cur + cLen;
            tree[tp] = 60;
            tree[tp + 1] = cEnd | (cLen << 22);
            tp += 2;
            cur = cEnd;
            nLeaves++;
          }
          cur = tokStart;
          do {
            const cLen = tokEnd - cur > 1023 ? 1023 : tokEnd - cur;
            const cEnd = cur + cLen;
            tree[tp] = lookahead;
            tree[tp + 1] = cEnd | (cLen << 22);
            tp += 2;
            cur = cEnd;
            nLeaves++;
          } while (cur < tokEnd);
          tree[tp] = lookahead | (nLeaves << 8);
          tree[tp + 1] = top;
          sp += 1;
          top = tp | (actionLookup << 22);
          stack[sp] = top;
          prevEnd = tokEnd;
        }

        if (lexerMode === LexerMode.INITIAL) {
          const res = nextTokenInitial(stream, lookaheadSpan & 0x3fffff);
          lookahead = res.state;
          lookaheadStart = res.start;
          const tokLen = res.end - res.start;
          lookaheadSpan = res.end | ((tokLen < 1023 ? tokLen : 1023) << 22);
        } else if (lexerMode === LexerMode.IMM_STRING_VALUE_0) {
          const res = nextTokenImmStringValue0(
            stream,
            lookaheadSpan & 0x3fffff
          );
          lookahead = res.state;
          lookaheadStart = res.start;
          const tokLen = res.end - res.start;
          lookaheadSpan = res.end | ((tokLen < 1023 ? tokLen : 1023) << 22);
        } else {
          const res = nextTokenImmStringValue1(
            stream,
            lookaheadSpan & 0x3fffff
          );
          lookahead = res.state;
          lookaheadStart = res.start;
          const tokLen = res.end - res.start;
          lookaheadSpan = res.end | ((tokLen < 1023 ? tokLen : 1023) << 22);
        }
      } else {
        // reduce
        if (actionLookup === 0xffff) {
          if (
            wf[lookahead] !== 0 &&
            actions[(currentState << 7) + 55] !== 0xffff
          ) {
            lookahead = 55;
            continue;
          }

          throwSyntaxError(
            stream,
            tree,
            tp,
            lookahead,
            lookaheadSpan,
            currentState << 7
          );
        }
        sp -= actionLookup >>> 9;
        const rtop = stack[sp] | 0;
        const word0 = actionLookup >>> 1;
        tree[tp] = word0; // name and number of children
        const nextState = goto[((rtop >>> 23) << 7) + (word0 & 0xff)];
        tree[tp + 1] = rtop; // prevSibling / subtreeStart - 2

        sp += 1;
        top = tp | (nextState << 23);
        stack[sp] = top;
      }

      tp += 2;
      if (tp >= tree.length - 1) {
        break;
      }
    }
  }

  if (stream.length >= 0x3fffff) {
    return parseLarge(stream);
  }
  let len = tree.length << 1;
  while (len < stream.length >>> 1) {
    len <<= 1;
  }
  if (len > 8388608) {
    return parseLarge(stream);
  }
  const nextStack = new Uint32Array(Math.max(stack.length, len >>> 1));
  const nextTree = new Uint32Array(len);
  delete arena.stack;
  delete arena.tree;
  arena.stack = nextStack;
  arena.tree = nextTree;
  Object.create(arena);
  return parse(input);
}

export { parse, CstNode, TreeCursor, LineIndex, SymbolIds, reemitLossless };
