import { next as nextTokenInitial } from "./lexer-initial.js";

/*
      Json := Element;
Element := Value;
Element := Value WS;
Element := WS Value;
Element := WS Value WS;
Value := Object;
Value := Array;
Value := STRING;
Value := NUMBER;
Value := TRUE;
Value := FALSE;
Value := NULL;
Object := CURLY_OPEN CURLY_CLOSE;
Object := CURLY_OPEN WS CURLY_CLOSE;
Object := CURLY_OPEN Members CURLY_CLOSE;
Members := Member;
Members := Members COMMA Member;
Member := STRING COLON Element;
Member := STRING WS COLON Element;
Member := WS STRING COLON Element;
Member := WS STRING WS COLON Element;
Array := BRACKET_OPEN BRACKET_CLOSE;
Array := BRACKET_OPEN WS BRACKET_CLOSE;
Array := BRACKET_OPEN Elements BRACKET_CLOSE;
Elements := Element;
Elements := Elements COMMA Element;
      */

const states = [
  // 'state 0'
  new Set([
    {
      name: "S",
      tokens: ["Json"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Json",
      tokens: ["Element"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "WS"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "WS"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "WS"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "WS"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
  ]),

  // 'state 1'
  new Set([
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 1,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 1,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 1,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 1,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 1,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 1,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 1,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 1,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
  ]),

  // 'state 2'
  new Set([
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 1,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 1,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 1,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 1,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 1,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
  ]),

  // 'state 3'
  new Set([
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 1,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 1,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 1,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 1,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 1,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
  ]),

  // 'state 4'
  new Set([
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 1,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 1,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 1,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 1,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 1,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
  ]),

  // 'state 5'
  new Set([
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 1,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 1,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 1,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 1,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 1,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 1,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 1,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 1,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 1,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 1,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 1,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 1,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 1,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 1,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 1,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Members",
      tokens: ["Member"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Members",
      tokens: ["Member"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Members",
      tokens: ["Members", "COMMA", "Member"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Members",
      tokens: ["Members", "COMMA", "Member"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["STRING", "COLON", "Element"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["STRING", "COLON", "Element"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["STRING", "WS", "COLON", "Element"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["STRING", "WS", "COLON", "Element"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["WS", "STRING", "COLON", "Element"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["WS", "STRING", "COLON", "Element"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["WS", "STRING", "WS", "COLON", "Element"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["WS", "STRING", "WS", "COLON", "Element"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
  ]),

  // 'state 6'
  new Set([
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 1,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 1,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 1,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 1,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 1,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
  ]),

  // 'state 7'
  new Set([
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 1,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 1,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 1,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 1,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 1,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 1,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 1,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 1,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 1,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 1,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 1,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 1,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 1,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 1,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 1,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Elements",
      tokens: ["Element"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Elements",
      tokens: ["Element"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Elements",
      tokens: ["Elements", "COMMA", "Element"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Elements",
      tokens: ["Elements", "COMMA", "Element"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "WS"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "WS"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "WS"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "WS"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
  ]),

  // 'state 8'
  new Set([
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 1,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 1,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 1,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 1,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 1,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
  ]),

  // 'state 9'
  new Set([
    {
      name: "S",
      tokens: ["Json"],
      marker: 1,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
  ]),

  // 'state 10'
  new Set([
    {
      name: "Json",
      tokens: ["Element"],
      marker: 1,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
  ]),

  // 'state 11'
  new Set([
    {
      name: "Element",
      tokens: ["Value"],
      marker: 1,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 1,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 1,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 1,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "WS"],
      marker: 1,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "WS"],
      marker: 1,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "WS"],
      marker: 1,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "WS"],
      marker: 1,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
  ]),

  // 'state 12'
  new Set([
    {
      name: "Value",
      tokens: ["Object"],
      marker: 1,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 1,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 1,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 1,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 1,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
  ]),

  // 'state 13'
  new Set([
    {
      name: "Value",
      tokens: ["Array"],
      marker: 1,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 1,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 1,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 1,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 1,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
  ]),

  // 'state 14'
  new Set([
    {
      name: "Element",
      tokens: ["Value", "WS"],
      marker: 2,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "WS"],
      marker: 2,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "WS"],
      marker: 2,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "WS"],
      marker: 2,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
  ]),

  // 'state 15'
  new Set([
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 1,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 1,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 1,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 1,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 1,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
  ]),

  // 'state 16'
  new Set([
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 1,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 1,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 1,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 1,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 1,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
  ]),

  // 'state 17'
  new Set([
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 1,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 1,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 1,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 1,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 1,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
  ]),

  // 'state 18'
  new Set([
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 1,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 1,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 1,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 1,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 1,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 1,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 1,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 1,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 1,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 1,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 1,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 1,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 1,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 1,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 1,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Members",
      tokens: ["Member"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Members",
      tokens: ["Member"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Members",
      tokens: ["Members", "COMMA", "Member"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Members",
      tokens: ["Members", "COMMA", "Member"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["STRING", "COLON", "Element"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["STRING", "COLON", "Element"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["STRING", "WS", "COLON", "Element"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["STRING", "WS", "COLON", "Element"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["WS", "STRING", "COLON", "Element"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["WS", "STRING", "COLON", "Element"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["WS", "STRING", "WS", "COLON", "Element"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["WS", "STRING", "WS", "COLON", "Element"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
  ]),

  // 'state 19'
  new Set([
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 1,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 1,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 1,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 1,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 1,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
  ]),

  // 'state 20'
  new Set([
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 1,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 1,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 1,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 1,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 1,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 1,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 1,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 1,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 1,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 1,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 1,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 1,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 1,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 1,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 1,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Elements",
      tokens: ["Element"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Elements",
      tokens: ["Element"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Elements",
      tokens: ["Elements", "COMMA", "Element"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Elements",
      tokens: ["Elements", "COMMA", "Element"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "WS"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "WS"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "WS"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "WS"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
  ]),

  // 'state 21'
  new Set([
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 1,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 1,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 1,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 1,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 1,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
  ]),

  // 'state 22'
  new Set([
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 2,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 2,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 2,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 2,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 2,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 2,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 2,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 2,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
  ]),

  // 'state 23'
  new Set([
    {
      name: "Value",
      tokens: ["Object"],
      marker: 1,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 1,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 1,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 1,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 1,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
  ]),

  // 'state 24'
  new Set([
    {
      name: "Value",
      tokens: ["Array"],
      marker: 1,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 1,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 1,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 1,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 1,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
  ]),

  // 'state 25'
  new Set([
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 2,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 2,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 2,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 2,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 2,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["WS", "STRING", "COLON", "Element"],
      marker: 1,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["WS", "STRING", "COLON", "Element"],
      marker: 1,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["WS", "STRING", "WS", "COLON", "Element"],
      marker: 1,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["WS", "STRING", "WS", "COLON", "Element"],
      marker: 1,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
  ]),

  // 'state 26'
  new Set([
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 2,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 2,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 2,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 2,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 2,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
  ]),

  // 'state 27'
  new Set([
    {
      name: "Member",
      tokens: ["STRING", "COLON", "Element"],
      marker: 1,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["STRING", "COLON", "Element"],
      marker: 1,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["STRING", "WS", "COLON", "Element"],
      marker: 1,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["STRING", "WS", "COLON", "Element"],
      marker: 1,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
  ]),

  // 'state 28'
  new Set([
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 2,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 2,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 2,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 2,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 2,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Members",
      tokens: ["Members", "COMMA", "Member"],
      marker: 1,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Members",
      tokens: ["Members", "COMMA", "Member"],
      marker: 1,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
  ]),

  // 'state 29'
  new Set([
    {
      name: "Members",
      tokens: ["Member"],
      marker: 1,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Members",
      tokens: ["Member"],
      marker: 1,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
  ]),

  // 'state 30'
  new Set([
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 2,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 2,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 2,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 2,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 2,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 1,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 1,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 1,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 1,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 1,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 1,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 1,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 1,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
  ]),

  // 'state 31'
  new Set([
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 2,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 2,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 2,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 2,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 2,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
  ]),

  // 'state 32'
  new Set([
    {
      name: "Elements",
      tokens: ["Element"],
      marker: 1,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Elements",
      tokens: ["Element"],
      marker: 1,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
  ]),

  // 'state 33'
  new Set([
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 2,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 2,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 2,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 2,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 2,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Elements",
      tokens: ["Elements", "COMMA", "Element"],
      marker: 1,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Elements",
      tokens: ["Elements", "COMMA", "Element"],
      marker: 1,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
  ]),

  // 'state 34'
  new Set([
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 3,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 3,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 3,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 3,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
  ]),

  // 'state 35'
  new Set([
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 2,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 2,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 2,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 2,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 2,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["WS", "STRING", "COLON", "Element"],
      marker: 1,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["WS", "STRING", "COLON", "Element"],
      marker: 1,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["WS", "STRING", "WS", "COLON", "Element"],
      marker: 1,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["WS", "STRING", "WS", "COLON", "Element"],
      marker: 1,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
  ]),

  // 'state 36'
  new Set([
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 2,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 2,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 2,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 2,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 2,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
  ]),

  // 'state 37'
  new Set([
    {
      name: "Member",
      tokens: ["STRING", "COLON", "Element"],
      marker: 1,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["STRING", "COLON", "Element"],
      marker: 1,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["STRING", "WS", "COLON", "Element"],
      marker: 1,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["STRING", "WS", "COLON", "Element"],
      marker: 1,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
  ]),

  // 'state 38'
  new Set([
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 2,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 2,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 2,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 2,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 2,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Members",
      tokens: ["Members", "COMMA", "Member"],
      marker: 1,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Members",
      tokens: ["Members", "COMMA", "Member"],
      marker: 1,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
  ]),

  // 'state 39'
  new Set([
    {
      name: "Members",
      tokens: ["Member"],
      marker: 1,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Members",
      tokens: ["Member"],
      marker: 1,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
  ]),

  // 'state 40'
  new Set([
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 2,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 2,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 2,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 2,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 2,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 1,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 1,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 1,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 1,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 1,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 1,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 1,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 1,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
  ]),

  // 'state 41'
  new Set([
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 2,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 2,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 2,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 2,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 2,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
  ]),

  // 'state 42'
  new Set([
    {
      name: "Elements",
      tokens: ["Element"],
      marker: 1,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Elements",
      tokens: ["Element"],
      marker: 1,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
  ]),

  // 'state 43'
  new Set([
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 2,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 2,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 2,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 2,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 2,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Elements",
      tokens: ["Elements", "COMMA", "Element"],
      marker: 1,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Elements",
      tokens: ["Elements", "COMMA", "Element"],
      marker: 1,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
  ]),

  // 'state 44'
  new Set([
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 3,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 3,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 3,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 3,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 3,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
  ]),

  // 'state 45'
  new Set([
    {
      name: "Member",
      tokens: ["WS", "STRING", "COLON", "Element"],
      marker: 2,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["WS", "STRING", "COLON", "Element"],
      marker: 2,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["WS", "STRING", "WS", "COLON", "Element"],
      marker: 2,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["WS", "STRING", "WS", "COLON", "Element"],
      marker: 2,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
  ]),

  // 'state 46'
  new Set([
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 3,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 3,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 3,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 3,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 3,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
  ]),

  // 'state 47'
  new Set([
    {
      name: "Members",
      tokens: ["Members", "COMMA", "Member"],
      marker: 2,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Members",
      tokens: ["Members", "COMMA", "Member"],
      marker: 2,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["STRING", "COLON", "Element"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["STRING", "COLON", "Element"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["STRING", "WS", "COLON", "Element"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["STRING", "WS", "COLON", "Element"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["WS", "STRING", "COLON", "Element"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["WS", "STRING", "COLON", "Element"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["WS", "STRING", "WS", "COLON", "Element"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["WS", "STRING", "WS", "COLON", "Element"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
  ]),

  // 'state 48'
  new Set([
    {
      name: "Member",
      tokens: ["STRING", "WS", "COLON", "Element"],
      marker: 2,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["STRING", "WS", "COLON", "Element"],
      marker: 2,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
  ]),

  // 'state 49'
  new Set([
    {
      name: "Member",
      tokens: ["STRING", "COLON", "Element"],
      marker: 2,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["STRING", "COLON", "Element"],
      marker: 2,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "WS"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "WS"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "WS"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "WS"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
  ]),

  // 'state 50'
  new Set([
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 3,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 3,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 3,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 3,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 3,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
  ]),

  // 'state 51'
  new Set([
    {
      name: "Elements",
      tokens: ["Elements", "COMMA", "Element"],
      marker: 2,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Elements",
      tokens: ["Elements", "COMMA", "Element"],
      marker: 2,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "WS"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "WS"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "WS"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "WS"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
  ]),

  // 'state 52'
  new Set([
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 3,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 3,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 3,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 3,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 3,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
  ]),

  // 'state 53'
  new Set([
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 3,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 3,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 3,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 3,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 3,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
  ]),

  // 'state 54'
  new Set([
    {
      name: "Member",
      tokens: ["WS", "STRING", "COLON", "Element"],
      marker: 2,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["WS", "STRING", "COLON", "Element"],
      marker: 2,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["WS", "STRING", "WS", "COLON", "Element"],
      marker: 2,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["WS", "STRING", "WS", "COLON", "Element"],
      marker: 2,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
  ]),

  // 'state 55'
  new Set([
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 3,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 3,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 3,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 3,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 3,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
  ]),

  // 'state 56'
  new Set([
    {
      name: "Members",
      tokens: ["Members", "COMMA", "Member"],
      marker: 2,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Members",
      tokens: ["Members", "COMMA", "Member"],
      marker: 2,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["STRING", "COLON", "Element"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["STRING", "COLON", "Element"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["STRING", "WS", "COLON", "Element"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["STRING", "WS", "COLON", "Element"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["WS", "STRING", "COLON", "Element"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["WS", "STRING", "COLON", "Element"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["WS", "STRING", "WS", "COLON", "Element"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["WS", "STRING", "WS", "COLON", "Element"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
  ]),

  // 'state 57'
  new Set([
    {
      name: "Member",
      tokens: ["STRING", "WS", "COLON", "Element"],
      marker: 2,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["STRING", "WS", "COLON", "Element"],
      marker: 2,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
  ]),

  // 'state 58'
  new Set([
    {
      name: "Member",
      tokens: ["STRING", "COLON", "Element"],
      marker: 2,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["STRING", "COLON", "Element"],
      marker: 2,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "WS"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "WS"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "WS"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "WS"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
  ]),

  // 'state 59'
  new Set([
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 3,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 3,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 3,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 3,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 3,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
  ]),

  // 'state 60'
  new Set([
    {
      name: "Elements",
      tokens: ["Elements", "COMMA", "Element"],
      marker: 2,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Elements",
      tokens: ["Elements", "COMMA", "Element"],
      marker: 2,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "WS"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "WS"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "WS"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "WS"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
  ]),

  // 'state 61'
  new Set([
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 3,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 3,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 3,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 3,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 3,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
  ]),

  // 'state 62'
  new Set([
    {
      name: "Member",
      tokens: ["WS", "STRING", "WS", "COLON", "Element"],
      marker: 3,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["WS", "STRING", "WS", "COLON", "Element"],
      marker: 3,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
  ]),

  // 'state 63'
  new Set([
    {
      name: "Member",
      tokens: ["WS", "STRING", "COLON", "Element"],
      marker: 3,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["WS", "STRING", "COLON", "Element"],
      marker: 3,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "WS"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "WS"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "WS"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "WS"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
  ]),

  // 'state 64'
  new Set([
    {
      name: "Member",
      tokens: ["WS", "STRING", "COLON", "Element"],
      marker: 1,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["WS", "STRING", "COLON", "Element"],
      marker: 1,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["WS", "STRING", "WS", "COLON", "Element"],
      marker: 1,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["WS", "STRING", "WS", "COLON", "Element"],
      marker: 1,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
  ]),

  // 'state 65'
  new Set([
    {
      name: "Members",
      tokens: ["Members", "COMMA", "Member"],
      marker: 3,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Members",
      tokens: ["Members", "COMMA", "Member"],
      marker: 3,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
  ]),

  // 'state 66'
  new Set([
    {
      name: "Member",
      tokens: ["STRING", "COLON", "Element"],
      marker: 3,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["STRING", "COLON", "Element"],
      marker: 3,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
  ]),

  // 'state 67'
  new Set([
    {
      name: "Member",
      tokens: ["STRING", "WS", "COLON", "Element"],
      marker: 3,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["STRING", "WS", "COLON", "Element"],
      marker: 3,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "WS"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "WS"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "WS"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "WS"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
  ]),

  // 'state 68'
  new Set([
    {
      name: "Elements",
      tokens: ["Elements", "COMMA", "Element"],
      marker: 3,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Elements",
      tokens: ["Elements", "COMMA", "Element"],
      marker: 3,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
  ]),

  // 'state 69'
  new Set([
    {
      name: "Member",
      tokens: ["WS", "STRING", "WS", "COLON", "Element"],
      marker: 3,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["WS", "STRING", "WS", "COLON", "Element"],
      marker: 3,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
  ]),

  // 'state 70'
  new Set([
    {
      name: "Member",
      tokens: ["WS", "STRING", "COLON", "Element"],
      marker: 3,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["WS", "STRING", "COLON", "Element"],
      marker: 3,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "WS"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "WS"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "WS"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "WS"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
  ]),

  // 'state 71'
  new Set([
    {
      name: "Member",
      tokens: ["WS", "STRING", "COLON", "Element"],
      marker: 1,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["WS", "STRING", "COLON", "Element"],
      marker: 1,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["WS", "STRING", "WS", "COLON", "Element"],
      marker: 1,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["WS", "STRING", "WS", "COLON", "Element"],
      marker: 1,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
  ]),

  // 'state 72'
  new Set([
    {
      name: "Members",
      tokens: ["Members", "COMMA", "Member"],
      marker: 3,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Members",
      tokens: ["Members", "COMMA", "Member"],
      marker: 3,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
  ]),

  // 'state 73'
  new Set([
    {
      name: "Member",
      tokens: ["STRING", "COLON", "Element"],
      marker: 3,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["STRING", "COLON", "Element"],
      marker: 3,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
  ]),

  // 'state 74'
  new Set([
    {
      name: "Member",
      tokens: ["STRING", "WS", "COLON", "Element"],
      marker: 3,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["STRING", "WS", "COLON", "Element"],
      marker: 3,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "WS"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "WS"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "WS"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "WS"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
  ]),

  // 'state 75'
  new Set([
    {
      name: "Elements",
      tokens: ["Elements", "COMMA", "Element"],
      marker: 3,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Elements",
      tokens: ["Elements", "COMMA", "Element"],
      marker: 3,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
  ]),

  // 'state 76'
  new Set([
    {
      name: "Member",
      tokens: ["WS", "STRING", "COLON", "Element"],
      marker: 4,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["WS", "STRING", "COLON", "Element"],
      marker: 4,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
  ]),

  // 'state 77'
  new Set([
    {
      name: "Member",
      tokens: ["WS", "STRING", "WS", "COLON", "Element"],
      marker: 4,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["WS", "STRING", "WS", "COLON", "Element"],
      marker: 4,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "WS"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "WS"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "WS"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "WS"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
  ]),

  // 'state 78'
  new Set([
    {
      name: "Member",
      tokens: ["STRING", "WS", "COLON", "Element"],
      marker: 4,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["STRING", "WS", "COLON", "Element"],
      marker: 4,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
  ]),

  // 'state 79'
  new Set([
    {
      name: "Member",
      tokens: ["WS", "STRING", "COLON", "Element"],
      marker: 4,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["WS", "STRING", "COLON", "Element"],
      marker: 4,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
  ]),

  // 'state 80'
  new Set([
    {
      name: "Member",
      tokens: ["WS", "STRING", "WS", "COLON", "Element"],
      marker: 4,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["WS", "STRING", "WS", "COLON", "Element"],
      marker: 4,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "WS"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "WS"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "WS"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["Value", "WS"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Object"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["Array"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["STRING"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NUMBER"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["TRUE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["FALSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Value",
      tokens: ["NULL"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 0, // @expound.EOF
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 12, // BRACKET_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: 2, // WS
      semanticAction: undefined,
    },
  ]),

  // 'state 81'
  new Set([
    {
      name: "Member",
      tokens: ["STRING", "WS", "COLON", "Element"],
      marker: 4,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["STRING", "WS", "COLON", "Element"],
      marker: 4,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
  ]),

  // 'state 82'
  new Set([
    {
      name: "Member",
      tokens: ["WS", "STRING", "WS", "COLON", "Element"],
      marker: 5,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["WS", "STRING", "WS", "COLON", "Element"],
      marker: 5,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
  ]),

  // 'state 83'
  new Set([
    {
      name: "Member",
      tokens: ["WS", "STRING", "WS", "COLON", "Element"],
      marker: 5,
      lookahead: 7, // CURLY_CLOSE
      semanticAction: undefined,
    },
    {
      name: "Member",
      tokens: ["WS", "STRING", "WS", "COLON", "Element"],
      marker: 5,
      lookahead: 8, // COMMA
      semanticAction: undefined,
    },
  ]),
];

const parserSymbols = [
  "@expound.EOF", // 0
  "@expound.ERROR", // 1
  "WS", // 2
  "TRUE", // 72
  "FALSE", // 94
  "NULL", // 73
  "CURLY_OPEN", // 7
  "CURLY_CLOSE", // 8
  "COMMA", // 9
  "COLON", // 10
  "STRING", // 31
  "BRACKET_OPEN", // 25
  "BRACKET_CLOSE", // 26
  "ZERO", // -1
  "ONE_NINE", // -1
  "DOT", // 13
  "UPPER_E", // 24
  "LOWER_E", // 6
  "PLUS", // 11
  "MINUS", // -1
  "NUMBER", // 12
  "S", // -1
  "Json", // -1
  "Element", // -1
  "Value", // -1
  "Object", // -1
  "Members", // -1
  "Member", // -1
  "Array", // -1
  "Elements", // -1
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
  "Array",
  "Array",
  "Array",
  "Elements",
  "Elements",
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
    op: 2, // done
    state: undefined,
    symbol: undefined,
  },
  // 'action 14'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 0, // Json
  },
  // 'action 15'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 16'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 1, // Element
  },
  // 'action 17'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 1, // Element
  },
  // 'action 18'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 1, // Element
  },
  // 'action 19'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 1, // Element
  },
  // 'action 20'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 21'
  {
    op: 0, // shift
    state: 16, // 'state 16'
    symbol: undefined,
  },
  // 'action 22'
  {
    op: 0, // shift
    state: 17, // 'state 17'
    symbol: undefined,
  },
  // 'action 23'
  {
    op: 0, // shift
    state: 18, // 'state 18'
    symbol: undefined,
  },
  // 'action 24'
  {
    op: 0, // shift
    state: 19, // 'state 19'
    symbol: undefined,
  },
  // 'action 25'
  {
    op: 0, // shift
    state: 20, // 'state 20'
    symbol: undefined,
  },
  // 'action 26'
  {
    op: 0, // shift
    state: 21, // 'state 21'
    symbol: undefined,
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
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 31'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 32'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 33'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 34'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 35'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 36'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 37'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 38'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 39'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 40'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 41'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 42'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
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
    op: 0, // shift
    state: 25, // 'state 25'
    symbol: undefined,
  },
  // 'action 66'
  {
    op: 0, // shift
    state: 26, // 'state 26'
    symbol: undefined,
  },
  // 'action 67'
  {
    op: 0, // shift
    state: 27, // 'state 27'
    symbol: undefined,
  },
  // 'action 68'
  {
    op: 0, // shift
    state: 28, // 'state 28'
    symbol: undefined,
  },
  // 'action 69'
  {
    op: 0, // shift
    state: 29, // 'state 29'
    symbol: undefined,
  },
  // 'action 70'
  {
    op: 0, // shift
    state: 30, // 'state 30'
    symbol: undefined,
  },
  // 'action 71'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 72'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 73'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 74'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 75'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 76'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 77'
  {
    op: 0, // shift
    state: 31, // 'state 31'
    symbol: undefined,
  },
  // 'action 78'
  {
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
  },
  // 'action 79'
  {
    op: 0, // shift
    state: 32, // 'state 32'
    symbol: undefined,
  },
  // 'action 80'
  {
    op: 0, // shift
    state: 11, // 'state 11'
    symbol: undefined,
  },
  // 'action 81'
  {
    op: 0, // shift
    state: 12, // 'state 12'
    symbol: undefined,
  },
  // 'action 82'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 83'
  {
    op: 0, // shift
    state: 33, // 'state 33'
    symbol: undefined,
  },
  // 'action 84'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 1, // Element
  },
  // 'action 85'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 1, // Element
  },
  // 'action 86'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 1, // Element
  },
  // 'action 87'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 1, // Element
  },
  // 'action 88'
  {
    op: 0, // shift
    state: 34, // 'state 34'
    symbol: undefined,
  },
  // 'action 89'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 1, // Element
  },
  // 'action 90'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 1, // Element
  },
  // 'action 91'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 1, // Element
  },
  // 'action 92'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 1, // Element
  },
  // 'action 93'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 94'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 95'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 96'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 97'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 98'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 99'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 100'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 101'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 102'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 103'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 104'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 105'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 106'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 107'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 108'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 109'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 110'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 111'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 112'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 113'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 114'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 115'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 116'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 117'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 118'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 119'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 120'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 121'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 122'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 123'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 124'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 125'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 126'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 127'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 5, // Value
  },
  // 'action 128'
  {
    op: 0, // shift
    state: 35, // 'state 35'
    symbol: undefined,
  },
  // 'action 129'
  {
    op: 0, // shift
    state: 36, // 'state 36'
    symbol: undefined,
  },
  // 'action 130'
  {
    op: 0, // shift
    state: 37, // 'state 37'
    symbol: undefined,
  },
  // 'action 131'
  {
    op: 0, // shift
    state: 38, // 'state 38'
    symbol: undefined,
  },
  // 'action 132'
  {
    op: 0, // shift
    state: 39, // 'state 39'
    symbol: undefined,
  },
  // 'action 133'
  {
    op: 0, // shift
    state: 40, // 'state 40'
    symbol: undefined,
  },
  // 'action 134'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 135'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 136'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 137'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 138'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 139'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 140'
  {
    op: 0, // shift
    state: 41, // 'state 41'
    symbol: undefined,
  },
  // 'action 141'
  {
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
  },
  // 'action 142'
  {
    op: 0, // shift
    state: 42, // 'state 42'
    symbol: undefined,
  },
  // 'action 143'
  {
    op: 0, // shift
    state: 11, // 'state 11'
    symbol: undefined,
  },
  // 'action 144'
  {
    op: 0, // shift
    state: 12, // 'state 12'
    symbol: undefined,
  },
  // 'action 145'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 146'
  {
    op: 0, // shift
    state: 43, // 'state 43'
    symbol: undefined,
  },
  // 'action 147'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Object
  },
  // 'action 148'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Object
  },
  // 'action 149'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Object
  },
  // 'action 150'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Object
  },
  // 'action 151'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Object
  },
  // 'action 152'
  {
    op: 0, // shift
    state: 44, // 'state 44'
    symbol: undefined,
  },
  // 'action 153'
  {
    op: 0, // shift
    state: 45, // 'state 45'
    symbol: undefined,
  },
  // 'action 154'
  {
    op: 0, // shift
    state: 46, // 'state 46'
    symbol: undefined,
  },
  // 'action 155'
  {
    op: 0, // shift
    state: 47, // 'state 47'
    symbol: undefined,
  },
  // 'action 156'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Members
  },
  // 'action 157'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Members
  },
  // 'action 158'
  {
    op: 0, // shift
    state: 48, // 'state 48'
    symbol: undefined,
  },
  // 'action 159'
  {
    op: 0, // shift
    state: 49, // 'state 49'
    symbol: undefined,
  },
  // 'action 160'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Array
  },
  // 'action 161'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Array
  },
  // 'action 162'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Array
  },
  // 'action 163'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Array
  },
  // 'action 164'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Array
  },
  // 'action 165'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 166'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 167'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 168'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 169'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 170'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 171'
  {
    op: 0, // shift
    state: 50, // 'state 50'
    symbol: undefined,
  },
  // 'action 172'
  {
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
  },
  // 'action 173'
  {
    op: 0, // shift
    state: 22, // 'state 22'
    symbol: undefined,
  },
  // 'action 174'
  {
    op: 0, // shift
    state: 12, // 'state 12'
    symbol: undefined,
  },
  // 'action 175'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 176'
  {
    op: 0, // shift
    state: 51, // 'state 51'
    symbol: undefined,
  },
  // 'action 177'
  {
    op: 0, // shift
    state: 52, // 'state 52'
    symbol: undefined,
  },
  // 'action 178'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // Elements
  },
  // 'action 179'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // Elements
  },
  // 'action 180'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 1, // Element
  },
  // 'action 181'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 1, // Element
  },
  // 'action 182'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 1, // Element
  },
  // 'action 183'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 1, // Element
  },
  // 'action 184'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Object
  },
  // 'action 185'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Object
  },
  // 'action 186'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Object
  },
  // 'action 187'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Object
  },
  // 'action 188'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Object
  },
  // 'action 189'
  {
    op: 0, // shift
    state: 53, // 'state 53'
    symbol: undefined,
  },
  // 'action 190'
  {
    op: 0, // shift
    state: 54, // 'state 54'
    symbol: undefined,
  },
  // 'action 191'
  {
    op: 0, // shift
    state: 55, // 'state 55'
    symbol: undefined,
  },
  // 'action 192'
  {
    op: 0, // shift
    state: 56, // 'state 56'
    symbol: undefined,
  },
  // 'action 193'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Members
  },
  // 'action 194'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Members
  },
  // 'action 195'
  {
    op: 0, // shift
    state: 57, // 'state 57'
    symbol: undefined,
  },
  // 'action 196'
  {
    op: 0, // shift
    state: 58, // 'state 58'
    symbol: undefined,
  },
  // 'action 197'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Array
  },
  // 'action 198'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Array
  },
  // 'action 199'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Array
  },
  // 'action 200'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Array
  },
  // 'action 201'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Array
  },
  // 'action 202'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 203'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 204'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 205'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 206'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 207'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 208'
  {
    op: 0, // shift
    state: 59, // 'state 59'
    symbol: undefined,
  },
  // 'action 209'
  {
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
  },
  // 'action 210'
  {
    op: 0, // shift
    state: 22, // 'state 22'
    symbol: undefined,
  },
  // 'action 211'
  {
    op: 0, // shift
    state: 12, // 'state 12'
    symbol: undefined,
  },
  // 'action 212'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 213'
  {
    op: 0, // shift
    state: 60, // 'state 60'
    symbol: undefined,
  },
  // 'action 214'
  {
    op: 0, // shift
    state: 61, // 'state 61'
    symbol: undefined,
  },
  // 'action 215'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // Elements
  },
  // 'action 216'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // Elements
  },
  // 'action 217'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Object
  },
  // 'action 218'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Object
  },
  // 'action 219'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Object
  },
  // 'action 220'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Object
  },
  // 'action 221'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Object
  },
  // 'action 222'
  {
    op: 0, // shift
    state: 62, // 'state 62'
    symbol: undefined,
  },
  // 'action 223'
  {
    op: 0, // shift
    state: 63, // 'state 63'
    symbol: undefined,
  },
  // 'action 224'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Object
  },
  // 'action 225'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Object
  },
  // 'action 226'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Object
  },
  // 'action 227'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Object
  },
  // 'action 228'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Object
  },
  // 'action 229'
  {
    op: 0, // shift
    state: 64, // 'state 64'
    symbol: undefined,
  },
  // 'action 230'
  {
    op: 0, // shift
    state: 27, // 'state 27'
    symbol: undefined,
  },
  // 'action 231'
  {
    op: 0, // shift
    state: 65, // 'state 65'
    symbol: undefined,
  },
  // 'action 232'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 233'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 234'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 235'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 236'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 237'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 238'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 239'
  {
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
  },
  // 'action 240'
  {
    op: 0, // shift
    state: 66, // 'state 66'
    symbol: undefined,
  },
  // 'action 241'
  {
    op: 0, // shift
    state: 11, // 'state 11'
    symbol: undefined,
  },
  // 'action 242'
  {
    op: 0, // shift
    state: 12, // 'state 12'
    symbol: undefined,
  },
  // 'action 243'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 244'
  {
    op: 0, // shift
    state: 67, // 'state 67'
    symbol: undefined,
  },
  // 'action 245'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Array
  },
  // 'action 246'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Array
  },
  // 'action 247'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Array
  },
  // 'action 248'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Array
  },
  // 'action 249'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Array
  },
  // 'action 250'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Array
  },
  // 'action 251'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Array
  },
  // 'action 252'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Array
  },
  // 'action 253'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Array
  },
  // 'action 254'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Array
  },
  // 'action 255'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 256'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 257'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 258'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 259'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 260'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 261'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 262'
  {
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
  },
  // 'action 263'
  {
    op: 0, // shift
    state: 68, // 'state 68'
    symbol: undefined,
  },
  // 'action 264'
  {
    op: 0, // shift
    state: 11, // 'state 11'
    symbol: undefined,
  },
  // 'action 265'
  {
    op: 0, // shift
    state: 12, // 'state 12'
    symbol: undefined,
  },
  // 'action 266'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 267'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Object
  },
  // 'action 268'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Object
  },
  // 'action 269'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Object
  },
  // 'action 270'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Object
  },
  // 'action 271'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Object
  },
  // 'action 272'
  {
    op: 0, // shift
    state: 69, // 'state 69'
    symbol: undefined,
  },
  // 'action 273'
  {
    op: 0, // shift
    state: 70, // 'state 70'
    symbol: undefined,
  },
  // 'action 274'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Object
  },
  // 'action 275'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Object
  },
  // 'action 276'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Object
  },
  // 'action 277'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Object
  },
  // 'action 278'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Object
  },
  // 'action 279'
  {
    op: 0, // shift
    state: 71, // 'state 71'
    symbol: undefined,
  },
  // 'action 280'
  {
    op: 0, // shift
    state: 27, // 'state 27'
    symbol: undefined,
  },
  // 'action 281'
  {
    op: 0, // shift
    state: 72, // 'state 72'
    symbol: undefined,
  },
  // 'action 282'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 283'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 284'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 285'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 286'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 287'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 288'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 289'
  {
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
  },
  // 'action 290'
  {
    op: 0, // shift
    state: 73, // 'state 73'
    symbol: undefined,
  },
  // 'action 291'
  {
    op: 0, // shift
    state: 11, // 'state 11'
    symbol: undefined,
  },
  // 'action 292'
  {
    op: 0, // shift
    state: 12, // 'state 12'
    symbol: undefined,
  },
  // 'action 293'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 294'
  {
    op: 0, // shift
    state: 74, // 'state 74'
    symbol: undefined,
  },
  // 'action 295'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Array
  },
  // 'action 296'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Array
  },
  // 'action 297'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Array
  },
  // 'action 298'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Array
  },
  // 'action 299'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Array
  },
  // 'action 300'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Array
  },
  // 'action 301'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Array
  },
  // 'action 302'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Array
  },
  // 'action 303'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Array
  },
  // 'action 304'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // Array
  },
  // 'action 305'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 306'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 307'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 308'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 309'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 310'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 311'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 312'
  {
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
  },
  // 'action 313'
  {
    op: 0, // shift
    state: 75, // 'state 75'
    symbol: undefined,
  },
  // 'action 314'
  {
    op: 0, // shift
    state: 11, // 'state 11'
    symbol: undefined,
  },
  // 'action 315'
  {
    op: 0, // shift
    state: 12, // 'state 12'
    symbol: undefined,
  },
  // 'action 316'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 317'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 318'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 319'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 320'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 321'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 322'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 323'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 324'
  {
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
  },
  // 'action 325'
  {
    op: 0, // shift
    state: 76, // 'state 76'
    symbol: undefined,
  },
  // 'action 326'
  {
    op: 0, // shift
    state: 11, // 'state 11'
    symbol: undefined,
  },
  // 'action 327'
  {
    op: 0, // shift
    state: 12, // 'state 12'
    symbol: undefined,
  },
  // 'action 328'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 329'
  {
    op: 0, // shift
    state: 77, // 'state 77'
    symbol: undefined,
  },
  // 'action 330'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Members
  },
  // 'action 331'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Members
  },
  // 'action 332'
  {
    op: 0, // shift
    state: 45, // 'state 45'
    symbol: undefined,
  },
  // 'action 333'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Member
  },
  // 'action 334'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Member
  },
  // 'action 335'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 336'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 337'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 338'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 339'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 340'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 341'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 342'
  {
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
  },
  // 'action 343'
  {
    op: 0, // shift
    state: 78, // 'state 78'
    symbol: undefined,
  },
  // 'action 344'
  {
    op: 0, // shift
    state: 11, // 'state 11'
    symbol: undefined,
  },
  // 'action 345'
  {
    op: 0, // shift
    state: 12, // 'state 12'
    symbol: undefined,
  },
  // 'action 346'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 347'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // Elements
  },
  // 'action 348'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // Elements
  },
  // 'action 349'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 350'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 351'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 352'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 353'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 354'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 355'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 356'
  {
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
  },
  // 'action 357'
  {
    op: 0, // shift
    state: 79, // 'state 79'
    symbol: undefined,
  },
  // 'action 358'
  {
    op: 0, // shift
    state: 11, // 'state 11'
    symbol: undefined,
  },
  // 'action 359'
  {
    op: 0, // shift
    state: 12, // 'state 12'
    symbol: undefined,
  },
  // 'action 360'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 361'
  {
    op: 0, // shift
    state: 80, // 'state 80'
    symbol: undefined,
  },
  // 'action 362'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Members
  },
  // 'action 363'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Members
  },
  // 'action 364'
  {
    op: 0, // shift
    state: 45, // 'state 45'
    symbol: undefined,
  },
  // 'action 365'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Member
  },
  // 'action 366'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Member
  },
  // 'action 367'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 368'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 369'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 370'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 371'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 372'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 373'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 374'
  {
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
  },
  // 'action 375'
  {
    op: 0, // shift
    state: 81, // 'state 81'
    symbol: undefined,
  },
  // 'action 376'
  {
    op: 0, // shift
    state: 11, // 'state 11'
    symbol: undefined,
  },
  // 'action 377'
  {
    op: 0, // shift
    state: 12, // 'state 12'
    symbol: undefined,
  },
  // 'action 378'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 379'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // Elements
  },
  // 'action 380'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // Elements
  },
  // 'action 381'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Member
  },
  // 'action 382'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Member
  },
  // 'action 383'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 384'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 385'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 386'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 387'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 388'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 389'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 390'
  {
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
  },
  // 'action 391'
  {
    op: 0, // shift
    state: 82, // 'state 82'
    symbol: undefined,
  },
  // 'action 392'
  {
    op: 0, // shift
    state: 11, // 'state 11'
    symbol: undefined,
  },
  // 'action 393'
  {
    op: 0, // shift
    state: 12, // 'state 12'
    symbol: undefined,
  },
  // 'action 394'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 395'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Member
  },
  // 'action 396'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Member
  },
  // 'action 397'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Member
  },
  // 'action 398'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Member
  },
  // 'action 399'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 400'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 401'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 402'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 403'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 404'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 405'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 406'
  {
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
  },
  // 'action 407'
  {
    op: 0, // shift
    state: 83, // 'state 83'
    symbol: undefined,
  },
  // 'action 408'
  {
    op: 0, // shift
    state: 11, // 'state 11'
    symbol: undefined,
  },
  // 'action 409'
  {
    op: 0, // shift
    state: 12, // 'state 12'
    symbol: undefined,
  },
  // 'action 410'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 411'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Member
  },
  // 'action 412'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Member
  },
  // 'action 413'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Member
  },
  // 'action 414'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Member
  },
  // 'action 415'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Member
  },
  // 'action 416'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Member
  },
];
const actionsTable = new Uint16Array(2520).fill(0xffff);
actionsTable[2] = 0; // 'state 0' -> WS -> shift -> 'action 0'
actionsTable[3] = 1; // 'state 0' -> TRUE -> shift -> 'action 1'
actionsTable[4] = 2; // 'state 0' -> FALSE -> shift -> 'action 2'
actionsTable[5] = 3; // 'state 0' -> NULL -> shift -> 'action 3'
actionsTable[6] = 4; // 'state 0' -> CURLY_OPEN -> shift -> 'action 4'
actionsTable[10] = 5; // 'state 0' -> STRING -> shift -> 'action 5'
actionsTable[11] = 6; // 'state 0' -> BRACKET_OPEN -> shift -> 'action 6'
actionsTable[20] = 7; // 'state 0' -> NUMBER -> shift -> 'action 7'
actionsTable[22] = 8; // 'state 0' -> Json -> shift -> 'action 8'
actionsTable[23] = 9; // 'state 0' -> Element -> shift -> 'action 9'
actionsTable[24] = 10; // 'state 0' -> Value -> shift -> 'action 10'
actionsTable[25] = 11; // 'state 0' -> Object -> shift -> 'action 11'
actionsTable[28] = 12; // 'state 0' -> Array -> shift -> 'action 12'
actionsTable[270] = 13; // 'state 9' -> @expound.EOF -> done -> 'action 13'
actionsTable[300] = 14; // 'state 10' -> @expound.EOF -> reduce -> 'action 14'
actionsTable[332] = 15; // 'state 11' -> WS -> shift -> 'action 15'
actionsTable[330] = 16; // 'state 11' -> @expound.EOF -> reduce -> 'action 16'
actionsTable[337] = 17; // 'state 11' -> CURLY_CLOSE -> reduce -> 'action 17'
actionsTable[338] = 18; // 'state 11' -> COMMA -> reduce -> 'action 18'
actionsTable[342] = 19; // 'state 11' -> BRACKET_CLOSE -> reduce -> 'action 19'
actionsTable[33] = 20; // 'state 1' -> TRUE -> shift -> 'action 20'
actionsTable[34] = 21; // 'state 1' -> FALSE -> shift -> 'action 21'
actionsTable[35] = 22; // 'state 1' -> NULL -> shift -> 'action 22'
actionsTable[36] = 23; // 'state 1' -> CURLY_OPEN -> shift -> 'action 23'
actionsTable[40] = 24; // 'state 1' -> STRING -> shift -> 'action 24'
actionsTable[41] = 25; // 'state 1' -> BRACKET_OPEN -> shift -> 'action 25'
actionsTable[50] = 26; // 'state 1' -> NUMBER -> shift -> 'action 26'
actionsTable[54] = 27; // 'state 1' -> Value -> shift -> 'action 27'
actionsTable[55] = 28; // 'state 1' -> Object -> shift -> 'action 28'
actionsTable[58] = 29; // 'state 1' -> Array -> shift -> 'action 29'
actionsTable[360] = 30; // 'state 12' -> @expound.EOF -> reduce -> 'action 30'
actionsTable[362] = 31; // 'state 12' -> WS -> reduce -> 'action 31'
actionsTable[367] = 32; // 'state 12' -> CURLY_CLOSE -> reduce -> 'action 32'
actionsTable[368] = 33; // 'state 12' -> COMMA -> reduce -> 'action 33'
actionsTable[372] = 34; // 'state 12' -> BRACKET_CLOSE -> reduce -> 'action 34'
actionsTable[390] = 35; // 'state 13' -> @expound.EOF -> reduce -> 'action 35'
actionsTable[392] = 36; // 'state 13' -> WS -> reduce -> 'action 36'
actionsTable[397] = 37; // 'state 13' -> CURLY_CLOSE -> reduce -> 'action 37'
actionsTable[398] = 38; // 'state 13' -> COMMA -> reduce -> 'action 38'
actionsTable[402] = 39; // 'state 13' -> BRACKET_CLOSE -> reduce -> 'action 39'
actionsTable[180] = 40; // 'state 6' -> @expound.EOF -> reduce -> 'action 40'
actionsTable[182] = 41; // 'state 6' -> WS -> reduce -> 'action 41'
actionsTable[187] = 42; // 'state 6' -> CURLY_CLOSE -> reduce -> 'action 42'
actionsTable[188] = 43; // 'state 6' -> COMMA -> reduce -> 'action 43'
actionsTable[192] = 44; // 'state 6' -> BRACKET_CLOSE -> reduce -> 'action 44'
actionsTable[240] = 45; // 'state 8' -> @expound.EOF -> reduce -> 'action 45'
actionsTable[242] = 46; // 'state 8' -> WS -> reduce -> 'action 46'
actionsTable[247] = 47; // 'state 8' -> CURLY_CLOSE -> reduce -> 'action 47'
actionsTable[248] = 48; // 'state 8' -> COMMA -> reduce -> 'action 48'
actionsTable[252] = 49; // 'state 8' -> BRACKET_CLOSE -> reduce -> 'action 49'
actionsTable[60] = 50; // 'state 2' -> @expound.EOF -> reduce -> 'action 50'
actionsTable[62] = 51; // 'state 2' -> WS -> reduce -> 'action 51'
actionsTable[67] = 52; // 'state 2' -> CURLY_CLOSE -> reduce -> 'action 52'
actionsTable[68] = 53; // 'state 2' -> COMMA -> reduce -> 'action 53'
actionsTable[72] = 54; // 'state 2' -> BRACKET_CLOSE -> reduce -> 'action 54'
actionsTable[90] = 55; // 'state 3' -> @expound.EOF -> reduce -> 'action 55'
actionsTable[92] = 56; // 'state 3' -> WS -> reduce -> 'action 56'
actionsTable[97] = 57; // 'state 3' -> CURLY_CLOSE -> reduce -> 'action 57'
actionsTable[98] = 58; // 'state 3' -> COMMA -> reduce -> 'action 58'
actionsTable[102] = 59; // 'state 3' -> BRACKET_CLOSE -> reduce -> 'action 59'
actionsTable[120] = 60; // 'state 4' -> @expound.EOF -> reduce -> 'action 60'
actionsTable[122] = 61; // 'state 4' -> WS -> reduce -> 'action 61'
actionsTable[127] = 62; // 'state 4' -> CURLY_CLOSE -> reduce -> 'action 62'
actionsTable[128] = 63; // 'state 4' -> COMMA -> reduce -> 'action 63'
actionsTable[132] = 64; // 'state 4' -> BRACKET_CLOSE -> reduce -> 'action 64'
actionsTable[152] = 65; // 'state 5' -> WS -> shift -> 'action 65'
actionsTable[157] = 66; // 'state 5' -> CURLY_CLOSE -> shift -> 'action 66'
actionsTable[160] = 67; // 'state 5' -> STRING -> shift -> 'action 67'
actionsTable[176] = 68; // 'state 5' -> Members -> shift -> 'action 68'
actionsTable[177] = 69; // 'state 5' -> Member -> shift -> 'action 69'
actionsTable[212] = 70; // 'state 7' -> WS -> shift -> 'action 70'
actionsTable[213] = 71; // 'state 7' -> TRUE -> shift -> 'action 71'
actionsTable[214] = 72; // 'state 7' -> FALSE -> shift -> 'action 72'
actionsTable[215] = 73; // 'state 7' -> NULL -> shift -> 'action 73'
actionsTable[216] = 74; // 'state 7' -> CURLY_OPEN -> shift -> 'action 74'
actionsTable[220] = 75; // 'state 7' -> STRING -> shift -> 'action 75'
actionsTable[221] = 76; // 'state 7' -> BRACKET_OPEN -> shift -> 'action 76'
actionsTable[222] = 77; // 'state 7' -> BRACKET_CLOSE -> shift -> 'action 77'
actionsTable[230] = 78; // 'state 7' -> NUMBER -> shift -> 'action 78'
actionsTable[233] = 79; // 'state 7' -> Element -> shift -> 'action 79'
actionsTable[234] = 80; // 'state 7' -> Value -> shift -> 'action 80'
actionsTable[235] = 81; // 'state 7' -> Object -> shift -> 'action 81'
actionsTable[238] = 82; // 'state 7' -> Array -> shift -> 'action 82'
actionsTable[239] = 83; // 'state 7' -> Elements -> shift -> 'action 83'
actionsTable[420] = 84; // 'state 14' -> @expound.EOF -> reduce -> 'action 84'
actionsTable[427] = 85; // 'state 14' -> CURLY_CLOSE -> reduce -> 'action 85'
actionsTable[428] = 86; // 'state 14' -> COMMA -> reduce -> 'action 86'
actionsTable[432] = 87; // 'state 14' -> BRACKET_CLOSE -> reduce -> 'action 87'
actionsTable[662] = 88; // 'state 22' -> WS -> shift -> 'action 88'
actionsTable[660] = 89; // 'state 22' -> @expound.EOF -> reduce -> 'action 89'
actionsTable[667] = 90; // 'state 22' -> CURLY_CLOSE -> reduce -> 'action 90'
actionsTable[668] = 91; // 'state 22' -> COMMA -> reduce -> 'action 91'
actionsTable[672] = 92; // 'state 22' -> BRACKET_CLOSE -> reduce -> 'action 92'
actionsTable[690] = 93; // 'state 23' -> @expound.EOF -> reduce -> 'action 93'
actionsTable[692] = 94; // 'state 23' -> WS -> reduce -> 'action 94'
actionsTable[697] = 95; // 'state 23' -> CURLY_CLOSE -> reduce -> 'action 95'
actionsTable[698] = 96; // 'state 23' -> COMMA -> reduce -> 'action 96'
actionsTable[702] = 97; // 'state 23' -> BRACKET_CLOSE -> reduce -> 'action 97'
actionsTable[720] = 98; // 'state 24' -> @expound.EOF -> reduce -> 'action 98'
actionsTable[722] = 99; // 'state 24' -> WS -> reduce -> 'action 99'
actionsTable[727] = 100; // 'state 24' -> CURLY_CLOSE -> reduce -> 'action 100'
actionsTable[728] = 101; // 'state 24' -> COMMA -> reduce -> 'action 101'
actionsTable[732] = 102; // 'state 24' -> BRACKET_CLOSE -> reduce -> 'action 102'
actionsTable[570] = 103; // 'state 19' -> @expound.EOF -> reduce -> 'action 103'
actionsTable[572] = 104; // 'state 19' -> WS -> reduce -> 'action 104'
actionsTable[577] = 105; // 'state 19' -> CURLY_CLOSE -> reduce -> 'action 105'
actionsTable[578] = 106; // 'state 19' -> COMMA -> reduce -> 'action 106'
actionsTable[582] = 107; // 'state 19' -> BRACKET_CLOSE -> reduce -> 'action 107'
actionsTable[630] = 108; // 'state 21' -> @expound.EOF -> reduce -> 'action 108'
actionsTable[632] = 109; // 'state 21' -> WS -> reduce -> 'action 109'
actionsTable[637] = 110; // 'state 21' -> CURLY_CLOSE -> reduce -> 'action 110'
actionsTable[638] = 111; // 'state 21' -> COMMA -> reduce -> 'action 111'
actionsTable[642] = 112; // 'state 21' -> BRACKET_CLOSE -> reduce -> 'action 112'
actionsTable[450] = 113; // 'state 15' -> @expound.EOF -> reduce -> 'action 113'
actionsTable[452] = 114; // 'state 15' -> WS -> reduce -> 'action 114'
actionsTable[457] = 115; // 'state 15' -> CURLY_CLOSE -> reduce -> 'action 115'
actionsTable[458] = 116; // 'state 15' -> COMMA -> reduce -> 'action 116'
actionsTable[462] = 117; // 'state 15' -> BRACKET_CLOSE -> reduce -> 'action 117'
actionsTable[480] = 118; // 'state 16' -> @expound.EOF -> reduce -> 'action 118'
actionsTable[482] = 119; // 'state 16' -> WS -> reduce -> 'action 119'
actionsTable[487] = 120; // 'state 16' -> CURLY_CLOSE -> reduce -> 'action 120'
actionsTable[488] = 121; // 'state 16' -> COMMA -> reduce -> 'action 121'
actionsTable[492] = 122; // 'state 16' -> BRACKET_CLOSE -> reduce -> 'action 122'
actionsTable[510] = 123; // 'state 17' -> @expound.EOF -> reduce -> 'action 123'
actionsTable[512] = 124; // 'state 17' -> WS -> reduce -> 'action 124'
actionsTable[517] = 125; // 'state 17' -> CURLY_CLOSE -> reduce -> 'action 125'
actionsTable[518] = 126; // 'state 17' -> COMMA -> reduce -> 'action 126'
actionsTable[522] = 127; // 'state 17' -> BRACKET_CLOSE -> reduce -> 'action 127'
actionsTable[542] = 128; // 'state 18' -> WS -> shift -> 'action 128'
actionsTable[547] = 129; // 'state 18' -> CURLY_CLOSE -> shift -> 'action 129'
actionsTable[550] = 130; // 'state 18' -> STRING -> shift -> 'action 130'
actionsTable[566] = 131; // 'state 18' -> Members -> shift -> 'action 131'
actionsTable[567] = 132; // 'state 18' -> Member -> shift -> 'action 132'
actionsTable[602] = 133; // 'state 20' -> WS -> shift -> 'action 133'
actionsTable[603] = 134; // 'state 20' -> TRUE -> shift -> 'action 134'
actionsTable[604] = 135; // 'state 20' -> FALSE -> shift -> 'action 135'
actionsTable[605] = 136; // 'state 20' -> NULL -> shift -> 'action 136'
actionsTable[606] = 137; // 'state 20' -> CURLY_OPEN -> shift -> 'action 137'
actionsTable[610] = 138; // 'state 20' -> STRING -> shift -> 'action 138'
actionsTable[611] = 139; // 'state 20' -> BRACKET_OPEN -> shift -> 'action 139'
actionsTable[612] = 140; // 'state 20' -> BRACKET_CLOSE -> shift -> 'action 140'
actionsTable[620] = 141; // 'state 20' -> NUMBER -> shift -> 'action 141'
actionsTable[623] = 142; // 'state 20' -> Element -> shift -> 'action 142'
actionsTable[624] = 143; // 'state 20' -> Value -> shift -> 'action 143'
actionsTable[625] = 144; // 'state 20' -> Object -> shift -> 'action 144'
actionsTable[628] = 145; // 'state 20' -> Array -> shift -> 'action 145'
actionsTable[629] = 146; // 'state 20' -> Elements -> shift -> 'action 146'
actionsTable[780] = 147; // 'state 26' -> @expound.EOF -> reduce -> 'action 147'
actionsTable[782] = 148; // 'state 26' -> WS -> reduce -> 'action 148'
actionsTable[787] = 149; // 'state 26' -> CURLY_CLOSE -> reduce -> 'action 149'
actionsTable[788] = 150; // 'state 26' -> COMMA -> reduce -> 'action 150'
actionsTable[792] = 151; // 'state 26' -> BRACKET_CLOSE -> reduce -> 'action 151'
actionsTable[757] = 152; // 'state 25' -> CURLY_CLOSE -> shift -> 'action 152'
actionsTable[760] = 153; // 'state 25' -> STRING -> shift -> 'action 153'
actionsTable[847] = 154; // 'state 28' -> CURLY_CLOSE -> shift -> 'action 154'
actionsTable[848] = 155; // 'state 28' -> COMMA -> shift -> 'action 155'
actionsTable[877] = 156; // 'state 29' -> CURLY_CLOSE -> reduce -> 'action 156'
actionsTable[878] = 157; // 'state 29' -> COMMA -> reduce -> 'action 157'
actionsTable[812] = 158; // 'state 27' -> WS -> shift -> 'action 158'
actionsTable[819] = 159; // 'state 27' -> COLON -> shift -> 'action 159'
actionsTable[930] = 160; // 'state 31' -> @expound.EOF -> reduce -> 'action 160'
actionsTable[932] = 161; // 'state 31' -> WS -> reduce -> 'action 161'
actionsTable[937] = 162; // 'state 31' -> CURLY_CLOSE -> reduce -> 'action 162'
actionsTable[938] = 163; // 'state 31' -> COMMA -> reduce -> 'action 163'
actionsTable[942] = 164; // 'state 31' -> BRACKET_CLOSE -> reduce -> 'action 164'
actionsTable[903] = 165; // 'state 30' -> TRUE -> shift -> 'action 165'
actionsTable[904] = 166; // 'state 30' -> FALSE -> shift -> 'action 166'
actionsTable[905] = 167; // 'state 30' -> NULL -> shift -> 'action 167'
actionsTable[906] = 168; // 'state 30' -> CURLY_OPEN -> shift -> 'action 168'
actionsTable[910] = 169; // 'state 30' -> STRING -> shift -> 'action 169'
actionsTable[911] = 170; // 'state 30' -> BRACKET_OPEN -> shift -> 'action 170'
actionsTable[912] = 171; // 'state 30' -> BRACKET_CLOSE -> shift -> 'action 171'
actionsTable[920] = 172; // 'state 30' -> NUMBER -> shift -> 'action 172'
actionsTable[924] = 173; // 'state 30' -> Value -> shift -> 'action 173'
actionsTable[925] = 174; // 'state 30' -> Object -> shift -> 'action 174'
actionsTable[928] = 175; // 'state 30' -> Array -> shift -> 'action 175'
actionsTable[998] = 176; // 'state 33' -> COMMA -> shift -> 'action 176'
actionsTable[1002] = 177; // 'state 33' -> BRACKET_CLOSE -> shift -> 'action 177'
actionsTable[968] = 178; // 'state 32' -> COMMA -> reduce -> 'action 178'
actionsTable[972] = 179; // 'state 32' -> BRACKET_CLOSE -> reduce -> 'action 179'
actionsTable[1020] = 180; // 'state 34' -> @expound.EOF -> reduce -> 'action 180'
actionsTable[1027] = 181; // 'state 34' -> CURLY_CLOSE -> reduce -> 'action 181'
actionsTable[1028] = 182; // 'state 34' -> COMMA -> reduce -> 'action 182'
actionsTable[1032] = 183; // 'state 34' -> BRACKET_CLOSE -> reduce -> 'action 183'
actionsTable[1080] = 184; // 'state 36' -> @expound.EOF -> reduce -> 'action 184'
actionsTable[1082] = 185; // 'state 36' -> WS -> reduce -> 'action 185'
actionsTable[1087] = 186; // 'state 36' -> CURLY_CLOSE -> reduce -> 'action 186'
actionsTable[1088] = 187; // 'state 36' -> COMMA -> reduce -> 'action 187'
actionsTable[1092] = 188; // 'state 36' -> BRACKET_CLOSE -> reduce -> 'action 188'
actionsTable[1057] = 189; // 'state 35' -> CURLY_CLOSE -> shift -> 'action 189'
actionsTable[1060] = 190; // 'state 35' -> STRING -> shift -> 'action 190'
actionsTable[1147] = 191; // 'state 38' -> CURLY_CLOSE -> shift -> 'action 191'
actionsTable[1148] = 192; // 'state 38' -> COMMA -> shift -> 'action 192'
actionsTable[1177] = 193; // 'state 39' -> CURLY_CLOSE -> reduce -> 'action 193'
actionsTable[1178] = 194; // 'state 39' -> COMMA -> reduce -> 'action 194'
actionsTable[1112] = 195; // 'state 37' -> WS -> shift -> 'action 195'
actionsTable[1119] = 196; // 'state 37' -> COLON -> shift -> 'action 196'
actionsTable[1230] = 197; // 'state 41' -> @expound.EOF -> reduce -> 'action 197'
actionsTable[1232] = 198; // 'state 41' -> WS -> reduce -> 'action 198'
actionsTable[1237] = 199; // 'state 41' -> CURLY_CLOSE -> reduce -> 'action 199'
actionsTable[1238] = 200; // 'state 41' -> COMMA -> reduce -> 'action 200'
actionsTable[1242] = 201; // 'state 41' -> BRACKET_CLOSE -> reduce -> 'action 201'
actionsTable[1203] = 202; // 'state 40' -> TRUE -> shift -> 'action 202'
actionsTable[1204] = 203; // 'state 40' -> FALSE -> shift -> 'action 203'
actionsTable[1205] = 204; // 'state 40' -> NULL -> shift -> 'action 204'
actionsTable[1206] = 205; // 'state 40' -> CURLY_OPEN -> shift -> 'action 205'
actionsTable[1210] = 206; // 'state 40' -> STRING -> shift -> 'action 206'
actionsTable[1211] = 207; // 'state 40' -> BRACKET_OPEN -> shift -> 'action 207'
actionsTable[1212] = 208; // 'state 40' -> BRACKET_CLOSE -> shift -> 'action 208'
actionsTable[1220] = 209; // 'state 40' -> NUMBER -> shift -> 'action 209'
actionsTable[1224] = 210; // 'state 40' -> Value -> shift -> 'action 210'
actionsTable[1225] = 211; // 'state 40' -> Object -> shift -> 'action 211'
actionsTable[1228] = 212; // 'state 40' -> Array -> shift -> 'action 212'
actionsTable[1298] = 213; // 'state 43' -> COMMA -> shift -> 'action 213'
actionsTable[1302] = 214; // 'state 43' -> BRACKET_CLOSE -> shift -> 'action 214'
actionsTable[1268] = 215; // 'state 42' -> COMMA -> reduce -> 'action 215'
actionsTable[1272] = 216; // 'state 42' -> BRACKET_CLOSE -> reduce -> 'action 216'
actionsTable[1320] = 217; // 'state 44' -> @expound.EOF -> reduce -> 'action 217'
actionsTable[1322] = 218; // 'state 44' -> WS -> reduce -> 'action 218'
actionsTable[1327] = 219; // 'state 44' -> CURLY_CLOSE -> reduce -> 'action 219'
actionsTable[1328] = 220; // 'state 44' -> COMMA -> reduce -> 'action 220'
actionsTable[1332] = 221; // 'state 44' -> BRACKET_CLOSE -> reduce -> 'action 221'
actionsTable[1352] = 222; // 'state 45' -> WS -> shift -> 'action 222'
actionsTable[1359] = 223; // 'state 45' -> COLON -> shift -> 'action 223'
actionsTable[1380] = 224; // 'state 46' -> @expound.EOF -> reduce -> 'action 224'
actionsTable[1382] = 225; // 'state 46' -> WS -> reduce -> 'action 225'
actionsTable[1387] = 226; // 'state 46' -> CURLY_CLOSE -> reduce -> 'action 226'
actionsTable[1388] = 227; // 'state 46' -> COMMA -> reduce -> 'action 227'
actionsTable[1392] = 228; // 'state 46' -> BRACKET_CLOSE -> reduce -> 'action 228'
actionsTable[1412] = 229; // 'state 47' -> WS -> shift -> 'action 229'
actionsTable[1420] = 230; // 'state 47' -> STRING -> shift -> 'action 230'
actionsTable[1437] = 231; // 'state 47' -> Member -> shift -> 'action 231'
actionsTable[1472] = 232; // 'state 49' -> WS -> shift -> 'action 232'
actionsTable[1473] = 233; // 'state 49' -> TRUE -> shift -> 'action 233'
actionsTable[1474] = 234; // 'state 49' -> FALSE -> shift -> 'action 234'
actionsTable[1475] = 235; // 'state 49' -> NULL -> shift -> 'action 235'
actionsTable[1476] = 236; // 'state 49' -> CURLY_OPEN -> shift -> 'action 236'
actionsTable[1480] = 237; // 'state 49' -> STRING -> shift -> 'action 237'
actionsTable[1481] = 238; // 'state 49' -> BRACKET_OPEN -> shift -> 'action 238'
actionsTable[1490] = 239; // 'state 49' -> NUMBER -> shift -> 'action 239'
actionsTable[1493] = 240; // 'state 49' -> Element -> shift -> 'action 240'
actionsTable[1494] = 241; // 'state 49' -> Value -> shift -> 'action 241'
actionsTable[1495] = 242; // 'state 49' -> Object -> shift -> 'action 242'
actionsTable[1498] = 243; // 'state 49' -> Array -> shift -> 'action 243'
actionsTable[1449] = 244; // 'state 48' -> COLON -> shift -> 'action 244'
actionsTable[1500] = 245; // 'state 50' -> @expound.EOF -> reduce -> 'action 245'
actionsTable[1502] = 246; // 'state 50' -> WS -> reduce -> 'action 246'
actionsTable[1507] = 247; // 'state 50' -> CURLY_CLOSE -> reduce -> 'action 247'
actionsTable[1508] = 248; // 'state 50' -> COMMA -> reduce -> 'action 248'
actionsTable[1512] = 249; // 'state 50' -> BRACKET_CLOSE -> reduce -> 'action 249'
actionsTable[1560] = 250; // 'state 52' -> @expound.EOF -> reduce -> 'action 250'
actionsTable[1562] = 251; // 'state 52' -> WS -> reduce -> 'action 251'
actionsTable[1567] = 252; // 'state 52' -> CURLY_CLOSE -> reduce -> 'action 252'
actionsTable[1568] = 253; // 'state 52' -> COMMA -> reduce -> 'action 253'
actionsTable[1572] = 254; // 'state 52' -> BRACKET_CLOSE -> reduce -> 'action 254'
actionsTable[1532] = 255; // 'state 51' -> WS -> shift -> 'action 255'
actionsTable[1533] = 256; // 'state 51' -> TRUE -> shift -> 'action 256'
actionsTable[1534] = 257; // 'state 51' -> FALSE -> shift -> 'action 257'
actionsTable[1535] = 258; // 'state 51' -> NULL -> shift -> 'action 258'
actionsTable[1536] = 259; // 'state 51' -> CURLY_OPEN -> shift -> 'action 259'
actionsTable[1540] = 260; // 'state 51' -> STRING -> shift -> 'action 260'
actionsTable[1541] = 261; // 'state 51' -> BRACKET_OPEN -> shift -> 'action 261'
actionsTable[1550] = 262; // 'state 51' -> NUMBER -> shift -> 'action 262'
actionsTable[1553] = 263; // 'state 51' -> Element -> shift -> 'action 263'
actionsTable[1554] = 264; // 'state 51' -> Value -> shift -> 'action 264'
actionsTable[1555] = 265; // 'state 51' -> Object -> shift -> 'action 265'
actionsTable[1558] = 266; // 'state 51' -> Array -> shift -> 'action 266'
actionsTable[1590] = 267; // 'state 53' -> @expound.EOF -> reduce -> 'action 267'
actionsTable[1592] = 268; // 'state 53' -> WS -> reduce -> 'action 268'
actionsTable[1597] = 269; // 'state 53' -> CURLY_CLOSE -> reduce -> 'action 269'
actionsTable[1598] = 270; // 'state 53' -> COMMA -> reduce -> 'action 270'
actionsTable[1602] = 271; // 'state 53' -> BRACKET_CLOSE -> reduce -> 'action 271'
actionsTable[1622] = 272; // 'state 54' -> WS -> shift -> 'action 272'
actionsTable[1629] = 273; // 'state 54' -> COLON -> shift -> 'action 273'
actionsTable[1650] = 274; // 'state 55' -> @expound.EOF -> reduce -> 'action 274'
actionsTable[1652] = 275; // 'state 55' -> WS -> reduce -> 'action 275'
actionsTable[1657] = 276; // 'state 55' -> CURLY_CLOSE -> reduce -> 'action 276'
actionsTable[1658] = 277; // 'state 55' -> COMMA -> reduce -> 'action 277'
actionsTable[1662] = 278; // 'state 55' -> BRACKET_CLOSE -> reduce -> 'action 278'
actionsTable[1682] = 279; // 'state 56' -> WS -> shift -> 'action 279'
actionsTable[1690] = 280; // 'state 56' -> STRING -> shift -> 'action 280'
actionsTable[1707] = 281; // 'state 56' -> Member -> shift -> 'action 281'
actionsTable[1742] = 282; // 'state 58' -> WS -> shift -> 'action 282'
actionsTable[1743] = 283; // 'state 58' -> TRUE -> shift -> 'action 283'
actionsTable[1744] = 284; // 'state 58' -> FALSE -> shift -> 'action 284'
actionsTable[1745] = 285; // 'state 58' -> NULL -> shift -> 'action 285'
actionsTable[1746] = 286; // 'state 58' -> CURLY_OPEN -> shift -> 'action 286'
actionsTable[1750] = 287; // 'state 58' -> STRING -> shift -> 'action 287'
actionsTable[1751] = 288; // 'state 58' -> BRACKET_OPEN -> shift -> 'action 288'
actionsTable[1760] = 289; // 'state 58' -> NUMBER -> shift -> 'action 289'
actionsTable[1763] = 290; // 'state 58' -> Element -> shift -> 'action 290'
actionsTable[1764] = 291; // 'state 58' -> Value -> shift -> 'action 291'
actionsTable[1765] = 292; // 'state 58' -> Object -> shift -> 'action 292'
actionsTable[1768] = 293; // 'state 58' -> Array -> shift -> 'action 293'
actionsTable[1719] = 294; // 'state 57' -> COLON -> shift -> 'action 294'
actionsTable[1770] = 295; // 'state 59' -> @expound.EOF -> reduce -> 'action 295'
actionsTable[1772] = 296; // 'state 59' -> WS -> reduce -> 'action 296'
actionsTable[1777] = 297; // 'state 59' -> CURLY_CLOSE -> reduce -> 'action 297'
actionsTable[1778] = 298; // 'state 59' -> COMMA -> reduce -> 'action 298'
actionsTable[1782] = 299; // 'state 59' -> BRACKET_CLOSE -> reduce -> 'action 299'
actionsTable[1830] = 300; // 'state 61' -> @expound.EOF -> reduce -> 'action 300'
actionsTable[1832] = 301; // 'state 61' -> WS -> reduce -> 'action 301'
actionsTable[1837] = 302; // 'state 61' -> CURLY_CLOSE -> reduce -> 'action 302'
actionsTable[1838] = 303; // 'state 61' -> COMMA -> reduce -> 'action 303'
actionsTable[1842] = 304; // 'state 61' -> BRACKET_CLOSE -> reduce -> 'action 304'
actionsTable[1802] = 305; // 'state 60' -> WS -> shift -> 'action 305'
actionsTable[1803] = 306; // 'state 60' -> TRUE -> shift -> 'action 306'
actionsTable[1804] = 307; // 'state 60' -> FALSE -> shift -> 'action 307'
actionsTable[1805] = 308; // 'state 60' -> NULL -> shift -> 'action 308'
actionsTable[1806] = 309; // 'state 60' -> CURLY_OPEN -> shift -> 'action 309'
actionsTable[1810] = 310; // 'state 60' -> STRING -> shift -> 'action 310'
actionsTable[1811] = 311; // 'state 60' -> BRACKET_OPEN -> shift -> 'action 311'
actionsTable[1820] = 312; // 'state 60' -> NUMBER -> shift -> 'action 312'
actionsTable[1823] = 313; // 'state 60' -> Element -> shift -> 'action 313'
actionsTable[1824] = 314; // 'state 60' -> Value -> shift -> 'action 314'
actionsTable[1825] = 315; // 'state 60' -> Object -> shift -> 'action 315'
actionsTable[1828] = 316; // 'state 60' -> Array -> shift -> 'action 316'
actionsTable[1892] = 317; // 'state 63' -> WS -> shift -> 'action 317'
actionsTable[1893] = 318; // 'state 63' -> TRUE -> shift -> 'action 318'
actionsTable[1894] = 319; // 'state 63' -> FALSE -> shift -> 'action 319'
actionsTable[1895] = 320; // 'state 63' -> NULL -> shift -> 'action 320'
actionsTable[1896] = 321; // 'state 63' -> CURLY_OPEN -> shift -> 'action 321'
actionsTable[1900] = 322; // 'state 63' -> STRING -> shift -> 'action 322'
actionsTable[1901] = 323; // 'state 63' -> BRACKET_OPEN -> shift -> 'action 323'
actionsTable[1910] = 324; // 'state 63' -> NUMBER -> shift -> 'action 324'
actionsTable[1913] = 325; // 'state 63' -> Element -> shift -> 'action 325'
actionsTable[1914] = 326; // 'state 63' -> Value -> shift -> 'action 326'
actionsTable[1915] = 327; // 'state 63' -> Object -> shift -> 'action 327'
actionsTable[1918] = 328; // 'state 63' -> Array -> shift -> 'action 328'
actionsTable[1869] = 329; // 'state 62' -> COLON -> shift -> 'action 329'
actionsTable[1957] = 330; // 'state 65' -> CURLY_CLOSE -> reduce -> 'action 330'
actionsTable[1958] = 331; // 'state 65' -> COMMA -> reduce -> 'action 331'
actionsTable[1930] = 332; // 'state 64' -> STRING -> shift -> 'action 332'
actionsTable[1987] = 333; // 'state 66' -> CURLY_CLOSE -> reduce -> 'action 333'
actionsTable[1988] = 334; // 'state 66' -> COMMA -> reduce -> 'action 334'
actionsTable[2012] = 335; // 'state 67' -> WS -> shift -> 'action 335'
actionsTable[2013] = 336; // 'state 67' -> TRUE -> shift -> 'action 336'
actionsTable[2014] = 337; // 'state 67' -> FALSE -> shift -> 'action 337'
actionsTable[2015] = 338; // 'state 67' -> NULL -> shift -> 'action 338'
actionsTable[2016] = 339; // 'state 67' -> CURLY_OPEN -> shift -> 'action 339'
actionsTable[2020] = 340; // 'state 67' -> STRING -> shift -> 'action 340'
actionsTable[2021] = 341; // 'state 67' -> BRACKET_OPEN -> shift -> 'action 341'
actionsTable[2030] = 342; // 'state 67' -> NUMBER -> shift -> 'action 342'
actionsTable[2033] = 343; // 'state 67' -> Element -> shift -> 'action 343'
actionsTable[2034] = 344; // 'state 67' -> Value -> shift -> 'action 344'
actionsTable[2035] = 345; // 'state 67' -> Object -> shift -> 'action 345'
actionsTable[2038] = 346; // 'state 67' -> Array -> shift -> 'action 346'
actionsTable[2048] = 347; // 'state 68' -> COMMA -> reduce -> 'action 347'
actionsTable[2052] = 348; // 'state 68' -> BRACKET_CLOSE -> reduce -> 'action 348'
actionsTable[2102] = 349; // 'state 70' -> WS -> shift -> 'action 349'
actionsTable[2103] = 350; // 'state 70' -> TRUE -> shift -> 'action 350'
actionsTable[2104] = 351; // 'state 70' -> FALSE -> shift -> 'action 351'
actionsTable[2105] = 352; // 'state 70' -> NULL -> shift -> 'action 352'
actionsTable[2106] = 353; // 'state 70' -> CURLY_OPEN -> shift -> 'action 353'
actionsTable[2110] = 354; // 'state 70' -> STRING -> shift -> 'action 354'
actionsTable[2111] = 355; // 'state 70' -> BRACKET_OPEN -> shift -> 'action 355'
actionsTable[2120] = 356; // 'state 70' -> NUMBER -> shift -> 'action 356'
actionsTable[2123] = 357; // 'state 70' -> Element -> shift -> 'action 357'
actionsTable[2124] = 358; // 'state 70' -> Value -> shift -> 'action 358'
actionsTable[2125] = 359; // 'state 70' -> Object -> shift -> 'action 359'
actionsTable[2128] = 360; // 'state 70' -> Array -> shift -> 'action 360'
actionsTable[2079] = 361; // 'state 69' -> COLON -> shift -> 'action 361'
actionsTable[2167] = 362; // 'state 72' -> CURLY_CLOSE -> reduce -> 'action 362'
actionsTable[2168] = 363; // 'state 72' -> COMMA -> reduce -> 'action 363'
actionsTable[2140] = 364; // 'state 71' -> STRING -> shift -> 'action 364'
actionsTable[2197] = 365; // 'state 73' -> CURLY_CLOSE -> reduce -> 'action 365'
actionsTable[2198] = 366; // 'state 73' -> COMMA -> reduce -> 'action 366'
actionsTable[2222] = 367; // 'state 74' -> WS -> shift -> 'action 367'
actionsTable[2223] = 368; // 'state 74' -> TRUE -> shift -> 'action 368'
actionsTable[2224] = 369; // 'state 74' -> FALSE -> shift -> 'action 369'
actionsTable[2225] = 370; // 'state 74' -> NULL -> shift -> 'action 370'
actionsTable[2226] = 371; // 'state 74' -> CURLY_OPEN -> shift -> 'action 371'
actionsTable[2230] = 372; // 'state 74' -> STRING -> shift -> 'action 372'
actionsTable[2231] = 373; // 'state 74' -> BRACKET_OPEN -> shift -> 'action 373'
actionsTable[2240] = 374; // 'state 74' -> NUMBER -> shift -> 'action 374'
actionsTable[2243] = 375; // 'state 74' -> Element -> shift -> 'action 375'
actionsTable[2244] = 376; // 'state 74' -> Value -> shift -> 'action 376'
actionsTable[2245] = 377; // 'state 74' -> Object -> shift -> 'action 377'
actionsTable[2248] = 378; // 'state 74' -> Array -> shift -> 'action 378'
actionsTable[2258] = 379; // 'state 75' -> COMMA -> reduce -> 'action 379'
actionsTable[2262] = 380; // 'state 75' -> BRACKET_CLOSE -> reduce -> 'action 380'
actionsTable[2287] = 381; // 'state 76' -> CURLY_CLOSE -> reduce -> 'action 381'
actionsTable[2288] = 382; // 'state 76' -> COMMA -> reduce -> 'action 382'
actionsTable[2312] = 383; // 'state 77' -> WS -> shift -> 'action 383'
actionsTable[2313] = 384; // 'state 77' -> TRUE -> shift -> 'action 384'
actionsTable[2314] = 385; // 'state 77' -> FALSE -> shift -> 'action 385'
actionsTable[2315] = 386; // 'state 77' -> NULL -> shift -> 'action 386'
actionsTable[2316] = 387; // 'state 77' -> CURLY_OPEN -> shift -> 'action 387'
actionsTable[2320] = 388; // 'state 77' -> STRING -> shift -> 'action 388'
actionsTable[2321] = 389; // 'state 77' -> BRACKET_OPEN -> shift -> 'action 389'
actionsTable[2330] = 390; // 'state 77' -> NUMBER -> shift -> 'action 390'
actionsTable[2333] = 391; // 'state 77' -> Element -> shift -> 'action 391'
actionsTable[2334] = 392; // 'state 77' -> Value -> shift -> 'action 392'
actionsTable[2335] = 393; // 'state 77' -> Object -> shift -> 'action 393'
actionsTable[2338] = 394; // 'state 77' -> Array -> shift -> 'action 394'
actionsTable[2347] = 395; // 'state 78' -> CURLY_CLOSE -> reduce -> 'action 395'
actionsTable[2348] = 396; // 'state 78' -> COMMA -> reduce -> 'action 396'
actionsTable[2377] = 397; // 'state 79' -> CURLY_CLOSE -> reduce -> 'action 397'
actionsTable[2378] = 398; // 'state 79' -> COMMA -> reduce -> 'action 398'
actionsTable[2402] = 399; // 'state 80' -> WS -> shift -> 'action 399'
actionsTable[2403] = 400; // 'state 80' -> TRUE -> shift -> 'action 400'
actionsTable[2404] = 401; // 'state 80' -> FALSE -> shift -> 'action 401'
actionsTable[2405] = 402; // 'state 80' -> NULL -> shift -> 'action 402'
actionsTable[2406] = 403; // 'state 80' -> CURLY_OPEN -> shift -> 'action 403'
actionsTable[2410] = 404; // 'state 80' -> STRING -> shift -> 'action 404'
actionsTable[2411] = 405; // 'state 80' -> BRACKET_OPEN -> shift -> 'action 405'
actionsTable[2420] = 406; // 'state 80' -> NUMBER -> shift -> 'action 406'
actionsTable[2423] = 407; // 'state 80' -> Element -> shift -> 'action 407'
actionsTable[2424] = 408; // 'state 80' -> Value -> shift -> 'action 408'
actionsTable[2425] = 409; // 'state 80' -> Object -> shift -> 'action 409'
actionsTable[2428] = 410; // 'state 80' -> Array -> shift -> 'action 410'
actionsTable[2437] = 411; // 'state 81' -> CURLY_CLOSE -> reduce -> 'action 411'
actionsTable[2438] = 412; // 'state 81' -> COMMA -> reduce -> 'action 412'
actionsTable[2467] = 413; // 'state 82' -> CURLY_CLOSE -> reduce -> 'action 413'
actionsTable[2468] = 414; // 'state 82' -> COMMA -> reduce -> 'action 414'
actionsTable[2497] = 415; // 'state 83' -> CURLY_CLOSE -> reduce -> 'action 415'
actionsTable[2498] = 416; // 'state 83' -> COMMA -> reduce -> 'action 416'

