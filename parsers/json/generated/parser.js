import { next as nextToken } from "./lexer.js";

function printState(state) {
  return Array.from(state.values())
    .map((item) => printItem(item))
    .join("\n");
}

function printItem(item) {
  const head = [...(item.tokens ?? [])].slice(0, item.marker ?? 0);
  const tail = [...(item.tokens ?? [])].slice(item.marker ?? 0);

  return `${item.name} -> ${[...head, "•", ...tail].join(" ")}, ${
    item.lookahead
  }`;
}

const states = [
  new Set([
    { name: "S", tokens: ["Json"], marker: 0, lookahead: "@expound.EOF" },
    { name: "Json", tokens: ["Element"], marker: 0, lookahead: "@expound.EOF" },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: "@expound.EOF",
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: "CURLY_CLOSE",
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: "COMMA",
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: "BRACKET_CLOSE",
    },
  ]),
  new Set([
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 1,
      lookahead: "@expound.EOF",
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 1,
      lookahead: "CURLY_CLOSE",
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 1,
      lookahead: "COMMA",
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 1,
      lookahead: "BRACKET_CLOSE",
    },
    { name: "Value", tokens: ["Object"], marker: 0, lookahead: "WS" },
    { name: "Value", tokens: ["Array"], marker: 0, lookahead: "WS" },
    { name: "Value", tokens: ["String"], marker: 0, lookahead: "WS" },
    { name: "Value", tokens: ["Number"], marker: 0, lookahead: "WS" },
    { name: "Value", tokens: ["TRUE"], marker: 0, lookahead: "WS" },
    { name: "Value", tokens: ["FALSE"], marker: 0, lookahead: "WS" },
    { name: "Value", tokens: ["NULL"], marker: 0, lookahead: "WS" },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: "WS",
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: "WS",
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: "WS",
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: "WS",
    },
    {
      name: "String",
      tokens: ["QUOTE", "Characters", "QUOTE"],
      marker: 0,
      lookahead: "WS",
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: "WS",
    },
    { name: "Integer", tokens: ["ZERO"], marker: 0, lookahead: "DOT" },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: "DOT",
    },
    { name: "Integer", tokens: ["MINUS", "ZERO"], marker: 0, lookahead: "DOT" },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: "DOT",
    },
  ]),
  new Set([
    { name: "S", tokens: ["Json"], marker: 1, lookahead: "@expound.EOF" },
  ]),
  new Set([
    { name: "Json", tokens: ["Element"], marker: 1, lookahead: "@expound.EOF" },
  ]),
  new Set([{ name: "Value", tokens: ["TRUE"], marker: 1, lookahead: "WS" }]),
  new Set([{ name: "Value", tokens: ["FALSE"], marker: 1, lookahead: "WS" }]),
  new Set([{ name: "Value", tokens: ["NULL"], marker: 1, lookahead: "WS" }]),
  new Set([
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 1,
      lookahead: "WS",
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 1,
      lookahead: "WS",
    },
    {
      name: "Members",
      tokens: ["Member"],
      marker: 0,
      lookahead: "CURLY_CLOSE",
    },
    { name: "Members", tokens: ["Member"], marker: 0, lookahead: "COMMA" },
    {
      name: "Members",
      tokens: ["Members", "COMMA", "Member"],
      marker: 0,
      lookahead: "CURLY_CLOSE",
    },
    {
      name: "Members",
      tokens: ["Members", "COMMA", "Member"],
      marker: 0,
      lookahead: "COMMA",
    },
    {
      name: "Member",
      tokens: ["WS", "String", "WS", "COLON", "Element"],
      marker: 0,
      lookahead: "CURLY_CLOSE",
    },
    {
      name: "Member",
      tokens: ["WS", "String", "WS", "COLON", "Element"],
      marker: 0,
      lookahead: "COMMA",
    },
  ]),
  new Set([
    {
      name: "String",
      tokens: ["QUOTE", "Characters", "QUOTE"],
      marker: 1,
      lookahead: "WS",
    },
    {
      name: "Characters",
      tokens: ["Characters", "Character"],
      marker: 0,
      lookahead: "QUOTE",
    },
    {
      name: "Characters",
      tokens: ["Characters", "Character"],
      marker: 0,
      lookahead: "CHAR",
    },
    {
      name: "Characters",
      tokens: ["Character"],
      marker: 0,
      lookahead: "QUOTE",
    },
    { name: "Characters", tokens: ["Character"], marker: 0, lookahead: "CHAR" },
    { name: "Character", tokens: ["CHAR"], marker: 0, lookahead: "QUOTE" },
    { name: "Character", tokens: ["CHAR"], marker: 0, lookahead: "CHAR" },
  ]),
  new Set([
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 1,
      lookahead: "WS",
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 1,
      lookahead: "WS",
    },
    {
      name: "Elements",
      tokens: ["Element"],
      marker: 0,
      lookahead: "BRACKET_CLOSE",
    },
    { name: "Elements", tokens: ["Element"], marker: 0, lookahead: "COMMA" },
    {
      name: "Elements",
      tokens: ["Elements", "COMMA", "Element"],
      marker: 0,
      lookahead: "BRACKET_CLOSE",
    },
    {
      name: "Elements",
      tokens: ["Elements", "COMMA", "Element"],
      marker: 0,
      lookahead: "COMMA",
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: "@expound.EOF",
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: "CURLY_CLOSE",
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: "COMMA",
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: "BRACKET_CLOSE",
    },
  ]),
  new Set([{ name: "Integer", tokens: ["ZERO"], marker: 1, lookahead: "DOT" }]),
  new Set([
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 1,
      lookahead: "DOT",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: "DOT",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: "ZERO",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: "ONE_NINE",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: "UPPER_E",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: "LOWER_E",
    },
    { name: "Digits", tokens: ["Digits", "Digit"], marker: 0, lookahead: "WS" },
    { name: "Digits", tokens: ["Digit"], marker: 0, lookahead: "DOT" },
    { name: "Digits", tokens: ["Digit"], marker: 0, lookahead: "ZERO" },
    { name: "Digits", tokens: ["Digit"], marker: 0, lookahead: "ONE_NINE" },
    { name: "Digits", tokens: ["Digit"], marker: 0, lookahead: "UPPER_E" },
    { name: "Digits", tokens: ["Digit"], marker: 0, lookahead: "LOWER_E" },
    { name: "Digits", tokens: ["Digit"], marker: 0, lookahead: "WS" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "DOT" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "ZERO" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "ONE_NINE" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "UPPER_E" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "LOWER_E" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "WS" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "DOT" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "ZERO" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "ONE_NINE" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "UPPER_E" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "LOWER_E" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "WS" },
  ]),
  new Set([
    { name: "Integer", tokens: ["MINUS", "ZERO"], marker: 1, lookahead: "DOT" },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 1,
      lookahead: "DOT",
    },
  ]),
  new Set([
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 2,
      lookahead: "@expound.EOF",
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 2,
      lookahead: "CURLY_CLOSE",
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 2,
      lookahead: "COMMA",
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 2,
      lookahead: "BRACKET_CLOSE",
    },
  ]),
  new Set([{ name: "Value", tokens: ["Object"], marker: 1, lookahead: "WS" }]),
  new Set([{ name: "Value", tokens: ["String"], marker: 1, lookahead: "WS" }]),
  new Set([{ name: "Value", tokens: ["Array"], marker: 1, lookahead: "WS" }]),
  new Set([{ name: "Value", tokens: ["Number"], marker: 1, lookahead: "WS" }]),
  new Set([
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 1,
      lookahead: "WS",
    },
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 0,
      lookahead: "UPPER_E",
    },
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 0,
      lookahead: "LOWER_E",
    },
  ]),
  new Set([
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 3,
      lookahead: "@expound.EOF",
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 3,
      lookahead: "CURLY_CLOSE",
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 3,
      lookahead: "COMMA",
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 3,
      lookahead: "BRACKET_CLOSE",
    },
  ]),
  new Set([
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 2,
      lookahead: "WS",
    },
    {
      name: "Member",
      tokens: ["WS", "String", "WS", "COLON", "Element"],
      marker: 1,
      lookahead: "CURLY_CLOSE",
    },
    {
      name: "Member",
      tokens: ["WS", "String", "WS", "COLON", "Element"],
      marker: 1,
      lookahead: "COMMA",
    },
    {
      name: "String",
      tokens: ["QUOTE", "Characters", "QUOTE"],
      marker: 0,
      lookahead: "WS",
    },
  ]),
  new Set([
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 2,
      lookahead: "WS",
    },
    {
      name: "Members",
      tokens: ["Members", "COMMA", "Member"],
      marker: 1,
      lookahead: "CURLY_CLOSE",
    },
    {
      name: "Members",
      tokens: ["Members", "COMMA", "Member"],
      marker: 1,
      lookahead: "COMMA",
    },
  ]),
  new Set([
    {
      name: "Members",
      tokens: ["Member"],
      marker: 1,
      lookahead: "CURLY_CLOSE",
    },
    { name: "Members", tokens: ["Member"], marker: 1, lookahead: "COMMA" },
  ]),
  new Set([
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 2,
      lookahead: "WS",
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 1,
      lookahead: "@expound.EOF",
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 1,
      lookahead: "CURLY_CLOSE",
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 1,
      lookahead: "COMMA",
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 1,
      lookahead: "BRACKET_CLOSE",
    },
    { name: "Value", tokens: ["Object"], marker: 0, lookahead: "WS" },
    { name: "Value", tokens: ["Array"], marker: 0, lookahead: "WS" },
    { name: "Value", tokens: ["String"], marker: 0, lookahead: "WS" },
    { name: "Value", tokens: ["Number"], marker: 0, lookahead: "WS" },
    { name: "Value", tokens: ["TRUE"], marker: 0, lookahead: "WS" },
    { name: "Value", tokens: ["FALSE"], marker: 0, lookahead: "WS" },
    { name: "Value", tokens: ["NULL"], marker: 0, lookahead: "WS" },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 0,
      lookahead: "WS",
    },
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 0,
      lookahead: "WS",
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: "WS",
    },
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 0,
      lookahead: "WS",
    },
    {
      name: "String",
      tokens: ["QUOTE", "Characters", "QUOTE"],
      marker: 0,
      lookahead: "WS",
    },
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 0,
      lookahead: "WS",
    },
    { name: "Integer", tokens: ["ZERO"], marker: 0, lookahead: "DOT" },
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 0,
      lookahead: "DOT",
    },
    { name: "Integer", tokens: ["MINUS", "ZERO"], marker: 0, lookahead: "DOT" },
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 0,
      lookahead: "DOT",
    },
  ]),
  new Set([
    {
      name: "Elements",
      tokens: ["Element"],
      marker: 1,
      lookahead: "BRACKET_CLOSE",
    },
    { name: "Elements", tokens: ["Element"], marker: 1, lookahead: "COMMA" },
  ]),
  new Set([
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 2,
      lookahead: "WS",
    },
    {
      name: "Elements",
      tokens: ["Elements", "COMMA", "Element"],
      marker: 1,
      lookahead: "BRACKET_CLOSE",
    },
    {
      name: "Elements",
      tokens: ["Elements", "COMMA", "Element"],
      marker: 1,
      lookahead: "COMMA",
    },
  ]),
  new Set([
    { name: "Character", tokens: ["CHAR"], marker: 1, lookahead: "QUOTE" },
    { name: "Character", tokens: ["CHAR"], marker: 1, lookahead: "CHAR" },
  ]),
  new Set([
    {
      name: "String",
      tokens: ["QUOTE", "Characters", "QUOTE"],
      marker: 2,
      lookahead: "WS",
    },
    {
      name: "Characters",
      tokens: ["Characters", "Character"],
      marker: 1,
      lookahead: "QUOTE",
    },
    {
      name: "Characters",
      tokens: ["Characters", "Character"],
      marker: 1,
      lookahead: "CHAR",
    },
    { name: "Character", tokens: ["CHAR"], marker: 0, lookahead: "QUOTE" },
    { name: "Character", tokens: ["CHAR"], marker: 0, lookahead: "CHAR" },
  ]),
  new Set([
    {
      name: "Characters",
      tokens: ["Character"],
      marker: 1,
      lookahead: "QUOTE",
    },
    { name: "Characters", tokens: ["Character"], marker: 1, lookahead: "CHAR" },
  ]),
  new Set([
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 1,
      lookahead: "UPPER_E",
    },
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 1,
      lookahead: "LOWER_E",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: "DOT",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: "ZERO",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: "ONE_NINE",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: "UPPER_E",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: "LOWER_E",
    },
    { name: "Digits", tokens: ["Digits", "Digit"], marker: 0, lookahead: "WS" },
    { name: "Digits", tokens: ["Digit"], marker: 0, lookahead: "DOT" },
    { name: "Digits", tokens: ["Digit"], marker: 0, lookahead: "ZERO" },
    { name: "Digits", tokens: ["Digit"], marker: 0, lookahead: "ONE_NINE" },
    { name: "Digits", tokens: ["Digit"], marker: 0, lookahead: "UPPER_E" },
    { name: "Digits", tokens: ["Digit"], marker: 0, lookahead: "LOWER_E" },
    { name: "Digits", tokens: ["Digit"], marker: 0, lookahead: "WS" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "DOT" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "ZERO" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "ONE_NINE" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "UPPER_E" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "LOWER_E" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "WS" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "DOT" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "ZERO" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "ONE_NINE" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "UPPER_E" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "LOWER_E" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "WS" },
  ]),
  new Set([
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 2,
      lookahead: "WS",
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Digits"],
      marker: 0,
      lookahead: "WS",
    },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 0,
      lookahead: "WS",
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Digits"],
      marker: 0,
      lookahead: "WS",
    },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 0,
      lookahead: "WS",
    },
  ]),
  new Set([
    { name: "Digit", tokens: ["ZERO"], marker: 1, lookahead: "DOT" },
    { name: "Digit", tokens: ["ZERO"], marker: 1, lookahead: "ZERO" },
    { name: "Digit", tokens: ["ZERO"], marker: 1, lookahead: "ONE_NINE" },
    { name: "Digit", tokens: ["ZERO"], marker: 1, lookahead: "UPPER_E" },
    { name: "Digit", tokens: ["ZERO"], marker: 1, lookahead: "LOWER_E" },
    { name: "Digit", tokens: ["ZERO"], marker: 1, lookahead: "WS" },
  ]),
  new Set([
    { name: "Digit", tokens: ["ONE_NINE"], marker: 1, lookahead: "DOT" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 1, lookahead: "ZERO" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 1, lookahead: "ONE_NINE" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 1, lookahead: "UPPER_E" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 1, lookahead: "LOWER_E" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 1, lookahead: "WS" },
  ]),
  new Set([
    {
      name: "Integer",
      tokens: ["ONE_NINE", "Digits"],
      marker: 2,
      lookahead: "DOT",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: "DOT",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: "ZERO",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: "ONE_NINE",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: "UPPER_E",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: "LOWER_E",
    },
    { name: "Digits", tokens: ["Digits", "Digit"], marker: 1, lookahead: "WS" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "DOT" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "ZERO" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "ONE_NINE" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "UPPER_E" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "LOWER_E" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "WS" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "DOT" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "ZERO" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "ONE_NINE" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "UPPER_E" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "LOWER_E" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "WS" },
  ]),
  new Set([
    { name: "Digits", tokens: ["Digit"], marker: 1, lookahead: "DOT" },
    { name: "Digits", tokens: ["Digit"], marker: 1, lookahead: "ZERO" },
    { name: "Digits", tokens: ["Digit"], marker: 1, lookahead: "ONE_NINE" },
    { name: "Digits", tokens: ["Digit"], marker: 1, lookahead: "UPPER_E" },
    { name: "Digits", tokens: ["Digit"], marker: 1, lookahead: "LOWER_E" },
    { name: "Digits", tokens: ["Digit"], marker: 1, lookahead: "WS" },
  ]),
  new Set([
    { name: "Integer", tokens: ["MINUS", "ZERO"], marker: 2, lookahead: "DOT" },
  ]),
  new Set([
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 2,
      lookahead: "DOT",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: "DOT",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: "ZERO",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: "ONE_NINE",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: "UPPER_E",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: "LOWER_E",
    },
    { name: "Digits", tokens: ["Digits", "Digit"], marker: 0, lookahead: "WS" },
    { name: "Digits", tokens: ["Digit"], marker: 0, lookahead: "DOT" },
    { name: "Digits", tokens: ["Digit"], marker: 0, lookahead: "ZERO" },
    { name: "Digits", tokens: ["Digit"], marker: 0, lookahead: "ONE_NINE" },
    { name: "Digits", tokens: ["Digit"], marker: 0, lookahead: "UPPER_E" },
    { name: "Digits", tokens: ["Digit"], marker: 0, lookahead: "LOWER_E" },
    { name: "Digits", tokens: ["Digit"], marker: 0, lookahead: "WS" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "DOT" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "ZERO" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "ONE_NINE" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "UPPER_E" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "LOWER_E" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "WS" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "DOT" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "ZERO" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "ONE_NINE" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "UPPER_E" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "LOWER_E" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "WS" },
  ]),
  new Set([
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "WS", "CURLY_CLOSE"],
      marker: 3,
      lookahead: "WS",
    },
  ]),
  new Set([
    {
      name: "Member",
      tokens: ["WS", "String", "WS", "COLON", "Element"],
      marker: 2,
      lookahead: "CURLY_CLOSE",
    },
    {
      name: "Member",
      tokens: ["WS", "String", "WS", "COLON", "Element"],
      marker: 2,
      lookahead: "COMMA",
    },
  ]),
  new Set([
    {
      name: "Object",
      tokens: ["CURLY_OPEN", "Members", "CURLY_CLOSE"],
      marker: 3,
      lookahead: "WS",
    },
  ]),
  new Set([
    {
      name: "Members",
      tokens: ["Members", "COMMA", "Member"],
      marker: 2,
      lookahead: "CURLY_CLOSE",
    },
    {
      name: "Members",
      tokens: ["Members", "COMMA", "Member"],
      marker: 2,
      lookahead: "COMMA",
    },
    {
      name: "Member",
      tokens: ["WS", "String", "WS", "COLON", "Element"],
      marker: 0,
      lookahead: "CURLY_CLOSE",
    },
    {
      name: "Member",
      tokens: ["WS", "String", "WS", "COLON", "Element"],
      marker: 0,
      lookahead: "COMMA",
    },
  ]),
  new Set([
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "WS", "BRACKET_CLOSE"],
      marker: 3,
      lookahead: "WS",
    },
  ]),
  new Set([
    {
      name: "Elements",
      tokens: ["Elements", "COMMA", "Element"],
      marker: 2,
      lookahead: "BRACKET_CLOSE",
    },
    {
      name: "Elements",
      tokens: ["Elements", "COMMA", "Element"],
      marker: 2,
      lookahead: "COMMA",
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: "@expound.EOF",
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: "CURLY_CLOSE",
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: "COMMA",
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: "BRACKET_CLOSE",
    },
  ]),
  new Set([
    {
      name: "Array",
      tokens: ["BRACKET_OPEN", "Elements", "BRACKET_CLOSE"],
      marker: 3,
      lookahead: "WS",
    },
  ]),
  new Set([
    { name: "Character", tokens: ["CHAR"], marker: 1, lookahead: "QUOTE" },
    { name: "Character", tokens: ["CHAR"], marker: 1, lookahead: "CHAR" },
  ]),
  new Set([
    {
      name: "String",
      tokens: ["QUOTE", "Characters", "QUOTE"],
      marker: 3,
      lookahead: "WS",
    },
  ]),
  new Set([
    {
      name: "Characters",
      tokens: ["Characters", "Character"],
      marker: 2,
      lookahead: "QUOTE",
    },
    {
      name: "Characters",
      tokens: ["Characters", "Character"],
      marker: 2,
      lookahead: "CHAR",
    },
  ]),
  new Set([
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Digits"],
      marker: 1,
      lookahead: "WS",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: "DOT",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: "ZERO",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: "ONE_NINE",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: "UPPER_E",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: "LOWER_E",
    },
    { name: "Digits", tokens: ["Digits", "Digit"], marker: 0, lookahead: "WS" },
    { name: "Digits", tokens: ["Digit"], marker: 0, lookahead: "DOT" },
    { name: "Digits", tokens: ["Digit"], marker: 0, lookahead: "ZERO" },
    { name: "Digits", tokens: ["Digit"], marker: 0, lookahead: "ONE_NINE" },
    { name: "Digits", tokens: ["Digit"], marker: 0, lookahead: "UPPER_E" },
    { name: "Digits", tokens: ["Digit"], marker: 0, lookahead: "LOWER_E" },
    { name: "Digits", tokens: ["Digit"], marker: 0, lookahead: "WS" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "DOT" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "ZERO" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "ONE_NINE" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "UPPER_E" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "LOWER_E" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "WS" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "DOT" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "ZERO" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "ONE_NINE" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "UPPER_E" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "LOWER_E" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "WS" },
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 1,
      lookahead: "WS",
    },
    { name: "Sign", tokens: ["PLUS"], marker: 0, lookahead: "ZERO" },
    { name: "Sign", tokens: ["PLUS"], marker: 0, lookahead: "ONE_NINE" },
    { name: "Sign", tokens: ["MINUS"], marker: 0, lookahead: "ZERO" },
    { name: "Sign", tokens: ["MINUS"], marker: 0, lookahead: "ONE_NINE" },
  ]),
  new Set([
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Digits"],
      marker: 1,
      lookahead: "WS",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: "DOT",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: "ZERO",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: "ONE_NINE",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: "UPPER_E",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: "LOWER_E",
    },
    { name: "Digits", tokens: ["Digits", "Digit"], marker: 0, lookahead: "WS" },
    { name: "Digits", tokens: ["Digit"], marker: 0, lookahead: "DOT" },
    { name: "Digits", tokens: ["Digit"], marker: 0, lookahead: "ZERO" },
    { name: "Digits", tokens: ["Digit"], marker: 0, lookahead: "ONE_NINE" },
    { name: "Digits", tokens: ["Digit"], marker: 0, lookahead: "UPPER_E" },
    { name: "Digits", tokens: ["Digit"], marker: 0, lookahead: "LOWER_E" },
    { name: "Digits", tokens: ["Digit"], marker: 0, lookahead: "WS" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "DOT" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "ZERO" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "ONE_NINE" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "UPPER_E" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "LOWER_E" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "WS" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "DOT" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "ZERO" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "ONE_NINE" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "UPPER_E" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "LOWER_E" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "WS" },
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 1,
      lookahead: "WS",
    },
    { name: "Sign", tokens: ["PLUS"], marker: 0, lookahead: "ZERO" },
    { name: "Sign", tokens: ["PLUS"], marker: 0, lookahead: "ONE_NINE" },
    { name: "Sign", tokens: ["MINUS"], marker: 0, lookahead: "ZERO" },
    { name: "Sign", tokens: ["MINUS"], marker: 0, lookahead: "ONE_NINE" },
  ]),
  new Set([
    {
      name: "Number",
      tokens: ["Integer", "Fraction", "Exponent"],
      marker: 3,
      lookahead: "WS",
    },
  ]),
  new Set([
    { name: "Digit", tokens: ["ZERO"], marker: 1, lookahead: "DOT" },
    { name: "Digit", tokens: ["ZERO"], marker: 1, lookahead: "ZERO" },
    { name: "Digit", tokens: ["ZERO"], marker: 1, lookahead: "ONE_NINE" },
    { name: "Digit", tokens: ["ZERO"], marker: 1, lookahead: "UPPER_E" },
    { name: "Digit", tokens: ["ZERO"], marker: 1, lookahead: "LOWER_E" },
    { name: "Digit", tokens: ["ZERO"], marker: 1, lookahead: "WS" },
  ]),
  new Set([
    { name: "Digit", tokens: ["ONE_NINE"], marker: 1, lookahead: "DOT" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 1, lookahead: "ZERO" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 1, lookahead: "ONE_NINE" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 1, lookahead: "UPPER_E" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 1, lookahead: "LOWER_E" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 1, lookahead: "WS" },
  ]),
  new Set([
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 2,
      lookahead: "UPPER_E",
    },
    {
      name: "Fraction",
      tokens: ["DOT", "Digits"],
      marker: 2,
      lookahead: "LOWER_E",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: "DOT",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: "ZERO",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: "ONE_NINE",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: "UPPER_E",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: "LOWER_E",
    },
    { name: "Digits", tokens: ["Digits", "Digit"], marker: 1, lookahead: "WS" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "DOT" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "ZERO" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "ONE_NINE" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "UPPER_E" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "LOWER_E" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "WS" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "DOT" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "ZERO" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "ONE_NINE" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "UPPER_E" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "LOWER_E" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "WS" },
  ]),
  new Set([
    { name: "Digits", tokens: ["Digit"], marker: 1, lookahead: "DOT" },
    { name: "Digits", tokens: ["Digit"], marker: 1, lookahead: "ZERO" },
    { name: "Digits", tokens: ["Digit"], marker: 1, lookahead: "ONE_NINE" },
    { name: "Digits", tokens: ["Digit"], marker: 1, lookahead: "UPPER_E" },
    { name: "Digits", tokens: ["Digit"], marker: 1, lookahead: "LOWER_E" },
    { name: "Digits", tokens: ["Digit"], marker: 1, lookahead: "WS" },
  ]),
  new Set([
    { name: "Digit", tokens: ["ZERO"], marker: 1, lookahead: "DOT" },
    { name: "Digit", tokens: ["ZERO"], marker: 1, lookahead: "ZERO" },
    { name: "Digit", tokens: ["ZERO"], marker: 1, lookahead: "ONE_NINE" },
    { name: "Digit", tokens: ["ZERO"], marker: 1, lookahead: "UPPER_E" },
    { name: "Digit", tokens: ["ZERO"], marker: 1, lookahead: "LOWER_E" },
    { name: "Digit", tokens: ["ZERO"], marker: 1, lookahead: "WS" },
  ]),
  new Set([
    { name: "Digit", tokens: ["ONE_NINE"], marker: 1, lookahead: "DOT" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 1, lookahead: "ZERO" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 1, lookahead: "ONE_NINE" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 1, lookahead: "UPPER_E" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 1, lookahead: "LOWER_E" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 1, lookahead: "WS" },
  ]),
  new Set([
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: "DOT",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: "ZERO",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: "ONE_NINE",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: "UPPER_E",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: "LOWER_E",
    },
    { name: "Digits", tokens: ["Digits", "Digit"], marker: 2, lookahead: "WS" },
  ]),
  new Set([
    {
      name: "Integer",
      tokens: ["MINUS", "ONE_NINE", "Digits"],
      marker: 3,
      lookahead: "DOT",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: "DOT",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: "ZERO",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: "ONE_NINE",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: "UPPER_E",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: "LOWER_E",
    },
    { name: "Digits", tokens: ["Digits", "Digit"], marker: 1, lookahead: "WS" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "DOT" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "ZERO" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "ONE_NINE" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "UPPER_E" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "LOWER_E" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "WS" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "DOT" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "ZERO" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "ONE_NINE" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "UPPER_E" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "LOWER_E" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "WS" },
  ]),
  new Set([
    {
      name: "Member",
      tokens: ["WS", "String", "WS", "COLON", "Element"],
      marker: 3,
      lookahead: "CURLY_CLOSE",
    },
    {
      name: "Member",
      tokens: ["WS", "String", "WS", "COLON", "Element"],
      marker: 3,
      lookahead: "COMMA",
    },
  ]),
  new Set([
    {
      name: "Member",
      tokens: ["WS", "String", "WS", "COLON", "Element"],
      marker: 1,
      lookahead: "CURLY_CLOSE",
    },
    {
      name: "Member",
      tokens: ["WS", "String", "WS", "COLON", "Element"],
      marker: 1,
      lookahead: "COMMA",
    },
    {
      name: "String",
      tokens: ["QUOTE", "Characters", "QUOTE"],
      marker: 0,
      lookahead: "WS",
    },
  ]),
  new Set([
    {
      name: "Members",
      tokens: ["Members", "COMMA", "Member"],
      marker: 3,
      lookahead: "CURLY_CLOSE",
    },
    {
      name: "Members",
      tokens: ["Members", "COMMA", "Member"],
      marker: 3,
      lookahead: "COMMA",
    },
  ]),
  new Set([
    {
      name: "Elements",
      tokens: ["Elements", "COMMA", "Element"],
      marker: 3,
      lookahead: "BRACKET_CLOSE",
    },
    {
      name: "Elements",
      tokens: ["Elements", "COMMA", "Element"],
      marker: 3,
      lookahead: "COMMA",
    },
  ]),
  new Set([
    { name: "Sign", tokens: ["PLUS"], marker: 1, lookahead: "ZERO" },
    { name: "Sign", tokens: ["PLUS"], marker: 1, lookahead: "ONE_NINE" },
  ]),
  new Set([
    { name: "Sign", tokens: ["MINUS"], marker: 1, lookahead: "ZERO" },
    { name: "Sign", tokens: ["MINUS"], marker: 1, lookahead: "ONE_NINE" },
  ]),
  new Set([
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Digits"],
      marker: 2,
      lookahead: "WS",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: "DOT",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: "ZERO",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: "ONE_NINE",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: "UPPER_E",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: "LOWER_E",
    },
    { name: "Digits", tokens: ["Digits", "Digit"], marker: 1, lookahead: "WS" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "DOT" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "ZERO" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "ONE_NINE" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "UPPER_E" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "LOWER_E" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "WS" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "DOT" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "ZERO" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "ONE_NINE" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "UPPER_E" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "LOWER_E" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "WS" },
  ]),
  new Set([
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 2,
      lookahead: "WS",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: "DOT",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: "ZERO",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: "ONE_NINE",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: "UPPER_E",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: "LOWER_E",
    },
    { name: "Digits", tokens: ["Digits", "Digit"], marker: 0, lookahead: "WS" },
    { name: "Digits", tokens: ["Digit"], marker: 0, lookahead: "DOT" },
    { name: "Digits", tokens: ["Digit"], marker: 0, lookahead: "ZERO" },
    { name: "Digits", tokens: ["Digit"], marker: 0, lookahead: "ONE_NINE" },
    { name: "Digits", tokens: ["Digit"], marker: 0, lookahead: "UPPER_E" },
    { name: "Digits", tokens: ["Digit"], marker: 0, lookahead: "LOWER_E" },
    { name: "Digits", tokens: ["Digit"], marker: 0, lookahead: "WS" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "DOT" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "ZERO" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "ONE_NINE" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "UPPER_E" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "LOWER_E" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "WS" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "DOT" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "ZERO" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "ONE_NINE" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "UPPER_E" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "LOWER_E" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "WS" },
  ]),
  new Set([
    { name: "Sign", tokens: ["PLUS"], marker: 1, lookahead: "ZERO" },
    { name: "Sign", tokens: ["PLUS"], marker: 1, lookahead: "ONE_NINE" },
  ]),
  new Set([
    { name: "Sign", tokens: ["MINUS"], marker: 1, lookahead: "ZERO" },
    { name: "Sign", tokens: ["MINUS"], marker: 1, lookahead: "ONE_NINE" },
  ]),
  new Set([
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Digits"],
      marker: 2,
      lookahead: "WS",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: "DOT",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: "ZERO",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: "ONE_NINE",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: "UPPER_E",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: "LOWER_E",
    },
    { name: "Digits", tokens: ["Digits", "Digit"], marker: 1, lookahead: "WS" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "DOT" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "ZERO" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "ONE_NINE" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "UPPER_E" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "LOWER_E" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "WS" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "DOT" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "ZERO" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "ONE_NINE" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "UPPER_E" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "LOWER_E" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "WS" },
  ]),
  new Set([
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 2,
      lookahead: "WS",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: "DOT",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: "ZERO",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: "ONE_NINE",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: "UPPER_E",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 0,
      lookahead: "LOWER_E",
    },
    { name: "Digits", tokens: ["Digits", "Digit"], marker: 0, lookahead: "WS" },
    { name: "Digits", tokens: ["Digit"], marker: 0, lookahead: "DOT" },
    { name: "Digits", tokens: ["Digit"], marker: 0, lookahead: "ZERO" },
    { name: "Digits", tokens: ["Digit"], marker: 0, lookahead: "ONE_NINE" },
    { name: "Digits", tokens: ["Digit"], marker: 0, lookahead: "UPPER_E" },
    { name: "Digits", tokens: ["Digit"], marker: 0, lookahead: "LOWER_E" },
    { name: "Digits", tokens: ["Digit"], marker: 0, lookahead: "WS" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "DOT" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "ZERO" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "ONE_NINE" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "UPPER_E" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "LOWER_E" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "WS" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "DOT" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "ZERO" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "ONE_NINE" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "UPPER_E" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "LOWER_E" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "WS" },
  ]),
  new Set([
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: "DOT",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: "ZERO",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: "ONE_NINE",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: "UPPER_E",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 2,
      lookahead: "LOWER_E",
    },
    { name: "Digits", tokens: ["Digits", "Digit"], marker: 2, lookahead: "WS" },
  ]),
  new Set([
    {
      name: "Member",
      tokens: ["WS", "String", "WS", "COLON", "Element"],
      marker: 4,
      lookahead: "CURLY_CLOSE",
    },
    {
      name: "Member",
      tokens: ["WS", "String", "WS", "COLON", "Element"],
      marker: 4,
      lookahead: "COMMA",
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: "@expound.EOF",
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: "CURLY_CLOSE",
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: "COMMA",
    },
    {
      name: "Element",
      tokens: ["WS", "Value", "WS"],
      marker: 0,
      lookahead: "BRACKET_CLOSE",
    },
  ]),
  new Set([
    {
      name: "Exponent",
      tokens: ["UPPER_E", "Sign", "Digits"],
      marker: 3,
      lookahead: "WS",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: "DOT",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: "ZERO",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: "ONE_NINE",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: "UPPER_E",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: "LOWER_E",
    },
    { name: "Digits", tokens: ["Digits", "Digit"], marker: 1, lookahead: "WS" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "DOT" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "ZERO" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "ONE_NINE" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "UPPER_E" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "LOWER_E" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "WS" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "DOT" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "ZERO" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "ONE_NINE" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "UPPER_E" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "LOWER_E" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "WS" },
  ]),
  new Set([
    {
      name: "Exponent",
      tokens: ["LOWER_E", "Sign", "Digits"],
      marker: 3,
      lookahead: "WS",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: "DOT",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: "ZERO",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: "ONE_NINE",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: "UPPER_E",
    },
    {
      name: "Digits",
      tokens: ["Digits", "Digit"],
      marker: 1,
      lookahead: "LOWER_E",
    },
    { name: "Digits", tokens: ["Digits", "Digit"], marker: 1, lookahead: "WS" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "DOT" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "ZERO" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "ONE_NINE" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "UPPER_E" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "LOWER_E" },
    { name: "Digit", tokens: ["ZERO"], marker: 0, lookahead: "WS" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "DOT" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "ZERO" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "ONE_NINE" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "UPPER_E" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "LOWER_E" },
    { name: "Digit", tokens: ["ONE_NINE"], marker: 0, lookahead: "WS" },
  ]),
  new Set([
    {
      name: "Member",
      tokens: ["WS", "String", "WS", "COLON", "Element"],
      marker: 5,
      lookahead: "CURLY_CLOSE",
    },
    {
      name: "Member",
      tokens: ["WS", "String", "WS", "COLON", "Element"],
      marker: 5,
      lookahead: "COMMA",
    },
  ]),
];

