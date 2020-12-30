// @ts-nocheck

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

const reducerStates = new Uint8Array(86016);
reducerStates[712] = 1; // 'state 2' -> Value -> WS
reducerStates[872] = 1; // 'state 2' -> Value -> CURLY_CLOSE
reducerStates[904] = 1; // 'state 2' -> Value -> COMMA
reducerStates[1032] = 1; // 'state 2' -> Value -> BRACKET_CLOSE
reducerStates[1096] = 1; // 'state 2' -> Value -> @par-gen.EOF
reducerStates[796] = 1; // 'state 3' -> Value -> WS
reducerStates[956] = 1; // 'state 3' -> Value -> CURLY_CLOSE
reducerStates[988] = 1; // 'state 3' -> Value -> COMMA
reducerStates[1116] = 1; // 'state 3' -> Value -> BRACKET_CLOSE
reducerStates[1180] = 1; // 'state 3' -> Value -> @par-gen.EOF
reducerStates[880] = 1; // 'state 4' -> Value -> WS
reducerStates[1040] = 1; // 'state 4' -> Value -> CURLY_CLOSE
reducerStates[1072] = 1; // 'state 4' -> Value -> COMMA
reducerStates[1200] = 1; // 'state 4' -> Value -> BRACKET_CLOSE
reducerStates[1264] = 1; // 'state 4' -> Value -> @par-gen.EOF
reducerStates[1048] = 1; // 'state 6' -> Value -> WS
reducerStates[1208] = 1; // 'state 6' -> Value -> CURLY_CLOSE
reducerStates[1240] = 1; // 'state 6' -> Value -> COMMA
reducerStates[1368] = 1; // 'state 6' -> Value -> BRACKET_CLOSE
reducerStates[1432] = 1; // 'state 6' -> Value -> @par-gen.EOF
reducerStates[1216] = 1; // 'state 8' -> Value -> WS
reducerStates[1376] = 1; // 'state 8' -> Value -> CURLY_CLOSE
reducerStates[1408] = 1; // 'state 8' -> Value -> COMMA
reducerStates[1536] = 1; // 'state 8' -> Value -> BRACKET_CLOSE
reducerStates[1600] = 1; // 'state 8' -> Value -> @par-gen.EOF
reducerStates[1588] = 1; // 'state 9' -> S -> @par-gen.EOF
reducerStates[1704] = 1; // 'state 10' -> Json -> @par-gen.EOF
reducerStates[1596] = 1; // 'state 11' -> Element -> CURLY_CLOSE
reducerStates[1628] = 1; // 'state 11' -> Element -> COMMA
reducerStates[1756] = 1; // 'state 11' -> Element -> BRACKET_CLOSE
reducerStates[1820] = 1; // 'state 11' -> Element -> @par-gen.EOF
reducerStates[1552] = 1; // 'state 12' -> Value -> WS
reducerStates[1712] = 1; // 'state 12' -> Value -> CURLY_CLOSE
reducerStates[1744] = 1; // 'state 12' -> Value -> COMMA
reducerStates[1872] = 1; // 'state 12' -> Value -> BRACKET_CLOSE
reducerStates[1936] = 1; // 'state 12' -> Value -> @par-gen.EOF
reducerStates[1636] = 1; // 'state 13' -> Value -> WS
reducerStates[1796] = 1; // 'state 13' -> Value -> CURLY_CLOSE
reducerStates[1828] = 1; // 'state 13' -> Value -> COMMA
reducerStates[1956] = 1; // 'state 13' -> Value -> BRACKET_CLOSE
reducerStates[2020] = 1; // 'state 13' -> Value -> @par-gen.EOF
reducerStates[1848] = 2; // 'state 14' -> Element -> CURLY_CLOSE
reducerStates[1880] = 2; // 'state 14' -> Element -> COMMA
reducerStates[2008] = 2; // 'state 14' -> Element -> BRACKET_CLOSE
reducerStates[2072] = 2; // 'state 14' -> Element -> @par-gen.EOF
reducerStates[1804] = 1; // 'state 15' -> Value -> WS
reducerStates[1964] = 1; // 'state 15' -> Value -> CURLY_CLOSE
reducerStates[1996] = 1; // 'state 15' -> Value -> COMMA
reducerStates[2124] = 1; // 'state 15' -> Value -> BRACKET_CLOSE
reducerStates[2188] = 1; // 'state 15' -> Value -> @par-gen.EOF
reducerStates[1888] = 1; // 'state 16' -> Value -> WS
reducerStates[2048] = 1; // 'state 16' -> Value -> CURLY_CLOSE
reducerStates[2080] = 1; // 'state 16' -> Value -> COMMA
reducerStates[2208] = 1; // 'state 16' -> Value -> BRACKET_CLOSE
reducerStates[2272] = 1; // 'state 16' -> Value -> @par-gen.EOF
reducerStates[1972] = 1; // 'state 17' -> Value -> WS
reducerStates[2132] = 1; // 'state 17' -> Value -> CURLY_CLOSE
reducerStates[2164] = 1; // 'state 17' -> Value -> COMMA
reducerStates[2292] = 1; // 'state 17' -> Value -> BRACKET_CLOSE
reducerStates[2356] = 1; // 'state 17' -> Value -> @par-gen.EOF
reducerStates[2140] = 1; // 'state 19' -> Value -> WS
reducerStates[2300] = 1; // 'state 19' -> Value -> CURLY_CLOSE
reducerStates[2332] = 1; // 'state 19' -> Value -> COMMA
reducerStates[2460] = 1; // 'state 19' -> Value -> BRACKET_CLOSE
reducerStates[2524] = 1; // 'state 19' -> Value -> @par-gen.EOF
reducerStates[2308] = 1; // 'state 21' -> Value -> WS
reducerStates[2468] = 1; // 'state 21' -> Value -> CURLY_CLOSE
reducerStates[2500] = 1; // 'state 21' -> Value -> COMMA
reducerStates[2628] = 1; // 'state 21' -> Value -> BRACKET_CLOSE
reducerStates[2692] = 1; // 'state 21' -> Value -> @par-gen.EOF
reducerStates[2520] = 2; // 'state 22' -> Element -> CURLY_CLOSE
reducerStates[2552] = 2; // 'state 22' -> Element -> COMMA
reducerStates[2680] = 2; // 'state 22' -> Element -> BRACKET_CLOSE
reducerStates[2744] = 2; // 'state 22' -> Element -> @par-gen.EOF
reducerStates[2476] = 1; // 'state 23' -> Value -> WS
reducerStates[2636] = 1; // 'state 23' -> Value -> CURLY_CLOSE
reducerStates[2668] = 1; // 'state 23' -> Value -> COMMA
reducerStates[2796] = 1; // 'state 23' -> Value -> BRACKET_CLOSE
reducerStates[2860] = 1; // 'state 23' -> Value -> @par-gen.EOF
reducerStates[2560] = 1; // 'state 24' -> Value -> WS
reducerStates[2720] = 1; // 'state 24' -> Value -> CURLY_CLOSE
reducerStates[2752] = 1; // 'state 24' -> Value -> COMMA
reducerStates[2880] = 1; // 'state 24' -> Value -> BRACKET_CLOSE
reducerStates[2944] = 1; // 'state 24' -> Value -> @par-gen.EOF
reducerStates[2760] = 2; // 'state 26' -> Object -> WS
reducerStates[2920] = 2; // 'state 26' -> Object -> CURLY_CLOSE
reducerStates[2952] = 2; // 'state 26' -> Object -> COMMA
reducerStates[3080] = 2; // 'state 26' -> Object -> BRACKET_CLOSE
reducerStates[3144] = 2; // 'state 26' -> Object -> @par-gen.EOF
reducerStates[3204] = 1; // 'state 29' -> Members -> CURLY_CLOSE
reducerStates[3236] = 1; // 'state 29' -> Members -> COMMA
reducerStates[3276] = 2; // 'state 31' -> Array -> WS
reducerStates[3436] = 2; // 'state 31' -> Array -> CURLY_CLOSE
reducerStates[3468] = 2; // 'state 31' -> Array -> COMMA
reducerStates[3596] = 2; // 'state 31' -> Array -> BRACKET_CLOSE
reducerStates[3660] = 2; // 'state 31' -> Array -> @par-gen.EOF
reducerStates[3584] = 1; // 'state 32' -> Elements -> COMMA
reducerStates[3712] = 1; // 'state 32' -> Elements -> BRACKET_CLOSE
reducerStates[3528] = 3; // 'state 34' -> Element -> CURLY_CLOSE
reducerStates[3560] = 3; // 'state 34' -> Element -> COMMA
reducerStates[3688] = 3; // 'state 34' -> Element -> BRACKET_CLOSE
reducerStates[3752] = 3; // 'state 34' -> Element -> @par-gen.EOF
reducerStates[3600] = 2; // 'state 36' -> Object -> WS
reducerStates[3760] = 2; // 'state 36' -> Object -> CURLY_CLOSE
reducerStates[3792] = 2; // 'state 36' -> Object -> COMMA
reducerStates[3920] = 2; // 'state 36' -> Object -> BRACKET_CLOSE
reducerStates[3984] = 2; // 'state 36' -> Object -> @par-gen.EOF
reducerStates[4044] = 1; // 'state 39' -> Members -> CURLY_CLOSE
reducerStates[4076] = 1; // 'state 39' -> Members -> COMMA
reducerStates[4116] = 2; // 'state 41' -> Array -> WS
reducerStates[4276] = 2; // 'state 41' -> Array -> CURLY_CLOSE
reducerStates[4308] = 2; // 'state 41' -> Array -> COMMA
reducerStates[4436] = 2; // 'state 41' -> Array -> BRACKET_CLOSE
reducerStates[4500] = 2; // 'state 41' -> Array -> @par-gen.EOF
reducerStates[4424] = 1; // 'state 42' -> Elements -> COMMA
reducerStates[4552] = 1; // 'state 42' -> Elements -> BRACKET_CLOSE
reducerStates[4272] = 3; // 'state 44' -> Object -> WS
reducerStates[4432] = 3; // 'state 44' -> Object -> CURLY_CLOSE
reducerStates[4464] = 3; // 'state 44' -> Object -> COMMA
reducerStates[4592] = 3; // 'state 44' -> Object -> BRACKET_CLOSE
reducerStates[4656] = 3; // 'state 44' -> Object -> @par-gen.EOF
reducerStates[4440] = 3; // 'state 46' -> Object -> WS
reducerStates[4600] = 3; // 'state 46' -> Object -> CURLY_CLOSE
reducerStates[4632] = 3; // 'state 46' -> Object -> COMMA
reducerStates[4760] = 3; // 'state 46' -> Object -> BRACKET_CLOSE
reducerStates[4824] = 3; // 'state 46' -> Object -> @par-gen.EOF
reducerStates[4872] = 3; // 'state 50' -> Array -> WS
reducerStates[5032] = 3; // 'state 50' -> Array -> CURLY_CLOSE
reducerStates[5064] = 3; // 'state 50' -> Array -> COMMA
reducerStates[5192] = 3; // 'state 50' -> Array -> BRACKET_CLOSE
reducerStates[5256] = 3; // 'state 50' -> Array -> @par-gen.EOF
reducerStates[5040] = 3; // 'state 52' -> Array -> WS
reducerStates[5200] = 3; // 'state 52' -> Array -> CURLY_CLOSE
reducerStates[5232] = 3; // 'state 52' -> Array -> COMMA
reducerStates[5360] = 3; // 'state 52' -> Array -> BRACKET_CLOSE
reducerStates[5424] = 3; // 'state 52' -> Array -> @par-gen.EOF
reducerStates[5028] = 3; // 'state 53' -> Object -> WS
reducerStates[5188] = 3; // 'state 53' -> Object -> CURLY_CLOSE
reducerStates[5220] = 3; // 'state 53' -> Object -> COMMA
reducerStates[5348] = 3; // 'state 53' -> Object -> BRACKET_CLOSE
reducerStates[5412] = 3; // 'state 53' -> Object -> @par-gen.EOF
reducerStates[5196] = 3; // 'state 55' -> Object -> WS
reducerStates[5356] = 3; // 'state 55' -> Object -> CURLY_CLOSE
reducerStates[5388] = 3; // 'state 55' -> Object -> COMMA
reducerStates[5516] = 3; // 'state 55' -> Object -> BRACKET_CLOSE
reducerStates[5580] = 3; // 'state 55' -> Object -> @par-gen.EOF
reducerStates[5628] = 3; // 'state 59' -> Array -> WS
reducerStates[5788] = 3; // 'state 59' -> Array -> CURLY_CLOSE
reducerStates[5820] = 3; // 'state 59' -> Array -> COMMA
reducerStates[5948] = 3; // 'state 59' -> Array -> BRACKET_CLOSE
reducerStates[6012] = 3; // 'state 59' -> Array -> @par-gen.EOF
reducerStates[5796] = 3; // 'state 61' -> Array -> WS
reducerStates[5956] = 3; // 'state 61' -> Array -> CURLY_CLOSE
reducerStates[5988] = 3; // 'state 61' -> Array -> COMMA
reducerStates[6116] = 3; // 'state 61' -> Array -> BRACKET_CLOSE
reducerStates[6180] = 3; // 'state 61' -> Array -> @par-gen.EOF
reducerStates[6228] = 3; // 'state 65' -> Members -> CURLY_CLOSE
reducerStates[6260] = 3; // 'state 65' -> Members -> COMMA
reducerStates[6344] = 3; // 'state 66' -> Member -> CURLY_CLOSE
reducerStates[6376] = 3; // 'state 66' -> Member -> COMMA
reducerStates[6608] = 3; // 'state 68' -> Elements -> COMMA
reducerStates[6736] = 3; // 'state 68' -> Elements -> BRACKET_CLOSE
reducerStates[6816] = 3; // 'state 72' -> Members -> CURLY_CLOSE
reducerStates[6848] = 3; // 'state 72' -> Members -> COMMA
reducerStates[6932] = 3; // 'state 73' -> Member -> CURLY_CLOSE
reducerStates[6964] = 3; // 'state 73' -> Member -> COMMA
reducerStates[7196] = 3; // 'state 75' -> Elements -> COMMA
reducerStates[7324] = 3; // 'state 75' -> Elements -> BRACKET_CLOSE
reducerStates[7184] = 4; // 'state 76' -> Member -> CURLY_CLOSE
reducerStates[7216] = 4; // 'state 76' -> Member -> COMMA
reducerStates[7352] = 4; // 'state 78' -> Member -> CURLY_CLOSE
reducerStates[7384] = 4; // 'state 78' -> Member -> COMMA
reducerStates[7436] = 4; // 'state 79' -> Member -> CURLY_CLOSE
reducerStates[7468] = 4; // 'state 79' -> Member -> COMMA
reducerStates[7604] = 4; // 'state 81' -> Member -> CURLY_CLOSE
reducerStates[7636] = 4; // 'state 81' -> Member -> COMMA
reducerStates[7688] = 5; // 'state 82' -> Member -> CURLY_CLOSE
reducerStates[7720] = 5; // 'state 82' -> Member -> COMMA
reducerStates[7772] = 5; // 'state 83' -> Member -> CURLY_CLOSE
reducerStates[7804] = 5; // 'state 83' -> Member -> COMMA

