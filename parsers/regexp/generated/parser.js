// @ts-nocheck

import { next as nextTokenInitial } from "./lexer-initial.js";

/*
      RegExp := Expression;
Expression := Union;
Expression := Group;
Expression := Sequence;
Group := PAREN_OPEN Union PAREN_CLOSE;
Group := PAREN_OPEN Union PAREN_CLOSE QUANTIFIER;
Group := PAREN_OPEN Sequence PAREN_CLOSE;
Group := PAREN_OPEN Sequence PAREN_CLOSE QUANTIFIER;
Union := Sequence UNION Sequence;
Union := Union UNION Sequence;
Sequence := Atom;
Sequence := Sequence Atom;
Atom := CHARACTER;
Atom := CHARACTER QUANTIFIER;
Atom := Group;
Atom := Group QUANTIFIER;
      */

const reducerStates = new Uint8Array(9728);
reducerStates[29] = 1; // 'state 1' -> Atom -> CHARACTER
reducerStates[637] = 1; // 'state 1' -> Atom -> UNION
reducerStates[1245] = 1; // 'state 1' -> Atom -> PAREN_OPEN
reducerStates[1853] = 1; // 'state 1' -> Atom -> PAREN_CLOSE
reducerStates[3069] = 1; // 'state 1' -> Atom -> @par-gen.EOF
reducerStates[3095] = 1; // 'state 3' -> S -> @par-gen.EOF
reducerStates[3112] = 1; // 'state 4' -> RegExp -> @par-gen.EOF
reducerStates[3129] = 1; // 'state 5' -> Expression -> @par-gen.EOF
reducerStates[93] = 1; // 'state 5' -> Atom -> CHARACTER
reducerStates[701] = 1; // 'state 5' -> Atom -> UNION
reducerStates[1309] = 1; // 'state 5' -> Atom -> PAREN_OPEN
reducerStates[1917] = 1; // 'state 5' -> Atom -> PAREN_CLOSE
reducerStates[3133] = 1; // 'state 5' -> Atom -> @par-gen.EOF
reducerStates[3145] = 1; // 'state 6' -> Expression -> @par-gen.EOF
reducerStates[3161] = 1; // 'state 7' -> Expression -> @par-gen.EOF
reducerStates[140] = 1; // 'state 8' -> Sequence -> CHARACTER
reducerStates[748] = 1; // 'state 8' -> Sequence -> UNION
reducerStates[1356] = 1; // 'state 8' -> Sequence -> PAREN_OPEN
reducerStates[1964] = 1; // 'state 8' -> Sequence -> PAREN_CLOSE
reducerStates[3180] = 1; // 'state 8' -> Sequence -> @par-gen.EOF
reducerStates[173] = 2; // 'state 10' -> Atom -> CHARACTER
reducerStates[781] = 2; // 'state 10' -> Atom -> UNION
reducerStates[1389] = 2; // 'state 10' -> Atom -> PAREN_OPEN
reducerStates[1997] = 2; // 'state 10' -> Atom -> PAREN_CLOSE
reducerStates[3213] = 2; // 'state 10' -> Atom -> @par-gen.EOF
reducerStates[189] = 1; // 'state 11' -> Atom -> CHARACTER
reducerStates[797] = 1; // 'state 11' -> Atom -> UNION
reducerStates[1405] = 1; // 'state 11' -> Atom -> PAREN_OPEN
reducerStates[2013] = 1; // 'state 11' -> Atom -> PAREN_CLOSE
reducerStates[3229] = 1; // 'state 11' -> Atom -> @par-gen.EOF
reducerStates[237] = 1; // 'state 14' -> Atom -> CHARACTER
reducerStates[845] = 1; // 'state 14' -> Atom -> UNION
reducerStates[1453] = 1; // 'state 14' -> Atom -> PAREN_OPEN
reducerStates[2061] = 1; // 'state 14' -> Atom -> PAREN_CLOSE
reducerStates[3277] = 1; // 'state 14' -> Atom -> @par-gen.EOF
reducerStates[252] = 2; // 'state 15' -> Sequence -> CHARACTER
reducerStates[860] = 2; // 'state 15' -> Sequence -> UNION
reducerStates[1468] = 2; // 'state 15' -> Sequence -> PAREN_OPEN
reducerStates[2076] = 2; // 'state 15' -> Sequence -> PAREN_CLOSE
reducerStates[3292] = 2; // 'state 15' -> Sequence -> @par-gen.EOF
reducerStates[269] = 1; // 'state 16' -> Atom -> CHARACTER
reducerStates[877] = 1; // 'state 16' -> Atom -> UNION
reducerStates[1485] = 1; // 'state 16' -> Atom -> PAREN_OPEN
reducerStates[2093] = 1; // 'state 16' -> Atom -> PAREN_CLOSE
reducerStates[3309] = 1; // 'state 16' -> Atom -> @par-gen.EOF
reducerStates[285] = 1; // 'state 17' -> Atom -> CHARACTER
reducerStates[893] = 1; // 'state 17' -> Atom -> UNION
reducerStates[1501] = 1; // 'state 17' -> Atom -> PAREN_OPEN
reducerStates[2109] = 1; // 'state 17' -> Atom -> PAREN_CLOSE
reducerStates[3325] = 1; // 'state 17' -> Atom -> @par-gen.EOF
reducerStates[332] = 1; // 'state 20' -> Sequence -> CHARACTER
reducerStates[940] = 1; // 'state 20' -> Sequence -> UNION
reducerStates[1548] = 1; // 'state 20' -> Sequence -> PAREN_OPEN
reducerStates[2156] = 1; // 'state 20' -> Sequence -> PAREN_CLOSE
reducerStates[3372] = 1; // 'state 20' -> Sequence -> @par-gen.EOF
reducerStates[349] = 2; // 'state 21' -> Atom -> CHARACTER
reducerStates[957] = 2; // 'state 21' -> Atom -> UNION
reducerStates[1565] = 2; // 'state 21' -> Atom -> PAREN_OPEN
reducerStates[2173] = 2; // 'state 21' -> Atom -> PAREN_CLOSE
reducerStates[3389] = 2; // 'state 21' -> Atom -> @par-gen.EOF
reducerStates[365] = 1; // 'state 22' -> Atom -> CHARACTER
reducerStates[973] = 1; // 'state 22' -> Atom -> UNION
reducerStates[1581] = 1; // 'state 22' -> Atom -> PAREN_OPEN
reducerStates[2189] = 1; // 'state 22' -> Atom -> PAREN_CLOSE
reducerStates[3405] = 1; // 'state 22' -> Atom -> @par-gen.EOF
reducerStates[987] = 3; // 'state 23' -> Union -> UNION
reducerStates[2203] = 3; // 'state 23' -> Union -> PAREN_CLOSE
reducerStates[3419] = 3; // 'state 23' -> Union -> @par-gen.EOF
reducerStates[397] = 1; // 'state 24' -> Atom -> CHARACTER
reducerStates[1005] = 1; // 'state 24' -> Atom -> UNION
reducerStates[1613] = 1; // 'state 24' -> Atom -> PAREN_OPEN
reducerStates[2221] = 1; // 'state 24' -> Atom -> PAREN_CLOSE
reducerStates[3437] = 1; // 'state 24' -> Atom -> @par-gen.EOF
reducerStates[1019] = 3; // 'state 25' -> Union -> UNION
reducerStates[2235] = 3; // 'state 25' -> Union -> PAREN_CLOSE
reducerStates[3451] = 3; // 'state 25' -> Union -> @par-gen.EOF
reducerStates[429] = 2; // 'state 26' -> Atom -> CHARACTER
reducerStates[1037] = 2; // 'state 26' -> Atom -> UNION
reducerStates[1645] = 2; // 'state 26' -> Atom -> PAREN_OPEN
reducerStates[2253] = 2; // 'state 26' -> Atom -> PAREN_CLOSE
reducerStates[3469] = 2; // 'state 26' -> Atom -> @par-gen.EOF
reducerStates[474] = 3; // 'state 29' -> Group -> CHARACTER
reducerStates[1082] = 3; // 'state 29' -> Group -> UNION
reducerStates[1690] = 3; // 'state 29' -> Group -> PAREN_OPEN
reducerStates[2298] = 3; // 'state 29' -> Group -> PAREN_CLOSE
reducerStates[2906] = 3; // 'state 29' -> Group -> QUANTIFIER
reducerStates[3514] = 3; // 'state 29' -> Group -> @par-gen.EOF
reducerStates[490] = 3; // 'state 30' -> Group -> CHARACTER
reducerStates[1098] = 3; // 'state 30' -> Group -> UNION
reducerStates[1706] = 3; // 'state 30' -> Group -> PAREN_OPEN
reducerStates[2314] = 3; // 'state 30' -> Group -> PAREN_CLOSE
reducerStates[2922] = 3; // 'state 30' -> Group -> QUANTIFIER
reducerStates[3530] = 3; // 'state 30' -> Group -> @par-gen.EOF
reducerStates[509] = 2; // 'state 31' -> Atom -> CHARACTER
reducerStates[1117] = 2; // 'state 31' -> Atom -> UNION
reducerStates[1725] = 2; // 'state 31' -> Atom -> PAREN_OPEN
reducerStates[2333] = 2; // 'state 31' -> Atom -> PAREN_CLOSE
reducerStates[3549] = 2; // 'state 31' -> Atom -> @par-gen.EOF
reducerStates[522] = 3; // 'state 32' -> Group -> CHARACTER
reducerStates[1130] = 3; // 'state 32' -> Group -> UNION
reducerStates[1738] = 3; // 'state 32' -> Group -> PAREN_OPEN
reducerStates[2346] = 3; // 'state 32' -> Group -> PAREN_CLOSE
reducerStates[2954] = 3; // 'state 32' -> Group -> QUANTIFIER
reducerStates[3562] = 3; // 'state 32' -> Group -> @par-gen.EOF
reducerStates[538] = 3; // 'state 33' -> Group -> CHARACTER
reducerStates[1146] = 3; // 'state 33' -> Group -> UNION
reducerStates[1754] = 3; // 'state 33' -> Group -> PAREN_OPEN
reducerStates[2362] = 3; // 'state 33' -> Group -> PAREN_CLOSE
reducerStates[2970] = 3; // 'state 33' -> Group -> QUANTIFIER
reducerStates[3578] = 3; // 'state 33' -> Group -> @par-gen.EOF
reducerStates[554] = 4; // 'state 34' -> Group -> CHARACTER
reducerStates[1162] = 4; // 'state 34' -> Group -> UNION
reducerStates[1770] = 4; // 'state 34' -> Group -> PAREN_OPEN
reducerStates[2378] = 4; // 'state 34' -> Group -> PAREN_CLOSE
reducerStates[2986] = 4; // 'state 34' -> Group -> QUANTIFIER
reducerStates[3594] = 4; // 'state 34' -> Group -> @par-gen.EOF
reducerStates[570] = 4; // 'state 35' -> Group -> CHARACTER
reducerStates[1178] = 4; // 'state 35' -> Group -> UNION
reducerStates[1786] = 4; // 'state 35' -> Group -> PAREN_OPEN
reducerStates[2394] = 4; // 'state 35' -> Group -> PAREN_CLOSE
reducerStates[3002] = 4; // 'state 35' -> Group -> QUANTIFIER
reducerStates[3610] = 4; // 'state 35' -> Group -> @par-gen.EOF
reducerStates[586] = 4; // 'state 36' -> Group -> CHARACTER
reducerStates[1194] = 4; // 'state 36' -> Group -> UNION
reducerStates[1802] = 4; // 'state 36' -> Group -> PAREN_OPEN
reducerStates[2410] = 4; // 'state 36' -> Group -> PAREN_CLOSE
reducerStates[3018] = 4; // 'state 36' -> Group -> QUANTIFIER
reducerStates[3626] = 4; // 'state 36' -> Group -> @par-gen.EOF
reducerStates[602] = 4; // 'state 37' -> Group -> CHARACTER
reducerStates[1210] = 4; // 'state 37' -> Group -> UNION
reducerStates[1818] = 4; // 'state 37' -> Group -> PAREN_OPEN
reducerStates[2426] = 4; // 'state 37' -> Group -> PAREN_CLOSE
reducerStates[3034] = 4; // 'state 37' -> Group -> QUANTIFIER
reducerStates[3642] = 4; // 'state 37' -> Group -> @par-gen.EOF

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
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 23'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 9, // Expression
  },
  // 'action 24'
  {
    op: 0, // shift
    state: 16, // 'state 16'
    symbol: undefined,
  },
  // 'action 25'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 26'
  {
    op: 0, // shift
    state: 17, // 'state 17'
    symbol: undefined,
  },
  // 'action 27'
  {
    op: 0, // shift
    state: 18, // 'state 18'
    symbol: undefined,
  },
  // 'action 28'
  {
    op: 0, // shift
    state: 19, // 'state 19'
    symbol: undefined,
  },
  // 'action 29'
  {
    op: 0, // shift
    state: 20, // 'state 20'
    symbol: undefined,
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
    op: 0, // shift
    state: 21, // 'state 21'
    symbol: undefined,
  },
  // 'action 36'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
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
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 42'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 43'
  {
    op: 0, // shift
    state: 22, // 'state 22'
    symbol: undefined,
  },
  // 'action 44'
  {
    op: 0, // shift
    state: 23, // 'state 23'
    symbol: undefined,
  },
  // 'action 45'
  {
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
  },
  // 'action 46'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
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
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 52'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 53'
  {
    op: 0, // shift
    state: 24, // 'state 24'
    symbol: undefined,
  },
  // 'action 54'
  {
    op: 0, // shift
    state: 25, // 'state 25'
    symbol: undefined,
  },
  // 'action 55'
  {
    op: 0, // shift
    state: 8, // 'state 8'
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
    op: 0, // shift
    state: 26, // 'state 26'
    symbol: undefined,
  },
  // 'action 62'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 63'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
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
    op: 0, // shift
    state: 10, // 'state 10'
    symbol: undefined,
  },
  // 'action 68'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 69'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 70'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 71'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 72'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 73'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 74'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 75'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 76'
  {
    op: 0, // shift
    state: 27, // 'state 27'
    symbol: undefined,
  },
  // 'action 77'
  {
    op: 0, // shift
    state: 28, // 'state 28'
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
    state: 9, // 'state 9'
    symbol: undefined,
  },
  // 'action 80'
  {
    op: 0, // shift
    state: 29, // 'state 29'
    symbol: undefined,
  },
  // 'action 81'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 82'
  {
    op: 0, // shift
    state: 12, // 'state 12'
    symbol: undefined,
  },
  // 'action 83'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 84'
  {
    op: 0, // shift
    state: 30, // 'state 30'
    symbol: undefined,
  },
  // 'action 85'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 86'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 87'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Sequence
  },
  // 'action 88'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Sequence
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
    op: 0, // shift
    state: 31, // 'state 31'
    symbol: undefined,
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
    op: 0, // shift
    state: 10, // 'state 10'
    symbol: undefined,
  },
  // 'action 99'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 100'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 101'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 102'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 103'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 104'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 105'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 106'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
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
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 110'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 111'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 112'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 113'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 11, // Union
  },
  // 'action 114'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 11, // Union
  },
  // 'action 115'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 11, // Union
  },
  // 'action 116'
  {
    op: 0, // shift
    state: 10, // 'state 10'
    symbol: undefined,
  },
  // 'action 117'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 118'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 119'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 120'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 121'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 122'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 123'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 124'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 125'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 126'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 11, // Union
  },
  // 'action 127'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 11, // Union
  },
  // 'action 128'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 11, // Union
  },
  // 'action 129'
  {
    op: 0, // shift
    state: 10, // 'state 10'
    symbol: undefined,
  },
  // 'action 130'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 131'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 132'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 133'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 134'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 135'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 136'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 137'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 138'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 139'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 140'
  {
    op: 0, // shift
    state: 9, // 'state 9'
    symbol: undefined,
  },
  // 'action 141'
  {
    op: 0, // shift
    state: 32, // 'state 32'
    symbol: undefined,
  },
  // 'action 142'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 143'
  {
    op: 0, // shift
    state: 12, // 'state 12'
    symbol: undefined,
  },
  // 'action 144'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 145'
  {
    op: 0, // shift
    state: 33, // 'state 33'
    symbol: undefined,
  },
  // 'action 146'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 147'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 148'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 149'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 150'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 151'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 152'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 153'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 154'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 155'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 156'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 157'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 158'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 159'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 160'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 161'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 162'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 163'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 164'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 165'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 166'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 167'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 168'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 169'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 170'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 171'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 172'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 173'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 174'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 175'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 176'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 177'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 178'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 179'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 180'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 181'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 182'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 183'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 184'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 185'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 186'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 187'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 188'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 189'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 190'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 191'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 192'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 193'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 194'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 195'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 196'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 197'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 198'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 199'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 200'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
];
const actionsTable = new Uint16Array(608).fill(0xffff);
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
actionsTable[113] = 19; // 'state 7' -> UNION -> shift -> 'action 19'
actionsTable[114] = 20; // 'state 7' -> PAREN_OPEN -> shift -> 'action 20'
actionsTable[122] = 21; // 'state 7' -> Group -> shift -> 'action 21'
actionsTable[125] = 22; // 'state 7' -> Atom -> shift -> 'action 22'
actionsTable[117] = 23; // 'state 7' -> @par-gen.EOF -> reduce -> 'action 23'
actionsTable[32] = 24; // 'state 2' -> CHARACTER -> shift -> 'action 24'
actionsTable[34] = 25; // 'state 2' -> PAREN_OPEN -> shift -> 'action 25'
actionsTable[42] = 26; // 'state 2' -> Group -> shift -> 'action 26'
actionsTable[43] = 27; // 'state 2' -> Union -> shift -> 'action 27'
actionsTable[44] = 28; // 'state 2' -> Sequence -> shift -> 'action 28'
actionsTable[45] = 29; // 'state 2' -> Atom -> shift -> 'action 29'
actionsTable[128] = 30; // 'state 8' -> CHARACTER -> reduce -> 'action 30'
actionsTable[129] = 31; // 'state 8' -> UNION -> reduce -> 'action 31'
actionsTable[130] = 32; // 'state 8' -> PAREN_OPEN -> reduce -> 'action 32'
actionsTable[131] = 33; // 'state 8' -> PAREN_CLOSE -> reduce -> 'action 33'
actionsTable[133] = 34; // 'state 8' -> @par-gen.EOF -> reduce -> 'action 34'
actionsTable[20] = 35; // 'state 1' -> QUANTIFIER -> shift -> 'action 35'
actionsTable[16] = 36; // 'state 1' -> CHARACTER -> reduce -> 'action 36'
actionsTable[17] = 37; // 'state 1' -> UNION -> reduce -> 'action 37'
actionsTable[18] = 38; // 'state 1' -> PAREN_OPEN -> reduce -> 'action 38'
actionsTable[19] = 39; // 'state 1' -> PAREN_CLOSE -> reduce -> 'action 39'
actionsTable[21] = 40; // 'state 1' -> @par-gen.EOF -> reduce -> 'action 40'
actionsTable[144] = 41; // 'state 9' -> CHARACTER -> shift -> 'action 41'
actionsTable[146] = 42; // 'state 9' -> PAREN_OPEN -> shift -> 'action 42'
actionsTable[154] = 43; // 'state 9' -> Group -> shift -> 'action 43'
actionsTable[156] = 44; // 'state 9' -> Sequence -> shift -> 'action 44'
actionsTable[157] = 45; // 'state 9' -> Atom -> shift -> 'action 45'
actionsTable[160] = 46; // 'state 10' -> CHARACTER -> reduce -> 'action 46'
actionsTable[161] = 47; // 'state 10' -> UNION -> reduce -> 'action 47'
actionsTable[162] = 48; // 'state 10' -> PAREN_OPEN -> reduce -> 'action 48'
actionsTable[163] = 49; // 'state 10' -> PAREN_CLOSE -> reduce -> 'action 49'
actionsTable[165] = 50; // 'state 10' -> @par-gen.EOF -> reduce -> 'action 50'
actionsTable[192] = 51; // 'state 12' -> CHARACTER -> shift -> 'action 51'
actionsTable[194] = 52; // 'state 12' -> PAREN_OPEN -> shift -> 'action 52'
actionsTable[202] = 53; // 'state 12' -> Group -> shift -> 'action 53'
actionsTable[204] = 54; // 'state 12' -> Sequence -> shift -> 'action 54'
actionsTable[205] = 55; // 'state 12' -> Atom -> shift -> 'action 55'
actionsTable[240] = 56; // 'state 15' -> CHARACTER -> reduce -> 'action 56'
actionsTable[241] = 57; // 'state 15' -> UNION -> reduce -> 'action 57'
actionsTable[242] = 58; // 'state 15' -> PAREN_OPEN -> reduce -> 'action 58'
actionsTable[243] = 59; // 'state 15' -> PAREN_CLOSE -> reduce -> 'action 59'
actionsTable[245] = 60; // 'state 15' -> @par-gen.EOF -> reduce -> 'action 60'
actionsTable[180] = 61; // 'state 11' -> QUANTIFIER -> shift -> 'action 61'
actionsTable[176] = 62; // 'state 11' -> CHARACTER -> reduce -> 'action 62'
actionsTable[177] = 63; // 'state 11' -> UNION -> reduce -> 'action 63'
actionsTable[178] = 64; // 'state 11' -> PAREN_OPEN -> reduce -> 'action 64'
actionsTable[179] = 65; // 'state 11' -> PAREN_CLOSE -> reduce -> 'action 65'
actionsTable[181] = 66; // 'state 11' -> @par-gen.EOF -> reduce -> 'action 66'
actionsTable[228] = 67; // 'state 14' -> QUANTIFIER -> shift -> 'action 67'
actionsTable[224] = 68; // 'state 14' -> CHARACTER -> reduce -> 'action 68'
actionsTable[225] = 69; // 'state 14' -> UNION -> reduce -> 'action 69'
actionsTable[226] = 70; // 'state 14' -> PAREN_OPEN -> reduce -> 'action 70'
actionsTable[227] = 71; // 'state 14' -> PAREN_CLOSE -> reduce -> 'action 71'
actionsTable[229] = 72; // 'state 14' -> @par-gen.EOF -> reduce -> 'action 72'
actionsTable[208] = 73; // 'state 13' -> CHARACTER -> shift -> 'action 73'
actionsTable[210] = 74; // 'state 13' -> PAREN_OPEN -> shift -> 'action 74'
actionsTable[218] = 75; // 'state 13' -> Group -> shift -> 'action 75'
actionsTable[219] = 76; // 'state 13' -> Union -> shift -> 'action 76'
actionsTable[220] = 77; // 'state 13' -> Sequence -> shift -> 'action 77'
actionsTable[221] = 78; // 'state 13' -> Atom -> shift -> 'action 78'
actionsTable[289] = 79; // 'state 18' -> UNION -> shift -> 'action 79'
actionsTable[291] = 80; // 'state 18' -> PAREN_CLOSE -> shift -> 'action 80'
actionsTable[304] = 81; // 'state 19' -> CHARACTER -> shift -> 'action 81'
actionsTable[305] = 82; // 'state 19' -> UNION -> shift -> 'action 82'
actionsTable[306] = 83; // 'state 19' -> PAREN_OPEN -> shift -> 'action 83'
actionsTable[307] = 84; // 'state 19' -> PAREN_CLOSE -> shift -> 'action 84'
actionsTable[314] = 85; // 'state 19' -> Group -> shift -> 'action 85'
actionsTable[317] = 86; // 'state 19' -> Atom -> shift -> 'action 86'
actionsTable[320] = 87; // 'state 20' -> CHARACTER -> reduce -> 'action 87'
actionsTable[321] = 88; // 'state 20' -> UNION -> reduce -> 'action 88'
actionsTable[322] = 89; // 'state 20' -> PAREN_OPEN -> reduce -> 'action 89'
actionsTable[323] = 90; // 'state 20' -> PAREN_CLOSE -> reduce -> 'action 90'
actionsTable[325] = 91; // 'state 20' -> @par-gen.EOF -> reduce -> 'action 91'
actionsTable[260] = 92; // 'state 16' -> QUANTIFIER -> shift -> 'action 92'
actionsTable[256] = 93; // 'state 16' -> CHARACTER -> reduce -> 'action 93'
actionsTable[257] = 94; // 'state 16' -> UNION -> reduce -> 'action 94'
actionsTable[258] = 95; // 'state 16' -> PAREN_OPEN -> reduce -> 'action 95'
actionsTable[259] = 96; // 'state 16' -> PAREN_CLOSE -> reduce -> 'action 96'
actionsTable[261] = 97; // 'state 16' -> @par-gen.EOF -> reduce -> 'action 97'
actionsTable[276] = 98; // 'state 17' -> QUANTIFIER -> shift -> 'action 98'
actionsTable[272] = 99; // 'state 17' -> CHARACTER -> reduce -> 'action 99'
actionsTable[273] = 100; // 'state 17' -> UNION -> reduce -> 'action 100'
actionsTable[274] = 101; // 'state 17' -> PAREN_OPEN -> reduce -> 'action 101'
actionsTable[275] = 102; // 'state 17' -> PAREN_CLOSE -> reduce -> 'action 102'
actionsTable[277] = 103; // 'state 17' -> @par-gen.EOF -> reduce -> 'action 103'
actionsTable[336] = 104; // 'state 21' -> CHARACTER -> reduce -> 'action 104'
actionsTable[337] = 105; // 'state 21' -> UNION -> reduce -> 'action 105'
actionsTable[338] = 106; // 'state 21' -> PAREN_OPEN -> reduce -> 'action 106'
actionsTable[339] = 107; // 'state 21' -> PAREN_CLOSE -> reduce -> 'action 107'
actionsTable[341] = 108; // 'state 21' -> @par-gen.EOF -> reduce -> 'action 108'
actionsTable[368] = 109; // 'state 23' -> CHARACTER -> shift -> 'action 109'
actionsTable[370] = 110; // 'state 23' -> PAREN_OPEN -> shift -> 'action 110'
actionsTable[378] = 111; // 'state 23' -> Group -> shift -> 'action 111'
actionsTable[381] = 112; // 'state 23' -> Atom -> shift -> 'action 112'
actionsTable[369] = 113; // 'state 23' -> UNION -> reduce -> 'action 113'
actionsTable[371] = 114; // 'state 23' -> PAREN_CLOSE -> reduce -> 'action 114'
actionsTable[373] = 115; // 'state 23' -> @par-gen.EOF -> reduce -> 'action 115'
actionsTable[356] = 116; // 'state 22' -> QUANTIFIER -> shift -> 'action 116'
actionsTable[352] = 117; // 'state 22' -> CHARACTER -> reduce -> 'action 117'
actionsTable[353] = 118; // 'state 22' -> UNION -> reduce -> 'action 118'
actionsTable[354] = 119; // 'state 22' -> PAREN_OPEN -> reduce -> 'action 119'
actionsTable[355] = 120; // 'state 22' -> PAREN_CLOSE -> reduce -> 'action 120'
actionsTable[357] = 121; // 'state 22' -> @par-gen.EOF -> reduce -> 'action 121'
actionsTable[400] = 122; // 'state 25' -> CHARACTER -> shift -> 'action 122'
actionsTable[402] = 123; // 'state 25' -> PAREN_OPEN -> shift -> 'action 123'
actionsTable[410] = 124; // 'state 25' -> Group -> shift -> 'action 124'
actionsTable[413] = 125; // 'state 25' -> Atom -> shift -> 'action 125'
actionsTable[401] = 126; // 'state 25' -> UNION -> reduce -> 'action 126'
actionsTable[403] = 127; // 'state 25' -> PAREN_CLOSE -> reduce -> 'action 127'
actionsTable[405] = 128; // 'state 25' -> @par-gen.EOF -> reduce -> 'action 128'
actionsTable[388] = 129; // 'state 24' -> QUANTIFIER -> shift -> 'action 129'
actionsTable[384] = 130; // 'state 24' -> CHARACTER -> reduce -> 'action 130'
actionsTable[385] = 131; // 'state 24' -> UNION -> reduce -> 'action 131'
actionsTable[386] = 132; // 'state 24' -> PAREN_OPEN -> reduce -> 'action 132'
actionsTable[387] = 133; // 'state 24' -> PAREN_CLOSE -> reduce -> 'action 133'
actionsTable[389] = 134; // 'state 24' -> @par-gen.EOF -> reduce -> 'action 134'
actionsTable[416] = 135; // 'state 26' -> CHARACTER -> reduce -> 'action 135'
actionsTable[417] = 136; // 'state 26' -> UNION -> reduce -> 'action 136'
actionsTable[418] = 137; // 'state 26' -> PAREN_OPEN -> reduce -> 'action 137'
actionsTable[419] = 138; // 'state 26' -> PAREN_CLOSE -> reduce -> 'action 138'
actionsTable[421] = 139; // 'state 26' -> @par-gen.EOF -> reduce -> 'action 139'
actionsTable[433] = 140; // 'state 27' -> UNION -> shift -> 'action 140'
actionsTable[435] = 141; // 'state 27' -> PAREN_CLOSE -> shift -> 'action 141'
actionsTable[448] = 142; // 'state 28' -> CHARACTER -> shift -> 'action 142'
actionsTable[449] = 143; // 'state 28' -> UNION -> shift -> 'action 143'
actionsTable[450] = 144; // 'state 28' -> PAREN_OPEN -> shift -> 'action 144'
actionsTable[451] = 145; // 'state 28' -> PAREN_CLOSE -> shift -> 'action 145'
actionsTable[458] = 146; // 'state 28' -> Group -> shift -> 'action 146'
actionsTable[461] = 147; // 'state 28' -> Atom -> shift -> 'action 147'
actionsTable[468] = 148; // 'state 29' -> QUANTIFIER -> reduce -> 'action 148'
actionsTable[464] = 149; // 'state 29' -> CHARACTER -> reduce -> 'action 149'
actionsTable[465] = 150; // 'state 29' -> UNION -> reduce -> 'action 150'
actionsTable[466] = 151; // 'state 29' -> PAREN_OPEN -> reduce -> 'action 151'
actionsTable[467] = 152; // 'state 29' -> PAREN_CLOSE -> reduce -> 'action 152'
actionsTable[469] = 153; // 'state 29' -> @par-gen.EOF -> reduce -> 'action 153'
actionsTable[484] = 154; // 'state 30' -> QUANTIFIER -> reduce -> 'action 154'
actionsTable[480] = 155; // 'state 30' -> CHARACTER -> reduce -> 'action 155'
actionsTable[481] = 156; // 'state 30' -> UNION -> reduce -> 'action 156'
actionsTable[482] = 157; // 'state 30' -> PAREN_OPEN -> reduce -> 'action 157'
actionsTable[483] = 158; // 'state 30' -> PAREN_CLOSE -> reduce -> 'action 158'
actionsTable[485] = 159; // 'state 30' -> @par-gen.EOF -> reduce -> 'action 159'
actionsTable[496] = 160; // 'state 31' -> CHARACTER -> reduce -> 'action 160'
actionsTable[497] = 161; // 'state 31' -> UNION -> reduce -> 'action 161'
actionsTable[498] = 162; // 'state 31' -> PAREN_OPEN -> reduce -> 'action 162'
actionsTable[499] = 163; // 'state 31' -> PAREN_CLOSE -> reduce -> 'action 163'
actionsTable[501] = 164; // 'state 31' -> @par-gen.EOF -> reduce -> 'action 164'
actionsTable[516] = 165; // 'state 32' -> QUANTIFIER -> reduce -> 'action 165'
actionsTable[512] = 166; // 'state 32' -> CHARACTER -> reduce -> 'action 166'
actionsTable[513] = 167; // 'state 32' -> UNION -> reduce -> 'action 167'
actionsTable[514] = 168; // 'state 32' -> PAREN_OPEN -> reduce -> 'action 168'
actionsTable[515] = 169; // 'state 32' -> PAREN_CLOSE -> reduce -> 'action 169'
actionsTable[517] = 170; // 'state 32' -> @par-gen.EOF -> reduce -> 'action 170'
actionsTable[532] = 171; // 'state 33' -> QUANTIFIER -> reduce -> 'action 171'
actionsTable[528] = 172; // 'state 33' -> CHARACTER -> reduce -> 'action 172'
actionsTable[529] = 173; // 'state 33' -> UNION -> reduce -> 'action 173'
actionsTable[530] = 174; // 'state 33' -> PAREN_OPEN -> reduce -> 'action 174'
actionsTable[531] = 175; // 'state 33' -> PAREN_CLOSE -> reduce -> 'action 175'
actionsTable[533] = 176; // 'state 33' -> @par-gen.EOF -> reduce -> 'action 176'
actionsTable[544] = 177; // 'state 34' -> CHARACTER -> reduce -> 'action 177'
actionsTable[545] = 178; // 'state 34' -> UNION -> reduce -> 'action 178'
actionsTable[546] = 179; // 'state 34' -> PAREN_OPEN -> reduce -> 'action 179'
actionsTable[547] = 180; // 'state 34' -> PAREN_CLOSE -> reduce -> 'action 180'
actionsTable[548] = 181; // 'state 34' -> QUANTIFIER -> reduce -> 'action 181'
actionsTable[549] = 182; // 'state 34' -> @par-gen.EOF -> reduce -> 'action 182'
actionsTable[560] = 183; // 'state 35' -> CHARACTER -> reduce -> 'action 183'
actionsTable[561] = 184; // 'state 35' -> UNION -> reduce -> 'action 184'
actionsTable[562] = 185; // 'state 35' -> PAREN_OPEN -> reduce -> 'action 185'
actionsTable[563] = 186; // 'state 35' -> PAREN_CLOSE -> reduce -> 'action 186'
actionsTable[564] = 187; // 'state 35' -> QUANTIFIER -> reduce -> 'action 187'
actionsTable[565] = 188; // 'state 35' -> @par-gen.EOF -> reduce -> 'action 188'
actionsTable[576] = 189; // 'state 36' -> CHARACTER -> reduce -> 'action 189'
actionsTable[577] = 190; // 'state 36' -> UNION -> reduce -> 'action 190'
actionsTable[578] = 191; // 'state 36' -> PAREN_OPEN -> reduce -> 'action 191'
actionsTable[579] = 192; // 'state 36' -> PAREN_CLOSE -> reduce -> 'action 192'
actionsTable[580] = 193; // 'state 36' -> QUANTIFIER -> reduce -> 'action 193'
actionsTable[581] = 194; // 'state 36' -> @par-gen.EOF -> reduce -> 'action 194'
actionsTable[592] = 195; // 'state 37' -> CHARACTER -> reduce -> 'action 195'
actionsTable[593] = 196; // 'state 37' -> UNION -> reduce -> 'action 196'
actionsTable[594] = 197; // 'state 37' -> PAREN_OPEN -> reduce -> 'action 197'
actionsTable[595] = 198; // 'state 37' -> PAREN_CLOSE -> reduce -> 'action 198'
actionsTable[596] = 199; // 'state 37' -> QUANTIFIER -> reduce -> 'action 199'
actionsTable[597] = 200; // 'state 37' -> @par-gen.EOF -> reduce -> 'action 200'