const startState = states[0];

const actions = new Map([
  [
    states[0],
    new Map([
      [
        "WS",
        {
          op: "shift",
          symbol: undefined,
          state: states[1],
        },
      ],
      [
        "Json",
        {
          op: "shift",
          symbol: undefined,
          state: states[2],
        },
      ],
      [
        "Element",
        {
          op: "shift",
          symbol: undefined,
          state: states[3],
        },
      ],
    ]),
  ],
  [
    states[2],
    new Map([
      [
        "@expound.EOF",
        {
          op: "done",
          symbol: undefined,
          state: undefined,
        },
      ],
    ]),
  ],
  [
    states[3],
    new Map([
      [
        "@expound.EOF",
        {
          op: "reduce",
          symbol: "Json",
          state: undefined,
        },
      ],
    ]),
  ],
  [
    states[1],
    new Map([
      [
        "TRUE",
        {
          op: "shift",
          symbol: undefined,
          state: states[4],
        },
      ],
      [
        "FALSE",
        {
          op: "shift",
          symbol: undefined,
          state: states[5],
        },
      ],
      [
        "NULL",
        {
          op: "shift",
          symbol: undefined,
          state: states[6],
        },
      ],
      [
        "CURLY_OPEN",
        {
          op: "shift",
          symbol: undefined,
          state: states[7],
        },
      ],
      [
        "QUOTE",
        {
          op: "shift",
          symbol: undefined,
          state: states[8],
        },
      ],
      [
        "BRACKET_OPEN",
        {
          op: "shift",
          symbol: undefined,
          state: states[9],
        },
      ],
      [
        "ZERO",
        {
          op: "shift",
          symbol: undefined,
          state: states[10],
        },
      ],
      [
        "ONE_NINE",
        {
          op: "shift",
          symbol: undefined,
          state: states[11],
        },
      ],
      [
        "MINUS",
        {
          op: "shift",
          symbol: undefined,
          state: states[12],
        },
      ],
      [
        "Value",
        {
          op: "shift",
          symbol: undefined,
          state: states[13],
        },
      ],
      [
        "Object",
        {
          op: "shift",
          symbol: undefined,
          state: states[14],
        },
      ],
      [
        "String",
        {
          op: "shift",
          symbol: undefined,
          state: states[15],
        },
      ],
      [
        "Array",
        {
          op: "shift",
          symbol: undefined,
          state: states[16],
        },
      ],
      [
        "Number",
        {
          op: "shift",
          symbol: undefined,
          state: states[17],
        },
      ],
      [
        "Integer",
        {
          op: "shift",
          symbol: undefined,
          state: states[18],
        },
      ],
    ]),
  ],
  [
    states[13],
    new Map([
      [
        "WS",
        {
          op: "shift",
          symbol: undefined,
          state: states[19],
        },
      ],
    ]),
  ],
  [
    states[14],
    new Map([
      [
        "WS",
        {
          op: "reduce",
          symbol: "Value",
          state: undefined,
        },
      ],
    ]),
  ],
  [
    states[16],
    new Map([
      [
        "WS",
        {
          op: "reduce",
          symbol: "Value",
          state: undefined,
        },
      ],
    ]),
  ],
  [
    states[15],
    new Map([
      [
        "WS",
        {
          op: "reduce",
          symbol: "Value",
          state: undefined,
        },
      ],
    ]),
  ],
  [
    states[17],
    new Map([
      [
        "WS",
        {
          op: "reduce",
          symbol: "Value",
          state: undefined,
        },
      ],
    ]),
  ],
  [
    states[4],
    new Map([
      [
        "WS",
        {
          op: "reduce",
          symbol: "Value",
          state: undefined,
        },
      ],
    ]),
  ],
  [
    states[5],
    new Map([
      [
        "WS",
        {
          op: "reduce",
          symbol: "Value",
          state: undefined,
        },
      ],
    ]),
  ],
  [
    states[6],
    new Map([
      [
        "WS",
        {
          op: "reduce",
          symbol: "Value",
          state: undefined,
        },
      ],
    ]),
  ],
  [
    states[7],
    new Map([
      [
        "WS",
        {
          op: "shift",
          symbol: undefined,
          state: states[20],
        },
      ],
      [
        "Members",
        {
          op: "shift",
          symbol: undefined,
          state: states[21],
        },
      ],
      [
        "Member",
        {
          op: "shift",
          symbol: undefined,
          state: states[22],
        },
      ],
    ]),
  ],
  [
    states[9],
    new Map([
      [
        "WS",
        {
          op: "shift",
          symbol: undefined,
          state: states[23],
        },
      ],
      [
        "Element",
        {
          op: "shift",
          symbol: undefined,
          state: states[24],
        },
      ],
      [
        "Elements",
        {
          op: "shift",
          symbol: undefined,
          state: states[25],
        },
      ],
    ]),
  ],
  [
    states[8],
    new Map([
      [
        "CHAR",
        {
          op: "shift",
          symbol: undefined,
          state: states[26],
        },
      ],
      [
        "Characters",
        {
          op: "shift",
          symbol: undefined,
          state: states[27],
        },
      ],
      [
        "Character",
        {
          op: "shift",
          symbol: undefined,
          state: states[28],
        },
      ],
    ]),
  ],
  [
    states[18],
    new Map([
      [
        "DOT",
        {
          op: "shift",
          symbol: undefined,
          state: states[29],
        },
      ],
      [
        "Fraction",
        {
          op: "shift",
          symbol: undefined,
          state: states[30],
        },
      ],
    ]),
  ],
  [
    states[10],
    new Map([
      [
        "DOT",
        {
          op: "reduce",
          symbol: "Integer",
          state: undefined,
        },
      ],
    ]),
  ],
  [
    states[11],
    new Map([
      [
        "ZERO",
        {
          op: "shift",
          symbol: undefined,
          state: states[31],
        },
      ],
      [
        "ONE_NINE",
        {
          op: "shift",
          symbol: undefined,
          state: states[32],
        },
      ],
      [
        "Digits",
        {
          op: "shift",
          symbol: undefined,
          state: states[33],
        },
      ],
      [
        "Digit",
        {
          op: "shift",
          symbol: undefined,
          state: states[34],
        },
      ],
    ]),
  ],
  [
    states[12],
    new Map([
      [
        "ZERO",
        {
          op: "shift",
          symbol: undefined,
          state: states[35],
        },
      ],
      [
        "ONE_NINE",
        {
          op: "shift",
          symbol: undefined,
          state: states[36],
        },
      ],
    ]),
  ],
  [
    states[19],
    new Map([
      [
        "CURLY_CLOSE",
        {
          op: "reduce",
          symbol: "Element",
          state: undefined,
        },
      ],
      [
        "COMMA",
        {
          op: "reduce",
          symbol: "Element",
          state: undefined,
        },
      ],
      [
        "BRACKET_CLOSE",
        {
          op: "reduce",
          symbol: "Element",
          state: undefined,
        },
      ],
      [
        "@expound.EOF",
        {
          op: "reduce",
          symbol: "Element",
          state: undefined,
        },
      ],
    ]),
  ],
  [
    states[20],
    new Map([
      [
        "CURLY_CLOSE",
        {
          op: "shift",
          symbol: undefined,
          state: states[37],
        },
      ],
      [
        "QUOTE",
        {
          op: "shift",
          symbol: undefined,
          state: states[8],
        },
      ],
      [
        "String",
        {
          op: "shift",
          symbol: undefined,
          state: states[38],
        },
      ],
    ]),
  ],
  [
    states[21],
    new Map([
      [
        "CURLY_CLOSE",
        {
          op: "shift",
          symbol: undefined,
          state: states[39],
        },
      ],
      [
        "COMMA",
        {
          op: "shift",
          symbol: undefined,
          state: states[40],
        },
      ],
    ]),
  ],
  [
    states[22],
    new Map([
      [
        "CURLY_CLOSE",
        {
          op: "reduce",
          symbol: "Members",
          state: undefined,
        },
      ],
      [
        "COMMA",
        {
          op: "reduce",
          symbol: "Members",
          state: undefined,
        },
      ],
    ]),
  ],
  [
    states[23],
    new Map([
      [
        "TRUE",
        {
          op: "shift",
          symbol: undefined,
          state: states[4],
        },
      ],
      [
        "FALSE",
        {
          op: "shift",
          symbol: undefined,
          state: states[5],
        },
      ],
      [
        "NULL",
        {
          op: "shift",
          symbol: undefined,
          state: states[6],
        },
      ],
      [
        "CURLY_OPEN",
        {
          op: "shift",
          symbol: undefined,
          state: states[7],
        },
      ],
      [
        "QUOTE",
        {
          op: "shift",
          symbol: undefined,
          state: states[8],
        },
      ],
      [
        "BRACKET_OPEN",
        {
          op: "shift",
          symbol: undefined,
          state: states[9],
        },
      ],
      [
        "BRACKET_CLOSE",
        {
          op: "shift",
          symbol: undefined,
          state: states[41],
        },
      ],
      [
        "ZERO",
        {
          op: "shift",
          symbol: undefined,
          state: states[10],
        },
      ],
      [
        "ONE_NINE",
        {
          op: "shift",
          symbol: undefined,
          state: states[11],
        },
      ],
      [
        "MINUS",
        {
          op: "shift",
          symbol: undefined,
          state: states[12],
        },
      ],
      [
        "Value",
        {
          op: "shift",
          symbol: undefined,
          state: states[13],
        },
      ],
      [
        "Object",
        {
          op: "shift",
          symbol: undefined,
          state: states[14],
        },
      ],
      [
        "String",
        {
          op: "shift",
          symbol: undefined,
          state: states[15],
        },
      ],
      [
        "Array",
        {
          op: "shift",
          symbol: undefined,
          state: states[16],
        },
      ],
      [
        "Number",
        {
          op: "shift",
          symbol: undefined,
          state: states[17],
        },
      ],
      [
        "Integer",
        {
          op: "shift",
          symbol: undefined,
          state: states[18],
        },
      ],
    ]),
  ],
  [
    states[25],
    new Map([
      [
        "COMMA",
        {
          op: "shift",
          symbol: undefined,
          state: states[42],
        },
      ],
      [
        "BRACKET_CLOSE",
        {
          op: "shift",
          symbol: undefined,
          state: states[43],
        },
      ],
    ]),
  ],
  [
    states[24],
    new Map([
      [
        "COMMA",
        {
          op: "reduce",
          symbol: "Elements",
          state: undefined,
        },
      ],
      [
        "BRACKET_CLOSE",
        {
          op: "reduce",
          symbol: "Elements",
          state: undefined,
        },
      ],
    ]),
  ],
  [
    states[27],
    new Map([
      [
        "CHAR",
        {
          op: "shift",
          symbol: undefined,
          state: states[44],
        },
      ],
      [
        "QUOTE",
        {
          op: "shift",
          symbol: undefined,
          state: states[45],
        },
      ],
      [
        "Character",
        {
          op: "shift",
          symbol: undefined,
          state: states[46],
        },
      ],
    ]),
  ],
  [
    states[28],
    new Map([
      [
        "CHAR",
        {
          op: "reduce",
          symbol: "Characters",
          state: undefined,
        },
      ],
      [
        "QUOTE",
        {
          op: "reduce",
          symbol: "Characters",
          state: undefined,
        },
      ],
    ]),
  ],
  [
    states[26],
    new Map([
      [
        "CHAR",
        {
          op: "reduce",
          symbol: "Character",
          state: undefined,
        },
      ],
      [
        "QUOTE",
        {
          op: "reduce",
          symbol: "Character",
          state: undefined,
        },
      ],
    ]),
  ],
  [
    states[30],
    new Map([
      [
        "UPPER_E",
        {
          op: "shift",
          symbol: undefined,
          state: states[47],
        },
      ],
      [
        "LOWER_E",
        {
          op: "shift",
          symbol: undefined,
          state: states[48],
        },
      ],
      [
        "Exponent",
        {
          op: "shift",
          symbol: undefined,
          state: states[49],
        },
      ],
    ]),
  ],
  [
    states[29],
    new Map([
      [
        "ZERO",
        {
          op: "shift",
          symbol: undefined,
          state: states[50],
        },
      ],
      [
        "ONE_NINE",
        {
          op: "shift",
          symbol: undefined,
          state: states[51],
        },
      ],
      [
        "Digits",
        {
          op: "shift",
          symbol: undefined,
          state: states[52],
        },
      ],
      [
        "Digit",
        {
          op: "shift",
          symbol: undefined,
          state: states[53],
        },
      ],
    ]),
  ],
  [
    states[33],
    new Map([
      [
        "ZERO",
        {
          op: "shift",
          symbol: undefined,
          state: states[54],
        },
      ],
      [
        "ONE_NINE",
        {
          op: "shift",
          symbol: undefined,
          state: states[55],
        },
      ],
      [
        "Digit",
        {
          op: "shift",
          symbol: undefined,
          state: states[56],
        },
      ],
      [
        "DOT",
        {
          op: "reduce",
          symbol: "Integer",
          state: undefined,
        },
      ],
    ]),
  ],
  [
    states[34],
    new Map([
      [
        "WS",
        {
          op: "reduce",
          symbol: "Digits",
          state: undefined,
        },
      ],
      [
        "ZERO",
        {
          op: "reduce",
          symbol: "Digits",
          state: undefined,
        },
      ],
      [
        "ONE_NINE",
        {
          op: "reduce",
          symbol: "Digits",
          state: undefined,
        },
      ],
      [
        "DOT",
        {
          op: "reduce",
          symbol: "Digits",
          state: undefined,
        },
      ],
      [
        "UPPER_E",
        {
          op: "reduce",
          symbol: "Digits",
          state: undefined,
        },
      ],
      [
        "LOWER_E",
        {
          op: "reduce",
          symbol: "Digits",
          state: undefined,
        },
      ],
    ]),
  ],
  [
    states[31],
    new Map([
      [
        "WS",
        {
          op: "reduce",
          symbol: "Digit",
          state: undefined,
        },
      ],
      [
        "ZERO",
        {
          op: "reduce",
          symbol: "Digit",
          state: undefined,
        },
      ],
      [
        "ONE_NINE",
        {
          op: "reduce",
          symbol: "Digit",
          state: undefined,
        },
      ],
      [
        "DOT",
        {
          op: "reduce",
          symbol: "Digit",
          state: undefined,
        },
      ],
      [
        "UPPER_E",
        {
          op: "reduce",
          symbol: "Digit",
          state: undefined,
        },
      ],
      [
        "LOWER_E",
        {
          op: "reduce",
          symbol: "Digit",
          state: undefined,
        },
      ],
    ]),
  ],
  [
    states[32],
    new Map([
      [
        "WS",
        {
          op: "reduce",
          symbol: "Digit",
          state: undefined,
        },
      ],
      [
        "ZERO",
        {
          op: "reduce",
          symbol: "Digit",
          state: undefined,
        },
      ],
      [
        "ONE_NINE",
        {
          op: "reduce",
          symbol: "Digit",
          state: undefined,
        },
      ],
      [
        "DOT",
        {
          op: "reduce",
          symbol: "Digit",
          state: undefined,
        },
      ],
      [
        "UPPER_E",
        {
          op: "reduce",
          symbol: "Digit",
          state: undefined,
        },
      ],
      [
        "LOWER_E",
        {
          op: "reduce",
          symbol: "Digit",
          state: undefined,
        },
      ],
    ]),
  ],
  [
    states[35],
    new Map([
      [
        "DOT",
        {
          op: "reduce",
          symbol: "Integer",
          state: undefined,
        },
      ],
    ]),
  ],
  [
    states[36],
    new Map([
      [
        "ZERO",
        {
          op: "shift",
          symbol: undefined,
          state: states[31],
        },
      ],
      [
        "ONE_NINE",
        {
          op: "shift",
          symbol: undefined,
          state: states[32],
        },
      ],
      [
        "Digits",
        {
          op: "shift",
          symbol: undefined,
          state: states[57],
        },
      ],
      [
        "Digit",
        {
          op: "shift",
          symbol: undefined,
          state: states[34],
        },
      ],
    ]),
  ],
  [
    states[37],
    new Map([
      [
        "WS",
        {
          op: "reduce",
          symbol: "Object",
          state: undefined,
        },
      ],
    ]),
  ],
  [
    states[38],
    new Map([
      [
        "WS",
        {
          op: "shift",
          symbol: undefined,
          state: states[58],
        },
      ],
    ]),
  ],
  [
    states[39],
    new Map([
      [
        "WS",
        {
          op: "reduce",
          symbol: "Object",
          state: undefined,
        },
      ],
    ]),
  ],
  [
    states[40],
    new Map([
      [
        "WS",
        {
          op: "shift",
          symbol: undefined,
          state: states[59],
        },
      ],
      [
        "Member",
        {
          op: "shift",
          symbol: undefined,
          state: states[60],
        },
      ],
    ]),
  ],
  [
    states[41],
    new Map([
      [
        "WS",
        {
          op: "reduce",
          symbol: "Array",
          state: undefined,
        },
      ],
    ]),
  ],
  [
    states[43],
    new Map([
      [
        "WS",
        {
          op: "reduce",
          symbol: "Array",
          state: undefined,
        },
      ],
    ]),
  ],
  [
    states[42],
    new Map([
      [
        "WS",
        {
          op: "shift",
          symbol: undefined,
          state: states[1],
        },
      ],
      [
        "Element",
        {
          op: "shift",
          symbol: undefined,
          state: states[61],
        },
      ],
    ]),
  ],
  [
    states[45],
    new Map([
      [
        "WS",
        {
          op: "reduce",
          symbol: "String",
          state: undefined,
        },
      ],
    ]),
  ],
  [
    states[46],
    new Map([
      [
        "CHAR",
        {
          op: "reduce",
          symbol: "Characters",
          state: undefined,
        },
      ],
      [
        "QUOTE",
        {
          op: "reduce",
          symbol: "Characters",
          state: undefined,
        },
      ],
    ]),
  ],
  [
    states[44],
    new Map([
      [
        "CHAR",
        {
          op: "reduce",
          symbol: "Character",
          state: undefined,
        },
      ],
      [
        "QUOTE",
        {
          op: "reduce",
          symbol: "Character",
          state: undefined,
        },
      ],
    ]),
  ],
  [
    states[49],
    new Map([
      [
        "WS",
        {
          op: "reduce",
          symbol: "Number",
          state: undefined,
        },
      ],
    ]),
  ],
  [
    states[47],
    new Map([
      [
        "ZERO",
        {
          op: "shift",
          symbol: undefined,
          state: states[31],
        },
      ],
      [
        "ONE_NINE",
        {
          op: "shift",
          symbol: undefined,
          state: states[32],
        },
      ],
      [
        "PLUS",
        {
          op: "shift",
          symbol: undefined,
          state: states[62],
        },
      ],
      [
        "MINUS",
        {
          op: "shift",
          symbol: undefined,
          state: states[63],
        },
      ],
      [
        "Digits",
        {
          op: "shift",
          symbol: undefined,
          state: states[64],
        },
      ],
      [
        "Digit",
        {
          op: "shift",
          symbol: undefined,
          state: states[34],
        },
      ],
      [
        "Sign",
        {
          op: "shift",
          symbol: undefined,
          state: states[65],
        },
      ],
    ]),
  ],
  [
    states[48],
    new Map([
      [
        "ZERO",
        {
          op: "shift",
          symbol: undefined,
          state: states[31],
        },
      ],
      [
        "ONE_NINE",
        {
          op: "shift",
          symbol: undefined,
          state: states[32],
        },
      ],
      [
        "PLUS",
        {
          op: "shift",
          symbol: undefined,
          state: states[66],
        },
      ],
      [
        "MINUS",
        {
          op: "shift",
          symbol: undefined,
          state: states[67],
        },
      ],
      [
        "Digits",
        {
          op: "shift",
          symbol: undefined,
          state: states[68],
        },
      ],
      [
        "Digit",
        {
          op: "shift",
          symbol: undefined,
          state: states[34],
        },
      ],
      [
        "Sign",
        {
          op: "shift",
          symbol: undefined,
          state: states[69],
        },
      ],
    ]),
  ],
  [
    states[52],
    new Map([
      [
        "ZERO",
        {
          op: "shift",
          symbol: undefined,
          state: states[31],
        },
      ],
      [
        "ONE_NINE",
        {
          op: "shift",
          symbol: undefined,
          state: states[32],
        },
      ],
      [
        "Digit",
        {
          op: "shift",
          symbol: undefined,
          state: states[70],
        },
      ],
      [
        "UPPER_E",
        {
          op: "reduce",
          symbol: "Fraction",
          state: undefined,
        },
      ],
      [
        "LOWER_E",
        {
          op: "reduce",
          symbol: "Fraction",
          state: undefined,
        },
      ],
    ]),
  ],
  [
    states[53],
    new Map([
      [
        "WS",
        {
          op: "reduce",
          symbol: "Digits",
          state: undefined,
        },
      ],
      [
        "ZERO",
        {
          op: "reduce",
          symbol: "Digits",
          state: undefined,
        },
      ],
      [
        "ONE_NINE",
        {
          op: "reduce",
          symbol: "Digits",
          state: undefined,
        },
      ],
      [
        "DOT",
        {
          op: "reduce",
          symbol: "Digits",
          state: undefined,
        },
      ],
      [
        "UPPER_E",
        {
          op: "reduce",
          symbol: "Digits",
          state: undefined,
        },
      ],
      [
        "LOWER_E",
        {
          op: "reduce",
          symbol: "Digits",
          state: undefined,
        },
      ],
    ]),
  ],
  [
    states[50],
    new Map([
      [
        "WS",
        {
          op: "reduce",
          symbol: "Digit",
          state: undefined,
        },
      ],
      [
        "ZERO",
        {
          op: "reduce",
          symbol: "Digit",
          state: undefined,
        },
      ],
      [
        "ONE_NINE",
        {
          op: "reduce",
          symbol: "Digit",
          state: undefined,
        },
      ],
      [
        "DOT",
        {
          op: "reduce",
          symbol: "Digit",
          state: undefined,
        },
      ],
      [
        "UPPER_E",
        {
          op: "reduce",
          symbol: "Digit",
          state: undefined,
        },
      ],
      [
        "LOWER_E",
        {
          op: "reduce",
          symbol: "Digit",
          state: undefined,
        },
      ],
    ]),
  ],
  [
    states[51],
    new Map([
      [
        "WS",
        {
          op: "reduce",
          symbol: "Digit",
          state: undefined,
        },
      ],
      [
        "ZERO",
        {
          op: "reduce",
          symbol: "Digit",
          state: undefined,
        },
      ],
      [
        "ONE_NINE",
        {
          op: "reduce",
          symbol: "Digit",
          state: undefined,
        },
      ],
      [
        "DOT",
        {
          op: "reduce",
          symbol: "Digit",
          state: undefined,
        },
      ],
      [
        "UPPER_E",
        {
          op: "reduce",
          symbol: "Digit",
          state: undefined,
        },
      ],
      [
        "LOWER_E",
        {
          op: "reduce",
          symbol: "Digit",
          state: undefined,
        },
      ],
    ]),
  ],
  [
    states[56],
    new Map([
      [
        "WS",
        {
          op: "reduce",
          symbol: "Digits",
          state: undefined,
        },
      ],
      [
        "ZERO",
        {
          op: "reduce",
          symbol: "Digits",
          state: undefined,
        },
      ],
      [
        "ONE_NINE",
        {
          op: "reduce",
          symbol: "Digits",
          state: undefined,
        },
      ],
      [
        "DOT",
        {
          op: "reduce",
          symbol: "Digits",
          state: undefined,
        },
      ],
      [
        "UPPER_E",
        {
          op: "reduce",
          symbol: "Digits",
          state: undefined,
        },
      ],
      [
        "LOWER_E",
        {
          op: "reduce",
          symbol: "Digits",
          state: undefined,
        },
      ],
    ]),
  ],
  [
    states[54],
    new Map([
      [
        "WS",
        {
          op: "reduce",
          symbol: "Digit",
          state: undefined,
        },
      ],
      [
        "ZERO",
        {
          op: "reduce",
          symbol: "Digit",
          state: undefined,
        },
      ],
      [
        "ONE_NINE",
        {
          op: "reduce",
          symbol: "Digit",
          state: undefined,
        },
      ],
      [
        "DOT",
        {
          op: "reduce",
          symbol: "Digit",
          state: undefined,
        },
      ],
      [
        "UPPER_E",
        {
          op: "reduce",
          symbol: "Digit",
          state: undefined,
        },
      ],
      [
        "LOWER_E",
        {
          op: "reduce",
          symbol: "Digit",
          state: undefined,
        },
      ],
    ]),
  ],
  [
    states[55],
    new Map([
      [
        "WS",
        {
          op: "reduce",
          symbol: "Digit",
          state: undefined,
        },
      ],
      [
        "ZERO",
        {
          op: "reduce",
          symbol: "Digit",
          state: undefined,
        },
      ],
      [
        "ONE_NINE",
        {
          op: "reduce",
          symbol: "Digit",
          state: undefined,
        },
      ],
      [
        "DOT",
        {
          op: "reduce",
          symbol: "Digit",
          state: undefined,
        },
      ],
      [
        "UPPER_E",
        {
          op: "reduce",
          symbol: "Digit",
          state: undefined,
        },
      ],
      [
        "LOWER_E",
        {
          op: "reduce",
          symbol: "Digit",
          state: undefined,
        },
      ],
    ]),
  ],
  [
    states[57],
    new Map([
      [
        "ZERO",
        {
          op: "shift",
          symbol: undefined,
          state: states[31],
        },
      ],
      [
        "ONE_NINE",
        {
          op: "shift",
          symbol: undefined,
          state: states[32],
        },
      ],
      [
        "Digit",
        {
          op: "shift",
          symbol: undefined,
          state: states[56],
        },
      ],
      [
        "DOT",
        {
          op: "reduce",
          symbol: "Integer",
          state: undefined,
        },
      ],
    ]),
  ],
  [
    states[58],
    new Map([
      [
        "COLON",
        {
          op: "shift",
          symbol: undefined,
          state: states[71],
        },
      ],
    ]),
  ],
  [
    states[60],
    new Map([
      [
        "CURLY_CLOSE",
        {
          op: "reduce",
          symbol: "Members",
          state: undefined,
        },
      ],
      [
        "COMMA",
        {
          op: "reduce",
          symbol: "Members",
          state: undefined,
        },
      ],
    ]),
  ],
  [
    states[59],
    new Map([
      [
        "QUOTE",
        {
          op: "shift",
          symbol: undefined,
          state: states[8],
        },
      ],
      [
        "String",
        {
          op: "shift",
          symbol: undefined,
          state: states[38],
        },
      ],
    ]),
  ],
  [
    states[61],
    new Map([
      [
        "COMMA",
        {
          op: "reduce",
          symbol: "Elements",
          state: undefined,
        },
      ],
      [
        "BRACKET_CLOSE",
        {
          op: "reduce",
          symbol: "Elements",
          state: undefined,
        },
      ],
    ]),
  ],
  [
    states[64],
    new Map([
      [
        "ZERO",
        {
          op: "shift",
          symbol: undefined,
          state: states[31],
        },
      ],
      [
        "ONE_NINE",
        {
          op: "shift",
          symbol: undefined,
          state: states[32],
        },
      ],
      [
        "Digit",
        {
          op: "shift",
          symbol: undefined,
          state: states[56],
        },
      ],
      [
        "WS",
        {
          op: "reduce",
          symbol: "Exponent",
          state: undefined,
        },
      ],
    ]),
  ],
  [
    states[65],
    new Map([
      [
        "ZERO",
        {
          op: "shift",
          symbol: undefined,
          state: states[31],
        },
      ],
      [
        "ONE_NINE",
        {
          op: "shift",
          symbol: undefined,
          state: states[32],
        },
      ],
      [
        "Digits",
        {
          op: "shift",
          symbol: undefined,
          state: states[72],
        },
      ],
      [
        "Digit",
        {
          op: "shift",
          symbol: undefined,
          state: states[34],
        },
      ],
    ]),
  ],
  [
    states[62],
    new Map([
      [
        "ZERO",
        {
          op: "reduce",
          symbol: "Sign",
          state: undefined,
        },
      ],
      [
        "ONE_NINE",
        {
          op: "reduce",
          symbol: "Sign",
          state: undefined,
        },
      ],
    ]),
  ],
  [
    states[63],
    new Map([
      [
        "ZERO",
        {
          op: "reduce",
          symbol: "Sign",
          state: undefined,
        },
      ],
      [
        "ONE_NINE",
        {
          op: "reduce",
          symbol: "Sign",
          state: undefined,
        },
      ],
    ]),
  ],
  [
    states[68],
    new Map([
      [
        "ZERO",
        {
          op: "shift",
          symbol: undefined,
          state: states[31],
        },
      ],
      [
        "ONE_NINE",
        {
          op: "shift",
          symbol: undefined,
          state: states[32],
        },
      ],
      [
        "Digit",
        {
          op: "shift",
          symbol: undefined,
          state: states[56],
        },
      ],
      [
        "WS",
        {
          op: "reduce",
          symbol: "Exponent",
          state: undefined,
        },
      ],
    ]),
  ],
  [
    states[69],
    new Map([
      [
        "ZERO",
        {
          op: "shift",
          symbol: undefined,
          state: states[31],
        },
      ],
      [
        "ONE_NINE",
        {
          op: "shift",
          symbol: undefined,
          state: states[32],
        },
      ],
      [
        "Digits",
        {
          op: "shift",
          symbol: undefined,
          state: states[73],
        },
      ],
      [
        "Digit",
        {
          op: "shift",
          symbol: undefined,
          state: states[34],
        },
      ],
    ]),
  ],
  [
    states[66],
    new Map([
      [
        "ZERO",
        {
          op: "reduce",
          symbol: "Sign",
          state: undefined,
        },
      ],
      [
        "ONE_NINE",
        {
          op: "reduce",
          symbol: "Sign",
          state: undefined,
        },
      ],
    ]),
  ],
  [
    states[67],
    new Map([
      [
        "ZERO",
        {
          op: "reduce",
          symbol: "Sign",
          state: undefined,
        },
      ],
      [
        "ONE_NINE",
        {
          op: "reduce",
          symbol: "Sign",
          state: undefined,
        },
      ],
    ]),
  ],
  [
    states[70],
    new Map([
      [
        "WS",
        {
          op: "reduce",
          symbol: "Digits",
          state: undefined,
        },
      ],
      [
        "ZERO",
        {
          op: "reduce",
          symbol: "Digits",
          state: undefined,
        },
      ],
      [
        "ONE_NINE",
        {
          op: "reduce",
          symbol: "Digits",
          state: undefined,
        },
      ],
      [
        "DOT",
        {
          op: "reduce",
          symbol: "Digits",
          state: undefined,
        },
      ],
      [
        "UPPER_E",
        {
          op: "reduce",
          symbol: "Digits",
          state: undefined,
        },
      ],
      [
        "LOWER_E",
        {
          op: "reduce",
          symbol: "Digits",
          state: undefined,
        },
      ],
    ]),
  ],
  [
    states[71],
    new Map([
      [
        "WS",
        {
          op: "shift",
          symbol: undefined,
          state: states[1],
        },
      ],
      [
        "Element",
        {
          op: "shift",
          symbol: undefined,
          state: states[74],
        },
      ],
    ]),
  ],
  [
    states[72],
    new Map([
      [
        "ZERO",
        {
          op: "shift",
          symbol: undefined,
          state: states[31],
        },
      ],
      [
        "ONE_NINE",
        {
          op: "shift",
          symbol: undefined,
          state: states[32],
        },
      ],
      [
        "Digit",
        {
          op: "shift",
          symbol: undefined,
          state: states[56],
        },
      ],
      [
        "WS",
        {
          op: "reduce",
          symbol: "Exponent",
          state: undefined,
        },
      ],
    ]),
  ],
  [
    states[73],
    new Map([
      [
        "ZERO",
        {
          op: "shift",
          symbol: undefined,
          state: states[31],
        },
      ],
      [
        "ONE_NINE",
        {
          op: "shift",
          symbol: undefined,
          state: states[32],
        },
      ],
      [
        "Digit",
        {
          op: "shift",
          symbol: undefined,
          state: states[56],
        },
      ],
      [
        "WS",
        {
          op: "reduce",
          symbol: "Exponent",
          state: undefined,
        },
      ],
    ]),
  ],
  [
    states[74],
    new Map([
      [
        "CURLY_CLOSE",
        {
          op: "reduce",
          symbol: "Member",
          state: undefined,
        },
      ],
      [
        "COMMA",
        {
          op: "reduce",
          symbol: "Member",
          state: undefined,
        },
      ],
    ]),
  ],
]);

