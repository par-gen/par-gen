import { createToken, Lexer, CstParser } from "chevrotain";
import nearley from "nearley";
import moo from "moo";
import antlr4 from "antlr4";
import peggy from "peggy";
import json5 from "json5";
import { parse as acornParse } from "acorn";
import { parse as babelParse, parseExpression as babelParseExpression } from "@babel/parser";
import ts from "typescript";

// 1. Chevrotain (v13.2.0) - CST and No-CST modes
const TrueTok = createToken({ name: "True", pattern: /true/ });
const FalseTok = createToken({ name: "False", pattern: /false/ });
const NullTok = createToken({ name: "Null", pattern: /null/ });
const LCurly = createToken({ name: "LCurly", pattern: /\{/ });
const RCurly = createToken({ name: "RCurly", pattern: /\}/ });
const LSquare = createToken({ name: "LSquare", pattern: /\[/ });
const RSquare = createToken({ name: "RSquare", pattern: /\]/ });
const Comma = createToken({ name: "Comma", pattern: /,/ });
const Colon = createToken({ name: "Colon", pattern: /:/ });
const StringLiteral = createToken({
  name: "StringLiteral",
  pattern: /"(?:[^\\"]|\\(?:[bfnrtv"\\/]|u[0-9a-fA-F]{4}))*"/,
});
const NumberLiteral = createToken({
  name: "NumberLiteral",
  pattern: /-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?/,
});
const WhiteSpace = createToken({
  name: "WhiteSpace",
  pattern: /[ \t\n\r]+/,
  group: Lexer.SKIPPED,
});

const jsonTokens = [
  WhiteSpace,
  NumberLiteral,
  StringLiteral,
  LCurly,
  RCurly,
  LSquare,
  RSquare,
  Comma,
  Colon,
  TrueTok,
  FalseTok,
  NullTok,
];

const chevLexer = new Lexer(jsonTokens, { positionTracking: "onlyOffset" });

class JsonChevParser extends CstParser {
  constructor(outputCst = true) {
    super(jsonTokens, { recoveryEnabled: false, outputCst });
    const $ = this;
    $.RULE("json", () => {
      $.SUBRULE($.value);
    });
    $.RULE("object", () => {
      $.CONSUME(LCurly);
      $.MANY_SEP({
        SEP: Comma,
        DEF: () => {
          $.SUBRULE($.objectItem);
        },
      });
      $.CONSUME(RCurly);
    });
    $.RULE("objectItem", () => {
      $.CONSUME(StringLiteral);
      $.CONSUME(Colon);
      $.SUBRULE($.value);
    });
    $.RULE("array", () => {
      $.CONSUME(LSquare);
      $.MANY_SEP({
        SEP: Comma,
        DEF: () => {
          $.SUBRULE($.value);
        },
      });
      $.CONSUME(RSquare);
    });
    $.RULE("value", () => {
      $.OR([
        { ALT: () => $.CONSUME(StringLiteral) },
        { ALT: () => $.CONSUME(NumberLiteral) },
        { ALT: () => $.SUBRULE($.object) },
        { ALT: () => $.SUBRULE($.array) },
        { ALT: () => $.CONSUME(TrueTok) },
        { ALT: () => $.CONSUME(FalseTok) },
        { ALT: () => $.CONSUME(NullTok) },
      ]);
    });
    this.performSelfAnalysis();
  }
}

const chevCstParser = new JsonChevParser(true);
const chevNoCstParser = new JsonChevParser(false);

export function parseChevrotainCst(str) {
  const lexResult = chevLexer.tokenize(str);
  chevCstParser.input = lexResult.tokens;
  return chevCstParser.json();
}

export function parseChevrotainNoCst(str) {
  const lexResult = chevLexer.tokenize(str);
  chevNoCstParser.input = lexResult.tokens;
  return chevNoCstParser.json();
}

// 2. Peggy (v5.1.1) - Modern successor to PEG.js
const peggyParser = peggy.generate(`
JSON_text
  = ws v:value ws { return v; }

begin_array     = ws "[" ws
begin_object    = ws "{" ws
end_array       = ws "]" ws
end_object      = ws "}" ws
name_separator  = ws ":" ws
value_separator = ws "," ws

ws "whitespace" = [ \\t\\n\\r]*

value
  = false
  / null
  / true
  / object
  / array
  / number
  / string

false = "false" { return false; }
null  = "null"  { return null;  }
true  = "true"  { return true;  }

object
  = begin_object
    members:(
      head:member
      tail:(value_separator m:member { return m; })*
      { return [head, ...tail]; }
    )?
    end_object
    { return members !== null ? members : []; }

member
  = name:string name_separator value:value
  { return { name, value }; }

array
  = begin_array
    values:(
      head:value
      tail:(value_separator v:value { return v; })*
      { return [head, ...tail]; }
    )?
    end_array
    { return values !== null ? values : []; }

number "number"
  = minus? int frac? exp? { return text(); }

decimal_point = "."
digit1_9      = [1-9]
e             = [eE]
exp           = e (minus / plus)? DIGIT+
frac          = decimal_point DIGIT+
int           = zero / (digit1_9 DIGIT*)
minus         = "-"
plus          = "+"
zero          = "0"

string "string"
  = quotation_mark chars:char* quotation_mark { return text(); }

char
  = unescaped
  / escape
    sequence:(
        '"'
      / "\\\\"
      / "/"
      / "b"
      / "f"
      / "n"
      / "r"
      / "t"
      / "u" $(HEXDIG HEXDIG HEXDIG HEXDIG)
    )

escape         = "\\\\"
quotation_mark = '"'
unescaped      = [^\\0-\\x1F\\x22\\x5C]+

DIGIT  = [0-9]
HEXDIG = [0-9a-f]i
`);

export function parsePeggy(str) {
  return peggyParser.parse(str);
}

// 3. Nearley (v2.20.1) + Moo (v0.5.3)
const nearleyId = (x) => x[0];
const mooLexer = moo.compile({
  space: { match: /[ \t\n\r]+/, lineBreaks: true },
  number: /-?(?:[0-9]|[1-9][0-9]+)(?:\.[0-9]+)?(?:[eE][-+]?[0-9]+)?\b/,
  string: /"(?:\\["bfnrt/\\]|\\u[a-fA-F0-9]{4}|[^"\\])*"/,
  "{": "{",
  "}": "}",
  "[": "[",
  "]": "]",
  ",": ",",
  ":": ":",
  true: "true",
  false: "false",
  null: "null",
});
const origNext = mooLexer.next.bind(mooLexer);
mooLexer.next = () => {
  let tok;
  while ((tok = origNext()) && tok.type === "space") {
    // skip whitespace
  }
  return tok;
};

const nearleyGrammar = nearley.Grammar.fromCompiled({
  Lexer: mooLexer,
  ParserRules: [
    { name: "json", symbols: ["value"], postprocess: nearleyId },
    {
      name: "object",
      symbols: [{ literal: "{" }, { literal: "}" }],
      postprocess: () => ({}),
    },
    { name: "object$ebnf$1", symbols: [] },
    {
      name: "object$ebnf$1$subexpression$1",
      symbols: [{ literal: "," }, "pair"],
    },
    {
      name: "object$ebnf$1",
      symbols: ["object$ebnf$1", "object$ebnf$1$subexpression$1"],
      postprocess: (d) => d[0].concat([d[1]]),
    },
    {
      name: "object",
      symbols: [{ literal: "{" }, "pair", "object$ebnf$1", { literal: "}" }],
      postprocess: (d) => [d[1], ...d[2]],
    },
    {
      name: "pair",
      symbols: [{ type: "string" }, { literal: ":" }, "value"],
      postprocess: (d) => [d[0], d[2]],
    },
    {
      name: "array",
      symbols: [{ literal: "[" }, { literal: "]" }],
      postprocess: () => [],
    },
    { name: "array$ebnf$1", symbols: [] },
    {
      name: "array$ebnf$1$subexpression$1",
      symbols: [{ literal: "," }, "value"],
    },
    {
      name: "array$ebnf$1",
      symbols: ["array$ebnf$1", "array$ebnf$1$subexpression$1"],
      postprocess: (d) => d[0].concat([d[1]]),
    },
    {
      name: "array",
      symbols: [{ literal: "[" }, "value", "array$ebnf$1", { literal: "]" }],
      postprocess: (d) => [d[1], ...d[2]],
    },
    { name: "value", symbols: ["object"], postprocess: nearleyId },
    { name: "value", symbols: ["array"], postprocess: nearleyId },
    { name: "value", symbols: [{ type: "number" }], postprocess: nearleyId },
    { name: "value", symbols: [{ type: "string" }], postprocess: nearleyId },
    { name: "value", symbols: [{ literal: "true" }], postprocess: nearleyId },
    { name: "value", symbols: [{ literal: "false" }], postprocess: nearleyId },
    { name: "value", symbols: [{ literal: "null" }], postprocess: nearleyId },
  ],
  ParserStart: "json",
});

export function parseNearley(str) {
  const p = new nearley.Parser(nearleyGrammar);
  p.feed(str);
  return p.results[0];
}

// 4. ANTLR4 (v4.13.2) generated JSON Lexer + Parser
const lexerSerializedATN = [
  4, 0, 12, 131, 6, -1, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4,
  7, 4, 2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7,
  10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13, 2, 14, 7, 14, 2, 15, 7, 15, 2,
  16, 7, 16, 2, 17, 7, 17, 1, 0, 1, 0, 1, 1, 1, 1, 1, 2, 1, 2, 1, 3, 1, 3, 1,
  4, 1, 4, 1, 5, 1, 5, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 7, 1, 7, 1, 7, 1, 7,
  1, 7, 1, 7, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 9, 1, 9, 1, 9, 5, 9, 69, 8, 9,
  10, 9, 12, 9, 72, 9, 9, 1, 9, 1, 9, 1, 10, 1, 10, 1, 10, 3, 10, 79, 8, 10,
  1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 12, 1, 12, 1, 13, 1, 13, 1, 14,
  3, 14, 92, 8, 14, 1, 14, 1, 14, 1, 14, 4, 14, 97, 8, 14, 11, 14, 12, 14, 98,
  3, 14, 101, 8, 14, 1, 14, 3, 14, 104, 8, 14, 1, 15, 1, 15, 1, 15, 5, 15,
  109, 8, 15, 10, 15, 12, 15, 112, 9, 15, 3, 15, 114, 8, 15, 1, 16, 1, 16, 3,
  16, 118, 8, 16, 1, 16, 4, 16, 121, 8, 16, 11, 16, 12, 16, 122, 1, 17, 4, 17,
  126, 8, 17, 11, 17, 12, 17, 127, 1, 17, 1, 17, 0, 0, 18, 1, 1, 3, 2, 5, 3,
  7, 4, 9, 5, 11, 6, 13, 7, 15, 8, 17, 9, 19, 10, 21, 0, 23, 0, 25, 0, 27, 0,
  29, 11, 31, 0, 33, 0, 35, 12, 1, 0, 8, 8, 0, 34, 34, 47, 47, 92, 92, 98, 98,
  102, 102, 110, 110, 114, 114, 116, 116, 3, 0, 48, 57, 65, 70, 97, 102, 3, 0,
  0, 31, 34, 34, 92, 92, 1, 0, 48, 57, 1, 0, 49, 57, 2, 0, 69, 69, 101, 101,
  2, 0, 43, 43, 45, 45, 3, 0, 9, 10, 13, 13, 32, 32, 136, 0, 1, 1, 0, 0, 0, 0,
  3, 1, 0, 0, 0, 0, 5, 1, 0, 0, 0, 0, 7, 1, 0, 0, 0, 0, 9, 1, 0, 0, 0, 0, 11,
  1, 0, 0, 0, 0, 13, 1, 0, 0, 0, 0, 15, 1, 0, 0, 0, 0, 17, 1, 0, 0, 0, 0, 19,
  1, 0, 0, 0, 0, 29, 1, 0, 0, 0, 0, 35, 1, 0, 0, 0, 1, 37, 1, 0, 0, 0, 3, 39,
  1, 0, 0, 0, 5, 41, 1, 0, 0, 0, 7, 43, 1, 0, 0, 0, 9, 45, 1, 0, 0, 0, 11, 47,
  1, 0, 0, 0, 13, 49, 1, 0, 0, 0, 15, 54, 1, 0, 0, 0, 17, 60, 1, 0, 0, 0, 19,
  65, 1, 0, 0, 0, 21, 75, 1, 0, 0, 0, 23, 80, 1, 0, 0, 0, 25, 86, 1, 0, 0, 0,
  27, 88, 1, 0, 0, 0, 29, 91, 1, 0, 0, 0, 31, 113, 1, 0, 0, 0, 33, 115, 1, 0,
  0, 0, 35, 125, 1, 0, 0, 0, 37, 38, 5, 123, 0, 0, 38, 2, 1, 0, 0, 0, 39, 40,
  5, 44, 0, 0, 40, 4, 1, 0, 0, 0, 41, 42, 5, 125, 0, 0, 42, 6, 1, 0, 0, 0, 43,
  44, 5, 58, 0, 0, 44, 8, 1, 0, 0, 0, 45, 46, 5, 91, 0, 0, 46, 10, 1, 0, 0, 0,
  47, 48, 5, 93, 0, 0, 48, 12, 1, 0, 0, 0, 49, 50, 5, 116, 0, 0, 50, 51, 5,
  114, 0, 0, 51, 52, 5, 117, 0, 0, 52, 53, 5, 101, 0, 0, 53, 14, 1, 0, 0, 0,
  54, 55, 5, 102, 0, 0, 55, 56, 5, 97, 0, 0, 56, 57, 5, 108, 0, 0, 57, 58, 5,
  115, 0, 0, 58, 59, 5, 101, 0, 0, 59, 16, 1, 0, 0, 0, 60, 61, 5, 110, 0, 0,
  61, 62, 5, 117, 0, 0, 62, 63, 5, 108, 0, 0, 63, 64, 5, 108, 0, 0, 64, 18, 1,
  0, 0, 0, 65, 70, 5, 34, 0, 0, 66, 69, 3, 21, 10, 0, 67, 69, 3, 27, 13, 0, 68,
  66, 1, 0, 0, 0, 68, 67, 1, 0, 0, 0, 69, 72, 1, 0, 0, 0, 70, 68, 1, 0, 0, 0,
  70, 71, 1, 0, 0, 0, 71, 73, 1, 0, 0, 0, 72, 70, 1, 0, 0, 0, 73, 74, 5, 34,
  0, 0, 74, 20, 1, 0, 0, 0, 75, 78, 5, 92, 0, 0, 76, 79, 7, 0, 0, 0, 77, 79,
  3, 23, 11, 0, 78, 76, 1, 0, 0, 0, 78, 77, 1, 0, 0, 0, 79, 22, 1, 0, 0, 0,
  80, 81, 5, 117, 0, 0, 81, 82, 3, 25, 12, 0, 82, 83, 3, 25, 12, 0, 83, 84, 3,
  25, 12, 0, 84, 85, 3, 25, 12, 0, 85, 24, 1, 0, 0, 0, 86, 87, 7, 1, 0, 0, 87,
  26, 1, 0, 0, 0, 88, 89, 8, 2, 0, 0, 89, 28, 1, 0, 0, 0, 90, 92, 5, 45, 0, 0,
  91, 90, 1, 0, 0, 0, 91, 92, 1, 0, 0, 0, 92, 93, 1, 0, 0, 0, 93, 100, 3, 31,
  15, 0, 94, 96, 5, 46, 0, 0, 95, 97, 7, 3, 0, 0, 96, 95, 1, 0, 0, 0, 97, 98,
  1, 0, 0, 0, 98, 96, 1, 0, 0, 0, 98, 99, 1, 0, 0, 0, 99, 101, 1, 0, 0, 0,
  100, 94, 1, 0, 0, 0, 100, 101, 1, 0, 0, 0, 101, 103, 1, 0, 0, 0, 102, 104,
  3, 33, 16, 0, 103, 102, 1, 0, 0, 0, 103, 104, 1, 0, 0, 0, 104, 30, 1, 0, 0,
  0, 105, 114, 5, 48, 0, 0, 106, 110, 7, 4, 0, 0, 107, 109, 7, 3, 0, 0, 108,
  107, 1, 0, 0, 0, 109, 112, 1, 0, 0, 0, 110, 108, 1, 0, 0, 0, 110, 111, 1,
  0, 0, 0, 111, 114, 1, 0, 0, 0, 112, 110, 1, 0, 0, 0, 113, 105, 1, 0, 0, 0,
  113, 106, 1, 0, 0, 0, 114, 32, 1, 0, 0, 0, 115, 117, 7, 5, 0, 0, 116, 118,
  7, 6, 0, 0, 117, 116, 1, 0, 0, 0, 117, 118, 1, 0, 0, 0, 118, 120, 1, 0, 0,
  0, 119, 121, 7, 3, 0, 0, 120, 119, 1, 0, 0, 0, 121, 122, 1, 0, 0, 0, 122,
  120, 1, 0, 0, 0, 122, 123, 1, 0, 0, 0, 123, 34, 1, 0, 0, 0, 124, 126, 7, 7,
  0, 0, 125, 124, 1, 0, 0, 0, 126, 127, 1, 0, 0, 0, 127, 125, 1, 0, 0, 0, 127,
  128, 1, 0, 0, 0, 128, 129, 1, 0, 0, 0, 129, 130, 6, 17, 0, 0, 130, 36, 1, 0,
  0, 0, 13, 0, 68, 70, 78, 91, 98, 100, 103, 110, 113, 117, 122, 127, 1, 6, 0,
  0,
];
const lexerATN = new antlr4.atn.ATNDeserializer().deserialize(lexerSerializedATN);
const lexerDecisionsToDFA = lexerATN.decisionToState.map(
  (ds, idx) => new antlr4.dfa.DFA(ds, idx)
);

class JSONLexer extends antlr4.Lexer {
  static grammarFileName = "JSON.g4";
  static channelNames = ["DEFAULT_TOKEN_CHANNEL", "HIDDEN"];
  static modeNames = ["DEFAULT_MODE"];
  static literalNames = [
    null,
    "'{'",
    "','",
    "'}'",
    "':'",
    "'['",
    "']'",
    "'true'",
    "'false'",
    "'null'",
  ];
  static symbolicNames = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    "STRING",
    "NUMBER",
    "WS",
  ];
  static ruleNames = [
    "T__0",
    "T__1",
    "T__2",
    "T__3",
    "T__4",
    "T__5",
    "T__6",
    "T__7",
    "T__8",
    "STRING",
    "ESC",
    "UNICODE",
    "HEX",
    "SAFECODEPOINT",
    "NUMBER",
    "INT",
    "EXP",
    "WS",
  ];
  constructor(input) {
    super(input);
    this._interp = new antlr4.atn.LexerATNSimulator(
      this,
      lexerATN,
      lexerDecisionsToDFA,
      new antlr4.atn.PredictionContextCache()
    );
  }
}

