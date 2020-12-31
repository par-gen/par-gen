// @ts-nocheck

import { next as nextTokenInitial } from "./lexer-initial.js";

/*
      RegExp := Expression;
Expression := Union;
Expression := Group;
Expression := Sequence;
Expression := Atom;
Group := PAREN_OPEN Union PAREN_CLOSE;
Group := PAREN_OPEN Union PAREN_CLOSE QUANTIFIER;
Group := PAREN_OPEN Sequence PAREN_CLOSE;
Group := PAREN_OPEN Sequence PAREN_CLOSE QUANTIFIER;
Group := PAREN_OPEN Atom PAREN_CLOSE;
Group := PAREN_OPEN Atom PAREN_CLOSE QUANTIFIER;
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
      */

const reducerStates = new Uint8Array(15872);
reducerStates[29] = 1; // 'state 1' -> Atom -> CHARACTER
reducerStates[1021] = 1; // 'state 1' -> Atom -> UNION
reducerStates[2013] = 1; // 'state 1' -> Atom -> PAREN_OPEN
reducerStates[3005] = 1; // 'state 1' -> Atom -> PAREN_CLOSE
reducerStates[4989] = 1; // 'state 1' -> Atom -> @par-gen.EOF
reducerStates[5015] = 1; // 'state 3' -> S -> @par-gen.EOF
reducerStates[5032] = 1; // 'state 4' -> RegExp -> @par-gen.EOF
reducerStates[5049] = 1; // 'state 5' -> Expression -> @par-gen.EOF
reducerStates[93] = 1; // 'state 5' -> Atom -> CHARACTER
reducerStates[1085] = 1; // 'state 5' -> Atom -> UNION
reducerStates[2077] = 1; // 'state 5' -> Atom -> PAREN_OPEN
reducerStates[3069] = 1; // 'state 5' -> Atom -> PAREN_CLOSE
reducerStates[5053] = 1; // 'state 5' -> Atom -> @par-gen.EOF
reducerStates[5065] = 1; // 'state 6' -> Expression -> @par-gen.EOF
reducerStates[5081] = 1; // 'state 7' -> Expression -> @par-gen.EOF
reducerStates[5097] = 1; // 'state 8' -> Expression -> @par-gen.EOF
reducerStates[173] = 2; // 'state 10' -> Atom -> CHARACTER
reducerStates[1165] = 2; // 'state 10' -> Atom -> UNION
reducerStates[2157] = 2; // 'state 10' -> Atom -> PAREN_OPEN
reducerStates[3149] = 2; // 'state 10' -> Atom -> PAREN_CLOSE
reducerStates[5133] = 2; // 'state 10' -> Atom -> @par-gen.EOF
reducerStates[189] = 1; // 'state 11' -> Atom -> CHARACTER
reducerStates[1181] = 1; // 'state 11' -> Atom -> UNION
reducerStates[2173] = 1; // 'state 11' -> Atom -> PAREN_OPEN
reducerStates[3165] = 1; // 'state 11' -> Atom -> PAREN_CLOSE
reducerStates[5149] = 1; // 'state 11' -> Atom -> @par-gen.EOF
reducerStates[237] = 1; // 'state 14' -> Atom -> CHARACTER
reducerStates[1229] = 1; // 'state 14' -> Atom -> UNION
reducerStates[2221] = 1; // 'state 14' -> Atom -> PAREN_OPEN
reducerStates[3213] = 1; // 'state 14' -> Atom -> PAREN_CLOSE
reducerStates[5197] = 1; // 'state 14' -> Atom -> @par-gen.EOF
reducerStates[252] = 2; // 'state 15' -> Sequence -> CHARACTER
reducerStates[1244] = 2; // 'state 15' -> Sequence -> UNION
reducerStates[2236] = 2; // 'state 15' -> Sequence -> PAREN_OPEN
reducerStates[3228] = 2; // 'state 15' -> Sequence -> PAREN_CLOSE
reducerStates[5212] = 2; // 'state 15' -> Sequence -> @par-gen.EOF
reducerStates[269] = 1; // 'state 16' -> Atom -> CHARACTER
reducerStates[1261] = 1; // 'state 16' -> Atom -> UNION
reducerStates[2253] = 1; // 'state 16' -> Atom -> PAREN_OPEN
reducerStates[3245] = 1; // 'state 16' -> Atom -> PAREN_CLOSE
reducerStates[5229] = 1; // 'state 16' -> Atom -> @par-gen.EOF
reducerStates[317] = 1; // 'state 19' -> Atom -> CHARACTER
reducerStates[1309] = 1; // 'state 19' -> Atom -> UNION
reducerStates[2301] = 1; // 'state 19' -> Atom -> PAREN_OPEN
reducerStates[3293] = 1; // 'state 19' -> Atom -> PAREN_CLOSE
reducerStates[5277] = 1; // 'state 19' -> Atom -> @par-gen.EOF
reducerStates[332] = 2; // 'state 20' -> Sequence -> CHARACTER
reducerStates[1324] = 2; // 'state 20' -> Sequence -> UNION
reducerStates[2316] = 2; // 'state 20' -> Sequence -> PAREN_OPEN
reducerStates[3308] = 2; // 'state 20' -> Sequence -> PAREN_CLOSE
reducerStates[5292] = 2; // 'state 20' -> Sequence -> @par-gen.EOF
reducerStates[349] = 1; // 'state 21' -> Atom -> CHARACTER
reducerStates[1341] = 1; // 'state 21' -> Atom -> UNION
reducerStates[2333] = 1; // 'state 21' -> Atom -> PAREN_OPEN
reducerStates[3325] = 1; // 'state 21' -> Atom -> PAREN_CLOSE
reducerStates[5309] = 1; // 'state 21' -> Atom -> @par-gen.EOF
reducerStates[365] = 1; // 'state 22' -> Atom -> CHARACTER
reducerStates[1357] = 1; // 'state 22' -> Atom -> UNION
reducerStates[2349] = 1; // 'state 22' -> Atom -> PAREN_OPEN
reducerStates[3341] = 1; // 'state 22' -> Atom -> PAREN_CLOSE
reducerStates[5325] = 1; // 'state 22' -> Atom -> @par-gen.EOF
reducerStates[429] = 2; // 'state 26' -> Atom -> CHARACTER
reducerStates[1421] = 2; // 'state 26' -> Atom -> UNION
reducerStates[2413] = 2; // 'state 26' -> Atom -> PAREN_OPEN
reducerStates[3405] = 2; // 'state 26' -> Atom -> PAREN_CLOSE
reducerStates[5389] = 2; // 'state 26' -> Atom -> @par-gen.EOF
reducerStates[445] = 1; // 'state 27' -> Atom -> CHARACTER
reducerStates[1437] = 1; // 'state 27' -> Atom -> UNION
reducerStates[2429] = 1; // 'state 27' -> Atom -> PAREN_OPEN
reducerStates[3421] = 1; // 'state 27' -> Atom -> PAREN_CLOSE
reducerStates[5405] = 1; // 'state 27' -> Atom -> @par-gen.EOF
reducerStates[1451] = 3; // 'state 28' -> Union -> UNION
reducerStates[3435] = 3; // 'state 28' -> Union -> PAREN_CLOSE
reducerStates[5419] = 3; // 'state 28' -> Union -> @par-gen.EOF
reducerStates[1467] = 3; // 'state 29' -> Union -> UNION
reducerStates[3451] = 3; // 'state 29' -> Union -> PAREN_CLOSE
reducerStates[5435] = 3; // 'state 29' -> Union -> @par-gen.EOF
reducerStates[493] = 1; // 'state 30' -> Atom -> CHARACTER
reducerStates[1485] = 1; // 'state 30' -> Atom -> UNION
reducerStates[2477] = 1; // 'state 30' -> Atom -> PAREN_OPEN
reducerStates[3469] = 1; // 'state 30' -> Atom -> PAREN_CLOSE
reducerStates[5453] = 1; // 'state 30' -> Atom -> @par-gen.EOF
reducerStates[1499] = 3; // 'state 31' -> Union -> UNION
reducerStates[3483] = 3; // 'state 31' -> Union -> PAREN_CLOSE
reducerStates[5467] = 3; // 'state 31' -> Union -> @par-gen.EOF
reducerStates[1515] = 3; // 'state 32' -> Union -> UNION
reducerStates[3499] = 3; // 'state 32' -> Union -> PAREN_CLOSE
reducerStates[5483] = 3; // 'state 32' -> Union -> @par-gen.EOF
reducerStates[541] = 2; // 'state 33' -> Atom -> CHARACTER
reducerStates[1533] = 2; // 'state 33' -> Atom -> UNION
reducerStates[2525] = 2; // 'state 33' -> Atom -> PAREN_OPEN
reducerStates[3517] = 2; // 'state 33' -> Atom -> PAREN_CLOSE
reducerStates[5501] = 2; // 'state 33' -> Atom -> @par-gen.EOF
reducerStates[1595] = 3; // 'state 37' -> Union -> UNION
reducerStates[3579] = 3; // 'state 37' -> Union -> PAREN_CLOSE
reducerStates[5563] = 3; // 'state 37' -> Union -> @par-gen.EOF
reducerStates[1611] = 3; // 'state 38' -> Union -> UNION
reducerStates[3595] = 3; // 'state 38' -> Union -> PAREN_CLOSE
reducerStates[5579] = 3; // 'state 38' -> Union -> @par-gen.EOF
reducerStates[637] = 2; // 'state 39' -> Atom -> CHARACTER
reducerStates[1629] = 2; // 'state 39' -> Atom -> UNION
reducerStates[2621] = 2; // 'state 39' -> Atom -> PAREN_OPEN
reducerStates[3613] = 2; // 'state 39' -> Atom -> PAREN_CLOSE
reducerStates[5597] = 2; // 'state 39' -> Atom -> @par-gen.EOF
reducerStates[698] = 3; // 'state 43' -> Group -> CHARACTER
reducerStates[1690] = 3; // 'state 43' -> Group -> UNION
reducerStates[2682] = 3; // 'state 43' -> Group -> PAREN_OPEN
reducerStates[3674] = 3; // 'state 43' -> Group -> PAREN_CLOSE
reducerStates[4666] = 3; // 'state 43' -> Group -> QUANTIFIER
reducerStates[5658] = 3; // 'state 43' -> Group -> @par-gen.EOF
reducerStates[714] = 3; // 'state 44' -> Group -> CHARACTER
reducerStates[1706] = 3; // 'state 44' -> Group -> UNION
reducerStates[2698] = 3; // 'state 44' -> Group -> PAREN_OPEN
reducerStates[3690] = 3; // 'state 44' -> Group -> PAREN_CLOSE
reducerStates[4682] = 3; // 'state 44' -> Group -> QUANTIFIER
reducerStates[5674] = 3; // 'state 44' -> Group -> @par-gen.EOF
reducerStates[730] = 3; // 'state 45' -> Group -> CHARACTER
reducerStates[1722] = 3; // 'state 45' -> Group -> UNION
reducerStates[2714] = 3; // 'state 45' -> Group -> PAREN_OPEN
reducerStates[3706] = 3; // 'state 45' -> Group -> PAREN_CLOSE
reducerStates[4698] = 3; // 'state 45' -> Group -> QUANTIFIER
reducerStates[5690] = 3; // 'state 45' -> Group -> @par-gen.EOF
reducerStates[749] = 2; // 'state 46' -> Atom -> CHARACTER
reducerStates[1741] = 2; // 'state 46' -> Atom -> UNION
reducerStates[2733] = 2; // 'state 46' -> Atom -> PAREN_OPEN
reducerStates[3725] = 2; // 'state 46' -> Atom -> PAREN_CLOSE
reducerStates[5709] = 2; // 'state 46' -> Atom -> @par-gen.EOF
reducerStates[762] = 3; // 'state 47' -> Group -> CHARACTER
reducerStates[1754] = 3; // 'state 47' -> Group -> UNION
reducerStates[2746] = 3; // 'state 47' -> Group -> PAREN_OPEN
reducerStates[3738] = 3; // 'state 47' -> Group -> PAREN_CLOSE
reducerStates[4730] = 3; // 'state 47' -> Group -> QUANTIFIER
reducerStates[5722] = 3; // 'state 47' -> Group -> @par-gen.EOF
reducerStates[778] = 3; // 'state 48' -> Group -> CHARACTER
reducerStates[1770] = 3; // 'state 48' -> Group -> UNION
reducerStates[2762] = 3; // 'state 48' -> Group -> PAREN_OPEN
reducerStates[3754] = 3; // 'state 48' -> Group -> PAREN_CLOSE
reducerStates[4746] = 3; // 'state 48' -> Group -> QUANTIFIER
reducerStates[5738] = 3; // 'state 48' -> Group -> @par-gen.EOF
reducerStates[794] = 3; // 'state 49' -> Group -> CHARACTER
reducerStates[1786] = 3; // 'state 49' -> Group -> UNION
reducerStates[2778] = 3; // 'state 49' -> Group -> PAREN_OPEN
reducerStates[3770] = 3; // 'state 49' -> Group -> PAREN_CLOSE
reducerStates[4762] = 3; // 'state 49' -> Group -> QUANTIFIER
reducerStates[5754] = 3; // 'state 49' -> Group -> @par-gen.EOF
reducerStates[810] = 3; // 'state 50' -> Group -> CHARACTER
reducerStates[1802] = 3; // 'state 50' -> Group -> UNION
reducerStates[2794] = 3; // 'state 50' -> Group -> PAREN_OPEN
reducerStates[3786] = 3; // 'state 50' -> Group -> PAREN_CLOSE
reducerStates[4778] = 3; // 'state 50' -> Group -> QUANTIFIER
reducerStates[5770] = 3; // 'state 50' -> Group -> @par-gen.EOF
reducerStates[826] = 3; // 'state 51' -> Group -> CHARACTER
reducerStates[1818] = 3; // 'state 51' -> Group -> UNION
reducerStates[2810] = 3; // 'state 51' -> Group -> PAREN_OPEN
reducerStates[3802] = 3; // 'state 51' -> Group -> PAREN_CLOSE
reducerStates[4794] = 3; // 'state 51' -> Group -> QUANTIFIER
reducerStates[5786] = 3; // 'state 51' -> Group -> @par-gen.EOF
reducerStates[842] = 3; // 'state 52' -> Group -> CHARACTER
reducerStates[1834] = 3; // 'state 52' -> Group -> UNION
reducerStates[2826] = 3; // 'state 52' -> Group -> PAREN_OPEN
reducerStates[3818] = 3; // 'state 52' -> Group -> PAREN_CLOSE
reducerStates[4810] = 3; // 'state 52' -> Group -> QUANTIFIER
reducerStates[5802] = 3; // 'state 52' -> Group -> @par-gen.EOF
reducerStates[858] = 4; // 'state 53' -> Group -> CHARACTER
reducerStates[1850] = 4; // 'state 53' -> Group -> UNION
reducerStates[2842] = 4; // 'state 53' -> Group -> PAREN_OPEN
reducerStates[3834] = 4; // 'state 53' -> Group -> PAREN_CLOSE
reducerStates[4826] = 4; // 'state 53' -> Group -> QUANTIFIER
reducerStates[5818] = 4; // 'state 53' -> Group -> @par-gen.EOF
reducerStates[874] = 4; // 'state 54' -> Group -> CHARACTER
reducerStates[1866] = 4; // 'state 54' -> Group -> UNION
reducerStates[2858] = 4; // 'state 54' -> Group -> PAREN_OPEN
reducerStates[3850] = 4; // 'state 54' -> Group -> PAREN_CLOSE
reducerStates[4842] = 4; // 'state 54' -> Group -> QUANTIFIER
reducerStates[5834] = 4; // 'state 54' -> Group -> @par-gen.EOF
reducerStates[890] = 4; // 'state 55' -> Group -> CHARACTER
reducerStates[1882] = 4; // 'state 55' -> Group -> UNION
reducerStates[2874] = 4; // 'state 55' -> Group -> PAREN_OPEN
reducerStates[3866] = 4; // 'state 55' -> Group -> PAREN_CLOSE
reducerStates[4858] = 4; // 'state 55' -> Group -> QUANTIFIER
reducerStates[5850] = 4; // 'state 55' -> Group -> @par-gen.EOF
reducerStates[906] = 4; // 'state 56' -> Group -> CHARACTER
reducerStates[1898] = 4; // 'state 56' -> Group -> UNION
reducerStates[2890] = 4; // 'state 56' -> Group -> PAREN_OPEN
reducerStates[3882] = 4; // 'state 56' -> Group -> PAREN_CLOSE
reducerStates[4874] = 4; // 'state 56' -> Group -> QUANTIFIER
reducerStates[5866] = 4; // 'state 56' -> Group -> @par-gen.EOF
reducerStates[922] = 4; // 'state 57' -> Group -> CHARACTER
reducerStates[1914] = 4; // 'state 57' -> Group -> UNION
reducerStates[2906] = 4; // 'state 57' -> Group -> PAREN_OPEN
reducerStates[3898] = 4; // 'state 57' -> Group -> PAREN_CLOSE
reducerStates[4890] = 4; // 'state 57' -> Group -> QUANTIFIER
reducerStates[5882] = 4; // 'state 57' -> Group -> @par-gen.EOF
reducerStates[938] = 4; // 'state 58' -> Group -> CHARACTER
reducerStates[1930] = 4; // 'state 58' -> Group -> UNION
reducerStates[2922] = 4; // 'state 58' -> Group -> PAREN_OPEN
reducerStates[3914] = 4; // 'state 58' -> Group -> PAREN_CLOSE
reducerStates[4906] = 4; // 'state 58' -> Group -> QUANTIFIER
reducerStates[5898] = 4; // 'state 58' -> Group -> @par-gen.EOF
reducerStates[954] = 4; // 'state 59' -> Group -> CHARACTER
reducerStates[1946] = 4; // 'state 59' -> Group -> UNION
reducerStates[2938] = 4; // 'state 59' -> Group -> PAREN_OPEN
reducerStates[3930] = 4; // 'state 59' -> Group -> PAREN_CLOSE
reducerStates[4922] = 4; // 'state 59' -> Group -> QUANTIFIER
reducerStates[5914] = 4; // 'state 59' -> Group -> @par-gen.EOF
reducerStates[970] = 4; // 'state 60' -> Group -> CHARACTER
reducerStates[1962] = 4; // 'state 60' -> Group -> UNION
reducerStates[2954] = 4; // 'state 60' -> Group -> PAREN_OPEN
reducerStates[3946] = 4; // 'state 60' -> Group -> PAREN_CLOSE
reducerStates[4938] = 4; // 'state 60' -> Group -> QUANTIFIER
reducerStates[5930] = 4; // 'state 60' -> Group -> @par-gen.EOF
reducerStates[986] = 4; // 'state 61' -> Group -> CHARACTER
reducerStates[1978] = 4; // 'state 61' -> Group -> UNION
reducerStates[2970] = 4; // 'state 61' -> Group -> PAREN_OPEN
reducerStates[3962] = 4; // 'state 61' -> Group -> PAREN_CLOSE
reducerStates[4954] = 4; // 'state 61' -> Group -> QUANTIFIER
reducerStates[5946] = 4; // 'state 61' -> Group -> @par-gen.EOF

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
    state: 17, // 'state 17'
    symbol: undefined,
  },
  // 'action 26'
  {
    op: 0, // shift
    state: 18, // 'state 18'
    symbol: undefined,
  },
  // 'action 27'
  {
    op: 0, // shift
    state: 19, // 'state 19'
    symbol: undefined,
  },
  // 'action 28'
  {
    op: 0, // shift
    state: 20, // 'state 20'
    symbol: undefined,
  },
  // 'action 29'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 9, // Expression
  },
  // 'action 30'
  {
    op: 0, // shift
    state: 21, // 'state 21'
    symbol: undefined,
  },
  // 'action 31'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 32'
  {
    op: 0, // shift
    state: 22, // 'state 22'
    symbol: undefined,
  },
  // 'action 33'
  {
    op: 0, // shift
    state: 23, // 'state 23'
    symbol: undefined,
  },
  // 'action 34'
  {
    op: 0, // shift
    state: 24, // 'state 24'
    symbol: undefined,
  },
  // 'action 35'
  {
    op: 0, // shift
    state: 25, // 'state 25'
    symbol: undefined,
  },
  // 'action 36'
  {
    op: 0, // shift
    state: 26, // 'state 26'
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
    state: 27, // 'state 27'
    symbol: undefined,
  },
  // 'action 45'
  {
    op: 0, // shift
    state: 28, // 'state 28'
    symbol: undefined,
  },
  // 'action 46'
  {
    op: 0, // shift
    state: 29, // 'state 29'
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
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 53'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 54'
  {
    op: 0, // shift
    state: 30, // 'state 30'
    symbol: undefined,
  },
  // 'action 55'
  {
    op: 0, // shift
    state: 31, // 'state 31'
    symbol: undefined,
  },
  // 'action 56'
  {
    op: 0, // shift
    state: 32, // 'state 32'
    symbol: undefined,
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
    op: 0, // shift
    state: 33, // 'state 33'
    symbol: undefined,
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
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 68'
  {
    op: 0, // shift
    state: 10, // 'state 10'
    symbol: undefined,
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
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 74'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 75'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 76'
  {
    op: 0, // shift
    state: 14, // 'state 14'
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
    state: 36, // 'state 36'
    symbol: undefined,
  },
  // 'action 80'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 81'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 82'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 83'
  {
    op: 0, // shift
    state: 37, // 'state 37'
    symbol: undefined,
  },
  // 'action 84'
  {
    op: 0, // shift
    state: 38, // 'state 38'
    symbol: undefined,
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
    op: 0, // shift
    state: 39, // 'state 39'
    symbol: undefined,
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
    op: 0, // shift
    state: 10, // 'state 10'
    symbol: undefined,
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
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 103'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 104'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 105'
  {
    op: 0, // shift
    state: 40, // 'state 40'
    symbol: undefined,
  },
  // 'action 106'
  {
    op: 0, // shift
    state: 41, // 'state 41'
    symbol: undefined,
  },
  // 'action 107'
  {
    op: 0, // shift
    state: 42, // 'state 42'
    symbol: undefined,
  },
  // 'action 108'
  {
    op: 0, // shift
    state: 9, // 'state 9'
    symbol: undefined,
  },
  // 'action 109'
  {
    op: 0, // shift
    state: 43, // 'state 43'
    symbol: undefined,
  },
  // 'action 110'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 111'
  {
    op: 0, // shift
    state: 12, // 'state 12'
    symbol: undefined,
  },
  // 'action 112'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 113'
  {
    op: 0, // shift
    state: 44, // 'state 44'
    symbol: undefined,
  },
  // 'action 114'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 115'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 116'
  {
    op: 0, // shift
    state: 1, // 'state 1'
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
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 119'
  {
    op: 0, // shift
    state: 45, // 'state 45'
    symbol: undefined,
  },
  // 'action 120'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 121'
  {
    op: 0, // shift
    state: 20, // 'state 20'
    symbol: undefined,
  },
  // 'action 122'
  {
    op: 0, // shift
    state: 46, // 'state 46'
    symbol: undefined,
  },
  // 'action 123'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 124'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
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
    op: 0, // shift
    state: 10, // 'state 10'
    symbol: undefined,
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
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 140'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 141'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 142'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 143'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 11, // Union
  },
  // 'action 144'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 11, // Union
  },
  // 'action 145'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 11, // Union
  },
  // 'action 146'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 147'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 148'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 149'
  {
    op: 0, // shift
    state: 20, // 'state 20'
    symbol: undefined,
  },
  // 'action 150'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 11, // Union
  },
  // 'action 151'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 11, // Union
  },
  // 'action 152'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 11, // Union
  },
  // 'action 153'
  {
    op: 0, // shift
    state: 10, // 'state 10'
    symbol: undefined,
  },
  // 'action 154'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 155'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 156'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 157'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 158'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 159'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 160'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 161'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 162'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 163'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 11, // Union
  },
  // 'action 164'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 11, // Union
  },
  // 'action 165'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 11, // Union
  },
  // 'action 166'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 167'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 168'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 169'
  {
    op: 0, // shift
    state: 20, // 'state 20'
    symbol: undefined,
  },
  // 'action 170'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 11, // Union
  },
  // 'action 171'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 11, // Union
  },
  // 'action 172'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 11, // Union
  },
  // 'action 173'
  {
    op: 0, // shift
    state: 10, // 'state 10'
    symbol: undefined,
  },
  // 'action 174'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 175'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 176'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 177'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 178'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 179'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 180'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 181'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 182'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 183'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 184'
  {
    op: 0, // shift
    state: 9, // 'state 9'
    symbol: undefined,
  },
  // 'action 185'
  {
    op: 0, // shift
    state: 47, // 'state 47'
    symbol: undefined,
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
    state: 12, // 'state 12'
    symbol: undefined,
  },
  // 'action 188'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 189'
  {
    op: 0, // shift
    state: 48, // 'state 48'
    symbol: undefined,
  },
  // 'action 190'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 191'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 192'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 193'
  {
    op: 0, // shift
    state: 17, // 'state 17'
    symbol: undefined,
  },
  // 'action 194'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 195'
  {
    op: 0, // shift
    state: 49, // 'state 49'
    symbol: undefined,
  },
  // 'action 196'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 197'
  {
    op: 0, // shift
    state: 20, // 'state 20'
    symbol: undefined,
  },
  // 'action 198'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 199'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 200'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 201'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 202'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 11, // Union
  },
  // 'action 203'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 11, // Union
  },
  // 'action 204'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 11, // Union
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
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 207'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 208'
  {
    op: 0, // shift
    state: 20, // 'state 20'
    symbol: undefined,
  },
  // 'action 209'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 11, // Union
  },
  // 'action 210'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 11, // Union
  },
  // 'action 211'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 11, // Union
  },
  // 'action 212'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 213'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 214'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 215'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 216'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 217'
  {
    op: 0, // shift
    state: 9, // 'state 9'
    symbol: undefined,
  },
  // 'action 218'
  {
    op: 0, // shift
    state: 50, // 'state 50'
    symbol: undefined,
  },
  // 'action 219'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 220'
  {
    op: 0, // shift
    state: 12, // 'state 12'
    symbol: undefined,
  },
  // 'action 221'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 222'
  {
    op: 0, // shift
    state: 51, // 'state 51'
    symbol: undefined,
  },
  // 'action 223'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 224'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 225'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 226'
  {
    op: 0, // shift
    state: 17, // 'state 17'
    symbol: undefined,
  },
  // 'action 227'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 228'
  {
    op: 0, // shift
    state: 52, // 'state 52'
    symbol: undefined,
  },
  // 'action 229'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 230'
  {
    op: 0, // shift
    state: 20, // 'state 20'
    symbol: undefined,
  },
  // 'action 231'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 232'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 233'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 234'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 235'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 236'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 237'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 238'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 239'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 240'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 241'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 242'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 243'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 244'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 245'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 246'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 247'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 248'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 249'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 250'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 251'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 252'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 253'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Atom
  },
  // 'action 254'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 255'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 256'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 257'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 258'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 259'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 260'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 261'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 262'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 263'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 264'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 265'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 266'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 267'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 268'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 269'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 270'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 271'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 272'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 273'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 274'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 275'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 276'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 277'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 278'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 279'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 280'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 281'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 282'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 283'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 284'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 285'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 286'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 287'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 288'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 289'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 290'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 291'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 292'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 293'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 294'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 295'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 296'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 297'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 298'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 299'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 300'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 301'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 302'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 303'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 304'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 305'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 306'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 307'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 308'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 309'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 310'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 311'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 312'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 313'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 314'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 315'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 316'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 317'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 318'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 319'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 320'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 321'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 322'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 323'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 324'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 325'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 326'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 327'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 328'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 329'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 330'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 331'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 332'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 333'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 334'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 335'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 336'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 337'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 338'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 339'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 340'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 341'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 342'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
  // 'action 343'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 10, // Group
  },
];
const actionsTable = new Uint16Array(992).fill(0xffff);
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
actionsTable[128] = 24; // 'state 8' -> CHARACTER -> shift -> 'action 24'
actionsTable[129] = 25; // 'state 8' -> UNION -> shift -> 'action 25'
actionsTable[130] = 26; // 'state 8' -> PAREN_OPEN -> shift -> 'action 26'
actionsTable[138] = 27; // 'state 8' -> Group -> shift -> 'action 27'
actionsTable[141] = 28; // 'state 8' -> Atom -> shift -> 'action 28'
actionsTable[133] = 29; // 'state 8' -> @par-gen.EOF -> reduce -> 'action 29'
actionsTable[32] = 30; // 'state 2' -> CHARACTER -> shift -> 'action 30'
actionsTable[34] = 31; // 'state 2' -> PAREN_OPEN -> shift -> 'action 31'
actionsTable[42] = 32; // 'state 2' -> Group -> shift -> 'action 32'
actionsTable[43] = 33; // 'state 2' -> Union -> shift -> 'action 33'
actionsTable[44] = 34; // 'state 2' -> Sequence -> shift -> 'action 34'
actionsTable[45] = 35; // 'state 2' -> Atom -> shift -> 'action 35'
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
actionsTable[192] = 52; // 'state 12' -> CHARACTER -> shift -> 'action 52'
actionsTable[194] = 53; // 'state 12' -> PAREN_OPEN -> shift -> 'action 53'
actionsTable[202] = 54; // 'state 12' -> Group -> shift -> 'action 54'
actionsTable[204] = 55; // 'state 12' -> Sequence -> shift -> 'action 55'
actionsTable[205] = 56; // 'state 12' -> Atom -> shift -> 'action 56'
actionsTable[240] = 57; // 'state 15' -> CHARACTER -> reduce -> 'action 57'
actionsTable[241] = 58; // 'state 15' -> UNION -> reduce -> 'action 58'
actionsTable[242] = 59; // 'state 15' -> PAREN_OPEN -> reduce -> 'action 59'
actionsTable[243] = 60; // 'state 15' -> PAREN_CLOSE -> reduce -> 'action 60'
actionsTable[245] = 61; // 'state 15' -> @par-gen.EOF -> reduce -> 'action 61'
actionsTable[180] = 62; // 'state 11' -> QUANTIFIER -> shift -> 'action 62'
actionsTable[176] = 63; // 'state 11' -> CHARACTER -> reduce -> 'action 63'
actionsTable[177] = 64; // 'state 11' -> UNION -> reduce -> 'action 64'
actionsTable[178] = 65; // 'state 11' -> PAREN_OPEN -> reduce -> 'action 65'
actionsTable[179] = 66; // 'state 11' -> PAREN_CLOSE -> reduce -> 'action 66'
actionsTable[181] = 67; // 'state 11' -> @par-gen.EOF -> reduce -> 'action 67'
actionsTable[228] = 68; // 'state 14' -> QUANTIFIER -> shift -> 'action 68'
actionsTable[224] = 69; // 'state 14' -> CHARACTER -> reduce -> 'action 69'
actionsTable[225] = 70; // 'state 14' -> UNION -> reduce -> 'action 70'
actionsTable[226] = 71; // 'state 14' -> PAREN_OPEN -> reduce -> 'action 71'
actionsTable[227] = 72; // 'state 14' -> PAREN_CLOSE -> reduce -> 'action 72'
actionsTable[229] = 73; // 'state 14' -> @par-gen.EOF -> reduce -> 'action 73'
actionsTable[208] = 74; // 'state 13' -> CHARACTER -> shift -> 'action 74'
actionsTable[210] = 75; // 'state 13' -> PAREN_OPEN -> shift -> 'action 75'
actionsTable[218] = 76; // 'state 13' -> Group -> shift -> 'action 76'
actionsTable[219] = 77; // 'state 13' -> Union -> shift -> 'action 77'
actionsTable[220] = 78; // 'state 13' -> Sequence -> shift -> 'action 78'
actionsTable[221] = 79; // 'state 13' -> Atom -> shift -> 'action 79'
actionsTable[272] = 80; // 'state 17' -> CHARACTER -> shift -> 'action 80'
actionsTable[274] = 81; // 'state 17' -> PAREN_OPEN -> shift -> 'action 81'
actionsTable[282] = 82; // 'state 17' -> Group -> shift -> 'action 82'
actionsTable[284] = 83; // 'state 17' -> Sequence -> shift -> 'action 83'
actionsTable[285] = 84; // 'state 17' -> Atom -> shift -> 'action 84'
actionsTable[320] = 85; // 'state 20' -> CHARACTER -> reduce -> 'action 85'
actionsTable[321] = 86; // 'state 20' -> UNION -> reduce -> 'action 86'
actionsTable[322] = 87; // 'state 20' -> PAREN_OPEN -> reduce -> 'action 87'
actionsTable[323] = 88; // 'state 20' -> PAREN_CLOSE -> reduce -> 'action 88'
actionsTable[325] = 89; // 'state 20' -> @par-gen.EOF -> reduce -> 'action 89'
actionsTable[260] = 90; // 'state 16' -> QUANTIFIER -> shift -> 'action 90'
actionsTable[256] = 91; // 'state 16' -> CHARACTER -> reduce -> 'action 91'
actionsTable[257] = 92; // 'state 16' -> UNION -> reduce -> 'action 92'
actionsTable[258] = 93; // 'state 16' -> PAREN_OPEN -> reduce -> 'action 93'
actionsTable[259] = 94; // 'state 16' -> PAREN_CLOSE -> reduce -> 'action 94'
actionsTable[261] = 95; // 'state 16' -> @par-gen.EOF -> reduce -> 'action 95'
actionsTable[308] = 96; // 'state 19' -> QUANTIFIER -> shift -> 'action 96'
actionsTable[304] = 97; // 'state 19' -> CHARACTER -> reduce -> 'action 97'
actionsTable[305] = 98; // 'state 19' -> UNION -> reduce -> 'action 98'
actionsTable[306] = 99; // 'state 19' -> PAREN_OPEN -> reduce -> 'action 99'
actionsTable[307] = 100; // 'state 19' -> PAREN_CLOSE -> reduce -> 'action 100'
actionsTable[309] = 101; // 'state 19' -> @par-gen.EOF -> reduce -> 'action 101'
actionsTable[288] = 102; // 'state 18' -> CHARACTER -> shift -> 'action 102'
actionsTable[290] = 103; // 'state 18' -> PAREN_OPEN -> shift -> 'action 103'
actionsTable[298] = 104; // 'state 18' -> Group -> shift -> 'action 104'
actionsTable[299] = 105; // 'state 18' -> Union -> shift -> 'action 105'
actionsTable[300] = 106; // 'state 18' -> Sequence -> shift -> 'action 106'
actionsTable[301] = 107; // 'state 18' -> Atom -> shift -> 'action 107'
actionsTable[369] = 108; // 'state 23' -> UNION -> shift -> 'action 108'
actionsTable[371] = 109; // 'state 23' -> PAREN_CLOSE -> shift -> 'action 109'
actionsTable[384] = 110; // 'state 24' -> CHARACTER -> shift -> 'action 110'
actionsTable[385] = 111; // 'state 24' -> UNION -> shift -> 'action 111'
actionsTable[386] = 112; // 'state 24' -> PAREN_OPEN -> shift -> 'action 112'
actionsTable[387] = 113; // 'state 24' -> PAREN_CLOSE -> shift -> 'action 113'
actionsTable[394] = 114; // 'state 24' -> Group -> shift -> 'action 114'
actionsTable[397] = 115; // 'state 24' -> Atom -> shift -> 'action 115'
actionsTable[400] = 116; // 'state 25' -> CHARACTER -> shift -> 'action 116'
actionsTable[401] = 117; // 'state 25' -> UNION -> shift -> 'action 117'
actionsTable[402] = 118; // 'state 25' -> PAREN_OPEN -> shift -> 'action 118'
actionsTable[403] = 119; // 'state 25' -> PAREN_CLOSE -> shift -> 'action 119'
actionsTable[410] = 120; // 'state 25' -> Group -> shift -> 'action 120'
actionsTable[413] = 121; // 'state 25' -> Atom -> shift -> 'action 121'
actionsTable[340] = 122; // 'state 21' -> QUANTIFIER -> shift -> 'action 122'
actionsTable[336] = 123; // 'state 21' -> CHARACTER -> reduce -> 'action 123'
actionsTable[337] = 124; // 'state 21' -> UNION -> reduce -> 'action 124'
actionsTable[338] = 125; // 'state 21' -> PAREN_OPEN -> reduce -> 'action 125'
actionsTable[339] = 126; // 'state 21' -> PAREN_CLOSE -> reduce -> 'action 126'
actionsTable[341] = 127; // 'state 21' -> @par-gen.EOF -> reduce -> 'action 127'
actionsTable[356] = 128; // 'state 22' -> QUANTIFIER -> shift -> 'action 128'
actionsTable[352] = 129; // 'state 22' -> CHARACTER -> reduce -> 'action 129'
actionsTable[353] = 130; // 'state 22' -> UNION -> reduce -> 'action 130'
actionsTable[354] = 131; // 'state 22' -> PAREN_OPEN -> reduce -> 'action 131'
actionsTable[355] = 132; // 'state 22' -> PAREN_CLOSE -> reduce -> 'action 132'
actionsTable[357] = 133; // 'state 22' -> @par-gen.EOF -> reduce -> 'action 133'
actionsTable[416] = 134; // 'state 26' -> CHARACTER -> reduce -> 'action 134'
actionsTable[417] = 135; // 'state 26' -> UNION -> reduce -> 'action 135'
actionsTable[418] = 136; // 'state 26' -> PAREN_OPEN -> reduce -> 'action 136'
actionsTable[419] = 137; // 'state 26' -> PAREN_CLOSE -> reduce -> 'action 137'
actionsTable[421] = 138; // 'state 26' -> @par-gen.EOF -> reduce -> 'action 138'
actionsTable[448] = 139; // 'state 28' -> CHARACTER -> shift -> 'action 139'
actionsTable[450] = 140; // 'state 28' -> PAREN_OPEN -> shift -> 'action 140'
actionsTable[458] = 141; // 'state 28' -> Group -> shift -> 'action 141'
actionsTable[461] = 142; // 'state 28' -> Atom -> shift -> 'action 142'
actionsTable[449] = 143; // 'state 28' -> UNION -> reduce -> 'action 143'
actionsTable[451] = 144; // 'state 28' -> PAREN_CLOSE -> reduce -> 'action 144'
actionsTable[453] = 145; // 'state 28' -> @par-gen.EOF -> reduce -> 'action 145'
actionsTable[464] = 146; // 'state 29' -> CHARACTER -> shift -> 'action 146'
actionsTable[466] = 147; // 'state 29' -> PAREN_OPEN -> shift -> 'action 147'
actionsTable[474] = 148; // 'state 29' -> Group -> shift -> 'action 148'
actionsTable[477] = 149; // 'state 29' -> Atom -> shift -> 'action 149'
actionsTable[465] = 150; // 'state 29' -> UNION -> reduce -> 'action 150'
actionsTable[467] = 151; // 'state 29' -> PAREN_CLOSE -> reduce -> 'action 151'
actionsTable[469] = 152; // 'state 29' -> @par-gen.EOF -> reduce -> 'action 152'
actionsTable[436] = 153; // 'state 27' -> QUANTIFIER -> shift -> 'action 153'
actionsTable[432] = 154; // 'state 27' -> CHARACTER -> reduce -> 'action 154'
actionsTable[433] = 155; // 'state 27' -> UNION -> reduce -> 'action 155'
actionsTable[434] = 156; // 'state 27' -> PAREN_OPEN -> reduce -> 'action 156'
actionsTable[435] = 157; // 'state 27' -> PAREN_CLOSE -> reduce -> 'action 157'
actionsTable[437] = 158; // 'state 27' -> @par-gen.EOF -> reduce -> 'action 158'
actionsTable[496] = 159; // 'state 31' -> CHARACTER -> shift -> 'action 159'
actionsTable[498] = 160; // 'state 31' -> PAREN_OPEN -> shift -> 'action 160'
actionsTable[506] = 161; // 'state 31' -> Group -> shift -> 'action 161'
actionsTable[509] = 162; // 'state 31' -> Atom -> shift -> 'action 162'
actionsTable[497] = 163; // 'state 31' -> UNION -> reduce -> 'action 163'
actionsTable[499] = 164; // 'state 31' -> PAREN_CLOSE -> reduce -> 'action 164'
actionsTable[501] = 165; // 'state 31' -> @par-gen.EOF -> reduce -> 'action 165'
actionsTable[512] = 166; // 'state 32' -> CHARACTER -> shift -> 'action 166'
actionsTable[514] = 167; // 'state 32' -> PAREN_OPEN -> shift -> 'action 167'
actionsTable[522] = 168; // 'state 32' -> Group -> shift -> 'action 168'
actionsTable[525] = 169; // 'state 32' -> Atom -> shift -> 'action 169'
actionsTable[513] = 170; // 'state 32' -> UNION -> reduce -> 'action 170'
actionsTable[515] = 171; // 'state 32' -> PAREN_CLOSE -> reduce -> 'action 171'
actionsTable[517] = 172; // 'state 32' -> @par-gen.EOF -> reduce -> 'action 172'
actionsTable[484] = 173; // 'state 30' -> QUANTIFIER -> shift -> 'action 173'
actionsTable[480] = 174; // 'state 30' -> CHARACTER -> reduce -> 'action 174'
actionsTable[481] = 175; // 'state 30' -> UNION -> reduce -> 'action 175'
actionsTable[482] = 176; // 'state 30' -> PAREN_OPEN -> reduce -> 'action 176'
actionsTable[483] = 177; // 'state 30' -> PAREN_CLOSE -> reduce -> 'action 177'
actionsTable[485] = 178; // 'state 30' -> @par-gen.EOF -> reduce -> 'action 178'
actionsTable[528] = 179; // 'state 33' -> CHARACTER -> reduce -> 'action 179'
actionsTable[529] = 180; // 'state 33' -> UNION -> reduce -> 'action 180'
actionsTable[530] = 181; // 'state 33' -> PAREN_OPEN -> reduce -> 'action 181'
actionsTable[531] = 182; // 'state 33' -> PAREN_CLOSE -> reduce -> 'action 182'
actionsTable[533] = 183; // 'state 33' -> @par-gen.EOF -> reduce -> 'action 183'
actionsTable[545] = 184; // 'state 34' -> UNION -> shift -> 'action 184'
actionsTable[547] = 185; // 'state 34' -> PAREN_CLOSE -> shift -> 'action 185'
actionsTable[560] = 186; // 'state 35' -> CHARACTER -> shift -> 'action 186'
actionsTable[561] = 187; // 'state 35' -> UNION -> shift -> 'action 187'
actionsTable[562] = 188; // 'state 35' -> PAREN_OPEN -> shift -> 'action 188'
actionsTable[563] = 189; // 'state 35' -> PAREN_CLOSE -> shift -> 'action 189'
actionsTable[570] = 190; // 'state 35' -> Group -> shift -> 'action 190'
actionsTable[573] = 191; // 'state 35' -> Atom -> shift -> 'action 191'
actionsTable[576] = 192; // 'state 36' -> CHARACTER -> shift -> 'action 192'
actionsTable[577] = 193; // 'state 36' -> UNION -> shift -> 'action 193'
actionsTable[578] = 194; // 'state 36' -> PAREN_OPEN -> shift -> 'action 194'
actionsTable[579] = 195; // 'state 36' -> PAREN_CLOSE -> shift -> 'action 195'
actionsTable[586] = 196; // 'state 36' -> Group -> shift -> 'action 196'
actionsTable[589] = 197; // 'state 36' -> Atom -> shift -> 'action 197'
actionsTable[592] = 198; // 'state 37' -> CHARACTER -> shift -> 'action 198'
actionsTable[594] = 199; // 'state 37' -> PAREN_OPEN -> shift -> 'action 199'
actionsTable[602] = 200; // 'state 37' -> Group -> shift -> 'action 200'
actionsTable[605] = 201; // 'state 37' -> Atom -> shift -> 'action 201'
actionsTable[593] = 202; // 'state 37' -> UNION -> reduce -> 'action 202'
actionsTable[595] = 203; // 'state 37' -> PAREN_CLOSE -> reduce -> 'action 203'
actionsTable[597] = 204; // 'state 37' -> @par-gen.EOF -> reduce -> 'action 204'
actionsTable[608] = 205; // 'state 38' -> CHARACTER -> shift -> 'action 205'
actionsTable[610] = 206; // 'state 38' -> PAREN_OPEN -> shift -> 'action 206'
actionsTable[618] = 207; // 'state 38' -> Group -> shift -> 'action 207'
actionsTable[621] = 208; // 'state 38' -> Atom -> shift -> 'action 208'
actionsTable[609] = 209; // 'state 38' -> UNION -> reduce -> 'action 209'
actionsTable[611] = 210; // 'state 38' -> PAREN_CLOSE -> reduce -> 'action 210'
actionsTable[613] = 211; // 'state 38' -> @par-gen.EOF -> reduce -> 'action 211'
actionsTable[624] = 212; // 'state 39' -> CHARACTER -> reduce -> 'action 212'
actionsTable[625] = 213; // 'state 39' -> UNION -> reduce -> 'action 213'
actionsTable[626] = 214; // 'state 39' -> PAREN_OPEN -> reduce -> 'action 214'
actionsTable[627] = 215; // 'state 39' -> PAREN_CLOSE -> reduce -> 'action 215'
actionsTable[629] = 216; // 'state 39' -> @par-gen.EOF -> reduce -> 'action 216'
actionsTable[641] = 217; // 'state 40' -> UNION -> shift -> 'action 217'
actionsTable[643] = 218; // 'state 40' -> PAREN_CLOSE -> shift -> 'action 218'
actionsTable[656] = 219; // 'state 41' -> CHARACTER -> shift -> 'action 219'
actionsTable[657] = 220; // 'state 41' -> UNION -> shift -> 'action 220'
actionsTable[658] = 221; // 'state 41' -> PAREN_OPEN -> shift -> 'action 221'
actionsTable[659] = 222; // 'state 41' -> PAREN_CLOSE -> shift -> 'action 222'
actionsTable[666] = 223; // 'state 41' -> Group -> shift -> 'action 223'
actionsTable[669] = 224; // 'state 41' -> Atom -> shift -> 'action 224'
actionsTable[672] = 225; // 'state 42' -> CHARACTER -> shift -> 'action 225'
actionsTable[673] = 226; // 'state 42' -> UNION -> shift -> 'action 226'
actionsTable[674] = 227; // 'state 42' -> PAREN_OPEN -> shift -> 'action 227'
actionsTable[675] = 228; // 'state 42' -> PAREN_CLOSE -> shift -> 'action 228'
actionsTable[682] = 229; // 'state 42' -> Group -> shift -> 'action 229'
actionsTable[685] = 230; // 'state 42' -> Atom -> shift -> 'action 230'
actionsTable[692] = 231; // 'state 43' -> QUANTIFIER -> reduce -> 'action 231'
actionsTable[688] = 232; // 'state 43' -> CHARACTER -> reduce -> 'action 232'
actionsTable[689] = 233; // 'state 43' -> UNION -> reduce -> 'action 233'
actionsTable[690] = 234; // 'state 43' -> PAREN_OPEN -> reduce -> 'action 234'
actionsTable[691] = 235; // 'state 43' -> PAREN_CLOSE -> reduce -> 'action 235'
actionsTable[693] = 236; // 'state 43' -> @par-gen.EOF -> reduce -> 'action 236'
actionsTable[708] = 237; // 'state 44' -> QUANTIFIER -> reduce -> 'action 237'
actionsTable[704] = 238; // 'state 44' -> CHARACTER -> reduce -> 'action 238'
actionsTable[705] = 239; // 'state 44' -> UNION -> reduce -> 'action 239'
actionsTable[706] = 240; // 'state 44' -> PAREN_OPEN -> reduce -> 'action 240'
actionsTable[707] = 241; // 'state 44' -> PAREN_CLOSE -> reduce -> 'action 241'
actionsTable[709] = 242; // 'state 44' -> @par-gen.EOF -> reduce -> 'action 242'
actionsTable[724] = 243; // 'state 45' -> QUANTIFIER -> reduce -> 'action 243'
actionsTable[720] = 244; // 'state 45' -> CHARACTER -> reduce -> 'action 244'
actionsTable[721] = 245; // 'state 45' -> UNION -> reduce -> 'action 245'
actionsTable[722] = 246; // 'state 45' -> PAREN_OPEN -> reduce -> 'action 246'
actionsTable[723] = 247; // 'state 45' -> PAREN_CLOSE -> reduce -> 'action 247'
actionsTable[725] = 248; // 'state 45' -> @par-gen.EOF -> reduce -> 'action 248'
actionsTable[736] = 249; // 'state 46' -> CHARACTER -> reduce -> 'action 249'
actionsTable[737] = 250; // 'state 46' -> UNION -> reduce -> 'action 250'
actionsTable[738] = 251; // 'state 46' -> PAREN_OPEN -> reduce -> 'action 251'
actionsTable[739] = 252; // 'state 46' -> PAREN_CLOSE -> reduce -> 'action 252'
actionsTable[741] = 253; // 'state 46' -> @par-gen.EOF -> reduce -> 'action 253'
actionsTable[756] = 254; // 'state 47' -> QUANTIFIER -> reduce -> 'action 254'
actionsTable[752] = 255; // 'state 47' -> CHARACTER -> reduce -> 'action 255'
actionsTable[753] = 256; // 'state 47' -> UNION -> reduce -> 'action 256'
actionsTable[754] = 257; // 'state 47' -> PAREN_OPEN -> reduce -> 'action 257'
actionsTable[755] = 258; // 'state 47' -> PAREN_CLOSE -> reduce -> 'action 258'
actionsTable[757] = 259; // 'state 47' -> @par-gen.EOF -> reduce -> 'action 259'
actionsTable[772] = 260; // 'state 48' -> QUANTIFIER -> reduce -> 'action 260'
actionsTable[768] = 261; // 'state 48' -> CHARACTER -> reduce -> 'action 261'
actionsTable[769] = 262; // 'state 48' -> UNION -> reduce -> 'action 262'
actionsTable[770] = 263; // 'state 48' -> PAREN_OPEN -> reduce -> 'action 263'
actionsTable[771] = 264; // 'state 48' -> PAREN_CLOSE -> reduce -> 'action 264'
actionsTable[773] = 265; // 'state 48' -> @par-gen.EOF -> reduce -> 'action 265'
actionsTable[788] = 266; // 'state 49' -> QUANTIFIER -> reduce -> 'action 266'
actionsTable[784] = 267; // 'state 49' -> CHARACTER -> reduce -> 'action 267'
actionsTable[785] = 268; // 'state 49' -> UNION -> reduce -> 'action 268'
actionsTable[786] = 269; // 'state 49' -> PAREN_OPEN -> reduce -> 'action 269'
actionsTable[787] = 270; // 'state 49' -> PAREN_CLOSE -> reduce -> 'action 270'
actionsTable[789] = 271; // 'state 49' -> @par-gen.EOF -> reduce -> 'action 271'
actionsTable[804] = 272; // 'state 50' -> QUANTIFIER -> reduce -> 'action 272'
actionsTable[800] = 273; // 'state 50' -> CHARACTER -> reduce -> 'action 273'
actionsTable[801] = 274; // 'state 50' -> UNION -> reduce -> 'action 274'
actionsTable[802] = 275; // 'state 50' -> PAREN_OPEN -> reduce -> 'action 275'
actionsTable[803] = 276; // 'state 50' -> PAREN_CLOSE -> reduce -> 'action 276'
actionsTable[805] = 277; // 'state 50' -> @par-gen.EOF -> reduce -> 'action 277'
actionsTable[820] = 278; // 'state 51' -> QUANTIFIER -> reduce -> 'action 278'
actionsTable[816] = 279; // 'state 51' -> CHARACTER -> reduce -> 'action 279'
actionsTable[817] = 280; // 'state 51' -> UNION -> reduce -> 'action 280'
actionsTable[818] = 281; // 'state 51' -> PAREN_OPEN -> reduce -> 'action 281'
actionsTable[819] = 282; // 'state 51' -> PAREN_CLOSE -> reduce -> 'action 282'
actionsTable[821] = 283; // 'state 51' -> @par-gen.EOF -> reduce -> 'action 283'
actionsTable[836] = 284; // 'state 52' -> QUANTIFIER -> reduce -> 'action 284'
actionsTable[832] = 285; // 'state 52' -> CHARACTER -> reduce -> 'action 285'
actionsTable[833] = 286; // 'state 52' -> UNION -> reduce -> 'action 286'
actionsTable[834] = 287; // 'state 52' -> PAREN_OPEN -> reduce -> 'action 287'
actionsTable[835] = 288; // 'state 52' -> PAREN_CLOSE -> reduce -> 'action 288'
actionsTable[837] = 289; // 'state 52' -> @par-gen.EOF -> reduce -> 'action 289'
actionsTable[848] = 290; // 'state 53' -> CHARACTER -> reduce -> 'action 290'
actionsTable[849] = 291; // 'state 53' -> UNION -> reduce -> 'action 291'
actionsTable[850] = 292; // 'state 53' -> PAREN_OPEN -> reduce -> 'action 292'
actionsTable[851] = 293; // 'state 53' -> PAREN_CLOSE -> reduce -> 'action 293'
actionsTable[852] = 294; // 'state 53' -> QUANTIFIER -> reduce -> 'action 294'
actionsTable[853] = 295; // 'state 53' -> @par-gen.EOF -> reduce -> 'action 295'
actionsTable[864] = 296; // 'state 54' -> CHARACTER -> reduce -> 'action 296'
actionsTable[865] = 297; // 'state 54' -> UNION -> reduce -> 'action 297'
actionsTable[866] = 298; // 'state 54' -> PAREN_OPEN -> reduce -> 'action 298'
actionsTable[867] = 299; // 'state 54' -> PAREN_CLOSE -> reduce -> 'action 299'
actionsTable[868] = 300; // 'state 54' -> QUANTIFIER -> reduce -> 'action 300'
actionsTable[869] = 301; // 'state 54' -> @par-gen.EOF -> reduce -> 'action 301'
actionsTable[880] = 302; // 'state 55' -> CHARACTER -> reduce -> 'action 302'
actionsTable[881] = 303; // 'state 55' -> UNION -> reduce -> 'action 303'
actionsTable[882] = 304; // 'state 55' -> PAREN_OPEN -> reduce -> 'action 304'
actionsTable[883] = 305; // 'state 55' -> PAREN_CLOSE -> reduce -> 'action 305'
actionsTable[884] = 306; // 'state 55' -> QUANTIFIER -> reduce -> 'action 306'
actionsTable[885] = 307; // 'state 55' -> @par-gen.EOF -> reduce -> 'action 307'
actionsTable[896] = 308; // 'state 56' -> CHARACTER -> reduce -> 'action 308'
actionsTable[897] = 309; // 'state 56' -> UNION -> reduce -> 'action 309'
actionsTable[898] = 310; // 'state 56' -> PAREN_OPEN -> reduce -> 'action 310'
actionsTable[899] = 311; // 'state 56' -> PAREN_CLOSE -> reduce -> 'action 311'
actionsTable[900] = 312; // 'state 56' -> QUANTIFIER -> reduce -> 'action 312'
actionsTable[901] = 313; // 'state 56' -> @par-gen.EOF -> reduce -> 'action 313'
actionsTable[912] = 314; // 'state 57' -> CHARACTER -> reduce -> 'action 314'
actionsTable[913] = 315; // 'state 57' -> UNION -> reduce -> 'action 315'
actionsTable[914] = 316; // 'state 57' -> PAREN_OPEN -> reduce -> 'action 316'
actionsTable[915] = 317; // 'state 57' -> PAREN_CLOSE -> reduce -> 'action 317'
actionsTable[916] = 318; // 'state 57' -> QUANTIFIER -> reduce -> 'action 318'
actionsTable[917] = 319; // 'state 57' -> @par-gen.EOF -> reduce -> 'action 319'
actionsTable[928] = 320; // 'state 58' -> CHARACTER -> reduce -> 'action 320'
actionsTable[929] = 321; // 'state 58' -> UNION -> reduce -> 'action 321'
actionsTable[930] = 322; // 'state 58' -> PAREN_OPEN -> reduce -> 'action 322'
actionsTable[931] = 323; // 'state 58' -> PAREN_CLOSE -> reduce -> 'action 323'
actionsTable[932] = 324; // 'state 58' -> QUANTIFIER -> reduce -> 'action 324'
actionsTable[933] = 325; // 'state 58' -> @par-gen.EOF -> reduce -> 'action 325'
actionsTable[944] = 326; // 'state 59' -> CHARACTER -> reduce -> 'action 326'
actionsTable[945] = 327; // 'state 59' -> UNION -> reduce -> 'action 327'
actionsTable[946] = 328; // 'state 59' -> PAREN_OPEN -> reduce -> 'action 328'
actionsTable[947] = 329; // 'state 59' -> PAREN_CLOSE -> reduce -> 'action 329'
actionsTable[948] = 330; // 'state 59' -> QUANTIFIER -> reduce -> 'action 330'
actionsTable[949] = 331; // 'state 59' -> @par-gen.EOF -> reduce -> 'action 331'
actionsTable[960] = 332; // 'state 60' -> CHARACTER -> reduce -> 'action 332'
actionsTable[961] = 333; // 'state 60' -> UNION -> reduce -> 'action 333'
actionsTable[962] = 334; // 'state 60' -> PAREN_OPEN -> reduce -> 'action 334'
actionsTable[963] = 335; // 'state 60' -> PAREN_CLOSE -> reduce -> 'action 335'
actionsTable[964] = 336; // 'state 60' -> QUANTIFIER -> reduce -> 'action 336'
actionsTable[965] = 337; // 'state 60' -> @par-gen.EOF -> reduce -> 'action 337'
actionsTable[976] = 338; // 'state 61' -> CHARACTER -> reduce -> 'action 338'
actionsTable[977] = 339; // 'state 61' -> UNION -> reduce -> 'action 339'
actionsTable[978] = 340; // 'state 61' -> PAREN_OPEN -> reduce -> 'action 340'
actionsTable[979] = 341; // 'state 61' -> PAREN_CLOSE -> reduce -> 'action 341'
actionsTable[980] = 342; // 'state 61' -> QUANTIFIER -> reduce -> 'action 342'
actionsTable[981] = 343; // 'state 61' -> @par-gen.EOF -> reduce -> 'action 343'