const goto = new Map([
  [
    states[0],
    new Map([
      ["Json", states[2]],
      ["Element", states[3]],
    ]),
  ],
  [
    states[1],
    new Map([
      ["Value", states[13]],
      ["Object", states[14]],
      ["Array", states[16]],
      ["String", states[15]],
      ["Number", states[17]],
      ["Integer", states[18]],
    ]),
  ],
  [
    states[7],
    new Map([
      ["Members", states[21]],
      ["Member", states[22]],
    ]),
  ],
  [
    states[9],
    new Map([
      ["Elements", states[25]],
      ["Element", states[24]],
    ]),
  ],
  [
    states[8],
    new Map([
      ["Characters", states[27]],
      ["Character", states[28]],
    ]),
  ],
  [states[18], new Map([["Fraction", states[30]]])],
  [
    states[11],
    new Map([
      ["Digits", states[33]],
      ["Digit", states[34]],
    ]),
  ],
  [states[20], new Map([["String", states[38]]])],
  [
    states[23],
    new Map([
      ["Value", states[13]],
      ["Object", states[14]],
      ["Array", states[16]],
      ["String", states[15]],
      ["Number", states[17]],
      ["Integer", states[18]],
    ]),
  ],
  [states[27], new Map([["Character", states[46]]])],
  [states[30], new Map([["Exponent", states[49]]])],
  [
    states[29],
    new Map([
      ["Digits", states[52]],
      ["Digit", states[53]],
    ]),
  ],
  [states[33], new Map([["Digit", states[56]]])],
  [
    states[36],
    new Map([
      ["Digits", states[57]],
      ["Digit", states[34]],
    ]),
  ],
  [states[40], new Map([["Member", states[60]]])],
  [states[42], new Map([["Element", states[61]]])],
  [
    states[47],
    new Map([
      ["Digits", states[64]],
      ["Digit", states[34]],
      ["Sign", states[65]],
    ]),
  ],
  [
    states[48],
    new Map([
      ["Digits", states[68]],
      ["Digit", states[34]],
      ["Sign", states[69]],
    ]),
  ],
  [states[52], new Map([["Digit", states[70]]])],
  [states[57], new Map([["Digit", states[56]]])],
  [states[59], new Map([["String", states[38]]])],
  [states[64], new Map([["Digit", states[56]]])],
  [
    states[65],
    new Map([
      ["Digits", states[72]],
      ["Digit", states[34]],
    ]),
  ],
  [states[68], new Map([["Digit", states[56]]])],
  [
    states[69],
    new Map([
      ["Digits", states[73]],
      ["Digit", states[34]],
    ]),
  ],
  [states[71], new Map([["Element", states[74]]])],
  [states[72], new Map([["Digit", states[56]]])],
  [states[73], new Map([["Digit", states[56]]])],
]);