const gotoTable = new Uint16Array(2184).fill(0xffff);
gotoTable[0] = 9; // 'state 9'
gotoTable[1] = 10; // 'state 10'
gotoTable[5] = 11; // 'state 11'
gotoTable[12] = 12; // 'state 12'
gotoTable[21] = 13; // 'state 13'
gotoTable[31] = 22; // 'state 22'
gotoTable[38] = 23; // 'state 23'
gotoTable[47] = 24; // 'state 24'
gotoTable[145] = 28; // 'state 28'
gotoTable[147] = 29; // 'state 29'
gotoTable[206] = 33; // 'state 33'
gotoTable[183] = 32; // 'state 32'
gotoTable[187] = 11; // 'state 11'
gotoTable[194] = 12; // 'state 12'
gotoTable[203] = 13; // 'state 13'
gotoTable[483] = 38; // 'state 38'
gotoTable[485] = 39; // 'state 39'
gotoTable[544] = 43; // 'state 43'
gotoTable[521] = 42; // 'state 42'
gotoTable[525] = 11; // 'state 11'
gotoTable[532] = 12; // 'state 12'
gotoTable[541] = 13; // 'state 13'
gotoTable[785] = 22; // 'state 22'
gotoTable[792] = 12; // 'state 12'
gotoTable[801] = 13; // 'state 13'
gotoTable[1045] = 22; // 'state 22'
gotoTable[1052] = 12; // 'state 12'
gotoTable[1061] = 13; // 'state 13'
gotoTable[1239] = 65; // 'state 65'
gotoTable[1275] = 66; // 'state 66'
gotoTable[1279] = 11; // 'state 11'
gotoTable[1286] = 12; // 'state 12'
gotoTable[1295] = 13; // 'state 13'
gotoTable[1327] = 68; // 'state 68'
gotoTable[1331] = 11; // 'state 11'
gotoTable[1338] = 12; // 'state 12'
gotoTable[1347] = 13; // 'state 13'
gotoTable[1473] = 72; // 'state 72'
gotoTable[1509] = 73; // 'state 73'
gotoTable[1513] = 11; // 'state 11'
gotoTable[1520] = 12; // 'state 12'
gotoTable[1529] = 13; // 'state 13'
gotoTable[1561] = 75; // 'state 75'
gotoTable[1565] = 11; // 'state 11'
gotoTable[1572] = 12; // 'state 12'
gotoTable[1581] = 13; // 'state 13'
gotoTable[1639] = 76; // 'state 76'
gotoTable[1643] = 11; // 'state 11'
gotoTable[1650] = 12; // 'state 12'
gotoTable[1659] = 13; // 'state 13'
gotoTable[1743] = 78; // 'state 78'
gotoTable[1747] = 11; // 'state 11'
gotoTable[1754] = 12; // 'state 12'
gotoTable[1763] = 13; // 'state 13'
gotoTable[1821] = 79; // 'state 79'
gotoTable[1825] = 11; // 'state 11'
gotoTable[1832] = 12; // 'state 12'
gotoTable[1841] = 13; // 'state 13'
gotoTable[1925] = 81; // 'state 81'
gotoTable[1929] = 11; // 'state 11'
gotoTable[1936] = 12; // 'state 12'
gotoTable[1945] = 13; // 'state 13'
gotoTable[2003] = 82; // 'state 82'
gotoTable[2007] = 11; // 'state 11'
gotoTable[2014] = 12; // 'state 12'
gotoTable[2023] = 13; // 'state 13'
gotoTable[2081] = 83; // 'state 83'
gotoTable[2085] = 11; // 'state 11'
gotoTable[2092] = 12; // 'state 12'
gotoTable[2101] = 13; // 'state 13'

