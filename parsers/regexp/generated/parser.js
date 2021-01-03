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
Atom := Character;
Atom := Character QUANTIFIER;
Atom := Group;
Atom := Group QUANTIFIER;
Atom := CharacterClass;
Atom := CharacterClass QUANTIFIER;
Group := PAREN_OPEN Union PAREN_CLOSE;
Group := PAREN_OPEN Sequence PAREN_CLOSE;
Group := PAREN_OPEN Atom PAREN_CLOSE;
CharacterClass := BRACKET_OPEN CharacterClassCharacters BRACKET_CLOSE;
CharacterClass := BRACKET_OPEN DASH BRACKET_CLOSE;
CharacterClass := BRACKET_OPEN DASH CharacterClassCharacters BRACKET_CLOSE;
CharacterClassCharacters := CHARACTER;
CharacterClassCharacters := CharacterClassCharacters CHARACTER;
CharacterClassCharacters := CharacterClassRange;
CharacterClassCharacters := CharacterClassCharacters CharacterClassRange;
CharacterClassRange := CHARACTER DASH CHARACTER;
Character := CHARACTER;
Character := DASH;
      */

const reducerStates = new Uint8Array(118784);
reducerStates[52] = 1; // 'state 1' -> Character -> CHARACTER
reducerStates[3764] = 1; // 'state 1' -> Character -> UNION
reducerStates[7476] = 1; // 'state 1' -> Character -> PAREN_OPEN
reducerStates[11188] = 1; // 'state 1' -> Character -> PAREN_CLOSE
reducerStates[14900] = 1; // 'state 1' -> Character -> QUANTIFIER
reducerStates[18612] = 1; // 'state 1' -> Character -> BRACKET_OPEN
reducerStates[26036] = 1; // 'state 1' -> Character -> DASH
reducerStates[29748] = 1; // 'state 1' -> Character -> @par-gen.EOF
reducerStates[148] = 1; // 'state 4' -> Character -> CHARACTER
reducerStates[3860] = 1; // 'state 4' -> Character -> UNION
reducerStates[7572] = 1; // 'state 4' -> Character -> PAREN_OPEN
reducerStates[11284] = 1; // 'state 4' -> Character -> PAREN_CLOSE
reducerStates[14996] = 1; // 'state 4' -> Character -> QUANTIFIER
reducerStates[18708] = 1; // 'state 4' -> Character -> BRACKET_OPEN
reducerStates[26132] = 1; // 'state 4' -> Character -> DASH
reducerStates[29844] = 1; // 'state 4' -> Character -> @par-gen.EOF
reducerStates[29866] = 1; // 'state 5' -> S -> @par-gen.EOF
reducerStates[29899] = 1; // 'state 6' -> RegExp -> @par-gen.EOF
reducerStates[29932] = 1; // 'state 7' -> Expression -> @par-gen.EOF
reducerStates[29964] = 1; // 'state 8' -> Expression -> @par-gen.EOF
reducerStates[29996] = 1; // 'state 9' -> Expression -> @par-gen.EOF
reducerStates[335] = 1; // 'state 10' -> Atom -> CHARACTER
reducerStates[4047] = 1; // 'state 10' -> Atom -> UNION
reducerStates[7759] = 1; // 'state 10' -> Atom -> PAREN_OPEN
reducerStates[11471] = 1; // 'state 10' -> Atom -> PAREN_CLOSE
reducerStates[18895] = 1; // 'state 10' -> Atom -> BRACKET_OPEN
reducerStates[26319] = 1; // 'state 10' -> Atom -> DASH
reducerStates[30031] = 1; // 'state 10' -> Atom -> @par-gen.EOF
reducerStates[367] = 1; // 'state 11' -> Atom -> CHARACTER
reducerStates[4079] = 1; // 'state 11' -> Atom -> UNION
reducerStates[7791] = 1; // 'state 11' -> Atom -> PAREN_OPEN
reducerStates[11503] = 1; // 'state 11' -> Atom -> PAREN_CLOSE
reducerStates[18927] = 1; // 'state 11' -> Atom -> BRACKET_OPEN
reducerStates[26351] = 1; // 'state 11' -> Atom -> DASH
reducerStates[30063] = 1; // 'state 11' -> Atom -> @par-gen.EOF
reducerStates[399] = 1; // 'state 12' -> Atom -> CHARACTER
reducerStates[4111] = 1; // 'state 12' -> Atom -> UNION
reducerStates[7823] = 1; // 'state 12' -> Atom -> PAREN_OPEN
reducerStates[11535] = 1; // 'state 12' -> Atom -> PAREN_CLOSE
reducerStates[18959] = 1; // 'state 12' -> Atom -> BRACKET_OPEN
reducerStates[26383] = 1; // 'state 12' -> Atom -> DASH
reducerStates[30095] = 1; // 'state 12' -> Atom -> @par-gen.EOF
reducerStates[468] = 1; // 'state 14' -> Character -> CHARACTER
reducerStates[4180] = 1; // 'state 14' -> Character -> UNION
reducerStates[7892] = 1; // 'state 14' -> Character -> PAREN_OPEN
reducerStates[11604] = 1; // 'state 14' -> Character -> PAREN_CLOSE
reducerStates[15316] = 1; // 'state 14' -> Character -> QUANTIFIER
reducerStates[19028] = 1; // 'state 14' -> Character -> BRACKET_OPEN
reducerStates[26452] = 1; // 'state 14' -> Character -> DASH
reducerStates[30164] = 1; // 'state 14' -> Character -> @par-gen.EOF
reducerStates[596] = 1; // 'state 18' -> Character -> CHARACTER
reducerStates[4308] = 1; // 'state 18' -> Character -> UNION
reducerStates[8020] = 1; // 'state 18' -> Character -> PAREN_OPEN
reducerStates[11732] = 1; // 'state 18' -> Character -> PAREN_CLOSE
reducerStates[15444] = 1; // 'state 18' -> Character -> QUANTIFIER
reducerStates[19156] = 1; // 'state 18' -> Character -> BRACKET_OPEN
reducerStates[26580] = 1; // 'state 18' -> Character -> DASH
reducerStates[30292] = 1; // 'state 18' -> Character -> @par-gen.EOF
reducerStates[622] = 2; // 'state 19' -> Sequence -> CHARACTER
reducerStates[4334] = 2; // 'state 19' -> Sequence -> UNION
reducerStates[8046] = 2; // 'state 19' -> Sequence -> PAREN_OPEN
reducerStates[11758] = 2; // 'state 19' -> Sequence -> PAREN_CLOSE
reducerStates[19182] = 2; // 'state 19' -> Sequence -> BRACKET_OPEN
reducerStates[26606] = 2; // 'state 19' -> Sequence -> DASH
reducerStates[30318] = 2; // 'state 19' -> Sequence -> @par-gen.EOF
reducerStates[655] = 1; // 'state 20' -> Atom -> CHARACTER
reducerStates[4367] = 1; // 'state 20' -> Atom -> UNION
reducerStates[8079] = 1; // 'state 20' -> Atom -> PAREN_OPEN
reducerStates[11791] = 1; // 'state 20' -> Atom -> PAREN_CLOSE
reducerStates[19215] = 1; // 'state 20' -> Atom -> BRACKET_OPEN
reducerStates[26639] = 1; // 'state 20' -> Atom -> DASH
reducerStates[30351] = 1; // 'state 20' -> Atom -> @par-gen.EOF
reducerStates[687] = 1; // 'state 21' -> Atom -> CHARACTER
reducerStates[4399] = 1; // 'state 21' -> Atom -> UNION
reducerStates[8111] = 1; // 'state 21' -> Atom -> PAREN_OPEN
reducerStates[11823] = 1; // 'state 21' -> Atom -> PAREN_CLOSE
reducerStates[19247] = 1; // 'state 21' -> Atom -> BRACKET_OPEN
reducerStates[26671] = 1; // 'state 21' -> Atom -> DASH
reducerStates[30383] = 1; // 'state 21' -> Atom -> @par-gen.EOF
reducerStates[719] = 1; // 'state 22' -> Atom -> CHARACTER
reducerStates[4431] = 1; // 'state 22' -> Atom -> UNION
reducerStates[8143] = 1; // 'state 22' -> Atom -> PAREN_OPEN
reducerStates[11855] = 1; // 'state 22' -> Atom -> PAREN_CLOSE
reducerStates[19279] = 1; // 'state 22' -> Atom -> BRACKET_OPEN
reducerStates[26703] = 1; // 'state 22' -> Atom -> DASH
reducerStates[30415] = 1; // 'state 22' -> Atom -> @par-gen.EOF
reducerStates[756] = 1; // 'state 23' -> Character -> CHARACTER
reducerStates[4468] = 1; // 'state 23' -> Character -> UNION
reducerStates[8180] = 1; // 'state 23' -> Character -> PAREN_OPEN
reducerStates[11892] = 1; // 'state 23' -> Character -> PAREN_CLOSE
reducerStates[15604] = 1; // 'state 23' -> Character -> QUANTIFIER
reducerStates[19316] = 1; // 'state 23' -> Character -> BRACKET_OPEN
reducerStates[26740] = 1; // 'state 23' -> Character -> DASH
reducerStates[30452] = 1; // 'state 23' -> Character -> @par-gen.EOF
reducerStates[884] = 1; // 'state 27' -> Character -> CHARACTER
reducerStates[4596] = 1; // 'state 27' -> Character -> UNION
reducerStates[8308] = 1; // 'state 27' -> Character -> PAREN_OPEN
reducerStates[12020] = 1; // 'state 27' -> Character -> PAREN_CLOSE
reducerStates[15732] = 1; // 'state 27' -> Character -> QUANTIFIER
reducerStates[19444] = 1; // 'state 27' -> Character -> BRACKET_OPEN
reducerStates[26868] = 1; // 'state 27' -> Character -> DASH
reducerStates[30580] = 1; // 'state 27' -> Character -> @par-gen.EOF
reducerStates[910] = 2; // 'state 28' -> Sequence -> CHARACTER
reducerStates[4622] = 2; // 'state 28' -> Sequence -> UNION
reducerStates[8334] = 2; // 'state 28' -> Sequence -> PAREN_OPEN
reducerStates[12046] = 2; // 'state 28' -> Sequence -> PAREN_CLOSE
reducerStates[19470] = 2; // 'state 28' -> Sequence -> BRACKET_OPEN
reducerStates[26894] = 2; // 'state 28' -> Sequence -> DASH
reducerStates[30606] = 2; // 'state 28' -> Sequence -> @par-gen.EOF
reducerStates[943] = 1; // 'state 29' -> Atom -> CHARACTER
reducerStates[4655] = 1; // 'state 29' -> Atom -> UNION
reducerStates[8367] = 1; // 'state 29' -> Atom -> PAREN_OPEN
reducerStates[12079] = 1; // 'state 29' -> Atom -> PAREN_CLOSE
reducerStates[19503] = 1; // 'state 29' -> Atom -> BRACKET_OPEN
reducerStates[26927] = 1; // 'state 29' -> Atom -> DASH
reducerStates[30639] = 1; // 'state 29' -> Atom -> @par-gen.EOF
reducerStates[975] = 1; // 'state 30' -> Atom -> CHARACTER
reducerStates[4687] = 1; // 'state 30' -> Atom -> UNION
reducerStates[8399] = 1; // 'state 30' -> Atom -> PAREN_OPEN
reducerStates[12111] = 1; // 'state 30' -> Atom -> PAREN_CLOSE
reducerStates[19535] = 1; // 'state 30' -> Atom -> BRACKET_OPEN
reducerStates[26959] = 1; // 'state 30' -> Atom -> DASH
reducerStates[30671] = 1; // 'state 30' -> Atom -> @par-gen.EOF
reducerStates[1007] = 1; // 'state 31' -> Atom -> CHARACTER
reducerStates[4719] = 1; // 'state 31' -> Atom -> UNION
reducerStates[8431] = 1; // 'state 31' -> Atom -> PAREN_OPEN
reducerStates[12143] = 1; // 'state 31' -> Atom -> PAREN_CLOSE
reducerStates[19567] = 1; // 'state 31' -> Atom -> BRACKET_OPEN
reducerStates[26991] = 1; // 'state 31' -> Atom -> DASH
reducerStates[30703] = 1; // 'state 31' -> Atom -> @par-gen.EOF
reducerStates[1039] = 2; // 'state 32' -> Atom -> CHARACTER
reducerStates[4751] = 2; // 'state 32' -> Atom -> UNION
reducerStates[8463] = 2; // 'state 32' -> Atom -> PAREN_OPEN
reducerStates[12175] = 2; // 'state 32' -> Atom -> PAREN_CLOSE
reducerStates[19599] = 2; // 'state 32' -> Atom -> BRACKET_OPEN
reducerStates[27023] = 2; // 'state 32' -> Atom -> DASH
reducerStates[30735] = 2; // 'state 32' -> Atom -> @par-gen.EOF
reducerStates[1071] = 2; // 'state 33' -> Atom -> CHARACTER
reducerStates[4783] = 2; // 'state 33' -> Atom -> UNION
reducerStates[8495] = 2; // 'state 33' -> Atom -> PAREN_OPEN
reducerStates[12207] = 2; // 'state 33' -> Atom -> PAREN_CLOSE
reducerStates[19631] = 2; // 'state 33' -> Atom -> BRACKET_OPEN
reducerStates[27055] = 2; // 'state 33' -> Atom -> DASH
reducerStates[30767] = 2; // 'state 33' -> Atom -> @par-gen.EOF
reducerStates[1103] = 2; // 'state 34' -> Atom -> CHARACTER
reducerStates[4815] = 2; // 'state 34' -> Atom -> UNION
reducerStates[8527] = 2; // 'state 34' -> Atom -> PAREN_OPEN
reducerStates[12239] = 2; // 'state 34' -> Atom -> PAREN_CLOSE
reducerStates[19663] = 2; // 'state 34' -> Atom -> BRACKET_OPEN
reducerStates[27087] = 2; // 'state 34' -> Atom -> DASH
reducerStates[30799] = 2; // 'state 34' -> Atom -> @par-gen.EOF
reducerStates[1266] = 1; // 'state 39' -> CharacterClassCharacters -> CHARACTER
reducerStates[23538] = 1; // 'state 39' -> CharacterClassCharacters -> BRACKET_CLOSE
reducerStates[1362] = 1; // 'state 42' -> CharacterClassCharacters -> CHARACTER
reducerStates[23634] = 1; // 'state 42' -> CharacterClassCharacters -> BRACKET_CLOSE
reducerStates[5101] = 3; // 'state 43' -> Union -> UNION
reducerStates[12525] = 3; // 'state 43' -> Union -> PAREN_CLOSE
reducerStates[31085] = 3; // 'state 43' -> Union -> @par-gen.EOF
reducerStates[5133] = 3; // 'state 44' -> Union -> UNION
reducerStates[12557] = 3; // 'state 44' -> Union -> PAREN_CLOSE
reducerStates[31117] = 3; // 'state 44' -> Union -> @par-gen.EOF
reducerStates[5165] = 3; // 'state 45' -> Union -> UNION
reducerStates[12589] = 3; // 'state 45' -> Union -> PAREN_CLOSE
reducerStates[31149] = 3; // 'state 45' -> Union -> @par-gen.EOF
reducerStates[5197] = 3; // 'state 46' -> Union -> UNION
reducerStates[12621] = 3; // 'state 46' -> Union -> PAREN_CLOSE
reducerStates[31181] = 3; // 'state 46' -> Union -> @par-gen.EOF
reducerStates[1519] = 2; // 'state 47' -> Atom -> CHARACTER
reducerStates[5231] = 2; // 'state 47' -> Atom -> UNION
reducerStates[8943] = 2; // 'state 47' -> Atom -> PAREN_OPEN
reducerStates[12655] = 2; // 'state 47' -> Atom -> PAREN_CLOSE
reducerStates[20079] = 2; // 'state 47' -> Atom -> BRACKET_OPEN
reducerStates[27503] = 2; // 'state 47' -> Atom -> DASH
reducerStates[31215] = 2; // 'state 47' -> Atom -> @par-gen.EOF
reducerStates[1551] = 2; // 'state 48' -> Atom -> CHARACTER
reducerStates[5263] = 2; // 'state 48' -> Atom -> UNION
reducerStates[8975] = 2; // 'state 48' -> Atom -> PAREN_OPEN
reducerStates[12687] = 2; // 'state 48' -> Atom -> PAREN_CLOSE
reducerStates[20111] = 2; // 'state 48' -> Atom -> BRACKET_OPEN
reducerStates[27535] = 2; // 'state 48' -> Atom -> DASH
reducerStates[31247] = 2; // 'state 48' -> Atom -> @par-gen.EOF
reducerStates[1583] = 2; // 'state 49' -> Atom -> CHARACTER
reducerStates[5295] = 2; // 'state 49' -> Atom -> UNION
reducerStates[9007] = 2; // 'state 49' -> Atom -> PAREN_OPEN
reducerStates[12719] = 2; // 'state 49' -> Atom -> PAREN_CLOSE
reducerStates[20143] = 2; // 'state 49' -> Atom -> BRACKET_OPEN
reducerStates[27567] = 2; // 'state 49' -> Atom -> DASH
reducerStates[31279] = 2; // 'state 49' -> Atom -> @par-gen.EOF
reducerStates[1714] = 1; // 'state 53' -> CharacterClassCharacters -> CHARACTER
reducerStates[23986] = 1; // 'state 53' -> CharacterClassCharacters -> BRACKET_CLOSE
reducerStates[1810] = 1; // 'state 56' -> CharacterClassCharacters -> CHARACTER
reducerStates[24082] = 1; // 'state 56' -> CharacterClassCharacters -> BRACKET_CLOSE
reducerStates[5549] = 3; // 'state 57' -> Union -> UNION
reducerStates[12973] = 3; // 'state 57' -> Union -> PAREN_CLOSE
reducerStates[31533] = 3; // 'state 57' -> Union -> @par-gen.EOF
reducerStates[5581] = 3; // 'state 58' -> Union -> UNION
reducerStates[13005] = 3; // 'state 58' -> Union -> PAREN_CLOSE
reducerStates[31565] = 3; // 'state 58' -> Union -> @par-gen.EOF
reducerStates[1903] = 2; // 'state 59' -> Atom -> CHARACTER
reducerStates[5615] = 2; // 'state 59' -> Atom -> UNION
reducerStates[9327] = 2; // 'state 59' -> Atom -> PAREN_OPEN
reducerStates[13039] = 2; // 'state 59' -> Atom -> PAREN_CLOSE
reducerStates[20463] = 2; // 'state 59' -> Atom -> BRACKET_OPEN
reducerStates[27887] = 2; // 'state 59' -> Atom -> DASH
reducerStates[31599] = 2; // 'state 59' -> Atom -> @par-gen.EOF
reducerStates[1935] = 2; // 'state 60' -> Atom -> CHARACTER
reducerStates[5647] = 2; // 'state 60' -> Atom -> UNION
reducerStates[9359] = 2; // 'state 60' -> Atom -> PAREN_OPEN
reducerStates[13071] = 2; // 'state 60' -> Atom -> PAREN_CLOSE
reducerStates[20495] = 2; // 'state 60' -> Atom -> BRACKET_OPEN
reducerStates[27919] = 2; // 'state 60' -> Atom -> DASH
reducerStates[31631] = 2; // 'state 60' -> Atom -> @par-gen.EOF
reducerStates[1967] = 2; // 'state 61' -> Atom -> CHARACTER
reducerStates[5679] = 2; // 'state 61' -> Atom -> UNION
reducerStates[9391] = 2; // 'state 61' -> Atom -> PAREN_OPEN
reducerStates[13103] = 2; // 'state 61' -> Atom -> PAREN_CLOSE
reducerStates[20527] = 2; // 'state 61' -> Atom -> BRACKET_OPEN
reducerStates[27951] = 2; // 'state 61' -> Atom -> DASH
reducerStates[31663] = 2; // 'state 61' -> Atom -> @par-gen.EOF
reducerStates[2098] = 1; // 'state 65' -> CharacterClassCharacters -> CHARACTER
reducerStates[24370] = 1; // 'state 65' -> CharacterClassCharacters -> BRACKET_CLOSE
reducerStates[2194] = 1; // 'state 68' -> CharacterClassCharacters -> CHARACTER
reducerStates[24466] = 1; // 'state 68' -> CharacterClassCharacters -> BRACKET_CLOSE
reducerStates[2224] = 3; // 'state 69' -> Group -> CHARACTER
reducerStates[5936] = 3; // 'state 69' -> Group -> UNION
reducerStates[9648] = 3; // 'state 69' -> Group -> PAREN_OPEN
reducerStates[13360] = 3; // 'state 69' -> Group -> PAREN_CLOSE
reducerStates[17072] = 3; // 'state 69' -> Group -> QUANTIFIER
reducerStates[20784] = 3; // 'state 69' -> Group -> BRACKET_OPEN
reducerStates[28208] = 3; // 'state 69' -> Group -> DASH
reducerStates[31920] = 3; // 'state 69' -> Group -> @par-gen.EOF
reducerStates[2256] = 3; // 'state 70' -> Group -> CHARACTER
reducerStates[5968] = 3; // 'state 70' -> Group -> UNION
reducerStates[9680] = 3; // 'state 70' -> Group -> PAREN_OPEN
reducerStates[13392] = 3; // 'state 70' -> Group -> PAREN_CLOSE
reducerStates[17104] = 3; // 'state 70' -> Group -> QUANTIFIER
reducerStates[20816] = 3; // 'state 70' -> Group -> BRACKET_OPEN
reducerStates[28240] = 3; // 'state 70' -> Group -> DASH
reducerStates[31952] = 3; // 'state 70' -> Group -> @par-gen.EOF
reducerStates[2288] = 3; // 'state 71' -> Group -> CHARACTER
reducerStates[6000] = 3; // 'state 71' -> Group -> UNION
reducerStates[9712] = 3; // 'state 71' -> Group -> PAREN_OPEN
reducerStates[13424] = 3; // 'state 71' -> Group -> PAREN_CLOSE
reducerStates[17136] = 3; // 'state 71' -> Group -> QUANTIFIER
reducerStates[20848] = 3; // 'state 71' -> Group -> BRACKET_OPEN
reducerStates[28272] = 3; // 'state 71' -> Group -> DASH
reducerStates[31984] = 3; // 'state 71' -> Group -> @par-gen.EOF
reducerStates[2322] = 1; // 'state 72' -> CharacterClassCharacters -> CHARACTER
reducerStates[24594] = 1; // 'state 72' -> CharacterClassCharacters -> BRACKET_CLOSE
reducerStates[2418] = 1; // 'state 75' -> CharacterClassCharacters -> CHARACTER
reducerStates[24690] = 1; // 'state 75' -> CharacterClassCharacters -> BRACKET_CLOSE
reducerStates[2450] = 2; // 'state 76' -> CharacterClassCharacters -> CHARACTER
reducerStates[24722] = 2; // 'state 76' -> CharacterClassCharacters -> BRACKET_CLOSE
reducerStates[2481] = 3; // 'state 77' -> CharacterClass -> CHARACTER
reducerStates[6193] = 3; // 'state 77' -> CharacterClass -> UNION
reducerStates[9905] = 3; // 'state 77' -> CharacterClass -> PAREN_OPEN
reducerStates[13617] = 3; // 'state 77' -> CharacterClass -> PAREN_CLOSE
reducerStates[17329] = 3; // 'state 77' -> CharacterClass -> QUANTIFIER
reducerStates[21041] = 3; // 'state 77' -> CharacterClass -> BRACKET_OPEN
reducerStates[28465] = 3; // 'state 77' -> CharacterClass -> DASH
reducerStates[32177] = 3; // 'state 77' -> CharacterClass -> @par-gen.EOF
reducerStates[2514] = 2; // 'state 78' -> CharacterClassCharacters -> CHARACTER
reducerStates[24786] = 2; // 'state 78' -> CharacterClassCharacters -> BRACKET_CLOSE
reducerStates[2577] = 3; // 'state 80' -> CharacterClass -> CHARACTER
reducerStates[6289] = 3; // 'state 80' -> CharacterClass -> UNION
reducerStates[10001] = 3; // 'state 80' -> CharacterClass -> PAREN_OPEN
reducerStates[13713] = 3; // 'state 80' -> CharacterClass -> PAREN_CLOSE
reducerStates[17425] = 3; // 'state 80' -> CharacterClass -> QUANTIFIER
reducerStates[21137] = 3; // 'state 80' -> CharacterClass -> BRACKET_OPEN
reducerStates[28561] = 3; // 'state 80' -> CharacterClass -> DASH
reducerStates[32273] = 3; // 'state 80' -> CharacterClass -> @par-gen.EOF
reducerStates[2640] = 3; // 'state 82' -> Group -> CHARACTER
reducerStates[6352] = 3; // 'state 82' -> Group -> UNION
reducerStates[10064] = 3; // 'state 82' -> Group -> PAREN_OPEN
reducerStates[13776] = 3; // 'state 82' -> Group -> PAREN_CLOSE
reducerStates[17488] = 3; // 'state 82' -> Group -> QUANTIFIER
reducerStates[21200] = 3; // 'state 82' -> Group -> BRACKET_OPEN
reducerStates[28624] = 3; // 'state 82' -> Group -> DASH
reducerStates[32336] = 3; // 'state 82' -> Group -> @par-gen.EOF
reducerStates[2672] = 3; // 'state 83' -> Group -> CHARACTER
reducerStates[6384] = 3; // 'state 83' -> Group -> UNION
reducerStates[10096] = 3; // 'state 83' -> Group -> PAREN_OPEN
reducerStates[13808] = 3; // 'state 83' -> Group -> PAREN_CLOSE
reducerStates[17520] = 3; // 'state 83' -> Group -> QUANTIFIER
reducerStates[21232] = 3; // 'state 83' -> Group -> BRACKET_OPEN
reducerStates[28656] = 3; // 'state 83' -> Group -> DASH
reducerStates[32368] = 3; // 'state 83' -> Group -> @par-gen.EOF
reducerStates[2704] = 3; // 'state 84' -> Group -> CHARACTER
reducerStates[6416] = 3; // 'state 84' -> Group -> UNION
reducerStates[10128] = 3; // 'state 84' -> Group -> PAREN_OPEN
reducerStates[13840] = 3; // 'state 84' -> Group -> PAREN_CLOSE
reducerStates[17552] = 3; // 'state 84' -> Group -> QUANTIFIER
reducerStates[21264] = 3; // 'state 84' -> Group -> BRACKET_OPEN
reducerStates[28688] = 3; // 'state 84' -> Group -> DASH
reducerStates[32400] = 3; // 'state 84' -> Group -> @par-gen.EOF
reducerStates[2738] = 2; // 'state 85' -> CharacterClassCharacters -> CHARACTER
reducerStates[25010] = 2; // 'state 85' -> CharacterClassCharacters -> BRACKET_CLOSE
reducerStates[2769] = 3; // 'state 86' -> CharacterClass -> CHARACTER
reducerStates[6481] = 3; // 'state 86' -> CharacterClass -> UNION
reducerStates[10193] = 3; // 'state 86' -> CharacterClass -> PAREN_OPEN
reducerStates[13905] = 3; // 'state 86' -> CharacterClass -> PAREN_CLOSE
reducerStates[17617] = 3; // 'state 86' -> CharacterClass -> QUANTIFIER
reducerStates[21329] = 3; // 'state 86' -> CharacterClass -> BRACKET_OPEN
reducerStates[28753] = 3; // 'state 86' -> CharacterClass -> DASH
reducerStates[32465] = 3; // 'state 86' -> CharacterClass -> @par-gen.EOF
reducerStates[2802] = 2; // 'state 87' -> CharacterClassCharacters -> CHARACTER
reducerStates[25074] = 2; // 'state 87' -> CharacterClassCharacters -> BRACKET_CLOSE
reducerStates[2865] = 3; // 'state 89' -> CharacterClass -> CHARACTER
reducerStates[6577] = 3; // 'state 89' -> CharacterClass -> UNION
reducerStates[10289] = 3; // 'state 89' -> CharacterClass -> PAREN_OPEN
reducerStates[14001] = 3; // 'state 89' -> CharacterClass -> PAREN_CLOSE
reducerStates[17713] = 3; // 'state 89' -> CharacterClass -> QUANTIFIER
reducerStates[21425] = 3; // 'state 89' -> CharacterClass -> BRACKET_OPEN
reducerStates[28849] = 3; // 'state 89' -> CharacterClass -> DASH
reducerStates[32561] = 3; // 'state 89' -> CharacterClass -> @par-gen.EOF
reducerStates[2928] = 3; // 'state 91' -> Group -> CHARACTER
reducerStates[6640] = 3; // 'state 91' -> Group -> UNION
reducerStates[10352] = 3; // 'state 91' -> Group -> PAREN_OPEN
reducerStates[14064] = 3; // 'state 91' -> Group -> PAREN_CLOSE
reducerStates[17776] = 3; // 'state 91' -> Group -> QUANTIFIER
reducerStates[21488] = 3; // 'state 91' -> Group -> BRACKET_OPEN
reducerStates[28912] = 3; // 'state 91' -> Group -> DASH
reducerStates[32624] = 3; // 'state 91' -> Group -> @par-gen.EOF
reducerStates[2960] = 3; // 'state 92' -> Group -> CHARACTER
reducerStates[6672] = 3; // 'state 92' -> Group -> UNION
reducerStates[10384] = 3; // 'state 92' -> Group -> PAREN_OPEN
reducerStates[14096] = 3; // 'state 92' -> Group -> PAREN_CLOSE
reducerStates[17808] = 3; // 'state 92' -> Group -> QUANTIFIER
reducerStates[21520] = 3; // 'state 92' -> Group -> BRACKET_OPEN
reducerStates[28944] = 3; // 'state 92' -> Group -> DASH
reducerStates[32656] = 3; // 'state 92' -> Group -> @par-gen.EOF
reducerStates[2992] = 3; // 'state 93' -> Group -> CHARACTER
reducerStates[6704] = 3; // 'state 93' -> Group -> UNION
reducerStates[10416] = 3; // 'state 93' -> Group -> PAREN_OPEN
reducerStates[14128] = 3; // 'state 93' -> Group -> PAREN_CLOSE
reducerStates[17840] = 3; // 'state 93' -> Group -> QUANTIFIER
reducerStates[21552] = 3; // 'state 93' -> Group -> BRACKET_OPEN
reducerStates[28976] = 3; // 'state 93' -> Group -> DASH
reducerStates[32688] = 3; // 'state 93' -> Group -> @par-gen.EOF
reducerStates[3026] = 2; // 'state 94' -> CharacterClassCharacters -> CHARACTER
reducerStates[25298] = 2; // 'state 94' -> CharacterClassCharacters -> BRACKET_CLOSE
reducerStates[3057] = 3; // 'state 95' -> CharacterClass -> CHARACTER
reducerStates[6769] = 3; // 'state 95' -> CharacterClass -> UNION
reducerStates[10481] = 3; // 'state 95' -> CharacterClass -> PAREN_OPEN
reducerStates[14193] = 3; // 'state 95' -> CharacterClass -> PAREN_CLOSE
reducerStates[17905] = 3; // 'state 95' -> CharacterClass -> QUANTIFIER
reducerStates[21617] = 3; // 'state 95' -> CharacterClass -> BRACKET_OPEN
reducerStates[29041] = 3; // 'state 95' -> CharacterClass -> DASH
reducerStates[32753] = 3; // 'state 95' -> CharacterClass -> @par-gen.EOF
reducerStates[3090] = 2; // 'state 96' -> CharacterClassCharacters -> CHARACTER
reducerStates[25362] = 2; // 'state 96' -> CharacterClassCharacters -> BRACKET_CLOSE
reducerStates[3153] = 3; // 'state 98' -> CharacterClass -> CHARACTER
reducerStates[6865] = 3; // 'state 98' -> CharacterClass -> UNION
reducerStates[10577] = 3; // 'state 98' -> CharacterClass -> PAREN_OPEN
reducerStates[14289] = 3; // 'state 98' -> CharacterClass -> PAREN_CLOSE
reducerStates[18001] = 3; // 'state 98' -> CharacterClass -> QUANTIFIER
reducerStates[21713] = 3; // 'state 98' -> CharacterClass -> BRACKET_OPEN
reducerStates[29137] = 3; // 'state 98' -> CharacterClass -> DASH
reducerStates[32849] = 3; // 'state 98' -> CharacterClass -> @par-gen.EOF
reducerStates[3218] = 2; // 'state 100' -> CharacterClassCharacters -> CHARACTER
reducerStates[25490] = 2; // 'state 100' -> CharacterClassCharacters -> BRACKET_CLOSE
reducerStates[3249] = 3; // 'state 101' -> CharacterClass -> CHARACTER
reducerStates[6961] = 3; // 'state 101' -> CharacterClass -> UNION
reducerStates[10673] = 3; // 'state 101' -> CharacterClass -> PAREN_OPEN
reducerStates[14385] = 3; // 'state 101' -> CharacterClass -> PAREN_CLOSE
reducerStates[18097] = 3; // 'state 101' -> CharacterClass -> QUANTIFIER
reducerStates[21809] = 3; // 'state 101' -> CharacterClass -> BRACKET_OPEN
reducerStates[29233] = 3; // 'state 101' -> CharacterClass -> DASH
reducerStates[32945] = 3; // 'state 101' -> CharacterClass -> @par-gen.EOF
reducerStates[3282] = 2; // 'state 102' -> CharacterClassCharacters -> CHARACTER
reducerStates[25554] = 2; // 'state 102' -> CharacterClassCharacters -> BRACKET_CLOSE
reducerStates[3345] = 3; // 'state 104' -> CharacterClass -> CHARACTER
reducerStates[7057] = 3; // 'state 104' -> CharacterClass -> UNION
reducerStates[10769] = 3; // 'state 104' -> CharacterClass -> PAREN_OPEN
reducerStates[14481] = 3; // 'state 104' -> CharacterClass -> PAREN_CLOSE
reducerStates[18193] = 3; // 'state 104' -> CharacterClass -> QUANTIFIER
reducerStates[21905] = 3; // 'state 104' -> CharacterClass -> BRACKET_OPEN
reducerStates[29329] = 3; // 'state 104' -> CharacterClass -> DASH
reducerStates[33041] = 3; // 'state 104' -> CharacterClass -> @par-gen.EOF
reducerStates[3443] = 3; // 'state 107' -> CharacterClassRange -> CHARACTER
reducerStates[25715] = 3; // 'state 107' -> CharacterClassRange -> BRACKET_CLOSE
reducerStates[3473] = 4; // 'state 108' -> CharacterClass -> CHARACTER
reducerStates[7185] = 4; // 'state 108' -> CharacterClass -> UNION
reducerStates[10897] = 4; // 'state 108' -> CharacterClass -> PAREN_OPEN
reducerStates[14609] = 4; // 'state 108' -> CharacterClass -> PAREN_CLOSE
reducerStates[18321] = 4; // 'state 108' -> CharacterClass -> QUANTIFIER
reducerStates[22033] = 4; // 'state 108' -> CharacterClass -> BRACKET_OPEN
reducerStates[29457] = 4; // 'state 108' -> CharacterClass -> DASH
reducerStates[33169] = 4; // 'state 108' -> CharacterClass -> @par-gen.EOF
reducerStates[3507] = 3; // 'state 109' -> CharacterClassRange -> CHARACTER
reducerStates[25779] = 3; // 'state 109' -> CharacterClassRange -> BRACKET_CLOSE
reducerStates[3537] = 4; // 'state 110' -> CharacterClass -> CHARACTER
reducerStates[7249] = 4; // 'state 110' -> CharacterClass -> UNION
reducerStates[10961] = 4; // 'state 110' -> CharacterClass -> PAREN_OPEN
reducerStates[14673] = 4; // 'state 110' -> CharacterClass -> PAREN_CLOSE
reducerStates[18385] = 4; // 'state 110' -> CharacterClass -> QUANTIFIER
reducerStates[22097] = 4; // 'state 110' -> CharacterClass -> BRACKET_OPEN
reducerStates[29521] = 4; // 'state 110' -> CharacterClass -> DASH
reducerStates[33233] = 4; // 'state 110' -> CharacterClass -> @par-gen.EOF
reducerStates[3571] = 3; // 'state 111' -> CharacterClassRange -> CHARACTER
reducerStates[25843] = 3; // 'state 111' -> CharacterClassRange -> BRACKET_CLOSE
reducerStates[3601] = 4; // 'state 112' -> CharacterClass -> CHARACTER
reducerStates[7313] = 4; // 'state 112' -> CharacterClass -> UNION
reducerStates[11025] = 4; // 'state 112' -> CharacterClass -> PAREN_OPEN
reducerStates[14737] = 4; // 'state 112' -> CharacterClass -> PAREN_CLOSE
reducerStates[18449] = 4; // 'state 112' -> CharacterClass -> QUANTIFIER
reducerStates[22161] = 4; // 'state 112' -> CharacterClass -> BRACKET_OPEN
reducerStates[29585] = 4; // 'state 112' -> CharacterClass -> DASH
reducerStates[33297] = 4; // 'state 112' -> CharacterClass -> @par-gen.EOF
reducerStates[3635] = 3; // 'state 113' -> CharacterClassRange -> CHARACTER
reducerStates[25907] = 3; // 'state 113' -> CharacterClassRange -> BRACKET_CLOSE
reducerStates[3665] = 4; // 'state 114' -> CharacterClass -> CHARACTER
reducerStates[7377] = 4; // 'state 114' -> CharacterClass -> UNION
reducerStates[11089] = 4; // 'state 114' -> CharacterClass -> PAREN_OPEN
reducerStates[14801] = 4; // 'state 114' -> CharacterClass -> PAREN_CLOSE
reducerStates[18513] = 4; // 'state 114' -> CharacterClass -> QUANTIFIER
reducerStates[22225] = 4; // 'state 114' -> CharacterClass -> BRACKET_OPEN
reducerStates[29649] = 4; // 'state 114' -> CharacterClass -> DASH
reducerStates[33361] = 4; // 'state 114' -> CharacterClass -> @par-gen.EOF
reducerStates[3699] = 3; // 'state 115' -> CharacterClassRange -> CHARACTER
reducerStates[25971] = 3; // 'state 115' -> CharacterClassRange -> BRACKET_CLOSE