export function parse(input) {
  const stream = Uint8Array.from(Buffer.from(input));
  let offset = 0;

  let result = nextToken(stream, offset);
  let { state: lookahead, start, end } = result;
  offset = end;

  const stack = [
    {
      state: startState,
      tree: undefined,
    },
  ];

  while (true) {
    const currentState = stack[0].state;

    const actionSet = actions.get(currentState);
    if (!actionSet) {
      throw new Error(`Invalid state\n${printState(currentState)}`);
    }
    const action = actionSet.get(lookahead);
    if (!action) {
      throw new Error(
        `Unknown lookahead(${lookahead}) for state:\n${printState(
          currentState
        )}`
      );
    }

    switch (action.op) {
      case "done":
        return stack[0].tree;
      case "shift":
        const stackItem = {
          state: action.state,
          tree: { name: lookahead, start, end },
        };

        result = nextToken(stream, offset);
        lookahead = result.state;
        start = result.start;
        offset = end = result.end;

        stack.unshift(stackItem);

        break;
      case "reduce":
        const item = Array.from(currentState.values()).find(
          (item) => item.name === action.symbol && item.lookahead === lookahead
        );
        if (!item) {
          throw new Error(
            `No valid state ${action.symbol}(${lookahead}) found`
          );
        }
        const items = stack.splice(0, item.tokens.length);

        const tree = {
          name: action.symbol,
          // the stack grown from 0 to n -> we need to reverse the
          // parse tree
          items: items.map((r) => r.tree).reverse(),
        };

        const nextState = goto.get(stack[0].state)?.get(action.symbol);
        if (!nextState) {
          throw new Error(
            `Unable to lookup goto state (${action.symbol}) for\n${printState(
              stack[0].state
            )}`
          );
        }
        stack.unshift({
          state: nextState,
          tree,
        });

        break;
      default:
        throw new Error("Parser Error");
    }
  }
}