const parserSymbols = [
  "WS", // 0
  "TRUE", // 1
  "FALSE", // 2
  "NULL", // 3
  "CURLY_OPEN", // 4
  "CURLY_CLOSE", // 5
  "COMMA", // 6
  "COLON", // 7
  "STRING", // 8
  "BRACKET_OPEN", // 9
  "BRACKET_CLOSE", // 10
  "NUMBER", // 11
  "@par-gen.EOF", // 12
  "@par-gen.ERROR", // 13
  "S", // 14
  "Json", // 15
  "Element", // 16
  "Value", // 17
  "Object", // 18
  "Members", // 19
  "Member", // 20
  "Array", // 21
  "Elements", // 22
  "undefined", // 23
  "undefined", // 24
  "undefined", // 25
  "undefined", // 26
  "undefined", // 27
  "undefined", // 28
  "undefined", // 29
  "undefined", // 30
  "undefined", // 31
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
    symbol: 15, // Json
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
    symbol: 16, // Element
  },
  // 'action 17'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Element
  },
  // 'action 18'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Element
  },
  // 'action 19'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Element
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
    symbol: 17, // Value
  },
  // 'action 31'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 32'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 33'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 34'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 35'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 36'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 37'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 38'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 39'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 40'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 41'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 42'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 43'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 44'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 45'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 46'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 47'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 48'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 49'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 50'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 51'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 52'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 53'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 54'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 55'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 56'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 57'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 58'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 59'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 60'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 61'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 62'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 63'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 64'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
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
    symbol: 16, // Element
  },
  // 'action 85'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Element
  },
  // 'action 86'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Element
  },
  // 'action 87'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Element
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
    symbol: 16, // Element
  },
  // 'action 90'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Element
  },
  // 'action 91'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Element
  },
  // 'action 92'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Element
  },
  // 'action 93'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 94'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 95'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 96'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 97'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 98'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 99'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 100'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 101'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 102'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 103'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 104'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 105'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 106'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 107'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 108'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 109'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 110'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 111'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 112'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 113'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 114'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 115'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 116'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 117'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 118'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 119'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 120'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 121'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 122'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 123'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 124'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 125'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 126'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
  },
  // 'action 127'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Value
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
    symbol: 18, // Object
  },
  // 'action 148'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // Object
  },
  // 'action 149'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // Object
  },
  // 'action 150'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // Object
  },
  // 'action 151'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // Object
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
    symbol: 19, // Members
  },
  // 'action 157'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Members
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
    symbol: 22, // Elements
  },
  // 'action 179'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Elements
  },
  // 'action 180'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Element
  },
  // 'action 181'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Element
  },
  // 'action 182'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Element
  },
  // 'action 183'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Element
  },
  // 'action 184'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // Object
  },
  // 'action 185'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // Object
  },
  // 'action 186'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // Object
  },
  // 'action 187'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // Object
  },
  // 'action 188'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // Object
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
    symbol: 19, // Members
  },
  // 'action 194'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Members
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
    symbol: 22, // Elements
  },
  // 'action 216'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Elements
  },
  // 'action 217'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // Object
  },
  // 'action 218'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // Object
  },
  // 'action 219'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // Object
  },
  // 'action 220'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // Object
  },
  // 'action 221'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // Object
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
    symbol: 18, // Object
  },
  // 'action 225'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // Object
  },
  // 'action 226'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // Object
  },
  // 'action 227'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // Object
  },
  // 'action 228'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // Object
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
    symbol: 18, // Object
  },
  // 'action 268'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // Object
  },
  // 'action 269'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // Object
  },
  // 'action 270'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // Object
  },
  // 'action 271'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // Object
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
    symbol: 18, // Object
  },
  // 'action 275'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // Object
  },
  // 'action 276'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // Object
  },
  // 'action 277'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // Object
  },
  // 'action 278'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // Object
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
    symbol: 19, // Members
  },
  // 'action 331'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Members
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
    symbol: 20, // Member
  },
  // 'action 334'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Member
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
    symbol: 22, // Elements
  },
  // 'action 348'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Elements
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
    symbol: 19, // Members
  },
  // 'action 363'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Members
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
    symbol: 20, // Member
  },
  // 'action 366'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Member
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
    symbol: 22, // Elements
  },
  // 'action 380'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // Elements
  },
  // 'action 381'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Member
  },
  // 'action 382'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Member
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
    symbol: 20, // Member
  },
  // 'action 396'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Member
  },
  // 'action 397'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Member
  },
  // 'action 398'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Member
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
    symbol: 20, // Member
  },
  // 'action 412'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Member
  },
  // 'action 413'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Member
  },
  // 'action 414'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Member
  },
  // 'action 415'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Member
  },
  // 'action 416'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Member
  },
];
const actionsTable = new Uint16Array(2688).fill(0xffff);
actionsTable[0] = 0; // 'state 0' -> WS -> shift -> 'action 0'
actionsTable[1] = 1; // 'state 0' -> TRUE -> shift -> 'action 1'
actionsTable[2] = 2; // 'state 0' -> FALSE -> shift -> 'action 2'
actionsTable[3] = 3; // 'state 0' -> NULL -> shift -> 'action 3'
actionsTable[4] = 4; // 'state 0' -> CURLY_OPEN -> shift -> 'action 4'
actionsTable[8] = 5; // 'state 0' -> STRING -> shift -> 'action 5'
actionsTable[9] = 6; // 'state 0' -> BRACKET_OPEN -> shift -> 'action 6'
actionsTable[11] = 7; // 'state 0' -> NUMBER -> shift -> 'action 7'
actionsTable[15] = 8; // 'state 0' -> Json -> shift -> 'action 8'
actionsTable[16] = 9; // 'state 0' -> Element -> shift -> 'action 9'
actionsTable[17] = 10; // 'state 0' -> Value -> shift -> 'action 10'
actionsTable[18] = 11; // 'state 0' -> Object -> shift -> 'action 11'
actionsTable[21] = 12; // 'state 0' -> Array -> shift -> 'action 12'
actionsTable[300] = 13; // 'state 9' -> @par-gen.EOF -> done -> 'action 13'
actionsTable[332] = 14; // 'state 10' -> @par-gen.EOF -> reduce -> 'action 14'
actionsTable[352] = 15; // 'state 11' -> WS -> shift -> 'action 15'
actionsTable[357] = 16; // 'state 11' -> CURLY_CLOSE -> reduce -> 'action 16'
actionsTable[358] = 17; // 'state 11' -> COMMA -> reduce -> 'action 17'
actionsTable[362] = 18; // 'state 11' -> BRACKET_CLOSE -> reduce -> 'action 18'
actionsTable[364] = 19; // 'state 11' -> @par-gen.EOF -> reduce -> 'action 19'
actionsTable[33] = 20; // 'state 1' -> TRUE -> shift -> 'action 20'
actionsTable[34] = 21; // 'state 1' -> FALSE -> shift -> 'action 21'
actionsTable[35] = 22; // 'state 1' -> NULL -> shift -> 'action 22'
actionsTable[36] = 23; // 'state 1' -> CURLY_OPEN -> shift -> 'action 23'
actionsTable[40] = 24; // 'state 1' -> STRING -> shift -> 'action 24'
actionsTable[41] = 25; // 'state 1' -> BRACKET_OPEN -> shift -> 'action 25'
actionsTable[43] = 26; // 'state 1' -> NUMBER -> shift -> 'action 26'
actionsTable[49] = 27; // 'state 1' -> Value -> shift -> 'action 27'
actionsTable[50] = 28; // 'state 1' -> Object -> shift -> 'action 28'
actionsTable[53] = 29; // 'state 1' -> Array -> shift -> 'action 29'
actionsTable[384] = 30; // 'state 12' -> WS -> reduce -> 'action 30'
actionsTable[389] = 31; // 'state 12' -> CURLY_CLOSE -> reduce -> 'action 31'
actionsTable[390] = 32; // 'state 12' -> COMMA -> reduce -> 'action 32'
actionsTable[394] = 33; // 'state 12' -> BRACKET_CLOSE -> reduce -> 'action 33'
actionsTable[396] = 34; // 'state 12' -> @par-gen.EOF -> reduce -> 'action 34'
actionsTable[416] = 35; // 'state 13' -> WS -> reduce -> 'action 35'
actionsTable[421] = 36; // 'state 13' -> CURLY_CLOSE -> reduce -> 'action 36'
actionsTable[422] = 37; // 'state 13' -> COMMA -> reduce -> 'action 37'
actionsTable[426] = 38; // 'state 13' -> BRACKET_CLOSE -> reduce -> 'action 38'
actionsTable[428] = 39; // 'state 13' -> @par-gen.EOF -> reduce -> 'action 39'
actionsTable[192] = 40; // 'state 6' -> WS -> reduce -> 'action 40'
actionsTable[197] = 41; // 'state 6' -> CURLY_CLOSE -> reduce -> 'action 41'
actionsTable[198] = 42; // 'state 6' -> COMMA -> reduce -> 'action 42'
actionsTable[202] = 43; // 'state 6' -> BRACKET_CLOSE -> reduce -> 'action 43'
actionsTable[204] = 44; // 'state 6' -> @par-gen.EOF -> reduce -> 'action 44'
actionsTable[256] = 45; // 'state 8' -> WS -> reduce -> 'action 45'
actionsTable[261] = 46; // 'state 8' -> CURLY_CLOSE -> reduce -> 'action 46'
actionsTable[262] = 47; // 'state 8' -> COMMA -> reduce -> 'action 47'
actionsTable[266] = 48; // 'state 8' -> BRACKET_CLOSE -> reduce -> 'action 48'
actionsTable[268] = 49; // 'state 8' -> @par-gen.EOF -> reduce -> 'action 49'
actionsTable[64] = 50; // 'state 2' -> WS -> reduce -> 'action 50'
actionsTable[69] = 51; // 'state 2' -> CURLY_CLOSE -> reduce -> 'action 51'
actionsTable[70] = 52; // 'state 2' -> COMMA -> reduce -> 'action 52'
actionsTable[74] = 53; // 'state 2' -> BRACKET_CLOSE -> reduce -> 'action 53'
actionsTable[76] = 54; // 'state 2' -> @par-gen.EOF -> reduce -> 'action 54'
actionsTable[96] = 55; // 'state 3' -> WS -> reduce -> 'action 55'
actionsTable[101] = 56; // 'state 3' -> CURLY_CLOSE -> reduce -> 'action 56'
actionsTable[102] = 57; // 'state 3' -> COMMA -> reduce -> 'action 57'
actionsTable[106] = 58; // 'state 3' -> BRACKET_CLOSE -> reduce -> 'action 58'
actionsTable[108] = 59; // 'state 3' -> @par-gen.EOF -> reduce -> 'action 59'
actionsTable[128] = 60; // 'state 4' -> WS -> reduce -> 'action 60'
actionsTable[133] = 61; // 'state 4' -> CURLY_CLOSE -> reduce -> 'action 61'
actionsTable[134] = 62; // 'state 4' -> COMMA -> reduce -> 'action 62'
actionsTable[138] = 63; // 'state 4' -> BRACKET_CLOSE -> reduce -> 'action 63'
actionsTable[140] = 64; // 'state 4' -> @par-gen.EOF -> reduce -> 'action 64'
actionsTable[160] = 65; // 'state 5' -> WS -> shift -> 'action 65'
actionsTable[165] = 66; // 'state 5' -> CURLY_CLOSE -> shift -> 'action 66'
actionsTable[168] = 67; // 'state 5' -> STRING -> shift -> 'action 67'
actionsTable[179] = 68; // 'state 5' -> Members -> shift -> 'action 68'
actionsTable[180] = 69; // 'state 5' -> Member -> shift -> 'action 69'
actionsTable[224] = 70; // 'state 7' -> WS -> shift -> 'action 70'
actionsTable[225] = 71; // 'state 7' -> TRUE -> shift -> 'action 71'
actionsTable[226] = 72; // 'state 7' -> FALSE -> shift -> 'action 72'
actionsTable[227] = 73; // 'state 7' -> NULL -> shift -> 'action 73'
actionsTable[228] = 74; // 'state 7' -> CURLY_OPEN -> shift -> 'action 74'
actionsTable[232] = 75; // 'state 7' -> STRING -> shift -> 'action 75'
actionsTable[233] = 76; // 'state 7' -> BRACKET_OPEN -> shift -> 'action 76'
actionsTable[234] = 77; // 'state 7' -> BRACKET_CLOSE -> shift -> 'action 77'
actionsTable[235] = 78; // 'state 7' -> NUMBER -> shift -> 'action 78'
actionsTable[240] = 79; // 'state 7' -> Element -> shift -> 'action 79'
actionsTable[241] = 80; // 'state 7' -> Value -> shift -> 'action 80'
actionsTable[242] = 81; // 'state 7' -> Object -> shift -> 'action 81'
actionsTable[245] = 82; // 'state 7' -> Array -> shift -> 'action 82'
actionsTable[246] = 83; // 'state 7' -> Elements -> shift -> 'action 83'
actionsTable[453] = 84; // 'state 14' -> CURLY_CLOSE -> reduce -> 'action 84'
actionsTable[454] = 85; // 'state 14' -> COMMA -> reduce -> 'action 85'
actionsTable[458] = 86; // 'state 14' -> BRACKET_CLOSE -> reduce -> 'action 86'
actionsTable[460] = 87; // 'state 14' -> @par-gen.EOF -> reduce -> 'action 87'
actionsTable[704] = 88; // 'state 22' -> WS -> shift -> 'action 88'
actionsTable[709] = 89; // 'state 22' -> CURLY_CLOSE -> reduce -> 'action 89'
actionsTable[710] = 90; // 'state 22' -> COMMA -> reduce -> 'action 90'
actionsTable[714] = 91; // 'state 22' -> BRACKET_CLOSE -> reduce -> 'action 91'
actionsTable[716] = 92; // 'state 22' -> @par-gen.EOF -> reduce -> 'action 92'
actionsTable[736] = 93; // 'state 23' -> WS -> reduce -> 'action 93'
actionsTable[741] = 94; // 'state 23' -> CURLY_CLOSE -> reduce -> 'action 94'
actionsTable[742] = 95; // 'state 23' -> COMMA -> reduce -> 'action 95'
actionsTable[746] = 96; // 'state 23' -> BRACKET_CLOSE -> reduce -> 'action 96'
actionsTable[748] = 97; // 'state 23' -> @par-gen.EOF -> reduce -> 'action 97'
actionsTable[768] = 98; // 'state 24' -> WS -> reduce -> 'action 98'
actionsTable[773] = 99; // 'state 24' -> CURLY_CLOSE -> reduce -> 'action 99'
actionsTable[774] = 100; // 'state 24' -> COMMA -> reduce -> 'action 100'
actionsTable[778] = 101; // 'state 24' -> BRACKET_CLOSE -> reduce -> 'action 101'
actionsTable[780] = 102; // 'state 24' -> @par-gen.EOF -> reduce -> 'action 102'
actionsTable[608] = 103; // 'state 19' -> WS -> reduce -> 'action 103'
actionsTable[613] = 104; // 'state 19' -> CURLY_CLOSE -> reduce -> 'action 104'
actionsTable[614] = 105; // 'state 19' -> COMMA -> reduce -> 'action 105'
actionsTable[618] = 106; // 'state 19' -> BRACKET_CLOSE -> reduce -> 'action 106'
actionsTable[620] = 107; // 'state 19' -> @par-gen.EOF -> reduce -> 'action 107'
actionsTable[672] = 108; // 'state 21' -> WS -> reduce -> 'action 108'
actionsTable[677] = 109; // 'state 21' -> CURLY_CLOSE -> reduce -> 'action 109'
actionsTable[678] = 110; // 'state 21' -> COMMA -> reduce -> 'action 110'
actionsTable[682] = 111; // 'state 21' -> BRACKET_CLOSE -> reduce -> 'action 111'
actionsTable[684] = 112; // 'state 21' -> @par-gen.EOF -> reduce -> 'action 112'
actionsTable[480] = 113; // 'state 15' -> WS -> reduce -> 'action 113'
actionsTable[485] = 114; // 'state 15' -> CURLY_CLOSE -> reduce -> 'action 114'
actionsTable[486] = 115; // 'state 15' -> COMMA -> reduce -> 'action 115'
actionsTable[490] = 116; // 'state 15' -> BRACKET_CLOSE -> reduce -> 'action 116'
actionsTable[492] = 117; // 'state 15' -> @par-gen.EOF -> reduce -> 'action 117'
actionsTable[512] = 118; // 'state 16' -> WS -> reduce -> 'action 118'
actionsTable[517] = 119; // 'state 16' -> CURLY_CLOSE -> reduce -> 'action 119'
actionsTable[518] = 120; // 'state 16' -> COMMA -> reduce -> 'action 120'
actionsTable[522] = 121; // 'state 16' -> BRACKET_CLOSE -> reduce -> 'action 121'
actionsTable[524] = 122; // 'state 16' -> @par-gen.EOF -> reduce -> 'action 122'
actionsTable[544] = 123; // 'state 17' -> WS -> reduce -> 'action 123'
actionsTable[549] = 124; // 'state 17' -> CURLY_CLOSE -> reduce -> 'action 124'
actionsTable[550] = 125; // 'state 17' -> COMMA -> reduce -> 'action 125'
actionsTable[554] = 126; // 'state 17' -> BRACKET_CLOSE -> reduce -> 'action 126'
actionsTable[556] = 127; // 'state 17' -> @par-gen.EOF -> reduce -> 'action 127'
actionsTable[576] = 128; // 'state 18' -> WS -> shift -> 'action 128'
actionsTable[581] = 129; // 'state 18' -> CURLY_CLOSE -> shift -> 'action 129'
actionsTable[584] = 130; // 'state 18' -> STRING -> shift -> 'action 130'
actionsTable[595] = 131; // 'state 18' -> Members -> shift -> 'action 131'
actionsTable[596] = 132; // 'state 18' -> Member -> shift -> 'action 132'
actionsTable[640] = 133; // 'state 20' -> WS -> shift -> 'action 133'
actionsTable[641] = 134; // 'state 20' -> TRUE -> shift -> 'action 134'
actionsTable[642] = 135; // 'state 20' -> FALSE -> shift -> 'action 135'
actionsTable[643] = 136; // 'state 20' -> NULL -> shift -> 'action 136'
actionsTable[644] = 137; // 'state 20' -> CURLY_OPEN -> shift -> 'action 137'
actionsTable[648] = 138; // 'state 20' -> STRING -> shift -> 'action 138'
actionsTable[649] = 139; // 'state 20' -> BRACKET_OPEN -> shift -> 'action 139'
actionsTable[650] = 140; // 'state 20' -> BRACKET_CLOSE -> shift -> 'action 140'
actionsTable[651] = 141; // 'state 20' -> NUMBER -> shift -> 'action 141'
actionsTable[656] = 142; // 'state 20' -> Element -> shift -> 'action 142'
actionsTable[657] = 143; // 'state 20' -> Value -> shift -> 'action 143'
actionsTable[658] = 144; // 'state 20' -> Object -> shift -> 'action 144'
actionsTable[661] = 145; // 'state 20' -> Array -> shift -> 'action 145'
actionsTable[662] = 146; // 'state 20' -> Elements -> shift -> 'action 146'
actionsTable[832] = 147; // 'state 26' -> WS -> reduce -> 'action 147'
actionsTable[837] = 148; // 'state 26' -> CURLY_CLOSE -> reduce -> 'action 148'
actionsTable[838] = 149; // 'state 26' -> COMMA -> reduce -> 'action 149'
actionsTable[842] = 150; // 'state 26' -> BRACKET_CLOSE -> reduce -> 'action 150'
actionsTable[844] = 151; // 'state 26' -> @par-gen.EOF -> reduce -> 'action 151'
actionsTable[805] = 152; // 'state 25' -> CURLY_CLOSE -> shift -> 'action 152'
actionsTable[808] = 153; // 'state 25' -> STRING -> shift -> 'action 153'
actionsTable[901] = 154; // 'state 28' -> CURLY_CLOSE -> shift -> 'action 154'
actionsTable[902] = 155; // 'state 28' -> COMMA -> shift -> 'action 155'
actionsTable[933] = 156; // 'state 29' -> CURLY_CLOSE -> reduce -> 'action 156'
actionsTable[934] = 157; // 'state 29' -> COMMA -> reduce -> 'action 157'
actionsTable[864] = 158; // 'state 27' -> WS -> shift -> 'action 158'
actionsTable[871] = 159; // 'state 27' -> COLON -> shift -> 'action 159'
actionsTable[992] = 160; // 'state 31' -> WS -> reduce -> 'action 160'
actionsTable[997] = 161; // 'state 31' -> CURLY_CLOSE -> reduce -> 'action 161'
actionsTable[998] = 162; // 'state 31' -> COMMA -> reduce -> 'action 162'
actionsTable[1002] = 163; // 'state 31' -> BRACKET_CLOSE -> reduce -> 'action 163'
actionsTable[1004] = 164; // 'state 31' -> @par-gen.EOF -> reduce -> 'action 164'
actionsTable[961] = 165; // 'state 30' -> TRUE -> shift -> 'action 165'
actionsTable[962] = 166; // 'state 30' -> FALSE -> shift -> 'action 166'
actionsTable[963] = 167; // 'state 30' -> NULL -> shift -> 'action 167'
actionsTable[964] = 168; // 'state 30' -> CURLY_OPEN -> shift -> 'action 168'
actionsTable[968] = 169; // 'state 30' -> STRING -> shift -> 'action 169'
actionsTable[969] = 170; // 'state 30' -> BRACKET_OPEN -> shift -> 'action 170'
actionsTable[970] = 171; // 'state 30' -> BRACKET_CLOSE -> shift -> 'action 171'
actionsTable[971] = 172; // 'state 30' -> NUMBER -> shift -> 'action 172'
actionsTable[977] = 173; // 'state 30' -> Value -> shift -> 'action 173'
actionsTable[978] = 174; // 'state 30' -> Object -> shift -> 'action 174'
actionsTable[981] = 175; // 'state 30' -> Array -> shift -> 'action 175'
actionsTable[1062] = 176; // 'state 33' -> COMMA -> shift -> 'action 176'
actionsTable[1066] = 177; // 'state 33' -> BRACKET_CLOSE -> shift -> 'action 177'
actionsTable[1030] = 178; // 'state 32' -> COMMA -> reduce -> 'action 178'
actionsTable[1034] = 179; // 'state 32' -> BRACKET_CLOSE -> reduce -> 'action 179'
actionsTable[1093] = 180; // 'state 34' -> CURLY_CLOSE -> reduce -> 'action 180'
actionsTable[1094] = 181; // 'state 34' -> COMMA -> reduce -> 'action 181'
actionsTable[1098] = 182; // 'state 34' -> BRACKET_CLOSE -> reduce -> 'action 182'
actionsTable[1100] = 183; // 'state 34' -> @par-gen.EOF -> reduce -> 'action 183'
actionsTable[1152] = 184; // 'state 36' -> WS -> reduce -> 'action 184'
actionsTable[1157] = 185; // 'state 36' -> CURLY_CLOSE -> reduce -> 'action 185'
actionsTable[1158] = 186; // 'state 36' -> COMMA -> reduce -> 'action 186'
actionsTable[1162] = 187; // 'state 36' -> BRACKET_CLOSE -> reduce -> 'action 187'
actionsTable[1164] = 188; // 'state 36' -> @par-gen.EOF -> reduce -> 'action 188'
actionsTable[1125] = 189; // 'state 35' -> CURLY_CLOSE -> shift -> 'action 189'
actionsTable[1128] = 190; // 'state 35' -> STRING -> shift -> 'action 190'
actionsTable[1221] = 191; // 'state 38' -> CURLY_CLOSE -> shift -> 'action 191'
actionsTable[1222] = 192; // 'state 38' -> COMMA -> shift -> 'action 192'
actionsTable[1253] = 193; // 'state 39' -> CURLY_CLOSE -> reduce -> 'action 193'
actionsTable[1254] = 194; // 'state 39' -> COMMA -> reduce -> 'action 194'
actionsTable[1184] = 195; // 'state 37' -> WS -> shift -> 'action 195'
actionsTable[1191] = 196; // 'state 37' -> COLON -> shift -> 'action 196'
actionsTable[1312] = 197; // 'state 41' -> WS -> reduce -> 'action 197'
actionsTable[1317] = 198; // 'state 41' -> CURLY_CLOSE -> reduce -> 'action 198'
actionsTable[1318] = 199; // 'state 41' -> COMMA -> reduce -> 'action 199'
actionsTable[1322] = 200; // 'state 41' -> BRACKET_CLOSE -> reduce -> 'action 200'
actionsTable[1324] = 201; // 'state 41' -> @par-gen.EOF -> reduce -> 'action 201'
actionsTable[1281] = 202; // 'state 40' -> TRUE -> shift -> 'action 202'
actionsTable[1282] = 203; // 'state 40' -> FALSE -> shift -> 'action 203'
actionsTable[1283] = 204; // 'state 40' -> NULL -> shift -> 'action 204'
actionsTable[1284] = 205; // 'state 40' -> CURLY_OPEN -> shift -> 'action 205'
actionsTable[1288] = 206; // 'state 40' -> STRING -> shift -> 'action 206'
actionsTable[1289] = 207; // 'state 40' -> BRACKET_OPEN -> shift -> 'action 207'
actionsTable[1290] = 208; // 'state 40' -> BRACKET_CLOSE -> shift -> 'action 208'
actionsTable[1291] = 209; // 'state 40' -> NUMBER -> shift -> 'action 209'
actionsTable[1297] = 210; // 'state 40' -> Value -> shift -> 'action 210'
actionsTable[1298] = 211; // 'state 40' -> Object -> shift -> 'action 211'
actionsTable[1301] = 212; // 'state 40' -> Array -> shift -> 'action 212'
actionsTable[1382] = 213; // 'state 43' -> COMMA -> shift -> 'action 213'
actionsTable[1386] = 214; // 'state 43' -> BRACKET_CLOSE -> shift -> 'action 214'
actionsTable[1350] = 215; // 'state 42' -> COMMA -> reduce -> 'action 215'
actionsTable[1354] = 216; // 'state 42' -> BRACKET_CLOSE -> reduce -> 'action 216'
actionsTable[1408] = 217; // 'state 44' -> WS -> reduce -> 'action 217'
actionsTable[1413] = 218; // 'state 44' -> CURLY_CLOSE -> reduce -> 'action 218'
actionsTable[1414] = 219; // 'state 44' -> COMMA -> reduce -> 'action 219'
actionsTable[1418] = 220; // 'state 44' -> BRACKET_CLOSE -> reduce -> 'action 220'
actionsTable[1420] = 221; // 'state 44' -> @par-gen.EOF -> reduce -> 'action 221'
actionsTable[1440] = 222; // 'state 45' -> WS -> shift -> 'action 222'
actionsTable[1447] = 223; // 'state 45' -> COLON -> shift -> 'action 223'
actionsTable[1472] = 224; // 'state 46' -> WS -> reduce -> 'action 224'
actionsTable[1477] = 225; // 'state 46' -> CURLY_CLOSE -> reduce -> 'action 225'
actionsTable[1478] = 226; // 'state 46' -> COMMA -> reduce -> 'action 226'
actionsTable[1482] = 227; // 'state 46' -> BRACKET_CLOSE -> reduce -> 'action 227'
actionsTable[1484] = 228; // 'state 46' -> @par-gen.EOF -> reduce -> 'action 228'
actionsTable[1504] = 229; // 'state 47' -> WS -> shift -> 'action 229'
actionsTable[1512] = 230; // 'state 47' -> STRING -> shift -> 'action 230'
actionsTable[1524] = 231; // 'state 47' -> Member -> shift -> 'action 231'
actionsTable[1568] = 232; // 'state 49' -> WS -> shift -> 'action 232'
actionsTable[1569] = 233; // 'state 49' -> TRUE -> shift -> 'action 233'
actionsTable[1570] = 234; // 'state 49' -> FALSE -> shift -> 'action 234'
actionsTable[1571] = 235; // 'state 49' -> NULL -> shift -> 'action 235'
actionsTable[1572] = 236; // 'state 49' -> CURLY_OPEN -> shift -> 'action 236'
actionsTable[1576] = 237; // 'state 49' -> STRING -> shift -> 'action 237'
actionsTable[1577] = 238; // 'state 49' -> BRACKET_OPEN -> shift -> 'action 238'
actionsTable[1579] = 239; // 'state 49' -> NUMBER -> shift -> 'action 239'
actionsTable[1584] = 240; // 'state 49' -> Element -> shift -> 'action 240'
actionsTable[1585] = 241; // 'state 49' -> Value -> shift -> 'action 241'
actionsTable[1586] = 242; // 'state 49' -> Object -> shift -> 'action 242'
actionsTable[1589] = 243; // 'state 49' -> Array -> shift -> 'action 243'
actionsTable[1543] = 244; // 'state 48' -> COLON -> shift -> 'action 244'
actionsTable[1600] = 245; // 'state 50' -> WS -> reduce -> 'action 245'
actionsTable[1605] = 246; // 'state 50' -> CURLY_CLOSE -> reduce -> 'action 246'
actionsTable[1606] = 247; // 'state 50' -> COMMA -> reduce -> 'action 247'
actionsTable[1610] = 248; // 'state 50' -> BRACKET_CLOSE -> reduce -> 'action 248'
actionsTable[1612] = 249; // 'state 50' -> @par-gen.EOF -> reduce -> 'action 249'
actionsTable[1664] = 250; // 'state 52' -> WS -> reduce -> 'action 250'
actionsTable[1669] = 251; // 'state 52' -> CURLY_CLOSE -> reduce -> 'action 251'
actionsTable[1670] = 252; // 'state 52' -> COMMA -> reduce -> 'action 252'
actionsTable[1674] = 253; // 'state 52' -> BRACKET_CLOSE -> reduce -> 'action 253'
actionsTable[1676] = 254; // 'state 52' -> @par-gen.EOF -> reduce -> 'action 254'
actionsTable[1632] = 255; // 'state 51' -> WS -> shift -> 'action 255'
actionsTable[1633] = 256; // 'state 51' -> TRUE -> shift -> 'action 256'
actionsTable[1634] = 257; // 'state 51' -> FALSE -> shift -> 'action 257'
actionsTable[1635] = 258; // 'state 51' -> NULL -> shift -> 'action 258'
actionsTable[1636] = 259; // 'state 51' -> CURLY_OPEN -> shift -> 'action 259'
actionsTable[1640] = 260; // 'state 51' -> STRING -> shift -> 'action 260'
actionsTable[1641] = 261; // 'state 51' -> BRACKET_OPEN -> shift -> 'action 261'
actionsTable[1643] = 262; // 'state 51' -> NUMBER -> shift -> 'action 262'
actionsTable[1648] = 263; // 'state 51' -> Element -> shift -> 'action 263'
actionsTable[1649] = 264; // 'state 51' -> Value -> shift -> 'action 264'
actionsTable[1650] = 265; // 'state 51' -> Object -> shift -> 'action 265'
actionsTable[1653] = 266; // 'state 51' -> Array -> shift -> 'action 266'
actionsTable[1696] = 267; // 'state 53' -> WS -> reduce -> 'action 267'
actionsTable[1701] = 268; // 'state 53' -> CURLY_CLOSE -> reduce -> 'action 268'
actionsTable[1702] = 269; // 'state 53' -> COMMA -> reduce -> 'action 269'
actionsTable[1706] = 270; // 'state 53' -> BRACKET_CLOSE -> reduce -> 'action 270'
actionsTable[1708] = 271; // 'state 53' -> @par-gen.EOF -> reduce -> 'action 271'
actionsTable[1728] = 272; // 'state 54' -> WS -> shift -> 'action 272'
actionsTable[1735] = 273; // 'state 54' -> COLON -> shift -> 'action 273'
actionsTable[1760] = 274; // 'state 55' -> WS -> reduce -> 'action 274'
actionsTable[1765] = 275; // 'state 55' -> CURLY_CLOSE -> reduce -> 'action 275'
actionsTable[1766] = 276; // 'state 55' -> COMMA -> reduce -> 'action 276'
actionsTable[1770] = 277; // 'state 55' -> BRACKET_CLOSE -> reduce -> 'action 277'
actionsTable[1772] = 278; // 'state 55' -> @par-gen.EOF -> reduce -> 'action 278'
actionsTable[1792] = 279; // 'state 56' -> WS -> shift -> 'action 279'
actionsTable[1800] = 280; // 'state 56' -> STRING -> shift -> 'action 280'
actionsTable[1812] = 281; // 'state 56' -> Member -> shift -> 'action 281'
actionsTable[1856] = 282; // 'state 58' -> WS -> shift -> 'action 282'
actionsTable[1857] = 283; // 'state 58' -> TRUE -> shift -> 'action 283'
actionsTable[1858] = 284; // 'state 58' -> FALSE -> shift -> 'action 284'
actionsTable[1859] = 285; // 'state 58' -> NULL -> shift -> 'action 285'
actionsTable[1860] = 286; // 'state 58' -> CURLY_OPEN -> shift -> 'action 286'
actionsTable[1864] = 287; // 'state 58' -> STRING -> shift -> 'action 287'
actionsTable[1865] = 288; // 'state 58' -> BRACKET_OPEN -> shift -> 'action 288'
actionsTable[1867] = 289; // 'state 58' -> NUMBER -> shift -> 'action 289'
actionsTable[1872] = 290; // 'state 58' -> Element -> shift -> 'action 290'
actionsTable[1873] = 291; // 'state 58' -> Value -> shift -> 'action 291'
actionsTable[1874] = 292; // 'state 58' -> Object -> shift -> 'action 292'
actionsTable[1877] = 293; // 'state 58' -> Array -> shift -> 'action 293'
actionsTable[1831] = 294; // 'state 57' -> COLON -> shift -> 'action 294'
actionsTable[1888] = 295; // 'state 59' -> WS -> reduce -> 'action 295'
actionsTable[1893] = 296; // 'state 59' -> CURLY_CLOSE -> reduce -> 'action 296'
actionsTable[1894] = 297; // 'state 59' -> COMMA -> reduce -> 'action 297'
actionsTable[1898] = 298; // 'state 59' -> BRACKET_CLOSE -> reduce -> 'action 298'
actionsTable[1900] = 299; // 'state 59' -> @par-gen.EOF -> reduce -> 'action 299'
actionsTable[1952] = 300; // 'state 61' -> WS -> reduce -> 'action 300'
actionsTable[1957] = 301; // 'state 61' -> CURLY_CLOSE -> reduce -> 'action 301'
actionsTable[1958] = 302; // 'state 61' -> COMMA -> reduce -> 'action 302'
actionsTable[1962] = 303; // 'state 61' -> BRACKET_CLOSE -> reduce -> 'action 303'
actionsTable[1964] = 304; // 'state 61' -> @par-gen.EOF -> reduce -> 'action 304'
actionsTable[1920] = 305; // 'state 60' -> WS -> shift -> 'action 305'
actionsTable[1921] = 306; // 'state 60' -> TRUE -> shift -> 'action 306'
actionsTable[1922] = 307; // 'state 60' -> FALSE -> shift -> 'action 307'
actionsTable[1923] = 308; // 'state 60' -> NULL -> shift -> 'action 308'
actionsTable[1924] = 309; // 'state 60' -> CURLY_OPEN -> shift -> 'action 309'
actionsTable[1928] = 310; // 'state 60' -> STRING -> shift -> 'action 310'
actionsTable[1929] = 311; // 'state 60' -> BRACKET_OPEN -> shift -> 'action 311'
actionsTable[1931] = 312; // 'state 60' -> NUMBER -> shift -> 'action 312'
actionsTable[1936] = 313; // 'state 60' -> Element -> shift -> 'action 313'
actionsTable[1937] = 314; // 'state 60' -> Value -> shift -> 'action 314'
actionsTable[1938] = 315; // 'state 60' -> Object -> shift -> 'action 315'
actionsTable[1941] = 316; // 'state 60' -> Array -> shift -> 'action 316'
actionsTable[2016] = 317; // 'state 63' -> WS -> shift -> 'action 317'
actionsTable[2017] = 318; // 'state 63' -> TRUE -> shift -> 'action 318'
actionsTable[2018] = 319; // 'state 63' -> FALSE -> shift -> 'action 319'
actionsTable[2019] = 320; // 'state 63' -> NULL -> shift -> 'action 320'
actionsTable[2020] = 321; // 'state 63' -> CURLY_OPEN -> shift -> 'action 321'
actionsTable[2024] = 322; // 'state 63' -> STRING -> shift -> 'action 322'
actionsTable[2025] = 323; // 'state 63' -> BRACKET_OPEN -> shift -> 'action 323'
actionsTable[2027] = 324; // 'state 63' -> NUMBER -> shift -> 'action 324'
actionsTable[2032] = 325; // 'state 63' -> Element -> shift -> 'action 325'
actionsTable[2033] = 326; // 'state 63' -> Value -> shift -> 'action 326'
actionsTable[2034] = 327; // 'state 63' -> Object -> shift -> 'action 327'
actionsTable[2037] = 328; // 'state 63' -> Array -> shift -> 'action 328'
actionsTable[1991] = 329; // 'state 62' -> COLON -> shift -> 'action 329'
actionsTable[2085] = 330; // 'state 65' -> CURLY_CLOSE -> reduce -> 'action 330'
actionsTable[2086] = 331; // 'state 65' -> COMMA -> reduce -> 'action 331'
actionsTable[2056] = 332; // 'state 64' -> STRING -> shift -> 'action 332'
actionsTable[2117] = 333; // 'state 66' -> CURLY_CLOSE -> reduce -> 'action 333'
actionsTable[2118] = 334; // 'state 66' -> COMMA -> reduce -> 'action 334'
actionsTable[2144] = 335; // 'state 67' -> WS -> shift -> 'action 335'
actionsTable[2145] = 336; // 'state 67' -> TRUE -> shift -> 'action 336'
actionsTable[2146] = 337; // 'state 67' -> FALSE -> shift -> 'action 337'
actionsTable[2147] = 338; // 'state 67' -> NULL -> shift -> 'action 338'
actionsTable[2148] = 339; // 'state 67' -> CURLY_OPEN -> shift -> 'action 339'
actionsTable[2152] = 340; // 'state 67' -> STRING -> shift -> 'action 340'
actionsTable[2153] = 341; // 'state 67' -> BRACKET_OPEN -> shift -> 'action 341'
actionsTable[2155] = 342; // 'state 67' -> NUMBER -> shift -> 'action 342'
actionsTable[2160] = 343; // 'state 67' -> Element -> shift -> 'action 343'
actionsTable[2161] = 344; // 'state 67' -> Value -> shift -> 'action 344'
actionsTable[2162] = 345; // 'state 67' -> Object -> shift -> 'action 345'
actionsTable[2165] = 346; // 'state 67' -> Array -> shift -> 'action 346'
actionsTable[2182] = 347; // 'state 68' -> COMMA -> reduce -> 'action 347'
actionsTable[2186] = 348; // 'state 68' -> BRACKET_CLOSE -> reduce -> 'action 348'
actionsTable[2240] = 349; // 'state 70' -> WS -> shift -> 'action 349'
actionsTable[2241] = 350; // 'state 70' -> TRUE -> shift -> 'action 350'
actionsTable[2242] = 351; // 'state 70' -> FALSE -> shift -> 'action 351'
actionsTable[2243] = 352; // 'state 70' -> NULL -> shift -> 'action 352'
actionsTable[2244] = 353; // 'state 70' -> CURLY_OPEN -> shift -> 'action 353'
actionsTable[2248] = 354; // 'state 70' -> STRING -> shift -> 'action 354'
actionsTable[2249] = 355; // 'state 70' -> BRACKET_OPEN -> shift -> 'action 355'
actionsTable[2251] = 356; // 'state 70' -> NUMBER -> shift -> 'action 356'
actionsTable[2256] = 357; // 'state 70' -> Element -> shift -> 'action 357'
actionsTable[2257] = 358; // 'state 70' -> Value -> shift -> 'action 358'
actionsTable[2258] = 359; // 'state 70' -> Object -> shift -> 'action 359'
actionsTable[2261] = 360; // 'state 70' -> Array -> shift -> 'action 360'
actionsTable[2215] = 361; // 'state 69' -> COLON -> shift -> 'action 361'
actionsTable[2309] = 362; // 'state 72' -> CURLY_CLOSE -> reduce -> 'action 362'
actionsTable[2310] = 363; // 'state 72' -> COMMA -> reduce -> 'action 363'
actionsTable[2280] = 364; // 'state 71' -> STRING -> shift -> 'action 364'
actionsTable[2341] = 365; // 'state 73' -> CURLY_CLOSE -> reduce -> 'action 365'
actionsTable[2342] = 366; // 'state 73' -> COMMA -> reduce -> 'action 366'
actionsTable[2368] = 367; // 'state 74' -> WS -> shift -> 'action 367'
actionsTable[2369] = 368; // 'state 74' -> TRUE -> shift -> 'action 368'
actionsTable[2370] = 369; // 'state 74' -> FALSE -> shift -> 'action 369'
actionsTable[2371] = 370; // 'state 74' -> NULL -> shift -> 'action 370'
actionsTable[2372] = 371; // 'state 74' -> CURLY_OPEN -> shift -> 'action 371'
actionsTable[2376] = 372; // 'state 74' -> STRING -> shift -> 'action 372'
actionsTable[2377] = 373; // 'state 74' -> BRACKET_OPEN -> shift -> 'action 373'
actionsTable[2379] = 374; // 'state 74' -> NUMBER -> shift -> 'action 374'
actionsTable[2384] = 375; // 'state 74' -> Element -> shift -> 'action 375'
actionsTable[2385] = 376; // 'state 74' -> Value -> shift -> 'action 376'
actionsTable[2386] = 377; // 'state 74' -> Object -> shift -> 'action 377'
actionsTable[2389] = 378; // 'state 74' -> Array -> shift -> 'action 378'
actionsTable[2406] = 379; // 'state 75' -> COMMA -> reduce -> 'action 379'
actionsTable[2410] = 380; // 'state 75' -> BRACKET_CLOSE -> reduce -> 'action 380'
actionsTable[2437] = 381; // 'state 76' -> CURLY_CLOSE -> reduce -> 'action 381'
actionsTable[2438] = 382; // 'state 76' -> COMMA -> reduce -> 'action 382'
actionsTable[2464] = 383; // 'state 77' -> WS -> shift -> 'action 383'
actionsTable[2465] = 384; // 'state 77' -> TRUE -> shift -> 'action 384'
actionsTable[2466] = 385; // 'state 77' -> FALSE -> shift -> 'action 385'
actionsTable[2467] = 386; // 'state 77' -> NULL -> shift -> 'action 386'
actionsTable[2468] = 387; // 'state 77' -> CURLY_OPEN -> shift -> 'action 387'
actionsTable[2472] = 388; // 'state 77' -> STRING -> shift -> 'action 388'
actionsTable[2473] = 389; // 'state 77' -> BRACKET_OPEN -> shift -> 'action 389'
actionsTable[2475] = 390; // 'state 77' -> NUMBER -> shift -> 'action 390'
actionsTable[2480] = 391; // 'state 77' -> Element -> shift -> 'action 391'
actionsTable[2481] = 392; // 'state 77' -> Value -> shift -> 'action 392'
actionsTable[2482] = 393; // 'state 77' -> Object -> shift -> 'action 393'
actionsTable[2485] = 394; // 'state 77' -> Array -> shift -> 'action 394'
actionsTable[2501] = 395; // 'state 78' -> CURLY_CLOSE -> reduce -> 'action 395'
actionsTable[2502] = 396; // 'state 78' -> COMMA -> reduce -> 'action 396'
actionsTable[2533] = 397; // 'state 79' -> CURLY_CLOSE -> reduce -> 'action 397'
actionsTable[2534] = 398; // 'state 79' -> COMMA -> reduce -> 'action 398'
actionsTable[2560] = 399; // 'state 80' -> WS -> shift -> 'action 399'
actionsTable[2561] = 400; // 'state 80' -> TRUE -> shift -> 'action 400'
actionsTable[2562] = 401; // 'state 80' -> FALSE -> shift -> 'action 401'
actionsTable[2563] = 402; // 'state 80' -> NULL -> shift -> 'action 402'
actionsTable[2564] = 403; // 'state 80' -> CURLY_OPEN -> shift -> 'action 403'
actionsTable[2568] = 404; // 'state 80' -> STRING -> shift -> 'action 404'
actionsTable[2569] = 405; // 'state 80' -> BRACKET_OPEN -> shift -> 'action 405'
actionsTable[2571] = 406; // 'state 80' -> NUMBER -> shift -> 'action 406'
actionsTable[2576] = 407; // 'state 80' -> Element -> shift -> 'action 407'
actionsTable[2577] = 408; // 'state 80' -> Value -> shift -> 'action 408'
actionsTable[2578] = 409; // 'state 80' -> Object -> shift -> 'action 409'
actionsTable[2581] = 410; // 'state 80' -> Array -> shift -> 'action 410'
actionsTable[2597] = 411; // 'state 81' -> CURLY_CLOSE -> reduce -> 'action 411'
actionsTable[2598] = 412; // 'state 81' -> COMMA -> reduce -> 'action 412'
actionsTable[2629] = 413; // 'state 82' -> CURLY_CLOSE -> reduce -> 'action 413'
actionsTable[2630] = 414; // 'state 82' -> COMMA -> reduce -> 'action 414'
actionsTable[2661] = 415; // 'state 83' -> CURLY_CLOSE -> reduce -> 'action 415'
actionsTable[2662] = 416; // 'state 83' -> COMMA -> reduce -> 'action 416'

