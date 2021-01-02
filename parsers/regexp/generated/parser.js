// @ts-nocheck

import { next as nextTokenInitial } from "./lexer-initial.js";

/*
      RegExp := Expression;
Expression := Union;
Expression := Sequence;
Expression := Atom;
Union := Union UNION Sequence;
Union := Union UNION Atom;
Union := Sequence UNION Sequence;
Union := Sequence UNION Atom;
Union := Atom UNION Sequence;
Union := Atom UNION Atom;
Sequence := Atom Atom;
Sequence := Sequence Atom;
Atom := CHARACTER;
Atom := CHARACTER QUANTIFIER;
Atom := Group;
Atom := Group QUANTIFIER;
Group := PAREN_OPEN Union PAREN_CLOSE;
Group := PAREN_OPEN Sequence PAREN_CLOSE;
Group := PAREN_OPEN Atom PAREN_CLOSE;
      */

const reducerStates = new Uint8Array(12800);
reducerStates[28] = 1; // 'state 1' -> Atom -> CHARACTER
reducerStates[828] = 1; // 'state 1' -> Atom -> UNION
reducerStates[1628] = 1; // 'state 1' -> Atom -> PAREN_OPEN
reducerStates[2428] = 1; // 'state 1' -> Atom -> PAREN_CLOSE
reducerStates[4028] = 1; // 'state 1' -> Atom -> @par-gen.EOF
reducerStates[4055] = 1; // 'state 3' -> S -> @par-gen.EOF
reducerStates[4072] = 1; // 'state 4' -> RegExp -> @par-gen.EOF
reducerStates[4089] = 1; // 'state 5' -> Expression -> @par-gen.EOF
reducerStates[4105] = 1; // 'state 6' -> Expression -> @par-gen.EOF
reducerStates[4121] = 1; // 'state 7' -> Expression -> @par-gen.EOF
reducerStates[140] = 1; // 'state 8' -> Atom -> CHARACTER
reducerStates[940] = 1; // 'state 8' -> Atom -> UNION
reducerStates[1740] = 1; // 'state 8' -> Atom -> PAREN_OPEN
reducerStates[2540] = 1; // 'state 8' -> Atom -> PAREN_CLOSE
reducerStates[4140] = 1; // 'state 8' -> Atom -> @par-gen.EOF
reducerStates[172] = 1; // 'state 10' -> Atom -> CHARACTER
reducerStates[972] = 1; // 'state 10' -> Atom -> UNION
reducerStates[1772] = 1; // 'state 10' -> Atom -> PAREN_OPEN
reducerStates[2572] = 1; // 'state 10' -> Atom -> PAREN_CLOSE
reducerStates[4172] = 1; // 'state 10' -> Atom -> @par-gen.EOF
reducerStates[219] = 2; // 'state 13' -> Sequence -> CHARACTER
reducerStates[1019] = 2; // 'state 13' -> Sequence -> UNION
reducerStates[1819] = 2; // 'state 13' -> Sequence -> PAREN_OPEN
reducerStates[2619] = 2; // 'state 13' -> Sequence -> PAREN_CLOSE
reducerStates[4219] = 2; // 'state 13' -> Sequence -> @par-gen.EOF
reducerStates[236] = 1; // 'state 14' -> Atom -> CHARACTER
reducerStates[1036] = 1; // 'state 14' -> Atom -> UNION
reducerStates[1836] = 1; // 'state 14' -> Atom -> PAREN_OPEN
reducerStates[2636] = 1; // 'state 14' -> Atom -> PAREN_CLOSE
reducerStates[4236] = 1; // 'state 14' -> Atom -> @par-gen.EOF
reducerStates[252] = 1; // 'state 15' -> Atom -> CHARACTER
reducerStates[1052] = 1; // 'state 15' -> Atom -> UNION
reducerStates[1852] = 1; // 'state 15' -> Atom -> PAREN_OPEN
reducerStates[2652] = 1; // 'state 15' -> Atom -> PAREN_CLOSE
reducerStates[4252] = 1; // 'state 15' -> Atom -> @par-gen.EOF
reducerStates[299] = 2; // 'state 18' -> Sequence -> CHARACTER
reducerStates[1099] = 2; // 'state 18' -> Sequence -> UNION
reducerStates[1899] = 2; // 'state 18' -> Sequence -> PAREN_OPEN
reducerStates[2699] = 2; // 'state 18' -> Sequence -> PAREN_CLOSE
reducerStates[4299] = 2; // 'state 18' -> Sequence -> @par-gen.EOF
reducerStates[316] = 1; // 'state 19' -> Atom -> CHARACTER
reducerStates[1116] = 1; // 'state 19' -> Atom -> UNION
reducerStates[1916] = 1; // 'state 19' -> Atom -> PAREN_OPEN
reducerStates[2716] = 1; // 'state 19' -> Atom -> PAREN_CLOSE
reducerStates[4316] = 1; // 'state 19' -> Atom -> @par-gen.EOF
reducerStates[332] = 2; // 'state 20' -> Atom -> CHARACTER
reducerStates[1132] = 2; // 'state 20' -> Atom -> UNION
reducerStates[1932] = 2; // 'state 20' -> Atom -> PAREN_OPEN
reducerStates[2732] = 2; // 'state 20' -> Atom -> PAREN_CLOSE
reducerStates[4332] = 2; // 'state 20' -> Atom -> @par-gen.EOF
reducerStates[348] = 2; // 'state 21' -> Atom -> CHARACTER
reducerStates[1148] = 2; // 'state 21' -> Atom -> UNION
reducerStates[1948] = 2; // 'state 21' -> Atom -> PAREN_OPEN
reducerStates[2748] = 2; // 'state 21' -> Atom -> PAREN_CLOSE
reducerStates[4348] = 2; // 'state 21' -> Atom -> @par-gen.EOF
reducerStates[1210] = 3; // 'state 25' -> Union -> UNION
reducerStates[2810] = 3; // 'state 25' -> Union -> PAREN_CLOSE
reducerStates[4410] = 3; // 'state 25' -> Union -> @par-gen.EOF
reducerStates[1226] = 3; // 'state 26' -> Union -> UNION
reducerStates[2826] = 3; // 'state 26' -> Union -> PAREN_CLOSE
reducerStates[4426] = 3; // 'state 26' -> Union -> @par-gen.EOF
reducerStates[1242] = 3; // 'state 27' -> Union -> UNION
reducerStates[2842] = 3; // 'state 27' -> Union -> PAREN_CLOSE
reducerStates[4442] = 3; // 'state 27' -> Union -> @par-gen.EOF
reducerStates[1258] = 3; // 'state 28' -> Union -> UNION
reducerStates[2858] = 3; // 'state 28' -> Union -> PAREN_CLOSE
reducerStates[4458] = 3; // 'state 28' -> Union -> @par-gen.EOF
reducerStates[476] = 2; // 'state 29' -> Atom -> CHARACTER
reducerStates[1276] = 2; // 'state 29' -> Atom -> UNION
reducerStates[2076] = 2; // 'state 29' -> Atom -> PAREN_OPEN
reducerStates[2876] = 2; // 'state 29' -> Atom -> PAREN_CLOSE
reducerStates[4476] = 2; // 'state 29' -> Atom -> @par-gen.EOF
reducerStates[492] = 2; // 'state 30' -> Atom -> CHARACTER
reducerStates[1292] = 2; // 'state 30' -> Atom -> UNION
reducerStates[2092] = 2; // 'state 30' -> Atom -> PAREN_OPEN
reducerStates[2892] = 2; // 'state 30' -> Atom -> PAREN_CLOSE
reducerStates[4492] = 2; // 'state 30' -> Atom -> @par-gen.EOF
reducerStates[1354] = 3; // 'state 34' -> Union -> UNION
reducerStates[2954] = 3; // 'state 34' -> Union -> PAREN_CLOSE
reducerStates[4554] = 3; // 'state 34' -> Union -> @par-gen.EOF
reducerStates[1370] = 3; // 'state 35' -> Union -> UNION
reducerStates[2970] = 3; // 'state 35' -> Union -> PAREN_CLOSE
reducerStates[4570] = 3; // 'state 35' -> Union -> @par-gen.EOF
reducerStates[588] = 2; // 'state 36' -> Atom -> CHARACTER
reducerStates[1388] = 2; // 'state 36' -> Atom -> UNION
reducerStates[2188] = 2; // 'state 36' -> Atom -> PAREN_OPEN
reducerStates[2988] = 2; // 'state 36' -> Atom -> PAREN_CLOSE
reducerStates[4588] = 2; // 'state 36' -> Atom -> @par-gen.EOF
reducerStates[604] = 2; // 'state 37' -> Atom -> CHARACTER
reducerStates[1404] = 2; // 'state 37' -> Atom -> UNION
reducerStates[2204] = 2; // 'state 37' -> Atom -> PAREN_OPEN
reducerStates[3004] = 2; // 'state 37' -> Atom -> PAREN_CLOSE
reducerStates[4604] = 2; // 'state 37' -> Atom -> @par-gen.EOF
reducerStates[669] = 3; // 'state 41' -> Group -> CHARACTER
reducerStates[1469] = 3; // 'state 41' -> Group -> UNION
reducerStates[2269] = 3; // 'state 41' -> Group -> PAREN_OPEN
reducerStates[3069] = 3; // 'state 41' -> Group -> PAREN_CLOSE
reducerStates[3869] = 3; // 'state 41' -> Group -> QUANTIFIER
reducerStates[4669] = 3; // 'state 41' -> Group -> @par-gen.EOF
reducerStates[685] = 3; // 'state 42' -> Group -> CHARACTER
reducerStates[1485] = 3; // 'state 42' -> Group -> UNION
reducerStates[2285] = 3; // 'state 42' -> Group -> PAREN_OPEN
reducerStates[3085] = 3; // 'state 42' -> Group -> PAREN_CLOSE
reducerStates[3885] = 3; // 'state 42' -> Group -> QUANTIFIER
reducerStates[4685] = 3; // 'state 42' -> Group -> @par-gen.EOF
reducerStates[701] = 3; // 'state 43' -> Group -> CHARACTER
reducerStates[1501] = 3; // 'state 43' -> Group -> UNION
reducerStates[2301] = 3; // 'state 43' -> Group -> PAREN_OPEN
reducerStates[3101] = 3; // 'state 43' -> Group -> PAREN_CLOSE
reducerStates[3901] = 3; // 'state 43' -> Group -> QUANTIFIER
reducerStates[4701] = 3; // 'state 43' -> Group -> @par-gen.EOF
reducerStates[717] = 3; // 'state 44' -> Group -> CHARACTER
reducerStates[1517] = 3; // 'state 44' -> Group -> UNION
reducerStates[2317] = 3; // 'state 44' -> Group -> PAREN_OPEN
reducerStates[3117] = 3; // 'state 44' -> Group -> PAREN_CLOSE
reducerStates[3917] = 3; // 'state 44' -> Group -> QUANTIFIER
reducerStates[4717] = 3; // 'state 44' -> Group -> @par-gen.EOF
reducerStates[733] = 3; // 'state 45' -> Group -> CHARACTER
reducerStates[1533] = 3; // 'state 45' -> Group -> UNION
reducerStates[2333] = 3; // 'state 45' -> Group -> PAREN_OPEN
reducerStates[3133] = 3; // 'state 45' -> Group -> PAREN_CLOSE
reducerStates[3933] = 3; // 'state 45' -> Group -> QUANTIFIER
reducerStates[4733] = 3; // 'state 45' -> Group -> @par-gen.EOF
reducerStates[749] = 3; // 'state 46' -> Group -> CHARACTER
reducerStates[1549] = 3; // 'state 46' -> Group -> UNION
reducerStates[2349] = 3; // 'state 46' -> Group -> PAREN_OPEN
reducerStates[3149] = 3; // 'state 46' -> Group -> PAREN_CLOSE
reducerStates[3949] = 3; // 'state 46' -> Group -> QUANTIFIER
reducerStates[4749] = 3; // 'state 46' -> Group -> @par-gen.EOF
reducerStates[765] = 3; // 'state 47' -> Group -> CHARACTER
reducerStates[1565] = 3; // 'state 47' -> Group -> UNION
reducerStates[2365] = 3; // 'state 47' -> Group -> PAREN_OPEN
reducerStates[3165] = 3; // 'state 47' -> Group -> PAREN_CLOSE
reducerStates[3965] = 3; // 'state 47' -> Group -> QUANTIFIER
reducerStates[4765] = 3; // 'state 47' -> Group -> @par-gen.EOF
reducerStates[781] = 3; // 'state 48' -> Group -> CHARACTER
reducerStates[1581] = 3; // 'state 48' -> Group -> UNION
reducerStates[2381] = 3; // 'state 48' -> Group -> PAREN_OPEN
reducerStates[3181] = 3; // 'state 48' -> Group -> PAREN_CLOSE
reducerStates[3981] = 3; // 'state 48' -> Group -> QUANTIFIER
reducerStates[4781] = 3; // 'state 48' -> Group -> @par-gen.EOF
reducerStates[797] = 3; // 'state 49' -> Group -> CHARACTER
reducerStates[1597] = 3; // 'state 49' -> Group -> UNION
reducerStates[2397] = 3; // 'state 49' -> Group -> PAREN_OPEN
reducerStates[3197] = 3; // 'state 49' -> Group -> PAREN_CLOSE
reducerStates[3997] = 3; // 'state 49' -> Group -> QUANTIFIER
reducerStates[4797] = 3; // 'state 49' -> Group -> @par-gen.EOF

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
  "Union", // 10
  "Sequence", // 11
  "Atom", // 12
  "Group", // 13
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
    op: 0, // shift
    state: 11, // 'state 11'
    symbol: undefined,
  },
  // 'action 14'
  {
    op: 0, // shift
    state: 12, // 'state 12'
    symbol: undefined,
  },
  // 'action 15'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 16'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 17'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 9, // Expression
  },
  // 'action 18'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 19'
  {
    op: 0, // shift
    state: 16, // 'state 16'
    symbol: undefined,
  },
  // 'action 20'
  {
    op: 0, // shift
    state: 17, // 'state 17'
    symbol: undefined,
  },
  // 'action 21'
  {
    op: 0, // shift
    state: 18, // 'state 18'
    symbol: undefined,
  },
  // 'action 22'
  {
    op: 0, // shift
    state: 19, // 'state 19'
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
    state: 20, // 'state 20'
    symbol: undefined,
  },
  // 'action 25'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Atom
  },
  // 'action 26'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Atom
  },
  // 'action 27'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Atom
  },
  // 'action 28'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Atom
  },
  // 'action 29'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Atom
  },
  // 'action 30'
  {
    op: 0, // shift
    state: 21, // 'state 21'
    symbol: undefined,
  },
  // 'action 31'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Atom
  },
  // 'action 32'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Atom
  },
  // 'action 33'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Atom
  },
  // 'action 34'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Atom
  },
  // 'action 35'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Atom
  },
  // 'action 36'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 37'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 38'
  {
    op: 0, // shift
    state: 22, // 'state 22'
    symbol: undefined,
  },
  // 'action 39'
  {
    op: 0, // shift
    state: 23, // 'state 23'
    symbol: undefined,
  },
  // 'action 40'
  {
    op: 0, // shift
    state: 24, // 'state 24'
    symbol: undefined,
  },
  // 'action 41'
  {
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
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
    state: 25, // 'state 25'
    symbol: undefined,
  },
  // 'action 45'
  {
    op: 0, // shift
    state: 26, // 'state 26'
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
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 48'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 49'
  {
    op: 0, // shift
    state: 27, // 'state 27'
    symbol: undefined,
  },
  // 'action 50'
  {
    op: 0, // shift
    state: 28, // 'state 28'
    symbol: undefined,
  },
  // 'action 51'
  {
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
  },
  // 'action 52'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 11, // Sequence
  },
  // 'action 53'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 11, // Sequence
  },
  // 'action 54'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 11, // Sequence
  },
  // 'action 55'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 11, // Sequence
  },
  // 'action 56'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 11, // Sequence
  },
  // 'action 57'
  {
    op: 0, // shift
    state: 29, // 'state 29'
    symbol: undefined,
  },
  // 'action 58'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Atom
  },
  // 'action 59'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Atom
  },
  // 'action 60'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Atom
  },
  // 'action 61'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Atom
  },
  // 'action 62'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Atom
  },
  // 'action 63'
  {
    op: 0, // shift
    state: 30, // 'state 30'
    symbol: undefined,
  },
  // 'action 64'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Atom
  },
  // 'action 65'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Atom
  },
  // 'action 66'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Atom
  },
  // 'action 67'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Atom
  },
  // 'action 68'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Atom
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
    state: 31, // 'state 31'
    symbol: undefined,
  },
  // 'action 72'
  {
    op: 0, // shift
    state: 32, // 'state 32'
    symbol: undefined,
  },
  // 'action 73'
  {
    op: 0, // shift
    state: 33, // 'state 33'
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
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 76'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 77'
  {
    op: 0, // shift
    state: 34, // 'state 34'
    symbol: undefined,
  },
  // 'action 78'
  {
    op: 0, // shift
    state: 35, // 'state 35'
    symbol: undefined,
  },
  // 'action 79'
  {
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
  },
  // 'action 80'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 11, // Sequence
  },
  // 'action 81'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 11, // Sequence
  },
  // 'action 82'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 11, // Sequence
  },
  // 'action 83'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 11, // Sequence
  },
  // 'action 84'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 11, // Sequence
  },
  // 'action 85'
  {
    op: 0, // shift
    state: 36, // 'state 36'
    symbol: undefined,
  },
  // 'action 86'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Atom
  },
  // 'action 87'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Atom
  },
  // 'action 88'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Atom
  },
  // 'action 89'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Atom
  },
  // 'action 90'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Atom
  },
  // 'action 91'
  {
    op: 0, // shift
    state: 37, // 'state 37'
    symbol: undefined,
  },
  // 'action 92'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Atom
  },
  // 'action 93'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Atom
  },
  // 'action 94'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Atom
  },
  // 'action 95'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Atom
  },
  // 'action 96'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Atom
  },
  // 'action 97'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 98'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 99'
  {
    op: 0, // shift
    state: 38, // 'state 38'
    symbol: undefined,
  },
  // 'action 100'
  {
    op: 0, // shift
    state: 39, // 'state 39'
    symbol: undefined,
  },
  // 'action 101'
  {
    op: 0, // shift
    state: 40, // 'state 40'
    symbol: undefined,
  },
  // 'action 102'
  {
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
  },
  // 'action 103'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Atom
  },
  // 'action 104'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Atom
  },
  // 'action 105'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Atom
  },
  // 'action 106'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Atom
  },
  // 'action 107'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Atom
  },
  // 'action 108'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Atom
  },
  // 'action 109'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Atom
  },
  // 'action 110'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Atom
  },
  // 'action 111'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Atom
  },
  // 'action 112'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Atom
  },
  // 'action 113'
  {
    op: 0, // shift
    state: 9, // 'state 9'
    symbol: undefined,
  },
  // 'action 114'
  {
    op: 0, // shift
    state: 41, // 'state 41'
    symbol: undefined,
  },
  // 'action 115'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 116'
  {
    op: 0, // shift
    state: 11, // 'state 11'
    symbol: undefined,
  },
  // 'action 117'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 118'
  {
    op: 0, // shift
    state: 42, // 'state 42'
    symbol: undefined,
  },
  // 'action 119'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 120'
  {
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
  },
  // 'action 121'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 122'
  {
    op: 0, // shift
    state: 16, // 'state 16'
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
    state: 43, // 'state 43'
    symbol: undefined,
  },
  // 'action 125'
  {
    op: 0, // shift
    state: 18, // 'state 18'
    symbol: undefined,
  },
  // 'action 126'
  {
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
  },
  // 'action 127'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 128'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 129'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 130'
  {
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
  },
  // 'action 131'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Union
  },
  // 'action 132'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Union
  },
  // 'action 133'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Union
  },
  // 'action 134'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 135'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 136'
  {
    op: 0, // shift
    state: 18, // 'state 18'
    symbol: undefined,
  },
  // 'action 137'
  {
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
  },
  // 'action 138'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Union
  },
  // 'action 139'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Union
  },
  // 'action 140'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Union
  },
  // 'action 141'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 142'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 143'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 144'
  {
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
  },
  // 'action 145'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Union
  },
  // 'action 146'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Union
  },
  // 'action 147'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Union
  },
  // 'action 148'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 149'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 150'
  {
    op: 0, // shift
    state: 18, // 'state 18'
    symbol: undefined,
  },
  // 'action 151'
  {
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
  },
  // 'action 152'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Union
  },
  // 'action 153'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Union
  },
  // 'action 154'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Union
  },
  // 'action 155'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Atom
  },
  // 'action 156'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Atom
  },
  // 'action 157'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Atom
  },
  // 'action 158'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Atom
  },
  // 'action 159'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Atom
  },
  // 'action 160'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Atom
  },
  // 'action 161'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Atom
  },
  // 'action 162'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Atom
  },
  // 'action 163'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Atom
  },
  // 'action 164'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Atom
  },
  // 'action 165'
  {
    op: 0, // shift
    state: 9, // 'state 9'
    symbol: undefined,
  },
  // 'action 166'
  {
    op: 0, // shift
    state: 44, // 'state 44'
    symbol: undefined,
  },
  // 'action 167'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 168'
  {
    op: 0, // shift
    state: 11, // 'state 11'
    symbol: undefined,
  },
  // 'action 169'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 170'
  {
    op: 0, // shift
    state: 45, // 'state 45'
    symbol: undefined,
  },
  // 'action 171'
  {
    op: 0, // shift
    state: 13, // 'state 13'
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
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 174'
  {
    op: 0, // shift
    state: 16, // 'state 16'
    symbol: undefined,
  },
  // 'action 175'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 176'
  {
    op: 0, // shift
    state: 46, // 'state 46'
    symbol: undefined,
  },
  // 'action 177'
  {
    op: 0, // shift
    state: 18, // 'state 18'
    symbol: undefined,
  },
  // 'action 178'
  {
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
  },
  // 'action 179'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 180'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 181'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 182'
  {
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
  },
  // 'action 183'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Union
  },
  // 'action 184'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Union
  },
  // 'action 185'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Union
  },
  // 'action 186'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 187'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 188'
  {
    op: 0, // shift
    state: 18, // 'state 18'
    symbol: undefined,
  },
  // 'action 189'
  {
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
  },
  // 'action 190'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Union
  },
  // 'action 191'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Union
  },
  // 'action 192'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Union
  },
  // 'action 193'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Atom
  },
  // 'action 194'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Atom
  },
  // 'action 195'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Atom
  },
  // 'action 196'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Atom
  },
  // 'action 197'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Atom
  },
  // 'action 198'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Atom
  },
  // 'action 199'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Atom
  },
  // 'action 200'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Atom
  },
  // 'action 201'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Atom
  },
  // 'action 202'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Atom
  },
  // 'action 203'
  {
    op: 0, // shift
    state: 9, // 'state 9'
    symbol: undefined,
  },
  // 'action 204'
  {
    op: 0, // shift
    state: 47, // 'state 47'
    symbol: undefined,
  },
  // 'action 205'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 206'
  {
    op: 0, // shift
    state: 11, // 'state 11'
    symbol: undefined,
  },
  // 'action 207'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 208'
  {
    op: 0, // shift
    state: 48, // 'state 48'
    symbol: undefined,
  },
  // 'action 209'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 210'
  {
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
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
    state: 16, // 'state 16'
    symbol: undefined,
  },
  // 'action 213'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 214'
  {
    op: 0, // shift
    state: 49, // 'state 49'
    symbol: undefined,
  },
  // 'action 215'
  {
    op: 0, // shift
    state: 18, // 'state 18'
    symbol: undefined,
  },
  // 'action 216'
  {
    op: 0, // shift
    state: 8, // 'state 8'
    symbol: undefined,
  },
  // 'action 217'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Group
  },
  // 'action 218'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Group
  },
  // 'action 219'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Group
  },
  // 'action 220'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Group
  },
  // 'action 221'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Group
  },
  // 'action 222'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Group
  },
  // 'action 223'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Group
  },
  // 'action 224'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Group
  },
  // 'action 225'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Group
  },
  // 'action 226'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Group
  },
  // 'action 227'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Group
  },
  // 'action 228'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Group
  },
  // 'action 229'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Group
  },
  // 'action 230'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Group
  },
  // 'action 231'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Group
  },
  // 'action 232'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Group
  },
  // 'action 233'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Group
  },
  // 'action 234'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Group
  },
  // 'action 235'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Group
  },
  // 'action 236'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Group
  },
  // 'action 237'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Group
  },
  // 'action 238'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Group
  },
  // 'action 239'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Group
  },
  // 'action 240'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Group
  },
  // 'action 241'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Group
  },
  // 'action 242'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Group
  },
  // 'action 243'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Group
  },
  // 'action 244'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Group
  },
  // 'action 245'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Group
  },
  // 'action 246'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Group
  },
  // 'action 247'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Group
  },
  // 'action 248'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Group
  },
  // 'action 249'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Group
  },
  // 'action 250'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Group
  },
  // 'action 251'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Group
  },
  // 'action 252'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Group
  },
  // 'action 253'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Group
  },
  // 'action 254'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Group
  },
  // 'action 255'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Group
  },
  // 'action 256'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Group
  },
  // 'action 257'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Group
  },
  // 'action 258'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Group
  },
  // 'action 259'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Group
  },
  // 'action 260'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Group
  },
  // 'action 261'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Group
  },
  // 'action 262'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Group
  },
  // 'action 263'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Group
  },
  // 'action 264'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Group
  },
  // 'action 265'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Group
  },
  // 'action 266'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Group
  },
  // 'action 267'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Group
  },
  // 'action 268'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Group
  },
  // 'action 269'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Group
  },
  // 'action 270'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Group
  },
];
const actionsTable = new Uint16Array(800).fill(0xffff);
actionsTable[0] = 0; // 'state 0' -> CHARACTER -> shift -> 'action 0'
actionsTable[2] = 1; // 'state 0' -> PAREN_OPEN -> shift -> 'action 1'
actionsTable[8] = 2; // 'state 0' -> RegExp -> shift -> 'action 2'
actionsTable[9] = 3; // 'state 0' -> Expression -> shift -> 'action 3'
actionsTable[10] = 4; // 'state 0' -> Union -> shift -> 'action 4'
actionsTable[11] = 5; // 'state 0' -> Sequence -> shift -> 'action 5'
actionsTable[12] = 6; // 'state 0' -> Atom -> shift -> 'action 6'
actionsTable[13] = 7; // 'state 0' -> Group -> shift -> 'action 7'
actionsTable[53] = 8; // 'state 3' -> @par-gen.EOF -> done -> 'action 8'
actionsTable[69] = 9; // 'state 4' -> @par-gen.EOF -> reduce -> 'action 9'
actionsTable[81] = 10; // 'state 5' -> UNION -> shift -> 'action 10'
actionsTable[85] = 11; // 'state 5' -> @par-gen.EOF -> reduce -> 'action 11'
actionsTable[96] = 12; // 'state 6' -> CHARACTER -> shift -> 'action 12'
actionsTable[97] = 13; // 'state 6' -> UNION -> shift -> 'action 13'
actionsTable[98] = 14; // 'state 6' -> PAREN_OPEN -> shift -> 'action 14'
actionsTable[108] = 15; // 'state 6' -> Atom -> shift -> 'action 15'
actionsTable[109] = 16; // 'state 6' -> Group -> shift -> 'action 16'
actionsTable[101] = 17; // 'state 6' -> @par-gen.EOF -> reduce -> 'action 17'
actionsTable[112] = 18; // 'state 7' -> CHARACTER -> shift -> 'action 18'
actionsTable[113] = 19; // 'state 7' -> UNION -> shift -> 'action 19'
actionsTable[114] = 20; // 'state 7' -> PAREN_OPEN -> shift -> 'action 20'
actionsTable[124] = 21; // 'state 7' -> Atom -> shift -> 'action 21'
actionsTable[125] = 22; // 'state 7' -> Group -> shift -> 'action 22'
actionsTable[117] = 23; // 'state 7' -> @par-gen.EOF -> reduce -> 'action 23'
actionsTable[20] = 24; // 'state 1' -> QUANTIFIER -> shift -> 'action 24'
actionsTable[16] = 25; // 'state 1' -> CHARACTER -> reduce -> 'action 25'
actionsTable[17] = 26; // 'state 1' -> UNION -> reduce -> 'action 26'
actionsTable[18] = 27; // 'state 1' -> PAREN_OPEN -> reduce -> 'action 27'
actionsTable[19] = 28; // 'state 1' -> PAREN_CLOSE -> reduce -> 'action 28'
actionsTable[21] = 29; // 'state 1' -> @par-gen.EOF -> reduce -> 'action 29'
actionsTable[132] = 30; // 'state 8' -> QUANTIFIER -> shift -> 'action 30'
actionsTable[128] = 31; // 'state 8' -> CHARACTER -> reduce -> 'action 31'
actionsTable[129] = 32; // 'state 8' -> UNION -> reduce -> 'action 32'
actionsTable[130] = 33; // 'state 8' -> PAREN_OPEN -> reduce -> 'action 33'
actionsTable[131] = 34; // 'state 8' -> PAREN_CLOSE -> reduce -> 'action 34'
actionsTable[133] = 35; // 'state 8' -> @par-gen.EOF -> reduce -> 'action 35'
actionsTable[32] = 36; // 'state 2' -> CHARACTER -> shift -> 'action 36'
actionsTable[34] = 37; // 'state 2' -> PAREN_OPEN -> shift -> 'action 37'
actionsTable[42] = 38; // 'state 2' -> Union -> shift -> 'action 38'
actionsTable[43] = 39; // 'state 2' -> Sequence -> shift -> 'action 39'
actionsTable[44] = 40; // 'state 2' -> Atom -> shift -> 'action 40'
actionsTable[45] = 41; // 'state 2' -> Group -> shift -> 'action 41'
actionsTable[144] = 42; // 'state 9' -> CHARACTER -> shift -> 'action 42'
actionsTable[146] = 43; // 'state 9' -> PAREN_OPEN -> shift -> 'action 43'
actionsTable[155] = 44; // 'state 9' -> Sequence -> shift -> 'action 44'
actionsTable[156] = 45; // 'state 9' -> Atom -> shift -> 'action 45'
actionsTable[157] = 46; // 'state 9' -> Group -> shift -> 'action 46'
actionsTable[176] = 47; // 'state 11' -> CHARACTER -> shift -> 'action 47'
actionsTable[178] = 48; // 'state 11' -> PAREN_OPEN -> shift -> 'action 48'
actionsTable[187] = 49; // 'state 11' -> Sequence -> shift -> 'action 49'
actionsTable[188] = 50; // 'state 11' -> Atom -> shift -> 'action 50'
actionsTable[189] = 51; // 'state 11' -> Group -> shift -> 'action 51'
actionsTable[208] = 52; // 'state 13' -> CHARACTER -> reduce -> 'action 52'
actionsTable[209] = 53; // 'state 13' -> UNION -> reduce -> 'action 53'
actionsTable[210] = 54; // 'state 13' -> PAREN_OPEN -> reduce -> 'action 54'
actionsTable[211] = 55; // 'state 13' -> PAREN_CLOSE -> reduce -> 'action 55'
actionsTable[213] = 56; // 'state 13' -> @par-gen.EOF -> reduce -> 'action 56'
actionsTable[164] = 57; // 'state 10' -> QUANTIFIER -> shift -> 'action 57'
actionsTable[160] = 58; // 'state 10' -> CHARACTER -> reduce -> 'action 58'
actionsTable[161] = 59; // 'state 10' -> UNION -> reduce -> 'action 59'
actionsTable[162] = 60; // 'state 10' -> PAREN_OPEN -> reduce -> 'action 60'
actionsTable[163] = 61; // 'state 10' -> PAREN_CLOSE -> reduce -> 'action 61'
actionsTable[165] = 62; // 'state 10' -> @par-gen.EOF -> reduce -> 'action 62'
actionsTable[228] = 63; // 'state 14' -> QUANTIFIER -> shift -> 'action 63'
actionsTable[224] = 64; // 'state 14' -> CHARACTER -> reduce -> 'action 64'
actionsTable[225] = 65; // 'state 14' -> UNION -> reduce -> 'action 65'
actionsTable[226] = 66; // 'state 14' -> PAREN_OPEN -> reduce -> 'action 66'
actionsTable[227] = 67; // 'state 14' -> PAREN_CLOSE -> reduce -> 'action 67'
actionsTable[229] = 68; // 'state 14' -> @par-gen.EOF -> reduce -> 'action 68'
actionsTable[192] = 69; // 'state 12' -> CHARACTER -> shift -> 'action 69'
actionsTable[194] = 70; // 'state 12' -> PAREN_OPEN -> shift -> 'action 70'
actionsTable[202] = 71; // 'state 12' -> Union -> shift -> 'action 71'
actionsTable[203] = 72; // 'state 12' -> Sequence -> shift -> 'action 72'
actionsTable[204] = 73; // 'state 12' -> Atom -> shift -> 'action 73'
actionsTable[205] = 74; // 'state 12' -> Group -> shift -> 'action 74'
actionsTable[256] = 75; // 'state 16' -> CHARACTER -> shift -> 'action 75'
actionsTable[258] = 76; // 'state 16' -> PAREN_OPEN -> shift -> 'action 76'
actionsTable[267] = 77; // 'state 16' -> Sequence -> shift -> 'action 77'
actionsTable[268] = 78; // 'state 16' -> Atom -> shift -> 'action 78'
actionsTable[269] = 79; // 'state 16' -> Group -> shift -> 'action 79'
actionsTable[288] = 80; // 'state 18' -> CHARACTER -> reduce -> 'action 80'
actionsTable[289] = 81; // 'state 18' -> UNION -> reduce -> 'action 81'
actionsTable[290] = 82; // 'state 18' -> PAREN_OPEN -> reduce -> 'action 82'
actionsTable[291] = 83; // 'state 18' -> PAREN_CLOSE -> reduce -> 'action 83'
actionsTable[293] = 84; // 'state 18' -> @par-gen.EOF -> reduce -> 'action 84'
actionsTable[244] = 85; // 'state 15' -> QUANTIFIER -> shift -> 'action 85'
actionsTable[240] = 86; // 'state 15' -> CHARACTER -> reduce -> 'action 86'
actionsTable[241] = 87; // 'state 15' -> UNION -> reduce -> 'action 87'
actionsTable[242] = 88; // 'state 15' -> PAREN_OPEN -> reduce -> 'action 88'
actionsTable[243] = 89; // 'state 15' -> PAREN_CLOSE -> reduce -> 'action 89'
actionsTable[245] = 90; // 'state 15' -> @par-gen.EOF -> reduce -> 'action 90'
actionsTable[308] = 91; // 'state 19' -> QUANTIFIER -> shift -> 'action 91'
actionsTable[304] = 92; // 'state 19' -> CHARACTER -> reduce -> 'action 92'
actionsTable[305] = 93; // 'state 19' -> UNION -> reduce -> 'action 93'
actionsTable[306] = 94; // 'state 19' -> PAREN_OPEN -> reduce -> 'action 94'
actionsTable[307] = 95; // 'state 19' -> PAREN_CLOSE -> reduce -> 'action 95'
actionsTable[309] = 96; // 'state 19' -> @par-gen.EOF -> reduce -> 'action 96'
actionsTable[272] = 97; // 'state 17' -> CHARACTER -> shift -> 'action 97'
actionsTable[274] = 98; // 'state 17' -> PAREN_OPEN -> shift -> 'action 98'
actionsTable[282] = 99; // 'state 17' -> Union -> shift -> 'action 99'
actionsTable[283] = 100; // 'state 17' -> Sequence -> shift -> 'action 100'
actionsTable[284] = 101; // 'state 17' -> Atom -> shift -> 'action 101'
actionsTable[285] = 102; // 'state 17' -> Group -> shift -> 'action 102'
actionsTable[320] = 103; // 'state 20' -> CHARACTER -> reduce -> 'action 103'
actionsTable[321] = 104; // 'state 20' -> UNION -> reduce -> 'action 104'
actionsTable[322] = 105; // 'state 20' -> PAREN_OPEN -> reduce -> 'action 105'
actionsTable[323] = 106; // 'state 20' -> PAREN_CLOSE -> reduce -> 'action 106'
actionsTable[325] = 107; // 'state 20' -> @par-gen.EOF -> reduce -> 'action 107'
actionsTable[336] = 108; // 'state 21' -> CHARACTER -> reduce -> 'action 108'
actionsTable[337] = 109; // 'state 21' -> UNION -> reduce -> 'action 109'
actionsTable[338] = 110; // 'state 21' -> PAREN_OPEN -> reduce -> 'action 110'
actionsTable[339] = 111; // 'state 21' -> PAREN_CLOSE -> reduce -> 'action 111'
actionsTable[341] = 112; // 'state 21' -> @par-gen.EOF -> reduce -> 'action 112'
actionsTable[353] = 113; // 'state 22' -> UNION -> shift -> 'action 113'
actionsTable[355] = 114; // 'state 22' -> PAREN_CLOSE -> shift -> 'action 114'
actionsTable[368] = 115; // 'state 23' -> CHARACTER -> shift -> 'action 115'
actionsTable[369] = 116; // 'state 23' -> UNION -> shift -> 'action 116'
actionsTable[370] = 117; // 'state 23' -> PAREN_OPEN -> shift -> 'action 117'
actionsTable[371] = 118; // 'state 23' -> PAREN_CLOSE -> shift -> 'action 118'
actionsTable[380] = 119; // 'state 23' -> Atom -> shift -> 'action 119'
actionsTable[381] = 120; // 'state 23' -> Group -> shift -> 'action 120'
actionsTable[384] = 121; // 'state 24' -> CHARACTER -> shift -> 'action 121'
actionsTable[385] = 122; // 'state 24' -> UNION -> shift -> 'action 122'
actionsTable[386] = 123; // 'state 24' -> PAREN_OPEN -> shift -> 'action 123'
actionsTable[387] = 124; // 'state 24' -> PAREN_CLOSE -> shift -> 'action 124'
actionsTable[396] = 125; // 'state 24' -> Atom -> shift -> 'action 125'
actionsTable[397] = 126; // 'state 24' -> Group -> shift -> 'action 126'
actionsTable[400] = 127; // 'state 25' -> CHARACTER -> shift -> 'action 127'
actionsTable[402] = 128; // 'state 25' -> PAREN_OPEN -> shift -> 'action 128'
actionsTable[412] = 129; // 'state 25' -> Atom -> shift -> 'action 129'
actionsTable[413] = 130; // 'state 25' -> Group -> shift -> 'action 130'
actionsTable[401] = 131; // 'state 25' -> UNION -> reduce -> 'action 131'
actionsTable[403] = 132; // 'state 25' -> PAREN_CLOSE -> reduce -> 'action 132'
actionsTable[405] = 133; // 'state 25' -> @par-gen.EOF -> reduce -> 'action 133'
actionsTable[416] = 134; // 'state 26' -> CHARACTER -> shift -> 'action 134'
actionsTable[418] = 135; // 'state 26' -> PAREN_OPEN -> shift -> 'action 135'
actionsTable[428] = 136; // 'state 26' -> Atom -> shift -> 'action 136'
actionsTable[429] = 137; // 'state 26' -> Group -> shift -> 'action 137'
actionsTable[417] = 138; // 'state 26' -> UNION -> reduce -> 'action 138'
actionsTable[419] = 139; // 'state 26' -> PAREN_CLOSE -> reduce -> 'action 139'
actionsTable[421] = 140; // 'state 26' -> @par-gen.EOF -> reduce -> 'action 140'
actionsTable[432] = 141; // 'state 27' -> CHARACTER -> shift -> 'action 141'
actionsTable[434] = 142; // 'state 27' -> PAREN_OPEN -> shift -> 'action 142'
actionsTable[444] = 143; // 'state 27' -> Atom -> shift -> 'action 143'
actionsTable[445] = 144; // 'state 27' -> Group -> shift -> 'action 144'
actionsTable[433] = 145; // 'state 27' -> UNION -> reduce -> 'action 145'
actionsTable[435] = 146; // 'state 27' -> PAREN_CLOSE -> reduce -> 'action 146'
actionsTable[437] = 147; // 'state 27' -> @par-gen.EOF -> reduce -> 'action 147'
actionsTable[448] = 148; // 'state 28' -> CHARACTER -> shift -> 'action 148'
actionsTable[450] = 149; // 'state 28' -> PAREN_OPEN -> shift -> 'action 149'
actionsTable[460] = 150; // 'state 28' -> Atom -> shift -> 'action 150'
actionsTable[461] = 151; // 'state 28' -> Group -> shift -> 'action 151'
actionsTable[449] = 152; // 'state 28' -> UNION -> reduce -> 'action 152'
actionsTable[451] = 153; // 'state 28' -> PAREN_CLOSE -> reduce -> 'action 153'
actionsTable[453] = 154; // 'state 28' -> @par-gen.EOF -> reduce -> 'action 154'
actionsTable[464] = 155; // 'state 29' -> CHARACTER -> reduce -> 'action 155'
actionsTable[465] = 156; // 'state 29' -> UNION -> reduce -> 'action 156'
actionsTable[466] = 157; // 'state 29' -> PAREN_OPEN -> reduce -> 'action 157'
actionsTable[467] = 158; // 'state 29' -> PAREN_CLOSE -> reduce -> 'action 158'
actionsTable[469] = 159; // 'state 29' -> @par-gen.EOF -> reduce -> 'action 159'
actionsTable[480] = 160; // 'state 30' -> CHARACTER -> reduce -> 'action 160'
actionsTable[481] = 161; // 'state 30' -> UNION -> reduce -> 'action 161'
actionsTable[482] = 162; // 'state 30' -> PAREN_OPEN -> reduce -> 'action 162'
actionsTable[483] = 163; // 'state 30' -> PAREN_CLOSE -> reduce -> 'action 163'
actionsTable[485] = 164; // 'state 30' -> @par-gen.EOF -> reduce -> 'action 164'
actionsTable[497] = 165; // 'state 31' -> UNION -> shift -> 'action 165'
actionsTable[499] = 166; // 'state 31' -> PAREN_CLOSE -> shift -> 'action 166'
actionsTable[512] = 167; // 'state 32' -> CHARACTER -> shift -> 'action 167'
actionsTable[513] = 168; // 'state 32' -> UNION -> shift -> 'action 168'
actionsTable[514] = 169; // 'state 32' -> PAREN_OPEN -> shift -> 'action 169'
actionsTable[515] = 170; // 'state 32' -> PAREN_CLOSE -> shift -> 'action 170'
actionsTable[524] = 171; // 'state 32' -> Atom -> shift -> 'action 171'
actionsTable[525] = 172; // 'state 32' -> Group -> shift -> 'action 172'
actionsTable[528] = 173; // 'state 33' -> CHARACTER -> shift -> 'action 173'
actionsTable[529] = 174; // 'state 33' -> UNION -> shift -> 'action 174'
actionsTable[530] = 175; // 'state 33' -> PAREN_OPEN -> shift -> 'action 175'
actionsTable[531] = 176; // 'state 33' -> PAREN_CLOSE -> shift -> 'action 176'
actionsTable[540] = 177; // 'state 33' -> Atom -> shift -> 'action 177'
actionsTable[541] = 178; // 'state 33' -> Group -> shift -> 'action 178'
actionsTable[544] = 179; // 'state 34' -> CHARACTER -> shift -> 'action 179'
actionsTable[546] = 180; // 'state 34' -> PAREN_OPEN -> shift -> 'action 180'
actionsTable[556] = 181; // 'state 34' -> Atom -> shift -> 'action 181'
actionsTable[557] = 182; // 'state 34' -> Group -> shift -> 'action 182'
actionsTable[545] = 183; // 'state 34' -> UNION -> reduce -> 'action 183'
actionsTable[547] = 184; // 'state 34' -> PAREN_CLOSE -> reduce -> 'action 184'
actionsTable[549] = 185; // 'state 34' -> @par-gen.EOF -> reduce -> 'action 185'
actionsTable[560] = 186; // 'state 35' -> CHARACTER -> shift -> 'action 186'
actionsTable[562] = 187; // 'state 35' -> PAREN_OPEN -> shift -> 'action 187'
actionsTable[572] = 188; // 'state 35' -> Atom -> shift -> 'action 188'
actionsTable[573] = 189; // 'state 35' -> Group -> shift -> 'action 189'
actionsTable[561] = 190; // 'state 35' -> UNION -> reduce -> 'action 190'
actionsTable[563] = 191; // 'state 35' -> PAREN_CLOSE -> reduce -> 'action 191'
actionsTable[565] = 192; // 'state 35' -> @par-gen.EOF -> reduce -> 'action 192'
actionsTable[576] = 193; // 'state 36' -> CHARACTER -> reduce -> 'action 193'
actionsTable[577] = 194; // 'state 36' -> UNION -> reduce -> 'action 194'
actionsTable[578] = 195; // 'state 36' -> PAREN_OPEN -> reduce -> 'action 195'
actionsTable[579] = 196; // 'state 36' -> PAREN_CLOSE -> reduce -> 'action 196'
actionsTable[581] = 197; // 'state 36' -> @par-gen.EOF -> reduce -> 'action 197'
actionsTable[592] = 198; // 'state 37' -> CHARACTER -> reduce -> 'action 198'
actionsTable[593] = 199; // 'state 37' -> UNION -> reduce -> 'action 199'
actionsTable[594] = 200; // 'state 37' -> PAREN_OPEN -> reduce -> 'action 200'
actionsTable[595] = 201; // 'state 37' -> PAREN_CLOSE -> reduce -> 'action 201'
actionsTable[597] = 202; // 'state 37' -> @par-gen.EOF -> reduce -> 'action 202'
actionsTable[609] = 203; // 'state 38' -> UNION -> shift -> 'action 203'
actionsTable[611] = 204; // 'state 38' -> PAREN_CLOSE -> shift -> 'action 204'
actionsTable[624] = 205; // 'state 39' -> CHARACTER -> shift -> 'action 205'
actionsTable[625] = 206; // 'state 39' -> UNION -> shift -> 'action 206'
actionsTable[626] = 207; // 'state 39' -> PAREN_OPEN -> shift -> 'action 207'
actionsTable[627] = 208; // 'state 39' -> PAREN_CLOSE -> shift -> 'action 208'
actionsTable[636] = 209; // 'state 39' -> Atom -> shift -> 'action 209'
actionsTable[637] = 210; // 'state 39' -> Group -> shift -> 'action 210'
actionsTable[640] = 211; // 'state 40' -> CHARACTER -> shift -> 'action 211'
actionsTable[641] = 212; // 'state 40' -> UNION -> shift -> 'action 212'
actionsTable[642] = 213; // 'state 40' -> PAREN_OPEN -> shift -> 'action 213'
actionsTable[643] = 214; // 'state 40' -> PAREN_CLOSE -> shift -> 'action 214'
actionsTable[652] = 215; // 'state 40' -> Atom -> shift -> 'action 215'
actionsTable[653] = 216; // 'state 40' -> Group -> shift -> 'action 216'
actionsTable[656] = 217; // 'state 41' -> CHARACTER -> reduce -> 'action 217'
actionsTable[657] = 218; // 'state 41' -> UNION -> reduce -> 'action 218'
actionsTable[658] = 219; // 'state 41' -> PAREN_OPEN -> reduce -> 'action 219'
actionsTable[659] = 220; // 'state 41' -> PAREN_CLOSE -> reduce -> 'action 220'
actionsTable[660] = 221; // 'state 41' -> QUANTIFIER -> reduce -> 'action 221'
actionsTable[661] = 222; // 'state 41' -> @par-gen.EOF -> reduce -> 'action 222'
actionsTable[672] = 223; // 'state 42' -> CHARACTER -> reduce -> 'action 223'
actionsTable[673] = 224; // 'state 42' -> UNION -> reduce -> 'action 224'
actionsTable[674] = 225; // 'state 42' -> PAREN_OPEN -> reduce -> 'action 225'
actionsTable[675] = 226; // 'state 42' -> PAREN_CLOSE -> reduce -> 'action 226'
actionsTable[676] = 227; // 'state 42' -> QUANTIFIER -> reduce -> 'action 227'
actionsTable[677] = 228; // 'state 42' -> @par-gen.EOF -> reduce -> 'action 228'
actionsTable[688] = 229; // 'state 43' -> CHARACTER -> reduce -> 'action 229'
actionsTable[689] = 230; // 'state 43' -> UNION -> reduce -> 'action 230'
actionsTable[690] = 231; // 'state 43' -> PAREN_OPEN -> reduce -> 'action 231'
actionsTable[691] = 232; // 'state 43' -> PAREN_CLOSE -> reduce -> 'action 232'
actionsTable[692] = 233; // 'state 43' -> QUANTIFIER -> reduce -> 'action 233'
actionsTable[693] = 234; // 'state 43' -> @par-gen.EOF -> reduce -> 'action 234'
actionsTable[704] = 235; // 'state 44' -> CHARACTER -> reduce -> 'action 235'
actionsTable[705] = 236; // 'state 44' -> UNION -> reduce -> 'action 236'
actionsTable[706] = 237; // 'state 44' -> PAREN_OPEN -> reduce -> 'action 237'
actionsTable[707] = 238; // 'state 44' -> PAREN_CLOSE -> reduce -> 'action 238'
actionsTable[708] = 239; // 'state 44' -> QUANTIFIER -> reduce -> 'action 239'
actionsTable[709] = 240; // 'state 44' -> @par-gen.EOF -> reduce -> 'action 240'
actionsTable[720] = 241; // 'state 45' -> CHARACTER -> reduce -> 'action 241'
actionsTable[721] = 242; // 'state 45' -> UNION -> reduce -> 'action 242'
actionsTable[722] = 243; // 'state 45' -> PAREN_OPEN -> reduce -> 'action 243'
actionsTable[723] = 244; // 'state 45' -> PAREN_CLOSE -> reduce -> 'action 244'
actionsTable[724] = 245; // 'state 45' -> QUANTIFIER -> reduce -> 'action 245'
actionsTable[725] = 246; // 'state 45' -> @par-gen.EOF -> reduce -> 'action 246'
actionsTable[736] = 247; // 'state 46' -> CHARACTER -> reduce -> 'action 247'
actionsTable[737] = 248; // 'state 46' -> UNION -> reduce -> 'action 248'
actionsTable[738] = 249; // 'state 46' -> PAREN_OPEN -> reduce -> 'action 249'
actionsTable[739] = 250; // 'state 46' -> PAREN_CLOSE -> reduce -> 'action 250'
actionsTable[740] = 251; // 'state 46' -> QUANTIFIER -> reduce -> 'action 251'
actionsTable[741] = 252; // 'state 46' -> @par-gen.EOF -> reduce -> 'action 252'
actionsTable[752] = 253; // 'state 47' -> CHARACTER -> reduce -> 'action 253'
actionsTable[753] = 254; // 'state 47' -> UNION -> reduce -> 'action 254'
actionsTable[754] = 255; // 'state 47' -> PAREN_OPEN -> reduce -> 'action 255'
actionsTable[755] = 256; // 'state 47' -> PAREN_CLOSE -> reduce -> 'action 256'
actionsTable[756] = 257; // 'state 47' -> QUANTIFIER -> reduce -> 'action 257'
actionsTable[757] = 258; // 'state 47' -> @par-gen.EOF -> reduce -> 'action 258'
actionsTable[768] = 259; // 'state 48' -> CHARACTER -> reduce -> 'action 259'
actionsTable[769] = 260; // 'state 48' -> UNION -> reduce -> 'action 260'
actionsTable[770] = 261; // 'state 48' -> PAREN_OPEN -> reduce -> 'action 261'
actionsTable[771] = 262; // 'state 48' -> PAREN_CLOSE -> reduce -> 'action 262'
actionsTable[772] = 263; // 'state 48' -> QUANTIFIER -> reduce -> 'action 263'
actionsTable[773] = 264; // 'state 48' -> @par-gen.EOF -> reduce -> 'action 264'
actionsTable[784] = 265; // 'state 49' -> CHARACTER -> reduce -> 'action 265'
actionsTable[785] = 266; // 'state 49' -> UNION -> reduce -> 'action 266'
actionsTable[786] = 267; // 'state 49' -> PAREN_OPEN -> reduce -> 'action 267'
actionsTable[787] = 268; // 'state 49' -> PAREN_CLOSE -> reduce -> 'action 268'
actionsTable[788] = 269; // 'state 49' -> QUANTIFIER -> reduce -> 'action 269'
actionsTable[789] = 270; // 'state 49' -> @par-gen.EOF -> reduce -> 'action 270'