const gotoTable = new Uint16Array(608).fill(0xffff);
gotoTable[8] = 3; // 'state 3'
gotoTable[9] = 4; // 'state 4'
gotoTable[11] = 6; // 'state 6'
gotoTable[10] = 5; // 'state 5'
gotoTable[12] = 7; // 'state 7'
gotoTable[13] = 8; // 'state 8'
gotoTable[125] = 15; // 'state 15'
gotoTable[122] = 14; // 'state 14'
gotoTable[43] = 18; // 'state 18'
gotoTable[44] = 19; // 'state 19'
gotoTable[45] = 20; // 'state 20'
gotoTable[42] = 17; // 'state 17'
gotoTable[156] = 23; // 'state 23'
gotoTable[157] = 8; // 'state 8'
gotoTable[154] = 22; // 'state 22'
gotoTable[204] = 25; // 'state 25'
gotoTable[205] = 8; // 'state 8'
gotoTable[202] = 24; // 'state 24'
gotoTable[219] = 27; // 'state 27'
gotoTable[220] = 28; // 'state 28'
gotoTable[221] = 8; // 'state 8'
gotoTable[218] = 14; // 'state 14'
gotoTable[317] = 15; // 'state 15'
gotoTable[314] = 14; // 'state 14'
gotoTable[381] = 15; // 'state 15'
gotoTable[378] = 14; // 'state 14'
gotoTable[413] = 15; // 'state 15'
gotoTable[410] = 14; // 'state 14'
gotoTable[461] = 15; // 'state 15'
gotoTable[458] = 14; // 'state 14'

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
            lookahead * 38 * 16 + currentState * 16 + action.symbol
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