const gotoTable = new Uint16Array(2688).fill(0xffff);
gotoTable[15] = 9; // 'state 9'
gotoTable[16] = 10; // 'state 10'
gotoTable[17] = 11; // 'state 11'
gotoTable[18] = 12; // 'state 12'
gotoTable[21] = 13; // 'state 13'
gotoTable[49] = 22; // 'state 22'
gotoTable[50] = 23; // 'state 23'
gotoTable[53] = 24; // 'state 24'
gotoTable[179] = 28; // 'state 28'
gotoTable[180] = 29; // 'state 29'
gotoTable[246] = 33; // 'state 33'
gotoTable[240] = 32; // 'state 32'
gotoTable[241] = 11; // 'state 11'
gotoTable[242] = 12; // 'state 12'
gotoTable[245] = 13; // 'state 13'
gotoTable[595] = 38; // 'state 38'
gotoTable[596] = 39; // 'state 39'
gotoTable[662] = 43; // 'state 43'
gotoTable[656] = 42; // 'state 42'
gotoTable[657] = 11; // 'state 11'
gotoTable[658] = 12; // 'state 12'
gotoTable[661] = 13; // 'state 13'
gotoTable[977] = 22; // 'state 22'
gotoTable[978] = 12; // 'state 12'
gotoTable[981] = 13; // 'state 13'
gotoTable[1297] = 22; // 'state 22'
gotoTable[1298] = 12; // 'state 12'
gotoTable[1301] = 13; // 'state 13'
gotoTable[1524] = 65; // 'state 65'
gotoTable[1584] = 66; // 'state 66'
gotoTable[1585] = 11; // 'state 11'
gotoTable[1586] = 12; // 'state 12'
gotoTable[1589] = 13; // 'state 13'
gotoTable[1648] = 68; // 'state 68'
gotoTable[1649] = 11; // 'state 11'
gotoTable[1650] = 12; // 'state 12'
gotoTable[1653] = 13; // 'state 13'
gotoTable[1812] = 72; // 'state 72'
gotoTable[1872] = 73; // 'state 73'
gotoTable[1873] = 11; // 'state 11'
gotoTable[1874] = 12; // 'state 12'
gotoTable[1877] = 13; // 'state 13'
gotoTable[1936] = 75; // 'state 75'
gotoTable[1937] = 11; // 'state 11'
gotoTable[1938] = 12; // 'state 12'
gotoTable[1941] = 13; // 'state 13'
gotoTable[2032] = 76; // 'state 76'
gotoTable[2033] = 11; // 'state 11'
gotoTable[2034] = 12; // 'state 12'
gotoTable[2037] = 13; // 'state 13'
gotoTable[2160] = 78; // 'state 78'
gotoTable[2161] = 11; // 'state 11'
gotoTable[2162] = 12; // 'state 12'
gotoTable[2165] = 13; // 'state 13'
gotoTable[2256] = 79; // 'state 79'
gotoTable[2257] = 11; // 'state 11'
gotoTable[2258] = 12; // 'state 12'
gotoTable[2261] = 13; // 'state 13'
gotoTable[2384] = 81; // 'state 81'
gotoTable[2385] = 11; // 'state 11'
gotoTable[2386] = 12; // 'state 12'
gotoTable[2389] = 13; // 'state 13'
gotoTable[2480] = 82; // 'state 82'
gotoTable[2481] = 11; // 'state 11'
gotoTable[2482] = 12; // 'state 12'
gotoTable[2485] = 13; // 'state 13'
gotoTable[2576] = 83; // 'state 83'
gotoTable[2577] = 11; // 'state 11'
gotoTable[2578] = 12; // 'state 12'
gotoTable[2581] = 13; // 'state 13'

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