const gotoTable = new Uint16Array(800).fill(0xffff);
gotoTable[8] = 3; // 'state 3'
gotoTable[9] = 4; // 'state 4'
gotoTable[10] = 5; // 'state 5'
gotoTable[11] = 6; // 'state 6'
gotoTable[12] = 7; // 'state 7'
gotoTable[13] = 8; // 'state 8'
gotoTable[108] = 13; // 'state 13'
gotoTable[109] = 14; // 'state 14'
gotoTable[124] = 18; // 'state 18'
gotoTable[125] = 19; // 'state 19'
gotoTable[42] = 22; // 'state 22'
gotoTable[43] = 23; // 'state 23'
gotoTable[44] = 24; // 'state 24'
gotoTable[45] = 8; // 'state 8'
gotoTable[155] = 25; // 'state 25'
gotoTable[156] = 26; // 'state 26'
gotoTable[157] = 8; // 'state 8'
gotoTable[187] = 27; // 'state 27'
gotoTable[188] = 28; // 'state 28'
gotoTable[189] = 8; // 'state 8'
gotoTable[202] = 31; // 'state 31'
gotoTable[203] = 32; // 'state 32'
gotoTable[204] = 33; // 'state 33'
gotoTable[205] = 8; // 'state 8'
gotoTable[267] = 34; // 'state 34'
gotoTable[268] = 35; // 'state 35'
gotoTable[269] = 8; // 'state 8'
gotoTable[282] = 38; // 'state 38'
gotoTable[283] = 39; // 'state 39'
gotoTable[284] = 40; // 'state 40'
gotoTable[285] = 8; // 'state 8'
gotoTable[380] = 13; // 'state 13'
gotoTable[381] = 8; // 'state 8'
gotoTable[396] = 18; // 'state 18'
gotoTable[397] = 8; // 'state 8'
gotoTable[412] = 13; // 'state 13'
gotoTable[413] = 8; // 'state 8'
gotoTable[428] = 18; // 'state 18'
gotoTable[429] = 8; // 'state 8'
gotoTable[444] = 13; // 'state 13'
gotoTable[445] = 8; // 'state 8'
gotoTable[460] = 18; // 'state 18'
gotoTable[461] = 8; // 'state 8'
gotoTable[524] = 13; // 'state 13'
gotoTable[525] = 8; // 'state 8'
gotoTable[540] = 18; // 'state 18'
gotoTable[541] = 8; // 'state 8'
gotoTable[556] = 13; // 'state 13'
gotoTable[557] = 8; // 'state 8'
gotoTable[572] = 18; // 'state 18'
gotoTable[573] = 8; // 'state 8'
gotoTable[636] = 13; // 'state 13'
gotoTable[637] = 8; // 'state 8'
gotoTable[652] = 18; // 'state 18'
gotoTable[653] = 8; // 'state 8'

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
            lookahead * 50 * 16 + currentState * 16 + action.symbol
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
