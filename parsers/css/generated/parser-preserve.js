// @ts-nocheck

import { next as nextTokenInitial } from "./lexer-preserve-initial.js";
import { next as nextTokenImmStringValue0 } from "./lexer-preserve-imm_string_value_0.js";
import { next as nextTokenImmStringValue1 } from "./lexer-preserve-imm_string_value_1.js";

/*
      stylesheet := declaration;
stylesheet := stylesheet declaration;
stylesheet := rule_set;
stylesheet := stylesheet rule_set;
stylesheet := import_statement;
stylesheet := stylesheet import_statement;
stylesheet := media_statement;
stylesheet := stylesheet media_statement;
stylesheet := charset_statement;
stylesheet := stylesheet charset_statement;
stylesheet := namespace_statement;
stylesheet := stylesheet namespace_statement;
stylesheet := keyframes_statement;
stylesheet := stylesheet keyframes_statement;
stylesheet := supports_statement;
stylesheet := stylesheet supports_statement;
stylesheet := scope_statement;
stylesheet := stylesheet scope_statement;
stylesheet := at_rule;
stylesheet := stylesheet at_rule;
_import_statement_repeat1 := , _query;
_import_statement_repeat1 := _import_statement_repeat1 , _query;
import_statement := @import _value _query _import_statement_repeat1 ;;
import_statement := @import _value _query ;;
import_statement := @import _value ;;
media_statement := @media _query _import_statement_repeat1 block;
media_statement := @media _query block;
charset_statement := @charset _value ;;
namespace_statement := @namespace identifier string_value ;;
namespace_statement := @namespace identifier call_expression ;;
namespace_statement := @namespace string_value ;;
namespace_statement := @namespace call_expression ;;
keyframes_statement := @keyframes identifier keyframe_block_list;
keyframes_statement := _keyframes_statement_token1 identifier keyframe_block_list;
_keyframe_block_list_repeat2 := keyframe_block;
_keyframe_block_list_repeat2 := _keyframe_block_list_repeat2 keyframe_block;
keyframe_block_list := { _keyframe_block_list_repeat2 };
keyframe_block_list := { };
_keyframe_block_repeat3 := , from;
_keyframe_block_repeat3 := _keyframe_block_repeat3 , from;
_keyframe_block_repeat3 := , to;
_keyframe_block_repeat3 := _keyframe_block_repeat3 , to;
_keyframe_block_repeat3 := , integer_value;
_keyframe_block_repeat3 := _keyframe_block_repeat3 , integer_value;
keyframe_block := from _keyframe_block_repeat3 block;
keyframe_block := from block;
keyframe_block := to _keyframe_block_repeat3 block;
keyframe_block := to block;
keyframe_block := integer_value _keyframe_block_repeat3 block;
keyframe_block := integer_value block;
supports_statement := @supports _query block;
scope_statement := @scope ( _selector ) to ( _selector ) block;
scope_statement := @scope ( _selector ) block;
scope_statement := @scope block;
_postcss_statement_repeat4 := _value;
_postcss_statement_repeat4 := _postcss_statement_repeat4 _value;
_postcss_statement_repeat4 := important_value;
_postcss_statement_repeat4 := _postcss_statement_repeat4 important_value;
postcss_statement := at_keyword _postcss_statement_repeat4 ;;
postcss_statement := at_keyword ;;
at_rule := at_keyword _query _import_statement_repeat1 ;;
at_rule := at_keyword _query _import_statement_repeat1 block;
at_rule := at_keyword _query ;;
at_rule := at_keyword _query block;
at_rule := at_keyword ;;
at_rule := at_keyword block;
rule_set := selectors block;
_selectors_repeat5 := , _selector;
_selectors_repeat5 := _selectors_repeat5 , _selector;
selectors := _selector _selectors_repeat5;
selectors := _selector;
_block_repeat6 := declaration;
_block_repeat6 := _block_repeat6 declaration;
_block_repeat6 := rule_set;
_block_repeat6 := _block_repeat6 rule_set;
_block_repeat6 := import_statement;
_block_repeat6 := _block_repeat6 import_statement;
_block_repeat6 := media_statement;
_block_repeat6 := _block_repeat6 media_statement;
_block_repeat6 := charset_statement;
_block_repeat6 := _block_repeat6 charset_statement;
_block_repeat6 := namespace_statement;
_block_repeat6 := _block_repeat6 namespace_statement;
_block_repeat6 := keyframes_statement;
_block_repeat6 := _block_repeat6 keyframes_statement;
_block_repeat6 := supports_statement;
_block_repeat6 := _block_repeat6 supports_statement;
_block_repeat6 := scope_statement;
_block_repeat6 := _block_repeat6 scope_statement;
_block_repeat6 := postcss_statement;
_block_repeat6 := _block_repeat6 postcss_statement;
_block_repeat6 := at_rule;
_block_repeat6 := _block_repeat6 at_rule;
block := { _block_repeat6 last_declaration };
block := { _block_repeat6 };
block := { last_declaration };
block := { };
_selector := universal_selector;
_selector := identifier;
_selector := class_selector;
_selector := nesting_selector;
_selector := pseudo_class_selector;
_selector := pseudo_element_selector;
_selector := id_selector;
_selector := attribute_selector;
_selector := string_value;
_selector := child_selector;
_selector := descendant_selector;
_selector := sibling_selector;
_selector := adjacent_sibling_selector;
_selector := namespace_selector;
nesting_selector := &;
universal_selector := *;
class_selector := _selector . class_name;
class_selector := . class_name;
pseudo_class_selector := _selector : has pseudo_class_with_selector_arguments;
pseudo_class_selector := _selector : not pseudo_class_with_selector_arguments;
pseudo_class_selector := _selector : is pseudo_class_with_selector_arguments;
pseudo_class_selector := _selector : where pseudo_class_with_selector_arguments;
pseudo_class_selector := _selector : host pseudo_class_with_selector_arguments;
pseudo_class_selector := _selector : host-context pseudo_class_with_selector_arguments;
pseudo_class_selector := _selector : _nth_child_pseudo_class_selector;
pseudo_class_selector := _selector : class_name pseudo_class_arguments;
pseudo_class_selector := _selector : class_name;
pseudo_class_selector := _selector : host;
pseudo_class_selector := : has pseudo_class_with_selector_arguments;
pseudo_class_selector := : not pseudo_class_with_selector_arguments;
pseudo_class_selector := : is pseudo_class_with_selector_arguments;
pseudo_class_selector := : where pseudo_class_with_selector_arguments;
pseudo_class_selector := : host pseudo_class_with_selector_arguments;
pseudo_class_selector := : host-context pseudo_class_with_selector_arguments;
pseudo_class_selector := : _nth_child_pseudo_class_selector;
pseudo_class_selector := : class_name pseudo_class_arguments;
pseudo_class_selector := : class_name;
pseudo_class_selector := : host;
_nth_child_pseudo_class_selector := nth-child pseudo_class_nth_child_arguments;
_nth_child_pseudo_class_selector := nth-last-child pseudo_class_nth_child_arguments;
pseudo_element_selector := _selector :: identifier pseudo_element_arguments;
pseudo_element_selector := _selector :: identifier;
pseudo_element_selector := :: identifier pseudo_element_arguments;
pseudo_element_selector := :: identifier;
id_selector := _selector # identifier;
id_selector := # identifier;
attribute_selector := _selector [ identifier = _value ];
attribute_selector := _selector [ identifier ~= _value ];
attribute_selector := _selector [ identifier ^= _value ];
attribute_selector := _selector [ identifier |= _value ];
attribute_selector := _selector [ identifier *= _value ];
attribute_selector := _selector [ identifier $= _value ];
attribute_selector := _selector [ identifier ];
attribute_selector := _selector [ namespace_selector = _value ];
attribute_selector := _selector [ namespace_selector ~= _value ];
attribute_selector := _selector [ namespace_selector ^= _value ];
attribute_selector := _selector [ namespace_selector |= _value ];
attribute_selector := _selector [ namespace_selector *= _value ];
attribute_selector := _selector [ namespace_selector $= _value ];
attribute_selector := _selector [ namespace_selector ];
attribute_selector := [ identifier = _value ];
attribute_selector := [ identifier ~= _value ];
attribute_selector := [ identifier ^= _value ];
attribute_selector := [ identifier |= _value ];
attribute_selector := [ identifier *= _value ];
attribute_selector := [ identifier $= _value ];
attribute_selector := [ identifier ];
attribute_selector := [ namespace_selector = _value ];
attribute_selector := [ namespace_selector ~= _value ];
attribute_selector := [ namespace_selector ^= _value ];
attribute_selector := [ namespace_selector |= _value ];
attribute_selector := [ namespace_selector *= _value ];
attribute_selector := [ namespace_selector $= _value ];
attribute_selector := [ namespace_selector ];
child_selector := _selector > _selector;
child_selector := > _selector;
descendant_selector := _selector _selector;
sibling_selector := _selector ~ _selector;
sibling_selector := ~ _selector;
adjacent_sibling_selector := _selector + _selector;
adjacent_sibling_selector := + _selector;
namespace_selector := _selector | _selector;
namespace_selector := | _selector;
_pseudo_class_arguments_repeat7 := _value;
_pseudo_class_arguments_repeat7 := _pseudo_class_arguments_repeat7 _value;
_pseudo_class_arguments_repeat8 := , _selector;
_pseudo_class_arguments_repeat8 := _pseudo_class_arguments_repeat8 , _selector;
_pseudo_class_arguments_repeat8 := , _pseudo_class_arguments_repeat7;
_pseudo_class_arguments_repeat8 := _pseudo_class_arguments_repeat8 , _pseudo_class_arguments_repeat7;
pseudo_class_arguments := ( _selector _pseudo_class_arguments_repeat8 );
pseudo_class_arguments := ( _selector );
pseudo_class_arguments := ( _pseudo_class_arguments_repeat7 _pseudo_class_arguments_repeat8 );
pseudo_class_arguments := ( _pseudo_class_arguments_repeat7 );
pseudo_class_arguments := ( );
pseudo_class_with_selector_arguments := ( _selector _selectors_repeat5 );
pseudo_class_with_selector_arguments := ( _selector );
pseudo_class_with_selector_arguments := ( );
pseudo_class_nth_child_arguments := ( even of _selector );
pseudo_class_nth_child_arguments := ( even );
pseudo_class_nth_child_arguments := ( odd of _selector );
pseudo_class_nth_child_arguments := ( odd );
pseudo_class_nth_child_arguments := ( integer_value of _selector );
pseudo_class_nth_child_arguments := ( integer_value );
pseudo_class_nth_child_arguments := ( _nth_functional_notation of _selector );
pseudo_class_nth_child_arguments := ( _nth_functional_notation );
pseudo_element_arguments := ( _selector _pseudo_class_arguments_repeat8 );
pseudo_element_arguments := ( _selector );
pseudo_element_arguments := ( _pseudo_class_arguments_repeat7 _pseudo_class_arguments_repeat8 );
pseudo_element_arguments := ( _pseudo_class_arguments_repeat7 );
pseudo_element_arguments := ( );
_declaration_repeat9 := , _value;
_declaration_repeat9 := _declaration_repeat9 , _value;
_declaration_repeat9 := _value;
_declaration_repeat9 := _declaration_repeat9 _value;
declaration := identifier : _value _declaration_repeat9 important ;;
declaration := identifier : _value _declaration_repeat9 ;;
declaration := identifier : _value important ;;
declaration := identifier : _value ;;
last_declaration := identifier : _value _declaration_repeat9 important;
last_declaration := identifier : _value _declaration_repeat9;
last_declaration := identifier : _value important;
last_declaration := identifier : _value;
important := !important;
_query := identifier;
_query := feature_query;
_query := binary_query;
_query := unary_query;
_query := selector_query;
_query := parenthesized_query;
feature_query := ( identifier : _pseudo_class_arguments_repeat7 );
parenthesized_query := ( _query );
binary_query := _query and _query;
binary_query := _query or _query;
unary_query := not _query;
unary_query := only _query;
selector_query := selector ( _selector );
_value := identifier;
_value := plain_value;
_value := color_value;
_value := integer_value;
_value := float_value;
_value := string_value;
_value := grid_value;
_value := binary_expression;
_value := parenthesized_value;
_value := call_expression;
_value := important;
parenthesized_value := ( _value );
_string_value_repeat10 := _string_value_token2;
_string_value_repeat10 := _string_value_repeat10 _string_value_token2;
_string_value_repeat10 := escape_sequence;
_string_value_repeat10 := _string_value_repeat10 escape_sequence;
_string_value_repeat11 := _string_value_token3;
_string_value_repeat11 := _string_value_repeat11 _string_value_token3;
_string_value_repeat11 := escape_sequence;
_string_value_repeat11 := _string_value_repeat11 escape_sequence;
string_value := ' _string_value_repeat10 ';
string_value := ' ';
string_value := " _string_value_repeat11 ";
string_value := " ";
_grid_value_repeat12 := , _value;
_grid_value_repeat12 := _grid_value_repeat12 , _value;
grid_value := [ _value _grid_value_repeat12 ];
grid_value := [ _value ];
call_expression := identifier arguments;
binary_expression := _value + _value;
binary_expression := _value - _value;
binary_expression := _value * _value;
binary_expression := _value / _value;
_arguments_repeat13 := , _pseudo_class_arguments_repeat7;
_arguments_repeat13 := _arguments_repeat13 , _pseudo_class_arguments_repeat7;
_arguments_repeat13 := ; _pseudo_class_arguments_repeat7;
_arguments_repeat13 := _arguments_repeat13 ; _pseudo_class_arguments_repeat7;
arguments := ( _pseudo_class_arguments_repeat7 _arguments_repeat13 );
arguments := ( _pseudo_class_arguments_repeat7 );
arguments := ( );
_class_name_repeat14 := _class_name_token4;
_class_name_repeat14 := _class_name_repeat14 _class_name_token4;
_class_name_repeat14 := escape_sequence;
_class_name_repeat14 := _class_name_repeat14 escape_sequence;
class_name := identifier _class_name_repeat14;
class_name := identifier;
class_name := escape_sequence _class_name_repeat14;
class_name := escape_sequence;
      */

const parserSymbols = [
  "[", // 0
  "from", // 1
  "to", // 2
  ":", // 3
  "@import", // 4
  ",", // 5
  ";", // 6
  "@media", // 7
  "@charset", // 8
  "@namespace", // 9
  "@keyframes", // 10
  "{", // 11
  "}", // 12
  "@supports", // 13
  "@scope", // 14
  "(", // 15
  ")", // 16
  "&", // 17
  "*", // 18
  ".", // 19
  "has", // 20
  "not", // 21
  "is", // 22
  "where", // 23
  "host", // 24
  "host-context", // 25
  "nth-child", // 26
  "nth-last-child", // 27
  "::", // 28
  "#", // 29
  "=", // 30
  "~=", // 31
  "^=", // 32
  "|=", // 33
  "*=", // 34
  "$=", // 35
  "]", // 36
  ">", // 37
  "~", // 38
  "+", // 39
  "|", // 40
  "even", // 41
  "odd", // 42
  "of", // 43
  "!important", // 44
  "and", // 45
  "or", // 46
  "only", // 47
  "selector", // 48
  "'", // 49
  '"', // 50
  "-", // 51
  "/", // 52
  "_nth_functional_notation", // 53
  "color_value", // 54
  "escape_sequence", // 55
  "integer_value", // 56
  "float_value", // 57
  "identifier", // 58
  "at_keyword", // 59
  "plain_value", // 60
  "important_value", // 61
  "_keyframes_statement_token1", // 62
  "_string_value_token2", // 63
  "_string_value_token3", // 64
  "_class_name_token4", // 65
  "@par-gen.EOF", // 66
  "@par-gen.ERROR", // 67
  "comment", // 68
  "js_comment", // 69
  "S", // 70
  "stylesheet", // 71
  "_import_statement_repeat1", // 72
  "import_statement", // 73
  "media_statement", // 74
  "charset_statement", // 75
  "namespace_statement", // 76
  "keyframes_statement", // 77
  "_keyframe_block_list_repeat2", // 78
  "keyframe_block_list", // 79
  "_keyframe_block_repeat3", // 80
  "keyframe_block", // 81
  "supports_statement", // 82
  "scope_statement", // 83
  "_postcss_statement_repeat4", // 84
  "postcss_statement", // 85
  "at_rule", // 86
  "rule_set", // 87
  "_selectors_repeat5", // 88
  "selectors", // 89
  "_block_repeat6", // 90
  "block", // 91
  "_selector", // 92
  "nesting_selector", // 93
  "universal_selector", // 94
  "class_selector", // 95
  "pseudo_class_selector", // 96
  "_nth_child_pseudo_class_selector", // 97
  "pseudo_element_selector", // 98
  "id_selector", // 99
  "attribute_selector", // 100
  "child_selector", // 101
  "descendant_selector", // 102
  "sibling_selector", // 103
  "adjacent_sibling_selector", // 104
  "namespace_selector", // 105
  "_pseudo_class_arguments_repeat7", // 106
  "_pseudo_class_arguments_repeat8", // 107
  "pseudo_class_arguments", // 108
  "pseudo_class_with_selector_arguments", // 109
  "pseudo_class_nth_child_arguments", // 110
  "pseudo_element_arguments", // 111
  "_declaration_repeat9", // 112
  "declaration", // 113
  "last_declaration", // 114
  "important", // 115
  "_query", // 116
  "feature_query", // 117
  "parenthesized_query", // 118
  "binary_query", // 119
  "unary_query", // 120
  "selector_query", // 121
  "_value", // 122
  "parenthesized_value", // 123
  "_string_value_repeat10", // 124
  "_string_value_repeat11", // 125
  "string_value", // 126
  "_grid_value_repeat12", // 127
  "grid_value", // 128
  "call_expression", // 129
  "binary_expression", // 130
  "_arguments_repeat13", // 131
  "arguments", // 132
  "_class_name_repeat14", // 133
  "class_name", // 134
];

const SymbolNames = Object.freeze(parserSymbols);

const SymbolIds = Object.freeze({
  "[": 0,
  from: 1,
  to: 2,
  ":": 3,
  "@import": 4,
  ",": 5,
  ";": 6,
  "@media": 7,
  "@charset": 8,
  "@namespace": 9,
  "@keyframes": 10,
  "{": 11,
  "}": 12,
  "@supports": 13,
  "@scope": 14,
  "(": 15,
  ")": 16,
  "&": 17,
  "*": 18,
  ".": 19,
  has: 20,
  not: 21,
  is: 22,
  where: 23,
  host: 24,
  "host-context": 25,
  "nth-child": 26,
  "nth-last-child": 27,
  "::": 28,
  "#": 29,
  "=": 30,
  "~=": 31,
  "^=": 32,
  "|=": 33,
  "*=": 34,
  "$=": 35,
  "]": 36,
  ">": 37,
  "~": 38,
  "+": 39,
  "|": 40,
  even: 41,
  odd: 42,
  of: 43,
  "!important": 44,
  and: 45,
  or: 46,
  only: 47,
  selector: 48,
  "'": 49,
  '"': 50,
  "-": 51,
  "/": 52,
  _nth_functional_notation: 53,
  color_value: 54,
  escape_sequence: 55,
  integer_value: 56,
  float_value: 57,
  identifier: 58,
  at_keyword: 59,
  plain_value: 60,
  important_value: 61,
  _keyframes_statement_token1: 62,
  _string_value_token2: 63,
  _string_value_token3: 64,
  _class_name_token4: 65,
  "@par-gen.EOF": 66,
  "@par-gen.ERROR": 67,
  comment: 68,
  js_comment: 69,
  S: 70,
  stylesheet: 71,
  _import_statement_repeat1: 72,
  import_statement: 73,
  media_statement: 74,
  charset_statement: 75,
  namespace_statement: 76,
  keyframes_statement: 77,
  _keyframe_block_list_repeat2: 78,
  keyframe_block_list: 79,
  _keyframe_block_repeat3: 80,
  keyframe_block: 81,
  supports_statement: 82,
  scope_statement: 83,
  _postcss_statement_repeat4: 84,
  postcss_statement: 85,
  at_rule: 86,
  rule_set: 87,
  _selectors_repeat5: 88,
  selectors: 89,
  _block_repeat6: 90,
  block: 91,
  _selector: 92,
  nesting_selector: 93,
  universal_selector: 94,
  class_selector: 95,
  pseudo_class_selector: 96,
  _nth_child_pseudo_class_selector: 97,
  pseudo_element_selector: 98,
  id_selector: 99,
  attribute_selector: 100,
  child_selector: 101,
  descendant_selector: 102,
  sibling_selector: 103,
  adjacent_sibling_selector: 104,
  namespace_selector: 105,
  _pseudo_class_arguments_repeat7: 106,
  _pseudo_class_arguments_repeat8: 107,
  pseudo_class_arguments: 108,
  pseudo_class_with_selector_arguments: 109,
  pseudo_class_nth_child_arguments: 110,
  pseudo_element_arguments: 111,
  _declaration_repeat9: 112,
  declaration: 113,
  last_declaration: 114,
  important: 115,
  _query: 116,
  feature_query: 117,
  parenthesized_query: 118,
  binary_query: 119,
  unary_query: 120,
  selector_query: 121,
  _value: 122,
  parenthesized_value: 123,
  _string_value_repeat10: 124,
  _string_value_repeat11: 125,
  string_value: 126,
  _grid_value_repeat12: 127,
  grid_value: 128,
  call_expression: 129,
  binary_expression: 130,
  _arguments_repeat13: 131,
  arguments: 132,
  _class_name_repeat14: 133,
  class_name: 134,
});