/**
 * We use the stack to store shifted/reduced states in [sp] and we also use
 * [sp + 1] to store the tree pointer references to shifted/reduced nodes.
 * This allows us to use a single typed array to store two kinds of data.
 * * [sp] always points to the current state on top of the stack and
 * * [sp + 1] always points to the tree item currently on top of the stack
 * ___________________________________
 * |_dummy_|_state_|_tp_|_state_|_tp_|...
 */
const stack = new Uint8Array(512);

/**
 * This typed array contains the syntax tree from a parse.
 * A node is stored in the following layout:
 * struct Node {
 *  name: uint16,
 *  start: uint16,
 *  end: uint16,
 *  numChildren: uint16,
 *  firstChild: uint16,
 *  nextSibling: uint16,
 * }
 * This enables efficient storage of nodes with variable number of children and
 * fast DFS traversal.
 */
const tree = new Uint16Array(8192);

const createProxy = (tree, pointer) => {
  return new Proxy(
    {},
    {
      get(target, prop) {
        switch (prop) {
          case "name":
            return parserSymbols[tree[pointer]];
          case "start":
            return tree[pointer + 1] === 0xffff ? -1 : tree[pointer + 1];
          case "end":
            return tree[pointer + 2] === 0xffff ? -1 : tree[pointer + 2];
          case "items":
            const nChildren = tree[pointer + 3];

            if (nChildren === 0) {
              return undefined;
            }

            const firstChild = tree[pointer + 4];
            const children = [createProxy(tree, firstChild)];
            let nextChild = tree[firstChild + 5];

            for (let i = 1; i < nChildren; i++) {
              children.push(createProxy(tree, nextChild));
              nextChild = tree[nextChild + 5];
            }

            return children;
          case "__tree":
            return tree;
          case "__pointer":
            return pointer;
        }
      },
      ownKeys(target) {
        return ["name", "start", "end", "items"];
      },
      has(target, prop) {
        return this.ownKeys(target).includes(prop);
      },
      getOwnPropertyDescriptor(target, prop) {
        return this.has(target, prop)
          ? { enumerable: true, configurable: true }
          : undefined;
      },
    }
  );
};

