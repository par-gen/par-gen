// @ts-nocheck

import { next as nextTokenInitial } from "./lexer-initial.js";

/*
      RegExp := Expression;
Expression := Union;
Expression := Group;
Group := PAREN_OPEN Union PAREN_CLOSE;
Group := PAREN_OPEN Union PAREN_CLOSE QUANTIFIER;
Union := Sequence;
Union := Union UNION Sequence;
Sequence := CHARACTER;
Sequence := CHARACTER QUANTIFIER;
Sequence := Sequence CHARACTER;
Sequence := Sequence CHARACTER QUANTIFIER;
Sequence := Group;
Sequence := Sequence Group;
      */

const reducerStates = new Uint8Array(6656);
reducerStates[28] = 1; // 'state 1' -> Sequence -> CHARACTER
reducerStates[444] = 1; // 'state 1' -> Sequence -> UNION
reducerStates[860] = 1; // 'state 1' -> Sequence -> PAREN_OPEN
reducerStates[1276] = 1; // 'state 1' -> Sequence -> PAREN_CLOSE
reducerStates[2108] = 1; // 'state 1' -> Sequence -> @par-gen.EOF
reducerStates[2135] = 1; // 'state 3' -> S -> @par-gen.EOF
reducerStates[2152] = 1; // 'state 4' -> RegExp -> @par-gen.EOF
reducerStates[2169] = 1; // 'state 5' -> Expression -> @par-gen.EOF
reducerStates[92] = 1; // 'state 5' -> Sequence -> CHARACTER
reducerStates[508] = 1; // 'state 5' -> Sequence -> UNION
reducerStates[924] = 1; // 'state 5' -> Sequence -> PAREN_OPEN
reducerStates[1340] = 1; // 'state 5' -> Sequence -> PAREN_CLOSE
reducerStates[2172] = 1; // 'state 5' -> Sequence -> @par-gen.EOF
reducerStates[2185] = 1; // 'state 6' -> Expression -> @par-gen.EOF
reducerStates[539] = 1; // 'state 7' -> Union -> UNION
reducerStates[1371] = 1; // 'state 7' -> Union -> PAREN_CLOSE
reducerStates[2203] = 1; // 'state 7' -> Union -> @par-gen.EOF
reducerStates[156] = 2; // 'state 9' -> Sequence -> CHARACTER
reducerStates[572] = 2; // 'state 9' -> Sequence -> UNION
reducerStates[988] = 2; // 'state 9' -> Sequence -> PAREN_OPEN
reducerStates[1404] = 2; // 'state 9' -> Sequence -> PAREN_CLOSE
reducerStates[2236] = 2; // 'state 9' -> Sequence -> @par-gen.EOF
reducerStates[188] = 2; // 'state 11' -> Sequence -> CHARACTER
reducerStates[604] = 2; // 'state 11' -> Sequence -> UNION
reducerStates[1020] = 2; // 'state 11' -> Sequence -> PAREN_OPEN
reducerStates[1436] = 2; // 'state 11' -> Sequence -> PAREN_CLOSE
reducerStates[2268] = 2; // 'state 11' -> Sequence -> @par-gen.EOF
reducerStates[204] = 1; // 'state 12' -> Sequence -> CHARACTER
reducerStates[620] = 1; // 'state 12' -> Sequence -> UNION
reducerStates[1036] = 1; // 'state 12' -> Sequence -> PAREN_OPEN
reducerStates[1452] = 1; // 'state 12' -> Sequence -> PAREN_CLOSE
reducerStates[2284] = 1; // 'state 12' -> Sequence -> @par-gen.EOF
reducerStates[220] = 1; // 'state 13' -> Sequence -> CHARACTER
reducerStates[636] = 1; // 'state 13' -> Sequence -> UNION
reducerStates[1052] = 1; // 'state 13' -> Sequence -> PAREN_OPEN
reducerStates[1468] = 1; // 'state 13' -> Sequence -> PAREN_CLOSE
reducerStates[2300] = 1; // 'state 13' -> Sequence -> @par-gen.EOF
reducerStates[252] = 2; // 'state 15' -> Sequence -> CHARACTER
reducerStates[668] = 2; // 'state 15' -> Sequence -> UNION
reducerStates[1084] = 2; // 'state 15' -> Sequence -> PAREN_OPEN
reducerStates[1500] = 2; // 'state 15' -> Sequence -> PAREN_CLOSE
reducerStates[2332] = 2; // 'state 15' -> Sequence -> @par-gen.EOF
reducerStates[268] = 1; // 'state 16' -> Sequence -> CHARACTER
reducerStates[684] = 1; // 'state 16' -> Sequence -> UNION
reducerStates[1100] = 1; // 'state 16' -> Sequence -> PAREN_OPEN
reducerStates[1516] = 1; // 'state 16' -> Sequence -> PAREN_CLOSE
reducerStates[2348] = 1; // 'state 16' -> Sequence -> @par-gen.EOF
reducerStates[699] = 3; // 'state 17' -> Union -> UNION
reducerStates[1531] = 3; // 'state 17' -> Union -> PAREN_CLOSE
reducerStates[2363] = 3; // 'state 17' -> Union -> @par-gen.EOF
reducerStates[300] = 3; // 'state 18' -> Sequence -> CHARACTER
reducerStates[716] = 3; // 'state 18' -> Sequence -> UNION
reducerStates[1132] = 3; // 'state 18' -> Sequence -> PAREN_OPEN
reducerStates[1548] = 3; // 'state 18' -> Sequence -> PAREN_CLOSE
reducerStates[2380] = 3; // 'state 18' -> Sequence -> @par-gen.EOF
reducerStates[316] = 1; // 'state 19' -> Sequence -> CHARACTER
reducerStates[732] = 1; // 'state 19' -> Sequence -> UNION
reducerStates[1148] = 1; // 'state 19' -> Sequence -> PAREN_OPEN
reducerStates[1564] = 1; // 'state 19' -> Sequence -> PAREN_CLOSE
reducerStates[2396] = 1; // 'state 19' -> Sequence -> @par-gen.EOF
reducerStates[346] = 3; // 'state 21' -> Group -> CHARACTER
reducerStates[762] = 3; // 'state 21' -> Group -> UNION
reducerStates[1178] = 3; // 'state 21' -> Group -> PAREN_OPEN
reducerStates[1594] = 3; // 'state 21' -> Group -> PAREN_CLOSE
reducerStates[2426] = 3; // 'state 21' -> Group -> @par-gen.EOF
reducerStates[364] = 2; // 'state 22' -> Sequence -> CHARACTER
reducerStates[780] = 2; // 'state 22' -> Sequence -> UNION
reducerStates[1196] = 2; // 'state 22' -> Sequence -> PAREN_OPEN
reducerStates[1612] = 2; // 'state 22' -> Sequence -> PAREN_CLOSE
reducerStates[2444] = 2; // 'state 22' -> Sequence -> @par-gen.EOF
reducerStates[378] = 3; // 'state 23' -> Group -> CHARACTER
reducerStates[794] = 3; // 'state 23' -> Group -> UNION
reducerStates[1210] = 3; // 'state 23' -> Group -> PAREN_OPEN
reducerStates[1626] = 3; // 'state 23' -> Group -> PAREN_CLOSE
reducerStates[2458] = 3; // 'state 23' -> Group -> @par-gen.EOF
reducerStates[394] = 4; // 'state 24' -> Group -> CHARACTER
reducerStates[810] = 4; // 'state 24' -> Group -> UNION
reducerStates[1226] = 4; // 'state 24' -> Group -> PAREN_OPEN
reducerStates[1642] = 4; // 'state 24' -> Group -> PAREN_CLOSE
reducerStates[2474] = 4; // 'state 24' -> Group -> @par-gen.EOF
reducerStates[410] = 4; // 'state 25' -> Group -> CHARACTER
reducerStates[826] = 4; // 'state 25' -> Group -> UNION
reducerStates[1242] = 4; // 'state 25' -> Group -> PAREN_OPEN
reducerStates[1658] = 4; // 'state 25' -> Group -> PAREN_CLOSE
reducerStates[2490] = 4; // 'state 25' -> Group -> @par-gen.EOF