const actionsTable = new Uint16Array(34896).fill(0xffff);
actionsTable[0] = 2; // 'state 0' -> [ -> shift (target=1, len=0)
actionsTable[3] = 4; // 'state 0' -> : -> shift (target=2, len=0)
actionsTable[4] = 6; // 'state 0' -> @import -> shift (target=3, len=0)
actionsTable[7] = 8; // 'state 0' -> @media -> shift (target=4, len=0)
actionsTable[8] = 10; // 'state 0' -> @charset -> shift (target=5, len=0)
actionsTable[9] = 12; // 'state 0' -> @namespace -> shift (target=6, len=0)
actionsTable[10] = 258; // 'state 0' -> @keyframes -> shift (target=129, len=0)
actionsTable[13] = 14; // 'state 0' -> @supports -> shift (target=7, len=0)
actionsTable[14] = 16; // 'state 0' -> @scope -> shift (target=8, len=0)
actionsTable[17] = 260; // 'state 0' -> & -> shift (target=130, len=0)
actionsTable[18] = 262; // 'state 0' -> * -> shift (target=131, len=0)
actionsTable[19] = 18; // 'state 0' -> . -> shift (target=9, len=0)
actionsTable[28] = 264; // 'state 0' -> :: -> shift (target=132, len=0)
actionsTable[29] = 266; // 'state 0' -> # -> shift (target=133, len=0)
actionsTable[37] = 20; // 'state 0' -> > -> shift (target=10, len=0)
actionsTable[38] = 22; // 'state 0' -> ~ -> shift (target=11, len=0)
actionsTable[39] = 24; // 'state 0' -> + -> shift (target=12, len=0)
actionsTable[40] = 26; // 'state 0' -> | -> shift (target=13, len=0)
actionsTable[49] = 28; // 'state 0' -> ' -> shift (target=14, len=0)
actionsTable[50] = 30; // 'state 0' -> " -> shift (target=15, len=0)
actionsTable[58] = 268; // 'state 0' -> identifier -> shift (target=134, len=0)
actionsTable[59] = 32; // 'state 0' -> at_keyword -> shift (target=16, len=0)
actionsTable[62] = 258; // 'state 0' -> _keyframes_statement_token1 -> shift (target=129, len=0)
actionsTable[128] = 2; // 'state 1' -> [ -> shift (target=1, len=0)
actionsTable[131] = 4; // 'state 1' -> : -> shift (target=2, len=0)
actionsTable[145] = 260; // 'state 1' -> & -> shift (target=130, len=0)
actionsTable[146] = 262; // 'state 1' -> * -> shift (target=131, len=0)
actionsTable[147] = 18; // 'state 1' -> . -> shift (target=9, len=0)
actionsTable[156] = 264; // 'state 1' -> :: -> shift (target=132, len=0)
actionsTable[157] = 266; // 'state 1' -> # -> shift (target=133, len=0)
actionsTable[165] = 20; // 'state 1' -> > -> shift (target=10, len=0)
actionsTable[166] = 22; // 'state 1' -> ~ -> shift (target=11, len=0)
actionsTable[167] = 24; // 'state 1' -> + -> shift (target=12, len=0)
actionsTable[168] = 26; // 'state 1' -> | -> shift (target=13, len=0)
actionsTable[177] = 28; // 'state 1' -> ' -> shift (target=14, len=0)
actionsTable[178] = 30; // 'state 1' -> " -> shift (target=15, len=0)
actionsTable[186] = 308; // 'state 1' -> identifier -> shift (target=154, len=0)
actionsTable.fill(88, 276, 280); // 'state 2' -> has..where -> shift (target=44, len=0)
actionsTable[280] = 90; // 'state 2' -> host -> shift (target=45, len=0)
actionsTable[281] = 88; // 'state 2' -> host-context -> shift (target=44, len=0)
actionsTable.fill(92, 282, 284); // 'state 2' -> nth-child..nth-last-child -> shift (target=46, len=0)
actionsTable[311] = 86; // 'state 2' -> escape_sequence -> shift (target=43, len=0)
actionsTable[314] = 86; // 'state 2' -> identifier -> shift (target=43, len=0)
actionsTable[384] = 44; // 'state 3' -> [ -> shift (target=22, len=0)
actionsTable[399] = 46; // 'state 3' -> ( -> shift (target=23, len=0)
actionsTable[428] = 278; // 'state 3' -> !important -> shift (target=139, len=0)
actionsTable[433] = 28; // 'state 3' -> ' -> shift (target=14, len=0)
actionsTable[434] = 30; // 'state 3' -> " -> shift (target=15, len=0)
actionsTable[438] = 280; // 'state 3' -> color_value -> shift (target=140, len=0)
actionsTable.fill(280, 440, 442); // 'state 3' -> integer_value..float_value -> shift (target=140, len=0)
actionsTable[442] = 48; // 'state 3' -> identifier -> shift (target=24, len=0)
actionsTable[444] = 280; // 'state 3' -> plain_value -> shift (target=140, len=0)
actionsTable[527] = 52; // 'state 4' -> ( -> shift (target=26, len=0)
actionsTable[533] = 54; // 'state 4' -> not -> shift (target=27, len=0)
actionsTable[559] = 54; // 'state 4' -> only -> shift (target=27, len=0)
actionsTable[560] = 282; // 'state 4' -> selector -> shift (target=141, len=0)
actionsTable[570] = 284; // 'state 4' -> identifier -> shift (target=142, len=0)
actionsTable[640] = 44; // 'state 5' -> [ -> shift (target=22, len=0)
actionsTable[655] = 46; // 'state 5' -> ( -> shift (target=23, len=0)
actionsTable[684] = 278; // 'state 5' -> !important -> shift (target=139, len=0)
actionsTable[689] = 28; // 'state 5' -> ' -> shift (target=14, len=0)
actionsTable[690] = 30; // 'state 5' -> " -> shift (target=15, len=0)
actionsTable[694] = 280; // 'state 5' -> color_value -> shift (target=140, len=0)
actionsTable.fill(280, 696, 698); // 'state 5' -> integer_value..float_value -> shift (target=140, len=0)
actionsTable[698] = 48; // 'state 5' -> identifier -> shift (target=24, len=0)
actionsTable[700] = 280; // 'state 5' -> plain_value -> shift (target=140, len=0)
actionsTable[817] = 28; // 'state 6' -> ' -> shift (target=14, len=0)
actionsTable[818] = 30; // 'state 6' -> " -> shift (target=15, len=0)
actionsTable[826] = 58; // 'state 6' -> identifier -> shift (target=29, len=0)
actionsTable[911] = 52; // 'state 7' -> ( -> shift (target=26, len=0)
actionsTable[917] = 54; // 'state 7' -> not -> shift (target=27, len=0)
actionsTable[943] = 54; // 'state 7' -> only -> shift (target=27, len=0)
actionsTable[944] = 282; // 'state 7' -> selector -> shift (target=141, len=0)
actionsTable[954] = 284; // 'state 7' -> identifier -> shift (target=142, len=0)
actionsTable[1035] = 42; // 'state 8' -> { -> shift (target=21, len=0)
actionsTable[1039] = 64; // 'state 8' -> ( -> shift (target=32, len=0)
actionsTable[1207] = 86; // 'state 9' -> escape_sequence -> shift (target=43, len=0)
actionsTable[1210] = 86; // 'state 9' -> identifier -> shift (target=43, len=0)
actionsTable[1280] = 2; // 'state 10' -> [ -> shift (target=1, len=0)
actionsTable[1283] = 4; // 'state 10' -> : -> shift (target=2, len=0)
actionsTable[1297] = 260; // 'state 10' -> & -> shift (target=130, len=0)
actionsTable[1298] = 262; // 'state 10' -> * -> shift (target=131, len=0)
actionsTable[1299] = 18; // 'state 10' -> . -> shift (target=9, len=0)
actionsTable[1308] = 264; // 'state 10' -> :: -> shift (target=132, len=0)
actionsTable[1309] = 266; // 'state 10' -> # -> shift (target=133, len=0)
actionsTable[1317] = 20; // 'state 10' -> > -> shift (target=10, len=0)
actionsTable[1318] = 22; // 'state 10' -> ~ -> shift (target=11, len=0)
actionsTable[1319] = 24; // 'state 10' -> + -> shift (target=12, len=0)
actionsTable[1320] = 26; // 'state 10' -> | -> shift (target=13, len=0)
actionsTable[1329] = 28; // 'state 10' -> ' -> shift (target=14, len=0)
actionsTable[1330] = 30; // 'state 10' -> " -> shift (target=15, len=0)
actionsTable[1338] = 272; // 'state 10' -> identifier -> shift (target=136, len=0)
actionsTable[1408] = 2; // 'state 11' -> [ -> shift (target=1, len=0)
actionsTable[1411] = 4; // 'state 11' -> : -> shift (target=2, len=0)
actionsTable[1425] = 260; // 'state 11' -> & -> shift (target=130, len=0)
actionsTable[1426] = 262; // 'state 11' -> * -> shift (target=131, len=0)
actionsTable[1427] = 18; // 'state 11' -> . -> shift (target=9, len=0)
actionsTable[1436] = 264; // 'state 11' -> :: -> shift (target=132, len=0)
actionsTable[1437] = 266; // 'state 11' -> # -> shift (target=133, len=0)
actionsTable[1445] = 20; // 'state 11' -> > -> shift (target=10, len=0)
actionsTable[1446] = 22; // 'state 11' -> ~ -> shift (target=11, len=0)
actionsTable[1447] = 24; // 'state 11' -> + -> shift (target=12, len=0)
actionsTable[1448] = 26; // 'state 11' -> | -> shift (target=13, len=0)
actionsTable[1457] = 28; // 'state 11' -> ' -> shift (target=14, len=0)
actionsTable[1458] = 30; // 'state 11' -> " -> shift (target=15, len=0)
actionsTable[1466] = 272; // 'state 11' -> identifier -> shift (target=136, len=0)
actionsTable[1536] = 2; // 'state 12' -> [ -> shift (target=1, len=0)
actionsTable[1539] = 4; // 'state 12' -> : -> shift (target=2, len=0)
actionsTable[1553] = 260; // 'state 12' -> & -> shift (target=130, len=0)
actionsTable[1554] = 262; // 'state 12' -> * -> shift (target=131, len=0)
actionsTable[1555] = 18; // 'state 12' -> . -> shift (target=9, len=0)
actionsTable[1564] = 264; // 'state 12' -> :: -> shift (target=132, len=0)
actionsTable[1565] = 266; // 'state 12' -> # -> shift (target=133, len=0)
actionsTable[1573] = 20; // 'state 12' -> > -> shift (target=10, len=0)
actionsTable[1574] = 22; // 'state 12' -> ~ -> shift (target=11, len=0)
actionsTable[1575] = 24; // 'state 12' -> + -> shift (target=12, len=0)
actionsTable[1576] = 26; // 'state 12' -> | -> shift (target=13, len=0)
actionsTable[1585] = 28; // 'state 12' -> ' -> shift (target=14, len=0)
actionsTable[1586] = 30; // 'state 12' -> " -> shift (target=15, len=0)
actionsTable[1594] = 272; // 'state 12' -> identifier -> shift (target=136, len=0)
actionsTable[1664] = 2; // 'state 13' -> [ -> shift (target=1, len=0)
actionsTable[1667] = 4; // 'state 13' -> : -> shift (target=2, len=0)
actionsTable[1681] = 260; // 'state 13' -> & -> shift (target=130, len=0)
actionsTable[1682] = 262; // 'state 13' -> * -> shift (target=131, len=0)
actionsTable[1683] = 18; // 'state 13' -> . -> shift (target=9, len=0)
actionsTable[1692] = 264; // 'state 13' -> :: -> shift (target=132, len=0)
actionsTable[1693] = 266; // 'state 13' -> # -> shift (target=133, len=0)
actionsTable[1701] = 20; // 'state 13' -> > -> shift (target=10, len=0)
actionsTable[1702] = 22; // 'state 13' -> ~ -> shift (target=11, len=0)
actionsTable[1703] = 24; // 'state 13' -> + -> shift (target=12, len=0)
actionsTable[1704] = 26; // 'state 13' -> | -> shift (target=13, len=0)
actionsTable[1713] = 28; // 'state 13' -> ' -> shift (target=14, len=0)
actionsTable[1714] = 30; // 'state 13' -> " -> shift (target=15, len=0)
actionsTable[1722] = 272; // 'state 13' -> identifier -> shift (target=136, len=0)
actionsTable[1841] = 310; // 'state 14' -> ' -> shift (target=155, len=0)
actionsTable[1847] = 312; // 'state 14' -> escape_sequence -> shift (target=156, len=0)
actionsTable[1855] = 312; // 'state 14' -> _string_value_token2 -> shift (target=156, len=0)
actionsTable[1970] = 310; // 'state 15' -> " -> shift (target=155, len=0)
actionsTable[1975] = 316; // 'state 15' -> escape_sequence -> shift (target=158, len=0)
actionsTable[1984] = 316; // 'state 15' -> _string_value_token3 -> shift (target=158, len=0)
actionsTable[2054] = 292; // 'state 16' -> ; -> shift (target=146, len=0)
actionsTable[2059] = 42; // 'state 16' -> { -> shift (target=21, len=0)
actionsTable[2063] = 52; // 'state 16' -> ( -> shift (target=26, len=0)
actionsTable[2069] = 54; // 'state 16' -> not -> shift (target=27, len=0)
actionsTable[2095] = 54; // 'state 16' -> only -> shift (target=27, len=0)
actionsTable[2096] = 282; // 'state 16' -> selector -> shift (target=141, len=0)
actionsTable[2106] = 284; // 'state 16' -> identifier -> shift (target=142, len=0)
actionsTable[2176] = 2; // 'state 17' -> [ -> shift (target=1, len=0)
actionsTable[2179] = 4; // 'state 17' -> : -> shift (target=2, len=0)
actionsTable[2180] = 6; // 'state 17' -> @import -> shift (target=3, len=0)
actionsTable[2183] = 8; // 'state 17' -> @media -> shift (target=4, len=0)
actionsTable[2184] = 10; // 'state 17' -> @charset -> shift (target=5, len=0)
actionsTable[2185] = 12; // 'state 17' -> @namespace -> shift (target=6, len=0)
actionsTable[2186] = 258; // 'state 17' -> @keyframes -> shift (target=129, len=0)
actionsTable[2189] = 14; // 'state 17' -> @supports -> shift (target=7, len=0)
actionsTable[2190] = 16; // 'state 17' -> @scope -> shift (target=8, len=0)
actionsTable[2193] = 260; // 'state 17' -> & -> shift (target=130, len=0)
actionsTable[2194] = 262; // 'state 17' -> * -> shift (target=131, len=0)
actionsTable[2195] = 18; // 'state 17' -> . -> shift (target=9, len=0)
actionsTable[2204] = 264; // 'state 17' -> :: -> shift (target=132, len=0)
actionsTable[2205] = 266; // 'state 17' -> # -> shift (target=133, len=0)
actionsTable[2213] = 20; // 'state 17' -> > -> shift (target=10, len=0)
actionsTable[2214] = 22; // 'state 17' -> ~ -> shift (target=11, len=0)
actionsTable[2215] = 24; // 'state 17' -> + -> shift (target=12, len=0)
actionsTable[2216] = 26; // 'state 17' -> | -> shift (target=13, len=0)
actionsTable[2225] = 28; // 'state 17' -> ' -> shift (target=14, len=0)
actionsTable[2226] = 30; // 'state 17' -> " -> shift (target=15, len=0)
actionsTable[2234] = 268; // 'state 17' -> identifier -> shift (target=134, len=0)
actionsTable[2235] = 32; // 'state 17' -> at_keyword -> shift (target=16, len=0)
actionsTable[2238] = 258; // 'state 17' -> _keyframes_statement_token1 -> shift (target=129, len=0)
actionsTable[2242] = 65534; // 'state 17' -> @par-gen.EOF -> done (target=0, len=0)
actionsTable[2315] = 42; // 'state 18' -> { -> shift (target=21, len=0)
actionsTable[2432] = 68; // 'state 19' -> [ -> shift (target=34, len=0)
actionsTable[2435] = 70; // 'state 19' -> : -> shift (target=35, len=0)
actionsTable[2437] = 72; // 'state 19' -> , -> shift (target=36, len=0)
actionsTable[2443] = 691; // 'state 19' -> { -> reduce (target=89, len=1)
actionsTable[2449] = 260; // 'state 19' -> & -> shift (target=130, len=0)
actionsTable[2450] = 262; // 'state 19' -> * -> shift (target=131, len=0)
actionsTable[2451] = 74; // 'state 19' -> . -> shift (target=37, len=0)
actionsTable[2460] = 296; // 'state 19' -> :: -> shift (target=148, len=0)
actionsTable[2461] = 298; // 'state 19' -> # -> shift (target=149, len=0)
actionsTable[2469] = 76; // 'state 19' -> > -> shift (target=38, len=0)
actionsTable[2470] = 78; // 'state 19' -> ~ -> shift (target=39, len=0)
actionsTable[2471] = 80; // 'state 19' -> + -> shift (target=40, len=0)
actionsTable[2472] = 82; // 'state 19' -> | -> shift (target=41, len=0)
actionsTable[2481] = 28; // 'state 19' -> ' -> shift (target=14, len=0)
actionsTable[2482] = 30; // 'state 19' -> " -> shift (target=15, len=0)
actionsTable[2490] = 272; // 'state 19' -> identifier -> shift (target=136, len=0)
actionsTable[2560] = 44; // 'state 20' -> [ -> shift (target=22, len=0)
actionsTable[2575] = 46; // 'state 20' -> ( -> shift (target=23, len=0)
actionsTable[2604] = 278; // 'state 20' -> !important -> shift (target=139, len=0)
actionsTable[2609] = 28; // 'state 20' -> ' -> shift (target=14, len=0)
actionsTable[2610] = 30; // 'state 20' -> " -> shift (target=15, len=0)
actionsTable[2614] = 280; // 'state 20' -> color_value -> shift (target=140, len=0)
actionsTable.fill(280, 2616, 2618); // 'state 20' -> integer_value..float_value -> shift (target=140, len=0)
actionsTable[2618] = 48; // 'state 20' -> identifier -> shift (target=24, len=0)
actionsTable[2620] = 280; // 'state 20' -> plain_value -> shift (target=140, len=0)
actionsTable[2688] = 2; // 'state 21' -> [ -> shift (target=1, len=0)
actionsTable[2691] = 4; // 'state 21' -> : -> shift (target=2, len=0)
actionsTable[2692] = 6; // 'state 21' -> @import -> shift (target=3, len=0)
actionsTable[2695] = 8; // 'state 21' -> @media -> shift (target=4, len=0)
actionsTable[2696] = 10; // 'state 21' -> @charset -> shift (target=5, len=0)
actionsTable[2697] = 12; // 'state 21' -> @namespace -> shift (target=6, len=0)
actionsTable[2698] = 258; // 'state 21' -> @keyframes -> shift (target=129, len=0)
actionsTable[2700] = 320; // 'state 21' -> } -> shift (target=160, len=0)
actionsTable[2701] = 14; // 'state 21' -> @supports -> shift (target=7, len=0)
actionsTable[2702] = 16; // 'state 21' -> @scope -> shift (target=8, len=0)
actionsTable[2705] = 260; // 'state 21' -> & -> shift (target=130, len=0)
actionsTable[2706] = 262; // 'state 21' -> * -> shift (target=131, len=0)
actionsTable[2707] = 18; // 'state 21' -> . -> shift (target=9, len=0)
actionsTable[2716] = 264; // 'state 21' -> :: -> shift (target=132, len=0)
actionsTable[2717] = 266; // 'state 21' -> # -> shift (target=133, len=0)
actionsTable[2725] = 20; // 'state 21' -> > -> shift (target=10, len=0)
actionsTable[2726] = 22; // 'state 21' -> ~ -> shift (target=11, len=0)
actionsTable[2727] = 24; // 'state 21' -> + -> shift (target=12, len=0)
actionsTable[2728] = 26; // 'state 21' -> | -> shift (target=13, len=0)
actionsTable[2737] = 28; // 'state 21' -> ' -> shift (target=14, len=0)
actionsTable[2738] = 30; // 'state 21' -> " -> shift (target=15, len=0)
actionsTable[2746] = 322; // 'state 21' -> identifier -> shift (target=161, len=0)
actionsTable[2747] = 110; // 'state 21' -> at_keyword -> shift (target=55, len=0)
actionsTable[2750] = 258; // 'state 21' -> _keyframes_statement_token1 -> shift (target=129, len=0)
actionsTable[2816] = 44; // 'state 22' -> [ -> shift (target=22, len=0)
actionsTable[2831] = 46; // 'state 22' -> ( -> shift (target=23, len=0)
actionsTable[2860] = 278; // 'state 22' -> !important -> shift (target=139, len=0)
actionsTable[2865] = 28; // 'state 22' -> ' -> shift (target=14, len=0)
actionsTable[2866] = 30; // 'state 22' -> " -> shift (target=15, len=0)
actionsTable[2870] = 280; // 'state 22' -> color_value -> shift (target=140, len=0)
actionsTable.fill(280, 2872, 2874); // 'state 22' -> integer_value..float_value -> shift (target=140, len=0)
actionsTable[2874] = 48; // 'state 22' -> identifier -> shift (target=24, len=0)
actionsTable[2876] = 280; // 'state 22' -> plain_value -> shift (target=140, len=0)
actionsTable[2944] = 44; // 'state 23' -> [ -> shift (target=22, len=0)
actionsTable[2959] = 46; // 'state 23' -> ( -> shift (target=23, len=0)
actionsTable[2988] = 278; // 'state 23' -> !important -> shift (target=139, len=0)
actionsTable[2993] = 28; // 'state 23' -> ' -> shift (target=14, len=0)
actionsTable[2994] = 30; // 'state 23' -> " -> shift (target=15, len=0)
actionsTable[2998] = 280; // 'state 23' -> color_value -> shift (target=140, len=0)
actionsTable.fill(280, 3000, 3002); // 'state 23' -> integer_value..float_value -> shift (target=140, len=0)
actionsTable[3002] = 48; // 'state 23' -> identifier -> shift (target=24, len=0)
actionsTable[3004] = 280; // 'state 23' -> plain_value -> shift (target=140, len=0)
actionsTable[3072] = 757; // 'state 24' -> [ -> reduce (target=122, len=1)
actionsTable.fill(757, 3077, 3079); // 'state 24' -> ,..; -> reduce (target=122, len=1)
actionsTable[3084] = 757; // 'state 24' -> } -> reduce (target=122, len=1)
actionsTable[3087] = 118; // 'state 24' -> ( -> shift (target=59, len=0)
actionsTable[3088] = 757; // 'state 24' -> ) -> reduce (target=122, len=1)
actionsTable[3090] = 757; // 'state 24' -> * -> reduce (target=122, len=1)
actionsTable[3093] = 757; // 'state 24' -> not -> reduce (target=122, len=1)
actionsTable[3108] = 757; // 'state 24' -> ] -> reduce (target=122, len=1)
actionsTable[3111] = 757; // 'state 24' -> + -> reduce (target=122, len=1)
actionsTable[3116] = 757; // 'state 24' -> !important -> reduce (target=122, len=1)
actionsTable.fill(757, 3119, 3125); // 'state 24' -> only../ -> reduce (target=122, len=1)
actionsTable[3126] = 757; // 'state 24' -> color_value -> reduce (target=122, len=1)
actionsTable.fill(757, 3128, 3131); // 'state 24' -> integer_value..identifier -> reduce (target=122, len=1)
actionsTable.fill(757, 3132, 3134); // 'state 24' -> plain_value..important_value -> reduce (target=122, len=1)
actionsTable[3206] = 328; // 'state 25' -> ; -> shift (target=164, len=0)
actionsTable[3215] = 52; // 'state 25' -> ( -> shift (target=26, len=0)
actionsTable[3218] = 114; // 'state 25' -> * -> shift (target=57, len=0)
actionsTable[3221] = 54; // 'state 25' -> not -> shift (target=27, len=0)
actionsTable[3239] = 114; // 'state 25' -> + -> shift (target=57, len=0)
actionsTable[3247] = 54; // 'state 25' -> only -> shift (target=27, len=0)
actionsTable[3248] = 282; // 'state 25' -> selector -> shift (target=141, len=0)
actionsTable.fill(114, 3251, 3253); // 'state 25' -> -../ -> shift (target=57, len=0)
actionsTable[3258] = 284; // 'state 25' -> identifier -> shift (target=142, len=0)
actionsTable[3343] = 52; // 'state 26' -> ( -> shift (target=26, len=0)
actionsTable[3349] = 54; // 'state 26' -> not -> shift (target=27, len=0)
actionsTable[3375] = 54; // 'state 26' -> only -> shift (target=27, len=0)
actionsTable[3376] = 282; // 'state 26' -> selector -> shift (target=141, len=0)
actionsTable[3386] = 336; // 'state 26' -> identifier -> shift (target=168, len=0)
actionsTable[3471] = 52; // 'state 27' -> ( -> shift (target=26, len=0)
actionsTable[3477] = 54; // 'state 27' -> not -> shift (target=27, len=0)
actionsTable[3503] = 54; // 'state 27' -> only -> shift (target=27, len=0)
actionsTable[3504] = 282; // 'state 27' -> selector -> shift (target=141, len=0)
actionsTable[3514] = 284; // 'state 27' -> identifier -> shift (target=142, len=0)
actionsTable[3589] = 122; // 'state 28' -> , -> shift (target=61, len=0)
actionsTable[3595] = 42; // 'state 28' -> { -> shift (target=21, len=0)
actionsTable.fill(124, 3629, 3631); // 'state 28' -> and..or -> shift (target=62, len=0)
actionsTable[3727] = 118; // 'state 29' -> ( -> shift (target=59, len=0)
actionsTable[3761] = 28; // 'state 29' -> ' -> shift (target=14, len=0)
actionsTable[3762] = 30; // 'state 29' -> " -> shift (target=15, len=0)
actionsTable[3770] = 130; // 'state 29' -> identifier -> shift (target=65, len=0)
actionsTable[3851] = 132; // 'state 30' -> { -> shift (target=66, len=0)
actionsTable[3979] = 42; // 'state 31' -> { -> shift (target=21, len=0)
actionsTable.fill(124, 4013, 4015); // 'state 31' -> and..or -> shift (target=62, len=0)
actionsTable[4096] = 2; // 'state 32' -> [ -> shift (target=1, len=0)
actionsTable[4099] = 4; // 'state 32' -> : -> shift (target=2, len=0)
actionsTable[4113] = 260; // 'state 32' -> & -> shift (target=130, len=0)
actionsTable[4114] = 262; // 'state 32' -> * -> shift (target=131, len=0)
actionsTable[4115] = 18; // 'state 32' -> . -> shift (target=9, len=0)
actionsTable[4124] = 264; // 'state 32' -> :: -> shift (target=132, len=0)
actionsTable[4125] = 266; // 'state 32' -> # -> shift (target=133, len=0)
actionsTable[4133] = 20; // 'state 32' -> > -> shift (target=10, len=0)
actionsTable[4134] = 22; // 'state 32' -> ~ -> shift (target=11, len=0)
actionsTable[4135] = 24; // 'state 32' -> + -> shift (target=12, len=0)
actionsTable[4136] = 26; // 'state 32' -> | -> shift (target=13, len=0)
actionsTable[4145] = 28; // 'state 32' -> ' -> shift (target=14, len=0)
actionsTable[4146] = 30; // 'state 32' -> " -> shift (target=15, len=0)
actionsTable[4154] = 272; // 'state 32' -> identifier -> shift (target=136, len=0)
actionsTable[4229] = 122; // 'state 33' -> , -> shift (target=61, len=0)
actionsTable[4230] = 352; // 'state 33' -> ; -> shift (target=176, len=0)
actionsTable[4235] = 42; // 'state 33' -> { -> shift (target=21, len=0)
actionsTable.fill(124, 4269, 4271); // 'state 33' -> and..or -> shift (target=62, len=0)
actionsTable[4352] = 2; // 'state 34' -> [ -> shift (target=1, len=0)
actionsTable[4355] = 4; // 'state 34' -> : -> shift (target=2, len=0)
actionsTable[4369] = 260; // 'state 34' -> & -> shift (target=130, len=0)
actionsTable[4370] = 262; // 'state 34' -> * -> shift (target=131, len=0)
actionsTable[4371] = 18; // 'state 34' -> . -> shift (target=9, len=0)
actionsTable[4380] = 264; // 'state 34' -> :: -> shift (target=132, len=0)
actionsTable[4381] = 266; // 'state 34' -> # -> shift (target=133, len=0)
actionsTable[4389] = 20; // 'state 34' -> > -> shift (target=10, len=0)
actionsTable[4390] = 22; // 'state 34' -> ~ -> shift (target=11, len=0)
actionsTable[4391] = 24; // 'state 34' -> + -> shift (target=12, len=0)
actionsTable[4392] = 26; // 'state 34' -> | -> shift (target=13, len=0)
actionsTable[4401] = 28; // 'state 34' -> ' -> shift (target=14, len=0)
actionsTable[4402] = 30; // 'state 34' -> " -> shift (target=15, len=0)
actionsTable[4410] = 360; // 'state 34' -> identifier -> shift (target=180, len=0)
actionsTable.fill(142, 4500, 4504); // 'state 35' -> has..where -> shift (target=71, len=0)
actionsTable[4504] = 144; // 'state 35' -> host -> shift (target=72, len=0)
actionsTable[4505] = 142; // 'state 35' -> host-context -> shift (target=71, len=0)
actionsTable.fill(92, 4506, 4508); // 'state 35' -> nth-child..nth-last-child -> shift (target=46, len=0)
actionsTable[4535] = 86; // 'state 35' -> escape_sequence -> shift (target=43, len=0)
actionsTable[4538] = 86; // 'state 35' -> identifier -> shift (target=43, len=0)
actionsTable[4608] = 2; // 'state 36' -> [ -> shift (target=1, len=0)
actionsTable[4611] = 4; // 'state 36' -> : -> shift (target=2, len=0)
actionsTable[4625] = 260; // 'state 36' -> & -> shift (target=130, len=0)
actionsTable[4626] = 262; // 'state 36' -> * -> shift (target=131, len=0)
actionsTable[4627] = 18; // 'state 36' -> . -> shift (target=9, len=0)
actionsTable[4636] = 264; // 'state 36' -> :: -> shift (target=132, len=0)
actionsTable[4637] = 266; // 'state 36' -> # -> shift (target=133, len=0)
actionsTable[4645] = 20; // 'state 36' -> > -> shift (target=10, len=0)
actionsTable[4646] = 22; // 'state 36' -> ~ -> shift (target=11, len=0)
actionsTable[4647] = 24; // 'state 36' -> + -> shift (target=12, len=0)
actionsTable[4648] = 26; // 'state 36' -> | -> shift (target=13, len=0)
actionsTable[4657] = 28; // 'state 36' -> ' -> shift (target=14, len=0)
actionsTable[4658] = 30; // 'state 36' -> " -> shift (target=15, len=0)
actionsTable[4666] = 272; // 'state 36' -> identifier -> shift (target=136, len=0)
actionsTable[4791] = 86; // 'state 37' -> escape_sequence -> shift (target=43, len=0)
actionsTable[4794] = 86; // 'state 37' -> identifier -> shift (target=43, len=0)
actionsTable[4864] = 2; // 'state 38' -> [ -> shift (target=1, len=0)
actionsTable[4867] = 4; // 'state 38' -> : -> shift (target=2, len=0)
actionsTable[4881] = 260; // 'state 38' -> & -> shift (target=130, len=0)
actionsTable[4882] = 262; // 'state 38' -> * -> shift (target=131, len=0)
actionsTable[4883] = 18; // 'state 38' -> . -> shift (target=9, len=0)
actionsTable[4892] = 264; // 'state 38' -> :: -> shift (target=132, len=0)
actionsTable[4893] = 266; // 'state 38' -> # -> shift (target=133, len=0)
actionsTable[4901] = 20; // 'state 38' -> > -> shift (target=10, len=0)
actionsTable[4902] = 22; // 'state 38' -> ~ -> shift (target=11, len=0)
actionsTable[4903] = 24; // 'state 38' -> + -> shift (target=12, len=0)
actionsTable[4904] = 26; // 'state 38' -> | -> shift (target=13, len=0)
actionsTable[4913] = 28; // 'state 38' -> ' -> shift (target=14, len=0)
actionsTable[4914] = 30; // 'state 38' -> " -> shift (target=15, len=0)
actionsTable[4922] = 272; // 'state 38' -> identifier -> shift (target=136, len=0)
actionsTable[4992] = 2; // 'state 39' -> [ -> shift (target=1, len=0)
actionsTable[4995] = 4; // 'state 39' -> : -> shift (target=2, len=0)
actionsTable[5009] = 260; // 'state 39' -> & -> shift (target=130, len=0)
actionsTable[5010] = 262; // 'state 39' -> * -> shift (target=131, len=0)
actionsTable[5011] = 18; // 'state 39' -> . -> shift (target=9, len=0)
actionsTable[5020] = 264; // 'state 39' -> :: -> shift (target=132, len=0)
actionsTable[5021] = 266; // 'state 39' -> # -> shift (target=133, len=0)
actionsTable[5029] = 20; // 'state 39' -> > -> shift (target=10, len=0)
actionsTable[5030] = 22; // 'state 39' -> ~ -> shift (target=11, len=0)
actionsTable[5031] = 24; // 'state 39' -> + -> shift (target=12, len=0)
actionsTable[5032] = 26; // 'state 39' -> | -> shift (target=13, len=0)
actionsTable[5041] = 28; // 'state 39' -> ' -> shift (target=14, len=0)
actionsTable[5042] = 30; // 'state 39' -> " -> shift (target=15, len=0)
actionsTable[5050] = 272; // 'state 39' -> identifier -> shift (target=136, len=0)
actionsTable[5120] = 2; // 'state 40' -> [ -> shift (target=1, len=0)
actionsTable[5123] = 4; // 'state 40' -> : -> shift (target=2, len=0)
actionsTable[5137] = 260; // 'state 40' -> & -> shift (target=130, len=0)
actionsTable[5138] = 262; // 'state 40' -> * -> shift (target=131, len=0)
actionsTable[5139] = 18; // 'state 40' -> . -> shift (target=9, len=0)
actionsTable[5148] = 264; // 'state 40' -> :: -> shift (target=132, len=0)
actionsTable[5149] = 266; // 'state 40' -> # -> shift (target=133, len=0)
actionsTable[5157] = 20; // 'state 40' -> > -> shift (target=10, len=0)
actionsTable[5158] = 22; // 'state 40' -> ~ -> shift (target=11, len=0)
actionsTable[5159] = 24; // 'state 40' -> + -> shift (target=12, len=0)
actionsTable[5160] = 26; // 'state 40' -> | -> shift (target=13, len=0)
actionsTable[5169] = 28; // 'state 40' -> ' -> shift (target=14, len=0)
actionsTable[5170] = 30; // 'state 40' -> " -> shift (target=15, len=0)
actionsTable[5178] = 272; // 'state 40' -> identifier -> shift (target=136, len=0)
actionsTable[5248] = 2; // 'state 41' -> [ -> shift (target=1, len=0)
actionsTable[5251] = 4; // 'state 41' -> : -> shift (target=2, len=0)
actionsTable[5265] = 260; // 'state 41' -> & -> shift (target=130, len=0)
actionsTable[5266] = 262; // 'state 41' -> * -> shift (target=131, len=0)
actionsTable[5267] = 18; // 'state 41' -> . -> shift (target=9, len=0)
actionsTable[5276] = 264; // 'state 41' -> :: -> shift (target=132, len=0)
actionsTable[5277] = 266; // 'state 41' -> # -> shift (target=133, len=0)
actionsTable[5285] = 20; // 'state 41' -> > -> shift (target=10, len=0)
actionsTable[5286] = 22; // 'state 41' -> ~ -> shift (target=11, len=0)
actionsTable[5287] = 24; // 'state 41' -> + -> shift (target=12, len=0)
actionsTable[5288] = 26; // 'state 41' -> | -> shift (target=13, len=0)
actionsTable[5297] = 28; // 'state 41' -> ' -> shift (target=14, len=0)
actionsTable[5298] = 30; // 'state 41' -> " -> shift (target=15, len=0)
actionsTable[5306] = 272; // 'state 41' -> identifier -> shift (target=136, len=0)
actionsTable[5376] = 1229; // 'state 42' -> [ -> reduce (target=102, len=2)
actionsTable[5379] = 1229; // 'state 42' -> : -> reduce (target=102, len=2)
actionsTable[5381] = 1229; // 'state 42' -> , -> reduce (target=102, len=2)
actionsTable[5387] = 1229; // 'state 42' -> { -> reduce (target=102, len=2)
actionsTable.fill(1229, 5392, 5395); // 'state 42' -> )..* -> reduce (target=102, len=2)
actionsTable[5395] = 74; // 'state 42' -> . -> shift (target=37, len=0)
actionsTable.fill(1229, 5404, 5417); // 'state 42' -> ::..| -> reduce (target=102, len=2)
actionsTable.fill(1229, 5425, 5427); // 'state 42' -> '.." -> reduce (target=102, len=2)
actionsTable[5434] = 1229; // 'state 42' -> identifier -> reduce (target=102, len=2)
actionsTable[5504] = 781; // 'state 43' -> [ -> reduce (target=134, len=1)
actionsTable[5507] = 781; // 'state 43' -> : -> reduce (target=134, len=1)
actionsTable[5509] = 781; // 'state 43' -> , -> reduce (target=134, len=1)
actionsTable[5515] = 781; // 'state 43' -> { -> reduce (target=134, len=1)
actionsTable.fill(781, 5519, 5524); // 'state 43' -> (... -> reduce (target=134, len=1)
actionsTable.fill(781, 5532, 5545); // 'state 43' -> ::..| -> reduce (target=134, len=1)
actionsTable.fill(781, 5553, 5555); // 'state 43' -> '.." -> reduce (target=134, len=1)
actionsTable[5559] = 362; // 'state 43' -> escape_sequence -> shift (target=181, len=0)
actionsTable[5562] = 781; // 'state 43' -> identifier -> reduce (target=134, len=1)
actionsTable[5569] = 362; // 'state 43' -> _class_name_token4 -> shift (target=181, len=0)
actionsTable[5647] = 158; // 'state 44' -> ( -> shift (target=79, len=0)
actionsTable[5760] = 1217; // 'state 45' -> [ -> reduce (target=96, len=2)
actionsTable[5763] = 1217; // 'state 45' -> : -> reduce (target=96, len=2)
actionsTable[5765] = 1217; // 'state 45' -> , -> reduce (target=96, len=2)
actionsTable[5771] = 1217; // 'state 45' -> { -> reduce (target=96, len=2)
actionsTable[5775] = 158; // 'state 45' -> ( -> shift (target=79, len=0)
actionsTable.fill(1217, 5776, 5780); // 'state 45' -> )... -> reduce (target=96, len=2)
actionsTable.fill(1217, 5788, 5801); // 'state 45' -> ::..| -> reduce (target=96, len=2)
actionsTable.fill(1217, 5809, 5811); // 'state 45' -> '.." -> reduce (target=96, len=2)
actionsTable[5818] = 1217; // 'state 45' -> identifier -> reduce (target=96, len=2)
actionsTable[5903] = 366; // 'state 46' -> ( -> shift (target=183, len=0)
actionsTable[6016] = 1217; // 'state 47' -> [ -> reduce (target=96, len=2)
actionsTable[6019] = 1217; // 'state 47' -> : -> reduce (target=96, len=2)
actionsTable[6021] = 1217; // 'state 47' -> , -> reduce (target=96, len=2)
actionsTable[6027] = 1217; // 'state 47' -> { -> reduce (target=96, len=2)
actionsTable[6031] = 160; // 'state 47' -> ( -> shift (target=80, len=0)
actionsTable.fill(1217, 6032, 6036); // 'state 47' -> )... -> reduce (target=96, len=2)
actionsTable.fill(1217, 6044, 6057); // 'state 47' -> ::..| -> reduce (target=96, len=2)
actionsTable.fill(1217, 6065, 6067); // 'state 47' -> '.." -> reduce (target=96, len=2)
actionsTable[6074] = 1217; // 'state 47' -> identifier -> reduce (target=96, len=2)
actionsTable[6144] = 1221; // 'state 48' -> [ -> reduce (target=98, len=2)
actionsTable[6147] = 1221; // 'state 48' -> : -> reduce (target=98, len=2)
actionsTable[6149] = 1221; // 'state 48' -> , -> reduce (target=98, len=2)
actionsTable[6155] = 1221; // 'state 48' -> { -> reduce (target=98, len=2)
actionsTable[6159] = 162; // 'state 48' -> ( -> shift (target=81, len=0)
actionsTable.fill(1221, 6160, 6164); // 'state 48' -> )... -> reduce (target=98, len=2)
actionsTable.fill(1221, 6172, 6185); // 'state 48' -> ::..| -> reduce (target=98, len=2)
actionsTable.fill(1221, 6193, 6195); // 'state 48' -> '.." -> reduce (target=98, len=2)
actionsTable[6202] = 1221; // 'state 48' -> identifier -> reduce (target=98, len=2)
actionsTable[6272] = 68; // 'state 49' -> [ -> shift (target=34, len=0)
actionsTable[6275] = 70; // 'state 49' -> : -> shift (target=35, len=0)
actionsTable[6289] = 260; // 'state 49' -> & -> shift (target=130, len=0)
actionsTable[6290] = 262; // 'state 49' -> * -> shift (target=131, len=0)
actionsTable[6291] = 74; // 'state 49' -> . -> shift (target=37, len=0)
actionsTable[6300] = 296; // 'state 49' -> :: -> shift (target=148, len=0)
actionsTable[6301] = 298; // 'state 49' -> # -> shift (target=149, len=0)
actionsTable[6309] = 76; // 'state 49' -> > -> shift (target=38, len=0)
actionsTable[6310] = 78; // 'state 49' -> ~ -> shift (target=39, len=0)
actionsTable[6311] = 80; // 'state 49' -> + -> shift (target=40, len=0)
actionsTable[6312] = 82; // 'state 49' -> | -> shift (target=41, len=0)
actionsTable[6321] = 28; // 'state 49' -> ' -> shift (target=14, len=0)
actionsTable[6322] = 30; // 'state 49' -> " -> shift (target=15, len=0)
actionsTable[6330] = 272; // 'state 49' -> identifier -> shift (target=136, len=0)
actionsTable[6400] = 1227; // 'state 50' -> [ -> reduce (target=101, len=2)
actionsTable[6403] = 1227; // 'state 50' -> : -> reduce (target=101, len=2)
actionsTable[6405] = 1227; // 'state 50' -> , -> reduce (target=101, len=2)
actionsTable[6411] = 1227; // 'state 50' -> { -> reduce (target=101, len=2)
actionsTable.fill(1227, 6416, 6419); // 'state 50' -> )..* -> reduce (target=101, len=2)
actionsTable[6419] = 74; // 'state 50' -> . -> shift (target=37, len=0)
actionsTable.fill(1227, 6428, 6441); // 'state 50' -> ::..| -> reduce (target=101, len=2)
actionsTable.fill(1227, 6449, 6451); // 'state 50' -> '.." -> reduce (target=101, len=2)
actionsTable[6458] = 1227; // 'state 50' -> identifier -> reduce (target=101, len=2)
actionsTable[6528] = 1231; // 'state 51' -> [ -> reduce (target=103, len=2)
actionsTable[6531] = 1231; // 'state 51' -> : -> reduce (target=103, len=2)
actionsTable[6533] = 1231; // 'state 51' -> , -> reduce (target=103, len=2)
actionsTable[6539] = 1231; // 'state 51' -> { -> reduce (target=103, len=2)
actionsTable.fill(1231, 6544, 6547); // 'state 51' -> )..* -> reduce (target=103, len=2)
actionsTable[6547] = 74; // 'state 51' -> . -> shift (target=37, len=0)
actionsTable.fill(1231, 6556, 6569); // 'state 51' -> ::..| -> reduce (target=103, len=2)
actionsTable.fill(1231, 6577, 6579); // 'state 51' -> '.." -> reduce (target=103, len=2)
actionsTable[6586] = 1231; // 'state 51' -> identifier -> reduce (target=103, len=2)
actionsTable[6656] = 1233; // 'state 52' -> [ -> reduce (target=104, len=2)
actionsTable[6659] = 1233; // 'state 52' -> : -> reduce (target=104, len=2)
actionsTable[6661] = 1233; // 'state 52' -> , -> reduce (target=104, len=2)
actionsTable[6667] = 1233; // 'state 52' -> { -> reduce (target=104, len=2)
actionsTable.fill(1233, 6672, 6675); // 'state 52' -> )..* -> reduce (target=104, len=2)
actionsTable[6675] = 74; // 'state 52' -> . -> shift (target=37, len=0)
actionsTable.fill(1233, 6684, 6697); // 'state 52' -> ::..| -> reduce (target=104, len=2)
actionsTable.fill(1233, 6705, 6707); // 'state 52' -> '.." -> reduce (target=104, len=2)
actionsTable[6714] = 1233; // 'state 52' -> identifier -> reduce (target=104, len=2)
actionsTable[6784] = 1235; // 'state 53' -> [ -> reduce (target=105, len=2)
actionsTable[6787] = 1235; // 'state 53' -> : -> reduce (target=105, len=2)
actionsTable[6789] = 1235; // 'state 53' -> , -> reduce (target=105, len=2)
actionsTable[6795] = 1235; // 'state 53' -> { -> reduce (target=105, len=2)
actionsTable.fill(1235, 6800, 6803); // 'state 53' -> )..* -> reduce (target=105, len=2)
actionsTable[6803] = 74; // 'state 53' -> . -> shift (target=37, len=0)
actionsTable.fill(1235, 6812, 6825); // 'state 53' -> ::..| -> reduce (target=105, len=2)
actionsTable.fill(1235, 6833, 6835); // 'state 53' -> '.." -> reduce (target=105, len=2)
actionsTable[6842] = 1235; // 'state 53' -> identifier -> reduce (target=105, len=2)
actionsTable[6912] = 44; // 'state 54' -> [ -> shift (target=22, len=0)
actionsTable[6917] = 166; // 'state 54' -> , -> shift (target=83, len=0)
actionsTable[6918] = 380; // 'state 54' -> ; -> shift (target=190, len=0)
actionsTable[6927] = 46; // 'state 54' -> ( -> shift (target=23, len=0)
actionsTable[6930] = 114; // 'state 54' -> * -> shift (target=57, len=0)
actionsTable[6951] = 114; // 'state 54' -> + -> shift (target=57, len=0)
actionsTable[6956] = 278; // 'state 54' -> !important -> shift (target=139, len=0)
actionsTable[6961] = 28; // 'state 54' -> ' -> shift (target=14, len=0)
actionsTable[6962] = 30; // 'state 54' -> " -> shift (target=15, len=0)
actionsTable.fill(114, 6963, 6965); // 'state 54' -> -../ -> shift (target=57, len=0)
actionsTable[6966] = 280; // 'state 54' -> color_value -> shift (target=140, len=0)
actionsTable.fill(280, 6968, 6970); // 'state 54' -> integer_value..float_value -> shift (target=140, len=0)
actionsTable[6970] = 48; // 'state 54' -> identifier -> shift (target=24, len=0)
actionsTable[6972] = 280; // 'state 54' -> plain_value -> shift (target=140, len=0)
actionsTable[7040] = 44; // 'state 55' -> [ -> shift (target=22, len=0)
actionsTable[7046] = 392; // 'state 55' -> ; -> shift (target=196, len=0)
actionsTable[7051] = 42; // 'state 55' -> { -> shift (target=21, len=0)
actionsTable[7055] = 172; // 'state 55' -> ( -> shift (target=86, len=0)
actionsTable[7061] = 54; // 'state 55' -> not -> shift (target=27, len=0)
actionsTable[7084] = 278; // 'state 55' -> !important -> shift (target=139, len=0)
actionsTable[7087] = 54; // 'state 55' -> only -> shift (target=27, len=0)
actionsTable[7088] = 282; // 'state 55' -> selector -> shift (target=141, len=0)
actionsTable[7089] = 28; // 'state 55' -> ' -> shift (target=14, len=0)
actionsTable[7090] = 30; // 'state 55' -> " -> shift (target=15, len=0)
actionsTable[7094] = 280; // 'state 55' -> color_value -> shift (target=140, len=0)
actionsTable.fill(280, 7096, 7098); // 'state 55' -> integer_value..float_value -> shift (target=140, len=0)
actionsTable[7098] = 174; // 'state 55' -> identifier -> shift (target=87, len=0)
actionsTable[7100] = 280; // 'state 55' -> plain_value -> shift (target=140, len=0)
actionsTable[7101] = 394; // 'state 55' -> important_value -> shift (target=197, len=0)
actionsTable[7168] = 2; // 'state 56' -> [ -> shift (target=1, len=0)
actionsTable[7171] = 4; // 'state 56' -> : -> shift (target=2, len=0)
actionsTable[7172] = 6; // 'state 56' -> @import -> shift (target=3, len=0)
actionsTable[7175] = 8; // 'state 56' -> @media -> shift (target=4, len=0)
actionsTable[7176] = 10; // 'state 56' -> @charset -> shift (target=5, len=0)
actionsTable[7177] = 12; // 'state 56' -> @namespace -> shift (target=6, len=0)
actionsTable[7178] = 258; // 'state 56' -> @keyframes -> shift (target=129, len=0)
actionsTable[7180] = 386; // 'state 56' -> } -> shift (target=193, len=0)
actionsTable[7181] = 14; // 'state 56' -> @supports -> shift (target=7, len=0)
actionsTable[7182] = 16; // 'state 56' -> @scope -> shift (target=8, len=0)
actionsTable[7185] = 260; // 'state 56' -> & -> shift (target=130, len=0)
actionsTable[7186] = 262; // 'state 56' -> * -> shift (target=131, len=0)
actionsTable[7187] = 18; // 'state 56' -> . -> shift (target=9, len=0)
actionsTable[7196] = 264; // 'state 56' -> :: -> shift (target=132, len=0)
actionsTable[7197] = 266; // 'state 56' -> # -> shift (target=133, len=0)
actionsTable[7205] = 20; // 'state 56' -> > -> shift (target=10, len=0)
actionsTable[7206] = 22; // 'state 56' -> ~ -> shift (target=11, len=0)
actionsTable[7207] = 24; // 'state 56' -> + -> shift (target=12, len=0)
actionsTable[7208] = 26; // 'state 56' -> | -> shift (target=13, len=0)
actionsTable[7217] = 28; // 'state 56' -> ' -> shift (target=14, len=0)
actionsTable[7218] = 30; // 'state 56' -> " -> shift (target=15, len=0)
actionsTable[7226] = 322; // 'state 56' -> identifier -> shift (target=161, len=0)
actionsTable[7227] = 110; // 'state 56' -> at_keyword -> shift (target=55, len=0)
actionsTable[7230] = 258; // 'state 56' -> _keyframes_statement_token1 -> shift (target=129, len=0)
actionsTable[7296] = 44; // 'state 57' -> [ -> shift (target=22, len=0)
actionsTable[7311] = 46; // 'state 57' -> ( -> shift (target=23, len=0)
actionsTable[7340] = 278; // 'state 57' -> !important -> shift (target=139, len=0)
actionsTable[7345] = 28; // 'state 57' -> ' -> shift (target=14, len=0)
actionsTable[7346] = 30; // 'state 57' -> " -> shift (target=15, len=0)
actionsTable[7350] = 280; // 'state 57' -> color_value -> shift (target=140, len=0)
actionsTable.fill(280, 7352, 7354); // 'state 57' -> integer_value..float_value -> shift (target=140, len=0)
actionsTable[7354] = 48; // 'state 57' -> identifier -> shift (target=24, len=0)
actionsTable[7356] = 280; // 'state 57' -> plain_value -> shift (target=140, len=0)
actionsTable[7429] = 122; // 'state 58' -> , -> shift (target=61, len=0)
actionsTable[7430] = 398; // 'state 58' -> ; -> shift (target=199, len=0)
actionsTable.fill(124, 7469, 7471); // 'state 58' -> and..or -> shift (target=62, len=0)
actionsTable[7552] = 44; // 'state 59' -> [ -> shift (target=22, len=0)
actionsTable[7567] = 46; // 'state 59' -> ( -> shift (target=23, len=0)
actionsTable[7568] = 404; // 'state 59' -> ) -> shift (target=202, len=0)
actionsTable[7596] = 278; // 'state 59' -> !important -> shift (target=139, len=0)
actionsTable[7601] = 28; // 'state 59' -> ' -> shift (target=14, len=0)
actionsTable[7602] = 30; // 'state 59' -> " -> shift (target=15, len=0)
actionsTable[7606] = 280; // 'state 59' -> color_value -> shift (target=140, len=0)
actionsTable.fill(280, 7608, 7610); // 'state 59' -> integer_value..float_value -> shift (target=140, len=0)
actionsTable[7610] = 48; // 'state 59' -> identifier -> shift (target=24, len=0)
actionsTable[7612] = 280; // 'state 59' -> plain_value -> shift (target=140, len=0)
actionsTable[7685] = 180; // 'state 60' -> , -> shift (target=90, len=0)
actionsTable[7698] = 114; // 'state 60' -> * -> shift (target=57, len=0)
actionsTable[7716] = 408; // 'state 60' -> ] -> shift (target=204, len=0)
actionsTable[7719] = 114; // 'state 60' -> + -> shift (target=57, len=0)
actionsTable.fill(114, 7731, 7733); // 'state 60' -> -../ -> shift (target=57, len=0)
actionsTable[7823] = 52; // 'state 61' -> ( -> shift (target=26, len=0)
actionsTable[7829] = 54; // 'state 61' -> not -> shift (target=27, len=0)
actionsTable[7855] = 54; // 'state 61' -> only -> shift (target=27, len=0)
actionsTable[7856] = 282; // 'state 61' -> selector -> shift (target=141, len=0)
actionsTable[7866] = 284; // 'state 61' -> identifier -> shift (target=142, len=0)
actionsTable[7951] = 52; // 'state 62' -> ( -> shift (target=26, len=0)
actionsTable[7957] = 54; // 'state 62' -> not -> shift (target=27, len=0)
actionsTable[7983] = 54; // 'state 62' -> only -> shift (target=27, len=0)
actionsTable[7984] = 282; // 'state 62' -> selector -> shift (target=141, len=0)
actionsTable[7994] = 284; // 'state 62' -> identifier -> shift (target=142, len=0)
actionsTable[8069] = 182; // 'state 63' -> , -> shift (target=91, len=0)
actionsTable[8075] = 42; // 'state 63' -> { -> shift (target=21, len=0)
actionsTable[8192] = 2; // 'state 64' -> [ -> shift (target=1, len=0)
actionsTable[8195] = 4; // 'state 64' -> : -> shift (target=2, len=0)
actionsTable[8209] = 260; // 'state 64' -> & -> shift (target=130, len=0)
actionsTable[8210] = 262; // 'state 64' -> * -> shift (target=131, len=0)
actionsTable[8211] = 18; // 'state 64' -> . -> shift (target=9, len=0)
actionsTable[8220] = 264; // 'state 64' -> :: -> shift (target=132, len=0)
actionsTable[8221] = 266; // 'state 64' -> # -> shift (target=133, len=0)
actionsTable[8229] = 20; // 'state 64' -> > -> shift (target=10, len=0)
actionsTable[8230] = 22; // 'state 64' -> ~ -> shift (target=11, len=0)
actionsTable[8231] = 24; // 'state 64' -> + -> shift (target=12, len=0)
actionsTable[8232] = 26; // 'state 64' -> | -> shift (target=13, len=0)
actionsTable[8241] = 28; // 'state 64' -> ' -> shift (target=14, len=0)
actionsTable[8242] = 30; // 'state 64' -> " -> shift (target=15, len=0)
actionsTable[8250] = 272; // 'state 64' -> identifier -> shift (target=136, len=0)
actionsTable[8335] = 118; // 'state 65' -> ( -> shift (target=59, len=0)
actionsTable.fill(188, 8449, 8451); // 'state 66' -> from..to -> shift (target=94, len=0)
actionsTable[8460] = 424; // 'state 66' -> } -> shift (target=212, len=0)
actionsTable[8504] = 188; // 'state 66' -> integer_value -> shift (target=94, len=0)
actionsTable[8576] = 68; // 'state 67' -> [ -> shift (target=34, len=0)
actionsTable[8579] = 70; // 'state 67' -> : -> shift (target=35, len=0)
actionsTable[8592] = 192; // 'state 67' -> ) -> shift (target=96, len=0)
actionsTable[8593] = 260; // 'state 67' -> & -> shift (target=130, len=0)
actionsTable[8594] = 262; // 'state 67' -> * -> shift (target=131, len=0)
actionsTable[8595] = 74; // 'state 67' -> . -> shift (target=37, len=0)
actionsTable[8604] = 296; // 'state 67' -> :: -> shift (target=148, len=0)
actionsTable[8605] = 298; // 'state 67' -> # -> shift (target=149, len=0)
actionsTable[8613] = 76; // 'state 67' -> > -> shift (target=38, len=0)
actionsTable[8614] = 78; // 'state 67' -> ~ -> shift (target=39, len=0)
actionsTable[8615] = 80; // 'state 67' -> + -> shift (target=40, len=0)
actionsTable[8616] = 82; // 'state 67' -> | -> shift (target=41, len=0)
actionsTable[8625] = 28; // 'state 67' -> ' -> shift (target=14, len=0)
actionsTable[8626] = 30; // 'state 67' -> " -> shift (target=15, len=0)
actionsTable[8634] = 272; // 'state 67' -> identifier -> shift (target=136, len=0)
actionsTable[8709] = 182; // 'state 68' -> , -> shift (target=91, len=0)
actionsTable[8710] = 428; // 'state 68' -> ; -> shift (target=214, len=0)
actionsTable[8715] = 42; // 'state 68' -> { -> shift (target=21, len=0)
actionsTable[8832] = 2; // 'state 69' -> [ -> shift (target=1, len=0)
actionsTable[8835] = 4; // 'state 69' -> : -> shift (target=2, len=0)
actionsTable[8849] = 260; // 'state 69' -> & -> shift (target=130, len=0)
actionsTable[8850] = 262; // 'state 69' -> * -> shift (target=131, len=0)
actionsTable[8851] = 18; // 'state 69' -> . -> shift (target=9, len=0)
actionsTable[8860] = 264; // 'state 69' -> :: -> shift (target=132, len=0)
actionsTable[8861] = 266; // 'state 69' -> # -> shift (target=133, len=0)
actionsTable[8869] = 20; // 'state 69' -> > -> shift (target=10, len=0)
actionsTable[8870] = 22; // 'state 69' -> ~ -> shift (target=11, len=0)
actionsTable[8871] = 24; // 'state 69' -> + -> shift (target=12, len=0)
actionsTable[8872] = 26; // 'state 69' -> | -> shift (target=13, len=0)
actionsTable[8881] = 28; // 'state 69' -> ' -> shift (target=14, len=0)
actionsTable[8882] = 30; // 'state 69' -> " -> shift (target=15, len=0)
actionsTable[8890] = 272; // 'state 69' -> identifier -> shift (target=136, len=0)
actionsTable[8960] = 68; // 'state 70' -> [ -> shift (target=34, len=0)
actionsTable[8963] = 70; // 'state 70' -> : -> shift (target=35, len=0)
actionsTable[8965] = 1201; // 'state 70' -> , -> reduce (target=88, len=2)
actionsTable[8971] = 1201; // 'state 70' -> { -> reduce (target=88, len=2)
actionsTable[8976] = 1201; // 'state 70' -> ) -> reduce (target=88, len=2)
actionsTable[8977] = 260; // 'state 70' -> & -> shift (target=130, len=0)
actionsTable[8978] = 262; // 'state 70' -> * -> shift (target=131, len=0)
actionsTable[8979] = 74; // 'state 70' -> . -> shift (target=37, len=0)
actionsTable[8988] = 296; // 'state 70' -> :: -> shift (target=148, len=0)
actionsTable[8989] = 298; // 'state 70' -> # -> shift (target=149, len=0)
actionsTable[8997] = 76; // 'state 70' -> > -> shift (target=38, len=0)
actionsTable[8998] = 78; // 'state 70' -> ~ -> shift (target=39, len=0)
actionsTable[8999] = 80; // 'state 70' -> + -> shift (target=40, len=0)
actionsTable[9000] = 82; // 'state 70' -> | -> shift (target=41, len=0)
actionsTable[9009] = 28; // 'state 70' -> ' -> shift (target=14, len=0)
actionsTable[9010] = 30; // 'state 70' -> " -> shift (target=15, len=0)
actionsTable[9018] = 272; // 'state 70' -> identifier -> shift (target=136, len=0)
actionsTable[9103] = 158; // 'state 71' -> ( -> shift (target=79, len=0)
actionsTable[9216] = 1729; // 'state 72' -> [ -> reduce (target=96, len=3)
actionsTable[9219] = 1729; // 'state 72' -> : -> reduce (target=96, len=3)
actionsTable[9221] = 1729; // 'state 72' -> , -> reduce (target=96, len=3)
actionsTable[9227] = 1729; // 'state 72' -> { -> reduce (target=96, len=3)
actionsTable[9231] = 158; // 'state 72' -> ( -> shift (target=79, len=0)
actionsTable.fill(1729, 9232, 9236); // 'state 72' -> )... -> reduce (target=96, len=3)
actionsTable.fill(1729, 9244, 9257); // 'state 72' -> ::..| -> reduce (target=96, len=3)
actionsTable.fill(1729, 9265, 9267); // 'state 72' -> '.." -> reduce (target=96, len=3)
actionsTable[9274] = 1729; // 'state 72' -> identifier -> reduce (target=96, len=3)
actionsTable[9344] = 1729; // 'state 73' -> [ -> reduce (target=96, len=3)
actionsTable[9347] = 1729; // 'state 73' -> : -> reduce (target=96, len=3)
actionsTable[9349] = 1729; // 'state 73' -> , -> reduce (target=96, len=3)
actionsTable[9355] = 1729; // 'state 73' -> { -> reduce (target=96, len=3)
actionsTable[9359] = 160; // 'state 73' -> ( -> shift (target=80, len=0)
actionsTable.fill(1729, 9360, 9364); // 'state 73' -> )... -> reduce (target=96, len=3)
actionsTable.fill(1729, 9372, 9385); // 'state 73' -> ::..| -> reduce (target=96, len=3)
actionsTable.fill(1729, 9393, 9395); // 'state 73' -> '.." -> reduce (target=96, len=3)
actionsTable[9402] = 1729; // 'state 73' -> identifier -> reduce (target=96, len=3)
actionsTable[9472] = 1733; // 'state 74' -> [ -> reduce (target=98, len=3)
actionsTable[9475] = 1733; // 'state 74' -> : -> reduce (target=98, len=3)
actionsTable[9477] = 1733; // 'state 74' -> , -> reduce (target=98, len=3)
actionsTable[9483] = 1733; // 'state 74' -> { -> reduce (target=98, len=3)
actionsTable[9487] = 162; // 'state 74' -> ( -> shift (target=81, len=0)
actionsTable.fill(1733, 9488, 9492); // 'state 74' -> )... -> reduce (target=98, len=3)
actionsTable.fill(1733, 9500, 9513); // 'state 74' -> ::..| -> reduce (target=98, len=3)
actionsTable.fill(1733, 9521, 9523); // 'state 74' -> '.." -> reduce (target=98, len=3)
actionsTable[9530] = 1733; // 'state 74' -> identifier -> reduce (target=98, len=3)
actionsTable[9600] = 1739; // 'state 75' -> [ -> reduce (target=101, len=3)
actionsTable[9603] = 1739; // 'state 75' -> : -> reduce (target=101, len=3)
actionsTable[9605] = 1739; // 'state 75' -> , -> reduce (target=101, len=3)
actionsTable[9611] = 1739; // 'state 75' -> { -> reduce (target=101, len=3)
actionsTable.fill(1739, 9616, 9619); // 'state 75' -> )..* -> reduce (target=101, len=3)
actionsTable[9619] = 74; // 'state 75' -> . -> shift (target=37, len=0)
actionsTable.fill(1739, 9628, 9641); // 'state 75' -> ::..| -> reduce (target=101, len=3)
actionsTable.fill(1739, 9649, 9651); // 'state 75' -> '.." -> reduce (target=101, len=3)
actionsTable[9658] = 1739; // 'state 75' -> identifier -> reduce (target=101, len=3)
actionsTable[9728] = 1743; // 'state 76' -> [ -> reduce (target=103, len=3)
actionsTable[9731] = 1743; // 'state 76' -> : -> reduce (target=103, len=3)
actionsTable[9733] = 1743; // 'state 76' -> , -> reduce (target=103, len=3)
actionsTable[9739] = 1743; // 'state 76' -> { -> reduce (target=103, len=3)
actionsTable.fill(1743, 9744, 9747); // 'state 76' -> )..* -> reduce (target=103, len=3)
actionsTable[9747] = 74; // 'state 76' -> . -> shift (target=37, len=0)
actionsTable.fill(1743, 9756, 9769); // 'state 76' -> ::..| -> reduce (target=103, len=3)
actionsTable.fill(1743, 9777, 9779); // 'state 76' -> '.." -> reduce (target=103, len=3)
actionsTable[9786] = 1743; // 'state 76' -> identifier -> reduce (target=103, len=3)
actionsTable[9856] = 1745; // 'state 77' -> [ -> reduce (target=104, len=3)
actionsTable[9859] = 1745; // 'state 77' -> : -> reduce (target=104, len=3)
actionsTable[9861] = 1745; // 'state 77' -> , -> reduce (target=104, len=3)
actionsTable[9867] = 1745; // 'state 77' -> { -> reduce (target=104, len=3)
actionsTable.fill(1745, 9872, 9875); // 'state 77' -> )..* -> reduce (target=104, len=3)
actionsTable[9875] = 74; // 'state 77' -> . -> shift (target=37, len=0)
actionsTable.fill(1745, 9884, 9897); // 'state 77' -> ::..| -> reduce (target=104, len=3)
actionsTable.fill(1745, 9905, 9907); // 'state 77' -> '.." -> reduce (target=104, len=3)
actionsTable[9914] = 1745; // 'state 77' -> identifier -> reduce (target=104, len=3)
actionsTable[9984] = 1747; // 'state 78' -> [ -> reduce (target=105, len=3)
actionsTable[9987] = 1747; // 'state 78' -> : -> reduce (target=105, len=3)
actionsTable[9989] = 1747; // 'state 78' -> , -> reduce (target=105, len=3)
actionsTable[9995] = 1747; // 'state 78' -> { -> reduce (target=105, len=3)
actionsTable.fill(1747, 10000, 10003); // 'state 78' -> )..* -> reduce (target=105, len=3)
actionsTable[10003] = 74; // 'state 78' -> . -> shift (target=37, len=0)
actionsTable.fill(1747, 10012, 10025); // 'state 78' -> ::..| -> reduce (target=105, len=3)
actionsTable.fill(1747, 10033, 10035); // 'state 78' -> '.." -> reduce (target=105, len=3)
actionsTable[10042] = 1747; // 'state 78' -> identifier -> reduce (target=105, len=3)
actionsTable[10112] = 2; // 'state 79' -> [ -> shift (target=1, len=0)
actionsTable[10115] = 4; // 'state 79' -> : -> shift (target=2, len=0)
actionsTable[10128] = 438; // 'state 79' -> ) -> shift (target=219, len=0)
actionsTable[10129] = 260; // 'state 79' -> & -> shift (target=130, len=0)
actionsTable[10130] = 262; // 'state 79' -> * -> shift (target=131, len=0)
actionsTable[10131] = 18; // 'state 79' -> . -> shift (target=9, len=0)
actionsTable[10140] = 264; // 'state 79' -> :: -> shift (target=132, len=0)
actionsTable[10141] = 266; // 'state 79' -> # -> shift (target=133, len=0)
actionsTable[10149] = 20; // 'state 79' -> > -> shift (target=10, len=0)
actionsTable[10150] = 22; // 'state 79' -> ~ -> shift (target=11, len=0)
actionsTable[10151] = 24; // 'state 79' -> + -> shift (target=12, len=0)
actionsTable[10152] = 26; // 'state 79' -> | -> shift (target=13, len=0)
actionsTable[10161] = 28; // 'state 79' -> ' -> shift (target=14, len=0)
actionsTable[10162] = 30; // 'state 79' -> " -> shift (target=15, len=0)
actionsTable[10170] = 272; // 'state 79' -> identifier -> shift (target=136, len=0)
actionsTable[10240] = 200; // 'state 80' -> [ -> shift (target=100, len=0)
actionsTable[10243] = 4; // 'state 80' -> : -> shift (target=2, len=0)
actionsTable[10255] = 46; // 'state 80' -> ( -> shift (target=23, len=0)
actionsTable[10256] = 442; // 'state 80' -> ) -> shift (target=221, len=0)
actionsTable[10257] = 260; // 'state 80' -> & -> shift (target=130, len=0)
actionsTable[10258] = 262; // 'state 80' -> * -> shift (target=131, len=0)
actionsTable[10259] = 18; // 'state 80' -> . -> shift (target=9, len=0)
actionsTable[10268] = 264; // 'state 80' -> :: -> shift (target=132, len=0)
actionsTable[10269] = 266; // 'state 80' -> # -> shift (target=133, len=0)
actionsTable[10277] = 20; // 'state 80' -> > -> shift (target=10, len=0)
actionsTable[10278] = 22; // 'state 80' -> ~ -> shift (target=11, len=0)
actionsTable[10279] = 24; // 'state 80' -> + -> shift (target=12, len=0)
actionsTable[10280] = 26; // 'state 80' -> | -> shift (target=13, len=0)
actionsTable[10284] = 278; // 'state 80' -> !important -> shift (target=139, len=0)
actionsTable[10289] = 28; // 'state 80' -> ' -> shift (target=14, len=0)
actionsTable[10290] = 30; // 'state 80' -> " -> shift (target=15, len=0)
actionsTable[10294] = 280; // 'state 80' -> color_value -> shift (target=140, len=0)
actionsTable.fill(280, 10296, 10298); // 'state 80' -> integer_value..float_value -> shift (target=140, len=0)
actionsTable[10298] = 202; // 'state 80' -> identifier -> shift (target=101, len=0)
actionsTable[10300] = 280; // 'state 80' -> plain_value -> shift (target=140, len=0)
actionsTable[10368] = 200; // 'state 81' -> [ -> shift (target=100, len=0)
actionsTable[10371] = 4; // 'state 81' -> : -> shift (target=2, len=0)
actionsTable[10383] = 46; // 'state 81' -> ( -> shift (target=23, len=0)
actionsTable[10384] = 446; // 'state 81' -> ) -> shift (target=223, len=0)
actionsTable[10385] = 260; // 'state 81' -> & -> shift (target=130, len=0)
actionsTable[10386] = 262; // 'state 81' -> * -> shift (target=131, len=0)
actionsTable[10387] = 18; // 'state 81' -> . -> shift (target=9, len=0)
actionsTable[10396] = 264; // 'state 81' -> :: -> shift (target=132, len=0)
actionsTable[10397] = 266; // 'state 81' -> # -> shift (target=133, len=0)
actionsTable[10405] = 20; // 'state 81' -> > -> shift (target=10, len=0)
actionsTable[10406] = 22; // 'state 81' -> ~ -> shift (target=11, len=0)
actionsTable[10407] = 24; // 'state 81' -> + -> shift (target=12, len=0)
actionsTable[10408] = 26; // 'state 81' -> | -> shift (target=13, len=0)
actionsTable[10412] = 278; // 'state 81' -> !important -> shift (target=139, len=0)
actionsTable[10417] = 28; // 'state 81' -> ' -> shift (target=14, len=0)
actionsTable[10418] = 30; // 'state 81' -> " -> shift (target=15, len=0)
actionsTable[10422] = 280; // 'state 81' -> color_value -> shift (target=140, len=0)
actionsTable.fill(280, 10424, 10426); // 'state 81' -> integer_value..float_value -> shift (target=140, len=0)
actionsTable[10426] = 202; // 'state 81' -> identifier -> shift (target=101, len=0)
actionsTable[10428] = 280; // 'state 81' -> plain_value -> shift (target=140, len=0)
actionsTable[10496] = 44; // 'state 82' -> [ -> shift (target=22, len=0)
actionsTable[10511] = 46; // 'state 82' -> ( -> shift (target=23, len=0)
actionsTable[10540] = 278; // 'state 82' -> !important -> shift (target=139, len=0)
actionsTable[10545] = 28; // 'state 82' -> ' -> shift (target=14, len=0)
actionsTable[10546] = 30; // 'state 82' -> " -> shift (target=15, len=0)
actionsTable[10550] = 280; // 'state 82' -> color_value -> shift (target=140, len=0)
actionsTable.fill(280, 10552, 10554); // 'state 82' -> integer_value..float_value -> shift (target=140, len=0)
actionsTable[10554] = 48; // 'state 82' -> identifier -> shift (target=24, len=0)
actionsTable[10556] = 280; // 'state 82' -> plain_value -> shift (target=140, len=0)
actionsTable[10624] = 44; // 'state 83' -> [ -> shift (target=22, len=0)
actionsTable[10639] = 46; // 'state 83' -> ( -> shift (target=23, len=0)
actionsTable[10668] = 278; // 'state 83' -> !important -> shift (target=139, len=0)
actionsTable[10673] = 28; // 'state 83' -> ' -> shift (target=14, len=0)
actionsTable[10674] = 30; // 'state 83' -> " -> shift (target=15, len=0)
actionsTable[10678] = 280; // 'state 83' -> color_value -> shift (target=140, len=0)
actionsTable.fill(280, 10680, 10682); // 'state 83' -> integer_value..float_value -> shift (target=140, len=0)
actionsTable[10682] = 48; // 'state 83' -> identifier -> shift (target=24, len=0)
actionsTable[10684] = 280; // 'state 83' -> plain_value -> shift (target=140, len=0)
actionsTable[10752] = 44; // 'state 84' -> [ -> shift (target=22, len=0)
actionsTable[10757] = 212; // 'state 84' -> , -> shift (target=106, len=0)
actionsTable[10758] = 450; // 'state 84' -> ; -> shift (target=225, len=0)
actionsTable[10767] = 46; // 'state 84' -> ( -> shift (target=23, len=0)
actionsTable[10796] = 278; // 'state 84' -> !important -> shift (target=139, len=0)
actionsTable[10801] = 28; // 'state 84' -> ' -> shift (target=14, len=0)
actionsTable[10802] = 30; // 'state 84' -> " -> shift (target=15, len=0)
actionsTable[10806] = 280; // 'state 84' -> color_value -> shift (target=140, len=0)
actionsTable.fill(280, 10808, 10810); // 'state 84' -> integer_value..float_value -> shift (target=140, len=0)
actionsTable[10810] = 48; // 'state 84' -> identifier -> shift (target=24, len=0)
actionsTable[10812] = 280; // 'state 84' -> plain_value -> shift (target=140, len=0)
actionsTable[10880] = 44; // 'state 85' -> [ -> shift (target=22, len=0)
actionsTable[10895] = 46; // 'state 85' -> ( -> shift (target=23, len=0)
actionsTable[10924] = 278; // 'state 85' -> !important -> shift (target=139, len=0)
actionsTable[10929] = 28; // 'state 85' -> ' -> shift (target=14, len=0)
actionsTable[10930] = 30; // 'state 85' -> " -> shift (target=15, len=0)
actionsTable[10934] = 280; // 'state 85' -> color_value -> shift (target=140, len=0)
actionsTable.fill(280, 10936, 10938); // 'state 85' -> integer_value..float_value -> shift (target=140, len=0)
actionsTable[10938] = 48; // 'state 85' -> identifier -> shift (target=24, len=0)
actionsTable[10940] = 280; // 'state 85' -> plain_value -> shift (target=140, len=0)
actionsTable[11008] = 44; // 'state 86' -> [ -> shift (target=22, len=0)
actionsTable[11023] = 172; // 'state 86' -> ( -> shift (target=86, len=0)
actionsTable[11029] = 54; // 'state 86' -> not -> shift (target=27, len=0)
actionsTable[11052] = 278; // 'state 86' -> !important -> shift (target=139, len=0)
actionsTable[11055] = 54; // 'state 86' -> only -> shift (target=27, len=0)
actionsTable[11056] = 282; // 'state 86' -> selector -> shift (target=141, len=0)
actionsTable[11057] = 28; // 'state 86' -> ' -> shift (target=14, len=0)
actionsTable[11058] = 30; // 'state 86' -> " -> shift (target=15, len=0)
actionsTable[11062] = 280; // 'state 86' -> color_value -> shift (target=140, len=0)
actionsTable.fill(280, 11064, 11066); // 'state 86' -> integer_value..float_value -> shift (target=140, len=0)
actionsTable[11066] = 216; // 'state 86' -> identifier -> shift (target=108, len=0)
actionsTable[11068] = 280; // 'state 86' -> plain_value -> shift (target=140, len=0)
actionsTable[11136] = 757; // 'state 87' -> [ -> reduce (target=122, len=1)
actionsTable.fill(745, 11141, 11143); // 'state 87' -> ,..; -> reduce (target=116, len=1)
actionsTable[11147] = 745; // 'state 87' -> { -> reduce (target=116, len=1)
actionsTable[11151] = 118; // 'state 87' -> ( -> shift (target=59, len=0)
actionsTable[11154] = 757; // 'state 87' -> * -> reduce (target=122, len=1)
actionsTable[11175] = 757; // 'state 87' -> + -> reduce (target=122, len=1)
actionsTable[11180] = 757; // 'state 87' -> !important -> reduce (target=122, len=1)
actionsTable.fill(745, 11181, 11183); // 'state 87' -> and..or -> reduce (target=116, len=1)
actionsTable.fill(757, 11185, 11189); // 'state 87' -> '../ -> reduce (target=122, len=1)
actionsTable[11190] = 757; // 'state 87' -> color_value -> reduce (target=122, len=1)
actionsTable.fill(757, 11192, 11195); // 'state 87' -> integer_value..identifier -> reduce (target=122, len=1)
actionsTable.fill(757, 11196, 11198); // 'state 87' -> plain_value..important_value -> reduce (target=122, len=1)
actionsTable[11264] = 44; // 'state 88' -> [ -> shift (target=22, len=0)
actionsTable[11270] = 458; // 'state 88' -> ; -> shift (target=229, len=0)
actionsTable[11279] = 46; // 'state 88' -> ( -> shift (target=23, len=0)
actionsTable[11308] = 278; // 'state 88' -> !important -> shift (target=139, len=0)
actionsTable[11313] = 28; // 'state 88' -> ' -> shift (target=14, len=0)
actionsTable[11314] = 30; // 'state 88' -> " -> shift (target=15, len=0)
actionsTable[11318] = 280; // 'state 88' -> color_value -> shift (target=140, len=0)
actionsTable.fill(280, 11320, 11322); // 'state 88' -> integer_value..float_value -> shift (target=140, len=0)
actionsTable[11322] = 48; // 'state 88' -> identifier -> shift (target=24, len=0)
actionsTable[11324] = 280; // 'state 88' -> plain_value -> shift (target=140, len=0)
actionsTable[11325] = 460; // 'state 88' -> important_value -> shift (target=230, len=0)
actionsTable[11392] = 44; // 'state 89' -> [ -> shift (target=22, len=0)
actionsTable.fill(218, 11397, 11399); // 'state 89' -> ,..; -> shift (target=109, len=0)
actionsTable[11407] = 46; // 'state 89' -> ( -> shift (target=23, len=0)
actionsTable[11408] = 466; // 'state 89' -> ) -> shift (target=233, len=0)
actionsTable[11436] = 278; // 'state 89' -> !important -> shift (target=139, len=0)
actionsTable[11441] = 28; // 'state 89' -> ' -> shift (target=14, len=0)
actionsTable[11442] = 30; // 'state 89' -> " -> shift (target=15, len=0)
actionsTable[11446] = 280; // 'state 89' -> color_value -> shift (target=140, len=0)
actionsTable.fill(280, 11448, 11450); // 'state 89' -> integer_value..float_value -> shift (target=140, len=0)
actionsTable[11450] = 48; // 'state 89' -> identifier -> shift (target=24, len=0)
actionsTable[11452] = 280; // 'state 89' -> plain_value -> shift (target=140, len=0)
actionsTable[11520] = 44; // 'state 90' -> [ -> shift (target=22, len=0)
actionsTable[11535] = 46; // 'state 90' -> ( -> shift (target=23, len=0)
actionsTable[11564] = 278; // 'state 90' -> !important -> shift (target=139, len=0)
actionsTable[11569] = 28; // 'state 90' -> ' -> shift (target=14, len=0)
actionsTable[11570] = 30; // 'state 90' -> " -> shift (target=15, len=0)
actionsTable[11574] = 280; // 'state 90' -> color_value -> shift (target=140, len=0)
actionsTable.fill(280, 11576, 11578); // 'state 90' -> integer_value..float_value -> shift (target=140, len=0)
actionsTable[11578] = 48; // 'state 90' -> identifier -> shift (target=24, len=0)
actionsTable[11580] = 280; // 'state 90' -> plain_value -> shift (target=140, len=0)
actionsTable[11663] = 52; // 'state 91' -> ( -> shift (target=26, len=0)
actionsTable[11669] = 54; // 'state 91' -> not -> shift (target=27, len=0)
actionsTable[11695] = 54; // 'state 91' -> only -> shift (target=27, len=0)
actionsTable[11696] = 282; // 'state 91' -> selector -> shift (target=141, len=0)
actionsTable[11706] = 284; // 'state 91' -> identifier -> shift (target=142, len=0)
actionsTable[11776] = 44; // 'state 92' -> [ -> shift (target=22, len=0)
actionsTable[11791] = 46; // 'state 92' -> ( -> shift (target=23, len=0)
actionsTable[11820] = 278; // 'state 92' -> !important -> shift (target=139, len=0)
actionsTable[11825] = 28; // 'state 92' -> ' -> shift (target=14, len=0)
actionsTable[11826] = 30; // 'state 92' -> " -> shift (target=15, len=0)
actionsTable[11830] = 280; // 'state 92' -> color_value -> shift (target=140, len=0)
actionsTable.fill(280, 11832, 11834); // 'state 92' -> integer_value..float_value -> shift (target=140, len=0)
actionsTable[11834] = 48; // 'state 92' -> identifier -> shift (target=24, len=0)
actionsTable[11836] = 280; // 'state 92' -> plain_value -> shift (target=140, len=0)
actionsTable[11904] = 68; // 'state 93' -> [ -> shift (target=34, len=0)
actionsTable[11907] = 70; // 'state 93' -> : -> shift (target=35, len=0)
actionsTable[11920] = 478; // 'state 93' -> ) -> shift (target=239, len=0)
actionsTable[11921] = 260; // 'state 93' -> & -> shift (target=130, len=0)
actionsTable[11922] = 262; // 'state 93' -> * -> shift (target=131, len=0)
actionsTable[11923] = 74; // 'state 93' -> . -> shift (target=37, len=0)
actionsTable[11932] = 296; // 'state 93' -> :: -> shift (target=148, len=0)
actionsTable[11933] = 298; // 'state 93' -> # -> shift (target=149, len=0)
actionsTable[11941] = 76; // 'state 93' -> > -> shift (target=38, len=0)
actionsTable[11942] = 78; // 'state 93' -> ~ -> shift (target=39, len=0)
actionsTable[11943] = 80; // 'state 93' -> + -> shift (target=40, len=0)
actionsTable[11944] = 82; // 'state 93' -> | -> shift (target=41, len=0)
actionsTable[11953] = 28; // 'state 93' -> ' -> shift (target=14, len=0)
actionsTable[11954] = 30; // 'state 93' -> " -> shift (target=15, len=0)
actionsTable[11962] = 272; // 'state 93' -> identifier -> shift (target=136, len=0)
actionsTable[12037] = 484; // 'state 94' -> , -> shift (target=242, len=0)
actionsTable[12043] = 42; // 'state 94' -> { -> shift (target=21, len=0)
actionsTable.fill(188, 12161, 12163); // 'state 95' -> from..to -> shift (target=94, len=0)
actionsTable[12172] = 480; // 'state 95' -> } -> shift (target=240, len=0)
actionsTable[12216] = 188; // 'state 95' -> integer_value -> shift (target=94, len=0)
actionsTable[12290] = 488; // 'state 96' -> to -> shift (target=244, len=0)
actionsTable[12299] = 42; // 'state 96' -> { -> shift (target=21, len=0)
actionsTable[12416] = 68; // 'state 97' -> [ -> shift (target=34, len=0)
actionsTable[12419] = 70; // 'state 97' -> : -> shift (target=35, len=0)
actionsTable[12421] = 1713; // 'state 97' -> , -> reduce (target=88, len=3)
actionsTable[12427] = 1713; // 'state 97' -> { -> reduce (target=88, len=3)
actionsTable[12432] = 1713; // 'state 97' -> ) -> reduce (target=88, len=3)
actionsTable[12433] = 260; // 'state 97' -> & -> shift (target=130, len=0)
actionsTable[12434] = 262; // 'state 97' -> * -> shift (target=131, len=0)
actionsTable[12435] = 74; // 'state 97' -> . -> shift (target=37, len=0)
actionsTable[12444] = 296; // 'state 97' -> :: -> shift (target=148, len=0)
actionsTable[12445] = 298; // 'state 97' -> # -> shift (target=149, len=0)
actionsTable[12453] = 76; // 'state 97' -> > -> shift (target=38, len=0)
actionsTable[12454] = 78; // 'state 97' -> ~ -> shift (target=39, len=0)
actionsTable[12455] = 80; // 'state 97' -> + -> shift (target=40, len=0)
actionsTable[12456] = 82; // 'state 97' -> | -> shift (target=41, len=0)
actionsTable[12465] = 28; // 'state 97' -> ' -> shift (target=14, len=0)
actionsTable[12466] = 30; // 'state 97' -> " -> shift (target=15, len=0)
actionsTable[12474] = 272; // 'state 97' -> identifier -> shift (target=136, len=0)
actionsTable[12544] = 44; // 'state 98' -> [ -> shift (target=22, len=0)
actionsTable[12559] = 46; // 'state 98' -> ( -> shift (target=23, len=0)
actionsTable[12588] = 278; // 'state 98' -> !important -> shift (target=139, len=0)
actionsTable[12593] = 28; // 'state 98' -> ' -> shift (target=14, len=0)
actionsTable[12594] = 30; // 'state 98' -> " -> shift (target=15, len=0)
actionsTable[12598] = 280; // 'state 98' -> color_value -> shift (target=140, len=0)
actionsTable.fill(280, 12600, 12602); // 'state 98' -> integer_value..float_value -> shift (target=140, len=0)
actionsTable[12602] = 48; // 'state 98' -> identifier -> shift (target=24, len=0)
actionsTable[12604] = 280; // 'state 98' -> plain_value -> shift (target=140, len=0)
actionsTable[12672] = 68; // 'state 99' -> [ -> shift (target=34, len=0)
actionsTable[12675] = 70; // 'state 99' -> : -> shift (target=35, len=0)
actionsTable[12677] = 72; // 'state 99' -> , -> shift (target=36, len=0)
actionsTable[12688] = 494; // 'state 99' -> ) -> shift (target=247, len=0)
actionsTable[12689] = 260; // 'state 99' -> & -> shift (target=130, len=0)
actionsTable[12690] = 262; // 'state 99' -> * -> shift (target=131, len=0)
actionsTable[12691] = 74; // 'state 99' -> . -> shift (target=37, len=0)
actionsTable[12700] = 296; // 'state 99' -> :: -> shift (target=148, len=0)
actionsTable[12701] = 298; // 'state 99' -> # -> shift (target=149, len=0)
actionsTable[12709] = 76; // 'state 99' -> > -> shift (target=38, len=0)
actionsTable[12710] = 78; // 'state 99' -> ~ -> shift (target=39, len=0)
actionsTable[12711] = 80; // 'state 99' -> + -> shift (target=40, len=0)
actionsTable[12712] = 82; // 'state 99' -> | -> shift (target=41, len=0)
actionsTable[12721] = 28; // 'state 99' -> ' -> shift (target=14, len=0)
actionsTable[12722] = 30; // 'state 99' -> " -> shift (target=15, len=0)
actionsTable[12730] = 272; // 'state 99' -> identifier -> shift (target=136, len=0)
actionsTable[12800] = 200; // 'state 100' -> [ -> shift (target=100, len=0)
actionsTable[12803] = 4; // 'state 100' -> : -> shift (target=2, len=0)
actionsTable[12815] = 46; // 'state 100' -> ( -> shift (target=23, len=0)
actionsTable[12817] = 260; // 'state 100' -> & -> shift (target=130, len=0)
actionsTable[12818] = 262; // 'state 100' -> * -> shift (target=131, len=0)
actionsTable[12819] = 18; // 'state 100' -> . -> shift (target=9, len=0)
actionsTable[12828] = 264; // 'state 100' -> :: -> shift (target=132, len=0)
actionsTable[12829] = 266; // 'state 100' -> # -> shift (target=133, len=0)
actionsTable[12837] = 20; // 'state 100' -> > -> shift (target=10, len=0)
actionsTable[12838] = 22; // 'state 100' -> ~ -> shift (target=11, len=0)
actionsTable[12839] = 24; // 'state 100' -> + -> shift (target=12, len=0)
actionsTable[12840] = 26; // 'state 100' -> | -> shift (target=13, len=0)
actionsTable[12844] = 278; // 'state 100' -> !important -> shift (target=139, len=0)
actionsTable[12849] = 28; // 'state 100' -> ' -> shift (target=14, len=0)
actionsTable[12850] = 30; // 'state 100' -> " -> shift (target=15, len=0)
actionsTable[12854] = 280; // 'state 100' -> color_value -> shift (target=140, len=0)
actionsTable.fill(280, 12856, 12858); // 'state 100' -> integer_value..float_value -> shift (target=140, len=0)
actionsTable[12858] = 230; // 'state 100' -> identifier -> shift (target=115, len=0)
actionsTable[12860] = 280; // 'state 100' -> plain_value -> shift (target=140, len=0)
actionsTable[12928] = 697; // 'state 101' -> [ -> reduce (target=92, len=1)
actionsTable[12931] = 697; // 'state 101' -> : -> reduce (target=92, len=1)
actionsTable[12933] = 697; // 'state 101' -> , -> reduce (target=92, len=1)
actionsTable[12943] = 118; // 'state 101' -> ( -> shift (target=59, len=0)
actionsTable.fill(697, 12944, 12948); // 'state 101' -> )... -> reduce (target=92, len=1)
actionsTable.fill(697, 12956, 12958); // 'state 101' -> ::..# -> reduce (target=92, len=1)
actionsTable.fill(697, 12965, 12969); // 'state 101' -> >..| -> reduce (target=92, len=1)
actionsTable[12972] = 757; // 'state 101' -> !important -> reduce (target=122, len=1)
actionsTable.fill(697, 12977, 12979); // 'state 101' -> '.." -> reduce (target=92, len=1)
actionsTable.fill(757, 12979, 12981); // 'state 101' -> -../ -> reduce (target=122, len=1)
actionsTable[12982] = 757; // 'state 101' -> color_value -> reduce (target=122, len=1)
actionsTable.fill(757, 12984, 12986); // 'state 101' -> integer_value..float_value -> reduce (target=122, len=1)
actionsTable[12986] = 697; // 'state 101' -> identifier -> reduce (target=92, len=1)
actionsTable[12988] = 757; // 'state 101' -> plain_value -> reduce (target=122, len=1)
actionsTable[13056] = 68; // 'state 102' -> [ -> shift (target=34, len=0)
actionsTable[13059] = 70; // 'state 102' -> : -> shift (target=35, len=0)
actionsTable[13061] = 228; // 'state 102' -> , -> shift (target=114, len=0)
actionsTable[13072] = 500; // 'state 102' -> ) -> shift (target=250, len=0)
actionsTable[13073] = 260; // 'state 102' -> & -> shift (target=130, len=0)
actionsTable[13074] = 262; // 'state 102' -> * -> shift (target=131, len=0)
actionsTable[13075] = 74; // 'state 102' -> . -> shift (target=37, len=0)
actionsTable[13084] = 296; // 'state 102' -> :: -> shift (target=148, len=0)
actionsTable[13085] = 298; // 'state 102' -> # -> shift (target=149, len=0)
actionsTable[13093] = 76; // 'state 102' -> > -> shift (target=38, len=0)
actionsTable[13094] = 78; // 'state 102' -> ~ -> shift (target=39, len=0)
actionsTable[13095] = 80; // 'state 102' -> + -> shift (target=40, len=0)
actionsTable[13096] = 82; // 'state 102' -> | -> shift (target=41, len=0)
actionsTable[13105] = 28; // 'state 102' -> ' -> shift (target=14, len=0)
actionsTable[13106] = 30; // 'state 102' -> " -> shift (target=15, len=0)
actionsTable[13114] = 272; // 'state 102' -> identifier -> shift (target=136, len=0)
actionsTable[13184] = 44; // 'state 103' -> [ -> shift (target=22, len=0)
actionsTable[13189] = 228; // 'state 103' -> , -> shift (target=114, len=0)
actionsTable[13199] = 46; // 'state 103' -> ( -> shift (target=23, len=0)
actionsTable[13200] = 500; // 'state 103' -> ) -> shift (target=250, len=0)
actionsTable[13228] = 278; // 'state 103' -> !important -> shift (target=139, len=0)
actionsTable[13233] = 28; // 'state 103' -> ' -> shift (target=14, len=0)
actionsTable[13234] = 30; // 'state 103' -> " -> shift (target=15, len=0)
actionsTable[13238] = 280; // 'state 103' -> color_value -> shift (target=140, len=0)
actionsTable.fill(280, 13240, 13242); // 'state 103' -> integer_value..float_value -> shift (target=140, len=0)
actionsTable[13242] = 48; // 'state 103' -> identifier -> shift (target=24, len=0)
actionsTable[13244] = 280; // 'state 103' -> plain_value -> shift (target=140, len=0)
actionsTable[13312] = 68; // 'state 104' -> [ -> shift (target=34, len=0)
actionsTable[13315] = 70; // 'state 104' -> : -> shift (target=35, len=0)
actionsTable[13317] = 228; // 'state 104' -> , -> shift (target=114, len=0)
actionsTable[13328] = 506; // 'state 104' -> ) -> shift (target=253, len=0)
actionsTable[13329] = 260; // 'state 104' -> & -> shift (target=130, len=0)
actionsTable[13330] = 262; // 'state 104' -> * -> shift (target=131, len=0)
actionsTable[13331] = 74; // 'state 104' -> . -> shift (target=37, len=0)
actionsTable[13340] = 296; // 'state 104' -> :: -> shift (target=148, len=0)
actionsTable[13341] = 298; // 'state 104' -> # -> shift (target=149, len=0)
actionsTable[13349] = 76; // 'state 104' -> > -> shift (target=38, len=0)
actionsTable[13350] = 78; // 'state 104' -> ~ -> shift (target=39, len=0)
actionsTable[13351] = 80; // 'state 104' -> + -> shift (target=40, len=0)
actionsTable[13352] = 82; // 'state 104' -> | -> shift (target=41, len=0)
actionsTable[13361] = 28; // 'state 104' -> ' -> shift (target=14, len=0)
actionsTable[13362] = 30; // 'state 104' -> " -> shift (target=15, len=0)
actionsTable[13370] = 272; // 'state 104' -> identifier -> shift (target=136, len=0)
actionsTable[13440] = 44; // 'state 105' -> [ -> shift (target=22, len=0)
actionsTable[13445] = 228; // 'state 105' -> , -> shift (target=114, len=0)
actionsTable[13455] = 46; // 'state 105' -> ( -> shift (target=23, len=0)
actionsTable[13456] = 506; // 'state 105' -> ) -> shift (target=253, len=0)
actionsTable[13484] = 278; // 'state 105' -> !important -> shift (target=139, len=0)
actionsTable[13489] = 28; // 'state 105' -> ' -> shift (target=14, len=0)
actionsTable[13490] = 30; // 'state 105' -> " -> shift (target=15, len=0)
actionsTable[13494] = 280; // 'state 105' -> color_value -> shift (target=140, len=0)
actionsTable.fill(280, 13496, 13498); // 'state 105' -> integer_value..float_value -> shift (target=140, len=0)
actionsTable[13498] = 48; // 'state 105' -> identifier -> shift (target=24, len=0)
actionsTable[13500] = 280; // 'state 105' -> plain_value -> shift (target=140, len=0)
actionsTable[13568] = 44; // 'state 106' -> [ -> shift (target=22, len=0)
actionsTable[13583] = 46; // 'state 106' -> ( -> shift (target=23, len=0)
actionsTable[13612] = 278; // 'state 106' -> !important -> shift (target=139, len=0)
actionsTable[13617] = 28; // 'state 106' -> ' -> shift (target=14, len=0)
actionsTable[13618] = 30; // 'state 106' -> " -> shift (target=15, len=0)
actionsTable[13622] = 280; // 'state 106' -> color_value -> shift (target=140, len=0)
actionsTable.fill(280, 13624, 13626); // 'state 106' -> integer_value..float_value -> shift (target=140, len=0)
actionsTable[13626] = 48; // 'state 106' -> identifier -> shift (target=24, len=0)
actionsTable[13628] = 280; // 'state 106' -> plain_value -> shift (target=140, len=0)
actionsTable[13696] = 44; // 'state 107' -> [ -> shift (target=22, len=0)
actionsTable[13701] = 166; // 'state 107' -> , -> shift (target=83, len=0)
actionsTable[13702] = 380; // 'state 107' -> ; -> shift (target=190, len=0)
actionsTable[13708] = 1765; // 'state 107' -> } -> reduce (target=114, len=3)
actionsTable[13711] = 46; // 'state 107' -> ( -> shift (target=23, len=0)
actionsTable[13714] = 114; // 'state 107' -> * -> shift (target=57, len=0)
actionsTable[13735] = 114; // 'state 107' -> + -> shift (target=57, len=0)
actionsTable[13740] = 278; // 'state 107' -> !important -> shift (target=139, len=0)
actionsTable[13745] = 28; // 'state 107' -> ' -> shift (target=14, len=0)
actionsTable[13746] = 30; // 'state 107' -> " -> shift (target=15, len=0)
actionsTable.fill(114, 13747, 13749); // 'state 107' -> -../ -> shift (target=57, len=0)
actionsTable[13750] = 280; // 'state 107' -> color_value -> shift (target=140, len=0)
actionsTable.fill(280, 13752, 13754); // 'state 107' -> integer_value..float_value -> shift (target=140, len=0)
actionsTable[13754] = 48; // 'state 107' -> identifier -> shift (target=24, len=0)
actionsTable[13756] = 280; // 'state 107' -> plain_value -> shift (target=140, len=0)
actionsTable[13827] = 184; // 'state 108' -> : -> shift (target=92, len=0)
actionsTable[13839] = 118; // 'state 108' -> ( -> shift (target=59, len=0)
actionsTable[13840] = 745; // 'state 108' -> ) -> reduce (target=116, len=1)
actionsTable[13842] = 757; // 'state 108' -> * -> reduce (target=122, len=1)
actionsTable[13863] = 757; // 'state 108' -> + -> reduce (target=122, len=1)
actionsTable.fill(745, 13869, 13871); // 'state 108' -> and..or -> reduce (target=116, len=1)
actionsTable.fill(757, 13875, 13877); // 'state 108' -> -../ -> reduce (target=122, len=1)
actionsTable[13952] = 44; // 'state 109' -> [ -> shift (target=22, len=0)
actionsTable[13967] = 46; // 'state 109' -> ( -> shift (target=23, len=0)
actionsTable[13996] = 278; // 'state 109' -> !important -> shift (target=139, len=0)
actionsTable[14001] = 28; // 'state 109' -> ' -> shift (target=14, len=0)
actionsTable[14002] = 30; // 'state 109' -> " -> shift (target=15, len=0)
actionsTable[14006] = 280; // 'state 109' -> color_value -> shift (target=140, len=0)
actionsTable.fill(280, 14008, 14010); // 'state 109' -> integer_value..float_value -> shift (target=140, len=0)
actionsTable[14010] = 48; // 'state 109' -> identifier -> shift (target=24, len=0)
actionsTable[14012] = 280; // 'state 109' -> plain_value -> shift (target=140, len=0)
actionsTable[14080] = 44; // 'state 110' -> [ -> shift (target=22, len=0)
actionsTable[14095] = 46; // 'state 110' -> ( -> shift (target=23, len=0)
actionsTable[14124] = 278; // 'state 110' -> !important -> shift (target=139, len=0)
actionsTable[14129] = 28; // 'state 110' -> ' -> shift (target=14, len=0)
actionsTable[14130] = 30; // 'state 110' -> " -> shift (target=15, len=0)
actionsTable[14134] = 280; // 'state 110' -> color_value -> shift (target=140, len=0)
actionsTable.fill(280, 14136, 14138); // 'state 110' -> integer_value..float_value -> shift (target=140, len=0)
actionsTable[14138] = 48; // 'state 110' -> identifier -> shift (target=24, len=0)
actionsTable[14140] = 280; // 'state 110' -> plain_value -> shift (target=140, len=0)
actionsTable[14208] = 44; // 'state 111' -> [ -> shift (target=22, len=0)
actionsTable[14223] = 46; // 'state 111' -> ( -> shift (target=23, len=0)
actionsTable[14224] = 522; // 'state 111' -> ) -> shift (target=261, len=0)
actionsTable[14252] = 278; // 'state 111' -> !important -> shift (target=139, len=0)
actionsTable[14257] = 28; // 'state 111' -> ' -> shift (target=14, len=0)
actionsTable[14258] = 30; // 'state 111' -> " -> shift (target=15, len=0)
actionsTable[14262] = 280; // 'state 111' -> color_value -> shift (target=140, len=0)
actionsTable.fill(280, 14264, 14266); // 'state 111' -> integer_value..float_value -> shift (target=140, len=0)
actionsTable[14266] = 48; // 'state 111' -> identifier -> shift (target=24, len=0)
actionsTable[14268] = 280; // 'state 111' -> plain_value -> shift (target=140, len=0)
actionsTable[14341] = 524; // 'state 112' -> , -> shift (target=262, len=0)
actionsTable[14347] = 42; // 'state 112' -> { -> shift (target=21, len=0)
actionsTable[14464] = 2; // 'state 113' -> [ -> shift (target=1, len=0)
actionsTable[14467] = 4; // 'state 113' -> : -> shift (target=2, len=0)
actionsTable[14481] = 260; // 'state 113' -> & -> shift (target=130, len=0)
actionsTable[14482] = 262; // 'state 113' -> * -> shift (target=131, len=0)
actionsTable[14483] = 18; // 'state 113' -> . -> shift (target=9, len=0)
actionsTable[14492] = 264; // 'state 113' -> :: -> shift (target=132, len=0)
actionsTable[14493] = 266; // 'state 113' -> # -> shift (target=133, len=0)
actionsTable[14501] = 20; // 'state 113' -> > -> shift (target=10, len=0)
actionsTable[14502] = 22; // 'state 113' -> ~ -> shift (target=11, len=0)
actionsTable[14503] = 24; // 'state 113' -> + -> shift (target=12, len=0)
actionsTable[14504] = 26; // 'state 113' -> | -> shift (target=13, len=0)
actionsTable[14513] = 28; // 'state 113' -> ' -> shift (target=14, len=0)
actionsTable[14514] = 30; // 'state 113' -> " -> shift (target=15, len=0)
actionsTable[14522] = 272; // 'state 113' -> identifier -> shift (target=136, len=0)
actionsTable[14592] = 200; // 'state 114' -> [ -> shift (target=100, len=0)
actionsTable[14595] = 4; // 'state 114' -> : -> shift (target=2, len=0)
actionsTable[14607] = 46; // 'state 114' -> ( -> shift (target=23, len=0)
actionsTable[14609] = 260; // 'state 114' -> & -> shift (target=130, len=0)
actionsTable[14610] = 262; // 'state 114' -> * -> shift (target=131, len=0)
actionsTable[14611] = 18; // 'state 114' -> . -> shift (target=9, len=0)
actionsTable[14620] = 264; // 'state 114' -> :: -> shift (target=132, len=0)
actionsTable[14621] = 266; // 'state 114' -> # -> shift (target=133, len=0)
actionsTable[14629] = 20; // 'state 114' -> > -> shift (target=10, len=0)
actionsTable[14630] = 22; // 'state 114' -> ~ -> shift (target=11, len=0)
actionsTable[14631] = 24; // 'state 114' -> + -> shift (target=12, len=0)
actionsTable[14632] = 26; // 'state 114' -> | -> shift (target=13, len=0)
actionsTable[14636] = 278; // 'state 114' -> !important -> shift (target=139, len=0)
actionsTable[14641] = 28; // 'state 114' -> ' -> shift (target=14, len=0)
actionsTable[14642] = 30; // 'state 114' -> " -> shift (target=15, len=0)
actionsTable[14646] = 280; // 'state 114' -> color_value -> shift (target=140, len=0)
actionsTable.fill(280, 14648, 14650); // 'state 114' -> integer_value..float_value -> shift (target=140, len=0)
actionsTable[14650] = 202; // 'state 114' -> identifier -> shift (target=101, len=0)
actionsTable[14652] = 280; // 'state 114' -> plain_value -> shift (target=140, len=0)
actionsTable[14720] = 697; // 'state 115' -> [ -> reduce (target=92, len=1)
actionsTable[14723] = 697; // 'state 115' -> : -> reduce (target=92, len=1)
actionsTable[14725] = 757; // 'state 115' -> , -> reduce (target=122, len=1)
actionsTable[14735] = 118; // 'state 115' -> ( -> shift (target=59, len=0)
actionsTable.fill(697, 14737, 14740); // 'state 115' -> &... -> reduce (target=92, len=1)
actionsTable.fill(697, 14748, 14750); // 'state 115' -> ::..# -> reduce (target=92, len=1)
actionsTable.fill(164, 14750, 14756); // 'state 115' -> =..$= -> shift (target=82, len=0)
actionsTable[14756] = 372; // 'state 115' -> ] -> shift (target=186, len=0)
actionsTable.fill(697, 14757, 14761); // 'state 115' -> >..| -> reduce (target=92, len=1)
actionsTable.fill(697, 14769, 14771); // 'state 115' -> '.." -> reduce (target=92, len=1)
actionsTable.fill(757, 14771, 14773); // 'state 115' -> -../ -> reduce (target=122, len=1)
actionsTable[14778] = 697; // 'state 115' -> identifier -> reduce (target=92, len=1)
actionsTable[14848] = 44; // 'state 116' -> [ -> shift (target=22, len=0)
actionsTable[14853] = 212; // 'state 116' -> , -> shift (target=106, len=0)
actionsTable[14854] = 450; // 'state 116' -> ; -> shift (target=225, len=0)
actionsTable[14860] = 2277; // 'state 116' -> } -> reduce (target=114, len=4)
actionsTable[14863] = 46; // 'state 116' -> ( -> shift (target=23, len=0)
actionsTable[14892] = 278; // 'state 116' -> !important -> shift (target=139, len=0)
actionsTable[14897] = 28; // 'state 116' -> ' -> shift (target=14, len=0)
actionsTable[14898] = 30; // 'state 116' -> " -> shift (target=15, len=0)
actionsTable[14902] = 280; // 'state 116' -> color_value -> shift (target=140, len=0)
actionsTable.fill(280, 14904, 14906); // 'state 116' -> integer_value..float_value -> shift (target=140, len=0)
actionsTable[14906] = 48; // 'state 116' -> identifier -> shift (target=24, len=0)
actionsTable[14908] = 280; // 'state 116' -> plain_value -> shift (target=140, len=0)
actionsTable[14976] = 44; // 'state 117' -> [ -> shift (target=22, len=0)
actionsTable[14991] = 46; // 'state 117' -> ( -> shift (target=23, len=0)
actionsTable[15020] = 278; // 'state 117' -> !important -> shift (target=139, len=0)
actionsTable[15025] = 28; // 'state 117' -> ' -> shift (target=14, len=0)
actionsTable[15026] = 30; // 'state 117' -> " -> shift (target=15, len=0)
actionsTable[15030] = 280; // 'state 117' -> color_value -> shift (target=140, len=0)
actionsTable.fill(280, 15032, 15034); // 'state 117' -> integer_value..float_value -> shift (target=140, len=0)
actionsTable[15034] = 48; // 'state 117' -> identifier -> shift (target=24, len=0)
actionsTable[15036] = 280; // 'state 117' -> plain_value -> shift (target=140, len=0)
actionsTable[15104] = 44; // 'state 118' -> [ -> shift (target=22, len=0)
actionsTable.fill(1287, 15109, 15111); // 'state 118' -> ,..; -> reduce (target=131, len=2)
actionsTable[15119] = 46; // 'state 118' -> ( -> shift (target=23, len=0)
actionsTable[15120] = 1287; // 'state 118' -> ) -> reduce (target=131, len=2)
actionsTable[15148] = 278; // 'state 118' -> !important -> shift (target=139, len=0)
actionsTable[15153] = 28; // 'state 118' -> ' -> shift (target=14, len=0)
actionsTable[15154] = 30; // 'state 118' -> " -> shift (target=15, len=0)
actionsTable[15158] = 280; // 'state 118' -> color_value -> shift (target=140, len=0)
actionsTable.fill(280, 15160, 15162); // 'state 118' -> integer_value..float_value -> shift (target=140, len=0)
actionsTable[15162] = 48; // 'state 118' -> identifier -> shift (target=24, len=0)
actionsTable[15164] = 280; // 'state 118' -> plain_value -> shift (target=140, len=0)
actionsTable[15232] = 2; // 'state 119' -> [ -> shift (target=1, len=0)
actionsTable[15235] = 4; // 'state 119' -> : -> shift (target=2, len=0)
actionsTable[15249] = 260; // 'state 119' -> & -> shift (target=130, len=0)
actionsTable[15250] = 262; // 'state 119' -> * -> shift (target=131, len=0)
actionsTable[15251] = 18; // 'state 119' -> . -> shift (target=9, len=0)
actionsTable[15260] = 264; // 'state 119' -> :: -> shift (target=132, len=0)
actionsTable[15261] = 266; // 'state 119' -> # -> shift (target=133, len=0)
actionsTable[15269] = 20; // 'state 119' -> > -> shift (target=10, len=0)
actionsTable[15270] = 22; // 'state 119' -> ~ -> shift (target=11, len=0)
actionsTable[15271] = 24; // 'state 119' -> + -> shift (target=12, len=0)
actionsTable[15272] = 26; // 'state 119' -> | -> shift (target=13, len=0)
actionsTable[15281] = 28; // 'state 119' -> ' -> shift (target=14, len=0)
actionsTable[15282] = 30; // 'state 119' -> " -> shift (target=15, len=0)
actionsTable[15290] = 272; // 'state 119' -> identifier -> shift (target=136, len=0)
actionsTable[15360] = 68; // 'state 120' -> [ -> shift (target=34, len=0)
actionsTable[15363] = 70; // 'state 120' -> : -> shift (target=35, len=0)
actionsTable[15376] = 542; // 'state 120' -> ) -> shift (target=271, len=0)
actionsTable[15377] = 260; // 'state 120' -> & -> shift (target=130, len=0)
actionsTable[15378] = 262; // 'state 120' -> * -> shift (target=131, len=0)
actionsTable[15379] = 74; // 'state 120' -> . -> shift (target=37, len=0)
actionsTable[15388] = 296; // 'state 120' -> :: -> shift (target=148, len=0)
actionsTable[15389] = 298; // 'state 120' -> # -> shift (target=149, len=0)
actionsTable[15397] = 76; // 'state 120' -> > -> shift (target=38, len=0)
actionsTable[15398] = 78; // 'state 120' -> ~ -> shift (target=39, len=0)
actionsTable[15399] = 80; // 'state 120' -> + -> shift (target=40, len=0)
actionsTable[15400] = 82; // 'state 120' -> | -> shift (target=41, len=0)
actionsTable[15409] = 28; // 'state 120' -> ' -> shift (target=14, len=0)
actionsTable[15410] = 30; // 'state 120' -> " -> shift (target=15, len=0)
actionsTable[15418] = 272; // 'state 120' -> identifier -> shift (target=136, len=0)
actionsTable[15488] = 200; // 'state 121' -> [ -> shift (target=100, len=0)
actionsTable[15491] = 4; // 'state 121' -> : -> shift (target=2, len=0)
actionsTable[15503] = 46; // 'state 121' -> ( -> shift (target=23, len=0)
actionsTable[15505] = 260; // 'state 121' -> & -> shift (target=130, len=0)
actionsTable[15506] = 262; // 'state 121' -> * -> shift (target=131, len=0)
actionsTable[15507] = 18; // 'state 121' -> . -> shift (target=9, len=0)
actionsTable[15516] = 264; // 'state 121' -> :: -> shift (target=132, len=0)
actionsTable[15517] = 266; // 'state 121' -> # -> shift (target=133, len=0)
actionsTable[15525] = 20; // 'state 121' -> > -> shift (target=10, len=0)
actionsTable[15526] = 22; // 'state 121' -> ~ -> shift (target=11, len=0)
actionsTable[15527] = 24; // 'state 121' -> + -> shift (target=12, len=0)
actionsTable[15528] = 26; // 'state 121' -> | -> shift (target=13, len=0)
actionsTable[15532] = 278; // 'state 121' -> !important -> shift (target=139, len=0)
actionsTable[15537] = 28; // 'state 121' -> ' -> shift (target=14, len=0)
actionsTable[15538] = 30; // 'state 121' -> " -> shift (target=15, len=0)
actionsTable[15542] = 280; // 'state 121' -> color_value -> shift (target=140, len=0)
actionsTable.fill(280, 15544, 15546); // 'state 121' -> integer_value..float_value -> shift (target=140, len=0)
actionsTable[15546] = 202; // 'state 121' -> identifier -> shift (target=101, len=0)
actionsTable[15548] = 280; // 'state 121' -> plain_value -> shift (target=140, len=0)
actionsTable[15616] = 68; // 'state 122' -> [ -> shift (target=34, len=0)
actionsTable[15619] = 70; // 'state 122' -> : -> shift (target=35, len=0)
actionsTable[15621] = 1239; // 'state 122' -> , -> reduce (target=107, len=2)
actionsTable[15632] = 1239; // 'state 122' -> ) -> reduce (target=107, len=2)
actionsTable[15633] = 260; // 'state 122' -> & -> shift (target=130, len=0)
actionsTable[15634] = 262; // 'state 122' -> * -> shift (target=131, len=0)
actionsTable[15635] = 74; // 'state 122' -> . -> shift (target=37, len=0)
actionsTable[15644] = 296; // 'state 122' -> :: -> shift (target=148, len=0)
actionsTable[15645] = 298; // 'state 122' -> # -> shift (target=149, len=0)
actionsTable[15653] = 76; // 'state 122' -> > -> shift (target=38, len=0)
actionsTable[15654] = 78; // 'state 122' -> ~ -> shift (target=39, len=0)
actionsTable[15655] = 80; // 'state 122' -> + -> shift (target=40, len=0)
actionsTable[15656] = 82; // 'state 122' -> | -> shift (target=41, len=0)
actionsTable[15665] = 28; // 'state 122' -> ' -> shift (target=14, len=0)
actionsTable[15666] = 30; // 'state 122' -> " -> shift (target=15, len=0)
actionsTable[15674] = 272; // 'state 122' -> identifier -> shift (target=136, len=0)
actionsTable[15744] = 44; // 'state 123' -> [ -> shift (target=22, len=0)
actionsTable[15749] = 1239; // 'state 123' -> , -> reduce (target=107, len=2)
actionsTable[15759] = 46; // 'state 123' -> ( -> shift (target=23, len=0)
actionsTable[15760] = 1239; // 'state 123' -> ) -> reduce (target=107, len=2)
actionsTable[15788] = 278; // 'state 123' -> !important -> shift (target=139, len=0)
actionsTable[15793] = 28; // 'state 123' -> ' -> shift (target=14, len=0)
actionsTable[15794] = 30; // 'state 123' -> " -> shift (target=15, len=0)
actionsTable[15798] = 280; // 'state 123' -> color_value -> shift (target=140, len=0)
actionsTable.fill(280, 15800, 15802); // 'state 123' -> integer_value..float_value -> shift (target=140, len=0)
actionsTable[15802] = 48; // 'state 123' -> identifier -> shift (target=24, len=0)
actionsTable[15804] = 280; // 'state 123' -> plain_value -> shift (target=140, len=0)
actionsTable[15872] = 44; // 'state 124' -> [ -> shift (target=22, len=0)
actionsTable.fill(1799, 15877, 15879); // 'state 124' -> ,..; -> reduce (target=131, len=3)
actionsTable[15887] = 46; // 'state 124' -> ( -> shift (target=23, len=0)
actionsTable[15888] = 1799; // 'state 124' -> ) -> reduce (target=131, len=3)
actionsTable[15916] = 278; // 'state 124' -> !important -> shift (target=139, len=0)
actionsTable[15921] = 28; // 'state 124' -> ' -> shift (target=14, len=0)
actionsTable[15922] = 30; // 'state 124' -> " -> shift (target=15, len=0)
actionsTable[15926] = 280; // 'state 124' -> color_value -> shift (target=140, len=0)
actionsTable.fill(280, 15928, 15930); // 'state 124' -> integer_value..float_value -> shift (target=140, len=0)
actionsTable[15930] = 48; // 'state 124' -> identifier -> shift (target=24, len=0)
actionsTable[15932] = 280; // 'state 124' -> plain_value -> shift (target=140, len=0)
actionsTable[16000] = 68; // 'state 125' -> [ -> shift (target=34, len=0)
actionsTable[16003] = 70; // 'state 125' -> : -> shift (target=35, len=0)
actionsTable[16016] = 256; // 'state 125' -> ) -> shift (target=128, len=0)
actionsTable[16017] = 260; // 'state 125' -> & -> shift (target=130, len=0)
actionsTable[16018] = 262; // 'state 125' -> * -> shift (target=131, len=0)
actionsTable[16019] = 74; // 'state 125' -> . -> shift (target=37, len=0)
actionsTable[16028] = 296; // 'state 125' -> :: -> shift (target=148, len=0)
actionsTable[16029] = 298; // 'state 125' -> # -> shift (target=149, len=0)
actionsTable[16037] = 76; // 'state 125' -> > -> shift (target=38, len=0)
actionsTable[16038] = 78; // 'state 125' -> ~ -> shift (target=39, len=0)
actionsTable[16039] = 80; // 'state 125' -> + -> shift (target=40, len=0)
actionsTable[16040] = 82; // 'state 125' -> | -> shift (target=41, len=0)
actionsTable[16049] = 28; // 'state 125' -> ' -> shift (target=14, len=0)
actionsTable[16050] = 30; // 'state 125' -> " -> shift (target=15, len=0)
actionsTable[16058] = 272; // 'state 125' -> identifier -> shift (target=136, len=0)
actionsTable[16128] = 68; // 'state 126' -> [ -> shift (target=34, len=0)
actionsTable[16131] = 70; // 'state 126' -> : -> shift (target=35, len=0)
actionsTable[16133] = 1751; // 'state 126' -> , -> reduce (target=107, len=3)
actionsTable[16144] = 1751; // 'state 126' -> ) -> reduce (target=107, len=3)
actionsTable[16145] = 260; // 'state 126' -> & -> shift (target=130, len=0)
actionsTable[16146] = 262; // 'state 126' -> * -> shift (target=131, len=0)
actionsTable[16147] = 74; // 'state 126' -> . -> shift (target=37, len=0)
actionsTable[16156] = 296; // 'state 126' -> :: -> shift (target=148, len=0)
actionsTable[16157] = 298; // 'state 126' -> # -> shift (target=149, len=0)
actionsTable[16165] = 76; // 'state 126' -> > -> shift (target=38, len=0)
actionsTable[16166] = 78; // 'state 126' -> ~ -> shift (target=39, len=0)
actionsTable[16167] = 80; // 'state 126' -> + -> shift (target=40, len=0)
actionsTable[16168] = 82; // 'state 126' -> | -> shift (target=41, len=0)
actionsTable[16177] = 28; // 'state 126' -> ' -> shift (target=14, len=0)
actionsTable[16178] = 30; // 'state 126' -> " -> shift (target=15, len=0)
actionsTable[16186] = 272; // 'state 126' -> identifier -> shift (target=136, len=0)
actionsTable[16256] = 44; // 'state 127' -> [ -> shift (target=22, len=0)
actionsTable[16261] = 1751; // 'state 127' -> , -> reduce (target=107, len=3)
actionsTable[16271] = 46; // 'state 127' -> ( -> shift (target=23, len=0)
actionsTable[16272] = 1751; // 'state 127' -> ) -> reduce (target=107, len=3)
actionsTable[16300] = 278; // 'state 127' -> !important -> shift (target=139, len=0)
actionsTable[16305] = 28; // 'state 127' -> ' -> shift (target=14, len=0)
actionsTable[16306] = 30; // 'state 127' -> " -> shift (target=15, len=0)
actionsTable[16310] = 280; // 'state 127' -> color_value -> shift (target=140, len=0)
actionsTable.fill(280, 16312, 16314); // 'state 127' -> integer_value..float_value -> shift (target=140, len=0)
actionsTable[16314] = 48; // 'state 127' -> identifier -> shift (target=24, len=0)
actionsTable[16316] = 280; // 'state 127' -> plain_value -> shift (target=140, len=0)
actionsTable[16395] = 42; // 'state 128' -> { -> shift (target=21, len=0)
actionsTable[16570] = 60; // 'state 129' -> identifier -> shift (target=30, len=0)
actionsTable[16640] = 699; // 'state 130' -> [ -> reduce (target=93, len=1)
actionsTable[16643] = 699; // 'state 130' -> : -> reduce (target=93, len=1)
actionsTable[16645] = 699; // 'state 130' -> , -> reduce (target=93, len=1)
actionsTable[16651] = 699; // 'state 130' -> { -> reduce (target=93, len=1)
actionsTable.fill(699, 16656, 16660); // 'state 130' -> )... -> reduce (target=93, len=1)
actionsTable.fill(699, 16668, 16681); // 'state 130' -> ::..| -> reduce (target=93, len=1)
actionsTable.fill(699, 16689, 16691); // 'state 130' -> '.." -> reduce (target=93, len=1)
actionsTable[16698] = 699; // 'state 130' -> identifier -> reduce (target=93, len=1)
actionsTable[16768] = 701; // 'state 131' -> [ -> reduce (target=94, len=1)
actionsTable[16771] = 701; // 'state 131' -> : -> reduce (target=94, len=1)
actionsTable[16773] = 701; // 'state 131' -> , -> reduce (target=94, len=1)
actionsTable[16779] = 701; // 'state 131' -> { -> reduce (target=94, len=1)
actionsTable.fill(701, 16784, 16788); // 'state 131' -> )... -> reduce (target=94, len=1)
actionsTable.fill(701, 16796, 16809); // 'state 131' -> ::..| -> reduce (target=94, len=1)
actionsTable.fill(701, 16817, 16819); // 'state 131' -> '.." -> reduce (target=94, len=1)
actionsTable[16826] = 701; // 'state 131' -> identifier -> reduce (target=94, len=1)
actionsTable[16954] = 96; // 'state 132' -> identifier -> shift (target=48, len=0)
actionsTable[17082] = 306; // 'state 133' -> identifier -> shift (target=153, len=0)
actionsTable[17152] = 697; // 'state 134' -> [ -> reduce (target=92, len=1)
actionsTable[17155] = 40; // 'state 134' -> : -> shift (target=20, len=0)
actionsTable[17157] = 697; // 'state 134' -> , -> reduce (target=92, len=1)
actionsTable[17163] = 697; // 'state 134' -> { -> reduce (target=92, len=1)
actionsTable.fill(697, 17169, 17172); // 'state 134' -> &... -> reduce (target=92, len=1)
actionsTable.fill(697, 17180, 17182); // 'state 134' -> ::..# -> reduce (target=92, len=1)
actionsTable.fill(697, 17189, 17193); // 'state 134' -> >..| -> reduce (target=92, len=1)
actionsTable.fill(697, 17201, 17203); // 'state 134' -> '.." -> reduce (target=92, len=1)
actionsTable[17210] = 697; // 'state 134' -> identifier -> reduce (target=92, len=1)
actionsTable[17280] = 655; // 'state 135' -> [ -> reduce (target=71, len=1)
actionsTable.fill(655, 17283, 17285); // 'state 135' -> :..@import -> reduce (target=71, len=1)
actionsTable.fill(655, 17287, 17291); // 'state 135' -> @media..@keyframes -> reduce (target=71, len=1)
actionsTable.fill(655, 17293, 17295); // 'state 135' -> @supports..@scope -> reduce (target=71, len=1)
actionsTable.fill(655, 17297, 17300); // 'state 135' -> &... -> reduce (target=71, len=1)
actionsTable.fill(655, 17308, 17310); // 'state 135' -> ::..# -> reduce (target=71, len=1)
actionsTable.fill(655, 17317, 17321); // 'state 135' -> >..| -> reduce (target=71, len=1)
actionsTable.fill(655, 17329, 17331); // 'state 135' -> '.." -> reduce (target=71, len=1)
actionsTable.fill(655, 17338, 17340); // 'state 135' -> identifier..at_keyword -> reduce (target=71, len=1)
actionsTable[17342] = 655; // 'state 135' -> _keyframes_statement_token1 -> reduce (target=71, len=1)
actionsTable[17346] = 655; // 'state 135' -> @par-gen.EOF -> reduce (target=71, len=1)
actionsTable[17408] = 697; // 'state 136' -> [ -> reduce (target=92, len=1)
actionsTable[17411] = 697; // 'state 136' -> : -> reduce (target=92, len=1)
actionsTable[17413] = 697; // 'state 136' -> , -> reduce (target=92, len=1)
actionsTable[17419] = 697; // 'state 136' -> { -> reduce (target=92, len=1)
actionsTable.fill(697, 17424, 17428); // 'state 136' -> )... -> reduce (target=92, len=1)
actionsTable.fill(697, 17436, 17449); // 'state 136' -> ::..| -> reduce (target=92, len=1)
actionsTable.fill(697, 17457, 17459); // 'state 136' -> '.." -> reduce (target=92, len=1)
actionsTable[17466] = 697; // 'state 136' -> identifier -> reduce (target=92, len=1)
actionsTable[17536] = 1167; // 'state 137' -> [ -> reduce (target=71, len=2)
actionsTable.fill(1167, 17539, 17541); // 'state 137' -> :..@import -> reduce (target=71, len=2)
actionsTable.fill(1167, 17543, 17547); // 'state 137' -> @media..@keyframes -> reduce (target=71, len=2)
actionsTable.fill(1167, 17549, 17551); // 'state 137' -> @supports..@scope -> reduce (target=71, len=2)
actionsTable.fill(1167, 17553, 17556); // 'state 137' -> &... -> reduce (target=71, len=2)
actionsTable.fill(1167, 17564, 17566); // 'state 137' -> ::..# -> reduce (target=71, len=2)
actionsTable.fill(1167, 17573, 17577); // 'state 137' -> >..| -> reduce (target=71, len=2)
actionsTable.fill(1167, 17585, 17587); // 'state 137' -> '.." -> reduce (target=71, len=2)
actionsTable.fill(1167, 17594, 17596); // 'state 137' -> identifier..at_keyword -> reduce (target=71, len=2)
actionsTable[17598] = 1167; // 'state 137' -> _keyframes_statement_token1 -> reduce (target=71, len=2)
actionsTable[17602] = 1167; // 'state 137' -> @par-gen.EOF -> reduce (target=71, len=2)
actionsTable[17664] = 1199; // 'state 138' -> [ -> reduce (target=87, len=2)
actionsTable.fill(1199, 17667, 17669); // 'state 138' -> :..@import -> reduce (target=87, len=2)
actionsTable.fill(1199, 17671, 17675); // 'state 138' -> @media..@keyframes -> reduce (target=87, len=2)
actionsTable.fill(1199, 17676, 17679); // 'state 138' -> }..@scope -> reduce (target=87, len=2)
actionsTable.fill(1199, 17681, 17684); // 'state 138' -> &... -> reduce (target=87, len=2)
actionsTable.fill(1199, 17692, 17694); // 'state 138' -> ::..# -> reduce (target=87, len=2)
actionsTable.fill(1199, 17701, 17705); // 'state 138' -> >..| -> reduce (target=87, len=2)
actionsTable.fill(1199, 17713, 17715); // 'state 138' -> '.." -> reduce (target=87, len=2)
actionsTable.fill(1199, 17722, 17724); // 'state 138' -> identifier..at_keyword -> reduce (target=87, len=2)
actionsTable[17726] = 1199; // 'state 138' -> _keyframes_statement_token1 -> reduce (target=87, len=2)
actionsTable[17730] = 1199; // 'state 138' -> @par-gen.EOF -> reduce (target=87, len=2)
actionsTable[17792] = 743; // 'state 139' -> [ -> reduce (target=115, len=1)
actionsTable.fill(743, 17797, 17799); // 'state 139' -> ,..; -> reduce (target=115, len=1)
actionsTable[17804] = 743; // 'state 139' -> } -> reduce (target=115, len=1)
actionsTable.fill(743, 17807, 17809); // 'state 139' -> (..) -> reduce (target=115, len=1)
actionsTable[17810] = 743; // 'state 139' -> * -> reduce (target=115, len=1)
actionsTable[17813] = 743; // 'state 139' -> not -> reduce (target=115, len=1)
actionsTable[17828] = 743; // 'state 139' -> ] -> reduce (target=115, len=1)
actionsTable[17831] = 743; // 'state 139' -> + -> reduce (target=115, len=1)
actionsTable[17836] = 743; // 'state 139' -> !important -> reduce (target=115, len=1)
actionsTable.fill(743, 17839, 17845); // 'state 139' -> only../ -> reduce (target=115, len=1)
actionsTable[17846] = 743; // 'state 139' -> color_value -> reduce (target=115, len=1)
actionsTable.fill(743, 17848, 17851); // 'state 139' -> integer_value..identifier -> reduce (target=115, len=1)
actionsTable.fill(743, 17852, 17854); // 'state 139' -> plain_value..important_value -> reduce (target=115, len=1)
actionsTable[17920] = 757; // 'state 140' -> [ -> reduce (target=122, len=1)
actionsTable.fill(757, 17925, 17927); // 'state 140' -> ,..; -> reduce (target=122, len=1)
actionsTable[17932] = 757; // 'state 140' -> } -> reduce (target=122, len=1)
actionsTable.fill(757, 17935, 17937); // 'state 140' -> (..) -> reduce (target=122, len=1)
actionsTable[17938] = 757; // 'state 140' -> * -> reduce (target=122, len=1)
actionsTable[17941] = 757; // 'state 140' -> not -> reduce (target=122, len=1)
actionsTable[17956] = 757; // 'state 140' -> ] -> reduce (target=122, len=1)
actionsTable[17959] = 757; // 'state 140' -> + -> reduce (target=122, len=1)
actionsTable[17964] = 757; // 'state 140' -> !important -> reduce (target=122, len=1)
actionsTable.fill(757, 17967, 17973); // 'state 140' -> only../ -> reduce (target=122, len=1)
actionsTable[17974] = 757; // 'state 140' -> color_value -> reduce (target=122, len=1)
actionsTable.fill(757, 17976, 17979); // 'state 140' -> integer_value..identifier -> reduce (target=122, len=1)
actionsTable.fill(757, 17980, 17982); // 'state 140' -> plain_value..important_value -> reduce (target=122, len=1)
actionsTable[18063] = 128; // 'state 141' -> ( -> shift (target=64, len=0)
actionsTable.fill(745, 18181, 18183); // 'state 142' -> ,..; -> reduce (target=116, len=1)
actionsTable[18187] = 745; // 'state 142' -> { -> reduce (target=116, len=1)
actionsTable[18192] = 745; // 'state 142' -> ) -> reduce (target=116, len=1)
actionsTable.fill(745, 18221, 18223); // 'state 142' -> and..or -> reduce (target=116, len=1)
actionsTable[18310] = 342; // 'state 143' -> ; -> shift (target=171, len=0)
actionsTable[18322] = 114; // 'state 143' -> * -> shift (target=57, len=0)
actionsTable[18343] = 114; // 'state 143' -> + -> shift (target=57, len=0)
actionsTable.fill(114, 18355, 18357); // 'state 143' -> -../ -> shift (target=57, len=0)
actionsTable[18438] = 346; // 'state 144' -> ; -> shift (target=173, len=0)
actionsTable[18560] = 1191; // 'state 145' -> [ -> reduce (target=83, len=2)
actionsTable.fill(1191, 18563, 18565); // 'state 145' -> :..@import -> reduce (target=83, len=2)
actionsTable.fill(1191, 18567, 18571); // 'state 145' -> @media..@keyframes -> reduce (target=83, len=2)
actionsTable.fill(1191, 18572, 18575); // 'state 145' -> }..@scope -> reduce (target=83, len=2)
actionsTable.fill(1191, 18577, 18580); // 'state 145' -> &... -> reduce (target=83, len=2)
actionsTable.fill(1191, 18588, 18590); // 'state 145' -> ::..# -> reduce (target=83, len=2)
actionsTable.fill(1191, 18597, 18601); // 'state 145' -> >..| -> reduce (target=83, len=2)
actionsTable.fill(1191, 18609, 18611); // 'state 145' -> '.." -> reduce (target=83, len=2)
actionsTable.fill(1191, 18618, 18620); // 'state 145' -> identifier..at_keyword -> reduce (target=83, len=2)
actionsTable[18622] = 1191; // 'state 145' -> _keyframes_statement_token1 -> reduce (target=83, len=2)
actionsTable[18626] = 1191; // 'state 145' -> @par-gen.EOF -> reduce (target=83, len=2)
actionsTable[18688] = 1197; // 'state 146' -> [ -> reduce (target=86, len=2)
actionsTable.fill(1197, 18691, 18693); // 'state 146' -> :..@import -> reduce (target=86, len=2)
actionsTable.fill(1197, 18695, 18699); // 'state 146' -> @media..@keyframes -> reduce (target=86, len=2)
actionsTable.fill(1197, 18701, 18703); // 'state 146' -> @supports..@scope -> reduce (target=86, len=2)
actionsTable.fill(1197, 18705, 18708); // 'state 146' -> &... -> reduce (target=86, len=2)
actionsTable.fill(1197, 18716, 18718); // 'state 146' -> ::..# -> reduce (target=86, len=2)
actionsTable.fill(1197, 18725, 18729); // 'state 146' -> >..| -> reduce (target=86, len=2)
actionsTable.fill(1197, 18737, 18739); // 'state 146' -> '.." -> reduce (target=86, len=2)
actionsTable.fill(1197, 18746, 18748); // 'state 146' -> identifier..at_keyword -> reduce (target=86, len=2)
actionsTable[18750] = 1197; // 'state 146' -> _keyframes_statement_token1 -> reduce (target=86, len=2)
actionsTable[18754] = 1197; // 'state 146' -> @par-gen.EOF -> reduce (target=86, len=2)
actionsTable[18816] = 1197; // 'state 147' -> [ -> reduce (target=86, len=2)
actionsTable.fill(1197, 18819, 18821); // 'state 147' -> :..@import -> reduce (target=86, len=2)
actionsTable.fill(1197, 18823, 18827); // 'state 147' -> @media..@keyframes -> reduce (target=86, len=2)
actionsTable.fill(1197, 18828, 18831); // 'state 147' -> }..@scope -> reduce (target=86, len=2)
actionsTable.fill(1197, 18833, 18836); // 'state 147' -> &... -> reduce (target=86, len=2)
actionsTable.fill(1197, 18844, 18846); // 'state 147' -> ::..# -> reduce (target=86, len=2)
actionsTable.fill(1197, 18853, 18857); // 'state 147' -> >..| -> reduce (target=86, len=2)
actionsTable.fill(1197, 18865, 18867); // 'state 147' -> '.." -> reduce (target=86, len=2)
actionsTable.fill(1197, 18874, 18876); // 'state 147' -> identifier..at_keyword -> reduce (target=86, len=2)
actionsTable[18878] = 1197; // 'state 147' -> _keyframes_statement_token1 -> reduce (target=86, len=2)
actionsTable[18882] = 1197; // 'state 147' -> @par-gen.EOF -> reduce (target=86, len=2)
actionsTable[19002] = 148; // 'state 148' -> identifier -> shift (target=74, len=0)
actionsTable[19130] = 358; // 'state 149' -> identifier -> shift (target=179, len=0)
actionsTable[19205] = 138; // 'state 150' -> , -> shift (target=69, len=0)
actionsTable[19211] = 1203; // 'state 150' -> { -> reduce (target=89, len=2)
actionsTable[19328] = 1215; // 'state 151' -> [ -> reduce (target=95, len=2)
actionsTable[19331] = 1215; // 'state 151' -> : -> reduce (target=95, len=2)
actionsTable[19333] = 1215; // 'state 151' -> , -> reduce (target=95, len=2)
actionsTable[19339] = 1215; // 'state 151' -> { -> reduce (target=95, len=2)
actionsTable.fill(1215, 19344, 19348); // 'state 151' -> )... -> reduce (target=95, len=2)
actionsTable.fill(1215, 19356, 19369); // 'state 151' -> ::..| -> reduce (target=95, len=2)
actionsTable.fill(1215, 19377, 19379); // 'state 151' -> '.." -> reduce (target=95, len=2)
actionsTable[19386] = 1215; // 'state 151' -> identifier -> reduce (target=95, len=2)
actionsTable[19456] = 1217; // 'state 152' -> [ -> reduce (target=96, len=2)
actionsTable[19459] = 1217; // 'state 152' -> : -> reduce (target=96, len=2)
actionsTable[19461] = 1217; // 'state 152' -> , -> reduce (target=96, len=2)
actionsTable[19467] = 1217; // 'state 152' -> { -> reduce (target=96, len=2)
actionsTable.fill(1217, 19472, 19476); // 'state 152' -> )... -> reduce (target=96, len=2)
actionsTable.fill(1217, 19484, 19497); // 'state 152' -> ::..| -> reduce (target=96, len=2)
actionsTable.fill(1217, 19505, 19507); // 'state 152' -> '.." -> reduce (target=96, len=2)
actionsTable[19514] = 1217; // 'state 152' -> identifier -> reduce (target=96, len=2)
actionsTable[19584] = 1223; // 'state 153' -> [ -> reduce (target=99, len=2)
actionsTable[19587] = 1223; // 'state 153' -> : -> reduce (target=99, len=2)
actionsTable[19589] = 1223; // 'state 153' -> , -> reduce (target=99, len=2)
actionsTable[19595] = 1223; // 'state 153' -> { -> reduce (target=99, len=2)
actionsTable.fill(1223, 19600, 19604); // 'state 153' -> )... -> reduce (target=99, len=2)
actionsTable.fill(1223, 19612, 19625); // 'state 153' -> ::..| -> reduce (target=99, len=2)
actionsTable.fill(1223, 19633, 19635); // 'state 153' -> '.." -> reduce (target=99, len=2)
actionsTable[19642] = 1223; // 'state 153' -> identifier -> reduce (target=99, len=2)
actionsTable[19712] = 697; // 'state 154' -> [ -> reduce (target=92, len=1)
actionsTable[19715] = 697; // 'state 154' -> : -> reduce (target=92, len=1)
actionsTable.fill(697, 19729, 19732); // 'state 154' -> &... -> reduce (target=92, len=1)
actionsTable.fill(697, 19740, 19742); // 'state 154' -> ::..# -> reduce (target=92, len=1)
actionsTable.fill(164, 19742, 19748); // 'state 154' -> =..$= -> shift (target=82, len=0)
actionsTable[19748] = 372; // 'state 154' -> ] -> shift (target=186, len=0)
actionsTable.fill(697, 19749, 19753); // 'state 154' -> >..| -> reduce (target=92, len=1)
actionsTable.fill(697, 19761, 19763); // 'state 154' -> '.." -> reduce (target=92, len=1)
actionsTable[19770] = 697; // 'state 154' -> identifier -> reduce (target=92, len=1)
actionsTable[19840] = 1277; // 'state 155' -> [ -> reduce (target=126, len=2)
actionsTable[19843] = 1277; // 'state 155' -> : -> reduce (target=126, len=2)
actionsTable.fill(1277, 19845, 19847); // 'state 155' -> ,..; -> reduce (target=126, len=2)
actionsTable.fill(1277, 19851, 19853); // 'state 155' -> {..} -> reduce (target=126, len=2)
actionsTable.fill(1277, 19855, 19860); // 'state 155' -> (... -> reduce (target=126, len=2)
actionsTable[19861] = 1277; // 'state 155' -> not -> reduce (target=126, len=2)
actionsTable.fill(1277, 19868, 19881); // 'state 155' -> ::..| -> reduce (target=126, len=2)
actionsTable[19884] = 1277; // 'state 155' -> !important -> reduce (target=126, len=2)
actionsTable.fill(1277, 19887, 19893); // 'state 155' -> only../ -> reduce (target=126, len=2)
actionsTable[19894] = 1277; // 'state 155' -> color_value -> reduce (target=126, len=2)
actionsTable.fill(1277, 19896, 19899); // 'state 155' -> integer_value..identifier -> reduce (target=126, len=2)
actionsTable.fill(1277, 19900, 19902); // 'state 155' -> plain_value..important_value -> reduce (target=126, len=2)
actionsTable[20017] = 761; // 'state 156' -> ' -> reduce (target=124, len=1)
actionsTable[20023] = 761; // 'state 156' -> escape_sequence -> reduce (target=124, len=1)
actionsTable[20031] = 761; // 'state 156' -> _string_value_token2 -> reduce (target=124, len=1)
actionsTable[20145] = 374; // 'state 157' -> ' -> shift (target=187, len=0)
actionsTable[20151] = 376; // 'state 157' -> escape_sequence -> shift (target=188, len=0)
actionsTable[20159] = 376; // 'state 157' -> _string_value_token2 -> shift (target=188, len=0)
actionsTable[20274] = 763; // 'state 158' -> " -> reduce (target=125, len=1)
actionsTable[20279] = 763; // 'state 158' -> escape_sequence -> reduce (target=125, len=1)
actionsTable[20288] = 763; // 'state 158' -> _string_value_token3 -> reduce (target=125, len=1)
actionsTable[20402] = 374; // 'state 159' -> " -> shift (target=187, len=0)
actionsTable[20407] = 378; // 'state 159' -> escape_sequence -> shift (target=189, len=0)
actionsTable[20416] = 378; // 'state 159' -> _string_value_token3 -> shift (target=189, len=0)
actionsTable.fill(1207, 20480, 20485); // 'state 160' -> [..@import -> reduce (target=91, len=2)
actionsTable.fill(1207, 20487, 20491); // 'state 160' -> @media..@keyframes -> reduce (target=91, len=2)
actionsTable.fill(1207, 20492, 20495); // 'state 160' -> }..@scope -> reduce (target=91, len=2)
actionsTable.fill(1207, 20497, 20500); // 'state 160' -> &... -> reduce (target=91, len=2)
actionsTable.fill(1207, 20508, 20510); // 'state 160' -> ::..# -> reduce (target=91, len=2)
actionsTable.fill(1207, 20517, 20521); // 'state 160' -> >..| -> reduce (target=91, len=2)
actionsTable.fill(1207, 20529, 20531); // 'state 160' -> '.." -> reduce (target=91, len=2)
actionsTable[20536] = 1207; // 'state 160' -> integer_value -> reduce (target=91, len=2)
actionsTable.fill(1207, 20538, 20540); // 'state 160' -> identifier..at_keyword -> reduce (target=91, len=2)
actionsTable[20542] = 1207; // 'state 160' -> _keyframes_statement_token1 -> reduce (target=91, len=2)
actionsTable[20546] = 1207; // 'state 160' -> @par-gen.EOF -> reduce (target=91, len=2)
actionsTable[20608] = 697; // 'state 161' -> [ -> reduce (target=92, len=1)
actionsTable[20611] = 170; // 'state 161' -> : -> shift (target=85, len=0)
actionsTable[20613] = 697; // 'state 161' -> , -> reduce (target=92, len=1)
actionsTable[20619] = 697; // 'state 161' -> { -> reduce (target=92, len=1)
actionsTable.fill(697, 20625, 20628); // 'state 161' -> &... -> reduce (target=92, len=1)
actionsTable.fill(697, 20636, 20638); // 'state 161' -> ::..# -> reduce (target=92, len=1)
actionsTable.fill(697, 20645, 20649); // 'state 161' -> >..| -> reduce (target=92, len=1)
actionsTable.fill(697, 20657, 20659); // 'state 161' -> '.." -> reduce (target=92, len=1)
actionsTable[20666] = 697; // 'state 161' -> identifier -> reduce (target=92, len=1)
actionsTable[20736] = 693; // 'state 162' -> [ -> reduce (target=90, len=1)
actionsTable.fill(693, 20739, 20741); // 'state 162' -> :..@import -> reduce (target=90, len=1)
actionsTable.fill(693, 20743, 20747); // 'state 162' -> @media..@keyframes -> reduce (target=90, len=1)
actionsTable.fill(693, 20748, 20751); // 'state 162' -> }..@scope -> reduce (target=90, len=1)
actionsTable.fill(693, 20753, 20756); // 'state 162' -> &... -> reduce (target=90, len=1)
actionsTable.fill(693, 20764, 20766); // 'state 162' -> ::..# -> reduce (target=90, len=1)
actionsTable.fill(693, 20773, 20777); // 'state 162' -> >..| -> reduce (target=90, len=1)
actionsTable.fill(693, 20785, 20787); // 'state 162' -> '.." -> reduce (target=90, len=1)
actionsTable.fill(693, 20794, 20796); // 'state 162' -> identifier..at_keyword -> reduce (target=90, len=1)
actionsTable[20798] = 693; // 'state 162' -> _keyframes_statement_token1 -> reduce (target=90, len=1)
actionsTable[20876] = 386; // 'state 163' -> } -> shift (target=193, len=0)
actionsTable[20992] = 1683; // 'state 164' -> [ -> reduce (target=73, len=3)
actionsTable.fill(1683, 20995, 20997); // 'state 164' -> :..@import -> reduce (target=73, len=3)
actionsTable.fill(1683, 20999, 21003); // 'state 164' -> @media..@keyframes -> reduce (target=73, len=3)
actionsTable.fill(1683, 21004, 21007); // 'state 164' -> }..@scope -> reduce (target=73, len=3)
actionsTable.fill(1683, 21009, 21012); // 'state 164' -> &... -> reduce (target=73, len=3)
actionsTable.fill(1683, 21020, 21022); // 'state 164' -> ::..# -> reduce (target=73, len=3)
actionsTable.fill(1683, 21029, 21033); // 'state 164' -> >..| -> reduce (target=73, len=3)
actionsTable.fill(1683, 21041, 21043); // 'state 164' -> '.." -> reduce (target=73, len=3)
actionsTable.fill(1683, 21050, 21052); // 'state 164' -> identifier..at_keyword -> reduce (target=73, len=3)
actionsTable[21054] = 1683; // 'state 164' -> _keyframes_statement_token1 -> reduce (target=73, len=3)
actionsTable[21058] = 1683; // 'state 164' -> @par-gen.EOF -> reduce (target=73, len=3)
actionsTable[21120] = 1283; // 'state 165' -> [ -> reduce (target=129, len=2)
actionsTable.fill(1283, 21125, 21127); // 'state 165' -> ,..; -> reduce (target=129, len=2)
actionsTable[21132] = 1283; // 'state 165' -> } -> reduce (target=129, len=2)
actionsTable.fill(1283, 21135, 21137); // 'state 165' -> (..) -> reduce (target=129, len=2)
actionsTable[21138] = 1283; // 'state 165' -> * -> reduce (target=129, len=2)
actionsTable[21141] = 1283; // 'state 165' -> not -> reduce (target=129, len=2)
actionsTable[21156] = 1283; // 'state 165' -> ] -> reduce (target=129, len=2)
actionsTable[21159] = 1283; // 'state 165' -> + -> reduce (target=129, len=2)
actionsTable[21164] = 1283; // 'state 165' -> !important -> reduce (target=129, len=2)
actionsTable.fill(1283, 21167, 21173); // 'state 165' -> only../ -> reduce (target=129, len=2)
actionsTable[21174] = 1283; // 'state 165' -> color_value -> reduce (target=129, len=2)
actionsTable.fill(1283, 21176, 21179); // 'state 165' -> integer_value..identifier -> reduce (target=129, len=2)
actionsTable.fill(1283, 21180, 21182); // 'state 165' -> plain_value..important_value -> reduce (target=129, len=2)
actionsTable[21264] = 412; // 'state 166' -> ) -> shift (target=206, len=0)
actionsTable[21266] = 114; // 'state 166' -> * -> shift (target=57, len=0)
actionsTable[21287] = 114; // 'state 166' -> + -> shift (target=57, len=0)
actionsTable.fill(114, 21299, 21301); // 'state 166' -> -../ -> shift (target=57, len=0)
actionsTable[21376] = 1685; // 'state 167' -> [ -> reduce (target=74, len=3)
actionsTable.fill(1685, 21379, 21381); // 'state 167' -> :..@import -> reduce (target=74, len=3)
actionsTable.fill(1685, 21383, 21387); // 'state 167' -> @media..@keyframes -> reduce (target=74, len=3)
actionsTable.fill(1685, 21388, 21391); // 'state 167' -> }..@scope -> reduce (target=74, len=3)
actionsTable.fill(1685, 21393, 21396); // 'state 167' -> &... -> reduce (target=74, len=3)
actionsTable.fill(1685, 21404, 21406); // 'state 167' -> ::..# -> reduce (target=74, len=3)
actionsTable.fill(1685, 21413, 21417); // 'state 167' -> >..| -> reduce (target=74, len=3)
actionsTable.fill(1685, 21425, 21427); // 'state 167' -> '.." -> reduce (target=74, len=3)
actionsTable.fill(1685, 21434, 21436); // 'state 167' -> identifier..at_keyword -> reduce (target=74, len=3)
actionsTable[21438] = 1685; // 'state 167' -> _keyframes_statement_token1 -> reduce (target=74, len=3)
actionsTable[21442] = 1685; // 'state 167' -> @par-gen.EOF -> reduce (target=74, len=3)
actionsTable[21507] = 184; // 'state 168' -> : -> shift (target=92, len=0)
actionsTable[21520] = 745; // 'state 168' -> ) -> reduce (target=116, len=1)
actionsTable.fill(745, 21549, 21551); // 'state 168' -> and..or -> reduce (target=116, len=1)
actionsTable[21648] = 420; // 'state 169' -> ) -> shift (target=210, len=0)
actionsTable.fill(124, 21677, 21679); // 'state 169' -> and..or -> shift (target=62, len=0)
actionsTable.fill(1265, 21765, 21767); // 'state 170' -> ,..; -> reduce (target=120, len=2)
actionsTable[21771] = 1265; // 'state 170' -> { -> reduce (target=120, len=2)
actionsTable[21776] = 1265; // 'state 170' -> ) -> reduce (target=120, len=2)
actionsTable.fill(1265, 21805, 21807); // 'state 170' -> and..or -> reduce (target=120, len=2)
actionsTable[21888] = 1687; // 'state 171' -> [ -> reduce (target=75, len=3)
actionsTable.fill(1687, 21891, 21893); // 'state 171' -> :..@import -> reduce (target=75, len=3)
actionsTable.fill(1687, 21895, 21899); // 'state 171' -> @media..@keyframes -> reduce (target=75, len=3)
actionsTable.fill(1687, 21900, 21903); // 'state 171' -> }..@scope -> reduce (target=75, len=3)
actionsTable.fill(1687, 21905, 21908); // 'state 171' -> &... -> reduce (target=75, len=3)
actionsTable.fill(1687, 21916, 21918); // 'state 171' -> ::..# -> reduce (target=75, len=3)
actionsTable.fill(1687, 21925, 21929); // 'state 171' -> >..| -> reduce (target=75, len=3)
actionsTable.fill(1687, 21937, 21939); // 'state 171' -> '.." -> reduce (target=75, len=3)
actionsTable.fill(1687, 21946, 21948); // 'state 171' -> identifier..at_keyword -> reduce (target=75, len=3)
actionsTable[21950] = 1687; // 'state 171' -> _keyframes_statement_token1 -> reduce (target=75, len=3)
actionsTable[21954] = 1687; // 'state 171' -> @par-gen.EOF -> reduce (target=75, len=3)
actionsTable[22022] = 422; // 'state 172' -> ; -> shift (target=211, len=0)
actionsTable[22144] = 1689; // 'state 173' -> [ -> reduce (target=76, len=3)
actionsTable.fill(1689, 22147, 22149); // 'state 173' -> :..@import -> reduce (target=76, len=3)
actionsTable.fill(1689, 22151, 22155); // 'state 173' -> @media..@keyframes -> reduce (target=76, len=3)
actionsTable.fill(1689, 22156, 22159); // 'state 173' -> }..@scope -> reduce (target=76, len=3)
actionsTable.fill(1689, 22161, 22164); // 'state 173' -> &... -> reduce (target=76, len=3)
actionsTable.fill(1689, 22172, 22174); // 'state 173' -> ::..# -> reduce (target=76, len=3)
actionsTable.fill(1689, 22181, 22185); // 'state 173' -> >..| -> reduce (target=76, len=3)
actionsTable.fill(1689, 22193, 22195); // 'state 173' -> '.." -> reduce (target=76, len=3)
actionsTable.fill(1689, 22202, 22204); // 'state 173' -> identifier..at_keyword -> reduce (target=76, len=3)
actionsTable[22206] = 1689; // 'state 173' -> _keyframes_statement_token1 -> reduce (target=76, len=3)
actionsTable[22210] = 1689; // 'state 173' -> @par-gen.EOF -> reduce (target=76, len=3)
actionsTable[22272] = 1691; // 'state 174' -> [ -> reduce (target=77, len=3)
actionsTable.fill(1691, 22275, 22277); // 'state 174' -> :..@import -> reduce (target=77, len=3)
actionsTable.fill(1691, 22279, 22283); // 'state 174' -> @media..@keyframes -> reduce (target=77, len=3)
actionsTable.fill(1691, 22284, 22287); // 'state 174' -> }..@scope -> reduce (target=77, len=3)
actionsTable.fill(1691, 22289, 22292); // 'state 174' -> &... -> reduce (target=77, len=3)
actionsTable.fill(1691, 22300, 22302); // 'state 174' -> ::..# -> reduce (target=77, len=3)
actionsTable.fill(1691, 22309, 22313); // 'state 174' -> >..| -> reduce (target=77, len=3)
actionsTable.fill(1691, 22321, 22323); // 'state 174' -> '.." -> reduce (target=77, len=3)
actionsTable.fill(1691, 22330, 22332); // 'state 174' -> identifier..at_keyword -> reduce (target=77, len=3)
actionsTable[22334] = 1691; // 'state 174' -> _keyframes_statement_token1 -> reduce (target=77, len=3)
actionsTable[22338] = 1691; // 'state 174' -> @par-gen.EOF -> reduce (target=77, len=3)
actionsTable[22400] = 1701; // 'state 175' -> [ -> reduce (target=82, len=3)
actionsTable.fill(1701, 22403, 22405); // 'state 175' -> :..@import -> reduce (target=82, len=3)
actionsTable.fill(1701, 22407, 22411); // 'state 175' -> @media..@keyframes -> reduce (target=82, len=3)
actionsTable.fill(1701, 22412, 22415); // 'state 175' -> }..@scope -> reduce (target=82, len=3)
actionsTable.fill(1701, 22417, 22420); // 'state 175' -> &... -> reduce (target=82, len=3)
actionsTable.fill(1701, 22428, 22430); // 'state 175' -> ::..# -> reduce (target=82, len=3)
actionsTable.fill(1701, 22437, 22441); // 'state 175' -> >..| -> reduce (target=82, len=3)
actionsTable.fill(1701, 22449, 22451); // 'state 175' -> '.." -> reduce (target=82, len=3)
actionsTable.fill(1701, 22458, 22460); // 'state 175' -> identifier..at_keyword -> reduce (target=82, len=3)
actionsTable[22462] = 1701; // 'state 175' -> _keyframes_statement_token1 -> reduce (target=82, len=3)
actionsTable[22466] = 1701; // 'state 175' -> @par-gen.EOF -> reduce (target=82, len=3)
actionsTable[22528] = 1709; // 'state 176' -> [ -> reduce (target=86, len=3)
actionsTable.fill(1709, 22531, 22533); // 'state 176' -> :..@import -> reduce (target=86, len=3)
actionsTable.fill(1709, 22535, 22539); // 'state 176' -> @media..@keyframes -> reduce (target=86, len=3)
actionsTable.fill(1709, 22540, 22543); // 'state 176' -> }..@scope -> reduce (target=86, len=3)
actionsTable.fill(1709, 22545, 22548); // 'state 176' -> &... -> reduce (target=86, len=3)
actionsTable.fill(1709, 22556, 22558); // 'state 176' -> ::..# -> reduce (target=86, len=3)
actionsTable.fill(1709, 22565, 22569); // 'state 176' -> >..| -> reduce (target=86, len=3)
actionsTable.fill(1709, 22577, 22579); // 'state 176' -> '.." -> reduce (target=86, len=3)
actionsTable.fill(1709, 22586, 22588); // 'state 176' -> identifier..at_keyword -> reduce (target=86, len=3)
actionsTable[22590] = 1709; // 'state 176' -> _keyframes_statement_token1 -> reduce (target=86, len=3)
actionsTable[22594] = 1709; // 'state 176' -> @par-gen.EOF -> reduce (target=86, len=3)
actionsTable[22656] = 1727; // 'state 177' -> [ -> reduce (target=95, len=3)
actionsTable[22659] = 1727; // 'state 177' -> : -> reduce (target=95, len=3)
actionsTable[22661] = 1727; // 'state 177' -> , -> reduce (target=95, len=3)
actionsTable[22667] = 1727; // 'state 177' -> { -> reduce (target=95, len=3)
actionsTable.fill(1727, 22672, 22676); // 'state 177' -> )... -> reduce (target=95, len=3)
actionsTable.fill(1727, 22684, 22697); // 'state 177' -> ::..| -> reduce (target=95, len=3)
actionsTable.fill(1727, 22705, 22707); // 'state 177' -> '.." -> reduce (target=95, len=3)
actionsTable[22714] = 1727; // 'state 177' -> identifier -> reduce (target=95, len=3)
actionsTable[22784] = 1729; // 'state 178' -> [ -> reduce (target=96, len=3)
actionsTable[22787] = 1729; // 'state 178' -> : -> reduce (target=96, len=3)
actionsTable[22789] = 1729; // 'state 178' -> , -> reduce (target=96, len=3)
actionsTable[22795] = 1729; // 'state 178' -> { -> reduce (target=96, len=3)
actionsTable.fill(1729, 22800, 22804); // 'state 178' -> )... -> reduce (target=96, len=3)
actionsTable.fill(1729, 22812, 22825); // 'state 178' -> ::..| -> reduce (target=96, len=3)
actionsTable.fill(1729, 22833, 22835); // 'state 178' -> '.." -> reduce (target=96, len=3)
actionsTable[22842] = 1729; // 'state 178' -> identifier -> reduce (target=96, len=3)
actionsTable[22912] = 1735; // 'state 179' -> [ -> reduce (target=99, len=3)
actionsTable[22915] = 1735; // 'state 179' -> : -> reduce (target=99, len=3)
actionsTable[22917] = 1735; // 'state 179' -> , -> reduce (target=99, len=3)
actionsTable[22923] = 1735; // 'state 179' -> { -> reduce (target=99, len=3)
actionsTable.fill(1735, 22928, 22932); // 'state 179' -> )... -> reduce (target=99, len=3)
actionsTable.fill(1735, 22940, 22953); // 'state 179' -> ::..| -> reduce (target=99, len=3)
actionsTable.fill(1735, 22961, 22963); // 'state 179' -> '.." -> reduce (target=99, len=3)
actionsTable[22970] = 1735; // 'state 179' -> identifier -> reduce (target=99, len=3)
actionsTable[23040] = 697; // 'state 180' -> [ -> reduce (target=92, len=1)
actionsTable[23043] = 697; // 'state 180' -> : -> reduce (target=92, len=1)
actionsTable.fill(697, 23057, 23060); // 'state 180' -> &... -> reduce (target=92, len=1)
actionsTable.fill(697, 23068, 23070); // 'state 180' -> ::..# -> reduce (target=92, len=1)
actionsTable.fill(196, 23070, 23076); // 'state 180' -> =..$= -> shift (target=98, len=0)
actionsTable[23076] = 434; // 'state 180' -> ] -> shift (target=217, len=0)
actionsTable.fill(697, 23077, 23081); // 'state 180' -> >..| -> reduce (target=92, len=1)
actionsTable.fill(697, 23089, 23091); // 'state 180' -> '.." -> reduce (target=92, len=1)
actionsTable[23098] = 697; // 'state 180' -> identifier -> reduce (target=92, len=1)
actionsTable[23168] = 779; // 'state 181' -> [ -> reduce (target=133, len=1)
actionsTable[23171] = 779; // 'state 181' -> : -> reduce (target=133, len=1)
actionsTable[23173] = 779; // 'state 181' -> , -> reduce (target=133, len=1)
actionsTable[23179] = 779; // 'state 181' -> { -> reduce (target=133, len=1)
actionsTable.fill(779, 23183, 23188); // 'state 181' -> (... -> reduce (target=133, len=1)
actionsTable.fill(779, 23196, 23209); // 'state 181' -> ::..| -> reduce (target=133, len=1)
actionsTable.fill(779, 23217, 23219); // 'state 181' -> '.." -> reduce (target=133, len=1)
actionsTable[23223] = 779; // 'state 181' -> escape_sequence -> reduce (target=133, len=1)
actionsTable[23226] = 779; // 'state 181' -> identifier -> reduce (target=133, len=1)
actionsTable[23233] = 779; // 'state 181' -> _class_name_token4 -> reduce (target=133, len=1)
actionsTable[23296] = 1293; // 'state 182' -> [ -> reduce (target=134, len=2)
actionsTable[23299] = 1293; // 'state 182' -> : -> reduce (target=134, len=2)
actionsTable[23301] = 1293; // 'state 182' -> , -> reduce (target=134, len=2)
actionsTable[23307] = 1293; // 'state 182' -> { -> reduce (target=134, len=2)
actionsTable.fill(1293, 23311, 23316); // 'state 182' -> (... -> reduce (target=134, len=2)
actionsTable.fill(1293, 23324, 23337); // 'state 182' -> ::..| -> reduce (target=134, len=2)
actionsTable.fill(1293, 23345, 23347); // 'state 182' -> '.." -> reduce (target=134, len=2)
actionsTable[23351] = 436; // 'state 182' -> escape_sequence -> shift (target=218, len=0)
actionsTable[23354] = 1293; // 'state 182' -> identifier -> reduce (target=134, len=2)
actionsTable[23361] = 436; // 'state 182' -> _class_name_token4 -> shift (target=218, len=0)
actionsTable.fill(440, 23465, 23467); // 'state 183' -> even..odd -> shift (target=220, len=0)
actionsTable[23477] = 440; // 'state 183' -> _nth_functional_notation -> shift (target=220, len=0)
actionsTable[23480] = 440; // 'state 183' -> integer_value -> shift (target=220, len=0)
actionsTable[23552] = 1219; // 'state 184' -> [ -> reduce (target=97, len=2)
actionsTable[23555] = 1219; // 'state 184' -> : -> reduce (target=97, len=2)
actionsTable[23557] = 1219; // 'state 184' -> , -> reduce (target=97, len=2)
actionsTable[23563] = 1219; // 'state 184' -> { -> reduce (target=97, len=2)
actionsTable.fill(1219, 23568, 23572); // 'state 184' -> )... -> reduce (target=97, len=2)
actionsTable.fill(1219, 23580, 23593); // 'state 184' -> ::..| -> reduce (target=97, len=2)
actionsTable.fill(1219, 23601, 23603); // 'state 184' -> '.." -> reduce (target=97, len=2)
actionsTable[23610] = 1219; // 'state 184' -> identifier -> reduce (target=97, len=2)
actionsTable[23680] = 1733; // 'state 185' -> [ -> reduce (target=98, len=3)
actionsTable[23683] = 1733; // 'state 185' -> : -> reduce (target=98, len=3)
actionsTable[23685] = 1733; // 'state 185' -> , -> reduce (target=98, len=3)
actionsTable[23691] = 1733; // 'state 185' -> { -> reduce (target=98, len=3)
actionsTable.fill(1733, 23696, 23700); // 'state 185' -> )... -> reduce (target=98, len=3)
actionsTable.fill(1733, 23708, 23721); // 'state 185' -> ::..| -> reduce (target=98, len=3)
actionsTable.fill(1733, 23729, 23731); // 'state 185' -> '.." -> reduce (target=98, len=3)
actionsTable[23738] = 1733; // 'state 185' -> identifier -> reduce (target=98, len=3)
actionsTable[23808] = 1737; // 'state 186' -> [ -> reduce (target=100, len=3)
actionsTable[23811] = 1737; // 'state 186' -> : -> reduce (target=100, len=3)
actionsTable[23813] = 1737; // 'state 186' -> , -> reduce (target=100, len=3)
actionsTable[23819] = 1737; // 'state 186' -> { -> reduce (target=100, len=3)
actionsTable.fill(1737, 23824, 23828); // 'state 186' -> )... -> reduce (target=100, len=3)
actionsTable.fill(1737, 23836, 23849); // 'state 186' -> ::..| -> reduce (target=100, len=3)
actionsTable.fill(1737, 23857, 23859); // 'state 186' -> '.." -> reduce (target=100, len=3)
actionsTable[23866] = 1737; // 'state 186' -> identifier -> reduce (target=100, len=3)
actionsTable[23936] = 1789; // 'state 187' -> [ -> reduce (target=126, len=3)
actionsTable[23939] = 1789; // 'state 187' -> : -> reduce (target=126, len=3)
actionsTable.fill(1789, 23941, 23943); // 'state 187' -> ,..; -> reduce (target=126, len=3)
actionsTable.fill(1789, 23947, 23949); // 'state 187' -> {..} -> reduce (target=126, len=3)
actionsTable.fill(1789, 23951, 23956); // 'state 187' -> (... -> reduce (target=126, len=3)
actionsTable[23957] = 1789; // 'state 187' -> not -> reduce (target=126, len=3)
actionsTable.fill(1789, 23964, 23977); // 'state 187' -> ::..| -> reduce (target=126, len=3)
actionsTable[23980] = 1789; // 'state 187' -> !important -> reduce (target=126, len=3)
actionsTable.fill(1789, 23983, 23989); // 'state 187' -> only../ -> reduce (target=126, len=3)
actionsTable[23990] = 1789; // 'state 187' -> color_value -> reduce (target=126, len=3)
actionsTable.fill(1789, 23992, 23995); // 'state 187' -> integer_value..identifier -> reduce (target=126, len=3)
actionsTable.fill(1789, 23996, 23998); // 'state 187' -> plain_value..important_value -> reduce (target=126, len=3)
actionsTable[24113] = 1273; // 'state 188' -> ' -> reduce (target=124, len=2)
actionsTable[24119] = 1273; // 'state 188' -> escape_sequence -> reduce (target=124, len=2)
actionsTable[24127] = 1273; // 'state 188' -> _string_value_token2 -> reduce (target=124, len=2)
actionsTable[24242] = 1275; // 'state 189' -> " -> reduce (target=125, len=2)
actionsTable[24247] = 1275; // 'state 189' -> escape_sequence -> reduce (target=125, len=2)
actionsTable[24256] = 1275; // 'state 189' -> _string_value_token3 -> reduce (target=125, len=2)
actionsTable[24320] = 2275; // 'state 190' -> [ -> reduce (target=113, len=4)
actionsTable.fill(2275, 24323, 24325); // 'state 190' -> :..@import -> reduce (target=113, len=4)
actionsTable.fill(2275, 24327, 24331); // 'state 190' -> @media..@keyframes -> reduce (target=113, len=4)
actionsTable.fill(2275, 24332, 24335); // 'state 190' -> }..@scope -> reduce (target=113, len=4)
actionsTable.fill(2275, 24337, 24340); // 'state 190' -> &... -> reduce (target=113, len=4)
actionsTable.fill(2275, 24348, 24350); // 'state 190' -> ::..# -> reduce (target=113, len=4)
actionsTable.fill(2275, 24357, 24361); // 'state 190' -> >..| -> reduce (target=113, len=4)
actionsTable.fill(2275, 24369, 24371); // 'state 190' -> '.." -> reduce (target=113, len=4)
actionsTable.fill(2275, 24378, 24380); // 'state 190' -> identifier..at_keyword -> reduce (target=113, len=4)
actionsTable[24382] = 2275; // 'state 190' -> _keyframes_statement_token1 -> reduce (target=113, len=4)
actionsTable[24386] = 2275; // 'state 190' -> @par-gen.EOF -> reduce (target=113, len=4)
actionsTable[24448] = 757; // 'state 191' -> [ -> reduce (target=122, len=1)
actionsTable[24453] = 757; // 'state 191' -> , -> reduce (target=122, len=1)
actionsTable[24454] = 450; // 'state 191' -> ; -> shift (target=225, len=0)
actionsTable[24463] = 757; // 'state 191' -> ( -> reduce (target=122, len=1)
actionsTable[24466] = 757; // 'state 191' -> * -> reduce (target=122, len=1)
actionsTable[24487] = 757; // 'state 191' -> + -> reduce (target=122, len=1)
actionsTable[24492] = 757; // 'state 191' -> !important -> reduce (target=122, len=1)
actionsTable.fill(757, 24497, 24501); // 'state 191' -> '../ -> reduce (target=122, len=1)
actionsTable[24502] = 757; // 'state 191' -> color_value -> reduce (target=122, len=1)
actionsTable.fill(757, 24504, 24507); // 'state 191' -> integer_value..identifier -> reduce (target=122, len=1)
actionsTable[24508] = 757; // 'state 191' -> plain_value -> reduce (target=122, len=1)
actionsTable[24576] = 737; // 'state 192' -> [ -> reduce (target=112, len=1)
actionsTable.fill(737, 24581, 24583); // 'state 192' -> ,..; -> reduce (target=112, len=1)
actionsTable[24588] = 737; // 'state 192' -> } -> reduce (target=112, len=1)
actionsTable[24591] = 737; // 'state 192' -> ( -> reduce (target=112, len=1)
actionsTable[24594] = 114; // 'state 192' -> * -> shift (target=57, len=0)
actionsTable[24615] = 114; // 'state 192' -> + -> shift (target=57, len=0)
actionsTable[24620] = 737; // 'state 192' -> !important -> reduce (target=112, len=1)
actionsTable.fill(737, 24625, 24627); // 'state 192' -> '.." -> reduce (target=112, len=1)
actionsTable.fill(114, 24627, 24629); // 'state 192' -> -../ -> shift (target=57, len=0)
actionsTable[24630] = 737; // 'state 192' -> color_value -> reduce (target=112, len=1)
actionsTable.fill(737, 24632, 24635); // 'state 192' -> integer_value..identifier -> reduce (target=112, len=1)
actionsTable[24636] = 737; // 'state 192' -> plain_value -> reduce (target=112, len=1)
actionsTable.fill(1719, 24704, 24709); // 'state 193' -> [..@import -> reduce (target=91, len=3)
actionsTable.fill(1719, 24711, 24715); // 'state 193' -> @media..@keyframes -> reduce (target=91, len=3)
actionsTable.fill(1719, 24716, 24719); // 'state 193' -> }..@scope -> reduce (target=91, len=3)
actionsTable.fill(1719, 24721, 24724); // 'state 193' -> &... -> reduce (target=91, len=3)
actionsTable.fill(1719, 24732, 24734); // 'state 193' -> ::..# -> reduce (target=91, len=3)
actionsTable.fill(1719, 24741, 24745); // 'state 193' -> >..| -> reduce (target=91, len=3)
actionsTable.fill(1719, 24753, 24755); // 'state 193' -> '.." -> reduce (target=91, len=3)
actionsTable[24760] = 1719; // 'state 193' -> integer_value -> reduce (target=91, len=3)
actionsTable.fill(1719, 24762, 24764); // 'state 193' -> identifier..at_keyword -> reduce (target=91, len=3)
actionsTable[24766] = 1719; // 'state 193' -> _keyframes_statement_token1 -> reduce (target=91, len=3)
actionsTable[24770] = 1719; // 'state 193' -> @par-gen.EOF -> reduce (target=91, len=3)
actionsTable[24832] = 1205; // 'state 194' -> [ -> reduce (target=90, len=2)
actionsTable.fill(1205, 24835, 24837); // 'state 194' -> :..@import -> reduce (target=90, len=2)
actionsTable.fill(1205, 24839, 24843); // 'state 194' -> @media..@keyframes -> reduce (target=90, len=2)
actionsTable.fill(1205, 24844, 24847); // 'state 194' -> }..@scope -> reduce (target=90, len=2)
actionsTable.fill(1205, 24849, 24852); // 'state 194' -> &... -> reduce (target=90, len=2)
actionsTable.fill(1205, 24860, 24862); // 'state 194' -> ::..# -> reduce (target=90, len=2)
actionsTable.fill(1205, 24869, 24873); // 'state 194' -> >..| -> reduce (target=90, len=2)
actionsTable.fill(1205, 24881, 24883); // 'state 194' -> '.." -> reduce (target=90, len=2)
actionsTable.fill(1205, 24890, 24892); // 'state 194' -> identifier..at_keyword -> reduce (target=90, len=2)
actionsTable[24894] = 1205; // 'state 194' -> _keyframes_statement_token1 -> reduce (target=90, len=2)
actionsTable[24972] = 456; // 'state 195' -> } -> shift (target=228, len=0)
actionsTable[25088] = 1197; // 'state 196' -> [ -> reduce (target=86, len=2)
actionsTable.fill(1197, 25091, 25093); // 'state 196' -> :..@import -> reduce (target=86, len=2)
actionsTable.fill(1197, 25095, 25099); // 'state 196' -> @media..@keyframes -> reduce (target=86, len=2)
actionsTable.fill(1197, 25100, 25103); // 'state 196' -> }..@scope -> reduce (target=86, len=2)
actionsTable.fill(1197, 25105, 25108); // 'state 196' -> &... -> reduce (target=86, len=2)
actionsTable.fill(1197, 25116, 25118); // 'state 196' -> ::..# -> reduce (target=86, len=2)
actionsTable.fill(1197, 25125, 25129); // 'state 196' -> >..| -> reduce (target=86, len=2)
actionsTable.fill(1197, 25137, 25139); // 'state 196' -> '.." -> reduce (target=86, len=2)
actionsTable.fill(1197, 25146, 25148); // 'state 196' -> identifier..at_keyword -> reduce (target=86, len=2)
actionsTable[25150] = 1197; // 'state 196' -> _keyframes_statement_token1 -> reduce (target=86, len=2)
actionsTable[25216] = 681; // 'state 197' -> [ -> reduce (target=84, len=1)
actionsTable[25222] = 681; // 'state 197' -> ; -> reduce (target=84, len=1)
actionsTable[25231] = 681; // 'state 197' -> ( -> reduce (target=84, len=1)
actionsTable[25260] = 681; // 'state 197' -> !important -> reduce (target=84, len=1)
actionsTable.fill(681, 25265, 25267); // 'state 197' -> '.." -> reduce (target=84, len=1)
actionsTable[25270] = 681; // 'state 197' -> color_value -> reduce (target=84, len=1)
actionsTable.fill(681, 25272, 25275); // 'state 197' -> integer_value..identifier -> reduce (target=84, len=1)
actionsTable.fill(681, 25276, 25278); // 'state 197' -> plain_value..important_value -> reduce (target=84, len=1)
actionsTable[25344] = 681; // 'state 198' -> [ -> reduce (target=84, len=1)
actionsTable[25350] = 681; // 'state 198' -> ; -> reduce (target=84, len=1)
actionsTable[25359] = 681; // 'state 198' -> ( -> reduce (target=84, len=1)
actionsTable[25362] = 114; // 'state 198' -> * -> shift (target=57, len=0)
actionsTable[25383] = 114; // 'state 198' -> + -> shift (target=57, len=0)
actionsTable[25388] = 681; // 'state 198' -> !important -> reduce (target=84, len=1)
actionsTable.fill(681, 25393, 25395); // 'state 198' -> '.." -> reduce (target=84, len=1)
actionsTable.fill(114, 25395, 25397); // 'state 198' -> -../ -> shift (target=57, len=0)
actionsTable[25398] = 681; // 'state 198' -> color_value -> reduce (target=84, len=1)
actionsTable.fill(681, 25400, 25403); // 'state 198' -> integer_value..identifier -> reduce (target=84, len=1)
actionsTable.fill(681, 25404, 25406); // 'state 198' -> plain_value..important_value -> reduce (target=84, len=1)
actionsTable[25472] = 2195; // 'state 199' -> [ -> reduce (target=73, len=4)
actionsTable.fill(2195, 25475, 25477); // 'state 199' -> :..@import -> reduce (target=73, len=4)
actionsTable.fill(2195, 25479, 25483); // 'state 199' -> @media..@keyframes -> reduce (target=73, len=4)
actionsTable.fill(2195, 25484, 25487); // 'state 199' -> }..@scope -> reduce (target=73, len=4)
actionsTable.fill(2195, 25489, 25492); // 'state 199' -> &... -> reduce (target=73, len=4)
actionsTable.fill(2195, 25500, 25502); // 'state 199' -> ::..# -> reduce (target=73, len=4)
actionsTable.fill(2195, 25509, 25513); // 'state 199' -> >..| -> reduce (target=73, len=4)
actionsTable.fill(2195, 25521, 25523); // 'state 199' -> '.." -> reduce (target=73, len=4)
actionsTable.fill(2195, 25530, 25532); // 'state 199' -> identifier..at_keyword -> reduce (target=73, len=4)
actionsTable[25534] = 2195; // 'state 199' -> _keyframes_statement_token1 -> reduce (target=73, len=4)
actionsTable[25538] = 2195; // 'state 199' -> @par-gen.EOF -> reduce (target=73, len=4)
actionsTable[25605] = 182; // 'state 200' -> , -> shift (target=91, len=0)
actionsTable[25606] = 464; // 'state 200' -> ; -> shift (target=232, len=0)
actionsTable[25728] = 1797; // 'state 201' -> [ -> reduce (target=130, len=3)
actionsTable.fill(1797, 25733, 25735); // 'state 201' -> ,..; -> reduce (target=130, len=3)
actionsTable[25740] = 1797; // 'state 201' -> } -> reduce (target=130, len=3)
actionsTable.fill(1797, 25743, 25745); // 'state 201' -> (..) -> reduce (target=130, len=3)
actionsTable[25746] = 1797; // 'state 201' -> * -> reduce (target=130, len=3)
actionsTable[25749] = 1797; // 'state 201' -> not -> reduce (target=130, len=3)
actionsTable[25764] = 1797; // 'state 201' -> ] -> reduce (target=130, len=3)
actionsTable[25767] = 1797; // 'state 201' -> + -> reduce (target=130, len=3)
actionsTable[25772] = 1797; // 'state 201' -> !important -> reduce (target=130, len=3)
actionsTable.fill(1797, 25775, 25781); // 'state 201' -> only../ -> reduce (target=130, len=3)
actionsTable[25782] = 1797; // 'state 201' -> color_value -> reduce (target=130, len=3)
actionsTable.fill(1797, 25784, 25787); // 'state 201' -> integer_value..identifier -> reduce (target=130, len=3)
actionsTable.fill(1797, 25788, 25790); // 'state 201' -> plain_value..important_value -> reduce (target=130, len=3)
actionsTable[25856] = 1289; // 'state 202' -> [ -> reduce (target=132, len=2)
actionsTable.fill(1289, 25861, 25863); // 'state 202' -> ,..; -> reduce (target=132, len=2)
actionsTable[25868] = 1289; // 'state 202' -> } -> reduce (target=132, len=2)
actionsTable.fill(1289, 25871, 25873); // 'state 202' -> (..) -> reduce (target=132, len=2)
actionsTable[25874] = 1289; // 'state 202' -> * -> reduce (target=132, len=2)
actionsTable[25877] = 1289; // 'state 202' -> not -> reduce (target=132, len=2)
actionsTable[25892] = 1289; // 'state 202' -> ] -> reduce (target=132, len=2)
actionsTable[25895] = 1289; // 'state 202' -> + -> reduce (target=132, len=2)
actionsTable[25900] = 1289; // 'state 202' -> !important -> reduce (target=132, len=2)
actionsTable.fill(1289, 25903, 25909); // 'state 202' -> only../ -> reduce (target=132, len=2)
actionsTable[25910] = 1289; // 'state 202' -> color_value -> reduce (target=132, len=2)
actionsTable.fill(1289, 25912, 25915); // 'state 202' -> integer_value..identifier -> reduce (target=132, len=2)
actionsTable.fill(1289, 25916, 25918); // 'state 202' -> plain_value..important_value -> reduce (target=132, len=2)
actionsTable[25984] = 725; // 'state 203' -> [ -> reduce (target=106, len=1)
actionsTable.fill(725, 25989, 25991); // 'state 203' -> ,..; -> reduce (target=106, len=1)
actionsTable.fill(725, 25999, 26001); // 'state 203' -> (..) -> reduce (target=106, len=1)
actionsTable[26002] = 114; // 'state 203' -> * -> shift (target=57, len=0)
actionsTable[26023] = 114; // 'state 203' -> + -> shift (target=57, len=0)
actionsTable[26028] = 725; // 'state 203' -> !important -> reduce (target=106, len=1)
actionsTable.fill(725, 26033, 26035); // 'state 203' -> '.." -> reduce (target=106, len=1)
actionsTable.fill(114, 26035, 26037); // 'state 203' -> -../ -> shift (target=57, len=0)
actionsTable[26038] = 725; // 'state 203' -> color_value -> reduce (target=106, len=1)
actionsTable.fill(725, 26040, 26043); // 'state 203' -> integer_value..identifier -> reduce (target=106, len=1)
actionsTable[26044] = 725; // 'state 203' -> plain_value -> reduce (target=106, len=1)
actionsTable[26112] = 1793; // 'state 204' -> [ -> reduce (target=128, len=3)
actionsTable.fill(1793, 26117, 26119); // 'state 204' -> ,..; -> reduce (target=128, len=3)
actionsTable[26124] = 1793; // 'state 204' -> } -> reduce (target=128, len=3)
actionsTable.fill(1793, 26127, 26129); // 'state 204' -> (..) -> reduce (target=128, len=3)
actionsTable[26130] = 1793; // 'state 204' -> * -> reduce (target=128, len=3)
actionsTable[26133] = 1793; // 'state 204' -> not -> reduce (target=128, len=3)
actionsTable[26148] = 1793; // 'state 204' -> ] -> reduce (target=128, len=3)
actionsTable[26151] = 1793; // 'state 204' -> + -> reduce (target=128, len=3)
actionsTable[26156] = 1793; // 'state 204' -> !important -> reduce (target=128, len=3)
actionsTable.fill(1793, 26159, 26165); // 'state 204' -> only../ -> reduce (target=128, len=3)
actionsTable[26166] = 1793; // 'state 204' -> color_value -> reduce (target=128, len=3)
actionsTable.fill(1793, 26168, 26171); // 'state 204' -> integer_value..identifier -> reduce (target=128, len=3)
actionsTable.fill(1793, 26172, 26174); // 'state 204' -> plain_value..important_value -> reduce (target=128, len=3)
actionsTable[26245] = 220; // 'state 205' -> , -> shift (target=110, len=0)
actionsTable[26276] = 472; // 'state 205' -> ] -> shift (target=236, len=0)
actionsTable[26368] = 1783; // 'state 206' -> [ -> reduce (target=123, len=3)
actionsTable.fill(1783, 26373, 26375); // 'state 206' -> ,..; -> reduce (target=123, len=3)
actionsTable[26380] = 1783; // 'state 206' -> } -> reduce (target=123, len=3)
actionsTable.fill(1783, 26383, 26385); // 'state 206' -> (..) -> reduce (target=123, len=3)
actionsTable[26386] = 1783; // 'state 206' -> * -> reduce (target=123, len=3)
actionsTable[26389] = 1783; // 'state 206' -> not -> reduce (target=123, len=3)
actionsTable[26404] = 1783; // 'state 206' -> ] -> reduce (target=123, len=3)
actionsTable[26407] = 1783; // 'state 206' -> + -> reduce (target=123, len=3)
actionsTable[26412] = 1783; // 'state 206' -> !important -> reduce (target=123, len=3)
actionsTable.fill(1783, 26415, 26421); // 'state 206' -> only../ -> reduce (target=123, len=3)
actionsTable[26422] = 1783; // 'state 206' -> color_value -> reduce (target=123, len=3)
actionsTable.fill(1783, 26424, 26427); // 'state 206' -> integer_value..identifier -> reduce (target=123, len=3)
actionsTable.fill(1783, 26428, 26430); // 'state 206' -> plain_value..important_value -> reduce (target=123, len=3)
actionsTable[26496] = 2197; // 'state 207' -> [ -> reduce (target=74, len=4)
actionsTable.fill(2197, 26499, 26501); // 'state 207' -> :..@import -> reduce (target=74, len=4)
actionsTable.fill(2197, 26503, 26507); // 'state 207' -> @media..@keyframes -> reduce (target=74, len=4)
actionsTable.fill(2197, 26508, 26511); // 'state 207' -> }..@scope -> reduce (target=74, len=4)
actionsTable.fill(2197, 26513, 26516); // 'state 207' -> &... -> reduce (target=74, len=4)
actionsTable.fill(2197, 26524, 26526); // 'state 207' -> ::..# -> reduce (target=74, len=4)
actionsTable.fill(2197, 26533, 26537); // 'state 207' -> >..| -> reduce (target=74, len=4)
actionsTable.fill(2197, 26545, 26547); // 'state 207' -> '.." -> reduce (target=74, len=4)
actionsTable.fill(2197, 26554, 26556); // 'state 207' -> identifier..at_keyword -> reduce (target=74, len=4)
actionsTable[26558] = 2197; // 'state 207' -> _keyframes_statement_token1 -> reduce (target=74, len=4)
actionsTable[26562] = 2197; // 'state 207' -> @par-gen.EOF -> reduce (target=74, len=4)
actionsTable.fill(1169, 26629, 26631); // 'state 208' -> ,..; -> reduce (target=72, len=2)
actionsTable[26635] = 1169; // 'state 208' -> { -> reduce (target=72, len=2)
actionsTable.fill(124, 26669, 26671); // 'state 208' -> and..or -> shift (target=62, len=0)
actionsTable.fill(1775, 26757, 26759); // 'state 209' -> ,..; -> reduce (target=119, len=3)
actionsTable[26763] = 1775; // 'state 209' -> { -> reduce (target=119, len=3)
actionsTable[26768] = 1775; // 'state 209' -> ) -> reduce (target=119, len=3)
actionsTable.fill(1775, 26797, 26799); // 'state 209' -> and..or -> reduce (target=119, len=3)
actionsTable.fill(1773, 26885, 26887); // 'state 210' -> ,..; -> reduce (target=118, len=3)
actionsTable[26891] = 1773; // 'state 210' -> { -> reduce (target=118, len=3)
actionsTable[26896] = 1773; // 'state 210' -> ) -> reduce (target=118, len=3)
actionsTable.fill(1773, 26925, 26927); // 'state 210' -> and..or -> reduce (target=118, len=3)
actionsTable[27008] = 2201; // 'state 211' -> [ -> reduce (target=76, len=4)
actionsTable.fill(2201, 27011, 27013); // 'state 211' -> :..@import -> reduce (target=76, len=4)
actionsTable.fill(2201, 27015, 27019); // 'state 211' -> @media..@keyframes -> reduce (target=76, len=4)
actionsTable.fill(2201, 27020, 27023); // 'state 211' -> }..@scope -> reduce (target=76, len=4)
actionsTable.fill(2201, 27025, 27028); // 'state 211' -> &... -> reduce (target=76, len=4)
actionsTable.fill(2201, 27036, 27038); // 'state 211' -> ::..# -> reduce (target=76, len=4)
actionsTable.fill(2201, 27045, 27049); // 'state 211' -> >..| -> reduce (target=76, len=4)
actionsTable.fill(2201, 27057, 27059); // 'state 211' -> '.." -> reduce (target=76, len=4)
actionsTable.fill(2201, 27066, 27068); // 'state 211' -> identifier..at_keyword -> reduce (target=76, len=4)
actionsTable[27070] = 2201; // 'state 211' -> _keyframes_statement_token1 -> reduce (target=76, len=4)
actionsTable[27074] = 2201; // 'state 211' -> @par-gen.EOF -> reduce (target=76, len=4)
actionsTable[27136] = 1183; // 'state 212' -> [ -> reduce (target=79, len=2)
actionsTable.fill(1183, 27139, 27141); // 'state 212' -> :..@import -> reduce (target=79, len=2)
actionsTable.fill(1183, 27143, 27147); // 'state 212' -> @media..@keyframes -> reduce (target=79, len=2)
actionsTable.fill(1183, 27148, 27151); // 'state 212' -> }..@scope -> reduce (target=79, len=2)
actionsTable.fill(1183, 27153, 27156); // 'state 212' -> &... -> reduce (target=79, len=2)
actionsTable.fill(1183, 27164, 27166); // 'state 212' -> ::..# -> reduce (target=79, len=2)
actionsTable.fill(1183, 27173, 27177); // 'state 212' -> >..| -> reduce (target=79, len=2)
actionsTable.fill(1183, 27185, 27187); // 'state 212' -> '.." -> reduce (target=79, len=2)
actionsTable.fill(1183, 27194, 27196); // 'state 212' -> identifier..at_keyword -> reduce (target=79, len=2)
actionsTable[27198] = 1183; // 'state 212' -> _keyframes_statement_token1 -> reduce (target=79, len=2)
actionsTable[27202] = 1183; // 'state 212' -> @par-gen.EOF -> reduce (target=79, len=2)
actionsTable.fill(669, 27265, 27267); // 'state 213' -> from..to -> reduce (target=78, len=1)
actionsTable[27276] = 669; // 'state 213' -> } -> reduce (target=78, len=1)
actionsTable[27320] = 669; // 'state 213' -> integer_value -> reduce (target=78, len=1)
actionsTable[27392] = 2221; // 'state 214' -> [ -> reduce (target=86, len=4)
actionsTable.fill(2221, 27395, 27397); // 'state 214' -> :..@import -> reduce (target=86, len=4)
actionsTable.fill(2221, 27399, 27403); // 'state 214' -> @media..@keyframes -> reduce (target=86, len=4)
actionsTable.fill(2221, 27404, 27407); // 'state 214' -> }..@scope -> reduce (target=86, len=4)
actionsTable.fill(2221, 27409, 27412); // 'state 214' -> &... -> reduce (target=86, len=4)
actionsTable.fill(2221, 27420, 27422); // 'state 214' -> ::..# -> reduce (target=86, len=4)
actionsTable.fill(2221, 27429, 27433); // 'state 214' -> >..| -> reduce (target=86, len=4)
actionsTable.fill(2221, 27441, 27443); // 'state 214' -> '.." -> reduce (target=86, len=4)
actionsTable.fill(2221, 27450, 27452); // 'state 214' -> identifier..at_keyword -> reduce (target=86, len=4)
actionsTable[27454] = 2221; // 'state 214' -> _keyframes_statement_token1 -> reduce (target=86, len=4)
actionsTable[27458] = 2221; // 'state 214' -> @par-gen.EOF -> reduce (target=86, len=4)
actionsTable[27520] = 2241; // 'state 215' -> [ -> reduce (target=96, len=4)
actionsTable[27523] = 2241; // 'state 215' -> : -> reduce (target=96, len=4)
actionsTable[27525] = 2241; // 'state 215' -> , -> reduce (target=96, len=4)
actionsTable[27531] = 2241; // 'state 215' -> { -> reduce (target=96, len=4)
actionsTable.fill(2241, 27536, 27540); // 'state 215' -> )... -> reduce (target=96, len=4)
actionsTable.fill(2241, 27548, 27561); // 'state 215' -> ::..| -> reduce (target=96, len=4)
actionsTable.fill(2241, 27569, 27571); // 'state 215' -> '.." -> reduce (target=96, len=4)
actionsTable[27578] = 2241; // 'state 215' -> identifier -> reduce (target=96, len=4)
actionsTable[27648] = 2245; // 'state 216' -> [ -> reduce (target=98, len=4)
actionsTable[27651] = 2245; // 'state 216' -> : -> reduce (target=98, len=4)
actionsTable[27653] = 2245; // 'state 216' -> , -> reduce (target=98, len=4)
actionsTable[27659] = 2245; // 'state 216' -> { -> reduce (target=98, len=4)
actionsTable.fill(2245, 27664, 27668); // 'state 216' -> )... -> reduce (target=98, len=4)
actionsTable.fill(2245, 27676, 27689); // 'state 216' -> ::..| -> reduce (target=98, len=4)
actionsTable.fill(2245, 27697, 27699); // 'state 216' -> '.." -> reduce (target=98, len=4)
actionsTable[27706] = 2245; // 'state 216' -> identifier -> reduce (target=98, len=4)
actionsTable[27776] = 2249; // 'state 217' -> [ -> reduce (target=100, len=4)
actionsTable[27779] = 2249; // 'state 217' -> : -> reduce (target=100, len=4)
actionsTable[27781] = 2249; // 'state 217' -> , -> reduce (target=100, len=4)
actionsTable[27787] = 2249; // 'state 217' -> { -> reduce (target=100, len=4)
actionsTable.fill(2249, 27792, 27796); // 'state 217' -> )... -> reduce (target=100, len=4)
actionsTable.fill(2249, 27804, 27817); // 'state 217' -> ::..| -> reduce (target=100, len=4)
actionsTable.fill(2249, 27825, 27827); // 'state 217' -> '.." -> reduce (target=100, len=4)
actionsTable[27834] = 2249; // 'state 217' -> identifier -> reduce (target=100, len=4)
actionsTable[27904] = 1291; // 'state 218' -> [ -> reduce (target=133, len=2)
actionsTable[27907] = 1291; // 'state 218' -> : -> reduce (target=133, len=2)
actionsTable[27909] = 1291; // 'state 218' -> , -> reduce (target=133, len=2)
actionsTable[27915] = 1291; // 'state 218' -> { -> reduce (target=133, len=2)
actionsTable.fill(1291, 27919, 27924); // 'state 218' -> (... -> reduce (target=133, len=2)
actionsTable.fill(1291, 27932, 27945); // 'state 218' -> ::..| -> reduce (target=133, len=2)
actionsTable.fill(1291, 27953, 27955); // 'state 218' -> '.." -> reduce (target=133, len=2)
actionsTable[27959] = 1291; // 'state 218' -> escape_sequence -> reduce (target=133, len=2)
actionsTable[27962] = 1291; // 'state 218' -> identifier -> reduce (target=133, len=2)
actionsTable[27969] = 1291; // 'state 218' -> _class_name_token4 -> reduce (target=133, len=2)
actionsTable[28032] = 1243; // 'state 219' -> [ -> reduce (target=109, len=2)
actionsTable[28035] = 1243; // 'state 219' -> : -> reduce (target=109, len=2)
actionsTable[28037] = 1243; // 'state 219' -> , -> reduce (target=109, len=2)
actionsTable[28043] = 1243; // 'state 219' -> { -> reduce (target=109, len=2)
actionsTable.fill(1243, 28048, 28052); // 'state 219' -> )... -> reduce (target=109, len=2)
actionsTable.fill(1243, 28060, 28073); // 'state 219' -> ::..| -> reduce (target=109, len=2)
actionsTable.fill(1243, 28081, 28083); // 'state 219' -> '.." -> reduce (target=109, len=2)
actionsTable[28090] = 1243; // 'state 219' -> identifier -> reduce (target=109, len=2)
actionsTable[28176] = 498; // 'state 220' -> ) -> shift (target=249, len=0)
actionsTable[28203] = 226; // 'state 220' -> of -> shift (target=113, len=0)
actionsTable[28288] = 1241; // 'state 221' -> [ -> reduce (target=108, len=2)
actionsTable[28291] = 1241; // 'state 221' -> : -> reduce (target=108, len=2)
actionsTable[28293] = 1241; // 'state 221' -> , -> reduce (target=108, len=2)
actionsTable[28299] = 1241; // 'state 221' -> { -> reduce (target=108, len=2)
actionsTable.fill(1241, 28304, 28308); // 'state 221' -> )... -> reduce (target=108, len=2)
actionsTable.fill(1241, 28316, 28329); // 'state 221' -> ::..| -> reduce (target=108, len=2)
actionsTable.fill(1241, 28337, 28339); // 'state 221' -> '.." -> reduce (target=108, len=2)
actionsTable[28346] = 1241; // 'state 221' -> identifier -> reduce (target=108, len=2)
actionsTable[28416] = 697; // 'state 222' -> [ -> reduce (target=92, len=1)
actionsTable[28419] = 697; // 'state 222' -> : -> reduce (target=92, len=1)
actionsTable[28421] = 697; // 'state 222' -> , -> reduce (target=92, len=1)
actionsTable[28431] = 757; // 'state 222' -> ( -> reduce (target=122, len=1)
actionsTable.fill(697, 28432, 28436); // 'state 222' -> )... -> reduce (target=92, len=1)
actionsTable.fill(697, 28444, 28446); // 'state 222' -> ::..# -> reduce (target=92, len=1)
actionsTable.fill(697, 28453, 28457); // 'state 222' -> >..| -> reduce (target=92, len=1)
actionsTable[28460] = 757; // 'state 222' -> !important -> reduce (target=122, len=1)
actionsTable.fill(697, 28465, 28467); // 'state 222' -> '.." -> reduce (target=92, len=1)
actionsTable.fill(757, 28467, 28469); // 'state 222' -> -../ -> reduce (target=122, len=1)
actionsTable[28470] = 757; // 'state 222' -> color_value -> reduce (target=122, len=1)
actionsTable.fill(757, 28472, 28474); // 'state 222' -> integer_value..float_value -> reduce (target=122, len=1)
actionsTable[28474] = 697; // 'state 222' -> identifier -> reduce (target=92, len=1)
actionsTable[28476] = 757; // 'state 222' -> plain_value -> reduce (target=122, len=1)
actionsTable[28544] = 1247; // 'state 223' -> [ -> reduce (target=111, len=2)
actionsTable[28547] = 1247; // 'state 223' -> : -> reduce (target=111, len=2)
actionsTable[28549] = 1247; // 'state 223' -> , -> reduce (target=111, len=2)
actionsTable[28555] = 1247; // 'state 223' -> { -> reduce (target=111, len=2)
actionsTable.fill(1247, 28560, 28564); // 'state 223' -> )... -> reduce (target=111, len=2)
actionsTable.fill(1247, 28572, 28585); // 'state 223' -> ::..| -> reduce (target=111, len=2)
actionsTable.fill(1247, 28593, 28595); // 'state 223' -> '.." -> reduce (target=111, len=2)
actionsTable[28602] = 1247; // 'state 223' -> identifier -> reduce (target=111, len=2)
actionsTable[28690] = 114; // 'state 224' -> * -> shift (target=57, len=0)
actionsTable[28708] = 510; // 'state 224' -> ] -> shift (target=255, len=0)
actionsTable[28711] = 114; // 'state 224' -> + -> shift (target=57, len=0)
actionsTable.fill(114, 28723, 28725); // 'state 224' -> -../ -> shift (target=57, len=0)
actionsTable[28800] = 2787; // 'state 225' -> [ -> reduce (target=113, len=5)
actionsTable.fill(2787, 28803, 28805); // 'state 225' -> :..@import -> reduce (target=113, len=5)
actionsTable.fill(2787, 28807, 28811); // 'state 225' -> @media..@keyframes -> reduce (target=113, len=5)
actionsTable.fill(2787, 28812, 28815); // 'state 225' -> }..@scope -> reduce (target=113, len=5)
actionsTable.fill(2787, 28817, 28820); // 'state 225' -> &... -> reduce (target=113, len=5)
actionsTable.fill(2787, 28828, 28830); // 'state 225' -> ::..# -> reduce (target=113, len=5)
actionsTable.fill(2787, 28837, 28841); // 'state 225' -> >..| -> reduce (target=113, len=5)
actionsTable.fill(2787, 28849, 28851); // 'state 225' -> '.." -> reduce (target=113, len=5)
actionsTable.fill(2787, 28858, 28860); // 'state 225' -> identifier..at_keyword -> reduce (target=113, len=5)
actionsTable[28862] = 2787; // 'state 225' -> _keyframes_statement_token1 -> reduce (target=113, len=5)
actionsTable[28866] = 2787; // 'state 225' -> @par-gen.EOF -> reduce (target=113, len=5)
actionsTable[28928] = 757; // 'state 226' -> [ -> reduce (target=122, len=1)
actionsTable[28933] = 757; // 'state 226' -> , -> reduce (target=122, len=1)
actionsTable[28934] = 512; // 'state 226' -> ; -> shift (target=256, len=0)
actionsTable[28943] = 757; // 'state 226' -> ( -> reduce (target=122, len=1)
actionsTable[28946] = 757; // 'state 226' -> * -> reduce (target=122, len=1)
actionsTable[28967] = 757; // 'state 226' -> + -> reduce (target=122, len=1)
actionsTable[28972] = 757; // 'state 226' -> !important -> reduce (target=122, len=1)
actionsTable.fill(757, 28977, 28981); // 'state 226' -> '../ -> reduce (target=122, len=1)
actionsTable[28982] = 757; // 'state 226' -> color_value -> reduce (target=122, len=1)
actionsTable.fill(757, 28984, 28987); // 'state 226' -> integer_value..identifier -> reduce (target=122, len=1)
actionsTable[28988] = 757; // 'state 226' -> plain_value -> reduce (target=122, len=1)
actionsTable[29056] = 1249; // 'state 227' -> [ -> reduce (target=112, len=2)
actionsTable.fill(1249, 29061, 29063); // 'state 227' -> ,..; -> reduce (target=112, len=2)
actionsTable[29068] = 1249; // 'state 227' -> } -> reduce (target=112, len=2)
actionsTable[29071] = 1249; // 'state 227' -> ( -> reduce (target=112, len=2)
actionsTable[29074] = 114; // 'state 227' -> * -> shift (target=57, len=0)
actionsTable[29095] = 114; // 'state 227' -> + -> shift (target=57, len=0)
actionsTable[29100] = 1249; // 'state 227' -> !important -> reduce (target=112, len=2)
actionsTable.fill(1249, 29105, 29107); // 'state 227' -> '.." -> reduce (target=112, len=2)
actionsTable.fill(114, 29107, 29109); // 'state 227' -> -../ -> shift (target=57, len=0)
actionsTable[29110] = 1249; // 'state 227' -> color_value -> reduce (target=112, len=2)
actionsTable.fill(1249, 29112, 29115); // 'state 227' -> integer_value..identifier -> reduce (target=112, len=2)
actionsTable[29116] = 1249; // 'state 227' -> plain_value -> reduce (target=112, len=2)
actionsTable.fill(2231, 29184, 29189); // 'state 228' -> [..@import -> reduce (target=91, len=4)
actionsTable.fill(2231, 29191, 29195); // 'state 228' -> @media..@keyframes -> reduce (target=91, len=4)
actionsTable.fill(2231, 29196, 29199); // 'state 228' -> }..@scope -> reduce (target=91, len=4)
actionsTable.fill(2231, 29201, 29204); // 'state 228' -> &... -> reduce (target=91, len=4)
actionsTable.fill(2231, 29212, 29214); // 'state 228' -> ::..# -> reduce (target=91, len=4)
actionsTable.fill(2231, 29221, 29225); // 'state 228' -> >..| -> reduce (target=91, len=4)
actionsTable.fill(2231, 29233, 29235); // 'state 228' -> '.." -> reduce (target=91, len=4)
actionsTable[29240] = 2231; // 'state 228' -> integer_value -> reduce (target=91, len=4)
actionsTable.fill(2231, 29242, 29244); // 'state 228' -> identifier..at_keyword -> reduce (target=91, len=4)
actionsTable[29246] = 2231; // 'state 228' -> _keyframes_statement_token1 -> reduce (target=91, len=4)
actionsTable[29250] = 2231; // 'state 228' -> @par-gen.EOF -> reduce (target=91, len=4)
actionsTable[29312] = 1707; // 'state 229' -> [ -> reduce (target=85, len=3)
actionsTable.fill(1707, 29315, 29317); // 'state 229' -> :..@import -> reduce (target=85, len=3)
actionsTable.fill(1707, 29319, 29323); // 'state 229' -> @media..@keyframes -> reduce (target=85, len=3)
actionsTable.fill(1707, 29324, 29327); // 'state 229' -> }..@scope -> reduce (target=85, len=3)
actionsTable.fill(1707, 29329, 29332); // 'state 229' -> &... -> reduce (target=85, len=3)
actionsTable.fill(1707, 29340, 29342); // 'state 229' -> ::..# -> reduce (target=85, len=3)
actionsTable.fill(1707, 29349, 29353); // 'state 229' -> >..| -> reduce (target=85, len=3)
actionsTable.fill(1707, 29361, 29363); // 'state 229' -> '.." -> reduce (target=85, len=3)
actionsTable.fill(1707, 29370, 29372); // 'state 229' -> identifier..at_keyword -> reduce (target=85, len=3)
actionsTable[29374] = 1707; // 'state 229' -> _keyframes_statement_token1 -> reduce (target=85, len=3)
actionsTable[29440] = 1193; // 'state 230' -> [ -> reduce (target=84, len=2)
actionsTable[29446] = 1193; // 'state 230' -> ; -> reduce (target=84, len=2)
actionsTable[29455] = 1193; // 'state 230' -> ( -> reduce (target=84, len=2)
actionsTable[29484] = 1193; // 'state 230' -> !important -> reduce (target=84, len=2)
actionsTable.fill(1193, 29489, 29491); // 'state 230' -> '.." -> reduce (target=84, len=2)
actionsTable[29494] = 1193; // 'state 230' -> color_value -> reduce (target=84, len=2)
actionsTable.fill(1193, 29496, 29499); // 'state 230' -> integer_value..identifier -> reduce (target=84, len=2)
actionsTable.fill(1193, 29500, 29502); // 'state 230' -> plain_value..important_value -> reduce (target=84, len=2)
actionsTable[29568] = 1193; // 'state 231' -> [ -> reduce (target=84, len=2)
actionsTable[29574] = 1193; // 'state 231' -> ; -> reduce (target=84, len=2)
actionsTable[29583] = 1193; // 'state 231' -> ( -> reduce (target=84, len=2)
actionsTable[29586] = 114; // 'state 231' -> * -> shift (target=57, len=0)
actionsTable[29607] = 114; // 'state 231' -> + -> shift (target=57, len=0)
actionsTable[29612] = 1193; // 'state 231' -> !important -> reduce (target=84, len=2)
actionsTable.fill(1193, 29617, 29619); // 'state 231' -> '.." -> reduce (target=84, len=2)
actionsTable.fill(114, 29619, 29621); // 'state 231' -> -../ -> shift (target=57, len=0)
actionsTable[29622] = 1193; // 'state 231' -> color_value -> reduce (target=84, len=2)
actionsTable.fill(1193, 29624, 29627); // 'state 231' -> integer_value..identifier -> reduce (target=84, len=2)
actionsTable.fill(1193, 29628, 29630); // 'state 231' -> plain_value..important_value -> reduce (target=84, len=2)
actionsTable[29696] = 2707; // 'state 232' -> [ -> reduce (target=73, len=5)
actionsTable.fill(2707, 29699, 29701); // 'state 232' -> :..@import -> reduce (target=73, len=5)
actionsTable.fill(2707, 29703, 29707); // 'state 232' -> @media..@keyframes -> reduce (target=73, len=5)
actionsTable.fill(2707, 29708, 29711); // 'state 232' -> }..@scope -> reduce (target=73, len=5)
actionsTable.fill(2707, 29713, 29716); // 'state 232' -> &... -> reduce (target=73, len=5)
actionsTable.fill(2707, 29724, 29726); // 'state 232' -> ::..# -> reduce (target=73, len=5)
actionsTable.fill(2707, 29733, 29737); // 'state 232' -> >..| -> reduce (target=73, len=5)
actionsTable.fill(2707, 29745, 29747); // 'state 232' -> '.." -> reduce (target=73, len=5)
actionsTable.fill(2707, 29754, 29756); // 'state 232' -> identifier..at_keyword -> reduce (target=73, len=5)
actionsTable[29758] = 2707; // 'state 232' -> _keyframes_statement_token1 -> reduce (target=73, len=5)
actionsTable[29762] = 2707; // 'state 232' -> @par-gen.EOF -> reduce (target=73, len=5)
actionsTable[29824] = 1801; // 'state 233' -> [ -> reduce (target=132, len=3)
actionsTable.fill(1801, 29829, 29831); // 'state 233' -> ,..; -> reduce (target=132, len=3)
actionsTable[29836] = 1801; // 'state 233' -> } -> reduce (target=132, len=3)
actionsTable.fill(1801, 29839, 29841); // 'state 233' -> (..) -> reduce (target=132, len=3)
actionsTable[29842] = 1801; // 'state 233' -> * -> reduce (target=132, len=3)
actionsTable[29845] = 1801; // 'state 233' -> not -> reduce (target=132, len=3)
actionsTable[29860] = 1801; // 'state 233' -> ] -> reduce (target=132, len=3)
actionsTable[29863] = 1801; // 'state 233' -> + -> reduce (target=132, len=3)
actionsTable[29868] = 1801; // 'state 233' -> !important -> reduce (target=132, len=3)
actionsTable.fill(1801, 29871, 29877); // 'state 233' -> only../ -> reduce (target=132, len=3)
actionsTable[29878] = 1801; // 'state 233' -> color_value -> reduce (target=132, len=3)
actionsTable.fill(1801, 29880, 29883); // 'state 233' -> integer_value..identifier -> reduce (target=132, len=3)
actionsTable.fill(1801, 29884, 29886); // 'state 233' -> plain_value..important_value -> reduce (target=132, len=3)
actionsTable[29952] = 1237; // 'state 234' -> [ -> reduce (target=106, len=2)
actionsTable.fill(1237, 29957, 29959); // 'state 234' -> ,..; -> reduce (target=106, len=2)
actionsTable.fill(1237, 29967, 29969); // 'state 234' -> (..) -> reduce (target=106, len=2)
actionsTable[29970] = 114; // 'state 234' -> * -> shift (target=57, len=0)
actionsTable[29991] = 114; // 'state 234' -> + -> shift (target=57, len=0)
actionsTable[29996] = 1237; // 'state 234' -> !important -> reduce (target=106, len=2)
actionsTable.fill(1237, 30001, 30003); // 'state 234' -> '.." -> reduce (target=106, len=2)
actionsTable.fill(114, 30003, 30005); // 'state 234' -> -../ -> shift (target=57, len=0)
actionsTable[30006] = 1237; // 'state 234' -> color_value -> reduce (target=106, len=2)
actionsTable.fill(1237, 30008, 30011); // 'state 234' -> integer_value..identifier -> reduce (target=106, len=2)
actionsTable[30012] = 1237; // 'state 234' -> plain_value -> reduce (target=106, len=2)
actionsTable.fill(234, 30085, 30087); // 'state 235' -> ,..; -> shift (target=117, len=0)
actionsTable[30096] = 518; // 'state 235' -> ) -> shift (target=259, len=0)
actionsTable[30208] = 2305; // 'state 236' -> [ -> reduce (target=128, len=4)
actionsTable.fill(2305, 30213, 30215); // 'state 236' -> ,..; -> reduce (target=128, len=4)
actionsTable[30220] = 2305; // 'state 236' -> } -> reduce (target=128, len=4)
actionsTable.fill(2305, 30223, 30225); // 'state 236' -> (..) -> reduce (target=128, len=4)
actionsTable[30226] = 2305; // 'state 236' -> * -> reduce (target=128, len=4)
actionsTable[30229] = 2305; // 'state 236' -> not -> reduce (target=128, len=4)
actionsTable[30244] = 2305; // 'state 236' -> ] -> reduce (target=128, len=4)
actionsTable[30247] = 2305; // 'state 236' -> + -> reduce (target=128, len=4)
actionsTable[30252] = 2305; // 'state 236' -> !important -> reduce (target=128, len=4)
actionsTable.fill(2305, 30255, 30261); // 'state 236' -> only../ -> reduce (target=128, len=4)
actionsTable[30262] = 2305; // 'state 236' -> color_value -> reduce (target=128, len=4)
actionsTable.fill(2305, 30264, 30267); // 'state 236' -> integer_value..identifier -> reduce (target=128, len=4)
actionsTable.fill(2305, 30268, 30270); // 'state 236' -> plain_value..important_value -> reduce (target=128, len=4)
actionsTable[30341] = 1279; // 'state 237' -> , -> reduce (target=127, len=2)
actionsTable[30354] = 114; // 'state 237' -> * -> shift (target=57, len=0)
actionsTable[30372] = 1279; // 'state 237' -> ] -> reduce (target=127, len=2)
actionsTable[30375] = 114; // 'state 237' -> + -> shift (target=57, len=0)
actionsTable.fill(114, 30387, 30389); // 'state 237' -> -../ -> shift (target=57, len=0)
actionsTable.fill(1681, 30469, 30471); // 'state 238' -> ,..; -> reduce (target=72, len=3)
actionsTable[30475] = 1681; // 'state 238' -> { -> reduce (target=72, len=3)
actionsTable.fill(124, 30509, 30511); // 'state 238' -> and..or -> shift (target=62, len=0)
actionsTable.fill(2291, 30597, 30599); // 'state 239' -> ,..; -> reduce (target=121, len=4)
actionsTable[30603] = 2291; // 'state 239' -> { -> reduce (target=121, len=4)
actionsTable[30608] = 2291; // 'state 239' -> ) -> reduce (target=121, len=4)
actionsTable.fill(2291, 30637, 30639); // 'state 239' -> and..or -> reduce (target=121, len=4)
actionsTable[30720] = 1695; // 'state 240' -> [ -> reduce (target=79, len=3)
actionsTable.fill(1695, 30723, 30725); // 'state 240' -> :..@import -> reduce (target=79, len=3)
actionsTable.fill(1695, 30727, 30731); // 'state 240' -> @media..@keyframes -> reduce (target=79, len=3)
actionsTable.fill(1695, 30732, 30735); // 'state 240' -> }..@scope -> reduce (target=79, len=3)
actionsTable.fill(1695, 30737, 30740); // 'state 240' -> &... -> reduce (target=79, len=3)
actionsTable.fill(1695, 30748, 30750); // 'state 240' -> ::..# -> reduce (target=79, len=3)
actionsTable.fill(1695, 30757, 30761); // 'state 240' -> >..| -> reduce (target=79, len=3)
actionsTable.fill(1695, 30769, 30771); // 'state 240' -> '.." -> reduce (target=79, len=3)
actionsTable.fill(1695, 30778, 30780); // 'state 240' -> identifier..at_keyword -> reduce (target=79, len=3)
actionsTable[30782] = 1695; // 'state 240' -> _keyframes_statement_token1 -> reduce (target=79, len=3)
actionsTable[30786] = 1695; // 'state 240' -> @par-gen.EOF -> reduce (target=79, len=3)
actionsTable.fill(1181, 30849, 30851); // 'state 241' -> from..to -> reduce (target=78, len=2)
actionsTable[30860] = 1181; // 'state 241' -> } -> reduce (target=78, len=2)
actionsTable[30904] = 1181; // 'state 241' -> integer_value -> reduce (target=78, len=2)
actionsTable.fill(528, 30977, 30979); // 'state 242' -> from..to -> shift (target=264, len=0)
actionsTable[31032] = 528; // 'state 242' -> integer_value -> shift (target=264, len=0)
actionsTable.fill(1187, 31105, 31107); // 'state 243' -> from..to -> reduce (target=81, len=2)
actionsTable[31116] = 1187; // 'state 243' -> } -> reduce (target=81, len=2)
actionsTable[31160] = 1187; // 'state 243' -> integer_value -> reduce (target=81, len=2)
actionsTable[31247] = 238; // 'state 244' -> ( -> shift (target=119, len=0)
actionsTable[31360] = 2727; // 'state 245' -> [ -> reduce (target=83, len=5)
actionsTable.fill(2727, 31363, 31365); // 'state 245' -> :..@import -> reduce (target=83, len=5)
actionsTable.fill(2727, 31367, 31371); // 'state 245' -> @media..@keyframes -> reduce (target=83, len=5)
actionsTable.fill(2727, 31372, 31375); // 'state 245' -> }..@scope -> reduce (target=83, len=5)
actionsTable.fill(2727, 31377, 31380); // 'state 245' -> &... -> reduce (target=83, len=5)
actionsTable.fill(2727, 31388, 31390); // 'state 245' -> ::..# -> reduce (target=83, len=5)
actionsTable.fill(2727, 31397, 31401); // 'state 245' -> >..| -> reduce (target=83, len=5)
actionsTable.fill(2727, 31409, 31411); // 'state 245' -> '.." -> reduce (target=83, len=5)
actionsTable.fill(2727, 31418, 31420); // 'state 245' -> identifier..at_keyword -> reduce (target=83, len=5)
actionsTable[31422] = 2727; // 'state 245' -> _keyframes_statement_token1 -> reduce (target=83, len=5)
actionsTable[31426] = 2727; // 'state 245' -> @par-gen.EOF -> reduce (target=83, len=5)
actionsTable[31506] = 114; // 'state 246' -> * -> shift (target=57, len=0)
actionsTable[31524] = 530; // 'state 246' -> ] -> shift (target=265, len=0)
actionsTable[31527] = 114; // 'state 246' -> + -> shift (target=57, len=0)
actionsTable.fill(114, 31539, 31541); // 'state 246' -> -../ -> shift (target=57, len=0)
actionsTable[31616] = 1755; // 'state 247' -> [ -> reduce (target=109, len=3)
actionsTable[31619] = 1755; // 'state 247' -> : -> reduce (target=109, len=3)
actionsTable[31621] = 1755; // 'state 247' -> , -> reduce (target=109, len=3)
actionsTable[31627] = 1755; // 'state 247' -> { -> reduce (target=109, len=3)
actionsTable.fill(1755, 31632, 31636); // 'state 247' -> )... -> reduce (target=109, len=3)
actionsTable.fill(1755, 31644, 31657); // 'state 247' -> ::..| -> reduce (target=109, len=3)
actionsTable.fill(1755, 31665, 31667); // 'state 247' -> '.." -> reduce (target=109, len=3)
actionsTable[31674] = 1755; // 'state 247' -> identifier -> reduce (target=109, len=3)
actionsTable[31749] = 138; // 'state 248' -> , -> shift (target=69, len=0)
actionsTable[31760] = 532; // 'state 248' -> ) -> shift (target=266, len=0)
actionsTable[31872] = 1757; // 'state 249' -> [ -> reduce (target=110, len=3)
actionsTable[31875] = 1757; // 'state 249' -> : -> reduce (target=110, len=3)
actionsTable[31877] = 1757; // 'state 249' -> , -> reduce (target=110, len=3)
actionsTable[31883] = 1757; // 'state 249' -> { -> reduce (target=110, len=3)
actionsTable.fill(1757, 31888, 31892); // 'state 249' -> )... -> reduce (target=110, len=3)
actionsTable.fill(1757, 31900, 31913); // 'state 249' -> ::..| -> reduce (target=110, len=3)
actionsTable.fill(1757, 31921, 31923); // 'state 249' -> '.." -> reduce (target=110, len=3)
actionsTable[31930] = 1757; // 'state 249' -> identifier -> reduce (target=110, len=3)
actionsTable[32000] = 1753; // 'state 250' -> [ -> reduce (target=108, len=3)
actionsTable[32003] = 1753; // 'state 250' -> : -> reduce (target=108, len=3)
actionsTable[32005] = 1753; // 'state 250' -> , -> reduce (target=108, len=3)
actionsTable[32011] = 1753; // 'state 250' -> { -> reduce (target=108, len=3)
actionsTable.fill(1753, 32016, 32020); // 'state 250' -> )... -> reduce (target=108, len=3)
actionsTable.fill(1753, 32028, 32041); // 'state 250' -> ::..| -> reduce (target=108, len=3)
actionsTable.fill(1753, 32049, 32051); // 'state 250' -> '.." -> reduce (target=108, len=3)
actionsTable[32058] = 1753; // 'state 250' -> identifier -> reduce (target=108, len=3)
actionsTable[32133] = 242; // 'state 251' -> , -> shift (target=121, len=0)
actionsTable[32144] = 534; // 'state 251' -> ) -> shift (target=267, len=0)
actionsTable[32256] = 697; // 'state 252' -> [ -> reduce (target=92, len=1)
actionsTable[32259] = 697; // 'state 252' -> : -> reduce (target=92, len=1)
actionsTable[32261] = 757; // 'state 252' -> , -> reduce (target=122, len=1)
actionsTable.fill(697, 32273, 32276); // 'state 252' -> &... -> reduce (target=92, len=1)
actionsTable.fill(697, 32284, 32286); // 'state 252' -> ::..# -> reduce (target=92, len=1)
actionsTable[32292] = 757; // 'state 252' -> ] -> reduce (target=122, len=1)
actionsTable.fill(697, 32293, 32297); // 'state 252' -> >..| -> reduce (target=92, len=1)
actionsTable.fill(697, 32305, 32307); // 'state 252' -> '.." -> reduce (target=92, len=1)
actionsTable.fill(757, 32307, 32309); // 'state 252' -> -../ -> reduce (target=122, len=1)
actionsTable[32314] = 697; // 'state 252' -> identifier -> reduce (target=92, len=1)
actionsTable[32384] = 1759; // 'state 253' -> [ -> reduce (target=111, len=3)
actionsTable[32387] = 1759; // 'state 253' -> : -> reduce (target=111, len=3)
actionsTable[32389] = 1759; // 'state 253' -> , -> reduce (target=111, len=3)
actionsTable[32395] = 1759; // 'state 253' -> { -> reduce (target=111, len=3)
actionsTable.fill(1759, 32400, 32404); // 'state 253' -> )... -> reduce (target=111, len=3)
actionsTable.fill(1759, 32412, 32425); // 'state 253' -> ::..| -> reduce (target=111, len=3)
actionsTable.fill(1759, 32433, 32435); // 'state 253' -> '.." -> reduce (target=111, len=3)
actionsTable[32442] = 1759; // 'state 253' -> identifier -> reduce (target=111, len=3)
actionsTable[32517] = 242; // 'state 254' -> , -> shift (target=121, len=0)
actionsTable[32528] = 536; // 'state 254' -> ) -> shift (target=268, len=0)
actionsTable[32640] = 2761; // 'state 255' -> [ -> reduce (target=100, len=5)
actionsTable[32643] = 2761; // 'state 255' -> : -> reduce (target=100, len=5)
actionsTable[32645] = 2761; // 'state 255' -> , -> reduce (target=100, len=5)
actionsTable[32651] = 2761; // 'state 255' -> { -> reduce (target=100, len=5)
actionsTable.fill(2761, 32656, 32660); // 'state 255' -> )... -> reduce (target=100, len=5)
actionsTable.fill(2761, 32668, 32681); // 'state 255' -> ::..| -> reduce (target=100, len=5)
actionsTable.fill(2761, 32689, 32691); // 'state 255' -> '.." -> reduce (target=100, len=5)
actionsTable[32698] = 2761; // 'state 255' -> identifier -> reduce (target=100, len=5)
actionsTable[32768] = 3299; // 'state 256' -> [ -> reduce (target=113, len=6)
actionsTable.fill(3299, 32771, 32773); // 'state 256' -> :..@import -> reduce (target=113, len=6)
actionsTable.fill(3299, 32775, 32779); // 'state 256' -> @media..@keyframes -> reduce (target=113, len=6)
actionsTable.fill(3299, 32780, 32783); // 'state 256' -> }..@scope -> reduce (target=113, len=6)
actionsTable.fill(3299, 32785, 32788); // 'state 256' -> &... -> reduce (target=113, len=6)
actionsTable.fill(3299, 32796, 32798); // 'state 256' -> ::..# -> reduce (target=113, len=6)
actionsTable.fill(3299, 32805, 32809); // 'state 256' -> >..| -> reduce (target=113, len=6)
actionsTable.fill(3299, 32817, 32819); // 'state 256' -> '.." -> reduce (target=113, len=6)
actionsTable.fill(3299, 32826, 32828); // 'state 256' -> identifier..at_keyword -> reduce (target=113, len=6)
actionsTable[32830] = 3299; // 'state 256' -> _keyframes_statement_token1 -> reduce (target=113, len=6)
actionsTable[32834] = 3299; // 'state 256' -> @par-gen.EOF -> reduce (target=113, len=6)
actionsTable[32896] = 1761; // 'state 257' -> [ -> reduce (target=112, len=3)
actionsTable.fill(1761, 32901, 32903); // 'state 257' -> ,..; -> reduce (target=112, len=3)
actionsTable[32908] = 1761; // 'state 257' -> } -> reduce (target=112, len=3)
actionsTable[32911] = 1761; // 'state 257' -> ( -> reduce (target=112, len=3)
actionsTable[32914] = 114; // 'state 257' -> * -> shift (target=57, len=0)
actionsTable[32935] = 114; // 'state 257' -> + -> shift (target=57, len=0)
actionsTable[32940] = 1761; // 'state 257' -> !important -> reduce (target=112, len=3)
actionsTable.fill(1761, 32945, 32947); // 'state 257' -> '.." -> reduce (target=112, len=3)
actionsTable.fill(114, 32947, 32949); // 'state 257' -> -../ -> shift (target=57, len=0)
actionsTable[32950] = 1761; // 'state 257' -> color_value -> reduce (target=112, len=3)
actionsTable.fill(1761, 32952, 32955); // 'state 257' -> integer_value..identifier -> reduce (target=112, len=3)
actionsTable[32956] = 1761; // 'state 257' -> plain_value -> reduce (target=112, len=3)
actionsTable[33024] = 757; // 'state 258' -> [ -> reduce (target=122, len=1)
actionsTable[33029] = 757; // 'state 258' -> , -> reduce (target=122, len=1)
actionsTable[33030] = 450; // 'state 258' -> ; -> shift (target=225, len=0)
actionsTable[33036] = 2277; // 'state 258' -> } -> reduce (target=114, len=4)
actionsTable[33039] = 757; // 'state 258' -> ( -> reduce (target=122, len=1)
actionsTable[33042] = 757; // 'state 258' -> * -> reduce (target=122, len=1)
actionsTable[33063] = 757; // 'state 258' -> + -> reduce (target=122, len=1)
actionsTable[33068] = 757; // 'state 258' -> !important -> reduce (target=122, len=1)
actionsTable.fill(757, 33073, 33077); // 'state 258' -> '../ -> reduce (target=122, len=1)
actionsTable[33078] = 757; // 'state 258' -> color_value -> reduce (target=122, len=1)
actionsTable.fill(757, 33080, 33083); // 'state 258' -> integer_value..identifier -> reduce (target=122, len=1)
actionsTable[33084] = 757; // 'state 258' -> plain_value -> reduce (target=122, len=1)
actionsTable[33152] = 2313; // 'state 259' -> [ -> reduce (target=132, len=4)
actionsTable.fill(2313, 33157, 33159); // 'state 259' -> ,..; -> reduce (target=132, len=4)
actionsTable[33164] = 2313; // 'state 259' -> } -> reduce (target=132, len=4)
actionsTable.fill(2313, 33167, 33169); // 'state 259' -> (..) -> reduce (target=132, len=4)
actionsTable[33170] = 2313; // 'state 259' -> * -> reduce (target=132, len=4)
actionsTable[33173] = 2313; // 'state 259' -> not -> reduce (target=132, len=4)
actionsTable[33188] = 2313; // 'state 259' -> ] -> reduce (target=132, len=4)
actionsTable[33191] = 2313; // 'state 259' -> + -> reduce (target=132, len=4)
actionsTable[33196] = 2313; // 'state 259' -> !important -> reduce (target=132, len=4)
actionsTable.fill(2313, 33199, 33205); // 'state 259' -> only../ -> reduce (target=132, len=4)
actionsTable[33206] = 2313; // 'state 259' -> color_value -> reduce (target=132, len=4)
actionsTable.fill(2313, 33208, 33211); // 'state 259' -> integer_value..identifier -> reduce (target=132, len=4)
actionsTable.fill(2313, 33212, 33214); // 'state 259' -> plain_value..important_value -> reduce (target=132, len=4)
actionsTable[33285] = 1791; // 'state 260' -> , -> reduce (target=127, len=3)
actionsTable[33298] = 114; // 'state 260' -> * -> shift (target=57, len=0)
actionsTable[33316] = 1791; // 'state 260' -> ] -> reduce (target=127, len=3)
actionsTable[33319] = 114; // 'state 260' -> + -> shift (target=57, len=0)
actionsTable.fill(114, 33331, 33333); // 'state 260' -> -../ -> shift (target=57, len=0)
actionsTable.fill(2795, 33413, 33415); // 'state 261' -> ,..; -> reduce (target=117, len=5)
actionsTable[33419] = 2795; // 'state 261' -> { -> reduce (target=117, len=5)
actionsTable[33424] = 2795; // 'state 261' -> ) -> reduce (target=117, len=5)
actionsTable.fill(2795, 33453, 33455); // 'state 261' -> and..or -> reduce (target=117, len=5)
actionsTable.fill(540, 33537, 33539); // 'state 262' -> from..to -> shift (target=270, len=0)
actionsTable[33592] = 540; // 'state 262' -> integer_value -> shift (target=270, len=0)
actionsTable.fill(1699, 33665, 33667); // 'state 263' -> from..to -> reduce (target=81, len=3)
actionsTable[33676] = 1699; // 'state 263' -> } -> reduce (target=81, len=3)
actionsTable[33720] = 1699; // 'state 263' -> integer_value -> reduce (target=81, len=3)
actionsTable[33797] = 1185; // 'state 264' -> , -> reduce (target=80, len=2)
actionsTable[33803] = 1185; // 'state 264' -> { -> reduce (target=80, len=2)
actionsTable[33920] = 3273; // 'state 265' -> [ -> reduce (target=100, len=6)
actionsTable[33923] = 3273; // 'state 265' -> : -> reduce (target=100, len=6)
actionsTable[33925] = 3273; // 'state 265' -> , -> reduce (target=100, len=6)
actionsTable[33931] = 3273; // 'state 265' -> { -> reduce (target=100, len=6)
actionsTable.fill(3273, 33936, 33940); // 'state 265' -> )... -> reduce (target=100, len=6)
actionsTable.fill(3273, 33948, 33961); // 'state 265' -> ::..| -> reduce (target=100, len=6)
actionsTable.fill(3273, 33969, 33971); // 'state 265' -> '.." -> reduce (target=100, len=6)
actionsTable[33978] = 3273; // 'state 265' -> identifier -> reduce (target=100, len=6)
actionsTable[34048] = 2267; // 'state 266' -> [ -> reduce (target=109, len=4)
actionsTable[34051] = 2267; // 'state 266' -> : -> reduce (target=109, len=4)
actionsTable[34053] = 2267; // 'state 266' -> , -> reduce (target=109, len=4)
actionsTable[34059] = 2267; // 'state 266' -> { -> reduce (target=109, len=4)
actionsTable.fill(2267, 34064, 34068); // 'state 266' -> )... -> reduce (target=109, len=4)
actionsTable.fill(2267, 34076, 34089); // 'state 266' -> ::..| -> reduce (target=109, len=4)
actionsTable.fill(2267, 34097, 34099); // 'state 266' -> '.." -> reduce (target=109, len=4)
actionsTable[34106] = 2267; // 'state 266' -> identifier -> reduce (target=109, len=4)
actionsTable[34176] = 2265; // 'state 267' -> [ -> reduce (target=108, len=4)
actionsTable[34179] = 2265; // 'state 267' -> : -> reduce (target=108, len=4)
actionsTable[34181] = 2265; // 'state 267' -> , -> reduce (target=108, len=4)
actionsTable[34187] = 2265; // 'state 267' -> { -> reduce (target=108, len=4)
actionsTable.fill(2265, 34192, 34196); // 'state 267' -> )... -> reduce (target=108, len=4)
actionsTable.fill(2265, 34204, 34217); // 'state 267' -> ::..| -> reduce (target=108, len=4)
actionsTable.fill(2265, 34225, 34227); // 'state 267' -> '.." -> reduce (target=108, len=4)
actionsTable[34234] = 2265; // 'state 267' -> identifier -> reduce (target=108, len=4)
actionsTable[34304] = 2271; // 'state 268' -> [ -> reduce (target=111, len=4)
actionsTable[34307] = 2271; // 'state 268' -> : -> reduce (target=111, len=4)
actionsTable[34309] = 2271; // 'state 268' -> , -> reduce (target=111, len=4)
actionsTable[34315] = 2271; // 'state 268' -> { -> reduce (target=111, len=4)
actionsTable.fill(2271, 34320, 34324); // 'state 268' -> )... -> reduce (target=111, len=4)
actionsTable.fill(2271, 34332, 34345); // 'state 268' -> ::..| -> reduce (target=111, len=4)
actionsTable.fill(2271, 34353, 34355); // 'state 268' -> '.." -> reduce (target=111, len=4)
actionsTable[34362] = 2271; // 'state 268' -> identifier -> reduce (target=111, len=4)
actionsTable[34432] = 757; // 'state 269' -> [ -> reduce (target=122, len=1)
actionsTable[34437] = 757; // 'state 269' -> , -> reduce (target=122, len=1)
actionsTable[34438] = 512; // 'state 269' -> ; -> shift (target=256, len=0)
actionsTable[34444] = 2789; // 'state 269' -> } -> reduce (target=114, len=5)
actionsTable[34447] = 757; // 'state 269' -> ( -> reduce (target=122, len=1)
actionsTable[34450] = 757; // 'state 269' -> * -> reduce (target=122, len=1)
actionsTable[34471] = 757; // 'state 269' -> + -> reduce (target=122, len=1)
actionsTable[34476] = 757; // 'state 269' -> !important -> reduce (target=122, len=1)
actionsTable.fill(757, 34481, 34485); // 'state 269' -> '../ -> reduce (target=122, len=1)
actionsTable[34486] = 757; // 'state 269' -> color_value -> reduce (target=122, len=1)
actionsTable.fill(757, 34488, 34491); // 'state 269' -> integer_value..identifier -> reduce (target=122, len=1)
actionsTable[34492] = 757; // 'state 269' -> plain_value -> reduce (target=122, len=1)
actionsTable[34565] = 1697; // 'state 270' -> , -> reduce (target=80, len=3)
actionsTable[34571] = 1697; // 'state 270' -> { -> reduce (target=80, len=3)
actionsTable[34688] = 2781; // 'state 271' -> [ -> reduce (target=110, len=5)
actionsTable[34691] = 2781; // 'state 271' -> : -> reduce (target=110, len=5)
actionsTable[34693] = 2781; // 'state 271' -> , -> reduce (target=110, len=5)
actionsTable[34699] = 2781; // 'state 271' -> { -> reduce (target=110, len=5)
actionsTable.fill(2781, 34704, 34708); // 'state 271' -> )... -> reduce (target=110, len=5)
actionsTable.fill(2781, 34716, 34729); // 'state 271' -> ::..| -> reduce (target=110, len=5)
actionsTable.fill(2781, 34737, 34739); // 'state 271' -> '.." -> reduce (target=110, len=5)
actionsTable[34746] = 2781; // 'state 271' -> identifier -> reduce (target=110, len=5)
actionsTable[34816] = 4775; // 'state 272' -> [ -> reduce (target=83, len=9)
actionsTable.fill(4775, 34819, 34821); // 'state 272' -> :..@import -> reduce (target=83, len=9)
actionsTable.fill(4775, 34823, 34827); // 'state 272' -> @media..@keyframes -> reduce (target=83, len=9)
actionsTable.fill(4775, 34828, 34831); // 'state 272' -> }..@scope -> reduce (target=83, len=9)
actionsTable.fill(4775, 34833, 34836); // 'state 272' -> &... -> reduce (target=83, len=9)
actionsTable.fill(4775, 34844, 34846); // 'state 272' -> ::..# -> reduce (target=83, len=9)
actionsTable.fill(4775, 34853, 34857); // 'state 272' -> >..| -> reduce (target=83, len=9)
actionsTable.fill(4775, 34865, 34867); // 'state 272' -> '.." -> reduce (target=83, len=9)
actionsTable.fill(4775, 34874, 34876); // 'state 272' -> identifier..at_keyword -> reduce (target=83, len=9)
actionsTable[34878] = 4775; // 'state 272' -> _keyframes_statement_token1 -> reduce (target=83, len=9)
actionsTable[34882] = 4775; // 'state 272' -> @par-gen.EOF -> reduce (target=83, len=9)

