// @ts-nocheck

import { next as nextTokenInitial } from "./lexer-initial.js";

/*
      program := _statement;
program := program _statement;
_statement := _declaration;
_statement := statement_block;
_statement := if_statement;
_statement := while_statement;
_statement := do_statement;
_statement := for_statement;
_statement := for_in_statement;
_statement := return_statement;
_statement := throw_statement;
_statement := try_statement;
_statement := switch_statement;
_statement := break_statement;
_statement := continue_statement;
_statement := expression_statement;
_statement_block_repeat1 := _statement;
_statement_block_repeat1 := _statement_block_repeat1 _statement;
statement_block := { _statement_block_repeat1 };
statement_block := { };
if_statement := if ( _expression ) _statement;
if_statement := if ( _expression ) _statement else _statement;
while_statement := while ( _expression ) _statement;
do_statement := do _statement while ( _expression ) ;;
do_statement := do _statement while ( _expression );
for_statement := for ( variable_declaration _expression ; _expression ) _statement;
for_statement := for ( variable_declaration _expression ; ) _statement;
for_statement := for ( variable_declaration ; _expression ) _statement;
for_statement := for ( variable_declaration ; ) _statement;
for_statement := for ( _expression ; _expression ; _expression ) _statement;
for_statement := for ( _expression ; _expression ; ) _statement;
for_statement := for ( _expression ; ; _expression ) _statement;
for_statement := for ( _expression ; ; ) _statement;
for_statement := for ( ; _expression ; _expression ) _statement;
for_statement := for ( ; _expression ; ) _statement;
for_statement := for ( ; ; _expression ) _statement;
for_statement := for ( ; ; ) _statement;
for_in_statement := for ( const _binding_pattern of _expression ) _statement;
for_in_statement := for ( const _binding_pattern in _expression ) _statement;
for_in_statement := for ( let _binding_pattern of _expression ) _statement;
for_in_statement := for ( let _binding_pattern in _expression ) _statement;
for_in_statement := for ( var _binding_pattern of _expression ) _statement;
for_in_statement := for ( var _binding_pattern in _expression ) _statement;
return_statement := return _expression ;;
return_statement := return _expression;
return_statement := return ;;
return_statement := return;
throw_statement := throw _expression ;;
throw_statement := throw _expression;
try_statement := try statement_block catch_clause finally_clause;
try_statement := try statement_block catch_clause;
try_statement := try statement_block finally_clause;
try_statement := try statement_block;
catch_clause := catch ( _binding_pattern type_annotation ) statement_block;
catch_clause := catch ( _binding_pattern ) statement_block;
catch_clause := catch statement_block;
finally_clause := finally statement_block;
switch_statement := switch ( _expression ) switch_body;
_switch_body_repeat2 := switch_case;
_switch_body_repeat2 := _switch_body_repeat2 switch_case;
_switch_body_repeat2 := switch_default;
_switch_body_repeat2 := _switch_body_repeat2 switch_default;
switch_body := { _switch_body_repeat2 };
switch_body := { };
switch_case := case _expression : _statement_block_repeat1;
switch_case := case _expression :;
switch_default := default : _statement_block_repeat1;
switch_default := default :;
break_statement := break identifier ;;
break_statement := break identifier;
break_statement := break ;;
break_statement := break;
continue_statement := continue identifier ;;
continue_statement := continue identifier;
continue_statement := continue ;;
continue_statement := continue;
expression_statement := _expression ;;
expression_statement := _expression;
_declaration := import_statement;
_declaration := export_statement;
_declaration := variable_declaration;
_declaration := function_declaration;
_declaration := class_declaration;
_declaration := interface_declaration;
_declaration := type_alias_declaration;
import_statement := import import_clause from string ;;
import_statement := import import_clause from string;
import_statement := import string ;;
import_statement := import string;
import_clause := identifier;
import_clause := named_imports;
import_clause := namespace_import;
import_clause := identifier , named_imports;
import_clause := identifier , namespace_import;
namespace_import := * as identifier;
_named_imports_repeat3 := , import_specifier;
_named_imports_repeat3 := _named_imports_repeat3 , import_specifier;
named_imports := { import_specifier _named_imports_repeat3 , };
named_imports := { import_specifier _named_imports_repeat3 };
named_imports := { import_specifier , };
named_imports := { import_specifier };
named_imports := { };
import_specifier := type identifier as identifier;
import_specifier := type identifier;
import_specifier := identifier as identifier;
import_specifier := identifier;
export_statement := export declare _declaration;
export_statement := export _declaration;
export_statement := export default _expression ;;
export_statement := export default _expression;
export_statement := export default function_declaration ;;
export_statement := export default function_declaration;
export_statement := export default class_declaration ;;
export_statement := export default class_declaration;
export_statement := export named_imports from string ;;
export_statement := export named_imports from string;
export_statement := export named_imports ;;
export_statement := export named_imports;
export_statement := export * as identifier from string ;;
export_statement := export * as identifier from string;
export_statement := export * from string ;;
export_statement := export * from string;
_variable_declaration_repeat4 := , variable_declarator;
_variable_declaration_repeat4 := _variable_declaration_repeat4 , variable_declarator;
variable_declaration := const variable_declarator _variable_declaration_repeat4 ;;
variable_declaration := const variable_declarator _variable_declaration_repeat4;
variable_declaration := const variable_declarator ;;
variable_declaration := const variable_declarator;
variable_declaration := let variable_declarator _variable_declaration_repeat4 ;;
variable_declaration := let variable_declarator _variable_declaration_repeat4;
variable_declaration := let variable_declarator ;;
variable_declaration := let variable_declarator;
variable_declaration := var variable_declarator _variable_declaration_repeat4 ;;
variable_declaration := var variable_declarator _variable_declaration_repeat4;
variable_declaration := var variable_declarator ;;
variable_declaration := var variable_declarator;
variable_declarator := _binding_pattern type_annotation = _expression;
variable_declarator := _binding_pattern type_annotation;
variable_declarator := _binding_pattern = _expression;
variable_declarator := _binding_pattern;
_binding_pattern := identifier;
_binding_pattern := object_pattern;
_binding_pattern := array_pattern;
_object_pattern_repeat5 := , object_pattern_property;
_object_pattern_repeat5 := _object_pattern_repeat5 , object_pattern_property;
object_pattern := { object_pattern_property _object_pattern_repeat5 , };
object_pattern := { object_pattern_property _object_pattern_repeat5 };
object_pattern := { object_pattern_property , };
object_pattern := { object_pattern_property };
object_pattern := { };
object_pattern_property := identifier = _expression;
object_pattern_property := identifier;
object_pattern_property := _property_name : _binding_pattern = _expression;
object_pattern_property := _property_name : _binding_pattern;
object_pattern_property := ... _binding_pattern;
_array_pattern_repeat6 := , array_pattern_element;
_array_pattern_repeat6 := _array_pattern_repeat6 , array_pattern_element;
_array_pattern_repeat6 := ,;
_array_pattern_repeat6 := _array_pattern_repeat6 ,;
array_pattern := [ , array_pattern_element _array_pattern_repeat6 ];
array_pattern := [ , array_pattern_element ];
array_pattern := [ array_pattern_element _array_pattern_repeat6 ];
array_pattern := [ array_pattern_element ];
array_pattern := [ ];
array_pattern_element := _binding_pattern = _expression;
array_pattern_element := _binding_pattern;
array_pattern_element := ... _binding_pattern;
function_declaration := async function identifier type_parameters formal_parameters type_annotation statement_block;
function_declaration := async function identifier type_parameters formal_parameters type_annotation ;;
function_declaration := async function identifier type_parameters formal_parameters statement_block;
function_declaration := async function identifier type_parameters formal_parameters ;;
function_declaration := async function identifier formal_parameters type_annotation statement_block;
function_declaration := async function identifier formal_parameters type_annotation ;;
function_declaration := async function identifier formal_parameters statement_block;
function_declaration := async function identifier formal_parameters ;;
function_declaration := function identifier type_parameters formal_parameters type_annotation statement_block;
function_declaration := function identifier type_parameters formal_parameters type_annotation ;;
function_declaration := function identifier type_parameters formal_parameters statement_block;
function_declaration := function identifier type_parameters formal_parameters ;;
function_declaration := function identifier formal_parameters type_annotation statement_block;
function_declaration := function identifier formal_parameters type_annotation ;;
function_declaration := function identifier formal_parameters statement_block;
function_declaration := function identifier formal_parameters ;;
_formal_parameters_repeat7 := , formal_parameter;
_formal_parameters_repeat7 := _formal_parameters_repeat7 , formal_parameter;
formal_parameters := ( formal_parameter _formal_parameters_repeat7 , );
formal_parameters := ( formal_parameter _formal_parameters_repeat7 );
formal_parameters := ( formal_parameter , );
formal_parameters := ( formal_parameter );
formal_parameters := ( );
formal_parameter := member_modifiers _binding_pattern type_annotation = _expression;
formal_parameter := member_modifiers _binding_pattern type_annotation;
formal_parameter := member_modifiers _binding_pattern = _expression;
formal_parameter := member_modifiers _binding_pattern;
formal_parameter := _binding_pattern type_annotation = _expression;
formal_parameter := _binding_pattern type_annotation;
formal_parameter := _binding_pattern = _expression;
formal_parameter := _binding_pattern;
formal_parameter := ... _binding_pattern type_annotation;
formal_parameter := ... _binding_pattern;
_typed_parameters_repeat8 := , typed_parameter;
_typed_parameters_repeat8 := _typed_parameters_repeat8 , typed_parameter;
_typed_parameters_repeat8 := , argument;
_typed_parameters_repeat8 := _typed_parameters_repeat8 , argument;
typed_parameters := ( typed_parameter _typed_parameters_repeat8 , );
typed_parameters := ( typed_parameter _typed_parameters_repeat8 );
typed_parameters := ( typed_parameter , );
typed_parameters := ( typed_parameter );
typed_parameter := ... identifier type_annotation = _expression;
typed_parameter := ... identifier type_annotation;
typed_parameter := ... object type_annotation = _expression;
typed_parameter := ... object type_annotation;
typed_parameter := ... array type_annotation = _expression;
typed_parameter := ... array type_annotation;
typed_parameter := identifier type_annotation = _expression;
typed_parameter := identifier type_annotation;
typed_parameter := object type_annotation = _expression;
typed_parameter := object type_annotation;
typed_parameter := array type_annotation = _expression;
typed_parameter := array type_annotation;
member_modifiers := accessibility_modifier;
member_modifiers := member_modifiers accessibility_modifier;
member_modifiers := static;
member_modifiers := member_modifiers static;
member_modifiers := async;
member_modifiers := member_modifiers async;
member_modifiers := readonly;
member_modifiers := member_modifiers readonly;
member_modifiers := get;
member_modifiers := member_modifiers get;
member_modifiers := set;
member_modifiers := member_modifiers set;
class_declaration := class identifier type_parameters class_heritage class_body;
class_declaration := class identifier type_parameters class_body;
class_declaration := class identifier class_heritage class_body;
class_declaration := class identifier class_body;
class_heritage := extends _expression implements_clause;
class_heritage := extends _expression;
class_heritage := implements_clause;
_implements_clause_repeat9 := , _type;
_implements_clause_repeat9 := _implements_clause_repeat9 , _type;
implements_clause := implements _type _implements_clause_repeat9;
implements_clause := implements _type;
_class_body_repeat10 := method_definition;
_class_body_repeat10 := _class_body_repeat10 method_definition;
_class_body_repeat10 := field_definition;
_class_body_repeat10 := _class_body_repeat10 field_definition;
_class_body_repeat10 := ;;
_class_body_repeat10 := _class_body_repeat10 ;;
class_body := { _class_body_repeat10 };
class_body := { };
method_definition := member_modifiers _property_name type_parameters formal_parameters type_annotation statement_block;
method_definition := member_modifiers _property_name type_parameters formal_parameters statement_block;
method_definition := member_modifiers _property_name formal_parameters type_annotation statement_block;
method_definition := member_modifiers _property_name formal_parameters statement_block;
method_definition := member_modifiers private_property_identifier type_parameters formal_parameters type_annotation statement_block;
method_definition := member_modifiers private_property_identifier type_parameters formal_parameters statement_block;
method_definition := member_modifiers private_property_identifier formal_parameters type_annotation statement_block;
method_definition := member_modifiers private_property_identifier formal_parameters statement_block;
method_definition := _property_name type_parameters formal_parameters type_annotation statement_block;
method_definition := _property_name type_parameters formal_parameters statement_block;
method_definition := _property_name formal_parameters type_annotation statement_block;
method_definition := _property_name formal_parameters statement_block;
method_definition := private_property_identifier type_parameters formal_parameters type_annotation statement_block;
method_definition := private_property_identifier type_parameters formal_parameters statement_block;
method_definition := private_property_identifier formal_parameters type_annotation statement_block;
method_definition := private_property_identifier formal_parameters statement_block;
field_definition := member_modifiers _property_name type_annotation = _expression ;;
field_definition := member_modifiers _property_name type_annotation = _expression;
field_definition := member_modifiers _property_name type_annotation ;;
field_definition := member_modifiers _property_name type_annotation;
field_definition := member_modifiers _property_name = _expression ;;
field_definition := member_modifiers _property_name = _expression;
field_definition := member_modifiers _property_name ;;
field_definition := member_modifiers _property_name;
field_definition := member_modifiers private_property_identifier type_annotation = _expression ;;
field_definition := member_modifiers private_property_identifier type_annotation = _expression;
field_definition := member_modifiers private_property_identifier type_annotation ;;
field_definition := member_modifiers private_property_identifier type_annotation;
field_definition := member_modifiers private_property_identifier = _expression ;;
field_definition := member_modifiers private_property_identifier = _expression;
field_definition := member_modifiers private_property_identifier ;;
field_definition := member_modifiers private_property_identifier;
field_definition := _property_name type_annotation = _expression ;;
field_definition := _property_name type_annotation = _expression;
field_definition := _property_name type_annotation ;;
field_definition := _property_name type_annotation;
field_definition := _property_name = _expression ;;
field_definition := _property_name = _expression;
field_definition := _property_name ;;
field_definition := _property_name;
field_definition := private_property_identifier type_annotation = _expression ;;
field_definition := private_property_identifier type_annotation = _expression;
field_definition := private_property_identifier type_annotation ;;
field_definition := private_property_identifier type_annotation;
field_definition := private_property_identifier = _expression ;;
field_definition := private_property_identifier = _expression;
field_definition := private_property_identifier ;;
field_definition := private_property_identifier;
interface_declaration := interface identifier type_parameters extends_type_clause object_type;
interface_declaration := interface identifier type_parameters object_type;
interface_declaration := interface identifier extends_type_clause object_type;
interface_declaration := interface identifier object_type;
extends_type_clause := extends _type _implements_clause_repeat9;
extends_type_clause := extends _type;
type_alias_declaration := type identifier type_parameters = _type ;;
type_alias_declaration := type identifier type_parameters = _type;
type_alias_declaration := type identifier = _type ;;
type_alias_declaration := type identifier = _type;
type_annotation := : _type;
type_annotation := ?: _type;
_type_parameters_repeat11 := , type_parameter;
_type_parameters_repeat11 := _type_parameters_repeat11 , type_parameter;
type_parameters := < type_parameter _type_parameters_repeat11 , >;
type_parameters := < type_parameter _type_parameters_repeat11 >;
type_parameters := < type_parameter , >;
type_parameters := < type_parameter >;
type_parameter := identifier extends _type = _type;
type_parameter := identifier extends _type;
type_parameter := identifier = _type;
type_parameter := identifier;
type_arguments := < _type _implements_clause_repeat9 , >;
type_arguments := < _type _implements_clause_repeat9 >;
type_arguments := < _type , >;
type_arguments := < _type >;
_type := union_type;
_type := intersection_type;
_type := function_type;
_type := _primary_type;
union_type := _type | _type;
union_type := | _type;
intersection_type := _type & _type;
function_type := type_parameters ( ) => _type;
function_type := ( ) => _type;
function_type := type_parameters typed_parameters => _type;
function_type := typed_parameters => _type;
function_type := type_parameters formal_parameters => _type;
function_type := parenthesized_type => _type;
_primary_type := identifier;
_primary_type := generic_type;
_primary_type := array_type;
_primary_type := indexed_access_type;
_primary_type := tuple_type;
_primary_type := object_type;
_primary_type := typeof_type;
_primary_type := type_predicate;
_primary_type := parenthesized_type;
_primary_type := string;
_primary_type := number;
_primary_type := true;
_primary_type := false;
_primary_type := null;
_primary_type := void;
generic_type := identifier type_arguments;
array_type := _primary_type [ ];
indexed_access_type := _primary_type [ _type ];
tuple_type := [ _type _implements_clause_repeat9 , ];
tuple_type := [ _type _implements_clause_repeat9 ];
tuple_type := [ _type , ];
tuple_type := [ _type ];
tuple_type := [ ];
parenthesized_type := ( _type );
typeof_type := typeof identifier;
type_predicate := identifier is _type;
_object_type_repeat12 := property_signature ;;
_object_type_repeat12 := _object_type_repeat12 property_signature ;;
_object_type_repeat12 := property_signature ,;
_object_type_repeat12 := _object_type_repeat12 property_signature ,;
_object_type_repeat12 := property_signature;
_object_type_repeat12 := _object_type_repeat12 property_signature;
_object_type_repeat12 := method_signature ;;
_object_type_repeat12 := _object_type_repeat12 method_signature ;;
_object_type_repeat12 := method_signature ,;
_object_type_repeat12 := _object_type_repeat12 method_signature ,;
_object_type_repeat12 := method_signature;
_object_type_repeat12 := _object_type_repeat12 method_signature;
_object_type_repeat12 := construct_signature ;;
_object_type_repeat12 := _object_type_repeat12 construct_signature ;;
_object_type_repeat12 := construct_signature ,;
_object_type_repeat12 := _object_type_repeat12 construct_signature ,;
_object_type_repeat12 := construct_signature;
_object_type_repeat12 := _object_type_repeat12 construct_signature;
_object_type_repeat12 := index_signature ;;
_object_type_repeat12 := _object_type_repeat12 index_signature ;;
_object_type_repeat12 := index_signature ,;
_object_type_repeat12 := _object_type_repeat12 index_signature ,;
_object_type_repeat12 := index_signature;
_object_type_repeat12 := _object_type_repeat12 index_signature;
object_type := { _object_type_repeat12 };
object_type := { };
property_signature := readonly _property_name type_annotation;
property_signature := _property_name type_annotation;
method_signature := _property_name type_parameters formal_parameters type_annotation;
method_signature := _property_name type_parameters formal_parameters;
method_signature := _property_name formal_parameters type_annotation;
method_signature := _property_name formal_parameters;
construct_signature := new type_parameters formal_parameters type_annotation;
construct_signature := new type_parameters formal_parameters;
construct_signature := new formal_parameters type_annotation;
construct_signature := new formal_parameters;
index_signature := readonly [ identifier : _type ] type_annotation;
index_signature := readonly [ identifier in _type ] type_annotation;
index_signature := [ identifier : _type ] type_annotation;
index_signature := [ identifier in _type ] type_annotation;
_expression := _primary_expression;
_expression := assignment_expression;
_expression := augmented_assignment_expression;
_expression := arrow_function;
_expression := ternary_expression;
_expression := binary_expression;
_expression := as_expression;
_expression := unary_expression;
_expression := update_expression;
_expression := await_expression;
_expression := new_expression;
_expression := call_expression;
_expression := member_expression;
_expression := subscript_expression;
_contextual_id := async;
_contextual_id := set;
_contextual_id := get;
_contextual_id := type;
_contextual_id := from;
_contextual_id := of;
_primary_expression := identifier;
_primary_expression := _contextual_id;
_primary_expression := number;
_primary_expression := string;
_primary_expression := template_string;
_primary_expression := regex;
_primary_expression := true;
_primary_expression := false;
_primary_expression := null;
_primary_expression := this;
_primary_expression := super;
_primary_expression := array;
_primary_expression := object;
_primary_expression := function_expression;
_primary_expression := class_expression;
_primary_expression := parenthesized_expression;
_parenthesized_expression_repeat13 := , argument;
_parenthesized_expression_repeat13 := _parenthesized_expression_repeat13 , argument;
parenthesized_expression := ( argument _parenthesized_expression_repeat13 , );
parenthesized_expression := ( argument _parenthesized_expression_repeat13 );
parenthesized_expression := ( argument , );
parenthesized_expression := ( argument );
_lhs_expression := identifier;
_lhs_expression := _contextual_id;
_lhs_expression := member_expression;
_lhs_expression := subscript_expression;
_lhs_expression := array;
_lhs_expression := object;
assignment_expression := _lhs_expression = _expression;
augmented_assignment_expression := _lhs_expression compound_assignment_operator _expression;
arrow_function := async identifier => statement_block;
arrow_function := async identifier => _expression;
arrow_function := identifier => statement_block;
arrow_function := identifier => _expression;
arrow_function := async parenthesized_expression type_annotation => statement_block;
arrow_function := async parenthesized_expression type_annotation => _expression;
arrow_function := async parenthesized_expression => statement_block;
arrow_function := async parenthesized_expression => _expression;
arrow_function := parenthesized_expression type_annotation => statement_block;
arrow_function := parenthesized_expression type_annotation => _expression;
arrow_function := parenthesized_expression => statement_block;
arrow_function := parenthesized_expression => _expression;
arrow_function := async ( ) type_annotation => statement_block;
arrow_function := async ( ) type_annotation => _expression;
arrow_function := async ( ) => statement_block;
arrow_function := async ( ) => _expression;
arrow_function := ( ) type_annotation => statement_block;
arrow_function := ( ) type_annotation => _expression;
arrow_function := ( ) => statement_block;
arrow_function := ( ) => _expression;
arrow_function := async typed_parameters type_annotation => statement_block;
arrow_function := async typed_parameters type_annotation => _expression;
arrow_function := async typed_parameters => statement_block;
arrow_function := async typed_parameters => _expression;
arrow_function := typed_parameters type_annotation => statement_block;
arrow_function := typed_parameters type_annotation => _expression;
arrow_function := typed_parameters => statement_block;
arrow_function := typed_parameters => _expression;
arrow_function := async type_parameters formal_parameters type_annotation => statement_block;
arrow_function := async type_parameters formal_parameters type_annotation => _expression;
arrow_function := async type_parameters formal_parameters => statement_block;
arrow_function := async type_parameters formal_parameters => _expression;
arrow_function := type_parameters formal_parameters type_annotation => statement_block;
arrow_function := type_parameters formal_parameters type_annotation => _expression;
arrow_function := type_parameters formal_parameters => statement_block;
arrow_function := type_parameters formal_parameters => _expression;
ternary_expression := _expression ? _expression : _expression;
binary_expression := _expression || _expression;
binary_expression := _expression ?? _expression;
binary_expression := _expression && _expression;
binary_expression := _expression | _expression;
binary_expression := _expression ^ _expression;
binary_expression := _expression & _expression;
binary_expression := _expression equality_operator _expression;
binary_expression := _expression < _expression;
binary_expression := _expression > _expression;
binary_expression := _expression relational_operator _expression;
binary_expression := _expression in _expression;
binary_expression := _expression instanceof _expression;
binary_expression := _expression shift_operator _expression;
binary_expression := _expression + _expression;
binary_expression := _expression - _expression;
binary_expression := _expression * _expression;
binary_expression := _expression multiplicative_operator _expression;
binary_expression := _expression ** _expression;
as_expression := _expression as _type;
unary_expression := ! _expression;
unary_expression := ~ _expression;
unary_expression := - _expression;
unary_expression := + _expression;
unary_expression := typeof _expression;
unary_expression := void _expression;
unary_expression := delete _expression;
await_expression := await _expression;
update_expression := update_operator _expression;
update_expression := _expression update_operator;
new_expression := new _primary_expression type_arguments arguments;
new_expression := new _primary_expression arguments;
new_expression := new _primary_expression;
call_expression := _expression ?. arguments;
call_expression := _expression arguments;
member_expression := _expression . identifier;
member_expression := _expression . private_property_identifier;
member_expression := _expression ?. identifier;
member_expression := _expression ?. private_property_identifier;
subscript_expression := _expression ?. [ _expression ];
subscript_expression := _expression [ _expression ];
arguments := ( argument _parenthesized_expression_repeat13 , );
arguments := ( argument _parenthesized_expression_repeat13 );
arguments := ( argument , );
arguments := ( argument );
arguments := ( );
argument := _expression;
argument := spread_element;
spread_element := ... _expression;
_array_repeat14 := , argument;
_array_repeat14 := _array_repeat14 , argument;
_array_repeat14 := ,;
_array_repeat14 := _array_repeat14 ,;
array := [ , argument _array_repeat14 ];
array := [ , argument ];
array := [ argument _array_repeat14 ];
array := [ argument ];
array := [ ];
_object_repeat15 := , object_member;
_object_repeat15 := _object_repeat15 , object_member;
object := { object_member _object_repeat15 , };
object := { object_member _object_repeat15 };
object := { object_member , };
object := { object_member };
object := { };
object_member := pair;
object_member := shorthand_property_identifier;
object_member := object_method;
object_member := spread_element;
object_method := async _property_name type_parameters formal_parameters type_annotation statement_block;
object_method := async _property_name type_parameters formal_parameters statement_block;
object_method := async _property_name formal_parameters type_annotation statement_block;
object_method := async _property_name formal_parameters statement_block;
object_method := get _property_name type_parameters formal_parameters type_annotation statement_block;
object_method := get _property_name type_parameters formal_parameters statement_block;
object_method := get _property_name formal_parameters type_annotation statement_block;
object_method := get _property_name formal_parameters statement_block;
object_method := set _property_name type_parameters formal_parameters type_annotation statement_block;
object_method := set _property_name type_parameters formal_parameters statement_block;
object_method := set _property_name formal_parameters type_annotation statement_block;
object_method := set _property_name formal_parameters statement_block;
object_method := _property_name type_parameters formal_parameters type_annotation statement_block;
object_method := _property_name type_parameters formal_parameters statement_block;
object_method := _property_name formal_parameters type_annotation statement_block;
object_method := _property_name formal_parameters statement_block;
pair := _property_name : _expression;
shorthand_property_identifier := identifier;
shorthand_property_identifier := _contextual_id;
_property_name := identifier;
_property_name := _contextual_id;
_property_name := string;
_property_name := number;
_property_name := computed_property_name;
computed_property_name := [ _expression ];
function_expression := async function identifier type_parameters formal_parameters type_annotation statement_block;
function_expression := async function identifier type_parameters formal_parameters statement_block;
function_expression := async function identifier formal_parameters type_annotation statement_block;
function_expression := async function identifier formal_parameters statement_block;
function_expression := async function type_parameters formal_parameters type_annotation statement_block;
function_expression := async function type_parameters formal_parameters statement_block;
function_expression := async function formal_parameters type_annotation statement_block;
function_expression := async function formal_parameters statement_block;
function_expression := function identifier type_parameters formal_parameters type_annotation statement_block;
function_expression := function identifier type_parameters formal_parameters statement_block;
function_expression := function identifier formal_parameters type_annotation statement_block;
function_expression := function identifier formal_parameters statement_block;
function_expression := function type_parameters formal_parameters type_annotation statement_block;
function_expression := function type_parameters formal_parameters statement_block;
function_expression := function formal_parameters type_annotation statement_block;
function_expression := function formal_parameters statement_block;
class_expression := class identifier type_parameters class_heritage class_body;
class_expression := class identifier type_parameters class_body;
class_expression := class identifier class_heritage class_body;
class_expression := class identifier class_body;
class_expression := class type_parameters class_heritage class_body;
class_expression := class type_parameters class_body;
class_expression := class class_heritage class_body;
class_expression := class class_body;
      */

const parserSymbols = [
  "true", // 0
  "false", // 1
  "null", // 2
  "this", // 3
  "super", // 4
  "{", // 5
  "}", // 6
  "if", // 7
  "(", // 8
  ")", // 9
  "else", // 10
  "while", // 11
  "do", // 12
  ";", // 13
  "for", // 14
  "const", // 15
  "let", // 16
  "var", // 17
  "of", // 18
  "in", // 19
  "return", // 20
  "throw", // 21
  "try", // 22
  "catch", // 23
  "finally", // 24
  "switch", // 25
  "case", // 26
  ":", // 27
  "default", // 28
  "break", // 29
  "continue", // 30
  "import", // 31
  "from", // 32
  ",", // 33
  "*", // 34
  "as", // 35
  "type", // 36
  "export", // 37
  "declare", // 38
  "=", // 39
  "...", // 40
  "[", // 41
  "]", // 42
  "async", // 43
  "function", // 44
  "static", // 45
  "readonly", // 46
  "get", // 47
  "set", // 48
  "class", // 49
  "extends", // 50
  "implements", // 51
  "interface", // 52
  "?:", // 53
  "<", // 54
  ">", // 55
  "|", // 56
  "&", // 57
  "=>", // 58
  "void", // 59
  "typeof", // 60
  "is", // 61
  "new", // 62
  "?", // 63
  "||", // 64
  "??", // 65
  "&&", // 66
  "^", // 67
  "instanceof", // 68
  "+", // 69
  "-", // 70
  "**", // 71
  "!", // 72
  "~", // 73
  "delete", // 74
  "await", // 75
  "?.", // 76
  ".", // 77
  "identifier", // 78
  "private_property_identifier", // 79
  "number", // 80
  "string", // 81
  "template_string", // 82
  "accessibility_modifier", // 83
  "compound_assignment_operator", // 84
  "equality_operator", // 85
  "relational_operator", // 86
  "shift_operator", // 87
  "multiplicative_operator", // 88
  "update_operator", // 89
  "regex", // 90
  "@par-gen.EOF", // 91
  "@par-gen.ERROR", // 92
  "comment", // 93
  "S", // 94
  "program", // 95
  "_statement", // 96
  "_statement_block_repeat1", // 97
  "statement_block", // 98
  "if_statement", // 99
  "while_statement", // 100
  "do_statement", // 101
  "for_statement", // 102
  "for_in_statement", // 103
  "return_statement", // 104
  "throw_statement", // 105
  "try_statement", // 106
  "catch_clause", // 107
  "finally_clause", // 108
  "switch_statement", // 109
  "_switch_body_repeat2", // 110
  "switch_body", // 111
  "switch_case", // 112
  "switch_default", // 113
  "break_statement", // 114
  "continue_statement", // 115
  "expression_statement", // 116
  "_declaration", // 117
  "import_statement", // 118
  "import_clause", // 119
  "namespace_import", // 120
  "_named_imports_repeat3", // 121
  "named_imports", // 122
  "import_specifier", // 123
  "export_statement", // 124
  "_variable_declaration_repeat4", // 125
  "variable_declaration", // 126
  "variable_declarator", // 127
  "_binding_pattern", // 128
  "_object_pattern_repeat5", // 129
  "object_pattern", // 130
  "object_pattern_property", // 131
  "_array_pattern_repeat6", // 132
  "array_pattern", // 133
  "array_pattern_element", // 134
  "function_declaration", // 135
  "_formal_parameters_repeat7", // 136
  "formal_parameters", // 137
  "formal_parameter", // 138
  "_typed_parameters_repeat8", // 139
  "typed_parameters", // 140
  "typed_parameter", // 141
  "member_modifiers", // 142
  "class_declaration", // 143
  "class_heritage", // 144
  "_implements_clause_repeat9", // 145
  "implements_clause", // 146
  "_class_body_repeat10", // 147
  "class_body", // 148
  "method_definition", // 149
  "field_definition", // 150
  "interface_declaration", // 151
  "extends_type_clause", // 152
  "type_alias_declaration", // 153
  "type_annotation", // 154
  "_type_parameters_repeat11", // 155
  "type_parameters", // 156
  "type_parameter", // 157
  "type_arguments", // 158
  "_type", // 159
  "union_type", // 160
  "intersection_type", // 161
  "function_type", // 162
  "_primary_type", // 163
  "generic_type", // 164
  "array_type", // 165
  "indexed_access_type", // 166
  "tuple_type", // 167
  "parenthesized_type", // 168
  "typeof_type", // 169
  "type_predicate", // 170
  "_object_type_repeat12", // 171
  "object_type", // 172
  "property_signature", // 173
  "method_signature", // 174
  "construct_signature", // 175
  "index_signature", // 176
  "_expression", // 177
  "_contextual_id", // 178
  "_primary_expression", // 179
  "_parenthesized_expression_repeat13", // 180
  "parenthesized_expression", // 181
  "_lhs_expression", // 182
  "assignment_expression", // 183
  "augmented_assignment_expression", // 184
  "arrow_function", // 185
  "ternary_expression", // 186
  "binary_expression", // 187
  "as_expression", // 188
  "unary_expression", // 189
  "await_expression", // 190
  "update_expression", // 191
  "new_expression", // 192
  "call_expression", // 193
  "member_expression", // 194
  "subscript_expression", // 195
  "arguments", // 196
  "argument", // 197
  "spread_element", // 198
  "_array_repeat14", // 199
  "array", // 200
  "_object_repeat15", // 201
  "object", // 202
  "object_member", // 203
  "object_method", // 204
  "pair", // 205
  "shorthand_property_identifier", // 206
  "_property_name", // 207
  "computed_property_name", // 208
  "function_expression", // 209
  "class_expression", // 210
];

const SymbolIds = Object.freeze({
  true: 0,
  false: 1,
  null: 2,
  this: 3,
  super: 4,
  "{": 5,
  "}": 6,
  if: 7,
  "(": 8,
  ")": 9,
  else: 10,
  while: 11,
  do: 12,
  ";": 13,
  for: 14,
  const: 15,
  let: 16,
  var: 17,
  of: 18,
  in: 19,
  return: 20,
  throw: 21,
  try: 22,
  catch: 23,
  finally: 24,
  switch: 25,
  case: 26,
  ":": 27,
  default: 28,
  break: 29,
  continue: 30,
  import: 31,
  from: 32,
  ",": 33,
  "*": 34,
  as: 35,
  type: 36,
  export: 37,
  declare: 38,
  "=": 39,
  "...": 40,
  "[": 41,
  "]": 42,
  async: 43,
  function: 44,
  static: 45,
  readonly: 46,
  get: 47,
  set: 48,
  class: 49,
  extends: 50,
  implements: 51,
  interface: 52,
  "?:": 53,
  "<": 54,
  ">": 55,
  "|": 56,
  "&": 57,
  "=>": 58,
  void: 59,
  typeof: 60,
  is: 61,
  new: 62,
  "?": 63,
  "||": 64,
  "??": 65,
  "&&": 66,
  "^": 67,
  instanceof: 68,
  "+": 69,
  "-": 70,
  "**": 71,
  "!": 72,
  "~": 73,
  delete: 74,
  await: 75,
  "?.": 76,
  ".": 77,
  identifier: 78,
  private_property_identifier: 79,
  number: 80,
  string: 81,
  template_string: 82,
  accessibility_modifier: 83,
  compound_assignment_operator: 84,
  equality_operator: 85,
  relational_operator: 86,
  shift_operator: 87,
  multiplicative_operator: 88,
  update_operator: 89,
  regex: 90,
  "@par-gen.EOF": 91,
  "@par-gen.ERROR": 92,
  comment: 93,
  S: 94,
  program: 95,
  _statement: 96,
  _statement_block_repeat1: 97,
  statement_block: 98,
  if_statement: 99,
  while_statement: 100,
  do_statement: 101,
  for_statement: 102,
  for_in_statement: 103,
  return_statement: 104,
  throw_statement: 105,
  try_statement: 106,
  catch_clause: 107,
  finally_clause: 108,
  switch_statement: 109,
  _switch_body_repeat2: 110,
  switch_body: 111,
  switch_case: 112,
  switch_default: 113,
  break_statement: 114,
  continue_statement: 115,
  expression_statement: 116,
  _declaration: 117,
  import_statement: 118,
  import_clause: 119,
  namespace_import: 120,
  _named_imports_repeat3: 121,
  named_imports: 122,
  import_specifier: 123,
  export_statement: 124,
  _variable_declaration_repeat4: 125,
  variable_declaration: 126,
  variable_declarator: 127,
  _binding_pattern: 128,
  _object_pattern_repeat5: 129,
  object_pattern: 130,
  object_pattern_property: 131,
  _array_pattern_repeat6: 132,
  array_pattern: 133,
  array_pattern_element: 134,
  function_declaration: 135,
  _formal_parameters_repeat7: 136,
  formal_parameters: 137,
  formal_parameter: 138,
  _typed_parameters_repeat8: 139,
  typed_parameters: 140,
  typed_parameter: 141,
  member_modifiers: 142,
  class_declaration: 143,
  class_heritage: 144,
  _implements_clause_repeat9: 145,
  implements_clause: 146,
  _class_body_repeat10: 147,
  class_body: 148,
  method_definition: 149,
  field_definition: 150,
  interface_declaration: 151,
  extends_type_clause: 152,
  type_alias_declaration: 153,
  type_annotation: 154,
  _type_parameters_repeat11: 155,
  type_parameters: 156,
  type_parameter: 157,
  type_arguments: 158,
  _type: 159,
  union_type: 160,
  intersection_type: 161,
  function_type: 162,
  _primary_type: 163,
  generic_type: 164,
  array_type: 165,
  indexed_access_type: 166,
  tuple_type: 167,
  parenthesized_type: 168,
  typeof_type: 169,
  type_predicate: 170,
  _object_type_repeat12: 171,
  object_type: 172,
  property_signature: 173,
  method_signature: 174,
  construct_signature: 175,
  index_signature: 176,
  _expression: 177,
  _contextual_id: 178,
  _primary_expression: 179,
  _parenthesized_expression_repeat13: 180,
  parenthesized_expression: 181,
  _lhs_expression: 182,
  assignment_expression: 183,
  augmented_assignment_expression: 184,
  arrow_function: 185,
  ternary_expression: 186,
  binary_expression: 187,
  as_expression: 188,
  unary_expression: 189,
  await_expression: 190,
  update_expression: 191,
  new_expression: 192,
  call_expression: 193,
  member_expression: 194,
  subscript_expression: 195,
  arguments: 196,
  argument: 197,
  spread_element: 198,
  _array_repeat14: 199,
  array: 200,
  _object_repeat15: 201,
  object: 202,
  object_member: 203,
  object_method: 204,
  pair: 205,
  shorthand_property_identifier: 206,
  _property_name: 207,
  computed_property_name: 208,
  function_expression: 209,
  class_expression: 210,
});

const actionsTable = new Uint16Array(95840).fill(0xffff);
actionsTable.fill(798, 0, 5); // 'state 0' -> true..super -> shift (target=399, len=0)
actionsTable[5] = 2; // 'state 0' -> { -> shift (target=1, len=0)
actionsTable[7] = 800; // 'state 0' -> if -> shift (target=400, len=0)
actionsTable[8] = 4; // 'state 0' -> ( -> shift (target=2, len=0)
actionsTable[11] = 802; // 'state 0' -> while -> shift (target=401, len=0)
actionsTable[12] = 6; // 'state 0' -> do -> shift (target=3, len=0)
actionsTable[14] = 804; // 'state 0' -> for -> shift (target=402, len=0)
actionsTable.fill(8, 15, 18); // 'state 0' -> const..var -> shift (target=4, len=0)
actionsTable[18] = 806; // 'state 0' -> of -> shift (target=403, len=0)
actionsTable[20] = 10; // 'state 0' -> return -> shift (target=5, len=0)
actionsTable[21] = 12; // 'state 0' -> throw -> shift (target=6, len=0)
actionsTable[22] = 14; // 'state 0' -> try -> shift (target=7, len=0)
actionsTable[25] = 808; // 'state 0' -> switch -> shift (target=404, len=0)
actionsTable[29] = 810; // 'state 0' -> break -> shift (target=405, len=0)
actionsTable[30] = 812; // 'state 0' -> continue -> shift (target=406, len=0)
actionsTable[31] = 16; // 'state 0' -> import -> shift (target=8, len=0)
actionsTable[32] = 806; // 'state 0' -> from -> shift (target=403, len=0)
actionsTable[36] = 814; // 'state 0' -> type -> shift (target=407, len=0)
actionsTable[37] = 18; // 'state 0' -> export -> shift (target=9, len=0)
actionsTable[41] = 20; // 'state 0' -> [ -> shift (target=10, len=0)
actionsTable[43] = 22; // 'state 0' -> async -> shift (target=11, len=0)
actionsTable[44] = 24; // 'state 0' -> function -> shift (target=12, len=0)
actionsTable.fill(806, 47, 49); // 'state 0' -> get..set -> shift (target=403, len=0)
actionsTable[49] = 26; // 'state 0' -> class -> shift (target=13, len=0)
actionsTable[52] = 816; // 'state 0' -> interface -> shift (target=408, len=0)
actionsTable[54] = 28; // 'state 0' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 59, 61); // 'state 0' -> void..typeof -> shift (target=15, len=0)
actionsTable[62] = 32; // 'state 0' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 69, 71); // 'state 0' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 72, 75); // 'state 0' -> !..delete -> shift (target=15, len=0)
actionsTable[75] = 34; // 'state 0' -> await -> shift (target=17, len=0)
actionsTable[78] = 818; // 'state 0' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 80, 83); // 'state 0' -> number..template_string -> shift (target=399, len=0)
actionsTable[89] = 36; // 'state 0' -> update_operator -> shift (target=18, len=0)
actionsTable[90] = 798; // 'state 0' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 128, 133); // 'state 1' -> true..super -> shift (target=399, len=0)
actionsTable[133] = 2; // 'state 1' -> { -> shift (target=1, len=0)
actionsTable[134] = 836; // 'state 1' -> } -> shift (target=418, len=0)
actionsTable[135] = 800; // 'state 1' -> if -> shift (target=400, len=0)
actionsTable[136] = 4; // 'state 1' -> ( -> shift (target=2, len=0)
actionsTable[139] = 802; // 'state 1' -> while -> shift (target=401, len=0)
actionsTable[140] = 6; // 'state 1' -> do -> shift (target=3, len=0)
actionsTable[142] = 804; // 'state 1' -> for -> shift (target=402, len=0)
actionsTable.fill(8, 143, 146); // 'state 1' -> const..var -> shift (target=4, len=0)
actionsTable[146] = 806; // 'state 1' -> of -> shift (target=403, len=0)
actionsTable[148] = 10; // 'state 1' -> return -> shift (target=5, len=0)
actionsTable[149] = 12; // 'state 1' -> throw -> shift (target=6, len=0)
actionsTable[150] = 14; // 'state 1' -> try -> shift (target=7, len=0)
actionsTable[153] = 808; // 'state 1' -> switch -> shift (target=404, len=0)
actionsTable[157] = 810; // 'state 1' -> break -> shift (target=405, len=0)
actionsTable[158] = 812; // 'state 1' -> continue -> shift (target=406, len=0)
actionsTable[159] = 16; // 'state 1' -> import -> shift (target=8, len=0)
actionsTable[160] = 806; // 'state 1' -> from -> shift (target=403, len=0)
actionsTable[164] = 814; // 'state 1' -> type -> shift (target=407, len=0)
actionsTable[165] = 18; // 'state 1' -> export -> shift (target=9, len=0)
actionsTable[168] = 48; // 'state 1' -> ... -> shift (target=24, len=0)
actionsTable[169] = 50; // 'state 1' -> [ -> shift (target=25, len=0)
actionsTable[171] = 52; // 'state 1' -> async -> shift (target=26, len=0)
actionsTable[172] = 24; // 'state 1' -> function -> shift (target=12, len=0)
actionsTable.fill(54, 175, 177); // 'state 1' -> get..set -> shift (target=27, len=0)
actionsTable[177] = 26; // 'state 1' -> class -> shift (target=13, len=0)
actionsTable[180] = 816; // 'state 1' -> interface -> shift (target=408, len=0)
actionsTable[182] = 28; // 'state 1' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 187, 189); // 'state 1' -> void..typeof -> shift (target=15, len=0)
actionsTable[190] = 32; // 'state 1' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 197, 199); // 'state 1' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 200, 203); // 'state 1' -> !..delete -> shift (target=15, len=0)
actionsTable[203] = 34; // 'state 1' -> await -> shift (target=17, len=0)
actionsTable[206] = 838; // 'state 1' -> identifier -> shift (target=419, len=0)
actionsTable.fill(840, 208, 210); // 'state 1' -> number..string -> shift (target=420, len=0)
actionsTable[210] = 798; // 'state 1' -> template_string -> shift (target=399, len=0)
actionsTable[217] = 36; // 'state 1' -> update_operator -> shift (target=18, len=0)
actionsTable[218] = 798; // 'state 1' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 256, 261); // 'state 2' -> true..super -> shift (target=399, len=0)
actionsTable[261] = 68; // 'state 2' -> { -> shift (target=34, len=0)
actionsTable[264] = 4; // 'state 2' -> ( -> shift (target=2, len=0)
actionsTable[265] = 134; // 'state 2' -> ) -> shift (target=67, len=0)
actionsTable[274] = 806; // 'state 2' -> of -> shift (target=403, len=0)
actionsTable[288] = 806; // 'state 2' -> from -> shift (target=403, len=0)
actionsTable[292] = 806; // 'state 2' -> type -> shift (target=403, len=0)
actionsTable[296] = 170; // 'state 2' -> ... -> shift (target=85, len=0)
actionsTable[297] = 20; // 'state 2' -> [ -> shift (target=10, len=0)
actionsTable[299] = 70; // 'state 2' -> async -> shift (target=35, len=0)
actionsTable[300] = 72; // 'state 2' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 303, 305); // 'state 2' -> get..set -> shift (target=403, len=0)
actionsTable[305] = 74; // 'state 2' -> class -> shift (target=37, len=0)
actionsTable[310] = 28; // 'state 2' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 315, 317); // 'state 2' -> void..typeof -> shift (target=15, len=0)
actionsTable[318] = 32; // 'state 2' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 325, 327); // 'state 2' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 328, 331); // 'state 2' -> !..delete -> shift (target=15, len=0)
actionsTable[331] = 34; // 'state 2' -> await -> shift (target=17, len=0)
actionsTable[334] = 172; // 'state 2' -> identifier -> shift (target=86, len=0)
actionsTable.fill(798, 336, 339); // 'state 2' -> number..template_string -> shift (target=399, len=0)
actionsTable[345] = 36; // 'state 2' -> update_operator -> shift (target=18, len=0)
actionsTable[346] = 798; // 'state 2' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 384, 389); // 'state 3' -> true..super -> shift (target=399, len=0)
actionsTable[389] = 2; // 'state 3' -> { -> shift (target=1, len=0)
actionsTable[391] = 800; // 'state 3' -> if -> shift (target=400, len=0)
actionsTable[392] = 4; // 'state 3' -> ( -> shift (target=2, len=0)
actionsTable[395] = 802; // 'state 3' -> while -> shift (target=401, len=0)
actionsTable[396] = 6; // 'state 3' -> do -> shift (target=3, len=0)
actionsTable[398] = 804; // 'state 3' -> for -> shift (target=402, len=0)
actionsTable.fill(8, 399, 402); // 'state 3' -> const..var -> shift (target=4, len=0)
actionsTable[402] = 806; // 'state 3' -> of -> shift (target=403, len=0)
actionsTable[404] = 10; // 'state 3' -> return -> shift (target=5, len=0)
actionsTable[405] = 12; // 'state 3' -> throw -> shift (target=6, len=0)
actionsTable[406] = 14; // 'state 3' -> try -> shift (target=7, len=0)
actionsTable[409] = 808; // 'state 3' -> switch -> shift (target=404, len=0)
actionsTable[413] = 810; // 'state 3' -> break -> shift (target=405, len=0)
actionsTable[414] = 812; // 'state 3' -> continue -> shift (target=406, len=0)
actionsTable[415] = 16; // 'state 3' -> import -> shift (target=8, len=0)
actionsTable[416] = 806; // 'state 3' -> from -> shift (target=403, len=0)
actionsTable[420] = 814; // 'state 3' -> type -> shift (target=407, len=0)
actionsTable[421] = 18; // 'state 3' -> export -> shift (target=9, len=0)
actionsTable[425] = 20; // 'state 3' -> [ -> shift (target=10, len=0)
actionsTable[427] = 22; // 'state 3' -> async -> shift (target=11, len=0)
actionsTable[428] = 24; // 'state 3' -> function -> shift (target=12, len=0)
actionsTable.fill(806, 431, 433); // 'state 3' -> get..set -> shift (target=403, len=0)
actionsTable[433] = 26; // 'state 3' -> class -> shift (target=13, len=0)
actionsTable[436] = 816; // 'state 3' -> interface -> shift (target=408, len=0)
actionsTable[438] = 28; // 'state 3' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 443, 445); // 'state 3' -> void..typeof -> shift (target=15, len=0)
actionsTable[446] = 32; // 'state 3' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 453, 455); // 'state 3' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 456, 459); // 'state 3' -> !..delete -> shift (target=15, len=0)
actionsTable[459] = 34; // 'state 3' -> await -> shift (target=17, len=0)
actionsTable[462] = 818; // 'state 3' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 464, 467); // 'state 3' -> number..template_string -> shift (target=399, len=0)
actionsTable[473] = 36; // 'state 3' -> update_operator -> shift (target=18, len=0)
actionsTable[474] = 798; // 'state 3' -> regex -> shift (target=399, len=0)
actionsTable[517] = 122; // 'state 4' -> { -> shift (target=61, len=0)
actionsTable[553] = 124; // 'state 4' -> [ -> shift (target=62, len=0)
actionsTable[590] = 894; // 'state 4' -> identifier -> shift (target=447, len=0)
actionsTable.fill(798, 640, 645); // 'state 5' -> true..super -> shift (target=399, len=0)
actionsTable[645] = 68; // 'state 5' -> { -> shift (target=34, len=0)
actionsTable.fill(721, 646, 648); // 'state 5' -> }..if -> reduce (target=104, len=1)
actionsTable[648] = 4; // 'state 5' -> ( -> shift (target=2, len=0)
actionsTable.fill(721, 650, 653); // 'state 5' -> else..do -> reduce (target=104, len=1)
actionsTable[653] = 852; // 'state 5' -> ; -> shift (target=426, len=0)
actionsTable.fill(721, 654, 658); // 'state 5' -> for..var -> reduce (target=104, len=1)
actionsTable[658] = 806; // 'state 5' -> of -> shift (target=403, len=0)
actionsTable.fill(721, 660, 663); // 'state 5' -> return..try -> reduce (target=104, len=1)
actionsTable.fill(721, 665, 667); // 'state 5' -> switch..case -> reduce (target=104, len=1)
actionsTable.fill(721, 668, 672); // 'state 5' -> default..import -> reduce (target=104, len=1)
actionsTable[672] = 806; // 'state 5' -> from -> shift (target=403, len=0)
actionsTable[676] = 806; // 'state 5' -> type -> shift (target=403, len=0)
actionsTable[677] = 721; // 'state 5' -> export -> reduce (target=104, len=1)
actionsTable[681] = 20; // 'state 5' -> [ -> shift (target=10, len=0)
actionsTable[683] = 70; // 'state 5' -> async -> shift (target=35, len=0)
actionsTable[684] = 72; // 'state 5' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 687, 689); // 'state 5' -> get..set -> shift (target=403, len=0)
actionsTable[689] = 74; // 'state 5' -> class -> shift (target=37, len=0)
actionsTable[692] = 721; // 'state 5' -> interface -> reduce (target=104, len=1)
actionsTable[694] = 28; // 'state 5' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 699, 701); // 'state 5' -> void..typeof -> shift (target=15, len=0)
actionsTable[702] = 32; // 'state 5' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 709, 711); // 'state 5' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 712, 715); // 'state 5' -> !..delete -> shift (target=15, len=0)
actionsTable[715] = 34; // 'state 5' -> await -> shift (target=17, len=0)
actionsTable[718] = 818; // 'state 5' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 720, 723); // 'state 5' -> number..template_string -> shift (target=399, len=0)
actionsTable[729] = 36; // 'state 5' -> update_operator -> shift (target=18, len=0)
actionsTable[730] = 798; // 'state 5' -> regex -> shift (target=399, len=0)
actionsTable[731] = 721; // 'state 5' -> @par-gen.EOF -> reduce (target=104, len=1)
actionsTable.fill(798, 768, 773); // 'state 6' -> true..super -> shift (target=399, len=0)
actionsTable[773] = 68; // 'state 6' -> { -> shift (target=34, len=0)
actionsTable[776] = 4; // 'state 6' -> ( -> shift (target=2, len=0)
actionsTable[786] = 806; // 'state 6' -> of -> shift (target=403, len=0)
actionsTable[800] = 806; // 'state 6' -> from -> shift (target=403, len=0)
actionsTable[804] = 806; // 'state 6' -> type -> shift (target=403, len=0)
actionsTable[809] = 20; // 'state 6' -> [ -> shift (target=10, len=0)
actionsTable[811] = 70; // 'state 6' -> async -> shift (target=35, len=0)
actionsTable[812] = 72; // 'state 6' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 815, 817); // 'state 6' -> get..set -> shift (target=403, len=0)
actionsTable[817] = 74; // 'state 6' -> class -> shift (target=37, len=0)
actionsTable[822] = 28; // 'state 6' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 827, 829); // 'state 6' -> void..typeof -> shift (target=15, len=0)
actionsTable[830] = 32; // 'state 6' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 837, 839); // 'state 6' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 840, 843); // 'state 6' -> !..delete -> shift (target=15, len=0)
actionsTable[843] = 34; // 'state 6' -> await -> shift (target=17, len=0)
actionsTable[846] = 818; // 'state 6' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 848, 851); // 'state 6' -> number..template_string -> shift (target=399, len=0)
actionsTable[857] = 36; // 'state 6' -> update_operator -> shift (target=18, len=0)
actionsTable[858] = 798; // 'state 6' -> regex -> shift (target=399, len=0)
actionsTable[901] = 80; // 'state 7' -> { -> shift (target=40, len=0)
actionsTable[1029] = 116; // 'state 8' -> { -> shift (target=58, len=0)
actionsTable[1058] = 870; // 'state 8' -> * -> shift (target=435, len=0)
actionsTable[1102] = 872; // 'state 8' -> identifier -> shift (target=436, len=0)
actionsTable[1105] = 874; // 'state 8' -> string -> shift (target=437, len=0)
actionsTable[1157] = 116; // 'state 9' -> { -> shift (target=58, len=0)
actionsTable.fill(8, 1167, 1170); // 'state 9' -> const..var -> shift (target=4, len=0)
actionsTable[1180] = 118; // 'state 9' -> default -> shift (target=59, len=0)
actionsTable[1183] = 16; // 'state 9' -> import -> shift (target=8, len=0)
actionsTable[1186] = 880; // 'state 9' -> * -> shift (target=440, len=0)
actionsTable[1188] = 882; // 'state 9' -> type -> shift (target=441, len=0)
actionsTable[1189] = 18; // 'state 9' -> export -> shift (target=9, len=0)
actionsTable[1190] = 120; // 'state 9' -> declare -> shift (target=60, len=0)
actionsTable[1195] = 884; // 'state 9' -> async -> shift (target=442, len=0)
actionsTable[1196] = 886; // 'state 9' -> function -> shift (target=443, len=0)
actionsTable[1201] = 888; // 'state 9' -> class -> shift (target=444, len=0)
actionsTable[1204] = 816; // 'state 9' -> interface -> shift (target=408, len=0)
actionsTable.fill(798, 1280, 1285); // 'state 10' -> true..super -> shift (target=399, len=0)
actionsTable[1285] = 68; // 'state 10' -> { -> shift (target=34, len=0)
actionsTable[1288] = 4; // 'state 10' -> ( -> shift (target=2, len=0)
actionsTable[1298] = 806; // 'state 10' -> of -> shift (target=403, len=0)
actionsTable[1312] = 806; // 'state 10' -> from -> shift (target=403, len=0)
actionsTable[1313] = 192; // 'state 10' -> , -> shift (target=96, len=0)
actionsTable[1316] = 806; // 'state 10' -> type -> shift (target=403, len=0)
actionsTable[1320] = 48; // 'state 10' -> ... -> shift (target=24, len=0)
actionsTable[1321] = 20; // 'state 10' -> [ -> shift (target=10, len=0)
actionsTable[1322] = 906; // 'state 10' -> ] -> shift (target=453, len=0)
actionsTable[1323] = 70; // 'state 10' -> async -> shift (target=35, len=0)
actionsTable[1324] = 72; // 'state 10' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 1327, 1329); // 'state 10' -> get..set -> shift (target=403, len=0)
actionsTable[1329] = 74; // 'state 10' -> class -> shift (target=37, len=0)
actionsTable[1334] = 28; // 'state 10' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 1339, 1341); // 'state 10' -> void..typeof -> shift (target=15, len=0)
actionsTable[1342] = 32; // 'state 10' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 1349, 1351); // 'state 10' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 1352, 1355); // 'state 10' -> !..delete -> shift (target=15, len=0)
actionsTable[1355] = 34; // 'state 10' -> await -> shift (target=17, len=0)
actionsTable[1358] = 818; // 'state 10' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 1360, 1363); // 'state 10' -> number..template_string -> shift (target=399, len=0)
actionsTable[1369] = 36; // 'state 10' -> update_operator -> shift (target=18, len=0)
actionsTable[1370] = 798; // 'state 10' -> regex -> shift (target=399, len=0)
actionsTable.fill(869, 1408, 1416); // 'state 11' -> true..if -> reduce (target=178, len=1)
actionsTable[1416] = 130; // 'state 11' -> ( -> shift (target=65, len=0)
actionsTable.fill(869, 1418, 1431); // 'state 11' -> else..try -> reduce (target=178, len=1)
actionsTable.fill(869, 1433, 1435); // 'state 11' -> switch..case -> reduce (target=178, len=1)
actionsTable.fill(869, 1436, 1441); // 'state 11' -> default..from -> reduce (target=178, len=1)
actionsTable.fill(869, 1442, 1446); // 'state 11' -> *..export -> reduce (target=178, len=1)
actionsTable[1447] = 869; // 'state 11' -> = -> reduce (target=178, len=1)
actionsTable[1449] = 869; // 'state 11' -> [ -> reduce (target=178, len=1)
actionsTable[1451] = 869; // 'state 11' -> async -> reduce (target=178, len=1)
actionsTable[1452] = 132; // 'state 11' -> function -> shift (target=66, len=0)
actionsTable.fill(869, 1455, 1458); // 'state 11' -> get..class -> reduce (target=178, len=1)
actionsTable[1460] = 869; // 'state 11' -> interface -> reduce (target=178, len=1)
actionsTable[1462] = 28; // 'state 11' -> < -> shift (target=14, len=0)
actionsTable.fill(869, 1463, 1466); // 'state 11' -> >..& -> reduce (target=178, len=1)
actionsTable.fill(869, 1467, 1469); // 'state 11' -> void..typeof -> reduce (target=178, len=1)
actionsTable.fill(869, 1470, 1486); // 'state 11' -> new... -> reduce (target=178, len=1)
actionsTable[1486] = 896; // 'state 11' -> identifier -> shift (target=448, len=0)
actionsTable.fill(869, 1488, 1491); // 'state 11' -> number..template_string -> reduce (target=178, len=1)
actionsTable.fill(869, 1492, 1500); // 'state 11' -> compound_assignment_operator..@par-gen.EOF -> reduce (target=178, len=1)
actionsTable[1544] = 138; // 'state 12' -> ( -> shift (target=69, len=0)
actionsTable[1590] = 28; // 'state 12' -> < -> shift (target=14, len=0)
actionsTable[1614] = 140; // 'state 12' -> identifier -> shift (target=70, len=0)
actionsTable[1669] = 146; // 'state 13' -> { -> shift (target=73, len=0)
actionsTable[1714] = 148; // 'state 13' -> extends -> shift (target=74, len=0)
actionsTable[1715] = 150; // 'state 13' -> implements -> shift (target=75, len=0)
actionsTable[1718] = 28; // 'state 13' -> < -> shift (target=14, len=0)
actionsTable[1742] = 152; // 'state 13' -> identifier -> shift (target=76, len=0)
actionsTable[1870] = 908; // 'state 14' -> identifier -> shift (target=454, len=0)
actionsTable.fill(798, 1920, 1925); // 'state 15' -> true..super -> shift (target=399, len=0)
actionsTable[1925] = 68; // 'state 15' -> { -> shift (target=34, len=0)
actionsTable[1928] = 4; // 'state 15' -> ( -> shift (target=2, len=0)
actionsTable[1938] = 806; // 'state 15' -> of -> shift (target=403, len=0)
actionsTable[1952] = 806; // 'state 15' -> from -> shift (target=403, len=0)
actionsTable[1956] = 806; // 'state 15' -> type -> shift (target=403, len=0)
actionsTable[1961] = 20; // 'state 15' -> [ -> shift (target=10, len=0)
actionsTable[1963] = 70; // 'state 15' -> async -> shift (target=35, len=0)
actionsTable[1964] = 72; // 'state 15' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 1967, 1969); // 'state 15' -> get..set -> shift (target=403, len=0)
actionsTable[1969] = 74; // 'state 15' -> class -> shift (target=37, len=0)
actionsTable[1974] = 28; // 'state 15' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 1979, 1981); // 'state 15' -> void..typeof -> shift (target=15, len=0)
actionsTable[1982] = 32; // 'state 15' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 1989, 1991); // 'state 15' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 1992, 1995); // 'state 15' -> !..delete -> shift (target=15, len=0)
actionsTable[1995] = 34; // 'state 15' -> await -> shift (target=17, len=0)
actionsTable[1998] = 818; // 'state 15' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 2000, 2003); // 'state 15' -> number..template_string -> shift (target=399, len=0)
actionsTable[2009] = 36; // 'state 15' -> update_operator -> shift (target=18, len=0)
actionsTable[2010] = 798; // 'state 15' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 2048, 2053); // 'state 16' -> true..super -> shift (target=399, len=0)
actionsTable[2053] = 68; // 'state 16' -> { -> shift (target=34, len=0)
actionsTable[2056] = 188; // 'state 16' -> ( -> shift (target=94, len=0)
actionsTable[2066] = 806; // 'state 16' -> of -> shift (target=403, len=0)
actionsTable[2080] = 806; // 'state 16' -> from -> shift (target=403, len=0)
actionsTable[2084] = 806; // 'state 16' -> type -> shift (target=403, len=0)
actionsTable[2089] = 20; // 'state 16' -> [ -> shift (target=10, len=0)
actionsTable[2091] = 904; // 'state 16' -> async -> shift (target=452, len=0)
actionsTable[2092] = 72; // 'state 16' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 2095, 2097); // 'state 16' -> get..set -> shift (target=403, len=0)
actionsTable[2097] = 74; // 'state 16' -> class -> shift (target=37, len=0)
actionsTable[2126] = 798; // 'state 16' -> identifier -> shift (target=399, len=0)
actionsTable.fill(798, 2128, 2131); // 'state 16' -> number..template_string -> shift (target=399, len=0)
actionsTable[2138] = 798; // 'state 16' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 2176, 2181); // 'state 17' -> true..super -> shift (target=399, len=0)
actionsTable[2181] = 68; // 'state 17' -> { -> shift (target=34, len=0)
actionsTable[2184] = 4; // 'state 17' -> ( -> shift (target=2, len=0)
actionsTable[2194] = 806; // 'state 17' -> of -> shift (target=403, len=0)
actionsTable[2208] = 806; // 'state 17' -> from -> shift (target=403, len=0)
actionsTable[2212] = 806; // 'state 17' -> type -> shift (target=403, len=0)
actionsTable[2217] = 20; // 'state 17' -> [ -> shift (target=10, len=0)
actionsTable[2219] = 70; // 'state 17' -> async -> shift (target=35, len=0)
actionsTable[2220] = 72; // 'state 17' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 2223, 2225); // 'state 17' -> get..set -> shift (target=403, len=0)
actionsTable[2225] = 74; // 'state 17' -> class -> shift (target=37, len=0)
actionsTable[2230] = 28; // 'state 17' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 2235, 2237); // 'state 17' -> void..typeof -> shift (target=15, len=0)
actionsTable[2238] = 32; // 'state 17' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 2245, 2247); // 'state 17' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 2248, 2251); // 'state 17' -> !..delete -> shift (target=15, len=0)
actionsTable[2251] = 34; // 'state 17' -> await -> shift (target=17, len=0)
actionsTable[2254] = 818; // 'state 17' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 2256, 2259); // 'state 17' -> number..template_string -> shift (target=399, len=0)
actionsTable[2265] = 36; // 'state 17' -> update_operator -> shift (target=18, len=0)
actionsTable[2266] = 798; // 'state 17' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 2304, 2309); // 'state 18' -> true..super -> shift (target=399, len=0)
actionsTable[2309] = 68; // 'state 18' -> { -> shift (target=34, len=0)
actionsTable[2312] = 4; // 'state 18' -> ( -> shift (target=2, len=0)
actionsTable[2322] = 806; // 'state 18' -> of -> shift (target=403, len=0)
actionsTable[2336] = 806; // 'state 18' -> from -> shift (target=403, len=0)
actionsTable[2340] = 806; // 'state 18' -> type -> shift (target=403, len=0)
actionsTable[2345] = 20; // 'state 18' -> [ -> shift (target=10, len=0)
actionsTable[2347] = 70; // 'state 18' -> async -> shift (target=35, len=0)
actionsTable[2348] = 72; // 'state 18' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 2351, 2353); // 'state 18' -> get..set -> shift (target=403, len=0)
actionsTable[2353] = 74; // 'state 18' -> class -> shift (target=37, len=0)
actionsTable[2358] = 28; // 'state 18' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 2363, 2365); // 'state 18' -> void..typeof -> shift (target=15, len=0)
actionsTable[2366] = 32; // 'state 18' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 2373, 2375); // 'state 18' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 2376, 2379); // 'state 18' -> !..delete -> shift (target=15, len=0)
actionsTable[2379] = 34; // 'state 18' -> await -> shift (target=17, len=0)
actionsTable[2382] = 818; // 'state 18' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 2384, 2387); // 'state 18' -> number..template_string -> shift (target=399, len=0)
actionsTable[2393] = 36; // 'state 18' -> update_operator -> shift (target=18, len=0)
actionsTable[2394] = 798; // 'state 18' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 2432, 2437); // 'state 19' -> true..super -> shift (target=399, len=0)
actionsTable[2437] = 2; // 'state 19' -> { -> shift (target=1, len=0)
actionsTable[2439] = 800; // 'state 19' -> if -> shift (target=400, len=0)
actionsTable[2440] = 4; // 'state 19' -> ( -> shift (target=2, len=0)
actionsTable[2443] = 802; // 'state 19' -> while -> shift (target=401, len=0)
actionsTable[2444] = 6; // 'state 19' -> do -> shift (target=3, len=0)
actionsTable[2446] = 804; // 'state 19' -> for -> shift (target=402, len=0)
actionsTable.fill(8, 2447, 2450); // 'state 19' -> const..var -> shift (target=4, len=0)
actionsTable[2450] = 806; // 'state 19' -> of -> shift (target=403, len=0)
actionsTable[2452] = 10; // 'state 19' -> return -> shift (target=5, len=0)
actionsTable[2453] = 12; // 'state 19' -> throw -> shift (target=6, len=0)
actionsTable[2454] = 14; // 'state 19' -> try -> shift (target=7, len=0)
actionsTable[2457] = 808; // 'state 19' -> switch -> shift (target=404, len=0)
actionsTable[2461] = 810; // 'state 19' -> break -> shift (target=405, len=0)
actionsTable[2462] = 812; // 'state 19' -> continue -> shift (target=406, len=0)
actionsTable[2463] = 16; // 'state 19' -> import -> shift (target=8, len=0)
actionsTable[2464] = 806; // 'state 19' -> from -> shift (target=403, len=0)
actionsTable[2468] = 814; // 'state 19' -> type -> shift (target=407, len=0)
actionsTable[2469] = 18; // 'state 19' -> export -> shift (target=9, len=0)
actionsTable[2473] = 20; // 'state 19' -> [ -> shift (target=10, len=0)
actionsTable[2475] = 22; // 'state 19' -> async -> shift (target=11, len=0)
actionsTable[2476] = 24; // 'state 19' -> function -> shift (target=12, len=0)
actionsTable.fill(806, 2479, 2481); // 'state 19' -> get..set -> shift (target=403, len=0)
actionsTable[2481] = 26; // 'state 19' -> class -> shift (target=13, len=0)
actionsTable[2484] = 816; // 'state 19' -> interface -> shift (target=408, len=0)
actionsTable[2486] = 28; // 'state 19' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 2491, 2493); // 'state 19' -> void..typeof -> shift (target=15, len=0)
actionsTable[2494] = 32; // 'state 19' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 2501, 2503); // 'state 19' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 2504, 2507); // 'state 19' -> !..delete -> shift (target=15, len=0)
actionsTable[2507] = 34; // 'state 19' -> await -> shift (target=17, len=0)
actionsTable[2510] = 818; // 'state 19' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 2512, 2515); // 'state 19' -> number..template_string -> shift (target=399, len=0)
actionsTable[2521] = 36; // 'state 19' -> update_operator -> shift (target=18, len=0)
actionsTable[2522] = 798; // 'state 19' -> regex -> shift (target=399, len=0)
actionsTable[2523] = 65534; // 'state 19' -> @par-gen.EOF -> done (target=0, len=0)
actionsTable[2587] = 164; // 'state 20' -> : -> shift (target=82, len=0)
actionsTable[2613] = 164; // 'state 20' -> ?: -> shift (target=82, len=0)
actionsTable[2618] = 162; // 'state 20' -> => -> shift (target=81, len=0)
actionsTable[2696] = 138; // 'state 21' -> ( -> shift (target=69, len=0)
actionsTable.fill(745, 2816, 2824); // 'state 22' -> true..if -> reduce (target=116, len=1)
actionsTable[2824] = 86; // 'state 22' -> ( -> shift (target=43, len=0)
actionsTable.fill(745, 2826, 2829); // 'state 22' -> else..do -> reduce (target=116, len=1)
actionsTable[2829] = 862; // 'state 22' -> ; -> shift (target=431, len=0)
actionsTable.fill(745, 2830, 2835); // 'state 22' -> for..of -> reduce (target=116, len=1)
actionsTable[2835] = 88; // 'state 22' -> in -> shift (target=44, len=0)
actionsTable.fill(745, 2836, 2839); // 'state 22' -> return..try -> reduce (target=116, len=1)
actionsTable.fill(745, 2841, 2843); // 'state 22' -> switch..case -> reduce (target=116, len=1)
actionsTable.fill(745, 2844, 2849); // 'state 22' -> default..from -> reduce (target=116, len=1)
actionsTable[2850] = 90; // 'state 22' -> * -> shift (target=45, len=0)
actionsTable[2851] = 92; // 'state 22' -> as -> shift (target=46, len=0)
actionsTable.fill(745, 2852, 2854); // 'state 22' -> type..export -> reduce (target=116, len=1)
actionsTable[2857] = 94; // 'state 22' -> [ -> shift (target=47, len=0)
actionsTable.fill(745, 2859, 2861); // 'state 22' -> async..function -> reduce (target=116, len=1)
actionsTable.fill(745, 2863, 2866); // 'state 22' -> get..class -> reduce (target=116, len=1)
actionsTable[2868] = 745; // 'state 22' -> interface -> reduce (target=116, len=1)
actionsTable.fill(88, 2870, 2872); // 'state 22' -> <..> -> shift (target=44, len=0)
actionsTable[2872] = 96; // 'state 22' -> | -> shift (target=48, len=0)
actionsTable[2873] = 98; // 'state 22' -> & -> shift (target=49, len=0)
actionsTable.fill(745, 2875, 2877); // 'state 22' -> void..typeof -> reduce (target=116, len=1)
actionsTable[2878] = 745; // 'state 22' -> new -> reduce (target=116, len=1)
actionsTable[2879] = 100; // 'state 22' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 2880, 2882); // 'state 22' -> ||..?? -> shift (target=51, len=0)
actionsTable[2882] = 104; // 'state 22' -> && -> shift (target=52, len=0)
actionsTable[2883] = 106; // 'state 22' -> ^ -> shift (target=53, len=0)
actionsTable[2884] = 88; // 'state 22' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 2885, 2887); // 'state 22' -> +..- -> shift (target=54, len=0)
actionsTable[2887] = 90; // 'state 22' -> ** -> shift (target=45, len=0)
actionsTable.fill(745, 2888, 2892); // 'state 22' -> !..await -> reduce (target=116, len=1)
actionsTable[2892] = 110; // 'state 22' -> ?. -> shift (target=55, len=0)
actionsTable[2893] = 864; // 'state 22' -> . -> shift (target=432, len=0)
actionsTable[2894] = 745; // 'state 22' -> identifier -> reduce (target=116, len=1)
actionsTable.fill(745, 2896, 2899); // 'state 22' -> number..template_string -> reduce (target=116, len=1)
actionsTable[2901] = 112; // 'state 22' -> equality_operator -> shift (target=56, len=0)
actionsTable[2902] = 88; // 'state 22' -> relational_operator -> shift (target=44, len=0)
actionsTable[2903] = 114; // 'state 22' -> shift_operator -> shift (target=57, len=0)
actionsTable[2904] = 90; // 'state 22' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[2905] = 866; // 'state 22' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(745, 2906, 2908); // 'state 22' -> regex..@par-gen.EOF -> reduce (target=116, len=1)
actionsTable.fill(871, 2944, 2967); // 'state 23' -> true..try -> reduce (target=179, len=1)
actionsTable.fill(871, 2969, 2971); // 'state 23' -> switch..case -> reduce (target=179, len=1)
actionsTable[2971] = 164; // 'state 23' -> : -> shift (target=82, len=0)
actionsTable.fill(871, 2972, 2982); // 'state 23' -> default..export -> reduce (target=179, len=1)
actionsTable.fill(871, 2985, 2994); // 'state 23' -> [..class -> reduce (target=179, len=1)
actionsTable.fill(871, 2995, 2997); // 'state 23' -> implements..interface -> reduce (target=179, len=1)
actionsTable[2997] = 164; // 'state 23' -> ?: -> shift (target=82, len=0)
actionsTable.fill(871, 2998, 3002); // 'state 23' -> <..& -> reduce (target=179, len=1)
actionsTable[3002] = 162; // 'state 23' -> => -> shift (target=81, len=0)
actionsTable.fill(871, 3003, 3005); // 'state 23' -> void..typeof -> reduce (target=179, len=1)
actionsTable.fill(871, 3006, 3028); // 'state 23' -> new..accessibility_modifier -> reduce (target=179, len=1)
actionsTable.fill(871, 3029, 3036); // 'state 23' -> equality_operator..@par-gen.EOF -> reduce (target=179, len=1)
actionsTable.fill(798, 3072, 3077); // 'state 24' -> true..super -> shift (target=399, len=0)
actionsTable[3077] = 68; // 'state 24' -> { -> shift (target=34, len=0)
actionsTable[3080] = 4; // 'state 24' -> ( -> shift (target=2, len=0)
actionsTable[3090] = 806; // 'state 24' -> of -> shift (target=403, len=0)
actionsTable[3104] = 806; // 'state 24' -> from -> shift (target=403, len=0)
actionsTable[3108] = 806; // 'state 24' -> type -> shift (target=403, len=0)
actionsTable[3113] = 20; // 'state 24' -> [ -> shift (target=10, len=0)
actionsTable[3115] = 70; // 'state 24' -> async -> shift (target=35, len=0)
actionsTable[3116] = 72; // 'state 24' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 3119, 3121); // 'state 24' -> get..set -> shift (target=403, len=0)
actionsTable[3121] = 74; // 'state 24' -> class -> shift (target=37, len=0)
actionsTable[3126] = 28; // 'state 24' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 3131, 3133); // 'state 24' -> void..typeof -> shift (target=15, len=0)
actionsTable[3134] = 32; // 'state 24' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 3141, 3143); // 'state 24' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 3144, 3147); // 'state 24' -> !..delete -> shift (target=15, len=0)
actionsTable[3147] = 34; // 'state 24' -> await -> shift (target=17, len=0)
actionsTable[3150] = 818; // 'state 24' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 3152, 3155); // 'state 24' -> number..template_string -> shift (target=399, len=0)
actionsTable[3161] = 36; // 'state 24' -> update_operator -> shift (target=18, len=0)
actionsTable[3162] = 798; // 'state 24' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 3200, 3205); // 'state 25' -> true..super -> shift (target=399, len=0)
actionsTable[3205] = 68; // 'state 25' -> { -> shift (target=34, len=0)
actionsTable[3208] = 4; // 'state 25' -> ( -> shift (target=2, len=0)
actionsTable[3218] = 806; // 'state 25' -> of -> shift (target=403, len=0)
actionsTable[3232] = 806; // 'state 25' -> from -> shift (target=403, len=0)
actionsTable[3233] = 192; // 'state 25' -> , -> shift (target=96, len=0)
actionsTable[3236] = 806; // 'state 25' -> type -> shift (target=403, len=0)
actionsTable[3240] = 48; // 'state 25' -> ... -> shift (target=24, len=0)
actionsTable[3241] = 20; // 'state 25' -> [ -> shift (target=10, len=0)
actionsTable[3242] = 906; // 'state 25' -> ] -> shift (target=453, len=0)
actionsTable[3243] = 70; // 'state 25' -> async -> shift (target=35, len=0)
actionsTable[3244] = 72; // 'state 25' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 3247, 3249); // 'state 25' -> get..set -> shift (target=403, len=0)
actionsTable[3249] = 74; // 'state 25' -> class -> shift (target=37, len=0)
actionsTable[3254] = 28; // 'state 25' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 3259, 3261); // 'state 25' -> void..typeof -> shift (target=15, len=0)
actionsTable[3262] = 32; // 'state 25' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 3269, 3271); // 'state 25' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 3272, 3275); // 'state 25' -> !..delete -> shift (target=15, len=0)
actionsTable[3275] = 34; // 'state 25' -> await -> shift (target=17, len=0)
actionsTable[3278] = 818; // 'state 25' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 3280, 3283); // 'state 25' -> number..template_string -> shift (target=399, len=0)
actionsTable[3289] = 36; // 'state 25' -> update_operator -> shift (target=18, len=0)
actionsTable[3290] = 798; // 'state 25' -> regex -> shift (target=399, len=0)
actionsTable.fill(869, 3328, 3336); // 'state 26' -> true..if -> reduce (target=178, len=1)
actionsTable[3336] = 130; // 'state 26' -> ( -> shift (target=65, len=0)
actionsTable.fill(869, 3339, 3346); // 'state 26' -> while..var -> reduce (target=178, len=1)
actionsTable[3346] = 806; // 'state 26' -> of -> shift (target=403, len=0)
actionsTable.fill(869, 3347, 3351); // 'state 26' -> in..try -> reduce (target=178, len=1)
actionsTable[3353] = 869; // 'state 26' -> switch -> reduce (target=178, len=1)
actionsTable[3355] = 869; // 'state 26' -> : -> reduce (target=178, len=1)
actionsTable.fill(869, 3357, 3360); // 'state 26' -> break..import -> reduce (target=178, len=1)
actionsTable[3360] = 806; // 'state 26' -> from -> shift (target=403, len=0)
actionsTable.fill(869, 3361, 3364); // 'state 26' -> ,..as -> reduce (target=178, len=1)
actionsTable[3364] = 806; // 'state 26' -> type -> shift (target=403, len=0)
actionsTable[3365] = 869; // 'state 26' -> export -> reduce (target=178, len=1)
actionsTable[3367] = 869; // 'state 26' -> = -> reduce (target=178, len=1)
actionsTable[3369] = 198; // 'state 26' -> [ -> shift (target=99, len=0)
actionsTable[3371] = 914; // 'state 26' -> async -> shift (target=457, len=0)
actionsTable[3372] = 132; // 'state 26' -> function -> shift (target=66, len=0)
actionsTable.fill(806, 3375, 3377); // 'state 26' -> get..set -> shift (target=403, len=0)
actionsTable[3377] = 869; // 'state 26' -> class -> reduce (target=178, len=1)
actionsTable.fill(869, 3380, 3382); // 'state 26' -> interface..?: -> reduce (target=178, len=1)
actionsTable[3382] = 28; // 'state 26' -> < -> shift (target=14, len=0)
actionsTable.fill(869, 3383, 3386); // 'state 26' -> >..& -> reduce (target=178, len=1)
actionsTable.fill(869, 3387, 3389); // 'state 26' -> void..typeof -> reduce (target=178, len=1)
actionsTable.fill(869, 3390, 3406); // 'state 26' -> new... -> reduce (target=178, len=1)
actionsTable[3406] = 916; // 'state 26' -> identifier -> shift (target=458, len=0)
actionsTable.fill(848, 3408, 3410); // 'state 26' -> number..string -> shift (target=424, len=0)
actionsTable[3410] = 869; // 'state 26' -> template_string -> reduce (target=178, len=1)
actionsTable.fill(869, 3412, 3419); // 'state 26' -> compound_assignment_operator..regex -> reduce (target=178, len=1)
actionsTable.fill(869, 3456, 3465); // 'state 27' -> true..( -> reduce (target=178, len=1)
actionsTable.fill(869, 3467, 3474); // 'state 27' -> while..var -> reduce (target=178, len=1)
actionsTable[3474] = 806; // 'state 27' -> of -> shift (target=403, len=0)
actionsTable.fill(869, 3475, 3479); // 'state 27' -> in..try -> reduce (target=178, len=1)
actionsTable[3481] = 869; // 'state 27' -> switch -> reduce (target=178, len=1)
actionsTable[3483] = 869; // 'state 27' -> : -> reduce (target=178, len=1)
actionsTable.fill(869, 3485, 3488); // 'state 27' -> break..import -> reduce (target=178, len=1)
actionsTable[3488] = 806; // 'state 27' -> from -> shift (target=403, len=0)
actionsTable.fill(869, 3489, 3492); // 'state 27' -> ,..as -> reduce (target=178, len=1)
actionsTable[3492] = 806; // 'state 27' -> type -> shift (target=403, len=0)
actionsTable[3493] = 869; // 'state 27' -> export -> reduce (target=178, len=1)
actionsTable[3495] = 869; // 'state 27' -> = -> reduce (target=178, len=1)
actionsTable[3497] = 198; // 'state 27' -> [ -> shift (target=99, len=0)
actionsTable[3499] = 914; // 'state 27' -> async -> shift (target=457, len=0)
actionsTable[3500] = 869; // 'state 27' -> function -> reduce (target=178, len=1)
actionsTable.fill(806, 3503, 3505); // 'state 27' -> get..set -> shift (target=403, len=0)
actionsTable[3505] = 869; // 'state 27' -> class -> reduce (target=178, len=1)
actionsTable.fill(869, 3508, 3514); // 'state 27' -> interface..& -> reduce (target=178, len=1)
actionsTable.fill(869, 3515, 3517); // 'state 27' -> void..typeof -> reduce (target=178, len=1)
actionsTable.fill(869, 3518, 3534); // 'state 27' -> new... -> reduce (target=178, len=1)
actionsTable[3534] = 848; // 'state 27' -> identifier -> shift (target=424, len=0)
actionsTable.fill(848, 3536, 3538); // 'state 27' -> number..string -> shift (target=424, len=0)
actionsTable[3538] = 869; // 'state 27' -> template_string -> reduce (target=178, len=1)
actionsTable.fill(869, 3540, 3547); // 'state 27' -> compound_assignment_operator..regex -> reduce (target=178, len=1)
actionsTable.fill(798, 3584, 3589); // 'state 28' -> true..super -> shift (target=399, len=0)
actionsTable[3589] = 2; // 'state 28' -> { -> shift (target=1, len=0)
actionsTable[3590] = 910; // 'state 28' -> } -> shift (target=455, len=0)
actionsTable[3591] = 800; // 'state 28' -> if -> shift (target=400, len=0)
actionsTable[3592] = 4; // 'state 28' -> ( -> shift (target=2, len=0)
actionsTable[3595] = 802; // 'state 28' -> while -> shift (target=401, len=0)
actionsTable[3596] = 6; // 'state 28' -> do -> shift (target=3, len=0)
actionsTable[3598] = 804; // 'state 28' -> for -> shift (target=402, len=0)
actionsTable.fill(8, 3599, 3602); // 'state 28' -> const..var -> shift (target=4, len=0)
actionsTable[3602] = 806; // 'state 28' -> of -> shift (target=403, len=0)
actionsTable[3604] = 10; // 'state 28' -> return -> shift (target=5, len=0)
actionsTable[3605] = 12; // 'state 28' -> throw -> shift (target=6, len=0)
actionsTable[3606] = 14; // 'state 28' -> try -> shift (target=7, len=0)
actionsTable[3609] = 808; // 'state 28' -> switch -> shift (target=404, len=0)
actionsTable[3613] = 810; // 'state 28' -> break -> shift (target=405, len=0)
actionsTable[3614] = 812; // 'state 28' -> continue -> shift (target=406, len=0)
actionsTable[3615] = 16; // 'state 28' -> import -> shift (target=8, len=0)
actionsTable[3616] = 806; // 'state 28' -> from -> shift (target=403, len=0)
actionsTable[3620] = 814; // 'state 28' -> type -> shift (target=407, len=0)
actionsTable[3621] = 18; // 'state 28' -> export -> shift (target=9, len=0)
actionsTable[3625] = 20; // 'state 28' -> [ -> shift (target=10, len=0)
actionsTable[3627] = 22; // 'state 28' -> async -> shift (target=11, len=0)
actionsTable[3628] = 24; // 'state 28' -> function -> shift (target=12, len=0)
actionsTable.fill(806, 3631, 3633); // 'state 28' -> get..set -> shift (target=403, len=0)
actionsTable[3633] = 26; // 'state 28' -> class -> shift (target=13, len=0)
actionsTable[3636] = 816; // 'state 28' -> interface -> shift (target=408, len=0)
actionsTable[3638] = 28; // 'state 28' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 3643, 3645); // 'state 28' -> void..typeof -> shift (target=15, len=0)
actionsTable[3646] = 32; // 'state 28' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 3653, 3655); // 'state 28' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 3656, 3659); // 'state 28' -> !..delete -> shift (target=15, len=0)
actionsTable[3659] = 34; // 'state 28' -> await -> shift (target=17, len=0)
actionsTable[3662] = 818; // 'state 28' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 3664, 3667); // 'state 28' -> number..template_string -> shift (target=399, len=0)
actionsTable[3673] = 36; // 'state 28' -> update_operator -> shift (target=18, len=0)
actionsTable[3674] = 798; // 'state 28' -> regex -> shift (target=399, len=0)
actionsTable[3718] = 920; // 'state 29' -> } -> shift (target=460, len=0)
actionsTable[3745] = 204; // 'state 29' -> , -> shift (target=102, len=0)
actionsTable[3848] = 138; // 'state 30' -> ( -> shift (target=69, len=0)
actionsTable[3867] = 206; // 'state 30' -> : -> shift (target=103, len=0)
actionsTable[3894] = 28; // 'state 30' -> < -> shift (target=14, len=0)
actionsTable.fill(798, 3968, 3973); // 'state 31' -> true..super -> shift (target=399, len=0)
actionsTable[3973] = 68; // 'state 31' -> { -> shift (target=34, len=0)
actionsTable[3976] = 4; // 'state 31' -> ( -> shift (target=2, len=0)
actionsTable[3986] = 806; // 'state 31' -> of -> shift (target=403, len=0)
actionsTable[4000] = 806; // 'state 31' -> from -> shift (target=403, len=0)
actionsTable[4004] = 806; // 'state 31' -> type -> shift (target=403, len=0)
actionsTable[4009] = 20; // 'state 31' -> [ -> shift (target=10, len=0)
actionsTable[4011] = 70; // 'state 31' -> async -> shift (target=35, len=0)
actionsTable[4012] = 72; // 'state 31' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 4015, 4017); // 'state 31' -> get..set -> shift (target=403, len=0)
actionsTable[4017] = 74; // 'state 31' -> class -> shift (target=37, len=0)
actionsTable[4022] = 28; // 'state 31' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 4027, 4029); // 'state 31' -> void..typeof -> shift (target=15, len=0)
actionsTable[4030] = 32; // 'state 31' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 4037, 4039); // 'state 31' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 4040, 4043); // 'state 31' -> !..delete -> shift (target=15, len=0)
actionsTable[4043] = 34; // 'state 31' -> await -> shift (target=17, len=0)
actionsTable[4046] = 818; // 'state 31' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 4048, 4051); // 'state 31' -> number..template_string -> shift (target=399, len=0)
actionsTable[4057] = 36; // 'state 31' -> update_operator -> shift (target=18, len=0)
actionsTable[4058] = 798; // 'state 31' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 4096, 4101); // 'state 32' -> true..super -> shift (target=399, len=0)
actionsTable[4101] = 68; // 'state 32' -> { -> shift (target=34, len=0)
actionsTable[4104] = 4; // 'state 32' -> ( -> shift (target=2, len=0)
actionsTable[4114] = 806; // 'state 32' -> of -> shift (target=403, len=0)
actionsTable[4128] = 806; // 'state 32' -> from -> shift (target=403, len=0)
actionsTable[4132] = 806; // 'state 32' -> type -> shift (target=403, len=0)
actionsTable[4137] = 20; // 'state 32' -> [ -> shift (target=10, len=0)
actionsTable[4139] = 70; // 'state 32' -> async -> shift (target=35, len=0)
actionsTable[4140] = 72; // 'state 32' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 4143, 4145); // 'state 32' -> get..set -> shift (target=403, len=0)
actionsTable[4145] = 74; // 'state 32' -> class -> shift (target=37, len=0)
actionsTable[4150] = 28; // 'state 32' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 4155, 4157); // 'state 32' -> void..typeof -> shift (target=15, len=0)
actionsTable[4158] = 32; // 'state 32' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 4165, 4167); // 'state 32' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 4168, 4171); // 'state 32' -> !..delete -> shift (target=15, len=0)
actionsTable[4171] = 34; // 'state 32' -> await -> shift (target=17, len=0)
actionsTable[4174] = 818; // 'state 32' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 4176, 4179); // 'state 32' -> number..template_string -> shift (target=399, len=0)
actionsTable[4185] = 36; // 'state 32' -> update_operator -> shift (target=18, len=0)
actionsTable[4186] = 798; // 'state 32' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 4224, 4229); // 'state 33' -> true..super -> shift (target=399, len=0)
actionsTable[4229] = 68; // 'state 33' -> { -> shift (target=34, len=0)
actionsTable[4232] = 4; // 'state 33' -> ( -> shift (target=2, len=0)
actionsTable[4237] = 218; // 'state 33' -> ; -> shift (target=109, len=0)
actionsTable.fill(220, 4239, 4242); // 'state 33' -> const..var -> shift (target=110, len=0)
actionsTable[4242] = 806; // 'state 33' -> of -> shift (target=403, len=0)
actionsTable[4256] = 806; // 'state 33' -> from -> shift (target=403, len=0)
actionsTable[4260] = 806; // 'state 33' -> type -> shift (target=403, len=0)
actionsTable[4265] = 20; // 'state 33' -> [ -> shift (target=10, len=0)
actionsTable[4267] = 70; // 'state 33' -> async -> shift (target=35, len=0)
actionsTable[4268] = 72; // 'state 33' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 4271, 4273); // 'state 33' -> get..set -> shift (target=403, len=0)
actionsTable[4273] = 74; // 'state 33' -> class -> shift (target=37, len=0)
actionsTable[4278] = 28; // 'state 33' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 4283, 4285); // 'state 33' -> void..typeof -> shift (target=15, len=0)
actionsTable[4286] = 32; // 'state 33' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 4293, 4295); // 'state 33' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 4296, 4299); // 'state 33' -> !..delete -> shift (target=15, len=0)
actionsTable[4299] = 34; // 'state 33' -> await -> shift (target=17, len=0)
actionsTable[4302] = 818; // 'state 33' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 4304, 4307); // 'state 33' -> number..template_string -> shift (target=399, len=0)
actionsTable[4313] = 36; // 'state 33' -> update_operator -> shift (target=18, len=0)
actionsTable[4314] = 798; // 'state 33' -> regex -> shift (target=399, len=0)
actionsTable[4358] = 928; // 'state 34' -> } -> shift (target=464, len=0)
actionsTable[4370] = 806; // 'state 34' -> of -> shift (target=403, len=0)
actionsTable[4384] = 806; // 'state 34' -> from -> shift (target=403, len=0)
actionsTable[4388] = 806; // 'state 34' -> type -> shift (target=403, len=0)
actionsTable[4392] = 48; // 'state 34' -> ... -> shift (target=24, len=0)
actionsTable[4393] = 198; // 'state 34' -> [ -> shift (target=99, len=0)
actionsTable[4395] = 226; // 'state 34' -> async -> shift (target=113, len=0)
actionsTable.fill(54, 4399, 4401); // 'state 34' -> get..set -> shift (target=27, len=0)
actionsTable[4430] = 930; // 'state 34' -> identifier -> shift (target=465, len=0)
actionsTable.fill(848, 4432, 4434); // 'state 34' -> number..string -> shift (target=424, len=0)
actionsTable.fill(869, 4480, 4488); // 'state 35' -> true..if -> reduce (target=178, len=1)
actionsTable[4488] = 130; // 'state 35' -> ( -> shift (target=65, len=0)
actionsTable.fill(869, 4489, 4503); // 'state 35' -> )..try -> reduce (target=178, len=1)
actionsTable.fill(869, 4505, 4518); // 'state 35' -> switch..export -> reduce (target=178, len=1)
actionsTable[4519] = 869; // 'state 35' -> = -> reduce (target=178, len=1)
actionsTable.fill(869, 4521, 4524); // 'state 35' -> [..async -> reduce (target=178, len=1)
actionsTable[4524] = 224; // 'state 35' -> function -> shift (target=112, len=0)
actionsTable.fill(869, 4525, 4530); // 'state 35' -> static..class -> reduce (target=178, len=1)
actionsTable.fill(869, 4531, 4533); // 'state 35' -> implements..interface -> reduce (target=178, len=1)
actionsTable[4534] = 28; // 'state 35' -> < -> shift (target=14, len=0)
actionsTable.fill(869, 4535, 4538); // 'state 35' -> >..& -> reduce (target=178, len=1)
actionsTable.fill(869, 4539, 4541); // 'state 35' -> void..typeof -> reduce (target=178, len=1)
actionsTable.fill(869, 4542, 4558); // 'state 35' -> new... -> reduce (target=178, len=1)
actionsTable[4558] = 896; // 'state 35' -> identifier -> shift (target=448, len=0)
actionsTable.fill(869, 4559, 4572); // 'state 35' -> private_property_identifier..@par-gen.EOF -> reduce (target=178, len=1)
actionsTable[4616] = 138; // 'state 36' -> ( -> shift (target=69, len=0)
actionsTable[4662] = 28; // 'state 36' -> < -> shift (target=14, len=0)
actionsTable[4686] = 228; // 'state 36' -> identifier -> shift (target=114, len=0)
actionsTable[4741] = 146; // 'state 37' -> { -> shift (target=73, len=0)
actionsTable[4786] = 148; // 'state 37' -> extends -> shift (target=74, len=0)
actionsTable[4787] = 150; // 'state 37' -> implements -> shift (target=75, len=0)
actionsTable[4790] = 28; // 'state 37' -> < -> shift (target=14, len=0)
actionsTable[4814] = 230; // 'state 37' -> identifier -> shift (target=115, len=0)
actionsTable.fill(1233, 4864, 4872); // 'state 38' -> true..if -> reduce (target=104, len=2)
actionsTable[4872] = 86; // 'state 38' -> ( -> shift (target=43, len=0)
actionsTable.fill(1233, 4874, 4877); // 'state 38' -> else..do -> reduce (target=104, len=2)
actionsTable[4877] = 926; // 'state 38' -> ; -> shift (target=463, len=0)
actionsTable.fill(1233, 4878, 4883); // 'state 38' -> for..of -> reduce (target=104, len=2)
actionsTable[4883] = 88; // 'state 38' -> in -> shift (target=44, len=0)
actionsTable.fill(1233, 4884, 4887); // 'state 38' -> return..try -> reduce (target=104, len=2)
actionsTable.fill(1233, 4889, 4891); // 'state 38' -> switch..case -> reduce (target=104, len=2)
actionsTable.fill(1233, 4892, 4897); // 'state 38' -> default..from -> reduce (target=104, len=2)
actionsTable[4898] = 90; // 'state 38' -> * -> shift (target=45, len=0)
actionsTable[4899] = 92; // 'state 38' -> as -> shift (target=46, len=0)
actionsTable.fill(1233, 4900, 4902); // 'state 38' -> type..export -> reduce (target=104, len=2)
actionsTable[4905] = 94; // 'state 38' -> [ -> shift (target=47, len=0)
actionsTable.fill(1233, 4907, 4909); // 'state 38' -> async..function -> reduce (target=104, len=2)
actionsTable.fill(1233, 4911, 4914); // 'state 38' -> get..class -> reduce (target=104, len=2)
actionsTable[4916] = 1233; // 'state 38' -> interface -> reduce (target=104, len=2)
actionsTable.fill(88, 4918, 4920); // 'state 38' -> <..> -> shift (target=44, len=0)
actionsTable[4920] = 96; // 'state 38' -> | -> shift (target=48, len=0)
actionsTable[4921] = 98; // 'state 38' -> & -> shift (target=49, len=0)
actionsTable.fill(1233, 4923, 4925); // 'state 38' -> void..typeof -> reduce (target=104, len=2)
actionsTable[4926] = 1233; // 'state 38' -> new -> reduce (target=104, len=2)
actionsTable[4927] = 100; // 'state 38' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 4928, 4930); // 'state 38' -> ||..?? -> shift (target=51, len=0)
actionsTable[4930] = 104; // 'state 38' -> && -> shift (target=52, len=0)
actionsTable[4931] = 106; // 'state 38' -> ^ -> shift (target=53, len=0)
actionsTable[4932] = 88; // 'state 38' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 4933, 4935); // 'state 38' -> +..- -> shift (target=54, len=0)
actionsTable[4935] = 90; // 'state 38' -> ** -> shift (target=45, len=0)
actionsTable.fill(1233, 4936, 4940); // 'state 38' -> !..await -> reduce (target=104, len=2)
actionsTable[4940] = 110; // 'state 38' -> ?. -> shift (target=55, len=0)
actionsTable[4941] = 864; // 'state 38' -> . -> shift (target=432, len=0)
actionsTable[4942] = 1233; // 'state 38' -> identifier -> reduce (target=104, len=2)
actionsTable.fill(1233, 4944, 4947); // 'state 38' -> number..template_string -> reduce (target=104, len=2)
actionsTable[4949] = 112; // 'state 38' -> equality_operator -> shift (target=56, len=0)
actionsTable[4950] = 88; // 'state 38' -> relational_operator -> shift (target=44, len=0)
actionsTable[4951] = 114; // 'state 38' -> shift_operator -> shift (target=57, len=0)
actionsTable[4952] = 90; // 'state 38' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[4953] = 866; // 'state 38' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(1233, 4954, 4956); // 'state 38' -> regex..@par-gen.EOF -> reduce (target=104, len=2)
actionsTable.fill(1235, 4992, 5000); // 'state 39' -> true..if -> reduce (target=105, len=2)
actionsTable[5000] = 86; // 'state 39' -> ( -> shift (target=43, len=0)
actionsTable.fill(1235, 5002, 5005); // 'state 39' -> else..do -> reduce (target=105, len=2)
actionsTable[5005] = 932; // 'state 39' -> ; -> shift (target=466, len=0)
actionsTable.fill(1235, 5006, 5011); // 'state 39' -> for..of -> reduce (target=105, len=2)
actionsTable[5011] = 88; // 'state 39' -> in -> shift (target=44, len=0)
actionsTable.fill(1235, 5012, 5015); // 'state 39' -> return..try -> reduce (target=105, len=2)
actionsTable.fill(1235, 5017, 5019); // 'state 39' -> switch..case -> reduce (target=105, len=2)
actionsTable.fill(1235, 5020, 5025); // 'state 39' -> default..from -> reduce (target=105, len=2)
actionsTable[5026] = 90; // 'state 39' -> * -> shift (target=45, len=0)
actionsTable[5027] = 92; // 'state 39' -> as -> shift (target=46, len=0)
actionsTable.fill(1235, 5028, 5030); // 'state 39' -> type..export -> reduce (target=105, len=2)
actionsTable[5033] = 94; // 'state 39' -> [ -> shift (target=47, len=0)
actionsTable.fill(1235, 5035, 5037); // 'state 39' -> async..function -> reduce (target=105, len=2)
actionsTable.fill(1235, 5039, 5042); // 'state 39' -> get..class -> reduce (target=105, len=2)
actionsTable[5044] = 1235; // 'state 39' -> interface -> reduce (target=105, len=2)
actionsTable.fill(88, 5046, 5048); // 'state 39' -> <..> -> shift (target=44, len=0)
actionsTable[5048] = 96; // 'state 39' -> | -> shift (target=48, len=0)
actionsTable[5049] = 98; // 'state 39' -> & -> shift (target=49, len=0)
actionsTable.fill(1235, 5051, 5053); // 'state 39' -> void..typeof -> reduce (target=105, len=2)
actionsTable[5054] = 1235; // 'state 39' -> new -> reduce (target=105, len=2)
actionsTable[5055] = 100; // 'state 39' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 5056, 5058); // 'state 39' -> ||..?? -> shift (target=51, len=0)
actionsTable[5058] = 104; // 'state 39' -> && -> shift (target=52, len=0)
actionsTable[5059] = 106; // 'state 39' -> ^ -> shift (target=53, len=0)
actionsTable[5060] = 88; // 'state 39' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 5061, 5063); // 'state 39' -> +..- -> shift (target=54, len=0)
actionsTable[5063] = 90; // 'state 39' -> ** -> shift (target=45, len=0)
actionsTable.fill(1235, 5064, 5068); // 'state 39' -> !..await -> reduce (target=105, len=2)
actionsTable[5068] = 110; // 'state 39' -> ?. -> shift (target=55, len=0)
actionsTable[5069] = 864; // 'state 39' -> . -> shift (target=432, len=0)
actionsTable[5070] = 1235; // 'state 39' -> identifier -> reduce (target=105, len=2)
actionsTable.fill(1235, 5072, 5075); // 'state 39' -> number..template_string -> reduce (target=105, len=2)
actionsTable[5077] = 112; // 'state 39' -> equality_operator -> shift (target=56, len=0)
actionsTable[5078] = 88; // 'state 39' -> relational_operator -> shift (target=44, len=0)
actionsTable[5079] = 114; // 'state 39' -> shift_operator -> shift (target=57, len=0)
actionsTable[5080] = 90; // 'state 39' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[5081] = 866; // 'state 39' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(1235, 5082, 5084); // 'state 39' -> regex..@par-gen.EOF -> reduce (target=105, len=2)
actionsTable.fill(798, 5120, 5125); // 'state 40' -> true..super -> shift (target=399, len=0)
actionsTable[5125] = 2; // 'state 40' -> { -> shift (target=1, len=0)
actionsTable[5126] = 936; // 'state 40' -> } -> shift (target=468, len=0)
actionsTable[5127] = 800; // 'state 40' -> if -> shift (target=400, len=0)
actionsTable[5128] = 4; // 'state 40' -> ( -> shift (target=2, len=0)
actionsTable[5131] = 802; // 'state 40' -> while -> shift (target=401, len=0)
actionsTable[5132] = 6; // 'state 40' -> do -> shift (target=3, len=0)
actionsTable[5134] = 804; // 'state 40' -> for -> shift (target=402, len=0)
actionsTable.fill(8, 5135, 5138); // 'state 40' -> const..var -> shift (target=4, len=0)
actionsTable[5138] = 806; // 'state 40' -> of -> shift (target=403, len=0)
actionsTable[5140] = 10; // 'state 40' -> return -> shift (target=5, len=0)
actionsTable[5141] = 12; // 'state 40' -> throw -> shift (target=6, len=0)
actionsTable[5142] = 14; // 'state 40' -> try -> shift (target=7, len=0)
actionsTable[5145] = 808; // 'state 40' -> switch -> shift (target=404, len=0)
actionsTable[5149] = 810; // 'state 40' -> break -> shift (target=405, len=0)
actionsTable[5150] = 812; // 'state 40' -> continue -> shift (target=406, len=0)
actionsTable[5151] = 16; // 'state 40' -> import -> shift (target=8, len=0)
actionsTable[5152] = 806; // 'state 40' -> from -> shift (target=403, len=0)
actionsTable[5156] = 814; // 'state 40' -> type -> shift (target=407, len=0)
actionsTable[5157] = 18; // 'state 40' -> export -> shift (target=9, len=0)
actionsTable[5161] = 20; // 'state 40' -> [ -> shift (target=10, len=0)
actionsTable[5163] = 22; // 'state 40' -> async -> shift (target=11, len=0)
actionsTable[5164] = 24; // 'state 40' -> function -> shift (target=12, len=0)
actionsTable.fill(806, 5167, 5169); // 'state 40' -> get..set -> shift (target=403, len=0)
actionsTable[5169] = 26; // 'state 40' -> class -> shift (target=13, len=0)
actionsTable[5172] = 816; // 'state 40' -> interface -> shift (target=408, len=0)
actionsTable[5174] = 28; // 'state 40' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 5179, 5181); // 'state 40' -> void..typeof -> shift (target=15, len=0)
actionsTable[5182] = 32; // 'state 40' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 5189, 5191); // 'state 40' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 5192, 5195); // 'state 40' -> !..delete -> shift (target=15, len=0)
actionsTable[5195] = 34; // 'state 40' -> await -> shift (target=17, len=0)
actionsTable[5198] = 818; // 'state 40' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 5200, 5203); // 'state 40' -> number..template_string -> shift (target=399, len=0)
actionsTable[5209] = 36; // 'state 40' -> update_operator -> shift (target=18, len=0)
actionsTable[5210] = 798; // 'state 40' -> regex -> shift (target=399, len=0)
actionsTable.fill(1237, 5248, 5257); // 'state 41' -> true..( -> reduce (target=106, len=2)
actionsTable.fill(1237, 5258, 5261); // 'state 41' -> else..do -> reduce (target=106, len=2)
actionsTable.fill(1237, 5262, 5267); // 'state 41' -> for..of -> reduce (target=106, len=2)
actionsTable.fill(1237, 5268, 5271); // 'state 41' -> return..try -> reduce (target=106, len=2)
actionsTable[5271] = 232; // 'state 41' -> catch -> shift (target=116, len=0)
actionsTable[5272] = 234; // 'state 41' -> finally -> shift (target=117, len=0)
actionsTable.fill(1237, 5273, 5275); // 'state 41' -> switch..case -> reduce (target=106, len=2)
actionsTable.fill(1237, 5276, 5281); // 'state 41' -> default..from -> reduce (target=106, len=2)
actionsTable.fill(1237, 5284, 5286); // 'state 41' -> type..export -> reduce (target=106, len=2)
actionsTable[5289] = 1237; // 'state 41' -> [ -> reduce (target=106, len=2)
actionsTable.fill(1237, 5291, 5293); // 'state 41' -> async..function -> reduce (target=106, len=2)
actionsTable.fill(1237, 5295, 5298); // 'state 41' -> get..class -> reduce (target=106, len=2)
actionsTable[5300] = 1237; // 'state 41' -> interface -> reduce (target=106, len=2)
actionsTable[5302] = 1237; // 'state 41' -> < -> reduce (target=106, len=2)
actionsTable.fill(1237, 5307, 5309); // 'state 41' -> void..typeof -> reduce (target=106, len=2)
actionsTable[5310] = 1237; // 'state 41' -> new -> reduce (target=106, len=2)
actionsTable.fill(1237, 5317, 5319); // 'state 41' -> +..- -> reduce (target=106, len=2)
actionsTable.fill(1237, 5320, 5324); // 'state 41' -> !..await -> reduce (target=106, len=2)
actionsTable[5326] = 1237; // 'state 41' -> identifier -> reduce (target=106, len=2)
actionsTable.fill(1237, 5328, 5331); // 'state 41' -> number..template_string -> reduce (target=106, len=2)
actionsTable.fill(1237, 5337, 5340); // 'state 41' -> update_operator..@par-gen.EOF -> reduce (target=106, len=2)
actionsTable.fill(798, 5376, 5381); // 'state 42' -> true..super -> shift (target=399, len=0)
actionsTable[5381] = 68; // 'state 42' -> { -> shift (target=34, len=0)
actionsTable[5384] = 4; // 'state 42' -> ( -> shift (target=2, len=0)
actionsTable[5394] = 806; // 'state 42' -> of -> shift (target=403, len=0)
actionsTable[5408] = 806; // 'state 42' -> from -> shift (target=403, len=0)
actionsTable[5412] = 806; // 'state 42' -> type -> shift (target=403, len=0)
actionsTable[5417] = 20; // 'state 42' -> [ -> shift (target=10, len=0)
actionsTable[5419] = 70; // 'state 42' -> async -> shift (target=35, len=0)
actionsTable[5420] = 72; // 'state 42' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 5423, 5425); // 'state 42' -> get..set -> shift (target=403, len=0)
actionsTable[5425] = 74; // 'state 42' -> class -> shift (target=37, len=0)
actionsTable[5430] = 28; // 'state 42' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 5435, 5437); // 'state 42' -> void..typeof -> shift (target=15, len=0)
actionsTable[5438] = 32; // 'state 42' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 5445, 5447); // 'state 42' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 5448, 5451); // 'state 42' -> !..delete -> shift (target=15, len=0)
actionsTable[5451] = 34; // 'state 42' -> await -> shift (target=17, len=0)
actionsTable[5454] = 818; // 'state 42' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 5456, 5459); // 'state 42' -> number..template_string -> shift (target=399, len=0)
actionsTable[5465] = 36; // 'state 42' -> update_operator -> shift (target=18, len=0)
actionsTable[5466] = 798; // 'state 42' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 5504, 5509); // 'state 43' -> true..super -> shift (target=399, len=0)
actionsTable[5509] = 68; // 'state 43' -> { -> shift (target=34, len=0)
actionsTable[5512] = 4; // 'state 43' -> ( -> shift (target=2, len=0)
actionsTable[5513] = 960; // 'state 43' -> ) -> shift (target=480, len=0)
actionsTable[5522] = 806; // 'state 43' -> of -> shift (target=403, len=0)
actionsTable[5536] = 806; // 'state 43' -> from -> shift (target=403, len=0)
actionsTable[5540] = 806; // 'state 43' -> type -> shift (target=403, len=0)
actionsTable[5544] = 48; // 'state 43' -> ... -> shift (target=24, len=0)
actionsTable[5545] = 20; // 'state 43' -> [ -> shift (target=10, len=0)
actionsTable[5547] = 70; // 'state 43' -> async -> shift (target=35, len=0)
actionsTable[5548] = 72; // 'state 43' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 5551, 5553); // 'state 43' -> get..set -> shift (target=403, len=0)
actionsTable[5553] = 74; // 'state 43' -> class -> shift (target=37, len=0)
actionsTable[5558] = 28; // 'state 43' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 5563, 5565); // 'state 43' -> void..typeof -> shift (target=15, len=0)
actionsTable[5566] = 32; // 'state 43' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 5573, 5575); // 'state 43' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 5576, 5579); // 'state 43' -> !..delete -> shift (target=15, len=0)
actionsTable[5579] = 34; // 'state 43' -> await -> shift (target=17, len=0)
actionsTable[5582] = 818; // 'state 43' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 5584, 5587); // 'state 43' -> number..template_string -> shift (target=399, len=0)
actionsTable[5593] = 36; // 'state 43' -> update_operator -> shift (target=18, len=0)
actionsTable[5594] = 798; // 'state 43' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 5632, 5637); // 'state 44' -> true..super -> shift (target=399, len=0)
actionsTable[5637] = 68; // 'state 44' -> { -> shift (target=34, len=0)
actionsTable[5640] = 4; // 'state 44' -> ( -> shift (target=2, len=0)
actionsTable[5650] = 806; // 'state 44' -> of -> shift (target=403, len=0)
actionsTable[5664] = 806; // 'state 44' -> from -> shift (target=403, len=0)
actionsTable[5668] = 806; // 'state 44' -> type -> shift (target=403, len=0)
actionsTable[5673] = 20; // 'state 44' -> [ -> shift (target=10, len=0)
actionsTable[5675] = 70; // 'state 44' -> async -> shift (target=35, len=0)
actionsTable[5676] = 72; // 'state 44' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 5679, 5681); // 'state 44' -> get..set -> shift (target=403, len=0)
actionsTable[5681] = 74; // 'state 44' -> class -> shift (target=37, len=0)
actionsTable[5686] = 28; // 'state 44' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 5691, 5693); // 'state 44' -> void..typeof -> shift (target=15, len=0)
actionsTable[5694] = 32; // 'state 44' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 5701, 5703); // 'state 44' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 5704, 5707); // 'state 44' -> !..delete -> shift (target=15, len=0)
actionsTable[5707] = 34; // 'state 44' -> await -> shift (target=17, len=0)
actionsTable[5710] = 818; // 'state 44' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 5712, 5715); // 'state 44' -> number..template_string -> shift (target=399, len=0)
actionsTable[5721] = 36; // 'state 44' -> update_operator -> shift (target=18, len=0)
actionsTable[5722] = 798; // 'state 44' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 5760, 5765); // 'state 45' -> true..super -> shift (target=399, len=0)
actionsTable[5765] = 68; // 'state 45' -> { -> shift (target=34, len=0)
actionsTable[5768] = 4; // 'state 45' -> ( -> shift (target=2, len=0)
actionsTable[5778] = 806; // 'state 45' -> of -> shift (target=403, len=0)
actionsTable[5792] = 806; // 'state 45' -> from -> shift (target=403, len=0)
actionsTable[5796] = 806; // 'state 45' -> type -> shift (target=403, len=0)
actionsTable[5801] = 20; // 'state 45' -> [ -> shift (target=10, len=0)
actionsTable[5803] = 70; // 'state 45' -> async -> shift (target=35, len=0)
actionsTable[5804] = 72; // 'state 45' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 5807, 5809); // 'state 45' -> get..set -> shift (target=403, len=0)
actionsTable[5809] = 74; // 'state 45' -> class -> shift (target=37, len=0)
actionsTable[5814] = 28; // 'state 45' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 5819, 5821); // 'state 45' -> void..typeof -> shift (target=15, len=0)
actionsTable[5822] = 32; // 'state 45' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 5829, 5831); // 'state 45' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 5832, 5835); // 'state 45' -> !..delete -> shift (target=15, len=0)
actionsTable[5835] = 34; // 'state 45' -> await -> shift (target=17, len=0)
actionsTable[5838] = 818; // 'state 45' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 5840, 5843); // 'state 45' -> number..template_string -> shift (target=399, len=0)
actionsTable[5849] = 36; // 'state 45' -> update_operator -> shift (target=18, len=0)
actionsTable[5850] = 798; // 'state 45' -> regex -> shift (target=399, len=0)
actionsTable.fill(942, 5888, 5891); // 'state 46' -> true..null -> shift (target=471, len=0)
actionsTable[5893] = 262; // 'state 46' -> { -> shift (target=131, len=0)
actionsTable[5896] = 264; // 'state 46' -> ( -> shift (target=132, len=0)
actionsTable[5929] = 266; // 'state 46' -> [ -> shift (target=133, len=0)
actionsTable[5942] = 28; // 'state 46' -> < -> shift (target=14, len=0)
actionsTable[5944] = 268; // 'state 46' -> | -> shift (target=134, len=0)
actionsTable[5947] = 942; // 'state 46' -> void -> shift (target=471, len=0)
actionsTable[5948] = 944; // 'state 46' -> typeof -> shift (target=472, len=0)
actionsTable[5966] = 270; // 'state 46' -> identifier -> shift (target=135, len=0)
actionsTable.fill(942, 5968, 5970); // 'state 46' -> number..string -> shift (target=471, len=0)
actionsTable.fill(798, 6016, 6021); // 'state 47' -> true..super -> shift (target=399, len=0)
actionsTable[6021] = 68; // 'state 47' -> { -> shift (target=34, len=0)
actionsTable[6024] = 4; // 'state 47' -> ( -> shift (target=2, len=0)
actionsTable[6034] = 806; // 'state 47' -> of -> shift (target=403, len=0)
actionsTable[6048] = 806; // 'state 47' -> from -> shift (target=403, len=0)
actionsTable[6052] = 806; // 'state 47' -> type -> shift (target=403, len=0)
actionsTable[6057] = 20; // 'state 47' -> [ -> shift (target=10, len=0)
actionsTable[6059] = 70; // 'state 47' -> async -> shift (target=35, len=0)
actionsTable[6060] = 72; // 'state 47' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 6063, 6065); // 'state 47' -> get..set -> shift (target=403, len=0)
actionsTable[6065] = 74; // 'state 47' -> class -> shift (target=37, len=0)
actionsTable[6070] = 28; // 'state 47' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 6075, 6077); // 'state 47' -> void..typeof -> shift (target=15, len=0)
actionsTable[6078] = 32; // 'state 47' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 6085, 6087); // 'state 47' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 6088, 6091); // 'state 47' -> !..delete -> shift (target=15, len=0)
actionsTable[6091] = 34; // 'state 47' -> await -> shift (target=17, len=0)
actionsTable[6094] = 818; // 'state 47' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 6096, 6099); // 'state 47' -> number..template_string -> shift (target=399, len=0)
actionsTable[6105] = 36; // 'state 47' -> update_operator -> shift (target=18, len=0)
actionsTable[6106] = 798; // 'state 47' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 6144, 6149); // 'state 48' -> true..super -> shift (target=399, len=0)
actionsTable[6149] = 68; // 'state 48' -> { -> shift (target=34, len=0)
actionsTable[6152] = 4; // 'state 48' -> ( -> shift (target=2, len=0)
actionsTable[6162] = 806; // 'state 48' -> of -> shift (target=403, len=0)
actionsTable[6176] = 806; // 'state 48' -> from -> shift (target=403, len=0)
actionsTable[6180] = 806; // 'state 48' -> type -> shift (target=403, len=0)
actionsTable[6185] = 20; // 'state 48' -> [ -> shift (target=10, len=0)
actionsTable[6187] = 70; // 'state 48' -> async -> shift (target=35, len=0)
actionsTable[6188] = 72; // 'state 48' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 6191, 6193); // 'state 48' -> get..set -> shift (target=403, len=0)
actionsTable[6193] = 74; // 'state 48' -> class -> shift (target=37, len=0)
actionsTable[6198] = 28; // 'state 48' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 6203, 6205); // 'state 48' -> void..typeof -> shift (target=15, len=0)
actionsTable[6206] = 32; // 'state 48' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 6213, 6215); // 'state 48' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 6216, 6219); // 'state 48' -> !..delete -> shift (target=15, len=0)
actionsTable[6219] = 34; // 'state 48' -> await -> shift (target=17, len=0)
actionsTable[6222] = 818; // 'state 48' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 6224, 6227); // 'state 48' -> number..template_string -> shift (target=399, len=0)
actionsTable[6233] = 36; // 'state 48' -> update_operator -> shift (target=18, len=0)
actionsTable[6234] = 798; // 'state 48' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 6272, 6277); // 'state 49' -> true..super -> shift (target=399, len=0)
actionsTable[6277] = 68; // 'state 49' -> { -> shift (target=34, len=0)
actionsTable[6280] = 4; // 'state 49' -> ( -> shift (target=2, len=0)
actionsTable[6290] = 806; // 'state 49' -> of -> shift (target=403, len=0)
actionsTable[6304] = 806; // 'state 49' -> from -> shift (target=403, len=0)
actionsTable[6308] = 806; // 'state 49' -> type -> shift (target=403, len=0)
actionsTable[6313] = 20; // 'state 49' -> [ -> shift (target=10, len=0)
actionsTable[6315] = 70; // 'state 49' -> async -> shift (target=35, len=0)
actionsTable[6316] = 72; // 'state 49' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 6319, 6321); // 'state 49' -> get..set -> shift (target=403, len=0)
actionsTable[6321] = 74; // 'state 49' -> class -> shift (target=37, len=0)
actionsTable[6326] = 28; // 'state 49' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 6331, 6333); // 'state 49' -> void..typeof -> shift (target=15, len=0)
actionsTable[6334] = 32; // 'state 49' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 6341, 6343); // 'state 49' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 6344, 6347); // 'state 49' -> !..delete -> shift (target=15, len=0)
actionsTable[6347] = 34; // 'state 49' -> await -> shift (target=17, len=0)
actionsTable[6350] = 818; // 'state 49' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 6352, 6355); // 'state 49' -> number..template_string -> shift (target=399, len=0)
actionsTable[6361] = 36; // 'state 49' -> update_operator -> shift (target=18, len=0)
actionsTable[6362] = 798; // 'state 49' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 6400, 6405); // 'state 50' -> true..super -> shift (target=399, len=0)
actionsTable[6405] = 68; // 'state 50' -> { -> shift (target=34, len=0)
actionsTable[6408] = 4; // 'state 50' -> ( -> shift (target=2, len=0)
actionsTable[6418] = 806; // 'state 50' -> of -> shift (target=403, len=0)
actionsTable[6432] = 806; // 'state 50' -> from -> shift (target=403, len=0)
actionsTable[6436] = 806; // 'state 50' -> type -> shift (target=403, len=0)
actionsTable[6441] = 20; // 'state 50' -> [ -> shift (target=10, len=0)
actionsTable[6443] = 70; // 'state 50' -> async -> shift (target=35, len=0)
actionsTable[6444] = 72; // 'state 50' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 6447, 6449); // 'state 50' -> get..set -> shift (target=403, len=0)
actionsTable[6449] = 74; // 'state 50' -> class -> shift (target=37, len=0)
actionsTable[6454] = 28; // 'state 50' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 6459, 6461); // 'state 50' -> void..typeof -> shift (target=15, len=0)
actionsTable[6462] = 32; // 'state 50' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 6469, 6471); // 'state 50' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 6472, 6475); // 'state 50' -> !..delete -> shift (target=15, len=0)
actionsTable[6475] = 34; // 'state 50' -> await -> shift (target=17, len=0)
actionsTable[6478] = 818; // 'state 50' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 6480, 6483); // 'state 50' -> number..template_string -> shift (target=399, len=0)
actionsTable[6489] = 36; // 'state 50' -> update_operator -> shift (target=18, len=0)
actionsTable[6490] = 798; // 'state 50' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 6528, 6533); // 'state 51' -> true..super -> shift (target=399, len=0)
actionsTable[6533] = 68; // 'state 51' -> { -> shift (target=34, len=0)
actionsTable[6536] = 4; // 'state 51' -> ( -> shift (target=2, len=0)
actionsTable[6546] = 806; // 'state 51' -> of -> shift (target=403, len=0)
actionsTable[6560] = 806; // 'state 51' -> from -> shift (target=403, len=0)
actionsTable[6564] = 806; // 'state 51' -> type -> shift (target=403, len=0)
actionsTable[6569] = 20; // 'state 51' -> [ -> shift (target=10, len=0)
actionsTable[6571] = 70; // 'state 51' -> async -> shift (target=35, len=0)
actionsTable[6572] = 72; // 'state 51' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 6575, 6577); // 'state 51' -> get..set -> shift (target=403, len=0)
actionsTable[6577] = 74; // 'state 51' -> class -> shift (target=37, len=0)
actionsTable[6582] = 28; // 'state 51' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 6587, 6589); // 'state 51' -> void..typeof -> shift (target=15, len=0)
actionsTable[6590] = 32; // 'state 51' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 6597, 6599); // 'state 51' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 6600, 6603); // 'state 51' -> !..delete -> shift (target=15, len=0)
actionsTable[6603] = 34; // 'state 51' -> await -> shift (target=17, len=0)
actionsTable[6606] = 818; // 'state 51' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 6608, 6611); // 'state 51' -> number..template_string -> shift (target=399, len=0)
actionsTable[6617] = 36; // 'state 51' -> update_operator -> shift (target=18, len=0)
actionsTable[6618] = 798; // 'state 51' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 6656, 6661); // 'state 52' -> true..super -> shift (target=399, len=0)
actionsTable[6661] = 68; // 'state 52' -> { -> shift (target=34, len=0)
actionsTable[6664] = 4; // 'state 52' -> ( -> shift (target=2, len=0)
actionsTable[6674] = 806; // 'state 52' -> of -> shift (target=403, len=0)
actionsTable[6688] = 806; // 'state 52' -> from -> shift (target=403, len=0)
actionsTable[6692] = 806; // 'state 52' -> type -> shift (target=403, len=0)
actionsTable[6697] = 20; // 'state 52' -> [ -> shift (target=10, len=0)
actionsTable[6699] = 70; // 'state 52' -> async -> shift (target=35, len=0)
actionsTable[6700] = 72; // 'state 52' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 6703, 6705); // 'state 52' -> get..set -> shift (target=403, len=0)
actionsTable[6705] = 74; // 'state 52' -> class -> shift (target=37, len=0)
actionsTable[6710] = 28; // 'state 52' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 6715, 6717); // 'state 52' -> void..typeof -> shift (target=15, len=0)
actionsTable[6718] = 32; // 'state 52' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 6725, 6727); // 'state 52' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 6728, 6731); // 'state 52' -> !..delete -> shift (target=15, len=0)
actionsTable[6731] = 34; // 'state 52' -> await -> shift (target=17, len=0)
actionsTable[6734] = 818; // 'state 52' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 6736, 6739); // 'state 52' -> number..template_string -> shift (target=399, len=0)
actionsTable[6745] = 36; // 'state 52' -> update_operator -> shift (target=18, len=0)
actionsTable[6746] = 798; // 'state 52' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 6784, 6789); // 'state 53' -> true..super -> shift (target=399, len=0)
actionsTable[6789] = 68; // 'state 53' -> { -> shift (target=34, len=0)
actionsTable[6792] = 4; // 'state 53' -> ( -> shift (target=2, len=0)
actionsTable[6802] = 806; // 'state 53' -> of -> shift (target=403, len=0)
actionsTable[6816] = 806; // 'state 53' -> from -> shift (target=403, len=0)
actionsTable[6820] = 806; // 'state 53' -> type -> shift (target=403, len=0)
actionsTable[6825] = 20; // 'state 53' -> [ -> shift (target=10, len=0)
actionsTable[6827] = 70; // 'state 53' -> async -> shift (target=35, len=0)
actionsTable[6828] = 72; // 'state 53' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 6831, 6833); // 'state 53' -> get..set -> shift (target=403, len=0)
actionsTable[6833] = 74; // 'state 53' -> class -> shift (target=37, len=0)
actionsTable[6838] = 28; // 'state 53' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 6843, 6845); // 'state 53' -> void..typeof -> shift (target=15, len=0)
actionsTable[6846] = 32; // 'state 53' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 6853, 6855); // 'state 53' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 6856, 6859); // 'state 53' -> !..delete -> shift (target=15, len=0)
actionsTable[6859] = 34; // 'state 53' -> await -> shift (target=17, len=0)
actionsTable[6862] = 818; // 'state 53' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 6864, 6867); // 'state 53' -> number..template_string -> shift (target=399, len=0)
actionsTable[6873] = 36; // 'state 53' -> update_operator -> shift (target=18, len=0)
actionsTable[6874] = 798; // 'state 53' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 6912, 6917); // 'state 54' -> true..super -> shift (target=399, len=0)
actionsTable[6917] = 68; // 'state 54' -> { -> shift (target=34, len=0)
actionsTable[6920] = 4; // 'state 54' -> ( -> shift (target=2, len=0)
actionsTable[6930] = 806; // 'state 54' -> of -> shift (target=403, len=0)
actionsTable[6944] = 806; // 'state 54' -> from -> shift (target=403, len=0)
actionsTable[6948] = 806; // 'state 54' -> type -> shift (target=403, len=0)
actionsTable[6953] = 20; // 'state 54' -> [ -> shift (target=10, len=0)
actionsTable[6955] = 70; // 'state 54' -> async -> shift (target=35, len=0)
actionsTable[6956] = 72; // 'state 54' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 6959, 6961); // 'state 54' -> get..set -> shift (target=403, len=0)
actionsTable[6961] = 74; // 'state 54' -> class -> shift (target=37, len=0)
actionsTable[6966] = 28; // 'state 54' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 6971, 6973); // 'state 54' -> void..typeof -> shift (target=15, len=0)
actionsTable[6974] = 32; // 'state 54' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 6981, 6983); // 'state 54' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 6984, 6987); // 'state 54' -> !..delete -> shift (target=15, len=0)
actionsTable[6987] = 34; // 'state 54' -> await -> shift (target=17, len=0)
actionsTable[6990] = 818; // 'state 54' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 6992, 6995); // 'state 54' -> number..template_string -> shift (target=399, len=0)
actionsTable[7001] = 36; // 'state 54' -> update_operator -> shift (target=18, len=0)
actionsTable[7002] = 798; // 'state 54' -> regex -> shift (target=399, len=0)
actionsTable[7048] = 86; // 'state 55' -> ( -> shift (target=43, len=0)
actionsTable[7081] = 274; // 'state 55' -> [ -> shift (target=137, len=0)
actionsTable.fill(956, 7118, 7120); // 'state 55' -> identifier..private_property_identifier -> shift (target=478, len=0)
actionsTable.fill(798, 7168, 7173); // 'state 56' -> true..super -> shift (target=399, len=0)
actionsTable[7173] = 68; // 'state 56' -> { -> shift (target=34, len=0)
actionsTable[7176] = 4; // 'state 56' -> ( -> shift (target=2, len=0)
actionsTable[7186] = 806; // 'state 56' -> of -> shift (target=403, len=0)
actionsTable[7200] = 806; // 'state 56' -> from -> shift (target=403, len=0)
actionsTable[7204] = 806; // 'state 56' -> type -> shift (target=403, len=0)
actionsTable[7209] = 20; // 'state 56' -> [ -> shift (target=10, len=0)
actionsTable[7211] = 70; // 'state 56' -> async -> shift (target=35, len=0)
actionsTable[7212] = 72; // 'state 56' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 7215, 7217); // 'state 56' -> get..set -> shift (target=403, len=0)
actionsTable[7217] = 74; // 'state 56' -> class -> shift (target=37, len=0)
actionsTable[7222] = 28; // 'state 56' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 7227, 7229); // 'state 56' -> void..typeof -> shift (target=15, len=0)
actionsTable[7230] = 32; // 'state 56' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 7237, 7239); // 'state 56' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 7240, 7243); // 'state 56' -> !..delete -> shift (target=15, len=0)
actionsTable[7243] = 34; // 'state 56' -> await -> shift (target=17, len=0)
actionsTable[7246] = 818; // 'state 56' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 7248, 7251); // 'state 56' -> number..template_string -> shift (target=399, len=0)
actionsTable[7257] = 36; // 'state 56' -> update_operator -> shift (target=18, len=0)
actionsTable[7258] = 798; // 'state 56' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 7296, 7301); // 'state 57' -> true..super -> shift (target=399, len=0)
actionsTable[7301] = 68; // 'state 57' -> { -> shift (target=34, len=0)
actionsTable[7304] = 4; // 'state 57' -> ( -> shift (target=2, len=0)
actionsTable[7314] = 806; // 'state 57' -> of -> shift (target=403, len=0)
actionsTable[7328] = 806; // 'state 57' -> from -> shift (target=403, len=0)
actionsTable[7332] = 806; // 'state 57' -> type -> shift (target=403, len=0)
actionsTable[7337] = 20; // 'state 57' -> [ -> shift (target=10, len=0)
actionsTable[7339] = 70; // 'state 57' -> async -> shift (target=35, len=0)
actionsTable[7340] = 72; // 'state 57' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 7343, 7345); // 'state 57' -> get..set -> shift (target=403, len=0)
actionsTable[7345] = 74; // 'state 57' -> class -> shift (target=37, len=0)
actionsTable[7350] = 28; // 'state 57' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 7355, 7357); // 'state 57' -> void..typeof -> shift (target=15, len=0)
actionsTable[7358] = 32; // 'state 57' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 7365, 7367); // 'state 57' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 7368, 7371); // 'state 57' -> !..delete -> shift (target=15, len=0)
actionsTable[7371] = 34; // 'state 57' -> await -> shift (target=17, len=0)
actionsTable[7374] = 818; // 'state 57' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 7376, 7379); // 'state 57' -> number..template_string -> shift (target=399, len=0)
actionsTable[7385] = 36; // 'state 57' -> update_operator -> shift (target=18, len=0)
actionsTable[7386] = 798; // 'state 57' -> regex -> shift (target=399, len=0)
actionsTable[7430] = 964; // 'state 58' -> } -> shift (target=482, len=0)
actionsTable[7460] = 966; // 'state 58' -> type -> shift (target=483, len=0)
actionsTable[7502] = 968; // 'state 58' -> identifier -> shift (target=484, len=0)
actionsTable.fill(798, 7552, 7557); // 'state 59' -> true..super -> shift (target=399, len=0)
actionsTable[7557] = 68; // 'state 59' -> { -> shift (target=34, len=0)
actionsTable[7560] = 4; // 'state 59' -> ( -> shift (target=2, len=0)
actionsTable[7570] = 806; // 'state 59' -> of -> shift (target=403, len=0)
actionsTable[7584] = 806; // 'state 59' -> from -> shift (target=403, len=0)
actionsTable[7588] = 806; // 'state 59' -> type -> shift (target=403, len=0)
actionsTable[7593] = 20; // 'state 59' -> [ -> shift (target=10, len=0)
actionsTable[7595] = 22; // 'state 59' -> async -> shift (target=11, len=0)
actionsTable[7596] = 24; // 'state 59' -> function -> shift (target=12, len=0)
actionsTable.fill(806, 7599, 7601); // 'state 59' -> get..set -> shift (target=403, len=0)
actionsTable[7601] = 26; // 'state 59' -> class -> shift (target=13, len=0)
actionsTable[7606] = 28; // 'state 59' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 7611, 7613); // 'state 59' -> void..typeof -> shift (target=15, len=0)
actionsTable[7614] = 32; // 'state 59' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 7621, 7623); // 'state 59' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 7624, 7627); // 'state 59' -> !..delete -> shift (target=15, len=0)
actionsTable[7627] = 34; // 'state 59' -> await -> shift (target=17, len=0)
actionsTable[7630] = 818; // 'state 59' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 7632, 7635); // 'state 59' -> number..template_string -> shift (target=399, len=0)
actionsTable[7641] = 36; // 'state 59' -> update_operator -> shift (target=18, len=0)
actionsTable[7642] = 798; // 'state 59' -> regex -> shift (target=399, len=0)
actionsTable.fill(8, 7695, 7698); // 'state 60' -> const..var -> shift (target=4, len=0)
actionsTable[7711] = 16; // 'state 60' -> import -> shift (target=8, len=0)
actionsTable[7716] = 882; // 'state 60' -> type -> shift (target=441, len=0)
actionsTable[7717] = 18; // 'state 60' -> export -> shift (target=9, len=0)
actionsTable[7723] = 884; // 'state 60' -> async -> shift (target=442, len=0)
actionsTable[7724] = 886; // 'state 60' -> function -> shift (target=443, len=0)
actionsTable[7729] = 888; // 'state 60' -> class -> shift (target=444, len=0)
actionsTable[7732] = 816; // 'state 60' -> interface -> shift (target=408, len=0)
actionsTable[7814] = 990; // 'state 61' -> } -> shift (target=495, len=0)
actionsTable[7826] = 806; // 'state 61' -> of -> shift (target=403, len=0)
actionsTable[7840] = 806; // 'state 61' -> from -> shift (target=403, len=0)
actionsTable[7844] = 806; // 'state 61' -> type -> shift (target=403, len=0)
actionsTable[7848] = 294; // 'state 61' -> ... -> shift (target=147, len=0)
actionsTable[7849] = 198; // 'state 61' -> [ -> shift (target=99, len=0)
actionsTable[7851] = 914; // 'state 61' -> async -> shift (target=457, len=0)
actionsTable.fill(806, 7855, 7857); // 'state 61' -> get..set -> shift (target=403, len=0)
actionsTable[7886] = 992; // 'state 61' -> identifier -> shift (target=496, len=0)
actionsTable.fill(848, 7888, 7890); // 'state 61' -> number..string -> shift (target=424, len=0)
actionsTable[7941] = 122; // 'state 62' -> { -> shift (target=61, len=0)
actionsTable[7969] = 298; // 'state 62' -> , -> shift (target=149, len=0)
actionsTable[7976] = 300; // 'state 62' -> ... -> shift (target=150, len=0)
actionsTable[7977] = 124; // 'state 62' -> [ -> shift (target=62, len=0)
actionsTable[7978] = 996; // 'state 62' -> ] -> shift (target=498, len=0)
actionsTable[8014] = 894; // 'state 62' -> identifier -> shift (target=447, len=0)
actionsTable.fill(1277, 8064, 8073); // 'state 63' -> true..( -> reduce (target=126, len=2)
actionsTable.fill(1277, 8074, 8077); // 'state 63' -> else..do -> reduce (target=126, len=2)
actionsTable[8077] = 984; // 'state 63' -> ; -> shift (target=492, len=0)
actionsTable.fill(1277, 8078, 8083); // 'state 63' -> for..of -> reduce (target=126, len=2)
actionsTable.fill(1277, 8084, 8087); // 'state 63' -> return..try -> reduce (target=126, len=2)
actionsTable.fill(1277, 8089, 8091); // 'state 63' -> switch..case -> reduce (target=126, len=2)
actionsTable.fill(1277, 8092, 8097); // 'state 63' -> default..from -> reduce (target=126, len=2)
actionsTable[8097] = 290; // 'state 63' -> , -> shift (target=145, len=0)
actionsTable.fill(1277, 8100, 8102); // 'state 63' -> type..export -> reduce (target=126, len=2)
actionsTable[8105] = 1277; // 'state 63' -> [ -> reduce (target=126, len=2)
actionsTable.fill(1277, 8107, 8109); // 'state 63' -> async..function -> reduce (target=126, len=2)
actionsTable.fill(1277, 8111, 8114); // 'state 63' -> get..class -> reduce (target=126, len=2)
actionsTable[8116] = 1277; // 'state 63' -> interface -> reduce (target=126, len=2)
actionsTable[8118] = 1277; // 'state 63' -> < -> reduce (target=126, len=2)
actionsTable.fill(1277, 8123, 8125); // 'state 63' -> void..typeof -> reduce (target=126, len=2)
actionsTable[8126] = 1277; // 'state 63' -> new -> reduce (target=126, len=2)
actionsTable.fill(1277, 8133, 8135); // 'state 63' -> +..- -> reduce (target=126, len=2)
actionsTable.fill(1277, 8136, 8140); // 'state 63' -> !..await -> reduce (target=126, len=2)
actionsTable[8142] = 1277; // 'state 63' -> identifier -> reduce (target=126, len=2)
actionsTable.fill(1277, 8144, 8147); // 'state 63' -> number..template_string -> reduce (target=126, len=2)
actionsTable.fill(1277, 8153, 8156); // 'state 63' -> update_operator..@par-gen.EOF -> reduce (target=126, len=2)
actionsTable.fill(767, 8192, 8201); // 'state 64' -> true..( -> reduce (target=127, len=1)
actionsTable.fill(767, 8202, 8211); // 'state 64' -> else..of -> reduce (target=127, len=1)
actionsTable.fill(767, 8212, 8215); // 'state 64' -> return..try -> reduce (target=127, len=1)
actionsTable.fill(767, 8217, 8219); // 'state 64' -> switch..case -> reduce (target=127, len=1)
actionsTable[8219] = 164; // 'state 64' -> : -> shift (target=82, len=0)
actionsTable.fill(767, 8220, 8226); // 'state 64' -> default.., -> reduce (target=127, len=1)
actionsTable.fill(767, 8228, 8230); // 'state 64' -> type..export -> reduce (target=127, len=1)
actionsTable[8231] = 292; // 'state 64' -> = -> shift (target=146, len=0)
actionsTable[8233] = 767; // 'state 64' -> [ -> reduce (target=127, len=1)
actionsTable.fill(767, 8235, 8237); // 'state 64' -> async..function -> reduce (target=127, len=1)
actionsTable.fill(767, 8239, 8242); // 'state 64' -> get..class -> reduce (target=127, len=1)
actionsTable[8244] = 767; // 'state 64' -> interface -> reduce (target=127, len=1)
actionsTable[8245] = 164; // 'state 64' -> ?: -> shift (target=82, len=0)
actionsTable[8246] = 767; // 'state 64' -> < -> reduce (target=127, len=1)
actionsTable.fill(767, 8251, 8253); // 'state 64' -> void..typeof -> reduce (target=127, len=1)
actionsTable[8254] = 767; // 'state 64' -> new -> reduce (target=127, len=1)
actionsTable.fill(767, 8261, 8263); // 'state 64' -> +..- -> reduce (target=127, len=1)
actionsTable.fill(767, 8264, 8268); // 'state 64' -> !..await -> reduce (target=127, len=1)
actionsTable[8270] = 767; // 'state 64' -> identifier -> reduce (target=127, len=1)
actionsTable.fill(767, 8272, 8275); // 'state 64' -> number..template_string -> reduce (target=127, len=1)
actionsTable.fill(767, 8281, 8284); // 'state 64' -> update_operator..@par-gen.EOF -> reduce (target=127, len=1)
actionsTable.fill(798, 8320, 8325); // 'state 65' -> true..super -> shift (target=399, len=0)
actionsTable[8325] = 68; // 'state 65' -> { -> shift (target=34, len=0)
actionsTable[8328] = 4; // 'state 65' -> ( -> shift (target=2, len=0)
actionsTable[8329] = 312; // 'state 65' -> ) -> shift (target=156, len=0)
actionsTable[8338] = 806; // 'state 65' -> of -> shift (target=403, len=0)
actionsTable[8352] = 806; // 'state 65' -> from -> shift (target=403, len=0)
actionsTable[8356] = 806; // 'state 65' -> type -> shift (target=403, len=0)
actionsTable[8360] = 170; // 'state 65' -> ... -> shift (target=85, len=0)
actionsTable[8361] = 20; // 'state 65' -> [ -> shift (target=10, len=0)
actionsTable[8363] = 70; // 'state 65' -> async -> shift (target=35, len=0)
actionsTable[8364] = 72; // 'state 65' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 8367, 8369); // 'state 65' -> get..set -> shift (target=403, len=0)
actionsTable[8369] = 74; // 'state 65' -> class -> shift (target=37, len=0)
actionsTable[8374] = 28; // 'state 65' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 8379, 8381); // 'state 65' -> void..typeof -> shift (target=15, len=0)
actionsTable[8382] = 32; // 'state 65' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 8389, 8391); // 'state 65' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 8392, 8395); // 'state 65' -> !..delete -> shift (target=15, len=0)
actionsTable[8395] = 34; // 'state 65' -> await -> shift (target=17, len=0)
actionsTable[8398] = 172; // 'state 65' -> identifier -> shift (target=86, len=0)
actionsTable.fill(798, 8400, 8403); // 'state 65' -> number..template_string -> shift (target=399, len=0)
actionsTable[8409] = 36; // 'state 65' -> update_operator -> shift (target=18, len=0)
actionsTable[8410] = 798; // 'state 65' -> regex -> shift (target=399, len=0)
actionsTable[8456] = 138; // 'state 66' -> ( -> shift (target=69, len=0)
actionsTable[8502] = 28; // 'state 66' -> < -> shift (target=14, len=0)
actionsTable[8526] = 304; // 'state 66' -> identifier -> shift (target=152, len=0)
actionsTable[8603] = 164; // 'state 67' -> : -> shift (target=82, len=0)
actionsTable[8629] = 164; // 'state 67' -> ?: -> shift (target=82, len=0)
actionsTable[8634] = 310; // 'state 67' -> => -> shift (target=155, len=0)
actionsTable[8712] = 138; // 'state 68' -> ( -> shift (target=69, len=0)
actionsTable[8837] = 122; // 'state 69' -> { -> shift (target=61, len=0)
actionsTable[8841] = 1004; // 'state 69' -> ) -> shift (target=502, len=0)
actionsTable[8872] = 320; // 'state 69' -> ... -> shift (target=160, len=0)
actionsTable[8873] = 124; // 'state 69' -> [ -> shift (target=62, len=0)
actionsTable[8875] = 1006; // 'state 69' -> async -> shift (target=503, len=0)
actionsTable.fill(1008, 8877, 8879); // 'state 69' -> static..readonly -> shift (target=504, len=0)
actionsTable.fill(1006, 8879, 8881); // 'state 69' -> get..set -> shift (target=503, len=0)
actionsTable[8910] = 894; // 'state 69' -> identifier -> shift (target=447, len=0)
actionsTable[8915] = 1008; // 'state 69' -> accessibility_modifier -> shift (target=504, len=0)
actionsTable[8968] = 138; // 'state 70' -> ( -> shift (target=69, len=0)
actionsTable[9014] = 28; // 'state 70' -> < -> shift (target=14, len=0)
actionsTable[9093] = 80; // 'state 71' -> { -> shift (target=40, len=0)
actionsTable[9115] = 164; // 'state 71' -> : -> shift (target=82, len=0)
actionsTable[9141] = 164; // 'state 71' -> ?: -> shift (target=82, len=0)
actionsTable[9224] = 138; // 'state 72' -> ( -> shift (target=69, len=0)
actionsTable[9350] = 1014; // 'state 73' -> } -> shift (target=507, len=0)
actionsTable[9357] = 1016; // 'state 73' -> ; -> shift (target=508, len=0)
actionsTable[9362] = 806; // 'state 73' -> of -> shift (target=403, len=0)
actionsTable[9376] = 806; // 'state 73' -> from -> shift (target=403, len=0)
actionsTable[9380] = 806; // 'state 73' -> type -> shift (target=403, len=0)
actionsTable[9385] = 198; // 'state 73' -> [ -> shift (target=99, len=0)
actionsTable[9387] = 1018; // 'state 73' -> async -> shift (target=509, len=0)
actionsTable.fill(1008, 9389, 9391); // 'state 73' -> static..readonly -> shift (target=504, len=0)
actionsTable.fill(1020, 9391, 9393); // 'state 73' -> get..set -> shift (target=510, len=0)
actionsTable[9422] = 848; // 'state 73' -> identifier -> shift (target=424, len=0)
actionsTable[9423] = 338; // 'state 73' -> private_property_identifier -> shift (target=169, len=0)
actionsTable.fill(848, 9424, 9426); // 'state 73' -> number..string -> shift (target=424, len=0)
actionsTable[9427] = 1008; // 'state 73' -> accessibility_modifier -> shift (target=504, len=0)
actionsTable.fill(798, 9472, 9477); // 'state 74' -> true..super -> shift (target=399, len=0)
actionsTable[9477] = 68; // 'state 74' -> { -> shift (target=34, len=0)
actionsTable[9480] = 4; // 'state 74' -> ( -> shift (target=2, len=0)
actionsTable[9490] = 806; // 'state 74' -> of -> shift (target=403, len=0)
actionsTable[9504] = 806; // 'state 74' -> from -> shift (target=403, len=0)
actionsTable[9508] = 806; // 'state 74' -> type -> shift (target=403, len=0)
actionsTable[9513] = 20; // 'state 74' -> [ -> shift (target=10, len=0)
actionsTable[9515] = 70; // 'state 74' -> async -> shift (target=35, len=0)
actionsTable[9516] = 72; // 'state 74' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 9519, 9521); // 'state 74' -> get..set -> shift (target=403, len=0)
actionsTable[9521] = 74; // 'state 74' -> class -> shift (target=37, len=0)
actionsTable[9526] = 28; // 'state 74' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 9531, 9533); // 'state 74' -> void..typeof -> shift (target=15, len=0)
actionsTable[9534] = 32; // 'state 74' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 9541, 9543); // 'state 74' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 9544, 9547); // 'state 74' -> !..delete -> shift (target=15, len=0)
actionsTable[9547] = 34; // 'state 74' -> await -> shift (target=17, len=0)
actionsTable[9550] = 818; // 'state 74' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 9552, 9555); // 'state 74' -> number..template_string -> shift (target=399, len=0)
actionsTable[9561] = 36; // 'state 74' -> update_operator -> shift (target=18, len=0)
actionsTable[9562] = 798; // 'state 74' -> regex -> shift (target=399, len=0)
actionsTable.fill(942, 9600, 9603); // 'state 75' -> true..null -> shift (target=471, len=0)
actionsTable[9605] = 262; // 'state 75' -> { -> shift (target=131, len=0)
actionsTable[9608] = 264; // 'state 75' -> ( -> shift (target=132, len=0)
actionsTable[9641] = 266; // 'state 75' -> [ -> shift (target=133, len=0)
actionsTable[9654] = 28; // 'state 75' -> < -> shift (target=14, len=0)
actionsTable[9656] = 268; // 'state 75' -> | -> shift (target=134, len=0)
actionsTable[9659] = 942; // 'state 75' -> void -> shift (target=471, len=0)
actionsTable[9660] = 944; // 'state 75' -> typeof -> shift (target=472, len=0)
actionsTable[9678] = 270; // 'state 75' -> identifier -> shift (target=135, len=0)
actionsTable.fill(942, 9680, 9682); // 'state 75' -> number..string -> shift (target=471, len=0)
actionsTable[9733] = 146; // 'state 76' -> { -> shift (target=73, len=0)
actionsTable[9778] = 148; // 'state 76' -> extends -> shift (target=74, len=0)
actionsTable[9779] = 150; // 'state 76' -> implements -> shift (target=75, len=0)
actionsTable[9782] = 28; // 'state 76' -> < -> shift (target=14, len=0)
actionsTable[9861] = 146; // 'state 77' -> { -> shift (target=73, len=0)
actionsTable[9989] = 146; // 'state 78' -> { -> shift (target=73, len=0)
actionsTable[10034] = 148; // 'state 78' -> extends -> shift (target=74, len=0)
actionsTable[10035] = 150; // 'state 78' -> implements -> shift (target=75, len=0)
actionsTable[10117] = 262; // 'state 79' -> { -> shift (target=131, len=0)
actionsTable[10162] = 344; // 'state 79' -> extends -> shift (target=172, len=0)
actionsTable[10166] = 28; // 'state 79' -> < -> shift (target=14, len=0)
actionsTable[10279] = 350; // 'state 80' -> = -> shift (target=175, len=0)
actionsTable[10294] = 28; // 'state 80' -> < -> shift (target=14, len=0)
actionsTable.fill(798, 10368, 10373); // 'state 81' -> true..super -> shift (target=399, len=0)
actionsTable[10373] = 2; // 'state 81' -> { -> shift (target=1, len=0)
actionsTable[10376] = 4; // 'state 81' -> ( -> shift (target=2, len=0)
actionsTable[10386] = 806; // 'state 81' -> of -> shift (target=403, len=0)
actionsTable[10400] = 806; // 'state 81' -> from -> shift (target=403, len=0)
actionsTable[10404] = 806; // 'state 81' -> type -> shift (target=403, len=0)
actionsTable[10409] = 20; // 'state 81' -> [ -> shift (target=10, len=0)
actionsTable[10411] = 70; // 'state 81' -> async -> shift (target=35, len=0)
actionsTable[10412] = 72; // 'state 81' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 10415, 10417); // 'state 81' -> get..set -> shift (target=403, len=0)
actionsTable[10417] = 74; // 'state 81' -> class -> shift (target=37, len=0)
actionsTable[10422] = 28; // 'state 81' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 10427, 10429); // 'state 81' -> void..typeof -> shift (target=15, len=0)
actionsTable[10430] = 32; // 'state 81' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 10437, 10439); // 'state 81' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 10440, 10443); // 'state 81' -> !..delete -> shift (target=15, len=0)
actionsTable[10443] = 34; // 'state 81' -> await -> shift (target=17, len=0)
actionsTable[10446] = 818; // 'state 81' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 10448, 10451); // 'state 81' -> number..template_string -> shift (target=399, len=0)
actionsTable[10457] = 36; // 'state 81' -> update_operator -> shift (target=18, len=0)
actionsTable[10458] = 798; // 'state 81' -> regex -> shift (target=399, len=0)
actionsTable.fill(942, 10496, 10499); // 'state 82' -> true..null -> shift (target=471, len=0)
actionsTable[10501] = 262; // 'state 82' -> { -> shift (target=131, len=0)
actionsTable[10504] = 264; // 'state 82' -> ( -> shift (target=132, len=0)
actionsTable[10537] = 266; // 'state 82' -> [ -> shift (target=133, len=0)
actionsTable[10550] = 28; // 'state 82' -> < -> shift (target=14, len=0)
actionsTable[10552] = 268; // 'state 82' -> | -> shift (target=134, len=0)
actionsTable[10555] = 942; // 'state 82' -> void -> shift (target=471, len=0)
actionsTable[10556] = 944; // 'state 82' -> typeof -> shift (target=472, len=0)
actionsTable[10574] = 270; // 'state 82' -> identifier -> shift (target=135, len=0)
actionsTable.fill(942, 10576, 10578); // 'state 82' -> number..string -> shift (target=471, len=0)
actionsTable.fill(798, 10624, 10629); // 'state 83' -> true..super -> shift (target=399, len=0)
actionsTable[10629] = 68; // 'state 83' -> { -> shift (target=34, len=0)
actionsTable[10632] = 4; // 'state 83' -> ( -> shift (target=2, len=0)
actionsTable[10642] = 806; // 'state 83' -> of -> shift (target=403, len=0)
actionsTable[10656] = 806; // 'state 83' -> from -> shift (target=403, len=0)
actionsTable[10660] = 806; // 'state 83' -> type -> shift (target=403, len=0)
actionsTable[10665] = 20; // 'state 83' -> [ -> shift (target=10, len=0)
actionsTable[10667] = 70; // 'state 83' -> async -> shift (target=35, len=0)
actionsTable[10668] = 72; // 'state 83' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 10671, 10673); // 'state 83' -> get..set -> shift (target=403, len=0)
actionsTable[10673] = 74; // 'state 83' -> class -> shift (target=37, len=0)
actionsTable[10678] = 28; // 'state 83' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 10683, 10685); // 'state 83' -> void..typeof -> shift (target=15, len=0)
actionsTable[10686] = 32; // 'state 83' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 10693, 10695); // 'state 83' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 10696, 10699); // 'state 83' -> !..delete -> shift (target=15, len=0)
actionsTable[10699] = 34; // 'state 83' -> await -> shift (target=17, len=0)
actionsTable[10702] = 818; // 'state 83' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 10704, 10707); // 'state 83' -> number..template_string -> shift (target=399, len=0)
actionsTable[10713] = 36; // 'state 83' -> update_operator -> shift (target=18, len=0)
actionsTable[10714] = 798; // 'state 83' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 10752, 10757); // 'state 84' -> true..super -> shift (target=399, len=0)
actionsTable[10757] = 68; // 'state 84' -> { -> shift (target=34, len=0)
actionsTable[10760] = 4; // 'state 84' -> ( -> shift (target=2, len=0)
actionsTable[10770] = 806; // 'state 84' -> of -> shift (target=403, len=0)
actionsTable[10784] = 806; // 'state 84' -> from -> shift (target=403, len=0)
actionsTable[10788] = 806; // 'state 84' -> type -> shift (target=403, len=0)
actionsTable[10793] = 20; // 'state 84' -> [ -> shift (target=10, len=0)
actionsTable[10795] = 70; // 'state 84' -> async -> shift (target=35, len=0)
actionsTable[10796] = 72; // 'state 84' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 10799, 10801); // 'state 84' -> get..set -> shift (target=403, len=0)
actionsTable[10801] = 74; // 'state 84' -> class -> shift (target=37, len=0)
actionsTable[10806] = 28; // 'state 84' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 10811, 10813); // 'state 84' -> void..typeof -> shift (target=15, len=0)
actionsTable[10814] = 32; // 'state 84' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 10821, 10823); // 'state 84' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 10824, 10827); // 'state 84' -> !..delete -> shift (target=15, len=0)
actionsTable[10827] = 34; // 'state 84' -> await -> shift (target=17, len=0)
actionsTable[10830] = 818; // 'state 84' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 10832, 10835); // 'state 84' -> number..template_string -> shift (target=399, len=0)
actionsTable[10841] = 36; // 'state 84' -> update_operator -> shift (target=18, len=0)
actionsTable[10842] = 798; // 'state 84' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 10880, 10885); // 'state 85' -> true..super -> shift (target=399, len=0)
actionsTable[10885] = 68; // 'state 85' -> { -> shift (target=34, len=0)
actionsTable[10888] = 4; // 'state 85' -> ( -> shift (target=2, len=0)
actionsTable[10898] = 806; // 'state 85' -> of -> shift (target=403, len=0)
actionsTable[10912] = 806; // 'state 85' -> from -> shift (target=403, len=0)
actionsTable[10916] = 806; // 'state 85' -> type -> shift (target=403, len=0)
actionsTable[10921] = 20; // 'state 85' -> [ -> shift (target=10, len=0)
actionsTable[10923] = 70; // 'state 85' -> async -> shift (target=35, len=0)
actionsTable[10924] = 72; // 'state 85' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 10927, 10929); // 'state 85' -> get..set -> shift (target=403, len=0)
actionsTable[10929] = 74; // 'state 85' -> class -> shift (target=37, len=0)
actionsTable[10934] = 28; // 'state 85' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 10939, 10941); // 'state 85' -> void..typeof -> shift (target=15, len=0)
actionsTable[10942] = 32; // 'state 85' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 10949, 10951); // 'state 85' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 10952, 10955); // 'state 85' -> !..delete -> shift (target=15, len=0)
actionsTable[10955] = 34; // 'state 85' -> await -> shift (target=17, len=0)
actionsTable[10958] = 360; // 'state 85' -> identifier -> shift (target=180, len=0)
actionsTable.fill(798, 10960, 10963); // 'state 85' -> number..template_string -> shift (target=399, len=0)
actionsTable[10969] = 36; // 'state 85' -> update_operator -> shift (target=18, len=0)
actionsTable[10970] = 798; // 'state 85' -> regex -> shift (target=399, len=0)
actionsTable.fill(871, 11016, 11018); // 'state 86' -> (..) -> reduce (target=179, len=1)
actionsTable[11027] = 871; // 'state 86' -> in -> reduce (target=179, len=1)
actionsTable[11035] = 164; // 'state 86' -> : -> shift (target=82, len=0)
actionsTable.fill(871, 11041, 11044); // 'state 86' -> ,..as -> reduce (target=179, len=1)
actionsTable[11047] = 877; // 'state 86' -> = -> reduce (target=182, len=1)
actionsTable[11049] = 871; // 'state 86' -> [ -> reduce (target=179, len=1)
actionsTable[11061] = 164; // 'state 86' -> ?: -> shift (target=82, len=0)
actionsTable.fill(871, 11062, 11066); // 'state 86' -> <..& -> reduce (target=179, len=1)
actionsTable[11066] = 162; // 'state 86' -> => -> shift (target=81, len=0)
actionsTable.fill(871, 11071, 11080); // 'state 86' -> ?..** -> reduce (target=179, len=1)
actionsTable.fill(871, 11084, 11086); // 'state 86' -> ?.... -> reduce (target=179, len=1)
actionsTable[11092] = 877; // 'state 86' -> compound_assignment_operator -> reduce (target=182, len=1)
actionsTable.fill(871, 11093, 11098); // 'state 86' -> equality_operator..update_operator -> reduce (target=179, len=1)
actionsTable[11145] = 1036; // 'state 87' -> ) -> shift (target=518, len=0)
actionsTable[11169] = 364; // 'state 87' -> , -> shift (target=182, len=0)
actionsTable[11272] = 86; // 'state 88' -> ( -> shift (target=43, len=0)
actionsTable[11273] = 907; // 'state 88' -> ) -> reduce (target=197, len=1)
actionsTable[11283] = 88; // 'state 88' -> in -> shift (target=44, len=0)
actionsTable[11297] = 907; // 'state 88' -> , -> reduce (target=197, len=1)
actionsTable[11298] = 90; // 'state 88' -> * -> shift (target=45, len=0)
actionsTable[11299] = 92; // 'state 88' -> as -> shift (target=46, len=0)
actionsTable[11305] = 94; // 'state 88' -> [ -> shift (target=47, len=0)
actionsTable[11306] = 907; // 'state 88' -> ] -> reduce (target=197, len=1)
actionsTable.fill(88, 11318, 11320); // 'state 88' -> <..> -> shift (target=44, len=0)
actionsTable[11320] = 96; // 'state 88' -> | -> shift (target=48, len=0)
actionsTable[11321] = 98; // 'state 88' -> & -> shift (target=49, len=0)
actionsTable[11327] = 100; // 'state 88' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 11328, 11330); // 'state 88' -> ||..?? -> shift (target=51, len=0)
actionsTable[11330] = 104; // 'state 88' -> && -> shift (target=52, len=0)
actionsTable[11331] = 106; // 'state 88' -> ^ -> shift (target=53, len=0)
actionsTable[11332] = 88; // 'state 88' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 11333, 11335); // 'state 88' -> +..- -> shift (target=54, len=0)
actionsTable[11335] = 90; // 'state 88' -> ** -> shift (target=45, len=0)
actionsTable[11340] = 110; // 'state 88' -> ?. -> shift (target=55, len=0)
actionsTable[11341] = 864; // 'state 88' -> . -> shift (target=432, len=0)
actionsTable[11349] = 112; // 'state 88' -> equality_operator -> shift (target=56, len=0)
actionsTable[11350] = 88; // 'state 88' -> relational_operator -> shift (target=44, len=0)
actionsTable[11351] = 114; // 'state 88' -> shift_operator -> shift (target=57, len=0)
actionsTable[11352] = 90; // 'state 88' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[11353] = 866; // 'state 88' -> update_operator -> shift (target=433, len=0)
actionsTable[11401] = 1030; // 'state 89' -> ) -> shift (target=515, len=0)
actionsTable[11425] = 358; // 'state 89' -> , -> shift (target=179, len=0)
actionsTable.fill(871, 11528, 11530); // 'state 90' -> (..) -> reduce (target=179, len=1)
actionsTable[11539] = 871; // 'state 90' -> in -> reduce (target=179, len=1)
actionsTable[11547] = 164; // 'state 90' -> : -> shift (target=82, len=0)
actionsTable.fill(871, 11553, 11556); // 'state 90' -> ,..as -> reduce (target=179, len=1)
actionsTable[11559] = 877; // 'state 90' -> = -> reduce (target=182, len=1)
actionsTable[11561] = 871; // 'state 90' -> [ -> reduce (target=179, len=1)
actionsTable[11573] = 164; // 'state 90' -> ?: -> shift (target=82, len=0)
actionsTable.fill(871, 11574, 11578); // 'state 90' -> <..& -> reduce (target=179, len=1)
actionsTable.fill(871, 11583, 11592); // 'state 90' -> ?..** -> reduce (target=179, len=1)
actionsTable.fill(871, 11596, 11598); // 'state 90' -> ?.... -> reduce (target=179, len=1)
actionsTable[11604] = 877; // 'state 90' -> compound_assignment_operator -> reduce (target=182, len=1)
actionsTable.fill(871, 11605, 11610); // 'state 90' -> equality_operator..update_operator -> reduce (target=179, len=1)
actionsTable.fill(1403, 11648, 11656); // 'state 91' -> true..if -> reduce (target=189, len=2)
actionsTable[11656] = 86; // 'state 91' -> ( -> shift (target=43, len=0)
actionsTable.fill(1403, 11657, 11671); // 'state 91' -> )..try -> reduce (target=189, len=2)
actionsTable.fill(1403, 11673, 11686); // 'state 91' -> switch..export -> reduce (target=189, len=2)
actionsTable[11689] = 94; // 'state 91' -> [ -> shift (target=47, len=0)
actionsTable.fill(1403, 11690, 11698); // 'state 91' -> ]..class -> reduce (target=189, len=2)
actionsTable.fill(1403, 11699, 11701); // 'state 91' -> implements..interface -> reduce (target=189, len=2)
actionsTable.fill(1403, 11702, 11706); // 'state 91' -> <..& -> reduce (target=189, len=2)
actionsTable.fill(1403, 11707, 11709); // 'state 91' -> void..typeof -> reduce (target=189, len=2)
actionsTable.fill(1403, 11710, 11724); // 'state 91' -> new..await -> reduce (target=189, len=2)
actionsTable[11724] = 110; // 'state 91' -> ?. -> shift (target=55, len=0)
actionsTable[11725] = 864; // 'state 91' -> . -> shift (target=432, len=0)
actionsTable.fill(1403, 11726, 11732); // 'state 91' -> identifier..accessibility_modifier -> reduce (target=189, len=2)
actionsTable.fill(1403, 11733, 11737); // 'state 91' -> equality_operator..multiplicative_operator -> reduce (target=189, len=2)
actionsTable[11737] = 866; // 'state 91' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(1403, 11738, 11740); // 'state 91' -> regex..@par-gen.EOF -> reduce (target=189, len=2)
actionsTable.fill(1407, 11776, 11784); // 'state 92' -> true..if -> reduce (target=191, len=2)
actionsTable[11784] = 86; // 'state 92' -> ( -> shift (target=43, len=0)
actionsTable.fill(1407, 11785, 11799); // 'state 92' -> )..try -> reduce (target=191, len=2)
actionsTable.fill(1407, 11801, 11814); // 'state 92' -> switch..export -> reduce (target=191, len=2)
actionsTable[11817] = 94; // 'state 92' -> [ -> shift (target=47, len=0)
actionsTable.fill(1407, 11818, 11826); // 'state 92' -> ]..class -> reduce (target=191, len=2)
actionsTable.fill(1407, 11827, 11829); // 'state 92' -> implements..interface -> reduce (target=191, len=2)
actionsTable.fill(1407, 11830, 11834); // 'state 92' -> <..& -> reduce (target=191, len=2)
actionsTable.fill(1407, 11835, 11837); // 'state 92' -> void..typeof -> reduce (target=191, len=2)
actionsTable.fill(1407, 11838, 11852); // 'state 92' -> new..await -> reduce (target=191, len=2)
actionsTable[11852] = 110; // 'state 92' -> ?. -> shift (target=55, len=0)
actionsTable[11853] = 864; // 'state 92' -> . -> shift (target=432, len=0)
actionsTable.fill(1407, 11854, 11860); // 'state 92' -> identifier..accessibility_modifier -> reduce (target=191, len=2)
actionsTable.fill(1407, 11861, 11868); // 'state 92' -> equality_operator..@par-gen.EOF -> reduce (target=191, len=2)
actionsTable.fill(1405, 11904, 11912); // 'state 93' -> true..if -> reduce (target=190, len=2)
actionsTable[11912] = 86; // 'state 93' -> ( -> shift (target=43, len=0)
actionsTable.fill(1405, 11913, 11927); // 'state 93' -> )..try -> reduce (target=190, len=2)
actionsTable.fill(1405, 11929, 11942); // 'state 93' -> switch..export -> reduce (target=190, len=2)
actionsTable[11945] = 94; // 'state 93' -> [ -> shift (target=47, len=0)
actionsTable.fill(1405, 11946, 11954); // 'state 93' -> ]..class -> reduce (target=190, len=2)
actionsTable.fill(1405, 11955, 11957); // 'state 93' -> implements..interface -> reduce (target=190, len=2)
actionsTable.fill(1405, 11958, 11962); // 'state 93' -> <..& -> reduce (target=190, len=2)
actionsTable.fill(1405, 11963, 11965); // 'state 93' -> void..typeof -> reduce (target=190, len=2)
actionsTable.fill(1405, 11966, 11980); // 'state 93' -> new..await -> reduce (target=190, len=2)
actionsTable[11980] = 110; // 'state 93' -> ?. -> shift (target=55, len=0)
actionsTable[11981] = 864; // 'state 93' -> . -> shift (target=432, len=0)
actionsTable.fill(1405, 11982, 11988); // 'state 93' -> identifier..accessibility_modifier -> reduce (target=190, len=2)
actionsTable.fill(1405, 11989, 11993); // 'state 93' -> equality_operator..multiplicative_operator -> reduce (target=190, len=2)
actionsTable[11993] = 866; // 'state 93' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(1405, 11994, 11996); // 'state 93' -> regex..@par-gen.EOF -> reduce (target=190, len=2)
actionsTable.fill(798, 12032, 12037); // 'state 94' -> true..super -> shift (target=399, len=0)
actionsTable[12037] = 68; // 'state 94' -> { -> shift (target=34, len=0)
actionsTable[12040] = 4; // 'state 94' -> ( -> shift (target=2, len=0)
actionsTable[12050] = 806; // 'state 94' -> of -> shift (target=403, len=0)
actionsTable[12064] = 806; // 'state 94' -> from -> shift (target=403, len=0)
actionsTable[12068] = 806; // 'state 94' -> type -> shift (target=403, len=0)
actionsTable[12072] = 48; // 'state 94' -> ... -> shift (target=24, len=0)
actionsTable[12073] = 20; // 'state 94' -> [ -> shift (target=10, len=0)
actionsTable[12075] = 70; // 'state 94' -> async -> shift (target=35, len=0)
actionsTable[12076] = 72; // 'state 94' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 12079, 12081); // 'state 94' -> get..set -> shift (target=403, len=0)
actionsTable[12081] = 74; // 'state 94' -> class -> shift (target=37, len=0)
actionsTable[12086] = 28; // 'state 94' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 12091, 12093); // 'state 94' -> void..typeof -> shift (target=15, len=0)
actionsTable[12094] = 32; // 'state 94' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 12101, 12103); // 'state 94' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 12104, 12107); // 'state 94' -> !..delete -> shift (target=15, len=0)
actionsTable[12107] = 34; // 'state 94' -> await -> shift (target=17, len=0)
actionsTable[12110] = 818; // 'state 94' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 12112, 12115); // 'state 94' -> number..template_string -> shift (target=399, len=0)
actionsTable[12121] = 36; // 'state 94' -> update_operator -> shift (target=18, len=0)
actionsTable[12122] = 798; // 'state 94' -> regex -> shift (target=399, len=0)
actionsTable.fill(1409, 12160, 12168); // 'state 95' -> true..if -> reduce (target=192, len=2)
actionsTable[12168] = 86; // 'state 95' -> ( -> shift (target=43, len=0)
actionsTable.fill(1409, 12169, 12183); // 'state 95' -> )..try -> reduce (target=192, len=2)
actionsTable.fill(1409, 12185, 12198); // 'state 95' -> switch..export -> reduce (target=192, len=2)
actionsTable.fill(1409, 12201, 12210); // 'state 95' -> [..class -> reduce (target=192, len=2)
actionsTable.fill(1409, 12211, 12213); // 'state 95' -> implements..interface -> reduce (target=192, len=2)
actionsTable[12214] = 366; // 'state 95' -> < -> shift (target=183, len=0)
actionsTable.fill(1409, 12215, 12218); // 'state 95' -> >..& -> reduce (target=192, len=2)
actionsTable.fill(1409, 12219, 12221); // 'state 95' -> void..typeof -> reduce (target=192, len=2)
actionsTable.fill(1409, 12222, 12244); // 'state 95' -> new..accessibility_modifier -> reduce (target=192, len=2)
actionsTable.fill(1409, 12245, 12252); // 'state 95' -> equality_operator..@par-gen.EOF -> reduce (target=192, len=2)
actionsTable.fill(798, 12288, 12293); // 'state 96' -> true..super -> shift (target=399, len=0)
actionsTable[12293] = 68; // 'state 96' -> { -> shift (target=34, len=0)
actionsTable[12296] = 4; // 'state 96' -> ( -> shift (target=2, len=0)
actionsTable[12306] = 806; // 'state 96' -> of -> shift (target=403, len=0)
actionsTable[12320] = 806; // 'state 96' -> from -> shift (target=403, len=0)
actionsTable[12324] = 806; // 'state 96' -> type -> shift (target=403, len=0)
actionsTable[12328] = 48; // 'state 96' -> ... -> shift (target=24, len=0)
actionsTable[12329] = 20; // 'state 96' -> [ -> shift (target=10, len=0)
actionsTable[12331] = 70; // 'state 96' -> async -> shift (target=35, len=0)
actionsTable[12332] = 72; // 'state 96' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 12335, 12337); // 'state 96' -> get..set -> shift (target=403, len=0)
actionsTable[12337] = 74; // 'state 96' -> class -> shift (target=37, len=0)
actionsTable[12342] = 28; // 'state 96' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 12347, 12349); // 'state 96' -> void..typeof -> shift (target=15, len=0)
actionsTable[12350] = 32; // 'state 96' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 12357, 12359); // 'state 96' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 12360, 12363); // 'state 96' -> !..delete -> shift (target=15, len=0)
actionsTable[12363] = 34; // 'state 96' -> await -> shift (target=17, len=0)
actionsTable[12366] = 818; // 'state 96' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 12368, 12371); // 'state 96' -> number..template_string -> shift (target=399, len=0)
actionsTable[12377] = 36; // 'state 96' -> update_operator -> shift (target=18, len=0)
actionsTable[12378] = 798; // 'state 96' -> regex -> shift (target=399, len=0)
actionsTable[12449] = 372; // 'state 97' -> , -> shift (target=186, len=0)
actionsTable[12458] = 1042; // 'state 97' -> ] -> shift (target=521, len=0)
actionsTable[12577] = 374; // 'state 98' -> , -> shift (target=187, len=0)
actionsTable[12599] = 1046; // 'state 98' -> > -> shift (target=523, len=0)
actionsTable.fill(798, 12672, 12677); // 'state 99' -> true..super -> shift (target=399, len=0)
actionsTable[12677] = 68; // 'state 99' -> { -> shift (target=34, len=0)
actionsTable[12680] = 4; // 'state 99' -> ( -> shift (target=2, len=0)
actionsTable[12690] = 806; // 'state 99' -> of -> shift (target=403, len=0)
actionsTable[12704] = 806; // 'state 99' -> from -> shift (target=403, len=0)
actionsTable[12708] = 806; // 'state 99' -> type -> shift (target=403, len=0)
actionsTable[12713] = 20; // 'state 99' -> [ -> shift (target=10, len=0)
actionsTable[12715] = 70; // 'state 99' -> async -> shift (target=35, len=0)
actionsTable[12716] = 72; // 'state 99' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 12719, 12721); // 'state 99' -> get..set -> shift (target=403, len=0)
actionsTable[12721] = 74; // 'state 99' -> class -> shift (target=37, len=0)
actionsTable[12726] = 28; // 'state 99' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 12731, 12733); // 'state 99' -> void..typeof -> shift (target=15, len=0)
actionsTable[12734] = 32; // 'state 99' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 12741, 12743); // 'state 99' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 12744, 12747); // 'state 99' -> !..delete -> shift (target=15, len=0)
actionsTable[12747] = 34; // 'state 99' -> await -> shift (target=17, len=0)
actionsTable[12750] = 818; // 'state 99' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 12752, 12755); // 'state 99' -> number..template_string -> shift (target=399, len=0)
actionsTable[12761] = 36; // 'state 99' -> update_operator -> shift (target=18, len=0)
actionsTable[12762] = 798; // 'state 99' -> regex -> shift (target=399, len=0)
actionsTable[12808] = 138; // 'state 100' -> ( -> shift (target=69, len=0)
actionsTable[12854] = 28; // 'state 100' -> < -> shift (target=14, len=0)
actionsTable[12936] = 86; // 'state 101' -> ( -> shift (target=43, len=0)
actionsTable[12947] = 88; // 'state 101' -> in -> shift (target=44, len=0)
actionsTable[12961] = 907; // 'state 101' -> , -> reduce (target=197, len=1)
actionsTable[12962] = 90; // 'state 101' -> * -> shift (target=45, len=0)
actionsTable[12963] = 92; // 'state 101' -> as -> shift (target=46, len=0)
actionsTable[12969] = 94; // 'state 101' -> [ -> shift (target=47, len=0)
actionsTable[12970] = 1050; // 'state 101' -> ] -> shift (target=525, len=0)
actionsTable.fill(88, 12982, 12984); // 'state 101' -> <..> -> shift (target=44, len=0)
actionsTable[12984] = 96; // 'state 101' -> | -> shift (target=48, len=0)
actionsTable[12985] = 98; // 'state 101' -> & -> shift (target=49, len=0)
actionsTable[12991] = 100; // 'state 101' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 12992, 12994); // 'state 101' -> ||..?? -> shift (target=51, len=0)
actionsTable[12994] = 104; // 'state 101' -> && -> shift (target=52, len=0)
actionsTable[12995] = 106; // 'state 101' -> ^ -> shift (target=53, len=0)
actionsTable[12996] = 88; // 'state 101' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 12997, 12999); // 'state 101' -> +..- -> shift (target=54, len=0)
actionsTable[12999] = 90; // 'state 101' -> ** -> shift (target=45, len=0)
actionsTable[13004] = 110; // 'state 101' -> ?. -> shift (target=55, len=0)
actionsTable[13005] = 864; // 'state 101' -> . -> shift (target=432, len=0)
actionsTable[13013] = 112; // 'state 101' -> equality_operator -> shift (target=56, len=0)
actionsTable[13014] = 88; // 'state 101' -> relational_operator -> shift (target=44, len=0)
actionsTable[13015] = 114; // 'state 101' -> shift_operator -> shift (target=57, len=0)
actionsTable[13016] = 90; // 'state 101' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[13017] = 866; // 'state 101' -> update_operator -> shift (target=433, len=0)
actionsTable[13062] = 1052; // 'state 102' -> } -> shift (target=526, len=0)
actionsTable[13074] = 806; // 'state 102' -> of -> shift (target=403, len=0)
actionsTable[13088] = 806; // 'state 102' -> from -> shift (target=403, len=0)
actionsTable[13092] = 806; // 'state 102' -> type -> shift (target=403, len=0)
actionsTable[13096] = 48; // 'state 102' -> ... -> shift (target=24, len=0)
actionsTable[13097] = 198; // 'state 102' -> [ -> shift (target=99, len=0)
actionsTable[13099] = 226; // 'state 102' -> async -> shift (target=113, len=0)
actionsTable.fill(54, 13103, 13105); // 'state 102' -> get..set -> shift (target=27, len=0)
actionsTable[13134] = 930; // 'state 102' -> identifier -> shift (target=465, len=0)
actionsTable.fill(848, 13136, 13138); // 'state 102' -> number..string -> shift (target=424, len=0)
actionsTable.fill(798, 13184, 13189); // 'state 103' -> true..super -> shift (target=399, len=0)
actionsTable[13189] = 68; // 'state 103' -> { -> shift (target=34, len=0)
actionsTable[13192] = 4; // 'state 103' -> ( -> shift (target=2, len=0)
actionsTable[13202] = 806; // 'state 103' -> of -> shift (target=403, len=0)
actionsTable[13216] = 806; // 'state 103' -> from -> shift (target=403, len=0)
actionsTable[13220] = 806; // 'state 103' -> type -> shift (target=403, len=0)
actionsTable[13225] = 20; // 'state 103' -> [ -> shift (target=10, len=0)
actionsTable[13227] = 70; // 'state 103' -> async -> shift (target=35, len=0)
actionsTable[13228] = 72; // 'state 103' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 13231, 13233); // 'state 103' -> get..set -> shift (target=403, len=0)
actionsTable[13233] = 74; // 'state 103' -> class -> shift (target=37, len=0)
actionsTable[13238] = 28; // 'state 103' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 13243, 13245); // 'state 103' -> void..typeof -> shift (target=15, len=0)
actionsTable[13246] = 32; // 'state 103' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 13253, 13255); // 'state 103' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 13256, 13259); // 'state 103' -> !..delete -> shift (target=15, len=0)
actionsTable[13259] = 34; // 'state 103' -> await -> shift (target=17, len=0)
actionsTable[13262] = 818; // 'state 103' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 13264, 13267); // 'state 103' -> number..template_string -> shift (target=399, len=0)
actionsTable[13273] = 36; // 'state 103' -> update_operator -> shift (target=18, len=0)
actionsTable[13274] = 798; // 'state 103' -> regex -> shift (target=399, len=0)
actionsTable[13317] = 80; // 'state 104' -> { -> shift (target=40, len=0)
actionsTable[13339] = 164; // 'state 104' -> : -> shift (target=82, len=0)
actionsTable[13365] = 164; // 'state 104' -> ?: -> shift (target=82, len=0)
actionsTable[13448] = 138; // 'state 105' -> ( -> shift (target=69, len=0)
actionsTable[13574] = 1421; // 'state 106' -> } -> reduce (target=198, len=2)
actionsTable[13576] = 86; // 'state 106' -> ( -> shift (target=43, len=0)
actionsTable[13577] = 1421; // 'state 106' -> ) -> reduce (target=198, len=2)
actionsTable[13587] = 88; // 'state 106' -> in -> shift (target=44, len=0)
actionsTable[13601] = 1421; // 'state 106' -> , -> reduce (target=198, len=2)
actionsTable[13602] = 90; // 'state 106' -> * -> shift (target=45, len=0)
actionsTable[13603] = 92; // 'state 106' -> as -> shift (target=46, len=0)
actionsTable[13609] = 94; // 'state 106' -> [ -> shift (target=47, len=0)
actionsTable[13610] = 1421; // 'state 106' -> ] -> reduce (target=198, len=2)
actionsTable.fill(88, 13622, 13624); // 'state 106' -> <..> -> shift (target=44, len=0)
actionsTable[13624] = 96; // 'state 106' -> | -> shift (target=48, len=0)
actionsTable[13625] = 98; // 'state 106' -> & -> shift (target=49, len=0)
actionsTable[13631] = 100; // 'state 106' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 13632, 13634); // 'state 106' -> ||..?? -> shift (target=51, len=0)
actionsTable[13634] = 104; // 'state 106' -> && -> shift (target=52, len=0)
actionsTable[13635] = 106; // 'state 106' -> ^ -> shift (target=53, len=0)
actionsTable[13636] = 88; // 'state 106' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 13637, 13639); // 'state 106' -> +..- -> shift (target=54, len=0)
actionsTable[13639] = 90; // 'state 106' -> ** -> shift (target=45, len=0)
actionsTable[13644] = 110; // 'state 106' -> ?. -> shift (target=55, len=0)
actionsTable[13645] = 864; // 'state 106' -> . -> shift (target=432, len=0)
actionsTable[13653] = 112; // 'state 106' -> equality_operator -> shift (target=56, len=0)
actionsTable[13654] = 88; // 'state 106' -> relational_operator -> shift (target=44, len=0)
actionsTable[13655] = 114; // 'state 106' -> shift_operator -> shift (target=57, len=0)
actionsTable[13656] = 90; // 'state 106' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[13657] = 866; // 'state 106' -> update_operator -> shift (target=433, len=0)
actionsTable[13704] = 86; // 'state 107' -> ( -> shift (target=43, len=0)
actionsTable[13705] = 392; // 'state 107' -> ) -> shift (target=196, len=0)
actionsTable[13715] = 88; // 'state 107' -> in -> shift (target=44, len=0)
actionsTable[13730] = 90; // 'state 107' -> * -> shift (target=45, len=0)
actionsTable[13731] = 92; // 'state 107' -> as -> shift (target=46, len=0)
actionsTable[13737] = 94; // 'state 107' -> [ -> shift (target=47, len=0)
actionsTable.fill(88, 13750, 13752); // 'state 107' -> <..> -> shift (target=44, len=0)
actionsTable[13752] = 96; // 'state 107' -> | -> shift (target=48, len=0)
actionsTable[13753] = 98; // 'state 107' -> & -> shift (target=49, len=0)
actionsTable[13759] = 100; // 'state 107' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 13760, 13762); // 'state 107' -> ||..?? -> shift (target=51, len=0)
actionsTable[13762] = 104; // 'state 107' -> && -> shift (target=52, len=0)
actionsTable[13763] = 106; // 'state 107' -> ^ -> shift (target=53, len=0)
actionsTable[13764] = 88; // 'state 107' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 13765, 13767); // 'state 107' -> +..- -> shift (target=54, len=0)
actionsTable[13767] = 90; // 'state 107' -> ** -> shift (target=45, len=0)
actionsTable[13772] = 110; // 'state 107' -> ?. -> shift (target=55, len=0)
actionsTable[13773] = 864; // 'state 107' -> . -> shift (target=432, len=0)
actionsTable[13781] = 112; // 'state 107' -> equality_operator -> shift (target=56, len=0)
actionsTable[13782] = 88; // 'state 107' -> relational_operator -> shift (target=44, len=0)
actionsTable[13783] = 114; // 'state 107' -> shift_operator -> shift (target=57, len=0)
actionsTable[13784] = 90; // 'state 107' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[13785] = 866; // 'state 107' -> update_operator -> shift (target=433, len=0)
actionsTable[13832] = 86; // 'state 108' -> ( -> shift (target=43, len=0)
actionsTable[13833] = 394; // 'state 108' -> ) -> shift (target=197, len=0)
actionsTable[13843] = 88; // 'state 108' -> in -> shift (target=44, len=0)
actionsTable[13858] = 90; // 'state 108' -> * -> shift (target=45, len=0)
actionsTable[13859] = 92; // 'state 108' -> as -> shift (target=46, len=0)
actionsTable[13865] = 94; // 'state 108' -> [ -> shift (target=47, len=0)
actionsTable.fill(88, 13878, 13880); // 'state 108' -> <..> -> shift (target=44, len=0)
actionsTable[13880] = 96; // 'state 108' -> | -> shift (target=48, len=0)
actionsTable[13881] = 98; // 'state 108' -> & -> shift (target=49, len=0)
actionsTable[13887] = 100; // 'state 108' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 13888, 13890); // 'state 108' -> ||..?? -> shift (target=51, len=0)
actionsTable[13890] = 104; // 'state 108' -> && -> shift (target=52, len=0)
actionsTable[13891] = 106; // 'state 108' -> ^ -> shift (target=53, len=0)
actionsTable[13892] = 88; // 'state 108' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 13893, 13895); // 'state 108' -> +..- -> shift (target=54, len=0)
actionsTable[13895] = 90; // 'state 108' -> ** -> shift (target=45, len=0)
actionsTable[13900] = 110; // 'state 108' -> ?. -> shift (target=55, len=0)
actionsTable[13901] = 864; // 'state 108' -> . -> shift (target=432, len=0)
actionsTable[13909] = 112; // 'state 108' -> equality_operator -> shift (target=56, len=0)
actionsTable[13910] = 88; // 'state 108' -> relational_operator -> shift (target=44, len=0)
actionsTable[13911] = 114; // 'state 108' -> shift_operator -> shift (target=57, len=0)
actionsTable[13912] = 90; // 'state 108' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[13913] = 866; // 'state 108' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(798, 13952, 13957); // 'state 109' -> true..super -> shift (target=399, len=0)
actionsTable[13957] = 68; // 'state 109' -> { -> shift (target=34, len=0)
actionsTable[13960] = 4; // 'state 109' -> ( -> shift (target=2, len=0)
actionsTable[13965] = 398; // 'state 109' -> ; -> shift (target=199, len=0)
actionsTable[13970] = 806; // 'state 109' -> of -> shift (target=403, len=0)
actionsTable[13984] = 806; // 'state 109' -> from -> shift (target=403, len=0)
actionsTable[13988] = 806; // 'state 109' -> type -> shift (target=403, len=0)
actionsTable[13993] = 20; // 'state 109' -> [ -> shift (target=10, len=0)
actionsTable[13995] = 70; // 'state 109' -> async -> shift (target=35, len=0)
actionsTable[13996] = 72; // 'state 109' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 13999, 14001); // 'state 109' -> get..set -> shift (target=403, len=0)
actionsTable[14001] = 74; // 'state 109' -> class -> shift (target=37, len=0)
actionsTable[14006] = 28; // 'state 109' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 14011, 14013); // 'state 109' -> void..typeof -> shift (target=15, len=0)
actionsTable[14014] = 32; // 'state 109' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 14021, 14023); // 'state 109' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 14024, 14027); // 'state 109' -> !..delete -> shift (target=15, len=0)
actionsTable[14027] = 34; // 'state 109' -> await -> shift (target=17, len=0)
actionsTable[14030] = 818; // 'state 109' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 14032, 14035); // 'state 109' -> number..template_string -> shift (target=399, len=0)
actionsTable[14041] = 36; // 'state 109' -> update_operator -> shift (target=18, len=0)
actionsTable[14042] = 798; // 'state 109' -> regex -> shift (target=399, len=0)
actionsTable[14085] = 122; // 'state 110' -> { -> shift (target=61, len=0)
actionsTable[14121] = 124; // 'state 110' -> [ -> shift (target=62, len=0)
actionsTable[14158] = 894; // 'state 110' -> identifier -> shift (target=447, len=0)
actionsTable[14216] = 86; // 'state 111' -> ( -> shift (target=43, len=0)
actionsTable[14221] = 404; // 'state 111' -> ; -> shift (target=202, len=0)
actionsTable[14227] = 88; // 'state 111' -> in -> shift (target=44, len=0)
actionsTable[14242] = 90; // 'state 111' -> * -> shift (target=45, len=0)
actionsTable[14243] = 92; // 'state 111' -> as -> shift (target=46, len=0)
actionsTable[14249] = 94; // 'state 111' -> [ -> shift (target=47, len=0)
actionsTable.fill(88, 14262, 14264); // 'state 111' -> <..> -> shift (target=44, len=0)
actionsTable[14264] = 96; // 'state 111' -> | -> shift (target=48, len=0)
actionsTable[14265] = 98; // 'state 111' -> & -> shift (target=49, len=0)
actionsTable[14271] = 100; // 'state 111' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 14272, 14274); // 'state 111' -> ||..?? -> shift (target=51, len=0)
actionsTable[14274] = 104; // 'state 111' -> && -> shift (target=52, len=0)
actionsTable[14275] = 106; // 'state 111' -> ^ -> shift (target=53, len=0)
actionsTable[14276] = 88; // 'state 111' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 14277, 14279); // 'state 111' -> +..- -> shift (target=54, len=0)
actionsTable[14279] = 90; // 'state 111' -> ** -> shift (target=45, len=0)
actionsTable[14284] = 110; // 'state 111' -> ?. -> shift (target=55, len=0)
actionsTable[14285] = 864; // 'state 111' -> . -> shift (target=432, len=0)
actionsTable[14293] = 112; // 'state 111' -> equality_operator -> shift (target=56, len=0)
actionsTable[14294] = 88; // 'state 111' -> relational_operator -> shift (target=44, len=0)
actionsTable[14295] = 114; // 'state 111' -> shift_operator -> shift (target=57, len=0)
actionsTable[14296] = 90; // 'state 111' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[14297] = 866; // 'state 111' -> update_operator -> shift (target=433, len=0)
actionsTable[14344] = 138; // 'state 112' -> ( -> shift (target=69, len=0)
actionsTable[14390] = 28; // 'state 112' -> < -> shift (target=14, len=0)
actionsTable[14414] = 406; // 'state 112' -> identifier -> shift (target=203, len=0)
actionsTable[14470] = 869; // 'state 113' -> } -> reduce (target=178, len=1)
actionsTable[14472] = 869; // 'state 113' -> ( -> reduce (target=178, len=1)
actionsTable[14482] = 806; // 'state 113' -> of -> shift (target=403, len=0)
actionsTable[14491] = 869; // 'state 113' -> : -> reduce (target=178, len=1)
actionsTable[14496] = 806; // 'state 113' -> from -> shift (target=403, len=0)
actionsTable[14497] = 869; // 'state 113' -> , -> reduce (target=178, len=1)
actionsTable[14500] = 806; // 'state 113' -> type -> shift (target=403, len=0)
actionsTable[14505] = 198; // 'state 113' -> [ -> shift (target=99, len=0)
actionsTable[14507] = 914; // 'state 113' -> async -> shift (target=457, len=0)
actionsTable.fill(806, 14511, 14513); // 'state 113' -> get..set -> shift (target=403, len=0)
actionsTable.fill(869, 14517, 14519); // 'state 113' -> ?:..< -> reduce (target=178, len=1)
actionsTable[14542] = 848; // 'state 113' -> identifier -> shift (target=424, len=0)
actionsTable.fill(848, 14544, 14546); // 'state 113' -> number..string -> shift (target=424, len=0)
actionsTable[14600] = 138; // 'state 114' -> ( -> shift (target=69, len=0)
actionsTable[14646] = 28; // 'state 114' -> < -> shift (target=14, len=0)
actionsTable[14725] = 146; // 'state 115' -> { -> shift (target=73, len=0)
actionsTable[14770] = 148; // 'state 115' -> extends -> shift (target=74, len=0)
actionsTable[14771] = 150; // 'state 115' -> implements -> shift (target=75, len=0)
actionsTable[14774] = 28; // 'state 115' -> < -> shift (target=14, len=0)
actionsTable[14853] = 80; // 'state 116' -> { -> shift (target=40, len=0)
actionsTable[14856] = 410; // 'state 116' -> ( -> shift (target=205, len=0)
actionsTable[14981] = 80; // 'state 117' -> { -> shift (target=40, len=0)
actionsTable.fill(1749, 15104, 15113); // 'state 118' -> true..( -> reduce (target=106, len=3)
actionsTable.fill(1749, 15114, 15117); // 'state 118' -> else..do -> reduce (target=106, len=3)
actionsTable.fill(1749, 15118, 15123); // 'state 118' -> for..of -> reduce (target=106, len=3)
actionsTable.fill(1749, 15124, 15127); // 'state 118' -> return..try -> reduce (target=106, len=3)
actionsTable[15128] = 234; // 'state 118' -> finally -> shift (target=117, len=0)
actionsTable.fill(1749, 15129, 15131); // 'state 118' -> switch..case -> reduce (target=106, len=3)
actionsTable.fill(1749, 15132, 15137); // 'state 118' -> default..from -> reduce (target=106, len=3)
actionsTable.fill(1749, 15140, 15142); // 'state 118' -> type..export -> reduce (target=106, len=3)
actionsTable[15145] = 1749; // 'state 118' -> [ -> reduce (target=106, len=3)
actionsTable.fill(1749, 15147, 15149); // 'state 118' -> async..function -> reduce (target=106, len=3)
actionsTable.fill(1749, 15151, 15154); // 'state 118' -> get..class -> reduce (target=106, len=3)
actionsTable[15156] = 1749; // 'state 118' -> interface -> reduce (target=106, len=3)
actionsTable[15158] = 1749; // 'state 118' -> < -> reduce (target=106, len=3)
actionsTable.fill(1749, 15163, 15165); // 'state 118' -> void..typeof -> reduce (target=106, len=3)
actionsTable[15166] = 1749; // 'state 118' -> new -> reduce (target=106, len=3)
actionsTable.fill(1749, 15173, 15175); // 'state 118' -> +..- -> reduce (target=106, len=3)
actionsTable.fill(1749, 15176, 15180); // 'state 118' -> !..await -> reduce (target=106, len=3)
actionsTable[15182] = 1749; // 'state 118' -> identifier -> reduce (target=106, len=3)
actionsTable.fill(1749, 15184, 15187); // 'state 118' -> number..template_string -> reduce (target=106, len=3)
actionsTable.fill(1749, 15193, 15196); // 'state 118' -> update_operator..@par-gen.EOF -> reduce (target=106, len=3)
actionsTable[15240] = 86; // 'state 119' -> ( -> shift (target=43, len=0)
actionsTable[15241] = 412; // 'state 119' -> ) -> shift (target=206, len=0)
actionsTable[15251] = 88; // 'state 119' -> in -> shift (target=44, len=0)
actionsTable[15266] = 90; // 'state 119' -> * -> shift (target=45, len=0)
actionsTable[15267] = 92; // 'state 119' -> as -> shift (target=46, len=0)
actionsTable[15273] = 94; // 'state 119' -> [ -> shift (target=47, len=0)
actionsTable.fill(88, 15286, 15288); // 'state 119' -> <..> -> shift (target=44, len=0)
actionsTable[15288] = 96; // 'state 119' -> | -> shift (target=48, len=0)
actionsTable[15289] = 98; // 'state 119' -> & -> shift (target=49, len=0)
actionsTable[15295] = 100; // 'state 119' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 15296, 15298); // 'state 119' -> ||..?? -> shift (target=51, len=0)
actionsTable[15298] = 104; // 'state 119' -> && -> shift (target=52, len=0)
actionsTable[15299] = 106; // 'state 119' -> ^ -> shift (target=53, len=0)
actionsTable[15300] = 88; // 'state 119' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 15301, 15303); // 'state 119' -> +..- -> shift (target=54, len=0)
actionsTable[15303] = 90; // 'state 119' -> ** -> shift (target=45, len=0)
actionsTable[15308] = 110; // 'state 119' -> ?. -> shift (target=55, len=0)
actionsTable[15309] = 864; // 'state 119' -> . -> shift (target=432, len=0)
actionsTable[15317] = 112; // 'state 119' -> equality_operator -> shift (target=56, len=0)
actionsTable[15318] = 88; // 'state 119' -> relational_operator -> shift (target=44, len=0)
actionsTable[15319] = 114; // 'state 119' -> shift_operator -> shift (target=57, len=0)
actionsTable[15320] = 90; // 'state 119' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[15321] = 866; // 'state 119' -> update_operator -> shift (target=433, len=0)
actionsTable[15368] = 86; // 'state 120' -> ( -> shift (target=43, len=0)
actionsTable[15379] = 88; // 'state 120' -> in -> shift (target=44, len=0)
actionsTable[15387] = 414; // 'state 120' -> : -> shift (target=207, len=0)
actionsTable[15394] = 90; // 'state 120' -> * -> shift (target=45, len=0)
actionsTable[15395] = 92; // 'state 120' -> as -> shift (target=46, len=0)
actionsTable[15401] = 94; // 'state 120' -> [ -> shift (target=47, len=0)
actionsTable.fill(88, 15414, 15416); // 'state 120' -> <..> -> shift (target=44, len=0)
actionsTable[15416] = 96; // 'state 120' -> | -> shift (target=48, len=0)
actionsTable[15417] = 98; // 'state 120' -> & -> shift (target=49, len=0)
actionsTable[15423] = 100; // 'state 120' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 15424, 15426); // 'state 120' -> ||..?? -> shift (target=51, len=0)
actionsTable[15426] = 104; // 'state 120' -> && -> shift (target=52, len=0)
actionsTable[15427] = 106; // 'state 120' -> ^ -> shift (target=53, len=0)
actionsTable[15428] = 88; // 'state 120' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 15429, 15431); // 'state 120' -> +..- -> shift (target=54, len=0)
actionsTable[15431] = 90; // 'state 120' -> ** -> shift (target=45, len=0)
actionsTable[15436] = 110; // 'state 120' -> ?. -> shift (target=55, len=0)
actionsTable[15437] = 864; // 'state 120' -> . -> shift (target=432, len=0)
actionsTable[15445] = 112; // 'state 120' -> equality_operator -> shift (target=56, len=0)
actionsTable[15446] = 88; // 'state 120' -> relational_operator -> shift (target=44, len=0)
actionsTable[15447] = 114; // 'state 120' -> shift_operator -> shift (target=57, len=0)
actionsTable[15448] = 90; // 'state 120' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[15449] = 866; // 'state 120' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(1911, 15488, 15496); // 'state 121' -> true..if -> reduce (target=187, len=3)
actionsTable[15496] = 86; // 'state 121' -> ( -> shift (target=43, len=0)
actionsTable.fill(1911, 15497, 15507); // 'state 121' -> )..of -> reduce (target=187, len=3)
actionsTable[15507] = 88; // 'state 121' -> in -> shift (target=44, len=0)
actionsTable.fill(1911, 15508, 15511); // 'state 121' -> return..try -> reduce (target=187, len=3)
actionsTable.fill(1911, 15513, 15522); // 'state 121' -> switch.., -> reduce (target=187, len=3)
actionsTable[15522] = 90; // 'state 121' -> * -> shift (target=45, len=0)
actionsTable[15523] = 92; // 'state 121' -> as -> shift (target=46, len=0)
actionsTable.fill(1911, 15524, 15526); // 'state 121' -> type..export -> reduce (target=187, len=3)
actionsTable[15529] = 94; // 'state 121' -> [ -> shift (target=47, len=0)
actionsTable.fill(1911, 15530, 15538); // 'state 121' -> ]..class -> reduce (target=187, len=3)
actionsTable.fill(1911, 15539, 15541); // 'state 121' -> implements..interface -> reduce (target=187, len=3)
actionsTable.fill(88, 15542, 15544); // 'state 121' -> <..> -> shift (target=44, len=0)
actionsTable[15544] = 96; // 'state 121' -> | -> shift (target=48, len=0)
actionsTable[15545] = 98; // 'state 121' -> & -> shift (target=49, len=0)
actionsTable.fill(1911, 15547, 15549); // 'state 121' -> void..typeof -> reduce (target=187, len=3)
actionsTable.fill(1911, 15550, 15554); // 'state 121' -> new..?? -> reduce (target=187, len=3)
actionsTable[15554] = 104; // 'state 121' -> && -> shift (target=52, len=0)
actionsTable[15555] = 106; // 'state 121' -> ^ -> shift (target=53, len=0)
actionsTable[15556] = 88; // 'state 121' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 15557, 15559); // 'state 121' -> +..- -> shift (target=54, len=0)
actionsTable[15559] = 90; // 'state 121' -> ** -> shift (target=45, len=0)
actionsTable.fill(1911, 15560, 15564); // 'state 121' -> !..await -> reduce (target=187, len=3)
actionsTable[15564] = 110; // 'state 121' -> ?. -> shift (target=55, len=0)
actionsTable[15565] = 864; // 'state 121' -> . -> shift (target=432, len=0)
actionsTable.fill(1911, 15566, 15572); // 'state 121' -> identifier..accessibility_modifier -> reduce (target=187, len=3)
actionsTable[15573] = 112; // 'state 121' -> equality_operator -> shift (target=56, len=0)
actionsTable[15574] = 88; // 'state 121' -> relational_operator -> shift (target=44, len=0)
actionsTable[15575] = 114; // 'state 121' -> shift_operator -> shift (target=57, len=0)
actionsTable[15576] = 90; // 'state 121' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[15577] = 866; // 'state 121' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(1911, 15578, 15580); // 'state 121' -> regex..@par-gen.EOF -> reduce (target=187, len=3)
actionsTable.fill(1911, 15616, 15624); // 'state 122' -> true..if -> reduce (target=187, len=3)
actionsTable[15624] = 86; // 'state 122' -> ( -> shift (target=43, len=0)
actionsTable.fill(1911, 15625, 15635); // 'state 122' -> )..of -> reduce (target=187, len=3)
actionsTable[15635] = 88; // 'state 122' -> in -> shift (target=44, len=0)
actionsTable.fill(1911, 15636, 15639); // 'state 122' -> return..try -> reduce (target=187, len=3)
actionsTable.fill(1911, 15641, 15650); // 'state 122' -> switch.., -> reduce (target=187, len=3)
actionsTable[15650] = 90; // 'state 122' -> * -> shift (target=45, len=0)
actionsTable[15651] = 92; // 'state 122' -> as -> shift (target=46, len=0)
actionsTable.fill(1911, 15652, 15654); // 'state 122' -> type..export -> reduce (target=187, len=3)
actionsTable[15657] = 94; // 'state 122' -> [ -> shift (target=47, len=0)
actionsTable.fill(1911, 15658, 15666); // 'state 122' -> ]..class -> reduce (target=187, len=3)
actionsTable.fill(1911, 15667, 15669); // 'state 122' -> implements..interface -> reduce (target=187, len=3)
actionsTable.fill(88, 15670, 15672); // 'state 122' -> <..> -> shift (target=44, len=0)
actionsTable[15672] = 96; // 'state 122' -> | -> shift (target=48, len=0)
actionsTable[15673] = 98; // 'state 122' -> & -> shift (target=49, len=0)
actionsTable.fill(1911, 15675, 15677); // 'state 122' -> void..typeof -> reduce (target=187, len=3)
actionsTable.fill(1911, 15678, 15683); // 'state 122' -> new..&& -> reduce (target=187, len=3)
actionsTable[15683] = 106; // 'state 122' -> ^ -> shift (target=53, len=0)
actionsTable[15684] = 88; // 'state 122' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 15685, 15687); // 'state 122' -> +..- -> shift (target=54, len=0)
actionsTable[15687] = 90; // 'state 122' -> ** -> shift (target=45, len=0)
actionsTable.fill(1911, 15688, 15692); // 'state 122' -> !..await -> reduce (target=187, len=3)
actionsTable[15692] = 110; // 'state 122' -> ?. -> shift (target=55, len=0)
actionsTable[15693] = 864; // 'state 122' -> . -> shift (target=432, len=0)
actionsTable.fill(1911, 15694, 15700); // 'state 122' -> identifier..accessibility_modifier -> reduce (target=187, len=3)
actionsTable[15701] = 112; // 'state 122' -> equality_operator -> shift (target=56, len=0)
actionsTable[15702] = 88; // 'state 122' -> relational_operator -> shift (target=44, len=0)
actionsTable[15703] = 114; // 'state 122' -> shift_operator -> shift (target=57, len=0)
actionsTable[15704] = 90; // 'state 122' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[15705] = 866; // 'state 122' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(1911, 15706, 15708); // 'state 122' -> regex..@par-gen.EOF -> reduce (target=187, len=3)
actionsTable.fill(1911, 15744, 15752); // 'state 123' -> true..if -> reduce (target=187, len=3)
actionsTable[15752] = 86; // 'state 123' -> ( -> shift (target=43, len=0)
actionsTable.fill(1911, 15753, 15763); // 'state 123' -> )..of -> reduce (target=187, len=3)
actionsTable[15763] = 88; // 'state 123' -> in -> shift (target=44, len=0)
actionsTable.fill(1911, 15764, 15767); // 'state 123' -> return..try -> reduce (target=187, len=3)
actionsTable.fill(1911, 15769, 15778); // 'state 123' -> switch.., -> reduce (target=187, len=3)
actionsTable[15778] = 90; // 'state 123' -> * -> shift (target=45, len=0)
actionsTable[15779] = 92; // 'state 123' -> as -> shift (target=46, len=0)
actionsTable.fill(1911, 15780, 15782); // 'state 123' -> type..export -> reduce (target=187, len=3)
actionsTable[15785] = 94; // 'state 123' -> [ -> shift (target=47, len=0)
actionsTable.fill(1911, 15786, 15794); // 'state 123' -> ]..class -> reduce (target=187, len=3)
actionsTable.fill(1911, 15795, 15797); // 'state 123' -> implements..interface -> reduce (target=187, len=3)
actionsTable.fill(88, 15798, 15800); // 'state 123' -> <..> -> shift (target=44, len=0)
actionsTable[15800] = 1911; // 'state 123' -> | -> reduce (target=187, len=3)
actionsTable[15801] = 98; // 'state 123' -> & -> shift (target=49, len=0)
actionsTable.fill(1911, 15803, 15805); // 'state 123' -> void..typeof -> reduce (target=187, len=3)
actionsTable.fill(1911, 15806, 15811); // 'state 123' -> new..&& -> reduce (target=187, len=3)
actionsTable[15811] = 106; // 'state 123' -> ^ -> shift (target=53, len=0)
actionsTable[15812] = 88; // 'state 123' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 15813, 15815); // 'state 123' -> +..- -> shift (target=54, len=0)
actionsTable[15815] = 90; // 'state 123' -> ** -> shift (target=45, len=0)
actionsTable.fill(1911, 15816, 15820); // 'state 123' -> !..await -> reduce (target=187, len=3)
actionsTable[15820] = 110; // 'state 123' -> ?. -> shift (target=55, len=0)
actionsTable[15821] = 864; // 'state 123' -> . -> shift (target=432, len=0)
actionsTable.fill(1911, 15822, 15828); // 'state 123' -> identifier..accessibility_modifier -> reduce (target=187, len=3)
actionsTable[15829] = 112; // 'state 123' -> equality_operator -> shift (target=56, len=0)
actionsTable[15830] = 88; // 'state 123' -> relational_operator -> shift (target=44, len=0)
actionsTable[15831] = 114; // 'state 123' -> shift_operator -> shift (target=57, len=0)
actionsTable[15832] = 90; // 'state 123' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[15833] = 866; // 'state 123' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(1911, 15834, 15836); // 'state 123' -> regex..@par-gen.EOF -> reduce (target=187, len=3)
actionsTable.fill(1911, 15872, 15880); // 'state 124' -> true..if -> reduce (target=187, len=3)
actionsTable[15880] = 86; // 'state 124' -> ( -> shift (target=43, len=0)
actionsTable.fill(1911, 15881, 15891); // 'state 124' -> )..of -> reduce (target=187, len=3)
actionsTable[15891] = 88; // 'state 124' -> in -> shift (target=44, len=0)
actionsTable.fill(1911, 15892, 15895); // 'state 124' -> return..try -> reduce (target=187, len=3)
actionsTable.fill(1911, 15897, 15906); // 'state 124' -> switch.., -> reduce (target=187, len=3)
actionsTable[15906] = 90; // 'state 124' -> * -> shift (target=45, len=0)
actionsTable[15907] = 92; // 'state 124' -> as -> shift (target=46, len=0)
actionsTable.fill(1911, 15908, 15910); // 'state 124' -> type..export -> reduce (target=187, len=3)
actionsTable[15913] = 94; // 'state 124' -> [ -> shift (target=47, len=0)
actionsTable.fill(1911, 15914, 15922); // 'state 124' -> ]..class -> reduce (target=187, len=3)
actionsTable.fill(1911, 15923, 15925); // 'state 124' -> implements..interface -> reduce (target=187, len=3)
actionsTable.fill(88, 15926, 15928); // 'state 124' -> <..> -> shift (target=44, len=0)
actionsTable[15928] = 1911; // 'state 124' -> | -> reduce (target=187, len=3)
actionsTable[15929] = 98; // 'state 124' -> & -> shift (target=49, len=0)
actionsTable.fill(1911, 15931, 15933); // 'state 124' -> void..typeof -> reduce (target=187, len=3)
actionsTable.fill(1911, 15934, 15940); // 'state 124' -> new..^ -> reduce (target=187, len=3)
actionsTable[15940] = 88; // 'state 124' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 15941, 15943); // 'state 124' -> +..- -> shift (target=54, len=0)
actionsTable[15943] = 90; // 'state 124' -> ** -> shift (target=45, len=0)
actionsTable.fill(1911, 15944, 15948); // 'state 124' -> !..await -> reduce (target=187, len=3)
actionsTable[15948] = 110; // 'state 124' -> ?. -> shift (target=55, len=0)
actionsTable[15949] = 864; // 'state 124' -> . -> shift (target=432, len=0)
actionsTable.fill(1911, 15950, 15956); // 'state 124' -> identifier..accessibility_modifier -> reduce (target=187, len=3)
actionsTable[15957] = 112; // 'state 124' -> equality_operator -> shift (target=56, len=0)
actionsTable[15958] = 88; // 'state 124' -> relational_operator -> shift (target=44, len=0)
actionsTable[15959] = 114; // 'state 124' -> shift_operator -> shift (target=57, len=0)
actionsTable[15960] = 90; // 'state 124' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[15961] = 866; // 'state 124' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(1911, 15962, 15964); // 'state 124' -> regex..@par-gen.EOF -> reduce (target=187, len=3)
actionsTable.fill(1911, 16000, 16008); // 'state 125' -> true..if -> reduce (target=187, len=3)
actionsTable[16008] = 86; // 'state 125' -> ( -> shift (target=43, len=0)
actionsTable.fill(1911, 16009, 16019); // 'state 125' -> )..of -> reduce (target=187, len=3)
actionsTable[16019] = 88; // 'state 125' -> in -> shift (target=44, len=0)
actionsTable.fill(1911, 16020, 16023); // 'state 125' -> return..try -> reduce (target=187, len=3)
actionsTable.fill(1911, 16025, 16034); // 'state 125' -> switch.., -> reduce (target=187, len=3)
actionsTable[16034] = 90; // 'state 125' -> * -> shift (target=45, len=0)
actionsTable[16035] = 92; // 'state 125' -> as -> shift (target=46, len=0)
actionsTable.fill(1911, 16036, 16038); // 'state 125' -> type..export -> reduce (target=187, len=3)
actionsTable[16041] = 94; // 'state 125' -> [ -> shift (target=47, len=0)
actionsTable.fill(1911, 16042, 16050); // 'state 125' -> ]..class -> reduce (target=187, len=3)
actionsTable.fill(1911, 16051, 16053); // 'state 125' -> implements..interface -> reduce (target=187, len=3)
actionsTable.fill(88, 16054, 16056); // 'state 125' -> <..> -> shift (target=44, len=0)
actionsTable.fill(1911, 16056, 16058); // 'state 125' -> |..& -> reduce (target=187, len=3)
actionsTable.fill(1911, 16059, 16061); // 'state 125' -> void..typeof -> reduce (target=187, len=3)
actionsTable.fill(1911, 16062, 16068); // 'state 125' -> new..^ -> reduce (target=187, len=3)
actionsTable[16068] = 88; // 'state 125' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 16069, 16071); // 'state 125' -> +..- -> shift (target=54, len=0)
actionsTable[16071] = 90; // 'state 125' -> ** -> shift (target=45, len=0)
actionsTable.fill(1911, 16072, 16076); // 'state 125' -> !..await -> reduce (target=187, len=3)
actionsTable[16076] = 110; // 'state 125' -> ?. -> shift (target=55, len=0)
actionsTable[16077] = 864; // 'state 125' -> . -> shift (target=432, len=0)
actionsTable.fill(1911, 16078, 16084); // 'state 125' -> identifier..accessibility_modifier -> reduce (target=187, len=3)
actionsTable[16085] = 112; // 'state 125' -> equality_operator -> shift (target=56, len=0)
actionsTable[16086] = 88; // 'state 125' -> relational_operator -> shift (target=44, len=0)
actionsTable[16087] = 114; // 'state 125' -> shift_operator -> shift (target=57, len=0)
actionsTable[16088] = 90; // 'state 125' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[16089] = 866; // 'state 125' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(1911, 16090, 16092); // 'state 125' -> regex..@par-gen.EOF -> reduce (target=187, len=3)
actionsTable.fill(1911, 16128, 16136); // 'state 126' -> true..if -> reduce (target=187, len=3)
actionsTable[16136] = 86; // 'state 126' -> ( -> shift (target=43, len=0)
actionsTable.fill(1911, 16137, 16147); // 'state 126' -> )..of -> reduce (target=187, len=3)
actionsTable[16147] = 88; // 'state 126' -> in -> shift (target=44, len=0)
actionsTable.fill(1911, 16148, 16151); // 'state 126' -> return..try -> reduce (target=187, len=3)
actionsTable.fill(1911, 16153, 16162); // 'state 126' -> switch.., -> reduce (target=187, len=3)
actionsTable[16162] = 90; // 'state 126' -> * -> shift (target=45, len=0)
actionsTable[16163] = 92; // 'state 126' -> as -> shift (target=46, len=0)
actionsTable.fill(1911, 16164, 16166); // 'state 126' -> type..export -> reduce (target=187, len=3)
actionsTable[16169] = 94; // 'state 126' -> [ -> shift (target=47, len=0)
actionsTable.fill(1911, 16170, 16178); // 'state 126' -> ]..class -> reduce (target=187, len=3)
actionsTable.fill(1911, 16179, 16181); // 'state 126' -> implements..interface -> reduce (target=187, len=3)
actionsTable.fill(88, 16182, 16184); // 'state 126' -> <..> -> shift (target=44, len=0)
actionsTable.fill(1911, 16184, 16186); // 'state 126' -> |..& -> reduce (target=187, len=3)
actionsTable.fill(1911, 16187, 16189); // 'state 126' -> void..typeof -> reduce (target=187, len=3)
actionsTable.fill(1911, 16190, 16196); // 'state 126' -> new..^ -> reduce (target=187, len=3)
actionsTable[16196] = 88; // 'state 126' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 16197, 16199); // 'state 126' -> +..- -> shift (target=54, len=0)
actionsTable[16199] = 90; // 'state 126' -> ** -> shift (target=45, len=0)
actionsTable.fill(1911, 16200, 16204); // 'state 126' -> !..await -> reduce (target=187, len=3)
actionsTable[16204] = 110; // 'state 126' -> ?. -> shift (target=55, len=0)
actionsTable[16205] = 864; // 'state 126' -> . -> shift (target=432, len=0)
actionsTable.fill(1911, 16206, 16212); // 'state 126' -> identifier..accessibility_modifier -> reduce (target=187, len=3)
actionsTable[16213] = 1911; // 'state 126' -> equality_operator -> reduce (target=187, len=3)
actionsTable[16214] = 88; // 'state 126' -> relational_operator -> shift (target=44, len=0)
actionsTable[16215] = 114; // 'state 126' -> shift_operator -> shift (target=57, len=0)
actionsTable[16216] = 90; // 'state 126' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[16217] = 866; // 'state 126' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(1911, 16218, 16220); // 'state 126' -> regex..@par-gen.EOF -> reduce (target=187, len=3)
actionsTable.fill(1911, 16256, 16264); // 'state 127' -> true..if -> reduce (target=187, len=3)
actionsTable[16264] = 86; // 'state 127' -> ( -> shift (target=43, len=0)
actionsTable.fill(1911, 16265, 16279); // 'state 127' -> )..try -> reduce (target=187, len=3)
actionsTable.fill(1911, 16281, 16290); // 'state 127' -> switch.., -> reduce (target=187, len=3)
actionsTable[16290] = 90; // 'state 127' -> * -> shift (target=45, len=0)
actionsTable[16291] = 92; // 'state 127' -> as -> shift (target=46, len=0)
actionsTable.fill(1911, 16292, 16294); // 'state 127' -> type..export -> reduce (target=187, len=3)
actionsTable[16297] = 94; // 'state 127' -> [ -> shift (target=47, len=0)
actionsTable.fill(1911, 16298, 16306); // 'state 127' -> ]..class -> reduce (target=187, len=3)
actionsTable.fill(1911, 16307, 16309); // 'state 127' -> implements..interface -> reduce (target=187, len=3)
actionsTable.fill(1911, 16310, 16314); // 'state 127' -> <..& -> reduce (target=187, len=3)
actionsTable.fill(1911, 16315, 16317); // 'state 127' -> void..typeof -> reduce (target=187, len=3)
actionsTable.fill(1911, 16318, 16325); // 'state 127' -> new..instanceof -> reduce (target=187, len=3)
actionsTable.fill(108, 16325, 16327); // 'state 127' -> +..- -> shift (target=54, len=0)
actionsTable[16327] = 90; // 'state 127' -> ** -> shift (target=45, len=0)
actionsTable.fill(1911, 16328, 16332); // 'state 127' -> !..await -> reduce (target=187, len=3)
actionsTable[16332] = 110; // 'state 127' -> ?. -> shift (target=55, len=0)
actionsTable[16333] = 864; // 'state 127' -> . -> shift (target=432, len=0)
actionsTable.fill(1911, 16334, 16340); // 'state 127' -> identifier..accessibility_modifier -> reduce (target=187, len=3)
actionsTable.fill(1911, 16341, 16343); // 'state 127' -> equality_operator..relational_operator -> reduce (target=187, len=3)
actionsTable[16343] = 114; // 'state 127' -> shift_operator -> shift (target=57, len=0)
actionsTable[16344] = 90; // 'state 127' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[16345] = 866; // 'state 127' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(1911, 16346, 16348); // 'state 127' -> regex..@par-gen.EOF -> reduce (target=187, len=3)
actionsTable.fill(1911, 16384, 16392); // 'state 128' -> true..if -> reduce (target=187, len=3)
actionsTable[16392] = 86; // 'state 128' -> ( -> shift (target=43, len=0)
actionsTable.fill(1911, 16393, 16407); // 'state 128' -> )..try -> reduce (target=187, len=3)
actionsTable.fill(1911, 16409, 16418); // 'state 128' -> switch.., -> reduce (target=187, len=3)
actionsTable[16418] = 90; // 'state 128' -> * -> shift (target=45, len=0)
actionsTable[16419] = 92; // 'state 128' -> as -> shift (target=46, len=0)
actionsTable.fill(1911, 16420, 16422); // 'state 128' -> type..export -> reduce (target=187, len=3)
actionsTable[16425] = 94; // 'state 128' -> [ -> shift (target=47, len=0)
actionsTable.fill(1911, 16426, 16434); // 'state 128' -> ]..class -> reduce (target=187, len=3)
actionsTable.fill(1911, 16435, 16437); // 'state 128' -> implements..interface -> reduce (target=187, len=3)
actionsTable.fill(1911, 16438, 16442); // 'state 128' -> <..& -> reduce (target=187, len=3)
actionsTable.fill(1911, 16443, 16445); // 'state 128' -> void..typeof -> reduce (target=187, len=3)
actionsTable.fill(1911, 16446, 16453); // 'state 128' -> new..instanceof -> reduce (target=187, len=3)
actionsTable.fill(108, 16453, 16455); // 'state 128' -> +..- -> shift (target=54, len=0)
actionsTable[16455] = 90; // 'state 128' -> ** -> shift (target=45, len=0)
actionsTable.fill(1911, 16456, 16460); // 'state 128' -> !..await -> reduce (target=187, len=3)
actionsTable[16460] = 110; // 'state 128' -> ?. -> shift (target=55, len=0)
actionsTable[16461] = 864; // 'state 128' -> . -> shift (target=432, len=0)
actionsTable.fill(1911, 16462, 16468); // 'state 128' -> identifier..accessibility_modifier -> reduce (target=187, len=3)
actionsTable.fill(1911, 16469, 16472); // 'state 128' -> equality_operator..shift_operator -> reduce (target=187, len=3)
actionsTable[16472] = 90; // 'state 128' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[16473] = 866; // 'state 128' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(1911, 16474, 16476); // 'state 128' -> regex..@par-gen.EOF -> reduce (target=187, len=3)
actionsTable.fill(1911, 16512, 16520); // 'state 129' -> true..if -> reduce (target=187, len=3)
actionsTable[16520] = 86; // 'state 129' -> ( -> shift (target=43, len=0)
actionsTable.fill(1911, 16521, 16535); // 'state 129' -> )..try -> reduce (target=187, len=3)
actionsTable.fill(1911, 16537, 16546); // 'state 129' -> switch.., -> reduce (target=187, len=3)
actionsTable[16546] = 90; // 'state 129' -> * -> shift (target=45, len=0)
actionsTable[16547] = 92; // 'state 129' -> as -> shift (target=46, len=0)
actionsTable.fill(1911, 16548, 16550); // 'state 129' -> type..export -> reduce (target=187, len=3)
actionsTable[16553] = 94; // 'state 129' -> [ -> shift (target=47, len=0)
actionsTable.fill(1911, 16554, 16562); // 'state 129' -> ]..class -> reduce (target=187, len=3)
actionsTable.fill(1911, 16563, 16565); // 'state 129' -> implements..interface -> reduce (target=187, len=3)
actionsTable.fill(1911, 16566, 16570); // 'state 129' -> <..& -> reduce (target=187, len=3)
actionsTable.fill(1911, 16571, 16573); // 'state 129' -> void..typeof -> reduce (target=187, len=3)
actionsTable.fill(1911, 16574, 16583); // 'state 129' -> new..- -> reduce (target=187, len=3)
actionsTable[16583] = 90; // 'state 129' -> ** -> shift (target=45, len=0)
actionsTable.fill(1911, 16584, 16588); // 'state 129' -> !..await -> reduce (target=187, len=3)
actionsTable[16588] = 110; // 'state 129' -> ?. -> shift (target=55, len=0)
actionsTable[16589] = 864; // 'state 129' -> . -> shift (target=432, len=0)
actionsTable.fill(1911, 16590, 16596); // 'state 129' -> identifier..accessibility_modifier -> reduce (target=187, len=3)
actionsTable.fill(1911, 16597, 16600); // 'state 129' -> equality_operator..shift_operator -> reduce (target=187, len=3)
actionsTable[16600] = 90; // 'state 129' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[16601] = 866; // 'state 129' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(1911, 16602, 16604); // 'state 129' -> regex..@par-gen.EOF -> reduce (target=187, len=3)
actionsTable.fill(1911, 16640, 16648); // 'state 130' -> true..if -> reduce (target=187, len=3)
actionsTable[16648] = 86; // 'state 130' -> ( -> shift (target=43, len=0)
actionsTable.fill(1911, 16649, 16663); // 'state 130' -> )..try -> reduce (target=187, len=3)
actionsTable.fill(1911, 16665, 16675); // 'state 130' -> switch..* -> reduce (target=187, len=3)
actionsTable[16675] = 92; // 'state 130' -> as -> shift (target=46, len=0)
actionsTable.fill(1911, 16676, 16678); // 'state 130' -> type..export -> reduce (target=187, len=3)
actionsTable[16681] = 94; // 'state 130' -> [ -> shift (target=47, len=0)
actionsTable.fill(1911, 16682, 16690); // 'state 130' -> ]..class -> reduce (target=187, len=3)
actionsTable.fill(1911, 16691, 16693); // 'state 130' -> implements..interface -> reduce (target=187, len=3)
actionsTable.fill(1911, 16694, 16698); // 'state 130' -> <..& -> reduce (target=187, len=3)
actionsTable.fill(1911, 16699, 16701); // 'state 130' -> void..typeof -> reduce (target=187, len=3)
actionsTable.fill(1911, 16702, 16711); // 'state 130' -> new..- -> reduce (target=187, len=3)
actionsTable[16711] = 90; // 'state 130' -> ** -> shift (target=45, len=0)
actionsTable.fill(1911, 16712, 16716); // 'state 130' -> !..await -> reduce (target=187, len=3)
actionsTable[16716] = 110; // 'state 130' -> ?. -> shift (target=55, len=0)
actionsTable[16717] = 864; // 'state 130' -> . -> shift (target=432, len=0)
actionsTable.fill(1911, 16718, 16724); // 'state 130' -> identifier..accessibility_modifier -> reduce (target=187, len=3)
actionsTable.fill(1911, 16725, 16729); // 'state 130' -> equality_operator..multiplicative_operator -> reduce (target=187, len=3)
actionsTable[16729] = 866; // 'state 130' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(1911, 16730, 16732); // 'state 130' -> regex..@par-gen.EOF -> reduce (target=187, len=3)
actionsTable[16774] = 1074; // 'state 131' -> } -> shift (target=537, len=0)
actionsTable[16786] = 806; // 'state 131' -> of -> shift (target=403, len=0)
actionsTable[16800] = 806; // 'state 131' -> from -> shift (target=403, len=0)
actionsTable[16804] = 806; // 'state 131' -> type -> shift (target=403, len=0)
actionsTable[16809] = 436; // 'state 131' -> [ -> shift (target=218, len=0)
actionsTable[16811] = 914; // 'state 131' -> async -> shift (target=457, len=0)
actionsTable[16814] = 438; // 'state 131' -> readonly -> shift (target=219, len=0)
actionsTable.fill(806, 16815, 16817); // 'state 131' -> get..set -> shift (target=403, len=0)
actionsTable[16830] = 440; // 'state 131' -> new -> shift (target=220, len=0)
actionsTable[16846] = 848; // 'state 131' -> identifier -> shift (target=424, len=0)
actionsTable.fill(848, 16848, 16850); // 'state 131' -> number..string -> shift (target=424, len=0)
actionsTable.fill(942, 16896, 16899); // 'state 132' -> true..null -> shift (target=471, len=0)
actionsTable[16901] = 420; // 'state 132' -> { -> shift (target=210, len=0)
actionsTable[16904] = 264; // 'state 132' -> ( -> shift (target=132, len=0)
actionsTable[16905] = 1066; // 'state 132' -> ) -> shift (target=533, len=0)
actionsTable[16936] = 422; // 'state 132' -> ... -> shift (target=211, len=0)
actionsTable[16937] = 424; // 'state 132' -> [ -> shift (target=212, len=0)
actionsTable[16950] = 28; // 'state 132' -> < -> shift (target=14, len=0)
actionsTable[16952] = 268; // 'state 132' -> | -> shift (target=134, len=0)
actionsTable[16955] = 942; // 'state 132' -> void -> shift (target=471, len=0)
actionsTable[16956] = 944; // 'state 132' -> typeof -> shift (target=472, len=0)
actionsTable[16974] = 426; // 'state 132' -> identifier -> shift (target=213, len=0)
actionsTable.fill(942, 16976, 16978); // 'state 132' -> number..string -> shift (target=471, len=0)
actionsTable.fill(942, 17024, 17027); // 'state 133' -> true..null -> shift (target=471, len=0)
actionsTable[17029] = 262; // 'state 133' -> { -> shift (target=131, len=0)
actionsTable[17032] = 264; // 'state 133' -> ( -> shift (target=132, len=0)
actionsTable[17065] = 266; // 'state 133' -> [ -> shift (target=133, len=0)
actionsTable[17066] = 1072; // 'state 133' -> ] -> shift (target=536, len=0)
actionsTable[17078] = 28; // 'state 133' -> < -> shift (target=14, len=0)
actionsTable[17080] = 268; // 'state 133' -> | -> shift (target=134, len=0)
actionsTable[17083] = 942; // 'state 133' -> void -> shift (target=471, len=0)
actionsTable[17084] = 944; // 'state 133' -> typeof -> shift (target=472, len=0)
actionsTable[17102] = 270; // 'state 133' -> identifier -> shift (target=135, len=0)
actionsTable.fill(942, 17104, 17106); // 'state 133' -> number..string -> shift (target=471, len=0)
actionsTable.fill(942, 17152, 17155); // 'state 134' -> true..null -> shift (target=471, len=0)
actionsTable[17157] = 262; // 'state 134' -> { -> shift (target=131, len=0)
actionsTable[17160] = 264; // 'state 134' -> ( -> shift (target=132, len=0)
actionsTable[17193] = 266; // 'state 134' -> [ -> shift (target=133, len=0)
actionsTable[17206] = 28; // 'state 134' -> < -> shift (target=14, len=0)
actionsTable[17208] = 268; // 'state 134' -> | -> shift (target=134, len=0)
actionsTable[17211] = 942; // 'state 134' -> void -> shift (target=471, len=0)
actionsTable[17212] = 944; // 'state 134' -> typeof -> shift (target=472, len=0)
actionsTable[17230] = 270; // 'state 134' -> identifier -> shift (target=135, len=0)
actionsTable.fill(942, 17232, 17234); // 'state 134' -> number..string -> shift (target=471, len=0)
actionsTable.fill(839, 17280, 17303); // 'state 135' -> true..try -> reduce (target=163, len=1)
actionsTable.fill(839, 17305, 17318); // 'state 135' -> switch..export -> reduce (target=163, len=1)
actionsTable[17319] = 839; // 'state 135' -> = -> reduce (target=163, len=1)
actionsTable.fill(839, 17321, 17330); // 'state 135' -> [..class -> reduce (target=163, len=1)
actionsTable.fill(839, 17331, 17333); // 'state 135' -> implements..interface -> reduce (target=163, len=1)
actionsTable[17334] = 366; // 'state 135' -> < -> shift (target=183, len=0)
actionsTable.fill(839, 17335, 17341); // 'state 135' -> >..typeof -> reduce (target=163, len=1)
actionsTable[17341] = 432; // 'state 135' -> is -> shift (target=216, len=0)
actionsTable.fill(839, 17342, 17364); // 'state 135' -> new..accessibility_modifier -> reduce (target=163, len=1)
actionsTable.fill(839, 17365, 17372); // 'state 135' -> equality_operator..@par-gen.EOF -> reduce (target=163, len=1)
actionsTable[17416] = 418; // 'state 136' -> ( -> shift (target=209, len=0)
actionsTable.fill(798, 17536, 17541); // 'state 137' -> true..super -> shift (target=399, len=0)
actionsTable[17541] = 68; // 'state 137' -> { -> shift (target=34, len=0)
actionsTable[17544] = 4; // 'state 137' -> ( -> shift (target=2, len=0)
actionsTable[17554] = 806; // 'state 137' -> of -> shift (target=403, len=0)
actionsTable[17568] = 806; // 'state 137' -> from -> shift (target=403, len=0)
actionsTable[17572] = 806; // 'state 137' -> type -> shift (target=403, len=0)
actionsTable[17577] = 20; // 'state 137' -> [ -> shift (target=10, len=0)
actionsTable[17579] = 70; // 'state 137' -> async -> shift (target=35, len=0)
actionsTable[17580] = 72; // 'state 137' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 17583, 17585); // 'state 137' -> get..set -> shift (target=403, len=0)
actionsTable[17585] = 74; // 'state 137' -> class -> shift (target=37, len=0)
actionsTable[17590] = 28; // 'state 137' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 17595, 17597); // 'state 137' -> void..typeof -> shift (target=15, len=0)
actionsTable[17598] = 32; // 'state 137' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 17605, 17607); // 'state 137' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 17608, 17611); // 'state 137' -> !..delete -> shift (target=15, len=0)
actionsTable[17611] = 34; // 'state 137' -> await -> shift (target=17, len=0)
actionsTable[17614] = 818; // 'state 137' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 17616, 17619); // 'state 137' -> number..template_string -> shift (target=399, len=0)
actionsTable[17625] = 36; // 'state 137' -> update_operator -> shift (target=18, len=0)
actionsTable[17626] = 798; // 'state 137' -> regex -> shift (target=399, len=0)
actionsTable[17673] = 1080; // 'state 138' -> ) -> shift (target=540, len=0)
actionsTable[17697] = 448; // 'state 138' -> , -> shift (target=224, len=0)
actionsTable[17800] = 86; // 'state 139' -> ( -> shift (target=43, len=0)
actionsTable[17811] = 88; // 'state 139' -> in -> shift (target=44, len=0)
actionsTable[17826] = 90; // 'state 139' -> * -> shift (target=45, len=0)
actionsTable[17827] = 92; // 'state 139' -> as -> shift (target=46, len=0)
actionsTable[17833] = 94; // 'state 139' -> [ -> shift (target=47, len=0)
actionsTable[17834] = 1084; // 'state 139' -> ] -> shift (target=542, len=0)
actionsTable.fill(88, 17846, 17848); // 'state 139' -> <..> -> shift (target=44, len=0)
actionsTable[17848] = 96; // 'state 139' -> | -> shift (target=48, len=0)
actionsTable[17849] = 98; // 'state 139' -> & -> shift (target=49, len=0)
actionsTable[17855] = 100; // 'state 139' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 17856, 17858); // 'state 139' -> ||..?? -> shift (target=51, len=0)
actionsTable[17858] = 104; // 'state 139' -> && -> shift (target=52, len=0)
actionsTable[17859] = 106; // 'state 139' -> ^ -> shift (target=53, len=0)
actionsTable[17860] = 88; // 'state 139' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 17861, 17863); // 'state 139' -> +..- -> shift (target=54, len=0)
actionsTable[17863] = 90; // 'state 139' -> ** -> shift (target=45, len=0)
actionsTable[17868] = 110; // 'state 139' -> ?. -> shift (target=55, len=0)
actionsTable[17869] = 864; // 'state 139' -> . -> shift (target=432, len=0)
actionsTable[17877] = 112; // 'state 139' -> equality_operator -> shift (target=56, len=0)
actionsTable[17878] = 88; // 'state 139' -> relational_operator -> shift (target=44, len=0)
actionsTable[17879] = 114; // 'state 139' -> shift_operator -> shift (target=57, len=0)
actionsTable[17880] = 90; // 'state 139' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[17881] = 866; // 'state 139' -> update_operator -> shift (target=433, len=0)
actionsTable[17925] = 116; // 'state 140' -> { -> shift (target=58, len=0)
actionsTable[17954] = 870; // 'state 140' -> * -> shift (target=435, len=0)
actionsTable[18054] = 1090; // 'state 141' -> } -> shift (target=545, len=0)
actionsTable[18081] = 450; // 'state 141' -> , -> shift (target=225, len=0)
actionsTable[18184] = 138; // 'state 142' -> ( -> shift (target=69, len=0)
actionsTable[18230] = 28; // 'state 142' -> < -> shift (target=14, len=0)
actionsTable[18309] = 146; // 'state 143' -> { -> shift (target=73, len=0)
actionsTable[18354] = 148; // 'state 143' -> extends -> shift (target=74, len=0)
actionsTable[18355] = 150; // 'state 143' -> implements -> shift (target=75, len=0)
actionsTable[18358] = 28; // 'state 143' -> < -> shift (target=14, len=0)
actionsTable.fill(1785, 18432, 18440); // 'state 144' -> true..if -> reduce (target=124, len=3)
actionsTable[18440] = 86; // 'state 144' -> ( -> shift (target=43, len=0)
actionsTable.fill(1785, 18442, 18445); // 'state 144' -> else..do -> reduce (target=124, len=3)
actionsTable[18445] = 1102; // 'state 144' -> ; -> shift (target=551, len=0)
actionsTable.fill(1785, 18446, 18451); // 'state 144' -> for..of -> reduce (target=124, len=3)
actionsTable[18451] = 88; // 'state 144' -> in -> shift (target=44, len=0)
actionsTable.fill(1785, 18452, 18455); // 'state 144' -> return..try -> reduce (target=124, len=3)
actionsTable.fill(1785, 18457, 18459); // 'state 144' -> switch..case -> reduce (target=124, len=3)
actionsTable.fill(1785, 18460, 18465); // 'state 144' -> default..from -> reduce (target=124, len=3)
actionsTable[18466] = 90; // 'state 144' -> * -> shift (target=45, len=0)
actionsTable[18467] = 92; // 'state 144' -> as -> shift (target=46, len=0)
actionsTable.fill(1785, 18468, 18470); // 'state 144' -> type..export -> reduce (target=124, len=3)
actionsTable[18473] = 94; // 'state 144' -> [ -> shift (target=47, len=0)
actionsTable.fill(1785, 18475, 18477); // 'state 144' -> async..function -> reduce (target=124, len=3)
actionsTable.fill(1785, 18479, 18482); // 'state 144' -> get..class -> reduce (target=124, len=3)
actionsTable[18484] = 1785; // 'state 144' -> interface -> reduce (target=124, len=3)
actionsTable.fill(88, 18486, 18488); // 'state 144' -> <..> -> shift (target=44, len=0)
actionsTable[18488] = 96; // 'state 144' -> | -> shift (target=48, len=0)
actionsTable[18489] = 98; // 'state 144' -> & -> shift (target=49, len=0)
actionsTable.fill(1785, 18491, 18493); // 'state 144' -> void..typeof -> reduce (target=124, len=3)
actionsTable[18494] = 1785; // 'state 144' -> new -> reduce (target=124, len=3)
actionsTable[18495] = 100; // 'state 144' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 18496, 18498); // 'state 144' -> ||..?? -> shift (target=51, len=0)
actionsTable[18498] = 104; // 'state 144' -> && -> shift (target=52, len=0)
actionsTable[18499] = 106; // 'state 144' -> ^ -> shift (target=53, len=0)
actionsTable[18500] = 88; // 'state 144' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 18501, 18503); // 'state 144' -> +..- -> shift (target=54, len=0)
actionsTable[18503] = 90; // 'state 144' -> ** -> shift (target=45, len=0)
actionsTable.fill(1785, 18504, 18508); // 'state 144' -> !..await -> reduce (target=124, len=3)
actionsTable[18508] = 110; // 'state 144' -> ?. -> shift (target=55, len=0)
actionsTable[18509] = 864; // 'state 144' -> . -> shift (target=432, len=0)
actionsTable[18510] = 1785; // 'state 144' -> identifier -> reduce (target=124, len=3)
actionsTable.fill(1785, 18512, 18515); // 'state 144' -> number..template_string -> reduce (target=124, len=3)
actionsTable[18517] = 112; // 'state 144' -> equality_operator -> shift (target=56, len=0)
actionsTable[18518] = 88; // 'state 144' -> relational_operator -> shift (target=44, len=0)
actionsTable[18519] = 114; // 'state 144' -> shift_operator -> shift (target=57, len=0)
actionsTable[18520] = 90; // 'state 144' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[18521] = 866; // 'state 144' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(1785, 18522, 18524); // 'state 144' -> regex..@par-gen.EOF -> reduce (target=124, len=3)
actionsTable[18565] = 122; // 'state 145' -> { -> shift (target=61, len=0)
actionsTable[18601] = 124; // 'state 145' -> [ -> shift (target=62, len=0)
actionsTable[18638] = 894; // 'state 145' -> identifier -> shift (target=447, len=0)
actionsTable.fill(798, 18688, 18693); // 'state 146' -> true..super -> shift (target=399, len=0)
actionsTable[18693] = 68; // 'state 146' -> { -> shift (target=34, len=0)
actionsTable[18696] = 4; // 'state 146' -> ( -> shift (target=2, len=0)
actionsTable[18706] = 806; // 'state 146' -> of -> shift (target=403, len=0)
actionsTable[18720] = 806; // 'state 146' -> from -> shift (target=403, len=0)
actionsTable[18724] = 806; // 'state 146' -> type -> shift (target=403, len=0)
actionsTable[18729] = 20; // 'state 146' -> [ -> shift (target=10, len=0)
actionsTable[18731] = 70; // 'state 146' -> async -> shift (target=35, len=0)
actionsTable[18732] = 72; // 'state 146' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 18735, 18737); // 'state 146' -> get..set -> shift (target=403, len=0)
actionsTable[18737] = 74; // 'state 146' -> class -> shift (target=37, len=0)
actionsTable[18742] = 28; // 'state 146' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 18747, 18749); // 'state 146' -> void..typeof -> shift (target=15, len=0)
actionsTable[18750] = 32; // 'state 146' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 18757, 18759); // 'state 146' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 18760, 18763); // 'state 146' -> !..delete -> shift (target=15, len=0)
actionsTable[18763] = 34; // 'state 146' -> await -> shift (target=17, len=0)
actionsTable[18766] = 818; // 'state 146' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 18768, 18771); // 'state 146' -> number..template_string -> shift (target=399, len=0)
actionsTable[18777] = 36; // 'state 146' -> update_operator -> shift (target=18, len=0)
actionsTable[18778] = 798; // 'state 146' -> regex -> shift (target=399, len=0)
actionsTable[18821] = 122; // 'state 147' -> { -> shift (target=61, len=0)
actionsTable[18857] = 124; // 'state 147' -> [ -> shift (target=62, len=0)
actionsTable[18894] = 894; // 'state 147' -> identifier -> shift (target=447, len=0)
actionsTable[18950] = 1112; // 'state 148' -> } -> shift (target=556, len=0)
actionsTable[18977] = 468; // 'state 148' -> , -> shift (target=234, len=0)
actionsTable[19077] = 122; // 'state 149' -> { -> shift (target=61, len=0)
actionsTable[19112] = 300; // 'state 149' -> ... -> shift (target=150, len=0)
actionsTable[19113] = 124; // 'state 149' -> [ -> shift (target=62, len=0)
actionsTable[19150] = 894; // 'state 149' -> identifier -> shift (target=447, len=0)
actionsTable[19205] = 122; // 'state 150' -> { -> shift (target=61, len=0)
actionsTable[19241] = 124; // 'state 150' -> [ -> shift (target=62, len=0)
actionsTable[19278] = 894; // 'state 150' -> identifier -> shift (target=447, len=0)
actionsTable[19361] = 476; // 'state 151' -> , -> shift (target=238, len=0)
actionsTable[19370] = 1118; // 'state 151' -> ] -> shift (target=559, len=0)
actionsTable[19464] = 138; // 'state 152' -> ( -> shift (target=69, len=0)
actionsTable[19510] = 28; // 'state 152' -> < -> shift (target=14, len=0)
actionsTable[19589] = 80; // 'state 153' -> { -> shift (target=40, len=0)
actionsTable[19611] = 164; // 'state 153' -> : -> shift (target=82, len=0)
actionsTable[19637] = 164; // 'state 153' -> ?: -> shift (target=82, len=0)
actionsTable[19720] = 138; // 'state 154' -> ( -> shift (target=69, len=0)
actionsTable.fill(798, 19840, 19845); // 'state 155' -> true..super -> shift (target=399, len=0)
actionsTable[19845] = 2; // 'state 155' -> { -> shift (target=1, len=0)
actionsTable[19848] = 4; // 'state 155' -> ( -> shift (target=2, len=0)
actionsTable[19858] = 806; // 'state 155' -> of -> shift (target=403, len=0)
actionsTable[19872] = 806; // 'state 155' -> from -> shift (target=403, len=0)
actionsTable[19876] = 806; // 'state 155' -> type -> shift (target=403, len=0)
actionsTable[19881] = 20; // 'state 155' -> [ -> shift (target=10, len=0)
actionsTable[19883] = 70; // 'state 155' -> async -> shift (target=35, len=0)
actionsTable[19884] = 72; // 'state 155' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 19887, 19889); // 'state 155' -> get..set -> shift (target=403, len=0)
actionsTable[19889] = 74; // 'state 155' -> class -> shift (target=37, len=0)
actionsTable[19894] = 28; // 'state 155' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 19899, 19901); // 'state 155' -> void..typeof -> shift (target=15, len=0)
actionsTable[19902] = 32; // 'state 155' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 19909, 19911); // 'state 155' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 19912, 19915); // 'state 155' -> !..delete -> shift (target=15, len=0)
actionsTable[19915] = 34; // 'state 155' -> await -> shift (target=17, len=0)
actionsTable[19918] = 818; // 'state 155' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 19920, 19923); // 'state 155' -> number..template_string -> shift (target=399, len=0)
actionsTable[19929] = 36; // 'state 155' -> update_operator -> shift (target=18, len=0)
actionsTable[19930] = 798; // 'state 155' -> regex -> shift (target=399, len=0)
actionsTable[19995] = 164; // 'state 156' -> : -> shift (target=82, len=0)
actionsTable[20021] = 164; // 'state 156' -> ?: -> shift (target=82, len=0)
actionsTable[20026] = 490; // 'state 156' -> => -> shift (target=245, len=0)
actionsTable[20101] = 80; // 'state 157' -> { -> shift (target=40, len=0)
actionsTable[20109] = 1130; // 'state 157' -> ; -> shift (target=565, len=0)
actionsTable[20123] = 164; // 'state 157' -> : -> shift (target=82, len=0)
actionsTable[20149] = 164; // 'state 157' -> ?: -> shift (target=82, len=0)
actionsTable[20232] = 138; // 'state 158' -> ( -> shift (target=69, len=0)
actionsTable[20357] = 80; // 'state 159' -> { -> shift (target=40, len=0)
actionsTable[20485] = 122; // 'state 160' -> { -> shift (target=61, len=0)
actionsTable[20521] = 124; // 'state 160' -> [ -> shift (target=62, len=0)
actionsTable[20558] = 894; // 'state 160' -> identifier -> shift (target=447, len=0)
actionsTable[20617] = 789; // 'state 161' -> ) -> reduce (target=138, len=1)
actionsTable[20635] = 164; // 'state 161' -> : -> shift (target=82, len=0)
actionsTable[20641] = 789; // 'state 161' -> , -> reduce (target=138, len=1)
actionsTable[20647] = 498; // 'state 161' -> = -> shift (target=249, len=0)
actionsTable[20661] = 164; // 'state 161' -> ?: -> shift (target=82, len=0)
actionsTable[20745] = 1134; // 'state 162' -> ) -> shift (target=567, len=0)
actionsTable[20769] = 494; // 'state 162' -> , -> shift (target=247, len=0)
actionsTable[20869] = 122; // 'state 163' -> { -> shift (target=61, len=0)
actionsTable[20905] = 124; // 'state 163' -> [ -> shift (target=62, len=0)
actionsTable[20907] = 1138; // 'state 163' -> async -> shift (target=569, len=0)
actionsTable.fill(1140, 20909, 20911); // 'state 163' -> static..readonly -> shift (target=570, len=0)
actionsTable.fill(1138, 20911, 20913); // 'state 163' -> get..set -> shift (target=569, len=0)
actionsTable[20942] = 894; // 'state 163' -> identifier -> shift (target=447, len=0)
actionsTable[20947] = 1140; // 'state 163' -> accessibility_modifier -> shift (target=570, len=0)
actionsTable[20997] = 146; // 'state 164' -> { -> shift (target=73, len=0)
actionsTable[21125] = 146; // 'state 165' -> { -> shift (target=73, len=0)
actionsTable[21170] = 148; // 'state 165' -> extends -> shift (target=74, len=0)
actionsTable[21171] = 150; // 'state 165' -> implements -> shift (target=75, len=0)
actionsTable[21253] = 146; // 'state 166' -> { -> shift (target=73, len=0)
actionsTable[21381] = 1313; // 'state 167' -> { -> reduce (target=144, len=2)
actionsTable[21384] = 86; // 'state 167' -> ( -> shift (target=43, len=0)
actionsTable[21395] = 88; // 'state 167' -> in -> shift (target=44, len=0)
actionsTable[21410] = 90; // 'state 167' -> * -> shift (target=45, len=0)
actionsTable[21411] = 92; // 'state 167' -> as -> shift (target=46, len=0)
actionsTable[21417] = 94; // 'state 167' -> [ -> shift (target=47, len=0)
actionsTable[21427] = 150; // 'state 167' -> implements -> shift (target=75, len=0)
actionsTable.fill(88, 21430, 21432); // 'state 167' -> <..> -> shift (target=44, len=0)
actionsTable[21432] = 96; // 'state 167' -> | -> shift (target=48, len=0)
actionsTable[21433] = 98; // 'state 167' -> & -> shift (target=49, len=0)
actionsTable[21439] = 100; // 'state 167' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 21440, 21442); // 'state 167' -> ||..?? -> shift (target=51, len=0)
actionsTable[21442] = 104; // 'state 167' -> && -> shift (target=52, len=0)
actionsTable[21443] = 106; // 'state 167' -> ^ -> shift (target=53, len=0)
actionsTable[21444] = 88; // 'state 167' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 21445, 21447); // 'state 167' -> +..- -> shift (target=54, len=0)
actionsTable[21447] = 90; // 'state 167' -> ** -> shift (target=45, len=0)
actionsTable[21452] = 110; // 'state 167' -> ?. -> shift (target=55, len=0)
actionsTable[21453] = 864; // 'state 167' -> . -> shift (target=432, len=0)
actionsTable[21461] = 112; // 'state 167' -> equality_operator -> shift (target=56, len=0)
actionsTable[21462] = 88; // 'state 167' -> relational_operator -> shift (target=44, len=0)
actionsTable[21463] = 114; // 'state 167' -> shift_operator -> shift (target=57, len=0)
actionsTable[21464] = 90; // 'state 167' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[21465] = 866; // 'state 167' -> update_operator -> shift (target=433, len=0)
actionsTable[21509] = 1317; // 'state 168' -> { -> reduce (target=146, len=2)
actionsTable[21537] = 504; // 'state 168' -> , -> shift (target=252, len=0)
actionsTable[21560] = 506; // 'state 168' -> | -> shift (target=253, len=0)
actionsTable[21561] = 508; // 'state 168' -> & -> shift (target=254, len=0)
actionsTable[21638] = 813; // 'state 169' -> } -> reduce (target=150, len=1)
actionsTable[21640] = 138; // 'state 169' -> ( -> shift (target=69, len=0)
actionsTable[21645] = 1160; // 'state 169' -> ; -> shift (target=580, len=0)
actionsTable[21650] = 813; // 'state 169' -> of -> reduce (target=150, len=1)
actionsTable[21659] = 164; // 'state 169' -> : -> shift (target=82, len=0)
actionsTable[21664] = 813; // 'state 169' -> from -> reduce (target=150, len=1)
actionsTable[21668] = 813; // 'state 169' -> type -> reduce (target=150, len=1)
actionsTable[21671] = 512; // 'state 169' -> = -> shift (target=256, len=0)
actionsTable[21673] = 813; // 'state 169' -> [ -> reduce (target=150, len=1)
actionsTable[21675] = 813; // 'state 169' -> async -> reduce (target=150, len=1)
actionsTable.fill(813, 21677, 21681); // 'state 169' -> static..set -> reduce (target=150, len=1)
actionsTable[21685] = 164; // 'state 169' -> ?: -> shift (target=82, len=0)
actionsTable[21686] = 28; // 'state 169' -> < -> shift (target=14, len=0)
actionsTable.fill(813, 21710, 21714); // 'state 169' -> identifier..string -> reduce (target=150, len=1)
actionsTable[21715] = 813; // 'state 169' -> accessibility_modifier -> reduce (target=150, len=1)
actionsTable[21778] = 806; // 'state 170' -> of -> shift (target=403, len=0)
actionsTable[21792] = 806; // 'state 170' -> from -> shift (target=403, len=0)
actionsTable[21796] = 806; // 'state 170' -> type -> shift (target=403, len=0)
actionsTable[21801] = 198; // 'state 170' -> [ -> shift (target=99, len=0)
actionsTable[21803] = 1158; // 'state 170' -> async -> shift (target=579, len=0)
actionsTable.fill(1140, 21805, 21807); // 'state 170' -> static..readonly -> shift (target=570, len=0)
actionsTable.fill(1158, 21807, 21809); // 'state 170' -> get..set -> shift (target=579, len=0)
actionsTable[21838] = 848; // 'state 170' -> identifier -> shift (target=424, len=0)
actionsTable[21839] = 510; // 'state 170' -> private_property_identifier -> shift (target=255, len=0)
actionsTable.fill(848, 21840, 21842); // 'state 170' -> number..string -> shift (target=424, len=0)
actionsTable[21843] = 1140; // 'state 170' -> accessibility_modifier -> shift (target=570, len=0)
actionsTable[21894] = 1154; // 'state 171' -> } -> shift (target=577, len=0)
actionsTable[21901] = 1156; // 'state 171' -> ; -> shift (target=578, len=0)
actionsTable[21906] = 806; // 'state 171' -> of -> shift (target=403, len=0)
actionsTable[21920] = 806; // 'state 171' -> from -> shift (target=403, len=0)
actionsTable[21924] = 806; // 'state 171' -> type -> shift (target=403, len=0)
actionsTable[21929] = 198; // 'state 171' -> [ -> shift (target=99, len=0)
actionsTable[21931] = 1018; // 'state 171' -> async -> shift (target=509, len=0)
actionsTable.fill(1008, 21933, 21935); // 'state 171' -> static..readonly -> shift (target=504, len=0)
actionsTable.fill(1020, 21935, 21937); // 'state 171' -> get..set -> shift (target=510, len=0)
actionsTable[21966] = 848; // 'state 171' -> identifier -> shift (target=424, len=0)
actionsTable[21967] = 338; // 'state 171' -> private_property_identifier -> shift (target=169, len=0)
actionsTable.fill(848, 21968, 21970); // 'state 171' -> number..string -> shift (target=424, len=0)
actionsTable[21971] = 1008; // 'state 171' -> accessibility_modifier -> shift (target=504, len=0)
actionsTable.fill(942, 22016, 22019); // 'state 172' -> true..null -> shift (target=471, len=0)
actionsTable[22021] = 262; // 'state 172' -> { -> shift (target=131, len=0)
actionsTable[22024] = 264; // 'state 172' -> ( -> shift (target=132, len=0)
actionsTable[22057] = 266; // 'state 172' -> [ -> shift (target=133, len=0)
actionsTable[22070] = 28; // 'state 172' -> < -> shift (target=14, len=0)
actionsTable[22072] = 268; // 'state 172' -> | -> shift (target=134, len=0)
actionsTable[22075] = 942; // 'state 172' -> void -> shift (target=471, len=0)
actionsTable[22076] = 944; // 'state 172' -> typeof -> shift (target=472, len=0)
actionsTable[22094] = 270; // 'state 172' -> identifier -> shift (target=135, len=0)
actionsTable.fill(942, 22096, 22098); // 'state 172' -> number..string -> shift (target=471, len=0)
actionsTable[22149] = 262; // 'state 173' -> { -> shift (target=131, len=0)
actionsTable[22277] = 262; // 'state 174' -> { -> shift (target=131, len=0)
actionsTable[22322] = 344; // 'state 174' -> extends -> shift (target=172, len=0)
actionsTable.fill(942, 22400, 22403); // 'state 175' -> true..null -> shift (target=471, len=0)
actionsTable[22405] = 262; // 'state 175' -> { -> shift (target=131, len=0)
actionsTable[22408] = 264; // 'state 175' -> ( -> shift (target=132, len=0)
actionsTable[22441] = 266; // 'state 175' -> [ -> shift (target=133, len=0)
actionsTable[22454] = 28; // 'state 175' -> < -> shift (target=14, len=0)
actionsTable[22456] = 268; // 'state 175' -> | -> shift (target=134, len=0)
actionsTable[22459] = 942; // 'state 175' -> void -> shift (target=471, len=0)
actionsTable[22460] = 944; // 'state 175' -> typeof -> shift (target=472, len=0)
actionsTable[22478] = 270; // 'state 175' -> identifier -> shift (target=135, len=0)
actionsTable.fill(942, 22480, 22482); // 'state 175' -> number..string -> shift (target=471, len=0)
actionsTable.fill(1907, 22528, 22536); // 'state 176' -> true..if -> reduce (target=185, len=3)
actionsTable[22536] = 86; // 'state 176' -> ( -> shift (target=43, len=0)
actionsTable.fill(1907, 22537, 22547); // 'state 176' -> )..of -> reduce (target=185, len=3)
actionsTable[22547] = 88; // 'state 176' -> in -> shift (target=44, len=0)
actionsTable.fill(1907, 22548, 22551); // 'state 176' -> return..try -> reduce (target=185, len=3)
actionsTable.fill(1907, 22553, 22562); // 'state 176' -> switch.., -> reduce (target=185, len=3)
actionsTable[22562] = 90; // 'state 176' -> * -> shift (target=45, len=0)
actionsTable[22563] = 92; // 'state 176' -> as -> shift (target=46, len=0)
actionsTable.fill(1907, 22564, 22566); // 'state 176' -> type..export -> reduce (target=185, len=3)
actionsTable[22569] = 94; // 'state 176' -> [ -> shift (target=47, len=0)
actionsTable.fill(1907, 22570, 22578); // 'state 176' -> ]..class -> reduce (target=185, len=3)
actionsTable.fill(1907, 22579, 22581); // 'state 176' -> implements..interface -> reduce (target=185, len=3)
actionsTable.fill(88, 22582, 22584); // 'state 176' -> <..> -> shift (target=44, len=0)
actionsTable[22584] = 96; // 'state 176' -> | -> shift (target=48, len=0)
actionsTable[22585] = 98; // 'state 176' -> & -> shift (target=49, len=0)
actionsTable.fill(1907, 22587, 22589); // 'state 176' -> void..typeof -> reduce (target=185, len=3)
actionsTable[22590] = 1907; // 'state 176' -> new -> reduce (target=185, len=3)
actionsTable[22591] = 100; // 'state 176' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 22592, 22594); // 'state 176' -> ||..?? -> shift (target=51, len=0)
actionsTable[22594] = 104; // 'state 176' -> && -> shift (target=52, len=0)
actionsTable[22595] = 106; // 'state 176' -> ^ -> shift (target=53, len=0)
actionsTable[22596] = 88; // 'state 176' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 22597, 22599); // 'state 176' -> +..- -> shift (target=54, len=0)
actionsTable[22599] = 90; // 'state 176' -> ** -> shift (target=45, len=0)
actionsTable.fill(1907, 22600, 22604); // 'state 176' -> !..await -> reduce (target=185, len=3)
actionsTable[22604] = 110; // 'state 176' -> ?. -> shift (target=55, len=0)
actionsTable[22605] = 864; // 'state 176' -> . -> shift (target=432, len=0)
actionsTable.fill(1907, 22606, 22612); // 'state 176' -> identifier..accessibility_modifier -> reduce (target=185, len=3)
actionsTable[22613] = 112; // 'state 176' -> equality_operator -> shift (target=56, len=0)
actionsTable[22614] = 88; // 'state 176' -> relational_operator -> shift (target=44, len=0)
actionsTable[22615] = 114; // 'state 176' -> shift_operator -> shift (target=57, len=0)
actionsTable[22616] = 90; // 'state 176' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[22617] = 866; // 'state 176' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(1907, 22618, 22620); // 'state 176' -> regex..@par-gen.EOF -> reduce (target=185, len=3)
actionsTable.fill(1903, 22656, 22664); // 'state 177' -> true..if -> reduce (target=183, len=3)
actionsTable[22664] = 86; // 'state 177' -> ( -> shift (target=43, len=0)
actionsTable.fill(1903, 22665, 22675); // 'state 177' -> )..of -> reduce (target=183, len=3)
actionsTable[22675] = 88; // 'state 177' -> in -> shift (target=44, len=0)
actionsTable.fill(1903, 22676, 22679); // 'state 177' -> return..try -> reduce (target=183, len=3)
actionsTable.fill(1903, 22681, 22690); // 'state 177' -> switch.., -> reduce (target=183, len=3)
actionsTable[22690] = 90; // 'state 177' -> * -> shift (target=45, len=0)
actionsTable[22691] = 92; // 'state 177' -> as -> shift (target=46, len=0)
actionsTable.fill(1903, 22692, 22694); // 'state 177' -> type..export -> reduce (target=183, len=3)
actionsTable[22697] = 94; // 'state 177' -> [ -> shift (target=47, len=0)
actionsTable.fill(1903, 22698, 22706); // 'state 177' -> ]..class -> reduce (target=183, len=3)
actionsTable.fill(1903, 22707, 22709); // 'state 177' -> implements..interface -> reduce (target=183, len=3)
actionsTable.fill(88, 22710, 22712); // 'state 177' -> <..> -> shift (target=44, len=0)
actionsTable[22712] = 96; // 'state 177' -> | -> shift (target=48, len=0)
actionsTable[22713] = 98; // 'state 177' -> & -> shift (target=49, len=0)
actionsTable.fill(1903, 22715, 22717); // 'state 177' -> void..typeof -> reduce (target=183, len=3)
actionsTable[22718] = 1903; // 'state 177' -> new -> reduce (target=183, len=3)
actionsTable[22719] = 100; // 'state 177' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 22720, 22722); // 'state 177' -> ||..?? -> shift (target=51, len=0)
actionsTable[22722] = 104; // 'state 177' -> && -> shift (target=52, len=0)
actionsTable[22723] = 106; // 'state 177' -> ^ -> shift (target=53, len=0)
actionsTable[22724] = 88; // 'state 177' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 22725, 22727); // 'state 177' -> +..- -> shift (target=54, len=0)
actionsTable[22727] = 90; // 'state 177' -> ** -> shift (target=45, len=0)
actionsTable.fill(1903, 22728, 22732); // 'state 177' -> !..await -> reduce (target=183, len=3)
actionsTable[22732] = 110; // 'state 177' -> ?. -> shift (target=55, len=0)
actionsTable[22733] = 864; // 'state 177' -> . -> shift (target=432, len=0)
actionsTable.fill(1903, 22734, 22740); // 'state 177' -> identifier..accessibility_modifier -> reduce (target=183, len=3)
actionsTable[22741] = 112; // 'state 177' -> equality_operator -> shift (target=56, len=0)
actionsTable[22742] = 88; // 'state 177' -> relational_operator -> shift (target=44, len=0)
actionsTable[22743] = 114; // 'state 177' -> shift_operator -> shift (target=57, len=0)
actionsTable[22744] = 90; // 'state 177' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[22745] = 866; // 'state 177' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(1903, 22746, 22748); // 'state 177' -> regex..@par-gen.EOF -> reduce (target=183, len=3)
actionsTable.fill(1905, 22784, 22792); // 'state 178' -> true..if -> reduce (target=184, len=3)
actionsTable[22792] = 86; // 'state 178' -> ( -> shift (target=43, len=0)
actionsTable.fill(1905, 22793, 22803); // 'state 178' -> )..of -> reduce (target=184, len=3)
actionsTable[22803] = 88; // 'state 178' -> in -> shift (target=44, len=0)
actionsTable.fill(1905, 22804, 22807); // 'state 178' -> return..try -> reduce (target=184, len=3)
actionsTable.fill(1905, 22809, 22818); // 'state 178' -> switch.., -> reduce (target=184, len=3)
actionsTable[22818] = 90; // 'state 178' -> * -> shift (target=45, len=0)
actionsTable[22819] = 92; // 'state 178' -> as -> shift (target=46, len=0)
actionsTable.fill(1905, 22820, 22822); // 'state 178' -> type..export -> reduce (target=184, len=3)
actionsTable[22825] = 94; // 'state 178' -> [ -> shift (target=47, len=0)
actionsTable.fill(1905, 22826, 22834); // 'state 178' -> ]..class -> reduce (target=184, len=3)
actionsTable.fill(1905, 22835, 22837); // 'state 178' -> implements..interface -> reduce (target=184, len=3)
actionsTable.fill(88, 22838, 22840); // 'state 178' -> <..> -> shift (target=44, len=0)
actionsTable[22840] = 96; // 'state 178' -> | -> shift (target=48, len=0)
actionsTable[22841] = 98; // 'state 178' -> & -> shift (target=49, len=0)
actionsTable.fill(1905, 22843, 22845); // 'state 178' -> void..typeof -> reduce (target=184, len=3)
actionsTable[22846] = 1905; // 'state 178' -> new -> reduce (target=184, len=3)
actionsTable[22847] = 100; // 'state 178' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 22848, 22850); // 'state 178' -> ||..?? -> shift (target=51, len=0)
actionsTable[22850] = 104; // 'state 178' -> && -> shift (target=52, len=0)
actionsTable[22851] = 106; // 'state 178' -> ^ -> shift (target=53, len=0)
actionsTable[22852] = 88; // 'state 178' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 22853, 22855); // 'state 178' -> +..- -> shift (target=54, len=0)
actionsTable[22855] = 90; // 'state 178' -> ** -> shift (target=45, len=0)
actionsTable.fill(1905, 22856, 22860); // 'state 178' -> !..await -> reduce (target=184, len=3)
actionsTable[22860] = 110; // 'state 178' -> ?. -> shift (target=55, len=0)
actionsTable[22861] = 864; // 'state 178' -> . -> shift (target=432, len=0)
actionsTable.fill(1905, 22862, 22868); // 'state 178' -> identifier..accessibility_modifier -> reduce (target=184, len=3)
actionsTable[22869] = 112; // 'state 178' -> equality_operator -> shift (target=56, len=0)
actionsTable[22870] = 88; // 'state 178' -> relational_operator -> shift (target=44, len=0)
actionsTable[22871] = 114; // 'state 178' -> shift_operator -> shift (target=57, len=0)
actionsTable[22872] = 90; // 'state 178' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[22873] = 866; // 'state 178' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(1905, 22874, 22876); // 'state 178' -> regex..@par-gen.EOF -> reduce (target=184, len=3)
actionsTable.fill(798, 22912, 22917); // 'state 179' -> true..super -> shift (target=399, len=0)
actionsTable[22917] = 68; // 'state 179' -> { -> shift (target=34, len=0)
actionsTable[22920] = 4; // 'state 179' -> ( -> shift (target=2, len=0)
actionsTable[22921] = 1168; // 'state 179' -> ) -> shift (target=584, len=0)
actionsTable[22930] = 806; // 'state 179' -> of -> shift (target=403, len=0)
actionsTable[22944] = 806; // 'state 179' -> from -> shift (target=403, len=0)
actionsTable[22948] = 806; // 'state 179' -> type -> shift (target=403, len=0)
actionsTable[22952] = 48; // 'state 179' -> ... -> shift (target=24, len=0)
actionsTable[22953] = 20; // 'state 179' -> [ -> shift (target=10, len=0)
actionsTable[22955] = 70; // 'state 179' -> async -> shift (target=35, len=0)
actionsTable[22956] = 72; // 'state 179' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 22959, 22961); // 'state 179' -> get..set -> shift (target=403, len=0)
actionsTable[22961] = 74; // 'state 179' -> class -> shift (target=37, len=0)
actionsTable[22966] = 28; // 'state 179' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 22971, 22973); // 'state 179' -> void..typeof -> shift (target=15, len=0)
actionsTable[22974] = 32; // 'state 179' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 22981, 22983); // 'state 179' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 22984, 22987); // 'state 179' -> !..delete -> shift (target=15, len=0)
actionsTable[22987] = 34; // 'state 179' -> await -> shift (target=17, len=0)
actionsTable[22990] = 818; // 'state 179' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 22992, 22995); // 'state 179' -> number..template_string -> shift (target=399, len=0)
actionsTable[23001] = 36; // 'state 179' -> update_operator -> shift (target=18, len=0)
actionsTable[23002] = 798; // 'state 179' -> regex -> shift (target=399, len=0)
actionsTable.fill(871, 23048, 23050); // 'state 180' -> (..) -> reduce (target=179, len=1)
actionsTable[23059] = 871; // 'state 180' -> in -> reduce (target=179, len=1)
actionsTable[23067] = 164; // 'state 180' -> : -> shift (target=82, len=0)
actionsTable.fill(871, 23073, 23076); // 'state 180' -> ,..as -> reduce (target=179, len=1)
actionsTable[23079] = 877; // 'state 180' -> = -> reduce (target=182, len=1)
actionsTable[23081] = 871; // 'state 180' -> [ -> reduce (target=179, len=1)
actionsTable[23093] = 164; // 'state 180' -> ?: -> shift (target=82, len=0)
actionsTable.fill(871, 23094, 23098); // 'state 180' -> <..& -> reduce (target=179, len=1)
actionsTable[23098] = 162; // 'state 180' -> => -> shift (target=81, len=0)
actionsTable.fill(871, 23103, 23112); // 'state 180' -> ?..** -> reduce (target=179, len=1)
actionsTable.fill(871, 23116, 23118); // 'state 180' -> ?.... -> reduce (target=179, len=1)
actionsTable[23124] = 877; // 'state 180' -> compound_assignment_operator -> reduce (target=182, len=1)
actionsTable.fill(871, 23125, 23130); // 'state 180' -> equality_operator..update_operator -> reduce (target=179, len=1)
actionsTable.fill(871, 23176, 23178); // 'state 181' -> (..) -> reduce (target=179, len=1)
actionsTable[23187] = 871; // 'state 181' -> in -> reduce (target=179, len=1)
actionsTable[23195] = 164; // 'state 181' -> : -> shift (target=82, len=0)
actionsTable.fill(871, 23201, 23204); // 'state 181' -> ,..as -> reduce (target=179, len=1)
actionsTable[23207] = 877; // 'state 181' -> = -> reduce (target=182, len=1)
actionsTable[23209] = 871; // 'state 181' -> [ -> reduce (target=179, len=1)
actionsTable[23221] = 164; // 'state 181' -> ?: -> shift (target=82, len=0)
actionsTable.fill(871, 23222, 23226); // 'state 181' -> <..& -> reduce (target=179, len=1)
actionsTable.fill(871, 23231, 23240); // 'state 181' -> ?..** -> reduce (target=179, len=1)
actionsTable.fill(871, 23244, 23246); // 'state 181' -> ?.... -> reduce (target=179, len=1)
actionsTable[23252] = 877; // 'state 181' -> compound_assignment_operator -> reduce (target=182, len=1)
actionsTable.fill(871, 23253, 23258); // 'state 181' -> equality_operator..update_operator -> reduce (target=179, len=1)
actionsTable.fill(798, 23296, 23301); // 'state 182' -> true..super -> shift (target=399, len=0)
actionsTable[23301] = 68; // 'state 182' -> { -> shift (target=34, len=0)
actionsTable[23304] = 4; // 'state 182' -> ( -> shift (target=2, len=0)
actionsTable[23305] = 1174; // 'state 182' -> ) -> shift (target=587, len=0)
actionsTable[23314] = 806; // 'state 182' -> of -> shift (target=403, len=0)
actionsTable[23328] = 806; // 'state 182' -> from -> shift (target=403, len=0)
actionsTable[23332] = 806; // 'state 182' -> type -> shift (target=403, len=0)
actionsTable[23336] = 170; // 'state 182' -> ... -> shift (target=85, len=0)
actionsTable[23337] = 20; // 'state 182' -> [ -> shift (target=10, len=0)
actionsTable[23339] = 70; // 'state 182' -> async -> shift (target=35, len=0)
actionsTable[23340] = 72; // 'state 182' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 23343, 23345); // 'state 182' -> get..set -> shift (target=403, len=0)
actionsTable[23345] = 74; // 'state 182' -> class -> shift (target=37, len=0)
actionsTable[23350] = 28; // 'state 182' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 23355, 23357); // 'state 182' -> void..typeof -> shift (target=15, len=0)
actionsTable[23358] = 32; // 'state 182' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 23365, 23367); // 'state 182' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 23368, 23371); // 'state 182' -> !..delete -> shift (target=15, len=0)
actionsTable[23371] = 34; // 'state 182' -> await -> shift (target=17, len=0)
actionsTable[23374] = 172; // 'state 182' -> identifier -> shift (target=86, len=0)
actionsTable.fill(798, 23376, 23379); // 'state 182' -> number..template_string -> shift (target=399, len=0)
actionsTable[23385] = 36; // 'state 182' -> update_operator -> shift (target=18, len=0)
actionsTable[23386] = 798; // 'state 182' -> regex -> shift (target=399, len=0)
actionsTable.fill(942, 23424, 23427); // 'state 183' -> true..null -> shift (target=471, len=0)
actionsTable[23429] = 262; // 'state 183' -> { -> shift (target=131, len=0)
actionsTable[23432] = 264; // 'state 183' -> ( -> shift (target=132, len=0)
actionsTable[23465] = 266; // 'state 183' -> [ -> shift (target=133, len=0)
actionsTable[23478] = 28; // 'state 183' -> < -> shift (target=14, len=0)
actionsTable[23480] = 268; // 'state 183' -> | -> shift (target=134, len=0)
actionsTable[23483] = 942; // 'state 183' -> void -> shift (target=471, len=0)
actionsTable[23484] = 944; // 'state 183' -> typeof -> shift (target=472, len=0)
actionsTable[23502] = 270; // 'state 183' -> identifier -> shift (target=135, len=0)
actionsTable.fill(942, 23504, 23506); // 'state 183' -> number..string -> shift (target=471, len=0)
actionsTable[23560] = 86; // 'state 184' -> ( -> shift (target=43, len=0)
actionsTable[23713] = 372; // 'state 185' -> , -> shift (target=186, len=0)
actionsTable[23722] = 1180; // 'state 185' -> ] -> shift (target=590, len=0)
actionsTable.fill(798, 23808, 23813); // 'state 186' -> true..super -> shift (target=399, len=0)
actionsTable[23813] = 68; // 'state 186' -> { -> shift (target=34, len=0)
actionsTable[23816] = 4; // 'state 186' -> ( -> shift (target=2, len=0)
actionsTable[23826] = 806; // 'state 186' -> of -> shift (target=403, len=0)
actionsTable[23840] = 806; // 'state 186' -> from -> shift (target=403, len=0)
actionsTable[23841] = 911; // 'state 186' -> , -> reduce (target=199, len=1)
actionsTable[23844] = 806; // 'state 186' -> type -> shift (target=403, len=0)
actionsTable[23848] = 48; // 'state 186' -> ... -> shift (target=24, len=0)
actionsTable[23849] = 20; // 'state 186' -> [ -> shift (target=10, len=0)
actionsTable[23850] = 911; // 'state 186' -> ] -> reduce (target=199, len=1)
actionsTable[23851] = 70; // 'state 186' -> async -> shift (target=35, len=0)
actionsTable[23852] = 72; // 'state 186' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 23855, 23857); // 'state 186' -> get..set -> shift (target=403, len=0)
actionsTable[23857] = 74; // 'state 186' -> class -> shift (target=37, len=0)
actionsTable[23862] = 28; // 'state 186' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 23867, 23869); // 'state 186' -> void..typeof -> shift (target=15, len=0)
actionsTable[23870] = 32; // 'state 186' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 23877, 23879); // 'state 186' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 23880, 23883); // 'state 186' -> !..delete -> shift (target=15, len=0)
actionsTable[23883] = 34; // 'state 186' -> await -> shift (target=17, len=0)
actionsTable[23886] = 818; // 'state 186' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 23888, 23891); // 'state 186' -> number..template_string -> shift (target=399, len=0)
actionsTable[23897] = 36; // 'state 186' -> update_operator -> shift (target=18, len=0)
actionsTable[23898] = 798; // 'state 186' -> regex -> shift (target=399, len=0)
actionsTable[23991] = 1186; // 'state 187' -> > -> shift (target=593, len=0)
actionsTable[24014] = 908; // 'state 187' -> identifier -> shift (target=454, len=0)
actionsTable.fill(942, 24064, 24067); // 'state 188' -> true..null -> shift (target=471, len=0)
actionsTable[24069] = 262; // 'state 188' -> { -> shift (target=131, len=0)
actionsTable[24072] = 264; // 'state 188' -> ( -> shift (target=132, len=0)
actionsTable[24105] = 266; // 'state 188' -> [ -> shift (target=133, len=0)
actionsTable[24118] = 28; // 'state 188' -> < -> shift (target=14, len=0)
actionsTable[24120] = 268; // 'state 188' -> | -> shift (target=134, len=0)
actionsTable[24123] = 942; // 'state 188' -> void -> shift (target=471, len=0)
actionsTable[24124] = 944; // 'state 188' -> typeof -> shift (target=472, len=0)
actionsTable[24142] = 270; // 'state 188' -> identifier -> shift (target=135, len=0)
actionsTable.fill(942, 24144, 24146); // 'state 188' -> number..string -> shift (target=471, len=0)
actionsTable.fill(942, 24192, 24195); // 'state 189' -> true..null -> shift (target=471, len=0)
actionsTable[24197] = 262; // 'state 189' -> { -> shift (target=131, len=0)
actionsTable[24200] = 264; // 'state 189' -> ( -> shift (target=132, len=0)
actionsTable[24233] = 266; // 'state 189' -> [ -> shift (target=133, len=0)
actionsTable[24246] = 28; // 'state 189' -> < -> shift (target=14, len=0)
actionsTable[24248] = 268; // 'state 189' -> | -> shift (target=134, len=0)
actionsTable[24251] = 942; // 'state 189' -> void -> shift (target=471, len=0)
actionsTable[24252] = 944; // 'state 189' -> typeof -> shift (target=472, len=0)
actionsTable[24270] = 270; // 'state 189' -> identifier -> shift (target=135, len=0)
actionsTable.fill(942, 24272, 24274); // 'state 189' -> number..string -> shift (target=471, len=0)
actionsTable[24325] = 80; // 'state 190' -> { -> shift (target=40, len=0)
actionsTable[24347] = 164; // 'state 190' -> : -> shift (target=82, len=0)
actionsTable[24373] = 164; // 'state 190' -> ?: -> shift (target=82, len=0)
actionsTable[24456] = 138; // 'state 191' -> ( -> shift (target=69, len=0)
actionsTable[24584] = 86; // 'state 192' -> ( -> shift (target=43, len=0)
actionsTable[24595] = 88; // 'state 192' -> in -> shift (target=44, len=0)
actionsTable[24610] = 90; // 'state 192' -> * -> shift (target=45, len=0)
actionsTable[24611] = 92; // 'state 192' -> as -> shift (target=46, len=0)
actionsTable[24617] = 94; // 'state 192' -> [ -> shift (target=47, len=0)
actionsTable[24618] = 1050; // 'state 192' -> ] -> shift (target=525, len=0)
actionsTable.fill(88, 24630, 24632); // 'state 192' -> <..> -> shift (target=44, len=0)
actionsTable[24632] = 96; // 'state 192' -> | -> shift (target=48, len=0)
actionsTable[24633] = 98; // 'state 192' -> & -> shift (target=49, len=0)
actionsTable[24639] = 100; // 'state 192' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 24640, 24642); // 'state 192' -> ||..?? -> shift (target=51, len=0)
actionsTable[24642] = 104; // 'state 192' -> && -> shift (target=52, len=0)
actionsTable[24643] = 106; // 'state 192' -> ^ -> shift (target=53, len=0)
actionsTable[24644] = 88; // 'state 192' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 24645, 24647); // 'state 192' -> +..- -> shift (target=54, len=0)
actionsTable[24647] = 90; // 'state 192' -> ** -> shift (target=45, len=0)
actionsTable[24652] = 110; // 'state 192' -> ?. -> shift (target=55, len=0)
actionsTable[24653] = 864; // 'state 192' -> . -> shift (target=432, len=0)
actionsTable[24661] = 112; // 'state 192' -> equality_operator -> shift (target=56, len=0)
actionsTable[24662] = 88; // 'state 192' -> relational_operator -> shift (target=44, len=0)
actionsTable[24663] = 114; // 'state 192' -> shift_operator -> shift (target=57, len=0)
actionsTable[24664] = 90; // 'state 192' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[24665] = 866; // 'state 192' -> update_operator -> shift (target=433, len=0)
actionsTable[24710] = 1196; // 'state 193' -> } -> shift (target=598, len=0)
actionsTable[24722] = 806; // 'state 193' -> of -> shift (target=403, len=0)
actionsTable[24736] = 806; // 'state 193' -> from -> shift (target=403, len=0)
actionsTable[24740] = 806; // 'state 193' -> type -> shift (target=403, len=0)
actionsTable[24744] = 48; // 'state 193' -> ... -> shift (target=24, len=0)
actionsTable[24745] = 198; // 'state 193' -> [ -> shift (target=99, len=0)
actionsTable[24747] = 226; // 'state 193' -> async -> shift (target=113, len=0)
actionsTable.fill(54, 24751, 24753); // 'state 193' -> get..set -> shift (target=27, len=0)
actionsTable[24782] = 930; // 'state 193' -> identifier -> shift (target=465, len=0)
actionsTable.fill(848, 24784, 24786); // 'state 193' -> number..string -> shift (target=424, len=0)
actionsTable[24838] = 1947; // 'state 194' -> } -> reduce (target=205, len=3)
actionsTable[24840] = 86; // 'state 194' -> ( -> shift (target=43, len=0)
actionsTable[24851] = 88; // 'state 194' -> in -> shift (target=44, len=0)
actionsTable[24865] = 1947; // 'state 194' -> , -> reduce (target=205, len=3)
actionsTable[24866] = 90; // 'state 194' -> * -> shift (target=45, len=0)
actionsTable[24867] = 92; // 'state 194' -> as -> shift (target=46, len=0)
actionsTable[24873] = 94; // 'state 194' -> [ -> shift (target=47, len=0)
actionsTable.fill(88, 24886, 24888); // 'state 194' -> <..> -> shift (target=44, len=0)
actionsTable[24888] = 96; // 'state 194' -> | -> shift (target=48, len=0)
actionsTable[24889] = 98; // 'state 194' -> & -> shift (target=49, len=0)
actionsTable[24895] = 100; // 'state 194' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 24896, 24898); // 'state 194' -> ||..?? -> shift (target=51, len=0)
actionsTable[24898] = 104; // 'state 194' -> && -> shift (target=52, len=0)
actionsTable[24899] = 106; // 'state 194' -> ^ -> shift (target=53, len=0)
actionsTable[24900] = 88; // 'state 194' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 24901, 24903); // 'state 194' -> +..- -> shift (target=54, len=0)
actionsTable[24903] = 90; // 'state 194' -> ** -> shift (target=45, len=0)
actionsTable[24908] = 110; // 'state 194' -> ?. -> shift (target=55, len=0)
actionsTable[24909] = 864; // 'state 194' -> . -> shift (target=432, len=0)
actionsTable[24917] = 112; // 'state 194' -> equality_operator -> shift (target=56, len=0)
actionsTable[24918] = 88; // 'state 194' -> relational_operator -> shift (target=44, len=0)
actionsTable[24919] = 114; // 'state 194' -> shift_operator -> shift (target=57, len=0)
actionsTable[24920] = 90; // 'state 194' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[24921] = 866; // 'state 194' -> update_operator -> shift (target=433, len=0)
actionsTable[24965] = 80; // 'state 195' -> { -> shift (target=40, len=0)
actionsTable.fill(798, 25088, 25093); // 'state 196' -> true..super -> shift (target=399, len=0)
actionsTable[25093] = 2; // 'state 196' -> { -> shift (target=1, len=0)
actionsTable[25095] = 800; // 'state 196' -> if -> shift (target=400, len=0)
actionsTable[25096] = 4; // 'state 196' -> ( -> shift (target=2, len=0)
actionsTable[25099] = 802; // 'state 196' -> while -> shift (target=401, len=0)
actionsTable[25100] = 6; // 'state 196' -> do -> shift (target=3, len=0)
actionsTable[25102] = 804; // 'state 196' -> for -> shift (target=402, len=0)
actionsTable.fill(8, 25103, 25106); // 'state 196' -> const..var -> shift (target=4, len=0)
actionsTable[25106] = 806; // 'state 196' -> of -> shift (target=403, len=0)
actionsTable[25108] = 10; // 'state 196' -> return -> shift (target=5, len=0)
actionsTable[25109] = 12; // 'state 196' -> throw -> shift (target=6, len=0)
actionsTable[25110] = 14; // 'state 196' -> try -> shift (target=7, len=0)
actionsTable[25113] = 808; // 'state 196' -> switch -> shift (target=404, len=0)
actionsTable[25117] = 810; // 'state 196' -> break -> shift (target=405, len=0)
actionsTable[25118] = 812; // 'state 196' -> continue -> shift (target=406, len=0)
actionsTable[25119] = 16; // 'state 196' -> import -> shift (target=8, len=0)
actionsTable[25120] = 806; // 'state 196' -> from -> shift (target=403, len=0)
actionsTable[25124] = 814; // 'state 196' -> type -> shift (target=407, len=0)
actionsTable[25125] = 18; // 'state 196' -> export -> shift (target=9, len=0)
actionsTable[25129] = 20; // 'state 196' -> [ -> shift (target=10, len=0)
actionsTable[25131] = 22; // 'state 196' -> async -> shift (target=11, len=0)
actionsTable[25132] = 24; // 'state 196' -> function -> shift (target=12, len=0)
actionsTable.fill(806, 25135, 25137); // 'state 196' -> get..set -> shift (target=403, len=0)
actionsTable[25137] = 26; // 'state 196' -> class -> shift (target=13, len=0)
actionsTable[25140] = 816; // 'state 196' -> interface -> shift (target=408, len=0)
actionsTable[25142] = 28; // 'state 196' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 25147, 25149); // 'state 196' -> void..typeof -> shift (target=15, len=0)
actionsTable[25150] = 32; // 'state 196' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 25157, 25159); // 'state 196' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 25160, 25163); // 'state 196' -> !..delete -> shift (target=15, len=0)
actionsTable[25163] = 34; // 'state 196' -> await -> shift (target=17, len=0)
actionsTable[25166] = 818; // 'state 196' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 25168, 25171); // 'state 196' -> number..template_string -> shift (target=399, len=0)
actionsTable[25177] = 36; // 'state 196' -> update_operator -> shift (target=18, len=0)
actionsTable[25178] = 798; // 'state 196' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 25216, 25221); // 'state 197' -> true..super -> shift (target=399, len=0)
actionsTable[25221] = 2; // 'state 197' -> { -> shift (target=1, len=0)
actionsTable[25223] = 800; // 'state 197' -> if -> shift (target=400, len=0)
actionsTable[25224] = 4; // 'state 197' -> ( -> shift (target=2, len=0)
actionsTable[25227] = 802; // 'state 197' -> while -> shift (target=401, len=0)
actionsTable[25228] = 6; // 'state 197' -> do -> shift (target=3, len=0)
actionsTable[25230] = 804; // 'state 197' -> for -> shift (target=402, len=0)
actionsTable.fill(8, 25231, 25234); // 'state 197' -> const..var -> shift (target=4, len=0)
actionsTable[25234] = 806; // 'state 197' -> of -> shift (target=403, len=0)
actionsTable[25236] = 10; // 'state 197' -> return -> shift (target=5, len=0)
actionsTable[25237] = 12; // 'state 197' -> throw -> shift (target=6, len=0)
actionsTable[25238] = 14; // 'state 197' -> try -> shift (target=7, len=0)
actionsTable[25241] = 808; // 'state 197' -> switch -> shift (target=404, len=0)
actionsTable[25245] = 810; // 'state 197' -> break -> shift (target=405, len=0)
actionsTable[25246] = 812; // 'state 197' -> continue -> shift (target=406, len=0)
actionsTable[25247] = 16; // 'state 197' -> import -> shift (target=8, len=0)
actionsTable[25248] = 806; // 'state 197' -> from -> shift (target=403, len=0)
actionsTable[25252] = 814; // 'state 197' -> type -> shift (target=407, len=0)
actionsTable[25253] = 18; // 'state 197' -> export -> shift (target=9, len=0)
actionsTable[25257] = 20; // 'state 197' -> [ -> shift (target=10, len=0)
actionsTable[25259] = 22; // 'state 197' -> async -> shift (target=11, len=0)
actionsTable[25260] = 24; // 'state 197' -> function -> shift (target=12, len=0)
actionsTable.fill(806, 25263, 25265); // 'state 197' -> get..set -> shift (target=403, len=0)
actionsTable[25265] = 26; // 'state 197' -> class -> shift (target=13, len=0)
actionsTable[25268] = 816; // 'state 197' -> interface -> shift (target=408, len=0)
actionsTable[25270] = 28; // 'state 197' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 25275, 25277); // 'state 197' -> void..typeof -> shift (target=15, len=0)
actionsTable[25278] = 32; // 'state 197' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 25285, 25287); // 'state 197' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 25288, 25291); // 'state 197' -> !..delete -> shift (target=15, len=0)
actionsTable[25291] = 34; // 'state 197' -> await -> shift (target=17, len=0)
actionsTable[25294] = 818; // 'state 197' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 25296, 25299); // 'state 197' -> number..template_string -> shift (target=399, len=0)
actionsTable[25305] = 36; // 'state 197' -> update_operator -> shift (target=18, len=0)
actionsTable[25306] = 798; // 'state 197' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 25344, 25349); // 'state 198' -> true..super -> shift (target=399, len=0)
actionsTable[25349] = 68; // 'state 198' -> { -> shift (target=34, len=0)
actionsTable[25352] = 4; // 'state 198' -> ( -> shift (target=2, len=0)
actionsTable[25362] = 806; // 'state 198' -> of -> shift (target=403, len=0)
actionsTable[25376] = 806; // 'state 198' -> from -> shift (target=403, len=0)
actionsTable[25380] = 806; // 'state 198' -> type -> shift (target=403, len=0)
actionsTable[25385] = 20; // 'state 198' -> [ -> shift (target=10, len=0)
actionsTable[25387] = 70; // 'state 198' -> async -> shift (target=35, len=0)
actionsTable[25388] = 72; // 'state 198' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 25391, 25393); // 'state 198' -> get..set -> shift (target=403, len=0)
actionsTable[25393] = 74; // 'state 198' -> class -> shift (target=37, len=0)
actionsTable[25398] = 28; // 'state 198' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 25403, 25405); // 'state 198' -> void..typeof -> shift (target=15, len=0)
actionsTable[25406] = 32; // 'state 198' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 25413, 25415); // 'state 198' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 25416, 25419); // 'state 198' -> !..delete -> shift (target=15, len=0)
actionsTable[25419] = 34; // 'state 198' -> await -> shift (target=17, len=0)
actionsTable[25422] = 818; // 'state 198' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 25424, 25427); // 'state 198' -> number..template_string -> shift (target=399, len=0)
actionsTable[25433] = 36; // 'state 198' -> update_operator -> shift (target=18, len=0)
actionsTable[25434] = 798; // 'state 198' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 25472, 25477); // 'state 199' -> true..super -> shift (target=399, len=0)
actionsTable[25477] = 68; // 'state 199' -> { -> shift (target=34, len=0)
actionsTable[25480] = 4; // 'state 199' -> ( -> shift (target=2, len=0)
actionsTable[25481] = 544; // 'state 199' -> ) -> shift (target=272, len=0)
actionsTable[25490] = 806; // 'state 199' -> of -> shift (target=403, len=0)
actionsTable[25504] = 806; // 'state 199' -> from -> shift (target=403, len=0)
actionsTable[25508] = 806; // 'state 199' -> type -> shift (target=403, len=0)
actionsTable[25513] = 20; // 'state 199' -> [ -> shift (target=10, len=0)
actionsTable[25515] = 70; // 'state 199' -> async -> shift (target=35, len=0)
actionsTable[25516] = 72; // 'state 199' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 25519, 25521); // 'state 199' -> get..set -> shift (target=403, len=0)
actionsTable[25521] = 74; // 'state 199' -> class -> shift (target=37, len=0)
actionsTable[25526] = 28; // 'state 199' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 25531, 25533); // 'state 199' -> void..typeof -> shift (target=15, len=0)
actionsTable[25534] = 32; // 'state 199' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 25541, 25543); // 'state 199' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 25544, 25547); // 'state 199' -> !..delete -> shift (target=15, len=0)
actionsTable[25547] = 34; // 'state 199' -> await -> shift (target=17, len=0)
actionsTable[25550] = 818; // 'state 199' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 25552, 25555); // 'state 199' -> number..template_string -> shift (target=399, len=0)
actionsTable[25561] = 36; // 'state 199' -> update_operator -> shift (target=18, len=0)
actionsTable[25562] = 798; // 'state 199' -> regex -> shift (target=399, len=0)
actionsTable[25608] = 86; // 'state 200' -> ( -> shift (target=43, len=0)
actionsTable[25613] = 542; // 'state 200' -> ; -> shift (target=271, len=0)
actionsTable[25619] = 88; // 'state 200' -> in -> shift (target=44, len=0)
actionsTable[25634] = 90; // 'state 200' -> * -> shift (target=45, len=0)
actionsTable[25635] = 92; // 'state 200' -> as -> shift (target=46, len=0)
actionsTable[25641] = 94; // 'state 200' -> [ -> shift (target=47, len=0)
actionsTable.fill(88, 25654, 25656); // 'state 200' -> <..> -> shift (target=44, len=0)
actionsTable[25656] = 96; // 'state 200' -> | -> shift (target=48, len=0)
actionsTable[25657] = 98; // 'state 200' -> & -> shift (target=49, len=0)
actionsTable[25663] = 100; // 'state 200' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 25664, 25666); // 'state 200' -> ||..?? -> shift (target=51, len=0)
actionsTable[25666] = 104; // 'state 200' -> && -> shift (target=52, len=0)
actionsTable[25667] = 106; // 'state 200' -> ^ -> shift (target=53, len=0)
actionsTable[25668] = 88; // 'state 200' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 25669, 25671); // 'state 200' -> +..- -> shift (target=54, len=0)
actionsTable[25671] = 90; // 'state 200' -> ** -> shift (target=45, len=0)
actionsTable[25676] = 110; // 'state 200' -> ?. -> shift (target=55, len=0)
actionsTable[25677] = 864; // 'state 200' -> . -> shift (target=432, len=0)
actionsTable[25685] = 112; // 'state 200' -> equality_operator -> shift (target=56, len=0)
actionsTable[25686] = 88; // 'state 200' -> relational_operator -> shift (target=44, len=0)
actionsTable[25687] = 114; // 'state 200' -> shift_operator -> shift (target=57, len=0)
actionsTable[25688] = 90; // 'state 200' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[25689] = 866; // 'state 200' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(767, 25728, 25734); // 'state 201' -> true..{ -> reduce (target=127, len=1)
actionsTable[25736] = 767; // 'state 201' -> ( -> reduce (target=127, len=1)
actionsTable[25741] = 767; // 'state 201' -> ; -> reduce (target=127, len=1)
actionsTable.fill(548, 25746, 25748); // 'state 201' -> of..in -> shift (target=274, len=0)
actionsTable[25755] = 164; // 'state 201' -> : -> shift (target=82, len=0)
actionsTable.fill(767, 25760, 25762); // 'state 201' -> from.., -> reduce (target=127, len=1)
actionsTable[25764] = 767; // 'state 201' -> type -> reduce (target=127, len=1)
actionsTable[25767] = 292; // 'state 201' -> = -> shift (target=146, len=0)
actionsTable[25769] = 767; // 'state 201' -> [ -> reduce (target=127, len=1)
actionsTable.fill(767, 25771, 25773); // 'state 201' -> async..function -> reduce (target=127, len=1)
actionsTable.fill(767, 25775, 25778); // 'state 201' -> get..class -> reduce (target=127, len=1)
actionsTable[25781] = 164; // 'state 201' -> ?: -> shift (target=82, len=0)
actionsTable[25782] = 767; // 'state 201' -> < -> reduce (target=127, len=1)
actionsTable.fill(767, 25787, 25789); // 'state 201' -> void..typeof -> reduce (target=127, len=1)
actionsTable[25790] = 767; // 'state 201' -> new -> reduce (target=127, len=1)
actionsTable.fill(767, 25797, 25799); // 'state 201' -> +..- -> reduce (target=127, len=1)
actionsTable.fill(767, 25800, 25804); // 'state 201' -> !..await -> reduce (target=127, len=1)
actionsTable[25806] = 767; // 'state 201' -> identifier -> reduce (target=127, len=1)
actionsTable.fill(767, 25808, 25811); // 'state 201' -> number..template_string -> reduce (target=127, len=1)
actionsTable.fill(767, 25817, 25819); // 'state 201' -> update_operator..regex -> reduce (target=127, len=1)
actionsTable.fill(798, 25856, 25861); // 'state 202' -> true..super -> shift (target=399, len=0)
actionsTable[25861] = 68; // 'state 202' -> { -> shift (target=34, len=0)
actionsTable[25864] = 4; // 'state 202' -> ( -> shift (target=2, len=0)
actionsTable[25869] = 542; // 'state 202' -> ; -> shift (target=271, len=0)
actionsTable[25874] = 806; // 'state 202' -> of -> shift (target=403, len=0)
actionsTable[25888] = 806; // 'state 202' -> from -> shift (target=403, len=0)
actionsTable[25892] = 806; // 'state 202' -> type -> shift (target=403, len=0)
actionsTable[25897] = 20; // 'state 202' -> [ -> shift (target=10, len=0)
actionsTable[25899] = 70; // 'state 202' -> async -> shift (target=35, len=0)
actionsTable[25900] = 72; // 'state 202' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 25903, 25905); // 'state 202' -> get..set -> shift (target=403, len=0)
actionsTable[25905] = 74; // 'state 202' -> class -> shift (target=37, len=0)
actionsTable[25910] = 28; // 'state 202' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 25915, 25917); // 'state 202' -> void..typeof -> shift (target=15, len=0)
actionsTable[25918] = 32; // 'state 202' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 25925, 25927); // 'state 202' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 25928, 25931); // 'state 202' -> !..delete -> shift (target=15, len=0)
actionsTable[25931] = 34; // 'state 202' -> await -> shift (target=17, len=0)
actionsTable[25934] = 818; // 'state 202' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 25936, 25939); // 'state 202' -> number..template_string -> shift (target=399, len=0)
actionsTable[25945] = 36; // 'state 202' -> update_operator -> shift (target=18, len=0)
actionsTable[25946] = 798; // 'state 202' -> regex -> shift (target=399, len=0)
actionsTable[25992] = 138; // 'state 203' -> ( -> shift (target=69, len=0)
actionsTable[26038] = 28; // 'state 203' -> < -> shift (target=14, len=0)
actionsTable[26117] = 146; // 'state 204' -> { -> shift (target=73, len=0)
actionsTable[26162] = 148; // 'state 204' -> extends -> shift (target=74, len=0)
actionsTable[26163] = 150; // 'state 204' -> implements -> shift (target=75, len=0)
actionsTable[26245] = 122; // 'state 205' -> { -> shift (target=61, len=0)
actionsTable[26281] = 124; // 'state 205' -> [ -> shift (target=62, len=0)
actionsTable[26318] = 894; // 'state 205' -> identifier -> shift (target=447, len=0)
actionsTable[26373] = 558; // 'state 206' -> { -> shift (target=279, len=0)
actionsTable.fill(798, 26496, 26501); // 'state 207' -> true..super -> shift (target=399, len=0)
actionsTable[26501] = 68; // 'state 207' -> { -> shift (target=34, len=0)
actionsTable[26504] = 4; // 'state 207' -> ( -> shift (target=2, len=0)
actionsTable[26514] = 806; // 'state 207' -> of -> shift (target=403, len=0)
actionsTable[26528] = 806; // 'state 207' -> from -> shift (target=403, len=0)
actionsTable[26532] = 806; // 'state 207' -> type -> shift (target=403, len=0)
actionsTable[26537] = 20; // 'state 207' -> [ -> shift (target=10, len=0)
actionsTable[26539] = 70; // 'state 207' -> async -> shift (target=35, len=0)
actionsTable[26540] = 72; // 'state 207' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 26543, 26545); // 'state 207' -> get..set -> shift (target=403, len=0)
actionsTable[26545] = 74; // 'state 207' -> class -> shift (target=37, len=0)
actionsTable[26550] = 28; // 'state 207' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 26555, 26557); // 'state 207' -> void..typeof -> shift (target=15, len=0)
actionsTable[26558] = 32; // 'state 207' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 26565, 26567); // 'state 207' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 26568, 26571); // 'state 207' -> !..delete -> shift (target=15, len=0)
actionsTable[26571] = 34; // 'state 207' -> await -> shift (target=17, len=0)
actionsTable[26574] = 818; // 'state 207' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 26576, 26579); // 'state 207' -> number..template_string -> shift (target=399, len=0)
actionsTable[26585] = 36; // 'state 207' -> update_operator -> shift (target=18, len=0)
actionsTable[26586] = 798; // 'state 207' -> regex -> shift (target=399, len=0)
actionsTable.fill(942, 26624, 26627); // 'state 208' -> true..null -> shift (target=471, len=0)
actionsTable[26629] = 262; // 'state 208' -> { -> shift (target=131, len=0)
actionsTable[26632] = 264; // 'state 208' -> ( -> shift (target=132, len=0)
actionsTable[26665] = 266; // 'state 208' -> [ -> shift (target=133, len=0)
actionsTable[26666] = 1210; // 'state 208' -> ] -> shift (target=605, len=0)
actionsTable[26678] = 28; // 'state 208' -> < -> shift (target=14, len=0)
actionsTable[26680] = 268; // 'state 208' -> | -> shift (target=134, len=0)
actionsTable[26683] = 942; // 'state 208' -> void -> shift (target=471, len=0)
actionsTable[26684] = 944; // 'state 208' -> typeof -> shift (target=472, len=0)
actionsTable[26702] = 270; // 'state 208' -> identifier -> shift (target=135, len=0)
actionsTable.fill(942, 26704, 26706); // 'state 208' -> number..string -> shift (target=471, len=0)
actionsTable[26757] = 562; // 'state 209' -> { -> shift (target=281, len=0)
actionsTable[26761] = 1214; // 'state 209' -> ) -> shift (target=607, len=0)
actionsTable[26792] = 564; // 'state 209' -> ... -> shift (target=282, len=0)
actionsTable[26793] = 566; // 'state 209' -> [ -> shift (target=283, len=0)
actionsTable[26795] = 1006; // 'state 209' -> async -> shift (target=503, len=0)
actionsTable.fill(1008, 26797, 26799); // 'state 209' -> static..readonly -> shift (target=504, len=0)
actionsTable.fill(1006, 26799, 26801); // 'state 209' -> get..set -> shift (target=503, len=0)
actionsTable[26830] = 568; // 'state 209' -> identifier -> shift (target=284, len=0)
actionsTable[26835] = 1008; // 'state 209' -> accessibility_modifier -> shift (target=504, len=0)
actionsTable[26886] = 1216; // 'state 210' -> } -> shift (target=608, len=0)
actionsTable[26898] = 806; // 'state 210' -> of -> shift (target=403, len=0)
actionsTable[26912] = 806; // 'state 210' -> from -> shift (target=403, len=0)
actionsTable[26916] = 806; // 'state 210' -> type -> shift (target=403, len=0)
actionsTable[26920] = 48; // 'state 210' -> ... -> shift (target=24, len=0)
actionsTable[26921] = 436; // 'state 210' -> [ -> shift (target=218, len=0)
actionsTable[26923] = 226; // 'state 210' -> async -> shift (target=113, len=0)
actionsTable[26926] = 438; // 'state 210' -> readonly -> shift (target=219, len=0)
actionsTable.fill(54, 26927, 26929); // 'state 210' -> get..set -> shift (target=27, len=0)
actionsTable[26942] = 440; // 'state 210' -> new -> shift (target=220, len=0)
actionsTable[26958] = 930; // 'state 210' -> identifier -> shift (target=465, len=0)
actionsTable.fill(848, 26960, 26962); // 'state 210' -> number..string -> shift (target=424, len=0)
actionsTable[27013] = 68; // 'state 211' -> { -> shift (target=34, len=0)
actionsTable[27049] = 20; // 'state 211' -> [ -> shift (target=10, len=0)
actionsTable[27086] = 572; // 'state 211' -> identifier -> shift (target=286, len=0)
actionsTable.fill(1218, 27136, 27139); // 'state 212' -> true..null -> shift (target=609, len=0)
actionsTable.fill(798, 27139, 27141); // 'state 212' -> this..super -> shift (target=399, len=0)
actionsTable[27141] = 420; // 'state 212' -> { -> shift (target=210, len=0)
actionsTable[27144] = 576; // 'state 212' -> ( -> shift (target=288, len=0)
actionsTable[27154] = 806; // 'state 212' -> of -> shift (target=403, len=0)
actionsTable[27168] = 806; // 'state 212' -> from -> shift (target=403, len=0)
actionsTable[27169] = 192; // 'state 212' -> , -> shift (target=96, len=0)
actionsTable[27172] = 806; // 'state 212' -> type -> shift (target=403, len=0)
actionsTable[27176] = 48; // 'state 212' -> ... -> shift (target=24, len=0)
actionsTable[27177] = 424; // 'state 212' -> [ -> shift (target=212, len=0)
actionsTable[27178] = 1220; // 'state 212' -> ] -> shift (target=610, len=0)
actionsTable[27179] = 70; // 'state 212' -> async -> shift (target=35, len=0)
actionsTable[27180] = 72; // 'state 212' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 27183, 27185); // 'state 212' -> get..set -> shift (target=403, len=0)
actionsTable[27185] = 74; // 'state 212' -> class -> shift (target=37, len=0)
actionsTable[27190] = 28; // 'state 212' -> < -> shift (target=14, len=0)
actionsTable[27192] = 268; // 'state 212' -> | -> shift (target=134, len=0)
actionsTable[27195] = 578; // 'state 212' -> void -> shift (target=289, len=0)
actionsTable[27196] = 580; // 'state 212' -> typeof -> shift (target=290, len=0)
actionsTable[27198] = 32; // 'state 212' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 27205, 27207); // 'state 212' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 27208, 27211); // 'state 212' -> !..delete -> shift (target=15, len=0)
actionsTable[27211] = 34; // 'state 212' -> await -> shift (target=17, len=0)
actionsTable[27214] = 582; // 'state 212' -> identifier -> shift (target=291, len=0)
actionsTable.fill(1218, 27216, 27218); // 'state 212' -> number..string -> shift (target=609, len=0)
actionsTable[27218] = 798; // 'state 212' -> template_string -> shift (target=399, len=0)
actionsTable[27225] = 36; // 'state 212' -> update_operator -> shift (target=18, len=0)
actionsTable[27226] = 798; // 'state 212' -> regex -> shift (target=399, len=0)
actionsTable[27273] = 839; // 'state 213' -> ) -> reduce (target=163, len=1)
actionsTable[27291] = 164; // 'state 213' -> : -> shift (target=82, len=0)
actionsTable[27305] = 839; // 'state 213' -> [ -> reduce (target=163, len=1)
actionsTable[27317] = 164; // 'state 213' -> ?: -> shift (target=82, len=0)
actionsTable[27318] = 366; // 'state 213' -> < -> shift (target=183, len=0)
actionsTable.fill(839, 27320, 27322); // 'state 213' -> |..& -> reduce (target=163, len=1)
actionsTable[27325] = 432; // 'state 213' -> is -> shift (target=216, len=0)
actionsTable[27419] = 164; // 'state 214' -> : -> shift (target=82, len=0)
actionsTable[27445] = 164; // 'state 214' -> ?: -> shift (target=82, len=0)
actionsTable.fill(942, 27520, 27523); // 'state 215' -> true..null -> shift (target=471, len=0)
actionsTable[27525] = 262; // 'state 215' -> { -> shift (target=131, len=0)
actionsTable[27528] = 264; // 'state 215' -> ( -> shift (target=132, len=0)
actionsTable[27561] = 266; // 'state 215' -> [ -> shift (target=133, len=0)
actionsTable[27574] = 28; // 'state 215' -> < -> shift (target=14, len=0)
actionsTable[27576] = 268; // 'state 215' -> | -> shift (target=134, len=0)
actionsTable[27579] = 942; // 'state 215' -> void -> shift (target=471, len=0)
actionsTable[27580] = 944; // 'state 215' -> typeof -> shift (target=472, len=0)
actionsTable[27598] = 270; // 'state 215' -> identifier -> shift (target=135, len=0)
actionsTable.fill(942, 27600, 27602); // 'state 215' -> number..string -> shift (target=471, len=0)
actionsTable.fill(942, 27648, 27651); // 'state 216' -> true..null -> shift (target=471, len=0)
actionsTable[27653] = 262; // 'state 216' -> { -> shift (target=131, len=0)
actionsTable[27656] = 264; // 'state 216' -> ( -> shift (target=132, len=0)
actionsTable[27689] = 266; // 'state 216' -> [ -> shift (target=133, len=0)
actionsTable[27702] = 28; // 'state 216' -> < -> shift (target=14, len=0)
actionsTable[27704] = 268; // 'state 216' -> | -> shift (target=134, len=0)
actionsTable[27707] = 942; // 'state 216' -> void -> shift (target=471, len=0)
actionsTable[27708] = 944; // 'state 216' -> typeof -> shift (target=472, len=0)
actionsTable[27726] = 270; // 'state 216' -> identifier -> shift (target=135, len=0)
actionsTable.fill(942, 27728, 27730); // 'state 216' -> number..string -> shift (target=471, len=0)
actionsTable[27809] = 588; // 'state 217' -> , -> shift (target=294, len=0)
actionsTable[27818] = 1228; // 'state 217' -> ] -> shift (target=614, len=0)
actionsTable[27832] = 506; // 'state 217' -> | -> shift (target=253, len=0)
actionsTable[27833] = 508; // 'state 217' -> & -> shift (target=254, len=0)
actionsTable.fill(798, 27904, 27909); // 'state 218' -> true..super -> shift (target=399, len=0)
actionsTable[27909] = 68; // 'state 218' -> { -> shift (target=34, len=0)
actionsTable[27912] = 4; // 'state 218' -> ( -> shift (target=2, len=0)
actionsTable[27922] = 806; // 'state 218' -> of -> shift (target=403, len=0)
actionsTable[27936] = 806; // 'state 218' -> from -> shift (target=403, len=0)
actionsTable[27940] = 806; // 'state 218' -> type -> shift (target=403, len=0)
actionsTable[27945] = 20; // 'state 218' -> [ -> shift (target=10, len=0)
actionsTable[27947] = 70; // 'state 218' -> async -> shift (target=35, len=0)
actionsTable[27948] = 72; // 'state 218' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 27951, 27953); // 'state 218' -> get..set -> shift (target=403, len=0)
actionsTable[27953] = 74; // 'state 218' -> class -> shift (target=37, len=0)
actionsTable[27958] = 28; // 'state 218' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 27963, 27965); // 'state 218' -> void..typeof -> shift (target=15, len=0)
actionsTable[27966] = 32; // 'state 218' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 27973, 27975); // 'state 218' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 27976, 27979); // 'state 218' -> !..delete -> shift (target=15, len=0)
actionsTable[27979] = 34; // 'state 218' -> await -> shift (target=17, len=0)
actionsTable[27982] = 1240; // 'state 218' -> identifier -> shift (target=620, len=0)
actionsTable.fill(798, 27984, 27987); // 'state 218' -> number..template_string -> shift (target=399, len=0)
actionsTable[27993] = 36; // 'state 218' -> update_operator -> shift (target=18, len=0)
actionsTable[27994] = 798; // 'state 218' -> regex -> shift (target=399, len=0)
actionsTable[28050] = 806; // 'state 219' -> of -> shift (target=403, len=0)
actionsTable[28064] = 806; // 'state 219' -> from -> shift (target=403, len=0)
actionsTable[28068] = 806; // 'state 219' -> type -> shift (target=403, len=0)
actionsTable[28073] = 590; // 'state 219' -> [ -> shift (target=295, len=0)
actionsTable[28075] = 914; // 'state 219' -> async -> shift (target=457, len=0)
actionsTable.fill(806, 28079, 28081); // 'state 219' -> get..set -> shift (target=403, len=0)
actionsTable[28110] = 848; // 'state 219' -> identifier -> shift (target=424, len=0)
actionsTable.fill(848, 28112, 28114); // 'state 219' -> number..string -> shift (target=424, len=0)
actionsTable[28168] = 138; // 'state 220' -> ( -> shift (target=69, len=0)
actionsTable[28214] = 28; // 'state 220' -> < -> shift (target=14, len=0)
actionsTable[28294] = 1232; // 'state 221' -> } -> shift (target=616, len=0)
actionsTable[28306] = 806; // 'state 221' -> of -> shift (target=403, len=0)
actionsTable[28320] = 806; // 'state 221' -> from -> shift (target=403, len=0)
actionsTable[28324] = 806; // 'state 221' -> type -> shift (target=403, len=0)
actionsTable[28329] = 436; // 'state 221' -> [ -> shift (target=218, len=0)
actionsTable[28331] = 914; // 'state 221' -> async -> shift (target=457, len=0)
actionsTable[28334] = 438; // 'state 221' -> readonly -> shift (target=219, len=0)
actionsTable.fill(806, 28335, 28337); // 'state 221' -> get..set -> shift (target=403, len=0)
actionsTable[28350] = 440; // 'state 221' -> new -> shift (target=220, len=0)
actionsTable[28366] = 848; // 'state 221' -> identifier -> shift (target=424, len=0)
actionsTable.fill(848, 28368, 28370); // 'state 221' -> number..string -> shift (target=424, len=0)
actionsTable[28424] = 138; // 'state 222' -> ( -> shift (target=69, len=0)
actionsTable[28443] = 164; // 'state 222' -> : -> shift (target=82, len=0)
actionsTable[28469] = 164; // 'state 222' -> ?: -> shift (target=82, len=0)
actionsTable[28470] = 28; // 'state 222' -> < -> shift (target=14, len=0)
actionsTable[28552] = 86; // 'state 223' -> ( -> shift (target=43, len=0)
actionsTable[28563] = 88; // 'state 223' -> in -> shift (target=44, len=0)
actionsTable[28578] = 90; // 'state 223' -> * -> shift (target=45, len=0)
actionsTable[28579] = 92; // 'state 223' -> as -> shift (target=46, len=0)
actionsTable[28585] = 94; // 'state 223' -> [ -> shift (target=47, len=0)
actionsTable[28586] = 1242; // 'state 223' -> ] -> shift (target=621, len=0)
actionsTable.fill(88, 28598, 28600); // 'state 223' -> <..> -> shift (target=44, len=0)
actionsTable[28600] = 96; // 'state 223' -> | -> shift (target=48, len=0)
actionsTable[28601] = 98; // 'state 223' -> & -> shift (target=49, len=0)
actionsTable[28607] = 100; // 'state 223' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 28608, 28610); // 'state 223' -> ||..?? -> shift (target=51, len=0)
actionsTable[28610] = 104; // 'state 223' -> && -> shift (target=52, len=0)
actionsTable[28611] = 106; // 'state 223' -> ^ -> shift (target=53, len=0)
actionsTable[28612] = 88; // 'state 223' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 28613, 28615); // 'state 223' -> +..- -> shift (target=54, len=0)
actionsTable[28615] = 90; // 'state 223' -> ** -> shift (target=45, len=0)
actionsTable[28620] = 110; // 'state 223' -> ?. -> shift (target=55, len=0)
actionsTable[28621] = 864; // 'state 223' -> . -> shift (target=432, len=0)
actionsTable[28629] = 112; // 'state 223' -> equality_operator -> shift (target=56, len=0)
actionsTable[28630] = 88; // 'state 223' -> relational_operator -> shift (target=44, len=0)
actionsTable[28631] = 114; // 'state 223' -> shift_operator -> shift (target=57, len=0)
actionsTable[28632] = 90; // 'state 223' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[28633] = 866; // 'state 223' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(798, 28672, 28677); // 'state 224' -> true..super -> shift (target=399, len=0)
actionsTable[28677] = 68; // 'state 224' -> { -> shift (target=34, len=0)
actionsTable[28680] = 4; // 'state 224' -> ( -> shift (target=2, len=0)
actionsTable[28681] = 1244; // 'state 224' -> ) -> shift (target=622, len=0)
actionsTable[28690] = 806; // 'state 224' -> of -> shift (target=403, len=0)
actionsTable[28704] = 806; // 'state 224' -> from -> shift (target=403, len=0)
actionsTable[28708] = 806; // 'state 224' -> type -> shift (target=403, len=0)
actionsTable[28712] = 48; // 'state 224' -> ... -> shift (target=24, len=0)
actionsTable[28713] = 20; // 'state 224' -> [ -> shift (target=10, len=0)
actionsTable[28715] = 70; // 'state 224' -> async -> shift (target=35, len=0)
actionsTable[28716] = 72; // 'state 224' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 28719, 28721); // 'state 224' -> get..set -> shift (target=403, len=0)
actionsTable[28721] = 74; // 'state 224' -> class -> shift (target=37, len=0)
actionsTable[28726] = 28; // 'state 224' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 28731, 28733); // 'state 224' -> void..typeof -> shift (target=15, len=0)
actionsTable[28734] = 32; // 'state 224' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 28741, 28743); // 'state 224' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 28744, 28747); // 'state 224' -> !..delete -> shift (target=15, len=0)
actionsTable[28747] = 34; // 'state 224' -> await -> shift (target=17, len=0)
actionsTable[28750] = 818; // 'state 224' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 28752, 28755); // 'state 224' -> number..template_string -> shift (target=399, len=0)
actionsTable[28761] = 36; // 'state 224' -> update_operator -> shift (target=18, len=0)
actionsTable[28762] = 798; // 'state 224' -> regex -> shift (target=399, len=0)
actionsTable[28806] = 1248; // 'state 225' -> } -> shift (target=624, len=0)
actionsTable[28836] = 966; // 'state 225' -> type -> shift (target=483, len=0)
actionsTable[28878] = 968; // 'state 225' -> identifier -> shift (target=484, len=0)
actionsTable[28936] = 138; // 'state 226' -> ( -> shift (target=69, len=0)
actionsTable[28982] = 28; // 'state 226' -> < -> shift (target=14, len=0)
actionsTable[29061] = 80; // 'state 227' -> { -> shift (target=40, len=0)
actionsTable[29069] = 1130; // 'state 227' -> ; -> shift (target=565, len=0)
actionsTable[29083] = 164; // 'state 227' -> : -> shift (target=82, len=0)
actionsTable[29109] = 164; // 'state 227' -> ?: -> shift (target=82, len=0)
actionsTable[29192] = 138; // 'state 228' -> ( -> shift (target=69, len=0)
actionsTable[29317] = 146; // 'state 229' -> { -> shift (target=73, len=0)
actionsTable[29445] = 146; // 'state 230' -> { -> shift (target=73, len=0)
actionsTable[29490] = 148; // 'state 230' -> extends -> shift (target=74, len=0)
actionsTable[29491] = 150; // 'state 230' -> implements -> shift (target=75, len=0)
actionsTable[29573] = 122; // 'state 231' -> { -> shift (target=61, len=0)
actionsTable[29609] = 124; // 'state 231' -> [ -> shift (target=62, len=0)
actionsTable[29646] = 894; // 'state 231' -> identifier -> shift (target=447, len=0)
actionsTable.fill(798, 29696, 29701); // 'state 232' -> true..super -> shift (target=399, len=0)
actionsTable[29701] = 68; // 'state 232' -> { -> shift (target=34, len=0)
actionsTable[29704] = 4; // 'state 232' -> ( -> shift (target=2, len=0)
actionsTable[29714] = 806; // 'state 232' -> of -> shift (target=403, len=0)
actionsTable[29728] = 806; // 'state 232' -> from -> shift (target=403, len=0)
actionsTable[29732] = 806; // 'state 232' -> type -> shift (target=403, len=0)
actionsTable[29737] = 20; // 'state 232' -> [ -> shift (target=10, len=0)
actionsTable[29739] = 70; // 'state 232' -> async -> shift (target=35, len=0)
actionsTable[29740] = 72; // 'state 232' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 29743, 29745); // 'state 232' -> get..set -> shift (target=403, len=0)
actionsTable[29745] = 74; // 'state 232' -> class -> shift (target=37, len=0)
actionsTable[29750] = 28; // 'state 232' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 29755, 29757); // 'state 232' -> void..typeof -> shift (target=15, len=0)
actionsTable[29758] = 32; // 'state 232' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 29765, 29767); // 'state 232' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 29768, 29771); // 'state 232' -> !..delete -> shift (target=15, len=0)
actionsTable[29771] = 34; // 'state 232' -> await -> shift (target=17, len=0)
actionsTable[29774] = 818; // 'state 232' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 29776, 29779); // 'state 232' -> number..template_string -> shift (target=399, len=0)
actionsTable[29785] = 36; // 'state 232' -> update_operator -> shift (target=18, len=0)
actionsTable[29786] = 798; // 'state 232' -> regex -> shift (target=399, len=0)
actionsTable.fill(1791, 29824, 29832); // 'state 233' -> true..if -> reduce (target=127, len=3)
actionsTable[29832] = 86; // 'state 233' -> ( -> shift (target=43, len=0)
actionsTable.fill(1791, 29834, 29843); // 'state 233' -> else..of -> reduce (target=127, len=3)
actionsTable[29843] = 88; // 'state 233' -> in -> shift (target=44, len=0)
actionsTable.fill(1791, 29844, 29847); // 'state 233' -> return..try -> reduce (target=127, len=3)
actionsTable.fill(1791, 29849, 29851); // 'state 233' -> switch..case -> reduce (target=127, len=3)
actionsTable.fill(1791, 29852, 29858); // 'state 233' -> default.., -> reduce (target=127, len=3)
actionsTable[29858] = 90; // 'state 233' -> * -> shift (target=45, len=0)
actionsTable[29859] = 92; // 'state 233' -> as -> shift (target=46, len=0)
actionsTable.fill(1791, 29860, 29862); // 'state 233' -> type..export -> reduce (target=127, len=3)
actionsTable[29865] = 94; // 'state 233' -> [ -> shift (target=47, len=0)
actionsTable.fill(1791, 29867, 29869); // 'state 233' -> async..function -> reduce (target=127, len=3)
actionsTable.fill(1791, 29871, 29874); // 'state 233' -> get..class -> reduce (target=127, len=3)
actionsTable[29876] = 1791; // 'state 233' -> interface -> reduce (target=127, len=3)
actionsTable.fill(88, 29878, 29880); // 'state 233' -> <..> -> shift (target=44, len=0)
actionsTable[29880] = 96; // 'state 233' -> | -> shift (target=48, len=0)
actionsTable[29881] = 98; // 'state 233' -> & -> shift (target=49, len=0)
actionsTable.fill(1791, 29883, 29885); // 'state 233' -> void..typeof -> reduce (target=127, len=3)
actionsTable[29886] = 1791; // 'state 233' -> new -> reduce (target=127, len=3)
actionsTable[29887] = 100; // 'state 233' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 29888, 29890); // 'state 233' -> ||..?? -> shift (target=51, len=0)
actionsTable[29890] = 104; // 'state 233' -> && -> shift (target=52, len=0)
actionsTable[29891] = 106; // 'state 233' -> ^ -> shift (target=53, len=0)
actionsTable[29892] = 88; // 'state 233' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 29893, 29895); // 'state 233' -> +..- -> shift (target=54, len=0)
actionsTable[29895] = 90; // 'state 233' -> ** -> shift (target=45, len=0)
actionsTable.fill(1791, 29896, 29900); // 'state 233' -> !..await -> reduce (target=127, len=3)
actionsTable[29900] = 110; // 'state 233' -> ?. -> shift (target=55, len=0)
actionsTable[29901] = 864; // 'state 233' -> . -> shift (target=432, len=0)
actionsTable[29902] = 1791; // 'state 233' -> identifier -> reduce (target=127, len=3)
actionsTable.fill(1791, 29904, 29907); // 'state 233' -> number..template_string -> reduce (target=127, len=3)
actionsTable[29909] = 112; // 'state 233' -> equality_operator -> shift (target=56, len=0)
actionsTable[29910] = 88; // 'state 233' -> relational_operator -> shift (target=44, len=0)
actionsTable[29911] = 114; // 'state 233' -> shift_operator -> shift (target=57, len=0)
actionsTable[29912] = 90; // 'state 233' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[29913] = 866; // 'state 233' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(1791, 29914, 29916); // 'state 233' -> regex..@par-gen.EOF -> reduce (target=127, len=3)
actionsTable[29958] = 1266; // 'state 234' -> } -> shift (target=633, len=0)
actionsTable[29970] = 806; // 'state 234' -> of -> shift (target=403, len=0)
actionsTable[29984] = 806; // 'state 234' -> from -> shift (target=403, len=0)
actionsTable[29988] = 806; // 'state 234' -> type -> shift (target=403, len=0)
actionsTable[29992] = 294; // 'state 234' -> ... -> shift (target=147, len=0)
actionsTable[29993] = 198; // 'state 234' -> [ -> shift (target=99, len=0)
actionsTable[29995] = 914; // 'state 234' -> async -> shift (target=457, len=0)
actionsTable.fill(806, 29999, 30001); // 'state 234' -> get..set -> shift (target=403, len=0)
actionsTable[30030] = 992; // 'state 234' -> identifier -> shift (target=496, len=0)
actionsTable.fill(848, 30032, 30034); // 'state 234' -> number..string -> shift (target=424, len=0)
actionsTable.fill(798, 30080, 30085); // 'state 235' -> true..super -> shift (target=399, len=0)
actionsTable[30085] = 68; // 'state 235' -> { -> shift (target=34, len=0)
actionsTable[30088] = 4; // 'state 235' -> ( -> shift (target=2, len=0)
actionsTable[30098] = 806; // 'state 235' -> of -> shift (target=403, len=0)
actionsTable[30112] = 806; // 'state 235' -> from -> shift (target=403, len=0)
actionsTable[30116] = 806; // 'state 235' -> type -> shift (target=403, len=0)
actionsTable[30121] = 20; // 'state 235' -> [ -> shift (target=10, len=0)
actionsTable[30123] = 70; // 'state 235' -> async -> shift (target=35, len=0)
actionsTable[30124] = 72; // 'state 235' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 30127, 30129); // 'state 235' -> get..set -> shift (target=403, len=0)
actionsTable[30129] = 74; // 'state 235' -> class -> shift (target=37, len=0)
actionsTable[30134] = 28; // 'state 235' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 30139, 30141); // 'state 235' -> void..typeof -> shift (target=15, len=0)
actionsTable[30142] = 32; // 'state 235' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 30149, 30151); // 'state 235' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 30152, 30155); // 'state 235' -> !..delete -> shift (target=15, len=0)
actionsTable[30155] = 34; // 'state 235' -> await -> shift (target=17, len=0)
actionsTable[30158] = 818; // 'state 235' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 30160, 30163); // 'state 235' -> number..template_string -> shift (target=399, len=0)
actionsTable[30169] = 36; // 'state 235' -> update_operator -> shift (target=18, len=0)
actionsTable[30170] = 798; // 'state 235' -> regex -> shift (target=399, len=0)
actionsTable[30213] = 122; // 'state 236' -> { -> shift (target=61, len=0)
actionsTable[30249] = 124; // 'state 236' -> [ -> shift (target=62, len=0)
actionsTable[30286] = 894; // 'state 236' -> identifier -> shift (target=447, len=0)
actionsTable[30369] = 476; // 'state 237' -> , -> shift (target=238, len=0)
actionsTable[30378] = 1272; // 'state 237' -> ] -> shift (target=636, len=0)
actionsTable[30469] = 122; // 'state 238' -> { -> shift (target=61, len=0)
actionsTable[30497] = 777; // 'state 238' -> , -> reduce (target=132, len=1)
actionsTable[30504] = 300; // 'state 238' -> ... -> shift (target=150, len=0)
actionsTable[30505] = 124; // 'state 238' -> [ -> shift (target=62, len=0)
actionsTable[30506] = 777; // 'state 238' -> ] -> reduce (target=132, len=1)
actionsTable[30542] = 894; // 'state 238' -> identifier -> shift (target=447, len=0)
actionsTable.fill(798, 30592, 30597); // 'state 239' -> true..super -> shift (target=399, len=0)
actionsTable[30597] = 68; // 'state 239' -> { -> shift (target=34, len=0)
actionsTable[30600] = 4; // 'state 239' -> ( -> shift (target=2, len=0)
actionsTable[30610] = 806; // 'state 239' -> of -> shift (target=403, len=0)
actionsTable[30624] = 806; // 'state 239' -> from -> shift (target=403, len=0)
actionsTable[30628] = 806; // 'state 239' -> type -> shift (target=403, len=0)
actionsTable[30633] = 20; // 'state 239' -> [ -> shift (target=10, len=0)
actionsTable[30635] = 70; // 'state 239' -> async -> shift (target=35, len=0)
actionsTable[30636] = 72; // 'state 239' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 30639, 30641); // 'state 239' -> get..set -> shift (target=403, len=0)
actionsTable[30641] = 74; // 'state 239' -> class -> shift (target=37, len=0)
actionsTable[30646] = 28; // 'state 239' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 30651, 30653); // 'state 239' -> void..typeof -> shift (target=15, len=0)
actionsTable[30654] = 32; // 'state 239' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 30661, 30663); // 'state 239' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 30664, 30667); // 'state 239' -> !..delete -> shift (target=15, len=0)
actionsTable[30667] = 34; // 'state 239' -> await -> shift (target=17, len=0)
actionsTable[30670] = 818; // 'state 239' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 30672, 30675); // 'state 239' -> number..template_string -> shift (target=399, len=0)
actionsTable[30681] = 36; // 'state 239' -> update_operator -> shift (target=18, len=0)
actionsTable[30682] = 798; // 'state 239' -> regex -> shift (target=399, len=0)
actionsTable[30725] = 80; // 'state 240' -> { -> shift (target=40, len=0)
actionsTable[30733] = 1278; // 'state 240' -> ; -> shift (target=639, len=0)
actionsTable[30747] = 164; // 'state 240' -> : -> shift (target=82, len=0)
actionsTable[30773] = 164; // 'state 240' -> ?: -> shift (target=82, len=0)
actionsTable[30856] = 138; // 'state 241' -> ( -> shift (target=69, len=0)
actionsTable[30981] = 80; // 'state 242' -> { -> shift (target=40, len=0)
actionsTable[31003] = 164; // 'state 242' -> : -> shift (target=82, len=0)
actionsTable[31029] = 164; // 'state 242' -> ?: -> shift (target=82, len=0)
actionsTable[31109] = 80; // 'state 243' -> { -> shift (target=40, len=0)
actionsTable.fill(2419, 31232, 31240); // 'state 244' -> true..if -> reduce (target=185, len=4)
actionsTable[31240] = 86; // 'state 244' -> ( -> shift (target=43, len=0)
actionsTable.fill(2419, 31241, 31251); // 'state 244' -> )..of -> reduce (target=185, len=4)
actionsTable[31251] = 88; // 'state 244' -> in -> shift (target=44, len=0)
actionsTable.fill(2419, 31252, 31255); // 'state 244' -> return..try -> reduce (target=185, len=4)
actionsTable.fill(2419, 31257, 31266); // 'state 244' -> switch.., -> reduce (target=185, len=4)
actionsTable[31266] = 90; // 'state 244' -> * -> shift (target=45, len=0)
actionsTable[31267] = 92; // 'state 244' -> as -> shift (target=46, len=0)
actionsTable.fill(2419, 31268, 31270); // 'state 244' -> type..export -> reduce (target=185, len=4)
actionsTable[31273] = 94; // 'state 244' -> [ -> shift (target=47, len=0)
actionsTable.fill(2419, 31274, 31282); // 'state 244' -> ]..class -> reduce (target=185, len=4)
actionsTable.fill(2419, 31283, 31285); // 'state 244' -> implements..interface -> reduce (target=185, len=4)
actionsTable.fill(88, 31286, 31288); // 'state 244' -> <..> -> shift (target=44, len=0)
actionsTable[31288] = 96; // 'state 244' -> | -> shift (target=48, len=0)
actionsTable[31289] = 98; // 'state 244' -> & -> shift (target=49, len=0)
actionsTable.fill(2419, 31291, 31293); // 'state 244' -> void..typeof -> reduce (target=185, len=4)
actionsTable[31294] = 2419; // 'state 244' -> new -> reduce (target=185, len=4)
actionsTable[31295] = 100; // 'state 244' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 31296, 31298); // 'state 244' -> ||..?? -> shift (target=51, len=0)
actionsTable[31298] = 104; // 'state 244' -> && -> shift (target=52, len=0)
actionsTable[31299] = 106; // 'state 244' -> ^ -> shift (target=53, len=0)
actionsTable[31300] = 88; // 'state 244' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 31301, 31303); // 'state 244' -> +..- -> shift (target=54, len=0)
actionsTable[31303] = 90; // 'state 244' -> ** -> shift (target=45, len=0)
actionsTable.fill(2419, 31304, 31308); // 'state 244' -> !..await -> reduce (target=185, len=4)
actionsTable[31308] = 110; // 'state 244' -> ?. -> shift (target=55, len=0)
actionsTable[31309] = 864; // 'state 244' -> . -> shift (target=432, len=0)
actionsTable.fill(2419, 31310, 31316); // 'state 244' -> identifier..accessibility_modifier -> reduce (target=185, len=4)
actionsTable[31317] = 112; // 'state 244' -> equality_operator -> shift (target=56, len=0)
actionsTable[31318] = 88; // 'state 244' -> relational_operator -> shift (target=44, len=0)
actionsTable[31319] = 114; // 'state 244' -> shift_operator -> shift (target=57, len=0)
actionsTable[31320] = 90; // 'state 244' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[31321] = 866; // 'state 244' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(2419, 31322, 31324); // 'state 244' -> regex..@par-gen.EOF -> reduce (target=185, len=4)
actionsTable.fill(798, 31360, 31365); // 'state 245' -> true..super -> shift (target=399, len=0)
actionsTable[31365] = 2; // 'state 245' -> { -> shift (target=1, len=0)
actionsTable[31368] = 4; // 'state 245' -> ( -> shift (target=2, len=0)
actionsTable[31378] = 806; // 'state 245' -> of -> shift (target=403, len=0)
actionsTable[31392] = 806; // 'state 245' -> from -> shift (target=403, len=0)
actionsTable[31396] = 806; // 'state 245' -> type -> shift (target=403, len=0)
actionsTable[31401] = 20; // 'state 245' -> [ -> shift (target=10, len=0)
actionsTable[31403] = 70; // 'state 245' -> async -> shift (target=35, len=0)
actionsTable[31404] = 72; // 'state 245' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 31407, 31409); // 'state 245' -> get..set -> shift (target=403, len=0)
actionsTable[31409] = 74; // 'state 245' -> class -> shift (target=37, len=0)
actionsTable[31414] = 28; // 'state 245' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 31419, 31421); // 'state 245' -> void..typeof -> shift (target=15, len=0)
actionsTable[31422] = 32; // 'state 245' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 31429, 31431); // 'state 245' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 31432, 31435); // 'state 245' -> !..delete -> shift (target=15, len=0)
actionsTable[31435] = 34; // 'state 245' -> await -> shift (target=17, len=0)
actionsTable[31438] = 818; // 'state 245' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 31440, 31443); // 'state 245' -> number..template_string -> shift (target=399, len=0)
actionsTable[31449] = 36; // 'state 245' -> update_operator -> shift (target=18, len=0)
actionsTable[31450] = 798; // 'state 245' -> regex -> shift (target=399, len=0)
actionsTable[31493] = 80; // 'state 246' -> { -> shift (target=40, len=0)
actionsTable[31501] = 1278; // 'state 246' -> ; -> shift (target=639, len=0)
actionsTable[31621] = 122; // 'state 247' -> { -> shift (target=61, len=0)
actionsTable[31625] = 1288; // 'state 247' -> ) -> shift (target=644, len=0)
actionsTable[31656] = 320; // 'state 247' -> ... -> shift (target=160, len=0)
actionsTable[31657] = 124; // 'state 247' -> [ -> shift (target=62, len=0)
actionsTable[31659] = 1006; // 'state 247' -> async -> shift (target=503, len=0)
actionsTable.fill(1008, 31661, 31663); // 'state 247' -> static..readonly -> shift (target=504, len=0)
actionsTable.fill(1006, 31663, 31665); // 'state 247' -> get..set -> shift (target=503, len=0)
actionsTable[31694] = 894; // 'state 247' -> identifier -> shift (target=447, len=0)
actionsTable[31699] = 1008; // 'state 247' -> accessibility_modifier -> shift (target=504, len=0)
actionsTable[31753] = 1301; // 'state 248' -> ) -> reduce (target=138, len=2)
actionsTable[31771] = 164; // 'state 248' -> : -> shift (target=82, len=0)
actionsTable[31777] = 1301; // 'state 248' -> , -> reduce (target=138, len=2)
actionsTable[31783] = 636; // 'state 248' -> = -> shift (target=318, len=0)
actionsTable[31797] = 164; // 'state 248' -> ?: -> shift (target=82, len=0)
actionsTable.fill(798, 31872, 31877); // 'state 249' -> true..super -> shift (target=399, len=0)
actionsTable[31877] = 68; // 'state 249' -> { -> shift (target=34, len=0)
actionsTable[31880] = 4; // 'state 249' -> ( -> shift (target=2, len=0)
actionsTable[31890] = 806; // 'state 249' -> of -> shift (target=403, len=0)
actionsTable[31904] = 806; // 'state 249' -> from -> shift (target=403, len=0)
actionsTable[31908] = 806; // 'state 249' -> type -> shift (target=403, len=0)
actionsTable[31913] = 20; // 'state 249' -> [ -> shift (target=10, len=0)
actionsTable[31915] = 70; // 'state 249' -> async -> shift (target=35, len=0)
actionsTable[31916] = 72; // 'state 249' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 31919, 31921); // 'state 249' -> get..set -> shift (target=403, len=0)
actionsTable[31921] = 74; // 'state 249' -> class -> shift (target=37, len=0)
actionsTable[31926] = 28; // 'state 249' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 31931, 31933); // 'state 249' -> void..typeof -> shift (target=15, len=0)
actionsTable[31934] = 32; // 'state 249' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 31941, 31943); // 'state 249' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 31944, 31947); // 'state 249' -> !..delete -> shift (target=15, len=0)
actionsTable[31947] = 34; // 'state 249' -> await -> shift (target=17, len=0)
actionsTable[31950] = 818; // 'state 249' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 31952, 31955); // 'state 249' -> number..template_string -> shift (target=399, len=0)
actionsTable[31961] = 36; // 'state 249' -> update_operator -> shift (target=18, len=0)
actionsTable[31962] = 798; // 'state 249' -> regex -> shift (target=399, len=0)
actionsTable[32009] = 1301; // 'state 250' -> ) -> reduce (target=138, len=2)
actionsTable[32027] = 164; // 'state 250' -> : -> shift (target=82, len=0)
actionsTable[32033] = 1301; // 'state 250' -> , -> reduce (target=138, len=2)
actionsTable[32053] = 164; // 'state 250' -> ?: -> shift (target=82, len=0)
actionsTable[32133] = 146; // 'state 251' -> { -> shift (target=73, len=0)
actionsTable.fill(942, 32256, 32259); // 'state 252' -> true..null -> shift (target=471, len=0)
actionsTable[32261] = 262; // 'state 252' -> { -> shift (target=131, len=0)
actionsTable[32264] = 264; // 'state 252' -> ( -> shift (target=132, len=0)
actionsTable[32297] = 266; // 'state 252' -> [ -> shift (target=133, len=0)
actionsTable[32310] = 28; // 'state 252' -> < -> shift (target=14, len=0)
actionsTable[32312] = 268; // 'state 252' -> | -> shift (target=134, len=0)
actionsTable[32315] = 942; // 'state 252' -> void -> shift (target=471, len=0)
actionsTable[32316] = 944; // 'state 252' -> typeof -> shift (target=472, len=0)
actionsTable[32334] = 270; // 'state 252' -> identifier -> shift (target=135, len=0)
actionsTable.fill(942, 32336, 32338); // 'state 252' -> number..string -> shift (target=471, len=0)
actionsTable.fill(942, 32384, 32387); // 'state 253' -> true..null -> shift (target=471, len=0)
actionsTable[32389] = 262; // 'state 253' -> { -> shift (target=131, len=0)
actionsTable[32392] = 264; // 'state 253' -> ( -> shift (target=132, len=0)
actionsTable[32425] = 266; // 'state 253' -> [ -> shift (target=133, len=0)
actionsTable[32438] = 28; // 'state 253' -> < -> shift (target=14, len=0)
actionsTable[32440] = 268; // 'state 253' -> | -> shift (target=134, len=0)
actionsTable[32443] = 942; // 'state 253' -> void -> shift (target=471, len=0)
actionsTable[32444] = 944; // 'state 253' -> typeof -> shift (target=472, len=0)
actionsTable[32462] = 270; // 'state 253' -> identifier -> shift (target=135, len=0)
actionsTable.fill(942, 32464, 32466); // 'state 253' -> number..string -> shift (target=471, len=0)
actionsTable.fill(942, 32512, 32515); // 'state 254' -> true..null -> shift (target=471, len=0)
actionsTable[32517] = 262; // 'state 254' -> { -> shift (target=131, len=0)
actionsTable[32520] = 264; // 'state 254' -> ( -> shift (target=132, len=0)
actionsTable[32553] = 266; // 'state 254' -> [ -> shift (target=133, len=0)
actionsTable[32566] = 28; // 'state 254' -> < -> shift (target=14, len=0)
actionsTable[32568] = 268; // 'state 254' -> | -> shift (target=134, len=0)
actionsTable[32571] = 942; // 'state 254' -> void -> shift (target=471, len=0)
actionsTable[32572] = 944; // 'state 254' -> typeof -> shift (target=472, len=0)
actionsTable[32590] = 270; // 'state 254' -> identifier -> shift (target=135, len=0)
actionsTable.fill(942, 32592, 32594); // 'state 254' -> number..string -> shift (target=471, len=0)
actionsTable[32646] = 1325; // 'state 255' -> } -> reduce (target=150, len=2)
actionsTable[32648] = 138; // 'state 255' -> ( -> shift (target=69, len=0)
actionsTable[32653] = 1302; // 'state 255' -> ; -> shift (target=651, len=0)
actionsTable[32658] = 1325; // 'state 255' -> of -> reduce (target=150, len=2)
actionsTable[32667] = 164; // 'state 255' -> : -> shift (target=82, len=0)
actionsTable[32672] = 1325; // 'state 255' -> from -> reduce (target=150, len=2)
actionsTable[32676] = 1325; // 'state 255' -> type -> reduce (target=150, len=2)
actionsTable[32679] = 642; // 'state 255' -> = -> shift (target=321, len=0)
actionsTable[32681] = 1325; // 'state 255' -> [ -> reduce (target=150, len=2)
actionsTable[32683] = 1325; // 'state 255' -> async -> reduce (target=150, len=2)
actionsTable.fill(1325, 32685, 32689); // 'state 255' -> static..set -> reduce (target=150, len=2)
actionsTable[32693] = 164; // 'state 255' -> ?: -> shift (target=82, len=0)
actionsTable[32694] = 28; // 'state 255' -> < -> shift (target=14, len=0)
actionsTable.fill(1325, 32718, 32722); // 'state 255' -> identifier..string -> reduce (target=150, len=2)
actionsTable[32723] = 1325; // 'state 255' -> accessibility_modifier -> reduce (target=150, len=2)
actionsTable.fill(798, 32768, 32773); // 'state 256' -> true..super -> shift (target=399, len=0)
actionsTable[32773] = 68; // 'state 256' -> { -> shift (target=34, len=0)
actionsTable[32776] = 4; // 'state 256' -> ( -> shift (target=2, len=0)
actionsTable[32786] = 806; // 'state 256' -> of -> shift (target=403, len=0)
actionsTable[32800] = 806; // 'state 256' -> from -> shift (target=403, len=0)
actionsTable[32804] = 806; // 'state 256' -> type -> shift (target=403, len=0)
actionsTable[32809] = 20; // 'state 256' -> [ -> shift (target=10, len=0)
actionsTable[32811] = 70; // 'state 256' -> async -> shift (target=35, len=0)
actionsTable[32812] = 72; // 'state 256' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 32815, 32817); // 'state 256' -> get..set -> shift (target=403, len=0)
actionsTable[32817] = 74; // 'state 256' -> class -> shift (target=37, len=0)
actionsTable[32822] = 28; // 'state 256' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 32827, 32829); // 'state 256' -> void..typeof -> shift (target=15, len=0)
actionsTable[32830] = 32; // 'state 256' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 32837, 32839); // 'state 256' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 32840, 32843); // 'state 256' -> !..delete -> shift (target=15, len=0)
actionsTable[32843] = 34; // 'state 256' -> await -> shift (target=17, len=0)
actionsTable[32846] = 818; // 'state 256' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 32848, 32851); // 'state 256' -> number..template_string -> shift (target=399, len=0)
actionsTable[32857] = 36; // 'state 256' -> update_operator -> shift (target=18, len=0)
actionsTable[32858] = 798; // 'state 256' -> regex -> shift (target=399, len=0)
actionsTable[32901] = 80; // 'state 257' -> { -> shift (target=40, len=0)
actionsTable[32923] = 164; // 'state 257' -> : -> shift (target=82, len=0)
actionsTable[32949] = 164; // 'state 257' -> ?: -> shift (target=82, len=0)
actionsTable[33032] = 138; // 'state 258' -> ( -> shift (target=69, len=0)
actionsTable[33157] = 262; // 'state 259' -> { -> shift (target=131, len=0)
actionsTable[33285] = 1329; // 'state 260' -> { -> reduce (target=152, len=2)
actionsTable[33313] = 504; // 'state 260' -> , -> shift (target=252, len=0)
actionsTable[33336] = 506; // 'state 260' -> | -> shift (target=253, len=0)
actionsTable[33337] = 508; // 'state 260' -> & -> shift (target=254, len=0)
actionsTable.fill(942, 33408, 33411); // 'state 261' -> true..null -> shift (target=471, len=0)
actionsTable[33413] = 262; // 'state 261' -> { -> shift (target=131, len=0)
actionsTable[33416] = 264; // 'state 261' -> ( -> shift (target=132, len=0)
actionsTable[33449] = 266; // 'state 261' -> [ -> shift (target=133, len=0)
actionsTable[33462] = 28; // 'state 261' -> < -> shift (target=14, len=0)
actionsTable[33464] = 268; // 'state 261' -> | -> shift (target=134, len=0)
actionsTable[33467] = 942; // 'state 261' -> void -> shift (target=471, len=0)
actionsTable[33468] = 944; // 'state 261' -> typeof -> shift (target=472, len=0)
actionsTable[33486] = 270; // 'state 261' -> identifier -> shift (target=135, len=0)
actionsTable.fill(942, 33488, 33490); // 'state 261' -> number..string -> shift (target=471, len=0)
actionsTable.fill(798, 33536, 33541); // 'state 262' -> true..super -> shift (target=399, len=0)
actionsTable[33541] = 68; // 'state 262' -> { -> shift (target=34, len=0)
actionsTable[33544] = 4; // 'state 262' -> ( -> shift (target=2, len=0)
actionsTable[33545] = 1316; // 'state 262' -> ) -> shift (target=658, len=0)
actionsTable[33554] = 806; // 'state 262' -> of -> shift (target=403, len=0)
actionsTable[33568] = 806; // 'state 262' -> from -> shift (target=403, len=0)
actionsTable[33572] = 806; // 'state 262' -> type -> shift (target=403, len=0)
actionsTable[33576] = 48; // 'state 262' -> ... -> shift (target=24, len=0)
actionsTable[33577] = 20; // 'state 262' -> [ -> shift (target=10, len=0)
actionsTable[33579] = 70; // 'state 262' -> async -> shift (target=35, len=0)
actionsTable[33580] = 72; // 'state 262' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 33583, 33585); // 'state 262' -> get..set -> shift (target=403, len=0)
actionsTable[33585] = 74; // 'state 262' -> class -> shift (target=37, len=0)
actionsTable[33590] = 28; // 'state 262' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 33595, 33597); // 'state 262' -> void..typeof -> shift (target=15, len=0)
actionsTable[33598] = 32; // 'state 262' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 33605, 33607); // 'state 262' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 33608, 33611); // 'state 262' -> !..delete -> shift (target=15, len=0)
actionsTable[33611] = 34; // 'state 262' -> await -> shift (target=17, len=0)
actionsTable[33614] = 818; // 'state 262' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 33616, 33619); // 'state 262' -> number..template_string -> shift (target=399, len=0)
actionsTable[33625] = 36; // 'state 262' -> update_operator -> shift (target=18, len=0)
actionsTable[33626] = 798; // 'state 262' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 33664, 33669); // 'state 263' -> true..super -> shift (target=399, len=0)
actionsTable[33669] = 68; // 'state 263' -> { -> shift (target=34, len=0)
actionsTable[33672] = 4; // 'state 263' -> ( -> shift (target=2, len=0)
actionsTable[33682] = 806; // 'state 263' -> of -> shift (target=403, len=0)
actionsTable[33696] = 806; // 'state 263' -> from -> shift (target=403, len=0)
actionsTable[33700] = 806; // 'state 263' -> type -> shift (target=403, len=0)
actionsTable[33705] = 20; // 'state 263' -> [ -> shift (target=10, len=0)
actionsTable[33707] = 70; // 'state 263' -> async -> shift (target=35, len=0)
actionsTable[33708] = 72; // 'state 263' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 33711, 33713); // 'state 263' -> get..set -> shift (target=403, len=0)
actionsTable[33713] = 74; // 'state 263' -> class -> shift (target=37, len=0)
actionsTable[33718] = 28; // 'state 263' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 33723, 33725); // 'state 263' -> void..typeof -> shift (target=15, len=0)
actionsTable[33726] = 32; // 'state 263' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 33733, 33735); // 'state 263' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 33736, 33739); // 'state 263' -> !..delete -> shift (target=15, len=0)
actionsTable[33739] = 34; // 'state 263' -> await -> shift (target=17, len=0)
actionsTable[33742] = 818; // 'state 263' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 33744, 33747); // 'state 263' -> number..template_string -> shift (target=399, len=0)
actionsTable[33753] = 36; // 'state 263' -> update_operator -> shift (target=18, len=0)
actionsTable[33754] = 798; // 'state 263' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 33792, 33797); // 'state 264' -> true..super -> shift (target=399, len=0)
actionsTable[33797] = 68; // 'state 264' -> { -> shift (target=34, len=0)
actionsTable[33800] = 4; // 'state 264' -> ( -> shift (target=2, len=0)
actionsTable[33801] = 1320; // 'state 264' -> ) -> shift (target=660, len=0)
actionsTable[33810] = 806; // 'state 264' -> of -> shift (target=403, len=0)
actionsTable[33824] = 806; // 'state 264' -> from -> shift (target=403, len=0)
actionsTable[33828] = 806; // 'state 264' -> type -> shift (target=403, len=0)
actionsTable[33832] = 170; // 'state 264' -> ... -> shift (target=85, len=0)
actionsTable[33833] = 20; // 'state 264' -> [ -> shift (target=10, len=0)
actionsTable[33835] = 70; // 'state 264' -> async -> shift (target=35, len=0)
actionsTable[33836] = 72; // 'state 264' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 33839, 33841); // 'state 264' -> get..set -> shift (target=403, len=0)
actionsTable[33841] = 74; // 'state 264' -> class -> shift (target=37, len=0)
actionsTable[33846] = 28; // 'state 264' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 33851, 33853); // 'state 264' -> void..typeof -> shift (target=15, len=0)
actionsTable[33854] = 32; // 'state 264' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 33861, 33863); // 'state 264' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 33864, 33867); // 'state 264' -> !..delete -> shift (target=15, len=0)
actionsTable[33867] = 34; // 'state 264' -> await -> shift (target=17, len=0)
actionsTable[33870] = 172; // 'state 264' -> identifier -> shift (target=86, len=0)
actionsTable.fill(798, 33872, 33875); // 'state 264' -> number..template_string -> shift (target=399, len=0)
actionsTable[33881] = 36; // 'state 264' -> update_operator -> shift (target=18, len=0)
actionsTable[33882] = 798; // 'state 264' -> regex -> shift (target=399, len=0)
actionsTable[33953] = 656; // 'state 265' -> , -> shift (target=328, len=0)
actionsTable[33975] = 1324; // 'state 265' -> > -> shift (target=662, len=0)
actionsTable[33976] = 506; // 'state 265' -> | -> shift (target=253, len=0)
actionsTable[33977] = 508; // 'state 265' -> & -> shift (target=254, len=0)
actionsTable.fill(798, 34048, 34053); // 'state 266' -> true..super -> shift (target=399, len=0)
actionsTable[34053] = 68; // 'state 266' -> { -> shift (target=34, len=0)
actionsTable[34056] = 4; // 'state 266' -> ( -> shift (target=2, len=0)
actionsTable[34066] = 806; // 'state 266' -> of -> shift (target=403, len=0)
actionsTable[34080] = 806; // 'state 266' -> from -> shift (target=403, len=0)
actionsTable[34081] = 1423; // 'state 266' -> , -> reduce (target=199, len=2)
actionsTable[34084] = 806; // 'state 266' -> type -> shift (target=403, len=0)
actionsTable[34088] = 48; // 'state 266' -> ... -> shift (target=24, len=0)
actionsTable[34089] = 20; // 'state 266' -> [ -> shift (target=10, len=0)
actionsTable[34090] = 1423; // 'state 266' -> ] -> reduce (target=199, len=2)
actionsTable[34091] = 70; // 'state 266' -> async -> shift (target=35, len=0)
actionsTable[34092] = 72; // 'state 266' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 34095, 34097); // 'state 266' -> get..set -> shift (target=403, len=0)
actionsTable[34097] = 74; // 'state 266' -> class -> shift (target=37, len=0)
actionsTable[34102] = 28; // 'state 266' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 34107, 34109); // 'state 266' -> void..typeof -> shift (target=15, len=0)
actionsTable[34110] = 32; // 'state 266' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 34117, 34119); // 'state 266' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 34120, 34123); // 'state 266' -> !..delete -> shift (target=15, len=0)
actionsTable[34123] = 34; // 'state 266' -> await -> shift (target=17, len=0)
actionsTable[34126] = 818; // 'state 266' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 34128, 34131); // 'state 266' -> number..template_string -> shift (target=399, len=0)
actionsTable[34137] = 36; // 'state 266' -> update_operator -> shift (target=18, len=0)
actionsTable[34138] = 798; // 'state 266' -> regex -> shift (target=399, len=0)
actionsTable[34231] = 1332; // 'state 267' -> > -> shift (target=666, len=0)
actionsTable[34254] = 908; // 'state 267' -> identifier -> shift (target=454, len=0)
actionsTable[34309] = 80; // 'state 268' -> { -> shift (target=40, len=0)
actionsTable[34331] = 164; // 'state 268' -> : -> shift (target=82, len=0)
actionsTable[34357] = 164; // 'state 268' -> ?: -> shift (target=82, len=0)
actionsTable[34437] = 80; // 'state 269' -> { -> shift (target=40, len=0)
actionsTable[34568] = 86; // 'state 270' -> ( -> shift (target=43, len=0)
actionsTable[34569] = 1338; // 'state 270' -> ) -> shift (target=669, len=0)
actionsTable[34579] = 88; // 'state 270' -> in -> shift (target=44, len=0)
actionsTable[34594] = 90; // 'state 270' -> * -> shift (target=45, len=0)
actionsTable[34595] = 92; // 'state 270' -> as -> shift (target=46, len=0)
actionsTable[34601] = 94; // 'state 270' -> [ -> shift (target=47, len=0)
actionsTable.fill(88, 34614, 34616); // 'state 270' -> <..> -> shift (target=44, len=0)
actionsTable[34616] = 96; // 'state 270' -> | -> shift (target=48, len=0)
actionsTable[34617] = 98; // 'state 270' -> & -> shift (target=49, len=0)
actionsTable[34623] = 100; // 'state 270' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 34624, 34626); // 'state 270' -> ||..?? -> shift (target=51, len=0)
actionsTable[34626] = 104; // 'state 270' -> && -> shift (target=52, len=0)
actionsTable[34627] = 106; // 'state 270' -> ^ -> shift (target=53, len=0)
actionsTable[34628] = 88; // 'state 270' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 34629, 34631); // 'state 270' -> +..- -> shift (target=54, len=0)
actionsTable[34631] = 90; // 'state 270' -> ** -> shift (target=45, len=0)
actionsTable[34636] = 110; // 'state 270' -> ?. -> shift (target=55, len=0)
actionsTable[34637] = 864; // 'state 270' -> . -> shift (target=432, len=0)
actionsTable[34645] = 112; // 'state 270' -> equality_operator -> shift (target=56, len=0)
actionsTable[34646] = 88; // 'state 270' -> relational_operator -> shift (target=44, len=0)
actionsTable[34647] = 114; // 'state 270' -> shift_operator -> shift (target=57, len=0)
actionsTable[34648] = 90; // 'state 270' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[34649] = 866; // 'state 270' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(798, 34688, 34693); // 'state 271' -> true..super -> shift (target=399, len=0)
actionsTable[34693] = 68; // 'state 271' -> { -> shift (target=34, len=0)
actionsTable[34696] = 4; // 'state 271' -> ( -> shift (target=2, len=0)
actionsTable[34697] = 664; // 'state 271' -> ) -> shift (target=332, len=0)
actionsTable[34706] = 806; // 'state 271' -> of -> shift (target=403, len=0)
actionsTable[34720] = 806; // 'state 271' -> from -> shift (target=403, len=0)
actionsTable[34724] = 806; // 'state 271' -> type -> shift (target=403, len=0)
actionsTable[34729] = 20; // 'state 271' -> [ -> shift (target=10, len=0)
actionsTable[34731] = 70; // 'state 271' -> async -> shift (target=35, len=0)
actionsTable[34732] = 72; // 'state 271' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 34735, 34737); // 'state 271' -> get..set -> shift (target=403, len=0)
actionsTable[34737] = 74; // 'state 271' -> class -> shift (target=37, len=0)
actionsTable[34742] = 28; // 'state 271' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 34747, 34749); // 'state 271' -> void..typeof -> shift (target=15, len=0)
actionsTable[34750] = 32; // 'state 271' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 34757, 34759); // 'state 271' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 34760, 34763); // 'state 271' -> !..delete -> shift (target=15, len=0)
actionsTable[34763] = 34; // 'state 271' -> await -> shift (target=17, len=0)
actionsTable[34766] = 818; // 'state 271' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 34768, 34771); // 'state 271' -> number..template_string -> shift (target=399, len=0)
actionsTable[34777] = 36; // 'state 271' -> update_operator -> shift (target=18, len=0)
actionsTable[34778] = 798; // 'state 271' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 34816, 34821); // 'state 272' -> true..super -> shift (target=399, len=0)
actionsTable[34821] = 2; // 'state 272' -> { -> shift (target=1, len=0)
actionsTable[34823] = 800; // 'state 272' -> if -> shift (target=400, len=0)
actionsTable[34824] = 4; // 'state 272' -> ( -> shift (target=2, len=0)
actionsTable[34827] = 802; // 'state 272' -> while -> shift (target=401, len=0)
actionsTable[34828] = 6; // 'state 272' -> do -> shift (target=3, len=0)
actionsTable[34830] = 804; // 'state 272' -> for -> shift (target=402, len=0)
actionsTable.fill(8, 34831, 34834); // 'state 272' -> const..var -> shift (target=4, len=0)
actionsTable[34834] = 806; // 'state 272' -> of -> shift (target=403, len=0)
actionsTable[34836] = 10; // 'state 272' -> return -> shift (target=5, len=0)
actionsTable[34837] = 12; // 'state 272' -> throw -> shift (target=6, len=0)
actionsTable[34838] = 14; // 'state 272' -> try -> shift (target=7, len=0)
actionsTable[34841] = 808; // 'state 272' -> switch -> shift (target=404, len=0)
actionsTable[34845] = 810; // 'state 272' -> break -> shift (target=405, len=0)
actionsTable[34846] = 812; // 'state 272' -> continue -> shift (target=406, len=0)
actionsTable[34847] = 16; // 'state 272' -> import -> shift (target=8, len=0)
actionsTable[34848] = 806; // 'state 272' -> from -> shift (target=403, len=0)
actionsTable[34852] = 814; // 'state 272' -> type -> shift (target=407, len=0)
actionsTable[34853] = 18; // 'state 272' -> export -> shift (target=9, len=0)
actionsTable[34857] = 20; // 'state 272' -> [ -> shift (target=10, len=0)
actionsTable[34859] = 22; // 'state 272' -> async -> shift (target=11, len=0)
actionsTable[34860] = 24; // 'state 272' -> function -> shift (target=12, len=0)
actionsTable.fill(806, 34863, 34865); // 'state 272' -> get..set -> shift (target=403, len=0)
actionsTable[34865] = 26; // 'state 272' -> class -> shift (target=13, len=0)
actionsTable[34868] = 816; // 'state 272' -> interface -> shift (target=408, len=0)
actionsTable[34870] = 28; // 'state 272' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 34875, 34877); // 'state 272' -> void..typeof -> shift (target=15, len=0)
actionsTable[34878] = 32; // 'state 272' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 34885, 34887); // 'state 272' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 34888, 34891); // 'state 272' -> !..delete -> shift (target=15, len=0)
actionsTable[34891] = 34; // 'state 272' -> await -> shift (target=17, len=0)
actionsTable[34894] = 818; // 'state 272' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 34896, 34899); // 'state 272' -> number..template_string -> shift (target=399, len=0)
actionsTable[34905] = 36; // 'state 272' -> update_operator -> shift (target=18, len=0)
actionsTable[34906] = 798; // 'state 272' -> regex -> shift (target=399, len=0)
actionsTable[34952] = 86; // 'state 273' -> ( -> shift (target=43, len=0)
actionsTable[34953] = 664; // 'state 273' -> ) -> shift (target=332, len=0)
actionsTable[34963] = 88; // 'state 273' -> in -> shift (target=44, len=0)
actionsTable[34978] = 90; // 'state 273' -> * -> shift (target=45, len=0)
actionsTable[34979] = 92; // 'state 273' -> as -> shift (target=46, len=0)
actionsTable[34985] = 94; // 'state 273' -> [ -> shift (target=47, len=0)
actionsTable.fill(88, 34998, 35000); // 'state 273' -> <..> -> shift (target=44, len=0)
actionsTable[35000] = 96; // 'state 273' -> | -> shift (target=48, len=0)
actionsTable[35001] = 98; // 'state 273' -> & -> shift (target=49, len=0)
actionsTable[35007] = 100; // 'state 273' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 35008, 35010); // 'state 273' -> ||..?? -> shift (target=51, len=0)
actionsTable[35010] = 104; // 'state 273' -> && -> shift (target=52, len=0)
actionsTable[35011] = 106; // 'state 273' -> ^ -> shift (target=53, len=0)
actionsTable[35012] = 88; // 'state 273' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 35013, 35015); // 'state 273' -> +..- -> shift (target=54, len=0)
actionsTable[35015] = 90; // 'state 273' -> ** -> shift (target=45, len=0)
actionsTable[35020] = 110; // 'state 273' -> ?. -> shift (target=55, len=0)
actionsTable[35021] = 864; // 'state 273' -> . -> shift (target=432, len=0)
actionsTable[35029] = 112; // 'state 273' -> equality_operator -> shift (target=56, len=0)
actionsTable[35030] = 88; // 'state 273' -> relational_operator -> shift (target=44, len=0)
actionsTable[35031] = 114; // 'state 273' -> shift_operator -> shift (target=57, len=0)
actionsTable[35032] = 90; // 'state 273' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[35033] = 866; // 'state 273' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(798, 35072, 35077); // 'state 274' -> true..super -> shift (target=399, len=0)
actionsTable[35077] = 68; // 'state 274' -> { -> shift (target=34, len=0)
actionsTable[35080] = 4; // 'state 274' -> ( -> shift (target=2, len=0)
actionsTable[35090] = 806; // 'state 274' -> of -> shift (target=403, len=0)
actionsTable[35104] = 806; // 'state 274' -> from -> shift (target=403, len=0)
actionsTable[35108] = 806; // 'state 274' -> type -> shift (target=403, len=0)
actionsTable[35113] = 20; // 'state 274' -> [ -> shift (target=10, len=0)
actionsTable[35115] = 70; // 'state 274' -> async -> shift (target=35, len=0)
actionsTable[35116] = 72; // 'state 274' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 35119, 35121); // 'state 274' -> get..set -> shift (target=403, len=0)
actionsTable[35121] = 74; // 'state 274' -> class -> shift (target=37, len=0)
actionsTable[35126] = 28; // 'state 274' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 35131, 35133); // 'state 274' -> void..typeof -> shift (target=15, len=0)
actionsTable[35134] = 32; // 'state 274' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 35141, 35143); // 'state 274' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 35144, 35147); // 'state 274' -> !..delete -> shift (target=15, len=0)
actionsTable[35147] = 34; // 'state 274' -> await -> shift (target=17, len=0)
actionsTable[35150] = 818; // 'state 274' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 35152, 35155); // 'state 274' -> number..template_string -> shift (target=399, len=0)
actionsTable[35161] = 36; // 'state 274' -> update_operator -> shift (target=18, len=0)
actionsTable[35162] = 798; // 'state 274' -> regex -> shift (target=399, len=0)
actionsTable[35208] = 86; // 'state 275' -> ( -> shift (target=43, len=0)
actionsTable[35213] = 670; // 'state 275' -> ; -> shift (target=335, len=0)
actionsTable[35219] = 88; // 'state 275' -> in -> shift (target=44, len=0)
actionsTable[35234] = 90; // 'state 275' -> * -> shift (target=45, len=0)
actionsTable[35235] = 92; // 'state 275' -> as -> shift (target=46, len=0)
actionsTable[35241] = 94; // 'state 275' -> [ -> shift (target=47, len=0)
actionsTable.fill(88, 35254, 35256); // 'state 275' -> <..> -> shift (target=44, len=0)
actionsTable[35256] = 96; // 'state 275' -> | -> shift (target=48, len=0)
actionsTable[35257] = 98; // 'state 275' -> & -> shift (target=49, len=0)
actionsTable[35263] = 100; // 'state 275' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 35264, 35266); // 'state 275' -> ||..?? -> shift (target=51, len=0)
actionsTable[35266] = 104; // 'state 275' -> && -> shift (target=52, len=0)
actionsTable[35267] = 106; // 'state 275' -> ^ -> shift (target=53, len=0)
actionsTable[35268] = 88; // 'state 275' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 35269, 35271); // 'state 275' -> +..- -> shift (target=54, len=0)
actionsTable[35271] = 90; // 'state 275' -> ** -> shift (target=45, len=0)
actionsTable[35276] = 110; // 'state 275' -> ?. -> shift (target=55, len=0)
actionsTable[35277] = 864; // 'state 275' -> . -> shift (target=432, len=0)
actionsTable[35285] = 112; // 'state 275' -> equality_operator -> shift (target=56, len=0)
actionsTable[35286] = 88; // 'state 275' -> relational_operator -> shift (target=44, len=0)
actionsTable[35287] = 114; // 'state 275' -> shift_operator -> shift (target=57, len=0)
actionsTable[35288] = 90; // 'state 275' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[35289] = 866; // 'state 275' -> update_operator -> shift (target=433, len=0)
actionsTable[35336] = 138; // 'state 276' -> ( -> shift (target=69, len=0)
actionsTable[35461] = 146; // 'state 277' -> { -> shift (target=73, len=0)
actionsTable[35593] = 674; // 'state 278' -> ) -> shift (target=337, len=0)
actionsTable[35611] = 164; // 'state 278' -> : -> shift (target=82, len=0)
actionsTable[35637] = 164; // 'state 278' -> ?: -> shift (target=82, len=0)
actionsTable[35718] = 1346; // 'state 279' -> } -> shift (target=673, len=0)
actionsTable[35738] = 676; // 'state 279' -> case -> shift (target=338, len=0)
actionsTable[35740] = 1348; // 'state 279' -> default -> shift (target=674, len=0)
actionsTable.fill(2933, 35840, 35848); // 'state 280' -> true..if -> reduce (target=186, len=5)
actionsTable[35848] = 86; // 'state 280' -> ( -> shift (target=43, len=0)
actionsTable.fill(2933, 35849, 35859); // 'state 280' -> )..of -> reduce (target=186, len=5)
actionsTable[35859] = 88; // 'state 280' -> in -> shift (target=44, len=0)
actionsTable.fill(2933, 35860, 35863); // 'state 280' -> return..try -> reduce (target=186, len=5)
actionsTable.fill(2933, 35865, 35874); // 'state 280' -> switch.., -> reduce (target=186, len=5)
actionsTable[35874] = 90; // 'state 280' -> * -> shift (target=45, len=0)
actionsTable[35875] = 92; // 'state 280' -> as -> shift (target=46, len=0)
actionsTable.fill(2933, 35876, 35878); // 'state 280' -> type..export -> reduce (target=186, len=5)
actionsTable[35881] = 94; // 'state 280' -> [ -> shift (target=47, len=0)
actionsTable.fill(2933, 35882, 35890); // 'state 280' -> ]..class -> reduce (target=186, len=5)
actionsTable.fill(2933, 35891, 35893); // 'state 280' -> implements..interface -> reduce (target=186, len=5)
actionsTable.fill(88, 35894, 35896); // 'state 280' -> <..> -> shift (target=44, len=0)
actionsTable[35896] = 96; // 'state 280' -> | -> shift (target=48, len=0)
actionsTable[35897] = 98; // 'state 280' -> & -> shift (target=49, len=0)
actionsTable.fill(2933, 35899, 35901); // 'state 280' -> void..typeof -> reduce (target=186, len=5)
actionsTable[35902] = 2933; // 'state 280' -> new -> reduce (target=186, len=5)
actionsTable[35903] = 100; // 'state 280' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 35904, 35906); // 'state 280' -> ||..?? -> shift (target=51, len=0)
actionsTable[35906] = 104; // 'state 280' -> && -> shift (target=52, len=0)
actionsTable[35907] = 106; // 'state 280' -> ^ -> shift (target=53, len=0)
actionsTable[35908] = 88; // 'state 280' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 35909, 35911); // 'state 280' -> +..- -> shift (target=54, len=0)
actionsTable[35911] = 90; // 'state 280' -> ** -> shift (target=45, len=0)
actionsTable.fill(2933, 35912, 35916); // 'state 280' -> !..await -> reduce (target=186, len=5)
actionsTable[35916] = 110; // 'state 280' -> ?. -> shift (target=55, len=0)
actionsTable[35917] = 864; // 'state 280' -> . -> shift (target=432, len=0)
actionsTable.fill(2933, 35918, 35924); // 'state 280' -> identifier..accessibility_modifier -> reduce (target=186, len=5)
actionsTable[35925] = 112; // 'state 280' -> equality_operator -> shift (target=56, len=0)
actionsTable[35926] = 88; // 'state 280' -> relational_operator -> shift (target=44, len=0)
actionsTable[35927] = 114; // 'state 280' -> shift_operator -> shift (target=57, len=0)
actionsTable[35928] = 90; // 'state 280' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[35929] = 866; // 'state 280' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(2933, 35930, 35932); // 'state 280' -> regex..@par-gen.EOF -> reduce (target=186, len=5)
actionsTable[35974] = 1354; // 'state 281' -> } -> shift (target=677, len=0)
actionsTable[35986] = 806; // 'state 281' -> of -> shift (target=403, len=0)
actionsTable[36000] = 806; // 'state 281' -> from -> shift (target=403, len=0)
actionsTable[36004] = 806; // 'state 281' -> type -> shift (target=403, len=0)
actionsTable[36008] = 684; // 'state 281' -> ... -> shift (target=342, len=0)
actionsTable[36009] = 198; // 'state 281' -> [ -> shift (target=99, len=0)
actionsTable[36011] = 226; // 'state 281' -> async -> shift (target=113, len=0)
actionsTable.fill(54, 36015, 36017); // 'state 281' -> get..set -> shift (target=27, len=0)
actionsTable[36046] = 1356; // 'state 281' -> identifier -> shift (target=678, len=0)
actionsTable.fill(848, 36048, 36050); // 'state 281' -> number..string -> shift (target=424, len=0)
actionsTable[36101] = 562; // 'state 282' -> { -> shift (target=281, len=0)
actionsTable[36137] = 566; // 'state 282' -> [ -> shift (target=283, len=0)
actionsTable[36174] = 682; // 'state 282' -> identifier -> shift (target=341, len=0)
actionsTable.fill(798, 36224, 36229); // 'state 283' -> true..super -> shift (target=399, len=0)
actionsTable[36229] = 562; // 'state 283' -> { -> shift (target=281, len=0)
actionsTable[36232] = 4; // 'state 283' -> ( -> shift (target=2, len=0)
actionsTable[36242] = 806; // 'state 283' -> of -> shift (target=403, len=0)
actionsTable[36256] = 806; // 'state 283' -> from -> shift (target=403, len=0)
actionsTable[36257] = 688; // 'state 283' -> , -> shift (target=344, len=0)
actionsTable[36260] = 806; // 'state 283' -> type -> shift (target=403, len=0)
actionsTable[36264] = 690; // 'state 283' -> ... -> shift (target=345, len=0)
actionsTable[36265] = 566; // 'state 283' -> [ -> shift (target=283, len=0)
actionsTable[36266] = 1358; // 'state 283' -> ] -> shift (target=679, len=0)
actionsTable[36267] = 70; // 'state 283' -> async -> shift (target=35, len=0)
actionsTable[36268] = 72; // 'state 283' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 36271, 36273); // 'state 283' -> get..set -> shift (target=403, len=0)
actionsTable[36273] = 74; // 'state 283' -> class -> shift (target=37, len=0)
actionsTable[36278] = 28; // 'state 283' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 36283, 36285); // 'state 283' -> void..typeof -> shift (target=15, len=0)
actionsTable[36286] = 32; // 'state 283' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 36293, 36295); // 'state 283' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 36296, 36299); // 'state 283' -> !..delete -> shift (target=15, len=0)
actionsTable[36299] = 34; // 'state 283' -> await -> shift (target=17, len=0)
actionsTable[36302] = 1360; // 'state 283' -> identifier -> shift (target=680, len=0)
actionsTable.fill(798, 36304, 36307); // 'state 283' -> number..template_string -> shift (target=399, len=0)
actionsTable[36313] = 36; // 'state 283' -> update_operator -> shift (target=18, len=0)
actionsTable[36314] = 798; // 'state 283' -> regex -> shift (target=399, len=0)
actionsTable[36361] = 769; // 'state 284' -> ) -> reduce (target=128, len=1)
actionsTable[36379] = 164; // 'state 284' -> : -> shift (target=82, len=0)
actionsTable[36385] = 769; // 'state 284' -> , -> reduce (target=128, len=1)
actionsTable[36391] = 769; // 'state 284' -> = -> reduce (target=128, len=1)
actionsTable[36405] = 164; // 'state 284' -> ?: -> shift (target=82, len=0)
actionsTable.fill(942, 36480, 36483); // 'state 285' -> true..null -> shift (target=471, len=0)
actionsTable[36485] = 262; // 'state 285' -> { -> shift (target=131, len=0)
actionsTable[36488] = 264; // 'state 285' -> ( -> shift (target=132, len=0)
actionsTable[36521] = 266; // 'state 285' -> [ -> shift (target=133, len=0)
actionsTable[36534] = 28; // 'state 285' -> < -> shift (target=14, len=0)
actionsTable[36536] = 268; // 'state 285' -> | -> shift (target=134, len=0)
actionsTable[36539] = 942; // 'state 285' -> void -> shift (target=471, len=0)
actionsTable[36540] = 944; // 'state 285' -> typeof -> shift (target=472, len=0)
actionsTable[36558] = 270; // 'state 285' -> identifier -> shift (target=135, len=0)
actionsTable.fill(942, 36560, 36562); // 'state 285' -> number..string -> shift (target=471, len=0)
actionsTable[36635] = 164; // 'state 286' -> : -> shift (target=82, len=0)
actionsTable[36661] = 164; // 'state 286' -> ?: -> shift (target=82, len=0)
actionsTable[36744] = 138; // 'state 287' -> ( -> shift (target=69, len=0)
actionsTable[36763] = 692; // 'state 287' -> : -> shift (target=346, len=0)
actionsTable[36789] = 164; // 'state 287' -> ?: -> shift (target=82, len=0)
actionsTable[36790] = 28; // 'state 287' -> < -> shift (target=14, len=0)
actionsTable.fill(1364, 36864, 36867); // 'state 288' -> true..null -> shift (target=682, len=0)
actionsTable.fill(798, 36867, 36869); // 'state 288' -> this..super -> shift (target=399, len=0)
actionsTable[36869] = 420; // 'state 288' -> { -> shift (target=210, len=0)
actionsTable[36872] = 576; // 'state 288' -> ( -> shift (target=288, len=0)
actionsTable[36873] = 698; // 'state 288' -> ) -> shift (target=349, len=0)
actionsTable[36882] = 806; // 'state 288' -> of -> shift (target=403, len=0)
actionsTable[36896] = 806; // 'state 288' -> from -> shift (target=403, len=0)
actionsTable[36900] = 806; // 'state 288' -> type -> shift (target=403, len=0)
actionsTable[36904] = 170; // 'state 288' -> ... -> shift (target=85, len=0)
actionsTable[36905] = 424; // 'state 288' -> [ -> shift (target=212, len=0)
actionsTable[36907] = 70; // 'state 288' -> async -> shift (target=35, len=0)
actionsTable[36908] = 72; // 'state 288' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 36911, 36913); // 'state 288' -> get..set -> shift (target=403, len=0)
actionsTable[36913] = 74; // 'state 288' -> class -> shift (target=37, len=0)
actionsTable[36918] = 28; // 'state 288' -> < -> shift (target=14, len=0)
actionsTable[36920] = 268; // 'state 288' -> | -> shift (target=134, len=0)
actionsTable[36923] = 578; // 'state 288' -> void -> shift (target=289, len=0)
actionsTable[36924] = 580; // 'state 288' -> typeof -> shift (target=290, len=0)
actionsTable[36926] = 32; // 'state 288' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 36933, 36935); // 'state 288' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 36936, 36939); // 'state 288' -> !..delete -> shift (target=15, len=0)
actionsTable[36939] = 34; // 'state 288' -> await -> shift (target=17, len=0)
actionsTable[36942] = 700; // 'state 288' -> identifier -> shift (target=350, len=0)
actionsTable.fill(1364, 36944, 36946); // 'state 288' -> number..string -> shift (target=682, len=0)
actionsTable[36946] = 798; // 'state 288' -> template_string -> shift (target=399, len=0)
actionsTable[36953] = 36; // 'state 288' -> update_operator -> shift (target=18, len=0)
actionsTable[36954] = 798; // 'state 288' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 36992, 36997); // 'state 289' -> true..super -> shift (target=399, len=0)
actionsTable[36997] = 68; // 'state 289' -> { -> shift (target=34, len=0)
actionsTable[36998] = 839; // 'state 289' -> } -> reduce (target=163, len=1)
actionsTable[37000] = 4; // 'state 289' -> ( -> shift (target=2, len=0)
actionsTable[37001] = 839; // 'state 289' -> ) -> reduce (target=163, len=1)
actionsTable[37005] = 839; // 'state 289' -> ; -> reduce (target=163, len=1)
actionsTable[37010] = 806; // 'state 289' -> of -> shift (target=403, len=0)
actionsTable[37024] = 806; // 'state 289' -> from -> shift (target=403, len=0)
actionsTable[37025] = 839; // 'state 289' -> , -> reduce (target=163, len=1)
actionsTable[37028] = 806; // 'state 289' -> type -> shift (target=403, len=0)
actionsTable[37033] = 20; // 'state 289' -> [ -> shift (target=10, len=0)
actionsTable[37034] = 839; // 'state 289' -> ] -> reduce (target=163, len=1)
actionsTable[37035] = 70; // 'state 289' -> async -> shift (target=35, len=0)
actionsTable[37036] = 72; // 'state 289' -> function -> shift (target=36, len=0)
actionsTable[37038] = 839; // 'state 289' -> readonly -> reduce (target=163, len=1)
actionsTable.fill(806, 37039, 37041); // 'state 289' -> get..set -> shift (target=403, len=0)
actionsTable[37041] = 74; // 'state 289' -> class -> shift (target=37, len=0)
actionsTable[37046] = 28; // 'state 289' -> < -> shift (target=14, len=0)
actionsTable.fill(839, 37048, 37050); // 'state 289' -> |..& -> reduce (target=163, len=1)
actionsTable.fill(30, 37051, 37053); // 'state 289' -> void..typeof -> shift (target=15, len=0)
actionsTable[37054] = 32; // 'state 289' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 37061, 37063); // 'state 289' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 37064, 37067); // 'state 289' -> !..delete -> shift (target=15, len=0)
actionsTable[37067] = 34; // 'state 289' -> await -> shift (target=17, len=0)
actionsTable[37070] = 818; // 'state 289' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 37072, 37075); // 'state 289' -> number..template_string -> shift (target=399, len=0)
actionsTable[37081] = 36; // 'state 289' -> update_operator -> shift (target=18, len=0)
actionsTable[37082] = 798; // 'state 289' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 37120, 37125); // 'state 290' -> true..super -> shift (target=399, len=0)
actionsTable[37125] = 68; // 'state 290' -> { -> shift (target=34, len=0)
actionsTable[37128] = 4; // 'state 290' -> ( -> shift (target=2, len=0)
actionsTable[37138] = 806; // 'state 290' -> of -> shift (target=403, len=0)
actionsTable[37152] = 806; // 'state 290' -> from -> shift (target=403, len=0)
actionsTable[37156] = 806; // 'state 290' -> type -> shift (target=403, len=0)
actionsTable[37161] = 20; // 'state 290' -> [ -> shift (target=10, len=0)
actionsTable[37163] = 70; // 'state 290' -> async -> shift (target=35, len=0)
actionsTable[37164] = 72; // 'state 290' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 37167, 37169); // 'state 290' -> get..set -> shift (target=403, len=0)
actionsTable[37169] = 74; // 'state 290' -> class -> shift (target=37, len=0)
actionsTable[37174] = 28; // 'state 290' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 37179, 37181); // 'state 290' -> void..typeof -> shift (target=15, len=0)
actionsTable[37182] = 32; // 'state 290' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 37189, 37191); // 'state 290' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 37192, 37195); // 'state 290' -> !..delete -> shift (target=15, len=0)
actionsTable[37195] = 34; // 'state 290' -> await -> shift (target=17, len=0)
actionsTable[37198] = 1366; // 'state 290' -> identifier -> shift (target=683, len=0)
actionsTable.fill(798, 37200, 37203); // 'state 290' -> number..template_string -> shift (target=399, len=0)
actionsTable[37209] = 36; // 'state 290' -> update_operator -> shift (target=18, len=0)
actionsTable[37210] = 798; // 'state 290' -> regex -> shift (target=399, len=0)
actionsTable[37254] = 839; // 'state 291' -> } -> reduce (target=163, len=1)
actionsTable[37256] = 871; // 'state 291' -> ( -> reduce (target=179, len=1)
actionsTable[37257] = 839; // 'state 291' -> ) -> reduce (target=163, len=1)
actionsTable[37261] = 839; // 'state 291' -> ; -> reduce (target=163, len=1)
actionsTable[37266] = 839; // 'state 291' -> of -> reduce (target=163, len=1)
actionsTable[37267] = 871; // 'state 291' -> in -> reduce (target=179, len=1)
actionsTable.fill(839, 37280, 37282); // 'state 291' -> from.., -> reduce (target=163, len=1)
actionsTable.fill(871, 37282, 37284); // 'state 291' -> *..as -> reduce (target=179, len=1)
actionsTable[37284] = 839; // 'state 291' -> type -> reduce (target=163, len=1)
actionsTable[37287] = 877; // 'state 291' -> = -> reduce (target=182, len=1)
actionsTable.fill(839, 37289, 37292); // 'state 291' -> [..async -> reduce (target=163, len=1)
actionsTable.fill(839, 37294, 37297); // 'state 291' -> readonly..set -> reduce (target=163, len=1)
actionsTable[37302] = 366; // 'state 291' -> < -> shift (target=183, len=0)
actionsTable[37303] = 871; // 'state 291' -> > -> reduce (target=179, len=1)
actionsTable.fill(839, 37304, 37306); // 'state 291' -> |..& -> reduce (target=163, len=1)
actionsTable[37306] = 162; // 'state 291' -> => -> shift (target=81, len=0)
actionsTable[37309] = 432; // 'state 291' -> is -> shift (target=216, len=0)
actionsTable[37310] = 839; // 'state 291' -> new -> reduce (target=163, len=1)
actionsTable.fill(871, 37311, 37320); // 'state 291' -> ?..** -> reduce (target=179, len=1)
actionsTable.fill(871, 37324, 37326); // 'state 291' -> ?.... -> reduce (target=179, len=1)
actionsTable[37326] = 839; // 'state 291' -> identifier -> reduce (target=163, len=1)
actionsTable.fill(839, 37328, 37330); // 'state 291' -> number..string -> reduce (target=163, len=1)
actionsTable[37332] = 877; // 'state 291' -> compound_assignment_operator -> reduce (target=182, len=1)
actionsTable.fill(871, 37333, 37338); // 'state 291' -> equality_operator..update_operator -> reduce (target=179, len=1)
actionsTable[37403] = 164; // 'state 292' -> : -> shift (target=82, len=0)
actionsTable[37429] = 164; // 'state 292' -> ?: -> shift (target=82, len=0)
actionsTable[37434] = 702; // 'state 292' -> => -> shift (target=351, len=0)
actionsTable[37512] = 418; // 'state 293' -> ( -> shift (target=209, len=0)
actionsTable.fill(942, 37632, 37635); // 'state 294' -> true..null -> shift (target=471, len=0)
actionsTable[37637] = 262; // 'state 294' -> { -> shift (target=131, len=0)
actionsTable[37640] = 264; // 'state 294' -> ( -> shift (target=132, len=0)
actionsTable[37673] = 266; // 'state 294' -> [ -> shift (target=133, len=0)
actionsTable[37674] = 1368; // 'state 294' -> ] -> shift (target=684, len=0)
actionsTable[37686] = 28; // 'state 294' -> < -> shift (target=14, len=0)
actionsTable[37688] = 268; // 'state 294' -> | -> shift (target=134, len=0)
actionsTable[37691] = 942; // 'state 294' -> void -> shift (target=471, len=0)
actionsTable[37692] = 944; // 'state 294' -> typeof -> shift (target=472, len=0)
actionsTable[37710] = 270; // 'state 294' -> identifier -> shift (target=135, len=0)
actionsTable.fill(942, 37712, 37714); // 'state 294' -> number..string -> shift (target=471, len=0)
actionsTable.fill(798, 37760, 37765); // 'state 295' -> true..super -> shift (target=399, len=0)
actionsTable[37765] = 68; // 'state 295' -> { -> shift (target=34, len=0)
actionsTable[37768] = 4; // 'state 295' -> ( -> shift (target=2, len=0)
actionsTable[37778] = 806; // 'state 295' -> of -> shift (target=403, len=0)
actionsTable[37792] = 806; // 'state 295' -> from -> shift (target=403, len=0)
actionsTable[37796] = 806; // 'state 295' -> type -> shift (target=403, len=0)
actionsTable[37801] = 20; // 'state 295' -> [ -> shift (target=10, len=0)
actionsTable[37803] = 70; // 'state 295' -> async -> shift (target=35, len=0)
actionsTable[37804] = 72; // 'state 295' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 37807, 37809); // 'state 295' -> get..set -> shift (target=403, len=0)
actionsTable[37809] = 74; // 'state 295' -> class -> shift (target=37, len=0)
actionsTable[37814] = 28; // 'state 295' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 37819, 37821); // 'state 295' -> void..typeof -> shift (target=15, len=0)
actionsTable[37822] = 32; // 'state 295' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 37829, 37831); // 'state 295' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 37832, 37835); // 'state 295' -> !..delete -> shift (target=15, len=0)
actionsTable[37835] = 34; // 'state 295' -> await -> shift (target=17, len=0)
actionsTable[37838] = 1374; // 'state 295' -> identifier -> shift (target=687, len=0)
actionsTable.fill(798, 37840, 37843); // 'state 295' -> number..template_string -> shift (target=399, len=0)
actionsTable[37849] = 36; // 'state 295' -> update_operator -> shift (target=18, len=0)
actionsTable[37850] = 798; // 'state 295' -> regex -> shift (target=399, len=0)
actionsTable[37915] = 164; // 'state 296' -> : -> shift (target=82, len=0)
actionsTable[37941] = 164; // 'state 296' -> ?: -> shift (target=82, len=0)
actionsTable[38022] = 1373; // 'state 297' -> } -> reduce (target=174, len=2)
actionsTable[38029] = 1373; // 'state 297' -> ; -> reduce (target=174, len=2)
actionsTable[38034] = 1373; // 'state 297' -> of -> reduce (target=174, len=2)
actionsTable[38043] = 164; // 'state 297' -> : -> shift (target=82, len=0)
actionsTable.fill(1373, 38048, 38050); // 'state 297' -> from.., -> reduce (target=174, len=2)
actionsTable[38052] = 1373; // 'state 297' -> type -> reduce (target=174, len=2)
actionsTable[38057] = 1373; // 'state 297' -> [ -> reduce (target=174, len=2)
actionsTable[38059] = 1373; // 'state 297' -> async -> reduce (target=174, len=2)
actionsTable.fill(1373, 38062, 38065); // 'state 297' -> readonly..set -> reduce (target=174, len=2)
actionsTable[38069] = 164; // 'state 297' -> ?: -> shift (target=82, len=0)
actionsTable[38078] = 1373; // 'state 297' -> new -> reduce (target=174, len=2)
actionsTable[38094] = 1373; // 'state 297' -> identifier -> reduce (target=174, len=2)
actionsTable.fill(1373, 38096, 38098); // 'state 297' -> number..string -> reduce (target=174, len=2)
actionsTable[38152] = 138; // 'state 298' -> ( -> shift (target=69, len=0)
actionsTable[38278] = 1375; // 'state 299' -> } -> reduce (target=175, len=2)
actionsTable[38285] = 1375; // 'state 299' -> ; -> reduce (target=175, len=2)
actionsTable[38290] = 1375; // 'state 299' -> of -> reduce (target=175, len=2)
actionsTable[38299] = 164; // 'state 299' -> : -> shift (target=82, len=0)
actionsTable.fill(1375, 38304, 38306); // 'state 299' -> from.., -> reduce (target=175, len=2)
actionsTable[38308] = 1375; // 'state 299' -> type -> reduce (target=175, len=2)
actionsTable[38313] = 1375; // 'state 299' -> [ -> reduce (target=175, len=2)
actionsTable[38315] = 1375; // 'state 299' -> async -> reduce (target=175, len=2)
actionsTable.fill(1375, 38318, 38321); // 'state 299' -> readonly..set -> reduce (target=175, len=2)
actionsTable[38325] = 164; // 'state 299' -> ?: -> shift (target=82, len=0)
actionsTable[38334] = 1375; // 'state 299' -> new -> reduce (target=175, len=2)
actionsTable[38350] = 1375; // 'state 299' -> identifier -> reduce (target=175, len=2)
actionsTable.fill(1375, 38352, 38354); // 'state 299' -> number..string -> reduce (target=175, len=2)
actionsTable[38408] = 138; // 'state 300' -> ( -> shift (target=69, len=0)
actionsTable.fill(798, 38528, 38533); // 'state 301' -> true..super -> shift (target=399, len=0)
actionsTable[38533] = 68; // 'state 301' -> { -> shift (target=34, len=0)
actionsTable[38536] = 4; // 'state 301' -> ( -> shift (target=2, len=0)
actionsTable[38537] = 1380; // 'state 301' -> ) -> shift (target=690, len=0)
actionsTable[38546] = 806; // 'state 301' -> of -> shift (target=403, len=0)
actionsTable[38560] = 806; // 'state 301' -> from -> shift (target=403, len=0)
actionsTable[38564] = 806; // 'state 301' -> type -> shift (target=403, len=0)
actionsTable[38568] = 48; // 'state 301' -> ... -> shift (target=24, len=0)
actionsTable[38569] = 20; // 'state 301' -> [ -> shift (target=10, len=0)
actionsTable[38571] = 70; // 'state 301' -> async -> shift (target=35, len=0)
actionsTable[38572] = 72; // 'state 301' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 38575, 38577); // 'state 301' -> get..set -> shift (target=403, len=0)
actionsTable[38577] = 74; // 'state 301' -> class -> shift (target=37, len=0)
actionsTable[38582] = 28; // 'state 301' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 38587, 38589); // 'state 301' -> void..typeof -> shift (target=15, len=0)
actionsTable[38590] = 32; // 'state 301' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 38597, 38599); // 'state 301' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 38600, 38603); // 'state 301' -> !..delete -> shift (target=15, len=0)
actionsTable[38603] = 34; // 'state 301' -> await -> shift (target=17, len=0)
actionsTable[38606] = 818; // 'state 301' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 38608, 38611); // 'state 301' -> number..template_string -> shift (target=399, len=0)
actionsTable[38617] = 36; // 'state 301' -> update_operator -> shift (target=18, len=0)
actionsTable[38618] = 798; // 'state 301' -> regex -> shift (target=399, len=0)
actionsTable[38662] = 1382; // 'state 302' -> } -> shift (target=691, len=0)
actionsTable[38692] = 966; // 'state 302' -> type -> shift (target=483, len=0)
actionsTable[38734] = 968; // 'state 302' -> identifier -> shift (target=484, len=0)
actionsTable[38789] = 80; // 'state 303' -> { -> shift (target=40, len=0)
actionsTable[38797] = 1278; // 'state 303' -> ; -> shift (target=639, len=0)
actionsTable[38811] = 164; // 'state 303' -> : -> shift (target=82, len=0)
actionsTable[38837] = 164; // 'state 303' -> ?: -> shift (target=82, len=0)
actionsTable[38920] = 138; // 'state 304' -> ( -> shift (target=69, len=0)
actionsTable[39045] = 80; // 'state 305' -> { -> shift (target=40, len=0)
actionsTable[39053] = 1278; // 'state 305' -> ; -> shift (target=639, len=0)
actionsTable[39173] = 146; // 'state 306' -> { -> shift (target=73, len=0)
actionsTable.fill(2303, 39296, 39304); // 'state 307' -> true..if -> reduce (target=127, len=4)
actionsTable[39304] = 86; // 'state 307' -> ( -> shift (target=43, len=0)
actionsTable.fill(2303, 39306, 39315); // 'state 307' -> else..of -> reduce (target=127, len=4)
actionsTable[39315] = 88; // 'state 307' -> in -> shift (target=44, len=0)
actionsTable.fill(2303, 39316, 39319); // 'state 307' -> return..try -> reduce (target=127, len=4)
actionsTable.fill(2303, 39321, 39323); // 'state 307' -> switch..case -> reduce (target=127, len=4)
actionsTable.fill(2303, 39324, 39330); // 'state 307' -> default.., -> reduce (target=127, len=4)
actionsTable[39330] = 90; // 'state 307' -> * -> shift (target=45, len=0)
actionsTable[39331] = 92; // 'state 307' -> as -> shift (target=46, len=0)
actionsTable.fill(2303, 39332, 39334); // 'state 307' -> type..export -> reduce (target=127, len=4)
actionsTable[39337] = 94; // 'state 307' -> [ -> shift (target=47, len=0)
actionsTable.fill(2303, 39339, 39341); // 'state 307' -> async..function -> reduce (target=127, len=4)
actionsTable.fill(2303, 39343, 39346); // 'state 307' -> get..class -> reduce (target=127, len=4)
actionsTable[39348] = 2303; // 'state 307' -> interface -> reduce (target=127, len=4)
actionsTable.fill(88, 39350, 39352); // 'state 307' -> <..> -> shift (target=44, len=0)
actionsTable[39352] = 96; // 'state 307' -> | -> shift (target=48, len=0)
actionsTable[39353] = 98; // 'state 307' -> & -> shift (target=49, len=0)
actionsTable.fill(2303, 39355, 39357); // 'state 307' -> void..typeof -> reduce (target=127, len=4)
actionsTable[39358] = 2303; // 'state 307' -> new -> reduce (target=127, len=4)
actionsTable[39359] = 100; // 'state 307' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 39360, 39362); // 'state 307' -> ||..?? -> shift (target=51, len=0)
actionsTable[39362] = 104; // 'state 307' -> && -> shift (target=52, len=0)
actionsTable[39363] = 106; // 'state 307' -> ^ -> shift (target=53, len=0)
actionsTable[39364] = 88; // 'state 307' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 39365, 39367); // 'state 307' -> +..- -> shift (target=54, len=0)
actionsTable[39367] = 90; // 'state 307' -> ** -> shift (target=45, len=0)
actionsTable.fill(2303, 39368, 39372); // 'state 307' -> !..await -> reduce (target=127, len=4)
actionsTable[39372] = 110; // 'state 307' -> ?. -> shift (target=55, len=0)
actionsTable[39373] = 864; // 'state 307' -> . -> shift (target=432, len=0)
actionsTable[39374] = 2303; // 'state 307' -> identifier -> reduce (target=127, len=4)
actionsTable.fill(2303, 39376, 39379); // 'state 307' -> number..template_string -> reduce (target=127, len=4)
actionsTable[39381] = 112; // 'state 307' -> equality_operator -> shift (target=56, len=0)
actionsTable[39382] = 88; // 'state 307' -> relational_operator -> shift (target=44, len=0)
actionsTable[39383] = 114; // 'state 307' -> shift_operator -> shift (target=57, len=0)
actionsTable[39384] = 90; // 'state 307' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[39385] = 866; // 'state 307' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(2303, 39386, 39388); // 'state 307' -> regex..@par-gen.EOF -> reduce (target=127, len=4)
actionsTable[39430] = 1394; // 'state 308' -> } -> shift (target=697, len=0)
actionsTable[39442] = 806; // 'state 308' -> of -> shift (target=403, len=0)
actionsTable[39456] = 806; // 'state 308' -> from -> shift (target=403, len=0)
actionsTable[39460] = 806; // 'state 308' -> type -> shift (target=403, len=0)
actionsTable[39464] = 294; // 'state 308' -> ... -> shift (target=147, len=0)
actionsTable[39465] = 198; // 'state 308' -> [ -> shift (target=99, len=0)
actionsTable[39467] = 914; // 'state 308' -> async -> shift (target=457, len=0)
actionsTable.fill(806, 39471, 39473); // 'state 308' -> get..set -> shift (target=403, len=0)
actionsTable[39502] = 992; // 'state 308' -> identifier -> shift (target=496, len=0)
actionsTable.fill(848, 39504, 39506); // 'state 308' -> number..string -> shift (target=424, len=0)
actionsTable[39558] = 1799; // 'state 309' -> } -> reduce (target=131, len=3)
actionsTable[39560] = 86; // 'state 309' -> ( -> shift (target=43, len=0)
actionsTable[39571] = 88; // 'state 309' -> in -> shift (target=44, len=0)
actionsTable[39585] = 1799; // 'state 309' -> , -> reduce (target=131, len=3)
actionsTable[39586] = 90; // 'state 309' -> * -> shift (target=45, len=0)
actionsTable[39587] = 92; // 'state 309' -> as -> shift (target=46, len=0)
actionsTable[39593] = 94; // 'state 309' -> [ -> shift (target=47, len=0)
actionsTable.fill(88, 39606, 39608); // 'state 309' -> <..> -> shift (target=44, len=0)
actionsTable[39608] = 96; // 'state 309' -> | -> shift (target=48, len=0)
actionsTable[39609] = 98; // 'state 309' -> & -> shift (target=49, len=0)
actionsTable[39615] = 100; // 'state 309' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 39616, 39618); // 'state 309' -> ||..?? -> shift (target=51, len=0)
actionsTable[39618] = 104; // 'state 309' -> && -> shift (target=52, len=0)
actionsTable[39619] = 106; // 'state 309' -> ^ -> shift (target=53, len=0)
actionsTable[39620] = 88; // 'state 309' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 39621, 39623); // 'state 309' -> +..- -> shift (target=54, len=0)
actionsTable[39623] = 90; // 'state 309' -> ** -> shift (target=45, len=0)
actionsTable[39628] = 110; // 'state 309' -> ?. -> shift (target=55, len=0)
actionsTable[39629] = 864; // 'state 309' -> . -> shift (target=432, len=0)
actionsTable[39637] = 112; // 'state 309' -> equality_operator -> shift (target=56, len=0)
actionsTable[39638] = 88; // 'state 309' -> relational_operator -> shift (target=44, len=0)
actionsTable[39639] = 114; // 'state 309' -> shift_operator -> shift (target=57, len=0)
actionsTable[39640] = 90; // 'state 309' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[39641] = 866; // 'state 309' -> update_operator -> shift (target=433, len=0)
actionsTable[39685] = 122; // 'state 310' -> { -> shift (target=61, len=0)
actionsTable[39713] = 1289; // 'state 310' -> , -> reduce (target=132, len=2)
actionsTable[39720] = 300; // 'state 310' -> ... -> shift (target=150, len=0)
actionsTable[39721] = 124; // 'state 310' -> [ -> shift (target=62, len=0)
actionsTable[39722] = 1289; // 'state 310' -> ] -> reduce (target=132, len=2)
actionsTable[39758] = 894; // 'state 310' -> identifier -> shift (target=447, len=0)
actionsTable[39816] = 86; // 'state 311' -> ( -> shift (target=43, len=0)
actionsTable[39827] = 88; // 'state 311' -> in -> shift (target=44, len=0)
actionsTable[39841] = 1805; // 'state 311' -> , -> reduce (target=134, len=3)
actionsTable[39842] = 90; // 'state 311' -> * -> shift (target=45, len=0)
actionsTable[39843] = 92; // 'state 311' -> as -> shift (target=46, len=0)
actionsTable[39849] = 94; // 'state 311' -> [ -> shift (target=47, len=0)
actionsTable[39850] = 1805; // 'state 311' -> ] -> reduce (target=134, len=3)
actionsTable.fill(88, 39862, 39864); // 'state 311' -> <..> -> shift (target=44, len=0)
actionsTable[39864] = 96; // 'state 311' -> | -> shift (target=48, len=0)
actionsTable[39865] = 98; // 'state 311' -> & -> shift (target=49, len=0)
actionsTable[39871] = 100; // 'state 311' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 39872, 39874); // 'state 311' -> ||..?? -> shift (target=51, len=0)
actionsTable[39874] = 104; // 'state 311' -> && -> shift (target=52, len=0)
actionsTable[39875] = 106; // 'state 311' -> ^ -> shift (target=53, len=0)
actionsTable[39876] = 88; // 'state 311' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 39877, 39879); // 'state 311' -> +..- -> shift (target=54, len=0)
actionsTable[39879] = 90; // 'state 311' -> ** -> shift (target=45, len=0)
actionsTable[39884] = 110; // 'state 311' -> ?. -> shift (target=55, len=0)
actionsTable[39885] = 864; // 'state 311' -> . -> shift (target=432, len=0)
actionsTable[39893] = 112; // 'state 311' -> equality_operator -> shift (target=56, len=0)
actionsTable[39894] = 88; // 'state 311' -> relational_operator -> shift (target=44, len=0)
actionsTable[39895] = 114; // 'state 311' -> shift_operator -> shift (target=57, len=0)
actionsTable[39896] = 90; // 'state 311' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[39897] = 866; // 'state 311' -> update_operator -> shift (target=433, len=0)
actionsTable[39941] = 80; // 'state 312' -> { -> shift (target=40, len=0)
actionsTable[39949] = 1402; // 'state 312' -> ; -> shift (target=701, len=0)
actionsTable[39963] = 164; // 'state 312' -> : -> shift (target=82, len=0)
actionsTable[39989] = 164; // 'state 312' -> ?: -> shift (target=82, len=0)
actionsTable[40069] = 80; // 'state 313' -> { -> shift (target=40, len=0)
actionsTable[40077] = 1402; // 'state 313' -> ; -> shift (target=701, len=0)
actionsTable[40197] = 80; // 'state 314' -> { -> shift (target=40, len=0)
actionsTable.fill(2931, 40320, 40328); // 'state 315' -> true..if -> reduce (target=185, len=5)
actionsTable[40328] = 86; // 'state 315' -> ( -> shift (target=43, len=0)
actionsTable.fill(2931, 40329, 40339); // 'state 315' -> )..of -> reduce (target=185, len=5)
actionsTable[40339] = 88; // 'state 315' -> in -> shift (target=44, len=0)
actionsTable.fill(2931, 40340, 40343); // 'state 315' -> return..try -> reduce (target=185, len=5)
actionsTable.fill(2931, 40345, 40354); // 'state 315' -> switch.., -> reduce (target=185, len=5)
actionsTable[40354] = 90; // 'state 315' -> * -> shift (target=45, len=0)
actionsTable[40355] = 92; // 'state 315' -> as -> shift (target=46, len=0)
actionsTable.fill(2931, 40356, 40358); // 'state 315' -> type..export -> reduce (target=185, len=5)
actionsTable[40361] = 94; // 'state 315' -> [ -> shift (target=47, len=0)
actionsTable.fill(2931, 40362, 40370); // 'state 315' -> ]..class -> reduce (target=185, len=5)
actionsTable.fill(2931, 40371, 40373); // 'state 315' -> implements..interface -> reduce (target=185, len=5)
actionsTable.fill(88, 40374, 40376); // 'state 315' -> <..> -> shift (target=44, len=0)
actionsTable[40376] = 96; // 'state 315' -> | -> shift (target=48, len=0)
actionsTable[40377] = 98; // 'state 315' -> & -> shift (target=49, len=0)
actionsTable.fill(2931, 40379, 40381); // 'state 315' -> void..typeof -> reduce (target=185, len=5)
actionsTable[40382] = 2931; // 'state 315' -> new -> reduce (target=185, len=5)
actionsTable[40383] = 100; // 'state 315' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 40384, 40386); // 'state 315' -> ||..?? -> shift (target=51, len=0)
actionsTable[40386] = 104; // 'state 315' -> && -> shift (target=52, len=0)
actionsTable[40387] = 106; // 'state 315' -> ^ -> shift (target=53, len=0)
actionsTable[40388] = 88; // 'state 315' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 40389, 40391); // 'state 315' -> +..- -> shift (target=54, len=0)
actionsTable[40391] = 90; // 'state 315' -> ** -> shift (target=45, len=0)
actionsTable.fill(2931, 40392, 40396); // 'state 315' -> !..await -> reduce (target=185, len=5)
actionsTable[40396] = 110; // 'state 315' -> ?. -> shift (target=55, len=0)
actionsTable[40397] = 864; // 'state 315' -> . -> shift (target=432, len=0)
actionsTable.fill(2931, 40398, 40404); // 'state 315' -> identifier..accessibility_modifier -> reduce (target=185, len=5)
actionsTable[40405] = 112; // 'state 315' -> equality_operator -> shift (target=56, len=0)
actionsTable[40406] = 88; // 'state 315' -> relational_operator -> shift (target=44, len=0)
actionsTable[40407] = 114; // 'state 315' -> shift_operator -> shift (target=57, len=0)
actionsTable[40408] = 90; // 'state 315' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[40409] = 866; // 'state 315' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(2931, 40410, 40412); // 'state 315' -> regex..@par-gen.EOF -> reduce (target=185, len=5)
actionsTable.fill(798, 40448, 40453); // 'state 316' -> true..super -> shift (target=399, len=0)
actionsTable[40453] = 2; // 'state 316' -> { -> shift (target=1, len=0)
actionsTable[40456] = 4; // 'state 316' -> ( -> shift (target=2, len=0)
actionsTable[40466] = 806; // 'state 316' -> of -> shift (target=403, len=0)
actionsTable[40480] = 806; // 'state 316' -> from -> shift (target=403, len=0)
actionsTable[40484] = 806; // 'state 316' -> type -> shift (target=403, len=0)
actionsTable[40489] = 20; // 'state 316' -> [ -> shift (target=10, len=0)
actionsTable[40491] = 70; // 'state 316' -> async -> shift (target=35, len=0)
actionsTable[40492] = 72; // 'state 316' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 40495, 40497); // 'state 316' -> get..set -> shift (target=403, len=0)
actionsTable[40497] = 74; // 'state 316' -> class -> shift (target=37, len=0)
actionsTable[40502] = 28; // 'state 316' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 40507, 40509); // 'state 316' -> void..typeof -> shift (target=15, len=0)
actionsTable[40510] = 32; // 'state 316' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 40517, 40519); // 'state 316' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 40520, 40523); // 'state 316' -> !..delete -> shift (target=15, len=0)
actionsTable[40523] = 34; // 'state 316' -> await -> shift (target=17, len=0)
actionsTable[40526] = 818; // 'state 316' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 40528, 40531); // 'state 316' -> number..template_string -> shift (target=399, len=0)
actionsTable[40537] = 36; // 'state 316' -> update_operator -> shift (target=18, len=0)
actionsTable[40538] = 798; // 'state 316' -> regex -> shift (target=399, len=0)
actionsTable[40581] = 122; // 'state 317' -> { -> shift (target=61, len=0)
actionsTable[40585] = 1412; // 'state 317' -> ) -> shift (target=706, len=0)
actionsTable[40616] = 320; // 'state 317' -> ... -> shift (target=160, len=0)
actionsTable[40617] = 124; // 'state 317' -> [ -> shift (target=62, len=0)
actionsTable[40619] = 1006; // 'state 317' -> async -> shift (target=503, len=0)
actionsTable.fill(1008, 40621, 40623); // 'state 317' -> static..readonly -> shift (target=504, len=0)
actionsTable.fill(1006, 40623, 40625); // 'state 317' -> get..set -> shift (target=503, len=0)
actionsTable[40654] = 894; // 'state 317' -> identifier -> shift (target=447, len=0)
actionsTable[40659] = 1008; // 'state 317' -> accessibility_modifier -> shift (target=504, len=0)
actionsTable.fill(798, 40704, 40709); // 'state 318' -> true..super -> shift (target=399, len=0)
actionsTable[40709] = 68; // 'state 318' -> { -> shift (target=34, len=0)
actionsTable[40712] = 4; // 'state 318' -> ( -> shift (target=2, len=0)
actionsTable[40722] = 806; // 'state 318' -> of -> shift (target=403, len=0)
actionsTable[40736] = 806; // 'state 318' -> from -> shift (target=403, len=0)
actionsTable[40740] = 806; // 'state 318' -> type -> shift (target=403, len=0)
actionsTable[40745] = 20; // 'state 318' -> [ -> shift (target=10, len=0)
actionsTable[40747] = 70; // 'state 318' -> async -> shift (target=35, len=0)
actionsTable[40748] = 72; // 'state 318' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 40751, 40753); // 'state 318' -> get..set -> shift (target=403, len=0)
actionsTable[40753] = 74; // 'state 318' -> class -> shift (target=37, len=0)
actionsTable[40758] = 28; // 'state 318' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 40763, 40765); // 'state 318' -> void..typeof -> shift (target=15, len=0)
actionsTable[40766] = 32; // 'state 318' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 40773, 40775); // 'state 318' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 40776, 40779); // 'state 318' -> !..delete -> shift (target=15, len=0)
actionsTable[40779] = 34; // 'state 318' -> await -> shift (target=17, len=0)
actionsTable[40782] = 818; // 'state 318' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 40784, 40787); // 'state 318' -> number..template_string -> shift (target=399, len=0)
actionsTable[40793] = 36; // 'state 318' -> update_operator -> shift (target=18, len=0)
actionsTable[40794] = 798; // 'state 318' -> regex -> shift (target=399, len=0)
actionsTable[40840] = 86; // 'state 319' -> ( -> shift (target=43, len=0)
actionsTable[40841] = 1813; // 'state 319' -> ) -> reduce (target=138, len=3)
actionsTable[40851] = 88; // 'state 319' -> in -> shift (target=44, len=0)
actionsTable[40865] = 1813; // 'state 319' -> , -> reduce (target=138, len=3)
actionsTable[40866] = 90; // 'state 319' -> * -> shift (target=45, len=0)
actionsTable[40867] = 92; // 'state 319' -> as -> shift (target=46, len=0)
actionsTable[40873] = 94; // 'state 319' -> [ -> shift (target=47, len=0)
actionsTable.fill(88, 40886, 40888); // 'state 319' -> <..> -> shift (target=44, len=0)
actionsTable[40888] = 96; // 'state 319' -> | -> shift (target=48, len=0)
actionsTable[40889] = 98; // 'state 319' -> & -> shift (target=49, len=0)
actionsTable[40895] = 100; // 'state 319' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 40896, 40898); // 'state 319' -> ||..?? -> shift (target=51, len=0)
actionsTable[40898] = 104; // 'state 319' -> && -> shift (target=52, len=0)
actionsTable[40899] = 106; // 'state 319' -> ^ -> shift (target=53, len=0)
actionsTable[40900] = 88; // 'state 319' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 40901, 40903); // 'state 319' -> +..- -> shift (target=54, len=0)
actionsTable[40903] = 90; // 'state 319' -> ** -> shift (target=45, len=0)
actionsTable[40908] = 110; // 'state 319' -> ?. -> shift (target=55, len=0)
actionsTable[40909] = 864; // 'state 319' -> . -> shift (target=432, len=0)
actionsTable[40917] = 112; // 'state 319' -> equality_operator -> shift (target=56, len=0)
actionsTable[40918] = 88; // 'state 319' -> relational_operator -> shift (target=44, len=0)
actionsTable[40919] = 114; // 'state 319' -> shift_operator -> shift (target=57, len=0)
actionsTable[40920] = 90; // 'state 319' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[40921] = 866; // 'state 319' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(942, 40960, 40963); // 'state 320' -> true..null -> shift (target=471, len=0)
actionsTable[40965] = 262; // 'state 320' -> { -> shift (target=131, len=0)
actionsTable[40968] = 264; // 'state 320' -> ( -> shift (target=132, len=0)
actionsTable[41001] = 266; // 'state 320' -> [ -> shift (target=133, len=0)
actionsTable[41014] = 28; // 'state 320' -> < -> shift (target=14, len=0)
actionsTable[41016] = 268; // 'state 320' -> | -> shift (target=134, len=0)
actionsTable[41019] = 942; // 'state 320' -> void -> shift (target=471, len=0)
actionsTable[41020] = 944; // 'state 320' -> typeof -> shift (target=472, len=0)
actionsTable[41038] = 270; // 'state 320' -> identifier -> shift (target=135, len=0)
actionsTable.fill(942, 41040, 41042); // 'state 320' -> number..string -> shift (target=471, len=0)
actionsTable.fill(798, 41088, 41093); // 'state 321' -> true..super -> shift (target=399, len=0)
actionsTable[41093] = 68; // 'state 321' -> { -> shift (target=34, len=0)
actionsTable[41096] = 4; // 'state 321' -> ( -> shift (target=2, len=0)
actionsTable[41106] = 806; // 'state 321' -> of -> shift (target=403, len=0)
actionsTable[41120] = 806; // 'state 321' -> from -> shift (target=403, len=0)
actionsTable[41124] = 806; // 'state 321' -> type -> shift (target=403, len=0)
actionsTable[41129] = 20; // 'state 321' -> [ -> shift (target=10, len=0)
actionsTable[41131] = 70; // 'state 321' -> async -> shift (target=35, len=0)
actionsTable[41132] = 72; // 'state 321' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 41135, 41137); // 'state 321' -> get..set -> shift (target=403, len=0)
actionsTable[41137] = 74; // 'state 321' -> class -> shift (target=37, len=0)
actionsTable[41142] = 28; // 'state 321' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 41147, 41149); // 'state 321' -> void..typeof -> shift (target=15, len=0)
actionsTable[41150] = 32; // 'state 321' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 41157, 41159); // 'state 321' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 41160, 41163); // 'state 321' -> !..delete -> shift (target=15, len=0)
actionsTable[41163] = 34; // 'state 321' -> await -> shift (target=17, len=0)
actionsTable[41166] = 818; // 'state 321' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 41168, 41171); // 'state 321' -> number..template_string -> shift (target=399, len=0)
actionsTable[41177] = 36; // 'state 321' -> update_operator -> shift (target=18, len=0)
actionsTable[41178] = 798; // 'state 321' -> regex -> shift (target=399, len=0)
actionsTable[41221] = 80; // 'state 322' -> { -> shift (target=40, len=0)
actionsTable[41243] = 164; // 'state 322' -> : -> shift (target=82, len=0)
actionsTable[41269] = 164; // 'state 322' -> ?: -> shift (target=82, len=0)
actionsTable[41352] = 138; // 'state 323' -> ( -> shift (target=69, len=0)
actionsTable[41477] = 80; // 'state 324' -> { -> shift (target=40, len=0)
actionsTable[41606] = 1837; // 'state 325' -> } -> reduce (target=150, len=3)
actionsTable[41608] = 86; // 'state 325' -> ( -> shift (target=43, len=0)
actionsTable[41613] = 1422; // 'state 325' -> ; -> shift (target=711, len=0)
actionsTable[41618] = 1837; // 'state 325' -> of -> reduce (target=150, len=3)
actionsTable[41619] = 88; // 'state 325' -> in -> shift (target=44, len=0)
actionsTable[41632] = 1837; // 'state 325' -> from -> reduce (target=150, len=3)
actionsTable[41634] = 90; // 'state 325' -> * -> shift (target=45, len=0)
actionsTable[41635] = 92; // 'state 325' -> as -> shift (target=46, len=0)
actionsTable[41636] = 1837; // 'state 325' -> type -> reduce (target=150, len=3)
actionsTable[41641] = 94; // 'state 325' -> [ -> shift (target=47, len=0)
actionsTable[41643] = 1837; // 'state 325' -> async -> reduce (target=150, len=3)
actionsTable.fill(1837, 41645, 41649); // 'state 325' -> static..set -> reduce (target=150, len=3)
actionsTable.fill(88, 41654, 41656); // 'state 325' -> <..> -> shift (target=44, len=0)
actionsTable[41656] = 96; // 'state 325' -> | -> shift (target=48, len=0)
actionsTable[41657] = 98; // 'state 325' -> & -> shift (target=49, len=0)
actionsTable[41663] = 100; // 'state 325' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 41664, 41666); // 'state 325' -> ||..?? -> shift (target=51, len=0)
actionsTable[41666] = 104; // 'state 325' -> && -> shift (target=52, len=0)
actionsTable[41667] = 106; // 'state 325' -> ^ -> shift (target=53, len=0)
actionsTable[41668] = 88; // 'state 325' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 41669, 41671); // 'state 325' -> +..- -> shift (target=54, len=0)
actionsTable[41671] = 90; // 'state 325' -> ** -> shift (target=45, len=0)
actionsTable[41676] = 110; // 'state 325' -> ?. -> shift (target=55, len=0)
actionsTable[41677] = 864; // 'state 325' -> . -> shift (target=432, len=0)
actionsTable.fill(1837, 41678, 41682); // 'state 325' -> identifier..string -> reduce (target=150, len=3)
actionsTable[41683] = 1837; // 'state 325' -> accessibility_modifier -> reduce (target=150, len=3)
actionsTable[41685] = 112; // 'state 325' -> equality_operator -> shift (target=56, len=0)
actionsTable[41686] = 88; // 'state 325' -> relational_operator -> shift (target=44, len=0)
actionsTable[41687] = 114; // 'state 325' -> shift_operator -> shift (target=57, len=0)
actionsTable[41688] = 90; // 'state 325' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[41689] = 866; // 'state 325' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(798, 41728, 41733); // 'state 326' -> true..super -> shift (target=399, len=0)
actionsTable[41733] = 68; // 'state 326' -> { -> shift (target=34, len=0)
actionsTable[41736] = 4; // 'state 326' -> ( -> shift (target=2, len=0)
actionsTable[41746] = 806; // 'state 326' -> of -> shift (target=403, len=0)
actionsTable[41760] = 806; // 'state 326' -> from -> shift (target=403, len=0)
actionsTable[41764] = 806; // 'state 326' -> type -> shift (target=403, len=0)
actionsTable[41769] = 20; // 'state 326' -> [ -> shift (target=10, len=0)
actionsTable[41771] = 70; // 'state 326' -> async -> shift (target=35, len=0)
actionsTable[41772] = 72; // 'state 326' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 41775, 41777); // 'state 326' -> get..set -> shift (target=403, len=0)
actionsTable[41777] = 74; // 'state 326' -> class -> shift (target=37, len=0)
actionsTable[41782] = 28; // 'state 326' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 41787, 41789); // 'state 326' -> void..typeof -> shift (target=15, len=0)
actionsTable[41790] = 32; // 'state 326' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 41797, 41799); // 'state 326' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 41800, 41803); // 'state 326' -> !..delete -> shift (target=15, len=0)
actionsTable[41803] = 34; // 'state 326' -> await -> shift (target=17, len=0)
actionsTable[41806] = 818; // 'state 326' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 41808, 41811); // 'state 326' -> number..template_string -> shift (target=399, len=0)
actionsTable[41817] = 36; // 'state 326' -> update_operator -> shift (target=18, len=0)
actionsTable[41818] = 798; // 'state 326' -> regex -> shift (target=399, len=0)
actionsTable[41864] = 86; // 'state 327' -> ( -> shift (target=43, len=0)
actionsTable[41865] = 2331; // 'state 327' -> ) -> reduce (target=141, len=4)
actionsTable[41875] = 88; // 'state 327' -> in -> shift (target=44, len=0)
actionsTable[41889] = 2331; // 'state 327' -> , -> reduce (target=141, len=4)
actionsTable[41890] = 90; // 'state 327' -> * -> shift (target=45, len=0)
actionsTable[41891] = 92; // 'state 327' -> as -> shift (target=46, len=0)
actionsTable[41897] = 94; // 'state 327' -> [ -> shift (target=47, len=0)
actionsTable.fill(88, 41910, 41912); // 'state 327' -> <..> -> shift (target=44, len=0)
actionsTable[41912] = 96; // 'state 327' -> | -> shift (target=48, len=0)
actionsTable[41913] = 98; // 'state 327' -> & -> shift (target=49, len=0)
actionsTable[41919] = 100; // 'state 327' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 41920, 41922); // 'state 327' -> ||..?? -> shift (target=51, len=0)
actionsTable[41922] = 104; // 'state 327' -> && -> shift (target=52, len=0)
actionsTable[41923] = 106; // 'state 327' -> ^ -> shift (target=53, len=0)
actionsTable[41924] = 88; // 'state 327' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 41925, 41927); // 'state 327' -> +..- -> shift (target=54, len=0)
actionsTable[41927] = 90; // 'state 327' -> ** -> shift (target=45, len=0)
actionsTable[41932] = 110; // 'state 327' -> ?. -> shift (target=55, len=0)
actionsTable[41933] = 864; // 'state 327' -> . -> shift (target=432, len=0)
actionsTable[41941] = 112; // 'state 327' -> equality_operator -> shift (target=56, len=0)
actionsTable[41942] = 88; // 'state 327' -> relational_operator -> shift (target=44, len=0)
actionsTable[41943] = 114; // 'state 327' -> shift_operator -> shift (target=57, len=0)
actionsTable[41944] = 90; // 'state 327' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[41945] = 866; // 'state 327' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(942, 41984, 41987); // 'state 328' -> true..null -> shift (target=471, len=0)
actionsTable[41989] = 262; // 'state 328' -> { -> shift (target=131, len=0)
actionsTable[41992] = 264; // 'state 328' -> ( -> shift (target=132, len=0)
actionsTable[42025] = 266; // 'state 328' -> [ -> shift (target=133, len=0)
actionsTable[42038] = 28; // 'state 328' -> < -> shift (target=14, len=0)
actionsTable[42039] = 1426; // 'state 328' -> > -> shift (target=713, len=0)
actionsTable[42040] = 268; // 'state 328' -> | -> shift (target=134, len=0)
actionsTable[42043] = 942; // 'state 328' -> void -> shift (target=471, len=0)
actionsTable[42044] = 944; // 'state 328' -> typeof -> shift (target=472, len=0)
actionsTable[42062] = 270; // 'state 328' -> identifier -> shift (target=135, len=0)
actionsTable.fill(942, 42064, 42066); // 'state 328' -> number..string -> shift (target=471, len=0)
actionsTable.fill(942, 42112, 42115); // 'state 329' -> true..null -> shift (target=471, len=0)
actionsTable[42117] = 262; // 'state 329' -> { -> shift (target=131, len=0)
actionsTable[42120] = 264; // 'state 329' -> ( -> shift (target=132, len=0)
actionsTable[42153] = 266; // 'state 329' -> [ -> shift (target=133, len=0)
actionsTable[42166] = 28; // 'state 329' -> < -> shift (target=14, len=0)
actionsTable[42168] = 268; // 'state 329' -> | -> shift (target=134, len=0)
actionsTable[42171] = 942; // 'state 329' -> void -> shift (target=471, len=0)
actionsTable[42172] = 944; // 'state 329' -> typeof -> shift (target=472, len=0)
actionsTable[42190] = 270; // 'state 329' -> identifier -> shift (target=135, len=0)
actionsTable.fill(942, 42192, 42194); // 'state 329' -> number..string -> shift (target=471, len=0)
actionsTable[42245] = 80; // 'state 330' -> { -> shift (target=40, len=0)
actionsTable.fill(798, 42368, 42373); // 'state 331' -> true..super -> shift (target=399, len=0)
actionsTable[42373] = 2; // 'state 331' -> { -> shift (target=1, len=0)
actionsTable[42375] = 800; // 'state 331' -> if -> shift (target=400, len=0)
actionsTable[42376] = 4; // 'state 331' -> ( -> shift (target=2, len=0)
actionsTable[42379] = 802; // 'state 331' -> while -> shift (target=401, len=0)
actionsTable[42380] = 6; // 'state 331' -> do -> shift (target=3, len=0)
actionsTable[42382] = 804; // 'state 331' -> for -> shift (target=402, len=0)
actionsTable.fill(8, 42383, 42386); // 'state 331' -> const..var -> shift (target=4, len=0)
actionsTable[42386] = 806; // 'state 331' -> of -> shift (target=403, len=0)
actionsTable[42388] = 10; // 'state 331' -> return -> shift (target=5, len=0)
actionsTable[42389] = 12; // 'state 331' -> throw -> shift (target=6, len=0)
actionsTable[42390] = 14; // 'state 331' -> try -> shift (target=7, len=0)
actionsTable[42393] = 808; // 'state 331' -> switch -> shift (target=404, len=0)
actionsTable[42397] = 810; // 'state 331' -> break -> shift (target=405, len=0)
actionsTable[42398] = 812; // 'state 331' -> continue -> shift (target=406, len=0)
actionsTable[42399] = 16; // 'state 331' -> import -> shift (target=8, len=0)
actionsTable[42400] = 806; // 'state 331' -> from -> shift (target=403, len=0)
actionsTable[42404] = 814; // 'state 331' -> type -> shift (target=407, len=0)
actionsTable[42405] = 18; // 'state 331' -> export -> shift (target=9, len=0)
actionsTable[42409] = 20; // 'state 331' -> [ -> shift (target=10, len=0)
actionsTable[42411] = 22; // 'state 331' -> async -> shift (target=11, len=0)
actionsTable[42412] = 24; // 'state 331' -> function -> shift (target=12, len=0)
actionsTable.fill(806, 42415, 42417); // 'state 331' -> get..set -> shift (target=403, len=0)
actionsTable[42417] = 26; // 'state 331' -> class -> shift (target=13, len=0)
actionsTable[42420] = 816; // 'state 331' -> interface -> shift (target=408, len=0)
actionsTable[42422] = 28; // 'state 331' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 42427, 42429); // 'state 331' -> void..typeof -> shift (target=15, len=0)
actionsTable[42430] = 32; // 'state 331' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 42437, 42439); // 'state 331' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 42440, 42443); // 'state 331' -> !..delete -> shift (target=15, len=0)
actionsTable[42443] = 34; // 'state 331' -> await -> shift (target=17, len=0)
actionsTable[42446] = 818; // 'state 331' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 42448, 42451); // 'state 331' -> number..template_string -> shift (target=399, len=0)
actionsTable[42457] = 36; // 'state 331' -> update_operator -> shift (target=18, len=0)
actionsTable[42458] = 798; // 'state 331' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 42496, 42501); // 'state 332' -> true..super -> shift (target=399, len=0)
actionsTable[42501] = 2; // 'state 332' -> { -> shift (target=1, len=0)
actionsTable[42503] = 800; // 'state 332' -> if -> shift (target=400, len=0)
actionsTable[42504] = 4; // 'state 332' -> ( -> shift (target=2, len=0)
actionsTable[42507] = 802; // 'state 332' -> while -> shift (target=401, len=0)
actionsTable[42508] = 6; // 'state 332' -> do -> shift (target=3, len=0)
actionsTable[42510] = 804; // 'state 332' -> for -> shift (target=402, len=0)
actionsTable.fill(8, 42511, 42514); // 'state 332' -> const..var -> shift (target=4, len=0)
actionsTable[42514] = 806; // 'state 332' -> of -> shift (target=403, len=0)
actionsTable[42516] = 10; // 'state 332' -> return -> shift (target=5, len=0)
actionsTable[42517] = 12; // 'state 332' -> throw -> shift (target=6, len=0)
actionsTable[42518] = 14; // 'state 332' -> try -> shift (target=7, len=0)
actionsTable[42521] = 808; // 'state 332' -> switch -> shift (target=404, len=0)
actionsTable[42525] = 810; // 'state 332' -> break -> shift (target=405, len=0)
actionsTable[42526] = 812; // 'state 332' -> continue -> shift (target=406, len=0)
actionsTable[42527] = 16; // 'state 332' -> import -> shift (target=8, len=0)
actionsTable[42528] = 806; // 'state 332' -> from -> shift (target=403, len=0)
actionsTable[42532] = 814; // 'state 332' -> type -> shift (target=407, len=0)
actionsTable[42533] = 18; // 'state 332' -> export -> shift (target=9, len=0)
actionsTable[42537] = 20; // 'state 332' -> [ -> shift (target=10, len=0)
actionsTable[42539] = 22; // 'state 332' -> async -> shift (target=11, len=0)
actionsTable[42540] = 24; // 'state 332' -> function -> shift (target=12, len=0)
actionsTable.fill(806, 42543, 42545); // 'state 332' -> get..set -> shift (target=403, len=0)
actionsTable[42545] = 26; // 'state 332' -> class -> shift (target=13, len=0)
actionsTable[42548] = 816; // 'state 332' -> interface -> shift (target=408, len=0)
actionsTable[42550] = 28; // 'state 332' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 42555, 42557); // 'state 332' -> void..typeof -> shift (target=15, len=0)
actionsTable[42558] = 32; // 'state 332' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 42565, 42567); // 'state 332' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 42568, 42571); // 'state 332' -> !..delete -> shift (target=15, len=0)
actionsTable[42571] = 34; // 'state 332' -> await -> shift (target=17, len=0)
actionsTable[42574] = 818; // 'state 332' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 42576, 42579); // 'state 332' -> number..template_string -> shift (target=399, len=0)
actionsTable[42585] = 36; // 'state 332' -> update_operator -> shift (target=18, len=0)
actionsTable[42586] = 798; // 'state 332' -> regex -> shift (target=399, len=0)
actionsTable[42632] = 86; // 'state 333' -> ( -> shift (target=43, len=0)
actionsTable[42633] = 738; // 'state 333' -> ) -> shift (target=369, len=0)
actionsTable[42643] = 88; // 'state 333' -> in -> shift (target=44, len=0)
actionsTable[42658] = 90; // 'state 333' -> * -> shift (target=45, len=0)
actionsTable[42659] = 92; // 'state 333' -> as -> shift (target=46, len=0)
actionsTable[42665] = 94; // 'state 333' -> [ -> shift (target=47, len=0)
actionsTable.fill(88, 42678, 42680); // 'state 333' -> <..> -> shift (target=44, len=0)
actionsTable[42680] = 96; // 'state 333' -> | -> shift (target=48, len=0)
actionsTable[42681] = 98; // 'state 333' -> & -> shift (target=49, len=0)
actionsTable[42687] = 100; // 'state 333' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 42688, 42690); // 'state 333' -> ||..?? -> shift (target=51, len=0)
actionsTable[42690] = 104; // 'state 333' -> && -> shift (target=52, len=0)
actionsTable[42691] = 106; // 'state 333' -> ^ -> shift (target=53, len=0)
actionsTable[42692] = 88; // 'state 333' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 42693, 42695); // 'state 333' -> +..- -> shift (target=54, len=0)
actionsTable[42695] = 90; // 'state 333' -> ** -> shift (target=45, len=0)
actionsTable[42700] = 110; // 'state 333' -> ?. -> shift (target=55, len=0)
actionsTable[42701] = 864; // 'state 333' -> . -> shift (target=432, len=0)
actionsTable[42709] = 112; // 'state 333' -> equality_operator -> shift (target=56, len=0)
actionsTable[42710] = 88; // 'state 333' -> relational_operator -> shift (target=44, len=0)
actionsTable[42711] = 114; // 'state 333' -> shift_operator -> shift (target=57, len=0)
actionsTable[42712] = 90; // 'state 333' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[42713] = 866; // 'state 333' -> update_operator -> shift (target=433, len=0)
actionsTable[42760] = 86; // 'state 334' -> ( -> shift (target=43, len=0)
actionsTable[42761] = 740; // 'state 334' -> ) -> shift (target=370, len=0)
actionsTable[42771] = 88; // 'state 334' -> in -> shift (target=44, len=0)
actionsTable[42786] = 90; // 'state 334' -> * -> shift (target=45, len=0)
actionsTable[42787] = 92; // 'state 334' -> as -> shift (target=46, len=0)
actionsTable[42793] = 94; // 'state 334' -> [ -> shift (target=47, len=0)
actionsTable.fill(88, 42806, 42808); // 'state 334' -> <..> -> shift (target=44, len=0)
actionsTable[42808] = 96; // 'state 334' -> | -> shift (target=48, len=0)
actionsTable[42809] = 98; // 'state 334' -> & -> shift (target=49, len=0)
actionsTable[42815] = 100; // 'state 334' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 42816, 42818); // 'state 334' -> ||..?? -> shift (target=51, len=0)
actionsTable[42818] = 104; // 'state 334' -> && -> shift (target=52, len=0)
actionsTable[42819] = 106; // 'state 334' -> ^ -> shift (target=53, len=0)
actionsTable[42820] = 88; // 'state 334' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 42821, 42823); // 'state 334' -> +..- -> shift (target=54, len=0)
actionsTable[42823] = 90; // 'state 334' -> ** -> shift (target=45, len=0)
actionsTable[42828] = 110; // 'state 334' -> ?. -> shift (target=55, len=0)
actionsTable[42829] = 864; // 'state 334' -> . -> shift (target=432, len=0)
actionsTable[42837] = 112; // 'state 334' -> equality_operator -> shift (target=56, len=0)
actionsTable[42838] = 88; // 'state 334' -> relational_operator -> shift (target=44, len=0)
actionsTable[42839] = 114; // 'state 334' -> shift_operator -> shift (target=57, len=0)
actionsTable[42840] = 90; // 'state 334' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[42841] = 866; // 'state 334' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(798, 42880, 42885); // 'state 335' -> true..super -> shift (target=399, len=0)
actionsTable[42885] = 68; // 'state 335' -> { -> shift (target=34, len=0)
actionsTable[42888] = 4; // 'state 335' -> ( -> shift (target=2, len=0)
actionsTable[42889] = 738; // 'state 335' -> ) -> shift (target=369, len=0)
actionsTable[42898] = 806; // 'state 335' -> of -> shift (target=403, len=0)
actionsTable[42912] = 806; // 'state 335' -> from -> shift (target=403, len=0)
actionsTable[42916] = 806; // 'state 335' -> type -> shift (target=403, len=0)
actionsTable[42921] = 20; // 'state 335' -> [ -> shift (target=10, len=0)
actionsTable[42923] = 70; // 'state 335' -> async -> shift (target=35, len=0)
actionsTable[42924] = 72; // 'state 335' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 42927, 42929); // 'state 335' -> get..set -> shift (target=403, len=0)
actionsTable[42929] = 74; // 'state 335' -> class -> shift (target=37, len=0)
actionsTable[42934] = 28; // 'state 335' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 42939, 42941); // 'state 335' -> void..typeof -> shift (target=15, len=0)
actionsTable[42942] = 32; // 'state 335' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 42949, 42951); // 'state 335' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 42952, 42955); // 'state 335' -> !..delete -> shift (target=15, len=0)
actionsTable[42955] = 34; // 'state 335' -> await -> shift (target=17, len=0)
actionsTable[42958] = 818; // 'state 335' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 42960, 42963); // 'state 335' -> number..template_string -> shift (target=399, len=0)
actionsTable[42969] = 36; // 'state 335' -> update_operator -> shift (target=18, len=0)
actionsTable[42970] = 798; // 'state 335' -> regex -> shift (target=399, len=0)
actionsTable[43013] = 80; // 'state 336' -> { -> shift (target=40, len=0)
actionsTable[43035] = 164; // 'state 336' -> : -> shift (target=82, len=0)
actionsTable[43061] = 164; // 'state 336' -> ?: -> shift (target=82, len=0)
actionsTable[43141] = 80; // 'state 337' -> { -> shift (target=40, len=0)
actionsTable.fill(798, 43264, 43269); // 'state 338' -> true..super -> shift (target=399, len=0)
actionsTable[43269] = 68; // 'state 338' -> { -> shift (target=34, len=0)
actionsTable[43272] = 4; // 'state 338' -> ( -> shift (target=2, len=0)
actionsTable[43282] = 806; // 'state 338' -> of -> shift (target=403, len=0)
actionsTable[43296] = 806; // 'state 338' -> from -> shift (target=403, len=0)
actionsTable[43300] = 806; // 'state 338' -> type -> shift (target=403, len=0)
actionsTable[43305] = 20; // 'state 338' -> [ -> shift (target=10, len=0)
actionsTable[43307] = 70; // 'state 338' -> async -> shift (target=35, len=0)
actionsTable[43308] = 72; // 'state 338' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 43311, 43313); // 'state 338' -> get..set -> shift (target=403, len=0)
actionsTable[43313] = 74; // 'state 338' -> class -> shift (target=37, len=0)
actionsTable[43318] = 28; // 'state 338' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 43323, 43325); // 'state 338' -> void..typeof -> shift (target=15, len=0)
actionsTable[43326] = 32; // 'state 338' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 43333, 43335); // 'state 338' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 43336, 43339); // 'state 338' -> !..delete -> shift (target=15, len=0)
actionsTable[43339] = 34; // 'state 338' -> await -> shift (target=17, len=0)
actionsTable[43342] = 818; // 'state 338' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 43344, 43347); // 'state 338' -> number..template_string -> shift (target=399, len=0)
actionsTable[43353] = 36; // 'state 338' -> update_operator -> shift (target=18, len=0)
actionsTable[43354] = 798; // 'state 338' -> regex -> shift (target=399, len=0)
actionsTable[43398] = 1440; // 'state 339' -> } -> shift (target=720, len=0)
actionsTable[43418] = 676; // 'state 339' -> case -> shift (target=338, len=0)
actionsTable[43420] = 1348; // 'state 339' -> default -> shift (target=674, len=0)
actionsTable.fill(942, 43520, 43523); // 'state 340' -> true..null -> shift (target=471, len=0)
actionsTable[43525] = 262; // 'state 340' -> { -> shift (target=131, len=0)
actionsTable[43528] = 264; // 'state 340' -> ( -> shift (target=132, len=0)
actionsTable[43561] = 266; // 'state 340' -> [ -> shift (target=133, len=0)
actionsTable[43574] = 28; // 'state 340' -> < -> shift (target=14, len=0)
actionsTable[43576] = 268; // 'state 340' -> | -> shift (target=134, len=0)
actionsTable[43579] = 942; // 'state 340' -> void -> shift (target=471, len=0)
actionsTable[43580] = 944; // 'state 340' -> typeof -> shift (target=472, len=0)
actionsTable[43598] = 270; // 'state 340' -> identifier -> shift (target=135, len=0)
actionsTable.fill(942, 43600, 43602); // 'state 340' -> number..string -> shift (target=471, len=0)
actionsTable[43657] = 769; // 'state 341' -> ) -> reduce (target=128, len=1)
actionsTable[43675] = 164; // 'state 341' -> : -> shift (target=82, len=0)
actionsTable[43681] = 769; // 'state 341' -> , -> reduce (target=128, len=1)
actionsTable[43701] = 164; // 'state 341' -> ?: -> shift (target=82, len=0)
actionsTable.fill(798, 43776, 43781); // 'state 342' -> true..super -> shift (target=399, len=0)
actionsTable[43781] = 562; // 'state 342' -> { -> shift (target=281, len=0)
actionsTable[43784] = 4; // 'state 342' -> ( -> shift (target=2, len=0)
actionsTable[43794] = 806; // 'state 342' -> of -> shift (target=403, len=0)
actionsTable[43808] = 806; // 'state 342' -> from -> shift (target=403, len=0)
actionsTable[43812] = 806; // 'state 342' -> type -> shift (target=403, len=0)
actionsTable[43817] = 566; // 'state 342' -> [ -> shift (target=283, len=0)
actionsTable[43819] = 70; // 'state 342' -> async -> shift (target=35, len=0)
actionsTable[43820] = 72; // 'state 342' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 43823, 43825); // 'state 342' -> get..set -> shift (target=403, len=0)
actionsTable[43825] = 74; // 'state 342' -> class -> shift (target=37, len=0)
actionsTable[43830] = 28; // 'state 342' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 43835, 43837); // 'state 342' -> void..typeof -> shift (target=15, len=0)
actionsTable[43838] = 32; // 'state 342' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 43845, 43847); // 'state 342' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 43848, 43851); // 'state 342' -> !..delete -> shift (target=15, len=0)
actionsTable[43851] = 34; // 'state 342' -> await -> shift (target=17, len=0)
actionsTable[43854] = 1446; // 'state 342' -> identifier -> shift (target=723, len=0)
actionsTable.fill(798, 43856, 43859); // 'state 342' -> number..template_string -> shift (target=399, len=0)
actionsTable[43865] = 36; // 'state 342' -> update_operator -> shift (target=18, len=0)
actionsTable[43866] = 798; // 'state 342' -> regex -> shift (target=399, len=0)
actionsTable[43912] = 138; // 'state 343' -> ( -> shift (target=69, len=0)
actionsTable[43931] = 752; // 'state 343' -> : -> shift (target=376, len=0)
actionsTable[43958] = 28; // 'state 343' -> < -> shift (target=14, len=0)
actionsTable.fill(798, 44032, 44037); // 'state 344' -> true..super -> shift (target=399, len=0)
actionsTable[44037] = 562; // 'state 344' -> { -> shift (target=281, len=0)
actionsTable[44040] = 4; // 'state 344' -> ( -> shift (target=2, len=0)
actionsTable[44050] = 806; // 'state 344' -> of -> shift (target=403, len=0)
actionsTable[44064] = 806; // 'state 344' -> from -> shift (target=403, len=0)
actionsTable[44068] = 806; // 'state 344' -> type -> shift (target=403, len=0)
actionsTable[44072] = 690; // 'state 344' -> ... -> shift (target=345, len=0)
actionsTable[44073] = 566; // 'state 344' -> [ -> shift (target=283, len=0)
actionsTable[44075] = 70; // 'state 344' -> async -> shift (target=35, len=0)
actionsTable[44076] = 72; // 'state 344' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 44079, 44081); // 'state 344' -> get..set -> shift (target=403, len=0)
actionsTable[44081] = 74; // 'state 344' -> class -> shift (target=37, len=0)
actionsTable[44086] = 28; // 'state 344' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 44091, 44093); // 'state 344' -> void..typeof -> shift (target=15, len=0)
actionsTable[44094] = 32; // 'state 344' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 44101, 44103); // 'state 344' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 44104, 44107); // 'state 344' -> !..delete -> shift (target=15, len=0)
actionsTable[44107] = 34; // 'state 344' -> await -> shift (target=17, len=0)
actionsTable[44110] = 1360; // 'state 344' -> identifier -> shift (target=680, len=0)
actionsTable.fill(798, 44112, 44115); // 'state 344' -> number..template_string -> shift (target=399, len=0)
actionsTable[44121] = 36; // 'state 344' -> update_operator -> shift (target=18, len=0)
actionsTable[44122] = 798; // 'state 344' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 44160, 44165); // 'state 345' -> true..super -> shift (target=399, len=0)
actionsTable[44165] = 562; // 'state 345' -> { -> shift (target=281, len=0)
actionsTable[44168] = 4; // 'state 345' -> ( -> shift (target=2, len=0)
actionsTable[44178] = 806; // 'state 345' -> of -> shift (target=403, len=0)
actionsTable[44192] = 806; // 'state 345' -> from -> shift (target=403, len=0)
actionsTable[44196] = 806; // 'state 345' -> type -> shift (target=403, len=0)
actionsTable[44201] = 566; // 'state 345' -> [ -> shift (target=283, len=0)
actionsTable[44203] = 70; // 'state 345' -> async -> shift (target=35, len=0)
actionsTable[44204] = 72; // 'state 345' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 44207, 44209); // 'state 345' -> get..set -> shift (target=403, len=0)
actionsTable[44209] = 74; // 'state 345' -> class -> shift (target=37, len=0)
actionsTable[44214] = 28; // 'state 345' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 44219, 44221); // 'state 345' -> void..typeof -> shift (target=15, len=0)
actionsTable[44222] = 32; // 'state 345' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 44229, 44231); // 'state 345' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 44232, 44235); // 'state 345' -> !..delete -> shift (target=15, len=0)
actionsTable[44235] = 34; // 'state 345' -> await -> shift (target=17, len=0)
actionsTable[44238] = 1360; // 'state 345' -> identifier -> shift (target=680, len=0)
actionsTable.fill(798, 44240, 44243); // 'state 345' -> number..template_string -> shift (target=399, len=0)
actionsTable[44249] = 36; // 'state 345' -> update_operator -> shift (target=18, len=0)
actionsTable[44250] = 798; // 'state 345' -> regex -> shift (target=399, len=0)
actionsTable.fill(1218, 44288, 44291); // 'state 346' -> true..null -> shift (target=609, len=0)
actionsTable.fill(798, 44291, 44293); // 'state 346' -> this..super -> shift (target=399, len=0)
actionsTable[44293] = 420; // 'state 346' -> { -> shift (target=210, len=0)
actionsTable[44296] = 576; // 'state 346' -> ( -> shift (target=288, len=0)
actionsTable[44306] = 806; // 'state 346' -> of -> shift (target=403, len=0)
actionsTable[44320] = 806; // 'state 346' -> from -> shift (target=403, len=0)
actionsTable[44324] = 806; // 'state 346' -> type -> shift (target=403, len=0)
actionsTable[44329] = 424; // 'state 346' -> [ -> shift (target=212, len=0)
actionsTable[44331] = 70; // 'state 346' -> async -> shift (target=35, len=0)
actionsTable[44332] = 72; // 'state 346' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 44335, 44337); // 'state 346' -> get..set -> shift (target=403, len=0)
actionsTable[44337] = 74; // 'state 346' -> class -> shift (target=37, len=0)
actionsTable[44342] = 28; // 'state 346' -> < -> shift (target=14, len=0)
actionsTable[44344] = 268; // 'state 346' -> | -> shift (target=134, len=0)
actionsTable[44347] = 578; // 'state 346' -> void -> shift (target=289, len=0)
actionsTable[44348] = 580; // 'state 346' -> typeof -> shift (target=290, len=0)
actionsTable[44350] = 32; // 'state 346' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 44357, 44359); // 'state 346' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 44360, 44363); // 'state 346' -> !..delete -> shift (target=15, len=0)
actionsTable[44363] = 34; // 'state 346' -> await -> shift (target=17, len=0)
actionsTable[44366] = 582; // 'state 346' -> identifier -> shift (target=291, len=0)
actionsTable.fill(1218, 44368, 44370); // 'state 346' -> number..string -> shift (target=609, len=0)
actionsTable[44370] = 798; // 'state 346' -> template_string -> shift (target=399, len=0)
actionsTable[44377] = 36; // 'state 346' -> update_operator -> shift (target=18, len=0)
actionsTable[44378] = 798; // 'state 346' -> regex -> shift (target=399, len=0)
actionsTable[44421] = 80; // 'state 347' -> { -> shift (target=40, len=0)
actionsTable[44422] = 1373; // 'state 347' -> } -> reduce (target=174, len=2)
actionsTable[44429] = 1373; // 'state 347' -> ; -> reduce (target=174, len=2)
actionsTable[44434] = 1373; // 'state 347' -> of -> reduce (target=174, len=2)
actionsTable[44443] = 164; // 'state 347' -> : -> shift (target=82, len=0)
actionsTable.fill(1373, 44448, 44450); // 'state 347' -> from.., -> reduce (target=174, len=2)
actionsTable[44452] = 1373; // 'state 347' -> type -> reduce (target=174, len=2)
actionsTable[44457] = 1373; // 'state 347' -> [ -> reduce (target=174, len=2)
actionsTable[44459] = 1373; // 'state 347' -> async -> reduce (target=174, len=2)
actionsTable.fill(1373, 44462, 44465); // 'state 347' -> readonly..set -> reduce (target=174, len=2)
actionsTable[44469] = 164; // 'state 347' -> ?: -> shift (target=82, len=0)
actionsTable[44478] = 1373; // 'state 347' -> new -> reduce (target=174, len=2)
actionsTable[44494] = 1373; // 'state 347' -> identifier -> reduce (target=174, len=2)
actionsTable.fill(1373, 44496, 44498); // 'state 347' -> number..string -> reduce (target=174, len=2)
actionsTable[44552] = 138; // 'state 348' -> ( -> shift (target=69, len=0)
actionsTable[44699] = 164; // 'state 349' -> : -> shift (target=82, len=0)
actionsTable[44725] = 164; // 'state 349' -> ?: -> shift (target=82, len=0)
actionsTable[44730] = 758; // 'state 349' -> => -> shift (target=379, len=0)
actionsTable[44808] = 871; // 'state 350' -> ( -> reduce (target=179, len=1)
actionsTable[44809] = 839; // 'state 350' -> ) -> reduce (target=163, len=1)
actionsTable[44819] = 871; // 'state 350' -> in -> reduce (target=179, len=1)
actionsTable[44827] = 164; // 'state 350' -> : -> shift (target=82, len=0)
actionsTable.fill(871, 44833, 44836); // 'state 350' -> ,..as -> reduce (target=179, len=1)
actionsTable[44839] = 877; // 'state 350' -> = -> reduce (target=182, len=1)
actionsTable[44841] = 839; // 'state 350' -> [ -> reduce (target=163, len=1)
actionsTable[44853] = 164; // 'state 350' -> ?: -> shift (target=82, len=0)
actionsTable[44854] = 366; // 'state 350' -> < -> shift (target=183, len=0)
actionsTable[44855] = 871; // 'state 350' -> > -> reduce (target=179, len=1)
actionsTable.fill(839, 44856, 44858); // 'state 350' -> |..& -> reduce (target=163, len=1)
actionsTable[44858] = 162; // 'state 350' -> => -> shift (target=81, len=0)
actionsTable[44861] = 432; // 'state 350' -> is -> shift (target=216, len=0)
actionsTable.fill(871, 44863, 44872); // 'state 350' -> ?..** -> reduce (target=179, len=1)
actionsTable.fill(871, 44876, 44878); // 'state 350' -> ?.... -> reduce (target=179, len=1)
actionsTable[44884] = 877; // 'state 350' -> compound_assignment_operator -> reduce (target=182, len=1)
actionsTable.fill(871, 44885, 44890); // 'state 350' -> equality_operator..update_operator -> reduce (target=179, len=1)
actionsTable.fill(1218, 44928, 44931); // 'state 351' -> true..null -> shift (target=609, len=0)
actionsTable.fill(798, 44931, 44933); // 'state 351' -> this..super -> shift (target=399, len=0)
actionsTable[44933] = 760; // 'state 351' -> { -> shift (target=380, len=0)
actionsTable[44936] = 576; // 'state 351' -> ( -> shift (target=288, len=0)
actionsTable[44946] = 806; // 'state 351' -> of -> shift (target=403, len=0)
actionsTable[44960] = 806; // 'state 351' -> from -> shift (target=403, len=0)
actionsTable[44964] = 806; // 'state 351' -> type -> shift (target=403, len=0)
actionsTable[44969] = 424; // 'state 351' -> [ -> shift (target=212, len=0)
actionsTable[44971] = 70; // 'state 351' -> async -> shift (target=35, len=0)
actionsTable[44972] = 72; // 'state 351' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 44975, 44977); // 'state 351' -> get..set -> shift (target=403, len=0)
actionsTable[44977] = 74; // 'state 351' -> class -> shift (target=37, len=0)
actionsTable[44982] = 28; // 'state 351' -> < -> shift (target=14, len=0)
actionsTable[44984] = 268; // 'state 351' -> | -> shift (target=134, len=0)
actionsTable[44987] = 578; // 'state 351' -> void -> shift (target=289, len=0)
actionsTable[44988] = 580; // 'state 351' -> typeof -> shift (target=290, len=0)
actionsTable[44990] = 32; // 'state 351' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 44997, 44999); // 'state 351' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 45000, 45003); // 'state 351' -> !..delete -> shift (target=15, len=0)
actionsTable[45003] = 34; // 'state 351' -> await -> shift (target=17, len=0)
actionsTable[45006] = 582; // 'state 351' -> identifier -> shift (target=291, len=0)
actionsTable.fill(1218, 45008, 45010); // 'state 351' -> number..string -> shift (target=609, len=0)
actionsTable[45010] = 798; // 'state 351' -> template_string -> shift (target=399, len=0)
actionsTable[45017] = 36; // 'state 351' -> update_operator -> shift (target=18, len=0)
actionsTable[45018] = 798; // 'state 351' -> regex -> shift (target=399, len=0)
actionsTable.fill(942, 45056, 45059); // 'state 352' -> true..null -> shift (target=471, len=0)
actionsTable[45061] = 262; // 'state 352' -> { -> shift (target=131, len=0)
actionsTable[45064] = 264; // 'state 352' -> ( -> shift (target=132, len=0)
actionsTable[45097] = 266; // 'state 352' -> [ -> shift (target=133, len=0)
actionsTable[45098] = 1448; // 'state 352' -> ] -> shift (target=724, len=0)
actionsTable[45110] = 28; // 'state 352' -> < -> shift (target=14, len=0)
actionsTable[45112] = 268; // 'state 352' -> | -> shift (target=134, len=0)
actionsTable[45115] = 942; // 'state 352' -> void -> shift (target=471, len=0)
actionsTable[45116] = 944; // 'state 352' -> typeof -> shift (target=472, len=0)
actionsTable[45134] = 270; // 'state 352' -> identifier -> shift (target=135, len=0)
actionsTable.fill(942, 45136, 45138); // 'state 352' -> number..string -> shift (target=471, len=0)
actionsTable[45190] = 1885; // 'state 353' -> } -> reduce (target=174, len=3)
actionsTable[45197] = 1885; // 'state 353' -> ; -> reduce (target=174, len=3)
actionsTable[45202] = 1885; // 'state 353' -> of -> reduce (target=174, len=3)
actionsTable[45211] = 164; // 'state 353' -> : -> shift (target=82, len=0)
actionsTable.fill(1885, 45216, 45218); // 'state 353' -> from.., -> reduce (target=174, len=3)
actionsTable[45220] = 1885; // 'state 353' -> type -> reduce (target=174, len=3)
actionsTable[45225] = 1885; // 'state 353' -> [ -> reduce (target=174, len=3)
actionsTable[45227] = 1885; // 'state 353' -> async -> reduce (target=174, len=3)
actionsTable.fill(1885, 45230, 45233); // 'state 353' -> readonly..set -> reduce (target=174, len=3)
actionsTable[45237] = 164; // 'state 353' -> ?: -> shift (target=82, len=0)
actionsTable[45246] = 1885; // 'state 353' -> new -> reduce (target=174, len=3)
actionsTable[45262] = 1885; // 'state 353' -> identifier -> reduce (target=174, len=3)
actionsTable.fill(1885, 45264, 45266); // 'state 353' -> number..string -> reduce (target=174, len=3)
actionsTable[45318] = 1887; // 'state 354' -> } -> reduce (target=175, len=3)
actionsTable[45325] = 1887; // 'state 354' -> ; -> reduce (target=175, len=3)
actionsTable[45330] = 1887; // 'state 354' -> of -> reduce (target=175, len=3)
actionsTable[45339] = 164; // 'state 354' -> : -> shift (target=82, len=0)
actionsTable.fill(1887, 45344, 45346); // 'state 354' -> from.., -> reduce (target=175, len=3)
actionsTable[45348] = 1887; // 'state 354' -> type -> reduce (target=175, len=3)
actionsTable[45353] = 1887; // 'state 354' -> [ -> reduce (target=175, len=3)
actionsTable[45355] = 1887; // 'state 354' -> async -> reduce (target=175, len=3)
actionsTable.fill(1887, 45358, 45361); // 'state 354' -> readonly..set -> reduce (target=175, len=3)
actionsTable[45365] = 164; // 'state 354' -> ?: -> shift (target=82, len=0)
actionsTable[45374] = 1887; // 'state 354' -> new -> reduce (target=175, len=3)
actionsTable[45390] = 1887; // 'state 354' -> identifier -> reduce (target=175, len=3)
actionsTable.fill(1887, 45392, 45394); // 'state 354' -> number..string -> reduce (target=175, len=3)
actionsTable.fill(942, 45440, 45443); // 'state 355' -> true..null -> shift (target=471, len=0)
actionsTable[45445] = 262; // 'state 355' -> { -> shift (target=131, len=0)
actionsTable[45448] = 264; // 'state 355' -> ( -> shift (target=132, len=0)
actionsTable[45481] = 266; // 'state 355' -> [ -> shift (target=133, len=0)
actionsTable[45494] = 28; // 'state 355' -> < -> shift (target=14, len=0)
actionsTable[45496] = 268; // 'state 355' -> | -> shift (target=134, len=0)
actionsTable[45499] = 942; // 'state 355' -> void -> shift (target=471, len=0)
actionsTable[45500] = 944; // 'state 355' -> typeof -> shift (target=472, len=0)
actionsTable[45518] = 270; // 'state 355' -> identifier -> shift (target=135, len=0)
actionsTable.fill(942, 45520, 45522); // 'state 355' -> number..string -> shift (target=471, len=0)
actionsTable[45573] = 80; // 'state 356' -> { -> shift (target=40, len=0)
actionsTable[45581] = 1402; // 'state 356' -> ; -> shift (target=701, len=0)
actionsTable[45595] = 164; // 'state 356' -> : -> shift (target=82, len=0)
actionsTable[45621] = 164; // 'state 356' -> ?: -> shift (target=82, len=0)
actionsTable[45701] = 80; // 'state 357' -> { -> shift (target=40, len=0)
actionsTable[45709] = 1402; // 'state 357' -> ; -> shift (target=701, len=0)
actionsTable.fill(798, 45824, 45829); // 'state 358' -> true..super -> shift (target=399, len=0)
actionsTable[45829] = 68; // 'state 358' -> { -> shift (target=34, len=0)
actionsTable[45832] = 4; // 'state 358' -> ( -> shift (target=2, len=0)
actionsTable[45842] = 806; // 'state 358' -> of -> shift (target=403, len=0)
actionsTable[45856] = 806; // 'state 358' -> from -> shift (target=403, len=0)
actionsTable[45860] = 806; // 'state 358' -> type -> shift (target=403, len=0)
actionsTable[45865] = 20; // 'state 358' -> [ -> shift (target=10, len=0)
actionsTable[45867] = 70; // 'state 358' -> async -> shift (target=35, len=0)
actionsTable[45868] = 72; // 'state 358' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 45871, 45873); // 'state 358' -> get..set -> shift (target=403, len=0)
actionsTable[45873] = 74; // 'state 358' -> class -> shift (target=37, len=0)
actionsTable[45878] = 28; // 'state 358' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 45883, 45885); // 'state 358' -> void..typeof -> shift (target=15, len=0)
actionsTable[45886] = 32; // 'state 358' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 45893, 45895); // 'state 358' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 45896, 45899); // 'state 358' -> !..delete -> shift (target=15, len=0)
actionsTable[45899] = 34; // 'state 358' -> await -> shift (target=17, len=0)
actionsTable[45902] = 818; // 'state 358' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 45904, 45907); // 'state 358' -> number..template_string -> shift (target=399, len=0)
actionsTable[45913] = 36; // 'state 358' -> update_operator -> shift (target=18, len=0)
actionsTable[45914] = 798; // 'state 358' -> regex -> shift (target=399, len=0)
actionsTable[45957] = 80; // 'state 359' -> { -> shift (target=40, len=0)
actionsTable[45965] = 1460; // 'state 359' -> ; -> shift (target=730, len=0)
actionsTable.fill(3443, 46080, 46088); // 'state 360' -> true..if -> reduce (target=185, len=6)
actionsTable[46088] = 86; // 'state 360' -> ( -> shift (target=43, len=0)
actionsTable.fill(3443, 46089, 46099); // 'state 360' -> )..of -> reduce (target=185, len=6)
actionsTable[46099] = 88; // 'state 360' -> in -> shift (target=44, len=0)
actionsTable.fill(3443, 46100, 46103); // 'state 360' -> return..try -> reduce (target=185, len=6)
actionsTable.fill(3443, 46105, 46114); // 'state 360' -> switch.., -> reduce (target=185, len=6)
actionsTable[46114] = 90; // 'state 360' -> * -> shift (target=45, len=0)
actionsTable[46115] = 92; // 'state 360' -> as -> shift (target=46, len=0)
actionsTable.fill(3443, 46116, 46118); // 'state 360' -> type..export -> reduce (target=185, len=6)
actionsTable[46121] = 94; // 'state 360' -> [ -> shift (target=47, len=0)
actionsTable.fill(3443, 46122, 46130); // 'state 360' -> ]..class -> reduce (target=185, len=6)
actionsTable.fill(3443, 46131, 46133); // 'state 360' -> implements..interface -> reduce (target=185, len=6)
actionsTable.fill(88, 46134, 46136); // 'state 360' -> <..> -> shift (target=44, len=0)
actionsTable[46136] = 96; // 'state 360' -> | -> shift (target=48, len=0)
actionsTable[46137] = 98; // 'state 360' -> & -> shift (target=49, len=0)
actionsTable.fill(3443, 46139, 46141); // 'state 360' -> void..typeof -> reduce (target=185, len=6)
actionsTable[46142] = 3443; // 'state 360' -> new -> reduce (target=185, len=6)
actionsTable[46143] = 100; // 'state 360' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 46144, 46146); // 'state 360' -> ||..?? -> shift (target=51, len=0)
actionsTable[46146] = 104; // 'state 360' -> && -> shift (target=52, len=0)
actionsTable[46147] = 106; // 'state 360' -> ^ -> shift (target=53, len=0)
actionsTable[46148] = 88; // 'state 360' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 46149, 46151); // 'state 360' -> +..- -> shift (target=54, len=0)
actionsTable[46151] = 90; // 'state 360' -> ** -> shift (target=45, len=0)
actionsTable.fill(3443, 46152, 46156); // 'state 360' -> !..await -> reduce (target=185, len=6)
actionsTable[46156] = 110; // 'state 360' -> ?. -> shift (target=55, len=0)
actionsTable[46157] = 864; // 'state 360' -> . -> shift (target=432, len=0)
actionsTable.fill(3443, 46158, 46164); // 'state 360' -> identifier..accessibility_modifier -> reduce (target=185, len=6)
actionsTable[46165] = 112; // 'state 360' -> equality_operator -> shift (target=56, len=0)
actionsTable[46166] = 88; // 'state 360' -> relational_operator -> shift (target=44, len=0)
actionsTable[46167] = 114; // 'state 360' -> shift_operator -> shift (target=57, len=0)
actionsTable[46168] = 90; // 'state 360' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[46169] = 866; // 'state 360' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(3443, 46170, 46172); // 'state 360' -> regex..@par-gen.EOF -> reduce (target=185, len=6)
actionsTable.fill(798, 46208, 46213); // 'state 361' -> true..super -> shift (target=399, len=0)
actionsTable[46213] = 68; // 'state 361' -> { -> shift (target=34, len=0)
actionsTable[46216] = 4; // 'state 361' -> ( -> shift (target=2, len=0)
actionsTable[46226] = 806; // 'state 361' -> of -> shift (target=403, len=0)
actionsTable[46240] = 806; // 'state 361' -> from -> shift (target=403, len=0)
actionsTable[46244] = 806; // 'state 361' -> type -> shift (target=403, len=0)
actionsTable[46249] = 20; // 'state 361' -> [ -> shift (target=10, len=0)
actionsTable[46251] = 70; // 'state 361' -> async -> shift (target=35, len=0)
actionsTable[46252] = 72; // 'state 361' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 46255, 46257); // 'state 361' -> get..set -> shift (target=403, len=0)
actionsTable[46257] = 74; // 'state 361' -> class -> shift (target=37, len=0)
actionsTable[46262] = 28; // 'state 361' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 46267, 46269); // 'state 361' -> void..typeof -> shift (target=15, len=0)
actionsTable[46270] = 32; // 'state 361' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 46277, 46279); // 'state 361' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 46280, 46283); // 'state 361' -> !..delete -> shift (target=15, len=0)
actionsTable[46283] = 34; // 'state 361' -> await -> shift (target=17, len=0)
actionsTable[46286] = 818; // 'state 361' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 46288, 46291); // 'state 361' -> number..template_string -> shift (target=399, len=0)
actionsTable[46297] = 36; // 'state 361' -> update_operator -> shift (target=18, len=0)
actionsTable[46298] = 798; // 'state 361' -> regex -> shift (target=399, len=0)
actionsTable[46344] = 86; // 'state 362' -> ( -> shift (target=43, len=0)
actionsTable[46345] = 2325; // 'state 362' -> ) -> reduce (target=138, len=4)
actionsTable[46355] = 88; // 'state 362' -> in -> shift (target=44, len=0)
actionsTable[46369] = 2325; // 'state 362' -> , -> reduce (target=138, len=4)
actionsTable[46370] = 90; // 'state 362' -> * -> shift (target=45, len=0)
actionsTable[46371] = 92; // 'state 362' -> as -> shift (target=46, len=0)
actionsTable[46377] = 94; // 'state 362' -> [ -> shift (target=47, len=0)
actionsTable.fill(88, 46390, 46392); // 'state 362' -> <..> -> shift (target=44, len=0)
actionsTable[46392] = 96; // 'state 362' -> | -> shift (target=48, len=0)
actionsTable[46393] = 98; // 'state 362' -> & -> shift (target=49, len=0)
actionsTable[46399] = 100; // 'state 362' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 46400, 46402); // 'state 362' -> ||..?? -> shift (target=51, len=0)
actionsTable[46402] = 104; // 'state 362' -> && -> shift (target=52, len=0)
actionsTable[46403] = 106; // 'state 362' -> ^ -> shift (target=53, len=0)
actionsTable[46404] = 88; // 'state 362' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 46405, 46407); // 'state 362' -> +..- -> shift (target=54, len=0)
actionsTable[46407] = 90; // 'state 362' -> ** -> shift (target=45, len=0)
actionsTable[46412] = 110; // 'state 362' -> ?. -> shift (target=55, len=0)
actionsTable[46413] = 864; // 'state 362' -> . -> shift (target=432, len=0)
actionsTable[46421] = 112; // 'state 362' -> equality_operator -> shift (target=56, len=0)
actionsTable[46422] = 88; // 'state 362' -> relational_operator -> shift (target=44, len=0)
actionsTable[46423] = 114; // 'state 362' -> shift_operator -> shift (target=57, len=0)
actionsTable[46424] = 90; // 'state 362' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[46425] = 866; // 'state 362' -> update_operator -> shift (target=433, len=0)
actionsTable[46469] = 80; // 'state 363' -> { -> shift (target=40, len=0)
actionsTable[46491] = 164; // 'state 363' -> : -> shift (target=82, len=0)
actionsTable[46517] = 164; // 'state 363' -> ?: -> shift (target=82, len=0)
actionsTable[46597] = 80; // 'state 364' -> { -> shift (target=40, len=0)
actionsTable.fill(798, 46720, 46725); // 'state 365' -> true..super -> shift (target=399, len=0)
actionsTable[46725] = 68; // 'state 365' -> { -> shift (target=34, len=0)
actionsTable[46728] = 4; // 'state 365' -> ( -> shift (target=2, len=0)
actionsTable[46738] = 806; // 'state 365' -> of -> shift (target=403, len=0)
actionsTable[46752] = 806; // 'state 365' -> from -> shift (target=403, len=0)
actionsTable[46756] = 806; // 'state 365' -> type -> shift (target=403, len=0)
actionsTable[46761] = 20; // 'state 365' -> [ -> shift (target=10, len=0)
actionsTable[46763] = 70; // 'state 365' -> async -> shift (target=35, len=0)
actionsTable[46764] = 72; // 'state 365' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 46767, 46769); // 'state 365' -> get..set -> shift (target=403, len=0)
actionsTable[46769] = 74; // 'state 365' -> class -> shift (target=37, len=0)
actionsTable[46774] = 28; // 'state 365' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 46779, 46781); // 'state 365' -> void..typeof -> shift (target=15, len=0)
actionsTable[46782] = 32; // 'state 365' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 46789, 46791); // 'state 365' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 46792, 46795); // 'state 365' -> !..delete -> shift (target=15, len=0)
actionsTable[46795] = 34; // 'state 365' -> await -> shift (target=17, len=0)
actionsTable[46798] = 818; // 'state 365' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 46800, 46803); // 'state 365' -> number..template_string -> shift (target=399, len=0)
actionsTable[46809] = 36; // 'state 365' -> update_operator -> shift (target=18, len=0)
actionsTable[46810] = 798; // 'state 365' -> regex -> shift (target=399, len=0)
actionsTable[46854] = 2349; // 'state 366' -> } -> reduce (target=150, len=4)
actionsTable[46856] = 86; // 'state 366' -> ( -> shift (target=43, len=0)
actionsTable[46861] = 1468; // 'state 366' -> ; -> shift (target=734, len=0)
actionsTable[46866] = 2349; // 'state 366' -> of -> reduce (target=150, len=4)
actionsTable[46867] = 88; // 'state 366' -> in -> shift (target=44, len=0)
actionsTable[46880] = 2349; // 'state 366' -> from -> reduce (target=150, len=4)
actionsTable[46882] = 90; // 'state 366' -> * -> shift (target=45, len=0)
actionsTable[46883] = 92; // 'state 366' -> as -> shift (target=46, len=0)
actionsTable[46884] = 2349; // 'state 366' -> type -> reduce (target=150, len=4)
actionsTable[46889] = 94; // 'state 366' -> [ -> shift (target=47, len=0)
actionsTable[46891] = 2349; // 'state 366' -> async -> reduce (target=150, len=4)
actionsTable.fill(2349, 46893, 46897); // 'state 366' -> static..set -> reduce (target=150, len=4)
actionsTable.fill(88, 46902, 46904); // 'state 366' -> <..> -> shift (target=44, len=0)
actionsTable[46904] = 96; // 'state 366' -> | -> shift (target=48, len=0)
actionsTable[46905] = 98; // 'state 366' -> & -> shift (target=49, len=0)
actionsTable[46911] = 100; // 'state 366' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 46912, 46914); // 'state 366' -> ||..?? -> shift (target=51, len=0)
actionsTable[46914] = 104; // 'state 366' -> && -> shift (target=52, len=0)
actionsTable[46915] = 106; // 'state 366' -> ^ -> shift (target=53, len=0)
actionsTable[46916] = 88; // 'state 366' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 46917, 46919); // 'state 366' -> +..- -> shift (target=54, len=0)
actionsTable[46919] = 90; // 'state 366' -> ** -> shift (target=45, len=0)
actionsTable[46924] = 110; // 'state 366' -> ?. -> shift (target=55, len=0)
actionsTable[46925] = 864; // 'state 366' -> . -> shift (target=432, len=0)
actionsTable.fill(2349, 46926, 46930); // 'state 366' -> identifier..string -> reduce (target=150, len=4)
actionsTable[46931] = 2349; // 'state 366' -> accessibility_modifier -> reduce (target=150, len=4)
actionsTable[46933] = 112; // 'state 366' -> equality_operator -> shift (target=56, len=0)
actionsTable[46934] = 88; // 'state 366' -> relational_operator -> shift (target=44, len=0)
actionsTable[46935] = 114; // 'state 366' -> shift_operator -> shift (target=57, len=0)
actionsTable[46936] = 90; // 'state 366' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[46937] = 866; // 'state 366' -> update_operator -> shift (target=433, len=0)
actionsTable[46984] = 86; // 'state 367' -> ( -> shift (target=43, len=0)
actionsTable[46985] = 2843; // 'state 367' -> ) -> reduce (target=141, len=5)
actionsTable[46995] = 88; // 'state 367' -> in -> shift (target=44, len=0)
actionsTable[47009] = 2843; // 'state 367' -> , -> reduce (target=141, len=5)
actionsTable[47010] = 90; // 'state 367' -> * -> shift (target=45, len=0)
actionsTable[47011] = 92; // 'state 367' -> as -> shift (target=46, len=0)
actionsTable[47017] = 94; // 'state 367' -> [ -> shift (target=47, len=0)
actionsTable.fill(88, 47030, 47032); // 'state 367' -> <..> -> shift (target=44, len=0)
actionsTable[47032] = 96; // 'state 367' -> | -> shift (target=48, len=0)
actionsTable[47033] = 98; // 'state 367' -> & -> shift (target=49, len=0)
actionsTable[47039] = 100; // 'state 367' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 47040, 47042); // 'state 367' -> ||..?? -> shift (target=51, len=0)
actionsTable[47042] = 104; // 'state 367' -> && -> shift (target=52, len=0)
actionsTable[47043] = 106; // 'state 367' -> ^ -> shift (target=53, len=0)
actionsTable[47044] = 88; // 'state 367' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 47045, 47047); // 'state 367' -> +..- -> shift (target=54, len=0)
actionsTable[47047] = 90; // 'state 367' -> ** -> shift (target=45, len=0)
actionsTable[47052] = 110; // 'state 367' -> ?. -> shift (target=55, len=0)
actionsTable[47053] = 864; // 'state 367' -> . -> shift (target=432, len=0)
actionsTable[47061] = 112; // 'state 367' -> equality_operator -> shift (target=56, len=0)
actionsTable[47062] = 88; // 'state 367' -> relational_operator -> shift (target=44, len=0)
actionsTable[47063] = 114; // 'state 367' -> shift_operator -> shift (target=57, len=0)
actionsTable[47064] = 90; // 'state 367' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[47065] = 866; // 'state 367' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(942, 47104, 47107); // 'state 368' -> true..null -> shift (target=471, len=0)
actionsTable[47109] = 262; // 'state 368' -> { -> shift (target=131, len=0)
actionsTable[47112] = 264; // 'state 368' -> ( -> shift (target=132, len=0)
actionsTable[47145] = 266; // 'state 368' -> [ -> shift (target=133, len=0)
actionsTable[47158] = 28; // 'state 368' -> < -> shift (target=14, len=0)
actionsTable[47159] = 1470; // 'state 368' -> > -> shift (target=735, len=0)
actionsTable[47160] = 268; // 'state 368' -> | -> shift (target=134, len=0)
actionsTable[47163] = 942; // 'state 368' -> void -> shift (target=471, len=0)
actionsTable[47164] = 944; // 'state 368' -> typeof -> shift (target=472, len=0)
actionsTable[47182] = 270; // 'state 368' -> identifier -> shift (target=135, len=0)
actionsTable.fill(942, 47184, 47186); // 'state 368' -> number..string -> shift (target=471, len=0)
actionsTable.fill(798, 47232, 47237); // 'state 369' -> true..super -> shift (target=399, len=0)
actionsTable[47237] = 2; // 'state 369' -> { -> shift (target=1, len=0)
actionsTable[47239] = 800; // 'state 369' -> if -> shift (target=400, len=0)
actionsTable[47240] = 4; // 'state 369' -> ( -> shift (target=2, len=0)
actionsTable[47243] = 802; // 'state 369' -> while -> shift (target=401, len=0)
actionsTable[47244] = 6; // 'state 369' -> do -> shift (target=3, len=0)
actionsTable[47246] = 804; // 'state 369' -> for -> shift (target=402, len=0)
actionsTable.fill(8, 47247, 47250); // 'state 369' -> const..var -> shift (target=4, len=0)
actionsTable[47250] = 806; // 'state 369' -> of -> shift (target=403, len=0)
actionsTable[47252] = 10; // 'state 369' -> return -> shift (target=5, len=0)
actionsTable[47253] = 12; // 'state 369' -> throw -> shift (target=6, len=0)
actionsTable[47254] = 14; // 'state 369' -> try -> shift (target=7, len=0)
actionsTable[47257] = 808; // 'state 369' -> switch -> shift (target=404, len=0)
actionsTable[47261] = 810; // 'state 369' -> break -> shift (target=405, len=0)
actionsTable[47262] = 812; // 'state 369' -> continue -> shift (target=406, len=0)
actionsTable[47263] = 16; // 'state 369' -> import -> shift (target=8, len=0)
actionsTable[47264] = 806; // 'state 369' -> from -> shift (target=403, len=0)
actionsTable[47268] = 814; // 'state 369' -> type -> shift (target=407, len=0)
actionsTable[47269] = 18; // 'state 369' -> export -> shift (target=9, len=0)
actionsTable[47273] = 20; // 'state 369' -> [ -> shift (target=10, len=0)
actionsTable[47275] = 22; // 'state 369' -> async -> shift (target=11, len=0)
actionsTable[47276] = 24; // 'state 369' -> function -> shift (target=12, len=0)
actionsTable.fill(806, 47279, 47281); // 'state 369' -> get..set -> shift (target=403, len=0)
actionsTable[47281] = 26; // 'state 369' -> class -> shift (target=13, len=0)
actionsTable[47284] = 816; // 'state 369' -> interface -> shift (target=408, len=0)
actionsTable[47286] = 28; // 'state 369' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 47291, 47293); // 'state 369' -> void..typeof -> shift (target=15, len=0)
actionsTable[47294] = 32; // 'state 369' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 47301, 47303); // 'state 369' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 47304, 47307); // 'state 369' -> !..delete -> shift (target=15, len=0)
actionsTable[47307] = 34; // 'state 369' -> await -> shift (target=17, len=0)
actionsTable[47310] = 818; // 'state 369' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 47312, 47315); // 'state 369' -> number..template_string -> shift (target=399, len=0)
actionsTable[47321] = 36; // 'state 369' -> update_operator -> shift (target=18, len=0)
actionsTable[47322] = 798; // 'state 369' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 47360, 47365); // 'state 370' -> true..super -> shift (target=399, len=0)
actionsTable[47365] = 2; // 'state 370' -> { -> shift (target=1, len=0)
actionsTable[47367] = 800; // 'state 370' -> if -> shift (target=400, len=0)
actionsTable[47368] = 4; // 'state 370' -> ( -> shift (target=2, len=0)
actionsTable[47371] = 802; // 'state 370' -> while -> shift (target=401, len=0)
actionsTable[47372] = 6; // 'state 370' -> do -> shift (target=3, len=0)
actionsTable[47374] = 804; // 'state 370' -> for -> shift (target=402, len=0)
actionsTable.fill(8, 47375, 47378); // 'state 370' -> const..var -> shift (target=4, len=0)
actionsTable[47378] = 806; // 'state 370' -> of -> shift (target=403, len=0)
actionsTable[47380] = 10; // 'state 370' -> return -> shift (target=5, len=0)
actionsTable[47381] = 12; // 'state 370' -> throw -> shift (target=6, len=0)
actionsTable[47382] = 14; // 'state 370' -> try -> shift (target=7, len=0)
actionsTable[47385] = 808; // 'state 370' -> switch -> shift (target=404, len=0)
actionsTable[47389] = 810; // 'state 370' -> break -> shift (target=405, len=0)
actionsTable[47390] = 812; // 'state 370' -> continue -> shift (target=406, len=0)
actionsTable[47391] = 16; // 'state 370' -> import -> shift (target=8, len=0)
actionsTable[47392] = 806; // 'state 370' -> from -> shift (target=403, len=0)
actionsTable[47396] = 814; // 'state 370' -> type -> shift (target=407, len=0)
actionsTable[47397] = 18; // 'state 370' -> export -> shift (target=9, len=0)
actionsTable[47401] = 20; // 'state 370' -> [ -> shift (target=10, len=0)
actionsTable[47403] = 22; // 'state 370' -> async -> shift (target=11, len=0)
actionsTable[47404] = 24; // 'state 370' -> function -> shift (target=12, len=0)
actionsTable.fill(806, 47407, 47409); // 'state 370' -> get..set -> shift (target=403, len=0)
actionsTable[47409] = 26; // 'state 370' -> class -> shift (target=13, len=0)
actionsTable[47412] = 816; // 'state 370' -> interface -> shift (target=408, len=0)
actionsTable[47414] = 28; // 'state 370' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 47419, 47421); // 'state 370' -> void..typeof -> shift (target=15, len=0)
actionsTable[47422] = 32; // 'state 370' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 47429, 47431); // 'state 370' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 47432, 47435); // 'state 370' -> !..delete -> shift (target=15, len=0)
actionsTable[47435] = 34; // 'state 370' -> await -> shift (target=17, len=0)
actionsTable[47438] = 818; // 'state 370' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 47440, 47443); // 'state 370' -> number..template_string -> shift (target=399, len=0)
actionsTable[47449] = 36; // 'state 370' -> update_operator -> shift (target=18, len=0)
actionsTable[47450] = 798; // 'state 370' -> regex -> shift (target=399, len=0)
actionsTable[47496] = 86; // 'state 371' -> ( -> shift (target=43, len=0)
actionsTable[47497] = 774; // 'state 371' -> ) -> shift (target=387, len=0)
actionsTable[47507] = 88; // 'state 371' -> in -> shift (target=44, len=0)
actionsTable[47522] = 90; // 'state 371' -> * -> shift (target=45, len=0)
actionsTable[47523] = 92; // 'state 371' -> as -> shift (target=46, len=0)
actionsTable[47529] = 94; // 'state 371' -> [ -> shift (target=47, len=0)
actionsTable.fill(88, 47542, 47544); // 'state 371' -> <..> -> shift (target=44, len=0)
actionsTable[47544] = 96; // 'state 371' -> | -> shift (target=48, len=0)
actionsTable[47545] = 98; // 'state 371' -> & -> shift (target=49, len=0)
actionsTable[47551] = 100; // 'state 371' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 47552, 47554); // 'state 371' -> ||..?? -> shift (target=51, len=0)
actionsTable[47554] = 104; // 'state 371' -> && -> shift (target=52, len=0)
actionsTable[47555] = 106; // 'state 371' -> ^ -> shift (target=53, len=0)
actionsTable[47556] = 88; // 'state 371' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 47557, 47559); // 'state 371' -> +..- -> shift (target=54, len=0)
actionsTable[47559] = 90; // 'state 371' -> ** -> shift (target=45, len=0)
actionsTable[47564] = 110; // 'state 371' -> ?. -> shift (target=55, len=0)
actionsTable[47565] = 864; // 'state 371' -> . -> shift (target=432, len=0)
actionsTable[47573] = 112; // 'state 371' -> equality_operator -> shift (target=56, len=0)
actionsTable[47574] = 88; // 'state 371' -> relational_operator -> shift (target=44, len=0)
actionsTable[47575] = 114; // 'state 371' -> shift_operator -> shift (target=57, len=0)
actionsTable[47576] = 90; // 'state 371' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[47577] = 866; // 'state 371' -> update_operator -> shift (target=433, len=0)
actionsTable[47621] = 80; // 'state 372' -> { -> shift (target=40, len=0)
actionsTable[47749] = 80; // 'state 373' -> { -> shift (target=40, len=0)
actionsTable[47880] = 86; // 'state 374' -> ( -> shift (target=43, len=0)
actionsTable[47891] = 88; // 'state 374' -> in -> shift (target=44, len=0)
actionsTable[47899] = 776; // 'state 374' -> : -> shift (target=388, len=0)
actionsTable[47906] = 90; // 'state 374' -> * -> shift (target=45, len=0)
actionsTable[47907] = 92; // 'state 374' -> as -> shift (target=46, len=0)
actionsTable[47913] = 94; // 'state 374' -> [ -> shift (target=47, len=0)
actionsTable.fill(88, 47926, 47928); // 'state 374' -> <..> -> shift (target=44, len=0)
actionsTable[47928] = 96; // 'state 374' -> | -> shift (target=48, len=0)
actionsTable[47929] = 98; // 'state 374' -> & -> shift (target=49, len=0)
actionsTable[47935] = 100; // 'state 374' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 47936, 47938); // 'state 374' -> ||..?? -> shift (target=51, len=0)
actionsTable[47938] = 104; // 'state 374' -> && -> shift (target=52, len=0)
actionsTable[47939] = 106; // 'state 374' -> ^ -> shift (target=53, len=0)
actionsTable[47940] = 88; // 'state 374' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 47941, 47943); // 'state 374' -> +..- -> shift (target=54, len=0)
actionsTable[47943] = 90; // 'state 374' -> ** -> shift (target=45, len=0)
actionsTable[47948] = 110; // 'state 374' -> ?. -> shift (target=55, len=0)
actionsTable[47949] = 864; // 'state 374' -> . -> shift (target=432, len=0)
actionsTable[47957] = 112; // 'state 374' -> equality_operator -> shift (target=56, len=0)
actionsTable[47958] = 88; // 'state 374' -> relational_operator -> shift (target=44, len=0)
actionsTable[47959] = 114; // 'state 374' -> shift_operator -> shift (target=57, len=0)
actionsTable[47960] = 90; // 'state 374' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[47961] = 866; // 'state 374' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(798, 48000, 48005); // 'state 375' -> true..super -> shift (target=399, len=0)
actionsTable[48005] = 2; // 'state 375' -> { -> shift (target=1, len=0)
actionsTable[48006] = 1251; // 'state 375' -> } -> reduce (target=113, len=2)
actionsTable[48007] = 800; // 'state 375' -> if -> shift (target=400, len=0)
actionsTable[48008] = 4; // 'state 375' -> ( -> shift (target=2, len=0)
actionsTable[48011] = 802; // 'state 375' -> while -> shift (target=401, len=0)
actionsTable[48012] = 6; // 'state 375' -> do -> shift (target=3, len=0)
actionsTable[48014] = 804; // 'state 375' -> for -> shift (target=402, len=0)
actionsTable.fill(8, 48015, 48018); // 'state 375' -> const..var -> shift (target=4, len=0)
actionsTable[48018] = 806; // 'state 375' -> of -> shift (target=403, len=0)
actionsTable[48020] = 10; // 'state 375' -> return -> shift (target=5, len=0)
actionsTable[48021] = 12; // 'state 375' -> throw -> shift (target=6, len=0)
actionsTable[48022] = 14; // 'state 375' -> try -> shift (target=7, len=0)
actionsTable[48025] = 808; // 'state 375' -> switch -> shift (target=404, len=0)
actionsTable[48026] = 1251; // 'state 375' -> case -> reduce (target=113, len=2)
actionsTable[48028] = 1251; // 'state 375' -> default -> reduce (target=113, len=2)
actionsTable[48029] = 810; // 'state 375' -> break -> shift (target=405, len=0)
actionsTable[48030] = 812; // 'state 375' -> continue -> shift (target=406, len=0)
actionsTable[48031] = 16; // 'state 375' -> import -> shift (target=8, len=0)
actionsTable[48032] = 806; // 'state 375' -> from -> shift (target=403, len=0)
actionsTable[48036] = 814; // 'state 375' -> type -> shift (target=407, len=0)
actionsTable[48037] = 18; // 'state 375' -> export -> shift (target=9, len=0)
actionsTable[48041] = 20; // 'state 375' -> [ -> shift (target=10, len=0)
actionsTable[48043] = 22; // 'state 375' -> async -> shift (target=11, len=0)
actionsTable[48044] = 24; // 'state 375' -> function -> shift (target=12, len=0)
actionsTable.fill(806, 48047, 48049); // 'state 375' -> get..set -> shift (target=403, len=0)
actionsTable[48049] = 26; // 'state 375' -> class -> shift (target=13, len=0)
actionsTable[48052] = 816; // 'state 375' -> interface -> shift (target=408, len=0)
actionsTable[48054] = 28; // 'state 375' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 48059, 48061); // 'state 375' -> void..typeof -> shift (target=15, len=0)
actionsTable[48062] = 32; // 'state 375' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 48069, 48071); // 'state 375' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 48072, 48075); // 'state 375' -> !..delete -> shift (target=15, len=0)
actionsTable[48075] = 34; // 'state 375' -> await -> shift (target=17, len=0)
actionsTable[48078] = 818; // 'state 375' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 48080, 48083); // 'state 375' -> number..template_string -> shift (target=399, len=0)
actionsTable[48089] = 36; // 'state 375' -> update_operator -> shift (target=18, len=0)
actionsTable[48090] = 798; // 'state 375' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 48128, 48133); // 'state 376' -> true..super -> shift (target=399, len=0)
actionsTable[48133] = 562; // 'state 376' -> { -> shift (target=281, len=0)
actionsTable[48136] = 4; // 'state 376' -> ( -> shift (target=2, len=0)
actionsTable[48146] = 806; // 'state 376' -> of -> shift (target=403, len=0)
actionsTable[48160] = 806; // 'state 376' -> from -> shift (target=403, len=0)
actionsTable[48164] = 806; // 'state 376' -> type -> shift (target=403, len=0)
actionsTable[48169] = 566; // 'state 376' -> [ -> shift (target=283, len=0)
actionsTable[48171] = 70; // 'state 376' -> async -> shift (target=35, len=0)
actionsTable[48172] = 72; // 'state 376' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 48175, 48177); // 'state 376' -> get..set -> shift (target=403, len=0)
actionsTable[48177] = 74; // 'state 376' -> class -> shift (target=37, len=0)
actionsTable[48182] = 28; // 'state 376' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 48187, 48189); // 'state 376' -> void..typeof -> shift (target=15, len=0)
actionsTable[48190] = 32; // 'state 376' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 48197, 48199); // 'state 376' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 48200, 48203); // 'state 376' -> !..delete -> shift (target=15, len=0)
actionsTable[48203] = 34; // 'state 376' -> await -> shift (target=17, len=0)
actionsTable[48206] = 1360; // 'state 376' -> identifier -> shift (target=680, len=0)
actionsTable.fill(798, 48208, 48211); // 'state 376' -> number..template_string -> shift (target=399, len=0)
actionsTable[48217] = 36; // 'state 376' -> update_operator -> shift (target=18, len=0)
actionsTable[48218] = 798; // 'state 376' -> regex -> shift (target=399, len=0)
actionsTable[48261] = 80; // 'state 377' -> { -> shift (target=40, len=0)
actionsTable[48262] = 1885; // 'state 377' -> } -> reduce (target=174, len=3)
actionsTable[48269] = 1885; // 'state 377' -> ; -> reduce (target=174, len=3)
actionsTable[48274] = 1885; // 'state 377' -> of -> reduce (target=174, len=3)
actionsTable[48283] = 164; // 'state 377' -> : -> shift (target=82, len=0)
actionsTable.fill(1885, 48288, 48290); // 'state 377' -> from.., -> reduce (target=174, len=3)
actionsTable[48292] = 1885; // 'state 377' -> type -> reduce (target=174, len=3)
actionsTable[48297] = 1885; // 'state 377' -> [ -> reduce (target=174, len=3)
actionsTable[48299] = 1885; // 'state 377' -> async -> reduce (target=174, len=3)
actionsTable.fill(1885, 48302, 48305); // 'state 377' -> readonly..set -> reduce (target=174, len=3)
actionsTable[48309] = 164; // 'state 377' -> ?: -> shift (target=82, len=0)
actionsTable[48318] = 1885; // 'state 377' -> new -> reduce (target=174, len=3)
actionsTable[48334] = 1885; // 'state 377' -> identifier -> reduce (target=174, len=3)
actionsTable.fill(1885, 48336, 48338); // 'state 377' -> number..string -> reduce (target=174, len=3)
actionsTable[48389] = 80; // 'state 378' -> { -> shift (target=40, len=0)
actionsTable[48390] = 1885; // 'state 378' -> } -> reduce (target=174, len=3)
actionsTable[48397] = 1885; // 'state 378' -> ; -> reduce (target=174, len=3)
actionsTable[48402] = 1885; // 'state 378' -> of -> reduce (target=174, len=3)
actionsTable.fill(1885, 48416, 48418); // 'state 378' -> from.., -> reduce (target=174, len=3)
actionsTable[48420] = 1885; // 'state 378' -> type -> reduce (target=174, len=3)
actionsTable[48425] = 1885; // 'state 378' -> [ -> reduce (target=174, len=3)
actionsTable[48427] = 1885; // 'state 378' -> async -> reduce (target=174, len=3)
actionsTable.fill(1885, 48430, 48433); // 'state 378' -> readonly..set -> reduce (target=174, len=3)
actionsTable[48446] = 1885; // 'state 378' -> new -> reduce (target=174, len=3)
actionsTable[48462] = 1885; // 'state 378' -> identifier -> reduce (target=174, len=3)
actionsTable.fill(1885, 48464, 48466); // 'state 378' -> number..string -> reduce (target=174, len=3)
actionsTable.fill(1218, 48512, 48515); // 'state 379' -> true..null -> shift (target=609, len=0)
actionsTable.fill(798, 48515, 48517); // 'state 379' -> this..super -> shift (target=399, len=0)
actionsTable[48517] = 760; // 'state 379' -> { -> shift (target=380, len=0)
actionsTable[48520] = 576; // 'state 379' -> ( -> shift (target=288, len=0)
actionsTable[48530] = 806; // 'state 379' -> of -> shift (target=403, len=0)
actionsTable[48544] = 806; // 'state 379' -> from -> shift (target=403, len=0)
actionsTable[48548] = 806; // 'state 379' -> type -> shift (target=403, len=0)
actionsTable[48553] = 424; // 'state 379' -> [ -> shift (target=212, len=0)
actionsTable[48555] = 70; // 'state 379' -> async -> shift (target=35, len=0)
actionsTable[48556] = 72; // 'state 379' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 48559, 48561); // 'state 379' -> get..set -> shift (target=403, len=0)
actionsTable[48561] = 74; // 'state 379' -> class -> shift (target=37, len=0)
actionsTable[48566] = 28; // 'state 379' -> < -> shift (target=14, len=0)
actionsTable[48568] = 268; // 'state 379' -> | -> shift (target=134, len=0)
actionsTable[48571] = 578; // 'state 379' -> void -> shift (target=289, len=0)
actionsTable[48572] = 580; // 'state 379' -> typeof -> shift (target=290, len=0)
actionsTable[48574] = 32; // 'state 379' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 48581, 48583); // 'state 379' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 48584, 48587); // 'state 379' -> !..delete -> shift (target=15, len=0)
actionsTable[48587] = 34; // 'state 379' -> await -> shift (target=17, len=0)
actionsTable[48590] = 582; // 'state 379' -> identifier -> shift (target=291, len=0)
actionsTable.fill(1218, 48592, 48594); // 'state 379' -> number..string -> shift (target=609, len=0)
actionsTable[48594] = 798; // 'state 379' -> template_string -> shift (target=399, len=0)
actionsTable[48601] = 36; // 'state 379' -> update_operator -> shift (target=18, len=0)
actionsTable[48602] = 798; // 'state 379' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 48640, 48645); // 'state 380' -> true..super -> shift (target=399, len=0)
actionsTable[48645] = 2; // 'state 380' -> { -> shift (target=1, len=0)
actionsTable[48646] = 1480; // 'state 380' -> } -> shift (target=740, len=0)
actionsTable[48647] = 800; // 'state 380' -> if -> shift (target=400, len=0)
actionsTable[48648] = 4; // 'state 380' -> ( -> shift (target=2, len=0)
actionsTable[48651] = 802; // 'state 380' -> while -> shift (target=401, len=0)
actionsTable[48652] = 6; // 'state 380' -> do -> shift (target=3, len=0)
actionsTable[48654] = 804; // 'state 380' -> for -> shift (target=402, len=0)
actionsTable.fill(8, 48655, 48658); // 'state 380' -> const..var -> shift (target=4, len=0)
actionsTable[48658] = 806; // 'state 380' -> of -> shift (target=403, len=0)
actionsTable[48660] = 10; // 'state 380' -> return -> shift (target=5, len=0)
actionsTable[48661] = 12; // 'state 380' -> throw -> shift (target=6, len=0)
actionsTable[48662] = 14; // 'state 380' -> try -> shift (target=7, len=0)
actionsTable[48665] = 808; // 'state 380' -> switch -> shift (target=404, len=0)
actionsTable[48669] = 810; // 'state 380' -> break -> shift (target=405, len=0)
actionsTable[48670] = 812; // 'state 380' -> continue -> shift (target=406, len=0)
actionsTable[48671] = 16; // 'state 380' -> import -> shift (target=8, len=0)
actionsTable[48672] = 806; // 'state 380' -> from -> shift (target=403, len=0)
actionsTable[48676] = 814; // 'state 380' -> type -> shift (target=407, len=0)
actionsTable[48677] = 18; // 'state 380' -> export -> shift (target=9, len=0)
actionsTable[48680] = 48; // 'state 380' -> ... -> shift (target=24, len=0)
actionsTable[48681] = 782; // 'state 380' -> [ -> shift (target=391, len=0)
actionsTable[48683] = 52; // 'state 380' -> async -> shift (target=26, len=0)
actionsTable[48684] = 24; // 'state 380' -> function -> shift (target=12, len=0)
actionsTable[48686] = 438; // 'state 380' -> readonly -> shift (target=219, len=0)
actionsTable.fill(54, 48687, 48689); // 'state 380' -> get..set -> shift (target=27, len=0)
actionsTable[48689] = 26; // 'state 380' -> class -> shift (target=13, len=0)
actionsTable[48692] = 816; // 'state 380' -> interface -> shift (target=408, len=0)
actionsTable[48694] = 28; // 'state 380' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 48699, 48701); // 'state 380' -> void..typeof -> shift (target=15, len=0)
actionsTable[48702] = 784; // 'state 380' -> new -> shift (target=392, len=0)
actionsTable.fill(30, 48709, 48711); // 'state 380' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 48712, 48715); // 'state 380' -> !..delete -> shift (target=15, len=0)
actionsTable[48715] = 34; // 'state 380' -> await -> shift (target=17, len=0)
actionsTable[48718] = 838; // 'state 380' -> identifier -> shift (target=419, len=0)
actionsTable.fill(840, 48720, 48722); // 'state 380' -> number..string -> shift (target=420, len=0)
actionsTable[48722] = 798; // 'state 380' -> template_string -> shift (target=399, len=0)
actionsTable[48729] = 36; // 'state 380' -> update_operator -> shift (target=18, len=0)
actionsTable[48730] = 798; // 'state 380' -> regex -> shift (target=399, len=0)
actionsTable.fill(942, 48768, 48771); // 'state 381' -> true..null -> shift (target=471, len=0)
actionsTable[48773] = 262; // 'state 381' -> { -> shift (target=131, len=0)
actionsTable[48776] = 264; // 'state 381' -> ( -> shift (target=132, len=0)
actionsTable[48809] = 266; // 'state 381' -> [ -> shift (target=133, len=0)
actionsTable[48822] = 28; // 'state 381' -> < -> shift (target=14, len=0)
actionsTable[48824] = 268; // 'state 381' -> | -> shift (target=134, len=0)
actionsTable[48827] = 942; // 'state 381' -> void -> shift (target=471, len=0)
actionsTable[48828] = 944; // 'state 381' -> typeof -> shift (target=472, len=0)
actionsTable[48846] = 270; // 'state 381' -> identifier -> shift (target=135, len=0)
actionsTable.fill(942, 48848, 48850); // 'state 381' -> number..string -> shift (target=471, len=0)
actionsTable[48901] = 80; // 'state 382' -> { -> shift (target=40, len=0)
actionsTable[48909] = 1460; // 'state 382' -> ; -> shift (target=730, len=0)
actionsTable[49030] = 2823; // 'state 383' -> } -> reduce (target=131, len=5)
actionsTable[49032] = 86; // 'state 383' -> ( -> shift (target=43, len=0)
actionsTable[49043] = 88; // 'state 383' -> in -> shift (target=44, len=0)
actionsTable[49057] = 2823; // 'state 383' -> , -> reduce (target=131, len=5)
actionsTable[49058] = 90; // 'state 383' -> * -> shift (target=45, len=0)
actionsTable[49059] = 92; // 'state 383' -> as -> shift (target=46, len=0)
actionsTable[49065] = 94; // 'state 383' -> [ -> shift (target=47, len=0)
actionsTable.fill(88, 49078, 49080); // 'state 383' -> <..> -> shift (target=44, len=0)
actionsTable[49080] = 96; // 'state 383' -> | -> shift (target=48, len=0)
actionsTable[49081] = 98; // 'state 383' -> & -> shift (target=49, len=0)
actionsTable[49087] = 100; // 'state 383' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 49088, 49090); // 'state 383' -> ||..?? -> shift (target=51, len=0)
actionsTable[49090] = 104; // 'state 383' -> && -> shift (target=52, len=0)
actionsTable[49091] = 106; // 'state 383' -> ^ -> shift (target=53, len=0)
actionsTable[49092] = 88; // 'state 383' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 49093, 49095); // 'state 383' -> +..- -> shift (target=54, len=0)
actionsTable[49095] = 90; // 'state 383' -> ** -> shift (target=45, len=0)
actionsTable[49100] = 110; // 'state 383' -> ?. -> shift (target=55, len=0)
actionsTable[49101] = 864; // 'state 383' -> . -> shift (target=432, len=0)
actionsTable[49109] = 112; // 'state 383' -> equality_operator -> shift (target=56, len=0)
actionsTable[49110] = 88; // 'state 383' -> relational_operator -> shift (target=44, len=0)
actionsTable[49111] = 114; // 'state 383' -> shift_operator -> shift (target=57, len=0)
actionsTable[49112] = 90; // 'state 383' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[49113] = 866; // 'state 383' -> update_operator -> shift (target=433, len=0)
actionsTable[49160] = 86; // 'state 384' -> ( -> shift (target=43, len=0)
actionsTable[49161] = 2837; // 'state 384' -> ) -> reduce (target=138, len=5)
actionsTable[49171] = 88; // 'state 384' -> in -> shift (target=44, len=0)
actionsTable[49185] = 2837; // 'state 384' -> , -> reduce (target=138, len=5)
actionsTable[49186] = 90; // 'state 384' -> * -> shift (target=45, len=0)
actionsTable[49187] = 92; // 'state 384' -> as -> shift (target=46, len=0)
actionsTable[49193] = 94; // 'state 384' -> [ -> shift (target=47, len=0)
actionsTable.fill(88, 49206, 49208); // 'state 384' -> <..> -> shift (target=44, len=0)
actionsTable[49208] = 96; // 'state 384' -> | -> shift (target=48, len=0)
actionsTable[49209] = 98; // 'state 384' -> & -> shift (target=49, len=0)
actionsTable[49215] = 100; // 'state 384' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 49216, 49218); // 'state 384' -> ||..?? -> shift (target=51, len=0)
actionsTable[49218] = 104; // 'state 384' -> && -> shift (target=52, len=0)
actionsTable[49219] = 106; // 'state 384' -> ^ -> shift (target=53, len=0)
actionsTable[49220] = 88; // 'state 384' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 49221, 49223); // 'state 384' -> +..- -> shift (target=54, len=0)
actionsTable[49223] = 90; // 'state 384' -> ** -> shift (target=45, len=0)
actionsTable[49228] = 110; // 'state 384' -> ?. -> shift (target=55, len=0)
actionsTable[49229] = 864; // 'state 384' -> . -> shift (target=432, len=0)
actionsTable[49237] = 112; // 'state 384' -> equality_operator -> shift (target=56, len=0)
actionsTable[49238] = 88; // 'state 384' -> relational_operator -> shift (target=44, len=0)
actionsTable[49239] = 114; // 'state 384' -> shift_operator -> shift (target=57, len=0)
actionsTable[49240] = 90; // 'state 384' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[49241] = 866; // 'state 384' -> update_operator -> shift (target=433, len=0)
actionsTable[49285] = 80; // 'state 385' -> { -> shift (target=40, len=0)
actionsTable[49414] = 2861; // 'state 386' -> } -> reduce (target=150, len=5)
actionsTable[49416] = 86; // 'state 386' -> ( -> shift (target=43, len=0)
actionsTable[49421] = 1490; // 'state 386' -> ; -> shift (target=745, len=0)
actionsTable[49426] = 2861; // 'state 386' -> of -> reduce (target=150, len=5)
actionsTable[49427] = 88; // 'state 386' -> in -> shift (target=44, len=0)
actionsTable[49440] = 2861; // 'state 386' -> from -> reduce (target=150, len=5)
actionsTable[49442] = 90; // 'state 386' -> * -> shift (target=45, len=0)
actionsTable[49443] = 92; // 'state 386' -> as -> shift (target=46, len=0)
actionsTable[49444] = 2861; // 'state 386' -> type -> reduce (target=150, len=5)
actionsTable[49449] = 94; // 'state 386' -> [ -> shift (target=47, len=0)
actionsTable[49451] = 2861; // 'state 386' -> async -> reduce (target=150, len=5)
actionsTable.fill(2861, 49453, 49457); // 'state 386' -> static..set -> reduce (target=150, len=5)
actionsTable.fill(88, 49462, 49464); // 'state 386' -> <..> -> shift (target=44, len=0)
actionsTable[49464] = 96; // 'state 386' -> | -> shift (target=48, len=0)
actionsTable[49465] = 98; // 'state 386' -> & -> shift (target=49, len=0)
actionsTable[49471] = 100; // 'state 386' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 49472, 49474); // 'state 386' -> ||..?? -> shift (target=51, len=0)
actionsTable[49474] = 104; // 'state 386' -> && -> shift (target=52, len=0)
actionsTable[49475] = 106; // 'state 386' -> ^ -> shift (target=53, len=0)
actionsTable[49476] = 88; // 'state 386' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 49477, 49479); // 'state 386' -> +..- -> shift (target=54, len=0)
actionsTable[49479] = 90; // 'state 386' -> ** -> shift (target=45, len=0)
actionsTable[49484] = 110; // 'state 386' -> ?. -> shift (target=55, len=0)
actionsTable[49485] = 864; // 'state 386' -> . -> shift (target=432, len=0)
actionsTable.fill(2861, 49486, 49490); // 'state 386' -> identifier..string -> reduce (target=150, len=5)
actionsTable[49491] = 2861; // 'state 386' -> accessibility_modifier -> reduce (target=150, len=5)
actionsTable[49493] = 112; // 'state 386' -> equality_operator -> shift (target=56, len=0)
actionsTable[49494] = 88; // 'state 386' -> relational_operator -> shift (target=44, len=0)
actionsTable[49495] = 114; // 'state 386' -> shift_operator -> shift (target=57, len=0)
actionsTable[49496] = 90; // 'state 386' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[49497] = 866; // 'state 386' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(798, 49536, 49541); // 'state 387' -> true..super -> shift (target=399, len=0)
actionsTable[49541] = 2; // 'state 387' -> { -> shift (target=1, len=0)
actionsTable[49543] = 800; // 'state 387' -> if -> shift (target=400, len=0)
actionsTable[49544] = 4; // 'state 387' -> ( -> shift (target=2, len=0)
actionsTable[49547] = 802; // 'state 387' -> while -> shift (target=401, len=0)
actionsTable[49548] = 6; // 'state 387' -> do -> shift (target=3, len=0)
actionsTable[49550] = 804; // 'state 387' -> for -> shift (target=402, len=0)
actionsTable.fill(8, 49551, 49554); // 'state 387' -> const..var -> shift (target=4, len=0)
actionsTable[49554] = 806; // 'state 387' -> of -> shift (target=403, len=0)
actionsTable[49556] = 10; // 'state 387' -> return -> shift (target=5, len=0)
actionsTable[49557] = 12; // 'state 387' -> throw -> shift (target=6, len=0)
actionsTable[49558] = 14; // 'state 387' -> try -> shift (target=7, len=0)
actionsTable[49561] = 808; // 'state 387' -> switch -> shift (target=404, len=0)
actionsTable[49565] = 810; // 'state 387' -> break -> shift (target=405, len=0)
actionsTable[49566] = 812; // 'state 387' -> continue -> shift (target=406, len=0)
actionsTable[49567] = 16; // 'state 387' -> import -> shift (target=8, len=0)
actionsTable[49568] = 806; // 'state 387' -> from -> shift (target=403, len=0)
actionsTable[49572] = 814; // 'state 387' -> type -> shift (target=407, len=0)
actionsTable[49573] = 18; // 'state 387' -> export -> shift (target=9, len=0)
actionsTable[49577] = 20; // 'state 387' -> [ -> shift (target=10, len=0)
actionsTable[49579] = 22; // 'state 387' -> async -> shift (target=11, len=0)
actionsTable[49580] = 24; // 'state 387' -> function -> shift (target=12, len=0)
actionsTable.fill(806, 49583, 49585); // 'state 387' -> get..set -> shift (target=403, len=0)
actionsTable[49585] = 26; // 'state 387' -> class -> shift (target=13, len=0)
actionsTable[49588] = 816; // 'state 387' -> interface -> shift (target=408, len=0)
actionsTable[49590] = 28; // 'state 387' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 49595, 49597); // 'state 387' -> void..typeof -> shift (target=15, len=0)
actionsTable[49598] = 32; // 'state 387' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 49605, 49607); // 'state 387' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 49608, 49611); // 'state 387' -> !..delete -> shift (target=15, len=0)
actionsTable[49611] = 34; // 'state 387' -> await -> shift (target=17, len=0)
actionsTable[49614] = 818; // 'state 387' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 49616, 49619); // 'state 387' -> number..template_string -> shift (target=399, len=0)
actionsTable[49625] = 36; // 'state 387' -> update_operator -> shift (target=18, len=0)
actionsTable[49626] = 798; // 'state 387' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 49664, 49669); // 'state 388' -> true..super -> shift (target=399, len=0)
actionsTable[49669] = 2; // 'state 388' -> { -> shift (target=1, len=0)
actionsTable[49670] = 1761; // 'state 388' -> } -> reduce (target=112, len=3)
actionsTable[49671] = 800; // 'state 388' -> if -> shift (target=400, len=0)
actionsTable[49672] = 4; // 'state 388' -> ( -> shift (target=2, len=0)
actionsTable[49675] = 802; // 'state 388' -> while -> shift (target=401, len=0)
actionsTable[49676] = 6; // 'state 388' -> do -> shift (target=3, len=0)
actionsTable[49678] = 804; // 'state 388' -> for -> shift (target=402, len=0)
actionsTable.fill(8, 49679, 49682); // 'state 388' -> const..var -> shift (target=4, len=0)
actionsTable[49682] = 806; // 'state 388' -> of -> shift (target=403, len=0)
actionsTable[49684] = 10; // 'state 388' -> return -> shift (target=5, len=0)
actionsTable[49685] = 12; // 'state 388' -> throw -> shift (target=6, len=0)
actionsTable[49686] = 14; // 'state 388' -> try -> shift (target=7, len=0)
actionsTable[49689] = 808; // 'state 388' -> switch -> shift (target=404, len=0)
actionsTable[49690] = 1761; // 'state 388' -> case -> reduce (target=112, len=3)
actionsTable[49692] = 1761; // 'state 388' -> default -> reduce (target=112, len=3)
actionsTable[49693] = 810; // 'state 388' -> break -> shift (target=405, len=0)
actionsTable[49694] = 812; // 'state 388' -> continue -> shift (target=406, len=0)
actionsTable[49695] = 16; // 'state 388' -> import -> shift (target=8, len=0)
actionsTable[49696] = 806; // 'state 388' -> from -> shift (target=403, len=0)
actionsTable[49700] = 814; // 'state 388' -> type -> shift (target=407, len=0)
actionsTable[49701] = 18; // 'state 388' -> export -> shift (target=9, len=0)
actionsTable[49705] = 20; // 'state 388' -> [ -> shift (target=10, len=0)
actionsTable[49707] = 22; // 'state 388' -> async -> shift (target=11, len=0)
actionsTable[49708] = 24; // 'state 388' -> function -> shift (target=12, len=0)
actionsTable.fill(806, 49711, 49713); // 'state 388' -> get..set -> shift (target=403, len=0)
actionsTable[49713] = 26; // 'state 388' -> class -> shift (target=13, len=0)
actionsTable[49716] = 816; // 'state 388' -> interface -> shift (target=408, len=0)
actionsTable[49718] = 28; // 'state 388' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 49723, 49725); // 'state 388' -> void..typeof -> shift (target=15, len=0)
actionsTable[49726] = 32; // 'state 388' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 49733, 49735); // 'state 388' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 49736, 49739); // 'state 388' -> !..delete -> shift (target=15, len=0)
actionsTable[49739] = 34; // 'state 388' -> await -> shift (target=17, len=0)
actionsTable[49742] = 818; // 'state 388' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 49744, 49747); // 'state 388' -> number..template_string -> shift (target=399, len=0)
actionsTable[49753] = 36; // 'state 388' -> update_operator -> shift (target=18, len=0)
actionsTable[49754] = 798; // 'state 388' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 49792, 49797); // 'state 389' -> true..super -> shift (target=399, len=0)
actionsTable[49797] = 2; // 'state 389' -> { -> shift (target=1, len=0)
actionsTable[49798] = 1763; // 'state 389' -> } -> reduce (target=113, len=3)
actionsTable[49799] = 800; // 'state 389' -> if -> shift (target=400, len=0)
actionsTable[49800] = 4; // 'state 389' -> ( -> shift (target=2, len=0)
actionsTable[49803] = 802; // 'state 389' -> while -> shift (target=401, len=0)
actionsTable[49804] = 6; // 'state 389' -> do -> shift (target=3, len=0)
actionsTable[49806] = 804; // 'state 389' -> for -> shift (target=402, len=0)
actionsTable.fill(8, 49807, 49810); // 'state 389' -> const..var -> shift (target=4, len=0)
actionsTable[49810] = 806; // 'state 389' -> of -> shift (target=403, len=0)
actionsTable[49812] = 10; // 'state 389' -> return -> shift (target=5, len=0)
actionsTable[49813] = 12; // 'state 389' -> throw -> shift (target=6, len=0)
actionsTable[49814] = 14; // 'state 389' -> try -> shift (target=7, len=0)
actionsTable[49817] = 808; // 'state 389' -> switch -> shift (target=404, len=0)
actionsTable[49818] = 1763; // 'state 389' -> case -> reduce (target=113, len=3)
actionsTable[49820] = 1763; // 'state 389' -> default -> reduce (target=113, len=3)
actionsTable[49821] = 810; // 'state 389' -> break -> shift (target=405, len=0)
actionsTable[49822] = 812; // 'state 389' -> continue -> shift (target=406, len=0)
actionsTable[49823] = 16; // 'state 389' -> import -> shift (target=8, len=0)
actionsTable[49824] = 806; // 'state 389' -> from -> shift (target=403, len=0)
actionsTable[49828] = 814; // 'state 389' -> type -> shift (target=407, len=0)
actionsTable[49829] = 18; // 'state 389' -> export -> shift (target=9, len=0)
actionsTable[49833] = 20; // 'state 389' -> [ -> shift (target=10, len=0)
actionsTable[49835] = 22; // 'state 389' -> async -> shift (target=11, len=0)
actionsTable[49836] = 24; // 'state 389' -> function -> shift (target=12, len=0)
actionsTable.fill(806, 49839, 49841); // 'state 389' -> get..set -> shift (target=403, len=0)
actionsTable[49841] = 26; // 'state 389' -> class -> shift (target=13, len=0)
actionsTable[49844] = 816; // 'state 389' -> interface -> shift (target=408, len=0)
actionsTable[49846] = 28; // 'state 389' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 49851, 49853); // 'state 389' -> void..typeof -> shift (target=15, len=0)
actionsTable[49854] = 32; // 'state 389' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 49861, 49863); // 'state 389' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 49864, 49867); // 'state 389' -> !..delete -> shift (target=15, len=0)
actionsTable[49867] = 34; // 'state 389' -> await -> shift (target=17, len=0)
actionsTable[49870] = 818; // 'state 389' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 49872, 49875); // 'state 389' -> number..template_string -> shift (target=399, len=0)
actionsTable[49881] = 36; // 'state 389' -> update_operator -> shift (target=18, len=0)
actionsTable[49882] = 798; // 'state 389' -> regex -> shift (target=399, len=0)
actionsTable[49925] = 80; // 'state 390' -> { -> shift (target=40, len=0)
actionsTable[49926] = 2397; // 'state 390' -> } -> reduce (target=174, len=4)
actionsTable[49933] = 2397; // 'state 390' -> ; -> reduce (target=174, len=4)
actionsTable[49938] = 2397; // 'state 390' -> of -> reduce (target=174, len=4)
actionsTable.fill(2397, 49952, 49954); // 'state 390' -> from.., -> reduce (target=174, len=4)
actionsTable[49956] = 2397; // 'state 390' -> type -> reduce (target=174, len=4)
actionsTable[49961] = 2397; // 'state 390' -> [ -> reduce (target=174, len=4)
actionsTable[49963] = 2397; // 'state 390' -> async -> reduce (target=174, len=4)
actionsTable.fill(2397, 49966, 49969); // 'state 390' -> readonly..set -> reduce (target=174, len=4)
actionsTable[49982] = 2397; // 'state 390' -> new -> reduce (target=174, len=4)
actionsTable[49998] = 2397; // 'state 390' -> identifier -> reduce (target=174, len=4)
actionsTable.fill(2397, 50000, 50002); // 'state 390' -> number..string -> reduce (target=174, len=4)
actionsTable.fill(798, 50048, 50053); // 'state 391' -> true..super -> shift (target=399, len=0)
actionsTable[50053] = 68; // 'state 391' -> { -> shift (target=34, len=0)
actionsTable[50056] = 4; // 'state 391' -> ( -> shift (target=2, len=0)
actionsTable[50066] = 806; // 'state 391' -> of -> shift (target=403, len=0)
actionsTable[50080] = 806; // 'state 391' -> from -> shift (target=403, len=0)
actionsTable[50081] = 192; // 'state 391' -> , -> shift (target=96, len=0)
actionsTable[50084] = 806; // 'state 391' -> type -> shift (target=403, len=0)
actionsTable[50088] = 48; // 'state 391' -> ... -> shift (target=24, len=0)
actionsTable[50089] = 20; // 'state 391' -> [ -> shift (target=10, len=0)
actionsTable[50090] = 906; // 'state 391' -> ] -> shift (target=453, len=0)
actionsTable[50091] = 70; // 'state 391' -> async -> shift (target=35, len=0)
actionsTable[50092] = 72; // 'state 391' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 50095, 50097); // 'state 391' -> get..set -> shift (target=403, len=0)
actionsTable[50097] = 74; // 'state 391' -> class -> shift (target=37, len=0)
actionsTable[50102] = 28; // 'state 391' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 50107, 50109); // 'state 391' -> void..typeof -> shift (target=15, len=0)
actionsTable[50110] = 32; // 'state 391' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 50117, 50119); // 'state 391' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 50120, 50123); // 'state 391' -> !..delete -> shift (target=15, len=0)
actionsTable[50123] = 34; // 'state 391' -> await -> shift (target=17, len=0)
actionsTable[50126] = 1240; // 'state 391' -> identifier -> shift (target=620, len=0)
actionsTable.fill(798, 50128, 50131); // 'state 391' -> number..template_string -> shift (target=399, len=0)
actionsTable[50137] = 36; // 'state 391' -> update_operator -> shift (target=18, len=0)
actionsTable[50138] = 798; // 'state 391' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 50176, 50181); // 'state 392' -> true..super -> shift (target=399, len=0)
actionsTable[50181] = 68; // 'state 392' -> { -> shift (target=34, len=0)
actionsTable[50184] = 790; // 'state 392' -> ( -> shift (target=395, len=0)
actionsTable[50194] = 806; // 'state 392' -> of -> shift (target=403, len=0)
actionsTable[50208] = 806; // 'state 392' -> from -> shift (target=403, len=0)
actionsTable[50212] = 806; // 'state 392' -> type -> shift (target=403, len=0)
actionsTable[50217] = 20; // 'state 392' -> [ -> shift (target=10, len=0)
actionsTable[50219] = 904; // 'state 392' -> async -> shift (target=452, len=0)
actionsTable[50220] = 72; // 'state 392' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 50223, 50225); // 'state 392' -> get..set -> shift (target=403, len=0)
actionsTable[50225] = 74; // 'state 392' -> class -> shift (target=37, len=0)
actionsTable[50230] = 28; // 'state 392' -> < -> shift (target=14, len=0)
actionsTable[50254] = 798; // 'state 392' -> identifier -> shift (target=399, len=0)
actionsTable.fill(798, 50256, 50259); // 'state 392' -> number..template_string -> shift (target=399, len=0)
actionsTable[50266] = 798; // 'state 392' -> regex -> shift (target=399, len=0)
actionsTable[50331] = 164; // 'state 393' -> : -> shift (target=82, len=0)
actionsTable[50357] = 164; // 'state 393' -> ?: -> shift (target=82, len=0)
actionsTable.fill(798, 50432, 50437); // 'state 394' -> true..super -> shift (target=399, len=0)
actionsTable[50437] = 2; // 'state 394' -> { -> shift (target=1, len=0)
actionsTable[50438] = 2273; // 'state 394' -> } -> reduce (target=112, len=4)
actionsTable[50439] = 800; // 'state 394' -> if -> shift (target=400, len=0)
actionsTable[50440] = 4; // 'state 394' -> ( -> shift (target=2, len=0)
actionsTable[50443] = 802; // 'state 394' -> while -> shift (target=401, len=0)
actionsTable[50444] = 6; // 'state 394' -> do -> shift (target=3, len=0)
actionsTable[50446] = 804; // 'state 394' -> for -> shift (target=402, len=0)
actionsTable.fill(8, 50447, 50450); // 'state 394' -> const..var -> shift (target=4, len=0)
actionsTable[50450] = 806; // 'state 394' -> of -> shift (target=403, len=0)
actionsTable[50452] = 10; // 'state 394' -> return -> shift (target=5, len=0)
actionsTable[50453] = 12; // 'state 394' -> throw -> shift (target=6, len=0)
actionsTable[50454] = 14; // 'state 394' -> try -> shift (target=7, len=0)
actionsTable[50457] = 808; // 'state 394' -> switch -> shift (target=404, len=0)
actionsTable[50458] = 2273; // 'state 394' -> case -> reduce (target=112, len=4)
actionsTable[50460] = 2273; // 'state 394' -> default -> reduce (target=112, len=4)
actionsTable[50461] = 810; // 'state 394' -> break -> shift (target=405, len=0)
actionsTable[50462] = 812; // 'state 394' -> continue -> shift (target=406, len=0)
actionsTable[50463] = 16; // 'state 394' -> import -> shift (target=8, len=0)
actionsTable[50464] = 806; // 'state 394' -> from -> shift (target=403, len=0)
actionsTable[50468] = 814; // 'state 394' -> type -> shift (target=407, len=0)
actionsTable[50469] = 18; // 'state 394' -> export -> shift (target=9, len=0)
actionsTable[50473] = 20; // 'state 394' -> [ -> shift (target=10, len=0)
actionsTable[50475] = 22; // 'state 394' -> async -> shift (target=11, len=0)
actionsTable[50476] = 24; // 'state 394' -> function -> shift (target=12, len=0)
actionsTable.fill(806, 50479, 50481); // 'state 394' -> get..set -> shift (target=403, len=0)
actionsTable[50481] = 26; // 'state 394' -> class -> shift (target=13, len=0)
actionsTable[50484] = 816; // 'state 394' -> interface -> shift (target=408, len=0)
actionsTable[50486] = 28; // 'state 394' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 50491, 50493); // 'state 394' -> void..typeof -> shift (target=15, len=0)
actionsTable[50494] = 32; // 'state 394' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 50501, 50503); // 'state 394' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 50504, 50507); // 'state 394' -> !..delete -> shift (target=15, len=0)
actionsTable[50507] = 34; // 'state 394' -> await -> shift (target=17, len=0)
actionsTable[50510] = 818; // 'state 394' -> identifier -> shift (target=409, len=0)
actionsTable.fill(798, 50512, 50515); // 'state 394' -> number..template_string -> shift (target=399, len=0)
actionsTable[50521] = 36; // 'state 394' -> update_operator -> shift (target=18, len=0)
actionsTable[50522] = 798; // 'state 394' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 50560, 50565); // 'state 395' -> true..super -> shift (target=399, len=0)
actionsTable[50565] = 562; // 'state 395' -> { -> shift (target=281, len=0)
actionsTable[50568] = 4; // 'state 395' -> ( -> shift (target=2, len=0)
actionsTable[50569] = 1004; // 'state 395' -> ) -> shift (target=502, len=0)
actionsTable[50578] = 806; // 'state 395' -> of -> shift (target=403, len=0)
actionsTable[50592] = 806; // 'state 395' -> from -> shift (target=403, len=0)
actionsTable[50596] = 806; // 'state 395' -> type -> shift (target=403, len=0)
actionsTable[50600] = 794; // 'state 395' -> ... -> shift (target=397, len=0)
actionsTable[50601] = 566; // 'state 395' -> [ -> shift (target=283, len=0)
actionsTable[50603] = 796; // 'state 395' -> async -> shift (target=398, len=0)
actionsTable[50604] = 72; // 'state 395' -> function -> shift (target=36, len=0)
actionsTable.fill(1008, 50605, 50607); // 'state 395' -> static..readonly -> shift (target=504, len=0)
actionsTable.fill(1020, 50607, 50609); // 'state 395' -> get..set -> shift (target=510, len=0)
actionsTable[50609] = 74; // 'state 395' -> class -> shift (target=37, len=0)
actionsTable[50614] = 28; // 'state 395' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 50619, 50621); // 'state 395' -> void..typeof -> shift (target=15, len=0)
actionsTable[50622] = 32; // 'state 395' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 50629, 50631); // 'state 395' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 50632, 50635); // 'state 395' -> !..delete -> shift (target=15, len=0)
actionsTable[50635] = 34; // 'state 395' -> await -> shift (target=17, len=0)
actionsTable[50638] = 1360; // 'state 395' -> identifier -> shift (target=680, len=0)
actionsTable.fill(798, 50640, 50643); // 'state 395' -> number..template_string -> shift (target=399, len=0)
actionsTable[50643] = 1008; // 'state 395' -> accessibility_modifier -> shift (target=504, len=0)
actionsTable[50649] = 36; // 'state 395' -> update_operator -> shift (target=18, len=0)
actionsTable[50650] = 798; // 'state 395' -> regex -> shift (target=399, len=0)
actionsTable[50715] = 164; // 'state 396' -> : -> shift (target=82, len=0)
actionsTable[50741] = 164; // 'state 396' -> ?: -> shift (target=82, len=0)
actionsTable.fill(798, 50816, 50821); // 'state 397' -> true..super -> shift (target=399, len=0)
actionsTable[50821] = 562; // 'state 397' -> { -> shift (target=281, len=0)
actionsTable[50824] = 4; // 'state 397' -> ( -> shift (target=2, len=0)
actionsTable[50834] = 806; // 'state 397' -> of -> shift (target=403, len=0)
actionsTable[50848] = 806; // 'state 397' -> from -> shift (target=403, len=0)
actionsTable[50852] = 806; // 'state 397' -> type -> shift (target=403, len=0)
actionsTable[50857] = 566; // 'state 397' -> [ -> shift (target=283, len=0)
actionsTable[50859] = 70; // 'state 397' -> async -> shift (target=35, len=0)
actionsTable[50860] = 72; // 'state 397' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 50863, 50865); // 'state 397' -> get..set -> shift (target=403, len=0)
actionsTable[50865] = 74; // 'state 397' -> class -> shift (target=37, len=0)
actionsTable[50870] = 28; // 'state 397' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 50875, 50877); // 'state 397' -> void..typeof -> shift (target=15, len=0)
actionsTable[50878] = 32; // 'state 397' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 50885, 50887); // 'state 397' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 50888, 50891); // 'state 397' -> !..delete -> shift (target=15, len=0)
actionsTable[50891] = 34; // 'state 397' -> await -> shift (target=17, len=0)
actionsTable[50894] = 1360; // 'state 397' -> identifier -> shift (target=680, len=0)
actionsTable.fill(798, 50896, 50899); // 'state 397' -> number..template_string -> shift (target=399, len=0)
actionsTable[50905] = 36; // 'state 397' -> update_operator -> shift (target=18, len=0)
actionsTable[50906] = 798; // 'state 397' -> regex -> shift (target=399, len=0)
actionsTable[50949] = 797; // 'state 398' -> { -> reduce (target=142, len=1)
actionsTable[50952] = 130; // 'state 398' -> ( -> shift (target=65, len=0)
actionsTable[50953] = 869; // 'state 398' -> ) -> reduce (target=178, len=1)
actionsTable[50963] = 869; // 'state 398' -> in -> reduce (target=178, len=1)
actionsTable.fill(869, 50977, 50980); // 'state 398' -> ,..as -> reduce (target=178, len=1)
actionsTable[50983] = 869; // 'state 398' -> = -> reduce (target=178, len=1)
actionsTable[50985] = 797; // 'state 398' -> [ -> reduce (target=142, len=1)
actionsTable[50987] = 797; // 'state 398' -> async -> reduce (target=142, len=1)
actionsTable[50988] = 224; // 'state 398' -> function -> shift (target=112, len=0)
actionsTable.fill(797, 50989, 50993); // 'state 398' -> static..set -> reduce (target=142, len=1)
actionsTable[50998] = 28; // 'state 398' -> < -> shift (target=14, len=0)
actionsTable.fill(869, 50999, 51002); // 'state 398' -> >..& -> reduce (target=178, len=1)
actionsTable.fill(869, 51007, 51016); // 'state 398' -> ?..** -> reduce (target=178, len=1)
actionsTable.fill(869, 51020, 51022); // 'state 398' -> ?.... -> reduce (target=178, len=1)
actionsTable[51022] = 896; // 'state 398' -> identifier -> shift (target=448, len=0)
actionsTable[51027] = 797; // 'state 398' -> accessibility_modifier -> reduce (target=142, len=1)
actionsTable.fill(869, 51028, 51034); // 'state 398' -> compound_assignment_operator..update_operator -> reduce (target=178, len=1)
actionsTable.fill(871, 51072, 51095); // 'state 399' -> true..try -> reduce (target=179, len=1)
actionsTable.fill(871, 51097, 51110); // 'state 399' -> switch..export -> reduce (target=179, len=1)
actionsTable.fill(871, 51113, 51122); // 'state 399' -> [..class -> reduce (target=179, len=1)
actionsTable.fill(871, 51123, 51125); // 'state 399' -> implements..interface -> reduce (target=179, len=1)
actionsTable.fill(871, 51126, 51130); // 'state 399' -> <..& -> reduce (target=179, len=1)
actionsTable.fill(871, 51131, 51133); // 'state 399' -> void..typeof -> reduce (target=179, len=1)
actionsTable.fill(871, 51134, 51156); // 'state 399' -> new..accessibility_modifier -> reduce (target=179, len=1)
actionsTable.fill(871, 51157, 51164); // 'state 399' -> equality_operator..@par-gen.EOF -> reduce (target=179, len=1)
actionsTable[51208] = 62; // 'state 400' -> ( -> shift (target=31, len=0)
actionsTable[51336] = 64; // 'state 401' -> ( -> shift (target=32, len=0)
actionsTable[51464] = 66; // 'state 402' -> ( -> shift (target=33, len=0)
actionsTable.fill(869, 51584, 51607); // 'state 403' -> true..try -> reduce (target=178, len=1)
actionsTable.fill(869, 51609, 51622); // 'state 403' -> switch..export -> reduce (target=178, len=1)
actionsTable[51623] = 869; // 'state 403' -> = -> reduce (target=178, len=1)
actionsTable.fill(869, 51625, 51634); // 'state 403' -> [..class -> reduce (target=178, len=1)
actionsTable.fill(869, 51635, 51642); // 'state 403' -> implements..& -> reduce (target=178, len=1)
actionsTable.fill(869, 51643, 51645); // 'state 403' -> void..typeof -> reduce (target=178, len=1)
actionsTable.fill(869, 51646, 51676); // 'state 403' -> new..@par-gen.EOF -> reduce (target=178, len=1)
actionsTable[51720] = 84; // 'state 404' -> ( -> shift (target=42, len=0)
actionsTable.fill(741, 51840, 51849); // 'state 405' -> true..( -> reduce (target=114, len=1)
actionsTable.fill(741, 51850, 51853); // 'state 405' -> else..do -> reduce (target=114, len=1)
actionsTable[51853] = 854; // 'state 405' -> ; -> shift (target=427, len=0)
actionsTable.fill(741, 51854, 51859); // 'state 405' -> for..of -> reduce (target=114, len=1)
actionsTable.fill(741, 51860, 51863); // 'state 405' -> return..try -> reduce (target=114, len=1)
actionsTable.fill(741, 51865, 51867); // 'state 405' -> switch..case -> reduce (target=114, len=1)
actionsTable.fill(741, 51868, 51873); // 'state 405' -> default..from -> reduce (target=114, len=1)
actionsTable.fill(741, 51876, 51878); // 'state 405' -> type..export -> reduce (target=114, len=1)
actionsTable[51881] = 741; // 'state 405' -> [ -> reduce (target=114, len=1)
actionsTable.fill(741, 51883, 51885); // 'state 405' -> async..function -> reduce (target=114, len=1)
actionsTable.fill(741, 51887, 51890); // 'state 405' -> get..class -> reduce (target=114, len=1)
actionsTable[51892] = 741; // 'state 405' -> interface -> reduce (target=114, len=1)
actionsTable[51894] = 741; // 'state 405' -> < -> reduce (target=114, len=1)
actionsTable.fill(741, 51899, 51901); // 'state 405' -> void..typeof -> reduce (target=114, len=1)
actionsTable[51902] = 741; // 'state 405' -> new -> reduce (target=114, len=1)
actionsTable.fill(741, 51909, 51911); // 'state 405' -> +..- -> reduce (target=114, len=1)
actionsTable.fill(741, 51912, 51916); // 'state 405' -> !..await -> reduce (target=114, len=1)
actionsTable[51918] = 856; // 'state 405' -> identifier -> shift (target=428, len=0)
actionsTable.fill(741, 51920, 51923); // 'state 405' -> number..template_string -> reduce (target=114, len=1)
actionsTable.fill(741, 51929, 51932); // 'state 405' -> update_operator..@par-gen.EOF -> reduce (target=114, len=1)
actionsTable.fill(743, 51968, 51977); // 'state 406' -> true..( -> reduce (target=115, len=1)
actionsTable.fill(743, 51978, 51981); // 'state 406' -> else..do -> reduce (target=115, len=1)
actionsTable[51981] = 858; // 'state 406' -> ; -> shift (target=429, len=0)
actionsTable.fill(743, 51982, 51987); // 'state 406' -> for..of -> reduce (target=115, len=1)
actionsTable.fill(743, 51988, 51991); // 'state 406' -> return..try -> reduce (target=115, len=1)
actionsTable.fill(743, 51993, 51995); // 'state 406' -> switch..case -> reduce (target=115, len=1)
actionsTable.fill(743, 51996, 52001); // 'state 406' -> default..from -> reduce (target=115, len=1)
actionsTable.fill(743, 52004, 52006); // 'state 406' -> type..export -> reduce (target=115, len=1)
actionsTable[52009] = 743; // 'state 406' -> [ -> reduce (target=115, len=1)
actionsTable.fill(743, 52011, 52013); // 'state 406' -> async..function -> reduce (target=115, len=1)
actionsTable.fill(743, 52015, 52018); // 'state 406' -> get..class -> reduce (target=115, len=1)
actionsTable[52020] = 743; // 'state 406' -> interface -> reduce (target=115, len=1)
actionsTable[52022] = 743; // 'state 406' -> < -> reduce (target=115, len=1)
actionsTable.fill(743, 52027, 52029); // 'state 406' -> void..typeof -> reduce (target=115, len=1)
actionsTable[52030] = 743; // 'state 406' -> new -> reduce (target=115, len=1)
actionsTable.fill(743, 52037, 52039); // 'state 406' -> +..- -> reduce (target=115, len=1)
actionsTable.fill(743, 52040, 52044); // 'state 406' -> !..await -> reduce (target=115, len=1)
actionsTable[52046] = 860; // 'state 406' -> identifier -> shift (target=430, len=0)
actionsTable.fill(743, 52048, 52051); // 'state 406' -> number..template_string -> reduce (target=115, len=1)
actionsTable.fill(743, 52057, 52060); // 'state 406' -> update_operator..@par-gen.EOF -> reduce (target=115, len=1)
actionsTable.fill(869, 52096, 52105); // 'state 407' -> true..( -> reduce (target=178, len=1)
actionsTable.fill(869, 52106, 52119); // 'state 407' -> else..try -> reduce (target=178, len=1)
actionsTable.fill(869, 52121, 52134); // 'state 407' -> switch..export -> reduce (target=178, len=1)
actionsTable[52135] = 869; // 'state 407' -> = -> reduce (target=178, len=1)
actionsTable[52137] = 869; // 'state 407' -> [ -> reduce (target=178, len=1)
actionsTable.fill(869, 52139, 52141); // 'state 407' -> async..function -> reduce (target=178, len=1)
actionsTable.fill(869, 52143, 52146); // 'state 407' -> get..class -> reduce (target=178, len=1)
actionsTable.fill(869, 52148, 52154); // 'state 407' -> interface..& -> reduce (target=178, len=1)
actionsTable.fill(869, 52155, 52157); // 'state 407' -> void..typeof -> reduce (target=178, len=1)
actionsTable.fill(869, 52158, 52174); // 'state 407' -> new... -> reduce (target=178, len=1)
actionsTable[52174] = 160; // 'state 407' -> identifier -> shift (target=80, len=0)
actionsTable.fill(869, 52176, 52179); // 'state 407' -> number..template_string -> reduce (target=178, len=1)
actionsTable.fill(869, 52180, 52188); // 'state 407' -> compound_assignment_operator..@par-gen.EOF -> reduce (target=178, len=1)
actionsTable[52302] = 158; // 'state 408' -> identifier -> shift (target=79, len=0)
actionsTable.fill(871, 52352, 52375); // 'state 409' -> true..try -> reduce (target=179, len=1)
actionsTable.fill(871, 52377, 52390); // 'state 409' -> switch..export -> reduce (target=179, len=1)
actionsTable[52391] = 877; // 'state 409' -> = -> reduce (target=182, len=1)
actionsTable.fill(871, 52393, 52402); // 'state 409' -> [..class -> reduce (target=179, len=1)
actionsTable.fill(871, 52403, 52405); // 'state 409' -> implements..interface -> reduce (target=179, len=1)
actionsTable.fill(871, 52406, 52410); // 'state 409' -> <..& -> reduce (target=179, len=1)
actionsTable[52410] = 162; // 'state 409' -> => -> shift (target=81, len=0)
actionsTable.fill(871, 52411, 52413); // 'state 409' -> void..typeof -> reduce (target=179, len=1)
actionsTable.fill(871, 52414, 52436); // 'state 409' -> new..accessibility_modifier -> reduce (target=179, len=1)
actionsTable[52436] = 877; // 'state 409' -> compound_assignment_operator -> reduce (target=182, len=1)
actionsTable.fill(871, 52437, 52444); // 'state 409' -> equality_operator..@par-gen.EOF -> reduce (target=179, len=1)
actionsTable.fill(703, 52480, 52486); // 'state 410' -> true..{ -> reduce (target=95, len=1)
actionsTable.fill(703, 52487, 52489); // 'state 410' -> if..( -> reduce (target=95, len=1)
actionsTable.fill(703, 52491, 52493); // 'state 410' -> while..do -> reduce (target=95, len=1)
actionsTable.fill(703, 52494, 52499); // 'state 410' -> for..of -> reduce (target=95, len=1)
actionsTable.fill(703, 52500, 52503); // 'state 410' -> return..try -> reduce (target=95, len=1)
actionsTable[52505] = 703; // 'state 410' -> switch -> reduce (target=95, len=1)
actionsTable.fill(703, 52509, 52513); // 'state 410' -> break..from -> reduce (target=95, len=1)
actionsTable.fill(703, 52516, 52518); // 'state 410' -> type..export -> reduce (target=95, len=1)
actionsTable[52521] = 703; // 'state 410' -> [ -> reduce (target=95, len=1)
actionsTable.fill(703, 52523, 52525); // 'state 410' -> async..function -> reduce (target=95, len=1)
actionsTable.fill(703, 52527, 52530); // 'state 410' -> get..class -> reduce (target=95, len=1)
actionsTable[52532] = 703; // 'state 410' -> interface -> reduce (target=95, len=1)
actionsTable[52534] = 703; // 'state 410' -> < -> reduce (target=95, len=1)
actionsTable.fill(703, 52539, 52541); // 'state 410' -> void..typeof -> reduce (target=95, len=1)
actionsTable[52542] = 703; // 'state 410' -> new -> reduce (target=95, len=1)
actionsTable.fill(703, 52549, 52551); // 'state 410' -> +..- -> reduce (target=95, len=1)
actionsTable.fill(703, 52552, 52556); // 'state 410' -> !..await -> reduce (target=95, len=1)
actionsTable[52558] = 703; // 'state 410' -> identifier -> reduce (target=95, len=1)
actionsTable.fill(703, 52560, 52563); // 'state 410' -> number..template_string -> reduce (target=95, len=1)
actionsTable.fill(703, 52569, 52572); // 'state 410' -> update_operator..@par-gen.EOF -> reduce (target=95, len=1)
actionsTable.fill(705, 52608, 52617); // 'state 411' -> true..( -> reduce (target=96, len=1)
actionsTable.fill(705, 52618, 52621); // 'state 411' -> else..do -> reduce (target=96, len=1)
actionsTable.fill(705, 52622, 52627); // 'state 411' -> for..of -> reduce (target=96, len=1)
actionsTable.fill(705, 52628, 52631); // 'state 411' -> return..try -> reduce (target=96, len=1)
actionsTable.fill(705, 52633, 52635); // 'state 411' -> switch..case -> reduce (target=96, len=1)
actionsTable.fill(705, 52636, 52641); // 'state 411' -> default..from -> reduce (target=96, len=1)
actionsTable.fill(705, 52644, 52646); // 'state 411' -> type..export -> reduce (target=96, len=1)
actionsTable[52649] = 705; // 'state 411' -> [ -> reduce (target=96, len=1)
actionsTable.fill(705, 52651, 52653); // 'state 411' -> async..function -> reduce (target=96, len=1)
actionsTable.fill(705, 52655, 52658); // 'state 411' -> get..class -> reduce (target=96, len=1)
actionsTable[52660] = 705; // 'state 411' -> interface -> reduce (target=96, len=1)
actionsTable[52662] = 705; // 'state 411' -> < -> reduce (target=96, len=1)
actionsTable.fill(705, 52667, 52669); // 'state 411' -> void..typeof -> reduce (target=96, len=1)
actionsTable[52670] = 705; // 'state 411' -> new -> reduce (target=96, len=1)
actionsTable.fill(705, 52677, 52679); // 'state 411' -> +..- -> reduce (target=96, len=1)
actionsTable.fill(705, 52680, 52684); // 'state 411' -> !..await -> reduce (target=96, len=1)
actionsTable[52686] = 705; // 'state 411' -> identifier -> reduce (target=96, len=1)
actionsTable.fill(705, 52688, 52691); // 'state 411' -> number..template_string -> reduce (target=96, len=1)
actionsTable.fill(705, 52697, 52700); // 'state 411' -> update_operator..@par-gen.EOF -> reduce (target=96, len=1)
actionsTable.fill(747, 52736, 52745); // 'state 412' -> true..( -> reduce (target=117, len=1)
actionsTable.fill(747, 52746, 52749); // 'state 412' -> else..do -> reduce (target=117, len=1)
actionsTable.fill(747, 52750, 52755); // 'state 412' -> for..of -> reduce (target=117, len=1)
actionsTable.fill(747, 52756, 52759); // 'state 412' -> return..try -> reduce (target=117, len=1)
actionsTable.fill(747, 52761, 52763); // 'state 412' -> switch..case -> reduce (target=117, len=1)
actionsTable.fill(747, 52764, 52769); // 'state 412' -> default..from -> reduce (target=117, len=1)
actionsTable.fill(747, 52772, 52774); // 'state 412' -> type..export -> reduce (target=117, len=1)
actionsTable[52777] = 747; // 'state 412' -> [ -> reduce (target=117, len=1)
actionsTable.fill(747, 52779, 52781); // 'state 412' -> async..function -> reduce (target=117, len=1)
actionsTable.fill(747, 52783, 52786); // 'state 412' -> get..class -> reduce (target=117, len=1)
actionsTable[52788] = 747; // 'state 412' -> interface -> reduce (target=117, len=1)
actionsTable[52790] = 747; // 'state 412' -> < -> reduce (target=117, len=1)
actionsTable.fill(747, 52795, 52797); // 'state 412' -> void..typeof -> reduce (target=117, len=1)
actionsTable[52798] = 747; // 'state 412' -> new -> reduce (target=117, len=1)
actionsTable.fill(747, 52805, 52807); // 'state 412' -> +..- -> reduce (target=117, len=1)
actionsTable.fill(747, 52808, 52812); // 'state 412' -> !..await -> reduce (target=117, len=1)
actionsTable[52814] = 747; // 'state 412' -> identifier -> reduce (target=117, len=1)
actionsTable.fill(747, 52816, 52819); // 'state 412' -> number..template_string -> reduce (target=117, len=1)
actionsTable.fill(747, 52825, 52828); // 'state 412' -> update_operator..@par-gen.EOF -> reduce (target=117, len=1)
actionsTable.fill(871, 52864, 52887); // 'state 413' -> true..try -> reduce (target=179, len=1)
actionsTable.fill(871, 52889, 52902); // 'state 413' -> switch..export -> reduce (target=179, len=1)
actionsTable[52903] = 877; // 'state 413' -> = -> reduce (target=182, len=1)
actionsTable.fill(871, 52905, 52914); // 'state 413' -> [..class -> reduce (target=179, len=1)
actionsTable.fill(871, 52915, 52917); // 'state 413' -> implements..interface -> reduce (target=179, len=1)
actionsTable.fill(871, 52918, 52922); // 'state 413' -> <..& -> reduce (target=179, len=1)
actionsTable.fill(871, 52923, 52925); // 'state 413' -> void..typeof -> reduce (target=179, len=1)
actionsTable.fill(871, 52926, 52948); // 'state 413' -> new..accessibility_modifier -> reduce (target=179, len=1)
actionsTable[52948] = 877; // 'state 413' -> compound_assignment_operator -> reduce (target=182, len=1)
actionsTable.fill(871, 52949, 52956); // 'state 413' -> equality_operator..@par-gen.EOF -> reduce (target=179, len=1)
actionsTable.fill(867, 52992, 53015); // 'state 414' -> true..try -> reduce (target=177, len=1)
actionsTable.fill(867, 53017, 53030); // 'state 414' -> switch..export -> reduce (target=177, len=1)
actionsTable.fill(867, 53033, 53042); // 'state 414' -> [..class -> reduce (target=177, len=1)
actionsTable.fill(867, 53043, 53045); // 'state 414' -> implements..interface -> reduce (target=177, len=1)
actionsTable.fill(867, 53046, 53050); // 'state 414' -> <..& -> reduce (target=177, len=1)
actionsTable.fill(867, 53051, 53053); // 'state 414' -> void..typeof -> reduce (target=177, len=1)
actionsTable.fill(867, 53054, 53076); // 'state 414' -> new..accessibility_modifier -> reduce (target=177, len=1)
actionsTable.fill(867, 53077, 53084); // 'state 414' -> equality_operator..@par-gen.EOF -> reduce (target=177, len=1)
actionsTable[53159] = 166; // 'state 415' -> = -> shift (target=83, len=0)
actionsTable[53204] = 168; // 'state 415' -> compound_assignment_operator -> shift (target=84, len=0)
actionsTable.fill(867, 53248, 53271); // 'state 416' -> true..try -> reduce (target=177, len=1)
actionsTable.fill(867, 53273, 53286); // 'state 416' -> switch..export -> reduce (target=177, len=1)
actionsTable[53287] = 877; // 'state 416' -> = -> reduce (target=182, len=1)
actionsTable.fill(867, 53289, 53298); // 'state 416' -> [..class -> reduce (target=177, len=1)
actionsTable.fill(867, 53299, 53301); // 'state 416' -> implements..interface -> reduce (target=177, len=1)
actionsTable.fill(867, 53302, 53306); // 'state 416' -> <..& -> reduce (target=177, len=1)
actionsTable.fill(867, 53307, 53309); // 'state 416' -> void..typeof -> reduce (target=177, len=1)
actionsTable.fill(867, 53310, 53332); // 'state 416' -> new..accessibility_modifier -> reduce (target=177, len=1)
actionsTable[53332] = 877; // 'state 416' -> compound_assignment_operator -> reduce (target=182, len=1)
actionsTable.fill(867, 53333, 53340); // 'state 416' -> equality_operator..@par-gen.EOF -> reduce (target=177, len=1)
actionsTable.fill(1215, 53376, 53382); // 'state 417' -> true..{ -> reduce (target=95, len=2)
actionsTable.fill(1215, 53383, 53385); // 'state 417' -> if..( -> reduce (target=95, len=2)
actionsTable.fill(1215, 53387, 53389); // 'state 417' -> while..do -> reduce (target=95, len=2)
actionsTable.fill(1215, 53390, 53395); // 'state 417' -> for..of -> reduce (target=95, len=2)
actionsTable.fill(1215, 53396, 53399); // 'state 417' -> return..try -> reduce (target=95, len=2)
actionsTable[53401] = 1215; // 'state 417' -> switch -> reduce (target=95, len=2)
actionsTable.fill(1215, 53405, 53409); // 'state 417' -> break..from -> reduce (target=95, len=2)
actionsTable.fill(1215, 53412, 53414); // 'state 417' -> type..export -> reduce (target=95, len=2)
actionsTable[53417] = 1215; // 'state 417' -> [ -> reduce (target=95, len=2)
actionsTable.fill(1215, 53419, 53421); // 'state 417' -> async..function -> reduce (target=95, len=2)
actionsTable.fill(1215, 53423, 53426); // 'state 417' -> get..class -> reduce (target=95, len=2)
actionsTable[53428] = 1215; // 'state 417' -> interface -> reduce (target=95, len=2)
actionsTable[53430] = 1215; // 'state 417' -> < -> reduce (target=95, len=2)
actionsTable.fill(1215, 53435, 53437); // 'state 417' -> void..typeof -> reduce (target=95, len=2)
actionsTable[53438] = 1215; // 'state 417' -> new -> reduce (target=95, len=2)
actionsTable.fill(1215, 53445, 53447); // 'state 417' -> +..- -> reduce (target=95, len=2)
actionsTable.fill(1215, 53448, 53452); // 'state 417' -> !..await -> reduce (target=95, len=2)
actionsTable[53454] = 1215; // 'state 417' -> identifier -> reduce (target=95, len=2)
actionsTable.fill(1215, 53456, 53459); // 'state 417' -> number..template_string -> reduce (target=95, len=2)
actionsTable.fill(1215, 53465, 53468); // 'state 417' -> update_operator..@par-gen.EOF -> reduce (target=95, len=2)
actionsTable.fill(1221, 53504, 53527); // 'state 418' -> true..try -> reduce (target=98, len=2)
actionsTable.fill(1221, 53529, 53542); // 'state 418' -> switch..export -> reduce (target=98, len=2)
actionsTable[53543] = 1429; // 'state 418' -> = -> reduce (target=202, len=2)
actionsTable.fill(1221, 53545, 53554); // 'state 418' -> [..class -> reduce (target=98, len=2)
actionsTable.fill(1221, 53555, 53557); // 'state 418' -> implements..interface -> reduce (target=98, len=2)
actionsTable.fill(1221, 53558, 53562); // 'state 418' -> <..& -> reduce (target=98, len=2)
actionsTable.fill(1221, 53563, 53565); // 'state 418' -> void..typeof -> reduce (target=98, len=2)
actionsTable.fill(1221, 53566, 53588); // 'state 418' -> new..accessibility_modifier -> reduce (target=98, len=2)
actionsTable[53588] = 1429; // 'state 418' -> compound_assignment_operator -> reduce (target=202, len=2)
actionsTable.fill(1221, 53589, 53596); // 'state 418' -> equality_operator..@par-gen.EOF -> reduce (target=98, len=2)
actionsTable.fill(871, 53632, 53641); // 'state 419' -> true..( -> reduce (target=179, len=1)
actionsTable.fill(871, 53643, 53655); // 'state 419' -> while..try -> reduce (target=179, len=1)
actionsTable[53657] = 871; // 'state 419' -> switch -> reduce (target=179, len=1)
actionsTable[53659] = 927; // 'state 419' -> : -> reduce (target=207, len=1)
actionsTable.fill(871, 53661, 53665); // 'state 419' -> break..from -> reduce (target=179, len=1)
actionsTable[53665] = 925; // 'state 419' -> , -> reduce (target=206, len=1)
actionsTable.fill(871, 53666, 53670); // 'state 419' -> *..export -> reduce (target=179, len=1)
actionsTable[53671] = 877; // 'state 419' -> = -> reduce (target=182, len=1)
actionsTable[53673] = 871; // 'state 419' -> [ -> reduce (target=179, len=1)
actionsTable.fill(871, 53675, 53677); // 'state 419' -> async..function -> reduce (target=179, len=1)
actionsTable.fill(871, 53679, 53682); // 'state 419' -> get..class -> reduce (target=179, len=1)
actionsTable[53684] = 871; // 'state 419' -> interface -> reduce (target=179, len=1)
actionsTable[53685] = 927; // 'state 419' -> ?: -> reduce (target=207, len=1)
actionsTable.fill(871, 53686, 53690); // 'state 419' -> <..& -> reduce (target=179, len=1)
actionsTable[53690] = 162; // 'state 419' -> => -> shift (target=81, len=0)
actionsTable.fill(871, 53691, 53693); // 'state 419' -> void..typeof -> reduce (target=179, len=1)
actionsTable.fill(871, 53694, 53711); // 'state 419' -> new..identifier -> reduce (target=179, len=1)
actionsTable.fill(871, 53712, 53715); // 'state 419' -> number..template_string -> reduce (target=179, len=1)
actionsTable[53716] = 877; // 'state 419' -> compound_assignment_operator -> reduce (target=182, len=1)
actionsTable.fill(871, 53717, 53723); // 'state 419' -> equality_operator..regex -> reduce (target=179, len=1)
actionsTable.fill(871, 53760, 53769); // 'state 420' -> true..( -> reduce (target=179, len=1)
actionsTable.fill(871, 53771, 53783); // 'state 420' -> while..try -> reduce (target=179, len=1)
actionsTable[53785] = 871; // 'state 420' -> switch -> reduce (target=179, len=1)
actionsTable[53787] = 927; // 'state 420' -> : -> reduce (target=207, len=1)
actionsTable.fill(871, 53789, 53793); // 'state 420' -> break..from -> reduce (target=179, len=1)
actionsTable.fill(871, 53794, 53798); // 'state 420' -> *..export -> reduce (target=179, len=1)
actionsTable[53801] = 871; // 'state 420' -> [ -> reduce (target=179, len=1)
actionsTable.fill(871, 53803, 53805); // 'state 420' -> async..function -> reduce (target=179, len=1)
actionsTable.fill(871, 53807, 53810); // 'state 420' -> get..class -> reduce (target=179, len=1)
actionsTable[53812] = 871; // 'state 420' -> interface -> reduce (target=179, len=1)
actionsTable[53813] = 927; // 'state 420' -> ?: -> reduce (target=207, len=1)
actionsTable.fill(871, 53814, 53818); // 'state 420' -> <..& -> reduce (target=179, len=1)
actionsTable.fill(871, 53819, 53821); // 'state 420' -> void..typeof -> reduce (target=179, len=1)
actionsTable.fill(871, 53822, 53839); // 'state 420' -> new..identifier -> reduce (target=179, len=1)
actionsTable.fill(871, 53840, 53843); // 'state 420' -> number..template_string -> reduce (target=179, len=1)
actionsTable.fill(871, 53845, 53851); // 'state 420' -> equality_operator..regex -> reduce (target=179, len=1)
actionsTable.fill(707, 53888, 53897); // 'state 421' -> true..( -> reduce (target=97, len=1)
actionsTable.fill(707, 53899, 53901); // 'state 421' -> while..do -> reduce (target=97, len=1)
actionsTable.fill(707, 53902, 53907); // 'state 421' -> for..of -> reduce (target=97, len=1)
actionsTable.fill(707, 53908, 53911); // 'state 421' -> return..try -> reduce (target=97, len=1)
actionsTable.fill(707, 53913, 53915); // 'state 421' -> switch..case -> reduce (target=97, len=1)
actionsTable.fill(707, 53916, 53921); // 'state 421' -> default..from -> reduce (target=97, len=1)
actionsTable.fill(707, 53924, 53926); // 'state 421' -> type..export -> reduce (target=97, len=1)
actionsTable[53929] = 707; // 'state 421' -> [ -> reduce (target=97, len=1)
actionsTable.fill(707, 53931, 53933); // 'state 421' -> async..function -> reduce (target=97, len=1)
actionsTable.fill(707, 53935, 53938); // 'state 421' -> get..class -> reduce (target=97, len=1)
actionsTable[53940] = 707; // 'state 421' -> interface -> reduce (target=97, len=1)
actionsTable[53942] = 707; // 'state 421' -> < -> reduce (target=97, len=1)
actionsTable.fill(707, 53947, 53949); // 'state 421' -> void..typeof -> reduce (target=97, len=1)
actionsTable[53950] = 707; // 'state 421' -> new -> reduce (target=97, len=1)
actionsTable.fill(707, 53957, 53959); // 'state 421' -> +..- -> reduce (target=97, len=1)
actionsTable.fill(707, 53960, 53964); // 'state 421' -> !..await -> reduce (target=97, len=1)
actionsTable[53966] = 707; // 'state 421' -> identifier -> reduce (target=97, len=1)
actionsTable.fill(707, 53968, 53971); // 'state 421' -> number..template_string -> reduce (target=97, len=1)
actionsTable.fill(707, 53977, 53979); // 'state 421' -> update_operator..regex -> reduce (target=97, len=1)
actionsTable.fill(871, 54016, 54025); // 'state 422' -> true..( -> reduce (target=179, len=1)
actionsTable.fill(871, 54027, 54039); // 'state 422' -> while..try -> reduce (target=179, len=1)
actionsTable[54041] = 871; // 'state 422' -> switch -> reduce (target=179, len=1)
actionsTable[54043] = 927; // 'state 422' -> : -> reduce (target=207, len=1)
actionsTable.fill(871, 54045, 54049); // 'state 422' -> break..from -> reduce (target=179, len=1)
actionsTable[54049] = 925; // 'state 422' -> , -> reduce (target=206, len=1)
actionsTable.fill(871, 54050, 54054); // 'state 422' -> *..export -> reduce (target=179, len=1)
actionsTable[54055] = 877; // 'state 422' -> = -> reduce (target=182, len=1)
actionsTable[54057] = 871; // 'state 422' -> [ -> reduce (target=179, len=1)
actionsTable.fill(871, 54059, 54061); // 'state 422' -> async..function -> reduce (target=179, len=1)
actionsTable.fill(871, 54063, 54066); // 'state 422' -> get..class -> reduce (target=179, len=1)
actionsTable[54068] = 871; // 'state 422' -> interface -> reduce (target=179, len=1)
actionsTable[54069] = 927; // 'state 422' -> ?: -> reduce (target=207, len=1)
actionsTable.fill(871, 54070, 54074); // 'state 422' -> <..& -> reduce (target=179, len=1)
actionsTable.fill(871, 54075, 54077); // 'state 422' -> void..typeof -> reduce (target=179, len=1)
actionsTable.fill(871, 54078, 54095); // 'state 422' -> new..identifier -> reduce (target=179, len=1)
actionsTable.fill(871, 54096, 54099); // 'state 422' -> number..template_string -> reduce (target=179, len=1)
actionsTable[54100] = 877; // 'state 422' -> compound_assignment_operator -> reduce (target=182, len=1)
actionsTable.fill(871, 54101, 54107); // 'state 422' -> equality_operator..regex -> reduce (target=179, len=1)
actionsTable[54150] = 919; // 'state 423' -> } -> reduce (target=203, len=1)
actionsTable[54177] = 919; // 'state 423' -> , -> reduce (target=203, len=1)
actionsTable[54278] = 927; // 'state 424' -> } -> reduce (target=207, len=1)
actionsTable[54280] = 927; // 'state 424' -> ( -> reduce (target=207, len=1)
actionsTable[54285] = 927; // 'state 424' -> ; -> reduce (target=207, len=1)
actionsTable[54290] = 927; // 'state 424' -> of -> reduce (target=207, len=1)
actionsTable[54299] = 927; // 'state 424' -> : -> reduce (target=207, len=1)
actionsTable[54304] = 927; // 'state 424' -> from -> reduce (target=207, len=1)
actionsTable[54308] = 927; // 'state 424' -> type -> reduce (target=207, len=1)
actionsTable[54311] = 927; // 'state 424' -> = -> reduce (target=207, len=1)
actionsTable[54313] = 927; // 'state 424' -> [ -> reduce (target=207, len=1)
actionsTable[54315] = 927; // 'state 424' -> async -> reduce (target=207, len=1)
actionsTable.fill(927, 54317, 54321); // 'state 424' -> static..set -> reduce (target=207, len=1)
actionsTable.fill(927, 54325, 54327); // 'state 424' -> ?:..< -> reduce (target=207, len=1)
actionsTable.fill(927, 54350, 54354); // 'state 424' -> identifier..string -> reduce (target=207, len=1)
actionsTable[54355] = 927; // 'state 424' -> accessibility_modifier -> reduce (target=207, len=1)
actionsTable[54411] = 924; // 'state 425' -> while -> shift (target=462, len=0)
actionsTable.fill(1233, 54528, 54537); // 'state 426' -> true..( -> reduce (target=104, len=2)
actionsTable.fill(1233, 54538, 54541); // 'state 426' -> else..do -> reduce (target=104, len=2)
actionsTable.fill(1233, 54542, 54547); // 'state 426' -> for..of -> reduce (target=104, len=2)
actionsTable.fill(1233, 54548, 54551); // 'state 426' -> return..try -> reduce (target=104, len=2)
actionsTable.fill(1233, 54553, 54555); // 'state 426' -> switch..case -> reduce (target=104, len=2)
actionsTable.fill(1233, 54556, 54561); // 'state 426' -> default..from -> reduce (target=104, len=2)
actionsTable.fill(1233, 54564, 54566); // 'state 426' -> type..export -> reduce (target=104, len=2)
actionsTable[54569] = 1233; // 'state 426' -> [ -> reduce (target=104, len=2)
actionsTable.fill(1233, 54571, 54573); // 'state 426' -> async..function -> reduce (target=104, len=2)
actionsTable.fill(1233, 54575, 54578); // 'state 426' -> get..class -> reduce (target=104, len=2)
actionsTable[54580] = 1233; // 'state 426' -> interface -> reduce (target=104, len=2)
actionsTable[54582] = 1233; // 'state 426' -> < -> reduce (target=104, len=2)
actionsTable.fill(1233, 54587, 54589); // 'state 426' -> void..typeof -> reduce (target=104, len=2)
actionsTable[54590] = 1233; // 'state 426' -> new -> reduce (target=104, len=2)
actionsTable.fill(1233, 54597, 54599); // 'state 426' -> +..- -> reduce (target=104, len=2)
actionsTable.fill(1233, 54600, 54604); // 'state 426' -> !..await -> reduce (target=104, len=2)
actionsTable[54606] = 1233; // 'state 426' -> identifier -> reduce (target=104, len=2)
actionsTable.fill(1233, 54608, 54611); // 'state 426' -> number..template_string -> reduce (target=104, len=2)
actionsTable.fill(1233, 54617, 54620); // 'state 426' -> update_operator..@par-gen.EOF -> reduce (target=104, len=2)
actionsTable.fill(1253, 54656, 54665); // 'state 427' -> true..( -> reduce (target=114, len=2)
actionsTable.fill(1253, 54666, 54669); // 'state 427' -> else..do -> reduce (target=114, len=2)
actionsTable.fill(1253, 54670, 54675); // 'state 427' -> for..of -> reduce (target=114, len=2)
actionsTable.fill(1253, 54676, 54679); // 'state 427' -> return..try -> reduce (target=114, len=2)
actionsTable.fill(1253, 54681, 54683); // 'state 427' -> switch..case -> reduce (target=114, len=2)
actionsTable.fill(1253, 54684, 54689); // 'state 427' -> default..from -> reduce (target=114, len=2)
actionsTable.fill(1253, 54692, 54694); // 'state 427' -> type..export -> reduce (target=114, len=2)
actionsTable[54697] = 1253; // 'state 427' -> [ -> reduce (target=114, len=2)
actionsTable.fill(1253, 54699, 54701); // 'state 427' -> async..function -> reduce (target=114, len=2)
actionsTable.fill(1253, 54703, 54706); // 'state 427' -> get..class -> reduce (target=114, len=2)
actionsTable[54708] = 1253; // 'state 427' -> interface -> reduce (target=114, len=2)
actionsTable[54710] = 1253; // 'state 427' -> < -> reduce (target=114, len=2)
actionsTable.fill(1253, 54715, 54717); // 'state 427' -> void..typeof -> reduce (target=114, len=2)
actionsTable[54718] = 1253; // 'state 427' -> new -> reduce (target=114, len=2)
actionsTable.fill(1253, 54725, 54727); // 'state 427' -> +..- -> reduce (target=114, len=2)
actionsTable.fill(1253, 54728, 54732); // 'state 427' -> !..await -> reduce (target=114, len=2)
actionsTable[54734] = 1253; // 'state 427' -> identifier -> reduce (target=114, len=2)
actionsTable.fill(1253, 54736, 54739); // 'state 427' -> number..template_string -> reduce (target=114, len=2)
actionsTable.fill(1253, 54745, 54748); // 'state 427' -> update_operator..@par-gen.EOF -> reduce (target=114, len=2)
actionsTable.fill(1253, 54784, 54793); // 'state 428' -> true..( -> reduce (target=114, len=2)
actionsTable.fill(1253, 54794, 54797); // 'state 428' -> else..do -> reduce (target=114, len=2)
actionsTable[54797] = 938; // 'state 428' -> ; -> shift (target=469, len=0)
actionsTable.fill(1253, 54798, 54803); // 'state 428' -> for..of -> reduce (target=114, len=2)
actionsTable.fill(1253, 54804, 54807); // 'state 428' -> return..try -> reduce (target=114, len=2)
actionsTable.fill(1253, 54809, 54811); // 'state 428' -> switch..case -> reduce (target=114, len=2)
actionsTable.fill(1253, 54812, 54817); // 'state 428' -> default..from -> reduce (target=114, len=2)
actionsTable.fill(1253, 54820, 54822); // 'state 428' -> type..export -> reduce (target=114, len=2)
actionsTable[54825] = 1253; // 'state 428' -> [ -> reduce (target=114, len=2)
actionsTable.fill(1253, 54827, 54829); // 'state 428' -> async..function -> reduce (target=114, len=2)
actionsTable.fill(1253, 54831, 54834); // 'state 428' -> get..class -> reduce (target=114, len=2)
actionsTable[54836] = 1253; // 'state 428' -> interface -> reduce (target=114, len=2)
actionsTable[54838] = 1253; // 'state 428' -> < -> reduce (target=114, len=2)
actionsTable.fill(1253, 54843, 54845); // 'state 428' -> void..typeof -> reduce (target=114, len=2)
actionsTable[54846] = 1253; // 'state 428' -> new -> reduce (target=114, len=2)
actionsTable.fill(1253, 54853, 54855); // 'state 428' -> +..- -> reduce (target=114, len=2)
actionsTable.fill(1253, 54856, 54860); // 'state 428' -> !..await -> reduce (target=114, len=2)
actionsTable[54862] = 1253; // 'state 428' -> identifier -> reduce (target=114, len=2)
actionsTable.fill(1253, 54864, 54867); // 'state 428' -> number..template_string -> reduce (target=114, len=2)
actionsTable.fill(1253, 54873, 54876); // 'state 428' -> update_operator..@par-gen.EOF -> reduce (target=114, len=2)
actionsTable.fill(1255, 54912, 54921); // 'state 429' -> true..( -> reduce (target=115, len=2)
actionsTable.fill(1255, 54922, 54925); // 'state 429' -> else..do -> reduce (target=115, len=2)
actionsTable.fill(1255, 54926, 54931); // 'state 429' -> for..of -> reduce (target=115, len=2)
actionsTable.fill(1255, 54932, 54935); // 'state 429' -> return..try -> reduce (target=115, len=2)
actionsTable.fill(1255, 54937, 54939); // 'state 429' -> switch..case -> reduce (target=115, len=2)
actionsTable.fill(1255, 54940, 54945); // 'state 429' -> default..from -> reduce (target=115, len=2)
actionsTable.fill(1255, 54948, 54950); // 'state 429' -> type..export -> reduce (target=115, len=2)
actionsTable[54953] = 1255; // 'state 429' -> [ -> reduce (target=115, len=2)
actionsTable.fill(1255, 54955, 54957); // 'state 429' -> async..function -> reduce (target=115, len=2)
actionsTable.fill(1255, 54959, 54962); // 'state 429' -> get..class -> reduce (target=115, len=2)
actionsTable[54964] = 1255; // 'state 429' -> interface -> reduce (target=115, len=2)
actionsTable[54966] = 1255; // 'state 429' -> < -> reduce (target=115, len=2)
actionsTable.fill(1255, 54971, 54973); // 'state 429' -> void..typeof -> reduce (target=115, len=2)
actionsTable[54974] = 1255; // 'state 429' -> new -> reduce (target=115, len=2)
actionsTable.fill(1255, 54981, 54983); // 'state 429' -> +..- -> reduce (target=115, len=2)
actionsTable.fill(1255, 54984, 54988); // 'state 429' -> !..await -> reduce (target=115, len=2)
actionsTable[54990] = 1255; // 'state 429' -> identifier -> reduce (target=115, len=2)
actionsTable.fill(1255, 54992, 54995); // 'state 429' -> number..template_string -> reduce (target=115, len=2)
actionsTable.fill(1255, 55001, 55004); // 'state 429' -> update_operator..@par-gen.EOF -> reduce (target=115, len=2)
actionsTable.fill(1255, 55040, 55049); // 'state 430' -> true..( -> reduce (target=115, len=2)
actionsTable.fill(1255, 55050, 55053); // 'state 430' -> else..do -> reduce (target=115, len=2)
actionsTable[55053] = 940; // 'state 430' -> ; -> shift (target=470, len=0)
actionsTable.fill(1255, 55054, 55059); // 'state 430' -> for..of -> reduce (target=115, len=2)
actionsTable.fill(1255, 55060, 55063); // 'state 430' -> return..try -> reduce (target=115, len=2)
actionsTable.fill(1255, 55065, 55067); // 'state 430' -> switch..case -> reduce (target=115, len=2)
actionsTable.fill(1255, 55068, 55073); // 'state 430' -> default..from -> reduce (target=115, len=2)
actionsTable.fill(1255, 55076, 55078); // 'state 430' -> type..export -> reduce (target=115, len=2)
actionsTable[55081] = 1255; // 'state 430' -> [ -> reduce (target=115, len=2)
actionsTable.fill(1255, 55083, 55085); // 'state 430' -> async..function -> reduce (target=115, len=2)
actionsTable.fill(1255, 55087, 55090); // 'state 430' -> get..class -> reduce (target=115, len=2)
actionsTable[55092] = 1255; // 'state 430' -> interface -> reduce (target=115, len=2)
actionsTable[55094] = 1255; // 'state 430' -> < -> reduce (target=115, len=2)
actionsTable.fill(1255, 55099, 55101); // 'state 430' -> void..typeof -> reduce (target=115, len=2)
actionsTable[55102] = 1255; // 'state 430' -> new -> reduce (target=115, len=2)
actionsTable.fill(1255, 55109, 55111); // 'state 430' -> +..- -> reduce (target=115, len=2)
actionsTable.fill(1255, 55112, 55116); // 'state 430' -> !..await -> reduce (target=115, len=2)
actionsTable[55118] = 1255; // 'state 430' -> identifier -> reduce (target=115, len=2)
actionsTable.fill(1255, 55120, 55123); // 'state 430' -> number..template_string -> reduce (target=115, len=2)
actionsTable.fill(1255, 55129, 55132); // 'state 430' -> update_operator..@par-gen.EOF -> reduce (target=115, len=2)
actionsTable.fill(1257, 55168, 55177); // 'state 431' -> true..( -> reduce (target=116, len=2)
actionsTable.fill(1257, 55178, 55181); // 'state 431' -> else..do -> reduce (target=116, len=2)
actionsTable.fill(1257, 55182, 55187); // 'state 431' -> for..of -> reduce (target=116, len=2)
actionsTable.fill(1257, 55188, 55191); // 'state 431' -> return..try -> reduce (target=116, len=2)
actionsTable.fill(1257, 55193, 55195); // 'state 431' -> switch..case -> reduce (target=116, len=2)
actionsTable.fill(1257, 55196, 55201); // 'state 431' -> default..from -> reduce (target=116, len=2)
actionsTable.fill(1257, 55204, 55206); // 'state 431' -> type..export -> reduce (target=116, len=2)
actionsTable[55209] = 1257; // 'state 431' -> [ -> reduce (target=116, len=2)
actionsTable.fill(1257, 55211, 55213); // 'state 431' -> async..function -> reduce (target=116, len=2)
actionsTable.fill(1257, 55215, 55218); // 'state 431' -> get..class -> reduce (target=116, len=2)
actionsTable[55220] = 1257; // 'state 431' -> interface -> reduce (target=116, len=2)
actionsTable[55222] = 1257; // 'state 431' -> < -> reduce (target=116, len=2)
actionsTable.fill(1257, 55227, 55229); // 'state 431' -> void..typeof -> reduce (target=116, len=2)
actionsTable[55230] = 1257; // 'state 431' -> new -> reduce (target=116, len=2)
actionsTable.fill(1257, 55237, 55239); // 'state 431' -> +..- -> reduce (target=116, len=2)
actionsTable.fill(1257, 55240, 55244); // 'state 431' -> !..await -> reduce (target=116, len=2)
actionsTable[55246] = 1257; // 'state 431' -> identifier -> reduce (target=116, len=2)
actionsTable.fill(1257, 55248, 55251); // 'state 431' -> number..template_string -> reduce (target=116, len=2)
actionsTable.fill(1257, 55257, 55260); // 'state 431' -> update_operator..@par-gen.EOF -> reduce (target=116, len=2)
actionsTable.fill(956, 55374, 55376); // 'state 432' -> identifier..private_property_identifier -> shift (target=478, len=0)
actionsTable.fill(1407, 55424, 55447); // 'state 433' -> true..try -> reduce (target=191, len=2)
actionsTable.fill(1407, 55449, 55462); // 'state 433' -> switch..export -> reduce (target=191, len=2)
actionsTable.fill(1407, 55465, 55474); // 'state 433' -> [..class -> reduce (target=191, len=2)
actionsTable.fill(1407, 55475, 55477); // 'state 433' -> implements..interface -> reduce (target=191, len=2)
actionsTable.fill(1407, 55478, 55482); // 'state 433' -> <..& -> reduce (target=191, len=2)
actionsTable.fill(1407, 55483, 55485); // 'state 433' -> void..typeof -> reduce (target=191, len=2)
actionsTable.fill(1407, 55486, 55508); // 'state 433' -> new..accessibility_modifier -> reduce (target=191, len=2)
actionsTable.fill(1407, 55509, 55516); // 'state 433' -> equality_operator..@par-gen.EOF -> reduce (target=191, len=2)
actionsTable.fill(1411, 55552, 55575); // 'state 434' -> true..try -> reduce (target=193, len=2)
actionsTable.fill(1411, 55577, 55590); // 'state 434' -> switch..export -> reduce (target=193, len=2)
actionsTable.fill(1411, 55593, 55602); // 'state 434' -> [..class -> reduce (target=193, len=2)
actionsTable.fill(1411, 55603, 55605); // 'state 434' -> implements..interface -> reduce (target=193, len=2)
actionsTable.fill(1411, 55606, 55610); // 'state 434' -> <..& -> reduce (target=193, len=2)
actionsTable.fill(1411, 55611, 55613); // 'state 434' -> void..typeof -> reduce (target=193, len=2)
actionsTable.fill(1411, 55614, 55636); // 'state 434' -> new..accessibility_modifier -> reduce (target=193, len=2)
actionsTable.fill(1411, 55637, 55644); // 'state 434' -> equality_operator..@par-gen.EOF -> reduce (target=193, len=2)
actionsTable[55715] = 970; // 'state 435' -> as -> shift (target=485, len=0)
actionsTable[55840] = 751; // 'state 436' -> from -> reduce (target=119, len=1)
actionsTable[55841] = 280; // 'state 436' -> , -> shift (target=140, len=0)
actionsTable.fill(1261, 55936, 55945); // 'state 437' -> true..( -> reduce (target=118, len=2)
actionsTable.fill(1261, 55946, 55949); // 'state 437' -> else..do -> reduce (target=118, len=2)
actionsTable[55949] = 972; // 'state 437' -> ; -> shift (target=486, len=0)
actionsTable.fill(1261, 55950, 55955); // 'state 437' -> for..of -> reduce (target=118, len=2)
actionsTable.fill(1261, 55956, 55959); // 'state 437' -> return..try -> reduce (target=118, len=2)
actionsTable.fill(1261, 55961, 55963); // 'state 437' -> switch..case -> reduce (target=118, len=2)
actionsTable.fill(1261, 55964, 55969); // 'state 437' -> default..from -> reduce (target=118, len=2)
actionsTable.fill(1261, 55972, 55974); // 'state 437' -> type..export -> reduce (target=118, len=2)
actionsTable[55977] = 1261; // 'state 437' -> [ -> reduce (target=118, len=2)
actionsTable.fill(1261, 55979, 55981); // 'state 437' -> async..function -> reduce (target=118, len=2)
actionsTable.fill(1261, 55983, 55986); // 'state 437' -> get..class -> reduce (target=118, len=2)
actionsTable[55988] = 1261; // 'state 437' -> interface -> reduce (target=118, len=2)
actionsTable[55990] = 1261; // 'state 437' -> < -> reduce (target=118, len=2)
actionsTable.fill(1261, 55995, 55997); // 'state 437' -> void..typeof -> reduce (target=118, len=2)
actionsTable[55998] = 1261; // 'state 437' -> new -> reduce (target=118, len=2)
actionsTable.fill(1261, 56005, 56007); // 'state 437' -> +..- -> reduce (target=118, len=2)
actionsTable.fill(1261, 56008, 56012); // 'state 437' -> !..await -> reduce (target=118, len=2)
actionsTable[56014] = 1261; // 'state 437' -> identifier -> reduce (target=118, len=2)
actionsTable.fill(1261, 56016, 56019); // 'state 437' -> number..template_string -> reduce (target=118, len=2)
actionsTable.fill(1261, 56025, 56028); // 'state 437' -> update_operator..@par-gen.EOF -> reduce (target=118, len=2)
actionsTable[56096] = 962; // 'state 438' -> from -> shift (target=481, len=0)
actionsTable[56224] = 751; // 'state 439' -> from -> reduce (target=119, len=1)
actionsTable[56352] = 980; // 'state 440' -> from -> shift (target=490, len=0)
actionsTable[56355] = 982; // 'state 440' -> as -> shift (target=491, len=0)
actionsTable[56526] = 160; // 'state 441' -> identifier -> shift (target=80, len=0)
actionsTable[56620] = 976; // 'state 442' -> function -> shift (target=488, len=0)
actionsTable[56782] = 284; // 'state 443' -> identifier -> shift (target=142, len=0)
actionsTable[56910] = 286; // 'state 444' -> identifier -> shift (target=143, len=0)
actionsTable.fill(1273, 56960, 56969); // 'state 445' -> true..( -> reduce (target=124, len=2)
actionsTable.fill(1273, 56970, 56973); // 'state 445' -> else..do -> reduce (target=124, len=2)
actionsTable.fill(1273, 56974, 56979); // 'state 445' -> for..of -> reduce (target=124, len=2)
actionsTable.fill(1273, 56980, 56983); // 'state 445' -> return..try -> reduce (target=124, len=2)
actionsTable.fill(1273, 56985, 56987); // 'state 445' -> switch..case -> reduce (target=124, len=2)
actionsTable.fill(1273, 56988, 56993); // 'state 445' -> default..from -> reduce (target=124, len=2)
actionsTable.fill(1273, 56996, 56998); // 'state 445' -> type..export -> reduce (target=124, len=2)
actionsTable[57001] = 1273; // 'state 445' -> [ -> reduce (target=124, len=2)
actionsTable.fill(1273, 57003, 57005); // 'state 445' -> async..function -> reduce (target=124, len=2)
actionsTable.fill(1273, 57007, 57010); // 'state 445' -> get..class -> reduce (target=124, len=2)
actionsTable[57012] = 1273; // 'state 445' -> interface -> reduce (target=124, len=2)
actionsTable[57014] = 1273; // 'state 445' -> < -> reduce (target=124, len=2)
actionsTable.fill(1273, 57019, 57021); // 'state 445' -> void..typeof -> reduce (target=124, len=2)
actionsTable[57022] = 1273; // 'state 445' -> new -> reduce (target=124, len=2)
actionsTable.fill(1273, 57029, 57031); // 'state 445' -> +..- -> reduce (target=124, len=2)
actionsTable.fill(1273, 57032, 57036); // 'state 445' -> !..await -> reduce (target=124, len=2)
actionsTable[57038] = 1273; // 'state 445' -> identifier -> reduce (target=124, len=2)
actionsTable.fill(1273, 57040, 57043); // 'state 445' -> number..template_string -> reduce (target=124, len=2)
actionsTable.fill(1273, 57049, 57052); // 'state 445' -> update_operator..@par-gen.EOF -> reduce (target=124, len=2)
actionsTable.fill(1273, 57088, 57097); // 'state 446' -> true..( -> reduce (target=124, len=2)
actionsTable.fill(1273, 57098, 57101); // 'state 446' -> else..do -> reduce (target=124, len=2)
actionsTable[57101] = 974; // 'state 446' -> ; -> shift (target=487, len=0)
actionsTable.fill(1273, 57102, 57107); // 'state 446' -> for..of -> reduce (target=124, len=2)
actionsTable.fill(1273, 57108, 57111); // 'state 446' -> return..try -> reduce (target=124, len=2)
actionsTable.fill(1273, 57113, 57115); // 'state 446' -> switch..case -> reduce (target=124, len=2)
actionsTable.fill(1273, 57116, 57120); // 'state 446' -> default..import -> reduce (target=124, len=2)
actionsTable[57120] = 980; // 'state 446' -> from -> shift (target=490, len=0)
actionsTable.fill(1273, 57124, 57126); // 'state 446' -> type..export -> reduce (target=124, len=2)
actionsTable[57129] = 1273; // 'state 446' -> [ -> reduce (target=124, len=2)
actionsTable.fill(1273, 57131, 57133); // 'state 446' -> async..function -> reduce (target=124, len=2)
actionsTable.fill(1273, 57135, 57138); // 'state 446' -> get..class -> reduce (target=124, len=2)
actionsTable[57140] = 1273; // 'state 446' -> interface -> reduce (target=124, len=2)
actionsTable[57142] = 1273; // 'state 446' -> < -> reduce (target=124, len=2)
actionsTable.fill(1273, 57147, 57149); // 'state 446' -> void..typeof -> reduce (target=124, len=2)
actionsTable[57150] = 1273; // 'state 446' -> new -> reduce (target=124, len=2)
actionsTable.fill(1273, 57157, 57159); // 'state 446' -> +..- -> reduce (target=124, len=2)
actionsTable.fill(1273, 57160, 57164); // 'state 446' -> !..await -> reduce (target=124, len=2)
actionsTable[57166] = 1273; // 'state 446' -> identifier -> reduce (target=124, len=2)
actionsTable.fill(1273, 57168, 57171); // 'state 446' -> number..template_string -> reduce (target=124, len=2)
actionsTable.fill(1273, 57177, 57180); // 'state 446' -> update_operator..@par-gen.EOF -> reduce (target=124, len=2)
actionsTable.fill(769, 57216, 57239); // 'state 447' -> true..try -> reduce (target=128, len=1)
actionsTable.fill(769, 57241, 57250); // 'state 447' -> switch.., -> reduce (target=128, len=1)
actionsTable.fill(769, 57252, 57254); // 'state 447' -> type..export -> reduce (target=128, len=1)
actionsTable[57255] = 769; // 'state 447' -> = -> reduce (target=128, len=1)
actionsTable.fill(769, 57257, 57261); // 'state 447' -> [..function -> reduce (target=128, len=1)
actionsTable.fill(769, 57263, 57266); // 'state 447' -> get..class -> reduce (target=128, len=1)
actionsTable.fill(769, 57268, 57271); // 'state 447' -> interface..< -> reduce (target=128, len=1)
actionsTable.fill(769, 57275, 57277); // 'state 447' -> void..typeof -> reduce (target=128, len=1)
actionsTable[57278] = 769; // 'state 447' -> new -> reduce (target=128, len=1)
actionsTable.fill(769, 57285, 57287); // 'state 447' -> +..- -> reduce (target=128, len=1)
actionsTable.fill(769, 57288, 57292); // 'state 447' -> !..await -> reduce (target=128, len=1)
actionsTable[57294] = 769; // 'state 447' -> identifier -> reduce (target=128, len=1)
actionsTable.fill(769, 57296, 57299); // 'state 447' -> number..template_string -> reduce (target=128, len=1)
actionsTable.fill(769, 57305, 57308); // 'state 447' -> update_operator..@par-gen.EOF -> reduce (target=128, len=1)
actionsTable[57402] = 310; // 'state 448' -> => -> shift (target=155, len=0)
actionsTable[57477] = 801; // 'state 449' -> { -> reduce (target=144, len=1)
actionsTable.fill(1445, 57600, 57623); // 'state 450' -> true..try -> reduce (target=210, len=2)
actionsTable.fill(1445, 57625, 57638); // 'state 450' -> switch..export -> reduce (target=210, len=2)
actionsTable.fill(1445, 57641, 57650); // 'state 450' -> [..class -> reduce (target=210, len=2)
actionsTable.fill(1445, 57651, 57653); // 'state 450' -> implements..interface -> reduce (target=210, len=2)
actionsTable.fill(1445, 57654, 57658); // 'state 450' -> <..& -> reduce (target=210, len=2)
actionsTable.fill(1445, 57659, 57661); // 'state 450' -> void..typeof -> reduce (target=210, len=2)
actionsTable.fill(1445, 57662, 57684); // 'state 450' -> new..accessibility_modifier -> reduce (target=210, len=2)
actionsTable.fill(1445, 57685, 57692); // 'state 450' -> equality_operator..@par-gen.EOF -> reduce (target=210, len=2)
actionsTable[57737] = 907; // 'state 451' -> ) -> reduce (target=197, len=1)
actionsTable[57761] = 907; // 'state 451' -> , -> reduce (target=197, len=1)
actionsTable[57770] = 907; // 'state 451' -> ] -> reduce (target=197, len=1)
actionsTable.fill(869, 57856, 57879); // 'state 452' -> true..try -> reduce (target=178, len=1)
actionsTable.fill(869, 57881, 57894); // 'state 452' -> switch..export -> reduce (target=178, len=1)
actionsTable.fill(869, 57897, 57900); // 'state 452' -> [..async -> reduce (target=178, len=1)
actionsTable[57900] = 224; // 'state 452' -> function -> shift (target=112, len=0)
actionsTable.fill(869, 57901, 57906); // 'state 452' -> static..class -> reduce (target=178, len=1)
actionsTable.fill(869, 57907, 57909); // 'state 452' -> implements..interface -> reduce (target=178, len=1)
actionsTable.fill(869, 57910, 57914); // 'state 452' -> <..& -> reduce (target=178, len=1)
actionsTable.fill(869, 57915, 57917); // 'state 452' -> void..typeof -> reduce (target=178, len=1)
actionsTable.fill(869, 57918, 57940); // 'state 452' -> new..accessibility_modifier -> reduce (target=178, len=1)
actionsTable.fill(869, 57941, 57948); // 'state 452' -> equality_operator..@par-gen.EOF -> reduce (target=178, len=1)
actionsTable.fill(1425, 57984, 58007); // 'state 453' -> true..try -> reduce (target=200, len=2)
actionsTable.fill(1425, 58009, 58022); // 'state 453' -> switch..export -> reduce (target=200, len=2)
actionsTable[58023] = 1425; // 'state 453' -> = -> reduce (target=200, len=2)
actionsTable.fill(1425, 58025, 58034); // 'state 453' -> [..class -> reduce (target=200, len=2)
actionsTable.fill(1425, 58035, 58042); // 'state 453' -> implements..& -> reduce (target=200, len=2)
actionsTable.fill(1425, 58043, 58045); // 'state 453' -> void..typeof -> reduce (target=200, len=2)
actionsTable.fill(1425, 58046, 58076); // 'state 453' -> new..@par-gen.EOF -> reduce (target=200, len=2)
actionsTable[58145] = 827; // 'state 454' -> , -> reduce (target=157, len=1)
actionsTable[58151] = 376; // 'state 454' -> = -> shift (target=188, len=0)
actionsTable[58162] = 378; // 'state 454' -> extends -> shift (target=189, len=0)
actionsTable[58167] = 827; // 'state 454' -> > -> reduce (target=157, len=1)
actionsTable.fill(1733, 58240, 58278); // 'state 455' -> true..export -> reduce (target=98, len=3)
actionsTable.fill(1733, 58281, 58290); // 'state 455' -> [..class -> reduce (target=98, len=3)
actionsTable.fill(1733, 58291, 58293); // 'state 455' -> implements..interface -> reduce (target=98, len=3)
actionsTable.fill(1733, 58294, 58298); // 'state 455' -> <..& -> reduce (target=98, len=3)
actionsTable.fill(1733, 58299, 58301); // 'state 455' -> void..typeof -> reduce (target=98, len=3)
actionsTable.fill(1733, 58302, 58324); // 'state 455' -> new..accessibility_modifier -> reduce (target=98, len=3)
actionsTable.fill(1733, 58325, 58332); // 'state 455' -> equality_operator..@par-gen.EOF -> reduce (target=98, len=3)
actionsTable.fill(1219, 58368, 58377); // 'state 456' -> true..( -> reduce (target=97, len=2)
actionsTable.fill(1219, 58379, 58381); // 'state 456' -> while..do -> reduce (target=97, len=2)
actionsTable.fill(1219, 58382, 58387); // 'state 456' -> for..of -> reduce (target=97, len=2)
actionsTable.fill(1219, 58388, 58391); // 'state 456' -> return..try -> reduce (target=97, len=2)
actionsTable.fill(1219, 58393, 58395); // 'state 456' -> switch..case -> reduce (target=97, len=2)
actionsTable.fill(1219, 58396, 58401); // 'state 456' -> default..from -> reduce (target=97, len=2)
actionsTable.fill(1219, 58404, 58406); // 'state 456' -> type..export -> reduce (target=97, len=2)
actionsTable[58409] = 1219; // 'state 456' -> [ -> reduce (target=97, len=2)
actionsTable.fill(1219, 58411, 58413); // 'state 456' -> async..function -> reduce (target=97, len=2)
actionsTable.fill(1219, 58415, 58418); // 'state 456' -> get..class -> reduce (target=97, len=2)
actionsTable[58420] = 1219; // 'state 456' -> interface -> reduce (target=97, len=2)
actionsTable[58422] = 1219; // 'state 456' -> < -> reduce (target=97, len=2)
actionsTable.fill(1219, 58427, 58429); // 'state 456' -> void..typeof -> reduce (target=97, len=2)
actionsTable[58430] = 1219; // 'state 456' -> new -> reduce (target=97, len=2)
actionsTable.fill(1219, 58437, 58439); // 'state 456' -> +..- -> reduce (target=97, len=2)
actionsTable.fill(1219, 58440, 58444); // 'state 456' -> !..await -> reduce (target=97, len=2)
actionsTable[58446] = 1219; // 'state 456' -> identifier -> reduce (target=97, len=2)
actionsTable.fill(1219, 58448, 58451); // 'state 456' -> number..template_string -> reduce (target=97, len=2)
actionsTable.fill(1219, 58457, 58459); // 'state 456' -> update_operator..regex -> reduce (target=97, len=2)
actionsTable[58504] = 869; // 'state 457' -> ( -> reduce (target=178, len=1)
actionsTable[58523] = 869; // 'state 457' -> : -> reduce (target=178, len=1)
actionsTable.fill(869, 58549, 58551); // 'state 457' -> ?:..< -> reduce (target=178, len=1)
actionsTable[58632] = 927; // 'state 458' -> ( -> reduce (target=207, len=1)
actionsTable[58678] = 927; // 'state 458' -> < -> reduce (target=207, len=1)
actionsTable[58682] = 310; // 'state 458' -> => -> shift (target=155, len=0)
actionsTable.fill(1221, 58752, 58761); // 'state 459' -> true..( -> reduce (target=98, len=2)
actionsTable.fill(1221, 58763, 58765); // 'state 459' -> while..do -> reduce (target=98, len=2)
actionsTable[58765] = 1429; // 'state 459' -> ; -> reduce (target=202, len=2)
actionsTable.fill(1221, 58766, 58771); // 'state 459' -> for..of -> reduce (target=98, len=2)
actionsTable[58771] = 1429; // 'state 459' -> in -> reduce (target=202, len=2)
actionsTable.fill(1221, 58772, 58775); // 'state 459' -> return..try -> reduce (target=98, len=2)
actionsTable[58777] = 1221; // 'state 459' -> switch -> reduce (target=98, len=2)
actionsTable.fill(1221, 58781, 58785); // 'state 459' -> break..from -> reduce (target=98, len=2)
actionsTable.fill(1429, 58786, 58788); // 'state 459' -> *..as -> reduce (target=202, len=2)
actionsTable.fill(1221, 58788, 58790); // 'state 459' -> type..export -> reduce (target=98, len=2)
actionsTable[58791] = 1429; // 'state 459' -> = -> reduce (target=202, len=2)
actionsTable[58793] = 1221; // 'state 459' -> [ -> reduce (target=98, len=2)
actionsTable.fill(1221, 58795, 58797); // 'state 459' -> async..function -> reduce (target=98, len=2)
actionsTable.fill(1221, 58799, 58802); // 'state 459' -> get..class -> reduce (target=98, len=2)
actionsTable[58804] = 1221; // 'state 459' -> interface -> reduce (target=98, len=2)
actionsTable[58806] = 1221; // 'state 459' -> < -> reduce (target=98, len=2)
actionsTable.fill(1429, 58807, 58810); // 'state 459' -> >..& -> reduce (target=202, len=2)
actionsTable.fill(1221, 58811, 58813); // 'state 459' -> void..typeof -> reduce (target=98, len=2)
actionsTable[58814] = 1221; // 'state 459' -> new -> reduce (target=98, len=2)
actionsTable.fill(1429, 58815, 58821); // 'state 459' -> ?..instanceof -> reduce (target=202, len=2)
actionsTable.fill(1221, 58821, 58823); // 'state 459' -> +..- -> reduce (target=98, len=2)
actionsTable[58823] = 1429; // 'state 459' -> ** -> reduce (target=202, len=2)
actionsTable.fill(1221, 58824, 58828); // 'state 459' -> !..await -> reduce (target=98, len=2)
actionsTable.fill(1429, 58828, 58830); // 'state 459' -> ?.... -> reduce (target=202, len=2)
actionsTable[58830] = 1221; // 'state 459' -> identifier -> reduce (target=98, len=2)
actionsTable.fill(1221, 58832, 58835); // 'state 459' -> number..template_string -> reduce (target=98, len=2)
actionsTable.fill(1429, 58836, 58841); // 'state 459' -> compound_assignment_operator..multiplicative_operator -> reduce (target=202, len=2)
actionsTable.fill(1221, 58841, 58844); // 'state 459' -> update_operator..@par-gen.EOF -> reduce (target=98, len=2)
actionsTable.fill(1941, 58880, 58903); // 'state 460' -> true..try -> reduce (target=202, len=3)
actionsTable.fill(1941, 58905, 58918); // 'state 460' -> switch..export -> reduce (target=202, len=3)
actionsTable[58919] = 1941; // 'state 460' -> = -> reduce (target=202, len=3)
actionsTable.fill(1941, 58921, 58930); // 'state 460' -> [..class -> reduce (target=202, len=3)
actionsTable.fill(1941, 58931, 58938); // 'state 460' -> implements..& -> reduce (target=202, len=3)
actionsTable.fill(1941, 58939, 58941); // 'state 460' -> void..typeof -> reduce (target=202, len=3)
actionsTable.fill(1941, 58942, 58972); // 'state 460' -> new..@par-gen.EOF -> reduce (target=202, len=3)
actionsTable[59014] = 1052; // 'state 461' -> } -> shift (target=526, len=0)
actionsTable[59041] = 386; // 'state 461' -> , -> shift (target=193, len=0)
actionsTable[59144] = 396; // 'state 462' -> ( -> shift (target=198, len=0)
actionsTable.fill(1745, 59264, 59273); // 'state 463' -> true..( -> reduce (target=104, len=3)
actionsTable.fill(1745, 59274, 59277); // 'state 463' -> else..do -> reduce (target=104, len=3)
actionsTable.fill(1745, 59278, 59283); // 'state 463' -> for..of -> reduce (target=104, len=3)
actionsTable.fill(1745, 59284, 59287); // 'state 463' -> return..try -> reduce (target=104, len=3)
actionsTable.fill(1745, 59289, 59291); // 'state 463' -> switch..case -> reduce (target=104, len=3)
actionsTable.fill(1745, 59292, 59297); // 'state 463' -> default..from -> reduce (target=104, len=3)
actionsTable.fill(1745, 59300, 59302); // 'state 463' -> type..export -> reduce (target=104, len=3)
actionsTable[59305] = 1745; // 'state 463' -> [ -> reduce (target=104, len=3)
actionsTable.fill(1745, 59307, 59309); // 'state 463' -> async..function -> reduce (target=104, len=3)
actionsTable.fill(1745, 59311, 59314); // 'state 463' -> get..class -> reduce (target=104, len=3)
actionsTable[59316] = 1745; // 'state 463' -> interface -> reduce (target=104, len=3)
actionsTable[59318] = 1745; // 'state 463' -> < -> reduce (target=104, len=3)
actionsTable.fill(1745, 59323, 59325); // 'state 463' -> void..typeof -> reduce (target=104, len=3)
actionsTable[59326] = 1745; // 'state 463' -> new -> reduce (target=104, len=3)
actionsTable.fill(1745, 59333, 59335); // 'state 463' -> +..- -> reduce (target=104, len=3)
actionsTable.fill(1745, 59336, 59340); // 'state 463' -> !..await -> reduce (target=104, len=3)
actionsTable[59342] = 1745; // 'state 463' -> identifier -> reduce (target=104, len=3)
actionsTable.fill(1745, 59344, 59347); // 'state 463' -> number..template_string -> reduce (target=104, len=3)
actionsTable.fill(1745, 59353, 59356); // 'state 463' -> update_operator..@par-gen.EOF -> reduce (target=104, len=3)
actionsTable.fill(1429, 59392, 59415); // 'state 464' -> true..try -> reduce (target=202, len=2)
actionsTable.fill(1429, 59417, 59430); // 'state 464' -> switch..export -> reduce (target=202, len=2)
actionsTable[59431] = 1429; // 'state 464' -> = -> reduce (target=202, len=2)
actionsTable.fill(1429, 59433, 59442); // 'state 464' -> [..class -> reduce (target=202, len=2)
actionsTable.fill(1429, 59443, 59450); // 'state 464' -> implements..& -> reduce (target=202, len=2)
actionsTable.fill(1429, 59451, 59453); // 'state 464' -> void..typeof -> reduce (target=202, len=2)
actionsTable.fill(1429, 59454, 59484); // 'state 464' -> new..@par-gen.EOF -> reduce (target=202, len=2)
actionsTable[59526] = 925; // 'state 465' -> } -> reduce (target=206, len=1)
actionsTable[59528] = 927; // 'state 465' -> ( -> reduce (target=207, len=1)
actionsTable[59547] = 927; // 'state 465' -> : -> reduce (target=207, len=1)
actionsTable[59553] = 925; // 'state 465' -> , -> reduce (target=206, len=1)
actionsTable.fill(927, 59573, 59575); // 'state 465' -> ?:..< -> reduce (target=207, len=1)
actionsTable.fill(1747, 59648, 59657); // 'state 466' -> true..( -> reduce (target=105, len=3)
actionsTable.fill(1747, 59658, 59661); // 'state 466' -> else..do -> reduce (target=105, len=3)
actionsTable.fill(1747, 59662, 59667); // 'state 466' -> for..of -> reduce (target=105, len=3)
actionsTable.fill(1747, 59668, 59671); // 'state 466' -> return..try -> reduce (target=105, len=3)
actionsTable.fill(1747, 59673, 59675); // 'state 466' -> switch..case -> reduce (target=105, len=3)
actionsTable.fill(1747, 59676, 59681); // 'state 466' -> default..from -> reduce (target=105, len=3)
actionsTable.fill(1747, 59684, 59686); // 'state 466' -> type..export -> reduce (target=105, len=3)
actionsTable[59689] = 1747; // 'state 466' -> [ -> reduce (target=105, len=3)
actionsTable.fill(1747, 59691, 59693); // 'state 466' -> async..function -> reduce (target=105, len=3)
actionsTable.fill(1747, 59695, 59698); // 'state 466' -> get..class -> reduce (target=105, len=3)
actionsTable[59700] = 1747; // 'state 466' -> interface -> reduce (target=105, len=3)
actionsTable[59702] = 1747; // 'state 466' -> < -> reduce (target=105, len=3)
actionsTable.fill(1747, 59707, 59709); // 'state 466' -> void..typeof -> reduce (target=105, len=3)
actionsTable[59710] = 1747; // 'state 466' -> new -> reduce (target=105, len=3)
actionsTable.fill(1747, 59717, 59719); // 'state 466' -> +..- -> reduce (target=105, len=3)
actionsTable.fill(1747, 59720, 59724); // 'state 466' -> !..await -> reduce (target=105, len=3)
actionsTable[59726] = 1747; // 'state 466' -> identifier -> reduce (target=105, len=3)
actionsTable.fill(1747, 59728, 59731); // 'state 466' -> number..template_string -> reduce (target=105, len=3)
actionsTable.fill(1747, 59737, 59740); // 'state 466' -> update_operator..@par-gen.EOF -> reduce (target=105, len=3)
actionsTable.fill(1749, 59776, 59785); // 'state 467' -> true..( -> reduce (target=106, len=3)
actionsTable.fill(1749, 59786, 59789); // 'state 467' -> else..do -> reduce (target=106, len=3)
actionsTable.fill(1749, 59790, 59795); // 'state 467' -> for..of -> reduce (target=106, len=3)
actionsTable.fill(1749, 59796, 59799); // 'state 467' -> return..try -> reduce (target=106, len=3)
actionsTable.fill(1749, 59801, 59803); // 'state 467' -> switch..case -> reduce (target=106, len=3)
actionsTable.fill(1749, 59804, 59809); // 'state 467' -> default..from -> reduce (target=106, len=3)
actionsTable.fill(1749, 59812, 59814); // 'state 467' -> type..export -> reduce (target=106, len=3)
actionsTable[59817] = 1749; // 'state 467' -> [ -> reduce (target=106, len=3)
actionsTable.fill(1749, 59819, 59821); // 'state 467' -> async..function -> reduce (target=106, len=3)
actionsTable.fill(1749, 59823, 59826); // 'state 467' -> get..class -> reduce (target=106, len=3)
actionsTable[59828] = 1749; // 'state 467' -> interface -> reduce (target=106, len=3)
actionsTable[59830] = 1749; // 'state 467' -> < -> reduce (target=106, len=3)
actionsTable.fill(1749, 59835, 59837); // 'state 467' -> void..typeof -> reduce (target=106, len=3)
actionsTable[59838] = 1749; // 'state 467' -> new -> reduce (target=106, len=3)
actionsTable.fill(1749, 59845, 59847); // 'state 467' -> +..- -> reduce (target=106, len=3)
actionsTable.fill(1749, 59848, 59852); // 'state 467' -> !..await -> reduce (target=106, len=3)
actionsTable[59854] = 1749; // 'state 467' -> identifier -> reduce (target=106, len=3)
actionsTable.fill(1749, 59856, 59859); // 'state 467' -> number..template_string -> reduce (target=106, len=3)
actionsTable.fill(1749, 59865, 59868); // 'state 467' -> update_operator..@par-gen.EOF -> reduce (target=106, len=3)
actionsTable.fill(1221, 59904, 59942); // 'state 468' -> true..export -> reduce (target=98, len=2)
actionsTable.fill(1221, 59945, 59954); // 'state 468' -> [..class -> reduce (target=98, len=2)
actionsTable.fill(1221, 59955, 59957); // 'state 468' -> implements..interface -> reduce (target=98, len=2)
actionsTable.fill(1221, 59958, 59962); // 'state 468' -> <..& -> reduce (target=98, len=2)
actionsTable.fill(1221, 59963, 59965); // 'state 468' -> void..typeof -> reduce (target=98, len=2)
actionsTable.fill(1221, 59966, 59988); // 'state 468' -> new..accessibility_modifier -> reduce (target=98, len=2)
actionsTable.fill(1221, 59989, 59996); // 'state 468' -> equality_operator..@par-gen.EOF -> reduce (target=98, len=2)
actionsTable.fill(1765, 60032, 60041); // 'state 469' -> true..( -> reduce (target=114, len=3)
actionsTable.fill(1765, 60042, 60045); // 'state 469' -> else..do -> reduce (target=114, len=3)
actionsTable.fill(1765, 60046, 60051); // 'state 469' -> for..of -> reduce (target=114, len=3)
actionsTable.fill(1765, 60052, 60055); // 'state 469' -> return..try -> reduce (target=114, len=3)
actionsTable.fill(1765, 60057, 60059); // 'state 469' -> switch..case -> reduce (target=114, len=3)
actionsTable.fill(1765, 60060, 60065); // 'state 469' -> default..from -> reduce (target=114, len=3)
actionsTable.fill(1765, 60068, 60070); // 'state 469' -> type..export -> reduce (target=114, len=3)
actionsTable[60073] = 1765; // 'state 469' -> [ -> reduce (target=114, len=3)
actionsTable.fill(1765, 60075, 60077); // 'state 469' -> async..function -> reduce (target=114, len=3)
actionsTable.fill(1765, 60079, 60082); // 'state 469' -> get..class -> reduce (target=114, len=3)
actionsTable[60084] = 1765; // 'state 469' -> interface -> reduce (target=114, len=3)
actionsTable[60086] = 1765; // 'state 469' -> < -> reduce (target=114, len=3)
actionsTable.fill(1765, 60091, 60093); // 'state 469' -> void..typeof -> reduce (target=114, len=3)
actionsTable[60094] = 1765; // 'state 469' -> new -> reduce (target=114, len=3)
actionsTable.fill(1765, 60101, 60103); // 'state 469' -> +..- -> reduce (target=114, len=3)
actionsTable.fill(1765, 60104, 60108); // 'state 469' -> !..await -> reduce (target=114, len=3)
actionsTable[60110] = 1765; // 'state 469' -> identifier -> reduce (target=114, len=3)
actionsTable.fill(1765, 60112, 60115); // 'state 469' -> number..template_string -> reduce (target=114, len=3)
actionsTable.fill(1765, 60121, 60124); // 'state 469' -> update_operator..@par-gen.EOF -> reduce (target=114, len=3)
actionsTable.fill(1767, 60160, 60169); // 'state 470' -> true..( -> reduce (target=115, len=3)
actionsTable.fill(1767, 60170, 60173); // 'state 470' -> else..do -> reduce (target=115, len=3)
actionsTable.fill(1767, 60174, 60179); // 'state 470' -> for..of -> reduce (target=115, len=3)
actionsTable.fill(1767, 60180, 60183); // 'state 470' -> return..try -> reduce (target=115, len=3)
actionsTable.fill(1767, 60185, 60187); // 'state 470' -> switch..case -> reduce (target=115, len=3)
actionsTable.fill(1767, 60188, 60193); // 'state 470' -> default..from -> reduce (target=115, len=3)
actionsTable.fill(1767, 60196, 60198); // 'state 470' -> type..export -> reduce (target=115, len=3)
actionsTable[60201] = 1767; // 'state 470' -> [ -> reduce (target=115, len=3)
actionsTable.fill(1767, 60203, 60205); // 'state 470' -> async..function -> reduce (target=115, len=3)
actionsTable.fill(1767, 60207, 60210); // 'state 470' -> get..class -> reduce (target=115, len=3)
actionsTable[60212] = 1767; // 'state 470' -> interface -> reduce (target=115, len=3)
actionsTable[60214] = 1767; // 'state 470' -> < -> reduce (target=115, len=3)
actionsTable.fill(1767, 60219, 60221); // 'state 470' -> void..typeof -> reduce (target=115, len=3)
actionsTable[60222] = 1767; // 'state 470' -> new -> reduce (target=115, len=3)
actionsTable.fill(1767, 60229, 60231); // 'state 470' -> +..- -> reduce (target=115, len=3)
actionsTable.fill(1767, 60232, 60236); // 'state 470' -> !..await -> reduce (target=115, len=3)
actionsTable[60238] = 1767; // 'state 470' -> identifier -> reduce (target=115, len=3)
actionsTable.fill(1767, 60240, 60243); // 'state 470' -> number..template_string -> reduce (target=115, len=3)
actionsTable.fill(1767, 60249, 60252); // 'state 470' -> update_operator..@par-gen.EOF -> reduce (target=115, len=3)
actionsTable.fill(839, 60288, 60311); // 'state 471' -> true..try -> reduce (target=163, len=1)
actionsTable.fill(839, 60313, 60326); // 'state 471' -> switch..export -> reduce (target=163, len=1)
actionsTable[60327] = 839; // 'state 471' -> = -> reduce (target=163, len=1)
actionsTable.fill(839, 60329, 60338); // 'state 471' -> [..class -> reduce (target=163, len=1)
actionsTable.fill(839, 60339, 60341); // 'state 471' -> implements..interface -> reduce (target=163, len=1)
actionsTable.fill(839, 60342, 60349); // 'state 471' -> <..typeof -> reduce (target=163, len=1)
actionsTable.fill(839, 60350, 60372); // 'state 471' -> new..accessibility_modifier -> reduce (target=163, len=1)
actionsTable.fill(839, 60373, 60380); // 'state 471' -> equality_operator..@par-gen.EOF -> reduce (target=163, len=1)
actionsTable[60494] = 1078; // 'state 472' -> identifier -> shift (target=539, len=0)
actionsTable[60602] = 430; // 'state 473' -> => -> shift (target=215, len=0)
actionsTable.fill(1913, 60672, 60695); // 'state 474' -> true..try -> reduce (target=188, len=3)
actionsTable.fill(1913, 60697, 60710); // 'state 474' -> switch..export -> reduce (target=188, len=3)
actionsTable.fill(1913, 60713, 60722); // 'state 474' -> [..class -> reduce (target=188, len=3)
actionsTable.fill(1913, 60723, 60725); // 'state 474' -> implements..interface -> reduce (target=188, len=3)
actionsTable.fill(1913, 60726, 60730); // 'state 474' -> <..& -> reduce (target=188, len=3)
actionsTable.fill(1913, 60731, 60733); // 'state 474' -> void..typeof -> reduce (target=188, len=3)
actionsTable.fill(1913, 60734, 60756); // 'state 474' -> new..accessibility_modifier -> reduce (target=188, len=3)
actionsTable.fill(1913, 60757, 60764); // 'state 474' -> equality_operator..@par-gen.EOF -> reduce (target=188, len=3)
actionsTable.fill(831, 60800, 60823); // 'state 475' -> true..try -> reduce (target=159, len=1)
actionsTable.fill(831, 60825, 60838); // 'state 475' -> switch..export -> reduce (target=159, len=1)
actionsTable[60839] = 831; // 'state 475' -> = -> reduce (target=159, len=1)
actionsTable.fill(831, 60841, 60850); // 'state 475' -> [..class -> reduce (target=159, len=1)
actionsTable.fill(831, 60851, 60853); // 'state 475' -> implements..interface -> reduce (target=159, len=1)
actionsTable.fill(831, 60854, 60861); // 'state 475' -> <..typeof -> reduce (target=159, len=1)
actionsTable.fill(831, 60862, 60884); // 'state 475' -> new..accessibility_modifier -> reduce (target=159, len=1)
actionsTable.fill(831, 60885, 60892); // 'state 475' -> equality_operator..@par-gen.EOF -> reduce (target=159, len=1)
actionsTable.fill(831, 60928, 60951); // 'state 476' -> true..try -> reduce (target=159, len=1)
actionsTable.fill(831, 60953, 60966); // 'state 476' -> switch..export -> reduce (target=159, len=1)
actionsTable[60967] = 831; // 'state 476' -> = -> reduce (target=159, len=1)
actionsTable[60969] = 416; // 'state 476' -> [ -> shift (target=208, len=0)
actionsTable.fill(831, 60970, 60978); // 'state 476' -> ]..class -> reduce (target=159, len=1)
actionsTable.fill(831, 60979, 60981); // 'state 476' -> implements..interface -> reduce (target=159, len=1)
actionsTable.fill(831, 60982, 60989); // 'state 476' -> <..typeof -> reduce (target=159, len=1)
actionsTable.fill(831, 60990, 61012); // 'state 476' -> new..accessibility_modifier -> reduce (target=159, len=1)
actionsTable.fill(831, 61013, 61020); // 'state 476' -> equality_operator..@par-gen.EOF -> reduce (target=159, len=1)
actionsTable.fill(839, 61056, 61079); // 'state 477' -> true..try -> reduce (target=163, len=1)
actionsTable.fill(839, 61081, 61094); // 'state 477' -> switch..export -> reduce (target=163, len=1)
actionsTable[61095] = 839; // 'state 477' -> = -> reduce (target=163, len=1)
actionsTable.fill(839, 61097, 61106); // 'state 477' -> [..class -> reduce (target=163, len=1)
actionsTable.fill(839, 61107, 61109); // 'state 477' -> implements..interface -> reduce (target=163, len=1)
actionsTable.fill(839, 61110, 61114); // 'state 477' -> <..& -> reduce (target=163, len=1)
actionsTable[61114] = 430; // 'state 477' -> => -> shift (target=215, len=0)
actionsTable.fill(839, 61115, 61117); // 'state 477' -> void..typeof -> reduce (target=163, len=1)
actionsTable.fill(839, 61118, 61140); // 'state 477' -> new..accessibility_modifier -> reduce (target=163, len=1)
actionsTable.fill(839, 61141, 61148); // 'state 477' -> equality_operator..@par-gen.EOF -> reduce (target=163, len=1)
actionsTable.fill(1925, 61184, 61207); // 'state 478' -> true..try -> reduce (target=194, len=3)
actionsTable.fill(1925, 61209, 61222); // 'state 478' -> switch..export -> reduce (target=194, len=3)
actionsTable[61223] = 1925; // 'state 478' -> = -> reduce (target=194, len=3)
actionsTable.fill(1925, 61225, 61234); // 'state 478' -> [..class -> reduce (target=194, len=3)
actionsTable.fill(1925, 61235, 61237); // 'state 478' -> implements..interface -> reduce (target=194, len=3)
actionsTable.fill(1925, 61238, 61242); // 'state 478' -> <..& -> reduce (target=194, len=3)
actionsTable.fill(1925, 61243, 61245); // 'state 478' -> void..typeof -> reduce (target=194, len=3)
actionsTable.fill(1925, 61246, 61276); // 'state 478' -> new..@par-gen.EOF -> reduce (target=194, len=3)
actionsTable.fill(1923, 61312, 61335); // 'state 479' -> true..try -> reduce (target=193, len=3)
actionsTable.fill(1923, 61337, 61350); // 'state 479' -> switch..export -> reduce (target=193, len=3)
actionsTable.fill(1923, 61353, 61362); // 'state 479' -> [..class -> reduce (target=193, len=3)
actionsTable.fill(1923, 61363, 61365); // 'state 479' -> implements..interface -> reduce (target=193, len=3)
actionsTable.fill(1923, 61366, 61370); // 'state 479' -> <..& -> reduce (target=193, len=3)
actionsTable.fill(1923, 61371, 61373); // 'state 479' -> void..typeof -> reduce (target=193, len=3)
actionsTable.fill(1923, 61374, 61396); // 'state 479' -> new..accessibility_modifier -> reduce (target=193, len=3)
actionsTable.fill(1923, 61397, 61404); // 'state 479' -> equality_operator..@par-gen.EOF -> reduce (target=193, len=3)
actionsTable.fill(1417, 61440, 61463); // 'state 480' -> true..try -> reduce (target=196, len=2)
actionsTable.fill(1417, 61465, 61478); // 'state 480' -> switch..export -> reduce (target=196, len=2)
actionsTable.fill(1417, 61481, 61490); // 'state 480' -> [..class -> reduce (target=196, len=2)
actionsTable.fill(1417, 61491, 61493); // 'state 480' -> implements..interface -> reduce (target=196, len=2)
actionsTable.fill(1417, 61494, 61498); // 'state 480' -> <..& -> reduce (target=196, len=2)
actionsTable.fill(1417, 61499, 61501); // 'state 480' -> void..typeof -> reduce (target=196, len=2)
actionsTable.fill(1417, 61502, 61524); // 'state 480' -> new..accessibility_modifier -> reduce (target=196, len=2)
actionsTable.fill(1417, 61525, 61532); // 'state 480' -> equality_operator..@par-gen.EOF -> reduce (target=196, len=2)
actionsTable[61649] = 1086; // 'state 481' -> string -> shift (target=543, len=0)
actionsTable.fill(1269, 61696, 61705); // 'state 482' -> true..( -> reduce (target=122, len=2)
actionsTable.fill(1269, 61706, 61715); // 'state 482' -> else..of -> reduce (target=122, len=2)
actionsTable.fill(1269, 61716, 61719); // 'state 482' -> return..try -> reduce (target=122, len=2)
actionsTable.fill(1269, 61721, 61723); // 'state 482' -> switch..case -> reduce (target=122, len=2)
actionsTable.fill(1269, 61724, 61729); // 'state 482' -> default..from -> reduce (target=122, len=2)
actionsTable.fill(1269, 61732, 61734); // 'state 482' -> type..export -> reduce (target=122, len=2)
actionsTable[61737] = 1269; // 'state 482' -> [ -> reduce (target=122, len=2)
actionsTable.fill(1269, 61739, 61741); // 'state 482' -> async..function -> reduce (target=122, len=2)
actionsTable.fill(1269, 61743, 61746); // 'state 482' -> get..class -> reduce (target=122, len=2)
actionsTable[61748] = 1269; // 'state 482' -> interface -> reduce (target=122, len=2)
actionsTable[61750] = 1269; // 'state 482' -> < -> reduce (target=122, len=2)
actionsTable.fill(1269, 61755, 61757); // 'state 482' -> void..typeof -> reduce (target=122, len=2)
actionsTable[61758] = 1269; // 'state 482' -> new -> reduce (target=122, len=2)
actionsTable.fill(1269, 61765, 61767); // 'state 482' -> +..- -> reduce (target=122, len=2)
actionsTable.fill(1269, 61768, 61772); // 'state 482' -> !..await -> reduce (target=122, len=2)
actionsTable[61774] = 1269; // 'state 482' -> identifier -> reduce (target=122, len=2)
actionsTable.fill(1269, 61776, 61779); // 'state 482' -> number..template_string -> reduce (target=122, len=2)
actionsTable.fill(1269, 61785, 61788); // 'state 482' -> update_operator..@par-gen.EOF -> reduce (target=122, len=2)
actionsTable[61902] = 1094; // 'state 483' -> identifier -> shift (target=547, len=0)
actionsTable[61958] = 759; // 'state 484' -> } -> reduce (target=123, len=1)
actionsTable[61985] = 759; // 'state 484' -> , -> reduce (target=123, len=1)
actionsTable[61987] = 1096; // 'state 484' -> as -> shift (target=548, len=0)
actionsTable[62158] = 1098; // 'state 485' -> identifier -> shift (target=549, len=0)
actionsTable.fill(1773, 62208, 62217); // 'state 486' -> true..( -> reduce (target=118, len=3)
actionsTable.fill(1773, 62218, 62221); // 'state 486' -> else..do -> reduce (target=118, len=3)
actionsTable.fill(1773, 62222, 62227); // 'state 486' -> for..of -> reduce (target=118, len=3)
actionsTable.fill(1773, 62228, 62231); // 'state 486' -> return..try -> reduce (target=118, len=3)
actionsTable.fill(1773, 62233, 62235); // 'state 486' -> switch..case -> reduce (target=118, len=3)
actionsTable.fill(1773, 62236, 62241); // 'state 486' -> default..from -> reduce (target=118, len=3)
actionsTable.fill(1773, 62244, 62246); // 'state 486' -> type..export -> reduce (target=118, len=3)
actionsTable[62249] = 1773; // 'state 486' -> [ -> reduce (target=118, len=3)
actionsTable.fill(1773, 62251, 62253); // 'state 486' -> async..function -> reduce (target=118, len=3)
actionsTable.fill(1773, 62255, 62258); // 'state 486' -> get..class -> reduce (target=118, len=3)
actionsTable[62260] = 1773; // 'state 486' -> interface -> reduce (target=118, len=3)
actionsTable[62262] = 1773; // 'state 486' -> < -> reduce (target=118, len=3)
actionsTable.fill(1773, 62267, 62269); // 'state 486' -> void..typeof -> reduce (target=118, len=3)
actionsTable[62270] = 1773; // 'state 486' -> new -> reduce (target=118, len=3)
actionsTable.fill(1773, 62277, 62279); // 'state 486' -> +..- -> reduce (target=118, len=3)
actionsTable.fill(1773, 62280, 62284); // 'state 486' -> !..await -> reduce (target=118, len=3)
actionsTable[62286] = 1773; // 'state 486' -> identifier -> reduce (target=118, len=3)
actionsTable.fill(1773, 62288, 62291); // 'state 486' -> number..template_string -> reduce (target=118, len=3)
actionsTable.fill(1773, 62297, 62300); // 'state 486' -> update_operator..@par-gen.EOF -> reduce (target=118, len=3)
actionsTable.fill(1785, 62336, 62345); // 'state 487' -> true..( -> reduce (target=124, len=3)
actionsTable.fill(1785, 62346, 62349); // 'state 487' -> else..do -> reduce (target=124, len=3)
actionsTable.fill(1785, 62350, 62355); // 'state 487' -> for..of -> reduce (target=124, len=3)
actionsTable.fill(1785, 62356, 62359); // 'state 487' -> return..try -> reduce (target=124, len=3)
actionsTable.fill(1785, 62361, 62363); // 'state 487' -> switch..case -> reduce (target=124, len=3)
actionsTable.fill(1785, 62364, 62369); // 'state 487' -> default..from -> reduce (target=124, len=3)
actionsTable.fill(1785, 62372, 62374); // 'state 487' -> type..export -> reduce (target=124, len=3)
actionsTable[62377] = 1785; // 'state 487' -> [ -> reduce (target=124, len=3)
actionsTable.fill(1785, 62379, 62381); // 'state 487' -> async..function -> reduce (target=124, len=3)
actionsTable.fill(1785, 62383, 62386); // 'state 487' -> get..class -> reduce (target=124, len=3)
actionsTable[62388] = 1785; // 'state 487' -> interface -> reduce (target=124, len=3)
actionsTable[62390] = 1785; // 'state 487' -> < -> reduce (target=124, len=3)
actionsTable.fill(1785, 62395, 62397); // 'state 487' -> void..typeof -> reduce (target=124, len=3)
actionsTable[62398] = 1785; // 'state 487' -> new -> reduce (target=124, len=3)
actionsTable.fill(1785, 62405, 62407); // 'state 487' -> +..- -> reduce (target=124, len=3)
actionsTable.fill(1785, 62408, 62412); // 'state 487' -> !..await -> reduce (target=124, len=3)
actionsTable[62414] = 1785; // 'state 487' -> identifier -> reduce (target=124, len=3)
actionsTable.fill(1785, 62416, 62419); // 'state 487' -> number..template_string -> reduce (target=124, len=3)
actionsTable.fill(1785, 62425, 62428); // 'state 487' -> update_operator..@par-gen.EOF -> reduce (target=124, len=3)
actionsTable[62542] = 452; // 'state 488' -> identifier -> shift (target=226, len=0)
actionsTable.fill(1785, 62592, 62601); // 'state 489' -> true..( -> reduce (target=124, len=3)
actionsTable.fill(1785, 62602, 62605); // 'state 489' -> else..do -> reduce (target=124, len=3)
actionsTable[62605] = 1102; // 'state 489' -> ; -> shift (target=551, len=0)
actionsTable.fill(1785, 62606, 62611); // 'state 489' -> for..of -> reduce (target=124, len=3)
actionsTable.fill(1785, 62612, 62615); // 'state 489' -> return..try -> reduce (target=124, len=3)
actionsTable.fill(1785, 62617, 62619); // 'state 489' -> switch..case -> reduce (target=124, len=3)
actionsTable.fill(1785, 62620, 62625); // 'state 489' -> default..from -> reduce (target=124, len=3)
actionsTable.fill(1785, 62628, 62630); // 'state 489' -> type..export -> reduce (target=124, len=3)
actionsTable[62633] = 1785; // 'state 489' -> [ -> reduce (target=124, len=3)
actionsTable.fill(1785, 62635, 62637); // 'state 489' -> async..function -> reduce (target=124, len=3)
actionsTable.fill(1785, 62639, 62642); // 'state 489' -> get..class -> reduce (target=124, len=3)
actionsTable[62644] = 1785; // 'state 489' -> interface -> reduce (target=124, len=3)
actionsTable[62646] = 1785; // 'state 489' -> < -> reduce (target=124, len=3)
actionsTable.fill(1785, 62651, 62653); // 'state 489' -> void..typeof -> reduce (target=124, len=3)
actionsTable[62654] = 1785; // 'state 489' -> new -> reduce (target=124, len=3)
actionsTable.fill(1785, 62661, 62663); // 'state 489' -> +..- -> reduce (target=124, len=3)
actionsTable.fill(1785, 62664, 62668); // 'state 489' -> !..await -> reduce (target=124, len=3)
actionsTable[62670] = 1785; // 'state 489' -> identifier -> reduce (target=124, len=3)
actionsTable.fill(1785, 62672, 62675); // 'state 489' -> number..template_string -> reduce (target=124, len=3)
actionsTable.fill(1785, 62681, 62684); // 'state 489' -> update_operator..@par-gen.EOF -> reduce (target=124, len=3)
actionsTable[62801] = 1104; // 'state 490' -> string -> shift (target=552, len=0)
actionsTable[62926] = 1106; // 'state 491' -> identifier -> shift (target=553, len=0)
actionsTable.fill(1789, 62976, 62985); // 'state 492' -> true..( -> reduce (target=126, len=3)
actionsTable.fill(1789, 62986, 62995); // 'state 492' -> else..of -> reduce (target=126, len=3)
actionsTable.fill(1789, 62996, 62999); // 'state 492' -> return..try -> reduce (target=126, len=3)
actionsTable.fill(1789, 63001, 63003); // 'state 492' -> switch..case -> reduce (target=126, len=3)
actionsTable.fill(1789, 63004, 63009); // 'state 492' -> default..from -> reduce (target=126, len=3)
actionsTable.fill(1789, 63012, 63014); // 'state 492' -> type..export -> reduce (target=126, len=3)
actionsTable[63017] = 1789; // 'state 492' -> [ -> reduce (target=126, len=3)
actionsTable.fill(1789, 63019, 63021); // 'state 492' -> async..function -> reduce (target=126, len=3)
actionsTable.fill(1789, 63023, 63026); // 'state 492' -> get..class -> reduce (target=126, len=3)
actionsTable[63028] = 1789; // 'state 492' -> interface -> reduce (target=126, len=3)
actionsTable[63030] = 1789; // 'state 492' -> < -> reduce (target=126, len=3)
actionsTable.fill(1789, 63035, 63037); // 'state 492' -> void..typeof -> reduce (target=126, len=3)
actionsTable[63038] = 1789; // 'state 492' -> new -> reduce (target=126, len=3)
actionsTable.fill(1789, 63045, 63047); // 'state 492' -> +..- -> reduce (target=126, len=3)
actionsTable.fill(1789, 63048, 63052); // 'state 492' -> !..await -> reduce (target=126, len=3)
actionsTable[63054] = 1789; // 'state 492' -> identifier -> reduce (target=126, len=3)
actionsTable.fill(1789, 63056, 63059); // 'state 492' -> number..template_string -> reduce (target=126, len=3)
actionsTable.fill(1789, 63065, 63068); // 'state 492' -> update_operator..@par-gen.EOF -> reduce (target=126, len=3)
actionsTable.fill(1789, 63104, 63113); // 'state 493' -> true..( -> reduce (target=126, len=3)
actionsTable.fill(1789, 63114, 63117); // 'state 493' -> else..do -> reduce (target=126, len=3)
actionsTable[63117] = 1108; // 'state 493' -> ; -> shift (target=554, len=0)
actionsTable.fill(1789, 63118, 63123); // 'state 493' -> for..of -> reduce (target=126, len=3)
actionsTable.fill(1789, 63124, 63127); // 'state 493' -> return..try -> reduce (target=126, len=3)
actionsTable.fill(1789, 63129, 63131); // 'state 493' -> switch..case -> reduce (target=126, len=3)
actionsTable.fill(1789, 63132, 63137); // 'state 493' -> default..from -> reduce (target=126, len=3)
actionsTable[63137] = 462; // 'state 493' -> , -> shift (target=231, len=0)
actionsTable.fill(1789, 63140, 63142); // 'state 493' -> type..export -> reduce (target=126, len=3)
actionsTable[63145] = 1789; // 'state 493' -> [ -> reduce (target=126, len=3)
actionsTable.fill(1789, 63147, 63149); // 'state 493' -> async..function -> reduce (target=126, len=3)
actionsTable.fill(1789, 63151, 63154); // 'state 493' -> get..class -> reduce (target=126, len=3)
actionsTable[63156] = 1789; // 'state 493' -> interface -> reduce (target=126, len=3)
actionsTable[63158] = 1789; // 'state 493' -> < -> reduce (target=126, len=3)
actionsTable.fill(1789, 63163, 63165); // 'state 493' -> void..typeof -> reduce (target=126, len=3)
actionsTable[63166] = 1789; // 'state 493' -> new -> reduce (target=126, len=3)
actionsTable.fill(1789, 63173, 63175); // 'state 493' -> +..- -> reduce (target=126, len=3)
actionsTable.fill(1789, 63176, 63180); // 'state 493' -> !..await -> reduce (target=126, len=3)
actionsTable[63182] = 1789; // 'state 493' -> identifier -> reduce (target=126, len=3)
actionsTable.fill(1789, 63184, 63187); // 'state 493' -> number..template_string -> reduce (target=126, len=3)
actionsTable.fill(1789, 63193, 63196); // 'state 493' -> update_operator..@par-gen.EOF -> reduce (target=126, len=3)
actionsTable.fill(1279, 63232, 63241); // 'state 494' -> true..( -> reduce (target=127, len=2)
actionsTable.fill(1279, 63242, 63251); // 'state 494' -> else..of -> reduce (target=127, len=2)
actionsTable.fill(1279, 63252, 63255); // 'state 494' -> return..try -> reduce (target=127, len=2)
actionsTable.fill(1279, 63257, 63259); // 'state 494' -> switch..case -> reduce (target=127, len=2)
actionsTable.fill(1279, 63260, 63266); // 'state 494' -> default.., -> reduce (target=127, len=2)
actionsTable.fill(1279, 63268, 63270); // 'state 494' -> type..export -> reduce (target=127, len=2)
actionsTable[63271] = 464; // 'state 494' -> = -> shift (target=232, len=0)
actionsTable[63273] = 1279; // 'state 494' -> [ -> reduce (target=127, len=2)
actionsTable.fill(1279, 63275, 63277); // 'state 494' -> async..function -> reduce (target=127, len=2)
actionsTable.fill(1279, 63279, 63282); // 'state 494' -> get..class -> reduce (target=127, len=2)
actionsTable[63284] = 1279; // 'state 494' -> interface -> reduce (target=127, len=2)
actionsTable[63286] = 1279; // 'state 494' -> < -> reduce (target=127, len=2)
actionsTable.fill(1279, 63291, 63293); // 'state 494' -> void..typeof -> reduce (target=127, len=2)
actionsTable[63294] = 1279; // 'state 494' -> new -> reduce (target=127, len=2)
actionsTable.fill(1279, 63301, 63303); // 'state 494' -> +..- -> reduce (target=127, len=2)
actionsTable.fill(1279, 63304, 63308); // 'state 494' -> !..await -> reduce (target=127, len=2)
actionsTable[63310] = 1279; // 'state 494' -> identifier -> reduce (target=127, len=2)
actionsTable.fill(1279, 63312, 63315); // 'state 494' -> number..template_string -> reduce (target=127, len=2)
actionsTable.fill(1279, 63321, 63324); // 'state 494' -> update_operator..@par-gen.EOF -> reduce (target=127, len=2)
actionsTable.fill(1285, 63360, 63383); // 'state 495' -> true..try -> reduce (target=130, len=2)
actionsTable.fill(1285, 63385, 63394); // 'state 495' -> switch.., -> reduce (target=130, len=2)
actionsTable.fill(1285, 63396, 63398); // 'state 495' -> type..export -> reduce (target=130, len=2)
actionsTable[63399] = 1285; // 'state 495' -> = -> reduce (target=130, len=2)
actionsTable.fill(1285, 63401, 63405); // 'state 495' -> [..function -> reduce (target=130, len=2)
actionsTable.fill(1285, 63407, 63410); // 'state 495' -> get..class -> reduce (target=130, len=2)
actionsTable.fill(1285, 63412, 63415); // 'state 495' -> interface..< -> reduce (target=130, len=2)
actionsTable.fill(1285, 63419, 63421); // 'state 495' -> void..typeof -> reduce (target=130, len=2)
actionsTable[63422] = 1285; // 'state 495' -> new -> reduce (target=130, len=2)
actionsTable.fill(1285, 63429, 63431); // 'state 495' -> +..- -> reduce (target=130, len=2)
actionsTable.fill(1285, 63432, 63436); // 'state 495' -> !..await -> reduce (target=130, len=2)
actionsTable[63438] = 1285; // 'state 495' -> identifier -> reduce (target=130, len=2)
actionsTable.fill(1285, 63440, 63443); // 'state 495' -> number..template_string -> reduce (target=130, len=2)
actionsTable.fill(1285, 63449, 63452); // 'state 495' -> update_operator..@par-gen.EOF -> reduce (target=130, len=2)
actionsTable[63494] = 775; // 'state 496' -> } -> reduce (target=131, len=1)
actionsTable[63515] = 927; // 'state 496' -> : -> reduce (target=207, len=1)
actionsTable[63521] = 775; // 'state 496' -> , -> reduce (target=131, len=1)
actionsTable[63527] = 470; // 'state 496' -> = -> shift (target=235, len=0)
actionsTable[63643] = 472; // 'state 497' -> : -> shift (target=236, len=0)
actionsTable.fill(1291, 63744, 63767); // 'state 498' -> true..try -> reduce (target=133, len=2)
actionsTable.fill(1291, 63769, 63778); // 'state 498' -> switch.., -> reduce (target=133, len=2)
actionsTable.fill(1291, 63780, 63782); // 'state 498' -> type..export -> reduce (target=133, len=2)
actionsTable[63783] = 1291; // 'state 498' -> = -> reduce (target=133, len=2)
actionsTable.fill(1291, 63785, 63789); // 'state 498' -> [..function -> reduce (target=133, len=2)
actionsTable.fill(1291, 63791, 63794); // 'state 498' -> get..class -> reduce (target=133, len=2)
actionsTable.fill(1291, 63796, 63799); // 'state 498' -> interface..< -> reduce (target=133, len=2)
actionsTable.fill(1291, 63803, 63805); // 'state 498' -> void..typeof -> reduce (target=133, len=2)
actionsTable[63806] = 1291; // 'state 498' -> new -> reduce (target=133, len=2)
actionsTable.fill(1291, 63813, 63815); // 'state 498' -> +..- -> reduce (target=133, len=2)
actionsTable.fill(1291, 63816, 63820); // 'state 498' -> !..await -> reduce (target=133, len=2)
actionsTable[63822] = 1291; // 'state 498' -> identifier -> reduce (target=133, len=2)
actionsTable.fill(1291, 63824, 63827); // 'state 498' -> number..template_string -> reduce (target=133, len=2)
actionsTable.fill(1291, 63833, 63836); // 'state 498' -> update_operator..@par-gen.EOF -> reduce (target=133, len=2)
actionsTable[63905] = 781; // 'state 499' -> , -> reduce (target=134, len=1)
actionsTable[63911] = 478; // 'state 499' -> = -> shift (target=239, len=0)
actionsTable[63914] = 781; // 'state 499' -> ] -> reduce (target=134, len=1)
actionsTable[64058] = 490; // 'state 500' -> => -> shift (target=245, len=0)
actionsTable.fill(1955, 64128, 64151); // 'state 501' -> true..try -> reduce (target=209, len=3)
actionsTable.fill(1955, 64153, 64166); // 'state 501' -> switch..export -> reduce (target=209, len=3)
actionsTable.fill(1955, 64169, 64178); // 'state 501' -> [..class -> reduce (target=209, len=3)
actionsTable.fill(1955, 64179, 64181); // 'state 501' -> implements..interface -> reduce (target=209, len=3)
actionsTable.fill(1955, 64182, 64186); // 'state 501' -> <..& -> reduce (target=209, len=3)
actionsTable.fill(1955, 64187, 64189); // 'state 501' -> void..typeof -> reduce (target=209, len=3)
actionsTable.fill(1955, 64190, 64212); // 'state 501' -> new..accessibility_modifier -> reduce (target=209, len=3)
actionsTable.fill(1955, 64213, 64220); // 'state 501' -> equality_operator..@par-gen.EOF -> reduce (target=209, len=3)
actionsTable.fill(1299, 64261, 64263); // 'state 502' -> {..} -> reduce (target=137, len=2)
actionsTable[64269] = 1299; // 'state 502' -> ; -> reduce (target=137, len=2)
actionsTable[64274] = 1299; // 'state 502' -> of -> reduce (target=137, len=2)
actionsTable[64283] = 1299; // 'state 502' -> : -> reduce (target=137, len=2)
actionsTable.fill(1299, 64288, 64290); // 'state 502' -> from.., -> reduce (target=137, len=2)
actionsTable[64292] = 1299; // 'state 502' -> type -> reduce (target=137, len=2)
actionsTable[64297] = 1299; // 'state 502' -> [ -> reduce (target=137, len=2)
actionsTable[64299] = 1299; // 'state 502' -> async -> reduce (target=137, len=2)
actionsTable.fill(1299, 64302, 64305); // 'state 502' -> readonly..set -> reduce (target=137, len=2)
actionsTable[64309] = 1299; // 'state 502' -> ?: -> reduce (target=137, len=2)
actionsTable[64314] = 1299; // 'state 502' -> => -> reduce (target=137, len=2)
actionsTable[64318] = 1299; // 'state 502' -> new -> reduce (target=137, len=2)
actionsTable[64334] = 1299; // 'state 502' -> identifier -> reduce (target=137, len=2)
actionsTable.fill(1299, 64336, 64338); // 'state 502' -> number..string -> reduce (target=137, len=2)
actionsTable[64389] = 797; // 'state 503' -> { -> reduce (target=142, len=1)
actionsTable[64425] = 797; // 'state 503' -> [ -> reduce (target=142, len=1)
actionsTable[64427] = 797; // 'state 503' -> async -> reduce (target=142, len=1)
actionsTable.fill(797, 64429, 64433); // 'state 503' -> static..set -> reduce (target=142, len=1)
actionsTable[64462] = 797; // 'state 503' -> identifier -> reduce (target=142, len=1)
actionsTable[64467] = 797; // 'state 503' -> accessibility_modifier -> reduce (target=142, len=1)
actionsTable[64517] = 797; // 'state 504' -> { -> reduce (target=142, len=1)
actionsTable[64530] = 797; // 'state 504' -> of -> reduce (target=142, len=1)
actionsTable[64544] = 797; // 'state 504' -> from -> reduce (target=142, len=1)
actionsTable[64548] = 797; // 'state 504' -> type -> reduce (target=142, len=1)
actionsTable[64553] = 797; // 'state 504' -> [ -> reduce (target=142, len=1)
actionsTable[64555] = 797; // 'state 504' -> async -> reduce (target=142, len=1)
actionsTable.fill(797, 64557, 64561); // 'state 504' -> static..set -> reduce (target=142, len=1)
actionsTable.fill(797, 64590, 64594); // 'state 504' -> identifier..string -> reduce (target=142, len=1)
actionsTable[64595] = 797; // 'state 504' -> accessibility_modifier -> reduce (target=142, len=1)
actionsTable.fill(1823, 64640, 64649); // 'state 505' -> true..( -> reduce (target=143, len=3)
actionsTable.fill(1823, 64650, 64659); // 'state 505' -> else..of -> reduce (target=143, len=3)
actionsTable[64659] = 1957; // 'state 505' -> in -> reduce (target=210, len=3)
actionsTable.fill(1823, 64660, 64663); // 'state 505' -> return..try -> reduce (target=143, len=3)
actionsTable.fill(1823, 64665, 64667); // 'state 505' -> switch..case -> reduce (target=143, len=3)
actionsTable.fill(1823, 64668, 64673); // 'state 505' -> default..from -> reduce (target=143, len=3)
actionsTable.fill(1957, 64674, 64676); // 'state 505' -> *..as -> reduce (target=210, len=3)
actionsTable.fill(1823, 64676, 64678); // 'state 505' -> type..export -> reduce (target=143, len=3)
actionsTable[64681] = 1823; // 'state 505' -> [ -> reduce (target=143, len=3)
actionsTable.fill(1823, 64683, 64685); // 'state 505' -> async..function -> reduce (target=143, len=3)
actionsTable.fill(1823, 64687, 64690); // 'state 505' -> get..class -> reduce (target=143, len=3)
actionsTable[64692] = 1823; // 'state 505' -> interface -> reduce (target=143, len=3)
actionsTable[64694] = 1823; // 'state 505' -> < -> reduce (target=143, len=3)
actionsTable.fill(1957, 64695, 64698); // 'state 505' -> >..& -> reduce (target=210, len=3)
actionsTable.fill(1823, 64699, 64701); // 'state 505' -> void..typeof -> reduce (target=143, len=3)
actionsTable[64702] = 1823; // 'state 505' -> new -> reduce (target=143, len=3)
actionsTable.fill(1957, 64703, 64709); // 'state 505' -> ?..instanceof -> reduce (target=210, len=3)
actionsTable.fill(1823, 64709, 64711); // 'state 505' -> +..- -> reduce (target=143, len=3)
actionsTable[64711] = 1957; // 'state 505' -> ** -> reduce (target=210, len=3)
actionsTable.fill(1823, 64712, 64716); // 'state 505' -> !..await -> reduce (target=143, len=3)
actionsTable.fill(1957, 64716, 64718); // 'state 505' -> ?.... -> reduce (target=210, len=3)
actionsTable[64718] = 1823; // 'state 505' -> identifier -> reduce (target=143, len=3)
actionsTable.fill(1823, 64720, 64723); // 'state 505' -> number..template_string -> reduce (target=143, len=3)
actionsTable.fill(1957, 64725, 64729); // 'state 505' -> equality_operator..multiplicative_operator -> reduce (target=210, len=3)
actionsTable.fill(1823, 64729, 64732); // 'state 505' -> update_operator..@par-gen.EOF -> reduce (target=143, len=3)
actionsTable.fill(1957, 64768, 64791); // 'state 506' -> true..try -> reduce (target=210, len=3)
actionsTable.fill(1957, 64793, 64806); // 'state 506' -> switch..export -> reduce (target=210, len=3)
actionsTable.fill(1957, 64809, 64818); // 'state 506' -> [..class -> reduce (target=210, len=3)
actionsTable.fill(1957, 64819, 64821); // 'state 506' -> implements..interface -> reduce (target=210, len=3)
actionsTable.fill(1957, 64822, 64826); // 'state 506' -> <..& -> reduce (target=210, len=3)
actionsTable.fill(1957, 64827, 64829); // 'state 506' -> void..typeof -> reduce (target=210, len=3)
actionsTable.fill(1957, 64830, 64852); // 'state 506' -> new..accessibility_modifier -> reduce (target=210, len=3)
actionsTable.fill(1957, 64853, 64860); // 'state 506' -> equality_operator..@par-gen.EOF -> reduce (target=210, len=3)
actionsTable.fill(1321, 64896, 64919); // 'state 507' -> true..try -> reduce (target=148, len=2)
actionsTable.fill(1321, 64921, 64934); // 'state 507' -> switch..export -> reduce (target=148, len=2)
actionsTable.fill(1321, 64937, 64946); // 'state 507' -> [..class -> reduce (target=148, len=2)
actionsTable.fill(1321, 64947, 64949); // 'state 507' -> implements..interface -> reduce (target=148, len=2)
actionsTable.fill(1321, 64950, 64954); // 'state 507' -> <..& -> reduce (target=148, len=2)
actionsTable.fill(1321, 64955, 64957); // 'state 507' -> void..typeof -> reduce (target=148, len=2)
actionsTable.fill(1321, 64958, 64980); // 'state 507' -> new..accessibility_modifier -> reduce (target=148, len=2)
actionsTable.fill(1321, 64981, 64988); // 'state 507' -> equality_operator..@par-gen.EOF -> reduce (target=148, len=2)
actionsTable[65030] = 807; // 'state 508' -> } -> reduce (target=147, len=1)
actionsTable[65037] = 807; // 'state 508' -> ; -> reduce (target=147, len=1)
actionsTable[65042] = 807; // 'state 508' -> of -> reduce (target=147, len=1)
actionsTable[65056] = 807; // 'state 508' -> from -> reduce (target=147, len=1)
actionsTable[65060] = 807; // 'state 508' -> type -> reduce (target=147, len=1)
actionsTable[65065] = 807; // 'state 508' -> [ -> reduce (target=147, len=1)
actionsTable[65067] = 807; // 'state 508' -> async -> reduce (target=147, len=1)
actionsTable.fill(807, 65069, 65073); // 'state 508' -> static..set -> reduce (target=147, len=1)
actionsTable.fill(807, 65102, 65106); // 'state 508' -> identifier..string -> reduce (target=147, len=1)
actionsTable[65107] = 807; // 'state 508' -> accessibility_modifier -> reduce (target=147, len=1)
actionsTable[65158] = 869; // 'state 509' -> } -> reduce (target=178, len=1)
actionsTable[65160] = 869; // 'state 509' -> ( -> reduce (target=178, len=1)
actionsTable[65165] = 869; // 'state 509' -> ; -> reduce (target=178, len=1)
actionsTable[65170] = 797; // 'state 509' -> of -> reduce (target=142, len=1)
actionsTable[65179] = 869; // 'state 509' -> : -> reduce (target=178, len=1)
actionsTable[65184] = 797; // 'state 509' -> from -> reduce (target=142, len=1)
actionsTable[65188] = 797; // 'state 509' -> type -> reduce (target=142, len=1)
actionsTable[65191] = 869; // 'state 509' -> = -> reduce (target=178, len=1)
actionsTable[65193] = 797; // 'state 509' -> [ -> reduce (target=142, len=1)
actionsTable[65195] = 797; // 'state 509' -> async -> reduce (target=142, len=1)
actionsTable.fill(797, 65197, 65201); // 'state 509' -> static..set -> reduce (target=142, len=1)
actionsTable.fill(869, 65205, 65207); // 'state 509' -> ?:..< -> reduce (target=178, len=1)
actionsTable.fill(797, 65230, 65234); // 'state 509' -> identifier..string -> reduce (target=142, len=1)
actionsTable[65235] = 797; // 'state 509' -> accessibility_modifier -> reduce (target=142, len=1)
actionsTable[65285] = 797; // 'state 510' -> { -> reduce (target=142, len=1)
actionsTable[65286] = 869; // 'state 510' -> } -> reduce (target=178, len=1)
actionsTable.fill(869, 65288, 65290); // 'state 510' -> (..) -> reduce (target=178, len=1)
actionsTable[65293] = 869; // 'state 510' -> ; -> reduce (target=178, len=1)
actionsTable[65298] = 797; // 'state 510' -> of -> reduce (target=142, len=1)
actionsTable[65299] = 869; // 'state 510' -> in -> reduce (target=178, len=1)
actionsTable[65307] = 869; // 'state 510' -> : -> reduce (target=178, len=1)
actionsTable[65312] = 797; // 'state 510' -> from -> reduce (target=142, len=1)
actionsTable.fill(869, 65313, 65316); // 'state 510' -> ,..as -> reduce (target=178, len=1)
actionsTable[65316] = 797; // 'state 510' -> type -> reduce (target=142, len=1)
actionsTable[65319] = 869; // 'state 510' -> = -> reduce (target=178, len=1)
actionsTable[65321] = 797; // 'state 510' -> [ -> reduce (target=142, len=1)
actionsTable[65323] = 797; // 'state 510' -> async -> reduce (target=142, len=1)
actionsTable.fill(797, 65325, 65329); // 'state 510' -> static..set -> reduce (target=142, len=1)
actionsTable.fill(869, 65333, 65338); // 'state 510' -> ?:..& -> reduce (target=178, len=1)
actionsTable.fill(869, 65343, 65352); // 'state 510' -> ?..** -> reduce (target=178, len=1)
actionsTable.fill(869, 65356, 65358); // 'state 510' -> ?.... -> reduce (target=178, len=1)
actionsTable.fill(797, 65358, 65362); // 'state 510' -> identifier..string -> reduce (target=142, len=1)
actionsTable[65363] = 797; // 'state 510' -> accessibility_modifier -> reduce (target=142, len=1)
actionsTable.fill(869, 65364, 65370); // 'state 510' -> compound_assignment_operator..update_operator -> reduce (target=178, len=1)
actionsTable.fill(1839, 65408, 65417); // 'state 511' -> true..( -> reduce (target=151, len=3)
actionsTable.fill(1839, 65418, 65421); // 'state 511' -> else..do -> reduce (target=151, len=3)
actionsTable.fill(1839, 65422, 65427); // 'state 511' -> for..of -> reduce (target=151, len=3)
actionsTable.fill(1839, 65428, 65431); // 'state 511' -> return..try -> reduce (target=151, len=3)
actionsTable.fill(1839, 65433, 65435); // 'state 511' -> switch..case -> reduce (target=151, len=3)
actionsTable.fill(1839, 65436, 65441); // 'state 511' -> default..from -> reduce (target=151, len=3)
actionsTable.fill(1839, 65444, 65446); // 'state 511' -> type..export -> reduce (target=151, len=3)
actionsTable[65449] = 1839; // 'state 511' -> [ -> reduce (target=151, len=3)
actionsTable.fill(1839, 65451, 65453); // 'state 511' -> async..function -> reduce (target=151, len=3)
actionsTable.fill(1839, 65455, 65458); // 'state 511' -> get..class -> reduce (target=151, len=3)
actionsTable[65460] = 1839; // 'state 511' -> interface -> reduce (target=151, len=3)
actionsTable[65462] = 1839; // 'state 511' -> < -> reduce (target=151, len=3)
actionsTable.fill(1839, 65467, 65469); // 'state 511' -> void..typeof -> reduce (target=151, len=3)
actionsTable[65470] = 1839; // 'state 511' -> new -> reduce (target=151, len=3)
actionsTable.fill(1839, 65477, 65479); // 'state 511' -> +..- -> reduce (target=151, len=3)
actionsTable.fill(1839, 65480, 65484); // 'state 511' -> !..await -> reduce (target=151, len=3)
actionsTable[65486] = 1839; // 'state 511' -> identifier -> reduce (target=151, len=3)
actionsTable.fill(1839, 65488, 65491); // 'state 511' -> number..template_string -> reduce (target=151, len=3)
actionsTable.fill(1839, 65497, 65500); // 'state 511' -> update_operator..@par-gen.EOF -> reduce (target=151, len=3)
actionsTable[65575] = 522; // 'state 512' -> = -> shift (target=261, len=0)
actionsTable.fill(1907, 65664, 65687); // 'state 513' -> true..try -> reduce (target=185, len=3)
actionsTable.fill(1907, 65689, 65702); // 'state 513' -> switch..export -> reduce (target=185, len=3)
actionsTable.fill(1907, 65705, 65714); // 'state 513' -> [..class -> reduce (target=185, len=3)
actionsTable.fill(1907, 65715, 65717); // 'state 513' -> implements..interface -> reduce (target=185, len=3)
actionsTable.fill(1907, 65718, 65722); // 'state 513' -> <..& -> reduce (target=185, len=3)
actionsTable.fill(1907, 65723, 65725); // 'state 513' -> void..typeof -> reduce (target=185, len=3)
actionsTable.fill(1907, 65726, 65748); // 'state 513' -> new..accessibility_modifier -> reduce (target=185, len=3)
actionsTable.fill(1907, 65749, 65756); // 'state 513' -> equality_operator..@par-gen.EOF -> reduce (target=185, len=3)
actionsTable.fill(1333, 65792, 65811); // 'state 514' -> true..of -> reduce (target=154, len=2)
actionsTable.fill(1333, 65812, 65815); // 'state 514' -> return..try -> reduce (target=154, len=2)
actionsTable.fill(1333, 65817, 65819); // 'state 514' -> switch..case -> reduce (target=154, len=2)
actionsTable.fill(1333, 65820, 65826); // 'state 514' -> default.., -> reduce (target=154, len=2)
actionsTable.fill(1333, 65828, 65830); // 'state 514' -> type..export -> reduce (target=154, len=2)
actionsTable[65831] = 1333; // 'state 514' -> = -> reduce (target=154, len=2)
actionsTable[65833] = 1333; // 'state 514' -> [ -> reduce (target=154, len=2)
actionsTable.fill(1333, 65835, 65842); // 'state 514' -> async..class -> reduce (target=154, len=2)
actionsTable[65844] = 1333; // 'state 514' -> interface -> reduce (target=154, len=2)
actionsTable[65846] = 1333; // 'state 514' -> < -> reduce (target=154, len=2)
actionsTable[65848] = 506; // 'state 514' -> | -> shift (target=253, len=0)
actionsTable[65849] = 508; // 'state 514' -> & -> shift (target=254, len=0)
actionsTable.fill(1333, 65850, 65853); // 'state 514' -> =>..typeof -> reduce (target=154, len=2)
actionsTable[65854] = 1333; // 'state 514' -> new -> reduce (target=154, len=2)
actionsTable.fill(1333, 65861, 65863); // 'state 514' -> +..- -> reduce (target=154, len=2)
actionsTable.fill(1333, 65864, 65868); // 'state 514' -> !..await -> reduce (target=154, len=2)
actionsTable.fill(1333, 65870, 65876); // 'state 514' -> identifier..accessibility_modifier -> reduce (target=154, len=2)
actionsTable.fill(1333, 65881, 65884); // 'state 514' -> update_operator..@par-gen.EOF -> reduce (target=154, len=2)
actionsTable.fill(1899, 65920, 65943); // 'state 515' -> true..try -> reduce (target=181, len=3)
actionsTable.fill(1899, 65945, 65958); // 'state 515' -> switch..export -> reduce (target=181, len=3)
actionsTable.fill(1899, 65961, 65970); // 'state 515' -> [..class -> reduce (target=181, len=3)
actionsTable.fill(1899, 65971, 65981); // 'state 515' -> implements..typeof -> reduce (target=181, len=3)
actionsTable.fill(1899, 65982, 66004); // 'state 515' -> new..accessibility_modifier -> reduce (target=181, len=3)
actionsTable.fill(1899, 66005, 66012); // 'state 515' -> equality_operator..@par-gen.EOF -> reduce (target=181, len=3)
actionsTable[66057] = 1168; // 'state 516' -> ) -> shift (target=584, len=0)
actionsTable[66081] = 524; // 'state 516' -> , -> shift (target=262, len=0)
actionsTable[66185] = 1307; // 'state 517' -> ) -> reduce (target=141, len=2)
actionsTable[66209] = 1307; // 'state 517' -> , -> reduce (target=141, len=2)
actionsTable[66215] = 526; // 'state 517' -> = -> shift (target=263, len=0)
actionsTable[66331] = 1817; // 'state 518' -> : -> reduce (target=140, len=3)
actionsTable[66357] = 1817; // 'state 518' -> ?: -> reduce (target=140, len=3)
actionsTable[66362] = 1817; // 'state 518' -> => -> reduce (target=140, len=3)
actionsTable[66441] = 1174; // 'state 519' -> ) -> shift (target=587, len=0)
actionsTable[66465] = 528; // 'state 519' -> , -> shift (target=264, len=0)
actionsTable.fill(1921, 66560, 66583); // 'state 520' -> true..try -> reduce (target=192, len=3)
actionsTable.fill(1921, 66585, 66598); // 'state 520' -> switch..export -> reduce (target=192, len=3)
actionsTable.fill(1921, 66601, 66610); // 'state 520' -> [..class -> reduce (target=192, len=3)
actionsTable.fill(1921, 66611, 66613); // 'state 520' -> implements..interface -> reduce (target=192, len=3)
actionsTable.fill(1921, 66614, 66618); // 'state 520' -> <..& -> reduce (target=192, len=3)
actionsTable.fill(1921, 66619, 66621); // 'state 520' -> void..typeof -> reduce (target=192, len=3)
actionsTable.fill(1921, 66622, 66644); // 'state 520' -> new..accessibility_modifier -> reduce (target=192, len=3)
actionsTable.fill(1921, 66645, 66652); // 'state 520' -> equality_operator..@par-gen.EOF -> reduce (target=192, len=3)
actionsTable.fill(1937, 66688, 66711); // 'state 521' -> true..try -> reduce (target=200, len=3)
actionsTable.fill(1937, 66713, 66726); // 'state 521' -> switch..export -> reduce (target=200, len=3)
actionsTable[66727] = 1937; // 'state 521' -> = -> reduce (target=200, len=3)
actionsTable.fill(1937, 66729, 66738); // 'state 521' -> [..class -> reduce (target=200, len=3)
actionsTable.fill(1937, 66739, 66746); // 'state 521' -> implements..& -> reduce (target=200, len=3)
actionsTable.fill(1937, 66747, 66749); // 'state 521' -> void..typeof -> reduce (target=200, len=3)
actionsTable.fill(1937, 66750, 66780); // 'state 521' -> new..@par-gen.EOF -> reduce (target=200, len=3)
actionsTable[66849] = 532; // 'state 522' -> , -> shift (target=266, len=0)
actionsTable[66858] = 1180; // 'state 522' -> ] -> shift (target=590, len=0)
actionsTable[66949] = 1849; // 'state 523' -> { -> reduce (target=156, len=3)
actionsTable[66952] = 1849; // 'state 523' -> ( -> reduce (target=156, len=3)
actionsTable[66983] = 1849; // 'state 523' -> = -> reduce (target=156, len=3)
actionsTable.fill(1849, 66994, 66996); // 'state 523' -> extends..implements -> reduce (target=156, len=3)
actionsTable[67105] = 534; // 'state 524' -> , -> shift (target=267, len=0)
actionsTable[67127] = 1186; // 'state 524' -> > -> shift (target=593, len=0)
actionsTable[67206] = 1953; // 'state 525' -> } -> reduce (target=208, len=3)
actionsTable[67208] = 1953; // 'state 525' -> ( -> reduce (target=208, len=3)
actionsTable[67213] = 1953; // 'state 525' -> ; -> reduce (target=208, len=3)
actionsTable[67218] = 1953; // 'state 525' -> of -> reduce (target=208, len=3)
actionsTable[67227] = 1953; // 'state 525' -> : -> reduce (target=208, len=3)
actionsTable[67232] = 1953; // 'state 525' -> from -> reduce (target=208, len=3)
actionsTable[67236] = 1953; // 'state 525' -> type -> reduce (target=208, len=3)
actionsTable[67239] = 1953; // 'state 525' -> = -> reduce (target=208, len=3)
actionsTable[67241] = 1953; // 'state 525' -> [ -> reduce (target=208, len=3)
actionsTable[67243] = 1953; // 'state 525' -> async -> reduce (target=208, len=3)
actionsTable.fill(1953, 67245, 67249); // 'state 525' -> static..set -> reduce (target=208, len=3)
actionsTable.fill(1953, 67253, 67255); // 'state 525' -> ?:..< -> reduce (target=208, len=3)
actionsTable.fill(1953, 67278, 67282); // 'state 525' -> identifier..string -> reduce (target=208, len=3)
actionsTable[67283] = 1953; // 'state 525' -> accessibility_modifier -> reduce (target=208, len=3)
actionsTable.fill(2453, 67328, 67351); // 'state 526' -> true..try -> reduce (target=202, len=4)
actionsTable.fill(2453, 67353, 67366); // 'state 526' -> switch..export -> reduce (target=202, len=4)
actionsTable[67367] = 2453; // 'state 526' -> = -> reduce (target=202, len=4)
actionsTable.fill(2453, 67369, 67378); // 'state 526' -> [..class -> reduce (target=202, len=4)
actionsTable.fill(2453, 67379, 67386); // 'state 526' -> implements..& -> reduce (target=202, len=4)
actionsTable.fill(2453, 67387, 67389); // 'state 526' -> void..typeof -> reduce (target=202, len=4)
actionsTable.fill(2453, 67390, 67420); // 'state 526' -> new..@par-gen.EOF -> reduce (target=202, len=4)
actionsTable[67462] = 1427; // 'state 527' -> } -> reduce (target=201, len=2)
actionsTable[67489] = 1427; // 'state 527' -> , -> reduce (target=201, len=2)
actionsTable[67590] = 1945; // 'state 528' -> } -> reduce (target=204, len=3)
actionsTable[67617] = 1945; // 'state 528' -> , -> reduce (target=204, len=3)
actionsTable.fill(2261, 67712, 67721); // 'state 529' -> true..( -> reduce (target=106, len=4)
actionsTable.fill(2261, 67722, 67725); // 'state 529' -> else..do -> reduce (target=106, len=4)
actionsTable.fill(2261, 67726, 67731); // 'state 529' -> for..of -> reduce (target=106, len=4)
actionsTable.fill(2261, 67732, 67735); // 'state 529' -> return..try -> reduce (target=106, len=4)
actionsTable.fill(2261, 67737, 67739); // 'state 529' -> switch..case -> reduce (target=106, len=4)
actionsTable.fill(2261, 67740, 67745); // 'state 529' -> default..from -> reduce (target=106, len=4)
actionsTable.fill(2261, 67748, 67750); // 'state 529' -> type..export -> reduce (target=106, len=4)
actionsTable[67753] = 2261; // 'state 529' -> [ -> reduce (target=106, len=4)
actionsTable.fill(2261, 67755, 67757); // 'state 529' -> async..function -> reduce (target=106, len=4)
actionsTable.fill(2261, 67759, 67762); // 'state 529' -> get..class -> reduce (target=106, len=4)
actionsTable[67764] = 2261; // 'state 529' -> interface -> reduce (target=106, len=4)
actionsTable[67766] = 2261; // 'state 529' -> < -> reduce (target=106, len=4)
actionsTable.fill(2261, 67771, 67773); // 'state 529' -> void..typeof -> reduce (target=106, len=4)
actionsTable[67774] = 2261; // 'state 529' -> new -> reduce (target=106, len=4)
actionsTable.fill(2261, 67781, 67783); // 'state 529' -> +..- -> reduce (target=106, len=4)
actionsTable.fill(2261, 67784, 67788); // 'state 529' -> !..await -> reduce (target=106, len=4)
actionsTable[67790] = 2261; // 'state 529' -> identifier -> reduce (target=106, len=4)
actionsTable.fill(2261, 67792, 67795); // 'state 529' -> number..template_string -> reduce (target=106, len=4)
actionsTable.fill(2261, 67801, 67804); // 'state 529' -> update_operator..@par-gen.EOF -> reduce (target=106, len=4)
actionsTable.fill(1239, 67840, 67849); // 'state 530' -> true..( -> reduce (target=107, len=2)
actionsTable.fill(1239, 67850, 67853); // 'state 530' -> else..do -> reduce (target=107, len=2)
actionsTable.fill(1239, 67854, 67859); // 'state 530' -> for..of -> reduce (target=107, len=2)
actionsTable.fill(1239, 67860, 67863); // 'state 530' -> return..try -> reduce (target=107, len=2)
actionsTable.fill(1239, 67864, 67867); // 'state 530' -> finally..case -> reduce (target=107, len=2)
actionsTable.fill(1239, 67868, 67873); // 'state 530' -> default..from -> reduce (target=107, len=2)
actionsTable.fill(1239, 67876, 67878); // 'state 530' -> type..export -> reduce (target=107, len=2)
actionsTable[67881] = 1239; // 'state 530' -> [ -> reduce (target=107, len=2)
actionsTable.fill(1239, 67883, 67885); // 'state 530' -> async..function -> reduce (target=107, len=2)
actionsTable.fill(1239, 67887, 67890); // 'state 530' -> get..class -> reduce (target=107, len=2)
actionsTable[67892] = 1239; // 'state 530' -> interface -> reduce (target=107, len=2)
actionsTable[67894] = 1239; // 'state 530' -> < -> reduce (target=107, len=2)
actionsTable.fill(1239, 67899, 67901); // 'state 530' -> void..typeof -> reduce (target=107, len=2)
actionsTable[67902] = 1239; // 'state 530' -> new -> reduce (target=107, len=2)
actionsTable.fill(1239, 67909, 67911); // 'state 530' -> +..- -> reduce (target=107, len=2)
actionsTable.fill(1239, 67912, 67916); // 'state 530' -> !..await -> reduce (target=107, len=2)
actionsTable[67918] = 1239; // 'state 530' -> identifier -> reduce (target=107, len=2)
actionsTable.fill(1239, 67920, 67923); // 'state 530' -> number..template_string -> reduce (target=107, len=2)
actionsTable.fill(1239, 67929, 67932); // 'state 530' -> update_operator..@par-gen.EOF -> reduce (target=107, len=2)
actionsTable.fill(1241, 67968, 67977); // 'state 531' -> true..( -> reduce (target=108, len=2)
actionsTable.fill(1241, 67978, 67981); // 'state 531' -> else..do -> reduce (target=108, len=2)
actionsTable.fill(1241, 67982, 67987); // 'state 531' -> for..of -> reduce (target=108, len=2)
actionsTable.fill(1241, 67988, 67991); // 'state 531' -> return..try -> reduce (target=108, len=2)
actionsTable.fill(1241, 67993, 67995); // 'state 531' -> switch..case -> reduce (target=108, len=2)
actionsTable.fill(1241, 67996, 68001); // 'state 531' -> default..from -> reduce (target=108, len=2)
actionsTable.fill(1241, 68004, 68006); // 'state 531' -> type..export -> reduce (target=108, len=2)
actionsTable[68009] = 1241; // 'state 531' -> [ -> reduce (target=108, len=2)
actionsTable.fill(1241, 68011, 68013); // 'state 531' -> async..function -> reduce (target=108, len=2)
actionsTable.fill(1241, 68015, 68018); // 'state 531' -> get..class -> reduce (target=108, len=2)
actionsTable[68020] = 1241; // 'state 531' -> interface -> reduce (target=108, len=2)
actionsTable[68022] = 1241; // 'state 531' -> < -> reduce (target=108, len=2)
actionsTable.fill(1241, 68027, 68029); // 'state 531' -> void..typeof -> reduce (target=108, len=2)
actionsTable[68030] = 1241; // 'state 531' -> new -> reduce (target=108, len=2)
actionsTable.fill(1241, 68037, 68039); // 'state 531' -> +..- -> reduce (target=108, len=2)
actionsTable.fill(1241, 68040, 68044); // 'state 531' -> !..await -> reduce (target=108, len=2)
actionsTable[68046] = 1241; // 'state 531' -> identifier -> reduce (target=108, len=2)
actionsTable.fill(1241, 68048, 68051); // 'state 531' -> number..template_string -> reduce (target=108, len=2)
actionsTable.fill(1241, 68057, 68060); // 'state 531' -> update_operator..@par-gen.EOF -> reduce (target=108, len=2)
actionsTable.fill(1345, 68096, 68119); // 'state 532' -> true..try -> reduce (target=160, len=2)
actionsTable.fill(1345, 68121, 68134); // 'state 532' -> switch..export -> reduce (target=160, len=2)
actionsTable[68135] = 1345; // 'state 532' -> = -> reduce (target=160, len=2)
actionsTable.fill(1345, 68137, 68146); // 'state 532' -> [..class -> reduce (target=160, len=2)
actionsTable.fill(1345, 68147, 68149); // 'state 532' -> implements..interface -> reduce (target=160, len=2)
actionsTable.fill(1345, 68150, 68153); // 'state 532' -> <..| -> reduce (target=160, len=2)
actionsTable[68153] = 508; // 'state 532' -> & -> shift (target=254, len=0)
actionsTable.fill(1345, 68154, 68157); // 'state 532' -> =>..typeof -> reduce (target=160, len=2)
actionsTable.fill(1345, 68158, 68180); // 'state 532' -> new..accessibility_modifier -> reduce (target=160, len=2)
actionsTable.fill(1345, 68181, 68188); // 'state 532' -> equality_operator..@par-gen.EOF -> reduce (target=160, len=2)
actionsTable[68282] = 570; // 'state 533' -> => -> shift (target=285, len=0)
actionsTable[68361] = 1222; // 'state 534' -> ) -> shift (target=611, len=0)
actionsTable[68408] = 506; // 'state 534' -> | -> shift (target=253, len=0)
actionsTable[68409] = 508; // 'state 534' -> & -> shift (target=254, len=0)
actionsTable.fill(1353, 68480, 68503); // 'state 535' -> true..try -> reduce (target=164, len=2)
actionsTable.fill(1353, 68505, 68518); // 'state 535' -> switch..export -> reduce (target=164, len=2)
actionsTable[68519] = 1353; // 'state 535' -> = -> reduce (target=164, len=2)
actionsTable.fill(1353, 68521, 68530); // 'state 535' -> [..class -> reduce (target=164, len=2)
actionsTable.fill(1353, 68531, 68533); // 'state 535' -> implements..interface -> reduce (target=164, len=2)
actionsTable.fill(1353, 68534, 68541); // 'state 535' -> <..typeof -> reduce (target=164, len=2)
actionsTable.fill(1353, 68542, 68564); // 'state 535' -> new..accessibility_modifier -> reduce (target=164, len=2)
actionsTable.fill(1353, 68565, 68572); // 'state 535' -> equality_operator..@par-gen.EOF -> reduce (target=164, len=2)
actionsTable.fill(1359, 68608, 68631); // 'state 536' -> true..try -> reduce (target=167, len=2)
actionsTable.fill(1359, 68633, 68646); // 'state 536' -> switch..export -> reduce (target=167, len=2)
actionsTable[68647] = 1359; // 'state 536' -> = -> reduce (target=167, len=2)
actionsTable.fill(1359, 68649, 68658); // 'state 536' -> [..class -> reduce (target=167, len=2)
actionsTable.fill(1359, 68659, 68661); // 'state 536' -> implements..interface -> reduce (target=167, len=2)
actionsTable.fill(1359, 68662, 68669); // 'state 536' -> <..typeof -> reduce (target=167, len=2)
actionsTable.fill(1359, 68670, 68692); // 'state 536' -> new..accessibility_modifier -> reduce (target=167, len=2)
actionsTable.fill(1359, 68693, 68700); // 'state 536' -> equality_operator..@par-gen.EOF -> reduce (target=167, len=2)
actionsTable.fill(1369, 68736, 68759); // 'state 537' -> true..try -> reduce (target=172, len=2)
actionsTable.fill(1369, 68761, 68774); // 'state 537' -> switch..export -> reduce (target=172, len=2)
actionsTable[68775] = 1369; // 'state 537' -> = -> reduce (target=172, len=2)
actionsTable.fill(1369, 68777, 68786); // 'state 537' -> [..class -> reduce (target=172, len=2)
actionsTable.fill(1369, 68787, 68789); // 'state 537' -> implements..interface -> reduce (target=172, len=2)
actionsTable.fill(1369, 68790, 68797); // 'state 537' -> <..typeof -> reduce (target=172, len=2)
actionsTable.fill(1369, 68798, 68820); // 'state 537' -> new..accessibility_modifier -> reduce (target=172, len=2)
actionsTable.fill(1369, 68821, 68828); // 'state 537' -> equality_operator..@par-gen.EOF -> reduce (target=172, len=2)
actionsTable[68870] = 855; // 'state 538' -> } -> reduce (target=171, len=1)
actionsTable[68877] = 1236; // 'state 538' -> ; -> shift (target=618, len=0)
actionsTable[68882] = 855; // 'state 538' -> of -> reduce (target=171, len=1)
actionsTable[68896] = 855; // 'state 538' -> from -> reduce (target=171, len=1)
actionsTable[68897] = 1236; // 'state 538' -> , -> shift (target=618, len=0)
actionsTable[68900] = 855; // 'state 538' -> type -> reduce (target=171, len=1)
actionsTable[68905] = 855; // 'state 538' -> [ -> reduce (target=171, len=1)
actionsTable[68907] = 855; // 'state 538' -> async -> reduce (target=171, len=1)
actionsTable.fill(855, 68910, 68913); // 'state 538' -> readonly..set -> reduce (target=171, len=1)
actionsTable[68926] = 855; // 'state 538' -> new -> reduce (target=171, len=1)
actionsTable[68942] = 855; // 'state 538' -> identifier -> reduce (target=171, len=1)
actionsTable.fill(855, 68944, 68946); // 'state 538' -> number..string -> reduce (target=171, len=1)
actionsTable.fill(1363, 68992, 69015); // 'state 539' -> true..try -> reduce (target=169, len=2)
actionsTable.fill(1363, 69017, 69030); // 'state 539' -> switch..export -> reduce (target=169, len=2)
actionsTable[69031] = 1363; // 'state 539' -> = -> reduce (target=169, len=2)
actionsTable.fill(1363, 69033, 69042); // 'state 539' -> [..class -> reduce (target=169, len=2)
actionsTable.fill(1363, 69043, 69045); // 'state 539' -> implements..interface -> reduce (target=169, len=2)
actionsTable.fill(1363, 69046, 69053); // 'state 539' -> <..typeof -> reduce (target=169, len=2)
actionsTable.fill(1363, 69054, 69076); // 'state 539' -> new..accessibility_modifier -> reduce (target=169, len=2)
actionsTable.fill(1363, 69077, 69084); // 'state 539' -> equality_operator..@par-gen.EOF -> reduce (target=169, len=2)
actionsTable.fill(1929, 69120, 69143); // 'state 540' -> true..try -> reduce (target=196, len=3)
actionsTable.fill(1929, 69145, 69158); // 'state 540' -> switch..export -> reduce (target=196, len=3)
actionsTable.fill(1929, 69161, 69170); // 'state 540' -> [..class -> reduce (target=196, len=3)
actionsTable.fill(1929, 69171, 69173); // 'state 540' -> implements..interface -> reduce (target=196, len=3)
actionsTable.fill(1929, 69174, 69178); // 'state 540' -> <..& -> reduce (target=196, len=3)
actionsTable.fill(1929, 69179, 69181); // 'state 540' -> void..typeof -> reduce (target=196, len=3)
actionsTable.fill(1929, 69182, 69204); // 'state 540' -> new..accessibility_modifier -> reduce (target=196, len=3)
actionsTable.fill(1929, 69205, 69212); // 'state 540' -> equality_operator..@par-gen.EOF -> reduce (target=196, len=3)
actionsTable[69257] = 1244; // 'state 541' -> ) -> shift (target=622, len=0)
actionsTable[69281] = 602; // 'state 541' -> , -> shift (target=301, len=0)
actionsTable.fill(2439, 69376, 69399); // 'state 542' -> true..try -> reduce (target=195, len=4)
actionsTable.fill(2439, 69401, 69414); // 'state 542' -> switch..export -> reduce (target=195, len=4)
actionsTable[69415] = 2439; // 'state 542' -> = -> reduce (target=195, len=4)
actionsTable.fill(2439, 69417, 69426); // 'state 542' -> [..class -> reduce (target=195, len=4)
actionsTable.fill(2439, 69427, 69429); // 'state 542' -> implements..interface -> reduce (target=195, len=4)
actionsTable.fill(2439, 69430, 69434); // 'state 542' -> <..& -> reduce (target=195, len=4)
actionsTable.fill(2439, 69435, 69437); // 'state 542' -> void..typeof -> reduce (target=195, len=4)
actionsTable.fill(2439, 69438, 69468); // 'state 542' -> new..@par-gen.EOF -> reduce (target=195, len=4)
actionsTable.fill(2285, 69504, 69513); // 'state 543' -> true..( -> reduce (target=118, len=4)
actionsTable.fill(2285, 69514, 69517); // 'state 543' -> else..do -> reduce (target=118, len=4)
actionsTable[69517] = 1246; // 'state 543' -> ; -> shift (target=623, len=0)
actionsTable.fill(2285, 69518, 69523); // 'state 543' -> for..of -> reduce (target=118, len=4)
actionsTable.fill(2285, 69524, 69527); // 'state 543' -> return..try -> reduce (target=118, len=4)
actionsTable.fill(2285, 69529, 69531); // 'state 543' -> switch..case -> reduce (target=118, len=4)
actionsTable.fill(2285, 69532, 69537); // 'state 543' -> default..from -> reduce (target=118, len=4)
actionsTable.fill(2285, 69540, 69542); // 'state 543' -> type..export -> reduce (target=118, len=4)
actionsTable[69545] = 2285; // 'state 543' -> [ -> reduce (target=118, len=4)
actionsTable.fill(2285, 69547, 69549); // 'state 543' -> async..function -> reduce (target=118, len=4)
actionsTable.fill(2285, 69551, 69554); // 'state 543' -> get..class -> reduce (target=118, len=4)
actionsTable[69556] = 2285; // 'state 543' -> interface -> reduce (target=118, len=4)
actionsTable[69558] = 2285; // 'state 543' -> < -> reduce (target=118, len=4)
actionsTable.fill(2285, 69563, 69565); // 'state 543' -> void..typeof -> reduce (target=118, len=4)
actionsTable[69566] = 2285; // 'state 543' -> new -> reduce (target=118, len=4)
actionsTable.fill(2285, 69573, 69575); // 'state 543' -> +..- -> reduce (target=118, len=4)
actionsTable.fill(2285, 69576, 69580); // 'state 543' -> !..await -> reduce (target=118, len=4)
actionsTable[69582] = 2285; // 'state 543' -> identifier -> reduce (target=118, len=4)
actionsTable.fill(2285, 69584, 69587); // 'state 543' -> number..template_string -> reduce (target=118, len=4)
actionsTable.fill(2285, 69593, 69596); // 'state 543' -> update_operator..@par-gen.EOF -> reduce (target=118, len=4)
actionsTable[69664] = 1775; // 'state 544' -> from -> reduce (target=119, len=3)
actionsTable.fill(1781, 69760, 69769); // 'state 545' -> true..( -> reduce (target=122, len=3)
actionsTable.fill(1781, 69770, 69779); // 'state 545' -> else..of -> reduce (target=122, len=3)
actionsTable.fill(1781, 69780, 69783); // 'state 545' -> return..try -> reduce (target=122, len=3)
actionsTable.fill(1781, 69785, 69787); // 'state 545' -> switch..case -> reduce (target=122, len=3)
actionsTable.fill(1781, 69788, 69793); // 'state 545' -> default..from -> reduce (target=122, len=3)
actionsTable.fill(1781, 69796, 69798); // 'state 545' -> type..export -> reduce (target=122, len=3)
actionsTable[69801] = 1781; // 'state 545' -> [ -> reduce (target=122, len=3)
actionsTable.fill(1781, 69803, 69805); // 'state 545' -> async..function -> reduce (target=122, len=3)
actionsTable.fill(1781, 69807, 69810); // 'state 545' -> get..class -> reduce (target=122, len=3)
actionsTable[69812] = 1781; // 'state 545' -> interface -> reduce (target=122, len=3)
actionsTable[69814] = 1781; // 'state 545' -> < -> reduce (target=122, len=3)
actionsTable.fill(1781, 69819, 69821); // 'state 545' -> void..typeof -> reduce (target=122, len=3)
actionsTable[69822] = 1781; // 'state 545' -> new -> reduce (target=122, len=3)
actionsTable.fill(1781, 69829, 69831); // 'state 545' -> +..- -> reduce (target=122, len=3)
actionsTable.fill(1781, 69832, 69836); // 'state 545' -> !..await -> reduce (target=122, len=3)
actionsTable[69838] = 1781; // 'state 545' -> identifier -> reduce (target=122, len=3)
actionsTable.fill(1781, 69840, 69843); // 'state 545' -> number..template_string -> reduce (target=122, len=3)
actionsTable.fill(1781, 69849, 69852); // 'state 545' -> update_operator..@par-gen.EOF -> reduce (target=122, len=3)
actionsTable[69894] = 1248; // 'state 546' -> } -> shift (target=624, len=0)
actionsTable[69921] = 604; // 'state 546' -> , -> shift (target=302, len=0)
actionsTable[70022] = 1271; // 'state 547' -> } -> reduce (target=123, len=2)
actionsTable[70049] = 1271; // 'state 547' -> , -> reduce (target=123, len=2)
actionsTable[70051] = 1252; // 'state 547' -> as -> shift (target=626, len=0)
actionsTable[70222] = 1254; // 'state 548' -> identifier -> shift (target=627, len=0)
actionsTable[70304] = 1777; // 'state 549' -> from -> reduce (target=120, len=3)
actionsTable.fill(1823, 70400, 70409); // 'state 550' -> true..( -> reduce (target=143, len=3)
actionsTable.fill(1823, 70410, 70413); // 'state 550' -> else..do -> reduce (target=143, len=3)
actionsTable.fill(1823, 70414, 70419); // 'state 550' -> for..of -> reduce (target=143, len=3)
actionsTable.fill(1823, 70420, 70423); // 'state 550' -> return..try -> reduce (target=143, len=3)
actionsTable.fill(1823, 70425, 70427); // 'state 550' -> switch..case -> reduce (target=143, len=3)
actionsTable.fill(1823, 70428, 70433); // 'state 550' -> default..from -> reduce (target=143, len=3)
actionsTable.fill(1823, 70436, 70438); // 'state 550' -> type..export -> reduce (target=143, len=3)
actionsTable[70441] = 1823; // 'state 550' -> [ -> reduce (target=143, len=3)
actionsTable.fill(1823, 70443, 70445); // 'state 550' -> async..function -> reduce (target=143, len=3)
actionsTable.fill(1823, 70447, 70450); // 'state 550' -> get..class -> reduce (target=143, len=3)
actionsTable[70452] = 1823; // 'state 550' -> interface -> reduce (target=143, len=3)
actionsTable[70454] = 1823; // 'state 550' -> < -> reduce (target=143, len=3)
actionsTable.fill(1823, 70459, 70461); // 'state 550' -> void..typeof -> reduce (target=143, len=3)
actionsTable[70462] = 1823; // 'state 550' -> new -> reduce (target=143, len=3)
actionsTable.fill(1823, 70469, 70471); // 'state 550' -> +..- -> reduce (target=143, len=3)
actionsTable.fill(1823, 70472, 70476); // 'state 550' -> !..await -> reduce (target=143, len=3)
actionsTable[70478] = 1823; // 'state 550' -> identifier -> reduce (target=143, len=3)
actionsTable.fill(1823, 70480, 70483); // 'state 550' -> number..template_string -> reduce (target=143, len=3)
actionsTable.fill(1823, 70489, 70492); // 'state 550' -> update_operator..@par-gen.EOF -> reduce (target=143, len=3)
actionsTable.fill(2297, 70528, 70537); // 'state 551' -> true..( -> reduce (target=124, len=4)
actionsTable.fill(2297, 70538, 70541); // 'state 551' -> else..do -> reduce (target=124, len=4)
actionsTable.fill(2297, 70542, 70547); // 'state 551' -> for..of -> reduce (target=124, len=4)
actionsTable.fill(2297, 70548, 70551); // 'state 551' -> return..try -> reduce (target=124, len=4)
actionsTable.fill(2297, 70553, 70555); // 'state 551' -> switch..case -> reduce (target=124, len=4)
actionsTable.fill(2297, 70556, 70561); // 'state 551' -> default..from -> reduce (target=124, len=4)
actionsTable.fill(2297, 70564, 70566); // 'state 551' -> type..export -> reduce (target=124, len=4)
actionsTable[70569] = 2297; // 'state 551' -> [ -> reduce (target=124, len=4)
actionsTable.fill(2297, 70571, 70573); // 'state 551' -> async..function -> reduce (target=124, len=4)
actionsTable.fill(2297, 70575, 70578); // 'state 551' -> get..class -> reduce (target=124, len=4)
actionsTable[70580] = 2297; // 'state 551' -> interface -> reduce (target=124, len=4)
actionsTable[70582] = 2297; // 'state 551' -> < -> reduce (target=124, len=4)
actionsTable.fill(2297, 70587, 70589); // 'state 551' -> void..typeof -> reduce (target=124, len=4)
actionsTable[70590] = 2297; // 'state 551' -> new -> reduce (target=124, len=4)
actionsTable.fill(2297, 70597, 70599); // 'state 551' -> +..- -> reduce (target=124, len=4)
actionsTable.fill(2297, 70600, 70604); // 'state 551' -> !..await -> reduce (target=124, len=4)
actionsTable[70606] = 2297; // 'state 551' -> identifier -> reduce (target=124, len=4)
actionsTable.fill(2297, 70608, 70611); // 'state 551' -> number..template_string -> reduce (target=124, len=4)
actionsTable.fill(2297, 70617, 70620); // 'state 551' -> update_operator..@par-gen.EOF -> reduce (target=124, len=4)
actionsTable.fill(2297, 70656, 70665); // 'state 552' -> true..( -> reduce (target=124, len=4)
actionsTable.fill(2297, 70666, 70669); // 'state 552' -> else..do -> reduce (target=124, len=4)
actionsTable[70669] = 1260; // 'state 552' -> ; -> shift (target=630, len=0)
actionsTable.fill(2297, 70670, 70675); // 'state 552' -> for..of -> reduce (target=124, len=4)
actionsTable.fill(2297, 70676, 70679); // 'state 552' -> return..try -> reduce (target=124, len=4)
actionsTable.fill(2297, 70681, 70683); // 'state 552' -> switch..case -> reduce (target=124, len=4)
actionsTable.fill(2297, 70684, 70689); // 'state 552' -> default..from -> reduce (target=124, len=4)
actionsTable.fill(2297, 70692, 70694); // 'state 552' -> type..export -> reduce (target=124, len=4)
actionsTable[70697] = 2297; // 'state 552' -> [ -> reduce (target=124, len=4)
actionsTable.fill(2297, 70699, 70701); // 'state 552' -> async..function -> reduce (target=124, len=4)
actionsTable.fill(2297, 70703, 70706); // 'state 552' -> get..class -> reduce (target=124, len=4)
actionsTable[70708] = 2297; // 'state 552' -> interface -> reduce (target=124, len=4)
actionsTable[70710] = 2297; // 'state 552' -> < -> reduce (target=124, len=4)
actionsTable.fill(2297, 70715, 70717); // 'state 552' -> void..typeof -> reduce (target=124, len=4)
actionsTable[70718] = 2297; // 'state 552' -> new -> reduce (target=124, len=4)
actionsTable.fill(2297, 70725, 70727); // 'state 552' -> +..- -> reduce (target=124, len=4)
actionsTable.fill(2297, 70728, 70732); // 'state 552' -> !..await -> reduce (target=124, len=4)
actionsTable[70734] = 2297; // 'state 552' -> identifier -> reduce (target=124, len=4)
actionsTable.fill(2297, 70736, 70739); // 'state 552' -> number..template_string -> reduce (target=124, len=4)
actionsTable.fill(2297, 70745, 70748); // 'state 552' -> update_operator..@par-gen.EOF -> reduce (target=124, len=4)
actionsTable[70816] = 1262; // 'state 553' -> from -> shift (target=631, len=0)
actionsTable.fill(2301, 70912, 70921); // 'state 554' -> true..( -> reduce (target=126, len=4)
actionsTable.fill(2301, 70922, 70931); // 'state 554' -> else..of -> reduce (target=126, len=4)
actionsTable.fill(2301, 70932, 70935); // 'state 554' -> return..try -> reduce (target=126, len=4)
actionsTable.fill(2301, 70937, 70939); // 'state 554' -> switch..case -> reduce (target=126, len=4)
actionsTable.fill(2301, 70940, 70945); // 'state 554' -> default..from -> reduce (target=126, len=4)
actionsTable.fill(2301, 70948, 70950); // 'state 554' -> type..export -> reduce (target=126, len=4)
actionsTable[70953] = 2301; // 'state 554' -> [ -> reduce (target=126, len=4)
actionsTable.fill(2301, 70955, 70957); // 'state 554' -> async..function -> reduce (target=126, len=4)
actionsTable.fill(2301, 70959, 70962); // 'state 554' -> get..class -> reduce (target=126, len=4)
actionsTable[70964] = 2301; // 'state 554' -> interface -> reduce (target=126, len=4)
actionsTable[70966] = 2301; // 'state 554' -> < -> reduce (target=126, len=4)
actionsTable.fill(2301, 70971, 70973); // 'state 554' -> void..typeof -> reduce (target=126, len=4)
actionsTable[70974] = 2301; // 'state 554' -> new -> reduce (target=126, len=4)
actionsTable.fill(2301, 70981, 70983); // 'state 554' -> +..- -> reduce (target=126, len=4)
actionsTable.fill(2301, 70984, 70988); // 'state 554' -> !..await -> reduce (target=126, len=4)
actionsTable[70990] = 2301; // 'state 554' -> identifier -> reduce (target=126, len=4)
actionsTable.fill(2301, 70992, 70995); // 'state 554' -> number..template_string -> reduce (target=126, len=4)
actionsTable.fill(2301, 71001, 71004); // 'state 554' -> update_operator..@par-gen.EOF -> reduce (target=126, len=4)
actionsTable.fill(1275, 71040, 71049); // 'state 555' -> true..( -> reduce (target=125, len=2)
actionsTable.fill(1275, 71050, 71059); // 'state 555' -> else..of -> reduce (target=125, len=2)
actionsTable.fill(1275, 71060, 71063); // 'state 555' -> return..try -> reduce (target=125, len=2)
actionsTable.fill(1275, 71065, 71067); // 'state 555' -> switch..case -> reduce (target=125, len=2)
actionsTable.fill(1275, 71068, 71074); // 'state 555' -> default.., -> reduce (target=125, len=2)
actionsTable.fill(1275, 71076, 71078); // 'state 555' -> type..export -> reduce (target=125, len=2)
actionsTable[71081] = 1275; // 'state 555' -> [ -> reduce (target=125, len=2)
actionsTable.fill(1275, 71083, 71085); // 'state 555' -> async..function -> reduce (target=125, len=2)
actionsTable.fill(1275, 71087, 71090); // 'state 555' -> get..class -> reduce (target=125, len=2)
actionsTable[71092] = 1275; // 'state 555' -> interface -> reduce (target=125, len=2)
actionsTable[71094] = 1275; // 'state 555' -> < -> reduce (target=125, len=2)
actionsTable.fill(1275, 71099, 71101); // 'state 555' -> void..typeof -> reduce (target=125, len=2)
actionsTable[71102] = 1275; // 'state 555' -> new -> reduce (target=125, len=2)
actionsTable.fill(1275, 71109, 71111); // 'state 555' -> +..- -> reduce (target=125, len=2)
actionsTable.fill(1275, 71112, 71116); // 'state 555' -> !..await -> reduce (target=125, len=2)
actionsTable[71118] = 1275; // 'state 555' -> identifier -> reduce (target=125, len=2)
actionsTable.fill(1275, 71120, 71123); // 'state 555' -> number..template_string -> reduce (target=125, len=2)
actionsTable.fill(1275, 71129, 71132); // 'state 555' -> update_operator..@par-gen.EOF -> reduce (target=125, len=2)
actionsTable.fill(1797, 71168, 71191); // 'state 556' -> true..try -> reduce (target=130, len=3)
actionsTable.fill(1797, 71193, 71202); // 'state 556' -> switch.., -> reduce (target=130, len=3)
actionsTable.fill(1797, 71204, 71206); // 'state 556' -> type..export -> reduce (target=130, len=3)
actionsTable[71207] = 1797; // 'state 556' -> = -> reduce (target=130, len=3)
actionsTable.fill(1797, 71209, 71213); // 'state 556' -> [..function -> reduce (target=130, len=3)
actionsTable.fill(1797, 71215, 71218); // 'state 556' -> get..class -> reduce (target=130, len=3)
actionsTable.fill(1797, 71220, 71223); // 'state 556' -> interface..< -> reduce (target=130, len=3)
actionsTable.fill(1797, 71227, 71229); // 'state 556' -> void..typeof -> reduce (target=130, len=3)
actionsTable[71230] = 1797; // 'state 556' -> new -> reduce (target=130, len=3)
actionsTable.fill(1797, 71237, 71239); // 'state 556' -> +..- -> reduce (target=130, len=3)
actionsTable.fill(1797, 71240, 71244); // 'state 556' -> !..await -> reduce (target=130, len=3)
actionsTable[71246] = 1797; // 'state 556' -> identifier -> reduce (target=130, len=3)
actionsTable.fill(1797, 71248, 71251); // 'state 556' -> number..template_string -> reduce (target=130, len=3)
actionsTable.fill(1797, 71257, 71260); // 'state 556' -> update_operator..@par-gen.EOF -> reduce (target=130, len=3)
actionsTable[71302] = 1266; // 'state 557' -> } -> shift (target=633, len=0)
actionsTable[71329] = 616; // 'state 557' -> , -> shift (target=308, len=0)
actionsTable[71430] = 1287; // 'state 558' -> } -> reduce (target=131, len=2)
actionsTable[71457] = 1287; // 'state 558' -> , -> reduce (target=131, len=2)
actionsTable.fill(1803, 71552, 71575); // 'state 559' -> true..try -> reduce (target=133, len=3)
actionsTable.fill(1803, 71577, 71586); // 'state 559' -> switch.., -> reduce (target=133, len=3)
actionsTable.fill(1803, 71588, 71590); // 'state 559' -> type..export -> reduce (target=133, len=3)
actionsTable[71591] = 1803; // 'state 559' -> = -> reduce (target=133, len=3)
actionsTable.fill(1803, 71593, 71597); // 'state 559' -> [..function -> reduce (target=133, len=3)
actionsTable.fill(1803, 71599, 71602); // 'state 559' -> get..class -> reduce (target=133, len=3)
actionsTable.fill(1803, 71604, 71607); // 'state 559' -> interface..< -> reduce (target=133, len=3)
actionsTable.fill(1803, 71611, 71613); // 'state 559' -> void..typeof -> reduce (target=133, len=3)
actionsTable[71614] = 1803; // 'state 559' -> new -> reduce (target=133, len=3)
actionsTable.fill(1803, 71621, 71623); // 'state 559' -> +..- -> reduce (target=133, len=3)
actionsTable.fill(1803, 71624, 71628); // 'state 559' -> !..await -> reduce (target=133, len=3)
actionsTable[71630] = 1803; // 'state 559' -> identifier -> reduce (target=133, len=3)
actionsTable.fill(1803, 71632, 71635); // 'state 559' -> number..template_string -> reduce (target=133, len=3)
actionsTable.fill(1803, 71641, 71644); // 'state 559' -> update_operator..@par-gen.EOF -> reduce (target=133, len=3)
actionsTable[71713] = 620; // 'state 560' -> , -> shift (target=310, len=0)
actionsTable[71722] = 1272; // 'state 560' -> ] -> shift (target=636, len=0)
actionsTable[71841] = 1293; // 'state 561' -> , -> reduce (target=134, len=2)
actionsTable[71850] = 1293; // 'state 561' -> ] -> reduce (target=134, len=2)
actionsTable.fill(2467, 71936, 71959); // 'state 562' -> true..try -> reduce (target=209, len=4)
actionsTable.fill(2467, 71961, 71974); // 'state 562' -> switch..export -> reduce (target=209, len=4)
actionsTable.fill(2467, 71977, 71986); // 'state 562' -> [..class -> reduce (target=209, len=4)
actionsTable.fill(2467, 71987, 71989); // 'state 562' -> implements..interface -> reduce (target=209, len=4)
actionsTable.fill(2467, 71990, 71994); // 'state 562' -> <..& -> reduce (target=209, len=4)
actionsTable.fill(2467, 71995, 71997); // 'state 562' -> void..typeof -> reduce (target=209, len=4)
actionsTable.fill(2467, 71998, 72020); // 'state 562' -> new..accessibility_modifier -> reduce (target=209, len=4)
actionsTable.fill(2467, 72021, 72028); // 'state 562' -> equality_operator..@par-gen.EOF -> reduce (target=209, len=4)
actionsTable.fill(2419, 72064, 72087); // 'state 563' -> true..try -> reduce (target=185, len=4)
actionsTable.fill(2419, 72089, 72102); // 'state 563' -> switch..export -> reduce (target=185, len=4)
actionsTable.fill(2419, 72105, 72114); // 'state 563' -> [..class -> reduce (target=185, len=4)
actionsTable.fill(2419, 72115, 72117); // 'state 563' -> implements..interface -> reduce (target=185, len=4)
actionsTable.fill(2419, 72118, 72122); // 'state 563' -> <..& -> reduce (target=185, len=4)
actionsTable.fill(2419, 72123, 72125); // 'state 563' -> void..typeof -> reduce (target=185, len=4)
actionsTable.fill(2419, 72126, 72148); // 'state 563' -> new..accessibility_modifier -> reduce (target=185, len=4)
actionsTable.fill(2419, 72149, 72156); // 'state 563' -> equality_operator..@par-gen.EOF -> reduce (target=185, len=4)
actionsTable[72250] = 632; // 'state 564' -> => -> shift (target=316, len=0)
actionsTable.fill(2319, 72320, 72329); // 'state 565' -> true..( -> reduce (target=135, len=4)
actionsTable.fill(2319, 72330, 72339); // 'state 565' -> else..of -> reduce (target=135, len=4)
actionsTable.fill(2319, 72340, 72343); // 'state 565' -> return..try -> reduce (target=135, len=4)
actionsTable.fill(2319, 72345, 72347); // 'state 565' -> switch..case -> reduce (target=135, len=4)
actionsTable.fill(2319, 72348, 72353); // 'state 565' -> default..from -> reduce (target=135, len=4)
actionsTable.fill(2319, 72356, 72358); // 'state 565' -> type..export -> reduce (target=135, len=4)
actionsTable[72361] = 2319; // 'state 565' -> [ -> reduce (target=135, len=4)
actionsTable.fill(2319, 72363, 72365); // 'state 565' -> async..function -> reduce (target=135, len=4)
actionsTable.fill(2319, 72367, 72370); // 'state 565' -> get..class -> reduce (target=135, len=4)
actionsTable[72372] = 2319; // 'state 565' -> interface -> reduce (target=135, len=4)
actionsTable[72374] = 2319; // 'state 565' -> < -> reduce (target=135, len=4)
actionsTable.fill(2319, 72379, 72381); // 'state 565' -> void..typeof -> reduce (target=135, len=4)
actionsTable[72382] = 2319; // 'state 565' -> new -> reduce (target=135, len=4)
actionsTable.fill(2319, 72389, 72391); // 'state 565' -> +..- -> reduce (target=135, len=4)
actionsTable.fill(2319, 72392, 72396); // 'state 565' -> !..await -> reduce (target=135, len=4)
actionsTable[72398] = 2319; // 'state 565' -> identifier -> reduce (target=135, len=4)
actionsTable.fill(2319, 72400, 72403); // 'state 565' -> number..template_string -> reduce (target=135, len=4)
actionsTable.fill(2319, 72409, 72412); // 'state 565' -> update_operator..@par-gen.EOF -> reduce (target=135, len=4)
actionsTable.fill(2319, 72448, 72457); // 'state 566' -> true..( -> reduce (target=135, len=4)
actionsTable.fill(2319, 72458, 72467); // 'state 566' -> else..of -> reduce (target=135, len=4)
actionsTable[72467] = 2467; // 'state 566' -> in -> reduce (target=209, len=4)
actionsTable.fill(2319, 72468, 72471); // 'state 566' -> return..try -> reduce (target=135, len=4)
actionsTable.fill(2319, 72473, 72475); // 'state 566' -> switch..case -> reduce (target=135, len=4)
actionsTable.fill(2319, 72476, 72481); // 'state 566' -> default..from -> reduce (target=135, len=4)
actionsTable.fill(2467, 72482, 72484); // 'state 566' -> *..as -> reduce (target=209, len=4)
actionsTable.fill(2319, 72484, 72486); // 'state 566' -> type..export -> reduce (target=135, len=4)
actionsTable[72489] = 2319; // 'state 566' -> [ -> reduce (target=135, len=4)
actionsTable.fill(2319, 72491, 72493); // 'state 566' -> async..function -> reduce (target=135, len=4)
actionsTable.fill(2319, 72495, 72498); // 'state 566' -> get..class -> reduce (target=135, len=4)
actionsTable[72500] = 2319; // 'state 566' -> interface -> reduce (target=135, len=4)
actionsTable[72502] = 2319; // 'state 566' -> < -> reduce (target=135, len=4)
actionsTable.fill(2467, 72503, 72506); // 'state 566' -> >..& -> reduce (target=209, len=4)
actionsTable.fill(2319, 72507, 72509); // 'state 566' -> void..typeof -> reduce (target=135, len=4)
actionsTable[72510] = 2319; // 'state 566' -> new -> reduce (target=135, len=4)
actionsTable.fill(2467, 72511, 72517); // 'state 566' -> ?..instanceof -> reduce (target=209, len=4)
actionsTable.fill(2319, 72517, 72519); // 'state 566' -> +..- -> reduce (target=135, len=4)
actionsTable[72519] = 2467; // 'state 566' -> ** -> reduce (target=209, len=4)
actionsTable.fill(2319, 72520, 72524); // 'state 566' -> !..await -> reduce (target=135, len=4)
actionsTable.fill(2467, 72524, 72526); // 'state 566' -> ?.... -> reduce (target=209, len=4)
actionsTable[72526] = 2319; // 'state 566' -> identifier -> reduce (target=135, len=4)
actionsTable.fill(2319, 72528, 72531); // 'state 566' -> number..template_string -> reduce (target=135, len=4)
actionsTable.fill(2467, 72533, 72537); // 'state 566' -> equality_operator..multiplicative_operator -> reduce (target=209, len=4)
actionsTable.fill(2319, 72537, 72540); // 'state 566' -> update_operator..@par-gen.EOF -> reduce (target=135, len=4)
actionsTable.fill(1811, 72581, 72583); // 'state 567' -> {..} -> reduce (target=137, len=3)
actionsTable[72589] = 1811; // 'state 567' -> ; -> reduce (target=137, len=3)
actionsTable[72594] = 1811; // 'state 567' -> of -> reduce (target=137, len=3)
actionsTable[72603] = 1811; // 'state 567' -> : -> reduce (target=137, len=3)
actionsTable.fill(1811, 72608, 72610); // 'state 567' -> from.., -> reduce (target=137, len=3)
actionsTable[72612] = 1811; // 'state 567' -> type -> reduce (target=137, len=3)
actionsTable[72617] = 1811; // 'state 567' -> [ -> reduce (target=137, len=3)
actionsTable[72619] = 1811; // 'state 567' -> async -> reduce (target=137, len=3)
actionsTable.fill(1811, 72622, 72625); // 'state 567' -> readonly..set -> reduce (target=137, len=3)
actionsTable[72629] = 1811; // 'state 567' -> ?: -> reduce (target=137, len=3)
actionsTable[72634] = 1811; // 'state 567' -> => -> reduce (target=137, len=3)
actionsTable[72638] = 1811; // 'state 567' -> new -> reduce (target=137, len=3)
actionsTable[72654] = 1811; // 'state 567' -> identifier -> reduce (target=137, len=3)
actionsTable.fill(1811, 72656, 72658); // 'state 567' -> number..string -> reduce (target=137, len=3)
actionsTable[72713] = 1288; // 'state 568' -> ) -> shift (target=644, len=0)
actionsTable[72737] = 634; // 'state 568' -> , -> shift (target=317, len=0)
actionsTable[72837] = 1309; // 'state 569' -> { -> reduce (target=142, len=2)
actionsTable[72873] = 1309; // 'state 569' -> [ -> reduce (target=142, len=2)
actionsTable[72875] = 1309; // 'state 569' -> async -> reduce (target=142, len=2)
actionsTable.fill(1309, 72877, 72881); // 'state 569' -> static..set -> reduce (target=142, len=2)
actionsTable[72910] = 1309; // 'state 569' -> identifier -> reduce (target=142, len=2)
actionsTable[72915] = 1309; // 'state 569' -> accessibility_modifier -> reduce (target=142, len=2)
actionsTable[72965] = 1309; // 'state 570' -> { -> reduce (target=142, len=2)
actionsTable[72978] = 1309; // 'state 570' -> of -> reduce (target=142, len=2)
actionsTable[72992] = 1309; // 'state 570' -> from -> reduce (target=142, len=2)
actionsTable[72996] = 1309; // 'state 570' -> type -> reduce (target=142, len=2)
actionsTable[73001] = 1309; // 'state 570' -> [ -> reduce (target=142, len=2)
actionsTable[73003] = 1309; // 'state 570' -> async -> reduce (target=142, len=2)
actionsTable.fill(1309, 73005, 73009); // 'state 570' -> static..set -> reduce (target=142, len=2)
actionsTable.fill(1309, 73038, 73042); // 'state 570' -> identifier..string -> reduce (target=142, len=2)
actionsTable[73043] = 1309; // 'state 570' -> accessibility_modifier -> reduce (target=142, len=2)
actionsTable[73097] = 1301; // 'state 571' -> ) -> reduce (target=138, len=2)
actionsTable[73121] = 1301; // 'state 571' -> , -> reduce (target=138, len=2)
actionsTable[73127] = 636; // 'state 571' -> = -> shift (target=318, len=0)
actionsTable.fill(2335, 73216, 73225); // 'state 572' -> true..( -> reduce (target=143, len=4)
actionsTable.fill(2335, 73226, 73235); // 'state 572' -> else..of -> reduce (target=143, len=4)
actionsTable[73235] = 2469; // 'state 572' -> in -> reduce (target=210, len=4)
actionsTable.fill(2335, 73236, 73239); // 'state 572' -> return..try -> reduce (target=143, len=4)
actionsTable.fill(2335, 73241, 73243); // 'state 572' -> switch..case -> reduce (target=143, len=4)
actionsTable.fill(2335, 73244, 73249); // 'state 572' -> default..from -> reduce (target=143, len=4)
actionsTable.fill(2469, 73250, 73252); // 'state 572' -> *..as -> reduce (target=210, len=4)
actionsTable.fill(2335, 73252, 73254); // 'state 572' -> type..export -> reduce (target=143, len=4)
actionsTable[73257] = 2335; // 'state 572' -> [ -> reduce (target=143, len=4)
actionsTable.fill(2335, 73259, 73261); // 'state 572' -> async..function -> reduce (target=143, len=4)
actionsTable.fill(2335, 73263, 73266); // 'state 572' -> get..class -> reduce (target=143, len=4)
actionsTable[73268] = 2335; // 'state 572' -> interface -> reduce (target=143, len=4)
actionsTable[73270] = 2335; // 'state 572' -> < -> reduce (target=143, len=4)
actionsTable.fill(2469, 73271, 73274); // 'state 572' -> >..& -> reduce (target=210, len=4)
actionsTable.fill(2335, 73275, 73277); // 'state 572' -> void..typeof -> reduce (target=143, len=4)
actionsTable[73278] = 2335; // 'state 572' -> new -> reduce (target=143, len=4)
actionsTable.fill(2469, 73279, 73285); // 'state 572' -> ?..instanceof -> reduce (target=210, len=4)
actionsTable.fill(2335, 73285, 73287); // 'state 572' -> +..- -> reduce (target=143, len=4)
actionsTable[73287] = 2469; // 'state 572' -> ** -> reduce (target=210, len=4)
actionsTable.fill(2335, 73288, 73292); // 'state 572' -> !..await -> reduce (target=143, len=4)
actionsTable.fill(2469, 73292, 73294); // 'state 572' -> ?.... -> reduce (target=210, len=4)
actionsTable[73294] = 2335; // 'state 572' -> identifier -> reduce (target=143, len=4)
actionsTable.fill(2335, 73296, 73299); // 'state 572' -> number..template_string -> reduce (target=143, len=4)
actionsTable.fill(2469, 73301, 73305); // 'state 572' -> equality_operator..multiplicative_operator -> reduce (target=210, len=4)
actionsTable.fill(2335, 73305, 73308); // 'state 572' -> update_operator..@par-gen.EOF -> reduce (target=143, len=4)
actionsTable.fill(1823, 73344, 73353); // 'state 573' -> true..( -> reduce (target=143, len=3)
actionsTable.fill(1823, 73355, 73357); // 'state 573' -> while..do -> reduce (target=143, len=3)
actionsTable[73357] = 1957; // 'state 573' -> ; -> reduce (target=210, len=3)
actionsTable.fill(1823, 73358, 73363); // 'state 573' -> for..of -> reduce (target=143, len=3)
actionsTable[73363] = 1957; // 'state 573' -> in -> reduce (target=210, len=3)
actionsTable.fill(1823, 73364, 73367); // 'state 573' -> return..try -> reduce (target=143, len=3)
actionsTable[73369] = 1823; // 'state 573' -> switch -> reduce (target=143, len=3)
actionsTable.fill(1823, 73373, 73377); // 'state 573' -> break..from -> reduce (target=143, len=3)
actionsTable.fill(1957, 73378, 73380); // 'state 573' -> *..as -> reduce (target=210, len=3)
actionsTable.fill(1823, 73380, 73382); // 'state 573' -> type..export -> reduce (target=143, len=3)
actionsTable[73385] = 1823; // 'state 573' -> [ -> reduce (target=143, len=3)
actionsTable.fill(1823, 73387, 73389); // 'state 573' -> async..function -> reduce (target=143, len=3)
actionsTable.fill(1823, 73391, 73394); // 'state 573' -> get..class -> reduce (target=143, len=3)
actionsTable[73396] = 1823; // 'state 573' -> interface -> reduce (target=143, len=3)
actionsTable[73398] = 1823; // 'state 573' -> < -> reduce (target=143, len=3)
actionsTable.fill(1957, 73399, 73402); // 'state 573' -> >..& -> reduce (target=210, len=3)
actionsTable.fill(1823, 73403, 73405); // 'state 573' -> void..typeof -> reduce (target=143, len=3)
actionsTable[73406] = 1823; // 'state 573' -> new -> reduce (target=143, len=3)
actionsTable.fill(1957, 73407, 73413); // 'state 573' -> ?..instanceof -> reduce (target=210, len=3)
actionsTable.fill(1823, 73413, 73415); // 'state 573' -> +..- -> reduce (target=143, len=3)
actionsTable[73415] = 1957; // 'state 573' -> ** -> reduce (target=210, len=3)
actionsTable.fill(1823, 73416, 73420); // 'state 573' -> !..await -> reduce (target=143, len=3)
actionsTable.fill(1957, 73420, 73422); // 'state 573' -> ?.... -> reduce (target=210, len=3)
actionsTable[73422] = 1823; // 'state 573' -> identifier -> reduce (target=143, len=3)
actionsTable.fill(1823, 73424, 73427); // 'state 573' -> number..template_string -> reduce (target=143, len=3)
actionsTable.fill(1957, 73429, 73433); // 'state 573' -> equality_operator..multiplicative_operator -> reduce (target=210, len=3)
actionsTable.fill(1823, 73433, 73436); // 'state 573' -> update_operator..@par-gen.EOF -> reduce (target=143, len=3)
actionsTable.fill(2469, 73472, 73495); // 'state 574' -> true..try -> reduce (target=210, len=4)
actionsTable.fill(2469, 73497, 73510); // 'state 574' -> switch..export -> reduce (target=210, len=4)
actionsTable.fill(2469, 73513, 73522); // 'state 574' -> [..class -> reduce (target=210, len=4)
actionsTable.fill(2469, 73523, 73525); // 'state 574' -> implements..interface -> reduce (target=210, len=4)
actionsTable.fill(2469, 73526, 73530); // 'state 574' -> <..& -> reduce (target=210, len=4)
actionsTable.fill(2469, 73531, 73533); // 'state 574' -> void..typeof -> reduce (target=210, len=4)
actionsTable.fill(2469, 73534, 73556); // 'state 574' -> new..accessibility_modifier -> reduce (target=210, len=4)
actionsTable.fill(2469, 73557, 73564); // 'state 574' -> equality_operator..@par-gen.EOF -> reduce (target=210, len=4)
actionsTable[73605] = 1825; // 'state 575' -> { -> reduce (target=144, len=3)
actionsTable[73733] = 1829; // 'state 576' -> { -> reduce (target=146, len=3)
actionsTable[73761] = 640; // 'state 576' -> , -> shift (target=320, len=0)
actionsTable.fill(1833, 73856, 73879); // 'state 577' -> true..try -> reduce (target=148, len=3)
actionsTable.fill(1833, 73881, 73894); // 'state 577' -> switch..export -> reduce (target=148, len=3)
actionsTable.fill(1833, 73897, 73906); // 'state 577' -> [..class -> reduce (target=148, len=3)
actionsTable.fill(1833, 73907, 73909); // 'state 577' -> implements..interface -> reduce (target=148, len=3)
actionsTable.fill(1833, 73910, 73914); // 'state 577' -> <..& -> reduce (target=148, len=3)
actionsTable.fill(1833, 73915, 73917); // 'state 577' -> void..typeof -> reduce (target=148, len=3)
actionsTable.fill(1833, 73918, 73940); // 'state 577' -> new..accessibility_modifier -> reduce (target=148, len=3)
actionsTable.fill(1833, 73941, 73948); // 'state 577' -> equality_operator..@par-gen.EOF -> reduce (target=148, len=3)
actionsTable[73990] = 1319; // 'state 578' -> } -> reduce (target=147, len=2)
actionsTable[73997] = 1319; // 'state 578' -> ; -> reduce (target=147, len=2)
actionsTable[74002] = 1319; // 'state 578' -> of -> reduce (target=147, len=2)
actionsTable[74016] = 1319; // 'state 578' -> from -> reduce (target=147, len=2)
actionsTable[74020] = 1319; // 'state 578' -> type -> reduce (target=147, len=2)
actionsTable[74025] = 1319; // 'state 578' -> [ -> reduce (target=147, len=2)
actionsTable[74027] = 1319; // 'state 578' -> async -> reduce (target=147, len=2)
actionsTable.fill(1319, 74029, 74033); // 'state 578' -> static..set -> reduce (target=147, len=2)
actionsTable.fill(1319, 74062, 74066); // 'state 578' -> identifier..string -> reduce (target=147, len=2)
actionsTable[74067] = 1319; // 'state 578' -> accessibility_modifier -> reduce (target=147, len=2)
actionsTable[74118] = 869; // 'state 579' -> } -> reduce (target=178, len=1)
actionsTable[74120] = 869; // 'state 579' -> ( -> reduce (target=178, len=1)
actionsTable[74125] = 869; // 'state 579' -> ; -> reduce (target=178, len=1)
actionsTable[74130] = 1309; // 'state 579' -> of -> reduce (target=142, len=2)
actionsTable[74139] = 869; // 'state 579' -> : -> reduce (target=178, len=1)
actionsTable[74144] = 1309; // 'state 579' -> from -> reduce (target=142, len=2)
actionsTable[74148] = 1309; // 'state 579' -> type -> reduce (target=142, len=2)
actionsTable[74151] = 869; // 'state 579' -> = -> reduce (target=178, len=1)
actionsTable[74153] = 1309; // 'state 579' -> [ -> reduce (target=142, len=2)
actionsTable[74155] = 1309; // 'state 579' -> async -> reduce (target=142, len=2)
actionsTable.fill(1309, 74157, 74161); // 'state 579' -> static..set -> reduce (target=142, len=2)
actionsTable.fill(869, 74165, 74167); // 'state 579' -> ?:..< -> reduce (target=178, len=1)
actionsTable.fill(1309, 74190, 74194); // 'state 579' -> identifier..string -> reduce (target=142, len=2)
actionsTable[74195] = 1309; // 'state 579' -> accessibility_modifier -> reduce (target=142, len=2)
actionsTable[74246] = 1325; // 'state 580' -> } -> reduce (target=150, len=2)
actionsTable[74253] = 1325; // 'state 580' -> ; -> reduce (target=150, len=2)
actionsTable[74258] = 1325; // 'state 580' -> of -> reduce (target=150, len=2)
actionsTable[74272] = 1325; // 'state 580' -> from -> reduce (target=150, len=2)
actionsTable[74276] = 1325; // 'state 580' -> type -> reduce (target=150, len=2)
actionsTable[74281] = 1325; // 'state 580' -> [ -> reduce (target=150, len=2)
actionsTable[74283] = 1325; // 'state 580' -> async -> reduce (target=150, len=2)
actionsTable.fill(1325, 74285, 74289); // 'state 580' -> static..set -> reduce (target=150, len=2)
actionsTable.fill(1325, 74318, 74322); // 'state 580' -> identifier..string -> reduce (target=150, len=2)
actionsTable[74323] = 1325; // 'state 580' -> accessibility_modifier -> reduce (target=150, len=2)
actionsTable[74374] = 1325; // 'state 581' -> } -> reduce (target=150, len=2)
actionsTable[74381] = 1302; // 'state 581' -> ; -> shift (target=651, len=0)
actionsTable[74386] = 1325; // 'state 581' -> of -> reduce (target=150, len=2)
actionsTable[74400] = 1325; // 'state 581' -> from -> reduce (target=150, len=2)
actionsTable[74404] = 1325; // 'state 581' -> type -> reduce (target=150, len=2)
actionsTable[74407] = 642; // 'state 581' -> = -> shift (target=321, len=0)
actionsTable[74409] = 1325; // 'state 581' -> [ -> reduce (target=150, len=2)
actionsTable[74411] = 1325; // 'state 581' -> async -> reduce (target=150, len=2)
actionsTable.fill(1325, 74413, 74417); // 'state 581' -> static..set -> reduce (target=150, len=2)
actionsTable.fill(1325, 74446, 74450); // 'state 581' -> identifier..string -> reduce (target=150, len=2)
actionsTable[74451] = 1325; // 'state 581' -> accessibility_modifier -> reduce (target=150, len=2)
actionsTable.fill(2351, 74496, 74505); // 'state 582' -> true..( -> reduce (target=151, len=4)
actionsTable.fill(2351, 74506, 74509); // 'state 582' -> else..do -> reduce (target=151, len=4)
actionsTable.fill(2351, 74510, 74515); // 'state 582' -> for..of -> reduce (target=151, len=4)
actionsTable.fill(2351, 74516, 74519); // 'state 582' -> return..try -> reduce (target=151, len=4)
actionsTable.fill(2351, 74521, 74523); // 'state 582' -> switch..case -> reduce (target=151, len=4)
actionsTable.fill(2351, 74524, 74529); // 'state 582' -> default..from -> reduce (target=151, len=4)
actionsTable.fill(2351, 74532, 74534); // 'state 582' -> type..export -> reduce (target=151, len=4)
actionsTable[74537] = 2351; // 'state 582' -> [ -> reduce (target=151, len=4)
actionsTable.fill(2351, 74539, 74541); // 'state 582' -> async..function -> reduce (target=151, len=4)
actionsTable.fill(2351, 74543, 74546); // 'state 582' -> get..class -> reduce (target=151, len=4)
actionsTable[74548] = 2351; // 'state 582' -> interface -> reduce (target=151, len=4)
actionsTable[74550] = 2351; // 'state 582' -> < -> reduce (target=151, len=4)
actionsTable.fill(2351, 74555, 74557); // 'state 582' -> void..typeof -> reduce (target=151, len=4)
actionsTable[74558] = 2351; // 'state 582' -> new -> reduce (target=151, len=4)
actionsTable.fill(2351, 74565, 74567); // 'state 582' -> +..- -> reduce (target=151, len=4)
actionsTable.fill(2351, 74568, 74572); // 'state 582' -> !..await -> reduce (target=151, len=4)
actionsTable[74574] = 2351; // 'state 582' -> identifier -> reduce (target=151, len=4)
actionsTable.fill(2351, 74576, 74579); // 'state 582' -> number..template_string -> reduce (target=151, len=4)
actionsTable.fill(2351, 74585, 74588); // 'state 582' -> update_operator..@par-gen.EOF -> reduce (target=151, len=4)
actionsTable.fill(2355, 74624, 74633); // 'state 583' -> true..( -> reduce (target=153, len=4)
actionsTable.fill(2355, 74634, 74637); // 'state 583' -> else..do -> reduce (target=153, len=4)
actionsTable[74637] = 1314; // 'state 583' -> ; -> shift (target=657, len=0)
actionsTable.fill(2355, 74638, 74643); // 'state 583' -> for..of -> reduce (target=153, len=4)
actionsTable.fill(2355, 74644, 74647); // 'state 583' -> return..try -> reduce (target=153, len=4)
actionsTable.fill(2355, 74649, 74651); // 'state 583' -> switch..case -> reduce (target=153, len=4)
actionsTable.fill(2355, 74652, 74657); // 'state 583' -> default..from -> reduce (target=153, len=4)
actionsTable.fill(2355, 74660, 74662); // 'state 583' -> type..export -> reduce (target=153, len=4)
actionsTable[74665] = 2355; // 'state 583' -> [ -> reduce (target=153, len=4)
actionsTable.fill(2355, 74667, 74669); // 'state 583' -> async..function -> reduce (target=153, len=4)
actionsTable.fill(2355, 74671, 74674); // 'state 583' -> get..class -> reduce (target=153, len=4)
actionsTable[74676] = 2355; // 'state 583' -> interface -> reduce (target=153, len=4)
actionsTable[74678] = 2355; // 'state 583' -> < -> reduce (target=153, len=4)
actionsTable[74680] = 506; // 'state 583' -> | -> shift (target=253, len=0)
actionsTable[74681] = 508; // 'state 583' -> & -> shift (target=254, len=0)
actionsTable.fill(2355, 74683, 74685); // 'state 583' -> void..typeof -> reduce (target=153, len=4)
actionsTable[74686] = 2355; // 'state 583' -> new -> reduce (target=153, len=4)
actionsTable.fill(2355, 74693, 74695); // 'state 583' -> +..- -> reduce (target=153, len=4)
actionsTable.fill(2355, 74696, 74700); // 'state 583' -> !..await -> reduce (target=153, len=4)
actionsTable[74702] = 2355; // 'state 583' -> identifier -> reduce (target=153, len=4)
actionsTable.fill(2355, 74704, 74707); // 'state 583' -> number..template_string -> reduce (target=153, len=4)
actionsTable.fill(2355, 74713, 74716); // 'state 583' -> update_operator..@par-gen.EOF -> reduce (target=153, len=4)
actionsTable.fill(2411, 74752, 74775); // 'state 584' -> true..try -> reduce (target=181, len=4)
actionsTable.fill(2411, 74777, 74790); // 'state 584' -> switch..export -> reduce (target=181, len=4)
actionsTable.fill(2411, 74793, 74802); // 'state 584' -> [..class -> reduce (target=181, len=4)
actionsTable.fill(2411, 74803, 74813); // 'state 584' -> implements..typeof -> reduce (target=181, len=4)
actionsTable.fill(2411, 74814, 74836); // 'state 584' -> new..accessibility_modifier -> reduce (target=181, len=4)
actionsTable.fill(2411, 74837, 74844); // 'state 584' -> equality_operator..@par-gen.EOF -> reduce (target=181, len=4)
actionsTable[74889] = 1385; // 'state 585' -> ) -> reduce (target=180, len=2)
actionsTable[74913] = 1385; // 'state 585' -> , -> reduce (target=180, len=2)
actionsTable[75017] = 1819; // 'state 586' -> ) -> reduce (target=141, len=3)
actionsTable[75041] = 1819; // 'state 586' -> , -> reduce (target=141, len=3)
actionsTable[75047] = 652; // 'state 586' -> = -> shift (target=326, len=0)
actionsTable[75163] = 2329; // 'state 587' -> : -> reduce (target=140, len=4)
actionsTable[75189] = 2329; // 'state 587' -> ?: -> reduce (target=140, len=4)
actionsTable[75194] = 2329; // 'state 587' -> => -> reduce (target=140, len=4)
actionsTable[75273] = 1303; // 'state 588' -> ) -> reduce (target=139, len=2)
actionsTable[75297] = 1303; // 'state 588' -> , -> reduce (target=139, len=2)
actionsTable.fill(2433, 75392, 75415); // 'state 589' -> true..try -> reduce (target=192, len=4)
actionsTable.fill(2433, 75417, 75430); // 'state 589' -> switch..export -> reduce (target=192, len=4)
actionsTable.fill(2433, 75433, 75442); // 'state 589' -> [..class -> reduce (target=192, len=4)
actionsTable.fill(2433, 75443, 75445); // 'state 589' -> implements..interface -> reduce (target=192, len=4)
actionsTable.fill(2433, 75446, 75450); // 'state 589' -> <..& -> reduce (target=192, len=4)
actionsTable.fill(2433, 75451, 75453); // 'state 589' -> void..typeof -> reduce (target=192, len=4)
actionsTable.fill(2433, 75454, 75476); // 'state 589' -> new..accessibility_modifier -> reduce (target=192, len=4)
actionsTable.fill(2433, 75477, 75484); // 'state 589' -> equality_operator..@par-gen.EOF -> reduce (target=192, len=4)
actionsTable.fill(2449, 75520, 75543); // 'state 590' -> true..try -> reduce (target=200, len=4)
actionsTable.fill(2449, 75545, 75558); // 'state 590' -> switch..export -> reduce (target=200, len=4)
actionsTable[75559] = 2449; // 'state 590' -> = -> reduce (target=200, len=4)
actionsTable.fill(2449, 75561, 75570); // 'state 590' -> [..class -> reduce (target=200, len=4)
actionsTable.fill(2449, 75571, 75578); // 'state 590' -> implements..& -> reduce (target=200, len=4)
actionsTable.fill(2449, 75579, 75581); // 'state 590' -> void..typeof -> reduce (target=200, len=4)
actionsTable.fill(2449, 75582, 75612); // 'state 590' -> new..@par-gen.EOF -> reduce (target=200, len=4)
actionsTable[75681] = 532; // 'state 591' -> , -> shift (target=266, len=0)
actionsTable[75690] = 1328; // 'state 591' -> ] -> shift (target=664, len=0)
actionsTable[75809] = 1423; // 'state 592' -> , -> reduce (target=199, len=2)
actionsTable[75818] = 1423; // 'state 592' -> ] -> reduce (target=199, len=2)
actionsTable[75909] = 2361; // 'state 593' -> { -> reduce (target=156, len=4)
actionsTable[75912] = 2361; // 'state 593' -> ( -> reduce (target=156, len=4)
actionsTable[75943] = 2361; // 'state 593' -> = -> reduce (target=156, len=4)
actionsTable.fill(2361, 75954, 75956); // 'state 593' -> extends..implements -> reduce (target=156, len=4)
actionsTable[76065] = 1335; // 'state 594' -> , -> reduce (target=155, len=2)
actionsTable[76087] = 1335; // 'state 594' -> > -> reduce (target=155, len=2)
actionsTable[76193] = 1851; // 'state 595' -> , -> reduce (target=157, len=3)
actionsTable[76199] = 658; // 'state 595' -> = -> shift (target=329, len=0)
actionsTable[76215] = 1851; // 'state 595' -> > -> reduce (target=157, len=3)
actionsTable[76216] = 506; // 'state 595' -> | -> shift (target=253, len=0)
actionsTable[76217] = 508; // 'state 595' -> & -> shift (target=254, len=0)
actionsTable[76321] = 1851; // 'state 596' -> , -> reduce (target=157, len=3)
actionsTable[76343] = 1851; // 'state 596' -> > -> reduce (target=157, len=3)
actionsTable[76344] = 506; // 'state 596' -> | -> shift (target=253, len=0)
actionsTable[76345] = 508; // 'state 596' -> & -> shift (target=254, len=0)
actionsTable[76422] = 2457; // 'state 597' -> } -> reduce (target=204, len=4)
actionsTable[76449] = 2457; // 'state 597' -> , -> reduce (target=204, len=4)
actionsTable.fill(2965, 76544, 76567); // 'state 598' -> true..try -> reduce (target=202, len=5)
actionsTable.fill(2965, 76569, 76582); // 'state 598' -> switch..export -> reduce (target=202, len=5)
actionsTable[76583] = 2965; // 'state 598' -> = -> reduce (target=202, len=5)
actionsTable.fill(2965, 76585, 76594); // 'state 598' -> [..class -> reduce (target=202, len=5)
actionsTable.fill(2965, 76595, 76602); // 'state 598' -> implements..& -> reduce (target=202, len=5)
actionsTable.fill(2965, 76603, 76605); // 'state 598' -> void..typeof -> reduce (target=202, len=5)
actionsTable.fill(2965, 76606, 76636); // 'state 598' -> new..@par-gen.EOF -> reduce (target=202, len=5)
actionsTable[76678] = 1939; // 'state 599' -> } -> reduce (target=201, len=3)
actionsTable[76705] = 1939; // 'state 599' -> , -> reduce (target=201, len=3)
actionsTable.fill(2759, 76800, 76809); // 'state 600' -> true..( -> reduce (target=99, len=5)
actionsTable[76810] = 662; // 'state 600' -> else -> shift (target=331, len=0)
actionsTable.fill(2759, 76811, 76813); // 'state 600' -> while..do -> reduce (target=99, len=5)
actionsTable.fill(2759, 76814, 76819); // 'state 600' -> for..of -> reduce (target=99, len=5)
actionsTable.fill(2759, 76820, 76823); // 'state 600' -> return..try -> reduce (target=99, len=5)
actionsTable.fill(2759, 76825, 76827); // 'state 600' -> switch..case -> reduce (target=99, len=5)
actionsTable.fill(2759, 76828, 76833); // 'state 600' -> default..from -> reduce (target=99, len=5)
actionsTable.fill(2759, 76836, 76838); // 'state 600' -> type..export -> reduce (target=99, len=5)
actionsTable[76841] = 2759; // 'state 600' -> [ -> reduce (target=99, len=5)
actionsTable.fill(2759, 76843, 76845); // 'state 600' -> async..function -> reduce (target=99, len=5)
actionsTable.fill(2759, 76847, 76850); // 'state 600' -> get..class -> reduce (target=99, len=5)
actionsTable[76852] = 2759; // 'state 600' -> interface -> reduce (target=99, len=5)
actionsTable[76854] = 2759; // 'state 600' -> < -> reduce (target=99, len=5)
actionsTable.fill(2759, 76859, 76861); // 'state 600' -> void..typeof -> reduce (target=99, len=5)
actionsTable[76862] = 2759; // 'state 600' -> new -> reduce (target=99, len=5)
actionsTable.fill(2759, 76869, 76871); // 'state 600' -> +..- -> reduce (target=99, len=5)
actionsTable.fill(2759, 76872, 76876); // 'state 600' -> !..await -> reduce (target=99, len=5)
actionsTable[76878] = 2759; // 'state 600' -> identifier -> reduce (target=99, len=5)
actionsTable.fill(2759, 76880, 76883); // 'state 600' -> number..template_string -> reduce (target=99, len=5)
actionsTable.fill(2759, 76889, 76892); // 'state 600' -> update_operator..@par-gen.EOF -> reduce (target=99, len=5)
actionsTable.fill(2761, 76928, 76937); // 'state 601' -> true..( -> reduce (target=100, len=5)
actionsTable.fill(2761, 76938, 76941); // 'state 601' -> else..do -> reduce (target=100, len=5)
actionsTable.fill(2761, 76942, 76947); // 'state 601' -> for..of -> reduce (target=100, len=5)
actionsTable.fill(2761, 76948, 76951); // 'state 601' -> return..try -> reduce (target=100, len=5)
actionsTable.fill(2761, 76953, 76955); // 'state 601' -> switch..case -> reduce (target=100, len=5)
actionsTable.fill(2761, 76956, 76961); // 'state 601' -> default..from -> reduce (target=100, len=5)
actionsTable.fill(2761, 76964, 76966); // 'state 601' -> type..export -> reduce (target=100, len=5)
actionsTable[76969] = 2761; // 'state 601' -> [ -> reduce (target=100, len=5)
actionsTable.fill(2761, 76971, 76973); // 'state 601' -> async..function -> reduce (target=100, len=5)
actionsTable.fill(2761, 76975, 76978); // 'state 601' -> get..class -> reduce (target=100, len=5)
actionsTable[76980] = 2761; // 'state 601' -> interface -> reduce (target=100, len=5)
actionsTable[76982] = 2761; // 'state 601' -> < -> reduce (target=100, len=5)
actionsTable.fill(2761, 76987, 76989); // 'state 601' -> void..typeof -> reduce (target=100, len=5)
actionsTable[76990] = 2761; // 'state 601' -> new -> reduce (target=100, len=5)
actionsTable.fill(2761, 76997, 76999); // 'state 601' -> +..- -> reduce (target=100, len=5)
actionsTable.fill(2761, 77000, 77004); // 'state 601' -> !..await -> reduce (target=100, len=5)
actionsTable[77006] = 2761; // 'state 601' -> identifier -> reduce (target=100, len=5)
actionsTable.fill(2761, 77008, 77011); // 'state 601' -> number..template_string -> reduce (target=100, len=5)
actionsTable.fill(2761, 77017, 77020); // 'state 601' -> update_operator..@par-gen.EOF -> reduce (target=100, len=5)
actionsTable.fill(2779, 77056, 77065); // 'state 602' -> true..( -> reduce (target=109, len=5)
actionsTable.fill(2779, 77066, 77069); // 'state 602' -> else..do -> reduce (target=109, len=5)
actionsTable.fill(2779, 77070, 77075); // 'state 602' -> for..of -> reduce (target=109, len=5)
actionsTable.fill(2779, 77076, 77079); // 'state 602' -> return..try -> reduce (target=109, len=5)
actionsTable.fill(2779, 77081, 77083); // 'state 602' -> switch..case -> reduce (target=109, len=5)
actionsTable.fill(2779, 77084, 77089); // 'state 602' -> default..from -> reduce (target=109, len=5)
actionsTable.fill(2779, 77092, 77094); // 'state 602' -> type..export -> reduce (target=109, len=5)
actionsTable[77097] = 2779; // 'state 602' -> [ -> reduce (target=109, len=5)
actionsTable.fill(2779, 77099, 77101); // 'state 602' -> async..function -> reduce (target=109, len=5)
actionsTable.fill(2779, 77103, 77106); // 'state 602' -> get..class -> reduce (target=109, len=5)
actionsTable[77108] = 2779; // 'state 602' -> interface -> reduce (target=109, len=5)
actionsTable[77110] = 2779; // 'state 602' -> < -> reduce (target=109, len=5)
actionsTable.fill(2779, 77115, 77117); // 'state 602' -> void..typeof -> reduce (target=109, len=5)
actionsTable[77118] = 2779; // 'state 602' -> new -> reduce (target=109, len=5)
actionsTable.fill(2779, 77125, 77127); // 'state 602' -> +..- -> reduce (target=109, len=5)
actionsTable.fill(2779, 77128, 77132); // 'state 602' -> !..await -> reduce (target=109, len=5)
actionsTable[77134] = 2779; // 'state 602' -> identifier -> reduce (target=109, len=5)
actionsTable.fill(2779, 77136, 77139); // 'state 602' -> number..template_string -> reduce (target=109, len=5)
actionsTable.fill(2779, 77145, 77148); // 'state 602' -> update_operator..@par-gen.EOF -> reduce (target=109, len=5)
actionsTable.fill(1857, 77184, 77207); // 'state 603' -> true..try -> reduce (target=160, len=3)
actionsTable.fill(1857, 77209, 77222); // 'state 603' -> switch..export -> reduce (target=160, len=3)
actionsTable[77223] = 1857; // 'state 603' -> = -> reduce (target=160, len=3)
actionsTable.fill(1857, 77225, 77234); // 'state 603' -> [..class -> reduce (target=160, len=3)
actionsTable.fill(1857, 77235, 77237); // 'state 603' -> implements..interface -> reduce (target=160, len=3)
actionsTable.fill(1857, 77238, 77241); // 'state 603' -> <..| -> reduce (target=160, len=3)
actionsTable[77241] = 508; // 'state 603' -> & -> shift (target=254, len=0)
actionsTable.fill(1857, 77242, 77245); // 'state 603' -> =>..typeof -> reduce (target=160, len=3)
actionsTable.fill(1857, 77246, 77268); // 'state 603' -> new..accessibility_modifier -> reduce (target=160, len=3)
actionsTable.fill(1857, 77269, 77276); // 'state 603' -> equality_operator..@par-gen.EOF -> reduce (target=160, len=3)
actionsTable.fill(1859, 77312, 77335); // 'state 604' -> true..try -> reduce (target=161, len=3)
actionsTable.fill(1859, 77337, 77350); // 'state 604' -> switch..export -> reduce (target=161, len=3)
actionsTable[77351] = 1859; // 'state 604' -> = -> reduce (target=161, len=3)
actionsTable.fill(1859, 77353, 77362); // 'state 604' -> [..class -> reduce (target=161, len=3)
actionsTable.fill(1859, 77363, 77365); // 'state 604' -> implements..interface -> reduce (target=161, len=3)
actionsTable.fill(1859, 77366, 77373); // 'state 604' -> <..typeof -> reduce (target=161, len=3)
actionsTable.fill(1859, 77374, 77396); // 'state 604' -> new..accessibility_modifier -> reduce (target=161, len=3)
actionsTable.fill(1859, 77397, 77404); // 'state 604' -> equality_operator..@par-gen.EOF -> reduce (target=161, len=3)
actionsTable.fill(1867, 77440, 77463); // 'state 605' -> true..try -> reduce (target=165, len=3)
actionsTable.fill(1867, 77465, 77478); // 'state 605' -> switch..export -> reduce (target=165, len=3)
actionsTable[77479] = 1867; // 'state 605' -> = -> reduce (target=165, len=3)
actionsTable.fill(1867, 77481, 77490); // 'state 605' -> [..class -> reduce (target=165, len=3)
actionsTable.fill(1867, 77491, 77493); // 'state 605' -> implements..interface -> reduce (target=165, len=3)
actionsTable.fill(1867, 77494, 77501); // 'state 605' -> <..typeof -> reduce (target=165, len=3)
actionsTable.fill(1867, 77502, 77524); // 'state 605' -> new..accessibility_modifier -> reduce (target=165, len=3)
actionsTable.fill(1867, 77525, 77532); // 'state 605' -> equality_operator..@par-gen.EOF -> reduce (target=165, len=3)
actionsTable[77610] = 1352; // 'state 606' -> ] -> shift (target=676, len=0)
actionsTable[77624] = 506; // 'state 606' -> | -> shift (target=253, len=0)
actionsTable[77625] = 508; // 'state 606' -> & -> shift (target=254, len=0)
actionsTable[77723] = 1299; // 'state 607' -> : -> reduce (target=137, len=2)
actionsTable[77749] = 1299; // 'state 607' -> ?: -> reduce (target=137, len=2)
actionsTable[77754] = 680; // 'state 607' -> => -> shift (target=340, len=0)
actionsTable[77830] = 1369; // 'state 608' -> } -> reduce (target=172, len=2)
actionsTable[77832] = 1429; // 'state 608' -> ( -> reduce (target=202, len=2)
actionsTable[77833] = 1369; // 'state 608' -> ) -> reduce (target=172, len=2)
actionsTable[77837] = 1369; // 'state 608' -> ; -> reduce (target=172, len=2)
actionsTable[77842] = 1369; // 'state 608' -> of -> reduce (target=172, len=2)
actionsTable[77843] = 1429; // 'state 608' -> in -> reduce (target=202, len=2)
actionsTable[77851] = 1429; // 'state 608' -> : -> reduce (target=202, len=2)
actionsTable.fill(1369, 77856, 77858); // 'state 608' -> from.., -> reduce (target=172, len=2)
actionsTable.fill(1429, 77858, 77860); // 'state 608' -> *..as -> reduce (target=202, len=2)
actionsTable[77860] = 1369; // 'state 608' -> type -> reduce (target=172, len=2)
actionsTable[77863] = 1429; // 'state 608' -> = -> reduce (target=202, len=2)
actionsTable.fill(1369, 77865, 77868); // 'state 608' -> [..async -> reduce (target=172, len=2)
actionsTable.fill(1369, 77870, 77873); // 'state 608' -> readonly..set -> reduce (target=172, len=2)
actionsTable.fill(1429, 77877, 77880); // 'state 608' -> ?:..> -> reduce (target=202, len=2)
actionsTable.fill(1369, 77880, 77882); // 'state 608' -> |..& -> reduce (target=172, len=2)
actionsTable[77886] = 1369; // 'state 608' -> new -> reduce (target=172, len=2)
actionsTable.fill(1429, 77887, 77896); // 'state 608' -> ?..** -> reduce (target=202, len=2)
actionsTable.fill(1429, 77900, 77902); // 'state 608' -> ?.... -> reduce (target=202, len=2)
actionsTable[77902] = 1369; // 'state 608' -> identifier -> reduce (target=172, len=2)
actionsTable.fill(1369, 77904, 77906); // 'state 608' -> number..string -> reduce (target=172, len=2)
actionsTable.fill(1429, 77908, 77914); // 'state 608' -> compound_assignment_operator..update_operator -> reduce (target=202, len=2)
actionsTable[77958] = 839; // 'state 609' -> } -> reduce (target=163, len=1)
actionsTable[77960] = 871; // 'state 609' -> ( -> reduce (target=179, len=1)
actionsTable[77961] = 839; // 'state 609' -> ) -> reduce (target=163, len=1)
actionsTable[77965] = 839; // 'state 609' -> ; -> reduce (target=163, len=1)
actionsTable[77970] = 839; // 'state 609' -> of -> reduce (target=163, len=1)
actionsTable[77971] = 871; // 'state 609' -> in -> reduce (target=179, len=1)
actionsTable.fill(839, 77984, 77986); // 'state 609' -> from.., -> reduce (target=163, len=1)
actionsTable.fill(871, 77986, 77988); // 'state 609' -> *..as -> reduce (target=179, len=1)
actionsTable[77988] = 839; // 'state 609' -> type -> reduce (target=163, len=1)
actionsTable.fill(839, 77993, 77996); // 'state 609' -> [..async -> reduce (target=163, len=1)
actionsTable.fill(839, 77998, 78001); // 'state 609' -> readonly..set -> reduce (target=163, len=1)
actionsTable.fill(871, 78006, 78008); // 'state 609' -> <..> -> reduce (target=179, len=1)
actionsTable.fill(839, 78008, 78010); // 'state 609' -> |..& -> reduce (target=163, len=1)
actionsTable[78014] = 839; // 'state 609' -> new -> reduce (target=163, len=1)
actionsTable.fill(871, 78015, 78024); // 'state 609' -> ?..** -> reduce (target=179, len=1)
actionsTable.fill(871, 78028, 78030); // 'state 609' -> ?.... -> reduce (target=179, len=1)
actionsTable[78030] = 839; // 'state 609' -> identifier -> reduce (target=163, len=1)
actionsTable.fill(839, 78032, 78034); // 'state 609' -> number..string -> reduce (target=163, len=1)
actionsTable.fill(871, 78037, 78042); // 'state 609' -> equality_operator..update_operator -> reduce (target=179, len=1)
actionsTable[78086] = 1359; // 'state 610' -> } -> reduce (target=167, len=2)
actionsTable[78088] = 1425; // 'state 610' -> ( -> reduce (target=200, len=2)
actionsTable[78089] = 1359; // 'state 610' -> ) -> reduce (target=167, len=2)
actionsTable[78093] = 1359; // 'state 610' -> ; -> reduce (target=167, len=2)
actionsTable[78098] = 1359; // 'state 610' -> of -> reduce (target=167, len=2)
actionsTable[78099] = 1425; // 'state 610' -> in -> reduce (target=200, len=2)
actionsTable[78107] = 1425; // 'state 610' -> : -> reduce (target=200, len=2)
actionsTable.fill(1359, 78112, 78114); // 'state 610' -> from.., -> reduce (target=167, len=2)
actionsTable.fill(1425, 78114, 78116); // 'state 610' -> *..as -> reduce (target=200, len=2)
actionsTable[78116] = 1359; // 'state 610' -> type -> reduce (target=167, len=2)
actionsTable[78119] = 1425; // 'state 610' -> = -> reduce (target=200, len=2)
actionsTable.fill(1359, 78121, 78124); // 'state 610' -> [..async -> reduce (target=167, len=2)
actionsTable.fill(1359, 78126, 78129); // 'state 610' -> readonly..set -> reduce (target=167, len=2)
actionsTable.fill(1425, 78133, 78136); // 'state 610' -> ?:..> -> reduce (target=200, len=2)
actionsTable.fill(1359, 78136, 78138); // 'state 610' -> |..& -> reduce (target=167, len=2)
actionsTable[78142] = 1359; // 'state 610' -> new -> reduce (target=167, len=2)
actionsTable.fill(1425, 78143, 78152); // 'state 610' -> ?..** -> reduce (target=200, len=2)
actionsTable.fill(1425, 78156, 78158); // 'state 610' -> ?.... -> reduce (target=200, len=2)
actionsTable[78158] = 1359; // 'state 610' -> identifier -> reduce (target=167, len=2)
actionsTable.fill(1359, 78160, 78162); // 'state 610' -> number..string -> reduce (target=167, len=2)
actionsTable.fill(1425, 78164, 78170); // 'state 610' -> compound_assignment_operator..update_operator -> reduce (target=200, len=2)
actionsTable.fill(1873, 78208, 78231); // 'state 611' -> true..try -> reduce (target=168, len=3)
actionsTable.fill(1873, 78233, 78246); // 'state 611' -> switch..export -> reduce (target=168, len=3)
actionsTable[78247] = 1873; // 'state 611' -> = -> reduce (target=168, len=3)
actionsTable.fill(1873, 78249, 78258); // 'state 611' -> [..class -> reduce (target=168, len=3)
actionsTable.fill(1873, 78259, 78261); // 'state 611' -> implements..interface -> reduce (target=168, len=3)
actionsTable.fill(1873, 78262, 78269); // 'state 611' -> <..typeof -> reduce (target=168, len=3)
actionsTable.fill(1873, 78270, 78292); // 'state 611' -> new..accessibility_modifier -> reduce (target=168, len=3)
actionsTable.fill(1873, 78293, 78300); // 'state 611' -> equality_operator..@par-gen.EOF -> reduce (target=168, len=3)
actionsTable.fill(1861, 78336, 78359); // 'state 612' -> true..try -> reduce (target=162, len=3)
actionsTable.fill(1861, 78361, 78374); // 'state 612' -> switch..export -> reduce (target=162, len=3)
actionsTable[78375] = 1861; // 'state 612' -> = -> reduce (target=162, len=3)
actionsTable.fill(1861, 78377, 78386); // 'state 612' -> [..class -> reduce (target=162, len=3)
actionsTable.fill(1861, 78387, 78389); // 'state 612' -> implements..interface -> reduce (target=162, len=3)
actionsTable.fill(1861, 78390, 78397); // 'state 612' -> <..typeof -> reduce (target=162, len=3)
actionsTable.fill(1861, 78398, 78420); // 'state 612' -> new..accessibility_modifier -> reduce (target=162, len=3)
actionsTable.fill(1861, 78421, 78428); // 'state 612' -> equality_operator..@par-gen.EOF -> reduce (target=162, len=3)
actionsTable.fill(1877, 78464, 78487); // 'state 613' -> true..try -> reduce (target=170, len=3)
actionsTable.fill(1877, 78489, 78502); // 'state 613' -> switch..export -> reduce (target=170, len=3)
actionsTable[78503] = 1877; // 'state 613' -> = -> reduce (target=170, len=3)
actionsTable.fill(1877, 78505, 78514); // 'state 613' -> [..class -> reduce (target=170, len=3)
actionsTable.fill(1877, 78515, 78517); // 'state 613' -> implements..interface -> reduce (target=170, len=3)
actionsTable.fill(1877, 78518, 78520); // 'state 613' -> <..> -> reduce (target=170, len=3)
actionsTable[78520] = 506; // 'state 613' -> | -> shift (target=253, len=0)
actionsTable[78521] = 508; // 'state 613' -> & -> shift (target=254, len=0)
actionsTable.fill(1877, 78522, 78525); // 'state 613' -> =>..typeof -> reduce (target=170, len=3)
actionsTable.fill(1877, 78526, 78548); // 'state 613' -> new..accessibility_modifier -> reduce (target=170, len=3)
actionsTable.fill(1877, 78549, 78556); // 'state 613' -> equality_operator..@par-gen.EOF -> reduce (target=170, len=3)
actionsTable.fill(1871, 78592, 78615); // 'state 614' -> true..try -> reduce (target=167, len=3)
actionsTable.fill(1871, 78617, 78630); // 'state 614' -> switch..export -> reduce (target=167, len=3)
actionsTable[78631] = 1871; // 'state 614' -> = -> reduce (target=167, len=3)
actionsTable.fill(1871, 78633, 78642); // 'state 614' -> [..class -> reduce (target=167, len=3)
actionsTable.fill(1871, 78643, 78645); // 'state 614' -> implements..interface -> reduce (target=167, len=3)
actionsTable.fill(1871, 78646, 78653); // 'state 614' -> <..typeof -> reduce (target=167, len=3)
actionsTable.fill(1871, 78654, 78676); // 'state 614' -> new..accessibility_modifier -> reduce (target=167, len=3)
actionsTable.fill(1871, 78677, 78684); // 'state 614' -> equality_operator..@par-gen.EOF -> reduce (target=167, len=3)
actionsTable[78753] = 704; // 'state 615' -> , -> shift (target=352, len=0)
actionsTable[78762] = 1368; // 'state 615' -> ] -> shift (target=684, len=0)
actionsTable.fill(1881, 78848, 78871); // 'state 616' -> true..try -> reduce (target=172, len=3)
actionsTable.fill(1881, 78873, 78886); // 'state 616' -> switch..export -> reduce (target=172, len=3)
actionsTable[78887] = 1881; // 'state 616' -> = -> reduce (target=172, len=3)
actionsTable.fill(1881, 78889, 78898); // 'state 616' -> [..class -> reduce (target=172, len=3)
actionsTable.fill(1881, 78899, 78901); // 'state 616' -> implements..interface -> reduce (target=172, len=3)
actionsTable.fill(1881, 78902, 78909); // 'state 616' -> <..typeof -> reduce (target=172, len=3)
actionsTable.fill(1881, 78910, 78932); // 'state 616' -> new..accessibility_modifier -> reduce (target=172, len=3)
actionsTable.fill(1881, 78933, 78940); // 'state 616' -> equality_operator..@par-gen.EOF -> reduce (target=172, len=3)
actionsTable[78982] = 1367; // 'state 617' -> } -> reduce (target=171, len=2)
actionsTable[78989] = 1370; // 'state 617' -> ; -> shift (target=685, len=0)
actionsTable[78994] = 1367; // 'state 617' -> of -> reduce (target=171, len=2)
actionsTable[79008] = 1367; // 'state 617' -> from -> reduce (target=171, len=2)
actionsTable[79009] = 1370; // 'state 617' -> , -> shift (target=685, len=0)
actionsTable[79012] = 1367; // 'state 617' -> type -> reduce (target=171, len=2)
actionsTable[79017] = 1367; // 'state 617' -> [ -> reduce (target=171, len=2)
actionsTable[79019] = 1367; // 'state 617' -> async -> reduce (target=171, len=2)
actionsTable.fill(1367, 79022, 79025); // 'state 617' -> readonly..set -> reduce (target=171, len=2)
actionsTable[79038] = 1367; // 'state 617' -> new -> reduce (target=171, len=2)
actionsTable[79054] = 1367; // 'state 617' -> identifier -> reduce (target=171, len=2)
actionsTable.fill(1367, 79056, 79058); // 'state 617' -> number..string -> reduce (target=171, len=2)
actionsTable[79110] = 1367; // 'state 618' -> } -> reduce (target=171, len=2)
actionsTable[79122] = 1367; // 'state 618' -> of -> reduce (target=171, len=2)
actionsTable[79136] = 1367; // 'state 618' -> from -> reduce (target=171, len=2)
actionsTable[79140] = 1367; // 'state 618' -> type -> reduce (target=171, len=2)
actionsTable[79145] = 1367; // 'state 618' -> [ -> reduce (target=171, len=2)
actionsTable[79147] = 1367; // 'state 618' -> async -> reduce (target=171, len=2)
actionsTable.fill(1367, 79150, 79153); // 'state 618' -> readonly..set -> reduce (target=171, len=2)
actionsTable[79166] = 1367; // 'state 618' -> new -> reduce (target=171, len=2)
actionsTable[79182] = 1367; // 'state 618' -> identifier -> reduce (target=171, len=2)
actionsTable.fill(1367, 79184, 79186); // 'state 618' -> number..string -> reduce (target=171, len=2)
actionsTable[79238] = 1371; // 'state 619' -> } -> reduce (target=173, len=2)
actionsTable[79245] = 1371; // 'state 619' -> ; -> reduce (target=173, len=2)
actionsTable[79250] = 1371; // 'state 619' -> of -> reduce (target=173, len=2)
actionsTable.fill(1371, 79264, 79266); // 'state 619' -> from.., -> reduce (target=173, len=2)
actionsTable[79268] = 1371; // 'state 619' -> type -> reduce (target=173, len=2)
actionsTable[79273] = 1371; // 'state 619' -> [ -> reduce (target=173, len=2)
actionsTable[79275] = 1371; // 'state 619' -> async -> reduce (target=173, len=2)
actionsTable.fill(1371, 79278, 79281); // 'state 619' -> readonly..set -> reduce (target=173, len=2)
actionsTable[79294] = 1371; // 'state 619' -> new -> reduce (target=173, len=2)
actionsTable[79310] = 1371; // 'state 619' -> identifier -> reduce (target=173, len=2)
actionsTable.fill(1371, 79312, 79314); // 'state 619' -> number..string -> reduce (target=173, len=2)
actionsTable[79368] = 871; // 'state 620' -> ( -> reduce (target=179, len=1)
actionsTable[79379] = 710; // 'state 620' -> in -> shift (target=355, len=0)
actionsTable[79387] = 710; // 'state 620' -> : -> shift (target=355, len=0)
actionsTable.fill(871, 79393, 79396); // 'state 620' -> ,..as -> reduce (target=179, len=1)
actionsTable[79399] = 877; // 'state 620' -> = -> reduce (target=182, len=1)
actionsTable.fill(871, 79401, 79403); // 'state 620' -> [..] -> reduce (target=179, len=1)
actionsTable.fill(871, 79414, 79418); // 'state 620' -> <..& -> reduce (target=179, len=1)
actionsTable[79418] = 162; // 'state 620' -> => -> shift (target=81, len=0)
actionsTable.fill(871, 79423, 79432); // 'state 620' -> ?..** -> reduce (target=179, len=1)
actionsTable.fill(871, 79436, 79438); // 'state 620' -> ?.... -> reduce (target=179, len=1)
actionsTable[79444] = 877; // 'state 620' -> compound_assignment_operator -> reduce (target=182, len=1)
actionsTable.fill(871, 79445, 79450); // 'state 620' -> equality_operator..update_operator -> reduce (target=179, len=1)
actionsTable.fill(2951, 79488, 79511); // 'state 621' -> true..try -> reduce (target=195, len=5)
actionsTable.fill(2951, 79513, 79526); // 'state 621' -> switch..export -> reduce (target=195, len=5)
actionsTable[79527] = 2951; // 'state 621' -> = -> reduce (target=195, len=5)
actionsTable.fill(2951, 79529, 79538); // 'state 621' -> [..class -> reduce (target=195, len=5)
actionsTable.fill(2951, 79539, 79541); // 'state 621' -> implements..interface -> reduce (target=195, len=5)
actionsTable.fill(2951, 79542, 79546); // 'state 621' -> <..& -> reduce (target=195, len=5)
actionsTable.fill(2951, 79547, 79549); // 'state 621' -> void..typeof -> reduce (target=195, len=5)
actionsTable.fill(2951, 79550, 79580); // 'state 621' -> new..@par-gen.EOF -> reduce (target=195, len=5)
actionsTable.fill(2441, 79616, 79639); // 'state 622' -> true..try -> reduce (target=196, len=4)
actionsTable.fill(2441, 79641, 79654); // 'state 622' -> switch..export -> reduce (target=196, len=4)
actionsTable.fill(2441, 79657, 79666); // 'state 622' -> [..class -> reduce (target=196, len=4)
actionsTable.fill(2441, 79667, 79669); // 'state 622' -> implements..interface -> reduce (target=196, len=4)
actionsTable.fill(2441, 79670, 79674); // 'state 622' -> <..& -> reduce (target=196, len=4)
actionsTable.fill(2441, 79675, 79677); // 'state 622' -> void..typeof -> reduce (target=196, len=4)
actionsTable.fill(2441, 79678, 79700); // 'state 622' -> new..accessibility_modifier -> reduce (target=196, len=4)
actionsTable.fill(2441, 79701, 79708); // 'state 622' -> equality_operator..@par-gen.EOF -> reduce (target=196, len=4)
actionsTable.fill(2797, 79744, 79753); // 'state 623' -> true..( -> reduce (target=118, len=5)
actionsTable.fill(2797, 79754, 79757); // 'state 623' -> else..do -> reduce (target=118, len=5)
actionsTable.fill(2797, 79758, 79763); // 'state 623' -> for..of -> reduce (target=118, len=5)
actionsTable.fill(2797, 79764, 79767); // 'state 623' -> return..try -> reduce (target=118, len=5)
actionsTable.fill(2797, 79769, 79771); // 'state 623' -> switch..case -> reduce (target=118, len=5)
actionsTable.fill(2797, 79772, 79777); // 'state 623' -> default..from -> reduce (target=118, len=5)
actionsTable.fill(2797, 79780, 79782); // 'state 623' -> type..export -> reduce (target=118, len=5)
actionsTable[79785] = 2797; // 'state 623' -> [ -> reduce (target=118, len=5)
actionsTable.fill(2797, 79787, 79789); // 'state 623' -> async..function -> reduce (target=118, len=5)
actionsTable.fill(2797, 79791, 79794); // 'state 623' -> get..class -> reduce (target=118, len=5)
actionsTable[79796] = 2797; // 'state 623' -> interface -> reduce (target=118, len=5)
actionsTable[79798] = 2797; // 'state 623' -> < -> reduce (target=118, len=5)
actionsTable.fill(2797, 79803, 79805); // 'state 623' -> void..typeof -> reduce (target=118, len=5)
actionsTable[79806] = 2797; // 'state 623' -> new -> reduce (target=118, len=5)
actionsTable.fill(2797, 79813, 79815); // 'state 623' -> +..- -> reduce (target=118, len=5)
actionsTable.fill(2797, 79816, 79820); // 'state 623' -> !..await -> reduce (target=118, len=5)
actionsTable[79822] = 2797; // 'state 623' -> identifier -> reduce (target=118, len=5)
actionsTable.fill(2797, 79824, 79827); // 'state 623' -> number..template_string -> reduce (target=118, len=5)
actionsTable.fill(2797, 79833, 79836); // 'state 623' -> update_operator..@par-gen.EOF -> reduce (target=118, len=5)
actionsTable.fill(2293, 79872, 79881); // 'state 624' -> true..( -> reduce (target=122, len=4)
actionsTable.fill(2293, 79882, 79891); // 'state 624' -> else..of -> reduce (target=122, len=4)
actionsTable.fill(2293, 79892, 79895); // 'state 624' -> return..try -> reduce (target=122, len=4)
actionsTable.fill(2293, 79897, 79899); // 'state 624' -> switch..case -> reduce (target=122, len=4)
actionsTable.fill(2293, 79900, 79905); // 'state 624' -> default..from -> reduce (target=122, len=4)
actionsTable.fill(2293, 79908, 79910); // 'state 624' -> type..export -> reduce (target=122, len=4)
actionsTable[79913] = 2293; // 'state 624' -> [ -> reduce (target=122, len=4)
actionsTable.fill(2293, 79915, 79917); // 'state 624' -> async..function -> reduce (target=122, len=4)
actionsTable.fill(2293, 79919, 79922); // 'state 624' -> get..class -> reduce (target=122, len=4)
actionsTable[79924] = 2293; // 'state 624' -> interface -> reduce (target=122, len=4)
actionsTable[79926] = 2293; // 'state 624' -> < -> reduce (target=122, len=4)
actionsTable.fill(2293, 79931, 79933); // 'state 624' -> void..typeof -> reduce (target=122, len=4)
actionsTable[79934] = 2293; // 'state 624' -> new -> reduce (target=122, len=4)
actionsTable.fill(2293, 79941, 79943); // 'state 624' -> +..- -> reduce (target=122, len=4)
actionsTable.fill(2293, 79944, 79948); // 'state 624' -> !..await -> reduce (target=122, len=4)
actionsTable[79950] = 2293; // 'state 624' -> identifier -> reduce (target=122, len=4)
actionsTable.fill(2293, 79952, 79955); // 'state 624' -> number..template_string -> reduce (target=122, len=4)
actionsTable.fill(2293, 79961, 79964); // 'state 624' -> update_operator..@par-gen.EOF -> reduce (target=122, len=4)
actionsTable[80006] = 1267; // 'state 625' -> } -> reduce (target=121, len=2)
actionsTable[80033] = 1267; // 'state 625' -> , -> reduce (target=121, len=2)
actionsTable[80206] = 1386; // 'state 626' -> identifier -> shift (target=693, len=0)
actionsTable[80262] = 1783; // 'state 627' -> } -> reduce (target=123, len=3)
actionsTable[80289] = 1783; // 'state 627' -> , -> reduce (target=123, len=3)
actionsTable.fill(2319, 80384, 80393); // 'state 628' -> true..( -> reduce (target=135, len=4)
actionsTable.fill(2319, 80394, 80397); // 'state 628' -> else..do -> reduce (target=135, len=4)
actionsTable.fill(2319, 80398, 80403); // 'state 628' -> for..of -> reduce (target=135, len=4)
actionsTable.fill(2319, 80404, 80407); // 'state 628' -> return..try -> reduce (target=135, len=4)
actionsTable.fill(2319, 80409, 80411); // 'state 628' -> switch..case -> reduce (target=135, len=4)
actionsTable.fill(2319, 80412, 80417); // 'state 628' -> default..from -> reduce (target=135, len=4)
actionsTable.fill(2319, 80420, 80422); // 'state 628' -> type..export -> reduce (target=135, len=4)
actionsTable[80425] = 2319; // 'state 628' -> [ -> reduce (target=135, len=4)
actionsTable.fill(2319, 80427, 80429); // 'state 628' -> async..function -> reduce (target=135, len=4)
actionsTable.fill(2319, 80431, 80434); // 'state 628' -> get..class -> reduce (target=135, len=4)
actionsTable[80436] = 2319; // 'state 628' -> interface -> reduce (target=135, len=4)
actionsTable[80438] = 2319; // 'state 628' -> < -> reduce (target=135, len=4)
actionsTable.fill(2319, 80443, 80445); // 'state 628' -> void..typeof -> reduce (target=135, len=4)
actionsTable[80446] = 2319; // 'state 628' -> new -> reduce (target=135, len=4)
actionsTable.fill(2319, 80453, 80455); // 'state 628' -> +..- -> reduce (target=135, len=4)
actionsTable.fill(2319, 80456, 80460); // 'state 628' -> !..await -> reduce (target=135, len=4)
actionsTable[80462] = 2319; // 'state 628' -> identifier -> reduce (target=135, len=4)
actionsTable.fill(2319, 80464, 80467); // 'state 628' -> number..template_string -> reduce (target=135, len=4)
actionsTable.fill(2319, 80473, 80476); // 'state 628' -> update_operator..@par-gen.EOF -> reduce (target=135, len=4)
actionsTable.fill(2335, 80512, 80521); // 'state 629' -> true..( -> reduce (target=143, len=4)
actionsTable.fill(2335, 80522, 80525); // 'state 629' -> else..do -> reduce (target=143, len=4)
actionsTable.fill(2335, 80526, 80531); // 'state 629' -> for..of -> reduce (target=143, len=4)
actionsTable.fill(2335, 80532, 80535); // 'state 629' -> return..try -> reduce (target=143, len=4)
actionsTable.fill(2335, 80537, 80539); // 'state 629' -> switch..case -> reduce (target=143, len=4)
actionsTable.fill(2335, 80540, 80545); // 'state 629' -> default..from -> reduce (target=143, len=4)
actionsTable.fill(2335, 80548, 80550); // 'state 629' -> type..export -> reduce (target=143, len=4)
actionsTable[80553] = 2335; // 'state 629' -> [ -> reduce (target=143, len=4)
actionsTable.fill(2335, 80555, 80557); // 'state 629' -> async..function -> reduce (target=143, len=4)
actionsTable.fill(2335, 80559, 80562); // 'state 629' -> get..class -> reduce (target=143, len=4)
actionsTable[80564] = 2335; // 'state 629' -> interface -> reduce (target=143, len=4)
actionsTable[80566] = 2335; // 'state 629' -> < -> reduce (target=143, len=4)
actionsTable.fill(2335, 80571, 80573); // 'state 629' -> void..typeof -> reduce (target=143, len=4)
actionsTable[80574] = 2335; // 'state 629' -> new -> reduce (target=143, len=4)
actionsTable.fill(2335, 80581, 80583); // 'state 629' -> +..- -> reduce (target=143, len=4)
actionsTable.fill(2335, 80584, 80588); // 'state 629' -> !..await -> reduce (target=143, len=4)
actionsTable[80590] = 2335; // 'state 629' -> identifier -> reduce (target=143, len=4)
actionsTable.fill(2335, 80592, 80595); // 'state 629' -> number..template_string -> reduce (target=143, len=4)
actionsTable.fill(2335, 80601, 80604); // 'state 629' -> update_operator..@par-gen.EOF -> reduce (target=143, len=4)
actionsTable.fill(2809, 80640, 80649); // 'state 630' -> true..( -> reduce (target=124, len=5)
actionsTable.fill(2809, 80650, 80653); // 'state 630' -> else..do -> reduce (target=124, len=5)
actionsTable.fill(2809, 80654, 80659); // 'state 630' -> for..of -> reduce (target=124, len=5)
actionsTable.fill(2809, 80660, 80663); // 'state 630' -> return..try -> reduce (target=124, len=5)
actionsTable.fill(2809, 80665, 80667); // 'state 630' -> switch..case -> reduce (target=124, len=5)
actionsTable.fill(2809, 80668, 80673); // 'state 630' -> default..from -> reduce (target=124, len=5)
actionsTable.fill(2809, 80676, 80678); // 'state 630' -> type..export -> reduce (target=124, len=5)
actionsTable[80681] = 2809; // 'state 630' -> [ -> reduce (target=124, len=5)
actionsTable.fill(2809, 80683, 80685); // 'state 630' -> async..function -> reduce (target=124, len=5)
actionsTable.fill(2809, 80687, 80690); // 'state 630' -> get..class -> reduce (target=124, len=5)
actionsTable[80692] = 2809; // 'state 630' -> interface -> reduce (target=124, len=5)
actionsTable[80694] = 2809; // 'state 630' -> < -> reduce (target=124, len=5)
actionsTable.fill(2809, 80699, 80701); // 'state 630' -> void..typeof -> reduce (target=124, len=5)
actionsTable[80702] = 2809; // 'state 630' -> new -> reduce (target=124, len=5)
actionsTable.fill(2809, 80709, 80711); // 'state 630' -> +..- -> reduce (target=124, len=5)
actionsTable.fill(2809, 80712, 80716); // 'state 630' -> !..await -> reduce (target=124, len=5)
actionsTable[80718] = 2809; // 'state 630' -> identifier -> reduce (target=124, len=5)
actionsTable.fill(2809, 80720, 80723); // 'state 630' -> number..template_string -> reduce (target=124, len=5)
actionsTable.fill(2809, 80729, 80732); // 'state 630' -> update_operator..@par-gen.EOF -> reduce (target=124, len=5)
actionsTable[80849] = 1392; // 'state 631' -> string -> shift (target=696, len=0)
actionsTable.fill(1787, 80896, 80905); // 'state 632' -> true..( -> reduce (target=125, len=3)
actionsTable.fill(1787, 80906, 80915); // 'state 632' -> else..of -> reduce (target=125, len=3)
actionsTable.fill(1787, 80916, 80919); // 'state 632' -> return..try -> reduce (target=125, len=3)
actionsTable.fill(1787, 80921, 80923); // 'state 632' -> switch..case -> reduce (target=125, len=3)
actionsTable.fill(1787, 80924, 80930); // 'state 632' -> default.., -> reduce (target=125, len=3)
actionsTable.fill(1787, 80932, 80934); // 'state 632' -> type..export -> reduce (target=125, len=3)
actionsTable[80937] = 1787; // 'state 632' -> [ -> reduce (target=125, len=3)
actionsTable.fill(1787, 80939, 80941); // 'state 632' -> async..function -> reduce (target=125, len=3)
actionsTable.fill(1787, 80943, 80946); // 'state 632' -> get..class -> reduce (target=125, len=3)
actionsTable[80948] = 1787; // 'state 632' -> interface -> reduce (target=125, len=3)
actionsTable[80950] = 1787; // 'state 632' -> < -> reduce (target=125, len=3)
actionsTable.fill(1787, 80955, 80957); // 'state 632' -> void..typeof -> reduce (target=125, len=3)
actionsTable[80958] = 1787; // 'state 632' -> new -> reduce (target=125, len=3)
actionsTable.fill(1787, 80965, 80967); // 'state 632' -> +..- -> reduce (target=125, len=3)
actionsTable.fill(1787, 80968, 80972); // 'state 632' -> !..await -> reduce (target=125, len=3)
actionsTable[80974] = 1787; // 'state 632' -> identifier -> reduce (target=125, len=3)
actionsTable.fill(1787, 80976, 80979); // 'state 632' -> number..template_string -> reduce (target=125, len=3)
actionsTable.fill(1787, 80985, 80988); // 'state 632' -> update_operator..@par-gen.EOF -> reduce (target=125, len=3)
actionsTable.fill(2309, 81024, 81047); // 'state 633' -> true..try -> reduce (target=130, len=4)
actionsTable.fill(2309, 81049, 81058); // 'state 633' -> switch.., -> reduce (target=130, len=4)
actionsTable.fill(2309, 81060, 81062); // 'state 633' -> type..export -> reduce (target=130, len=4)
actionsTable[81063] = 2309; // 'state 633' -> = -> reduce (target=130, len=4)
actionsTable.fill(2309, 81065, 81069); // 'state 633' -> [..function -> reduce (target=130, len=4)
actionsTable.fill(2309, 81071, 81074); // 'state 633' -> get..class -> reduce (target=130, len=4)
actionsTable.fill(2309, 81076, 81079); // 'state 633' -> interface..< -> reduce (target=130, len=4)
actionsTable.fill(2309, 81083, 81085); // 'state 633' -> void..typeof -> reduce (target=130, len=4)
actionsTable[81086] = 2309; // 'state 633' -> new -> reduce (target=130, len=4)
actionsTable.fill(2309, 81093, 81095); // 'state 633' -> +..- -> reduce (target=130, len=4)
actionsTable.fill(2309, 81096, 81100); // 'state 633' -> !..await -> reduce (target=130, len=4)
actionsTable[81102] = 2309; // 'state 633' -> identifier -> reduce (target=130, len=4)
actionsTable.fill(2309, 81104, 81107); // 'state 633' -> number..template_string -> reduce (target=130, len=4)
actionsTable.fill(2309, 81113, 81116); // 'state 633' -> update_operator..@par-gen.EOF -> reduce (target=130, len=4)
actionsTable[81158] = 1283; // 'state 634' -> } -> reduce (target=129, len=2)
actionsTable[81185] = 1283; // 'state 634' -> , -> reduce (target=129, len=2)
actionsTable[81286] = 1799; // 'state 635' -> } -> reduce (target=131, len=3)
actionsTable[81313] = 1799; // 'state 635' -> , -> reduce (target=131, len=3)
actionsTable[81319] = 716; // 'state 635' -> = -> shift (target=358, len=0)
actionsTable.fill(2315, 81408, 81431); // 'state 636' -> true..try -> reduce (target=133, len=4)
actionsTable.fill(2315, 81433, 81442); // 'state 636' -> switch.., -> reduce (target=133, len=4)
actionsTable.fill(2315, 81444, 81446); // 'state 636' -> type..export -> reduce (target=133, len=4)
actionsTable[81447] = 2315; // 'state 636' -> = -> reduce (target=133, len=4)
actionsTable.fill(2315, 81449, 81453); // 'state 636' -> [..function -> reduce (target=133, len=4)
actionsTable.fill(2315, 81455, 81458); // 'state 636' -> get..class -> reduce (target=133, len=4)
actionsTable.fill(2315, 81460, 81463); // 'state 636' -> interface..< -> reduce (target=133, len=4)
actionsTable.fill(2315, 81467, 81469); // 'state 636' -> void..typeof -> reduce (target=133, len=4)
actionsTable[81470] = 2315; // 'state 636' -> new -> reduce (target=133, len=4)
actionsTable.fill(2315, 81477, 81479); // 'state 636' -> +..- -> reduce (target=133, len=4)
actionsTable.fill(2315, 81480, 81484); // 'state 636' -> !..await -> reduce (target=133, len=4)
actionsTable[81486] = 2315; // 'state 636' -> identifier -> reduce (target=133, len=4)
actionsTable.fill(2315, 81488, 81491); // 'state 636' -> number..template_string -> reduce (target=133, len=4)
actionsTable.fill(2315, 81497, 81500); // 'state 636' -> update_operator..@par-gen.EOF -> reduce (target=133, len=4)
actionsTable[81569] = 620; // 'state 637' -> , -> shift (target=310, len=0)
actionsTable[81578] = 1398; // 'state 637' -> ] -> shift (target=699, len=0)
actionsTable[81697] = 1289; // 'state 638' -> , -> reduce (target=132, len=2)
actionsTable[81706] = 1289; // 'state 638' -> ] -> reduce (target=132, len=2)
actionsTable.fill(2831, 81792, 81801); // 'state 639' -> true..( -> reduce (target=135, len=5)
actionsTable.fill(2831, 81802, 81811); // 'state 639' -> else..of -> reduce (target=135, len=5)
actionsTable.fill(2831, 81812, 81815); // 'state 639' -> return..try -> reduce (target=135, len=5)
actionsTable.fill(2831, 81817, 81819); // 'state 639' -> switch..case -> reduce (target=135, len=5)
actionsTable.fill(2831, 81820, 81825); // 'state 639' -> default..from -> reduce (target=135, len=5)
actionsTable.fill(2831, 81828, 81830); // 'state 639' -> type..export -> reduce (target=135, len=5)
actionsTable[81833] = 2831; // 'state 639' -> [ -> reduce (target=135, len=5)
actionsTable.fill(2831, 81835, 81837); // 'state 639' -> async..function -> reduce (target=135, len=5)
actionsTable.fill(2831, 81839, 81842); // 'state 639' -> get..class -> reduce (target=135, len=5)
actionsTable[81844] = 2831; // 'state 639' -> interface -> reduce (target=135, len=5)
actionsTable[81846] = 2831; // 'state 639' -> < -> reduce (target=135, len=5)
actionsTable.fill(2831, 81851, 81853); // 'state 639' -> void..typeof -> reduce (target=135, len=5)
actionsTable[81854] = 2831; // 'state 639' -> new -> reduce (target=135, len=5)
actionsTable.fill(2831, 81861, 81863); // 'state 639' -> +..- -> reduce (target=135, len=5)
actionsTable.fill(2831, 81864, 81868); // 'state 639' -> !..await -> reduce (target=135, len=5)
actionsTable[81870] = 2831; // 'state 639' -> identifier -> reduce (target=135, len=5)
actionsTable.fill(2831, 81872, 81875); // 'state 639' -> number..template_string -> reduce (target=135, len=5)
actionsTable.fill(2831, 81881, 81884); // 'state 639' -> update_operator..@par-gen.EOF -> reduce (target=135, len=5)
actionsTable.fill(2831, 81920, 81929); // 'state 640' -> true..( -> reduce (target=135, len=5)
actionsTable.fill(2831, 81930, 81939); // 'state 640' -> else..of -> reduce (target=135, len=5)
actionsTable[81939] = 2979; // 'state 640' -> in -> reduce (target=209, len=5)
actionsTable.fill(2831, 81940, 81943); // 'state 640' -> return..try -> reduce (target=135, len=5)
actionsTable.fill(2831, 81945, 81947); // 'state 640' -> switch..case -> reduce (target=135, len=5)
actionsTable.fill(2831, 81948, 81953); // 'state 640' -> default..from -> reduce (target=135, len=5)
actionsTable.fill(2979, 81954, 81956); // 'state 640' -> *..as -> reduce (target=209, len=5)
actionsTable.fill(2831, 81956, 81958); // 'state 640' -> type..export -> reduce (target=135, len=5)
actionsTable[81961] = 2831; // 'state 640' -> [ -> reduce (target=135, len=5)
actionsTable.fill(2831, 81963, 81965); // 'state 640' -> async..function -> reduce (target=135, len=5)
actionsTable.fill(2831, 81967, 81970); // 'state 640' -> get..class -> reduce (target=135, len=5)
actionsTable[81972] = 2831; // 'state 640' -> interface -> reduce (target=135, len=5)
actionsTable[81974] = 2831; // 'state 640' -> < -> reduce (target=135, len=5)
actionsTable.fill(2979, 81975, 81978); // 'state 640' -> >..& -> reduce (target=209, len=5)
actionsTable.fill(2831, 81979, 81981); // 'state 640' -> void..typeof -> reduce (target=135, len=5)
actionsTable[81982] = 2831; // 'state 640' -> new -> reduce (target=135, len=5)
actionsTable.fill(2979, 81983, 81989); // 'state 640' -> ?..instanceof -> reduce (target=209, len=5)
actionsTable.fill(2831, 81989, 81991); // 'state 640' -> +..- -> reduce (target=135, len=5)
actionsTable[81991] = 2979; // 'state 640' -> ** -> reduce (target=209, len=5)
actionsTable.fill(2831, 81992, 81996); // 'state 640' -> !..await -> reduce (target=135, len=5)
actionsTable.fill(2979, 81996, 81998); // 'state 640' -> ?.... -> reduce (target=209, len=5)
actionsTable[81998] = 2831; // 'state 640' -> identifier -> reduce (target=135, len=5)
actionsTable.fill(2831, 82000, 82003); // 'state 640' -> number..template_string -> reduce (target=135, len=5)
actionsTable.fill(2979, 82005, 82009); // 'state 640' -> equality_operator..multiplicative_operator -> reduce (target=209, len=5)
actionsTable.fill(2831, 82009, 82012); // 'state 640' -> update_operator..@par-gen.EOF -> reduce (target=135, len=5)
actionsTable.fill(2979, 82048, 82071); // 'state 641' -> true..try -> reduce (target=209, len=5)
actionsTable.fill(2979, 82073, 82086); // 'state 641' -> switch..export -> reduce (target=209, len=5)
actionsTable.fill(2979, 82089, 82098); // 'state 641' -> [..class -> reduce (target=209, len=5)
actionsTable.fill(2979, 82099, 82101); // 'state 641' -> implements..interface -> reduce (target=209, len=5)
actionsTable.fill(2979, 82102, 82106); // 'state 641' -> <..& -> reduce (target=209, len=5)
actionsTable.fill(2979, 82107, 82109); // 'state 641' -> void..typeof -> reduce (target=209, len=5)
actionsTable.fill(2979, 82110, 82132); // 'state 641' -> new..accessibility_modifier -> reduce (target=209, len=5)
actionsTable.fill(2979, 82133, 82140); // 'state 641' -> equality_operator..@par-gen.EOF -> reduce (target=209, len=5)
actionsTable.fill(2931, 82176, 82199); // 'state 642' -> true..try -> reduce (target=185, len=5)
actionsTable.fill(2931, 82201, 82214); // 'state 642' -> switch..export -> reduce (target=185, len=5)
actionsTable.fill(2931, 82217, 82226); // 'state 642' -> [..class -> reduce (target=185, len=5)
actionsTable.fill(2931, 82227, 82229); // 'state 642' -> implements..interface -> reduce (target=185, len=5)
actionsTable.fill(2931, 82230, 82234); // 'state 642' -> <..& -> reduce (target=185, len=5)
actionsTable.fill(2931, 82235, 82237); // 'state 642' -> void..typeof -> reduce (target=185, len=5)
actionsTable.fill(2931, 82238, 82260); // 'state 642' -> new..accessibility_modifier -> reduce (target=185, len=5)
actionsTable.fill(2931, 82261, 82268); // 'state 642' -> equality_operator..@par-gen.EOF -> reduce (target=185, len=5)
actionsTable.fill(2319, 82304, 82313); // 'state 643' -> true..( -> reduce (target=135, len=4)
actionsTable.fill(2319, 82315, 82317); // 'state 643' -> while..do -> reduce (target=135, len=4)
actionsTable[82317] = 2467; // 'state 643' -> ; -> reduce (target=209, len=4)
actionsTable.fill(2319, 82318, 82323); // 'state 643' -> for..of -> reduce (target=135, len=4)
actionsTable[82323] = 2467; // 'state 643' -> in -> reduce (target=209, len=4)
actionsTable.fill(2319, 82324, 82327); // 'state 643' -> return..try -> reduce (target=135, len=4)
actionsTable[82329] = 2319; // 'state 643' -> switch -> reduce (target=135, len=4)
actionsTable.fill(2319, 82333, 82337); // 'state 643' -> break..from -> reduce (target=135, len=4)
actionsTable.fill(2467, 82338, 82340); // 'state 643' -> *..as -> reduce (target=209, len=4)
actionsTable.fill(2319, 82340, 82342); // 'state 643' -> type..export -> reduce (target=135, len=4)
actionsTable[82345] = 2319; // 'state 643' -> [ -> reduce (target=135, len=4)
actionsTable.fill(2319, 82347, 82349); // 'state 643' -> async..function -> reduce (target=135, len=4)
actionsTable.fill(2319, 82351, 82354); // 'state 643' -> get..class -> reduce (target=135, len=4)
actionsTable[82356] = 2319; // 'state 643' -> interface -> reduce (target=135, len=4)
actionsTable[82358] = 2319; // 'state 643' -> < -> reduce (target=135, len=4)
actionsTable.fill(2467, 82359, 82362); // 'state 643' -> >..& -> reduce (target=209, len=4)
actionsTable.fill(2319, 82363, 82365); // 'state 643' -> void..typeof -> reduce (target=135, len=4)
actionsTable[82366] = 2319; // 'state 643' -> new -> reduce (target=135, len=4)
actionsTable.fill(2467, 82367, 82373); // 'state 643' -> ?..instanceof -> reduce (target=209, len=4)
actionsTable.fill(2319, 82373, 82375); // 'state 643' -> +..- -> reduce (target=135, len=4)
actionsTable[82375] = 2467; // 'state 643' -> ** -> reduce (target=209, len=4)
actionsTable.fill(2319, 82376, 82380); // 'state 643' -> !..await -> reduce (target=135, len=4)
actionsTable.fill(2467, 82380, 82382); // 'state 643' -> ?.... -> reduce (target=209, len=4)
actionsTable[82382] = 2319; // 'state 643' -> identifier -> reduce (target=135, len=4)
actionsTable.fill(2319, 82384, 82387); // 'state 643' -> number..template_string -> reduce (target=135, len=4)
actionsTable.fill(2467, 82389, 82393); // 'state 643' -> equality_operator..multiplicative_operator -> reduce (target=209, len=4)
actionsTable.fill(2319, 82393, 82396); // 'state 643' -> update_operator..@par-gen.EOF -> reduce (target=135, len=4)
actionsTable.fill(2323, 82437, 82439); // 'state 644' -> {..} -> reduce (target=137, len=4)
actionsTable[82445] = 2323; // 'state 644' -> ; -> reduce (target=137, len=4)
actionsTable[82450] = 2323; // 'state 644' -> of -> reduce (target=137, len=4)
actionsTable[82459] = 2323; // 'state 644' -> : -> reduce (target=137, len=4)
actionsTable.fill(2323, 82464, 82466); // 'state 644' -> from.., -> reduce (target=137, len=4)
actionsTable[82468] = 2323; // 'state 644' -> type -> reduce (target=137, len=4)
actionsTable[82473] = 2323; // 'state 644' -> [ -> reduce (target=137, len=4)
actionsTable[82475] = 2323; // 'state 644' -> async -> reduce (target=137, len=4)
actionsTable.fill(2323, 82478, 82481); // 'state 644' -> readonly..set -> reduce (target=137, len=4)
actionsTable[82485] = 2323; // 'state 644' -> ?: -> reduce (target=137, len=4)
actionsTable[82490] = 2323; // 'state 644' -> => -> reduce (target=137, len=4)
actionsTable[82494] = 2323; // 'state 644' -> new -> reduce (target=137, len=4)
actionsTable[82510] = 2323; // 'state 644' -> identifier -> reduce (target=137, len=4)
actionsTable.fill(2323, 82512, 82514); // 'state 644' -> number..string -> reduce (target=137, len=4)
actionsTable[82569] = 1297; // 'state 645' -> ) -> reduce (target=136, len=2)
actionsTable[82593] = 1297; // 'state 645' -> , -> reduce (target=136, len=2)
actionsTable[82697] = 1813; // 'state 646' -> ) -> reduce (target=138, len=3)
actionsTable[82721] = 1813; // 'state 646' -> , -> reduce (target=138, len=3)
actionsTable[82727] = 722; // 'state 646' -> = -> shift (target=361, len=0)
actionsTable[82825] = 1813; // 'state 647' -> ) -> reduce (target=138, len=3)
actionsTable[82849] = 1813; // 'state 647' -> , -> reduce (target=138, len=3)
actionsTable.fill(2847, 82944, 82953); // 'state 648' -> true..( -> reduce (target=143, len=5)
actionsTable.fill(2847, 82954, 82963); // 'state 648' -> else..of -> reduce (target=143, len=5)
actionsTable[82963] = 2981; // 'state 648' -> in -> reduce (target=210, len=5)
actionsTable.fill(2847, 82964, 82967); // 'state 648' -> return..try -> reduce (target=143, len=5)
actionsTable.fill(2847, 82969, 82971); // 'state 648' -> switch..case -> reduce (target=143, len=5)
actionsTable.fill(2847, 82972, 82977); // 'state 648' -> default..from -> reduce (target=143, len=5)
actionsTable.fill(2981, 82978, 82980); // 'state 648' -> *..as -> reduce (target=210, len=5)
actionsTable.fill(2847, 82980, 82982); // 'state 648' -> type..export -> reduce (target=143, len=5)
actionsTable[82985] = 2847; // 'state 648' -> [ -> reduce (target=143, len=5)
actionsTable.fill(2847, 82987, 82989); // 'state 648' -> async..function -> reduce (target=143, len=5)
actionsTable.fill(2847, 82991, 82994); // 'state 648' -> get..class -> reduce (target=143, len=5)
actionsTable[82996] = 2847; // 'state 648' -> interface -> reduce (target=143, len=5)
actionsTable[82998] = 2847; // 'state 648' -> < -> reduce (target=143, len=5)
actionsTable.fill(2981, 82999, 83002); // 'state 648' -> >..& -> reduce (target=210, len=5)
actionsTable.fill(2847, 83003, 83005); // 'state 648' -> void..typeof -> reduce (target=143, len=5)
actionsTable[83006] = 2847; // 'state 648' -> new -> reduce (target=143, len=5)
actionsTable.fill(2981, 83007, 83013); // 'state 648' -> ?..instanceof -> reduce (target=210, len=5)
actionsTable.fill(2847, 83013, 83015); // 'state 648' -> +..- -> reduce (target=143, len=5)
actionsTable[83015] = 2981; // 'state 648' -> ** -> reduce (target=210, len=5)
actionsTable.fill(2847, 83016, 83020); // 'state 648' -> !..await -> reduce (target=143, len=5)
actionsTable.fill(2981, 83020, 83022); // 'state 648' -> ?.... -> reduce (target=210, len=5)
actionsTable[83022] = 2847; // 'state 648' -> identifier -> reduce (target=143, len=5)
actionsTable.fill(2847, 83024, 83027); // 'state 648' -> number..template_string -> reduce (target=143, len=5)
actionsTable.fill(2981, 83029, 83033); // 'state 648' -> equality_operator..multiplicative_operator -> reduce (target=210, len=5)
actionsTable.fill(2847, 83033, 83036); // 'state 648' -> update_operator..@par-gen.EOF -> reduce (target=143, len=5)
actionsTable.fill(2335, 83072, 83081); // 'state 649' -> true..( -> reduce (target=143, len=4)
actionsTable.fill(2335, 83083, 83085); // 'state 649' -> while..do -> reduce (target=143, len=4)
actionsTable[83085] = 2469; // 'state 649' -> ; -> reduce (target=210, len=4)
actionsTable.fill(2335, 83086, 83091); // 'state 649' -> for..of -> reduce (target=143, len=4)
actionsTable[83091] = 2469; // 'state 649' -> in -> reduce (target=210, len=4)
actionsTable.fill(2335, 83092, 83095); // 'state 649' -> return..try -> reduce (target=143, len=4)
actionsTable[83097] = 2335; // 'state 649' -> switch -> reduce (target=143, len=4)
actionsTable.fill(2335, 83101, 83105); // 'state 649' -> break..from -> reduce (target=143, len=4)
actionsTable.fill(2469, 83106, 83108); // 'state 649' -> *..as -> reduce (target=210, len=4)
actionsTable.fill(2335, 83108, 83110); // 'state 649' -> type..export -> reduce (target=143, len=4)
actionsTable[83113] = 2335; // 'state 649' -> [ -> reduce (target=143, len=4)
actionsTable.fill(2335, 83115, 83117); // 'state 649' -> async..function -> reduce (target=143, len=4)
actionsTable.fill(2335, 83119, 83122); // 'state 649' -> get..class -> reduce (target=143, len=4)
actionsTable[83124] = 2335; // 'state 649' -> interface -> reduce (target=143, len=4)
actionsTable[83126] = 2335; // 'state 649' -> < -> reduce (target=143, len=4)
actionsTable.fill(2469, 83127, 83130); // 'state 649' -> >..& -> reduce (target=210, len=4)
actionsTable.fill(2335, 83131, 83133); // 'state 649' -> void..typeof -> reduce (target=143, len=4)
actionsTable[83134] = 2335; // 'state 649' -> new -> reduce (target=143, len=4)
actionsTable.fill(2469, 83135, 83141); // 'state 649' -> ?..instanceof -> reduce (target=210, len=4)
actionsTable.fill(2335, 83141, 83143); // 'state 649' -> +..- -> reduce (target=143, len=4)
actionsTable[83143] = 2469; // 'state 649' -> ** -> reduce (target=210, len=4)
actionsTable.fill(2335, 83144, 83148); // 'state 649' -> !..await -> reduce (target=143, len=4)
actionsTable.fill(2469, 83148, 83150); // 'state 649' -> ?.... -> reduce (target=210, len=4)
actionsTable[83150] = 2335; // 'state 649' -> identifier -> reduce (target=143, len=4)
actionsTable.fill(2335, 83152, 83155); // 'state 649' -> number..template_string -> reduce (target=143, len=4)
actionsTable.fill(2469, 83157, 83161); // 'state 649' -> equality_operator..multiplicative_operator -> reduce (target=210, len=4)
actionsTable.fill(2335, 83161, 83164); // 'state 649' -> update_operator..@par-gen.EOF -> reduce (target=143, len=4)
actionsTable[83205] = 1315; // 'state 650' -> { -> reduce (target=145, len=2)
actionsTable[83233] = 1315; // 'state 650' -> , -> reduce (target=145, len=2)
actionsTable[83242] = 1315; // 'state 650' -> ] -> reduce (target=145, len=2)
actionsTable[83255] = 1315; // 'state 650' -> > -> reduce (target=145, len=2)
actionsTable[83256] = 506; // 'state 650' -> | -> shift (target=253, len=0)
actionsTable[83257] = 508; // 'state 650' -> & -> shift (target=254, len=0)
actionsTable[83334] = 1837; // 'state 651' -> } -> reduce (target=150, len=3)
actionsTable[83341] = 1837; // 'state 651' -> ; -> reduce (target=150, len=3)
actionsTable[83346] = 1837; // 'state 651' -> of -> reduce (target=150, len=3)
actionsTable[83360] = 1837; // 'state 651' -> from -> reduce (target=150, len=3)
actionsTable[83364] = 1837; // 'state 651' -> type -> reduce (target=150, len=3)
actionsTable[83369] = 1837; // 'state 651' -> [ -> reduce (target=150, len=3)
actionsTable[83371] = 1837; // 'state 651' -> async -> reduce (target=150, len=3)
actionsTable.fill(1837, 83373, 83377); // 'state 651' -> static..set -> reduce (target=150, len=3)
actionsTable.fill(1837, 83406, 83410); // 'state 651' -> identifier..string -> reduce (target=150, len=3)
actionsTable[83411] = 1837; // 'state 651' -> accessibility_modifier -> reduce (target=150, len=3)
actionsTable[83462] = 1837; // 'state 652' -> } -> reduce (target=150, len=3)
actionsTable[83469] = 1422; // 'state 652' -> ; -> shift (target=711, len=0)
actionsTable[83474] = 1837; // 'state 652' -> of -> reduce (target=150, len=3)
actionsTable[83488] = 1837; // 'state 652' -> from -> reduce (target=150, len=3)
actionsTable[83492] = 1837; // 'state 652' -> type -> reduce (target=150, len=3)
actionsTable[83495] = 730; // 'state 652' -> = -> shift (target=365, len=0)
actionsTable[83497] = 1837; // 'state 652' -> [ -> reduce (target=150, len=3)
actionsTable[83499] = 1837; // 'state 652' -> async -> reduce (target=150, len=3)
actionsTable.fill(1837, 83501, 83505); // 'state 652' -> static..set -> reduce (target=150, len=3)
actionsTable.fill(1837, 83534, 83538); // 'state 652' -> identifier..string -> reduce (target=150, len=3)
actionsTable[83539] = 1837; // 'state 652' -> accessibility_modifier -> reduce (target=150, len=3)
actionsTable[83590] = 1835; // 'state 653' -> } -> reduce (target=149, len=3)
actionsTable[83597] = 1835; // 'state 653' -> ; -> reduce (target=149, len=3)
actionsTable[83602] = 1835; // 'state 653' -> of -> reduce (target=149, len=3)
actionsTable[83616] = 1835; // 'state 653' -> from -> reduce (target=149, len=3)
actionsTable[83620] = 1835; // 'state 653' -> type -> reduce (target=149, len=3)
actionsTable[83625] = 1835; // 'state 653' -> [ -> reduce (target=149, len=3)
actionsTable[83627] = 1835; // 'state 653' -> async -> reduce (target=149, len=3)
actionsTable.fill(1835, 83629, 83633); // 'state 653' -> static..set -> reduce (target=149, len=3)
actionsTable.fill(1835, 83662, 83666); // 'state 653' -> identifier..string -> reduce (target=149, len=3)
actionsTable[83667] = 1835; // 'state 653' -> accessibility_modifier -> reduce (target=149, len=3)
actionsTable.fill(2863, 83712, 83721); // 'state 654' -> true..( -> reduce (target=151, len=5)
actionsTable.fill(2863, 83722, 83725); // 'state 654' -> else..do -> reduce (target=151, len=5)
actionsTable.fill(2863, 83726, 83731); // 'state 654' -> for..of -> reduce (target=151, len=5)
actionsTable.fill(2863, 83732, 83735); // 'state 654' -> return..try -> reduce (target=151, len=5)
actionsTable.fill(2863, 83737, 83739); // 'state 654' -> switch..case -> reduce (target=151, len=5)
actionsTable.fill(2863, 83740, 83745); // 'state 654' -> default..from -> reduce (target=151, len=5)
actionsTable.fill(2863, 83748, 83750); // 'state 654' -> type..export -> reduce (target=151, len=5)
actionsTable[83753] = 2863; // 'state 654' -> [ -> reduce (target=151, len=5)
actionsTable.fill(2863, 83755, 83757); // 'state 654' -> async..function -> reduce (target=151, len=5)
actionsTable.fill(2863, 83759, 83762); // 'state 654' -> get..class -> reduce (target=151, len=5)
actionsTable[83764] = 2863; // 'state 654' -> interface -> reduce (target=151, len=5)
actionsTable[83766] = 2863; // 'state 654' -> < -> reduce (target=151, len=5)
actionsTable.fill(2863, 83771, 83773); // 'state 654' -> void..typeof -> reduce (target=151, len=5)
actionsTable[83774] = 2863; // 'state 654' -> new -> reduce (target=151, len=5)
actionsTable.fill(2863, 83781, 83783); // 'state 654' -> +..- -> reduce (target=151, len=5)
actionsTable.fill(2863, 83784, 83788); // 'state 654' -> !..await -> reduce (target=151, len=5)
actionsTable[83790] = 2863; // 'state 654' -> identifier -> reduce (target=151, len=5)
actionsTable.fill(2863, 83792, 83795); // 'state 654' -> number..template_string -> reduce (target=151, len=5)
actionsTable.fill(2863, 83801, 83804); // 'state 654' -> update_operator..@par-gen.EOF -> reduce (target=151, len=5)
actionsTable[83845] = 1841; // 'state 655' -> { -> reduce (target=152, len=3)
actionsTable[83873] = 640; // 'state 655' -> , -> shift (target=320, len=0)
actionsTable.fill(2867, 83968, 83977); // 'state 656' -> true..( -> reduce (target=153, len=5)
actionsTable.fill(2867, 83978, 83981); // 'state 656' -> else..do -> reduce (target=153, len=5)
actionsTable[83981] = 1424; // 'state 656' -> ; -> shift (target=712, len=0)
actionsTable.fill(2867, 83982, 83987); // 'state 656' -> for..of -> reduce (target=153, len=5)
actionsTable.fill(2867, 83988, 83991); // 'state 656' -> return..try -> reduce (target=153, len=5)
actionsTable.fill(2867, 83993, 83995); // 'state 656' -> switch..case -> reduce (target=153, len=5)
actionsTable.fill(2867, 83996, 84001); // 'state 656' -> default..from -> reduce (target=153, len=5)
actionsTable.fill(2867, 84004, 84006); // 'state 656' -> type..export -> reduce (target=153, len=5)
actionsTable[84009] = 2867; // 'state 656' -> [ -> reduce (target=153, len=5)
actionsTable.fill(2867, 84011, 84013); // 'state 656' -> async..function -> reduce (target=153, len=5)
actionsTable.fill(2867, 84015, 84018); // 'state 656' -> get..class -> reduce (target=153, len=5)
actionsTable[84020] = 2867; // 'state 656' -> interface -> reduce (target=153, len=5)
actionsTable[84022] = 2867; // 'state 656' -> < -> reduce (target=153, len=5)
actionsTable[84024] = 506; // 'state 656' -> | -> shift (target=253, len=0)
actionsTable[84025] = 508; // 'state 656' -> & -> shift (target=254, len=0)
actionsTable.fill(2867, 84027, 84029); // 'state 656' -> void..typeof -> reduce (target=153, len=5)
actionsTable[84030] = 2867; // 'state 656' -> new -> reduce (target=153, len=5)
actionsTable.fill(2867, 84037, 84039); // 'state 656' -> +..- -> reduce (target=153, len=5)
actionsTable.fill(2867, 84040, 84044); // 'state 656' -> !..await -> reduce (target=153, len=5)
actionsTable[84046] = 2867; // 'state 656' -> identifier -> reduce (target=153, len=5)
actionsTable.fill(2867, 84048, 84051); // 'state 656' -> number..template_string -> reduce (target=153, len=5)
actionsTable.fill(2867, 84057, 84060); // 'state 656' -> update_operator..@par-gen.EOF -> reduce (target=153, len=5)
actionsTable.fill(2867, 84096, 84105); // 'state 657' -> true..( -> reduce (target=153, len=5)
actionsTable.fill(2867, 84106, 84109); // 'state 657' -> else..do -> reduce (target=153, len=5)
actionsTable.fill(2867, 84110, 84115); // 'state 657' -> for..of -> reduce (target=153, len=5)
actionsTable.fill(2867, 84116, 84119); // 'state 657' -> return..try -> reduce (target=153, len=5)
actionsTable.fill(2867, 84121, 84123); // 'state 657' -> switch..case -> reduce (target=153, len=5)
actionsTable.fill(2867, 84124, 84129); // 'state 657' -> default..from -> reduce (target=153, len=5)
actionsTable.fill(2867, 84132, 84134); // 'state 657' -> type..export -> reduce (target=153, len=5)
actionsTable[84137] = 2867; // 'state 657' -> [ -> reduce (target=153, len=5)
actionsTable.fill(2867, 84139, 84141); // 'state 657' -> async..function -> reduce (target=153, len=5)
actionsTable.fill(2867, 84143, 84146); // 'state 657' -> get..class -> reduce (target=153, len=5)
actionsTable[84148] = 2867; // 'state 657' -> interface -> reduce (target=153, len=5)
actionsTable[84150] = 2867; // 'state 657' -> < -> reduce (target=153, len=5)
actionsTable.fill(2867, 84155, 84157); // 'state 657' -> void..typeof -> reduce (target=153, len=5)
actionsTable[84158] = 2867; // 'state 657' -> new -> reduce (target=153, len=5)
actionsTable.fill(2867, 84165, 84167); // 'state 657' -> +..- -> reduce (target=153, len=5)
actionsTable.fill(2867, 84168, 84172); // 'state 657' -> !..await -> reduce (target=153, len=5)
actionsTable[84174] = 2867; // 'state 657' -> identifier -> reduce (target=153, len=5)
actionsTable.fill(2867, 84176, 84179); // 'state 657' -> number..template_string -> reduce (target=153, len=5)
actionsTable.fill(2867, 84185, 84188); // 'state 657' -> update_operator..@par-gen.EOF -> reduce (target=153, len=5)
actionsTable.fill(2923, 84224, 84247); // 'state 658' -> true..try -> reduce (target=181, len=5)
actionsTable.fill(2923, 84249, 84262); // 'state 658' -> switch..export -> reduce (target=181, len=5)
actionsTable.fill(2923, 84265, 84274); // 'state 658' -> [..class -> reduce (target=181, len=5)
actionsTable.fill(2923, 84275, 84285); // 'state 658' -> implements..typeof -> reduce (target=181, len=5)
actionsTable.fill(2923, 84286, 84308); // 'state 658' -> new..accessibility_modifier -> reduce (target=181, len=5)
actionsTable.fill(2923, 84309, 84316); // 'state 658' -> equality_operator..@par-gen.EOF -> reduce (target=181, len=5)
actionsTable[84361] = 1897; // 'state 659' -> ) -> reduce (target=180, len=3)
actionsTable[84385] = 1897; // 'state 659' -> , -> reduce (target=180, len=3)
actionsTable[84507] = 2841; // 'state 660' -> : -> reduce (target=140, len=5)
actionsTable[84533] = 2841; // 'state 660' -> ?: -> reduce (target=140, len=5)
actionsTable[84538] = 2841; // 'state 660' -> => -> reduce (target=140, len=5)
actionsTable[84617] = 1815; // 'state 661' -> ) -> reduce (target=139, len=3)
actionsTable[84641] = 1815; // 'state 661' -> , -> reduce (target=139, len=3)
actionsTable.fill(1853, 84736, 84759); // 'state 662' -> true..try -> reduce (target=158, len=3)
actionsTable.fill(1853, 84761, 84774); // 'state 662' -> switch..export -> reduce (target=158, len=3)
actionsTable[84775] = 1853; // 'state 662' -> = -> reduce (target=158, len=3)
actionsTable.fill(1853, 84777, 84786); // 'state 662' -> [..class -> reduce (target=158, len=3)
actionsTable.fill(1853, 84787, 84789); // 'state 662' -> implements..interface -> reduce (target=158, len=3)
actionsTable.fill(1853, 84790, 84797); // 'state 662' -> <..typeof -> reduce (target=158, len=3)
actionsTable.fill(1853, 84798, 84820); // 'state 662' -> new..accessibility_modifier -> reduce (target=158, len=3)
actionsTable.fill(1853, 84821, 84828); // 'state 662' -> equality_operator..@par-gen.EOF -> reduce (target=158, len=3)
actionsTable[84897] = 736; // 'state 663' -> , -> shift (target=368, len=0)
actionsTable[84919] = 1426; // 'state 663' -> > -> shift (target=713, len=0)
actionsTable.fill(2961, 84992, 85015); // 'state 664' -> true..try -> reduce (target=200, len=5)
actionsTable.fill(2961, 85017, 85030); // 'state 664' -> switch..export -> reduce (target=200, len=5)
actionsTable[85031] = 2961; // 'state 664' -> = -> reduce (target=200, len=5)
actionsTable.fill(2961, 85033, 85042); // 'state 664' -> [..class -> reduce (target=200, len=5)
actionsTable.fill(2961, 85043, 85050); // 'state 664' -> implements..& -> reduce (target=200, len=5)
actionsTable.fill(2961, 85051, 85053); // 'state 664' -> void..typeof -> reduce (target=200, len=5)
actionsTable.fill(2961, 85054, 85084); // 'state 664' -> new..@par-gen.EOF -> reduce (target=200, len=5)
actionsTable[85153] = 1935; // 'state 665' -> , -> reduce (target=199, len=3)
actionsTable[85162] = 1935; // 'state 665' -> ] -> reduce (target=199, len=3)
actionsTable[85253] = 2873; // 'state 666' -> { -> reduce (target=156, len=5)
actionsTable[85256] = 2873; // 'state 666' -> ( -> reduce (target=156, len=5)
actionsTable[85287] = 2873; // 'state 666' -> = -> reduce (target=156, len=5)
actionsTable.fill(2873, 85298, 85300); // 'state 666' -> extends..implements -> reduce (target=156, len=5)
actionsTable[85409] = 1847; // 'state 667' -> , -> reduce (target=155, len=3)
actionsTable[85431] = 1847; // 'state 667' -> > -> reduce (target=155, len=3)
actionsTable[85510] = 2969; // 'state 668' -> } -> reduce (target=204, len=5)
actionsTable[85537] = 2969; // 'state 668' -> , -> reduce (target=204, len=5)
actionsTable.fill(3275, 85632, 85641); // 'state 669' -> true..( -> reduce (target=101, len=6)
actionsTable.fill(3275, 85642, 85645); // 'state 669' -> else..do -> reduce (target=101, len=6)
actionsTable[85645] = 1434; // 'state 669' -> ; -> shift (target=717, len=0)
actionsTable.fill(3275, 85646, 85651); // 'state 669' -> for..of -> reduce (target=101, len=6)
actionsTable.fill(3275, 85652, 85655); // 'state 669' -> return..try -> reduce (target=101, len=6)
actionsTable.fill(3275, 85657, 85659); // 'state 669' -> switch..case -> reduce (target=101, len=6)
actionsTable.fill(3275, 85660, 85665); // 'state 669' -> default..from -> reduce (target=101, len=6)
actionsTable.fill(3275, 85668, 85670); // 'state 669' -> type..export -> reduce (target=101, len=6)
actionsTable[85673] = 3275; // 'state 669' -> [ -> reduce (target=101, len=6)
actionsTable.fill(3275, 85675, 85677); // 'state 669' -> async..function -> reduce (target=101, len=6)
actionsTable.fill(3275, 85679, 85682); // 'state 669' -> get..class -> reduce (target=101, len=6)
actionsTable[85684] = 3275; // 'state 669' -> interface -> reduce (target=101, len=6)
actionsTable[85686] = 3275; // 'state 669' -> < -> reduce (target=101, len=6)
actionsTable.fill(3275, 85691, 85693); // 'state 669' -> void..typeof -> reduce (target=101, len=6)
actionsTable[85694] = 3275; // 'state 669' -> new -> reduce (target=101, len=6)
actionsTable.fill(3275, 85701, 85703); // 'state 669' -> +..- -> reduce (target=101, len=6)
actionsTable.fill(3275, 85704, 85708); // 'state 669' -> !..await -> reduce (target=101, len=6)
actionsTable[85710] = 3275; // 'state 669' -> identifier -> reduce (target=101, len=6)
actionsTable.fill(3275, 85712, 85715); // 'state 669' -> number..template_string -> reduce (target=101, len=6)
actionsTable.fill(3275, 85721, 85724); // 'state 669' -> update_operator..@par-gen.EOF -> reduce (target=101, len=6)
actionsTable.fill(3277, 85760, 85769); // 'state 670' -> true..( -> reduce (target=102, len=6)
actionsTable.fill(3277, 85770, 85773); // 'state 670' -> else..do -> reduce (target=102, len=6)
actionsTable.fill(3277, 85774, 85779); // 'state 670' -> for..of -> reduce (target=102, len=6)
actionsTable.fill(3277, 85780, 85783); // 'state 670' -> return..try -> reduce (target=102, len=6)
actionsTable.fill(3277, 85785, 85787); // 'state 670' -> switch..case -> reduce (target=102, len=6)
actionsTable.fill(3277, 85788, 85793); // 'state 670' -> default..from -> reduce (target=102, len=6)
actionsTable.fill(3277, 85796, 85798); // 'state 670' -> type..export -> reduce (target=102, len=6)
actionsTable[85801] = 3277; // 'state 670' -> [ -> reduce (target=102, len=6)
actionsTable.fill(3277, 85803, 85805); // 'state 670' -> async..function -> reduce (target=102, len=6)
actionsTable.fill(3277, 85807, 85810); // 'state 670' -> get..class -> reduce (target=102, len=6)
actionsTable[85812] = 3277; // 'state 670' -> interface -> reduce (target=102, len=6)
actionsTable[85814] = 3277; // 'state 670' -> < -> reduce (target=102, len=6)
actionsTable.fill(3277, 85819, 85821); // 'state 670' -> void..typeof -> reduce (target=102, len=6)
actionsTable[85822] = 3277; // 'state 670' -> new -> reduce (target=102, len=6)
actionsTable.fill(3277, 85829, 85831); // 'state 670' -> +..- -> reduce (target=102, len=6)
actionsTable.fill(3277, 85832, 85836); // 'state 670' -> !..await -> reduce (target=102, len=6)
actionsTable[85838] = 3277; // 'state 670' -> identifier -> reduce (target=102, len=6)
actionsTable.fill(3277, 85840, 85843); // 'state 670' -> number..template_string -> reduce (target=102, len=6)
actionsTable.fill(3277, 85849, 85852); // 'state 670' -> update_operator..@par-gen.EOF -> reduce (target=102, len=6)
actionsTable.fill(2981, 85888, 85911); // 'state 671' -> true..try -> reduce (target=210, len=5)
actionsTable.fill(2981, 85913, 85926); // 'state 671' -> switch..export -> reduce (target=210, len=5)
actionsTable.fill(2981, 85929, 85938); // 'state 671' -> [..class -> reduce (target=210, len=5)
actionsTable.fill(2981, 85939, 85941); // 'state 671' -> implements..interface -> reduce (target=210, len=5)
actionsTable.fill(2981, 85942, 85946); // 'state 671' -> <..& -> reduce (target=210, len=5)
actionsTable.fill(2981, 85947, 85949); // 'state 671' -> void..typeof -> reduce (target=210, len=5)
actionsTable.fill(2981, 85950, 85972); // 'state 671' -> new..accessibility_modifier -> reduce (target=210, len=5)
actionsTable.fill(2981, 85973, 85980); // 'state 671' -> equality_operator..@par-gen.EOF -> reduce (target=210, len=5)
actionsTable[86025] = 746; // 'state 672' -> ) -> shift (target=373, len=0)
actionsTable.fill(1247, 86144, 86153); // 'state 673' -> true..( -> reduce (target=111, len=2)
actionsTable.fill(1247, 86154, 86157); // 'state 673' -> else..do -> reduce (target=111, len=2)
actionsTable.fill(1247, 86158, 86163); // 'state 673' -> for..of -> reduce (target=111, len=2)
actionsTable.fill(1247, 86164, 86167); // 'state 673' -> return..try -> reduce (target=111, len=2)
actionsTable.fill(1247, 86169, 86171); // 'state 673' -> switch..case -> reduce (target=111, len=2)
actionsTable.fill(1247, 86172, 86177); // 'state 673' -> default..from -> reduce (target=111, len=2)
actionsTable.fill(1247, 86180, 86182); // 'state 673' -> type..export -> reduce (target=111, len=2)
actionsTable[86185] = 1247; // 'state 673' -> [ -> reduce (target=111, len=2)
actionsTable.fill(1247, 86187, 86189); // 'state 673' -> async..function -> reduce (target=111, len=2)
actionsTable.fill(1247, 86191, 86194); // 'state 673' -> get..class -> reduce (target=111, len=2)
actionsTable[86196] = 1247; // 'state 673' -> interface -> reduce (target=111, len=2)
actionsTable[86198] = 1247; // 'state 673' -> < -> reduce (target=111, len=2)
actionsTable.fill(1247, 86203, 86205); // 'state 673' -> void..typeof -> reduce (target=111, len=2)
actionsTable[86206] = 1247; // 'state 673' -> new -> reduce (target=111, len=2)
actionsTable.fill(1247, 86213, 86215); // 'state 673' -> +..- -> reduce (target=111, len=2)
actionsTable.fill(1247, 86216, 86220); // 'state 673' -> !..await -> reduce (target=111, len=2)
actionsTable[86222] = 1247; // 'state 673' -> identifier -> reduce (target=111, len=2)
actionsTable.fill(1247, 86224, 86227); // 'state 673' -> number..template_string -> reduce (target=111, len=2)
actionsTable.fill(1247, 86233, 86236); // 'state 673' -> update_operator..@par-gen.EOF -> reduce (target=111, len=2)
actionsTable[86299] = 750; // 'state 674' -> : -> shift (target=375, len=0)
actionsTable[86406] = 733; // 'state 675' -> } -> reduce (target=110, len=1)
actionsTable[86426] = 733; // 'state 675' -> case -> reduce (target=110, len=1)
actionsTable[86428] = 733; // 'state 675' -> default -> reduce (target=110, len=1)
actionsTable.fill(2381, 86528, 86551); // 'state 676' -> true..try -> reduce (target=166, len=4)
actionsTable.fill(2381, 86553, 86566); // 'state 676' -> switch..export -> reduce (target=166, len=4)
actionsTable[86567] = 2381; // 'state 676' -> = -> reduce (target=166, len=4)
actionsTable.fill(2381, 86569, 86578); // 'state 676' -> [..class -> reduce (target=166, len=4)
actionsTable.fill(2381, 86579, 86581); // 'state 676' -> implements..interface -> reduce (target=166, len=4)
actionsTable.fill(2381, 86582, 86589); // 'state 676' -> <..typeof -> reduce (target=166, len=4)
actionsTable.fill(2381, 86590, 86612); // 'state 676' -> new..accessibility_modifier -> reduce (target=166, len=4)
actionsTable.fill(2381, 86613, 86620); // 'state 676' -> equality_operator..@par-gen.EOF -> reduce (target=166, len=4)
actionsTable[86662] = 1285; // 'state 677' -> } -> reduce (target=130, len=2)
actionsTable[86664] = 1429; // 'state 677' -> ( -> reduce (target=202, len=2)
actionsTable[86665] = 1285; // 'state 677' -> ) -> reduce (target=130, len=2)
actionsTable[86675] = 1429; // 'state 677' -> in -> reduce (target=202, len=2)
actionsTable[86683] = 1285; // 'state 677' -> : -> reduce (target=130, len=2)
actionsTable[86689] = 1285; // 'state 677' -> , -> reduce (target=130, len=2)
actionsTable.fill(1429, 86690, 86692); // 'state 677' -> *..as -> reduce (target=202, len=2)
actionsTable[86695] = 1285; // 'state 677' -> = -> reduce (target=130, len=2)
actionsTable[86697] = 1429; // 'state 677' -> [ -> reduce (target=202, len=2)
actionsTable[86698] = 1285; // 'state 677' -> ] -> reduce (target=130, len=2)
actionsTable[86709] = 1285; // 'state 677' -> ?: -> reduce (target=130, len=2)
actionsTable.fill(1429, 86710, 86714); // 'state 677' -> <..& -> reduce (target=202, len=2)
actionsTable.fill(1429, 86719, 86728); // 'state 677' -> ?..** -> reduce (target=202, len=2)
actionsTable.fill(1429, 86732, 86734); // 'state 677' -> ?.... -> reduce (target=202, len=2)
actionsTable.fill(1429, 86740, 86746); // 'state 677' -> compound_assignment_operator..update_operator -> reduce (target=202, len=2)
actionsTable[86790] = 775; // 'state 678' -> } -> reduce (target=131, len=1)
actionsTable[86792] = 927; // 'state 678' -> ( -> reduce (target=207, len=1)
actionsTable[86811] = 927; // 'state 678' -> : -> reduce (target=207, len=1)
actionsTable[86817] = 775; // 'state 678' -> , -> reduce (target=131, len=1)
actionsTable[86823] = 470; // 'state 678' -> = -> shift (target=235, len=0)
actionsTable[86838] = 927; // 'state 678' -> < -> reduce (target=207, len=1)
actionsTable[86918] = 1291; // 'state 679' -> } -> reduce (target=133, len=2)
actionsTable[86920] = 1425; // 'state 679' -> ( -> reduce (target=200, len=2)
actionsTable[86921] = 1291; // 'state 679' -> ) -> reduce (target=133, len=2)
actionsTable[86931] = 1425; // 'state 679' -> in -> reduce (target=200, len=2)
actionsTable[86939] = 1291; // 'state 679' -> : -> reduce (target=133, len=2)
actionsTable[86945] = 1291; // 'state 679' -> , -> reduce (target=133, len=2)
actionsTable.fill(1425, 86946, 86948); // 'state 679' -> *..as -> reduce (target=200, len=2)
actionsTable[86951] = 1291; // 'state 679' -> = -> reduce (target=133, len=2)
actionsTable[86953] = 1425; // 'state 679' -> [ -> reduce (target=200, len=2)
actionsTable[86954] = 1291; // 'state 679' -> ] -> reduce (target=133, len=2)
actionsTable[86965] = 1291; // 'state 679' -> ?: -> reduce (target=133, len=2)
actionsTable.fill(1425, 86966, 86970); // 'state 679' -> <..& -> reduce (target=200, len=2)
actionsTable.fill(1425, 86975, 86984); // 'state 679' -> ?..** -> reduce (target=200, len=2)
actionsTable.fill(1425, 86988, 86990); // 'state 679' -> ?.... -> reduce (target=200, len=2)
actionsTable.fill(1425, 86996, 87002); // 'state 679' -> compound_assignment_operator..update_operator -> reduce (target=200, len=2)
actionsTable[87046] = 769; // 'state 680' -> } -> reduce (target=128, len=1)
actionsTable[87048] = 871; // 'state 680' -> ( -> reduce (target=179, len=1)
actionsTable[87049] = 769; // 'state 680' -> ) -> reduce (target=128, len=1)
actionsTable[87059] = 871; // 'state 680' -> in -> reduce (target=179, len=1)
actionsTable[87067] = 769; // 'state 680' -> : -> reduce (target=128, len=1)
actionsTable[87073] = 769; // 'state 680' -> , -> reduce (target=128, len=1)
actionsTable.fill(871, 87074, 87076); // 'state 680' -> *..as -> reduce (target=179, len=1)
actionsTable[87079] = 769; // 'state 680' -> = -> reduce (target=128, len=1)
actionsTable[87081] = 871; // 'state 680' -> [ -> reduce (target=179, len=1)
actionsTable[87082] = 769; // 'state 680' -> ] -> reduce (target=128, len=1)
actionsTable[87093] = 769; // 'state 680' -> ?: -> reduce (target=128, len=1)
actionsTable.fill(871, 87094, 87098); // 'state 680' -> <..& -> reduce (target=179, len=1)
actionsTable[87098] = 162; // 'state 680' -> => -> shift (target=81, len=0)
actionsTable.fill(871, 87103, 87112); // 'state 680' -> ?..** -> reduce (target=179, len=1)
actionsTable.fill(871, 87116, 87118); // 'state 680' -> ?.... -> reduce (target=179, len=1)
actionsTable[87124] = 877; // 'state 680' -> compound_assignment_operator -> reduce (target=182, len=1)
actionsTable.fill(871, 87125, 87130); // 'state 680' -> equality_operator..update_operator -> reduce (target=179, len=1)
actionsTable.fill(2373, 87168, 87191); // 'state 681' -> true..try -> reduce (target=162, len=4)
actionsTable.fill(2373, 87193, 87206); // 'state 681' -> switch..export -> reduce (target=162, len=4)
actionsTable[87207] = 2373; // 'state 681' -> = -> reduce (target=162, len=4)
actionsTable.fill(2373, 87209, 87218); // 'state 681' -> [..class -> reduce (target=162, len=4)
actionsTable.fill(2373, 87219, 87221); // 'state 681' -> implements..interface -> reduce (target=162, len=4)
actionsTable.fill(2373, 87222, 87229); // 'state 681' -> <..typeof -> reduce (target=162, len=4)
actionsTable.fill(2373, 87230, 87252); // 'state 681' -> new..accessibility_modifier -> reduce (target=162, len=4)
actionsTable.fill(2373, 87253, 87260); // 'state 681' -> equality_operator..@par-gen.EOF -> reduce (target=162, len=4)
actionsTable[87304] = 871; // 'state 682' -> ( -> reduce (target=179, len=1)
actionsTable[87305] = 839; // 'state 682' -> ) -> reduce (target=163, len=1)
actionsTable[87315] = 871; // 'state 682' -> in -> reduce (target=179, len=1)
actionsTable.fill(871, 87329, 87332); // 'state 682' -> ,..as -> reduce (target=179, len=1)
actionsTable[87337] = 839; // 'state 682' -> [ -> reduce (target=163, len=1)
actionsTable.fill(871, 87350, 87352); // 'state 682' -> <..> -> reduce (target=179, len=1)
actionsTable.fill(839, 87352, 87354); // 'state 682' -> |..& -> reduce (target=163, len=1)
actionsTable.fill(871, 87359, 87368); // 'state 682' -> ?..** -> reduce (target=179, len=1)
actionsTable.fill(871, 87372, 87374); // 'state 682' -> ?.... -> reduce (target=179, len=1)
actionsTable.fill(871, 87381, 87386); // 'state 682' -> equality_operator..update_operator -> reduce (target=179, len=1)
actionsTable[87430] = 1363; // 'state 683' -> } -> reduce (target=169, len=2)
actionsTable[87432] = 871; // 'state 683' -> ( -> reduce (target=179, len=1)
actionsTable[87433] = 1363; // 'state 683' -> ) -> reduce (target=169, len=2)
actionsTable[87437] = 1363; // 'state 683' -> ; -> reduce (target=169, len=2)
actionsTable[87442] = 1363; // 'state 683' -> of -> reduce (target=169, len=2)
actionsTable[87443] = 871; // 'state 683' -> in -> reduce (target=179, len=1)
actionsTable.fill(1363, 87456, 87458); // 'state 683' -> from.., -> reduce (target=169, len=2)
actionsTable.fill(871, 87458, 87460); // 'state 683' -> *..as -> reduce (target=179, len=1)
actionsTable[87460] = 1363; // 'state 683' -> type -> reduce (target=169, len=2)
actionsTable[87463] = 877; // 'state 683' -> = -> reduce (target=182, len=1)
actionsTable.fill(1363, 87465, 87468); // 'state 683' -> [..async -> reduce (target=169, len=2)
actionsTable.fill(1363, 87470, 87473); // 'state 683' -> readonly..set -> reduce (target=169, len=2)
actionsTable.fill(871, 87478, 87480); // 'state 683' -> <..> -> reduce (target=179, len=1)
actionsTable.fill(1363, 87480, 87482); // 'state 683' -> |..& -> reduce (target=169, len=2)
actionsTable[87482] = 162; // 'state 683' -> => -> shift (target=81, len=0)
actionsTable[87486] = 1363; // 'state 683' -> new -> reduce (target=169, len=2)
actionsTable.fill(871, 87487, 87496); // 'state 683' -> ?..** -> reduce (target=179, len=1)
actionsTable.fill(871, 87500, 87502); // 'state 683' -> ?.... -> reduce (target=179, len=1)
actionsTable[87502] = 1363; // 'state 683' -> identifier -> reduce (target=169, len=2)
actionsTable.fill(1363, 87504, 87506); // 'state 683' -> number..string -> reduce (target=169, len=2)
actionsTable[87508] = 877; // 'state 683' -> compound_assignment_operator -> reduce (target=182, len=1)
actionsTable.fill(871, 87509, 87514); // 'state 683' -> equality_operator..update_operator -> reduce (target=179, len=1)
actionsTable.fill(2383, 87552, 87575); // 'state 684' -> true..try -> reduce (target=167, len=4)
actionsTable.fill(2383, 87577, 87590); // 'state 684' -> switch..export -> reduce (target=167, len=4)
actionsTable[87591] = 2383; // 'state 684' -> = -> reduce (target=167, len=4)
actionsTable.fill(2383, 87593, 87602); // 'state 684' -> [..class -> reduce (target=167, len=4)
actionsTable.fill(2383, 87603, 87605); // 'state 684' -> implements..interface -> reduce (target=167, len=4)
actionsTable.fill(2383, 87606, 87613); // 'state 684' -> <..typeof -> reduce (target=167, len=4)
actionsTable.fill(2383, 87614, 87636); // 'state 684' -> new..accessibility_modifier -> reduce (target=167, len=4)
actionsTable.fill(2383, 87637, 87644); // 'state 684' -> equality_operator..@par-gen.EOF -> reduce (target=167, len=4)
actionsTable[87686] = 1879; // 'state 685' -> } -> reduce (target=171, len=3)
actionsTable[87698] = 1879; // 'state 685' -> of -> reduce (target=171, len=3)
actionsTable[87712] = 1879; // 'state 685' -> from -> reduce (target=171, len=3)
actionsTable[87716] = 1879; // 'state 685' -> type -> reduce (target=171, len=3)
actionsTable[87721] = 1879; // 'state 685' -> [ -> reduce (target=171, len=3)
actionsTable[87723] = 1879; // 'state 685' -> async -> reduce (target=171, len=3)
actionsTable.fill(1879, 87726, 87729); // 'state 685' -> readonly..set -> reduce (target=171, len=3)
actionsTable[87742] = 1879; // 'state 685' -> new -> reduce (target=171, len=3)
actionsTable[87758] = 1879; // 'state 685' -> identifier -> reduce (target=171, len=3)
actionsTable.fill(1879, 87760, 87762); // 'state 685' -> number..string -> reduce (target=171, len=3)
actionsTable[87814] = 1883; // 'state 686' -> } -> reduce (target=173, len=3)
actionsTable[87821] = 1883; // 'state 686' -> ; -> reduce (target=173, len=3)
actionsTable[87826] = 1883; // 'state 686' -> of -> reduce (target=173, len=3)
actionsTable.fill(1883, 87840, 87842); // 'state 686' -> from.., -> reduce (target=173, len=3)
actionsTable[87844] = 1883; // 'state 686' -> type -> reduce (target=173, len=3)
actionsTable[87849] = 1883; // 'state 686' -> [ -> reduce (target=173, len=3)
actionsTable[87851] = 1883; // 'state 686' -> async -> reduce (target=173, len=3)
actionsTable.fill(1883, 87854, 87857); // 'state 686' -> readonly..set -> reduce (target=173, len=3)
actionsTable[87870] = 1883; // 'state 686' -> new -> reduce (target=173, len=3)
actionsTable[87886] = 1883; // 'state 686' -> identifier -> reduce (target=173, len=3)
actionsTable.fill(1883, 87888, 87890); // 'state 686' -> number..string -> reduce (target=173, len=3)
actionsTable[87944] = 871; // 'state 687' -> ( -> reduce (target=179, len=1)
actionsTable[87955] = 762; // 'state 687' -> in -> shift (target=381, len=0)
actionsTable[87963] = 762; // 'state 687' -> : -> shift (target=381, len=0)
actionsTable.fill(871, 87970, 87972); // 'state 687' -> *..as -> reduce (target=179, len=1)
actionsTable[87975] = 877; // 'state 687' -> = -> reduce (target=182, len=1)
actionsTable.fill(871, 87977, 87979); // 'state 687' -> [..] -> reduce (target=179, len=1)
actionsTable.fill(871, 87990, 87994); // 'state 687' -> <..& -> reduce (target=179, len=1)
actionsTable[87994] = 162; // 'state 687' -> => -> shift (target=81, len=0)
actionsTable.fill(871, 87999, 88008); // 'state 687' -> ?..** -> reduce (target=179, len=1)
actionsTable.fill(871, 88012, 88014); // 'state 687' -> ?.... -> reduce (target=179, len=1)
actionsTable[88020] = 877; // 'state 687' -> compound_assignment_operator -> reduce (target=182, len=1)
actionsTable.fill(871, 88021, 88026); // 'state 687' -> equality_operator..update_operator -> reduce (target=179, len=1)
actionsTable[88070] = 1885; // 'state 688' -> } -> reduce (target=174, len=3)
actionsTable[88077] = 1885; // 'state 688' -> ; -> reduce (target=174, len=3)
actionsTable[88082] = 1885; // 'state 688' -> of -> reduce (target=174, len=3)
actionsTable.fill(1885, 88096, 88098); // 'state 688' -> from.., -> reduce (target=174, len=3)
actionsTable[88100] = 1885; // 'state 688' -> type -> reduce (target=174, len=3)
actionsTable[88105] = 1885; // 'state 688' -> [ -> reduce (target=174, len=3)
actionsTable[88107] = 1885; // 'state 688' -> async -> reduce (target=174, len=3)
actionsTable.fill(1885, 88110, 88113); // 'state 688' -> readonly..set -> reduce (target=174, len=3)
actionsTable[88126] = 1885; // 'state 688' -> new -> reduce (target=174, len=3)
actionsTable[88142] = 1885; // 'state 688' -> identifier -> reduce (target=174, len=3)
actionsTable.fill(1885, 88144, 88146); // 'state 688' -> number..string -> reduce (target=174, len=3)
actionsTable[88198] = 1887; // 'state 689' -> } -> reduce (target=175, len=3)
actionsTable[88205] = 1887; // 'state 689' -> ; -> reduce (target=175, len=3)
actionsTable[88210] = 1887; // 'state 689' -> of -> reduce (target=175, len=3)
actionsTable.fill(1887, 88224, 88226); // 'state 689' -> from.., -> reduce (target=175, len=3)
actionsTable[88228] = 1887; // 'state 689' -> type -> reduce (target=175, len=3)
actionsTable[88233] = 1887; // 'state 689' -> [ -> reduce (target=175, len=3)
actionsTable[88235] = 1887; // 'state 689' -> async -> reduce (target=175, len=3)
actionsTable.fill(1887, 88238, 88241); // 'state 689' -> readonly..set -> reduce (target=175, len=3)
actionsTable[88254] = 1887; // 'state 689' -> new -> reduce (target=175, len=3)
actionsTable[88270] = 1887; // 'state 689' -> identifier -> reduce (target=175, len=3)
actionsTable.fill(1887, 88272, 88274); // 'state 689' -> number..string -> reduce (target=175, len=3)
actionsTable.fill(2953, 88320, 88343); // 'state 690' -> true..try -> reduce (target=196, len=5)
actionsTable.fill(2953, 88345, 88358); // 'state 690' -> switch..export -> reduce (target=196, len=5)
actionsTable.fill(2953, 88361, 88370); // 'state 690' -> [..class -> reduce (target=196, len=5)
actionsTable.fill(2953, 88371, 88373); // 'state 690' -> implements..interface -> reduce (target=196, len=5)
actionsTable.fill(2953, 88374, 88378); // 'state 690' -> <..& -> reduce (target=196, len=5)
actionsTable.fill(2953, 88379, 88381); // 'state 690' -> void..typeof -> reduce (target=196, len=5)
actionsTable.fill(2953, 88382, 88404); // 'state 690' -> new..accessibility_modifier -> reduce (target=196, len=5)
actionsTable.fill(2953, 88405, 88412); // 'state 690' -> equality_operator..@par-gen.EOF -> reduce (target=196, len=5)
actionsTable.fill(2805, 88448, 88457); // 'state 691' -> true..( -> reduce (target=122, len=5)
actionsTable.fill(2805, 88458, 88467); // 'state 691' -> else..of -> reduce (target=122, len=5)
actionsTable.fill(2805, 88468, 88471); // 'state 691' -> return..try -> reduce (target=122, len=5)
actionsTable.fill(2805, 88473, 88475); // 'state 691' -> switch..case -> reduce (target=122, len=5)
actionsTable.fill(2805, 88476, 88481); // 'state 691' -> default..from -> reduce (target=122, len=5)
actionsTable.fill(2805, 88484, 88486); // 'state 691' -> type..export -> reduce (target=122, len=5)
actionsTable[88489] = 2805; // 'state 691' -> [ -> reduce (target=122, len=5)
actionsTable.fill(2805, 88491, 88493); // 'state 691' -> async..function -> reduce (target=122, len=5)
actionsTable.fill(2805, 88495, 88498); // 'state 691' -> get..class -> reduce (target=122, len=5)
actionsTable[88500] = 2805; // 'state 691' -> interface -> reduce (target=122, len=5)
actionsTable[88502] = 2805; // 'state 691' -> < -> reduce (target=122, len=5)
actionsTable.fill(2805, 88507, 88509); // 'state 691' -> void..typeof -> reduce (target=122, len=5)
actionsTable[88510] = 2805; // 'state 691' -> new -> reduce (target=122, len=5)
actionsTable.fill(2805, 88517, 88519); // 'state 691' -> +..- -> reduce (target=122, len=5)
actionsTable.fill(2805, 88520, 88524); // 'state 691' -> !..await -> reduce (target=122, len=5)
actionsTable[88526] = 2805; // 'state 691' -> identifier -> reduce (target=122, len=5)
actionsTable.fill(2805, 88528, 88531); // 'state 691' -> number..template_string -> reduce (target=122, len=5)
actionsTable.fill(2805, 88537, 88540); // 'state 691' -> update_operator..@par-gen.EOF -> reduce (target=122, len=5)
actionsTable[88582] = 1779; // 'state 692' -> } -> reduce (target=121, len=3)
actionsTable[88609] = 1779; // 'state 692' -> , -> reduce (target=121, len=3)
actionsTable[88710] = 2295; // 'state 693' -> } -> reduce (target=123, len=4)
actionsTable[88737] = 2295; // 'state 693' -> , -> reduce (target=123, len=4)
actionsTable.fill(2831, 88832, 88841); // 'state 694' -> true..( -> reduce (target=135, len=5)
actionsTable.fill(2831, 88842, 88845); // 'state 694' -> else..do -> reduce (target=135, len=5)
actionsTable.fill(2831, 88846, 88851); // 'state 694' -> for..of -> reduce (target=135, len=5)
actionsTable.fill(2831, 88852, 88855); // 'state 694' -> return..try -> reduce (target=135, len=5)
actionsTable.fill(2831, 88857, 88859); // 'state 694' -> switch..case -> reduce (target=135, len=5)
actionsTable.fill(2831, 88860, 88865); // 'state 694' -> default..from -> reduce (target=135, len=5)
actionsTable.fill(2831, 88868, 88870); // 'state 694' -> type..export -> reduce (target=135, len=5)
actionsTable[88873] = 2831; // 'state 694' -> [ -> reduce (target=135, len=5)
actionsTable.fill(2831, 88875, 88877); // 'state 694' -> async..function -> reduce (target=135, len=5)
actionsTable.fill(2831, 88879, 88882); // 'state 694' -> get..class -> reduce (target=135, len=5)
actionsTable[88884] = 2831; // 'state 694' -> interface -> reduce (target=135, len=5)
actionsTable[88886] = 2831; // 'state 694' -> < -> reduce (target=135, len=5)
actionsTable.fill(2831, 88891, 88893); // 'state 694' -> void..typeof -> reduce (target=135, len=5)
actionsTable[88894] = 2831; // 'state 694' -> new -> reduce (target=135, len=5)
actionsTable.fill(2831, 88901, 88903); // 'state 694' -> +..- -> reduce (target=135, len=5)
actionsTable.fill(2831, 88904, 88908); // 'state 694' -> !..await -> reduce (target=135, len=5)
actionsTable[88910] = 2831; // 'state 694' -> identifier -> reduce (target=135, len=5)
actionsTable.fill(2831, 88912, 88915); // 'state 694' -> number..template_string -> reduce (target=135, len=5)
actionsTable.fill(2831, 88921, 88924); // 'state 694' -> update_operator..@par-gen.EOF -> reduce (target=135, len=5)
actionsTable.fill(2847, 88960, 88969); // 'state 695' -> true..( -> reduce (target=143, len=5)
actionsTable.fill(2847, 88970, 88973); // 'state 695' -> else..do -> reduce (target=143, len=5)
actionsTable.fill(2847, 88974, 88979); // 'state 695' -> for..of -> reduce (target=143, len=5)
actionsTable.fill(2847, 88980, 88983); // 'state 695' -> return..try -> reduce (target=143, len=5)
actionsTable.fill(2847, 88985, 88987); // 'state 695' -> switch..case -> reduce (target=143, len=5)
actionsTable.fill(2847, 88988, 88993); // 'state 695' -> default..from -> reduce (target=143, len=5)
actionsTable.fill(2847, 88996, 88998); // 'state 695' -> type..export -> reduce (target=143, len=5)
actionsTable[89001] = 2847; // 'state 695' -> [ -> reduce (target=143, len=5)
actionsTable.fill(2847, 89003, 89005); // 'state 695' -> async..function -> reduce (target=143, len=5)
actionsTable.fill(2847, 89007, 89010); // 'state 695' -> get..class -> reduce (target=143, len=5)
actionsTable[89012] = 2847; // 'state 695' -> interface -> reduce (target=143, len=5)
actionsTable[89014] = 2847; // 'state 695' -> < -> reduce (target=143, len=5)
actionsTable.fill(2847, 89019, 89021); // 'state 695' -> void..typeof -> reduce (target=143, len=5)
actionsTable[89022] = 2847; // 'state 695' -> new -> reduce (target=143, len=5)
actionsTable.fill(2847, 89029, 89031); // 'state 695' -> +..- -> reduce (target=143, len=5)
actionsTable.fill(2847, 89032, 89036); // 'state 695' -> !..await -> reduce (target=143, len=5)
actionsTable[89038] = 2847; // 'state 695' -> identifier -> reduce (target=143, len=5)
actionsTable.fill(2847, 89040, 89043); // 'state 695' -> number..template_string -> reduce (target=143, len=5)
actionsTable.fill(2847, 89049, 89052); // 'state 695' -> update_operator..@par-gen.EOF -> reduce (target=143, len=5)
actionsTable.fill(3321, 89088, 89097); // 'state 696' -> true..( -> reduce (target=124, len=6)
actionsTable.fill(3321, 89098, 89101); // 'state 696' -> else..do -> reduce (target=124, len=6)
actionsTable[89101] = 1458; // 'state 696' -> ; -> shift (target=729, len=0)
actionsTable.fill(3321, 89102, 89107); // 'state 696' -> for..of -> reduce (target=124, len=6)
actionsTable.fill(3321, 89108, 89111); // 'state 696' -> return..try -> reduce (target=124, len=6)
actionsTable.fill(3321, 89113, 89115); // 'state 696' -> switch..case -> reduce (target=124, len=6)
actionsTable.fill(3321, 89116, 89121); // 'state 696' -> default..from -> reduce (target=124, len=6)
actionsTable.fill(3321, 89124, 89126); // 'state 696' -> type..export -> reduce (target=124, len=6)
actionsTable[89129] = 3321; // 'state 696' -> [ -> reduce (target=124, len=6)
actionsTable.fill(3321, 89131, 89133); // 'state 696' -> async..function -> reduce (target=124, len=6)
actionsTable.fill(3321, 89135, 89138); // 'state 696' -> get..class -> reduce (target=124, len=6)
actionsTable[89140] = 3321; // 'state 696' -> interface -> reduce (target=124, len=6)
actionsTable[89142] = 3321; // 'state 696' -> < -> reduce (target=124, len=6)
actionsTable.fill(3321, 89147, 89149); // 'state 696' -> void..typeof -> reduce (target=124, len=6)
actionsTable[89150] = 3321; // 'state 696' -> new -> reduce (target=124, len=6)
actionsTable.fill(3321, 89157, 89159); // 'state 696' -> +..- -> reduce (target=124, len=6)
actionsTable.fill(3321, 89160, 89164); // 'state 696' -> !..await -> reduce (target=124, len=6)
actionsTable[89166] = 3321; // 'state 696' -> identifier -> reduce (target=124, len=6)
actionsTable.fill(3321, 89168, 89171); // 'state 696' -> number..template_string -> reduce (target=124, len=6)
actionsTable.fill(3321, 89177, 89180); // 'state 696' -> update_operator..@par-gen.EOF -> reduce (target=124, len=6)
actionsTable.fill(2821, 89216, 89239); // 'state 697' -> true..try -> reduce (target=130, len=5)
actionsTable.fill(2821, 89241, 89250); // 'state 697' -> switch.., -> reduce (target=130, len=5)
actionsTable.fill(2821, 89252, 89254); // 'state 697' -> type..export -> reduce (target=130, len=5)
actionsTable[89255] = 2821; // 'state 697' -> = -> reduce (target=130, len=5)
actionsTable.fill(2821, 89257, 89261); // 'state 697' -> [..function -> reduce (target=130, len=5)
actionsTable.fill(2821, 89263, 89266); // 'state 697' -> get..class -> reduce (target=130, len=5)
actionsTable.fill(2821, 89268, 89271); // 'state 697' -> interface..< -> reduce (target=130, len=5)
actionsTable.fill(2821, 89275, 89277); // 'state 697' -> void..typeof -> reduce (target=130, len=5)
actionsTable[89278] = 2821; // 'state 697' -> new -> reduce (target=130, len=5)
actionsTable.fill(2821, 89285, 89287); // 'state 697' -> +..- -> reduce (target=130, len=5)
actionsTable.fill(2821, 89288, 89292); // 'state 697' -> !..await -> reduce (target=130, len=5)
actionsTable[89294] = 2821; // 'state 697' -> identifier -> reduce (target=130, len=5)
actionsTable.fill(2821, 89296, 89299); // 'state 697' -> number..template_string -> reduce (target=130, len=5)
actionsTable.fill(2821, 89305, 89308); // 'state 697' -> update_operator..@par-gen.EOF -> reduce (target=130, len=5)
actionsTable[89350] = 1795; // 'state 698' -> } -> reduce (target=129, len=3)
actionsTable[89377] = 1795; // 'state 698' -> , -> reduce (target=129, len=3)
actionsTable.fill(2827, 89472, 89495); // 'state 699' -> true..try -> reduce (target=133, len=5)
actionsTable.fill(2827, 89497, 89506); // 'state 699' -> switch.., -> reduce (target=133, len=5)
actionsTable.fill(2827, 89508, 89510); // 'state 699' -> type..export -> reduce (target=133, len=5)
actionsTable[89511] = 2827; // 'state 699' -> = -> reduce (target=133, len=5)
actionsTable.fill(2827, 89513, 89517); // 'state 699' -> [..function -> reduce (target=133, len=5)
actionsTable.fill(2827, 89519, 89522); // 'state 699' -> get..class -> reduce (target=133, len=5)
actionsTable.fill(2827, 89524, 89527); // 'state 699' -> interface..< -> reduce (target=133, len=5)
actionsTable.fill(2827, 89531, 89533); // 'state 699' -> void..typeof -> reduce (target=133, len=5)
actionsTable[89534] = 2827; // 'state 699' -> new -> reduce (target=133, len=5)
actionsTable.fill(2827, 89541, 89543); // 'state 699' -> +..- -> reduce (target=133, len=5)
actionsTable.fill(2827, 89544, 89548); // 'state 699' -> !..await -> reduce (target=133, len=5)
actionsTable[89550] = 2827; // 'state 699' -> identifier -> reduce (target=133, len=5)
actionsTable.fill(2827, 89552, 89555); // 'state 699' -> number..template_string -> reduce (target=133, len=5)
actionsTable.fill(2827, 89561, 89564); // 'state 699' -> update_operator..@par-gen.EOF -> reduce (target=133, len=5)
actionsTable[89633] = 1801; // 'state 700' -> , -> reduce (target=132, len=3)
actionsTable[89642] = 1801; // 'state 700' -> ] -> reduce (target=132, len=3)
actionsTable.fill(3343, 89728, 89737); // 'state 701' -> true..( -> reduce (target=135, len=6)
actionsTable.fill(3343, 89738, 89747); // 'state 701' -> else..of -> reduce (target=135, len=6)
actionsTable.fill(3343, 89748, 89751); // 'state 701' -> return..try -> reduce (target=135, len=6)
actionsTable.fill(3343, 89753, 89755); // 'state 701' -> switch..case -> reduce (target=135, len=6)
actionsTable.fill(3343, 89756, 89761); // 'state 701' -> default..from -> reduce (target=135, len=6)
actionsTable.fill(3343, 89764, 89766); // 'state 701' -> type..export -> reduce (target=135, len=6)
actionsTable[89769] = 3343; // 'state 701' -> [ -> reduce (target=135, len=6)
actionsTable.fill(3343, 89771, 89773); // 'state 701' -> async..function -> reduce (target=135, len=6)
actionsTable.fill(3343, 89775, 89778); // 'state 701' -> get..class -> reduce (target=135, len=6)
actionsTable[89780] = 3343; // 'state 701' -> interface -> reduce (target=135, len=6)
actionsTable[89782] = 3343; // 'state 701' -> < -> reduce (target=135, len=6)
actionsTable.fill(3343, 89787, 89789); // 'state 701' -> void..typeof -> reduce (target=135, len=6)
actionsTable[89790] = 3343; // 'state 701' -> new -> reduce (target=135, len=6)
actionsTable.fill(3343, 89797, 89799); // 'state 701' -> +..- -> reduce (target=135, len=6)
actionsTable.fill(3343, 89800, 89804); // 'state 701' -> !..await -> reduce (target=135, len=6)
actionsTable[89806] = 3343; // 'state 701' -> identifier -> reduce (target=135, len=6)
actionsTable.fill(3343, 89808, 89811); // 'state 701' -> number..template_string -> reduce (target=135, len=6)
actionsTable.fill(3343, 89817, 89820); // 'state 701' -> update_operator..@par-gen.EOF -> reduce (target=135, len=6)
actionsTable.fill(3343, 89856, 89865); // 'state 702' -> true..( -> reduce (target=135, len=6)
actionsTable.fill(3343, 89866, 89875); // 'state 702' -> else..of -> reduce (target=135, len=6)
actionsTable[89875] = 3491; // 'state 702' -> in -> reduce (target=209, len=6)
actionsTable.fill(3343, 89876, 89879); // 'state 702' -> return..try -> reduce (target=135, len=6)
actionsTable.fill(3343, 89881, 89883); // 'state 702' -> switch..case -> reduce (target=135, len=6)
actionsTable.fill(3343, 89884, 89889); // 'state 702' -> default..from -> reduce (target=135, len=6)
actionsTable.fill(3491, 89890, 89892); // 'state 702' -> *..as -> reduce (target=209, len=6)
actionsTable.fill(3343, 89892, 89894); // 'state 702' -> type..export -> reduce (target=135, len=6)
actionsTable[89897] = 3343; // 'state 702' -> [ -> reduce (target=135, len=6)
actionsTable.fill(3343, 89899, 89901); // 'state 702' -> async..function -> reduce (target=135, len=6)
actionsTable.fill(3343, 89903, 89906); // 'state 702' -> get..class -> reduce (target=135, len=6)
actionsTable[89908] = 3343; // 'state 702' -> interface -> reduce (target=135, len=6)
actionsTable[89910] = 3343; // 'state 702' -> < -> reduce (target=135, len=6)
actionsTable.fill(3491, 89911, 89914); // 'state 702' -> >..& -> reduce (target=209, len=6)
actionsTable.fill(3343, 89915, 89917); // 'state 702' -> void..typeof -> reduce (target=135, len=6)
actionsTable[89918] = 3343; // 'state 702' -> new -> reduce (target=135, len=6)
actionsTable.fill(3491, 89919, 89925); // 'state 702' -> ?..instanceof -> reduce (target=209, len=6)
actionsTable.fill(3343, 89925, 89927); // 'state 702' -> +..- -> reduce (target=135, len=6)
actionsTable[89927] = 3491; // 'state 702' -> ** -> reduce (target=209, len=6)
actionsTable.fill(3343, 89928, 89932); // 'state 702' -> !..await -> reduce (target=135, len=6)
actionsTable.fill(3491, 89932, 89934); // 'state 702' -> ?.... -> reduce (target=209, len=6)
actionsTable[89934] = 3343; // 'state 702' -> identifier -> reduce (target=135, len=6)
actionsTable.fill(3343, 89936, 89939); // 'state 702' -> number..template_string -> reduce (target=135, len=6)
actionsTable.fill(3491, 89941, 89945); // 'state 702' -> equality_operator..multiplicative_operator -> reduce (target=209, len=6)
actionsTable.fill(3343, 89945, 89948); // 'state 702' -> update_operator..@par-gen.EOF -> reduce (target=135, len=6)
actionsTable.fill(2831, 89984, 89993); // 'state 703' -> true..( -> reduce (target=135, len=5)
actionsTable.fill(2831, 89995, 89997); // 'state 703' -> while..do -> reduce (target=135, len=5)
actionsTable[89997] = 2979; // 'state 703' -> ; -> reduce (target=209, len=5)
actionsTable.fill(2831, 89998, 90003); // 'state 703' -> for..of -> reduce (target=135, len=5)
actionsTable[90003] = 2979; // 'state 703' -> in -> reduce (target=209, len=5)
actionsTable.fill(2831, 90004, 90007); // 'state 703' -> return..try -> reduce (target=135, len=5)
actionsTable[90009] = 2831; // 'state 703' -> switch -> reduce (target=135, len=5)
actionsTable.fill(2831, 90013, 90017); // 'state 703' -> break..from -> reduce (target=135, len=5)
actionsTable.fill(2979, 90018, 90020); // 'state 703' -> *..as -> reduce (target=209, len=5)
actionsTable.fill(2831, 90020, 90022); // 'state 703' -> type..export -> reduce (target=135, len=5)
actionsTable[90025] = 2831; // 'state 703' -> [ -> reduce (target=135, len=5)
actionsTable.fill(2831, 90027, 90029); // 'state 703' -> async..function -> reduce (target=135, len=5)
actionsTable.fill(2831, 90031, 90034); // 'state 703' -> get..class -> reduce (target=135, len=5)
actionsTable[90036] = 2831; // 'state 703' -> interface -> reduce (target=135, len=5)
actionsTable[90038] = 2831; // 'state 703' -> < -> reduce (target=135, len=5)
actionsTable.fill(2979, 90039, 90042); // 'state 703' -> >..& -> reduce (target=209, len=5)
actionsTable.fill(2831, 90043, 90045); // 'state 703' -> void..typeof -> reduce (target=135, len=5)
actionsTable[90046] = 2831; // 'state 703' -> new -> reduce (target=135, len=5)
actionsTable.fill(2979, 90047, 90053); // 'state 703' -> ?..instanceof -> reduce (target=209, len=5)
actionsTable.fill(2831, 90053, 90055); // 'state 703' -> +..- -> reduce (target=135, len=5)
actionsTable[90055] = 2979; // 'state 703' -> ** -> reduce (target=209, len=5)
actionsTable.fill(2831, 90056, 90060); // 'state 703' -> !..await -> reduce (target=135, len=5)
actionsTable.fill(2979, 90060, 90062); // 'state 703' -> ?.... -> reduce (target=209, len=5)
actionsTable[90062] = 2831; // 'state 703' -> identifier -> reduce (target=135, len=5)
actionsTable.fill(2831, 90064, 90067); // 'state 703' -> number..template_string -> reduce (target=135, len=5)
actionsTable.fill(2979, 90069, 90073); // 'state 703' -> equality_operator..multiplicative_operator -> reduce (target=209, len=5)
actionsTable.fill(2831, 90073, 90076); // 'state 703' -> update_operator..@par-gen.EOF -> reduce (target=135, len=5)
actionsTable.fill(3491, 90112, 90135); // 'state 704' -> true..try -> reduce (target=209, len=6)
actionsTable.fill(3491, 90137, 90150); // 'state 704' -> switch..export -> reduce (target=209, len=6)
actionsTable.fill(3491, 90153, 90162); // 'state 704' -> [..class -> reduce (target=209, len=6)
actionsTable.fill(3491, 90163, 90165); // 'state 704' -> implements..interface -> reduce (target=209, len=6)
actionsTable.fill(3491, 90166, 90170); // 'state 704' -> <..& -> reduce (target=209, len=6)
actionsTable.fill(3491, 90171, 90173); // 'state 704' -> void..typeof -> reduce (target=209, len=6)
actionsTable.fill(3491, 90174, 90196); // 'state 704' -> new..accessibility_modifier -> reduce (target=209, len=6)
actionsTable.fill(3491, 90197, 90204); // 'state 704' -> equality_operator..@par-gen.EOF -> reduce (target=209, len=6)
actionsTable.fill(3443, 90240, 90263); // 'state 705' -> true..try -> reduce (target=185, len=6)
actionsTable.fill(3443, 90265, 90278); // 'state 705' -> switch..export -> reduce (target=185, len=6)
actionsTable.fill(3443, 90281, 90290); // 'state 705' -> [..class -> reduce (target=185, len=6)
actionsTable.fill(3443, 90291, 90293); // 'state 705' -> implements..interface -> reduce (target=185, len=6)
actionsTable.fill(3443, 90294, 90298); // 'state 705' -> <..& -> reduce (target=185, len=6)
actionsTable.fill(3443, 90299, 90301); // 'state 705' -> void..typeof -> reduce (target=185, len=6)
actionsTable.fill(3443, 90302, 90324); // 'state 705' -> new..accessibility_modifier -> reduce (target=185, len=6)
actionsTable.fill(3443, 90325, 90332); // 'state 705' -> equality_operator..@par-gen.EOF -> reduce (target=185, len=6)
actionsTable.fill(2835, 90373, 90375); // 'state 706' -> {..} -> reduce (target=137, len=5)
actionsTable[90381] = 2835; // 'state 706' -> ; -> reduce (target=137, len=5)
actionsTable[90386] = 2835; // 'state 706' -> of -> reduce (target=137, len=5)
actionsTable[90395] = 2835; // 'state 706' -> : -> reduce (target=137, len=5)
actionsTable.fill(2835, 90400, 90402); // 'state 706' -> from.., -> reduce (target=137, len=5)
actionsTable[90404] = 2835; // 'state 706' -> type -> reduce (target=137, len=5)
actionsTable[90409] = 2835; // 'state 706' -> [ -> reduce (target=137, len=5)
actionsTable[90411] = 2835; // 'state 706' -> async -> reduce (target=137, len=5)
actionsTable.fill(2835, 90414, 90417); // 'state 706' -> readonly..set -> reduce (target=137, len=5)
actionsTable[90421] = 2835; // 'state 706' -> ?: -> reduce (target=137, len=5)
actionsTable[90426] = 2835; // 'state 706' -> => -> reduce (target=137, len=5)
actionsTable[90430] = 2835; // 'state 706' -> new -> reduce (target=137, len=5)
actionsTable[90446] = 2835; // 'state 706' -> identifier -> reduce (target=137, len=5)
actionsTable.fill(2835, 90448, 90450); // 'state 706' -> number..string -> reduce (target=137, len=5)
actionsTable[90505] = 1809; // 'state 707' -> ) -> reduce (target=136, len=3)
actionsTable[90529] = 1809; // 'state 707' -> , -> reduce (target=136, len=3)
actionsTable.fill(2847, 90624, 90633); // 'state 708' -> true..( -> reduce (target=143, len=5)
actionsTable.fill(2847, 90635, 90637); // 'state 708' -> while..do -> reduce (target=143, len=5)
actionsTable[90637] = 2981; // 'state 708' -> ; -> reduce (target=210, len=5)
actionsTable.fill(2847, 90638, 90643); // 'state 708' -> for..of -> reduce (target=143, len=5)
actionsTable[90643] = 2981; // 'state 708' -> in -> reduce (target=210, len=5)
actionsTable.fill(2847, 90644, 90647); // 'state 708' -> return..try -> reduce (target=143, len=5)
actionsTable[90649] = 2847; // 'state 708' -> switch -> reduce (target=143, len=5)
actionsTable.fill(2847, 90653, 90657); // 'state 708' -> break..from -> reduce (target=143, len=5)
actionsTable.fill(2981, 90658, 90660); // 'state 708' -> *..as -> reduce (target=210, len=5)
actionsTable.fill(2847, 90660, 90662); // 'state 708' -> type..export -> reduce (target=143, len=5)
actionsTable[90665] = 2847; // 'state 708' -> [ -> reduce (target=143, len=5)
actionsTable.fill(2847, 90667, 90669); // 'state 708' -> async..function -> reduce (target=143, len=5)
actionsTable.fill(2847, 90671, 90674); // 'state 708' -> get..class -> reduce (target=143, len=5)
actionsTable[90676] = 2847; // 'state 708' -> interface -> reduce (target=143, len=5)
actionsTable[90678] = 2847; // 'state 708' -> < -> reduce (target=143, len=5)
actionsTable.fill(2981, 90679, 90682); // 'state 708' -> >..& -> reduce (target=210, len=5)
actionsTable.fill(2847, 90683, 90685); // 'state 708' -> void..typeof -> reduce (target=143, len=5)
actionsTable[90686] = 2847; // 'state 708' -> new -> reduce (target=143, len=5)
actionsTable.fill(2981, 90687, 90693); // 'state 708' -> ?..instanceof -> reduce (target=210, len=5)
actionsTable.fill(2847, 90693, 90695); // 'state 708' -> +..- -> reduce (target=143, len=5)
actionsTable[90695] = 2981; // 'state 708' -> ** -> reduce (target=210, len=5)
actionsTable.fill(2847, 90696, 90700); // 'state 708' -> !..await -> reduce (target=143, len=5)
actionsTable.fill(2981, 90700, 90702); // 'state 708' -> ?.... -> reduce (target=210, len=5)
actionsTable[90702] = 2847; // 'state 708' -> identifier -> reduce (target=143, len=5)
actionsTable.fill(2847, 90704, 90707); // 'state 708' -> number..template_string -> reduce (target=143, len=5)
actionsTable.fill(2981, 90709, 90713); // 'state 708' -> equality_operator..multiplicative_operator -> reduce (target=210, len=5)
actionsTable.fill(2847, 90713, 90716); // 'state 708' -> update_operator..@par-gen.EOF -> reduce (target=143, len=5)
actionsTable[90757] = 1827; // 'state 709' -> { -> reduce (target=145, len=3)
actionsTable[90785] = 1827; // 'state 709' -> , -> reduce (target=145, len=3)
actionsTable[90794] = 1827; // 'state 709' -> ] -> reduce (target=145, len=3)
actionsTable[90807] = 1827; // 'state 709' -> > -> reduce (target=145, len=3)
actionsTable[90808] = 506; // 'state 709' -> | -> shift (target=253, len=0)
actionsTable[90809] = 508; // 'state 709' -> & -> shift (target=254, len=0)
actionsTable[90886] = 2347; // 'state 710' -> } -> reduce (target=149, len=4)
actionsTable[90893] = 2347; // 'state 710' -> ; -> reduce (target=149, len=4)
actionsTable[90898] = 2347; // 'state 710' -> of -> reduce (target=149, len=4)
actionsTable[90912] = 2347; // 'state 710' -> from -> reduce (target=149, len=4)
actionsTable[90916] = 2347; // 'state 710' -> type -> reduce (target=149, len=4)
actionsTable[90921] = 2347; // 'state 710' -> [ -> reduce (target=149, len=4)
actionsTable[90923] = 2347; // 'state 710' -> async -> reduce (target=149, len=4)
actionsTable.fill(2347, 90925, 90929); // 'state 710' -> static..set -> reduce (target=149, len=4)
actionsTable.fill(2347, 90958, 90962); // 'state 710' -> identifier..string -> reduce (target=149, len=4)
actionsTable[90963] = 2347; // 'state 710' -> accessibility_modifier -> reduce (target=149, len=4)
actionsTable[91014] = 2349; // 'state 711' -> } -> reduce (target=150, len=4)
actionsTable[91021] = 2349; // 'state 711' -> ; -> reduce (target=150, len=4)
actionsTable[91026] = 2349; // 'state 711' -> of -> reduce (target=150, len=4)
actionsTable[91040] = 2349; // 'state 711' -> from -> reduce (target=150, len=4)
actionsTable[91044] = 2349; // 'state 711' -> type -> reduce (target=150, len=4)
actionsTable[91049] = 2349; // 'state 711' -> [ -> reduce (target=150, len=4)
actionsTable[91051] = 2349; // 'state 711' -> async -> reduce (target=150, len=4)
actionsTable.fill(2349, 91053, 91057); // 'state 711' -> static..set -> reduce (target=150, len=4)
actionsTable.fill(2349, 91086, 91090); // 'state 711' -> identifier..string -> reduce (target=150, len=4)
actionsTable[91091] = 2349; // 'state 711' -> accessibility_modifier -> reduce (target=150, len=4)
actionsTable.fill(3379, 91136, 91145); // 'state 712' -> true..( -> reduce (target=153, len=6)
actionsTable.fill(3379, 91146, 91149); // 'state 712' -> else..do -> reduce (target=153, len=6)
actionsTable.fill(3379, 91150, 91155); // 'state 712' -> for..of -> reduce (target=153, len=6)
actionsTable.fill(3379, 91156, 91159); // 'state 712' -> return..try -> reduce (target=153, len=6)
actionsTable.fill(3379, 91161, 91163); // 'state 712' -> switch..case -> reduce (target=153, len=6)
actionsTable.fill(3379, 91164, 91169); // 'state 712' -> default..from -> reduce (target=153, len=6)
actionsTable.fill(3379, 91172, 91174); // 'state 712' -> type..export -> reduce (target=153, len=6)
actionsTable[91177] = 3379; // 'state 712' -> [ -> reduce (target=153, len=6)
actionsTable.fill(3379, 91179, 91181); // 'state 712' -> async..function -> reduce (target=153, len=6)
actionsTable.fill(3379, 91183, 91186); // 'state 712' -> get..class -> reduce (target=153, len=6)
actionsTable[91188] = 3379; // 'state 712' -> interface -> reduce (target=153, len=6)
actionsTable[91190] = 3379; // 'state 712' -> < -> reduce (target=153, len=6)
actionsTable.fill(3379, 91195, 91197); // 'state 712' -> void..typeof -> reduce (target=153, len=6)
actionsTable[91198] = 3379; // 'state 712' -> new -> reduce (target=153, len=6)
actionsTable.fill(3379, 91205, 91207); // 'state 712' -> +..- -> reduce (target=153, len=6)
actionsTable.fill(3379, 91208, 91212); // 'state 712' -> !..await -> reduce (target=153, len=6)
actionsTable[91214] = 3379; // 'state 712' -> identifier -> reduce (target=153, len=6)
actionsTable.fill(3379, 91216, 91219); // 'state 712' -> number..template_string -> reduce (target=153, len=6)
actionsTable.fill(3379, 91225, 91228); // 'state 712' -> update_operator..@par-gen.EOF -> reduce (target=153, len=6)
actionsTable.fill(2365, 91264, 91287); // 'state 713' -> true..try -> reduce (target=158, len=4)
actionsTable.fill(2365, 91289, 91302); // 'state 713' -> switch..export -> reduce (target=158, len=4)
actionsTable[91303] = 2365; // 'state 713' -> = -> reduce (target=158, len=4)
actionsTable.fill(2365, 91305, 91314); // 'state 713' -> [..class -> reduce (target=158, len=4)
actionsTable.fill(2365, 91315, 91317); // 'state 713' -> implements..interface -> reduce (target=158, len=4)
actionsTable.fill(2365, 91318, 91325); // 'state 713' -> <..typeof -> reduce (target=158, len=4)
actionsTable.fill(2365, 91326, 91348); // 'state 713' -> new..accessibility_modifier -> reduce (target=158, len=4)
actionsTable.fill(2365, 91349, 91356); // 'state 713' -> equality_operator..@par-gen.EOF -> reduce (target=158, len=4)
actionsTable[91425] = 2875; // 'state 714' -> , -> reduce (target=157, len=5)
actionsTable[91447] = 2875; // 'state 714' -> > -> reduce (target=157, len=5)
actionsTable[91448] = 506; // 'state 714' -> | -> shift (target=253, len=0)
actionsTable[91449] = 508; // 'state 714' -> & -> shift (target=254, len=0)
actionsTable[91526] = 3481; // 'state 715' -> } -> reduce (target=204, len=6)
actionsTable[91553] = 3481; // 'state 715' -> , -> reduce (target=204, len=6)
actionsTable.fill(3783, 91648, 91657); // 'state 716' -> true..( -> reduce (target=99, len=7)
actionsTable.fill(3783, 91658, 91661); // 'state 716' -> else..do -> reduce (target=99, len=7)
actionsTable.fill(3783, 91662, 91667); // 'state 716' -> for..of -> reduce (target=99, len=7)
actionsTable.fill(3783, 91668, 91671); // 'state 716' -> return..try -> reduce (target=99, len=7)
actionsTable.fill(3783, 91673, 91675); // 'state 716' -> switch..case -> reduce (target=99, len=7)
actionsTable.fill(3783, 91676, 91681); // 'state 716' -> default..from -> reduce (target=99, len=7)
actionsTable.fill(3783, 91684, 91686); // 'state 716' -> type..export -> reduce (target=99, len=7)
actionsTable[91689] = 3783; // 'state 716' -> [ -> reduce (target=99, len=7)
actionsTable.fill(3783, 91691, 91693); // 'state 716' -> async..function -> reduce (target=99, len=7)
actionsTable.fill(3783, 91695, 91698); // 'state 716' -> get..class -> reduce (target=99, len=7)
actionsTable[91700] = 3783; // 'state 716' -> interface -> reduce (target=99, len=7)
actionsTable[91702] = 3783; // 'state 716' -> < -> reduce (target=99, len=7)
actionsTable.fill(3783, 91707, 91709); // 'state 716' -> void..typeof -> reduce (target=99, len=7)
actionsTable[91710] = 3783; // 'state 716' -> new -> reduce (target=99, len=7)
actionsTable.fill(3783, 91717, 91719); // 'state 716' -> +..- -> reduce (target=99, len=7)
actionsTable.fill(3783, 91720, 91724); // 'state 716' -> !..await -> reduce (target=99, len=7)
actionsTable[91726] = 3783; // 'state 716' -> identifier -> reduce (target=99, len=7)
actionsTable.fill(3783, 91728, 91731); // 'state 716' -> number..template_string -> reduce (target=99, len=7)
actionsTable.fill(3783, 91737, 91740); // 'state 716' -> update_operator..@par-gen.EOF -> reduce (target=99, len=7)
actionsTable.fill(3787, 91776, 91785); // 'state 717' -> true..( -> reduce (target=101, len=7)
actionsTable.fill(3787, 91786, 91789); // 'state 717' -> else..do -> reduce (target=101, len=7)
actionsTable.fill(3787, 91790, 91795); // 'state 717' -> for..of -> reduce (target=101, len=7)
actionsTable.fill(3787, 91796, 91799); // 'state 717' -> return..try -> reduce (target=101, len=7)
actionsTable.fill(3787, 91801, 91803); // 'state 717' -> switch..case -> reduce (target=101, len=7)
actionsTable.fill(3787, 91804, 91809); // 'state 717' -> default..from -> reduce (target=101, len=7)
actionsTable.fill(3787, 91812, 91814); // 'state 717' -> type..export -> reduce (target=101, len=7)
actionsTable[91817] = 3787; // 'state 717' -> [ -> reduce (target=101, len=7)
actionsTable.fill(3787, 91819, 91821); // 'state 717' -> async..function -> reduce (target=101, len=7)
actionsTable.fill(3787, 91823, 91826); // 'state 717' -> get..class -> reduce (target=101, len=7)
actionsTable[91828] = 3787; // 'state 717' -> interface -> reduce (target=101, len=7)
actionsTable[91830] = 3787; // 'state 717' -> < -> reduce (target=101, len=7)
actionsTable.fill(3787, 91835, 91837); // 'state 717' -> void..typeof -> reduce (target=101, len=7)
actionsTable[91838] = 3787; // 'state 717' -> new -> reduce (target=101, len=7)
actionsTable.fill(3787, 91845, 91847); // 'state 717' -> +..- -> reduce (target=101, len=7)
actionsTable.fill(3787, 91848, 91852); // 'state 717' -> !..await -> reduce (target=101, len=7)
actionsTable[91854] = 3787; // 'state 717' -> identifier -> reduce (target=101, len=7)
actionsTable.fill(3787, 91856, 91859); // 'state 717' -> number..template_string -> reduce (target=101, len=7)
actionsTable.fill(3787, 91865, 91868); // 'state 717' -> update_operator..@par-gen.EOF -> reduce (target=101, len=7)
actionsTable.fill(3789, 91904, 91913); // 'state 718' -> true..( -> reduce (target=102, len=7)
actionsTable.fill(3789, 91914, 91917); // 'state 718' -> else..do -> reduce (target=102, len=7)
actionsTable.fill(3789, 91918, 91923); // 'state 718' -> for..of -> reduce (target=102, len=7)
actionsTable.fill(3789, 91924, 91927); // 'state 718' -> return..try -> reduce (target=102, len=7)
actionsTable.fill(3789, 91929, 91931); // 'state 718' -> switch..case -> reduce (target=102, len=7)
actionsTable.fill(3789, 91932, 91937); // 'state 718' -> default..from -> reduce (target=102, len=7)
actionsTable.fill(3789, 91940, 91942); // 'state 718' -> type..export -> reduce (target=102, len=7)
actionsTable[91945] = 3789; // 'state 718' -> [ -> reduce (target=102, len=7)
actionsTable.fill(3789, 91947, 91949); // 'state 718' -> async..function -> reduce (target=102, len=7)
actionsTable.fill(3789, 91951, 91954); // 'state 718' -> get..class -> reduce (target=102, len=7)
actionsTable[91956] = 3789; // 'state 718' -> interface -> reduce (target=102, len=7)
actionsTable[91958] = 3789; // 'state 718' -> < -> reduce (target=102, len=7)
actionsTable.fill(3789, 91963, 91965); // 'state 718' -> void..typeof -> reduce (target=102, len=7)
actionsTable[91966] = 3789; // 'state 718' -> new -> reduce (target=102, len=7)
actionsTable.fill(3789, 91973, 91975); // 'state 718' -> +..- -> reduce (target=102, len=7)
actionsTable.fill(3789, 91976, 91980); // 'state 718' -> !..await -> reduce (target=102, len=7)
actionsTable[91982] = 3789; // 'state 718' -> identifier -> reduce (target=102, len=7)
actionsTable.fill(3789, 91984, 91987); // 'state 718' -> number..template_string -> reduce (target=102, len=7)
actionsTable.fill(3789, 91993, 91996); // 'state 718' -> update_operator..@par-gen.EOF -> reduce (target=102, len=7)
actionsTable.fill(2775, 92032, 92041); // 'state 719' -> true..( -> reduce (target=107, len=5)
actionsTable.fill(2775, 92042, 92045); // 'state 719' -> else..do -> reduce (target=107, len=5)
actionsTable.fill(2775, 92046, 92051); // 'state 719' -> for..of -> reduce (target=107, len=5)
actionsTable.fill(2775, 92052, 92055); // 'state 719' -> return..try -> reduce (target=107, len=5)
actionsTable.fill(2775, 92056, 92059); // 'state 719' -> finally..case -> reduce (target=107, len=5)
actionsTable.fill(2775, 92060, 92065); // 'state 719' -> default..from -> reduce (target=107, len=5)
actionsTable.fill(2775, 92068, 92070); // 'state 719' -> type..export -> reduce (target=107, len=5)
actionsTable[92073] = 2775; // 'state 719' -> [ -> reduce (target=107, len=5)
actionsTable.fill(2775, 92075, 92077); // 'state 719' -> async..function -> reduce (target=107, len=5)
actionsTable.fill(2775, 92079, 92082); // 'state 719' -> get..class -> reduce (target=107, len=5)
actionsTable[92084] = 2775; // 'state 719' -> interface -> reduce (target=107, len=5)
actionsTable[92086] = 2775; // 'state 719' -> < -> reduce (target=107, len=5)
actionsTable.fill(2775, 92091, 92093); // 'state 719' -> void..typeof -> reduce (target=107, len=5)
actionsTable[92094] = 2775; // 'state 719' -> new -> reduce (target=107, len=5)
actionsTable.fill(2775, 92101, 92103); // 'state 719' -> +..- -> reduce (target=107, len=5)
actionsTable.fill(2775, 92104, 92108); // 'state 719' -> !..await -> reduce (target=107, len=5)
actionsTable[92110] = 2775; // 'state 719' -> identifier -> reduce (target=107, len=5)
actionsTable.fill(2775, 92112, 92115); // 'state 719' -> number..template_string -> reduce (target=107, len=5)
actionsTable.fill(2775, 92121, 92124); // 'state 719' -> update_operator..@par-gen.EOF -> reduce (target=107, len=5)
actionsTable.fill(1759, 92160, 92169); // 'state 720' -> true..( -> reduce (target=111, len=3)
actionsTable.fill(1759, 92170, 92173); // 'state 720' -> else..do -> reduce (target=111, len=3)
actionsTable.fill(1759, 92174, 92179); // 'state 720' -> for..of -> reduce (target=111, len=3)
actionsTable.fill(1759, 92180, 92183); // 'state 720' -> return..try -> reduce (target=111, len=3)
actionsTable.fill(1759, 92185, 92187); // 'state 720' -> switch..case -> reduce (target=111, len=3)
actionsTable.fill(1759, 92188, 92193); // 'state 720' -> default..from -> reduce (target=111, len=3)
actionsTable.fill(1759, 92196, 92198); // 'state 720' -> type..export -> reduce (target=111, len=3)
actionsTable[92201] = 1759; // 'state 720' -> [ -> reduce (target=111, len=3)
actionsTable.fill(1759, 92203, 92205); // 'state 720' -> async..function -> reduce (target=111, len=3)
actionsTable.fill(1759, 92207, 92210); // 'state 720' -> get..class -> reduce (target=111, len=3)
actionsTable[92212] = 1759; // 'state 720' -> interface -> reduce (target=111, len=3)
actionsTable[92214] = 1759; // 'state 720' -> < -> reduce (target=111, len=3)
actionsTable.fill(1759, 92219, 92221); // 'state 720' -> void..typeof -> reduce (target=111, len=3)
actionsTable[92222] = 1759; // 'state 720' -> new -> reduce (target=111, len=3)
actionsTable.fill(1759, 92229, 92231); // 'state 720' -> +..- -> reduce (target=111, len=3)
actionsTable.fill(1759, 92232, 92236); // 'state 720' -> !..await -> reduce (target=111, len=3)
actionsTable[92238] = 1759; // 'state 720' -> identifier -> reduce (target=111, len=3)
actionsTable.fill(1759, 92240, 92243); // 'state 720' -> number..template_string -> reduce (target=111, len=3)
actionsTable.fill(1759, 92249, 92252); // 'state 720' -> update_operator..@par-gen.EOF -> reduce (target=111, len=3)
actionsTable[92294] = 1245; // 'state 721' -> } -> reduce (target=110, len=2)
actionsTable[92314] = 1245; // 'state 721' -> case -> reduce (target=110, len=2)
actionsTable[92316] = 1245; // 'state 721' -> default -> reduce (target=110, len=2)
actionsTable.fill(2885, 92416, 92439); // 'state 722' -> true..try -> reduce (target=162, len=5)
actionsTable.fill(2885, 92441, 92454); // 'state 722' -> switch..export -> reduce (target=162, len=5)
actionsTable[92455] = 2885; // 'state 722' -> = -> reduce (target=162, len=5)
actionsTable.fill(2885, 92457, 92466); // 'state 722' -> [..class -> reduce (target=162, len=5)
actionsTable.fill(2885, 92467, 92469); // 'state 722' -> implements..interface -> reduce (target=162, len=5)
actionsTable.fill(2885, 92470, 92477); // 'state 722' -> <..typeof -> reduce (target=162, len=5)
actionsTable.fill(2885, 92478, 92500); // 'state 722' -> new..accessibility_modifier -> reduce (target=162, len=5)
actionsTable.fill(2885, 92501, 92508); // 'state 722' -> equality_operator..@par-gen.EOF -> reduce (target=162, len=5)
actionsTable[92550] = 769; // 'state 723' -> } -> reduce (target=128, len=1)
actionsTable[92552] = 871; // 'state 723' -> ( -> reduce (target=179, len=1)
actionsTable[92563] = 871; // 'state 723' -> in -> reduce (target=179, len=1)
actionsTable[92577] = 769; // 'state 723' -> , -> reduce (target=128, len=1)
actionsTable.fill(871, 92578, 92580); // 'state 723' -> *..as -> reduce (target=179, len=1)
actionsTable[92583] = 877; // 'state 723' -> = -> reduce (target=182, len=1)
actionsTable[92585] = 871; // 'state 723' -> [ -> reduce (target=179, len=1)
actionsTable.fill(871, 92598, 92602); // 'state 723' -> <..& -> reduce (target=179, len=1)
actionsTable[92602] = 162; // 'state 723' -> => -> shift (target=81, len=0)
actionsTable.fill(871, 92607, 92616); // 'state 723' -> ?..** -> reduce (target=179, len=1)
actionsTable.fill(871, 92620, 92622); // 'state 723' -> ?.... -> reduce (target=179, len=1)
actionsTable[92628] = 877; // 'state 723' -> compound_assignment_operator -> reduce (target=182, len=1)
actionsTable.fill(871, 92629, 92634); // 'state 723' -> equality_operator..update_operator -> reduce (target=179, len=1)
actionsTable.fill(2895, 92672, 92695); // 'state 724' -> true..try -> reduce (target=167, len=5)
actionsTable.fill(2895, 92697, 92710); // 'state 724' -> switch..export -> reduce (target=167, len=5)
actionsTable[92711] = 2895; // 'state 724' -> = -> reduce (target=167, len=5)
actionsTable.fill(2895, 92713, 92722); // 'state 724' -> [..class -> reduce (target=167, len=5)
actionsTable.fill(2895, 92723, 92725); // 'state 724' -> implements..interface -> reduce (target=167, len=5)
actionsTable.fill(2895, 92726, 92733); // 'state 724' -> <..typeof -> reduce (target=167, len=5)
actionsTable.fill(2895, 92734, 92756); // 'state 724' -> new..accessibility_modifier -> reduce (target=167, len=5)
actionsTable.fill(2895, 92757, 92764); // 'state 724' -> equality_operator..@par-gen.EOF -> reduce (target=167, len=5)
actionsTable[92806] = 2397; // 'state 725' -> } -> reduce (target=174, len=4)
actionsTable[92813] = 2397; // 'state 725' -> ; -> reduce (target=174, len=4)
actionsTable[92818] = 2397; // 'state 725' -> of -> reduce (target=174, len=4)
actionsTable.fill(2397, 92832, 92834); // 'state 725' -> from.., -> reduce (target=174, len=4)
actionsTable[92836] = 2397; // 'state 725' -> type -> reduce (target=174, len=4)
actionsTable[92841] = 2397; // 'state 725' -> [ -> reduce (target=174, len=4)
actionsTable[92843] = 2397; // 'state 725' -> async -> reduce (target=174, len=4)
actionsTable.fill(2397, 92846, 92849); // 'state 725' -> readonly..set -> reduce (target=174, len=4)
actionsTable[92862] = 2397; // 'state 725' -> new -> reduce (target=174, len=4)
actionsTable[92878] = 2397; // 'state 725' -> identifier -> reduce (target=174, len=4)
actionsTable.fill(2397, 92880, 92882); // 'state 725' -> number..string -> reduce (target=174, len=4)
actionsTable[92934] = 2399; // 'state 726' -> } -> reduce (target=175, len=4)
actionsTable[92941] = 2399; // 'state 726' -> ; -> reduce (target=175, len=4)
actionsTable[92946] = 2399; // 'state 726' -> of -> reduce (target=175, len=4)
actionsTable.fill(2399, 92960, 92962); // 'state 726' -> from.., -> reduce (target=175, len=4)
actionsTable[92964] = 2399; // 'state 726' -> type -> reduce (target=175, len=4)
actionsTable[92969] = 2399; // 'state 726' -> [ -> reduce (target=175, len=4)
actionsTable[92971] = 2399; // 'state 726' -> async -> reduce (target=175, len=4)
actionsTable.fill(2399, 92974, 92977); // 'state 726' -> readonly..set -> reduce (target=175, len=4)
actionsTable[92990] = 2399; // 'state 726' -> new -> reduce (target=175, len=4)
actionsTable[93006] = 2399; // 'state 726' -> identifier -> reduce (target=175, len=4)
actionsTable.fill(2399, 93008, 93010); // 'state 726' -> number..string -> reduce (target=175, len=4)
actionsTable[93098] = 786; // 'state 727' -> ] -> shift (target=393, len=0)
actionsTable[93112] = 506; // 'state 727' -> | -> shift (target=253, len=0)
actionsTable[93113] = 508; // 'state 727' -> & -> shift (target=254, len=0)
actionsTable.fill(3343, 93184, 93193); // 'state 728' -> true..( -> reduce (target=135, len=6)
actionsTable.fill(3343, 93194, 93197); // 'state 728' -> else..do -> reduce (target=135, len=6)
actionsTable.fill(3343, 93198, 93203); // 'state 728' -> for..of -> reduce (target=135, len=6)
actionsTable.fill(3343, 93204, 93207); // 'state 728' -> return..try -> reduce (target=135, len=6)
actionsTable.fill(3343, 93209, 93211); // 'state 728' -> switch..case -> reduce (target=135, len=6)
actionsTable.fill(3343, 93212, 93217); // 'state 728' -> default..from -> reduce (target=135, len=6)
actionsTable.fill(3343, 93220, 93222); // 'state 728' -> type..export -> reduce (target=135, len=6)
actionsTable[93225] = 3343; // 'state 728' -> [ -> reduce (target=135, len=6)
actionsTable.fill(3343, 93227, 93229); // 'state 728' -> async..function -> reduce (target=135, len=6)
actionsTable.fill(3343, 93231, 93234); // 'state 728' -> get..class -> reduce (target=135, len=6)
actionsTable[93236] = 3343; // 'state 728' -> interface -> reduce (target=135, len=6)
actionsTable[93238] = 3343; // 'state 728' -> < -> reduce (target=135, len=6)
actionsTable.fill(3343, 93243, 93245); // 'state 728' -> void..typeof -> reduce (target=135, len=6)
actionsTable[93246] = 3343; // 'state 728' -> new -> reduce (target=135, len=6)
actionsTable.fill(3343, 93253, 93255); // 'state 728' -> +..- -> reduce (target=135, len=6)
actionsTable.fill(3343, 93256, 93260); // 'state 728' -> !..await -> reduce (target=135, len=6)
actionsTable[93262] = 3343; // 'state 728' -> identifier -> reduce (target=135, len=6)
actionsTable.fill(3343, 93264, 93267); // 'state 728' -> number..template_string -> reduce (target=135, len=6)
actionsTable.fill(3343, 93273, 93276); // 'state 728' -> update_operator..@par-gen.EOF -> reduce (target=135, len=6)
actionsTable.fill(3833, 93312, 93321); // 'state 729' -> true..( -> reduce (target=124, len=7)
actionsTable.fill(3833, 93322, 93325); // 'state 729' -> else..do -> reduce (target=124, len=7)
actionsTable.fill(3833, 93326, 93331); // 'state 729' -> for..of -> reduce (target=124, len=7)
actionsTable.fill(3833, 93332, 93335); // 'state 729' -> return..try -> reduce (target=124, len=7)
actionsTable.fill(3833, 93337, 93339); // 'state 729' -> switch..case -> reduce (target=124, len=7)
actionsTable.fill(3833, 93340, 93345); // 'state 729' -> default..from -> reduce (target=124, len=7)
actionsTable.fill(3833, 93348, 93350); // 'state 729' -> type..export -> reduce (target=124, len=7)
actionsTable[93353] = 3833; // 'state 729' -> [ -> reduce (target=124, len=7)
actionsTable.fill(3833, 93355, 93357); // 'state 729' -> async..function -> reduce (target=124, len=7)
actionsTable.fill(3833, 93359, 93362); // 'state 729' -> get..class -> reduce (target=124, len=7)
actionsTable[93364] = 3833; // 'state 729' -> interface -> reduce (target=124, len=7)
actionsTable[93366] = 3833; // 'state 729' -> < -> reduce (target=124, len=7)
actionsTable.fill(3833, 93371, 93373); // 'state 729' -> void..typeof -> reduce (target=124, len=7)
actionsTable[93374] = 3833; // 'state 729' -> new -> reduce (target=124, len=7)
actionsTable.fill(3833, 93381, 93383); // 'state 729' -> +..- -> reduce (target=124, len=7)
actionsTable.fill(3833, 93384, 93388); // 'state 729' -> !..await -> reduce (target=124, len=7)
actionsTable[93390] = 3833; // 'state 729' -> identifier -> reduce (target=124, len=7)
actionsTable.fill(3833, 93392, 93395); // 'state 729' -> number..template_string -> reduce (target=124, len=7)
actionsTable.fill(3833, 93401, 93404); // 'state 729' -> update_operator..@par-gen.EOF -> reduce (target=124, len=7)
actionsTable.fill(3855, 93440, 93449); // 'state 730' -> true..( -> reduce (target=135, len=7)
actionsTable.fill(3855, 93450, 93459); // 'state 730' -> else..of -> reduce (target=135, len=7)
actionsTable.fill(3855, 93460, 93463); // 'state 730' -> return..try -> reduce (target=135, len=7)
actionsTable.fill(3855, 93465, 93467); // 'state 730' -> switch..case -> reduce (target=135, len=7)
actionsTable.fill(3855, 93468, 93473); // 'state 730' -> default..from -> reduce (target=135, len=7)
actionsTable.fill(3855, 93476, 93478); // 'state 730' -> type..export -> reduce (target=135, len=7)
actionsTable[93481] = 3855; // 'state 730' -> [ -> reduce (target=135, len=7)
actionsTable.fill(3855, 93483, 93485); // 'state 730' -> async..function -> reduce (target=135, len=7)
actionsTable.fill(3855, 93487, 93490); // 'state 730' -> get..class -> reduce (target=135, len=7)
actionsTable[93492] = 3855; // 'state 730' -> interface -> reduce (target=135, len=7)
actionsTable[93494] = 3855; // 'state 730' -> < -> reduce (target=135, len=7)
actionsTable.fill(3855, 93499, 93501); // 'state 730' -> void..typeof -> reduce (target=135, len=7)
actionsTable[93502] = 3855; // 'state 730' -> new -> reduce (target=135, len=7)
actionsTable.fill(3855, 93509, 93511); // 'state 730' -> +..- -> reduce (target=135, len=7)
actionsTable.fill(3855, 93512, 93516); // 'state 730' -> !..await -> reduce (target=135, len=7)
actionsTable[93518] = 3855; // 'state 730' -> identifier -> reduce (target=135, len=7)
actionsTable.fill(3855, 93520, 93523); // 'state 730' -> number..template_string -> reduce (target=135, len=7)
actionsTable.fill(3855, 93529, 93532); // 'state 730' -> update_operator..@par-gen.EOF -> reduce (target=135, len=7)
actionsTable.fill(3855, 93568, 93577); // 'state 731' -> true..( -> reduce (target=135, len=7)
actionsTable.fill(3855, 93578, 93587); // 'state 731' -> else..of -> reduce (target=135, len=7)
actionsTable[93587] = 4003; // 'state 731' -> in -> reduce (target=209, len=7)
actionsTable.fill(3855, 93588, 93591); // 'state 731' -> return..try -> reduce (target=135, len=7)
actionsTable.fill(3855, 93593, 93595); // 'state 731' -> switch..case -> reduce (target=135, len=7)
actionsTable.fill(3855, 93596, 93601); // 'state 731' -> default..from -> reduce (target=135, len=7)
actionsTable.fill(4003, 93602, 93604); // 'state 731' -> *..as -> reduce (target=209, len=7)
actionsTable.fill(3855, 93604, 93606); // 'state 731' -> type..export -> reduce (target=135, len=7)
actionsTable[93609] = 3855; // 'state 731' -> [ -> reduce (target=135, len=7)
actionsTable.fill(3855, 93611, 93613); // 'state 731' -> async..function -> reduce (target=135, len=7)
actionsTable.fill(3855, 93615, 93618); // 'state 731' -> get..class -> reduce (target=135, len=7)
actionsTable[93620] = 3855; // 'state 731' -> interface -> reduce (target=135, len=7)
actionsTable[93622] = 3855; // 'state 731' -> < -> reduce (target=135, len=7)
actionsTable.fill(4003, 93623, 93626); // 'state 731' -> >..& -> reduce (target=209, len=7)
actionsTable.fill(3855, 93627, 93629); // 'state 731' -> void..typeof -> reduce (target=135, len=7)
actionsTable[93630] = 3855; // 'state 731' -> new -> reduce (target=135, len=7)
actionsTable.fill(4003, 93631, 93637); // 'state 731' -> ?..instanceof -> reduce (target=209, len=7)
actionsTable.fill(3855, 93637, 93639); // 'state 731' -> +..- -> reduce (target=135, len=7)
actionsTable[93639] = 4003; // 'state 731' -> ** -> reduce (target=209, len=7)
actionsTable.fill(3855, 93640, 93644); // 'state 731' -> !..await -> reduce (target=135, len=7)
actionsTable.fill(4003, 93644, 93646); // 'state 731' -> ?.... -> reduce (target=209, len=7)
actionsTable[93646] = 3855; // 'state 731' -> identifier -> reduce (target=135, len=7)
actionsTable.fill(3855, 93648, 93651); // 'state 731' -> number..template_string -> reduce (target=135, len=7)
actionsTable.fill(4003, 93653, 93657); // 'state 731' -> equality_operator..multiplicative_operator -> reduce (target=209, len=7)
actionsTable.fill(3855, 93657, 93660); // 'state 731' -> update_operator..@par-gen.EOF -> reduce (target=135, len=7)
actionsTable.fill(3343, 93696, 93705); // 'state 732' -> true..( -> reduce (target=135, len=6)
actionsTable.fill(3343, 93707, 93709); // 'state 732' -> while..do -> reduce (target=135, len=6)
actionsTable[93709] = 3491; // 'state 732' -> ; -> reduce (target=209, len=6)
actionsTable.fill(3343, 93710, 93715); // 'state 732' -> for..of -> reduce (target=135, len=6)
actionsTable[93715] = 3491; // 'state 732' -> in -> reduce (target=209, len=6)
actionsTable.fill(3343, 93716, 93719); // 'state 732' -> return..try -> reduce (target=135, len=6)
actionsTable[93721] = 3343; // 'state 732' -> switch -> reduce (target=135, len=6)
actionsTable.fill(3343, 93725, 93729); // 'state 732' -> break..from -> reduce (target=135, len=6)
actionsTable.fill(3491, 93730, 93732); // 'state 732' -> *..as -> reduce (target=209, len=6)
actionsTable.fill(3343, 93732, 93734); // 'state 732' -> type..export -> reduce (target=135, len=6)
actionsTable[93737] = 3343; // 'state 732' -> [ -> reduce (target=135, len=6)
actionsTable.fill(3343, 93739, 93741); // 'state 732' -> async..function -> reduce (target=135, len=6)
actionsTable.fill(3343, 93743, 93746); // 'state 732' -> get..class -> reduce (target=135, len=6)
actionsTable[93748] = 3343; // 'state 732' -> interface -> reduce (target=135, len=6)
actionsTable[93750] = 3343; // 'state 732' -> < -> reduce (target=135, len=6)
actionsTable.fill(3491, 93751, 93754); // 'state 732' -> >..& -> reduce (target=209, len=6)
actionsTable.fill(3343, 93755, 93757); // 'state 732' -> void..typeof -> reduce (target=135, len=6)
actionsTable[93758] = 3343; // 'state 732' -> new -> reduce (target=135, len=6)
actionsTable.fill(3491, 93759, 93765); // 'state 732' -> ?..instanceof -> reduce (target=209, len=6)
actionsTable.fill(3343, 93765, 93767); // 'state 732' -> +..- -> reduce (target=135, len=6)
actionsTable[93767] = 3491; // 'state 732' -> ** -> reduce (target=209, len=6)
actionsTable.fill(3343, 93768, 93772); // 'state 732' -> !..await -> reduce (target=135, len=6)
actionsTable.fill(3491, 93772, 93774); // 'state 732' -> ?.... -> reduce (target=209, len=6)
actionsTable[93774] = 3343; // 'state 732' -> identifier -> reduce (target=135, len=6)
actionsTable.fill(3343, 93776, 93779); // 'state 732' -> number..template_string -> reduce (target=135, len=6)
actionsTable.fill(3491, 93781, 93785); // 'state 732' -> equality_operator..multiplicative_operator -> reduce (target=209, len=6)
actionsTable.fill(3343, 93785, 93788); // 'state 732' -> update_operator..@par-gen.EOF -> reduce (target=135, len=6)
actionsTable[93830] = 2859; // 'state 733' -> } -> reduce (target=149, len=5)
actionsTable[93837] = 2859; // 'state 733' -> ; -> reduce (target=149, len=5)
actionsTable[93842] = 2859; // 'state 733' -> of -> reduce (target=149, len=5)
actionsTable[93856] = 2859; // 'state 733' -> from -> reduce (target=149, len=5)
actionsTable[93860] = 2859; // 'state 733' -> type -> reduce (target=149, len=5)
actionsTable[93865] = 2859; // 'state 733' -> [ -> reduce (target=149, len=5)
actionsTable[93867] = 2859; // 'state 733' -> async -> reduce (target=149, len=5)
actionsTable.fill(2859, 93869, 93873); // 'state 733' -> static..set -> reduce (target=149, len=5)
actionsTable.fill(2859, 93902, 93906); // 'state 733' -> identifier..string -> reduce (target=149, len=5)
actionsTable[93907] = 2859; // 'state 733' -> accessibility_modifier -> reduce (target=149, len=5)
actionsTable[93958] = 2861; // 'state 734' -> } -> reduce (target=150, len=5)
actionsTable[93965] = 2861; // 'state 734' -> ; -> reduce (target=150, len=5)
actionsTable[93970] = 2861; // 'state 734' -> of -> reduce (target=150, len=5)
actionsTable[93984] = 2861; // 'state 734' -> from -> reduce (target=150, len=5)
actionsTable[93988] = 2861; // 'state 734' -> type -> reduce (target=150, len=5)
actionsTable[93993] = 2861; // 'state 734' -> [ -> reduce (target=150, len=5)
actionsTable[93995] = 2861; // 'state 734' -> async -> reduce (target=150, len=5)
actionsTable.fill(2861, 93997, 94001); // 'state 734' -> static..set -> reduce (target=150, len=5)
actionsTable.fill(2861, 94030, 94034); // 'state 734' -> identifier..string -> reduce (target=150, len=5)
actionsTable[94035] = 2861; // 'state 734' -> accessibility_modifier -> reduce (target=150, len=5)
actionsTable.fill(2877, 94080, 94103); // 'state 735' -> true..try -> reduce (target=158, len=5)
actionsTable.fill(2877, 94105, 94118); // 'state 735' -> switch..export -> reduce (target=158, len=5)
actionsTable[94119] = 2877; // 'state 735' -> = -> reduce (target=158, len=5)
actionsTable.fill(2877, 94121, 94130); // 'state 735' -> [..class -> reduce (target=158, len=5)
actionsTable.fill(2877, 94131, 94133); // 'state 735' -> implements..interface -> reduce (target=158, len=5)
actionsTable.fill(2877, 94134, 94141); // 'state 735' -> <..typeof -> reduce (target=158, len=5)
actionsTable.fill(2877, 94142, 94164); // 'state 735' -> new..accessibility_modifier -> reduce (target=158, len=5)
actionsTable.fill(2877, 94165, 94172); // 'state 735' -> equality_operator..@par-gen.EOF -> reduce (target=158, len=5)
actionsTable.fill(4301, 94208, 94217); // 'state 736' -> true..( -> reduce (target=102, len=8)
actionsTable.fill(4301, 94218, 94221); // 'state 736' -> else..do -> reduce (target=102, len=8)
actionsTable.fill(4301, 94222, 94227); // 'state 736' -> for..of -> reduce (target=102, len=8)
actionsTable.fill(4301, 94228, 94231); // 'state 736' -> return..try -> reduce (target=102, len=8)
actionsTable.fill(4301, 94233, 94235); // 'state 736' -> switch..case -> reduce (target=102, len=8)
actionsTable.fill(4301, 94236, 94241); // 'state 736' -> default..from -> reduce (target=102, len=8)
actionsTable.fill(4301, 94244, 94246); // 'state 736' -> type..export -> reduce (target=102, len=8)
actionsTable[94249] = 4301; // 'state 736' -> [ -> reduce (target=102, len=8)
actionsTable.fill(4301, 94251, 94253); // 'state 736' -> async..function -> reduce (target=102, len=8)
actionsTable.fill(4301, 94255, 94258); // 'state 736' -> get..class -> reduce (target=102, len=8)
actionsTable[94260] = 4301; // 'state 736' -> interface -> reduce (target=102, len=8)
actionsTable[94262] = 4301; // 'state 736' -> < -> reduce (target=102, len=8)
actionsTable.fill(4301, 94267, 94269); // 'state 736' -> void..typeof -> reduce (target=102, len=8)
actionsTable[94270] = 4301; // 'state 736' -> new -> reduce (target=102, len=8)
actionsTable.fill(4301, 94277, 94279); // 'state 736' -> +..- -> reduce (target=102, len=8)
actionsTable.fill(4301, 94280, 94284); // 'state 736' -> !..await -> reduce (target=102, len=8)
actionsTable[94286] = 4301; // 'state 736' -> identifier -> reduce (target=102, len=8)
actionsTable.fill(4301, 94288, 94291); // 'state 736' -> number..template_string -> reduce (target=102, len=8)
actionsTable.fill(4301, 94297, 94300); // 'state 736' -> update_operator..@par-gen.EOF -> reduce (target=102, len=8)
actionsTable.fill(4303, 94336, 94345); // 'state 737' -> true..( -> reduce (target=103, len=8)
actionsTable.fill(4303, 94346, 94349); // 'state 737' -> else..do -> reduce (target=103, len=8)
actionsTable.fill(4303, 94350, 94355); // 'state 737' -> for..of -> reduce (target=103, len=8)
actionsTable.fill(4303, 94356, 94359); // 'state 737' -> return..try -> reduce (target=103, len=8)
actionsTable.fill(4303, 94361, 94363); // 'state 737' -> switch..case -> reduce (target=103, len=8)
actionsTable.fill(4303, 94364, 94369); // 'state 737' -> default..from -> reduce (target=103, len=8)
actionsTable.fill(4303, 94372, 94374); // 'state 737' -> type..export -> reduce (target=103, len=8)
actionsTable[94377] = 4303; // 'state 737' -> [ -> reduce (target=103, len=8)
actionsTable.fill(4303, 94379, 94381); // 'state 737' -> async..function -> reduce (target=103, len=8)
actionsTable.fill(4303, 94383, 94386); // 'state 737' -> get..class -> reduce (target=103, len=8)
actionsTable[94388] = 4303; // 'state 737' -> interface -> reduce (target=103, len=8)
actionsTable[94390] = 4303; // 'state 737' -> < -> reduce (target=103, len=8)
actionsTable.fill(4303, 94395, 94397); // 'state 737' -> void..typeof -> reduce (target=103, len=8)
actionsTable[94398] = 4303; // 'state 737' -> new -> reduce (target=103, len=8)
actionsTable.fill(4303, 94405, 94407); // 'state 737' -> +..- -> reduce (target=103, len=8)
actionsTable.fill(4303, 94408, 94412); // 'state 737' -> !..await -> reduce (target=103, len=8)
actionsTable[94414] = 4303; // 'state 737' -> identifier -> reduce (target=103, len=8)
actionsTable.fill(4303, 94416, 94419); // 'state 737' -> number..template_string -> reduce (target=103, len=8)
actionsTable.fill(4303, 94425, 94428); // 'state 737' -> update_operator..@par-gen.EOF -> reduce (target=103, len=8)
actionsTable.fill(4003, 94464, 94487); // 'state 738' -> true..try -> reduce (target=209, len=7)
actionsTable.fill(4003, 94489, 94502); // 'state 738' -> switch..export -> reduce (target=209, len=7)
actionsTable.fill(4003, 94505, 94514); // 'state 738' -> [..class -> reduce (target=209, len=7)
actionsTable.fill(4003, 94515, 94517); // 'state 738' -> implements..interface -> reduce (target=209, len=7)
actionsTable.fill(4003, 94518, 94522); // 'state 738' -> <..& -> reduce (target=209, len=7)
actionsTable.fill(4003, 94523, 94525); // 'state 738' -> void..typeof -> reduce (target=209, len=7)
actionsTable.fill(4003, 94526, 94548); // 'state 738' -> new..accessibility_modifier -> reduce (target=209, len=7)
actionsTable.fill(4003, 94549, 94556); // 'state 738' -> equality_operator..@par-gen.EOF -> reduce (target=209, len=7)
actionsTable.fill(3287, 94592, 94601); // 'state 739' -> true..( -> reduce (target=107, len=6)
actionsTable.fill(3287, 94602, 94605); // 'state 739' -> else..do -> reduce (target=107, len=6)
actionsTable.fill(3287, 94606, 94611); // 'state 739' -> for..of -> reduce (target=107, len=6)
actionsTable.fill(3287, 94612, 94615); // 'state 739' -> return..try -> reduce (target=107, len=6)
actionsTable.fill(3287, 94616, 94619); // 'state 739' -> finally..case -> reduce (target=107, len=6)
actionsTable.fill(3287, 94620, 94625); // 'state 739' -> default..from -> reduce (target=107, len=6)
actionsTable.fill(3287, 94628, 94630); // 'state 739' -> type..export -> reduce (target=107, len=6)
actionsTable[94633] = 3287; // 'state 739' -> [ -> reduce (target=107, len=6)
actionsTable.fill(3287, 94635, 94637); // 'state 739' -> async..function -> reduce (target=107, len=6)
actionsTable.fill(3287, 94639, 94642); // 'state 739' -> get..class -> reduce (target=107, len=6)
actionsTable[94644] = 3287; // 'state 739' -> interface -> reduce (target=107, len=6)
actionsTable[94646] = 3287; // 'state 739' -> < -> reduce (target=107, len=6)
actionsTable.fill(3287, 94651, 94653); // 'state 739' -> void..typeof -> reduce (target=107, len=6)
actionsTable[94654] = 3287; // 'state 739' -> new -> reduce (target=107, len=6)
actionsTable.fill(3287, 94661, 94663); // 'state 739' -> +..- -> reduce (target=107, len=6)
actionsTable.fill(3287, 94664, 94668); // 'state 739' -> !..await -> reduce (target=107, len=6)
actionsTable[94670] = 3287; // 'state 739' -> identifier -> reduce (target=107, len=6)
actionsTable.fill(3287, 94672, 94675); // 'state 739' -> number..template_string -> reduce (target=107, len=6)
actionsTable.fill(3287, 94681, 94684); // 'state 739' -> update_operator..@par-gen.EOF -> reduce (target=107, len=6)
actionsTable[94726] = 1221; // 'state 740' -> } -> reduce (target=98, len=2)
actionsTable.fill(1221, 94728, 94730); // 'state 740' -> (..) -> reduce (target=98, len=2)
actionsTable[94733] = 1369; // 'state 740' -> ; -> reduce (target=172, len=2)
actionsTable[94738] = 1369; // 'state 740' -> of -> reduce (target=172, len=2)
actionsTable[94739] = 1221; // 'state 740' -> in -> reduce (target=98, len=2)
actionsTable[94752] = 1369; // 'state 740' -> from -> reduce (target=172, len=2)
actionsTable.fill(1221, 94753, 94756); // 'state 740' -> ,..as -> reduce (target=98, len=2)
actionsTable[94756] = 1369; // 'state 740' -> type -> reduce (target=172, len=2)
actionsTable[94759] = 1429; // 'state 740' -> = -> reduce (target=202, len=2)
actionsTable.fill(1221, 94761, 94763); // 'state 740' -> [..] -> reduce (target=98, len=2)
actionsTable[94763] = 1369; // 'state 740' -> async -> reduce (target=172, len=2)
actionsTable.fill(1369, 94766, 94769); // 'state 740' -> readonly..set -> reduce (target=172, len=2)
actionsTable.fill(1221, 94774, 94778); // 'state 740' -> <..& -> reduce (target=98, len=2)
actionsTable[94782] = 1369; // 'state 740' -> new -> reduce (target=172, len=2)
actionsTable.fill(1221, 94783, 94792); // 'state 740' -> ?..** -> reduce (target=98, len=2)
actionsTable.fill(1221, 94796, 94798); // 'state 740' -> ?.... -> reduce (target=98, len=2)
actionsTable[94798] = 1369; // 'state 740' -> identifier -> reduce (target=172, len=2)
actionsTable.fill(1369, 94800, 94802); // 'state 740' -> number..string -> reduce (target=172, len=2)
actionsTable[94804] = 1429; // 'state 740' -> compound_assignment_operator -> reduce (target=202, len=2)
actionsTable.fill(1221, 94805, 94810); // 'state 740' -> equality_operator..update_operator -> reduce (target=98, len=2)
actionsTable[94890] = 792; // 'state 741' -> ] -> shift (target=396, len=0)
actionsTable[94904] = 506; // 'state 741' -> | -> shift (target=253, len=0)
actionsTable[94905] = 508; // 'state 741' -> & -> shift (target=254, len=0)
actionsTable.fill(3855, 94976, 94985); // 'state 742' -> true..( -> reduce (target=135, len=7)
actionsTable.fill(3855, 94986, 94989); // 'state 742' -> else..do -> reduce (target=135, len=7)
actionsTable.fill(3855, 94990, 94995); // 'state 742' -> for..of -> reduce (target=135, len=7)
actionsTable.fill(3855, 94996, 94999); // 'state 742' -> return..try -> reduce (target=135, len=7)
actionsTable.fill(3855, 95001, 95003); // 'state 742' -> switch..case -> reduce (target=135, len=7)
actionsTable.fill(3855, 95004, 95009); // 'state 742' -> default..from -> reduce (target=135, len=7)
actionsTable.fill(3855, 95012, 95014); // 'state 742' -> type..export -> reduce (target=135, len=7)
actionsTable[95017] = 3855; // 'state 742' -> [ -> reduce (target=135, len=7)
actionsTable.fill(3855, 95019, 95021); // 'state 742' -> async..function -> reduce (target=135, len=7)
actionsTable.fill(3855, 95023, 95026); // 'state 742' -> get..class -> reduce (target=135, len=7)
actionsTable[95028] = 3855; // 'state 742' -> interface -> reduce (target=135, len=7)
actionsTable[95030] = 3855; // 'state 742' -> < -> reduce (target=135, len=7)
actionsTable.fill(3855, 95035, 95037); // 'state 742' -> void..typeof -> reduce (target=135, len=7)
actionsTable[95038] = 3855; // 'state 742' -> new -> reduce (target=135, len=7)
actionsTable.fill(3855, 95045, 95047); // 'state 742' -> +..- -> reduce (target=135, len=7)
actionsTable.fill(3855, 95048, 95052); // 'state 742' -> !..await -> reduce (target=135, len=7)
actionsTable[95054] = 3855; // 'state 742' -> identifier -> reduce (target=135, len=7)
actionsTable.fill(3855, 95056, 95059); // 'state 742' -> number..template_string -> reduce (target=135, len=7)
actionsTable.fill(3855, 95065, 95068); // 'state 742' -> update_operator..@par-gen.EOF -> reduce (target=135, len=7)
actionsTable.fill(3855, 95104, 95113); // 'state 743' -> true..( -> reduce (target=135, len=7)
actionsTable.fill(3855, 95115, 95117); // 'state 743' -> while..do -> reduce (target=135, len=7)
actionsTable[95117] = 4003; // 'state 743' -> ; -> reduce (target=209, len=7)
actionsTable.fill(3855, 95118, 95123); // 'state 743' -> for..of -> reduce (target=135, len=7)
actionsTable[95123] = 4003; // 'state 743' -> in -> reduce (target=209, len=7)
actionsTable.fill(3855, 95124, 95127); // 'state 743' -> return..try -> reduce (target=135, len=7)
actionsTable[95129] = 3855; // 'state 743' -> switch -> reduce (target=135, len=7)
actionsTable.fill(3855, 95133, 95137); // 'state 743' -> break..from -> reduce (target=135, len=7)
actionsTable.fill(4003, 95138, 95140); // 'state 743' -> *..as -> reduce (target=209, len=7)
actionsTable.fill(3855, 95140, 95142); // 'state 743' -> type..export -> reduce (target=135, len=7)
actionsTable[95145] = 3855; // 'state 743' -> [ -> reduce (target=135, len=7)
actionsTable.fill(3855, 95147, 95149); // 'state 743' -> async..function -> reduce (target=135, len=7)
actionsTable.fill(3855, 95151, 95154); // 'state 743' -> get..class -> reduce (target=135, len=7)
actionsTable[95156] = 3855; // 'state 743' -> interface -> reduce (target=135, len=7)
actionsTable[95158] = 3855; // 'state 743' -> < -> reduce (target=135, len=7)
actionsTable.fill(4003, 95159, 95162); // 'state 743' -> >..& -> reduce (target=209, len=7)
actionsTable.fill(3855, 95163, 95165); // 'state 743' -> void..typeof -> reduce (target=135, len=7)
actionsTable[95166] = 3855; // 'state 743' -> new -> reduce (target=135, len=7)
actionsTable.fill(4003, 95167, 95173); // 'state 743' -> ?..instanceof -> reduce (target=209, len=7)
actionsTable.fill(3855, 95173, 95175); // 'state 743' -> +..- -> reduce (target=135, len=7)
actionsTable[95175] = 4003; // 'state 743' -> ** -> reduce (target=209, len=7)
actionsTable.fill(3855, 95176, 95180); // 'state 743' -> !..await -> reduce (target=135, len=7)
actionsTable.fill(4003, 95180, 95182); // 'state 743' -> ?.... -> reduce (target=209, len=7)
actionsTable[95182] = 3855; // 'state 743' -> identifier -> reduce (target=135, len=7)
actionsTable.fill(3855, 95184, 95187); // 'state 743' -> number..template_string -> reduce (target=135, len=7)
actionsTable.fill(4003, 95189, 95193); // 'state 743' -> equality_operator..multiplicative_operator -> reduce (target=209, len=7)
actionsTable.fill(3855, 95193, 95196); // 'state 743' -> update_operator..@par-gen.EOF -> reduce (target=135, len=7)
actionsTable[95238] = 3371; // 'state 744' -> } -> reduce (target=149, len=6)
actionsTable[95245] = 3371; // 'state 744' -> ; -> reduce (target=149, len=6)
actionsTable[95250] = 3371; // 'state 744' -> of -> reduce (target=149, len=6)
actionsTable[95264] = 3371; // 'state 744' -> from -> reduce (target=149, len=6)
actionsTable[95268] = 3371; // 'state 744' -> type -> reduce (target=149, len=6)
actionsTable[95273] = 3371; // 'state 744' -> [ -> reduce (target=149, len=6)
actionsTable[95275] = 3371; // 'state 744' -> async -> reduce (target=149, len=6)
actionsTable.fill(3371, 95277, 95281); // 'state 744' -> static..set -> reduce (target=149, len=6)
actionsTable.fill(3371, 95310, 95314); // 'state 744' -> identifier..string -> reduce (target=149, len=6)
actionsTable[95315] = 3371; // 'state 744' -> accessibility_modifier -> reduce (target=149, len=6)
actionsTable[95366] = 3373; // 'state 745' -> } -> reduce (target=150, len=6)
actionsTable[95373] = 3373; // 'state 745' -> ; -> reduce (target=150, len=6)
actionsTable[95378] = 3373; // 'state 745' -> of -> reduce (target=150, len=6)
actionsTable[95392] = 3373; // 'state 745' -> from -> reduce (target=150, len=6)
actionsTable[95396] = 3373; // 'state 745' -> type -> reduce (target=150, len=6)
actionsTable[95401] = 3373; // 'state 745' -> [ -> reduce (target=150, len=6)
actionsTable[95403] = 3373; // 'state 745' -> async -> reduce (target=150, len=6)
actionsTable.fill(3373, 95405, 95409); // 'state 745' -> static..set -> reduce (target=150, len=6)
actionsTable.fill(3373, 95438, 95442); // 'state 745' -> identifier..string -> reduce (target=150, len=6)
actionsTable[95443] = 3373; // 'state 745' -> accessibility_modifier -> reduce (target=150, len=6)
actionsTable.fill(4813, 95488, 95497); // 'state 746' -> true..( -> reduce (target=102, len=9)
actionsTable.fill(4813, 95498, 95501); // 'state 746' -> else..do -> reduce (target=102, len=9)
actionsTable.fill(4813, 95502, 95507); // 'state 746' -> for..of -> reduce (target=102, len=9)
actionsTable.fill(4813, 95508, 95511); // 'state 746' -> return..try -> reduce (target=102, len=9)
actionsTable.fill(4813, 95513, 95515); // 'state 746' -> switch..case -> reduce (target=102, len=9)
actionsTable.fill(4813, 95516, 95521); // 'state 746' -> default..from -> reduce (target=102, len=9)
actionsTable.fill(4813, 95524, 95526); // 'state 746' -> type..export -> reduce (target=102, len=9)
actionsTable[95529] = 4813; // 'state 746' -> [ -> reduce (target=102, len=9)
actionsTable.fill(4813, 95531, 95533); // 'state 746' -> async..function -> reduce (target=102, len=9)
actionsTable.fill(4813, 95535, 95538); // 'state 746' -> get..class -> reduce (target=102, len=9)
actionsTable[95540] = 4813; // 'state 746' -> interface -> reduce (target=102, len=9)
actionsTable[95542] = 4813; // 'state 746' -> < -> reduce (target=102, len=9)
actionsTable.fill(4813, 95547, 95549); // 'state 746' -> void..typeof -> reduce (target=102, len=9)
actionsTable[95550] = 4813; // 'state 746' -> new -> reduce (target=102, len=9)
actionsTable.fill(4813, 95557, 95559); // 'state 746' -> +..- -> reduce (target=102, len=9)
actionsTable.fill(4813, 95560, 95564); // 'state 746' -> !..await -> reduce (target=102, len=9)
actionsTable[95566] = 4813; // 'state 746' -> identifier -> reduce (target=102, len=9)
actionsTable.fill(4813, 95568, 95571); // 'state 746' -> number..template_string -> reduce (target=102, len=9)
actionsTable.fill(4813, 95577, 95580); // 'state 746' -> update_operator..@par-gen.EOF -> reduce (target=102, len=9)
actionsTable[95622] = 3425; // 'state 747' -> } -> reduce (target=176, len=6)
actionsTable[95629] = 3425; // 'state 747' -> ; -> reduce (target=176, len=6)
actionsTable[95634] = 3425; // 'state 747' -> of -> reduce (target=176, len=6)
actionsTable.fill(3425, 95648, 95650); // 'state 747' -> from.., -> reduce (target=176, len=6)
actionsTable[95652] = 3425; // 'state 747' -> type -> reduce (target=176, len=6)
actionsTable[95657] = 3425; // 'state 747' -> [ -> reduce (target=176, len=6)
actionsTable[95659] = 3425; // 'state 747' -> async -> reduce (target=176, len=6)
actionsTable.fill(3425, 95662, 95665); // 'state 747' -> readonly..set -> reduce (target=176, len=6)
actionsTable[95678] = 3425; // 'state 747' -> new -> reduce (target=176, len=6)
actionsTable[95694] = 3425; // 'state 747' -> identifier -> reduce (target=176, len=6)
actionsTable.fill(3425, 95696, 95698); // 'state 747' -> number..string -> reduce (target=176, len=6)
actionsTable[95750] = 3937; // 'state 748' -> } -> reduce (target=176, len=7)
actionsTable[95757] = 3937; // 'state 748' -> ; -> reduce (target=176, len=7)
actionsTable[95762] = 3937; // 'state 748' -> of -> reduce (target=176, len=7)
actionsTable.fill(3937, 95776, 95778); // 'state 748' -> from.., -> reduce (target=176, len=7)
actionsTable[95780] = 3937; // 'state 748' -> type -> reduce (target=176, len=7)
actionsTable[95785] = 3937; // 'state 748' -> [ -> reduce (target=176, len=7)
actionsTable[95787] = 3937; // 'state 748' -> async -> reduce (target=176, len=7)
actionsTable.fill(3937, 95790, 95793); // 'state 748' -> readonly..set -> reduce (target=176, len=7)
actionsTable[95806] = 3937; // 'state 748' -> new -> reduce (target=176, len=7)
actionsTable[95822] = 3937; // 'state 748' -> identifier -> reduce (target=176, len=7)
actionsTable.fill(3937, 95824, 95826); // 'state 748' -> number..string -> reduce (target=176, len=7)

const gotoTable = new Uint16Array(51168);
gotoTable[95] = 19; // 'state 19'
gotoTable[96] = 410; // 'state 410'
gotoTable.fill(411, 98, 107); // 'state 411'
gotoTable[109] = 411; // 'state 411'
gotoTable.fill(411, 114, 118); // 'state 411'
gotoTable[118] = 412; // 'state 412'
gotoTable[124] = 412; // 'state 412'
gotoTable[126] = 412; // 'state 412'
gotoTable[135] = 412; // 'state 412'
gotoTable[140] = 20; // 'state 20'
gotoTable[143] = 412; // 'state 412'
gotoTable[151] = 412; // 'state 412'
gotoTable[153] = 412; // 'state 412'
gotoTable[156] = 21; // 'state 21'
gotoTable[177] = 22; // 'state 22'
gotoTable[178] = 413; // 'state 413'
gotoTable[179] = 414; // 'state 414'
gotoTable[181] = 23; // 'state 23'
gotoTable[182] = 415; // 'state 415'
gotoTable.fill(414, 183, 194); // 'state 414'
gotoTable.fill(416, 194, 196); // 'state 416'
gotoTable[200] = 413; // 'state 413'
gotoTable[202] = 413; // 'state 413'
gotoTable.fill(399, 209, 211); // 'state 399'
gotoTable[224] = 421; // 'state 421'
gotoTable[225] = 28; // 'state 28'
gotoTable.fill(411, 226, 235); // 'state 411'
gotoTable[237] = 411; // 'state 411'
gotoTable.fill(411, 242, 246); // 'state 411'
gotoTable[246] = 412; // 'state 412'
gotoTable[252] = 412; // 'state 412'
gotoTable[254] = 412; // 'state 412'
gotoTable[263] = 412; // 'state 412'
gotoTable[268] = 20; // 'state 20'
gotoTable[271] = 412; // 'state 412'
gotoTable[279] = 412; // 'state 412'
gotoTable[281] = 412; // 'state 412'
gotoTable[284] = 21; // 'state 21'
gotoTable[305] = 22; // 'state 22'
gotoTable[306] = 422; // 'state 422'
gotoTable[307] = 414; // 'state 414'
gotoTable[309] = 23; // 'state 23'
gotoTable[310] = 415; // 'state 415'
gotoTable.fill(414, 311, 322); // 'state 414'
gotoTable.fill(416, 322, 324); // 'state 416'
gotoTable[326] = 423; // 'state 423'
gotoTable[328] = 413; // 'state 413'
gotoTable[330] = 413; // 'state 413'
gotoTable[331] = 29; // 'state 29'
gotoTable.fill(423, 332, 335); // 'state 423'
gotoTable[335] = 30; // 'state 30'
gotoTable[336] = 424; // 'state 424'
gotoTable.fill(399, 337, 339); // 'state 399'
gotoTable[396] = 20; // 'state 20'
gotoTable[397] = 87; // 'state 87'
gotoTable[412] = 21; // 'state 21'
gotoTable[433] = 88; // 'state 88'
gotoTable[434] = 413; // 'state 413'
gotoTable[435] = 414; // 'state 414'
gotoTable[437] = 23; // 'state 23'
gotoTable[438] = 415; // 'state 415'
gotoTable.fill(414, 439, 450); // 'state 414'
gotoTable.fill(416, 450, 452); // 'state 416'
gotoTable[453] = 89; // 'state 89'
gotoTable[454] = 451; // 'state 451'
gotoTable[456] = 90; // 'state 90'
gotoTable[458] = 90; // 'state 90'
gotoTable.fill(399, 465, 467); // 'state 399'
gotoTable[480] = 425; // 'state 425'
gotoTable.fill(411, 482, 491); // 'state 411'
gotoTable[493] = 411; // 'state 411'
gotoTable.fill(411, 498, 502); // 'state 411'
gotoTable[502] = 412; // 'state 412'
gotoTable[508] = 412; // 'state 412'
gotoTable[510] = 412; // 'state 412'
gotoTable[519] = 412; // 'state 412'
gotoTable[524] = 20; // 'state 20'
gotoTable[527] = 412; // 'state 412'
gotoTable[535] = 412; // 'state 412'
gotoTable[537] = 412; // 'state 412'
gotoTable[540] = 21; // 'state 21'
gotoTable[561] = 22; // 'state 22'
gotoTable[562] = 413; // 'state 413'
gotoTable[563] = 414; // 'state 414'
gotoTable[565] = 23; // 'state 23'
gotoTable[566] = 415; // 'state 415'
gotoTable.fill(414, 567, 578); // 'state 414'
gotoTable.fill(416, 578, 580); // 'state 416'
gotoTable[584] = 413; // 'state 413'
gotoTable[586] = 413; // 'state 413'
gotoTable.fill(399, 593, 595); // 'state 399'
gotoTable[639] = 63; // 'state 63'
gotoTable[640] = 64; // 'state 64'
gotoTable[642] = 447; // 'state 447'
gotoTable[645] = 447; // 'state 447'
gotoTable[780] = 20; // 'state 20'
gotoTable[796] = 21; // 'state 21'
gotoTable[817] = 38; // 'state 38'
gotoTable[818] = 413; // 'state 413'
gotoTable[819] = 414; // 'state 414'
gotoTable[821] = 23; // 'state 23'
gotoTable[822] = 415; // 'state 415'
gotoTable.fill(414, 823, 834); // 'state 414'
gotoTable.fill(416, 834, 836); // 'state 416'
gotoTable[840] = 413; // 'state 413'
gotoTable[842] = 413; // 'state 413'
gotoTable.fill(399, 849, 851); // 'state 399'
gotoTable[908] = 20; // 'state 20'
gotoTable[924] = 21; // 'state 21'
gotoTable[945] = 39; // 'state 39'
gotoTable[946] = 413; // 'state 413'
gotoTable[947] = 414; // 'state 414'
gotoTable[949] = 23; // 'state 23'
gotoTable[950] = 415; // 'state 415'
gotoTable.fill(414, 951, 962); // 'state 414'
gotoTable.fill(416, 962, 964); // 'state 416'
gotoTable[968] = 413; // 'state 413'
gotoTable[970] = 413; // 'state 413'
gotoTable.fill(399, 977, 979); // 'state 399'
gotoTable[994] = 41; // 'state 41'
gotoTable[1143] = 438; // 'state 438'
gotoTable[1144] = 439; // 'state 439'
gotoTable[1146] = 439; // 'state 439'
gotoTable[1269] = 445; // 'state 445'
gotoTable[1270] = 412; // 'state 412'
gotoTable[1274] = 446; // 'state 446'
gotoTable[1276] = 412; // 'state 412'
gotoTable[1278] = 412; // 'state 412'
gotoTable[1287] = 412; // 'state 412'
gotoTable[1295] = 412; // 'state 412'
gotoTable[1303] = 412; // 'state 412'
gotoTable[1305] = 412; // 'state 412'
gotoTable[1420] = 20; // 'state 20'
gotoTable[1436] = 21; // 'state 21'
gotoTable[1457] = 88; // 'state 88'
gotoTable[1458] = 413; // 'state 413'
gotoTable[1459] = 414; // 'state 414'
gotoTable[1461] = 23; // 'state 23'
gotoTable[1462] = 415; // 'state 415'
gotoTable.fill(414, 1463, 1474); // 'state 414'
gotoTable.fill(416, 1474, 1476); // 'state 416'
gotoTable[1477] = 97; // 'state 97'
gotoTable[1478] = 451; // 'state 451'
gotoTable[1480] = 413; // 'state 413'
gotoTable[1482] = 413; // 'state 413'
gotoTable.fill(399, 1489, 1491); // 'state 399'
gotoTable[1548] = 67; // 'state 67'
gotoTable[1564] = 68; // 'state 68'
gotoTable[1589] = 67; // 'state 67'
gotoTable[1673] = 71; // 'state 71'
gotoTable[1692] = 72; // 'state 72'
gotoTable[1808] = 77; // 'state 77'
gotoTable[1810] = 449; // 'state 449'
gotoTable[1812] = 450; // 'state 450'
gotoTable[1820] = 78; // 'state 78'
gotoTable[1949] = 98; // 'state 98'
gotoTable[2060] = 20; // 'state 20'
gotoTable[2076] = 21; // 'state 21'
gotoTable[2097] = 91; // 'state 91'
gotoTable[2098] = 413; // 'state 413'
gotoTable[2099] = 414; // 'state 414'
gotoTable[2101] = 23; // 'state 23'
gotoTable[2102] = 415; // 'state 415'
gotoTable.fill(414, 2103, 2114); // 'state 414'
gotoTable.fill(416, 2114, 2116); // 'state 416'
gotoTable[2120] = 413; // 'state 413'
gotoTable[2122] = 413; // 'state 413'
gotoTable.fill(399, 2129, 2131); // 'state 399'
gotoTable[2226] = 399; // 'state 399'
gotoTable[2227] = 95; // 'state 95'
gotoTable[2229] = 399; // 'state 399'
gotoTable[2248] = 399; // 'state 399'
gotoTable[2250] = 399; // 'state 399'
gotoTable.fill(399, 2257, 2259); // 'state 399'
gotoTable[2316] = 20; // 'state 20'
gotoTable[2332] = 21; // 'state 21'
gotoTable[2353] = 93; // 'state 93'
gotoTable[2354] = 413; // 'state 413'
gotoTable[2355] = 414; // 'state 414'
gotoTable[2357] = 23; // 'state 23'
gotoTable[2358] = 415; // 'state 415'
gotoTable.fill(414, 2359, 2370); // 'state 414'
gotoTable.fill(416, 2370, 2372); // 'state 416'
gotoTable[2376] = 413; // 'state 413'
gotoTable[2378] = 413; // 'state 413'
gotoTable.fill(399, 2385, 2387); // 'state 399'
gotoTable[2444] = 20; // 'state 20'
gotoTable[2460] = 21; // 'state 21'
gotoTable[2481] = 92; // 'state 92'
gotoTable[2482] = 413; // 'state 413'
gotoTable[2483] = 414; // 'state 414'
gotoTable[2485] = 23; // 'state 23'
gotoTable[2486] = 415; // 'state 415'
gotoTable.fill(414, 2487, 2498); // 'state 414'
gotoTable.fill(416, 2498, 2500); // 'state 416'
gotoTable[2504] = 413; // 'state 413'
gotoTable[2506] = 413; // 'state 413'
gotoTable.fill(399, 2513, 2515); // 'state 399'
gotoTable[2528] = 417; // 'state 417'
gotoTable.fill(411, 2530, 2539); // 'state 411'
gotoTable[2541] = 411; // 'state 411'
gotoTable.fill(411, 2546, 2550); // 'state 411'
gotoTable[2550] = 412; // 'state 412'
gotoTable[2556] = 412; // 'state 412'
gotoTable[2558] = 412; // 'state 412'
gotoTable[2567] = 412; // 'state 412'
gotoTable[2572] = 20; // 'state 20'
gotoTable[2575] = 412; // 'state 412'
gotoTable[2583] = 412; // 'state 412'
gotoTable[2585] = 412; // 'state 412'
gotoTable[2588] = 21; // 'state 21'
gotoTable[2609] = 22; // 'state 22'
gotoTable[2610] = 413; // 'state 413'
gotoTable[2611] = 414; // 'state 414'
gotoTable[2613] = 23; // 'state 23'
gotoTable[2614] = 415; // 'state 415'
gotoTable.fill(414, 2615, 2626); // 'state 414'
gotoTable.fill(416, 2626, 2628); // 'state 416'
gotoTable[2632] = 413; // 'state 413'
gotoTable[2634] = 413; // 'state 413'
gotoTable.fill(399, 2641, 2643); // 'state 399'
gotoTable[2714] = 448; // 'state 448'
gotoTable[2825] = 67; // 'state 67'
gotoTable[3012] = 434; // 'state 434'
gotoTable[3098] = 448; // 'state 448'
gotoTable[3212] = 20; // 'state 20'
gotoTable[3228] = 21; // 'state 21'
gotoTable[3249] = 106; // 'state 106'
gotoTable[3250] = 413; // 'state 413'
gotoTable[3251] = 414; // 'state 414'
gotoTable[3253] = 23; // 'state 23'
gotoTable[3254] = 415; // 'state 415'
gotoTable.fill(414, 3255, 3266); // 'state 414'
gotoTable.fill(416, 3266, 3268); // 'state 416'
gotoTable[3272] = 413; // 'state 413'
gotoTable[3274] = 413; // 'state 413'
gotoTable.fill(399, 3281, 3283); // 'state 399'
gotoTable[3340] = 20; // 'state 20'
gotoTable[3356] = 21; // 'state 21'
gotoTable[3377] = 101; // 'state 101'
gotoTable[3378] = 413; // 'state 413'
gotoTable[3379] = 414; // 'state 414'
gotoTable[3381] = 23; // 'state 23'
gotoTable[3382] = 415; // 'state 415'
gotoTable.fill(414, 3383, 3394); // 'state 414'
gotoTable.fill(416, 3394, 3396); // 'state 416'
gotoTable[3397] = 97; // 'state 97'
gotoTable[3398] = 451; // 'state 451'
gotoTable[3400] = 413; // 'state 413'
gotoTable[3402] = 413; // 'state 413'
gotoTable.fill(399, 3409, 3411); // 'state 399'
gotoTable[3468] = 67; // 'state 67'
gotoTable[3484] = 68; // 'state 68'
gotoTable[3506] = 424; // 'state 424'
gotoTable[3509] = 67; // 'state 67'
gotoTable[3535] = 100; // 'state 100'
gotoTable[3536] = 424; // 'state 424'
gotoTable[3634] = 424; // 'state 424'
gotoTable[3663] = 100; // 'state 100'
gotoTable[3664] = 424; // 'state 424'
gotoTable[3680] = 456; // 'state 456'
gotoTable.fill(411, 3682, 3691); // 'state 411'
gotoTable[3693] = 411; // 'state 411'
gotoTable.fill(411, 3698, 3702); // 'state 411'
gotoTable[3702] = 412; // 'state 412'
gotoTable[3708] = 412; // 'state 412'
gotoTable[3710] = 412; // 'state 412'
gotoTable[3719] = 412; // 'state 412'
gotoTable[3724] = 20; // 'state 20'
gotoTable[3727] = 412; // 'state 412'
gotoTable[3735] = 412; // 'state 412'
gotoTable[3737] = 412; // 'state 412'
gotoTable[3740] = 21; // 'state 21'
gotoTable[3761] = 22; // 'state 22'
gotoTable[3762] = 413; // 'state 413'
gotoTable[3763] = 414; // 'state 414'
gotoTable[3765] = 23; // 'state 23'
gotoTable[3766] = 415; // 'state 415'
gotoTable.fill(414, 3767, 3778); // 'state 414'
gotoTable.fill(416, 3778, 3780); // 'state 416'
gotoTable[3784] = 413; // 'state 413'
gotoTable[3786] = 413; // 'state 413'
gotoTable.fill(399, 3793, 3795); // 'state 399'
gotoTable[3913] = 461; // 'state 461'
gotoTable[3977] = 104; // 'state 104'
gotoTable[3996] = 105; // 'state 105'
gotoTable[4108] = 20; // 'state 20'
gotoTable[4124] = 21; // 'state 21'
gotoTable[4145] = 107; // 'state 107'
gotoTable[4146] = 413; // 'state 413'
gotoTable[4147] = 414; // 'state 414'
gotoTable[4149] = 23; // 'state 23'
gotoTable[4150] = 415; // 'state 415'
gotoTable.fill(414, 4151, 4162); // 'state 414'
gotoTable.fill(416, 4162, 4164); // 'state 416'
gotoTable[4168] = 413; // 'state 413'
gotoTable[4170] = 413; // 'state 413'
gotoTable.fill(399, 4177, 4179); // 'state 399'
gotoTable[4236] = 20; // 'state 20'
gotoTable[4252] = 21; // 'state 21'
gotoTable[4273] = 108; // 'state 108'
gotoTable[4274] = 413; // 'state 413'
gotoTable[4275] = 414; // 'state 414'
gotoTable[4277] = 23; // 'state 23'
gotoTable[4278] = 415; // 'state 415'
gotoTable.fill(414, 4279, 4290); // 'state 414'
gotoTable.fill(416, 4290, 4292); // 'state 416'
gotoTable[4296] = 413; // 'state 413'
gotoTable[4298] = 413; // 'state 413'
gotoTable.fill(399, 4305, 4307); // 'state 399'
gotoTable[4350] = 109; // 'state 109'
gotoTable[4364] = 20; // 'state 20'
gotoTable[4380] = 21; // 'state 21'
gotoTable[4401] = 111; // 'state 111'
gotoTable[4402] = 413; // 'state 413'
gotoTable[4403] = 414; // 'state 414'
gotoTable[4405] = 23; // 'state 23'
gotoTable[4406] = 415; // 'state 415'
gotoTable.fill(414, 4407, 4418); // 'state 414'
gotoTable.fill(416, 4418, 4420); // 'state 416'
gotoTable[4424] = 413; // 'state 413'
gotoTable[4426] = 413; // 'state 413'
gotoTable.fill(399, 4433, 4435); // 'state 399'
gotoTable[4530] = 465; // 'state 465'
gotoTable[4550] = 423; // 'state 423'
gotoTable[4555] = 29; // 'state 29'
gotoTable.fill(423, 4556, 4559); // 'state 423'
gotoTable[4559] = 30; // 'state 30'
gotoTable[4560] = 424; // 'state 424'
gotoTable[4620] = 67; // 'state 67'
gotoTable[4636] = 68; // 'state 68'
gotoTable[4661] = 67; // 'state 67'
gotoTable[4745] = 71; // 'state 71'
gotoTable[4764] = 72; // 'state 72'
gotoTable[4880] = 77; // 'state 77'
gotoTable[4882] = 449; // 'state 449'
gotoTable[4884] = 450; // 'state 450'
gotoTable[4892] = 78; // 'state 78'
gotoTable[5060] = 434; // 'state 434'
gotoTable[5188] = 434; // 'state 434'
gotoTable[5216] = 421; // 'state 421'
gotoTable[5217] = 28; // 'state 28'
gotoTable.fill(411, 5218, 5227); // 'state 411'
gotoTable[5229] = 411; // 'state 411'
gotoTable.fill(411, 5234, 5238); // 'state 411'
gotoTable[5238] = 412; // 'state 412'
gotoTable[5244] = 412; // 'state 412'
gotoTable[5246] = 412; // 'state 412'
gotoTable[5255] = 412; // 'state 412'
gotoTable[5260] = 20; // 'state 20'
gotoTable[5263] = 412; // 'state 412'
gotoTable[5271] = 412; // 'state 412'
gotoTable[5273] = 412; // 'state 412'
gotoTable[5276] = 21; // 'state 21'
gotoTable[5297] = 22; // 'state 22'
gotoTable[5298] = 413; // 'state 413'
gotoTable[5299] = 414; // 'state 414'
gotoTable[5301] = 23; // 'state 23'
gotoTable[5302] = 415; // 'state 415'
gotoTable.fill(414, 5303, 5314); // 'state 414'
gotoTable.fill(416, 5314, 5316); // 'state 416'
gotoTable[5320] = 413; // 'state 413'
gotoTable[5322] = 413; // 'state 413'
gotoTable.fill(399, 5329, 5331); // 'state 399'
gotoTable[5355] = 118; // 'state 118'
gotoTable[5356] = 467; // 'state 467'
gotoTable[5516] = 20; // 'state 20'
gotoTable[5532] = 21; // 'state 21'
gotoTable[5553] = 119; // 'state 119'
gotoTable[5554] = 413; // 'state 413'
gotoTable[5555] = 414; // 'state 414'
gotoTable[5557] = 23; // 'state 23'
gotoTable[5558] = 415; // 'state 415'
gotoTable.fill(414, 5559, 5570); // 'state 414'
gotoTable.fill(416, 5570, 5572); // 'state 416'
gotoTable[5576] = 413; // 'state 413'
gotoTable[5578] = 413; // 'state 413'
gotoTable.fill(399, 5585, 5587); // 'state 399'
gotoTable[5644] = 20; // 'state 20'
gotoTable[5660] = 21; // 'state 21'
gotoTable[5681] = 88; // 'state 88'
gotoTable[5682] = 413; // 'state 413'
gotoTable[5683] = 414; // 'state 414'
gotoTable[5685] = 23; // 'state 23'
gotoTable[5686] = 415; // 'state 415'
gotoTable.fill(414, 5687, 5698); // 'state 414'
gotoTable.fill(416, 5698, 5700); // 'state 416'
gotoTable[5701] = 138; // 'state 138'
gotoTable[5702] = 451; // 'state 451'
gotoTable[5704] = 413; // 'state 413'
gotoTable[5706] = 413; // 'state 413'
gotoTable.fill(399, 5713, 5715); // 'state 399'
gotoTable[5772] = 20; // 'state 20'
gotoTable[5788] = 21; // 'state 21'
gotoTable[5809] = 127; // 'state 127'
gotoTable[5810] = 413; // 'state 413'
gotoTable[5811] = 414; // 'state 414'
gotoTable[5813] = 23; // 'state 23'
gotoTable[5814] = 415; // 'state 415'
gotoTable.fill(414, 5815, 5826); // 'state 414'
gotoTable.fill(416, 5826, 5828); // 'state 416'
gotoTable[5832] = 413; // 'state 413'
gotoTable[5834] = 413; // 'state 413'
gotoTable.fill(399, 5841, 5843); // 'state 399'
gotoTable[5900] = 20; // 'state 20'
gotoTable[5916] = 21; // 'state 21'
gotoTable[5937] = 130; // 'state 130'
gotoTable[5938] = 413; // 'state 413'
gotoTable[5939] = 414; // 'state 414'
gotoTable[5941] = 23; // 'state 23'
gotoTable[5942] = 415; // 'state 415'
gotoTable.fill(414, 5943, 5954); // 'state 414'
gotoTable.fill(416, 5954, 5956); // 'state 416'
gotoTable[5960] = 413; // 'state 413'
gotoTable[5962] = 413; // 'state 413'
gotoTable.fill(399, 5969, 5971); // 'state 399'
gotoTable[6028] = 473; // 'state 473'
gotoTable[6044] = 136; // 'state 136'
gotoTable[6047] = 474; // 'state 474'
gotoTable.fill(475, 6048, 6051); // 'state 475'
gotoTable[6051] = 476; // 'state 476'
gotoTable.fill(471, 6052, 6056); // 'state 471'
gotoTable[6056] = 477; // 'state 477'
gotoTable.fill(471, 6057, 6059); // 'state 471'
gotoTable[6060] = 471; // 'state 471'
gotoTable[6156] = 20; // 'state 20'
gotoTable[6172] = 21; // 'state 21'
gotoTable[6193] = 139; // 'state 139'
gotoTable[6194] = 413; // 'state 413'
gotoTable[6195] = 414; // 'state 414'
gotoTable[6197] = 23; // 'state 23'
gotoTable[6198] = 415; // 'state 415'
gotoTable.fill(414, 6199, 6210); // 'state 414'
gotoTable.fill(416, 6210, 6212); // 'state 416'
gotoTable[6216] = 413; // 'state 413'
gotoTable[6218] = 413; // 'state 413'
gotoTable.fill(399, 6225, 6227); // 'state 399'
gotoTable[6284] = 20; // 'state 20'
gotoTable[6300] = 21; // 'state 21'
gotoTable[6321] = 123; // 'state 123'
gotoTable[6322] = 413; // 'state 413'
gotoTable[6323] = 414; // 'state 414'
gotoTable[6325] = 23; // 'state 23'
gotoTable[6326] = 415; // 'state 415'
gotoTable.fill(414, 6327, 6338); // 'state 414'
gotoTable.fill(416, 6338, 6340); // 'state 416'
gotoTable[6344] = 413; // 'state 413'
gotoTable[6346] = 413; // 'state 413'
gotoTable.fill(399, 6353, 6355); // 'state 399'
gotoTable[6412] = 20; // 'state 20'
gotoTable[6428] = 21; // 'state 21'
gotoTable[6449] = 125; // 'state 125'
gotoTable[6450] = 413; // 'state 413'
gotoTable[6451] = 414; // 'state 414'
gotoTable[6453] = 23; // 'state 23'
gotoTable[6454] = 415; // 'state 415'
gotoTable.fill(414, 6455, 6466); // 'state 414'
gotoTable.fill(416, 6466, 6468); // 'state 416'
gotoTable[6472] = 413; // 'state 413'
gotoTable[6474] = 413; // 'state 413'
gotoTable.fill(399, 6481, 6483); // 'state 399'
gotoTable[6540] = 20; // 'state 20'
gotoTable[6556] = 21; // 'state 21'
gotoTable[6577] = 120; // 'state 120'
gotoTable[6578] = 413; // 'state 413'
gotoTable[6579] = 414; // 'state 414'
gotoTable[6581] = 23; // 'state 23'
gotoTable[6582] = 415; // 'state 415'
gotoTable.fill(414, 6583, 6594); // 'state 414'
gotoTable.fill(416, 6594, 6596); // 'state 416'
gotoTable[6600] = 413; // 'state 413'
gotoTable[6602] = 413; // 'state 413'
gotoTable.fill(399, 6609, 6611); // 'state 399'
gotoTable[6668] = 20; // 'state 20'
gotoTable[6684] = 21; // 'state 21'
gotoTable[6705] = 121; // 'state 121'
gotoTable[6706] = 413; // 'state 413'
gotoTable[6707] = 414; // 'state 414'
gotoTable[6709] = 23; // 'state 23'
gotoTable[6710] = 415; // 'state 415'
gotoTable.fill(414, 6711, 6722); // 'state 414'
gotoTable.fill(416, 6722, 6724); // 'state 416'
gotoTable[6728] = 413; // 'state 413'
gotoTable[6730] = 413; // 'state 413'
gotoTable.fill(399, 6737, 6739); // 'state 399'
gotoTable[6796] = 20; // 'state 20'
gotoTable[6812] = 21; // 'state 21'
gotoTable[6833] = 122; // 'state 122'
gotoTable[6834] = 413; // 'state 413'
gotoTable[6835] = 414; // 'state 414'
gotoTable[6837] = 23; // 'state 23'
gotoTable[6838] = 415; // 'state 415'
gotoTable.fill(414, 6839, 6850); // 'state 414'
gotoTable.fill(416, 6850, 6852); // 'state 416'
gotoTable[6856] = 413; // 'state 413'
gotoTable[6858] = 413; // 'state 413'
gotoTable.fill(399, 6865, 6867); // 'state 399'
gotoTable[6924] = 20; // 'state 20'
gotoTable[6940] = 21; // 'state 21'
gotoTable[6961] = 124; // 'state 124'
gotoTable[6962] = 413; // 'state 413'
gotoTable[6963] = 414; // 'state 414'
gotoTable[6965] = 23; // 'state 23'
gotoTable[6966] = 415; // 'state 415'
gotoTable.fill(414, 6967, 6978); // 'state 414'
gotoTable.fill(416, 6978, 6980); // 'state 416'
gotoTable[6984] = 413; // 'state 413'
gotoTable[6986] = 413; // 'state 413'
gotoTable.fill(399, 6993, 6995); // 'state 399'
gotoTable[7052] = 20; // 'state 20'
gotoTable[7068] = 21; // 'state 21'
gotoTable[7089] = 129; // 'state 129'
gotoTable[7090] = 413; // 'state 413'
gotoTable[7091] = 414; // 'state 414'
gotoTable[7093] = 23; // 'state 23'
gotoTable[7094] = 415; // 'state 415'
gotoTable.fill(414, 7095, 7106); // 'state 414'
gotoTable.fill(416, 7106, 7108); // 'state 416'
gotoTable[7112] = 413; // 'state 413'
gotoTable[7114] = 413; // 'state 413'
gotoTable.fill(399, 7121, 7123); // 'state 399'
gotoTable[7236] = 479; // 'state 479'
gotoTable[7308] = 20; // 'state 20'
gotoTable[7324] = 21; // 'state 21'
gotoTable[7345] = 126; // 'state 126'
gotoTable[7346] = 413; // 'state 413'
gotoTable[7347] = 414; // 'state 414'
gotoTable[7349] = 23; // 'state 23'
gotoTable[7350] = 415; // 'state 415'
gotoTable.fill(414, 7351, 7362); // 'state 414'
gotoTable.fill(416, 7362, 7364); // 'state 416'
gotoTable[7368] = 413; // 'state 413'
gotoTable[7370] = 413; // 'state 413'
gotoTable.fill(399, 7377, 7379); // 'state 399'
gotoTable[7436] = 20; // 'state 20'
gotoTable[7452] = 21; // 'state 21'
gotoTable[7473] = 128; // 'state 128'
gotoTable[7474] = 413; // 'state 413'
gotoTable[7475] = 414; // 'state 414'
gotoTable[7477] = 23; // 'state 23'
gotoTable[7478] = 415; // 'state 415'
gotoTable.fill(414, 7479, 7490); // 'state 414'
gotoTable.fill(416, 7490, 7492); // 'state 416'
gotoTable[7496] = 413; // 'state 413'
gotoTable[7498] = 413; // 'state 413'
gotoTable.fill(399, 7505, 7507); // 'state 399'
gotoTable[7547] = 141; // 'state 141'
gotoTable[7687] = 489; // 'state 489'
gotoTable[7692] = 20; // 'state 20'
gotoTable[7695] = 489; // 'state 489'
gotoTable[7708] = 21; // 'state 21'
gotoTable[7729] = 144; // 'state 144'
gotoTable[7730] = 413; // 'state 413'
gotoTable[7731] = 414; // 'state 414'
gotoTable[7733] = 23; // 'state 23'
gotoTable[7734] = 415; // 'state 415'
gotoTable.fill(414, 7735, 7746); // 'state 414'
gotoTable.fill(416, 7746, 7748); // 'state 416'
gotoTable[7752] = 413; // 'state 413'
gotoTable[7754] = 413; // 'state 413'
gotoTable.fill(399, 7761, 7763); // 'state 399'
gotoTable[7797] = 487; // 'state 487'
gotoTable[7798] = 412; // 'state 412'
gotoTable[7804] = 412; // 'state 412'
gotoTable[7806] = 412; // 'state 412'
gotoTable[7815] = 412; // 'state 412'
gotoTable[7823] = 412; // 'state 412'
gotoTable[7831] = 412; // 'state 412'
gotoTable[7833] = 412; // 'state 412'
gotoTable[7939] = 148; // 'state 148'
gotoTable[7986] = 424; // 'state 424'
gotoTable[8015] = 497; // 'state 497'
gotoTable[8016] = 424; // 'state 424'
gotoTable[8064] = 499; // 'state 499'
gotoTable[8066] = 447; // 'state 447'
gotoTable[8069] = 447; // 'state 447'
gotoTable[8070] = 151; // 'state 151'
gotoTable[8189] = 493; // 'state 493'
gotoTable[8346] = 494; // 'state 494'
gotoTable[8460] = 20; // 'state 20'
gotoTable[8461] = 87; // 'state 87'
gotoTable[8476] = 21; // 'state 21'
gotoTable[8497] = 88; // 'state 88'
gotoTable[8498] = 413; // 'state 413'
gotoTable[8499] = 414; // 'state 414'
gotoTable[8501] = 23; // 'state 23'
gotoTable[8502] = 415; // 'state 415'
gotoTable.fill(414, 8503, 8514); // 'state 414'
gotoTable.fill(416, 8514, 8516); // 'state 416'
gotoTable[8517] = 89; // 'state 89'
gotoTable[8518] = 451; // 'state 451'
gotoTable[8520] = 90; // 'state 90'
gotoTable[8522] = 90; // 'state 90'
gotoTable.fill(399, 8529, 8531); // 'state 399'
gotoTable[8585] = 153; // 'state 153'
gotoTable[8604] = 154; // 'state 154'
gotoTable[8730] = 500; // 'state 500'
gotoTable[8841] = 156; // 'state 156'
gotoTable[8960] = 161; // 'state 161'
gotoTable[8962] = 447; // 'state 447'
gotoTable[8965] = 447; // 'state 447'
gotoTable[8970] = 162; // 'state 162'
gotoTable[8974] = 163; // 'state 163'
gotoTable[9097] = 157; // 'state 157'
gotoTable[9116] = 158; // 'state 158'
gotoTable[9186] = 501; // 'state 501'
gotoTable[9242] = 159; // 'state 159'
gotoTable[9353] = 153; // 'state 153'
gotoTable[9486] = 170; // 'state 170'
gotoTable[9491] = 171; // 'state 171'
gotoTable.fill(508, 9493, 9495); // 'state 508'
gotoTable[9522] = 424; // 'state 424'
gotoTable[9551] = 169; // 'state 169'
gotoTable[9552] = 424; // 'state 424'
gotoTable[9612] = 20; // 'state 20'
gotoTable[9628] = 21; // 'state 21'
gotoTable[9649] = 167; // 'state 167'
gotoTable[9650] = 413; // 'state 413'
gotoTable[9651] = 414; // 'state 414'
gotoTable[9653] = 23; // 'state 23'
gotoTable[9654] = 415; // 'state 415'
gotoTable.fill(414, 9655, 9666); // 'state 414'
gotoTable.fill(416, 9666, 9668); // 'state 416'
gotoTable[9672] = 413; // 'state 413'
gotoTable[9674] = 413; // 'state 413'
gotoTable.fill(399, 9681, 9683); // 'state 399'
gotoTable[9740] = 473; // 'state 473'
gotoTable[9756] = 136; // 'state 136'
gotoTable[9759] = 168; // 'state 168'
gotoTable.fill(475, 9760, 9763); // 'state 475'
gotoTable[9763] = 476; // 'state 476'
gotoTable.fill(471, 9764, 9768); // 'state 471'
gotoTable[9768] = 477; // 'state 477'
gotoTable.fill(471, 9769, 9771); // 'state 471'
gotoTable[9772] = 471; // 'state 471'
gotoTable[9872] = 164; // 'state 164'
gotoTable[9874] = 449; // 'state 449'
gotoTable[9876] = 505; // 'state 505'
gotoTable[9884] = 165; // 'state 165'
gotoTable[10004] = 506; // 'state 506'
gotoTable[10128] = 166; // 'state 166'
gotoTable[10130] = 449; // 'state 449'
gotoTable[10132] = 506; // 'state 506'
gotoTable[10264] = 173; // 'state 173'
gotoTable[10268] = 174; // 'state 174'
gotoTable[10284] = 511; // 'state 511'
gotoTable[10396] = 512; // 'state 512'
gotoTable[10466] = 513; // 'state 513'
gotoTable[10508] = 20; // 'state 20'
gotoTable[10524] = 21; // 'state 21'
gotoTable[10545] = 176; // 'state 176'
gotoTable[10546] = 413; // 'state 413'
gotoTable[10547] = 414; // 'state 414'
gotoTable[10549] = 23; // 'state 23'
gotoTable[10550] = 415; // 'state 415'
gotoTable.fill(414, 10551, 10562); // 'state 414'
gotoTable.fill(416, 10562, 10564); // 'state 416'
gotoTable[10568] = 413; // 'state 413'
gotoTable[10570] = 413; // 'state 413'
gotoTable.fill(399, 10577, 10579); // 'state 399'
gotoTable[10636] = 473; // 'state 473'
gotoTable[10652] = 136; // 'state 136'
gotoTable[10655] = 514; // 'state 514'
gotoTable.fill(475, 10656, 10659); // 'state 475'
gotoTable[10659] = 476; // 'state 476'
gotoTable.fill(471, 10660, 10664); // 'state 471'
gotoTable[10664] = 477; // 'state 477'
gotoTable.fill(471, 10665, 10667); // 'state 471'
gotoTable[10668] = 471; // 'state 471'
gotoTable[10764] = 20; // 'state 20'
gotoTable[10780] = 21; // 'state 21'
gotoTable[10801] = 177; // 'state 177'
gotoTable[10802] = 413; // 'state 413'
gotoTable[10803] = 414; // 'state 414'
gotoTable[10805] = 23; // 'state 23'
gotoTable[10806] = 415; // 'state 415'
gotoTable.fill(414, 10807, 10818); // 'state 414'
gotoTable.fill(416, 10818, 10820); // 'state 416'
gotoTable[10824] = 413; // 'state 413'
gotoTable[10826] = 413; // 'state 413'
gotoTable.fill(399, 10833, 10835); // 'state 399'
gotoTable[10892] = 20; // 'state 20'
gotoTable[10908] = 21; // 'state 21'
gotoTable[10929] = 178; // 'state 178'
gotoTable[10930] = 413; // 'state 413'
gotoTable[10931] = 414; // 'state 414'
gotoTable[10933] = 23; // 'state 23'
gotoTable[10934] = 415; // 'state 415'
gotoTable.fill(414, 10935, 10946); // 'state 414'
gotoTable.fill(416, 10946, 10948); // 'state 416'
gotoTable[10952] = 413; // 'state 413'
gotoTable[10954] = 413; // 'state 413'
gotoTable.fill(399, 10961, 10963); // 'state 399'
gotoTable[11020] = 20; // 'state 20'
gotoTable[11036] = 21; // 'state 21'
gotoTable[11057] = 106; // 'state 106'
gotoTable[11058] = 413; // 'state 413'
gotoTable[11059] = 414; // 'state 414'
gotoTable[11061] = 23; // 'state 23'
gotoTable[11062] = 415; // 'state 415'
gotoTable.fill(414, 11063, 11074); // 'state 414'
gotoTable.fill(416, 11074, 11076); // 'state 416'
gotoTable[11080] = 181; // 'state 181'
gotoTable[11082] = 181; // 'state 181'
gotoTable.fill(399, 11089, 11091); // 'state 399'
gotoTable[11162] = 517; // 'state 517'
gotoTable[11275] = 519; // 'state 519'
gotoTable[11460] = 434; // 'state 434'
gotoTable[11572] = 516; // 'state 516'
gotoTable[11674] = 517; // 'state 517'
gotoTable[11844] = 434; // 'state 434'
gotoTable[11972] = 434; // 'state 434'
gotoTable[12100] = 434; // 'state 434'
gotoTable[12172] = 20; // 'state 20'
gotoTable[12188] = 21; // 'state 21'
gotoTable[12209] = 88; // 'state 88'
gotoTable[12210] = 413; // 'state 413'
gotoTable[12211] = 414; // 'state 414'
gotoTable[12213] = 23; // 'state 23'
gotoTable[12214] = 415; // 'state 415'
gotoTable.fill(414, 12215, 12226); // 'state 414'
gotoTable.fill(416, 12226, 12228); // 'state 416'
gotoTable[12229] = 89; // 'state 89'
gotoTable[12230] = 451; // 'state 451'
gotoTable[12232] = 413; // 'state 413'
gotoTable[12234] = 413; // 'state 413'
gotoTable.fill(399, 12241, 12243); // 'state 399'
gotoTable[12318] = 184; // 'state 184'
gotoTable[12356] = 520; // 'state 520'
gotoTable[12428] = 20; // 'state 20'
gotoTable[12444] = 21; // 'state 21'
gotoTable[12465] = 88; // 'state 88'
gotoTable[12466] = 413; // 'state 413'
gotoTable[12467] = 414; // 'state 414'
gotoTable[12469] = 23; // 'state 23'
gotoTable[12470] = 415; // 'state 415'
gotoTable.fill(414, 12471, 12482); // 'state 414'
gotoTable.fill(416, 12482, 12484); // 'state 416'
gotoTable[12485] = 185; // 'state 185'
gotoTable[12486] = 451; // 'state 451'
gotoTable[12488] = 413; // 'state 413'
gotoTable[12490] = 413; // 'state 413'
gotoTable.fill(399, 12497, 12499); // 'state 399'
gotoTable[12615] = 522; // 'state 522'
gotoTable[12699] = 524; // 'state 524'
gotoTable[12812] = 20; // 'state 20'
gotoTable[12828] = 21; // 'state 21'
gotoTable[12849] = 192; // 'state 192'
gotoTable[12850] = 413; // 'state 413'
gotoTable[12851] = 414; // 'state 414'
gotoTable[12853] = 23; // 'state 23'
gotoTable[12854] = 415; // 'state 415'
gotoTable.fill(414, 12855, 12866); // 'state 414'
gotoTable.fill(416, 12866, 12868); // 'state 416'
gotoTable[12872] = 413; // 'state 413'
gotoTable[12874] = 413; // 'state 413'
gotoTable.fill(399, 12881, 12883); // 'state 399'
gotoTable[12937] = 190; // 'state 190'
gotoTable[12956] = 191; // 'state 191'
gotoTable[13124] = 434; // 'state 434'
gotoTable[13234] = 465; // 'state 465'
gotoTable[13254] = 423; // 'state 423'
gotoTable[13259] = 527; // 'state 527'
gotoTable.fill(423, 13260, 13263); // 'state 423'
gotoTable[13263] = 30; // 'state 30'
gotoTable[13264] = 424; // 'state 424'
gotoTable[13324] = 20; // 'state 20'
gotoTable[13340] = 21; // 'state 21'
gotoTable[13361] = 194; // 'state 194'
gotoTable[13362] = 413; // 'state 413'
gotoTable[13363] = 414; // 'state 414'
gotoTable[13365] = 23; // 'state 23'
gotoTable[13366] = 415; // 'state 415'
gotoTable.fill(414, 13367, 13378); // 'state 414'
gotoTable.fill(416, 13378, 13380); // 'state 416'
gotoTable[13384] = 413; // 'state 413'
gotoTable[13386] = 413; // 'state 413'
gotoTable.fill(399, 13393, 13395); // 'state 399'
gotoTable[13410] = 528; // 'state 528'
gotoTable[13466] = 195; // 'state 195'
gotoTable[13577] = 190; // 'state 190'
gotoTable[13764] = 434; // 'state 434'
gotoTable[13892] = 434; // 'state 434'
gotoTable[14020] = 434; // 'state 434'
gotoTable[14092] = 20; // 'state 20'
gotoTable[14108] = 21; // 'state 21'
gotoTable[14129] = 200; // 'state 200'
gotoTable[14130] = 413; // 'state 413'
gotoTable[14131] = 414; // 'state 414'
gotoTable[14133] = 23; // 'state 23'
gotoTable[14134] = 415; // 'state 415'
gotoTable.fill(414, 14135, 14146); // 'state 414'
gotoTable.fill(416, 14146, 14148); // 'state 416'
gotoTable[14152] = 413; // 'state 413'
gotoTable[14154] = 413; // 'state 413'
gotoTable.fill(399, 14161, 14163); // 'state 399'
gotoTable[14207] = 63; // 'state 63'
gotoTable[14208] = 201; // 'state 201'
gotoTable[14210] = 447; // 'state 447'
gotoTable[14213] = 447; // 'state 447'
gotoTable[14404] = 434; // 'state 434'
gotoTable[14473] = 153; // 'state 153'
gotoTable[14492] = 154; // 'state 154'
gotoTable[14642] = 424; // 'state 424'
gotoTable[14671] = 100; // 'state 100'
gotoTable[14672] = 424; // 'state 424'
gotoTable[14729] = 153; // 'state 153'
gotoTable[14748] = 154; // 'state 154'
gotoTable[14864] = 166; // 'state 166'
gotoTable[14866] = 449; // 'state 449'
gotoTable[14868] = 506; // 'state 506'
gotoTable[14876] = 204; // 'state 204'
gotoTable[14946] = 530; // 'state 530'
gotoTable[15074] = 531; // 'state 531'
gotoTable[15212] = 529; // 'state 529'
gotoTable[15428] = 434; // 'state 434'
gotoTable[15556] = 434; // 'state 434'
gotoTable[15684] = 434; // 'state 434'
gotoTable[15812] = 434; // 'state 434'
gotoTable[15940] = 434; // 'state 434'
gotoTable[16068] = 434; // 'state 434'
gotoTable[16196] = 434; // 'state 434'
gotoTable[16324] = 434; // 'state 434'
gotoTable[16452] = 434; // 'state 434'
gotoTable[16580] = 434; // 'state 434'
gotoTable[16708] = 434; // 'state 434'
gotoTable[16836] = 434; // 'state 434'
gotoTable[16939] = 221; // 'state 221'
gotoTable.fill(538, 16941, 16945); // 'state 538'
gotoTable[16946] = 424; // 'state 424'
gotoTable[16975] = 222; // 'state 222'
gotoTable[16976] = 424; // 'state 424'
gotoTable[17036] = 473; // 'state 473'
gotoTable[17037] = 87; // 'state 87'
gotoTable[17052] = 136; // 'state 136'
gotoTable[17055] = 534; // 'state 534'
gotoTable.fill(475, 17056, 17059); // 'state 475'
gotoTable[17059] = 476; // 'state 476'
gotoTable.fill(471, 17060, 17064); // 'state 471'
gotoTable[17064] = 477; // 'state 477'
gotoTable.fill(471, 17065, 17067); // 'state 471'
gotoTable[17068] = 471; // 'state 471'
gotoTable[17096] = 214; // 'state 214'
gotoTable[17098] = 214; // 'state 214'
gotoTable[17164] = 473; // 'state 473'
gotoTable[17180] = 136; // 'state 136'
gotoTable[17183] = 217; // 'state 217'
gotoTable.fill(475, 17184, 17187); // 'state 475'
gotoTable[17187] = 476; // 'state 476'
gotoTable.fill(471, 17188, 17192); // 'state 471'
gotoTable[17192] = 477; // 'state 477'
gotoTable.fill(471, 17193, 17195); // 'state 471'
gotoTable[17196] = 471; // 'state 471'
gotoTable[17292] = 473; // 'state 473'
gotoTable[17308] = 136; // 'state 136'
gotoTable[17311] = 532; // 'state 532'
gotoTable.fill(475, 17312, 17315); // 'state 475'
gotoTable[17315] = 476; // 'state 476'
gotoTable.fill(471, 17316, 17320); // 'state 471'
gotoTable[17320] = 477; // 'state 477'
gotoTable.fill(471, 17321, 17323); // 'state 471'
gotoTable[17324] = 471; // 'state 471'
gotoTable[17438] = 535; // 'state 535'
gotoTable[17545] = 533; // 'state 533'
gotoTable[17548] = 533; // 'state 533'
gotoTable[17676] = 20; // 'state 20'
gotoTable[17692] = 21; // 'state 21'
gotoTable[17713] = 223; // 'state 223'
gotoTable[17714] = 413; // 'state 413'
gotoTable[17715] = 414; // 'state 414'
gotoTable[17717] = 23; // 'state 23'
gotoTable[17718] = 415; // 'state 415'
gotoTable.fill(414, 17719, 17730); // 'state 414'
gotoTable.fill(416, 17730, 17732); // 'state 416'
gotoTable[17736] = 413; // 'state 413'
gotoTable[17738] = 413; // 'state 413'
gotoTable.fill(399, 17745, 17747); // 'state 399'
gotoTable[17844] = 541; // 'state 541'
gotoTable[17988] = 434; // 'state 434'
gotoTable[18040] = 544; // 'state 544'
gotoTable[18042] = 544; // 'state 544'
gotoTable[18169] = 546; // 'state 546'
gotoTable[18313] = 227; // 'state 227'
gotoTable[18332] = 228; // 'state 228'
gotoTable[18448] = 229; // 'state 229'
gotoTable[18450] = 449; // 'state 449'
gotoTable[18452] = 550; // 'state 550'
gotoTable[18460] = 230; // 'state 230'
gotoTable[18628] = 434; // 'state 434'
gotoTable[18687] = 555; // 'state 555'
gotoTable[18688] = 64; // 'state 64'
gotoTable[18690] = 447; // 'state 447'
gotoTable[18693] = 447; // 'state 447'
gotoTable[18828] = 20; // 'state 20'
gotoTable[18844] = 21; // 'state 21'
gotoTable[18865] = 233; // 'state 233'
gotoTable[18866] = 413; // 'state 413'
gotoTable[18867] = 414; // 'state 414'
gotoTable[18869] = 23; // 'state 23'
gotoTable[18870] = 415; // 'state 415'
gotoTable.fill(414, 18871, 18882); // 'state 414'
gotoTable.fill(416, 18882, 18884); // 'state 416'
gotoTable[18888] = 413; // 'state 413'
gotoTable[18890] = 413; // 'state 413'
gotoTable.fill(399, 18897, 18899); // 'state 399'
gotoTable[18944] = 558; // 'state 558'
gotoTable[18946] = 447; // 'state 447'
gotoTable[18949] = 447; // 'state 447'
gotoTable[19073] = 557; // 'state 557'
gotoTable[19200] = 499; // 'state 499'
gotoTable[19202] = 447; // 'state 447'
gotoTable[19205] = 447; // 'state 447'
gotoTable[19206] = 237; // 'state 237'
gotoTable[19328] = 561; // 'state 561'
gotoTable[19330] = 447; // 'state 447'
gotoTable[19333] = 447; // 'state 447'
gotoTable[19460] = 560; // 'state 560'
gotoTable[19593] = 240; // 'state 240'
gotoTable[19612] = 241; // 'state 241'
gotoTable[19682] = 562; // 'state 562'
gotoTable[19738] = 243; // 'state 243'
gotoTable[19849] = 242; // 'state 242'
gotoTable[19938] = 563; // 'state 563'
gotoTable[19980] = 20; // 'state 20'
gotoTable[19996] = 21; // 'state 21'
gotoTable[20017] = 244; // 'state 244'
gotoTable[20018] = 413; // 'state 413'
gotoTable[20019] = 414; // 'state 414'
gotoTable[20021] = 23; // 'state 23'
gotoTable[20022] = 415; // 'state 415'
gotoTable.fill(414, 20023, 20034); // 'state 414'
gotoTable.fill(416, 20034, 20036); // 'state 416'
gotoTable[20040] = 413; // 'state 413'
gotoTable[20042] = 413; // 'state 413'
gotoTable.fill(399, 20049, 20051); // 'state 399'
gotoTable[20122] = 564; // 'state 564'
gotoTable[20194] = 566; // 'state 566'
gotoTable[20250] = 246; // 'state 246'
gotoTable[20361] = 240; // 'state 240'
gotoTable[20450] = 562; // 'state 562'
gotoTable[20608] = 250; // 'state 250'
gotoTable[20610] = 447; // 'state 447'
gotoTable[20613] = 447; // 'state 447'
gotoTable[20762] = 571; // 'state 571'
gotoTable[20872] = 568; // 'state 568'
gotoTable[20992] = 248; // 'state 248'
gotoTable[20994] = 447; // 'state 447'
gotoTable[20997] = 447; // 'state 447'
gotoTable[21140] = 572; // 'state 572'
gotoTable[21264] = 251; // 'state 251'
gotoTable[21266] = 449; // 'state 449'
gotoTable[21268] = 572; // 'state 572'
gotoTable[21396] = 574; // 'state 574'
gotoTable[21522] = 575; // 'state 575'
gotoTable[21572] = 434; // 'state 434'
gotoTable[21649] = 576; // 'state 576'
gotoTable[21769] = 257; // 'state 257'
gotoTable[21786] = 581; // 'state 581'
gotoTable[21788] = 258; // 'state 258'
gotoTable[21938] = 424; // 'state 424'
gotoTable[21967] = 255; // 'state 255'
gotoTable[21968] = 424; // 'state 424'
gotoTable[22030] = 170; // 'state 170'
gotoTable.fill(578, 22037, 22039); // 'state 578'
gotoTable[22066] = 424; // 'state 424'
gotoTable[22095] = 169; // 'state 169'
gotoTable[22096] = 424; // 'state 424'
gotoTable[22156] = 473; // 'state 473'
gotoTable[22172] = 136; // 'state 136'
gotoTable[22175] = 260; // 'state 260'
gotoTable.fill(475, 22176, 22179); // 'state 475'
gotoTable[22179] = 476; // 'state 476'
gotoTable.fill(471, 22180, 22184); // 'state 471'
gotoTable[22184] = 477; // 'state 477'
gotoTable.fill(471, 22185, 22187); // 'state 471'
gotoTable[22188] = 471; // 'state 471'
gotoTable[22316] = 582; // 'state 582'
gotoTable[22424] = 259; // 'state 259'
gotoTable[22444] = 582; // 'state 582'
gotoTable[22540] = 473; // 'state 473'
gotoTable[22556] = 136; // 'state 136'
gotoTable[22559] = 583; // 'state 583'
gotoTable.fill(475, 22560, 22563); // 'state 475'
gotoTable[22563] = 476; // 'state 476'
gotoTable.fill(471, 22564, 22568); // 'state 471'
gotoTable[22568] = 477; // 'state 477'
gotoTable.fill(471, 22569, 22571); // 'state 471'
gotoTable[22572] = 471; // 'state 471'
gotoTable[22724] = 434; // 'state 434'
gotoTable[22852] = 434; // 'state 434'
gotoTable[22980] = 434; // 'state 434'
gotoTable[23052] = 20; // 'state 20'
gotoTable[23068] = 21; // 'state 21'
gotoTable[23089] = 88; // 'state 88'
gotoTable[23090] = 413; // 'state 413'
gotoTable[23091] = 414; // 'state 414'
gotoTable[23093] = 23; // 'state 23'
gotoTable[23094] = 415; // 'state 415'
gotoTable.fill(414, 23095, 23106); // 'state 414'
gotoTable.fill(416, 23106, 23108); // 'state 416'
gotoTable[23109] = 585; // 'state 585'
gotoTable[23110] = 451; // 'state 451'
gotoTable[23112] = 413; // 'state 413'
gotoTable[23114] = 413; // 'state 413'
gotoTable.fill(399, 23121, 23123); // 'state 399'
gotoTable[23194] = 586; // 'state 586'
gotoTable[23322] = 586; // 'state 586'
gotoTable[23436] = 20; // 'state 20'
gotoTable[23437] = 588; // 'state 588'
gotoTable[23452] = 21; // 'state 21'
gotoTable[23473] = 88; // 'state 88'
gotoTable[23474] = 413; // 'state 413'
gotoTable[23475] = 414; // 'state 414'
gotoTable[23477] = 23; // 'state 23'
gotoTable[23478] = 415; // 'state 415'
gotoTable.fill(414, 23479, 23490); // 'state 414'
gotoTable.fill(416, 23490, 23492); // 'state 416'
gotoTable[23493] = 588; // 'state 588'
gotoTable[23494] = 451; // 'state 451'
gotoTable[23496] = 90; // 'state 90'
gotoTable[23498] = 90; // 'state 90'
gotoTable.fill(399, 23505, 23507); // 'state 399'
gotoTable[23564] = 473; // 'state 473'
gotoTable[23580] = 136; // 'state 136'
gotoTable[23583] = 265; // 'state 265'
gotoTable.fill(475, 23584, 23587); // 'state 475'
gotoTable[23587] = 476; // 'state 476'
gotoTable.fill(471, 23588, 23592); // 'state 471'
gotoTable[23592] = 477; // 'state 477'
gotoTable.fill(471, 23593, 23595); // 'state 471'
gotoTable[23596] = 471; // 'state 471'
gotoTable[23748] = 589; // 'state 589'
gotoTable[23879] = 591; // 'state 591'
gotoTable[23948] = 20; // 'state 20'
gotoTable[23964] = 21; // 'state 21'
gotoTable[23985] = 88; // 'state 88'
gotoTable[23986] = 413; // 'state 413'
gotoTable[23987] = 414; // 'state 414'
gotoTable[23989] = 23; // 'state 23'
gotoTable[23990] = 415; // 'state 415'
gotoTable.fill(414, 23991, 24002); // 'state 414'
gotoTable.fill(416, 24002, 24004); // 'state 416'
gotoTable[24005] = 592; // 'state 592'
gotoTable[24006] = 451; // 'state 451'
gotoTable[24008] = 413; // 'state 413'
gotoTable[24010] = 413; // 'state 413'
gotoTable.fill(399, 24017, 24019); // 'state 399'
gotoTable[24093] = 594; // 'state 594'
gotoTable[24204] = 473; // 'state 473'
gotoTable[24220] = 136; // 'state 136'
gotoTable[24223] = 596; // 'state 596'
gotoTable.fill(475, 24224, 24227); // 'state 475'
gotoTable[24227] = 476; // 'state 476'
gotoTable.fill(471, 24228, 24232); // 'state 471'
gotoTable[24232] = 477; // 'state 477'
gotoTable.fill(471, 24233, 24235); // 'state 471'
gotoTable[24236] = 471; // 'state 471'
gotoTable[24332] = 473; // 'state 473'
gotoTable[24348] = 136; // 'state 136'
gotoTable[24351] = 595; // 'state 595'
gotoTable.fill(475, 24352, 24355); // 'state 475'
gotoTable[24355] = 476; // 'state 476'
gotoTable.fill(471, 24356, 24360); // 'state 471'
gotoTable[24360] = 477; // 'state 477'
gotoTable.fill(471, 24361, 24363); // 'state 471'
gotoTable[24364] = 471; // 'state 471'
gotoTable[24418] = 597; // 'state 597'
gotoTable[24474] = 269; // 'state 269'
gotoTable[24585] = 268; // 'state 268'
gotoTable[24772] = 434; // 'state 434'
gotoTable[24882] = 465; // 'state 465'
gotoTable[24902] = 423; // 'state 423'
gotoTable[24907] = 599; // 'state 599'
gotoTable.fill(423, 24908, 24911); // 'state 423'
gotoTable[24911] = 30; // 'state 30'
gotoTable[24912] = 424; // 'state 424'
gotoTable[25028] = 434; // 'state 434'
gotoTable[25058] = 597; // 'state 597'
gotoTable[25184] = 600; // 'state 600'
gotoTable.fill(411, 25186, 25195); // 'state 411'
gotoTable[25197] = 411; // 'state 411'
gotoTable.fill(411, 25202, 25206); // 'state 411'
gotoTable[25206] = 412; // 'state 412'
gotoTable[25212] = 412; // 'state 412'
gotoTable[25214] = 412; // 'state 412'
gotoTable[25223] = 412; // 'state 412'
gotoTable[25228] = 20; // 'state 20'
gotoTable[25231] = 412; // 'state 412'
gotoTable[25239] = 412; // 'state 412'
gotoTable[25241] = 412; // 'state 412'
gotoTable[25244] = 21; // 'state 21'
gotoTable[25265] = 22; // 'state 22'
gotoTable[25266] = 413; // 'state 413'
gotoTable[25267] = 414; // 'state 414'
gotoTable[25269] = 23; // 'state 23'
gotoTable[25270] = 415; // 'state 415'
gotoTable.fill(414, 25271, 25282); // 'state 414'
gotoTable.fill(416, 25282, 25284); // 'state 416'
gotoTable[25288] = 413; // 'state 413'
gotoTable[25290] = 413; // 'state 413'
gotoTable.fill(399, 25297, 25299); // 'state 399'
gotoTable[25312] = 601; // 'state 601'
gotoTable.fill(411, 25314, 25323); // 'state 411'
gotoTable[25325] = 411; // 'state 411'
gotoTable.fill(411, 25330, 25334); // 'state 411'
gotoTable[25334] = 412; // 'state 412'
gotoTable[25340] = 412; // 'state 412'
gotoTable[25342] = 412; // 'state 412'
gotoTable[25351] = 412; // 'state 412'
gotoTable[25356] = 20; // 'state 20'
gotoTable[25359] = 412; // 'state 412'
gotoTable[25367] = 412; // 'state 412'
gotoTable[25369] = 412; // 'state 412'
gotoTable[25372] = 21; // 'state 21'
gotoTable[25393] = 22; // 'state 22'
gotoTable[25394] = 413; // 'state 413'
gotoTable[25395] = 414; // 'state 414'
gotoTable[25397] = 23; // 'state 23'
gotoTable[25398] = 415; // 'state 415'
gotoTable.fill(414, 25399, 25410); // 'state 414'
gotoTable.fill(416, 25410, 25412); // 'state 416'
gotoTable[25416] = 413; // 'state 413'
gotoTable[25418] = 413; // 'state 413'
gotoTable.fill(399, 25425, 25427); // 'state 399'
gotoTable[25484] = 20; // 'state 20'
gotoTable[25500] = 21; // 'state 21'
gotoTable[25521] = 270; // 'state 270'
gotoTable[25522] = 413; // 'state 413'
gotoTable[25523] = 414; // 'state 414'
gotoTable[25525] = 23; // 'state 23'
gotoTable[25526] = 415; // 'state 415'
gotoTable.fill(414, 25527, 25538); // 'state 414'
gotoTable.fill(416, 25538, 25540); // 'state 416'
gotoTable[25544] = 413; // 'state 413'
gotoTable[25546] = 413; // 'state 413'
gotoTable.fill(399, 25553, 25555); // 'state 399'
gotoTable[25612] = 20; // 'state 20'
gotoTable[25628] = 21; // 'state 21'
gotoTable[25649] = 273; // 'state 273'
gotoTable[25650] = 413; // 'state 413'
gotoTable[25651] = 414; // 'state 414'
gotoTable[25653] = 23; // 'state 23'
gotoTable[25654] = 415; // 'state 415'
gotoTable.fill(414, 25655, 25666); // 'state 414'
gotoTable.fill(416, 25666, 25668); // 'state 416'
gotoTable[25672] = 413; // 'state 413'
gotoTable[25674] = 413; // 'state 413'
gotoTable.fill(399, 25681, 25683); // 'state 399'
gotoTable[25796] = 434; // 'state 434'
gotoTable[25882] = 494; // 'state 494'
gotoTable[25996] = 20; // 'state 20'
gotoTable[26012] = 21; // 'state 21'
gotoTable[26033] = 275; // 'state 275'
gotoTable[26034] = 413; // 'state 413'
gotoTable[26035] = 414; // 'state 414'
gotoTable[26037] = 23; // 'state 23'
gotoTable[26038] = 415; // 'state 415'
gotoTable.fill(414, 26039, 26050); // 'state 414'
gotoTable.fill(416, 26050, 26052); // 'state 416'
gotoTable[26056] = 413; // 'state 413'
gotoTable[26058] = 413; // 'state 413'
gotoTable.fill(399, 26065, 26067); // 'state 399'
gotoTable[26121] = 242; // 'state 242'
gotoTable[26140] = 276; // 'state 276'
gotoTable[26256] = 277; // 'state 277'
gotoTable[26258] = 449; // 'state 449'
gotoTable[26260] = 574; // 'state 574'
gotoTable[26368] = 278; // 'state 278'
gotoTable[26370] = 447; // 'state 447'
gotoTable[26373] = 447; // 'state 447'
gotoTable[26479] = 602; // 'state 602'
gotoTable[26636] = 20; // 'state 20'
gotoTable[26652] = 21; // 'state 21'
gotoTable[26673] = 280; // 'state 280'
gotoTable[26674] = 413; // 'state 413'
gotoTable[26675] = 414; // 'state 414'
gotoTable[26677] = 23; // 'state 23'
gotoTable[26678] = 415; // 'state 415'
gotoTable.fill(414, 26679, 26690); // 'state 414'
gotoTable.fill(416, 26690, 26692); // 'state 416'
gotoTable[26696] = 413; // 'state 413'
gotoTable[26698] = 413; // 'state 413'
gotoTable.fill(399, 26705, 26707); // 'state 399'
gotoTable[26764] = 473; // 'state 473'
gotoTable[26780] = 136; // 'state 136'
gotoTable[26783] = 606; // 'state 606'
gotoTable.fill(475, 26784, 26787); // 'state 475'
gotoTable[26787] = 476; // 'state 476'
gotoTable.fill(471, 26788, 26792); // 'state 471'
gotoTable[26792] = 477; // 'state 477'
gotoTable.fill(471, 26793, 26795); // 'state 471'
gotoTable[26796] = 471; // 'state 471'
gotoTable[26880] = 161; // 'state 161'
gotoTable[26882] = 447; // 'state 447'
gotoTable[26885] = 447; // 'state 447'
gotoTable[26890] = 162; // 'state 162'
gotoTable[26893] = 87; // 'state 87'
gotoTable[26894] = 163; // 'state 163'
gotoTable[26952] = 214; // 'state 214'
gotoTable[26954] = 214; // 'state 214'
gotoTable[27051] = 221; // 'state 221'
gotoTable.fill(538, 27053, 27057); // 'state 538'
gotoTable[27058] = 465; // 'state 465'
gotoTable[27078] = 423; // 'state 423'
gotoTable[27083] = 29; // 'state 29'
gotoTable.fill(423, 27084, 27087); // 'state 423'
gotoTable[27087] = 287; // 'state 287'
gotoTable[27088] = 424; // 'state 424'
gotoTable[27208] = 286; // 'state 286'
gotoTable[27210] = 286; // 'state 286'
gotoTable[27276] = 292; // 'state 292'
gotoTable[27292] = 293; // 'state 293'
gotoTable[27295] = 217; // 'state 217'
gotoTable.fill(475, 27296, 27299); // 'state 475'
gotoTable[27299] = 476; // 'state 476'
gotoTable.fill(471, 27300, 27304); // 'state 471'
gotoTable[27304] = 477; // 'state 477'
gotoTable.fill(471, 27305, 27307); // 'state 471'
gotoTable[27308] = 471; // 'state 471'
gotoTable[27313] = 88; // 'state 88'
gotoTable[27314] = 413; // 'state 413'
gotoTable[27315] = 414; // 'state 414'
gotoTable[27317] = 23; // 'state 23'
gotoTable[27318] = 415; // 'state 415'
gotoTable.fill(414, 27319, 27330); // 'state 414'
gotoTable.fill(416, 27330, 27332); // 'state 416'
gotoTable[27333] = 97; // 'state 97'
gotoTable[27334] = 451; // 'state 451'
gotoTable[27336] = 413; // 'state 413'
gotoTable[27338] = 413; // 'state 413'
gotoTable.fill(399, 27345, 27347); // 'state 399'
gotoTable[27418] = 517; // 'state 517'
gotoTable[27422] = 535; // 'state 535'
gotoTable[27546] = 517; // 'state 517'
gotoTable[27660] = 473; // 'state 473'
gotoTable[27676] = 136; // 'state 136'
gotoTable[27679] = 612; // 'state 612'
gotoTable.fill(475, 27680, 27683); // 'state 475'
gotoTable[27683] = 476; // 'state 476'
gotoTable.fill(471, 27684, 27688); // 'state 471'
gotoTable[27688] = 477; // 'state 477'
gotoTable.fill(471, 27689, 27691); // 'state 471'
gotoTable[27692] = 471; // 'state 471'
gotoTable[27788] = 473; // 'state 473'
gotoTable[27804] = 136; // 'state 136'
gotoTable[27807] = 613; // 'state 613'
gotoTable.fill(475, 27808, 27811); // 'state 475'
gotoTable[27811] = 476; // 'state 476'
gotoTable.fill(471, 27812, 27816); // 'state 471'
gotoTable[27816] = 477; // 'state 477'
gotoTable.fill(471, 27817, 27819); // 'state 471'
gotoTable[27820] = 471; // 'state 471'
gotoTable[27921] = 615; // 'state 615'
gotoTable[28044] = 20; // 'state 20'
gotoTable[28060] = 21; // 'state 21'
gotoTable[28081] = 192; // 'state 192'
gotoTable[28082] = 413; // 'state 413'
gotoTable[28083] = 414; // 'state 414'
gotoTable[28085] = 23; // 'state 23'
gotoTable[28086] = 415; // 'state 415'
gotoTable.fill(414, 28087, 28098); // 'state 414'
gotoTable.fill(416, 28098, 28100); // 'state 416'
gotoTable[28104] = 413; // 'state 413'
gotoTable[28106] = 413; // 'state 413'
gotoTable.fill(399, 28113, 28115); // 'state 399'
gotoTable[28210] = 424; // 'state 424'
gotoTable[28239] = 296; // 'state 296'
gotoTable[28240] = 424; // 'state 424'
gotoTable[28297] = 299; // 'state 299'
gotoTable[28316] = 300; // 'state 300'
gotoTable.fill(617, 28461, 28465); // 'state 617'
gotoTable[28466] = 424; // 'state 424'
gotoTable[28495] = 222; // 'state 222'
gotoTable[28496] = 424; // 'state 424'
gotoTable[28553] = 297; // 'state 297'
gotoTable[28570] = 619; // 'state 619'
gotoTable[28572] = 298; // 'state 298'
gotoTable[28740] = 434; // 'state 434'
gotoTable[28812] = 20; // 'state 20'
gotoTable[28828] = 21; // 'state 21'
gotoTable[28849] = 88; // 'state 88'
gotoTable[28850] = 413; // 'state 413'
gotoTable[28851] = 414; // 'state 414'
gotoTable[28853] = 23; // 'state 23'
gotoTable[28854] = 415; // 'state 415'
gotoTable.fill(414, 28855, 28866); // 'state 414'
gotoTable.fill(416, 28866, 28868); // 'state 416'
gotoTable[28869] = 585; // 'state 585'
gotoTable[28870] = 451; // 'state 451'
gotoTable[28872] = 413; // 'state 413'
gotoTable[28874] = 413; // 'state 413'
gotoTable.fill(399, 28881, 28883); // 'state 399'
gotoTable[28923] = 625; // 'state 625'
gotoTable[29065] = 303; // 'state 303'
gotoTable[29084] = 304; // 'state 304'
gotoTable[29154] = 628; // 'state 628'
gotoTable[29210] = 305; // 'state 305'
gotoTable[29321] = 303; // 'state 303'
gotoTable[29460] = 629; // 'state 629'
gotoTable[29584] = 306; // 'state 306'
gotoTable[29586] = 449; // 'state 449'
gotoTable[29588] = 629; // 'state 629'
gotoTable[29695] = 632; // 'state 632'
gotoTable[29696] = 64; // 'state 64'
gotoTable[29698] = 447; // 'state 447'
gotoTable[29701] = 447; // 'state 447'
gotoTable[29836] = 20; // 'state 20'
gotoTable[29852] = 21; // 'state 21'
gotoTable[29873] = 307; // 'state 307'
gotoTable[29874] = 413; // 'state 413'
gotoTable[29875] = 414; // 'state 414'
gotoTable[29877] = 23; // 'state 23'
gotoTable[29878] = 415; // 'state 415'
gotoTable.fill(414, 29879, 29890); // 'state 414'
gotoTable.fill(416, 29890, 29892); // 'state 416'
gotoTable[29896] = 413; // 'state 413'
gotoTable[29898] = 413; // 'state 413'
gotoTable.fill(399, 29905, 29907); // 'state 399'
gotoTable[30020] = 434; // 'state 434'
gotoTable[30083] = 634; // 'state 634'
gotoTable[30130] = 424; // 'state 424'
gotoTable[30159] = 497; // 'state 497'
gotoTable[30160] = 424; // 'state 424'
gotoTable[30220] = 20; // 'state 20'
gotoTable[30236] = 21; // 'state 21'
gotoTable[30257] = 309; // 'state 309'
gotoTable[30258] = 413; // 'state 413'
gotoTable[30259] = 414; // 'state 414'
gotoTable[30261] = 23; // 'state 23'
gotoTable[30262] = 415; // 'state 415'
gotoTable.fill(414, 30263, 30274); // 'state 414'
gotoTable.fill(416, 30274, 30276); // 'state 416'
gotoTable[30280] = 413; // 'state 413'
gotoTable[30282] = 413; // 'state 413'
gotoTable.fill(399, 30289, 30291); // 'state 399'
gotoTable[30336] = 635; // 'state 635'
gotoTable[30338] = 447; // 'state 447'
gotoTable[30341] = 447; // 'state 447'
gotoTable[30468] = 637; // 'state 637'
gotoTable[30592] = 499; // 'state 499'
gotoTable[30594] = 447; // 'state 447'
gotoTable[30597] = 447; // 'state 447'
gotoTable[30598] = 638; // 'state 638'
gotoTable[30732] = 20; // 'state 20'
gotoTable[30748] = 21; // 'state 21'
gotoTable[30769] = 311; // 'state 311'
gotoTable[30770] = 413; // 'state 413'
gotoTable[30771] = 414; // 'state 414'
gotoTable[30773] = 23; // 'state 23'
gotoTable[30774] = 415; // 'state 415'
gotoTable.fill(414, 30775, 30786); // 'state 414'
gotoTable.fill(416, 30786, 30788); // 'state 416'
gotoTable[30792] = 413; // 'state 413'
gotoTable[30794] = 413; // 'state 413'
gotoTable.fill(399, 30801, 30803); // 'state 399'
gotoTable[30818] = 640; // 'state 640'
gotoTable[30874] = 313; // 'state 313'
gotoTable[30985] = 312; // 'state 312'
gotoTable[31074] = 641; // 'state 641'
gotoTable[31130] = 314; // 'state 314'
gotoTable[31202] = 641; // 'state 641'
gotoTable[31428] = 434; // 'state 434'
gotoTable[31458] = 642; // 'state 642'
gotoTable[31500] = 20; // 'state 20'
gotoTable[31516] = 21; // 'state 21'
gotoTable[31537] = 315; // 'state 315'
gotoTable[31538] = 413; // 'state 413'
gotoTable[31539] = 414; // 'state 414'
gotoTable[31541] = 23; // 'state 23'
gotoTable[31542] = 415; // 'state 415'
gotoTable.fill(414, 31543, 31554); // 'state 414'
gotoTable.fill(416, 31554, 31556); // 'state 416'
gotoTable[31560] = 413; // 'state 413'
gotoTable[31562] = 413; // 'state 413'
gotoTable.fill(399, 31569, 31571); // 'state 399'
gotoTable[31586] = 640; // 'state 640'
gotoTable[31744] = 161; // 'state 161'
gotoTable[31746] = 447; // 'state 447'
gotoTable[31749] = 447; // 'state 447'
gotoTable[31754] = 645; // 'state 645'
gotoTable[31758] = 163; // 'state 163'
gotoTable[31898] = 646; // 'state 646'
gotoTable[32012] = 20; // 'state 20'
gotoTable[32028] = 21; // 'state 21'
gotoTable[32049] = 319; // 'state 319'
gotoTable[32050] = 413; // 'state 413'
gotoTable[32051] = 414; // 'state 414'
gotoTable[32053] = 23; // 'state 23'
gotoTable[32054] = 415; // 'state 415'
gotoTable.fill(414, 32055, 32066); // 'state 414'
gotoTable.fill(416, 32066, 32068); // 'state 416'
gotoTable[32072] = 413; // 'state 413'
gotoTable[32074] = 413; // 'state 413'
gotoTable.fill(399, 32081, 32083); // 'state 399'
gotoTable[32154] = 647; // 'state 647'
gotoTable[32276] = 648; // 'state 648'
gotoTable[32396] = 473; // 'state 473'
gotoTable[32412] = 136; // 'state 136'
gotoTable[32415] = 650; // 'state 650'
gotoTable.fill(475, 32416, 32419); // 'state 475'
gotoTable[32419] = 476; // 'state 476'
gotoTable.fill(471, 32420, 32424); // 'state 471'
gotoTable[32424] = 477; // 'state 477'
gotoTable.fill(471, 32425, 32427); // 'state 471'
gotoTable[32428] = 471; // 'state 471'
gotoTable[32524] = 473; // 'state 473'
gotoTable[32540] = 136; // 'state 136'
gotoTable[32543] = 603; // 'state 603'
gotoTable.fill(475, 32544, 32547); // 'state 475'
gotoTable[32547] = 476; // 'state 476'
gotoTable.fill(471, 32548, 32552); // 'state 471'
gotoTable[32552] = 477; // 'state 477'
gotoTable.fill(471, 32553, 32555); // 'state 471'
gotoTable[32556] = 471; // 'state 471'
gotoTable[32652] = 473; // 'state 473'
gotoTable[32668] = 136; // 'state 136'
gotoTable[32671] = 604; // 'state 604'
gotoTable.fill(475, 32672, 32675); // 'state 475'
gotoTable[32675] = 476; // 'state 476'
gotoTable.fill(471, 32676, 32680); // 'state 471'
gotoTable[32680] = 477; // 'state 477'
gotoTable.fill(471, 32681, 32683); // 'state 471'
gotoTable[32684] = 471; // 'state 471'
gotoTable[32777] = 322; // 'state 322'
gotoTable[32794] = 652; // 'state 652'
gotoTable[32796] = 323; // 'state 323'
gotoTable[32908] = 20; // 'state 20'
gotoTable[32924] = 21; // 'state 21'
gotoTable[32945] = 325; // 'state 325'
gotoTable[32946] = 413; // 'state 413'
gotoTable[32947] = 414; // 'state 414'
gotoTable[32949] = 23; // 'state 23'
gotoTable[32950] = 415; // 'state 415'
gotoTable.fill(414, 32951, 32962); // 'state 414'
gotoTable.fill(416, 32962, 32964); // 'state 416'
gotoTable[32968] = 413; // 'state 413'
gotoTable[32970] = 413; // 'state 413'
gotoTable.fill(399, 32977, 32979); // 'state 399'
gotoTable[32994] = 653; // 'state 653'
gotoTable[33050] = 324; // 'state 324'
gotoTable[33161] = 322; // 'state 322'
gotoTable[33324] = 654; // 'state 654'
gotoTable[33425] = 655; // 'state 655'
gotoTable[33548] = 473; // 'state 473'
gotoTable[33564] = 136; // 'state 136'
gotoTable[33567] = 656; // 'state 656'
gotoTable.fill(475, 33568, 33571); // 'state 475'
gotoTable[33571] = 476; // 'state 476'
gotoTable.fill(471, 33572, 33576); // 'state 471'
gotoTable[33576] = 477; // 'state 477'
gotoTable.fill(471, 33577, 33579); // 'state 471'
gotoTable[33580] = 471; // 'state 471'
gotoTable[33676] = 20; // 'state 20'
gotoTable[33692] = 21; // 'state 21'
gotoTable[33713] = 88; // 'state 88'
gotoTable[33714] = 413; // 'state 413'
gotoTable[33715] = 414; // 'state 414'
gotoTable[33717] = 23; // 'state 23'
gotoTable[33718] = 415; // 'state 415'
gotoTable.fill(414, 33719, 33730); // 'state 414'
gotoTable.fill(416, 33730, 33732); // 'state 416'
gotoTable[33733] = 659; // 'state 659'
gotoTable[33734] = 451; // 'state 451'
gotoTable[33736] = 413; // 'state 413'
gotoTable[33738] = 413; // 'state 413'
gotoTable.fill(399, 33745, 33747); // 'state 399'
gotoTable[33804] = 20; // 'state 20'
gotoTable[33820] = 21; // 'state 21'
gotoTable[33841] = 327; // 'state 327'
gotoTable[33842] = 413; // 'state 413'
gotoTable[33843] = 414; // 'state 414'
gotoTable[33845] = 23; // 'state 23'
gotoTable[33846] = 415; // 'state 415'
gotoTable.fill(414, 33847, 33858); // 'state 414'
gotoTable.fill(416, 33858, 33860); // 'state 416'
gotoTable[33864] = 413; // 'state 413'
gotoTable[33866] = 413; // 'state 413'
gotoTable.fill(399, 33873, 33875); // 'state 399'
gotoTable[33932] = 20; // 'state 20'
gotoTable[33933] = 661; // 'state 661'
gotoTable[33948] = 21; // 'state 21'
gotoTable[33969] = 88; // 'state 88'
gotoTable[33970] = 413; // 'state 413'
gotoTable[33971] = 414; // 'state 414'
gotoTable[33973] = 23; // 'state 23'
gotoTable[33974] = 415; // 'state 415'
gotoTable.fill(414, 33975, 33986); // 'state 414'
gotoTable.fill(416, 33986, 33988); // 'state 416'
gotoTable[33989] = 661; // 'state 661'
gotoTable[33990] = 451; // 'state 451'
gotoTable[33992] = 90; // 'state 90'
gotoTable[33994] = 90; // 'state 90'
gotoTable.fill(399, 34001, 34003); // 'state 399'
gotoTable[34065] = 663; // 'state 663'
gotoTable[34188] = 20; // 'state 20'
gotoTable[34204] = 21; // 'state 21'
gotoTable[34225] = 88; // 'state 88'
gotoTable[34226] = 413; // 'state 413'
gotoTable[34227] = 414; // 'state 414'
gotoTable[34229] = 23; // 'state 23'
gotoTable[34230] = 415; // 'state 415'
gotoTable.fill(414, 34231, 34242); // 'state 414'
gotoTable.fill(416, 34242, 34244); // 'state 416'
gotoTable[34245] = 665; // 'state 665'
gotoTable[34246] = 451; // 'state 451'
gotoTable[34248] = 413; // 'state 413'
gotoTable[34250] = 413; // 'state 413'
gotoTable.fill(399, 34257, 34259); // 'state 399'
gotoTable[34333] = 667; // 'state 667'
gotoTable[34402] = 668; // 'state 668'
gotoTable[34458] = 330; // 'state 330'
gotoTable[34530] = 668; // 'state 668'
gotoTable[34756] = 434; // 'state 434'
gotoTable[34828] = 20; // 'state 20'
gotoTable[34844] = 21; // 'state 21'
gotoTable[34865] = 333; // 'state 333'
gotoTable[34866] = 413; // 'state 413'
gotoTable[34867] = 414; // 'state 414'
gotoTable[34869] = 23; // 'state 23'
gotoTable[34870] = 415; // 'state 415'
gotoTable.fill(414, 34871, 34882); // 'state 414'
gotoTable.fill(416, 34882, 34884); // 'state 416'
gotoTable[34888] = 413; // 'state 413'
gotoTable[34890] = 413; // 'state 413'
gotoTable.fill(399, 34897, 34899); // 'state 399'
gotoTable[34912] = 670; // 'state 670'
gotoTable.fill(411, 34914, 34923); // 'state 411'
gotoTable[34925] = 411; // 'state 411'
gotoTable.fill(411, 34930, 34934); // 'state 411'
gotoTable[34934] = 412; // 'state 412'
gotoTable[34940] = 412; // 'state 412'
gotoTable[34942] = 412; // 'state 412'
gotoTable[34951] = 412; // 'state 412'
gotoTable[34956] = 20; // 'state 20'
gotoTable[34959] = 412; // 'state 412'
gotoTable[34967] = 412; // 'state 412'
gotoTable[34969] = 412; // 'state 412'
gotoTable[34972] = 21; // 'state 21'
gotoTable[34993] = 22; // 'state 22'
gotoTable[34994] = 413; // 'state 413'
gotoTable[34995] = 414; // 'state 414'
gotoTable[34997] = 23; // 'state 23'
gotoTable[34998] = 415; // 'state 415'
gotoTable.fill(414, 34999, 35010); // 'state 414'
gotoTable.fill(416, 35010, 35012); // 'state 416'
gotoTable[35016] = 413; // 'state 413'
gotoTable[35018] = 413; // 'state 413'
gotoTable.fill(399, 35025, 35027); // 'state 399'
gotoTable[35140] = 434; // 'state 434'
gotoTable[35212] = 20; // 'state 20'
gotoTable[35228] = 21; // 'state 21'
gotoTable[35249] = 334; // 'state 334'
gotoTable[35250] = 413; // 'state 413'
gotoTable[35251] = 414; // 'state 414'
gotoTable[35253] = 23; // 'state 23'
gotoTable[35254] = 415; // 'state 415'
gotoTable.fill(414, 35255, 35266); // 'state 414'
gotoTable.fill(416, 35266, 35268); // 'state 416'
gotoTable[35272] = 413; // 'state 413'
gotoTable[35274] = 413; // 'state 413'
gotoTable.fill(399, 35281, 35283); // 'state 399'
gotoTable[35396] = 434; // 'state 434'
gotoTable[35465] = 336; // 'state 336'
gotoTable[35604] = 671; // 'state 671'
gotoTable[35738] = 672; // 'state 672'
gotoTable[35822] = 339; // 'state 339'
gotoTable.fill(675, 35824, 35826); // 'state 675'
gotoTable[36036] = 434; // 'state 434'
gotoTable[36099] = 148; // 'state 148'
gotoTable[36146] = 465; // 'state 465'
gotoTable[36166] = 423; // 'state 423'
gotoTable[36171] = 29; // 'state 29'
gotoTable.fill(423, 36172, 36175); // 'state 423'
gotoTable[36175] = 343; // 'state 343'
gotoTable[36176] = 424; // 'state 424'
gotoTable[36224] = 250; // 'state 250'
gotoTable[36226] = 447; // 'state 447'
gotoTable[36229] = 447; // 'state 447'
gotoTable[36296] = 286; // 'state 286'
gotoTable[36298] = 286; // 'state 286'
gotoTable[36352] = 499; // 'state 499'
gotoTable[36354] = 447; // 'state 447'
gotoTable[36357] = 447; // 'state 447'
gotoTable[36358] = 151; // 'state 151'
gotoTable[36364] = 20; // 'state 20'
gotoTable[36380] = 21; // 'state 21'
gotoTable[36401] = 88; // 'state 88'
gotoTable[36402] = 413; // 'state 413'
gotoTable[36403] = 414; // 'state 414'
gotoTable[36405] = 23; // 'state 23'
gotoTable[36406] = 415; // 'state 415'
gotoTable.fill(414, 36407, 36418); // 'state 414'
gotoTable.fill(416, 36418, 36420); // 'state 416'
gotoTable[36421] = 97; // 'state 97'
gotoTable[36422] = 451; // 'state 451'
gotoTable[36424] = 413; // 'state 413'
gotoTable[36426] = 413; // 'state 413'
gotoTable.fill(399, 36433, 36435); // 'state 399'
gotoTable[36506] = 517; // 'state 517'
gotoTable[36620] = 473; // 'state 473'
gotoTable[36636] = 136; // 'state 136'
gotoTable[36639] = 681; // 'state 681'
gotoTable.fill(475, 36640, 36643); // 'state 475'
gotoTable[36643] = 476; // 'state 476'
gotoTable.fill(471, 36644, 36648); // 'state 471'
gotoTable[36648] = 477; // 'state 477'
gotoTable.fill(471, 36649, 36651); // 'state 471'
gotoTable[36652] = 471; // 'state 471'
gotoTable[36762] = 586; // 'state 586'
gotoTable[36873] = 347; // 'state 347'
gotoTable[36890] = 619; // 'state 619'
gotoTable[36892] = 348; // 'state 348'
gotoTable[37004] = 292; // 'state 292'
gotoTable[37005] = 87; // 'state 87'
gotoTable[37020] = 293; // 'state 293'
gotoTable[37023] = 534; // 'state 534'
gotoTable.fill(475, 37024, 37027); // 'state 475'
gotoTable[37027] = 476; // 'state 476'
gotoTable.fill(471, 37028, 37032); // 'state 471'
gotoTable[37032] = 477; // 'state 477'
gotoTable.fill(471, 37033, 37035); // 'state 471'
gotoTable[37036] = 471; // 'state 471'
gotoTable[37041] = 88; // 'state 88'
gotoTable[37042] = 413; // 'state 413'
gotoTable[37043] = 414; // 'state 414'
gotoTable[37045] = 23; // 'state 23'
gotoTable[37046] = 415; // 'state 415'
gotoTable.fill(414, 37047, 37058); // 'state 414'
gotoTable.fill(416, 37058, 37060); // 'state 416'
gotoTable[37061] = 89; // 'state 89'
gotoTable[37062] = 451; // 'state 451'
gotoTable[37064] = 90; // 'state 90'
gotoTable[37066] = 90; // 'state 90'
gotoTable.fill(399, 37073, 37075); // 'state 399'
gotoTable[37132] = 20; // 'state 20'
gotoTable[37148] = 21; // 'state 21'
gotoTable[37169] = 91; // 'state 91'
gotoTable[37170] = 413; // 'state 413'
gotoTable[37171] = 414; // 'state 414'
gotoTable[37173] = 23; // 'state 23'
gotoTable[37174] = 415; // 'state 415'
gotoTable.fill(414, 37175, 37186); // 'state 414'
gotoTable.fill(416, 37186, 37188); // 'state 416'
gotoTable[37192] = 413; // 'state 413'
gotoTable[37194] = 413; // 'state 413'
gotoTable.fill(399, 37201, 37203); // 'state 399'
gotoTable[37260] = 20; // 'state 20'
gotoTable[37276] = 21; // 'state 21'
gotoTable[37297] = 91; // 'state 91'
gotoTable[37298] = 413; // 'state 413'
gotoTable[37299] = 414; // 'state 414'
gotoTable[37301] = 23; // 'state 23'
gotoTable[37302] = 415; // 'state 415'
gotoTable.fill(414, 37303, 37314); // 'state 414'
gotoTable.fill(416, 37314, 37316); // 'state 416'
gotoTable[37320] = 413; // 'state 413'
gotoTable[37322] = 413; // 'state 413'
gotoTable.fill(399, 37329, 37331); // 'state 399'
gotoTable[37406] = 535; // 'state 535'
gotoTable[37530] = 448; // 'state 448'
gotoTable[37641] = 349; // 'state 349'
gotoTable[37644] = 533; // 'state 533'
gotoTable[37772] = 473; // 'state 473'
gotoTable[37788] = 136; // 'state 136'
gotoTable[37791] = 650; // 'state 650'
gotoTable.fill(475, 37792, 37795); // 'state 475'
gotoTable[37795] = 476; // 'state 476'
gotoTable.fill(471, 37796, 37800); // 'state 471'
gotoTable[37800] = 477; // 'state 477'
gotoTable.fill(471, 37801, 37803); // 'state 471'
gotoTable[37804] = 471; // 'state 471'
gotoTable[37900] = 20; // 'state 20'
gotoTable[37916] = 21; // 'state 21'
gotoTable[37937] = 192; // 'state 192'
gotoTable[37938] = 413; // 'state 413'
gotoTable[37939] = 414; // 'state 414'
gotoTable[37941] = 23; // 'state 23'
gotoTable[37942] = 415; // 'state 415'
gotoTable.fill(414, 37943, 37954); // 'state 414'
gotoTable.fill(416, 37954, 37956); // 'state 416'
gotoTable[37960] = 413; // 'state 413'
gotoTable[37962] = 413; // 'state 413'
gotoTable.fill(399, 37969, 37971); // 'state 399'
gotoTable[38042] = 686; // 'state 686'
gotoTable[38170] = 688; // 'state 688'
gotoTable[38281] = 353; // 'state 353'
gotoTable[38426] = 689; // 'state 689'
gotoTable[38537] = 354; // 'state 354'
gotoTable[38668] = 20; // 'state 20'
gotoTable[38684] = 21; // 'state 21'
gotoTable[38705] = 88; // 'state 88'
gotoTable[38706] = 413; // 'state 413'
gotoTable[38707] = 414; // 'state 414'
gotoTable[38709] = 23; // 'state 23'
gotoTable[38710] = 415; // 'state 415'
gotoTable.fill(414, 38711, 38722); // 'state 414'
gotoTable.fill(416, 38722, 38724); // 'state 416'
gotoTable[38725] = 659; // 'state 659'
gotoTable[38726] = 451; // 'state 451'
gotoTable[38728] = 413; // 'state 413'
gotoTable[38730] = 413; // 'state 413'
gotoTable.fill(399, 38737, 38739); // 'state 399'
gotoTable[38779] = 692; // 'state 692'
gotoTable[38882] = 694; // 'state 694'
gotoTable[38938] = 357; // 'state 357'
gotoTable[39049] = 356; // 'state 356'
gotoTable[39138] = 694; // 'state 694'
gotoTable[39316] = 695; // 'state 695'
gotoTable[39492] = 434; // 'state 434'
gotoTable[39555] = 698; // 'state 698'
gotoTable[39602] = 424; // 'state 424'
gotoTable[39631] = 497; // 'state 497'
gotoTable[39632] = 424; // 'state 424'
gotoTable[39748] = 434; // 'state 434'
gotoTable[39808] = 499; // 'state 499'
gotoTable[39810] = 447; // 'state 447'
gotoTable[39813] = 447; // 'state 447'
gotoTable[39814] = 700; // 'state 700'
gotoTable[40004] = 434; // 'state 434'
gotoTable[40034] = 702; // 'state 702'
gotoTable[40090] = 359; // 'state 359'
gotoTable[40162] = 702; // 'state 702'
gotoTable[40290] = 704; // 'state 704'
gotoTable[40516] = 434; // 'state 434'
gotoTable[40546] = 705; // 'state 705'
gotoTable[40588] = 20; // 'state 20'
gotoTable[40604] = 21; // 'state 21'
gotoTable[40625] = 360; // 'state 360'
gotoTable[40626] = 413; // 'state 413'
gotoTable[40627] = 414; // 'state 414'
gotoTable[40629] = 23; // 'state 23'
gotoTable[40630] = 415; // 'state 415'
gotoTable.fill(414, 40631, 40642); // 'state 414'
gotoTable.fill(416, 40642, 40644); // 'state 416'
gotoTable[40648] = 413; // 'state 413'
gotoTable[40650] = 413; // 'state 413'
gotoTable.fill(399, 40657, 40659); // 'state 399'
gotoTable[40704] = 161; // 'state 161'
gotoTable[40706] = 447; // 'state 447'
gotoTable[40709] = 447; // 'state 447'
gotoTable[40714] = 707; // 'state 707'
gotoTable[40718] = 163; // 'state 163'
gotoTable[40844] = 20; // 'state 20'
gotoTable[40860] = 21; // 'state 21'
gotoTable[40881] = 362; // 'state 362'
gotoTable[40882] = 413; // 'state 413'
gotoTable[40883] = 414; // 'state 414'
gotoTable[40885] = 23; // 'state 23'
gotoTable[40886] = 415; // 'state 415'
gotoTable.fill(414, 40887, 40898); // 'state 414'
gotoTable.fill(416, 40898, 40900); // 'state 416'
gotoTable[40904] = 413; // 'state 413'
gotoTable[40906] = 413; // 'state 413'
gotoTable.fill(399, 40913, 40915); // 'state 399'
gotoTable[41028] = 434; // 'state 434'
gotoTable[41100] = 473; // 'state 473'
gotoTable[41116] = 136; // 'state 136'
gotoTable[41119] = 709; // 'state 709'
gotoTable.fill(475, 41120, 41123); // 'state 475'
gotoTable[41123] = 476; // 'state 476'
gotoTable.fill(471, 41124, 41128); // 'state 471'
gotoTable[41128] = 477; // 'state 477'
gotoTable.fill(471, 41129, 41131); // 'state 471'
gotoTable[41132] = 471; // 'state 471'
gotoTable[41228] = 20; // 'state 20'
gotoTable[41244] = 21; // 'state 21'
gotoTable[41265] = 366; // 'state 366'
gotoTable[41266] = 413; // 'state 413'
gotoTable[41267] = 414; // 'state 414'
gotoTable[41269] = 23; // 'state 23'
gotoTable[41270] = 415; // 'state 415'
gotoTable.fill(414, 41271, 41282); // 'state 414'
gotoTable.fill(416, 41282, 41284); // 'state 416'
gotoTable[41288] = 413; // 'state 413'
gotoTable[41290] = 413; // 'state 413'
gotoTable.fill(399, 41297, 41299); // 'state 399'
gotoTable[41314] = 710; // 'state 710'
gotoTable[41370] = 364; // 'state 364'
gotoTable[41481] = 363; // 'state 363'
gotoTable[41570] = 710; // 'state 710'
gotoTable[41796] = 434; // 'state 434'
gotoTable[41868] = 20; // 'state 20'
gotoTable[41884] = 21; // 'state 21'
gotoTable[41905] = 367; // 'state 367'
gotoTable[41906] = 413; // 'state 413'
gotoTable[41907] = 414; // 'state 414'
gotoTable[41909] = 23; // 'state 23'
gotoTable[41910] = 415; // 'state 415'
gotoTable.fill(414, 41911, 41922); // 'state 414'
gotoTable.fill(416, 41922, 41924); // 'state 416'
gotoTable[41928] = 413; // 'state 413'
gotoTable[41930] = 413; // 'state 413'
gotoTable.fill(399, 41937, 41939); // 'state 399'
gotoTable[42052] = 434; // 'state 434'
gotoTable[42124] = 473; // 'state 473'
gotoTable[42140] = 136; // 'state 136'
gotoTable[42143] = 650; // 'state 650'
gotoTable.fill(475, 42144, 42147); // 'state 475'
gotoTable[42147] = 476; // 'state 476'
gotoTable.fill(471, 42148, 42152); // 'state 471'
gotoTable[42152] = 477; // 'state 477'
gotoTable.fill(471, 42153, 42155); // 'state 471'
gotoTable[42156] = 471; // 'state 471'
gotoTable[42252] = 473; // 'state 473'
gotoTable[42268] = 136; // 'state 136'
gotoTable[42271] = 714; // 'state 714'
gotoTable.fill(475, 42272, 42275); // 'state 475'
gotoTable[42275] = 476; // 'state 476'
gotoTable.fill(471, 42276, 42280); // 'state 471'
gotoTable[42280] = 477; // 'state 477'
gotoTable.fill(471, 42281, 42283); // 'state 471'
gotoTable[42284] = 471; // 'state 471'
gotoTable[42338] = 715; // 'state 715'
gotoTable[42464] = 716; // 'state 716'
gotoTable.fill(411, 42466, 42475); // 'state 411'
gotoTable[42477] = 411; // 'state 411'
gotoTable.fill(411, 42482, 42486); // 'state 411'
gotoTable[42486] = 412; // 'state 412'
gotoTable[42492] = 412; // 'state 412'
gotoTable[42494] = 412; // 'state 412'
gotoTable[42503] = 412; // 'state 412'
gotoTable[42508] = 20; // 'state 20'
gotoTable[42511] = 412; // 'state 412'
gotoTable[42519] = 412; // 'state 412'
gotoTable[42521] = 412; // 'state 412'
gotoTable[42524] = 21; // 'state 21'
gotoTable[42545] = 22; // 'state 22'
gotoTable[42546] = 413; // 'state 413'
gotoTable[42547] = 414; // 'state 414'
gotoTable[42549] = 23; // 'state 23'
gotoTable[42550] = 415; // 'state 415'
gotoTable.fill(414, 42551, 42562); // 'state 414'
gotoTable.fill(416, 42562, 42564); // 'state 416'
gotoTable[42568] = 413; // 'state 413'
gotoTable[42570] = 413; // 'state 413'
gotoTable.fill(399, 42577, 42579); // 'state 399'
gotoTable[42592] = 718; // 'state 718'
gotoTable.fill(411, 42594, 42603); // 'state 411'
gotoTable[42605] = 411; // 'state 411'
gotoTable.fill(411, 42610, 42614); // 'state 411'
gotoTable[42614] = 412; // 'state 412'
gotoTable[42620] = 412; // 'state 412'
gotoTable[42622] = 412; // 'state 412'
gotoTable[42631] = 412; // 'state 412'
gotoTable[42636] = 20; // 'state 20'
gotoTable[42639] = 412; // 'state 412'
gotoTable[42647] = 412; // 'state 412'
gotoTable[42649] = 412; // 'state 412'
gotoTable[42652] = 21; // 'state 21'
gotoTable[42673] = 22; // 'state 22'
gotoTable[42674] = 413; // 'state 413'
gotoTable[42675] = 414; // 'state 414'
gotoTable[42677] = 23; // 'state 23'
gotoTable[42678] = 415; // 'state 415'
gotoTable.fill(414, 42679, 42690); // 'state 414'
gotoTable.fill(416, 42690, 42692); // 'state 416'
gotoTable[42696] = 413; // 'state 413'
gotoTable[42698] = 413; // 'state 413'
gotoTable.fill(399, 42705, 42707); // 'state 399'
gotoTable[42820] = 434; // 'state 434'
gotoTable[42948] = 434; // 'state 434'
gotoTable[43020] = 20; // 'state 20'
gotoTable[43036] = 21; // 'state 21'
gotoTable[43057] = 371; // 'state 371'
gotoTable[43058] = 413; // 'state 413'
gotoTable[43059] = 414; // 'state 414'
gotoTable[43061] = 23; // 'state 23'
gotoTable[43062] = 415; // 'state 415'
gotoTable.fill(414, 43063, 43074); // 'state 414'
gotoTable.fill(416, 43074, 43076); // 'state 416'
gotoTable[43080] = 413; // 'state 413'
gotoTable[43082] = 413; // 'state 413'
gotoTable.fill(399, 43089, 43091); // 'state 399'
gotoTable[43106] = 704; // 'state 704'
gotoTable[43162] = 372; // 'state 372'
gotoTable[43234] = 719; // 'state 719'
gotoTable[43404] = 20; // 'state 20'
gotoTable[43420] = 21; // 'state 21'
gotoTable[43441] = 374; // 'state 374'
gotoTable[43442] = 413; // 'state 413'
gotoTable[43443] = 414; // 'state 414'
gotoTable[43445] = 23; // 'state 23'
gotoTable[43446] = 415; // 'state 415'
gotoTable.fill(414, 43447, 43458); // 'state 414'
gotoTable.fill(416, 43458, 43460); // 'state 416'
gotoTable[43464] = 413; // 'state 413'
gotoTable[43466] = 413; // 'state 413'
gotoTable.fill(399, 43473, 43475); // 'state 399'
gotoTable.fill(721, 43504, 43506); // 'state 721'
gotoTable[43660] = 473; // 'state 473'
gotoTable[43676] = 136; // 'state 136'
gotoTable[43679] = 722; // 'state 722'
gotoTable.fill(475, 43680, 43683); // 'state 475'
gotoTable[43683] = 476; // 'state 476'
gotoTable.fill(471, 43684, 43688); // 'state 471'
gotoTable[43688] = 477; // 'state 477'
gotoTable.fill(471, 43689, 43691); // 'state 471'
gotoTable[43692] = 471; // 'state 471'
gotoTable[43802] = 586; // 'state 586'
gotoTable[43904] = 558; // 'state 558'
gotoTable[43906] = 447; // 'state 447'
gotoTable[43909] = 447; // 'state 447'
gotoTable[43916] = 20; // 'state 20'
gotoTable[43932] = 21; // 'state 21'
gotoTable[43953] = 106; // 'state 106'
gotoTable[43954] = 413; // 'state 413'
gotoTable[43955] = 414; // 'state 414'
gotoTable[43957] = 23; // 'state 23'
gotoTable[43958] = 415; // 'state 415'
gotoTable.fill(414, 43959, 43970); // 'state 414'
gotoTable.fill(416, 43970, 43972); // 'state 416'
gotoTable[43976] = 413; // 'state 413'
gotoTable[43978] = 413; // 'state 413'
gotoTable.fill(399, 43985, 43987); // 'state 399'
gotoTable[44041] = 104; // 'state 104'
gotoTable[44060] = 105; // 'state 105'
gotoTable[44160] = 499; // 'state 499'
gotoTable[44162] = 447; // 'state 447'
gotoTable[44165] = 447; // 'state 447'
gotoTable[44166] = 237; // 'state 237'
gotoTable[44172] = 20; // 'state 20'
gotoTable[44188] = 21; // 'state 21'
gotoTable[44209] = 88; // 'state 88'
gotoTable[44210] = 413; // 'state 413'
gotoTable[44211] = 414; // 'state 414'
gotoTable[44213] = 23; // 'state 23'
gotoTable[44214] = 415; // 'state 415'
gotoTable.fill(414, 44215, 44226); // 'state 414'
gotoTable.fill(416, 44226, 44228); // 'state 416'
gotoTable[44229] = 185; // 'state 185'
gotoTable[44230] = 451; // 'state 451'
gotoTable[44232] = 413; // 'state 413'
gotoTable[44234] = 413; // 'state 413'
gotoTable.fill(399, 44241, 44243); // 'state 399'
gotoTable[44288] = 561; // 'state 561'
gotoTable[44290] = 447; // 'state 447'
gotoTable[44293] = 447; // 'state 447'
gotoTable[44300] = 20; // 'state 20'
gotoTable[44316] = 21; // 'state 21'
gotoTable[44337] = 106; // 'state 106'
gotoTable[44338] = 413; // 'state 413'
gotoTable[44339] = 414; // 'state 414'
gotoTable[44341] = 23; // 'state 23'
gotoTable[44342] = 415; // 'state 415'
gotoTable.fill(414, 44343, 44354); // 'state 414'
gotoTable.fill(416, 44354, 44356); // 'state 416'
gotoTable[44360] = 413; // 'state 413'
gotoTable[44362] = 413; // 'state 413'
gotoTable.fill(399, 44369, 44371); // 'state 399'
gotoTable[44428] = 292; // 'state 292'
gotoTable[44444] = 293; // 'state 293'
gotoTable[44447] = 514; // 'state 514'
gotoTable.fill(475, 44448, 44451); // 'state 475'
gotoTable[44451] = 476; // 'state 476'
gotoTable.fill(471, 44452, 44456); // 'state 471'
gotoTable[44456] = 477; // 'state 477'
gotoTable.fill(471, 44457, 44459); // 'state 471'
gotoTable[44460] = 471; // 'state 471'
gotoTable[44465] = 194; // 'state 194'
gotoTable[44466] = 413; // 'state 413'
gotoTable[44467] = 414; // 'state 414'
gotoTable[44469] = 23; // 'state 23'
gotoTable[44470] = 415; // 'state 415'
gotoTable.fill(414, 44471, 44482); // 'state 414'
gotoTable.fill(416, 44482, 44484); // 'state 416'
gotoTable[44488] = 413; // 'state 413'
gotoTable[44490] = 413; // 'state 413'
gotoTable.fill(399, 44497, 44499); // 'state 399'
gotoTable[44514] = 528; // 'state 528'
gotoTable[44570] = 378; // 'state 378'
gotoTable[44681] = 377; // 'state 377'
gotoTable[44826] = 500; // 'state 500'
gotoTable[44954] = 517; // 'state 517'
gotoTable[44958] = 535; // 'state 535'
gotoTable[45026] = 513; // 'state 513'
gotoTable[45068] = 292; // 'state 292'
gotoTable[45084] = 293; // 'state 293'
gotoTable[45087] = 612; // 'state 612'
gotoTable.fill(475, 45088, 45091); // 'state 475'
gotoTable[45091] = 476; // 'state 476'
gotoTable.fill(471, 45092, 45096); // 'state 471'
gotoTable[45096] = 477; // 'state 477'
gotoTable.fill(471, 45097, 45099); // 'state 471'
gotoTable[45100] = 471; // 'state 471'
gotoTable[45105] = 176; // 'state 176'
gotoTable[45106] = 413; // 'state 413'
gotoTable[45107] = 414; // 'state 414'
gotoTable[45109] = 23; // 'state 23'
gotoTable[45110] = 415; // 'state 415'
gotoTable.fill(414, 45111, 45122); // 'state 414'
gotoTable.fill(416, 45122, 45124); // 'state 416'
gotoTable[45128] = 413; // 'state 413'
gotoTable[45130] = 413; // 'state 413'
gotoTable.fill(399, 45137, 45139); // 'state 399'
gotoTable[45196] = 473; // 'state 473'
gotoTable[45212] = 136; // 'state 136'
gotoTable[45215] = 709; // 'state 709'
gotoTable.fill(475, 45216, 45219); // 'state 475'
gotoTable[45219] = 476; // 'state 476'
gotoTable.fill(471, 45220, 45224); // 'state 471'
gotoTable[45224] = 477; // 'state 477'
gotoTable.fill(471, 45225, 45227); // 'state 471'
gotoTable[45228] = 471; // 'state 471'
gotoTable[45338] = 725; // 'state 725'
gotoTable[45466] = 726; // 'state 726'
gotoTable[45580] = 473; // 'state 473'
gotoTable[45596] = 136; // 'state 136'
gotoTable[45599] = 727; // 'state 727'
gotoTable.fill(475, 45600, 45603); // 'state 475'
gotoTable[45603] = 476; // 'state 476'
gotoTable.fill(471, 45604, 45608); // 'state 471'
gotoTable[45608] = 477; // 'state 477'
gotoTable.fill(471, 45609, 45611); // 'state 471'
gotoTable[45612] = 471; // 'state 471'
gotoTable[45666] = 728; // 'state 728'
gotoTable[45722] = 382; // 'state 382'
gotoTable[45794] = 728; // 'state 728'
gotoTable[45964] = 20; // 'state 20'
gotoTable[45980] = 21; // 'state 21'
gotoTable[46001] = 383; // 'state 383'
gotoTable[46002] = 413; // 'state 413'
gotoTable[46003] = 414; // 'state 414'
gotoTable[46005] = 23; // 'state 23'
gotoTable[46006] = 415; // 'state 415'
gotoTable.fill(414, 46007, 46018); // 'state 414'
gotoTable.fill(416, 46018, 46020); // 'state 416'
gotoTable[46024] = 413; // 'state 413'
gotoTable[46026] = 413; // 'state 413'
gotoTable.fill(399, 46033, 46035); // 'state 399'
gotoTable[46050] = 731; // 'state 731'
gotoTable[46276] = 434; // 'state 434'
gotoTable[46348] = 20; // 'state 20'
gotoTable[46364] = 21; // 'state 21'
gotoTable[46385] = 384; // 'state 384'
gotoTable[46386] = 413; // 'state 413'
gotoTable[46387] = 414; // 'state 414'
gotoTable[46389] = 23; // 'state 23'
gotoTable[46390] = 415; // 'state 415'
gotoTable.fill(414, 46391, 46402); // 'state 414'
gotoTable.fill(416, 46402, 46404); // 'state 416'
gotoTable[46408] = 413; // 'state 413'
gotoTable[46410] = 413; // 'state 413'
gotoTable.fill(399, 46417, 46419); // 'state 399'
gotoTable[46532] = 434; // 'state 434'
gotoTable[46562] = 733; // 'state 733'
gotoTable[46618] = 385; // 'state 385'
gotoTable[46690] = 733; // 'state 733'
gotoTable[46860] = 20; // 'state 20'
gotoTable[46876] = 21; // 'state 21'
gotoTable[46897] = 386; // 'state 386'
gotoTable[46898] = 413; // 'state 413'
gotoTable[46899] = 414; // 'state 414'
gotoTable[46901] = 23; // 'state 23'
gotoTable[46902] = 415; // 'state 415'
gotoTable.fill(414, 46903, 46914); // 'state 414'
gotoTable.fill(416, 46914, 46916); // 'state 416'
gotoTable[46920] = 413; // 'state 413'
gotoTable[46922] = 413; // 'state 413'
gotoTable.fill(399, 46929, 46931); // 'state 399'
gotoTable[47044] = 434; // 'state 434'
gotoTable[47172] = 434; // 'state 434'
gotoTable[47244] = 473; // 'state 473'
gotoTable[47260] = 136; // 'state 136'
gotoTable[47263] = 709; // 'state 709'
gotoTable.fill(475, 47264, 47267); // 'state 475'
gotoTable[47267] = 476; // 'state 476'
gotoTable.fill(471, 47268, 47272); // 'state 471'
gotoTable[47272] = 477; // 'state 477'
gotoTable.fill(471, 47273, 47275); // 'state 471'
gotoTable[47276] = 471; // 'state 471'
gotoTable[47328] = 736; // 'state 736'
gotoTable.fill(411, 47330, 47339); // 'state 411'
gotoTable[47341] = 411; // 'state 411'
gotoTable.fill(411, 47346, 47350); // 'state 411'
gotoTable[47350] = 412; // 'state 412'
gotoTable[47356] = 412; // 'state 412'
gotoTable[47358] = 412; // 'state 412'
gotoTable[47367] = 412; // 'state 412'
gotoTable[47372] = 20; // 'state 20'
gotoTable[47375] = 412; // 'state 412'
gotoTable[47383] = 412; // 'state 412'
gotoTable[47385] = 412; // 'state 412'
gotoTable[47388] = 21; // 'state 21'
gotoTable[47409] = 22; // 'state 22'
gotoTable[47410] = 413; // 'state 413'
gotoTable[47411] = 414; // 'state 414'
gotoTable[47413] = 23; // 'state 23'
gotoTable[47414] = 415; // 'state 415'
gotoTable.fill(414, 47415, 47426); // 'state 414'
gotoTable.fill(416, 47426, 47428); // 'state 416'
gotoTable[47432] = 413; // 'state 413'
gotoTable[47434] = 413; // 'state 413'
gotoTable.fill(399, 47441, 47443); // 'state 399'
gotoTable[47456] = 737; // 'state 737'
gotoTable.fill(411, 47458, 47467); // 'state 411'
gotoTable[47469] = 411; // 'state 411'
gotoTable.fill(411, 47474, 47478); // 'state 411'
gotoTable[47478] = 412; // 'state 412'
gotoTable[47484] = 412; // 'state 412'
gotoTable[47486] = 412; // 'state 412'
gotoTable[47495] = 412; // 'state 412'
gotoTable[47500] = 20; // 'state 20'
gotoTable[47503] = 412; // 'state 412'
gotoTable[47511] = 412; // 'state 412'
gotoTable[47513] = 412; // 'state 412'
gotoTable[47516] = 21; // 'state 21'
gotoTable[47537] = 22; // 'state 22'
gotoTable[47538] = 413; // 'state 413'
gotoTable[47539] = 414; // 'state 414'
gotoTable[47541] = 23; // 'state 23'
gotoTable[47542] = 415; // 'state 415'
gotoTable.fill(414, 47543, 47554); // 'state 414'
gotoTable.fill(416, 47554, 47556); // 'state 416'
gotoTable[47560] = 413; // 'state 413'
gotoTable[47562] = 413; // 'state 413'
gotoTable.fill(399, 47569, 47571); // 'state 399'
gotoTable[47684] = 434; // 'state 434'
gotoTable[47714] = 738; // 'state 738'
gotoTable[47842] = 739; // 'state 739'
gotoTable[48068] = 434; // 'state 434'
gotoTable[48096] = 421; // 'state 421'
gotoTable[48097] = 389; // 'state 389'
gotoTable.fill(411, 48098, 48107); // 'state 411'
gotoTable[48109] = 411; // 'state 411'
gotoTable.fill(411, 48114, 48118); // 'state 411'
gotoTable[48118] = 412; // 'state 412'
gotoTable[48124] = 412; // 'state 412'
gotoTable[48126] = 412; // 'state 412'
gotoTable[48135] = 412; // 'state 412'
gotoTable[48140] = 20; // 'state 20'
gotoTable[48143] = 412; // 'state 412'
gotoTable[48151] = 412; // 'state 412'
gotoTable[48153] = 412; // 'state 412'
gotoTable[48156] = 21; // 'state 21'
gotoTable[48177] = 22; // 'state 22'
gotoTable[48178] = 413; // 'state 413'
gotoTable[48179] = 414; // 'state 414'
gotoTable[48181] = 23; // 'state 23'
gotoTable[48182] = 415; // 'state 415'
gotoTable.fill(414, 48183, 48194); // 'state 414'
gotoTable.fill(416, 48194, 48196); // 'state 416'
gotoTable[48200] = 413; // 'state 413'
gotoTable[48202] = 413; // 'state 413'
gotoTable.fill(399, 48209, 48211); // 'state 399'
gotoTable[48256] = 635; // 'state 635'
gotoTable[48258] = 447; // 'state 447'
gotoTable[48261] = 447; // 'state 447'
gotoTable[48268] = 20; // 'state 20'
gotoTable[48284] = 21; // 'state 21'
gotoTable[48305] = 194; // 'state 194'
gotoTable[48306] = 413; // 'state 413'
gotoTable[48307] = 414; // 'state 414'
gotoTable[48309] = 23; // 'state 23'
gotoTable[48310] = 415; // 'state 415'
gotoTable.fill(414, 48311, 48322); // 'state 414'
gotoTable.fill(416, 48322, 48324); // 'state 416'
gotoTable[48328] = 413; // 'state 413'
gotoTable[48330] = 413; // 'state 413'
gotoTable.fill(399, 48337, 48339); // 'state 399'
gotoTable[48354] = 597; // 'state 597'
gotoTable[48410] = 390; // 'state 390'
gotoTable[48482] = 597; // 'state 597'
gotoTable[48610] = 563; // 'state 563'
gotoTable[48652] = 292; // 'state 292'
gotoTable[48668] = 293; // 'state 293'
gotoTable[48671] = 681; // 'state 681'
gotoTable.fill(475, 48672, 48675); // 'state 475'
gotoTable[48675] = 476; // 'state 476'
gotoTable.fill(471, 48676, 48680); // 'state 471'
gotoTable[48680] = 477; // 'state 477'
gotoTable.fill(471, 48681, 48683); // 'state 471'
gotoTable[48684] = 471; // 'state 471'
gotoTable[48689] = 244; // 'state 244'
gotoTable[48690] = 413; // 'state 413'
gotoTable[48691] = 414; // 'state 414'
gotoTable[48693] = 23; // 'state 23'
gotoTable[48694] = 415; // 'state 415'
gotoTable.fill(414, 48695, 48706); // 'state 414'
gotoTable.fill(416, 48706, 48708); // 'state 416'
gotoTable[48712] = 413; // 'state 413'
gotoTable[48714] = 413; // 'state 413'
gotoTable.fill(399, 48721, 48723); // 'state 399'
gotoTable[48736] = 421; // 'state 421'
gotoTable[48737] = 28; // 'state 28'
gotoTable.fill(411, 48738, 48747); // 'state 411'
gotoTable[48749] = 411; // 'state 411'
gotoTable.fill(411, 48754, 48758); // 'state 411'
gotoTable[48758] = 412; // 'state 412'
gotoTable[48764] = 412; // 'state 412'
gotoTable[48766] = 412; // 'state 412'
gotoTable[48775] = 412; // 'state 412'
gotoTable[48780] = 20; // 'state 20'
gotoTable[48783] = 412; // 'state 412'
gotoTable[48791] = 412; // 'state 412'
gotoTable[48793] = 412; // 'state 412'
gotoTable[48796] = 21; // 'state 21'
gotoTable[48811] = 221; // 'state 221'
gotoTable.fill(538, 48813, 48817); // 'state 538'
gotoTable[48817] = 22; // 'state 22'
gotoTable[48818] = 422; // 'state 422'
gotoTable[48819] = 414; // 'state 414'
gotoTable[48821] = 23; // 'state 23'
gotoTable[48822] = 415; // 'state 415'
gotoTable.fill(414, 48823, 48834); // 'state 414'
gotoTable.fill(416, 48834, 48836); // 'state 416'
gotoTable[48838] = 423; // 'state 423'
gotoTable[48840] = 413; // 'state 413'
gotoTable[48842] = 413; // 'state 413'
gotoTable[48843] = 29; // 'state 29'
gotoTable.fill(423, 48844, 48847); // 'state 423'
gotoTable[48847] = 287; // 'state 287'
gotoTable[48848] = 424; // 'state 424'
gotoTable.fill(399, 48849, 48851); // 'state 399'
gotoTable[48908] = 473; // 'state 473'
gotoTable[48924] = 136; // 'state 136'
gotoTable[48927] = 741; // 'state 741'
gotoTable.fill(475, 48928, 48931); // 'state 475'
gotoTable[48931] = 476; // 'state 476'
gotoTable.fill(471, 48932, 48936); // 'state 471'
gotoTable[48936] = 477; // 'state 477'
gotoTable.fill(471, 48937, 48939); // 'state 471'
gotoTable[48940] = 471; // 'state 471'
gotoTable[48994] = 742; // 'state 742'
gotoTable[49220] = 434; // 'state 434'
gotoTable[49348] = 434; // 'state 434'
gotoTable[49378] = 744; // 'state 744'
gotoTable[49604] = 434; // 'state 434'
gotoTable[49632] = 746; // 'state 746'
gotoTable.fill(411, 49634, 49643); // 'state 411'
gotoTable[49645] = 411; // 'state 411'
gotoTable.fill(411, 49650, 49654); // 'state 411'
gotoTable[49654] = 412; // 'state 412'
gotoTable[49660] = 412; // 'state 412'
gotoTable[49662] = 412; // 'state 412'
gotoTable[49671] = 412; // 'state 412'
gotoTable[49676] = 20; // 'state 20'
gotoTable[49679] = 412; // 'state 412'
gotoTable[49687] = 412; // 'state 412'
gotoTable[49689] = 412; // 'state 412'
gotoTable[49692] = 21; // 'state 21'
gotoTable[49713] = 22; // 'state 22'
gotoTable[49714] = 413; // 'state 413'
gotoTable[49715] = 414; // 'state 414'
gotoTable[49717] = 23; // 'state 23'
gotoTable[49718] = 415; // 'state 415'
gotoTable.fill(414, 49719, 49730); // 'state 414'
gotoTable.fill(416, 49730, 49732); // 'state 416'
gotoTable[49736] = 413; // 'state 413'
gotoTable[49738] = 413; // 'state 413'
gotoTable.fill(399, 49745, 49747); // 'state 399'
gotoTable[49760] = 421; // 'state 421'
gotoTable[49761] = 394; // 'state 394'
gotoTable.fill(411, 49762, 49771); // 'state 411'
gotoTable[49773] = 411; // 'state 411'
gotoTable.fill(411, 49778, 49782); // 'state 411'
gotoTable[49782] = 412; // 'state 412'
gotoTable[49788] = 412; // 'state 412'
gotoTable[49790] = 412; // 'state 412'
gotoTable[49799] = 412; // 'state 412'
gotoTable[49804] = 20; // 'state 20'
gotoTable[49807] = 412; // 'state 412'
gotoTable[49815] = 412; // 'state 412'
gotoTable[49817] = 412; // 'state 412'
gotoTable[49820] = 21; // 'state 21'
gotoTable[49841] = 22; // 'state 22'
gotoTable[49842] = 413; // 'state 413'
gotoTable[49843] = 414; // 'state 414'
gotoTable[49845] = 23; // 'state 23'
gotoTable[49846] = 415; // 'state 415'
gotoTable.fill(414, 49847, 49858); // 'state 414'
gotoTable.fill(416, 49858, 49860); // 'state 416'
gotoTable[49864] = 413; // 'state 413'
gotoTable[49866] = 413; // 'state 413'
gotoTable.fill(399, 49873, 49875); // 'state 399'
gotoTable[49888] = 456; // 'state 456'
gotoTable.fill(411, 49890, 49899); // 'state 411'
gotoTable[49901] = 411; // 'state 411'
gotoTable.fill(411, 49906, 49910); // 'state 411'
gotoTable[49910] = 412; // 'state 412'
gotoTable[49916] = 412; // 'state 412'
gotoTable[49918] = 412; // 'state 412'
gotoTable[49927] = 412; // 'state 412'
gotoTable[49932] = 20; // 'state 20'
gotoTable[49935] = 412; // 'state 412'
gotoTable[49943] = 412; // 'state 412'
gotoTable[49945] = 412; // 'state 412'
gotoTable[49948] = 21; // 'state 21'
gotoTable[49969] = 22; // 'state 22'
gotoTable[49970] = 413; // 'state 413'
gotoTable[49971] = 414; // 'state 414'
gotoTable[49973] = 23; // 'state 23'
gotoTable[49974] = 415; // 'state 415'
gotoTable.fill(414, 49975, 49986); // 'state 414'
gotoTable.fill(416, 49986, 49988); // 'state 416'
gotoTable[49992] = 413; // 'state 413'
gotoTable[49994] = 413; // 'state 413'
gotoTable.fill(399, 50001, 50003); // 'state 399'
gotoTable[50018] = 668; // 'state 668'
gotoTable[50188] = 20; // 'state 20'
gotoTable[50204] = 21; // 'state 21'
gotoTable[50225] = 101; // 'state 101'
gotoTable[50226] = 413; // 'state 413'
gotoTable[50227] = 414; // 'state 414'
gotoTable[50229] = 23; // 'state 23'
gotoTable[50230] = 415; // 'state 415'
gotoTable.fill(414, 50231, 50242); // 'state 414'
gotoTable.fill(416, 50242, 50244); // 'state 416'
gotoTable[50245] = 97; // 'state 97'
gotoTable[50246] = 451; // 'state 451'
gotoTable[50248] = 413; // 'state 413'
gotoTable[50250] = 413; // 'state 413'
gotoTable.fill(399, 50257, 50259); // 'state 399'
gotoTable[50313] = 299; // 'state 299'
gotoTable[50332] = 300; // 'state 300'
gotoTable[50354] = 399; // 'state 399'
gotoTable[50355] = 95; // 'state 95'
gotoTable[50357] = 399; // 'state 399'
gotoTable[50376] = 399; // 'state 399'
gotoTable[50378] = 399; // 'state 399'
gotoTable.fill(399, 50385, 50387); // 'state 399'
gotoTable[50458] = 747; // 'state 747'
gotoTable[50528] = 456; // 'state 456'
gotoTable.fill(411, 50530, 50539); // 'state 411'
gotoTable[50541] = 411; // 'state 411'
gotoTable.fill(411, 50546, 50550); // 'state 411'
gotoTable[50550] = 412; // 'state 412'
gotoTable[50556] = 412; // 'state 412'
gotoTable[50558] = 412; // 'state 412'
gotoTable[50567] = 412; // 'state 412'
gotoTable[50572] = 20; // 'state 20'
gotoTable[50575] = 412; // 'state 412'
gotoTable[50583] = 412; // 'state 412'
gotoTable[50585] = 412; // 'state 412'
gotoTable[50588] = 21; // 'state 21'
gotoTable[50609] = 22; // 'state 22'
gotoTable[50610] = 413; // 'state 413'
gotoTable[50611] = 414; // 'state 414'
gotoTable[50613] = 23; // 'state 23'
gotoTable[50614] = 415; // 'state 415'
gotoTable.fill(414, 50615, 50626); // 'state 414'
gotoTable.fill(416, 50626, 50628); // 'state 416'
gotoTable[50632] = 413; // 'state 413'
gotoTable[50634] = 413; // 'state 413'
gotoTable.fill(399, 50641, 50643); // 'state 399'
gotoTable[50688] = 161; // 'state 161'
gotoTable[50690] = 447; // 'state 447'
gotoTable[50693] = 447; // 'state 447'
gotoTable[50698] = 162; // 'state 162'
gotoTable[50700] = 20; // 'state 20'
gotoTable[50702] = 163; // 'state 163'
gotoTable[50716] = 21; // 'state 21'
gotoTable[50737] = 88; // 'state 88'
gotoTable[50738] = 413; // 'state 413'
gotoTable[50739] = 414; // 'state 414'
gotoTable[50741] = 23; // 'state 23'
gotoTable[50742] = 415; // 'state 415'
gotoTable.fill(414, 50743, 50754); // 'state 414'
gotoTable.fill(416, 50754, 50756); // 'state 416'
gotoTable[50757] = 89; // 'state 89'
gotoTable[50758] = 451; // 'state 451'
gotoTable[50760] = 413; // 'state 413'
gotoTable[50762] = 413; // 'state 413'
gotoTable.fill(399, 50769, 50771); // 'state 399'
gotoTable[50842] = 748; // 'state 748'
gotoTable[50944] = 250; // 'state 250'
gotoTable[50946] = 447; // 'state 447'
gotoTable[50949] = 447; // 'state 447'
gotoTable[50956] = 20; // 'state 20'
gotoTable[50972] = 21; // 'state 21'
gotoTable[50993] = 106; // 'state 106'
gotoTable[50994] = 413; // 'state 413'
gotoTable[50995] = 414; // 'state 414'
gotoTable[50997] = 23; // 'state 23'
gotoTable[50998] = 415; // 'state 415'
gotoTable.fill(414, 50999, 51010); // 'state 414'
gotoTable.fill(416, 51010, 51012); // 'state 416'
gotoTable[51016] = 413; // 'state 413'
gotoTable[51018] = 413; // 'state 413'
gotoTable.fill(399, 51025, 51027); // 'state 399'
gotoTable[51084] = 67; // 'state 67'
gotoTable[51100] = 68; // 'state 68'
gotoTable[51125] = 67; // 'state 67'

const wordFallbackTable = new Uint8Array(96);
wordFallbackTable.fill(1, 0, 5); // true..super
wordFallbackTable[7] = 1; // if
wordFallbackTable.fill(1, 10, 13); // else..do
wordFallbackTable.fill(1, 14, 27); // for..case
wordFallbackTable.fill(1, 28, 33); // default..from
wordFallbackTable.fill(1, 35, 39); // as..declare
wordFallbackTable.fill(1, 43, 53); // async..interface
wordFallbackTable.fill(1, 59, 63); // void..new
wordFallbackTable[68] = 1; // instanceof
wordFallbackTable.fill(1, 74, 76); // delete..await
wordFallbackTable[83] = 1; // accessibility_modifier

const nextToken = nextTokenInitial;

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
    return nextToken(this.#stream, prevEnd).start;
  }

  get start() {
    const t = this.#tree;
    let p = this.#pointer;
    if (t[p] >>> 8 > 0) {
      const mask = t[0] === 0 ? 0x3fffff : 0xffffffff;
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
      const mask = t[0] === 0 ? 0x3fffff : 0xffffffff;
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
    return nextToken(this.#stream, prevEnd).start;
  }

  get start() {
    const t = this.#tree;
    let p = this.#pointer;
    if (t[p] >>> 8 > 0) {
      const mask = t[0] === 0 ? 0x3fffff : 0xffffffff;
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
    const mask = t[0] === 0 ? 0x3fffff : 0xffffffff;
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
    const mask = t[0] === 0 ? 0x3fffff : 0xffffffff;
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
    const mask = t[0] === 0 ? 0x3fffff : 0xffffffff;
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
    const mask = t[0] === 0 ? 0x3fffff : 0xffffffff;
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

    const mask = t[0] === 0 ? 0x3fffff : 0xffffffff;
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
    const mask = t[0] === 0 ? 0x3fffff : 0xffffffff;
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
    const mask = t[0] === 0 ? 0x3fffff : 0xffffffff;
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
    while (q >= 2 && (tree[q] >>> 8 > 0 || (tree[q] & 0xff) > 93)) {
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
  for (let t = 0; t <= 93; t++) {
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
  const firstRes = nextToken(stream, 0);
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

  const wf = wordFallbackTable;

  let topState = 0;
  stackStates[0] = topState;
  stackTps[0] = 0;
  let sp = 0;
  let tp = 2;

  while (true) {
    const currentState = topState;
    const actionLookup = actions[(currentState << 7) + lookahead];
    if ((actionLookup & 1) === 0) {
      if (actionLookup === 0xfffe) {
        tree[1] = tp - 2;
        return new CstNode(stream, tree, tp - 2);
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
      tree[tp] = lookahead;
      tree[tp + 1] = lookaheadEnd;
      sp += 1;
      topState = actionLookup >>> 1;
      stackStates[sp] = topState;
      stackTps[sp] = tp;
      const res = nextToken(stream, lookaheadEnd);
      lookahead = res.state;
      lookaheadStart = res.start;
      lookaheadEnd = res.end;
    } else {
      if (actionLookup === 0xffff) {
        if (
          wf[lookahead] !== 0 &&
          actions[(currentState << 7) + 78] !== 0xffff
        ) {
          lookahead = 78;
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

  const firstRes = nextToken(stream, 0);
  let lookahead = firstRes.state;

  const firstLen = firstRes.end - firstRes.start;
  let lookaheadSpan =
    firstRes.end | ((firstLen < 1023 ? firstLen : 1023) << 22);

  const stack = arena.stack;
  const tree = arena.tree;
  const actions = actionsTable;
  const goto = gotoTable;

  const wf = wordFallbackTable;
  if (stream.length >>> 1 <= tree.length) {
    let top = 0; // starting state
    stack[0] = top;
    let sp = 0;
    // let the tree stack start from offset 2
    // offset 0 means an error occurred and should be used by the parser
    let tp = 2;

    while (true) {
      const currentState = top >>> 22;

      const actionLookup = actions[(currentState << 7) + lookahead];
      if ((actionLookup & 1) === 0) {
        // shift
        if (actionLookup === 0xfffe) {
          tree[1] = tp - 2;
          return new CstNode(stream, tree, tp - 2);
        }

        tree[tp] = lookahead; // name (and nChildren = 0)
        tree[tp + 1] = lookaheadSpan;

        sp += 1;
        top = tp | (actionLookup << 21);
        stack[sp] = top;

        const res = nextToken(stream, lookaheadSpan & 0x3fffff);
        lookahead = res.state;

        const tokLen = res.end - res.start;
        lookaheadSpan = res.end | ((tokLen < 1023 ? tokLen : 1023) << 22);
      } else {
        // reduce
        if (actionLookup === 0xffff) {
          if (
            wf[lookahead] !== 0 &&
            actions[(currentState << 7) + 78] !== 0xffff
          ) {
            lookahead = 78;
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
        const nextState = goto[((rtop >>> 22) << 7) + (word0 & 0xff)];
        tree[tp + 1] = rtop; // prevSibling / subtreeStart - 2

        sp += 1;
        top = tp | (nextState << 22);
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
  if (len > 4194304) {
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