const parserSerializedATN = [
  4, 1, 12, 57, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 1,
  0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 18, 8, 1, 10, 1, 12, 1, 21, 9,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 27, 8, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 3, 1,
  3, 1, 3, 1, 3, 5, 3, 37, 8, 3, 10, 3, 12, 3, 40, 9, 3, 1, 3, 1, 3, 1, 3, 1,
  3, 3, 3, 46, 8, 3, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 3, 4, 55, 8, 4,
  1, 4, 0, 0, 5, 0, 2, 4, 6, 8, 0, 0, 61, 0, 10, 1, 0, 0, 0, 2, 26, 1, 0, 0, 0,
  4, 28, 1, 0, 0, 0, 6, 45, 1, 0, 0, 0, 8, 54, 1, 0, 0, 0, 10, 11, 3, 8, 4, 0,
  11, 12, 5, 0, 0, 1, 12, 1, 1, 0, 0, 0, 13, 14, 5, 1, 0, 0, 14, 19, 3, 4, 2,
  0, 15, 16, 5, 2, 0, 0, 16, 18, 3, 4, 2, 0, 17, 15, 1, 0, 0, 0, 18, 21, 1, 0,
  0, 0, 19, 17, 1, 0, 0, 0, 19, 20, 1, 0, 0, 0, 20, 22, 1, 0, 0, 0, 21, 19, 1,
  0, 0, 0, 22, 23, 5, 3, 0, 0, 23, 27, 1, 0, 0, 0, 24, 25, 5, 1, 0, 0, 25, 27,
  5, 3, 0, 0, 26, 13, 1, 0, 0, 0, 26, 24, 1, 0, 0, 0, 27, 3, 1, 0, 0, 0, 28,
  29, 5, 10, 0, 0, 29, 30, 5, 4, 0, 0, 30, 31, 3, 8, 4, 0, 31, 5, 1, 0, 0, 0,
  32, 33, 5, 5, 0, 0, 33, 38, 3, 8, 4, 0, 34, 35, 5, 2, 0, 0, 35, 37, 3, 8, 4,
  0, 36, 34, 1, 0, 0, 0, 37, 40, 1, 0, 0, 0, 38, 36, 1, 0, 0, 0, 38, 39, 1, 0,
  0, 0, 39, 41, 1, 0, 0, 0, 40, 38, 1, 0, 0, 0, 41, 42, 5, 6, 0, 0, 42, 46, 1,
  0, 0, 0, 43, 44, 5, 5, 0, 0, 44, 46, 5, 6, 0, 0, 45, 32, 1, 0, 0, 0, 45, 43,
  1, 0, 0, 0, 46, 7, 1, 0, 0, 0, 47, 55, 5, 10, 0, 0, 48, 55, 5, 11, 0, 0, 49,
  55, 3, 2, 1, 0, 50, 55, 3, 6, 3, 0, 51, 55, 5, 7, 0, 0, 52, 55, 5, 8, 0, 0,
  53, 55, 5, 9, 0, 0, 54, 47, 1, 0, 0, 0, 54, 48, 1, 0, 0, 0, 54, 49, 1, 0, 0,
  0, 54, 50, 1, 0, 0, 0, 54, 51, 1, 0, 0, 0, 54, 52, 1, 0, 0, 0, 54, 53, 1, 0,
  0, 0, 55, 9, 1, 0, 0, 0, 5, 19, 26, 38, 45, 54,
];
const parserATN = new antlr4.atn.ATNDeserializer().deserialize(parserSerializedATN);
const parserDecisionsToDFA = parserATN.decisionToState.map(
  (ds, idx) => new antlr4.dfa.DFA(ds, idx)
);
const sharedContextCache = new antlr4.atn.PredictionContextCache();