const parserSymbols = [
  "CHARACTER", // 0
  "UNION", // 1
  "PAREN_OPEN", // 2
  "PAREN_CLOSE", // 3
  "QUANTIFIER", // 4
  "@par-gen.EOF", // 5
  "@par-gen.ERROR", // 6
  "S", // 7
  "RegExp", // 8
  "Expression", // 9
  "Group", // 10
  "Union", // 11
  "Sequence", // 12
  "undefined", // 13
  "undefined", // 14
  "undefined", // 15
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
    op: 2, // done
    state: undefined,
    symbol: undefined,
  },
  // 'action 8'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 8, // RegExp
  },
  // 'action 9'
  {
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
  },
  // 'action 10'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 9, // Expression
  },
  // 'action 11'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Sequence
  },
  // 'action 12'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Sequence
  },
  // 'action 13'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Sequence
  },
  // 'action 14'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Sequence
  },
  // 'action 15'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Sequence
  },
  // 'action 16'
  {
    op: 0, // shift
    state: 9, // 'state 9'
    symbol: undefined,
  },
  // 'action 17'
  {
    op: 0, // shift
    state: 10, // 'state 10'
    symbol: undefined,
  },
  // 'action 18'
  {
    op: 0, // shift
    state: 11, // 'state 11'
    symbol: undefined,
  },
  // 'action 19'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 11, // Union
  },
  // 'action 20'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 11, // Union
  },
  // 'action 21'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 11, // Union
  },
  // 'action 22'
  {
    op: 0, // shift
    state: 12, // 'state 12'
    symbol: undefined,
  },
  // 'action 23'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 24'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 25'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 26'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 27'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 28'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Sequence
  },
  // 'action 29'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Sequence
  },
  // 'action 30'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Sequence
  },
  // 'action 31'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Sequence
  },
  // 'action 32'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Sequence
  },
  // 'action 33'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 34'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 35'
  {
    op: 0, // shift
    state: 16, // 'state 16'
    symbol: undefined,
  },
  // 'action 36'
  {
    op: 0, // shift
    state: 17, // 'state 17'
    symbol: undefined,
  },
  // 'action 37'
  {
    op: 0, // shift
    state: 18, // 'state 18'
    symbol: undefined,
  },
  // 'action 38'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Sequence
  },
  // 'action 39'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Sequence
  },
  // 'action 40'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Sequence
  },
  // 'action 41'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Sequence
  },
  // 'action 42'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Sequence
  },
  // 'action 43'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Sequence
  },
  // 'action 44'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Sequence
  },
  // 'action 45'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Sequence
  },
  // 'action 46'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Sequence
  },
  // 'action 47'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Sequence
  },
  // 'action 48'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 49'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 50'
  {
    op: 0, // shift
    state: 19, // 'state 19'
    symbol: undefined,
  },
  // 'action 51'
  {
    op: 0, // shift
    state: 20, // 'state 20'
    symbol: undefined,
  },
  // 'action 52'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 53'
  {
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
  },
  // 'action 54'
  {
    op: 0, // shift
    state: 21, // 'state 21'
    symbol: undefined,
  },
  // 'action 55'
  {
    op: 0, // shift
    state: 22, // 'state 22'
    symbol: undefined,
  },
  // 'action 56'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Sequence
  },
  // 'action 57'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Sequence
  },
  // 'action 58'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Sequence
  },
  // 'action 59'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Sequence
  },
  // 'action 60'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Sequence
  },
  // 'action 61'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Sequence
  },
  // 'action 62'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Sequence
  },
  // 'action 63'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Sequence
  },
  // 'action 64'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Sequence
  },
  // 'action 65'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Sequence
  },
  // 'action 66'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Sequence
  },
  // 'action 67'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Sequence
  },
  // 'action 68'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Sequence
  },
  // 'action 69'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Sequence
  },
  // 'action 70'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Sequence
  },
  // 'action 71'
  {
    op: 0, // shift
    state: 9, // 'state 9'
    symbol: undefined,
  },
  // 'action 72'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 73'
  {
    op: 0, // shift
    state: 11, // 'state 11'
    symbol: undefined,
  },
  // 'action 74'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 11, // Union
  },
  // 'action 75'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 11, // Union
  },
  // 'action 76'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 11, // Union
  },
  // 'action 77'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Sequence
  },
  // 'action 78'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Sequence
  },
  // 'action 79'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Sequence
  },
  // 'action 80'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Sequence
  },
  // 'action 81'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Sequence
  },
  // 'action 82'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Sequence
  },
  // 'action 83'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Sequence
  },
  // 'action 84'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Sequence
  },
  // 'action 85'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Sequence
  },
  // 'action 86'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Sequence
  },
  // 'action 87'
  {
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
  },
  // 'action 88'
  {
    op: 0, // shift
    state: 23, // 'state 23'
    symbol: undefined,
  },
  // 'action 89'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Sequence
  },
  // 'action 90'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Sequence
  },
  // 'action 91'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Sequence
  },
  // 'action 92'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Sequence
  },
  // 'action 93'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Sequence
  },
  // 'action 94'
  {
    op: 0, // shift
    state: 24, // 'state 24'
    symbol: undefined,
  },
  // 'action 95'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 96'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 97'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 98'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 99'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 100'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Sequence
  },
  // 'action 101'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Sequence
  },
  // 'action 102'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Sequence
  },
  // 'action 103'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Sequence
  },
  // 'action 104'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Sequence
  },
  // 'action 105'
  {
    op: 0, // shift
    state: 25, // 'state 25'
    symbol: undefined,
  },
  // 'action 106'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 107'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 108'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 109'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 110'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 111'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 112'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 113'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 114'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 115'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 116'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 117'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 118'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 119'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 120'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
];
const actionsTable = new Uint16Array(416).fill(0xffff);
actionsTable[0] = 0; // 'state 0' -> CHARACTER -> shift -> 'action 0'
actionsTable[2] = 1; // 'state 0' -> PAREN_OPEN -> shift -> 'action 1'
actionsTable[8] = 2; // 'state 0' -> RegExp -> shift -> 'action 2'
actionsTable[9] = 3; // 'state 0' -> Expression -> shift -> 'action 3'
actionsTable[10] = 4; // 'state 0' -> Group -> shift -> 'action 4'
actionsTable[11] = 5; // 'state 0' -> Union -> shift -> 'action 5'
actionsTable[12] = 6; // 'state 0' -> Sequence -> shift -> 'action 6'
actionsTable[53] = 7; // 'state 3' -> @par-gen.EOF -> done -> 'action 7'
actionsTable[69] = 8; // 'state 4' -> @par-gen.EOF -> reduce -> 'action 8'
actionsTable[97] = 9; // 'state 6' -> UNION -> shift -> 'action 9'
actionsTable[101] = 10; // 'state 6' -> @par-gen.EOF -> reduce -> 'action 10'
actionsTable[80] = 11; // 'state 5' -> CHARACTER -> reduce -> 'action 11'
actionsTable[81] = 12; // 'state 5' -> UNION -> reduce -> 'action 12'
actionsTable[82] = 13; // 'state 5' -> PAREN_OPEN -> reduce -> 'action 13'
actionsTable[83] = 14; // 'state 5' -> PAREN_CLOSE -> reduce -> 'action 14'
actionsTable[85] = 15; // 'state 5' -> @par-gen.EOF -> reduce -> 'action 15'
actionsTable[112] = 16; // 'state 7' -> CHARACTER -> shift -> 'action 16'
actionsTable[114] = 17; // 'state 7' -> PAREN_OPEN -> shift -> 'action 17'
actionsTable[122] = 18; // 'state 7' -> Group -> shift -> 'action 18'
actionsTable[113] = 19; // 'state 7' -> UNION -> reduce -> 'action 19'
actionsTable[115] = 20; // 'state 7' -> PAREN_CLOSE -> reduce -> 'action 20'
actionsTable[117] = 21; // 'state 7' -> @par-gen.EOF -> reduce -> 'action 21'
actionsTable[32] = 22; // 'state 2' -> CHARACTER -> shift -> 'action 22'
actionsTable[34] = 23; // 'state 2' -> PAREN_OPEN -> shift -> 'action 23'
actionsTable[42] = 24; // 'state 2' -> Group -> shift -> 'action 24'
actionsTable[43] = 25; // 'state 2' -> Union -> shift -> 'action 25'
actionsTable[44] = 26; // 'state 2' -> Sequence -> shift -> 'action 26'
actionsTable[20] = 27; // 'state 1' -> QUANTIFIER -> shift -> 'action 27'
actionsTable[16] = 28; // 'state 1' -> CHARACTER -> reduce -> 'action 28'
actionsTable[17] = 29; // 'state 1' -> UNION -> reduce -> 'action 29'
actionsTable[18] = 30; // 'state 1' -> PAREN_OPEN -> reduce -> 'action 30'
actionsTable[19] = 31; // 'state 1' -> PAREN_CLOSE -> reduce -> 'action 31'
actionsTable[21] = 32; // 'state 1' -> @par-gen.EOF -> reduce -> 'action 32'
actionsTable[128] = 33; // 'state 8' -> CHARACTER -> shift -> 'action 33'
actionsTable[130] = 34; // 'state 8' -> PAREN_OPEN -> shift -> 'action 34'
actionsTable[138] = 35; // 'state 8' -> Group -> shift -> 'action 35'
actionsTable[140] = 36; // 'state 8' -> Sequence -> shift -> 'action 36'
actionsTable[148] = 37; // 'state 9' -> QUANTIFIER -> shift -> 'action 37'
actionsTable[144] = 38; // 'state 9' -> CHARACTER -> reduce -> 'action 38'
actionsTable[145] = 39; // 'state 9' -> UNION -> reduce -> 'action 39'
actionsTable[146] = 40; // 'state 9' -> PAREN_OPEN -> reduce -> 'action 40'
actionsTable[147] = 41; // 'state 9' -> PAREN_CLOSE -> reduce -> 'action 41'
actionsTable[149] = 42; // 'state 9' -> @par-gen.EOF -> reduce -> 'action 42'
actionsTable[176] = 43; // 'state 11' -> CHARACTER -> reduce -> 'action 43'
actionsTable[177] = 44; // 'state 11' -> UNION -> reduce -> 'action 44'
actionsTable[178] = 45; // 'state 11' -> PAREN_OPEN -> reduce -> 'action 45'
actionsTable[179] = 46; // 'state 11' -> PAREN_CLOSE -> reduce -> 'action 46'
actionsTable[181] = 47; // 'state 11' -> @par-gen.EOF -> reduce -> 'action 47'
actionsTable[160] = 48; // 'state 10' -> CHARACTER -> shift -> 'action 48'
actionsTable[162] = 49; // 'state 10' -> PAREN_OPEN -> shift -> 'action 49'
actionsTable[170] = 50; // 'state 10' -> Group -> shift -> 'action 50'
actionsTable[171] = 51; // 'state 10' -> Union -> shift -> 'action 51'
actionsTable[172] = 52; // 'state 10' -> Sequence -> shift -> 'action 52'
actionsTable[225] = 53; // 'state 14' -> UNION -> shift -> 'action 53'
actionsTable[227] = 54; // 'state 14' -> PAREN_CLOSE -> shift -> 'action 54'
actionsTable[196] = 55; // 'state 12' -> QUANTIFIER -> shift -> 'action 55'
actionsTable[192] = 56; // 'state 12' -> CHARACTER -> reduce -> 'action 56'
actionsTable[193] = 57; // 'state 12' -> UNION -> reduce -> 'action 57'
actionsTable[194] = 58; // 'state 12' -> PAREN_OPEN -> reduce -> 'action 58'
actionsTable[195] = 59; // 'state 12' -> PAREN_CLOSE -> reduce -> 'action 59'
actionsTable[197] = 60; // 'state 12' -> @par-gen.EOF -> reduce -> 'action 60'
actionsTable[208] = 61; // 'state 13' -> CHARACTER -> reduce -> 'action 61'
actionsTable[209] = 62; // 'state 13' -> UNION -> reduce -> 'action 62'
actionsTable[210] = 63; // 'state 13' -> PAREN_OPEN -> reduce -> 'action 63'
actionsTable[211] = 64; // 'state 13' -> PAREN_CLOSE -> reduce -> 'action 64'
actionsTable[213] = 65; // 'state 13' -> @par-gen.EOF -> reduce -> 'action 65'
actionsTable[240] = 66; // 'state 15' -> CHARACTER -> reduce -> 'action 66'
actionsTable[241] = 67; // 'state 15' -> UNION -> reduce -> 'action 67'
actionsTable[242] = 68; // 'state 15' -> PAREN_OPEN -> reduce -> 'action 68'
actionsTable[243] = 69; // 'state 15' -> PAREN_CLOSE -> reduce -> 'action 69'
actionsTable[245] = 70; // 'state 15' -> @par-gen.EOF -> reduce -> 'action 70'
actionsTable[272] = 71; // 'state 17' -> CHARACTER -> shift -> 'action 71'
actionsTable[274] = 72; // 'state 17' -> PAREN_OPEN -> shift -> 'action 72'
actionsTable[282] = 73; // 'state 17' -> Group -> shift -> 'action 73'
actionsTable[273] = 74; // 'state 17' -> UNION -> reduce -> 'action 74'
actionsTable[275] = 75; // 'state 17' -> PAREN_CLOSE -> reduce -> 'action 75'
actionsTable[277] = 76; // 'state 17' -> @par-gen.EOF -> reduce -> 'action 76'
actionsTable[256] = 77; // 'state 16' -> CHARACTER -> reduce -> 'action 77'
actionsTable[257] = 78; // 'state 16' -> UNION -> reduce -> 'action 78'
actionsTable[258] = 79; // 'state 16' -> PAREN_OPEN -> reduce -> 'action 79'
actionsTable[259] = 80; // 'state 16' -> PAREN_CLOSE -> reduce -> 'action 80'
actionsTable[261] = 81; // 'state 16' -> @par-gen.EOF -> reduce -> 'action 81'
actionsTable[288] = 82; // 'state 18' -> CHARACTER -> reduce -> 'action 82'
actionsTable[289] = 83; // 'state 18' -> UNION -> reduce -> 'action 83'
actionsTable[290] = 84; // 'state 18' -> PAREN_OPEN -> reduce -> 'action 84'
actionsTable[291] = 85; // 'state 18' -> PAREN_CLOSE -> reduce -> 'action 85'
actionsTable[293] = 86; // 'state 18' -> @par-gen.EOF -> reduce -> 'action 86'
actionsTable[321] = 87; // 'state 20' -> UNION -> shift -> 'action 87'
actionsTable[323] = 88; // 'state 20' -> PAREN_CLOSE -> shift -> 'action 88'
actionsTable[304] = 89; // 'state 19' -> CHARACTER -> reduce -> 'action 89'
actionsTable[305] = 90; // 'state 19' -> UNION -> reduce -> 'action 90'
actionsTable[306] = 91; // 'state 19' -> PAREN_OPEN -> reduce -> 'action 91'
actionsTable[307] = 92; // 'state 19' -> PAREN_CLOSE -> reduce -> 'action 92'
actionsTable[309] = 93; // 'state 19' -> @par-gen.EOF -> reduce -> 'action 93'
actionsTable[340] = 94; // 'state 21' -> QUANTIFIER -> shift -> 'action 94'
actionsTable[336] = 95; // 'state 21' -> CHARACTER -> reduce -> 'action 95'
actionsTable[337] = 96; // 'state 21' -> UNION -> reduce -> 'action 96'
actionsTable[338] = 97; // 'state 21' -> PAREN_OPEN -> reduce -> 'action 97'
actionsTable[339] = 98; // 'state 21' -> PAREN_CLOSE -> reduce -> 'action 98'
actionsTable[341] = 99; // 'state 21' -> @par-gen.EOF -> reduce -> 'action 99'
actionsTable[352] = 100; // 'state 22' -> CHARACTER -> reduce -> 'action 100'
actionsTable[353] = 101; // 'state 22' -> UNION -> reduce -> 'action 101'
actionsTable[354] = 102; // 'state 22' -> PAREN_OPEN -> reduce -> 'action 102'
actionsTable[355] = 103; // 'state 22' -> PAREN_CLOSE -> reduce -> 'action 103'
actionsTable[357] = 104; // 'state 22' -> @par-gen.EOF -> reduce -> 'action 104'
actionsTable[372] = 105; // 'state 23' -> QUANTIFIER -> shift -> 'action 105'
actionsTable[368] = 106; // 'state 23' -> CHARACTER -> reduce -> 'action 106'
actionsTable[369] = 107; // 'state 23' -> UNION -> reduce -> 'action 107'
actionsTable[370] = 108; // 'state 23' -> PAREN_OPEN -> reduce -> 'action 108'
actionsTable[371] = 109; // 'state 23' -> PAREN_CLOSE -> reduce -> 'action 109'
actionsTable[373] = 110; // 'state 23' -> @par-gen.EOF -> reduce -> 'action 110'
actionsTable[384] = 111; // 'state 24' -> CHARACTER -> reduce -> 'action 111'
actionsTable[385] = 112; // 'state 24' -> UNION -> reduce -> 'action 112'
actionsTable[386] = 113; // 'state 24' -> PAREN_OPEN -> reduce -> 'action 113'
actionsTable[387] = 114; // 'state 24' -> PAREN_CLOSE -> reduce -> 'action 114'
actionsTable[389] = 115; // 'state 24' -> @par-gen.EOF -> reduce -> 'action 115'
actionsTable[400] = 116; // 'state 25' -> CHARACTER -> reduce -> 'action 116'
actionsTable[401] = 117; // 'state 25' -> UNION -> reduce -> 'action 117'
actionsTable[402] = 118; // 'state 25' -> PAREN_OPEN -> reduce -> 'action 118'
actionsTable[403] = 119; // 'state 25' -> PAREN_CLOSE -> reduce -> 'action 119'
actionsTable[405] = 120; // 'state 25' -> @par-gen.EOF -> reduce -> 'action 120'

