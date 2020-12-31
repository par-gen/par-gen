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
Sequence := Atom;
Sequence := Sequence Atom;
Atom := CHARACTER;
Atom := CHARACTER QUANTIFIER;
Atom := Group;
Atom := Group QUANTIFIER;
      */

const reducerStates = new Uint8Array(7424);
reducerStates[29] = 1; // 'state 1' -> Atom -> CHARACTER
reducerStates[493] = 1; // 'state 1' -> Atom -> UNION
reducerStates[957] = 1; // 'state 1' -> Atom -> PAREN_OPEN
reducerStates[1421] = 1; // 'state 1' -> Atom -> PAREN_CLOSE
reducerStates[2349] = 1; // 'state 1' -> Atom -> @par-gen.EOF
reducerStates[2375] = 1; // 'state 3' -> S -> @par-gen.EOF
reducerStates[2392] = 1; // 'state 4' -> RegExp -> @par-gen.EOF
reducerStates[2409] = 1; // 'state 5' -> Expression -> @par-gen.EOF
reducerStates[93] = 1; // 'state 5' -> Atom -> CHARACTER
reducerStates[557] = 1; // 'state 5' -> Atom -> UNION
reducerStates[1021] = 1; // 'state 5' -> Atom -> PAREN_OPEN
reducerStates[1485] = 1; // 'state 5' -> Atom -> PAREN_CLOSE
reducerStates[2413] = 1; // 'state 5' -> Atom -> @par-gen.EOF
reducerStates[2425] = 1; // 'state 6' -> Expression -> @par-gen.EOF
reducerStates[587] = 1; // 'state 7' -> Union -> UNION
reducerStates[1515] = 1; // 'state 7' -> Union -> PAREN_CLOSE
reducerStates[2443] = 1; // 'state 7' -> Union -> @par-gen.EOF
reducerStates[140] = 1; // 'state 8' -> Sequence -> CHARACTER
reducerStates[604] = 1; // 'state 8' -> Sequence -> UNION
reducerStates[1068] = 1; // 'state 8' -> Sequence -> PAREN_OPEN
reducerStates[1532] = 1; // 'state 8' -> Sequence -> PAREN_CLOSE
reducerStates[2460] = 1; // 'state 8' -> Sequence -> @par-gen.EOF
reducerStates[173] = 2; // 'state 10' -> Atom -> CHARACTER
reducerStates[637] = 2; // 'state 10' -> Atom -> UNION
reducerStates[1101] = 2; // 'state 10' -> Atom -> PAREN_OPEN
reducerStates[1565] = 2; // 'state 10' -> Atom -> PAREN_CLOSE
reducerStates[2493] = 2; // 'state 10' -> Atom -> @par-gen.EOF
reducerStates[189] = 1; // 'state 11' -> Atom -> CHARACTER
reducerStates[653] = 1; // 'state 11' -> Atom -> UNION
reducerStates[1117] = 1; // 'state 11' -> Atom -> PAREN_OPEN
reducerStates[1581] = 1; // 'state 11' -> Atom -> PAREN_CLOSE
reducerStates[2509] = 1; // 'state 11' -> Atom -> @par-gen.EOF
reducerStates[221] = 1; // 'state 13' -> Atom -> CHARACTER
reducerStates[685] = 1; // 'state 13' -> Atom -> UNION
reducerStates[1149] = 1; // 'state 13' -> Atom -> PAREN_OPEN
reducerStates[1613] = 1; // 'state 13' -> Atom -> PAREN_CLOSE
reducerStates[2541] = 1; // 'state 13' -> Atom -> @par-gen.EOF
reducerStates[236] = 2; // 'state 14' -> Sequence -> CHARACTER
reducerStates[700] = 2; // 'state 14' -> Sequence -> UNION
reducerStates[1164] = 2; // 'state 14' -> Sequence -> PAREN_OPEN
reducerStates[1628] = 2; // 'state 14' -> Sequence -> PAREN_CLOSE
reducerStates[2556] = 2; // 'state 14' -> Sequence -> @par-gen.EOF
reducerStates[253] = 1; // 'state 15' -> Atom -> CHARACTER
reducerStates[717] = 1; // 'state 15' -> Atom -> UNION
reducerStates[1181] = 1; // 'state 15' -> Atom -> PAREN_OPEN
reducerStates[1645] = 1; // 'state 15' -> Atom -> PAREN_CLOSE
reducerStates[2573] = 1; // 'state 15' -> Atom -> @par-gen.EOF
reducerStates[269] = 1; // 'state 16' -> Atom -> CHARACTER
reducerStates[733] = 1; // 'state 16' -> Atom -> UNION
reducerStates[1197] = 1; // 'state 16' -> Atom -> PAREN_OPEN
reducerStates[1661] = 1; // 'state 16' -> Atom -> PAREN_CLOSE
reducerStates[2589] = 1; // 'state 16' -> Atom -> @par-gen.EOF
reducerStates[300] = 1; // 'state 18' -> Sequence -> CHARACTER
reducerStates[764] = 1; // 'state 18' -> Sequence -> UNION
reducerStates[1228] = 1; // 'state 18' -> Sequence -> PAREN_OPEN
reducerStates[1692] = 1; // 'state 18' -> Sequence -> PAREN_CLOSE
reducerStates[2620] = 1; // 'state 18' -> Sequence -> @par-gen.EOF
reducerStates[317] = 2; // 'state 19' -> Atom -> CHARACTER
reducerStates[781] = 2; // 'state 19' -> Atom -> UNION
reducerStates[1245] = 2; // 'state 19' -> Atom -> PAREN_OPEN
reducerStates[1709] = 2; // 'state 19' -> Atom -> PAREN_CLOSE
reducerStates[2637] = 2; // 'state 19' -> Atom -> @par-gen.EOF
reducerStates[333] = 1; // 'state 20' -> Atom -> CHARACTER
reducerStates[797] = 1; // 'state 20' -> Atom -> UNION
reducerStates[1261] = 1; // 'state 20' -> Atom -> PAREN_OPEN
reducerStates[1725] = 1; // 'state 20' -> Atom -> PAREN_CLOSE
reducerStates[2653] = 1; // 'state 20' -> Atom -> @par-gen.EOF
reducerStates[811] = 3; // 'state 21' -> Union -> UNION
reducerStates[1739] = 3; // 'state 21' -> Union -> PAREN_CLOSE
reducerStates[2667] = 3; // 'state 21' -> Union -> @par-gen.EOF
reducerStates[365] = 2; // 'state 22' -> Atom -> CHARACTER
reducerStates[829] = 2; // 'state 22' -> Atom -> UNION
reducerStates[1293] = 2; // 'state 22' -> Atom -> PAREN_OPEN
reducerStates[1757] = 2; // 'state 22' -> Atom -> PAREN_CLOSE
reducerStates[2685] = 2; // 'state 22' -> Atom -> @par-gen.EOF
reducerStates[394] = 3; // 'state 24' -> Group -> CHARACTER
reducerStates[858] = 3; // 'state 24' -> Group -> UNION
reducerStates[1322] = 3; // 'state 24' -> Group -> PAREN_OPEN
reducerStates[1786] = 3; // 'state 24' -> Group -> PAREN_CLOSE
reducerStates[2250] = 3; // 'state 24' -> Group -> QUANTIFIER
reducerStates[2714] = 3; // 'state 24' -> Group -> @par-gen.EOF
reducerStates[413] = 2; // 'state 25' -> Atom -> CHARACTER
reducerStates[877] = 2; // 'state 25' -> Atom -> UNION
reducerStates[1341] = 2; // 'state 25' -> Atom -> PAREN_OPEN
reducerStates[1805] = 2; // 'state 25' -> Atom -> PAREN_CLOSE
reducerStates[2733] = 2; // 'state 25' -> Atom -> @par-gen.EOF
reducerStates[426] = 3; // 'state 26' -> Group -> CHARACTER
reducerStates[890] = 3; // 'state 26' -> Group -> UNION
reducerStates[1354] = 3; // 'state 26' -> Group -> PAREN_OPEN
reducerStates[1818] = 3; // 'state 26' -> Group -> PAREN_CLOSE
reducerStates[2282] = 3; // 'state 26' -> Group -> QUANTIFIER
reducerStates[2746] = 3; // 'state 26' -> Group -> @par-gen.EOF
reducerStates[442] = 4; // 'state 27' -> Group -> CHARACTER
reducerStates[906] = 4; // 'state 27' -> Group -> UNION
reducerStates[1370] = 4; // 'state 27' -> Group -> PAREN_OPEN
reducerStates[1834] = 4; // 'state 27' -> Group -> PAREN_CLOSE
reducerStates[2298] = 4; // 'state 27' -> Group -> QUANTIFIER
reducerStates[2762] = 4; // 'state 27' -> Group -> @par-gen.EOF
reducerStates[458] = 4; // 'state 28' -> Group -> CHARACTER
reducerStates[922] = 4; // 'state 28' -> Group -> UNION
reducerStates[1386] = 4; // 'state 28' -> Group -> PAREN_OPEN
reducerStates[1850] = 4; // 'state 28' -> Group -> PAREN_CLOSE
reducerStates[2314] = 4; // 'state 28' -> Group -> QUANTIFIER
reducerStates[2778] = 4; // 'state 28' -> Group -> @par-gen.EOF

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
  "Atom", // 13
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
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
  },
  // 'action 8'
  {
    op: 2, // done
    state: undefined,
    symbol: undefined,
  },
  // 'action 9'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 8, // RegExp
  },
  // 'action 10'
  {
    op: 0, // shift
    state: 9, // 'state 9'
    symbol: undefined,
  },
  // 'action 11'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 9, // Expression
  },
  // 'action 12'
  {
    op: 0, // shift
    state: 10, // 'state 10'
    symbol: undefined,
  },
  // 'action 13'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 14'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 15'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 16'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 17'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 18'
  {
    op: 0, // shift
    state: 11, // 'state 11'
    symbol: undefined,
  },
  // 'action 19'
  {
    op: 0, // shift
    state: 12, // 'state 12'
    symbol: undefined,
  },
  // 'action 20'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 21'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 22'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 11, // Union
  },
  // 'action 23'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 11, // Union
  },
  // 'action 24'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 11, // Union
  },
  // 'action 25'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 26'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 27'
  {
    op: 0, // shift
    state: 16, // 'state 16'
    symbol: undefined,
  },
  // 'action 28'
  {
    op: 0, // shift
    state: 17, // 'state 17'
    symbol: undefined,
  },
  // 'action 29'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 30'
  {
    op: 0, // shift
    state: 18, // 'state 18'
    symbol: undefined,
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
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Sequence
  },
  // 'action 34'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Sequence
  },
  // 'action 35'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Sequence
  },
  // 'action 36'
  {
    op: 0, // shift
    state: 19, // 'state 19'
    symbol: undefined,
  },
  // 'action 37'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 38'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 39'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 40'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 41'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 42'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 43'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 44'
  {
    op: 0, // shift
    state: 20, // 'state 20'
    symbol: undefined,
  },
  // 'action 45'
  {
    op: 0, // shift
    state: 21, // 'state 21'
    symbol: undefined,
  },
  // 'action 46'
  {
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
  },
  // 'action 47'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 48'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 49'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 50'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 51'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 52'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Sequence
  },
  // 'action 53'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Sequence
  },
  // 'action 54'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Sequence
  },
  // 'action 55'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Sequence
  },
  // 'action 56'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Sequence
  },
  // 'action 57'
  {
    op: 0, // shift
    state: 22, // 'state 22'
    symbol: undefined,
  },
  // 'action 58'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 59'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 60'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 61'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 62'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 63'
  {
    op: 0, // shift
    state: 10, // 'state 10'
    symbol: undefined,
  },
  // 'action 64'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 65'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 66'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 67'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 68'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 69'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 70'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 71'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 72'
  {
    op: 0, // shift
    state: 23, // 'state 23'
    symbol: undefined,
  },
  // 'action 73'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 74'
  {
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
  },
  // 'action 75'
  {
    op: 0, // shift
    state: 9, // 'state 9'
    symbol: undefined,
  },
  // 'action 76'
  {
    op: 0, // shift
    state: 24, // 'state 24'
    symbol: undefined,
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
    op: 0, // shift
    state: 25, // 'state 25'
    symbol: undefined,
  },
  // 'action 83'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 84'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 85'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 86'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 87'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 88'
  {
    op: 0, // shift
    state: 10, // 'state 10'
    symbol: undefined,
  },
  // 'action 89'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 90'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 91'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 92'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 93'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 94'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 95'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 96'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 97'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 98'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 99'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 100'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 101'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 102'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 103'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 11, // Union
  },
  // 'action 104'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 11, // Union
  },
  // 'action 105'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 11, // Union
  },
  // 'action 106'
  {
    op: 0, // shift
    state: 10, // 'state 10'
    symbol: undefined,
  },
  // 'action 107'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 108'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 109'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 110'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 111'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 112'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 113'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 114'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 115'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 116'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 117'
  {
    op: 0, // shift
    state: 9, // 'state 9'
    symbol: undefined,
  },
  // 'action 118'
  {
    op: 0, // shift
    state: 26, // 'state 26'
    symbol: undefined,
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
  // 'action 121'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 122'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 123'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 124'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 125'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 126'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 127'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 128'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 129'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 130'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 131'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 132'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 133'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 134'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 135'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 136'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 137'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 138'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 139'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 140'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 141'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 142'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 143'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 144'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 145'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 146'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 147'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
];
const actionsTable = new Uint16Array(464).fill(0xffff);
actionsTable[0] = 0; // 'state 0' -> CHARACTER -> shift -> 'action 0'
actionsTable[2] = 1; // 'state 0' -> PAREN_OPEN -> shift -> 'action 1'
actionsTable[8] = 2; // 'state 0' -> RegExp -> shift -> 'action 2'
actionsTable[9] = 3; // 'state 0' -> Expression -> shift -> 'action 3'
actionsTable[10] = 4; // 'state 0' -> Group -> shift -> 'action 4'
actionsTable[11] = 5; // 'state 0' -> Union -> shift -> 'action 5'
actionsTable[12] = 6; // 'state 0' -> Sequence -> shift -> 'action 6'
actionsTable[13] = 7; // 'state 0' -> Atom -> shift -> 'action 7'
actionsTable[53] = 8; // 'state 3' -> @par-gen.EOF -> done -> 'action 8'
actionsTable[69] = 9; // 'state 4' -> @par-gen.EOF -> reduce -> 'action 9'
actionsTable[97] = 10; // 'state 6' -> UNION -> shift -> 'action 10'
actionsTable[101] = 11; // 'state 6' -> @par-gen.EOF -> reduce -> 'action 11'
actionsTable[84] = 12; // 'state 5' -> QUANTIFIER -> shift -> 'action 12'
actionsTable[80] = 13; // 'state 5' -> CHARACTER -> reduce -> 'action 13'
actionsTable[81] = 14; // 'state 5' -> UNION -> reduce -> 'action 14'
actionsTable[82] = 15; // 'state 5' -> PAREN_OPEN -> reduce -> 'action 15'
actionsTable[83] = 16; // 'state 5' -> PAREN_CLOSE -> reduce -> 'action 16'
actionsTable[85] = 17; // 'state 5' -> @par-gen.EOF -> reduce -> 'action 17'
actionsTable[112] = 18; // 'state 7' -> CHARACTER -> shift -> 'action 18'
actionsTable[114] = 19; // 'state 7' -> PAREN_OPEN -> shift -> 'action 19'
actionsTable[122] = 20; // 'state 7' -> Group -> shift -> 'action 20'
actionsTable[125] = 21; // 'state 7' -> Atom -> shift -> 'action 21'
actionsTable[113] = 22; // 'state 7' -> UNION -> reduce -> 'action 22'
actionsTable[115] = 23; // 'state 7' -> PAREN_CLOSE -> reduce -> 'action 23'
actionsTable[117] = 24; // 'state 7' -> @par-gen.EOF -> reduce -> 'action 24'
actionsTable[32] = 25; // 'state 2' -> CHARACTER -> shift -> 'action 25'
actionsTable[34] = 26; // 'state 2' -> PAREN_OPEN -> shift -> 'action 26'
actionsTable[42] = 27; // 'state 2' -> Group -> shift -> 'action 27'
actionsTable[43] = 28; // 'state 2' -> Union -> shift -> 'action 28'
actionsTable[44] = 29; // 'state 2' -> Sequence -> shift -> 'action 29'
actionsTable[45] = 30; // 'state 2' -> Atom -> shift -> 'action 30'
actionsTable[128] = 31; // 'state 8' -> CHARACTER -> reduce -> 'action 31'
actionsTable[129] = 32; // 'state 8' -> UNION -> reduce -> 'action 32'
actionsTable[130] = 33; // 'state 8' -> PAREN_OPEN -> reduce -> 'action 33'
actionsTable[131] = 34; // 'state 8' -> PAREN_CLOSE -> reduce -> 'action 34'
actionsTable[133] = 35; // 'state 8' -> @par-gen.EOF -> reduce -> 'action 35'
actionsTable[20] = 36; // 'state 1' -> QUANTIFIER -> shift -> 'action 36'
actionsTable[16] = 37; // 'state 1' -> CHARACTER -> reduce -> 'action 37'
actionsTable[17] = 38; // 'state 1' -> UNION -> reduce -> 'action 38'
actionsTable[18] = 39; // 'state 1' -> PAREN_OPEN -> reduce -> 'action 39'
actionsTable[19] = 40; // 'state 1' -> PAREN_CLOSE -> reduce -> 'action 40'
actionsTable[21] = 41; // 'state 1' -> @par-gen.EOF -> reduce -> 'action 41'
actionsTable[144] = 42; // 'state 9' -> CHARACTER -> shift -> 'action 42'
actionsTable[146] = 43; // 'state 9' -> PAREN_OPEN -> shift -> 'action 43'
actionsTable[154] = 44; // 'state 9' -> Group -> shift -> 'action 44'
actionsTable[156] = 45; // 'state 9' -> Sequence -> shift -> 'action 45'
actionsTable[157] = 46; // 'state 9' -> Atom -> shift -> 'action 46'
actionsTable[160] = 47; // 'state 10' -> CHARACTER -> reduce -> 'action 47'
actionsTable[161] = 48; // 'state 10' -> UNION -> reduce -> 'action 48'
actionsTable[162] = 49; // 'state 10' -> PAREN_OPEN -> reduce -> 'action 49'
actionsTable[163] = 50; // 'state 10' -> PAREN_CLOSE -> reduce -> 'action 50'
actionsTable[165] = 51; // 'state 10' -> @par-gen.EOF -> reduce -> 'action 51'
actionsTable[224] = 52; // 'state 14' -> CHARACTER -> reduce -> 'action 52'
actionsTable[225] = 53; // 'state 14' -> UNION -> reduce -> 'action 53'
actionsTable[226] = 54; // 'state 14' -> PAREN_OPEN -> reduce -> 'action 54'
actionsTable[227] = 55; // 'state 14' -> PAREN_CLOSE -> reduce -> 'action 55'
actionsTable[229] = 56; // 'state 14' -> @par-gen.EOF -> reduce -> 'action 56'
actionsTable[180] = 57; // 'state 11' -> QUANTIFIER -> shift -> 'action 57'
actionsTable[176] = 58; // 'state 11' -> CHARACTER -> reduce -> 'action 58'
actionsTable[177] = 59; // 'state 11' -> UNION -> reduce -> 'action 59'
actionsTable[178] = 60; // 'state 11' -> PAREN_OPEN -> reduce -> 'action 60'
actionsTable[179] = 61; // 'state 11' -> PAREN_CLOSE -> reduce -> 'action 61'
actionsTable[181] = 62; // 'state 11' -> @par-gen.EOF -> reduce -> 'action 62'
actionsTable[212] = 63; // 'state 13' -> QUANTIFIER -> shift -> 'action 63'
actionsTable[208] = 64; // 'state 13' -> CHARACTER -> reduce -> 'action 64'
actionsTable[209] = 65; // 'state 13' -> UNION -> reduce -> 'action 65'
actionsTable[210] = 66; // 'state 13' -> PAREN_OPEN -> reduce -> 'action 66'
actionsTable[211] = 67; // 'state 13' -> PAREN_CLOSE -> reduce -> 'action 67'
actionsTable[213] = 68; // 'state 13' -> @par-gen.EOF -> reduce -> 'action 68'
actionsTable[192] = 69; // 'state 12' -> CHARACTER -> shift -> 'action 69'
actionsTable[194] = 70; // 'state 12' -> PAREN_OPEN -> shift -> 'action 70'
actionsTable[202] = 71; // 'state 12' -> Group -> shift -> 'action 71'
actionsTable[203] = 72; // 'state 12' -> Union -> shift -> 'action 72'
actionsTable[204] = 73; // 'state 12' -> Sequence -> shift -> 'action 73'
actionsTable[205] = 74; // 'state 12' -> Atom -> shift -> 'action 74'
actionsTable[273] = 75; // 'state 17' -> UNION -> shift -> 'action 75'
actionsTable[275] = 76; // 'state 17' -> PAREN_CLOSE -> shift -> 'action 76'
actionsTable[288] = 77; // 'state 18' -> CHARACTER -> reduce -> 'action 77'
actionsTable[289] = 78; // 'state 18' -> UNION -> reduce -> 'action 78'
actionsTable[290] = 79; // 'state 18' -> PAREN_OPEN -> reduce -> 'action 79'
actionsTable[291] = 80; // 'state 18' -> PAREN_CLOSE -> reduce -> 'action 80'
actionsTable[293] = 81; // 'state 18' -> @par-gen.EOF -> reduce -> 'action 81'
actionsTable[244] = 82; // 'state 15' -> QUANTIFIER -> shift -> 'action 82'
actionsTable[240] = 83; // 'state 15' -> CHARACTER -> reduce -> 'action 83'
actionsTable[241] = 84; // 'state 15' -> UNION -> reduce -> 'action 84'
actionsTable[242] = 85; // 'state 15' -> PAREN_OPEN -> reduce -> 'action 85'
actionsTable[243] = 86; // 'state 15' -> PAREN_CLOSE -> reduce -> 'action 86'
actionsTable[245] = 87; // 'state 15' -> @par-gen.EOF -> reduce -> 'action 87'
actionsTable[260] = 88; // 'state 16' -> QUANTIFIER -> shift -> 'action 88'
actionsTable[256] = 89; // 'state 16' -> CHARACTER -> reduce -> 'action 89'
actionsTable[257] = 90; // 'state 16' -> UNION -> reduce -> 'action 90'
actionsTable[258] = 91; // 'state 16' -> PAREN_OPEN -> reduce -> 'action 91'
actionsTable[259] = 92; // 'state 16' -> PAREN_CLOSE -> reduce -> 'action 92'
actionsTable[261] = 93; // 'state 16' -> @par-gen.EOF -> reduce -> 'action 93'
actionsTable[304] = 94; // 'state 19' -> CHARACTER -> reduce -> 'action 94'
actionsTable[305] = 95; // 'state 19' -> UNION -> reduce -> 'action 95'
actionsTable[306] = 96; // 'state 19' -> PAREN_OPEN -> reduce -> 'action 96'
actionsTable[307] = 97; // 'state 19' -> PAREN_CLOSE -> reduce -> 'action 97'
actionsTable[309] = 98; // 'state 19' -> @par-gen.EOF -> reduce -> 'action 98'
actionsTable[336] = 99; // 'state 21' -> CHARACTER -> shift -> 'action 99'
actionsTable[338] = 100; // 'state 21' -> PAREN_OPEN -> shift -> 'action 100'
actionsTable[346] = 101; // 'state 21' -> Group -> shift -> 'action 101'
actionsTable[349] = 102; // 'state 21' -> Atom -> shift -> 'action 102'
actionsTable[337] = 103; // 'state 21' -> UNION -> reduce -> 'action 103'
actionsTable[339] = 104; // 'state 21' -> PAREN_CLOSE -> reduce -> 'action 104'
actionsTable[341] = 105; // 'state 21' -> @par-gen.EOF -> reduce -> 'action 105'
actionsTable[324] = 106; // 'state 20' -> QUANTIFIER -> shift -> 'action 106'
actionsTable[320] = 107; // 'state 20' -> CHARACTER -> reduce -> 'action 107'
actionsTable[321] = 108; // 'state 20' -> UNION -> reduce -> 'action 108'
actionsTable[322] = 109; // 'state 20' -> PAREN_OPEN -> reduce -> 'action 109'
actionsTable[323] = 110; // 'state 20' -> PAREN_CLOSE -> reduce -> 'action 110'
actionsTable[325] = 111; // 'state 20' -> @par-gen.EOF -> reduce -> 'action 111'
actionsTable[352] = 112; // 'state 22' -> CHARACTER -> reduce -> 'action 112'
actionsTable[353] = 113; // 'state 22' -> UNION -> reduce -> 'action 113'
actionsTable[354] = 114; // 'state 22' -> PAREN_OPEN -> reduce -> 'action 114'
actionsTable[355] = 115; // 'state 22' -> PAREN_CLOSE -> reduce -> 'action 115'
actionsTable[357] = 116; // 'state 22' -> @par-gen.EOF -> reduce -> 'action 116'
actionsTable[369] = 117; // 'state 23' -> UNION -> shift -> 'action 117'
actionsTable[371] = 118; // 'state 23' -> PAREN_CLOSE -> shift -> 'action 118'
actionsTable[388] = 119; // 'state 24' -> QUANTIFIER -> reduce -> 'action 119'
actionsTable[384] = 120; // 'state 24' -> CHARACTER -> reduce -> 'action 120'
actionsTable[385] = 121; // 'state 24' -> UNION -> reduce -> 'action 121'
actionsTable[386] = 122; // 'state 24' -> PAREN_OPEN -> reduce -> 'action 122'
actionsTable[387] = 123; // 'state 24' -> PAREN_CLOSE -> reduce -> 'action 123'
actionsTable[389] = 124; // 'state 24' -> @par-gen.EOF -> reduce -> 'action 124'
actionsTable[400] = 125; // 'state 25' -> CHARACTER -> reduce -> 'action 125'
actionsTable[401] = 126; // 'state 25' -> UNION -> reduce -> 'action 126'
actionsTable[402] = 127; // 'state 25' -> PAREN_OPEN -> reduce -> 'action 127'
actionsTable[403] = 128; // 'state 25' -> PAREN_CLOSE -> reduce -> 'action 128'
actionsTable[405] = 129; // 'state 25' -> @par-gen.EOF -> reduce -> 'action 129'
actionsTable[420] = 130; // 'state 26' -> QUANTIFIER -> reduce -> 'action 130'
actionsTable[416] = 131; // 'state 26' -> CHARACTER -> reduce -> 'action 131'
actionsTable[417] = 132; // 'state 26' -> UNION -> reduce -> 'action 132'
actionsTable[418] = 133; // 'state 26' -> PAREN_OPEN -> reduce -> 'action 133'
actionsTable[419] = 134; // 'state 26' -> PAREN_CLOSE -> reduce -> 'action 134'
actionsTable[421] = 135; // 'state 26' -> @par-gen.EOF -> reduce -> 'action 135'
actionsTable[432] = 136; // 'state 27' -> CHARACTER -> reduce -> 'action 136'
actionsTable[433] = 137; // 'state 27' -> UNION -> reduce -> 'action 137'
actionsTable[434] = 138; // 'state 27' -> PAREN_OPEN -> reduce -> 'action 138'
actionsTable[435] = 139; // 'state 27' -> PAREN_CLOSE -> reduce -> 'action 139'
actionsTable[436] = 140; // 'state 27' -> QUANTIFIER -> reduce -> 'action 140'
actionsTable[437] = 141; // 'state 27' -> @par-gen.EOF -> reduce -> 'action 141'
actionsTable[448] = 142; // 'state 28' -> CHARACTER -> reduce -> 'action 142'
actionsTable[449] = 143; // 'state 28' -> UNION -> reduce -> 'action 143'
actionsTable[450] = 144; // 'state 28' -> PAREN_OPEN -> reduce -> 'action 144'
actionsTable[451] = 145; // 'state 28' -> PAREN_CLOSE -> reduce -> 'action 145'
actionsTable[452] = 146; // 'state 28' -> QUANTIFIER -> reduce -> 'action 146'
actionsTable[453] = 147; // 'state 28' -> @par-gen.EOF -> reduce -> 'action 147'

const gotoTable = new Uint16Array(464).fill(0xffff);
gotoTable[8] = 3; // 'state 3'
gotoTable[9] = 4; // 'state 4'
gotoTable[11] = 6; // 'state 6'
gotoTable[10] = 5; // 'state 5'
gotoTable[12] = 7; // 'state 7'
gotoTable[13] = 8; // 'state 8'
gotoTable[125] = 14; // 'state 14'
gotoTable[122] = 13; // 'state 13'
gotoTable[43] = 17; // 'state 17'
gotoTable[44] = 7; // 'state 7'
gotoTable[45] = 18; // 'state 18'
gotoTable[42] = 16; // 'state 16'
gotoTable[156] = 21; // 'state 21'
gotoTable[157] = 8; // 'state 8'
gotoTable[154] = 20; // 'state 20'
gotoTable[203] = 23; // 'state 23'
gotoTable[204] = 7; // 'state 7'
gotoTable[205] = 8; // 'state 8'
gotoTable[202] = 13; // 'state 13'
gotoTable[349] = 14; // 'state 14'
gotoTable[346] = 13; // 'state 13'

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
            lookahead * 29 * 16 + currentState * 16 + action.symbol
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