const gotoTable = new Uint16Array(992).fill(0xffff);
gotoTable[8] = 3; // 'state 3'
gotoTable[9] = 4; // 'state 4'
gotoTable[11] = 6; // 'state 6'
gotoTable[10] = 5; // 'state 5'
gotoTable[12] = 7; // 'state 7'
gotoTable[13] = 8; // 'state 8'
gotoTable[125] = 15; // 'state 15'
gotoTable[122] = 14; // 'state 14'
gotoTable[141] = 20; // 'state 20'
gotoTable[138] = 19; // 'state 19'
gotoTable[43] = 23; // 'state 23'
gotoTable[44] = 24; // 'state 24'
gotoTable[45] = 25; // 'state 25'
gotoTable[42] = 22; // 'state 22'
gotoTable[156] = 28; // 'state 28'
gotoTable[157] = 29; // 'state 29'
gotoTable[154] = 27; // 'state 27'
gotoTable[204] = 31; // 'state 31'
gotoTable[205] = 32; // 'state 32'
gotoTable[202] = 30; // 'state 30'
gotoTable[219] = 34; // 'state 34'
gotoTable[220] = 35; // 'state 35'
gotoTable[221] = 36; // 'state 36'
gotoTable[218] = 14; // 'state 14'
gotoTable[284] = 37; // 'state 37'
gotoTable[285] = 38; // 'state 38'
gotoTable[282] = 14; // 'state 14'
gotoTable[299] = 40; // 'state 40'
gotoTable[300] = 41; // 'state 41'
gotoTable[301] = 42; // 'state 42'
gotoTable[298] = 14; // 'state 14'
gotoTable[397] = 15; // 'state 15'
gotoTable[394] = 14; // 'state 14'
gotoTable[413] = 20; // 'state 20'
gotoTable[410] = 14; // 'state 14'
gotoTable[461] = 15; // 'state 15'
gotoTable[458] = 14; // 'state 14'
gotoTable[477] = 20; // 'state 20'
gotoTable[474] = 14; // 'state 14'
gotoTable[509] = 15; // 'state 15'
gotoTable[506] = 14; // 'state 14'
gotoTable[525] = 20; // 'state 20'
gotoTable[522] = 14; // 'state 14'
gotoTable[573] = 15; // 'state 15'
gotoTable[570] = 14; // 'state 14'
gotoTable[589] = 20; // 'state 20'
gotoTable[586] = 14; // 'state 14'
gotoTable[605] = 15; // 'state 15'
gotoTable[602] = 14; // 'state 14'
gotoTable[621] = 20; // 'state 20'
gotoTable[618] = 14; // 'state 14'
gotoTable[669] = 15; // 'state 15'
gotoTable[666] = 14; // 'state 14'
gotoTable[685] = 20; // 'state 20'
gotoTable[682] = 14; // 'state 14'

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
            lookahead * 62 * 16 + currentState * 16 + action.symbol
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
