import { next as nextTokenInitial } from "./lexer-initial.js";

/*
      Json := Element;
Element := Value;
Element := Value Spaces;
Element := Spaces Value;
Element := Spaces Value Spaces;
Value := Object;
Value := Array;
Value := String;
Value := Number;
Value := TRUE;
Value := FALSE;
Value := NULL;
Object := CURLY_OPEN CURLY_CLOSE;
Object := CURLY_OPEN Spaces CURLY_CLOSE;
Object := CURLY_OPEN Members CURLY_CLOSE;
Members := Member;
Members := Members COMMA Member;
Member := String COLON Element;
Member := String Spaces COLON Element;
Member := Spaces String COLON Element;
Member := Spaces String Spaces COLON Element;
String := STRING;
Array := BRACKET_OPEN BRACKET_CLOSE;
Array := BRACKET_OPEN Spaces BRACKET_CLOSE;
Array := BRACKET_OPEN Elements BRACKET_CLOSE;
Elements := Element;
Elements := Elements COMMA Element;
Number := Integer;
Number := Integer Exponent;
Number := Integer Fraction;
Number := Integer Fraction Exponent;
Integer := ZERO;
Integer := MINUS ZERO;
Integer := ONE_NINE Digits;
Integer := MINUS ONE_NINE Digits;
Digits := Digits Digit;
Digits := Digit;
Digit := ZERO;
Digit := ONE_NINE;
Fraction := DOT Digits;
Exponent := UPPER_E Digits;
Exponent := UPPER_E Sign Digits;
Exponent := LOWER_E Digits;
Exponent := LOWER_E Sign Digits;
Sign := PLUS;
Sign := MINUS;
Spaces := Spaces WS;
Spaces := WS;
      */