const parserSymbols = [
  "CHARACTER", // 0
  "UNION", // 1
  "PAREN_OPEN", // 2
  "PAREN_CLOSE", // 3
  "QUANTIFIER", // 4
  "BRACKET_OPEN", // 5
  "BRACKET_CLOSE", // 6
  "DASH", // 7
  "@par-gen.EOF", // 8
  "@par-gen.ERROR", // 9
  "S", // 10
  "RegExp", // 11
  "Expression", // 12
  "Union", // 13
  "Sequence", // 14
  "Atom", // 15
  "Group", // 16
  "CharacterClass", // 17
  "CharacterClassCharacters", // 18
  "CharacterClassRange", // 19
  "Character", // 20
  "undefined", // 21
  "undefined", // 22
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
    op: 2, // done
    state: undefined,
    symbol: undefined,
  },
  // 'action 13'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 11, // RegExp
  },
  // 'action 14'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 15'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Expression
  },
  // 'action 16'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 17'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 18'
  {
    op: 0, // shift
    state: 16, // 'state 16'
    symbol: undefined,
  },
  // 'action 19'
  {
    op: 0, // shift
    state: 17, // 'state 17'
    symbol: undefined,
  },
  // 'action 20'
  {
    op: 0, // shift
    state: 18, // 'state 18'
    symbol: undefined,
  },
  // 'action 21'
  {
    op: 0, // shift
    state: 19, // 'state 19'
    symbol: undefined,
  },
  // 'action 22'
  {
    op: 0, // shift
    state: 20, // 'state 20'
    symbol: undefined,
  },
  // 'action 23'
  {
    op: 0, // shift
    state: 21, // 'state 21'
    symbol: undefined,
  },
  // 'action 24'
  {
    op: 0, // shift
    state: 22, // 'state 22'
    symbol: undefined,
  },
  // 'action 25'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Expression
  },
  // 'action 26'
  {
    op: 0, // shift
    state: 23, // 'state 23'
    symbol: undefined,
  },
  // 'action 27'
  {
    op: 0, // shift
    state: 24, // 'state 24'
    symbol: undefined,
  },
  // 'action 28'
  {
    op: 0, // shift
    state: 25, // 'state 25'
    symbol: undefined,
  },
  // 'action 29'
  {
    op: 0, // shift
    state: 26, // 'state 26'
    symbol: undefined,
  },
  // 'action 30'
  {
    op: 0, // shift
    state: 27, // 'state 27'
    symbol: undefined,
  },
  // 'action 31'
  {
    op: 0, // shift
    state: 28, // 'state 28'
    symbol: undefined,
  },
  // 'action 32'
  {
    op: 0, // shift
    state: 29, // 'state 29'
    symbol: undefined,
  },
  // 'action 33'
  {
    op: 0, // shift
    state: 30, // 'state 30'
    symbol: undefined,
  },
  // 'action 34'
  {
    op: 0, // shift
    state: 31, // 'state 31'
    symbol: undefined,
  },
  // 'action 35'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 12, // Expression
  },
  // 'action 36'
  {
    op: 0, // shift
    state: 32, // 'state 32'
    symbol: undefined,
  },
  // 'action 37'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 38'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 39'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 40'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 41'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 42'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 43'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 44'
  {
    op: 0, // shift
    state: 33, // 'state 33'
    symbol: undefined,
  },
  // 'action 45'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 46'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 47'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 48'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 49'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 50'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 51'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 52'
  {
    op: 0, // shift
    state: 34, // 'state 34'
    symbol: undefined,
  },
  // 'action 53'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 54'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 55'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 56'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 57'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 58'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 59'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 60'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Character
  },
  // 'action 61'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Character
  },
  // 'action 62'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Character
  },
  // 'action 63'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Character
  },
  // 'action 64'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Character
  },
  // 'action 65'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Character
  },
  // 'action 66'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Character
  },
  // 'action 67'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Character
  },
  // 'action 68'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Character
  },
  // 'action 69'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Character
  },
  // 'action 70'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Character
  },
  // 'action 71'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Character
  },
  // 'action 72'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Character
  },
  // 'action 73'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Character
  },
  // 'action 74'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Character
  },
  // 'action 75'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Character
  },
  // 'action 76'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 77'
  {
    op: 0, // shift
    state: 2, // 'state 2'
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
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 80'
  {
    op: 0, // shift
    state: 36, // 'state 36'
    symbol: undefined,
  },
  // 'action 81'
  {
    op: 0, // shift
    state: 37, // 'state 37'
    symbol: undefined,
  },
  // 'action 82'
  {
    op: 0, // shift
    state: 38, // 'state 38'
    symbol: undefined,
  },
  // 'action 83'
  {
    op: 0, // shift
    state: 10, // 'state 10'
    symbol: undefined,
  },
  // 'action 84'
  {
    op: 0, // shift
    state: 11, // 'state 11'
    symbol: undefined,
  },
  // 'action 85'
  {
    op: 0, // shift
    state: 12, // 'state 12'
    symbol: undefined,
  },
  // 'action 86'
  {
    op: 0, // shift
    state: 39, // 'state 39'
    symbol: undefined,
  },
  // 'action 87'
  {
    op: 0, // shift
    state: 40, // 'state 40'
    symbol: undefined,
  },
  // 'action 88'
  {
    op: 0, // shift
    state: 41, // 'state 41'
    symbol: undefined,
  },
  // 'action 89'
  {
    op: 0, // shift
    state: 42, // 'state 42'
    symbol: undefined,
  },
  // 'action 90'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 91'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 92'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 93'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 94'
  {
    op: 0, // shift
    state: 43, // 'state 43'
    symbol: undefined,
  },
  // 'action 95'
  {
    op: 0, // shift
    state: 44, // 'state 44'
    symbol: undefined,
  },
  // 'action 96'
  {
    op: 0, // shift
    state: 10, // 'state 10'
    symbol: undefined,
  },
  // 'action 97'
  {
    op: 0, // shift
    state: 11, // 'state 11'
    symbol: undefined,
  },
  // 'action 98'
  {
    op: 0, // shift
    state: 12, // 'state 12'
    symbol: undefined,
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
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 102'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 103'
  {
    op: 0, // shift
    state: 45, // 'state 45'
    symbol: undefined,
  },
  // 'action 104'
  {
    op: 0, // shift
    state: 46, // 'state 46'
    symbol: undefined,
  },
  // 'action 105'
  {
    op: 0, // shift
    state: 10, // 'state 10'
    symbol: undefined,
  },
  // 'action 106'
  {
    op: 0, // shift
    state: 11, // 'state 11'
    symbol: undefined,
  },
  // 'action 107'
  {
    op: 0, // shift
    state: 12, // 'state 12'
    symbol: undefined,
  },
  // 'action 108'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 14, // Sequence
  },
  // 'action 109'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 14, // Sequence
  },
  // 'action 110'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 14, // Sequence
  },
  // 'action 111'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 14, // Sequence
  },
  // 'action 112'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 14, // Sequence
  },
  // 'action 113'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 14, // Sequence
  },
  // 'action 114'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 14, // Sequence
  },
  // 'action 115'
  {
    op: 0, // shift
    state: 47, // 'state 47'
    symbol: undefined,
  },
  // 'action 116'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 117'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 118'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 119'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 120'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 121'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 122'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 123'
  {
    op: 0, // shift
    state: 48, // 'state 48'
    symbol: undefined,
  },
  // 'action 124'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 125'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 126'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 127'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 128'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 129'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 130'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 131'
  {
    op: 0, // shift
    state: 49, // 'state 49'
    symbol: undefined,
  },
  // 'action 132'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 133'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 134'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 135'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 136'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 137'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 138'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 139'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Character
  },
  // 'action 140'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Character
  },
  // 'action 141'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Character
  },
  // 'action 142'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Character
  },
  // 'action 143'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Character
  },
  // 'action 144'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Character
  },
  // 'action 145'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Character
  },
  // 'action 146'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Character
  },
  // 'action 147'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Character
  },
  // 'action 148'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Character
  },
  // 'action 149'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Character
  },
  // 'action 150'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Character
  },
  // 'action 151'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Character
  },
  // 'action 152'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Character
  },
  // 'action 153'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Character
  },
  // 'action 154'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Character
  },
  // 'action 155'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 156'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 157'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 158'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 159'
  {
    op: 0, // shift
    state: 50, // 'state 50'
    symbol: undefined,
  },
  // 'action 160'
  {
    op: 0, // shift
    state: 51, // 'state 51'
    symbol: undefined,
  },
  // 'action 161'
  {
    op: 0, // shift
    state: 52, // 'state 52'
    symbol: undefined,
  },
  // 'action 162'
  {
    op: 0, // shift
    state: 10, // 'state 10'
    symbol: undefined,
  },
  // 'action 163'
  {
    op: 0, // shift
    state: 11, // 'state 11'
    symbol: undefined,
  },
  // 'action 164'
  {
    op: 0, // shift
    state: 12, // 'state 12'
    symbol: undefined,
  },
  // 'action 165'
  {
    op: 0, // shift
    state: 53, // 'state 53'
    symbol: undefined,
  },
  // 'action 166'
  {
    op: 0, // shift
    state: 54, // 'state 54'
    symbol: undefined,
  },
  // 'action 167'
  {
    op: 0, // shift
    state: 55, // 'state 55'
    symbol: undefined,
  },
  // 'action 168'
  {
    op: 0, // shift
    state: 56, // 'state 56'
    symbol: undefined,
  },
  // 'action 169'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 170'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 171'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 172'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 173'
  {
    op: 0, // shift
    state: 57, // 'state 57'
    symbol: undefined,
  },
  // 'action 174'
  {
    op: 0, // shift
    state: 58, // 'state 58'
    symbol: undefined,
  },
  // 'action 175'
  {
    op: 0, // shift
    state: 10, // 'state 10'
    symbol: undefined,
  },
  // 'action 176'
  {
    op: 0, // shift
    state: 11, // 'state 11'
    symbol: undefined,
  },
  // 'action 177'
  {
    op: 0, // shift
    state: 12, // 'state 12'
    symbol: undefined,
  },
  // 'action 178'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 14, // Sequence
  },
  // 'action 179'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 14, // Sequence
  },
  // 'action 180'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 14, // Sequence
  },
  // 'action 181'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 14, // Sequence
  },
  // 'action 182'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 14, // Sequence
  },
  // 'action 183'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 14, // Sequence
  },
  // 'action 184'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 14, // Sequence
  },
  // 'action 185'
  {
    op: 0, // shift
    state: 59, // 'state 59'
    symbol: undefined,
  },
  // 'action 186'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 187'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 188'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 189'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 190'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 191'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 192'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 193'
  {
    op: 0, // shift
    state: 60, // 'state 60'
    symbol: undefined,
  },
  // 'action 194'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 195'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 196'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 197'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 198'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 199'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 200'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 201'
  {
    op: 0, // shift
    state: 61, // 'state 61'
    symbol: undefined,
  },
  // 'action 202'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 203'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 204'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 205'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 206'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 207'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 208'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 209'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Character
  },
  // 'action 210'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Character
  },
  // 'action 211'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Character
  },
  // 'action 212'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Character
  },
  // 'action 213'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Character
  },
  // 'action 214'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Character
  },
  // 'action 215'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Character
  },
  // 'action 216'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Character
  },
  // 'action 217'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Character
  },
  // 'action 218'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Character
  },
  // 'action 219'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Character
  },
  // 'action 220'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Character
  },
  // 'action 221'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Character
  },
  // 'action 222'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Character
  },
  // 'action 223'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Character
  },
  // 'action 224'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Character
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
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 227'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 228'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 229'
  {
    op: 0, // shift
    state: 62, // 'state 62'
    symbol: undefined,
  },
  // 'action 230'
  {
    op: 0, // shift
    state: 63, // 'state 63'
    symbol: undefined,
  },
  // 'action 231'
  {
    op: 0, // shift
    state: 64, // 'state 64'
    symbol: undefined,
  },
  // 'action 232'
  {
    op: 0, // shift
    state: 10, // 'state 10'
    symbol: undefined,
  },
  // 'action 233'
  {
    op: 0, // shift
    state: 11, // 'state 11'
    symbol: undefined,
  },
  // 'action 234'
  {
    op: 0, // shift
    state: 12, // 'state 12'
    symbol: undefined,
  },
  // 'action 235'
  {
    op: 0, // shift
    state: 65, // 'state 65'
    symbol: undefined,
  },
  // 'action 236'
  {
    op: 0, // shift
    state: 66, // 'state 66'
    symbol: undefined,
  },
  // 'action 237'
  {
    op: 0, // shift
    state: 67, // 'state 67'
    symbol: undefined,
  },
  // 'action 238'
  {
    op: 0, // shift
    state: 68, // 'state 68'
    symbol: undefined,
  },
  // 'action 239'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 240'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 241'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 242'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 243'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 244'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 245'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 246'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 247'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 248'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 249'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 250'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 251'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 252'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 253'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 254'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 255'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 256'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 257'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 258'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 259'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 260'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 261'
  {
    op: 0, // shift
    state: 69, // 'state 69'
    symbol: undefined,
  },
  // 'action 262'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 263'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 264'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 265'
  {
    op: 0, // shift
    state: 70, // 'state 70'
    symbol: undefined,
  },
  // 'action 266'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 267'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 268'
  {
    op: 0, // shift
    state: 19, // 'state 19'
    symbol: undefined,
  },
  // 'action 269'
  {
    op: 0, // shift
    state: 10, // 'state 10'
    symbol: undefined,
  },
  // 'action 270'
  {
    op: 0, // shift
    state: 11, // 'state 11'
    symbol: undefined,
  },
  // 'action 271'
  {
    op: 0, // shift
    state: 12, // 'state 12'
    symbol: undefined,
  },
  // 'action 272'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 273'
  {
    op: 0, // shift
    state: 24, // 'state 24'
    symbol: undefined,
  },
  // 'action 274'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 275'
  {
    op: 0, // shift
    state: 71, // 'state 71'
    symbol: undefined,
  },
  // 'action 276'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 277'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 278'
  {
    op: 0, // shift
    state: 28, // 'state 28'
    symbol: undefined,
  },
  // 'action 279'
  {
    op: 0, // shift
    state: 10, // 'state 10'
    symbol: undefined,
  },
  // 'action 280'
  {
    op: 0, // shift
    state: 11, // 'state 11'
    symbol: undefined,
  },
  // 'action 281'
  {
    op: 0, // shift
    state: 12, // 'state 12'
    symbol: undefined,
  },
  // 'action 282'
  {
    op: 0, // shift
    state: 72, // 'state 72'
    symbol: undefined,
  },
  // 'action 283'
  {
    op: 0, // shift
    state: 73, // 'state 73'
    symbol: undefined,
  },
  // 'action 284'
  {
    op: 0, // shift
    state: 74, // 'state 74'
    symbol: undefined,
  },
  // 'action 285'
  {
    op: 0, // shift
    state: 75, // 'state 75'
    symbol: undefined,
  },
  // 'action 286'
  {
    op: 0, // shift
    state: 76, // 'state 76'
    symbol: undefined,
  },
  // 'action 287'
  {
    op: 0, // shift
    state: 77, // 'state 77'
    symbol: undefined,
  },
  // 'action 288'
  {
    op: 0, // shift
    state: 78, // 'state 78'
    symbol: undefined,
  },
  // 'action 289'
  {
    op: 0, // shift
    state: 79, // 'state 79'
    symbol: undefined,
  },
  // 'action 290'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // CharacterClassCharacters
  },
  // 'action 291'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // CharacterClassCharacters
  },
  // 'action 292'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // CharacterClassCharacters
  },
  // 'action 293'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // CharacterClassCharacters
  },
  // 'action 294'
  {
    op: 0, // shift
    state: 39, // 'state 39'
    symbol: undefined,
  },
  // 'action 295'
  {
    op: 0, // shift
    state: 80, // 'state 80'
    symbol: undefined,
  },
  // 'action 296'
  {
    op: 0, // shift
    state: 81, // 'state 81'
    symbol: undefined,
  },
  // 'action 297'
  {
    op: 0, // shift
    state: 42, // 'state 42'
    symbol: undefined,
  },
  // 'action 298'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 299'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 300'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 301'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 302'
  {
    op: 0, // shift
    state: 19, // 'state 19'
    symbol: undefined,
  },
  // 'action 303'
  {
    op: 0, // shift
    state: 10, // 'state 10'
    symbol: undefined,
  },
  // 'action 304'
  {
    op: 0, // shift
    state: 11, // 'state 11'
    symbol: undefined,
  },
  // 'action 305'
  {
    op: 0, // shift
    state: 12, // 'state 12'
    symbol: undefined,
  },
  // 'action 306'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Union
  },
  // 'action 307'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Union
  },
  // 'action 308'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Union
  },
  // 'action 309'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 310'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 311'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 312'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 313'
  {
    op: 0, // shift
    state: 28, // 'state 28'
    symbol: undefined,
  },
  // 'action 314'
  {
    op: 0, // shift
    state: 10, // 'state 10'
    symbol: undefined,
  },
  // 'action 315'
  {
    op: 0, // shift
    state: 11, // 'state 11'
    symbol: undefined,
  },
  // 'action 316'
  {
    op: 0, // shift
    state: 12, // 'state 12'
    symbol: undefined,
  },
  // 'action 317'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Union
  },
  // 'action 318'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Union
  },
  // 'action 319'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Union
  },
  // 'action 320'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 321'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 322'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 323'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 324'
  {
    op: 0, // shift
    state: 19, // 'state 19'
    symbol: undefined,
  },
  // 'action 325'
  {
    op: 0, // shift
    state: 10, // 'state 10'
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
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Union
  },
  // 'action 329'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Union
  },
  // 'action 330'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Union
  },
  // 'action 331'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 332'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 333'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 334'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 335'
  {
    op: 0, // shift
    state: 28, // 'state 28'
    symbol: undefined,
  },
  // 'action 336'
  {
    op: 0, // shift
    state: 10, // 'state 10'
    symbol: undefined,
  },
  // 'action 337'
  {
    op: 0, // shift
    state: 11, // 'state 11'
    symbol: undefined,
  },
  // 'action 338'
  {
    op: 0, // shift
    state: 12, // 'state 12'
    symbol: undefined,
  },
  // 'action 339'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Union
  },
  // 'action 340'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Union
  },
  // 'action 341'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Union
  },
  // 'action 342'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 343'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 344'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 345'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 346'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 347'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 348'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 349'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 350'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 351'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 352'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 353'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 354'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 355'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 356'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 357'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 358'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 359'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 360'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 361'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 362'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 363'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 364'
  {
    op: 0, // shift
    state: 82, // 'state 82'
    symbol: undefined,
  },
  // 'action 365'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 366'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 367'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 368'
  {
    op: 0, // shift
    state: 83, // 'state 83'
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
    state: 19, // 'state 19'
    symbol: undefined,
  },
  // 'action 372'
  {
    op: 0, // shift
    state: 10, // 'state 10'
    symbol: undefined,
  },
  // 'action 373'
  {
    op: 0, // shift
    state: 11, // 'state 11'
    symbol: undefined,
  },
  // 'action 374'
  {
    op: 0, // shift
    state: 12, // 'state 12'
    symbol: undefined,
  },
  // 'action 375'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 376'
  {
    op: 0, // shift
    state: 24, // 'state 24'
    symbol: undefined,
  },
  // 'action 377'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 378'
  {
    op: 0, // shift
    state: 84, // 'state 84'
    symbol: undefined,
  },
  // 'action 379'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 380'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 381'
  {
    op: 0, // shift
    state: 28, // 'state 28'
    symbol: undefined,
  },
  // 'action 382'
  {
    op: 0, // shift
    state: 10, // 'state 10'
    symbol: undefined,
  },
  // 'action 383'
  {
    op: 0, // shift
    state: 11, // 'state 11'
    symbol: undefined,
  },
  // 'action 384'
  {
    op: 0, // shift
    state: 12, // 'state 12'
    symbol: undefined,
  },
  // 'action 385'
  {
    op: 0, // shift
    state: 85, // 'state 85'
    symbol: undefined,
  },
  // 'action 386'
  {
    op: 0, // shift
    state: 86, // 'state 86'
    symbol: undefined,
  },
  // 'action 387'
  {
    op: 0, // shift
    state: 87, // 'state 87'
    symbol: undefined,
  },
  // 'action 388'
  {
    op: 0, // shift
    state: 88, // 'state 88'
    symbol: undefined,
  },
  // 'action 389'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // CharacterClassCharacters
  },
  // 'action 390'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // CharacterClassCharacters
  },
  // 'action 391'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // CharacterClassCharacters
  },
  // 'action 392'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // CharacterClassCharacters
  },
  // 'action 393'
  {
    op: 0, // shift
    state: 39, // 'state 39'
    symbol: undefined,
  },
  // 'action 394'
  {
    op: 0, // shift
    state: 89, // 'state 89'
    symbol: undefined,
  },
  // 'action 395'
  {
    op: 0, // shift
    state: 90, // 'state 90'
    symbol: undefined,
  },
  // 'action 396'
  {
    op: 0, // shift
    state: 42, // 'state 42'
    symbol: undefined,
  },
  // 'action 397'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 398'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 399'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 400'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 401'
  {
    op: 0, // shift
    state: 19, // 'state 19'
    symbol: undefined,
  },
  // 'action 402'
  {
    op: 0, // shift
    state: 10, // 'state 10'
    symbol: undefined,
  },
  // 'action 403'
  {
    op: 0, // shift
    state: 11, // 'state 11'
    symbol: undefined,
  },
  // 'action 404'
  {
    op: 0, // shift
    state: 12, // 'state 12'
    symbol: undefined,
  },
  // 'action 405'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Union
  },
  // 'action 406'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Union
  },
  // 'action 407'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Union
  },
  // 'action 408'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 409'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 410'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 411'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 412'
  {
    op: 0, // shift
    state: 28, // 'state 28'
    symbol: undefined,
  },
  // 'action 413'
  {
    op: 0, // shift
    state: 10, // 'state 10'
    symbol: undefined,
  },
  // 'action 414'
  {
    op: 0, // shift
    state: 11, // 'state 11'
    symbol: undefined,
  },
  // 'action 415'
  {
    op: 0, // shift
    state: 12, // 'state 12'
    symbol: undefined,
  },
  // 'action 416'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Union
  },
  // 'action 417'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Union
  },
  // 'action 418'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 13, // Union
  },
  // 'action 419'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 420'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 421'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 422'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 423'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 424'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 425'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 426'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 427'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 428'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 429'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 430'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 431'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 432'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 433'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 434'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 435'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 436'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 437'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 438'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 439'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // Atom
  },
  // 'action 440'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 441'
  {
    op: 0, // shift
    state: 91, // 'state 91'
    symbol: undefined,
  },
  // 'action 442'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 443'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 444'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 445'
  {
    op: 0, // shift
    state: 92, // 'state 92'
    symbol: undefined,
  },
  // 'action 446'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 447'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 448'
  {
    op: 0, // shift
    state: 19, // 'state 19'
    symbol: undefined,
  },
  // 'action 449'
  {
    op: 0, // shift
    state: 10, // 'state 10'
    symbol: undefined,
  },
  // 'action 450'
  {
    op: 0, // shift
    state: 11, // 'state 11'
    symbol: undefined,
  },
  // 'action 451'
  {
    op: 0, // shift
    state: 12, // 'state 12'
    symbol: undefined,
  },
  // 'action 452'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 453'
  {
    op: 0, // shift
    state: 24, // 'state 24'
    symbol: undefined,
  },
  // 'action 454'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 455'
  {
    op: 0, // shift
    state: 93, // 'state 93'
    symbol: undefined,
  },
  // 'action 456'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 457'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 458'
  {
    op: 0, // shift
    state: 28, // 'state 28'
    symbol: undefined,
  },
  // 'action 459'
  {
    op: 0, // shift
    state: 10, // 'state 10'
    symbol: undefined,
  },
  // 'action 460'
  {
    op: 0, // shift
    state: 11, // 'state 11'
    symbol: undefined,
  },
  // 'action 461'
  {
    op: 0, // shift
    state: 12, // 'state 12'
    symbol: undefined,
  },
  // 'action 462'
  {
    op: 0, // shift
    state: 94, // 'state 94'
    symbol: undefined,
  },
  // 'action 463'
  {
    op: 0, // shift
    state: 95, // 'state 95'
    symbol: undefined,
  },
  // 'action 464'
  {
    op: 0, // shift
    state: 96, // 'state 96'
    symbol: undefined,
  },
  // 'action 465'
  {
    op: 0, // shift
    state: 97, // 'state 97'
    symbol: undefined,
  },
  // 'action 466'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // CharacterClassCharacters
  },
  // 'action 467'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // CharacterClassCharacters
  },
  // 'action 468'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // CharacterClassCharacters
  },
  // 'action 469'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // CharacterClassCharacters
  },
  // 'action 470'
  {
    op: 0, // shift
    state: 39, // 'state 39'
    symbol: undefined,
  },
  // 'action 471'
  {
    op: 0, // shift
    state: 98, // 'state 98'
    symbol: undefined,
  },
  // 'action 472'
  {
    op: 0, // shift
    state: 99, // 'state 99'
    symbol: undefined,
  },
  // 'action 473'
  {
    op: 0, // shift
    state: 42, // 'state 42'
    symbol: undefined,
  },
  // 'action 474'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 475'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 476'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 477'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 478'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 479'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 480'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 481'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 482'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 483'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 484'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 485'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 486'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 487'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 488'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 489'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 490'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 491'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 492'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 493'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 494'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 495'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 496'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 497'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 498'
  {
    op: 0, // shift
    state: 100, // 'state 100'
    symbol: undefined,
  },
  // 'action 499'
  {
    op: 0, // shift
    state: 101, // 'state 101'
    symbol: undefined,
  },
  // 'action 500'
  {
    op: 0, // shift
    state: 102, // 'state 102'
    symbol: undefined,
  },
  // 'action 501'
  {
    op: 0, // shift
    state: 103, // 'state 103'
    symbol: undefined,
  },
  // 'action 502'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // CharacterClassCharacters
  },
  // 'action 503'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // CharacterClassCharacters
  },
  // 'action 504'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // CharacterClassCharacters
  },
  // 'action 505'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // CharacterClassCharacters
  },
  // 'action 506'
  {
    op: 0, // shift
    state: 39, // 'state 39'
    symbol: undefined,
  },
  // 'action 507'
  {
    op: 0, // shift
    state: 104, // 'state 104'
    symbol: undefined,
  },
  // 'action 508'
  {
    op: 0, // shift
    state: 105, // 'state 105'
    symbol: undefined,
  },
  // 'action 509'
  {
    op: 0, // shift
    state: 42, // 'state 42'
    symbol: undefined,
  },
  // 'action 510'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 511'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 512'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 513'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 514'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 515'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 516'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 517'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 518'
  {
    op: 0, // shift
    state: 106, // 'state 106'
    symbol: undefined,
  },
  // 'action 519'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // CharacterClassCharacters
  },
  // 'action 520'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // CharacterClassCharacters
  },
  // 'action 521'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // CharacterClassCharacters
  },
  // 'action 522'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // CharacterClassCharacters
  },
  // 'action 523'
  {
    op: 0, // shift
    state: 107, // 'state 107'
    symbol: undefined,
  },
  // 'action 524'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 525'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 526'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 527'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 528'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 529'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 530'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 531'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 532'
  {
    op: 0, // shift
    state: 76, // 'state 76'
    symbol: undefined,
  },
  // 'action 533'
  {
    op: 0, // shift
    state: 108, // 'state 108'
    symbol: undefined,
  },
  // 'action 534'
  {
    op: 0, // shift
    state: 78, // 'state 78'
    symbol: undefined,
  },
  // 'action 535'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 536'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 537'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 538'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 539'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 540'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 541'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 542'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 543'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 544'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 545'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 546'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 547'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 548'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 549'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 550'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 551'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 552'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 553'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 554'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 555'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 556'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 557'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 558'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 559'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 560'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 561'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 562'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 563'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 564'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 565'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 566'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 567'
  {
    op: 0, // shift
    state: 79, // 'state 79'
    symbol: undefined,
  },
  // 'action 568'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // CharacterClassCharacters
  },
  // 'action 569'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // CharacterClassCharacters
  },
  // 'action 570'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // CharacterClassCharacters
  },
  // 'action 571'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // CharacterClassCharacters
  },
  // 'action 572'
  {
    op: 0, // shift
    state: 109, // 'state 109'
    symbol: undefined,
  },
  // 'action 573'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 574'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 575'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 576'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 577'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 578'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 579'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 580'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 581'
  {
    op: 0, // shift
    state: 76, // 'state 76'
    symbol: undefined,
  },
  // 'action 582'
  {
    op: 0, // shift
    state: 110, // 'state 110'
    symbol: undefined,
  },
  // 'action 583'
  {
    op: 0, // shift
    state: 78, // 'state 78'
    symbol: undefined,
  },
  // 'action 584'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 585'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 586'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 587'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 588'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 589'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 590'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 591'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 592'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 593'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 594'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 595'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 596'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 597'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 598'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 599'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 600'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 601'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 602'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 603'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 604'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 605'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 606'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 607'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Group
  },
  // 'action 608'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 609'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 610'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 611'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 612'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 613'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 614'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 615'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 616'
  {
    op: 0, // shift
    state: 79, // 'state 79'
    symbol: undefined,
  },
  // 'action 617'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // CharacterClassCharacters
  },
  // 'action 618'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // CharacterClassCharacters
  },
  // 'action 619'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // CharacterClassCharacters
  },
  // 'action 620'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // CharacterClassCharacters
  },
  // 'action 621'
  {
    op: 0, // shift
    state: 111, // 'state 111'
    symbol: undefined,
  },
  // 'action 622'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 623'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 624'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 625'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 626'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 627'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 628'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 629'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 630'
  {
    op: 0, // shift
    state: 76, // 'state 76'
    symbol: undefined,
  },
  // 'action 631'
  {
    op: 0, // shift
    state: 112, // 'state 112'
    symbol: undefined,
  },
  // 'action 632'
  {
    op: 0, // shift
    state: 78, // 'state 78'
    symbol: undefined,
  },
  // 'action 633'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 634'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 635'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 636'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 637'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 638'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 639'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 640'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 641'
  {
    op: 0, // shift
    state: 79, // 'state 79'
    symbol: undefined,
  },
  // 'action 642'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // CharacterClassCharacters
  },
  // 'action 643'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // CharacterClassCharacters
  },
  // 'action 644'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // CharacterClassCharacters
  },
  // 'action 645'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // CharacterClassCharacters
  },
  // 'action 646'
  {
    op: 0, // shift
    state: 113, // 'state 113'
    symbol: undefined,
  },
  // 'action 647'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 648'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 649'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 650'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 651'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 652'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 653'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 654'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 655'
  {
    op: 0, // shift
    state: 76, // 'state 76'
    symbol: undefined,
  },
  // 'action 656'
  {
    op: 0, // shift
    state: 114, // 'state 114'
    symbol: undefined,
  },
  // 'action 657'
  {
    op: 0, // shift
    state: 78, // 'state 78'
    symbol: undefined,
  },
  // 'action 658'
  {
    op: 0, // shift
    state: 115, // 'state 115'
    symbol: undefined,
  },
  // 'action 659'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // CharacterClassRange
  },
  // 'action 660'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // CharacterClassRange
  },
  // 'action 661'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 662'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 663'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 664'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 665'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 666'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 667'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 668'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 669'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // CharacterClassRange
  },
  // 'action 670'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // CharacterClassRange
  },
  // 'action 671'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 672'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 673'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 674'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 675'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 676'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 677'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 678'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 679'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // CharacterClassRange
  },
  // 'action 680'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // CharacterClassRange
  },
  // 'action 681'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 682'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 683'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 684'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 685'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 686'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 687'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 688'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 689'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // CharacterClassRange
  },
  // 'action 690'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // CharacterClassRange
  },
  // 'action 691'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 692'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 693'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 694'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 695'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 696'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 697'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 698'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // CharacterClass
  },
  // 'action 699'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // CharacterClassRange
  },
  // 'action 700'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // CharacterClassRange
  },
];
const actionsTable = new Uint16Array(3712).fill(0xffff);
actionsTable[0] = 0; // 'state 0' -> CHARACTER -> shift -> 'action 0'
actionsTable[2] = 1; // 'state 0' -> PAREN_OPEN -> shift -> 'action 1'
actionsTable[5] = 2; // 'state 0' -> BRACKET_OPEN -> shift -> 'action 2'
actionsTable[7] = 3; // 'state 0' -> DASH -> shift -> 'action 3'
actionsTable[11] = 4; // 'state 0' -> RegExp -> shift -> 'action 4'
actionsTable[12] = 5; // 'state 0' -> Expression -> shift -> 'action 5'
actionsTable[13] = 6; // 'state 0' -> Union -> shift -> 'action 6'
actionsTable[14] = 7; // 'state 0' -> Sequence -> shift -> 'action 7'
actionsTable[15] = 8; // 'state 0' -> Atom -> shift -> 'action 8'
actionsTable[16] = 9; // 'state 0' -> Group -> shift -> 'action 9'
actionsTable[17] = 10; // 'state 0' -> CharacterClass -> shift -> 'action 10'
actionsTable[20] = 11; // 'state 0' -> Character -> shift -> 'action 11'
actionsTable[168] = 12; // 'state 5' -> @par-gen.EOF -> done -> 'action 12'
actionsTable[200] = 13; // 'state 6' -> @par-gen.EOF -> reduce -> 'action 13'
actionsTable[225] = 14; // 'state 7' -> UNION -> shift -> 'action 14'
actionsTable[232] = 15; // 'state 7' -> @par-gen.EOF -> reduce -> 'action 15'
actionsTable[256] = 16; // 'state 8' -> CHARACTER -> shift -> 'action 16'
actionsTable[257] = 17; // 'state 8' -> UNION -> shift -> 'action 17'
actionsTable[258] = 18; // 'state 8' -> PAREN_OPEN -> shift -> 'action 18'
actionsTable[261] = 19; // 'state 8' -> BRACKET_OPEN -> shift -> 'action 19'
actionsTable[263] = 20; // 'state 8' -> DASH -> shift -> 'action 20'
actionsTable[271] = 21; // 'state 8' -> Atom -> shift -> 'action 21'
actionsTable[272] = 22; // 'state 8' -> Group -> shift -> 'action 22'
actionsTable[273] = 23; // 'state 8' -> CharacterClass -> shift -> 'action 23'
actionsTable[276] = 24; // 'state 8' -> Character -> shift -> 'action 24'
actionsTable[264] = 25; // 'state 8' -> @par-gen.EOF -> reduce -> 'action 25'
actionsTable[288] = 26; // 'state 9' -> CHARACTER -> shift -> 'action 26'
actionsTable[289] = 27; // 'state 9' -> UNION -> shift -> 'action 27'
actionsTable[290] = 28; // 'state 9' -> PAREN_OPEN -> shift -> 'action 28'
actionsTable[293] = 29; // 'state 9' -> BRACKET_OPEN -> shift -> 'action 29'
actionsTable[295] = 30; // 'state 9' -> DASH -> shift -> 'action 30'
actionsTable[303] = 31; // 'state 9' -> Atom -> shift -> 'action 31'
actionsTable[304] = 32; // 'state 9' -> Group -> shift -> 'action 32'
actionsTable[305] = 33; // 'state 9' -> CharacterClass -> shift -> 'action 33'
actionsTable[308] = 34; // 'state 9' -> Character -> shift -> 'action 34'
actionsTable[296] = 35; // 'state 9' -> @par-gen.EOF -> reduce -> 'action 35'
actionsTable[388] = 36; // 'state 12' -> QUANTIFIER -> shift -> 'action 36'
actionsTable[384] = 37; // 'state 12' -> CHARACTER -> reduce -> 'action 37'
actionsTable[385] = 38; // 'state 12' -> UNION -> reduce -> 'action 38'
actionsTable[386] = 39; // 'state 12' -> PAREN_OPEN -> reduce -> 'action 39'
actionsTable[387] = 40; // 'state 12' -> PAREN_CLOSE -> reduce -> 'action 40'
actionsTable[389] = 41; // 'state 12' -> BRACKET_OPEN -> reduce -> 'action 41'
actionsTable[391] = 42; // 'state 12' -> DASH -> reduce -> 'action 42'
actionsTable[392] = 43; // 'state 12' -> @par-gen.EOF -> reduce -> 'action 43'
actionsTable[324] = 44; // 'state 10' -> QUANTIFIER -> shift -> 'action 44'
actionsTable[320] = 45; // 'state 10' -> CHARACTER -> reduce -> 'action 45'
actionsTable[321] = 46; // 'state 10' -> UNION -> reduce -> 'action 46'
actionsTable[322] = 47; // 'state 10' -> PAREN_OPEN -> reduce -> 'action 47'
actionsTable[323] = 48; // 'state 10' -> PAREN_CLOSE -> reduce -> 'action 48'
actionsTable[325] = 49; // 'state 10' -> BRACKET_OPEN -> reduce -> 'action 49'
actionsTable[327] = 50; // 'state 10' -> DASH -> reduce -> 'action 50'
actionsTable[328] = 51; // 'state 10' -> @par-gen.EOF -> reduce -> 'action 51'
actionsTable[356] = 52; // 'state 11' -> QUANTIFIER -> shift -> 'action 52'
actionsTable[352] = 53; // 'state 11' -> CHARACTER -> reduce -> 'action 53'
actionsTable[353] = 54; // 'state 11' -> UNION -> reduce -> 'action 54'
actionsTable[354] = 55; // 'state 11' -> PAREN_OPEN -> reduce -> 'action 55'
actionsTable[355] = 56; // 'state 11' -> PAREN_CLOSE -> reduce -> 'action 56'
actionsTable[357] = 57; // 'state 11' -> BRACKET_OPEN -> reduce -> 'action 57'
actionsTable[359] = 58; // 'state 11' -> DASH -> reduce -> 'action 58'
actionsTable[360] = 59; // 'state 11' -> @par-gen.EOF -> reduce -> 'action 59'
actionsTable[32] = 60; // 'state 1' -> CHARACTER -> reduce -> 'action 60'
actionsTable[33] = 61; // 'state 1' -> UNION -> reduce -> 'action 61'
actionsTable[34] = 62; // 'state 1' -> PAREN_OPEN -> reduce -> 'action 62'
actionsTable[35] = 63; // 'state 1' -> PAREN_CLOSE -> reduce -> 'action 63'
actionsTable[36] = 64; // 'state 1' -> QUANTIFIER -> reduce -> 'action 64'
actionsTable[37] = 65; // 'state 1' -> BRACKET_OPEN -> reduce -> 'action 65'
actionsTable[39] = 66; // 'state 1' -> DASH -> reduce -> 'action 66'
actionsTable[40] = 67; // 'state 1' -> @par-gen.EOF -> reduce -> 'action 67'
actionsTable[128] = 68; // 'state 4' -> CHARACTER -> reduce -> 'action 68'
actionsTable[129] = 69; // 'state 4' -> UNION -> reduce -> 'action 69'
actionsTable[130] = 70; // 'state 4' -> PAREN_OPEN -> reduce -> 'action 70'
actionsTable[131] = 71; // 'state 4' -> PAREN_CLOSE -> reduce -> 'action 71'
actionsTable[132] = 72; // 'state 4' -> QUANTIFIER -> reduce -> 'action 72'
actionsTable[133] = 73; // 'state 4' -> BRACKET_OPEN -> reduce -> 'action 73'
actionsTable[135] = 74; // 'state 4' -> DASH -> reduce -> 'action 74'
actionsTable[136] = 75; // 'state 4' -> @par-gen.EOF -> reduce -> 'action 75'
actionsTable[64] = 76; // 'state 2' -> CHARACTER -> shift -> 'action 76'
actionsTable[66] = 77; // 'state 2' -> PAREN_OPEN -> shift -> 'action 77'
actionsTable[69] = 78; // 'state 2' -> BRACKET_OPEN -> shift -> 'action 78'
actionsTable[71] = 79; // 'state 2' -> DASH -> shift -> 'action 79'
actionsTable[77] = 80; // 'state 2' -> Union -> shift -> 'action 80'
actionsTable[78] = 81; // 'state 2' -> Sequence -> shift -> 'action 81'
actionsTable[79] = 82; // 'state 2' -> Atom -> shift -> 'action 82'
actionsTable[80] = 83; // 'state 2' -> Group -> shift -> 'action 83'
actionsTable[81] = 84; // 'state 2' -> CharacterClass -> shift -> 'action 84'
actionsTable[84] = 85; // 'state 2' -> Character -> shift -> 'action 85'
actionsTable[96] = 86; // 'state 3' -> CHARACTER -> shift -> 'action 86'
actionsTable[103] = 87; // 'state 3' -> DASH -> shift -> 'action 87'
actionsTable[114] = 88; // 'state 3' -> CharacterClassCharacters -> shift -> 'action 88'
actionsTable[115] = 89; // 'state 3' -> CharacterClassRange -> shift -> 'action 89'
actionsTable[416] = 90; // 'state 13' -> CHARACTER -> shift -> 'action 90'
actionsTable[418] = 91; // 'state 13' -> PAREN_OPEN -> shift -> 'action 91'
actionsTable[421] = 92; // 'state 13' -> BRACKET_OPEN -> shift -> 'action 92'
actionsTable[423] = 93; // 'state 13' -> DASH -> shift -> 'action 93'
actionsTable[430] = 94; // 'state 13' -> Sequence -> shift -> 'action 94'
actionsTable[431] = 95; // 'state 13' -> Atom -> shift -> 'action 95'
actionsTable[432] = 96; // 'state 13' -> Group -> shift -> 'action 96'
actionsTable[433] = 97; // 'state 13' -> CharacterClass -> shift -> 'action 97'
actionsTable[436] = 98; // 'state 13' -> Character -> shift -> 'action 98'
actionsTable[480] = 99; // 'state 15' -> CHARACTER -> shift -> 'action 99'
actionsTable[482] = 100; // 'state 15' -> PAREN_OPEN -> shift -> 'action 100'
actionsTable[485] = 101; // 'state 15' -> BRACKET_OPEN -> shift -> 'action 101'
actionsTable[487] = 102; // 'state 15' -> DASH -> shift -> 'action 102'
actionsTable[494] = 103; // 'state 15' -> Sequence -> shift -> 'action 103'
actionsTable[495] = 104; // 'state 15' -> Atom -> shift -> 'action 104'
actionsTable[496] = 105; // 'state 15' -> Group -> shift -> 'action 105'
actionsTable[497] = 106; // 'state 15' -> CharacterClass -> shift -> 'action 106'
actionsTable[500] = 107; // 'state 15' -> Character -> shift -> 'action 107'
actionsTable[608] = 108; // 'state 19' -> CHARACTER -> reduce -> 'action 108'
actionsTable[609] = 109; // 'state 19' -> UNION -> reduce -> 'action 109'
actionsTable[610] = 110; // 'state 19' -> PAREN_OPEN -> reduce -> 'action 110'
actionsTable[611] = 111; // 'state 19' -> PAREN_CLOSE -> reduce -> 'action 111'
actionsTable[613] = 112; // 'state 19' -> BRACKET_OPEN -> reduce -> 'action 112'
actionsTable[615] = 113; // 'state 19' -> DASH -> reduce -> 'action 113'
actionsTable[616] = 114; // 'state 19' -> @par-gen.EOF -> reduce -> 'action 114'
actionsTable[708] = 115; // 'state 22' -> QUANTIFIER -> shift -> 'action 115'
actionsTable[704] = 116; // 'state 22' -> CHARACTER -> reduce -> 'action 116'
actionsTable[705] = 117; // 'state 22' -> UNION -> reduce -> 'action 117'
actionsTable[706] = 118; // 'state 22' -> PAREN_OPEN -> reduce -> 'action 118'
actionsTable[707] = 119; // 'state 22' -> PAREN_CLOSE -> reduce -> 'action 119'
actionsTable[709] = 120; // 'state 22' -> BRACKET_OPEN -> reduce -> 'action 120'
actionsTable[711] = 121; // 'state 22' -> DASH -> reduce -> 'action 121'
actionsTable[712] = 122; // 'state 22' -> @par-gen.EOF -> reduce -> 'action 122'
actionsTable[644] = 123; // 'state 20' -> QUANTIFIER -> shift -> 'action 123'
actionsTable[640] = 124; // 'state 20' -> CHARACTER -> reduce -> 'action 124'
actionsTable[641] = 125; // 'state 20' -> UNION -> reduce -> 'action 125'
actionsTable[642] = 126; // 'state 20' -> PAREN_OPEN -> reduce -> 'action 126'
actionsTable[643] = 127; // 'state 20' -> PAREN_CLOSE -> reduce -> 'action 127'
actionsTable[645] = 128; // 'state 20' -> BRACKET_OPEN -> reduce -> 'action 128'
actionsTable[647] = 129; // 'state 20' -> DASH -> reduce -> 'action 129'
actionsTable[648] = 130; // 'state 20' -> @par-gen.EOF -> reduce -> 'action 130'
actionsTable[676] = 131; // 'state 21' -> QUANTIFIER -> shift -> 'action 131'
actionsTable[672] = 132; // 'state 21' -> CHARACTER -> reduce -> 'action 132'
actionsTable[673] = 133; // 'state 21' -> UNION -> reduce -> 'action 133'
actionsTable[674] = 134; // 'state 21' -> PAREN_OPEN -> reduce -> 'action 134'
actionsTable[675] = 135; // 'state 21' -> PAREN_CLOSE -> reduce -> 'action 135'
actionsTable[677] = 136; // 'state 21' -> BRACKET_OPEN -> reduce -> 'action 136'
actionsTable[679] = 137; // 'state 21' -> DASH -> reduce -> 'action 137'
actionsTable[680] = 138; // 'state 21' -> @par-gen.EOF -> reduce -> 'action 138'
actionsTable[448] = 139; // 'state 14' -> CHARACTER -> reduce -> 'action 139'
actionsTable[449] = 140; // 'state 14' -> UNION -> reduce -> 'action 140'
actionsTable[450] = 141; // 'state 14' -> PAREN_OPEN -> reduce -> 'action 141'
actionsTable[451] = 142; // 'state 14' -> PAREN_CLOSE -> reduce -> 'action 142'
actionsTable[452] = 143; // 'state 14' -> QUANTIFIER -> reduce -> 'action 143'
actionsTable[453] = 144; // 'state 14' -> BRACKET_OPEN -> reduce -> 'action 144'
actionsTable[455] = 145; // 'state 14' -> DASH -> reduce -> 'action 145'
actionsTable[456] = 146; // 'state 14' -> @par-gen.EOF -> reduce -> 'action 146'
actionsTable[576] = 147; // 'state 18' -> CHARACTER -> reduce -> 'action 147'
actionsTable[577] = 148; // 'state 18' -> UNION -> reduce -> 'action 148'
actionsTable[578] = 149; // 'state 18' -> PAREN_OPEN -> reduce -> 'action 149'
actionsTable[579] = 150; // 'state 18' -> PAREN_CLOSE -> reduce -> 'action 150'
actionsTable[580] = 151; // 'state 18' -> QUANTIFIER -> reduce -> 'action 151'
actionsTable[581] = 152; // 'state 18' -> BRACKET_OPEN -> reduce -> 'action 152'
actionsTable[583] = 153; // 'state 18' -> DASH -> reduce -> 'action 153'
actionsTable[584] = 154; // 'state 18' -> @par-gen.EOF -> reduce -> 'action 154'
actionsTable[512] = 155; // 'state 16' -> CHARACTER -> shift -> 'action 155'
actionsTable[514] = 156; // 'state 16' -> PAREN_OPEN -> shift -> 'action 156'
actionsTable[517] = 157; // 'state 16' -> BRACKET_OPEN -> shift -> 'action 157'
actionsTable[519] = 158; // 'state 16' -> DASH -> shift -> 'action 158'
actionsTable[525] = 159; // 'state 16' -> Union -> shift -> 'action 159'
actionsTable[526] = 160; // 'state 16' -> Sequence -> shift -> 'action 160'
actionsTable[527] = 161; // 'state 16' -> Atom -> shift -> 'action 161'
actionsTable[528] = 162; // 'state 16' -> Group -> shift -> 'action 162'
actionsTable[529] = 163; // 'state 16' -> CharacterClass -> shift -> 'action 163'
actionsTable[532] = 164; // 'state 16' -> Character -> shift -> 'action 164'
actionsTable[544] = 165; // 'state 17' -> CHARACTER -> shift -> 'action 165'
actionsTable[551] = 166; // 'state 17' -> DASH -> shift -> 'action 166'
actionsTable[562] = 167; // 'state 17' -> CharacterClassCharacters -> shift -> 'action 167'
actionsTable[563] = 168; // 'state 17' -> CharacterClassRange -> shift -> 'action 168'
actionsTable[768] = 169; // 'state 24' -> CHARACTER -> shift -> 'action 169'
actionsTable[770] = 170; // 'state 24' -> PAREN_OPEN -> shift -> 'action 170'
actionsTable[773] = 171; // 'state 24' -> BRACKET_OPEN -> shift -> 'action 171'
actionsTable[775] = 172; // 'state 24' -> DASH -> shift -> 'action 172'
actionsTable[782] = 173; // 'state 24' -> Sequence -> shift -> 'action 173'
actionsTable[783] = 174; // 'state 24' -> Atom -> shift -> 'action 174'
actionsTable[784] = 175; // 'state 24' -> Group -> shift -> 'action 175'
actionsTable[785] = 176; // 'state 24' -> CharacterClass -> shift -> 'action 176'
actionsTable[788] = 177; // 'state 24' -> Character -> shift -> 'action 177'
actionsTable[896] = 178; // 'state 28' -> CHARACTER -> reduce -> 'action 178'
actionsTable[897] = 179; // 'state 28' -> UNION -> reduce -> 'action 179'
actionsTable[898] = 180; // 'state 28' -> PAREN_OPEN -> reduce -> 'action 180'
actionsTable[899] = 181; // 'state 28' -> PAREN_CLOSE -> reduce -> 'action 181'
actionsTable[901] = 182; // 'state 28' -> BRACKET_OPEN -> reduce -> 'action 182'
actionsTable[903] = 183; // 'state 28' -> DASH -> reduce -> 'action 183'
actionsTable[904] = 184; // 'state 28' -> @par-gen.EOF -> reduce -> 'action 184'
actionsTable[996] = 185; // 'state 31' -> QUANTIFIER -> shift -> 'action 185'
actionsTable[992] = 186; // 'state 31' -> CHARACTER -> reduce -> 'action 186'
actionsTable[993] = 187; // 'state 31' -> UNION -> reduce -> 'action 187'
actionsTable[994] = 188; // 'state 31' -> PAREN_OPEN -> reduce -> 'action 188'
actionsTable[995] = 189; // 'state 31' -> PAREN_CLOSE -> reduce -> 'action 189'
actionsTable[997] = 190; // 'state 31' -> BRACKET_OPEN -> reduce -> 'action 190'
actionsTable[999] = 191; // 'state 31' -> DASH -> reduce -> 'action 191'
actionsTable[1000] = 192; // 'state 31' -> @par-gen.EOF -> reduce -> 'action 192'
actionsTable[932] = 193; // 'state 29' -> QUANTIFIER -> shift -> 'action 193'
actionsTable[928] = 194; // 'state 29' -> CHARACTER -> reduce -> 'action 194'
actionsTable[929] = 195; // 'state 29' -> UNION -> reduce -> 'action 195'
actionsTable[930] = 196; // 'state 29' -> PAREN_OPEN -> reduce -> 'action 196'
actionsTable[931] = 197; // 'state 29' -> PAREN_CLOSE -> reduce -> 'action 197'
actionsTable[933] = 198; // 'state 29' -> BRACKET_OPEN -> reduce -> 'action 198'
actionsTable[935] = 199; // 'state 29' -> DASH -> reduce -> 'action 199'
actionsTable[936] = 200; // 'state 29' -> @par-gen.EOF -> reduce -> 'action 200'
actionsTable[964] = 201; // 'state 30' -> QUANTIFIER -> shift -> 'action 201'
actionsTable[960] = 202; // 'state 30' -> CHARACTER -> reduce -> 'action 202'
actionsTable[961] = 203; // 'state 30' -> UNION -> reduce -> 'action 203'
actionsTable[962] = 204; // 'state 30' -> PAREN_OPEN -> reduce -> 'action 204'
actionsTable[963] = 205; // 'state 30' -> PAREN_CLOSE -> reduce -> 'action 205'
actionsTable[965] = 206; // 'state 30' -> BRACKET_OPEN -> reduce -> 'action 206'
actionsTable[967] = 207; // 'state 30' -> DASH -> reduce -> 'action 207'
actionsTable[968] = 208; // 'state 30' -> @par-gen.EOF -> reduce -> 'action 208'
actionsTable[736] = 209; // 'state 23' -> CHARACTER -> reduce -> 'action 209'
actionsTable[737] = 210; // 'state 23' -> UNION -> reduce -> 'action 210'
actionsTable[738] = 211; // 'state 23' -> PAREN_OPEN -> reduce -> 'action 211'
actionsTable[739] = 212; // 'state 23' -> PAREN_CLOSE -> reduce -> 'action 212'
actionsTable[740] = 213; // 'state 23' -> QUANTIFIER -> reduce -> 'action 213'
actionsTable[741] = 214; // 'state 23' -> BRACKET_OPEN -> reduce -> 'action 214'
actionsTable[743] = 215; // 'state 23' -> DASH -> reduce -> 'action 215'
actionsTable[744] = 216; // 'state 23' -> @par-gen.EOF -> reduce -> 'action 216'
actionsTable[864] = 217; // 'state 27' -> CHARACTER -> reduce -> 'action 217'
actionsTable[865] = 218; // 'state 27' -> UNION -> reduce -> 'action 218'
actionsTable[866] = 219; // 'state 27' -> PAREN_OPEN -> reduce -> 'action 219'
actionsTable[867] = 220; // 'state 27' -> PAREN_CLOSE -> reduce -> 'action 220'
actionsTable[868] = 221; // 'state 27' -> QUANTIFIER -> reduce -> 'action 221'
actionsTable[869] = 222; // 'state 27' -> BRACKET_OPEN -> reduce -> 'action 222'
actionsTable[871] = 223; // 'state 27' -> DASH -> reduce -> 'action 223'
actionsTable[872] = 224; // 'state 27' -> @par-gen.EOF -> reduce -> 'action 224'
actionsTable[800] = 225; // 'state 25' -> CHARACTER -> shift -> 'action 225'
actionsTable[802] = 226; // 'state 25' -> PAREN_OPEN -> shift -> 'action 226'
actionsTable[805] = 227; // 'state 25' -> BRACKET_OPEN -> shift -> 'action 227'
actionsTable[807] = 228; // 'state 25' -> DASH -> shift -> 'action 228'
actionsTable[813] = 229; // 'state 25' -> Union -> shift -> 'action 229'
actionsTable[814] = 230; // 'state 25' -> Sequence -> shift -> 'action 230'
actionsTable[815] = 231; // 'state 25' -> Atom -> shift -> 'action 231'
actionsTable[816] = 232; // 'state 25' -> Group -> shift -> 'action 232'
actionsTable[817] = 233; // 'state 25' -> CharacterClass -> shift -> 'action 233'
actionsTable[820] = 234; // 'state 25' -> Character -> shift -> 'action 234'
actionsTable[832] = 235; // 'state 26' -> CHARACTER -> shift -> 'action 235'
actionsTable[839] = 236; // 'state 26' -> DASH -> shift -> 'action 236'
actionsTable[850] = 237; // 'state 26' -> CharacterClassCharacters -> shift -> 'action 237'
actionsTable[851] = 238; // 'state 26' -> CharacterClassRange -> shift -> 'action 238'
actionsTable[1024] = 239; // 'state 32' -> CHARACTER -> reduce -> 'action 239'
actionsTable[1025] = 240; // 'state 32' -> UNION -> reduce -> 'action 240'
actionsTable[1026] = 241; // 'state 32' -> PAREN_OPEN -> reduce -> 'action 241'
actionsTable[1027] = 242; // 'state 32' -> PAREN_CLOSE -> reduce -> 'action 242'
actionsTable[1029] = 243; // 'state 32' -> BRACKET_OPEN -> reduce -> 'action 243'
actionsTable[1031] = 244; // 'state 32' -> DASH -> reduce -> 'action 244'
actionsTable[1032] = 245; // 'state 32' -> @par-gen.EOF -> reduce -> 'action 245'
actionsTable[1056] = 246; // 'state 33' -> CHARACTER -> reduce -> 'action 246'
actionsTable[1057] = 247; // 'state 33' -> UNION -> reduce -> 'action 247'
actionsTable[1058] = 248; // 'state 33' -> PAREN_OPEN -> reduce -> 'action 248'
actionsTable[1059] = 249; // 'state 33' -> PAREN_CLOSE -> reduce -> 'action 249'
actionsTable[1061] = 250; // 'state 33' -> BRACKET_OPEN -> reduce -> 'action 250'
actionsTable[1063] = 251; // 'state 33' -> DASH -> reduce -> 'action 251'
actionsTable[1064] = 252; // 'state 33' -> @par-gen.EOF -> reduce -> 'action 252'
actionsTable[1088] = 253; // 'state 34' -> CHARACTER -> reduce -> 'action 253'
actionsTable[1089] = 254; // 'state 34' -> UNION -> reduce -> 'action 254'
actionsTable[1090] = 255; // 'state 34' -> PAREN_OPEN -> reduce -> 'action 255'
actionsTable[1091] = 256; // 'state 34' -> PAREN_CLOSE -> reduce -> 'action 256'
actionsTable[1093] = 257; // 'state 34' -> BRACKET_OPEN -> reduce -> 'action 257'
actionsTable[1095] = 258; // 'state 34' -> DASH -> reduce -> 'action 258'
actionsTable[1096] = 259; // 'state 34' -> @par-gen.EOF -> reduce -> 'action 259'
actionsTable[1153] = 260; // 'state 36' -> UNION -> shift -> 'action 260'
actionsTable[1155] = 261; // 'state 36' -> PAREN_CLOSE -> shift -> 'action 261'
actionsTable[1184] = 262; // 'state 37' -> CHARACTER -> shift -> 'action 262'
actionsTable[1185] = 263; // 'state 37' -> UNION -> shift -> 'action 263'
actionsTable[1186] = 264; // 'state 37' -> PAREN_OPEN -> shift -> 'action 264'
actionsTable[1187] = 265; // 'state 37' -> PAREN_CLOSE -> shift -> 'action 265'
actionsTable[1189] = 266; // 'state 37' -> BRACKET_OPEN -> shift -> 'action 266'
actionsTable[1191] = 267; // 'state 37' -> DASH -> shift -> 'action 267'
actionsTable[1199] = 268; // 'state 37' -> Atom -> shift -> 'action 268'
actionsTable[1200] = 269; // 'state 37' -> Group -> shift -> 'action 269'
actionsTable[1201] = 270; // 'state 37' -> CharacterClass -> shift -> 'action 270'
actionsTable[1204] = 271; // 'state 37' -> Character -> shift -> 'action 271'
actionsTable[1216] = 272; // 'state 38' -> CHARACTER -> shift -> 'action 272'
actionsTable[1217] = 273; // 'state 38' -> UNION -> shift -> 'action 273'
actionsTable[1218] = 274; // 'state 38' -> PAREN_OPEN -> shift -> 'action 274'
actionsTable[1219] = 275; // 'state 38' -> PAREN_CLOSE -> shift -> 'action 275'
actionsTable[1221] = 276; // 'state 38' -> BRACKET_OPEN -> shift -> 'action 276'
actionsTable[1223] = 277; // 'state 38' -> DASH -> shift -> 'action 277'
actionsTable[1231] = 278; // 'state 38' -> Atom -> shift -> 'action 278'
actionsTable[1232] = 279; // 'state 38' -> Group -> shift -> 'action 279'
actionsTable[1233] = 280; // 'state 38' -> CharacterClass -> shift -> 'action 280'
actionsTable[1236] = 281; // 'state 38' -> Character -> shift -> 'action 281'
actionsTable[1120] = 282; // 'state 35' -> CHARACTER -> shift -> 'action 282'
actionsTable[1127] = 283; // 'state 35' -> DASH -> shift -> 'action 283'
actionsTable[1138] = 284; // 'state 35' -> CharacterClassCharacters -> shift -> 'action 284'
actionsTable[1139] = 285; // 'state 35' -> CharacterClassRange -> shift -> 'action 285'
actionsTable[1312] = 286; // 'state 41' -> CHARACTER -> shift -> 'action 286'
actionsTable[1318] = 287; // 'state 41' -> BRACKET_CLOSE -> shift -> 'action 287'
actionsTable[1331] = 288; // 'state 41' -> CharacterClassRange -> shift -> 'action 288'
actionsTable[1255] = 289; // 'state 39' -> DASH -> shift -> 'action 289'
actionsTable[1248] = 290; // 'state 39' -> CHARACTER -> reduce -> 'action 290'
actionsTable[1254] = 291; // 'state 39' -> BRACKET_CLOSE -> reduce -> 'action 291'
actionsTable[1344] = 292; // 'state 42' -> CHARACTER -> reduce -> 'action 292'
actionsTable[1350] = 293; // 'state 42' -> BRACKET_CLOSE -> reduce -> 'action 293'
actionsTable[1280] = 294; // 'state 40' -> CHARACTER -> shift -> 'action 294'
actionsTable[1286] = 295; // 'state 40' -> BRACKET_CLOSE -> shift -> 'action 295'
actionsTable[1298] = 296; // 'state 40' -> CharacterClassCharacters -> shift -> 'action 296'
actionsTable[1299] = 297; // 'state 40' -> CharacterClassRange -> shift -> 'action 297'
actionsTable[1376] = 298; // 'state 43' -> CHARACTER -> shift -> 'action 298'
actionsTable[1378] = 299; // 'state 43' -> PAREN_OPEN -> shift -> 'action 299'
actionsTable[1381] = 300; // 'state 43' -> BRACKET_OPEN -> shift -> 'action 300'
actionsTable[1383] = 301; // 'state 43' -> DASH -> shift -> 'action 301'
actionsTable[1391] = 302; // 'state 43' -> Atom -> shift -> 'action 302'
actionsTable[1392] = 303; // 'state 43' -> Group -> shift -> 'action 303'
actionsTable[1393] = 304; // 'state 43' -> CharacterClass -> shift -> 'action 304'
actionsTable[1396] = 305; // 'state 43' -> Character -> shift -> 'action 305'
actionsTable[1377] = 306; // 'state 43' -> UNION -> reduce -> 'action 306'
actionsTable[1379] = 307; // 'state 43' -> PAREN_CLOSE -> reduce -> 'action 307'
actionsTable[1384] = 308; // 'state 43' -> @par-gen.EOF -> reduce -> 'action 308'
actionsTable[1408] = 309; // 'state 44' -> CHARACTER -> shift -> 'action 309'
actionsTable[1410] = 310; // 'state 44' -> PAREN_OPEN -> shift -> 'action 310'
actionsTable[1413] = 311; // 'state 44' -> BRACKET_OPEN -> shift -> 'action 311'
actionsTable[1415] = 312; // 'state 44' -> DASH -> shift -> 'action 312'
actionsTable[1423] = 313; // 'state 44' -> Atom -> shift -> 'action 313'
actionsTable[1424] = 314; // 'state 44' -> Group -> shift -> 'action 314'
actionsTable[1425] = 315; // 'state 44' -> CharacterClass -> shift -> 'action 315'
actionsTable[1428] = 316; // 'state 44' -> Character -> shift -> 'action 316'
actionsTable[1409] = 317; // 'state 44' -> UNION -> reduce -> 'action 317'
actionsTable[1411] = 318; // 'state 44' -> PAREN_CLOSE -> reduce -> 'action 318'
actionsTable[1416] = 319; // 'state 44' -> @par-gen.EOF -> reduce -> 'action 319'
actionsTable[1440] = 320; // 'state 45' -> CHARACTER -> shift -> 'action 320'
actionsTable[1442] = 321; // 'state 45' -> PAREN_OPEN -> shift -> 'action 321'
actionsTable[1445] = 322; // 'state 45' -> BRACKET_OPEN -> shift -> 'action 322'
actionsTable[1447] = 323; // 'state 45' -> DASH -> shift -> 'action 323'
actionsTable[1455] = 324; // 'state 45' -> Atom -> shift -> 'action 324'
actionsTable[1456] = 325; // 'state 45' -> Group -> shift -> 'action 325'
actionsTable[1457] = 326; // 'state 45' -> CharacterClass -> shift -> 'action 326'
actionsTable[1460] = 327; // 'state 45' -> Character -> shift -> 'action 327'
actionsTable[1441] = 328; // 'state 45' -> UNION -> reduce -> 'action 328'
actionsTable[1443] = 329; // 'state 45' -> PAREN_CLOSE -> reduce -> 'action 329'
actionsTable[1448] = 330; // 'state 45' -> @par-gen.EOF -> reduce -> 'action 330'
actionsTable[1472] = 331; // 'state 46' -> CHARACTER -> shift -> 'action 331'
actionsTable[1474] = 332; // 'state 46' -> PAREN_OPEN -> shift -> 'action 332'
actionsTable[1477] = 333; // 'state 46' -> BRACKET_OPEN -> shift -> 'action 333'
actionsTable[1479] = 334; // 'state 46' -> DASH -> shift -> 'action 334'
actionsTable[1487] = 335; // 'state 46' -> Atom -> shift -> 'action 335'
actionsTable[1488] = 336; // 'state 46' -> Group -> shift -> 'action 336'
actionsTable[1489] = 337; // 'state 46' -> CharacterClass -> shift -> 'action 337'
actionsTable[1492] = 338; // 'state 46' -> Character -> shift -> 'action 338'
actionsTable[1473] = 339; // 'state 46' -> UNION -> reduce -> 'action 339'
actionsTable[1475] = 340; // 'state 46' -> PAREN_CLOSE -> reduce -> 'action 340'
actionsTable[1480] = 341; // 'state 46' -> @par-gen.EOF -> reduce -> 'action 341'
actionsTable[1504] = 342; // 'state 47' -> CHARACTER -> reduce -> 'action 342'
actionsTable[1505] = 343; // 'state 47' -> UNION -> reduce -> 'action 343'
actionsTable[1506] = 344; // 'state 47' -> PAREN_OPEN -> reduce -> 'action 344'
actionsTable[1507] = 345; // 'state 47' -> PAREN_CLOSE -> reduce -> 'action 345'
actionsTable[1509] = 346; // 'state 47' -> BRACKET_OPEN -> reduce -> 'action 346'
actionsTable[1511] = 347; // 'state 47' -> DASH -> reduce -> 'action 347'
actionsTable[1512] = 348; // 'state 47' -> @par-gen.EOF -> reduce -> 'action 348'
actionsTable[1536] = 349; // 'state 48' -> CHARACTER -> reduce -> 'action 349'
actionsTable[1537] = 350; // 'state 48' -> UNION -> reduce -> 'action 350'
actionsTable[1538] = 351; // 'state 48' -> PAREN_OPEN -> reduce -> 'action 351'
actionsTable[1539] = 352; // 'state 48' -> PAREN_CLOSE -> reduce -> 'action 352'
actionsTable[1541] = 353; // 'state 48' -> BRACKET_OPEN -> reduce -> 'action 353'
actionsTable[1543] = 354; // 'state 48' -> DASH -> reduce -> 'action 354'
actionsTable[1544] = 355; // 'state 48' -> @par-gen.EOF -> reduce -> 'action 355'
actionsTable[1568] = 356; // 'state 49' -> CHARACTER -> reduce -> 'action 356'
actionsTable[1569] = 357; // 'state 49' -> UNION -> reduce -> 'action 357'
actionsTable[1570] = 358; // 'state 49' -> PAREN_OPEN -> reduce -> 'action 358'
actionsTable[1571] = 359; // 'state 49' -> PAREN_CLOSE -> reduce -> 'action 359'
actionsTable[1573] = 360; // 'state 49' -> BRACKET_OPEN -> reduce -> 'action 360'
actionsTable[1575] = 361; // 'state 49' -> DASH -> reduce -> 'action 361'
actionsTable[1576] = 362; // 'state 49' -> @par-gen.EOF -> reduce -> 'action 362'
actionsTable[1601] = 363; // 'state 50' -> UNION -> shift -> 'action 363'
actionsTable[1603] = 364; // 'state 50' -> PAREN_CLOSE -> shift -> 'action 364'
actionsTable[1632] = 365; // 'state 51' -> CHARACTER -> shift -> 'action 365'
actionsTable[1633] = 366; // 'state 51' -> UNION -> shift -> 'action 366'
actionsTable[1634] = 367; // 'state 51' -> PAREN_OPEN -> shift -> 'action 367'
actionsTable[1635] = 368; // 'state 51' -> PAREN_CLOSE -> shift -> 'action 368'
actionsTable[1637] = 369; // 'state 51' -> BRACKET_OPEN -> shift -> 'action 369'
actionsTable[1639] = 370; // 'state 51' -> DASH -> shift -> 'action 370'
actionsTable[1647] = 371; // 'state 51' -> Atom -> shift -> 'action 371'
actionsTable[1648] = 372; // 'state 51' -> Group -> shift -> 'action 372'
actionsTable[1649] = 373; // 'state 51' -> CharacterClass -> shift -> 'action 373'
actionsTable[1652] = 374; // 'state 51' -> Character -> shift -> 'action 374'
actionsTable[1664] = 375; // 'state 52' -> CHARACTER -> shift -> 'action 375'
actionsTable[1665] = 376; // 'state 52' -> UNION -> shift -> 'action 376'
actionsTable[1666] = 377; // 'state 52' -> PAREN_OPEN -> shift -> 'action 377'
actionsTable[1667] = 378; // 'state 52' -> PAREN_CLOSE -> shift -> 'action 378'
actionsTable[1669] = 379; // 'state 52' -> BRACKET_OPEN -> shift -> 'action 379'
actionsTable[1671] = 380; // 'state 52' -> DASH -> shift -> 'action 380'
actionsTable[1679] = 381; // 'state 52' -> Atom -> shift -> 'action 381'
actionsTable[1680] = 382; // 'state 52' -> Group -> shift -> 'action 382'
actionsTable[1681] = 383; // 'state 52' -> CharacterClass -> shift -> 'action 383'
actionsTable[1684] = 384; // 'state 52' -> Character -> shift -> 'action 384'
actionsTable[1760] = 385; // 'state 55' -> CHARACTER -> shift -> 'action 385'
actionsTable[1766] = 386; // 'state 55' -> BRACKET_CLOSE -> shift -> 'action 386'
actionsTable[1779] = 387; // 'state 55' -> CharacterClassRange -> shift -> 'action 387'
actionsTable[1703] = 388; // 'state 53' -> DASH -> shift -> 'action 388'
actionsTable[1696] = 389; // 'state 53' -> CHARACTER -> reduce -> 'action 389'
actionsTable[1702] = 390; // 'state 53' -> BRACKET_CLOSE -> reduce -> 'action 390'
actionsTable[1792] = 391; // 'state 56' -> CHARACTER -> reduce -> 'action 391'
actionsTable[1798] = 392; // 'state 56' -> BRACKET_CLOSE -> reduce -> 'action 392'
actionsTable[1728] = 393; // 'state 54' -> CHARACTER -> shift -> 'action 393'
actionsTable[1734] = 394; // 'state 54' -> BRACKET_CLOSE -> shift -> 'action 394'
actionsTable[1746] = 395; // 'state 54' -> CharacterClassCharacters -> shift -> 'action 395'
actionsTable[1747] = 396; // 'state 54' -> CharacterClassRange -> shift -> 'action 396'
actionsTable[1824] = 397; // 'state 57' -> CHARACTER -> shift -> 'action 397'
actionsTable[1826] = 398; // 'state 57' -> PAREN_OPEN -> shift -> 'action 398'
actionsTable[1829] = 399; // 'state 57' -> BRACKET_OPEN -> shift -> 'action 399'
actionsTable[1831] = 400; // 'state 57' -> DASH -> shift -> 'action 400'
actionsTable[1839] = 401; // 'state 57' -> Atom -> shift -> 'action 401'
actionsTable[1840] = 402; // 'state 57' -> Group -> shift -> 'action 402'
actionsTable[1841] = 403; // 'state 57' -> CharacterClass -> shift -> 'action 403'
actionsTable[1844] = 404; // 'state 57' -> Character -> shift -> 'action 404'
actionsTable[1825] = 405; // 'state 57' -> UNION -> reduce -> 'action 405'
actionsTable[1827] = 406; // 'state 57' -> PAREN_CLOSE -> reduce -> 'action 406'
actionsTable[1832] = 407; // 'state 57' -> @par-gen.EOF -> reduce -> 'action 407'
actionsTable[1856] = 408; // 'state 58' -> CHARACTER -> shift -> 'action 408'
actionsTable[1858] = 409; // 'state 58' -> PAREN_OPEN -> shift -> 'action 409'
actionsTable[1861] = 410; // 'state 58' -> BRACKET_OPEN -> shift -> 'action 410'
actionsTable[1863] = 411; // 'state 58' -> DASH -> shift -> 'action 411'
actionsTable[1871] = 412; // 'state 58' -> Atom -> shift -> 'action 412'
actionsTable[1872] = 413; // 'state 58' -> Group -> shift -> 'action 413'
actionsTable[1873] = 414; // 'state 58' -> CharacterClass -> shift -> 'action 414'
actionsTable[1876] = 415; // 'state 58' -> Character -> shift -> 'action 415'
actionsTable[1857] = 416; // 'state 58' -> UNION -> reduce -> 'action 416'
actionsTable[1859] = 417; // 'state 58' -> PAREN_CLOSE -> reduce -> 'action 417'
actionsTable[1864] = 418; // 'state 58' -> @par-gen.EOF -> reduce -> 'action 418'
actionsTable[1888] = 419; // 'state 59' -> CHARACTER -> reduce -> 'action 419'
actionsTable[1889] = 420; // 'state 59' -> UNION -> reduce -> 'action 420'
actionsTable[1890] = 421; // 'state 59' -> PAREN_OPEN -> reduce -> 'action 421'
actionsTable[1891] = 422; // 'state 59' -> PAREN_CLOSE -> reduce -> 'action 422'
actionsTable[1893] = 423; // 'state 59' -> BRACKET_OPEN -> reduce -> 'action 423'
actionsTable[1895] = 424; // 'state 59' -> DASH -> reduce -> 'action 424'
actionsTable[1896] = 425; // 'state 59' -> @par-gen.EOF -> reduce -> 'action 425'
actionsTable[1920] = 426; // 'state 60' -> CHARACTER -> reduce -> 'action 426'
actionsTable[1921] = 427; // 'state 60' -> UNION -> reduce -> 'action 427'
actionsTable[1922] = 428; // 'state 60' -> PAREN_OPEN -> reduce -> 'action 428'
actionsTable[1923] = 429; // 'state 60' -> PAREN_CLOSE -> reduce -> 'action 429'
actionsTable[1925] = 430; // 'state 60' -> BRACKET_OPEN -> reduce -> 'action 430'
actionsTable[1927] = 431; // 'state 60' -> DASH -> reduce -> 'action 431'
actionsTable[1928] = 432; // 'state 60' -> @par-gen.EOF -> reduce -> 'action 432'
actionsTable[1952] = 433; // 'state 61' -> CHARACTER -> reduce -> 'action 433'
actionsTable[1953] = 434; // 'state 61' -> UNION -> reduce -> 'action 434'
actionsTable[1954] = 435; // 'state 61' -> PAREN_OPEN -> reduce -> 'action 435'
actionsTable[1955] = 436; // 'state 61' -> PAREN_CLOSE -> reduce -> 'action 436'
actionsTable[1957] = 437; // 'state 61' -> BRACKET_OPEN -> reduce -> 'action 437'
actionsTable[1959] = 438; // 'state 61' -> DASH -> reduce -> 'action 438'
actionsTable[1960] = 439; // 'state 61' -> @par-gen.EOF -> reduce -> 'action 439'
actionsTable[1985] = 440; // 'state 62' -> UNION -> shift -> 'action 440'
actionsTable[1987] = 441; // 'state 62' -> PAREN_CLOSE -> shift -> 'action 441'
actionsTable[2016] = 442; // 'state 63' -> CHARACTER -> shift -> 'action 442'
actionsTable[2017] = 443; // 'state 63' -> UNION -> shift -> 'action 443'
actionsTable[2018] = 444; // 'state 63' -> PAREN_OPEN -> shift -> 'action 444'
actionsTable[2019] = 445; // 'state 63' -> PAREN_CLOSE -> shift -> 'action 445'
actionsTable[2021] = 446; // 'state 63' -> BRACKET_OPEN -> shift -> 'action 446'
actionsTable[2023] = 447; // 'state 63' -> DASH -> shift -> 'action 447'
actionsTable[2031] = 448; // 'state 63' -> Atom -> shift -> 'action 448'
actionsTable[2032] = 449; // 'state 63' -> Group -> shift -> 'action 449'
actionsTable[2033] = 450; // 'state 63' -> CharacterClass -> shift -> 'action 450'
actionsTable[2036] = 451; // 'state 63' -> Character -> shift -> 'action 451'
actionsTable[2048] = 452; // 'state 64' -> CHARACTER -> shift -> 'action 452'
actionsTable[2049] = 453; // 'state 64' -> UNION -> shift -> 'action 453'
actionsTable[2050] = 454; // 'state 64' -> PAREN_OPEN -> shift -> 'action 454'
actionsTable[2051] = 455; // 'state 64' -> PAREN_CLOSE -> shift -> 'action 455'
actionsTable[2053] = 456; // 'state 64' -> BRACKET_OPEN -> shift -> 'action 456'
actionsTable[2055] = 457; // 'state 64' -> DASH -> shift -> 'action 457'
actionsTable[2063] = 458; // 'state 64' -> Atom -> shift -> 'action 458'
actionsTable[2064] = 459; // 'state 64' -> Group -> shift -> 'action 459'
actionsTable[2065] = 460; // 'state 64' -> CharacterClass -> shift -> 'action 460'
actionsTable[2068] = 461; // 'state 64' -> Character -> shift -> 'action 461'
actionsTable[2144] = 462; // 'state 67' -> CHARACTER -> shift -> 'action 462'
actionsTable[2150] = 463; // 'state 67' -> BRACKET_CLOSE -> shift -> 'action 463'
actionsTable[2163] = 464; // 'state 67' -> CharacterClassRange -> shift -> 'action 464'
actionsTable[2087] = 465; // 'state 65' -> DASH -> shift -> 'action 465'
actionsTable[2080] = 466; // 'state 65' -> CHARACTER -> reduce -> 'action 466'
actionsTable[2086] = 467; // 'state 65' -> BRACKET_CLOSE -> reduce -> 'action 467'
actionsTable[2176] = 468; // 'state 68' -> CHARACTER -> reduce -> 'action 468'
actionsTable[2182] = 469; // 'state 68' -> BRACKET_CLOSE -> reduce -> 'action 469'
actionsTable[2112] = 470; // 'state 66' -> CHARACTER -> shift -> 'action 470'
actionsTable[2118] = 471; // 'state 66' -> BRACKET_CLOSE -> shift -> 'action 471'
actionsTable[2130] = 472; // 'state 66' -> CharacterClassCharacters -> shift -> 'action 472'
actionsTable[2131] = 473; // 'state 66' -> CharacterClassRange -> shift -> 'action 473'
actionsTable[2208] = 474; // 'state 69' -> CHARACTER -> reduce -> 'action 474'
actionsTable[2209] = 475; // 'state 69' -> UNION -> reduce -> 'action 475'
actionsTable[2210] = 476; // 'state 69' -> PAREN_OPEN -> reduce -> 'action 476'
actionsTable[2211] = 477; // 'state 69' -> PAREN_CLOSE -> reduce -> 'action 477'
actionsTable[2212] = 478; // 'state 69' -> QUANTIFIER -> reduce -> 'action 478'
actionsTable[2213] = 479; // 'state 69' -> BRACKET_OPEN -> reduce -> 'action 479'
actionsTable[2215] = 480; // 'state 69' -> DASH -> reduce -> 'action 480'
actionsTable[2216] = 481; // 'state 69' -> @par-gen.EOF -> reduce -> 'action 481'
actionsTable[2240] = 482; // 'state 70' -> CHARACTER -> reduce -> 'action 482'
actionsTable[2241] = 483; // 'state 70' -> UNION -> reduce -> 'action 483'
actionsTable[2242] = 484; // 'state 70' -> PAREN_OPEN -> reduce -> 'action 484'
actionsTable[2243] = 485; // 'state 70' -> PAREN_CLOSE -> reduce -> 'action 485'
actionsTable[2244] = 486; // 'state 70' -> QUANTIFIER -> reduce -> 'action 486'
actionsTable[2245] = 487; // 'state 70' -> BRACKET_OPEN -> reduce -> 'action 487'
actionsTable[2247] = 488; // 'state 70' -> DASH -> reduce -> 'action 488'
actionsTable[2248] = 489; // 'state 70' -> @par-gen.EOF -> reduce -> 'action 489'
actionsTable[2272] = 490; // 'state 71' -> CHARACTER -> reduce -> 'action 490'
actionsTable[2273] = 491; // 'state 71' -> UNION -> reduce -> 'action 491'
actionsTable[2274] = 492; // 'state 71' -> PAREN_OPEN -> reduce -> 'action 492'
actionsTable[2275] = 493; // 'state 71' -> PAREN_CLOSE -> reduce -> 'action 493'
actionsTable[2276] = 494; // 'state 71' -> QUANTIFIER -> reduce -> 'action 494'
actionsTable[2277] = 495; // 'state 71' -> BRACKET_OPEN -> reduce -> 'action 495'
actionsTable[2279] = 496; // 'state 71' -> DASH -> reduce -> 'action 496'
actionsTable[2280] = 497; // 'state 71' -> @par-gen.EOF -> reduce -> 'action 497'
actionsTable[2368] = 498; // 'state 74' -> CHARACTER -> shift -> 'action 498'
actionsTable[2374] = 499; // 'state 74' -> BRACKET_CLOSE -> shift -> 'action 499'
actionsTable[2387] = 500; // 'state 74' -> CharacterClassRange -> shift -> 'action 500'
actionsTable[2311] = 501; // 'state 72' -> DASH -> shift -> 'action 501'
actionsTable[2304] = 502; // 'state 72' -> CHARACTER -> reduce -> 'action 502'
actionsTable[2310] = 503; // 'state 72' -> BRACKET_CLOSE -> reduce -> 'action 503'
actionsTable[2400] = 504; // 'state 75' -> CHARACTER -> reduce -> 'action 504'
actionsTable[2406] = 505; // 'state 75' -> BRACKET_CLOSE -> reduce -> 'action 505'
actionsTable[2336] = 506; // 'state 73' -> CHARACTER -> shift -> 'action 506'
actionsTable[2342] = 507; // 'state 73' -> BRACKET_CLOSE -> shift -> 'action 507'
actionsTable[2354] = 508; // 'state 73' -> CharacterClassCharacters -> shift -> 'action 508'
actionsTable[2355] = 509; // 'state 73' -> CharacterClassRange -> shift -> 'action 509'
actionsTable[2464] = 510; // 'state 77' -> CHARACTER -> reduce -> 'action 510'
actionsTable[2465] = 511; // 'state 77' -> UNION -> reduce -> 'action 511'
actionsTable[2466] = 512; // 'state 77' -> PAREN_OPEN -> reduce -> 'action 512'
actionsTable[2467] = 513; // 'state 77' -> PAREN_CLOSE -> reduce -> 'action 513'
actionsTable[2468] = 514; // 'state 77' -> QUANTIFIER -> reduce -> 'action 514'
actionsTable[2469] = 515; // 'state 77' -> BRACKET_OPEN -> reduce -> 'action 515'
actionsTable[2471] = 516; // 'state 77' -> DASH -> reduce -> 'action 516'
actionsTable[2472] = 517; // 'state 77' -> @par-gen.EOF -> reduce -> 'action 517'
actionsTable[2439] = 518; // 'state 76' -> DASH -> shift -> 'action 518'
actionsTable[2432] = 519; // 'state 76' -> CHARACTER -> reduce -> 'action 519'
actionsTable[2438] = 520; // 'state 76' -> BRACKET_CLOSE -> reduce -> 'action 520'
actionsTable[2496] = 521; // 'state 78' -> CHARACTER -> reduce -> 'action 521'
actionsTable[2502] = 522; // 'state 78' -> BRACKET_CLOSE -> reduce -> 'action 522'
actionsTable[2528] = 523; // 'state 79' -> CHARACTER -> shift -> 'action 523'
actionsTable[2560] = 524; // 'state 80' -> CHARACTER -> reduce -> 'action 524'
actionsTable[2561] = 525; // 'state 80' -> UNION -> reduce -> 'action 525'
actionsTable[2562] = 526; // 'state 80' -> PAREN_OPEN -> reduce -> 'action 526'
actionsTable[2563] = 527; // 'state 80' -> PAREN_CLOSE -> reduce -> 'action 527'
actionsTable[2564] = 528; // 'state 80' -> QUANTIFIER -> reduce -> 'action 528'
actionsTable[2565] = 529; // 'state 80' -> BRACKET_OPEN -> reduce -> 'action 529'
actionsTable[2567] = 530; // 'state 80' -> DASH -> reduce -> 'action 530'
actionsTable[2568] = 531; // 'state 80' -> @par-gen.EOF -> reduce -> 'action 531'
actionsTable[2592] = 532; // 'state 81' -> CHARACTER -> shift -> 'action 532'
actionsTable[2598] = 533; // 'state 81' -> BRACKET_CLOSE -> shift -> 'action 533'
actionsTable[2611] = 534; // 'state 81' -> CharacterClassRange -> shift -> 'action 534'
actionsTable[2624] = 535; // 'state 82' -> CHARACTER -> reduce -> 'action 535'
actionsTable[2625] = 536; // 'state 82' -> UNION -> reduce -> 'action 536'
actionsTable[2626] = 537; // 'state 82' -> PAREN_OPEN -> reduce -> 'action 537'
actionsTable[2627] = 538; // 'state 82' -> PAREN_CLOSE -> reduce -> 'action 538'
actionsTable[2628] = 539; // 'state 82' -> QUANTIFIER -> reduce -> 'action 539'
actionsTable[2629] = 540; // 'state 82' -> BRACKET_OPEN -> reduce -> 'action 540'
actionsTable[2631] = 541; // 'state 82' -> DASH -> reduce -> 'action 541'
actionsTable[2632] = 542; // 'state 82' -> @par-gen.EOF -> reduce -> 'action 542'
actionsTable[2656] = 543; // 'state 83' -> CHARACTER -> reduce -> 'action 543'
actionsTable[2657] = 544; // 'state 83' -> UNION -> reduce -> 'action 544'
actionsTable[2658] = 545; // 'state 83' -> PAREN_OPEN -> reduce -> 'action 545'
actionsTable[2659] = 546; // 'state 83' -> PAREN_CLOSE -> reduce -> 'action 546'
actionsTable[2660] = 547; // 'state 83' -> QUANTIFIER -> reduce -> 'action 547'
actionsTable[2661] = 548; // 'state 83' -> BRACKET_OPEN -> reduce -> 'action 548'
actionsTable[2663] = 549; // 'state 83' -> DASH -> reduce -> 'action 549'
actionsTable[2664] = 550; // 'state 83' -> @par-gen.EOF -> reduce -> 'action 550'
actionsTable[2688] = 551; // 'state 84' -> CHARACTER -> reduce -> 'action 551'
actionsTable[2689] = 552; // 'state 84' -> UNION -> reduce -> 'action 552'
actionsTable[2690] = 553; // 'state 84' -> PAREN_OPEN -> reduce -> 'action 553'
actionsTable[2691] = 554; // 'state 84' -> PAREN_CLOSE -> reduce -> 'action 554'
actionsTable[2692] = 555; // 'state 84' -> QUANTIFIER -> reduce -> 'action 555'
actionsTable[2693] = 556; // 'state 84' -> BRACKET_OPEN -> reduce -> 'action 556'
actionsTable[2695] = 557; // 'state 84' -> DASH -> reduce -> 'action 557'
actionsTable[2696] = 558; // 'state 84' -> @par-gen.EOF -> reduce -> 'action 558'
actionsTable[2752] = 559; // 'state 86' -> CHARACTER -> reduce -> 'action 559'
actionsTable[2753] = 560; // 'state 86' -> UNION -> reduce -> 'action 560'
actionsTable[2754] = 561; // 'state 86' -> PAREN_OPEN -> reduce -> 'action 561'
actionsTable[2755] = 562; // 'state 86' -> PAREN_CLOSE -> reduce -> 'action 562'
actionsTable[2756] = 563; // 'state 86' -> QUANTIFIER -> reduce -> 'action 563'
actionsTable[2757] = 564; // 'state 86' -> BRACKET_OPEN -> reduce -> 'action 564'
actionsTable[2759] = 565; // 'state 86' -> DASH -> reduce -> 'action 565'
actionsTable[2760] = 566; // 'state 86' -> @par-gen.EOF -> reduce -> 'action 566'
actionsTable[2727] = 567; // 'state 85' -> DASH -> shift -> 'action 567'
actionsTable[2720] = 568; // 'state 85' -> CHARACTER -> reduce -> 'action 568'
actionsTable[2726] = 569; // 'state 85' -> BRACKET_CLOSE -> reduce -> 'action 569'
actionsTable[2784] = 570; // 'state 87' -> CHARACTER -> reduce -> 'action 570'
actionsTable[2790] = 571; // 'state 87' -> BRACKET_CLOSE -> reduce -> 'action 571'
actionsTable[2816] = 572; // 'state 88' -> CHARACTER -> shift -> 'action 572'
actionsTable[2848] = 573; // 'state 89' -> CHARACTER -> reduce -> 'action 573'
actionsTable[2849] = 574; // 'state 89' -> UNION -> reduce -> 'action 574'
actionsTable[2850] = 575; // 'state 89' -> PAREN_OPEN -> reduce -> 'action 575'
actionsTable[2851] = 576; // 'state 89' -> PAREN_CLOSE -> reduce -> 'action 576'
actionsTable[2852] = 577; // 'state 89' -> QUANTIFIER -> reduce -> 'action 577'
actionsTable[2853] = 578; // 'state 89' -> BRACKET_OPEN -> reduce -> 'action 578'
actionsTable[2855] = 579; // 'state 89' -> DASH -> reduce -> 'action 579'
actionsTable[2856] = 580; // 'state 89' -> @par-gen.EOF -> reduce -> 'action 580'
actionsTable[2880] = 581; // 'state 90' -> CHARACTER -> shift -> 'action 581'
actionsTable[2886] = 582; // 'state 90' -> BRACKET_CLOSE -> shift -> 'action 582'
actionsTable[2899] = 583; // 'state 90' -> CharacterClassRange -> shift -> 'action 583'
actionsTable[2912] = 584; // 'state 91' -> CHARACTER -> reduce -> 'action 584'
actionsTable[2913] = 585; // 'state 91' -> UNION -> reduce -> 'action 585'
actionsTable[2914] = 586; // 'state 91' -> PAREN_OPEN -> reduce -> 'action 586'
actionsTable[2915] = 587; // 'state 91' -> PAREN_CLOSE -> reduce -> 'action 587'
actionsTable[2916] = 588; // 'state 91' -> QUANTIFIER -> reduce -> 'action 588'
actionsTable[2917] = 589; // 'state 91' -> BRACKET_OPEN -> reduce -> 'action 589'
actionsTable[2919] = 590; // 'state 91' -> DASH -> reduce -> 'action 590'
actionsTable[2920] = 591; // 'state 91' -> @par-gen.EOF -> reduce -> 'action 591'
actionsTable[2944] = 592; // 'state 92' -> CHARACTER -> reduce -> 'action 592'
actionsTable[2945] = 593; // 'state 92' -> UNION -> reduce -> 'action 593'
actionsTable[2946] = 594; // 'state 92' -> PAREN_OPEN -> reduce -> 'action 594'
actionsTable[2947] = 595; // 'state 92' -> PAREN_CLOSE -> reduce -> 'action 595'
actionsTable[2948] = 596; // 'state 92' -> QUANTIFIER -> reduce -> 'action 596'
actionsTable[2949] = 597; // 'state 92' -> BRACKET_OPEN -> reduce -> 'action 597'
actionsTable[2951] = 598; // 'state 92' -> DASH -> reduce -> 'action 598'
actionsTable[2952] = 599; // 'state 92' -> @par-gen.EOF -> reduce -> 'action 599'
actionsTable[2976] = 600; // 'state 93' -> CHARACTER -> reduce -> 'action 600'
actionsTable[2977] = 601; // 'state 93' -> UNION -> reduce -> 'action 601'
actionsTable[2978] = 602; // 'state 93' -> PAREN_OPEN -> reduce -> 'action 602'
actionsTable[2979] = 603; // 'state 93' -> PAREN_CLOSE -> reduce -> 'action 603'
actionsTable[2980] = 604; // 'state 93' -> QUANTIFIER -> reduce -> 'action 604'
actionsTable[2981] = 605; // 'state 93' -> BRACKET_OPEN -> reduce -> 'action 605'
actionsTable[2983] = 606; // 'state 93' -> DASH -> reduce -> 'action 606'
actionsTable[2984] = 607; // 'state 93' -> @par-gen.EOF -> reduce -> 'action 607'
actionsTable[3040] = 608; // 'state 95' -> CHARACTER -> reduce -> 'action 608'
actionsTable[3041] = 609; // 'state 95' -> UNION -> reduce -> 'action 609'
actionsTable[3042] = 610; // 'state 95' -> PAREN_OPEN -> reduce -> 'action 610'
actionsTable[3043] = 611; // 'state 95' -> PAREN_CLOSE -> reduce -> 'action 611'
actionsTable[3044] = 612; // 'state 95' -> QUANTIFIER -> reduce -> 'action 612'
actionsTable[3045] = 613; // 'state 95' -> BRACKET_OPEN -> reduce -> 'action 613'
actionsTable[3047] = 614; // 'state 95' -> DASH -> reduce -> 'action 614'
actionsTable[3048] = 615; // 'state 95' -> @par-gen.EOF -> reduce -> 'action 615'
actionsTable[3015] = 616; // 'state 94' -> DASH -> shift -> 'action 616'
actionsTable[3008] = 617; // 'state 94' -> CHARACTER -> reduce -> 'action 617'
actionsTable[3014] = 618; // 'state 94' -> BRACKET_CLOSE -> reduce -> 'action 618'
actionsTable[3072] = 619; // 'state 96' -> CHARACTER -> reduce -> 'action 619'
actionsTable[3078] = 620; // 'state 96' -> BRACKET_CLOSE -> reduce -> 'action 620'
actionsTable[3104] = 621; // 'state 97' -> CHARACTER -> shift -> 'action 621'
actionsTable[3136] = 622; // 'state 98' -> CHARACTER -> reduce -> 'action 622'
actionsTable[3137] = 623; // 'state 98' -> UNION -> reduce -> 'action 623'
actionsTable[3138] = 624; // 'state 98' -> PAREN_OPEN -> reduce -> 'action 624'
actionsTable[3139] = 625; // 'state 98' -> PAREN_CLOSE -> reduce -> 'action 625'
actionsTable[3140] = 626; // 'state 98' -> QUANTIFIER -> reduce -> 'action 626'
actionsTable[3141] = 627; // 'state 98' -> BRACKET_OPEN -> reduce -> 'action 627'
actionsTable[3143] = 628; // 'state 98' -> DASH -> reduce -> 'action 628'
actionsTable[3144] = 629; // 'state 98' -> @par-gen.EOF -> reduce -> 'action 629'
actionsTable[3168] = 630; // 'state 99' -> CHARACTER -> shift -> 'action 630'
actionsTable[3174] = 631; // 'state 99' -> BRACKET_CLOSE -> shift -> 'action 631'
actionsTable[3187] = 632; // 'state 99' -> CharacterClassRange -> shift -> 'action 632'
actionsTable[3232] = 633; // 'state 101' -> CHARACTER -> reduce -> 'action 633'
actionsTable[3233] = 634; // 'state 101' -> UNION -> reduce -> 'action 634'
actionsTable[3234] = 635; // 'state 101' -> PAREN_OPEN -> reduce -> 'action 635'
actionsTable[3235] = 636; // 'state 101' -> PAREN_CLOSE -> reduce -> 'action 636'
actionsTable[3236] = 637; // 'state 101' -> QUANTIFIER -> reduce -> 'action 637'
actionsTable[3237] = 638; // 'state 101' -> BRACKET_OPEN -> reduce -> 'action 638'
actionsTable[3239] = 639; // 'state 101' -> DASH -> reduce -> 'action 639'
actionsTable[3240] = 640; // 'state 101' -> @par-gen.EOF -> reduce -> 'action 640'
actionsTable[3207] = 641; // 'state 100' -> DASH -> shift -> 'action 641'
actionsTable[3200] = 642; // 'state 100' -> CHARACTER -> reduce -> 'action 642'
actionsTable[3206] = 643; // 'state 100' -> BRACKET_CLOSE -> reduce -> 'action 643'
actionsTable[3264] = 644; // 'state 102' -> CHARACTER -> reduce -> 'action 644'
actionsTable[3270] = 645; // 'state 102' -> BRACKET_CLOSE -> reduce -> 'action 645'
actionsTable[3296] = 646; // 'state 103' -> CHARACTER -> shift -> 'action 646'
actionsTable[3328] = 647; // 'state 104' -> CHARACTER -> reduce -> 'action 647'
actionsTable[3329] = 648; // 'state 104' -> UNION -> reduce -> 'action 648'
actionsTable[3330] = 649; // 'state 104' -> PAREN_OPEN -> reduce -> 'action 649'
actionsTable[3331] = 650; // 'state 104' -> PAREN_CLOSE -> reduce -> 'action 650'
actionsTable[3332] = 651; // 'state 104' -> QUANTIFIER -> reduce -> 'action 651'
actionsTable[3333] = 652; // 'state 104' -> BRACKET_OPEN -> reduce -> 'action 652'
actionsTable[3335] = 653; // 'state 104' -> DASH -> reduce -> 'action 653'
actionsTable[3336] = 654; // 'state 104' -> @par-gen.EOF -> reduce -> 'action 654'
actionsTable[3360] = 655; // 'state 105' -> CHARACTER -> shift -> 'action 655'
actionsTable[3366] = 656; // 'state 105' -> BRACKET_CLOSE -> shift -> 'action 656'
actionsTable[3379] = 657; // 'state 105' -> CharacterClassRange -> shift -> 'action 657'
actionsTable[3392] = 658; // 'state 106' -> CHARACTER -> shift -> 'action 658'
actionsTable[3424] = 659; // 'state 107' -> CHARACTER -> reduce -> 'action 659'
actionsTable[3430] = 660; // 'state 107' -> BRACKET_CLOSE -> reduce -> 'action 660'
actionsTable[3456] = 661; // 'state 108' -> CHARACTER -> reduce -> 'action 661'
actionsTable[3457] = 662; // 'state 108' -> UNION -> reduce -> 'action 662'
actionsTable[3458] = 663; // 'state 108' -> PAREN_OPEN -> reduce -> 'action 663'
actionsTable[3459] = 664; // 'state 108' -> PAREN_CLOSE -> reduce -> 'action 664'
actionsTable[3460] = 665; // 'state 108' -> QUANTIFIER -> reduce -> 'action 665'
actionsTable[3461] = 666; // 'state 108' -> BRACKET_OPEN -> reduce -> 'action 666'
actionsTable[3463] = 667; // 'state 108' -> DASH -> reduce -> 'action 667'
actionsTable[3464] = 668; // 'state 108' -> @par-gen.EOF -> reduce -> 'action 668'
actionsTable[3488] = 669; // 'state 109' -> CHARACTER -> reduce -> 'action 669'
actionsTable[3494] = 670; // 'state 109' -> BRACKET_CLOSE -> reduce -> 'action 670'
actionsTable[3520] = 671; // 'state 110' -> CHARACTER -> reduce -> 'action 671'
actionsTable[3521] = 672; // 'state 110' -> UNION -> reduce -> 'action 672'
actionsTable[3522] = 673; // 'state 110' -> PAREN_OPEN -> reduce -> 'action 673'
actionsTable[3523] = 674; // 'state 110' -> PAREN_CLOSE -> reduce -> 'action 674'
actionsTable[3524] = 675; // 'state 110' -> QUANTIFIER -> reduce -> 'action 675'
actionsTable[3525] = 676; // 'state 110' -> BRACKET_OPEN -> reduce -> 'action 676'
actionsTable[3527] = 677; // 'state 110' -> DASH -> reduce -> 'action 677'
actionsTable[3528] = 678; // 'state 110' -> @par-gen.EOF -> reduce -> 'action 678'
actionsTable[3552] = 679; // 'state 111' -> CHARACTER -> reduce -> 'action 679'
actionsTable[3558] = 680; // 'state 111' -> BRACKET_CLOSE -> reduce -> 'action 680'
actionsTable[3584] = 681; // 'state 112' -> CHARACTER -> reduce -> 'action 681'
actionsTable[3585] = 682; // 'state 112' -> UNION -> reduce -> 'action 682'
actionsTable[3586] = 683; // 'state 112' -> PAREN_OPEN -> reduce -> 'action 683'
actionsTable[3587] = 684; // 'state 112' -> PAREN_CLOSE -> reduce -> 'action 684'
actionsTable[3588] = 685; // 'state 112' -> QUANTIFIER -> reduce -> 'action 685'
actionsTable[3589] = 686; // 'state 112' -> BRACKET_OPEN -> reduce -> 'action 686'
actionsTable[3591] = 687; // 'state 112' -> DASH -> reduce -> 'action 687'
actionsTable[3592] = 688; // 'state 112' -> @par-gen.EOF -> reduce -> 'action 688'
actionsTable[3616] = 689; // 'state 113' -> CHARACTER -> reduce -> 'action 689'
actionsTable[3622] = 690; // 'state 113' -> BRACKET_CLOSE -> reduce -> 'action 690'
actionsTable[3648] = 691; // 'state 114' -> CHARACTER -> reduce -> 'action 691'
actionsTable[3649] = 692; // 'state 114' -> UNION -> reduce -> 'action 692'
actionsTable[3650] = 693; // 'state 114' -> PAREN_OPEN -> reduce -> 'action 693'
actionsTable[3651] = 694; // 'state 114' -> PAREN_CLOSE -> reduce -> 'action 694'
actionsTable[3652] = 695; // 'state 114' -> QUANTIFIER -> reduce -> 'action 695'
actionsTable[3653] = 696; // 'state 114' -> BRACKET_OPEN -> reduce -> 'action 696'
actionsTable[3655] = 697; // 'state 114' -> DASH -> reduce -> 'action 697'
actionsTable[3656] = 698; // 'state 114' -> @par-gen.EOF -> reduce -> 'action 698'
actionsTable[3680] = 699; // 'state 115' -> CHARACTER -> reduce -> 'action 699'
actionsTable[3686] = 700; // 'state 115' -> BRACKET_CLOSE -> reduce -> 'action 700'

