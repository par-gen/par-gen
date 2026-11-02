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
  "private_property_identifier", // 78
  "number", // 79
  "string", // 80
  "template_string", // 81
  "accessibility_modifier", // 82
  "compound_assignment_operator", // 83
  "equality_operator", // 84
  "relational_operator", // 85
  "shift_operator", // 86
  "multiplicative_operator", // 87
  "update_operator", // 88
  "identifier", // 89
  "regex", // 90
  "@par-gen.EOF", // 91
  "@par-gen.ERROR", // 92
  "S", // 93
  "program", // 94
  "_statement", // 95
  "_statement_block_repeat1", // 96
  "statement_block", // 97
  "if_statement", // 98
  "while_statement", // 99
  "do_statement", // 100
  "for_statement", // 101
  "for_in_statement", // 102
  "return_statement", // 103
  "throw_statement", // 104
  "try_statement", // 105
  "catch_clause", // 106
  "finally_clause", // 107
  "switch_statement", // 108
  "_switch_body_repeat2", // 109
  "switch_body", // 110
  "switch_case", // 111
  "switch_default", // 112
  "break_statement", // 113
  "continue_statement", // 114
  "expression_statement", // 115
  "_declaration", // 116
  "import_statement", // 117
  "import_clause", // 118
  "namespace_import", // 119
  "_named_imports_repeat3", // 120
  "named_imports", // 121
  "import_specifier", // 122
  "export_statement", // 123
  "_variable_declaration_repeat4", // 124
  "variable_declaration", // 125
  "variable_declarator", // 126
  "_binding_pattern", // 127
  "_object_pattern_repeat5", // 128
  "object_pattern", // 129
  "object_pattern_property", // 130
  "_array_pattern_repeat6", // 131
  "array_pattern", // 132
  "array_pattern_element", // 133
  "function_declaration", // 134
  "_formal_parameters_repeat7", // 135
  "formal_parameters", // 136
  "formal_parameter", // 137
  "_typed_parameters_repeat8", // 138
  "typed_parameters", // 139
  "typed_parameter", // 140
  "member_modifiers", // 141
  "class_declaration", // 142
  "class_heritage", // 143
  "_implements_clause_repeat9", // 144
  "implements_clause", // 145
  "_class_body_repeat10", // 146
  "class_body", // 147
  "method_definition", // 148
  "field_definition", // 149
  "interface_declaration", // 150
  "extends_type_clause", // 151
  "type_alias_declaration", // 152
  "type_annotation", // 153
  "_type_parameters_repeat11", // 154
  "type_parameters", // 155
  "type_parameter", // 156
  "type_arguments", // 157
  "_type", // 158
  "union_type", // 159
  "intersection_type", // 160
  "function_type", // 161
  "_primary_type", // 162
  "generic_type", // 163
  "array_type", // 164
  "indexed_access_type", // 165
  "tuple_type", // 166
  "parenthesized_type", // 167
  "typeof_type", // 168
  "type_predicate", // 169
  "_object_type_repeat12", // 170
  "object_type", // 171
  "property_signature", // 172
  "method_signature", // 173
  "construct_signature", // 174
  "index_signature", // 175
  "_expression", // 176
  "_contextual_id", // 177
  "_primary_expression", // 178
  "_parenthesized_expression_repeat13", // 179
  "parenthesized_expression", // 180
  "_lhs_expression", // 181
  "assignment_expression", // 182
  "augmented_assignment_expression", // 183
  "arrow_function", // 184
  "ternary_expression", // 185
  "binary_expression", // 186
  "as_expression", // 187
  "unary_expression", // 188
  "await_expression", // 189
  "update_expression", // 190
  "new_expression", // 191
  "call_expression", // 192
  "member_expression", // 193
  "subscript_expression", // 194
  "arguments", // 195
  "argument", // 196
  "spread_element", // 197
  "_array_repeat14", // 198
  "array", // 199
  "_object_repeat15", // 200
  "object", // 201
  "object_member", // 202
  "object_method", // 203
  "pair", // 204
  "shorthand_property_identifier", // 205
  "_property_name", // 206
  "computed_property_name", // 207
  "function_expression", // 208
  "class_expression", // 209
  "comment", // 210
];

const actionsTable = new Uint16Array(191712).fill(0xffff);
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
actionsTable.fill(798, 79, 82); // 'state 0' -> number..template_string -> shift (target=399, len=0)
actionsTable[88] = 36; // 'state 0' -> update_operator -> shift (target=18, len=0)
actionsTable[89] = 818; // 'state 0' -> identifier -> shift (target=409, len=0)
actionsTable[90] = 798; // 'state 0' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 256, 261); // 'state 1' -> true..super -> shift (target=399, len=0)
actionsTable[261] = 2; // 'state 1' -> { -> shift (target=1, len=0)
actionsTable[262] = 836; // 'state 1' -> } -> shift (target=418, len=0)
actionsTable[263] = 800; // 'state 1' -> if -> shift (target=400, len=0)
actionsTable[264] = 4; // 'state 1' -> ( -> shift (target=2, len=0)
actionsTable[267] = 802; // 'state 1' -> while -> shift (target=401, len=0)
actionsTable[268] = 6; // 'state 1' -> do -> shift (target=3, len=0)
actionsTable[270] = 804; // 'state 1' -> for -> shift (target=402, len=0)
actionsTable.fill(8, 271, 274); // 'state 1' -> const..var -> shift (target=4, len=0)
actionsTable[274] = 806; // 'state 1' -> of -> shift (target=403, len=0)
actionsTable[276] = 10; // 'state 1' -> return -> shift (target=5, len=0)
actionsTable[277] = 12; // 'state 1' -> throw -> shift (target=6, len=0)
actionsTable[278] = 14; // 'state 1' -> try -> shift (target=7, len=0)
actionsTable[281] = 808; // 'state 1' -> switch -> shift (target=404, len=0)
actionsTable[285] = 810; // 'state 1' -> break -> shift (target=405, len=0)
actionsTable[286] = 812; // 'state 1' -> continue -> shift (target=406, len=0)
actionsTable[287] = 16; // 'state 1' -> import -> shift (target=8, len=0)
actionsTable[288] = 806; // 'state 1' -> from -> shift (target=403, len=0)
actionsTable[292] = 814; // 'state 1' -> type -> shift (target=407, len=0)
actionsTable[293] = 18; // 'state 1' -> export -> shift (target=9, len=0)
actionsTable[296] = 48; // 'state 1' -> ... -> shift (target=24, len=0)
actionsTable[297] = 50; // 'state 1' -> [ -> shift (target=25, len=0)
actionsTable[299] = 52; // 'state 1' -> async -> shift (target=26, len=0)
actionsTable[300] = 24; // 'state 1' -> function -> shift (target=12, len=0)
actionsTable.fill(54, 303, 305); // 'state 1' -> get..set -> shift (target=27, len=0)
actionsTable[305] = 26; // 'state 1' -> class -> shift (target=13, len=0)
actionsTable[308] = 816; // 'state 1' -> interface -> shift (target=408, len=0)
actionsTable[310] = 28; // 'state 1' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 315, 317); // 'state 1' -> void..typeof -> shift (target=15, len=0)
actionsTable[318] = 32; // 'state 1' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 325, 327); // 'state 1' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 328, 331); // 'state 1' -> !..delete -> shift (target=15, len=0)
actionsTable[331] = 34; // 'state 1' -> await -> shift (target=17, len=0)
actionsTable.fill(838, 335, 337); // 'state 1' -> number..string -> shift (target=419, len=0)
actionsTable[337] = 798; // 'state 1' -> template_string -> shift (target=399, len=0)
actionsTable[344] = 36; // 'state 1' -> update_operator -> shift (target=18, len=0)
actionsTable[345] = 840; // 'state 1' -> identifier -> shift (target=420, len=0)
actionsTable[346] = 798; // 'state 1' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 512, 517); // 'state 2' -> true..super -> shift (target=399, len=0)
actionsTable[517] = 68; // 'state 2' -> { -> shift (target=34, len=0)
actionsTable[520] = 4; // 'state 2' -> ( -> shift (target=2, len=0)
actionsTable[521] = 134; // 'state 2' -> ) -> shift (target=67, len=0)
actionsTable[530] = 806; // 'state 2' -> of -> shift (target=403, len=0)
actionsTable[544] = 806; // 'state 2' -> from -> shift (target=403, len=0)
actionsTable[548] = 806; // 'state 2' -> type -> shift (target=403, len=0)
actionsTable[552] = 170; // 'state 2' -> ... -> shift (target=85, len=0)
actionsTable[553] = 20; // 'state 2' -> [ -> shift (target=10, len=0)
actionsTable[555] = 70; // 'state 2' -> async -> shift (target=35, len=0)
actionsTable[556] = 72; // 'state 2' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 559, 561); // 'state 2' -> get..set -> shift (target=403, len=0)
actionsTable[561] = 74; // 'state 2' -> class -> shift (target=37, len=0)
actionsTable[566] = 28; // 'state 2' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 571, 573); // 'state 2' -> void..typeof -> shift (target=15, len=0)
actionsTable[574] = 32; // 'state 2' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 581, 583); // 'state 2' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 584, 587); // 'state 2' -> !..delete -> shift (target=15, len=0)
actionsTable[587] = 34; // 'state 2' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 591, 594); // 'state 2' -> number..template_string -> shift (target=399, len=0)
actionsTable[600] = 36; // 'state 2' -> update_operator -> shift (target=18, len=0)
actionsTable[601] = 172; // 'state 2' -> identifier -> shift (target=86, len=0)
actionsTable[602] = 798; // 'state 2' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 768, 773); // 'state 3' -> true..super -> shift (target=399, len=0)
actionsTable[773] = 2; // 'state 3' -> { -> shift (target=1, len=0)
actionsTable[775] = 800; // 'state 3' -> if -> shift (target=400, len=0)
actionsTable[776] = 4; // 'state 3' -> ( -> shift (target=2, len=0)
actionsTable[779] = 802; // 'state 3' -> while -> shift (target=401, len=0)
actionsTable[780] = 6; // 'state 3' -> do -> shift (target=3, len=0)
actionsTable[782] = 804; // 'state 3' -> for -> shift (target=402, len=0)
actionsTable.fill(8, 783, 786); // 'state 3' -> const..var -> shift (target=4, len=0)
actionsTable[786] = 806; // 'state 3' -> of -> shift (target=403, len=0)
actionsTable[788] = 10; // 'state 3' -> return -> shift (target=5, len=0)
actionsTable[789] = 12; // 'state 3' -> throw -> shift (target=6, len=0)
actionsTable[790] = 14; // 'state 3' -> try -> shift (target=7, len=0)
actionsTable[793] = 808; // 'state 3' -> switch -> shift (target=404, len=0)
actionsTable[797] = 810; // 'state 3' -> break -> shift (target=405, len=0)
actionsTable[798] = 812; // 'state 3' -> continue -> shift (target=406, len=0)
actionsTable[799] = 16; // 'state 3' -> import -> shift (target=8, len=0)
actionsTable[800] = 806; // 'state 3' -> from -> shift (target=403, len=0)
actionsTable[804] = 814; // 'state 3' -> type -> shift (target=407, len=0)
actionsTable[805] = 18; // 'state 3' -> export -> shift (target=9, len=0)
actionsTable[809] = 20; // 'state 3' -> [ -> shift (target=10, len=0)
actionsTable[811] = 22; // 'state 3' -> async -> shift (target=11, len=0)
actionsTable[812] = 24; // 'state 3' -> function -> shift (target=12, len=0)
actionsTable.fill(806, 815, 817); // 'state 3' -> get..set -> shift (target=403, len=0)
actionsTable[817] = 26; // 'state 3' -> class -> shift (target=13, len=0)
actionsTable[820] = 816; // 'state 3' -> interface -> shift (target=408, len=0)
actionsTable[822] = 28; // 'state 3' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 827, 829); // 'state 3' -> void..typeof -> shift (target=15, len=0)
actionsTable[830] = 32; // 'state 3' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 837, 839); // 'state 3' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 840, 843); // 'state 3' -> !..delete -> shift (target=15, len=0)
actionsTable[843] = 34; // 'state 3' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 847, 850); // 'state 3' -> number..template_string -> shift (target=399, len=0)
actionsTable[856] = 36; // 'state 3' -> update_operator -> shift (target=18, len=0)
actionsTable[857] = 818; // 'state 3' -> identifier -> shift (target=409, len=0)
actionsTable[858] = 798; // 'state 3' -> regex -> shift (target=399, len=0)
actionsTable[1029] = 122; // 'state 4' -> { -> shift (target=61, len=0)
actionsTable[1065] = 124; // 'state 4' -> [ -> shift (target=62, len=0)
actionsTable[1113] = 894; // 'state 4' -> identifier -> shift (target=447, len=0)
actionsTable.fill(798, 1280, 1285); // 'state 5' -> true..super -> shift (target=399, len=0)
actionsTable[1285] = 68; // 'state 5' -> { -> shift (target=34, len=0)
actionsTable.fill(719, 1286, 1288); // 'state 5' -> }..if -> reduce (target=103, len=1)
actionsTable[1288] = 4; // 'state 5' -> ( -> shift (target=2, len=0)
actionsTable.fill(719, 1290, 1293); // 'state 5' -> else..do -> reduce (target=103, len=1)
actionsTable[1293] = 852; // 'state 5' -> ; -> shift (target=426, len=0)
actionsTable.fill(719, 1294, 1298); // 'state 5' -> for..var -> reduce (target=103, len=1)
actionsTable[1298] = 806; // 'state 5' -> of -> shift (target=403, len=0)
actionsTable.fill(719, 1300, 1303); // 'state 5' -> return..try -> reduce (target=103, len=1)
actionsTable.fill(719, 1305, 1307); // 'state 5' -> switch..case -> reduce (target=103, len=1)
actionsTable.fill(719, 1308, 1312); // 'state 5' -> default..import -> reduce (target=103, len=1)
actionsTable[1312] = 806; // 'state 5' -> from -> shift (target=403, len=0)
actionsTable[1316] = 806; // 'state 5' -> type -> shift (target=403, len=0)
actionsTable[1317] = 719; // 'state 5' -> export -> reduce (target=103, len=1)
actionsTable[1321] = 20; // 'state 5' -> [ -> shift (target=10, len=0)
actionsTable[1323] = 70; // 'state 5' -> async -> shift (target=35, len=0)
actionsTable[1324] = 72; // 'state 5' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 1327, 1329); // 'state 5' -> get..set -> shift (target=403, len=0)
actionsTable[1329] = 74; // 'state 5' -> class -> shift (target=37, len=0)
actionsTable[1332] = 719; // 'state 5' -> interface -> reduce (target=103, len=1)
actionsTable[1334] = 28; // 'state 5' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 1339, 1341); // 'state 5' -> void..typeof -> shift (target=15, len=0)
actionsTable[1342] = 32; // 'state 5' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 1349, 1351); // 'state 5' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 1352, 1355); // 'state 5' -> !..delete -> shift (target=15, len=0)
actionsTable[1355] = 34; // 'state 5' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 1359, 1362); // 'state 5' -> number..template_string -> shift (target=399, len=0)
actionsTable[1368] = 36; // 'state 5' -> update_operator -> shift (target=18, len=0)
actionsTable[1369] = 818; // 'state 5' -> identifier -> shift (target=409, len=0)
actionsTable[1370] = 798; // 'state 5' -> regex -> shift (target=399, len=0)
actionsTable[1371] = 719; // 'state 5' -> @par-gen.EOF -> reduce (target=103, len=1)
actionsTable.fill(798, 1536, 1541); // 'state 6' -> true..super -> shift (target=399, len=0)
actionsTable[1541] = 68; // 'state 6' -> { -> shift (target=34, len=0)
actionsTable[1544] = 4; // 'state 6' -> ( -> shift (target=2, len=0)
actionsTable[1554] = 806; // 'state 6' -> of -> shift (target=403, len=0)
actionsTable[1568] = 806; // 'state 6' -> from -> shift (target=403, len=0)
actionsTable[1572] = 806; // 'state 6' -> type -> shift (target=403, len=0)
actionsTable[1577] = 20; // 'state 6' -> [ -> shift (target=10, len=0)
actionsTable[1579] = 70; // 'state 6' -> async -> shift (target=35, len=0)
actionsTable[1580] = 72; // 'state 6' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 1583, 1585); // 'state 6' -> get..set -> shift (target=403, len=0)
actionsTable[1585] = 74; // 'state 6' -> class -> shift (target=37, len=0)
actionsTable[1590] = 28; // 'state 6' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 1595, 1597); // 'state 6' -> void..typeof -> shift (target=15, len=0)
actionsTable[1598] = 32; // 'state 6' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 1605, 1607); // 'state 6' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 1608, 1611); // 'state 6' -> !..delete -> shift (target=15, len=0)
actionsTable[1611] = 34; // 'state 6' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 1615, 1618); // 'state 6' -> number..template_string -> shift (target=399, len=0)
actionsTable[1624] = 36; // 'state 6' -> update_operator -> shift (target=18, len=0)
actionsTable[1625] = 818; // 'state 6' -> identifier -> shift (target=409, len=0)
actionsTable[1626] = 798; // 'state 6' -> regex -> shift (target=399, len=0)
actionsTable[1797] = 80; // 'state 7' -> { -> shift (target=40, len=0)
actionsTable[2053] = 116; // 'state 8' -> { -> shift (target=58, len=0)
actionsTable[2082] = 870; // 'state 8' -> * -> shift (target=435, len=0)
actionsTable[2128] = 872; // 'state 8' -> string -> shift (target=436, len=0)
actionsTable[2137] = 874; // 'state 8' -> identifier -> shift (target=437, len=0)
actionsTable[2309] = 116; // 'state 9' -> { -> shift (target=58, len=0)
actionsTable.fill(8, 2319, 2322); // 'state 9' -> const..var -> shift (target=4, len=0)
actionsTable[2332] = 118; // 'state 9' -> default -> shift (target=59, len=0)
actionsTable[2335] = 16; // 'state 9' -> import -> shift (target=8, len=0)
actionsTable[2338] = 880; // 'state 9' -> * -> shift (target=440, len=0)
actionsTable[2340] = 882; // 'state 9' -> type -> shift (target=441, len=0)
actionsTable[2341] = 18; // 'state 9' -> export -> shift (target=9, len=0)
actionsTable[2342] = 120; // 'state 9' -> declare -> shift (target=60, len=0)
actionsTable[2347] = 884; // 'state 9' -> async -> shift (target=442, len=0)
actionsTable[2348] = 886; // 'state 9' -> function -> shift (target=443, len=0)
actionsTable[2353] = 888; // 'state 9' -> class -> shift (target=444, len=0)
actionsTable[2356] = 816; // 'state 9' -> interface -> shift (target=408, len=0)
actionsTable.fill(798, 2560, 2565); // 'state 10' -> true..super -> shift (target=399, len=0)
actionsTable[2565] = 68; // 'state 10' -> { -> shift (target=34, len=0)
actionsTable[2568] = 4; // 'state 10' -> ( -> shift (target=2, len=0)
actionsTable[2578] = 806; // 'state 10' -> of -> shift (target=403, len=0)
actionsTable[2592] = 806; // 'state 10' -> from -> shift (target=403, len=0)
actionsTable[2593] = 192; // 'state 10' -> , -> shift (target=96, len=0)
actionsTable[2596] = 806; // 'state 10' -> type -> shift (target=403, len=0)
actionsTable[2600] = 48; // 'state 10' -> ... -> shift (target=24, len=0)
actionsTable[2601] = 20; // 'state 10' -> [ -> shift (target=10, len=0)
actionsTable[2602] = 906; // 'state 10' -> ] -> shift (target=453, len=0)
actionsTable[2603] = 70; // 'state 10' -> async -> shift (target=35, len=0)
actionsTable[2604] = 72; // 'state 10' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 2607, 2609); // 'state 10' -> get..set -> shift (target=403, len=0)
actionsTable[2609] = 74; // 'state 10' -> class -> shift (target=37, len=0)
actionsTable[2614] = 28; // 'state 10' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 2619, 2621); // 'state 10' -> void..typeof -> shift (target=15, len=0)
actionsTable[2622] = 32; // 'state 10' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 2629, 2631); // 'state 10' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 2632, 2635); // 'state 10' -> !..delete -> shift (target=15, len=0)
actionsTable[2635] = 34; // 'state 10' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 2639, 2642); // 'state 10' -> number..template_string -> shift (target=399, len=0)
actionsTable[2648] = 36; // 'state 10' -> update_operator -> shift (target=18, len=0)
actionsTable[2649] = 818; // 'state 10' -> identifier -> shift (target=409, len=0)
actionsTable[2650] = 798; // 'state 10' -> regex -> shift (target=399, len=0)
actionsTable.fill(867, 2816, 2824); // 'state 11' -> true..if -> reduce (target=177, len=1)
actionsTable[2824] = 130; // 'state 11' -> ( -> shift (target=65, len=0)
actionsTable.fill(867, 2826, 2839); // 'state 11' -> else..try -> reduce (target=177, len=1)
actionsTable.fill(867, 2841, 2843); // 'state 11' -> switch..case -> reduce (target=177, len=1)
actionsTable.fill(867, 2844, 2849); // 'state 11' -> default..from -> reduce (target=177, len=1)
actionsTable.fill(867, 2850, 2854); // 'state 11' -> *..export -> reduce (target=177, len=1)
actionsTable[2855] = 867; // 'state 11' -> = -> reduce (target=177, len=1)
actionsTable[2857] = 867; // 'state 11' -> [ -> reduce (target=177, len=1)
actionsTable[2859] = 867; // 'state 11' -> async -> reduce (target=177, len=1)
actionsTable[2860] = 132; // 'state 11' -> function -> shift (target=66, len=0)
actionsTable.fill(867, 2863, 2866); // 'state 11' -> get..class -> reduce (target=177, len=1)
actionsTable[2868] = 867; // 'state 11' -> interface -> reduce (target=177, len=1)
actionsTable[2870] = 28; // 'state 11' -> < -> shift (target=14, len=0)
actionsTable.fill(867, 2871, 2874); // 'state 11' -> >..& -> reduce (target=177, len=1)
actionsTable.fill(867, 2875, 2877); // 'state 11' -> void..typeof -> reduce (target=177, len=1)
actionsTable.fill(867, 2878, 2894); // 'state 11' -> new... -> reduce (target=177, len=1)
actionsTable.fill(867, 2895, 2898); // 'state 11' -> number..template_string -> reduce (target=177, len=1)
actionsTable.fill(867, 2899, 2905); // 'state 11' -> compound_assignment_operator..update_operator -> reduce (target=177, len=1)
actionsTable[2905] = 896; // 'state 11' -> identifier -> shift (target=448, len=0)
actionsTable.fill(867, 2906, 2908); // 'state 11' -> regex..@par-gen.EOF -> reduce (target=177, len=1)
actionsTable[3080] = 138; // 'state 12' -> ( -> shift (target=69, len=0)
actionsTable[3126] = 28; // 'state 12' -> < -> shift (target=14, len=0)
actionsTable[3161] = 140; // 'state 12' -> identifier -> shift (target=70, len=0)
actionsTable[3333] = 146; // 'state 13' -> { -> shift (target=73, len=0)
actionsTable[3378] = 148; // 'state 13' -> extends -> shift (target=74, len=0)
actionsTable[3379] = 150; // 'state 13' -> implements -> shift (target=75, len=0)
actionsTable[3382] = 28; // 'state 13' -> < -> shift (target=14, len=0)
actionsTable[3417] = 152; // 'state 13' -> identifier -> shift (target=76, len=0)
actionsTable[3673] = 908; // 'state 14' -> identifier -> shift (target=454, len=0)
actionsTable.fill(798, 3840, 3845); // 'state 15' -> true..super -> shift (target=399, len=0)
actionsTable[3845] = 68; // 'state 15' -> { -> shift (target=34, len=0)
actionsTable[3848] = 4; // 'state 15' -> ( -> shift (target=2, len=0)
actionsTable[3858] = 806; // 'state 15' -> of -> shift (target=403, len=0)
actionsTable[3872] = 806; // 'state 15' -> from -> shift (target=403, len=0)
actionsTable[3876] = 806; // 'state 15' -> type -> shift (target=403, len=0)
actionsTable[3881] = 20; // 'state 15' -> [ -> shift (target=10, len=0)
actionsTable[3883] = 70; // 'state 15' -> async -> shift (target=35, len=0)
actionsTable[3884] = 72; // 'state 15' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 3887, 3889); // 'state 15' -> get..set -> shift (target=403, len=0)
actionsTable[3889] = 74; // 'state 15' -> class -> shift (target=37, len=0)
actionsTable[3894] = 28; // 'state 15' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 3899, 3901); // 'state 15' -> void..typeof -> shift (target=15, len=0)
actionsTable[3902] = 32; // 'state 15' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 3909, 3911); // 'state 15' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 3912, 3915); // 'state 15' -> !..delete -> shift (target=15, len=0)
actionsTable[3915] = 34; // 'state 15' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 3919, 3922); // 'state 15' -> number..template_string -> shift (target=399, len=0)
actionsTable[3928] = 36; // 'state 15' -> update_operator -> shift (target=18, len=0)
actionsTable[3929] = 818; // 'state 15' -> identifier -> shift (target=409, len=0)
actionsTable[3930] = 798; // 'state 15' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 4096, 4101); // 'state 16' -> true..super -> shift (target=399, len=0)
actionsTable[4101] = 68; // 'state 16' -> { -> shift (target=34, len=0)
actionsTable[4104] = 188; // 'state 16' -> ( -> shift (target=94, len=0)
actionsTable[4114] = 806; // 'state 16' -> of -> shift (target=403, len=0)
actionsTable[4128] = 806; // 'state 16' -> from -> shift (target=403, len=0)
actionsTable[4132] = 806; // 'state 16' -> type -> shift (target=403, len=0)
actionsTable[4137] = 20; // 'state 16' -> [ -> shift (target=10, len=0)
actionsTable[4139] = 904; // 'state 16' -> async -> shift (target=452, len=0)
actionsTable[4140] = 72; // 'state 16' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 4143, 4145); // 'state 16' -> get..set -> shift (target=403, len=0)
actionsTable[4145] = 74; // 'state 16' -> class -> shift (target=37, len=0)
actionsTable.fill(798, 4175, 4178); // 'state 16' -> number..template_string -> shift (target=399, len=0)
actionsTable.fill(798, 4185, 4187); // 'state 16' -> identifier..regex -> shift (target=399, len=0)
actionsTable.fill(798, 4352, 4357); // 'state 17' -> true..super -> shift (target=399, len=0)
actionsTable[4357] = 68; // 'state 17' -> { -> shift (target=34, len=0)
actionsTable[4360] = 4; // 'state 17' -> ( -> shift (target=2, len=0)
actionsTable[4370] = 806; // 'state 17' -> of -> shift (target=403, len=0)
actionsTable[4384] = 806; // 'state 17' -> from -> shift (target=403, len=0)
actionsTable[4388] = 806; // 'state 17' -> type -> shift (target=403, len=0)
actionsTable[4393] = 20; // 'state 17' -> [ -> shift (target=10, len=0)
actionsTable[4395] = 70; // 'state 17' -> async -> shift (target=35, len=0)
actionsTable[4396] = 72; // 'state 17' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 4399, 4401); // 'state 17' -> get..set -> shift (target=403, len=0)
actionsTable[4401] = 74; // 'state 17' -> class -> shift (target=37, len=0)
actionsTable[4406] = 28; // 'state 17' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 4411, 4413); // 'state 17' -> void..typeof -> shift (target=15, len=0)
actionsTable[4414] = 32; // 'state 17' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 4421, 4423); // 'state 17' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 4424, 4427); // 'state 17' -> !..delete -> shift (target=15, len=0)
actionsTable[4427] = 34; // 'state 17' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 4431, 4434); // 'state 17' -> number..template_string -> shift (target=399, len=0)
actionsTable[4440] = 36; // 'state 17' -> update_operator -> shift (target=18, len=0)
actionsTable[4441] = 818; // 'state 17' -> identifier -> shift (target=409, len=0)
actionsTable[4442] = 798; // 'state 17' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 4608, 4613); // 'state 18' -> true..super -> shift (target=399, len=0)
actionsTable[4613] = 68; // 'state 18' -> { -> shift (target=34, len=0)
actionsTable[4616] = 4; // 'state 18' -> ( -> shift (target=2, len=0)
actionsTable[4626] = 806; // 'state 18' -> of -> shift (target=403, len=0)
actionsTable[4640] = 806; // 'state 18' -> from -> shift (target=403, len=0)
actionsTable[4644] = 806; // 'state 18' -> type -> shift (target=403, len=0)
actionsTable[4649] = 20; // 'state 18' -> [ -> shift (target=10, len=0)
actionsTable[4651] = 70; // 'state 18' -> async -> shift (target=35, len=0)
actionsTable[4652] = 72; // 'state 18' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 4655, 4657); // 'state 18' -> get..set -> shift (target=403, len=0)
actionsTable[4657] = 74; // 'state 18' -> class -> shift (target=37, len=0)
actionsTable[4662] = 28; // 'state 18' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 4667, 4669); // 'state 18' -> void..typeof -> shift (target=15, len=0)
actionsTable[4670] = 32; // 'state 18' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 4677, 4679); // 'state 18' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 4680, 4683); // 'state 18' -> !..delete -> shift (target=15, len=0)
actionsTable[4683] = 34; // 'state 18' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 4687, 4690); // 'state 18' -> number..template_string -> shift (target=399, len=0)
actionsTable[4696] = 36; // 'state 18' -> update_operator -> shift (target=18, len=0)
actionsTable[4697] = 818; // 'state 18' -> identifier -> shift (target=409, len=0)
actionsTable[4698] = 798; // 'state 18' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 4864, 4869); // 'state 19' -> true..super -> shift (target=399, len=0)
actionsTable[4869] = 2; // 'state 19' -> { -> shift (target=1, len=0)
actionsTable[4871] = 800; // 'state 19' -> if -> shift (target=400, len=0)
actionsTable[4872] = 4; // 'state 19' -> ( -> shift (target=2, len=0)
actionsTable[4875] = 802; // 'state 19' -> while -> shift (target=401, len=0)
actionsTable[4876] = 6; // 'state 19' -> do -> shift (target=3, len=0)
actionsTable[4878] = 804; // 'state 19' -> for -> shift (target=402, len=0)
actionsTable.fill(8, 4879, 4882); // 'state 19' -> const..var -> shift (target=4, len=0)
actionsTable[4882] = 806; // 'state 19' -> of -> shift (target=403, len=0)
actionsTable[4884] = 10; // 'state 19' -> return -> shift (target=5, len=0)
actionsTable[4885] = 12; // 'state 19' -> throw -> shift (target=6, len=0)
actionsTable[4886] = 14; // 'state 19' -> try -> shift (target=7, len=0)
actionsTable[4889] = 808; // 'state 19' -> switch -> shift (target=404, len=0)
actionsTable[4893] = 810; // 'state 19' -> break -> shift (target=405, len=0)
actionsTable[4894] = 812; // 'state 19' -> continue -> shift (target=406, len=0)
actionsTable[4895] = 16; // 'state 19' -> import -> shift (target=8, len=0)
actionsTable[4896] = 806; // 'state 19' -> from -> shift (target=403, len=0)
actionsTable[4900] = 814; // 'state 19' -> type -> shift (target=407, len=0)
actionsTable[4901] = 18; // 'state 19' -> export -> shift (target=9, len=0)
actionsTable[4905] = 20; // 'state 19' -> [ -> shift (target=10, len=0)
actionsTable[4907] = 22; // 'state 19' -> async -> shift (target=11, len=0)
actionsTable[4908] = 24; // 'state 19' -> function -> shift (target=12, len=0)
actionsTable.fill(806, 4911, 4913); // 'state 19' -> get..set -> shift (target=403, len=0)
actionsTable[4913] = 26; // 'state 19' -> class -> shift (target=13, len=0)
actionsTable[4916] = 816; // 'state 19' -> interface -> shift (target=408, len=0)
actionsTable[4918] = 28; // 'state 19' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 4923, 4925); // 'state 19' -> void..typeof -> shift (target=15, len=0)
actionsTable[4926] = 32; // 'state 19' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 4933, 4935); // 'state 19' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 4936, 4939); // 'state 19' -> !..delete -> shift (target=15, len=0)
actionsTable[4939] = 34; // 'state 19' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 4943, 4946); // 'state 19' -> number..template_string -> shift (target=399, len=0)
actionsTable[4952] = 36; // 'state 19' -> update_operator -> shift (target=18, len=0)
actionsTable[4953] = 818; // 'state 19' -> identifier -> shift (target=409, len=0)
actionsTable[4954] = 798; // 'state 19' -> regex -> shift (target=399, len=0)
actionsTable[4955] = 65534; // 'state 19' -> @par-gen.EOF -> done (target=0, len=0)
actionsTable[5147] = 164; // 'state 20' -> : -> shift (target=82, len=0)
actionsTable[5173] = 164; // 'state 20' -> ?: -> shift (target=82, len=0)
actionsTable[5178] = 162; // 'state 20' -> => -> shift (target=81, len=0)
actionsTable[5384] = 138; // 'state 21' -> ( -> shift (target=69, len=0)
actionsTable.fill(743, 5632, 5640); // 'state 22' -> true..if -> reduce (target=115, len=1)
actionsTable[5640] = 86; // 'state 22' -> ( -> shift (target=43, len=0)
actionsTable.fill(743, 5642, 5645); // 'state 22' -> else..do -> reduce (target=115, len=1)
actionsTable[5645] = 862; // 'state 22' -> ; -> shift (target=431, len=0)
actionsTable.fill(743, 5646, 5651); // 'state 22' -> for..of -> reduce (target=115, len=1)
actionsTable[5651] = 88; // 'state 22' -> in -> shift (target=44, len=0)
actionsTable.fill(743, 5652, 5655); // 'state 22' -> return..try -> reduce (target=115, len=1)
actionsTable.fill(743, 5657, 5659); // 'state 22' -> switch..case -> reduce (target=115, len=1)
actionsTable.fill(743, 5660, 5665); // 'state 22' -> default..from -> reduce (target=115, len=1)
actionsTable[5666] = 90; // 'state 22' -> * -> shift (target=45, len=0)
actionsTable[5667] = 92; // 'state 22' -> as -> shift (target=46, len=0)
actionsTable.fill(743, 5668, 5670); // 'state 22' -> type..export -> reduce (target=115, len=1)
actionsTable[5673] = 94; // 'state 22' -> [ -> shift (target=47, len=0)
actionsTable.fill(743, 5675, 5677); // 'state 22' -> async..function -> reduce (target=115, len=1)
actionsTable.fill(743, 5679, 5682); // 'state 22' -> get..class -> reduce (target=115, len=1)
actionsTable[5684] = 743; // 'state 22' -> interface -> reduce (target=115, len=1)
actionsTable.fill(88, 5686, 5688); // 'state 22' -> <..> -> shift (target=44, len=0)
actionsTable[5688] = 96; // 'state 22' -> | -> shift (target=48, len=0)
actionsTable[5689] = 98; // 'state 22' -> & -> shift (target=49, len=0)
actionsTable.fill(743, 5691, 5693); // 'state 22' -> void..typeof -> reduce (target=115, len=1)
actionsTable[5694] = 743; // 'state 22' -> new -> reduce (target=115, len=1)
actionsTable[5695] = 100; // 'state 22' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 5696, 5698); // 'state 22' -> ||..?? -> shift (target=51, len=0)
actionsTable[5698] = 104; // 'state 22' -> && -> shift (target=52, len=0)
actionsTable[5699] = 106; // 'state 22' -> ^ -> shift (target=53, len=0)
actionsTable[5700] = 88; // 'state 22' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 5701, 5703); // 'state 22' -> +..- -> shift (target=54, len=0)
actionsTable[5703] = 90; // 'state 22' -> ** -> shift (target=45, len=0)
actionsTable.fill(743, 5704, 5708); // 'state 22' -> !..await -> reduce (target=115, len=1)
actionsTable[5708] = 110; // 'state 22' -> ?. -> shift (target=55, len=0)
actionsTable[5709] = 864; // 'state 22' -> . -> shift (target=432, len=0)
actionsTable.fill(743, 5711, 5714); // 'state 22' -> number..template_string -> reduce (target=115, len=1)
actionsTable[5716] = 112; // 'state 22' -> equality_operator -> shift (target=56, len=0)
actionsTable[5717] = 88; // 'state 22' -> relational_operator -> shift (target=44, len=0)
actionsTable[5718] = 114; // 'state 22' -> shift_operator -> shift (target=57, len=0)
actionsTable[5719] = 90; // 'state 22' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[5720] = 866; // 'state 22' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(743, 5721, 5724); // 'state 22' -> identifier..@par-gen.EOF -> reduce (target=115, len=1)
actionsTable.fill(869, 5888, 5911); // 'state 23' -> true..try -> reduce (target=178, len=1)
actionsTable.fill(869, 5913, 5915); // 'state 23' -> switch..case -> reduce (target=178, len=1)
actionsTable[5915] = 164; // 'state 23' -> : -> shift (target=82, len=0)
actionsTable.fill(869, 5916, 5926); // 'state 23' -> default..export -> reduce (target=178, len=1)
actionsTable.fill(869, 5929, 5938); // 'state 23' -> [..class -> reduce (target=178, len=1)
actionsTable.fill(869, 5939, 5941); // 'state 23' -> implements..interface -> reduce (target=178, len=1)
actionsTable[5941] = 164; // 'state 23' -> ?: -> shift (target=82, len=0)
actionsTable.fill(869, 5942, 5946); // 'state 23' -> <..& -> reduce (target=178, len=1)
actionsTable[5946] = 162; // 'state 23' -> => -> shift (target=81, len=0)
actionsTable.fill(869, 5947, 5949); // 'state 23' -> void..typeof -> reduce (target=178, len=1)
actionsTable.fill(869, 5950, 5971); // 'state 23' -> new..accessibility_modifier -> reduce (target=178, len=1)
actionsTable.fill(869, 5972, 5980); // 'state 23' -> equality_operator..@par-gen.EOF -> reduce (target=178, len=1)
actionsTable.fill(798, 6144, 6149); // 'state 24' -> true..super -> shift (target=399, len=0)
actionsTable[6149] = 68; // 'state 24' -> { -> shift (target=34, len=0)
actionsTable[6152] = 4; // 'state 24' -> ( -> shift (target=2, len=0)
actionsTable[6162] = 806; // 'state 24' -> of -> shift (target=403, len=0)
actionsTable[6176] = 806; // 'state 24' -> from -> shift (target=403, len=0)
actionsTable[6180] = 806; // 'state 24' -> type -> shift (target=403, len=0)
actionsTable[6185] = 20; // 'state 24' -> [ -> shift (target=10, len=0)
actionsTable[6187] = 70; // 'state 24' -> async -> shift (target=35, len=0)
actionsTable[6188] = 72; // 'state 24' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 6191, 6193); // 'state 24' -> get..set -> shift (target=403, len=0)
actionsTable[6193] = 74; // 'state 24' -> class -> shift (target=37, len=0)
actionsTable[6198] = 28; // 'state 24' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 6203, 6205); // 'state 24' -> void..typeof -> shift (target=15, len=0)
actionsTable[6206] = 32; // 'state 24' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 6213, 6215); // 'state 24' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 6216, 6219); // 'state 24' -> !..delete -> shift (target=15, len=0)
actionsTable[6219] = 34; // 'state 24' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 6223, 6226); // 'state 24' -> number..template_string -> shift (target=399, len=0)
actionsTable[6232] = 36; // 'state 24' -> update_operator -> shift (target=18, len=0)
actionsTable[6233] = 818; // 'state 24' -> identifier -> shift (target=409, len=0)
actionsTable[6234] = 798; // 'state 24' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 6400, 6405); // 'state 25' -> true..super -> shift (target=399, len=0)
actionsTable[6405] = 68; // 'state 25' -> { -> shift (target=34, len=0)
actionsTable[6408] = 4; // 'state 25' -> ( -> shift (target=2, len=0)
actionsTable[6418] = 806; // 'state 25' -> of -> shift (target=403, len=0)
actionsTable[6432] = 806; // 'state 25' -> from -> shift (target=403, len=0)
actionsTable[6433] = 192; // 'state 25' -> , -> shift (target=96, len=0)
actionsTable[6436] = 806; // 'state 25' -> type -> shift (target=403, len=0)
actionsTable[6440] = 48; // 'state 25' -> ... -> shift (target=24, len=0)
actionsTable[6441] = 20; // 'state 25' -> [ -> shift (target=10, len=0)
actionsTable[6442] = 906; // 'state 25' -> ] -> shift (target=453, len=0)
actionsTable[6443] = 70; // 'state 25' -> async -> shift (target=35, len=0)
actionsTable[6444] = 72; // 'state 25' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 6447, 6449); // 'state 25' -> get..set -> shift (target=403, len=0)
actionsTable[6449] = 74; // 'state 25' -> class -> shift (target=37, len=0)
actionsTable[6454] = 28; // 'state 25' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 6459, 6461); // 'state 25' -> void..typeof -> shift (target=15, len=0)
actionsTable[6462] = 32; // 'state 25' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 6469, 6471); // 'state 25' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 6472, 6475); // 'state 25' -> !..delete -> shift (target=15, len=0)
actionsTable[6475] = 34; // 'state 25' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 6479, 6482); // 'state 25' -> number..template_string -> shift (target=399, len=0)
actionsTable[6488] = 36; // 'state 25' -> update_operator -> shift (target=18, len=0)
actionsTable[6489] = 818; // 'state 25' -> identifier -> shift (target=409, len=0)
actionsTable[6490] = 798; // 'state 25' -> regex -> shift (target=399, len=0)
actionsTable.fill(867, 6656, 6664); // 'state 26' -> true..if -> reduce (target=177, len=1)
actionsTable[6664] = 130; // 'state 26' -> ( -> shift (target=65, len=0)
actionsTable.fill(867, 6667, 6674); // 'state 26' -> while..var -> reduce (target=177, len=1)
actionsTable[6674] = 806; // 'state 26' -> of -> shift (target=403, len=0)
actionsTable.fill(867, 6675, 6679); // 'state 26' -> in..try -> reduce (target=177, len=1)
actionsTable[6681] = 867; // 'state 26' -> switch -> reduce (target=177, len=1)
actionsTable[6683] = 867; // 'state 26' -> : -> reduce (target=177, len=1)
actionsTable.fill(867, 6685, 6688); // 'state 26' -> break..import -> reduce (target=177, len=1)
actionsTable[6688] = 806; // 'state 26' -> from -> shift (target=403, len=0)
actionsTable.fill(867, 6689, 6692); // 'state 26' -> ,..as -> reduce (target=177, len=1)
actionsTable[6692] = 806; // 'state 26' -> type -> shift (target=403, len=0)
actionsTable[6693] = 867; // 'state 26' -> export -> reduce (target=177, len=1)
actionsTable[6695] = 867; // 'state 26' -> = -> reduce (target=177, len=1)
actionsTable[6697] = 198; // 'state 26' -> [ -> shift (target=99, len=0)
actionsTable[6699] = 914; // 'state 26' -> async -> shift (target=457, len=0)
actionsTable[6700] = 132; // 'state 26' -> function -> shift (target=66, len=0)
actionsTable.fill(806, 6703, 6705); // 'state 26' -> get..set -> shift (target=403, len=0)
actionsTable[6705] = 867; // 'state 26' -> class -> reduce (target=177, len=1)
actionsTable.fill(867, 6708, 6710); // 'state 26' -> interface..?: -> reduce (target=177, len=1)
actionsTable[6710] = 28; // 'state 26' -> < -> shift (target=14, len=0)
actionsTable.fill(867, 6711, 6714); // 'state 26' -> >..& -> reduce (target=177, len=1)
actionsTable.fill(867, 6715, 6717); // 'state 26' -> void..typeof -> reduce (target=177, len=1)
actionsTable.fill(867, 6718, 6734); // 'state 26' -> new... -> reduce (target=177, len=1)
actionsTable.fill(848, 6735, 6737); // 'state 26' -> number..string -> shift (target=424, len=0)
actionsTable[6737] = 867; // 'state 26' -> template_string -> reduce (target=177, len=1)
actionsTable.fill(867, 6739, 6745); // 'state 26' -> compound_assignment_operator..update_operator -> reduce (target=177, len=1)
actionsTable[6745] = 916; // 'state 26' -> identifier -> shift (target=458, len=0)
actionsTable[6746] = 867; // 'state 26' -> regex -> reduce (target=177, len=1)
actionsTable.fill(867, 6912, 6921); // 'state 27' -> true..( -> reduce (target=177, len=1)
actionsTable.fill(867, 6923, 6930); // 'state 27' -> while..var -> reduce (target=177, len=1)
actionsTable[6930] = 806; // 'state 27' -> of -> shift (target=403, len=0)
actionsTable.fill(867, 6931, 6935); // 'state 27' -> in..try -> reduce (target=177, len=1)
actionsTable[6937] = 867; // 'state 27' -> switch -> reduce (target=177, len=1)
actionsTable[6939] = 867; // 'state 27' -> : -> reduce (target=177, len=1)
actionsTable.fill(867, 6941, 6944); // 'state 27' -> break..import -> reduce (target=177, len=1)
actionsTable[6944] = 806; // 'state 27' -> from -> shift (target=403, len=0)
actionsTable.fill(867, 6945, 6948); // 'state 27' -> ,..as -> reduce (target=177, len=1)
actionsTable[6948] = 806; // 'state 27' -> type -> shift (target=403, len=0)
actionsTable[6949] = 867; // 'state 27' -> export -> reduce (target=177, len=1)
actionsTable[6951] = 867; // 'state 27' -> = -> reduce (target=177, len=1)
actionsTable[6953] = 198; // 'state 27' -> [ -> shift (target=99, len=0)
actionsTable[6955] = 914; // 'state 27' -> async -> shift (target=457, len=0)
actionsTable[6956] = 867; // 'state 27' -> function -> reduce (target=177, len=1)
actionsTable.fill(806, 6959, 6961); // 'state 27' -> get..set -> shift (target=403, len=0)
actionsTable[6961] = 867; // 'state 27' -> class -> reduce (target=177, len=1)
actionsTable.fill(867, 6964, 6970); // 'state 27' -> interface..& -> reduce (target=177, len=1)
actionsTable.fill(867, 6971, 6973); // 'state 27' -> void..typeof -> reduce (target=177, len=1)
actionsTable.fill(867, 6974, 6990); // 'state 27' -> new... -> reduce (target=177, len=1)
actionsTable.fill(848, 6991, 6993); // 'state 27' -> number..string -> shift (target=424, len=0)
actionsTable[6993] = 867; // 'state 27' -> template_string -> reduce (target=177, len=1)
actionsTable.fill(867, 6995, 7001); // 'state 27' -> compound_assignment_operator..update_operator -> reduce (target=177, len=1)
actionsTable[7001] = 848; // 'state 27' -> identifier -> shift (target=424, len=0)
actionsTable[7002] = 867; // 'state 27' -> regex -> reduce (target=177, len=1)
actionsTable.fill(798, 7168, 7173); // 'state 28' -> true..super -> shift (target=399, len=0)
actionsTable[7173] = 2; // 'state 28' -> { -> shift (target=1, len=0)
actionsTable[7174] = 910; // 'state 28' -> } -> shift (target=455, len=0)
actionsTable[7175] = 800; // 'state 28' -> if -> shift (target=400, len=0)
actionsTable[7176] = 4; // 'state 28' -> ( -> shift (target=2, len=0)
actionsTable[7179] = 802; // 'state 28' -> while -> shift (target=401, len=0)
actionsTable[7180] = 6; // 'state 28' -> do -> shift (target=3, len=0)
actionsTable[7182] = 804; // 'state 28' -> for -> shift (target=402, len=0)
actionsTable.fill(8, 7183, 7186); // 'state 28' -> const..var -> shift (target=4, len=0)
actionsTable[7186] = 806; // 'state 28' -> of -> shift (target=403, len=0)
actionsTable[7188] = 10; // 'state 28' -> return -> shift (target=5, len=0)
actionsTable[7189] = 12; // 'state 28' -> throw -> shift (target=6, len=0)
actionsTable[7190] = 14; // 'state 28' -> try -> shift (target=7, len=0)
actionsTable[7193] = 808; // 'state 28' -> switch -> shift (target=404, len=0)
actionsTable[7197] = 810; // 'state 28' -> break -> shift (target=405, len=0)
actionsTable[7198] = 812; // 'state 28' -> continue -> shift (target=406, len=0)
actionsTable[7199] = 16; // 'state 28' -> import -> shift (target=8, len=0)
actionsTable[7200] = 806; // 'state 28' -> from -> shift (target=403, len=0)
actionsTable[7204] = 814; // 'state 28' -> type -> shift (target=407, len=0)
actionsTable[7205] = 18; // 'state 28' -> export -> shift (target=9, len=0)
actionsTable[7209] = 20; // 'state 28' -> [ -> shift (target=10, len=0)
actionsTable[7211] = 22; // 'state 28' -> async -> shift (target=11, len=0)
actionsTable[7212] = 24; // 'state 28' -> function -> shift (target=12, len=0)
actionsTable.fill(806, 7215, 7217); // 'state 28' -> get..set -> shift (target=403, len=0)
actionsTable[7217] = 26; // 'state 28' -> class -> shift (target=13, len=0)
actionsTable[7220] = 816; // 'state 28' -> interface -> shift (target=408, len=0)
actionsTable[7222] = 28; // 'state 28' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 7227, 7229); // 'state 28' -> void..typeof -> shift (target=15, len=0)
actionsTable[7230] = 32; // 'state 28' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 7237, 7239); // 'state 28' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 7240, 7243); // 'state 28' -> !..delete -> shift (target=15, len=0)
actionsTable[7243] = 34; // 'state 28' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 7247, 7250); // 'state 28' -> number..template_string -> shift (target=399, len=0)
actionsTable[7256] = 36; // 'state 28' -> update_operator -> shift (target=18, len=0)
actionsTable[7257] = 818; // 'state 28' -> identifier -> shift (target=409, len=0)
actionsTable[7258] = 798; // 'state 28' -> regex -> shift (target=399, len=0)
actionsTable[7430] = 920; // 'state 29' -> } -> shift (target=460, len=0)
actionsTable[7457] = 204; // 'state 29' -> , -> shift (target=102, len=0)
actionsTable[7688] = 138; // 'state 30' -> ( -> shift (target=69, len=0)
actionsTable[7707] = 206; // 'state 30' -> : -> shift (target=103, len=0)
actionsTable[7734] = 28; // 'state 30' -> < -> shift (target=14, len=0)
actionsTable.fill(798, 7936, 7941); // 'state 31' -> true..super -> shift (target=399, len=0)
actionsTable[7941] = 68; // 'state 31' -> { -> shift (target=34, len=0)
actionsTable[7944] = 4; // 'state 31' -> ( -> shift (target=2, len=0)
actionsTable[7954] = 806; // 'state 31' -> of -> shift (target=403, len=0)
actionsTable[7968] = 806; // 'state 31' -> from -> shift (target=403, len=0)
actionsTable[7972] = 806; // 'state 31' -> type -> shift (target=403, len=0)
actionsTable[7977] = 20; // 'state 31' -> [ -> shift (target=10, len=0)
actionsTable[7979] = 70; // 'state 31' -> async -> shift (target=35, len=0)
actionsTable[7980] = 72; // 'state 31' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 7983, 7985); // 'state 31' -> get..set -> shift (target=403, len=0)
actionsTable[7985] = 74; // 'state 31' -> class -> shift (target=37, len=0)
actionsTable[7990] = 28; // 'state 31' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 7995, 7997); // 'state 31' -> void..typeof -> shift (target=15, len=0)
actionsTable[7998] = 32; // 'state 31' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 8005, 8007); // 'state 31' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 8008, 8011); // 'state 31' -> !..delete -> shift (target=15, len=0)
actionsTable[8011] = 34; // 'state 31' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 8015, 8018); // 'state 31' -> number..template_string -> shift (target=399, len=0)
actionsTable[8024] = 36; // 'state 31' -> update_operator -> shift (target=18, len=0)
actionsTable[8025] = 818; // 'state 31' -> identifier -> shift (target=409, len=0)
actionsTable[8026] = 798; // 'state 31' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 8192, 8197); // 'state 32' -> true..super -> shift (target=399, len=0)
actionsTable[8197] = 68; // 'state 32' -> { -> shift (target=34, len=0)
actionsTable[8200] = 4; // 'state 32' -> ( -> shift (target=2, len=0)
actionsTable[8210] = 806; // 'state 32' -> of -> shift (target=403, len=0)
actionsTable[8224] = 806; // 'state 32' -> from -> shift (target=403, len=0)
actionsTable[8228] = 806; // 'state 32' -> type -> shift (target=403, len=0)
actionsTable[8233] = 20; // 'state 32' -> [ -> shift (target=10, len=0)
actionsTable[8235] = 70; // 'state 32' -> async -> shift (target=35, len=0)
actionsTable[8236] = 72; // 'state 32' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 8239, 8241); // 'state 32' -> get..set -> shift (target=403, len=0)
actionsTable[8241] = 74; // 'state 32' -> class -> shift (target=37, len=0)
actionsTable[8246] = 28; // 'state 32' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 8251, 8253); // 'state 32' -> void..typeof -> shift (target=15, len=0)
actionsTable[8254] = 32; // 'state 32' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 8261, 8263); // 'state 32' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 8264, 8267); // 'state 32' -> !..delete -> shift (target=15, len=0)
actionsTable[8267] = 34; // 'state 32' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 8271, 8274); // 'state 32' -> number..template_string -> shift (target=399, len=0)
actionsTable[8280] = 36; // 'state 32' -> update_operator -> shift (target=18, len=0)
actionsTable[8281] = 818; // 'state 32' -> identifier -> shift (target=409, len=0)
actionsTable[8282] = 798; // 'state 32' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 8448, 8453); // 'state 33' -> true..super -> shift (target=399, len=0)
actionsTable[8453] = 68; // 'state 33' -> { -> shift (target=34, len=0)
actionsTable[8456] = 4; // 'state 33' -> ( -> shift (target=2, len=0)
actionsTable[8461] = 218; // 'state 33' -> ; -> shift (target=109, len=0)
actionsTable.fill(220, 8463, 8466); // 'state 33' -> const..var -> shift (target=110, len=0)
actionsTable[8466] = 806; // 'state 33' -> of -> shift (target=403, len=0)
actionsTable[8480] = 806; // 'state 33' -> from -> shift (target=403, len=0)
actionsTable[8484] = 806; // 'state 33' -> type -> shift (target=403, len=0)
actionsTable[8489] = 20; // 'state 33' -> [ -> shift (target=10, len=0)
actionsTable[8491] = 70; // 'state 33' -> async -> shift (target=35, len=0)
actionsTable[8492] = 72; // 'state 33' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 8495, 8497); // 'state 33' -> get..set -> shift (target=403, len=0)
actionsTable[8497] = 74; // 'state 33' -> class -> shift (target=37, len=0)
actionsTable[8502] = 28; // 'state 33' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 8507, 8509); // 'state 33' -> void..typeof -> shift (target=15, len=0)
actionsTable[8510] = 32; // 'state 33' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 8517, 8519); // 'state 33' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 8520, 8523); // 'state 33' -> !..delete -> shift (target=15, len=0)
actionsTable[8523] = 34; // 'state 33' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 8527, 8530); // 'state 33' -> number..template_string -> shift (target=399, len=0)
actionsTable[8536] = 36; // 'state 33' -> update_operator -> shift (target=18, len=0)
actionsTable[8537] = 818; // 'state 33' -> identifier -> shift (target=409, len=0)
actionsTable[8538] = 798; // 'state 33' -> regex -> shift (target=399, len=0)
actionsTable[8710] = 928; // 'state 34' -> } -> shift (target=464, len=0)
actionsTable[8722] = 806; // 'state 34' -> of -> shift (target=403, len=0)
actionsTable[8736] = 806; // 'state 34' -> from -> shift (target=403, len=0)
actionsTable[8740] = 806; // 'state 34' -> type -> shift (target=403, len=0)
actionsTable[8744] = 48; // 'state 34' -> ... -> shift (target=24, len=0)
actionsTable[8745] = 198; // 'state 34' -> [ -> shift (target=99, len=0)
actionsTable[8747] = 226; // 'state 34' -> async -> shift (target=113, len=0)
actionsTable.fill(54, 8751, 8753); // 'state 34' -> get..set -> shift (target=27, len=0)
actionsTable.fill(848, 8783, 8785); // 'state 34' -> number..string -> shift (target=424, len=0)
actionsTable[8793] = 930; // 'state 34' -> identifier -> shift (target=465, len=0)
actionsTable.fill(867, 8960, 8968); // 'state 35' -> true..if -> reduce (target=177, len=1)
actionsTable[8968] = 130; // 'state 35' -> ( -> shift (target=65, len=0)
actionsTable.fill(867, 8969, 8983); // 'state 35' -> )..try -> reduce (target=177, len=1)
actionsTable.fill(867, 8985, 8998); // 'state 35' -> switch..export -> reduce (target=177, len=1)
actionsTable[8999] = 867; // 'state 35' -> = -> reduce (target=177, len=1)
actionsTable.fill(867, 9001, 9004); // 'state 35' -> [..async -> reduce (target=177, len=1)
actionsTable[9004] = 224; // 'state 35' -> function -> shift (target=112, len=0)
actionsTable.fill(867, 9005, 9010); // 'state 35' -> static..class -> reduce (target=177, len=1)
actionsTable.fill(867, 9011, 9013); // 'state 35' -> implements..interface -> reduce (target=177, len=1)
actionsTable[9014] = 28; // 'state 35' -> < -> shift (target=14, len=0)
actionsTable.fill(867, 9015, 9018); // 'state 35' -> >..& -> reduce (target=177, len=1)
actionsTable.fill(867, 9019, 9021); // 'state 35' -> void..typeof -> reduce (target=177, len=1)
actionsTable.fill(867, 9022, 9049); // 'state 35' -> new..update_operator -> reduce (target=177, len=1)
actionsTable[9049] = 896; // 'state 35' -> identifier -> shift (target=448, len=0)
actionsTable.fill(867, 9050, 9052); // 'state 35' -> regex..@par-gen.EOF -> reduce (target=177, len=1)
actionsTable[9224] = 138; // 'state 36' -> ( -> shift (target=69, len=0)
actionsTable[9270] = 28; // 'state 36' -> < -> shift (target=14, len=0)
actionsTable[9305] = 228; // 'state 36' -> identifier -> shift (target=114, len=0)
actionsTable[9477] = 146; // 'state 37' -> { -> shift (target=73, len=0)
actionsTable[9522] = 148; // 'state 37' -> extends -> shift (target=74, len=0)
actionsTable[9523] = 150; // 'state 37' -> implements -> shift (target=75, len=0)
actionsTable[9526] = 28; // 'state 37' -> < -> shift (target=14, len=0)
actionsTable[9561] = 230; // 'state 37' -> identifier -> shift (target=115, len=0)
actionsTable.fill(1231, 9728, 9736); // 'state 38' -> true..if -> reduce (target=103, len=2)
actionsTable[9736] = 86; // 'state 38' -> ( -> shift (target=43, len=0)
actionsTable.fill(1231, 9738, 9741); // 'state 38' -> else..do -> reduce (target=103, len=2)
actionsTable[9741] = 926; // 'state 38' -> ; -> shift (target=463, len=0)
actionsTable.fill(1231, 9742, 9747); // 'state 38' -> for..of -> reduce (target=103, len=2)
actionsTable[9747] = 88; // 'state 38' -> in -> shift (target=44, len=0)
actionsTable.fill(1231, 9748, 9751); // 'state 38' -> return..try -> reduce (target=103, len=2)
actionsTable.fill(1231, 9753, 9755); // 'state 38' -> switch..case -> reduce (target=103, len=2)
actionsTable.fill(1231, 9756, 9761); // 'state 38' -> default..from -> reduce (target=103, len=2)
actionsTable[9762] = 90; // 'state 38' -> * -> shift (target=45, len=0)
actionsTable[9763] = 92; // 'state 38' -> as -> shift (target=46, len=0)
actionsTable.fill(1231, 9764, 9766); // 'state 38' -> type..export -> reduce (target=103, len=2)
actionsTable[9769] = 94; // 'state 38' -> [ -> shift (target=47, len=0)
actionsTable.fill(1231, 9771, 9773); // 'state 38' -> async..function -> reduce (target=103, len=2)
actionsTable.fill(1231, 9775, 9778); // 'state 38' -> get..class -> reduce (target=103, len=2)
actionsTable[9780] = 1231; // 'state 38' -> interface -> reduce (target=103, len=2)
actionsTable.fill(88, 9782, 9784); // 'state 38' -> <..> -> shift (target=44, len=0)
actionsTable[9784] = 96; // 'state 38' -> | -> shift (target=48, len=0)
actionsTable[9785] = 98; // 'state 38' -> & -> shift (target=49, len=0)
actionsTable.fill(1231, 9787, 9789); // 'state 38' -> void..typeof -> reduce (target=103, len=2)
actionsTable[9790] = 1231; // 'state 38' -> new -> reduce (target=103, len=2)
actionsTable[9791] = 100; // 'state 38' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 9792, 9794); // 'state 38' -> ||..?? -> shift (target=51, len=0)
actionsTable[9794] = 104; // 'state 38' -> && -> shift (target=52, len=0)
actionsTable[9795] = 106; // 'state 38' -> ^ -> shift (target=53, len=0)
actionsTable[9796] = 88; // 'state 38' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 9797, 9799); // 'state 38' -> +..- -> shift (target=54, len=0)
actionsTable[9799] = 90; // 'state 38' -> ** -> shift (target=45, len=0)
actionsTable.fill(1231, 9800, 9804); // 'state 38' -> !..await -> reduce (target=103, len=2)
actionsTable[9804] = 110; // 'state 38' -> ?. -> shift (target=55, len=0)
actionsTable[9805] = 864; // 'state 38' -> . -> shift (target=432, len=0)
actionsTable.fill(1231, 9807, 9810); // 'state 38' -> number..template_string -> reduce (target=103, len=2)
actionsTable[9812] = 112; // 'state 38' -> equality_operator -> shift (target=56, len=0)
actionsTable[9813] = 88; // 'state 38' -> relational_operator -> shift (target=44, len=0)
actionsTable[9814] = 114; // 'state 38' -> shift_operator -> shift (target=57, len=0)
actionsTable[9815] = 90; // 'state 38' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[9816] = 866; // 'state 38' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(1231, 9817, 9820); // 'state 38' -> identifier..@par-gen.EOF -> reduce (target=103, len=2)
actionsTable.fill(1233, 9984, 9992); // 'state 39' -> true..if -> reduce (target=104, len=2)
actionsTable[9992] = 86; // 'state 39' -> ( -> shift (target=43, len=0)
actionsTable.fill(1233, 9994, 9997); // 'state 39' -> else..do -> reduce (target=104, len=2)
actionsTable[9997] = 932; // 'state 39' -> ; -> shift (target=466, len=0)
actionsTable.fill(1233, 9998, 10003); // 'state 39' -> for..of -> reduce (target=104, len=2)
actionsTable[10003] = 88; // 'state 39' -> in -> shift (target=44, len=0)
actionsTable.fill(1233, 10004, 10007); // 'state 39' -> return..try -> reduce (target=104, len=2)
actionsTable.fill(1233, 10009, 10011); // 'state 39' -> switch..case -> reduce (target=104, len=2)
actionsTable.fill(1233, 10012, 10017); // 'state 39' -> default..from -> reduce (target=104, len=2)
actionsTable[10018] = 90; // 'state 39' -> * -> shift (target=45, len=0)
actionsTable[10019] = 92; // 'state 39' -> as -> shift (target=46, len=0)
actionsTable.fill(1233, 10020, 10022); // 'state 39' -> type..export -> reduce (target=104, len=2)
actionsTable[10025] = 94; // 'state 39' -> [ -> shift (target=47, len=0)
actionsTable.fill(1233, 10027, 10029); // 'state 39' -> async..function -> reduce (target=104, len=2)
actionsTable.fill(1233, 10031, 10034); // 'state 39' -> get..class -> reduce (target=104, len=2)
actionsTable[10036] = 1233; // 'state 39' -> interface -> reduce (target=104, len=2)
actionsTable.fill(88, 10038, 10040); // 'state 39' -> <..> -> shift (target=44, len=0)
actionsTable[10040] = 96; // 'state 39' -> | -> shift (target=48, len=0)
actionsTable[10041] = 98; // 'state 39' -> & -> shift (target=49, len=0)
actionsTable.fill(1233, 10043, 10045); // 'state 39' -> void..typeof -> reduce (target=104, len=2)
actionsTable[10046] = 1233; // 'state 39' -> new -> reduce (target=104, len=2)
actionsTable[10047] = 100; // 'state 39' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 10048, 10050); // 'state 39' -> ||..?? -> shift (target=51, len=0)
actionsTable[10050] = 104; // 'state 39' -> && -> shift (target=52, len=0)
actionsTable[10051] = 106; // 'state 39' -> ^ -> shift (target=53, len=0)
actionsTable[10052] = 88; // 'state 39' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 10053, 10055); // 'state 39' -> +..- -> shift (target=54, len=0)
actionsTable[10055] = 90; // 'state 39' -> ** -> shift (target=45, len=0)
actionsTable.fill(1233, 10056, 10060); // 'state 39' -> !..await -> reduce (target=104, len=2)
actionsTable[10060] = 110; // 'state 39' -> ?. -> shift (target=55, len=0)
actionsTable[10061] = 864; // 'state 39' -> . -> shift (target=432, len=0)
actionsTable.fill(1233, 10063, 10066); // 'state 39' -> number..template_string -> reduce (target=104, len=2)
actionsTable[10068] = 112; // 'state 39' -> equality_operator -> shift (target=56, len=0)
actionsTable[10069] = 88; // 'state 39' -> relational_operator -> shift (target=44, len=0)
actionsTable[10070] = 114; // 'state 39' -> shift_operator -> shift (target=57, len=0)
actionsTable[10071] = 90; // 'state 39' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[10072] = 866; // 'state 39' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(1233, 10073, 10076); // 'state 39' -> identifier..@par-gen.EOF -> reduce (target=104, len=2)
actionsTable.fill(798, 10240, 10245); // 'state 40' -> true..super -> shift (target=399, len=0)
actionsTable[10245] = 2; // 'state 40' -> { -> shift (target=1, len=0)
actionsTable[10246] = 936; // 'state 40' -> } -> shift (target=468, len=0)
actionsTable[10247] = 800; // 'state 40' -> if -> shift (target=400, len=0)
actionsTable[10248] = 4; // 'state 40' -> ( -> shift (target=2, len=0)
actionsTable[10251] = 802; // 'state 40' -> while -> shift (target=401, len=0)
actionsTable[10252] = 6; // 'state 40' -> do -> shift (target=3, len=0)
actionsTable[10254] = 804; // 'state 40' -> for -> shift (target=402, len=0)
actionsTable.fill(8, 10255, 10258); // 'state 40' -> const..var -> shift (target=4, len=0)
actionsTable[10258] = 806; // 'state 40' -> of -> shift (target=403, len=0)
actionsTable[10260] = 10; // 'state 40' -> return -> shift (target=5, len=0)
actionsTable[10261] = 12; // 'state 40' -> throw -> shift (target=6, len=0)
actionsTable[10262] = 14; // 'state 40' -> try -> shift (target=7, len=0)
actionsTable[10265] = 808; // 'state 40' -> switch -> shift (target=404, len=0)
actionsTable[10269] = 810; // 'state 40' -> break -> shift (target=405, len=0)
actionsTable[10270] = 812; // 'state 40' -> continue -> shift (target=406, len=0)
actionsTable[10271] = 16; // 'state 40' -> import -> shift (target=8, len=0)
actionsTable[10272] = 806; // 'state 40' -> from -> shift (target=403, len=0)
actionsTable[10276] = 814; // 'state 40' -> type -> shift (target=407, len=0)
actionsTable[10277] = 18; // 'state 40' -> export -> shift (target=9, len=0)
actionsTable[10281] = 20; // 'state 40' -> [ -> shift (target=10, len=0)
actionsTable[10283] = 22; // 'state 40' -> async -> shift (target=11, len=0)
actionsTable[10284] = 24; // 'state 40' -> function -> shift (target=12, len=0)
actionsTable.fill(806, 10287, 10289); // 'state 40' -> get..set -> shift (target=403, len=0)
actionsTable[10289] = 26; // 'state 40' -> class -> shift (target=13, len=0)
actionsTable[10292] = 816; // 'state 40' -> interface -> shift (target=408, len=0)
actionsTable[10294] = 28; // 'state 40' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 10299, 10301); // 'state 40' -> void..typeof -> shift (target=15, len=0)
actionsTable[10302] = 32; // 'state 40' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 10309, 10311); // 'state 40' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 10312, 10315); // 'state 40' -> !..delete -> shift (target=15, len=0)
actionsTable[10315] = 34; // 'state 40' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 10319, 10322); // 'state 40' -> number..template_string -> shift (target=399, len=0)
actionsTable[10328] = 36; // 'state 40' -> update_operator -> shift (target=18, len=0)
actionsTable[10329] = 818; // 'state 40' -> identifier -> shift (target=409, len=0)
actionsTable[10330] = 798; // 'state 40' -> regex -> shift (target=399, len=0)
actionsTable.fill(1235, 10496, 10505); // 'state 41' -> true..( -> reduce (target=105, len=2)
actionsTable.fill(1235, 10506, 10509); // 'state 41' -> else..do -> reduce (target=105, len=2)
actionsTable.fill(1235, 10510, 10515); // 'state 41' -> for..of -> reduce (target=105, len=2)
actionsTable.fill(1235, 10516, 10519); // 'state 41' -> return..try -> reduce (target=105, len=2)
actionsTable[10519] = 232; // 'state 41' -> catch -> shift (target=116, len=0)
actionsTable[10520] = 234; // 'state 41' -> finally -> shift (target=117, len=0)
actionsTable.fill(1235, 10521, 10523); // 'state 41' -> switch..case -> reduce (target=105, len=2)
actionsTable.fill(1235, 10524, 10529); // 'state 41' -> default..from -> reduce (target=105, len=2)
actionsTable.fill(1235, 10532, 10534); // 'state 41' -> type..export -> reduce (target=105, len=2)
actionsTable[10537] = 1235; // 'state 41' -> [ -> reduce (target=105, len=2)
actionsTable.fill(1235, 10539, 10541); // 'state 41' -> async..function -> reduce (target=105, len=2)
actionsTable.fill(1235, 10543, 10546); // 'state 41' -> get..class -> reduce (target=105, len=2)
actionsTable[10548] = 1235; // 'state 41' -> interface -> reduce (target=105, len=2)
actionsTable[10550] = 1235; // 'state 41' -> < -> reduce (target=105, len=2)
actionsTable.fill(1235, 10555, 10557); // 'state 41' -> void..typeof -> reduce (target=105, len=2)
actionsTable[10558] = 1235; // 'state 41' -> new -> reduce (target=105, len=2)
actionsTable.fill(1235, 10565, 10567); // 'state 41' -> +..- -> reduce (target=105, len=2)
actionsTable.fill(1235, 10568, 10572); // 'state 41' -> !..await -> reduce (target=105, len=2)
actionsTable.fill(1235, 10575, 10578); // 'state 41' -> number..template_string -> reduce (target=105, len=2)
actionsTable.fill(1235, 10584, 10588); // 'state 41' -> update_operator..@par-gen.EOF -> reduce (target=105, len=2)
actionsTable.fill(798, 10752, 10757); // 'state 42' -> true..super -> shift (target=399, len=0)
actionsTable[10757] = 68; // 'state 42' -> { -> shift (target=34, len=0)
actionsTable[10760] = 4; // 'state 42' -> ( -> shift (target=2, len=0)
actionsTable[10770] = 806; // 'state 42' -> of -> shift (target=403, len=0)
actionsTable[10784] = 806; // 'state 42' -> from -> shift (target=403, len=0)
actionsTable[10788] = 806; // 'state 42' -> type -> shift (target=403, len=0)
actionsTable[10793] = 20; // 'state 42' -> [ -> shift (target=10, len=0)
actionsTable[10795] = 70; // 'state 42' -> async -> shift (target=35, len=0)
actionsTable[10796] = 72; // 'state 42' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 10799, 10801); // 'state 42' -> get..set -> shift (target=403, len=0)
actionsTable[10801] = 74; // 'state 42' -> class -> shift (target=37, len=0)
actionsTable[10806] = 28; // 'state 42' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 10811, 10813); // 'state 42' -> void..typeof -> shift (target=15, len=0)
actionsTable[10814] = 32; // 'state 42' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 10821, 10823); // 'state 42' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 10824, 10827); // 'state 42' -> !..delete -> shift (target=15, len=0)
actionsTable[10827] = 34; // 'state 42' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 10831, 10834); // 'state 42' -> number..template_string -> shift (target=399, len=0)
actionsTable[10840] = 36; // 'state 42' -> update_operator -> shift (target=18, len=0)
actionsTable[10841] = 818; // 'state 42' -> identifier -> shift (target=409, len=0)
actionsTable[10842] = 798; // 'state 42' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 11008, 11013); // 'state 43' -> true..super -> shift (target=399, len=0)
actionsTable[11013] = 68; // 'state 43' -> { -> shift (target=34, len=0)
actionsTable[11016] = 4; // 'state 43' -> ( -> shift (target=2, len=0)
actionsTable[11017] = 960; // 'state 43' -> ) -> shift (target=480, len=0)
actionsTable[11026] = 806; // 'state 43' -> of -> shift (target=403, len=0)
actionsTable[11040] = 806; // 'state 43' -> from -> shift (target=403, len=0)
actionsTable[11044] = 806; // 'state 43' -> type -> shift (target=403, len=0)
actionsTable[11048] = 48; // 'state 43' -> ... -> shift (target=24, len=0)
actionsTable[11049] = 20; // 'state 43' -> [ -> shift (target=10, len=0)
actionsTable[11051] = 70; // 'state 43' -> async -> shift (target=35, len=0)
actionsTable[11052] = 72; // 'state 43' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 11055, 11057); // 'state 43' -> get..set -> shift (target=403, len=0)
actionsTable[11057] = 74; // 'state 43' -> class -> shift (target=37, len=0)
actionsTable[11062] = 28; // 'state 43' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 11067, 11069); // 'state 43' -> void..typeof -> shift (target=15, len=0)
actionsTable[11070] = 32; // 'state 43' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 11077, 11079); // 'state 43' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 11080, 11083); // 'state 43' -> !..delete -> shift (target=15, len=0)
actionsTable[11083] = 34; // 'state 43' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 11087, 11090); // 'state 43' -> number..template_string -> shift (target=399, len=0)
actionsTable[11096] = 36; // 'state 43' -> update_operator -> shift (target=18, len=0)
actionsTable[11097] = 818; // 'state 43' -> identifier -> shift (target=409, len=0)
actionsTable[11098] = 798; // 'state 43' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 11264, 11269); // 'state 44' -> true..super -> shift (target=399, len=0)
actionsTable[11269] = 68; // 'state 44' -> { -> shift (target=34, len=0)
actionsTable[11272] = 4; // 'state 44' -> ( -> shift (target=2, len=0)
actionsTable[11282] = 806; // 'state 44' -> of -> shift (target=403, len=0)
actionsTable[11296] = 806; // 'state 44' -> from -> shift (target=403, len=0)
actionsTable[11300] = 806; // 'state 44' -> type -> shift (target=403, len=0)
actionsTable[11305] = 20; // 'state 44' -> [ -> shift (target=10, len=0)
actionsTable[11307] = 70; // 'state 44' -> async -> shift (target=35, len=0)
actionsTable[11308] = 72; // 'state 44' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 11311, 11313); // 'state 44' -> get..set -> shift (target=403, len=0)
actionsTable[11313] = 74; // 'state 44' -> class -> shift (target=37, len=0)
actionsTable[11318] = 28; // 'state 44' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 11323, 11325); // 'state 44' -> void..typeof -> shift (target=15, len=0)
actionsTable[11326] = 32; // 'state 44' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 11333, 11335); // 'state 44' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 11336, 11339); // 'state 44' -> !..delete -> shift (target=15, len=0)
actionsTable[11339] = 34; // 'state 44' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 11343, 11346); // 'state 44' -> number..template_string -> shift (target=399, len=0)
actionsTable[11352] = 36; // 'state 44' -> update_operator -> shift (target=18, len=0)
actionsTable[11353] = 818; // 'state 44' -> identifier -> shift (target=409, len=0)
actionsTable[11354] = 798; // 'state 44' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 11520, 11525); // 'state 45' -> true..super -> shift (target=399, len=0)
actionsTable[11525] = 68; // 'state 45' -> { -> shift (target=34, len=0)
actionsTable[11528] = 4; // 'state 45' -> ( -> shift (target=2, len=0)
actionsTable[11538] = 806; // 'state 45' -> of -> shift (target=403, len=0)
actionsTable[11552] = 806; // 'state 45' -> from -> shift (target=403, len=0)
actionsTable[11556] = 806; // 'state 45' -> type -> shift (target=403, len=0)
actionsTable[11561] = 20; // 'state 45' -> [ -> shift (target=10, len=0)
actionsTable[11563] = 70; // 'state 45' -> async -> shift (target=35, len=0)
actionsTable[11564] = 72; // 'state 45' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 11567, 11569); // 'state 45' -> get..set -> shift (target=403, len=0)
actionsTable[11569] = 74; // 'state 45' -> class -> shift (target=37, len=0)
actionsTable[11574] = 28; // 'state 45' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 11579, 11581); // 'state 45' -> void..typeof -> shift (target=15, len=0)
actionsTable[11582] = 32; // 'state 45' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 11589, 11591); // 'state 45' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 11592, 11595); // 'state 45' -> !..delete -> shift (target=15, len=0)
actionsTable[11595] = 34; // 'state 45' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 11599, 11602); // 'state 45' -> number..template_string -> shift (target=399, len=0)
actionsTable[11608] = 36; // 'state 45' -> update_operator -> shift (target=18, len=0)
actionsTable[11609] = 818; // 'state 45' -> identifier -> shift (target=409, len=0)
actionsTable[11610] = 798; // 'state 45' -> regex -> shift (target=399, len=0)
actionsTable.fill(942, 11776, 11779); // 'state 46' -> true..null -> shift (target=471, len=0)
actionsTable[11781] = 262; // 'state 46' -> { -> shift (target=131, len=0)
actionsTable[11784] = 264; // 'state 46' -> ( -> shift (target=132, len=0)
actionsTable[11817] = 266; // 'state 46' -> [ -> shift (target=133, len=0)
actionsTable[11830] = 28; // 'state 46' -> < -> shift (target=14, len=0)
actionsTable[11832] = 268; // 'state 46' -> | -> shift (target=134, len=0)
actionsTable[11835] = 942; // 'state 46' -> void -> shift (target=471, len=0)
actionsTable[11836] = 944; // 'state 46' -> typeof -> shift (target=472, len=0)
actionsTable.fill(942, 11855, 11857); // 'state 46' -> number..string -> shift (target=471, len=0)
actionsTable[11865] = 270; // 'state 46' -> identifier -> shift (target=135, len=0)
actionsTable.fill(798, 12032, 12037); // 'state 47' -> true..super -> shift (target=399, len=0)
actionsTable[12037] = 68; // 'state 47' -> { -> shift (target=34, len=0)
actionsTable[12040] = 4; // 'state 47' -> ( -> shift (target=2, len=0)
actionsTable[12050] = 806; // 'state 47' -> of -> shift (target=403, len=0)
actionsTable[12064] = 806; // 'state 47' -> from -> shift (target=403, len=0)
actionsTable[12068] = 806; // 'state 47' -> type -> shift (target=403, len=0)
actionsTable[12073] = 20; // 'state 47' -> [ -> shift (target=10, len=0)
actionsTable[12075] = 70; // 'state 47' -> async -> shift (target=35, len=0)
actionsTable[12076] = 72; // 'state 47' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 12079, 12081); // 'state 47' -> get..set -> shift (target=403, len=0)
actionsTable[12081] = 74; // 'state 47' -> class -> shift (target=37, len=0)
actionsTable[12086] = 28; // 'state 47' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 12091, 12093); // 'state 47' -> void..typeof -> shift (target=15, len=0)
actionsTable[12094] = 32; // 'state 47' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 12101, 12103); // 'state 47' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 12104, 12107); // 'state 47' -> !..delete -> shift (target=15, len=0)
actionsTable[12107] = 34; // 'state 47' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 12111, 12114); // 'state 47' -> number..template_string -> shift (target=399, len=0)
actionsTable[12120] = 36; // 'state 47' -> update_operator -> shift (target=18, len=0)
actionsTable[12121] = 818; // 'state 47' -> identifier -> shift (target=409, len=0)
actionsTable[12122] = 798; // 'state 47' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 12288, 12293); // 'state 48' -> true..super -> shift (target=399, len=0)
actionsTable[12293] = 68; // 'state 48' -> { -> shift (target=34, len=0)
actionsTable[12296] = 4; // 'state 48' -> ( -> shift (target=2, len=0)
actionsTable[12306] = 806; // 'state 48' -> of -> shift (target=403, len=0)
actionsTable[12320] = 806; // 'state 48' -> from -> shift (target=403, len=0)
actionsTable[12324] = 806; // 'state 48' -> type -> shift (target=403, len=0)
actionsTable[12329] = 20; // 'state 48' -> [ -> shift (target=10, len=0)
actionsTable[12331] = 70; // 'state 48' -> async -> shift (target=35, len=0)
actionsTable[12332] = 72; // 'state 48' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 12335, 12337); // 'state 48' -> get..set -> shift (target=403, len=0)
actionsTable[12337] = 74; // 'state 48' -> class -> shift (target=37, len=0)
actionsTable[12342] = 28; // 'state 48' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 12347, 12349); // 'state 48' -> void..typeof -> shift (target=15, len=0)
actionsTable[12350] = 32; // 'state 48' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 12357, 12359); // 'state 48' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 12360, 12363); // 'state 48' -> !..delete -> shift (target=15, len=0)
actionsTable[12363] = 34; // 'state 48' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 12367, 12370); // 'state 48' -> number..template_string -> shift (target=399, len=0)
actionsTable[12376] = 36; // 'state 48' -> update_operator -> shift (target=18, len=0)
actionsTable[12377] = 818; // 'state 48' -> identifier -> shift (target=409, len=0)
actionsTable[12378] = 798; // 'state 48' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 12544, 12549); // 'state 49' -> true..super -> shift (target=399, len=0)
actionsTable[12549] = 68; // 'state 49' -> { -> shift (target=34, len=0)
actionsTable[12552] = 4; // 'state 49' -> ( -> shift (target=2, len=0)
actionsTable[12562] = 806; // 'state 49' -> of -> shift (target=403, len=0)
actionsTable[12576] = 806; // 'state 49' -> from -> shift (target=403, len=0)
actionsTable[12580] = 806; // 'state 49' -> type -> shift (target=403, len=0)
actionsTable[12585] = 20; // 'state 49' -> [ -> shift (target=10, len=0)
actionsTable[12587] = 70; // 'state 49' -> async -> shift (target=35, len=0)
actionsTable[12588] = 72; // 'state 49' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 12591, 12593); // 'state 49' -> get..set -> shift (target=403, len=0)
actionsTable[12593] = 74; // 'state 49' -> class -> shift (target=37, len=0)
actionsTable[12598] = 28; // 'state 49' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 12603, 12605); // 'state 49' -> void..typeof -> shift (target=15, len=0)
actionsTable[12606] = 32; // 'state 49' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 12613, 12615); // 'state 49' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 12616, 12619); // 'state 49' -> !..delete -> shift (target=15, len=0)
actionsTable[12619] = 34; // 'state 49' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 12623, 12626); // 'state 49' -> number..template_string -> shift (target=399, len=0)
actionsTable[12632] = 36; // 'state 49' -> update_operator -> shift (target=18, len=0)
actionsTable[12633] = 818; // 'state 49' -> identifier -> shift (target=409, len=0)
actionsTable[12634] = 798; // 'state 49' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 12800, 12805); // 'state 50' -> true..super -> shift (target=399, len=0)
actionsTable[12805] = 68; // 'state 50' -> { -> shift (target=34, len=0)
actionsTable[12808] = 4; // 'state 50' -> ( -> shift (target=2, len=0)
actionsTable[12818] = 806; // 'state 50' -> of -> shift (target=403, len=0)
actionsTable[12832] = 806; // 'state 50' -> from -> shift (target=403, len=0)
actionsTable[12836] = 806; // 'state 50' -> type -> shift (target=403, len=0)
actionsTable[12841] = 20; // 'state 50' -> [ -> shift (target=10, len=0)
actionsTable[12843] = 70; // 'state 50' -> async -> shift (target=35, len=0)
actionsTable[12844] = 72; // 'state 50' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 12847, 12849); // 'state 50' -> get..set -> shift (target=403, len=0)
actionsTable[12849] = 74; // 'state 50' -> class -> shift (target=37, len=0)
actionsTable[12854] = 28; // 'state 50' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 12859, 12861); // 'state 50' -> void..typeof -> shift (target=15, len=0)
actionsTable[12862] = 32; // 'state 50' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 12869, 12871); // 'state 50' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 12872, 12875); // 'state 50' -> !..delete -> shift (target=15, len=0)
actionsTable[12875] = 34; // 'state 50' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 12879, 12882); // 'state 50' -> number..template_string -> shift (target=399, len=0)
actionsTable[12888] = 36; // 'state 50' -> update_operator -> shift (target=18, len=0)
actionsTable[12889] = 818; // 'state 50' -> identifier -> shift (target=409, len=0)
actionsTable[12890] = 798; // 'state 50' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 13056, 13061); // 'state 51' -> true..super -> shift (target=399, len=0)
actionsTable[13061] = 68; // 'state 51' -> { -> shift (target=34, len=0)
actionsTable[13064] = 4; // 'state 51' -> ( -> shift (target=2, len=0)
actionsTable[13074] = 806; // 'state 51' -> of -> shift (target=403, len=0)
actionsTable[13088] = 806; // 'state 51' -> from -> shift (target=403, len=0)
actionsTable[13092] = 806; // 'state 51' -> type -> shift (target=403, len=0)
actionsTable[13097] = 20; // 'state 51' -> [ -> shift (target=10, len=0)
actionsTable[13099] = 70; // 'state 51' -> async -> shift (target=35, len=0)
actionsTable[13100] = 72; // 'state 51' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 13103, 13105); // 'state 51' -> get..set -> shift (target=403, len=0)
actionsTable[13105] = 74; // 'state 51' -> class -> shift (target=37, len=0)
actionsTable[13110] = 28; // 'state 51' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 13115, 13117); // 'state 51' -> void..typeof -> shift (target=15, len=0)
actionsTable[13118] = 32; // 'state 51' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 13125, 13127); // 'state 51' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 13128, 13131); // 'state 51' -> !..delete -> shift (target=15, len=0)
actionsTable[13131] = 34; // 'state 51' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 13135, 13138); // 'state 51' -> number..template_string -> shift (target=399, len=0)
actionsTable[13144] = 36; // 'state 51' -> update_operator -> shift (target=18, len=0)
actionsTable[13145] = 818; // 'state 51' -> identifier -> shift (target=409, len=0)
actionsTable[13146] = 798; // 'state 51' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 13312, 13317); // 'state 52' -> true..super -> shift (target=399, len=0)
actionsTable[13317] = 68; // 'state 52' -> { -> shift (target=34, len=0)
actionsTable[13320] = 4; // 'state 52' -> ( -> shift (target=2, len=0)
actionsTable[13330] = 806; // 'state 52' -> of -> shift (target=403, len=0)
actionsTable[13344] = 806; // 'state 52' -> from -> shift (target=403, len=0)
actionsTable[13348] = 806; // 'state 52' -> type -> shift (target=403, len=0)
actionsTable[13353] = 20; // 'state 52' -> [ -> shift (target=10, len=0)
actionsTable[13355] = 70; // 'state 52' -> async -> shift (target=35, len=0)
actionsTable[13356] = 72; // 'state 52' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 13359, 13361); // 'state 52' -> get..set -> shift (target=403, len=0)
actionsTable[13361] = 74; // 'state 52' -> class -> shift (target=37, len=0)
actionsTable[13366] = 28; // 'state 52' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 13371, 13373); // 'state 52' -> void..typeof -> shift (target=15, len=0)
actionsTable[13374] = 32; // 'state 52' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 13381, 13383); // 'state 52' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 13384, 13387); // 'state 52' -> !..delete -> shift (target=15, len=0)
actionsTable[13387] = 34; // 'state 52' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 13391, 13394); // 'state 52' -> number..template_string -> shift (target=399, len=0)
actionsTable[13400] = 36; // 'state 52' -> update_operator -> shift (target=18, len=0)
actionsTable[13401] = 818; // 'state 52' -> identifier -> shift (target=409, len=0)
actionsTable[13402] = 798; // 'state 52' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 13568, 13573); // 'state 53' -> true..super -> shift (target=399, len=0)
actionsTable[13573] = 68; // 'state 53' -> { -> shift (target=34, len=0)
actionsTable[13576] = 4; // 'state 53' -> ( -> shift (target=2, len=0)
actionsTable[13586] = 806; // 'state 53' -> of -> shift (target=403, len=0)
actionsTable[13600] = 806; // 'state 53' -> from -> shift (target=403, len=0)
actionsTable[13604] = 806; // 'state 53' -> type -> shift (target=403, len=0)
actionsTable[13609] = 20; // 'state 53' -> [ -> shift (target=10, len=0)
actionsTable[13611] = 70; // 'state 53' -> async -> shift (target=35, len=0)
actionsTable[13612] = 72; // 'state 53' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 13615, 13617); // 'state 53' -> get..set -> shift (target=403, len=0)
actionsTable[13617] = 74; // 'state 53' -> class -> shift (target=37, len=0)
actionsTable[13622] = 28; // 'state 53' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 13627, 13629); // 'state 53' -> void..typeof -> shift (target=15, len=0)
actionsTable[13630] = 32; // 'state 53' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 13637, 13639); // 'state 53' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 13640, 13643); // 'state 53' -> !..delete -> shift (target=15, len=0)
actionsTable[13643] = 34; // 'state 53' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 13647, 13650); // 'state 53' -> number..template_string -> shift (target=399, len=0)
actionsTable[13656] = 36; // 'state 53' -> update_operator -> shift (target=18, len=0)
actionsTable[13657] = 818; // 'state 53' -> identifier -> shift (target=409, len=0)
actionsTable[13658] = 798; // 'state 53' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 13824, 13829); // 'state 54' -> true..super -> shift (target=399, len=0)
actionsTable[13829] = 68; // 'state 54' -> { -> shift (target=34, len=0)
actionsTable[13832] = 4; // 'state 54' -> ( -> shift (target=2, len=0)
actionsTable[13842] = 806; // 'state 54' -> of -> shift (target=403, len=0)
actionsTable[13856] = 806; // 'state 54' -> from -> shift (target=403, len=0)
actionsTable[13860] = 806; // 'state 54' -> type -> shift (target=403, len=0)
actionsTable[13865] = 20; // 'state 54' -> [ -> shift (target=10, len=0)
actionsTable[13867] = 70; // 'state 54' -> async -> shift (target=35, len=0)
actionsTable[13868] = 72; // 'state 54' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 13871, 13873); // 'state 54' -> get..set -> shift (target=403, len=0)
actionsTable[13873] = 74; // 'state 54' -> class -> shift (target=37, len=0)
actionsTable[13878] = 28; // 'state 54' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 13883, 13885); // 'state 54' -> void..typeof -> shift (target=15, len=0)
actionsTable[13886] = 32; // 'state 54' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 13893, 13895); // 'state 54' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 13896, 13899); // 'state 54' -> !..delete -> shift (target=15, len=0)
actionsTable[13899] = 34; // 'state 54' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 13903, 13906); // 'state 54' -> number..template_string -> shift (target=399, len=0)
actionsTable[13912] = 36; // 'state 54' -> update_operator -> shift (target=18, len=0)
actionsTable[13913] = 818; // 'state 54' -> identifier -> shift (target=409, len=0)
actionsTable[13914] = 798; // 'state 54' -> regex -> shift (target=399, len=0)
actionsTable[14088] = 86; // 'state 55' -> ( -> shift (target=43, len=0)
actionsTable[14121] = 274; // 'state 55' -> [ -> shift (target=137, len=0)
actionsTable[14158] = 956; // 'state 55' -> private_property_identifier -> shift (target=478, len=0)
actionsTable[14169] = 956; // 'state 55' -> identifier -> shift (target=478, len=0)
actionsTable.fill(798, 14336, 14341); // 'state 56' -> true..super -> shift (target=399, len=0)
actionsTable[14341] = 68; // 'state 56' -> { -> shift (target=34, len=0)
actionsTable[14344] = 4; // 'state 56' -> ( -> shift (target=2, len=0)
actionsTable[14354] = 806; // 'state 56' -> of -> shift (target=403, len=0)
actionsTable[14368] = 806; // 'state 56' -> from -> shift (target=403, len=0)
actionsTable[14372] = 806; // 'state 56' -> type -> shift (target=403, len=0)
actionsTable[14377] = 20; // 'state 56' -> [ -> shift (target=10, len=0)
actionsTable[14379] = 70; // 'state 56' -> async -> shift (target=35, len=0)
actionsTable[14380] = 72; // 'state 56' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 14383, 14385); // 'state 56' -> get..set -> shift (target=403, len=0)
actionsTable[14385] = 74; // 'state 56' -> class -> shift (target=37, len=0)
actionsTable[14390] = 28; // 'state 56' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 14395, 14397); // 'state 56' -> void..typeof -> shift (target=15, len=0)
actionsTable[14398] = 32; // 'state 56' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 14405, 14407); // 'state 56' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 14408, 14411); // 'state 56' -> !..delete -> shift (target=15, len=0)
actionsTable[14411] = 34; // 'state 56' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 14415, 14418); // 'state 56' -> number..template_string -> shift (target=399, len=0)
actionsTable[14424] = 36; // 'state 56' -> update_operator -> shift (target=18, len=0)
actionsTable[14425] = 818; // 'state 56' -> identifier -> shift (target=409, len=0)
actionsTable[14426] = 798; // 'state 56' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 14592, 14597); // 'state 57' -> true..super -> shift (target=399, len=0)
actionsTable[14597] = 68; // 'state 57' -> { -> shift (target=34, len=0)
actionsTable[14600] = 4; // 'state 57' -> ( -> shift (target=2, len=0)
actionsTable[14610] = 806; // 'state 57' -> of -> shift (target=403, len=0)
actionsTable[14624] = 806; // 'state 57' -> from -> shift (target=403, len=0)
actionsTable[14628] = 806; // 'state 57' -> type -> shift (target=403, len=0)
actionsTable[14633] = 20; // 'state 57' -> [ -> shift (target=10, len=0)
actionsTable[14635] = 70; // 'state 57' -> async -> shift (target=35, len=0)
actionsTable[14636] = 72; // 'state 57' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 14639, 14641); // 'state 57' -> get..set -> shift (target=403, len=0)
actionsTable[14641] = 74; // 'state 57' -> class -> shift (target=37, len=0)
actionsTable[14646] = 28; // 'state 57' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 14651, 14653); // 'state 57' -> void..typeof -> shift (target=15, len=0)
actionsTable[14654] = 32; // 'state 57' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 14661, 14663); // 'state 57' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 14664, 14667); // 'state 57' -> !..delete -> shift (target=15, len=0)
actionsTable[14667] = 34; // 'state 57' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 14671, 14674); // 'state 57' -> number..template_string -> shift (target=399, len=0)
actionsTable[14680] = 36; // 'state 57' -> update_operator -> shift (target=18, len=0)
actionsTable[14681] = 818; // 'state 57' -> identifier -> shift (target=409, len=0)
actionsTable[14682] = 798; // 'state 57' -> regex -> shift (target=399, len=0)
actionsTable[14854] = 964; // 'state 58' -> } -> shift (target=482, len=0)
actionsTable[14884] = 966; // 'state 58' -> type -> shift (target=483, len=0)
actionsTable[14937] = 968; // 'state 58' -> identifier -> shift (target=484, len=0)
actionsTable.fill(798, 15104, 15109); // 'state 59' -> true..super -> shift (target=399, len=0)
actionsTable[15109] = 68; // 'state 59' -> { -> shift (target=34, len=0)
actionsTable[15112] = 4; // 'state 59' -> ( -> shift (target=2, len=0)
actionsTable[15122] = 806; // 'state 59' -> of -> shift (target=403, len=0)
actionsTable[15136] = 806; // 'state 59' -> from -> shift (target=403, len=0)
actionsTable[15140] = 806; // 'state 59' -> type -> shift (target=403, len=0)
actionsTable[15145] = 20; // 'state 59' -> [ -> shift (target=10, len=0)
actionsTable[15147] = 22; // 'state 59' -> async -> shift (target=11, len=0)
actionsTable[15148] = 24; // 'state 59' -> function -> shift (target=12, len=0)
actionsTable.fill(806, 15151, 15153); // 'state 59' -> get..set -> shift (target=403, len=0)
actionsTable[15153] = 26; // 'state 59' -> class -> shift (target=13, len=0)
actionsTable[15158] = 28; // 'state 59' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 15163, 15165); // 'state 59' -> void..typeof -> shift (target=15, len=0)
actionsTable[15166] = 32; // 'state 59' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 15173, 15175); // 'state 59' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 15176, 15179); // 'state 59' -> !..delete -> shift (target=15, len=0)
actionsTable[15179] = 34; // 'state 59' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 15183, 15186); // 'state 59' -> number..template_string -> shift (target=399, len=0)
actionsTable[15192] = 36; // 'state 59' -> update_operator -> shift (target=18, len=0)
actionsTable[15193] = 818; // 'state 59' -> identifier -> shift (target=409, len=0)
actionsTable[15194] = 798; // 'state 59' -> regex -> shift (target=399, len=0)
actionsTable.fill(8, 15375, 15378); // 'state 60' -> const..var -> shift (target=4, len=0)
actionsTable[15391] = 16; // 'state 60' -> import -> shift (target=8, len=0)
actionsTable[15396] = 882; // 'state 60' -> type -> shift (target=441, len=0)
actionsTable[15397] = 18; // 'state 60' -> export -> shift (target=9, len=0)
actionsTable[15403] = 884; // 'state 60' -> async -> shift (target=442, len=0)
actionsTable[15404] = 886; // 'state 60' -> function -> shift (target=443, len=0)
actionsTable[15409] = 888; // 'state 60' -> class -> shift (target=444, len=0)
actionsTable[15412] = 816; // 'state 60' -> interface -> shift (target=408, len=0)
actionsTable[15622] = 990; // 'state 61' -> } -> shift (target=495, len=0)
actionsTable[15634] = 806; // 'state 61' -> of -> shift (target=403, len=0)
actionsTable[15648] = 806; // 'state 61' -> from -> shift (target=403, len=0)
actionsTable[15652] = 806; // 'state 61' -> type -> shift (target=403, len=0)
actionsTable[15656] = 294; // 'state 61' -> ... -> shift (target=147, len=0)
actionsTable[15657] = 198; // 'state 61' -> [ -> shift (target=99, len=0)
actionsTable[15659] = 914; // 'state 61' -> async -> shift (target=457, len=0)
actionsTable.fill(806, 15663, 15665); // 'state 61' -> get..set -> shift (target=403, len=0)
actionsTable.fill(848, 15695, 15697); // 'state 61' -> number..string -> shift (target=424, len=0)
actionsTable[15705] = 992; // 'state 61' -> identifier -> shift (target=496, len=0)
actionsTable[15877] = 122; // 'state 62' -> { -> shift (target=61, len=0)
actionsTable[15905] = 298; // 'state 62' -> , -> shift (target=149, len=0)
actionsTable[15912] = 300; // 'state 62' -> ... -> shift (target=150, len=0)
actionsTable[15913] = 124; // 'state 62' -> [ -> shift (target=62, len=0)
actionsTable[15914] = 996; // 'state 62' -> ] -> shift (target=498, len=0)
actionsTable[15961] = 894; // 'state 62' -> identifier -> shift (target=447, len=0)
actionsTable.fill(1275, 16128, 16137); // 'state 63' -> true..( -> reduce (target=125, len=2)
actionsTable.fill(1275, 16138, 16141); // 'state 63' -> else..do -> reduce (target=125, len=2)
actionsTable[16141] = 984; // 'state 63' -> ; -> shift (target=492, len=0)
actionsTable.fill(1275, 16142, 16147); // 'state 63' -> for..of -> reduce (target=125, len=2)
actionsTable.fill(1275, 16148, 16151); // 'state 63' -> return..try -> reduce (target=125, len=2)
actionsTable.fill(1275, 16153, 16155); // 'state 63' -> switch..case -> reduce (target=125, len=2)
actionsTable.fill(1275, 16156, 16161); // 'state 63' -> default..from -> reduce (target=125, len=2)
actionsTable[16161] = 290; // 'state 63' -> , -> shift (target=145, len=0)
actionsTable.fill(1275, 16164, 16166); // 'state 63' -> type..export -> reduce (target=125, len=2)
actionsTable[16169] = 1275; // 'state 63' -> [ -> reduce (target=125, len=2)
actionsTable.fill(1275, 16171, 16173); // 'state 63' -> async..function -> reduce (target=125, len=2)
actionsTable.fill(1275, 16175, 16178); // 'state 63' -> get..class -> reduce (target=125, len=2)
actionsTable[16180] = 1275; // 'state 63' -> interface -> reduce (target=125, len=2)
actionsTable[16182] = 1275; // 'state 63' -> < -> reduce (target=125, len=2)
actionsTable.fill(1275, 16187, 16189); // 'state 63' -> void..typeof -> reduce (target=125, len=2)
actionsTable[16190] = 1275; // 'state 63' -> new -> reduce (target=125, len=2)
actionsTable.fill(1275, 16197, 16199); // 'state 63' -> +..- -> reduce (target=125, len=2)
actionsTable.fill(1275, 16200, 16204); // 'state 63' -> !..await -> reduce (target=125, len=2)
actionsTable.fill(1275, 16207, 16210); // 'state 63' -> number..template_string -> reduce (target=125, len=2)
actionsTable.fill(1275, 16216, 16220); // 'state 63' -> update_operator..@par-gen.EOF -> reduce (target=125, len=2)
actionsTable.fill(765, 16384, 16393); // 'state 64' -> true..( -> reduce (target=126, len=1)
actionsTable.fill(765, 16394, 16403); // 'state 64' -> else..of -> reduce (target=126, len=1)
actionsTable.fill(765, 16404, 16407); // 'state 64' -> return..try -> reduce (target=126, len=1)
actionsTable.fill(765, 16409, 16411); // 'state 64' -> switch..case -> reduce (target=126, len=1)
actionsTable[16411] = 164; // 'state 64' -> : -> shift (target=82, len=0)
actionsTable.fill(765, 16412, 16418); // 'state 64' -> default.., -> reduce (target=126, len=1)
actionsTable.fill(765, 16420, 16422); // 'state 64' -> type..export -> reduce (target=126, len=1)
actionsTable[16423] = 292; // 'state 64' -> = -> shift (target=146, len=0)
actionsTable[16425] = 765; // 'state 64' -> [ -> reduce (target=126, len=1)
actionsTable.fill(765, 16427, 16429); // 'state 64' -> async..function -> reduce (target=126, len=1)
actionsTable.fill(765, 16431, 16434); // 'state 64' -> get..class -> reduce (target=126, len=1)
actionsTable[16436] = 765; // 'state 64' -> interface -> reduce (target=126, len=1)
actionsTable[16437] = 164; // 'state 64' -> ?: -> shift (target=82, len=0)
actionsTable[16438] = 765; // 'state 64' -> < -> reduce (target=126, len=1)
actionsTable.fill(765, 16443, 16445); // 'state 64' -> void..typeof -> reduce (target=126, len=1)
actionsTable[16446] = 765; // 'state 64' -> new -> reduce (target=126, len=1)
actionsTable.fill(765, 16453, 16455); // 'state 64' -> +..- -> reduce (target=126, len=1)
actionsTable.fill(765, 16456, 16460); // 'state 64' -> !..await -> reduce (target=126, len=1)
actionsTable.fill(765, 16463, 16466); // 'state 64' -> number..template_string -> reduce (target=126, len=1)
actionsTable.fill(765, 16472, 16476); // 'state 64' -> update_operator..@par-gen.EOF -> reduce (target=126, len=1)
actionsTable.fill(798, 16640, 16645); // 'state 65' -> true..super -> shift (target=399, len=0)
actionsTable[16645] = 68; // 'state 65' -> { -> shift (target=34, len=0)
actionsTable[16648] = 4; // 'state 65' -> ( -> shift (target=2, len=0)
actionsTable[16649] = 312; // 'state 65' -> ) -> shift (target=156, len=0)
actionsTable[16658] = 806; // 'state 65' -> of -> shift (target=403, len=0)
actionsTable[16672] = 806; // 'state 65' -> from -> shift (target=403, len=0)
actionsTable[16676] = 806; // 'state 65' -> type -> shift (target=403, len=0)
actionsTable[16680] = 170; // 'state 65' -> ... -> shift (target=85, len=0)
actionsTable[16681] = 20; // 'state 65' -> [ -> shift (target=10, len=0)
actionsTable[16683] = 70; // 'state 65' -> async -> shift (target=35, len=0)
actionsTable[16684] = 72; // 'state 65' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 16687, 16689); // 'state 65' -> get..set -> shift (target=403, len=0)
actionsTable[16689] = 74; // 'state 65' -> class -> shift (target=37, len=0)
actionsTable[16694] = 28; // 'state 65' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 16699, 16701); // 'state 65' -> void..typeof -> shift (target=15, len=0)
actionsTable[16702] = 32; // 'state 65' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 16709, 16711); // 'state 65' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 16712, 16715); // 'state 65' -> !..delete -> shift (target=15, len=0)
actionsTable[16715] = 34; // 'state 65' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 16719, 16722); // 'state 65' -> number..template_string -> shift (target=399, len=0)
actionsTable[16728] = 36; // 'state 65' -> update_operator -> shift (target=18, len=0)
actionsTable[16729] = 172; // 'state 65' -> identifier -> shift (target=86, len=0)
actionsTable[16730] = 798; // 'state 65' -> regex -> shift (target=399, len=0)
actionsTable[16904] = 138; // 'state 66' -> ( -> shift (target=69, len=0)
actionsTable[16950] = 28; // 'state 66' -> < -> shift (target=14, len=0)
actionsTable[16985] = 304; // 'state 66' -> identifier -> shift (target=152, len=0)
actionsTable[17179] = 164; // 'state 67' -> : -> shift (target=82, len=0)
actionsTable[17205] = 164; // 'state 67' -> ?: -> shift (target=82, len=0)
actionsTable[17210] = 310; // 'state 67' -> => -> shift (target=155, len=0)
actionsTable[17416] = 138; // 'state 68' -> ( -> shift (target=69, len=0)
actionsTable[17669] = 122; // 'state 69' -> { -> shift (target=61, len=0)
actionsTable[17673] = 1004; // 'state 69' -> ) -> shift (target=502, len=0)
actionsTable[17704] = 320; // 'state 69' -> ... -> shift (target=160, len=0)
actionsTable[17705] = 124; // 'state 69' -> [ -> shift (target=62, len=0)
actionsTable[17707] = 1006; // 'state 69' -> async -> shift (target=503, len=0)
actionsTable.fill(1008, 17709, 17711); // 'state 69' -> static..readonly -> shift (target=504, len=0)
actionsTable.fill(1006, 17711, 17713); // 'state 69' -> get..set -> shift (target=503, len=0)
actionsTable[17746] = 1008; // 'state 69' -> accessibility_modifier -> shift (target=504, len=0)
actionsTable[17753] = 894; // 'state 69' -> identifier -> shift (target=447, len=0)
actionsTable[17928] = 138; // 'state 70' -> ( -> shift (target=69, len=0)
actionsTable[17974] = 28; // 'state 70' -> < -> shift (target=14, len=0)
actionsTable[18181] = 80; // 'state 71' -> { -> shift (target=40, len=0)
actionsTable[18203] = 164; // 'state 71' -> : -> shift (target=82, len=0)
actionsTable[18229] = 164; // 'state 71' -> ?: -> shift (target=82, len=0)
actionsTable[18440] = 138; // 'state 72' -> ( -> shift (target=69, len=0)
actionsTable[18694] = 1014; // 'state 73' -> } -> shift (target=507, len=0)
actionsTable[18701] = 1016; // 'state 73' -> ; -> shift (target=508, len=0)
actionsTable[18706] = 806; // 'state 73' -> of -> shift (target=403, len=0)
actionsTable[18720] = 806; // 'state 73' -> from -> shift (target=403, len=0)
actionsTable[18724] = 806; // 'state 73' -> type -> shift (target=403, len=0)
actionsTable[18729] = 198; // 'state 73' -> [ -> shift (target=99, len=0)
actionsTable[18731] = 1018; // 'state 73' -> async -> shift (target=509, len=0)
actionsTable.fill(1008, 18733, 18735); // 'state 73' -> static..readonly -> shift (target=504, len=0)
actionsTable.fill(1020, 18735, 18737); // 'state 73' -> get..set -> shift (target=510, len=0)
actionsTable[18766] = 338; // 'state 73' -> private_property_identifier -> shift (target=169, len=0)
actionsTable.fill(848, 18767, 18769); // 'state 73' -> number..string -> shift (target=424, len=0)
actionsTable[18770] = 1008; // 'state 73' -> accessibility_modifier -> shift (target=504, len=0)
actionsTable[18777] = 848; // 'state 73' -> identifier -> shift (target=424, len=0)
actionsTable.fill(798, 18944, 18949); // 'state 74' -> true..super -> shift (target=399, len=0)
actionsTable[18949] = 68; // 'state 74' -> { -> shift (target=34, len=0)
actionsTable[18952] = 4; // 'state 74' -> ( -> shift (target=2, len=0)
actionsTable[18962] = 806; // 'state 74' -> of -> shift (target=403, len=0)
actionsTable[18976] = 806; // 'state 74' -> from -> shift (target=403, len=0)
actionsTable[18980] = 806; // 'state 74' -> type -> shift (target=403, len=0)
actionsTable[18985] = 20; // 'state 74' -> [ -> shift (target=10, len=0)
actionsTable[18987] = 70; // 'state 74' -> async -> shift (target=35, len=0)
actionsTable[18988] = 72; // 'state 74' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 18991, 18993); // 'state 74' -> get..set -> shift (target=403, len=0)
actionsTable[18993] = 74; // 'state 74' -> class -> shift (target=37, len=0)
actionsTable[18998] = 28; // 'state 74' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 19003, 19005); // 'state 74' -> void..typeof -> shift (target=15, len=0)
actionsTable[19006] = 32; // 'state 74' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 19013, 19015); // 'state 74' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 19016, 19019); // 'state 74' -> !..delete -> shift (target=15, len=0)
actionsTable[19019] = 34; // 'state 74' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 19023, 19026); // 'state 74' -> number..template_string -> shift (target=399, len=0)
actionsTable[19032] = 36; // 'state 74' -> update_operator -> shift (target=18, len=0)
actionsTable[19033] = 818; // 'state 74' -> identifier -> shift (target=409, len=0)
actionsTable[19034] = 798; // 'state 74' -> regex -> shift (target=399, len=0)
actionsTable.fill(942, 19200, 19203); // 'state 75' -> true..null -> shift (target=471, len=0)
actionsTable[19205] = 262; // 'state 75' -> { -> shift (target=131, len=0)
actionsTable[19208] = 264; // 'state 75' -> ( -> shift (target=132, len=0)
actionsTable[19241] = 266; // 'state 75' -> [ -> shift (target=133, len=0)
actionsTable[19254] = 28; // 'state 75' -> < -> shift (target=14, len=0)
actionsTable[19256] = 268; // 'state 75' -> | -> shift (target=134, len=0)
actionsTable[19259] = 942; // 'state 75' -> void -> shift (target=471, len=0)
actionsTable[19260] = 944; // 'state 75' -> typeof -> shift (target=472, len=0)
actionsTable.fill(942, 19279, 19281); // 'state 75' -> number..string -> shift (target=471, len=0)
actionsTable[19289] = 270; // 'state 75' -> identifier -> shift (target=135, len=0)
actionsTable[19461] = 146; // 'state 76' -> { -> shift (target=73, len=0)
actionsTable[19506] = 148; // 'state 76' -> extends -> shift (target=74, len=0)
actionsTable[19507] = 150; // 'state 76' -> implements -> shift (target=75, len=0)
actionsTable[19510] = 28; // 'state 76' -> < -> shift (target=14, len=0)
actionsTable[19717] = 146; // 'state 77' -> { -> shift (target=73, len=0)
actionsTable[19973] = 146; // 'state 78' -> { -> shift (target=73, len=0)
actionsTable[20018] = 148; // 'state 78' -> extends -> shift (target=74, len=0)
actionsTable[20019] = 150; // 'state 78' -> implements -> shift (target=75, len=0)
actionsTable[20229] = 262; // 'state 79' -> { -> shift (target=131, len=0)
actionsTable[20274] = 344; // 'state 79' -> extends -> shift (target=172, len=0)
actionsTable[20278] = 28; // 'state 79' -> < -> shift (target=14, len=0)
actionsTable[20519] = 350; // 'state 80' -> = -> shift (target=175, len=0)
actionsTable[20534] = 28; // 'state 80' -> < -> shift (target=14, len=0)
actionsTable.fill(798, 20736, 20741); // 'state 81' -> true..super -> shift (target=399, len=0)
actionsTable[20741] = 2; // 'state 81' -> { -> shift (target=1, len=0)
actionsTable[20744] = 4; // 'state 81' -> ( -> shift (target=2, len=0)
actionsTable[20754] = 806; // 'state 81' -> of -> shift (target=403, len=0)
actionsTable[20768] = 806; // 'state 81' -> from -> shift (target=403, len=0)
actionsTable[20772] = 806; // 'state 81' -> type -> shift (target=403, len=0)
actionsTable[20777] = 20; // 'state 81' -> [ -> shift (target=10, len=0)
actionsTable[20779] = 70; // 'state 81' -> async -> shift (target=35, len=0)
actionsTable[20780] = 72; // 'state 81' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 20783, 20785); // 'state 81' -> get..set -> shift (target=403, len=0)
actionsTable[20785] = 74; // 'state 81' -> class -> shift (target=37, len=0)
actionsTable[20790] = 28; // 'state 81' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 20795, 20797); // 'state 81' -> void..typeof -> shift (target=15, len=0)
actionsTable[20798] = 32; // 'state 81' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 20805, 20807); // 'state 81' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 20808, 20811); // 'state 81' -> !..delete -> shift (target=15, len=0)
actionsTable[20811] = 34; // 'state 81' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 20815, 20818); // 'state 81' -> number..template_string -> shift (target=399, len=0)
actionsTable[20824] = 36; // 'state 81' -> update_operator -> shift (target=18, len=0)
actionsTable[20825] = 818; // 'state 81' -> identifier -> shift (target=409, len=0)
actionsTable[20826] = 798; // 'state 81' -> regex -> shift (target=399, len=0)
actionsTable.fill(942, 20992, 20995); // 'state 82' -> true..null -> shift (target=471, len=0)
actionsTable[20997] = 262; // 'state 82' -> { -> shift (target=131, len=0)
actionsTable[21000] = 264; // 'state 82' -> ( -> shift (target=132, len=0)
actionsTable[21033] = 266; // 'state 82' -> [ -> shift (target=133, len=0)
actionsTable[21046] = 28; // 'state 82' -> < -> shift (target=14, len=0)
actionsTable[21048] = 268; // 'state 82' -> | -> shift (target=134, len=0)
actionsTable[21051] = 942; // 'state 82' -> void -> shift (target=471, len=0)
actionsTable[21052] = 944; // 'state 82' -> typeof -> shift (target=472, len=0)
actionsTable.fill(942, 21071, 21073); // 'state 82' -> number..string -> shift (target=471, len=0)
actionsTable[21081] = 270; // 'state 82' -> identifier -> shift (target=135, len=0)
actionsTable.fill(798, 21248, 21253); // 'state 83' -> true..super -> shift (target=399, len=0)
actionsTable[21253] = 68; // 'state 83' -> { -> shift (target=34, len=0)
actionsTable[21256] = 4; // 'state 83' -> ( -> shift (target=2, len=0)
actionsTable[21266] = 806; // 'state 83' -> of -> shift (target=403, len=0)
actionsTable[21280] = 806; // 'state 83' -> from -> shift (target=403, len=0)
actionsTable[21284] = 806; // 'state 83' -> type -> shift (target=403, len=0)
actionsTable[21289] = 20; // 'state 83' -> [ -> shift (target=10, len=0)
actionsTable[21291] = 70; // 'state 83' -> async -> shift (target=35, len=0)
actionsTable[21292] = 72; // 'state 83' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 21295, 21297); // 'state 83' -> get..set -> shift (target=403, len=0)
actionsTable[21297] = 74; // 'state 83' -> class -> shift (target=37, len=0)
actionsTable[21302] = 28; // 'state 83' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 21307, 21309); // 'state 83' -> void..typeof -> shift (target=15, len=0)
actionsTable[21310] = 32; // 'state 83' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 21317, 21319); // 'state 83' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 21320, 21323); // 'state 83' -> !..delete -> shift (target=15, len=0)
actionsTable[21323] = 34; // 'state 83' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 21327, 21330); // 'state 83' -> number..template_string -> shift (target=399, len=0)
actionsTable[21336] = 36; // 'state 83' -> update_operator -> shift (target=18, len=0)
actionsTable[21337] = 818; // 'state 83' -> identifier -> shift (target=409, len=0)
actionsTable[21338] = 798; // 'state 83' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 21504, 21509); // 'state 84' -> true..super -> shift (target=399, len=0)
actionsTable[21509] = 68; // 'state 84' -> { -> shift (target=34, len=0)
actionsTable[21512] = 4; // 'state 84' -> ( -> shift (target=2, len=0)
actionsTable[21522] = 806; // 'state 84' -> of -> shift (target=403, len=0)
actionsTable[21536] = 806; // 'state 84' -> from -> shift (target=403, len=0)
actionsTable[21540] = 806; // 'state 84' -> type -> shift (target=403, len=0)
actionsTable[21545] = 20; // 'state 84' -> [ -> shift (target=10, len=0)
actionsTable[21547] = 70; // 'state 84' -> async -> shift (target=35, len=0)
actionsTable[21548] = 72; // 'state 84' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 21551, 21553); // 'state 84' -> get..set -> shift (target=403, len=0)
actionsTable[21553] = 74; // 'state 84' -> class -> shift (target=37, len=0)
actionsTable[21558] = 28; // 'state 84' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 21563, 21565); // 'state 84' -> void..typeof -> shift (target=15, len=0)
actionsTable[21566] = 32; // 'state 84' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 21573, 21575); // 'state 84' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 21576, 21579); // 'state 84' -> !..delete -> shift (target=15, len=0)
actionsTable[21579] = 34; // 'state 84' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 21583, 21586); // 'state 84' -> number..template_string -> shift (target=399, len=0)
actionsTable[21592] = 36; // 'state 84' -> update_operator -> shift (target=18, len=0)
actionsTable[21593] = 818; // 'state 84' -> identifier -> shift (target=409, len=0)
actionsTable[21594] = 798; // 'state 84' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 21760, 21765); // 'state 85' -> true..super -> shift (target=399, len=0)
actionsTable[21765] = 68; // 'state 85' -> { -> shift (target=34, len=0)
actionsTable[21768] = 4; // 'state 85' -> ( -> shift (target=2, len=0)
actionsTable[21778] = 806; // 'state 85' -> of -> shift (target=403, len=0)
actionsTable[21792] = 806; // 'state 85' -> from -> shift (target=403, len=0)
actionsTable[21796] = 806; // 'state 85' -> type -> shift (target=403, len=0)
actionsTable[21801] = 20; // 'state 85' -> [ -> shift (target=10, len=0)
actionsTable[21803] = 70; // 'state 85' -> async -> shift (target=35, len=0)
actionsTable[21804] = 72; // 'state 85' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 21807, 21809); // 'state 85' -> get..set -> shift (target=403, len=0)
actionsTable[21809] = 74; // 'state 85' -> class -> shift (target=37, len=0)
actionsTable[21814] = 28; // 'state 85' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 21819, 21821); // 'state 85' -> void..typeof -> shift (target=15, len=0)
actionsTable[21822] = 32; // 'state 85' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 21829, 21831); // 'state 85' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 21832, 21835); // 'state 85' -> !..delete -> shift (target=15, len=0)
actionsTable[21835] = 34; // 'state 85' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 21839, 21842); // 'state 85' -> number..template_string -> shift (target=399, len=0)
actionsTable[21848] = 36; // 'state 85' -> update_operator -> shift (target=18, len=0)
actionsTable[21849] = 360; // 'state 85' -> identifier -> shift (target=180, len=0)
actionsTable[21850] = 798; // 'state 85' -> regex -> shift (target=399, len=0)
actionsTable.fill(869, 22024, 22026); // 'state 86' -> (..) -> reduce (target=178, len=1)
actionsTable[22035] = 869; // 'state 86' -> in -> reduce (target=178, len=1)
actionsTable[22043] = 164; // 'state 86' -> : -> shift (target=82, len=0)
actionsTable.fill(869, 22049, 22052); // 'state 86' -> ,..as -> reduce (target=178, len=1)
actionsTable[22055] = 875; // 'state 86' -> = -> reduce (target=181, len=1)
actionsTable[22057] = 869; // 'state 86' -> [ -> reduce (target=178, len=1)
actionsTable[22069] = 164; // 'state 86' -> ?: -> shift (target=82, len=0)
actionsTable.fill(869, 22070, 22074); // 'state 86' -> <..& -> reduce (target=178, len=1)
actionsTable[22074] = 162; // 'state 86' -> => -> shift (target=81, len=0)
actionsTable.fill(869, 22079, 22088); // 'state 86' -> ?..** -> reduce (target=178, len=1)
actionsTable.fill(869, 22092, 22094); // 'state 86' -> ?.... -> reduce (target=178, len=1)
actionsTable[22099] = 875; // 'state 86' -> compound_assignment_operator -> reduce (target=181, len=1)
actionsTable.fill(869, 22100, 22105); // 'state 86' -> equality_operator..update_operator -> reduce (target=178, len=1)
actionsTable[22281] = 1036; // 'state 87' -> ) -> shift (target=518, len=0)
actionsTable[22305] = 364; // 'state 87' -> , -> shift (target=182, len=0)
actionsTable[22536] = 86; // 'state 88' -> ( -> shift (target=43, len=0)
actionsTable[22537] = 905; // 'state 88' -> ) -> reduce (target=196, len=1)
actionsTable[22547] = 88; // 'state 88' -> in -> shift (target=44, len=0)
actionsTable[22561] = 905; // 'state 88' -> , -> reduce (target=196, len=1)
actionsTable[22562] = 90; // 'state 88' -> * -> shift (target=45, len=0)
actionsTable[22563] = 92; // 'state 88' -> as -> shift (target=46, len=0)
actionsTable[22569] = 94; // 'state 88' -> [ -> shift (target=47, len=0)
actionsTable[22570] = 905; // 'state 88' -> ] -> reduce (target=196, len=1)
actionsTable.fill(88, 22582, 22584); // 'state 88' -> <..> -> shift (target=44, len=0)
actionsTable[22584] = 96; // 'state 88' -> | -> shift (target=48, len=0)
actionsTable[22585] = 98; // 'state 88' -> & -> shift (target=49, len=0)
actionsTable[22591] = 100; // 'state 88' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 22592, 22594); // 'state 88' -> ||..?? -> shift (target=51, len=0)
actionsTable[22594] = 104; // 'state 88' -> && -> shift (target=52, len=0)
actionsTable[22595] = 106; // 'state 88' -> ^ -> shift (target=53, len=0)
actionsTable[22596] = 88; // 'state 88' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 22597, 22599); // 'state 88' -> +..- -> shift (target=54, len=0)
actionsTable[22599] = 90; // 'state 88' -> ** -> shift (target=45, len=0)
actionsTable[22604] = 110; // 'state 88' -> ?. -> shift (target=55, len=0)
actionsTable[22605] = 864; // 'state 88' -> . -> shift (target=432, len=0)
actionsTable[22612] = 112; // 'state 88' -> equality_operator -> shift (target=56, len=0)
actionsTable[22613] = 88; // 'state 88' -> relational_operator -> shift (target=44, len=0)
actionsTable[22614] = 114; // 'state 88' -> shift_operator -> shift (target=57, len=0)
actionsTable[22615] = 90; // 'state 88' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[22616] = 866; // 'state 88' -> update_operator -> shift (target=433, len=0)
actionsTable[22793] = 1030; // 'state 89' -> ) -> shift (target=515, len=0)
actionsTable[22817] = 358; // 'state 89' -> , -> shift (target=179, len=0)
actionsTable.fill(869, 23048, 23050); // 'state 90' -> (..) -> reduce (target=178, len=1)
actionsTable[23059] = 869; // 'state 90' -> in -> reduce (target=178, len=1)
actionsTable[23067] = 164; // 'state 90' -> : -> shift (target=82, len=0)
actionsTable.fill(869, 23073, 23076); // 'state 90' -> ,..as -> reduce (target=178, len=1)
actionsTable[23079] = 875; // 'state 90' -> = -> reduce (target=181, len=1)
actionsTable[23081] = 869; // 'state 90' -> [ -> reduce (target=178, len=1)
actionsTable[23093] = 164; // 'state 90' -> ?: -> shift (target=82, len=0)
actionsTable.fill(869, 23094, 23098); // 'state 90' -> <..& -> reduce (target=178, len=1)
actionsTable.fill(869, 23103, 23112); // 'state 90' -> ?..** -> reduce (target=178, len=1)
actionsTable.fill(869, 23116, 23118); // 'state 90' -> ?.... -> reduce (target=178, len=1)
actionsTable[23123] = 875; // 'state 90' -> compound_assignment_operator -> reduce (target=181, len=1)
actionsTable.fill(869, 23124, 23129); // 'state 90' -> equality_operator..update_operator -> reduce (target=178, len=1)
actionsTable.fill(1401, 23296, 23304); // 'state 91' -> true..if -> reduce (target=188, len=2)
actionsTable[23304] = 86; // 'state 91' -> ( -> shift (target=43, len=0)
actionsTable.fill(1401, 23305, 23319); // 'state 91' -> )..try -> reduce (target=188, len=2)
actionsTable.fill(1401, 23321, 23334); // 'state 91' -> switch..export -> reduce (target=188, len=2)
actionsTable[23337] = 94; // 'state 91' -> [ -> shift (target=47, len=0)
actionsTable.fill(1401, 23338, 23346); // 'state 91' -> ]..class -> reduce (target=188, len=2)
actionsTable.fill(1401, 23347, 23349); // 'state 91' -> implements..interface -> reduce (target=188, len=2)
actionsTable.fill(1401, 23350, 23354); // 'state 91' -> <..& -> reduce (target=188, len=2)
actionsTable.fill(1401, 23355, 23357); // 'state 91' -> void..typeof -> reduce (target=188, len=2)
actionsTable.fill(1401, 23358, 23372); // 'state 91' -> new..await -> reduce (target=188, len=2)
actionsTable[23372] = 110; // 'state 91' -> ?. -> shift (target=55, len=0)
actionsTable[23373] = 864; // 'state 91' -> . -> shift (target=432, len=0)
actionsTable.fill(1401, 23374, 23379); // 'state 91' -> private_property_identifier..accessibility_modifier -> reduce (target=188, len=2)
actionsTable.fill(1401, 23380, 23384); // 'state 91' -> equality_operator..multiplicative_operator -> reduce (target=188, len=2)
actionsTable[23384] = 866; // 'state 91' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(1401, 23385, 23388); // 'state 91' -> identifier..@par-gen.EOF -> reduce (target=188, len=2)
actionsTable.fill(1405, 23552, 23560); // 'state 92' -> true..if -> reduce (target=190, len=2)
actionsTable[23560] = 86; // 'state 92' -> ( -> shift (target=43, len=0)
actionsTable.fill(1405, 23561, 23575); // 'state 92' -> )..try -> reduce (target=190, len=2)
actionsTable.fill(1405, 23577, 23590); // 'state 92' -> switch..export -> reduce (target=190, len=2)
actionsTable[23593] = 94; // 'state 92' -> [ -> shift (target=47, len=0)
actionsTable.fill(1405, 23594, 23602); // 'state 92' -> ]..class -> reduce (target=190, len=2)
actionsTable.fill(1405, 23603, 23605); // 'state 92' -> implements..interface -> reduce (target=190, len=2)
actionsTable.fill(1405, 23606, 23610); // 'state 92' -> <..& -> reduce (target=190, len=2)
actionsTable.fill(1405, 23611, 23613); // 'state 92' -> void..typeof -> reduce (target=190, len=2)
actionsTable.fill(1405, 23614, 23628); // 'state 92' -> new..await -> reduce (target=190, len=2)
actionsTable[23628] = 110; // 'state 92' -> ?. -> shift (target=55, len=0)
actionsTable[23629] = 864; // 'state 92' -> . -> shift (target=432, len=0)
actionsTable.fill(1405, 23630, 23635); // 'state 92' -> private_property_identifier..accessibility_modifier -> reduce (target=190, len=2)
actionsTable.fill(1405, 23636, 23644); // 'state 92' -> equality_operator..@par-gen.EOF -> reduce (target=190, len=2)
actionsTable.fill(1403, 23808, 23816); // 'state 93' -> true..if -> reduce (target=189, len=2)
actionsTable[23816] = 86; // 'state 93' -> ( -> shift (target=43, len=0)
actionsTable.fill(1403, 23817, 23831); // 'state 93' -> )..try -> reduce (target=189, len=2)
actionsTable.fill(1403, 23833, 23846); // 'state 93' -> switch..export -> reduce (target=189, len=2)
actionsTable[23849] = 94; // 'state 93' -> [ -> shift (target=47, len=0)
actionsTable.fill(1403, 23850, 23858); // 'state 93' -> ]..class -> reduce (target=189, len=2)
actionsTable.fill(1403, 23859, 23861); // 'state 93' -> implements..interface -> reduce (target=189, len=2)
actionsTable.fill(1403, 23862, 23866); // 'state 93' -> <..& -> reduce (target=189, len=2)
actionsTable.fill(1403, 23867, 23869); // 'state 93' -> void..typeof -> reduce (target=189, len=2)
actionsTable.fill(1403, 23870, 23884); // 'state 93' -> new..await -> reduce (target=189, len=2)
actionsTable[23884] = 110; // 'state 93' -> ?. -> shift (target=55, len=0)
actionsTable[23885] = 864; // 'state 93' -> . -> shift (target=432, len=0)
actionsTable.fill(1403, 23886, 23891); // 'state 93' -> private_property_identifier..accessibility_modifier -> reduce (target=189, len=2)
actionsTable.fill(1403, 23892, 23896); // 'state 93' -> equality_operator..multiplicative_operator -> reduce (target=189, len=2)
actionsTable[23896] = 866; // 'state 93' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(1403, 23897, 23900); // 'state 93' -> identifier..@par-gen.EOF -> reduce (target=189, len=2)
actionsTable.fill(798, 24064, 24069); // 'state 94' -> true..super -> shift (target=399, len=0)
actionsTable[24069] = 68; // 'state 94' -> { -> shift (target=34, len=0)
actionsTable[24072] = 4; // 'state 94' -> ( -> shift (target=2, len=0)
actionsTable[24082] = 806; // 'state 94' -> of -> shift (target=403, len=0)
actionsTable[24096] = 806; // 'state 94' -> from -> shift (target=403, len=0)
actionsTable[24100] = 806; // 'state 94' -> type -> shift (target=403, len=0)
actionsTable[24104] = 48; // 'state 94' -> ... -> shift (target=24, len=0)
actionsTable[24105] = 20; // 'state 94' -> [ -> shift (target=10, len=0)
actionsTable[24107] = 70; // 'state 94' -> async -> shift (target=35, len=0)
actionsTable[24108] = 72; // 'state 94' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 24111, 24113); // 'state 94' -> get..set -> shift (target=403, len=0)
actionsTable[24113] = 74; // 'state 94' -> class -> shift (target=37, len=0)
actionsTable[24118] = 28; // 'state 94' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 24123, 24125); // 'state 94' -> void..typeof -> shift (target=15, len=0)
actionsTable[24126] = 32; // 'state 94' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 24133, 24135); // 'state 94' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 24136, 24139); // 'state 94' -> !..delete -> shift (target=15, len=0)
actionsTable[24139] = 34; // 'state 94' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 24143, 24146); // 'state 94' -> number..template_string -> shift (target=399, len=0)
actionsTable[24152] = 36; // 'state 94' -> update_operator -> shift (target=18, len=0)
actionsTable[24153] = 818; // 'state 94' -> identifier -> shift (target=409, len=0)
actionsTable[24154] = 798; // 'state 94' -> regex -> shift (target=399, len=0)
actionsTable.fill(1407, 24320, 24328); // 'state 95' -> true..if -> reduce (target=191, len=2)
actionsTable[24328] = 86; // 'state 95' -> ( -> shift (target=43, len=0)
actionsTable.fill(1407, 24329, 24343); // 'state 95' -> )..try -> reduce (target=191, len=2)
actionsTable.fill(1407, 24345, 24358); // 'state 95' -> switch..export -> reduce (target=191, len=2)
actionsTable.fill(1407, 24361, 24370); // 'state 95' -> [..class -> reduce (target=191, len=2)
actionsTable.fill(1407, 24371, 24373); // 'state 95' -> implements..interface -> reduce (target=191, len=2)
actionsTable[24374] = 366; // 'state 95' -> < -> shift (target=183, len=0)
actionsTable.fill(1407, 24375, 24378); // 'state 95' -> >..& -> reduce (target=191, len=2)
actionsTable.fill(1407, 24379, 24381); // 'state 95' -> void..typeof -> reduce (target=191, len=2)
actionsTable.fill(1407, 24382, 24403); // 'state 95' -> new..accessibility_modifier -> reduce (target=191, len=2)
actionsTable.fill(1407, 24404, 24412); // 'state 95' -> equality_operator..@par-gen.EOF -> reduce (target=191, len=2)
actionsTable.fill(798, 24576, 24581); // 'state 96' -> true..super -> shift (target=399, len=0)
actionsTable[24581] = 68; // 'state 96' -> { -> shift (target=34, len=0)
actionsTable[24584] = 4; // 'state 96' -> ( -> shift (target=2, len=0)
actionsTable[24594] = 806; // 'state 96' -> of -> shift (target=403, len=0)
actionsTable[24608] = 806; // 'state 96' -> from -> shift (target=403, len=0)
actionsTable[24612] = 806; // 'state 96' -> type -> shift (target=403, len=0)
actionsTable[24616] = 48; // 'state 96' -> ... -> shift (target=24, len=0)
actionsTable[24617] = 20; // 'state 96' -> [ -> shift (target=10, len=0)
actionsTable[24619] = 70; // 'state 96' -> async -> shift (target=35, len=0)
actionsTable[24620] = 72; // 'state 96' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 24623, 24625); // 'state 96' -> get..set -> shift (target=403, len=0)
actionsTable[24625] = 74; // 'state 96' -> class -> shift (target=37, len=0)
actionsTable[24630] = 28; // 'state 96' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 24635, 24637); // 'state 96' -> void..typeof -> shift (target=15, len=0)
actionsTable[24638] = 32; // 'state 96' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 24645, 24647); // 'state 96' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 24648, 24651); // 'state 96' -> !..delete -> shift (target=15, len=0)
actionsTable[24651] = 34; // 'state 96' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 24655, 24658); // 'state 96' -> number..template_string -> shift (target=399, len=0)
actionsTable[24664] = 36; // 'state 96' -> update_operator -> shift (target=18, len=0)
actionsTable[24665] = 818; // 'state 96' -> identifier -> shift (target=409, len=0)
actionsTable[24666] = 798; // 'state 96' -> regex -> shift (target=399, len=0)
actionsTable[24865] = 372; // 'state 97' -> , -> shift (target=186, len=0)
actionsTable[24874] = 1042; // 'state 97' -> ] -> shift (target=521, len=0)
actionsTable[25121] = 374; // 'state 98' -> , -> shift (target=187, len=0)
actionsTable[25143] = 1046; // 'state 98' -> > -> shift (target=523, len=0)
actionsTable.fill(798, 25344, 25349); // 'state 99' -> true..super -> shift (target=399, len=0)
actionsTable[25349] = 68; // 'state 99' -> { -> shift (target=34, len=0)
actionsTable[25352] = 4; // 'state 99' -> ( -> shift (target=2, len=0)
actionsTable[25362] = 806; // 'state 99' -> of -> shift (target=403, len=0)
actionsTable[25376] = 806; // 'state 99' -> from -> shift (target=403, len=0)
actionsTable[25380] = 806; // 'state 99' -> type -> shift (target=403, len=0)
actionsTable[25385] = 20; // 'state 99' -> [ -> shift (target=10, len=0)
actionsTable[25387] = 70; // 'state 99' -> async -> shift (target=35, len=0)
actionsTable[25388] = 72; // 'state 99' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 25391, 25393); // 'state 99' -> get..set -> shift (target=403, len=0)
actionsTable[25393] = 74; // 'state 99' -> class -> shift (target=37, len=0)
actionsTable[25398] = 28; // 'state 99' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 25403, 25405); // 'state 99' -> void..typeof -> shift (target=15, len=0)
actionsTable[25406] = 32; // 'state 99' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 25413, 25415); // 'state 99' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 25416, 25419); // 'state 99' -> !..delete -> shift (target=15, len=0)
actionsTable[25419] = 34; // 'state 99' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 25423, 25426); // 'state 99' -> number..template_string -> shift (target=399, len=0)
actionsTable[25432] = 36; // 'state 99' -> update_operator -> shift (target=18, len=0)
actionsTable[25433] = 818; // 'state 99' -> identifier -> shift (target=409, len=0)
actionsTable[25434] = 798; // 'state 99' -> regex -> shift (target=399, len=0)
actionsTable[25608] = 138; // 'state 100' -> ( -> shift (target=69, len=0)
actionsTable[25654] = 28; // 'state 100' -> < -> shift (target=14, len=0)
actionsTable[25864] = 86; // 'state 101' -> ( -> shift (target=43, len=0)
actionsTable[25875] = 88; // 'state 101' -> in -> shift (target=44, len=0)
actionsTable[25889] = 905; // 'state 101' -> , -> reduce (target=196, len=1)
actionsTable[25890] = 90; // 'state 101' -> * -> shift (target=45, len=0)
actionsTable[25891] = 92; // 'state 101' -> as -> shift (target=46, len=0)
actionsTable[25897] = 94; // 'state 101' -> [ -> shift (target=47, len=0)
actionsTable[25898] = 1050; // 'state 101' -> ] -> shift (target=525, len=0)
actionsTable.fill(88, 25910, 25912); // 'state 101' -> <..> -> shift (target=44, len=0)
actionsTable[25912] = 96; // 'state 101' -> | -> shift (target=48, len=0)
actionsTable[25913] = 98; // 'state 101' -> & -> shift (target=49, len=0)
actionsTable[25919] = 100; // 'state 101' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 25920, 25922); // 'state 101' -> ||..?? -> shift (target=51, len=0)
actionsTable[25922] = 104; // 'state 101' -> && -> shift (target=52, len=0)
actionsTable[25923] = 106; // 'state 101' -> ^ -> shift (target=53, len=0)
actionsTable[25924] = 88; // 'state 101' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 25925, 25927); // 'state 101' -> +..- -> shift (target=54, len=0)
actionsTable[25927] = 90; // 'state 101' -> ** -> shift (target=45, len=0)
actionsTable[25932] = 110; // 'state 101' -> ?. -> shift (target=55, len=0)
actionsTable[25933] = 864; // 'state 101' -> . -> shift (target=432, len=0)
actionsTable[25940] = 112; // 'state 101' -> equality_operator -> shift (target=56, len=0)
actionsTable[25941] = 88; // 'state 101' -> relational_operator -> shift (target=44, len=0)
actionsTable[25942] = 114; // 'state 101' -> shift_operator -> shift (target=57, len=0)
actionsTable[25943] = 90; // 'state 101' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[25944] = 866; // 'state 101' -> update_operator -> shift (target=433, len=0)
actionsTable[26118] = 1052; // 'state 102' -> } -> shift (target=526, len=0)
actionsTable[26130] = 806; // 'state 102' -> of -> shift (target=403, len=0)
actionsTable[26144] = 806; // 'state 102' -> from -> shift (target=403, len=0)
actionsTable[26148] = 806; // 'state 102' -> type -> shift (target=403, len=0)
actionsTable[26152] = 48; // 'state 102' -> ... -> shift (target=24, len=0)
actionsTable[26153] = 198; // 'state 102' -> [ -> shift (target=99, len=0)
actionsTable[26155] = 226; // 'state 102' -> async -> shift (target=113, len=0)
actionsTable.fill(54, 26159, 26161); // 'state 102' -> get..set -> shift (target=27, len=0)
actionsTable.fill(848, 26191, 26193); // 'state 102' -> number..string -> shift (target=424, len=0)
actionsTable[26201] = 930; // 'state 102' -> identifier -> shift (target=465, len=0)
actionsTable.fill(798, 26368, 26373); // 'state 103' -> true..super -> shift (target=399, len=0)
actionsTable[26373] = 68; // 'state 103' -> { -> shift (target=34, len=0)
actionsTable[26376] = 4; // 'state 103' -> ( -> shift (target=2, len=0)
actionsTable[26386] = 806; // 'state 103' -> of -> shift (target=403, len=0)
actionsTable[26400] = 806; // 'state 103' -> from -> shift (target=403, len=0)
actionsTable[26404] = 806; // 'state 103' -> type -> shift (target=403, len=0)
actionsTable[26409] = 20; // 'state 103' -> [ -> shift (target=10, len=0)
actionsTable[26411] = 70; // 'state 103' -> async -> shift (target=35, len=0)
actionsTable[26412] = 72; // 'state 103' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 26415, 26417); // 'state 103' -> get..set -> shift (target=403, len=0)
actionsTable[26417] = 74; // 'state 103' -> class -> shift (target=37, len=0)
actionsTable[26422] = 28; // 'state 103' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 26427, 26429); // 'state 103' -> void..typeof -> shift (target=15, len=0)
actionsTable[26430] = 32; // 'state 103' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 26437, 26439); // 'state 103' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 26440, 26443); // 'state 103' -> !..delete -> shift (target=15, len=0)
actionsTable[26443] = 34; // 'state 103' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 26447, 26450); // 'state 103' -> number..template_string -> shift (target=399, len=0)
actionsTable[26456] = 36; // 'state 103' -> update_operator -> shift (target=18, len=0)
actionsTable[26457] = 818; // 'state 103' -> identifier -> shift (target=409, len=0)
actionsTable[26458] = 798; // 'state 103' -> regex -> shift (target=399, len=0)
actionsTable[26629] = 80; // 'state 104' -> { -> shift (target=40, len=0)
actionsTable[26651] = 164; // 'state 104' -> : -> shift (target=82, len=0)
actionsTable[26677] = 164; // 'state 104' -> ?: -> shift (target=82, len=0)
actionsTable[26888] = 138; // 'state 105' -> ( -> shift (target=69, len=0)
actionsTable[27142] = 1419; // 'state 106' -> } -> reduce (target=197, len=2)
actionsTable[27144] = 86; // 'state 106' -> ( -> shift (target=43, len=0)
actionsTable[27145] = 1419; // 'state 106' -> ) -> reduce (target=197, len=2)
actionsTable[27155] = 88; // 'state 106' -> in -> shift (target=44, len=0)
actionsTable[27169] = 1419; // 'state 106' -> , -> reduce (target=197, len=2)
actionsTable[27170] = 90; // 'state 106' -> * -> shift (target=45, len=0)
actionsTable[27171] = 92; // 'state 106' -> as -> shift (target=46, len=0)
actionsTable[27177] = 94; // 'state 106' -> [ -> shift (target=47, len=0)
actionsTable[27178] = 1419; // 'state 106' -> ] -> reduce (target=197, len=2)
actionsTable.fill(88, 27190, 27192); // 'state 106' -> <..> -> shift (target=44, len=0)
actionsTable[27192] = 96; // 'state 106' -> | -> shift (target=48, len=0)
actionsTable[27193] = 98; // 'state 106' -> & -> shift (target=49, len=0)
actionsTable[27199] = 100; // 'state 106' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 27200, 27202); // 'state 106' -> ||..?? -> shift (target=51, len=0)
actionsTable[27202] = 104; // 'state 106' -> && -> shift (target=52, len=0)
actionsTable[27203] = 106; // 'state 106' -> ^ -> shift (target=53, len=0)
actionsTable[27204] = 88; // 'state 106' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 27205, 27207); // 'state 106' -> +..- -> shift (target=54, len=0)
actionsTable[27207] = 90; // 'state 106' -> ** -> shift (target=45, len=0)
actionsTable[27212] = 110; // 'state 106' -> ?. -> shift (target=55, len=0)
actionsTable[27213] = 864; // 'state 106' -> . -> shift (target=432, len=0)
actionsTable[27220] = 112; // 'state 106' -> equality_operator -> shift (target=56, len=0)
actionsTable[27221] = 88; // 'state 106' -> relational_operator -> shift (target=44, len=0)
actionsTable[27222] = 114; // 'state 106' -> shift_operator -> shift (target=57, len=0)
actionsTable[27223] = 90; // 'state 106' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[27224] = 866; // 'state 106' -> update_operator -> shift (target=433, len=0)
actionsTable[27400] = 86; // 'state 107' -> ( -> shift (target=43, len=0)
actionsTable[27401] = 392; // 'state 107' -> ) -> shift (target=196, len=0)
actionsTable[27411] = 88; // 'state 107' -> in -> shift (target=44, len=0)
actionsTable[27426] = 90; // 'state 107' -> * -> shift (target=45, len=0)
actionsTable[27427] = 92; // 'state 107' -> as -> shift (target=46, len=0)
actionsTable[27433] = 94; // 'state 107' -> [ -> shift (target=47, len=0)
actionsTable.fill(88, 27446, 27448); // 'state 107' -> <..> -> shift (target=44, len=0)
actionsTable[27448] = 96; // 'state 107' -> | -> shift (target=48, len=0)
actionsTable[27449] = 98; // 'state 107' -> & -> shift (target=49, len=0)
actionsTable[27455] = 100; // 'state 107' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 27456, 27458); // 'state 107' -> ||..?? -> shift (target=51, len=0)
actionsTable[27458] = 104; // 'state 107' -> && -> shift (target=52, len=0)
actionsTable[27459] = 106; // 'state 107' -> ^ -> shift (target=53, len=0)
actionsTable[27460] = 88; // 'state 107' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 27461, 27463); // 'state 107' -> +..- -> shift (target=54, len=0)
actionsTable[27463] = 90; // 'state 107' -> ** -> shift (target=45, len=0)
actionsTable[27468] = 110; // 'state 107' -> ?. -> shift (target=55, len=0)
actionsTable[27469] = 864; // 'state 107' -> . -> shift (target=432, len=0)
actionsTable[27476] = 112; // 'state 107' -> equality_operator -> shift (target=56, len=0)
actionsTable[27477] = 88; // 'state 107' -> relational_operator -> shift (target=44, len=0)
actionsTable[27478] = 114; // 'state 107' -> shift_operator -> shift (target=57, len=0)
actionsTable[27479] = 90; // 'state 107' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[27480] = 866; // 'state 107' -> update_operator -> shift (target=433, len=0)
actionsTable[27656] = 86; // 'state 108' -> ( -> shift (target=43, len=0)
actionsTable[27657] = 394; // 'state 108' -> ) -> shift (target=197, len=0)
actionsTable[27667] = 88; // 'state 108' -> in -> shift (target=44, len=0)
actionsTable[27682] = 90; // 'state 108' -> * -> shift (target=45, len=0)
actionsTable[27683] = 92; // 'state 108' -> as -> shift (target=46, len=0)
actionsTable[27689] = 94; // 'state 108' -> [ -> shift (target=47, len=0)
actionsTable.fill(88, 27702, 27704); // 'state 108' -> <..> -> shift (target=44, len=0)
actionsTable[27704] = 96; // 'state 108' -> | -> shift (target=48, len=0)
actionsTable[27705] = 98; // 'state 108' -> & -> shift (target=49, len=0)
actionsTable[27711] = 100; // 'state 108' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 27712, 27714); // 'state 108' -> ||..?? -> shift (target=51, len=0)
actionsTable[27714] = 104; // 'state 108' -> && -> shift (target=52, len=0)
actionsTable[27715] = 106; // 'state 108' -> ^ -> shift (target=53, len=0)
actionsTable[27716] = 88; // 'state 108' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 27717, 27719); // 'state 108' -> +..- -> shift (target=54, len=0)
actionsTable[27719] = 90; // 'state 108' -> ** -> shift (target=45, len=0)
actionsTable[27724] = 110; // 'state 108' -> ?. -> shift (target=55, len=0)
actionsTable[27725] = 864; // 'state 108' -> . -> shift (target=432, len=0)
actionsTable[27732] = 112; // 'state 108' -> equality_operator -> shift (target=56, len=0)
actionsTable[27733] = 88; // 'state 108' -> relational_operator -> shift (target=44, len=0)
actionsTable[27734] = 114; // 'state 108' -> shift_operator -> shift (target=57, len=0)
actionsTable[27735] = 90; // 'state 108' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[27736] = 866; // 'state 108' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(798, 27904, 27909); // 'state 109' -> true..super -> shift (target=399, len=0)
actionsTable[27909] = 68; // 'state 109' -> { -> shift (target=34, len=0)
actionsTable[27912] = 4; // 'state 109' -> ( -> shift (target=2, len=0)
actionsTable[27917] = 398; // 'state 109' -> ; -> shift (target=199, len=0)
actionsTable[27922] = 806; // 'state 109' -> of -> shift (target=403, len=0)
actionsTable[27936] = 806; // 'state 109' -> from -> shift (target=403, len=0)
actionsTable[27940] = 806; // 'state 109' -> type -> shift (target=403, len=0)
actionsTable[27945] = 20; // 'state 109' -> [ -> shift (target=10, len=0)
actionsTable[27947] = 70; // 'state 109' -> async -> shift (target=35, len=0)
actionsTable[27948] = 72; // 'state 109' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 27951, 27953); // 'state 109' -> get..set -> shift (target=403, len=0)
actionsTable[27953] = 74; // 'state 109' -> class -> shift (target=37, len=0)
actionsTable[27958] = 28; // 'state 109' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 27963, 27965); // 'state 109' -> void..typeof -> shift (target=15, len=0)
actionsTable[27966] = 32; // 'state 109' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 27973, 27975); // 'state 109' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 27976, 27979); // 'state 109' -> !..delete -> shift (target=15, len=0)
actionsTable[27979] = 34; // 'state 109' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 27983, 27986); // 'state 109' -> number..template_string -> shift (target=399, len=0)
actionsTable[27992] = 36; // 'state 109' -> update_operator -> shift (target=18, len=0)
actionsTable[27993] = 818; // 'state 109' -> identifier -> shift (target=409, len=0)
actionsTable[27994] = 798; // 'state 109' -> regex -> shift (target=399, len=0)
actionsTable[28165] = 122; // 'state 110' -> { -> shift (target=61, len=0)
actionsTable[28201] = 124; // 'state 110' -> [ -> shift (target=62, len=0)
actionsTable[28249] = 894; // 'state 110' -> identifier -> shift (target=447, len=0)
actionsTable[28424] = 86; // 'state 111' -> ( -> shift (target=43, len=0)
actionsTable[28429] = 404; // 'state 111' -> ; -> shift (target=202, len=0)
actionsTable[28435] = 88; // 'state 111' -> in -> shift (target=44, len=0)
actionsTable[28450] = 90; // 'state 111' -> * -> shift (target=45, len=0)
actionsTable[28451] = 92; // 'state 111' -> as -> shift (target=46, len=0)
actionsTable[28457] = 94; // 'state 111' -> [ -> shift (target=47, len=0)
actionsTable.fill(88, 28470, 28472); // 'state 111' -> <..> -> shift (target=44, len=0)
actionsTable[28472] = 96; // 'state 111' -> | -> shift (target=48, len=0)
actionsTable[28473] = 98; // 'state 111' -> & -> shift (target=49, len=0)
actionsTable[28479] = 100; // 'state 111' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 28480, 28482); // 'state 111' -> ||..?? -> shift (target=51, len=0)
actionsTable[28482] = 104; // 'state 111' -> && -> shift (target=52, len=0)
actionsTable[28483] = 106; // 'state 111' -> ^ -> shift (target=53, len=0)
actionsTable[28484] = 88; // 'state 111' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 28485, 28487); // 'state 111' -> +..- -> shift (target=54, len=0)
actionsTable[28487] = 90; // 'state 111' -> ** -> shift (target=45, len=0)
actionsTable[28492] = 110; // 'state 111' -> ?. -> shift (target=55, len=0)
actionsTable[28493] = 864; // 'state 111' -> . -> shift (target=432, len=0)
actionsTable[28500] = 112; // 'state 111' -> equality_operator -> shift (target=56, len=0)
actionsTable[28501] = 88; // 'state 111' -> relational_operator -> shift (target=44, len=0)
actionsTable[28502] = 114; // 'state 111' -> shift_operator -> shift (target=57, len=0)
actionsTable[28503] = 90; // 'state 111' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[28504] = 866; // 'state 111' -> update_operator -> shift (target=433, len=0)
actionsTable[28680] = 138; // 'state 112' -> ( -> shift (target=69, len=0)
actionsTable[28726] = 28; // 'state 112' -> < -> shift (target=14, len=0)
actionsTable[28761] = 406; // 'state 112' -> identifier -> shift (target=203, len=0)
actionsTable[28934] = 867; // 'state 113' -> } -> reduce (target=177, len=1)
actionsTable[28936] = 867; // 'state 113' -> ( -> reduce (target=177, len=1)
actionsTable[28946] = 806; // 'state 113' -> of -> shift (target=403, len=0)
actionsTable[28955] = 867; // 'state 113' -> : -> reduce (target=177, len=1)
actionsTable[28960] = 806; // 'state 113' -> from -> shift (target=403, len=0)
actionsTable[28961] = 867; // 'state 113' -> , -> reduce (target=177, len=1)
actionsTable[28964] = 806; // 'state 113' -> type -> shift (target=403, len=0)
actionsTable[28969] = 198; // 'state 113' -> [ -> shift (target=99, len=0)
actionsTable[28971] = 914; // 'state 113' -> async -> shift (target=457, len=0)
actionsTable.fill(806, 28975, 28977); // 'state 113' -> get..set -> shift (target=403, len=0)
actionsTable.fill(867, 28981, 28983); // 'state 113' -> ?:..< -> reduce (target=177, len=1)
actionsTable.fill(848, 29007, 29009); // 'state 113' -> number..string -> shift (target=424, len=0)
actionsTable[29017] = 848; // 'state 113' -> identifier -> shift (target=424, len=0)
actionsTable[29192] = 138; // 'state 114' -> ( -> shift (target=69, len=0)
actionsTable[29238] = 28; // 'state 114' -> < -> shift (target=14, len=0)
actionsTable[29445] = 146; // 'state 115' -> { -> shift (target=73, len=0)
actionsTable[29490] = 148; // 'state 115' -> extends -> shift (target=74, len=0)
actionsTable[29491] = 150; // 'state 115' -> implements -> shift (target=75, len=0)
actionsTable[29494] = 28; // 'state 115' -> < -> shift (target=14, len=0)
actionsTable[29701] = 80; // 'state 116' -> { -> shift (target=40, len=0)
actionsTable[29704] = 410; // 'state 116' -> ( -> shift (target=205, len=0)
actionsTable[29957] = 80; // 'state 117' -> { -> shift (target=40, len=0)
actionsTable.fill(1747, 30208, 30217); // 'state 118' -> true..( -> reduce (target=105, len=3)
actionsTable.fill(1747, 30218, 30221); // 'state 118' -> else..do -> reduce (target=105, len=3)
actionsTable.fill(1747, 30222, 30227); // 'state 118' -> for..of -> reduce (target=105, len=3)
actionsTable.fill(1747, 30228, 30231); // 'state 118' -> return..try -> reduce (target=105, len=3)
actionsTable[30232] = 234; // 'state 118' -> finally -> shift (target=117, len=0)
actionsTable.fill(1747, 30233, 30235); // 'state 118' -> switch..case -> reduce (target=105, len=3)
actionsTable.fill(1747, 30236, 30241); // 'state 118' -> default..from -> reduce (target=105, len=3)
actionsTable.fill(1747, 30244, 30246); // 'state 118' -> type..export -> reduce (target=105, len=3)
actionsTable[30249] = 1747; // 'state 118' -> [ -> reduce (target=105, len=3)
actionsTable.fill(1747, 30251, 30253); // 'state 118' -> async..function -> reduce (target=105, len=3)
actionsTable.fill(1747, 30255, 30258); // 'state 118' -> get..class -> reduce (target=105, len=3)
actionsTable[30260] = 1747; // 'state 118' -> interface -> reduce (target=105, len=3)
actionsTable[30262] = 1747; // 'state 118' -> < -> reduce (target=105, len=3)
actionsTable.fill(1747, 30267, 30269); // 'state 118' -> void..typeof -> reduce (target=105, len=3)
actionsTable[30270] = 1747; // 'state 118' -> new -> reduce (target=105, len=3)
actionsTable.fill(1747, 30277, 30279); // 'state 118' -> +..- -> reduce (target=105, len=3)
actionsTable.fill(1747, 30280, 30284); // 'state 118' -> !..await -> reduce (target=105, len=3)
actionsTable.fill(1747, 30287, 30290); // 'state 118' -> number..template_string -> reduce (target=105, len=3)
actionsTable.fill(1747, 30296, 30300); // 'state 118' -> update_operator..@par-gen.EOF -> reduce (target=105, len=3)
actionsTable[30472] = 86; // 'state 119' -> ( -> shift (target=43, len=0)
actionsTable[30473] = 412; // 'state 119' -> ) -> shift (target=206, len=0)
actionsTable[30483] = 88; // 'state 119' -> in -> shift (target=44, len=0)
actionsTable[30498] = 90; // 'state 119' -> * -> shift (target=45, len=0)
actionsTable[30499] = 92; // 'state 119' -> as -> shift (target=46, len=0)
actionsTable[30505] = 94; // 'state 119' -> [ -> shift (target=47, len=0)
actionsTable.fill(88, 30518, 30520); // 'state 119' -> <..> -> shift (target=44, len=0)
actionsTable[30520] = 96; // 'state 119' -> | -> shift (target=48, len=0)
actionsTable[30521] = 98; // 'state 119' -> & -> shift (target=49, len=0)
actionsTable[30527] = 100; // 'state 119' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 30528, 30530); // 'state 119' -> ||..?? -> shift (target=51, len=0)
actionsTable[30530] = 104; // 'state 119' -> && -> shift (target=52, len=0)
actionsTable[30531] = 106; // 'state 119' -> ^ -> shift (target=53, len=0)
actionsTable[30532] = 88; // 'state 119' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 30533, 30535); // 'state 119' -> +..- -> shift (target=54, len=0)
actionsTable[30535] = 90; // 'state 119' -> ** -> shift (target=45, len=0)
actionsTable[30540] = 110; // 'state 119' -> ?. -> shift (target=55, len=0)
actionsTable[30541] = 864; // 'state 119' -> . -> shift (target=432, len=0)
actionsTable[30548] = 112; // 'state 119' -> equality_operator -> shift (target=56, len=0)
actionsTable[30549] = 88; // 'state 119' -> relational_operator -> shift (target=44, len=0)
actionsTable[30550] = 114; // 'state 119' -> shift_operator -> shift (target=57, len=0)
actionsTable[30551] = 90; // 'state 119' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[30552] = 866; // 'state 119' -> update_operator -> shift (target=433, len=0)
actionsTable[30728] = 86; // 'state 120' -> ( -> shift (target=43, len=0)
actionsTable[30739] = 88; // 'state 120' -> in -> shift (target=44, len=0)
actionsTable[30747] = 414; // 'state 120' -> : -> shift (target=207, len=0)
actionsTable[30754] = 90; // 'state 120' -> * -> shift (target=45, len=0)
actionsTable[30755] = 92; // 'state 120' -> as -> shift (target=46, len=0)
actionsTable[30761] = 94; // 'state 120' -> [ -> shift (target=47, len=0)
actionsTable.fill(88, 30774, 30776); // 'state 120' -> <..> -> shift (target=44, len=0)
actionsTable[30776] = 96; // 'state 120' -> | -> shift (target=48, len=0)
actionsTable[30777] = 98; // 'state 120' -> & -> shift (target=49, len=0)
actionsTable[30783] = 100; // 'state 120' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 30784, 30786); // 'state 120' -> ||..?? -> shift (target=51, len=0)
actionsTable[30786] = 104; // 'state 120' -> && -> shift (target=52, len=0)
actionsTable[30787] = 106; // 'state 120' -> ^ -> shift (target=53, len=0)
actionsTable[30788] = 88; // 'state 120' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 30789, 30791); // 'state 120' -> +..- -> shift (target=54, len=0)
actionsTable[30791] = 90; // 'state 120' -> ** -> shift (target=45, len=0)
actionsTable[30796] = 110; // 'state 120' -> ?. -> shift (target=55, len=0)
actionsTable[30797] = 864; // 'state 120' -> . -> shift (target=432, len=0)
actionsTable[30804] = 112; // 'state 120' -> equality_operator -> shift (target=56, len=0)
actionsTable[30805] = 88; // 'state 120' -> relational_operator -> shift (target=44, len=0)
actionsTable[30806] = 114; // 'state 120' -> shift_operator -> shift (target=57, len=0)
actionsTable[30807] = 90; // 'state 120' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[30808] = 866; // 'state 120' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(1909, 30976, 30984); // 'state 121' -> true..if -> reduce (target=186, len=3)
actionsTable[30984] = 86; // 'state 121' -> ( -> shift (target=43, len=0)
actionsTable.fill(1909, 30985, 30995); // 'state 121' -> )..of -> reduce (target=186, len=3)
actionsTable[30995] = 88; // 'state 121' -> in -> shift (target=44, len=0)
actionsTable.fill(1909, 30996, 30999); // 'state 121' -> return..try -> reduce (target=186, len=3)
actionsTable.fill(1909, 31001, 31010); // 'state 121' -> switch.., -> reduce (target=186, len=3)
actionsTable[31010] = 90; // 'state 121' -> * -> shift (target=45, len=0)
actionsTable[31011] = 92; // 'state 121' -> as -> shift (target=46, len=0)
actionsTable.fill(1909, 31012, 31014); // 'state 121' -> type..export -> reduce (target=186, len=3)
actionsTable[31017] = 94; // 'state 121' -> [ -> shift (target=47, len=0)
actionsTable.fill(1909, 31018, 31026); // 'state 121' -> ]..class -> reduce (target=186, len=3)
actionsTable.fill(1909, 31027, 31029); // 'state 121' -> implements..interface -> reduce (target=186, len=3)
actionsTable.fill(88, 31030, 31032); // 'state 121' -> <..> -> shift (target=44, len=0)
actionsTable[31032] = 96; // 'state 121' -> | -> shift (target=48, len=0)
actionsTable[31033] = 98; // 'state 121' -> & -> shift (target=49, len=0)
actionsTable.fill(1909, 31035, 31037); // 'state 121' -> void..typeof -> reduce (target=186, len=3)
actionsTable.fill(1909, 31038, 31042); // 'state 121' -> new..?? -> reduce (target=186, len=3)
actionsTable[31042] = 104; // 'state 121' -> && -> shift (target=52, len=0)
actionsTable[31043] = 106; // 'state 121' -> ^ -> shift (target=53, len=0)
actionsTable[31044] = 88; // 'state 121' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 31045, 31047); // 'state 121' -> +..- -> shift (target=54, len=0)
actionsTable[31047] = 90; // 'state 121' -> ** -> shift (target=45, len=0)
actionsTable.fill(1909, 31048, 31052); // 'state 121' -> !..await -> reduce (target=186, len=3)
actionsTable[31052] = 110; // 'state 121' -> ?. -> shift (target=55, len=0)
actionsTable[31053] = 864; // 'state 121' -> . -> shift (target=432, len=0)
actionsTable.fill(1909, 31054, 31059); // 'state 121' -> private_property_identifier..accessibility_modifier -> reduce (target=186, len=3)
actionsTable[31060] = 112; // 'state 121' -> equality_operator -> shift (target=56, len=0)
actionsTable[31061] = 88; // 'state 121' -> relational_operator -> shift (target=44, len=0)
actionsTable[31062] = 114; // 'state 121' -> shift_operator -> shift (target=57, len=0)
actionsTable[31063] = 90; // 'state 121' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[31064] = 866; // 'state 121' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(1909, 31065, 31068); // 'state 121' -> identifier..@par-gen.EOF -> reduce (target=186, len=3)
actionsTable.fill(1909, 31232, 31240); // 'state 122' -> true..if -> reduce (target=186, len=3)
actionsTable[31240] = 86; // 'state 122' -> ( -> shift (target=43, len=0)
actionsTable.fill(1909, 31241, 31251); // 'state 122' -> )..of -> reduce (target=186, len=3)
actionsTable[31251] = 88; // 'state 122' -> in -> shift (target=44, len=0)
actionsTable.fill(1909, 31252, 31255); // 'state 122' -> return..try -> reduce (target=186, len=3)
actionsTable.fill(1909, 31257, 31266); // 'state 122' -> switch.., -> reduce (target=186, len=3)
actionsTable[31266] = 90; // 'state 122' -> * -> shift (target=45, len=0)
actionsTable[31267] = 92; // 'state 122' -> as -> shift (target=46, len=0)
actionsTable.fill(1909, 31268, 31270); // 'state 122' -> type..export -> reduce (target=186, len=3)
actionsTable[31273] = 94; // 'state 122' -> [ -> shift (target=47, len=0)
actionsTable.fill(1909, 31274, 31282); // 'state 122' -> ]..class -> reduce (target=186, len=3)
actionsTable.fill(1909, 31283, 31285); // 'state 122' -> implements..interface -> reduce (target=186, len=3)
actionsTable.fill(88, 31286, 31288); // 'state 122' -> <..> -> shift (target=44, len=0)
actionsTable[31288] = 96; // 'state 122' -> | -> shift (target=48, len=0)
actionsTable[31289] = 98; // 'state 122' -> & -> shift (target=49, len=0)
actionsTable.fill(1909, 31291, 31293); // 'state 122' -> void..typeof -> reduce (target=186, len=3)
actionsTable.fill(1909, 31294, 31299); // 'state 122' -> new..&& -> reduce (target=186, len=3)
actionsTable[31299] = 106; // 'state 122' -> ^ -> shift (target=53, len=0)
actionsTable[31300] = 88; // 'state 122' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 31301, 31303); // 'state 122' -> +..- -> shift (target=54, len=0)
actionsTable[31303] = 90; // 'state 122' -> ** -> shift (target=45, len=0)
actionsTable.fill(1909, 31304, 31308); // 'state 122' -> !..await -> reduce (target=186, len=3)
actionsTable[31308] = 110; // 'state 122' -> ?. -> shift (target=55, len=0)
actionsTable[31309] = 864; // 'state 122' -> . -> shift (target=432, len=0)
actionsTable.fill(1909, 31310, 31315); // 'state 122' -> private_property_identifier..accessibility_modifier -> reduce (target=186, len=3)
actionsTable[31316] = 112; // 'state 122' -> equality_operator -> shift (target=56, len=0)
actionsTable[31317] = 88; // 'state 122' -> relational_operator -> shift (target=44, len=0)
actionsTable[31318] = 114; // 'state 122' -> shift_operator -> shift (target=57, len=0)
actionsTable[31319] = 90; // 'state 122' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[31320] = 866; // 'state 122' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(1909, 31321, 31324); // 'state 122' -> identifier..@par-gen.EOF -> reduce (target=186, len=3)
actionsTable.fill(1909, 31488, 31496); // 'state 123' -> true..if -> reduce (target=186, len=3)
actionsTable[31496] = 86; // 'state 123' -> ( -> shift (target=43, len=0)
actionsTable.fill(1909, 31497, 31507); // 'state 123' -> )..of -> reduce (target=186, len=3)
actionsTable[31507] = 88; // 'state 123' -> in -> shift (target=44, len=0)
actionsTable.fill(1909, 31508, 31511); // 'state 123' -> return..try -> reduce (target=186, len=3)
actionsTable.fill(1909, 31513, 31522); // 'state 123' -> switch.., -> reduce (target=186, len=3)
actionsTable[31522] = 90; // 'state 123' -> * -> shift (target=45, len=0)
actionsTable[31523] = 92; // 'state 123' -> as -> shift (target=46, len=0)
actionsTable.fill(1909, 31524, 31526); // 'state 123' -> type..export -> reduce (target=186, len=3)
actionsTable[31529] = 94; // 'state 123' -> [ -> shift (target=47, len=0)
actionsTable.fill(1909, 31530, 31538); // 'state 123' -> ]..class -> reduce (target=186, len=3)
actionsTable.fill(1909, 31539, 31541); // 'state 123' -> implements..interface -> reduce (target=186, len=3)
actionsTable.fill(88, 31542, 31544); // 'state 123' -> <..> -> shift (target=44, len=0)
actionsTable[31544] = 1909; // 'state 123' -> | -> reduce (target=186, len=3)
actionsTable[31545] = 98; // 'state 123' -> & -> shift (target=49, len=0)
actionsTable.fill(1909, 31547, 31549); // 'state 123' -> void..typeof -> reduce (target=186, len=3)
actionsTable.fill(1909, 31550, 31555); // 'state 123' -> new..&& -> reduce (target=186, len=3)
actionsTable[31555] = 106; // 'state 123' -> ^ -> shift (target=53, len=0)
actionsTable[31556] = 88; // 'state 123' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 31557, 31559); // 'state 123' -> +..- -> shift (target=54, len=0)
actionsTable[31559] = 90; // 'state 123' -> ** -> shift (target=45, len=0)
actionsTable.fill(1909, 31560, 31564); // 'state 123' -> !..await -> reduce (target=186, len=3)
actionsTable[31564] = 110; // 'state 123' -> ?. -> shift (target=55, len=0)
actionsTable[31565] = 864; // 'state 123' -> . -> shift (target=432, len=0)
actionsTable.fill(1909, 31566, 31571); // 'state 123' -> private_property_identifier..accessibility_modifier -> reduce (target=186, len=3)
actionsTable[31572] = 112; // 'state 123' -> equality_operator -> shift (target=56, len=0)
actionsTable[31573] = 88; // 'state 123' -> relational_operator -> shift (target=44, len=0)
actionsTable[31574] = 114; // 'state 123' -> shift_operator -> shift (target=57, len=0)
actionsTable[31575] = 90; // 'state 123' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[31576] = 866; // 'state 123' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(1909, 31577, 31580); // 'state 123' -> identifier..@par-gen.EOF -> reduce (target=186, len=3)
actionsTable.fill(1909, 31744, 31752); // 'state 124' -> true..if -> reduce (target=186, len=3)
actionsTable[31752] = 86; // 'state 124' -> ( -> shift (target=43, len=0)
actionsTable.fill(1909, 31753, 31763); // 'state 124' -> )..of -> reduce (target=186, len=3)
actionsTable[31763] = 88; // 'state 124' -> in -> shift (target=44, len=0)
actionsTable.fill(1909, 31764, 31767); // 'state 124' -> return..try -> reduce (target=186, len=3)
actionsTable.fill(1909, 31769, 31778); // 'state 124' -> switch.., -> reduce (target=186, len=3)
actionsTable[31778] = 90; // 'state 124' -> * -> shift (target=45, len=0)
actionsTable[31779] = 92; // 'state 124' -> as -> shift (target=46, len=0)
actionsTable.fill(1909, 31780, 31782); // 'state 124' -> type..export -> reduce (target=186, len=3)
actionsTable[31785] = 94; // 'state 124' -> [ -> shift (target=47, len=0)
actionsTable.fill(1909, 31786, 31794); // 'state 124' -> ]..class -> reduce (target=186, len=3)
actionsTable.fill(1909, 31795, 31797); // 'state 124' -> implements..interface -> reduce (target=186, len=3)
actionsTable.fill(88, 31798, 31800); // 'state 124' -> <..> -> shift (target=44, len=0)
actionsTable[31800] = 1909; // 'state 124' -> | -> reduce (target=186, len=3)
actionsTable[31801] = 98; // 'state 124' -> & -> shift (target=49, len=0)
actionsTable.fill(1909, 31803, 31805); // 'state 124' -> void..typeof -> reduce (target=186, len=3)
actionsTable.fill(1909, 31806, 31812); // 'state 124' -> new..^ -> reduce (target=186, len=3)
actionsTable[31812] = 88; // 'state 124' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 31813, 31815); // 'state 124' -> +..- -> shift (target=54, len=0)
actionsTable[31815] = 90; // 'state 124' -> ** -> shift (target=45, len=0)
actionsTable.fill(1909, 31816, 31820); // 'state 124' -> !..await -> reduce (target=186, len=3)
actionsTable[31820] = 110; // 'state 124' -> ?. -> shift (target=55, len=0)
actionsTable[31821] = 864; // 'state 124' -> . -> shift (target=432, len=0)
actionsTable.fill(1909, 31822, 31827); // 'state 124' -> private_property_identifier..accessibility_modifier -> reduce (target=186, len=3)
actionsTable[31828] = 112; // 'state 124' -> equality_operator -> shift (target=56, len=0)
actionsTable[31829] = 88; // 'state 124' -> relational_operator -> shift (target=44, len=0)
actionsTable[31830] = 114; // 'state 124' -> shift_operator -> shift (target=57, len=0)
actionsTable[31831] = 90; // 'state 124' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[31832] = 866; // 'state 124' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(1909, 31833, 31836); // 'state 124' -> identifier..@par-gen.EOF -> reduce (target=186, len=3)
actionsTable.fill(1909, 32000, 32008); // 'state 125' -> true..if -> reduce (target=186, len=3)
actionsTable[32008] = 86; // 'state 125' -> ( -> shift (target=43, len=0)
actionsTable.fill(1909, 32009, 32019); // 'state 125' -> )..of -> reduce (target=186, len=3)
actionsTable[32019] = 88; // 'state 125' -> in -> shift (target=44, len=0)
actionsTable.fill(1909, 32020, 32023); // 'state 125' -> return..try -> reduce (target=186, len=3)
actionsTable.fill(1909, 32025, 32034); // 'state 125' -> switch.., -> reduce (target=186, len=3)
actionsTable[32034] = 90; // 'state 125' -> * -> shift (target=45, len=0)
actionsTable[32035] = 92; // 'state 125' -> as -> shift (target=46, len=0)
actionsTable.fill(1909, 32036, 32038); // 'state 125' -> type..export -> reduce (target=186, len=3)
actionsTable[32041] = 94; // 'state 125' -> [ -> shift (target=47, len=0)
actionsTable.fill(1909, 32042, 32050); // 'state 125' -> ]..class -> reduce (target=186, len=3)
actionsTable.fill(1909, 32051, 32053); // 'state 125' -> implements..interface -> reduce (target=186, len=3)
actionsTable.fill(88, 32054, 32056); // 'state 125' -> <..> -> shift (target=44, len=0)
actionsTable.fill(1909, 32056, 32058); // 'state 125' -> |..& -> reduce (target=186, len=3)
actionsTable.fill(1909, 32059, 32061); // 'state 125' -> void..typeof -> reduce (target=186, len=3)
actionsTable.fill(1909, 32062, 32068); // 'state 125' -> new..^ -> reduce (target=186, len=3)
actionsTable[32068] = 88; // 'state 125' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 32069, 32071); // 'state 125' -> +..- -> shift (target=54, len=0)
actionsTable[32071] = 90; // 'state 125' -> ** -> shift (target=45, len=0)
actionsTable.fill(1909, 32072, 32076); // 'state 125' -> !..await -> reduce (target=186, len=3)
actionsTable[32076] = 110; // 'state 125' -> ?. -> shift (target=55, len=0)
actionsTable[32077] = 864; // 'state 125' -> . -> shift (target=432, len=0)
actionsTable.fill(1909, 32078, 32083); // 'state 125' -> private_property_identifier..accessibility_modifier -> reduce (target=186, len=3)
actionsTable[32084] = 112; // 'state 125' -> equality_operator -> shift (target=56, len=0)
actionsTable[32085] = 88; // 'state 125' -> relational_operator -> shift (target=44, len=0)
actionsTable[32086] = 114; // 'state 125' -> shift_operator -> shift (target=57, len=0)
actionsTable[32087] = 90; // 'state 125' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[32088] = 866; // 'state 125' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(1909, 32089, 32092); // 'state 125' -> identifier..@par-gen.EOF -> reduce (target=186, len=3)
actionsTable.fill(1909, 32256, 32264); // 'state 126' -> true..if -> reduce (target=186, len=3)
actionsTable[32264] = 86; // 'state 126' -> ( -> shift (target=43, len=0)
actionsTable.fill(1909, 32265, 32275); // 'state 126' -> )..of -> reduce (target=186, len=3)
actionsTable[32275] = 88; // 'state 126' -> in -> shift (target=44, len=0)
actionsTable.fill(1909, 32276, 32279); // 'state 126' -> return..try -> reduce (target=186, len=3)
actionsTable.fill(1909, 32281, 32290); // 'state 126' -> switch.., -> reduce (target=186, len=3)
actionsTable[32290] = 90; // 'state 126' -> * -> shift (target=45, len=0)
actionsTable[32291] = 92; // 'state 126' -> as -> shift (target=46, len=0)
actionsTable.fill(1909, 32292, 32294); // 'state 126' -> type..export -> reduce (target=186, len=3)
actionsTable[32297] = 94; // 'state 126' -> [ -> shift (target=47, len=0)
actionsTable.fill(1909, 32298, 32306); // 'state 126' -> ]..class -> reduce (target=186, len=3)
actionsTable.fill(1909, 32307, 32309); // 'state 126' -> implements..interface -> reduce (target=186, len=3)
actionsTable.fill(88, 32310, 32312); // 'state 126' -> <..> -> shift (target=44, len=0)
actionsTable.fill(1909, 32312, 32314); // 'state 126' -> |..& -> reduce (target=186, len=3)
actionsTable.fill(1909, 32315, 32317); // 'state 126' -> void..typeof -> reduce (target=186, len=3)
actionsTable.fill(1909, 32318, 32324); // 'state 126' -> new..^ -> reduce (target=186, len=3)
actionsTable[32324] = 88; // 'state 126' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 32325, 32327); // 'state 126' -> +..- -> shift (target=54, len=0)
actionsTable[32327] = 90; // 'state 126' -> ** -> shift (target=45, len=0)
actionsTable.fill(1909, 32328, 32332); // 'state 126' -> !..await -> reduce (target=186, len=3)
actionsTable[32332] = 110; // 'state 126' -> ?. -> shift (target=55, len=0)
actionsTable[32333] = 864; // 'state 126' -> . -> shift (target=432, len=0)
actionsTable.fill(1909, 32334, 32339); // 'state 126' -> private_property_identifier..accessibility_modifier -> reduce (target=186, len=3)
actionsTable[32340] = 1909; // 'state 126' -> equality_operator -> reduce (target=186, len=3)
actionsTable[32341] = 88; // 'state 126' -> relational_operator -> shift (target=44, len=0)
actionsTable[32342] = 114; // 'state 126' -> shift_operator -> shift (target=57, len=0)
actionsTable[32343] = 90; // 'state 126' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[32344] = 866; // 'state 126' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(1909, 32345, 32348); // 'state 126' -> identifier..@par-gen.EOF -> reduce (target=186, len=3)
actionsTable.fill(1909, 32512, 32520); // 'state 127' -> true..if -> reduce (target=186, len=3)
actionsTable[32520] = 86; // 'state 127' -> ( -> shift (target=43, len=0)
actionsTable.fill(1909, 32521, 32535); // 'state 127' -> )..try -> reduce (target=186, len=3)
actionsTable.fill(1909, 32537, 32546); // 'state 127' -> switch.., -> reduce (target=186, len=3)
actionsTable[32546] = 90; // 'state 127' -> * -> shift (target=45, len=0)
actionsTable[32547] = 92; // 'state 127' -> as -> shift (target=46, len=0)
actionsTable.fill(1909, 32548, 32550); // 'state 127' -> type..export -> reduce (target=186, len=3)
actionsTable[32553] = 94; // 'state 127' -> [ -> shift (target=47, len=0)
actionsTable.fill(1909, 32554, 32562); // 'state 127' -> ]..class -> reduce (target=186, len=3)
actionsTable.fill(1909, 32563, 32565); // 'state 127' -> implements..interface -> reduce (target=186, len=3)
actionsTable.fill(1909, 32566, 32570); // 'state 127' -> <..& -> reduce (target=186, len=3)
actionsTable.fill(1909, 32571, 32573); // 'state 127' -> void..typeof -> reduce (target=186, len=3)
actionsTable.fill(1909, 32574, 32581); // 'state 127' -> new..instanceof -> reduce (target=186, len=3)
actionsTable.fill(108, 32581, 32583); // 'state 127' -> +..- -> shift (target=54, len=0)
actionsTable[32583] = 90; // 'state 127' -> ** -> shift (target=45, len=0)
actionsTable.fill(1909, 32584, 32588); // 'state 127' -> !..await -> reduce (target=186, len=3)
actionsTable[32588] = 110; // 'state 127' -> ?. -> shift (target=55, len=0)
actionsTable[32589] = 864; // 'state 127' -> . -> shift (target=432, len=0)
actionsTable.fill(1909, 32590, 32595); // 'state 127' -> private_property_identifier..accessibility_modifier -> reduce (target=186, len=3)
actionsTable.fill(1909, 32596, 32598); // 'state 127' -> equality_operator..relational_operator -> reduce (target=186, len=3)
actionsTable[32598] = 114; // 'state 127' -> shift_operator -> shift (target=57, len=0)
actionsTable[32599] = 90; // 'state 127' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[32600] = 866; // 'state 127' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(1909, 32601, 32604); // 'state 127' -> identifier..@par-gen.EOF -> reduce (target=186, len=3)
actionsTable.fill(1909, 32768, 32776); // 'state 128' -> true..if -> reduce (target=186, len=3)
actionsTable[32776] = 86; // 'state 128' -> ( -> shift (target=43, len=0)
actionsTable.fill(1909, 32777, 32791); // 'state 128' -> )..try -> reduce (target=186, len=3)
actionsTable.fill(1909, 32793, 32802); // 'state 128' -> switch.., -> reduce (target=186, len=3)
actionsTable[32802] = 90; // 'state 128' -> * -> shift (target=45, len=0)
actionsTable[32803] = 92; // 'state 128' -> as -> shift (target=46, len=0)
actionsTable.fill(1909, 32804, 32806); // 'state 128' -> type..export -> reduce (target=186, len=3)
actionsTable[32809] = 94; // 'state 128' -> [ -> shift (target=47, len=0)
actionsTable.fill(1909, 32810, 32818); // 'state 128' -> ]..class -> reduce (target=186, len=3)
actionsTable.fill(1909, 32819, 32821); // 'state 128' -> implements..interface -> reduce (target=186, len=3)
actionsTable.fill(1909, 32822, 32826); // 'state 128' -> <..& -> reduce (target=186, len=3)
actionsTable.fill(1909, 32827, 32829); // 'state 128' -> void..typeof -> reduce (target=186, len=3)
actionsTable.fill(1909, 32830, 32837); // 'state 128' -> new..instanceof -> reduce (target=186, len=3)
actionsTable.fill(108, 32837, 32839); // 'state 128' -> +..- -> shift (target=54, len=0)
actionsTable[32839] = 90; // 'state 128' -> ** -> shift (target=45, len=0)
actionsTable.fill(1909, 32840, 32844); // 'state 128' -> !..await -> reduce (target=186, len=3)
actionsTable[32844] = 110; // 'state 128' -> ?. -> shift (target=55, len=0)
actionsTable[32845] = 864; // 'state 128' -> . -> shift (target=432, len=0)
actionsTable.fill(1909, 32846, 32851); // 'state 128' -> private_property_identifier..accessibility_modifier -> reduce (target=186, len=3)
actionsTable.fill(1909, 32852, 32855); // 'state 128' -> equality_operator..shift_operator -> reduce (target=186, len=3)
actionsTable[32855] = 90; // 'state 128' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[32856] = 866; // 'state 128' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(1909, 32857, 32860); // 'state 128' -> identifier..@par-gen.EOF -> reduce (target=186, len=3)
actionsTable.fill(1909, 33024, 33032); // 'state 129' -> true..if -> reduce (target=186, len=3)
actionsTable[33032] = 86; // 'state 129' -> ( -> shift (target=43, len=0)
actionsTable.fill(1909, 33033, 33047); // 'state 129' -> )..try -> reduce (target=186, len=3)
actionsTable.fill(1909, 33049, 33058); // 'state 129' -> switch.., -> reduce (target=186, len=3)
actionsTable[33058] = 90; // 'state 129' -> * -> shift (target=45, len=0)
actionsTable[33059] = 92; // 'state 129' -> as -> shift (target=46, len=0)
actionsTable.fill(1909, 33060, 33062); // 'state 129' -> type..export -> reduce (target=186, len=3)
actionsTable[33065] = 94; // 'state 129' -> [ -> shift (target=47, len=0)
actionsTable.fill(1909, 33066, 33074); // 'state 129' -> ]..class -> reduce (target=186, len=3)
actionsTable.fill(1909, 33075, 33077); // 'state 129' -> implements..interface -> reduce (target=186, len=3)
actionsTable.fill(1909, 33078, 33082); // 'state 129' -> <..& -> reduce (target=186, len=3)
actionsTable.fill(1909, 33083, 33085); // 'state 129' -> void..typeof -> reduce (target=186, len=3)
actionsTable.fill(1909, 33086, 33095); // 'state 129' -> new..- -> reduce (target=186, len=3)
actionsTable[33095] = 90; // 'state 129' -> ** -> shift (target=45, len=0)
actionsTable.fill(1909, 33096, 33100); // 'state 129' -> !..await -> reduce (target=186, len=3)
actionsTable[33100] = 110; // 'state 129' -> ?. -> shift (target=55, len=0)
actionsTable[33101] = 864; // 'state 129' -> . -> shift (target=432, len=0)
actionsTable.fill(1909, 33102, 33107); // 'state 129' -> private_property_identifier..accessibility_modifier -> reduce (target=186, len=3)
actionsTable.fill(1909, 33108, 33111); // 'state 129' -> equality_operator..shift_operator -> reduce (target=186, len=3)
actionsTable[33111] = 90; // 'state 129' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[33112] = 866; // 'state 129' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(1909, 33113, 33116); // 'state 129' -> identifier..@par-gen.EOF -> reduce (target=186, len=3)
actionsTable.fill(1909, 33280, 33288); // 'state 130' -> true..if -> reduce (target=186, len=3)
actionsTable[33288] = 86; // 'state 130' -> ( -> shift (target=43, len=0)
actionsTable.fill(1909, 33289, 33303); // 'state 130' -> )..try -> reduce (target=186, len=3)
actionsTable.fill(1909, 33305, 33315); // 'state 130' -> switch..* -> reduce (target=186, len=3)
actionsTable[33315] = 92; // 'state 130' -> as -> shift (target=46, len=0)
actionsTable.fill(1909, 33316, 33318); // 'state 130' -> type..export -> reduce (target=186, len=3)
actionsTable[33321] = 94; // 'state 130' -> [ -> shift (target=47, len=0)
actionsTable.fill(1909, 33322, 33330); // 'state 130' -> ]..class -> reduce (target=186, len=3)
actionsTable.fill(1909, 33331, 33333); // 'state 130' -> implements..interface -> reduce (target=186, len=3)
actionsTable.fill(1909, 33334, 33338); // 'state 130' -> <..& -> reduce (target=186, len=3)
actionsTable.fill(1909, 33339, 33341); // 'state 130' -> void..typeof -> reduce (target=186, len=3)
actionsTable.fill(1909, 33342, 33351); // 'state 130' -> new..- -> reduce (target=186, len=3)
actionsTable[33351] = 90; // 'state 130' -> ** -> shift (target=45, len=0)
actionsTable.fill(1909, 33352, 33356); // 'state 130' -> !..await -> reduce (target=186, len=3)
actionsTable[33356] = 110; // 'state 130' -> ?. -> shift (target=55, len=0)
actionsTable[33357] = 864; // 'state 130' -> . -> shift (target=432, len=0)
actionsTable.fill(1909, 33358, 33363); // 'state 130' -> private_property_identifier..accessibility_modifier -> reduce (target=186, len=3)
actionsTable.fill(1909, 33364, 33368); // 'state 130' -> equality_operator..multiplicative_operator -> reduce (target=186, len=3)
actionsTable[33368] = 866; // 'state 130' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(1909, 33369, 33372); // 'state 130' -> identifier..@par-gen.EOF -> reduce (target=186, len=3)
actionsTable[33542] = 1074; // 'state 131' -> } -> shift (target=537, len=0)
actionsTable[33554] = 806; // 'state 131' -> of -> shift (target=403, len=0)
actionsTable[33568] = 806; // 'state 131' -> from -> shift (target=403, len=0)
actionsTable[33572] = 806; // 'state 131' -> type -> shift (target=403, len=0)
actionsTable[33577] = 436; // 'state 131' -> [ -> shift (target=218, len=0)
actionsTable[33579] = 914; // 'state 131' -> async -> shift (target=457, len=0)
actionsTable[33582] = 438; // 'state 131' -> readonly -> shift (target=219, len=0)
actionsTable.fill(806, 33583, 33585); // 'state 131' -> get..set -> shift (target=403, len=0)
actionsTable[33598] = 440; // 'state 131' -> new -> shift (target=220, len=0)
actionsTable.fill(848, 33615, 33617); // 'state 131' -> number..string -> shift (target=424, len=0)
actionsTable[33625] = 848; // 'state 131' -> identifier -> shift (target=424, len=0)
actionsTable.fill(942, 33792, 33795); // 'state 132' -> true..null -> shift (target=471, len=0)
actionsTable[33797] = 420; // 'state 132' -> { -> shift (target=210, len=0)
actionsTable[33800] = 264; // 'state 132' -> ( -> shift (target=132, len=0)
actionsTable[33801] = 1066; // 'state 132' -> ) -> shift (target=533, len=0)
actionsTable[33832] = 422; // 'state 132' -> ... -> shift (target=211, len=0)
actionsTable[33833] = 424; // 'state 132' -> [ -> shift (target=212, len=0)
actionsTable[33846] = 28; // 'state 132' -> < -> shift (target=14, len=0)
actionsTable[33848] = 268; // 'state 132' -> | -> shift (target=134, len=0)
actionsTable[33851] = 942; // 'state 132' -> void -> shift (target=471, len=0)
actionsTable[33852] = 944; // 'state 132' -> typeof -> shift (target=472, len=0)
actionsTable.fill(942, 33871, 33873); // 'state 132' -> number..string -> shift (target=471, len=0)
actionsTable[33881] = 426; // 'state 132' -> identifier -> shift (target=213, len=0)
actionsTable.fill(942, 34048, 34051); // 'state 133' -> true..null -> shift (target=471, len=0)
actionsTable[34053] = 262; // 'state 133' -> { -> shift (target=131, len=0)
actionsTable[34056] = 264; // 'state 133' -> ( -> shift (target=132, len=0)
actionsTable[34089] = 266; // 'state 133' -> [ -> shift (target=133, len=0)
actionsTable[34090] = 1072; // 'state 133' -> ] -> shift (target=536, len=0)
actionsTable[34102] = 28; // 'state 133' -> < -> shift (target=14, len=0)
actionsTable[34104] = 268; // 'state 133' -> | -> shift (target=134, len=0)
actionsTable[34107] = 942; // 'state 133' -> void -> shift (target=471, len=0)
actionsTable[34108] = 944; // 'state 133' -> typeof -> shift (target=472, len=0)
actionsTable.fill(942, 34127, 34129); // 'state 133' -> number..string -> shift (target=471, len=0)
actionsTable[34137] = 270; // 'state 133' -> identifier -> shift (target=135, len=0)
actionsTable.fill(942, 34304, 34307); // 'state 134' -> true..null -> shift (target=471, len=0)
actionsTable[34309] = 262; // 'state 134' -> { -> shift (target=131, len=0)
actionsTable[34312] = 264; // 'state 134' -> ( -> shift (target=132, len=0)
actionsTable[34345] = 266; // 'state 134' -> [ -> shift (target=133, len=0)
actionsTable[34358] = 28; // 'state 134' -> < -> shift (target=14, len=0)
actionsTable[34360] = 268; // 'state 134' -> | -> shift (target=134, len=0)
actionsTable[34363] = 942; // 'state 134' -> void -> shift (target=471, len=0)
actionsTable[34364] = 944; // 'state 134' -> typeof -> shift (target=472, len=0)
actionsTable.fill(942, 34383, 34385); // 'state 134' -> number..string -> shift (target=471, len=0)
actionsTable[34393] = 270; // 'state 134' -> identifier -> shift (target=135, len=0)
actionsTable.fill(837, 34560, 34583); // 'state 135' -> true..try -> reduce (target=162, len=1)
actionsTable.fill(837, 34585, 34598); // 'state 135' -> switch..export -> reduce (target=162, len=1)
actionsTable[34599] = 837; // 'state 135' -> = -> reduce (target=162, len=1)
actionsTable.fill(837, 34601, 34610); // 'state 135' -> [..class -> reduce (target=162, len=1)
actionsTable.fill(837, 34611, 34613); // 'state 135' -> implements..interface -> reduce (target=162, len=1)
actionsTable[34614] = 366; // 'state 135' -> < -> shift (target=183, len=0)
actionsTable.fill(837, 34615, 34621); // 'state 135' -> >..typeof -> reduce (target=162, len=1)
actionsTable[34621] = 432; // 'state 135' -> is -> shift (target=216, len=0)
actionsTable.fill(837, 34622, 34643); // 'state 135' -> new..accessibility_modifier -> reduce (target=162, len=1)
actionsTable.fill(837, 34644, 34652); // 'state 135' -> equality_operator..@par-gen.EOF -> reduce (target=162, len=1)
actionsTable[34824] = 418; // 'state 136' -> ( -> shift (target=209, len=0)
actionsTable.fill(798, 35072, 35077); // 'state 137' -> true..super -> shift (target=399, len=0)
actionsTable[35077] = 68; // 'state 137' -> { -> shift (target=34, len=0)
actionsTable[35080] = 4; // 'state 137' -> ( -> shift (target=2, len=0)
actionsTable[35090] = 806; // 'state 137' -> of -> shift (target=403, len=0)
actionsTable[35104] = 806; // 'state 137' -> from -> shift (target=403, len=0)
actionsTable[35108] = 806; // 'state 137' -> type -> shift (target=403, len=0)
actionsTable[35113] = 20; // 'state 137' -> [ -> shift (target=10, len=0)
actionsTable[35115] = 70; // 'state 137' -> async -> shift (target=35, len=0)
actionsTable[35116] = 72; // 'state 137' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 35119, 35121); // 'state 137' -> get..set -> shift (target=403, len=0)
actionsTable[35121] = 74; // 'state 137' -> class -> shift (target=37, len=0)
actionsTable[35126] = 28; // 'state 137' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 35131, 35133); // 'state 137' -> void..typeof -> shift (target=15, len=0)
actionsTable[35134] = 32; // 'state 137' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 35141, 35143); // 'state 137' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 35144, 35147); // 'state 137' -> !..delete -> shift (target=15, len=0)
actionsTable[35147] = 34; // 'state 137' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 35151, 35154); // 'state 137' -> number..template_string -> shift (target=399, len=0)
actionsTable[35160] = 36; // 'state 137' -> update_operator -> shift (target=18, len=0)
actionsTable[35161] = 818; // 'state 137' -> identifier -> shift (target=409, len=0)
actionsTable[35162] = 798; // 'state 137' -> regex -> shift (target=399, len=0)
actionsTable[35337] = 1080; // 'state 138' -> ) -> shift (target=540, len=0)
actionsTable[35361] = 448; // 'state 138' -> , -> shift (target=224, len=0)
actionsTable[35592] = 86; // 'state 139' -> ( -> shift (target=43, len=0)
actionsTable[35603] = 88; // 'state 139' -> in -> shift (target=44, len=0)
actionsTable[35618] = 90; // 'state 139' -> * -> shift (target=45, len=0)
actionsTable[35619] = 92; // 'state 139' -> as -> shift (target=46, len=0)
actionsTable[35625] = 94; // 'state 139' -> [ -> shift (target=47, len=0)
actionsTable[35626] = 1084; // 'state 139' -> ] -> shift (target=542, len=0)
actionsTable.fill(88, 35638, 35640); // 'state 139' -> <..> -> shift (target=44, len=0)
actionsTable[35640] = 96; // 'state 139' -> | -> shift (target=48, len=0)
actionsTable[35641] = 98; // 'state 139' -> & -> shift (target=49, len=0)
actionsTable[35647] = 100; // 'state 139' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 35648, 35650); // 'state 139' -> ||..?? -> shift (target=51, len=0)
actionsTable[35650] = 104; // 'state 139' -> && -> shift (target=52, len=0)
actionsTable[35651] = 106; // 'state 139' -> ^ -> shift (target=53, len=0)
actionsTable[35652] = 88; // 'state 139' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 35653, 35655); // 'state 139' -> +..- -> shift (target=54, len=0)
actionsTable[35655] = 90; // 'state 139' -> ** -> shift (target=45, len=0)
actionsTable[35660] = 110; // 'state 139' -> ?. -> shift (target=55, len=0)
actionsTable[35661] = 864; // 'state 139' -> . -> shift (target=432, len=0)
actionsTable[35668] = 112; // 'state 139' -> equality_operator -> shift (target=56, len=0)
actionsTable[35669] = 88; // 'state 139' -> relational_operator -> shift (target=44, len=0)
actionsTable[35670] = 114; // 'state 139' -> shift_operator -> shift (target=57, len=0)
actionsTable[35671] = 90; // 'state 139' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[35672] = 866; // 'state 139' -> update_operator -> shift (target=433, len=0)
actionsTable[35845] = 116; // 'state 140' -> { -> shift (target=58, len=0)
actionsTable[35874] = 870; // 'state 140' -> * -> shift (target=435, len=0)
actionsTable[36102] = 1090; // 'state 141' -> } -> shift (target=545, len=0)
actionsTable[36129] = 450; // 'state 141' -> , -> shift (target=225, len=0)
actionsTable[36360] = 138; // 'state 142' -> ( -> shift (target=69, len=0)
actionsTable[36406] = 28; // 'state 142' -> < -> shift (target=14, len=0)
actionsTable[36613] = 146; // 'state 143' -> { -> shift (target=73, len=0)
actionsTable[36658] = 148; // 'state 143' -> extends -> shift (target=74, len=0)
actionsTable[36659] = 150; // 'state 143' -> implements -> shift (target=75, len=0)
actionsTable[36662] = 28; // 'state 143' -> < -> shift (target=14, len=0)
actionsTable.fill(1783, 36864, 36872); // 'state 144' -> true..if -> reduce (target=123, len=3)
actionsTable[36872] = 86; // 'state 144' -> ( -> shift (target=43, len=0)
actionsTable.fill(1783, 36874, 36877); // 'state 144' -> else..do -> reduce (target=123, len=3)
actionsTable[36877] = 1102; // 'state 144' -> ; -> shift (target=551, len=0)
actionsTable.fill(1783, 36878, 36883); // 'state 144' -> for..of -> reduce (target=123, len=3)
actionsTable[36883] = 88; // 'state 144' -> in -> shift (target=44, len=0)
actionsTable.fill(1783, 36884, 36887); // 'state 144' -> return..try -> reduce (target=123, len=3)
actionsTable.fill(1783, 36889, 36891); // 'state 144' -> switch..case -> reduce (target=123, len=3)
actionsTable.fill(1783, 36892, 36897); // 'state 144' -> default..from -> reduce (target=123, len=3)
actionsTable[36898] = 90; // 'state 144' -> * -> shift (target=45, len=0)
actionsTable[36899] = 92; // 'state 144' -> as -> shift (target=46, len=0)
actionsTable.fill(1783, 36900, 36902); // 'state 144' -> type..export -> reduce (target=123, len=3)
actionsTable[36905] = 94; // 'state 144' -> [ -> shift (target=47, len=0)
actionsTable.fill(1783, 36907, 36909); // 'state 144' -> async..function -> reduce (target=123, len=3)
actionsTable.fill(1783, 36911, 36914); // 'state 144' -> get..class -> reduce (target=123, len=3)
actionsTable[36916] = 1783; // 'state 144' -> interface -> reduce (target=123, len=3)
actionsTable.fill(88, 36918, 36920); // 'state 144' -> <..> -> shift (target=44, len=0)
actionsTable[36920] = 96; // 'state 144' -> | -> shift (target=48, len=0)
actionsTable[36921] = 98; // 'state 144' -> & -> shift (target=49, len=0)
actionsTable.fill(1783, 36923, 36925); // 'state 144' -> void..typeof -> reduce (target=123, len=3)
actionsTable[36926] = 1783; // 'state 144' -> new -> reduce (target=123, len=3)
actionsTable[36927] = 100; // 'state 144' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 36928, 36930); // 'state 144' -> ||..?? -> shift (target=51, len=0)
actionsTable[36930] = 104; // 'state 144' -> && -> shift (target=52, len=0)
actionsTable[36931] = 106; // 'state 144' -> ^ -> shift (target=53, len=0)
actionsTable[36932] = 88; // 'state 144' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 36933, 36935); // 'state 144' -> +..- -> shift (target=54, len=0)
actionsTable[36935] = 90; // 'state 144' -> ** -> shift (target=45, len=0)
actionsTable.fill(1783, 36936, 36940); // 'state 144' -> !..await -> reduce (target=123, len=3)
actionsTable[36940] = 110; // 'state 144' -> ?. -> shift (target=55, len=0)
actionsTable[36941] = 864; // 'state 144' -> . -> shift (target=432, len=0)
actionsTable.fill(1783, 36943, 36946); // 'state 144' -> number..template_string -> reduce (target=123, len=3)
actionsTable[36948] = 112; // 'state 144' -> equality_operator -> shift (target=56, len=0)
actionsTable[36949] = 88; // 'state 144' -> relational_operator -> shift (target=44, len=0)
actionsTable[36950] = 114; // 'state 144' -> shift_operator -> shift (target=57, len=0)
actionsTable[36951] = 90; // 'state 144' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[36952] = 866; // 'state 144' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(1783, 36953, 36956); // 'state 144' -> identifier..@par-gen.EOF -> reduce (target=123, len=3)
actionsTable[37125] = 122; // 'state 145' -> { -> shift (target=61, len=0)
actionsTable[37161] = 124; // 'state 145' -> [ -> shift (target=62, len=0)
actionsTable[37209] = 894; // 'state 145' -> identifier -> shift (target=447, len=0)
actionsTable.fill(798, 37376, 37381); // 'state 146' -> true..super -> shift (target=399, len=0)
actionsTable[37381] = 68; // 'state 146' -> { -> shift (target=34, len=0)
actionsTable[37384] = 4; // 'state 146' -> ( -> shift (target=2, len=0)
actionsTable[37394] = 806; // 'state 146' -> of -> shift (target=403, len=0)
actionsTable[37408] = 806; // 'state 146' -> from -> shift (target=403, len=0)
actionsTable[37412] = 806; // 'state 146' -> type -> shift (target=403, len=0)
actionsTable[37417] = 20; // 'state 146' -> [ -> shift (target=10, len=0)
actionsTable[37419] = 70; // 'state 146' -> async -> shift (target=35, len=0)
actionsTable[37420] = 72; // 'state 146' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 37423, 37425); // 'state 146' -> get..set -> shift (target=403, len=0)
actionsTable[37425] = 74; // 'state 146' -> class -> shift (target=37, len=0)
actionsTable[37430] = 28; // 'state 146' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 37435, 37437); // 'state 146' -> void..typeof -> shift (target=15, len=0)
actionsTable[37438] = 32; // 'state 146' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 37445, 37447); // 'state 146' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 37448, 37451); // 'state 146' -> !..delete -> shift (target=15, len=0)
actionsTable[37451] = 34; // 'state 146' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 37455, 37458); // 'state 146' -> number..template_string -> shift (target=399, len=0)
actionsTable[37464] = 36; // 'state 146' -> update_operator -> shift (target=18, len=0)
actionsTable[37465] = 818; // 'state 146' -> identifier -> shift (target=409, len=0)
actionsTable[37466] = 798; // 'state 146' -> regex -> shift (target=399, len=0)
actionsTable[37637] = 122; // 'state 147' -> { -> shift (target=61, len=0)
actionsTable[37673] = 124; // 'state 147' -> [ -> shift (target=62, len=0)
actionsTable[37721] = 894; // 'state 147' -> identifier -> shift (target=447, len=0)
actionsTable[37894] = 1112; // 'state 148' -> } -> shift (target=556, len=0)
actionsTable[37921] = 468; // 'state 148' -> , -> shift (target=234, len=0)
actionsTable[38149] = 122; // 'state 149' -> { -> shift (target=61, len=0)
actionsTable[38184] = 300; // 'state 149' -> ... -> shift (target=150, len=0)
actionsTable[38185] = 124; // 'state 149' -> [ -> shift (target=62, len=0)
actionsTable[38233] = 894; // 'state 149' -> identifier -> shift (target=447, len=0)
actionsTable[38405] = 122; // 'state 150' -> { -> shift (target=61, len=0)
actionsTable[38441] = 124; // 'state 150' -> [ -> shift (target=62, len=0)
actionsTable[38489] = 894; // 'state 150' -> identifier -> shift (target=447, len=0)
actionsTable[38689] = 476; // 'state 151' -> , -> shift (target=238, len=0)
actionsTable[38698] = 1118; // 'state 151' -> ] -> shift (target=559, len=0)
actionsTable[38920] = 138; // 'state 152' -> ( -> shift (target=69, len=0)
actionsTable[38966] = 28; // 'state 152' -> < -> shift (target=14, len=0)
actionsTable[39173] = 80; // 'state 153' -> { -> shift (target=40, len=0)
actionsTable[39195] = 164; // 'state 153' -> : -> shift (target=82, len=0)
actionsTable[39221] = 164; // 'state 153' -> ?: -> shift (target=82, len=0)
actionsTable[39432] = 138; // 'state 154' -> ( -> shift (target=69, len=0)
actionsTable.fill(798, 39680, 39685); // 'state 155' -> true..super -> shift (target=399, len=0)
actionsTable[39685] = 2; // 'state 155' -> { -> shift (target=1, len=0)
actionsTable[39688] = 4; // 'state 155' -> ( -> shift (target=2, len=0)
actionsTable[39698] = 806; // 'state 155' -> of -> shift (target=403, len=0)
actionsTable[39712] = 806; // 'state 155' -> from -> shift (target=403, len=0)
actionsTable[39716] = 806; // 'state 155' -> type -> shift (target=403, len=0)
actionsTable[39721] = 20; // 'state 155' -> [ -> shift (target=10, len=0)
actionsTable[39723] = 70; // 'state 155' -> async -> shift (target=35, len=0)
actionsTable[39724] = 72; // 'state 155' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 39727, 39729); // 'state 155' -> get..set -> shift (target=403, len=0)
actionsTable[39729] = 74; // 'state 155' -> class -> shift (target=37, len=0)
actionsTable[39734] = 28; // 'state 155' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 39739, 39741); // 'state 155' -> void..typeof -> shift (target=15, len=0)
actionsTable[39742] = 32; // 'state 155' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 39749, 39751); // 'state 155' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 39752, 39755); // 'state 155' -> !..delete -> shift (target=15, len=0)
actionsTable[39755] = 34; // 'state 155' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 39759, 39762); // 'state 155' -> number..template_string -> shift (target=399, len=0)
actionsTable[39768] = 36; // 'state 155' -> update_operator -> shift (target=18, len=0)
actionsTable[39769] = 818; // 'state 155' -> identifier -> shift (target=409, len=0)
actionsTable[39770] = 798; // 'state 155' -> regex -> shift (target=399, len=0)
actionsTable[39963] = 164; // 'state 156' -> : -> shift (target=82, len=0)
actionsTable[39989] = 164; // 'state 156' -> ?: -> shift (target=82, len=0)
actionsTable[39994] = 490; // 'state 156' -> => -> shift (target=245, len=0)
actionsTable[40197] = 80; // 'state 157' -> { -> shift (target=40, len=0)
actionsTable[40205] = 1130; // 'state 157' -> ; -> shift (target=565, len=0)
actionsTable[40219] = 164; // 'state 157' -> : -> shift (target=82, len=0)
actionsTable[40245] = 164; // 'state 157' -> ?: -> shift (target=82, len=0)
actionsTable[40456] = 138; // 'state 158' -> ( -> shift (target=69, len=0)
actionsTable[40709] = 80; // 'state 159' -> { -> shift (target=40, len=0)
actionsTable[40965] = 122; // 'state 160' -> { -> shift (target=61, len=0)
actionsTable[41001] = 124; // 'state 160' -> [ -> shift (target=62, len=0)
actionsTable[41049] = 894; // 'state 160' -> identifier -> shift (target=447, len=0)
actionsTable[41225] = 787; // 'state 161' -> ) -> reduce (target=137, len=1)
actionsTable[41243] = 164; // 'state 161' -> : -> shift (target=82, len=0)
actionsTable[41249] = 787; // 'state 161' -> , -> reduce (target=137, len=1)
actionsTable[41255] = 498; // 'state 161' -> = -> shift (target=249, len=0)
actionsTable[41269] = 164; // 'state 161' -> ?: -> shift (target=82, len=0)
actionsTable[41481] = 1134; // 'state 162' -> ) -> shift (target=567, len=0)
actionsTable[41505] = 494; // 'state 162' -> , -> shift (target=247, len=0)
actionsTable[41733] = 122; // 'state 163' -> { -> shift (target=61, len=0)
actionsTable[41769] = 124; // 'state 163' -> [ -> shift (target=62, len=0)
actionsTable[41771] = 1138; // 'state 163' -> async -> shift (target=569, len=0)
actionsTable.fill(1140, 41773, 41775); // 'state 163' -> static..readonly -> shift (target=570, len=0)
actionsTable.fill(1138, 41775, 41777); // 'state 163' -> get..set -> shift (target=569, len=0)
actionsTable[41810] = 1140; // 'state 163' -> accessibility_modifier -> shift (target=570, len=0)
actionsTable[41817] = 894; // 'state 163' -> identifier -> shift (target=447, len=0)
actionsTable[41989] = 146; // 'state 164' -> { -> shift (target=73, len=0)
actionsTable[42245] = 146; // 'state 165' -> { -> shift (target=73, len=0)
actionsTable[42290] = 148; // 'state 165' -> extends -> shift (target=74, len=0)
actionsTable[42291] = 150; // 'state 165' -> implements -> shift (target=75, len=0)
actionsTable[42501] = 146; // 'state 166' -> { -> shift (target=73, len=0)
actionsTable[42757] = 1311; // 'state 167' -> { -> reduce (target=143, len=2)
actionsTable[42760] = 86; // 'state 167' -> ( -> shift (target=43, len=0)
actionsTable[42771] = 88; // 'state 167' -> in -> shift (target=44, len=0)
actionsTable[42786] = 90; // 'state 167' -> * -> shift (target=45, len=0)
actionsTable[42787] = 92; // 'state 167' -> as -> shift (target=46, len=0)
actionsTable[42793] = 94; // 'state 167' -> [ -> shift (target=47, len=0)
actionsTable[42803] = 150; // 'state 167' -> implements -> shift (target=75, len=0)
actionsTable.fill(88, 42806, 42808); // 'state 167' -> <..> -> shift (target=44, len=0)
actionsTable[42808] = 96; // 'state 167' -> | -> shift (target=48, len=0)
actionsTable[42809] = 98; // 'state 167' -> & -> shift (target=49, len=0)
actionsTable[42815] = 100; // 'state 167' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 42816, 42818); // 'state 167' -> ||..?? -> shift (target=51, len=0)
actionsTable[42818] = 104; // 'state 167' -> && -> shift (target=52, len=0)
actionsTable[42819] = 106; // 'state 167' -> ^ -> shift (target=53, len=0)
actionsTable[42820] = 88; // 'state 167' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 42821, 42823); // 'state 167' -> +..- -> shift (target=54, len=0)
actionsTable[42823] = 90; // 'state 167' -> ** -> shift (target=45, len=0)
actionsTable[42828] = 110; // 'state 167' -> ?. -> shift (target=55, len=0)
actionsTable[42829] = 864; // 'state 167' -> . -> shift (target=432, len=0)
actionsTable[42836] = 112; // 'state 167' -> equality_operator -> shift (target=56, len=0)
actionsTable[42837] = 88; // 'state 167' -> relational_operator -> shift (target=44, len=0)
actionsTable[42838] = 114; // 'state 167' -> shift_operator -> shift (target=57, len=0)
actionsTable[42839] = 90; // 'state 167' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[42840] = 866; // 'state 167' -> update_operator -> shift (target=433, len=0)
actionsTable[43013] = 1315; // 'state 168' -> { -> reduce (target=145, len=2)
actionsTable[43041] = 504; // 'state 168' -> , -> shift (target=252, len=0)
actionsTable[43064] = 506; // 'state 168' -> | -> shift (target=253, len=0)
actionsTable[43065] = 508; // 'state 168' -> & -> shift (target=254, len=0)
actionsTable[43270] = 811; // 'state 169' -> } -> reduce (target=149, len=1)
actionsTable[43272] = 138; // 'state 169' -> ( -> shift (target=69, len=0)
actionsTable[43277] = 1160; // 'state 169' -> ; -> shift (target=580, len=0)
actionsTable[43282] = 811; // 'state 169' -> of -> reduce (target=149, len=1)
actionsTable[43291] = 164; // 'state 169' -> : -> shift (target=82, len=0)
actionsTable[43296] = 811; // 'state 169' -> from -> reduce (target=149, len=1)
actionsTable[43300] = 811; // 'state 169' -> type -> reduce (target=149, len=1)
actionsTable[43303] = 512; // 'state 169' -> = -> shift (target=256, len=0)
actionsTable[43305] = 811; // 'state 169' -> [ -> reduce (target=149, len=1)
actionsTable[43307] = 811; // 'state 169' -> async -> reduce (target=149, len=1)
actionsTable.fill(811, 43309, 43313); // 'state 169' -> static..set -> reduce (target=149, len=1)
actionsTable[43317] = 164; // 'state 169' -> ?: -> shift (target=82, len=0)
actionsTable[43318] = 28; // 'state 169' -> < -> shift (target=14, len=0)
actionsTable.fill(811, 43342, 43345); // 'state 169' -> private_property_identifier..string -> reduce (target=149, len=1)
actionsTable[43346] = 811; // 'state 169' -> accessibility_modifier -> reduce (target=149, len=1)
actionsTable[43353] = 811; // 'state 169' -> identifier -> reduce (target=149, len=1)
actionsTable[43538] = 806; // 'state 170' -> of -> shift (target=403, len=0)
actionsTable[43552] = 806; // 'state 170' -> from -> shift (target=403, len=0)
actionsTable[43556] = 806; // 'state 170' -> type -> shift (target=403, len=0)
actionsTable[43561] = 198; // 'state 170' -> [ -> shift (target=99, len=0)
actionsTable[43563] = 1158; // 'state 170' -> async -> shift (target=579, len=0)
actionsTable.fill(1140, 43565, 43567); // 'state 170' -> static..readonly -> shift (target=570, len=0)
actionsTable.fill(1158, 43567, 43569); // 'state 170' -> get..set -> shift (target=579, len=0)
actionsTable[43598] = 510; // 'state 170' -> private_property_identifier -> shift (target=255, len=0)
actionsTable.fill(848, 43599, 43601); // 'state 170' -> number..string -> shift (target=424, len=0)
actionsTable[43602] = 1140; // 'state 170' -> accessibility_modifier -> shift (target=570, len=0)
actionsTable[43609] = 848; // 'state 170' -> identifier -> shift (target=424, len=0)
actionsTable[43782] = 1154; // 'state 171' -> } -> shift (target=577, len=0)
actionsTable[43789] = 1156; // 'state 171' -> ; -> shift (target=578, len=0)
actionsTable[43794] = 806; // 'state 171' -> of -> shift (target=403, len=0)
actionsTable[43808] = 806; // 'state 171' -> from -> shift (target=403, len=0)
actionsTable[43812] = 806; // 'state 171' -> type -> shift (target=403, len=0)
actionsTable[43817] = 198; // 'state 171' -> [ -> shift (target=99, len=0)
actionsTable[43819] = 1018; // 'state 171' -> async -> shift (target=509, len=0)
actionsTable.fill(1008, 43821, 43823); // 'state 171' -> static..readonly -> shift (target=504, len=0)
actionsTable.fill(1020, 43823, 43825); // 'state 171' -> get..set -> shift (target=510, len=0)
actionsTable[43854] = 338; // 'state 171' -> private_property_identifier -> shift (target=169, len=0)
actionsTable.fill(848, 43855, 43857); // 'state 171' -> number..string -> shift (target=424, len=0)
actionsTable[43858] = 1008; // 'state 171' -> accessibility_modifier -> shift (target=504, len=0)
actionsTable[43865] = 848; // 'state 171' -> identifier -> shift (target=424, len=0)
actionsTable.fill(942, 44032, 44035); // 'state 172' -> true..null -> shift (target=471, len=0)
actionsTable[44037] = 262; // 'state 172' -> { -> shift (target=131, len=0)
actionsTable[44040] = 264; // 'state 172' -> ( -> shift (target=132, len=0)
actionsTable[44073] = 266; // 'state 172' -> [ -> shift (target=133, len=0)
actionsTable[44086] = 28; // 'state 172' -> < -> shift (target=14, len=0)
actionsTable[44088] = 268; // 'state 172' -> | -> shift (target=134, len=0)
actionsTable[44091] = 942; // 'state 172' -> void -> shift (target=471, len=0)
actionsTable[44092] = 944; // 'state 172' -> typeof -> shift (target=472, len=0)
actionsTable.fill(942, 44111, 44113); // 'state 172' -> number..string -> shift (target=471, len=0)
actionsTable[44121] = 270; // 'state 172' -> identifier -> shift (target=135, len=0)
actionsTable[44293] = 262; // 'state 173' -> { -> shift (target=131, len=0)
actionsTable[44549] = 262; // 'state 174' -> { -> shift (target=131, len=0)
actionsTable[44594] = 344; // 'state 174' -> extends -> shift (target=172, len=0)
actionsTable.fill(942, 44800, 44803); // 'state 175' -> true..null -> shift (target=471, len=0)
actionsTable[44805] = 262; // 'state 175' -> { -> shift (target=131, len=0)
actionsTable[44808] = 264; // 'state 175' -> ( -> shift (target=132, len=0)
actionsTable[44841] = 266; // 'state 175' -> [ -> shift (target=133, len=0)
actionsTable[44854] = 28; // 'state 175' -> < -> shift (target=14, len=0)
actionsTable[44856] = 268; // 'state 175' -> | -> shift (target=134, len=0)
actionsTable[44859] = 942; // 'state 175' -> void -> shift (target=471, len=0)
actionsTable[44860] = 944; // 'state 175' -> typeof -> shift (target=472, len=0)
actionsTable.fill(942, 44879, 44881); // 'state 175' -> number..string -> shift (target=471, len=0)
actionsTable[44889] = 270; // 'state 175' -> identifier -> shift (target=135, len=0)
actionsTable.fill(1905, 45056, 45064); // 'state 176' -> true..if -> reduce (target=184, len=3)
actionsTable[45064] = 86; // 'state 176' -> ( -> shift (target=43, len=0)
actionsTable.fill(1905, 45065, 45075); // 'state 176' -> )..of -> reduce (target=184, len=3)
actionsTable[45075] = 88; // 'state 176' -> in -> shift (target=44, len=0)
actionsTable.fill(1905, 45076, 45079); // 'state 176' -> return..try -> reduce (target=184, len=3)
actionsTable.fill(1905, 45081, 45090); // 'state 176' -> switch.., -> reduce (target=184, len=3)
actionsTable[45090] = 90; // 'state 176' -> * -> shift (target=45, len=0)
actionsTable[45091] = 92; // 'state 176' -> as -> shift (target=46, len=0)
actionsTable.fill(1905, 45092, 45094); // 'state 176' -> type..export -> reduce (target=184, len=3)
actionsTable[45097] = 94; // 'state 176' -> [ -> shift (target=47, len=0)
actionsTable.fill(1905, 45098, 45106); // 'state 176' -> ]..class -> reduce (target=184, len=3)
actionsTable.fill(1905, 45107, 45109); // 'state 176' -> implements..interface -> reduce (target=184, len=3)
actionsTable.fill(88, 45110, 45112); // 'state 176' -> <..> -> shift (target=44, len=0)
actionsTable[45112] = 96; // 'state 176' -> | -> shift (target=48, len=0)
actionsTable[45113] = 98; // 'state 176' -> & -> shift (target=49, len=0)
actionsTable.fill(1905, 45115, 45117); // 'state 176' -> void..typeof -> reduce (target=184, len=3)
actionsTable[45118] = 1905; // 'state 176' -> new -> reduce (target=184, len=3)
actionsTable[45119] = 100; // 'state 176' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 45120, 45122); // 'state 176' -> ||..?? -> shift (target=51, len=0)
actionsTable[45122] = 104; // 'state 176' -> && -> shift (target=52, len=0)
actionsTable[45123] = 106; // 'state 176' -> ^ -> shift (target=53, len=0)
actionsTable[45124] = 88; // 'state 176' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 45125, 45127); // 'state 176' -> +..- -> shift (target=54, len=0)
actionsTable[45127] = 90; // 'state 176' -> ** -> shift (target=45, len=0)
actionsTable.fill(1905, 45128, 45132); // 'state 176' -> !..await -> reduce (target=184, len=3)
actionsTable[45132] = 110; // 'state 176' -> ?. -> shift (target=55, len=0)
actionsTable[45133] = 864; // 'state 176' -> . -> shift (target=432, len=0)
actionsTable.fill(1905, 45134, 45139); // 'state 176' -> private_property_identifier..accessibility_modifier -> reduce (target=184, len=3)
actionsTable[45140] = 112; // 'state 176' -> equality_operator -> shift (target=56, len=0)
actionsTable[45141] = 88; // 'state 176' -> relational_operator -> shift (target=44, len=0)
actionsTable[45142] = 114; // 'state 176' -> shift_operator -> shift (target=57, len=0)
actionsTable[45143] = 90; // 'state 176' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[45144] = 866; // 'state 176' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(1905, 45145, 45148); // 'state 176' -> identifier..@par-gen.EOF -> reduce (target=184, len=3)
actionsTable.fill(1901, 45312, 45320); // 'state 177' -> true..if -> reduce (target=182, len=3)
actionsTable[45320] = 86; // 'state 177' -> ( -> shift (target=43, len=0)
actionsTable.fill(1901, 45321, 45331); // 'state 177' -> )..of -> reduce (target=182, len=3)
actionsTable[45331] = 88; // 'state 177' -> in -> shift (target=44, len=0)
actionsTable.fill(1901, 45332, 45335); // 'state 177' -> return..try -> reduce (target=182, len=3)
actionsTable.fill(1901, 45337, 45346); // 'state 177' -> switch.., -> reduce (target=182, len=3)
actionsTable[45346] = 90; // 'state 177' -> * -> shift (target=45, len=0)
actionsTable[45347] = 92; // 'state 177' -> as -> shift (target=46, len=0)
actionsTable.fill(1901, 45348, 45350); // 'state 177' -> type..export -> reduce (target=182, len=3)
actionsTable[45353] = 94; // 'state 177' -> [ -> shift (target=47, len=0)
actionsTable.fill(1901, 45354, 45362); // 'state 177' -> ]..class -> reduce (target=182, len=3)
actionsTable.fill(1901, 45363, 45365); // 'state 177' -> implements..interface -> reduce (target=182, len=3)
actionsTable.fill(88, 45366, 45368); // 'state 177' -> <..> -> shift (target=44, len=0)
actionsTable[45368] = 96; // 'state 177' -> | -> shift (target=48, len=0)
actionsTable[45369] = 98; // 'state 177' -> & -> shift (target=49, len=0)
actionsTable.fill(1901, 45371, 45373); // 'state 177' -> void..typeof -> reduce (target=182, len=3)
actionsTable[45374] = 1901; // 'state 177' -> new -> reduce (target=182, len=3)
actionsTable[45375] = 100; // 'state 177' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 45376, 45378); // 'state 177' -> ||..?? -> shift (target=51, len=0)
actionsTable[45378] = 104; // 'state 177' -> && -> shift (target=52, len=0)
actionsTable[45379] = 106; // 'state 177' -> ^ -> shift (target=53, len=0)
actionsTable[45380] = 88; // 'state 177' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 45381, 45383); // 'state 177' -> +..- -> shift (target=54, len=0)
actionsTable[45383] = 90; // 'state 177' -> ** -> shift (target=45, len=0)
actionsTable.fill(1901, 45384, 45388); // 'state 177' -> !..await -> reduce (target=182, len=3)
actionsTable[45388] = 110; // 'state 177' -> ?. -> shift (target=55, len=0)
actionsTable[45389] = 864; // 'state 177' -> . -> shift (target=432, len=0)
actionsTable.fill(1901, 45390, 45395); // 'state 177' -> private_property_identifier..accessibility_modifier -> reduce (target=182, len=3)
actionsTable[45396] = 112; // 'state 177' -> equality_operator -> shift (target=56, len=0)
actionsTable[45397] = 88; // 'state 177' -> relational_operator -> shift (target=44, len=0)
actionsTable[45398] = 114; // 'state 177' -> shift_operator -> shift (target=57, len=0)
actionsTable[45399] = 90; // 'state 177' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[45400] = 866; // 'state 177' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(1901, 45401, 45404); // 'state 177' -> identifier..@par-gen.EOF -> reduce (target=182, len=3)
actionsTable.fill(1903, 45568, 45576); // 'state 178' -> true..if -> reduce (target=183, len=3)
actionsTable[45576] = 86; // 'state 178' -> ( -> shift (target=43, len=0)
actionsTable.fill(1903, 45577, 45587); // 'state 178' -> )..of -> reduce (target=183, len=3)
actionsTable[45587] = 88; // 'state 178' -> in -> shift (target=44, len=0)
actionsTable.fill(1903, 45588, 45591); // 'state 178' -> return..try -> reduce (target=183, len=3)
actionsTable.fill(1903, 45593, 45602); // 'state 178' -> switch.., -> reduce (target=183, len=3)
actionsTable[45602] = 90; // 'state 178' -> * -> shift (target=45, len=0)
actionsTable[45603] = 92; // 'state 178' -> as -> shift (target=46, len=0)
actionsTable.fill(1903, 45604, 45606); // 'state 178' -> type..export -> reduce (target=183, len=3)
actionsTable[45609] = 94; // 'state 178' -> [ -> shift (target=47, len=0)
actionsTable.fill(1903, 45610, 45618); // 'state 178' -> ]..class -> reduce (target=183, len=3)
actionsTable.fill(1903, 45619, 45621); // 'state 178' -> implements..interface -> reduce (target=183, len=3)
actionsTable.fill(88, 45622, 45624); // 'state 178' -> <..> -> shift (target=44, len=0)
actionsTable[45624] = 96; // 'state 178' -> | -> shift (target=48, len=0)
actionsTable[45625] = 98; // 'state 178' -> & -> shift (target=49, len=0)
actionsTable.fill(1903, 45627, 45629); // 'state 178' -> void..typeof -> reduce (target=183, len=3)
actionsTable[45630] = 1903; // 'state 178' -> new -> reduce (target=183, len=3)
actionsTable[45631] = 100; // 'state 178' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 45632, 45634); // 'state 178' -> ||..?? -> shift (target=51, len=0)
actionsTable[45634] = 104; // 'state 178' -> && -> shift (target=52, len=0)
actionsTable[45635] = 106; // 'state 178' -> ^ -> shift (target=53, len=0)
actionsTable[45636] = 88; // 'state 178' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 45637, 45639); // 'state 178' -> +..- -> shift (target=54, len=0)
actionsTable[45639] = 90; // 'state 178' -> ** -> shift (target=45, len=0)
actionsTable.fill(1903, 45640, 45644); // 'state 178' -> !..await -> reduce (target=183, len=3)
actionsTable[45644] = 110; // 'state 178' -> ?. -> shift (target=55, len=0)
actionsTable[45645] = 864; // 'state 178' -> . -> shift (target=432, len=0)
actionsTable.fill(1903, 45646, 45651); // 'state 178' -> private_property_identifier..accessibility_modifier -> reduce (target=183, len=3)
actionsTable[45652] = 112; // 'state 178' -> equality_operator -> shift (target=56, len=0)
actionsTable[45653] = 88; // 'state 178' -> relational_operator -> shift (target=44, len=0)
actionsTable[45654] = 114; // 'state 178' -> shift_operator -> shift (target=57, len=0)
actionsTable[45655] = 90; // 'state 178' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[45656] = 866; // 'state 178' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(1903, 45657, 45660); // 'state 178' -> identifier..@par-gen.EOF -> reduce (target=183, len=3)
actionsTable.fill(798, 45824, 45829); // 'state 179' -> true..super -> shift (target=399, len=0)
actionsTable[45829] = 68; // 'state 179' -> { -> shift (target=34, len=0)
actionsTable[45832] = 4; // 'state 179' -> ( -> shift (target=2, len=0)
actionsTable[45833] = 1168; // 'state 179' -> ) -> shift (target=584, len=0)
actionsTable[45842] = 806; // 'state 179' -> of -> shift (target=403, len=0)
actionsTable[45856] = 806; // 'state 179' -> from -> shift (target=403, len=0)
actionsTable[45860] = 806; // 'state 179' -> type -> shift (target=403, len=0)
actionsTable[45864] = 48; // 'state 179' -> ... -> shift (target=24, len=0)
actionsTable[45865] = 20; // 'state 179' -> [ -> shift (target=10, len=0)
actionsTable[45867] = 70; // 'state 179' -> async -> shift (target=35, len=0)
actionsTable[45868] = 72; // 'state 179' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 45871, 45873); // 'state 179' -> get..set -> shift (target=403, len=0)
actionsTable[45873] = 74; // 'state 179' -> class -> shift (target=37, len=0)
actionsTable[45878] = 28; // 'state 179' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 45883, 45885); // 'state 179' -> void..typeof -> shift (target=15, len=0)
actionsTable[45886] = 32; // 'state 179' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 45893, 45895); // 'state 179' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 45896, 45899); // 'state 179' -> !..delete -> shift (target=15, len=0)
actionsTable[45899] = 34; // 'state 179' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 45903, 45906); // 'state 179' -> number..template_string -> shift (target=399, len=0)
actionsTable[45912] = 36; // 'state 179' -> update_operator -> shift (target=18, len=0)
actionsTable[45913] = 818; // 'state 179' -> identifier -> shift (target=409, len=0)
actionsTable[45914] = 798; // 'state 179' -> regex -> shift (target=399, len=0)
actionsTable.fill(869, 46088, 46090); // 'state 180' -> (..) -> reduce (target=178, len=1)
actionsTable[46099] = 869; // 'state 180' -> in -> reduce (target=178, len=1)
actionsTable[46107] = 164; // 'state 180' -> : -> shift (target=82, len=0)
actionsTable.fill(869, 46113, 46116); // 'state 180' -> ,..as -> reduce (target=178, len=1)
actionsTable[46119] = 875; // 'state 180' -> = -> reduce (target=181, len=1)
actionsTable[46121] = 869; // 'state 180' -> [ -> reduce (target=178, len=1)
actionsTable[46133] = 164; // 'state 180' -> ?: -> shift (target=82, len=0)
actionsTable.fill(869, 46134, 46138); // 'state 180' -> <..& -> reduce (target=178, len=1)
actionsTable[46138] = 162; // 'state 180' -> => -> shift (target=81, len=0)
actionsTable.fill(869, 46143, 46152); // 'state 180' -> ?..** -> reduce (target=178, len=1)
actionsTable.fill(869, 46156, 46158); // 'state 180' -> ?.... -> reduce (target=178, len=1)
actionsTable[46163] = 875; // 'state 180' -> compound_assignment_operator -> reduce (target=181, len=1)
actionsTable.fill(869, 46164, 46169); // 'state 180' -> equality_operator..update_operator -> reduce (target=178, len=1)
actionsTable.fill(869, 46344, 46346); // 'state 181' -> (..) -> reduce (target=178, len=1)
actionsTable[46355] = 869; // 'state 181' -> in -> reduce (target=178, len=1)
actionsTable[46363] = 164; // 'state 181' -> : -> shift (target=82, len=0)
actionsTable.fill(869, 46369, 46372); // 'state 181' -> ,..as -> reduce (target=178, len=1)
actionsTable[46375] = 875; // 'state 181' -> = -> reduce (target=181, len=1)
actionsTable[46377] = 869; // 'state 181' -> [ -> reduce (target=178, len=1)
actionsTable[46389] = 164; // 'state 181' -> ?: -> shift (target=82, len=0)
actionsTable.fill(869, 46390, 46394); // 'state 181' -> <..& -> reduce (target=178, len=1)
actionsTable.fill(869, 46399, 46408); // 'state 181' -> ?..** -> reduce (target=178, len=1)
actionsTable.fill(869, 46412, 46414); // 'state 181' -> ?.... -> reduce (target=178, len=1)
actionsTable[46419] = 875; // 'state 181' -> compound_assignment_operator -> reduce (target=181, len=1)
actionsTable.fill(869, 46420, 46425); // 'state 181' -> equality_operator..update_operator -> reduce (target=178, len=1)
actionsTable.fill(798, 46592, 46597); // 'state 182' -> true..super -> shift (target=399, len=0)
actionsTable[46597] = 68; // 'state 182' -> { -> shift (target=34, len=0)
actionsTable[46600] = 4; // 'state 182' -> ( -> shift (target=2, len=0)
actionsTable[46601] = 1174; // 'state 182' -> ) -> shift (target=587, len=0)
actionsTable[46610] = 806; // 'state 182' -> of -> shift (target=403, len=0)
actionsTable[46624] = 806; // 'state 182' -> from -> shift (target=403, len=0)
actionsTable[46628] = 806; // 'state 182' -> type -> shift (target=403, len=0)
actionsTable[46632] = 170; // 'state 182' -> ... -> shift (target=85, len=0)
actionsTable[46633] = 20; // 'state 182' -> [ -> shift (target=10, len=0)
actionsTable[46635] = 70; // 'state 182' -> async -> shift (target=35, len=0)
actionsTable[46636] = 72; // 'state 182' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 46639, 46641); // 'state 182' -> get..set -> shift (target=403, len=0)
actionsTable[46641] = 74; // 'state 182' -> class -> shift (target=37, len=0)
actionsTable[46646] = 28; // 'state 182' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 46651, 46653); // 'state 182' -> void..typeof -> shift (target=15, len=0)
actionsTable[46654] = 32; // 'state 182' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 46661, 46663); // 'state 182' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 46664, 46667); // 'state 182' -> !..delete -> shift (target=15, len=0)
actionsTable[46667] = 34; // 'state 182' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 46671, 46674); // 'state 182' -> number..template_string -> shift (target=399, len=0)
actionsTable[46680] = 36; // 'state 182' -> update_operator -> shift (target=18, len=0)
actionsTable[46681] = 172; // 'state 182' -> identifier -> shift (target=86, len=0)
actionsTable[46682] = 798; // 'state 182' -> regex -> shift (target=399, len=0)
actionsTable.fill(942, 46848, 46851); // 'state 183' -> true..null -> shift (target=471, len=0)
actionsTable[46853] = 262; // 'state 183' -> { -> shift (target=131, len=0)
actionsTable[46856] = 264; // 'state 183' -> ( -> shift (target=132, len=0)
actionsTable[46889] = 266; // 'state 183' -> [ -> shift (target=133, len=0)
actionsTable[46902] = 28; // 'state 183' -> < -> shift (target=14, len=0)
actionsTable[46904] = 268; // 'state 183' -> | -> shift (target=134, len=0)
actionsTable[46907] = 942; // 'state 183' -> void -> shift (target=471, len=0)
actionsTable[46908] = 944; // 'state 183' -> typeof -> shift (target=472, len=0)
actionsTable.fill(942, 46927, 46929); // 'state 183' -> number..string -> shift (target=471, len=0)
actionsTable[46937] = 270; // 'state 183' -> identifier -> shift (target=135, len=0)
actionsTable[47112] = 86; // 'state 184' -> ( -> shift (target=43, len=0)
actionsTable[47393] = 372; // 'state 185' -> , -> shift (target=186, len=0)
actionsTable[47402] = 1180; // 'state 185' -> ] -> shift (target=590, len=0)
actionsTable.fill(798, 47616, 47621); // 'state 186' -> true..super -> shift (target=399, len=0)
actionsTable[47621] = 68; // 'state 186' -> { -> shift (target=34, len=0)
actionsTable[47624] = 4; // 'state 186' -> ( -> shift (target=2, len=0)
actionsTable[47634] = 806; // 'state 186' -> of -> shift (target=403, len=0)
actionsTable[47648] = 806; // 'state 186' -> from -> shift (target=403, len=0)
actionsTable[47649] = 909; // 'state 186' -> , -> reduce (target=198, len=1)
actionsTable[47652] = 806; // 'state 186' -> type -> shift (target=403, len=0)
actionsTable[47656] = 48; // 'state 186' -> ... -> shift (target=24, len=0)
actionsTable[47657] = 20; // 'state 186' -> [ -> shift (target=10, len=0)
actionsTable[47658] = 909; // 'state 186' -> ] -> reduce (target=198, len=1)
actionsTable[47659] = 70; // 'state 186' -> async -> shift (target=35, len=0)
actionsTable[47660] = 72; // 'state 186' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 47663, 47665); // 'state 186' -> get..set -> shift (target=403, len=0)
actionsTable[47665] = 74; // 'state 186' -> class -> shift (target=37, len=0)
actionsTable[47670] = 28; // 'state 186' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 47675, 47677); // 'state 186' -> void..typeof -> shift (target=15, len=0)
actionsTable[47678] = 32; // 'state 186' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 47685, 47687); // 'state 186' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 47688, 47691); // 'state 186' -> !..delete -> shift (target=15, len=0)
actionsTable[47691] = 34; // 'state 186' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 47695, 47698); // 'state 186' -> number..template_string -> shift (target=399, len=0)
actionsTable[47704] = 36; // 'state 186' -> update_operator -> shift (target=18, len=0)
actionsTable[47705] = 818; // 'state 186' -> identifier -> shift (target=409, len=0)
actionsTable[47706] = 798; // 'state 186' -> regex -> shift (target=399, len=0)
actionsTable[47927] = 1186; // 'state 187' -> > -> shift (target=593, len=0)
actionsTable[47961] = 908; // 'state 187' -> identifier -> shift (target=454, len=0)
actionsTable.fill(942, 48128, 48131); // 'state 188' -> true..null -> shift (target=471, len=0)
actionsTable[48133] = 262; // 'state 188' -> { -> shift (target=131, len=0)
actionsTable[48136] = 264; // 'state 188' -> ( -> shift (target=132, len=0)
actionsTable[48169] = 266; // 'state 188' -> [ -> shift (target=133, len=0)
actionsTable[48182] = 28; // 'state 188' -> < -> shift (target=14, len=0)
actionsTable[48184] = 268; // 'state 188' -> | -> shift (target=134, len=0)
actionsTable[48187] = 942; // 'state 188' -> void -> shift (target=471, len=0)
actionsTable[48188] = 944; // 'state 188' -> typeof -> shift (target=472, len=0)
actionsTable.fill(942, 48207, 48209); // 'state 188' -> number..string -> shift (target=471, len=0)
actionsTable[48217] = 270; // 'state 188' -> identifier -> shift (target=135, len=0)
actionsTable.fill(942, 48384, 48387); // 'state 189' -> true..null -> shift (target=471, len=0)
actionsTable[48389] = 262; // 'state 189' -> { -> shift (target=131, len=0)
actionsTable[48392] = 264; // 'state 189' -> ( -> shift (target=132, len=0)
actionsTable[48425] = 266; // 'state 189' -> [ -> shift (target=133, len=0)
actionsTable[48438] = 28; // 'state 189' -> < -> shift (target=14, len=0)
actionsTable[48440] = 268; // 'state 189' -> | -> shift (target=134, len=0)
actionsTable[48443] = 942; // 'state 189' -> void -> shift (target=471, len=0)
actionsTable[48444] = 944; // 'state 189' -> typeof -> shift (target=472, len=0)
actionsTable.fill(942, 48463, 48465); // 'state 189' -> number..string -> shift (target=471, len=0)
actionsTable[48473] = 270; // 'state 189' -> identifier -> shift (target=135, len=0)
actionsTable[48645] = 80; // 'state 190' -> { -> shift (target=40, len=0)
actionsTable[48667] = 164; // 'state 190' -> : -> shift (target=82, len=0)
actionsTable[48693] = 164; // 'state 190' -> ?: -> shift (target=82, len=0)
actionsTable[48904] = 138; // 'state 191' -> ( -> shift (target=69, len=0)
actionsTable[49160] = 86; // 'state 192' -> ( -> shift (target=43, len=0)
actionsTable[49171] = 88; // 'state 192' -> in -> shift (target=44, len=0)
actionsTable[49186] = 90; // 'state 192' -> * -> shift (target=45, len=0)
actionsTable[49187] = 92; // 'state 192' -> as -> shift (target=46, len=0)
actionsTable[49193] = 94; // 'state 192' -> [ -> shift (target=47, len=0)
actionsTable[49194] = 1050; // 'state 192' -> ] -> shift (target=525, len=0)
actionsTable.fill(88, 49206, 49208); // 'state 192' -> <..> -> shift (target=44, len=0)
actionsTable[49208] = 96; // 'state 192' -> | -> shift (target=48, len=0)
actionsTable[49209] = 98; // 'state 192' -> & -> shift (target=49, len=0)
actionsTable[49215] = 100; // 'state 192' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 49216, 49218); // 'state 192' -> ||..?? -> shift (target=51, len=0)
actionsTable[49218] = 104; // 'state 192' -> && -> shift (target=52, len=0)
actionsTable[49219] = 106; // 'state 192' -> ^ -> shift (target=53, len=0)
actionsTable[49220] = 88; // 'state 192' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 49221, 49223); // 'state 192' -> +..- -> shift (target=54, len=0)
actionsTable[49223] = 90; // 'state 192' -> ** -> shift (target=45, len=0)
actionsTable[49228] = 110; // 'state 192' -> ?. -> shift (target=55, len=0)
actionsTable[49229] = 864; // 'state 192' -> . -> shift (target=432, len=0)
actionsTable[49236] = 112; // 'state 192' -> equality_operator -> shift (target=56, len=0)
actionsTable[49237] = 88; // 'state 192' -> relational_operator -> shift (target=44, len=0)
actionsTable[49238] = 114; // 'state 192' -> shift_operator -> shift (target=57, len=0)
actionsTable[49239] = 90; // 'state 192' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[49240] = 866; // 'state 192' -> update_operator -> shift (target=433, len=0)
actionsTable[49414] = 1196; // 'state 193' -> } -> shift (target=598, len=0)
actionsTable[49426] = 806; // 'state 193' -> of -> shift (target=403, len=0)
actionsTable[49440] = 806; // 'state 193' -> from -> shift (target=403, len=0)
actionsTable[49444] = 806; // 'state 193' -> type -> shift (target=403, len=0)
actionsTable[49448] = 48; // 'state 193' -> ... -> shift (target=24, len=0)
actionsTable[49449] = 198; // 'state 193' -> [ -> shift (target=99, len=0)
actionsTable[49451] = 226; // 'state 193' -> async -> shift (target=113, len=0)
actionsTable.fill(54, 49455, 49457); // 'state 193' -> get..set -> shift (target=27, len=0)
actionsTable.fill(848, 49487, 49489); // 'state 193' -> number..string -> shift (target=424, len=0)
actionsTable[49497] = 930; // 'state 193' -> identifier -> shift (target=465, len=0)
actionsTable[49670] = 1945; // 'state 194' -> } -> reduce (target=204, len=3)
actionsTable[49672] = 86; // 'state 194' -> ( -> shift (target=43, len=0)
actionsTable[49683] = 88; // 'state 194' -> in -> shift (target=44, len=0)
actionsTable[49697] = 1945; // 'state 194' -> , -> reduce (target=204, len=3)
actionsTable[49698] = 90; // 'state 194' -> * -> shift (target=45, len=0)
actionsTable[49699] = 92; // 'state 194' -> as -> shift (target=46, len=0)
actionsTable[49705] = 94; // 'state 194' -> [ -> shift (target=47, len=0)
actionsTable.fill(88, 49718, 49720); // 'state 194' -> <..> -> shift (target=44, len=0)
actionsTable[49720] = 96; // 'state 194' -> | -> shift (target=48, len=0)
actionsTable[49721] = 98; // 'state 194' -> & -> shift (target=49, len=0)
actionsTable[49727] = 100; // 'state 194' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 49728, 49730); // 'state 194' -> ||..?? -> shift (target=51, len=0)
actionsTable[49730] = 104; // 'state 194' -> && -> shift (target=52, len=0)
actionsTable[49731] = 106; // 'state 194' -> ^ -> shift (target=53, len=0)
actionsTable[49732] = 88; // 'state 194' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 49733, 49735); // 'state 194' -> +..- -> shift (target=54, len=0)
actionsTable[49735] = 90; // 'state 194' -> ** -> shift (target=45, len=0)
actionsTable[49740] = 110; // 'state 194' -> ?. -> shift (target=55, len=0)
actionsTable[49741] = 864; // 'state 194' -> . -> shift (target=432, len=0)
actionsTable[49748] = 112; // 'state 194' -> equality_operator -> shift (target=56, len=0)
actionsTable[49749] = 88; // 'state 194' -> relational_operator -> shift (target=44, len=0)
actionsTable[49750] = 114; // 'state 194' -> shift_operator -> shift (target=57, len=0)
actionsTable[49751] = 90; // 'state 194' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[49752] = 866; // 'state 194' -> update_operator -> shift (target=433, len=0)
actionsTable[49925] = 80; // 'state 195' -> { -> shift (target=40, len=0)
actionsTable.fill(798, 50176, 50181); // 'state 196' -> true..super -> shift (target=399, len=0)
actionsTable[50181] = 2; // 'state 196' -> { -> shift (target=1, len=0)
actionsTable[50183] = 800; // 'state 196' -> if -> shift (target=400, len=0)
actionsTable[50184] = 4; // 'state 196' -> ( -> shift (target=2, len=0)
actionsTable[50187] = 802; // 'state 196' -> while -> shift (target=401, len=0)
actionsTable[50188] = 6; // 'state 196' -> do -> shift (target=3, len=0)
actionsTable[50190] = 804; // 'state 196' -> for -> shift (target=402, len=0)
actionsTable.fill(8, 50191, 50194); // 'state 196' -> const..var -> shift (target=4, len=0)
actionsTable[50194] = 806; // 'state 196' -> of -> shift (target=403, len=0)
actionsTable[50196] = 10; // 'state 196' -> return -> shift (target=5, len=0)
actionsTable[50197] = 12; // 'state 196' -> throw -> shift (target=6, len=0)
actionsTable[50198] = 14; // 'state 196' -> try -> shift (target=7, len=0)
actionsTable[50201] = 808; // 'state 196' -> switch -> shift (target=404, len=0)
actionsTable[50205] = 810; // 'state 196' -> break -> shift (target=405, len=0)
actionsTable[50206] = 812; // 'state 196' -> continue -> shift (target=406, len=0)
actionsTable[50207] = 16; // 'state 196' -> import -> shift (target=8, len=0)
actionsTable[50208] = 806; // 'state 196' -> from -> shift (target=403, len=0)
actionsTable[50212] = 814; // 'state 196' -> type -> shift (target=407, len=0)
actionsTable[50213] = 18; // 'state 196' -> export -> shift (target=9, len=0)
actionsTable[50217] = 20; // 'state 196' -> [ -> shift (target=10, len=0)
actionsTable[50219] = 22; // 'state 196' -> async -> shift (target=11, len=0)
actionsTable[50220] = 24; // 'state 196' -> function -> shift (target=12, len=0)
actionsTable.fill(806, 50223, 50225); // 'state 196' -> get..set -> shift (target=403, len=0)
actionsTable[50225] = 26; // 'state 196' -> class -> shift (target=13, len=0)
actionsTable[50228] = 816; // 'state 196' -> interface -> shift (target=408, len=0)
actionsTable[50230] = 28; // 'state 196' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 50235, 50237); // 'state 196' -> void..typeof -> shift (target=15, len=0)
actionsTable[50238] = 32; // 'state 196' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 50245, 50247); // 'state 196' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 50248, 50251); // 'state 196' -> !..delete -> shift (target=15, len=0)
actionsTable[50251] = 34; // 'state 196' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 50255, 50258); // 'state 196' -> number..template_string -> shift (target=399, len=0)
actionsTable[50264] = 36; // 'state 196' -> update_operator -> shift (target=18, len=0)
actionsTable[50265] = 818; // 'state 196' -> identifier -> shift (target=409, len=0)
actionsTable[50266] = 798; // 'state 196' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 50432, 50437); // 'state 197' -> true..super -> shift (target=399, len=0)
actionsTable[50437] = 2; // 'state 197' -> { -> shift (target=1, len=0)
actionsTable[50439] = 800; // 'state 197' -> if -> shift (target=400, len=0)
actionsTable[50440] = 4; // 'state 197' -> ( -> shift (target=2, len=0)
actionsTable[50443] = 802; // 'state 197' -> while -> shift (target=401, len=0)
actionsTable[50444] = 6; // 'state 197' -> do -> shift (target=3, len=0)
actionsTable[50446] = 804; // 'state 197' -> for -> shift (target=402, len=0)
actionsTable.fill(8, 50447, 50450); // 'state 197' -> const..var -> shift (target=4, len=0)
actionsTable[50450] = 806; // 'state 197' -> of -> shift (target=403, len=0)
actionsTable[50452] = 10; // 'state 197' -> return -> shift (target=5, len=0)
actionsTable[50453] = 12; // 'state 197' -> throw -> shift (target=6, len=0)
actionsTable[50454] = 14; // 'state 197' -> try -> shift (target=7, len=0)
actionsTable[50457] = 808; // 'state 197' -> switch -> shift (target=404, len=0)
actionsTable[50461] = 810; // 'state 197' -> break -> shift (target=405, len=0)
actionsTable[50462] = 812; // 'state 197' -> continue -> shift (target=406, len=0)
actionsTable[50463] = 16; // 'state 197' -> import -> shift (target=8, len=0)
actionsTable[50464] = 806; // 'state 197' -> from -> shift (target=403, len=0)
actionsTable[50468] = 814; // 'state 197' -> type -> shift (target=407, len=0)
actionsTable[50469] = 18; // 'state 197' -> export -> shift (target=9, len=0)
actionsTable[50473] = 20; // 'state 197' -> [ -> shift (target=10, len=0)
actionsTable[50475] = 22; // 'state 197' -> async -> shift (target=11, len=0)
actionsTable[50476] = 24; // 'state 197' -> function -> shift (target=12, len=0)
actionsTable.fill(806, 50479, 50481); // 'state 197' -> get..set -> shift (target=403, len=0)
actionsTable[50481] = 26; // 'state 197' -> class -> shift (target=13, len=0)
actionsTable[50484] = 816; // 'state 197' -> interface -> shift (target=408, len=0)
actionsTable[50486] = 28; // 'state 197' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 50491, 50493); // 'state 197' -> void..typeof -> shift (target=15, len=0)
actionsTable[50494] = 32; // 'state 197' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 50501, 50503); // 'state 197' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 50504, 50507); // 'state 197' -> !..delete -> shift (target=15, len=0)
actionsTable[50507] = 34; // 'state 197' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 50511, 50514); // 'state 197' -> number..template_string -> shift (target=399, len=0)
actionsTable[50520] = 36; // 'state 197' -> update_operator -> shift (target=18, len=0)
actionsTable[50521] = 818; // 'state 197' -> identifier -> shift (target=409, len=0)
actionsTable[50522] = 798; // 'state 197' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 50688, 50693); // 'state 198' -> true..super -> shift (target=399, len=0)
actionsTable[50693] = 68; // 'state 198' -> { -> shift (target=34, len=0)
actionsTable[50696] = 4; // 'state 198' -> ( -> shift (target=2, len=0)
actionsTable[50706] = 806; // 'state 198' -> of -> shift (target=403, len=0)
actionsTable[50720] = 806; // 'state 198' -> from -> shift (target=403, len=0)
actionsTable[50724] = 806; // 'state 198' -> type -> shift (target=403, len=0)
actionsTable[50729] = 20; // 'state 198' -> [ -> shift (target=10, len=0)
actionsTable[50731] = 70; // 'state 198' -> async -> shift (target=35, len=0)
actionsTable[50732] = 72; // 'state 198' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 50735, 50737); // 'state 198' -> get..set -> shift (target=403, len=0)
actionsTable[50737] = 74; // 'state 198' -> class -> shift (target=37, len=0)
actionsTable[50742] = 28; // 'state 198' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 50747, 50749); // 'state 198' -> void..typeof -> shift (target=15, len=0)
actionsTable[50750] = 32; // 'state 198' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 50757, 50759); // 'state 198' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 50760, 50763); // 'state 198' -> !..delete -> shift (target=15, len=0)
actionsTable[50763] = 34; // 'state 198' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 50767, 50770); // 'state 198' -> number..template_string -> shift (target=399, len=0)
actionsTable[50776] = 36; // 'state 198' -> update_operator -> shift (target=18, len=0)
actionsTable[50777] = 818; // 'state 198' -> identifier -> shift (target=409, len=0)
actionsTable[50778] = 798; // 'state 198' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 50944, 50949); // 'state 199' -> true..super -> shift (target=399, len=0)
actionsTable[50949] = 68; // 'state 199' -> { -> shift (target=34, len=0)
actionsTable[50952] = 4; // 'state 199' -> ( -> shift (target=2, len=0)
actionsTable[50953] = 544; // 'state 199' -> ) -> shift (target=272, len=0)
actionsTable[50962] = 806; // 'state 199' -> of -> shift (target=403, len=0)
actionsTable[50976] = 806; // 'state 199' -> from -> shift (target=403, len=0)
actionsTable[50980] = 806; // 'state 199' -> type -> shift (target=403, len=0)
actionsTable[50985] = 20; // 'state 199' -> [ -> shift (target=10, len=0)
actionsTable[50987] = 70; // 'state 199' -> async -> shift (target=35, len=0)
actionsTable[50988] = 72; // 'state 199' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 50991, 50993); // 'state 199' -> get..set -> shift (target=403, len=0)
actionsTable[50993] = 74; // 'state 199' -> class -> shift (target=37, len=0)
actionsTable[50998] = 28; // 'state 199' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 51003, 51005); // 'state 199' -> void..typeof -> shift (target=15, len=0)
actionsTable[51006] = 32; // 'state 199' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 51013, 51015); // 'state 199' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 51016, 51019); // 'state 199' -> !..delete -> shift (target=15, len=0)
actionsTable[51019] = 34; // 'state 199' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 51023, 51026); // 'state 199' -> number..template_string -> shift (target=399, len=0)
actionsTable[51032] = 36; // 'state 199' -> update_operator -> shift (target=18, len=0)
actionsTable[51033] = 818; // 'state 199' -> identifier -> shift (target=409, len=0)
actionsTable[51034] = 798; // 'state 199' -> regex -> shift (target=399, len=0)
actionsTable[51208] = 86; // 'state 200' -> ( -> shift (target=43, len=0)
actionsTable[51213] = 542; // 'state 200' -> ; -> shift (target=271, len=0)
actionsTable[51219] = 88; // 'state 200' -> in -> shift (target=44, len=0)
actionsTable[51234] = 90; // 'state 200' -> * -> shift (target=45, len=0)
actionsTable[51235] = 92; // 'state 200' -> as -> shift (target=46, len=0)
actionsTable[51241] = 94; // 'state 200' -> [ -> shift (target=47, len=0)
actionsTable.fill(88, 51254, 51256); // 'state 200' -> <..> -> shift (target=44, len=0)
actionsTable[51256] = 96; // 'state 200' -> | -> shift (target=48, len=0)
actionsTable[51257] = 98; // 'state 200' -> & -> shift (target=49, len=0)
actionsTable[51263] = 100; // 'state 200' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 51264, 51266); // 'state 200' -> ||..?? -> shift (target=51, len=0)
actionsTable[51266] = 104; // 'state 200' -> && -> shift (target=52, len=0)
actionsTable[51267] = 106; // 'state 200' -> ^ -> shift (target=53, len=0)
actionsTable[51268] = 88; // 'state 200' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 51269, 51271); // 'state 200' -> +..- -> shift (target=54, len=0)
actionsTable[51271] = 90; // 'state 200' -> ** -> shift (target=45, len=0)
actionsTable[51276] = 110; // 'state 200' -> ?. -> shift (target=55, len=0)
actionsTable[51277] = 864; // 'state 200' -> . -> shift (target=432, len=0)
actionsTable[51284] = 112; // 'state 200' -> equality_operator -> shift (target=56, len=0)
actionsTable[51285] = 88; // 'state 200' -> relational_operator -> shift (target=44, len=0)
actionsTable[51286] = 114; // 'state 200' -> shift_operator -> shift (target=57, len=0)
actionsTable[51287] = 90; // 'state 200' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[51288] = 866; // 'state 200' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(765, 51456, 51462); // 'state 201' -> true..{ -> reduce (target=126, len=1)
actionsTable[51464] = 765; // 'state 201' -> ( -> reduce (target=126, len=1)
actionsTable[51469] = 765; // 'state 201' -> ; -> reduce (target=126, len=1)
actionsTable.fill(548, 51474, 51476); // 'state 201' -> of..in -> shift (target=274, len=0)
actionsTable[51483] = 164; // 'state 201' -> : -> shift (target=82, len=0)
actionsTable.fill(765, 51488, 51490); // 'state 201' -> from.., -> reduce (target=126, len=1)
actionsTable[51492] = 765; // 'state 201' -> type -> reduce (target=126, len=1)
actionsTable[51495] = 292; // 'state 201' -> = -> shift (target=146, len=0)
actionsTable[51497] = 765; // 'state 201' -> [ -> reduce (target=126, len=1)
actionsTable.fill(765, 51499, 51501); // 'state 201' -> async..function -> reduce (target=126, len=1)
actionsTable.fill(765, 51503, 51506); // 'state 201' -> get..class -> reduce (target=126, len=1)
actionsTable[51509] = 164; // 'state 201' -> ?: -> shift (target=82, len=0)
actionsTable[51510] = 765; // 'state 201' -> < -> reduce (target=126, len=1)
actionsTable.fill(765, 51515, 51517); // 'state 201' -> void..typeof -> reduce (target=126, len=1)
actionsTable[51518] = 765; // 'state 201' -> new -> reduce (target=126, len=1)
actionsTable.fill(765, 51525, 51527); // 'state 201' -> +..- -> reduce (target=126, len=1)
actionsTable.fill(765, 51528, 51532); // 'state 201' -> !..await -> reduce (target=126, len=1)
actionsTable.fill(765, 51535, 51538); // 'state 201' -> number..template_string -> reduce (target=126, len=1)
actionsTable.fill(765, 51544, 51547); // 'state 201' -> update_operator..regex -> reduce (target=126, len=1)
actionsTable.fill(798, 51712, 51717); // 'state 202' -> true..super -> shift (target=399, len=0)
actionsTable[51717] = 68; // 'state 202' -> { -> shift (target=34, len=0)
actionsTable[51720] = 4; // 'state 202' -> ( -> shift (target=2, len=0)
actionsTable[51725] = 542; // 'state 202' -> ; -> shift (target=271, len=0)
actionsTable[51730] = 806; // 'state 202' -> of -> shift (target=403, len=0)
actionsTable[51744] = 806; // 'state 202' -> from -> shift (target=403, len=0)
actionsTable[51748] = 806; // 'state 202' -> type -> shift (target=403, len=0)
actionsTable[51753] = 20; // 'state 202' -> [ -> shift (target=10, len=0)
actionsTable[51755] = 70; // 'state 202' -> async -> shift (target=35, len=0)
actionsTable[51756] = 72; // 'state 202' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 51759, 51761); // 'state 202' -> get..set -> shift (target=403, len=0)
actionsTable[51761] = 74; // 'state 202' -> class -> shift (target=37, len=0)
actionsTable[51766] = 28; // 'state 202' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 51771, 51773); // 'state 202' -> void..typeof -> shift (target=15, len=0)
actionsTable[51774] = 32; // 'state 202' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 51781, 51783); // 'state 202' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 51784, 51787); // 'state 202' -> !..delete -> shift (target=15, len=0)
actionsTable[51787] = 34; // 'state 202' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 51791, 51794); // 'state 202' -> number..template_string -> shift (target=399, len=0)
actionsTable[51800] = 36; // 'state 202' -> update_operator -> shift (target=18, len=0)
actionsTable[51801] = 818; // 'state 202' -> identifier -> shift (target=409, len=0)
actionsTable[51802] = 798; // 'state 202' -> regex -> shift (target=399, len=0)
actionsTable[51976] = 138; // 'state 203' -> ( -> shift (target=69, len=0)
actionsTable[52022] = 28; // 'state 203' -> < -> shift (target=14, len=0)
actionsTable[52229] = 146; // 'state 204' -> { -> shift (target=73, len=0)
actionsTable[52274] = 148; // 'state 204' -> extends -> shift (target=74, len=0)
actionsTable[52275] = 150; // 'state 204' -> implements -> shift (target=75, len=0)
actionsTable[52485] = 122; // 'state 205' -> { -> shift (target=61, len=0)
actionsTable[52521] = 124; // 'state 205' -> [ -> shift (target=62, len=0)
actionsTable[52569] = 894; // 'state 205' -> identifier -> shift (target=447, len=0)
actionsTable[52741] = 558; // 'state 206' -> { -> shift (target=279, len=0)
actionsTable.fill(798, 52992, 52997); // 'state 207' -> true..super -> shift (target=399, len=0)
actionsTable[52997] = 68; // 'state 207' -> { -> shift (target=34, len=0)
actionsTable[53000] = 4; // 'state 207' -> ( -> shift (target=2, len=0)
actionsTable[53010] = 806; // 'state 207' -> of -> shift (target=403, len=0)
actionsTable[53024] = 806; // 'state 207' -> from -> shift (target=403, len=0)
actionsTable[53028] = 806; // 'state 207' -> type -> shift (target=403, len=0)
actionsTable[53033] = 20; // 'state 207' -> [ -> shift (target=10, len=0)
actionsTable[53035] = 70; // 'state 207' -> async -> shift (target=35, len=0)
actionsTable[53036] = 72; // 'state 207' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 53039, 53041); // 'state 207' -> get..set -> shift (target=403, len=0)
actionsTable[53041] = 74; // 'state 207' -> class -> shift (target=37, len=0)
actionsTable[53046] = 28; // 'state 207' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 53051, 53053); // 'state 207' -> void..typeof -> shift (target=15, len=0)
actionsTable[53054] = 32; // 'state 207' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 53061, 53063); // 'state 207' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 53064, 53067); // 'state 207' -> !..delete -> shift (target=15, len=0)
actionsTable[53067] = 34; // 'state 207' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 53071, 53074); // 'state 207' -> number..template_string -> shift (target=399, len=0)
actionsTable[53080] = 36; // 'state 207' -> update_operator -> shift (target=18, len=0)
actionsTable[53081] = 818; // 'state 207' -> identifier -> shift (target=409, len=0)
actionsTable[53082] = 798; // 'state 207' -> regex -> shift (target=399, len=0)
actionsTable.fill(942, 53248, 53251); // 'state 208' -> true..null -> shift (target=471, len=0)
actionsTable[53253] = 262; // 'state 208' -> { -> shift (target=131, len=0)
actionsTable[53256] = 264; // 'state 208' -> ( -> shift (target=132, len=0)
actionsTable[53289] = 266; // 'state 208' -> [ -> shift (target=133, len=0)
actionsTable[53290] = 1210; // 'state 208' -> ] -> shift (target=605, len=0)
actionsTable[53302] = 28; // 'state 208' -> < -> shift (target=14, len=0)
actionsTable[53304] = 268; // 'state 208' -> | -> shift (target=134, len=0)
actionsTable[53307] = 942; // 'state 208' -> void -> shift (target=471, len=0)
actionsTable[53308] = 944; // 'state 208' -> typeof -> shift (target=472, len=0)
actionsTable.fill(942, 53327, 53329); // 'state 208' -> number..string -> shift (target=471, len=0)
actionsTable[53337] = 270; // 'state 208' -> identifier -> shift (target=135, len=0)
actionsTable[53509] = 562; // 'state 209' -> { -> shift (target=281, len=0)
actionsTable[53513] = 1214; // 'state 209' -> ) -> shift (target=607, len=0)
actionsTable[53544] = 564; // 'state 209' -> ... -> shift (target=282, len=0)
actionsTable[53545] = 566; // 'state 209' -> [ -> shift (target=283, len=0)
actionsTable[53547] = 1006; // 'state 209' -> async -> shift (target=503, len=0)
actionsTable.fill(1008, 53549, 53551); // 'state 209' -> static..readonly -> shift (target=504, len=0)
actionsTable.fill(1006, 53551, 53553); // 'state 209' -> get..set -> shift (target=503, len=0)
actionsTable[53586] = 1008; // 'state 209' -> accessibility_modifier -> shift (target=504, len=0)
actionsTable[53593] = 568; // 'state 209' -> identifier -> shift (target=284, len=0)
actionsTable[53766] = 1216; // 'state 210' -> } -> shift (target=608, len=0)
actionsTable[53778] = 806; // 'state 210' -> of -> shift (target=403, len=0)
actionsTable[53792] = 806; // 'state 210' -> from -> shift (target=403, len=0)
actionsTable[53796] = 806; // 'state 210' -> type -> shift (target=403, len=0)
actionsTable[53800] = 48; // 'state 210' -> ... -> shift (target=24, len=0)
actionsTable[53801] = 436; // 'state 210' -> [ -> shift (target=218, len=0)
actionsTable[53803] = 226; // 'state 210' -> async -> shift (target=113, len=0)
actionsTable[53806] = 438; // 'state 210' -> readonly -> shift (target=219, len=0)
actionsTable.fill(54, 53807, 53809); // 'state 210' -> get..set -> shift (target=27, len=0)
actionsTable[53822] = 440; // 'state 210' -> new -> shift (target=220, len=0)
actionsTable.fill(848, 53839, 53841); // 'state 210' -> number..string -> shift (target=424, len=0)
actionsTable[53849] = 930; // 'state 210' -> identifier -> shift (target=465, len=0)
actionsTable[54021] = 68; // 'state 211' -> { -> shift (target=34, len=0)
actionsTable[54057] = 20; // 'state 211' -> [ -> shift (target=10, len=0)
actionsTable[54105] = 572; // 'state 211' -> identifier -> shift (target=286, len=0)
actionsTable.fill(1218, 54272, 54275); // 'state 212' -> true..null -> shift (target=609, len=0)
actionsTable.fill(798, 54275, 54277); // 'state 212' -> this..super -> shift (target=399, len=0)
actionsTable[54277] = 420; // 'state 212' -> { -> shift (target=210, len=0)
actionsTable[54280] = 576; // 'state 212' -> ( -> shift (target=288, len=0)
actionsTable[54290] = 806; // 'state 212' -> of -> shift (target=403, len=0)
actionsTable[54304] = 806; // 'state 212' -> from -> shift (target=403, len=0)
actionsTable[54305] = 192; // 'state 212' -> , -> shift (target=96, len=0)
actionsTable[54308] = 806; // 'state 212' -> type -> shift (target=403, len=0)
actionsTable[54312] = 48; // 'state 212' -> ... -> shift (target=24, len=0)
actionsTable[54313] = 424; // 'state 212' -> [ -> shift (target=212, len=0)
actionsTable[54314] = 1220; // 'state 212' -> ] -> shift (target=610, len=0)
actionsTable[54315] = 70; // 'state 212' -> async -> shift (target=35, len=0)
actionsTable[54316] = 72; // 'state 212' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 54319, 54321); // 'state 212' -> get..set -> shift (target=403, len=0)
actionsTable[54321] = 74; // 'state 212' -> class -> shift (target=37, len=0)
actionsTable[54326] = 28; // 'state 212' -> < -> shift (target=14, len=0)
actionsTable[54328] = 268; // 'state 212' -> | -> shift (target=134, len=0)
actionsTable[54331] = 578; // 'state 212' -> void -> shift (target=289, len=0)
actionsTable[54332] = 580; // 'state 212' -> typeof -> shift (target=290, len=0)
actionsTable[54334] = 32; // 'state 212' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 54341, 54343); // 'state 212' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 54344, 54347); // 'state 212' -> !..delete -> shift (target=15, len=0)
actionsTable[54347] = 34; // 'state 212' -> await -> shift (target=17, len=0)
actionsTable.fill(1218, 54351, 54353); // 'state 212' -> number..string -> shift (target=609, len=0)
actionsTable[54353] = 798; // 'state 212' -> template_string -> shift (target=399, len=0)
actionsTable[54360] = 36; // 'state 212' -> update_operator -> shift (target=18, len=0)
actionsTable[54361] = 582; // 'state 212' -> identifier -> shift (target=291, len=0)
actionsTable[54362] = 798; // 'state 212' -> regex -> shift (target=399, len=0)
actionsTable[54537] = 837; // 'state 213' -> ) -> reduce (target=162, len=1)
actionsTable[54555] = 164; // 'state 213' -> : -> shift (target=82, len=0)
actionsTable[54569] = 837; // 'state 213' -> [ -> reduce (target=162, len=1)
actionsTable[54581] = 164; // 'state 213' -> ?: -> shift (target=82, len=0)
actionsTable[54582] = 366; // 'state 213' -> < -> shift (target=183, len=0)
actionsTable.fill(837, 54584, 54586); // 'state 213' -> |..& -> reduce (target=162, len=1)
actionsTable[54589] = 432; // 'state 213' -> is -> shift (target=216, len=0)
actionsTable[54811] = 164; // 'state 214' -> : -> shift (target=82, len=0)
actionsTable[54837] = 164; // 'state 214' -> ?: -> shift (target=82, len=0)
actionsTable.fill(942, 55040, 55043); // 'state 215' -> true..null -> shift (target=471, len=0)
actionsTable[55045] = 262; // 'state 215' -> { -> shift (target=131, len=0)
actionsTable[55048] = 264; // 'state 215' -> ( -> shift (target=132, len=0)
actionsTable[55081] = 266; // 'state 215' -> [ -> shift (target=133, len=0)
actionsTable[55094] = 28; // 'state 215' -> < -> shift (target=14, len=0)
actionsTable[55096] = 268; // 'state 215' -> | -> shift (target=134, len=0)
actionsTable[55099] = 942; // 'state 215' -> void -> shift (target=471, len=0)
actionsTable[55100] = 944; // 'state 215' -> typeof -> shift (target=472, len=0)
actionsTable.fill(942, 55119, 55121); // 'state 215' -> number..string -> shift (target=471, len=0)
actionsTable[55129] = 270; // 'state 215' -> identifier -> shift (target=135, len=0)
actionsTable.fill(942, 55296, 55299); // 'state 216' -> true..null -> shift (target=471, len=0)
actionsTable[55301] = 262; // 'state 216' -> { -> shift (target=131, len=0)
actionsTable[55304] = 264; // 'state 216' -> ( -> shift (target=132, len=0)
actionsTable[55337] = 266; // 'state 216' -> [ -> shift (target=133, len=0)
actionsTable[55350] = 28; // 'state 216' -> < -> shift (target=14, len=0)
actionsTable[55352] = 268; // 'state 216' -> | -> shift (target=134, len=0)
actionsTable[55355] = 942; // 'state 216' -> void -> shift (target=471, len=0)
actionsTable[55356] = 944; // 'state 216' -> typeof -> shift (target=472, len=0)
actionsTable.fill(942, 55375, 55377); // 'state 216' -> number..string -> shift (target=471, len=0)
actionsTable[55385] = 270; // 'state 216' -> identifier -> shift (target=135, len=0)
actionsTable[55585] = 588; // 'state 217' -> , -> shift (target=294, len=0)
actionsTable[55594] = 1228; // 'state 217' -> ] -> shift (target=614, len=0)
actionsTable[55608] = 506; // 'state 217' -> | -> shift (target=253, len=0)
actionsTable[55609] = 508; // 'state 217' -> & -> shift (target=254, len=0)
actionsTable.fill(798, 55808, 55813); // 'state 218' -> true..super -> shift (target=399, len=0)
actionsTable[55813] = 68; // 'state 218' -> { -> shift (target=34, len=0)
actionsTable[55816] = 4; // 'state 218' -> ( -> shift (target=2, len=0)
actionsTable[55826] = 806; // 'state 218' -> of -> shift (target=403, len=0)
actionsTable[55840] = 806; // 'state 218' -> from -> shift (target=403, len=0)
actionsTable[55844] = 806; // 'state 218' -> type -> shift (target=403, len=0)
actionsTable[55849] = 20; // 'state 218' -> [ -> shift (target=10, len=0)
actionsTable[55851] = 70; // 'state 218' -> async -> shift (target=35, len=0)
actionsTable[55852] = 72; // 'state 218' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 55855, 55857); // 'state 218' -> get..set -> shift (target=403, len=0)
actionsTable[55857] = 74; // 'state 218' -> class -> shift (target=37, len=0)
actionsTable[55862] = 28; // 'state 218' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 55867, 55869); // 'state 218' -> void..typeof -> shift (target=15, len=0)
actionsTable[55870] = 32; // 'state 218' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 55877, 55879); // 'state 218' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 55880, 55883); // 'state 218' -> !..delete -> shift (target=15, len=0)
actionsTable[55883] = 34; // 'state 218' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 55887, 55890); // 'state 218' -> number..template_string -> shift (target=399, len=0)
actionsTable[55896] = 36; // 'state 218' -> update_operator -> shift (target=18, len=0)
actionsTable[55897] = 1240; // 'state 218' -> identifier -> shift (target=620, len=0)
actionsTable[55898] = 798; // 'state 218' -> regex -> shift (target=399, len=0)
actionsTable[56082] = 806; // 'state 219' -> of -> shift (target=403, len=0)
actionsTable[56096] = 806; // 'state 219' -> from -> shift (target=403, len=0)
actionsTable[56100] = 806; // 'state 219' -> type -> shift (target=403, len=0)
actionsTable[56105] = 590; // 'state 219' -> [ -> shift (target=295, len=0)
actionsTable[56107] = 914; // 'state 219' -> async -> shift (target=457, len=0)
actionsTable.fill(806, 56111, 56113); // 'state 219' -> get..set -> shift (target=403, len=0)
actionsTable.fill(848, 56143, 56145); // 'state 219' -> number..string -> shift (target=424, len=0)
actionsTable[56153] = 848; // 'state 219' -> identifier -> shift (target=424, len=0)
actionsTable[56328] = 138; // 'state 220' -> ( -> shift (target=69, len=0)
actionsTable[56374] = 28; // 'state 220' -> < -> shift (target=14, len=0)
actionsTable[56582] = 1232; // 'state 221' -> } -> shift (target=616, len=0)
actionsTable[56594] = 806; // 'state 221' -> of -> shift (target=403, len=0)
actionsTable[56608] = 806; // 'state 221' -> from -> shift (target=403, len=0)
actionsTable[56612] = 806; // 'state 221' -> type -> shift (target=403, len=0)
actionsTable[56617] = 436; // 'state 221' -> [ -> shift (target=218, len=0)
actionsTable[56619] = 914; // 'state 221' -> async -> shift (target=457, len=0)
actionsTable[56622] = 438; // 'state 221' -> readonly -> shift (target=219, len=0)
actionsTable.fill(806, 56623, 56625); // 'state 221' -> get..set -> shift (target=403, len=0)
actionsTable[56638] = 440; // 'state 221' -> new -> shift (target=220, len=0)
actionsTable.fill(848, 56655, 56657); // 'state 221' -> number..string -> shift (target=424, len=0)
actionsTable[56665] = 848; // 'state 221' -> identifier -> shift (target=424, len=0)
actionsTable[56840] = 138; // 'state 222' -> ( -> shift (target=69, len=0)
actionsTable[56859] = 164; // 'state 222' -> : -> shift (target=82, len=0)
actionsTable[56885] = 164; // 'state 222' -> ?: -> shift (target=82, len=0)
actionsTable[56886] = 28; // 'state 222' -> < -> shift (target=14, len=0)
actionsTable[57096] = 86; // 'state 223' -> ( -> shift (target=43, len=0)
actionsTable[57107] = 88; // 'state 223' -> in -> shift (target=44, len=0)
actionsTable[57122] = 90; // 'state 223' -> * -> shift (target=45, len=0)
actionsTable[57123] = 92; // 'state 223' -> as -> shift (target=46, len=0)
actionsTable[57129] = 94; // 'state 223' -> [ -> shift (target=47, len=0)
actionsTable[57130] = 1242; // 'state 223' -> ] -> shift (target=621, len=0)
actionsTable.fill(88, 57142, 57144); // 'state 223' -> <..> -> shift (target=44, len=0)
actionsTable[57144] = 96; // 'state 223' -> | -> shift (target=48, len=0)
actionsTable[57145] = 98; // 'state 223' -> & -> shift (target=49, len=0)
actionsTable[57151] = 100; // 'state 223' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 57152, 57154); // 'state 223' -> ||..?? -> shift (target=51, len=0)
actionsTable[57154] = 104; // 'state 223' -> && -> shift (target=52, len=0)
actionsTable[57155] = 106; // 'state 223' -> ^ -> shift (target=53, len=0)
actionsTable[57156] = 88; // 'state 223' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 57157, 57159); // 'state 223' -> +..- -> shift (target=54, len=0)
actionsTable[57159] = 90; // 'state 223' -> ** -> shift (target=45, len=0)
actionsTable[57164] = 110; // 'state 223' -> ?. -> shift (target=55, len=0)
actionsTable[57165] = 864; // 'state 223' -> . -> shift (target=432, len=0)
actionsTable[57172] = 112; // 'state 223' -> equality_operator -> shift (target=56, len=0)
actionsTable[57173] = 88; // 'state 223' -> relational_operator -> shift (target=44, len=0)
actionsTable[57174] = 114; // 'state 223' -> shift_operator -> shift (target=57, len=0)
actionsTable[57175] = 90; // 'state 223' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[57176] = 866; // 'state 223' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(798, 57344, 57349); // 'state 224' -> true..super -> shift (target=399, len=0)
actionsTable[57349] = 68; // 'state 224' -> { -> shift (target=34, len=0)
actionsTable[57352] = 4; // 'state 224' -> ( -> shift (target=2, len=0)
actionsTable[57353] = 1244; // 'state 224' -> ) -> shift (target=622, len=0)
actionsTable[57362] = 806; // 'state 224' -> of -> shift (target=403, len=0)
actionsTable[57376] = 806; // 'state 224' -> from -> shift (target=403, len=0)
actionsTable[57380] = 806; // 'state 224' -> type -> shift (target=403, len=0)
actionsTable[57384] = 48; // 'state 224' -> ... -> shift (target=24, len=0)
actionsTable[57385] = 20; // 'state 224' -> [ -> shift (target=10, len=0)
actionsTable[57387] = 70; // 'state 224' -> async -> shift (target=35, len=0)
actionsTable[57388] = 72; // 'state 224' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 57391, 57393); // 'state 224' -> get..set -> shift (target=403, len=0)
actionsTable[57393] = 74; // 'state 224' -> class -> shift (target=37, len=0)
actionsTable[57398] = 28; // 'state 224' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 57403, 57405); // 'state 224' -> void..typeof -> shift (target=15, len=0)
actionsTable[57406] = 32; // 'state 224' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 57413, 57415); // 'state 224' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 57416, 57419); // 'state 224' -> !..delete -> shift (target=15, len=0)
actionsTable[57419] = 34; // 'state 224' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 57423, 57426); // 'state 224' -> number..template_string -> shift (target=399, len=0)
actionsTable[57432] = 36; // 'state 224' -> update_operator -> shift (target=18, len=0)
actionsTable[57433] = 818; // 'state 224' -> identifier -> shift (target=409, len=0)
actionsTable[57434] = 798; // 'state 224' -> regex -> shift (target=399, len=0)
actionsTable[57606] = 1248; // 'state 225' -> } -> shift (target=624, len=0)
actionsTable[57636] = 966; // 'state 225' -> type -> shift (target=483, len=0)
actionsTable[57689] = 968; // 'state 225' -> identifier -> shift (target=484, len=0)
actionsTable[57864] = 138; // 'state 226' -> ( -> shift (target=69, len=0)
actionsTable[57910] = 28; // 'state 226' -> < -> shift (target=14, len=0)
actionsTable[58117] = 80; // 'state 227' -> { -> shift (target=40, len=0)
actionsTable[58125] = 1130; // 'state 227' -> ; -> shift (target=565, len=0)
actionsTable[58139] = 164; // 'state 227' -> : -> shift (target=82, len=0)
actionsTable[58165] = 164; // 'state 227' -> ?: -> shift (target=82, len=0)
actionsTable[58376] = 138; // 'state 228' -> ( -> shift (target=69, len=0)
actionsTable[58629] = 146; // 'state 229' -> { -> shift (target=73, len=0)
actionsTable[58885] = 146; // 'state 230' -> { -> shift (target=73, len=0)
actionsTable[58930] = 148; // 'state 230' -> extends -> shift (target=74, len=0)
actionsTable[58931] = 150; // 'state 230' -> implements -> shift (target=75, len=0)
actionsTable[59141] = 122; // 'state 231' -> { -> shift (target=61, len=0)
actionsTable[59177] = 124; // 'state 231' -> [ -> shift (target=62, len=0)
actionsTable[59225] = 894; // 'state 231' -> identifier -> shift (target=447, len=0)
actionsTable.fill(798, 59392, 59397); // 'state 232' -> true..super -> shift (target=399, len=0)
actionsTable[59397] = 68; // 'state 232' -> { -> shift (target=34, len=0)
actionsTable[59400] = 4; // 'state 232' -> ( -> shift (target=2, len=0)
actionsTable[59410] = 806; // 'state 232' -> of -> shift (target=403, len=0)
actionsTable[59424] = 806; // 'state 232' -> from -> shift (target=403, len=0)
actionsTable[59428] = 806; // 'state 232' -> type -> shift (target=403, len=0)
actionsTable[59433] = 20; // 'state 232' -> [ -> shift (target=10, len=0)
actionsTable[59435] = 70; // 'state 232' -> async -> shift (target=35, len=0)
actionsTable[59436] = 72; // 'state 232' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 59439, 59441); // 'state 232' -> get..set -> shift (target=403, len=0)
actionsTable[59441] = 74; // 'state 232' -> class -> shift (target=37, len=0)
actionsTable[59446] = 28; // 'state 232' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 59451, 59453); // 'state 232' -> void..typeof -> shift (target=15, len=0)
actionsTable[59454] = 32; // 'state 232' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 59461, 59463); // 'state 232' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 59464, 59467); // 'state 232' -> !..delete -> shift (target=15, len=0)
actionsTable[59467] = 34; // 'state 232' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 59471, 59474); // 'state 232' -> number..template_string -> shift (target=399, len=0)
actionsTable[59480] = 36; // 'state 232' -> update_operator -> shift (target=18, len=0)
actionsTable[59481] = 818; // 'state 232' -> identifier -> shift (target=409, len=0)
actionsTable[59482] = 798; // 'state 232' -> regex -> shift (target=399, len=0)
actionsTable.fill(1789, 59648, 59656); // 'state 233' -> true..if -> reduce (target=126, len=3)
actionsTable[59656] = 86; // 'state 233' -> ( -> shift (target=43, len=0)
actionsTable.fill(1789, 59658, 59667); // 'state 233' -> else..of -> reduce (target=126, len=3)
actionsTable[59667] = 88; // 'state 233' -> in -> shift (target=44, len=0)
actionsTable.fill(1789, 59668, 59671); // 'state 233' -> return..try -> reduce (target=126, len=3)
actionsTable.fill(1789, 59673, 59675); // 'state 233' -> switch..case -> reduce (target=126, len=3)
actionsTable.fill(1789, 59676, 59682); // 'state 233' -> default.., -> reduce (target=126, len=3)
actionsTable[59682] = 90; // 'state 233' -> * -> shift (target=45, len=0)
actionsTable[59683] = 92; // 'state 233' -> as -> shift (target=46, len=0)
actionsTable.fill(1789, 59684, 59686); // 'state 233' -> type..export -> reduce (target=126, len=3)
actionsTable[59689] = 94; // 'state 233' -> [ -> shift (target=47, len=0)
actionsTable.fill(1789, 59691, 59693); // 'state 233' -> async..function -> reduce (target=126, len=3)
actionsTable.fill(1789, 59695, 59698); // 'state 233' -> get..class -> reduce (target=126, len=3)
actionsTable[59700] = 1789; // 'state 233' -> interface -> reduce (target=126, len=3)
actionsTable.fill(88, 59702, 59704); // 'state 233' -> <..> -> shift (target=44, len=0)
actionsTable[59704] = 96; // 'state 233' -> | -> shift (target=48, len=0)
actionsTable[59705] = 98; // 'state 233' -> & -> shift (target=49, len=0)
actionsTable.fill(1789, 59707, 59709); // 'state 233' -> void..typeof -> reduce (target=126, len=3)
actionsTable[59710] = 1789; // 'state 233' -> new -> reduce (target=126, len=3)
actionsTable[59711] = 100; // 'state 233' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 59712, 59714); // 'state 233' -> ||..?? -> shift (target=51, len=0)
actionsTable[59714] = 104; // 'state 233' -> && -> shift (target=52, len=0)
actionsTable[59715] = 106; // 'state 233' -> ^ -> shift (target=53, len=0)
actionsTable[59716] = 88; // 'state 233' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 59717, 59719); // 'state 233' -> +..- -> shift (target=54, len=0)
actionsTable[59719] = 90; // 'state 233' -> ** -> shift (target=45, len=0)
actionsTable.fill(1789, 59720, 59724); // 'state 233' -> !..await -> reduce (target=126, len=3)
actionsTable[59724] = 110; // 'state 233' -> ?. -> shift (target=55, len=0)
actionsTable[59725] = 864; // 'state 233' -> . -> shift (target=432, len=0)
actionsTable.fill(1789, 59727, 59730); // 'state 233' -> number..template_string -> reduce (target=126, len=3)
actionsTable[59732] = 112; // 'state 233' -> equality_operator -> shift (target=56, len=0)
actionsTable[59733] = 88; // 'state 233' -> relational_operator -> shift (target=44, len=0)
actionsTable[59734] = 114; // 'state 233' -> shift_operator -> shift (target=57, len=0)
actionsTable[59735] = 90; // 'state 233' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[59736] = 866; // 'state 233' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(1789, 59737, 59740); // 'state 233' -> identifier..@par-gen.EOF -> reduce (target=126, len=3)
actionsTable[59910] = 1266; // 'state 234' -> } -> shift (target=633, len=0)
actionsTable[59922] = 806; // 'state 234' -> of -> shift (target=403, len=0)
actionsTable[59936] = 806; // 'state 234' -> from -> shift (target=403, len=0)
actionsTable[59940] = 806; // 'state 234' -> type -> shift (target=403, len=0)
actionsTable[59944] = 294; // 'state 234' -> ... -> shift (target=147, len=0)
actionsTable[59945] = 198; // 'state 234' -> [ -> shift (target=99, len=0)
actionsTable[59947] = 914; // 'state 234' -> async -> shift (target=457, len=0)
actionsTable.fill(806, 59951, 59953); // 'state 234' -> get..set -> shift (target=403, len=0)
actionsTable.fill(848, 59983, 59985); // 'state 234' -> number..string -> shift (target=424, len=0)
actionsTable[59993] = 992; // 'state 234' -> identifier -> shift (target=496, len=0)
actionsTable.fill(798, 60160, 60165); // 'state 235' -> true..super -> shift (target=399, len=0)
actionsTable[60165] = 68; // 'state 235' -> { -> shift (target=34, len=0)
actionsTable[60168] = 4; // 'state 235' -> ( -> shift (target=2, len=0)
actionsTable[60178] = 806; // 'state 235' -> of -> shift (target=403, len=0)
actionsTable[60192] = 806; // 'state 235' -> from -> shift (target=403, len=0)
actionsTable[60196] = 806; // 'state 235' -> type -> shift (target=403, len=0)
actionsTable[60201] = 20; // 'state 235' -> [ -> shift (target=10, len=0)
actionsTable[60203] = 70; // 'state 235' -> async -> shift (target=35, len=0)
actionsTable[60204] = 72; // 'state 235' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 60207, 60209); // 'state 235' -> get..set -> shift (target=403, len=0)
actionsTable[60209] = 74; // 'state 235' -> class -> shift (target=37, len=0)
actionsTable[60214] = 28; // 'state 235' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 60219, 60221); // 'state 235' -> void..typeof -> shift (target=15, len=0)
actionsTable[60222] = 32; // 'state 235' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 60229, 60231); // 'state 235' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 60232, 60235); // 'state 235' -> !..delete -> shift (target=15, len=0)
actionsTable[60235] = 34; // 'state 235' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 60239, 60242); // 'state 235' -> number..template_string -> shift (target=399, len=0)
actionsTable[60248] = 36; // 'state 235' -> update_operator -> shift (target=18, len=0)
actionsTable[60249] = 818; // 'state 235' -> identifier -> shift (target=409, len=0)
actionsTable[60250] = 798; // 'state 235' -> regex -> shift (target=399, len=0)
actionsTable[60421] = 122; // 'state 236' -> { -> shift (target=61, len=0)
actionsTable[60457] = 124; // 'state 236' -> [ -> shift (target=62, len=0)
actionsTable[60505] = 894; // 'state 236' -> identifier -> shift (target=447, len=0)
actionsTable[60705] = 476; // 'state 237' -> , -> shift (target=238, len=0)
actionsTable[60714] = 1272; // 'state 237' -> ] -> shift (target=636, len=0)
actionsTable[60933] = 122; // 'state 238' -> { -> shift (target=61, len=0)
actionsTable[60961] = 775; // 'state 238' -> , -> reduce (target=131, len=1)
actionsTable[60968] = 300; // 'state 238' -> ... -> shift (target=150, len=0)
actionsTable[60969] = 124; // 'state 238' -> [ -> shift (target=62, len=0)
actionsTable[60970] = 775; // 'state 238' -> ] -> reduce (target=131, len=1)
actionsTable[61017] = 894; // 'state 238' -> identifier -> shift (target=447, len=0)
actionsTable.fill(798, 61184, 61189); // 'state 239' -> true..super -> shift (target=399, len=0)
actionsTable[61189] = 68; // 'state 239' -> { -> shift (target=34, len=0)
actionsTable[61192] = 4; // 'state 239' -> ( -> shift (target=2, len=0)
actionsTable[61202] = 806; // 'state 239' -> of -> shift (target=403, len=0)
actionsTable[61216] = 806; // 'state 239' -> from -> shift (target=403, len=0)
actionsTable[61220] = 806; // 'state 239' -> type -> shift (target=403, len=0)
actionsTable[61225] = 20; // 'state 239' -> [ -> shift (target=10, len=0)
actionsTable[61227] = 70; // 'state 239' -> async -> shift (target=35, len=0)
actionsTable[61228] = 72; // 'state 239' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 61231, 61233); // 'state 239' -> get..set -> shift (target=403, len=0)
actionsTable[61233] = 74; // 'state 239' -> class -> shift (target=37, len=0)
actionsTable[61238] = 28; // 'state 239' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 61243, 61245); // 'state 239' -> void..typeof -> shift (target=15, len=0)
actionsTable[61246] = 32; // 'state 239' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 61253, 61255); // 'state 239' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 61256, 61259); // 'state 239' -> !..delete -> shift (target=15, len=0)
actionsTable[61259] = 34; // 'state 239' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 61263, 61266); // 'state 239' -> number..template_string -> shift (target=399, len=0)
actionsTable[61272] = 36; // 'state 239' -> update_operator -> shift (target=18, len=0)
actionsTable[61273] = 818; // 'state 239' -> identifier -> shift (target=409, len=0)
actionsTable[61274] = 798; // 'state 239' -> regex -> shift (target=399, len=0)
actionsTable[61445] = 80; // 'state 240' -> { -> shift (target=40, len=0)
actionsTable[61453] = 1278; // 'state 240' -> ; -> shift (target=639, len=0)
actionsTable[61467] = 164; // 'state 240' -> : -> shift (target=82, len=0)
actionsTable[61493] = 164; // 'state 240' -> ?: -> shift (target=82, len=0)
actionsTable[61704] = 138; // 'state 241' -> ( -> shift (target=69, len=0)
actionsTable[61957] = 80; // 'state 242' -> { -> shift (target=40, len=0)
actionsTable[61979] = 164; // 'state 242' -> : -> shift (target=82, len=0)
actionsTable[62005] = 164; // 'state 242' -> ?: -> shift (target=82, len=0)
actionsTable[62213] = 80; // 'state 243' -> { -> shift (target=40, len=0)
actionsTable.fill(2417, 62464, 62472); // 'state 244' -> true..if -> reduce (target=184, len=4)
actionsTable[62472] = 86; // 'state 244' -> ( -> shift (target=43, len=0)
actionsTable.fill(2417, 62473, 62483); // 'state 244' -> )..of -> reduce (target=184, len=4)
actionsTable[62483] = 88; // 'state 244' -> in -> shift (target=44, len=0)
actionsTable.fill(2417, 62484, 62487); // 'state 244' -> return..try -> reduce (target=184, len=4)
actionsTable.fill(2417, 62489, 62498); // 'state 244' -> switch.., -> reduce (target=184, len=4)
actionsTable[62498] = 90; // 'state 244' -> * -> shift (target=45, len=0)
actionsTable[62499] = 92; // 'state 244' -> as -> shift (target=46, len=0)
actionsTable.fill(2417, 62500, 62502); // 'state 244' -> type..export -> reduce (target=184, len=4)
actionsTable[62505] = 94; // 'state 244' -> [ -> shift (target=47, len=0)
actionsTable.fill(2417, 62506, 62514); // 'state 244' -> ]..class -> reduce (target=184, len=4)
actionsTable.fill(2417, 62515, 62517); // 'state 244' -> implements..interface -> reduce (target=184, len=4)
actionsTable.fill(88, 62518, 62520); // 'state 244' -> <..> -> shift (target=44, len=0)
actionsTable[62520] = 96; // 'state 244' -> | -> shift (target=48, len=0)
actionsTable[62521] = 98; // 'state 244' -> & -> shift (target=49, len=0)
actionsTable.fill(2417, 62523, 62525); // 'state 244' -> void..typeof -> reduce (target=184, len=4)
actionsTable[62526] = 2417; // 'state 244' -> new -> reduce (target=184, len=4)
actionsTable[62527] = 100; // 'state 244' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 62528, 62530); // 'state 244' -> ||..?? -> shift (target=51, len=0)
actionsTable[62530] = 104; // 'state 244' -> && -> shift (target=52, len=0)
actionsTable[62531] = 106; // 'state 244' -> ^ -> shift (target=53, len=0)
actionsTable[62532] = 88; // 'state 244' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 62533, 62535); // 'state 244' -> +..- -> shift (target=54, len=0)
actionsTable[62535] = 90; // 'state 244' -> ** -> shift (target=45, len=0)
actionsTable.fill(2417, 62536, 62540); // 'state 244' -> !..await -> reduce (target=184, len=4)
actionsTable[62540] = 110; // 'state 244' -> ?. -> shift (target=55, len=0)
actionsTable[62541] = 864; // 'state 244' -> . -> shift (target=432, len=0)
actionsTable.fill(2417, 62542, 62547); // 'state 244' -> private_property_identifier..accessibility_modifier -> reduce (target=184, len=4)
actionsTable[62548] = 112; // 'state 244' -> equality_operator -> shift (target=56, len=0)
actionsTable[62549] = 88; // 'state 244' -> relational_operator -> shift (target=44, len=0)
actionsTable[62550] = 114; // 'state 244' -> shift_operator -> shift (target=57, len=0)
actionsTable[62551] = 90; // 'state 244' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[62552] = 866; // 'state 244' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(2417, 62553, 62556); // 'state 244' -> identifier..@par-gen.EOF -> reduce (target=184, len=4)
actionsTable.fill(798, 62720, 62725); // 'state 245' -> true..super -> shift (target=399, len=0)
actionsTable[62725] = 2; // 'state 245' -> { -> shift (target=1, len=0)
actionsTable[62728] = 4; // 'state 245' -> ( -> shift (target=2, len=0)
actionsTable[62738] = 806; // 'state 245' -> of -> shift (target=403, len=0)
actionsTable[62752] = 806; // 'state 245' -> from -> shift (target=403, len=0)
actionsTable[62756] = 806; // 'state 245' -> type -> shift (target=403, len=0)
actionsTable[62761] = 20; // 'state 245' -> [ -> shift (target=10, len=0)
actionsTable[62763] = 70; // 'state 245' -> async -> shift (target=35, len=0)
actionsTable[62764] = 72; // 'state 245' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 62767, 62769); // 'state 245' -> get..set -> shift (target=403, len=0)
actionsTable[62769] = 74; // 'state 245' -> class -> shift (target=37, len=0)
actionsTable[62774] = 28; // 'state 245' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 62779, 62781); // 'state 245' -> void..typeof -> shift (target=15, len=0)
actionsTable[62782] = 32; // 'state 245' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 62789, 62791); // 'state 245' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 62792, 62795); // 'state 245' -> !..delete -> shift (target=15, len=0)
actionsTable[62795] = 34; // 'state 245' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 62799, 62802); // 'state 245' -> number..template_string -> shift (target=399, len=0)
actionsTable[62808] = 36; // 'state 245' -> update_operator -> shift (target=18, len=0)
actionsTable[62809] = 818; // 'state 245' -> identifier -> shift (target=409, len=0)
actionsTable[62810] = 798; // 'state 245' -> regex -> shift (target=399, len=0)
actionsTable[62981] = 80; // 'state 246' -> { -> shift (target=40, len=0)
actionsTable[62989] = 1278; // 'state 246' -> ; -> shift (target=639, len=0)
actionsTable[63237] = 122; // 'state 247' -> { -> shift (target=61, len=0)
actionsTable[63241] = 1288; // 'state 247' -> ) -> shift (target=644, len=0)
actionsTable[63272] = 320; // 'state 247' -> ... -> shift (target=160, len=0)
actionsTable[63273] = 124; // 'state 247' -> [ -> shift (target=62, len=0)
actionsTable[63275] = 1006; // 'state 247' -> async -> shift (target=503, len=0)
actionsTable.fill(1008, 63277, 63279); // 'state 247' -> static..readonly -> shift (target=504, len=0)
actionsTable.fill(1006, 63279, 63281); // 'state 247' -> get..set -> shift (target=503, len=0)
actionsTable[63314] = 1008; // 'state 247' -> accessibility_modifier -> shift (target=504, len=0)
actionsTable[63321] = 894; // 'state 247' -> identifier -> shift (target=447, len=0)
actionsTable[63497] = 1299; // 'state 248' -> ) -> reduce (target=137, len=2)
actionsTable[63515] = 164; // 'state 248' -> : -> shift (target=82, len=0)
actionsTable[63521] = 1299; // 'state 248' -> , -> reduce (target=137, len=2)
actionsTable[63527] = 636; // 'state 248' -> = -> shift (target=318, len=0)
actionsTable[63541] = 164; // 'state 248' -> ?: -> shift (target=82, len=0)
actionsTable.fill(798, 63744, 63749); // 'state 249' -> true..super -> shift (target=399, len=0)
actionsTable[63749] = 68; // 'state 249' -> { -> shift (target=34, len=0)
actionsTable[63752] = 4; // 'state 249' -> ( -> shift (target=2, len=0)
actionsTable[63762] = 806; // 'state 249' -> of -> shift (target=403, len=0)
actionsTable[63776] = 806; // 'state 249' -> from -> shift (target=403, len=0)
actionsTable[63780] = 806; // 'state 249' -> type -> shift (target=403, len=0)
actionsTable[63785] = 20; // 'state 249' -> [ -> shift (target=10, len=0)
actionsTable[63787] = 70; // 'state 249' -> async -> shift (target=35, len=0)
actionsTable[63788] = 72; // 'state 249' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 63791, 63793); // 'state 249' -> get..set -> shift (target=403, len=0)
actionsTable[63793] = 74; // 'state 249' -> class -> shift (target=37, len=0)
actionsTable[63798] = 28; // 'state 249' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 63803, 63805); // 'state 249' -> void..typeof -> shift (target=15, len=0)
actionsTable[63806] = 32; // 'state 249' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 63813, 63815); // 'state 249' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 63816, 63819); // 'state 249' -> !..delete -> shift (target=15, len=0)
actionsTable[63819] = 34; // 'state 249' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 63823, 63826); // 'state 249' -> number..template_string -> shift (target=399, len=0)
actionsTable[63832] = 36; // 'state 249' -> update_operator -> shift (target=18, len=0)
actionsTable[63833] = 818; // 'state 249' -> identifier -> shift (target=409, len=0)
actionsTable[63834] = 798; // 'state 249' -> regex -> shift (target=399, len=0)
actionsTable[64009] = 1299; // 'state 250' -> ) -> reduce (target=137, len=2)
actionsTable[64027] = 164; // 'state 250' -> : -> shift (target=82, len=0)
actionsTable[64033] = 1299; // 'state 250' -> , -> reduce (target=137, len=2)
actionsTable[64053] = 164; // 'state 250' -> ?: -> shift (target=82, len=0)
actionsTable[64261] = 146; // 'state 251' -> { -> shift (target=73, len=0)
actionsTable.fill(942, 64512, 64515); // 'state 252' -> true..null -> shift (target=471, len=0)
actionsTable[64517] = 262; // 'state 252' -> { -> shift (target=131, len=0)
actionsTable[64520] = 264; // 'state 252' -> ( -> shift (target=132, len=0)
actionsTable[64553] = 266; // 'state 252' -> [ -> shift (target=133, len=0)
actionsTable[64566] = 28; // 'state 252' -> < -> shift (target=14, len=0)
actionsTable[64568] = 268; // 'state 252' -> | -> shift (target=134, len=0)
actionsTable[64571] = 942; // 'state 252' -> void -> shift (target=471, len=0)
actionsTable[64572] = 944; // 'state 252' -> typeof -> shift (target=472, len=0)
actionsTable.fill(942, 64591, 64593); // 'state 252' -> number..string -> shift (target=471, len=0)
actionsTable[64601] = 270; // 'state 252' -> identifier -> shift (target=135, len=0)
actionsTable.fill(942, 64768, 64771); // 'state 253' -> true..null -> shift (target=471, len=0)
actionsTable[64773] = 262; // 'state 253' -> { -> shift (target=131, len=0)
actionsTable[64776] = 264; // 'state 253' -> ( -> shift (target=132, len=0)
actionsTable[64809] = 266; // 'state 253' -> [ -> shift (target=133, len=0)
actionsTable[64822] = 28; // 'state 253' -> < -> shift (target=14, len=0)
actionsTable[64824] = 268; // 'state 253' -> | -> shift (target=134, len=0)
actionsTable[64827] = 942; // 'state 253' -> void -> shift (target=471, len=0)
actionsTable[64828] = 944; // 'state 253' -> typeof -> shift (target=472, len=0)
actionsTable.fill(942, 64847, 64849); // 'state 253' -> number..string -> shift (target=471, len=0)
actionsTable[64857] = 270; // 'state 253' -> identifier -> shift (target=135, len=0)
actionsTable.fill(942, 65024, 65027); // 'state 254' -> true..null -> shift (target=471, len=0)
actionsTable[65029] = 262; // 'state 254' -> { -> shift (target=131, len=0)
actionsTable[65032] = 264; // 'state 254' -> ( -> shift (target=132, len=0)
actionsTable[65065] = 266; // 'state 254' -> [ -> shift (target=133, len=0)
actionsTable[65078] = 28; // 'state 254' -> < -> shift (target=14, len=0)
actionsTable[65080] = 268; // 'state 254' -> | -> shift (target=134, len=0)
actionsTable[65083] = 942; // 'state 254' -> void -> shift (target=471, len=0)
actionsTable[65084] = 944; // 'state 254' -> typeof -> shift (target=472, len=0)
actionsTable.fill(942, 65103, 65105); // 'state 254' -> number..string -> shift (target=471, len=0)
actionsTable[65113] = 270; // 'state 254' -> identifier -> shift (target=135, len=0)
actionsTable[65286] = 1323; // 'state 255' -> } -> reduce (target=149, len=2)
actionsTable[65288] = 138; // 'state 255' -> ( -> shift (target=69, len=0)
actionsTable[65293] = 1302; // 'state 255' -> ; -> shift (target=651, len=0)
actionsTable[65298] = 1323; // 'state 255' -> of -> reduce (target=149, len=2)
actionsTable[65307] = 164; // 'state 255' -> : -> shift (target=82, len=0)
actionsTable[65312] = 1323; // 'state 255' -> from -> reduce (target=149, len=2)
actionsTable[65316] = 1323; // 'state 255' -> type -> reduce (target=149, len=2)
actionsTable[65319] = 642; // 'state 255' -> = -> shift (target=321, len=0)
actionsTable[65321] = 1323; // 'state 255' -> [ -> reduce (target=149, len=2)
actionsTable[65323] = 1323; // 'state 255' -> async -> reduce (target=149, len=2)
actionsTable.fill(1323, 65325, 65329); // 'state 255' -> static..set -> reduce (target=149, len=2)
actionsTable[65333] = 164; // 'state 255' -> ?: -> shift (target=82, len=0)
actionsTable[65334] = 28; // 'state 255' -> < -> shift (target=14, len=0)
actionsTable.fill(1323, 65358, 65361); // 'state 255' -> private_property_identifier..string -> reduce (target=149, len=2)
actionsTable[65362] = 1323; // 'state 255' -> accessibility_modifier -> reduce (target=149, len=2)
actionsTable[65369] = 1323; // 'state 255' -> identifier -> reduce (target=149, len=2)
actionsTable.fill(798, 65536, 65541); // 'state 256' -> true..super -> shift (target=399, len=0)
actionsTable[65541] = 68; // 'state 256' -> { -> shift (target=34, len=0)
actionsTable[65544] = 4; // 'state 256' -> ( -> shift (target=2, len=0)
actionsTable[65554] = 806; // 'state 256' -> of -> shift (target=403, len=0)
actionsTable[65568] = 806; // 'state 256' -> from -> shift (target=403, len=0)
actionsTable[65572] = 806; // 'state 256' -> type -> shift (target=403, len=0)
actionsTable[65577] = 20; // 'state 256' -> [ -> shift (target=10, len=0)
actionsTable[65579] = 70; // 'state 256' -> async -> shift (target=35, len=0)
actionsTable[65580] = 72; // 'state 256' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 65583, 65585); // 'state 256' -> get..set -> shift (target=403, len=0)
actionsTable[65585] = 74; // 'state 256' -> class -> shift (target=37, len=0)
actionsTable[65590] = 28; // 'state 256' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 65595, 65597); // 'state 256' -> void..typeof -> shift (target=15, len=0)
actionsTable[65598] = 32; // 'state 256' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 65605, 65607); // 'state 256' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 65608, 65611); // 'state 256' -> !..delete -> shift (target=15, len=0)
actionsTable[65611] = 34; // 'state 256' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 65615, 65618); // 'state 256' -> number..template_string -> shift (target=399, len=0)
actionsTable[65624] = 36; // 'state 256' -> update_operator -> shift (target=18, len=0)
actionsTable[65625] = 818; // 'state 256' -> identifier -> shift (target=409, len=0)
actionsTable[65626] = 798; // 'state 256' -> regex -> shift (target=399, len=0)
actionsTable[65797] = 80; // 'state 257' -> { -> shift (target=40, len=0)
actionsTable[65819] = 164; // 'state 257' -> : -> shift (target=82, len=0)
actionsTable[65845] = 164; // 'state 257' -> ?: -> shift (target=82, len=0)
actionsTable[66056] = 138; // 'state 258' -> ( -> shift (target=69, len=0)
actionsTable[66309] = 262; // 'state 259' -> { -> shift (target=131, len=0)
actionsTable[66565] = 1327; // 'state 260' -> { -> reduce (target=151, len=2)
actionsTable[66593] = 504; // 'state 260' -> , -> shift (target=252, len=0)
actionsTable[66616] = 506; // 'state 260' -> | -> shift (target=253, len=0)
actionsTable[66617] = 508; // 'state 260' -> & -> shift (target=254, len=0)
actionsTable.fill(942, 66816, 66819); // 'state 261' -> true..null -> shift (target=471, len=0)
actionsTable[66821] = 262; // 'state 261' -> { -> shift (target=131, len=0)
actionsTable[66824] = 264; // 'state 261' -> ( -> shift (target=132, len=0)
actionsTable[66857] = 266; // 'state 261' -> [ -> shift (target=133, len=0)
actionsTable[66870] = 28; // 'state 261' -> < -> shift (target=14, len=0)
actionsTable[66872] = 268; // 'state 261' -> | -> shift (target=134, len=0)
actionsTable[66875] = 942; // 'state 261' -> void -> shift (target=471, len=0)
actionsTable[66876] = 944; // 'state 261' -> typeof -> shift (target=472, len=0)
actionsTable.fill(942, 66895, 66897); // 'state 261' -> number..string -> shift (target=471, len=0)
actionsTable[66905] = 270; // 'state 261' -> identifier -> shift (target=135, len=0)
actionsTable.fill(798, 67072, 67077); // 'state 262' -> true..super -> shift (target=399, len=0)
actionsTable[67077] = 68; // 'state 262' -> { -> shift (target=34, len=0)
actionsTable[67080] = 4; // 'state 262' -> ( -> shift (target=2, len=0)
actionsTable[67081] = 1316; // 'state 262' -> ) -> shift (target=658, len=0)
actionsTable[67090] = 806; // 'state 262' -> of -> shift (target=403, len=0)
actionsTable[67104] = 806; // 'state 262' -> from -> shift (target=403, len=0)
actionsTable[67108] = 806; // 'state 262' -> type -> shift (target=403, len=0)
actionsTable[67112] = 48; // 'state 262' -> ... -> shift (target=24, len=0)
actionsTable[67113] = 20; // 'state 262' -> [ -> shift (target=10, len=0)
actionsTable[67115] = 70; // 'state 262' -> async -> shift (target=35, len=0)
actionsTable[67116] = 72; // 'state 262' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 67119, 67121); // 'state 262' -> get..set -> shift (target=403, len=0)
actionsTable[67121] = 74; // 'state 262' -> class -> shift (target=37, len=0)
actionsTable[67126] = 28; // 'state 262' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 67131, 67133); // 'state 262' -> void..typeof -> shift (target=15, len=0)
actionsTable[67134] = 32; // 'state 262' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 67141, 67143); // 'state 262' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 67144, 67147); // 'state 262' -> !..delete -> shift (target=15, len=0)
actionsTable[67147] = 34; // 'state 262' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 67151, 67154); // 'state 262' -> number..template_string -> shift (target=399, len=0)
actionsTable[67160] = 36; // 'state 262' -> update_operator -> shift (target=18, len=0)
actionsTable[67161] = 818; // 'state 262' -> identifier -> shift (target=409, len=0)
actionsTable[67162] = 798; // 'state 262' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 67328, 67333); // 'state 263' -> true..super -> shift (target=399, len=0)
actionsTable[67333] = 68; // 'state 263' -> { -> shift (target=34, len=0)
actionsTable[67336] = 4; // 'state 263' -> ( -> shift (target=2, len=0)
actionsTable[67346] = 806; // 'state 263' -> of -> shift (target=403, len=0)
actionsTable[67360] = 806; // 'state 263' -> from -> shift (target=403, len=0)
actionsTable[67364] = 806; // 'state 263' -> type -> shift (target=403, len=0)
actionsTable[67369] = 20; // 'state 263' -> [ -> shift (target=10, len=0)
actionsTable[67371] = 70; // 'state 263' -> async -> shift (target=35, len=0)
actionsTable[67372] = 72; // 'state 263' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 67375, 67377); // 'state 263' -> get..set -> shift (target=403, len=0)
actionsTable[67377] = 74; // 'state 263' -> class -> shift (target=37, len=0)
actionsTable[67382] = 28; // 'state 263' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 67387, 67389); // 'state 263' -> void..typeof -> shift (target=15, len=0)
actionsTable[67390] = 32; // 'state 263' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 67397, 67399); // 'state 263' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 67400, 67403); // 'state 263' -> !..delete -> shift (target=15, len=0)
actionsTable[67403] = 34; // 'state 263' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 67407, 67410); // 'state 263' -> number..template_string -> shift (target=399, len=0)
actionsTable[67416] = 36; // 'state 263' -> update_operator -> shift (target=18, len=0)
actionsTable[67417] = 818; // 'state 263' -> identifier -> shift (target=409, len=0)
actionsTable[67418] = 798; // 'state 263' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 67584, 67589); // 'state 264' -> true..super -> shift (target=399, len=0)
actionsTable[67589] = 68; // 'state 264' -> { -> shift (target=34, len=0)
actionsTable[67592] = 4; // 'state 264' -> ( -> shift (target=2, len=0)
actionsTable[67593] = 1320; // 'state 264' -> ) -> shift (target=660, len=0)
actionsTable[67602] = 806; // 'state 264' -> of -> shift (target=403, len=0)
actionsTable[67616] = 806; // 'state 264' -> from -> shift (target=403, len=0)
actionsTable[67620] = 806; // 'state 264' -> type -> shift (target=403, len=0)
actionsTable[67624] = 170; // 'state 264' -> ... -> shift (target=85, len=0)
actionsTable[67625] = 20; // 'state 264' -> [ -> shift (target=10, len=0)
actionsTable[67627] = 70; // 'state 264' -> async -> shift (target=35, len=0)
actionsTable[67628] = 72; // 'state 264' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 67631, 67633); // 'state 264' -> get..set -> shift (target=403, len=0)
actionsTable[67633] = 74; // 'state 264' -> class -> shift (target=37, len=0)
actionsTable[67638] = 28; // 'state 264' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 67643, 67645); // 'state 264' -> void..typeof -> shift (target=15, len=0)
actionsTable[67646] = 32; // 'state 264' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 67653, 67655); // 'state 264' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 67656, 67659); // 'state 264' -> !..delete -> shift (target=15, len=0)
actionsTable[67659] = 34; // 'state 264' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 67663, 67666); // 'state 264' -> number..template_string -> shift (target=399, len=0)
actionsTable[67672] = 36; // 'state 264' -> update_operator -> shift (target=18, len=0)
actionsTable[67673] = 172; // 'state 264' -> identifier -> shift (target=86, len=0)
actionsTable[67674] = 798; // 'state 264' -> regex -> shift (target=399, len=0)
actionsTable[67873] = 656; // 'state 265' -> , -> shift (target=328, len=0)
actionsTable[67895] = 1324; // 'state 265' -> > -> shift (target=662, len=0)
actionsTable[67896] = 506; // 'state 265' -> | -> shift (target=253, len=0)
actionsTable[67897] = 508; // 'state 265' -> & -> shift (target=254, len=0)
actionsTable.fill(798, 68096, 68101); // 'state 266' -> true..super -> shift (target=399, len=0)
actionsTable[68101] = 68; // 'state 266' -> { -> shift (target=34, len=0)
actionsTable[68104] = 4; // 'state 266' -> ( -> shift (target=2, len=0)
actionsTable[68114] = 806; // 'state 266' -> of -> shift (target=403, len=0)
actionsTable[68128] = 806; // 'state 266' -> from -> shift (target=403, len=0)
actionsTable[68129] = 1421; // 'state 266' -> , -> reduce (target=198, len=2)
actionsTable[68132] = 806; // 'state 266' -> type -> shift (target=403, len=0)
actionsTable[68136] = 48; // 'state 266' -> ... -> shift (target=24, len=0)
actionsTable[68137] = 20; // 'state 266' -> [ -> shift (target=10, len=0)
actionsTable[68138] = 1421; // 'state 266' -> ] -> reduce (target=198, len=2)
actionsTable[68139] = 70; // 'state 266' -> async -> shift (target=35, len=0)
actionsTable[68140] = 72; // 'state 266' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 68143, 68145); // 'state 266' -> get..set -> shift (target=403, len=0)
actionsTable[68145] = 74; // 'state 266' -> class -> shift (target=37, len=0)
actionsTable[68150] = 28; // 'state 266' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 68155, 68157); // 'state 266' -> void..typeof -> shift (target=15, len=0)
actionsTable[68158] = 32; // 'state 266' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 68165, 68167); // 'state 266' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 68168, 68171); // 'state 266' -> !..delete -> shift (target=15, len=0)
actionsTable[68171] = 34; // 'state 266' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 68175, 68178); // 'state 266' -> number..template_string -> shift (target=399, len=0)
actionsTable[68184] = 36; // 'state 266' -> update_operator -> shift (target=18, len=0)
actionsTable[68185] = 818; // 'state 266' -> identifier -> shift (target=409, len=0)
actionsTable[68186] = 798; // 'state 266' -> regex -> shift (target=399, len=0)
actionsTable[68407] = 1332; // 'state 267' -> > -> shift (target=666, len=0)
actionsTable[68441] = 908; // 'state 267' -> identifier -> shift (target=454, len=0)
actionsTable[68613] = 80; // 'state 268' -> { -> shift (target=40, len=0)
actionsTable[68635] = 164; // 'state 268' -> : -> shift (target=82, len=0)
actionsTable[68661] = 164; // 'state 268' -> ?: -> shift (target=82, len=0)
actionsTable[68869] = 80; // 'state 269' -> { -> shift (target=40, len=0)
actionsTable[69128] = 86; // 'state 270' -> ( -> shift (target=43, len=0)
actionsTable[69129] = 1338; // 'state 270' -> ) -> shift (target=669, len=0)
actionsTable[69139] = 88; // 'state 270' -> in -> shift (target=44, len=0)
actionsTable[69154] = 90; // 'state 270' -> * -> shift (target=45, len=0)
actionsTable[69155] = 92; // 'state 270' -> as -> shift (target=46, len=0)
actionsTable[69161] = 94; // 'state 270' -> [ -> shift (target=47, len=0)
actionsTable.fill(88, 69174, 69176); // 'state 270' -> <..> -> shift (target=44, len=0)
actionsTable[69176] = 96; // 'state 270' -> | -> shift (target=48, len=0)
actionsTable[69177] = 98; // 'state 270' -> & -> shift (target=49, len=0)
actionsTable[69183] = 100; // 'state 270' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 69184, 69186); // 'state 270' -> ||..?? -> shift (target=51, len=0)
actionsTable[69186] = 104; // 'state 270' -> && -> shift (target=52, len=0)
actionsTable[69187] = 106; // 'state 270' -> ^ -> shift (target=53, len=0)
actionsTable[69188] = 88; // 'state 270' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 69189, 69191); // 'state 270' -> +..- -> shift (target=54, len=0)
actionsTable[69191] = 90; // 'state 270' -> ** -> shift (target=45, len=0)
actionsTable[69196] = 110; // 'state 270' -> ?. -> shift (target=55, len=0)
actionsTable[69197] = 864; // 'state 270' -> . -> shift (target=432, len=0)
actionsTable[69204] = 112; // 'state 270' -> equality_operator -> shift (target=56, len=0)
actionsTable[69205] = 88; // 'state 270' -> relational_operator -> shift (target=44, len=0)
actionsTable[69206] = 114; // 'state 270' -> shift_operator -> shift (target=57, len=0)
actionsTable[69207] = 90; // 'state 270' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[69208] = 866; // 'state 270' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(798, 69376, 69381); // 'state 271' -> true..super -> shift (target=399, len=0)
actionsTable[69381] = 68; // 'state 271' -> { -> shift (target=34, len=0)
actionsTable[69384] = 4; // 'state 271' -> ( -> shift (target=2, len=0)
actionsTable[69385] = 664; // 'state 271' -> ) -> shift (target=332, len=0)
actionsTable[69394] = 806; // 'state 271' -> of -> shift (target=403, len=0)
actionsTable[69408] = 806; // 'state 271' -> from -> shift (target=403, len=0)
actionsTable[69412] = 806; // 'state 271' -> type -> shift (target=403, len=0)
actionsTable[69417] = 20; // 'state 271' -> [ -> shift (target=10, len=0)
actionsTable[69419] = 70; // 'state 271' -> async -> shift (target=35, len=0)
actionsTable[69420] = 72; // 'state 271' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 69423, 69425); // 'state 271' -> get..set -> shift (target=403, len=0)
actionsTable[69425] = 74; // 'state 271' -> class -> shift (target=37, len=0)
actionsTable[69430] = 28; // 'state 271' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 69435, 69437); // 'state 271' -> void..typeof -> shift (target=15, len=0)
actionsTable[69438] = 32; // 'state 271' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 69445, 69447); // 'state 271' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 69448, 69451); // 'state 271' -> !..delete -> shift (target=15, len=0)
actionsTable[69451] = 34; // 'state 271' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 69455, 69458); // 'state 271' -> number..template_string -> shift (target=399, len=0)
actionsTable[69464] = 36; // 'state 271' -> update_operator -> shift (target=18, len=0)
actionsTable[69465] = 818; // 'state 271' -> identifier -> shift (target=409, len=0)
actionsTable[69466] = 798; // 'state 271' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 69632, 69637); // 'state 272' -> true..super -> shift (target=399, len=0)
actionsTable[69637] = 2; // 'state 272' -> { -> shift (target=1, len=0)
actionsTable[69639] = 800; // 'state 272' -> if -> shift (target=400, len=0)
actionsTable[69640] = 4; // 'state 272' -> ( -> shift (target=2, len=0)
actionsTable[69643] = 802; // 'state 272' -> while -> shift (target=401, len=0)
actionsTable[69644] = 6; // 'state 272' -> do -> shift (target=3, len=0)
actionsTable[69646] = 804; // 'state 272' -> for -> shift (target=402, len=0)
actionsTable.fill(8, 69647, 69650); // 'state 272' -> const..var -> shift (target=4, len=0)
actionsTable[69650] = 806; // 'state 272' -> of -> shift (target=403, len=0)
actionsTable[69652] = 10; // 'state 272' -> return -> shift (target=5, len=0)
actionsTable[69653] = 12; // 'state 272' -> throw -> shift (target=6, len=0)
actionsTable[69654] = 14; // 'state 272' -> try -> shift (target=7, len=0)
actionsTable[69657] = 808; // 'state 272' -> switch -> shift (target=404, len=0)
actionsTable[69661] = 810; // 'state 272' -> break -> shift (target=405, len=0)
actionsTable[69662] = 812; // 'state 272' -> continue -> shift (target=406, len=0)
actionsTable[69663] = 16; // 'state 272' -> import -> shift (target=8, len=0)
actionsTable[69664] = 806; // 'state 272' -> from -> shift (target=403, len=0)
actionsTable[69668] = 814; // 'state 272' -> type -> shift (target=407, len=0)
actionsTable[69669] = 18; // 'state 272' -> export -> shift (target=9, len=0)
actionsTable[69673] = 20; // 'state 272' -> [ -> shift (target=10, len=0)
actionsTable[69675] = 22; // 'state 272' -> async -> shift (target=11, len=0)
actionsTable[69676] = 24; // 'state 272' -> function -> shift (target=12, len=0)
actionsTable.fill(806, 69679, 69681); // 'state 272' -> get..set -> shift (target=403, len=0)
actionsTable[69681] = 26; // 'state 272' -> class -> shift (target=13, len=0)
actionsTable[69684] = 816; // 'state 272' -> interface -> shift (target=408, len=0)
actionsTable[69686] = 28; // 'state 272' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 69691, 69693); // 'state 272' -> void..typeof -> shift (target=15, len=0)
actionsTable[69694] = 32; // 'state 272' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 69701, 69703); // 'state 272' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 69704, 69707); // 'state 272' -> !..delete -> shift (target=15, len=0)
actionsTable[69707] = 34; // 'state 272' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 69711, 69714); // 'state 272' -> number..template_string -> shift (target=399, len=0)
actionsTable[69720] = 36; // 'state 272' -> update_operator -> shift (target=18, len=0)
actionsTable[69721] = 818; // 'state 272' -> identifier -> shift (target=409, len=0)
actionsTable[69722] = 798; // 'state 272' -> regex -> shift (target=399, len=0)
actionsTable[69896] = 86; // 'state 273' -> ( -> shift (target=43, len=0)
actionsTable[69897] = 664; // 'state 273' -> ) -> shift (target=332, len=0)
actionsTable[69907] = 88; // 'state 273' -> in -> shift (target=44, len=0)
actionsTable[69922] = 90; // 'state 273' -> * -> shift (target=45, len=0)
actionsTable[69923] = 92; // 'state 273' -> as -> shift (target=46, len=0)
actionsTable[69929] = 94; // 'state 273' -> [ -> shift (target=47, len=0)
actionsTable.fill(88, 69942, 69944); // 'state 273' -> <..> -> shift (target=44, len=0)
actionsTable[69944] = 96; // 'state 273' -> | -> shift (target=48, len=0)
actionsTable[69945] = 98; // 'state 273' -> & -> shift (target=49, len=0)
actionsTable[69951] = 100; // 'state 273' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 69952, 69954); // 'state 273' -> ||..?? -> shift (target=51, len=0)
actionsTable[69954] = 104; // 'state 273' -> && -> shift (target=52, len=0)
actionsTable[69955] = 106; // 'state 273' -> ^ -> shift (target=53, len=0)
actionsTable[69956] = 88; // 'state 273' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 69957, 69959); // 'state 273' -> +..- -> shift (target=54, len=0)
actionsTable[69959] = 90; // 'state 273' -> ** -> shift (target=45, len=0)
actionsTable[69964] = 110; // 'state 273' -> ?. -> shift (target=55, len=0)
actionsTable[69965] = 864; // 'state 273' -> . -> shift (target=432, len=0)
actionsTable[69972] = 112; // 'state 273' -> equality_operator -> shift (target=56, len=0)
actionsTable[69973] = 88; // 'state 273' -> relational_operator -> shift (target=44, len=0)
actionsTable[69974] = 114; // 'state 273' -> shift_operator -> shift (target=57, len=0)
actionsTable[69975] = 90; // 'state 273' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[69976] = 866; // 'state 273' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(798, 70144, 70149); // 'state 274' -> true..super -> shift (target=399, len=0)
actionsTable[70149] = 68; // 'state 274' -> { -> shift (target=34, len=0)
actionsTable[70152] = 4; // 'state 274' -> ( -> shift (target=2, len=0)
actionsTable[70162] = 806; // 'state 274' -> of -> shift (target=403, len=0)
actionsTable[70176] = 806; // 'state 274' -> from -> shift (target=403, len=0)
actionsTable[70180] = 806; // 'state 274' -> type -> shift (target=403, len=0)
actionsTable[70185] = 20; // 'state 274' -> [ -> shift (target=10, len=0)
actionsTable[70187] = 70; // 'state 274' -> async -> shift (target=35, len=0)
actionsTable[70188] = 72; // 'state 274' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 70191, 70193); // 'state 274' -> get..set -> shift (target=403, len=0)
actionsTable[70193] = 74; // 'state 274' -> class -> shift (target=37, len=0)
actionsTable[70198] = 28; // 'state 274' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 70203, 70205); // 'state 274' -> void..typeof -> shift (target=15, len=0)
actionsTable[70206] = 32; // 'state 274' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 70213, 70215); // 'state 274' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 70216, 70219); // 'state 274' -> !..delete -> shift (target=15, len=0)
actionsTable[70219] = 34; // 'state 274' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 70223, 70226); // 'state 274' -> number..template_string -> shift (target=399, len=0)
actionsTable[70232] = 36; // 'state 274' -> update_operator -> shift (target=18, len=0)
actionsTable[70233] = 818; // 'state 274' -> identifier -> shift (target=409, len=0)
actionsTable[70234] = 798; // 'state 274' -> regex -> shift (target=399, len=0)
actionsTable[70408] = 86; // 'state 275' -> ( -> shift (target=43, len=0)
actionsTable[70413] = 670; // 'state 275' -> ; -> shift (target=335, len=0)
actionsTable[70419] = 88; // 'state 275' -> in -> shift (target=44, len=0)
actionsTable[70434] = 90; // 'state 275' -> * -> shift (target=45, len=0)
actionsTable[70435] = 92; // 'state 275' -> as -> shift (target=46, len=0)
actionsTable[70441] = 94; // 'state 275' -> [ -> shift (target=47, len=0)
actionsTable.fill(88, 70454, 70456); // 'state 275' -> <..> -> shift (target=44, len=0)
actionsTable[70456] = 96; // 'state 275' -> | -> shift (target=48, len=0)
actionsTable[70457] = 98; // 'state 275' -> & -> shift (target=49, len=0)
actionsTable[70463] = 100; // 'state 275' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 70464, 70466); // 'state 275' -> ||..?? -> shift (target=51, len=0)
actionsTable[70466] = 104; // 'state 275' -> && -> shift (target=52, len=0)
actionsTable[70467] = 106; // 'state 275' -> ^ -> shift (target=53, len=0)
actionsTable[70468] = 88; // 'state 275' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 70469, 70471); // 'state 275' -> +..- -> shift (target=54, len=0)
actionsTable[70471] = 90; // 'state 275' -> ** -> shift (target=45, len=0)
actionsTable[70476] = 110; // 'state 275' -> ?. -> shift (target=55, len=0)
actionsTable[70477] = 864; // 'state 275' -> . -> shift (target=432, len=0)
actionsTable[70484] = 112; // 'state 275' -> equality_operator -> shift (target=56, len=0)
actionsTable[70485] = 88; // 'state 275' -> relational_operator -> shift (target=44, len=0)
actionsTable[70486] = 114; // 'state 275' -> shift_operator -> shift (target=57, len=0)
actionsTable[70487] = 90; // 'state 275' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[70488] = 866; // 'state 275' -> update_operator -> shift (target=433, len=0)
actionsTable[70664] = 138; // 'state 276' -> ( -> shift (target=69, len=0)
actionsTable[70917] = 146; // 'state 277' -> { -> shift (target=73, len=0)
actionsTable[71177] = 674; // 'state 278' -> ) -> shift (target=337, len=0)
actionsTable[71195] = 164; // 'state 278' -> : -> shift (target=82, len=0)
actionsTable[71221] = 164; // 'state 278' -> ?: -> shift (target=82, len=0)
actionsTable[71430] = 1346; // 'state 279' -> } -> shift (target=673, len=0)
actionsTable[71450] = 676; // 'state 279' -> case -> shift (target=338, len=0)
actionsTable[71452] = 1348; // 'state 279' -> default -> shift (target=674, len=0)
actionsTable.fill(2931, 71680, 71688); // 'state 280' -> true..if -> reduce (target=185, len=5)
actionsTable[71688] = 86; // 'state 280' -> ( -> shift (target=43, len=0)
actionsTable.fill(2931, 71689, 71699); // 'state 280' -> )..of -> reduce (target=185, len=5)
actionsTable[71699] = 88; // 'state 280' -> in -> shift (target=44, len=0)
actionsTable.fill(2931, 71700, 71703); // 'state 280' -> return..try -> reduce (target=185, len=5)
actionsTable.fill(2931, 71705, 71714); // 'state 280' -> switch.., -> reduce (target=185, len=5)
actionsTable[71714] = 90; // 'state 280' -> * -> shift (target=45, len=0)
actionsTable[71715] = 92; // 'state 280' -> as -> shift (target=46, len=0)
actionsTable.fill(2931, 71716, 71718); // 'state 280' -> type..export -> reduce (target=185, len=5)
actionsTable[71721] = 94; // 'state 280' -> [ -> shift (target=47, len=0)
actionsTable.fill(2931, 71722, 71730); // 'state 280' -> ]..class -> reduce (target=185, len=5)
actionsTable.fill(2931, 71731, 71733); // 'state 280' -> implements..interface -> reduce (target=185, len=5)
actionsTable.fill(88, 71734, 71736); // 'state 280' -> <..> -> shift (target=44, len=0)
actionsTable[71736] = 96; // 'state 280' -> | -> shift (target=48, len=0)
actionsTable[71737] = 98; // 'state 280' -> & -> shift (target=49, len=0)
actionsTable.fill(2931, 71739, 71741); // 'state 280' -> void..typeof -> reduce (target=185, len=5)
actionsTable[71742] = 2931; // 'state 280' -> new -> reduce (target=185, len=5)
actionsTable[71743] = 100; // 'state 280' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 71744, 71746); // 'state 280' -> ||..?? -> shift (target=51, len=0)
actionsTable[71746] = 104; // 'state 280' -> && -> shift (target=52, len=0)
actionsTable[71747] = 106; // 'state 280' -> ^ -> shift (target=53, len=0)
actionsTable[71748] = 88; // 'state 280' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 71749, 71751); // 'state 280' -> +..- -> shift (target=54, len=0)
actionsTable[71751] = 90; // 'state 280' -> ** -> shift (target=45, len=0)
actionsTable.fill(2931, 71752, 71756); // 'state 280' -> !..await -> reduce (target=185, len=5)
actionsTable[71756] = 110; // 'state 280' -> ?. -> shift (target=55, len=0)
actionsTable[71757] = 864; // 'state 280' -> . -> shift (target=432, len=0)
actionsTable.fill(2931, 71758, 71763); // 'state 280' -> private_property_identifier..accessibility_modifier -> reduce (target=185, len=5)
actionsTable[71764] = 112; // 'state 280' -> equality_operator -> shift (target=56, len=0)
actionsTable[71765] = 88; // 'state 280' -> relational_operator -> shift (target=44, len=0)
actionsTable[71766] = 114; // 'state 280' -> shift_operator -> shift (target=57, len=0)
actionsTable[71767] = 90; // 'state 280' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[71768] = 866; // 'state 280' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(2931, 71769, 71772); // 'state 280' -> identifier..@par-gen.EOF -> reduce (target=185, len=5)
actionsTable[71942] = 1354; // 'state 281' -> } -> shift (target=677, len=0)
actionsTable[71954] = 806; // 'state 281' -> of -> shift (target=403, len=0)
actionsTable[71968] = 806; // 'state 281' -> from -> shift (target=403, len=0)
actionsTable[71972] = 806; // 'state 281' -> type -> shift (target=403, len=0)
actionsTable[71976] = 684; // 'state 281' -> ... -> shift (target=342, len=0)
actionsTable[71977] = 198; // 'state 281' -> [ -> shift (target=99, len=0)
actionsTable[71979] = 226; // 'state 281' -> async -> shift (target=113, len=0)
actionsTable.fill(54, 71983, 71985); // 'state 281' -> get..set -> shift (target=27, len=0)
actionsTable.fill(848, 72015, 72017); // 'state 281' -> number..string -> shift (target=424, len=0)
actionsTable[72025] = 1356; // 'state 281' -> identifier -> shift (target=678, len=0)
actionsTable[72197] = 562; // 'state 282' -> { -> shift (target=281, len=0)
actionsTable[72233] = 566; // 'state 282' -> [ -> shift (target=283, len=0)
actionsTable[72281] = 682; // 'state 282' -> identifier -> shift (target=341, len=0)
actionsTable.fill(798, 72448, 72453); // 'state 283' -> true..super -> shift (target=399, len=0)
actionsTable[72453] = 562; // 'state 283' -> { -> shift (target=281, len=0)
actionsTable[72456] = 4; // 'state 283' -> ( -> shift (target=2, len=0)
actionsTable[72466] = 806; // 'state 283' -> of -> shift (target=403, len=0)
actionsTable[72480] = 806; // 'state 283' -> from -> shift (target=403, len=0)
actionsTable[72481] = 688; // 'state 283' -> , -> shift (target=344, len=0)
actionsTable[72484] = 806; // 'state 283' -> type -> shift (target=403, len=0)
actionsTable[72488] = 690; // 'state 283' -> ... -> shift (target=345, len=0)
actionsTable[72489] = 566; // 'state 283' -> [ -> shift (target=283, len=0)
actionsTable[72490] = 1358; // 'state 283' -> ] -> shift (target=679, len=0)
actionsTable[72491] = 70; // 'state 283' -> async -> shift (target=35, len=0)
actionsTable[72492] = 72; // 'state 283' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 72495, 72497); // 'state 283' -> get..set -> shift (target=403, len=0)
actionsTable[72497] = 74; // 'state 283' -> class -> shift (target=37, len=0)
actionsTable[72502] = 28; // 'state 283' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 72507, 72509); // 'state 283' -> void..typeof -> shift (target=15, len=0)
actionsTable[72510] = 32; // 'state 283' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 72517, 72519); // 'state 283' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 72520, 72523); // 'state 283' -> !..delete -> shift (target=15, len=0)
actionsTable[72523] = 34; // 'state 283' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 72527, 72530); // 'state 283' -> number..template_string -> shift (target=399, len=0)
actionsTable[72536] = 36; // 'state 283' -> update_operator -> shift (target=18, len=0)
actionsTable[72537] = 1360; // 'state 283' -> identifier -> shift (target=680, len=0)
actionsTable[72538] = 798; // 'state 283' -> regex -> shift (target=399, len=0)
actionsTable[72713] = 767; // 'state 284' -> ) -> reduce (target=127, len=1)
actionsTable[72731] = 164; // 'state 284' -> : -> shift (target=82, len=0)
actionsTable[72737] = 767; // 'state 284' -> , -> reduce (target=127, len=1)
actionsTable[72743] = 767; // 'state 284' -> = -> reduce (target=127, len=1)
actionsTable[72757] = 164; // 'state 284' -> ?: -> shift (target=82, len=0)
actionsTable.fill(942, 72960, 72963); // 'state 285' -> true..null -> shift (target=471, len=0)
actionsTable[72965] = 262; // 'state 285' -> { -> shift (target=131, len=0)
actionsTable[72968] = 264; // 'state 285' -> ( -> shift (target=132, len=0)
actionsTable[73001] = 266; // 'state 285' -> [ -> shift (target=133, len=0)
actionsTable[73014] = 28; // 'state 285' -> < -> shift (target=14, len=0)
actionsTable[73016] = 268; // 'state 285' -> | -> shift (target=134, len=0)
actionsTable[73019] = 942; // 'state 285' -> void -> shift (target=471, len=0)
actionsTable[73020] = 944; // 'state 285' -> typeof -> shift (target=472, len=0)
actionsTable.fill(942, 73039, 73041); // 'state 285' -> number..string -> shift (target=471, len=0)
actionsTable[73049] = 270; // 'state 285' -> identifier -> shift (target=135, len=0)
actionsTable[73243] = 164; // 'state 286' -> : -> shift (target=82, len=0)
actionsTable[73269] = 164; // 'state 286' -> ?: -> shift (target=82, len=0)
actionsTable[73480] = 138; // 'state 287' -> ( -> shift (target=69, len=0)
actionsTable[73499] = 692; // 'state 287' -> : -> shift (target=346, len=0)
actionsTable[73525] = 164; // 'state 287' -> ?: -> shift (target=82, len=0)
actionsTable[73526] = 28; // 'state 287' -> < -> shift (target=14, len=0)
actionsTable.fill(1364, 73728, 73731); // 'state 288' -> true..null -> shift (target=682, len=0)
actionsTable.fill(798, 73731, 73733); // 'state 288' -> this..super -> shift (target=399, len=0)
actionsTable[73733] = 420; // 'state 288' -> { -> shift (target=210, len=0)
actionsTable[73736] = 576; // 'state 288' -> ( -> shift (target=288, len=0)
actionsTable[73737] = 698; // 'state 288' -> ) -> shift (target=349, len=0)
actionsTable[73746] = 806; // 'state 288' -> of -> shift (target=403, len=0)
actionsTable[73760] = 806; // 'state 288' -> from -> shift (target=403, len=0)
actionsTable[73764] = 806; // 'state 288' -> type -> shift (target=403, len=0)
actionsTable[73768] = 170; // 'state 288' -> ... -> shift (target=85, len=0)
actionsTable[73769] = 424; // 'state 288' -> [ -> shift (target=212, len=0)
actionsTable[73771] = 70; // 'state 288' -> async -> shift (target=35, len=0)
actionsTable[73772] = 72; // 'state 288' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 73775, 73777); // 'state 288' -> get..set -> shift (target=403, len=0)
actionsTable[73777] = 74; // 'state 288' -> class -> shift (target=37, len=0)
actionsTable[73782] = 28; // 'state 288' -> < -> shift (target=14, len=0)
actionsTable[73784] = 268; // 'state 288' -> | -> shift (target=134, len=0)
actionsTable[73787] = 578; // 'state 288' -> void -> shift (target=289, len=0)
actionsTable[73788] = 580; // 'state 288' -> typeof -> shift (target=290, len=0)
actionsTable[73790] = 32; // 'state 288' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 73797, 73799); // 'state 288' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 73800, 73803); // 'state 288' -> !..delete -> shift (target=15, len=0)
actionsTable[73803] = 34; // 'state 288' -> await -> shift (target=17, len=0)
actionsTable.fill(1364, 73807, 73809); // 'state 288' -> number..string -> shift (target=682, len=0)
actionsTable[73809] = 798; // 'state 288' -> template_string -> shift (target=399, len=0)
actionsTable[73816] = 36; // 'state 288' -> update_operator -> shift (target=18, len=0)
actionsTable[73817] = 700; // 'state 288' -> identifier -> shift (target=350, len=0)
actionsTable[73818] = 798; // 'state 288' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 73984, 73989); // 'state 289' -> true..super -> shift (target=399, len=0)
actionsTable[73989] = 68; // 'state 289' -> { -> shift (target=34, len=0)
actionsTable[73990] = 837; // 'state 289' -> } -> reduce (target=162, len=1)
actionsTable[73992] = 4; // 'state 289' -> ( -> shift (target=2, len=0)
actionsTable[73993] = 837; // 'state 289' -> ) -> reduce (target=162, len=1)
actionsTable[73997] = 837; // 'state 289' -> ; -> reduce (target=162, len=1)
actionsTable[74002] = 806; // 'state 289' -> of -> shift (target=403, len=0)
actionsTable[74016] = 806; // 'state 289' -> from -> shift (target=403, len=0)
actionsTable[74017] = 837; // 'state 289' -> , -> reduce (target=162, len=1)
actionsTable[74020] = 806; // 'state 289' -> type -> shift (target=403, len=0)
actionsTable[74025] = 20; // 'state 289' -> [ -> shift (target=10, len=0)
actionsTable[74026] = 837; // 'state 289' -> ] -> reduce (target=162, len=1)
actionsTable[74027] = 70; // 'state 289' -> async -> shift (target=35, len=0)
actionsTable[74028] = 72; // 'state 289' -> function -> shift (target=36, len=0)
actionsTable[74030] = 837; // 'state 289' -> readonly -> reduce (target=162, len=1)
actionsTable.fill(806, 74031, 74033); // 'state 289' -> get..set -> shift (target=403, len=0)
actionsTable[74033] = 74; // 'state 289' -> class -> shift (target=37, len=0)
actionsTable[74038] = 28; // 'state 289' -> < -> shift (target=14, len=0)
actionsTable.fill(837, 74040, 74042); // 'state 289' -> |..& -> reduce (target=162, len=1)
actionsTable.fill(30, 74043, 74045); // 'state 289' -> void..typeof -> shift (target=15, len=0)
actionsTable[74046] = 32; // 'state 289' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 74053, 74055); // 'state 289' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 74056, 74059); // 'state 289' -> !..delete -> shift (target=15, len=0)
actionsTable[74059] = 34; // 'state 289' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 74063, 74066); // 'state 289' -> number..template_string -> shift (target=399, len=0)
actionsTable[74072] = 36; // 'state 289' -> update_operator -> shift (target=18, len=0)
actionsTable[74073] = 818; // 'state 289' -> identifier -> shift (target=409, len=0)
actionsTable[74074] = 798; // 'state 289' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 74240, 74245); // 'state 290' -> true..super -> shift (target=399, len=0)
actionsTable[74245] = 68; // 'state 290' -> { -> shift (target=34, len=0)
actionsTable[74248] = 4; // 'state 290' -> ( -> shift (target=2, len=0)
actionsTable[74258] = 806; // 'state 290' -> of -> shift (target=403, len=0)
actionsTable[74272] = 806; // 'state 290' -> from -> shift (target=403, len=0)
actionsTable[74276] = 806; // 'state 290' -> type -> shift (target=403, len=0)
actionsTable[74281] = 20; // 'state 290' -> [ -> shift (target=10, len=0)
actionsTable[74283] = 70; // 'state 290' -> async -> shift (target=35, len=0)
actionsTable[74284] = 72; // 'state 290' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 74287, 74289); // 'state 290' -> get..set -> shift (target=403, len=0)
actionsTable[74289] = 74; // 'state 290' -> class -> shift (target=37, len=0)
actionsTable[74294] = 28; // 'state 290' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 74299, 74301); // 'state 290' -> void..typeof -> shift (target=15, len=0)
actionsTable[74302] = 32; // 'state 290' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 74309, 74311); // 'state 290' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 74312, 74315); // 'state 290' -> !..delete -> shift (target=15, len=0)
actionsTable[74315] = 34; // 'state 290' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 74319, 74322); // 'state 290' -> number..template_string -> shift (target=399, len=0)
actionsTable[74328] = 36; // 'state 290' -> update_operator -> shift (target=18, len=0)
actionsTable[74329] = 1366; // 'state 290' -> identifier -> shift (target=683, len=0)
actionsTable[74330] = 798; // 'state 290' -> regex -> shift (target=399, len=0)
actionsTable[74502] = 837; // 'state 291' -> } -> reduce (target=162, len=1)
actionsTable[74504] = 869; // 'state 291' -> ( -> reduce (target=178, len=1)
actionsTable[74505] = 837; // 'state 291' -> ) -> reduce (target=162, len=1)
actionsTable[74509] = 837; // 'state 291' -> ; -> reduce (target=162, len=1)
actionsTable[74514] = 837; // 'state 291' -> of -> reduce (target=162, len=1)
actionsTable[74515] = 869; // 'state 291' -> in -> reduce (target=178, len=1)
actionsTable.fill(837, 74528, 74530); // 'state 291' -> from.., -> reduce (target=162, len=1)
actionsTable.fill(869, 74530, 74532); // 'state 291' -> *..as -> reduce (target=178, len=1)
actionsTable[74532] = 837; // 'state 291' -> type -> reduce (target=162, len=1)
actionsTable[74535] = 875; // 'state 291' -> = -> reduce (target=181, len=1)
actionsTable.fill(837, 74537, 74540); // 'state 291' -> [..async -> reduce (target=162, len=1)
actionsTable.fill(837, 74542, 74545); // 'state 291' -> readonly..set -> reduce (target=162, len=1)
actionsTable[74550] = 366; // 'state 291' -> < -> shift (target=183, len=0)
actionsTable[74551] = 869; // 'state 291' -> > -> reduce (target=178, len=1)
actionsTable.fill(837, 74552, 74554); // 'state 291' -> |..& -> reduce (target=162, len=1)
actionsTable[74554] = 162; // 'state 291' -> => -> shift (target=81, len=0)
actionsTable[74557] = 432; // 'state 291' -> is -> shift (target=216, len=0)
actionsTable[74558] = 837; // 'state 291' -> new -> reduce (target=162, len=1)
actionsTable.fill(869, 74559, 74568); // 'state 291' -> ?..** -> reduce (target=178, len=1)
actionsTable.fill(869, 74572, 74574); // 'state 291' -> ?.... -> reduce (target=178, len=1)
actionsTable.fill(837, 74575, 74577); // 'state 291' -> number..string -> reduce (target=162, len=1)
actionsTable[74579] = 875; // 'state 291' -> compound_assignment_operator -> reduce (target=181, len=1)
actionsTable.fill(869, 74580, 74585); // 'state 291' -> equality_operator..update_operator -> reduce (target=178, len=1)
actionsTable[74585] = 837; // 'state 291' -> identifier -> reduce (target=162, len=1)
actionsTable[74779] = 164; // 'state 292' -> : -> shift (target=82, len=0)
actionsTable[74805] = 164; // 'state 292' -> ?: -> shift (target=82, len=0)
actionsTable[74810] = 702; // 'state 292' -> => -> shift (target=351, len=0)
actionsTable[75016] = 418; // 'state 293' -> ( -> shift (target=209, len=0)
actionsTable.fill(942, 75264, 75267); // 'state 294' -> true..null -> shift (target=471, len=0)
actionsTable[75269] = 262; // 'state 294' -> { -> shift (target=131, len=0)
actionsTable[75272] = 264; // 'state 294' -> ( -> shift (target=132, len=0)
actionsTable[75305] = 266; // 'state 294' -> [ -> shift (target=133, len=0)
actionsTable[75306] = 1368; // 'state 294' -> ] -> shift (target=684, len=0)
actionsTable[75318] = 28; // 'state 294' -> < -> shift (target=14, len=0)
actionsTable[75320] = 268; // 'state 294' -> | -> shift (target=134, len=0)
actionsTable[75323] = 942; // 'state 294' -> void -> shift (target=471, len=0)
actionsTable[75324] = 944; // 'state 294' -> typeof -> shift (target=472, len=0)
actionsTable.fill(942, 75343, 75345); // 'state 294' -> number..string -> shift (target=471, len=0)
actionsTable[75353] = 270; // 'state 294' -> identifier -> shift (target=135, len=0)
actionsTable.fill(798, 75520, 75525); // 'state 295' -> true..super -> shift (target=399, len=0)
actionsTable[75525] = 68; // 'state 295' -> { -> shift (target=34, len=0)
actionsTable[75528] = 4; // 'state 295' -> ( -> shift (target=2, len=0)
actionsTable[75538] = 806; // 'state 295' -> of -> shift (target=403, len=0)
actionsTable[75552] = 806; // 'state 295' -> from -> shift (target=403, len=0)
actionsTable[75556] = 806; // 'state 295' -> type -> shift (target=403, len=0)
actionsTable[75561] = 20; // 'state 295' -> [ -> shift (target=10, len=0)
actionsTable[75563] = 70; // 'state 295' -> async -> shift (target=35, len=0)
actionsTable[75564] = 72; // 'state 295' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 75567, 75569); // 'state 295' -> get..set -> shift (target=403, len=0)
actionsTable[75569] = 74; // 'state 295' -> class -> shift (target=37, len=0)
actionsTable[75574] = 28; // 'state 295' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 75579, 75581); // 'state 295' -> void..typeof -> shift (target=15, len=0)
actionsTable[75582] = 32; // 'state 295' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 75589, 75591); // 'state 295' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 75592, 75595); // 'state 295' -> !..delete -> shift (target=15, len=0)
actionsTable[75595] = 34; // 'state 295' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 75599, 75602); // 'state 295' -> number..template_string -> shift (target=399, len=0)
actionsTable[75608] = 36; // 'state 295' -> update_operator -> shift (target=18, len=0)
actionsTable[75609] = 1374; // 'state 295' -> identifier -> shift (target=687, len=0)
actionsTable[75610] = 798; // 'state 295' -> regex -> shift (target=399, len=0)
actionsTable[75803] = 164; // 'state 296' -> : -> shift (target=82, len=0)
actionsTable[75829] = 164; // 'state 296' -> ?: -> shift (target=82, len=0)
actionsTable[76038] = 1371; // 'state 297' -> } -> reduce (target=173, len=2)
actionsTable[76045] = 1371; // 'state 297' -> ; -> reduce (target=173, len=2)
actionsTable[76050] = 1371; // 'state 297' -> of -> reduce (target=173, len=2)
actionsTable[76059] = 164; // 'state 297' -> : -> shift (target=82, len=0)
actionsTable.fill(1371, 76064, 76066); // 'state 297' -> from.., -> reduce (target=173, len=2)
actionsTable[76068] = 1371; // 'state 297' -> type -> reduce (target=173, len=2)
actionsTable[76073] = 1371; // 'state 297' -> [ -> reduce (target=173, len=2)
actionsTable[76075] = 1371; // 'state 297' -> async -> reduce (target=173, len=2)
actionsTable.fill(1371, 76078, 76081); // 'state 297' -> readonly..set -> reduce (target=173, len=2)
actionsTable[76085] = 164; // 'state 297' -> ?: -> shift (target=82, len=0)
actionsTable[76094] = 1371; // 'state 297' -> new -> reduce (target=173, len=2)
actionsTable.fill(1371, 76111, 76113); // 'state 297' -> number..string -> reduce (target=173, len=2)
actionsTable[76121] = 1371; // 'state 297' -> identifier -> reduce (target=173, len=2)
actionsTable[76296] = 138; // 'state 298' -> ( -> shift (target=69, len=0)
actionsTable[76550] = 1373; // 'state 299' -> } -> reduce (target=174, len=2)
actionsTable[76557] = 1373; // 'state 299' -> ; -> reduce (target=174, len=2)
actionsTable[76562] = 1373; // 'state 299' -> of -> reduce (target=174, len=2)
actionsTable[76571] = 164; // 'state 299' -> : -> shift (target=82, len=0)
actionsTable.fill(1373, 76576, 76578); // 'state 299' -> from.., -> reduce (target=174, len=2)
actionsTable[76580] = 1373; // 'state 299' -> type -> reduce (target=174, len=2)
actionsTable[76585] = 1373; // 'state 299' -> [ -> reduce (target=174, len=2)
actionsTable[76587] = 1373; // 'state 299' -> async -> reduce (target=174, len=2)
actionsTable.fill(1373, 76590, 76593); // 'state 299' -> readonly..set -> reduce (target=174, len=2)
actionsTable[76597] = 164; // 'state 299' -> ?: -> shift (target=82, len=0)
actionsTable[76606] = 1373; // 'state 299' -> new -> reduce (target=174, len=2)
actionsTable.fill(1373, 76623, 76625); // 'state 299' -> number..string -> reduce (target=174, len=2)
actionsTable[76633] = 1373; // 'state 299' -> identifier -> reduce (target=174, len=2)
actionsTable[76808] = 138; // 'state 300' -> ( -> shift (target=69, len=0)
actionsTable.fill(798, 77056, 77061); // 'state 301' -> true..super -> shift (target=399, len=0)
actionsTable[77061] = 68; // 'state 301' -> { -> shift (target=34, len=0)
actionsTable[77064] = 4; // 'state 301' -> ( -> shift (target=2, len=0)
actionsTable[77065] = 1380; // 'state 301' -> ) -> shift (target=690, len=0)
actionsTable[77074] = 806; // 'state 301' -> of -> shift (target=403, len=0)
actionsTable[77088] = 806; // 'state 301' -> from -> shift (target=403, len=0)
actionsTable[77092] = 806; // 'state 301' -> type -> shift (target=403, len=0)
actionsTable[77096] = 48; // 'state 301' -> ... -> shift (target=24, len=0)
actionsTable[77097] = 20; // 'state 301' -> [ -> shift (target=10, len=0)
actionsTable[77099] = 70; // 'state 301' -> async -> shift (target=35, len=0)
actionsTable[77100] = 72; // 'state 301' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 77103, 77105); // 'state 301' -> get..set -> shift (target=403, len=0)
actionsTable[77105] = 74; // 'state 301' -> class -> shift (target=37, len=0)
actionsTable[77110] = 28; // 'state 301' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 77115, 77117); // 'state 301' -> void..typeof -> shift (target=15, len=0)
actionsTable[77118] = 32; // 'state 301' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 77125, 77127); // 'state 301' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 77128, 77131); // 'state 301' -> !..delete -> shift (target=15, len=0)
actionsTable[77131] = 34; // 'state 301' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 77135, 77138); // 'state 301' -> number..template_string -> shift (target=399, len=0)
actionsTable[77144] = 36; // 'state 301' -> update_operator -> shift (target=18, len=0)
actionsTable[77145] = 818; // 'state 301' -> identifier -> shift (target=409, len=0)
actionsTable[77146] = 798; // 'state 301' -> regex -> shift (target=399, len=0)
actionsTable[77318] = 1382; // 'state 302' -> } -> shift (target=691, len=0)
actionsTable[77348] = 966; // 'state 302' -> type -> shift (target=483, len=0)
actionsTable[77401] = 968; // 'state 302' -> identifier -> shift (target=484, len=0)
actionsTable[77573] = 80; // 'state 303' -> { -> shift (target=40, len=0)
actionsTable[77581] = 1278; // 'state 303' -> ; -> shift (target=639, len=0)
actionsTable[77595] = 164; // 'state 303' -> : -> shift (target=82, len=0)
actionsTable[77621] = 164; // 'state 303' -> ?: -> shift (target=82, len=0)
actionsTable[77832] = 138; // 'state 304' -> ( -> shift (target=69, len=0)
actionsTable[78085] = 80; // 'state 305' -> { -> shift (target=40, len=0)
actionsTable[78093] = 1278; // 'state 305' -> ; -> shift (target=639, len=0)
actionsTable[78341] = 146; // 'state 306' -> { -> shift (target=73, len=0)
actionsTable.fill(2301, 78592, 78600); // 'state 307' -> true..if -> reduce (target=126, len=4)
actionsTable[78600] = 86; // 'state 307' -> ( -> shift (target=43, len=0)
actionsTable.fill(2301, 78602, 78611); // 'state 307' -> else..of -> reduce (target=126, len=4)
actionsTable[78611] = 88; // 'state 307' -> in -> shift (target=44, len=0)
actionsTable.fill(2301, 78612, 78615); // 'state 307' -> return..try -> reduce (target=126, len=4)
actionsTable.fill(2301, 78617, 78619); // 'state 307' -> switch..case -> reduce (target=126, len=4)
actionsTable.fill(2301, 78620, 78626); // 'state 307' -> default.., -> reduce (target=126, len=4)
actionsTable[78626] = 90; // 'state 307' -> * -> shift (target=45, len=0)
actionsTable[78627] = 92; // 'state 307' -> as -> shift (target=46, len=0)
actionsTable.fill(2301, 78628, 78630); // 'state 307' -> type..export -> reduce (target=126, len=4)
actionsTable[78633] = 94; // 'state 307' -> [ -> shift (target=47, len=0)
actionsTable.fill(2301, 78635, 78637); // 'state 307' -> async..function -> reduce (target=126, len=4)
actionsTable.fill(2301, 78639, 78642); // 'state 307' -> get..class -> reduce (target=126, len=4)
actionsTable[78644] = 2301; // 'state 307' -> interface -> reduce (target=126, len=4)
actionsTable.fill(88, 78646, 78648); // 'state 307' -> <..> -> shift (target=44, len=0)
actionsTable[78648] = 96; // 'state 307' -> | -> shift (target=48, len=0)
actionsTable[78649] = 98; // 'state 307' -> & -> shift (target=49, len=0)
actionsTable.fill(2301, 78651, 78653); // 'state 307' -> void..typeof -> reduce (target=126, len=4)
actionsTable[78654] = 2301; // 'state 307' -> new -> reduce (target=126, len=4)
actionsTable[78655] = 100; // 'state 307' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 78656, 78658); // 'state 307' -> ||..?? -> shift (target=51, len=0)
actionsTable[78658] = 104; // 'state 307' -> && -> shift (target=52, len=0)
actionsTable[78659] = 106; // 'state 307' -> ^ -> shift (target=53, len=0)
actionsTable[78660] = 88; // 'state 307' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 78661, 78663); // 'state 307' -> +..- -> shift (target=54, len=0)
actionsTable[78663] = 90; // 'state 307' -> ** -> shift (target=45, len=0)
actionsTable.fill(2301, 78664, 78668); // 'state 307' -> !..await -> reduce (target=126, len=4)
actionsTable[78668] = 110; // 'state 307' -> ?. -> shift (target=55, len=0)
actionsTable[78669] = 864; // 'state 307' -> . -> shift (target=432, len=0)
actionsTable.fill(2301, 78671, 78674); // 'state 307' -> number..template_string -> reduce (target=126, len=4)
actionsTable[78676] = 112; // 'state 307' -> equality_operator -> shift (target=56, len=0)
actionsTable[78677] = 88; // 'state 307' -> relational_operator -> shift (target=44, len=0)
actionsTable[78678] = 114; // 'state 307' -> shift_operator -> shift (target=57, len=0)
actionsTable[78679] = 90; // 'state 307' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[78680] = 866; // 'state 307' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(2301, 78681, 78684); // 'state 307' -> identifier..@par-gen.EOF -> reduce (target=126, len=4)
actionsTable[78854] = 1394; // 'state 308' -> } -> shift (target=697, len=0)
actionsTable[78866] = 806; // 'state 308' -> of -> shift (target=403, len=0)
actionsTable[78880] = 806; // 'state 308' -> from -> shift (target=403, len=0)
actionsTable[78884] = 806; // 'state 308' -> type -> shift (target=403, len=0)
actionsTable[78888] = 294; // 'state 308' -> ... -> shift (target=147, len=0)
actionsTable[78889] = 198; // 'state 308' -> [ -> shift (target=99, len=0)
actionsTable[78891] = 914; // 'state 308' -> async -> shift (target=457, len=0)
actionsTable.fill(806, 78895, 78897); // 'state 308' -> get..set -> shift (target=403, len=0)
actionsTable.fill(848, 78927, 78929); // 'state 308' -> number..string -> shift (target=424, len=0)
actionsTable[78937] = 992; // 'state 308' -> identifier -> shift (target=496, len=0)
actionsTable[79110] = 1797; // 'state 309' -> } -> reduce (target=130, len=3)
actionsTable[79112] = 86; // 'state 309' -> ( -> shift (target=43, len=0)
actionsTable[79123] = 88; // 'state 309' -> in -> shift (target=44, len=0)
actionsTable[79137] = 1797; // 'state 309' -> , -> reduce (target=130, len=3)
actionsTable[79138] = 90; // 'state 309' -> * -> shift (target=45, len=0)
actionsTable[79139] = 92; // 'state 309' -> as -> shift (target=46, len=0)
actionsTable[79145] = 94; // 'state 309' -> [ -> shift (target=47, len=0)
actionsTable.fill(88, 79158, 79160); // 'state 309' -> <..> -> shift (target=44, len=0)
actionsTable[79160] = 96; // 'state 309' -> | -> shift (target=48, len=0)
actionsTable[79161] = 98; // 'state 309' -> & -> shift (target=49, len=0)
actionsTable[79167] = 100; // 'state 309' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 79168, 79170); // 'state 309' -> ||..?? -> shift (target=51, len=0)
actionsTable[79170] = 104; // 'state 309' -> && -> shift (target=52, len=0)
actionsTable[79171] = 106; // 'state 309' -> ^ -> shift (target=53, len=0)
actionsTable[79172] = 88; // 'state 309' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 79173, 79175); // 'state 309' -> +..- -> shift (target=54, len=0)
actionsTable[79175] = 90; // 'state 309' -> ** -> shift (target=45, len=0)
actionsTable[79180] = 110; // 'state 309' -> ?. -> shift (target=55, len=0)
actionsTable[79181] = 864; // 'state 309' -> . -> shift (target=432, len=0)
actionsTable[79188] = 112; // 'state 309' -> equality_operator -> shift (target=56, len=0)
actionsTable[79189] = 88; // 'state 309' -> relational_operator -> shift (target=44, len=0)
actionsTable[79190] = 114; // 'state 309' -> shift_operator -> shift (target=57, len=0)
actionsTable[79191] = 90; // 'state 309' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[79192] = 866; // 'state 309' -> update_operator -> shift (target=433, len=0)
actionsTable[79365] = 122; // 'state 310' -> { -> shift (target=61, len=0)
actionsTable[79393] = 1287; // 'state 310' -> , -> reduce (target=131, len=2)
actionsTable[79400] = 300; // 'state 310' -> ... -> shift (target=150, len=0)
actionsTable[79401] = 124; // 'state 310' -> [ -> shift (target=62, len=0)
actionsTable[79402] = 1287; // 'state 310' -> ] -> reduce (target=131, len=2)
actionsTable[79449] = 894; // 'state 310' -> identifier -> shift (target=447, len=0)
actionsTable[79624] = 86; // 'state 311' -> ( -> shift (target=43, len=0)
actionsTable[79635] = 88; // 'state 311' -> in -> shift (target=44, len=0)
actionsTable[79649] = 1803; // 'state 311' -> , -> reduce (target=133, len=3)
actionsTable[79650] = 90; // 'state 311' -> * -> shift (target=45, len=0)
actionsTable[79651] = 92; // 'state 311' -> as -> shift (target=46, len=0)
actionsTable[79657] = 94; // 'state 311' -> [ -> shift (target=47, len=0)
actionsTable[79658] = 1803; // 'state 311' -> ] -> reduce (target=133, len=3)
actionsTable.fill(88, 79670, 79672); // 'state 311' -> <..> -> shift (target=44, len=0)
actionsTable[79672] = 96; // 'state 311' -> | -> shift (target=48, len=0)
actionsTable[79673] = 98; // 'state 311' -> & -> shift (target=49, len=0)
actionsTable[79679] = 100; // 'state 311' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 79680, 79682); // 'state 311' -> ||..?? -> shift (target=51, len=0)
actionsTable[79682] = 104; // 'state 311' -> && -> shift (target=52, len=0)
actionsTable[79683] = 106; // 'state 311' -> ^ -> shift (target=53, len=0)
actionsTable[79684] = 88; // 'state 311' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 79685, 79687); // 'state 311' -> +..- -> shift (target=54, len=0)
actionsTable[79687] = 90; // 'state 311' -> ** -> shift (target=45, len=0)
actionsTable[79692] = 110; // 'state 311' -> ?. -> shift (target=55, len=0)
actionsTable[79693] = 864; // 'state 311' -> . -> shift (target=432, len=0)
actionsTable[79700] = 112; // 'state 311' -> equality_operator -> shift (target=56, len=0)
actionsTable[79701] = 88; // 'state 311' -> relational_operator -> shift (target=44, len=0)
actionsTable[79702] = 114; // 'state 311' -> shift_operator -> shift (target=57, len=0)
actionsTable[79703] = 90; // 'state 311' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[79704] = 866; // 'state 311' -> update_operator -> shift (target=433, len=0)
actionsTable[79877] = 80; // 'state 312' -> { -> shift (target=40, len=0)
actionsTable[79885] = 1402; // 'state 312' -> ; -> shift (target=701, len=0)
actionsTable[79899] = 164; // 'state 312' -> : -> shift (target=82, len=0)
actionsTable[79925] = 164; // 'state 312' -> ?: -> shift (target=82, len=0)
actionsTable[80133] = 80; // 'state 313' -> { -> shift (target=40, len=0)
actionsTable[80141] = 1402; // 'state 313' -> ; -> shift (target=701, len=0)
actionsTable[80389] = 80; // 'state 314' -> { -> shift (target=40, len=0)
actionsTable.fill(2929, 80640, 80648); // 'state 315' -> true..if -> reduce (target=184, len=5)
actionsTable[80648] = 86; // 'state 315' -> ( -> shift (target=43, len=0)
actionsTable.fill(2929, 80649, 80659); // 'state 315' -> )..of -> reduce (target=184, len=5)
actionsTable[80659] = 88; // 'state 315' -> in -> shift (target=44, len=0)
actionsTable.fill(2929, 80660, 80663); // 'state 315' -> return..try -> reduce (target=184, len=5)
actionsTable.fill(2929, 80665, 80674); // 'state 315' -> switch.., -> reduce (target=184, len=5)
actionsTable[80674] = 90; // 'state 315' -> * -> shift (target=45, len=0)
actionsTable[80675] = 92; // 'state 315' -> as -> shift (target=46, len=0)
actionsTable.fill(2929, 80676, 80678); // 'state 315' -> type..export -> reduce (target=184, len=5)
actionsTable[80681] = 94; // 'state 315' -> [ -> shift (target=47, len=0)
actionsTable.fill(2929, 80682, 80690); // 'state 315' -> ]..class -> reduce (target=184, len=5)
actionsTable.fill(2929, 80691, 80693); // 'state 315' -> implements..interface -> reduce (target=184, len=5)
actionsTable.fill(88, 80694, 80696); // 'state 315' -> <..> -> shift (target=44, len=0)
actionsTable[80696] = 96; // 'state 315' -> | -> shift (target=48, len=0)
actionsTable[80697] = 98; // 'state 315' -> & -> shift (target=49, len=0)
actionsTable.fill(2929, 80699, 80701); // 'state 315' -> void..typeof -> reduce (target=184, len=5)
actionsTable[80702] = 2929; // 'state 315' -> new -> reduce (target=184, len=5)
actionsTable[80703] = 100; // 'state 315' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 80704, 80706); // 'state 315' -> ||..?? -> shift (target=51, len=0)
actionsTable[80706] = 104; // 'state 315' -> && -> shift (target=52, len=0)
actionsTable[80707] = 106; // 'state 315' -> ^ -> shift (target=53, len=0)
actionsTable[80708] = 88; // 'state 315' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 80709, 80711); // 'state 315' -> +..- -> shift (target=54, len=0)
actionsTable[80711] = 90; // 'state 315' -> ** -> shift (target=45, len=0)
actionsTable.fill(2929, 80712, 80716); // 'state 315' -> !..await -> reduce (target=184, len=5)
actionsTable[80716] = 110; // 'state 315' -> ?. -> shift (target=55, len=0)
actionsTable[80717] = 864; // 'state 315' -> . -> shift (target=432, len=0)
actionsTable.fill(2929, 80718, 80723); // 'state 315' -> private_property_identifier..accessibility_modifier -> reduce (target=184, len=5)
actionsTable[80724] = 112; // 'state 315' -> equality_operator -> shift (target=56, len=0)
actionsTable[80725] = 88; // 'state 315' -> relational_operator -> shift (target=44, len=0)
actionsTable[80726] = 114; // 'state 315' -> shift_operator -> shift (target=57, len=0)
actionsTable[80727] = 90; // 'state 315' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[80728] = 866; // 'state 315' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(2929, 80729, 80732); // 'state 315' -> identifier..@par-gen.EOF -> reduce (target=184, len=5)
actionsTable.fill(798, 80896, 80901); // 'state 316' -> true..super -> shift (target=399, len=0)
actionsTable[80901] = 2; // 'state 316' -> { -> shift (target=1, len=0)
actionsTable[80904] = 4; // 'state 316' -> ( -> shift (target=2, len=0)
actionsTable[80914] = 806; // 'state 316' -> of -> shift (target=403, len=0)
actionsTable[80928] = 806; // 'state 316' -> from -> shift (target=403, len=0)
actionsTable[80932] = 806; // 'state 316' -> type -> shift (target=403, len=0)
actionsTable[80937] = 20; // 'state 316' -> [ -> shift (target=10, len=0)
actionsTable[80939] = 70; // 'state 316' -> async -> shift (target=35, len=0)
actionsTable[80940] = 72; // 'state 316' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 80943, 80945); // 'state 316' -> get..set -> shift (target=403, len=0)
actionsTable[80945] = 74; // 'state 316' -> class -> shift (target=37, len=0)
actionsTable[80950] = 28; // 'state 316' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 80955, 80957); // 'state 316' -> void..typeof -> shift (target=15, len=0)
actionsTable[80958] = 32; // 'state 316' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 80965, 80967); // 'state 316' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 80968, 80971); // 'state 316' -> !..delete -> shift (target=15, len=0)
actionsTable[80971] = 34; // 'state 316' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 80975, 80978); // 'state 316' -> number..template_string -> shift (target=399, len=0)
actionsTable[80984] = 36; // 'state 316' -> update_operator -> shift (target=18, len=0)
actionsTable[80985] = 818; // 'state 316' -> identifier -> shift (target=409, len=0)
actionsTable[80986] = 798; // 'state 316' -> regex -> shift (target=399, len=0)
actionsTable[81157] = 122; // 'state 317' -> { -> shift (target=61, len=0)
actionsTable[81161] = 1412; // 'state 317' -> ) -> shift (target=706, len=0)
actionsTable[81192] = 320; // 'state 317' -> ... -> shift (target=160, len=0)
actionsTable[81193] = 124; // 'state 317' -> [ -> shift (target=62, len=0)
actionsTable[81195] = 1006; // 'state 317' -> async -> shift (target=503, len=0)
actionsTable.fill(1008, 81197, 81199); // 'state 317' -> static..readonly -> shift (target=504, len=0)
actionsTable.fill(1006, 81199, 81201); // 'state 317' -> get..set -> shift (target=503, len=0)
actionsTable[81234] = 1008; // 'state 317' -> accessibility_modifier -> shift (target=504, len=0)
actionsTable[81241] = 894; // 'state 317' -> identifier -> shift (target=447, len=0)
actionsTable.fill(798, 81408, 81413); // 'state 318' -> true..super -> shift (target=399, len=0)
actionsTable[81413] = 68; // 'state 318' -> { -> shift (target=34, len=0)
actionsTable[81416] = 4; // 'state 318' -> ( -> shift (target=2, len=0)
actionsTable[81426] = 806; // 'state 318' -> of -> shift (target=403, len=0)
actionsTable[81440] = 806; // 'state 318' -> from -> shift (target=403, len=0)
actionsTable[81444] = 806; // 'state 318' -> type -> shift (target=403, len=0)
actionsTable[81449] = 20; // 'state 318' -> [ -> shift (target=10, len=0)
actionsTable[81451] = 70; // 'state 318' -> async -> shift (target=35, len=0)
actionsTable[81452] = 72; // 'state 318' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 81455, 81457); // 'state 318' -> get..set -> shift (target=403, len=0)
actionsTable[81457] = 74; // 'state 318' -> class -> shift (target=37, len=0)
actionsTable[81462] = 28; // 'state 318' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 81467, 81469); // 'state 318' -> void..typeof -> shift (target=15, len=0)
actionsTable[81470] = 32; // 'state 318' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 81477, 81479); // 'state 318' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 81480, 81483); // 'state 318' -> !..delete -> shift (target=15, len=0)
actionsTable[81483] = 34; // 'state 318' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 81487, 81490); // 'state 318' -> number..template_string -> shift (target=399, len=0)
actionsTable[81496] = 36; // 'state 318' -> update_operator -> shift (target=18, len=0)
actionsTable[81497] = 818; // 'state 318' -> identifier -> shift (target=409, len=0)
actionsTable[81498] = 798; // 'state 318' -> regex -> shift (target=399, len=0)
actionsTable[81672] = 86; // 'state 319' -> ( -> shift (target=43, len=0)
actionsTable[81673] = 1811; // 'state 319' -> ) -> reduce (target=137, len=3)
actionsTable[81683] = 88; // 'state 319' -> in -> shift (target=44, len=0)
actionsTable[81697] = 1811; // 'state 319' -> , -> reduce (target=137, len=3)
actionsTable[81698] = 90; // 'state 319' -> * -> shift (target=45, len=0)
actionsTable[81699] = 92; // 'state 319' -> as -> shift (target=46, len=0)
actionsTable[81705] = 94; // 'state 319' -> [ -> shift (target=47, len=0)
actionsTable.fill(88, 81718, 81720); // 'state 319' -> <..> -> shift (target=44, len=0)
actionsTable[81720] = 96; // 'state 319' -> | -> shift (target=48, len=0)
actionsTable[81721] = 98; // 'state 319' -> & -> shift (target=49, len=0)
actionsTable[81727] = 100; // 'state 319' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 81728, 81730); // 'state 319' -> ||..?? -> shift (target=51, len=0)
actionsTable[81730] = 104; // 'state 319' -> && -> shift (target=52, len=0)
actionsTable[81731] = 106; // 'state 319' -> ^ -> shift (target=53, len=0)
actionsTable[81732] = 88; // 'state 319' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 81733, 81735); // 'state 319' -> +..- -> shift (target=54, len=0)
actionsTable[81735] = 90; // 'state 319' -> ** -> shift (target=45, len=0)
actionsTable[81740] = 110; // 'state 319' -> ?. -> shift (target=55, len=0)
actionsTable[81741] = 864; // 'state 319' -> . -> shift (target=432, len=0)
actionsTable[81748] = 112; // 'state 319' -> equality_operator -> shift (target=56, len=0)
actionsTable[81749] = 88; // 'state 319' -> relational_operator -> shift (target=44, len=0)
actionsTable[81750] = 114; // 'state 319' -> shift_operator -> shift (target=57, len=0)
actionsTable[81751] = 90; // 'state 319' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[81752] = 866; // 'state 319' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(942, 81920, 81923); // 'state 320' -> true..null -> shift (target=471, len=0)
actionsTable[81925] = 262; // 'state 320' -> { -> shift (target=131, len=0)
actionsTable[81928] = 264; // 'state 320' -> ( -> shift (target=132, len=0)
actionsTable[81961] = 266; // 'state 320' -> [ -> shift (target=133, len=0)
actionsTable[81974] = 28; // 'state 320' -> < -> shift (target=14, len=0)
actionsTable[81976] = 268; // 'state 320' -> | -> shift (target=134, len=0)
actionsTable[81979] = 942; // 'state 320' -> void -> shift (target=471, len=0)
actionsTable[81980] = 944; // 'state 320' -> typeof -> shift (target=472, len=0)
actionsTable.fill(942, 81999, 82001); // 'state 320' -> number..string -> shift (target=471, len=0)
actionsTable[82009] = 270; // 'state 320' -> identifier -> shift (target=135, len=0)
actionsTable.fill(798, 82176, 82181); // 'state 321' -> true..super -> shift (target=399, len=0)
actionsTable[82181] = 68; // 'state 321' -> { -> shift (target=34, len=0)
actionsTable[82184] = 4; // 'state 321' -> ( -> shift (target=2, len=0)
actionsTable[82194] = 806; // 'state 321' -> of -> shift (target=403, len=0)
actionsTable[82208] = 806; // 'state 321' -> from -> shift (target=403, len=0)
actionsTable[82212] = 806; // 'state 321' -> type -> shift (target=403, len=0)
actionsTable[82217] = 20; // 'state 321' -> [ -> shift (target=10, len=0)
actionsTable[82219] = 70; // 'state 321' -> async -> shift (target=35, len=0)
actionsTable[82220] = 72; // 'state 321' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 82223, 82225); // 'state 321' -> get..set -> shift (target=403, len=0)
actionsTable[82225] = 74; // 'state 321' -> class -> shift (target=37, len=0)
actionsTable[82230] = 28; // 'state 321' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 82235, 82237); // 'state 321' -> void..typeof -> shift (target=15, len=0)
actionsTable[82238] = 32; // 'state 321' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 82245, 82247); // 'state 321' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 82248, 82251); // 'state 321' -> !..delete -> shift (target=15, len=0)
actionsTable[82251] = 34; // 'state 321' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 82255, 82258); // 'state 321' -> number..template_string -> shift (target=399, len=0)
actionsTable[82264] = 36; // 'state 321' -> update_operator -> shift (target=18, len=0)
actionsTable[82265] = 818; // 'state 321' -> identifier -> shift (target=409, len=0)
actionsTable[82266] = 798; // 'state 321' -> regex -> shift (target=399, len=0)
actionsTable[82437] = 80; // 'state 322' -> { -> shift (target=40, len=0)
actionsTable[82459] = 164; // 'state 322' -> : -> shift (target=82, len=0)
actionsTable[82485] = 164; // 'state 322' -> ?: -> shift (target=82, len=0)
actionsTable[82696] = 138; // 'state 323' -> ( -> shift (target=69, len=0)
actionsTable[82949] = 80; // 'state 324' -> { -> shift (target=40, len=0)
actionsTable[83206] = 1835; // 'state 325' -> } -> reduce (target=149, len=3)
actionsTable[83208] = 86; // 'state 325' -> ( -> shift (target=43, len=0)
actionsTable[83213] = 1422; // 'state 325' -> ; -> shift (target=711, len=0)
actionsTable[83218] = 1835; // 'state 325' -> of -> reduce (target=149, len=3)
actionsTable[83219] = 88; // 'state 325' -> in -> shift (target=44, len=0)
actionsTable[83232] = 1835; // 'state 325' -> from -> reduce (target=149, len=3)
actionsTable[83234] = 90; // 'state 325' -> * -> shift (target=45, len=0)
actionsTable[83235] = 92; // 'state 325' -> as -> shift (target=46, len=0)
actionsTable[83236] = 1835; // 'state 325' -> type -> reduce (target=149, len=3)
actionsTable[83241] = 94; // 'state 325' -> [ -> shift (target=47, len=0)
actionsTable[83243] = 1835; // 'state 325' -> async -> reduce (target=149, len=3)
actionsTable.fill(1835, 83245, 83249); // 'state 325' -> static..set -> reduce (target=149, len=3)
actionsTable.fill(88, 83254, 83256); // 'state 325' -> <..> -> shift (target=44, len=0)
actionsTable[83256] = 96; // 'state 325' -> | -> shift (target=48, len=0)
actionsTable[83257] = 98; // 'state 325' -> & -> shift (target=49, len=0)
actionsTable[83263] = 100; // 'state 325' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 83264, 83266); // 'state 325' -> ||..?? -> shift (target=51, len=0)
actionsTable[83266] = 104; // 'state 325' -> && -> shift (target=52, len=0)
actionsTable[83267] = 106; // 'state 325' -> ^ -> shift (target=53, len=0)
actionsTable[83268] = 88; // 'state 325' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 83269, 83271); // 'state 325' -> +..- -> shift (target=54, len=0)
actionsTable[83271] = 90; // 'state 325' -> ** -> shift (target=45, len=0)
actionsTable[83276] = 110; // 'state 325' -> ?. -> shift (target=55, len=0)
actionsTable[83277] = 864; // 'state 325' -> . -> shift (target=432, len=0)
actionsTable.fill(1835, 83278, 83281); // 'state 325' -> private_property_identifier..string -> reduce (target=149, len=3)
actionsTable[83282] = 1835; // 'state 325' -> accessibility_modifier -> reduce (target=149, len=3)
actionsTable[83284] = 112; // 'state 325' -> equality_operator -> shift (target=56, len=0)
actionsTable[83285] = 88; // 'state 325' -> relational_operator -> shift (target=44, len=0)
actionsTable[83286] = 114; // 'state 325' -> shift_operator -> shift (target=57, len=0)
actionsTable[83287] = 90; // 'state 325' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[83288] = 866; // 'state 325' -> update_operator -> shift (target=433, len=0)
actionsTable[83289] = 1835; // 'state 325' -> identifier -> reduce (target=149, len=3)
actionsTable.fill(798, 83456, 83461); // 'state 326' -> true..super -> shift (target=399, len=0)
actionsTable[83461] = 68; // 'state 326' -> { -> shift (target=34, len=0)
actionsTable[83464] = 4; // 'state 326' -> ( -> shift (target=2, len=0)
actionsTable[83474] = 806; // 'state 326' -> of -> shift (target=403, len=0)
actionsTable[83488] = 806; // 'state 326' -> from -> shift (target=403, len=0)
actionsTable[83492] = 806; // 'state 326' -> type -> shift (target=403, len=0)
actionsTable[83497] = 20; // 'state 326' -> [ -> shift (target=10, len=0)
actionsTable[83499] = 70; // 'state 326' -> async -> shift (target=35, len=0)
actionsTable[83500] = 72; // 'state 326' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 83503, 83505); // 'state 326' -> get..set -> shift (target=403, len=0)
actionsTable[83505] = 74; // 'state 326' -> class -> shift (target=37, len=0)
actionsTable[83510] = 28; // 'state 326' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 83515, 83517); // 'state 326' -> void..typeof -> shift (target=15, len=0)
actionsTable[83518] = 32; // 'state 326' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 83525, 83527); // 'state 326' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 83528, 83531); // 'state 326' -> !..delete -> shift (target=15, len=0)
actionsTable[83531] = 34; // 'state 326' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 83535, 83538); // 'state 326' -> number..template_string -> shift (target=399, len=0)
actionsTable[83544] = 36; // 'state 326' -> update_operator -> shift (target=18, len=0)
actionsTable[83545] = 818; // 'state 326' -> identifier -> shift (target=409, len=0)
actionsTable[83546] = 798; // 'state 326' -> regex -> shift (target=399, len=0)
actionsTable[83720] = 86; // 'state 327' -> ( -> shift (target=43, len=0)
actionsTable[83721] = 2329; // 'state 327' -> ) -> reduce (target=140, len=4)
actionsTable[83731] = 88; // 'state 327' -> in -> shift (target=44, len=0)
actionsTable[83745] = 2329; // 'state 327' -> , -> reduce (target=140, len=4)
actionsTable[83746] = 90; // 'state 327' -> * -> shift (target=45, len=0)
actionsTable[83747] = 92; // 'state 327' -> as -> shift (target=46, len=0)
actionsTable[83753] = 94; // 'state 327' -> [ -> shift (target=47, len=0)
actionsTable.fill(88, 83766, 83768); // 'state 327' -> <..> -> shift (target=44, len=0)
actionsTable[83768] = 96; // 'state 327' -> | -> shift (target=48, len=0)
actionsTable[83769] = 98; // 'state 327' -> & -> shift (target=49, len=0)
actionsTable[83775] = 100; // 'state 327' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 83776, 83778); // 'state 327' -> ||..?? -> shift (target=51, len=0)
actionsTable[83778] = 104; // 'state 327' -> && -> shift (target=52, len=0)
actionsTable[83779] = 106; // 'state 327' -> ^ -> shift (target=53, len=0)
actionsTable[83780] = 88; // 'state 327' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 83781, 83783); // 'state 327' -> +..- -> shift (target=54, len=0)
actionsTable[83783] = 90; // 'state 327' -> ** -> shift (target=45, len=0)
actionsTable[83788] = 110; // 'state 327' -> ?. -> shift (target=55, len=0)
actionsTable[83789] = 864; // 'state 327' -> . -> shift (target=432, len=0)
actionsTable[83796] = 112; // 'state 327' -> equality_operator -> shift (target=56, len=0)
actionsTable[83797] = 88; // 'state 327' -> relational_operator -> shift (target=44, len=0)
actionsTable[83798] = 114; // 'state 327' -> shift_operator -> shift (target=57, len=0)
actionsTable[83799] = 90; // 'state 327' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[83800] = 866; // 'state 327' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(942, 83968, 83971); // 'state 328' -> true..null -> shift (target=471, len=0)
actionsTable[83973] = 262; // 'state 328' -> { -> shift (target=131, len=0)
actionsTable[83976] = 264; // 'state 328' -> ( -> shift (target=132, len=0)
actionsTable[84009] = 266; // 'state 328' -> [ -> shift (target=133, len=0)
actionsTable[84022] = 28; // 'state 328' -> < -> shift (target=14, len=0)
actionsTable[84023] = 1426; // 'state 328' -> > -> shift (target=713, len=0)
actionsTable[84024] = 268; // 'state 328' -> | -> shift (target=134, len=0)
actionsTable[84027] = 942; // 'state 328' -> void -> shift (target=471, len=0)
actionsTable[84028] = 944; // 'state 328' -> typeof -> shift (target=472, len=0)
actionsTable.fill(942, 84047, 84049); // 'state 328' -> number..string -> shift (target=471, len=0)
actionsTable[84057] = 270; // 'state 328' -> identifier -> shift (target=135, len=0)
actionsTable.fill(942, 84224, 84227); // 'state 329' -> true..null -> shift (target=471, len=0)
actionsTable[84229] = 262; // 'state 329' -> { -> shift (target=131, len=0)
actionsTable[84232] = 264; // 'state 329' -> ( -> shift (target=132, len=0)
actionsTable[84265] = 266; // 'state 329' -> [ -> shift (target=133, len=0)
actionsTable[84278] = 28; // 'state 329' -> < -> shift (target=14, len=0)
actionsTable[84280] = 268; // 'state 329' -> | -> shift (target=134, len=0)
actionsTable[84283] = 942; // 'state 329' -> void -> shift (target=471, len=0)
actionsTable[84284] = 944; // 'state 329' -> typeof -> shift (target=472, len=0)
actionsTable.fill(942, 84303, 84305); // 'state 329' -> number..string -> shift (target=471, len=0)
actionsTable[84313] = 270; // 'state 329' -> identifier -> shift (target=135, len=0)
actionsTable[84485] = 80; // 'state 330' -> { -> shift (target=40, len=0)
actionsTable.fill(798, 84736, 84741); // 'state 331' -> true..super -> shift (target=399, len=0)
actionsTable[84741] = 2; // 'state 331' -> { -> shift (target=1, len=0)
actionsTable[84743] = 800; // 'state 331' -> if -> shift (target=400, len=0)
actionsTable[84744] = 4; // 'state 331' -> ( -> shift (target=2, len=0)
actionsTable[84747] = 802; // 'state 331' -> while -> shift (target=401, len=0)
actionsTable[84748] = 6; // 'state 331' -> do -> shift (target=3, len=0)
actionsTable[84750] = 804; // 'state 331' -> for -> shift (target=402, len=0)
actionsTable.fill(8, 84751, 84754); // 'state 331' -> const..var -> shift (target=4, len=0)
actionsTable[84754] = 806; // 'state 331' -> of -> shift (target=403, len=0)
actionsTable[84756] = 10; // 'state 331' -> return -> shift (target=5, len=0)
actionsTable[84757] = 12; // 'state 331' -> throw -> shift (target=6, len=0)
actionsTable[84758] = 14; // 'state 331' -> try -> shift (target=7, len=0)
actionsTable[84761] = 808; // 'state 331' -> switch -> shift (target=404, len=0)
actionsTable[84765] = 810; // 'state 331' -> break -> shift (target=405, len=0)
actionsTable[84766] = 812; // 'state 331' -> continue -> shift (target=406, len=0)
actionsTable[84767] = 16; // 'state 331' -> import -> shift (target=8, len=0)
actionsTable[84768] = 806; // 'state 331' -> from -> shift (target=403, len=0)
actionsTable[84772] = 814; // 'state 331' -> type -> shift (target=407, len=0)
actionsTable[84773] = 18; // 'state 331' -> export -> shift (target=9, len=0)
actionsTable[84777] = 20; // 'state 331' -> [ -> shift (target=10, len=0)
actionsTable[84779] = 22; // 'state 331' -> async -> shift (target=11, len=0)
actionsTable[84780] = 24; // 'state 331' -> function -> shift (target=12, len=0)
actionsTable.fill(806, 84783, 84785); // 'state 331' -> get..set -> shift (target=403, len=0)
actionsTable[84785] = 26; // 'state 331' -> class -> shift (target=13, len=0)
actionsTable[84788] = 816; // 'state 331' -> interface -> shift (target=408, len=0)
actionsTable[84790] = 28; // 'state 331' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 84795, 84797); // 'state 331' -> void..typeof -> shift (target=15, len=0)
actionsTable[84798] = 32; // 'state 331' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 84805, 84807); // 'state 331' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 84808, 84811); // 'state 331' -> !..delete -> shift (target=15, len=0)
actionsTable[84811] = 34; // 'state 331' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 84815, 84818); // 'state 331' -> number..template_string -> shift (target=399, len=0)
actionsTable[84824] = 36; // 'state 331' -> update_operator -> shift (target=18, len=0)
actionsTable[84825] = 818; // 'state 331' -> identifier -> shift (target=409, len=0)
actionsTable[84826] = 798; // 'state 331' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 84992, 84997); // 'state 332' -> true..super -> shift (target=399, len=0)
actionsTable[84997] = 2; // 'state 332' -> { -> shift (target=1, len=0)
actionsTable[84999] = 800; // 'state 332' -> if -> shift (target=400, len=0)
actionsTable[85000] = 4; // 'state 332' -> ( -> shift (target=2, len=0)
actionsTable[85003] = 802; // 'state 332' -> while -> shift (target=401, len=0)
actionsTable[85004] = 6; // 'state 332' -> do -> shift (target=3, len=0)
actionsTable[85006] = 804; // 'state 332' -> for -> shift (target=402, len=0)
actionsTable.fill(8, 85007, 85010); // 'state 332' -> const..var -> shift (target=4, len=0)
actionsTable[85010] = 806; // 'state 332' -> of -> shift (target=403, len=0)
actionsTable[85012] = 10; // 'state 332' -> return -> shift (target=5, len=0)
actionsTable[85013] = 12; // 'state 332' -> throw -> shift (target=6, len=0)
actionsTable[85014] = 14; // 'state 332' -> try -> shift (target=7, len=0)
actionsTable[85017] = 808; // 'state 332' -> switch -> shift (target=404, len=0)
actionsTable[85021] = 810; // 'state 332' -> break -> shift (target=405, len=0)
actionsTable[85022] = 812; // 'state 332' -> continue -> shift (target=406, len=0)
actionsTable[85023] = 16; // 'state 332' -> import -> shift (target=8, len=0)
actionsTable[85024] = 806; // 'state 332' -> from -> shift (target=403, len=0)
actionsTable[85028] = 814; // 'state 332' -> type -> shift (target=407, len=0)
actionsTable[85029] = 18; // 'state 332' -> export -> shift (target=9, len=0)
actionsTable[85033] = 20; // 'state 332' -> [ -> shift (target=10, len=0)
actionsTable[85035] = 22; // 'state 332' -> async -> shift (target=11, len=0)
actionsTable[85036] = 24; // 'state 332' -> function -> shift (target=12, len=0)
actionsTable.fill(806, 85039, 85041); // 'state 332' -> get..set -> shift (target=403, len=0)
actionsTable[85041] = 26; // 'state 332' -> class -> shift (target=13, len=0)
actionsTable[85044] = 816; // 'state 332' -> interface -> shift (target=408, len=0)
actionsTable[85046] = 28; // 'state 332' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 85051, 85053); // 'state 332' -> void..typeof -> shift (target=15, len=0)
actionsTable[85054] = 32; // 'state 332' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 85061, 85063); // 'state 332' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 85064, 85067); // 'state 332' -> !..delete -> shift (target=15, len=0)
actionsTable[85067] = 34; // 'state 332' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 85071, 85074); // 'state 332' -> number..template_string -> shift (target=399, len=0)
actionsTable[85080] = 36; // 'state 332' -> update_operator -> shift (target=18, len=0)
actionsTable[85081] = 818; // 'state 332' -> identifier -> shift (target=409, len=0)
actionsTable[85082] = 798; // 'state 332' -> regex -> shift (target=399, len=0)
actionsTable[85256] = 86; // 'state 333' -> ( -> shift (target=43, len=0)
actionsTable[85257] = 738; // 'state 333' -> ) -> shift (target=369, len=0)
actionsTable[85267] = 88; // 'state 333' -> in -> shift (target=44, len=0)
actionsTable[85282] = 90; // 'state 333' -> * -> shift (target=45, len=0)
actionsTable[85283] = 92; // 'state 333' -> as -> shift (target=46, len=0)
actionsTable[85289] = 94; // 'state 333' -> [ -> shift (target=47, len=0)
actionsTable.fill(88, 85302, 85304); // 'state 333' -> <..> -> shift (target=44, len=0)
actionsTable[85304] = 96; // 'state 333' -> | -> shift (target=48, len=0)
actionsTable[85305] = 98; // 'state 333' -> & -> shift (target=49, len=0)
actionsTable[85311] = 100; // 'state 333' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 85312, 85314); // 'state 333' -> ||..?? -> shift (target=51, len=0)
actionsTable[85314] = 104; // 'state 333' -> && -> shift (target=52, len=0)
actionsTable[85315] = 106; // 'state 333' -> ^ -> shift (target=53, len=0)
actionsTable[85316] = 88; // 'state 333' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 85317, 85319); // 'state 333' -> +..- -> shift (target=54, len=0)
actionsTable[85319] = 90; // 'state 333' -> ** -> shift (target=45, len=0)
actionsTable[85324] = 110; // 'state 333' -> ?. -> shift (target=55, len=0)
actionsTable[85325] = 864; // 'state 333' -> . -> shift (target=432, len=0)
actionsTable[85332] = 112; // 'state 333' -> equality_operator -> shift (target=56, len=0)
actionsTable[85333] = 88; // 'state 333' -> relational_operator -> shift (target=44, len=0)
actionsTable[85334] = 114; // 'state 333' -> shift_operator -> shift (target=57, len=0)
actionsTable[85335] = 90; // 'state 333' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[85336] = 866; // 'state 333' -> update_operator -> shift (target=433, len=0)
actionsTable[85512] = 86; // 'state 334' -> ( -> shift (target=43, len=0)
actionsTable[85513] = 740; // 'state 334' -> ) -> shift (target=370, len=0)
actionsTable[85523] = 88; // 'state 334' -> in -> shift (target=44, len=0)
actionsTable[85538] = 90; // 'state 334' -> * -> shift (target=45, len=0)
actionsTable[85539] = 92; // 'state 334' -> as -> shift (target=46, len=0)
actionsTable[85545] = 94; // 'state 334' -> [ -> shift (target=47, len=0)
actionsTable.fill(88, 85558, 85560); // 'state 334' -> <..> -> shift (target=44, len=0)
actionsTable[85560] = 96; // 'state 334' -> | -> shift (target=48, len=0)
actionsTable[85561] = 98; // 'state 334' -> & -> shift (target=49, len=0)
actionsTable[85567] = 100; // 'state 334' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 85568, 85570); // 'state 334' -> ||..?? -> shift (target=51, len=0)
actionsTable[85570] = 104; // 'state 334' -> && -> shift (target=52, len=0)
actionsTable[85571] = 106; // 'state 334' -> ^ -> shift (target=53, len=0)
actionsTable[85572] = 88; // 'state 334' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 85573, 85575); // 'state 334' -> +..- -> shift (target=54, len=0)
actionsTable[85575] = 90; // 'state 334' -> ** -> shift (target=45, len=0)
actionsTable[85580] = 110; // 'state 334' -> ?. -> shift (target=55, len=0)
actionsTable[85581] = 864; // 'state 334' -> . -> shift (target=432, len=0)
actionsTable[85588] = 112; // 'state 334' -> equality_operator -> shift (target=56, len=0)
actionsTable[85589] = 88; // 'state 334' -> relational_operator -> shift (target=44, len=0)
actionsTable[85590] = 114; // 'state 334' -> shift_operator -> shift (target=57, len=0)
actionsTable[85591] = 90; // 'state 334' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[85592] = 866; // 'state 334' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(798, 85760, 85765); // 'state 335' -> true..super -> shift (target=399, len=0)
actionsTable[85765] = 68; // 'state 335' -> { -> shift (target=34, len=0)
actionsTable[85768] = 4; // 'state 335' -> ( -> shift (target=2, len=0)
actionsTable[85769] = 738; // 'state 335' -> ) -> shift (target=369, len=0)
actionsTable[85778] = 806; // 'state 335' -> of -> shift (target=403, len=0)
actionsTable[85792] = 806; // 'state 335' -> from -> shift (target=403, len=0)
actionsTable[85796] = 806; // 'state 335' -> type -> shift (target=403, len=0)
actionsTable[85801] = 20; // 'state 335' -> [ -> shift (target=10, len=0)
actionsTable[85803] = 70; // 'state 335' -> async -> shift (target=35, len=0)
actionsTable[85804] = 72; // 'state 335' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 85807, 85809); // 'state 335' -> get..set -> shift (target=403, len=0)
actionsTable[85809] = 74; // 'state 335' -> class -> shift (target=37, len=0)
actionsTable[85814] = 28; // 'state 335' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 85819, 85821); // 'state 335' -> void..typeof -> shift (target=15, len=0)
actionsTable[85822] = 32; // 'state 335' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 85829, 85831); // 'state 335' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 85832, 85835); // 'state 335' -> !..delete -> shift (target=15, len=0)
actionsTable[85835] = 34; // 'state 335' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 85839, 85842); // 'state 335' -> number..template_string -> shift (target=399, len=0)
actionsTable[85848] = 36; // 'state 335' -> update_operator -> shift (target=18, len=0)
actionsTable[85849] = 818; // 'state 335' -> identifier -> shift (target=409, len=0)
actionsTable[85850] = 798; // 'state 335' -> regex -> shift (target=399, len=0)
actionsTable[86021] = 80; // 'state 336' -> { -> shift (target=40, len=0)
actionsTable[86043] = 164; // 'state 336' -> : -> shift (target=82, len=0)
actionsTable[86069] = 164; // 'state 336' -> ?: -> shift (target=82, len=0)
actionsTable[86277] = 80; // 'state 337' -> { -> shift (target=40, len=0)
actionsTable.fill(798, 86528, 86533); // 'state 338' -> true..super -> shift (target=399, len=0)
actionsTable[86533] = 68; // 'state 338' -> { -> shift (target=34, len=0)
actionsTable[86536] = 4; // 'state 338' -> ( -> shift (target=2, len=0)
actionsTable[86546] = 806; // 'state 338' -> of -> shift (target=403, len=0)
actionsTable[86560] = 806; // 'state 338' -> from -> shift (target=403, len=0)
actionsTable[86564] = 806; // 'state 338' -> type -> shift (target=403, len=0)
actionsTable[86569] = 20; // 'state 338' -> [ -> shift (target=10, len=0)
actionsTable[86571] = 70; // 'state 338' -> async -> shift (target=35, len=0)
actionsTable[86572] = 72; // 'state 338' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 86575, 86577); // 'state 338' -> get..set -> shift (target=403, len=0)
actionsTable[86577] = 74; // 'state 338' -> class -> shift (target=37, len=0)
actionsTable[86582] = 28; // 'state 338' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 86587, 86589); // 'state 338' -> void..typeof -> shift (target=15, len=0)
actionsTable[86590] = 32; // 'state 338' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 86597, 86599); // 'state 338' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 86600, 86603); // 'state 338' -> !..delete -> shift (target=15, len=0)
actionsTable[86603] = 34; // 'state 338' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 86607, 86610); // 'state 338' -> number..template_string -> shift (target=399, len=0)
actionsTable[86616] = 36; // 'state 338' -> update_operator -> shift (target=18, len=0)
actionsTable[86617] = 818; // 'state 338' -> identifier -> shift (target=409, len=0)
actionsTable[86618] = 798; // 'state 338' -> regex -> shift (target=399, len=0)
actionsTable[86790] = 1440; // 'state 339' -> } -> shift (target=720, len=0)
actionsTable[86810] = 676; // 'state 339' -> case -> shift (target=338, len=0)
actionsTable[86812] = 1348; // 'state 339' -> default -> shift (target=674, len=0)
actionsTable.fill(942, 87040, 87043); // 'state 340' -> true..null -> shift (target=471, len=0)
actionsTable[87045] = 262; // 'state 340' -> { -> shift (target=131, len=0)
actionsTable[87048] = 264; // 'state 340' -> ( -> shift (target=132, len=0)
actionsTable[87081] = 266; // 'state 340' -> [ -> shift (target=133, len=0)
actionsTable[87094] = 28; // 'state 340' -> < -> shift (target=14, len=0)
actionsTable[87096] = 268; // 'state 340' -> | -> shift (target=134, len=0)
actionsTable[87099] = 942; // 'state 340' -> void -> shift (target=471, len=0)
actionsTable[87100] = 944; // 'state 340' -> typeof -> shift (target=472, len=0)
actionsTable.fill(942, 87119, 87121); // 'state 340' -> number..string -> shift (target=471, len=0)
actionsTable[87129] = 270; // 'state 340' -> identifier -> shift (target=135, len=0)
actionsTable[87305] = 767; // 'state 341' -> ) -> reduce (target=127, len=1)
actionsTable[87323] = 164; // 'state 341' -> : -> shift (target=82, len=0)
actionsTable[87329] = 767; // 'state 341' -> , -> reduce (target=127, len=1)
actionsTable[87349] = 164; // 'state 341' -> ?: -> shift (target=82, len=0)
actionsTable.fill(798, 87552, 87557); // 'state 342' -> true..super -> shift (target=399, len=0)
actionsTable[87557] = 562; // 'state 342' -> { -> shift (target=281, len=0)
actionsTable[87560] = 4; // 'state 342' -> ( -> shift (target=2, len=0)
actionsTable[87570] = 806; // 'state 342' -> of -> shift (target=403, len=0)
actionsTable[87584] = 806; // 'state 342' -> from -> shift (target=403, len=0)
actionsTable[87588] = 806; // 'state 342' -> type -> shift (target=403, len=0)
actionsTable[87593] = 566; // 'state 342' -> [ -> shift (target=283, len=0)
actionsTable[87595] = 70; // 'state 342' -> async -> shift (target=35, len=0)
actionsTable[87596] = 72; // 'state 342' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 87599, 87601); // 'state 342' -> get..set -> shift (target=403, len=0)
actionsTable[87601] = 74; // 'state 342' -> class -> shift (target=37, len=0)
actionsTable[87606] = 28; // 'state 342' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 87611, 87613); // 'state 342' -> void..typeof -> shift (target=15, len=0)
actionsTable[87614] = 32; // 'state 342' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 87621, 87623); // 'state 342' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 87624, 87627); // 'state 342' -> !..delete -> shift (target=15, len=0)
actionsTable[87627] = 34; // 'state 342' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 87631, 87634); // 'state 342' -> number..template_string -> shift (target=399, len=0)
actionsTable[87640] = 36; // 'state 342' -> update_operator -> shift (target=18, len=0)
actionsTable[87641] = 1446; // 'state 342' -> identifier -> shift (target=723, len=0)
actionsTable[87642] = 798; // 'state 342' -> regex -> shift (target=399, len=0)
actionsTable[87816] = 138; // 'state 343' -> ( -> shift (target=69, len=0)
actionsTable[87835] = 752; // 'state 343' -> : -> shift (target=376, len=0)
actionsTable[87862] = 28; // 'state 343' -> < -> shift (target=14, len=0)
actionsTable.fill(798, 88064, 88069); // 'state 344' -> true..super -> shift (target=399, len=0)
actionsTable[88069] = 562; // 'state 344' -> { -> shift (target=281, len=0)
actionsTable[88072] = 4; // 'state 344' -> ( -> shift (target=2, len=0)
actionsTable[88082] = 806; // 'state 344' -> of -> shift (target=403, len=0)
actionsTable[88096] = 806; // 'state 344' -> from -> shift (target=403, len=0)
actionsTable[88100] = 806; // 'state 344' -> type -> shift (target=403, len=0)
actionsTable[88104] = 690; // 'state 344' -> ... -> shift (target=345, len=0)
actionsTable[88105] = 566; // 'state 344' -> [ -> shift (target=283, len=0)
actionsTable[88107] = 70; // 'state 344' -> async -> shift (target=35, len=0)
actionsTable[88108] = 72; // 'state 344' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 88111, 88113); // 'state 344' -> get..set -> shift (target=403, len=0)
actionsTable[88113] = 74; // 'state 344' -> class -> shift (target=37, len=0)
actionsTable[88118] = 28; // 'state 344' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 88123, 88125); // 'state 344' -> void..typeof -> shift (target=15, len=0)
actionsTable[88126] = 32; // 'state 344' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 88133, 88135); // 'state 344' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 88136, 88139); // 'state 344' -> !..delete -> shift (target=15, len=0)
actionsTable[88139] = 34; // 'state 344' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 88143, 88146); // 'state 344' -> number..template_string -> shift (target=399, len=0)
actionsTable[88152] = 36; // 'state 344' -> update_operator -> shift (target=18, len=0)
actionsTable[88153] = 1360; // 'state 344' -> identifier -> shift (target=680, len=0)
actionsTable[88154] = 798; // 'state 344' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 88320, 88325); // 'state 345' -> true..super -> shift (target=399, len=0)
actionsTable[88325] = 562; // 'state 345' -> { -> shift (target=281, len=0)
actionsTable[88328] = 4; // 'state 345' -> ( -> shift (target=2, len=0)
actionsTable[88338] = 806; // 'state 345' -> of -> shift (target=403, len=0)
actionsTable[88352] = 806; // 'state 345' -> from -> shift (target=403, len=0)
actionsTable[88356] = 806; // 'state 345' -> type -> shift (target=403, len=0)
actionsTable[88361] = 566; // 'state 345' -> [ -> shift (target=283, len=0)
actionsTable[88363] = 70; // 'state 345' -> async -> shift (target=35, len=0)
actionsTable[88364] = 72; // 'state 345' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 88367, 88369); // 'state 345' -> get..set -> shift (target=403, len=0)
actionsTable[88369] = 74; // 'state 345' -> class -> shift (target=37, len=0)
actionsTable[88374] = 28; // 'state 345' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 88379, 88381); // 'state 345' -> void..typeof -> shift (target=15, len=0)
actionsTable[88382] = 32; // 'state 345' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 88389, 88391); // 'state 345' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 88392, 88395); // 'state 345' -> !..delete -> shift (target=15, len=0)
actionsTable[88395] = 34; // 'state 345' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 88399, 88402); // 'state 345' -> number..template_string -> shift (target=399, len=0)
actionsTable[88408] = 36; // 'state 345' -> update_operator -> shift (target=18, len=0)
actionsTable[88409] = 1360; // 'state 345' -> identifier -> shift (target=680, len=0)
actionsTable[88410] = 798; // 'state 345' -> regex -> shift (target=399, len=0)
actionsTable.fill(1218, 88576, 88579); // 'state 346' -> true..null -> shift (target=609, len=0)
actionsTable.fill(798, 88579, 88581); // 'state 346' -> this..super -> shift (target=399, len=0)
actionsTable[88581] = 420; // 'state 346' -> { -> shift (target=210, len=0)
actionsTable[88584] = 576; // 'state 346' -> ( -> shift (target=288, len=0)
actionsTable[88594] = 806; // 'state 346' -> of -> shift (target=403, len=0)
actionsTable[88608] = 806; // 'state 346' -> from -> shift (target=403, len=0)
actionsTable[88612] = 806; // 'state 346' -> type -> shift (target=403, len=0)
actionsTable[88617] = 424; // 'state 346' -> [ -> shift (target=212, len=0)
actionsTable[88619] = 70; // 'state 346' -> async -> shift (target=35, len=0)
actionsTable[88620] = 72; // 'state 346' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 88623, 88625); // 'state 346' -> get..set -> shift (target=403, len=0)
actionsTable[88625] = 74; // 'state 346' -> class -> shift (target=37, len=0)
actionsTable[88630] = 28; // 'state 346' -> < -> shift (target=14, len=0)
actionsTable[88632] = 268; // 'state 346' -> | -> shift (target=134, len=0)
actionsTable[88635] = 578; // 'state 346' -> void -> shift (target=289, len=0)
actionsTable[88636] = 580; // 'state 346' -> typeof -> shift (target=290, len=0)
actionsTable[88638] = 32; // 'state 346' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 88645, 88647); // 'state 346' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 88648, 88651); // 'state 346' -> !..delete -> shift (target=15, len=0)
actionsTable[88651] = 34; // 'state 346' -> await -> shift (target=17, len=0)
actionsTable.fill(1218, 88655, 88657); // 'state 346' -> number..string -> shift (target=609, len=0)
actionsTable[88657] = 798; // 'state 346' -> template_string -> shift (target=399, len=0)
actionsTable[88664] = 36; // 'state 346' -> update_operator -> shift (target=18, len=0)
actionsTable[88665] = 582; // 'state 346' -> identifier -> shift (target=291, len=0)
actionsTable[88666] = 798; // 'state 346' -> regex -> shift (target=399, len=0)
actionsTable[88837] = 80; // 'state 347' -> { -> shift (target=40, len=0)
actionsTable[88838] = 1371; // 'state 347' -> } -> reduce (target=173, len=2)
actionsTable[88845] = 1371; // 'state 347' -> ; -> reduce (target=173, len=2)
actionsTable[88850] = 1371; // 'state 347' -> of -> reduce (target=173, len=2)
actionsTable[88859] = 164; // 'state 347' -> : -> shift (target=82, len=0)
actionsTable.fill(1371, 88864, 88866); // 'state 347' -> from.., -> reduce (target=173, len=2)
actionsTable[88868] = 1371; // 'state 347' -> type -> reduce (target=173, len=2)
actionsTable[88873] = 1371; // 'state 347' -> [ -> reduce (target=173, len=2)
actionsTable[88875] = 1371; // 'state 347' -> async -> reduce (target=173, len=2)
actionsTable.fill(1371, 88878, 88881); // 'state 347' -> readonly..set -> reduce (target=173, len=2)
actionsTable[88885] = 164; // 'state 347' -> ?: -> shift (target=82, len=0)
actionsTable[88894] = 1371; // 'state 347' -> new -> reduce (target=173, len=2)
actionsTable.fill(1371, 88911, 88913); // 'state 347' -> number..string -> reduce (target=173, len=2)
actionsTable[88921] = 1371; // 'state 347' -> identifier -> reduce (target=173, len=2)
actionsTable[89096] = 138; // 'state 348' -> ( -> shift (target=69, len=0)
actionsTable[89371] = 164; // 'state 349' -> : -> shift (target=82, len=0)
actionsTable[89397] = 164; // 'state 349' -> ?: -> shift (target=82, len=0)
actionsTable[89402] = 758; // 'state 349' -> => -> shift (target=379, len=0)
actionsTable[89608] = 869; // 'state 350' -> ( -> reduce (target=178, len=1)
actionsTable[89609] = 837; // 'state 350' -> ) -> reduce (target=162, len=1)
actionsTable[89619] = 869; // 'state 350' -> in -> reduce (target=178, len=1)
actionsTable[89627] = 164; // 'state 350' -> : -> shift (target=82, len=0)
actionsTable.fill(869, 89633, 89636); // 'state 350' -> ,..as -> reduce (target=178, len=1)
actionsTable[89639] = 875; // 'state 350' -> = -> reduce (target=181, len=1)
actionsTable[89641] = 837; // 'state 350' -> [ -> reduce (target=162, len=1)
actionsTable[89653] = 164; // 'state 350' -> ?: -> shift (target=82, len=0)
actionsTable[89654] = 366; // 'state 350' -> < -> shift (target=183, len=0)
actionsTable[89655] = 869; // 'state 350' -> > -> reduce (target=178, len=1)
actionsTable.fill(837, 89656, 89658); // 'state 350' -> |..& -> reduce (target=162, len=1)
actionsTable[89658] = 162; // 'state 350' -> => -> shift (target=81, len=0)
actionsTable[89661] = 432; // 'state 350' -> is -> shift (target=216, len=0)
actionsTable.fill(869, 89663, 89672); // 'state 350' -> ?..** -> reduce (target=178, len=1)
actionsTable.fill(869, 89676, 89678); // 'state 350' -> ?.... -> reduce (target=178, len=1)
actionsTable[89683] = 875; // 'state 350' -> compound_assignment_operator -> reduce (target=181, len=1)
actionsTable.fill(869, 89684, 89689); // 'state 350' -> equality_operator..update_operator -> reduce (target=178, len=1)
actionsTable.fill(1218, 89856, 89859); // 'state 351' -> true..null -> shift (target=609, len=0)
actionsTable.fill(798, 89859, 89861); // 'state 351' -> this..super -> shift (target=399, len=0)
actionsTable[89861] = 760; // 'state 351' -> { -> shift (target=380, len=0)
actionsTable[89864] = 576; // 'state 351' -> ( -> shift (target=288, len=0)
actionsTable[89874] = 806; // 'state 351' -> of -> shift (target=403, len=0)
actionsTable[89888] = 806; // 'state 351' -> from -> shift (target=403, len=0)
actionsTable[89892] = 806; // 'state 351' -> type -> shift (target=403, len=0)
actionsTable[89897] = 424; // 'state 351' -> [ -> shift (target=212, len=0)
actionsTable[89899] = 70; // 'state 351' -> async -> shift (target=35, len=0)
actionsTable[89900] = 72; // 'state 351' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 89903, 89905); // 'state 351' -> get..set -> shift (target=403, len=0)
actionsTable[89905] = 74; // 'state 351' -> class -> shift (target=37, len=0)
actionsTable[89910] = 28; // 'state 351' -> < -> shift (target=14, len=0)
actionsTable[89912] = 268; // 'state 351' -> | -> shift (target=134, len=0)
actionsTable[89915] = 578; // 'state 351' -> void -> shift (target=289, len=0)
actionsTable[89916] = 580; // 'state 351' -> typeof -> shift (target=290, len=0)
actionsTable[89918] = 32; // 'state 351' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 89925, 89927); // 'state 351' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 89928, 89931); // 'state 351' -> !..delete -> shift (target=15, len=0)
actionsTable[89931] = 34; // 'state 351' -> await -> shift (target=17, len=0)
actionsTable.fill(1218, 89935, 89937); // 'state 351' -> number..string -> shift (target=609, len=0)
actionsTable[89937] = 798; // 'state 351' -> template_string -> shift (target=399, len=0)
actionsTable[89944] = 36; // 'state 351' -> update_operator -> shift (target=18, len=0)
actionsTable[89945] = 582; // 'state 351' -> identifier -> shift (target=291, len=0)
actionsTable[89946] = 798; // 'state 351' -> regex -> shift (target=399, len=0)
actionsTable.fill(942, 90112, 90115); // 'state 352' -> true..null -> shift (target=471, len=0)
actionsTable[90117] = 262; // 'state 352' -> { -> shift (target=131, len=0)
actionsTable[90120] = 264; // 'state 352' -> ( -> shift (target=132, len=0)
actionsTable[90153] = 266; // 'state 352' -> [ -> shift (target=133, len=0)
actionsTable[90154] = 1448; // 'state 352' -> ] -> shift (target=724, len=0)
actionsTable[90166] = 28; // 'state 352' -> < -> shift (target=14, len=0)
actionsTable[90168] = 268; // 'state 352' -> | -> shift (target=134, len=0)
actionsTable[90171] = 942; // 'state 352' -> void -> shift (target=471, len=0)
actionsTable[90172] = 944; // 'state 352' -> typeof -> shift (target=472, len=0)
actionsTable.fill(942, 90191, 90193); // 'state 352' -> number..string -> shift (target=471, len=0)
actionsTable[90201] = 270; // 'state 352' -> identifier -> shift (target=135, len=0)
actionsTable[90374] = 1883; // 'state 353' -> } -> reduce (target=173, len=3)
actionsTable[90381] = 1883; // 'state 353' -> ; -> reduce (target=173, len=3)
actionsTable[90386] = 1883; // 'state 353' -> of -> reduce (target=173, len=3)
actionsTable[90395] = 164; // 'state 353' -> : -> shift (target=82, len=0)
actionsTable.fill(1883, 90400, 90402); // 'state 353' -> from.., -> reduce (target=173, len=3)
actionsTable[90404] = 1883; // 'state 353' -> type -> reduce (target=173, len=3)
actionsTable[90409] = 1883; // 'state 353' -> [ -> reduce (target=173, len=3)
actionsTable[90411] = 1883; // 'state 353' -> async -> reduce (target=173, len=3)
actionsTable.fill(1883, 90414, 90417); // 'state 353' -> readonly..set -> reduce (target=173, len=3)
actionsTable[90421] = 164; // 'state 353' -> ?: -> shift (target=82, len=0)
actionsTable[90430] = 1883; // 'state 353' -> new -> reduce (target=173, len=3)
actionsTable.fill(1883, 90447, 90449); // 'state 353' -> number..string -> reduce (target=173, len=3)
actionsTable[90457] = 1883; // 'state 353' -> identifier -> reduce (target=173, len=3)
actionsTable[90630] = 1885; // 'state 354' -> } -> reduce (target=174, len=3)
actionsTable[90637] = 1885; // 'state 354' -> ; -> reduce (target=174, len=3)
actionsTable[90642] = 1885; // 'state 354' -> of -> reduce (target=174, len=3)
actionsTable[90651] = 164; // 'state 354' -> : -> shift (target=82, len=0)
actionsTable.fill(1885, 90656, 90658); // 'state 354' -> from.., -> reduce (target=174, len=3)
actionsTable[90660] = 1885; // 'state 354' -> type -> reduce (target=174, len=3)
actionsTable[90665] = 1885; // 'state 354' -> [ -> reduce (target=174, len=3)
actionsTable[90667] = 1885; // 'state 354' -> async -> reduce (target=174, len=3)
actionsTable.fill(1885, 90670, 90673); // 'state 354' -> readonly..set -> reduce (target=174, len=3)
actionsTable[90677] = 164; // 'state 354' -> ?: -> shift (target=82, len=0)
actionsTable[90686] = 1885; // 'state 354' -> new -> reduce (target=174, len=3)
actionsTable.fill(1885, 90703, 90705); // 'state 354' -> number..string -> reduce (target=174, len=3)
actionsTable[90713] = 1885; // 'state 354' -> identifier -> reduce (target=174, len=3)
actionsTable.fill(942, 90880, 90883); // 'state 355' -> true..null -> shift (target=471, len=0)
actionsTable[90885] = 262; // 'state 355' -> { -> shift (target=131, len=0)
actionsTable[90888] = 264; // 'state 355' -> ( -> shift (target=132, len=0)
actionsTable[90921] = 266; // 'state 355' -> [ -> shift (target=133, len=0)
actionsTable[90934] = 28; // 'state 355' -> < -> shift (target=14, len=0)
actionsTable[90936] = 268; // 'state 355' -> | -> shift (target=134, len=0)
actionsTable[90939] = 942; // 'state 355' -> void -> shift (target=471, len=0)
actionsTable[90940] = 944; // 'state 355' -> typeof -> shift (target=472, len=0)
actionsTable.fill(942, 90959, 90961); // 'state 355' -> number..string -> shift (target=471, len=0)
actionsTable[90969] = 270; // 'state 355' -> identifier -> shift (target=135, len=0)
actionsTable[91141] = 80; // 'state 356' -> { -> shift (target=40, len=0)
actionsTable[91149] = 1402; // 'state 356' -> ; -> shift (target=701, len=0)
actionsTable[91163] = 164; // 'state 356' -> : -> shift (target=82, len=0)
actionsTable[91189] = 164; // 'state 356' -> ?: -> shift (target=82, len=0)
actionsTable[91397] = 80; // 'state 357' -> { -> shift (target=40, len=0)
actionsTable[91405] = 1402; // 'state 357' -> ; -> shift (target=701, len=0)
actionsTable.fill(798, 91648, 91653); // 'state 358' -> true..super -> shift (target=399, len=0)
actionsTable[91653] = 68; // 'state 358' -> { -> shift (target=34, len=0)
actionsTable[91656] = 4; // 'state 358' -> ( -> shift (target=2, len=0)
actionsTable[91666] = 806; // 'state 358' -> of -> shift (target=403, len=0)
actionsTable[91680] = 806; // 'state 358' -> from -> shift (target=403, len=0)
actionsTable[91684] = 806; // 'state 358' -> type -> shift (target=403, len=0)
actionsTable[91689] = 20; // 'state 358' -> [ -> shift (target=10, len=0)
actionsTable[91691] = 70; // 'state 358' -> async -> shift (target=35, len=0)
actionsTable[91692] = 72; // 'state 358' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 91695, 91697); // 'state 358' -> get..set -> shift (target=403, len=0)
actionsTable[91697] = 74; // 'state 358' -> class -> shift (target=37, len=0)
actionsTable[91702] = 28; // 'state 358' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 91707, 91709); // 'state 358' -> void..typeof -> shift (target=15, len=0)
actionsTable[91710] = 32; // 'state 358' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 91717, 91719); // 'state 358' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 91720, 91723); // 'state 358' -> !..delete -> shift (target=15, len=0)
actionsTable[91723] = 34; // 'state 358' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 91727, 91730); // 'state 358' -> number..template_string -> shift (target=399, len=0)
actionsTable[91736] = 36; // 'state 358' -> update_operator -> shift (target=18, len=0)
actionsTable[91737] = 818; // 'state 358' -> identifier -> shift (target=409, len=0)
actionsTable[91738] = 798; // 'state 358' -> regex -> shift (target=399, len=0)
actionsTable[91909] = 80; // 'state 359' -> { -> shift (target=40, len=0)
actionsTable[91917] = 1460; // 'state 359' -> ; -> shift (target=730, len=0)
actionsTable.fill(3441, 92160, 92168); // 'state 360' -> true..if -> reduce (target=184, len=6)
actionsTable[92168] = 86; // 'state 360' -> ( -> shift (target=43, len=0)
actionsTable.fill(3441, 92169, 92179); // 'state 360' -> )..of -> reduce (target=184, len=6)
actionsTable[92179] = 88; // 'state 360' -> in -> shift (target=44, len=0)
actionsTable.fill(3441, 92180, 92183); // 'state 360' -> return..try -> reduce (target=184, len=6)
actionsTable.fill(3441, 92185, 92194); // 'state 360' -> switch.., -> reduce (target=184, len=6)
actionsTable[92194] = 90; // 'state 360' -> * -> shift (target=45, len=0)
actionsTable[92195] = 92; // 'state 360' -> as -> shift (target=46, len=0)
actionsTable.fill(3441, 92196, 92198); // 'state 360' -> type..export -> reduce (target=184, len=6)
actionsTable[92201] = 94; // 'state 360' -> [ -> shift (target=47, len=0)
actionsTable.fill(3441, 92202, 92210); // 'state 360' -> ]..class -> reduce (target=184, len=6)
actionsTable.fill(3441, 92211, 92213); // 'state 360' -> implements..interface -> reduce (target=184, len=6)
actionsTable.fill(88, 92214, 92216); // 'state 360' -> <..> -> shift (target=44, len=0)
actionsTable[92216] = 96; // 'state 360' -> | -> shift (target=48, len=0)
actionsTable[92217] = 98; // 'state 360' -> & -> shift (target=49, len=0)
actionsTable.fill(3441, 92219, 92221); // 'state 360' -> void..typeof -> reduce (target=184, len=6)
actionsTable[92222] = 3441; // 'state 360' -> new -> reduce (target=184, len=6)
actionsTable[92223] = 100; // 'state 360' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 92224, 92226); // 'state 360' -> ||..?? -> shift (target=51, len=0)
actionsTable[92226] = 104; // 'state 360' -> && -> shift (target=52, len=0)
actionsTable[92227] = 106; // 'state 360' -> ^ -> shift (target=53, len=0)
actionsTable[92228] = 88; // 'state 360' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 92229, 92231); // 'state 360' -> +..- -> shift (target=54, len=0)
actionsTable[92231] = 90; // 'state 360' -> ** -> shift (target=45, len=0)
actionsTable.fill(3441, 92232, 92236); // 'state 360' -> !..await -> reduce (target=184, len=6)
actionsTable[92236] = 110; // 'state 360' -> ?. -> shift (target=55, len=0)
actionsTable[92237] = 864; // 'state 360' -> . -> shift (target=432, len=0)
actionsTable.fill(3441, 92238, 92243); // 'state 360' -> private_property_identifier..accessibility_modifier -> reduce (target=184, len=6)
actionsTable[92244] = 112; // 'state 360' -> equality_operator -> shift (target=56, len=0)
actionsTable[92245] = 88; // 'state 360' -> relational_operator -> shift (target=44, len=0)
actionsTable[92246] = 114; // 'state 360' -> shift_operator -> shift (target=57, len=0)
actionsTable[92247] = 90; // 'state 360' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[92248] = 866; // 'state 360' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(3441, 92249, 92252); // 'state 360' -> identifier..@par-gen.EOF -> reduce (target=184, len=6)
actionsTable.fill(798, 92416, 92421); // 'state 361' -> true..super -> shift (target=399, len=0)
actionsTable[92421] = 68; // 'state 361' -> { -> shift (target=34, len=0)
actionsTable[92424] = 4; // 'state 361' -> ( -> shift (target=2, len=0)
actionsTable[92434] = 806; // 'state 361' -> of -> shift (target=403, len=0)
actionsTable[92448] = 806; // 'state 361' -> from -> shift (target=403, len=0)
actionsTable[92452] = 806; // 'state 361' -> type -> shift (target=403, len=0)
actionsTable[92457] = 20; // 'state 361' -> [ -> shift (target=10, len=0)
actionsTable[92459] = 70; // 'state 361' -> async -> shift (target=35, len=0)
actionsTable[92460] = 72; // 'state 361' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 92463, 92465); // 'state 361' -> get..set -> shift (target=403, len=0)
actionsTable[92465] = 74; // 'state 361' -> class -> shift (target=37, len=0)
actionsTable[92470] = 28; // 'state 361' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 92475, 92477); // 'state 361' -> void..typeof -> shift (target=15, len=0)
actionsTable[92478] = 32; // 'state 361' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 92485, 92487); // 'state 361' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 92488, 92491); // 'state 361' -> !..delete -> shift (target=15, len=0)
actionsTable[92491] = 34; // 'state 361' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 92495, 92498); // 'state 361' -> number..template_string -> shift (target=399, len=0)
actionsTable[92504] = 36; // 'state 361' -> update_operator -> shift (target=18, len=0)
actionsTable[92505] = 818; // 'state 361' -> identifier -> shift (target=409, len=0)
actionsTable[92506] = 798; // 'state 361' -> regex -> shift (target=399, len=0)
actionsTable[92680] = 86; // 'state 362' -> ( -> shift (target=43, len=0)
actionsTable[92681] = 2323; // 'state 362' -> ) -> reduce (target=137, len=4)
actionsTable[92691] = 88; // 'state 362' -> in -> shift (target=44, len=0)
actionsTable[92705] = 2323; // 'state 362' -> , -> reduce (target=137, len=4)
actionsTable[92706] = 90; // 'state 362' -> * -> shift (target=45, len=0)
actionsTable[92707] = 92; // 'state 362' -> as -> shift (target=46, len=0)
actionsTable[92713] = 94; // 'state 362' -> [ -> shift (target=47, len=0)
actionsTable.fill(88, 92726, 92728); // 'state 362' -> <..> -> shift (target=44, len=0)
actionsTable[92728] = 96; // 'state 362' -> | -> shift (target=48, len=0)
actionsTable[92729] = 98; // 'state 362' -> & -> shift (target=49, len=0)
actionsTable[92735] = 100; // 'state 362' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 92736, 92738); // 'state 362' -> ||..?? -> shift (target=51, len=0)
actionsTable[92738] = 104; // 'state 362' -> && -> shift (target=52, len=0)
actionsTable[92739] = 106; // 'state 362' -> ^ -> shift (target=53, len=0)
actionsTable[92740] = 88; // 'state 362' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 92741, 92743); // 'state 362' -> +..- -> shift (target=54, len=0)
actionsTable[92743] = 90; // 'state 362' -> ** -> shift (target=45, len=0)
actionsTable[92748] = 110; // 'state 362' -> ?. -> shift (target=55, len=0)
actionsTable[92749] = 864; // 'state 362' -> . -> shift (target=432, len=0)
actionsTable[92756] = 112; // 'state 362' -> equality_operator -> shift (target=56, len=0)
actionsTable[92757] = 88; // 'state 362' -> relational_operator -> shift (target=44, len=0)
actionsTable[92758] = 114; // 'state 362' -> shift_operator -> shift (target=57, len=0)
actionsTable[92759] = 90; // 'state 362' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[92760] = 866; // 'state 362' -> update_operator -> shift (target=433, len=0)
actionsTable[92933] = 80; // 'state 363' -> { -> shift (target=40, len=0)
actionsTable[92955] = 164; // 'state 363' -> : -> shift (target=82, len=0)
actionsTable[92981] = 164; // 'state 363' -> ?: -> shift (target=82, len=0)
actionsTable[93189] = 80; // 'state 364' -> { -> shift (target=40, len=0)
actionsTable.fill(798, 93440, 93445); // 'state 365' -> true..super -> shift (target=399, len=0)
actionsTable[93445] = 68; // 'state 365' -> { -> shift (target=34, len=0)
actionsTable[93448] = 4; // 'state 365' -> ( -> shift (target=2, len=0)
actionsTable[93458] = 806; // 'state 365' -> of -> shift (target=403, len=0)
actionsTable[93472] = 806; // 'state 365' -> from -> shift (target=403, len=0)
actionsTable[93476] = 806; // 'state 365' -> type -> shift (target=403, len=0)
actionsTable[93481] = 20; // 'state 365' -> [ -> shift (target=10, len=0)
actionsTable[93483] = 70; // 'state 365' -> async -> shift (target=35, len=0)
actionsTable[93484] = 72; // 'state 365' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 93487, 93489); // 'state 365' -> get..set -> shift (target=403, len=0)
actionsTable[93489] = 74; // 'state 365' -> class -> shift (target=37, len=0)
actionsTable[93494] = 28; // 'state 365' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 93499, 93501); // 'state 365' -> void..typeof -> shift (target=15, len=0)
actionsTable[93502] = 32; // 'state 365' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 93509, 93511); // 'state 365' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 93512, 93515); // 'state 365' -> !..delete -> shift (target=15, len=0)
actionsTable[93515] = 34; // 'state 365' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 93519, 93522); // 'state 365' -> number..template_string -> shift (target=399, len=0)
actionsTable[93528] = 36; // 'state 365' -> update_operator -> shift (target=18, len=0)
actionsTable[93529] = 818; // 'state 365' -> identifier -> shift (target=409, len=0)
actionsTable[93530] = 798; // 'state 365' -> regex -> shift (target=399, len=0)
actionsTable[93702] = 2347; // 'state 366' -> } -> reduce (target=149, len=4)
actionsTable[93704] = 86; // 'state 366' -> ( -> shift (target=43, len=0)
actionsTable[93709] = 1468; // 'state 366' -> ; -> shift (target=734, len=0)
actionsTable[93714] = 2347; // 'state 366' -> of -> reduce (target=149, len=4)
actionsTable[93715] = 88; // 'state 366' -> in -> shift (target=44, len=0)
actionsTable[93728] = 2347; // 'state 366' -> from -> reduce (target=149, len=4)
actionsTable[93730] = 90; // 'state 366' -> * -> shift (target=45, len=0)
actionsTable[93731] = 92; // 'state 366' -> as -> shift (target=46, len=0)
actionsTable[93732] = 2347; // 'state 366' -> type -> reduce (target=149, len=4)
actionsTable[93737] = 94; // 'state 366' -> [ -> shift (target=47, len=0)
actionsTable[93739] = 2347; // 'state 366' -> async -> reduce (target=149, len=4)
actionsTable.fill(2347, 93741, 93745); // 'state 366' -> static..set -> reduce (target=149, len=4)
actionsTable.fill(88, 93750, 93752); // 'state 366' -> <..> -> shift (target=44, len=0)
actionsTable[93752] = 96; // 'state 366' -> | -> shift (target=48, len=0)
actionsTable[93753] = 98; // 'state 366' -> & -> shift (target=49, len=0)
actionsTable[93759] = 100; // 'state 366' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 93760, 93762); // 'state 366' -> ||..?? -> shift (target=51, len=0)
actionsTable[93762] = 104; // 'state 366' -> && -> shift (target=52, len=0)
actionsTable[93763] = 106; // 'state 366' -> ^ -> shift (target=53, len=0)
actionsTable[93764] = 88; // 'state 366' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 93765, 93767); // 'state 366' -> +..- -> shift (target=54, len=0)
actionsTable[93767] = 90; // 'state 366' -> ** -> shift (target=45, len=0)
actionsTable[93772] = 110; // 'state 366' -> ?. -> shift (target=55, len=0)
actionsTable[93773] = 864; // 'state 366' -> . -> shift (target=432, len=0)
actionsTable.fill(2347, 93774, 93777); // 'state 366' -> private_property_identifier..string -> reduce (target=149, len=4)
actionsTable[93778] = 2347; // 'state 366' -> accessibility_modifier -> reduce (target=149, len=4)
actionsTable[93780] = 112; // 'state 366' -> equality_operator -> shift (target=56, len=0)
actionsTable[93781] = 88; // 'state 366' -> relational_operator -> shift (target=44, len=0)
actionsTable[93782] = 114; // 'state 366' -> shift_operator -> shift (target=57, len=0)
actionsTable[93783] = 90; // 'state 366' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[93784] = 866; // 'state 366' -> update_operator -> shift (target=433, len=0)
actionsTable[93785] = 2347; // 'state 366' -> identifier -> reduce (target=149, len=4)
actionsTable[93960] = 86; // 'state 367' -> ( -> shift (target=43, len=0)
actionsTable[93961] = 2841; // 'state 367' -> ) -> reduce (target=140, len=5)
actionsTable[93971] = 88; // 'state 367' -> in -> shift (target=44, len=0)
actionsTable[93985] = 2841; // 'state 367' -> , -> reduce (target=140, len=5)
actionsTable[93986] = 90; // 'state 367' -> * -> shift (target=45, len=0)
actionsTable[93987] = 92; // 'state 367' -> as -> shift (target=46, len=0)
actionsTable[93993] = 94; // 'state 367' -> [ -> shift (target=47, len=0)
actionsTable.fill(88, 94006, 94008); // 'state 367' -> <..> -> shift (target=44, len=0)
actionsTable[94008] = 96; // 'state 367' -> | -> shift (target=48, len=0)
actionsTable[94009] = 98; // 'state 367' -> & -> shift (target=49, len=0)
actionsTable[94015] = 100; // 'state 367' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 94016, 94018); // 'state 367' -> ||..?? -> shift (target=51, len=0)
actionsTable[94018] = 104; // 'state 367' -> && -> shift (target=52, len=0)
actionsTable[94019] = 106; // 'state 367' -> ^ -> shift (target=53, len=0)
actionsTable[94020] = 88; // 'state 367' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 94021, 94023); // 'state 367' -> +..- -> shift (target=54, len=0)
actionsTable[94023] = 90; // 'state 367' -> ** -> shift (target=45, len=0)
actionsTable[94028] = 110; // 'state 367' -> ?. -> shift (target=55, len=0)
actionsTable[94029] = 864; // 'state 367' -> . -> shift (target=432, len=0)
actionsTable[94036] = 112; // 'state 367' -> equality_operator -> shift (target=56, len=0)
actionsTable[94037] = 88; // 'state 367' -> relational_operator -> shift (target=44, len=0)
actionsTable[94038] = 114; // 'state 367' -> shift_operator -> shift (target=57, len=0)
actionsTable[94039] = 90; // 'state 367' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[94040] = 866; // 'state 367' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(942, 94208, 94211); // 'state 368' -> true..null -> shift (target=471, len=0)
actionsTable[94213] = 262; // 'state 368' -> { -> shift (target=131, len=0)
actionsTable[94216] = 264; // 'state 368' -> ( -> shift (target=132, len=0)
actionsTable[94249] = 266; // 'state 368' -> [ -> shift (target=133, len=0)
actionsTable[94262] = 28; // 'state 368' -> < -> shift (target=14, len=0)
actionsTable[94263] = 1470; // 'state 368' -> > -> shift (target=735, len=0)
actionsTable[94264] = 268; // 'state 368' -> | -> shift (target=134, len=0)
actionsTable[94267] = 942; // 'state 368' -> void -> shift (target=471, len=0)
actionsTable[94268] = 944; // 'state 368' -> typeof -> shift (target=472, len=0)
actionsTable.fill(942, 94287, 94289); // 'state 368' -> number..string -> shift (target=471, len=0)
actionsTable[94297] = 270; // 'state 368' -> identifier -> shift (target=135, len=0)
actionsTable.fill(798, 94464, 94469); // 'state 369' -> true..super -> shift (target=399, len=0)
actionsTable[94469] = 2; // 'state 369' -> { -> shift (target=1, len=0)
actionsTable[94471] = 800; // 'state 369' -> if -> shift (target=400, len=0)
actionsTable[94472] = 4; // 'state 369' -> ( -> shift (target=2, len=0)
actionsTable[94475] = 802; // 'state 369' -> while -> shift (target=401, len=0)
actionsTable[94476] = 6; // 'state 369' -> do -> shift (target=3, len=0)
actionsTable[94478] = 804; // 'state 369' -> for -> shift (target=402, len=0)
actionsTable.fill(8, 94479, 94482); // 'state 369' -> const..var -> shift (target=4, len=0)
actionsTable[94482] = 806; // 'state 369' -> of -> shift (target=403, len=0)
actionsTable[94484] = 10; // 'state 369' -> return -> shift (target=5, len=0)
actionsTable[94485] = 12; // 'state 369' -> throw -> shift (target=6, len=0)
actionsTable[94486] = 14; // 'state 369' -> try -> shift (target=7, len=0)
actionsTable[94489] = 808; // 'state 369' -> switch -> shift (target=404, len=0)
actionsTable[94493] = 810; // 'state 369' -> break -> shift (target=405, len=0)
actionsTable[94494] = 812; // 'state 369' -> continue -> shift (target=406, len=0)
actionsTable[94495] = 16; // 'state 369' -> import -> shift (target=8, len=0)
actionsTable[94496] = 806; // 'state 369' -> from -> shift (target=403, len=0)
actionsTable[94500] = 814; // 'state 369' -> type -> shift (target=407, len=0)
actionsTable[94501] = 18; // 'state 369' -> export -> shift (target=9, len=0)
actionsTable[94505] = 20; // 'state 369' -> [ -> shift (target=10, len=0)
actionsTable[94507] = 22; // 'state 369' -> async -> shift (target=11, len=0)
actionsTable[94508] = 24; // 'state 369' -> function -> shift (target=12, len=0)
actionsTable.fill(806, 94511, 94513); // 'state 369' -> get..set -> shift (target=403, len=0)
actionsTable[94513] = 26; // 'state 369' -> class -> shift (target=13, len=0)
actionsTable[94516] = 816; // 'state 369' -> interface -> shift (target=408, len=0)
actionsTable[94518] = 28; // 'state 369' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 94523, 94525); // 'state 369' -> void..typeof -> shift (target=15, len=0)
actionsTable[94526] = 32; // 'state 369' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 94533, 94535); // 'state 369' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 94536, 94539); // 'state 369' -> !..delete -> shift (target=15, len=0)
actionsTable[94539] = 34; // 'state 369' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 94543, 94546); // 'state 369' -> number..template_string -> shift (target=399, len=0)
actionsTable[94552] = 36; // 'state 369' -> update_operator -> shift (target=18, len=0)
actionsTable[94553] = 818; // 'state 369' -> identifier -> shift (target=409, len=0)
actionsTable[94554] = 798; // 'state 369' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 94720, 94725); // 'state 370' -> true..super -> shift (target=399, len=0)
actionsTable[94725] = 2; // 'state 370' -> { -> shift (target=1, len=0)
actionsTable[94727] = 800; // 'state 370' -> if -> shift (target=400, len=0)
actionsTable[94728] = 4; // 'state 370' -> ( -> shift (target=2, len=0)
actionsTable[94731] = 802; // 'state 370' -> while -> shift (target=401, len=0)
actionsTable[94732] = 6; // 'state 370' -> do -> shift (target=3, len=0)
actionsTable[94734] = 804; // 'state 370' -> for -> shift (target=402, len=0)
actionsTable.fill(8, 94735, 94738); // 'state 370' -> const..var -> shift (target=4, len=0)
actionsTable[94738] = 806; // 'state 370' -> of -> shift (target=403, len=0)
actionsTable[94740] = 10; // 'state 370' -> return -> shift (target=5, len=0)
actionsTable[94741] = 12; // 'state 370' -> throw -> shift (target=6, len=0)
actionsTable[94742] = 14; // 'state 370' -> try -> shift (target=7, len=0)
actionsTable[94745] = 808; // 'state 370' -> switch -> shift (target=404, len=0)
actionsTable[94749] = 810; // 'state 370' -> break -> shift (target=405, len=0)
actionsTable[94750] = 812; // 'state 370' -> continue -> shift (target=406, len=0)
actionsTable[94751] = 16; // 'state 370' -> import -> shift (target=8, len=0)
actionsTable[94752] = 806; // 'state 370' -> from -> shift (target=403, len=0)
actionsTable[94756] = 814; // 'state 370' -> type -> shift (target=407, len=0)
actionsTable[94757] = 18; // 'state 370' -> export -> shift (target=9, len=0)
actionsTable[94761] = 20; // 'state 370' -> [ -> shift (target=10, len=0)
actionsTable[94763] = 22; // 'state 370' -> async -> shift (target=11, len=0)
actionsTable[94764] = 24; // 'state 370' -> function -> shift (target=12, len=0)
actionsTable.fill(806, 94767, 94769); // 'state 370' -> get..set -> shift (target=403, len=0)
actionsTable[94769] = 26; // 'state 370' -> class -> shift (target=13, len=0)
actionsTable[94772] = 816; // 'state 370' -> interface -> shift (target=408, len=0)
actionsTable[94774] = 28; // 'state 370' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 94779, 94781); // 'state 370' -> void..typeof -> shift (target=15, len=0)
actionsTable[94782] = 32; // 'state 370' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 94789, 94791); // 'state 370' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 94792, 94795); // 'state 370' -> !..delete -> shift (target=15, len=0)
actionsTable[94795] = 34; // 'state 370' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 94799, 94802); // 'state 370' -> number..template_string -> shift (target=399, len=0)
actionsTable[94808] = 36; // 'state 370' -> update_operator -> shift (target=18, len=0)
actionsTable[94809] = 818; // 'state 370' -> identifier -> shift (target=409, len=0)
actionsTable[94810] = 798; // 'state 370' -> regex -> shift (target=399, len=0)
actionsTable[94984] = 86; // 'state 371' -> ( -> shift (target=43, len=0)
actionsTable[94985] = 774; // 'state 371' -> ) -> shift (target=387, len=0)
actionsTable[94995] = 88; // 'state 371' -> in -> shift (target=44, len=0)
actionsTable[95010] = 90; // 'state 371' -> * -> shift (target=45, len=0)
actionsTable[95011] = 92; // 'state 371' -> as -> shift (target=46, len=0)
actionsTable[95017] = 94; // 'state 371' -> [ -> shift (target=47, len=0)
actionsTable.fill(88, 95030, 95032); // 'state 371' -> <..> -> shift (target=44, len=0)
actionsTable[95032] = 96; // 'state 371' -> | -> shift (target=48, len=0)
actionsTable[95033] = 98; // 'state 371' -> & -> shift (target=49, len=0)
actionsTable[95039] = 100; // 'state 371' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 95040, 95042); // 'state 371' -> ||..?? -> shift (target=51, len=0)
actionsTable[95042] = 104; // 'state 371' -> && -> shift (target=52, len=0)
actionsTable[95043] = 106; // 'state 371' -> ^ -> shift (target=53, len=0)
actionsTable[95044] = 88; // 'state 371' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 95045, 95047); // 'state 371' -> +..- -> shift (target=54, len=0)
actionsTable[95047] = 90; // 'state 371' -> ** -> shift (target=45, len=0)
actionsTable[95052] = 110; // 'state 371' -> ?. -> shift (target=55, len=0)
actionsTable[95053] = 864; // 'state 371' -> . -> shift (target=432, len=0)
actionsTable[95060] = 112; // 'state 371' -> equality_operator -> shift (target=56, len=0)
actionsTable[95061] = 88; // 'state 371' -> relational_operator -> shift (target=44, len=0)
actionsTable[95062] = 114; // 'state 371' -> shift_operator -> shift (target=57, len=0)
actionsTable[95063] = 90; // 'state 371' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[95064] = 866; // 'state 371' -> update_operator -> shift (target=433, len=0)
actionsTable[95237] = 80; // 'state 372' -> { -> shift (target=40, len=0)
actionsTable[95493] = 80; // 'state 373' -> { -> shift (target=40, len=0)
actionsTable[95752] = 86; // 'state 374' -> ( -> shift (target=43, len=0)
actionsTable[95763] = 88; // 'state 374' -> in -> shift (target=44, len=0)
actionsTable[95771] = 776; // 'state 374' -> : -> shift (target=388, len=0)
actionsTable[95778] = 90; // 'state 374' -> * -> shift (target=45, len=0)
actionsTable[95779] = 92; // 'state 374' -> as -> shift (target=46, len=0)
actionsTable[95785] = 94; // 'state 374' -> [ -> shift (target=47, len=0)
actionsTable.fill(88, 95798, 95800); // 'state 374' -> <..> -> shift (target=44, len=0)
actionsTable[95800] = 96; // 'state 374' -> | -> shift (target=48, len=0)
actionsTable[95801] = 98; // 'state 374' -> & -> shift (target=49, len=0)
actionsTable[95807] = 100; // 'state 374' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 95808, 95810); // 'state 374' -> ||..?? -> shift (target=51, len=0)
actionsTable[95810] = 104; // 'state 374' -> && -> shift (target=52, len=0)
actionsTable[95811] = 106; // 'state 374' -> ^ -> shift (target=53, len=0)
actionsTable[95812] = 88; // 'state 374' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 95813, 95815); // 'state 374' -> +..- -> shift (target=54, len=0)
actionsTable[95815] = 90; // 'state 374' -> ** -> shift (target=45, len=0)
actionsTable[95820] = 110; // 'state 374' -> ?. -> shift (target=55, len=0)
actionsTable[95821] = 864; // 'state 374' -> . -> shift (target=432, len=0)
actionsTable[95828] = 112; // 'state 374' -> equality_operator -> shift (target=56, len=0)
actionsTable[95829] = 88; // 'state 374' -> relational_operator -> shift (target=44, len=0)
actionsTable[95830] = 114; // 'state 374' -> shift_operator -> shift (target=57, len=0)
actionsTable[95831] = 90; // 'state 374' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[95832] = 866; // 'state 374' -> update_operator -> shift (target=433, len=0)
actionsTable.fill(798, 96000, 96005); // 'state 375' -> true..super -> shift (target=399, len=0)
actionsTable[96005] = 2; // 'state 375' -> { -> shift (target=1, len=0)
actionsTable[96006] = 1249; // 'state 375' -> } -> reduce (target=112, len=2)
actionsTable[96007] = 800; // 'state 375' -> if -> shift (target=400, len=0)
actionsTable[96008] = 4; // 'state 375' -> ( -> shift (target=2, len=0)
actionsTable[96011] = 802; // 'state 375' -> while -> shift (target=401, len=0)
actionsTable[96012] = 6; // 'state 375' -> do -> shift (target=3, len=0)
actionsTable[96014] = 804; // 'state 375' -> for -> shift (target=402, len=0)
actionsTable.fill(8, 96015, 96018); // 'state 375' -> const..var -> shift (target=4, len=0)
actionsTable[96018] = 806; // 'state 375' -> of -> shift (target=403, len=0)
actionsTable[96020] = 10; // 'state 375' -> return -> shift (target=5, len=0)
actionsTable[96021] = 12; // 'state 375' -> throw -> shift (target=6, len=0)
actionsTable[96022] = 14; // 'state 375' -> try -> shift (target=7, len=0)
actionsTable[96025] = 808; // 'state 375' -> switch -> shift (target=404, len=0)
actionsTable[96026] = 1249; // 'state 375' -> case -> reduce (target=112, len=2)
actionsTable[96028] = 1249; // 'state 375' -> default -> reduce (target=112, len=2)
actionsTable[96029] = 810; // 'state 375' -> break -> shift (target=405, len=0)
actionsTable[96030] = 812; // 'state 375' -> continue -> shift (target=406, len=0)
actionsTable[96031] = 16; // 'state 375' -> import -> shift (target=8, len=0)
actionsTable[96032] = 806; // 'state 375' -> from -> shift (target=403, len=0)
actionsTable[96036] = 814; // 'state 375' -> type -> shift (target=407, len=0)
actionsTable[96037] = 18; // 'state 375' -> export -> shift (target=9, len=0)
actionsTable[96041] = 20; // 'state 375' -> [ -> shift (target=10, len=0)
actionsTable[96043] = 22; // 'state 375' -> async -> shift (target=11, len=0)
actionsTable[96044] = 24; // 'state 375' -> function -> shift (target=12, len=0)
actionsTable.fill(806, 96047, 96049); // 'state 375' -> get..set -> shift (target=403, len=0)
actionsTable[96049] = 26; // 'state 375' -> class -> shift (target=13, len=0)
actionsTable[96052] = 816; // 'state 375' -> interface -> shift (target=408, len=0)
actionsTable[96054] = 28; // 'state 375' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 96059, 96061); // 'state 375' -> void..typeof -> shift (target=15, len=0)
actionsTable[96062] = 32; // 'state 375' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 96069, 96071); // 'state 375' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 96072, 96075); // 'state 375' -> !..delete -> shift (target=15, len=0)
actionsTable[96075] = 34; // 'state 375' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 96079, 96082); // 'state 375' -> number..template_string -> shift (target=399, len=0)
actionsTable[96088] = 36; // 'state 375' -> update_operator -> shift (target=18, len=0)
actionsTable[96089] = 818; // 'state 375' -> identifier -> shift (target=409, len=0)
actionsTable[96090] = 798; // 'state 375' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 96256, 96261); // 'state 376' -> true..super -> shift (target=399, len=0)
actionsTable[96261] = 562; // 'state 376' -> { -> shift (target=281, len=0)
actionsTable[96264] = 4; // 'state 376' -> ( -> shift (target=2, len=0)
actionsTable[96274] = 806; // 'state 376' -> of -> shift (target=403, len=0)
actionsTable[96288] = 806; // 'state 376' -> from -> shift (target=403, len=0)
actionsTable[96292] = 806; // 'state 376' -> type -> shift (target=403, len=0)
actionsTable[96297] = 566; // 'state 376' -> [ -> shift (target=283, len=0)
actionsTable[96299] = 70; // 'state 376' -> async -> shift (target=35, len=0)
actionsTable[96300] = 72; // 'state 376' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 96303, 96305); // 'state 376' -> get..set -> shift (target=403, len=0)
actionsTable[96305] = 74; // 'state 376' -> class -> shift (target=37, len=0)
actionsTable[96310] = 28; // 'state 376' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 96315, 96317); // 'state 376' -> void..typeof -> shift (target=15, len=0)
actionsTable[96318] = 32; // 'state 376' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 96325, 96327); // 'state 376' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 96328, 96331); // 'state 376' -> !..delete -> shift (target=15, len=0)
actionsTable[96331] = 34; // 'state 376' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 96335, 96338); // 'state 376' -> number..template_string -> shift (target=399, len=0)
actionsTable[96344] = 36; // 'state 376' -> update_operator -> shift (target=18, len=0)
actionsTable[96345] = 1360; // 'state 376' -> identifier -> shift (target=680, len=0)
actionsTable[96346] = 798; // 'state 376' -> regex -> shift (target=399, len=0)
actionsTable[96517] = 80; // 'state 377' -> { -> shift (target=40, len=0)
actionsTable[96518] = 1883; // 'state 377' -> } -> reduce (target=173, len=3)
actionsTable[96525] = 1883; // 'state 377' -> ; -> reduce (target=173, len=3)
actionsTable[96530] = 1883; // 'state 377' -> of -> reduce (target=173, len=3)
actionsTable[96539] = 164; // 'state 377' -> : -> shift (target=82, len=0)
actionsTable.fill(1883, 96544, 96546); // 'state 377' -> from.., -> reduce (target=173, len=3)
actionsTable[96548] = 1883; // 'state 377' -> type -> reduce (target=173, len=3)
actionsTable[96553] = 1883; // 'state 377' -> [ -> reduce (target=173, len=3)
actionsTable[96555] = 1883; // 'state 377' -> async -> reduce (target=173, len=3)
actionsTable.fill(1883, 96558, 96561); // 'state 377' -> readonly..set -> reduce (target=173, len=3)
actionsTable[96565] = 164; // 'state 377' -> ?: -> shift (target=82, len=0)
actionsTable[96574] = 1883; // 'state 377' -> new -> reduce (target=173, len=3)
actionsTable.fill(1883, 96591, 96593); // 'state 377' -> number..string -> reduce (target=173, len=3)
actionsTable[96601] = 1883; // 'state 377' -> identifier -> reduce (target=173, len=3)
actionsTable[96773] = 80; // 'state 378' -> { -> shift (target=40, len=0)
actionsTable[96774] = 1883; // 'state 378' -> } -> reduce (target=173, len=3)
actionsTable[96781] = 1883; // 'state 378' -> ; -> reduce (target=173, len=3)
actionsTable[96786] = 1883; // 'state 378' -> of -> reduce (target=173, len=3)
actionsTable.fill(1883, 96800, 96802); // 'state 378' -> from.., -> reduce (target=173, len=3)
actionsTable[96804] = 1883; // 'state 378' -> type -> reduce (target=173, len=3)
actionsTable[96809] = 1883; // 'state 378' -> [ -> reduce (target=173, len=3)
actionsTable[96811] = 1883; // 'state 378' -> async -> reduce (target=173, len=3)
actionsTable.fill(1883, 96814, 96817); // 'state 378' -> readonly..set -> reduce (target=173, len=3)
actionsTable[96830] = 1883; // 'state 378' -> new -> reduce (target=173, len=3)
actionsTable.fill(1883, 96847, 96849); // 'state 378' -> number..string -> reduce (target=173, len=3)
actionsTable[96857] = 1883; // 'state 378' -> identifier -> reduce (target=173, len=3)
actionsTable.fill(1218, 97024, 97027); // 'state 379' -> true..null -> shift (target=609, len=0)
actionsTable.fill(798, 97027, 97029); // 'state 379' -> this..super -> shift (target=399, len=0)
actionsTable[97029] = 760; // 'state 379' -> { -> shift (target=380, len=0)
actionsTable[97032] = 576; // 'state 379' -> ( -> shift (target=288, len=0)
actionsTable[97042] = 806; // 'state 379' -> of -> shift (target=403, len=0)
actionsTable[97056] = 806; // 'state 379' -> from -> shift (target=403, len=0)
actionsTable[97060] = 806; // 'state 379' -> type -> shift (target=403, len=0)
actionsTable[97065] = 424; // 'state 379' -> [ -> shift (target=212, len=0)
actionsTable[97067] = 70; // 'state 379' -> async -> shift (target=35, len=0)
actionsTable[97068] = 72; // 'state 379' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 97071, 97073); // 'state 379' -> get..set -> shift (target=403, len=0)
actionsTable[97073] = 74; // 'state 379' -> class -> shift (target=37, len=0)
actionsTable[97078] = 28; // 'state 379' -> < -> shift (target=14, len=0)
actionsTable[97080] = 268; // 'state 379' -> | -> shift (target=134, len=0)
actionsTable[97083] = 578; // 'state 379' -> void -> shift (target=289, len=0)
actionsTable[97084] = 580; // 'state 379' -> typeof -> shift (target=290, len=0)
actionsTable[97086] = 32; // 'state 379' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 97093, 97095); // 'state 379' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 97096, 97099); // 'state 379' -> !..delete -> shift (target=15, len=0)
actionsTable[97099] = 34; // 'state 379' -> await -> shift (target=17, len=0)
actionsTable.fill(1218, 97103, 97105); // 'state 379' -> number..string -> shift (target=609, len=0)
actionsTable[97105] = 798; // 'state 379' -> template_string -> shift (target=399, len=0)
actionsTable[97112] = 36; // 'state 379' -> update_operator -> shift (target=18, len=0)
actionsTable[97113] = 582; // 'state 379' -> identifier -> shift (target=291, len=0)
actionsTable[97114] = 798; // 'state 379' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 97280, 97285); // 'state 380' -> true..super -> shift (target=399, len=0)
actionsTable[97285] = 2; // 'state 380' -> { -> shift (target=1, len=0)
actionsTable[97286] = 1480; // 'state 380' -> } -> shift (target=740, len=0)
actionsTable[97287] = 800; // 'state 380' -> if -> shift (target=400, len=0)
actionsTable[97288] = 4; // 'state 380' -> ( -> shift (target=2, len=0)
actionsTable[97291] = 802; // 'state 380' -> while -> shift (target=401, len=0)
actionsTable[97292] = 6; // 'state 380' -> do -> shift (target=3, len=0)
actionsTable[97294] = 804; // 'state 380' -> for -> shift (target=402, len=0)
actionsTable.fill(8, 97295, 97298); // 'state 380' -> const..var -> shift (target=4, len=0)
actionsTable[97298] = 806; // 'state 380' -> of -> shift (target=403, len=0)
actionsTable[97300] = 10; // 'state 380' -> return -> shift (target=5, len=0)
actionsTable[97301] = 12; // 'state 380' -> throw -> shift (target=6, len=0)
actionsTable[97302] = 14; // 'state 380' -> try -> shift (target=7, len=0)
actionsTable[97305] = 808; // 'state 380' -> switch -> shift (target=404, len=0)
actionsTable[97309] = 810; // 'state 380' -> break -> shift (target=405, len=0)
actionsTable[97310] = 812; // 'state 380' -> continue -> shift (target=406, len=0)
actionsTable[97311] = 16; // 'state 380' -> import -> shift (target=8, len=0)
actionsTable[97312] = 806; // 'state 380' -> from -> shift (target=403, len=0)
actionsTable[97316] = 814; // 'state 380' -> type -> shift (target=407, len=0)
actionsTable[97317] = 18; // 'state 380' -> export -> shift (target=9, len=0)
actionsTable[97320] = 48; // 'state 380' -> ... -> shift (target=24, len=0)
actionsTable[97321] = 782; // 'state 380' -> [ -> shift (target=391, len=0)
actionsTable[97323] = 52; // 'state 380' -> async -> shift (target=26, len=0)
actionsTable[97324] = 24; // 'state 380' -> function -> shift (target=12, len=0)
actionsTable[97326] = 438; // 'state 380' -> readonly -> shift (target=219, len=0)
actionsTable.fill(54, 97327, 97329); // 'state 380' -> get..set -> shift (target=27, len=0)
actionsTable[97329] = 26; // 'state 380' -> class -> shift (target=13, len=0)
actionsTable[97332] = 816; // 'state 380' -> interface -> shift (target=408, len=0)
actionsTable[97334] = 28; // 'state 380' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 97339, 97341); // 'state 380' -> void..typeof -> shift (target=15, len=0)
actionsTable[97342] = 784; // 'state 380' -> new -> shift (target=392, len=0)
actionsTable.fill(30, 97349, 97351); // 'state 380' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 97352, 97355); // 'state 380' -> !..delete -> shift (target=15, len=0)
actionsTable[97355] = 34; // 'state 380' -> await -> shift (target=17, len=0)
actionsTable.fill(838, 97359, 97361); // 'state 380' -> number..string -> shift (target=419, len=0)
actionsTable[97361] = 798; // 'state 380' -> template_string -> shift (target=399, len=0)
actionsTable[97368] = 36; // 'state 380' -> update_operator -> shift (target=18, len=0)
actionsTable[97369] = 840; // 'state 380' -> identifier -> shift (target=420, len=0)
actionsTable[97370] = 798; // 'state 380' -> regex -> shift (target=399, len=0)
actionsTable.fill(942, 97536, 97539); // 'state 381' -> true..null -> shift (target=471, len=0)
actionsTable[97541] = 262; // 'state 381' -> { -> shift (target=131, len=0)
actionsTable[97544] = 264; // 'state 381' -> ( -> shift (target=132, len=0)
actionsTable[97577] = 266; // 'state 381' -> [ -> shift (target=133, len=0)
actionsTable[97590] = 28; // 'state 381' -> < -> shift (target=14, len=0)
actionsTable[97592] = 268; // 'state 381' -> | -> shift (target=134, len=0)
actionsTable[97595] = 942; // 'state 381' -> void -> shift (target=471, len=0)
actionsTable[97596] = 944; // 'state 381' -> typeof -> shift (target=472, len=0)
actionsTable.fill(942, 97615, 97617); // 'state 381' -> number..string -> shift (target=471, len=0)
actionsTable[97625] = 270; // 'state 381' -> identifier -> shift (target=135, len=0)
actionsTable[97797] = 80; // 'state 382' -> { -> shift (target=40, len=0)
actionsTable[97805] = 1460; // 'state 382' -> ; -> shift (target=730, len=0)
actionsTable[98054] = 2821; // 'state 383' -> } -> reduce (target=130, len=5)
actionsTable[98056] = 86; // 'state 383' -> ( -> shift (target=43, len=0)
actionsTable[98067] = 88; // 'state 383' -> in -> shift (target=44, len=0)
actionsTable[98081] = 2821; // 'state 383' -> , -> reduce (target=130, len=5)
actionsTable[98082] = 90; // 'state 383' -> * -> shift (target=45, len=0)
actionsTable[98083] = 92; // 'state 383' -> as -> shift (target=46, len=0)
actionsTable[98089] = 94; // 'state 383' -> [ -> shift (target=47, len=0)
actionsTable.fill(88, 98102, 98104); // 'state 383' -> <..> -> shift (target=44, len=0)
actionsTable[98104] = 96; // 'state 383' -> | -> shift (target=48, len=0)
actionsTable[98105] = 98; // 'state 383' -> & -> shift (target=49, len=0)
actionsTable[98111] = 100; // 'state 383' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 98112, 98114); // 'state 383' -> ||..?? -> shift (target=51, len=0)
actionsTable[98114] = 104; // 'state 383' -> && -> shift (target=52, len=0)
actionsTable[98115] = 106; // 'state 383' -> ^ -> shift (target=53, len=0)
actionsTable[98116] = 88; // 'state 383' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 98117, 98119); // 'state 383' -> +..- -> shift (target=54, len=0)
actionsTable[98119] = 90; // 'state 383' -> ** -> shift (target=45, len=0)
actionsTable[98124] = 110; // 'state 383' -> ?. -> shift (target=55, len=0)
actionsTable[98125] = 864; // 'state 383' -> . -> shift (target=432, len=0)
actionsTable[98132] = 112; // 'state 383' -> equality_operator -> shift (target=56, len=0)
actionsTable[98133] = 88; // 'state 383' -> relational_operator -> shift (target=44, len=0)
actionsTable[98134] = 114; // 'state 383' -> shift_operator -> shift (target=57, len=0)
actionsTable[98135] = 90; // 'state 383' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[98136] = 866; // 'state 383' -> update_operator -> shift (target=433, len=0)
actionsTable[98312] = 86; // 'state 384' -> ( -> shift (target=43, len=0)
actionsTable[98313] = 2835; // 'state 384' -> ) -> reduce (target=137, len=5)
actionsTable[98323] = 88; // 'state 384' -> in -> shift (target=44, len=0)
actionsTable[98337] = 2835; // 'state 384' -> , -> reduce (target=137, len=5)
actionsTable[98338] = 90; // 'state 384' -> * -> shift (target=45, len=0)
actionsTable[98339] = 92; // 'state 384' -> as -> shift (target=46, len=0)
actionsTable[98345] = 94; // 'state 384' -> [ -> shift (target=47, len=0)
actionsTable.fill(88, 98358, 98360); // 'state 384' -> <..> -> shift (target=44, len=0)
actionsTable[98360] = 96; // 'state 384' -> | -> shift (target=48, len=0)
actionsTable[98361] = 98; // 'state 384' -> & -> shift (target=49, len=0)
actionsTable[98367] = 100; // 'state 384' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 98368, 98370); // 'state 384' -> ||..?? -> shift (target=51, len=0)
actionsTable[98370] = 104; // 'state 384' -> && -> shift (target=52, len=0)
actionsTable[98371] = 106; // 'state 384' -> ^ -> shift (target=53, len=0)
actionsTable[98372] = 88; // 'state 384' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 98373, 98375); // 'state 384' -> +..- -> shift (target=54, len=0)
actionsTable[98375] = 90; // 'state 384' -> ** -> shift (target=45, len=0)
actionsTable[98380] = 110; // 'state 384' -> ?. -> shift (target=55, len=0)
actionsTable[98381] = 864; // 'state 384' -> . -> shift (target=432, len=0)
actionsTable[98388] = 112; // 'state 384' -> equality_operator -> shift (target=56, len=0)
actionsTable[98389] = 88; // 'state 384' -> relational_operator -> shift (target=44, len=0)
actionsTable[98390] = 114; // 'state 384' -> shift_operator -> shift (target=57, len=0)
actionsTable[98391] = 90; // 'state 384' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[98392] = 866; // 'state 384' -> update_operator -> shift (target=433, len=0)
actionsTable[98565] = 80; // 'state 385' -> { -> shift (target=40, len=0)
actionsTable[98822] = 2859; // 'state 386' -> } -> reduce (target=149, len=5)
actionsTable[98824] = 86; // 'state 386' -> ( -> shift (target=43, len=0)
actionsTable[98829] = 1490; // 'state 386' -> ; -> shift (target=745, len=0)
actionsTable[98834] = 2859; // 'state 386' -> of -> reduce (target=149, len=5)
actionsTable[98835] = 88; // 'state 386' -> in -> shift (target=44, len=0)
actionsTable[98848] = 2859; // 'state 386' -> from -> reduce (target=149, len=5)
actionsTable[98850] = 90; // 'state 386' -> * -> shift (target=45, len=0)
actionsTable[98851] = 92; // 'state 386' -> as -> shift (target=46, len=0)
actionsTable[98852] = 2859; // 'state 386' -> type -> reduce (target=149, len=5)
actionsTable[98857] = 94; // 'state 386' -> [ -> shift (target=47, len=0)
actionsTable[98859] = 2859; // 'state 386' -> async -> reduce (target=149, len=5)
actionsTable.fill(2859, 98861, 98865); // 'state 386' -> static..set -> reduce (target=149, len=5)
actionsTable.fill(88, 98870, 98872); // 'state 386' -> <..> -> shift (target=44, len=0)
actionsTable[98872] = 96; // 'state 386' -> | -> shift (target=48, len=0)
actionsTable[98873] = 98; // 'state 386' -> & -> shift (target=49, len=0)
actionsTable[98879] = 100; // 'state 386' -> ? -> shift (target=50, len=0)
actionsTable.fill(102, 98880, 98882); // 'state 386' -> ||..?? -> shift (target=51, len=0)
actionsTable[98882] = 104; // 'state 386' -> && -> shift (target=52, len=0)
actionsTable[98883] = 106; // 'state 386' -> ^ -> shift (target=53, len=0)
actionsTable[98884] = 88; // 'state 386' -> instanceof -> shift (target=44, len=0)
actionsTable.fill(108, 98885, 98887); // 'state 386' -> +..- -> shift (target=54, len=0)
actionsTable[98887] = 90; // 'state 386' -> ** -> shift (target=45, len=0)
actionsTable[98892] = 110; // 'state 386' -> ?. -> shift (target=55, len=0)
actionsTable[98893] = 864; // 'state 386' -> . -> shift (target=432, len=0)
actionsTable.fill(2859, 98894, 98897); // 'state 386' -> private_property_identifier..string -> reduce (target=149, len=5)
actionsTable[98898] = 2859; // 'state 386' -> accessibility_modifier -> reduce (target=149, len=5)
actionsTable[98900] = 112; // 'state 386' -> equality_operator -> shift (target=56, len=0)
actionsTable[98901] = 88; // 'state 386' -> relational_operator -> shift (target=44, len=0)
actionsTable[98902] = 114; // 'state 386' -> shift_operator -> shift (target=57, len=0)
actionsTable[98903] = 90; // 'state 386' -> multiplicative_operator -> shift (target=45, len=0)
actionsTable[98904] = 866; // 'state 386' -> update_operator -> shift (target=433, len=0)
actionsTable[98905] = 2859; // 'state 386' -> identifier -> reduce (target=149, len=5)
actionsTable.fill(798, 99072, 99077); // 'state 387' -> true..super -> shift (target=399, len=0)
actionsTable[99077] = 2; // 'state 387' -> { -> shift (target=1, len=0)
actionsTable[99079] = 800; // 'state 387' -> if -> shift (target=400, len=0)
actionsTable[99080] = 4; // 'state 387' -> ( -> shift (target=2, len=0)
actionsTable[99083] = 802; // 'state 387' -> while -> shift (target=401, len=0)
actionsTable[99084] = 6; // 'state 387' -> do -> shift (target=3, len=0)
actionsTable[99086] = 804; // 'state 387' -> for -> shift (target=402, len=0)
actionsTable.fill(8, 99087, 99090); // 'state 387' -> const..var -> shift (target=4, len=0)
actionsTable[99090] = 806; // 'state 387' -> of -> shift (target=403, len=0)
actionsTable[99092] = 10; // 'state 387' -> return -> shift (target=5, len=0)
actionsTable[99093] = 12; // 'state 387' -> throw -> shift (target=6, len=0)
actionsTable[99094] = 14; // 'state 387' -> try -> shift (target=7, len=0)
actionsTable[99097] = 808; // 'state 387' -> switch -> shift (target=404, len=0)
actionsTable[99101] = 810; // 'state 387' -> break -> shift (target=405, len=0)
actionsTable[99102] = 812; // 'state 387' -> continue -> shift (target=406, len=0)
actionsTable[99103] = 16; // 'state 387' -> import -> shift (target=8, len=0)
actionsTable[99104] = 806; // 'state 387' -> from -> shift (target=403, len=0)
actionsTable[99108] = 814; // 'state 387' -> type -> shift (target=407, len=0)
actionsTable[99109] = 18; // 'state 387' -> export -> shift (target=9, len=0)
actionsTable[99113] = 20; // 'state 387' -> [ -> shift (target=10, len=0)
actionsTable[99115] = 22; // 'state 387' -> async -> shift (target=11, len=0)
actionsTable[99116] = 24; // 'state 387' -> function -> shift (target=12, len=0)
actionsTable.fill(806, 99119, 99121); // 'state 387' -> get..set -> shift (target=403, len=0)
actionsTable[99121] = 26; // 'state 387' -> class -> shift (target=13, len=0)
actionsTable[99124] = 816; // 'state 387' -> interface -> shift (target=408, len=0)
actionsTable[99126] = 28; // 'state 387' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 99131, 99133); // 'state 387' -> void..typeof -> shift (target=15, len=0)
actionsTable[99134] = 32; // 'state 387' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 99141, 99143); // 'state 387' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 99144, 99147); // 'state 387' -> !..delete -> shift (target=15, len=0)
actionsTable[99147] = 34; // 'state 387' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 99151, 99154); // 'state 387' -> number..template_string -> shift (target=399, len=0)
actionsTable[99160] = 36; // 'state 387' -> update_operator -> shift (target=18, len=0)
actionsTable[99161] = 818; // 'state 387' -> identifier -> shift (target=409, len=0)
actionsTable[99162] = 798; // 'state 387' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 99328, 99333); // 'state 388' -> true..super -> shift (target=399, len=0)
actionsTable[99333] = 2; // 'state 388' -> { -> shift (target=1, len=0)
actionsTable[99334] = 1759; // 'state 388' -> } -> reduce (target=111, len=3)
actionsTable[99335] = 800; // 'state 388' -> if -> shift (target=400, len=0)
actionsTable[99336] = 4; // 'state 388' -> ( -> shift (target=2, len=0)
actionsTable[99339] = 802; // 'state 388' -> while -> shift (target=401, len=0)
actionsTable[99340] = 6; // 'state 388' -> do -> shift (target=3, len=0)
actionsTable[99342] = 804; // 'state 388' -> for -> shift (target=402, len=0)
actionsTable.fill(8, 99343, 99346); // 'state 388' -> const..var -> shift (target=4, len=0)
actionsTable[99346] = 806; // 'state 388' -> of -> shift (target=403, len=0)
actionsTable[99348] = 10; // 'state 388' -> return -> shift (target=5, len=0)
actionsTable[99349] = 12; // 'state 388' -> throw -> shift (target=6, len=0)
actionsTable[99350] = 14; // 'state 388' -> try -> shift (target=7, len=0)
actionsTable[99353] = 808; // 'state 388' -> switch -> shift (target=404, len=0)
actionsTable[99354] = 1759; // 'state 388' -> case -> reduce (target=111, len=3)
actionsTable[99356] = 1759; // 'state 388' -> default -> reduce (target=111, len=3)
actionsTable[99357] = 810; // 'state 388' -> break -> shift (target=405, len=0)
actionsTable[99358] = 812; // 'state 388' -> continue -> shift (target=406, len=0)
actionsTable[99359] = 16; // 'state 388' -> import -> shift (target=8, len=0)
actionsTable[99360] = 806; // 'state 388' -> from -> shift (target=403, len=0)
actionsTable[99364] = 814; // 'state 388' -> type -> shift (target=407, len=0)
actionsTable[99365] = 18; // 'state 388' -> export -> shift (target=9, len=0)
actionsTable[99369] = 20; // 'state 388' -> [ -> shift (target=10, len=0)
actionsTable[99371] = 22; // 'state 388' -> async -> shift (target=11, len=0)
actionsTable[99372] = 24; // 'state 388' -> function -> shift (target=12, len=0)
actionsTable.fill(806, 99375, 99377); // 'state 388' -> get..set -> shift (target=403, len=0)
actionsTable[99377] = 26; // 'state 388' -> class -> shift (target=13, len=0)
actionsTable[99380] = 816; // 'state 388' -> interface -> shift (target=408, len=0)
actionsTable[99382] = 28; // 'state 388' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 99387, 99389); // 'state 388' -> void..typeof -> shift (target=15, len=0)
actionsTable[99390] = 32; // 'state 388' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 99397, 99399); // 'state 388' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 99400, 99403); // 'state 388' -> !..delete -> shift (target=15, len=0)
actionsTable[99403] = 34; // 'state 388' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 99407, 99410); // 'state 388' -> number..template_string -> shift (target=399, len=0)
actionsTable[99416] = 36; // 'state 388' -> update_operator -> shift (target=18, len=0)
actionsTable[99417] = 818; // 'state 388' -> identifier -> shift (target=409, len=0)
actionsTable[99418] = 798; // 'state 388' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 99584, 99589); // 'state 389' -> true..super -> shift (target=399, len=0)
actionsTable[99589] = 2; // 'state 389' -> { -> shift (target=1, len=0)
actionsTable[99590] = 1761; // 'state 389' -> } -> reduce (target=112, len=3)
actionsTable[99591] = 800; // 'state 389' -> if -> shift (target=400, len=0)
actionsTable[99592] = 4; // 'state 389' -> ( -> shift (target=2, len=0)
actionsTable[99595] = 802; // 'state 389' -> while -> shift (target=401, len=0)
actionsTable[99596] = 6; // 'state 389' -> do -> shift (target=3, len=0)
actionsTable[99598] = 804; // 'state 389' -> for -> shift (target=402, len=0)
actionsTable.fill(8, 99599, 99602); // 'state 389' -> const..var -> shift (target=4, len=0)
actionsTable[99602] = 806; // 'state 389' -> of -> shift (target=403, len=0)
actionsTable[99604] = 10; // 'state 389' -> return -> shift (target=5, len=0)
actionsTable[99605] = 12; // 'state 389' -> throw -> shift (target=6, len=0)
actionsTable[99606] = 14; // 'state 389' -> try -> shift (target=7, len=0)
actionsTable[99609] = 808; // 'state 389' -> switch -> shift (target=404, len=0)
actionsTable[99610] = 1761; // 'state 389' -> case -> reduce (target=112, len=3)
actionsTable[99612] = 1761; // 'state 389' -> default -> reduce (target=112, len=3)
actionsTable[99613] = 810; // 'state 389' -> break -> shift (target=405, len=0)
actionsTable[99614] = 812; // 'state 389' -> continue -> shift (target=406, len=0)
actionsTable[99615] = 16; // 'state 389' -> import -> shift (target=8, len=0)
actionsTable[99616] = 806; // 'state 389' -> from -> shift (target=403, len=0)
actionsTable[99620] = 814; // 'state 389' -> type -> shift (target=407, len=0)
actionsTable[99621] = 18; // 'state 389' -> export -> shift (target=9, len=0)
actionsTable[99625] = 20; // 'state 389' -> [ -> shift (target=10, len=0)
actionsTable[99627] = 22; // 'state 389' -> async -> shift (target=11, len=0)
actionsTable[99628] = 24; // 'state 389' -> function -> shift (target=12, len=0)
actionsTable.fill(806, 99631, 99633); // 'state 389' -> get..set -> shift (target=403, len=0)
actionsTable[99633] = 26; // 'state 389' -> class -> shift (target=13, len=0)
actionsTable[99636] = 816; // 'state 389' -> interface -> shift (target=408, len=0)
actionsTable[99638] = 28; // 'state 389' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 99643, 99645); // 'state 389' -> void..typeof -> shift (target=15, len=0)
actionsTable[99646] = 32; // 'state 389' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 99653, 99655); // 'state 389' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 99656, 99659); // 'state 389' -> !..delete -> shift (target=15, len=0)
actionsTable[99659] = 34; // 'state 389' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 99663, 99666); // 'state 389' -> number..template_string -> shift (target=399, len=0)
actionsTable[99672] = 36; // 'state 389' -> update_operator -> shift (target=18, len=0)
actionsTable[99673] = 818; // 'state 389' -> identifier -> shift (target=409, len=0)
actionsTable[99674] = 798; // 'state 389' -> regex -> shift (target=399, len=0)
actionsTable[99845] = 80; // 'state 390' -> { -> shift (target=40, len=0)
actionsTable[99846] = 2395; // 'state 390' -> } -> reduce (target=173, len=4)
actionsTable[99853] = 2395; // 'state 390' -> ; -> reduce (target=173, len=4)
actionsTable[99858] = 2395; // 'state 390' -> of -> reduce (target=173, len=4)
actionsTable.fill(2395, 99872, 99874); // 'state 390' -> from.., -> reduce (target=173, len=4)
actionsTable[99876] = 2395; // 'state 390' -> type -> reduce (target=173, len=4)
actionsTable[99881] = 2395; // 'state 390' -> [ -> reduce (target=173, len=4)
actionsTable[99883] = 2395; // 'state 390' -> async -> reduce (target=173, len=4)
actionsTable.fill(2395, 99886, 99889); // 'state 390' -> readonly..set -> reduce (target=173, len=4)
actionsTable[99902] = 2395; // 'state 390' -> new -> reduce (target=173, len=4)
actionsTable.fill(2395, 99919, 99921); // 'state 390' -> number..string -> reduce (target=173, len=4)
actionsTable[99929] = 2395; // 'state 390' -> identifier -> reduce (target=173, len=4)
actionsTable.fill(798, 100096, 100101); // 'state 391' -> true..super -> shift (target=399, len=0)
actionsTable[100101] = 68; // 'state 391' -> { -> shift (target=34, len=0)
actionsTable[100104] = 4; // 'state 391' -> ( -> shift (target=2, len=0)
actionsTable[100114] = 806; // 'state 391' -> of -> shift (target=403, len=0)
actionsTable[100128] = 806; // 'state 391' -> from -> shift (target=403, len=0)
actionsTable[100129] = 192; // 'state 391' -> , -> shift (target=96, len=0)
actionsTable[100132] = 806; // 'state 391' -> type -> shift (target=403, len=0)
actionsTable[100136] = 48; // 'state 391' -> ... -> shift (target=24, len=0)
actionsTable[100137] = 20; // 'state 391' -> [ -> shift (target=10, len=0)
actionsTable[100138] = 906; // 'state 391' -> ] -> shift (target=453, len=0)
actionsTable[100139] = 70; // 'state 391' -> async -> shift (target=35, len=0)
actionsTable[100140] = 72; // 'state 391' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 100143, 100145); // 'state 391' -> get..set -> shift (target=403, len=0)
actionsTable[100145] = 74; // 'state 391' -> class -> shift (target=37, len=0)
actionsTable[100150] = 28; // 'state 391' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 100155, 100157); // 'state 391' -> void..typeof -> shift (target=15, len=0)
actionsTable[100158] = 32; // 'state 391' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 100165, 100167); // 'state 391' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 100168, 100171); // 'state 391' -> !..delete -> shift (target=15, len=0)
actionsTable[100171] = 34; // 'state 391' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 100175, 100178); // 'state 391' -> number..template_string -> shift (target=399, len=0)
actionsTable[100184] = 36; // 'state 391' -> update_operator -> shift (target=18, len=0)
actionsTable[100185] = 1240; // 'state 391' -> identifier -> shift (target=620, len=0)
actionsTable[100186] = 798; // 'state 391' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 100352, 100357); // 'state 392' -> true..super -> shift (target=399, len=0)
actionsTable[100357] = 68; // 'state 392' -> { -> shift (target=34, len=0)
actionsTable[100360] = 790; // 'state 392' -> ( -> shift (target=395, len=0)
actionsTable[100370] = 806; // 'state 392' -> of -> shift (target=403, len=0)
actionsTable[100384] = 806; // 'state 392' -> from -> shift (target=403, len=0)
actionsTable[100388] = 806; // 'state 392' -> type -> shift (target=403, len=0)
actionsTable[100393] = 20; // 'state 392' -> [ -> shift (target=10, len=0)
actionsTable[100395] = 904; // 'state 392' -> async -> shift (target=452, len=0)
actionsTable[100396] = 72; // 'state 392' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 100399, 100401); // 'state 392' -> get..set -> shift (target=403, len=0)
actionsTable[100401] = 74; // 'state 392' -> class -> shift (target=37, len=0)
actionsTable[100406] = 28; // 'state 392' -> < -> shift (target=14, len=0)
actionsTable.fill(798, 100431, 100434); // 'state 392' -> number..template_string -> shift (target=399, len=0)
actionsTable.fill(798, 100441, 100443); // 'state 392' -> identifier..regex -> shift (target=399, len=0)
actionsTable[100635] = 164; // 'state 393' -> : -> shift (target=82, len=0)
actionsTable[100661] = 164; // 'state 393' -> ?: -> shift (target=82, len=0)
actionsTable.fill(798, 100864, 100869); // 'state 394' -> true..super -> shift (target=399, len=0)
actionsTable[100869] = 2; // 'state 394' -> { -> shift (target=1, len=0)
actionsTable[100870] = 2271; // 'state 394' -> } -> reduce (target=111, len=4)
actionsTable[100871] = 800; // 'state 394' -> if -> shift (target=400, len=0)
actionsTable[100872] = 4; // 'state 394' -> ( -> shift (target=2, len=0)
actionsTable[100875] = 802; // 'state 394' -> while -> shift (target=401, len=0)
actionsTable[100876] = 6; // 'state 394' -> do -> shift (target=3, len=0)
actionsTable[100878] = 804; // 'state 394' -> for -> shift (target=402, len=0)
actionsTable.fill(8, 100879, 100882); // 'state 394' -> const..var -> shift (target=4, len=0)
actionsTable[100882] = 806; // 'state 394' -> of -> shift (target=403, len=0)
actionsTable[100884] = 10; // 'state 394' -> return -> shift (target=5, len=0)
actionsTable[100885] = 12; // 'state 394' -> throw -> shift (target=6, len=0)
actionsTable[100886] = 14; // 'state 394' -> try -> shift (target=7, len=0)
actionsTable[100889] = 808; // 'state 394' -> switch -> shift (target=404, len=0)
actionsTable[100890] = 2271; // 'state 394' -> case -> reduce (target=111, len=4)
actionsTable[100892] = 2271; // 'state 394' -> default -> reduce (target=111, len=4)
actionsTable[100893] = 810; // 'state 394' -> break -> shift (target=405, len=0)
actionsTable[100894] = 812; // 'state 394' -> continue -> shift (target=406, len=0)
actionsTable[100895] = 16; // 'state 394' -> import -> shift (target=8, len=0)
actionsTable[100896] = 806; // 'state 394' -> from -> shift (target=403, len=0)
actionsTable[100900] = 814; // 'state 394' -> type -> shift (target=407, len=0)
actionsTable[100901] = 18; // 'state 394' -> export -> shift (target=9, len=0)
actionsTable[100905] = 20; // 'state 394' -> [ -> shift (target=10, len=0)
actionsTable[100907] = 22; // 'state 394' -> async -> shift (target=11, len=0)
actionsTable[100908] = 24; // 'state 394' -> function -> shift (target=12, len=0)
actionsTable.fill(806, 100911, 100913); // 'state 394' -> get..set -> shift (target=403, len=0)
actionsTable[100913] = 26; // 'state 394' -> class -> shift (target=13, len=0)
actionsTable[100916] = 816; // 'state 394' -> interface -> shift (target=408, len=0)
actionsTable[100918] = 28; // 'state 394' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 100923, 100925); // 'state 394' -> void..typeof -> shift (target=15, len=0)
actionsTable[100926] = 32; // 'state 394' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 100933, 100935); // 'state 394' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 100936, 100939); // 'state 394' -> !..delete -> shift (target=15, len=0)
actionsTable[100939] = 34; // 'state 394' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 100943, 100946); // 'state 394' -> number..template_string -> shift (target=399, len=0)
actionsTable[100952] = 36; // 'state 394' -> update_operator -> shift (target=18, len=0)
actionsTable[100953] = 818; // 'state 394' -> identifier -> shift (target=409, len=0)
actionsTable[100954] = 798; // 'state 394' -> regex -> shift (target=399, len=0)
actionsTable.fill(798, 101120, 101125); // 'state 395' -> true..super -> shift (target=399, len=0)
actionsTable[101125] = 562; // 'state 395' -> { -> shift (target=281, len=0)
actionsTable[101128] = 4; // 'state 395' -> ( -> shift (target=2, len=0)
actionsTable[101129] = 1004; // 'state 395' -> ) -> shift (target=502, len=0)
actionsTable[101138] = 806; // 'state 395' -> of -> shift (target=403, len=0)
actionsTable[101152] = 806; // 'state 395' -> from -> shift (target=403, len=0)
actionsTable[101156] = 806; // 'state 395' -> type -> shift (target=403, len=0)
actionsTable[101160] = 794; // 'state 395' -> ... -> shift (target=397, len=0)
actionsTable[101161] = 566; // 'state 395' -> [ -> shift (target=283, len=0)
actionsTable[101163] = 796; // 'state 395' -> async -> shift (target=398, len=0)
actionsTable[101164] = 72; // 'state 395' -> function -> shift (target=36, len=0)
actionsTable.fill(1008, 101165, 101167); // 'state 395' -> static..readonly -> shift (target=504, len=0)
actionsTable.fill(1020, 101167, 101169); // 'state 395' -> get..set -> shift (target=510, len=0)
actionsTable[101169] = 74; // 'state 395' -> class -> shift (target=37, len=0)
actionsTable[101174] = 28; // 'state 395' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 101179, 101181); // 'state 395' -> void..typeof -> shift (target=15, len=0)
actionsTable[101182] = 32; // 'state 395' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 101189, 101191); // 'state 395' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 101192, 101195); // 'state 395' -> !..delete -> shift (target=15, len=0)
actionsTable[101195] = 34; // 'state 395' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 101199, 101202); // 'state 395' -> number..template_string -> shift (target=399, len=0)
actionsTable[101202] = 1008; // 'state 395' -> accessibility_modifier -> shift (target=504, len=0)
actionsTable[101208] = 36; // 'state 395' -> update_operator -> shift (target=18, len=0)
actionsTable[101209] = 1360; // 'state 395' -> identifier -> shift (target=680, len=0)
actionsTable[101210] = 798; // 'state 395' -> regex -> shift (target=399, len=0)
actionsTable[101403] = 164; // 'state 396' -> : -> shift (target=82, len=0)
actionsTable[101429] = 164; // 'state 396' -> ?: -> shift (target=82, len=0)
actionsTable.fill(798, 101632, 101637); // 'state 397' -> true..super -> shift (target=399, len=0)
actionsTable[101637] = 562; // 'state 397' -> { -> shift (target=281, len=0)
actionsTable[101640] = 4; // 'state 397' -> ( -> shift (target=2, len=0)
actionsTable[101650] = 806; // 'state 397' -> of -> shift (target=403, len=0)
actionsTable[101664] = 806; // 'state 397' -> from -> shift (target=403, len=0)
actionsTable[101668] = 806; // 'state 397' -> type -> shift (target=403, len=0)
actionsTable[101673] = 566; // 'state 397' -> [ -> shift (target=283, len=0)
actionsTable[101675] = 70; // 'state 397' -> async -> shift (target=35, len=0)
actionsTable[101676] = 72; // 'state 397' -> function -> shift (target=36, len=0)
actionsTable.fill(806, 101679, 101681); // 'state 397' -> get..set -> shift (target=403, len=0)
actionsTable[101681] = 74; // 'state 397' -> class -> shift (target=37, len=0)
actionsTable[101686] = 28; // 'state 397' -> < -> shift (target=14, len=0)
actionsTable.fill(30, 101691, 101693); // 'state 397' -> void..typeof -> shift (target=15, len=0)
actionsTable[101694] = 32; // 'state 397' -> new -> shift (target=16, len=0)
actionsTable.fill(30, 101701, 101703); // 'state 397' -> +..- -> shift (target=15, len=0)
actionsTable.fill(30, 101704, 101707); // 'state 397' -> !..delete -> shift (target=15, len=0)
actionsTable[101707] = 34; // 'state 397' -> await -> shift (target=17, len=0)
actionsTable.fill(798, 101711, 101714); // 'state 397' -> number..template_string -> shift (target=399, len=0)
actionsTable[101720] = 36; // 'state 397' -> update_operator -> shift (target=18, len=0)
actionsTable[101721] = 1360; // 'state 397' -> identifier -> shift (target=680, len=0)
actionsTable[101722] = 798; // 'state 397' -> regex -> shift (target=399, len=0)
actionsTable[101893] = 795; // 'state 398' -> { -> reduce (target=141, len=1)
actionsTable[101896] = 130; // 'state 398' -> ( -> shift (target=65, len=0)
actionsTable[101897] = 867; // 'state 398' -> ) -> reduce (target=177, len=1)
actionsTable[101907] = 867; // 'state 398' -> in -> reduce (target=177, len=1)
actionsTable.fill(867, 101921, 101924); // 'state 398' -> ,..as -> reduce (target=177, len=1)
actionsTable[101927] = 867; // 'state 398' -> = -> reduce (target=177, len=1)
actionsTable[101929] = 795; // 'state 398' -> [ -> reduce (target=141, len=1)
actionsTable[101931] = 795; // 'state 398' -> async -> reduce (target=141, len=1)
actionsTable[101932] = 224; // 'state 398' -> function -> shift (target=112, len=0)
actionsTable.fill(795, 101933, 101937); // 'state 398' -> static..set -> reduce (target=141, len=1)
actionsTable[101942] = 28; // 'state 398' -> < -> shift (target=14, len=0)
actionsTable.fill(867, 101943, 101946); // 'state 398' -> >..& -> reduce (target=177, len=1)
actionsTable.fill(867, 101951, 101960); // 'state 398' -> ?..** -> reduce (target=177, len=1)
actionsTable.fill(867, 101964, 101966); // 'state 398' -> ?.... -> reduce (target=177, len=1)
actionsTable[101970] = 795; // 'state 398' -> accessibility_modifier -> reduce (target=141, len=1)
actionsTable.fill(867, 101971, 101977); // 'state 398' -> compound_assignment_operator..update_operator -> reduce (target=177, len=1)
actionsTable[101977] = 896; // 'state 398' -> identifier -> shift (target=448, len=0)
actionsTable.fill(869, 102144, 102167); // 'state 399' -> true..try -> reduce (target=178, len=1)
actionsTable.fill(869, 102169, 102182); // 'state 399' -> switch..export -> reduce (target=178, len=1)
actionsTable.fill(869, 102185, 102194); // 'state 399' -> [..class -> reduce (target=178, len=1)
actionsTable.fill(869, 102195, 102197); // 'state 399' -> implements..interface -> reduce (target=178, len=1)
actionsTable.fill(869, 102198, 102202); // 'state 399' -> <..& -> reduce (target=178, len=1)
actionsTable.fill(869, 102203, 102205); // 'state 399' -> void..typeof -> reduce (target=178, len=1)
actionsTable.fill(869, 102206, 102227); // 'state 399' -> new..accessibility_modifier -> reduce (target=178, len=1)
actionsTable.fill(869, 102228, 102236); // 'state 399' -> equality_operator..@par-gen.EOF -> reduce (target=178, len=1)
actionsTable[102408] = 62; // 'state 400' -> ( -> shift (target=31, len=0)
actionsTable[102664] = 64; // 'state 401' -> ( -> shift (target=32, len=0)
actionsTable[102920] = 66; // 'state 402' -> ( -> shift (target=33, len=0)
actionsTable.fill(867, 103168, 103191); // 'state 403' -> true..try -> reduce (target=177, len=1)
actionsTable.fill(867, 103193, 103206); // 'state 403' -> switch..export -> reduce (target=177, len=1)
actionsTable[103207] = 867; // 'state 403' -> = -> reduce (target=177, len=1)
actionsTable.fill(867, 103209, 103218); // 'state 403' -> [..class -> reduce (target=177, len=1)
actionsTable.fill(867, 103219, 103226); // 'state 403' -> implements..& -> reduce (target=177, len=1)
actionsTable.fill(867, 103227, 103229); // 'state 403' -> void..typeof -> reduce (target=177, len=1)
actionsTable.fill(867, 103230, 103260); // 'state 403' -> new..@par-gen.EOF -> reduce (target=177, len=1)
actionsTable[103432] = 84; // 'state 404' -> ( -> shift (target=42, len=0)
actionsTable.fill(739, 103680, 103689); // 'state 405' -> true..( -> reduce (target=113, len=1)
actionsTable.fill(739, 103690, 103693); // 'state 405' -> else..do -> reduce (target=113, len=1)
actionsTable[103693] = 854; // 'state 405' -> ; -> shift (target=427, len=0)
actionsTable.fill(739, 103694, 103699); // 'state 405' -> for..of -> reduce (target=113, len=1)
actionsTable.fill(739, 103700, 103703); // 'state 405' -> return..try -> reduce (target=113, len=1)
actionsTable.fill(739, 103705, 103707); // 'state 405' -> switch..case -> reduce (target=113, len=1)
actionsTable.fill(739, 103708, 103713); // 'state 405' -> default..from -> reduce (target=113, len=1)
actionsTable.fill(739, 103716, 103718); // 'state 405' -> type..export -> reduce (target=113, len=1)
actionsTable[103721] = 739; // 'state 405' -> [ -> reduce (target=113, len=1)
actionsTable.fill(739, 103723, 103725); // 'state 405' -> async..function -> reduce (target=113, len=1)
actionsTable.fill(739, 103727, 103730); // 'state 405' -> get..class -> reduce (target=113, len=1)
actionsTable[103732] = 739; // 'state 405' -> interface -> reduce (target=113, len=1)
actionsTable[103734] = 739; // 'state 405' -> < -> reduce (target=113, len=1)
actionsTable.fill(739, 103739, 103741); // 'state 405' -> void..typeof -> reduce (target=113, len=1)
actionsTable[103742] = 739; // 'state 405' -> new -> reduce (target=113, len=1)
actionsTable.fill(739, 103749, 103751); // 'state 405' -> +..- -> reduce (target=113, len=1)
actionsTable.fill(739, 103752, 103756); // 'state 405' -> !..await -> reduce (target=113, len=1)
actionsTable.fill(739, 103759, 103762); // 'state 405' -> number..template_string -> reduce (target=113, len=1)
actionsTable[103768] = 739; // 'state 405' -> update_operator -> reduce (target=113, len=1)
actionsTable[103769] = 856; // 'state 405' -> identifier -> shift (target=428, len=0)
actionsTable.fill(739, 103770, 103772); // 'state 405' -> regex..@par-gen.EOF -> reduce (target=113, len=1)
actionsTable.fill(741, 103936, 103945); // 'state 406' -> true..( -> reduce (target=114, len=1)
actionsTable.fill(741, 103946, 103949); // 'state 406' -> else..do -> reduce (target=114, len=1)
actionsTable[103949] = 858; // 'state 406' -> ; -> shift (target=429, len=0)
actionsTable.fill(741, 103950, 103955); // 'state 406' -> for..of -> reduce (target=114, len=1)
actionsTable.fill(741, 103956, 103959); // 'state 406' -> return..try -> reduce (target=114, len=1)
actionsTable.fill(741, 103961, 103963); // 'state 406' -> switch..case -> reduce (target=114, len=1)
actionsTable.fill(741, 103964, 103969); // 'state 406' -> default..from -> reduce (target=114, len=1)
actionsTable.fill(741, 103972, 103974); // 'state 406' -> type..export -> reduce (target=114, len=1)
actionsTable[103977] = 741; // 'state 406' -> [ -> reduce (target=114, len=1)
actionsTable.fill(741, 103979, 103981); // 'state 406' -> async..function -> reduce (target=114, len=1)
actionsTable.fill(741, 103983, 103986); // 'state 406' -> get..class -> reduce (target=114, len=1)
actionsTable[103988] = 741; // 'state 406' -> interface -> reduce (target=114, len=1)
actionsTable[103990] = 741; // 'state 406' -> < -> reduce (target=114, len=1)
actionsTable.fill(741, 103995, 103997); // 'state 406' -> void..typeof -> reduce (target=114, len=1)
actionsTable[103998] = 741; // 'state 406' -> new -> reduce (target=114, len=1)
actionsTable.fill(741, 104005, 104007); // 'state 406' -> +..- -> reduce (target=114, len=1)
actionsTable.fill(741, 104008, 104012); // 'state 406' -> !..await -> reduce (target=114, len=1)
actionsTable.fill(741, 104015, 104018); // 'state 406' -> number..template_string -> reduce (target=114, len=1)
actionsTable[104024] = 741; // 'state 406' -> update_operator -> reduce (target=114, len=1)
actionsTable[104025] = 860; // 'state 406' -> identifier -> shift (target=430, len=0)
actionsTable.fill(741, 104026, 104028); // 'state 406' -> regex..@par-gen.EOF -> reduce (target=114, len=1)
actionsTable.fill(867, 104192, 104201); // 'state 407' -> true..( -> reduce (target=177, len=1)
actionsTable.fill(867, 104202, 104215); // 'state 407' -> else..try -> reduce (target=177, len=1)
actionsTable.fill(867, 104217, 104230); // 'state 407' -> switch..export -> reduce (target=177, len=1)
actionsTable[104231] = 867; // 'state 407' -> = -> reduce (target=177, len=1)
actionsTable[104233] = 867; // 'state 407' -> [ -> reduce (target=177, len=1)
actionsTable.fill(867, 104235, 104237); // 'state 407' -> async..function -> reduce (target=177, len=1)
actionsTable.fill(867, 104239, 104242); // 'state 407' -> get..class -> reduce (target=177, len=1)
actionsTable.fill(867, 104244, 104250); // 'state 407' -> interface..& -> reduce (target=177, len=1)
actionsTable.fill(867, 104251, 104253); // 'state 407' -> void..typeof -> reduce (target=177, len=1)
actionsTable.fill(867, 104254, 104270); // 'state 407' -> new... -> reduce (target=177, len=1)
actionsTable.fill(867, 104271, 104274); // 'state 407' -> number..template_string -> reduce (target=177, len=1)
actionsTable.fill(867, 104275, 104281); // 'state 407' -> compound_assignment_operator..update_operator -> reduce (target=177, len=1)
actionsTable[104281] = 160; // 'state 407' -> identifier -> shift (target=80, len=0)
actionsTable.fill(867, 104282, 104284); // 'state 407' -> regex..@par-gen.EOF -> reduce (target=177, len=1)
actionsTable[104537] = 158; // 'state 408' -> identifier -> shift (target=79, len=0)
actionsTable.fill(869, 104704, 104727); // 'state 409' -> true..try -> reduce (target=178, len=1)
actionsTable.fill(869, 104729, 104742); // 'state 409' -> switch..export -> reduce (target=178, len=1)
actionsTable[104743] = 875; // 'state 409' -> = -> reduce (target=181, len=1)
actionsTable.fill(869, 104745, 104754); // 'state 409' -> [..class -> reduce (target=178, len=1)
actionsTable.fill(869, 104755, 104757); // 'state 409' -> implements..interface -> reduce (target=178, len=1)
actionsTable.fill(869, 104758, 104762); // 'state 409' -> <..& -> reduce (target=178, len=1)
actionsTable[104762] = 162; // 'state 409' -> => -> shift (target=81, len=0)
actionsTable.fill(869, 104763, 104765); // 'state 409' -> void..typeof -> reduce (target=178, len=1)
actionsTable.fill(869, 104766, 104787); // 'state 409' -> new..accessibility_modifier -> reduce (target=178, len=1)
actionsTable[104787] = 875; // 'state 409' -> compound_assignment_operator -> reduce (target=181, len=1)
actionsTable.fill(869, 104788, 104796); // 'state 409' -> equality_operator..@par-gen.EOF -> reduce (target=178, len=1)
actionsTable.fill(701, 104960, 104966); // 'state 410' -> true..{ -> reduce (target=94, len=1)
actionsTable.fill(701, 104967, 104969); // 'state 410' -> if..( -> reduce (target=94, len=1)
actionsTable.fill(701, 104971, 104973); // 'state 410' -> while..do -> reduce (target=94, len=1)
actionsTable.fill(701, 104974, 104979); // 'state 410' -> for..of -> reduce (target=94, len=1)
actionsTable.fill(701, 104980, 104983); // 'state 410' -> return..try -> reduce (target=94, len=1)
actionsTable[104985] = 701; // 'state 410' -> switch -> reduce (target=94, len=1)
actionsTable.fill(701, 104989, 104993); // 'state 410' -> break..from -> reduce (target=94, len=1)
actionsTable.fill(701, 104996, 104998); // 'state 410' -> type..export -> reduce (target=94, len=1)
actionsTable[105001] = 701; // 'state 410' -> [ -> reduce (target=94, len=1)
actionsTable.fill(701, 105003, 105005); // 'state 410' -> async..function -> reduce (target=94, len=1)
actionsTable.fill(701, 105007, 105010); // 'state 410' -> get..class -> reduce (target=94, len=1)
actionsTable[105012] = 701; // 'state 410' -> interface -> reduce (target=94, len=1)
actionsTable[105014] = 701; // 'state 410' -> < -> reduce (target=94, len=1)
actionsTable.fill(701, 105019, 105021); // 'state 410' -> void..typeof -> reduce (target=94, len=1)
actionsTable[105022] = 701; // 'state 410' -> new -> reduce (target=94, len=1)
actionsTable.fill(701, 105029, 105031); // 'state 410' -> +..- -> reduce (target=94, len=1)
actionsTable.fill(701, 105032, 105036); // 'state 410' -> !..await -> reduce (target=94, len=1)
actionsTable.fill(701, 105039, 105042); // 'state 410' -> number..template_string -> reduce (target=94, len=1)
actionsTable.fill(701, 105048, 105052); // 'state 410' -> update_operator..@par-gen.EOF -> reduce (target=94, len=1)
actionsTable.fill(703, 105216, 105225); // 'state 411' -> true..( -> reduce (target=95, len=1)
actionsTable.fill(703, 105226, 105229); // 'state 411' -> else..do -> reduce (target=95, len=1)
actionsTable.fill(703, 105230, 105235); // 'state 411' -> for..of -> reduce (target=95, len=1)
actionsTable.fill(703, 105236, 105239); // 'state 411' -> return..try -> reduce (target=95, len=1)
actionsTable.fill(703, 105241, 105243); // 'state 411' -> switch..case -> reduce (target=95, len=1)
actionsTable.fill(703, 105244, 105249); // 'state 411' -> default..from -> reduce (target=95, len=1)
actionsTable.fill(703, 105252, 105254); // 'state 411' -> type..export -> reduce (target=95, len=1)
actionsTable[105257] = 703; // 'state 411' -> [ -> reduce (target=95, len=1)
actionsTable.fill(703, 105259, 105261); // 'state 411' -> async..function -> reduce (target=95, len=1)
actionsTable.fill(703, 105263, 105266); // 'state 411' -> get..class -> reduce (target=95, len=1)
actionsTable[105268] = 703; // 'state 411' -> interface -> reduce (target=95, len=1)
actionsTable[105270] = 703; // 'state 411' -> < -> reduce (target=95, len=1)
actionsTable.fill(703, 105275, 105277); // 'state 411' -> void..typeof -> reduce (target=95, len=1)
actionsTable[105278] = 703; // 'state 411' -> new -> reduce (target=95, len=1)
actionsTable.fill(703, 105285, 105287); // 'state 411' -> +..- -> reduce (target=95, len=1)
actionsTable.fill(703, 105288, 105292); // 'state 411' -> !..await -> reduce (target=95, len=1)
actionsTable.fill(703, 105295, 105298); // 'state 411' -> number..template_string -> reduce (target=95, len=1)
actionsTable.fill(703, 105304, 105308); // 'state 411' -> update_operator..@par-gen.EOF -> reduce (target=95, len=1)
actionsTable.fill(745, 105472, 105481); // 'state 412' -> true..( -> reduce (target=116, len=1)
actionsTable.fill(745, 105482, 105485); // 'state 412' -> else..do -> reduce (target=116, len=1)
actionsTable.fill(745, 105486, 105491); // 'state 412' -> for..of -> reduce (target=116, len=1)
actionsTable.fill(745, 105492, 105495); // 'state 412' -> return..try -> reduce (target=116, len=1)
actionsTable.fill(745, 105497, 105499); // 'state 412' -> switch..case -> reduce (target=116, len=1)
actionsTable.fill(745, 105500, 105505); // 'state 412' -> default..from -> reduce (target=116, len=1)
actionsTable.fill(745, 105508, 105510); // 'state 412' -> type..export -> reduce (target=116, len=1)
actionsTable[105513] = 745; // 'state 412' -> [ -> reduce (target=116, len=1)
actionsTable.fill(745, 105515, 105517); // 'state 412' -> async..function -> reduce (target=116, len=1)
actionsTable.fill(745, 105519, 105522); // 'state 412' -> get..class -> reduce (target=116, len=1)
actionsTable[105524] = 745; // 'state 412' -> interface -> reduce (target=116, len=1)
actionsTable[105526] = 745; // 'state 412' -> < -> reduce (target=116, len=1)
actionsTable.fill(745, 105531, 105533); // 'state 412' -> void..typeof -> reduce (target=116, len=1)
actionsTable[105534] = 745; // 'state 412' -> new -> reduce (target=116, len=1)
actionsTable.fill(745, 105541, 105543); // 'state 412' -> +..- -> reduce (target=116, len=1)
actionsTable.fill(745, 105544, 105548); // 'state 412' -> !..await -> reduce (target=116, len=1)
actionsTable.fill(745, 105551, 105554); // 'state 412' -> number..template_string -> reduce (target=116, len=1)
actionsTable.fill(745, 105560, 105564); // 'state 412' -> update_operator..@par-gen.EOF -> reduce (target=116, len=1)
actionsTable.fill(869, 105728, 105751); // 'state 413' -> true..try -> reduce (target=178, len=1)
actionsTable.fill(869, 105753, 105766); // 'state 413' -> switch..export -> reduce (target=178, len=1)
actionsTable[105767] = 875; // 'state 413' -> = -> reduce (target=181, len=1)
actionsTable.fill(869, 105769, 105778); // 'state 413' -> [..class -> reduce (target=178, len=1)
actionsTable.fill(869, 105779, 105781); // 'state 413' -> implements..interface -> reduce (target=178, len=1)
actionsTable.fill(869, 105782, 105786); // 'state 413' -> <..& -> reduce (target=178, len=1)
actionsTable.fill(869, 105787, 105789); // 'state 413' -> void..typeof -> reduce (target=178, len=1)
actionsTable.fill(869, 105790, 105811); // 'state 413' -> new..accessibility_modifier -> reduce (target=178, len=1)
actionsTable[105811] = 875; // 'state 413' -> compound_assignment_operator -> reduce (target=181, len=1)
actionsTable.fill(869, 105812, 105820); // 'state 413' -> equality_operator..@par-gen.EOF -> reduce (target=178, len=1)
actionsTable.fill(865, 105984, 106007); // 'state 414' -> true..try -> reduce (target=176, len=1)
actionsTable.fill(865, 106009, 106022); // 'state 414' -> switch..export -> reduce (target=176, len=1)
actionsTable.fill(865, 106025, 106034); // 'state 414' -> [..class -> reduce (target=176, len=1)
actionsTable.fill(865, 106035, 106037); // 'state 414' -> implements..interface -> reduce (target=176, len=1)
actionsTable.fill(865, 106038, 106042); // 'state 414' -> <..& -> reduce (target=176, len=1)
actionsTable.fill(865, 106043, 106045); // 'state 414' -> void..typeof -> reduce (target=176, len=1)
actionsTable.fill(865, 106046, 106067); // 'state 414' -> new..accessibility_modifier -> reduce (target=176, len=1)
actionsTable.fill(865, 106068, 106076); // 'state 414' -> equality_operator..@par-gen.EOF -> reduce (target=176, len=1)
actionsTable[106279] = 166; // 'state 415' -> = -> shift (target=83, len=0)
actionsTable[106323] = 168; // 'state 415' -> compound_assignment_operator -> shift (target=84, len=0)
actionsTable.fill(865, 106496, 106519); // 'state 416' -> true..try -> reduce (target=176, len=1)
actionsTable.fill(865, 106521, 106534); // 'state 416' -> switch..export -> reduce (target=176, len=1)
actionsTable[106535] = 875; // 'state 416' -> = -> reduce (target=181, len=1)
actionsTable.fill(865, 106537, 106546); // 'state 416' -> [..class -> reduce (target=176, len=1)
actionsTable.fill(865, 106547, 106549); // 'state 416' -> implements..interface -> reduce (target=176, len=1)
actionsTable.fill(865, 106550, 106554); // 'state 416' -> <..& -> reduce (target=176, len=1)
actionsTable.fill(865, 106555, 106557); // 'state 416' -> void..typeof -> reduce (target=176, len=1)
actionsTable.fill(865, 106558, 106579); // 'state 416' -> new..accessibility_modifier -> reduce (target=176, len=1)
actionsTable[106579] = 875; // 'state 416' -> compound_assignment_operator -> reduce (target=181, len=1)
actionsTable.fill(865, 106580, 106588); // 'state 416' -> equality_operator..@par-gen.EOF -> reduce (target=176, len=1)
actionsTable.fill(1213, 106752, 106758); // 'state 417' -> true..{ -> reduce (target=94, len=2)
actionsTable.fill(1213, 106759, 106761); // 'state 417' -> if..( -> reduce (target=94, len=2)
actionsTable.fill(1213, 106763, 106765); // 'state 417' -> while..do -> reduce (target=94, len=2)
actionsTable.fill(1213, 106766, 106771); // 'state 417' -> for..of -> reduce (target=94, len=2)
actionsTable.fill(1213, 106772, 106775); // 'state 417' -> return..try -> reduce (target=94, len=2)
actionsTable[106777] = 1213; // 'state 417' -> switch -> reduce (target=94, len=2)
actionsTable.fill(1213, 106781, 106785); // 'state 417' -> break..from -> reduce (target=94, len=2)
actionsTable.fill(1213, 106788, 106790); // 'state 417' -> type..export -> reduce (target=94, len=2)
actionsTable[106793] = 1213; // 'state 417' -> [ -> reduce (target=94, len=2)
actionsTable.fill(1213, 106795, 106797); // 'state 417' -> async..function -> reduce (target=94, len=2)
actionsTable.fill(1213, 106799, 106802); // 'state 417' -> get..class -> reduce (target=94, len=2)
actionsTable[106804] = 1213; // 'state 417' -> interface -> reduce (target=94, len=2)
actionsTable[106806] = 1213; // 'state 417' -> < -> reduce (target=94, len=2)
actionsTable.fill(1213, 106811, 106813); // 'state 417' -> void..typeof -> reduce (target=94, len=2)
actionsTable[106814] = 1213; // 'state 417' -> new -> reduce (target=94, len=2)
actionsTable.fill(1213, 106821, 106823); // 'state 417' -> +..- -> reduce (target=94, len=2)
actionsTable.fill(1213, 106824, 106828); // 'state 417' -> !..await -> reduce (target=94, len=2)
actionsTable.fill(1213, 106831, 106834); // 'state 417' -> number..template_string -> reduce (target=94, len=2)
actionsTable.fill(1213, 106840, 106844); // 'state 417' -> update_operator..@par-gen.EOF -> reduce (target=94, len=2)
actionsTable.fill(1219, 107008, 107031); // 'state 418' -> true..try -> reduce (target=97, len=2)
actionsTable.fill(1219, 107033, 107046); // 'state 418' -> switch..export -> reduce (target=97, len=2)
actionsTable[107047] = 1427; // 'state 418' -> = -> reduce (target=201, len=2)
actionsTable.fill(1219, 107049, 107058); // 'state 418' -> [..class -> reduce (target=97, len=2)
actionsTable.fill(1219, 107059, 107061); // 'state 418' -> implements..interface -> reduce (target=97, len=2)
actionsTable.fill(1219, 107062, 107066); // 'state 418' -> <..& -> reduce (target=97, len=2)
actionsTable.fill(1219, 107067, 107069); // 'state 418' -> void..typeof -> reduce (target=97, len=2)
actionsTable.fill(1219, 107070, 107091); // 'state 418' -> new..accessibility_modifier -> reduce (target=97, len=2)
actionsTable[107091] = 1427; // 'state 418' -> compound_assignment_operator -> reduce (target=201, len=2)
actionsTable.fill(1219, 107092, 107100); // 'state 418' -> equality_operator..@par-gen.EOF -> reduce (target=97, len=2)
actionsTable.fill(869, 107264, 107273); // 'state 419' -> true..( -> reduce (target=178, len=1)
actionsTable.fill(869, 107275, 107287); // 'state 419' -> while..try -> reduce (target=178, len=1)
actionsTable[107289] = 869; // 'state 419' -> switch -> reduce (target=178, len=1)
actionsTable[107291] = 925; // 'state 419' -> : -> reduce (target=206, len=1)
actionsTable.fill(869, 107293, 107297); // 'state 419' -> break..from -> reduce (target=178, len=1)
actionsTable.fill(869, 107298, 107302); // 'state 419' -> *..export -> reduce (target=178, len=1)
actionsTable[107305] = 869; // 'state 419' -> [ -> reduce (target=178, len=1)
actionsTable.fill(869, 107307, 107309); // 'state 419' -> async..function -> reduce (target=178, len=1)
actionsTable.fill(869, 107311, 107314); // 'state 419' -> get..class -> reduce (target=178, len=1)
actionsTable[107316] = 869; // 'state 419' -> interface -> reduce (target=178, len=1)
actionsTable[107317] = 925; // 'state 419' -> ?: -> reduce (target=206, len=1)
actionsTable.fill(869, 107318, 107322); // 'state 419' -> <..& -> reduce (target=178, len=1)
actionsTable.fill(869, 107323, 107325); // 'state 419' -> void..typeof -> reduce (target=178, len=1)
actionsTable.fill(869, 107326, 107342); // 'state 419' -> new... -> reduce (target=178, len=1)
actionsTable.fill(869, 107343, 107346); // 'state 419' -> number..template_string -> reduce (target=178, len=1)
actionsTable.fill(869, 107348, 107355); // 'state 419' -> equality_operator..regex -> reduce (target=178, len=1)
actionsTable.fill(869, 107520, 107529); // 'state 420' -> true..( -> reduce (target=178, len=1)
actionsTable.fill(869, 107531, 107543); // 'state 420' -> while..try -> reduce (target=178, len=1)
actionsTable[107545] = 869; // 'state 420' -> switch -> reduce (target=178, len=1)
actionsTable[107547] = 925; // 'state 420' -> : -> reduce (target=206, len=1)
actionsTable.fill(869, 107549, 107553); // 'state 420' -> break..from -> reduce (target=178, len=1)
actionsTable[107553] = 923; // 'state 420' -> , -> reduce (target=205, len=1)
actionsTable.fill(869, 107554, 107558); // 'state 420' -> *..export -> reduce (target=178, len=1)
actionsTable[107559] = 875; // 'state 420' -> = -> reduce (target=181, len=1)
actionsTable[107561] = 869; // 'state 420' -> [ -> reduce (target=178, len=1)
actionsTable.fill(869, 107563, 107565); // 'state 420' -> async..function -> reduce (target=178, len=1)
actionsTable.fill(869, 107567, 107570); // 'state 420' -> get..class -> reduce (target=178, len=1)
actionsTable[107572] = 869; // 'state 420' -> interface -> reduce (target=178, len=1)
actionsTable[107573] = 925; // 'state 420' -> ?: -> reduce (target=206, len=1)
actionsTable.fill(869, 107574, 107578); // 'state 420' -> <..& -> reduce (target=178, len=1)
actionsTable[107578] = 162; // 'state 420' -> => -> shift (target=81, len=0)
actionsTable.fill(869, 107579, 107581); // 'state 420' -> void..typeof -> reduce (target=178, len=1)
actionsTable.fill(869, 107582, 107598); // 'state 420' -> new... -> reduce (target=178, len=1)
actionsTable.fill(869, 107599, 107602); // 'state 420' -> number..template_string -> reduce (target=178, len=1)
actionsTable[107603] = 875; // 'state 420' -> compound_assignment_operator -> reduce (target=181, len=1)
actionsTable.fill(869, 107604, 107611); // 'state 420' -> equality_operator..regex -> reduce (target=178, len=1)
actionsTable.fill(705, 107776, 107785); // 'state 421' -> true..( -> reduce (target=96, len=1)
actionsTable.fill(705, 107787, 107789); // 'state 421' -> while..do -> reduce (target=96, len=1)
actionsTable.fill(705, 107790, 107795); // 'state 421' -> for..of -> reduce (target=96, len=1)
actionsTable.fill(705, 107796, 107799); // 'state 421' -> return..try -> reduce (target=96, len=1)
actionsTable.fill(705, 107801, 107803); // 'state 421' -> switch..case -> reduce (target=96, len=1)
actionsTable.fill(705, 107804, 107809); // 'state 421' -> default..from -> reduce (target=96, len=1)
actionsTable.fill(705, 107812, 107814); // 'state 421' -> type..export -> reduce (target=96, len=1)
actionsTable[107817] = 705; // 'state 421' -> [ -> reduce (target=96, len=1)
actionsTable.fill(705, 107819, 107821); // 'state 421' -> async..function -> reduce (target=96, len=1)
actionsTable.fill(705, 107823, 107826); // 'state 421' -> get..class -> reduce (target=96, len=1)
actionsTable[107828] = 705; // 'state 421' -> interface -> reduce (target=96, len=1)
actionsTable[107830] = 705; // 'state 421' -> < -> reduce (target=96, len=1)
actionsTable.fill(705, 107835, 107837); // 'state 421' -> void..typeof -> reduce (target=96, len=1)
actionsTable[107838] = 705; // 'state 421' -> new -> reduce (target=96, len=1)
actionsTable.fill(705, 107845, 107847); // 'state 421' -> +..- -> reduce (target=96, len=1)
actionsTable.fill(705, 107848, 107852); // 'state 421' -> !..await -> reduce (target=96, len=1)
actionsTable.fill(705, 107855, 107858); // 'state 421' -> number..template_string -> reduce (target=96, len=1)
actionsTable.fill(705, 107864, 107867); // 'state 421' -> update_operator..regex -> reduce (target=96, len=1)
actionsTable.fill(869, 108032, 108041); // 'state 422' -> true..( -> reduce (target=178, len=1)
actionsTable.fill(869, 108043, 108055); // 'state 422' -> while..try -> reduce (target=178, len=1)
actionsTable[108057] = 869; // 'state 422' -> switch -> reduce (target=178, len=1)
actionsTable[108059] = 925; // 'state 422' -> : -> reduce (target=206, len=1)
actionsTable.fill(869, 108061, 108065); // 'state 422' -> break..from -> reduce (target=178, len=1)
actionsTable[108065] = 923; // 'state 422' -> , -> reduce (target=205, len=1)
actionsTable.fill(869, 108066, 108070); // 'state 422' -> *..export -> reduce (target=178, len=1)
actionsTable[108071] = 875; // 'state 422' -> = -> reduce (target=181, len=1)
actionsTable[108073] = 869; // 'state 422' -> [ -> reduce (target=178, len=1)
actionsTable.fill(869, 108075, 108077); // 'state 422' -> async..function -> reduce (target=178, len=1)
actionsTable.fill(869, 108079, 108082); // 'state 422' -> get..class -> reduce (target=178, len=1)
actionsTable[108084] = 869; // 'state 422' -> interface -> reduce (target=178, len=1)
actionsTable[108085] = 925; // 'state 422' -> ?: -> reduce (target=206, len=1)
actionsTable.fill(869, 108086, 108090); // 'state 422' -> <..& -> reduce (target=178, len=1)
actionsTable.fill(869, 108091, 108093); // 'state 422' -> void..typeof -> reduce (target=178, len=1)
actionsTable.fill(869, 108094, 108110); // 'state 422' -> new... -> reduce (target=178, len=1)
actionsTable.fill(869, 108111, 108114); // 'state 422' -> number..template_string -> reduce (target=178, len=1)
actionsTable[108115] = 875; // 'state 422' -> compound_assignment_operator -> reduce (target=181, len=1)
actionsTable.fill(869, 108116, 108123); // 'state 422' -> equality_operator..regex -> reduce (target=178, len=1)
actionsTable[108294] = 917; // 'state 423' -> } -> reduce (target=202, len=1)
actionsTable[108321] = 917; // 'state 423' -> , -> reduce (target=202, len=1)
actionsTable[108550] = 925; // 'state 424' -> } -> reduce (target=206, len=1)
actionsTable[108552] = 925; // 'state 424' -> ( -> reduce (target=206, len=1)
actionsTable[108557] = 925; // 'state 424' -> ; -> reduce (target=206, len=1)
actionsTable[108562] = 925; // 'state 424' -> of -> reduce (target=206, len=1)
actionsTable[108571] = 925; // 'state 424' -> : -> reduce (target=206, len=1)
actionsTable[108576] = 925; // 'state 424' -> from -> reduce (target=206, len=1)
actionsTable[108580] = 925; // 'state 424' -> type -> reduce (target=206, len=1)
actionsTable[108583] = 925; // 'state 424' -> = -> reduce (target=206, len=1)
actionsTable[108585] = 925; // 'state 424' -> [ -> reduce (target=206, len=1)
actionsTable[108587] = 925; // 'state 424' -> async -> reduce (target=206, len=1)
actionsTable.fill(925, 108589, 108593); // 'state 424' -> static..set -> reduce (target=206, len=1)
actionsTable.fill(925, 108597, 108599); // 'state 424' -> ?:..< -> reduce (target=206, len=1)
actionsTable.fill(925, 108622, 108625); // 'state 424' -> private_property_identifier..string -> reduce (target=206, len=1)
actionsTable[108626] = 925; // 'state 424' -> accessibility_modifier -> reduce (target=206, len=1)
actionsTable[108633] = 925; // 'state 424' -> identifier -> reduce (target=206, len=1)
actionsTable[108811] = 924; // 'state 425' -> while -> shift (target=462, len=0)
actionsTable.fill(1231, 109056, 109065); // 'state 426' -> true..( -> reduce (target=103, len=2)
actionsTable.fill(1231, 109066, 109069); // 'state 426' -> else..do -> reduce (target=103, len=2)
actionsTable.fill(1231, 109070, 109075); // 'state 426' -> for..of -> reduce (target=103, len=2)
actionsTable.fill(1231, 109076, 109079); // 'state 426' -> return..try -> reduce (target=103, len=2)
actionsTable.fill(1231, 109081, 109083); // 'state 426' -> switch..case -> reduce (target=103, len=2)
actionsTable.fill(1231, 109084, 109089); // 'state 426' -> default..from -> reduce (target=103, len=2)
actionsTable.fill(1231, 109092, 109094); // 'state 426' -> type..export -> reduce (target=103, len=2)
actionsTable[109097] = 1231; // 'state 426' -> [ -> reduce (target=103, len=2)
actionsTable.fill(1231, 109099, 109101); // 'state 426' -> async..function -> reduce (target=103, len=2)
actionsTable.fill(1231, 109103, 109106); // 'state 426' -> get..class -> reduce (target=103, len=2)
actionsTable[109108] = 1231; // 'state 426' -> interface -> reduce (target=103, len=2)
actionsTable[109110] = 1231; // 'state 426' -> < -> reduce (target=103, len=2)
actionsTable.fill(1231, 109115, 109117); // 'state 426' -> void..typeof -> reduce (target=103, len=2)
actionsTable[109118] = 1231; // 'state 426' -> new -> reduce (target=103, len=2)
actionsTable.fill(1231, 109125, 109127); // 'state 426' -> +..- -> reduce (target=103, len=2)
actionsTable.fill(1231, 109128, 109132); // 'state 426' -> !..await -> reduce (target=103, len=2)
actionsTable.fill(1231, 109135, 109138); // 'state 426' -> number..template_string -> reduce (target=103, len=2)
actionsTable.fill(1231, 109144, 109148); // 'state 426' -> update_operator..@par-gen.EOF -> reduce (target=103, len=2)
actionsTable.fill(1251, 109312, 109321); // 'state 427' -> true..( -> reduce (target=113, len=2)
actionsTable.fill(1251, 109322, 109325); // 'state 427' -> else..do -> reduce (target=113, len=2)
actionsTable.fill(1251, 109326, 109331); // 'state 427' -> for..of -> reduce (target=113, len=2)
actionsTable.fill(1251, 109332, 109335); // 'state 427' -> return..try -> reduce (target=113, len=2)
actionsTable.fill(1251, 109337, 109339); // 'state 427' -> switch..case -> reduce (target=113, len=2)
actionsTable.fill(1251, 109340, 109345); // 'state 427' -> default..from -> reduce (target=113, len=2)
actionsTable.fill(1251, 109348, 109350); // 'state 427' -> type..export -> reduce (target=113, len=2)
actionsTable[109353] = 1251; // 'state 427' -> [ -> reduce (target=113, len=2)
actionsTable.fill(1251, 109355, 109357); // 'state 427' -> async..function -> reduce (target=113, len=2)
actionsTable.fill(1251, 109359, 109362); // 'state 427' -> get..class -> reduce (target=113, len=2)
actionsTable[109364] = 1251; // 'state 427' -> interface -> reduce (target=113, len=2)
actionsTable[109366] = 1251; // 'state 427' -> < -> reduce (target=113, len=2)
actionsTable.fill(1251, 109371, 109373); // 'state 427' -> void..typeof -> reduce (target=113, len=2)
actionsTable[109374] = 1251; // 'state 427' -> new -> reduce (target=113, len=2)
actionsTable.fill(1251, 109381, 109383); // 'state 427' -> +..- -> reduce (target=113, len=2)
actionsTable.fill(1251, 109384, 109388); // 'state 427' -> !..await -> reduce (target=113, len=2)
actionsTable.fill(1251, 109391, 109394); // 'state 427' -> number..template_string -> reduce (target=113, len=2)
actionsTable.fill(1251, 109400, 109404); // 'state 427' -> update_operator..@par-gen.EOF -> reduce (target=113, len=2)
actionsTable.fill(1251, 109568, 109577); // 'state 428' -> true..( -> reduce (target=113, len=2)
actionsTable.fill(1251, 109578, 109581); // 'state 428' -> else..do -> reduce (target=113, len=2)
actionsTable[109581] = 938; // 'state 428' -> ; -> shift (target=469, len=0)
actionsTable.fill(1251, 109582, 109587); // 'state 428' -> for..of -> reduce (target=113, len=2)
actionsTable.fill(1251, 109588, 109591); // 'state 428' -> return..try -> reduce (target=113, len=2)
actionsTable.fill(1251, 109593, 109595); // 'state 428' -> switch..case -> reduce (target=113, len=2)
actionsTable.fill(1251, 109596, 109601); // 'state 428' -> default..from -> reduce (target=113, len=2)
actionsTable.fill(1251, 109604, 109606); // 'state 428' -> type..export -> reduce (target=113, len=2)
actionsTable[109609] = 1251; // 'state 428' -> [ -> reduce (target=113, len=2)
actionsTable.fill(1251, 109611, 109613); // 'state 428' -> async..function -> reduce (target=113, len=2)
actionsTable.fill(1251, 109615, 109618); // 'state 428' -> get..class -> reduce (target=113, len=2)
actionsTable[109620] = 1251; // 'state 428' -> interface -> reduce (target=113, len=2)
actionsTable[109622] = 1251; // 'state 428' -> < -> reduce (target=113, len=2)
actionsTable.fill(1251, 109627, 109629); // 'state 428' -> void..typeof -> reduce (target=113, len=2)
actionsTable[109630] = 1251; // 'state 428' -> new -> reduce (target=113, len=2)
actionsTable.fill(1251, 109637, 109639); // 'state 428' -> +..- -> reduce (target=113, len=2)
actionsTable.fill(1251, 109640, 109644); // 'state 428' -> !..await -> reduce (target=113, len=2)
actionsTable.fill(1251, 109647, 109650); // 'state 428' -> number..template_string -> reduce (target=113, len=2)
actionsTable.fill(1251, 109656, 109660); // 'state 428' -> update_operator..@par-gen.EOF -> reduce (target=113, len=2)
actionsTable.fill(1253, 109824, 109833); // 'state 429' -> true..( -> reduce (target=114, len=2)
actionsTable.fill(1253, 109834, 109837); // 'state 429' -> else..do -> reduce (target=114, len=2)
actionsTable.fill(1253, 109838, 109843); // 'state 429' -> for..of -> reduce (target=114, len=2)
actionsTable.fill(1253, 109844, 109847); // 'state 429' -> return..try -> reduce (target=114, len=2)
actionsTable.fill(1253, 109849, 109851); // 'state 429' -> switch..case -> reduce (target=114, len=2)
actionsTable.fill(1253, 109852, 109857); // 'state 429' -> default..from -> reduce (target=114, len=2)
actionsTable.fill(1253, 109860, 109862); // 'state 429' -> type..export -> reduce (target=114, len=2)
actionsTable[109865] = 1253; // 'state 429' -> [ -> reduce (target=114, len=2)
actionsTable.fill(1253, 109867, 109869); // 'state 429' -> async..function -> reduce (target=114, len=2)
actionsTable.fill(1253, 109871, 109874); // 'state 429' -> get..class -> reduce (target=114, len=2)
actionsTable[109876] = 1253; // 'state 429' -> interface -> reduce (target=114, len=2)
actionsTable[109878] = 1253; // 'state 429' -> < -> reduce (target=114, len=2)
actionsTable.fill(1253, 109883, 109885); // 'state 429' -> void..typeof -> reduce (target=114, len=2)
actionsTable[109886] = 1253; // 'state 429' -> new -> reduce (target=114, len=2)
actionsTable.fill(1253, 109893, 109895); // 'state 429' -> +..- -> reduce (target=114, len=2)
actionsTable.fill(1253, 109896, 109900); // 'state 429' -> !..await -> reduce (target=114, len=2)
actionsTable.fill(1253, 109903, 109906); // 'state 429' -> number..template_string -> reduce (target=114, len=2)
actionsTable.fill(1253, 109912, 109916); // 'state 429' -> update_operator..@par-gen.EOF -> reduce (target=114, len=2)
actionsTable.fill(1253, 110080, 110089); // 'state 430' -> true..( -> reduce (target=114, len=2)
actionsTable.fill(1253, 110090, 110093); // 'state 430' -> else..do -> reduce (target=114, len=2)
actionsTable[110093] = 940; // 'state 430' -> ; -> shift (target=470, len=0)
actionsTable.fill(1253, 110094, 110099); // 'state 430' -> for..of -> reduce (target=114, len=2)
actionsTable.fill(1253, 110100, 110103); // 'state 430' -> return..try -> reduce (target=114, len=2)
actionsTable.fill(1253, 110105, 110107); // 'state 430' -> switch..case -> reduce (target=114, len=2)
actionsTable.fill(1253, 110108, 110113); // 'state 430' -> default..from -> reduce (target=114, len=2)
actionsTable.fill(1253, 110116, 110118); // 'state 430' -> type..export -> reduce (target=114, len=2)
actionsTable[110121] = 1253; // 'state 430' -> [ -> reduce (target=114, len=2)
actionsTable.fill(1253, 110123, 110125); // 'state 430' -> async..function -> reduce (target=114, len=2)
actionsTable.fill(1253, 110127, 110130); // 'state 430' -> get..class -> reduce (target=114, len=2)
actionsTable[110132] = 1253; // 'state 430' -> interface -> reduce (target=114, len=2)
actionsTable[110134] = 1253; // 'state 430' -> < -> reduce (target=114, len=2)
actionsTable.fill(1253, 110139, 110141); // 'state 430' -> void..typeof -> reduce (target=114, len=2)
actionsTable[110142] = 1253; // 'state 430' -> new -> reduce (target=114, len=2)
actionsTable.fill(1253, 110149, 110151); // 'state 430' -> +..- -> reduce (target=114, len=2)
actionsTable.fill(1253, 110152, 110156); // 'state 430' -> !..await -> reduce (target=114, len=2)
actionsTable.fill(1253, 110159, 110162); // 'state 430' -> number..template_string -> reduce (target=114, len=2)
actionsTable.fill(1253, 110168, 110172); // 'state 430' -> update_operator..@par-gen.EOF -> reduce (target=114, len=2)
actionsTable.fill(1255, 110336, 110345); // 'state 431' -> true..( -> reduce (target=115, len=2)
actionsTable.fill(1255, 110346, 110349); // 'state 431' -> else..do -> reduce (target=115, len=2)
actionsTable.fill(1255, 110350, 110355); // 'state 431' -> for..of -> reduce (target=115, len=2)
actionsTable.fill(1255, 110356, 110359); // 'state 431' -> return..try -> reduce (target=115, len=2)
actionsTable.fill(1255, 110361, 110363); // 'state 431' -> switch..case -> reduce (target=115, len=2)
actionsTable.fill(1255, 110364, 110369); // 'state 431' -> default..from -> reduce (target=115, len=2)
actionsTable.fill(1255, 110372, 110374); // 'state 431' -> type..export -> reduce (target=115, len=2)
actionsTable[110377] = 1255; // 'state 431' -> [ -> reduce (target=115, len=2)
actionsTable.fill(1255, 110379, 110381); // 'state 431' -> async..function -> reduce (target=115, len=2)
actionsTable.fill(1255, 110383, 110386); // 'state 431' -> get..class -> reduce (target=115, len=2)
actionsTable[110388] = 1255; // 'state 431' -> interface -> reduce (target=115, len=2)
actionsTable[110390] = 1255; // 'state 431' -> < -> reduce (target=115, len=2)
actionsTable.fill(1255, 110395, 110397); // 'state 431' -> void..typeof -> reduce (target=115, len=2)
actionsTable[110398] = 1255; // 'state 431' -> new -> reduce (target=115, len=2)
actionsTable.fill(1255, 110405, 110407); // 'state 431' -> +..- -> reduce (target=115, len=2)
actionsTable.fill(1255, 110408, 110412); // 'state 431' -> !..await -> reduce (target=115, len=2)
actionsTable.fill(1255, 110415, 110418); // 'state 431' -> number..template_string -> reduce (target=115, len=2)
actionsTable.fill(1255, 110424, 110428); // 'state 431' -> update_operator..@par-gen.EOF -> reduce (target=115, len=2)
actionsTable[110670] = 956; // 'state 432' -> private_property_identifier -> shift (target=478, len=0)
actionsTable[110681] = 956; // 'state 432' -> identifier -> shift (target=478, len=0)
actionsTable.fill(1405, 110848, 110871); // 'state 433' -> true..try -> reduce (target=190, len=2)
actionsTable.fill(1405, 110873, 110886); // 'state 433' -> switch..export -> reduce (target=190, len=2)
actionsTable.fill(1405, 110889, 110898); // 'state 433' -> [..class -> reduce (target=190, len=2)
actionsTable.fill(1405, 110899, 110901); // 'state 433' -> implements..interface -> reduce (target=190, len=2)
actionsTable.fill(1405, 110902, 110906); // 'state 433' -> <..& -> reduce (target=190, len=2)
actionsTable.fill(1405, 110907, 110909); // 'state 433' -> void..typeof -> reduce (target=190, len=2)
actionsTable.fill(1405, 110910, 110931); // 'state 433' -> new..accessibility_modifier -> reduce (target=190, len=2)
actionsTable.fill(1405, 110932, 110940); // 'state 433' -> equality_operator..@par-gen.EOF -> reduce (target=190, len=2)
actionsTable.fill(1409, 111104, 111127); // 'state 434' -> true..try -> reduce (target=192, len=2)
actionsTable.fill(1409, 111129, 111142); // 'state 434' -> switch..export -> reduce (target=192, len=2)
actionsTable.fill(1409, 111145, 111154); // 'state 434' -> [..class -> reduce (target=192, len=2)
actionsTable.fill(1409, 111155, 111157); // 'state 434' -> implements..interface -> reduce (target=192, len=2)
actionsTable.fill(1409, 111158, 111162); // 'state 434' -> <..& -> reduce (target=192, len=2)
actionsTable.fill(1409, 111163, 111165); // 'state 434' -> void..typeof -> reduce (target=192, len=2)
actionsTable.fill(1409, 111166, 111187); // 'state 434' -> new..accessibility_modifier -> reduce (target=192, len=2)
actionsTable.fill(1409, 111188, 111196); // 'state 434' -> equality_operator..@par-gen.EOF -> reduce (target=192, len=2)
actionsTable[111395] = 970; // 'state 435' -> as -> shift (target=485, len=0)
actionsTable.fill(1259, 111616, 111625); // 'state 436' -> true..( -> reduce (target=117, len=2)
actionsTable.fill(1259, 111626, 111629); // 'state 436' -> else..do -> reduce (target=117, len=2)
actionsTable[111629] = 972; // 'state 436' -> ; -> shift (target=486, len=0)
actionsTable.fill(1259, 111630, 111635); // 'state 436' -> for..of -> reduce (target=117, len=2)
actionsTable.fill(1259, 111636, 111639); // 'state 436' -> return..try -> reduce (target=117, len=2)
actionsTable.fill(1259, 111641, 111643); // 'state 436' -> switch..case -> reduce (target=117, len=2)
actionsTable.fill(1259, 111644, 111649); // 'state 436' -> default..from -> reduce (target=117, len=2)
actionsTable.fill(1259, 111652, 111654); // 'state 436' -> type..export -> reduce (target=117, len=2)
actionsTable[111657] = 1259; // 'state 436' -> [ -> reduce (target=117, len=2)
actionsTable.fill(1259, 111659, 111661); // 'state 436' -> async..function -> reduce (target=117, len=2)
actionsTable.fill(1259, 111663, 111666); // 'state 436' -> get..class -> reduce (target=117, len=2)
actionsTable[111668] = 1259; // 'state 436' -> interface -> reduce (target=117, len=2)
actionsTable[111670] = 1259; // 'state 436' -> < -> reduce (target=117, len=2)
actionsTable.fill(1259, 111675, 111677); // 'state 436' -> void..typeof -> reduce (target=117, len=2)
actionsTable[111678] = 1259; // 'state 436' -> new -> reduce (target=117, len=2)
actionsTable.fill(1259, 111685, 111687); // 'state 436' -> +..- -> reduce (target=117, len=2)
actionsTable.fill(1259, 111688, 111692); // 'state 436' -> !..await -> reduce (target=117, len=2)
actionsTable.fill(1259, 111695, 111698); // 'state 436' -> number..template_string -> reduce (target=117, len=2)
actionsTable.fill(1259, 111704, 111708); // 'state 436' -> update_operator..@par-gen.EOF -> reduce (target=117, len=2)
actionsTable[111904] = 749; // 'state 437' -> from -> reduce (target=118, len=1)
actionsTable[111905] = 280; // 'state 437' -> , -> shift (target=140, len=0)
actionsTable[112160] = 962; // 'state 438' -> from -> shift (target=481, len=0)
actionsTable[112416] = 749; // 'state 439' -> from -> reduce (target=118, len=1)
actionsTable[112672] = 980; // 'state 440' -> from -> shift (target=490, len=0)
actionsTable[112675] = 982; // 'state 440' -> as -> shift (target=491, len=0)
actionsTable[112985] = 160; // 'state 441' -> identifier -> shift (target=80, len=0)
actionsTable[113196] = 976; // 'state 442' -> function -> shift (target=488, len=0)
actionsTable[113497] = 284; // 'state 443' -> identifier -> shift (target=142, len=0)
actionsTable[113753] = 286; // 'state 444' -> identifier -> shift (target=143, len=0)
actionsTable.fill(1271, 113920, 113929); // 'state 445' -> true..( -> reduce (target=123, len=2)
actionsTable.fill(1271, 113930, 113933); // 'state 445' -> else..do -> reduce (target=123, len=2)
actionsTable.fill(1271, 113934, 113939); // 'state 445' -> for..of -> reduce (target=123, len=2)
actionsTable.fill(1271, 113940, 113943); // 'state 445' -> return..try -> reduce (target=123, len=2)
actionsTable.fill(1271, 113945, 113947); // 'state 445' -> switch..case -> reduce (target=123, len=2)
actionsTable.fill(1271, 113948, 113953); // 'state 445' -> default..from -> reduce (target=123, len=2)
actionsTable.fill(1271, 113956, 113958); // 'state 445' -> type..export -> reduce (target=123, len=2)
actionsTable[113961] = 1271; // 'state 445' -> [ -> reduce (target=123, len=2)
actionsTable.fill(1271, 113963, 113965); // 'state 445' -> async..function -> reduce (target=123, len=2)
actionsTable.fill(1271, 113967, 113970); // 'state 445' -> get..class -> reduce (target=123, len=2)
actionsTable[113972] = 1271; // 'state 445' -> interface -> reduce (target=123, len=2)
actionsTable[113974] = 1271; // 'state 445' -> < -> reduce (target=123, len=2)
actionsTable.fill(1271, 113979, 113981); // 'state 445' -> void..typeof -> reduce (target=123, len=2)
actionsTable[113982] = 1271; // 'state 445' -> new -> reduce (target=123, len=2)
actionsTable.fill(1271, 113989, 113991); // 'state 445' -> +..- -> reduce (target=123, len=2)
actionsTable.fill(1271, 113992, 113996); // 'state 445' -> !..await -> reduce (target=123, len=2)
actionsTable.fill(1271, 113999, 114002); // 'state 445' -> number..template_string -> reduce (target=123, len=2)
actionsTable.fill(1271, 114008, 114012); // 'state 445' -> update_operator..@par-gen.EOF -> reduce (target=123, len=2)
actionsTable.fill(1271, 114176, 114185); // 'state 446' -> true..( -> reduce (target=123, len=2)
actionsTable.fill(1271, 114186, 114189); // 'state 446' -> else..do -> reduce (target=123, len=2)
actionsTable[114189] = 974; // 'state 446' -> ; -> shift (target=487, len=0)
actionsTable.fill(1271, 114190, 114195); // 'state 446' -> for..of -> reduce (target=123, len=2)
actionsTable.fill(1271, 114196, 114199); // 'state 446' -> return..try -> reduce (target=123, len=2)
actionsTable.fill(1271, 114201, 114203); // 'state 446' -> switch..case -> reduce (target=123, len=2)
actionsTable.fill(1271, 114204, 114208); // 'state 446' -> default..import -> reduce (target=123, len=2)
actionsTable[114208] = 980; // 'state 446' -> from -> shift (target=490, len=0)
actionsTable.fill(1271, 114212, 114214); // 'state 446' -> type..export -> reduce (target=123, len=2)
actionsTable[114217] = 1271; // 'state 446' -> [ -> reduce (target=123, len=2)
actionsTable.fill(1271, 114219, 114221); // 'state 446' -> async..function -> reduce (target=123, len=2)
actionsTable.fill(1271, 114223, 114226); // 'state 446' -> get..class -> reduce (target=123, len=2)
actionsTable[114228] = 1271; // 'state 446' -> interface -> reduce (target=123, len=2)
actionsTable[114230] = 1271; // 'state 446' -> < -> reduce (target=123, len=2)
actionsTable.fill(1271, 114235, 114237); // 'state 446' -> void..typeof -> reduce (target=123, len=2)
actionsTable[114238] = 1271; // 'state 446' -> new -> reduce (target=123, len=2)
actionsTable.fill(1271, 114245, 114247); // 'state 446' -> +..- -> reduce (target=123, len=2)
actionsTable.fill(1271, 114248, 114252); // 'state 446' -> !..await -> reduce (target=123, len=2)
actionsTable.fill(1271, 114255, 114258); // 'state 446' -> number..template_string -> reduce (target=123, len=2)
actionsTable.fill(1271, 114264, 114268); // 'state 446' -> update_operator..@par-gen.EOF -> reduce (target=123, len=2)
actionsTable.fill(767, 114432, 114455); // 'state 447' -> true..try -> reduce (target=127, len=1)
actionsTable.fill(767, 114457, 114466); // 'state 447' -> switch.., -> reduce (target=127, len=1)
actionsTable.fill(767, 114468, 114470); // 'state 447' -> type..export -> reduce (target=127, len=1)
actionsTable[114471] = 767; // 'state 447' -> = -> reduce (target=127, len=1)
actionsTable.fill(767, 114473, 114477); // 'state 447' -> [..function -> reduce (target=127, len=1)
actionsTable.fill(767, 114479, 114482); // 'state 447' -> get..class -> reduce (target=127, len=1)
actionsTable.fill(767, 114484, 114487); // 'state 447' -> interface..< -> reduce (target=127, len=1)
actionsTable.fill(767, 114491, 114493); // 'state 447' -> void..typeof -> reduce (target=127, len=1)
actionsTable[114494] = 767; // 'state 447' -> new -> reduce (target=127, len=1)
actionsTable.fill(767, 114501, 114503); // 'state 447' -> +..- -> reduce (target=127, len=1)
actionsTable.fill(767, 114504, 114508); // 'state 447' -> !..await -> reduce (target=127, len=1)
actionsTable.fill(767, 114511, 114514); // 'state 447' -> number..template_string -> reduce (target=127, len=1)
actionsTable.fill(767, 114520, 114524); // 'state 447' -> update_operator..@par-gen.EOF -> reduce (target=127, len=1)
actionsTable[114746] = 310; // 'state 448' -> => -> shift (target=155, len=0)
actionsTable[114949] = 799; // 'state 449' -> { -> reduce (target=143, len=1)
actionsTable.fill(1443, 115200, 115223); // 'state 450' -> true..try -> reduce (target=209, len=2)
actionsTable.fill(1443, 115225, 115238); // 'state 450' -> switch..export -> reduce (target=209, len=2)
actionsTable.fill(1443, 115241, 115250); // 'state 450' -> [..class -> reduce (target=209, len=2)
actionsTable.fill(1443, 115251, 115253); // 'state 450' -> implements..interface -> reduce (target=209, len=2)
actionsTable.fill(1443, 115254, 115258); // 'state 450' -> <..& -> reduce (target=209, len=2)
actionsTable.fill(1443, 115259, 115261); // 'state 450' -> void..typeof -> reduce (target=209, len=2)
actionsTable.fill(1443, 115262, 115283); // 'state 450' -> new..accessibility_modifier -> reduce (target=209, len=2)
actionsTable.fill(1443, 115284, 115292); // 'state 450' -> equality_operator..@par-gen.EOF -> reduce (target=209, len=2)
actionsTable[115465] = 905; // 'state 451' -> ) -> reduce (target=196, len=1)
actionsTable[115489] = 905; // 'state 451' -> , -> reduce (target=196, len=1)
actionsTable[115498] = 905; // 'state 451' -> ] -> reduce (target=196, len=1)
actionsTable.fill(867, 115712, 115735); // 'state 452' -> true..try -> reduce (target=177, len=1)
actionsTable.fill(867, 115737, 115750); // 'state 452' -> switch..export -> reduce (target=177, len=1)
actionsTable.fill(867, 115753, 115756); // 'state 452' -> [..async -> reduce (target=177, len=1)
actionsTable[115756] = 224; // 'state 452' -> function -> shift (target=112, len=0)
actionsTable.fill(867, 115757, 115762); // 'state 452' -> static..class -> reduce (target=177, len=1)
actionsTable.fill(867, 115763, 115765); // 'state 452' -> implements..interface -> reduce (target=177, len=1)
actionsTable.fill(867, 115766, 115770); // 'state 452' -> <..& -> reduce (target=177, len=1)
actionsTable.fill(867, 115771, 115773); // 'state 452' -> void..typeof -> reduce (target=177, len=1)
actionsTable.fill(867, 115774, 115795); // 'state 452' -> new..accessibility_modifier -> reduce (target=177, len=1)
actionsTable.fill(867, 115796, 115804); // 'state 452' -> equality_operator..@par-gen.EOF -> reduce (target=177, len=1)
actionsTable.fill(1423, 115968, 115991); // 'state 453' -> true..try -> reduce (target=199, len=2)
actionsTable.fill(1423, 115993, 116006); // 'state 453' -> switch..export -> reduce (target=199, len=2)
actionsTable[116007] = 1423; // 'state 453' -> = -> reduce (target=199, len=2)
actionsTable.fill(1423, 116009, 116018); // 'state 453' -> [..class -> reduce (target=199, len=2)
actionsTable.fill(1423, 116019, 116026); // 'state 453' -> implements..& -> reduce (target=199, len=2)
actionsTable.fill(1423, 116027, 116029); // 'state 453' -> void..typeof -> reduce (target=199, len=2)
actionsTable.fill(1423, 116030, 116060); // 'state 453' -> new..@par-gen.EOF -> reduce (target=199, len=2)
actionsTable[116257] = 825; // 'state 454' -> , -> reduce (target=156, len=1)
actionsTable[116263] = 376; // 'state 454' -> = -> shift (target=188, len=0)
actionsTable[116274] = 378; // 'state 454' -> extends -> shift (target=189, len=0)
actionsTable[116279] = 825; // 'state 454' -> > -> reduce (target=156, len=1)
actionsTable.fill(1731, 116480, 116518); // 'state 455' -> true..export -> reduce (target=97, len=3)
actionsTable.fill(1731, 116521, 116530); // 'state 455' -> [..class -> reduce (target=97, len=3)
actionsTable.fill(1731, 116531, 116533); // 'state 455' -> implements..interface -> reduce (target=97, len=3)
actionsTable.fill(1731, 116534, 116538); // 'state 455' -> <..& -> reduce (target=97, len=3)
actionsTable.fill(1731, 116539, 116541); // 'state 455' -> void..typeof -> reduce (target=97, len=3)
actionsTable.fill(1731, 116542, 116563); // 'state 455' -> new..accessibility_modifier -> reduce (target=97, len=3)
actionsTable.fill(1731, 116564, 116572); // 'state 455' -> equality_operator..@par-gen.EOF -> reduce (target=97, len=3)
actionsTable.fill(1217, 116736, 116745); // 'state 456' -> true..( -> reduce (target=96, len=2)
actionsTable.fill(1217, 116747, 116749); // 'state 456' -> while..do -> reduce (target=96, len=2)
actionsTable.fill(1217, 116750, 116755); // 'state 456' -> for..of -> reduce (target=96, len=2)
actionsTable.fill(1217, 116756, 116759); // 'state 456' -> return..try -> reduce (target=96, len=2)
actionsTable.fill(1217, 116761, 116763); // 'state 456' -> switch..case -> reduce (target=96, len=2)
actionsTable.fill(1217, 116764, 116769); // 'state 456' -> default..from -> reduce (target=96, len=2)
actionsTable.fill(1217, 116772, 116774); // 'state 456' -> type..export -> reduce (target=96, len=2)
actionsTable[116777] = 1217; // 'state 456' -> [ -> reduce (target=96, len=2)
actionsTable.fill(1217, 116779, 116781); // 'state 456' -> async..function -> reduce (target=96, len=2)
actionsTable.fill(1217, 116783, 116786); // 'state 456' -> get..class -> reduce (target=96, len=2)
actionsTable[116788] = 1217; // 'state 456' -> interface -> reduce (target=96, len=2)
actionsTable[116790] = 1217; // 'state 456' -> < -> reduce (target=96, len=2)
actionsTable.fill(1217, 116795, 116797); // 'state 456' -> void..typeof -> reduce (target=96, len=2)
actionsTable[116798] = 1217; // 'state 456' -> new -> reduce (target=96, len=2)
actionsTable.fill(1217, 116805, 116807); // 'state 456' -> +..- -> reduce (target=96, len=2)
actionsTable.fill(1217, 116808, 116812); // 'state 456' -> !..await -> reduce (target=96, len=2)
actionsTable.fill(1217, 116815, 116818); // 'state 456' -> number..template_string -> reduce (target=96, len=2)
actionsTable.fill(1217, 116824, 116827); // 'state 456' -> update_operator..regex -> reduce (target=96, len=2)
actionsTable[117000] = 867; // 'state 457' -> ( -> reduce (target=177, len=1)
actionsTable[117019] = 867; // 'state 457' -> : -> reduce (target=177, len=1)
actionsTable.fill(867, 117045, 117047); // 'state 457' -> ?:..< -> reduce (target=177, len=1)
actionsTable[117256] = 925; // 'state 458' -> ( -> reduce (target=206, len=1)
actionsTable[117302] = 925; // 'state 458' -> < -> reduce (target=206, len=1)
actionsTable[117306] = 310; // 'state 458' -> => -> shift (target=155, len=0)
actionsTable.fill(1219, 117504, 117513); // 'state 459' -> true..( -> reduce (target=97, len=2)
actionsTable.fill(1219, 117515, 117517); // 'state 459' -> while..do -> reduce (target=97, len=2)
actionsTable[117517] = 1427; // 'state 459' -> ; -> reduce (target=201, len=2)
actionsTable.fill(1219, 117518, 117523); // 'state 459' -> for..of -> reduce (target=97, len=2)
actionsTable[117523] = 1427; // 'state 459' -> in -> reduce (target=201, len=2)
actionsTable.fill(1219, 117524, 117527); // 'state 459' -> return..try -> reduce (target=97, len=2)
actionsTable[117529] = 1219; // 'state 459' -> switch -> reduce (target=97, len=2)
actionsTable.fill(1219, 117533, 117537); // 'state 459' -> break..from -> reduce (target=97, len=2)
actionsTable.fill(1427, 117538, 117540); // 'state 459' -> *..as -> reduce (target=201, len=2)
actionsTable.fill(1219, 117540, 117542); // 'state 459' -> type..export -> reduce (target=97, len=2)
actionsTable[117543] = 1427; // 'state 459' -> = -> reduce (target=201, len=2)
actionsTable[117545] = 1219; // 'state 459' -> [ -> reduce (target=97, len=2)
actionsTable.fill(1219, 117547, 117549); // 'state 459' -> async..function -> reduce (target=97, len=2)
actionsTable.fill(1219, 117551, 117554); // 'state 459' -> get..class -> reduce (target=97, len=2)
actionsTable[117556] = 1219; // 'state 459' -> interface -> reduce (target=97, len=2)
actionsTable[117558] = 1219; // 'state 459' -> < -> reduce (target=97, len=2)
actionsTable.fill(1427, 117559, 117562); // 'state 459' -> >..& -> reduce (target=201, len=2)
actionsTable.fill(1219, 117563, 117565); // 'state 459' -> void..typeof -> reduce (target=97, len=2)
actionsTable[117566] = 1219; // 'state 459' -> new -> reduce (target=97, len=2)
actionsTable.fill(1427, 117567, 117573); // 'state 459' -> ?..instanceof -> reduce (target=201, len=2)
actionsTable.fill(1219, 117573, 117575); // 'state 459' -> +..- -> reduce (target=97, len=2)
actionsTable[117575] = 1427; // 'state 459' -> ** -> reduce (target=201, len=2)
actionsTable.fill(1219, 117576, 117580); // 'state 459' -> !..await -> reduce (target=97, len=2)
actionsTable.fill(1427, 117580, 117582); // 'state 459' -> ?.... -> reduce (target=201, len=2)
actionsTable.fill(1219, 117583, 117586); // 'state 459' -> number..template_string -> reduce (target=97, len=2)
actionsTable.fill(1427, 117587, 117592); // 'state 459' -> compound_assignment_operator..multiplicative_operator -> reduce (target=201, len=2)
actionsTable.fill(1219, 117592, 117596); // 'state 459' -> update_operator..@par-gen.EOF -> reduce (target=97, len=2)
actionsTable.fill(1939, 117760, 117783); // 'state 460' -> true..try -> reduce (target=201, len=3)
actionsTable.fill(1939, 117785, 117798); // 'state 460' -> switch..export -> reduce (target=201, len=3)
actionsTable[117799] = 1939; // 'state 460' -> = -> reduce (target=201, len=3)
actionsTable.fill(1939, 117801, 117810); // 'state 460' -> [..class -> reduce (target=201, len=3)
actionsTable.fill(1939, 117811, 117818); // 'state 460' -> implements..& -> reduce (target=201, len=3)
actionsTable.fill(1939, 117819, 117821); // 'state 460' -> void..typeof -> reduce (target=201, len=3)
actionsTable.fill(1939, 117822, 117852); // 'state 460' -> new..@par-gen.EOF -> reduce (target=201, len=3)
actionsTable[118022] = 1052; // 'state 461' -> } -> shift (target=526, len=0)
actionsTable[118049] = 386; // 'state 461' -> , -> shift (target=193, len=0)
actionsTable[118280] = 396; // 'state 462' -> ( -> shift (target=198, len=0)
actionsTable.fill(1743, 118528, 118537); // 'state 463' -> true..( -> reduce (target=103, len=3)
actionsTable.fill(1743, 118538, 118541); // 'state 463' -> else..do -> reduce (target=103, len=3)
actionsTable.fill(1743, 118542, 118547); // 'state 463' -> for..of -> reduce (target=103, len=3)
actionsTable.fill(1743, 118548, 118551); // 'state 463' -> return..try -> reduce (target=103, len=3)
actionsTable.fill(1743, 118553, 118555); // 'state 463' -> switch..case -> reduce (target=103, len=3)
actionsTable.fill(1743, 118556, 118561); // 'state 463' -> default..from -> reduce (target=103, len=3)
actionsTable.fill(1743, 118564, 118566); // 'state 463' -> type..export -> reduce (target=103, len=3)
actionsTable[118569] = 1743; // 'state 463' -> [ -> reduce (target=103, len=3)
actionsTable.fill(1743, 118571, 118573); // 'state 463' -> async..function -> reduce (target=103, len=3)
actionsTable.fill(1743, 118575, 118578); // 'state 463' -> get..class -> reduce (target=103, len=3)
actionsTable[118580] = 1743; // 'state 463' -> interface -> reduce (target=103, len=3)
actionsTable[118582] = 1743; // 'state 463' -> < -> reduce (target=103, len=3)
actionsTable.fill(1743, 118587, 118589); // 'state 463' -> void..typeof -> reduce (target=103, len=3)
actionsTable[118590] = 1743; // 'state 463' -> new -> reduce (target=103, len=3)
actionsTable.fill(1743, 118597, 118599); // 'state 463' -> +..- -> reduce (target=103, len=3)
actionsTable.fill(1743, 118600, 118604); // 'state 463' -> !..await -> reduce (target=103, len=3)
actionsTable.fill(1743, 118607, 118610); // 'state 463' -> number..template_string -> reduce (target=103, len=3)
actionsTable.fill(1743, 118616, 118620); // 'state 463' -> update_operator..@par-gen.EOF -> reduce (target=103, len=3)
actionsTable.fill(1427, 118784, 118807); // 'state 464' -> true..try -> reduce (target=201, len=2)
actionsTable.fill(1427, 118809, 118822); // 'state 464' -> switch..export -> reduce (target=201, len=2)
actionsTable[118823] = 1427; // 'state 464' -> = -> reduce (target=201, len=2)
actionsTable.fill(1427, 118825, 118834); // 'state 464' -> [..class -> reduce (target=201, len=2)
actionsTable.fill(1427, 118835, 118842); // 'state 464' -> implements..& -> reduce (target=201, len=2)
actionsTable.fill(1427, 118843, 118845); // 'state 464' -> void..typeof -> reduce (target=201, len=2)
actionsTable.fill(1427, 118846, 118876); // 'state 464' -> new..@par-gen.EOF -> reduce (target=201, len=2)
actionsTable[119046] = 923; // 'state 465' -> } -> reduce (target=205, len=1)
actionsTable[119048] = 925; // 'state 465' -> ( -> reduce (target=206, len=1)
actionsTable[119067] = 925; // 'state 465' -> : -> reduce (target=206, len=1)
actionsTable[119073] = 923; // 'state 465' -> , -> reduce (target=205, len=1)
actionsTable.fill(925, 119093, 119095); // 'state 465' -> ?:..< -> reduce (target=206, len=1)
actionsTable.fill(1745, 119296, 119305); // 'state 466' -> true..( -> reduce (target=104, len=3)
actionsTable.fill(1745, 119306, 119309); // 'state 466' -> else..do -> reduce (target=104, len=3)
actionsTable.fill(1745, 119310, 119315); // 'state 466' -> for..of -> reduce (target=104, len=3)
actionsTable.fill(1745, 119316, 119319); // 'state 466' -> return..try -> reduce (target=104, len=3)
actionsTable.fill(1745, 119321, 119323); // 'state 466' -> switch..case -> reduce (target=104, len=3)
actionsTable.fill(1745, 119324, 119329); // 'state 466' -> default..from -> reduce (target=104, len=3)
actionsTable.fill(1745, 119332, 119334); // 'state 466' -> type..export -> reduce (target=104, len=3)
actionsTable[119337] = 1745; // 'state 466' -> [ -> reduce (target=104, len=3)
actionsTable.fill(1745, 119339, 119341); // 'state 466' -> async..function -> reduce (target=104, len=3)
actionsTable.fill(1745, 119343, 119346); // 'state 466' -> get..class -> reduce (target=104, len=3)
actionsTable[119348] = 1745; // 'state 466' -> interface -> reduce (target=104, len=3)
actionsTable[119350] = 1745; // 'state 466' -> < -> reduce (target=104, len=3)
actionsTable.fill(1745, 119355, 119357); // 'state 466' -> void..typeof -> reduce (target=104, len=3)
actionsTable[119358] = 1745; // 'state 466' -> new -> reduce (target=104, len=3)
actionsTable.fill(1745, 119365, 119367); // 'state 466' -> +..- -> reduce (target=104, len=3)
actionsTable.fill(1745, 119368, 119372); // 'state 466' -> !..await -> reduce (target=104, len=3)
actionsTable.fill(1745, 119375, 119378); // 'state 466' -> number..template_string -> reduce (target=104, len=3)
actionsTable.fill(1745, 119384, 119388); // 'state 466' -> update_operator..@par-gen.EOF -> reduce (target=104, len=3)
actionsTable.fill(1747, 119552, 119561); // 'state 467' -> true..( -> reduce (target=105, len=3)
actionsTable.fill(1747, 119562, 119565); // 'state 467' -> else..do -> reduce (target=105, len=3)
actionsTable.fill(1747, 119566, 119571); // 'state 467' -> for..of -> reduce (target=105, len=3)
actionsTable.fill(1747, 119572, 119575); // 'state 467' -> return..try -> reduce (target=105, len=3)
actionsTable.fill(1747, 119577, 119579); // 'state 467' -> switch..case -> reduce (target=105, len=3)
actionsTable.fill(1747, 119580, 119585); // 'state 467' -> default..from -> reduce (target=105, len=3)
actionsTable.fill(1747, 119588, 119590); // 'state 467' -> type..export -> reduce (target=105, len=3)
actionsTable[119593] = 1747; // 'state 467' -> [ -> reduce (target=105, len=3)
actionsTable.fill(1747, 119595, 119597); // 'state 467' -> async..function -> reduce (target=105, len=3)
actionsTable.fill(1747, 119599, 119602); // 'state 467' -> get..class -> reduce (target=105, len=3)
actionsTable[119604] = 1747; // 'state 467' -> interface -> reduce (target=105, len=3)
actionsTable[119606] = 1747; // 'state 467' -> < -> reduce (target=105, len=3)
actionsTable.fill(1747, 119611, 119613); // 'state 467' -> void..typeof -> reduce (target=105, len=3)
actionsTable[119614] = 1747; // 'state 467' -> new -> reduce (target=105, len=3)
actionsTable.fill(1747, 119621, 119623); // 'state 467' -> +..- -> reduce (target=105, len=3)
actionsTable.fill(1747, 119624, 119628); // 'state 467' -> !..await -> reduce (target=105, len=3)
actionsTable.fill(1747, 119631, 119634); // 'state 467' -> number..template_string -> reduce (target=105, len=3)
actionsTable.fill(1747, 119640, 119644); // 'state 467' -> update_operator..@par-gen.EOF -> reduce (target=105, len=3)
actionsTable.fill(1219, 119808, 119846); // 'state 468' -> true..export -> reduce (target=97, len=2)
actionsTable.fill(1219, 119849, 119858); // 'state 468' -> [..class -> reduce (target=97, len=2)
actionsTable.fill(1219, 119859, 119861); // 'state 468' -> implements..interface -> reduce (target=97, len=2)
actionsTable.fill(1219, 119862, 119866); // 'state 468' -> <..& -> reduce (target=97, len=2)
actionsTable.fill(1219, 119867, 119869); // 'state 468' -> void..typeof -> reduce (target=97, len=2)
actionsTable.fill(1219, 119870, 119891); // 'state 468' -> new..accessibility_modifier -> reduce (target=97, len=2)
actionsTable.fill(1219, 119892, 119900); // 'state 468' -> equality_operator..@par-gen.EOF -> reduce (target=97, len=2)
actionsTable.fill(1763, 120064, 120073); // 'state 469' -> true..( -> reduce (target=113, len=3)
actionsTable.fill(1763, 120074, 120077); // 'state 469' -> else..do -> reduce (target=113, len=3)
actionsTable.fill(1763, 120078, 120083); // 'state 469' -> for..of -> reduce (target=113, len=3)
actionsTable.fill(1763, 120084, 120087); // 'state 469' -> return..try -> reduce (target=113, len=3)
actionsTable.fill(1763, 120089, 120091); // 'state 469' -> switch..case -> reduce (target=113, len=3)
actionsTable.fill(1763, 120092, 120097); // 'state 469' -> default..from -> reduce (target=113, len=3)
actionsTable.fill(1763, 120100, 120102); // 'state 469' -> type..export -> reduce (target=113, len=3)
actionsTable[120105] = 1763; // 'state 469' -> [ -> reduce (target=113, len=3)
actionsTable.fill(1763, 120107, 120109); // 'state 469' -> async..function -> reduce (target=113, len=3)
actionsTable.fill(1763, 120111, 120114); // 'state 469' -> get..class -> reduce (target=113, len=3)
actionsTable[120116] = 1763; // 'state 469' -> interface -> reduce (target=113, len=3)
actionsTable[120118] = 1763; // 'state 469' -> < -> reduce (target=113, len=3)
actionsTable.fill(1763, 120123, 120125); // 'state 469' -> void..typeof -> reduce (target=113, len=3)
actionsTable[120126] = 1763; // 'state 469' -> new -> reduce (target=113, len=3)
actionsTable.fill(1763, 120133, 120135); // 'state 469' -> +..- -> reduce (target=113, len=3)
actionsTable.fill(1763, 120136, 120140); // 'state 469' -> !..await -> reduce (target=113, len=3)
actionsTable.fill(1763, 120143, 120146); // 'state 469' -> number..template_string -> reduce (target=113, len=3)
actionsTable.fill(1763, 120152, 120156); // 'state 469' -> update_operator..@par-gen.EOF -> reduce (target=113, len=3)
actionsTable.fill(1765, 120320, 120329); // 'state 470' -> true..( -> reduce (target=114, len=3)
actionsTable.fill(1765, 120330, 120333); // 'state 470' -> else..do -> reduce (target=114, len=3)
actionsTable.fill(1765, 120334, 120339); // 'state 470' -> for..of -> reduce (target=114, len=3)
actionsTable.fill(1765, 120340, 120343); // 'state 470' -> return..try -> reduce (target=114, len=3)
actionsTable.fill(1765, 120345, 120347); // 'state 470' -> switch..case -> reduce (target=114, len=3)
actionsTable.fill(1765, 120348, 120353); // 'state 470' -> default..from -> reduce (target=114, len=3)
actionsTable.fill(1765, 120356, 120358); // 'state 470' -> type..export -> reduce (target=114, len=3)
actionsTable[120361] = 1765; // 'state 470' -> [ -> reduce (target=114, len=3)
actionsTable.fill(1765, 120363, 120365); // 'state 470' -> async..function -> reduce (target=114, len=3)
actionsTable.fill(1765, 120367, 120370); // 'state 470' -> get..class -> reduce (target=114, len=3)
actionsTable[120372] = 1765; // 'state 470' -> interface -> reduce (target=114, len=3)
actionsTable[120374] = 1765; // 'state 470' -> < -> reduce (target=114, len=3)
actionsTable.fill(1765, 120379, 120381); // 'state 470' -> void..typeof -> reduce (target=114, len=3)
actionsTable[120382] = 1765; // 'state 470' -> new -> reduce (target=114, len=3)
actionsTable.fill(1765, 120389, 120391); // 'state 470' -> +..- -> reduce (target=114, len=3)
actionsTable.fill(1765, 120392, 120396); // 'state 470' -> !..await -> reduce (target=114, len=3)
actionsTable.fill(1765, 120399, 120402); // 'state 470' -> number..template_string -> reduce (target=114, len=3)
actionsTable.fill(1765, 120408, 120412); // 'state 470' -> update_operator..@par-gen.EOF -> reduce (target=114, len=3)
actionsTable.fill(837, 120576, 120599); // 'state 471' -> true..try -> reduce (target=162, len=1)
actionsTable.fill(837, 120601, 120614); // 'state 471' -> switch..export -> reduce (target=162, len=1)
actionsTable[120615] = 837; // 'state 471' -> = -> reduce (target=162, len=1)
actionsTable.fill(837, 120617, 120626); // 'state 471' -> [..class -> reduce (target=162, len=1)
actionsTable.fill(837, 120627, 120629); // 'state 471' -> implements..interface -> reduce (target=162, len=1)
actionsTable.fill(837, 120630, 120637); // 'state 471' -> <..typeof -> reduce (target=162, len=1)
actionsTable.fill(837, 120638, 120659); // 'state 471' -> new..accessibility_modifier -> reduce (target=162, len=1)
actionsTable.fill(837, 120660, 120668); // 'state 471' -> equality_operator..@par-gen.EOF -> reduce (target=162, len=1)
actionsTable[120921] = 1078; // 'state 472' -> identifier -> shift (target=539, len=0)
actionsTable[121146] = 430; // 'state 473' -> => -> shift (target=215, len=0)
actionsTable.fill(1911, 121344, 121367); // 'state 474' -> true..try -> reduce (target=187, len=3)
actionsTable.fill(1911, 121369, 121382); // 'state 474' -> switch..export -> reduce (target=187, len=3)
actionsTable.fill(1911, 121385, 121394); // 'state 474' -> [..class -> reduce (target=187, len=3)
actionsTable.fill(1911, 121395, 121397); // 'state 474' -> implements..interface -> reduce (target=187, len=3)
actionsTable.fill(1911, 121398, 121402); // 'state 474' -> <..& -> reduce (target=187, len=3)
actionsTable.fill(1911, 121403, 121405); // 'state 474' -> void..typeof -> reduce (target=187, len=3)
actionsTable.fill(1911, 121406, 121427); // 'state 474' -> new..accessibility_modifier -> reduce (target=187, len=3)
actionsTable.fill(1911, 121428, 121436); // 'state 474' -> equality_operator..@par-gen.EOF -> reduce (target=187, len=3)
actionsTable.fill(829, 121600, 121623); // 'state 475' -> true..try -> reduce (target=158, len=1)
actionsTable.fill(829, 121625, 121638); // 'state 475' -> switch..export -> reduce (target=158, len=1)
actionsTable[121639] = 829; // 'state 475' -> = -> reduce (target=158, len=1)
actionsTable.fill(829, 121641, 121650); // 'state 475' -> [..class -> reduce (target=158, len=1)
actionsTable.fill(829, 121651, 121653); // 'state 475' -> implements..interface -> reduce (target=158, len=1)
actionsTable.fill(829, 121654, 121661); // 'state 475' -> <..typeof -> reduce (target=158, len=1)
actionsTable.fill(829, 121662, 121683); // 'state 475' -> new..accessibility_modifier -> reduce (target=158, len=1)
actionsTable.fill(829, 121684, 121692); // 'state 475' -> equality_operator..@par-gen.EOF -> reduce (target=158, len=1)
actionsTable.fill(829, 121856, 121879); // 'state 476' -> true..try -> reduce (target=158, len=1)
actionsTable.fill(829, 121881, 121894); // 'state 476' -> switch..export -> reduce (target=158, len=1)
actionsTable[121895] = 829; // 'state 476' -> = -> reduce (target=158, len=1)
actionsTable[121897] = 416; // 'state 476' -> [ -> shift (target=208, len=0)
actionsTable.fill(829, 121898, 121906); // 'state 476' -> ]..class -> reduce (target=158, len=1)
actionsTable.fill(829, 121907, 121909); // 'state 476' -> implements..interface -> reduce (target=158, len=1)
actionsTable.fill(829, 121910, 121917); // 'state 476' -> <..typeof -> reduce (target=158, len=1)
actionsTable.fill(829, 121918, 121939); // 'state 476' -> new..accessibility_modifier -> reduce (target=158, len=1)
actionsTable.fill(829, 121940, 121948); // 'state 476' -> equality_operator..@par-gen.EOF -> reduce (target=158, len=1)
actionsTable.fill(837, 122112, 122135); // 'state 477' -> true..try -> reduce (target=162, len=1)
actionsTable.fill(837, 122137, 122150); // 'state 477' -> switch..export -> reduce (target=162, len=1)
actionsTable[122151] = 837; // 'state 477' -> = -> reduce (target=162, len=1)
actionsTable.fill(837, 122153, 122162); // 'state 477' -> [..class -> reduce (target=162, len=1)
actionsTable.fill(837, 122163, 122165); // 'state 477' -> implements..interface -> reduce (target=162, len=1)
actionsTable.fill(837, 122166, 122170); // 'state 477' -> <..& -> reduce (target=162, len=1)
actionsTable[122170] = 430; // 'state 477' -> => -> shift (target=215, len=0)
actionsTable.fill(837, 122171, 122173); // 'state 477' -> void..typeof -> reduce (target=162, len=1)
actionsTable.fill(837, 122174, 122195); // 'state 477' -> new..accessibility_modifier -> reduce (target=162, len=1)
actionsTable.fill(837, 122196, 122204); // 'state 477' -> equality_operator..@par-gen.EOF -> reduce (target=162, len=1)
actionsTable.fill(1923, 122368, 122391); // 'state 478' -> true..try -> reduce (target=193, len=3)
actionsTable.fill(1923, 122393, 122406); // 'state 478' -> switch..export -> reduce (target=193, len=3)
actionsTable[122407] = 1923; // 'state 478' -> = -> reduce (target=193, len=3)
actionsTable.fill(1923, 122409, 122418); // 'state 478' -> [..class -> reduce (target=193, len=3)
actionsTable.fill(1923, 122419, 122421); // 'state 478' -> implements..interface -> reduce (target=193, len=3)
actionsTable.fill(1923, 122422, 122426); // 'state 478' -> <..& -> reduce (target=193, len=3)
actionsTable.fill(1923, 122427, 122429); // 'state 478' -> void..typeof -> reduce (target=193, len=3)
actionsTable.fill(1923, 122430, 122460); // 'state 478' -> new..@par-gen.EOF -> reduce (target=193, len=3)
actionsTable.fill(1921, 122624, 122647); // 'state 479' -> true..try -> reduce (target=192, len=3)
actionsTable.fill(1921, 122649, 122662); // 'state 479' -> switch..export -> reduce (target=192, len=3)
actionsTable.fill(1921, 122665, 122674); // 'state 479' -> [..class -> reduce (target=192, len=3)
actionsTable.fill(1921, 122675, 122677); // 'state 479' -> implements..interface -> reduce (target=192, len=3)
actionsTable.fill(1921, 122678, 122682); // 'state 479' -> <..& -> reduce (target=192, len=3)
actionsTable.fill(1921, 122683, 122685); // 'state 479' -> void..typeof -> reduce (target=192, len=3)
actionsTable.fill(1921, 122686, 122707); // 'state 479' -> new..accessibility_modifier -> reduce (target=192, len=3)
actionsTable.fill(1921, 122708, 122716); // 'state 479' -> equality_operator..@par-gen.EOF -> reduce (target=192, len=3)
actionsTable.fill(1415, 122880, 122903); // 'state 480' -> true..try -> reduce (target=195, len=2)
actionsTable.fill(1415, 122905, 122918); // 'state 480' -> switch..export -> reduce (target=195, len=2)
actionsTable.fill(1415, 122921, 122930); // 'state 480' -> [..class -> reduce (target=195, len=2)
actionsTable.fill(1415, 122931, 122933); // 'state 480' -> implements..interface -> reduce (target=195, len=2)
actionsTable.fill(1415, 122934, 122938); // 'state 480' -> <..& -> reduce (target=195, len=2)
actionsTable.fill(1415, 122939, 122941); // 'state 480' -> void..typeof -> reduce (target=195, len=2)
actionsTable.fill(1415, 122942, 122963); // 'state 480' -> new..accessibility_modifier -> reduce (target=195, len=2)
actionsTable.fill(1415, 122964, 122972); // 'state 480' -> equality_operator..@par-gen.EOF -> reduce (target=195, len=2)
actionsTable[123216] = 1086; // 'state 481' -> string -> shift (target=543, len=0)
actionsTable.fill(1267, 123392, 123401); // 'state 482' -> true..( -> reduce (target=121, len=2)
actionsTable.fill(1267, 123402, 123411); // 'state 482' -> else..of -> reduce (target=121, len=2)
actionsTable.fill(1267, 123412, 123415); // 'state 482' -> return..try -> reduce (target=121, len=2)
actionsTable.fill(1267, 123417, 123419); // 'state 482' -> switch..case -> reduce (target=121, len=2)
actionsTable.fill(1267, 123420, 123425); // 'state 482' -> default..from -> reduce (target=121, len=2)
actionsTable.fill(1267, 123428, 123430); // 'state 482' -> type..export -> reduce (target=121, len=2)
actionsTable[123433] = 1267; // 'state 482' -> [ -> reduce (target=121, len=2)
actionsTable.fill(1267, 123435, 123437); // 'state 482' -> async..function -> reduce (target=121, len=2)
actionsTable.fill(1267, 123439, 123442); // 'state 482' -> get..class -> reduce (target=121, len=2)
actionsTable[123444] = 1267; // 'state 482' -> interface -> reduce (target=121, len=2)
actionsTable[123446] = 1267; // 'state 482' -> < -> reduce (target=121, len=2)
actionsTable.fill(1267, 123451, 123453); // 'state 482' -> void..typeof -> reduce (target=121, len=2)
actionsTable[123454] = 1267; // 'state 482' -> new -> reduce (target=121, len=2)
actionsTable.fill(1267, 123461, 123463); // 'state 482' -> +..- -> reduce (target=121, len=2)
actionsTable.fill(1267, 123464, 123468); // 'state 482' -> !..await -> reduce (target=121, len=2)
actionsTable.fill(1267, 123471, 123474); // 'state 482' -> number..template_string -> reduce (target=121, len=2)
actionsTable.fill(1267, 123480, 123484); // 'state 482' -> update_operator..@par-gen.EOF -> reduce (target=121, len=2)
actionsTable[123737] = 1094; // 'state 483' -> identifier -> shift (target=547, len=0)
actionsTable[123910] = 757; // 'state 484' -> } -> reduce (target=122, len=1)
actionsTable[123937] = 757; // 'state 484' -> , -> reduce (target=122, len=1)
actionsTable[123939] = 1096; // 'state 484' -> as -> shift (target=548, len=0)
actionsTable[124249] = 1098; // 'state 485' -> identifier -> shift (target=549, len=0)
actionsTable.fill(1771, 124416, 124425); // 'state 486' -> true..( -> reduce (target=117, len=3)
actionsTable.fill(1771, 124426, 124429); // 'state 486' -> else..do -> reduce (target=117, len=3)
actionsTable.fill(1771, 124430, 124435); // 'state 486' -> for..of -> reduce (target=117, len=3)
actionsTable.fill(1771, 124436, 124439); // 'state 486' -> return..try -> reduce (target=117, len=3)
actionsTable.fill(1771, 124441, 124443); // 'state 486' -> switch..case -> reduce (target=117, len=3)
actionsTable.fill(1771, 124444, 124449); // 'state 486' -> default..from -> reduce (target=117, len=3)
actionsTable.fill(1771, 124452, 124454); // 'state 486' -> type..export -> reduce (target=117, len=3)
actionsTable[124457] = 1771; // 'state 486' -> [ -> reduce (target=117, len=3)
actionsTable.fill(1771, 124459, 124461); // 'state 486' -> async..function -> reduce (target=117, len=3)
actionsTable.fill(1771, 124463, 124466); // 'state 486' -> get..class -> reduce (target=117, len=3)
actionsTable[124468] = 1771; // 'state 486' -> interface -> reduce (target=117, len=3)
actionsTable[124470] = 1771; // 'state 486' -> < -> reduce (target=117, len=3)
actionsTable.fill(1771, 124475, 124477); // 'state 486' -> void..typeof -> reduce (target=117, len=3)
actionsTable[124478] = 1771; // 'state 486' -> new -> reduce (target=117, len=3)
actionsTable.fill(1771, 124485, 124487); // 'state 486' -> +..- -> reduce (target=117, len=3)
actionsTable.fill(1771, 124488, 124492); // 'state 486' -> !..await -> reduce (target=117, len=3)
actionsTable.fill(1771, 124495, 124498); // 'state 486' -> number..template_string -> reduce (target=117, len=3)
actionsTable.fill(1771, 124504, 124508); // 'state 486' -> update_operator..@par-gen.EOF -> reduce (target=117, len=3)
actionsTable.fill(1783, 124672, 124681); // 'state 487' -> true..( -> reduce (target=123, len=3)
actionsTable.fill(1783, 124682, 124685); // 'state 487' -> else..do -> reduce (target=123, len=3)
actionsTable.fill(1783, 124686, 124691); // 'state 487' -> for..of -> reduce (target=123, len=3)
actionsTable.fill(1783, 124692, 124695); // 'state 487' -> return..try -> reduce (target=123, len=3)
actionsTable.fill(1783, 124697, 124699); // 'state 487' -> switch..case -> reduce (target=123, len=3)
actionsTable.fill(1783, 124700, 124705); // 'state 487' -> default..from -> reduce (target=123, len=3)
actionsTable.fill(1783, 124708, 124710); // 'state 487' -> type..export -> reduce (target=123, len=3)
actionsTable[124713] = 1783; // 'state 487' -> [ -> reduce (target=123, len=3)
actionsTable.fill(1783, 124715, 124717); // 'state 487' -> async..function -> reduce (target=123, len=3)
actionsTable.fill(1783, 124719, 124722); // 'state 487' -> get..class -> reduce (target=123, len=3)
actionsTable[124724] = 1783; // 'state 487' -> interface -> reduce (target=123, len=3)
actionsTable[124726] = 1783; // 'state 487' -> < -> reduce (target=123, len=3)
actionsTable.fill(1783, 124731, 124733); // 'state 487' -> void..typeof -> reduce (target=123, len=3)
actionsTable[124734] = 1783; // 'state 487' -> new -> reduce (target=123, len=3)
actionsTable.fill(1783, 124741, 124743); // 'state 487' -> +..- -> reduce (target=123, len=3)
actionsTable.fill(1783, 124744, 124748); // 'state 487' -> !..await -> reduce (target=123, len=3)
actionsTable.fill(1783, 124751, 124754); // 'state 487' -> number..template_string -> reduce (target=123, len=3)
actionsTable.fill(1783, 124760, 124764); // 'state 487' -> update_operator..@par-gen.EOF -> reduce (target=123, len=3)
actionsTable[125017] = 452; // 'state 488' -> identifier -> shift (target=226, len=0)
actionsTable.fill(1783, 125184, 125193); // 'state 489' -> true..( -> reduce (target=123, len=3)
actionsTable.fill(1783, 125194, 125197); // 'state 489' -> else..do -> reduce (target=123, len=3)
actionsTable[125197] = 1102; // 'state 489' -> ; -> shift (target=551, len=0)
actionsTable.fill(1783, 125198, 125203); // 'state 489' -> for..of -> reduce (target=123, len=3)
actionsTable.fill(1783, 125204, 125207); // 'state 489' -> return..try -> reduce (target=123, len=3)
actionsTable.fill(1783, 125209, 125211); // 'state 489' -> switch..case -> reduce (target=123, len=3)
actionsTable.fill(1783, 125212, 125217); // 'state 489' -> default..from -> reduce (target=123, len=3)
actionsTable.fill(1783, 125220, 125222); // 'state 489' -> type..export -> reduce (target=123, len=3)
actionsTable[125225] = 1783; // 'state 489' -> [ -> reduce (target=123, len=3)
actionsTable.fill(1783, 125227, 125229); // 'state 489' -> async..function -> reduce (target=123, len=3)
actionsTable.fill(1783, 125231, 125234); // 'state 489' -> get..class -> reduce (target=123, len=3)
actionsTable[125236] = 1783; // 'state 489' -> interface -> reduce (target=123, len=3)
actionsTable[125238] = 1783; // 'state 489' -> < -> reduce (target=123, len=3)
actionsTable.fill(1783, 125243, 125245); // 'state 489' -> void..typeof -> reduce (target=123, len=3)
actionsTable[125246] = 1783; // 'state 489' -> new -> reduce (target=123, len=3)
actionsTable.fill(1783, 125253, 125255); // 'state 489' -> +..- -> reduce (target=123, len=3)
actionsTable.fill(1783, 125256, 125260); // 'state 489' -> !..await -> reduce (target=123, len=3)
actionsTable.fill(1783, 125263, 125266); // 'state 489' -> number..template_string -> reduce (target=123, len=3)
actionsTable.fill(1783, 125272, 125276); // 'state 489' -> update_operator..@par-gen.EOF -> reduce (target=123, len=3)
actionsTable[125520] = 1104; // 'state 490' -> string -> shift (target=552, len=0)
actionsTable[125785] = 1106; // 'state 491' -> identifier -> shift (target=553, len=0)
actionsTable.fill(1787, 125952, 125961); // 'state 492' -> true..( -> reduce (target=125, len=3)
actionsTable.fill(1787, 125962, 125971); // 'state 492' -> else..of -> reduce (target=125, len=3)
actionsTable.fill(1787, 125972, 125975); // 'state 492' -> return..try -> reduce (target=125, len=3)
actionsTable.fill(1787, 125977, 125979); // 'state 492' -> switch..case -> reduce (target=125, len=3)
actionsTable.fill(1787, 125980, 125985); // 'state 492' -> default..from -> reduce (target=125, len=3)
actionsTable.fill(1787, 125988, 125990); // 'state 492' -> type..export -> reduce (target=125, len=3)
actionsTable[125993] = 1787; // 'state 492' -> [ -> reduce (target=125, len=3)
actionsTable.fill(1787, 125995, 125997); // 'state 492' -> async..function -> reduce (target=125, len=3)
actionsTable.fill(1787, 125999, 126002); // 'state 492' -> get..class -> reduce (target=125, len=3)
actionsTable[126004] = 1787; // 'state 492' -> interface -> reduce (target=125, len=3)
actionsTable[126006] = 1787; // 'state 492' -> < -> reduce (target=125, len=3)
actionsTable.fill(1787, 126011, 126013); // 'state 492' -> void..typeof -> reduce (target=125, len=3)
actionsTable[126014] = 1787; // 'state 492' -> new -> reduce (target=125, len=3)
actionsTable.fill(1787, 126021, 126023); // 'state 492' -> +..- -> reduce (target=125, len=3)
actionsTable.fill(1787, 126024, 126028); // 'state 492' -> !..await -> reduce (target=125, len=3)
actionsTable.fill(1787, 126031, 126034); // 'state 492' -> number..template_string -> reduce (target=125, len=3)
actionsTable.fill(1787, 126040, 126044); // 'state 492' -> update_operator..@par-gen.EOF -> reduce (target=125, len=3)
actionsTable.fill(1787, 126208, 126217); // 'state 493' -> true..( -> reduce (target=125, len=3)
actionsTable.fill(1787, 126218, 126221); // 'state 493' -> else..do -> reduce (target=125, len=3)
actionsTable[126221] = 1108; // 'state 493' -> ; -> shift (target=554, len=0)
actionsTable.fill(1787, 126222, 126227); // 'state 493' -> for..of -> reduce (target=125, len=3)
actionsTable.fill(1787, 126228, 126231); // 'state 493' -> return..try -> reduce (target=125, len=3)
actionsTable.fill(1787, 126233, 126235); // 'state 493' -> switch..case -> reduce (target=125, len=3)
actionsTable.fill(1787, 126236, 126241); // 'state 493' -> default..from -> reduce (target=125, len=3)
actionsTable[126241] = 462; // 'state 493' -> , -> shift (target=231, len=0)
actionsTable.fill(1787, 126244, 126246); // 'state 493' -> type..export -> reduce (target=125, len=3)
actionsTable[126249] = 1787; // 'state 493' -> [ -> reduce (target=125, len=3)
actionsTable.fill(1787, 126251, 126253); // 'state 493' -> async..function -> reduce (target=125, len=3)
actionsTable.fill(1787, 126255, 126258); // 'state 493' -> get..class -> reduce (target=125, len=3)
actionsTable[126260] = 1787; // 'state 493' -> interface -> reduce (target=125, len=3)
actionsTable[126262] = 1787; // 'state 493' -> < -> reduce (target=125, len=3)
actionsTable.fill(1787, 126267, 126269); // 'state 493' -> void..typeof -> reduce (target=125, len=3)
actionsTable[126270] = 1787; // 'state 493' -> new -> reduce (target=125, len=3)
actionsTable.fill(1787, 126277, 126279); // 'state 493' -> +..- -> reduce (target=125, len=3)
actionsTable.fill(1787, 126280, 126284); // 'state 493' -> !..await -> reduce (target=125, len=3)
actionsTable.fill(1787, 126287, 126290); // 'state 493' -> number..template_string -> reduce (target=125, len=3)
actionsTable.fill(1787, 126296, 126300); // 'state 493' -> update_operator..@par-gen.EOF -> reduce (target=125, len=3)
actionsTable.fill(1277, 126464, 126473); // 'state 494' -> true..( -> reduce (target=126, len=2)
actionsTable.fill(1277, 126474, 126483); // 'state 494' -> else..of -> reduce (target=126, len=2)
actionsTable.fill(1277, 126484, 126487); // 'state 494' -> return..try -> reduce (target=126, len=2)
actionsTable.fill(1277, 126489, 126491); // 'state 494' -> switch..case -> reduce (target=126, len=2)
actionsTable.fill(1277, 126492, 126498); // 'state 494' -> default.., -> reduce (target=126, len=2)
actionsTable.fill(1277, 126500, 126502); // 'state 494' -> type..export -> reduce (target=126, len=2)
actionsTable[126503] = 464; // 'state 494' -> = -> shift (target=232, len=0)
actionsTable[126505] = 1277; // 'state 494' -> [ -> reduce (target=126, len=2)
actionsTable.fill(1277, 126507, 126509); // 'state 494' -> async..function -> reduce (target=126, len=2)
actionsTable.fill(1277, 126511, 126514); // 'state 494' -> get..class -> reduce (target=126, len=2)
actionsTable[126516] = 1277; // 'state 494' -> interface -> reduce (target=126, len=2)
actionsTable[126518] = 1277; // 'state 494' -> < -> reduce (target=126, len=2)
actionsTable.fill(1277, 126523, 126525); // 'state 494' -> void..typeof -> reduce (target=126, len=2)
actionsTable[126526] = 1277; // 'state 494' -> new -> reduce (target=126, len=2)
actionsTable.fill(1277, 126533, 126535); // 'state 494' -> +..- -> reduce (target=126, len=2)
actionsTable.fill(1277, 126536, 126540); // 'state 494' -> !..await -> reduce (target=126, len=2)
actionsTable.fill(1277, 126543, 126546); // 'state 494' -> number..template_string -> reduce (target=126, len=2)
actionsTable.fill(1277, 126552, 126556); // 'state 494' -> update_operator..@par-gen.EOF -> reduce (target=126, len=2)
actionsTable.fill(1283, 126720, 126743); // 'state 495' -> true..try -> reduce (target=129, len=2)
actionsTable.fill(1283, 126745, 126754); // 'state 495' -> switch.., -> reduce (target=129, len=2)
actionsTable.fill(1283, 126756, 126758); // 'state 495' -> type..export -> reduce (target=129, len=2)
actionsTable[126759] = 1283; // 'state 495' -> = -> reduce (target=129, len=2)
actionsTable.fill(1283, 126761, 126765); // 'state 495' -> [..function -> reduce (target=129, len=2)
actionsTable.fill(1283, 126767, 126770); // 'state 495' -> get..class -> reduce (target=129, len=2)
actionsTable.fill(1283, 126772, 126775); // 'state 495' -> interface..< -> reduce (target=129, len=2)
actionsTable.fill(1283, 126779, 126781); // 'state 495' -> void..typeof -> reduce (target=129, len=2)
actionsTable[126782] = 1283; // 'state 495' -> new -> reduce (target=129, len=2)
actionsTable.fill(1283, 126789, 126791); // 'state 495' -> +..- -> reduce (target=129, len=2)
actionsTable.fill(1283, 126792, 126796); // 'state 495' -> !..await -> reduce (target=129, len=2)
actionsTable.fill(1283, 126799, 126802); // 'state 495' -> number..template_string -> reduce (target=129, len=2)
actionsTable.fill(1283, 126808, 126812); // 'state 495' -> update_operator..@par-gen.EOF -> reduce (target=129, len=2)
actionsTable[126982] = 773; // 'state 496' -> } -> reduce (target=130, len=1)
actionsTable[127003] = 925; // 'state 496' -> : -> reduce (target=206, len=1)
actionsTable[127009] = 773; // 'state 496' -> , -> reduce (target=130, len=1)
actionsTable[127015] = 470; // 'state 496' -> = -> shift (target=235, len=0)
actionsTable[127259] = 472; // 'state 497' -> : -> shift (target=236, len=0)
actionsTable.fill(1289, 127488, 127511); // 'state 498' -> true..try -> reduce (target=132, len=2)
actionsTable.fill(1289, 127513, 127522); // 'state 498' -> switch.., -> reduce (target=132, len=2)
actionsTable.fill(1289, 127524, 127526); // 'state 498' -> type..export -> reduce (target=132, len=2)
actionsTable[127527] = 1289; // 'state 498' -> = -> reduce (target=132, len=2)
actionsTable.fill(1289, 127529, 127533); // 'state 498' -> [..function -> reduce (target=132, len=2)
actionsTable.fill(1289, 127535, 127538); // 'state 498' -> get..class -> reduce (target=132, len=2)
actionsTable.fill(1289, 127540, 127543); // 'state 498' -> interface..< -> reduce (target=132, len=2)
actionsTable.fill(1289, 127547, 127549); // 'state 498' -> void..typeof -> reduce (target=132, len=2)
actionsTable[127550] = 1289; // 'state 498' -> new -> reduce (target=132, len=2)
actionsTable.fill(1289, 127557, 127559); // 'state 498' -> +..- -> reduce (target=132, len=2)
actionsTable.fill(1289, 127560, 127564); // 'state 498' -> !..await -> reduce (target=132, len=2)
actionsTable.fill(1289, 127567, 127570); // 'state 498' -> number..template_string -> reduce (target=132, len=2)
actionsTable.fill(1289, 127576, 127580); // 'state 498' -> update_operator..@par-gen.EOF -> reduce (target=132, len=2)
actionsTable[127777] = 779; // 'state 499' -> , -> reduce (target=133, len=1)
actionsTable[127783] = 478; // 'state 499' -> = -> shift (target=239, len=0)
actionsTable[127786] = 779; // 'state 499' -> ] -> reduce (target=133, len=1)
actionsTable[128058] = 490; // 'state 500' -> => -> shift (target=245, len=0)
actionsTable.fill(1953, 128256, 128279); // 'state 501' -> true..try -> reduce (target=208, len=3)
actionsTable.fill(1953, 128281, 128294); // 'state 501' -> switch..export -> reduce (target=208, len=3)
actionsTable.fill(1953, 128297, 128306); // 'state 501' -> [..class -> reduce (target=208, len=3)
actionsTable.fill(1953, 128307, 128309); // 'state 501' -> implements..interface -> reduce (target=208, len=3)
actionsTable.fill(1953, 128310, 128314); // 'state 501' -> <..& -> reduce (target=208, len=3)
actionsTable.fill(1953, 128315, 128317); // 'state 501' -> void..typeof -> reduce (target=208, len=3)
actionsTable.fill(1953, 128318, 128339); // 'state 501' -> new..accessibility_modifier -> reduce (target=208, len=3)
actionsTable.fill(1953, 128340, 128348); // 'state 501' -> equality_operator..@par-gen.EOF -> reduce (target=208, len=3)
actionsTable.fill(1297, 128517, 128519); // 'state 502' -> {..} -> reduce (target=136, len=2)
actionsTable[128525] = 1297; // 'state 502' -> ; -> reduce (target=136, len=2)
actionsTable[128530] = 1297; // 'state 502' -> of -> reduce (target=136, len=2)
actionsTable[128539] = 1297; // 'state 502' -> : -> reduce (target=136, len=2)
actionsTable.fill(1297, 128544, 128546); // 'state 502' -> from.., -> reduce (target=136, len=2)
actionsTable[128548] = 1297; // 'state 502' -> type -> reduce (target=136, len=2)
actionsTable[128553] = 1297; // 'state 502' -> [ -> reduce (target=136, len=2)
actionsTable[128555] = 1297; // 'state 502' -> async -> reduce (target=136, len=2)
actionsTable.fill(1297, 128558, 128561); // 'state 502' -> readonly..set -> reduce (target=136, len=2)
actionsTable[128565] = 1297; // 'state 502' -> ?: -> reduce (target=136, len=2)
actionsTable[128570] = 1297; // 'state 502' -> => -> reduce (target=136, len=2)
actionsTable[128574] = 1297; // 'state 502' -> new -> reduce (target=136, len=2)
actionsTable.fill(1297, 128591, 128593); // 'state 502' -> number..string -> reduce (target=136, len=2)
actionsTable[128601] = 1297; // 'state 502' -> identifier -> reduce (target=136, len=2)
actionsTable[128773] = 795; // 'state 503' -> { -> reduce (target=141, len=1)
actionsTable[128809] = 795; // 'state 503' -> [ -> reduce (target=141, len=1)
actionsTable[128811] = 795; // 'state 503' -> async -> reduce (target=141, len=1)
actionsTable.fill(795, 128813, 128817); // 'state 503' -> static..set -> reduce (target=141, len=1)
actionsTable[128850] = 795; // 'state 503' -> accessibility_modifier -> reduce (target=141, len=1)
actionsTable[128857] = 795; // 'state 503' -> identifier -> reduce (target=141, len=1)
actionsTable[129029] = 795; // 'state 504' -> { -> reduce (target=141, len=1)
actionsTable[129042] = 795; // 'state 504' -> of -> reduce (target=141, len=1)
actionsTable[129056] = 795; // 'state 504' -> from -> reduce (target=141, len=1)
actionsTable[129060] = 795; // 'state 504' -> type -> reduce (target=141, len=1)
actionsTable[129065] = 795; // 'state 504' -> [ -> reduce (target=141, len=1)
actionsTable[129067] = 795; // 'state 504' -> async -> reduce (target=141, len=1)
actionsTable.fill(795, 129069, 129073); // 'state 504' -> static..set -> reduce (target=141, len=1)
actionsTable.fill(795, 129102, 129105); // 'state 504' -> private_property_identifier..string -> reduce (target=141, len=1)
actionsTable[129106] = 795; // 'state 504' -> accessibility_modifier -> reduce (target=141, len=1)
actionsTable[129113] = 795; // 'state 504' -> identifier -> reduce (target=141, len=1)
actionsTable.fill(1821, 129280, 129289); // 'state 505' -> true..( -> reduce (target=142, len=3)
actionsTable.fill(1821, 129290, 129299); // 'state 505' -> else..of -> reduce (target=142, len=3)
actionsTable[129299] = 1955; // 'state 505' -> in -> reduce (target=209, len=3)
actionsTable.fill(1821, 129300, 129303); // 'state 505' -> return..try -> reduce (target=142, len=3)
actionsTable.fill(1821, 129305, 129307); // 'state 505' -> switch..case -> reduce (target=142, len=3)
actionsTable.fill(1821, 129308, 129313); // 'state 505' -> default..from -> reduce (target=142, len=3)
actionsTable.fill(1955, 129314, 129316); // 'state 505' -> *..as -> reduce (target=209, len=3)
actionsTable.fill(1821, 129316, 129318); // 'state 505' -> type..export -> reduce (target=142, len=3)
actionsTable[129321] = 1821; // 'state 505' -> [ -> reduce (target=142, len=3)
actionsTable.fill(1821, 129323, 129325); // 'state 505' -> async..function -> reduce (target=142, len=3)
actionsTable.fill(1821, 129327, 129330); // 'state 505' -> get..class -> reduce (target=142, len=3)
actionsTable[129332] = 1821; // 'state 505' -> interface -> reduce (target=142, len=3)
actionsTable[129334] = 1821; // 'state 505' -> < -> reduce (target=142, len=3)
actionsTable.fill(1955, 129335, 129338); // 'state 505' -> >..& -> reduce (target=209, len=3)
actionsTable.fill(1821, 129339, 129341); // 'state 505' -> void..typeof -> reduce (target=142, len=3)
actionsTable[129342] = 1821; // 'state 505' -> new -> reduce (target=142, len=3)
actionsTable.fill(1955, 129343, 129349); // 'state 505' -> ?..instanceof -> reduce (target=209, len=3)
actionsTable.fill(1821, 129349, 129351); // 'state 505' -> +..- -> reduce (target=142, len=3)
actionsTable[129351] = 1955; // 'state 505' -> ** -> reduce (target=209, len=3)
actionsTable.fill(1821, 129352, 129356); // 'state 505' -> !..await -> reduce (target=142, len=3)
actionsTable.fill(1955, 129356, 129358); // 'state 505' -> ?.... -> reduce (target=209, len=3)
actionsTable.fill(1821, 129359, 129362); // 'state 505' -> number..template_string -> reduce (target=142, len=3)
actionsTable.fill(1955, 129364, 129368); // 'state 505' -> equality_operator..multiplicative_operator -> reduce (target=209, len=3)
actionsTable.fill(1821, 129368, 129372); // 'state 505' -> update_operator..@par-gen.EOF -> reduce (target=142, len=3)
actionsTable.fill(1955, 129536, 129559); // 'state 506' -> true..try -> reduce (target=209, len=3)
actionsTable.fill(1955, 129561, 129574); // 'state 506' -> switch..export -> reduce (target=209, len=3)
actionsTable.fill(1955, 129577, 129586); // 'state 506' -> [..class -> reduce (target=209, len=3)
actionsTable.fill(1955, 129587, 129589); // 'state 506' -> implements..interface -> reduce (target=209, len=3)
actionsTable.fill(1955, 129590, 129594); // 'state 506' -> <..& -> reduce (target=209, len=3)
actionsTable.fill(1955, 129595, 129597); // 'state 506' -> void..typeof -> reduce (target=209, len=3)
actionsTable.fill(1955, 129598, 129619); // 'state 506' -> new..accessibility_modifier -> reduce (target=209, len=3)
actionsTable.fill(1955, 129620, 129628); // 'state 506' -> equality_operator..@par-gen.EOF -> reduce (target=209, len=3)
actionsTable.fill(1319, 129792, 129815); // 'state 507' -> true..try -> reduce (target=147, len=2)
actionsTable.fill(1319, 129817, 129830); // 'state 507' -> switch..export -> reduce (target=147, len=2)
actionsTable.fill(1319, 129833, 129842); // 'state 507' -> [..class -> reduce (target=147, len=2)
actionsTable.fill(1319, 129843, 129845); // 'state 507' -> implements..interface -> reduce (target=147, len=2)
actionsTable.fill(1319, 129846, 129850); // 'state 507' -> <..& -> reduce (target=147, len=2)
actionsTable.fill(1319, 129851, 129853); // 'state 507' -> void..typeof -> reduce (target=147, len=2)
actionsTable.fill(1319, 129854, 129875); // 'state 507' -> new..accessibility_modifier -> reduce (target=147, len=2)
actionsTable.fill(1319, 129876, 129884); // 'state 507' -> equality_operator..@par-gen.EOF -> reduce (target=147, len=2)
actionsTable[130054] = 805; // 'state 508' -> } -> reduce (target=146, len=1)
actionsTable[130061] = 805; // 'state 508' -> ; -> reduce (target=146, len=1)
actionsTable[130066] = 805; // 'state 508' -> of -> reduce (target=146, len=1)
actionsTable[130080] = 805; // 'state 508' -> from -> reduce (target=146, len=1)
actionsTable[130084] = 805; // 'state 508' -> type -> reduce (target=146, len=1)
actionsTable[130089] = 805; // 'state 508' -> [ -> reduce (target=146, len=1)
actionsTable[130091] = 805; // 'state 508' -> async -> reduce (target=146, len=1)
actionsTable.fill(805, 130093, 130097); // 'state 508' -> static..set -> reduce (target=146, len=1)
actionsTable.fill(805, 130126, 130129); // 'state 508' -> private_property_identifier..string -> reduce (target=146, len=1)
actionsTable[130130] = 805; // 'state 508' -> accessibility_modifier -> reduce (target=146, len=1)
actionsTable[130137] = 805; // 'state 508' -> identifier -> reduce (target=146, len=1)
actionsTable[130310] = 867; // 'state 509' -> } -> reduce (target=177, len=1)
actionsTable[130312] = 867; // 'state 509' -> ( -> reduce (target=177, len=1)
actionsTable[130317] = 867; // 'state 509' -> ; -> reduce (target=177, len=1)
actionsTable[130322] = 795; // 'state 509' -> of -> reduce (target=141, len=1)
actionsTable[130331] = 867; // 'state 509' -> : -> reduce (target=177, len=1)
actionsTable[130336] = 795; // 'state 509' -> from -> reduce (target=141, len=1)
actionsTable[130340] = 795; // 'state 509' -> type -> reduce (target=141, len=1)
actionsTable[130343] = 867; // 'state 509' -> = -> reduce (target=177, len=1)
actionsTable[130345] = 795; // 'state 509' -> [ -> reduce (target=141, len=1)
actionsTable[130347] = 795; // 'state 509' -> async -> reduce (target=141, len=1)
actionsTable.fill(795, 130349, 130353); // 'state 509' -> static..set -> reduce (target=141, len=1)
actionsTable.fill(867, 130357, 130359); // 'state 509' -> ?:..< -> reduce (target=177, len=1)
actionsTable.fill(795, 130382, 130385); // 'state 509' -> private_property_identifier..string -> reduce (target=141, len=1)
actionsTable[130386] = 795; // 'state 509' -> accessibility_modifier -> reduce (target=141, len=1)
actionsTable[130393] = 795; // 'state 509' -> identifier -> reduce (target=141, len=1)
actionsTable[130565] = 795; // 'state 510' -> { -> reduce (target=141, len=1)
actionsTable[130566] = 867; // 'state 510' -> } -> reduce (target=177, len=1)
actionsTable.fill(867, 130568, 130570); // 'state 510' -> (..) -> reduce (target=177, len=1)
actionsTable[130573] = 867; // 'state 510' -> ; -> reduce (target=177, len=1)
actionsTable[130578] = 795; // 'state 510' -> of -> reduce (target=141, len=1)
actionsTable[130579] = 867; // 'state 510' -> in -> reduce (target=177, len=1)
actionsTable[130587] = 867; // 'state 510' -> : -> reduce (target=177, len=1)
actionsTable[130592] = 795; // 'state 510' -> from -> reduce (target=141, len=1)
actionsTable.fill(867, 130593, 130596); // 'state 510' -> ,..as -> reduce (target=177, len=1)
actionsTable[130596] = 795; // 'state 510' -> type -> reduce (target=141, len=1)
actionsTable[130599] = 867; // 'state 510' -> = -> reduce (target=177, len=1)
actionsTable[130601] = 795; // 'state 510' -> [ -> reduce (target=141, len=1)
actionsTable[130603] = 795; // 'state 510' -> async -> reduce (target=141, len=1)
actionsTable.fill(795, 130605, 130609); // 'state 510' -> static..set -> reduce (target=141, len=1)
actionsTable.fill(867, 130613, 130618); // 'state 510' -> ?:..& -> reduce (target=177, len=1)
actionsTable.fill(867, 130623, 130632); // 'state 510' -> ?..** -> reduce (target=177, len=1)
actionsTable.fill(867, 130636, 130638); // 'state 510' -> ?.... -> reduce (target=177, len=1)
actionsTable.fill(795, 130638, 130641); // 'state 510' -> private_property_identifier..string -> reduce (target=141, len=1)
actionsTable[130642] = 795; // 'state 510' -> accessibility_modifier -> reduce (target=141, len=1)
actionsTable.fill(867, 130643, 130649); // 'state 510' -> compound_assignment_operator..update_operator -> reduce (target=177, len=1)
actionsTable[130649] = 795; // 'state 510' -> identifier -> reduce (target=141, len=1)
actionsTable.fill(1837, 130816, 130825); // 'state 511' -> true..( -> reduce (target=150, len=3)
actionsTable.fill(1837, 130826, 130829); // 'state 511' -> else..do -> reduce (target=150, len=3)
actionsTable.fill(1837, 130830, 130835); // 'state 511' -> for..of -> reduce (target=150, len=3)
actionsTable.fill(1837, 130836, 130839); // 'state 511' -> return..try -> reduce (target=150, len=3)
actionsTable.fill(1837, 130841, 130843); // 'state 511' -> switch..case -> reduce (target=150, len=3)
actionsTable.fill(1837, 130844, 130849); // 'state 511' -> default..from -> reduce (target=150, len=3)
actionsTable.fill(1837, 130852, 130854); // 'state 511' -> type..export -> reduce (target=150, len=3)
actionsTable[130857] = 1837; // 'state 511' -> [ -> reduce (target=150, len=3)
actionsTable.fill(1837, 130859, 130861); // 'state 511' -> async..function -> reduce (target=150, len=3)
actionsTable.fill(1837, 130863, 130866); // 'state 511' -> get..class -> reduce (target=150, len=3)
actionsTable[130868] = 1837; // 'state 511' -> interface -> reduce (target=150, len=3)
actionsTable[130870] = 1837; // 'state 511' -> < -> reduce (target=150, len=3)
actionsTable.fill(1837, 130875, 130877); // 'state 511' -> void..typeof -> reduce (target=150, len=3)
actionsTable[130878] = 1837; // 'state 511' -> new -> reduce (target=150, len=3)
actionsTable.fill(1837, 130885, 130887); // 'state 511' -> +..- -> reduce (target=150, len=3)
actionsTable.fill(1837, 130888, 130892); // 'state 511' -> !..await -> reduce (target=150, len=3)
actionsTable.fill(1837, 130895, 130898); // 'state 511' -> number..template_string -> reduce (target=150, len=3)
actionsTable.fill(1837, 130904, 130908); // 'state 511' -> update_operator..@par-gen.EOF -> reduce (target=150, len=3)
actionsTable[131111] = 522; // 'state 512' -> = -> shift (target=261, len=0)
actionsTable.fill(1905, 131328, 131351); // 'state 513' -> true..try -> reduce (target=184, len=3)
actionsTable.fill(1905, 131353, 131366); // 'state 513' -> switch..export -> reduce (target=184, len=3)
actionsTable.fill(1905, 131369, 131378); // 'state 513' -> [..class -> reduce (target=184, len=3)
actionsTable.fill(1905, 131379, 131381); // 'state 513' -> implements..interface -> reduce (target=184, len=3)
actionsTable.fill(1905, 131382, 131386); // 'state 513' -> <..& -> reduce (target=184, len=3)
actionsTable.fill(1905, 131387, 131389); // 'state 513' -> void..typeof -> reduce (target=184, len=3)
actionsTable.fill(1905, 131390, 131411); // 'state 513' -> new..accessibility_modifier -> reduce (target=184, len=3)
actionsTable.fill(1905, 131412, 131420); // 'state 513' -> equality_operator..@par-gen.EOF -> reduce (target=184, len=3)
actionsTable.fill(1331, 131584, 131603); // 'state 514' -> true..of -> reduce (target=153, len=2)
actionsTable.fill(1331, 131604, 131607); // 'state 514' -> return..try -> reduce (target=153, len=2)
actionsTable.fill(1331, 131609, 131611); // 'state 514' -> switch..case -> reduce (target=153, len=2)
actionsTable.fill(1331, 131612, 131618); // 'state 514' -> default.., -> reduce (target=153, len=2)
actionsTable.fill(1331, 131620, 131622); // 'state 514' -> type..export -> reduce (target=153, len=2)
actionsTable[131623] = 1331; // 'state 514' -> = -> reduce (target=153, len=2)
actionsTable[131625] = 1331; // 'state 514' -> [ -> reduce (target=153, len=2)
actionsTable.fill(1331, 131627, 131634); // 'state 514' -> async..class -> reduce (target=153, len=2)
actionsTable[131636] = 1331; // 'state 514' -> interface -> reduce (target=153, len=2)
actionsTable[131638] = 1331; // 'state 514' -> < -> reduce (target=153, len=2)
actionsTable[131640] = 506; // 'state 514' -> | -> shift (target=253, len=0)
actionsTable[131641] = 508; // 'state 514' -> & -> shift (target=254, len=0)
actionsTable.fill(1331, 131642, 131645); // 'state 514' -> =>..typeof -> reduce (target=153, len=2)
actionsTable[131646] = 1331; // 'state 514' -> new -> reduce (target=153, len=2)
actionsTable.fill(1331, 131653, 131655); // 'state 514' -> +..- -> reduce (target=153, len=2)
actionsTable.fill(1331, 131656, 131660); // 'state 514' -> !..await -> reduce (target=153, len=2)
actionsTable.fill(1331, 131662, 131667); // 'state 514' -> private_property_identifier..accessibility_modifier -> reduce (target=153, len=2)
actionsTable.fill(1331, 131672, 131676); // 'state 514' -> update_operator..@par-gen.EOF -> reduce (target=153, len=2)
actionsTable.fill(1897, 131840, 131863); // 'state 515' -> true..try -> reduce (target=180, len=3)
actionsTable.fill(1897, 131865, 131878); // 'state 515' -> switch..export -> reduce (target=180, len=3)
actionsTable.fill(1897, 131881, 131890); // 'state 515' -> [..class -> reduce (target=180, len=3)
actionsTable.fill(1897, 131891, 131901); // 'state 515' -> implements..typeof -> reduce (target=180, len=3)
actionsTable.fill(1897, 131902, 131923); // 'state 515' -> new..accessibility_modifier -> reduce (target=180, len=3)
actionsTable.fill(1897, 131924, 131932); // 'state 515' -> equality_operator..@par-gen.EOF -> reduce (target=180, len=3)
actionsTable[132105] = 1168; // 'state 516' -> ) -> shift (target=584, len=0)
actionsTable[132129] = 524; // 'state 516' -> , -> shift (target=262, len=0)
actionsTable[132361] = 1305; // 'state 517' -> ) -> reduce (target=140, len=2)
actionsTable[132385] = 1305; // 'state 517' -> , -> reduce (target=140, len=2)
actionsTable[132391] = 526; // 'state 517' -> = -> shift (target=263, len=0)
actionsTable[132635] = 1815; // 'state 518' -> : -> reduce (target=139, len=3)
actionsTable[132661] = 1815; // 'state 518' -> ?: -> reduce (target=139, len=3)
actionsTable[132666] = 1815; // 'state 518' -> => -> reduce (target=139, len=3)
actionsTable[132873] = 1174; // 'state 519' -> ) -> shift (target=587, len=0)
actionsTable[132897] = 528; // 'state 519' -> , -> shift (target=264, len=0)
actionsTable.fill(1919, 133120, 133143); // 'state 520' -> true..try -> reduce (target=191, len=3)
actionsTable.fill(1919, 133145, 133158); // 'state 520' -> switch..export -> reduce (target=191, len=3)
actionsTable.fill(1919, 133161, 133170); // 'state 520' -> [..class -> reduce (target=191, len=3)
actionsTable.fill(1919, 133171, 133173); // 'state 520' -> implements..interface -> reduce (target=191, len=3)
actionsTable.fill(1919, 133174, 133178); // 'state 520' -> <..& -> reduce (target=191, len=3)
actionsTable.fill(1919, 133179, 133181); // 'state 520' -> void..typeof -> reduce (target=191, len=3)
actionsTable.fill(1919, 133182, 133203); // 'state 520' -> new..accessibility_modifier -> reduce (target=191, len=3)
actionsTable.fill(1919, 133204, 133212); // 'state 520' -> equality_operator..@par-gen.EOF -> reduce (target=191, len=3)
actionsTable.fill(1935, 133376, 133399); // 'state 521' -> true..try -> reduce (target=199, len=3)
actionsTable.fill(1935, 133401, 133414); // 'state 521' -> switch..export -> reduce (target=199, len=3)
actionsTable[133415] = 1935; // 'state 521' -> = -> reduce (target=199, len=3)
actionsTable.fill(1935, 133417, 133426); // 'state 521' -> [..class -> reduce (target=199, len=3)
actionsTable.fill(1935, 133427, 133434); // 'state 521' -> implements..& -> reduce (target=199, len=3)
actionsTable.fill(1935, 133435, 133437); // 'state 521' -> void..typeof -> reduce (target=199, len=3)
actionsTable.fill(1935, 133438, 133468); // 'state 521' -> new..@par-gen.EOF -> reduce (target=199, len=3)
actionsTable[133665] = 532; // 'state 522' -> , -> shift (target=266, len=0)
actionsTable[133674] = 1180; // 'state 522' -> ] -> shift (target=590, len=0)
actionsTable[133893] = 1847; // 'state 523' -> { -> reduce (target=155, len=3)
actionsTable[133896] = 1847; // 'state 523' -> ( -> reduce (target=155, len=3)
actionsTable[133927] = 1847; // 'state 523' -> = -> reduce (target=155, len=3)
actionsTable.fill(1847, 133938, 133940); // 'state 523' -> extends..implements -> reduce (target=155, len=3)
actionsTable[134177] = 534; // 'state 524' -> , -> shift (target=267, len=0)
actionsTable[134199] = 1186; // 'state 524' -> > -> shift (target=593, len=0)
actionsTable[134406] = 1951; // 'state 525' -> } -> reduce (target=207, len=3)
actionsTable[134408] = 1951; // 'state 525' -> ( -> reduce (target=207, len=3)
actionsTable[134413] = 1951; // 'state 525' -> ; -> reduce (target=207, len=3)
actionsTable[134418] = 1951; // 'state 525' -> of -> reduce (target=207, len=3)
actionsTable[134427] = 1951; // 'state 525' -> : -> reduce (target=207, len=3)
actionsTable[134432] = 1951; // 'state 525' -> from -> reduce (target=207, len=3)
actionsTable[134436] = 1951; // 'state 525' -> type -> reduce (target=207, len=3)
actionsTable[134439] = 1951; // 'state 525' -> = -> reduce (target=207, len=3)
actionsTable[134441] = 1951; // 'state 525' -> [ -> reduce (target=207, len=3)
actionsTable[134443] = 1951; // 'state 525' -> async -> reduce (target=207, len=3)
actionsTable.fill(1951, 134445, 134449); // 'state 525' -> static..set -> reduce (target=207, len=3)
actionsTable.fill(1951, 134453, 134455); // 'state 525' -> ?:..< -> reduce (target=207, len=3)
actionsTable.fill(1951, 134478, 134481); // 'state 525' -> private_property_identifier..string -> reduce (target=207, len=3)
actionsTable[134482] = 1951; // 'state 525' -> accessibility_modifier -> reduce (target=207, len=3)
actionsTable[134489] = 1951; // 'state 525' -> identifier -> reduce (target=207, len=3)
actionsTable.fill(2451, 134656, 134679); // 'state 526' -> true..try -> reduce (target=201, len=4)
actionsTable.fill(2451, 134681, 134694); // 'state 526' -> switch..export -> reduce (target=201, len=4)
actionsTable[134695] = 2451; // 'state 526' -> = -> reduce (target=201, len=4)
actionsTable.fill(2451, 134697, 134706); // 'state 526' -> [..class -> reduce (target=201, len=4)
actionsTable.fill(2451, 134707, 134714); // 'state 526' -> implements..& -> reduce (target=201, len=4)
actionsTable.fill(2451, 134715, 134717); // 'state 526' -> void..typeof -> reduce (target=201, len=4)
actionsTable.fill(2451, 134718, 134748); // 'state 526' -> new..@par-gen.EOF -> reduce (target=201, len=4)
actionsTable[134918] = 1425; // 'state 527' -> } -> reduce (target=200, len=2)
actionsTable[134945] = 1425; // 'state 527' -> , -> reduce (target=200, len=2)
actionsTable[135174] = 1943; // 'state 528' -> } -> reduce (target=203, len=3)
actionsTable[135201] = 1943; // 'state 528' -> , -> reduce (target=203, len=3)
actionsTable.fill(2259, 135424, 135433); // 'state 529' -> true..( -> reduce (target=105, len=4)
actionsTable.fill(2259, 135434, 135437); // 'state 529' -> else..do -> reduce (target=105, len=4)
actionsTable.fill(2259, 135438, 135443); // 'state 529' -> for..of -> reduce (target=105, len=4)
actionsTable.fill(2259, 135444, 135447); // 'state 529' -> return..try -> reduce (target=105, len=4)
actionsTable.fill(2259, 135449, 135451); // 'state 529' -> switch..case -> reduce (target=105, len=4)
actionsTable.fill(2259, 135452, 135457); // 'state 529' -> default..from -> reduce (target=105, len=4)
actionsTable.fill(2259, 135460, 135462); // 'state 529' -> type..export -> reduce (target=105, len=4)
actionsTable[135465] = 2259; // 'state 529' -> [ -> reduce (target=105, len=4)
actionsTable.fill(2259, 135467, 135469); // 'state 529' -> async..function -> reduce (target=105, len=4)
actionsTable.fill(2259, 135471, 135474); // 'state 529' -> get..class -> reduce (target=105, len=4)
actionsTable[135476] = 2259; // 'state 529' -> interface -> reduce (target=105, len=4)
actionsTable[135478] = 2259; // 'state 529' -> < -> reduce (target=105, len=4)
actionsTable.fill(2259, 135483, 135485); // 'state 529' -> void..typeof -> reduce (target=105, len=4)
actionsTable[135486] = 2259; // 'state 529' -> new -> reduce (target=105, len=4)
actionsTable.fill(2259, 135493, 135495); // 'state 529' -> +..- -> reduce (target=105, len=4)
actionsTable.fill(2259, 135496, 135500); // 'state 529' -> !..await -> reduce (target=105, len=4)
actionsTable.fill(2259, 135503, 135506); // 'state 529' -> number..template_string -> reduce (target=105, len=4)
actionsTable.fill(2259, 135512, 135516); // 'state 529' -> update_operator..@par-gen.EOF -> reduce (target=105, len=4)
actionsTable.fill(1237, 135680, 135689); // 'state 530' -> true..( -> reduce (target=106, len=2)
actionsTable.fill(1237, 135690, 135693); // 'state 530' -> else..do -> reduce (target=106, len=2)
actionsTable.fill(1237, 135694, 135699); // 'state 530' -> for..of -> reduce (target=106, len=2)
actionsTable.fill(1237, 135700, 135703); // 'state 530' -> return..try -> reduce (target=106, len=2)
actionsTable.fill(1237, 135704, 135707); // 'state 530' -> finally..case -> reduce (target=106, len=2)
actionsTable.fill(1237, 135708, 135713); // 'state 530' -> default..from -> reduce (target=106, len=2)
actionsTable.fill(1237, 135716, 135718); // 'state 530' -> type..export -> reduce (target=106, len=2)
actionsTable[135721] = 1237; // 'state 530' -> [ -> reduce (target=106, len=2)
actionsTable.fill(1237, 135723, 135725); // 'state 530' -> async..function -> reduce (target=106, len=2)
actionsTable.fill(1237, 135727, 135730); // 'state 530' -> get..class -> reduce (target=106, len=2)
actionsTable[135732] = 1237; // 'state 530' -> interface -> reduce (target=106, len=2)
actionsTable[135734] = 1237; // 'state 530' -> < -> reduce (target=106, len=2)
actionsTable.fill(1237, 135739, 135741); // 'state 530' -> void..typeof -> reduce (target=106, len=2)
actionsTable[135742] = 1237; // 'state 530' -> new -> reduce (target=106, len=2)
actionsTable.fill(1237, 135749, 135751); // 'state 530' -> +..- -> reduce (target=106, len=2)
actionsTable.fill(1237, 135752, 135756); // 'state 530' -> !..await -> reduce (target=106, len=2)
actionsTable.fill(1237, 135759, 135762); // 'state 530' -> number..template_string -> reduce (target=106, len=2)
actionsTable.fill(1237, 135768, 135772); // 'state 530' -> update_operator..@par-gen.EOF -> reduce (target=106, len=2)
actionsTable.fill(1239, 135936, 135945); // 'state 531' -> true..( -> reduce (target=107, len=2)
actionsTable.fill(1239, 135946, 135949); // 'state 531' -> else..do -> reduce (target=107, len=2)
actionsTable.fill(1239, 135950, 135955); // 'state 531' -> for..of -> reduce (target=107, len=2)
actionsTable.fill(1239, 135956, 135959); // 'state 531' -> return..try -> reduce (target=107, len=2)
actionsTable.fill(1239, 135961, 135963); // 'state 531' -> switch..case -> reduce (target=107, len=2)
actionsTable.fill(1239, 135964, 135969); // 'state 531' -> default..from -> reduce (target=107, len=2)
actionsTable.fill(1239, 135972, 135974); // 'state 531' -> type..export -> reduce (target=107, len=2)
actionsTable[135977] = 1239; // 'state 531' -> [ -> reduce (target=107, len=2)
actionsTable.fill(1239, 135979, 135981); // 'state 531' -> async..function -> reduce (target=107, len=2)
actionsTable.fill(1239, 135983, 135986); // 'state 531' -> get..class -> reduce (target=107, len=2)
actionsTable[135988] = 1239; // 'state 531' -> interface -> reduce (target=107, len=2)
actionsTable[135990] = 1239; // 'state 531' -> < -> reduce (target=107, len=2)
actionsTable.fill(1239, 135995, 135997); // 'state 531' -> void..typeof -> reduce (target=107, len=2)
actionsTable[135998] = 1239; // 'state 531' -> new -> reduce (target=107, len=2)
actionsTable.fill(1239, 136005, 136007); // 'state 531' -> +..- -> reduce (target=107, len=2)
actionsTable.fill(1239, 136008, 136012); // 'state 531' -> !..await -> reduce (target=107, len=2)
actionsTable.fill(1239, 136015, 136018); // 'state 531' -> number..template_string -> reduce (target=107, len=2)
actionsTable.fill(1239, 136024, 136028); // 'state 531' -> update_operator..@par-gen.EOF -> reduce (target=107, len=2)
actionsTable.fill(1343, 136192, 136215); // 'state 532' -> true..try -> reduce (target=159, len=2)
actionsTable.fill(1343, 136217, 136230); // 'state 532' -> switch..export -> reduce (target=159, len=2)
actionsTable[136231] = 1343; // 'state 532' -> = -> reduce (target=159, len=2)
actionsTable.fill(1343, 136233, 136242); // 'state 532' -> [..class -> reduce (target=159, len=2)
actionsTable.fill(1343, 136243, 136245); // 'state 532' -> implements..interface -> reduce (target=159, len=2)
actionsTable.fill(1343, 136246, 136249); // 'state 532' -> <..| -> reduce (target=159, len=2)
actionsTable[136249] = 508; // 'state 532' -> & -> shift (target=254, len=0)
actionsTable.fill(1343, 136250, 136253); // 'state 532' -> =>..typeof -> reduce (target=159, len=2)
actionsTable.fill(1343, 136254, 136275); // 'state 532' -> new..accessibility_modifier -> reduce (target=159, len=2)
actionsTable.fill(1343, 136276, 136284); // 'state 532' -> equality_operator..@par-gen.EOF -> reduce (target=159, len=2)
actionsTable[136506] = 570; // 'state 533' -> => -> shift (target=285, len=0)
actionsTable[136713] = 1222; // 'state 534' -> ) -> shift (target=611, len=0)
actionsTable[136760] = 506; // 'state 534' -> | -> shift (target=253, len=0)
actionsTable[136761] = 508; // 'state 534' -> & -> shift (target=254, len=0)
actionsTable.fill(1351, 136960, 136983); // 'state 535' -> true..try -> reduce (target=163, len=2)
actionsTable.fill(1351, 136985, 136998); // 'state 535' -> switch..export -> reduce (target=163, len=2)
actionsTable[136999] = 1351; // 'state 535' -> = -> reduce (target=163, len=2)
actionsTable.fill(1351, 137001, 137010); // 'state 535' -> [..class -> reduce (target=163, len=2)
actionsTable.fill(1351, 137011, 137013); // 'state 535' -> implements..interface -> reduce (target=163, len=2)
actionsTable.fill(1351, 137014, 137021); // 'state 535' -> <..typeof -> reduce (target=163, len=2)
actionsTable.fill(1351, 137022, 137043); // 'state 535' -> new..accessibility_modifier -> reduce (target=163, len=2)
actionsTable.fill(1351, 137044, 137052); // 'state 535' -> equality_operator..@par-gen.EOF -> reduce (target=163, len=2)
actionsTable.fill(1357, 137216, 137239); // 'state 536' -> true..try -> reduce (target=166, len=2)
actionsTable.fill(1357, 137241, 137254); // 'state 536' -> switch..export -> reduce (target=166, len=2)
actionsTable[137255] = 1357; // 'state 536' -> = -> reduce (target=166, len=2)
actionsTable.fill(1357, 137257, 137266); // 'state 536' -> [..class -> reduce (target=166, len=2)
actionsTable.fill(1357, 137267, 137269); // 'state 536' -> implements..interface -> reduce (target=166, len=2)
actionsTable.fill(1357, 137270, 137277); // 'state 536' -> <..typeof -> reduce (target=166, len=2)
actionsTable.fill(1357, 137278, 137299); // 'state 536' -> new..accessibility_modifier -> reduce (target=166, len=2)
actionsTable.fill(1357, 137300, 137308); // 'state 536' -> equality_operator..@par-gen.EOF -> reduce (target=166, len=2)
actionsTable.fill(1367, 137472, 137495); // 'state 537' -> true..try -> reduce (target=171, len=2)
actionsTable.fill(1367, 137497, 137510); // 'state 537' -> switch..export -> reduce (target=171, len=2)
actionsTable[137511] = 1367; // 'state 537' -> = -> reduce (target=171, len=2)
actionsTable.fill(1367, 137513, 137522); // 'state 537' -> [..class -> reduce (target=171, len=2)
actionsTable.fill(1367, 137523, 137525); // 'state 537' -> implements..interface -> reduce (target=171, len=2)
actionsTable.fill(1367, 137526, 137533); // 'state 537' -> <..typeof -> reduce (target=171, len=2)
actionsTable.fill(1367, 137534, 137555); // 'state 537' -> new..accessibility_modifier -> reduce (target=171, len=2)
actionsTable.fill(1367, 137556, 137564); // 'state 537' -> equality_operator..@par-gen.EOF -> reduce (target=171, len=2)
actionsTable[137734] = 853; // 'state 538' -> } -> reduce (target=170, len=1)
actionsTable[137741] = 1236; // 'state 538' -> ; -> shift (target=618, len=0)
actionsTable[137746] = 853; // 'state 538' -> of -> reduce (target=170, len=1)
actionsTable[137760] = 853; // 'state 538' -> from -> reduce (target=170, len=1)
actionsTable[137761] = 1236; // 'state 538' -> , -> shift (target=618, len=0)
actionsTable[137764] = 853; // 'state 538' -> type -> reduce (target=170, len=1)
actionsTable[137769] = 853; // 'state 538' -> [ -> reduce (target=170, len=1)
actionsTable[137771] = 853; // 'state 538' -> async -> reduce (target=170, len=1)
actionsTable.fill(853, 137774, 137777); // 'state 538' -> readonly..set -> reduce (target=170, len=1)
actionsTable[137790] = 853; // 'state 538' -> new -> reduce (target=170, len=1)
actionsTable.fill(853, 137807, 137809); // 'state 538' -> number..string -> reduce (target=170, len=1)
actionsTable[137817] = 853; // 'state 538' -> identifier -> reduce (target=170, len=1)
actionsTable.fill(1361, 137984, 138007); // 'state 539' -> true..try -> reduce (target=168, len=2)
actionsTable.fill(1361, 138009, 138022); // 'state 539' -> switch..export -> reduce (target=168, len=2)
actionsTable[138023] = 1361; // 'state 539' -> = -> reduce (target=168, len=2)
actionsTable.fill(1361, 138025, 138034); // 'state 539' -> [..class -> reduce (target=168, len=2)
actionsTable.fill(1361, 138035, 138037); // 'state 539' -> implements..interface -> reduce (target=168, len=2)
actionsTable.fill(1361, 138038, 138045); // 'state 539' -> <..typeof -> reduce (target=168, len=2)
actionsTable.fill(1361, 138046, 138067); // 'state 539' -> new..accessibility_modifier -> reduce (target=168, len=2)
actionsTable.fill(1361, 138068, 138076); // 'state 539' -> equality_operator..@par-gen.EOF -> reduce (target=168, len=2)
actionsTable.fill(1927, 138240, 138263); // 'state 540' -> true..try -> reduce (target=195, len=3)
actionsTable.fill(1927, 138265, 138278); // 'state 540' -> switch..export -> reduce (target=195, len=3)
actionsTable.fill(1927, 138281, 138290); // 'state 540' -> [..class -> reduce (target=195, len=3)
actionsTable.fill(1927, 138291, 138293); // 'state 540' -> implements..interface -> reduce (target=195, len=3)
actionsTable.fill(1927, 138294, 138298); // 'state 540' -> <..& -> reduce (target=195, len=3)
actionsTable.fill(1927, 138299, 138301); // 'state 540' -> void..typeof -> reduce (target=195, len=3)
actionsTable.fill(1927, 138302, 138323); // 'state 540' -> new..accessibility_modifier -> reduce (target=195, len=3)
actionsTable.fill(1927, 138324, 138332); // 'state 540' -> equality_operator..@par-gen.EOF -> reduce (target=195, len=3)
actionsTable[138505] = 1244; // 'state 541' -> ) -> shift (target=622, len=0)
actionsTable[138529] = 602; // 'state 541' -> , -> shift (target=301, len=0)
actionsTable.fill(2437, 138752, 138775); // 'state 542' -> true..try -> reduce (target=194, len=4)
actionsTable.fill(2437, 138777, 138790); // 'state 542' -> switch..export -> reduce (target=194, len=4)
actionsTable[138791] = 2437; // 'state 542' -> = -> reduce (target=194, len=4)
actionsTable.fill(2437, 138793, 138802); // 'state 542' -> [..class -> reduce (target=194, len=4)
actionsTable.fill(2437, 138803, 138805); // 'state 542' -> implements..interface -> reduce (target=194, len=4)
actionsTable.fill(2437, 138806, 138810); // 'state 542' -> <..& -> reduce (target=194, len=4)
actionsTable.fill(2437, 138811, 138813); // 'state 542' -> void..typeof -> reduce (target=194, len=4)
actionsTable.fill(2437, 138814, 138844); // 'state 542' -> new..@par-gen.EOF -> reduce (target=194, len=4)
actionsTable.fill(2283, 139008, 139017); // 'state 543' -> true..( -> reduce (target=117, len=4)
actionsTable.fill(2283, 139018, 139021); // 'state 543' -> else..do -> reduce (target=117, len=4)
actionsTable[139021] = 1246; // 'state 543' -> ; -> shift (target=623, len=0)
actionsTable.fill(2283, 139022, 139027); // 'state 543' -> for..of -> reduce (target=117, len=4)
actionsTable.fill(2283, 139028, 139031); // 'state 543' -> return..try -> reduce (target=117, len=4)
actionsTable.fill(2283, 139033, 139035); // 'state 543' -> switch..case -> reduce (target=117, len=4)
actionsTable.fill(2283, 139036, 139041); // 'state 543' -> default..from -> reduce (target=117, len=4)
actionsTable.fill(2283, 139044, 139046); // 'state 543' -> type..export -> reduce (target=117, len=4)
actionsTable[139049] = 2283; // 'state 543' -> [ -> reduce (target=117, len=4)
actionsTable.fill(2283, 139051, 139053); // 'state 543' -> async..function -> reduce (target=117, len=4)
actionsTable.fill(2283, 139055, 139058); // 'state 543' -> get..class -> reduce (target=117, len=4)
actionsTable[139060] = 2283; // 'state 543' -> interface -> reduce (target=117, len=4)
actionsTable[139062] = 2283; // 'state 543' -> < -> reduce (target=117, len=4)
actionsTable.fill(2283, 139067, 139069); // 'state 543' -> void..typeof -> reduce (target=117, len=4)
actionsTable[139070] = 2283; // 'state 543' -> new -> reduce (target=117, len=4)
actionsTable.fill(2283, 139077, 139079); // 'state 543' -> +..- -> reduce (target=117, len=4)
actionsTable.fill(2283, 139080, 139084); // 'state 543' -> !..await -> reduce (target=117, len=4)
actionsTable.fill(2283, 139087, 139090); // 'state 543' -> number..template_string -> reduce (target=117, len=4)
actionsTable.fill(2283, 139096, 139100); // 'state 543' -> update_operator..@par-gen.EOF -> reduce (target=117, len=4)
actionsTable[139296] = 1773; // 'state 544' -> from -> reduce (target=118, len=3)
actionsTable.fill(1779, 139520, 139529); // 'state 545' -> true..( -> reduce (target=121, len=3)
actionsTable.fill(1779, 139530, 139539); // 'state 545' -> else..of -> reduce (target=121, len=3)
actionsTable.fill(1779, 139540, 139543); // 'state 545' -> return..try -> reduce (target=121, len=3)
actionsTable.fill(1779, 139545, 139547); // 'state 545' -> switch..case -> reduce (target=121, len=3)
actionsTable.fill(1779, 139548, 139553); // 'state 545' -> default..from -> reduce (target=121, len=3)
actionsTable.fill(1779, 139556, 139558); // 'state 545' -> type..export -> reduce (target=121, len=3)
actionsTable[139561] = 1779; // 'state 545' -> [ -> reduce (target=121, len=3)
actionsTable.fill(1779, 139563, 139565); // 'state 545' -> async..function -> reduce (target=121, len=3)
actionsTable.fill(1779, 139567, 139570); // 'state 545' -> get..class -> reduce (target=121, len=3)
actionsTable[139572] = 1779; // 'state 545' -> interface -> reduce (target=121, len=3)
actionsTable[139574] = 1779; // 'state 545' -> < -> reduce (target=121, len=3)
actionsTable.fill(1779, 139579, 139581); // 'state 545' -> void..typeof -> reduce (target=121, len=3)
actionsTable[139582] = 1779; // 'state 545' -> new -> reduce (target=121, len=3)
actionsTable.fill(1779, 139589, 139591); // 'state 545' -> +..- -> reduce (target=121, len=3)
actionsTable.fill(1779, 139592, 139596); // 'state 545' -> !..await -> reduce (target=121, len=3)
actionsTable.fill(1779, 139599, 139602); // 'state 545' -> number..template_string -> reduce (target=121, len=3)
actionsTable.fill(1779, 139608, 139612); // 'state 545' -> update_operator..@par-gen.EOF -> reduce (target=121, len=3)
actionsTable[139782] = 1248; // 'state 546' -> } -> shift (target=624, len=0)
actionsTable[139809] = 604; // 'state 546' -> , -> shift (target=302, len=0)
actionsTable[140038] = 1269; // 'state 547' -> } -> reduce (target=122, len=2)
actionsTable[140065] = 1269; // 'state 547' -> , -> reduce (target=122, len=2)
actionsTable[140067] = 1252; // 'state 547' -> as -> shift (target=626, len=0)
actionsTable[140377] = 1254; // 'state 548' -> identifier -> shift (target=627, len=0)
actionsTable[140576] = 1775; // 'state 549' -> from -> reduce (target=119, len=3)
actionsTable.fill(1821, 140800, 140809); // 'state 550' -> true..( -> reduce (target=142, len=3)
actionsTable.fill(1821, 140810, 140813); // 'state 550' -> else..do -> reduce (target=142, len=3)
actionsTable.fill(1821, 140814, 140819); // 'state 550' -> for..of -> reduce (target=142, len=3)
actionsTable.fill(1821, 140820, 140823); // 'state 550' -> return..try -> reduce (target=142, len=3)
actionsTable.fill(1821, 140825, 140827); // 'state 550' -> switch..case -> reduce (target=142, len=3)
actionsTable.fill(1821, 140828, 140833); // 'state 550' -> default..from -> reduce (target=142, len=3)
actionsTable.fill(1821, 140836, 140838); // 'state 550' -> type..export -> reduce (target=142, len=3)
actionsTable[140841] = 1821; // 'state 550' -> [ -> reduce (target=142, len=3)
actionsTable.fill(1821, 140843, 140845); // 'state 550' -> async..function -> reduce (target=142, len=3)
actionsTable.fill(1821, 140847, 140850); // 'state 550' -> get..class -> reduce (target=142, len=3)
actionsTable[140852] = 1821; // 'state 550' -> interface -> reduce (target=142, len=3)
actionsTable[140854] = 1821; // 'state 550' -> < -> reduce (target=142, len=3)
actionsTable.fill(1821, 140859, 140861); // 'state 550' -> void..typeof -> reduce (target=142, len=3)
actionsTable[140862] = 1821; // 'state 550' -> new -> reduce (target=142, len=3)
actionsTable.fill(1821, 140869, 140871); // 'state 550' -> +..- -> reduce (target=142, len=3)
actionsTable.fill(1821, 140872, 140876); // 'state 550' -> !..await -> reduce (target=142, len=3)
actionsTable.fill(1821, 140879, 140882); // 'state 550' -> number..template_string -> reduce (target=142, len=3)
actionsTable.fill(1821, 140888, 140892); // 'state 550' -> update_operator..@par-gen.EOF -> reduce (target=142, len=3)
actionsTable.fill(2295, 141056, 141065); // 'state 551' -> true..( -> reduce (target=123, len=4)
actionsTable.fill(2295, 141066, 141069); // 'state 551' -> else..do -> reduce (target=123, len=4)
actionsTable.fill(2295, 141070, 141075); // 'state 551' -> for..of -> reduce (target=123, len=4)
actionsTable.fill(2295, 141076, 141079); // 'state 551' -> return..try -> reduce (target=123, len=4)
actionsTable.fill(2295, 141081, 141083); // 'state 551' -> switch..case -> reduce (target=123, len=4)
actionsTable.fill(2295, 141084, 141089); // 'state 551' -> default..from -> reduce (target=123, len=4)
actionsTable.fill(2295, 141092, 141094); // 'state 551' -> type..export -> reduce (target=123, len=4)
actionsTable[141097] = 2295; // 'state 551' -> [ -> reduce (target=123, len=4)
actionsTable.fill(2295, 141099, 141101); // 'state 551' -> async..function -> reduce (target=123, len=4)
actionsTable.fill(2295, 141103, 141106); // 'state 551' -> get..class -> reduce (target=123, len=4)
actionsTable[141108] = 2295; // 'state 551' -> interface -> reduce (target=123, len=4)
actionsTable[141110] = 2295; // 'state 551' -> < -> reduce (target=123, len=4)
actionsTable.fill(2295, 141115, 141117); // 'state 551' -> void..typeof -> reduce (target=123, len=4)
actionsTable[141118] = 2295; // 'state 551' -> new -> reduce (target=123, len=4)
actionsTable.fill(2295, 141125, 141127); // 'state 551' -> +..- -> reduce (target=123, len=4)
actionsTable.fill(2295, 141128, 141132); // 'state 551' -> !..await -> reduce (target=123, len=4)
actionsTable.fill(2295, 141135, 141138); // 'state 551' -> number..template_string -> reduce (target=123, len=4)
actionsTable.fill(2295, 141144, 141148); // 'state 551' -> update_operator..@par-gen.EOF -> reduce (target=123, len=4)
actionsTable.fill(2295, 141312, 141321); // 'state 552' -> true..( -> reduce (target=123, len=4)
actionsTable.fill(2295, 141322, 141325); // 'state 552' -> else..do -> reduce (target=123, len=4)
actionsTable[141325] = 1260; // 'state 552' -> ; -> shift (target=630, len=0)
actionsTable.fill(2295, 141326, 141331); // 'state 552' -> for..of -> reduce (target=123, len=4)
actionsTable.fill(2295, 141332, 141335); // 'state 552' -> return..try -> reduce (target=123, len=4)
actionsTable.fill(2295, 141337, 141339); // 'state 552' -> switch..case -> reduce (target=123, len=4)
actionsTable.fill(2295, 141340, 141345); // 'state 552' -> default..from -> reduce (target=123, len=4)
actionsTable.fill(2295, 141348, 141350); // 'state 552' -> type..export -> reduce (target=123, len=4)
actionsTable[141353] = 2295; // 'state 552' -> [ -> reduce (target=123, len=4)
actionsTable.fill(2295, 141355, 141357); // 'state 552' -> async..function -> reduce (target=123, len=4)
actionsTable.fill(2295, 141359, 141362); // 'state 552' -> get..class -> reduce (target=123, len=4)
actionsTable[141364] = 2295; // 'state 552' -> interface -> reduce (target=123, len=4)
actionsTable[141366] = 2295; // 'state 552' -> < -> reduce (target=123, len=4)
actionsTable.fill(2295, 141371, 141373); // 'state 552' -> void..typeof -> reduce (target=123, len=4)
actionsTable[141374] = 2295; // 'state 552' -> new -> reduce (target=123, len=4)
actionsTable.fill(2295, 141381, 141383); // 'state 552' -> +..- -> reduce (target=123, len=4)
actionsTable.fill(2295, 141384, 141388); // 'state 552' -> !..await -> reduce (target=123, len=4)
actionsTable.fill(2295, 141391, 141394); // 'state 552' -> number..template_string -> reduce (target=123, len=4)
actionsTable.fill(2295, 141400, 141404); // 'state 552' -> update_operator..@par-gen.EOF -> reduce (target=123, len=4)
actionsTable[141600] = 1262; // 'state 553' -> from -> shift (target=631, len=0)
actionsTable.fill(2299, 141824, 141833); // 'state 554' -> true..( -> reduce (target=125, len=4)
actionsTable.fill(2299, 141834, 141843); // 'state 554' -> else..of -> reduce (target=125, len=4)
actionsTable.fill(2299, 141844, 141847); // 'state 554' -> return..try -> reduce (target=125, len=4)
actionsTable.fill(2299, 141849, 141851); // 'state 554' -> switch..case -> reduce (target=125, len=4)
actionsTable.fill(2299, 141852, 141857); // 'state 554' -> default..from -> reduce (target=125, len=4)
actionsTable.fill(2299, 141860, 141862); // 'state 554' -> type..export -> reduce (target=125, len=4)
actionsTable[141865] = 2299; // 'state 554' -> [ -> reduce (target=125, len=4)
actionsTable.fill(2299, 141867, 141869); // 'state 554' -> async..function -> reduce (target=125, len=4)
actionsTable.fill(2299, 141871, 141874); // 'state 554' -> get..class -> reduce (target=125, len=4)
actionsTable[141876] = 2299; // 'state 554' -> interface -> reduce (target=125, len=4)
actionsTable[141878] = 2299; // 'state 554' -> < -> reduce (target=125, len=4)
actionsTable.fill(2299, 141883, 141885); // 'state 554' -> void..typeof -> reduce (target=125, len=4)
actionsTable[141886] = 2299; // 'state 554' -> new -> reduce (target=125, len=4)
actionsTable.fill(2299, 141893, 141895); // 'state 554' -> +..- -> reduce (target=125, len=4)
actionsTable.fill(2299, 141896, 141900); // 'state 554' -> !..await -> reduce (target=125, len=4)
actionsTable.fill(2299, 141903, 141906); // 'state 554' -> number..template_string -> reduce (target=125, len=4)
actionsTable.fill(2299, 141912, 141916); // 'state 554' -> update_operator..@par-gen.EOF -> reduce (target=125, len=4)
actionsTable.fill(1273, 142080, 142089); // 'state 555' -> true..( -> reduce (target=124, len=2)
actionsTable.fill(1273, 142090, 142099); // 'state 555' -> else..of -> reduce (target=124, len=2)
actionsTable.fill(1273, 142100, 142103); // 'state 555' -> return..try -> reduce (target=124, len=2)
actionsTable.fill(1273, 142105, 142107); // 'state 555' -> switch..case -> reduce (target=124, len=2)
actionsTable.fill(1273, 142108, 142114); // 'state 555' -> default.., -> reduce (target=124, len=2)
actionsTable.fill(1273, 142116, 142118); // 'state 555' -> type..export -> reduce (target=124, len=2)
actionsTable[142121] = 1273; // 'state 555' -> [ -> reduce (target=124, len=2)
actionsTable.fill(1273, 142123, 142125); // 'state 555' -> async..function -> reduce (target=124, len=2)
actionsTable.fill(1273, 142127, 142130); // 'state 555' -> get..class -> reduce (target=124, len=2)
actionsTable[142132] = 1273; // 'state 555' -> interface -> reduce (target=124, len=2)
actionsTable[142134] = 1273; // 'state 555' -> < -> reduce (target=124, len=2)
actionsTable.fill(1273, 142139, 142141); // 'state 555' -> void..typeof -> reduce (target=124, len=2)
actionsTable[142142] = 1273; // 'state 555' -> new -> reduce (target=124, len=2)
actionsTable.fill(1273, 142149, 142151); // 'state 555' -> +..- -> reduce (target=124, len=2)
actionsTable.fill(1273, 142152, 142156); // 'state 555' -> !..await -> reduce (target=124, len=2)
actionsTable.fill(1273, 142159, 142162); // 'state 555' -> number..template_string -> reduce (target=124, len=2)
actionsTable.fill(1273, 142168, 142172); // 'state 555' -> update_operator..@par-gen.EOF -> reduce (target=124, len=2)
actionsTable.fill(1795, 142336, 142359); // 'state 556' -> true..try -> reduce (target=129, len=3)
actionsTable.fill(1795, 142361, 142370); // 'state 556' -> switch.., -> reduce (target=129, len=3)
actionsTable.fill(1795, 142372, 142374); // 'state 556' -> type..export -> reduce (target=129, len=3)
actionsTable[142375] = 1795; // 'state 556' -> = -> reduce (target=129, len=3)
actionsTable.fill(1795, 142377, 142381); // 'state 556' -> [..function -> reduce (target=129, len=3)
actionsTable.fill(1795, 142383, 142386); // 'state 556' -> get..class -> reduce (target=129, len=3)
actionsTable.fill(1795, 142388, 142391); // 'state 556' -> interface..< -> reduce (target=129, len=3)
actionsTable.fill(1795, 142395, 142397); // 'state 556' -> void..typeof -> reduce (target=129, len=3)
actionsTable[142398] = 1795; // 'state 556' -> new -> reduce (target=129, len=3)
actionsTable.fill(1795, 142405, 142407); // 'state 556' -> +..- -> reduce (target=129, len=3)
actionsTable.fill(1795, 142408, 142412); // 'state 556' -> !..await -> reduce (target=129, len=3)
actionsTable.fill(1795, 142415, 142418); // 'state 556' -> number..template_string -> reduce (target=129, len=3)
actionsTable.fill(1795, 142424, 142428); // 'state 556' -> update_operator..@par-gen.EOF -> reduce (target=129, len=3)
actionsTable[142598] = 1266; // 'state 557' -> } -> shift (target=633, len=0)
actionsTable[142625] = 616; // 'state 557' -> , -> shift (target=308, len=0)
actionsTable[142854] = 1285; // 'state 558' -> } -> reduce (target=130, len=2)
actionsTable[142881] = 1285; // 'state 558' -> , -> reduce (target=130, len=2)
actionsTable.fill(1801, 143104, 143127); // 'state 559' -> true..try -> reduce (target=132, len=3)
actionsTable.fill(1801, 143129, 143138); // 'state 559' -> switch.., -> reduce (target=132, len=3)
actionsTable.fill(1801, 143140, 143142); // 'state 559' -> type..export -> reduce (target=132, len=3)
actionsTable[143143] = 1801; // 'state 559' -> = -> reduce (target=132, len=3)
actionsTable.fill(1801, 143145, 143149); // 'state 559' -> [..function -> reduce (target=132, len=3)
actionsTable.fill(1801, 143151, 143154); // 'state 559' -> get..class -> reduce (target=132, len=3)
actionsTable.fill(1801, 143156, 143159); // 'state 559' -> interface..< -> reduce (target=132, len=3)
actionsTable.fill(1801, 143163, 143165); // 'state 559' -> void..typeof -> reduce (target=132, len=3)
actionsTable[143166] = 1801; // 'state 559' -> new -> reduce (target=132, len=3)
actionsTable.fill(1801, 143173, 143175); // 'state 559' -> +..- -> reduce (target=132, len=3)
actionsTable.fill(1801, 143176, 143180); // 'state 559' -> !..await -> reduce (target=132, len=3)
actionsTable.fill(1801, 143183, 143186); // 'state 559' -> number..template_string -> reduce (target=132, len=3)
actionsTable.fill(1801, 143192, 143196); // 'state 559' -> update_operator..@par-gen.EOF -> reduce (target=132, len=3)
actionsTable[143393] = 620; // 'state 560' -> , -> shift (target=310, len=0)
actionsTable[143402] = 1272; // 'state 560' -> ] -> shift (target=636, len=0)
actionsTable[143649] = 1291; // 'state 561' -> , -> reduce (target=133, len=2)
actionsTable[143658] = 1291; // 'state 561' -> ] -> reduce (target=133, len=2)
actionsTable.fill(2465, 143872, 143895); // 'state 562' -> true..try -> reduce (target=208, len=4)
actionsTable.fill(2465, 143897, 143910); // 'state 562' -> switch..export -> reduce (target=208, len=4)
actionsTable.fill(2465, 143913, 143922); // 'state 562' -> [..class -> reduce (target=208, len=4)
actionsTable.fill(2465, 143923, 143925); // 'state 562' -> implements..interface -> reduce (target=208, len=4)
actionsTable.fill(2465, 143926, 143930); // 'state 562' -> <..& -> reduce (target=208, len=4)
actionsTable.fill(2465, 143931, 143933); // 'state 562' -> void..typeof -> reduce (target=208, len=4)
actionsTable.fill(2465, 143934, 143955); // 'state 562' -> new..accessibility_modifier -> reduce (target=208, len=4)
actionsTable.fill(2465, 143956, 143964); // 'state 562' -> equality_operator..@par-gen.EOF -> reduce (target=208, len=4)
actionsTable.fill(2417, 144128, 144151); // 'state 563' -> true..try -> reduce (target=184, len=4)
actionsTable.fill(2417, 144153, 144166); // 'state 563' -> switch..export -> reduce (target=184, len=4)
actionsTable.fill(2417, 144169, 144178); // 'state 563' -> [..class -> reduce (target=184, len=4)
actionsTable.fill(2417, 144179, 144181); // 'state 563' -> implements..interface -> reduce (target=184, len=4)
actionsTable.fill(2417, 144182, 144186); // 'state 563' -> <..& -> reduce (target=184, len=4)
actionsTable.fill(2417, 144187, 144189); // 'state 563' -> void..typeof -> reduce (target=184, len=4)
actionsTable.fill(2417, 144190, 144211); // 'state 563' -> new..accessibility_modifier -> reduce (target=184, len=4)
actionsTable.fill(2417, 144212, 144220); // 'state 563' -> equality_operator..@par-gen.EOF -> reduce (target=184, len=4)
actionsTable[144442] = 632; // 'state 564' -> => -> shift (target=316, len=0)
actionsTable.fill(2317, 144640, 144649); // 'state 565' -> true..( -> reduce (target=134, len=4)
actionsTable.fill(2317, 144650, 144659); // 'state 565' -> else..of -> reduce (target=134, len=4)
actionsTable.fill(2317, 144660, 144663); // 'state 565' -> return..try -> reduce (target=134, len=4)
actionsTable.fill(2317, 144665, 144667); // 'state 565' -> switch..case -> reduce (target=134, len=4)
actionsTable.fill(2317, 144668, 144673); // 'state 565' -> default..from -> reduce (target=134, len=4)
actionsTable.fill(2317, 144676, 144678); // 'state 565' -> type..export -> reduce (target=134, len=4)
actionsTable[144681] = 2317; // 'state 565' -> [ -> reduce (target=134, len=4)
actionsTable.fill(2317, 144683, 144685); // 'state 565' -> async..function -> reduce (target=134, len=4)
actionsTable.fill(2317, 144687, 144690); // 'state 565' -> get..class -> reduce (target=134, len=4)
actionsTable[144692] = 2317; // 'state 565' -> interface -> reduce (target=134, len=4)
actionsTable[144694] = 2317; // 'state 565' -> < -> reduce (target=134, len=4)
actionsTable.fill(2317, 144699, 144701); // 'state 565' -> void..typeof -> reduce (target=134, len=4)
actionsTable[144702] = 2317; // 'state 565' -> new -> reduce (target=134, len=4)
actionsTable.fill(2317, 144709, 144711); // 'state 565' -> +..- -> reduce (target=134, len=4)
actionsTable.fill(2317, 144712, 144716); // 'state 565' -> !..await -> reduce (target=134, len=4)
actionsTable.fill(2317, 144719, 144722); // 'state 565' -> number..template_string -> reduce (target=134, len=4)
actionsTable.fill(2317, 144728, 144732); // 'state 565' -> update_operator..@par-gen.EOF -> reduce (target=134, len=4)
actionsTable.fill(2317, 144896, 144905); // 'state 566' -> true..( -> reduce (target=134, len=4)
actionsTable.fill(2317, 144906, 144915); // 'state 566' -> else..of -> reduce (target=134, len=4)
actionsTable[144915] = 2465; // 'state 566' -> in -> reduce (target=208, len=4)
actionsTable.fill(2317, 144916, 144919); // 'state 566' -> return..try -> reduce (target=134, len=4)
actionsTable.fill(2317, 144921, 144923); // 'state 566' -> switch..case -> reduce (target=134, len=4)
actionsTable.fill(2317, 144924, 144929); // 'state 566' -> default..from -> reduce (target=134, len=4)
actionsTable.fill(2465, 144930, 144932); // 'state 566' -> *..as -> reduce (target=208, len=4)
actionsTable.fill(2317, 144932, 144934); // 'state 566' -> type..export -> reduce (target=134, len=4)
actionsTable[144937] = 2317; // 'state 566' -> [ -> reduce (target=134, len=4)
actionsTable.fill(2317, 144939, 144941); // 'state 566' -> async..function -> reduce (target=134, len=4)
actionsTable.fill(2317, 144943, 144946); // 'state 566' -> get..class -> reduce (target=134, len=4)
actionsTable[144948] = 2317; // 'state 566' -> interface -> reduce (target=134, len=4)
actionsTable[144950] = 2317; // 'state 566' -> < -> reduce (target=134, len=4)
actionsTable.fill(2465, 144951, 144954); // 'state 566' -> >..& -> reduce (target=208, len=4)
actionsTable.fill(2317, 144955, 144957); // 'state 566' -> void..typeof -> reduce (target=134, len=4)
actionsTable[144958] = 2317; // 'state 566' -> new -> reduce (target=134, len=4)
actionsTable.fill(2465, 144959, 144965); // 'state 566' -> ?..instanceof -> reduce (target=208, len=4)
actionsTable.fill(2317, 144965, 144967); // 'state 566' -> +..- -> reduce (target=134, len=4)
actionsTable[144967] = 2465; // 'state 566' -> ** -> reduce (target=208, len=4)
actionsTable.fill(2317, 144968, 144972); // 'state 566' -> !..await -> reduce (target=134, len=4)
actionsTable.fill(2465, 144972, 144974); // 'state 566' -> ?.... -> reduce (target=208, len=4)
actionsTable.fill(2317, 144975, 144978); // 'state 566' -> number..template_string -> reduce (target=134, len=4)
actionsTable.fill(2465, 144980, 144984); // 'state 566' -> equality_operator..multiplicative_operator -> reduce (target=208, len=4)
actionsTable.fill(2317, 144984, 144988); // 'state 566' -> update_operator..@par-gen.EOF -> reduce (target=134, len=4)
actionsTable.fill(1809, 145157, 145159); // 'state 567' -> {..} -> reduce (target=136, len=3)
actionsTable[145165] = 1809; // 'state 567' -> ; -> reduce (target=136, len=3)
actionsTable[145170] = 1809; // 'state 567' -> of -> reduce (target=136, len=3)
actionsTable[145179] = 1809; // 'state 567' -> : -> reduce (target=136, len=3)
actionsTable.fill(1809, 145184, 145186); // 'state 567' -> from.., -> reduce (target=136, len=3)
actionsTable[145188] = 1809; // 'state 567' -> type -> reduce (target=136, len=3)
actionsTable[145193] = 1809; // 'state 567' -> [ -> reduce (target=136, len=3)
actionsTable[145195] = 1809; // 'state 567' -> async -> reduce (target=136, len=3)
actionsTable.fill(1809, 145198, 145201); // 'state 567' -> readonly..set -> reduce (target=136, len=3)
actionsTable[145205] = 1809; // 'state 567' -> ?: -> reduce (target=136, len=3)
actionsTable[145210] = 1809; // 'state 567' -> => -> reduce (target=136, len=3)
actionsTable[145214] = 1809; // 'state 567' -> new -> reduce (target=136, len=3)
actionsTable.fill(1809, 145231, 145233); // 'state 567' -> number..string -> reduce (target=136, len=3)
actionsTable[145241] = 1809; // 'state 567' -> identifier -> reduce (target=136, len=3)
actionsTable[145417] = 1288; // 'state 568' -> ) -> shift (target=644, len=0)
actionsTable[145441] = 634; // 'state 568' -> , -> shift (target=317, len=0)
actionsTable[145669] = 1307; // 'state 569' -> { -> reduce (target=141, len=2)
actionsTable[145705] = 1307; // 'state 569' -> [ -> reduce (target=141, len=2)
actionsTable[145707] = 1307; // 'state 569' -> async -> reduce (target=141, len=2)
actionsTable.fill(1307, 145709, 145713); // 'state 569' -> static..set -> reduce (target=141, len=2)
actionsTable[145746] = 1307; // 'state 569' -> accessibility_modifier -> reduce (target=141, len=2)
actionsTable[145753] = 1307; // 'state 569' -> identifier -> reduce (target=141, len=2)
actionsTable[145925] = 1307; // 'state 570' -> { -> reduce (target=141, len=2)
actionsTable[145938] = 1307; // 'state 570' -> of -> reduce (target=141, len=2)
actionsTable[145952] = 1307; // 'state 570' -> from -> reduce (target=141, len=2)
actionsTable[145956] = 1307; // 'state 570' -> type -> reduce (target=141, len=2)
actionsTable[145961] = 1307; // 'state 570' -> [ -> reduce (target=141, len=2)
actionsTable[145963] = 1307; // 'state 570' -> async -> reduce (target=141, len=2)
actionsTable.fill(1307, 145965, 145969); // 'state 570' -> static..set -> reduce (target=141, len=2)
actionsTable.fill(1307, 145998, 146001); // 'state 570' -> private_property_identifier..string -> reduce (target=141, len=2)
actionsTable[146002] = 1307; // 'state 570' -> accessibility_modifier -> reduce (target=141, len=2)
actionsTable[146009] = 1307; // 'state 570' -> identifier -> reduce (target=141, len=2)
actionsTable[146185] = 1299; // 'state 571' -> ) -> reduce (target=137, len=2)
actionsTable[146209] = 1299; // 'state 571' -> , -> reduce (target=137, len=2)
actionsTable[146215] = 636; // 'state 571' -> = -> shift (target=318, len=0)
actionsTable.fill(2333, 146432, 146441); // 'state 572' -> true..( -> reduce (target=142, len=4)
actionsTable.fill(2333, 146442, 146451); // 'state 572' -> else..of -> reduce (target=142, len=4)
actionsTable[146451] = 2467; // 'state 572' -> in -> reduce (target=209, len=4)
actionsTable.fill(2333, 146452, 146455); // 'state 572' -> return..try -> reduce (target=142, len=4)
actionsTable.fill(2333, 146457, 146459); // 'state 572' -> switch..case -> reduce (target=142, len=4)
actionsTable.fill(2333, 146460, 146465); // 'state 572' -> default..from -> reduce (target=142, len=4)
actionsTable.fill(2467, 146466, 146468); // 'state 572' -> *..as -> reduce (target=209, len=4)
actionsTable.fill(2333, 146468, 146470); // 'state 572' -> type..export -> reduce (target=142, len=4)
actionsTable[146473] = 2333; // 'state 572' -> [ -> reduce (target=142, len=4)
actionsTable.fill(2333, 146475, 146477); // 'state 572' -> async..function -> reduce (target=142, len=4)
actionsTable.fill(2333, 146479, 146482); // 'state 572' -> get..class -> reduce (target=142, len=4)
actionsTable[146484] = 2333; // 'state 572' -> interface -> reduce (target=142, len=4)
actionsTable[146486] = 2333; // 'state 572' -> < -> reduce (target=142, len=4)
actionsTable.fill(2467, 146487, 146490); // 'state 572' -> >..& -> reduce (target=209, len=4)
actionsTable.fill(2333, 146491, 146493); // 'state 572' -> void..typeof -> reduce (target=142, len=4)
actionsTable[146494] = 2333; // 'state 572' -> new -> reduce (target=142, len=4)
actionsTable.fill(2467, 146495, 146501); // 'state 572' -> ?..instanceof -> reduce (target=209, len=4)
actionsTable.fill(2333, 146501, 146503); // 'state 572' -> +..- -> reduce (target=142, len=4)
actionsTable[146503] = 2467; // 'state 572' -> ** -> reduce (target=209, len=4)
actionsTable.fill(2333, 146504, 146508); // 'state 572' -> !..await -> reduce (target=142, len=4)
actionsTable.fill(2467, 146508, 146510); // 'state 572' -> ?.... -> reduce (target=209, len=4)
actionsTable.fill(2333, 146511, 146514); // 'state 572' -> number..template_string -> reduce (target=142, len=4)
actionsTable.fill(2467, 146516, 146520); // 'state 572' -> equality_operator..multiplicative_operator -> reduce (target=209, len=4)
actionsTable.fill(2333, 146520, 146524); // 'state 572' -> update_operator..@par-gen.EOF -> reduce (target=142, len=4)
actionsTable.fill(1821, 146688, 146697); // 'state 573' -> true..( -> reduce (target=142, len=3)
actionsTable.fill(1821, 146699, 146701); // 'state 573' -> while..do -> reduce (target=142, len=3)
actionsTable[146701] = 1955; // 'state 573' -> ; -> reduce (target=209, len=3)
actionsTable.fill(1821, 146702, 146707); // 'state 573' -> for..of -> reduce (target=142, len=3)
actionsTable[146707] = 1955; // 'state 573' -> in -> reduce (target=209, len=3)
actionsTable.fill(1821, 146708, 146711); // 'state 573' -> return..try -> reduce (target=142, len=3)
actionsTable[146713] = 1821; // 'state 573' -> switch -> reduce (target=142, len=3)
actionsTable.fill(1821, 146717, 146721); // 'state 573' -> break..from -> reduce (target=142, len=3)
actionsTable.fill(1955, 146722, 146724); // 'state 573' -> *..as -> reduce (target=209, len=3)
actionsTable.fill(1821, 146724, 146726); // 'state 573' -> type..export -> reduce (target=142, len=3)
actionsTable[146729] = 1821; // 'state 573' -> [ -> reduce (target=142, len=3)
actionsTable.fill(1821, 146731, 146733); // 'state 573' -> async..function -> reduce (target=142, len=3)
actionsTable.fill(1821, 146735, 146738); // 'state 573' -> get..class -> reduce (target=142, len=3)
actionsTable[146740] = 1821; // 'state 573' -> interface -> reduce (target=142, len=3)
actionsTable[146742] = 1821; // 'state 573' -> < -> reduce (target=142, len=3)
actionsTable.fill(1955, 146743, 146746); // 'state 573' -> >..& -> reduce (target=209, len=3)
actionsTable.fill(1821, 146747, 146749); // 'state 573' -> void..typeof -> reduce (target=142, len=3)
actionsTable[146750] = 1821; // 'state 573' -> new -> reduce (target=142, len=3)
actionsTable.fill(1955, 146751, 146757); // 'state 573' -> ?..instanceof -> reduce (target=209, len=3)
actionsTable.fill(1821, 146757, 146759); // 'state 573' -> +..- -> reduce (target=142, len=3)
actionsTable[146759] = 1955; // 'state 573' -> ** -> reduce (target=209, len=3)
actionsTable.fill(1821, 146760, 146764); // 'state 573' -> !..await -> reduce (target=142, len=3)
actionsTable.fill(1955, 146764, 146766); // 'state 573' -> ?.... -> reduce (target=209, len=3)
actionsTable.fill(1821, 146767, 146770); // 'state 573' -> number..template_string -> reduce (target=142, len=3)
actionsTable.fill(1955, 146772, 146776); // 'state 573' -> equality_operator..multiplicative_operator -> reduce (target=209, len=3)
actionsTable.fill(1821, 146776, 146780); // 'state 573' -> update_operator..@par-gen.EOF -> reduce (target=142, len=3)
actionsTable.fill(2467, 146944, 146967); // 'state 574' -> true..try -> reduce (target=209, len=4)
actionsTable.fill(2467, 146969, 146982); // 'state 574' -> switch..export -> reduce (target=209, len=4)
actionsTable.fill(2467, 146985, 146994); // 'state 574' -> [..class -> reduce (target=209, len=4)
actionsTable.fill(2467, 146995, 146997); // 'state 574' -> implements..interface -> reduce (target=209, len=4)
actionsTable.fill(2467, 146998, 147002); // 'state 574' -> <..& -> reduce (target=209, len=4)
actionsTable.fill(2467, 147003, 147005); // 'state 574' -> void..typeof -> reduce (target=209, len=4)
actionsTable.fill(2467, 147006, 147027); // 'state 574' -> new..accessibility_modifier -> reduce (target=209, len=4)
actionsTable.fill(2467, 147028, 147036); // 'state 574' -> equality_operator..@par-gen.EOF -> reduce (target=209, len=4)
actionsTable[147205] = 1823; // 'state 575' -> { -> reduce (target=143, len=3)
actionsTable[147461] = 1827; // 'state 576' -> { -> reduce (target=145, len=3)
actionsTable[147489] = 640; // 'state 576' -> , -> shift (target=320, len=0)
actionsTable.fill(1831, 147712, 147735); // 'state 577' -> true..try -> reduce (target=147, len=3)
actionsTable.fill(1831, 147737, 147750); // 'state 577' -> switch..export -> reduce (target=147, len=3)
actionsTable.fill(1831, 147753, 147762); // 'state 577' -> [..class -> reduce (target=147, len=3)
actionsTable.fill(1831, 147763, 147765); // 'state 577' -> implements..interface -> reduce (target=147, len=3)
actionsTable.fill(1831, 147766, 147770); // 'state 577' -> <..& -> reduce (target=147, len=3)
actionsTable.fill(1831, 147771, 147773); // 'state 577' -> void..typeof -> reduce (target=147, len=3)
actionsTable.fill(1831, 147774, 147795); // 'state 577' -> new..accessibility_modifier -> reduce (target=147, len=3)
actionsTable.fill(1831, 147796, 147804); // 'state 577' -> equality_operator..@par-gen.EOF -> reduce (target=147, len=3)
actionsTable[147974] = 1317; // 'state 578' -> } -> reduce (target=146, len=2)
actionsTable[147981] = 1317; // 'state 578' -> ; -> reduce (target=146, len=2)
actionsTable[147986] = 1317; // 'state 578' -> of -> reduce (target=146, len=2)
actionsTable[148000] = 1317; // 'state 578' -> from -> reduce (target=146, len=2)
actionsTable[148004] = 1317; // 'state 578' -> type -> reduce (target=146, len=2)
actionsTable[148009] = 1317; // 'state 578' -> [ -> reduce (target=146, len=2)
actionsTable[148011] = 1317; // 'state 578' -> async -> reduce (target=146, len=2)
actionsTable.fill(1317, 148013, 148017); // 'state 578' -> static..set -> reduce (target=146, len=2)
actionsTable.fill(1317, 148046, 148049); // 'state 578' -> private_property_identifier..string -> reduce (target=146, len=2)
actionsTable[148050] = 1317; // 'state 578' -> accessibility_modifier -> reduce (target=146, len=2)
actionsTable[148057] = 1317; // 'state 578' -> identifier -> reduce (target=146, len=2)
actionsTable[148230] = 867; // 'state 579' -> } -> reduce (target=177, len=1)
actionsTable[148232] = 867; // 'state 579' -> ( -> reduce (target=177, len=1)
actionsTable[148237] = 867; // 'state 579' -> ; -> reduce (target=177, len=1)
actionsTable[148242] = 1307; // 'state 579' -> of -> reduce (target=141, len=2)
actionsTable[148251] = 867; // 'state 579' -> : -> reduce (target=177, len=1)
actionsTable[148256] = 1307; // 'state 579' -> from -> reduce (target=141, len=2)
actionsTable[148260] = 1307; // 'state 579' -> type -> reduce (target=141, len=2)
actionsTable[148263] = 867; // 'state 579' -> = -> reduce (target=177, len=1)
actionsTable[148265] = 1307; // 'state 579' -> [ -> reduce (target=141, len=2)
actionsTable[148267] = 1307; // 'state 579' -> async -> reduce (target=141, len=2)
actionsTable.fill(1307, 148269, 148273); // 'state 579' -> static..set -> reduce (target=141, len=2)
actionsTable.fill(867, 148277, 148279); // 'state 579' -> ?:..< -> reduce (target=177, len=1)
actionsTable.fill(1307, 148302, 148305); // 'state 579' -> private_property_identifier..string -> reduce (target=141, len=2)
actionsTable[148306] = 1307; // 'state 579' -> accessibility_modifier -> reduce (target=141, len=2)
actionsTable[148313] = 1307; // 'state 579' -> identifier -> reduce (target=141, len=2)
actionsTable[148486] = 1323; // 'state 580' -> } -> reduce (target=149, len=2)
actionsTable[148493] = 1323; // 'state 580' -> ; -> reduce (target=149, len=2)
actionsTable[148498] = 1323; // 'state 580' -> of -> reduce (target=149, len=2)
actionsTable[148512] = 1323; // 'state 580' -> from -> reduce (target=149, len=2)
actionsTable[148516] = 1323; // 'state 580' -> type -> reduce (target=149, len=2)
actionsTable[148521] = 1323; // 'state 580' -> [ -> reduce (target=149, len=2)
actionsTable[148523] = 1323; // 'state 580' -> async -> reduce (target=149, len=2)
actionsTable.fill(1323, 148525, 148529); // 'state 580' -> static..set -> reduce (target=149, len=2)
actionsTable.fill(1323, 148558, 148561); // 'state 580' -> private_property_identifier..string -> reduce (target=149, len=2)
actionsTable[148562] = 1323; // 'state 580' -> accessibility_modifier -> reduce (target=149, len=2)
actionsTable[148569] = 1323; // 'state 580' -> identifier -> reduce (target=149, len=2)
actionsTable[148742] = 1323; // 'state 581' -> } -> reduce (target=149, len=2)
actionsTable[148749] = 1302; // 'state 581' -> ; -> shift (target=651, len=0)
actionsTable[148754] = 1323; // 'state 581' -> of -> reduce (target=149, len=2)
actionsTable[148768] = 1323; // 'state 581' -> from -> reduce (target=149, len=2)
actionsTable[148772] = 1323; // 'state 581' -> type -> reduce (target=149, len=2)
actionsTable[148775] = 642; // 'state 581' -> = -> shift (target=321, len=0)
actionsTable[148777] = 1323; // 'state 581' -> [ -> reduce (target=149, len=2)
actionsTable[148779] = 1323; // 'state 581' -> async -> reduce (target=149, len=2)
actionsTable.fill(1323, 148781, 148785); // 'state 581' -> static..set -> reduce (target=149, len=2)
actionsTable.fill(1323, 148814, 148817); // 'state 581' -> private_property_identifier..string -> reduce (target=149, len=2)
actionsTable[148818] = 1323; // 'state 581' -> accessibility_modifier -> reduce (target=149, len=2)
actionsTable[148825] = 1323; // 'state 581' -> identifier -> reduce (target=149, len=2)
actionsTable.fill(2349, 148992, 149001); // 'state 582' -> true..( -> reduce (target=150, len=4)
actionsTable.fill(2349, 149002, 149005); // 'state 582' -> else..do -> reduce (target=150, len=4)
actionsTable.fill(2349, 149006, 149011); // 'state 582' -> for..of -> reduce (target=150, len=4)
actionsTable.fill(2349, 149012, 149015); // 'state 582' -> return..try -> reduce (target=150, len=4)
actionsTable.fill(2349, 149017, 149019); // 'state 582' -> switch..case -> reduce (target=150, len=4)
actionsTable.fill(2349, 149020, 149025); // 'state 582' -> default..from -> reduce (target=150, len=4)
actionsTable.fill(2349, 149028, 149030); // 'state 582' -> type..export -> reduce (target=150, len=4)
actionsTable[149033] = 2349; // 'state 582' -> [ -> reduce (target=150, len=4)
actionsTable.fill(2349, 149035, 149037); // 'state 582' -> async..function -> reduce (target=150, len=4)
actionsTable.fill(2349, 149039, 149042); // 'state 582' -> get..class -> reduce (target=150, len=4)
actionsTable[149044] = 2349; // 'state 582' -> interface -> reduce (target=150, len=4)
actionsTable[149046] = 2349; // 'state 582' -> < -> reduce (target=150, len=4)
actionsTable.fill(2349, 149051, 149053); // 'state 582' -> void..typeof -> reduce (target=150, len=4)
actionsTable[149054] = 2349; // 'state 582' -> new -> reduce (target=150, len=4)
actionsTable.fill(2349, 149061, 149063); // 'state 582' -> +..- -> reduce (target=150, len=4)
actionsTable.fill(2349, 149064, 149068); // 'state 582' -> !..await -> reduce (target=150, len=4)
actionsTable.fill(2349, 149071, 149074); // 'state 582' -> number..template_string -> reduce (target=150, len=4)
actionsTable.fill(2349, 149080, 149084); // 'state 582' -> update_operator..@par-gen.EOF -> reduce (target=150, len=4)
actionsTable.fill(2353, 149248, 149257); // 'state 583' -> true..( -> reduce (target=152, len=4)
actionsTable.fill(2353, 149258, 149261); // 'state 583' -> else..do -> reduce (target=152, len=4)
actionsTable[149261] = 1314; // 'state 583' -> ; -> shift (target=657, len=0)
actionsTable.fill(2353, 149262, 149267); // 'state 583' -> for..of -> reduce (target=152, len=4)
actionsTable.fill(2353, 149268, 149271); // 'state 583' -> return..try -> reduce (target=152, len=4)
actionsTable.fill(2353, 149273, 149275); // 'state 583' -> switch..case -> reduce (target=152, len=4)
actionsTable.fill(2353, 149276, 149281); // 'state 583' -> default..from -> reduce (target=152, len=4)
actionsTable.fill(2353, 149284, 149286); // 'state 583' -> type..export -> reduce (target=152, len=4)
actionsTable[149289] = 2353; // 'state 583' -> [ -> reduce (target=152, len=4)
actionsTable.fill(2353, 149291, 149293); // 'state 583' -> async..function -> reduce (target=152, len=4)
actionsTable.fill(2353, 149295, 149298); // 'state 583' -> get..class -> reduce (target=152, len=4)
actionsTable[149300] = 2353; // 'state 583' -> interface -> reduce (target=152, len=4)
actionsTable[149302] = 2353; // 'state 583' -> < -> reduce (target=152, len=4)
actionsTable[149304] = 506; // 'state 583' -> | -> shift (target=253, len=0)
actionsTable[149305] = 508; // 'state 583' -> & -> shift (target=254, len=0)
actionsTable.fill(2353, 149307, 149309); // 'state 583' -> void..typeof -> reduce (target=152, len=4)
actionsTable[149310] = 2353; // 'state 583' -> new -> reduce (target=152, len=4)
actionsTable.fill(2353, 149317, 149319); // 'state 583' -> +..- -> reduce (target=152, len=4)
actionsTable.fill(2353, 149320, 149324); // 'state 583' -> !..await -> reduce (target=152, len=4)
actionsTable.fill(2353, 149327, 149330); // 'state 583' -> number..template_string -> reduce (target=152, len=4)
actionsTable.fill(2353, 149336, 149340); // 'state 583' -> update_operator..@par-gen.EOF -> reduce (target=152, len=4)
actionsTable.fill(2409, 149504, 149527); // 'state 584' -> true..try -> reduce (target=180, len=4)
actionsTable.fill(2409, 149529, 149542); // 'state 584' -> switch..export -> reduce (target=180, len=4)
actionsTable.fill(2409, 149545, 149554); // 'state 584' -> [..class -> reduce (target=180, len=4)
actionsTable.fill(2409, 149555, 149565); // 'state 584' -> implements..typeof -> reduce (target=180, len=4)
actionsTable.fill(2409, 149566, 149587); // 'state 584' -> new..accessibility_modifier -> reduce (target=180, len=4)
actionsTable.fill(2409, 149588, 149596); // 'state 584' -> equality_operator..@par-gen.EOF -> reduce (target=180, len=4)
actionsTable[149769] = 1383; // 'state 585' -> ) -> reduce (target=179, len=2)
actionsTable[149793] = 1383; // 'state 585' -> , -> reduce (target=179, len=2)
actionsTable[150025] = 1817; // 'state 586' -> ) -> reduce (target=140, len=3)
actionsTable[150049] = 1817; // 'state 586' -> , -> reduce (target=140, len=3)
actionsTable[150055] = 652; // 'state 586' -> = -> shift (target=326, len=0)
actionsTable[150299] = 2327; // 'state 587' -> : -> reduce (target=139, len=4)
actionsTable[150325] = 2327; // 'state 587' -> ?: -> reduce (target=139, len=4)
actionsTable[150330] = 2327; // 'state 587' -> => -> reduce (target=139, len=4)
actionsTable[150537] = 1301; // 'state 588' -> ) -> reduce (target=138, len=2)
actionsTable[150561] = 1301; // 'state 588' -> , -> reduce (target=138, len=2)
actionsTable.fill(2431, 150784, 150807); // 'state 589' -> true..try -> reduce (target=191, len=4)
actionsTable.fill(2431, 150809, 150822); // 'state 589' -> switch..export -> reduce (target=191, len=4)
actionsTable.fill(2431, 150825, 150834); // 'state 589' -> [..class -> reduce (target=191, len=4)
actionsTable.fill(2431, 150835, 150837); // 'state 589' -> implements..interface -> reduce (target=191, len=4)
actionsTable.fill(2431, 150838, 150842); // 'state 589' -> <..& -> reduce (target=191, len=4)
actionsTable.fill(2431, 150843, 150845); // 'state 589' -> void..typeof -> reduce (target=191, len=4)
actionsTable.fill(2431, 150846, 150867); // 'state 589' -> new..accessibility_modifier -> reduce (target=191, len=4)
actionsTable.fill(2431, 150868, 150876); // 'state 589' -> equality_operator..@par-gen.EOF -> reduce (target=191, len=4)
actionsTable.fill(2447, 151040, 151063); // 'state 590' -> true..try -> reduce (target=199, len=4)
actionsTable.fill(2447, 151065, 151078); // 'state 590' -> switch..export -> reduce (target=199, len=4)
actionsTable[151079] = 2447; // 'state 590' -> = -> reduce (target=199, len=4)
actionsTable.fill(2447, 151081, 151090); // 'state 590' -> [..class -> reduce (target=199, len=4)
actionsTable.fill(2447, 151091, 151098); // 'state 590' -> implements..& -> reduce (target=199, len=4)
actionsTable.fill(2447, 151099, 151101); // 'state 590' -> void..typeof -> reduce (target=199, len=4)
actionsTable.fill(2447, 151102, 151132); // 'state 590' -> new..@par-gen.EOF -> reduce (target=199, len=4)
actionsTable[151329] = 532; // 'state 591' -> , -> shift (target=266, len=0)
actionsTable[151338] = 1328; // 'state 591' -> ] -> shift (target=664, len=0)
actionsTable[151585] = 1421; // 'state 592' -> , -> reduce (target=198, len=2)
actionsTable[151594] = 1421; // 'state 592' -> ] -> reduce (target=198, len=2)
actionsTable[151813] = 2359; // 'state 593' -> { -> reduce (target=155, len=4)
actionsTable[151816] = 2359; // 'state 593' -> ( -> reduce (target=155, len=4)
actionsTable[151847] = 2359; // 'state 593' -> = -> reduce (target=155, len=4)
actionsTable.fill(2359, 151858, 151860); // 'state 593' -> extends..implements -> reduce (target=155, len=4)
actionsTable[152097] = 1333; // 'state 594' -> , -> reduce (target=154, len=2)
actionsTable[152119] = 1333; // 'state 594' -> > -> reduce (target=154, len=2)
actionsTable[152353] = 1849; // 'state 595' -> , -> reduce (target=156, len=3)
actionsTable[152359] = 658; // 'state 595' -> = -> shift (target=329, len=0)
actionsTable[152375] = 1849; // 'state 595' -> > -> reduce (target=156, len=3)
actionsTable[152376] = 506; // 'state 595' -> | -> shift (target=253, len=0)
actionsTable[152377] = 508; // 'state 595' -> & -> shift (target=254, len=0)
actionsTable[152609] = 1849; // 'state 596' -> , -> reduce (target=156, len=3)
actionsTable[152631] = 1849; // 'state 596' -> > -> reduce (target=156, len=3)
actionsTable[152632] = 506; // 'state 596' -> | -> shift (target=253, len=0)
actionsTable[152633] = 508; // 'state 596' -> & -> shift (target=254, len=0)
actionsTable[152838] = 2455; // 'state 597' -> } -> reduce (target=203, len=4)
actionsTable[152865] = 2455; // 'state 597' -> , -> reduce (target=203, len=4)
actionsTable.fill(2963, 153088, 153111); // 'state 598' -> true..try -> reduce (target=201, len=5)
actionsTable.fill(2963, 153113, 153126); // 'state 598' -> switch..export -> reduce (target=201, len=5)
actionsTable[153127] = 2963; // 'state 598' -> = -> reduce (target=201, len=5)
actionsTable.fill(2963, 153129, 153138); // 'state 598' -> [..class -> reduce (target=201, len=5)
actionsTable.fill(2963, 153139, 153146); // 'state 598' -> implements..& -> reduce (target=201, len=5)
actionsTable.fill(2963, 153147, 153149); // 'state 598' -> void..typeof -> reduce (target=201, len=5)
actionsTable.fill(2963, 153150, 153180); // 'state 598' -> new..@par-gen.EOF -> reduce (target=201, len=5)
actionsTable[153350] = 1937; // 'state 599' -> } -> reduce (target=200, len=3)
actionsTable[153377] = 1937; // 'state 599' -> , -> reduce (target=200, len=3)
actionsTable.fill(2757, 153600, 153609); // 'state 600' -> true..( -> reduce (target=98, len=5)
actionsTable[153610] = 662; // 'state 600' -> else -> shift (target=331, len=0)
actionsTable.fill(2757, 153611, 153613); // 'state 600' -> while..do -> reduce (target=98, len=5)
actionsTable.fill(2757, 153614, 153619); // 'state 600' -> for..of -> reduce (target=98, len=5)
actionsTable.fill(2757, 153620, 153623); // 'state 600' -> return..try -> reduce (target=98, len=5)
actionsTable.fill(2757, 153625, 153627); // 'state 600' -> switch..case -> reduce (target=98, len=5)
actionsTable.fill(2757, 153628, 153633); // 'state 600' -> default..from -> reduce (target=98, len=5)
actionsTable.fill(2757, 153636, 153638); // 'state 600' -> type..export -> reduce (target=98, len=5)
actionsTable[153641] = 2757; // 'state 600' -> [ -> reduce (target=98, len=5)
actionsTable.fill(2757, 153643, 153645); // 'state 600' -> async..function -> reduce (target=98, len=5)
actionsTable.fill(2757, 153647, 153650); // 'state 600' -> get..class -> reduce (target=98, len=5)
actionsTable[153652] = 2757; // 'state 600' -> interface -> reduce (target=98, len=5)
actionsTable[153654] = 2757; // 'state 600' -> < -> reduce (target=98, len=5)
actionsTable.fill(2757, 153659, 153661); // 'state 600' -> void..typeof -> reduce (target=98, len=5)
actionsTable[153662] = 2757; // 'state 600' -> new -> reduce (target=98, len=5)
actionsTable.fill(2757, 153669, 153671); // 'state 600' -> +..- -> reduce (target=98, len=5)
actionsTable.fill(2757, 153672, 153676); // 'state 600' -> !..await -> reduce (target=98, len=5)
actionsTable.fill(2757, 153679, 153682); // 'state 600' -> number..template_string -> reduce (target=98, len=5)
actionsTable.fill(2757, 153688, 153692); // 'state 600' -> update_operator..@par-gen.EOF -> reduce (target=98, len=5)
actionsTable.fill(2759, 153856, 153865); // 'state 601' -> true..( -> reduce (target=99, len=5)
actionsTable.fill(2759, 153866, 153869); // 'state 601' -> else..do -> reduce (target=99, len=5)
actionsTable.fill(2759, 153870, 153875); // 'state 601' -> for..of -> reduce (target=99, len=5)
actionsTable.fill(2759, 153876, 153879); // 'state 601' -> return..try -> reduce (target=99, len=5)
actionsTable.fill(2759, 153881, 153883); // 'state 601' -> switch..case -> reduce (target=99, len=5)
actionsTable.fill(2759, 153884, 153889); // 'state 601' -> default..from -> reduce (target=99, len=5)
actionsTable.fill(2759, 153892, 153894); // 'state 601' -> type..export -> reduce (target=99, len=5)
actionsTable[153897] = 2759; // 'state 601' -> [ -> reduce (target=99, len=5)
actionsTable.fill(2759, 153899, 153901); // 'state 601' -> async..function -> reduce (target=99, len=5)
actionsTable.fill(2759, 153903, 153906); // 'state 601' -> get..class -> reduce (target=99, len=5)
actionsTable[153908] = 2759; // 'state 601' -> interface -> reduce (target=99, len=5)
actionsTable[153910] = 2759; // 'state 601' -> < -> reduce (target=99, len=5)
actionsTable.fill(2759, 153915, 153917); // 'state 601' -> void..typeof -> reduce (target=99, len=5)
actionsTable[153918] = 2759; // 'state 601' -> new -> reduce (target=99, len=5)
actionsTable.fill(2759, 153925, 153927); // 'state 601' -> +..- -> reduce (target=99, len=5)
actionsTable.fill(2759, 153928, 153932); // 'state 601' -> !..await -> reduce (target=99, len=5)
actionsTable.fill(2759, 153935, 153938); // 'state 601' -> number..template_string -> reduce (target=99, len=5)
actionsTable.fill(2759, 153944, 153948); // 'state 601' -> update_operator..@par-gen.EOF -> reduce (target=99, len=5)
actionsTable.fill(2777, 154112, 154121); // 'state 602' -> true..( -> reduce (target=108, len=5)
actionsTable.fill(2777, 154122, 154125); // 'state 602' -> else..do -> reduce (target=108, len=5)
actionsTable.fill(2777, 154126, 154131); // 'state 602' -> for..of -> reduce (target=108, len=5)
actionsTable.fill(2777, 154132, 154135); // 'state 602' -> return..try -> reduce (target=108, len=5)
actionsTable.fill(2777, 154137, 154139); // 'state 602' -> switch..case -> reduce (target=108, len=5)
actionsTable.fill(2777, 154140, 154145); // 'state 602' -> default..from -> reduce (target=108, len=5)
actionsTable.fill(2777, 154148, 154150); // 'state 602' -> type..export -> reduce (target=108, len=5)
actionsTable[154153] = 2777; // 'state 602' -> [ -> reduce (target=108, len=5)
actionsTable.fill(2777, 154155, 154157); // 'state 602' -> async..function -> reduce (target=108, len=5)
actionsTable.fill(2777, 154159, 154162); // 'state 602' -> get..class -> reduce (target=108, len=5)
actionsTable[154164] = 2777; // 'state 602' -> interface -> reduce (target=108, len=5)
actionsTable[154166] = 2777; // 'state 602' -> < -> reduce (target=108, len=5)
actionsTable.fill(2777, 154171, 154173); // 'state 602' -> void..typeof -> reduce (target=108, len=5)
actionsTable[154174] = 2777; // 'state 602' -> new -> reduce (target=108, len=5)
actionsTable.fill(2777, 154181, 154183); // 'state 602' -> +..- -> reduce (target=108, len=5)
actionsTable.fill(2777, 154184, 154188); // 'state 602' -> !..await -> reduce (target=108, len=5)
actionsTable.fill(2777, 154191, 154194); // 'state 602' -> number..template_string -> reduce (target=108, len=5)
actionsTable.fill(2777, 154200, 154204); // 'state 602' -> update_operator..@par-gen.EOF -> reduce (target=108, len=5)
actionsTable.fill(1855, 154368, 154391); // 'state 603' -> true..try -> reduce (target=159, len=3)
actionsTable.fill(1855, 154393, 154406); // 'state 603' -> switch..export -> reduce (target=159, len=3)
actionsTable[154407] = 1855; // 'state 603' -> = -> reduce (target=159, len=3)
actionsTable.fill(1855, 154409, 154418); // 'state 603' -> [..class -> reduce (target=159, len=3)
actionsTable.fill(1855, 154419, 154421); // 'state 603' -> implements..interface -> reduce (target=159, len=3)
actionsTable.fill(1855, 154422, 154425); // 'state 603' -> <..| -> reduce (target=159, len=3)
actionsTable[154425] = 508; // 'state 603' -> & -> shift (target=254, len=0)
actionsTable.fill(1855, 154426, 154429); // 'state 603' -> =>..typeof -> reduce (target=159, len=3)
actionsTable.fill(1855, 154430, 154451); // 'state 603' -> new..accessibility_modifier -> reduce (target=159, len=3)
actionsTable.fill(1855, 154452, 154460); // 'state 603' -> equality_operator..@par-gen.EOF -> reduce (target=159, len=3)
actionsTable.fill(1857, 154624, 154647); // 'state 604' -> true..try -> reduce (target=160, len=3)
actionsTable.fill(1857, 154649, 154662); // 'state 604' -> switch..export -> reduce (target=160, len=3)
actionsTable[154663] = 1857; // 'state 604' -> = -> reduce (target=160, len=3)
actionsTable.fill(1857, 154665, 154674); // 'state 604' -> [..class -> reduce (target=160, len=3)
actionsTable.fill(1857, 154675, 154677); // 'state 604' -> implements..interface -> reduce (target=160, len=3)
actionsTable.fill(1857, 154678, 154685); // 'state 604' -> <..typeof -> reduce (target=160, len=3)
actionsTable.fill(1857, 154686, 154707); // 'state 604' -> new..accessibility_modifier -> reduce (target=160, len=3)
actionsTable.fill(1857, 154708, 154716); // 'state 604' -> equality_operator..@par-gen.EOF -> reduce (target=160, len=3)
actionsTable.fill(1865, 154880, 154903); // 'state 605' -> true..try -> reduce (target=164, len=3)
actionsTable.fill(1865, 154905, 154918); // 'state 605' -> switch..export -> reduce (target=164, len=3)
actionsTable[154919] = 1865; // 'state 605' -> = -> reduce (target=164, len=3)
actionsTable.fill(1865, 154921, 154930); // 'state 605' -> [..class -> reduce (target=164, len=3)
actionsTable.fill(1865, 154931, 154933); // 'state 605' -> implements..interface -> reduce (target=164, len=3)
actionsTable.fill(1865, 154934, 154941); // 'state 605' -> <..typeof -> reduce (target=164, len=3)
actionsTable.fill(1865, 154942, 154963); // 'state 605' -> new..accessibility_modifier -> reduce (target=164, len=3)
actionsTable.fill(1865, 154964, 154972); // 'state 605' -> equality_operator..@par-gen.EOF -> reduce (target=164, len=3)
actionsTable[155178] = 1352; // 'state 606' -> ] -> shift (target=676, len=0)
actionsTable[155192] = 506; // 'state 606' -> | -> shift (target=253, len=0)
actionsTable[155193] = 508; // 'state 606' -> & -> shift (target=254, len=0)
actionsTable[155419] = 1297; // 'state 607' -> : -> reduce (target=136, len=2)
actionsTable[155445] = 1297; // 'state 607' -> ?: -> reduce (target=136, len=2)
actionsTable[155450] = 680; // 'state 607' -> => -> shift (target=340, len=0)
actionsTable[155654] = 1367; // 'state 608' -> } -> reduce (target=171, len=2)
actionsTable[155656] = 1427; // 'state 608' -> ( -> reduce (target=201, len=2)
actionsTable[155657] = 1367; // 'state 608' -> ) -> reduce (target=171, len=2)
actionsTable[155661] = 1367; // 'state 608' -> ; -> reduce (target=171, len=2)
actionsTable[155666] = 1367; // 'state 608' -> of -> reduce (target=171, len=2)
actionsTable[155667] = 1427; // 'state 608' -> in -> reduce (target=201, len=2)
actionsTable[155675] = 1427; // 'state 608' -> : -> reduce (target=201, len=2)
actionsTable.fill(1367, 155680, 155682); // 'state 608' -> from.., -> reduce (target=171, len=2)
actionsTable.fill(1427, 155682, 155684); // 'state 608' -> *..as -> reduce (target=201, len=2)
actionsTable[155684] = 1367; // 'state 608' -> type -> reduce (target=171, len=2)
actionsTable[155687] = 1427; // 'state 608' -> = -> reduce (target=201, len=2)
actionsTable.fill(1367, 155689, 155692); // 'state 608' -> [..async -> reduce (target=171, len=2)
actionsTable.fill(1367, 155694, 155697); // 'state 608' -> readonly..set -> reduce (target=171, len=2)
actionsTable.fill(1427, 155701, 155704); // 'state 608' -> ?:..> -> reduce (target=201, len=2)
actionsTable.fill(1367, 155704, 155706); // 'state 608' -> |..& -> reduce (target=171, len=2)
actionsTable[155710] = 1367; // 'state 608' -> new -> reduce (target=171, len=2)
actionsTable.fill(1427, 155711, 155720); // 'state 608' -> ?..** -> reduce (target=201, len=2)
actionsTable.fill(1427, 155724, 155726); // 'state 608' -> ?.... -> reduce (target=201, len=2)
actionsTable.fill(1367, 155727, 155729); // 'state 608' -> number..string -> reduce (target=171, len=2)
actionsTable.fill(1427, 155731, 155737); // 'state 608' -> compound_assignment_operator..update_operator -> reduce (target=201, len=2)
actionsTable[155737] = 1367; // 'state 608' -> identifier -> reduce (target=171, len=2)
actionsTable[155910] = 837; // 'state 609' -> } -> reduce (target=162, len=1)
actionsTable[155912] = 869; // 'state 609' -> ( -> reduce (target=178, len=1)
actionsTable[155913] = 837; // 'state 609' -> ) -> reduce (target=162, len=1)
actionsTable[155917] = 837; // 'state 609' -> ; -> reduce (target=162, len=1)
actionsTable[155922] = 837; // 'state 609' -> of -> reduce (target=162, len=1)
actionsTable[155923] = 869; // 'state 609' -> in -> reduce (target=178, len=1)
actionsTable.fill(837, 155936, 155938); // 'state 609' -> from.., -> reduce (target=162, len=1)
actionsTable.fill(869, 155938, 155940); // 'state 609' -> *..as -> reduce (target=178, len=1)
actionsTable[155940] = 837; // 'state 609' -> type -> reduce (target=162, len=1)
actionsTable.fill(837, 155945, 155948); // 'state 609' -> [..async -> reduce (target=162, len=1)
actionsTable.fill(837, 155950, 155953); // 'state 609' -> readonly..set -> reduce (target=162, len=1)
actionsTable.fill(869, 155958, 155960); // 'state 609' -> <..> -> reduce (target=178, len=1)
actionsTable.fill(837, 155960, 155962); // 'state 609' -> |..& -> reduce (target=162, len=1)
actionsTable[155966] = 837; // 'state 609' -> new -> reduce (target=162, len=1)
actionsTable.fill(869, 155967, 155976); // 'state 609' -> ?..** -> reduce (target=178, len=1)
actionsTable.fill(869, 155980, 155982); // 'state 609' -> ?.... -> reduce (target=178, len=1)
actionsTable.fill(837, 155983, 155985); // 'state 609' -> number..string -> reduce (target=162, len=1)
actionsTable.fill(869, 155988, 155993); // 'state 609' -> equality_operator..update_operator -> reduce (target=178, len=1)
actionsTable[155993] = 837; // 'state 609' -> identifier -> reduce (target=162, len=1)
actionsTable[156166] = 1357; // 'state 610' -> } -> reduce (target=166, len=2)
actionsTable[156168] = 1423; // 'state 610' -> ( -> reduce (target=199, len=2)
actionsTable[156169] = 1357; // 'state 610' -> ) -> reduce (target=166, len=2)
actionsTable[156173] = 1357; // 'state 610' -> ; -> reduce (target=166, len=2)
actionsTable[156178] = 1357; // 'state 610' -> of -> reduce (target=166, len=2)
actionsTable[156179] = 1423; // 'state 610' -> in -> reduce (target=199, len=2)
actionsTable[156187] = 1423; // 'state 610' -> : -> reduce (target=199, len=2)
actionsTable.fill(1357, 156192, 156194); // 'state 610' -> from.., -> reduce (target=166, len=2)
actionsTable.fill(1423, 156194, 156196); // 'state 610' -> *..as -> reduce (target=199, len=2)
actionsTable[156196] = 1357; // 'state 610' -> type -> reduce (target=166, len=2)
actionsTable[156199] = 1423; // 'state 610' -> = -> reduce (target=199, len=2)
actionsTable.fill(1357, 156201, 156204); // 'state 610' -> [..async -> reduce (target=166, len=2)
actionsTable.fill(1357, 156206, 156209); // 'state 610' -> readonly..set -> reduce (target=166, len=2)
actionsTable.fill(1423, 156213, 156216); // 'state 610' -> ?:..> -> reduce (target=199, len=2)
actionsTable.fill(1357, 156216, 156218); // 'state 610' -> |..& -> reduce (target=166, len=2)
actionsTable[156222] = 1357; // 'state 610' -> new -> reduce (target=166, len=2)
actionsTable.fill(1423, 156223, 156232); // 'state 610' -> ?..** -> reduce (target=199, len=2)
actionsTable.fill(1423, 156236, 156238); // 'state 610' -> ?.... -> reduce (target=199, len=2)
actionsTable.fill(1357, 156239, 156241); // 'state 610' -> number..string -> reduce (target=166, len=2)
actionsTable.fill(1423, 156243, 156249); // 'state 610' -> compound_assignment_operator..update_operator -> reduce (target=199, len=2)
actionsTable[156249] = 1357; // 'state 610' -> identifier -> reduce (target=166, len=2)
actionsTable.fill(1871, 156416, 156439); // 'state 611' -> true..try -> reduce (target=167, len=3)
actionsTable.fill(1871, 156441, 156454); // 'state 611' -> switch..export -> reduce (target=167, len=3)
actionsTable[156455] = 1871; // 'state 611' -> = -> reduce (target=167, len=3)
actionsTable.fill(1871, 156457, 156466); // 'state 611' -> [..class -> reduce (target=167, len=3)
actionsTable.fill(1871, 156467, 156469); // 'state 611' -> implements..interface -> reduce (target=167, len=3)
actionsTable.fill(1871, 156470, 156477); // 'state 611' -> <..typeof -> reduce (target=167, len=3)
actionsTable.fill(1871, 156478, 156499); // 'state 611' -> new..accessibility_modifier -> reduce (target=167, len=3)
actionsTable.fill(1871, 156500, 156508); // 'state 611' -> equality_operator..@par-gen.EOF -> reduce (target=167, len=3)
actionsTable.fill(1859, 156672, 156695); // 'state 612' -> true..try -> reduce (target=161, len=3)
actionsTable.fill(1859, 156697, 156710); // 'state 612' -> switch..export -> reduce (target=161, len=3)
actionsTable[156711] = 1859; // 'state 612' -> = -> reduce (target=161, len=3)
actionsTable.fill(1859, 156713, 156722); // 'state 612' -> [..class -> reduce (target=161, len=3)
actionsTable.fill(1859, 156723, 156725); // 'state 612' -> implements..interface -> reduce (target=161, len=3)
actionsTable.fill(1859, 156726, 156733); // 'state 612' -> <..typeof -> reduce (target=161, len=3)
actionsTable.fill(1859, 156734, 156755); // 'state 612' -> new..accessibility_modifier -> reduce (target=161, len=3)
actionsTable.fill(1859, 156756, 156764); // 'state 612' -> equality_operator..@par-gen.EOF -> reduce (target=161, len=3)
actionsTable.fill(1875, 156928, 156951); // 'state 613' -> true..try -> reduce (target=169, len=3)
actionsTable.fill(1875, 156953, 156966); // 'state 613' -> switch..export -> reduce (target=169, len=3)
actionsTable[156967] = 1875; // 'state 613' -> = -> reduce (target=169, len=3)
actionsTable.fill(1875, 156969, 156978); // 'state 613' -> [..class -> reduce (target=169, len=3)
actionsTable.fill(1875, 156979, 156981); // 'state 613' -> implements..interface -> reduce (target=169, len=3)
actionsTable.fill(1875, 156982, 156984); // 'state 613' -> <..> -> reduce (target=169, len=3)
actionsTable[156984] = 506; // 'state 613' -> | -> shift (target=253, len=0)
actionsTable[156985] = 508; // 'state 613' -> & -> shift (target=254, len=0)
actionsTable.fill(1875, 156986, 156989); // 'state 613' -> =>..typeof -> reduce (target=169, len=3)
actionsTable.fill(1875, 156990, 157011); // 'state 613' -> new..accessibility_modifier -> reduce (target=169, len=3)
actionsTable.fill(1875, 157012, 157020); // 'state 613' -> equality_operator..@par-gen.EOF -> reduce (target=169, len=3)
actionsTable.fill(1869, 157184, 157207); // 'state 614' -> true..try -> reduce (target=166, len=3)
actionsTable.fill(1869, 157209, 157222); // 'state 614' -> switch..export -> reduce (target=166, len=3)
actionsTable[157223] = 1869; // 'state 614' -> = -> reduce (target=166, len=3)
actionsTable.fill(1869, 157225, 157234); // 'state 614' -> [..class -> reduce (target=166, len=3)
actionsTable.fill(1869, 157235, 157237); // 'state 614' -> implements..interface -> reduce (target=166, len=3)
actionsTable.fill(1869, 157238, 157245); // 'state 614' -> <..typeof -> reduce (target=166, len=3)
actionsTable.fill(1869, 157246, 157267); // 'state 614' -> new..accessibility_modifier -> reduce (target=166, len=3)
actionsTable.fill(1869, 157268, 157276); // 'state 614' -> equality_operator..@par-gen.EOF -> reduce (target=166, len=3)
actionsTable[157473] = 704; // 'state 615' -> , -> shift (target=352, len=0)
actionsTable[157482] = 1368; // 'state 615' -> ] -> shift (target=684, len=0)
actionsTable.fill(1879, 157696, 157719); // 'state 616' -> true..try -> reduce (target=171, len=3)
actionsTable.fill(1879, 157721, 157734); // 'state 616' -> switch..export -> reduce (target=171, len=3)
actionsTable[157735] = 1879; // 'state 616' -> = -> reduce (target=171, len=3)
actionsTable.fill(1879, 157737, 157746); // 'state 616' -> [..class -> reduce (target=171, len=3)
actionsTable.fill(1879, 157747, 157749); // 'state 616' -> implements..interface -> reduce (target=171, len=3)
actionsTable.fill(1879, 157750, 157757); // 'state 616' -> <..typeof -> reduce (target=171, len=3)
actionsTable.fill(1879, 157758, 157779); // 'state 616' -> new..accessibility_modifier -> reduce (target=171, len=3)
actionsTable.fill(1879, 157780, 157788); // 'state 616' -> equality_operator..@par-gen.EOF -> reduce (target=171, len=3)
actionsTable[157958] = 1365; // 'state 617' -> } -> reduce (target=170, len=2)
actionsTable[157965] = 1370; // 'state 617' -> ; -> shift (target=685, len=0)
actionsTable[157970] = 1365; // 'state 617' -> of -> reduce (target=170, len=2)
actionsTable[157984] = 1365; // 'state 617' -> from -> reduce (target=170, len=2)
actionsTable[157985] = 1370; // 'state 617' -> , -> shift (target=685, len=0)
actionsTable[157988] = 1365; // 'state 617' -> type -> reduce (target=170, len=2)
actionsTable[157993] = 1365; // 'state 617' -> [ -> reduce (target=170, len=2)
actionsTable[157995] = 1365; // 'state 617' -> async -> reduce (target=170, len=2)
actionsTable.fill(1365, 157998, 158001); // 'state 617' -> readonly..set -> reduce (target=170, len=2)
actionsTable[158014] = 1365; // 'state 617' -> new -> reduce (target=170, len=2)
actionsTable.fill(1365, 158031, 158033); // 'state 617' -> number..string -> reduce (target=170, len=2)
actionsTable[158041] = 1365; // 'state 617' -> identifier -> reduce (target=170, len=2)
actionsTable[158214] = 1365; // 'state 618' -> } -> reduce (target=170, len=2)
actionsTable[158226] = 1365; // 'state 618' -> of -> reduce (target=170, len=2)
actionsTable[158240] = 1365; // 'state 618' -> from -> reduce (target=170, len=2)
actionsTable[158244] = 1365; // 'state 618' -> type -> reduce (target=170, len=2)
actionsTable[158249] = 1365; // 'state 618' -> [ -> reduce (target=170, len=2)
actionsTable[158251] = 1365; // 'state 618' -> async -> reduce (target=170, len=2)
actionsTable.fill(1365, 158254, 158257); // 'state 618' -> readonly..set -> reduce (target=170, len=2)
actionsTable[158270] = 1365; // 'state 618' -> new -> reduce (target=170, len=2)
actionsTable.fill(1365, 158287, 158289); // 'state 618' -> number..string -> reduce (target=170, len=2)
actionsTable[158297] = 1365; // 'state 618' -> identifier -> reduce (target=170, len=2)
actionsTable[158470] = 1369; // 'state 619' -> } -> reduce (target=172, len=2)
actionsTable[158477] = 1369; // 'state 619' -> ; -> reduce (target=172, len=2)
actionsTable[158482] = 1369; // 'state 619' -> of -> reduce (target=172, len=2)
actionsTable.fill(1369, 158496, 158498); // 'state 619' -> from.., -> reduce (target=172, len=2)
actionsTable[158500] = 1369; // 'state 619' -> type -> reduce (target=172, len=2)
actionsTable[158505] = 1369; // 'state 619' -> [ -> reduce (target=172, len=2)
actionsTable[158507] = 1369; // 'state 619' -> async -> reduce (target=172, len=2)
actionsTable.fill(1369, 158510, 158513); // 'state 619' -> readonly..set -> reduce (target=172, len=2)
actionsTable[158526] = 1369; // 'state 619' -> new -> reduce (target=172, len=2)
actionsTable.fill(1369, 158543, 158545); // 'state 619' -> number..string -> reduce (target=172, len=2)
actionsTable[158553] = 1369; // 'state 619' -> identifier -> reduce (target=172, len=2)
actionsTable[158728] = 869; // 'state 620' -> ( -> reduce (target=178, len=1)
actionsTable[158739] = 710; // 'state 620' -> in -> shift (target=355, len=0)
actionsTable[158747] = 710; // 'state 620' -> : -> shift (target=355, len=0)
actionsTable.fill(869, 158753, 158756); // 'state 620' -> ,..as -> reduce (target=178, len=1)
actionsTable[158759] = 875; // 'state 620' -> = -> reduce (target=181, len=1)
actionsTable.fill(869, 158761, 158763); // 'state 620' -> [..] -> reduce (target=178, len=1)
actionsTable.fill(869, 158774, 158778); // 'state 620' -> <..& -> reduce (target=178, len=1)
actionsTable[158778] = 162; // 'state 620' -> => -> shift (target=81, len=0)
actionsTable.fill(869, 158783, 158792); // 'state 620' -> ?..** -> reduce (target=178, len=1)
actionsTable.fill(869, 158796, 158798); // 'state 620' -> ?.... -> reduce (target=178, len=1)
actionsTable[158803] = 875; // 'state 620' -> compound_assignment_operator -> reduce (target=181, len=1)
actionsTable.fill(869, 158804, 158809); // 'state 620' -> equality_operator..update_operator -> reduce (target=178, len=1)
actionsTable.fill(2949, 158976, 158999); // 'state 621' -> true..try -> reduce (target=194, len=5)
actionsTable.fill(2949, 159001, 159014); // 'state 621' -> switch..export -> reduce (target=194, len=5)
actionsTable[159015] = 2949; // 'state 621' -> = -> reduce (target=194, len=5)
actionsTable.fill(2949, 159017, 159026); // 'state 621' -> [..class -> reduce (target=194, len=5)
actionsTable.fill(2949, 159027, 159029); // 'state 621' -> implements..interface -> reduce (target=194, len=5)
actionsTable.fill(2949, 159030, 159034); // 'state 621' -> <..& -> reduce (target=194, len=5)
actionsTable.fill(2949, 159035, 159037); // 'state 621' -> void..typeof -> reduce (target=194, len=5)
actionsTable.fill(2949, 159038, 159068); // 'state 621' -> new..@par-gen.EOF -> reduce (target=194, len=5)
actionsTable.fill(2439, 159232, 159255); // 'state 622' -> true..try -> reduce (target=195, len=4)
actionsTable.fill(2439, 159257, 159270); // 'state 622' -> switch..export -> reduce (target=195, len=4)
actionsTable.fill(2439, 159273, 159282); // 'state 622' -> [..class -> reduce (target=195, len=4)
actionsTable.fill(2439, 159283, 159285); // 'state 622' -> implements..interface -> reduce (target=195, len=4)
actionsTable.fill(2439, 159286, 159290); // 'state 622' -> <..& -> reduce (target=195, len=4)
actionsTable.fill(2439, 159291, 159293); // 'state 622' -> void..typeof -> reduce (target=195, len=4)
actionsTable.fill(2439, 159294, 159315); // 'state 622' -> new..accessibility_modifier -> reduce (target=195, len=4)
actionsTable.fill(2439, 159316, 159324); // 'state 622' -> equality_operator..@par-gen.EOF -> reduce (target=195, len=4)
actionsTable.fill(2795, 159488, 159497); // 'state 623' -> true..( -> reduce (target=117, len=5)
actionsTable.fill(2795, 159498, 159501); // 'state 623' -> else..do -> reduce (target=117, len=5)
actionsTable.fill(2795, 159502, 159507); // 'state 623' -> for..of -> reduce (target=117, len=5)
actionsTable.fill(2795, 159508, 159511); // 'state 623' -> return..try -> reduce (target=117, len=5)
actionsTable.fill(2795, 159513, 159515); // 'state 623' -> switch..case -> reduce (target=117, len=5)
actionsTable.fill(2795, 159516, 159521); // 'state 623' -> default..from -> reduce (target=117, len=5)
actionsTable.fill(2795, 159524, 159526); // 'state 623' -> type..export -> reduce (target=117, len=5)
actionsTable[159529] = 2795; // 'state 623' -> [ -> reduce (target=117, len=5)
actionsTable.fill(2795, 159531, 159533); // 'state 623' -> async..function -> reduce (target=117, len=5)
actionsTable.fill(2795, 159535, 159538); // 'state 623' -> get..class -> reduce (target=117, len=5)
actionsTable[159540] = 2795; // 'state 623' -> interface -> reduce (target=117, len=5)
actionsTable[159542] = 2795; // 'state 623' -> < -> reduce (target=117, len=5)
actionsTable.fill(2795, 159547, 159549); // 'state 623' -> void..typeof -> reduce (target=117, len=5)
actionsTable[159550] = 2795; // 'state 623' -> new -> reduce (target=117, len=5)
actionsTable.fill(2795, 159557, 159559); // 'state 623' -> +..- -> reduce (target=117, len=5)
actionsTable.fill(2795, 159560, 159564); // 'state 623' -> !..await -> reduce (target=117, len=5)
actionsTable.fill(2795, 159567, 159570); // 'state 623' -> number..template_string -> reduce (target=117, len=5)
actionsTable.fill(2795, 159576, 159580); // 'state 623' -> update_operator..@par-gen.EOF -> reduce (target=117, len=5)
actionsTable.fill(2291, 159744, 159753); // 'state 624' -> true..( -> reduce (target=121, len=4)
actionsTable.fill(2291, 159754, 159763); // 'state 624' -> else..of -> reduce (target=121, len=4)
actionsTable.fill(2291, 159764, 159767); // 'state 624' -> return..try -> reduce (target=121, len=4)
actionsTable.fill(2291, 159769, 159771); // 'state 624' -> switch..case -> reduce (target=121, len=4)
actionsTable.fill(2291, 159772, 159777); // 'state 624' -> default..from -> reduce (target=121, len=4)
actionsTable.fill(2291, 159780, 159782); // 'state 624' -> type..export -> reduce (target=121, len=4)
actionsTable[159785] = 2291; // 'state 624' -> [ -> reduce (target=121, len=4)
actionsTable.fill(2291, 159787, 159789); // 'state 624' -> async..function -> reduce (target=121, len=4)
actionsTable.fill(2291, 159791, 159794); // 'state 624' -> get..class -> reduce (target=121, len=4)
actionsTable[159796] = 2291; // 'state 624' -> interface -> reduce (target=121, len=4)
actionsTable[159798] = 2291; // 'state 624' -> < -> reduce (target=121, len=4)
actionsTable.fill(2291, 159803, 159805); // 'state 624' -> void..typeof -> reduce (target=121, len=4)
actionsTable[159806] = 2291; // 'state 624' -> new -> reduce (target=121, len=4)
actionsTable.fill(2291, 159813, 159815); // 'state 624' -> +..- -> reduce (target=121, len=4)
actionsTable.fill(2291, 159816, 159820); // 'state 624' -> !..await -> reduce (target=121, len=4)
actionsTable.fill(2291, 159823, 159826); // 'state 624' -> number..template_string -> reduce (target=121, len=4)
actionsTable.fill(2291, 159832, 159836); // 'state 624' -> update_operator..@par-gen.EOF -> reduce (target=121, len=4)
actionsTable[160006] = 1265; // 'state 625' -> } -> reduce (target=120, len=2)
actionsTable[160033] = 1265; // 'state 625' -> , -> reduce (target=120, len=2)
actionsTable[160345] = 1386; // 'state 626' -> identifier -> shift (target=693, len=0)
actionsTable[160518] = 1781; // 'state 627' -> } -> reduce (target=122, len=3)
actionsTable[160545] = 1781; // 'state 627' -> , -> reduce (target=122, len=3)
actionsTable.fill(2317, 160768, 160777); // 'state 628' -> true..( -> reduce (target=134, len=4)
actionsTable.fill(2317, 160778, 160781); // 'state 628' -> else..do -> reduce (target=134, len=4)
actionsTable.fill(2317, 160782, 160787); // 'state 628' -> for..of -> reduce (target=134, len=4)
actionsTable.fill(2317, 160788, 160791); // 'state 628' -> return..try -> reduce (target=134, len=4)
actionsTable.fill(2317, 160793, 160795); // 'state 628' -> switch..case -> reduce (target=134, len=4)
actionsTable.fill(2317, 160796, 160801); // 'state 628' -> default..from -> reduce (target=134, len=4)
actionsTable.fill(2317, 160804, 160806); // 'state 628' -> type..export -> reduce (target=134, len=4)
actionsTable[160809] = 2317; // 'state 628' -> [ -> reduce (target=134, len=4)
actionsTable.fill(2317, 160811, 160813); // 'state 628' -> async..function -> reduce (target=134, len=4)
actionsTable.fill(2317, 160815, 160818); // 'state 628' -> get..class -> reduce (target=134, len=4)
actionsTable[160820] = 2317; // 'state 628' -> interface -> reduce (target=134, len=4)
actionsTable[160822] = 2317; // 'state 628' -> < -> reduce (target=134, len=4)
actionsTable.fill(2317, 160827, 160829); // 'state 628' -> void..typeof -> reduce (target=134, len=4)
actionsTable[160830] = 2317; // 'state 628' -> new -> reduce (target=134, len=4)
actionsTable.fill(2317, 160837, 160839); // 'state 628' -> +..- -> reduce (target=134, len=4)
actionsTable.fill(2317, 160840, 160844); // 'state 628' -> !..await -> reduce (target=134, len=4)
actionsTable.fill(2317, 160847, 160850); // 'state 628' -> number..template_string -> reduce (target=134, len=4)
actionsTable.fill(2317, 160856, 160860); // 'state 628' -> update_operator..@par-gen.EOF -> reduce (target=134, len=4)
actionsTable.fill(2333, 161024, 161033); // 'state 629' -> true..( -> reduce (target=142, len=4)
actionsTable.fill(2333, 161034, 161037); // 'state 629' -> else..do -> reduce (target=142, len=4)
actionsTable.fill(2333, 161038, 161043); // 'state 629' -> for..of -> reduce (target=142, len=4)
actionsTable.fill(2333, 161044, 161047); // 'state 629' -> return..try -> reduce (target=142, len=4)
actionsTable.fill(2333, 161049, 161051); // 'state 629' -> switch..case -> reduce (target=142, len=4)
actionsTable.fill(2333, 161052, 161057); // 'state 629' -> default..from -> reduce (target=142, len=4)
actionsTable.fill(2333, 161060, 161062); // 'state 629' -> type..export -> reduce (target=142, len=4)
actionsTable[161065] = 2333; // 'state 629' -> [ -> reduce (target=142, len=4)
actionsTable.fill(2333, 161067, 161069); // 'state 629' -> async..function -> reduce (target=142, len=4)
actionsTable.fill(2333, 161071, 161074); // 'state 629' -> get..class -> reduce (target=142, len=4)
actionsTable[161076] = 2333; // 'state 629' -> interface -> reduce (target=142, len=4)
actionsTable[161078] = 2333; // 'state 629' -> < -> reduce (target=142, len=4)
actionsTable.fill(2333, 161083, 161085); // 'state 629' -> void..typeof -> reduce (target=142, len=4)
actionsTable[161086] = 2333; // 'state 629' -> new -> reduce (target=142, len=4)
actionsTable.fill(2333, 161093, 161095); // 'state 629' -> +..- -> reduce (target=142, len=4)
actionsTable.fill(2333, 161096, 161100); // 'state 629' -> !..await -> reduce (target=142, len=4)
actionsTable.fill(2333, 161103, 161106); // 'state 629' -> number..template_string -> reduce (target=142, len=4)
actionsTable.fill(2333, 161112, 161116); // 'state 629' -> update_operator..@par-gen.EOF -> reduce (target=142, len=4)
actionsTable.fill(2807, 161280, 161289); // 'state 630' -> true..( -> reduce (target=123, len=5)
actionsTable.fill(2807, 161290, 161293); // 'state 630' -> else..do -> reduce (target=123, len=5)
actionsTable.fill(2807, 161294, 161299); // 'state 630' -> for..of -> reduce (target=123, len=5)
actionsTable.fill(2807, 161300, 161303); // 'state 630' -> return..try -> reduce (target=123, len=5)
actionsTable.fill(2807, 161305, 161307); // 'state 630' -> switch..case -> reduce (target=123, len=5)
actionsTable.fill(2807, 161308, 161313); // 'state 630' -> default..from -> reduce (target=123, len=5)
actionsTable.fill(2807, 161316, 161318); // 'state 630' -> type..export -> reduce (target=123, len=5)
actionsTable[161321] = 2807; // 'state 630' -> [ -> reduce (target=123, len=5)
actionsTable.fill(2807, 161323, 161325); // 'state 630' -> async..function -> reduce (target=123, len=5)
actionsTable.fill(2807, 161327, 161330); // 'state 630' -> get..class -> reduce (target=123, len=5)
actionsTable[161332] = 2807; // 'state 630' -> interface -> reduce (target=123, len=5)
actionsTable[161334] = 2807; // 'state 630' -> < -> reduce (target=123, len=5)
actionsTable.fill(2807, 161339, 161341); // 'state 630' -> void..typeof -> reduce (target=123, len=5)
actionsTable[161342] = 2807; // 'state 630' -> new -> reduce (target=123, len=5)
actionsTable.fill(2807, 161349, 161351); // 'state 630' -> +..- -> reduce (target=123, len=5)
actionsTable.fill(2807, 161352, 161356); // 'state 630' -> !..await -> reduce (target=123, len=5)
actionsTable.fill(2807, 161359, 161362); // 'state 630' -> number..template_string -> reduce (target=123, len=5)
actionsTable.fill(2807, 161368, 161372); // 'state 630' -> update_operator..@par-gen.EOF -> reduce (target=123, len=5)
actionsTable[161616] = 1392; // 'state 631' -> string -> shift (target=696, len=0)
actionsTable.fill(1785, 161792, 161801); // 'state 632' -> true..( -> reduce (target=124, len=3)
actionsTable.fill(1785, 161802, 161811); // 'state 632' -> else..of -> reduce (target=124, len=3)
actionsTable.fill(1785, 161812, 161815); // 'state 632' -> return..try -> reduce (target=124, len=3)
actionsTable.fill(1785, 161817, 161819); // 'state 632' -> switch..case -> reduce (target=124, len=3)
actionsTable.fill(1785, 161820, 161826); // 'state 632' -> default.., -> reduce (target=124, len=3)
actionsTable.fill(1785, 161828, 161830); // 'state 632' -> type..export -> reduce (target=124, len=3)
actionsTable[161833] = 1785; // 'state 632' -> [ -> reduce (target=124, len=3)
actionsTable.fill(1785, 161835, 161837); // 'state 632' -> async..function -> reduce (target=124, len=3)
actionsTable.fill(1785, 161839, 161842); // 'state 632' -> get..class -> reduce (target=124, len=3)
actionsTable[161844] = 1785; // 'state 632' -> interface -> reduce (target=124, len=3)
actionsTable[161846] = 1785; // 'state 632' -> < -> reduce (target=124, len=3)
actionsTable.fill(1785, 161851, 161853); // 'state 632' -> void..typeof -> reduce (target=124, len=3)
actionsTable[161854] = 1785; // 'state 632' -> new -> reduce (target=124, len=3)
actionsTable.fill(1785, 161861, 161863); // 'state 632' -> +..- -> reduce (target=124, len=3)
actionsTable.fill(1785, 161864, 161868); // 'state 632' -> !..await -> reduce (target=124, len=3)
actionsTable.fill(1785, 161871, 161874); // 'state 632' -> number..template_string -> reduce (target=124, len=3)
actionsTable.fill(1785, 161880, 161884); // 'state 632' -> update_operator..@par-gen.EOF -> reduce (target=124, len=3)
actionsTable.fill(2307, 162048, 162071); // 'state 633' -> true..try -> reduce (target=129, len=4)
actionsTable.fill(2307, 162073, 162082); // 'state 633' -> switch.., -> reduce (target=129, len=4)
actionsTable.fill(2307, 162084, 162086); // 'state 633' -> type..export -> reduce (target=129, len=4)
actionsTable[162087] = 2307; // 'state 633' -> = -> reduce (target=129, len=4)
actionsTable.fill(2307, 162089, 162093); // 'state 633' -> [..function -> reduce (target=129, len=4)
actionsTable.fill(2307, 162095, 162098); // 'state 633' -> get..class -> reduce (target=129, len=4)
actionsTable.fill(2307, 162100, 162103); // 'state 633' -> interface..< -> reduce (target=129, len=4)
actionsTable.fill(2307, 162107, 162109); // 'state 633' -> void..typeof -> reduce (target=129, len=4)
actionsTable[162110] = 2307; // 'state 633' -> new -> reduce (target=129, len=4)
actionsTable.fill(2307, 162117, 162119); // 'state 633' -> +..- -> reduce (target=129, len=4)
actionsTable.fill(2307, 162120, 162124); // 'state 633' -> !..await -> reduce (target=129, len=4)
actionsTable.fill(2307, 162127, 162130); // 'state 633' -> number..template_string -> reduce (target=129, len=4)
actionsTable.fill(2307, 162136, 162140); // 'state 633' -> update_operator..@par-gen.EOF -> reduce (target=129, len=4)
actionsTable[162310] = 1281; // 'state 634' -> } -> reduce (target=128, len=2)
actionsTable[162337] = 1281; // 'state 634' -> , -> reduce (target=128, len=2)
actionsTable[162566] = 1797; // 'state 635' -> } -> reduce (target=130, len=3)
actionsTable[162593] = 1797; // 'state 635' -> , -> reduce (target=130, len=3)
actionsTable[162599] = 716; // 'state 635' -> = -> shift (target=358, len=0)
actionsTable.fill(2313, 162816, 162839); // 'state 636' -> true..try -> reduce (target=132, len=4)
actionsTable.fill(2313, 162841, 162850); // 'state 636' -> switch.., -> reduce (target=132, len=4)
actionsTable.fill(2313, 162852, 162854); // 'state 636' -> type..export -> reduce (target=132, len=4)
actionsTable[162855] = 2313; // 'state 636' -> = -> reduce (target=132, len=4)
actionsTable.fill(2313, 162857, 162861); // 'state 636' -> [..function -> reduce (target=132, len=4)
actionsTable.fill(2313, 162863, 162866); // 'state 636' -> get..class -> reduce (target=132, len=4)
actionsTable.fill(2313, 162868, 162871); // 'state 636' -> interface..< -> reduce (target=132, len=4)
actionsTable.fill(2313, 162875, 162877); // 'state 636' -> void..typeof -> reduce (target=132, len=4)
actionsTable[162878] = 2313; // 'state 636' -> new -> reduce (target=132, len=4)
actionsTable.fill(2313, 162885, 162887); // 'state 636' -> +..- -> reduce (target=132, len=4)
actionsTable.fill(2313, 162888, 162892); // 'state 636' -> !..await -> reduce (target=132, len=4)
actionsTable.fill(2313, 162895, 162898); // 'state 636' -> number..template_string -> reduce (target=132, len=4)
actionsTable.fill(2313, 162904, 162908); // 'state 636' -> update_operator..@par-gen.EOF -> reduce (target=132, len=4)
actionsTable[163105] = 620; // 'state 637' -> , -> shift (target=310, len=0)
actionsTable[163114] = 1398; // 'state 637' -> ] -> shift (target=699, len=0)
actionsTable[163361] = 1287; // 'state 638' -> , -> reduce (target=131, len=2)
actionsTable[163370] = 1287; // 'state 638' -> ] -> reduce (target=131, len=2)
actionsTable.fill(2829, 163584, 163593); // 'state 639' -> true..( -> reduce (target=134, len=5)
actionsTable.fill(2829, 163594, 163603); // 'state 639' -> else..of -> reduce (target=134, len=5)
actionsTable.fill(2829, 163604, 163607); // 'state 639' -> return..try -> reduce (target=134, len=5)
actionsTable.fill(2829, 163609, 163611); // 'state 639' -> switch..case -> reduce (target=134, len=5)
actionsTable.fill(2829, 163612, 163617); // 'state 639' -> default..from -> reduce (target=134, len=5)
actionsTable.fill(2829, 163620, 163622); // 'state 639' -> type..export -> reduce (target=134, len=5)
actionsTable[163625] = 2829; // 'state 639' -> [ -> reduce (target=134, len=5)
actionsTable.fill(2829, 163627, 163629); // 'state 639' -> async..function -> reduce (target=134, len=5)
actionsTable.fill(2829, 163631, 163634); // 'state 639' -> get..class -> reduce (target=134, len=5)
actionsTable[163636] = 2829; // 'state 639' -> interface -> reduce (target=134, len=5)
actionsTable[163638] = 2829; // 'state 639' -> < -> reduce (target=134, len=5)
actionsTable.fill(2829, 163643, 163645); // 'state 639' -> void..typeof -> reduce (target=134, len=5)
actionsTable[163646] = 2829; // 'state 639' -> new -> reduce (target=134, len=5)
actionsTable.fill(2829, 163653, 163655); // 'state 639' -> +..- -> reduce (target=134, len=5)
actionsTable.fill(2829, 163656, 163660); // 'state 639' -> !..await -> reduce (target=134, len=5)
actionsTable.fill(2829, 163663, 163666); // 'state 639' -> number..template_string -> reduce (target=134, len=5)
actionsTable.fill(2829, 163672, 163676); // 'state 639' -> update_operator..@par-gen.EOF -> reduce (target=134, len=5)
actionsTable.fill(2829, 163840, 163849); // 'state 640' -> true..( -> reduce (target=134, len=5)
actionsTable.fill(2829, 163850, 163859); // 'state 640' -> else..of -> reduce (target=134, len=5)
actionsTable[163859] = 2977; // 'state 640' -> in -> reduce (target=208, len=5)
actionsTable.fill(2829, 163860, 163863); // 'state 640' -> return..try -> reduce (target=134, len=5)
actionsTable.fill(2829, 163865, 163867); // 'state 640' -> switch..case -> reduce (target=134, len=5)
actionsTable.fill(2829, 163868, 163873); // 'state 640' -> default..from -> reduce (target=134, len=5)
actionsTable.fill(2977, 163874, 163876); // 'state 640' -> *..as -> reduce (target=208, len=5)
actionsTable.fill(2829, 163876, 163878); // 'state 640' -> type..export -> reduce (target=134, len=5)
actionsTable[163881] = 2829; // 'state 640' -> [ -> reduce (target=134, len=5)
actionsTable.fill(2829, 163883, 163885); // 'state 640' -> async..function -> reduce (target=134, len=5)
actionsTable.fill(2829, 163887, 163890); // 'state 640' -> get..class -> reduce (target=134, len=5)
actionsTable[163892] = 2829; // 'state 640' -> interface -> reduce (target=134, len=5)
actionsTable[163894] = 2829; // 'state 640' -> < -> reduce (target=134, len=5)
actionsTable.fill(2977, 163895, 163898); // 'state 640' -> >..& -> reduce (target=208, len=5)
actionsTable.fill(2829, 163899, 163901); // 'state 640' -> void..typeof -> reduce (target=134, len=5)
actionsTable[163902] = 2829; // 'state 640' -> new -> reduce (target=134, len=5)
actionsTable.fill(2977, 163903, 163909); // 'state 640' -> ?..instanceof -> reduce (target=208, len=5)
actionsTable.fill(2829, 163909, 163911); // 'state 640' -> +..- -> reduce (target=134, len=5)
actionsTable[163911] = 2977; // 'state 640' -> ** -> reduce (target=208, len=5)
actionsTable.fill(2829, 163912, 163916); // 'state 640' -> !..await -> reduce (target=134, len=5)
actionsTable.fill(2977, 163916, 163918); // 'state 640' -> ?.... -> reduce (target=208, len=5)
actionsTable.fill(2829, 163919, 163922); // 'state 640' -> number..template_string -> reduce (target=134, len=5)
actionsTable.fill(2977, 163924, 163928); // 'state 640' -> equality_operator..multiplicative_operator -> reduce (target=208, len=5)
actionsTable.fill(2829, 163928, 163932); // 'state 640' -> update_operator..@par-gen.EOF -> reduce (target=134, len=5)
actionsTable.fill(2977, 164096, 164119); // 'state 641' -> true..try -> reduce (target=208, len=5)
actionsTable.fill(2977, 164121, 164134); // 'state 641' -> switch..export -> reduce (target=208, len=5)
actionsTable.fill(2977, 164137, 164146); // 'state 641' -> [..class -> reduce (target=208, len=5)
actionsTable.fill(2977, 164147, 164149); // 'state 641' -> implements..interface -> reduce (target=208, len=5)
actionsTable.fill(2977, 164150, 164154); // 'state 641' -> <..& -> reduce (target=208, len=5)
actionsTable.fill(2977, 164155, 164157); // 'state 641' -> void..typeof -> reduce (target=208, len=5)
actionsTable.fill(2977, 164158, 164179); // 'state 641' -> new..accessibility_modifier -> reduce (target=208, len=5)
actionsTable.fill(2977, 164180, 164188); // 'state 641' -> equality_operator..@par-gen.EOF -> reduce (target=208, len=5)
actionsTable.fill(2929, 164352, 164375); // 'state 642' -> true..try -> reduce (target=184, len=5)
actionsTable.fill(2929, 164377, 164390); // 'state 642' -> switch..export -> reduce (target=184, len=5)
actionsTable.fill(2929, 164393, 164402); // 'state 642' -> [..class -> reduce (target=184, len=5)
actionsTable.fill(2929, 164403, 164405); // 'state 642' -> implements..interface -> reduce (target=184, len=5)
actionsTable.fill(2929, 164406, 164410); // 'state 642' -> <..& -> reduce (target=184, len=5)
actionsTable.fill(2929, 164411, 164413); // 'state 642' -> void..typeof -> reduce (target=184, len=5)
actionsTable.fill(2929, 164414, 164435); // 'state 642' -> new..accessibility_modifier -> reduce (target=184, len=5)
actionsTable.fill(2929, 164436, 164444); // 'state 642' -> equality_operator..@par-gen.EOF -> reduce (target=184, len=5)
actionsTable.fill(2317, 164608, 164617); // 'state 643' -> true..( -> reduce (target=134, len=4)
actionsTable.fill(2317, 164619, 164621); // 'state 643' -> while..do -> reduce (target=134, len=4)
actionsTable[164621] = 2465; // 'state 643' -> ; -> reduce (target=208, len=4)
actionsTable.fill(2317, 164622, 164627); // 'state 643' -> for..of -> reduce (target=134, len=4)
actionsTable[164627] = 2465; // 'state 643' -> in -> reduce (target=208, len=4)
actionsTable.fill(2317, 164628, 164631); // 'state 643' -> return..try -> reduce (target=134, len=4)
actionsTable[164633] = 2317; // 'state 643' -> switch -> reduce (target=134, len=4)
actionsTable.fill(2317, 164637, 164641); // 'state 643' -> break..from -> reduce (target=134, len=4)
actionsTable.fill(2465, 164642, 164644); // 'state 643' -> *..as -> reduce (target=208, len=4)
actionsTable.fill(2317, 164644, 164646); // 'state 643' -> type..export -> reduce (target=134, len=4)
actionsTable[164649] = 2317; // 'state 643' -> [ -> reduce (target=134, len=4)
actionsTable.fill(2317, 164651, 164653); // 'state 643' -> async..function -> reduce (target=134, len=4)
actionsTable.fill(2317, 164655, 164658); // 'state 643' -> get..class -> reduce (target=134, len=4)
actionsTable[164660] = 2317; // 'state 643' -> interface -> reduce (target=134, len=4)
actionsTable[164662] = 2317; // 'state 643' -> < -> reduce (target=134, len=4)
actionsTable.fill(2465, 164663, 164666); // 'state 643' -> >..& -> reduce (target=208, len=4)
actionsTable.fill(2317, 164667, 164669); // 'state 643' -> void..typeof -> reduce (target=134, len=4)
actionsTable[164670] = 2317; // 'state 643' -> new -> reduce (target=134, len=4)
actionsTable.fill(2465, 164671, 164677); // 'state 643' -> ?..instanceof -> reduce (target=208, len=4)
actionsTable.fill(2317, 164677, 164679); // 'state 643' -> +..- -> reduce (target=134, len=4)
actionsTable[164679] = 2465; // 'state 643' -> ** -> reduce (target=208, len=4)
actionsTable.fill(2317, 164680, 164684); // 'state 643' -> !..await -> reduce (target=134, len=4)
actionsTable.fill(2465, 164684, 164686); // 'state 643' -> ?.... -> reduce (target=208, len=4)
actionsTable.fill(2317, 164687, 164690); // 'state 643' -> number..template_string -> reduce (target=134, len=4)
actionsTable.fill(2465, 164692, 164696); // 'state 643' -> equality_operator..multiplicative_operator -> reduce (target=208, len=4)
actionsTable.fill(2317, 164696, 164700); // 'state 643' -> update_operator..@par-gen.EOF -> reduce (target=134, len=4)
actionsTable.fill(2321, 164869, 164871); // 'state 644' -> {..} -> reduce (target=136, len=4)
actionsTable[164877] = 2321; // 'state 644' -> ; -> reduce (target=136, len=4)
actionsTable[164882] = 2321; // 'state 644' -> of -> reduce (target=136, len=4)
actionsTable[164891] = 2321; // 'state 644' -> : -> reduce (target=136, len=4)
actionsTable.fill(2321, 164896, 164898); // 'state 644' -> from.., -> reduce (target=136, len=4)
actionsTable[164900] = 2321; // 'state 644' -> type -> reduce (target=136, len=4)
actionsTable[164905] = 2321; // 'state 644' -> [ -> reduce (target=136, len=4)
actionsTable[164907] = 2321; // 'state 644' -> async -> reduce (target=136, len=4)
actionsTable.fill(2321, 164910, 164913); // 'state 644' -> readonly..set -> reduce (target=136, len=4)
actionsTable[164917] = 2321; // 'state 644' -> ?: -> reduce (target=136, len=4)
actionsTable[164922] = 2321; // 'state 644' -> => -> reduce (target=136, len=4)
actionsTable[164926] = 2321; // 'state 644' -> new -> reduce (target=136, len=4)
actionsTable.fill(2321, 164943, 164945); // 'state 644' -> number..string -> reduce (target=136, len=4)
actionsTable[164953] = 2321; // 'state 644' -> identifier -> reduce (target=136, len=4)
actionsTable[165129] = 1295; // 'state 645' -> ) -> reduce (target=135, len=2)
actionsTable[165153] = 1295; // 'state 645' -> , -> reduce (target=135, len=2)
actionsTable[165385] = 1811; // 'state 646' -> ) -> reduce (target=137, len=3)
actionsTable[165409] = 1811; // 'state 646' -> , -> reduce (target=137, len=3)
actionsTable[165415] = 722; // 'state 646' -> = -> shift (target=361, len=0)
actionsTable[165641] = 1811; // 'state 647' -> ) -> reduce (target=137, len=3)
actionsTable[165665] = 1811; // 'state 647' -> , -> reduce (target=137, len=3)
actionsTable.fill(2845, 165888, 165897); // 'state 648' -> true..( -> reduce (target=142, len=5)
actionsTable.fill(2845, 165898, 165907); // 'state 648' -> else..of -> reduce (target=142, len=5)
actionsTable[165907] = 2979; // 'state 648' -> in -> reduce (target=209, len=5)
actionsTable.fill(2845, 165908, 165911); // 'state 648' -> return..try -> reduce (target=142, len=5)
actionsTable.fill(2845, 165913, 165915); // 'state 648' -> switch..case -> reduce (target=142, len=5)
actionsTable.fill(2845, 165916, 165921); // 'state 648' -> default..from -> reduce (target=142, len=5)
actionsTable.fill(2979, 165922, 165924); // 'state 648' -> *..as -> reduce (target=209, len=5)
actionsTable.fill(2845, 165924, 165926); // 'state 648' -> type..export -> reduce (target=142, len=5)
actionsTable[165929] = 2845; // 'state 648' -> [ -> reduce (target=142, len=5)
actionsTable.fill(2845, 165931, 165933); // 'state 648' -> async..function -> reduce (target=142, len=5)
actionsTable.fill(2845, 165935, 165938); // 'state 648' -> get..class -> reduce (target=142, len=5)
actionsTable[165940] = 2845; // 'state 648' -> interface -> reduce (target=142, len=5)
actionsTable[165942] = 2845; // 'state 648' -> < -> reduce (target=142, len=5)
actionsTable.fill(2979, 165943, 165946); // 'state 648' -> >..& -> reduce (target=209, len=5)
actionsTable.fill(2845, 165947, 165949); // 'state 648' -> void..typeof -> reduce (target=142, len=5)
actionsTable[165950] = 2845; // 'state 648' -> new -> reduce (target=142, len=5)
actionsTable.fill(2979, 165951, 165957); // 'state 648' -> ?..instanceof -> reduce (target=209, len=5)
actionsTable.fill(2845, 165957, 165959); // 'state 648' -> +..- -> reduce (target=142, len=5)
actionsTable[165959] = 2979; // 'state 648' -> ** -> reduce (target=209, len=5)
actionsTable.fill(2845, 165960, 165964); // 'state 648' -> !..await -> reduce (target=142, len=5)
actionsTable.fill(2979, 165964, 165966); // 'state 648' -> ?.... -> reduce (target=209, len=5)
actionsTable.fill(2845, 165967, 165970); // 'state 648' -> number..template_string -> reduce (target=142, len=5)
actionsTable.fill(2979, 165972, 165976); // 'state 648' -> equality_operator..multiplicative_operator -> reduce (target=209, len=5)
actionsTable.fill(2845, 165976, 165980); // 'state 648' -> update_operator..@par-gen.EOF -> reduce (target=142, len=5)
actionsTable.fill(2333, 166144, 166153); // 'state 649' -> true..( -> reduce (target=142, len=4)
actionsTable.fill(2333, 166155, 166157); // 'state 649' -> while..do -> reduce (target=142, len=4)
actionsTable[166157] = 2467; // 'state 649' -> ; -> reduce (target=209, len=4)
actionsTable.fill(2333, 166158, 166163); // 'state 649' -> for..of -> reduce (target=142, len=4)
actionsTable[166163] = 2467; // 'state 649' -> in -> reduce (target=209, len=4)
actionsTable.fill(2333, 166164, 166167); // 'state 649' -> return..try -> reduce (target=142, len=4)
actionsTable[166169] = 2333; // 'state 649' -> switch -> reduce (target=142, len=4)
actionsTable.fill(2333, 166173, 166177); // 'state 649' -> break..from -> reduce (target=142, len=4)
actionsTable.fill(2467, 166178, 166180); // 'state 649' -> *..as -> reduce (target=209, len=4)
actionsTable.fill(2333, 166180, 166182); // 'state 649' -> type..export -> reduce (target=142, len=4)
actionsTable[166185] = 2333; // 'state 649' -> [ -> reduce (target=142, len=4)
actionsTable.fill(2333, 166187, 166189); // 'state 649' -> async..function -> reduce (target=142, len=4)
actionsTable.fill(2333, 166191, 166194); // 'state 649' -> get..class -> reduce (target=142, len=4)
actionsTable[166196] = 2333; // 'state 649' -> interface -> reduce (target=142, len=4)
actionsTable[166198] = 2333; // 'state 649' -> < -> reduce (target=142, len=4)
actionsTable.fill(2467, 166199, 166202); // 'state 649' -> >..& -> reduce (target=209, len=4)
actionsTable.fill(2333, 166203, 166205); // 'state 649' -> void..typeof -> reduce (target=142, len=4)
actionsTable[166206] = 2333; // 'state 649' -> new -> reduce (target=142, len=4)
actionsTable.fill(2467, 166207, 166213); // 'state 649' -> ?..instanceof -> reduce (target=209, len=4)
actionsTable.fill(2333, 166213, 166215); // 'state 649' -> +..- -> reduce (target=142, len=4)
actionsTable[166215] = 2467; // 'state 649' -> ** -> reduce (target=209, len=4)
actionsTable.fill(2333, 166216, 166220); // 'state 649' -> !..await -> reduce (target=142, len=4)
actionsTable.fill(2467, 166220, 166222); // 'state 649' -> ?.... -> reduce (target=209, len=4)
actionsTable.fill(2333, 166223, 166226); // 'state 649' -> number..template_string -> reduce (target=142, len=4)
actionsTable.fill(2467, 166228, 166232); // 'state 649' -> equality_operator..multiplicative_operator -> reduce (target=209, len=4)
actionsTable.fill(2333, 166232, 166236); // 'state 649' -> update_operator..@par-gen.EOF -> reduce (target=142, len=4)
actionsTable[166405] = 1313; // 'state 650' -> { -> reduce (target=144, len=2)
actionsTable[166433] = 1313; // 'state 650' -> , -> reduce (target=144, len=2)
actionsTable[166442] = 1313; // 'state 650' -> ] -> reduce (target=144, len=2)
actionsTable[166455] = 1313; // 'state 650' -> > -> reduce (target=144, len=2)
actionsTable[166456] = 506; // 'state 650' -> | -> shift (target=253, len=0)
actionsTable[166457] = 508; // 'state 650' -> & -> shift (target=254, len=0)
actionsTable[166662] = 1835; // 'state 651' -> } -> reduce (target=149, len=3)
actionsTable[166669] = 1835; // 'state 651' -> ; -> reduce (target=149, len=3)
actionsTable[166674] = 1835; // 'state 651' -> of -> reduce (target=149, len=3)
actionsTable[166688] = 1835; // 'state 651' -> from -> reduce (target=149, len=3)
actionsTable[166692] = 1835; // 'state 651' -> type -> reduce (target=149, len=3)
actionsTable[166697] = 1835; // 'state 651' -> [ -> reduce (target=149, len=3)
actionsTable[166699] = 1835; // 'state 651' -> async -> reduce (target=149, len=3)
actionsTable.fill(1835, 166701, 166705); // 'state 651' -> static..set -> reduce (target=149, len=3)
actionsTable.fill(1835, 166734, 166737); // 'state 651' -> private_property_identifier..string -> reduce (target=149, len=3)
actionsTable[166738] = 1835; // 'state 651' -> accessibility_modifier -> reduce (target=149, len=3)
actionsTable[166745] = 1835; // 'state 651' -> identifier -> reduce (target=149, len=3)
actionsTable[166918] = 1835; // 'state 652' -> } -> reduce (target=149, len=3)
actionsTable[166925] = 1422; // 'state 652' -> ; -> shift (target=711, len=0)
actionsTable[166930] = 1835; // 'state 652' -> of -> reduce (target=149, len=3)
actionsTable[166944] = 1835; // 'state 652' -> from -> reduce (target=149, len=3)
actionsTable[166948] = 1835; // 'state 652' -> type -> reduce (target=149, len=3)
actionsTable[166951] = 730; // 'state 652' -> = -> shift (target=365, len=0)
actionsTable[166953] = 1835; // 'state 652' -> [ -> reduce (target=149, len=3)
actionsTable[166955] = 1835; // 'state 652' -> async -> reduce (target=149, len=3)
actionsTable.fill(1835, 166957, 166961); // 'state 652' -> static..set -> reduce (target=149, len=3)
actionsTable.fill(1835, 166990, 166993); // 'state 652' -> private_property_identifier..string -> reduce (target=149, len=3)
actionsTable[166994] = 1835; // 'state 652' -> accessibility_modifier -> reduce (target=149, len=3)
actionsTable[167001] = 1835; // 'state 652' -> identifier -> reduce (target=149, len=3)
actionsTable[167174] = 1833; // 'state 653' -> } -> reduce (target=148, len=3)
actionsTable[167181] = 1833; // 'state 653' -> ; -> reduce (target=148, len=3)
actionsTable[167186] = 1833; // 'state 653' -> of -> reduce (target=148, len=3)
actionsTable[167200] = 1833; // 'state 653' -> from -> reduce (target=148, len=3)
actionsTable[167204] = 1833; // 'state 653' -> type -> reduce (target=148, len=3)
actionsTable[167209] = 1833; // 'state 653' -> [ -> reduce (target=148, len=3)
actionsTable[167211] = 1833; // 'state 653' -> async -> reduce (target=148, len=3)
actionsTable.fill(1833, 167213, 167217); // 'state 653' -> static..set -> reduce (target=148, len=3)
actionsTable.fill(1833, 167246, 167249); // 'state 653' -> private_property_identifier..string -> reduce (target=148, len=3)
actionsTable[167250] = 1833; // 'state 653' -> accessibility_modifier -> reduce (target=148, len=3)
actionsTable[167257] = 1833; // 'state 653' -> identifier -> reduce (target=148, len=3)
actionsTable.fill(2861, 167424, 167433); // 'state 654' -> true..( -> reduce (target=150, len=5)
actionsTable.fill(2861, 167434, 167437); // 'state 654' -> else..do -> reduce (target=150, len=5)
actionsTable.fill(2861, 167438, 167443); // 'state 654' -> for..of -> reduce (target=150, len=5)
actionsTable.fill(2861, 167444, 167447); // 'state 654' -> return..try -> reduce (target=150, len=5)
actionsTable.fill(2861, 167449, 167451); // 'state 654' -> switch..case -> reduce (target=150, len=5)
actionsTable.fill(2861, 167452, 167457); // 'state 654' -> default..from -> reduce (target=150, len=5)
actionsTable.fill(2861, 167460, 167462); // 'state 654' -> type..export -> reduce (target=150, len=5)
actionsTable[167465] = 2861; // 'state 654' -> [ -> reduce (target=150, len=5)
actionsTable.fill(2861, 167467, 167469); // 'state 654' -> async..function -> reduce (target=150, len=5)
actionsTable.fill(2861, 167471, 167474); // 'state 654' -> get..class -> reduce (target=150, len=5)
actionsTable[167476] = 2861; // 'state 654' -> interface -> reduce (target=150, len=5)
actionsTable[167478] = 2861; // 'state 654' -> < -> reduce (target=150, len=5)
actionsTable.fill(2861, 167483, 167485); // 'state 654' -> void..typeof -> reduce (target=150, len=5)
actionsTable[167486] = 2861; // 'state 654' -> new -> reduce (target=150, len=5)
actionsTable.fill(2861, 167493, 167495); // 'state 654' -> +..- -> reduce (target=150, len=5)
actionsTable.fill(2861, 167496, 167500); // 'state 654' -> !..await -> reduce (target=150, len=5)
actionsTable.fill(2861, 167503, 167506); // 'state 654' -> number..template_string -> reduce (target=150, len=5)
actionsTable.fill(2861, 167512, 167516); // 'state 654' -> update_operator..@par-gen.EOF -> reduce (target=150, len=5)
actionsTable[167685] = 1839; // 'state 655' -> { -> reduce (target=151, len=3)
actionsTable[167713] = 640; // 'state 655' -> , -> shift (target=320, len=0)
actionsTable.fill(2865, 167936, 167945); // 'state 656' -> true..( -> reduce (target=152, len=5)
actionsTable.fill(2865, 167946, 167949); // 'state 656' -> else..do -> reduce (target=152, len=5)
actionsTable[167949] = 1424; // 'state 656' -> ; -> shift (target=712, len=0)
actionsTable.fill(2865, 167950, 167955); // 'state 656' -> for..of -> reduce (target=152, len=5)
actionsTable.fill(2865, 167956, 167959); // 'state 656' -> return..try -> reduce (target=152, len=5)
actionsTable.fill(2865, 167961, 167963); // 'state 656' -> switch..case -> reduce (target=152, len=5)
actionsTable.fill(2865, 167964, 167969); // 'state 656' -> default..from -> reduce (target=152, len=5)
actionsTable.fill(2865, 167972, 167974); // 'state 656' -> type..export -> reduce (target=152, len=5)
actionsTable[167977] = 2865; // 'state 656' -> [ -> reduce (target=152, len=5)
actionsTable.fill(2865, 167979, 167981); // 'state 656' -> async..function -> reduce (target=152, len=5)
actionsTable.fill(2865, 167983, 167986); // 'state 656' -> get..class -> reduce (target=152, len=5)
actionsTable[167988] = 2865; // 'state 656' -> interface -> reduce (target=152, len=5)
actionsTable[167990] = 2865; // 'state 656' -> < -> reduce (target=152, len=5)
actionsTable[167992] = 506; // 'state 656' -> | -> shift (target=253, len=0)
actionsTable[167993] = 508; // 'state 656' -> & -> shift (target=254, len=0)
actionsTable.fill(2865, 167995, 167997); // 'state 656' -> void..typeof -> reduce (target=152, len=5)
actionsTable[167998] = 2865; // 'state 656' -> new -> reduce (target=152, len=5)
actionsTable.fill(2865, 168005, 168007); // 'state 656' -> +..- -> reduce (target=152, len=5)
actionsTable.fill(2865, 168008, 168012); // 'state 656' -> !..await -> reduce (target=152, len=5)
actionsTable.fill(2865, 168015, 168018); // 'state 656' -> number..template_string -> reduce (target=152, len=5)
actionsTable.fill(2865, 168024, 168028); // 'state 656' -> update_operator..@par-gen.EOF -> reduce (target=152, len=5)
actionsTable.fill(2865, 168192, 168201); // 'state 657' -> true..( -> reduce (target=152, len=5)
actionsTable.fill(2865, 168202, 168205); // 'state 657' -> else..do -> reduce (target=152, len=5)
actionsTable.fill(2865, 168206, 168211); // 'state 657' -> for..of -> reduce (target=152, len=5)
actionsTable.fill(2865, 168212, 168215); // 'state 657' -> return..try -> reduce (target=152, len=5)
actionsTable.fill(2865, 168217, 168219); // 'state 657' -> switch..case -> reduce (target=152, len=5)
actionsTable.fill(2865, 168220, 168225); // 'state 657' -> default..from -> reduce (target=152, len=5)
actionsTable.fill(2865, 168228, 168230); // 'state 657' -> type..export -> reduce (target=152, len=5)
actionsTable[168233] = 2865; // 'state 657' -> [ -> reduce (target=152, len=5)
actionsTable.fill(2865, 168235, 168237); // 'state 657' -> async..function -> reduce (target=152, len=5)
actionsTable.fill(2865, 168239, 168242); // 'state 657' -> get..class -> reduce (target=152, len=5)
actionsTable[168244] = 2865; // 'state 657' -> interface -> reduce (target=152, len=5)
actionsTable[168246] = 2865; // 'state 657' -> < -> reduce (target=152, len=5)
actionsTable.fill(2865, 168251, 168253); // 'state 657' -> void..typeof -> reduce (target=152, len=5)
actionsTable[168254] = 2865; // 'state 657' -> new -> reduce (target=152, len=5)
actionsTable.fill(2865, 168261, 168263); // 'state 657' -> +..- -> reduce (target=152, len=5)
actionsTable.fill(2865, 168264, 168268); // 'state 657' -> !..await -> reduce (target=152, len=5)
actionsTable.fill(2865, 168271, 168274); // 'state 657' -> number..template_string -> reduce (target=152, len=5)
actionsTable.fill(2865, 168280, 168284); // 'state 657' -> update_operator..@par-gen.EOF -> reduce (target=152, len=5)
actionsTable.fill(2921, 168448, 168471); // 'state 658' -> true..try -> reduce (target=180, len=5)
actionsTable.fill(2921, 168473, 168486); // 'state 658' -> switch..export -> reduce (target=180, len=5)
actionsTable.fill(2921, 168489, 168498); // 'state 658' -> [..class -> reduce (target=180, len=5)
actionsTable.fill(2921, 168499, 168509); // 'state 658' -> implements..typeof -> reduce (target=180, len=5)
actionsTable.fill(2921, 168510, 168531); // 'state 658' -> new..accessibility_modifier -> reduce (target=180, len=5)
actionsTable.fill(2921, 168532, 168540); // 'state 658' -> equality_operator..@par-gen.EOF -> reduce (target=180, len=5)
actionsTable[168713] = 1895; // 'state 659' -> ) -> reduce (target=179, len=3)
actionsTable[168737] = 1895; // 'state 659' -> , -> reduce (target=179, len=3)
actionsTable[168987] = 2839; // 'state 660' -> : -> reduce (target=139, len=5)
actionsTable[169013] = 2839; // 'state 660' -> ?: -> reduce (target=139, len=5)
actionsTable[169018] = 2839; // 'state 660' -> => -> reduce (target=139, len=5)
actionsTable[169225] = 1813; // 'state 661' -> ) -> reduce (target=138, len=3)
actionsTable[169249] = 1813; // 'state 661' -> , -> reduce (target=138, len=3)
actionsTable.fill(1851, 169472, 169495); // 'state 662' -> true..try -> reduce (target=157, len=3)
actionsTable.fill(1851, 169497, 169510); // 'state 662' -> switch..export -> reduce (target=157, len=3)
actionsTable[169511] = 1851; // 'state 662' -> = -> reduce (target=157, len=3)
actionsTable.fill(1851, 169513, 169522); // 'state 662' -> [..class -> reduce (target=157, len=3)
actionsTable.fill(1851, 169523, 169525); // 'state 662' -> implements..interface -> reduce (target=157, len=3)
actionsTable.fill(1851, 169526, 169533); // 'state 662' -> <..typeof -> reduce (target=157, len=3)
actionsTable.fill(1851, 169534, 169555); // 'state 662' -> new..accessibility_modifier -> reduce (target=157, len=3)
actionsTable.fill(1851, 169556, 169564); // 'state 662' -> equality_operator..@par-gen.EOF -> reduce (target=157, len=3)
actionsTable[169761] = 736; // 'state 663' -> , -> shift (target=368, len=0)
actionsTable[169783] = 1426; // 'state 663' -> > -> shift (target=713, len=0)
actionsTable.fill(2959, 169984, 170007); // 'state 664' -> true..try -> reduce (target=199, len=5)
actionsTable.fill(2959, 170009, 170022); // 'state 664' -> switch..export -> reduce (target=199, len=5)
actionsTable[170023] = 2959; // 'state 664' -> = -> reduce (target=199, len=5)
actionsTable.fill(2959, 170025, 170034); // 'state 664' -> [..class -> reduce (target=199, len=5)
actionsTable.fill(2959, 170035, 170042); // 'state 664' -> implements..& -> reduce (target=199, len=5)
actionsTable.fill(2959, 170043, 170045); // 'state 664' -> void..typeof -> reduce (target=199, len=5)
actionsTable.fill(2959, 170046, 170076); // 'state 664' -> new..@par-gen.EOF -> reduce (target=199, len=5)
actionsTable[170273] = 1933; // 'state 665' -> , -> reduce (target=198, len=3)
actionsTable[170282] = 1933; // 'state 665' -> ] -> reduce (target=198, len=3)
actionsTable[170501] = 2871; // 'state 666' -> { -> reduce (target=155, len=5)
actionsTable[170504] = 2871; // 'state 666' -> ( -> reduce (target=155, len=5)
actionsTable[170535] = 2871; // 'state 666' -> = -> reduce (target=155, len=5)
actionsTable.fill(2871, 170546, 170548); // 'state 666' -> extends..implements -> reduce (target=155, len=5)
actionsTable[170785] = 1845; // 'state 667' -> , -> reduce (target=154, len=3)
actionsTable[170807] = 1845; // 'state 667' -> > -> reduce (target=154, len=3)
actionsTable[171014] = 2967; // 'state 668' -> } -> reduce (target=203, len=5)
actionsTable[171041] = 2967; // 'state 668' -> , -> reduce (target=203, len=5)
actionsTable.fill(3273, 171264, 171273); // 'state 669' -> true..( -> reduce (target=100, len=6)
actionsTable.fill(3273, 171274, 171277); // 'state 669' -> else..do -> reduce (target=100, len=6)
actionsTable[171277] = 1434; // 'state 669' -> ; -> shift (target=717, len=0)
actionsTable.fill(3273, 171278, 171283); // 'state 669' -> for..of -> reduce (target=100, len=6)
actionsTable.fill(3273, 171284, 171287); // 'state 669' -> return..try -> reduce (target=100, len=6)
actionsTable.fill(3273, 171289, 171291); // 'state 669' -> switch..case -> reduce (target=100, len=6)
actionsTable.fill(3273, 171292, 171297); // 'state 669' -> default..from -> reduce (target=100, len=6)
actionsTable.fill(3273, 171300, 171302); // 'state 669' -> type..export -> reduce (target=100, len=6)
actionsTable[171305] = 3273; // 'state 669' -> [ -> reduce (target=100, len=6)
actionsTable.fill(3273, 171307, 171309); // 'state 669' -> async..function -> reduce (target=100, len=6)
actionsTable.fill(3273, 171311, 171314); // 'state 669' -> get..class -> reduce (target=100, len=6)
actionsTable[171316] = 3273; // 'state 669' -> interface -> reduce (target=100, len=6)
actionsTable[171318] = 3273; // 'state 669' -> < -> reduce (target=100, len=6)
actionsTable.fill(3273, 171323, 171325); // 'state 669' -> void..typeof -> reduce (target=100, len=6)
actionsTable[171326] = 3273; // 'state 669' -> new -> reduce (target=100, len=6)
actionsTable.fill(3273, 171333, 171335); // 'state 669' -> +..- -> reduce (target=100, len=6)
actionsTable.fill(3273, 171336, 171340); // 'state 669' -> !..await -> reduce (target=100, len=6)
actionsTable.fill(3273, 171343, 171346); // 'state 669' -> number..template_string -> reduce (target=100, len=6)
actionsTable.fill(3273, 171352, 171356); // 'state 669' -> update_operator..@par-gen.EOF -> reduce (target=100, len=6)
actionsTable.fill(3275, 171520, 171529); // 'state 670' -> true..( -> reduce (target=101, len=6)
actionsTable.fill(3275, 171530, 171533); // 'state 670' -> else..do -> reduce (target=101, len=6)
actionsTable.fill(3275, 171534, 171539); // 'state 670' -> for..of -> reduce (target=101, len=6)
actionsTable.fill(3275, 171540, 171543); // 'state 670' -> return..try -> reduce (target=101, len=6)
actionsTable.fill(3275, 171545, 171547); // 'state 670' -> switch..case -> reduce (target=101, len=6)
actionsTable.fill(3275, 171548, 171553); // 'state 670' -> default..from -> reduce (target=101, len=6)
actionsTable.fill(3275, 171556, 171558); // 'state 670' -> type..export -> reduce (target=101, len=6)
actionsTable[171561] = 3275; // 'state 670' -> [ -> reduce (target=101, len=6)
actionsTable.fill(3275, 171563, 171565); // 'state 670' -> async..function -> reduce (target=101, len=6)
actionsTable.fill(3275, 171567, 171570); // 'state 670' -> get..class -> reduce (target=101, len=6)
actionsTable[171572] = 3275; // 'state 670' -> interface -> reduce (target=101, len=6)
actionsTable[171574] = 3275; // 'state 670' -> < -> reduce (target=101, len=6)
actionsTable.fill(3275, 171579, 171581); // 'state 670' -> void..typeof -> reduce (target=101, len=6)
actionsTable[171582] = 3275; // 'state 670' -> new -> reduce (target=101, len=6)
actionsTable.fill(3275, 171589, 171591); // 'state 670' -> +..- -> reduce (target=101, len=6)
actionsTable.fill(3275, 171592, 171596); // 'state 670' -> !..await -> reduce (target=101, len=6)
actionsTable.fill(3275, 171599, 171602); // 'state 670' -> number..template_string -> reduce (target=101, len=6)
actionsTable.fill(3275, 171608, 171612); // 'state 670' -> update_operator..@par-gen.EOF -> reduce (target=101, len=6)
actionsTable.fill(2979, 171776, 171799); // 'state 671' -> true..try -> reduce (target=209, len=5)
actionsTable.fill(2979, 171801, 171814); // 'state 671' -> switch..export -> reduce (target=209, len=5)
actionsTable.fill(2979, 171817, 171826); // 'state 671' -> [..class -> reduce (target=209, len=5)
actionsTable.fill(2979, 171827, 171829); // 'state 671' -> implements..interface -> reduce (target=209, len=5)
actionsTable.fill(2979, 171830, 171834); // 'state 671' -> <..& -> reduce (target=209, len=5)
actionsTable.fill(2979, 171835, 171837); // 'state 671' -> void..typeof -> reduce (target=209, len=5)
actionsTable.fill(2979, 171838, 171859); // 'state 671' -> new..accessibility_modifier -> reduce (target=209, len=5)
actionsTable.fill(2979, 171860, 171868); // 'state 671' -> equality_operator..@par-gen.EOF -> reduce (target=209, len=5)
actionsTable[172041] = 746; // 'state 672' -> ) -> shift (target=373, len=0)
actionsTable.fill(1245, 172288, 172297); // 'state 673' -> true..( -> reduce (target=110, len=2)
actionsTable.fill(1245, 172298, 172301); // 'state 673' -> else..do -> reduce (target=110, len=2)
actionsTable.fill(1245, 172302, 172307); // 'state 673' -> for..of -> reduce (target=110, len=2)
actionsTable.fill(1245, 172308, 172311); // 'state 673' -> return..try -> reduce (target=110, len=2)
actionsTable.fill(1245, 172313, 172315); // 'state 673' -> switch..case -> reduce (target=110, len=2)
actionsTable.fill(1245, 172316, 172321); // 'state 673' -> default..from -> reduce (target=110, len=2)
actionsTable.fill(1245, 172324, 172326); // 'state 673' -> type..export -> reduce (target=110, len=2)
actionsTable[172329] = 1245; // 'state 673' -> [ -> reduce (target=110, len=2)
actionsTable.fill(1245, 172331, 172333); // 'state 673' -> async..function -> reduce (target=110, len=2)
actionsTable.fill(1245, 172335, 172338); // 'state 673' -> get..class -> reduce (target=110, len=2)
actionsTable[172340] = 1245; // 'state 673' -> interface -> reduce (target=110, len=2)
actionsTable[172342] = 1245; // 'state 673' -> < -> reduce (target=110, len=2)
actionsTable.fill(1245, 172347, 172349); // 'state 673' -> void..typeof -> reduce (target=110, len=2)
actionsTable[172350] = 1245; // 'state 673' -> new -> reduce (target=110, len=2)
actionsTable.fill(1245, 172357, 172359); // 'state 673' -> +..- -> reduce (target=110, len=2)
actionsTable.fill(1245, 172360, 172364); // 'state 673' -> !..await -> reduce (target=110, len=2)
actionsTable.fill(1245, 172367, 172370); // 'state 673' -> number..template_string -> reduce (target=110, len=2)
actionsTable.fill(1245, 172376, 172380); // 'state 673' -> update_operator..@par-gen.EOF -> reduce (target=110, len=2)
actionsTable[172571] = 750; // 'state 674' -> : -> shift (target=375, len=0)
actionsTable[172806] = 731; // 'state 675' -> } -> reduce (target=109, len=1)
actionsTable[172826] = 731; // 'state 675' -> case -> reduce (target=109, len=1)
actionsTable[172828] = 731; // 'state 675' -> default -> reduce (target=109, len=1)
actionsTable.fill(2379, 173056, 173079); // 'state 676' -> true..try -> reduce (target=165, len=4)
actionsTable.fill(2379, 173081, 173094); // 'state 676' -> switch..export -> reduce (target=165, len=4)
actionsTable[173095] = 2379; // 'state 676' -> = -> reduce (target=165, len=4)
actionsTable.fill(2379, 173097, 173106); // 'state 676' -> [..class -> reduce (target=165, len=4)
actionsTable.fill(2379, 173107, 173109); // 'state 676' -> implements..interface -> reduce (target=165, len=4)
actionsTable.fill(2379, 173110, 173117); // 'state 676' -> <..typeof -> reduce (target=165, len=4)
actionsTable.fill(2379, 173118, 173139); // 'state 676' -> new..accessibility_modifier -> reduce (target=165, len=4)
actionsTable.fill(2379, 173140, 173148); // 'state 676' -> equality_operator..@par-gen.EOF -> reduce (target=165, len=4)
actionsTable[173318] = 1283; // 'state 677' -> } -> reduce (target=129, len=2)
actionsTable[173320] = 1427; // 'state 677' -> ( -> reduce (target=201, len=2)
actionsTable[173321] = 1283; // 'state 677' -> ) -> reduce (target=129, len=2)
actionsTable[173331] = 1427; // 'state 677' -> in -> reduce (target=201, len=2)
actionsTable[173339] = 1283; // 'state 677' -> : -> reduce (target=129, len=2)
actionsTable[173345] = 1283; // 'state 677' -> , -> reduce (target=129, len=2)
actionsTable.fill(1427, 173346, 173348); // 'state 677' -> *..as -> reduce (target=201, len=2)
actionsTable[173351] = 1283; // 'state 677' -> = -> reduce (target=129, len=2)
actionsTable[173353] = 1427; // 'state 677' -> [ -> reduce (target=201, len=2)
actionsTable[173354] = 1283; // 'state 677' -> ] -> reduce (target=129, len=2)
actionsTable[173365] = 1283; // 'state 677' -> ?: -> reduce (target=129, len=2)
actionsTable.fill(1427, 173366, 173370); // 'state 677' -> <..& -> reduce (target=201, len=2)
actionsTable.fill(1427, 173375, 173384); // 'state 677' -> ?..** -> reduce (target=201, len=2)
actionsTable.fill(1427, 173388, 173390); // 'state 677' -> ?.... -> reduce (target=201, len=2)
actionsTable.fill(1427, 173395, 173401); // 'state 677' -> compound_assignment_operator..update_operator -> reduce (target=201, len=2)
actionsTable[173574] = 773; // 'state 678' -> } -> reduce (target=130, len=1)
actionsTable[173576] = 925; // 'state 678' -> ( -> reduce (target=206, len=1)
actionsTable[173595] = 925; // 'state 678' -> : -> reduce (target=206, len=1)
actionsTable[173601] = 773; // 'state 678' -> , -> reduce (target=130, len=1)
actionsTable[173607] = 470; // 'state 678' -> = -> shift (target=235, len=0)
actionsTable[173622] = 925; // 'state 678' -> < -> reduce (target=206, len=1)
actionsTable[173830] = 1289; // 'state 679' -> } -> reduce (target=132, len=2)
actionsTable[173832] = 1423; // 'state 679' -> ( -> reduce (target=199, len=2)
actionsTable[173833] = 1289; // 'state 679' -> ) -> reduce (target=132, len=2)
actionsTable[173843] = 1423; // 'state 679' -> in -> reduce (target=199, len=2)
actionsTable[173851] = 1289; // 'state 679' -> : -> reduce (target=132, len=2)
actionsTable[173857] = 1289; // 'state 679' -> , -> reduce (target=132, len=2)
actionsTable.fill(1423, 173858, 173860); // 'state 679' -> *..as -> reduce (target=199, len=2)
actionsTable[173863] = 1289; // 'state 679' -> = -> reduce (target=132, len=2)
actionsTable[173865] = 1423; // 'state 679' -> [ -> reduce (target=199, len=2)
actionsTable[173866] = 1289; // 'state 679' -> ] -> reduce (target=132, len=2)
actionsTable[173877] = 1289; // 'state 679' -> ?: -> reduce (target=132, len=2)
actionsTable.fill(1423, 173878, 173882); // 'state 679' -> <..& -> reduce (target=199, len=2)
actionsTable.fill(1423, 173887, 173896); // 'state 679' -> ?..** -> reduce (target=199, len=2)
actionsTable.fill(1423, 173900, 173902); // 'state 679' -> ?.... -> reduce (target=199, len=2)
actionsTable.fill(1423, 173907, 173913); // 'state 679' -> compound_assignment_operator..update_operator -> reduce (target=199, len=2)
actionsTable[174086] = 767; // 'state 680' -> } -> reduce (target=127, len=1)
actionsTable[174088] = 869; // 'state 680' -> ( -> reduce (target=178, len=1)
actionsTable[174089] = 767; // 'state 680' -> ) -> reduce (target=127, len=1)
actionsTable[174099] = 869; // 'state 680' -> in -> reduce (target=178, len=1)
actionsTable[174107] = 767; // 'state 680' -> : -> reduce (target=127, len=1)
actionsTable[174113] = 767; // 'state 680' -> , -> reduce (target=127, len=1)
actionsTable.fill(869, 174114, 174116); // 'state 680' -> *..as -> reduce (target=178, len=1)
actionsTable[174119] = 767; // 'state 680' -> = -> reduce (target=127, len=1)
actionsTable[174121] = 869; // 'state 680' -> [ -> reduce (target=178, len=1)
actionsTable[174122] = 767; // 'state 680' -> ] -> reduce (target=127, len=1)
actionsTable[174133] = 767; // 'state 680' -> ?: -> reduce (target=127, len=1)
actionsTable.fill(869, 174134, 174138); // 'state 680' -> <..& -> reduce (target=178, len=1)
actionsTable[174138] = 162; // 'state 680' -> => -> shift (target=81, len=0)
actionsTable.fill(869, 174143, 174152); // 'state 680' -> ?..** -> reduce (target=178, len=1)
actionsTable.fill(869, 174156, 174158); // 'state 680' -> ?.... -> reduce (target=178, len=1)
actionsTable[174163] = 875; // 'state 680' -> compound_assignment_operator -> reduce (target=181, len=1)
actionsTable.fill(869, 174164, 174169); // 'state 680' -> equality_operator..update_operator -> reduce (target=178, len=1)
actionsTable.fill(2371, 174336, 174359); // 'state 681' -> true..try -> reduce (target=161, len=4)
actionsTable.fill(2371, 174361, 174374); // 'state 681' -> switch..export -> reduce (target=161, len=4)
actionsTable[174375] = 2371; // 'state 681' -> = -> reduce (target=161, len=4)
actionsTable.fill(2371, 174377, 174386); // 'state 681' -> [..class -> reduce (target=161, len=4)
actionsTable.fill(2371, 174387, 174389); // 'state 681' -> implements..interface -> reduce (target=161, len=4)
actionsTable.fill(2371, 174390, 174397); // 'state 681' -> <..typeof -> reduce (target=161, len=4)
actionsTable.fill(2371, 174398, 174419); // 'state 681' -> new..accessibility_modifier -> reduce (target=161, len=4)
actionsTable.fill(2371, 174420, 174428); // 'state 681' -> equality_operator..@par-gen.EOF -> reduce (target=161, len=4)
actionsTable[174600] = 869; // 'state 682' -> ( -> reduce (target=178, len=1)
actionsTable[174601] = 837; // 'state 682' -> ) -> reduce (target=162, len=1)
actionsTable[174611] = 869; // 'state 682' -> in -> reduce (target=178, len=1)
actionsTable.fill(869, 174625, 174628); // 'state 682' -> ,..as -> reduce (target=178, len=1)
actionsTable[174633] = 837; // 'state 682' -> [ -> reduce (target=162, len=1)
actionsTable.fill(869, 174646, 174648); // 'state 682' -> <..> -> reduce (target=178, len=1)
actionsTable.fill(837, 174648, 174650); // 'state 682' -> |..& -> reduce (target=162, len=1)
actionsTable.fill(869, 174655, 174664); // 'state 682' -> ?..** -> reduce (target=178, len=1)
actionsTable.fill(869, 174668, 174670); // 'state 682' -> ?.... -> reduce (target=178, len=1)
actionsTable.fill(869, 174676, 174681); // 'state 682' -> equality_operator..update_operator -> reduce (target=178, len=1)
actionsTable[174854] = 1361; // 'state 683' -> } -> reduce (target=168, len=2)
actionsTable[174856] = 869; // 'state 683' -> ( -> reduce (target=178, len=1)
actionsTable[174857] = 1361; // 'state 683' -> ) -> reduce (target=168, len=2)
actionsTable[174861] = 1361; // 'state 683' -> ; -> reduce (target=168, len=2)
actionsTable[174866] = 1361; // 'state 683' -> of -> reduce (target=168, len=2)
actionsTable[174867] = 869; // 'state 683' -> in -> reduce (target=178, len=1)
actionsTable.fill(1361, 174880, 174882); // 'state 683' -> from.., -> reduce (target=168, len=2)
actionsTable.fill(869, 174882, 174884); // 'state 683' -> *..as -> reduce (target=178, len=1)
actionsTable[174884] = 1361; // 'state 683' -> type -> reduce (target=168, len=2)
actionsTable[174887] = 875; // 'state 683' -> = -> reduce (target=181, len=1)
actionsTable.fill(1361, 174889, 174892); // 'state 683' -> [..async -> reduce (target=168, len=2)
actionsTable.fill(1361, 174894, 174897); // 'state 683' -> readonly..set -> reduce (target=168, len=2)
actionsTable.fill(869, 174902, 174904); // 'state 683' -> <..> -> reduce (target=178, len=1)
actionsTable.fill(1361, 174904, 174906); // 'state 683' -> |..& -> reduce (target=168, len=2)
actionsTable[174906] = 162; // 'state 683' -> => -> shift (target=81, len=0)
actionsTable[174910] = 1361; // 'state 683' -> new -> reduce (target=168, len=2)
actionsTable.fill(869, 174911, 174920); // 'state 683' -> ?..** -> reduce (target=178, len=1)
actionsTable.fill(869, 174924, 174926); // 'state 683' -> ?.... -> reduce (target=178, len=1)
actionsTable.fill(1361, 174927, 174929); // 'state 683' -> number..string -> reduce (target=168, len=2)
actionsTable[174931] = 875; // 'state 683' -> compound_assignment_operator -> reduce (target=181, len=1)
actionsTable.fill(869, 174932, 174937); // 'state 683' -> equality_operator..update_operator -> reduce (target=178, len=1)
actionsTable[174937] = 1361; // 'state 683' -> identifier -> reduce (target=168, len=2)
actionsTable.fill(2381, 175104, 175127); // 'state 684' -> true..try -> reduce (target=166, len=4)
actionsTable.fill(2381, 175129, 175142); // 'state 684' -> switch..export -> reduce (target=166, len=4)
actionsTable[175143] = 2381; // 'state 684' -> = -> reduce (target=166, len=4)
actionsTable.fill(2381, 175145, 175154); // 'state 684' -> [..class -> reduce (target=166, len=4)
actionsTable.fill(2381, 175155, 175157); // 'state 684' -> implements..interface -> reduce (target=166, len=4)
actionsTable.fill(2381, 175158, 175165); // 'state 684' -> <..typeof -> reduce (target=166, len=4)
actionsTable.fill(2381, 175166, 175187); // 'state 684' -> new..accessibility_modifier -> reduce (target=166, len=4)
actionsTable.fill(2381, 175188, 175196); // 'state 684' -> equality_operator..@par-gen.EOF -> reduce (target=166, len=4)
actionsTable[175366] = 1877; // 'state 685' -> } -> reduce (target=170, len=3)
actionsTable[175378] = 1877; // 'state 685' -> of -> reduce (target=170, len=3)
actionsTable[175392] = 1877; // 'state 685' -> from -> reduce (target=170, len=3)
actionsTable[175396] = 1877; // 'state 685' -> type -> reduce (target=170, len=3)
actionsTable[175401] = 1877; // 'state 685' -> [ -> reduce (target=170, len=3)
actionsTable[175403] = 1877; // 'state 685' -> async -> reduce (target=170, len=3)
actionsTable.fill(1877, 175406, 175409); // 'state 685' -> readonly..set -> reduce (target=170, len=3)
actionsTable[175422] = 1877; // 'state 685' -> new -> reduce (target=170, len=3)
actionsTable.fill(1877, 175439, 175441); // 'state 685' -> number..string -> reduce (target=170, len=3)
actionsTable[175449] = 1877; // 'state 685' -> identifier -> reduce (target=170, len=3)
actionsTable[175622] = 1881; // 'state 686' -> } -> reduce (target=172, len=3)
actionsTable[175629] = 1881; // 'state 686' -> ; -> reduce (target=172, len=3)
actionsTable[175634] = 1881; // 'state 686' -> of -> reduce (target=172, len=3)
actionsTable.fill(1881, 175648, 175650); // 'state 686' -> from.., -> reduce (target=172, len=3)
actionsTable[175652] = 1881; // 'state 686' -> type -> reduce (target=172, len=3)
actionsTable[175657] = 1881; // 'state 686' -> [ -> reduce (target=172, len=3)
actionsTable[175659] = 1881; // 'state 686' -> async -> reduce (target=172, len=3)
actionsTable.fill(1881, 175662, 175665); // 'state 686' -> readonly..set -> reduce (target=172, len=3)
actionsTable[175678] = 1881; // 'state 686' -> new -> reduce (target=172, len=3)
actionsTable.fill(1881, 175695, 175697); // 'state 686' -> number..string -> reduce (target=172, len=3)
actionsTable[175705] = 1881; // 'state 686' -> identifier -> reduce (target=172, len=3)
actionsTable[175880] = 869; // 'state 687' -> ( -> reduce (target=178, len=1)
actionsTable[175891] = 762; // 'state 687' -> in -> shift (target=381, len=0)
actionsTable[175899] = 762; // 'state 687' -> : -> shift (target=381, len=0)
actionsTable.fill(869, 175906, 175908); // 'state 687' -> *..as -> reduce (target=178, len=1)
actionsTable[175911] = 875; // 'state 687' -> = -> reduce (target=181, len=1)
actionsTable.fill(869, 175913, 175915); // 'state 687' -> [..] -> reduce (target=178, len=1)
actionsTable.fill(869, 175926, 175930); // 'state 687' -> <..& -> reduce (target=178, len=1)
actionsTable[175930] = 162; // 'state 687' -> => -> shift (target=81, len=0)
actionsTable.fill(869, 175935, 175944); // 'state 687' -> ?..** -> reduce (target=178, len=1)
actionsTable.fill(869, 175948, 175950); // 'state 687' -> ?.... -> reduce (target=178, len=1)
actionsTable[175955] = 875; // 'state 687' -> compound_assignment_operator -> reduce (target=181, len=1)
actionsTable.fill(869, 175956, 175961); // 'state 687' -> equality_operator..update_operator -> reduce (target=178, len=1)
actionsTable[176134] = 1883; // 'state 688' -> } -> reduce (target=173, len=3)
actionsTable[176141] = 1883; // 'state 688' -> ; -> reduce (target=173, len=3)
actionsTable[176146] = 1883; // 'state 688' -> of -> reduce (target=173, len=3)
actionsTable.fill(1883, 176160, 176162); // 'state 688' -> from.., -> reduce (target=173, len=3)
actionsTable[176164] = 1883; // 'state 688' -> type -> reduce (target=173, len=3)
actionsTable[176169] = 1883; // 'state 688' -> [ -> reduce (target=173, len=3)
actionsTable[176171] = 1883; // 'state 688' -> async -> reduce (target=173, len=3)
actionsTable.fill(1883, 176174, 176177); // 'state 688' -> readonly..set -> reduce (target=173, len=3)
actionsTable[176190] = 1883; // 'state 688' -> new -> reduce (target=173, len=3)
actionsTable.fill(1883, 176207, 176209); // 'state 688' -> number..string -> reduce (target=173, len=3)
actionsTable[176217] = 1883; // 'state 688' -> identifier -> reduce (target=173, len=3)
actionsTable[176390] = 1885; // 'state 689' -> } -> reduce (target=174, len=3)
actionsTable[176397] = 1885; // 'state 689' -> ; -> reduce (target=174, len=3)
actionsTable[176402] = 1885; // 'state 689' -> of -> reduce (target=174, len=3)
actionsTable.fill(1885, 176416, 176418); // 'state 689' -> from.., -> reduce (target=174, len=3)
actionsTable[176420] = 1885; // 'state 689' -> type -> reduce (target=174, len=3)
actionsTable[176425] = 1885; // 'state 689' -> [ -> reduce (target=174, len=3)
actionsTable[176427] = 1885; // 'state 689' -> async -> reduce (target=174, len=3)
actionsTable.fill(1885, 176430, 176433); // 'state 689' -> readonly..set -> reduce (target=174, len=3)
actionsTable[176446] = 1885; // 'state 689' -> new -> reduce (target=174, len=3)
actionsTable.fill(1885, 176463, 176465); // 'state 689' -> number..string -> reduce (target=174, len=3)
actionsTable[176473] = 1885; // 'state 689' -> identifier -> reduce (target=174, len=3)
actionsTable.fill(2951, 176640, 176663); // 'state 690' -> true..try -> reduce (target=195, len=5)
actionsTable.fill(2951, 176665, 176678); // 'state 690' -> switch..export -> reduce (target=195, len=5)
actionsTable.fill(2951, 176681, 176690); // 'state 690' -> [..class -> reduce (target=195, len=5)
actionsTable.fill(2951, 176691, 176693); // 'state 690' -> implements..interface -> reduce (target=195, len=5)
actionsTable.fill(2951, 176694, 176698); // 'state 690' -> <..& -> reduce (target=195, len=5)
actionsTable.fill(2951, 176699, 176701); // 'state 690' -> void..typeof -> reduce (target=195, len=5)
actionsTable.fill(2951, 176702, 176723); // 'state 690' -> new..accessibility_modifier -> reduce (target=195, len=5)
actionsTable.fill(2951, 176724, 176732); // 'state 690' -> equality_operator..@par-gen.EOF -> reduce (target=195, len=5)
actionsTable.fill(2803, 176896, 176905); // 'state 691' -> true..( -> reduce (target=121, len=5)
actionsTable.fill(2803, 176906, 176915); // 'state 691' -> else..of -> reduce (target=121, len=5)
actionsTable.fill(2803, 176916, 176919); // 'state 691' -> return..try -> reduce (target=121, len=5)
actionsTable.fill(2803, 176921, 176923); // 'state 691' -> switch..case -> reduce (target=121, len=5)
actionsTable.fill(2803, 176924, 176929); // 'state 691' -> default..from -> reduce (target=121, len=5)
actionsTable.fill(2803, 176932, 176934); // 'state 691' -> type..export -> reduce (target=121, len=5)
actionsTable[176937] = 2803; // 'state 691' -> [ -> reduce (target=121, len=5)
actionsTable.fill(2803, 176939, 176941); // 'state 691' -> async..function -> reduce (target=121, len=5)
actionsTable.fill(2803, 176943, 176946); // 'state 691' -> get..class -> reduce (target=121, len=5)
actionsTable[176948] = 2803; // 'state 691' -> interface -> reduce (target=121, len=5)
actionsTable[176950] = 2803; // 'state 691' -> < -> reduce (target=121, len=5)
actionsTable.fill(2803, 176955, 176957); // 'state 691' -> void..typeof -> reduce (target=121, len=5)
actionsTable[176958] = 2803; // 'state 691' -> new -> reduce (target=121, len=5)
actionsTable.fill(2803, 176965, 176967); // 'state 691' -> +..- -> reduce (target=121, len=5)
actionsTable.fill(2803, 176968, 176972); // 'state 691' -> !..await -> reduce (target=121, len=5)
actionsTable.fill(2803, 176975, 176978); // 'state 691' -> number..template_string -> reduce (target=121, len=5)
actionsTable.fill(2803, 176984, 176988); // 'state 691' -> update_operator..@par-gen.EOF -> reduce (target=121, len=5)
actionsTable[177158] = 1777; // 'state 692' -> } -> reduce (target=120, len=3)
actionsTable[177185] = 1777; // 'state 692' -> , -> reduce (target=120, len=3)
actionsTable[177414] = 2293; // 'state 693' -> } -> reduce (target=122, len=4)
actionsTable[177441] = 2293; // 'state 693' -> , -> reduce (target=122, len=4)
actionsTable.fill(2829, 177664, 177673); // 'state 694' -> true..( -> reduce (target=134, len=5)
actionsTable.fill(2829, 177674, 177677); // 'state 694' -> else..do -> reduce (target=134, len=5)
actionsTable.fill(2829, 177678, 177683); // 'state 694' -> for..of -> reduce (target=134, len=5)
actionsTable.fill(2829, 177684, 177687); // 'state 694' -> return..try -> reduce (target=134, len=5)
actionsTable.fill(2829, 177689, 177691); // 'state 694' -> switch..case -> reduce (target=134, len=5)
actionsTable.fill(2829, 177692, 177697); // 'state 694' -> default..from -> reduce (target=134, len=5)
actionsTable.fill(2829, 177700, 177702); // 'state 694' -> type..export -> reduce (target=134, len=5)
actionsTable[177705] = 2829; // 'state 694' -> [ -> reduce (target=134, len=5)
actionsTable.fill(2829, 177707, 177709); // 'state 694' -> async..function -> reduce (target=134, len=5)
actionsTable.fill(2829, 177711, 177714); // 'state 694' -> get..class -> reduce (target=134, len=5)
actionsTable[177716] = 2829; // 'state 694' -> interface -> reduce (target=134, len=5)
actionsTable[177718] = 2829; // 'state 694' -> < -> reduce (target=134, len=5)
actionsTable.fill(2829, 177723, 177725); // 'state 694' -> void..typeof -> reduce (target=134, len=5)
actionsTable[177726] = 2829; // 'state 694' -> new -> reduce (target=134, len=5)
actionsTable.fill(2829, 177733, 177735); // 'state 694' -> +..- -> reduce (target=134, len=5)
actionsTable.fill(2829, 177736, 177740); // 'state 694' -> !..await -> reduce (target=134, len=5)
actionsTable.fill(2829, 177743, 177746); // 'state 694' -> number..template_string -> reduce (target=134, len=5)
actionsTable.fill(2829, 177752, 177756); // 'state 694' -> update_operator..@par-gen.EOF -> reduce (target=134, len=5)
actionsTable.fill(2845, 177920, 177929); // 'state 695' -> true..( -> reduce (target=142, len=5)
actionsTable.fill(2845, 177930, 177933); // 'state 695' -> else..do -> reduce (target=142, len=5)
actionsTable.fill(2845, 177934, 177939); // 'state 695' -> for..of -> reduce (target=142, len=5)
actionsTable.fill(2845, 177940, 177943); // 'state 695' -> return..try -> reduce (target=142, len=5)
actionsTable.fill(2845, 177945, 177947); // 'state 695' -> switch..case -> reduce (target=142, len=5)
actionsTable.fill(2845, 177948, 177953); // 'state 695' -> default..from -> reduce (target=142, len=5)
actionsTable.fill(2845, 177956, 177958); // 'state 695' -> type..export -> reduce (target=142, len=5)
actionsTable[177961] = 2845; // 'state 695' -> [ -> reduce (target=142, len=5)
actionsTable.fill(2845, 177963, 177965); // 'state 695' -> async..function -> reduce (target=142, len=5)
actionsTable.fill(2845, 177967, 177970); // 'state 695' -> get..class -> reduce (target=142, len=5)
actionsTable[177972] = 2845; // 'state 695' -> interface -> reduce (target=142, len=5)
actionsTable[177974] = 2845; // 'state 695' -> < -> reduce (target=142, len=5)
actionsTable.fill(2845, 177979, 177981); // 'state 695' -> void..typeof -> reduce (target=142, len=5)
actionsTable[177982] = 2845; // 'state 695' -> new -> reduce (target=142, len=5)
actionsTable.fill(2845, 177989, 177991); // 'state 695' -> +..- -> reduce (target=142, len=5)
actionsTable.fill(2845, 177992, 177996); // 'state 695' -> !..await -> reduce (target=142, len=5)
actionsTable.fill(2845, 177999, 178002); // 'state 695' -> number..template_string -> reduce (target=142, len=5)
actionsTable.fill(2845, 178008, 178012); // 'state 695' -> update_operator..@par-gen.EOF -> reduce (target=142, len=5)
actionsTable.fill(3319, 178176, 178185); // 'state 696' -> true..( -> reduce (target=123, len=6)
actionsTable.fill(3319, 178186, 178189); // 'state 696' -> else..do -> reduce (target=123, len=6)
actionsTable[178189] = 1458; // 'state 696' -> ; -> shift (target=729, len=0)
actionsTable.fill(3319, 178190, 178195); // 'state 696' -> for..of -> reduce (target=123, len=6)
actionsTable.fill(3319, 178196, 178199); // 'state 696' -> return..try -> reduce (target=123, len=6)
actionsTable.fill(3319, 178201, 178203); // 'state 696' -> switch..case -> reduce (target=123, len=6)
actionsTable.fill(3319, 178204, 178209); // 'state 696' -> default..from -> reduce (target=123, len=6)
actionsTable.fill(3319, 178212, 178214); // 'state 696' -> type..export -> reduce (target=123, len=6)
actionsTable[178217] = 3319; // 'state 696' -> [ -> reduce (target=123, len=6)
actionsTable.fill(3319, 178219, 178221); // 'state 696' -> async..function -> reduce (target=123, len=6)
actionsTable.fill(3319, 178223, 178226); // 'state 696' -> get..class -> reduce (target=123, len=6)
actionsTable[178228] = 3319; // 'state 696' -> interface -> reduce (target=123, len=6)
actionsTable[178230] = 3319; // 'state 696' -> < -> reduce (target=123, len=6)
actionsTable.fill(3319, 178235, 178237); // 'state 696' -> void..typeof -> reduce (target=123, len=6)
actionsTable[178238] = 3319; // 'state 696' -> new -> reduce (target=123, len=6)
actionsTable.fill(3319, 178245, 178247); // 'state 696' -> +..- -> reduce (target=123, len=6)
actionsTable.fill(3319, 178248, 178252); // 'state 696' -> !..await -> reduce (target=123, len=6)
actionsTable.fill(3319, 178255, 178258); // 'state 696' -> number..template_string -> reduce (target=123, len=6)
actionsTable.fill(3319, 178264, 178268); // 'state 696' -> update_operator..@par-gen.EOF -> reduce (target=123, len=6)
actionsTable.fill(2819, 178432, 178455); // 'state 697' -> true..try -> reduce (target=129, len=5)
actionsTable.fill(2819, 178457, 178466); // 'state 697' -> switch.., -> reduce (target=129, len=5)
actionsTable.fill(2819, 178468, 178470); // 'state 697' -> type..export -> reduce (target=129, len=5)
actionsTable[178471] = 2819; // 'state 697' -> = -> reduce (target=129, len=5)
actionsTable.fill(2819, 178473, 178477); // 'state 697' -> [..function -> reduce (target=129, len=5)
actionsTable.fill(2819, 178479, 178482); // 'state 697' -> get..class -> reduce (target=129, len=5)
actionsTable.fill(2819, 178484, 178487); // 'state 697' -> interface..< -> reduce (target=129, len=5)
actionsTable.fill(2819, 178491, 178493); // 'state 697' -> void..typeof -> reduce (target=129, len=5)
actionsTable[178494] = 2819; // 'state 697' -> new -> reduce (target=129, len=5)
actionsTable.fill(2819, 178501, 178503); // 'state 697' -> +..- -> reduce (target=129, len=5)
actionsTable.fill(2819, 178504, 178508); // 'state 697' -> !..await -> reduce (target=129, len=5)
actionsTable.fill(2819, 178511, 178514); // 'state 697' -> number..template_string -> reduce (target=129, len=5)
actionsTable.fill(2819, 178520, 178524); // 'state 697' -> update_operator..@par-gen.EOF -> reduce (target=129, len=5)
actionsTable[178694] = 1793; // 'state 698' -> } -> reduce (target=128, len=3)
actionsTable[178721] = 1793; // 'state 698' -> , -> reduce (target=128, len=3)
actionsTable.fill(2825, 178944, 178967); // 'state 699' -> true..try -> reduce (target=132, len=5)
actionsTable.fill(2825, 178969, 178978); // 'state 699' -> switch.., -> reduce (target=132, len=5)
actionsTable.fill(2825, 178980, 178982); // 'state 699' -> type..export -> reduce (target=132, len=5)
actionsTable[178983] = 2825; // 'state 699' -> = -> reduce (target=132, len=5)
actionsTable.fill(2825, 178985, 178989); // 'state 699' -> [..function -> reduce (target=132, len=5)
actionsTable.fill(2825, 178991, 178994); // 'state 699' -> get..class -> reduce (target=132, len=5)
actionsTable.fill(2825, 178996, 178999); // 'state 699' -> interface..< -> reduce (target=132, len=5)
actionsTable.fill(2825, 179003, 179005); // 'state 699' -> void..typeof -> reduce (target=132, len=5)
actionsTable[179006] = 2825; // 'state 699' -> new -> reduce (target=132, len=5)
actionsTable.fill(2825, 179013, 179015); // 'state 699' -> +..- -> reduce (target=132, len=5)
actionsTable.fill(2825, 179016, 179020); // 'state 699' -> !..await -> reduce (target=132, len=5)
actionsTable.fill(2825, 179023, 179026); // 'state 699' -> number..template_string -> reduce (target=132, len=5)
actionsTable.fill(2825, 179032, 179036); // 'state 699' -> update_operator..@par-gen.EOF -> reduce (target=132, len=5)
actionsTable[179233] = 1799; // 'state 700' -> , -> reduce (target=131, len=3)
actionsTable[179242] = 1799; // 'state 700' -> ] -> reduce (target=131, len=3)
actionsTable.fill(3341, 179456, 179465); // 'state 701' -> true..( -> reduce (target=134, len=6)
actionsTable.fill(3341, 179466, 179475); // 'state 701' -> else..of -> reduce (target=134, len=6)
actionsTable.fill(3341, 179476, 179479); // 'state 701' -> return..try -> reduce (target=134, len=6)
actionsTable.fill(3341, 179481, 179483); // 'state 701' -> switch..case -> reduce (target=134, len=6)
actionsTable.fill(3341, 179484, 179489); // 'state 701' -> default..from -> reduce (target=134, len=6)
actionsTable.fill(3341, 179492, 179494); // 'state 701' -> type..export -> reduce (target=134, len=6)
actionsTable[179497] = 3341; // 'state 701' -> [ -> reduce (target=134, len=6)
actionsTable.fill(3341, 179499, 179501); // 'state 701' -> async..function -> reduce (target=134, len=6)
actionsTable.fill(3341, 179503, 179506); // 'state 701' -> get..class -> reduce (target=134, len=6)
actionsTable[179508] = 3341; // 'state 701' -> interface -> reduce (target=134, len=6)
actionsTable[179510] = 3341; // 'state 701' -> < -> reduce (target=134, len=6)
actionsTable.fill(3341, 179515, 179517); // 'state 701' -> void..typeof -> reduce (target=134, len=6)
actionsTable[179518] = 3341; // 'state 701' -> new -> reduce (target=134, len=6)
actionsTable.fill(3341, 179525, 179527); // 'state 701' -> +..- -> reduce (target=134, len=6)
actionsTable.fill(3341, 179528, 179532); // 'state 701' -> !..await -> reduce (target=134, len=6)
actionsTable.fill(3341, 179535, 179538); // 'state 701' -> number..template_string -> reduce (target=134, len=6)
actionsTable.fill(3341, 179544, 179548); // 'state 701' -> update_operator..@par-gen.EOF -> reduce (target=134, len=6)
actionsTable.fill(3341, 179712, 179721); // 'state 702' -> true..( -> reduce (target=134, len=6)
actionsTable.fill(3341, 179722, 179731); // 'state 702' -> else..of -> reduce (target=134, len=6)
actionsTable[179731] = 3489; // 'state 702' -> in -> reduce (target=208, len=6)
actionsTable.fill(3341, 179732, 179735); // 'state 702' -> return..try -> reduce (target=134, len=6)
actionsTable.fill(3341, 179737, 179739); // 'state 702' -> switch..case -> reduce (target=134, len=6)
actionsTable.fill(3341, 179740, 179745); // 'state 702' -> default..from -> reduce (target=134, len=6)
actionsTable.fill(3489, 179746, 179748); // 'state 702' -> *..as -> reduce (target=208, len=6)
actionsTable.fill(3341, 179748, 179750); // 'state 702' -> type..export -> reduce (target=134, len=6)
actionsTable[179753] = 3341; // 'state 702' -> [ -> reduce (target=134, len=6)
actionsTable.fill(3341, 179755, 179757); // 'state 702' -> async..function -> reduce (target=134, len=6)
actionsTable.fill(3341, 179759, 179762); // 'state 702' -> get..class -> reduce (target=134, len=6)
actionsTable[179764] = 3341; // 'state 702' -> interface -> reduce (target=134, len=6)
actionsTable[179766] = 3341; // 'state 702' -> < -> reduce (target=134, len=6)
actionsTable.fill(3489, 179767, 179770); // 'state 702' -> >..& -> reduce (target=208, len=6)
actionsTable.fill(3341, 179771, 179773); // 'state 702' -> void..typeof -> reduce (target=134, len=6)
actionsTable[179774] = 3341; // 'state 702' -> new -> reduce (target=134, len=6)
actionsTable.fill(3489, 179775, 179781); // 'state 702' -> ?..instanceof -> reduce (target=208, len=6)
actionsTable.fill(3341, 179781, 179783); // 'state 702' -> +..- -> reduce (target=134, len=6)
actionsTable[179783] = 3489; // 'state 702' -> ** -> reduce (target=208, len=6)
actionsTable.fill(3341, 179784, 179788); // 'state 702' -> !..await -> reduce (target=134, len=6)
actionsTable.fill(3489, 179788, 179790); // 'state 702' -> ?.... -> reduce (target=208, len=6)
actionsTable.fill(3341, 179791, 179794); // 'state 702' -> number..template_string -> reduce (target=134, len=6)
actionsTable.fill(3489, 179796, 179800); // 'state 702' -> equality_operator..multiplicative_operator -> reduce (target=208, len=6)
actionsTable.fill(3341, 179800, 179804); // 'state 702' -> update_operator..@par-gen.EOF -> reduce (target=134, len=6)
actionsTable.fill(2829, 179968, 179977); // 'state 703' -> true..( -> reduce (target=134, len=5)
actionsTable.fill(2829, 179979, 179981); // 'state 703' -> while..do -> reduce (target=134, len=5)
actionsTable[179981] = 2977; // 'state 703' -> ; -> reduce (target=208, len=5)
actionsTable.fill(2829, 179982, 179987); // 'state 703' -> for..of -> reduce (target=134, len=5)
actionsTable[179987] = 2977; // 'state 703' -> in -> reduce (target=208, len=5)
actionsTable.fill(2829, 179988, 179991); // 'state 703' -> return..try -> reduce (target=134, len=5)
actionsTable[179993] = 2829; // 'state 703' -> switch -> reduce (target=134, len=5)
actionsTable.fill(2829, 179997, 180001); // 'state 703' -> break..from -> reduce (target=134, len=5)
actionsTable.fill(2977, 180002, 180004); // 'state 703' -> *..as -> reduce (target=208, len=5)
actionsTable.fill(2829, 180004, 180006); // 'state 703' -> type..export -> reduce (target=134, len=5)
actionsTable[180009] = 2829; // 'state 703' -> [ -> reduce (target=134, len=5)
actionsTable.fill(2829, 180011, 180013); // 'state 703' -> async..function -> reduce (target=134, len=5)
actionsTable.fill(2829, 180015, 180018); // 'state 703' -> get..class -> reduce (target=134, len=5)
actionsTable[180020] = 2829; // 'state 703' -> interface -> reduce (target=134, len=5)
actionsTable[180022] = 2829; // 'state 703' -> < -> reduce (target=134, len=5)
actionsTable.fill(2977, 180023, 180026); // 'state 703' -> >..& -> reduce (target=208, len=5)
actionsTable.fill(2829, 180027, 180029); // 'state 703' -> void..typeof -> reduce (target=134, len=5)
actionsTable[180030] = 2829; // 'state 703' -> new -> reduce (target=134, len=5)
actionsTable.fill(2977, 180031, 180037); // 'state 703' -> ?..instanceof -> reduce (target=208, len=5)
actionsTable.fill(2829, 180037, 180039); // 'state 703' -> +..- -> reduce (target=134, len=5)
actionsTable[180039] = 2977; // 'state 703' -> ** -> reduce (target=208, len=5)
actionsTable.fill(2829, 180040, 180044); // 'state 703' -> !..await -> reduce (target=134, len=5)
actionsTable.fill(2977, 180044, 180046); // 'state 703' -> ?.... -> reduce (target=208, len=5)
actionsTable.fill(2829, 180047, 180050); // 'state 703' -> number..template_string -> reduce (target=134, len=5)
actionsTable.fill(2977, 180052, 180056); // 'state 703' -> equality_operator..multiplicative_operator -> reduce (target=208, len=5)
actionsTable.fill(2829, 180056, 180060); // 'state 703' -> update_operator..@par-gen.EOF -> reduce (target=134, len=5)
actionsTable.fill(3489, 180224, 180247); // 'state 704' -> true..try -> reduce (target=208, len=6)
actionsTable.fill(3489, 180249, 180262); // 'state 704' -> switch..export -> reduce (target=208, len=6)
actionsTable.fill(3489, 180265, 180274); // 'state 704' -> [..class -> reduce (target=208, len=6)
actionsTable.fill(3489, 180275, 180277); // 'state 704' -> implements..interface -> reduce (target=208, len=6)
actionsTable.fill(3489, 180278, 180282); // 'state 704' -> <..& -> reduce (target=208, len=6)
actionsTable.fill(3489, 180283, 180285); // 'state 704' -> void..typeof -> reduce (target=208, len=6)
actionsTable.fill(3489, 180286, 180307); // 'state 704' -> new..accessibility_modifier -> reduce (target=208, len=6)
actionsTable.fill(3489, 180308, 180316); // 'state 704' -> equality_operator..@par-gen.EOF -> reduce (target=208, len=6)
actionsTable.fill(3441, 180480, 180503); // 'state 705' -> true..try -> reduce (target=184, len=6)
actionsTable.fill(3441, 180505, 180518); // 'state 705' -> switch..export -> reduce (target=184, len=6)
actionsTable.fill(3441, 180521, 180530); // 'state 705' -> [..class -> reduce (target=184, len=6)
actionsTable.fill(3441, 180531, 180533); // 'state 705' -> implements..interface -> reduce (target=184, len=6)
actionsTable.fill(3441, 180534, 180538); // 'state 705' -> <..& -> reduce (target=184, len=6)
actionsTable.fill(3441, 180539, 180541); // 'state 705' -> void..typeof -> reduce (target=184, len=6)
actionsTable.fill(3441, 180542, 180563); // 'state 705' -> new..accessibility_modifier -> reduce (target=184, len=6)
actionsTable.fill(3441, 180564, 180572); // 'state 705' -> equality_operator..@par-gen.EOF -> reduce (target=184, len=6)
actionsTable.fill(2833, 180741, 180743); // 'state 706' -> {..} -> reduce (target=136, len=5)
actionsTable[180749] = 2833; // 'state 706' -> ; -> reduce (target=136, len=5)
actionsTable[180754] = 2833; // 'state 706' -> of -> reduce (target=136, len=5)
actionsTable[180763] = 2833; // 'state 706' -> : -> reduce (target=136, len=5)
actionsTable.fill(2833, 180768, 180770); // 'state 706' -> from.., -> reduce (target=136, len=5)
actionsTable[180772] = 2833; // 'state 706' -> type -> reduce (target=136, len=5)
actionsTable[180777] = 2833; // 'state 706' -> [ -> reduce (target=136, len=5)
actionsTable[180779] = 2833; // 'state 706' -> async -> reduce (target=136, len=5)
actionsTable.fill(2833, 180782, 180785); // 'state 706' -> readonly..set -> reduce (target=136, len=5)
actionsTable[180789] = 2833; // 'state 706' -> ?: -> reduce (target=136, len=5)
actionsTable[180794] = 2833; // 'state 706' -> => -> reduce (target=136, len=5)
actionsTable[180798] = 2833; // 'state 706' -> new -> reduce (target=136, len=5)
actionsTable.fill(2833, 180815, 180817); // 'state 706' -> number..string -> reduce (target=136, len=5)
actionsTable[180825] = 2833; // 'state 706' -> identifier -> reduce (target=136, len=5)
actionsTable[181001] = 1807; // 'state 707' -> ) -> reduce (target=135, len=3)
actionsTable[181025] = 1807; // 'state 707' -> , -> reduce (target=135, len=3)
actionsTable.fill(2845, 181248, 181257); // 'state 708' -> true..( -> reduce (target=142, len=5)
actionsTable.fill(2845, 181259, 181261); // 'state 708' -> while..do -> reduce (target=142, len=5)
actionsTable[181261] = 2979; // 'state 708' -> ; -> reduce (target=209, len=5)
actionsTable.fill(2845, 181262, 181267); // 'state 708' -> for..of -> reduce (target=142, len=5)
actionsTable[181267] = 2979; // 'state 708' -> in -> reduce (target=209, len=5)
actionsTable.fill(2845, 181268, 181271); // 'state 708' -> return..try -> reduce (target=142, len=5)
actionsTable[181273] = 2845; // 'state 708' -> switch -> reduce (target=142, len=5)
actionsTable.fill(2845, 181277, 181281); // 'state 708' -> break..from -> reduce (target=142, len=5)
actionsTable.fill(2979, 181282, 181284); // 'state 708' -> *..as -> reduce (target=209, len=5)
actionsTable.fill(2845, 181284, 181286); // 'state 708' -> type..export -> reduce (target=142, len=5)
actionsTable[181289] = 2845; // 'state 708' -> [ -> reduce (target=142, len=5)
actionsTable.fill(2845, 181291, 181293); // 'state 708' -> async..function -> reduce (target=142, len=5)
actionsTable.fill(2845, 181295, 181298); // 'state 708' -> get..class -> reduce (target=142, len=5)
actionsTable[181300] = 2845; // 'state 708' -> interface -> reduce (target=142, len=5)
actionsTable[181302] = 2845; // 'state 708' -> < -> reduce (target=142, len=5)
actionsTable.fill(2979, 181303, 181306); // 'state 708' -> >..& -> reduce (target=209, len=5)
actionsTable.fill(2845, 181307, 181309); // 'state 708' -> void..typeof -> reduce (target=142, len=5)
actionsTable[181310] = 2845; // 'state 708' -> new -> reduce (target=142, len=5)
actionsTable.fill(2979, 181311, 181317); // 'state 708' -> ?..instanceof -> reduce (target=209, len=5)
actionsTable.fill(2845, 181317, 181319); // 'state 708' -> +..- -> reduce (target=142, len=5)
actionsTable[181319] = 2979; // 'state 708' -> ** -> reduce (target=209, len=5)
actionsTable.fill(2845, 181320, 181324); // 'state 708' -> !..await -> reduce (target=142, len=5)
actionsTable.fill(2979, 181324, 181326); // 'state 708' -> ?.... -> reduce (target=209, len=5)
actionsTable.fill(2845, 181327, 181330); // 'state 708' -> number..template_string -> reduce (target=142, len=5)
actionsTable.fill(2979, 181332, 181336); // 'state 708' -> equality_operator..multiplicative_operator -> reduce (target=209, len=5)
actionsTable.fill(2845, 181336, 181340); // 'state 708' -> update_operator..@par-gen.EOF -> reduce (target=142, len=5)
actionsTable[181509] = 1825; // 'state 709' -> { -> reduce (target=144, len=3)
actionsTable[181537] = 1825; // 'state 709' -> , -> reduce (target=144, len=3)
actionsTable[181546] = 1825; // 'state 709' -> ] -> reduce (target=144, len=3)
actionsTable[181559] = 1825; // 'state 709' -> > -> reduce (target=144, len=3)
actionsTable[181560] = 506; // 'state 709' -> | -> shift (target=253, len=0)
actionsTable[181561] = 508; // 'state 709' -> & -> shift (target=254, len=0)
actionsTable[181766] = 2345; // 'state 710' -> } -> reduce (target=148, len=4)
actionsTable[181773] = 2345; // 'state 710' -> ; -> reduce (target=148, len=4)
actionsTable[181778] = 2345; // 'state 710' -> of -> reduce (target=148, len=4)
actionsTable[181792] = 2345; // 'state 710' -> from -> reduce (target=148, len=4)
actionsTable[181796] = 2345; // 'state 710' -> type -> reduce (target=148, len=4)
actionsTable[181801] = 2345; // 'state 710' -> [ -> reduce (target=148, len=4)
actionsTable[181803] = 2345; // 'state 710' -> async -> reduce (target=148, len=4)
actionsTable.fill(2345, 181805, 181809); // 'state 710' -> static..set -> reduce (target=148, len=4)
actionsTable.fill(2345, 181838, 181841); // 'state 710' -> private_property_identifier..string -> reduce (target=148, len=4)
actionsTable[181842] = 2345; // 'state 710' -> accessibility_modifier -> reduce (target=148, len=4)
actionsTable[181849] = 2345; // 'state 710' -> identifier -> reduce (target=148, len=4)
actionsTable[182022] = 2347; // 'state 711' -> } -> reduce (target=149, len=4)
actionsTable[182029] = 2347; // 'state 711' -> ; -> reduce (target=149, len=4)
actionsTable[182034] = 2347; // 'state 711' -> of -> reduce (target=149, len=4)
actionsTable[182048] = 2347; // 'state 711' -> from -> reduce (target=149, len=4)
actionsTable[182052] = 2347; // 'state 711' -> type -> reduce (target=149, len=4)
actionsTable[182057] = 2347; // 'state 711' -> [ -> reduce (target=149, len=4)
actionsTable[182059] = 2347; // 'state 711' -> async -> reduce (target=149, len=4)
actionsTable.fill(2347, 182061, 182065); // 'state 711' -> static..set -> reduce (target=149, len=4)
actionsTable.fill(2347, 182094, 182097); // 'state 711' -> private_property_identifier..string -> reduce (target=149, len=4)
actionsTable[182098] = 2347; // 'state 711' -> accessibility_modifier -> reduce (target=149, len=4)
actionsTable[182105] = 2347; // 'state 711' -> identifier -> reduce (target=149, len=4)
actionsTable.fill(3377, 182272, 182281); // 'state 712' -> true..( -> reduce (target=152, len=6)
actionsTable.fill(3377, 182282, 182285); // 'state 712' -> else..do -> reduce (target=152, len=6)
actionsTable.fill(3377, 182286, 182291); // 'state 712' -> for..of -> reduce (target=152, len=6)
actionsTable.fill(3377, 182292, 182295); // 'state 712' -> return..try -> reduce (target=152, len=6)
actionsTable.fill(3377, 182297, 182299); // 'state 712' -> switch..case -> reduce (target=152, len=6)
actionsTable.fill(3377, 182300, 182305); // 'state 712' -> default..from -> reduce (target=152, len=6)
actionsTable.fill(3377, 182308, 182310); // 'state 712' -> type..export -> reduce (target=152, len=6)
actionsTable[182313] = 3377; // 'state 712' -> [ -> reduce (target=152, len=6)
actionsTable.fill(3377, 182315, 182317); // 'state 712' -> async..function -> reduce (target=152, len=6)
actionsTable.fill(3377, 182319, 182322); // 'state 712' -> get..class -> reduce (target=152, len=6)
actionsTable[182324] = 3377; // 'state 712' -> interface -> reduce (target=152, len=6)
actionsTable[182326] = 3377; // 'state 712' -> < -> reduce (target=152, len=6)
actionsTable.fill(3377, 182331, 182333); // 'state 712' -> void..typeof -> reduce (target=152, len=6)
actionsTable[182334] = 3377; // 'state 712' -> new -> reduce (target=152, len=6)
actionsTable.fill(3377, 182341, 182343); // 'state 712' -> +..- -> reduce (target=152, len=6)
actionsTable.fill(3377, 182344, 182348); // 'state 712' -> !..await -> reduce (target=152, len=6)
actionsTable.fill(3377, 182351, 182354); // 'state 712' -> number..template_string -> reduce (target=152, len=6)
actionsTable.fill(3377, 182360, 182364); // 'state 712' -> update_operator..@par-gen.EOF -> reduce (target=152, len=6)
actionsTable.fill(2363, 182528, 182551); // 'state 713' -> true..try -> reduce (target=157, len=4)
actionsTable.fill(2363, 182553, 182566); // 'state 713' -> switch..export -> reduce (target=157, len=4)
actionsTable[182567] = 2363; // 'state 713' -> = -> reduce (target=157, len=4)
actionsTable.fill(2363, 182569, 182578); // 'state 713' -> [..class -> reduce (target=157, len=4)
actionsTable.fill(2363, 182579, 182581); // 'state 713' -> implements..interface -> reduce (target=157, len=4)
actionsTable.fill(2363, 182582, 182589); // 'state 713' -> <..typeof -> reduce (target=157, len=4)
actionsTable.fill(2363, 182590, 182611); // 'state 713' -> new..accessibility_modifier -> reduce (target=157, len=4)
actionsTable.fill(2363, 182612, 182620); // 'state 713' -> equality_operator..@par-gen.EOF -> reduce (target=157, len=4)
actionsTable[182817] = 2873; // 'state 714' -> , -> reduce (target=156, len=5)
actionsTable[182839] = 2873; // 'state 714' -> > -> reduce (target=156, len=5)
actionsTable[182840] = 506; // 'state 714' -> | -> shift (target=253, len=0)
actionsTable[182841] = 508; // 'state 714' -> & -> shift (target=254, len=0)
actionsTable[183046] = 3479; // 'state 715' -> } -> reduce (target=203, len=6)
actionsTable[183073] = 3479; // 'state 715' -> , -> reduce (target=203, len=6)
actionsTable.fill(3781, 183296, 183305); // 'state 716' -> true..( -> reduce (target=98, len=7)
actionsTable.fill(3781, 183306, 183309); // 'state 716' -> else..do -> reduce (target=98, len=7)
actionsTable.fill(3781, 183310, 183315); // 'state 716' -> for..of -> reduce (target=98, len=7)
actionsTable.fill(3781, 183316, 183319); // 'state 716' -> return..try -> reduce (target=98, len=7)
actionsTable.fill(3781, 183321, 183323); // 'state 716' -> switch..case -> reduce (target=98, len=7)
actionsTable.fill(3781, 183324, 183329); // 'state 716' -> default..from -> reduce (target=98, len=7)
actionsTable.fill(3781, 183332, 183334); // 'state 716' -> type..export -> reduce (target=98, len=7)
actionsTable[183337] = 3781; // 'state 716' -> [ -> reduce (target=98, len=7)
actionsTable.fill(3781, 183339, 183341); // 'state 716' -> async..function -> reduce (target=98, len=7)
actionsTable.fill(3781, 183343, 183346); // 'state 716' -> get..class -> reduce (target=98, len=7)
actionsTable[183348] = 3781; // 'state 716' -> interface -> reduce (target=98, len=7)
actionsTable[183350] = 3781; // 'state 716' -> < -> reduce (target=98, len=7)
actionsTable.fill(3781, 183355, 183357); // 'state 716' -> void..typeof -> reduce (target=98, len=7)
actionsTable[183358] = 3781; // 'state 716' -> new -> reduce (target=98, len=7)
actionsTable.fill(3781, 183365, 183367); // 'state 716' -> +..- -> reduce (target=98, len=7)
actionsTable.fill(3781, 183368, 183372); // 'state 716' -> !..await -> reduce (target=98, len=7)
actionsTable.fill(3781, 183375, 183378); // 'state 716' -> number..template_string -> reduce (target=98, len=7)
actionsTable.fill(3781, 183384, 183388); // 'state 716' -> update_operator..@par-gen.EOF -> reduce (target=98, len=7)
actionsTable.fill(3785, 183552, 183561); // 'state 717' -> true..( -> reduce (target=100, len=7)
actionsTable.fill(3785, 183562, 183565); // 'state 717' -> else..do -> reduce (target=100, len=7)
actionsTable.fill(3785, 183566, 183571); // 'state 717' -> for..of -> reduce (target=100, len=7)
actionsTable.fill(3785, 183572, 183575); // 'state 717' -> return..try -> reduce (target=100, len=7)
actionsTable.fill(3785, 183577, 183579); // 'state 717' -> switch..case -> reduce (target=100, len=7)
actionsTable.fill(3785, 183580, 183585); // 'state 717' -> default..from -> reduce (target=100, len=7)
actionsTable.fill(3785, 183588, 183590); // 'state 717' -> type..export -> reduce (target=100, len=7)
actionsTable[183593] = 3785; // 'state 717' -> [ -> reduce (target=100, len=7)
actionsTable.fill(3785, 183595, 183597); // 'state 717' -> async..function -> reduce (target=100, len=7)
actionsTable.fill(3785, 183599, 183602); // 'state 717' -> get..class -> reduce (target=100, len=7)
actionsTable[183604] = 3785; // 'state 717' -> interface -> reduce (target=100, len=7)
actionsTable[183606] = 3785; // 'state 717' -> < -> reduce (target=100, len=7)
actionsTable.fill(3785, 183611, 183613); // 'state 717' -> void..typeof -> reduce (target=100, len=7)
actionsTable[183614] = 3785; // 'state 717' -> new -> reduce (target=100, len=7)
actionsTable.fill(3785, 183621, 183623); // 'state 717' -> +..- -> reduce (target=100, len=7)
actionsTable.fill(3785, 183624, 183628); // 'state 717' -> !..await -> reduce (target=100, len=7)
actionsTable.fill(3785, 183631, 183634); // 'state 717' -> number..template_string -> reduce (target=100, len=7)
actionsTable.fill(3785, 183640, 183644); // 'state 717' -> update_operator..@par-gen.EOF -> reduce (target=100, len=7)
actionsTable.fill(3787, 183808, 183817); // 'state 718' -> true..( -> reduce (target=101, len=7)
actionsTable.fill(3787, 183818, 183821); // 'state 718' -> else..do -> reduce (target=101, len=7)
actionsTable.fill(3787, 183822, 183827); // 'state 718' -> for..of -> reduce (target=101, len=7)
actionsTable.fill(3787, 183828, 183831); // 'state 718' -> return..try -> reduce (target=101, len=7)
actionsTable.fill(3787, 183833, 183835); // 'state 718' -> switch..case -> reduce (target=101, len=7)
actionsTable.fill(3787, 183836, 183841); // 'state 718' -> default..from -> reduce (target=101, len=7)
actionsTable.fill(3787, 183844, 183846); // 'state 718' -> type..export -> reduce (target=101, len=7)
actionsTable[183849] = 3787; // 'state 718' -> [ -> reduce (target=101, len=7)
actionsTable.fill(3787, 183851, 183853); // 'state 718' -> async..function -> reduce (target=101, len=7)
actionsTable.fill(3787, 183855, 183858); // 'state 718' -> get..class -> reduce (target=101, len=7)
actionsTable[183860] = 3787; // 'state 718' -> interface -> reduce (target=101, len=7)
actionsTable[183862] = 3787; // 'state 718' -> < -> reduce (target=101, len=7)
actionsTable.fill(3787, 183867, 183869); // 'state 718' -> void..typeof -> reduce (target=101, len=7)
actionsTable[183870] = 3787; // 'state 718' -> new -> reduce (target=101, len=7)
actionsTable.fill(3787, 183877, 183879); // 'state 718' -> +..- -> reduce (target=101, len=7)
actionsTable.fill(3787, 183880, 183884); // 'state 718' -> !..await -> reduce (target=101, len=7)
actionsTable.fill(3787, 183887, 183890); // 'state 718' -> number..template_string -> reduce (target=101, len=7)
actionsTable.fill(3787, 183896, 183900); // 'state 718' -> update_operator..@par-gen.EOF -> reduce (target=101, len=7)
actionsTable.fill(2773, 184064, 184073); // 'state 719' -> true..( -> reduce (target=106, len=5)
actionsTable.fill(2773, 184074, 184077); // 'state 719' -> else..do -> reduce (target=106, len=5)
actionsTable.fill(2773, 184078, 184083); // 'state 719' -> for..of -> reduce (target=106, len=5)
actionsTable.fill(2773, 184084, 184087); // 'state 719' -> return..try -> reduce (target=106, len=5)
actionsTable.fill(2773, 184088, 184091); // 'state 719' -> finally..case -> reduce (target=106, len=5)
actionsTable.fill(2773, 184092, 184097); // 'state 719' -> default..from -> reduce (target=106, len=5)
actionsTable.fill(2773, 184100, 184102); // 'state 719' -> type..export -> reduce (target=106, len=5)
actionsTable[184105] = 2773; // 'state 719' -> [ -> reduce (target=106, len=5)
actionsTable.fill(2773, 184107, 184109); // 'state 719' -> async..function -> reduce (target=106, len=5)
actionsTable.fill(2773, 184111, 184114); // 'state 719' -> get..class -> reduce (target=106, len=5)
actionsTable[184116] = 2773; // 'state 719' -> interface -> reduce (target=106, len=5)
actionsTable[184118] = 2773; // 'state 719' -> < -> reduce (target=106, len=5)
actionsTable.fill(2773, 184123, 184125); // 'state 719' -> void..typeof -> reduce (target=106, len=5)
actionsTable[184126] = 2773; // 'state 719' -> new -> reduce (target=106, len=5)
actionsTable.fill(2773, 184133, 184135); // 'state 719' -> +..- -> reduce (target=106, len=5)
actionsTable.fill(2773, 184136, 184140); // 'state 719' -> !..await -> reduce (target=106, len=5)
actionsTable.fill(2773, 184143, 184146); // 'state 719' -> number..template_string -> reduce (target=106, len=5)
actionsTable.fill(2773, 184152, 184156); // 'state 719' -> update_operator..@par-gen.EOF -> reduce (target=106, len=5)
actionsTable.fill(1757, 184320, 184329); // 'state 720' -> true..( -> reduce (target=110, len=3)
actionsTable.fill(1757, 184330, 184333); // 'state 720' -> else..do -> reduce (target=110, len=3)
actionsTable.fill(1757, 184334, 184339); // 'state 720' -> for..of -> reduce (target=110, len=3)
actionsTable.fill(1757, 184340, 184343); // 'state 720' -> return..try -> reduce (target=110, len=3)
actionsTable.fill(1757, 184345, 184347); // 'state 720' -> switch..case -> reduce (target=110, len=3)
actionsTable.fill(1757, 184348, 184353); // 'state 720' -> default..from -> reduce (target=110, len=3)
actionsTable.fill(1757, 184356, 184358); // 'state 720' -> type..export -> reduce (target=110, len=3)
actionsTable[184361] = 1757; // 'state 720' -> [ -> reduce (target=110, len=3)
actionsTable.fill(1757, 184363, 184365); // 'state 720' -> async..function -> reduce (target=110, len=3)
actionsTable.fill(1757, 184367, 184370); // 'state 720' -> get..class -> reduce (target=110, len=3)
actionsTable[184372] = 1757; // 'state 720' -> interface -> reduce (target=110, len=3)
actionsTable[184374] = 1757; // 'state 720' -> < -> reduce (target=110, len=3)
actionsTable.fill(1757, 184379, 184381); // 'state 720' -> void..typeof -> reduce (target=110, len=3)
actionsTable[184382] = 1757; // 'state 720' -> new -> reduce (target=110, len=3)
actionsTable.fill(1757, 184389, 184391); // 'state 720' -> +..- -> reduce (target=110, len=3)
actionsTable.fill(1757, 184392, 184396); // 'state 720' -> !..await -> reduce (target=110, len=3)
actionsTable.fill(1757, 184399, 184402); // 'state 720' -> number..template_string -> reduce (target=110, len=3)
actionsTable.fill(1757, 184408, 184412); // 'state 720' -> update_operator..@par-gen.EOF -> reduce (target=110, len=3)
actionsTable[184582] = 1243; // 'state 721' -> } -> reduce (target=109, len=2)
actionsTable[184602] = 1243; // 'state 721' -> case -> reduce (target=109, len=2)
actionsTable[184604] = 1243; // 'state 721' -> default -> reduce (target=109, len=2)
actionsTable.fill(2883, 184832, 184855); // 'state 722' -> true..try -> reduce (target=161, len=5)
actionsTable.fill(2883, 184857, 184870); // 'state 722' -> switch..export -> reduce (target=161, len=5)
actionsTable[184871] = 2883; // 'state 722' -> = -> reduce (target=161, len=5)
actionsTable.fill(2883, 184873, 184882); // 'state 722' -> [..class -> reduce (target=161, len=5)
actionsTable.fill(2883, 184883, 184885); // 'state 722' -> implements..interface -> reduce (target=161, len=5)
actionsTable.fill(2883, 184886, 184893); // 'state 722' -> <..typeof -> reduce (target=161, len=5)
actionsTable.fill(2883, 184894, 184915); // 'state 722' -> new..accessibility_modifier -> reduce (target=161, len=5)
actionsTable.fill(2883, 184916, 184924); // 'state 722' -> equality_operator..@par-gen.EOF -> reduce (target=161, len=5)
actionsTable[185094] = 767; // 'state 723' -> } -> reduce (target=127, len=1)
actionsTable[185096] = 869; // 'state 723' -> ( -> reduce (target=178, len=1)
actionsTable[185107] = 869; // 'state 723' -> in -> reduce (target=178, len=1)
actionsTable[185121] = 767; // 'state 723' -> , -> reduce (target=127, len=1)
actionsTable.fill(869, 185122, 185124); // 'state 723' -> *..as -> reduce (target=178, len=1)
actionsTable[185127] = 875; // 'state 723' -> = -> reduce (target=181, len=1)
actionsTable[185129] = 869; // 'state 723' -> [ -> reduce (target=178, len=1)
actionsTable.fill(869, 185142, 185146); // 'state 723' -> <..& -> reduce (target=178, len=1)
actionsTable[185146] = 162; // 'state 723' -> => -> shift (target=81, len=0)
actionsTable.fill(869, 185151, 185160); // 'state 723' -> ?..** -> reduce (target=178, len=1)
actionsTable.fill(869, 185164, 185166); // 'state 723' -> ?.... -> reduce (target=178, len=1)
actionsTable[185171] = 875; // 'state 723' -> compound_assignment_operator -> reduce (target=181, len=1)
actionsTable.fill(869, 185172, 185177); // 'state 723' -> equality_operator..update_operator -> reduce (target=178, len=1)
actionsTable.fill(2893, 185344, 185367); // 'state 724' -> true..try -> reduce (target=166, len=5)
actionsTable.fill(2893, 185369, 185382); // 'state 724' -> switch..export -> reduce (target=166, len=5)
actionsTable[185383] = 2893; // 'state 724' -> = -> reduce (target=166, len=5)
actionsTable.fill(2893, 185385, 185394); // 'state 724' -> [..class -> reduce (target=166, len=5)
actionsTable.fill(2893, 185395, 185397); // 'state 724' -> implements..interface -> reduce (target=166, len=5)
actionsTable.fill(2893, 185398, 185405); // 'state 724' -> <..typeof -> reduce (target=166, len=5)
actionsTable.fill(2893, 185406, 185427); // 'state 724' -> new..accessibility_modifier -> reduce (target=166, len=5)
actionsTable.fill(2893, 185428, 185436); // 'state 724' -> equality_operator..@par-gen.EOF -> reduce (target=166, len=5)
actionsTable[185606] = 2395; // 'state 725' -> } -> reduce (target=173, len=4)
actionsTable[185613] = 2395; // 'state 725' -> ; -> reduce (target=173, len=4)
actionsTable[185618] = 2395; // 'state 725' -> of -> reduce (target=173, len=4)
actionsTable.fill(2395, 185632, 185634); // 'state 725' -> from.., -> reduce (target=173, len=4)
actionsTable[185636] = 2395; // 'state 725' -> type -> reduce (target=173, len=4)
actionsTable[185641] = 2395; // 'state 725' -> [ -> reduce (target=173, len=4)
actionsTable[185643] = 2395; // 'state 725' -> async -> reduce (target=173, len=4)
actionsTable.fill(2395, 185646, 185649); // 'state 725' -> readonly..set -> reduce (target=173, len=4)
actionsTable[185662] = 2395; // 'state 725' -> new -> reduce (target=173, len=4)
actionsTable.fill(2395, 185679, 185681); // 'state 725' -> number..string -> reduce (target=173, len=4)
actionsTable[185689] = 2395; // 'state 725' -> identifier -> reduce (target=173, len=4)
actionsTable[185862] = 2397; // 'state 726' -> } -> reduce (target=174, len=4)
actionsTable[185869] = 2397; // 'state 726' -> ; -> reduce (target=174, len=4)
actionsTable[185874] = 2397; // 'state 726' -> of -> reduce (target=174, len=4)
actionsTable.fill(2397, 185888, 185890); // 'state 726' -> from.., -> reduce (target=174, len=4)
actionsTable[185892] = 2397; // 'state 726' -> type -> reduce (target=174, len=4)
actionsTable[185897] = 2397; // 'state 726' -> [ -> reduce (target=174, len=4)
actionsTable[185899] = 2397; // 'state 726' -> async -> reduce (target=174, len=4)
actionsTable.fill(2397, 185902, 185905); // 'state 726' -> readonly..set -> reduce (target=174, len=4)
actionsTable[185918] = 2397; // 'state 726' -> new -> reduce (target=174, len=4)
actionsTable.fill(2397, 185935, 185937); // 'state 726' -> number..string -> reduce (target=174, len=4)
actionsTable[185945] = 2397; // 'state 726' -> identifier -> reduce (target=174, len=4)
actionsTable[186154] = 786; // 'state 727' -> ] -> shift (target=393, len=0)
actionsTable[186168] = 506; // 'state 727' -> | -> shift (target=253, len=0)
actionsTable[186169] = 508; // 'state 727' -> & -> shift (target=254, len=0)
actionsTable.fill(3341, 186368, 186377); // 'state 728' -> true..( -> reduce (target=134, len=6)
actionsTable.fill(3341, 186378, 186381); // 'state 728' -> else..do -> reduce (target=134, len=6)
actionsTable.fill(3341, 186382, 186387); // 'state 728' -> for..of -> reduce (target=134, len=6)
actionsTable.fill(3341, 186388, 186391); // 'state 728' -> return..try -> reduce (target=134, len=6)
actionsTable.fill(3341, 186393, 186395); // 'state 728' -> switch..case -> reduce (target=134, len=6)
actionsTable.fill(3341, 186396, 186401); // 'state 728' -> default..from -> reduce (target=134, len=6)
actionsTable.fill(3341, 186404, 186406); // 'state 728' -> type..export -> reduce (target=134, len=6)
actionsTable[186409] = 3341; // 'state 728' -> [ -> reduce (target=134, len=6)
actionsTable.fill(3341, 186411, 186413); // 'state 728' -> async..function -> reduce (target=134, len=6)
actionsTable.fill(3341, 186415, 186418); // 'state 728' -> get..class -> reduce (target=134, len=6)
actionsTable[186420] = 3341; // 'state 728' -> interface -> reduce (target=134, len=6)
actionsTable[186422] = 3341; // 'state 728' -> < -> reduce (target=134, len=6)
actionsTable.fill(3341, 186427, 186429); // 'state 728' -> void..typeof -> reduce (target=134, len=6)
actionsTable[186430] = 3341; // 'state 728' -> new -> reduce (target=134, len=6)
actionsTable.fill(3341, 186437, 186439); // 'state 728' -> +..- -> reduce (target=134, len=6)
actionsTable.fill(3341, 186440, 186444); // 'state 728' -> !..await -> reduce (target=134, len=6)
actionsTable.fill(3341, 186447, 186450); // 'state 728' -> number..template_string -> reduce (target=134, len=6)
actionsTable.fill(3341, 186456, 186460); // 'state 728' -> update_operator..@par-gen.EOF -> reduce (target=134, len=6)
actionsTable.fill(3831, 186624, 186633); // 'state 729' -> true..( -> reduce (target=123, len=7)
actionsTable.fill(3831, 186634, 186637); // 'state 729' -> else..do -> reduce (target=123, len=7)
actionsTable.fill(3831, 186638, 186643); // 'state 729' -> for..of -> reduce (target=123, len=7)
actionsTable.fill(3831, 186644, 186647); // 'state 729' -> return..try -> reduce (target=123, len=7)
actionsTable.fill(3831, 186649, 186651); // 'state 729' -> switch..case -> reduce (target=123, len=7)
actionsTable.fill(3831, 186652, 186657); // 'state 729' -> default..from -> reduce (target=123, len=7)
actionsTable.fill(3831, 186660, 186662); // 'state 729' -> type..export -> reduce (target=123, len=7)
actionsTable[186665] = 3831; // 'state 729' -> [ -> reduce (target=123, len=7)
actionsTable.fill(3831, 186667, 186669); // 'state 729' -> async..function -> reduce (target=123, len=7)
actionsTable.fill(3831, 186671, 186674); // 'state 729' -> get..class -> reduce (target=123, len=7)
actionsTable[186676] = 3831; // 'state 729' -> interface -> reduce (target=123, len=7)
actionsTable[186678] = 3831; // 'state 729' -> < -> reduce (target=123, len=7)
actionsTable.fill(3831, 186683, 186685); // 'state 729' -> void..typeof -> reduce (target=123, len=7)
actionsTable[186686] = 3831; // 'state 729' -> new -> reduce (target=123, len=7)
actionsTable.fill(3831, 186693, 186695); // 'state 729' -> +..- -> reduce (target=123, len=7)
actionsTable.fill(3831, 186696, 186700); // 'state 729' -> !..await -> reduce (target=123, len=7)
actionsTable.fill(3831, 186703, 186706); // 'state 729' -> number..template_string -> reduce (target=123, len=7)
actionsTable.fill(3831, 186712, 186716); // 'state 729' -> update_operator..@par-gen.EOF -> reduce (target=123, len=7)
actionsTable.fill(3853, 186880, 186889); // 'state 730' -> true..( -> reduce (target=134, len=7)
actionsTable.fill(3853, 186890, 186899); // 'state 730' -> else..of -> reduce (target=134, len=7)
actionsTable.fill(3853, 186900, 186903); // 'state 730' -> return..try -> reduce (target=134, len=7)
actionsTable.fill(3853, 186905, 186907); // 'state 730' -> switch..case -> reduce (target=134, len=7)
actionsTable.fill(3853, 186908, 186913); // 'state 730' -> default..from -> reduce (target=134, len=7)
actionsTable.fill(3853, 186916, 186918); // 'state 730' -> type..export -> reduce (target=134, len=7)
actionsTable[186921] = 3853; // 'state 730' -> [ -> reduce (target=134, len=7)
actionsTable.fill(3853, 186923, 186925); // 'state 730' -> async..function -> reduce (target=134, len=7)
actionsTable.fill(3853, 186927, 186930); // 'state 730' -> get..class -> reduce (target=134, len=7)
actionsTable[186932] = 3853; // 'state 730' -> interface -> reduce (target=134, len=7)
actionsTable[186934] = 3853; // 'state 730' -> < -> reduce (target=134, len=7)
actionsTable.fill(3853, 186939, 186941); // 'state 730' -> void..typeof -> reduce (target=134, len=7)
actionsTable[186942] = 3853; // 'state 730' -> new -> reduce (target=134, len=7)
actionsTable.fill(3853, 186949, 186951); // 'state 730' -> +..- -> reduce (target=134, len=7)
actionsTable.fill(3853, 186952, 186956); // 'state 730' -> !..await -> reduce (target=134, len=7)
actionsTable.fill(3853, 186959, 186962); // 'state 730' -> number..template_string -> reduce (target=134, len=7)
actionsTable.fill(3853, 186968, 186972); // 'state 730' -> update_operator..@par-gen.EOF -> reduce (target=134, len=7)
actionsTable.fill(3853, 187136, 187145); // 'state 731' -> true..( -> reduce (target=134, len=7)
actionsTable.fill(3853, 187146, 187155); // 'state 731' -> else..of -> reduce (target=134, len=7)
actionsTable[187155] = 4001; // 'state 731' -> in -> reduce (target=208, len=7)
actionsTable.fill(3853, 187156, 187159); // 'state 731' -> return..try -> reduce (target=134, len=7)
actionsTable.fill(3853, 187161, 187163); // 'state 731' -> switch..case -> reduce (target=134, len=7)
actionsTable.fill(3853, 187164, 187169); // 'state 731' -> default..from -> reduce (target=134, len=7)
actionsTable.fill(4001, 187170, 187172); // 'state 731' -> *..as -> reduce (target=208, len=7)
actionsTable.fill(3853, 187172, 187174); // 'state 731' -> type..export -> reduce (target=134, len=7)
actionsTable[187177] = 3853; // 'state 731' -> [ -> reduce (target=134, len=7)
actionsTable.fill(3853, 187179, 187181); // 'state 731' -> async..function -> reduce (target=134, len=7)
actionsTable.fill(3853, 187183, 187186); // 'state 731' -> get..class -> reduce (target=134, len=7)
actionsTable[187188] = 3853; // 'state 731' -> interface -> reduce (target=134, len=7)
actionsTable[187190] = 3853; // 'state 731' -> < -> reduce (target=134, len=7)
actionsTable.fill(4001, 187191, 187194); // 'state 731' -> >..& -> reduce (target=208, len=7)
actionsTable.fill(3853, 187195, 187197); // 'state 731' -> void..typeof -> reduce (target=134, len=7)
actionsTable[187198] = 3853; // 'state 731' -> new -> reduce (target=134, len=7)
actionsTable.fill(4001, 187199, 187205); // 'state 731' -> ?..instanceof -> reduce (target=208, len=7)
actionsTable.fill(3853, 187205, 187207); // 'state 731' -> +..- -> reduce (target=134, len=7)
actionsTable[187207] = 4001; // 'state 731' -> ** -> reduce (target=208, len=7)
actionsTable.fill(3853, 187208, 187212); // 'state 731' -> !..await -> reduce (target=134, len=7)
actionsTable.fill(4001, 187212, 187214); // 'state 731' -> ?.... -> reduce (target=208, len=7)
actionsTable.fill(3853, 187215, 187218); // 'state 731' -> number..template_string -> reduce (target=134, len=7)
actionsTable.fill(4001, 187220, 187224); // 'state 731' -> equality_operator..multiplicative_operator -> reduce (target=208, len=7)
actionsTable.fill(3853, 187224, 187228); // 'state 731' -> update_operator..@par-gen.EOF -> reduce (target=134, len=7)
actionsTable.fill(3341, 187392, 187401); // 'state 732' -> true..( -> reduce (target=134, len=6)
actionsTable.fill(3341, 187403, 187405); // 'state 732' -> while..do -> reduce (target=134, len=6)
actionsTable[187405] = 3489; // 'state 732' -> ; -> reduce (target=208, len=6)
actionsTable.fill(3341, 187406, 187411); // 'state 732' -> for..of -> reduce (target=134, len=6)
actionsTable[187411] = 3489; // 'state 732' -> in -> reduce (target=208, len=6)
actionsTable.fill(3341, 187412, 187415); // 'state 732' -> return..try -> reduce (target=134, len=6)
actionsTable[187417] = 3341; // 'state 732' -> switch -> reduce (target=134, len=6)
actionsTable.fill(3341, 187421, 187425); // 'state 732' -> break..from -> reduce (target=134, len=6)
actionsTable.fill(3489, 187426, 187428); // 'state 732' -> *..as -> reduce (target=208, len=6)
actionsTable.fill(3341, 187428, 187430); // 'state 732' -> type..export -> reduce (target=134, len=6)
actionsTable[187433] = 3341; // 'state 732' -> [ -> reduce (target=134, len=6)
actionsTable.fill(3341, 187435, 187437); // 'state 732' -> async..function -> reduce (target=134, len=6)
actionsTable.fill(3341, 187439, 187442); // 'state 732' -> get..class -> reduce (target=134, len=6)
actionsTable[187444] = 3341; // 'state 732' -> interface -> reduce (target=134, len=6)
actionsTable[187446] = 3341; // 'state 732' -> < -> reduce (target=134, len=6)
actionsTable.fill(3489, 187447, 187450); // 'state 732' -> >..& -> reduce (target=208, len=6)
actionsTable.fill(3341, 187451, 187453); // 'state 732' -> void..typeof -> reduce (target=134, len=6)
actionsTable[187454] = 3341; // 'state 732' -> new -> reduce (target=134, len=6)
actionsTable.fill(3489, 187455, 187461); // 'state 732' -> ?..instanceof -> reduce (target=208, len=6)
actionsTable.fill(3341, 187461, 187463); // 'state 732' -> +..- -> reduce (target=134, len=6)
actionsTable[187463] = 3489; // 'state 732' -> ** -> reduce (target=208, len=6)
actionsTable.fill(3341, 187464, 187468); // 'state 732' -> !..await -> reduce (target=134, len=6)
actionsTable.fill(3489, 187468, 187470); // 'state 732' -> ?.... -> reduce (target=208, len=6)
actionsTable.fill(3341, 187471, 187474); // 'state 732' -> number..template_string -> reduce (target=134, len=6)
actionsTable.fill(3489, 187476, 187480); // 'state 732' -> equality_operator..multiplicative_operator -> reduce (target=208, len=6)
actionsTable.fill(3341, 187480, 187484); // 'state 732' -> update_operator..@par-gen.EOF -> reduce (target=134, len=6)
actionsTable[187654] = 2857; // 'state 733' -> } -> reduce (target=148, len=5)
actionsTable[187661] = 2857; // 'state 733' -> ; -> reduce (target=148, len=5)
actionsTable[187666] = 2857; // 'state 733' -> of -> reduce (target=148, len=5)
actionsTable[187680] = 2857; // 'state 733' -> from -> reduce (target=148, len=5)
actionsTable[187684] = 2857; // 'state 733' -> type -> reduce (target=148, len=5)
actionsTable[187689] = 2857; // 'state 733' -> [ -> reduce (target=148, len=5)
actionsTable[187691] = 2857; // 'state 733' -> async -> reduce (target=148, len=5)
actionsTable.fill(2857, 187693, 187697); // 'state 733' -> static..set -> reduce (target=148, len=5)
actionsTable.fill(2857, 187726, 187729); // 'state 733' -> private_property_identifier..string -> reduce (target=148, len=5)
actionsTable[187730] = 2857; // 'state 733' -> accessibility_modifier -> reduce (target=148, len=5)
actionsTable[187737] = 2857; // 'state 733' -> identifier -> reduce (target=148, len=5)
actionsTable[187910] = 2859; // 'state 734' -> } -> reduce (target=149, len=5)
actionsTable[187917] = 2859; // 'state 734' -> ; -> reduce (target=149, len=5)
actionsTable[187922] = 2859; // 'state 734' -> of -> reduce (target=149, len=5)
actionsTable[187936] = 2859; // 'state 734' -> from -> reduce (target=149, len=5)
actionsTable[187940] = 2859; // 'state 734' -> type -> reduce (target=149, len=5)
actionsTable[187945] = 2859; // 'state 734' -> [ -> reduce (target=149, len=5)
actionsTable[187947] = 2859; // 'state 734' -> async -> reduce (target=149, len=5)
actionsTable.fill(2859, 187949, 187953); // 'state 734' -> static..set -> reduce (target=149, len=5)
actionsTable.fill(2859, 187982, 187985); // 'state 734' -> private_property_identifier..string -> reduce (target=149, len=5)
actionsTable[187986] = 2859; // 'state 734' -> accessibility_modifier -> reduce (target=149, len=5)
actionsTable[187993] = 2859; // 'state 734' -> identifier -> reduce (target=149, len=5)
actionsTable.fill(2875, 188160, 188183); // 'state 735' -> true..try -> reduce (target=157, len=5)
actionsTable.fill(2875, 188185, 188198); // 'state 735' -> switch..export -> reduce (target=157, len=5)
actionsTable[188199] = 2875; // 'state 735' -> = -> reduce (target=157, len=5)
actionsTable.fill(2875, 188201, 188210); // 'state 735' -> [..class -> reduce (target=157, len=5)
actionsTable.fill(2875, 188211, 188213); // 'state 735' -> implements..interface -> reduce (target=157, len=5)
actionsTable.fill(2875, 188214, 188221); // 'state 735' -> <..typeof -> reduce (target=157, len=5)
actionsTable.fill(2875, 188222, 188243); // 'state 735' -> new..accessibility_modifier -> reduce (target=157, len=5)
actionsTable.fill(2875, 188244, 188252); // 'state 735' -> equality_operator..@par-gen.EOF -> reduce (target=157, len=5)
actionsTable.fill(4299, 188416, 188425); // 'state 736' -> true..( -> reduce (target=101, len=8)
actionsTable.fill(4299, 188426, 188429); // 'state 736' -> else..do -> reduce (target=101, len=8)
actionsTable.fill(4299, 188430, 188435); // 'state 736' -> for..of -> reduce (target=101, len=8)
actionsTable.fill(4299, 188436, 188439); // 'state 736' -> return..try -> reduce (target=101, len=8)
actionsTable.fill(4299, 188441, 188443); // 'state 736' -> switch..case -> reduce (target=101, len=8)
actionsTable.fill(4299, 188444, 188449); // 'state 736' -> default..from -> reduce (target=101, len=8)
actionsTable.fill(4299, 188452, 188454); // 'state 736' -> type..export -> reduce (target=101, len=8)
actionsTable[188457] = 4299; // 'state 736' -> [ -> reduce (target=101, len=8)
actionsTable.fill(4299, 188459, 188461); // 'state 736' -> async..function -> reduce (target=101, len=8)
actionsTable.fill(4299, 188463, 188466); // 'state 736' -> get..class -> reduce (target=101, len=8)
actionsTable[188468] = 4299; // 'state 736' -> interface -> reduce (target=101, len=8)
actionsTable[188470] = 4299; // 'state 736' -> < -> reduce (target=101, len=8)
actionsTable.fill(4299, 188475, 188477); // 'state 736' -> void..typeof -> reduce (target=101, len=8)
actionsTable[188478] = 4299; // 'state 736' -> new -> reduce (target=101, len=8)
actionsTable.fill(4299, 188485, 188487); // 'state 736' -> +..- -> reduce (target=101, len=8)
actionsTable.fill(4299, 188488, 188492); // 'state 736' -> !..await -> reduce (target=101, len=8)
actionsTable.fill(4299, 188495, 188498); // 'state 736' -> number..template_string -> reduce (target=101, len=8)
actionsTable.fill(4299, 188504, 188508); // 'state 736' -> update_operator..@par-gen.EOF -> reduce (target=101, len=8)
actionsTable.fill(4301, 188672, 188681); // 'state 737' -> true..( -> reduce (target=102, len=8)
actionsTable.fill(4301, 188682, 188685); // 'state 737' -> else..do -> reduce (target=102, len=8)
actionsTable.fill(4301, 188686, 188691); // 'state 737' -> for..of -> reduce (target=102, len=8)
actionsTable.fill(4301, 188692, 188695); // 'state 737' -> return..try -> reduce (target=102, len=8)
actionsTable.fill(4301, 188697, 188699); // 'state 737' -> switch..case -> reduce (target=102, len=8)
actionsTable.fill(4301, 188700, 188705); // 'state 737' -> default..from -> reduce (target=102, len=8)
actionsTable.fill(4301, 188708, 188710); // 'state 737' -> type..export -> reduce (target=102, len=8)
actionsTable[188713] = 4301; // 'state 737' -> [ -> reduce (target=102, len=8)
actionsTable.fill(4301, 188715, 188717); // 'state 737' -> async..function -> reduce (target=102, len=8)
actionsTable.fill(4301, 188719, 188722); // 'state 737' -> get..class -> reduce (target=102, len=8)
actionsTable[188724] = 4301; // 'state 737' -> interface -> reduce (target=102, len=8)
actionsTable[188726] = 4301; // 'state 737' -> < -> reduce (target=102, len=8)
actionsTable.fill(4301, 188731, 188733); // 'state 737' -> void..typeof -> reduce (target=102, len=8)
actionsTable[188734] = 4301; // 'state 737' -> new -> reduce (target=102, len=8)
actionsTable.fill(4301, 188741, 188743); // 'state 737' -> +..- -> reduce (target=102, len=8)
actionsTable.fill(4301, 188744, 188748); // 'state 737' -> !..await -> reduce (target=102, len=8)
actionsTable.fill(4301, 188751, 188754); // 'state 737' -> number..template_string -> reduce (target=102, len=8)
actionsTable.fill(4301, 188760, 188764); // 'state 737' -> update_operator..@par-gen.EOF -> reduce (target=102, len=8)
actionsTable.fill(4001, 188928, 188951); // 'state 738' -> true..try -> reduce (target=208, len=7)
actionsTable.fill(4001, 188953, 188966); // 'state 738' -> switch..export -> reduce (target=208, len=7)
actionsTable.fill(4001, 188969, 188978); // 'state 738' -> [..class -> reduce (target=208, len=7)
actionsTable.fill(4001, 188979, 188981); // 'state 738' -> implements..interface -> reduce (target=208, len=7)
actionsTable.fill(4001, 188982, 188986); // 'state 738' -> <..& -> reduce (target=208, len=7)
actionsTable.fill(4001, 188987, 188989); // 'state 738' -> void..typeof -> reduce (target=208, len=7)
actionsTable.fill(4001, 188990, 189011); // 'state 738' -> new..accessibility_modifier -> reduce (target=208, len=7)
actionsTable.fill(4001, 189012, 189020); // 'state 738' -> equality_operator..@par-gen.EOF -> reduce (target=208, len=7)
actionsTable.fill(3285, 189184, 189193); // 'state 739' -> true..( -> reduce (target=106, len=6)
actionsTable.fill(3285, 189194, 189197); // 'state 739' -> else..do -> reduce (target=106, len=6)
actionsTable.fill(3285, 189198, 189203); // 'state 739' -> for..of -> reduce (target=106, len=6)
actionsTable.fill(3285, 189204, 189207); // 'state 739' -> return..try -> reduce (target=106, len=6)
actionsTable.fill(3285, 189208, 189211); // 'state 739' -> finally..case -> reduce (target=106, len=6)
actionsTable.fill(3285, 189212, 189217); // 'state 739' -> default..from -> reduce (target=106, len=6)
actionsTable.fill(3285, 189220, 189222); // 'state 739' -> type..export -> reduce (target=106, len=6)
actionsTable[189225] = 3285; // 'state 739' -> [ -> reduce (target=106, len=6)
actionsTable.fill(3285, 189227, 189229); // 'state 739' -> async..function -> reduce (target=106, len=6)
actionsTable.fill(3285, 189231, 189234); // 'state 739' -> get..class -> reduce (target=106, len=6)
actionsTable[189236] = 3285; // 'state 739' -> interface -> reduce (target=106, len=6)
actionsTable[189238] = 3285; // 'state 739' -> < -> reduce (target=106, len=6)
actionsTable.fill(3285, 189243, 189245); // 'state 739' -> void..typeof -> reduce (target=106, len=6)
actionsTable[189246] = 3285; // 'state 739' -> new -> reduce (target=106, len=6)
actionsTable.fill(3285, 189253, 189255); // 'state 739' -> +..- -> reduce (target=106, len=6)
actionsTable.fill(3285, 189256, 189260); // 'state 739' -> !..await -> reduce (target=106, len=6)
actionsTable.fill(3285, 189263, 189266); // 'state 739' -> number..template_string -> reduce (target=106, len=6)
actionsTable.fill(3285, 189272, 189276); // 'state 739' -> update_operator..@par-gen.EOF -> reduce (target=106, len=6)
actionsTable[189446] = 1219; // 'state 740' -> } -> reduce (target=97, len=2)
actionsTable.fill(1219, 189448, 189450); // 'state 740' -> (..) -> reduce (target=97, len=2)
actionsTable[189453] = 1367; // 'state 740' -> ; -> reduce (target=171, len=2)
actionsTable[189458] = 1367; // 'state 740' -> of -> reduce (target=171, len=2)
actionsTable[189459] = 1219; // 'state 740' -> in -> reduce (target=97, len=2)
actionsTable[189472] = 1367; // 'state 740' -> from -> reduce (target=171, len=2)
actionsTable.fill(1219, 189473, 189476); // 'state 740' -> ,..as -> reduce (target=97, len=2)
actionsTable[189476] = 1367; // 'state 740' -> type -> reduce (target=171, len=2)
actionsTable[189479] = 1427; // 'state 740' -> = -> reduce (target=201, len=2)
actionsTable.fill(1219, 189481, 189483); // 'state 740' -> [..] -> reduce (target=97, len=2)
actionsTable[189483] = 1367; // 'state 740' -> async -> reduce (target=171, len=2)
actionsTable.fill(1367, 189486, 189489); // 'state 740' -> readonly..set -> reduce (target=171, len=2)
actionsTable.fill(1219, 189494, 189498); // 'state 740' -> <..& -> reduce (target=97, len=2)
actionsTable[189502] = 1367; // 'state 740' -> new -> reduce (target=171, len=2)
actionsTable.fill(1219, 189503, 189512); // 'state 740' -> ?..** -> reduce (target=97, len=2)
actionsTable.fill(1219, 189516, 189518); // 'state 740' -> ?.... -> reduce (target=97, len=2)
actionsTable.fill(1367, 189519, 189521); // 'state 740' -> number..string -> reduce (target=171, len=2)
actionsTable[189523] = 1427; // 'state 740' -> compound_assignment_operator -> reduce (target=201, len=2)
actionsTable.fill(1219, 189524, 189529); // 'state 740' -> equality_operator..update_operator -> reduce (target=97, len=2)
actionsTable[189529] = 1367; // 'state 740' -> identifier -> reduce (target=171, len=2)
actionsTable[189738] = 792; // 'state 741' -> ] -> shift (target=396, len=0)
actionsTable[189752] = 506; // 'state 741' -> | -> shift (target=253, len=0)
actionsTable[189753] = 508; // 'state 741' -> & -> shift (target=254, len=0)
actionsTable.fill(3853, 189952, 189961); // 'state 742' -> true..( -> reduce (target=134, len=7)
actionsTable.fill(3853, 189962, 189965); // 'state 742' -> else..do -> reduce (target=134, len=7)
actionsTable.fill(3853, 189966, 189971); // 'state 742' -> for..of -> reduce (target=134, len=7)
actionsTable.fill(3853, 189972, 189975); // 'state 742' -> return..try -> reduce (target=134, len=7)
actionsTable.fill(3853, 189977, 189979); // 'state 742' -> switch..case -> reduce (target=134, len=7)
actionsTable.fill(3853, 189980, 189985); // 'state 742' -> default..from -> reduce (target=134, len=7)
actionsTable.fill(3853, 189988, 189990); // 'state 742' -> type..export -> reduce (target=134, len=7)
actionsTable[189993] = 3853; // 'state 742' -> [ -> reduce (target=134, len=7)
actionsTable.fill(3853, 189995, 189997); // 'state 742' -> async..function -> reduce (target=134, len=7)
actionsTable.fill(3853, 189999, 190002); // 'state 742' -> get..class -> reduce (target=134, len=7)
actionsTable[190004] = 3853; // 'state 742' -> interface -> reduce (target=134, len=7)
actionsTable[190006] = 3853; // 'state 742' -> < -> reduce (target=134, len=7)
actionsTable.fill(3853, 190011, 190013); // 'state 742' -> void..typeof -> reduce (target=134, len=7)
actionsTable[190014] = 3853; // 'state 742' -> new -> reduce (target=134, len=7)
actionsTable.fill(3853, 190021, 190023); // 'state 742' -> +..- -> reduce (target=134, len=7)
actionsTable.fill(3853, 190024, 190028); // 'state 742' -> !..await -> reduce (target=134, len=7)
actionsTable.fill(3853, 190031, 190034); // 'state 742' -> number..template_string -> reduce (target=134, len=7)
actionsTable.fill(3853, 190040, 190044); // 'state 742' -> update_operator..@par-gen.EOF -> reduce (target=134, len=7)
actionsTable.fill(3853, 190208, 190217); // 'state 743' -> true..( -> reduce (target=134, len=7)
actionsTable.fill(3853, 190219, 190221); // 'state 743' -> while..do -> reduce (target=134, len=7)
actionsTable[190221] = 4001; // 'state 743' -> ; -> reduce (target=208, len=7)
actionsTable.fill(3853, 190222, 190227); // 'state 743' -> for..of -> reduce (target=134, len=7)
actionsTable[190227] = 4001; // 'state 743' -> in -> reduce (target=208, len=7)
actionsTable.fill(3853, 190228, 190231); // 'state 743' -> return..try -> reduce (target=134, len=7)
actionsTable[190233] = 3853; // 'state 743' -> switch -> reduce (target=134, len=7)
actionsTable.fill(3853, 190237, 190241); // 'state 743' -> break..from -> reduce (target=134, len=7)
actionsTable.fill(4001, 190242, 190244); // 'state 743' -> *..as -> reduce (target=208, len=7)
actionsTable.fill(3853, 190244, 190246); // 'state 743' -> type..export -> reduce (target=134, len=7)
actionsTable[190249] = 3853; // 'state 743' -> [ -> reduce (target=134, len=7)
actionsTable.fill(3853, 190251, 190253); // 'state 743' -> async..function -> reduce (target=134, len=7)
actionsTable.fill(3853, 190255, 190258); // 'state 743' -> get..class -> reduce (target=134, len=7)
actionsTable[190260] = 3853; // 'state 743' -> interface -> reduce (target=134, len=7)
actionsTable[190262] = 3853; // 'state 743' -> < -> reduce (target=134, len=7)
actionsTable.fill(4001, 190263, 190266); // 'state 743' -> >..& -> reduce (target=208, len=7)
actionsTable.fill(3853, 190267, 190269); // 'state 743' -> void..typeof -> reduce (target=134, len=7)
actionsTable[190270] = 3853; // 'state 743' -> new -> reduce (target=134, len=7)
actionsTable.fill(4001, 190271, 190277); // 'state 743' -> ?..instanceof -> reduce (target=208, len=7)
actionsTable.fill(3853, 190277, 190279); // 'state 743' -> +..- -> reduce (target=134, len=7)
actionsTable[190279] = 4001; // 'state 743' -> ** -> reduce (target=208, len=7)
actionsTable.fill(3853, 190280, 190284); // 'state 743' -> !..await -> reduce (target=134, len=7)
actionsTable.fill(4001, 190284, 190286); // 'state 743' -> ?.... -> reduce (target=208, len=7)
actionsTable.fill(3853, 190287, 190290); // 'state 743' -> number..template_string -> reduce (target=134, len=7)
actionsTable.fill(4001, 190292, 190296); // 'state 743' -> equality_operator..multiplicative_operator -> reduce (target=208, len=7)
actionsTable.fill(3853, 190296, 190300); // 'state 743' -> update_operator..@par-gen.EOF -> reduce (target=134, len=7)
actionsTable[190470] = 3369; // 'state 744' -> } -> reduce (target=148, len=6)
actionsTable[190477] = 3369; // 'state 744' -> ; -> reduce (target=148, len=6)
actionsTable[190482] = 3369; // 'state 744' -> of -> reduce (target=148, len=6)
actionsTable[190496] = 3369; // 'state 744' -> from -> reduce (target=148, len=6)
actionsTable[190500] = 3369; // 'state 744' -> type -> reduce (target=148, len=6)
actionsTable[190505] = 3369; // 'state 744' -> [ -> reduce (target=148, len=6)
actionsTable[190507] = 3369; // 'state 744' -> async -> reduce (target=148, len=6)
actionsTable.fill(3369, 190509, 190513); // 'state 744' -> static..set -> reduce (target=148, len=6)
actionsTable.fill(3369, 190542, 190545); // 'state 744' -> private_property_identifier..string -> reduce (target=148, len=6)
actionsTable[190546] = 3369; // 'state 744' -> accessibility_modifier -> reduce (target=148, len=6)
actionsTable[190553] = 3369; // 'state 744' -> identifier -> reduce (target=148, len=6)
actionsTable[190726] = 3371; // 'state 745' -> } -> reduce (target=149, len=6)
actionsTable[190733] = 3371; // 'state 745' -> ; -> reduce (target=149, len=6)
actionsTable[190738] = 3371; // 'state 745' -> of -> reduce (target=149, len=6)
actionsTable[190752] = 3371; // 'state 745' -> from -> reduce (target=149, len=6)
actionsTable[190756] = 3371; // 'state 745' -> type -> reduce (target=149, len=6)
actionsTable[190761] = 3371; // 'state 745' -> [ -> reduce (target=149, len=6)
actionsTable[190763] = 3371; // 'state 745' -> async -> reduce (target=149, len=6)
actionsTable.fill(3371, 190765, 190769); // 'state 745' -> static..set -> reduce (target=149, len=6)
actionsTable.fill(3371, 190798, 190801); // 'state 745' -> private_property_identifier..string -> reduce (target=149, len=6)
actionsTable[190802] = 3371; // 'state 745' -> accessibility_modifier -> reduce (target=149, len=6)
actionsTable[190809] = 3371; // 'state 745' -> identifier -> reduce (target=149, len=6)
actionsTable.fill(4811, 190976, 190985); // 'state 746' -> true..( -> reduce (target=101, len=9)
actionsTable.fill(4811, 190986, 190989); // 'state 746' -> else..do -> reduce (target=101, len=9)
actionsTable.fill(4811, 190990, 190995); // 'state 746' -> for..of -> reduce (target=101, len=9)
actionsTable.fill(4811, 190996, 190999); // 'state 746' -> return..try -> reduce (target=101, len=9)
actionsTable.fill(4811, 191001, 191003); // 'state 746' -> switch..case -> reduce (target=101, len=9)
actionsTable.fill(4811, 191004, 191009); // 'state 746' -> default..from -> reduce (target=101, len=9)
actionsTable.fill(4811, 191012, 191014); // 'state 746' -> type..export -> reduce (target=101, len=9)
actionsTable[191017] = 4811; // 'state 746' -> [ -> reduce (target=101, len=9)
actionsTable.fill(4811, 191019, 191021); // 'state 746' -> async..function -> reduce (target=101, len=9)
actionsTable.fill(4811, 191023, 191026); // 'state 746' -> get..class -> reduce (target=101, len=9)
actionsTable[191028] = 4811; // 'state 746' -> interface -> reduce (target=101, len=9)
actionsTable[191030] = 4811; // 'state 746' -> < -> reduce (target=101, len=9)
actionsTable.fill(4811, 191035, 191037); // 'state 746' -> void..typeof -> reduce (target=101, len=9)
actionsTable[191038] = 4811; // 'state 746' -> new -> reduce (target=101, len=9)
actionsTable.fill(4811, 191045, 191047); // 'state 746' -> +..- -> reduce (target=101, len=9)
actionsTable.fill(4811, 191048, 191052); // 'state 746' -> !..await -> reduce (target=101, len=9)
actionsTable.fill(4811, 191055, 191058); // 'state 746' -> number..template_string -> reduce (target=101, len=9)
actionsTable.fill(4811, 191064, 191068); // 'state 746' -> update_operator..@par-gen.EOF -> reduce (target=101, len=9)
actionsTable[191238] = 3423; // 'state 747' -> } -> reduce (target=175, len=6)
actionsTable[191245] = 3423; // 'state 747' -> ; -> reduce (target=175, len=6)
actionsTable[191250] = 3423; // 'state 747' -> of -> reduce (target=175, len=6)
actionsTable.fill(3423, 191264, 191266); // 'state 747' -> from.., -> reduce (target=175, len=6)
actionsTable[191268] = 3423; // 'state 747' -> type -> reduce (target=175, len=6)
actionsTable[191273] = 3423; // 'state 747' -> [ -> reduce (target=175, len=6)
actionsTable[191275] = 3423; // 'state 747' -> async -> reduce (target=175, len=6)
actionsTable.fill(3423, 191278, 191281); // 'state 747' -> readonly..set -> reduce (target=175, len=6)
actionsTable[191294] = 3423; // 'state 747' -> new -> reduce (target=175, len=6)
actionsTable.fill(3423, 191311, 191313); // 'state 747' -> number..string -> reduce (target=175, len=6)
actionsTable[191321] = 3423; // 'state 747' -> identifier -> reduce (target=175, len=6)
actionsTable[191494] = 3935; // 'state 748' -> } -> reduce (target=175, len=7)
actionsTable[191501] = 3935; // 'state 748' -> ; -> reduce (target=175, len=7)
actionsTable[191506] = 3935; // 'state 748' -> of -> reduce (target=175, len=7)
actionsTable.fill(3935, 191520, 191522); // 'state 748' -> from.., -> reduce (target=175, len=7)
actionsTable[191524] = 3935; // 'state 748' -> type -> reduce (target=175, len=7)
actionsTable[191529] = 3935; // 'state 748' -> [ -> reduce (target=175, len=7)
actionsTable[191531] = 3935; // 'state 748' -> async -> reduce (target=175, len=7)
actionsTable.fill(3935, 191534, 191537); // 'state 748' -> readonly..set -> reduce (target=175, len=7)
actionsTable[191550] = 3935; // 'state 748' -> new -> reduce (target=175, len=7)
actionsTable.fill(3935, 191567, 191569); // 'state 748' -> number..string -> reduce (target=175, len=7)
actionsTable[191577] = 3935; // 'state 748' -> identifier -> reduce (target=175, len=7)

const gotoTable = new Uint32Array(102112);
gotoTable[94] = 19922944; // 'state 19'
gotoTable[95] = 429916160; // 'state 410'
gotoTable.fill(430964736, 97, 106); // 'state 411'
gotoTable[108] = 430964736; // 'state 411'
gotoTable.fill(430964736, 113, 117); // 'state 411'
gotoTable[117] = 432013312; // 'state 412'
gotoTable[123] = 432013312; // 'state 412'
gotoTable[125] = 432013312; // 'state 412'
gotoTable[134] = 432013312; // 'state 412'
gotoTable[139] = 20971520; // 'state 20'
gotoTable[142] = 432013312; // 'state 412'
gotoTable[150] = 432013312; // 'state 412'
gotoTable[152] = 432013312; // 'state 412'
gotoTable[155] = 22020096; // 'state 21'
gotoTable[176] = 23068672; // 'state 22'
gotoTable[177] = 433061888; // 'state 413'
gotoTable[178] = 434110464; // 'state 414'
gotoTable[180] = 24117248; // 'state 23'
gotoTable[181] = 435159040; // 'state 415'
gotoTable.fill(434110464, 182, 193); // 'state 414'
gotoTable.fill(436207616, 193, 195); // 'state 416'
gotoTable[199] = 433061888; // 'state 413'
gotoTable[201] = 433061888; // 'state 413'
gotoTable.fill(418381824, 208, 210); // 'state 399'
gotoTable[351] = 441450496; // 'state 421'
gotoTable[352] = 29360128; // 'state 28'
gotoTable.fill(430964736, 353, 362); // 'state 411'
gotoTable[364] = 430964736; // 'state 411'
gotoTable.fill(430964736, 369, 373); // 'state 411'
gotoTable[373] = 432013312; // 'state 412'
gotoTable[379] = 432013312; // 'state 412'
gotoTable[381] = 432013312; // 'state 412'
gotoTable[390] = 432013312; // 'state 412'
gotoTable[395] = 20971520; // 'state 20'
gotoTable[398] = 432013312; // 'state 412'
gotoTable[406] = 432013312; // 'state 412'
gotoTable[408] = 432013312; // 'state 412'
gotoTable[411] = 22020096; // 'state 21'
gotoTable[432] = 23068672; // 'state 22'
gotoTable[433] = 442499072; // 'state 422'
gotoTable[434] = 434110464; // 'state 414'
gotoTable[436] = 24117248; // 'state 23'
gotoTable[437] = 435159040; // 'state 415'
gotoTable.fill(434110464, 438, 449); // 'state 414'
gotoTable.fill(436207616, 449, 451); // 'state 416'
gotoTable[453] = 443547648; // 'state 423'
gotoTable[455] = 433061888; // 'state 413'
gotoTable[457] = 433061888; // 'state 413'
gotoTable[458] = 30408704; // 'state 29'
gotoTable.fill(443547648, 459, 462); // 'state 423'
gotoTable[462] = 31457280; // 'state 30'
gotoTable[463] = 444596224; // 'state 424'
gotoTable.fill(418381824, 464, 466); // 'state 399'
gotoTable[651] = 20971520; // 'state 20'
gotoTable[652] = 91226112; // 'state 87'
gotoTable[667] = 22020096; // 'state 21'
gotoTable[688] = 92274688; // 'state 88'
gotoTable[689] = 433061888; // 'state 413'
gotoTable[690] = 434110464; // 'state 414'
gotoTable[692] = 24117248; // 'state 23'
gotoTable[693] = 435159040; // 'state 415'
gotoTable.fill(434110464, 694, 705); // 'state 414'
gotoTable.fill(436207616, 705, 707); // 'state 416'
gotoTable[708] = 93323264; // 'state 89'
gotoTable[709] = 472907776; // 'state 451'
gotoTable[711] = 94371840; // 'state 90'
gotoTable[713] = 94371840; // 'state 90'
gotoTable.fill(418381824, 720, 722); // 'state 399'
gotoTable[863] = 445644800; // 'state 425'
gotoTable.fill(430964736, 865, 874); // 'state 411'
gotoTable[876] = 430964736; // 'state 411'
gotoTable.fill(430964736, 881, 885); // 'state 411'
gotoTable[885] = 432013312; // 'state 412'
gotoTable[891] = 432013312; // 'state 412'
gotoTable[893] = 432013312; // 'state 412'
gotoTable[902] = 432013312; // 'state 412'
gotoTable[907] = 20971520; // 'state 20'
gotoTable[910] = 432013312; // 'state 412'
gotoTable[918] = 432013312; // 'state 412'
gotoTable[920] = 432013312; // 'state 412'
gotoTable[923] = 22020096; // 'state 21'
gotoTable[944] = 23068672; // 'state 22'
gotoTable[945] = 433061888; // 'state 413'
gotoTable[946] = 434110464; // 'state 414'
gotoTable[948] = 24117248; // 'state 23'
gotoTable[949] = 435159040; // 'state 415'
gotoTable.fill(434110464, 950, 961); // 'state 414'
gotoTable.fill(436207616, 961, 963); // 'state 416'
gotoTable[967] = 433061888; // 'state 413'
gotoTable[969] = 433061888; // 'state 413'
gotoTable.fill(418381824, 976, 978); // 'state 399'
gotoTable[1150] = 66060288; // 'state 63'
gotoTable[1151] = 67108864; // 'state 64'
gotoTable[1153] = 468713472; // 'state 447'
gotoTable[1156] = 468713472; // 'state 447'
gotoTable[1419] = 20971520; // 'state 20'
gotoTable[1435] = 22020096; // 'state 21'
gotoTable[1456] = 39845888; // 'state 38'
gotoTable[1457] = 433061888; // 'state 413'
gotoTable[1458] = 434110464; // 'state 414'
gotoTable[1460] = 24117248; // 'state 23'
gotoTable[1461] = 435159040; // 'state 415'
gotoTable.fill(434110464, 1462, 1473); // 'state 414'
gotoTable.fill(436207616, 1473, 1475); // 'state 416'
gotoTable[1479] = 433061888; // 'state 413'
gotoTable[1481] = 433061888; // 'state 413'
gotoTable.fill(418381824, 1488, 1490); // 'state 399'
gotoTable[1675] = 20971520; // 'state 20'
gotoTable[1691] = 22020096; // 'state 21'
gotoTable[1712] = 40894464; // 'state 39'
gotoTable[1713] = 433061888; // 'state 413'
gotoTable[1714] = 434110464; // 'state 414'
gotoTable[1716] = 24117248; // 'state 23'
gotoTable[1717] = 435159040; // 'state 415'
gotoTable.fill(434110464, 1718, 1729); // 'state 414'
gotoTable.fill(436207616, 1729, 1731); // 'state 416'
gotoTable[1735] = 433061888; // 'state 413'
gotoTable[1737] = 433061888; // 'state 413'
gotoTable.fill(418381824, 1744, 1746); // 'state 399'
gotoTable[1889] = 42991616; // 'state 41'
gotoTable[2166] = 459276288; // 'state 438'
gotoTable[2167] = 460324864; // 'state 439'
gotoTable[2169] = 460324864; // 'state 439'
gotoTable[2420] = 466616320; // 'state 445'
gotoTable[2421] = 432013312; // 'state 412'
gotoTable[2425] = 467664896; // 'state 446'
gotoTable[2427] = 432013312; // 'state 412'
gotoTable[2429] = 432013312; // 'state 412'
gotoTable[2438] = 432013312; // 'state 412'
gotoTable[2446] = 432013312; // 'state 412'
gotoTable[2454] = 432013312; // 'state 412'
gotoTable[2456] = 432013312; // 'state 412'
gotoTable[2699] = 20971520; // 'state 20'
gotoTable[2715] = 22020096; // 'state 21'
gotoTable[2736] = 92274688; // 'state 88'
gotoTable[2737] = 433061888; // 'state 413'
gotoTable[2738] = 434110464; // 'state 414'
gotoTable[2740] = 24117248; // 'state 23'
gotoTable[2741] = 435159040; // 'state 415'
gotoTable.fill(434110464, 2742, 2753); // 'state 414'
gotoTable.fill(436207616, 2753, 2755); // 'state 416'
gotoTable[2756] = 101711872; // 'state 97'
gotoTable[2757] = 472907776; // 'state 451'
gotoTable[2759] = 433061888; // 'state 413'
gotoTable[2761] = 433061888; // 'state 413'
gotoTable.fill(418381824, 2768, 2770); // 'state 399'
gotoTable[2955] = 70254592; // 'state 67'
gotoTable[2971] = 71303168; // 'state 68'
gotoTable[2996] = 70254592; // 'state 67'
gotoTable[3208] = 74448896; // 'state 71'
gotoTable[3227] = 75497472; // 'state 72'
gotoTable[3471] = 80740352; // 'state 77'
gotoTable[3473] = 470810624; // 'state 449'
gotoTable[3475] = 471859200; // 'state 450'
gotoTable[3483] = 81788928; // 'state 78'
gotoTable[3740] = 102760448; // 'state 98'
gotoTable[3979] = 20971520; // 'state 20'
gotoTable[3995] = 22020096; // 'state 21'
gotoTable[4016] = 95420416; // 'state 91'
gotoTable[4017] = 433061888; // 'state 413'
gotoTable[4018] = 434110464; // 'state 414'
gotoTable[4020] = 24117248; // 'state 23'
gotoTable[4021] = 435159040; // 'state 415'
gotoTable.fill(434110464, 4022, 4033); // 'state 414'
gotoTable.fill(436207616, 4033, 4035); // 'state 416'
gotoTable[4039] = 433061888; // 'state 413'
gotoTable[4041] = 433061888; // 'state 413'
gotoTable.fill(418381824, 4048, 4050); // 'state 399'
gotoTable[4273] = 418381824; // 'state 399'
gotoTable[4274] = 99614720; // 'state 95'
gotoTable[4276] = 418381824; // 'state 399'
gotoTable[4295] = 418381824; // 'state 399'
gotoTable[4297] = 418381824; // 'state 399'
gotoTable.fill(418381824, 4304, 4306); // 'state 399'
gotoTable[4491] = 20971520; // 'state 20'
gotoTable[4507] = 22020096; // 'state 21'
gotoTable[4528] = 97517568; // 'state 93'
gotoTable[4529] = 433061888; // 'state 413'
gotoTable[4530] = 434110464; // 'state 414'
gotoTable[4532] = 24117248; // 'state 23'
gotoTable[4533] = 435159040; // 'state 415'
gotoTable.fill(434110464, 4534, 4545); // 'state 414'
gotoTable.fill(436207616, 4545, 4547); // 'state 416'
gotoTable[4551] = 433061888; // 'state 413'
gotoTable[4553] = 433061888; // 'state 413'
gotoTable.fill(418381824, 4560, 4562); // 'state 399'
gotoTable[4747] = 20971520; // 'state 20'
gotoTable[4763] = 22020096; // 'state 21'
gotoTable[4784] = 96468992; // 'state 92'
gotoTable[4785] = 433061888; // 'state 413'
gotoTable[4786] = 434110464; // 'state 414'
gotoTable[4788] = 24117248; // 'state 23'
gotoTable[4789] = 435159040; // 'state 415'
gotoTable.fill(434110464, 4790, 4801); // 'state 414'
gotoTable.fill(436207616, 4801, 4803); // 'state 416'
gotoTable[4807] = 433061888; // 'state 413'
gotoTable[4809] = 433061888; // 'state 413'
gotoTable.fill(418381824, 4816, 4818); // 'state 399'
gotoTable[4959] = 437256192; // 'state 417'
gotoTable.fill(430964736, 4961, 4970); // 'state 411'
gotoTable[4972] = 430964736; // 'state 411'
gotoTable.fill(430964736, 4977, 4981); // 'state 411'
gotoTable[4981] = 432013312; // 'state 412'
gotoTable[4987] = 432013312; // 'state 412'
gotoTable[4989] = 432013312; // 'state 412'
gotoTable[4998] = 432013312; // 'state 412'
gotoTable[5003] = 20971520; // 'state 20'
gotoTable[5006] = 432013312; // 'state 412'
gotoTable[5014] = 432013312; // 'state 412'
gotoTable[5016] = 432013312; // 'state 412'
gotoTable[5019] = 22020096; // 'state 21'
gotoTable[5040] = 23068672; // 'state 22'
gotoTable[5041] = 433061888; // 'state 413'
gotoTable[5042] = 434110464; // 'state 414'
gotoTable[5044] = 24117248; // 'state 23'
gotoTable[5045] = 435159040; // 'state 415'
gotoTable.fill(434110464, 5046, 5057); // 'state 414'
gotoTable.fill(436207616, 5057, 5059); // 'state 416'
gotoTable[5063] = 433061888; // 'state 413'
gotoTable[5065] = 433061888; // 'state 413'
gotoTable.fill(418381824, 5072, 5074); // 'state 399'
gotoTable[5273] = 469762048; // 'state 448'
gotoTable[5512] = 70254592; // 'state 67'
gotoTable[5827] = 455081984; // 'state 434'
gotoTable[6041] = 469762048; // 'state 448'
gotoTable[6283] = 20971520; // 'state 20'
gotoTable[6299] = 22020096; // 'state 21'
gotoTable[6320] = 111149056; // 'state 106'
gotoTable[6321] = 433061888; // 'state 413'
gotoTable[6322] = 434110464; // 'state 414'
gotoTable[6324] = 24117248; // 'state 23'
gotoTable[6325] = 435159040; // 'state 415'
gotoTable.fill(434110464, 6326, 6337); // 'state 414'
gotoTable.fill(436207616, 6337, 6339); // 'state 416'
gotoTable[6343] = 433061888; // 'state 413'
gotoTable[6345] = 433061888; // 'state 413'
gotoTable.fill(418381824, 6352, 6354); // 'state 399'
gotoTable[6539] = 20971520; // 'state 20'
gotoTable[6555] = 22020096; // 'state 21'
gotoTable[6576] = 105906176; // 'state 101'
gotoTable[6577] = 433061888; // 'state 413'
gotoTable[6578] = 434110464; // 'state 414'
gotoTable[6580] = 24117248; // 'state 23'
gotoTable[6581] = 435159040; // 'state 415'
gotoTable.fill(434110464, 6582, 6593); // 'state 414'
gotoTable.fill(436207616, 6593, 6595); // 'state 416'
gotoTable[6596] = 101711872; // 'state 97'
gotoTable[6597] = 472907776; // 'state 451'
gotoTable[6599] = 433061888; // 'state 413'
gotoTable[6601] = 433061888; // 'state 413'
gotoTable.fill(418381824, 6608, 6610); // 'state 399'
gotoTable[6795] = 70254592; // 'state 67'
gotoTable[6811] = 71303168; // 'state 68'
gotoTable[6833] = 444596224; // 'state 424'
gotoTable[6836] = 70254592; // 'state 67'
gotoTable[6862] = 104857600; // 'state 100'
gotoTable[6863] = 444596224; // 'state 424'
gotoTable[7089] = 444596224; // 'state 424'
gotoTable[7118] = 104857600; // 'state 100'
gotoTable[7119] = 444596224; // 'state 424'
gotoTable[7263] = 478150656; // 'state 456'
gotoTable.fill(430964736, 7265, 7274); // 'state 411'
gotoTable[7276] = 430964736; // 'state 411'
gotoTable.fill(430964736, 7281, 7285); // 'state 411'
gotoTable[7285] = 432013312; // 'state 412'
gotoTable[7291] = 432013312; // 'state 412'
gotoTable[7293] = 432013312; // 'state 412'
gotoTable[7302] = 432013312; // 'state 412'
gotoTable[7307] = 20971520; // 'state 20'
gotoTable[7310] = 432013312; // 'state 412'
gotoTable[7318] = 432013312; // 'state 412'
gotoTable[7320] = 432013312; // 'state 412'
gotoTable[7323] = 22020096; // 'state 21'
gotoTable[7344] = 23068672; // 'state 22'
gotoTable[7345] = 433061888; // 'state 413'
gotoTable[7346] = 434110464; // 'state 414'
gotoTable[7348] = 24117248; // 'state 23'
gotoTable[7349] = 435159040; // 'state 415'
gotoTable.fill(434110464, 7350, 7361); // 'state 414'
gotoTable.fill(436207616, 7361, 7363); // 'state 416'
gotoTable[7367] = 433061888; // 'state 413'
gotoTable[7369] = 433061888; // 'state 413'
gotoTable.fill(418381824, 7376, 7378); // 'state 399'
gotoTable[7624] = 483393536; // 'state 461'
gotoTable[7816] = 109051904; // 'state 104'
gotoTable[7835] = 110100480; // 'state 105'
gotoTable[8075] = 20971520; // 'state 20'
gotoTable[8091] = 22020096; // 'state 21'
gotoTable[8112] = 112197632; // 'state 107'
gotoTable[8113] = 433061888; // 'state 413'
gotoTable[8114] = 434110464; // 'state 414'
gotoTable[8116] = 24117248; // 'state 23'
gotoTable[8117] = 435159040; // 'state 415'
gotoTable.fill(434110464, 8118, 8129); // 'state 414'
gotoTable.fill(436207616, 8129, 8131); // 'state 416'
gotoTable[8135] = 433061888; // 'state 413'
gotoTable[8137] = 433061888; // 'state 413'
gotoTable.fill(418381824, 8144, 8146); // 'state 399'
gotoTable[8331] = 20971520; // 'state 20'
gotoTable[8347] = 22020096; // 'state 21'
gotoTable[8368] = 113246208; // 'state 108'
gotoTable[8369] = 433061888; // 'state 413'
gotoTable[8370] = 434110464; // 'state 414'
gotoTable[8372] = 24117248; // 'state 23'
gotoTable[8373] = 435159040; // 'state 415'
gotoTable.fill(434110464, 8374, 8385); // 'state 414'
gotoTable.fill(436207616, 8385, 8387); // 'state 416'
gotoTable[8391] = 433061888; // 'state 413'
gotoTable[8393] = 433061888; // 'state 413'
gotoTable.fill(418381824, 8400, 8402); // 'state 399'
gotoTable[8573] = 114294784; // 'state 109'
gotoTable[8587] = 20971520; // 'state 20'
gotoTable[8603] = 22020096; // 'state 21'
gotoTable[8624] = 116391936; // 'state 111'
gotoTable[8625] = 433061888; // 'state 413'
gotoTable[8626] = 434110464; // 'state 414'
gotoTable[8628] = 24117248; // 'state 23'
gotoTable[8629] = 435159040; // 'state 415'
gotoTable.fill(434110464, 8630, 8641); // 'state 414'
gotoTable.fill(436207616, 8641, 8643); // 'state 416'
gotoTable[8647] = 433061888; // 'state 413'
gotoTable[8649] = 433061888; // 'state 413'
gotoTable.fill(418381824, 8656, 8658); // 'state 399'
gotoTable[8881] = 487587840; // 'state 465'
gotoTable[8901] = 443547648; // 'state 423'
gotoTable[8906] = 30408704; // 'state 29'
gotoTable.fill(443547648, 8907, 8910); // 'state 423'
gotoTable[8910] = 31457280; // 'state 30'
gotoTable[8911] = 444596224; // 'state 424'
gotoTable[9099] = 70254592; // 'state 67'
gotoTable[9115] = 71303168; // 'state 68'
gotoTable[9140] = 70254592; // 'state 67'
gotoTable[9352] = 74448896; // 'state 71'
gotoTable[9371] = 75497472; // 'state 72'
gotoTable[9615] = 80740352; // 'state 77'
gotoTable[9617] = 470810624; // 'state 449'
gotoTable[9619] = 471859200; // 'state 450'
gotoTable[9627] = 81788928; // 'state 78'
gotoTable[9923] = 455081984; // 'state 434'
gotoTable[10179] = 455081984; // 'state 434'
gotoTable[10335] = 441450496; // 'state 421'
gotoTable[10336] = 29360128; // 'state 28'
gotoTable.fill(430964736, 10337, 10346); // 'state 411'
gotoTable[10348] = 430964736; // 'state 411'
gotoTable.fill(430964736, 10353, 10357); // 'state 411'
gotoTable[10357] = 432013312; // 'state 412'
gotoTable[10363] = 432013312; // 'state 412'
gotoTable[10365] = 432013312; // 'state 412'
gotoTable[10374] = 432013312; // 'state 412'
gotoTable[10379] = 20971520; // 'state 20'
gotoTable[10382] = 432013312; // 'state 412'
gotoTable[10390] = 432013312; // 'state 412'
gotoTable[10392] = 432013312; // 'state 412'
gotoTable[10395] = 22020096; // 'state 21'
gotoTable[10416] = 23068672; // 'state 22'
gotoTable[10417] = 433061888; // 'state 413'
gotoTable[10418] = 434110464; // 'state 414'
gotoTable[10420] = 24117248; // 'state 23'
gotoTable[10421] = 435159040; // 'state 415'
gotoTable.fill(434110464, 10422, 10433); // 'state 414'
gotoTable.fill(436207616, 10433, 10435); // 'state 416'
gotoTable[10439] = 433061888; // 'state 413'
gotoTable[10441] = 433061888; // 'state 413'
gotoTable.fill(418381824, 10448, 10450); // 'state 399'
gotoTable[10602] = 123731968; // 'state 118'
gotoTable[10603] = 489684992; // 'state 467'
gotoTable[10891] = 20971520; // 'state 20'
gotoTable[10907] = 22020096; // 'state 21'
gotoTable[10928] = 124780544; // 'state 119'
gotoTable[10929] = 433061888; // 'state 413'
gotoTable[10930] = 434110464; // 'state 414'
gotoTable[10932] = 24117248; // 'state 23'
gotoTable[10933] = 435159040; // 'state 415'
gotoTable.fill(434110464, 10934, 10945); // 'state 414'
gotoTable.fill(436207616, 10945, 10947); // 'state 416'
gotoTable[10951] = 433061888; // 'state 413'
gotoTable[10953] = 433061888; // 'state 413'
gotoTable.fill(418381824, 10960, 10962); // 'state 399'
gotoTable[11147] = 20971520; // 'state 20'
gotoTable[11163] = 22020096; // 'state 21'
gotoTable[11184] = 92274688; // 'state 88'
gotoTable[11185] = 433061888; // 'state 413'
gotoTable[11186] = 434110464; // 'state 414'
gotoTable[11188] = 24117248; // 'state 23'
gotoTable[11189] = 435159040; // 'state 415'
gotoTable.fill(434110464, 11190, 11201); // 'state 414'
gotoTable.fill(436207616, 11201, 11203); // 'state 416'
gotoTable[11204] = 144703488; // 'state 138'
gotoTable[11205] = 472907776; // 'state 451'
gotoTable[11207] = 433061888; // 'state 413'
gotoTable[11209] = 433061888; // 'state 413'
gotoTable.fill(418381824, 11216, 11218); // 'state 399'
gotoTable[11403] = 20971520; // 'state 20'
gotoTable[11419] = 22020096; // 'state 21'
gotoTable[11440] = 133169152; // 'state 127'
gotoTable[11441] = 433061888; // 'state 413'
gotoTable[11442] = 434110464; // 'state 414'
gotoTable[11444] = 24117248; // 'state 23'
gotoTable[11445] = 435159040; // 'state 415'
gotoTable.fill(434110464, 11446, 11457); // 'state 414'
gotoTable.fill(436207616, 11457, 11459); // 'state 416'
gotoTable[11463] = 433061888; // 'state 413'
gotoTable[11465] = 433061888; // 'state 413'
gotoTable.fill(418381824, 11472, 11474); // 'state 399'
gotoTable[11659] = 20971520; // 'state 20'
gotoTable[11675] = 22020096; // 'state 21'
gotoTable[11696] = 136314880; // 'state 130'
gotoTable[11697] = 433061888; // 'state 413'
gotoTable[11698] = 434110464; // 'state 414'
gotoTable[11700] = 24117248; // 'state 23'
gotoTable[11701] = 435159040; // 'state 415'
gotoTable.fill(434110464, 11702, 11713); // 'state 414'
gotoTable.fill(436207616, 11713, 11715); // 'state 416'
gotoTable[11719] = 433061888; // 'state 413'
gotoTable[11721] = 433061888; // 'state 413'
gotoTable.fill(418381824, 11728, 11730); // 'state 399'
gotoTable[11915] = 495976448; // 'state 473'
gotoTable[11931] = 142606336; // 'state 136'
gotoTable[11934] = 497025024; // 'state 474'
gotoTable.fill(498073600, 11935, 11938); // 'state 475'
gotoTable[11938] = 499122176; // 'state 476'
gotoTable.fill(493879296, 11939, 11943); // 'state 471'
gotoTable[11943] = 500170752; // 'state 477'
gotoTable.fill(493879296, 11944, 11946); // 'state 471'
gotoTable[11947] = 493879296; // 'state 471'
gotoTable[12171] = 20971520; // 'state 20'
gotoTable[12187] = 22020096; // 'state 21'
gotoTable[12208] = 145752064; // 'state 139'
gotoTable[12209] = 433061888; // 'state 413'
gotoTable[12210] = 434110464; // 'state 414'
gotoTable[12212] = 24117248; // 'state 23'
gotoTable[12213] = 435159040; // 'state 415'
gotoTable.fill(434110464, 12214, 12225); // 'state 414'
gotoTable.fill(436207616, 12225, 12227); // 'state 416'
gotoTable[12231] = 433061888; // 'state 413'
gotoTable[12233] = 433061888; // 'state 413'
gotoTable.fill(418381824, 12240, 12242); // 'state 399'
gotoTable[12427] = 20971520; // 'state 20'
gotoTable[12443] = 22020096; // 'state 21'
gotoTable[12464] = 128974848; // 'state 123'
gotoTable[12465] = 433061888; // 'state 413'
gotoTable[12466] = 434110464; // 'state 414'
gotoTable[12468] = 24117248; // 'state 23'
gotoTable[12469] = 435159040; // 'state 415'
gotoTable.fill(434110464, 12470, 12481); // 'state 414'
gotoTable.fill(436207616, 12481, 12483); // 'state 416'
gotoTable[12487] = 433061888; // 'state 413'
gotoTable[12489] = 433061888; // 'state 413'
gotoTable.fill(418381824, 12496, 12498); // 'state 399'
gotoTable[12683] = 20971520; // 'state 20'
gotoTable[12699] = 22020096; // 'state 21'
gotoTable[12720] = 131072000; // 'state 125'
gotoTable[12721] = 433061888; // 'state 413'
gotoTable[12722] = 434110464; // 'state 414'
gotoTable[12724] = 24117248; // 'state 23'
gotoTable[12725] = 435159040; // 'state 415'
gotoTable.fill(434110464, 12726, 12737); // 'state 414'
gotoTable.fill(436207616, 12737, 12739); // 'state 416'
gotoTable[12743] = 433061888; // 'state 413'
gotoTable[12745] = 433061888; // 'state 413'
gotoTable.fill(418381824, 12752, 12754); // 'state 399'
gotoTable[12939] = 20971520; // 'state 20'
gotoTable[12955] = 22020096; // 'state 21'
gotoTable[12976] = 125829120; // 'state 120'
gotoTable[12977] = 433061888; // 'state 413'
gotoTable[12978] = 434110464; // 'state 414'
gotoTable[12980] = 24117248; // 'state 23'
gotoTable[12981] = 435159040; // 'state 415'
gotoTable.fill(434110464, 12982, 12993); // 'state 414'
gotoTable.fill(436207616, 12993, 12995); // 'state 416'
gotoTable[12999] = 433061888; // 'state 413'
gotoTable[13001] = 433061888; // 'state 413'
gotoTable.fill(418381824, 13008, 13010); // 'state 399'
gotoTable[13195] = 20971520; // 'state 20'
gotoTable[13211] = 22020096; // 'state 21'
gotoTable[13232] = 126877696; // 'state 121'
gotoTable[13233] = 433061888; // 'state 413'
gotoTable[13234] = 434110464; // 'state 414'
gotoTable[13236] = 24117248; // 'state 23'
gotoTable[13237] = 435159040; // 'state 415'
gotoTable.fill(434110464, 13238, 13249); // 'state 414'
gotoTable.fill(436207616, 13249, 13251); // 'state 416'
gotoTable[13255] = 433061888; // 'state 413'
gotoTable[13257] = 433061888; // 'state 413'
gotoTable.fill(418381824, 13264, 13266); // 'state 399'
gotoTable[13451] = 20971520; // 'state 20'
gotoTable[13467] = 22020096; // 'state 21'
gotoTable[13488] = 127926272; // 'state 122'
gotoTable[13489] = 433061888; // 'state 413'
gotoTable[13490] = 434110464; // 'state 414'
gotoTable[13492] = 24117248; // 'state 23'
gotoTable[13493] = 435159040; // 'state 415'
gotoTable.fill(434110464, 13494, 13505); // 'state 414'
gotoTable.fill(436207616, 13505, 13507); // 'state 416'
gotoTable[13511] = 433061888; // 'state 413'
gotoTable[13513] = 433061888; // 'state 413'
gotoTable.fill(418381824, 13520, 13522); // 'state 399'
gotoTable[13707] = 20971520; // 'state 20'
gotoTable[13723] = 22020096; // 'state 21'
gotoTable[13744] = 130023424; // 'state 124'
gotoTable[13745] = 433061888; // 'state 413'
gotoTable[13746] = 434110464; // 'state 414'
gotoTable[13748] = 24117248; // 'state 23'
gotoTable[13749] = 435159040; // 'state 415'
gotoTable.fill(434110464, 13750, 13761); // 'state 414'
gotoTable.fill(436207616, 13761, 13763); // 'state 416'
gotoTable[13767] = 433061888; // 'state 413'
gotoTable[13769] = 433061888; // 'state 413'
gotoTable.fill(418381824, 13776, 13778); // 'state 399'
gotoTable[13963] = 20971520; // 'state 20'
gotoTable[13979] = 22020096; // 'state 21'
gotoTable[14000] = 135266304; // 'state 129'
gotoTable[14001] = 433061888; // 'state 413'
gotoTable[14002] = 434110464; // 'state 414'
gotoTable[14004] = 24117248; // 'state 23'
gotoTable[14005] = 435159040; // 'state 415'
gotoTable.fill(434110464, 14006, 14017); // 'state 414'
gotoTable.fill(436207616, 14017, 14019); // 'state 416'
gotoTable[14023] = 433061888; // 'state 413'
gotoTable[14025] = 433061888; // 'state 413'
gotoTable.fill(418381824, 14032, 14034); // 'state 399'
gotoTable[14275] = 502267904; // 'state 479'
gotoTable[14475] = 20971520; // 'state 20'
gotoTable[14491] = 22020096; // 'state 21'
gotoTable[14512] = 132120576; // 'state 126'
gotoTable[14513] = 433061888; // 'state 413'
gotoTable[14514] = 434110464; // 'state 414'
gotoTable[14516] = 24117248; // 'state 23'
gotoTable[14517] = 435159040; // 'state 415'
gotoTable.fill(434110464, 14518, 14529); // 'state 414'
gotoTable.fill(436207616, 14529, 14531); // 'state 416'
gotoTable[14535] = 433061888; // 'state 413'
gotoTable[14537] = 433061888; // 'state 413'
gotoTable.fill(418381824, 14544, 14546); // 'state 399'
gotoTable[14731] = 20971520; // 'state 20'
gotoTable[14747] = 22020096; // 'state 21'
gotoTable[14768] = 134217728; // 'state 128'
gotoTable[14769] = 433061888; // 'state 413'
gotoTable[14770] = 434110464; // 'state 414'
gotoTable[14772] = 24117248; // 'state 23'
gotoTable[14773] = 435159040; // 'state 415'
gotoTable.fill(434110464, 14774, 14785); // 'state 414'
gotoTable.fill(436207616, 14785, 14787); // 'state 416'
gotoTable[14791] = 433061888; // 'state 413'
gotoTable[14793] = 433061888; // 'state 413'
gotoTable.fill(418381824, 14800, 14802); // 'state 399'
gotoTable[14970] = 147849216; // 'state 141'
gotoTable[15238] = 512753664; // 'state 489'
gotoTable[15243] = 20971520; // 'state 20'
gotoTable[15246] = 512753664; // 'state 489'
gotoTable[15259] = 22020096; // 'state 21'
gotoTable[15280] = 150994944; // 'state 144'
gotoTable[15281] = 433061888; // 'state 413'
gotoTable[15282] = 434110464; // 'state 414'
gotoTable[15284] = 24117248; // 'state 23'
gotoTable[15285] = 435159040; // 'state 415'
gotoTable.fill(434110464, 15286, 15297); // 'state 414'
gotoTable.fill(436207616, 15297, 15299); // 'state 416'
gotoTable[15303] = 433061888; // 'state 413'
gotoTable[15305] = 433061888; // 'state 413'
gotoTable.fill(418381824, 15312, 15314); // 'state 399'
gotoTable[15476] = 510656512; // 'state 487'
gotoTable[15477] = 432013312; // 'state 412'
gotoTable[15483] = 432013312; // 'state 412'
gotoTable[15485] = 432013312; // 'state 412'
gotoTable[15494] = 432013312; // 'state 412'
gotoTable[15502] = 432013312; // 'state 412'
gotoTable[15510] = 432013312; // 'state 412'
gotoTable[15512] = 432013312; // 'state 412'
gotoTable[15746] = 155189248; // 'state 148'
gotoTable[15793] = 444596224; // 'state 424'
gotoTable[15822] = 521142272; // 'state 497'
gotoTable[15823] = 444596224; // 'state 424'
gotoTable[15999] = 523239424; // 'state 499'
gotoTable[16001] = 468713472; // 'state 447'
gotoTable[16004] = 468713472; // 'state 447'
gotoTable[16005] = 158334976; // 'state 151'
gotoTable[16252] = 516947968; // 'state 493'
gotoTable[16537] = 517996544; // 'state 494'
gotoTable[16779] = 20971520; // 'state 20'
gotoTable[16780] = 91226112; // 'state 87'
gotoTable[16795] = 22020096; // 'state 21'
gotoTable[16816] = 92274688; // 'state 88'
gotoTable[16817] = 433061888; // 'state 413'
gotoTable[16818] = 434110464; // 'state 414'
gotoTable[16820] = 24117248; // 'state 23'
gotoTable[16821] = 435159040; // 'state 415'
gotoTable.fill(434110464, 16822, 16833); // 'state 414'
gotoTable.fill(436207616, 16833, 16835); // 'state 416'
gotoTable[16836] = 93323264; // 'state 89'
gotoTable[16837] = 472907776; // 'state 451'
gotoTable[16839] = 94371840; // 'state 90'
gotoTable[16841] = 94371840; // 'state 90'
gotoTable.fill(418381824, 16848, 16850); // 'state 399'
gotoTable[17032] = 160432128; // 'state 153'
gotoTable[17051] = 161480704; // 'state 154'
gotoTable[17305] = 524288000; // 'state 500'
gotoTable[17544] = 163577856; // 'state 156'
gotoTable[17791] = 168820736; // 'state 161'
gotoTable[17793] = 468713472; // 'state 447'
gotoTable[17796] = 468713472; // 'state 447'
gotoTable[17801] = 169869312; // 'state 162'
gotoTable[17805] = 170917888; // 'state 163'
gotoTable[18056] = 164626432; // 'state 157'
gotoTable[18075] = 165675008; // 'state 158'
gotoTable[18273] = 525336576; // 'state 501'
gotoTable[18329] = 166723584; // 'state 159'
gotoTable[18568] = 160432128; // 'state 153'
gotoTable[18829] = 178257920; // 'state 170'
gotoTable[18834] = 179306496; // 'state 171'
gotoTable.fill(532676608, 18836, 18838); // 'state 508'
gotoTable[18865] = 444596224; // 'state 424'
gotoTable[18894] = 177209344; // 'state 169'
gotoTable[18895] = 444596224; // 'state 424'
gotoTable[19083] = 20971520; // 'state 20'
gotoTable[19099] = 22020096; // 'state 21'
gotoTable[19120] = 175112192; // 'state 167'
gotoTable[19121] = 433061888; // 'state 413'
gotoTable[19122] = 434110464; // 'state 414'
gotoTable[19124] = 24117248; // 'state 23'
gotoTable[19125] = 435159040; // 'state 415'
gotoTable.fill(434110464, 19126, 19137); // 'state 414'
gotoTable.fill(436207616, 19137, 19139); // 'state 416'
gotoTable[19143] = 433061888; // 'state 413'
gotoTable[19145] = 433061888; // 'state 413'
gotoTable.fill(418381824, 19152, 19154); // 'state 399'
gotoTable[19339] = 495976448; // 'state 473'
gotoTable[19355] = 142606336; // 'state 136'
gotoTable[19358] = 176160768; // 'state 168'
gotoTable.fill(498073600, 19359, 19362); // 'state 475'
gotoTable[19362] = 499122176; // 'state 476'
gotoTable.fill(493879296, 19363, 19367); // 'state 471'
gotoTable[19367] = 500170752; // 'state 477'
gotoTable.fill(493879296, 19368, 19370); // 'state 471'
gotoTable[19371] = 493879296; // 'state 471'
gotoTable[19599] = 171966464; // 'state 164'
gotoTable[19601] = 470810624; // 'state 449'
gotoTable[19603] = 529530880; // 'state 505'
gotoTable[19611] = 173015040; // 'state 165'
gotoTable[19859] = 530579456; // 'state 506'
gotoTable[20111] = 174063616; // 'state 166'
gotoTable[20113] = 470810624; // 'state 449'
gotoTable[20115] = 530579456; // 'state 506'
gotoTable[20375] = 181403648; // 'state 173'
gotoTable[20379] = 182452224; // 'state 174'
gotoTable[20395] = 535822336; // 'state 511'
gotoTable[20635] = 536870912; // 'state 512'
gotoTable[20833] = 537919488; // 'state 513'
gotoTable[20875] = 20971520; // 'state 20'
gotoTable[20891] = 22020096; // 'state 21'
gotoTable[20912] = 184549376; // 'state 176'
gotoTable[20913] = 433061888; // 'state 413'
gotoTable[20914] = 434110464; // 'state 414'
gotoTable[20916] = 24117248; // 'state 23'
gotoTable[20917] = 435159040; // 'state 415'
gotoTable.fill(434110464, 20918, 20929); // 'state 414'
gotoTable.fill(436207616, 20929, 20931); // 'state 416'
gotoTable[20935] = 433061888; // 'state 413'
gotoTable[20937] = 433061888; // 'state 413'
gotoTable.fill(418381824, 20944, 20946); // 'state 399'
gotoTable[21131] = 495976448; // 'state 473'
gotoTable[21147] = 142606336; // 'state 136'
gotoTable[21150] = 538968064; // 'state 514'
gotoTable.fill(498073600, 21151, 21154); // 'state 475'
gotoTable[21154] = 499122176; // 'state 476'
gotoTable.fill(493879296, 21155, 21159); // 'state 471'
gotoTable[21159] = 500170752; // 'state 477'
gotoTable.fill(493879296, 21160, 21162); // 'state 471'
gotoTable[21163] = 493879296; // 'state 471'
gotoTable[21387] = 20971520; // 'state 20'
gotoTable[21403] = 22020096; // 'state 21'
gotoTable[21424] = 185597952; // 'state 177'
gotoTable[21425] = 433061888; // 'state 413'
gotoTable[21426] = 434110464; // 'state 414'
gotoTable[21428] = 24117248; // 'state 23'
gotoTable[21429] = 435159040; // 'state 415'
gotoTable.fill(434110464, 21430, 21441); // 'state 414'
gotoTable.fill(436207616, 21441, 21443); // 'state 416'
gotoTable[21447] = 433061888; // 'state 413'
gotoTable[21449] = 433061888; // 'state 413'
gotoTable.fill(418381824, 21456, 21458); // 'state 399'
gotoTable[21643] = 20971520; // 'state 20'
gotoTable[21659] = 22020096; // 'state 21'
gotoTable[21680] = 186646528; // 'state 178'
gotoTable[21681] = 433061888; // 'state 413'
gotoTable[21682] = 434110464; // 'state 414'
gotoTable[21684] = 24117248; // 'state 23'
gotoTable[21685] = 435159040; // 'state 415'
gotoTable.fill(434110464, 21686, 21697); // 'state 414'
gotoTable.fill(436207616, 21697, 21699); // 'state 416'
gotoTable[21703] = 433061888; // 'state 413'
gotoTable[21705] = 433061888; // 'state 413'
gotoTable.fill(418381824, 21712, 21714); // 'state 399'
gotoTable[21899] = 20971520; // 'state 20'
gotoTable[21915] = 22020096; // 'state 21'
gotoTable[21936] = 111149056; // 'state 106'
gotoTable[21937] = 433061888; // 'state 413'
gotoTable[21938] = 434110464; // 'state 414'
gotoTable[21940] = 24117248; // 'state 23'
gotoTable[21941] = 435159040; // 'state 415'
gotoTable.fill(434110464, 21942, 21953); // 'state 414'
gotoTable.fill(436207616, 21953, 21955); // 'state 416'
gotoTable[21959] = 189792256; // 'state 181'
gotoTable[21961] = 189792256; // 'state 181'
gotoTable.fill(418381824, 21968, 21970); // 'state 399'
gotoTable[22169] = 542113792; // 'state 517'
gotoTable[22410] = 544210944; // 'state 519'
gotoTable[22723] = 455081984; // 'state 434'
gotoTable[22963] = 541065216; // 'state 516'
gotoTable[23193] = 542113792; // 'state 517'
gotoTable[23491] = 455081984; // 'state 434'
gotoTable[23747] = 455081984; // 'state 434'
gotoTable[24003] = 455081984; // 'state 434'
gotoTable[24203] = 20971520; // 'state 20'
gotoTable[24219] = 22020096; // 'state 21'
gotoTable[24240] = 92274688; // 'state 88'
gotoTable[24241] = 433061888; // 'state 413'
gotoTable[24242] = 434110464; // 'state 414'
gotoTable[24244] = 24117248; // 'state 23'
gotoTable[24245] = 435159040; // 'state 415'
gotoTable.fill(434110464, 24246, 24257); // 'state 414'
gotoTable.fill(436207616, 24257, 24259); // 'state 416'
gotoTable[24260] = 93323264; // 'state 89'
gotoTable[24261] = 472907776; // 'state 451'
gotoTable[24263] = 433061888; // 'state 413'
gotoTable[24265] = 433061888; // 'state 413'
gotoTable.fill(418381824, 24272, 24274); // 'state 399'
gotoTable[24477] = 192937984; // 'state 184'
gotoTable[24515] = 545259520; // 'state 520'
gotoTable[24715] = 20971520; // 'state 20'
gotoTable[24731] = 22020096; // 'state 21'
gotoTable[24752] = 92274688; // 'state 88'
gotoTable[24753] = 433061888; // 'state 413'
gotoTable[24754] = 434110464; // 'state 414'
gotoTable[24756] = 24117248; // 'state 23'
gotoTable[24757] = 435159040; // 'state 415'
gotoTable.fill(434110464, 24758, 24769); // 'state 414'
gotoTable.fill(436207616, 24769, 24771); // 'state 416'
gotoTable[24772] = 193986560; // 'state 185'
gotoTable[24773] = 472907776; // 'state 451'
gotoTable[24775] = 433061888; // 'state 413'
gotoTable[24777] = 433061888; // 'state 413'
gotoTable.fill(418381824, 24784, 24786); // 'state 399'
gotoTable[25030] = 547356672; // 'state 522'
gotoTable[25242] = 549453824; // 'state 524'
gotoTable[25483] = 20971520; // 'state 20'
gotoTable[25499] = 22020096; // 'state 21'
gotoTable[25520] = 201326592; // 'state 192'
gotoTable[25521] = 433061888; // 'state 413'
gotoTable[25522] = 434110464; // 'state 414'
gotoTable[25524] = 24117248; // 'state 23'
gotoTable[25525] = 435159040; // 'state 415'
gotoTable.fill(434110464, 25526, 25537); // 'state 414'
gotoTable.fill(436207616, 25537, 25539); // 'state 416'
gotoTable[25543] = 433061888; // 'state 413'
gotoTable[25545] = 433061888; // 'state 413'
gotoTable.fill(418381824, 25552, 25554); // 'state 399'
gotoTable[25736] = 199229440; // 'state 190'
gotoTable[25755] = 200278016; // 'state 191'
gotoTable[26051] = 455081984; // 'state 434'
gotoTable[26289] = 487587840; // 'state 465'
gotoTable[26309] = 443547648; // 'state 423'
gotoTable[26314] = 552599552; // 'state 527'
gotoTable.fill(443547648, 26315, 26318); // 'state 423'
gotoTable[26318] = 31457280; // 'state 30'
gotoTable[26319] = 444596224; // 'state 424'
gotoTable[26507] = 20971520; // 'state 20'
gotoTable[26523] = 22020096; // 'state 21'
gotoTable[26544] = 203423744; // 'state 194'
gotoTable[26545] = 433061888; // 'state 413'
gotoTable[26546] = 434110464; // 'state 414'
gotoTable[26548] = 24117248; // 'state 23'
gotoTable[26549] = 435159040; // 'state 415'
gotoTable.fill(434110464, 26550, 26561); // 'state 414'
gotoTable.fill(436207616, 26561, 26563); // 'state 416'
gotoTable[26567] = 433061888; // 'state 413'
gotoTable[26569] = 433061888; // 'state 413'
gotoTable.fill(418381824, 26576, 26578); // 'state 399'
gotoTable[26721] = 553648128; // 'state 528'
gotoTable[26777] = 204472320; // 'state 195'
gotoTable[27016] = 199229440; // 'state 190'
gotoTable[27331] = 455081984; // 'state 434'
gotoTable[27587] = 455081984; // 'state 434'
gotoTable[27843] = 455081984; // 'state 434'
gotoTable[28043] = 20971520; // 'state 20'
gotoTable[28059] = 22020096; // 'state 21'
gotoTable[28080] = 209715200; // 'state 200'
gotoTable[28081] = 433061888; // 'state 413'
gotoTable[28082] = 434110464; // 'state 414'
gotoTable[28084] = 24117248; // 'state 23'
gotoTable[28085] = 435159040; // 'state 415'
gotoTable.fill(434110464, 28086, 28097); // 'state 414'
gotoTable.fill(436207616, 28097, 28099); // 'state 416'
gotoTable[28103] = 433061888; // 'state 413'
gotoTable[28105] = 433061888; // 'state 413'
gotoTable.fill(418381824, 28112, 28114); // 'state 399'
gotoTable[28286] = 66060288; // 'state 63'
gotoTable[28287] = 210763776; // 'state 201'
gotoTable[28289] = 468713472; // 'state 447'
gotoTable[28292] = 468713472; // 'state 447'
gotoTable[28611] = 455081984; // 'state 434'
gotoTable[28808] = 160432128; // 'state 153'
gotoTable[28827] = 161480704; // 'state 154'
gotoTable[29105] = 444596224; // 'state 424'
gotoTable[29134] = 104857600; // 'state 100'
gotoTable[29135] = 444596224; // 'state 424'
gotoTable[29320] = 160432128; // 'state 153'
gotoTable[29339] = 161480704; // 'state 154'
gotoTable[29583] = 174063616; // 'state 166'
gotoTable[29585] = 470810624; // 'state 449'
gotoTable[29587] = 530579456; // 'state 506'
gotoTable[29595] = 213909504; // 'state 204'
gotoTable[29793] = 555745280; // 'state 530'
gotoTable[30049] = 556793856; // 'state 531'
gotoTable[30315] = 554696704; // 'state 529'
gotoTable[30659] = 455081984; // 'state 434'
gotoTable[30915] = 455081984; // 'state 434'
gotoTable[31171] = 455081984; // 'state 434'
gotoTable[31427] = 455081984; // 'state 434'
gotoTable[31683] = 455081984; // 'state 434'
gotoTable[31939] = 455081984; // 'state 434'
gotoTable[32195] = 455081984; // 'state 434'
gotoTable[32451] = 455081984; // 'state 434'
gotoTable[32707] = 455081984; // 'state 434'
gotoTable[32963] = 455081984; // 'state 434'
gotoTable[33219] = 455081984; // 'state 434'
gotoTable[33475] = 455081984; // 'state 434'
gotoTable[33706] = 231735296; // 'state 221'
gotoTable.fill(564133888, 33708, 33712); // 'state 538'
gotoTable[33713] = 444596224; // 'state 424'
gotoTable[33742] = 232783872; // 'state 222'
gotoTable[33743] = 444596224; // 'state 424'
gotoTable[33931] = 495976448; // 'state 473'
gotoTable[33932] = 91226112; // 'state 87'
gotoTable[33947] = 142606336; // 'state 136'
gotoTable[33950] = 559939584; // 'state 534'
gotoTable.fill(498073600, 33951, 33954); // 'state 475'
gotoTable[33954] = 499122176; // 'state 476'
gotoTable.fill(493879296, 33955, 33959); // 'state 471'
gotoTable[33959] = 500170752; // 'state 477'
gotoTable.fill(493879296, 33960, 33962); // 'state 471'
gotoTable[33963] = 493879296; // 'state 471'
gotoTable[33991] = 224395264; // 'state 214'
gotoTable[33993] = 224395264; // 'state 214'
gotoTable[34187] = 495976448; // 'state 473'
gotoTable[34203] = 142606336; // 'state 136'
gotoTable[34206] = 227540992; // 'state 217'
gotoTable.fill(498073600, 34207, 34210); // 'state 475'
gotoTable[34210] = 499122176; // 'state 476'
gotoTable.fill(493879296, 34211, 34215); // 'state 471'
gotoTable[34215] = 500170752; // 'state 477'
gotoTable.fill(493879296, 34216, 34218); // 'state 471'
gotoTable[34219] = 493879296; // 'state 471'
gotoTable[34443] = 495976448; // 'state 473'
gotoTable[34459] = 142606336; // 'state 136'
gotoTable[34462] = 557842432; // 'state 532'
gotoTable.fill(498073600, 34463, 34466); // 'state 475'
gotoTable[34466] = 499122176; // 'state 476'
gotoTable.fill(493879296, 34467, 34471); // 'state 471'
gotoTable[34471] = 500170752; // 'state 477'
gotoTable.fill(493879296, 34472, 34474); // 'state 471'
gotoTable[34475] = 493879296; // 'state 471'
gotoTable[34717] = 560988160; // 'state 535'
gotoTable[34952] = 558891008; // 'state 533'
gotoTable[34955] = 558891008; // 'state 533'
gotoTable[35211] = 20971520; // 'state 20'
gotoTable[35227] = 22020096; // 'state 21'
gotoTable[35248] = 233832448; // 'state 223'
gotoTable[35249] = 433061888; // 'state 413'
gotoTable[35250] = 434110464; // 'state 414'
gotoTable[35252] = 24117248; // 'state 23'
gotoTable[35253] = 435159040; // 'state 415'
gotoTable.fill(434110464, 35254, 35265); // 'state 414'
gotoTable.fill(436207616, 35265, 35267); // 'state 416'
gotoTable[35271] = 433061888; // 'state 413'
gotoTable[35273] = 433061888; // 'state 413'
gotoTable.fill(418381824, 35280, 35282); // 'state 399'
gotoTable[35507] = 567279616; // 'state 541'
gotoTable[35779] = 455081984; // 'state 434'
gotoTable[35959] = 570425344; // 'state 544'
gotoTable[35961] = 570425344; // 'state 544'
gotoTable[36216] = 572522496; // 'state 546'
gotoTable[36488] = 238026752; // 'state 227'
gotoTable[36507] = 239075328; // 'state 228'
gotoTable[36751] = 240123904; // 'state 229'
gotoTable[36753] = 470810624; // 'state 449'
gotoTable[36755] = 576716800; // 'state 550'
gotoTable[36763] = 241172480; // 'state 230'
gotoTable[37059] = 455081984; // 'state 434'
gotoTable[37246] = 581959680; // 'state 555'
gotoTable[37247] = 67108864; // 'state 64'
gotoTable[37249] = 468713472; // 'state 447'
gotoTable[37252] = 468713472; // 'state 447'
gotoTable[37515] = 20971520; // 'state 20'
gotoTable[37531] = 22020096; // 'state 21'
gotoTable[37552] = 244318208; // 'state 233'
gotoTable[37553] = 433061888; // 'state 413'
gotoTable[37554] = 434110464; // 'state 414'
gotoTable[37556] = 24117248; // 'state 23'
gotoTable[37557] = 435159040; // 'state 415'
gotoTable.fill(434110464, 37558, 37569); // 'state 414'
gotoTable.fill(436207616, 37569, 37571); // 'state 416'
gotoTable[37575] = 433061888; // 'state 413'
gotoTable[37577] = 433061888; // 'state 413'
gotoTable.fill(418381824, 37584, 37586); // 'state 399'
gotoTable[37759] = 585105408; // 'state 558'
gotoTable[37761] = 468713472; // 'state 447'
gotoTable[37764] = 468713472; // 'state 447'
gotoTable[38016] = 584056832; // 'state 557'
gotoTable[38271] = 523239424; // 'state 499'
gotoTable[38273] = 468713472; // 'state 447'
gotoTable[38276] = 468713472; // 'state 447'
gotoTable[38277] = 248512512; // 'state 237'
gotoTable[38527] = 588251136; // 'state 561'
gotoTable[38529] = 468713472; // 'state 447'
gotoTable[38532] = 468713472; // 'state 447'
gotoTable[38787] = 587202560; // 'state 560'
gotoTable[39048] = 251658240; // 'state 240'
gotoTable[39067] = 252706816; // 'state 241'
gotoTable[39265] = 589299712; // 'state 562'
gotoTable[39321] = 254803968; // 'state 243'
gotoTable[39560] = 253755392; // 'state 242'
gotoTable[39777] = 590348288; // 'state 563'
gotoTable[39819] = 20971520; // 'state 20'
gotoTable[39835] = 22020096; // 'state 21'
gotoTable[39856] = 255852544; // 'state 244'
gotoTable[39857] = 433061888; // 'state 413'
gotoTable[39858] = 434110464; // 'state 414'
gotoTable[39860] = 24117248; // 'state 23'
gotoTable[39861] = 435159040; // 'state 415'
gotoTable.fill(434110464, 39862, 39873); // 'state 414'
gotoTable.fill(436207616, 39873, 39875); // 'state 416'
gotoTable[39879] = 433061888; // 'state 413'
gotoTable[39881] = 433061888; // 'state 413'
gotoTable.fill(418381824, 39888, 39890); // 'state 399'
gotoTable[40089] = 591396864; // 'state 564'
gotoTable[40289] = 593494016; // 'state 566'
gotoTable[40345] = 257949696; // 'state 246'
gotoTable[40584] = 251658240; // 'state 240'
gotoTable[40801] = 589299712; // 'state 562'
gotoTable[41087] = 262144000; // 'state 250'
gotoTable[41089] = 468713472; // 'state 447'
gotoTable[41092] = 468713472; // 'state 447'
gotoTable[41369] = 598736896; // 'state 571'
gotoTable[41607] = 595591168; // 'state 568'
gotoTable[41855] = 260046848; // 'state 248'
gotoTable[41857] = 468713472; // 'state 447'
gotoTable[41860] = 468713472; // 'state 447'
gotoTable[42131] = 599785472; // 'state 572'
gotoTable[42383] = 263192576; // 'state 251'
gotoTable[42385] = 470810624; // 'state 449'
gotoTable[42387] = 599785472; // 'state 572'
gotoTable[42643] = 601882624; // 'state 574'
gotoTable[42897] = 602931200; // 'state 575'
gotoTable[42947] = 455081984; // 'state 434'
gotoTable[43152] = 603979776; // 'state 576'
gotoTable[43400] = 269484032; // 'state 257'
gotoTable[43417] = 609222656; // 'state 581'
gotoTable[43419] = 270532608; // 'state 258'
gotoTable[43697] = 444596224; // 'state 424'
gotoTable[43726] = 267386880; // 'state 255'
gotoTable[43727] = 444596224; // 'state 424'
gotoTable[43917] = 178257920; // 'state 170'
gotoTable.fill(606076928, 43924, 43926); // 'state 578'
gotoTable[43953] = 444596224; // 'state 424'
gotoTable[43982] = 177209344; // 'state 169'
gotoTable[43983] = 444596224; // 'state 424'
gotoTable[44171] = 495976448; // 'state 473'
gotoTable[44187] = 142606336; // 'state 136'
gotoTable[44190] = 272629760; // 'state 260'
gotoTable.fill(498073600, 44191, 44194); // 'state 475'
gotoTable[44194] = 499122176; // 'state 476'
gotoTable.fill(493879296, 44195, 44199); // 'state 471'
gotoTable[44199] = 500170752; // 'state 477'
gotoTable.fill(493879296, 44200, 44202); // 'state 471'
gotoTable[44203] = 493879296; // 'state 471'
gotoTable[44459] = 610271232; // 'state 582'
gotoTable[44695] = 271581184; // 'state 259'
gotoTable[44715] = 610271232; // 'state 582'
gotoTable[44939] = 495976448; // 'state 473'
gotoTable[44955] = 142606336; // 'state 136'
gotoTable[44958] = 611319808; // 'state 583'
gotoTable.fill(498073600, 44959, 44962); // 'state 475'
gotoTable[44962] = 499122176; // 'state 476'
gotoTable.fill(493879296, 44963, 44967); // 'state 471'
gotoTable[44967] = 500170752; // 'state 477'
gotoTable.fill(493879296, 44968, 44970); // 'state 471'
gotoTable[44971] = 493879296; // 'state 471'
gotoTable[45251] = 455081984; // 'state 434'
gotoTable[45507] = 455081984; // 'state 434'
gotoTable[45763] = 455081984; // 'state 434'
gotoTable[45963] = 20971520; // 'state 20'
gotoTable[45979] = 22020096; // 'state 21'
gotoTable[46000] = 92274688; // 'state 88'
gotoTable[46001] = 433061888; // 'state 413'
gotoTable[46002] = 434110464; // 'state 414'
gotoTable[46004] = 24117248; // 'state 23'
gotoTable[46005] = 435159040; // 'state 415'
gotoTable.fill(434110464, 46006, 46017); // 'state 414'
gotoTable.fill(436207616, 46017, 46019); // 'state 416'
gotoTable[46020] = 613416960; // 'state 585'
gotoTable[46021] = 472907776; // 'state 451'
gotoTable[46023] = 433061888; // 'state 413'
gotoTable[46025] = 433061888; // 'state 413'
gotoTable.fill(418381824, 46032, 46034); // 'state 399'
gotoTable[46233] = 614465536; // 'state 586'
gotoTable[46489] = 614465536; // 'state 586'
gotoTable[46731] = 20971520; // 'state 20'
gotoTable[46732] = 616562688; // 'state 588'
gotoTable[46747] = 22020096; // 'state 21'
gotoTable[46768] = 92274688; // 'state 88'
gotoTable[46769] = 433061888; // 'state 413'
gotoTable[46770] = 434110464; // 'state 414'
gotoTable[46772] = 24117248; // 'state 23'
gotoTable[46773] = 435159040; // 'state 415'
gotoTable.fill(434110464, 46774, 46785); // 'state 414'
gotoTable.fill(436207616, 46785, 46787); // 'state 416'
gotoTable[46788] = 616562688; // 'state 588'
gotoTable[46789] = 472907776; // 'state 451'
gotoTable[46791] = 94371840; // 'state 90'
gotoTable[46793] = 94371840; // 'state 90'
gotoTable.fill(418381824, 46800, 46802); // 'state 399'
gotoTable[46987] = 495976448; // 'state 473'
gotoTable[47003] = 142606336; // 'state 136'
gotoTable[47006] = 277872640; // 'state 265'
gotoTable.fill(498073600, 47007, 47010); // 'state 475'
gotoTable[47010] = 499122176; // 'state 476'
gotoTable.fill(493879296, 47011, 47015); // 'state 471'
gotoTable[47015] = 500170752; // 'state 477'
gotoTable.fill(493879296, 47016, 47018); // 'state 471'
gotoTable[47019] = 493879296; // 'state 471'
gotoTable[47299] = 617611264; // 'state 589'
gotoTable[47558] = 619708416; // 'state 591'
gotoTable[47755] = 20971520; // 'state 20'
gotoTable[47771] = 22020096; // 'state 21'
gotoTable[47792] = 92274688; // 'state 88'
gotoTable[47793] = 433061888; // 'state 413'
gotoTable[47794] = 434110464; // 'state 414'
gotoTable[47796] = 24117248; // 'state 23'
gotoTable[47797] = 435159040; // 'state 415'
gotoTable.fill(434110464, 47798, 47809); // 'state 414'
gotoTable.fill(436207616, 47809, 47811); // 'state 416'
gotoTable[47812] = 620756992; // 'state 592'
gotoTable[47813] = 472907776; // 'state 451'
gotoTable[47815] = 433061888; // 'state 413'
gotoTable[47817] = 433061888; // 'state 413'
gotoTable.fill(418381824, 47824, 47826); // 'state 399'
gotoTable[48028] = 622854144; // 'state 594'
gotoTable[48267] = 495976448; // 'state 473'
gotoTable[48283] = 142606336; // 'state 136'
gotoTable[48286] = 624951296; // 'state 596'
gotoTable.fill(498073600, 48287, 48290); // 'state 475'
gotoTable[48290] = 499122176; // 'state 476'
gotoTable.fill(493879296, 48291, 48295); // 'state 471'
gotoTable[48295] = 500170752; // 'state 477'
gotoTable.fill(493879296, 48296, 48298); // 'state 471'
gotoTable[48299] = 493879296; // 'state 471'
gotoTable[48523] = 495976448; // 'state 473'
gotoTable[48539] = 142606336; // 'state 136'
gotoTable[48542] = 623902720; // 'state 595'
gotoTable.fill(498073600, 48543, 48546); // 'state 475'
gotoTable[48546] = 499122176; // 'state 476'
gotoTable.fill(493879296, 48547, 48551); // 'state 471'
gotoTable[48551] = 500170752; // 'state 477'
gotoTable.fill(493879296, 48552, 48554); // 'state 471'
gotoTable[48555] = 493879296; // 'state 471'
gotoTable[48737] = 625999872; // 'state 597'
gotoTable[48793] = 282066944; // 'state 269'
gotoTable[49032] = 281018368; // 'state 268'
gotoTable[49347] = 455081984; // 'state 434'
gotoTable[49585] = 487587840; // 'state 465'
gotoTable[49605] = 443547648; // 'state 423'
gotoTable[49610] = 628097024; // 'state 599'
gotoTable.fill(443547648, 49611, 49614); // 'state 423'
gotoTable[49614] = 31457280; // 'state 30'
gotoTable[49615] = 444596224; // 'state 424'
gotoTable[49859] = 455081984; // 'state 434'
gotoTable[50017] = 625999872; // 'state 597'
gotoTable[50271] = 629145600; // 'state 600'
gotoTable.fill(430964736, 50273, 50282); // 'state 411'
gotoTable[50284] = 430964736; // 'state 411'
gotoTable.fill(430964736, 50289, 50293); // 'state 411'
gotoTable[50293] = 432013312; // 'state 412'
gotoTable[50299] = 432013312; // 'state 412'
gotoTable[50301] = 432013312; // 'state 412'
gotoTable[50310] = 432013312; // 'state 412'
gotoTable[50315] = 20971520; // 'state 20'
gotoTable[50318] = 432013312; // 'state 412'
gotoTable[50326] = 432013312; // 'state 412'
gotoTable[50328] = 432013312; // 'state 412'
gotoTable[50331] = 22020096; // 'state 21'
gotoTable[50352] = 23068672; // 'state 22'
gotoTable[50353] = 433061888; // 'state 413'
gotoTable[50354] = 434110464; // 'state 414'
gotoTable[50356] = 24117248; // 'state 23'
gotoTable[50357] = 435159040; // 'state 415'
gotoTable.fill(434110464, 50358, 50369); // 'state 414'
gotoTable.fill(436207616, 50369, 50371); // 'state 416'
gotoTable[50375] = 433061888; // 'state 413'
gotoTable[50377] = 433061888; // 'state 413'
gotoTable.fill(418381824, 50384, 50386); // 'state 399'
gotoTable[50527] = 630194176; // 'state 601'
gotoTable.fill(430964736, 50529, 50538); // 'state 411'
gotoTable[50540] = 430964736; // 'state 411'
gotoTable.fill(430964736, 50545, 50549); // 'state 411'
gotoTable[50549] = 432013312; // 'state 412'
gotoTable[50555] = 432013312; // 'state 412'
gotoTable[50557] = 432013312; // 'state 412'
gotoTable[50566] = 432013312; // 'state 412'
gotoTable[50571] = 20971520; // 'state 20'
gotoTable[50574] = 432013312; // 'state 412'
gotoTable[50582] = 432013312; // 'state 412'
gotoTable[50584] = 432013312; // 'state 412'
gotoTable[50587] = 22020096; // 'state 21'
gotoTable[50608] = 23068672; // 'state 22'
gotoTable[50609] = 433061888; // 'state 413'
gotoTable[50610] = 434110464; // 'state 414'
gotoTable[50612] = 24117248; // 'state 23'
gotoTable[50613] = 435159040; // 'state 415'
gotoTable.fill(434110464, 50614, 50625); // 'state 414'
gotoTable.fill(436207616, 50625, 50627); // 'state 416'
gotoTable[50631] = 433061888; // 'state 413'
gotoTable[50633] = 433061888; // 'state 413'
gotoTable.fill(418381824, 50640, 50642); // 'state 399'
gotoTable[50827] = 20971520; // 'state 20'
gotoTable[50843] = 22020096; // 'state 21'
gotoTable[50864] = 283115520; // 'state 270'
gotoTable[50865] = 433061888; // 'state 413'
gotoTable[50866] = 434110464; // 'state 414'
gotoTable[50868] = 24117248; // 'state 23'
gotoTable[50869] = 435159040; // 'state 415'
gotoTable.fill(434110464, 50870, 50881); // 'state 414'
gotoTable.fill(436207616, 50881, 50883); // 'state 416'
gotoTable[50887] = 433061888; // 'state 413'
gotoTable[50889] = 433061888; // 'state 413'
gotoTable.fill(418381824, 50896, 50898); // 'state 399'
gotoTable[51083] = 20971520; // 'state 20'
gotoTable[51099] = 22020096; // 'state 21'
gotoTable[51120] = 286261248; // 'state 273'
gotoTable[51121] = 433061888; // 'state 413'
gotoTable[51122] = 434110464; // 'state 414'
gotoTable[51124] = 24117248; // 'state 23'
gotoTable[51125] = 435159040; // 'state 415'
gotoTable.fill(434110464, 51126, 51137); // 'state 414'
gotoTable.fill(436207616, 51137, 51139); // 'state 416'
gotoTable[51143] = 433061888; // 'state 413'
gotoTable[51145] = 433061888; // 'state 413'
gotoTable.fill(418381824, 51152, 51154); // 'state 399'
gotoTable[51395] = 455081984; // 'state 434'
gotoTable[51609] = 517996544; // 'state 494'
gotoTable[51851] = 20971520; // 'state 20'
gotoTable[51867] = 22020096; // 'state 21'
gotoTable[51888] = 288358400; // 'state 275'
gotoTable[51889] = 433061888; // 'state 413'
gotoTable[51890] = 434110464; // 'state 414'
gotoTable[51892] = 24117248; // 'state 23'
gotoTable[51893] = 435159040; // 'state 415'
gotoTable.fill(434110464, 51894, 51905); // 'state 414'
gotoTable.fill(436207616, 51905, 51907); // 'state 416'
gotoTable[51911] = 433061888; // 'state 413'
gotoTable[51913] = 433061888; // 'state 413'
gotoTable.fill(418381824, 51920, 51922); // 'state 399'
gotoTable[52104] = 253755392; // 'state 242'
gotoTable[52123] = 289406976; // 'state 276'
gotoTable[52367] = 290455552; // 'state 277'
gotoTable[52369] = 470810624; // 'state 449'
gotoTable[52371] = 601882624; // 'state 574'
gotoTable[52607] = 291504128; // 'state 278'
gotoTable[52609] = 468713472; // 'state 447'
gotoTable[52612] = 468713472; // 'state 447'
gotoTable[52846] = 631242752; // 'state 602'
gotoTable[53131] = 20971520; // 'state 20'
gotoTable[53147] = 22020096; // 'state 21'
gotoTable[53168] = 293601280; // 'state 280'
gotoTable[53169] = 433061888; // 'state 413'
gotoTable[53170] = 434110464; // 'state 414'
gotoTable[53172] = 24117248; // 'state 23'
gotoTable[53173] = 435159040; // 'state 415'
gotoTable.fill(434110464, 53174, 53185); // 'state 414'
gotoTable.fill(436207616, 53185, 53187); // 'state 416'
gotoTable[53191] = 433061888; // 'state 413'
gotoTable[53193] = 433061888; // 'state 413'
gotoTable.fill(418381824, 53200, 53202); // 'state 399'
gotoTable[53387] = 495976448; // 'state 473'
gotoTable[53403] = 142606336; // 'state 136'
gotoTable[53406] = 635437056; // 'state 606'
gotoTable.fill(498073600, 53407, 53410); // 'state 475'
gotoTable[53410] = 499122176; // 'state 476'
gotoTable.fill(493879296, 53411, 53415); // 'state 471'
gotoTable[53415] = 500170752; // 'state 477'
gotoTable.fill(493879296, 53416, 53418); // 'state 471'
gotoTable[53419] = 493879296; // 'state 471'
gotoTable[53631] = 168820736; // 'state 161'
gotoTable[53633] = 468713472; // 'state 447'
gotoTable[53636] = 468713472; // 'state 447'
gotoTable[53641] = 169869312; // 'state 162'
gotoTable[53644] = 91226112; // 'state 87'
gotoTable[53645] = 170917888; // 'state 163'
gotoTable[53703] = 224395264; // 'state 214'
gotoTable[53705] = 224395264; // 'state 214'
gotoTable[53930] = 231735296; // 'state 221'
gotoTable.fill(564133888, 53932, 53936); // 'state 538'
gotoTable[53937] = 487587840; // 'state 465'
gotoTable[53957] = 443547648; // 'state 423'
gotoTable[53962] = 30408704; // 'state 29'
gotoTable.fill(443547648, 53963, 53966); // 'state 423'
gotoTable[53966] = 300941312; // 'state 287'
gotoTable[53967] = 444596224; // 'state 424'
gotoTable[54215] = 299892736; // 'state 286'
gotoTable[54217] = 299892736; // 'state 286'
gotoTable[54411] = 306184192; // 'state 292'
gotoTable[54427] = 307232768; // 'state 293'
gotoTable[54430] = 227540992; // 'state 217'
gotoTable.fill(498073600, 54431, 54434); // 'state 475'
gotoTable[54434] = 499122176; // 'state 476'
gotoTable.fill(493879296, 54435, 54439); // 'state 471'
gotoTable[54439] = 500170752; // 'state 477'
gotoTable.fill(493879296, 54440, 54442); // 'state 471'
gotoTable[54443] = 493879296; // 'state 471'
gotoTable[54448] = 92274688; // 'state 88'
gotoTable[54449] = 433061888; // 'state 413'
gotoTable[54450] = 434110464; // 'state 414'
gotoTable[54452] = 24117248; // 'state 23'
gotoTable[54453] = 435159040; // 'state 415'
gotoTable.fill(434110464, 54454, 54465); // 'state 414'
gotoTable.fill(436207616, 54465, 54467); // 'state 416'
gotoTable[54468] = 101711872; // 'state 97'
gotoTable[54469] = 472907776; // 'state 451'
gotoTable[54471] = 433061888; // 'state 413'
gotoTable[54473] = 433061888; // 'state 413'
gotoTable.fill(418381824, 54480, 54482); // 'state 399'
gotoTable[54681] = 542113792; // 'state 517'
gotoTable[54685] = 560988160; // 'state 535'
gotoTable[54937] = 542113792; // 'state 517'
gotoTable[55179] = 495976448; // 'state 473'
gotoTable[55195] = 142606336; // 'state 136'
gotoTable[55198] = 641728512; // 'state 612'
gotoTable.fill(498073600, 55199, 55202); // 'state 475'
gotoTable[55202] = 499122176; // 'state 476'
gotoTable.fill(493879296, 55203, 55207); // 'state 471'
gotoTable[55207] = 500170752; // 'state 477'
gotoTable.fill(493879296, 55208, 55210); // 'state 471'
gotoTable[55211] = 493879296; // 'state 471'
gotoTable[55435] = 495976448; // 'state 473'
gotoTable[55451] = 142606336; // 'state 136'
gotoTable[55454] = 642777088; // 'state 613'
gotoTable.fill(498073600, 55455, 55458); // 'state 475'
gotoTable[55458] = 499122176; // 'state 476'
gotoTable.fill(493879296, 55459, 55463); // 'state 471'
gotoTable[55463] = 500170752; // 'state 477'
gotoTable.fill(493879296, 55464, 55466); // 'state 471'
gotoTable[55467] = 493879296; // 'state 471'
gotoTable[55696] = 644874240; // 'state 615'
gotoTable[55947] = 20971520; // 'state 20'
gotoTable[55963] = 22020096; // 'state 21'
gotoTable[55984] = 201326592; // 'state 192'
gotoTable[55985] = 433061888; // 'state 413'
gotoTable[55986] = 434110464; // 'state 414'
gotoTable[55988] = 24117248; // 'state 23'
gotoTable[55989] = 435159040; // 'state 415'
gotoTable.fill(434110464, 55990, 56001); // 'state 414'
gotoTable.fill(436207616, 56001, 56003); // 'state 416'
gotoTable[56007] = 433061888; // 'state 413'
gotoTable[56009] = 433061888; // 'state 413'
gotoTable.fill(418381824, 56016, 56018); // 'state 399'
gotoTable[56241] = 444596224; // 'state 424'
gotoTable[56270] = 310378496; // 'state 296'
gotoTable[56271] = 444596224; // 'state 424'
gotoTable[56456] = 313524224; // 'state 299'
gotoTable[56475] = 314572800; // 'state 300'
gotoTable.fill(646971392, 56748, 56752); // 'state 617'
gotoTable[56753] = 444596224; // 'state 424'
gotoTable[56782] = 232783872; // 'state 222'
gotoTable[56783] = 444596224; // 'state 424'
gotoTable[56968] = 311427072; // 'state 297'
gotoTable[56985] = 649068544; // 'state 619'
gotoTable[56987] = 312475648; // 'state 298'
gotoTable[57283] = 455081984; // 'state 434'
gotoTable[57483] = 20971520; // 'state 20'
gotoTable[57499] = 22020096; // 'state 21'
gotoTable[57520] = 92274688; // 'state 88'
gotoTable[57521] = 433061888; // 'state 413'
gotoTable[57522] = 434110464; // 'state 414'
gotoTable[57524] = 24117248; // 'state 23'
gotoTable[57525] = 435159040; // 'state 415'
gotoTable.fill(434110464, 57526, 57537); // 'state 414'
gotoTable.fill(436207616, 57537, 57539); // 'state 416'
gotoTable[57540] = 613416960; // 'state 585'
gotoTable[57541] = 472907776; // 'state 451'
gotoTable[57543] = 433061888; // 'state 413'
gotoTable[57545] = 433061888; // 'state 413'
gotoTable.fill(418381824, 57552, 57554); // 'state 399'
gotoTable[57722] = 655360000; // 'state 625'
gotoTable[57992] = 317718528; // 'state 303'
gotoTable[58011] = 318767104; // 'state 304'
gotoTable[58209] = 658505728; // 'state 628'
gotoTable[58265] = 319815680; // 'state 305'
gotoTable[58504] = 317718528; // 'state 303'
gotoTable[58771] = 659554304; // 'state 629'
gotoTable[59023] = 320864256; // 'state 306'
gotoTable[59025] = 470810624; // 'state 449'
gotoTable[59027] = 659554304; // 'state 629'
gotoTable[59262] = 662700032; // 'state 632'
gotoTable[59263] = 67108864; // 'state 64'
gotoTable[59265] = 468713472; // 'state 447'
gotoTable[59268] = 468713472; // 'state 447'
gotoTable[59531] = 20971520; // 'state 20'
gotoTable[59547] = 22020096; // 'state 21'
gotoTable[59568] = 321912832; // 'state 307'
gotoTable[59569] = 433061888; // 'state 413'
gotoTable[59570] = 434110464; // 'state 414'
gotoTable[59572] = 24117248; // 'state 23'
gotoTable[59573] = 435159040; // 'state 415'
gotoTable.fill(434110464, 59574, 59585); // 'state 414'
gotoTable.fill(436207616, 59585, 59587); // 'state 416'
gotoTable[59591] = 433061888; // 'state 413'
gotoTable[59593] = 433061888; // 'state 413'
gotoTable.fill(418381824, 59600, 59602); // 'state 399'
gotoTable[59843] = 455081984; // 'state 434'
gotoTable[60034] = 664797184; // 'state 634'
gotoTable[60081] = 444596224; // 'state 424'
gotoTable[60110] = 521142272; // 'state 497'
gotoTable[60111] = 444596224; // 'state 424'
gotoTable[60299] = 20971520; // 'state 20'
gotoTable[60315] = 22020096; // 'state 21'
gotoTable[60336] = 324009984; // 'state 309'
gotoTable[60337] = 433061888; // 'state 413'
gotoTable[60338] = 434110464; // 'state 414'
gotoTable[60340] = 24117248; // 'state 23'
gotoTable[60341] = 435159040; // 'state 415'
gotoTable.fill(434110464, 60342, 60353); // 'state 414'
gotoTable.fill(436207616, 60353, 60355); // 'state 416'
gotoTable[60359] = 433061888; // 'state 413'
gotoTable[60361] = 433061888; // 'state 413'
gotoTable.fill(418381824, 60368, 60370); // 'state 399'
gotoTable[60543] = 665845760; // 'state 635'
gotoTable[60545] = 468713472; // 'state 447'
gotoTable[60548] = 468713472; // 'state 447'
gotoTable[60803] = 667942912; // 'state 637'
gotoTable[61055] = 523239424; // 'state 499'
gotoTable[61057] = 468713472; // 'state 447'
gotoTable[61060] = 468713472; // 'state 447'
gotoTable[61061] = 668991488; // 'state 638'
gotoTable[61323] = 20971520; // 'state 20'
gotoTable[61339] = 22020096; // 'state 21'
gotoTable[61360] = 326107136; // 'state 311'
gotoTable[61361] = 433061888; // 'state 413'
gotoTable[61362] = 434110464; // 'state 414'
gotoTable[61364] = 24117248; // 'state 23'
gotoTable[61365] = 435159040; // 'state 415'
gotoTable.fill(434110464, 61366, 61377); // 'state 414'
gotoTable.fill(436207616, 61377, 61379); // 'state 416'
gotoTable[61383] = 433061888; // 'state 413'
gotoTable[61385] = 433061888; // 'state 413'
gotoTable.fill(418381824, 61392, 61394); // 'state 399'
gotoTable[61537] = 671088640; // 'state 640'
gotoTable[61593] = 328204288; // 'state 313'
gotoTable[61832] = 327155712; // 'state 312'
gotoTable[62049] = 672137216; // 'state 641'
gotoTable[62105] = 329252864; // 'state 314'
gotoTable[62305] = 672137216; // 'state 641'
gotoTable[62659] = 455081984; // 'state 434'
gotoTable[62817] = 673185792; // 'state 642'
gotoTable[62859] = 20971520; // 'state 20'
gotoTable[62875] = 22020096; // 'state 21'
gotoTable[62896] = 330301440; // 'state 315'
gotoTable[62897] = 433061888; // 'state 413'
gotoTable[62898] = 434110464; // 'state 414'
gotoTable[62900] = 24117248; // 'state 23'
gotoTable[62901] = 435159040; // 'state 415'
gotoTable.fill(434110464, 62902, 62913); // 'state 414'
gotoTable.fill(436207616, 62913, 62915); // 'state 416'
gotoTable[62919] = 433061888; // 'state 413'
gotoTable[62921] = 433061888; // 'state 413'
gotoTable.fill(418381824, 62928, 62930); // 'state 399'
gotoTable[63073] = 671088640; // 'state 640'
gotoTable[63359] = 168820736; // 'state 161'
gotoTable[63361] = 468713472; // 'state 447'
gotoTable[63364] = 468713472; // 'state 447'
gotoTable[63369] = 676331520; // 'state 645'
gotoTable[63373] = 170917888; // 'state 163'
gotoTable[63641] = 677380096; // 'state 646'
gotoTable[63883] = 20971520; // 'state 20'
gotoTable[63899] = 22020096; // 'state 21'
gotoTable[63920] = 334495744; // 'state 319'
gotoTable[63921] = 433061888; // 'state 413'
gotoTable[63922] = 434110464; // 'state 414'
gotoTable[63924] = 24117248; // 'state 23'
gotoTable[63925] = 435159040; // 'state 415'
gotoTable.fill(434110464, 63926, 63937); // 'state 414'
gotoTable.fill(436207616, 63937, 63939); // 'state 416'
gotoTable[63943] = 433061888; // 'state 413'
gotoTable[63945] = 433061888; // 'state 413'
gotoTable.fill(418381824, 63952, 63954); // 'state 399'
gotoTable[64153] = 678428672; // 'state 647'
gotoTable[64403] = 679477248; // 'state 648'
gotoTable[64651] = 495976448; // 'state 473'
gotoTable[64667] = 142606336; // 'state 136'
gotoTable[64670] = 681574400; // 'state 650'
gotoTable.fill(498073600, 64671, 64674); // 'state 475'
gotoTable[64674] = 499122176; // 'state 476'
gotoTable.fill(493879296, 64675, 64679); // 'state 471'
gotoTable[64679] = 500170752; // 'state 477'
gotoTable.fill(493879296, 64680, 64682); // 'state 471'
gotoTable[64683] = 493879296; // 'state 471'
gotoTable[64907] = 495976448; // 'state 473'
gotoTable[64923] = 142606336; // 'state 136'
gotoTable[64926] = 632291328; // 'state 603'
gotoTable.fill(498073600, 64927, 64930); // 'state 475'
gotoTable[64930] = 499122176; // 'state 476'
gotoTable.fill(493879296, 64931, 64935); // 'state 471'
gotoTable[64935] = 500170752; // 'state 477'
gotoTable.fill(493879296, 64936, 64938); // 'state 471'
gotoTable[64939] = 493879296; // 'state 471'
gotoTable[65163] = 495976448; // 'state 473'
gotoTable[65179] = 142606336; // 'state 136'
gotoTable[65182] = 633339904; // 'state 604'
gotoTable.fill(498073600, 65183, 65186); // 'state 475'
gotoTable[65186] = 499122176; // 'state 476'
gotoTable.fill(493879296, 65187, 65191); // 'state 471'
gotoTable[65191] = 500170752; // 'state 477'
gotoTable.fill(493879296, 65192, 65194); // 'state 471'
gotoTable[65195] = 493879296; // 'state 471'
gotoTable[65416] = 337641472; // 'state 322'
gotoTable[65433] = 683671552; // 'state 652'
gotoTable[65435] = 338690048; // 'state 323'
gotoTable[65675] = 20971520; // 'state 20'
gotoTable[65691] = 22020096; // 'state 21'
gotoTable[65712] = 340787200; // 'state 325'
gotoTable[65713] = 433061888; // 'state 413'
gotoTable[65714] = 434110464; // 'state 414'
gotoTable[65716] = 24117248; // 'state 23'
gotoTable[65717] = 435159040; // 'state 415'
gotoTable.fill(434110464, 65718, 65729); // 'state 414'
gotoTable.fill(436207616, 65729, 65731); // 'state 416'
gotoTable[65735] = 433061888; // 'state 413'
gotoTable[65737] = 433061888; // 'state 413'
gotoTable.fill(418381824, 65744, 65746); // 'state 399'
gotoTable[65889] = 684720128; // 'state 653'
gotoTable[65945] = 339738624; // 'state 324'
gotoTable[66184] = 337641472; // 'state 322'
gotoTable[66475] = 685768704; // 'state 654'
gotoTable[66704] = 686817280; // 'state 655'
gotoTable[66955] = 495976448; // 'state 473'
gotoTable[66971] = 142606336; // 'state 136'
gotoTable[66974] = 687865856; // 'state 656'
gotoTable.fill(498073600, 66975, 66978); // 'state 475'
gotoTable[66978] = 499122176; // 'state 476'
gotoTable.fill(493879296, 66979, 66983); // 'state 471'
gotoTable[66983] = 500170752; // 'state 477'
gotoTable.fill(493879296, 66984, 66986); // 'state 471'
gotoTable[66987] = 493879296; // 'state 471'
gotoTable[67211] = 20971520; // 'state 20'
gotoTable[67227] = 22020096; // 'state 21'
gotoTable[67248] = 92274688; // 'state 88'
gotoTable[67249] = 433061888; // 'state 413'
gotoTable[67250] = 434110464; // 'state 414'
gotoTable[67252] = 24117248; // 'state 23'
gotoTable[67253] = 435159040; // 'state 415'
gotoTable.fill(434110464, 67254, 67265); // 'state 414'
gotoTable.fill(436207616, 67265, 67267); // 'state 416'
gotoTable[67268] = 691011584; // 'state 659'
gotoTable[67269] = 472907776; // 'state 451'
gotoTable[67271] = 433061888; // 'state 413'
gotoTable[67273] = 433061888; // 'state 413'
gotoTable.fill(418381824, 67280, 67282); // 'state 399'
gotoTable[67467] = 20971520; // 'state 20'
gotoTable[67483] = 22020096; // 'state 21'
gotoTable[67504] = 342884352; // 'state 327'
gotoTable[67505] = 433061888; // 'state 413'
gotoTable[67506] = 434110464; // 'state 414'
gotoTable[67508] = 24117248; // 'state 23'
gotoTable[67509] = 435159040; // 'state 415'
gotoTable.fill(434110464, 67510, 67521); // 'state 414'
gotoTable.fill(436207616, 67521, 67523); // 'state 416'
gotoTable[67527] = 433061888; // 'state 413'
gotoTable[67529] = 433061888; // 'state 413'
gotoTable.fill(418381824, 67536, 67538); // 'state 399'
gotoTable[67723] = 20971520; // 'state 20'
gotoTable[67724] = 693108736; // 'state 661'
gotoTable[67739] = 22020096; // 'state 21'
gotoTable[67760] = 92274688; // 'state 88'
gotoTable[67761] = 433061888; // 'state 413'
gotoTable[67762] = 434110464; // 'state 414'
gotoTable[67764] = 24117248; // 'state 23'
gotoTable[67765] = 435159040; // 'state 415'
gotoTable.fill(434110464, 67766, 67777); // 'state 414'
gotoTable.fill(436207616, 67777, 67779); // 'state 416'
gotoTable[67780] = 693108736; // 'state 661'
gotoTable[67781] = 472907776; // 'state 451'
gotoTable[67783] = 94371840; // 'state 90'
gotoTable[67785] = 94371840; // 'state 90'
gotoTable.fill(418381824, 67792, 67794); // 'state 399'
gotoTable[67984] = 695205888; // 'state 663'
gotoTable[68235] = 20971520; // 'state 20'
gotoTable[68251] = 22020096; // 'state 21'
gotoTable[68272] = 92274688; // 'state 88'
gotoTable[68273] = 433061888; // 'state 413'
gotoTable[68274] = 434110464; // 'state 414'
gotoTable[68276] = 24117248; // 'state 23'
gotoTable[68277] = 435159040; // 'state 415'
gotoTable.fill(434110464, 68278, 68289); // 'state 414'
gotoTable.fill(436207616, 68289, 68291); // 'state 416'
gotoTable[68292] = 697303040; // 'state 665'
gotoTable[68293] = 472907776; // 'state 451'
gotoTable[68295] = 433061888; // 'state 413'
gotoTable[68297] = 433061888; // 'state 413'
gotoTable.fill(418381824, 68304, 68306); // 'state 399'
gotoTable[68508] = 699400192; // 'state 667'
gotoTable[68705] = 700448768; // 'state 668'
gotoTable[68761] = 346030080; // 'state 330'
gotoTable[68961] = 700448768; // 'state 668'
gotoTable[69315] = 455081984; // 'state 434'
gotoTable[69515] = 20971520; // 'state 20'
gotoTable[69531] = 22020096; // 'state 21'
gotoTable[69552] = 349175808; // 'state 333'
gotoTable[69553] = 433061888; // 'state 413'
gotoTable[69554] = 434110464; // 'state 414'
gotoTable[69556] = 24117248; // 'state 23'
gotoTable[69557] = 435159040; // 'state 415'
gotoTable.fill(434110464, 69558, 69569); // 'state 414'
gotoTable.fill(436207616, 69569, 69571); // 'state 416'
gotoTable[69575] = 433061888; // 'state 413'
gotoTable[69577] = 433061888; // 'state 413'
gotoTable.fill(418381824, 69584, 69586); // 'state 399'
gotoTable[69727] = 702545920; // 'state 670'
gotoTable.fill(430964736, 69729, 69738); // 'state 411'
gotoTable[69740] = 430964736; // 'state 411'
gotoTable.fill(430964736, 69745, 69749); // 'state 411'
gotoTable[69749] = 432013312; // 'state 412'
gotoTable[69755] = 432013312; // 'state 412'
gotoTable[69757] = 432013312; // 'state 412'
gotoTable[69766] = 432013312; // 'state 412'
gotoTable[69771] = 20971520; // 'state 20'
gotoTable[69774] = 432013312; // 'state 412'
gotoTable[69782] = 432013312; // 'state 412'
gotoTable[69784] = 432013312; // 'state 412'
gotoTable[69787] = 22020096; // 'state 21'
gotoTable[69808] = 23068672; // 'state 22'
gotoTable[69809] = 433061888; // 'state 413'
gotoTable[69810] = 434110464; // 'state 414'
gotoTable[69812] = 24117248; // 'state 23'
gotoTable[69813] = 435159040; // 'state 415'
gotoTable.fill(434110464, 69814, 69825); // 'state 414'
gotoTable.fill(436207616, 69825, 69827); // 'state 416'
gotoTable[69831] = 433061888; // 'state 413'
gotoTable[69833] = 433061888; // 'state 413'
gotoTable.fill(418381824, 69840, 69842); // 'state 399'
gotoTable[70083] = 455081984; // 'state 434'
gotoTable[70283] = 20971520; // 'state 20'
gotoTable[70299] = 22020096; // 'state 21'
gotoTable[70320] = 350224384; // 'state 334'
gotoTable[70321] = 433061888; // 'state 413'
gotoTable[70322] = 434110464; // 'state 414'
gotoTable[70324] = 24117248; // 'state 23'
gotoTable[70325] = 435159040; // 'state 415'
gotoTable.fill(434110464, 70326, 70337); // 'state 414'
gotoTable.fill(436207616, 70337, 70339); // 'state 416'
gotoTable[70343] = 433061888; // 'state 413'
gotoTable[70345] = 433061888; // 'state 413'
gotoTable.fill(418381824, 70352, 70354); // 'state 399'
gotoTable[70595] = 455081984; // 'state 434'
gotoTable[70792] = 352321536; // 'state 336'
gotoTable[71059] = 703594496; // 'state 671'
gotoTable[71321] = 704643072; // 'state 672'
gotoTable[71533] = 355467264; // 'state 339'
gotoTable.fill(707788800, 71535, 71537); // 'state 675'
gotoTable[71875] = 455081984; // 'state 434'
gotoTable[72066] = 155189248; // 'state 148'
gotoTable[72113] = 487587840; // 'state 465'
gotoTable[72133] = 443547648; // 'state 423'
gotoTable[72138] = 30408704; // 'state 29'
gotoTable.fill(443547648, 72139, 72142); // 'state 423'
gotoTable[72142] = 359661568; // 'state 343'
gotoTable[72143] = 444596224; // 'state 424'
gotoTable[72319] = 262144000; // 'state 250'
gotoTable[72321] = 468713472; // 'state 447'
gotoTable[72324] = 468713472; // 'state 447'
gotoTable[72391] = 299892736; // 'state 286'
gotoTable[72393] = 299892736; // 'state 286'
gotoTable[72575] = 523239424; // 'state 499'
gotoTable[72577] = 468713472; // 'state 447'
gotoTable[72580] = 468713472; // 'state 447'
gotoTable[72581] = 158334976; // 'state 151'
gotoTable[72587] = 20971520; // 'state 20'
gotoTable[72603] = 22020096; // 'state 21'
gotoTable[72624] = 92274688; // 'state 88'
gotoTable[72625] = 433061888; // 'state 413'
gotoTable[72626] = 434110464; // 'state 414'
gotoTable[72628] = 24117248; // 'state 23'
gotoTable[72629] = 435159040; // 'state 415'
gotoTable.fill(434110464, 72630, 72641); // 'state 414'
gotoTable.fill(436207616, 72641, 72643); // 'state 416'
gotoTable[72644] = 101711872; // 'state 97'
gotoTable[72645] = 472907776; // 'state 451'
gotoTable[72647] = 433061888; // 'state 413'
gotoTable[72649] = 433061888; // 'state 413'
gotoTable.fill(418381824, 72656, 72658); // 'state 399'
gotoTable[72857] = 542113792; // 'state 517'
gotoTable[73099] = 495976448; // 'state 473'
gotoTable[73115] = 142606336; // 'state 136'
gotoTable[73118] = 714080256; // 'state 681'
gotoTable.fill(498073600, 73119, 73122); // 'state 475'
gotoTable[73122] = 499122176; // 'state 476'
gotoTable.fill(493879296, 73123, 73127); // 'state 471'
gotoTable[73127] = 500170752; // 'state 477'
gotoTable.fill(493879296, 73128, 73130); // 'state 471'
gotoTable[73131] = 493879296; // 'state 471'
gotoTable[73369] = 614465536; // 'state 586'
gotoTable[73608] = 363855872; // 'state 347'
gotoTable[73625] = 649068544; // 'state 619'
gotoTable[73627] = 364904448; // 'state 348'
gotoTable[73867] = 306184192; // 'state 292'
gotoTable[73868] = 91226112; // 'state 87'
gotoTable[73883] = 307232768; // 'state 293'
gotoTable[73886] = 559939584; // 'state 534'
gotoTable.fill(498073600, 73887, 73890); // 'state 475'
gotoTable[73890] = 499122176; // 'state 476'
gotoTable.fill(493879296, 73891, 73895); // 'state 471'
gotoTable[73895] = 500170752; // 'state 477'
gotoTable.fill(493879296, 73896, 73898); // 'state 471'
gotoTable[73899] = 493879296; // 'state 471'
gotoTable[73904] = 92274688; // 'state 88'
gotoTable[73905] = 433061888; // 'state 413'
gotoTable[73906] = 434110464; // 'state 414'
gotoTable[73908] = 24117248; // 'state 23'
gotoTable[73909] = 435159040; // 'state 415'
gotoTable.fill(434110464, 73910, 73921); // 'state 414'
gotoTable.fill(436207616, 73921, 73923); // 'state 416'
gotoTable[73924] = 93323264; // 'state 89'
gotoTable[73925] = 472907776; // 'state 451'
gotoTable[73927] = 94371840; // 'state 90'
gotoTable[73929] = 94371840; // 'state 90'
gotoTable.fill(418381824, 73936, 73938); // 'state 399'
gotoTable[74123] = 20971520; // 'state 20'
gotoTable[74139] = 22020096; // 'state 21'
gotoTable[74160] = 95420416; // 'state 91'
gotoTable[74161] = 433061888; // 'state 413'
gotoTable[74162] = 434110464; // 'state 414'
gotoTable[74164] = 24117248; // 'state 23'
gotoTable[74165] = 435159040; // 'state 415'
gotoTable.fill(434110464, 74166, 74177); // 'state 414'
gotoTable.fill(436207616, 74177, 74179); // 'state 416'
gotoTable[74183] = 433061888; // 'state 413'
gotoTable[74185] = 433061888; // 'state 413'
gotoTable.fill(418381824, 74192, 74194); // 'state 399'
gotoTable[74379] = 20971520; // 'state 20'
gotoTable[74395] = 22020096; // 'state 21'
gotoTable[74416] = 95420416; // 'state 91'
gotoTable[74417] = 433061888; // 'state 413'
gotoTable[74418] = 434110464; // 'state 414'
gotoTable[74420] = 24117248; // 'state 23'
gotoTable[74421] = 435159040; // 'state 415'
gotoTable.fill(434110464, 74422, 74433); // 'state 414'
gotoTable.fill(436207616, 74433, 74435); // 'state 416'
gotoTable[74439] = 433061888; // 'state 413'
gotoTable[74441] = 433061888; // 'state 413'
gotoTable.fill(418381824, 74448, 74450); // 'state 399'
gotoTable[74653] = 560988160; // 'state 535'
gotoTable[74905] = 469762048; // 'state 448'
gotoTable[75144] = 365953024; // 'state 349'
gotoTable[75147] = 558891008; // 'state 533'
gotoTable[75403] = 495976448; // 'state 473'
gotoTable[75419] = 142606336; // 'state 136'
gotoTable[75422] = 681574400; // 'state 650'
gotoTable.fill(498073600, 75423, 75426); // 'state 475'
gotoTable[75426] = 499122176; // 'state 476'
gotoTable.fill(493879296, 75427, 75431); // 'state 471'
gotoTable[75431] = 500170752; // 'state 477'
gotoTable.fill(493879296, 75432, 75434); // 'state 471'
gotoTable[75435] = 493879296; // 'state 471'
gotoTable[75659] = 20971520; // 'state 20'
gotoTable[75675] = 22020096; // 'state 21'
gotoTable[75696] = 201326592; // 'state 192'
gotoTable[75697] = 433061888; // 'state 413'
gotoTable[75698] = 434110464; // 'state 414'
gotoTable[75700] = 24117248; // 'state 23'
gotoTable[75701] = 435159040; // 'state 415'
gotoTable.fill(434110464, 75702, 75713); // 'state 414'
gotoTable.fill(436207616, 75713, 75715); // 'state 416'
gotoTable[75719] = 433061888; // 'state 413'
gotoTable[75721] = 433061888; // 'state 413'
gotoTable.fill(418381824, 75728, 75730); // 'state 399'
gotoTable[75929] = 719323136; // 'state 686'
gotoTable[76185] = 721420288; // 'state 688'
gotoTable[76424] = 370147328; // 'state 353'
gotoTable[76697] = 722468864; // 'state 689'
gotoTable[76936] = 371195904; // 'state 354'
gotoTable[77195] = 20971520; // 'state 20'
gotoTable[77211] = 22020096; // 'state 21'
gotoTable[77232] = 92274688; // 'state 88'
gotoTable[77233] = 433061888; // 'state 413'
gotoTable[77234] = 434110464; // 'state 414'
gotoTable[77236] = 24117248; // 'state 23'
gotoTable[77237] = 435159040; // 'state 415'
gotoTable.fill(434110464, 77238, 77249); // 'state 414'
gotoTable.fill(436207616, 77249, 77251); // 'state 416'
gotoTable[77252] = 691011584; // 'state 659'
gotoTable[77253] = 472907776; // 'state 451'
gotoTable[77255] = 433061888; // 'state 413'
gotoTable[77257] = 433061888; // 'state 413'
gotoTable.fill(418381824, 77264, 77266); // 'state 399'
gotoTable[77434] = 725614592; // 'state 692'
gotoTable[77665] = 727711744; // 'state 694'
gotoTable[77721] = 374341632; // 'state 357'
gotoTable[77960] = 373293056; // 'state 356'
gotoTable[78177] = 727711744; // 'state 694'
gotoTable[78483] = 728760320; // 'state 695'
gotoTable[78787] = 455081984; // 'state 434'
gotoTable[78978] = 731906048; // 'state 698'
gotoTable[79025] = 444596224; // 'state 424'
gotoTable[79054] = 521142272; // 'state 497'
gotoTable[79055] = 444596224; // 'state 424'
gotoTable[79299] = 455081984; // 'state 434'
gotoTable[79487] = 523239424; // 'state 499'
gotoTable[79489] = 468713472; // 'state 447'
gotoTable[79492] = 468713472; // 'state 447'
gotoTable[79493] = 734003200; // 'state 700'
gotoTable[79811] = 455081984; // 'state 434'
gotoTable[79969] = 736100352; // 'state 702'
gotoTable[80025] = 376438784; // 'state 359'
gotoTable[80225] = 736100352; // 'state 702'
gotoTable[80481] = 738197504; // 'state 704'
gotoTable[80835] = 455081984; // 'state 434'
gotoTable[80993] = 739246080; // 'state 705'
gotoTable[81035] = 20971520; // 'state 20'
gotoTable[81051] = 22020096; // 'state 21'
gotoTable[81072] = 377487360; // 'state 360'
gotoTable[81073] = 433061888; // 'state 413'
gotoTable[81074] = 434110464; // 'state 414'
gotoTable[81076] = 24117248; // 'state 23'
gotoTable[81077] = 435159040; // 'state 415'
gotoTable.fill(434110464, 81078, 81089); // 'state 414'
gotoTable.fill(436207616, 81089, 81091); // 'state 416'
gotoTable[81095] = 433061888; // 'state 413'
gotoTable[81097] = 433061888; // 'state 413'
gotoTable.fill(418381824, 81104, 81106); // 'state 399'
gotoTable[81279] = 168820736; // 'state 161'
gotoTable[81281] = 468713472; // 'state 447'
gotoTable[81284] = 468713472; // 'state 447'
gotoTable[81289] = 741343232; // 'state 707'
gotoTable[81293] = 170917888; // 'state 163'
gotoTable[81547] = 20971520; // 'state 20'
gotoTable[81563] = 22020096; // 'state 21'
gotoTable[81584] = 379584512; // 'state 362'
gotoTable[81585] = 433061888; // 'state 413'
gotoTable[81586] = 434110464; // 'state 414'
gotoTable[81588] = 24117248; // 'state 23'
gotoTable[81589] = 435159040; // 'state 415'
gotoTable.fill(434110464, 81590, 81601); // 'state 414'
gotoTable.fill(436207616, 81601, 81603); // 'state 416'
gotoTable[81607] = 433061888; // 'state 413'
gotoTable[81609] = 433061888; // 'state 413'
gotoTable.fill(418381824, 81616, 81618); // 'state 399'
gotoTable[81859] = 455081984; // 'state 434'
gotoTable[82059] = 495976448; // 'state 473'
gotoTable[82075] = 142606336; // 'state 136'
gotoTable[82078] = 743440384; // 'state 709'
gotoTable.fill(498073600, 82079, 82082); // 'state 475'
gotoTable[82082] = 499122176; // 'state 476'
gotoTable.fill(493879296, 82083, 82087); // 'state 471'
gotoTable[82087] = 500170752; // 'state 477'
gotoTable.fill(493879296, 82088, 82090); // 'state 471'
gotoTable[82091] = 493879296; // 'state 471'
gotoTable[82315] = 20971520; // 'state 20'
gotoTable[82331] = 22020096; // 'state 21'
gotoTable[82352] = 383778816; // 'state 366'
gotoTable[82353] = 433061888; // 'state 413'
gotoTable[82354] = 434110464; // 'state 414'
gotoTable[82356] = 24117248; // 'state 23'
gotoTable[82357] = 435159040; // 'state 415'
gotoTable.fill(434110464, 82358, 82369); // 'state 414'
gotoTable.fill(436207616, 82369, 82371); // 'state 416'
gotoTable[82375] = 433061888; // 'state 413'
gotoTable[82377] = 433061888; // 'state 413'
gotoTable.fill(418381824, 82384, 82386); // 'state 399'
gotoTable[82529] = 744488960; // 'state 710'
gotoTable[82585] = 381681664; // 'state 364'
gotoTable[82824] = 380633088; // 'state 363'
gotoTable[83041] = 744488960; // 'state 710'
gotoTable[83395] = 455081984; // 'state 434'
gotoTable[83595] = 20971520; // 'state 20'
gotoTable[83611] = 22020096; // 'state 21'
gotoTable[83632] = 384827392; // 'state 367'
gotoTable[83633] = 433061888; // 'state 413'
gotoTable[83634] = 434110464; // 'state 414'
gotoTable[83636] = 24117248; // 'state 23'
gotoTable[83637] = 435159040; // 'state 415'
gotoTable.fill(434110464, 83638, 83649); // 'state 414'
gotoTable.fill(436207616, 83649, 83651); // 'state 416'
gotoTable[83655] = 433061888; // 'state 413'
gotoTable[83657] = 433061888; // 'state 413'
gotoTable.fill(418381824, 83664, 83666); // 'state 399'
gotoTable[83907] = 455081984; // 'state 434'
gotoTable[84107] = 495976448; // 'state 473'
gotoTable[84123] = 142606336; // 'state 136'
gotoTable[84126] = 681574400; // 'state 650'
gotoTable.fill(498073600, 84127, 84130); // 'state 475'
gotoTable[84130] = 499122176; // 'state 476'
gotoTable.fill(493879296, 84131, 84135); // 'state 471'
gotoTable[84135] = 500170752; // 'state 477'
gotoTable.fill(493879296, 84136, 84138); // 'state 471'
gotoTable[84139] = 493879296; // 'state 471'
gotoTable[84363] = 495976448; // 'state 473'
gotoTable[84379] = 142606336; // 'state 136'
gotoTable[84382] = 748683264; // 'state 714'
gotoTable.fill(498073600, 84383, 84386); // 'state 475'
gotoTable[84386] = 499122176; // 'state 476'
gotoTable.fill(493879296, 84387, 84391); // 'state 471'
gotoTable[84391] = 500170752; // 'state 477'
gotoTable.fill(493879296, 84392, 84394); // 'state 471'
gotoTable[84395] = 493879296; // 'state 471'
gotoTable[84577] = 749731840; // 'state 715'
gotoTable[84831] = 750780416; // 'state 716'
gotoTable.fill(430964736, 84833, 84842); // 'state 411'
gotoTable[84844] = 430964736; // 'state 411'
gotoTable.fill(430964736, 84849, 84853); // 'state 411'
gotoTable[84853] = 432013312; // 'state 412'
gotoTable[84859] = 432013312; // 'state 412'
gotoTable[84861] = 432013312; // 'state 412'
gotoTable[84870] = 432013312; // 'state 412'
gotoTable[84875] = 20971520; // 'state 20'
gotoTable[84878] = 432013312; // 'state 412'
gotoTable[84886] = 432013312; // 'state 412'
gotoTable[84888] = 432013312; // 'state 412'
gotoTable[84891] = 22020096; // 'state 21'
gotoTable[84912] = 23068672; // 'state 22'
gotoTable[84913] = 433061888; // 'state 413'
gotoTable[84914] = 434110464; // 'state 414'
gotoTable[84916] = 24117248; // 'state 23'
gotoTable[84917] = 435159040; // 'state 415'
gotoTable.fill(434110464, 84918, 84929); // 'state 414'
gotoTable.fill(436207616, 84929, 84931); // 'state 416'
gotoTable[84935] = 433061888; // 'state 413'
gotoTable[84937] = 433061888; // 'state 413'
gotoTable.fill(418381824, 84944, 84946); // 'state 399'
gotoTable[85087] = 752877568; // 'state 718'
gotoTable.fill(430964736, 85089, 85098); // 'state 411'
gotoTable[85100] = 430964736; // 'state 411'
gotoTable.fill(430964736, 85105, 85109); // 'state 411'
gotoTable[85109] = 432013312; // 'state 412'
gotoTable[85115] = 432013312; // 'state 412'
gotoTable[85117] = 432013312; // 'state 412'
gotoTable[85126] = 432013312; // 'state 412'
gotoTable[85131] = 20971520; // 'state 20'
gotoTable[85134] = 432013312; // 'state 412'
gotoTable[85142] = 432013312; // 'state 412'
gotoTable[85144] = 432013312; // 'state 412'
gotoTable[85147] = 22020096; // 'state 21'
gotoTable[85168] = 23068672; // 'state 22'
gotoTable[85169] = 433061888; // 'state 413'
gotoTable[85170] = 434110464; // 'state 414'
gotoTable[85172] = 24117248; // 'state 23'
gotoTable[85173] = 435159040; // 'state 415'
gotoTable.fill(434110464, 85174, 85185); // 'state 414'
gotoTable.fill(436207616, 85185, 85187); // 'state 416'
gotoTable[85191] = 433061888; // 'state 413'
gotoTable[85193] = 433061888; // 'state 413'
gotoTable.fill(418381824, 85200, 85202); // 'state 399'
gotoTable[85443] = 455081984; // 'state 434'
gotoTable[85699] = 455081984; // 'state 434'
gotoTable[85899] = 20971520; // 'state 20'
gotoTable[85915] = 22020096; // 'state 21'
gotoTable[85936] = 389021696; // 'state 371'
gotoTable[85937] = 433061888; // 'state 413'
gotoTable[85938] = 434110464; // 'state 414'
gotoTable[85940] = 24117248; // 'state 23'
gotoTable[85941] = 435159040; // 'state 415'
gotoTable.fill(434110464, 85942, 85953); // 'state 414'
gotoTable.fill(436207616, 85953, 85955); // 'state 416'
gotoTable[85959] = 433061888; // 'state 413'
gotoTable[85961] = 433061888; // 'state 413'
gotoTable.fill(418381824, 85968, 85970); // 'state 399'
gotoTable[86113] = 738197504; // 'state 704'
gotoTable[86169] = 390070272; // 'state 372'
gotoTable[86369] = 753926144; // 'state 719'
gotoTable[86667] = 20971520; // 'state 20'
gotoTable[86683] = 22020096; // 'state 21'
gotoTable[86704] = 392167424; // 'state 374'
gotoTable[86705] = 433061888; // 'state 413'
gotoTable[86706] = 434110464; // 'state 414'
gotoTable[86708] = 24117248; // 'state 23'
gotoTable[86709] = 435159040; // 'state 415'
gotoTable.fill(434110464, 86710, 86721); // 'state 414'
gotoTable.fill(436207616, 86721, 86723); // 'state 416'
gotoTable[86727] = 433061888; // 'state 413'
gotoTable[86729] = 433061888; // 'state 413'
gotoTable.fill(418381824, 86736, 86738); // 'state 399'
gotoTable.fill(756023296, 86895, 86897); // 'state 721'
gotoTable[87179] = 495976448; // 'state 473'
gotoTable[87195] = 142606336; // 'state 136'
gotoTable[87198] = 757071872; // 'state 722'
gotoTable.fill(498073600, 87199, 87202); // 'state 475'
gotoTable[87202] = 499122176; // 'state 476'
gotoTable.fill(493879296, 87203, 87207); // 'state 471'
gotoTable[87207] = 500170752; // 'state 477'
gotoTable.fill(493879296, 87208, 87210); // 'state 471'
gotoTable[87211] = 493879296; // 'state 471'
gotoTable[87449] = 614465536; // 'state 586'
gotoTable[87679] = 585105408; // 'state 558'
gotoTable[87681] = 468713472; // 'state 447'
gotoTable[87684] = 468713472; // 'state 447'
gotoTable[87691] = 20971520; // 'state 20'
gotoTable[87707] = 22020096; // 'state 21'
gotoTable[87728] = 111149056; // 'state 106'
gotoTable[87729] = 433061888; // 'state 413'
gotoTable[87730] = 434110464; // 'state 414'
gotoTable[87732] = 24117248; // 'state 23'
gotoTable[87733] = 435159040; // 'state 415'
gotoTable.fill(434110464, 87734, 87745); // 'state 414'
gotoTable.fill(436207616, 87745, 87747); // 'state 416'
gotoTable[87751] = 433061888; // 'state 413'
gotoTable[87753] = 433061888; // 'state 413'
gotoTable.fill(418381824, 87760, 87762); // 'state 399'
gotoTable[87944] = 109051904; // 'state 104'
gotoTable[87963] = 110100480; // 'state 105'
gotoTable[88191] = 523239424; // 'state 499'
gotoTable[88193] = 468713472; // 'state 447'
gotoTable[88196] = 468713472; // 'state 447'
gotoTable[88197] = 248512512; // 'state 237'
gotoTable[88203] = 20971520; // 'state 20'
gotoTable[88219] = 22020096; // 'state 21'
gotoTable[88240] = 92274688; // 'state 88'
gotoTable[88241] = 433061888; // 'state 413'
gotoTable[88242] = 434110464; // 'state 414'
gotoTable[88244] = 24117248; // 'state 23'
gotoTable[88245] = 435159040; // 'state 415'
gotoTable.fill(434110464, 88246, 88257); // 'state 414'
gotoTable.fill(436207616, 88257, 88259); // 'state 416'
gotoTable[88260] = 193986560; // 'state 185'
gotoTable[88261] = 472907776; // 'state 451'
gotoTable[88263] = 433061888; // 'state 413'
gotoTable[88265] = 433061888; // 'state 413'
gotoTable.fill(418381824, 88272, 88274); // 'state 399'
gotoTable[88447] = 588251136; // 'state 561'
gotoTable[88449] = 468713472; // 'state 447'
gotoTable[88452] = 468713472; // 'state 447'
gotoTable[88459] = 20971520; // 'state 20'
gotoTable[88475] = 22020096; // 'state 21'
gotoTable[88496] = 111149056; // 'state 106'
gotoTable[88497] = 433061888; // 'state 413'
gotoTable[88498] = 434110464; // 'state 414'
gotoTable[88500] = 24117248; // 'state 23'
gotoTable[88501] = 435159040; // 'state 415'
gotoTable.fill(434110464, 88502, 88513); // 'state 414'
gotoTable.fill(436207616, 88513, 88515); // 'state 416'
gotoTable[88519] = 433061888; // 'state 413'
gotoTable[88521] = 433061888; // 'state 413'
gotoTable.fill(418381824, 88528, 88530); // 'state 399'
gotoTable[88715] = 306184192; // 'state 292'
gotoTable[88731] = 307232768; // 'state 293'
gotoTable[88734] = 538968064; // 'state 514'
gotoTable.fill(498073600, 88735, 88738); // 'state 475'
gotoTable[88738] = 499122176; // 'state 476'
gotoTable.fill(493879296, 88739, 88743); // 'state 471'
gotoTable[88743] = 500170752; // 'state 477'
gotoTable.fill(493879296, 88744, 88746); // 'state 471'
gotoTable[88747] = 493879296; // 'state 471'
gotoTable[88752] = 203423744; // 'state 194'
gotoTable[88753] = 433061888; // 'state 413'
gotoTable[88754] = 434110464; // 'state 414'
gotoTable[88756] = 24117248; // 'state 23'
gotoTable[88757] = 435159040; // 'state 415'
gotoTable.fill(434110464, 88758, 88769); // 'state 414'
gotoTable.fill(436207616, 88769, 88771); // 'state 416'
gotoTable[88775] = 433061888; // 'state 413'
gotoTable[88777] = 433061888; // 'state 413'
gotoTable.fill(418381824, 88784, 88786); // 'state 399'
gotoTable[88929] = 553648128; // 'state 528'
gotoTable[88985] = 396361728; // 'state 378'
gotoTable[89224] = 395313152; // 'state 377'
gotoTable[89497] = 524288000; // 'state 500'
gotoTable[89753] = 542113792; // 'state 517'
gotoTable[89757] = 560988160; // 'state 535'
gotoTable[89953] = 537919488; // 'state 513'
gotoTable[89995] = 306184192; // 'state 292'
gotoTable[90011] = 307232768; // 'state 293'
gotoTable[90014] = 641728512; // 'state 612'
gotoTable.fill(498073600, 90015, 90018); // 'state 475'
gotoTable[90018] = 499122176; // 'state 476'
gotoTable.fill(493879296, 90019, 90023); // 'state 471'
gotoTable[90023] = 500170752; // 'state 477'
gotoTable.fill(493879296, 90024, 90026); // 'state 471'
gotoTable[90027] = 493879296; // 'state 471'
gotoTable[90032] = 184549376; // 'state 176'
gotoTable[90033] = 433061888; // 'state 413'
gotoTable[90034] = 434110464; // 'state 414'
gotoTable[90036] = 24117248; // 'state 23'
gotoTable[90037] = 435159040; // 'state 415'
gotoTable.fill(434110464, 90038, 90049); // 'state 414'
gotoTable.fill(436207616, 90049, 90051); // 'state 416'
gotoTable[90055] = 433061888; // 'state 413'
gotoTable[90057] = 433061888; // 'state 413'
gotoTable.fill(418381824, 90064, 90066); // 'state 399'
gotoTable[90251] = 495976448; // 'state 473'
gotoTable[90267] = 142606336; // 'state 136'
gotoTable[90270] = 743440384; // 'state 709'
gotoTable.fill(498073600, 90271, 90274); // 'state 475'
gotoTable[90274] = 499122176; // 'state 476'
gotoTable.fill(493879296, 90275, 90279); // 'state 471'
gotoTable[90279] = 500170752; // 'state 477'
gotoTable.fill(493879296, 90280, 90282); // 'state 471'
gotoTable[90283] = 493879296; // 'state 471'
gotoTable[90521] = 760217600; // 'state 725'
gotoTable[90777] = 761266176; // 'state 726'
gotoTable[91019] = 495976448; // 'state 473'
gotoTable[91035] = 142606336; // 'state 136'
gotoTable[91038] = 762314752; // 'state 727'
gotoTable.fill(498073600, 91039, 91042); // 'state 475'
gotoTable[91042] = 499122176; // 'state 476'
gotoTable.fill(493879296, 91043, 91047); // 'state 471'
gotoTable[91047] = 500170752; // 'state 477'
gotoTable.fill(493879296, 91048, 91050); // 'state 471'
gotoTable[91051] = 493879296; // 'state 471'
gotoTable[91233] = 763363328; // 'state 728'
gotoTable[91289] = 400556032; // 'state 382'
gotoTable[91489] = 763363328; // 'state 728'
gotoTable[91787] = 20971520; // 'state 20'
gotoTable[91803] = 22020096; // 'state 21'
gotoTable[91824] = 401604608; // 'state 383'
gotoTable[91825] = 433061888; // 'state 413'
gotoTable[91826] = 434110464; // 'state 414'
gotoTable[91828] = 24117248; // 'state 23'
gotoTable[91829] = 435159040; // 'state 415'
gotoTable.fill(434110464, 91830, 91841); // 'state 414'
gotoTable.fill(436207616, 91841, 91843); // 'state 416'
gotoTable[91847] = 433061888; // 'state 413'
gotoTable[91849] = 433061888; // 'state 413'
gotoTable.fill(418381824, 91856, 91858); // 'state 399'
gotoTable[92001] = 766509056; // 'state 731'
gotoTable[92355] = 455081984; // 'state 434'
gotoTable[92555] = 20971520; // 'state 20'
gotoTable[92571] = 22020096; // 'state 21'
gotoTable[92592] = 402653184; // 'state 384'
gotoTable[92593] = 433061888; // 'state 413'
gotoTable[92594] = 434110464; // 'state 414'
gotoTable[92596] = 24117248; // 'state 23'
gotoTable[92597] = 435159040; // 'state 415'
gotoTable.fill(434110464, 92598, 92609); // 'state 414'
gotoTable.fill(436207616, 92609, 92611); // 'state 416'
gotoTable[92615] = 433061888; // 'state 413'
gotoTable[92617] = 433061888; // 'state 413'
gotoTable.fill(418381824, 92624, 92626); // 'state 399'
gotoTable[92867] = 455081984; // 'state 434'
gotoTable[93025] = 768606208; // 'state 733'
gotoTable[93081] = 403701760; // 'state 385'
gotoTable[93281] = 768606208; // 'state 733'
gotoTable[93579] = 20971520; // 'state 20'
gotoTable[93595] = 22020096; // 'state 21'
gotoTable[93616] = 404750336; // 'state 386'
gotoTable[93617] = 433061888; // 'state 413'
gotoTable[93618] = 434110464; // 'state 414'
gotoTable[93620] = 24117248; // 'state 23'
gotoTable[93621] = 435159040; // 'state 415'
gotoTable.fill(434110464, 93622, 93633); // 'state 414'
gotoTable.fill(436207616, 93633, 93635); // 'state 416'
gotoTable[93639] = 433061888; // 'state 413'
gotoTable[93641] = 433061888; // 'state 413'
gotoTable.fill(418381824, 93648, 93650); // 'state 399'
gotoTable[93891] = 455081984; // 'state 434'
gotoTable[94147] = 455081984; // 'state 434'
gotoTable[94347] = 495976448; // 'state 473'
gotoTable[94363] = 142606336; // 'state 136'
gotoTable[94366] = 743440384; // 'state 709'
gotoTable.fill(498073600, 94367, 94370); // 'state 475'
gotoTable[94370] = 499122176; // 'state 476'
gotoTable.fill(493879296, 94371, 94375); // 'state 471'
gotoTable[94375] = 500170752; // 'state 477'
gotoTable.fill(493879296, 94376, 94378); // 'state 471'
gotoTable[94379] = 493879296; // 'state 471'
gotoTable[94559] = 771751936; // 'state 736'
gotoTable.fill(430964736, 94561, 94570); // 'state 411'
gotoTable[94572] = 430964736; // 'state 411'
gotoTable.fill(430964736, 94577, 94581); // 'state 411'
gotoTable[94581] = 432013312; // 'state 412'
gotoTable[94587] = 432013312; // 'state 412'
gotoTable[94589] = 432013312; // 'state 412'
gotoTable[94598] = 432013312; // 'state 412'
gotoTable[94603] = 20971520; // 'state 20'
gotoTable[94606] = 432013312; // 'state 412'
gotoTable[94614] = 432013312; // 'state 412'
gotoTable[94616] = 432013312; // 'state 412'
gotoTable[94619] = 22020096; // 'state 21'
gotoTable[94640] = 23068672; // 'state 22'
gotoTable[94641] = 433061888; // 'state 413'
gotoTable[94642] = 434110464; // 'state 414'
gotoTable[94644] = 24117248; // 'state 23'
gotoTable[94645] = 435159040; // 'state 415'
gotoTable.fill(434110464, 94646, 94657); // 'state 414'
gotoTable.fill(436207616, 94657, 94659); // 'state 416'
gotoTable[94663] = 433061888; // 'state 413'
gotoTable[94665] = 433061888; // 'state 413'
gotoTable.fill(418381824, 94672, 94674); // 'state 399'
gotoTable[94815] = 772800512; // 'state 737'
gotoTable.fill(430964736, 94817, 94826); // 'state 411'
gotoTable[94828] = 430964736; // 'state 411'
gotoTable.fill(430964736, 94833, 94837); // 'state 411'
gotoTable[94837] = 432013312; // 'state 412'
gotoTable[94843] = 432013312; // 'state 412'
gotoTable[94845] = 432013312; // 'state 412'
gotoTable[94854] = 432013312; // 'state 412'
gotoTable[94859] = 20971520; // 'state 20'
gotoTable[94862] = 432013312; // 'state 412'
gotoTable[94870] = 432013312; // 'state 412'
gotoTable[94872] = 432013312; // 'state 412'
gotoTable[94875] = 22020096; // 'state 21'
gotoTable[94896] = 23068672; // 'state 22'
gotoTable[94897] = 433061888; // 'state 413'
gotoTable[94898] = 434110464; // 'state 414'
gotoTable[94900] = 24117248; // 'state 23'
gotoTable[94901] = 435159040; // 'state 415'
gotoTable.fill(434110464, 94902, 94913); // 'state 414'
gotoTable.fill(436207616, 94913, 94915); // 'state 416'
gotoTable[94919] = 433061888; // 'state 413'
gotoTable[94921] = 433061888; // 'state 413'
gotoTable.fill(418381824, 94928, 94930); // 'state 399'
gotoTable[95171] = 455081984; // 'state 434'
gotoTable[95329] = 773849088; // 'state 738'
gotoTable[95585] = 774897664; // 'state 739'
gotoTable[95939] = 455081984; // 'state 434'
gotoTable[96095] = 441450496; // 'state 421'
gotoTable[96096] = 407896064; // 'state 389'
gotoTable.fill(430964736, 96097, 96106); // 'state 411'
gotoTable[96108] = 430964736; // 'state 411'
gotoTable.fill(430964736, 96113, 96117); // 'state 411'
gotoTable[96117] = 432013312; // 'state 412'
gotoTable[96123] = 432013312; // 'state 412'
gotoTable[96125] = 432013312; // 'state 412'
gotoTable[96134] = 432013312; // 'state 412'
gotoTable[96139] = 20971520; // 'state 20'
gotoTable[96142] = 432013312; // 'state 412'
gotoTable[96150] = 432013312; // 'state 412'
gotoTable[96152] = 432013312; // 'state 412'
gotoTable[96155] = 22020096; // 'state 21'
gotoTable[96176] = 23068672; // 'state 22'
gotoTable[96177] = 433061888; // 'state 413'
gotoTable[96178] = 434110464; // 'state 414'
gotoTable[96180] = 24117248; // 'state 23'
gotoTable[96181] = 435159040; // 'state 415'
gotoTable.fill(434110464, 96182, 96193); // 'state 414'
gotoTable.fill(436207616, 96193, 96195); // 'state 416'
gotoTable[96199] = 433061888; // 'state 413'
gotoTable[96201] = 433061888; // 'state 413'
gotoTable.fill(418381824, 96208, 96210); // 'state 399'
gotoTable[96383] = 665845760; // 'state 635'
gotoTable[96385] = 468713472; // 'state 447'
gotoTable[96388] = 468713472; // 'state 447'
gotoTable[96395] = 20971520; // 'state 20'
gotoTable[96411] = 22020096; // 'state 21'
gotoTable[96432] = 203423744; // 'state 194'
gotoTable[96433] = 433061888; // 'state 413'
gotoTable[96434] = 434110464; // 'state 414'
gotoTable[96436] = 24117248; // 'state 23'
gotoTable[96437] = 435159040; // 'state 415'
gotoTable.fill(434110464, 96438, 96449); // 'state 414'
gotoTable.fill(436207616, 96449, 96451); // 'state 416'
gotoTable[96455] = 433061888; // 'state 413'
gotoTable[96457] = 433061888; // 'state 413'
gotoTable.fill(418381824, 96464, 96466); // 'state 399'
gotoTable[96609] = 625999872; // 'state 597'
gotoTable[96665] = 408944640; // 'state 390'
gotoTable[96865] = 625999872; // 'state 597'
gotoTable[97121] = 590348288; // 'state 563'
gotoTable[97163] = 306184192; // 'state 292'
gotoTable[97179] = 307232768; // 'state 293'
gotoTable[97182] = 714080256; // 'state 681'
gotoTable.fill(498073600, 97183, 97186); // 'state 475'
gotoTable[97186] = 499122176; // 'state 476'
gotoTable.fill(493879296, 97187, 97191); // 'state 471'
gotoTable[97191] = 500170752; // 'state 477'
gotoTable.fill(493879296, 97192, 97194); // 'state 471'
gotoTable[97195] = 493879296; // 'state 471'
gotoTable[97200] = 255852544; // 'state 244'
gotoTable[97201] = 433061888; // 'state 413'
gotoTable[97202] = 434110464; // 'state 414'
gotoTable[97204] = 24117248; // 'state 23'
gotoTable[97205] = 435159040; // 'state 415'
gotoTable.fill(434110464, 97206, 97217); // 'state 414'
gotoTable.fill(436207616, 97217, 97219); // 'state 416'
gotoTable[97223] = 433061888; // 'state 413'
gotoTable[97225] = 433061888; // 'state 413'
gotoTable.fill(418381824, 97232, 97234); // 'state 399'
gotoTable[97375] = 441450496; // 'state 421'
gotoTable[97376] = 29360128; // 'state 28'
gotoTable.fill(430964736, 97377, 97386); // 'state 411'
gotoTable[97388] = 430964736; // 'state 411'
gotoTable.fill(430964736, 97393, 97397); // 'state 411'
gotoTable[97397] = 432013312; // 'state 412'
gotoTable[97403] = 432013312; // 'state 412'
gotoTable[97405] = 432013312; // 'state 412'
gotoTable[97414] = 432013312; // 'state 412'
gotoTable[97419] = 20971520; // 'state 20'
gotoTable[97422] = 432013312; // 'state 412'
gotoTable[97430] = 432013312; // 'state 412'
gotoTable[97432] = 432013312; // 'state 412'
gotoTable[97435] = 22020096; // 'state 21'
gotoTable[97450] = 231735296; // 'state 221'
gotoTable.fill(564133888, 97452, 97456); // 'state 538'
gotoTable[97456] = 23068672; // 'state 22'
gotoTable[97457] = 442499072; // 'state 422'
gotoTable[97458] = 434110464; // 'state 414'
gotoTable[97460] = 24117248; // 'state 23'
gotoTable[97461] = 435159040; // 'state 415'
gotoTable.fill(434110464, 97462, 97473); // 'state 414'
gotoTable.fill(436207616, 97473, 97475); // 'state 416'
gotoTable[97477] = 443547648; // 'state 423'
gotoTable[97479] = 433061888; // 'state 413'
gotoTable[97481] = 433061888; // 'state 413'
gotoTable[97482] = 30408704; // 'state 29'
gotoTable.fill(443547648, 97483, 97486); // 'state 423'
gotoTable[97486] = 300941312; // 'state 287'
gotoTable[97487] = 444596224; // 'state 424'
gotoTable.fill(418381824, 97488, 97490); // 'state 399'
gotoTable[97675] = 495976448; // 'state 473'
gotoTable[97691] = 142606336; // 'state 136'
gotoTable[97694] = 776994816; // 'state 741'
gotoTable.fill(498073600, 97695, 97698); // 'state 475'
gotoTable[97698] = 499122176; // 'state 476'
gotoTable.fill(493879296, 97699, 97703); // 'state 471'
gotoTable[97703] = 500170752; // 'state 477'
gotoTable.fill(493879296, 97704, 97706); // 'state 471'
gotoTable[97707] = 493879296; // 'state 471'
gotoTable[97889] = 778043392; // 'state 742'
gotoTable[98243] = 455081984; // 'state 434'
gotoTable[98499] = 455081984; // 'state 434'
gotoTable[98657] = 780140544; // 'state 744'
gotoTable[99011] = 455081984; // 'state 434'
gotoTable[99167] = 782237696; // 'state 746'
gotoTable.fill(430964736, 99169, 99178); // 'state 411'
gotoTable[99180] = 430964736; // 'state 411'
gotoTable.fill(430964736, 99185, 99189); // 'state 411'
gotoTable[99189] = 432013312; // 'state 412'
gotoTable[99195] = 432013312; // 'state 412'
gotoTable[99197] = 432013312; // 'state 412'
gotoTable[99206] = 432013312; // 'state 412'
gotoTable[99211] = 20971520; // 'state 20'
gotoTable[99214] = 432013312; // 'state 412'
gotoTable[99222] = 432013312; // 'state 412'
gotoTable[99224] = 432013312; // 'state 412'
gotoTable[99227] = 22020096; // 'state 21'
gotoTable[99248] = 23068672; // 'state 22'
gotoTable[99249] = 433061888; // 'state 413'
gotoTable[99250] = 434110464; // 'state 414'
gotoTable[99252] = 24117248; // 'state 23'
gotoTable[99253] = 435159040; // 'state 415'
gotoTable.fill(434110464, 99254, 99265); // 'state 414'
gotoTable.fill(436207616, 99265, 99267); // 'state 416'
gotoTable[99271] = 433061888; // 'state 413'
gotoTable[99273] = 433061888; // 'state 413'
gotoTable.fill(418381824, 99280, 99282); // 'state 399'
gotoTable[99423] = 441450496; // 'state 421'
gotoTable[99424] = 413138944; // 'state 394'
gotoTable.fill(430964736, 99425, 99434); // 'state 411'
gotoTable[99436] = 430964736; // 'state 411'
gotoTable.fill(430964736, 99441, 99445); // 'state 411'
gotoTable[99445] = 432013312; // 'state 412'
gotoTable[99451] = 432013312; // 'state 412'
gotoTable[99453] = 432013312; // 'state 412'
gotoTable[99462] = 432013312; // 'state 412'
gotoTable[99467] = 20971520; // 'state 20'
gotoTable[99470] = 432013312; // 'state 412'
gotoTable[99478] = 432013312; // 'state 412'
gotoTable[99480] = 432013312; // 'state 412'
gotoTable[99483] = 22020096; // 'state 21'
gotoTable[99504] = 23068672; // 'state 22'
gotoTable[99505] = 433061888; // 'state 413'
gotoTable[99506] = 434110464; // 'state 414'
gotoTable[99508] = 24117248; // 'state 23'
gotoTable[99509] = 435159040; // 'state 415'
gotoTable.fill(434110464, 99510, 99521); // 'state 414'
gotoTable.fill(436207616, 99521, 99523); // 'state 416'
gotoTable[99527] = 433061888; // 'state 413'
gotoTable[99529] = 433061888; // 'state 413'
gotoTable.fill(418381824, 99536, 99538); // 'state 399'
gotoTable[99679] = 478150656; // 'state 456'
gotoTable.fill(430964736, 99681, 99690); // 'state 411'
gotoTable[99692] = 430964736; // 'state 411'
gotoTable.fill(430964736, 99697, 99701); // 'state 411'
gotoTable[99701] = 432013312; // 'state 412'
gotoTable[99707] = 432013312; // 'state 412'
gotoTable[99709] = 432013312; // 'state 412'
gotoTable[99718] = 432013312; // 'state 412'
gotoTable[99723] = 20971520; // 'state 20'
gotoTable[99726] = 432013312; // 'state 412'
gotoTable[99734] = 432013312; // 'state 412'
gotoTable[99736] = 432013312; // 'state 412'
gotoTable[99739] = 22020096; // 'state 21'
gotoTable[99760] = 23068672; // 'state 22'
gotoTable[99761] = 433061888; // 'state 413'
gotoTable[99762] = 434110464; // 'state 414'
gotoTable[99764] = 24117248; // 'state 23'
gotoTable[99765] = 435159040; // 'state 415'
gotoTable.fill(434110464, 99766, 99777); // 'state 414'
gotoTable.fill(436207616, 99777, 99779); // 'state 416'
gotoTable[99783] = 433061888; // 'state 413'
gotoTable[99785] = 433061888; // 'state 413'
gotoTable.fill(418381824, 99792, 99794); // 'state 399'
gotoTable[99937] = 700448768; // 'state 668'
gotoTable[100235] = 20971520; // 'state 20'
gotoTable[100251] = 22020096; // 'state 21'
gotoTable[100272] = 105906176; // 'state 101'
gotoTable[100273] = 433061888; // 'state 413'
gotoTable[100274] = 434110464; // 'state 414'
gotoTable[100276] = 24117248; // 'state 23'
gotoTable[100277] = 435159040; // 'state 415'
gotoTable.fill(434110464, 100278, 100289); // 'state 414'
gotoTable.fill(436207616, 100289, 100291); // 'state 416'
gotoTable[100292] = 101711872; // 'state 97'
gotoTable[100293] = 472907776; // 'state 451'
gotoTable[100295] = 433061888; // 'state 413'
gotoTable[100297] = 433061888; // 'state 413'
gotoTable.fill(418381824, 100304, 100306); // 'state 399'
gotoTable[100488] = 313524224; // 'state 299'
gotoTable[100507] = 314572800; // 'state 300'
gotoTable[100529] = 418381824; // 'state 399'
gotoTable[100530] = 99614720; // 'state 95'
gotoTable[100532] = 418381824; // 'state 399'
gotoTable[100551] = 418381824; // 'state 399'
gotoTable[100553] = 418381824; // 'state 399'
gotoTable.fill(418381824, 100560, 100562); // 'state 399'
gotoTable[100761] = 783286272; // 'state 747'
gotoTable[100959] = 478150656; // 'state 456'
gotoTable.fill(430964736, 100961, 100970); // 'state 411'
gotoTable[100972] = 430964736; // 'state 411'
gotoTable.fill(430964736, 100977, 100981); // 'state 411'
gotoTable[100981] = 432013312; // 'state 412'
gotoTable[100987] = 432013312; // 'state 412'
gotoTable[100989] = 432013312; // 'state 412'
gotoTable[100998] = 432013312; // 'state 412'
gotoTable[101003] = 20971520; // 'state 20'
gotoTable[101006] = 432013312; // 'state 412'
gotoTable[101014] = 432013312; // 'state 412'
gotoTable[101016] = 432013312; // 'state 412'
gotoTable[101019] = 22020096; // 'state 21'
gotoTable[101040] = 23068672; // 'state 22'
gotoTable[101041] = 433061888; // 'state 413'
gotoTable[101042] = 434110464; // 'state 414'
gotoTable[101044] = 24117248; // 'state 23'
gotoTable[101045] = 435159040; // 'state 415'
gotoTable.fill(434110464, 101046, 101057); // 'state 414'
gotoTable.fill(436207616, 101057, 101059); // 'state 416'
gotoTable[101063] = 433061888; // 'state 413'
gotoTable[101065] = 433061888; // 'state 413'
gotoTable.fill(418381824, 101072, 101074); // 'state 399'
gotoTable[101247] = 168820736; // 'state 161'
gotoTable[101249] = 468713472; // 'state 447'
gotoTable[101252] = 468713472; // 'state 447'
gotoTable[101257] = 169869312; // 'state 162'
gotoTable[101259] = 20971520; // 'state 20'
gotoTable[101261] = 170917888; // 'state 163'
gotoTable[101275] = 22020096; // 'state 21'
gotoTable[101296] = 92274688; // 'state 88'
gotoTable[101297] = 433061888; // 'state 413'
gotoTable[101298] = 434110464; // 'state 414'
gotoTable[101300] = 24117248; // 'state 23'
gotoTable[101301] = 435159040; // 'state 415'
gotoTable.fill(434110464, 101302, 101313); // 'state 414'
gotoTable.fill(436207616, 101313, 101315); // 'state 416'
gotoTable[101316] = 93323264; // 'state 89'
gotoTable[101317] = 472907776; // 'state 451'
gotoTable[101319] = 433061888; // 'state 413'
gotoTable[101321] = 433061888; // 'state 413'
gotoTable.fill(418381824, 101328, 101330); // 'state 399'
gotoTable[101529] = 784334848; // 'state 748'
gotoTable[101759] = 262144000; // 'state 250'
gotoTable[101761] = 468713472; // 'state 447'
gotoTable[101764] = 468713472; // 'state 447'
gotoTable[101771] = 20971520; // 'state 20'
gotoTable[101787] = 22020096; // 'state 21'
gotoTable[101808] = 111149056; // 'state 106'
gotoTable[101809] = 433061888; // 'state 413'
gotoTable[101810] = 434110464; // 'state 414'
gotoTable[101812] = 24117248; // 'state 23'
gotoTable[101813] = 435159040; // 'state 415'
gotoTable.fill(434110464, 101814, 101825); // 'state 414'
gotoTable.fill(436207616, 101825, 101827); // 'state 416'
gotoTable[101831] = 433061888; // 'state 413'
gotoTable[101833] = 433061888; // 'state 413'
gotoTable.fill(418381824, 101840, 101842); // 'state 399'
gotoTable[102027] = 70254592; // 'state 67'
gotoTable[102043] = 71303168; // 'state 68'
gotoTable[102068] = 70254592; // 'state 67'

const wordFallbackTable = new Uint8Array(224);
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
wordFallbackTable[82] = 1; // accessibility_modifier

const nextToken = nextTokenInitial;

/**
 * Auto-growing stack and CST arenas starting at 16,384 words (64 KiB each),
 * which glibc malloc places in the low 32-bit brk heap ([reg*4 + disp32]).
 *
 * Each 32-bit stack entry packs:
 * - low 20 bits: tree pointer (tp) of the shifted/reduced CST node (up to 1,048,575 words)
 * - high 12 bits: parser state
 *
 * Each CST node in tree occupies 3 uint32 words:
 * - word 0 (tp + 0): name | (numChildren << 8)
 * - word 1 (tp + 1): end | ((end - start) << 22) (leaf) or firstChild (internal)
 * - word 2 (tp + 2): nextSibling
 */
const arena = {
  stack: new Uint32Array(16384),
  tree: new Uint32Array(16384),
};

class TreeCursor {
  #stream;
  #tree;
  #rootPointer;
  #pointer;
  #parentStack = new Uint32Array(256);
  #depth = 0;

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

  get start() {
    const t = this.#tree;
    let p = this.#pointer;
    while (t[p] >>> 8 > 0) {
      p = t[p + 1] & 0xfffff;
    }
    const span = t[p + 1];
    const end = span & 0x3fffff;
    return end - (span >>> 22);
  }

  get end() {
    const t = this.#tree;
    let p = this.#pointer;
    while (t[p] >>> 8 > 0) {
      p -= 3;
    }
    return t[p + 1] & 0x3fffff;
  }

  get value() {
    return this.#stream.subarray(this.start, this.end);
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
    if (d >= stack.length) {
      const next = new Uint32Array(stack.length << 1);
      next.set(stack);
      stack = this.#parentStack = next;
    }
    stack[d] = p | ((n - 1) << 20);
    this.#depth = d;
    this.#pointer = t[p + 1] & 0xfffff;
    return true;
  }

  gotoNextSibling() {
    const d = this.#depth;
    const stack = this.#parentStack;
    const entry = stack[d];
    if (entry < 0x100000) {
      return false;
    }
    stack[d] = entry - 0x100000;
    this.#pointer = this.#tree[this.#pointer + 2];
    return true;
  }

  gotoParent() {
    const d = this.#depth;
    if (d === 0) {
      return false;
    }
    this.#depth = d - 1;
    this.#pointer = this.#parentStack[d] & 0xfffff;
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

  get start() {
    const t = this.#tree;
    let p = this.#pointer;
    while (t[p] >>> 8 > 0) {
      p = t[p + 1] & 0xfffff;
    }
    const span = t[p + 1];
    const end = span & 0x3fffff;
    return end - (span >>> 22);
  }

  get end() {
    const t = this.#tree;
    let p = this.#pointer;
    while (t[p] >>> 8 > 0) {
      p -= 3;
    }
    return t[p + 1] & 0x3fffff;
  }

  get value() {
    return this.#stream.subarray(this.start, this.end);
  }

  get items() {
    const t = this.#tree;
    const pointer = this.#pointer;
    const nChildren = t[pointer] >>> 8;
    if (nChildren === 0) {
      return undefined;
    }

    const stream = this.#stream;
    const children = new Array(nChildren);
    let child = t[pointer + 1] & 0xfffff;
    children[0] = new CstNode(stream, t, child);

    for (let i = 1; i < nChildren; i++) {
      child = t[child + 2];
      children[i] = new CstNode(stream, t, child);
    }

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

  let lookaheadSpan = firstRes.end | ((firstRes.end - firstRes.start) << 22);

  const stack = arena.stack;
  const tree = arena.tree;
  const actions = actionsTable;
  const goto = gotoTable;
  if (stream.length >>> 1 <= tree.length) {
    let top = 0; // starting state
    stack[0] = top;
    let sp = 0;
    // let the tree stack start from offset 3
    // offset 0 means an error occurred and should be used by the parser
    let tp = 3;

    while (true) {
      const currentState = top >>> 20;

      const actionLookup = actions[(currentState << 8) + lookahead];
      if ((actionLookup & 1) === 0) {
        // shift
        if (actionLookup === 0xfffe) {
          return new CstNode(stream, tree, tp - 3);
        }

        tree[tp] = lookahead; // name (and nChildren = 0)
        tree[tp + 1] = lookaheadSpan;
        tree[(top & 0xfffff) + 2] = tp; // write the current address to the previous item as next sibling

        sp += 1;
        top = tp | (actionLookup << 19);
        stack[sp] = top;

        const res = nextToken(stream, lookaheadSpan & 0x3fffff);
        lookahead = res.state;

        lookaheadSpan = res.end | ((res.end - res.start) << 22);
      } else {
        // reduce
        if (actionLookup === 0xffff) {
          if (
            wordFallbackTable[lookahead] !== 0 &&
            actions[(currentState << 8) + 89] !== 0xffff
          ) {
            lookahead = 89;
            continue;
          }
          const errStart =
            (lookaheadSpan & 0x3fffff) === 0x3fffff
              ? -1
              : (lookaheadSpan & 0x3fffff) - (lookaheadSpan >>> 22);
          const context = input.toString().substr(errStart, 10);
          throw new Error(
            `Unexpected lookahead ${parserSymbols[lookahead]} at '${context}'`
          );
        }
        sp -= actionLookup >>> 9;
        const rtop = stack[sp] | 0;
        const word0 = actionLookup >>> 1;
        tree[tp] = word0; // name and number of children
        const nextState = goto[((rtop >>> 20) << 8) + (word0 & 0xff)];
        tree[(rtop & 0xfffff) + 2] = tp; // next sibling

        sp += 1;
        tree[tp + 1] = stack[sp]; // first child
        top = tp | nextState;
        stack[sp] = top;
      }

      tp += 3;
      if (tp >= tree.length - 2) {
        break;
      }
    }
  }

  let len = tree.length << 1;
  while (len < stream.length >>> 1) {
    len <<= 1;
  }
  const nextStack = new Uint32Array(len);
  const nextTree = new Uint32Array(len);
  delete arena.stack;
  delete arena.tree;
  arena.stack = nextStack;
  arena.tree = nextTree;
  Object.create(arena);
  return parse(input);
}

export { parse, CstNode, TreeCursor };