const gotoTable = new Uint16Array(416).fill(0xffff);
gotoTable[8] = 3; // 'state 3'
gotoTable[9] = 4; // 'state 4'
gotoTable[11] = 6; // 'state 6'
gotoTable[10] = 5; // 'state 5'
gotoTable[12] = 7; // 'state 7'
gotoTable[122] = 11; // 'state 11'
gotoTable[43] = 14; // 'state 14'
gotoTable[44] = 7; // 'state 7'
gotoTable[42] = 13; // 'state 13'
gotoTable[140] = 17; // 'state 17'
gotoTable[138] = 16; // 'state 16'
gotoTable[171] = 20; // 'state 20'
gotoTable[172] = 7; // 'state 7'
gotoTable[170] = 19; // 'state 19'
gotoTable[282] = 11; // 'state 11'

const nextTokens = {
  initial: nextTokenInitial,
};

const lexer = {
  _stack: [],
  push(name) {
    nextToken = nextTokens[name];
    lexer._stack.push(nextToken);
  },
  pop(done) {
    lexer._stack.pop();
    if (done) {
      return;
    } else if (lexer._stack.length === 0) {
      throw new Error("Cannot remove more lexer states than have been pushed.");
    }
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
const stack = new Uint16Array(32768);

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
const tree = new Uint16Array(32768);

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

    const actionLookup = actionsTable[currentState * 16 + lookahead];
    if (actionLookup === 0xffff) {
      const context = input.toString().substr(result.start, 10);
      throw new Error(
        `Unexpected lookahead ${parserSymbols[lookahead]} at '${context}'`
      );
    }
    const action = actions[actionLookup];

    switch (action.op) {
      case 2: // done
        lexer.pop(true);
        return createProxy(tree, tp - 6);
      case 0: // shift
        tree[tp] = lookahead; // name
        tree[tp + 1] = result.start;
        tree[tp + 2] = result.end;
        tree[tp + 3] = 0; // leaf nodes have no children
        tree[tp + 4] = 0; // leaf nodes have first child
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
            lookahead * 26 * 16 + currentState * 16 + action.symbol
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

        const nextState = gotoTable[stack[sp] * 16 + action.symbol];
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