const gotoTable = new Uint16Array(3712).fill(0xffff);
gotoTable[11] = 5; // 'state 5'
gotoTable[12] = 6; // 'state 6'
gotoTable[13] = 7; // 'state 7'
gotoTable[14] = 8; // 'state 8'
gotoTable[15] = 9; // 'state 9'
gotoTable[20] = 12; // 'state 12'
gotoTable[16] = 10; // 'state 10'
gotoTable[17] = 11; // 'state 11'
gotoTable[271] = 19; // 'state 19'
gotoTable[276] = 22; // 'state 22'
gotoTable[272] = 20; // 'state 20'
gotoTable[273] = 21; // 'state 21'
gotoTable[303] = 28; // 'state 28'
gotoTable[308] = 31; // 'state 31'
gotoTable[304] = 29; // 'state 29'
gotoTable[305] = 30; // 'state 30'
gotoTable[77] = 36; // 'state 36'
gotoTable[78] = 37; // 'state 37'
gotoTable[79] = 38; // 'state 38'
gotoTable[84] = 12; // 'state 12'
gotoTable[80] = 10; // 'state 10'
gotoTable[81] = 11; // 'state 11'
gotoTable[114] = 41; // 'state 41'
gotoTable[115] = 42; // 'state 42'
gotoTable[430] = 43; // 'state 43'
gotoTable[431] = 44; // 'state 44'
gotoTable[436] = 12; // 'state 12'
gotoTable[432] = 10; // 'state 10'
gotoTable[433] = 11; // 'state 11'
gotoTable[494] = 45; // 'state 45'
gotoTable[495] = 46; // 'state 46'
gotoTable[500] = 12; // 'state 12'
gotoTable[496] = 10; // 'state 10'
gotoTable[497] = 11; // 'state 11'
gotoTable[525] = 50; // 'state 50'
gotoTable[526] = 51; // 'state 51'
gotoTable[527] = 52; // 'state 52'
gotoTable[532] = 12; // 'state 12'
gotoTable[528] = 10; // 'state 10'
gotoTable[529] = 11; // 'state 11'
gotoTable[562] = 55; // 'state 55'
gotoTable[563] = 56; // 'state 56'
gotoTable[782] = 57; // 'state 57'
gotoTable[783] = 58; // 'state 58'
gotoTable[788] = 12; // 'state 12'
gotoTable[784] = 10; // 'state 10'
gotoTable[785] = 11; // 'state 11'
gotoTable[813] = 62; // 'state 62'
gotoTable[814] = 63; // 'state 63'
gotoTable[815] = 64; // 'state 64'
gotoTable[820] = 12; // 'state 12'
gotoTable[816] = 10; // 'state 10'
gotoTable[817] = 11; // 'state 11'
gotoTable[850] = 67; // 'state 67'
gotoTable[851] = 68; // 'state 68'
gotoTable[1199] = 19; // 'state 19'
gotoTable[1204] = 12; // 'state 12'
gotoTable[1200] = 10; // 'state 10'
gotoTable[1201] = 11; // 'state 11'
gotoTable[1231] = 28; // 'state 28'
gotoTable[1236] = 12; // 'state 12'
gotoTable[1232] = 10; // 'state 10'
gotoTable[1233] = 11; // 'state 11'
gotoTable[1138] = 74; // 'state 74'
gotoTable[1139] = 75; // 'state 75'
gotoTable[1331] = 78; // 'state 78'
gotoTable[1298] = 81; // 'state 81'
gotoTable[1299] = 42; // 'state 42'
gotoTable[1391] = 19; // 'state 19'
gotoTable[1396] = 12; // 'state 12'
gotoTable[1392] = 10; // 'state 10'
gotoTable[1393] = 11; // 'state 11'
gotoTable[1423] = 28; // 'state 28'
gotoTable[1428] = 12; // 'state 12'
gotoTable[1424] = 10; // 'state 10'
gotoTable[1425] = 11; // 'state 11'
gotoTable[1455] = 19; // 'state 19'
gotoTable[1460] = 12; // 'state 12'
gotoTable[1456] = 10; // 'state 10'
gotoTable[1457] = 11; // 'state 11'
gotoTable[1487] = 28; // 'state 28'
gotoTable[1492] = 12; // 'state 12'
gotoTable[1488] = 10; // 'state 10'
gotoTable[1489] = 11; // 'state 11'
gotoTable[1647] = 19; // 'state 19'
gotoTable[1652] = 12; // 'state 12'
gotoTable[1648] = 10; // 'state 10'
gotoTable[1649] = 11; // 'state 11'
gotoTable[1679] = 28; // 'state 28'
gotoTable[1684] = 12; // 'state 12'
gotoTable[1680] = 10; // 'state 10'
gotoTable[1681] = 11; // 'state 11'
gotoTable[1779] = 87; // 'state 87'
gotoTable[1746] = 90; // 'state 90'
gotoTable[1747] = 42; // 'state 42'
gotoTable[1839] = 19; // 'state 19'
gotoTable[1844] = 12; // 'state 12'
gotoTable[1840] = 10; // 'state 10'
gotoTable[1841] = 11; // 'state 11'
gotoTable[1871] = 28; // 'state 28'
gotoTable[1876] = 12; // 'state 12'
gotoTable[1872] = 10; // 'state 10'
gotoTable[1873] = 11; // 'state 11'
gotoTable[2031] = 19; // 'state 19'
gotoTable[2036] = 12; // 'state 12'
gotoTable[2032] = 10; // 'state 10'
gotoTable[2033] = 11; // 'state 11'
gotoTable[2063] = 28; // 'state 28'
gotoTable[2068] = 12; // 'state 12'
gotoTable[2064] = 10; // 'state 10'
gotoTable[2065] = 11; // 'state 11'
gotoTable[2163] = 96; // 'state 96'
gotoTable[2130] = 99; // 'state 99'
gotoTable[2131] = 42; // 'state 42'
gotoTable[2387] = 102; // 'state 102'
gotoTable[2354] = 105; // 'state 105'
gotoTable[2355] = 42; // 'state 42'
gotoTable[2611] = 78; // 'state 78'
gotoTable[2899] = 78; // 'state 78'
gotoTable[3187] = 78; // 'state 78'
gotoTable[3379] = 78; // 'state 78'

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
            lookahead * 116 * 32 + currentState * 32 + action.symbol
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