const shiftActionsTable = new Uint8Array(34896);
shiftActionsTable[49] = 1; // 'state 0' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[50] = 2; // 'state 0' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[177] = 1; // 'state 1' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[178] = 2; // 'state 1' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[433] = 1; // 'state 3' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[434] = 2; // 'state 3' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[689] = 1; // 'state 5' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[690] = 2; // 'state 5' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[817] = 1; // 'state 6' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[818] = 2; // 'state 6' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[1329] = 1; // 'state 10' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[1330] = 2; // 'state 10' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[1457] = 1; // 'state 11' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[1458] = 2; // 'state 11' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[1585] = 1; // 'state 12' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[1586] = 2; // 'state 12' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[1713] = 1; // 'state 13' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[1714] = 2; // 'state 13' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[1841] = 3; // 'state 14' -> ' -> lexer.pop()
shiftActionsTable[1970] = 3; // 'state 15' -> " -> lexer.pop()
shiftActionsTable[2225] = 1; // 'state 17' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[2226] = 2; // 'state 17' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[2481] = 1; // 'state 19' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[2482] = 2; // 'state 19' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[2609] = 1; // 'state 20' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[2610] = 2; // 'state 20' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[2737] = 1; // 'state 21' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[2738] = 2; // 'state 21' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[2865] = 1; // 'state 22' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[2866] = 2; // 'state 22' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[2993] = 1; // 'state 23' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[2994] = 2; // 'state 23' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[3761] = 1; // 'state 29' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[3762] = 2; // 'state 29' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[4145] = 1; // 'state 32' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[4146] = 2; // 'state 32' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[4401] = 1; // 'state 34' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[4402] = 2; // 'state 34' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[4657] = 1; // 'state 36' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[4658] = 2; // 'state 36' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[4913] = 1; // 'state 38' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[4914] = 2; // 'state 38' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[5041] = 1; // 'state 39' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[5042] = 2; // 'state 39' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[5169] = 1; // 'state 40' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[5170] = 2; // 'state 40' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[5297] = 1; // 'state 41' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[5298] = 2; // 'state 41' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[6321] = 1; // 'state 49' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[6322] = 2; // 'state 49' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[6961] = 1; // 'state 54' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[6962] = 2; // 'state 54' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[7089] = 1; // 'state 55' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[7090] = 2; // 'state 55' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[7217] = 1; // 'state 56' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[7218] = 2; // 'state 56' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[7345] = 1; // 'state 57' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[7346] = 2; // 'state 57' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[7601] = 1; // 'state 59' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[7602] = 2; // 'state 59' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[8241] = 1; // 'state 64' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[8242] = 2; // 'state 64' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[8625] = 1; // 'state 67' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[8626] = 2; // 'state 67' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[8881] = 1; // 'state 69' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[8882] = 2; // 'state 69' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[9009] = 1; // 'state 70' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[9010] = 2; // 'state 70' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[10161] = 1; // 'state 79' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[10162] = 2; // 'state 79' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[10289] = 1; // 'state 80' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[10290] = 2; // 'state 80' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[10417] = 1; // 'state 81' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[10418] = 2; // 'state 81' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[10545] = 1; // 'state 82' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[10546] = 2; // 'state 82' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[10673] = 1; // 'state 83' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[10674] = 2; // 'state 83' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[10801] = 1; // 'state 84' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[10802] = 2; // 'state 84' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[10929] = 1; // 'state 85' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[10930] = 2; // 'state 85' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[11057] = 1; // 'state 86' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[11058] = 2; // 'state 86' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[11313] = 1; // 'state 88' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[11314] = 2; // 'state 88' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[11441] = 1; // 'state 89' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[11442] = 2; // 'state 89' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[11569] = 1; // 'state 90' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[11570] = 2; // 'state 90' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[11825] = 1; // 'state 92' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[11826] = 2; // 'state 92' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[11953] = 1; // 'state 93' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[11954] = 2; // 'state 93' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[12465] = 1; // 'state 97' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[12466] = 2; // 'state 97' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[12593] = 1; // 'state 98' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[12594] = 2; // 'state 98' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[12721] = 1; // 'state 99' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[12722] = 2; // 'state 99' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[12849] = 1; // 'state 100' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[12850] = 2; // 'state 100' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[13105] = 1; // 'state 102' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[13106] = 2; // 'state 102' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[13233] = 1; // 'state 103' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[13234] = 2; // 'state 103' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[13361] = 1; // 'state 104' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[13362] = 2; // 'state 104' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[13489] = 1; // 'state 105' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[13490] = 2; // 'state 105' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[13617] = 1; // 'state 106' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[13618] = 2; // 'state 106' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[13745] = 1; // 'state 107' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[13746] = 2; // 'state 107' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[14001] = 1; // 'state 109' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[14002] = 2; // 'state 109' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[14129] = 1; // 'state 110' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[14130] = 2; // 'state 110' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[14257] = 1; // 'state 111' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[14258] = 2; // 'state 111' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[14513] = 1; // 'state 113' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[14514] = 2; // 'state 113' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[14641] = 1; // 'state 114' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[14642] = 2; // 'state 114' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[14897] = 1; // 'state 116' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[14898] = 2; // 'state 116' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[15025] = 1; // 'state 117' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[15026] = 2; // 'state 117' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[15153] = 1; // 'state 118' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[15154] = 2; // 'state 118' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[15281] = 1; // 'state 119' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[15282] = 2; // 'state 119' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[15409] = 1; // 'state 120' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[15410] = 2; // 'state 120' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[15537] = 1; // 'state 121' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[15538] = 2; // 'state 121' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[15665] = 1; // 'state 122' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[15666] = 2; // 'state 122' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[15793] = 1; // 'state 123' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[15794] = 2; // 'state 123' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[15921] = 1; // 'state 124' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[15922] = 2; // 'state 124' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[16049] = 1; // 'state 125' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[16050] = 2; // 'state 125' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[16177] = 1; // 'state 126' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[16178] = 2; // 'state 126' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[16305] = 1; // 'state 127' -> ' -> lexer.push(LexerMode.IMM_STRING_VALUE_0)
shiftActionsTable[16306] = 2; // 'state 127' -> " -> lexer.push(LexerMode.IMM_STRING_VALUE_1)
shiftActionsTable[20145] = 3; // 'state 157' -> ' -> lexer.pop()
shiftActionsTable[20402] = 3; // 'state 159' -> " -> lexer.pop()