function parse(input) {
  lexer.push("initial");

  const stream = Buffer.isBuffer(input) ? input : Buffer.from(input);

  let result = nextToken(stream, 0);
  let lookahead = result.state;

  // add a dummy entry to ensure no out-of-bounds reads for [sp - 1]
  stack[0] = 0;
  stack[1] = 0; // starting state
  let sp = 1;
  // let the tree stack start from offset 6
  // offset 0 means an error occurred and should be used by the parser
  let tp = 6;

  while (true) {
    const currentState = stack[sp];

    const actionLookup = actionsTable[currentState * 32 + lookahead];
    if (actionLookup === 0xffff) {
      const context = input.toString().substr(result.start, 10);
      throw new Error(
        `Unexpected lookahead ${parserSymbols[lookahead]} at '${context}'`
      );
    }
    const action = actions[actionLookup];

    switch (action.op) {
      case 2: // done
        lexer.pop();
        return createProxy(tree, tp - 6);
      case 0: // shift
        tree[tp] = lookahead; // name
        tree[tp + 1] = result.start;
        tree[tp + 2] = result.end;
        // TODO: test with mac and win
        // tree[tp + 3] is 0 by default and leaf nodes have no children
        // tree[tp + 4] is 0 by default and leaf nodes need no first child
        tree[stack[sp - 1] + 5] = tp; // write the current address to the previous item as next sibling

        // shift current address on top of "address stack"
        stack[sp + 1] = tp;

        sp += 2;
        stack[sp] = action.state;

        result = nextToken(stream, result.end);
        lookahead = result.state;

        break;
      case 1: // reduce
        let stackItemsToReduce =
          reducerStates[
            currentState * 84 + action.symbol * 32 + lookahead * 32
          ];

        // multiply by two because our stack contains adresses and states interleaved
        sp -= stackItemsToReduce * 2;

        tree[tp] = action.symbol; // name
        tree[tp + 1] = -1; // start
        tree[tp + 2] = -1; // end
        tree[tp + 3] = stackItemsToReduce; // number of children
        tree[tp + 4] = stack[sp + 1]; // first child
        tree[stack[sp - 1] + 5] = tp; // next sibling

        stack[sp + 1] = tp;

        const nextState = gotoTable[stack[sp] * 32 + action.symbol];
        sp += 2;
        stack[sp] = nextState;

        break;
      default:
        throw new Error("Parser Error");
    }

    tp += 6;
  }
}

export { parse };