const nextTokens = {
  initial: nextTokenInitial,
};

const lexer = {
  _stack: [],
  push(name) {
    nextToken = nextTokens[name];
    lexer._stack.push(nextToken);
  },
  pop() {
    lexer._stack.pop();
    nextToken = lexer._stack[lexer._stack.length - 1];
  },
};
let nextToken;

function parse(input) {
  lexer.push("initial");

  const stream = Buffer.from(input);
  let offset = 0;

  let result = nextToken(stream, offset);
  let { state: lookahead, start, end } = result;
  offset = end;

  const stack = new Array(10);
  stack[0] = {
    state: 0,
    tree: undefined,
  };
  let sp = 0;

  while (true) {
    const currentState = stack[sp].state;

    const actionLookup = actionsTable[currentState * 30 + lookahead];
    if (actionLookup === 0xffff) {
      throw new Error(`Unexpected lookahead ${lookahead}`);
    }
    const action = actions[actionLookup];

    switch (action.op) {
      case 2: // done
        lexer.pop();
        return stack[sp].tree;
      case 0: // shift
        const stackItem = {
          state: action.state,
          tree: {
            name: parserSymbols[lookahead],
            start,
            end,
            items: undefined,
          },
        };

        result = nextToken(stream, offset);
        lookahead = result.state;
        start = result.start;
        offset = end = result.end;

        stack[++sp] = stackItem;

        break;
      case 1: // reduce
        let item;
        const actionSymbol = grammarRuleNames[action.symbol];
        for (const value of states[currentState].values()) {
          if (value.name === actionSymbol && value.lookahead === lookahead) {
            item = value;
            break;
          }
        }
        if (!item) {
          throw new Error(`No valid state ${actionSymbol}(${lookahead}) found`);
        }

        const items = new Array(item.tokens.length);
        for (let i = 0; i < item.tokens.length; i++) {
          items[i] = stack[i + sp + 1 - item.tokens.length].tree;
        }
        sp -= item.tokens.length;

        const tree = {
          name: actionSymbol,
          start: -1,
          end: -1,
          items,
        };

        const nextState = gotoTable[stack[sp].state * 26 + action.symbol];
        stack[++sp] = {
          state: nextState,
          tree,
        };

        break;
      default:
        throw new Error("Parser Error");
    }
  }
}

export { parse };