class JsonContext extends antlr4.ParserRuleContext {
  constructor(parser, parent = null, invokingState = -1) {
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = 0;
  }
}
class ObjContext extends antlr4.ParserRuleContext {
  constructor(parser, parent = null, invokingState = -1) {
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = 1;
  }
}
class PairContext extends antlr4.ParserRuleContext {
  constructor(parser, parent = null, invokingState = -1) {
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = 2;
  }
}
class ArrContext extends antlr4.ParserRuleContext {
  constructor(parser, parent = null, invokingState = -1) {
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = 3;
  }
}
class ValueContext extends antlr4.ParserRuleContext {
  constructor(parser, parent = null, invokingState = -1) {
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = 4;
  }
}

class JSONParser extends antlr4.Parser {
  static grammarFileName = "JSON.g4";
  static literalNames = JSONLexer.literalNames;
  static symbolicNames = JSONLexer.symbolicNames;
  static ruleNames = ["json", "obj", "pair", "arr", "value"];
  constructor(input) {
    super(input);
    this._interp = new antlr4.atn.ParserATNSimulator(
      this,
      parserATN,
      parserDecisionsToDFA,
      sharedContextCache
    );
    this.ruleNames = JSONParser.ruleNames;
    this.literalNames = JSONParser.literalNames;
    this.symbolicNames = JSONParser.symbolicNames;
  }
  json() {
    const localctx = new JsonContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, 0);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 10;
      this.value();
      this.state = 11;
      this.match(antlr4.Token.EOF);
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  obj() {
    const localctx = new ObjContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, 1);
    try {
      this.state = 26;
      this._errHandler.sync(this);
      const la_ = this._interp.adaptivePredict(this._input, 1, this._ctx);
      if (la_ === 1) {
        this.enterOuterAlt(localctx, 1);
        this.state = 13;
        this.match(1);
        this.state = 14;
        this.pair();
        this.state = 19;
        this._errHandler.sync(this);
        let _la = this._input.LA(1);
        while (_la === 2) {
          this.state = 15;
          this.match(2);
          this.state = 16;
          this.pair();
          this.state = 21;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 22;
        this.match(3);
      } else if (la_ === 2) {
        this.enterOuterAlt(localctx, 2);
        this.state = 24;
        this.match(1);
        this.state = 25;
        this.match(3);
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  pair() {
    const localctx = new PairContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, 2);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 28;
      this.match(10);
      this.state = 29;
      this.match(4);
      this.state = 30;
      this.value();
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  arr() {
    const localctx = new ArrContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, 3);
    try {
      this.state = 45;
      this._errHandler.sync(this);
      const la_ = this._interp.adaptivePredict(this._input, 3, this._ctx);
      if (la_ === 1) {
        this.enterOuterAlt(localctx, 1);
        this.state = 32;
        this.match(5);
        this.state = 33;
        this.value();
        this.state = 38;
        this._errHandler.sync(this);
        let _la = this._input.LA(1);
        while (_la === 2) {
          this.state = 34;
          this.match(2);
          this.state = 35;
          this.value();
          this.state = 40;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 41;
        this.match(6);
      } else if (la_ === 2) {
        this.enterOuterAlt(localctx, 2);
        this.state = 43;
        this.match(5);
        this.state = 44;
        this.match(6);
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  value() {
    const localctx = new ValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, 4);
    try {
      this.state = 54;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 10:
          this.enterOuterAlt(localctx, 1);
          this.state = 47;
          this.match(10);
          break;
        case 11:
          this.enterOuterAlt(localctx, 2);
          this.state = 48;
          this.match(11);
          break;
        case 1:
          this.enterOuterAlt(localctx, 3);
          this.state = 49;
          this.obj();
          break;
        case 5:
          this.enterOuterAlt(localctx, 4);
          this.state = 50;
          this.arr();
          break;
        case 7:
          this.enterOuterAlt(localctx, 5);
          this.state = 51;
          this.match(7);
          break;
        case 8:
          this.enterOuterAlt(localctx, 6);
          this.state = 52;
          this.match(8);
          break;
        case 9:
          this.enterOuterAlt(localctx, 7);
          this.state = 53;
          this.match(9);
          break;
        default:
          throw new antlr4.error.NoViableAltException(this);
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
}

export function parseAntlr4(str) {
  const chars = antlr4.CharStreams.fromString(str);
  const lexer = new JSONLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new JSONParser(tokens);
  parser.buildParseTrees = true;
  return parser.json();
}

export function parseJson5(str) {
  return json5.parse(str);
}

export function parseAcorn(jsExprSource) {
  return acornParse(jsExprSource, { ecmaVersion: "latest" });
}

export function parseBabel(jsExprSource) {
  return babelParse(jsExprSource);
}

export function parseBabelJsonExpression(str) {
  return babelParseExpression(str);
}

export function parseTypeScriptJson(str) {
  return ts.parseJsonText("file.json", str);
}