const states = [
  // 'state 0'
  new Set([
    {
      name: "S",
      tokens: ["Json"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Json",
      tokens: ["Element"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "Spaces"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "Spaces"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "Spaces"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "Spaces"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 3,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 4,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 5,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 6,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 11,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 10,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 19,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 3,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 4,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 5,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 6,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 11,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 10,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 19,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
  ]),

  // 'state 1'
  new Set([
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 1,
      lookahead: 3,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 1,
      lookahead: 4,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 1,
      lookahead: 5,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 1,
      lookahead: 6,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 1,
      lookahead: 11,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 1,
      lookahead: 10,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 1,
      lookahead: 19,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 1,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
  ]),

  // 'state 2'
  new Set([
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
  ]),

  // 'state 3'
  new Set([
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
  ]),

  // 'state 4'
  new Set([
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
  ]),

  // 'state 5'
  new Set([
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 3,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 4,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 5,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 6,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 11,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 10,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 19,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 3,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 4,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 5,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 6,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 11,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 10,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 19,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Members",
      tokens: ["Member"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Members",
      tokens: ["Member"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Members",
      tokens: ["Members", "COMMA", "Member"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Members",
      tokens: ["Members", "COMMA", "Member"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["String", "COLON", "Element"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["String", "COLON", "Element"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["String", "Spaces", "COLON", "Element"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["String", "Spaces", "COLON", "Element"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["Spaces", "String", "COLON", "Element"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["Spaces", "String", "COLON", "Element"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["Spaces", "String", "Spaces", "COLON", "Element"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["Spaces", "String", "Spaces", "COLON", "Element"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
  ]),

  // 'state 6'
  new Set([
    {
      name: "String",
      tokens: ["STRING"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 1,
      lookahead: 9,
      semanticAction: undefined,
    },
  ]),

  // 'state 7'
  new Set([
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 3,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 4,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 5,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 6,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 11,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 10,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 19,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 3,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 4,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 5,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 6,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 11,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 10,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 19,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Elements",
      tokens: ["Element"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Elements",
      tokens: ["Element"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Elements",
      tokens: ["Elements", "COMMA", "Element"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Elements",
      tokens: ["Elements", "COMMA", "Element"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "Spaces"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "Spaces"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "Spaces"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "Spaces"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
  ]),

  // 'state 8'
  new Set([
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 15,
      semanticAction: undefined,
    },
  ]),

  // 'state 9'
  new Set([
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 1,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 1,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 1,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 10'
  new Set([
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 1,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 1,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 1,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 1,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 1,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 1,
      lookahead: 15,
      semanticAction: undefined,
    },
  ]),

  // 'state 11'
  new Set([
    {
      name: "S",
      tokens: ["Json"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
  ]),

  // 'state 12'
  new Set([
    {
      name: "Json",
      tokens: ["Element"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
  ]),

  // 'state 13'
  new Set([
    {
      name: "Element",
      tokens: ["Value"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "Spaces"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "Spaces"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "Spaces"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "Spaces"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 3,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 4,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 5,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 6,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 11,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 10,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 19,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 3,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 4,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 5,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 6,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 11,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 10,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 19,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
  ]),

  // 'state 14'
  new Set([
    {
      name: "Value",
      tokens: ["Object"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
  ]),

  // 'state 15'
  new Set([
    {
      name: "Value",
      tokens: ["String"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
  ]),

  // 'state 16'
  new Set([
    {
      name: "Value",
      tokens: ["Array"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
  ]),

  // 'state 17'
  new Set([
    {
      name: "Value",
      tokens: ["Number"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
  ]),

  // 'state 18'
  new Set([
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Digits"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Digits"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Digits"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Digits"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Digits"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Digits"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Digits"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Digits"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Digits"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Digits"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
  ]),

  // 'state 19'
  new Set([
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 3,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 4,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 5,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 6,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 11,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 10,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 19,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
  ]),

  // 'state 20'
  new Set([
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 1,
      lookahead: 3,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 1,
      lookahead: 4,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 1,
      lookahead: 5,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 1,
      lookahead: 6,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 1,
      lookahead: 11,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 1,
      lookahead: 10,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 1,
      lookahead: 19,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 1,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
  ]),

  // 'state 21'
  new Set([
    {
      name: "Element",
      tokens: ["Value", "Spaces"],
      marker: 2,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "Spaces"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "Spaces"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "Spaces"],
      marker: 2,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 3,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 4,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 5,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 6,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 11,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 10,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 19,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
  ]),

  // 'state 22'
  new Set([
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 2,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 2,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 2,
      lookahead: 3,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 2,
      lookahead: 4,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 2,
      lookahead: 5,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 2,
      lookahead: 6,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 2,
      lookahead: 11,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 2,
      lookahead: 10,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 2,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 2,
      lookahead: 19,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 2,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 2,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 2,
      lookahead: 2,
      semanticAction: undefined,
    },
  ]),

  // 'state 23'
  new Set([
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
  ]),

  // 'state 24'
  new Set([
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
  ]),

  // 'state 25'
  new Set([
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
  ]),

  // 'state 26'
  new Set([
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 3,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 4,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 5,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 6,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 11,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 10,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 19,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 3,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 4,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 5,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 6,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 11,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 10,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 19,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Members",
      tokens: ["Member"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Members",
      tokens: ["Member"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Members",
      tokens: ["Members", "COMMA", "Member"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Members",
      tokens: ["Members", "COMMA", "Member"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["String", "COLON", "Element"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["String", "COLON", "Element"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["String", "Spaces", "COLON", "Element"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["String", "Spaces", "COLON", "Element"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["Spaces", "String", "COLON", "Element"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["Spaces", "String", "COLON", "Element"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["Spaces", "String", "Spaces", "COLON", "Element"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["Spaces", "String", "Spaces", "COLON", "Element"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
  ]),

  // 'state 27'
  new Set([
    {
      name: "String",
      tokens: ["STRING"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 1,
      lookahead: 9,
      semanticAction: undefined,
    },
  ]),

  // 'state 28'
  new Set([
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 3,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 4,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 5,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 6,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 11,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 10,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 19,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 3,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 4,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 5,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 6,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 11,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 10,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 19,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Elements",
      tokens: ["Element"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Elements",
      tokens: ["Element"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Elements",
      tokens: ["Elements", "COMMA", "Element"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Elements",
      tokens: ["Elements", "COMMA", "Element"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "Spaces"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "Spaces"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "Spaces"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "Spaces"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
  ]),

  // 'state 29'
  new Set([
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 15,
      semanticAction: undefined,
    },
  ]),

  // 'state 30'
  new Set([
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 1,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 1,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 1,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 31'
  new Set([
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 1,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 1,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 1,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 1,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 1,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 1,
      lookahead: 15,
      semanticAction: undefined,
    },
  ]),

  // 'state 32'
  new Set([
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 2,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 2,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 2,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 2,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 3,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 4,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 5,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 6,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 11,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 10,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 19,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 3,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 4,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 5,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 6,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 11,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 10,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 19,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
  ]),

  // 'state 33'
  new Set([
    {
      name: "Value",
      tokens: ["Object"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
  ]),

  // 'state 34'
  new Set([
    {
      name: "Value",
      tokens: ["String"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
  ]),

  // 'state 35'
  new Set([
    {
      name: "Value",
      tokens: ["Array"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
  ]),

  // 'state 36'
  new Set([
    {
      name: "Value",
      tokens: ["Number"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
  ]),

  // 'state 37'
  new Set([
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Digits"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Digits"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Digits"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Digits"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Digits"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Digits"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Digits"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Digits"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Digits"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Digits"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
  ]),

  // 'state 38'
  new Set([
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 2,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 2,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 2,
      lookahead: 2,
      semanticAction: undefined,
    },
  ]),

  // 'state 39'
  new Set([
    {
      name: "String",
      tokens: ["STRING"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 1,
      lookahead: 9,
      semanticAction: undefined,
    },
  ]),

  // 'state 40'
  new Set([
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 2,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 2,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 2,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Members",
      tokens: ["Members", "COMMA", "Member"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Members",
      tokens: ["Members", "COMMA", "Member"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
  ]),

  // 'state 41'
  new Set([
    {
      name: "Members",
      tokens: ["Member"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Members",
      tokens: ["Member"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
  ]),

  // 'state 42'
  new Set([
    {
      name: "Member",
      tokens: ["String", "COLON", "Element"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["String", "COLON", "Element"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["String", "Spaces", "COLON", "Element"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["String", "Spaces", "COLON", "Element"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 3,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 4,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 5,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 6,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 11,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 10,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 19,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 3,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 4,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 5,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 6,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 11,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 10,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 19,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
  ]),

  // 'state 43'
  new Set([
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 2,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 2,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 2,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 3,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 4,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 5,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 6,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 11,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 10,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 19,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["Spaces", "String", "COLON", "Element"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["Spaces", "String", "COLON", "Element"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["Spaces", "String", "Spaces", "COLON", "Element"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["Spaces", "String", "Spaces", "COLON", "Element"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
  ]),

  // 'state 44'
  new Set([
    {
      name: "String",
      tokens: ["STRING"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 1,
      lookahead: 9,
      semanticAction: undefined,
    },
  ]),

  // 'state 45'
  new Set([
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 2,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 2,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 2,
      lookahead: 2,
      semanticAction: undefined,
    },
  ]),

  // 'state 46'
  new Set([
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 15,
      semanticAction: undefined,
    },
  ]),

  // 'state 47'
  new Set([
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 1,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 1,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 1,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 48'
  new Set([
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 1,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 1,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 1,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 1,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 1,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 1,
      lookahead: 15,
      semanticAction: undefined,
    },
  ]),

  // 'state 49'
  new Set([
    {
      name: "Elements",
      tokens: ["Element"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Elements",
      tokens: ["Element"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
  ]),

  // 'state 50'
  new Set([
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 2,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 2,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 2,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Elements",
      tokens: ["Elements", "COMMA", "Element"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Elements",
      tokens: ["Elements", "COMMA", "Element"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
  ]),

  // 'state 51'
  new Set([
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Digits"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Digits"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Digits"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Digits"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Digits"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Digits"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Digits"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Digits"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Digits"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Digits"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
  ]),

  // 'state 52'
  new Set([
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 2,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 2,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 2,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 3,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 4,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 5,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 6,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 11,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 10,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 19,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
  ]),

  // 'state 53'
  new Set([
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 1,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 1,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 54'
  new Set([
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Digits"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Digits"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Digits"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Digits"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Digits"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Sign",
      tokens: ["PLUS"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Sign",
      tokens: ["PLUS"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Sign",
      tokens: ["MINUS"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Sign",
      tokens: ["MINUS"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 55'
  new Set([
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Digits"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Digits"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Digits"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Digits"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Digits"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Sign",
      tokens: ["PLUS"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Sign",
      tokens: ["PLUS"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Sign",
      tokens: ["MINUS"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Sign",
      tokens: ["MINUS"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 56'
  new Set([
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 2,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 2,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 2,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 2,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 2,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 2,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Digits"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Digits"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Digits"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Digits"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Digits"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Digits"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Digits"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Digits"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Digits"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Digits"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
  ]),

  // 'state 57'
  new Set([
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 2,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 2,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 2,
      lookahead: 2,
      semanticAction: undefined,
    },
  ]),

  // 'state 58'
  new Set([
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 2,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 2,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 2,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 2,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 2,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 2,
      lookahead: 15,
      semanticAction: undefined,
    },
  ]),

  // 'state 59'
  new Set([
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 2,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 2,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 2,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 2,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 2,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 2,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 60'
  new Set([
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 61'
  new Set([
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 62'
  new Set([
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 2,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 2,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 2,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 2,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 2,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 2,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 63'
  new Set([
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 64'
  new Set([
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 2,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 2,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 2,
      lookahead: 3,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 2,
      lookahead: 4,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 2,
      lookahead: 5,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 2,
      lookahead: 6,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 2,
      lookahead: 11,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 2,
      lookahead: 10,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 2,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 2,
      lookahead: 19,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 2,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 2,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 2,
      lookahead: 2,
      semanticAction: undefined,
    },
  ]),

  // 'state 65'
  new Set([
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 3,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 3,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 3,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 3,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 3,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 4,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 5,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 6,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 11,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 10,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 19,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
  ]),

  // 'state 66'
  new Set([
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 2,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 2,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 2,
      lookahead: 2,
      semanticAction: undefined,
    },
  ]),

  // 'state 67'
  new Set([
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 2,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 2,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 2,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Members",
      tokens: ["Members", "COMMA", "Member"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Members",
      tokens: ["Members", "COMMA", "Member"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
  ]),

  // 'state 68'
  new Set([
    {
      name: "Members",
      tokens: ["Member"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Members",
      tokens: ["Member"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
  ]),

  // 'state 69'
  new Set([
    {
      name: "Member",
      tokens: ["String", "COLON", "Element"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["String", "COLON", "Element"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["String", "Spaces", "COLON", "Element"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["String", "Spaces", "COLON", "Element"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 3,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 4,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 5,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 6,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 11,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 10,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 19,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 3,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 4,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 5,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 6,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 11,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 10,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 19,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
  ]),

  // 'state 70'
  new Set([
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 2,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 2,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 2,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 3,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 4,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 5,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 6,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 11,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 10,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 19,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["Spaces", "String", "COLON", "Element"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["Spaces", "String", "COLON", "Element"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["Spaces", "String", "Spaces", "COLON", "Element"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["Spaces", "String", "Spaces", "COLON", "Element"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
  ]),

  // 'state 71'
  new Set([
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 2,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 2,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 2,
      lookahead: 2,
      semanticAction: undefined,
    },
  ]),

  // 'state 72'
  new Set([
    {
      name: "Elements",
      tokens: ["Element"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Elements",
      tokens: ["Element"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
  ]),

  // 'state 73'
  new Set([
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 2,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 2,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 2,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Elements",
      tokens: ["Elements", "COMMA", "Element"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Elements",
      tokens: ["Elements", "COMMA", "Element"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
  ]),

  // 'state 74'
  new Set([
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 2,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 2,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 2,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 3,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 4,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 5,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 6,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 11,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 10,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 19,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
  ]),

  // 'state 75'
  new Set([
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 1,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 1,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 76'
  new Set([
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Digits"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Digits"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Digits"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Digits"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Digits"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Sign",
      tokens: ["PLUS"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Sign",
      tokens: ["PLUS"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Sign",
      tokens: ["MINUS"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Sign",
      tokens: ["MINUS"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 77'
  new Set([
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Digits"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Digits"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Digits"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Digits"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Digits"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Sign",
      tokens: ["PLUS"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Sign",
      tokens: ["PLUS"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Sign",
      tokens: ["MINUS"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Sign",
      tokens: ["MINUS"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 78'
  new Set([
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 2,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 2,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 2,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 2,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 2,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 2,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Digits"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Digits"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Digits"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Digits"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Digits"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Digits"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Digits"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Digits"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Digits"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Digits"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
  ]),

  // 'state 79'
  new Set([
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 2,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 2,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 2,
      lookahead: 2,
      semanticAction: undefined,
    },
  ]),

  // 'state 80'
  new Set([
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 2,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 2,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 2,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 2,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 2,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 2,
      lookahead: 15,
      semanticAction: undefined,
    },
  ]),

  // 'state 81'
  new Set([
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 2,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 2,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 2,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 2,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 2,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 2,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 82'
  new Set([
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 83'
  new Set([
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 84'
  new Set([
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 2,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 2,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 2,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 2,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 2,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 2,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 85'
  new Set([
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 86'
  new Set([
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 3,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 3,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 3,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 3,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 3,
      lookahead: 2,
      semanticAction: undefined,
    },
  ]),

  // 'state 87'
  new Set([
    {
      name: "Member",
      tokens: ["Spaces", "String", "COLON", "Element"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["Spaces", "String", "COLON", "Element"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["Spaces", "String", "Spaces", "COLON", "Element"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["Spaces", "String", "Spaces", "COLON", "Element"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 3,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 4,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 5,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 6,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 11,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 10,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 19,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 3,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 4,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 5,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 6,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 11,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 10,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 19,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
  ]),

  // 'state 88'
  new Set([
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 3,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 3,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 3,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 3,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 3,
      lookahead: 2,
      semanticAction: undefined,
    },
  ]),

  // 'state 89'
  new Set([
    {
      name: "Members",
      tokens: ["Members", "COMMA", "Member"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Members",
      tokens: ["Members", "COMMA", "Member"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["String", "COLON", "Element"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["String", "COLON", "Element"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["String", "Spaces", "COLON", "Element"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["String", "Spaces", "COLON", "Element"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["Spaces", "String", "COLON", "Element"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["Spaces", "String", "COLON", "Element"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["Spaces", "String", "Spaces", "COLON", "Element"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["Spaces", "String", "Spaces", "COLON", "Element"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 3,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 4,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 5,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 6,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 11,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 10,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 19,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 3,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 4,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 5,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 6,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 11,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 10,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 19,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
  ]),

  // 'state 90'
  new Set([
    {
      name: "Member",
      tokens: ["String", "COLON", "Element"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["String", "COLON", "Element"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "Spaces"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "Spaces"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "Spaces"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "Spaces"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 3,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 4,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 5,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 6,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 11,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 10,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 19,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 3,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 4,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 5,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 6,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 11,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 10,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 19,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
  ]),

  // 'state 91'
  new Set([
    {
      name: "Member",
      tokens: ["String", "Spaces", "COLON", "Element"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["String", "Spaces", "COLON", "Element"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 3,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 4,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 5,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 6,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 11,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 10,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 19,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
  ]),

  // 'state 92'
  new Set([
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 3,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 3,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 3,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 3,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 3,
      lookahead: 2,
      semanticAction: undefined,
    },
  ]),

  // 'state 93'
  new Set([
    {
      name: "Elements",
      tokens: ["Elements", "COMMA", "Element"],
      marker: 2,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Elements",
      tokens: ["Elements", "COMMA", "Element"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "Spaces"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "Spaces"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "Spaces"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "Spaces"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 3,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 4,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 5,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 6,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 11,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 10,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 19,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 3,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 4,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 5,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 6,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 11,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 10,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 19,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
  ]),

  // 'state 94'
  new Set([
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 3,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 3,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 3,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 3,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 3,
      lookahead: 2,
      semanticAction: undefined,
    },
  ]),

  // 'state 95'
  new Set([
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 1,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 1,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 96'
  new Set([
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Digits"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Digits"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Digits"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Digits"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Digits"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Sign",
      tokens: ["PLUS"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Sign",
      tokens: ["PLUS"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Sign",
      tokens: ["MINUS"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Sign",
      tokens: ["MINUS"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 97'
  new Set([
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Digits"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Digits"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Digits"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Digits"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Digits"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Sign",
      tokens: ["PLUS"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Sign",
      tokens: ["PLUS"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Sign",
      tokens: ["MINUS"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Sign",
      tokens: ["MINUS"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 98'
  new Set([
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 2,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 2,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 2,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 2,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 2,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 2,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Digits"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Digits"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Digits"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Digits"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Digits"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Digits"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Digits"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Digits"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Digits"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Digits"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
  ]),

  // 'state 99'
  new Set([
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 2,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 2,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 2,
      lookahead: 2,
      semanticAction: undefined,
    },
  ]),

  // 'state 100'
  new Set([
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 2,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 2,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 2,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 2,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 2,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 2,
      lookahead: 15,
      semanticAction: undefined,
    },
  ]),

  // 'state 101'
  new Set([
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 2,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 2,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 2,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 2,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 2,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 2,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 102'
  new Set([
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 103'
  new Set([
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 104'
  new Set([
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 2,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 2,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 2,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 2,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 2,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 2,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 105'
  new Set([
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 106'
  new Set([
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 107'
  new Set([
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 108'
  new Set([
    {
      name: "Sign",
      tokens: ["PLUS"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Sign",
      tokens: ["PLUS"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 109'
  new Set([
    {
      name: "Sign",
      tokens: ["MINUS"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Sign",
      tokens: ["MINUS"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 110'
  new Set([
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Digits"],
      marker: 2,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Digits"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Digits"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Digits"],
      marker: 2,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Digits"],
      marker: 2,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 111'
  new Set([
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 112'
  new Set([
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 2,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 2,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 2,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 113'
  new Set([
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 114'
  new Set([
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 115'
  new Set([
    {
      name: "Sign",
      tokens: ["PLUS"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Sign",
      tokens: ["PLUS"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 116'
  new Set([
    {
      name: "Sign",
      tokens: ["MINUS"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Sign",
      tokens: ["MINUS"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 117'
  new Set([
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Digits"],
      marker: 2,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Digits"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Digits"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Digits"],
      marker: 2,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Digits"],
      marker: 2,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 118'
  new Set([
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 119'
  new Set([
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 2,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 2,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 2,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 120'
  new Set([
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 3,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 3,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 3,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 3,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 3,
      lookahead: 2,
      semanticAction: undefined,
    },
  ]),

  // 'state 121'
  new Set([
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 122'
  new Set([
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 123'
  new Set([
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 2,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 2,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 2,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 2,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 2,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 124'
  new Set([
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 125'
  new Set([
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 126'
  new Set([
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 127'
  new Set([
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 3,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 3,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 3,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 3,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 3,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 3,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 3,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 3,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 128'
  new Set([
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 129'
  new Set([
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 130'
  new Set([
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 131'
  new Set([
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 132'
  new Set([
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 3,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 3,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 3,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 3,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 3,
      lookahead: 2,
      semanticAction: undefined,
    },
  ]),

  // 'state 133'
  new Set([
    {
      name: "Member",
      tokens: ["Spaces", "String", "COLON", "Element"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["Spaces", "String", "COLON", "Element"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["Spaces", "String", "Spaces", "COLON", "Element"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["Spaces", "String", "Spaces", "COLON", "Element"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 3,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 4,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 5,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 6,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 11,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 10,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 19,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 3,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 4,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 5,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 6,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 11,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 10,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 19,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
  ]),

  // 'state 134'
  new Set([
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 3,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 3,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 3,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 3,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 3,
      lookahead: 2,
      semanticAction: undefined,
    },
  ]),

  // 'state 135'
  new Set([
    {
      name: "Members",
      tokens: ["Members", "COMMA", "Member"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Members",
      tokens: ["Members", "COMMA", "Member"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["String", "COLON", "Element"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["String", "COLON", "Element"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["String", "Spaces", "COLON", "Element"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["String", "Spaces", "COLON", "Element"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["Spaces", "String", "COLON", "Element"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["Spaces", "String", "COLON", "Element"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["Spaces", "String", "Spaces", "COLON", "Element"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["Spaces", "String", "Spaces", "COLON", "Element"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 3,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 4,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 5,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 6,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 11,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 10,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 19,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 3,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 4,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 5,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 6,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 11,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 10,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 19,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
  ]),

  // 'state 136'
  new Set([
    {
      name: "Member",
      tokens: ["String", "COLON", "Element"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["String", "COLON", "Element"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "Spaces"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "Spaces"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "Spaces"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "Spaces"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 3,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 4,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 5,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 6,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 11,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 10,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 19,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 3,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 4,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 5,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 6,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 11,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 10,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 19,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
  ]),

  // 'state 137'
  new Set([
    {
      name: "Member",
      tokens: ["String", "Spaces", "COLON", "Element"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["String", "Spaces", "COLON", "Element"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 3,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 4,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 5,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 6,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 11,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 10,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 19,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
  ]),

  // 'state 138'
  new Set([
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 3,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 3,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 3,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 3,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 3,
      lookahead: 2,
      semanticAction: undefined,
    },
  ]),

  // 'state 139'
  new Set([
    {
      name: "Elements",
      tokens: ["Elements", "COMMA", "Element"],
      marker: 2,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Elements",
      tokens: ["Elements", "COMMA", "Element"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "Spaces"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "Spaces"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "Spaces"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "Spaces"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 3,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 4,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 5,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 6,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 11,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 10,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 19,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 3,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 4,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 5,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 6,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 11,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 10,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 19,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
  ]),

  // 'state 140'
  new Set([
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 3,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 3,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 3,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 3,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 3,
      lookahead: 2,
      semanticAction: undefined,
    },
  ]),

  // 'state 141'
  new Set([
    {
      name: "Sign",
      tokens: ["PLUS"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Sign",
      tokens: ["PLUS"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 142'
  new Set([
    {
      name: "Sign",
      tokens: ["MINUS"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Sign",
      tokens: ["MINUS"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 143'
  new Set([
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Digits"],
      marker: 2,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Digits"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Digits"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Digits"],
      marker: 2,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Digits"],
      marker: 2,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 144'
  new Set([
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 2,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 2,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 2,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 145'
  new Set([
    {
      name: "Sign",
      tokens: ["PLUS"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Sign",
      tokens: ["PLUS"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 146'
  new Set([
    {
      name: "Sign",
      tokens: ["MINUS"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Sign",
      tokens: ["MINUS"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 147'
  new Set([
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Digits"],
      marker: 2,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Digits"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Digits"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Digits"],
      marker: 2,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Digits"],
      marker: 2,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 148'
  new Set([
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 2,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 2,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 2,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 149'
  new Set([
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 3,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 3,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 3,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 3,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 3,
      lookahead: 2,
      semanticAction: undefined,
    },
  ]),

  // 'state 150'
  new Set([
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 2,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 2,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 2,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 2,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 2,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 151'
  new Set([
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 3,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 3,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 3,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 3,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 3,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 3,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 3,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 3,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 152'
  new Set([
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 153'
  new Set([
    {
      name: "Member",
      tokens: ["Spaces", "String", "COLON", "Element"],
      marker: 3,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["Spaces", "String", "COLON", "Element"],
      marker: 3,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "Spaces"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "Spaces"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "Spaces"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "Spaces"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 3,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 4,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 5,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 6,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 11,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 10,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 19,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 3,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 4,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 5,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 6,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 11,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 10,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 19,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
  ]),

  // 'state 154'
  new Set([
    {
      name: "Member",
      tokens: ["Spaces", "String", "Spaces", "COLON", "Element"],
      marker: 3,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["Spaces", "String", "Spaces", "COLON", "Element"],
      marker: 3,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 3,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 4,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 5,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 6,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 11,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 10,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 19,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
  ]),

  // 'state 155'
  new Set([
    {
      name: "Members",
      tokens: ["Members", "COMMA", "Member"],
      marker: 3,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Members",
      tokens: ["Members", "COMMA", "Member"],
      marker: 3,
      lookahead: 8,
      semanticAction: undefined,
    },
  ]),

  // 'state 156'
  new Set([
    {
      name: "Member",
      tokens: ["Spaces", "String", "COLON", "Element"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["Spaces", "String", "COLON", "Element"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["Spaces", "String", "Spaces", "COLON", "Element"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["Spaces", "String", "Spaces", "COLON", "Element"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 3,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 4,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 5,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 6,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 11,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 10,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 19,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
  ]),

  // 'state 157'
  new Set([
    {
      name: "Member",
      tokens: ["String", "COLON", "Element"],
      marker: 3,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["String", "COLON", "Element"],
      marker: 3,
      lookahead: 8,
      semanticAction: undefined,
    },
  ]),

  // 'state 158'
  new Set([
    {
      name: "Member",
      tokens: ["String", "Spaces", "COLON", "Element"],
      marker: 3,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["String", "Spaces", "COLON", "Element"],
      marker: 3,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "Spaces"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "Spaces"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "Spaces"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "Spaces"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 3,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 4,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 5,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 6,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 11,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 10,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 19,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 3,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 4,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 5,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 6,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 11,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 10,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 19,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
  ]),

  // 'state 159'
  new Set([
    {
      name: "Elements",
      tokens: ["Elements", "COMMA", "Element"],
      marker: 3,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Elements",
      tokens: ["Elements", "COMMA", "Element"],
      marker: 3,
      lookahead: 8,
      semanticAction: undefined,
    },
  ]),

  // 'state 160'
  new Set([
    {
      name: "Sign",
      tokens: ["PLUS"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Sign",
      tokens: ["PLUS"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 161'
  new Set([
    {
      name: "Sign",
      tokens: ["MINUS"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Sign",
      tokens: ["MINUS"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 162'
  new Set([
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Digits"],
      marker: 2,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Digits"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Digits"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Digits"],
      marker: 2,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Digits"],
      marker: 2,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 163'
  new Set([
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 2,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 2,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 2,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 164'
  new Set([
    {
      name: "Sign",
      tokens: ["PLUS"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Sign",
      tokens: ["PLUS"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 165'
  new Set([
    {
      name: "Sign",
      tokens: ["MINUS"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Sign",
      tokens: ["MINUS"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 166'
  new Set([
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Digits"],
      marker: 2,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Digits"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Digits"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Digits"],
      marker: 2,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Digits"],
      marker: 2,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 167'
  new Set([
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 2,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 2,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 2,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digit"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 168'
  new Set([
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 3,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 3,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 3,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 3,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 3,
      lookahead: 2,
      semanticAction: undefined,
    },
  ]),

  // 'state 169'
  new Set([
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 2,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 2,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 2,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 2,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 2,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 170'
  new Set([
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 3,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 3,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 3,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 3,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 3,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 3,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 3,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 3,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 171'
  new Set([
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 172'
  new Set([
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 173'
  new Set([
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 3,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 3,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 3,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 3,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 3,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 174'
  new Set([
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 175'
  new Set([
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 3,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 3,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 3,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 3,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 3,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 176'
  new Set([
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 177'
  new Set([
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 178'
  new Set([
    {
      name: "Member",
      tokens: ["Spaces", "String", "COLON", "Element"],
      marker: 3,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["Spaces", "String", "COLON", "Element"],
      marker: 3,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "Spaces"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "Spaces"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "Spaces"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "Spaces"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 3,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 4,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 5,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 6,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 11,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 10,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 19,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 3,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 4,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 5,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 6,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 11,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 10,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 19,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
  ]),

  // 'state 179'
  new Set([
    {
      name: "Member",
      tokens: ["Spaces", "String", "Spaces", "COLON", "Element"],
      marker: 3,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["Spaces", "String", "Spaces", "COLON", "Element"],
      marker: 3,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 3,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 4,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 5,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 6,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 11,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 10,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 19,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
  ]),

  // 'state 180'
  new Set([
    {
      name: "Members",
      tokens: ["Members", "COMMA", "Member"],
      marker: 3,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Members",
      tokens: ["Members", "COMMA", "Member"],
      marker: 3,
      lookahead: 8,
      semanticAction: undefined,
    },
  ]),

  // 'state 181'
  new Set([
    {
      name: "Member",
      tokens: ["Spaces", "String", "COLON", "Element"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["Spaces", "String", "COLON", "Element"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["Spaces", "String", "Spaces", "COLON", "Element"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["Spaces", "String", "Spaces", "COLON", "Element"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 3,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 4,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 5,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 6,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 11,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 10,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 19,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
  ]),

  // 'state 182'
  new Set([
    {
      name: "Member",
      tokens: ["String", "COLON", "Element"],
      marker: 3,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["String", "COLON", "Element"],
      marker: 3,
      lookahead: 8,
      semanticAction: undefined,
    },
  ]),

  // 'state 183'
  new Set([
    {
      name: "Member",
      tokens: ["String", "Spaces", "COLON", "Element"],
      marker: 3,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["String", "Spaces", "COLON", "Element"],
      marker: 3,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "Spaces"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "Spaces"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "Spaces"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "Spaces"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 3,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 4,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 5,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 6,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 11,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 10,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 19,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 3,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 4,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 5,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 6,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 11,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 10,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 19,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
  ]),

  // 'state 184'
  new Set([
    {
      name: "Elements",
      tokens: ["Elements", "COMMA", "Element"],
      marker: 3,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Elements",
      tokens: ["Elements", "COMMA", "Element"],
      marker: 3,
      lookahead: 8,
      semanticAction: undefined,
    },
  ]),

  // 'state 185'
  new Set([
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 3,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 3,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 3,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 3,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 3,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 186'
  new Set([
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 3,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 3,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 3,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 3,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 3,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 187'
  new Set([
    {
      name: "Member",
      tokens: ["Spaces", "String", "COLON", "Element"],
      marker: 4,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["Spaces", "String", "COLON", "Element"],
      marker: 4,
      lookahead: 8,
      semanticAction: undefined,
    },
  ]),

  // 'state 188'
  new Set([
    {
      name: "Member",
      tokens: ["Spaces", "String", "Spaces", "COLON", "Element"],
      marker: 4,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["Spaces", "String", "Spaces", "COLON", "Element"],
      marker: 4,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "Spaces"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "Spaces"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "Spaces"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "Spaces"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 3,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 4,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 5,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 6,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 11,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 10,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 19,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 3,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 4,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 5,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 6,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 11,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 10,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 19,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
  ]),

  // 'state 189'
  new Set([
    {
      name: "Member",
      tokens: ["String", "Spaces", "COLON", "Element"],
      marker: 4,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["String", "Spaces", "COLON", "Element"],
      marker: 4,
      lookahead: 8,
      semanticAction: undefined,
    },
  ]),

  // 'state 190'
  new Set([
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 3,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 3,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 3,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 3,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 3,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 191'
  new Set([
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 3,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 3,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 3,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 3,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 3,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Digit",
      tokens: ["ONE_NINE"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
  ]),

  // 'state 192'
  new Set([
    {
      name: "Member",
      tokens: ["Spaces", "String", "COLON", "Element"],
      marker: 4,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["Spaces", "String", "COLON", "Element"],
      marker: 4,
      lookahead: 8,
      semanticAction: undefined,
    },
  ]),

  // 'state 193'
  new Set([
    {
      name: "Member",
      tokens: ["Spaces", "String", "Spaces", "COLON", "Element"],
      marker: 4,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["Spaces", "String", "Spaces", "COLON", "Element"],
      marker: 4,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "Spaces"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "Spaces"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "Spaces"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "Spaces"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Spaces", "Value", "Spaces"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["String"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Number"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 3,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 4,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 5,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 6,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 11,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 10,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 19,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["Spaces", "WS"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 3,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 4,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 5,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 6,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 11,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 10,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 13,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 19,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 14,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Spaces",
      tokens: ["WS"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Spaces", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Spaces", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "String",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 9,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Exponent"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ZERO"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 0,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 8,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 12,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 2,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 16,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 17,
      semanticAction: undefined,
    },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: 15,
      semanticAction: undefined,
    },
  ]),

  // 'state 194'
  new Set([
    {
      name: "Member",
      tokens: ["String", "Spaces", "COLON", "Element"],
      marker: 4,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["String", "Spaces", "COLON", "Element"],
      marker: 4,
      lookahead: 8,
      semanticAction: undefined,
    },
  ]),

  // 'state 195'
  new Set([
    {
      name: "Member",
      tokens: ["Spaces", "String", "Spaces", "COLON", "Element"],
      marker: 5,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["Spaces", "String", "Spaces", "COLON", "Element"],
      marker: 5,
      lookahead: 8,
      semanticAction: undefined,
    },
  ]),

  // 'state 196'
  new Set([
    {
      name: "Member",
      tokens: ["Spaces", "String", "Spaces", "COLON", "Element"],
      marker: 5,
      lookahead: 7,
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["Spaces", "String", "Spaces", "COLON", "Element"],
      marker: 5,
      lookahead: 8,
      semanticAction: undefined,
    },
  ]),
];

const parserSymbols = [
  "@expound.EOF", // 0
  "@expound.ERROR", // 1
  "WS", // 2
  "TRUE", // 28
  "FALSE", // 30
  "NULL", // 29
  "CURLY_OPEN", // 7
  "CURLY_CLOSE", // 8
  "COMMA", // 9
  "COLON", // 10
  "STRING", // 27
  "BRACKET_OPEN", // 25
  "BRACKET_CLOSE", // 26
  "ZERO", // 14
  "ONE_NINE", // 15
  "DOT", // 13
  "UPPER_E", // 24
  "LOWER_E", // 6
  "PLUS", // 11
  "MINUS", // 12
  "S", // -1
  "Json", // -1
  "Element", // -1
  "Value", // -1
  "Object", // -1
  "Members", // -1
  "Member", // -1
  "String", // -1
  "Array", // -1
  "Elements", // -1
  "Number", // -1
  "Integer", // -1
  "Digits", // -1
  "Digit", // -1
  "Fraction", // -1
  "Exponent", // -1
  "Sign", // -1
  "Spaces", // -1
];
const grammarRuleNames = [
  "Json",
  "Element",
  "Element",
  "Element",
  "Element",
  "Value",
  "Value",
  "Value",
  "Value",
  "Value",
  "Value",
  "Value",
  "Object",
  "Object",
  "Object",
  "Members",
  "Members",
  "Member",
  "Member",
  "Member",
  "Member",
  "String",
  "Array",
  "Array",
  "Array",
  "Elements",
  "Elements",
  "Number",
  "Number",
  "Number",
  "Number",
  "Integer",
  "Integer",
  "Integer",
  "Integer",
  "Digits",
  "Digits",
  "Digit",
  "Digit",
  "Fraction",
  "Exponent",
  "Exponent",
  "Exponent",
  "Exponent",
  "Sign",
  "Sign",
  "Spaces",
  "Spaces",
];

const actions = [
  // 'action 0'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 1'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 2'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 3'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 4'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 5'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 6'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 7'
  {
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
  },
  // 'action 8'
  {
    op: 0, // shift
    state: 9, // 'state 9'
    symbol: undefined,
  },
  // 'action 9'
  {
    op: 0, // shift
    state: 10, // 'state 10'
    symbol: undefined,
  },
  // 'action 10'
  {
    op: 0, // shift
    state: 11, // 'state 11'
    symbol: undefined,
  },
  // 'action 11'
  {
    op: 0, // shift
    state: 12, // 'state 12'
    symbol: undefined,
  },
  // 'action 12'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 13'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 14'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 15'
  {
    op: 0, // shift
    state: 16, // 'state 16'
    symbol: undefined,
  },
  // 'action 16'
  {
    op: 0, // shift
    state: 17, // 'state 17'
    symbol: undefined,
  },
  // 'action 17'
  {
    op: 0, // shift
    state: 18, // 'state 18'
    symbol: undefined,
  },
  // 'action 18'
  {
    op: 0, // shift
    state: 19, // 'state 19'
    symbol: undefined,
  },
  // 'action 19'
  {
    op: 2, // done
    state: undefined,
    symbol: undefined,
  },
  // 'action 20'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 0, // Json
  },
  // 'action 21'
  {
    op: 0, // shift
    state: 20, // 'state 20'
    symbol: undefined,
  },
  // 'action 22'
  {
    op: 0, // shift
    state: 21, // 'state 21'
    symbol: undefined,
  },
  // 'action 23'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 1, // Element
  },
  // 'action 24'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 1, // Element
  },
  // 'action 25'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 1, // Element
  },
  // 'action 26'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 1, // Element
  },
  // 'action 27'
  {
    op: 0, // shift
    state: 22, // 'state 22'
    symbol: undefined,
  },
  // 'action 28'
  {
    op: 0, // shift
    state: 23, // 'state 23'
    symbol: undefined,
  },
  // 'action 29'
  {
    op: 0, // shift
    state: 24, // 'state 24'
    symbol: undefined,
  },
  // 'action 30'
  {
    op: 0, // shift
    state: 25, // 'state 25'
    symbol: undefined,
  },
  // 'action 31'
  {
    op: 0, // shift
    state: 26, // 'state 26'
    symbol: undefined,
  },
  // 'action 32'
  {
    op: 0, // shift
    state: 27, // 'state 27'
    symbol: undefined,
  },
  // 'action 33'
  {
    op: 0, // shift
    state: 28, // 'state 28'
    symbol: undefined,
  },
  // 'action 34'
  {
    op: 0, // shift
    state: 29, // 'state 29'
    symbol: undefined,
  },
  // 'action 35'
  {
    op: 0, // shift
    state: 30, // 'state 30'
    symbol: undefined,
  },
  // 'action 36'
  {
    op: 0, // shift
    state: 31, // 'state 31'
    symbol: undefined,
  },
  // 'action 37'
  {
    op: 0, // shift
    state: 32, // 'state 32'
    symbol: undefined,
  },
  // 'action 38'
  {
    op: 0, // shift
    state: 33, // 'state 33'
    symbol: undefined,
  },
  // 'action 39'
  {
    op: 0, // shift
    state: 34, // 'state 34'
    symbol: undefined,
  },
  // 'action 40'
  {
    op: 0, // shift
    state: 35, // 'state 35'
    symbol: undefined,
  },
  // 'action 41'
  {
    op: 0, // shift
    state: 36, // 'state 36'
    symbol: undefined,
  },
  // 'action 42'
  {
    op: 0, // shift
    state: 37, // 'state 37'
    symbol: undefined,
  },
  // 'action 43'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 44'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 45'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 46'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 47'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 48'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 49'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 50'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 51'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 52'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 53'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 54'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 55'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 56'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 57'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 58'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 59'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 60'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 61'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 62'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 63'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 64'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 65'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 66'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 67'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 68'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 69'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 70'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 71'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 72'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 73'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 74'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 75'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 76'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 77'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 78'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 46, // Spaces
  },
  // 'action 79'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 46, // Spaces
  },
  // 'action 80'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 46, // Spaces
  },
  // 'action 81'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 46, // Spaces
  },
  // 'action 82'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 46, // Spaces
  },
  // 'action 83'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 46, // Spaces
  },
  // 'action 84'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 46, // Spaces
  },
  // 'action 85'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 46, // Spaces
  },
  // 'action 86'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 46, // Spaces
  },
  // 'action 87'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 46, // Spaces
  },
  // 'action 88'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 46, // Spaces
  },
  // 'action 89'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 46, // Spaces
  },
  // 'action 90'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 46, // Spaces
  },
  // 'action 91'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 46, // Spaces
  },
  // 'action 92'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 46, // Spaces
  },
  // 'action 93'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 94'
  {
    op: 0, // shift
    state: 38, // 'state 38'
    symbol: undefined,
  },
  // 'action 95'
  {
    op: 0, // shift
    state: 39, // 'state 39'
    symbol: undefined,
  },
  // 'action 96'
  {
    op: 0, // shift
    state: 40, // 'state 40'
    symbol: undefined,
  },
  // 'action 97'
  {
    op: 0, // shift
    state: 41, // 'state 41'
    symbol: undefined,
  },
  // 'action 98'
  {
    op: 0, // shift
    state: 42, // 'state 42'
    symbol: undefined,
  },
  // 'action 99'
  {
    op: 0, // shift
    state: 43, // 'state 43'
    symbol: undefined,
  },
  // 'action 100'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 101'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 102'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 103'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 104'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 105'
  {
    op: 0, // shift
    state: 44, // 'state 44'
    symbol: undefined,
  },
  // 'action 106'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 107'
  {
    op: 0, // shift
    state: 45, // 'state 45'
    symbol: undefined,
  },
  // 'action 108'
  {
    op: 0, // shift
    state: 46, // 'state 46'
    symbol: undefined,
  },
  // 'action 109'
  {
    op: 0, // shift
    state: 47, // 'state 47'
    symbol: undefined,
  },
  // 'action 110'
  {
    op: 0, // shift
    state: 48, // 'state 48'
    symbol: undefined,
  },
  // 'action 111'
  {
    op: 0, // shift
    state: 49, // 'state 49'
    symbol: undefined,
  },
  // 'action 112'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 113'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 114'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 115'
  {
    op: 0, // shift
    state: 16, // 'state 16'
    symbol: undefined,
  },
  // 'action 116'
  {
    op: 0, // shift
    state: 50, // 'state 50'
    symbol: undefined,
  },
  // 'action 117'
  {
    op: 0, // shift
    state: 17, // 'state 17'
    symbol: undefined,
  },
  // 'action 118'
  {
    op: 0, // shift
    state: 51, // 'state 51'
    symbol: undefined,
  },
  // 'action 119'
  {
    op: 0, // shift
    state: 52, // 'state 52'
    symbol: undefined,
  },
  // 'action 120'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // String
  },
  // 'action 121'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // String
  },
  // 'action 122'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // String
  },
  // 'action 123'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // String
  },
  // 'action 124'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // String
  },
  // 'action 125'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // String
  },
  // 'action 126'
  {
    op: 0, // shift
    state: 53, // 'state 53'
    symbol: undefined,
  },
  // 'action 127'
  {
    op: 0, // shift
    state: 54, // 'state 54'
    symbol: undefined,
  },
  // 'action 128'
  {
    op: 0, // shift
    state: 55, // 'state 55'
    symbol: undefined,
  },
  // 'action 129'
  {
    op: 0, // shift
    state: 56, // 'state 56'
    symbol: undefined,
  },
  // 'action 130'
  {
    op: 0, // shift
    state: 57, // 'state 57'
    symbol: undefined,
  },
  // 'action 131'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Number
  },
  // 'action 132'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Number
  },
  // 'action 133'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Number
  },
  // 'action 134'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Number
  },
  // 'action 135'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Number
  },
  // 'action 136'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 137'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 138'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 139'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 140'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 141'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 142'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 143'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 144'
  {
    op: 0, // shift
    state: 58, // 'state 58'
    symbol: undefined,
  },
  // 'action 145'
  {
    op: 0, // shift
    state: 59, // 'state 59'
    symbol: undefined,
  },
  // 'action 146'
  {
    op: 0, // shift
    state: 60, // 'state 60'
    symbol: undefined,
  },
  // 'action 147'
  {
    op: 0, // shift
    state: 61, // 'state 61'
    symbol: undefined,
  },
  // 'action 148'
  {
    op: 0, // shift
    state: 62, // 'state 62'
    symbol: undefined,
  },
  // 'action 149'
  {
    op: 0, // shift
    state: 63, // 'state 63'
    symbol: undefined,
  },
  // 'action 150'
  {
    op: 0, // shift
    state: 64, // 'state 64'
    symbol: undefined,
  },
  // 'action 151'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 1, // Element
  },
  // 'action 152'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 1, // Element
  },
  // 'action 153'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 1, // Element
  },
  // 'action 154'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 1, // Element
  },
  // 'action 155'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 46, // Spaces
  },
  // 'action 156'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 46, // Spaces
  },
  // 'action 157'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 46, // Spaces
  },
  // 'action 158'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 46, // Spaces
  },
  // 'action 159'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 46, // Spaces
  },
  // 'action 160'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 46, // Spaces
  },
  // 'action 161'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 46, // Spaces
  },
  // 'action 162'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 46, // Spaces
  },
  // 'action 163'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 46, // Spaces
  },
  // 'action 164'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 46, // Spaces
  },
  // 'action 165'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 46, // Spaces
  },
  // 'action 166'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 46, // Spaces
  },
  // 'action 167'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 46, // Spaces
  },
  // 'action 168'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 46, // Spaces
  },
  // 'action 169'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 46, // Spaces
  },
  // 'action 170'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 171'
  {
    op: 0, // shift
    state: 65, // 'state 65'
    symbol: undefined,
  },
  // 'action 172'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 1, // Element
  },
  // 'action 173'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 1, // Element
  },
  // 'action 174'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 1, // Element
  },
  // 'action 175'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 1, // Element
  },
  // 'action 176'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 177'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 178'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 179'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 180'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 181'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 182'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 183'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 184'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 185'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 186'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 187'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 188'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 189'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 190'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 191'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 192'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 193'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 194'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 195'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 196'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 197'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 198'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 199'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 200'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 201'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 202'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 203'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 204'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 205'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 206'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 207'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 208'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 209'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 210'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 211'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 212'
  {
    op: 0, // shift
    state: 66, // 'state 66'
    symbol: undefined,
  },
  // 'action 213'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 214'
  {
    op: 0, // shift
    state: 67, // 'state 67'
    symbol: undefined,
  },
  // 'action 215'
  {
    op: 0, // shift
    state: 68, // 'state 68'
    symbol: undefined,
  },
  // 'action 216'
  {
    op: 0, // shift
    state: 69, // 'state 69'
    symbol: undefined,
  },
  // 'action 217'
  {
    op: 0, // shift
    state: 70, // 'state 70'
    symbol: undefined,
  },
  // 'action 218'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 219'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 220'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 221'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 222'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 223'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 224'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 225'
  {
    op: 0, // shift
    state: 71, // 'state 71'
    symbol: undefined,
  },
  // 'action 226'
  {
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
  },
  // 'action 227'
  {
    op: 0, // shift
    state: 9, // 'state 9'
    symbol: undefined,
  },
  // 'action 228'
  {
    op: 0, // shift
    state: 10, // 'state 10'
    symbol: undefined,
  },
  // 'action 229'
  {
    op: 0, // shift
    state: 72, // 'state 72'
    symbol: undefined,
  },
  // 'action 230'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 231'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 232'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 233'
  {
    op: 0, // shift
    state: 16, // 'state 16'
    symbol: undefined,
  },
  // 'action 234'
  {
    op: 0, // shift
    state: 73, // 'state 73'
    symbol: undefined,
  },
  // 'action 235'
  {
    op: 0, // shift
    state: 17, // 'state 17'
    symbol: undefined,
  },
  // 'action 236'
  {
    op: 0, // shift
    state: 18, // 'state 18'
    symbol: undefined,
  },
  // 'action 237'
  {
    op: 0, // shift
    state: 74, // 'state 74'
    symbol: undefined,
  },
  // 'action 238'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // String
  },
  // 'action 239'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // String
  },
  // 'action 240'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // String
  },
  // 'action 241'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // String
  },
  // 'action 242'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // String
  },
  // 'action 243'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // String
  },
  // 'action 244'
  {
    op: 0, // shift
    state: 75, // 'state 75'
    symbol: undefined,
  },
  // 'action 245'
  {
    op: 0, // shift
    state: 76, // 'state 76'
    symbol: undefined,
  },
  // 'action 246'
  {
    op: 0, // shift
    state: 77, // 'state 77'
    symbol: undefined,
  },
  // 'action 247'
  {
    op: 0, // shift
    state: 78, // 'state 78'
    symbol: undefined,
  },
  // 'action 248'
  {
    op: 0, // shift
    state: 79, // 'state 79'
    symbol: undefined,
  },
  // 'action 249'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Number
  },
  // 'action 250'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Number
  },
  // 'action 251'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Number
  },
  // 'action 252'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Number
  },
  // 'action 253'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Number
  },
  // 'action 254'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 255'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 256'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 257'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 258'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 259'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 260'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 261'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 262'
  {
    op: 0, // shift
    state: 80, // 'state 80'
    symbol: undefined,
  },
  // 'action 263'
  {
    op: 0, // shift
    state: 81, // 'state 81'
    symbol: undefined,
  },
  // 'action 264'
  {
    op: 0, // shift
    state: 82, // 'state 82'
    symbol: undefined,
  },
  // 'action 265'
  {
    op: 0, // shift
    state: 83, // 'state 83'
    symbol: undefined,
  },
  // 'action 266'
  {
    op: 0, // shift
    state: 84, // 'state 84'
    symbol: undefined,
  },
  // 'action 267'
  {
    op: 0, // shift
    state: 85, // 'state 85'
    symbol: undefined,
  },
  // 'action 268'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 46, // Spaces
  },
  // 'action 269'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 46, // Spaces
  },
  // 'action 270'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 46, // Spaces
  },
  // 'action 271'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 46, // Spaces
  },
  // 'action 272'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 46, // Spaces
  },
  // 'action 273'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 46, // Spaces
  },
  // 'action 274'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 46, // Spaces
  },
  // 'action 275'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 46, // Spaces
  },
  // 'action 276'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 46, // Spaces
  },
  // 'action 277'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 46, // Spaces
  },
  // 'action 278'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 46, // Spaces
  },
  // 'action 279'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 46, // Spaces
  },
  // 'action 280'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 46, // Spaces
  },
  // 'action 281'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 46, // Spaces
  },
  // 'action 282'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 46, // Spaces
  },
  // 'action 283'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Object
  },
  // 'action 284'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Object
  },
  // 'action 285'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Object
  },
  // 'action 286'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Object
  },
  // 'action 287'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Object
  },
  // 'action 288'
  {
    op: 0, // shift
    state: 22, // 'state 22'
    symbol: undefined,
  },
  // 'action 289'
  {
    op: 0, // shift
    state: 86, // 'state 86'
    symbol: undefined,
  },
  // 'action 290'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 291'
  {
    op: 0, // shift
    state: 87, // 'state 87'
    symbol: undefined,
  },
  // 'action 292'
  {
    op: 0, // shift
    state: 88, // 'state 88'
    symbol: undefined,
  },
  // 'action 293'
  {
    op: 0, // shift
    state: 89, // 'state 89'
    symbol: undefined,
  },
  // 'action 294'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Members
  },
  // 'action 295'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Members
  },
  // 'action 296'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 297'
  {
    op: 0, // shift
    state: 90, // 'state 90'
    symbol: undefined,
  },
  // 'action 298'
  {
    op: 0, // shift
    state: 91, // 'state 91'
    symbol: undefined,
  },
  // 'action 299'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // String
  },
  // 'action 300'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // String
  },
  // 'action 301'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // String
  },
  // 'action 302'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // String
  },
  // 'action 303'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // String
  },
  // 'action 304'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // String
  },
  // 'action 305'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Array
  },
  // 'action 306'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Array
  },
  // 'action 307'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Array
  },
  // 'action 308'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Array
  },
  // 'action 309'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Array
  },
  // 'action 310'
  {
    op: 0, // shift
    state: 22, // 'state 22'
    symbol: undefined,
  },
  // 'action 311'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 312'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 313'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 314'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 315'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 316'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 317'
  {
    op: 0, // shift
    state: 92, // 'state 92'
    symbol: undefined,
  },
  // 'action 318'
  {
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
  },
  // 'action 319'
  {
    op: 0, // shift
    state: 9, // 'state 9'
    symbol: undefined,
  },
  // 'action 320'
  {
    op: 0, // shift
    state: 10, // 'state 10'
    symbol: undefined,
  },
  // 'action 321'
  {
    op: 0, // shift
    state: 32, // 'state 32'
    symbol: undefined,
  },
  // 'action 322'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 323'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 324'
  {
    op: 0, // shift
    state: 16, // 'state 16'
    symbol: undefined,
  },
  // 'action 325'
  {
    op: 0, // shift
    state: 17, // 'state 17'
    symbol: undefined,
  },
  // 'action 326'
  {
    op: 0, // shift
    state: 18, // 'state 18'
    symbol: undefined,
  },
  // 'action 327'
  {
    op: 0, // shift
    state: 93, // 'state 93'
    symbol: undefined,
  },
  // 'action 328'
  {
    op: 0, // shift
    state: 94, // 'state 94'
    symbol: undefined,
  },
  // 'action 329'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Elements
  },
  // 'action 330'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Elements
  },
  // 'action 331'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // String
  },
  // 'action 332'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // String
  },
  // 'action 333'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // String
  },
  // 'action 334'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // String
  },
  // 'action 335'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // String
  },
  // 'action 336'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // String
  },
  // 'action 337'
  {
    op: 0, // shift
    state: 95, // 'state 95'
    symbol: undefined,
  },
  // 'action 338'
  {
    op: 0, // shift
    state: 96, // 'state 96'
    symbol: undefined,
  },
  // 'action 339'
  {
    op: 0, // shift
    state: 97, // 'state 97'
    symbol: undefined,
  },
  // 'action 340'
  {
    op: 0, // shift
    state: 98, // 'state 98'
    symbol: undefined,
  },
  // 'action 341'
  {
    op: 0, // shift
    state: 99, // 'state 99'
    symbol: undefined,
  },
  // 'action 342'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Number
  },
  // 'action 343'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Number
  },
  // 'action 344'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Number
  },
  // 'action 345'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Number
  },
  // 'action 346'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Number
  },
  // 'action 347'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 348'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 349'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 350'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 351'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 352'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 353'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 354'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 355'
  {
    op: 0, // shift
    state: 100, // 'state 100'
    symbol: undefined,
  },
  // 'action 356'
  {
    op: 0, // shift
    state: 101, // 'state 101'
    symbol: undefined,
  },
  // 'action 357'
  {
    op: 0, // shift
    state: 102, // 'state 102'
    symbol: undefined,
  },
  // 'action 358'
  {
    op: 0, // shift
    state: 103, // 'state 103'
    symbol: undefined,
  },
  // 'action 359'
  {
    op: 0, // shift
    state: 104, // 'state 104'
    symbol: undefined,
  },
  // 'action 360'
  {
    op: 0, // shift
    state: 105, // 'state 105'
    symbol: undefined,
  },
  // 'action 361'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Number
  },
  // 'action 362'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Number
  },
  // 'action 363'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Number
  },
  // 'action 364'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Number
  },
  // 'action 365'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Number
  },
  // 'action 366'
  {
    op: 0, // shift
    state: 106, // 'state 106'
    symbol: undefined,
  },
  // 'action 367'
  {
    op: 0, // shift
    state: 107, // 'state 107'
    symbol: undefined,
  },
  // 'action 368'
  {
    op: 0, // shift
    state: 108, // 'state 108'
    symbol: undefined,
  },
  // 'action 369'
  {
    op: 0, // shift
    state: 109, // 'state 109'
    symbol: undefined,
  },
  // 'action 370'
  {
    op: 0, // shift
    state: 110, // 'state 110'
    symbol: undefined,
  },
  // 'action 371'
  {
    op: 0, // shift
    state: 111, // 'state 111'
    symbol: undefined,
  },
  // 'action 372'
  {
    op: 0, // shift
    state: 112, // 'state 112'
    symbol: undefined,
  },
  // 'action 373'
  {
    op: 0, // shift
    state: 113, // 'state 113'
    symbol: undefined,
  },
  // 'action 374'
  {
    op: 0, // shift
    state: 114, // 'state 114'
    symbol: undefined,
  },
  // 'action 375'
  {
    op: 0, // shift
    state: 115, // 'state 115'
    symbol: undefined,
  },
  // 'action 376'
  {
    op: 0, // shift
    state: 116, // 'state 116'
    symbol: undefined,
  },
  // 'action 377'
  {
    op: 0, // shift
    state: 117, // 'state 117'
    symbol: undefined,
  },
  // 'action 378'
  {
    op: 0, // shift
    state: 118, // 'state 118'
    symbol: undefined,
  },
  // 'action 379'
  {
    op: 0, // shift
    state: 119, // 'state 119'
    symbol: undefined,
  },
  // 'action 380'
  {
    op: 0, // shift
    state: 54, // 'state 54'
    symbol: undefined,
  },
  // 'action 381'
  {
    op: 0, // shift
    state: 55, // 'state 55'
    symbol: undefined,
  },
  // 'action 382'
  {
    op: 0, // shift
    state: 120, // 'state 120'
    symbol: undefined,
  },
  // 'action 383'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Number
  },
  // 'action 384'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Number
  },
  // 'action 385'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Number
  },
  // 'action 386'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Number
  },
  // 'action 387'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Number
  },
  // 'action 388'
  {
    op: 0, // shift
    state: 121, // 'state 121'
    symbol: undefined,
  },
  // 'action 389'
  {
    op: 0, // shift
    state: 122, // 'state 122'
    symbol: undefined,
  },
  // 'action 390'
  {
    op: 0, // shift
    state: 123, // 'state 123'
    symbol: undefined,
  },
  // 'action 391'
  {
    op: 0, // shift
    state: 124, // 'state 124'
    symbol: undefined,
  },
  // 'action 392'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 393'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 394'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 395'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 396'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 397'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 398'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 399'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 400'
  {
    op: 0, // shift
    state: 125, // 'state 125'
    symbol: undefined,
  },
  // 'action 401'
  {
    op: 0, // shift
    state: 126, // 'state 126'
    symbol: undefined,
  },
  // 'action 402'
  {
    op: 0, // shift
    state: 127, // 'state 127'
    symbol: undefined,
  },
  // 'action 403'
  {
    op: 0, // shift
    state: 128, // 'state 128'
    symbol: undefined,
  },
  // 'action 404'
  {
    op: 0, // shift
    state: 129, // 'state 129'
    symbol: undefined,
  },
  // 'action 405'
  {
    op: 0, // shift
    state: 130, // 'state 130'
    symbol: undefined,
  },
  // 'action 406'
  {
    op: 0, // shift
    state: 131, // 'state 131'
    symbol: undefined,
  },
  // 'action 407'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 408'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 409'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 410'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 411'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 412'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 413'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 414'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 415'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 416'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 417'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 418'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 419'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 420'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 421'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 422'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 423'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 424'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 425'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 426'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 427'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 428'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 429'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 430'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 431'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 432'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 433'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 434'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 435'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 436'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 437'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 438'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 439'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 440'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 441'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 442'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 443'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 444'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 445'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 46, // Spaces
  },
  // 'action 446'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 46, // Spaces
  },
  // 'action 447'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 46, // Spaces
  },
  // 'action 448'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 46, // Spaces
  },
  // 'action 449'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 46, // Spaces
  },
  // 'action 450'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 46, // Spaces
  },
  // 'action 451'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 46, // Spaces
  },
  // 'action 452'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 46, // Spaces
  },
  // 'action 453'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 46, // Spaces
  },
  // 'action 454'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 46, // Spaces
  },
  // 'action 455'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 46, // Spaces
  },
  // 'action 456'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 46, // Spaces
  },
  // 'action 457'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 46, // Spaces
  },
  // 'action 458'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 46, // Spaces
  },
  // 'action 459'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 46, // Spaces
  },
  // 'action 460'
  {
    op: 0, // shift
    state: 22, // 'state 22'
    symbol: undefined,
  },
  // 'action 461'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 1, // Element
  },
  // 'action 462'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 1, // Element
  },
  // 'action 463'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 1, // Element
  },
  // 'action 464'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 1, // Element
  },
  // 'action 465'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Object
  },
  // 'action 466'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Object
  },
  // 'action 467'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Object
  },
  // 'action 468'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Object
  },
  // 'action 469'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Object
  },
  // 'action 470'
  {
    op: 0, // shift
    state: 22, // 'state 22'
    symbol: undefined,
  },
  // 'action 471'
  {
    op: 0, // shift
    state: 132, // 'state 132'
    symbol: undefined,
  },
  // 'action 472'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 473'
  {
    op: 0, // shift
    state: 133, // 'state 133'
    symbol: undefined,
  },
  // 'action 474'
  {
    op: 0, // shift
    state: 134, // 'state 134'
    symbol: undefined,
  },
  // 'action 475'
  {
    op: 0, // shift
    state: 135, // 'state 135'
    symbol: undefined,
  },
  // 'action 476'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Members
  },
  // 'action 477'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Members
  },
  // 'action 478'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 479'
  {
    op: 0, // shift
    state: 136, // 'state 136'
    symbol: undefined,
  },
  // 'action 480'
  {
    op: 0, // shift
    state: 137, // 'state 137'
    symbol: undefined,
  },
  // 'action 481'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Array
  },
  // 'action 482'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Array
  },
  // 'action 483'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Array
  },
  // 'action 484'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Array
  },
  // 'action 485'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Array
  },
  // 'action 486'
  {
    op: 0, // shift
    state: 22, // 'state 22'
    symbol: undefined,
  },
  // 'action 487'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 488'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 489'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 490'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 491'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 492'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 493'
  {
    op: 0, // shift
    state: 138, // 'state 138'
    symbol: undefined,
  },
  // 'action 494'
  {
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
  },
  // 'action 495'
  {
    op: 0, // shift
    state: 9, // 'state 9'
    symbol: undefined,
  },
  // 'action 496'
  {
    op: 0, // shift
    state: 10, // 'state 10'
    symbol: undefined,
  },
  // 'action 497'
  {
    op: 0, // shift
    state: 32, // 'state 32'
    symbol: undefined,
  },
  // 'action 498'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 499'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 500'
  {
    op: 0, // shift
    state: 16, // 'state 16'
    symbol: undefined,
  },
  // 'action 501'
  {
    op: 0, // shift
    state: 17, // 'state 17'
    symbol: undefined,
  },
  // 'action 502'
  {
    op: 0, // shift
    state: 18, // 'state 18'
    symbol: undefined,
  },
  // 'action 503'
  {
    op: 0, // shift
    state: 139, // 'state 139'
    symbol: undefined,
  },
  // 'action 504'
  {
    op: 0, // shift
    state: 140, // 'state 140'
    symbol: undefined,
  },
  // 'action 505'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Elements
  },
  // 'action 506'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Elements
  },
  // 'action 507'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Number
  },
  // 'action 508'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Number
  },
  // 'action 509'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Number
  },
  // 'action 510'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Number
  },
  // 'action 511'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Number
  },
  // 'action 512'
  {
    op: 0, // shift
    state: 60, // 'state 60'
    symbol: undefined,
  },
  // 'action 513'
  {
    op: 0, // shift
    state: 61, // 'state 61'
    symbol: undefined,
  },
  // 'action 514'
  {
    op: 0, // shift
    state: 141, // 'state 141'
    symbol: undefined,
  },
  // 'action 515'
  {
    op: 0, // shift
    state: 142, // 'state 142'
    symbol: undefined,
  },
  // 'action 516'
  {
    op: 0, // shift
    state: 143, // 'state 143'
    symbol: undefined,
  },
  // 'action 517'
  {
    op: 0, // shift
    state: 63, // 'state 63'
    symbol: undefined,
  },
  // 'action 518'
  {
    op: 0, // shift
    state: 144, // 'state 144'
    symbol: undefined,
  },
  // 'action 519'
  {
    op: 0, // shift
    state: 60, // 'state 60'
    symbol: undefined,
  },
  // 'action 520'
  {
    op: 0, // shift
    state: 61, // 'state 61'
    symbol: undefined,
  },
  // 'action 521'
  {
    op: 0, // shift
    state: 145, // 'state 145'
    symbol: undefined,
  },
  // 'action 522'
  {
    op: 0, // shift
    state: 146, // 'state 146'
    symbol: undefined,
  },
  // 'action 523'
  {
    op: 0, // shift
    state: 147, // 'state 147'
    symbol: undefined,
  },
  // 'action 524'
  {
    op: 0, // shift
    state: 63, // 'state 63'
    symbol: undefined,
  },
  // 'action 525'
  {
    op: 0, // shift
    state: 148, // 'state 148'
    symbol: undefined,
  },
  // 'action 526'
  {
    op: 0, // shift
    state: 54, // 'state 54'
    symbol: undefined,
  },
  // 'action 527'
  {
    op: 0, // shift
    state: 55, // 'state 55'
    symbol: undefined,
  },
  // 'action 528'
  {
    op: 0, // shift
    state: 149, // 'state 149'
    symbol: undefined,
  },
  // 'action 529'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Number
  },
  // 'action 530'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Number
  },
  // 'action 531'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Number
  },
  // 'action 532'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Number
  },
  // 'action 533'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Number
  },
  // 'action 534'
  {
    op: 0, // shift
    state: 60, // 'state 60'
    symbol: undefined,
  },
  // 'action 535'
  {
    op: 0, // shift
    state: 61, // 'state 61'
    symbol: undefined,
  },
  // 'action 536'
  {
    op: 0, // shift
    state: 150, // 'state 150'
    symbol: undefined,
  },
  // 'action 537'
  {
    op: 0, // shift
    state: 63, // 'state 63'
    symbol: undefined,
  },
  // 'action 538'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 539'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 540'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 541'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 542'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 543'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 544'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 545'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 546'
  {
    op: 0, // shift
    state: 60, // 'state 60'
    symbol: undefined,
  },
  // 'action 547'
  {
    op: 0, // shift
    state: 61, // 'state 61'
    symbol: undefined,
  },
  // 'action 548'
  {
    op: 0, // shift
    state: 151, // 'state 151'
    symbol: undefined,
  },
  // 'action 549'
  {
    op: 0, // shift
    state: 63, // 'state 63'
    symbol: undefined,
  },
  // 'action 550'
  {
    op: 0, // shift
    state: 60, // 'state 60'
    symbol: undefined,
  },
  // 'action 551'
  {
    op: 0, // shift
    state: 61, // 'state 61'
    symbol: undefined,
  },
  // 'action 552'
  {
    op: 0, // shift
    state: 152, // 'state 152'
    symbol: undefined,
  },
  // 'action 553'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 554'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 555'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 556'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 557'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 558'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 559'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 560'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 561'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 562'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 563'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 564'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 565'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 566'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 567'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 568'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 569'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 570'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 571'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 572'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 573'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 574'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 575'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 576'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 577'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 578'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 579'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 580'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 581'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 582'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 583'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 584'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 585'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 586'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 587'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 588'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 589'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 590'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 591'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Object
  },
  // 'action 592'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Object
  },
  // 'action 593'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Object
  },
  // 'action 594'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Object
  },
  // 'action 595'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Object
  },
  // 'action 596'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 597'
  {
    op: 0, // shift
    state: 153, // 'state 153'
    symbol: undefined,
  },
  // 'action 598'
  {
    op: 0, // shift
    state: 154, // 'state 154'
    symbol: undefined,
  },
  // 'action 599'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Object
  },
  // 'action 600'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Object
  },
  // 'action 601'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Object
  },
  // 'action 602'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Object
  },
  // 'action 603'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Object
  },
  // 'action 604'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 605'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 606'
  {
    op: 0, // shift
    state: 155, // 'state 155'
    symbol: undefined,
  },
  // 'action 607'
  {
    op: 0, // shift
    state: 42, // 'state 42'
    symbol: undefined,
  },
  // 'action 608'
  {
    op: 0, // shift
    state: 156, // 'state 156'
    symbol: undefined,
  },
  // 'action 609'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 610'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 611'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 612'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 613'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 614'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 615'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 616'
  {
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
  },
  // 'action 617'
  {
    op: 0, // shift
    state: 9, // 'state 9'
    symbol: undefined,
  },
  // 'action 618'
  {
    op: 0, // shift
    state: 10, // 'state 10'
    symbol: undefined,
  },
  // 'action 619'
  {
    op: 0, // shift
    state: 157, // 'state 157'
    symbol: undefined,
  },
  // 'action 620'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 621'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 622'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 623'
  {
    op: 0, // shift
    state: 16, // 'state 16'
    symbol: undefined,
  },
  // 'action 624'
  {
    op: 0, // shift
    state: 17, // 'state 17'
    symbol: undefined,
  },
  // 'action 625'
  {
    op: 0, // shift
    state: 18, // 'state 18'
    symbol: undefined,
  },
  // 'action 626'
  {
    op: 0, // shift
    state: 19, // 'state 19'
    symbol: undefined,
  },
  // 'action 627'
  {
    op: 0, // shift
    state: 22, // 'state 22'
    symbol: undefined,
  },
  // 'action 628'
  {
    op: 0, // shift
    state: 158, // 'state 158'
    symbol: undefined,
  },
  // 'action 629'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Array
  },
  // 'action 630'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Array
  },
  // 'action 631'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Array
  },
  // 'action 632'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Array
  },
  // 'action 633'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Array
  },
  // 'action 634'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Array
  },
  // 'action 635'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Array
  },
  // 'action 636'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Array
  },
  // 'action 637'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Array
  },
  // 'action 638'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Array
  },
  // 'action 639'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 640'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 641'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 642'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 643'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 644'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 645'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 646'
  {
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
  },
  // 'action 647'
  {
    op: 0, // shift
    state: 9, // 'state 9'
    symbol: undefined,
  },
  // 'action 648'
  {
    op: 0, // shift
    state: 10, // 'state 10'
    symbol: undefined,
  },
  // 'action 649'
  {
    op: 0, // shift
    state: 159, // 'state 159'
    symbol: undefined,
  },
  // 'action 650'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 651'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 652'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 653'
  {
    op: 0, // shift
    state: 16, // 'state 16'
    symbol: undefined,
  },
  // 'action 654'
  {
    op: 0, // shift
    state: 17, // 'state 17'
    symbol: undefined,
  },
  // 'action 655'
  {
    op: 0, // shift
    state: 18, // 'state 18'
    symbol: undefined,
  },
  // 'action 656'
  {
    op: 0, // shift
    state: 19, // 'state 19'
    symbol: undefined,
  },
  // 'action 657'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Number
  },
  // 'action 658'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Number
  },
  // 'action 659'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Number
  },
  // 'action 660'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Number
  },
  // 'action 661'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Number
  },
  // 'action 662'
  {
    op: 0, // shift
    state: 60, // 'state 60'
    symbol: undefined,
  },
  // 'action 663'
  {
    op: 0, // shift
    state: 61, // 'state 61'
    symbol: undefined,
  },
  // 'action 664'
  {
    op: 0, // shift
    state: 160, // 'state 160'
    symbol: undefined,
  },
  // 'action 665'
  {
    op: 0, // shift
    state: 161, // 'state 161'
    symbol: undefined,
  },
  // 'action 666'
  {
    op: 0, // shift
    state: 162, // 'state 162'
    symbol: undefined,
  },
  // 'action 667'
  {
    op: 0, // shift
    state: 63, // 'state 63'
    symbol: undefined,
  },
  // 'action 668'
  {
    op: 0, // shift
    state: 163, // 'state 163'
    symbol: undefined,
  },
  // 'action 669'
  {
    op: 0, // shift
    state: 60, // 'state 60'
    symbol: undefined,
  },
  // 'action 670'
  {
    op: 0, // shift
    state: 61, // 'state 61'
    symbol: undefined,
  },
  // 'action 671'
  {
    op: 0, // shift
    state: 164, // 'state 164'
    symbol: undefined,
  },
  // 'action 672'
  {
    op: 0, // shift
    state: 165, // 'state 165'
    symbol: undefined,
  },
  // 'action 673'
  {
    op: 0, // shift
    state: 166, // 'state 166'
    symbol: undefined,
  },
  // 'action 674'
  {
    op: 0, // shift
    state: 63, // 'state 63'
    symbol: undefined,
  },
  // 'action 675'
  {
    op: 0, // shift
    state: 167, // 'state 167'
    symbol: undefined,
  },
  // 'action 676'
  {
    op: 0, // shift
    state: 54, // 'state 54'
    symbol: undefined,
  },
  // 'action 677'
  {
    op: 0, // shift
    state: 55, // 'state 55'
    symbol: undefined,
  },
  // 'action 678'
  {
    op: 0, // shift
    state: 168, // 'state 168'
    symbol: undefined,
  },
  // 'action 679'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Number
  },
  // 'action 680'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Number
  },
  // 'action 681'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Number
  },
  // 'action 682'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Number
  },
  // 'action 683'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Number
  },
  // 'action 684'
  {
    op: 0, // shift
    state: 60, // 'state 60'
    symbol: undefined,
  },
  // 'action 685'
  {
    op: 0, // shift
    state: 61, // 'state 61'
    symbol: undefined,
  },
  // 'action 686'
  {
    op: 0, // shift
    state: 169, // 'state 169'
    symbol: undefined,
  },
  // 'action 687'
  {
    op: 0, // shift
    state: 63, // 'state 63'
    symbol: undefined,
  },
  // 'action 688'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 689'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 690'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 691'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 692'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 693'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 694'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 695'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 696'
  {
    op: 0, // shift
    state: 60, // 'state 60'
    symbol: undefined,
  },
  // 'action 697'
  {
    op: 0, // shift
    state: 61, // 'state 61'
    symbol: undefined,
  },
  // 'action 698'
  {
    op: 0, // shift
    state: 170, // 'state 170'
    symbol: undefined,
  },
  // 'action 699'
  {
    op: 0, // shift
    state: 63, // 'state 63'
    symbol: undefined,
  },
  // 'action 700'
  {
    op: 0, // shift
    state: 60, // 'state 60'
    symbol: undefined,
  },
  // 'action 701'
  {
    op: 0, // shift
    state: 61, // 'state 61'
    symbol: undefined,
  },
  // 'action 702'
  {
    op: 0, // shift
    state: 171, // 'state 171'
    symbol: undefined,
  },
  // 'action 703'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 704'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 705'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 706'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 707'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 708'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 709'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 710'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 711'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 712'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 713'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 714'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 715'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 716'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 717'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 718'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 719'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 720'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 721'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 722'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 723'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 724'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 725'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 726'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 727'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 728'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 729'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 730'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 731'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 732'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 733'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 734'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 735'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 736'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 737'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 738'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 739'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 740'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 741'
  {
    op: 0, // shift
    state: 60, // 'state 60'
    symbol: undefined,
  },
  // 'action 742'
  {
    op: 0, // shift
    state: 61, // 'state 61'
    symbol: undefined,
  },
  // 'action 743'
  {
    op: 0, // shift
    state: 172, // 'state 172'
    symbol: undefined,
  },
  // 'action 744'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 40, // Exponent
  },
  // 'action 745'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 40, // Exponent
  },
  // 'action 746'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 40, // Exponent
  },
  // 'action 747'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 40, // Exponent
  },
  // 'action 748'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 40, // Exponent
  },
  // 'action 749'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 750'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 751'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 752'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 753'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 754'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 755'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 756'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 757'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 758'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 759'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 760'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 761'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 762'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 763'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 764'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 765'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 766'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 767'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 768'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 769'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 770'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 771'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 772'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 773'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 774'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 775'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 776'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 777'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 778'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 779'
  {
    op: 0, // shift
    state: 60, // 'state 60'
    symbol: undefined,
  },
  // 'action 780'
  {
    op: 0, // shift
    state: 61, // 'state 61'
    symbol: undefined,
  },
  // 'action 781'
  {
    op: 0, // shift
    state: 173, // 'state 173'
    symbol: undefined,
  },
  // 'action 782'
  {
    op: 0, // shift
    state: 63, // 'state 63'
    symbol: undefined,
  },
  // 'action 783'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 44, // Sign
  },
  // 'action 784'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 44, // Sign
  },
  // 'action 785'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 44, // Sign
  },
  // 'action 786'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 44, // Sign
  },
  // 'action 787'
  {
    op: 0, // shift
    state: 60, // 'state 60'
    symbol: undefined,
  },
  // 'action 788'
  {
    op: 0, // shift
    state: 61, // 'state 61'
    symbol: undefined,
  },
  // 'action 789'
  {
    op: 0, // shift
    state: 174, // 'state 174'
    symbol: undefined,
  },
  // 'action 790'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 40, // Exponent
  },
  // 'action 791'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 40, // Exponent
  },
  // 'action 792'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 40, // Exponent
  },
  // 'action 793'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 40, // Exponent
  },
  // 'action 794'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 40, // Exponent
  },
  // 'action 795'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 796'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 797'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 798'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 799'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 800'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 801'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 802'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 803'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 804'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 805'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 806'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 807'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 808'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 809'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 810'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 811'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 812'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 813'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 814'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 815'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 816'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 817'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 818'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 819'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 820'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 821'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 822'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 823'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 824'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 825'
  {
    op: 0, // shift
    state: 60, // 'state 60'
    symbol: undefined,
  },
  // 'action 826'
  {
    op: 0, // shift
    state: 61, // 'state 61'
    symbol: undefined,
  },
  // 'action 827'
  {
    op: 0, // shift
    state: 175, // 'state 175'
    symbol: undefined,
  },
  // 'action 828'
  {
    op: 0, // shift
    state: 63, // 'state 63'
    symbol: undefined,
  },
  // 'action 829'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 44, // Sign
  },
  // 'action 830'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 44, // Sign
  },
  // 'action 831'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 44, // Sign
  },
  // 'action 832'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 44, // Sign
  },
  // 'action 833'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Number
  },
  // 'action 834'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Number
  },
  // 'action 835'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Number
  },
  // 'action 836'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Number
  },
  // 'action 837'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Number
  },
  // 'action 838'
  {
    op: 0, // shift
    state: 60, // 'state 60'
    symbol: undefined,
  },
  // 'action 839'
  {
    op: 0, // shift
    state: 61, // 'state 61'
    symbol: undefined,
  },
  // 'action 840'
  {
    op: 0, // shift
    state: 176, // 'state 176'
    symbol: undefined,
  },
  // 'action 841'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 39, // Fraction
  },
  // 'action 842'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 39, // Fraction
  },
  // 'action 843'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 39, // Fraction
  },
  // 'action 844'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 39, // Fraction
  },
  // 'action 845'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 39, // Fraction
  },
  // 'action 846'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 39, // Fraction
  },
  // 'action 847'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 39, // Fraction
  },
  // 'action 848'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 849'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 850'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 851'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 852'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 853'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 854'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 855'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 856'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 857'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 858'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 859'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 860'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 861'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 862'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 863'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 864'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 865'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 866'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 867'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 868'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 869'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 870'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 871'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 872'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 873'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 874'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 875'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 876'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 877'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 878'
  {
    op: 0, // shift
    state: 60, // 'state 60'
    symbol: undefined,
  },
  // 'action 879'
  {
    op: 0, // shift
    state: 61, // 'state 61'
    symbol: undefined,
  },
  // 'action 880'
  {
    op: 0, // shift
    state: 177, // 'state 177'
    symbol: undefined,
  },
  // 'action 881'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 882'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 883'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 884'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 885'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 886'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 887'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 888'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 889'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 890'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 891'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 892'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 893'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 894'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 895'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 896'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 897'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 898'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 899'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 900'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 901'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 902'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 903'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 904'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 905'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 906'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 907'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 908'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 909'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 910'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 911'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 912'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 913'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 914'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 915'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 916'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 917'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 918'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 919'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 920'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 921'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 922'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 923'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 924'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 925'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 926'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 927'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 928'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 929'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 930'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 931'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 932'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 933'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 934'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 935'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 936'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 937'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 938'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 939'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 940'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 941'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 942'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 943'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 944'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 945'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 946'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 947'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 948'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 37, // Digit
  },
  // 'action 949'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Object
  },
  // 'action 950'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Object
  },
  // 'action 951'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Object
  },
  // 'action 952'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Object
  },
  // 'action 953'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Object
  },
  // 'action 954'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 955'
  {
    op: 0, // shift
    state: 178, // 'state 178'
    symbol: undefined,
  },
  // 'action 956'
  {
    op: 0, // shift
    state: 179, // 'state 179'
    symbol: undefined,
  },
  // 'action 957'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Object
  },
  // 'action 958'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Object
  },
  // 'action 959'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Object
  },
  // 'action 960'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Object
  },
  // 'action 961'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Object
  },
  // 'action 962'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 963'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 964'
  {
    op: 0, // shift
    state: 180, // 'state 180'
    symbol: undefined,
  },
  // 'action 965'
  {
    op: 0, // shift
    state: 42, // 'state 42'
    symbol: undefined,
  },
  // 'action 966'
  {
    op: 0, // shift
    state: 181, // 'state 181'
    symbol: undefined,
  },
  // 'action 967'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 968'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 969'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 970'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 971'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 972'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 973'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 974'
  {
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
  },
  // 'action 975'
  {
    op: 0, // shift
    state: 9, // 'state 9'
    symbol: undefined,
  },
  // 'action 976'
  {
    op: 0, // shift
    state: 10, // 'state 10'
    symbol: undefined,
  },
  // 'action 977'
  {
    op: 0, // shift
    state: 182, // 'state 182'
    symbol: undefined,
  },
  // 'action 978'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 979'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 980'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 981'
  {
    op: 0, // shift
    state: 16, // 'state 16'
    symbol: undefined,
  },
  // 'action 982'
  {
    op: 0, // shift
    state: 17, // 'state 17'
    symbol: undefined,
  },
  // 'action 983'
  {
    op: 0, // shift
    state: 18, // 'state 18'
    symbol: undefined,
  },
  // 'action 984'
  {
    op: 0, // shift
    state: 19, // 'state 19'
    symbol: undefined,
  },
  // 'action 985'
  {
    op: 0, // shift
    state: 22, // 'state 22'
    symbol: undefined,
  },
  // 'action 986'
  {
    op: 0, // shift
    state: 183, // 'state 183'
    symbol: undefined,
  },
  // 'action 987'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Array
  },
  // 'action 988'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Array
  },
  // 'action 989'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Array
  },
  // 'action 990'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Array
  },
  // 'action 991'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Array
  },
  // 'action 992'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Array
  },
  // 'action 993'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Array
  },
  // 'action 994'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Array
  },
  // 'action 995'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Array
  },
  // 'action 996'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Array
  },
  // 'action 997'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 998'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 999'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 1000'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 1001'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 1002'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 1003'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 1004'
  {
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
  },
  // 'action 1005'
  {
    op: 0, // shift
    state: 9, // 'state 9'
    symbol: undefined,
  },
  // 'action 1006'
  {
    op: 0, // shift
    state: 10, // 'state 10'
    symbol: undefined,
  },
  // 'action 1007'
  {
    op: 0, // shift
    state: 184, // 'state 184'
    symbol: undefined,
  },
  // 'action 1008'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 1009'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 1010'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 1011'
  {
    op: 0, // shift
    state: 16, // 'state 16'
    symbol: undefined,
  },
  // 'action 1012'
  {
    op: 0, // shift
    state: 17, // 'state 17'
    symbol: undefined,
  },
  // 'action 1013'
  {
    op: 0, // shift
    state: 18, // 'state 18'
    symbol: undefined,
  },
  // 'action 1014'
  {
    op: 0, // shift
    state: 19, // 'state 19'
    symbol: undefined,
  },
  // 'action 1015'
  {
    op: 0, // shift
    state: 60, // 'state 60'
    symbol: undefined,
  },
  // 'action 1016'
  {
    op: 0, // shift
    state: 61, // 'state 61'
    symbol: undefined,
  },
  // 'action 1017'
  {
    op: 0, // shift
    state: 131, // 'state 131'
    symbol: undefined,
  },
  // 'action 1018'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 40, // Exponent
  },
  // 'action 1019'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 40, // Exponent
  },
  // 'action 1020'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 40, // Exponent
  },
  // 'action 1021'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 40, // Exponent
  },
  // 'action 1022'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 40, // Exponent
  },
  // 'action 1023'
  {
    op: 0, // shift
    state: 60, // 'state 60'
    symbol: undefined,
  },
  // 'action 1024'
  {
    op: 0, // shift
    state: 61, // 'state 61'
    symbol: undefined,
  },
  // 'action 1025'
  {
    op: 0, // shift
    state: 185, // 'state 185'
    symbol: undefined,
  },
  // 'action 1026'
  {
    op: 0, // shift
    state: 63, // 'state 63'
    symbol: undefined,
  },
  // 'action 1027'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 44, // Sign
  },
  // 'action 1028'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 44, // Sign
  },
  // 'action 1029'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 44, // Sign
  },
  // 'action 1030'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 44, // Sign
  },
  // 'action 1031'
  {
    op: 0, // shift
    state: 60, // 'state 60'
    symbol: undefined,
  },
  // 'action 1032'
  {
    op: 0, // shift
    state: 61, // 'state 61'
    symbol: undefined,
  },
  // 'action 1033'
  {
    op: 0, // shift
    state: 131, // 'state 131'
    symbol: undefined,
  },
  // 'action 1034'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 40, // Exponent
  },
  // 'action 1035'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 40, // Exponent
  },
  // 'action 1036'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 40, // Exponent
  },
  // 'action 1037'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 40, // Exponent
  },
  // 'action 1038'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 40, // Exponent
  },
  // 'action 1039'
  {
    op: 0, // shift
    state: 60, // 'state 60'
    symbol: undefined,
  },
  // 'action 1040'
  {
    op: 0, // shift
    state: 61, // 'state 61'
    symbol: undefined,
  },
  // 'action 1041'
  {
    op: 0, // shift
    state: 186, // 'state 186'
    symbol: undefined,
  },
  // 'action 1042'
  {
    op: 0, // shift
    state: 63, // 'state 63'
    symbol: undefined,
  },
  // 'action 1043'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 44, // Sign
  },
  // 'action 1044'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 44, // Sign
  },
  // 'action 1045'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 44, // Sign
  },
  // 'action 1046'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 44, // Sign
  },
  // 'action 1047'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Number
  },
  // 'action 1048'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Number
  },
  // 'action 1049'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Number
  },
  // 'action 1050'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Number
  },
  // 'action 1051'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Number
  },
  // 'action 1052'
  {
    op: 0, // shift
    state: 60, // 'state 60'
    symbol: undefined,
  },
  // 'action 1053'
  {
    op: 0, // shift
    state: 61, // 'state 61'
    symbol: undefined,
  },
  // 'action 1054'
  {
    op: 0, // shift
    state: 131, // 'state 131'
    symbol: undefined,
  },
  // 'action 1055'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 39, // Fraction
  },
  // 'action 1056'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 39, // Fraction
  },
  // 'action 1057'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 39, // Fraction
  },
  // 'action 1058'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 39, // Fraction
  },
  // 'action 1059'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 39, // Fraction
  },
  // 'action 1060'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 39, // Fraction
  },
  // 'action 1061'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 39, // Fraction
  },
  // 'action 1062'
  {
    op: 0, // shift
    state: 60, // 'state 60'
    symbol: undefined,
  },
  // 'action 1063'
  {
    op: 0, // shift
    state: 61, // 'state 61'
    symbol: undefined,
  },
  // 'action 1064'
  {
    op: 0, // shift
    state: 131, // 'state 131'
    symbol: undefined,
  },
  // 'action 1065'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 1066'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 1067'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 1068'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 1069'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 1070'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 1071'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 1072'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 1073'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 1074'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 1075'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 1076'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 1077'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 1078'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 1079'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 1080'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 1081'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 1082'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 1083'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 1084'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 1085'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 1086'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 1087'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 1088'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 1089'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 1090'
  {
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
  },
  // 'action 1091'
  {
    op: 0, // shift
    state: 9, // 'state 9'
    symbol: undefined,
  },
  // 'action 1092'
  {
    op: 0, // shift
    state: 10, // 'state 10'
    symbol: undefined,
  },
  // 'action 1093'
  {
    op: 0, // shift
    state: 187, // 'state 187'
    symbol: undefined,
  },
  // 'action 1094'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 1095'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 1096'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 1097'
  {
    op: 0, // shift
    state: 16, // 'state 16'
    symbol: undefined,
  },
  // 'action 1098'
  {
    op: 0, // shift
    state: 17, // 'state 17'
    symbol: undefined,
  },
  // 'action 1099'
  {
    op: 0, // shift
    state: 18, // 'state 18'
    symbol: undefined,
  },
  // 'action 1100'
  {
    op: 0, // shift
    state: 19, // 'state 19'
    symbol: undefined,
  },
  // 'action 1101'
  {
    op: 0, // shift
    state: 22, // 'state 22'
    symbol: undefined,
  },
  // 'action 1102'
  {
    op: 0, // shift
    state: 188, // 'state 188'
    symbol: undefined,
  },
  // 'action 1103'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Members
  },
  // 'action 1104'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Members
  },
  // 'action 1105'
  {
    op: 0, // shift
    state: 22, // 'state 22'
    symbol: undefined,
  },
  // 'action 1106'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 1107'
  {
    op: 0, // shift
    state: 87, // 'state 87'
    symbol: undefined,
  },
  // 'action 1108'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Member
  },
  // 'action 1109'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Member
  },
  // 'action 1110'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 1111'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 1112'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 1113'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 1114'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 1115'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 1116'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 1117'
  {
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
  },
  // 'action 1118'
  {
    op: 0, // shift
    state: 9, // 'state 9'
    symbol: undefined,
  },
  // 'action 1119'
  {
    op: 0, // shift
    state: 10, // 'state 10'
    symbol: undefined,
  },
  // 'action 1120'
  {
    op: 0, // shift
    state: 189, // 'state 189'
    symbol: undefined,
  },
  // 'action 1121'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 1122'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 1123'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 1124'
  {
    op: 0, // shift
    state: 16, // 'state 16'
    symbol: undefined,
  },
  // 'action 1125'
  {
    op: 0, // shift
    state: 17, // 'state 17'
    symbol: undefined,
  },
  // 'action 1126'
  {
    op: 0, // shift
    state: 18, // 'state 18'
    symbol: undefined,
  },
  // 'action 1127'
  {
    op: 0, // shift
    state: 19, // 'state 19'
    symbol: undefined,
  },
  // 'action 1128'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Elements
  },
  // 'action 1129'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Elements
  },
  // 'action 1130'
  {
    op: 0, // shift
    state: 60, // 'state 60'
    symbol: undefined,
  },
  // 'action 1131'
  {
    op: 0, // shift
    state: 61, // 'state 61'
    symbol: undefined,
  },
  // 'action 1132'
  {
    op: 0, // shift
    state: 131, // 'state 131'
    symbol: undefined,
  },
  // 'action 1133'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 40, // Exponent
  },
  // 'action 1134'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 40, // Exponent
  },
  // 'action 1135'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 40, // Exponent
  },
  // 'action 1136'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 40, // Exponent
  },
  // 'action 1137'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 40, // Exponent
  },
  // 'action 1138'
  {
    op: 0, // shift
    state: 60, // 'state 60'
    symbol: undefined,
  },
  // 'action 1139'
  {
    op: 0, // shift
    state: 61, // 'state 61'
    symbol: undefined,
  },
  // 'action 1140'
  {
    op: 0, // shift
    state: 190, // 'state 190'
    symbol: undefined,
  },
  // 'action 1141'
  {
    op: 0, // shift
    state: 63, // 'state 63'
    symbol: undefined,
  },
  // 'action 1142'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 44, // Sign
  },
  // 'action 1143'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 44, // Sign
  },
  // 'action 1144'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 44, // Sign
  },
  // 'action 1145'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 44, // Sign
  },
  // 'action 1146'
  {
    op: 0, // shift
    state: 60, // 'state 60'
    symbol: undefined,
  },
  // 'action 1147'
  {
    op: 0, // shift
    state: 61, // 'state 61'
    symbol: undefined,
  },
  // 'action 1148'
  {
    op: 0, // shift
    state: 131, // 'state 131'
    symbol: undefined,
  },
  // 'action 1149'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 40, // Exponent
  },
  // 'action 1150'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 40, // Exponent
  },
  // 'action 1151'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 40, // Exponent
  },
  // 'action 1152'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 40, // Exponent
  },
  // 'action 1153'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 40, // Exponent
  },
  // 'action 1154'
  {
    op: 0, // shift
    state: 60, // 'state 60'
    symbol: undefined,
  },
  // 'action 1155'
  {
    op: 0, // shift
    state: 61, // 'state 61'
    symbol: undefined,
  },
  // 'action 1156'
  {
    op: 0, // shift
    state: 191, // 'state 191'
    symbol: undefined,
  },
  // 'action 1157'
  {
    op: 0, // shift
    state: 63, // 'state 63'
    symbol: undefined,
  },
  // 'action 1158'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 44, // Sign
  },
  // 'action 1159'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 44, // Sign
  },
  // 'action 1160'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 44, // Sign
  },
  // 'action 1161'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 44, // Sign
  },
  // 'action 1162'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Number
  },
  // 'action 1163'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Number
  },
  // 'action 1164'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Number
  },
  // 'action 1165'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Number
  },
  // 'action 1166'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 27, // Number
  },
  // 'action 1167'
  {
    op: 0, // shift
    state: 60, // 'state 60'
    symbol: undefined,
  },
  // 'action 1168'
  {
    op: 0, // shift
    state: 61, // 'state 61'
    symbol: undefined,
  },
  // 'action 1169'
  {
    op: 0, // shift
    state: 131, // 'state 131'
    symbol: undefined,
  },
  // 'action 1170'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 39, // Fraction
  },
  // 'action 1171'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 39, // Fraction
  },
  // 'action 1172'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 39, // Fraction
  },
  // 'action 1173'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 39, // Fraction
  },
  // 'action 1174'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 39, // Fraction
  },
  // 'action 1175'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 39, // Fraction
  },
  // 'action 1176'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 39, // Fraction
  },
  // 'action 1177'
  {
    op: 0, // shift
    state: 60, // 'state 60'
    symbol: undefined,
  },
  // 'action 1178'
  {
    op: 0, // shift
    state: 61, // 'state 61'
    symbol: undefined,
  },
  // 'action 1179'
  {
    op: 0, // shift
    state: 131, // 'state 131'
    symbol: undefined,
  },
  // 'action 1180'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 1181'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 1182'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 1183'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 1184'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 1185'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 1186'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 1187'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 31, // Integer
  },
  // 'action 1188'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 1189'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 1190'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 1191'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 1192'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 1193'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 1194'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 1195'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 1196'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 1197'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 1198'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 1199'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 1200'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 1201'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 1202'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 1203'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 1204'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 1205'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 1206'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 1207'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 1208'
  {
    op: 0, // shift
    state: 60, // 'state 60'
    symbol: undefined,
  },
  // 'action 1209'
  {
    op: 0, // shift
    state: 61, // 'state 61'
    symbol: undefined,
  },
  // 'action 1210'
  {
    op: 0, // shift
    state: 131, // 'state 131'
    symbol: undefined,
  },
  // 'action 1211'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 40, // Exponent
  },
  // 'action 1212'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 40, // Exponent
  },
  // 'action 1213'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 40, // Exponent
  },
  // 'action 1214'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 40, // Exponent
  },
  // 'action 1215'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 40, // Exponent
  },
  // 'action 1216'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 1217'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 1218'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 1219'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 1220'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 1221'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 1222'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 1223'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 1224'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 1225'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 1226'
  {
    op: 0, // shift
    state: 60, // 'state 60'
    symbol: undefined,
  },
  // 'action 1227'
  {
    op: 0, // shift
    state: 61, // 'state 61'
    symbol: undefined,
  },
  // 'action 1228'
  {
    op: 0, // shift
    state: 131, // 'state 131'
    symbol: undefined,
  },
  // 'action 1229'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 40, // Exponent
  },
  // 'action 1230'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 40, // Exponent
  },
  // 'action 1231'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 40, // Exponent
  },
  // 'action 1232'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 40, // Exponent
  },
  // 'action 1233'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 40, // Exponent
  },
  // 'action 1234'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 1235'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 1236'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 1237'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 1238'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 1239'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 1240'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 1241'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 1242'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 1243'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 1244'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 1245'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 1246'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 1247'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 1248'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 1249'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 1250'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 1251'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 1252'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 1253'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 35, // Digits
  },
  // 'action 1254'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 1255'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 1256'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 1257'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 1258'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 1259'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 1260'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 1261'
  {
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
  },
  // 'action 1262'
  {
    op: 0, // shift
    state: 9, // 'state 9'
    symbol: undefined,
  },
  // 'action 1263'
  {
    op: 0, // shift
    state: 10, // 'state 10'
    symbol: undefined,
  },
  // 'action 1264'
  {
    op: 0, // shift
    state: 192, // 'state 192'
    symbol: undefined,
  },
  // 'action 1265'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 1266'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 1267'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 1268'
  {
    op: 0, // shift
    state: 16, // 'state 16'
    symbol: undefined,
  },
  // 'action 1269'
  {
    op: 0, // shift
    state: 17, // 'state 17'
    symbol: undefined,
  },
  // 'action 1270'
  {
    op: 0, // shift
    state: 18, // 'state 18'
    symbol: undefined,
  },
  // 'action 1271'
  {
    op: 0, // shift
    state: 19, // 'state 19'
    symbol: undefined,
  },
  // 'action 1272'
  {
    op: 0, // shift
    state: 22, // 'state 22'
    symbol: undefined,
  },
  // 'action 1273'
  {
    op: 0, // shift
    state: 193, // 'state 193'
    symbol: undefined,
  },
  // 'action 1274'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Members
  },
  // 'action 1275'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Members
  },
  // 'action 1276'
  {
    op: 0, // shift
    state: 22, // 'state 22'
    symbol: undefined,
  },
  // 'action 1277'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 1278'
  {
    op: 0, // shift
    state: 87, // 'state 87'
    symbol: undefined,
  },
  // 'action 1279'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Member
  },
  // 'action 1280'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Member
  },
  // 'action 1281'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 1282'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 1283'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 1284'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 1285'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 1286'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 1287'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 1288'
  {
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
  },
  // 'action 1289'
  {
    op: 0, // shift
    state: 9, // 'state 9'
    symbol: undefined,
  },
  // 'action 1290'
  {
    op: 0, // shift
    state: 10, // 'state 10'
    symbol: undefined,
  },
  // 'action 1291'
  {
    op: 0, // shift
    state: 194, // 'state 194'
    symbol: undefined,
  },
  // 'action 1292'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 1293'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 1294'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 1295'
  {
    op: 0, // shift
    state: 16, // 'state 16'
    symbol: undefined,
  },
  // 'action 1296'
  {
    op: 0, // shift
    state: 17, // 'state 17'
    symbol: undefined,
  },
  // 'action 1297'
  {
    op: 0, // shift
    state: 18, // 'state 18'
    symbol: undefined,
  },
  // 'action 1298'
  {
    op: 0, // shift
    state: 19, // 'state 19'
    symbol: undefined,
  },
  // 'action 1299'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Elements
  },
  // 'action 1300'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Elements
  },
  // 'action 1301'
  {
    op: 0, // shift
    state: 60, // 'state 60'
    symbol: undefined,
  },
  // 'action 1302'
  {
    op: 0, // shift
    state: 61, // 'state 61'
    symbol: undefined,
  },
  // 'action 1303'
  {
    op: 0, // shift
    state: 131, // 'state 131'
    symbol: undefined,
  },
  // 'action 1304'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 40, // Exponent
  },
  // 'action 1305'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 40, // Exponent
  },
  // 'action 1306'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 40, // Exponent
  },
  // 'action 1307'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 40, // Exponent
  },
  // 'action 1308'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 40, // Exponent
  },
  // 'action 1309'
  {
    op: 0, // shift
    state: 60, // 'state 60'
    symbol: undefined,
  },
  // 'action 1310'
  {
    op: 0, // shift
    state: 61, // 'state 61'
    symbol: undefined,
  },
  // 'action 1311'
  {
    op: 0, // shift
    state: 131, // 'state 131'
    symbol: undefined,
  },
  // 'action 1312'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 40, // Exponent
  },
  // 'action 1313'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 40, // Exponent
  },
  // 'action 1314'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 40, // Exponent
  },
  // 'action 1315'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 40, // Exponent
  },
  // 'action 1316'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 40, // Exponent
  },
  // 'action 1317'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Member
  },
  // 'action 1318'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Member
  },
  // 'action 1319'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 1320'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 1321'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 1322'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 1323'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 1324'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 1325'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 1326'
  {
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
  },
  // 'action 1327'
  {
    op: 0, // shift
    state: 9, // 'state 9'
    symbol: undefined,
  },
  // 'action 1328'
  {
    op: 0, // shift
    state: 10, // 'state 10'
    symbol: undefined,
  },
  // 'action 1329'
  {
    op: 0, // shift
    state: 195, // 'state 195'
    symbol: undefined,
  },
  // 'action 1330'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 1331'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 1332'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 1333'
  {
    op: 0, // shift
    state: 16, // 'state 16'
    symbol: undefined,
  },
  // 'action 1334'
  {
    op: 0, // shift
    state: 17, // 'state 17'
    symbol: undefined,
  },
  // 'action 1335'
  {
    op: 0, // shift
    state: 18, // 'state 18'
    symbol: undefined,
  },
  // 'action 1336'
  {
    op: 0, // shift
    state: 19, // 'state 19'
    symbol: undefined,
  },
  // 'action 1337'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Member
  },
  // 'action 1338'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Member
  },
  // 'action 1339'
  {
    op: 0, // shift
    state: 60, // 'state 60'
    symbol: undefined,
  },
  // 'action 1340'
  {
    op: 0, // shift
    state: 61, // 'state 61'
    symbol: undefined,
  },
  // 'action 1341'
  {
    op: 0, // shift
    state: 131, // 'state 131'
    symbol: undefined,
  },
  // 'action 1342'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 40, // Exponent
  },
  // 'action 1343'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 40, // Exponent
  },
  // 'action 1344'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 40, // Exponent
  },
  // 'action 1345'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 40, // Exponent
  },
  // 'action 1346'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 40, // Exponent
  },
  // 'action 1347'
  {
    op: 0, // shift
    state: 60, // 'state 60'
    symbol: undefined,
  },
  // 'action 1348'
  {
    op: 0, // shift
    state: 61, // 'state 61'
    symbol: undefined,
  },
  // 'action 1349'
  {
    op: 0, // shift
    state: 131, // 'state 131'
    symbol: undefined,
  },
  // 'action 1350'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 40, // Exponent
  },
  // 'action 1351'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 40, // Exponent
  },
  // 'action 1352'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 40, // Exponent
  },
  // 'action 1353'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 40, // Exponent
  },
  // 'action 1354'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 40, // Exponent
  },
  // 'action 1355'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Member
  },
  // 'action 1356'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Member
  },
  // 'action 1357'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 1358'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 1359'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 1360'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 1361'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 1362'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 1363'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 1364'
  {
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
  },
  // 'action 1365'
  {
    op: 0, // shift
    state: 9, // 'state 9'
    symbol: undefined,
  },
  // 'action 1366'
  {
    op: 0, // shift
    state: 10, // 'state 10'
    symbol: undefined,
  },
  // 'action 1367'
  {
    op: 0, // shift
    state: 196, // 'state 196'
    symbol: undefined,
  },
  // 'action 1368'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 1369'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 1370'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 1371'
  {
    op: 0, // shift
    state: 16, // 'state 16'
    symbol: undefined,
  },
  // 'action 1372'
  {
    op: 0, // shift
    state: 17, // 'state 17'
    symbol: undefined,
  },
  // 'action 1373'
  {
    op: 0, // shift
    state: 18, // 'state 18'
    symbol: undefined,
  },
  // 'action 1374'
  {
    op: 0, // shift
    state: 19, // 'state 19'
    symbol: undefined,
  },
  // 'action 1375'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Member
  },
  // 'action 1376'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Member
  },
  // 'action 1377'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Member
  },
  // 'action 1378'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Member
  },
  // 'action 1379'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Member
  },
  // 'action 1380'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Member
  },
];
const actionsTable = new Uint16Array(7486).fill(0xffff);
actionsTable[2] = 0; // 'state 0' -> WS -> shift -> 'action 0'
actionsTable[3] = 1; // 'state 0' -> TRUE -> shift -> 'action 1'
actionsTable[4] = 2; // 'state 0' -> FALSE -> shift -> 'action 2'
actionsTable[5] = 3; // 'state 0' -> NULL -> shift -> 'action 3'
actionsTable[6] = 4; // 'state 0' -> CURLY_OPEN -> shift -> 'action 4'
actionsTable[10] = 5; // 'state 0' -> STRING -> shift -> 'action 5'
actionsTable[11] = 6; // 'state 0' -> BRACKET_OPEN -> shift -> 'action 6'
actionsTable[13] = 7; // 'state 0' -> ZERO -> shift -> 'action 7'
actionsTable[14] = 8; // 'state 0' -> ONE_NINE -> shift -> 'action 8'
actionsTable[19] = 9; // 'state 0' -> MINUS -> shift -> 'action 9'
actionsTable[21] = 10; // 'state 0' -> Json -> shift -> 'action 10'
actionsTable[22] = 11; // 'state 0' -> Element -> shift -> 'action 11'
actionsTable[23] = 12; // 'state 0' -> Value -> shift -> 'action 12'
actionsTable[24] = 13; // 'state 0' -> Object -> shift -> 'action 13'
actionsTable[27] = 14; // 'state 0' -> String -> shift -> 'action 14'
actionsTable[28] = 15; // 'state 0' -> Array -> shift -> 'action 15'
actionsTable[30] = 16; // 'state 0' -> Number -> shift -> 'action 16'
actionsTable[31] = 17; // 'state 0' -> Integer -> shift -> 'action 17'
actionsTable[37] = 18; // 'state 0' -> Spaces -> shift -> 'action 18'
actionsTable[418] = 19; // 'state 11' -> @expound.EOF -> done -> 'action 19'
actionsTable[456] = 20; // 'state 12' -> @expound.EOF -> reduce -> 'action 20'
actionsTable[496] = 21; // 'state 13' -> WS -> shift -> 'action 21'
actionsTable[531] = 22; // 'state 13' -> Spaces -> shift -> 'action 22'
actionsTable[494] = 23; // 'state 13' -> @expound.EOF -> reduce -> 'action 23'
actionsTable[501] = 24; // 'state 13' -> CURLY_CLOSE -> reduce -> 'action 24'
actionsTable[502] = 25; // 'state 13' -> COMMA -> reduce -> 'action 25'
actionsTable[506] = 26; // 'state 13' -> BRACKET_CLOSE -> reduce -> 'action 26'
actionsTable[724] = 27; // 'state 19' -> WS -> shift -> 'action 27'
actionsTable[725] = 28; // 'state 19' -> TRUE -> shift -> 'action 28'
actionsTable[726] = 29; // 'state 19' -> FALSE -> shift -> 'action 29'
actionsTable[727] = 30; // 'state 19' -> NULL -> shift -> 'action 30'
actionsTable[728] = 31; // 'state 19' -> CURLY_OPEN -> shift -> 'action 31'
actionsTable[732] = 32; // 'state 19' -> STRING -> shift -> 'action 32'
actionsTable[733] = 33; // 'state 19' -> BRACKET_OPEN -> shift -> 'action 33'
actionsTable[735] = 34; // 'state 19' -> ZERO -> shift -> 'action 34'
actionsTable[736] = 35; // 'state 19' -> ONE_NINE -> shift -> 'action 35'
actionsTable[741] = 36; // 'state 19' -> MINUS -> shift -> 'action 36'
actionsTable[745] = 37; // 'state 19' -> Value -> shift -> 'action 37'
actionsTable[746] = 38; // 'state 19' -> Object -> shift -> 'action 38'
actionsTable[749] = 39; // 'state 19' -> String -> shift -> 'action 39'
actionsTable[750] = 40; // 'state 19' -> Array -> shift -> 'action 40'
actionsTable[752] = 41; // 'state 19' -> Number -> shift -> 'action 41'
actionsTable[753] = 42; // 'state 19' -> Integer -> shift -> 'action 42'
actionsTable[532] = 43; // 'state 14' -> @expound.EOF -> reduce -> 'action 43'
actionsTable[534] = 44; // 'state 14' -> WS -> reduce -> 'action 44'
actionsTable[539] = 45; // 'state 14' -> CURLY_CLOSE -> reduce -> 'action 45'
actionsTable[540] = 46; // 'state 14' -> COMMA -> reduce -> 'action 46'
actionsTable[544] = 47; // 'state 14' -> BRACKET_CLOSE -> reduce -> 'action 47'
actionsTable[608] = 48; // 'state 16' -> @expound.EOF -> reduce -> 'action 48'
actionsTable[610] = 49; // 'state 16' -> WS -> reduce -> 'action 49'
actionsTable[615] = 50; // 'state 16' -> CURLY_CLOSE -> reduce -> 'action 50'
actionsTable[616] = 51; // 'state 16' -> COMMA -> reduce -> 'action 51'
actionsTable[620] = 52; // 'state 16' -> BRACKET_CLOSE -> reduce -> 'action 52'
actionsTable[570] = 53; // 'state 15' -> @expound.EOF -> reduce -> 'action 53'
actionsTable[572] = 54; // 'state 15' -> WS -> reduce -> 'action 54'
actionsTable[577] = 55; // 'state 15' -> CURLY_CLOSE -> reduce -> 'action 55'
actionsTable[578] = 56; // 'state 15' -> COMMA -> reduce -> 'action 56'
actionsTable[582] = 57; // 'state 15' -> BRACKET_CLOSE -> reduce -> 'action 57'
actionsTable[646] = 58; // 'state 17' -> @expound.EOF -> reduce -> 'action 58'
actionsTable[648] = 59; // 'state 17' -> WS -> reduce -> 'action 59'
actionsTable[653] = 60; // 'state 17' -> CURLY_CLOSE -> reduce -> 'action 60'
actionsTable[654] = 61; // 'state 17' -> COMMA -> reduce -> 'action 61'
actionsTable[658] = 62; // 'state 17' -> BRACKET_CLOSE -> reduce -> 'action 62'
actionsTable[76] = 63; // 'state 2' -> @expound.EOF -> reduce -> 'action 63'