const gotoTable = new Uint16Array(16528);
gotoTable[71] = 17; // 'state 17'
gotoTable.fill(135, 73, 78); // 'state 135'
gotoTable.fill(135, 82, 84); // 'state 135'
gotoTable.fill(135, 86, 88); // 'state 135'
gotoTable[89] = 18; // 'state 18'
gotoTable[92] = 19; // 'state 19'
gotoTable.fill(136, 93, 97); // 'state 136'
gotoTable.fill(136, 98, 106); // 'state 136'
gotoTable[113] = 135; // 'state 135'
gotoTable[126] = 136; // 'state 136'
gotoTable[220] = 49; // 'state 49'
gotoTable.fill(136, 221, 225); // 'state 136'
gotoTable.fill(136, 226, 233); // 'state 136'
gotoTable[233] = 154; // 'state 154'
gotoTable[254] = 136; // 'state 136'
gotoTable[353] = 152; // 'state 152'
gotoTable[390] = 47; // 'state 47'
gotoTable[499] = 140; // 'state 140'
gotoTable[506] = 25; // 'state 25'
gotoTable[507] = 140; // 'state 140'
gotoTable[510] = 140; // 'state 140'
gotoTable.fill(140, 512, 515); // 'state 140'
gotoTable[628] = 28; // 'state 28'
gotoTable.fill(142, 629, 634); // 'state 142'
gotoTable[755] = 140; // 'state 140'
gotoTable[762] = 143; // 'state 143'
gotoTable[763] = 140; // 'state 140'
gotoTable[766] = 140; // 'state 140'
gotoTable.fill(140, 768, 771); // 'state 140'
gotoTable[894] = 144; // 'state 144'
gotoTable[897] = 144; // 'state 144'
gotoTable[1012] = 31; // 'state 31'
gotoTable.fill(142, 1013, 1018); // 'state 142'
gotoTable[1115] = 145; // 'state 145'
gotoTable[1286] = 151; // 'state 151'
gotoTable[1372] = 50; // 'state 50'
gotoTable.fill(136, 1373, 1377); // 'state 136'
gotoTable.fill(136, 1378, 1386); // 'state 136'
gotoTable[1406] = 136; // 'state 136'
gotoTable[1500] = 51; // 'state 51'
gotoTable.fill(136, 1501, 1505); // 'state 136'
gotoTable.fill(136, 1506, 1514); // 'state 136'
gotoTable[1534] = 136; // 'state 136'
gotoTable[1628] = 52; // 'state 52'
gotoTable.fill(136, 1629, 1633); // 'state 136'
gotoTable.fill(136, 1634, 1642); // 'state 136'
gotoTable[1662] = 136; // 'state 136'
gotoTable[1756] = 53; // 'state 53'
gotoTable.fill(136, 1757, 1761); // 'state 136'
gotoTable.fill(136, 1762, 1770); // 'state 136'
gotoTable[1790] = 136; // 'state 136'
gotoTable[1916] = 157; // 'state 157'
gotoTable[2045] = 159; // 'state 159'
gotoTable[2139] = 147; // 'state 147'
gotoTable[2164] = 33; // 'state 33'
gotoTable.fill(142, 2165, 2170); // 'state 142'
gotoTable.fill(137, 2249, 2254); // 'state 137'
gotoTable.fill(137, 2258, 2260); // 'state 137'
gotoTable.fill(137, 2262, 2264); // 'state 137'
gotoTable[2265] = 18; // 'state 18'
gotoTable[2268] = 19; // 'state 19'
gotoTable.fill(136, 2269, 2273); // 'state 136'
gotoTable.fill(136, 2274, 2282); // 'state 136'
gotoTable[2289] = 137; // 'state 137'
gotoTable[2302] = 136; // 'state 136'
gotoTable[2395] = 138; // 'state 138'
gotoTable[2520] = 150; // 'state 150'
gotoTable[2524] = 42; // 'state 42'
gotoTable.fill(136, 2525, 2529); // 'state 136'
gotoTable.fill(136, 2530, 2538); // 'state 136'
gotoTable[2558] = 136; // 'state 136'
gotoTable[2675] = 140; // 'state 140'
gotoTable[2682] = 54; // 'state 54'
gotoTable[2683] = 140; // 'state 140'
gotoTable[2686] = 140; // 'state 140'
gotoTable.fill(140, 2688, 2691); // 'state 140'
gotoTable.fill(162, 2761, 2766); // 'state 162'
gotoTable.fill(162, 2770, 2772); // 'state 162'
gotoTable.fill(162, 2773, 2776); // 'state 162'
gotoTable[2777] = 18; // 'state 18'
gotoTable[2778] = 56; // 'state 56'
gotoTable[2780] = 19; // 'state 19'
gotoTable.fill(136, 2781, 2785); // 'state 136'
gotoTable.fill(136, 2786, 2794); // 'state 136'
gotoTable[2801] = 162; // 'state 162'
gotoTable[2802] = 163; // 'state 163'
gotoTable[2814] = 136; // 'state 136'
gotoTable[2931] = 140; // 'state 140'
gotoTable[2938] = 60; // 'state 60'
gotoTable[2939] = 140; // 'state 140'
gotoTable[2942] = 140; // 'state 140'
gotoTable.fill(140, 2944, 2947); // 'state 140'
gotoTable[3059] = 140; // 'state 140'
gotoTable[3066] = 166; // 'state 166'
gotoTable[3067] = 140; // 'state 140'
gotoTable[3070] = 140; // 'state 140'
gotoTable.fill(140, 3072, 3075); // 'state 140'
gotoTable[3204] = 165; // 'state 165'
gotoTable[3316] = 58; // 'state 58'
gotoTable.fill(142, 3317, 3322); // 'state 142'
gotoTable[3444] = 169; // 'state 169'
gotoTable.fill(142, 3445, 3450); // 'state 142'
gotoTable[3572] = 170; // 'state 170'
gotoTable.fill(142, 3573, 3578); // 'state 142'
gotoTable[3656] = 63; // 'state 63'
gotoTable[3675] = 167; // 'state 167'
gotoTable[3838] = 172; // 'state 172'
gotoTable[3841] = 172; // 'state 172'
gotoTable[3844] = 165; // 'state 165'
gotoTable[3919] = 174; // 'state 174'
gotoTable[4059] = 175; // 'state 175'
gotoTable[4188] = 67; // 'state 67'
gotoTable.fill(136, 4189, 4193); // 'state 136'
gotoTable.fill(136, 4194, 4202); // 'state 136'
gotoTable[4222] = 136; // 'state 136'
gotoTable[4296] = 68; // 'state 68'
gotoTable[4315] = 176; // 'state 176'
gotoTable[4444] = 49; // 'state 49'
gotoTable.fill(136, 4445, 4449); // 'state 136'
gotoTable.fill(136, 4450, 4457); // 'state 136'
gotoTable[4457] = 180; // 'state 180'
gotoTable[4478] = 136; // 'state 136'
gotoTable[4577] = 178; // 'state 178'
gotoTable[4614] = 73; // 'state 73'
gotoTable[4700] = 70; // 'state 70'
gotoTable.fill(136, 4701, 4705); // 'state 136'
gotoTable.fill(136, 4706, 4714); // 'state 136'
gotoTable[4734] = 136; // 'state 136'
gotoTable[4870] = 177; // 'state 177'
gotoTable[4956] = 75; // 'state 75'
gotoTable.fill(136, 4957, 4961); // 'state 136'
gotoTable.fill(136, 4962, 4970); // 'state 136'
gotoTable[4990] = 136; // 'state 136'
gotoTable[5084] = 76; // 'state 76'
gotoTable.fill(136, 5085, 5089); // 'state 136'
gotoTable.fill(136, 5090, 5098); // 'state 136'
gotoTable[5118] = 136; // 'state 136'
gotoTable[5212] = 77; // 'state 77'
gotoTable.fill(136, 5213, 5217); // 'state 136'
gotoTable.fill(136, 5218, 5226); // 'state 136'
gotoTable[5246] = 136; // 'state 136'
gotoTable[5340] = 78; // 'state 78'
gotoTable.fill(136, 5341, 5345); // 'state 136'
gotoTable.fill(136, 5346, 5354); // 'state 136'
gotoTable[5374] = 136; // 'state 136'
gotoTable[5468] = 42; // 'state 42'
gotoTable.fill(136, 5469, 5473); // 'state 136'
gotoTable.fill(136, 5474, 5482); // 'state 136'
gotoTable[5502] = 136; // 'state 136'
gotoTable[5637] = 182; // 'state 182'
gotoTable[5741] = 178; // 'state 178'
gotoTable[5869] = 178; // 'state 178'
gotoTable[5998] = 184; // 'state 184'
gotoTable[6124] = 178; // 'state 178'
gotoTable[6255] = 185; // 'state 185'
gotoTable[6364] = 42; // 'state 42'
gotoTable.fill(136, 6365, 6369); // 'state 136'
gotoTable.fill(136, 6370, 6378); // 'state 136'
gotoTable[6398] = 136; // 'state 136'
gotoTable[6492] = 42; // 'state 42'
gotoTable.fill(136, 6493, 6497); // 'state 136'
gotoTable.fill(136, 6498, 6506); // 'state 136'
gotoTable[6526] = 136; // 'state 136'
gotoTable[6620] = 42; // 'state 42'
gotoTable.fill(136, 6621, 6625); // 'state 136'
gotoTable.fill(136, 6626, 6634); // 'state 136'
gotoTable[6654] = 136; // 'state 136'
gotoTable[6748] = 42; // 'state 42'
gotoTable.fill(136, 6749, 6753); // 'state 136'
gotoTable.fill(136, 6754, 6762); // 'state 136'
gotoTable[6782] = 136; // 'state 136'
gotoTable[6876] = 42; // 'state 42'
gotoTable.fill(136, 6877, 6881); // 'state 136'
gotoTable.fill(136, 6882, 6890); // 'state 136'
gotoTable[6910] = 136; // 'state 136'
gotoTable[7024] = 84; // 'state 84'
gotoTable[7027] = 191; // 'state 191'
gotoTable[7034] = 192; // 'state 192'
gotoTable[7035] = 140; // 'state 140'
gotoTable[7038] = 140; // 'state 140'
gotoTable.fill(140, 7040, 7043); // 'state 140'
gotoTable[7124] = 88; // 'state 88'
gotoTable[7131] = 147; // 'state 147'
gotoTable[7155] = 140; // 'state 140'
gotoTable[7156] = 33; // 'state 33'
gotoTable.fill(142, 7157, 7162); // 'state 142'
gotoTable[7162] = 198; // 'state 198'
gotoTable[7163] = 140; // 'state 140'
gotoTable[7166] = 140; // 'state 140'
gotoTable.fill(140, 7168, 7171); // 'state 140'
gotoTable.fill(194, 7241, 7246); // 'state 194'
gotoTable.fill(194, 7250, 7252); // 'state 194'
gotoTable.fill(194, 7253, 7256); // 'state 194'
gotoTable[7257] = 18; // 'state 18'
gotoTable[7260] = 19; // 'state 19'
gotoTable.fill(136, 7261, 7265); // 'state 136'
gotoTable.fill(136, 7266, 7274); // 'state 136'
gotoTable[7281] = 194; // 'state 194'
gotoTable[7282] = 195; // 'state 195'
gotoTable[7294] = 136; // 'state 136'
gotoTable[7411] = 140; // 'state 140'
gotoTable[7418] = 201; // 'state 201'
gotoTable[7419] = 140; // 'state 140'
gotoTable[7422] = 140; // 'state 140'
gotoTable.fill(140, 7424, 7427); // 'state 140'
gotoTable[7496] = 200; // 'state 200'
gotoTable[7658] = 89; // 'state 89'
gotoTable[7667] = 140; // 'state 140'
gotoTable[7674] = 203; // 'state 203'
gotoTable[7675] = 140; // 'state 140'
gotoTable[7678] = 140; // 'state 140'
gotoTable.fill(140, 7680, 7683); // 'state 140'
gotoTable[7807] = 205; // 'state 205'
gotoTable[7924] = 208; // 'state 208'
gotoTable.fill(142, 7925, 7930); // 'state 142'
gotoTable[8052] = 209; // 'state 209'
gotoTable.fill(142, 8053, 8058); // 'state 142'
gotoTable[8155] = 207; // 'state 207'
gotoTable[8284] = 93; // 'state 93'
gotoTable.fill(136, 8285, 8289); // 'state 136'
gotoTable.fill(136, 8290, 8298); // 'state 136'
gotoTable[8318] = 136; // 'state 136'
gotoTable[8452] = 165; // 'state 165'
gotoTable[8526] = 95; // 'state 95'
gotoTable[8529] = 213; // 'state 213'
gotoTable[8668] = 42; // 'state 42'
gotoTable.fill(136, 8669, 8673); // 'state 136'
gotoTable.fill(136, 8674, 8682); // 'state 136'
gotoTable[8702] = 136; // 'state 136'
gotoTable[8795] = 214; // 'state 214'
gotoTable[8924] = 97; // 'state 97'
gotoTable.fill(136, 8925, 8929); // 'state 136'
gotoTable.fill(136, 8930, 8938); // 'state 136'
gotoTable[8958] = 136; // 'state 136'
gotoTable[9052] = 42; // 'state 42'
gotoTable.fill(136, 9053, 9057); // 'state 136'
gotoTable.fill(136, 9058, 9066); // 'state 136'
gotoTable[9086] = 136; // 'state 136'
gotoTable[9197] = 215; // 'state 215'
gotoTable[9325] = 215; // 'state 215'
gotoTable[9452] = 215; // 'state 215'
gotoTable[9583] = 216; // 'state 216'
gotoTable[9692] = 42; // 'state 42'
gotoTable.fill(136, 9693, 9697); // 'state 136'
gotoTable.fill(136, 9698, 9706); // 'state 136'
gotoTable[9726] = 136; // 'state 136'
gotoTable[9820] = 42; // 'state 42'
gotoTable.fill(136, 9821, 9825); // 'state 136'
gotoTable.fill(136, 9826, 9834); // 'state 136'
gotoTable[9854] = 136; // 'state 136'
gotoTable[9948] = 42; // 'state 42'
gotoTable.fill(136, 9949, 9953); // 'state 136'
gotoTable.fill(136, 9954, 9962); // 'state 136'
gotoTable[9982] = 136; // 'state 136'
gotoTable[10076] = 42; // 'state 42'
gotoTable.fill(136, 10077, 10081); // 'state 136'
gotoTable.fill(136, 10082, 10090); // 'state 136'
gotoTable[10110] = 136; // 'state 136'
gotoTable[10204] = 99; // 'state 99'
gotoTable.fill(136, 10205, 10209); // 'state 136'
gotoTable.fill(136, 10210, 10218); // 'state 136'
gotoTable[10238] = 136; // 'state 136'
gotoTable[10332] = 102; // 'state 102'
gotoTable.fill(136, 10333, 10337); // 'state 136'
gotoTable.fill(136, 10338, 10346); // 'state 136'
gotoTable[10346] = 103; // 'state 103'
gotoTable[10355] = 140; // 'state 140'
gotoTable[10362] = 203; // 'state 203'
gotoTable[10363] = 140; // 'state 140'
gotoTable[10366] = 222; // 'state 222'
gotoTable.fill(140, 10368, 10371); // 'state 140'
gotoTable[10460] = 104; // 'state 104'
gotoTable.fill(136, 10461, 10465); // 'state 136'
gotoTable.fill(136, 10466, 10474); // 'state 136'
gotoTable[10474] = 105; // 'state 105'
gotoTable[10483] = 140; // 'state 140'
gotoTable[10490] = 203; // 'state 203'
gotoTable[10491] = 140; // 'state 140'
gotoTable[10494] = 222; // 'state 222'
gotoTable.fill(140, 10496, 10499); // 'state 140'
gotoTable[10611] = 140; // 'state 140'
gotoTable[10618] = 224; // 'state 224'
gotoTable[10619] = 140; // 'state 140'
gotoTable[10622] = 140; // 'state 140'
gotoTable.fill(140, 10624, 10627); // 'state 140'
gotoTable[10739] = 140; // 'state 140'
gotoTable[10746] = 227; // 'state 227'
gotoTable[10747] = 140; // 'state 140'
gotoTable[10750] = 140; // 'state 140'
gotoTable.fill(140, 10752, 10755); // 'state 140'
gotoTable[10867] = 226; // 'state 226'
gotoTable[10874] = 227; // 'state 227'
gotoTable[10875] = 140; // 'state 140'
gotoTable[10878] = 140; // 'state 140'
gotoTable.fill(140, 10880, 10883); // 'state 140'
gotoTable[10995] = 140; // 'state 140'
gotoTable[11002] = 107; // 'state 107'
gotoTable[11003] = 140; // 'state 140'
gotoTable[11006] = 140; // 'state 140'
gotoTable.fill(140, 11008, 11011); // 'state 140'
gotoTable[11123] = 140; // 'state 140'
gotoTable[11124] = 169; // 'state 169'
gotoTable.fill(142, 11125, 11130); // 'state 142'
gotoTable[11130] = 166; // 'state 166'
gotoTable[11131] = 140; // 'state 140'
gotoTable[11134] = 140; // 'state 140'
gotoTable.fill(140, 11136, 11139); // 'state 140'
gotoTable[11268] = 165; // 'state 165'
gotoTable[11379] = 140; // 'state 140'
gotoTable[11386] = 231; // 'state 231'
gotoTable[11387] = 140; // 'state 140'
gotoTable[11390] = 140; // 'state 140'
gotoTable.fill(140, 11392, 11395); // 'state 140'
gotoTable[11507] = 140; // 'state 140'
gotoTable[11514] = 234; // 'state 234'
gotoTable[11515] = 140; // 'state 140'
gotoTable[11518] = 140; // 'state 140'
gotoTable.fill(140, 11520, 11523); // 'state 140'
gotoTable[11523] = 235; // 'state 235'
gotoTable[11635] = 140; // 'state 140'
gotoTable[11642] = 237; // 'state 237'
gotoTable[11643] = 140; // 'state 140'
gotoTable[11646] = 140; // 'state 140'
gotoTable.fill(140, 11648, 11651); // 'state 140'
gotoTable[11764] = 238; // 'state 238'
gotoTable.fill(142, 11765, 11770); // 'state 142'
gotoTable[11882] = 111; // 'state 111'
gotoTable[11891] = 140; // 'state 140'
gotoTable[11898] = 203; // 'state 203'
gotoTable[11899] = 140; // 'state 140'
gotoTable[11902] = 140; // 'state 140'
gotoTable.fill(140, 11904, 11907); // 'state 140'
gotoTable[11996] = 42; // 'state 42'
gotoTable.fill(136, 11997, 12001); // 'state 136'
gotoTable.fill(136, 12002, 12010); // 'state 136'
gotoTable[12030] = 136; // 'state 136'
gotoTable[12112] = 112; // 'state 112'
gotoTable[12123] = 243; // 'state 243'
gotoTable[12241] = 241; // 'state 241'
gotoTable[12379] = 245; // 'state 245'
gotoTable[12508] = 42; // 'state 42'
gotoTable.fill(136, 12509, 12513); // 'state 136'
gotoTable.fill(136, 12514, 12522); // 'state 136'
gotoTable[12542] = 136; // 'state 136'
gotoTable[12659] = 140; // 'state 140'
gotoTable[12666] = 246; // 'state 246'
gotoTable[12667] = 140; // 'state 140'
gotoTable[12670] = 140; // 'state 140'
gotoTable.fill(140, 12672, 12675); // 'state 140'
gotoTable[12760] = 248; // 'state 248'
gotoTable[12764] = 42; // 'state 42'
gotoTable.fill(136, 12765, 12769); // 'state 136'
gotoTable.fill(136, 12770, 12778); // 'state 136'
gotoTable[12798] = 136; // 'state 136'
gotoTable[12892] = 49; // 'state 49'
gotoTable.fill(136, 12893, 12897); // 'state 136'
gotoTable.fill(136, 12898, 12905); // 'state 136'
gotoTable[12905] = 154; // 'state 154'
gotoTable[12915] = 140; // 'state 140'
gotoTable[12922] = 60; // 'state 60'
gotoTable[12923] = 140; // 'state 140'
gotoTable[12926] = 252; // 'state 252'
gotoTable.fill(140, 12928, 12931); // 'state 140'
gotoTable[13060] = 165; // 'state 165'
gotoTable[13148] = 42; // 'state 42'
gotoTable.fill(136, 13149, 13153); // 'state 136'
gotoTable.fill(136, 13154, 13162); // 'state 136'
gotoTable[13163] = 251; // 'state 251'
gotoTable[13182] = 136; // 'state 136'
gotoTable[13291] = 251; // 'state 251'
gotoTable[13299] = 140; // 'state 140'
gotoTable[13306] = 234; // 'state 234'
gotoTable[13307] = 140; // 'state 140'
gotoTable[13310] = 140; // 'state 140'
gotoTable.fill(140, 13312, 13315); // 'state 140'
gotoTable[13404] = 42; // 'state 42'
gotoTable.fill(136, 13405, 13409); // 'state 136'
gotoTable.fill(136, 13410, 13418); // 'state 136'
gotoTable[13419] = 254; // 'state 254'
gotoTable[13438] = 136; // 'state 136'
gotoTable[13547] = 254; // 'state 254'
gotoTable[13555] = 140; // 'state 140'
gotoTable[13562] = 234; // 'state 234'
gotoTable[13563] = 140; // 'state 140'
gotoTable[13566] = 140; // 'state 140'
gotoTable.fill(140, 13568, 13571); // 'state 140'
gotoTable[13683] = 140; // 'state 140'
gotoTable[13690] = 257; // 'state 257'
gotoTable[13691] = 140; // 'state 140'
gotoTable[13694] = 140; // 'state 140'
gotoTable.fill(140, 13696, 13699); // 'state 140'
gotoTable[13808] = 116; // 'state 116'
gotoTable[13811] = 258; // 'state 258'
gotoTable[13818] = 192; // 'state 192'
gotoTable[13819] = 140; // 'state 140'
gotoTable[13822] = 140; // 'state 140'
gotoTable.fill(140, 13824, 13827); // 'state 140'
gotoTable[13956] = 165; // 'state 165'
gotoTable[14058] = 118; // 'state 118'
gotoTable[14067] = 140; // 'state 140'
gotoTable[14074] = 203; // 'state 203'
gotoTable[14075] = 140; // 'state 140'
gotoTable[14078] = 140; // 'state 140'
gotoTable.fill(140, 14080, 14083); // 'state 140'
gotoTable[14195] = 140; // 'state 140'
gotoTable[14202] = 260; // 'state 260'
gotoTable[14203] = 140; // 'state 140'
gotoTable[14206] = 140; // 'state 140'
gotoTable.fill(140, 14208, 14211); // 'state 140'
gotoTable[14323] = 140; // 'state 140'
gotoTable[14330] = 234; // 'state 234'
gotoTable[14331] = 140; // 'state 140'
gotoTable[14334] = 140; // 'state 140'
gotoTable.fill(140, 14336, 14339); // 'state 140'
gotoTable[14427] = 263; // 'state 263'
gotoTable[14556] = 120; // 'state 120'
gotoTable.fill(136, 14557, 14561); // 'state 136'
gotoTable.fill(136, 14562, 14570); // 'state 136'
gotoTable[14590] = 136; // 'state 136'
gotoTable[14684] = 122; // 'state 122'
gotoTable.fill(136, 14685, 14689); // 'state 136'
gotoTable.fill(136, 14690, 14698); // 'state 136'
gotoTable[14698] = 123; // 'state 123'
gotoTable[14707] = 140; // 'state 140'
gotoTable[14714] = 203; // 'state 203'
gotoTable[14715] = 140; // 'state 140'
gotoTable[14718] = 222; // 'state 222'
gotoTable.fill(140, 14720, 14723); // 'state 140'
gotoTable[14852] = 165; // 'state 165'
gotoTable[14963] = 269; // 'state 269'
gotoTable[14970] = 227; // 'state 227'
gotoTable[14971] = 140; // 'state 140'
gotoTable[14974] = 140; // 'state 140'
gotoTable.fill(140, 14976, 14979); // 'state 140'
gotoTable[15082] = 124; // 'state 124'
gotoTable[15091] = 140; // 'state 140'
gotoTable[15098] = 203; // 'state 203'
gotoTable[15099] = 140; // 'state 140'
gotoTable[15102] = 140; // 'state 140'
gotoTable.fill(140, 15104, 15107); // 'state 140'
gotoTable[15219] = 140; // 'state 140'
gotoTable[15226] = 234; // 'state 234'
gotoTable[15227] = 140; // 'state 140'
gotoTable[15230] = 140; // 'state 140'
gotoTable.fill(140, 15232, 15235); // 'state 140'
gotoTable[15324] = 125; // 'state 125'
gotoTable.fill(136, 15325, 15329); // 'state 136'
gotoTable.fill(136, 15330, 15338); // 'state 136'
gotoTable[15358] = 136; // 'state 136'
gotoTable[15452] = 42; // 'state 42'
gotoTable.fill(136, 15453, 15457); // 'state 136'
gotoTable.fill(136, 15458, 15466); // 'state 136'
gotoTable[15486] = 136; // 'state 136'
gotoTable[15580] = 126; // 'state 126'
gotoTable.fill(136, 15581, 15585); // 'state 136'
gotoTable.fill(136, 15586, 15594); // 'state 136'
gotoTable[15594] = 127; // 'state 127'
gotoTable[15603] = 140; // 'state 140'
gotoTable[15610] = 203; // 'state 203'
gotoTable[15611] = 140; // 'state 140'
gotoTable[15614] = 222; // 'state 222'
gotoTable.fill(140, 15616, 15619); // 'state 140'
gotoTable[15708] = 42; // 'state 42'
gotoTable.fill(136, 15709, 15713); // 'state 136'
gotoTable.fill(136, 15714, 15722); // 'state 136'
gotoTable[15742] = 136; // 'state 136'
gotoTable[15859] = 140; // 'state 140'
gotoTable[15866] = 234; // 'state 234'
gotoTable[15867] = 140; // 'state 140'
gotoTable[15870] = 140; // 'state 140'
gotoTable.fill(140, 15872, 15875); // 'state 140'
gotoTable[15987] = 140; // 'state 140'
gotoTable[15994] = 234; // 'state 234'
gotoTable[15995] = 140; // 'state 140'
gotoTable[15998] = 140; // 'state 140'
gotoTable.fill(140, 16000, 16003); // 'state 140'
gotoTable[16092] = 42; // 'state 42'
gotoTable.fill(136, 16093, 16097); // 'state 136'
gotoTable.fill(136, 16098, 16106); // 'state 136'
gotoTable[16126] = 136; // 'state 136'
gotoTable[16220] = 42; // 'state 42'
gotoTable.fill(136, 16221, 16225); // 'state 136'
gotoTable.fill(136, 16226, 16234); // 'state 136'
gotoTable[16254] = 136; // 'state 136'
gotoTable[16371] = 140; // 'state 140'
gotoTable[16378] = 234; // 'state 234'
gotoTable[16379] = 140; // 'state 140'
gotoTable[16382] = 140; // 'state 140'
gotoTable.fill(140, 16384, 16387); // 'state 140'
gotoTable[16475] = 272; // 'state 272'

const wordFallbackTable = new Uint8Array(80);
wordFallbackTable.fill(1, 1, 3); // from..to
wordFallbackTable.fill(1, 20, 28); // has..nth-last-child
wordFallbackTable.fill(1, 41, 44); // even..of
wordFallbackTable.fill(1, 45, 49); // and..selector

const LexerMode = {
  INITIAL: 0,
  IMM_STRING_VALUE_0: 1,
  IMM_STRING_VALUE_1: 2,
};

const lexerModeNames = {
  initial: 0,
  imm_string_value_0: 1,
  imm_string_value_1: 2,
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
    while (q >= 2 && (tree[q] >>> 8 > 0 || (tree[q] & 0xff) > 69)) {
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
  for (let t = 0; t <= 69; t++) {
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
          tree[tp] = 68;
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
        tree[tp] = 68;
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
          actions[(currentState << 7) + 58] !== 0xffff
        ) {
          lookahead = 58;
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
              tree[tp] = 68;
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
            tree[tp] = 68;
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
            actions[(currentState << 7) + 58] !== 0xffff
          ) {
            lookahead = 58;
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

export {
  parse,
  CstNode,
  TreeCursor,
  LineIndex,
  SymbolNames,
  SymbolIds,
  reemitLossless,
};
