/* Reverse Polish Notation calculator. */

%{
  #include "definitions.h"
  #define YYSTYPE char const *
  int yylex(YYSTYPE *lval, struct lexerinputstate *s);
%}

%param   {struct lexerinputstate *s}

%define lr.type lalr
%define api.pure full

%token WS
%token TRUE
%token FALSE
%token TNULL
%token CURLY_OPEN
%token CURLY_CLOSE
%token COMMA
%token COLON
%token STRING
%token BRACKET_OPEN
%token BRACKET_CLOSE
%token NUMBER

%% /* Grammar rules and actions follow. */

Json:
  Element
;

Element:
    WS Value WS
  | WS Value
  | Value WS
  | Value
;

Value:
    Object
  | Array
  | STRING
  | NUMBER
  | TRUE
  | FALSE
  | TNULL
;

Object:
    CURLY_OPEN WS CURLY_CLOSE
  | CURLY_OPEN Members CURLY_CLOSE
  | CURLY_OPEN CURLY_CLOSE
;

Members:
    Member
  | Members COMMA Member
;

Member:
    WS STRING WS COLON Element
  | WS STRING COLON Element
  | STRING WS COLON Element
  | STRING COLON Element
;

Array:
    BRACKET_OPEN WS BRACKET_CLOSE
  | BRACKET_OPEN Elements BRACKET_CLOSE
  | BRACKET_OPEN BRACKET_CLOSE
;

Elements:
    Element
  | Elements COMMA Element
;
