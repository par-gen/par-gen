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
CharacterClass := BRACKET_OPEN CARET CharacterClassCharacters BRACKET_CLOSE;
CharacterClassCharacters := CharacterClassCharacter;
CharacterClassCharacters := CharacterClassCharacters CharacterClassCharacter;
CharacterClassCharacter := CHARACTER;
CharacterClassCharacter := CONTROL_CHARACTER;
CharacterClassCharacter := BACKSLASH DASH;
CharacterClassCharacter := BACKSLASH CARET;
CharacterClassCharacter := QUANTIFIER;
CharacterClassCharacter := PAREN_OPEN;
CharacterClassCharacter := PAREN_CLOSE;
CharacterClassCharacter := UNION;
CharacterClassCharacter := DOT;
CharacterClassCharacter := BACKSLASH BACKSLASH;
CharacterClassCharacter := BACKSLASH CONTROL_CHARACTER;
CharacterClassCharacter := BACKSLASH BRACKET_CLOSE;
CharacterClassCharacter := CharacterClassRange;
CharacterClassRange := CHARACTER DASH CHARACTER;
Character := CHARACTER;
Character := CONTROL_CHARACTER;
Character := CARET;
Character := DASH;
Character := BACKSLASH EscapedCharacter;
EscapedCharacter := CONTROL_CHARACTER;
EscapedCharacter := BACKSLASH;
EscapedCharacter := DOT;
EscapedCharacter := UNION;
EscapedCharacter := PAREN_OPEN;
EscapedCharacter := PAREN_CLOSE;
EscapedCharacter := BRACKET_OPEN;
EscapedCharacter := BRACKET_CLOSE;
EscapedCharacter := QUANTIFIER;
      */

const reducerStates = new Uint8Array(872448);
reducerStates[89] = 1; // 'state 1' -> Character -> CHARACTER
reducerStates[13721] = 1; // 'state 1' -> Character -> CONTROL_CHARACTER
reducerStates[27353] = 1; // 'state 1' -> Character -> BACKSLASH
reducerStates[40985] = 1; // 'state 1' -> Character -> CARET
reducerStates[54617] = 1; // 'state 1' -> Character -> DASH
reducerStates[81881] = 1; // 'state 1' -> Character -> UNION
reducerStates[95513] = 1; // 'state 1' -> Character -> PAREN_OPEN
reducerStates[109145] = 1; // 'state 1' -> Character -> PAREN_CLOSE
reducerStates[122777] = 1; // 'state 1' -> Character -> QUANTIFIER
reducerStates[136409] = 1; // 'state 1' -> Character -> BRACKET_OPEN
reducerStates[163673] = 1; // 'state 1' -> Character -> @par-gen.EOF
reducerStates[153] = 1; // 'state 2' -> Character -> CHARACTER
reducerStates[13785] = 1; // 'state 2' -> Character -> CONTROL_CHARACTER
reducerStates[27417] = 1; // 'state 2' -> Character -> BACKSLASH
reducerStates[41049] = 1; // 'state 2' -> Character -> CARET
reducerStates[54681] = 1; // 'state 2' -> Character -> DASH
reducerStates[81945] = 1; // 'state 2' -> Character -> UNION
reducerStates[95577] = 1; // 'state 2' -> Character -> PAREN_OPEN
reducerStates[109209] = 1; // 'state 2' -> Character -> PAREN_CLOSE
reducerStates[122841] = 1; // 'state 2' -> Character -> QUANTIFIER
reducerStates[136473] = 1; // 'state 2' -> Character -> BRACKET_OPEN
reducerStates[163737] = 1; // 'state 2' -> Character -> @par-gen.EOF
reducerStates[281] = 1; // 'state 4' -> Character -> CHARACTER
reducerStates[13913] = 1; // 'state 4' -> Character -> CONTROL_CHARACTER
reducerStates[27545] = 1; // 'state 4' -> Character -> BACKSLASH
reducerStates[41177] = 1; // 'state 4' -> Character -> CARET
reducerStates[54809] = 1; // 'state 4' -> Character -> DASH
reducerStates[82073] = 1; // 'state 4' -> Character -> UNION
reducerStates[95705] = 1; // 'state 4' -> Character -> PAREN_OPEN
reducerStates[109337] = 1; // 'state 4' -> Character -> PAREN_CLOSE
reducerStates[122969] = 1; // 'state 4' -> Character -> QUANTIFIER
reducerStates[136601] = 1; // 'state 4' -> Character -> BRACKET_OPEN
reducerStates[163865] = 1; // 'state 4' -> Character -> @par-gen.EOF
reducerStates[345] = 1; // 'state 5' -> Character -> CHARACTER
reducerStates[13977] = 1; // 'state 5' -> Character -> CONTROL_CHARACTER
reducerStates[27609] = 1; // 'state 5' -> Character -> BACKSLASH
reducerStates[41241] = 1; // 'state 5' -> Character -> CARET
reducerStates[54873] = 1; // 'state 5' -> Character -> DASH
reducerStates[82137] = 1; // 'state 5' -> Character -> UNION
reducerStates[95769] = 1; // 'state 5' -> Character -> PAREN_OPEN
reducerStates[109401] = 1; // 'state 5' -> Character -> PAREN_CLOSE
reducerStates[123033] = 1; // 'state 5' -> Character -> QUANTIFIER
reducerStates[136665] = 1; // 'state 5' -> Character -> BRACKET_OPEN
reducerStates[163929] = 1; // 'state 5' -> Character -> @par-gen.EOF
reducerStates[164110] = 1; // 'state 8' -> S -> @par-gen.EOF
reducerStates[164175] = 1; // 'state 9' -> RegExp -> @par-gen.EOF
reducerStates[164240] = 1; // 'state 10' -> Expression -> @par-gen.EOF
reducerStates[164304] = 1; // 'state 11' -> Expression -> @par-gen.EOF
reducerStates[164368] = 1; // 'state 12' -> Expression -> @par-gen.EOF
reducerStates[851] = 1; // 'state 13' -> Atom -> CHARACTER
reducerStates[14483] = 1; // 'state 13' -> Atom -> CONTROL_CHARACTER
reducerStates[28115] = 1; // 'state 13' -> Atom -> BACKSLASH
reducerStates[41747] = 1; // 'state 13' -> Atom -> CARET
reducerStates[55379] = 1; // 'state 13' -> Atom -> DASH
reducerStates[82643] = 1; // 'state 13' -> Atom -> UNION
reducerStates[96275] = 1; // 'state 13' -> Atom -> PAREN_OPEN
reducerStates[109907] = 1; // 'state 13' -> Atom -> PAREN_CLOSE
reducerStates[137171] = 1; // 'state 13' -> Atom -> BRACKET_OPEN
reducerStates[164435] = 1; // 'state 13' -> Atom -> @par-gen.EOF
reducerStates[915] = 1; // 'state 14' -> Atom -> CHARACTER
reducerStates[14547] = 1; // 'state 14' -> Atom -> CONTROL_CHARACTER
reducerStates[28179] = 1; // 'state 14' -> Atom -> BACKSLASH
reducerStates[41811] = 1; // 'state 14' -> Atom -> CARET
reducerStates[55443] = 1; // 'state 14' -> Atom -> DASH
reducerStates[82707] = 1; // 'state 14' -> Atom -> UNION
reducerStates[96339] = 1; // 'state 14' -> Atom -> PAREN_OPEN
reducerStates[109971] = 1; // 'state 14' -> Atom -> PAREN_CLOSE
reducerStates[137235] = 1; // 'state 14' -> Atom -> BRACKET_OPEN
reducerStates[164499] = 1; // 'state 14' -> Atom -> @par-gen.EOF
reducerStates[979] = 1; // 'state 15' -> Atom -> CHARACTER
reducerStates[14611] = 1; // 'state 15' -> Atom -> CONTROL_CHARACTER
reducerStates[28243] = 1; // 'state 15' -> Atom -> BACKSLASH
reducerStates[41875] = 1; // 'state 15' -> Atom -> CARET
reducerStates[55507] = 1; // 'state 15' -> Atom -> DASH
reducerStates[82771] = 1; // 'state 15' -> Atom -> UNION
reducerStates[96403] = 1; // 'state 15' -> Atom -> PAREN_OPEN
reducerStates[110035] = 1; // 'state 15' -> Atom -> PAREN_CLOSE
reducerStates[137299] = 1; // 'state 15' -> Atom -> BRACKET_OPEN
reducerStates[164563] = 1; // 'state 15' -> Atom -> @par-gen.EOF
reducerStates[1113] = 1; // 'state 17' -> Character -> CHARACTER
reducerStates[14745] = 1; // 'state 17' -> Character -> CONTROL_CHARACTER
reducerStates[28377] = 1; // 'state 17' -> Character -> BACKSLASH
reducerStates[42009] = 1; // 'state 17' -> Character -> CARET
reducerStates[55641] = 1; // 'state 17' -> Character -> DASH
reducerStates[82905] = 1; // 'state 17' -> Character -> UNION
reducerStates[96537] = 1; // 'state 17' -> Character -> PAREN_OPEN
reducerStates[110169] = 1; // 'state 17' -> Character -> PAREN_CLOSE
reducerStates[123801] = 1; // 'state 17' -> Character -> QUANTIFIER
reducerStates[137433] = 1; // 'state 17' -> Character -> BRACKET_OPEN
reducerStates[164697] = 1; // 'state 17' -> Character -> @par-gen.EOF
reducerStates[1177] = 1; // 'state 18' -> Character -> CHARACTER
reducerStates[14809] = 1; // 'state 18' -> Character -> CONTROL_CHARACTER
reducerStates[28441] = 1; // 'state 18' -> Character -> BACKSLASH
reducerStates[42073] = 1; // 'state 18' -> Character -> CARET
reducerStates[55705] = 1; // 'state 18' -> Character -> DASH
reducerStates[82969] = 1; // 'state 18' -> Character -> UNION
reducerStates[96601] = 1; // 'state 18' -> Character -> PAREN_OPEN
reducerStates[110233] = 1; // 'state 18' -> Character -> PAREN_CLOSE
reducerStates[123865] = 1; // 'state 18' -> Character -> QUANTIFIER
reducerStates[137497] = 1; // 'state 18' -> Character -> BRACKET_OPEN
reducerStates[164761] = 1; // 'state 18' -> Character -> @par-gen.EOF
reducerStates[1305] = 1; // 'state 20' -> Character -> CHARACTER
reducerStates[14937] = 1; // 'state 20' -> Character -> CONTROL_CHARACTER
reducerStates[28569] = 1; // 'state 20' -> Character -> BACKSLASH
reducerStates[42201] = 1; // 'state 20' -> Character -> CARET
reducerStates[55833] = 1; // 'state 20' -> Character -> DASH
reducerStates[83097] = 1; // 'state 20' -> Character -> UNION
reducerStates[96729] = 1; // 'state 20' -> Character -> PAREN_OPEN
reducerStates[110361] = 1; // 'state 20' -> Character -> PAREN_CLOSE
reducerStates[123993] = 1; // 'state 20' -> Character -> QUANTIFIER
reducerStates[137625] = 1; // 'state 20' -> Character -> BRACKET_OPEN
reducerStates[164889] = 1; // 'state 20' -> Character -> @par-gen.EOF
reducerStates[1369] = 1; // 'state 21' -> Character -> CHARACTER
reducerStates[15001] = 1; // 'state 21' -> Character -> CONTROL_CHARACTER
reducerStates[28633] = 1; // 'state 21' -> Character -> BACKSLASH
reducerStates[42265] = 1; // 'state 21' -> Character -> CARET
reducerStates[55897] = 1; // 'state 21' -> Character -> DASH
reducerStates[83161] = 1; // 'state 21' -> Character -> UNION
reducerStates[96793] = 1; // 'state 21' -> Character -> PAREN_OPEN
reducerStates[110425] = 1; // 'state 21' -> Character -> PAREN_CLOSE
reducerStates[124057] = 1; // 'state 21' -> Character -> QUANTIFIER
reducerStates[137689] = 1; // 'state 21' -> Character -> BRACKET_OPEN
reducerStates[164953] = 1; // 'state 21' -> Character -> @par-gen.EOF
reducerStates[1618] = 2; // 'state 25' -> Sequence -> CHARACTER
reducerStates[15250] = 2; // 'state 25' -> Sequence -> CONTROL_CHARACTER
reducerStates[28882] = 2; // 'state 25' -> Sequence -> BACKSLASH
reducerStates[42514] = 2; // 'state 25' -> Sequence -> CARET
reducerStates[56146] = 2; // 'state 25' -> Sequence -> DASH
reducerStates[83410] = 2; // 'state 25' -> Sequence -> UNION
reducerStates[97042] = 2; // 'state 25' -> Sequence -> PAREN_OPEN
reducerStates[110674] = 2; // 'state 25' -> Sequence -> PAREN_CLOSE
reducerStates[137938] = 2; // 'state 25' -> Sequence -> BRACKET_OPEN
reducerStates[165202] = 2; // 'state 25' -> Sequence -> @par-gen.EOF
reducerStates[1683] = 1; // 'state 26' -> Atom -> CHARACTER
reducerStates[15315] = 1; // 'state 26' -> Atom -> CONTROL_CHARACTER
reducerStates[28947] = 1; // 'state 26' -> Atom -> BACKSLASH
reducerStates[42579] = 1; // 'state 26' -> Atom -> CARET
reducerStates[56211] = 1; // 'state 26' -> Atom -> DASH
reducerStates[83475] = 1; // 'state 26' -> Atom -> UNION
reducerStates[97107] = 1; // 'state 26' -> Atom -> PAREN_OPEN
reducerStates[110739] = 1; // 'state 26' -> Atom -> PAREN_CLOSE
reducerStates[138003] = 1; // 'state 26' -> Atom -> BRACKET_OPEN
reducerStates[165267] = 1; // 'state 26' -> Atom -> @par-gen.EOF
reducerStates[1747] = 1; // 'state 27' -> Atom -> CHARACTER
reducerStates[15379] = 1; // 'state 27' -> Atom -> CONTROL_CHARACTER
reducerStates[29011] = 1; // 'state 27' -> Atom -> BACKSLASH
reducerStates[42643] = 1; // 'state 27' -> Atom -> CARET
reducerStates[56275] = 1; // 'state 27' -> Atom -> DASH
reducerStates[83539] = 1; // 'state 27' -> Atom -> UNION
reducerStates[97171] = 1; // 'state 27' -> Atom -> PAREN_OPEN
reducerStates[110803] = 1; // 'state 27' -> Atom -> PAREN_CLOSE
reducerStates[138067] = 1; // 'state 27' -> Atom -> BRACKET_OPEN
reducerStates[165331] = 1; // 'state 27' -> Atom -> @par-gen.EOF
reducerStates[1811] = 1; // 'state 28' -> Atom -> CHARACTER
reducerStates[15443] = 1; // 'state 28' -> Atom -> CONTROL_CHARACTER
reducerStates[29075] = 1; // 'state 28' -> Atom -> BACKSLASH
reducerStates[42707] = 1; // 'state 28' -> Atom -> CARET
reducerStates[56339] = 1; // 'state 28' -> Atom -> DASH
reducerStates[83603] = 1; // 'state 28' -> Atom -> UNION
reducerStates[97235] = 1; // 'state 28' -> Atom -> PAREN_OPEN
reducerStates[110867] = 1; // 'state 28' -> Atom -> PAREN_CLOSE
reducerStates[138131] = 1; // 'state 28' -> Atom -> BRACKET_OPEN
reducerStates[165395] = 1; // 'state 28' -> Atom -> @par-gen.EOF
reducerStates[1881] = 1; // 'state 29' -> Character -> CHARACTER
reducerStates[15513] = 1; // 'state 29' -> Character -> CONTROL_CHARACTER
reducerStates[29145] = 1; // 'state 29' -> Character -> BACKSLASH
reducerStates[42777] = 1; // 'state 29' -> Character -> CARET
reducerStates[56409] = 1; // 'state 29' -> Character -> DASH
reducerStates[83673] = 1; // 'state 29' -> Character -> UNION
reducerStates[97305] = 1; // 'state 29' -> Character -> PAREN_OPEN
reducerStates[110937] = 1; // 'state 29' -> Character -> PAREN_CLOSE
reducerStates[124569] = 1; // 'state 29' -> Character -> QUANTIFIER
reducerStates[138201] = 1; // 'state 29' -> Character -> BRACKET_OPEN
reducerStates[165465] = 1; // 'state 29' -> Character -> @par-gen.EOF
reducerStates[1945] = 1; // 'state 30' -> Character -> CHARACTER
reducerStates[15577] = 1; // 'state 30' -> Character -> CONTROL_CHARACTER
reducerStates[29209] = 1; // 'state 30' -> Character -> BACKSLASH
reducerStates[42841] = 1; // 'state 30' -> Character -> CARET
reducerStates[56473] = 1; // 'state 30' -> Character -> DASH
reducerStates[83737] = 1; // 'state 30' -> Character -> UNION
reducerStates[97369] = 1; // 'state 30' -> Character -> PAREN_OPEN
reducerStates[111001] = 1; // 'state 30' -> Character -> PAREN_CLOSE
reducerStates[124633] = 1; // 'state 30' -> Character -> QUANTIFIER
reducerStates[138265] = 1; // 'state 30' -> Character -> BRACKET_OPEN
reducerStates[165529] = 1; // 'state 30' -> Character -> @par-gen.EOF
reducerStates[2073] = 1; // 'state 32' -> Character -> CHARACTER
reducerStates[15705] = 1; // 'state 32' -> Character -> CONTROL_CHARACTER
reducerStates[29337] = 1; // 'state 32' -> Character -> BACKSLASH
reducerStates[42969] = 1; // 'state 32' -> Character -> CARET
reducerStates[56601] = 1; // 'state 32' -> Character -> DASH
reducerStates[83865] = 1; // 'state 32' -> Character -> UNION
reducerStates[97497] = 1; // 'state 32' -> Character -> PAREN_OPEN
reducerStates[111129] = 1; // 'state 32' -> Character -> PAREN_CLOSE
reducerStates[124761] = 1; // 'state 32' -> Character -> QUANTIFIER
reducerStates[138393] = 1; // 'state 32' -> Character -> BRACKET_OPEN
reducerStates[165657] = 1; // 'state 32' -> Character -> @par-gen.EOF
reducerStates[2137] = 1; // 'state 33' -> Character -> CHARACTER
reducerStates[15769] = 1; // 'state 33' -> Character -> CONTROL_CHARACTER
reducerStates[29401] = 1; // 'state 33' -> Character -> BACKSLASH
reducerStates[43033] = 1; // 'state 33' -> Character -> CARET
reducerStates[56665] = 1; // 'state 33' -> Character -> DASH
reducerStates[83929] = 1; // 'state 33' -> Character -> UNION
reducerStates[97561] = 1; // 'state 33' -> Character -> PAREN_OPEN
reducerStates[111193] = 1; // 'state 33' -> Character -> PAREN_CLOSE
reducerStates[124825] = 1; // 'state 33' -> Character -> QUANTIFIER
reducerStates[138457] = 1; // 'state 33' -> Character -> BRACKET_OPEN
reducerStates[165721] = 1; // 'state 33' -> Character -> @par-gen.EOF
reducerStates[2386] = 2; // 'state 37' -> Sequence -> CHARACTER
reducerStates[16018] = 2; // 'state 37' -> Sequence -> CONTROL_CHARACTER
reducerStates[29650] = 2; // 'state 37' -> Sequence -> BACKSLASH
reducerStates[43282] = 2; // 'state 37' -> Sequence -> CARET
reducerStates[56914] = 2; // 'state 37' -> Sequence -> DASH
reducerStates[84178] = 2; // 'state 37' -> Sequence -> UNION
reducerStates[97810] = 2; // 'state 37' -> Sequence -> PAREN_OPEN
reducerStates[111442] = 2; // 'state 37' -> Sequence -> PAREN_CLOSE
reducerStates[138706] = 2; // 'state 37' -> Sequence -> BRACKET_OPEN
reducerStates[165970] = 2; // 'state 37' -> Sequence -> @par-gen.EOF
reducerStates[2451] = 1; // 'state 38' -> Atom -> CHARACTER
reducerStates[16083] = 1; // 'state 38' -> Atom -> CONTROL_CHARACTER
reducerStates[29715] = 1; // 'state 38' -> Atom -> BACKSLASH
reducerStates[43347] = 1; // 'state 38' -> Atom -> CARET
reducerStates[56979] = 1; // 'state 38' -> Atom -> DASH
reducerStates[84243] = 1; // 'state 38' -> Atom -> UNION
reducerStates[97875] = 1; // 'state 38' -> Atom -> PAREN_OPEN
reducerStates[111507] = 1; // 'state 38' -> Atom -> PAREN_CLOSE
reducerStates[138771] = 1; // 'state 38' -> Atom -> BRACKET_OPEN
reducerStates[166035] = 1; // 'state 38' -> Atom -> @par-gen.EOF
reducerStates[2515] = 1; // 'state 39' -> Atom -> CHARACTER
reducerStates[16147] = 1; // 'state 39' -> Atom -> CONTROL_CHARACTER
reducerStates[29779] = 1; // 'state 39' -> Atom -> BACKSLASH
reducerStates[43411] = 1; // 'state 39' -> Atom -> CARET
reducerStates[57043] = 1; // 'state 39' -> Atom -> DASH
reducerStates[84307] = 1; // 'state 39' -> Atom -> UNION
reducerStates[97939] = 1; // 'state 39' -> Atom -> PAREN_OPEN
reducerStates[111571] = 1; // 'state 39' -> Atom -> PAREN_CLOSE
reducerStates[138835] = 1; // 'state 39' -> Atom -> BRACKET_OPEN
reducerStates[166099] = 1; // 'state 39' -> Atom -> @par-gen.EOF
reducerStates[2579] = 1; // 'state 40' -> Atom -> CHARACTER
reducerStates[16211] = 1; // 'state 40' -> Atom -> CONTROL_CHARACTER
reducerStates[29843] = 1; // 'state 40' -> Atom -> BACKSLASH
reducerStates[43475] = 1; // 'state 40' -> Atom -> CARET
reducerStates[57107] = 1; // 'state 40' -> Atom -> DASH
reducerStates[84371] = 1; // 'state 40' -> Atom -> UNION
reducerStates[98003] = 1; // 'state 40' -> Atom -> PAREN_OPEN
reducerStates[111635] = 1; // 'state 40' -> Atom -> PAREN_CLOSE
reducerStates[138899] = 1; // 'state 40' -> Atom -> BRACKET_OPEN
reducerStates[166163] = 1; // 'state 40' -> Atom -> @par-gen.EOF
reducerStates[2643] = 2; // 'state 41' -> Atom -> CHARACTER
reducerStates[16275] = 2; // 'state 41' -> Atom -> CONTROL_CHARACTER
reducerStates[29907] = 2; // 'state 41' -> Atom -> BACKSLASH
reducerStates[43539] = 2; // 'state 41' -> Atom -> CARET
reducerStates[57171] = 2; // 'state 41' -> Atom -> DASH
reducerStates[84435] = 2; // 'state 41' -> Atom -> UNION
reducerStates[98067] = 2; // 'state 41' -> Atom -> PAREN_OPEN
reducerStates[111699] = 2; // 'state 41' -> Atom -> PAREN_CLOSE
reducerStates[138963] = 2; // 'state 41' -> Atom -> BRACKET_OPEN
reducerStates[166227] = 2; // 'state 41' -> Atom -> @par-gen.EOF
reducerStates[2707] = 2; // 'state 42' -> Atom -> CHARACTER
reducerStates[16339] = 2; // 'state 42' -> Atom -> CONTROL_CHARACTER
reducerStates[29971] = 2; // 'state 42' -> Atom -> BACKSLASH
reducerStates[43603] = 2; // 'state 42' -> Atom -> CARET
reducerStates[57235] = 2; // 'state 42' -> Atom -> DASH
reducerStates[84499] = 2; // 'state 42' -> Atom -> UNION
reducerStates[98131] = 2; // 'state 42' -> Atom -> PAREN_OPEN
reducerStates[111763] = 2; // 'state 42' -> Atom -> PAREN_CLOSE
reducerStates[139027] = 2; // 'state 42' -> Atom -> BRACKET_OPEN
reducerStates[166291] = 2; // 'state 42' -> Atom -> @par-gen.EOF
reducerStates[2771] = 2; // 'state 43' -> Atom -> CHARACTER
reducerStates[16403] = 2; // 'state 43' -> Atom -> CONTROL_CHARACTER
reducerStates[30035] = 2; // 'state 43' -> Atom -> BACKSLASH
reducerStates[43667] = 2; // 'state 43' -> Atom -> CARET
reducerStates[57299] = 2; // 'state 43' -> Atom -> DASH
reducerStates[84563] = 2; // 'state 43' -> Atom -> UNION
reducerStates[98195] = 2; // 'state 43' -> Atom -> PAREN_OPEN
reducerStates[111827] = 2; // 'state 43' -> Atom -> PAREN_CLOSE
reducerStates[139091] = 2; // 'state 43' -> Atom -> BRACKET_OPEN
reducerStates[166355] = 2; // 'state 43' -> Atom -> @par-gen.EOF
reducerStates[2842] = 1; // 'state 44' -> EscapedCharacter -> CHARACTER
reducerStates[16474] = 1; // 'state 44' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[30106] = 1; // 'state 44' -> EscapedCharacter -> BACKSLASH
reducerStates[43738] = 1; // 'state 44' -> EscapedCharacter -> CARET
reducerStates[57370] = 1; // 'state 44' -> EscapedCharacter -> DASH
reducerStates[84634] = 1; // 'state 44' -> EscapedCharacter -> UNION
reducerStates[98266] = 1; // 'state 44' -> EscapedCharacter -> PAREN_OPEN
reducerStates[111898] = 1; // 'state 44' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[125530] = 1; // 'state 44' -> EscapedCharacter -> QUANTIFIER
reducerStates[139162] = 1; // 'state 44' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[166426] = 1; // 'state 44' -> EscapedCharacter -> @par-gen.EOF
reducerStates[2906] = 1; // 'state 45' -> EscapedCharacter -> CHARACTER
reducerStates[16538] = 1; // 'state 45' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[30170] = 1; // 'state 45' -> EscapedCharacter -> BACKSLASH
reducerStates[43802] = 1; // 'state 45' -> EscapedCharacter -> CARET
reducerStates[57434] = 1; // 'state 45' -> EscapedCharacter -> DASH
reducerStates[84698] = 1; // 'state 45' -> EscapedCharacter -> UNION
reducerStates[98330] = 1; // 'state 45' -> EscapedCharacter -> PAREN_OPEN
reducerStates[111962] = 1; // 'state 45' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[125594] = 1; // 'state 45' -> EscapedCharacter -> QUANTIFIER
reducerStates[139226] = 1; // 'state 45' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[166490] = 1; // 'state 45' -> EscapedCharacter -> @par-gen.EOF
reducerStates[2970] = 1; // 'state 46' -> EscapedCharacter -> CHARACTER
reducerStates[16602] = 1; // 'state 46' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[30234] = 1; // 'state 46' -> EscapedCharacter -> BACKSLASH
reducerStates[43866] = 1; // 'state 46' -> EscapedCharacter -> CARET
reducerStates[57498] = 1; // 'state 46' -> EscapedCharacter -> DASH
reducerStates[84762] = 1; // 'state 46' -> EscapedCharacter -> UNION
reducerStates[98394] = 1; // 'state 46' -> EscapedCharacter -> PAREN_OPEN
reducerStates[112026] = 1; // 'state 46' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[125658] = 1; // 'state 46' -> EscapedCharacter -> QUANTIFIER
reducerStates[139290] = 1; // 'state 46' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[166554] = 1; // 'state 46' -> EscapedCharacter -> @par-gen.EOF
reducerStates[3034] = 1; // 'state 47' -> EscapedCharacter -> CHARACTER
reducerStates[16666] = 1; // 'state 47' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[30298] = 1; // 'state 47' -> EscapedCharacter -> BACKSLASH
reducerStates[43930] = 1; // 'state 47' -> EscapedCharacter -> CARET
reducerStates[57562] = 1; // 'state 47' -> EscapedCharacter -> DASH
reducerStates[84826] = 1; // 'state 47' -> EscapedCharacter -> UNION
reducerStates[98458] = 1; // 'state 47' -> EscapedCharacter -> PAREN_OPEN
reducerStates[112090] = 1; // 'state 47' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[125722] = 1; // 'state 47' -> EscapedCharacter -> QUANTIFIER
reducerStates[139354] = 1; // 'state 47' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[166618] = 1; // 'state 47' -> EscapedCharacter -> @par-gen.EOF
reducerStates[3098] = 1; // 'state 48' -> EscapedCharacter -> CHARACTER
reducerStates[16730] = 1; // 'state 48' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[30362] = 1; // 'state 48' -> EscapedCharacter -> BACKSLASH
reducerStates[43994] = 1; // 'state 48' -> EscapedCharacter -> CARET
reducerStates[57626] = 1; // 'state 48' -> EscapedCharacter -> DASH
reducerStates[84890] = 1; // 'state 48' -> EscapedCharacter -> UNION
reducerStates[98522] = 1; // 'state 48' -> EscapedCharacter -> PAREN_OPEN
reducerStates[112154] = 1; // 'state 48' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[125786] = 1; // 'state 48' -> EscapedCharacter -> QUANTIFIER
reducerStates[139418] = 1; // 'state 48' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[166682] = 1; // 'state 48' -> EscapedCharacter -> @par-gen.EOF
reducerStates[3162] = 1; // 'state 49' -> EscapedCharacter -> CHARACTER
reducerStates[16794] = 1; // 'state 49' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[30426] = 1; // 'state 49' -> EscapedCharacter -> BACKSLASH
reducerStates[44058] = 1; // 'state 49' -> EscapedCharacter -> CARET
reducerStates[57690] = 1; // 'state 49' -> EscapedCharacter -> DASH
reducerStates[84954] = 1; // 'state 49' -> EscapedCharacter -> UNION
reducerStates[98586] = 1; // 'state 49' -> EscapedCharacter -> PAREN_OPEN
reducerStates[112218] = 1; // 'state 49' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[125850] = 1; // 'state 49' -> EscapedCharacter -> QUANTIFIER
reducerStates[139482] = 1; // 'state 49' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[166746] = 1; // 'state 49' -> EscapedCharacter -> @par-gen.EOF
reducerStates[3226] = 1; // 'state 50' -> EscapedCharacter -> CHARACTER
reducerStates[16858] = 1; // 'state 50' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[30490] = 1; // 'state 50' -> EscapedCharacter -> BACKSLASH
reducerStates[44122] = 1; // 'state 50' -> EscapedCharacter -> CARET
reducerStates[57754] = 1; // 'state 50' -> EscapedCharacter -> DASH
reducerStates[85018] = 1; // 'state 50' -> EscapedCharacter -> UNION
reducerStates[98650] = 1; // 'state 50' -> EscapedCharacter -> PAREN_OPEN
reducerStates[112282] = 1; // 'state 50' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[125914] = 1; // 'state 50' -> EscapedCharacter -> QUANTIFIER
reducerStates[139546] = 1; // 'state 50' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[166810] = 1; // 'state 50' -> EscapedCharacter -> @par-gen.EOF
reducerStates[3290] = 1; // 'state 51' -> EscapedCharacter -> CHARACTER
reducerStates[16922] = 1; // 'state 51' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[30554] = 1; // 'state 51' -> EscapedCharacter -> BACKSLASH
reducerStates[44186] = 1; // 'state 51' -> EscapedCharacter -> CARET
reducerStates[57818] = 1; // 'state 51' -> EscapedCharacter -> DASH
reducerStates[85082] = 1; // 'state 51' -> EscapedCharacter -> UNION
reducerStates[98714] = 1; // 'state 51' -> EscapedCharacter -> PAREN_OPEN
reducerStates[112346] = 1; // 'state 51' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[125978] = 1; // 'state 51' -> EscapedCharacter -> QUANTIFIER
reducerStates[139610] = 1; // 'state 51' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[166874] = 1; // 'state 51' -> EscapedCharacter -> @par-gen.EOF
reducerStates[3354] = 1; // 'state 52' -> EscapedCharacter -> CHARACTER
reducerStates[16986] = 1; // 'state 52' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[30618] = 1; // 'state 52' -> EscapedCharacter -> BACKSLASH
reducerStates[44250] = 1; // 'state 52' -> EscapedCharacter -> CARET
reducerStates[57882] = 1; // 'state 52' -> EscapedCharacter -> DASH
reducerStates[85146] = 1; // 'state 52' -> EscapedCharacter -> UNION
reducerStates[98778] = 1; // 'state 52' -> EscapedCharacter -> PAREN_OPEN
reducerStates[112410] = 1; // 'state 52' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[126042] = 1; // 'state 52' -> EscapedCharacter -> QUANTIFIER
reducerStates[139674] = 1; // 'state 52' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[166938] = 1; // 'state 52' -> EscapedCharacter -> @par-gen.EOF
reducerStates[3417] = 2; // 'state 53' -> Character -> CHARACTER
reducerStates[17049] = 2; // 'state 53' -> Character -> CONTROL_CHARACTER
reducerStates[30681] = 2; // 'state 53' -> Character -> BACKSLASH
reducerStates[44313] = 2; // 'state 53' -> Character -> CARET
reducerStates[57945] = 2; // 'state 53' -> Character -> DASH
reducerStates[85209] = 2; // 'state 53' -> Character -> UNION
reducerStates[98841] = 2; // 'state 53' -> Character -> PAREN_OPEN
reducerStates[112473] = 2; // 'state 53' -> Character -> PAREN_CLOSE
reducerStates[126105] = 2; // 'state 53' -> Character -> QUANTIFIER
reducerStates[139737] = 2; // 'state 53' -> Character -> BRACKET_OPEN
reducerStates[167001] = 2; // 'state 53' -> Character -> @par-gen.EOF
reducerStates[3735] = 1; // 'state 58' -> CharacterClassCharacter -> CHARACTER
reducerStates[17367] = 1; // 'state 58' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[30999] = 1; // 'state 58' -> CharacterClassCharacter -> BACKSLASH
reducerStates[71895] = 1; // 'state 58' -> CharacterClassCharacter -> DOT
reducerStates[85527] = 1; // 'state 58' -> CharacterClassCharacter -> UNION
reducerStates[99159] = 1; // 'state 58' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[112791] = 1; // 'state 58' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[126423] = 1; // 'state 58' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[153687] = 1; // 'state 58' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[3799] = 1; // 'state 59' -> CharacterClassCharacter -> CHARACTER
reducerStates[17431] = 1; // 'state 59' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[31063] = 1; // 'state 59' -> CharacterClassCharacter -> BACKSLASH
reducerStates[71959] = 1; // 'state 59' -> CharacterClassCharacter -> DOT
reducerStates[85591] = 1; // 'state 59' -> CharacterClassCharacter -> UNION
reducerStates[99223] = 1; // 'state 59' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[112855] = 1; // 'state 59' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[126487] = 1; // 'state 59' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[153751] = 1; // 'state 59' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[3991] = 1; // 'state 62' -> CharacterClassCharacter -> CHARACTER
reducerStates[17623] = 1; // 'state 62' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[31255] = 1; // 'state 62' -> CharacterClassCharacter -> BACKSLASH
reducerStates[72151] = 1; // 'state 62' -> CharacterClassCharacter -> DOT
reducerStates[85783] = 1; // 'state 62' -> CharacterClassCharacter -> UNION
reducerStates[99415] = 1; // 'state 62' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[113047] = 1; // 'state 62' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[126679] = 1; // 'state 62' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[153943] = 1; // 'state 62' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[4055] = 1; // 'state 63' -> CharacterClassCharacter -> CHARACTER
reducerStates[17687] = 1; // 'state 63' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[31319] = 1; // 'state 63' -> CharacterClassCharacter -> BACKSLASH
reducerStates[72215] = 1; // 'state 63' -> CharacterClassCharacter -> DOT
reducerStates[85847] = 1; // 'state 63' -> CharacterClassCharacter -> UNION
reducerStates[99479] = 1; // 'state 63' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[113111] = 1; // 'state 63' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[126743] = 1; // 'state 63' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[154007] = 1; // 'state 63' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[4119] = 1; // 'state 64' -> CharacterClassCharacter -> CHARACTER
reducerStates[17751] = 1; // 'state 64' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[31383] = 1; // 'state 64' -> CharacterClassCharacter -> BACKSLASH
reducerStates[72279] = 1; // 'state 64' -> CharacterClassCharacter -> DOT
reducerStates[85911] = 1; // 'state 64' -> CharacterClassCharacter -> UNION
reducerStates[99543] = 1; // 'state 64' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[113175] = 1; // 'state 64' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[126807] = 1; // 'state 64' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[154071] = 1; // 'state 64' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[4183] = 1; // 'state 65' -> CharacterClassCharacter -> CHARACTER
reducerStates[17815] = 1; // 'state 65' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[31447] = 1; // 'state 65' -> CharacterClassCharacter -> BACKSLASH
reducerStates[72343] = 1; // 'state 65' -> CharacterClassCharacter -> DOT
reducerStates[85975] = 1; // 'state 65' -> CharacterClassCharacter -> UNION
reducerStates[99607] = 1; // 'state 65' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[113239] = 1; // 'state 65' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[126871] = 1; // 'state 65' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[154135] = 1; // 'state 65' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[4247] = 1; // 'state 66' -> CharacterClassCharacter -> CHARACTER
reducerStates[17879] = 1; // 'state 66' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[31511] = 1; // 'state 66' -> CharacterClassCharacter -> BACKSLASH
reducerStates[72407] = 1; // 'state 66' -> CharacterClassCharacter -> DOT
reducerStates[86039] = 1; // 'state 66' -> CharacterClassCharacter -> UNION
reducerStates[99671] = 1; // 'state 66' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[113303] = 1; // 'state 66' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[126935] = 1; // 'state 66' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[154199] = 1; // 'state 66' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[4374] = 1; // 'state 68' -> CharacterClassCharacters -> CHARACTER
reducerStates[18006] = 1; // 'state 68' -> CharacterClassCharacters -> CONTROL_CHARACTER
reducerStates[31638] = 1; // 'state 68' -> CharacterClassCharacters -> BACKSLASH
reducerStates[72534] = 1; // 'state 68' -> CharacterClassCharacters -> DOT
reducerStates[86166] = 1; // 'state 68' -> CharacterClassCharacters -> UNION
reducerStates[99798] = 1; // 'state 68' -> CharacterClassCharacters -> PAREN_OPEN
reducerStates[113430] = 1; // 'state 68' -> CharacterClassCharacters -> PAREN_CLOSE
reducerStates[127062] = 1; // 'state 68' -> CharacterClassCharacters -> QUANTIFIER
reducerStates[154326] = 1; // 'state 68' -> CharacterClassCharacters -> BRACKET_CLOSE
reducerStates[4439] = 1; // 'state 69' -> CharacterClassCharacter -> CHARACTER
reducerStates[18071] = 1; // 'state 69' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[31703] = 1; // 'state 69' -> CharacterClassCharacter -> BACKSLASH
reducerStates[72599] = 1; // 'state 69' -> CharacterClassCharacter -> DOT
reducerStates[86231] = 1; // 'state 69' -> CharacterClassCharacter -> UNION
reducerStates[99863] = 1; // 'state 69' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[113495] = 1; // 'state 69' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[127127] = 1; // 'state 69' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[154391] = 1; // 'state 69' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[86289] = 3; // 'state 70' -> Union -> UNION
reducerStates[113553] = 3; // 'state 70' -> Union -> PAREN_CLOSE
reducerStates[168081] = 3; // 'state 70' -> Union -> @par-gen.EOF
reducerStates[86353] = 3; // 'state 71' -> Union -> UNION
reducerStates[113617] = 3; // 'state 71' -> Union -> PAREN_CLOSE
reducerStates[168145] = 3; // 'state 71' -> Union -> @par-gen.EOF
reducerStates[86417] = 3; // 'state 72' -> Union -> UNION
reducerStates[113681] = 3; // 'state 72' -> Union -> PAREN_CLOSE
reducerStates[168209] = 3; // 'state 72' -> Union -> @par-gen.EOF
reducerStates[86481] = 3; // 'state 73' -> Union -> UNION
reducerStates[113745] = 3; // 'state 73' -> Union -> PAREN_CLOSE
reducerStates[168273] = 3; // 'state 73' -> Union -> @par-gen.EOF
reducerStates[4755] = 2; // 'state 74' -> Atom -> CHARACTER
reducerStates[18387] = 2; // 'state 74' -> Atom -> CONTROL_CHARACTER
reducerStates[32019] = 2; // 'state 74' -> Atom -> BACKSLASH
reducerStates[45651] = 2; // 'state 74' -> Atom -> CARET
reducerStates[59283] = 2; // 'state 74' -> Atom -> DASH
reducerStates[86547] = 2; // 'state 74' -> Atom -> UNION
reducerStates[100179] = 2; // 'state 74' -> Atom -> PAREN_OPEN
reducerStates[113811] = 2; // 'state 74' -> Atom -> PAREN_CLOSE
reducerStates[141075] = 2; // 'state 74' -> Atom -> BRACKET_OPEN
reducerStates[168339] = 2; // 'state 74' -> Atom -> @par-gen.EOF
reducerStates[4819] = 2; // 'state 75' -> Atom -> CHARACTER
reducerStates[18451] = 2; // 'state 75' -> Atom -> CONTROL_CHARACTER
reducerStates[32083] = 2; // 'state 75' -> Atom -> BACKSLASH
reducerStates[45715] = 2; // 'state 75' -> Atom -> CARET
reducerStates[59347] = 2; // 'state 75' -> Atom -> DASH
reducerStates[86611] = 2; // 'state 75' -> Atom -> UNION
reducerStates[100243] = 2; // 'state 75' -> Atom -> PAREN_OPEN
reducerStates[113875] = 2; // 'state 75' -> Atom -> PAREN_CLOSE
reducerStates[141139] = 2; // 'state 75' -> Atom -> BRACKET_OPEN
reducerStates[168403] = 2; // 'state 75' -> Atom -> @par-gen.EOF
reducerStates[4883] = 2; // 'state 76' -> Atom -> CHARACTER
reducerStates[18515] = 2; // 'state 76' -> Atom -> CONTROL_CHARACTER
reducerStates[32147] = 2; // 'state 76' -> Atom -> BACKSLASH
reducerStates[45779] = 2; // 'state 76' -> Atom -> CARET
reducerStates[59411] = 2; // 'state 76' -> Atom -> DASH
reducerStates[86675] = 2; // 'state 76' -> Atom -> UNION
reducerStates[100307] = 2; // 'state 76' -> Atom -> PAREN_OPEN
reducerStates[113939] = 2; // 'state 76' -> Atom -> PAREN_CLOSE
reducerStates[141203] = 2; // 'state 76' -> Atom -> BRACKET_OPEN
reducerStates[168467] = 2; // 'state 76' -> Atom -> @par-gen.EOF
reducerStates[4954] = 1; // 'state 77' -> EscapedCharacter -> CHARACTER
reducerStates[18586] = 1; // 'state 77' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[32218] = 1; // 'state 77' -> EscapedCharacter -> BACKSLASH
reducerStates[45850] = 1; // 'state 77' -> EscapedCharacter -> CARET
reducerStates[59482] = 1; // 'state 77' -> EscapedCharacter -> DASH
reducerStates[86746] = 1; // 'state 77' -> EscapedCharacter -> UNION
reducerStates[100378] = 1; // 'state 77' -> EscapedCharacter -> PAREN_OPEN
reducerStates[114010] = 1; // 'state 77' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[127642] = 1; // 'state 77' -> EscapedCharacter -> QUANTIFIER
reducerStates[141274] = 1; // 'state 77' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[168538] = 1; // 'state 77' -> EscapedCharacter -> @par-gen.EOF
reducerStates[5018] = 1; // 'state 78' -> EscapedCharacter -> CHARACTER
reducerStates[18650] = 1; // 'state 78' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[32282] = 1; // 'state 78' -> EscapedCharacter -> BACKSLASH
reducerStates[45914] = 1; // 'state 78' -> EscapedCharacter -> CARET
reducerStates[59546] = 1; // 'state 78' -> EscapedCharacter -> DASH
reducerStates[86810] = 1; // 'state 78' -> EscapedCharacter -> UNION
reducerStates[100442] = 1; // 'state 78' -> EscapedCharacter -> PAREN_OPEN
reducerStates[114074] = 1; // 'state 78' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[127706] = 1; // 'state 78' -> EscapedCharacter -> QUANTIFIER
reducerStates[141338] = 1; // 'state 78' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[168602] = 1; // 'state 78' -> EscapedCharacter -> @par-gen.EOF
reducerStates[5082] = 1; // 'state 79' -> EscapedCharacter -> CHARACTER
reducerStates[18714] = 1; // 'state 79' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[32346] = 1; // 'state 79' -> EscapedCharacter -> BACKSLASH
reducerStates[45978] = 1; // 'state 79' -> EscapedCharacter -> CARET
reducerStates[59610] = 1; // 'state 79' -> EscapedCharacter -> DASH
reducerStates[86874] = 1; // 'state 79' -> EscapedCharacter -> UNION
reducerStates[100506] = 1; // 'state 79' -> EscapedCharacter -> PAREN_OPEN
reducerStates[114138] = 1; // 'state 79' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[127770] = 1; // 'state 79' -> EscapedCharacter -> QUANTIFIER
reducerStates[141402] = 1; // 'state 79' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[168666] = 1; // 'state 79' -> EscapedCharacter -> @par-gen.EOF
reducerStates[5146] = 1; // 'state 80' -> EscapedCharacter -> CHARACTER
reducerStates[18778] = 1; // 'state 80' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[32410] = 1; // 'state 80' -> EscapedCharacter -> BACKSLASH
reducerStates[46042] = 1; // 'state 80' -> EscapedCharacter -> CARET
reducerStates[59674] = 1; // 'state 80' -> EscapedCharacter -> DASH
reducerStates[86938] = 1; // 'state 80' -> EscapedCharacter -> UNION
reducerStates[100570] = 1; // 'state 80' -> EscapedCharacter -> PAREN_OPEN
reducerStates[114202] = 1; // 'state 80' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[127834] = 1; // 'state 80' -> EscapedCharacter -> QUANTIFIER
reducerStates[141466] = 1; // 'state 80' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[168730] = 1; // 'state 80' -> EscapedCharacter -> @par-gen.EOF
reducerStates[5210] = 1; // 'state 81' -> EscapedCharacter -> CHARACTER
reducerStates[18842] = 1; // 'state 81' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[32474] = 1; // 'state 81' -> EscapedCharacter -> BACKSLASH
reducerStates[46106] = 1; // 'state 81' -> EscapedCharacter -> CARET
reducerStates[59738] = 1; // 'state 81' -> EscapedCharacter -> DASH
reducerStates[87002] = 1; // 'state 81' -> EscapedCharacter -> UNION
reducerStates[100634] = 1; // 'state 81' -> EscapedCharacter -> PAREN_OPEN
reducerStates[114266] = 1; // 'state 81' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[127898] = 1; // 'state 81' -> EscapedCharacter -> QUANTIFIER
reducerStates[141530] = 1; // 'state 81' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[168794] = 1; // 'state 81' -> EscapedCharacter -> @par-gen.EOF
reducerStates[5274] = 1; // 'state 82' -> EscapedCharacter -> CHARACTER
reducerStates[18906] = 1; // 'state 82' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[32538] = 1; // 'state 82' -> EscapedCharacter -> BACKSLASH
reducerStates[46170] = 1; // 'state 82' -> EscapedCharacter -> CARET
reducerStates[59802] = 1; // 'state 82' -> EscapedCharacter -> DASH
reducerStates[87066] = 1; // 'state 82' -> EscapedCharacter -> UNION
reducerStates[100698] = 1; // 'state 82' -> EscapedCharacter -> PAREN_OPEN
reducerStates[114330] = 1; // 'state 82' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[127962] = 1; // 'state 82' -> EscapedCharacter -> QUANTIFIER
reducerStates[141594] = 1; // 'state 82' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[168858] = 1; // 'state 82' -> EscapedCharacter -> @par-gen.EOF
reducerStates[5338] = 1; // 'state 83' -> EscapedCharacter -> CHARACTER
reducerStates[18970] = 1; // 'state 83' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[32602] = 1; // 'state 83' -> EscapedCharacter -> BACKSLASH
reducerStates[46234] = 1; // 'state 83' -> EscapedCharacter -> CARET
reducerStates[59866] = 1; // 'state 83' -> EscapedCharacter -> DASH
reducerStates[87130] = 1; // 'state 83' -> EscapedCharacter -> UNION
reducerStates[100762] = 1; // 'state 83' -> EscapedCharacter -> PAREN_OPEN
reducerStates[114394] = 1; // 'state 83' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[128026] = 1; // 'state 83' -> EscapedCharacter -> QUANTIFIER
reducerStates[141658] = 1; // 'state 83' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[168922] = 1; // 'state 83' -> EscapedCharacter -> @par-gen.EOF
reducerStates[5402] = 1; // 'state 84' -> EscapedCharacter -> CHARACTER
reducerStates[19034] = 1; // 'state 84' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[32666] = 1; // 'state 84' -> EscapedCharacter -> BACKSLASH
reducerStates[46298] = 1; // 'state 84' -> EscapedCharacter -> CARET
reducerStates[59930] = 1; // 'state 84' -> EscapedCharacter -> DASH
reducerStates[87194] = 1; // 'state 84' -> EscapedCharacter -> UNION
reducerStates[100826] = 1; // 'state 84' -> EscapedCharacter -> PAREN_OPEN
reducerStates[114458] = 1; // 'state 84' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[128090] = 1; // 'state 84' -> EscapedCharacter -> QUANTIFIER
reducerStates[141722] = 1; // 'state 84' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[168986] = 1; // 'state 84' -> EscapedCharacter -> @par-gen.EOF
reducerStates[5466] = 1; // 'state 85' -> EscapedCharacter -> CHARACTER
reducerStates[19098] = 1; // 'state 85' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[32730] = 1; // 'state 85' -> EscapedCharacter -> BACKSLASH
reducerStates[46362] = 1; // 'state 85' -> EscapedCharacter -> CARET
reducerStates[59994] = 1; // 'state 85' -> EscapedCharacter -> DASH
reducerStates[87258] = 1; // 'state 85' -> EscapedCharacter -> UNION
reducerStates[100890] = 1; // 'state 85' -> EscapedCharacter -> PAREN_OPEN
reducerStates[114522] = 1; // 'state 85' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[128154] = 1; // 'state 85' -> EscapedCharacter -> QUANTIFIER
reducerStates[141786] = 1; // 'state 85' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[169050] = 1; // 'state 85' -> EscapedCharacter -> @par-gen.EOF
reducerStates[5529] = 2; // 'state 86' -> Character -> CHARACTER
reducerStates[19161] = 2; // 'state 86' -> Character -> CONTROL_CHARACTER
reducerStates[32793] = 2; // 'state 86' -> Character -> BACKSLASH
reducerStates[46425] = 2; // 'state 86' -> Character -> CARET
reducerStates[60057] = 2; // 'state 86' -> Character -> DASH
reducerStates[87321] = 2; // 'state 86' -> Character -> UNION
reducerStates[100953] = 2; // 'state 86' -> Character -> PAREN_OPEN
reducerStates[114585] = 2; // 'state 86' -> Character -> PAREN_CLOSE
reducerStates[128217] = 2; // 'state 86' -> Character -> QUANTIFIER
reducerStates[141849] = 2; // 'state 86' -> Character -> BRACKET_OPEN
reducerStates[169113] = 2; // 'state 86' -> Character -> @par-gen.EOF
reducerStates[5783] = 1; // 'state 90' -> CharacterClassCharacter -> CHARACTER
reducerStates[19415] = 1; // 'state 90' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[33047] = 1; // 'state 90' -> CharacterClassCharacter -> BACKSLASH
reducerStates[73943] = 1; // 'state 90' -> CharacterClassCharacter -> DOT
reducerStates[87575] = 1; // 'state 90' -> CharacterClassCharacter -> UNION
reducerStates[101207] = 1; // 'state 90' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[114839] = 1; // 'state 90' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[128471] = 1; // 'state 90' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[155735] = 1; // 'state 90' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[5847] = 1; // 'state 91' -> CharacterClassCharacter -> CHARACTER
reducerStates[19479] = 1; // 'state 91' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[33111] = 1; // 'state 91' -> CharacterClassCharacter -> BACKSLASH
reducerStates[74007] = 1; // 'state 91' -> CharacterClassCharacter -> DOT
reducerStates[87639] = 1; // 'state 91' -> CharacterClassCharacter -> UNION
reducerStates[101271] = 1; // 'state 91' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[114903] = 1; // 'state 91' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[128535] = 1; // 'state 91' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[155799] = 1; // 'state 91' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[6039] = 1; // 'state 94' -> CharacterClassCharacter -> CHARACTER
reducerStates[19671] = 1; // 'state 94' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[33303] = 1; // 'state 94' -> CharacterClassCharacter -> BACKSLASH
reducerStates[74199] = 1; // 'state 94' -> CharacterClassCharacter -> DOT
reducerStates[87831] = 1; // 'state 94' -> CharacterClassCharacter -> UNION
reducerStates[101463] = 1; // 'state 94' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[115095] = 1; // 'state 94' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[128727] = 1; // 'state 94' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[155991] = 1; // 'state 94' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[6103] = 1; // 'state 95' -> CharacterClassCharacter -> CHARACTER
reducerStates[19735] = 1; // 'state 95' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[33367] = 1; // 'state 95' -> CharacterClassCharacter -> BACKSLASH
reducerStates[74263] = 1; // 'state 95' -> CharacterClassCharacter -> DOT
reducerStates[87895] = 1; // 'state 95' -> CharacterClassCharacter -> UNION
reducerStates[101527] = 1; // 'state 95' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[115159] = 1; // 'state 95' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[128791] = 1; // 'state 95' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[156055] = 1; // 'state 95' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[6167] = 1; // 'state 96' -> CharacterClassCharacter -> CHARACTER
reducerStates[19799] = 1; // 'state 96' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[33431] = 1; // 'state 96' -> CharacterClassCharacter -> BACKSLASH
reducerStates[74327] = 1; // 'state 96' -> CharacterClassCharacter -> DOT
reducerStates[87959] = 1; // 'state 96' -> CharacterClassCharacter -> UNION
reducerStates[101591] = 1; // 'state 96' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[115223] = 1; // 'state 96' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[128855] = 1; // 'state 96' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[156119] = 1; // 'state 96' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[6231] = 1; // 'state 97' -> CharacterClassCharacter -> CHARACTER
reducerStates[19863] = 1; // 'state 97' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[33495] = 1; // 'state 97' -> CharacterClassCharacter -> BACKSLASH
reducerStates[74391] = 1; // 'state 97' -> CharacterClassCharacter -> DOT
reducerStates[88023] = 1; // 'state 97' -> CharacterClassCharacter -> UNION
reducerStates[101655] = 1; // 'state 97' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[115287] = 1; // 'state 97' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[128919] = 1; // 'state 97' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[156183] = 1; // 'state 97' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[6295] = 1; // 'state 98' -> CharacterClassCharacter -> CHARACTER
reducerStates[19927] = 1; // 'state 98' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[33559] = 1; // 'state 98' -> CharacterClassCharacter -> BACKSLASH
reducerStates[74455] = 1; // 'state 98' -> CharacterClassCharacter -> DOT
reducerStates[88087] = 1; // 'state 98' -> CharacterClassCharacter -> UNION
reducerStates[101719] = 1; // 'state 98' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[115351] = 1; // 'state 98' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[128983] = 1; // 'state 98' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[156247] = 1; // 'state 98' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[6422] = 1; // 'state 100' -> CharacterClassCharacters -> CHARACTER
reducerStates[20054] = 1; // 'state 100' -> CharacterClassCharacters -> CONTROL_CHARACTER
reducerStates[33686] = 1; // 'state 100' -> CharacterClassCharacters -> BACKSLASH
reducerStates[74582] = 1; // 'state 100' -> CharacterClassCharacters -> DOT
reducerStates[88214] = 1; // 'state 100' -> CharacterClassCharacters -> UNION
reducerStates[101846] = 1; // 'state 100' -> CharacterClassCharacters -> PAREN_OPEN
reducerStates[115478] = 1; // 'state 100' -> CharacterClassCharacters -> PAREN_CLOSE
reducerStates[129110] = 1; // 'state 100' -> CharacterClassCharacters -> QUANTIFIER
reducerStates[156374] = 1; // 'state 100' -> CharacterClassCharacters -> BRACKET_CLOSE
reducerStates[6487] = 1; // 'state 101' -> CharacterClassCharacter -> CHARACTER
reducerStates[20119] = 1; // 'state 101' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[33751] = 1; // 'state 101' -> CharacterClassCharacter -> BACKSLASH
reducerStates[74647] = 1; // 'state 101' -> CharacterClassCharacter -> DOT
reducerStates[88279] = 1; // 'state 101' -> CharacterClassCharacter -> UNION
reducerStates[101911] = 1; // 'state 101' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[115543] = 1; // 'state 101' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[129175] = 1; // 'state 101' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[156439] = 1; // 'state 101' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[88337] = 3; // 'state 102' -> Union -> UNION
reducerStates[115601] = 3; // 'state 102' -> Union -> PAREN_CLOSE
reducerStates[170129] = 3; // 'state 102' -> Union -> @par-gen.EOF
reducerStates[88401] = 3; // 'state 103' -> Union -> UNION
reducerStates[115665] = 3; // 'state 103' -> Union -> PAREN_CLOSE
reducerStates[170193] = 3; // 'state 103' -> Union -> @par-gen.EOF
reducerStates[6675] = 2; // 'state 104' -> Atom -> CHARACTER
reducerStates[20307] = 2; // 'state 104' -> Atom -> CONTROL_CHARACTER
reducerStates[33939] = 2; // 'state 104' -> Atom -> BACKSLASH
reducerStates[47571] = 2; // 'state 104' -> Atom -> CARET
reducerStates[61203] = 2; // 'state 104' -> Atom -> DASH
reducerStates[88467] = 2; // 'state 104' -> Atom -> UNION
reducerStates[102099] = 2; // 'state 104' -> Atom -> PAREN_OPEN
reducerStates[115731] = 2; // 'state 104' -> Atom -> PAREN_CLOSE
reducerStates[142995] = 2; // 'state 104' -> Atom -> BRACKET_OPEN
reducerStates[170259] = 2; // 'state 104' -> Atom -> @par-gen.EOF
reducerStates[6739] = 2; // 'state 105' -> Atom -> CHARACTER
reducerStates[20371] = 2; // 'state 105' -> Atom -> CONTROL_CHARACTER
reducerStates[34003] = 2; // 'state 105' -> Atom -> BACKSLASH
reducerStates[47635] = 2; // 'state 105' -> Atom -> CARET
reducerStates[61267] = 2; // 'state 105' -> Atom -> DASH
reducerStates[88531] = 2; // 'state 105' -> Atom -> UNION
reducerStates[102163] = 2; // 'state 105' -> Atom -> PAREN_OPEN
reducerStates[115795] = 2; // 'state 105' -> Atom -> PAREN_CLOSE
reducerStates[143059] = 2; // 'state 105' -> Atom -> BRACKET_OPEN
reducerStates[170323] = 2; // 'state 105' -> Atom -> @par-gen.EOF
reducerStates[6803] = 2; // 'state 106' -> Atom -> CHARACTER
reducerStates[20435] = 2; // 'state 106' -> Atom -> CONTROL_CHARACTER
reducerStates[34067] = 2; // 'state 106' -> Atom -> BACKSLASH
reducerStates[47699] = 2; // 'state 106' -> Atom -> CARET
reducerStates[61331] = 2; // 'state 106' -> Atom -> DASH
reducerStates[88595] = 2; // 'state 106' -> Atom -> UNION
reducerStates[102227] = 2; // 'state 106' -> Atom -> PAREN_OPEN
reducerStates[115859] = 2; // 'state 106' -> Atom -> PAREN_CLOSE
reducerStates[143123] = 2; // 'state 106' -> Atom -> BRACKET_OPEN
reducerStates[170387] = 2; // 'state 106' -> Atom -> @par-gen.EOF
reducerStates[6874] = 1; // 'state 107' -> EscapedCharacter -> CHARACTER
reducerStates[20506] = 1; // 'state 107' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[34138] = 1; // 'state 107' -> EscapedCharacter -> BACKSLASH
reducerStates[47770] = 1; // 'state 107' -> EscapedCharacter -> CARET
reducerStates[61402] = 1; // 'state 107' -> EscapedCharacter -> DASH
reducerStates[88666] = 1; // 'state 107' -> EscapedCharacter -> UNION
reducerStates[102298] = 1; // 'state 107' -> EscapedCharacter -> PAREN_OPEN
reducerStates[115930] = 1; // 'state 107' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[129562] = 1; // 'state 107' -> EscapedCharacter -> QUANTIFIER
reducerStates[143194] = 1; // 'state 107' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[170458] = 1; // 'state 107' -> EscapedCharacter -> @par-gen.EOF
reducerStates[6938] = 1; // 'state 108' -> EscapedCharacter -> CHARACTER
reducerStates[20570] = 1; // 'state 108' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[34202] = 1; // 'state 108' -> EscapedCharacter -> BACKSLASH
reducerStates[47834] = 1; // 'state 108' -> EscapedCharacter -> CARET
reducerStates[61466] = 1; // 'state 108' -> EscapedCharacter -> DASH
reducerStates[88730] = 1; // 'state 108' -> EscapedCharacter -> UNION
reducerStates[102362] = 1; // 'state 108' -> EscapedCharacter -> PAREN_OPEN
reducerStates[115994] = 1; // 'state 108' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[129626] = 1; // 'state 108' -> EscapedCharacter -> QUANTIFIER
reducerStates[143258] = 1; // 'state 108' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[170522] = 1; // 'state 108' -> EscapedCharacter -> @par-gen.EOF
reducerStates[7002] = 1; // 'state 109' -> EscapedCharacter -> CHARACTER
reducerStates[20634] = 1; // 'state 109' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[34266] = 1; // 'state 109' -> EscapedCharacter -> BACKSLASH
reducerStates[47898] = 1; // 'state 109' -> EscapedCharacter -> CARET
reducerStates[61530] = 1; // 'state 109' -> EscapedCharacter -> DASH
reducerStates[88794] = 1; // 'state 109' -> EscapedCharacter -> UNION
reducerStates[102426] = 1; // 'state 109' -> EscapedCharacter -> PAREN_OPEN
reducerStates[116058] = 1; // 'state 109' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[129690] = 1; // 'state 109' -> EscapedCharacter -> QUANTIFIER
reducerStates[143322] = 1; // 'state 109' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[170586] = 1; // 'state 109' -> EscapedCharacter -> @par-gen.EOF
reducerStates[7066] = 1; // 'state 110' -> EscapedCharacter -> CHARACTER
reducerStates[20698] = 1; // 'state 110' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[34330] = 1; // 'state 110' -> EscapedCharacter -> BACKSLASH
reducerStates[47962] = 1; // 'state 110' -> EscapedCharacter -> CARET
reducerStates[61594] = 1; // 'state 110' -> EscapedCharacter -> DASH
reducerStates[88858] = 1; // 'state 110' -> EscapedCharacter -> UNION
reducerStates[102490] = 1; // 'state 110' -> EscapedCharacter -> PAREN_OPEN
reducerStates[116122] = 1; // 'state 110' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[129754] = 1; // 'state 110' -> EscapedCharacter -> QUANTIFIER
reducerStates[143386] = 1; // 'state 110' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[170650] = 1; // 'state 110' -> EscapedCharacter -> @par-gen.EOF
reducerStates[7130] = 1; // 'state 111' -> EscapedCharacter -> CHARACTER
reducerStates[20762] = 1; // 'state 111' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[34394] = 1; // 'state 111' -> EscapedCharacter -> BACKSLASH
reducerStates[48026] = 1; // 'state 111' -> EscapedCharacter -> CARET
reducerStates[61658] = 1; // 'state 111' -> EscapedCharacter -> DASH
reducerStates[88922] = 1; // 'state 111' -> EscapedCharacter -> UNION
reducerStates[102554] = 1; // 'state 111' -> EscapedCharacter -> PAREN_OPEN
reducerStates[116186] = 1; // 'state 111' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[129818] = 1; // 'state 111' -> EscapedCharacter -> QUANTIFIER
reducerStates[143450] = 1; // 'state 111' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[170714] = 1; // 'state 111' -> EscapedCharacter -> @par-gen.EOF
reducerStates[7194] = 1; // 'state 112' -> EscapedCharacter -> CHARACTER
reducerStates[20826] = 1; // 'state 112' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[34458] = 1; // 'state 112' -> EscapedCharacter -> BACKSLASH
reducerStates[48090] = 1; // 'state 112' -> EscapedCharacter -> CARET
reducerStates[61722] = 1; // 'state 112' -> EscapedCharacter -> DASH
reducerStates[88986] = 1; // 'state 112' -> EscapedCharacter -> UNION
reducerStates[102618] = 1; // 'state 112' -> EscapedCharacter -> PAREN_OPEN
reducerStates[116250] = 1; // 'state 112' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[129882] = 1; // 'state 112' -> EscapedCharacter -> QUANTIFIER
reducerStates[143514] = 1; // 'state 112' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[170778] = 1; // 'state 112' -> EscapedCharacter -> @par-gen.EOF
reducerStates[7258] = 1; // 'state 113' -> EscapedCharacter -> CHARACTER
reducerStates[20890] = 1; // 'state 113' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[34522] = 1; // 'state 113' -> EscapedCharacter -> BACKSLASH
reducerStates[48154] = 1; // 'state 113' -> EscapedCharacter -> CARET
reducerStates[61786] = 1; // 'state 113' -> EscapedCharacter -> DASH
reducerStates[89050] = 1; // 'state 113' -> EscapedCharacter -> UNION
reducerStates[102682] = 1; // 'state 113' -> EscapedCharacter -> PAREN_OPEN
reducerStates[116314] = 1; // 'state 113' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[129946] = 1; // 'state 113' -> EscapedCharacter -> QUANTIFIER
reducerStates[143578] = 1; // 'state 113' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[170842] = 1; // 'state 113' -> EscapedCharacter -> @par-gen.EOF
reducerStates[7322] = 1; // 'state 114' -> EscapedCharacter -> CHARACTER
reducerStates[20954] = 1; // 'state 114' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[34586] = 1; // 'state 114' -> EscapedCharacter -> BACKSLASH
reducerStates[48218] = 1; // 'state 114' -> EscapedCharacter -> CARET
reducerStates[61850] = 1; // 'state 114' -> EscapedCharacter -> DASH
reducerStates[89114] = 1; // 'state 114' -> EscapedCharacter -> UNION
reducerStates[102746] = 1; // 'state 114' -> EscapedCharacter -> PAREN_OPEN
reducerStates[116378] = 1; // 'state 114' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[130010] = 1; // 'state 114' -> EscapedCharacter -> QUANTIFIER
reducerStates[143642] = 1; // 'state 114' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[170906] = 1; // 'state 114' -> EscapedCharacter -> @par-gen.EOF
reducerStates[7386] = 1; // 'state 115' -> EscapedCharacter -> CHARACTER
reducerStates[21018] = 1; // 'state 115' -> EscapedCharacter -> CONTROL_CHARACTER
reducerStates[34650] = 1; // 'state 115' -> EscapedCharacter -> BACKSLASH
reducerStates[48282] = 1; // 'state 115' -> EscapedCharacter -> CARET
reducerStates[61914] = 1; // 'state 115' -> EscapedCharacter -> DASH
reducerStates[89178] = 1; // 'state 115' -> EscapedCharacter -> UNION
reducerStates[102810] = 1; // 'state 115' -> EscapedCharacter -> PAREN_OPEN
reducerStates[116442] = 1; // 'state 115' -> EscapedCharacter -> PAREN_CLOSE
reducerStates[130074] = 1; // 'state 115' -> EscapedCharacter -> QUANTIFIER
reducerStates[143706] = 1; // 'state 115' -> EscapedCharacter -> BRACKET_OPEN
reducerStates[170970] = 1; // 'state 115' -> EscapedCharacter -> @par-gen.EOF
reducerStates[7449] = 2; // 'state 116' -> Character -> CHARACTER
reducerStates[21081] = 2; // 'state 116' -> Character -> CONTROL_CHARACTER
reducerStates[34713] = 2; // 'state 116' -> Character -> BACKSLASH
reducerStates[48345] = 2; // 'state 116' -> Character -> CARET
reducerStates[61977] = 2; // 'state 116' -> Character -> DASH
reducerStates[89241] = 2; // 'state 116' -> Character -> UNION
reducerStates[102873] = 2; // 'state 116' -> Character -> PAREN_OPEN
reducerStates[116505] = 2; // 'state 116' -> Character -> PAREN_CLOSE
reducerStates[130137] = 2; // 'state 116' -> Character -> QUANTIFIER
reducerStates[143769] = 2; // 'state 116' -> Character -> BRACKET_OPEN
reducerStates[171033] = 2; // 'state 116' -> Character -> @par-gen.EOF
reducerStates[7703] = 1; // 'state 120' -> CharacterClassCharacter -> CHARACTER
reducerStates[21335] = 1; // 'state 120' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[34967] = 1; // 'state 120' -> CharacterClassCharacter -> BACKSLASH
reducerStates[75863] = 1; // 'state 120' -> CharacterClassCharacter -> DOT
reducerStates[89495] = 1; // 'state 120' -> CharacterClassCharacter -> UNION
reducerStates[103127] = 1; // 'state 120' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[116759] = 1; // 'state 120' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[130391] = 1; // 'state 120' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[157655] = 1; // 'state 120' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[7767] = 1; // 'state 121' -> CharacterClassCharacter -> CHARACTER
reducerStates[21399] = 1; // 'state 121' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[35031] = 1; // 'state 121' -> CharacterClassCharacter -> BACKSLASH
reducerStates[75927] = 1; // 'state 121' -> CharacterClassCharacter -> DOT
reducerStates[89559] = 1; // 'state 121' -> CharacterClassCharacter -> UNION
reducerStates[103191] = 1; // 'state 121' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[116823] = 1; // 'state 121' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[130455] = 1; // 'state 121' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[157719] = 1; // 'state 121' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[7959] = 1; // 'state 124' -> CharacterClassCharacter -> CHARACTER
reducerStates[21591] = 1; // 'state 124' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[35223] = 1; // 'state 124' -> CharacterClassCharacter -> BACKSLASH
reducerStates[76119] = 1; // 'state 124' -> CharacterClassCharacter -> DOT
reducerStates[89751] = 1; // 'state 124' -> CharacterClassCharacter -> UNION
reducerStates[103383] = 1; // 'state 124' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[117015] = 1; // 'state 124' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[130647] = 1; // 'state 124' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[157911] = 1; // 'state 124' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[8023] = 1; // 'state 125' -> CharacterClassCharacter -> CHARACTER
reducerStates[21655] = 1; // 'state 125' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[35287] = 1; // 'state 125' -> CharacterClassCharacter -> BACKSLASH
reducerStates[76183] = 1; // 'state 125' -> CharacterClassCharacter -> DOT
reducerStates[89815] = 1; // 'state 125' -> CharacterClassCharacter -> UNION
reducerStates[103447] = 1; // 'state 125' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[117079] = 1; // 'state 125' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[130711] = 1; // 'state 125' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[157975] = 1; // 'state 125' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[8087] = 1; // 'state 126' -> CharacterClassCharacter -> CHARACTER
reducerStates[21719] = 1; // 'state 126' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[35351] = 1; // 'state 126' -> CharacterClassCharacter -> BACKSLASH
reducerStates[76247] = 1; // 'state 126' -> CharacterClassCharacter -> DOT
reducerStates[89879] = 1; // 'state 126' -> CharacterClassCharacter -> UNION
reducerStates[103511] = 1; // 'state 126' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[117143] = 1; // 'state 126' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[130775] = 1; // 'state 126' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[158039] = 1; // 'state 126' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[8151] = 1; // 'state 127' -> CharacterClassCharacter -> CHARACTER
reducerStates[21783] = 1; // 'state 127' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[35415] = 1; // 'state 127' -> CharacterClassCharacter -> BACKSLASH
reducerStates[76311] = 1; // 'state 127' -> CharacterClassCharacter -> DOT
reducerStates[89943] = 1; // 'state 127' -> CharacterClassCharacter -> UNION
reducerStates[103575] = 1; // 'state 127' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[117207] = 1; // 'state 127' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[130839] = 1; // 'state 127' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[158103] = 1; // 'state 127' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[8215] = 1; // 'state 128' -> CharacterClassCharacter -> CHARACTER
reducerStates[21847] = 1; // 'state 128' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[35479] = 1; // 'state 128' -> CharacterClassCharacter -> BACKSLASH
reducerStates[76375] = 1; // 'state 128' -> CharacterClassCharacter -> DOT
reducerStates[90007] = 1; // 'state 128' -> CharacterClassCharacter -> UNION
reducerStates[103639] = 1; // 'state 128' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[117271] = 1; // 'state 128' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[130903] = 1; // 'state 128' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[158167] = 1; // 'state 128' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[8342] = 1; // 'state 130' -> CharacterClassCharacters -> CHARACTER
reducerStates[21974] = 1; // 'state 130' -> CharacterClassCharacters -> CONTROL_CHARACTER
reducerStates[35606] = 1; // 'state 130' -> CharacterClassCharacters -> BACKSLASH
reducerStates[76502] = 1; // 'state 130' -> CharacterClassCharacters -> DOT
reducerStates[90134] = 1; // 'state 130' -> CharacterClassCharacters -> UNION
reducerStates[103766] = 1; // 'state 130' -> CharacterClassCharacters -> PAREN_OPEN
reducerStates[117398] = 1; // 'state 130' -> CharacterClassCharacters -> PAREN_CLOSE
reducerStates[131030] = 1; // 'state 130' -> CharacterClassCharacters -> QUANTIFIER
reducerStates[158294] = 1; // 'state 130' -> CharacterClassCharacters -> BRACKET_CLOSE
reducerStates[8407] = 1; // 'state 131' -> CharacterClassCharacter -> CHARACTER
reducerStates[22039] = 1; // 'state 131' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[35671] = 1; // 'state 131' -> CharacterClassCharacter -> BACKSLASH
reducerStates[76567] = 1; // 'state 131' -> CharacterClassCharacter -> DOT
reducerStates[90199] = 1; // 'state 131' -> CharacterClassCharacter -> UNION
reducerStates[103831] = 1; // 'state 131' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[117463] = 1; // 'state 131' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[131095] = 1; // 'state 131' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[158359] = 1; // 'state 131' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[8468] = 3; // 'state 132' -> Group -> CHARACTER
reducerStates[22100] = 3; // 'state 132' -> Group -> CONTROL_CHARACTER
reducerStates[35732] = 3; // 'state 132' -> Group -> BACKSLASH
reducerStates[49364] = 3; // 'state 132' -> Group -> CARET
reducerStates[62996] = 3; // 'state 132' -> Group -> DASH
reducerStates[90260] = 3; // 'state 132' -> Group -> UNION
reducerStates[103892] = 3; // 'state 132' -> Group -> PAREN_OPEN
reducerStates[117524] = 3; // 'state 132' -> Group -> PAREN_CLOSE
reducerStates[131156] = 3; // 'state 132' -> Group -> QUANTIFIER
reducerStates[144788] = 3; // 'state 132' -> Group -> BRACKET_OPEN
reducerStates[172052] = 3; // 'state 132' -> Group -> @par-gen.EOF
reducerStates[8532] = 3; // 'state 133' -> Group -> CHARACTER
reducerStates[22164] = 3; // 'state 133' -> Group -> CONTROL_CHARACTER
reducerStates[35796] = 3; // 'state 133' -> Group -> BACKSLASH
reducerStates[49428] = 3; // 'state 133' -> Group -> CARET
reducerStates[63060] = 3; // 'state 133' -> Group -> DASH
reducerStates[90324] = 3; // 'state 133' -> Group -> UNION
reducerStates[103956] = 3; // 'state 133' -> Group -> PAREN_OPEN
reducerStates[117588] = 3; // 'state 133' -> Group -> PAREN_CLOSE
reducerStates[131220] = 3; // 'state 133' -> Group -> QUANTIFIER
reducerStates[144852] = 3; // 'state 133' -> Group -> BRACKET_OPEN
reducerStates[172116] = 3; // 'state 133' -> Group -> @par-gen.EOF
reducerStates[8596] = 3; // 'state 134' -> Group -> CHARACTER
reducerStates[22228] = 3; // 'state 134' -> Group -> CONTROL_CHARACTER
reducerStates[35860] = 3; // 'state 134' -> Group -> BACKSLASH
reducerStates[49492] = 3; // 'state 134' -> Group -> CARET
reducerStates[63124] = 3; // 'state 134' -> Group -> DASH
reducerStates[90388] = 3; // 'state 134' -> Group -> UNION
reducerStates[104020] = 3; // 'state 134' -> Group -> PAREN_OPEN
reducerStates[117652] = 3; // 'state 134' -> Group -> PAREN_CLOSE
reducerStates[131284] = 3; // 'state 134' -> Group -> QUANTIFIER
reducerStates[144916] = 3; // 'state 134' -> Group -> BRACKET_OPEN
reducerStates[172180] = 3; // 'state 134' -> Group -> @par-gen.EOF
reducerStates[8663] = 1; // 'state 135' -> CharacterClassCharacter -> CHARACTER
reducerStates[22295] = 1; // 'state 135' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[35927] = 1; // 'state 135' -> CharacterClassCharacter -> BACKSLASH
reducerStates[76823] = 1; // 'state 135' -> CharacterClassCharacter -> DOT
reducerStates[90455] = 1; // 'state 135' -> CharacterClassCharacter -> UNION
reducerStates[104087] = 1; // 'state 135' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[117719] = 1; // 'state 135' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[131351] = 1; // 'state 135' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[158615] = 1; // 'state 135' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[8727] = 1; // 'state 136' -> CharacterClassCharacter -> CHARACTER
reducerStates[22359] = 1; // 'state 136' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[35991] = 1; // 'state 136' -> CharacterClassCharacter -> BACKSLASH
reducerStates[76887] = 1; // 'state 136' -> CharacterClassCharacter -> DOT
reducerStates[90519] = 1; // 'state 136' -> CharacterClassCharacter -> UNION
reducerStates[104151] = 1; // 'state 136' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[117783] = 1; // 'state 136' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[131415] = 1; // 'state 136' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[158679] = 1; // 'state 136' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[8919] = 1; // 'state 139' -> CharacterClassCharacter -> CHARACTER
reducerStates[22551] = 1; // 'state 139' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[36183] = 1; // 'state 139' -> CharacterClassCharacter -> BACKSLASH
reducerStates[77079] = 1; // 'state 139' -> CharacterClassCharacter -> DOT
reducerStates[90711] = 1; // 'state 139' -> CharacterClassCharacter -> UNION
reducerStates[104343] = 1; // 'state 139' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[117975] = 1; // 'state 139' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[131607] = 1; // 'state 139' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[158871] = 1; // 'state 139' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[8983] = 1; // 'state 140' -> CharacterClassCharacter -> CHARACTER
reducerStates[22615] = 1; // 'state 140' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[36247] = 1; // 'state 140' -> CharacterClassCharacter -> BACKSLASH
reducerStates[77143] = 1; // 'state 140' -> CharacterClassCharacter -> DOT
reducerStates[90775] = 1; // 'state 140' -> CharacterClassCharacter -> UNION
reducerStates[104407] = 1; // 'state 140' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[118039] = 1; // 'state 140' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[131671] = 1; // 'state 140' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[158935] = 1; // 'state 140' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[9047] = 1; // 'state 141' -> CharacterClassCharacter -> CHARACTER
reducerStates[22679] = 1; // 'state 141' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[36311] = 1; // 'state 141' -> CharacterClassCharacter -> BACKSLASH
reducerStates[77207] = 1; // 'state 141' -> CharacterClassCharacter -> DOT
reducerStates[90839] = 1; // 'state 141' -> CharacterClassCharacter -> UNION
reducerStates[104471] = 1; // 'state 141' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[118103] = 1; // 'state 141' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[131735] = 1; // 'state 141' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[158999] = 1; // 'state 141' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[9111] = 1; // 'state 142' -> CharacterClassCharacter -> CHARACTER
reducerStates[22743] = 1; // 'state 142' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[36375] = 1; // 'state 142' -> CharacterClassCharacter -> BACKSLASH
reducerStates[77271] = 1; // 'state 142' -> CharacterClassCharacter -> DOT
reducerStates[90903] = 1; // 'state 142' -> CharacterClassCharacter -> UNION
reducerStates[104535] = 1; // 'state 142' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[118167] = 1; // 'state 142' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[131799] = 1; // 'state 142' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[159063] = 1; // 'state 142' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[9175] = 1; // 'state 143' -> CharacterClassCharacter -> CHARACTER
reducerStates[22807] = 1; // 'state 143' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[36439] = 1; // 'state 143' -> CharacterClassCharacter -> BACKSLASH
reducerStates[77335] = 1; // 'state 143' -> CharacterClassCharacter -> DOT
reducerStates[90967] = 1; // 'state 143' -> CharacterClassCharacter -> UNION
reducerStates[104599] = 1; // 'state 143' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[118231] = 1; // 'state 143' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[131863] = 1; // 'state 143' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[159127] = 1; // 'state 143' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[9302] = 1; // 'state 145' -> CharacterClassCharacters -> CHARACTER
reducerStates[22934] = 1; // 'state 145' -> CharacterClassCharacters -> CONTROL_CHARACTER
reducerStates[36566] = 1; // 'state 145' -> CharacterClassCharacters -> BACKSLASH
reducerStates[77462] = 1; // 'state 145' -> CharacterClassCharacters -> DOT
reducerStates[91094] = 1; // 'state 145' -> CharacterClassCharacters -> UNION
reducerStates[104726] = 1; // 'state 145' -> CharacterClassCharacters -> PAREN_OPEN
reducerStates[118358] = 1; // 'state 145' -> CharacterClassCharacters -> PAREN_CLOSE
reducerStates[131990] = 1; // 'state 145' -> CharacterClassCharacters -> QUANTIFIER
reducerStates[159254] = 1; // 'state 145' -> CharacterClassCharacters -> BRACKET_CLOSE
reducerStates[9367] = 1; // 'state 146' -> CharacterClassCharacter -> CHARACTER
reducerStates[22999] = 1; // 'state 146' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[36631] = 1; // 'state 146' -> CharacterClassCharacter -> BACKSLASH
reducerStates[77527] = 1; // 'state 146' -> CharacterClassCharacter -> DOT
reducerStates[91159] = 1; // 'state 146' -> CharacterClassCharacter -> UNION
reducerStates[104791] = 1; // 'state 146' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[118423] = 1; // 'state 146' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[132055] = 1; // 'state 146' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[159319] = 1; // 'state 146' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[9431] = 1; // 'state 147' -> CharacterClassCharacter -> CHARACTER
reducerStates[23063] = 1; // 'state 147' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[36695] = 1; // 'state 147' -> CharacterClassCharacter -> BACKSLASH
reducerStates[77591] = 1; // 'state 147' -> CharacterClassCharacter -> DOT
reducerStates[91223] = 1; // 'state 147' -> CharacterClassCharacter -> UNION
reducerStates[104855] = 1; // 'state 147' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[118487] = 1; // 'state 147' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[132119] = 1; // 'state 147' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[159383] = 1; // 'state 147' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[9495] = 1; // 'state 148' -> CharacterClassCharacter -> CHARACTER
reducerStates[23127] = 1; // 'state 148' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[36759] = 1; // 'state 148' -> CharacterClassCharacter -> BACKSLASH
reducerStates[77655] = 1; // 'state 148' -> CharacterClassCharacter -> DOT
reducerStates[91287] = 1; // 'state 148' -> CharacterClassCharacter -> UNION
reducerStates[104919] = 1; // 'state 148' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[118551] = 1; // 'state 148' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[132183] = 1; // 'state 148' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[159447] = 1; // 'state 148' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[9623] = 1; // 'state 150' -> CharacterClassCharacter -> CHARACTER
reducerStates[23255] = 1; // 'state 150' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[36887] = 1; // 'state 150' -> CharacterClassCharacter -> BACKSLASH
reducerStates[77783] = 1; // 'state 150' -> CharacterClassCharacter -> DOT
reducerStates[91415] = 1; // 'state 150' -> CharacterClassCharacter -> UNION
reducerStates[105047] = 1; // 'state 150' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[118679] = 1; // 'state 150' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[132311] = 1; // 'state 150' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[159575] = 1; // 'state 150' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[9687] = 1; // 'state 151' -> CharacterClassCharacter -> CHARACTER
reducerStates[23319] = 1; // 'state 151' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[36951] = 1; // 'state 151' -> CharacterClassCharacter -> BACKSLASH
reducerStates[77847] = 1; // 'state 151' -> CharacterClassCharacter -> DOT
reducerStates[91479] = 1; // 'state 151' -> CharacterClassCharacter -> UNION
reducerStates[105111] = 1; // 'state 151' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[118743] = 1; // 'state 151' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[132375] = 1; // 'state 151' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[159639] = 1; // 'state 151' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[9751] = 1; // 'state 152' -> CharacterClassCharacter -> CHARACTER
reducerStates[23383] = 1; // 'state 152' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[37015] = 1; // 'state 152' -> CharacterClassCharacter -> BACKSLASH
reducerStates[77911] = 1; // 'state 152' -> CharacterClassCharacter -> DOT
reducerStates[91543] = 1; // 'state 152' -> CharacterClassCharacter -> UNION
reducerStates[105175] = 1; // 'state 152' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[118807] = 1; // 'state 152' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[132439] = 1; // 'state 152' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[159703] = 1; // 'state 152' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[9815] = 1; // 'state 153' -> CharacterClassCharacter -> CHARACTER
reducerStates[23447] = 1; // 'state 153' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[37079] = 1; // 'state 153' -> CharacterClassCharacter -> BACKSLASH
reducerStates[77975] = 1; // 'state 153' -> CharacterClassCharacter -> DOT
reducerStates[91607] = 1; // 'state 153' -> CharacterClassCharacter -> UNION
reducerStates[105239] = 1; // 'state 153' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[118871] = 1; // 'state 153' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[132503] = 1; // 'state 153' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[159767] = 1; // 'state 153' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[9879] = 1; // 'state 154' -> CharacterClassCharacter -> CHARACTER
reducerStates[23511] = 1; // 'state 154' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[37143] = 1; // 'state 154' -> CharacterClassCharacter -> BACKSLASH
reducerStates[78039] = 1; // 'state 154' -> CharacterClassCharacter -> DOT
reducerStates[91671] = 1; // 'state 154' -> CharacterClassCharacter -> UNION
reducerStates[105303] = 1; // 'state 154' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[118935] = 1; // 'state 154' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[132567] = 1; // 'state 154' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[159831] = 1; // 'state 154' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[9941] = 3; // 'state 155' -> CharacterClass -> CHARACTER
reducerStates[23573] = 3; // 'state 155' -> CharacterClass -> CONTROL_CHARACTER
reducerStates[37205] = 3; // 'state 155' -> CharacterClass -> BACKSLASH
reducerStates[50837] = 3; // 'state 155' -> CharacterClass -> CARET
reducerStates[64469] = 3; // 'state 155' -> CharacterClass -> DASH
reducerStates[91733] = 3; // 'state 155' -> CharacterClass -> UNION
reducerStates[105365] = 3; // 'state 155' -> CharacterClass -> PAREN_OPEN
reducerStates[118997] = 3; // 'state 155' -> CharacterClass -> PAREN_CLOSE
reducerStates[132629] = 3; // 'state 155' -> CharacterClass -> QUANTIFIER
reducerStates[146261] = 3; // 'state 155' -> CharacterClass -> BRACKET_OPEN
reducerStates[173525] = 3; // 'state 155' -> CharacterClass -> @par-gen.EOF
reducerStates[10006] = 2; // 'state 156' -> CharacterClassCharacters -> CHARACTER
reducerStates[23638] = 2; // 'state 156' -> CharacterClassCharacters -> CONTROL_CHARACTER
reducerStates[37270] = 2; // 'state 156' -> CharacterClassCharacters -> BACKSLASH
reducerStates[78166] = 2; // 'state 156' -> CharacterClassCharacters -> DOT
reducerStates[91798] = 2; // 'state 156' -> CharacterClassCharacters -> UNION
reducerStates[105430] = 2; // 'state 156' -> CharacterClassCharacters -> PAREN_OPEN
reducerStates[119062] = 2; // 'state 156' -> CharacterClassCharacters -> PAREN_CLOSE
reducerStates[132694] = 2; // 'state 156' -> CharacterClassCharacters -> QUANTIFIER
reducerStates[159958] = 2; // 'state 156' -> CharacterClassCharacters -> BRACKET_CLOSE
reducerStates[10071] = 1; // 'state 157' -> CharacterClassCharacter -> CHARACTER
reducerStates[23703] = 1; // 'state 157' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[37335] = 1; // 'state 157' -> CharacterClassCharacter -> BACKSLASH
reducerStates[78231] = 1; // 'state 157' -> CharacterClassCharacter -> DOT
reducerStates[91863] = 1; // 'state 157' -> CharacterClassCharacter -> UNION
reducerStates[105495] = 1; // 'state 157' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[119127] = 1; // 'state 157' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[132759] = 1; // 'state 157' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[160023] = 1; // 'state 157' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[10199] = 2; // 'state 159' -> CharacterClassCharacter -> CHARACTER
reducerStates[23831] = 2; // 'state 159' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[37463] = 2; // 'state 159' -> CharacterClassCharacter -> BACKSLASH
reducerStates[78359] = 2; // 'state 159' -> CharacterClassCharacter -> DOT
reducerStates[91991] = 2; // 'state 159' -> CharacterClassCharacter -> UNION
reducerStates[105623] = 2; // 'state 159' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[119255] = 2; // 'state 159' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[132887] = 2; // 'state 159' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[160151] = 2; // 'state 159' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[10263] = 2; // 'state 160' -> CharacterClassCharacter -> CHARACTER
reducerStates[23895] = 2; // 'state 160' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[37527] = 2; // 'state 160' -> CharacterClassCharacter -> BACKSLASH
reducerStates[78423] = 2; // 'state 160' -> CharacterClassCharacter -> DOT
reducerStates[92055] = 2; // 'state 160' -> CharacterClassCharacter -> UNION
reducerStates[105687] = 2; // 'state 160' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[119319] = 2; // 'state 160' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[132951] = 2; // 'state 160' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[160215] = 2; // 'state 160' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[10327] = 2; // 'state 161' -> CharacterClassCharacter -> CHARACTER
reducerStates[23959] = 2; // 'state 161' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[37591] = 2; // 'state 161' -> CharacterClassCharacter -> BACKSLASH
reducerStates[78487] = 2; // 'state 161' -> CharacterClassCharacter -> DOT
reducerStates[92119] = 2; // 'state 161' -> CharacterClassCharacter -> UNION
reducerStates[105751] = 2; // 'state 161' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[119383] = 2; // 'state 161' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[133015] = 2; // 'state 161' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[160279] = 2; // 'state 161' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[10391] = 2; // 'state 162' -> CharacterClassCharacter -> CHARACTER
reducerStates[24023] = 2; // 'state 162' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[37655] = 2; // 'state 162' -> CharacterClassCharacter -> BACKSLASH
reducerStates[78551] = 2; // 'state 162' -> CharacterClassCharacter -> DOT
reducerStates[92183] = 2; // 'state 162' -> CharacterClassCharacter -> UNION
reducerStates[105815] = 2; // 'state 162' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[119447] = 2; // 'state 162' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[133079] = 2; // 'state 162' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[160343] = 2; // 'state 162' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[10455] = 2; // 'state 163' -> CharacterClassCharacter -> CHARACTER
reducerStates[24087] = 2; // 'state 163' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[37719] = 2; // 'state 163' -> CharacterClassCharacter -> BACKSLASH
reducerStates[78615] = 2; // 'state 163' -> CharacterClassCharacter -> DOT
reducerStates[92247] = 2; // 'state 163' -> CharacterClassCharacter -> UNION
reducerStates[105879] = 2; // 'state 163' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[119511] = 2; // 'state 163' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[133143] = 2; // 'state 163' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[160407] = 2; // 'state 163' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[10580] = 3; // 'state 165' -> Group -> CHARACTER
reducerStates[24212] = 3; // 'state 165' -> Group -> CONTROL_CHARACTER
reducerStates[37844] = 3; // 'state 165' -> Group -> BACKSLASH
reducerStates[51476] = 3; // 'state 165' -> Group -> CARET
reducerStates[65108] = 3; // 'state 165' -> Group -> DASH
reducerStates[92372] = 3; // 'state 165' -> Group -> UNION
reducerStates[106004] = 3; // 'state 165' -> Group -> PAREN_OPEN
reducerStates[119636] = 3; // 'state 165' -> Group -> PAREN_CLOSE
reducerStates[133268] = 3; // 'state 165' -> Group -> QUANTIFIER
reducerStates[146900] = 3; // 'state 165' -> Group -> BRACKET_OPEN
reducerStates[174164] = 3; // 'state 165' -> Group -> @par-gen.EOF
reducerStates[10644] = 3; // 'state 166' -> Group -> CHARACTER
reducerStates[24276] = 3; // 'state 166' -> Group -> CONTROL_CHARACTER
reducerStates[37908] = 3; // 'state 166' -> Group -> BACKSLASH
reducerStates[51540] = 3; // 'state 166' -> Group -> CARET
reducerStates[65172] = 3; // 'state 166' -> Group -> DASH
reducerStates[92436] = 3; // 'state 166' -> Group -> UNION
reducerStates[106068] = 3; // 'state 166' -> Group -> PAREN_OPEN
reducerStates[119700] = 3; // 'state 166' -> Group -> PAREN_CLOSE
reducerStates[133332] = 3; // 'state 166' -> Group -> QUANTIFIER
reducerStates[146964] = 3; // 'state 166' -> Group -> BRACKET_OPEN
reducerStates[174228] = 3; // 'state 166' -> Group -> @par-gen.EOF
reducerStates[10708] = 3; // 'state 167' -> Group -> CHARACTER
reducerStates[24340] = 3; // 'state 167' -> Group -> CONTROL_CHARACTER
reducerStates[37972] = 3; // 'state 167' -> Group -> BACKSLASH
reducerStates[51604] = 3; // 'state 167' -> Group -> CARET
reducerStates[65236] = 3; // 'state 167' -> Group -> DASH
reducerStates[92500] = 3; // 'state 167' -> Group -> UNION
reducerStates[106132] = 3; // 'state 167' -> Group -> PAREN_OPEN
reducerStates[119764] = 3; // 'state 167' -> Group -> PAREN_CLOSE
reducerStates[133396] = 3; // 'state 167' -> Group -> QUANTIFIER
reducerStates[147028] = 3; // 'state 167' -> Group -> BRACKET_OPEN
reducerStates[174292] = 3; // 'state 167' -> Group -> @par-gen.EOF
reducerStates[10773] = 3; // 'state 168' -> CharacterClass -> CHARACTER
reducerStates[24405] = 3; // 'state 168' -> CharacterClass -> CONTROL_CHARACTER
reducerStates[38037] = 3; // 'state 168' -> CharacterClass -> BACKSLASH
reducerStates[51669] = 3; // 'state 168' -> CharacterClass -> CARET
reducerStates[65301] = 3; // 'state 168' -> CharacterClass -> DASH
reducerStates[92565] = 3; // 'state 168' -> CharacterClass -> UNION
reducerStates[106197] = 3; // 'state 168' -> CharacterClass -> PAREN_OPEN
reducerStates[119829] = 3; // 'state 168' -> CharacterClass -> PAREN_CLOSE
reducerStates[133461] = 3; // 'state 168' -> CharacterClass -> QUANTIFIER
reducerStates[147093] = 3; // 'state 168' -> CharacterClass -> BRACKET_OPEN
reducerStates[174357] = 3; // 'state 168' -> CharacterClass -> @par-gen.EOF
reducerStates[10838] = 2; // 'state 169' -> CharacterClassCharacters -> CHARACTER
reducerStates[24470] = 2; // 'state 169' -> CharacterClassCharacters -> CONTROL_CHARACTER
reducerStates[38102] = 2; // 'state 169' -> CharacterClassCharacters -> BACKSLASH
reducerStates[78998] = 2; // 'state 169' -> CharacterClassCharacters -> DOT
reducerStates[92630] = 2; // 'state 169' -> CharacterClassCharacters -> UNION
reducerStates[106262] = 2; // 'state 169' -> CharacterClassCharacters -> PAREN_OPEN
reducerStates[119894] = 2; // 'state 169' -> CharacterClassCharacters -> PAREN_CLOSE
reducerStates[133526] = 2; // 'state 169' -> CharacterClassCharacters -> QUANTIFIER
reducerStates[160790] = 2; // 'state 169' -> CharacterClassCharacters -> BRACKET_CLOSE
reducerStates[10967] = 2; // 'state 171' -> CharacterClassCharacter -> CHARACTER
reducerStates[24599] = 2; // 'state 171' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[38231] = 2; // 'state 171' -> CharacterClassCharacter -> BACKSLASH
reducerStates[79127] = 2; // 'state 171' -> CharacterClassCharacter -> DOT
reducerStates[92759] = 2; // 'state 171' -> CharacterClassCharacter -> UNION
reducerStates[106391] = 2; // 'state 171' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[120023] = 2; // 'state 171' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[133655] = 2; // 'state 171' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[160919] = 2; // 'state 171' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[11031] = 2; // 'state 172' -> CharacterClassCharacter -> CHARACTER
reducerStates[24663] = 2; // 'state 172' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[38295] = 2; // 'state 172' -> CharacterClassCharacter -> BACKSLASH
reducerStates[79191] = 2; // 'state 172' -> CharacterClassCharacter -> DOT
reducerStates[92823] = 2; // 'state 172' -> CharacterClassCharacter -> UNION
reducerStates[106455] = 2; // 'state 172' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[120087] = 2; // 'state 172' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[133719] = 2; // 'state 172' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[160983] = 2; // 'state 172' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[11095] = 2; // 'state 173' -> CharacterClassCharacter -> CHARACTER
reducerStates[24727] = 2; // 'state 173' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[38359] = 2; // 'state 173' -> CharacterClassCharacter -> BACKSLASH
reducerStates[79255] = 2; // 'state 173' -> CharacterClassCharacter -> DOT
reducerStates[92887] = 2; // 'state 173' -> CharacterClassCharacter -> UNION
reducerStates[106519] = 2; // 'state 173' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[120151] = 2; // 'state 173' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[133783] = 2; // 'state 173' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[161047] = 2; // 'state 173' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[11159] = 2; // 'state 174' -> CharacterClassCharacter -> CHARACTER
reducerStates[24791] = 2; // 'state 174' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[38423] = 2; // 'state 174' -> CharacterClassCharacter -> BACKSLASH
reducerStates[79319] = 2; // 'state 174' -> CharacterClassCharacter -> DOT
reducerStates[92951] = 2; // 'state 174' -> CharacterClassCharacter -> UNION
reducerStates[106583] = 2; // 'state 174' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[120215] = 2; // 'state 174' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[133847] = 2; // 'state 174' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[161111] = 2; // 'state 174' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[11223] = 2; // 'state 175' -> CharacterClassCharacter -> CHARACTER
reducerStates[24855] = 2; // 'state 175' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[38487] = 2; // 'state 175' -> CharacterClassCharacter -> BACKSLASH
reducerStates[79383] = 2; // 'state 175' -> CharacterClassCharacter -> DOT
reducerStates[93015] = 2; // 'state 175' -> CharacterClassCharacter -> UNION
reducerStates[106647] = 2; // 'state 175' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[120279] = 2; // 'state 175' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[133911] = 2; // 'state 175' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[161175] = 2; // 'state 175' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[11348] = 3; // 'state 177' -> Group -> CHARACTER
reducerStates[24980] = 3; // 'state 177' -> Group -> CONTROL_CHARACTER
reducerStates[38612] = 3; // 'state 177' -> Group -> BACKSLASH
reducerStates[52244] = 3; // 'state 177' -> Group -> CARET
reducerStates[65876] = 3; // 'state 177' -> Group -> DASH
reducerStates[93140] = 3; // 'state 177' -> Group -> UNION
reducerStates[106772] = 3; // 'state 177' -> Group -> PAREN_OPEN
reducerStates[120404] = 3; // 'state 177' -> Group -> PAREN_CLOSE
reducerStates[134036] = 3; // 'state 177' -> Group -> QUANTIFIER
reducerStates[147668] = 3; // 'state 177' -> Group -> BRACKET_OPEN
reducerStates[174932] = 3; // 'state 177' -> Group -> @par-gen.EOF
reducerStates[11412] = 3; // 'state 178' -> Group -> CHARACTER
reducerStates[25044] = 3; // 'state 178' -> Group -> CONTROL_CHARACTER
reducerStates[38676] = 3; // 'state 178' -> Group -> BACKSLASH
reducerStates[52308] = 3; // 'state 178' -> Group -> CARET
reducerStates[65940] = 3; // 'state 178' -> Group -> DASH
reducerStates[93204] = 3; // 'state 178' -> Group -> UNION
reducerStates[106836] = 3; // 'state 178' -> Group -> PAREN_OPEN
reducerStates[120468] = 3; // 'state 178' -> Group -> PAREN_CLOSE
reducerStates[134100] = 3; // 'state 178' -> Group -> QUANTIFIER
reducerStates[147732] = 3; // 'state 178' -> Group -> BRACKET_OPEN
reducerStates[174996] = 3; // 'state 178' -> Group -> @par-gen.EOF
reducerStates[11476] = 3; // 'state 179' -> Group -> CHARACTER
reducerStates[25108] = 3; // 'state 179' -> Group -> CONTROL_CHARACTER
reducerStates[38740] = 3; // 'state 179' -> Group -> BACKSLASH
reducerStates[52372] = 3; // 'state 179' -> Group -> CARET
reducerStates[66004] = 3; // 'state 179' -> Group -> DASH
reducerStates[93268] = 3; // 'state 179' -> Group -> UNION
reducerStates[106900] = 3; // 'state 179' -> Group -> PAREN_OPEN
reducerStates[120532] = 3; // 'state 179' -> Group -> PAREN_CLOSE
reducerStates[134164] = 3; // 'state 179' -> Group -> QUANTIFIER
reducerStates[147796] = 3; // 'state 179' -> Group -> BRACKET_OPEN
reducerStates[175060] = 3; // 'state 179' -> Group -> @par-gen.EOF
reducerStates[11541] = 3; // 'state 180' -> CharacterClass -> CHARACTER
reducerStates[25173] = 3; // 'state 180' -> CharacterClass -> CONTROL_CHARACTER
reducerStates[38805] = 3; // 'state 180' -> CharacterClass -> BACKSLASH
reducerStates[52437] = 3; // 'state 180' -> CharacterClass -> CARET
reducerStates[66069] = 3; // 'state 180' -> CharacterClass -> DASH
reducerStates[93333] = 3; // 'state 180' -> CharacterClass -> UNION
reducerStates[106965] = 3; // 'state 180' -> CharacterClass -> PAREN_OPEN
reducerStates[120597] = 3; // 'state 180' -> CharacterClass -> PAREN_CLOSE
reducerStates[134229] = 3; // 'state 180' -> CharacterClass -> QUANTIFIER
reducerStates[147861] = 3; // 'state 180' -> CharacterClass -> BRACKET_OPEN
reducerStates[175125] = 3; // 'state 180' -> CharacterClass -> @par-gen.EOF
reducerStates[11606] = 2; // 'state 181' -> CharacterClassCharacters -> CHARACTER
reducerStates[25238] = 2; // 'state 181' -> CharacterClassCharacters -> CONTROL_CHARACTER
reducerStates[38870] = 2; // 'state 181' -> CharacterClassCharacters -> BACKSLASH
reducerStates[79766] = 2; // 'state 181' -> CharacterClassCharacters -> DOT
reducerStates[93398] = 2; // 'state 181' -> CharacterClassCharacters -> UNION
reducerStates[107030] = 2; // 'state 181' -> CharacterClassCharacters -> PAREN_OPEN
reducerStates[120662] = 2; // 'state 181' -> CharacterClassCharacters -> PAREN_CLOSE
reducerStates[134294] = 2; // 'state 181' -> CharacterClassCharacters -> QUANTIFIER
reducerStates[161558] = 2; // 'state 181' -> CharacterClassCharacters -> BRACKET_CLOSE
reducerStates[11735] = 2; // 'state 183' -> CharacterClassCharacter -> CHARACTER
reducerStates[25367] = 2; // 'state 183' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[38999] = 2; // 'state 183' -> CharacterClassCharacter -> BACKSLASH
reducerStates[79895] = 2; // 'state 183' -> CharacterClassCharacter -> DOT
reducerStates[93527] = 2; // 'state 183' -> CharacterClassCharacter -> UNION
reducerStates[107159] = 2; // 'state 183' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[120791] = 2; // 'state 183' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[134423] = 2; // 'state 183' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[161687] = 2; // 'state 183' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[11799] = 2; // 'state 184' -> CharacterClassCharacter -> CHARACTER
reducerStates[25431] = 2; // 'state 184' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[39063] = 2; // 'state 184' -> CharacterClassCharacter -> BACKSLASH
reducerStates[79959] = 2; // 'state 184' -> CharacterClassCharacter -> DOT
reducerStates[93591] = 2; // 'state 184' -> CharacterClassCharacter -> UNION
reducerStates[107223] = 2; // 'state 184' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[120855] = 2; // 'state 184' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[134487] = 2; // 'state 184' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[161751] = 2; // 'state 184' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[11863] = 2; // 'state 185' -> CharacterClassCharacter -> CHARACTER
reducerStates[25495] = 2; // 'state 185' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[39127] = 2; // 'state 185' -> CharacterClassCharacter -> BACKSLASH
reducerStates[80023] = 2; // 'state 185' -> CharacterClassCharacter -> DOT
reducerStates[93655] = 2; // 'state 185' -> CharacterClassCharacter -> UNION
reducerStates[107287] = 2; // 'state 185' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[120919] = 2; // 'state 185' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[134551] = 2; // 'state 185' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[161815] = 2; // 'state 185' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[11927] = 2; // 'state 186' -> CharacterClassCharacter -> CHARACTER
reducerStates[25559] = 2; // 'state 186' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[39191] = 2; // 'state 186' -> CharacterClassCharacter -> BACKSLASH
reducerStates[80087] = 2; // 'state 186' -> CharacterClassCharacter -> DOT
reducerStates[93719] = 2; // 'state 186' -> CharacterClassCharacter -> UNION
reducerStates[107351] = 2; // 'state 186' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[120983] = 2; // 'state 186' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[134615] = 2; // 'state 186' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[161879] = 2; // 'state 186' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[11991] = 2; // 'state 187' -> CharacterClassCharacter -> CHARACTER
reducerStates[25623] = 2; // 'state 187' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[39255] = 2; // 'state 187' -> CharacterClassCharacter -> BACKSLASH
reducerStates[80151] = 2; // 'state 187' -> CharacterClassCharacter -> DOT
reducerStates[93783] = 2; // 'state 187' -> CharacterClassCharacter -> UNION
reducerStates[107415] = 2; // 'state 187' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[121047] = 2; // 'state 187' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[134679] = 2; // 'state 187' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[161943] = 2; // 'state 187' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[12117] = 3; // 'state 189' -> CharacterClass -> CHARACTER
reducerStates[25749] = 3; // 'state 189' -> CharacterClass -> CONTROL_CHARACTER
reducerStates[39381] = 3; // 'state 189' -> CharacterClass -> BACKSLASH
reducerStates[53013] = 3; // 'state 189' -> CharacterClass -> CARET
reducerStates[66645] = 3; // 'state 189' -> CharacterClass -> DASH
reducerStates[93909] = 3; // 'state 189' -> CharacterClass -> UNION
reducerStates[107541] = 3; // 'state 189' -> CharacterClass -> PAREN_OPEN
reducerStates[121173] = 3; // 'state 189' -> CharacterClass -> PAREN_CLOSE
reducerStates[134805] = 3; // 'state 189' -> CharacterClass -> QUANTIFIER
reducerStates[148437] = 3; // 'state 189' -> CharacterClass -> BRACKET_OPEN
reducerStates[175701] = 3; // 'state 189' -> CharacterClass -> @par-gen.EOF
reducerStates[12182] = 2; // 'state 190' -> CharacterClassCharacters -> CHARACTER
reducerStates[25814] = 2; // 'state 190' -> CharacterClassCharacters -> CONTROL_CHARACTER
reducerStates[39446] = 2; // 'state 190' -> CharacterClassCharacters -> BACKSLASH
reducerStates[80342] = 2; // 'state 190' -> CharacterClassCharacters -> DOT
reducerStates[93974] = 2; // 'state 190' -> CharacterClassCharacters -> UNION
reducerStates[107606] = 2; // 'state 190' -> CharacterClassCharacters -> PAREN_OPEN
reducerStates[121238] = 2; // 'state 190' -> CharacterClassCharacters -> PAREN_CLOSE
reducerStates[134870] = 2; // 'state 190' -> CharacterClassCharacters -> QUANTIFIER
reducerStates[162134] = 2; // 'state 190' -> CharacterClassCharacters -> BRACKET_CLOSE
reducerStates[12311] = 2; // 'state 192' -> CharacterClassCharacter -> CHARACTER
reducerStates[25943] = 2; // 'state 192' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[39575] = 2; // 'state 192' -> CharacterClassCharacter -> BACKSLASH
reducerStates[80471] = 2; // 'state 192' -> CharacterClassCharacter -> DOT
reducerStates[94103] = 2; // 'state 192' -> CharacterClassCharacter -> UNION
reducerStates[107735] = 2; // 'state 192' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[121367] = 2; // 'state 192' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[134999] = 2; // 'state 192' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[162263] = 2; // 'state 192' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[12375] = 2; // 'state 193' -> CharacterClassCharacter -> CHARACTER
reducerStates[26007] = 2; // 'state 193' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[39639] = 2; // 'state 193' -> CharacterClassCharacter -> BACKSLASH
reducerStates[80535] = 2; // 'state 193' -> CharacterClassCharacter -> DOT
reducerStates[94167] = 2; // 'state 193' -> CharacterClassCharacter -> UNION
reducerStates[107799] = 2; // 'state 193' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[121431] = 2; // 'state 193' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[135063] = 2; // 'state 193' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[162327] = 2; // 'state 193' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[12439] = 2; // 'state 194' -> CharacterClassCharacter -> CHARACTER
reducerStates[26071] = 2; // 'state 194' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[39703] = 2; // 'state 194' -> CharacterClassCharacter -> BACKSLASH
reducerStates[80599] = 2; // 'state 194' -> CharacterClassCharacter -> DOT
reducerStates[94231] = 2; // 'state 194' -> CharacterClassCharacter -> UNION
reducerStates[107863] = 2; // 'state 194' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[121495] = 2; // 'state 194' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[135127] = 2; // 'state 194' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[162391] = 2; // 'state 194' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[12503] = 2; // 'state 195' -> CharacterClassCharacter -> CHARACTER
reducerStates[26135] = 2; // 'state 195' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[39767] = 2; // 'state 195' -> CharacterClassCharacter -> BACKSLASH
reducerStates[80663] = 2; // 'state 195' -> CharacterClassCharacter -> DOT
reducerStates[94295] = 2; // 'state 195' -> CharacterClassCharacter -> UNION
reducerStates[107927] = 2; // 'state 195' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[121559] = 2; // 'state 195' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[135191] = 2; // 'state 195' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[162455] = 2; // 'state 195' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[12567] = 2; // 'state 196' -> CharacterClassCharacter -> CHARACTER
reducerStates[26199] = 2; // 'state 196' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[39831] = 2; // 'state 196' -> CharacterClassCharacter -> BACKSLASH
reducerStates[80727] = 2; // 'state 196' -> CharacterClassCharacter -> DOT
reducerStates[94359] = 2; // 'state 196' -> CharacterClassCharacter -> UNION
reducerStates[107991] = 2; // 'state 196' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[121623] = 2; // 'state 196' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[135255] = 2; // 'state 196' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[162519] = 2; // 'state 196' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[12759] = 2; // 'state 199' -> CharacterClassCharacter -> CHARACTER
reducerStates[26391] = 2; // 'state 199' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[40023] = 2; // 'state 199' -> CharacterClassCharacter -> BACKSLASH
reducerStates[80919] = 2; // 'state 199' -> CharacterClassCharacter -> DOT
reducerStates[94551] = 2; // 'state 199' -> CharacterClassCharacter -> UNION
reducerStates[108183] = 2; // 'state 199' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[121815] = 2; // 'state 199' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[135447] = 2; // 'state 199' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[162711] = 2; // 'state 199' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[12823] = 2; // 'state 200' -> CharacterClassCharacter -> CHARACTER
reducerStates[26455] = 2; // 'state 200' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[40087] = 2; // 'state 200' -> CharacterClassCharacter -> BACKSLASH
reducerStates[80983] = 2; // 'state 200' -> CharacterClassCharacter -> DOT
reducerStates[94615] = 2; // 'state 200' -> CharacterClassCharacter -> UNION
reducerStates[108247] = 2; // 'state 200' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[121879] = 2; // 'state 200' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[135511] = 2; // 'state 200' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[162775] = 2; // 'state 200' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[12887] = 2; // 'state 201' -> CharacterClassCharacter -> CHARACTER
reducerStates[26519] = 2; // 'state 201' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[40151] = 2; // 'state 201' -> CharacterClassCharacter -> BACKSLASH
reducerStates[81047] = 2; // 'state 201' -> CharacterClassCharacter -> DOT
reducerStates[94679] = 2; // 'state 201' -> CharacterClassCharacter -> UNION
reducerStates[108311] = 2; // 'state 201' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[121943] = 2; // 'state 201' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[135575] = 2; // 'state 201' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[162839] = 2; // 'state 201' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[12951] = 2; // 'state 202' -> CharacterClassCharacter -> CHARACTER
reducerStates[26583] = 2; // 'state 202' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[40215] = 2; // 'state 202' -> CharacterClassCharacter -> BACKSLASH
reducerStates[81111] = 2; // 'state 202' -> CharacterClassCharacter -> DOT
reducerStates[94743] = 2; // 'state 202' -> CharacterClassCharacter -> UNION
reducerStates[108375] = 2; // 'state 202' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[122007] = 2; // 'state 202' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[135639] = 2; // 'state 202' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[162903] = 2; // 'state 202' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[13015] = 2; // 'state 203' -> CharacterClassCharacter -> CHARACTER
reducerStates[26647] = 2; // 'state 203' -> CharacterClassCharacter -> CONTROL_CHARACTER
reducerStates[40279] = 2; // 'state 203' -> CharacterClassCharacter -> BACKSLASH
reducerStates[81175] = 2; // 'state 203' -> CharacterClassCharacter -> DOT
reducerStates[94807] = 2; // 'state 203' -> CharacterClassCharacter -> UNION
reducerStates[108439] = 2; // 'state 203' -> CharacterClassCharacter -> PAREN_OPEN
reducerStates[122071] = 2; // 'state 203' -> CharacterClassCharacter -> PAREN_CLOSE
reducerStates[135703] = 2; // 'state 203' -> CharacterClassCharacter -> QUANTIFIER
reducerStates[162967] = 2; // 'state 203' -> CharacterClassCharacter -> BRACKET_CLOSE
reducerStates[13080] = 3; // 'state 204' -> CharacterClassRange -> CHARACTER
reducerStates[26712] = 3; // 'state 204' -> CharacterClassRange -> CONTROL_CHARACTER
reducerStates[40344] = 3; // 'state 204' -> CharacterClassRange -> BACKSLASH
reducerStates[81240] = 3; // 'state 204' -> CharacterClassRange -> DOT
reducerStates[94872] = 3; // 'state 204' -> CharacterClassRange -> UNION
reducerStates[108504] = 3; // 'state 204' -> CharacterClassRange -> PAREN_OPEN
reducerStates[122136] = 3; // 'state 204' -> CharacterClassRange -> PAREN_CLOSE
reducerStates[135768] = 3; // 'state 204' -> CharacterClassRange -> QUANTIFIER
reducerStates[163032] = 3; // 'state 204' -> CharacterClassRange -> BRACKET_CLOSE
reducerStates[13141] = 4; // 'state 205' -> CharacterClass -> CHARACTER
reducerStates[26773] = 4; // 'state 205' -> CharacterClass -> CONTROL_CHARACTER
reducerStates[40405] = 4; // 'state 205' -> CharacterClass -> BACKSLASH
reducerStates[54037] = 4; // 'state 205' -> CharacterClass -> CARET
reducerStates[67669] = 4; // 'state 205' -> CharacterClass -> DASH
reducerStates[94933] = 4; // 'state 205' -> CharacterClass -> UNION
reducerStates[108565] = 4; // 'state 205' -> CharacterClass -> PAREN_OPEN
reducerStates[122197] = 4; // 'state 205' -> CharacterClass -> PAREN_CLOSE
reducerStates[135829] = 4; // 'state 205' -> CharacterClass -> QUANTIFIER
reducerStates[149461] = 4; // 'state 205' -> CharacterClass -> BRACKET_OPEN
reducerStates[176725] = 4; // 'state 205' -> CharacterClass -> @par-gen.EOF
reducerStates[13208] = 3; // 'state 206' -> CharacterClassRange -> CHARACTER
reducerStates[26840] = 3; // 'state 206' -> CharacterClassRange -> CONTROL_CHARACTER
reducerStates[40472] = 3; // 'state 206' -> CharacterClassRange -> BACKSLASH
reducerStates[81368] = 3; // 'state 206' -> CharacterClassRange -> DOT
reducerStates[95000] = 3; // 'state 206' -> CharacterClassRange -> UNION
reducerStates[108632] = 3; // 'state 206' -> CharacterClassRange -> PAREN_OPEN
reducerStates[122264] = 3; // 'state 206' -> CharacterClassRange -> PAREN_CLOSE
reducerStates[135896] = 3; // 'state 206' -> CharacterClassRange -> QUANTIFIER
reducerStates[163160] = 3; // 'state 206' -> CharacterClassRange -> BRACKET_CLOSE
reducerStates[13269] = 4; // 'state 207' -> CharacterClass -> CHARACTER
reducerStates[26901] = 4; // 'state 207' -> CharacterClass -> CONTROL_CHARACTER
reducerStates[40533] = 4; // 'state 207' -> CharacterClass -> BACKSLASH
reducerStates[54165] = 4; // 'state 207' -> CharacterClass -> CARET
reducerStates[67797] = 4; // 'state 207' -> CharacterClass -> DASH
reducerStates[95061] = 4; // 'state 207' -> CharacterClass -> UNION
reducerStates[108693] = 4; // 'state 207' -> CharacterClass -> PAREN_OPEN
reducerStates[122325] = 4; // 'state 207' -> CharacterClass -> PAREN_CLOSE
reducerStates[135957] = 4; // 'state 207' -> CharacterClass -> QUANTIFIER
reducerStates[149589] = 4; // 'state 207' -> CharacterClass -> BRACKET_OPEN
reducerStates[176853] = 4; // 'state 207' -> CharacterClass -> @par-gen.EOF
reducerStates[13336] = 3; // 'state 208' -> CharacterClassRange -> CHARACTER
reducerStates[26968] = 3; // 'state 208' -> CharacterClassRange -> CONTROL_CHARACTER
reducerStates[40600] = 3; // 'state 208' -> CharacterClassRange -> BACKSLASH
reducerStates[81496] = 3; // 'state 208' -> CharacterClassRange -> DOT
reducerStates[95128] = 3; // 'state 208' -> CharacterClassRange -> UNION
reducerStates[108760] = 3; // 'state 208' -> CharacterClassRange -> PAREN_OPEN
reducerStates[122392] = 3; // 'state 208' -> CharacterClassRange -> PAREN_CLOSE
reducerStates[136024] = 3; // 'state 208' -> CharacterClassRange -> QUANTIFIER
reducerStates[163288] = 3; // 'state 208' -> CharacterClassRange -> BRACKET_CLOSE
reducerStates[13397] = 4; // 'state 209' -> CharacterClass -> CHARACTER
reducerStates[27029] = 4; // 'state 209' -> CharacterClass -> CONTROL_CHARACTER
reducerStates[40661] = 4; // 'state 209' -> CharacterClass -> BACKSLASH
reducerStates[54293] = 4; // 'state 209' -> CharacterClass -> CARET
reducerStates[67925] = 4; // 'state 209' -> CharacterClass -> DASH
reducerStates[95189] = 4; // 'state 209' -> CharacterClass -> UNION
reducerStates[108821] = 4; // 'state 209' -> CharacterClass -> PAREN_OPEN
reducerStates[122453] = 4; // 'state 209' -> CharacterClass -> PAREN_CLOSE
reducerStates[136085] = 4; // 'state 209' -> CharacterClass -> QUANTIFIER
reducerStates[149717] = 4; // 'state 209' -> CharacterClass -> BRACKET_OPEN
reducerStates[176981] = 4; // 'state 209' -> CharacterClass -> @par-gen.EOF
reducerStates[13464] = 3; // 'state 210' -> CharacterClassRange -> CHARACTER
reducerStates[27096] = 3; // 'state 210' -> CharacterClassRange -> CONTROL_CHARACTER
reducerStates[40728] = 3; // 'state 210' -> CharacterClassRange -> BACKSLASH
reducerStates[81624] = 3; // 'state 210' -> CharacterClassRange -> DOT
reducerStates[95256] = 3; // 'state 210' -> CharacterClassRange -> UNION
reducerStates[108888] = 3; // 'state 210' -> CharacterClassRange -> PAREN_OPEN
reducerStates[122520] = 3; // 'state 210' -> CharacterClassRange -> PAREN_CLOSE
reducerStates[136152] = 3; // 'state 210' -> CharacterClassRange -> QUANTIFIER
reducerStates[163416] = 3; // 'state 210' -> CharacterClassRange -> BRACKET_CLOSE
reducerStates[13525] = 4; // 'state 211' -> CharacterClass -> CHARACTER
reducerStates[27157] = 4; // 'state 211' -> CharacterClass -> CONTROL_CHARACTER
reducerStates[40789] = 4; // 'state 211' -> CharacterClass -> BACKSLASH
reducerStates[54421] = 4; // 'state 211' -> CharacterClass -> CARET
reducerStates[68053] = 4; // 'state 211' -> CharacterClass -> DASH
reducerStates[95317] = 4; // 'state 211' -> CharacterClass -> UNION
reducerStates[108949] = 4; // 'state 211' -> CharacterClass -> PAREN_OPEN
reducerStates[122581] = 4; // 'state 211' -> CharacterClass -> PAREN_CLOSE
reducerStates[136213] = 4; // 'state 211' -> CharacterClass -> QUANTIFIER
reducerStates[149845] = 4; // 'state 211' -> CharacterClass -> BRACKET_OPEN
reducerStates[177109] = 4; // 'state 211' -> CharacterClass -> @par-gen.EOF
reducerStates[13592] = 3; // 'state 212' -> CharacterClassRange -> CHARACTER
reducerStates[27224] = 3; // 'state 212' -> CharacterClassRange -> CONTROL_CHARACTER
reducerStates[40856] = 3; // 'state 212' -> CharacterClassRange -> BACKSLASH
reducerStates[81752] = 3; // 'state 212' -> CharacterClassRange -> DOT
reducerStates[95384] = 3; // 'state 212' -> CharacterClassRange -> UNION
reducerStates[109016] = 3; // 'state 212' -> CharacterClassRange -> PAREN_OPEN
reducerStates[122648] = 3; // 'state 212' -> CharacterClassRange -> PAREN_CLOSE
reducerStates[136280] = 3; // 'state 212' -> CharacterClassRange -> QUANTIFIER
reducerStates[163544] = 3; // 'state 212' -> CharacterClassRange -> BRACKET_CLOSE

const parserSymbols = [
  "CHARACTER", // 0
  "CONTROL_CHARACTER", // 1
  "BACKSLASH", // 2
  "CARET", // 3
  "DASH", // 4
  "DOT", // 5
  "UNION", // 6
  "PAREN_OPEN", // 7
  "PAREN_CLOSE", // 8
  "QUANTIFIER", // 9
  "BRACKET_OPEN", // 10
  "BRACKET_CLOSE", // 11
  "@par-gen.EOF", // 12
  "@par-gen.ERROR", // 13
  "S", // 14
  "RegExp", // 15
  "Expression", // 16
  "Union", // 17
  "Sequence", // 18
  "Atom", // 19
  "Group", // 20
  "CharacterClass", // 21
  "CharacterClassCharacters", // 22
  "CharacterClassCharacter", // 23
  "CharacterClassRange", // 24
  "Character", // 25
  "EscapedCharacter", // 26
  "undefined", // 27
  "undefined", // 28
  "undefined", // 29
  "undefined", // 30
  "undefined", // 31
  "undefined", // 32
  "undefined", // 33
  "undefined", // 34
  "undefined", // 35
  "undefined", // 36
  "undefined", // 37
  "undefined", // 38
  "undefined", // 39
  "undefined", // 40
  "undefined", // 41
  "undefined", // 42
  "undefined", // 43
  "undefined", // 44
  "undefined", // 45
  "undefined", // 46
  "undefined", // 47
  "undefined", // 48
  "undefined", // 49
  "undefined", // 50
  "undefined", // 51
  "undefined", // 52
  "undefined", // 53
  "undefined", // 54
  "undefined", // 55
  "undefined", // 56
  "undefined", // 57
  "undefined", // 58
  "undefined", // 59
  "undefined", // 60
  "undefined", // 61
  "undefined", // 62
  "undefined", // 63
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
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 14'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 15'
  {
    op: 2, // done
    state: undefined,
    symbol: undefined,
  },
  // 'action 16'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 15, // RegExp
  },
  // 'action 17'
  {
    op: 0, // shift
    state: 16, // 'state 16'
    symbol: undefined,
  },
  // 'action 18'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Expression
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
    op: 0, // shift
    state: 23, // 'state 23'
    symbol: undefined,
  },
  // 'action 26'
  {
    op: 0, // shift
    state: 24, // 'state 24'
    symbol: undefined,
  },
  // 'action 27'
  {
    op: 0, // shift
    state: 25, // 'state 25'
    symbol: undefined,
  },
  // 'action 28'
  {
    op: 0, // shift
    state: 26, // 'state 26'
    symbol: undefined,
  },
  // 'action 29'
  {
    op: 0, // shift
    state: 27, // 'state 27'
    symbol: undefined,
  },
  // 'action 30'
  {
    op: 0, // shift
    state: 28, // 'state 28'
    symbol: undefined,
  },
  // 'action 31'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Expression
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
    op: 0, // shift
    state: 32, // 'state 32'
    symbol: undefined,
  },
  // 'action 36'
  {
    op: 0, // shift
    state: 33, // 'state 33'
    symbol: undefined,
  },
  // 'action 37'
  {
    op: 0, // shift
    state: 34, // 'state 34'
    symbol: undefined,
  },
  // 'action 38'
  {
    op: 0, // shift
    state: 35, // 'state 35'
    symbol: undefined,
  },
  // 'action 39'
  {
    op: 0, // shift
    state: 36, // 'state 36'
    symbol: undefined,
  },
  // 'action 40'
  {
    op: 0, // shift
    state: 37, // 'state 37'
    symbol: undefined,
  },
  // 'action 41'
  {
    op: 0, // shift
    state: 38, // 'state 38'
    symbol: undefined,
  },
  // 'action 42'
  {
    op: 0, // shift
    state: 39, // 'state 39'
    symbol: undefined,
  },
  // 'action 43'
  {
    op: 0, // shift
    state: 40, // 'state 40'
    symbol: undefined,
  },
  // 'action 44'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 16, // Expression
  },
  // 'action 45'
  {
    op: 0, // shift
    state: 41, // 'state 41'
    symbol: undefined,
  },
  // 'action 46'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 47'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 48'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 49'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 50'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 51'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 52'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 53'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 54'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 55'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 56'
  {
    op: 0, // shift
    state: 42, // 'state 42'
    symbol: undefined,
  },
  // 'action 57'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 58'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 59'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 60'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 61'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 62'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 63'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 64'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 65'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 66'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 67'
  {
    op: 0, // shift
    state: 43, // 'state 43'
    symbol: undefined,
  },
  // 'action 68'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 69'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 70'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 71'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 72'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 73'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 74'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 75'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 76'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 77'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 78'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 79'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 80'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 81'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 82'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 83'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 84'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 85'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 86'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 87'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 88'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 89'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 90'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 91'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 92'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 93'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 94'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 95'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 96'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 97'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 98'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 99'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 100'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 101'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 102'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 103'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 104'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 105'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 106'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 107'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 108'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 109'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 110'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 111'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 112'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 113'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 114'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 115'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 116'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 117'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 118'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 119'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 120'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 121'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 122'
  {
    op: 0, // shift
    state: 44, // 'state 44'
    symbol: undefined,
  },
  // 'action 123'
  {
    op: 0, // shift
    state: 45, // 'state 45'
    symbol: undefined,
  },
  // 'action 124'
  {
    op: 0, // shift
    state: 46, // 'state 46'
    symbol: undefined,
  },
  // 'action 125'
  {
    op: 0, // shift
    state: 47, // 'state 47'
    symbol: undefined,
  },
  // 'action 126'
  {
    op: 0, // shift
    state: 48, // 'state 48'
    symbol: undefined,
  },
  // 'action 127'
  {
    op: 0, // shift
    state: 49, // 'state 49'
    symbol: undefined,
  },
  // 'action 128'
  {
    op: 0, // shift
    state: 50, // 'state 50'
    symbol: undefined,
  },
  // 'action 129'
  {
    op: 0, // shift
    state: 51, // 'state 51'
    symbol: undefined,
  },
  // 'action 130'
  {
    op: 0, // shift
    state: 52, // 'state 52'
    symbol: undefined,
  },
  // 'action 131'
  {
    op: 0, // shift
    state: 53, // 'state 53'
    symbol: undefined,
  },
  // 'action 132'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 133'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 134'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 135'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 136'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 137'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 138'
  {
    op: 0, // shift
    state: 54, // 'state 54'
    symbol: undefined,
  },
  // 'action 139'
  {
    op: 0, // shift
    state: 55, // 'state 55'
    symbol: undefined,
  },
  // 'action 140'
  {
    op: 0, // shift
    state: 56, // 'state 56'
    symbol: undefined,
  },
  // 'action 141'
  {
    op: 0, // shift
    state: 57, // 'state 57'
    symbol: undefined,
  },
  // 'action 142'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 143'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 144'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 145'
  {
    op: 0, // shift
    state: 58, // 'state 58'
    symbol: undefined,
  },
  // 'action 146'
  {
    op: 0, // shift
    state: 59, // 'state 59'
    symbol: undefined,
  },
  // 'action 147'
  {
    op: 0, // shift
    state: 60, // 'state 60'
    symbol: undefined,
  },
  // 'action 148'
  {
    op: 0, // shift
    state: 61, // 'state 61'
    symbol: undefined,
  },
  // 'action 149'
  {
    op: 0, // shift
    state: 62, // 'state 62'
    symbol: undefined,
  },
  // 'action 150'
  {
    op: 0, // shift
    state: 63, // 'state 63'
    symbol: undefined,
  },
  // 'action 151'
  {
    op: 0, // shift
    state: 64, // 'state 64'
    symbol: undefined,
  },
  // 'action 152'
  {
    op: 0, // shift
    state: 65, // 'state 65'
    symbol: undefined,
  },
  // 'action 153'
  {
    op: 0, // shift
    state: 66, // 'state 66'
    symbol: undefined,
  },
  // 'action 154'
  {
    op: 0, // shift
    state: 67, // 'state 67'
    symbol: undefined,
  },
  // 'action 155'
  {
    op: 0, // shift
    state: 68, // 'state 68'
    symbol: undefined,
  },
  // 'action 156'
  {
    op: 0, // shift
    state: 69, // 'state 69'
    symbol: undefined,
  },
  // 'action 157'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 158'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 159'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 160'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 161'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 162'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 163'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 164'
  {
    op: 0, // shift
    state: 70, // 'state 70'
    symbol: undefined,
  },
  // 'action 165'
  {
    op: 0, // shift
    state: 71, // 'state 71'
    symbol: undefined,
  },
  // 'action 166'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 167'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 168'
  {
    op: 0, // shift
    state: 15, // 'state 15'
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
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 174'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 175'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 176'
  {
    op: 0, // shift
    state: 72, // 'state 72'
    symbol: undefined,
  },
  // 'action 177'
  {
    op: 0, // shift
    state: 73, // 'state 73'
    symbol: undefined,
  },
  // 'action 178'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 179'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 180'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 181'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // Sequence
  },
  // 'action 182'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // Sequence
  },
  // 'action 183'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // Sequence
  },
  // 'action 184'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // Sequence
  },
  // 'action 185'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // Sequence
  },
  // 'action 186'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // Sequence
  },
  // 'action 187'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // Sequence
  },
  // 'action 188'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // Sequence
  },
  // 'action 189'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // Sequence
  },
  // 'action 190'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // Sequence
  },
  // 'action 191'
  {
    op: 0, // shift
    state: 74, // 'state 74'
    symbol: undefined,
  },
  // 'action 192'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 193'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 194'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 195'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 196'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 197'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 198'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 199'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 200'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 201'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 202'
  {
    op: 0, // shift
    state: 75, // 'state 75'
    symbol: undefined,
  },
  // 'action 203'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 204'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 205'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 206'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 207'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 208'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 209'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 210'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 211'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 212'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 213'
  {
    op: 0, // shift
    state: 76, // 'state 76'
    symbol: undefined,
  },
  // 'action 214'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 215'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 216'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 217'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 218'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 219'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 220'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 221'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 222'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 223'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 224'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 225'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 226'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 227'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 228'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 229'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 230'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 231'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 232'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 233'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 234'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 235'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 236'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 237'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 238'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 239'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 240'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 241'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 242'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 243'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 244'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 245'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 246'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 247'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 248'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 249'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 250'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 251'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 252'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 253'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 254'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 255'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 256'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 257'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 258'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 259'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 260'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 261'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 262'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 263'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 264'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 265'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 266'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 267'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 268'
  {
    op: 0, // shift
    state: 77, // 'state 77'
    symbol: undefined,
  },
  // 'action 269'
  {
    op: 0, // shift
    state: 78, // 'state 78'
    symbol: undefined,
  },
  // 'action 270'
  {
    op: 0, // shift
    state: 79, // 'state 79'
    symbol: undefined,
  },
  // 'action 271'
  {
    op: 0, // shift
    state: 80, // 'state 80'
    symbol: undefined,
  },
  // 'action 272'
  {
    op: 0, // shift
    state: 81, // 'state 81'
    symbol: undefined,
  },
  // 'action 273'
  {
    op: 0, // shift
    state: 82, // 'state 82'
    symbol: undefined,
  },
  // 'action 274'
  {
    op: 0, // shift
    state: 83, // 'state 83'
    symbol: undefined,
  },
  // 'action 275'
  {
    op: 0, // shift
    state: 84, // 'state 84'
    symbol: undefined,
  },
  // 'action 276'
  {
    op: 0, // shift
    state: 85, // 'state 85'
    symbol: undefined,
  },
  // 'action 277'
  {
    op: 0, // shift
    state: 86, // 'state 86'
    symbol: undefined,
  },
  // 'action 278'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 279'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 280'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 281'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 282'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 283'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 284'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 285'
  {
    op: 0, // shift
    state: 87, // 'state 87'
    symbol: undefined,
  },
  // 'action 286'
  {
    op: 0, // shift
    state: 88, // 'state 88'
    symbol: undefined,
  },
  // 'action 287'
  {
    op: 0, // shift
    state: 89, // 'state 89'
    symbol: undefined,
  },
  // 'action 288'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 289'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 290'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 291'
  {
    op: 0, // shift
    state: 90, // 'state 90'
    symbol: undefined,
  },
  // 'action 292'
  {
    op: 0, // shift
    state: 91, // 'state 91'
    symbol: undefined,
  },
  // 'action 293'
  {
    op: 0, // shift
    state: 92, // 'state 92'
    symbol: undefined,
  },
  // 'action 294'
  {
    op: 0, // shift
    state: 93, // 'state 93'
    symbol: undefined,
  },
  // 'action 295'
  {
    op: 0, // shift
    state: 94, // 'state 94'
    symbol: undefined,
  },
  // 'action 296'
  {
    op: 0, // shift
    state: 95, // 'state 95'
    symbol: undefined,
  },
  // 'action 297'
  {
    op: 0, // shift
    state: 96, // 'state 96'
    symbol: undefined,
  },
  // 'action 298'
  {
    op: 0, // shift
    state: 97, // 'state 97'
    symbol: undefined,
  },
  // 'action 299'
  {
    op: 0, // shift
    state: 98, // 'state 98'
    symbol: undefined,
  },
  // 'action 300'
  {
    op: 0, // shift
    state: 99, // 'state 99'
    symbol: undefined,
  },
  // 'action 301'
  {
    op: 0, // shift
    state: 100, // 'state 100'
    symbol: undefined,
  },
  // 'action 302'
  {
    op: 0, // shift
    state: 101, // 'state 101'
    symbol: undefined,
  },
  // 'action 303'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 304'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 305'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 306'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 307'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 308'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 309'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 310'
  {
    op: 0, // shift
    state: 102, // 'state 102'
    symbol: undefined,
  },
  // 'action 311'
  {
    op: 0, // shift
    state: 103, // 'state 103'
    symbol: undefined,
  },
  // 'action 312'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 313'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 314'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 315'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // Sequence
  },
  // 'action 316'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // Sequence
  },
  // 'action 317'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // Sequence
  },
  // 'action 318'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // Sequence
  },
  // 'action 319'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // Sequence
  },
  // 'action 320'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // Sequence
  },
  // 'action 321'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // Sequence
  },
  // 'action 322'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // Sequence
  },
  // 'action 323'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // Sequence
  },
  // 'action 324'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 18, // Sequence
  },
  // 'action 325'
  {
    op: 0, // shift
    state: 104, // 'state 104'
    symbol: undefined,
  },
  // 'action 326'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 327'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 328'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 329'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 330'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 331'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 332'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 333'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 334'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 335'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 336'
  {
    op: 0, // shift
    state: 105, // 'state 105'
    symbol: undefined,
  },
  // 'action 337'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 338'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 339'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 340'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 341'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 342'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 343'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 344'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 345'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 346'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 347'
  {
    op: 0, // shift
    state: 106, // 'state 106'
    symbol: undefined,
  },
  // 'action 348'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 349'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 350'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 351'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 352'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 353'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 354'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 355'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 356'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 357'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 358'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 359'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 360'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 361'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 362'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 363'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 364'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 365'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 366'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 367'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 368'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 369'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 370'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 371'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 372'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 373'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 374'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 375'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 376'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 377'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 378'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 379'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 380'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 381'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 382'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 383'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 384'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 385'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 386'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 387'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 388'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 389'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 390'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 391'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 392'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 393'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 394'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 395'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 396'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 397'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 398'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 399'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 400'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 401'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 402'
  {
    op: 0, // shift
    state: 107, // 'state 107'
    symbol: undefined,
  },
  // 'action 403'
  {
    op: 0, // shift
    state: 108, // 'state 108'
    symbol: undefined,
  },
  // 'action 404'
  {
    op: 0, // shift
    state: 109, // 'state 109'
    symbol: undefined,
  },
  // 'action 405'
  {
    op: 0, // shift
    state: 110, // 'state 110'
    symbol: undefined,
  },
  // 'action 406'
  {
    op: 0, // shift
    state: 111, // 'state 111'
    symbol: undefined,
  },
  // 'action 407'
  {
    op: 0, // shift
    state: 112, // 'state 112'
    symbol: undefined,
  },
  // 'action 408'
  {
    op: 0, // shift
    state: 113, // 'state 113'
    symbol: undefined,
  },
  // 'action 409'
  {
    op: 0, // shift
    state: 114, // 'state 114'
    symbol: undefined,
  },
  // 'action 410'
  {
    op: 0, // shift
    state: 115, // 'state 115'
    symbol: undefined,
  },
  // 'action 411'
  {
    op: 0, // shift
    state: 116, // 'state 116'
    symbol: undefined,
  },
  // 'action 412'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 413'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 414'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 415'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 416'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 417'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 418'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 419'
  {
    op: 0, // shift
    state: 117, // 'state 117'
    symbol: undefined,
  },
  // 'action 420'
  {
    op: 0, // shift
    state: 118, // 'state 118'
    symbol: undefined,
  },
  // 'action 421'
  {
    op: 0, // shift
    state: 119, // 'state 119'
    symbol: undefined,
  },
  // 'action 422'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 423'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 424'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 425'
  {
    op: 0, // shift
    state: 120, // 'state 120'
    symbol: undefined,
  },
  // 'action 426'
  {
    op: 0, // shift
    state: 121, // 'state 121'
    symbol: undefined,
  },
  // 'action 427'
  {
    op: 0, // shift
    state: 122, // 'state 122'
    symbol: undefined,
  },
  // 'action 428'
  {
    op: 0, // shift
    state: 123, // 'state 123'
    symbol: undefined,
  },
  // 'action 429'
  {
    op: 0, // shift
    state: 124, // 'state 124'
    symbol: undefined,
  },
  // 'action 430'
  {
    op: 0, // shift
    state: 125, // 'state 125'
    symbol: undefined,
  },
  // 'action 431'
  {
    op: 0, // shift
    state: 126, // 'state 126'
    symbol: undefined,
  },
  // 'action 432'
  {
    op: 0, // shift
    state: 127, // 'state 127'
    symbol: undefined,
  },
  // 'action 433'
  {
    op: 0, // shift
    state: 128, // 'state 128'
    symbol: undefined,
  },
  // 'action 434'
  {
    op: 0, // shift
    state: 129, // 'state 129'
    symbol: undefined,
  },
  // 'action 435'
  {
    op: 0, // shift
    state: 130, // 'state 130'
    symbol: undefined,
  },
  // 'action 436'
  {
    op: 0, // shift
    state: 131, // 'state 131'
    symbol: undefined,
  },
  // 'action 437'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 438'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 439'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 440'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 441'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 442'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 443'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 444'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 445'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 446'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 447'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 448'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 449'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 450'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 451'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 452'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 453'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 454'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 455'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 456'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 457'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 458'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 459'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 460'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 461'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 462'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 463'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 464'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 465'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 466'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 467'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 468'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 469'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 470'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 471'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 472'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 473'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 474'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 475'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 476'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 477'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 478'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 479'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 480'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 481'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 482'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 483'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 484'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 485'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 486'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 487'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 488'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 489'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 490'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 491'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 492'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 493'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 494'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 495'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 496'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 497'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 498'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 499'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 500'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 501'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 502'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 503'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 504'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 505'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 506'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 507'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 508'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 509'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 510'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 511'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 512'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 513'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 514'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 515'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 516'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 517'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 518'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 519'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 520'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 521'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 522'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 523'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 524'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 525'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 526'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 527'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 528'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 529'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 530'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 531'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 532'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 533'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 534'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 535'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 536'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 537'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 538'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 539'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 540'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 541'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 542'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 543'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 544'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 545'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 546'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 547'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 548'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 549'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 550'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 551'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 552'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 553'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 554'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 555'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 556'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 557'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 558'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 559'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 560'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 561'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 562'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 563'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 564'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 565'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 566'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 567'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 568'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 569'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 570'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 571'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 572'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 573'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 574'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 575'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 576'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 577'
  {
    op: 0, // shift
    state: 16, // 'state 16'
    symbol: undefined,
  },
  // 'action 578'
  {
    op: 0, // shift
    state: 132, // 'state 132'
    symbol: undefined,
  },
  // 'action 579'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 580'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 581'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 582'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 583'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 584'
  {
    op: 0, // shift
    state: 22, // 'state 22'
    symbol: undefined,
  },
  // 'action 585'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 586'
  {
    op: 0, // shift
    state: 133, // 'state 133'
    symbol: undefined,
  },
  // 'action 587'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 588'
  {
    op: 0, // shift
    state: 25, // 'state 25'
    symbol: undefined,
  },
  // 'action 589'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 590'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 591'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 592'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 593'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 594'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 595'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 596'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 597'
  {
    op: 0, // shift
    state: 34, // 'state 34'
    symbol: undefined,
  },
  // 'action 598'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 599'
  {
    op: 0, // shift
    state: 134, // 'state 134'
    symbol: undefined,
  },
  // 'action 600'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 601'
  {
    op: 0, // shift
    state: 37, // 'state 37'
    symbol: undefined,
  },
  // 'action 602'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 603'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 604'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 605'
  {
    op: 0, // shift
    state: 135, // 'state 135'
    symbol: undefined,
  },
  // 'action 606'
  {
    op: 0, // shift
    state: 136, // 'state 136'
    symbol: undefined,
  },
  // 'action 607'
  {
    op: 0, // shift
    state: 137, // 'state 137'
    symbol: undefined,
  },
  // 'action 608'
  {
    op: 0, // shift
    state: 138, // 'state 138'
    symbol: undefined,
  },
  // 'action 609'
  {
    op: 0, // shift
    state: 139, // 'state 139'
    symbol: undefined,
  },
  // 'action 610'
  {
    op: 0, // shift
    state: 140, // 'state 140'
    symbol: undefined,
  },
  // 'action 611'
  {
    op: 0, // shift
    state: 141, // 'state 141'
    symbol: undefined,
  },
  // 'action 612'
  {
    op: 0, // shift
    state: 142, // 'state 142'
    symbol: undefined,
  },
  // 'action 613'
  {
    op: 0, // shift
    state: 143, // 'state 143'
    symbol: undefined,
  },
  // 'action 614'
  {
    op: 0, // shift
    state: 144, // 'state 144'
    symbol: undefined,
  },
  // 'action 615'
  {
    op: 0, // shift
    state: 145, // 'state 145'
    symbol: undefined,
  },
  // 'action 616'
  {
    op: 0, // shift
    state: 146, // 'state 146'
    symbol: undefined,
  },
  // 'action 617'
  {
    op: 0, // shift
    state: 147, // 'state 147'
    symbol: undefined,
  },
  // 'action 618'
  {
    op: 0, // shift
    state: 148, // 'state 148'
    symbol: undefined,
  },
  // 'action 619'
  {
    op: 0, // shift
    state: 149, // 'state 149'
    symbol: undefined,
  },
  // 'action 620'
  {
    op: 0, // shift
    state: 150, // 'state 150'
    symbol: undefined,
  },
  // 'action 621'
  {
    op: 0, // shift
    state: 151, // 'state 151'
    symbol: undefined,
  },
  // 'action 622'
  {
    op: 0, // shift
    state: 152, // 'state 152'
    symbol: undefined,
  },
  // 'action 623'
  {
    op: 0, // shift
    state: 153, // 'state 153'
    symbol: undefined,
  },
  // 'action 624'
  {
    op: 0, // shift
    state: 154, // 'state 154'
    symbol: undefined,
  },
  // 'action 625'
  {
    op: 0, // shift
    state: 155, // 'state 155'
    symbol: undefined,
  },
  // 'action 626'
  {
    op: 0, // shift
    state: 156, // 'state 156'
    symbol: undefined,
  },
  // 'action 627'
  {
    op: 0, // shift
    state: 157, // 'state 157'
    symbol: undefined,
  },
  // 'action 628'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 629'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 630'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 631'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 632'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 633'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 634'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 635'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 636'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 637'
  {
    op: 0, // shift
    state: 158, // 'state 158'
    symbol: undefined,
  },
  // 'action 638'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 639'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 640'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 641'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 642'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 643'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 644'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 645'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 646'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 647'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 648'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 649'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 650'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 651'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 652'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 653'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 654'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 655'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 656'
  {
    op: 0, // shift
    state: 159, // 'state 159'
    symbol: undefined,
  },
  // 'action 657'
  {
    op: 0, // shift
    state: 160, // 'state 160'
    symbol: undefined,
  },
  // 'action 658'
  {
    op: 0, // shift
    state: 161, // 'state 161'
    symbol: undefined,
  },
  // 'action 659'
  {
    op: 0, // shift
    state: 162, // 'state 162'
    symbol: undefined,
  },
  // 'action 660'
  {
    op: 0, // shift
    state: 163, // 'state 163'
    symbol: undefined,
  },
  // 'action 661'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 662'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 663'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 664'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 665'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 666'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 667'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 668'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 669'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 670'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 671'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 672'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 673'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 674'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 675'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 676'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 677'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 678'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 679'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 680'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 681'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 682'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 683'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 684'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 685'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 686'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 687'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 688'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 689'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 690'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 691'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 692'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 693'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 694'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 695'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 696'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 697'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 698'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 699'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 700'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 701'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 702'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 703'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 704'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 705'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 706'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 707'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 708'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 709'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 710'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 711'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 712'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 713'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 714'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 715'
  {
    op: 0, // shift
    state: 58, // 'state 58'
    symbol: undefined,
  },
  // 'action 716'
  {
    op: 0, // shift
    state: 59, // 'state 59'
    symbol: undefined,
  },
  // 'action 717'
  {
    op: 0, // shift
    state: 60, // 'state 60'
    symbol: undefined,
  },
  // 'action 718'
  {
    op: 0, // shift
    state: 62, // 'state 62'
    symbol: undefined,
  },
  // 'action 719'
  {
    op: 0, // shift
    state: 63, // 'state 63'
    symbol: undefined,
  },
  // 'action 720'
  {
    op: 0, // shift
    state: 64, // 'state 64'
    symbol: undefined,
  },
  // 'action 721'
  {
    op: 0, // shift
    state: 65, // 'state 65'
    symbol: undefined,
  },
  // 'action 722'
  {
    op: 0, // shift
    state: 66, // 'state 66'
    symbol: undefined,
  },
  // 'action 723'
  {
    op: 0, // shift
    state: 164, // 'state 164'
    symbol: undefined,
  },
  // 'action 724'
  {
    op: 0, // shift
    state: 68, // 'state 68'
    symbol: undefined,
  },
  // 'action 725'
  {
    op: 0, // shift
    state: 69, // 'state 69'
    symbol: undefined,
  },
  // 'action 726'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 727'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 728'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 729'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 730'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 731'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 732'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 733'
  {
    op: 0, // shift
    state: 25, // 'state 25'
    symbol: undefined,
  },
  // 'action 734'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 735'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 736'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 737'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Union
  },
  // 'action 738'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Union
  },
  // 'action 739'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Union
  },
  // 'action 740'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 741'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 742'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 743'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 744'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 745'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 746'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 747'
  {
    op: 0, // shift
    state: 37, // 'state 37'
    symbol: undefined,
  },
  // 'action 748'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 749'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 750'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 751'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Union
  },
  // 'action 752'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Union
  },
  // 'action 753'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Union
  },
  // 'action 754'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 755'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 756'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 757'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 758'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 759'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 760'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 761'
  {
    op: 0, // shift
    state: 25, // 'state 25'
    symbol: undefined,
  },
  // 'action 762'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 763'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 764'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 765'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Union
  },
  // 'action 766'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Union
  },
  // 'action 767'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Union
  },
  // 'action 768'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 769'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 770'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 771'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 772'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 773'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 774'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 775'
  {
    op: 0, // shift
    state: 37, // 'state 37'
    symbol: undefined,
  },
  // 'action 776'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 777'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 778'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 779'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Union
  },
  // 'action 780'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Union
  },
  // 'action 781'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Union
  },
  // 'action 782'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 783'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 784'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 785'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 786'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 787'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 788'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 789'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 790'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 791'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 792'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 793'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 794'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 795'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 796'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 797'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 798'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 799'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 800'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 801'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 802'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 803'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 804'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 805'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 806'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 807'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 808'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 809'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 810'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 811'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 812'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 813'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 814'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 815'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 816'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 817'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 818'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 819'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 820'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 821'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 822'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 823'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 824'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 825'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 826'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 827'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 828'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 829'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 830'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 831'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 832'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 833'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 834'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 835'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 836'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 837'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 838'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 839'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 840'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 841'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 842'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 843'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 844'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 845'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 846'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 847'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 848'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 849'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 850'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 851'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 852'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 853'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 854'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 855'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 856'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 857'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 858'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 859'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 860'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 861'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 862'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 863'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 864'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 865'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 866'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 867'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 868'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 869'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 870'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 871'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 872'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 873'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 874'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 875'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 876'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 877'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 878'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 879'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 880'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 881'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 882'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 883'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 884'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 885'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 886'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 887'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 888'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 889'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 890'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 891'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 892'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 893'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 894'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 895'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 896'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 897'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 898'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 899'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 900'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 901'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 902'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 903'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 904'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 905'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 906'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 907'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 908'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 909'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 910'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 911'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 912'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 913'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 914'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 915'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 916'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 917'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 918'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 919'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 920'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 921'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 922'
  {
    op: 0, // shift
    state: 16, // 'state 16'
    symbol: undefined,
  },
  // 'action 923'
  {
    op: 0, // shift
    state: 165, // 'state 165'
    symbol: undefined,
  },
  // 'action 924'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 925'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 926'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 927'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 928'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 929'
  {
    op: 0, // shift
    state: 22, // 'state 22'
    symbol: undefined,
  },
  // 'action 930'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 931'
  {
    op: 0, // shift
    state: 166, // 'state 166'
    symbol: undefined,
  },
  // 'action 932'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 933'
  {
    op: 0, // shift
    state: 25, // 'state 25'
    symbol: undefined,
  },
  // 'action 934'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 935'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 936'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 937'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 938'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 939'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 940'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 941'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 942'
  {
    op: 0, // shift
    state: 34, // 'state 34'
    symbol: undefined,
  },
  // 'action 943'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 944'
  {
    op: 0, // shift
    state: 167, // 'state 167'
    symbol: undefined,
  },
  // 'action 945'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 946'
  {
    op: 0, // shift
    state: 37, // 'state 37'
    symbol: undefined,
  },
  // 'action 947'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 948'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 949'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 950'
  {
    op: 0, // shift
    state: 58, // 'state 58'
    symbol: undefined,
  },
  // 'action 951'
  {
    op: 0, // shift
    state: 59, // 'state 59'
    symbol: undefined,
  },
  // 'action 952'
  {
    op: 0, // shift
    state: 60, // 'state 60'
    symbol: undefined,
  },
  // 'action 953'
  {
    op: 0, // shift
    state: 62, // 'state 62'
    symbol: undefined,
  },
  // 'action 954'
  {
    op: 0, // shift
    state: 63, // 'state 63'
    symbol: undefined,
  },
  // 'action 955'
  {
    op: 0, // shift
    state: 64, // 'state 64'
    symbol: undefined,
  },
  // 'action 956'
  {
    op: 0, // shift
    state: 65, // 'state 65'
    symbol: undefined,
  },
  // 'action 957'
  {
    op: 0, // shift
    state: 66, // 'state 66'
    symbol: undefined,
  },
  // 'action 958'
  {
    op: 0, // shift
    state: 168, // 'state 168'
    symbol: undefined,
  },
  // 'action 959'
  {
    op: 0, // shift
    state: 169, // 'state 169'
    symbol: undefined,
  },
  // 'action 960'
  {
    op: 0, // shift
    state: 69, // 'state 69'
    symbol: undefined,
  },
  // 'action 961'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 962'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 963'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 964'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 965'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 966'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 967'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 968'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 969'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 970'
  {
    op: 0, // shift
    state: 170, // 'state 170'
    symbol: undefined,
  },
  // 'action 971'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 972'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 973'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 974'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 975'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 976'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 977'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 978'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 979'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 980'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 981'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 982'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 983'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 984'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 985'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 986'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 987'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 988'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 989'
  {
    op: 0, // shift
    state: 171, // 'state 171'
    symbol: undefined,
  },
  // 'action 990'
  {
    op: 0, // shift
    state: 172, // 'state 172'
    symbol: undefined,
  },
  // 'action 991'
  {
    op: 0, // shift
    state: 173, // 'state 173'
    symbol: undefined,
  },
  // 'action 992'
  {
    op: 0, // shift
    state: 174, // 'state 174'
    symbol: undefined,
  },
  // 'action 993'
  {
    op: 0, // shift
    state: 175, // 'state 175'
    symbol: undefined,
  },
  // 'action 994'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 995'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 996'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 997'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 998'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 999'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1000'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1001'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1002'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1003'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1004'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1005'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1006'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1007'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1008'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1009'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1010'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1011'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1012'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1013'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1014'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1015'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1016'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1017'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1018'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1019'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1020'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1021'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1022'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1023'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1024'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1025'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1026'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1027'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1028'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1029'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1030'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1031'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1032'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1033'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1034'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1035'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1036'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1037'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1038'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1039'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1040'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1041'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1042'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1043'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1044'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1045'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1046'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1047'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1048'
  {
    op: 0, // shift
    state: 58, // 'state 58'
    symbol: undefined,
  },
  // 'action 1049'
  {
    op: 0, // shift
    state: 59, // 'state 59'
    symbol: undefined,
  },
  // 'action 1050'
  {
    op: 0, // shift
    state: 60, // 'state 60'
    symbol: undefined,
  },
  // 'action 1051'
  {
    op: 0, // shift
    state: 62, // 'state 62'
    symbol: undefined,
  },
  // 'action 1052'
  {
    op: 0, // shift
    state: 63, // 'state 63'
    symbol: undefined,
  },
  // 'action 1053'
  {
    op: 0, // shift
    state: 64, // 'state 64'
    symbol: undefined,
  },
  // 'action 1054'
  {
    op: 0, // shift
    state: 65, // 'state 65'
    symbol: undefined,
  },
  // 'action 1055'
  {
    op: 0, // shift
    state: 66, // 'state 66'
    symbol: undefined,
  },
  // 'action 1056'
  {
    op: 0, // shift
    state: 176, // 'state 176'
    symbol: undefined,
  },
  // 'action 1057'
  {
    op: 0, // shift
    state: 68, // 'state 68'
    symbol: undefined,
  },
  // 'action 1058'
  {
    op: 0, // shift
    state: 69, // 'state 69'
    symbol: undefined,
  },
  // 'action 1059'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 1060'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 1061'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 1062'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 1063'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 1064'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 1065'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 1066'
  {
    op: 0, // shift
    state: 25, // 'state 25'
    symbol: undefined,
  },
  // 'action 1067'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 1068'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 1069'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 1070'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Union
  },
  // 'action 1071'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Union
  },
  // 'action 1072'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Union
  },
  // 'action 1073'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 1074'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 1075'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 1076'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 1077'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 1078'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 1079'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 1080'
  {
    op: 0, // shift
    state: 37, // 'state 37'
    symbol: undefined,
  },
  // 'action 1081'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 1082'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 1083'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 1084'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Union
  },
  // 'action 1085'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Union
  },
  // 'action 1086'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 17, // Union
  },
  // 'action 1087'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 1088'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 1089'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 1090'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 1091'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 1092'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 1093'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 1094'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 1095'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 1096'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 1097'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 1098'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 1099'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 1100'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 1101'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 1102'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 1103'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 1104'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 1105'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 1106'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 1107'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 1108'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 1109'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 1110'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 1111'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 1112'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 1113'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 1114'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 1115'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 1116'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 19, // Atom
  },
  // 'action 1117'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 1118'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 1119'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 1120'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 1121'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 1122'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 1123'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 1124'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 1125'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 1126'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 1127'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 25, // Character
  },
  // 'action 1128'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1129'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1130'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1131'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1132'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1133'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1134'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1135'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1136'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1137'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1138'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1139'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1140'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1141'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1142'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1143'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1144'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1145'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1146'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1147'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1148'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1149'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1150'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1151'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1152'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1153'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1154'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1155'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1156'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1157'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1158'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1159'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1160'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1161'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1162'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1163'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1164'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1165'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1166'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1167'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1168'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1169'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1170'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1171'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1172'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1173'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1174'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1175'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1176'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1177'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1178'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1179'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1180'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1181'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1182'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1183'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1184'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1185'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1186'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1187'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1188'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1189'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1190'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1191'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1192'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1193'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1194'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1195'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1196'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1197'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1198'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1199'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1200'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1201'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1202'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1203'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1204'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1205'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1206'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1207'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1208'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1209'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1210'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1211'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1212'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1213'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1214'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1215'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1216'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1217'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1218'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1219'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1220'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1221'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1222'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1223'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1224'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1225'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1226'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 26, // EscapedCharacter
  },
  // 'action 1227'
  {
    op: 0, // shift
    state: 16, // 'state 16'
    symbol: undefined,
  },
  // 'action 1228'
  {
    op: 0, // shift
    state: 177, // 'state 177'
    symbol: undefined,
  },
  // 'action 1229'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 1230'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 1231'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 1232'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 1233'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 1234'
  {
    op: 0, // shift
    state: 22, // 'state 22'
    symbol: undefined,
  },
  // 'action 1235'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 1236'
  {
    op: 0, // shift
    state: 178, // 'state 178'
    symbol: undefined,
  },
  // 'action 1237'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 1238'
  {
    op: 0, // shift
    state: 25, // 'state 25'
    symbol: undefined,
  },
  // 'action 1239'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 1240'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 1241'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 1242'
  {
    op: 0, // shift
    state: 1, // 'state 1'
    symbol: undefined,
  },
  // 'action 1243'
  {
    op: 0, // shift
    state: 2, // 'state 2'
    symbol: undefined,
  },
  // 'action 1244'
  {
    op: 0, // shift
    state: 3, // 'state 3'
    symbol: undefined,
  },
  // 'action 1245'
  {
    op: 0, // shift
    state: 4, // 'state 4'
    symbol: undefined,
  },
  // 'action 1246'
  {
    op: 0, // shift
    state: 5, // 'state 5'
    symbol: undefined,
  },
  // 'action 1247'
  {
    op: 0, // shift
    state: 34, // 'state 34'
    symbol: undefined,
  },
  // 'action 1248'
  {
    op: 0, // shift
    state: 6, // 'state 6'
    symbol: undefined,
  },
  // 'action 1249'
  {
    op: 0, // shift
    state: 179, // 'state 179'
    symbol: undefined,
  },
  // 'action 1250'
  {
    op: 0, // shift
    state: 7, // 'state 7'
    symbol: undefined,
  },
  // 'action 1251'
  {
    op: 0, // shift
    state: 37, // 'state 37'
    symbol: undefined,
  },
  // 'action 1252'
  {
    op: 0, // shift
    state: 13, // 'state 13'
    symbol: undefined,
  },
  // 'action 1253'
  {
    op: 0, // shift
    state: 14, // 'state 14'
    symbol: undefined,
  },
  // 'action 1254'
  {
    op: 0, // shift
    state: 15, // 'state 15'
    symbol: undefined,
  },
  // 'action 1255'
  {
    op: 0, // shift
    state: 58, // 'state 58'
    symbol: undefined,
  },
  // 'action 1256'
  {
    op: 0, // shift
    state: 59, // 'state 59'
    symbol: undefined,
  },
  // 'action 1257'
  {
    op: 0, // shift
    state: 60, // 'state 60'
    symbol: undefined,
  },
  // 'action 1258'
  {
    op: 0, // shift
    state: 62, // 'state 62'
    symbol: undefined,
  },
  // 'action 1259'
  {
    op: 0, // shift
    state: 63, // 'state 63'
    symbol: undefined,
  },
  // 'action 1260'
  {
    op: 0, // shift
    state: 64, // 'state 64'
    symbol: undefined,
  },
  // 'action 1261'
  {
    op: 0, // shift
    state: 65, // 'state 65'
    symbol: undefined,
  },
  // 'action 1262'
  {
    op: 0, // shift
    state: 66, // 'state 66'
    symbol: undefined,
  },
  // 'action 1263'
  {
    op: 0, // shift
    state: 180, // 'state 180'
    symbol: undefined,
  },
  // 'action 1264'
  {
    op: 0, // shift
    state: 181, // 'state 181'
    symbol: undefined,
  },
  // 'action 1265'
  {
    op: 0, // shift
    state: 69, // 'state 69'
    symbol: undefined,
  },
  // 'action 1266'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1267'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1268'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1269'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1270'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1271'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1272'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1273'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1274'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1275'
  {
    op: 0, // shift
    state: 182, // 'state 182'
    symbol: undefined,
  },
  // 'action 1276'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1277'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1278'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1279'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1280'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1281'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1282'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1283'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1284'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1285'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1286'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1287'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1288'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1289'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1290'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1291'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1292'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1293'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1294'
  {
    op: 0, // shift
    state: 183, // 'state 183'
    symbol: undefined,
  },
  // 'action 1295'
  {
    op: 0, // shift
    state: 184, // 'state 184'
    symbol: undefined,
  },
  // 'action 1296'
  {
    op: 0, // shift
    state: 185, // 'state 185'
    symbol: undefined,
  },
  // 'action 1297'
  {
    op: 0, // shift
    state: 186, // 'state 186'
    symbol: undefined,
  },
  // 'action 1298'
  {
    op: 0, // shift
    state: 187, // 'state 187'
    symbol: undefined,
  },
  // 'action 1299'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1300'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1301'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1302'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1303'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1304'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1305'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1306'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1307'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1308'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1309'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1310'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1311'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1312'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1313'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1314'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1315'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1316'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1317'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1318'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1319'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1320'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1321'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1322'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1323'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1324'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1325'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1326'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1327'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1328'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1329'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1330'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1331'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1332'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1333'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1334'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1335'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1336'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1337'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1338'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1339'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1340'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1341'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1342'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1343'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1344'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1345'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1346'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1347'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1348'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1349'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1350'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1351'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1352'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1353'
  {
    op: 0, // shift
    state: 58, // 'state 58'
    symbol: undefined,
  },
  // 'action 1354'
  {
    op: 0, // shift
    state: 59, // 'state 59'
    symbol: undefined,
  },
  // 'action 1355'
  {
    op: 0, // shift
    state: 60, // 'state 60'
    symbol: undefined,
  },
  // 'action 1356'
  {
    op: 0, // shift
    state: 62, // 'state 62'
    symbol: undefined,
  },
  // 'action 1357'
  {
    op: 0, // shift
    state: 63, // 'state 63'
    symbol: undefined,
  },
  // 'action 1358'
  {
    op: 0, // shift
    state: 64, // 'state 64'
    symbol: undefined,
  },
  // 'action 1359'
  {
    op: 0, // shift
    state: 65, // 'state 65'
    symbol: undefined,
  },
  // 'action 1360'
  {
    op: 0, // shift
    state: 66, // 'state 66'
    symbol: undefined,
  },
  // 'action 1361'
  {
    op: 0, // shift
    state: 188, // 'state 188'
    symbol: undefined,
  },
  // 'action 1362'
  {
    op: 0, // shift
    state: 68, // 'state 68'
    symbol: undefined,
  },
  // 'action 1363'
  {
    op: 0, // shift
    state: 69, // 'state 69'
    symbol: undefined,
  },
  // 'action 1364'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1365'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1366'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1367'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1368'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1369'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1370'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1371'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1372'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1373'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1374'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1375'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1376'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1377'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1378'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1379'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1380'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1381'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1382'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1383'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1384'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1385'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1386'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1387'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1388'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1389'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1390'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1391'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1392'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1393'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1394'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1395'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1396'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1397'
  {
    op: 0, // shift
    state: 58, // 'state 58'
    symbol: undefined,
  },
  // 'action 1398'
  {
    op: 0, // shift
    state: 59, // 'state 59'
    symbol: undefined,
  },
  // 'action 1399'
  {
    op: 0, // shift
    state: 60, // 'state 60'
    symbol: undefined,
  },
  // 'action 1400'
  {
    op: 0, // shift
    state: 62, // 'state 62'
    symbol: undefined,
  },
  // 'action 1401'
  {
    op: 0, // shift
    state: 63, // 'state 63'
    symbol: undefined,
  },
  // 'action 1402'
  {
    op: 0, // shift
    state: 64, // 'state 64'
    symbol: undefined,
  },
  // 'action 1403'
  {
    op: 0, // shift
    state: 65, // 'state 65'
    symbol: undefined,
  },
  // 'action 1404'
  {
    op: 0, // shift
    state: 66, // 'state 66'
    symbol: undefined,
  },
  // 'action 1405'
  {
    op: 0, // shift
    state: 189, // 'state 189'
    symbol: undefined,
  },
  // 'action 1406'
  {
    op: 0, // shift
    state: 190, // 'state 190'
    symbol: undefined,
  },
  // 'action 1407'
  {
    op: 0, // shift
    state: 69, // 'state 69'
    symbol: undefined,
  },
  // 'action 1408'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1409'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1410'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1411'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1412'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1413'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1414'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1415'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1416'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1417'
  {
    op: 0, // shift
    state: 191, // 'state 191'
    symbol: undefined,
  },
  // 'action 1418'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1419'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1420'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1421'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1422'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1423'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1424'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1425'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1426'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1427'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1428'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1429'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1430'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1431'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1432'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1433'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1434'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1435'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1436'
  {
    op: 0, // shift
    state: 192, // 'state 192'
    symbol: undefined,
  },
  // 'action 1437'
  {
    op: 0, // shift
    state: 193, // 'state 193'
    symbol: undefined,
  },
  // 'action 1438'
  {
    op: 0, // shift
    state: 194, // 'state 194'
    symbol: undefined,
  },
  // 'action 1439'
  {
    op: 0, // shift
    state: 195, // 'state 195'
    symbol: undefined,
  },
  // 'action 1440'
  {
    op: 0, // shift
    state: 196, // 'state 196'
    symbol: undefined,
  },
  // 'action 1441'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1442'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1443'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1444'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1445'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1446'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1447'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1448'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1449'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1450'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1451'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1452'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1453'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1454'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1455'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1456'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1457'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1458'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1459'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1460'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1461'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1462'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1463'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1464'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1465'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1466'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1467'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1468'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1469'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1470'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1471'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1472'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1473'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1474'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1475'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1476'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1477'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1478'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1479'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1480'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1481'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1482'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1483'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1484'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1485'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1486'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1487'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1488'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1489'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1490'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1491'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1492'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1493'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1494'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1495'
  {
    op: 0, // shift
    state: 58, // 'state 58'
    symbol: undefined,
  },
  // 'action 1496'
  {
    op: 0, // shift
    state: 59, // 'state 59'
    symbol: undefined,
  },
  // 'action 1497'
  {
    op: 0, // shift
    state: 60, // 'state 60'
    symbol: undefined,
  },
  // 'action 1498'
  {
    op: 0, // shift
    state: 62, // 'state 62'
    symbol: undefined,
  },
  // 'action 1499'
  {
    op: 0, // shift
    state: 63, // 'state 63'
    symbol: undefined,
  },
  // 'action 1500'
  {
    op: 0, // shift
    state: 64, // 'state 64'
    symbol: undefined,
  },
  // 'action 1501'
  {
    op: 0, // shift
    state: 65, // 'state 65'
    symbol: undefined,
  },
  // 'action 1502'
  {
    op: 0, // shift
    state: 66, // 'state 66'
    symbol: undefined,
  },
  // 'action 1503'
  {
    op: 0, // shift
    state: 197, // 'state 197'
    symbol: undefined,
  },
  // 'action 1504'
  {
    op: 0, // shift
    state: 68, // 'state 68'
    symbol: undefined,
  },
  // 'action 1505'
  {
    op: 0, // shift
    state: 69, // 'state 69'
    symbol: undefined,
  },
  // 'action 1506'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1507'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1508'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1509'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1510'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1511'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1512'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1513'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1514'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1515'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1516'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1517'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1518'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1519'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1520'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1521'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1522'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1523'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1524'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1525'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1526'
  {
    op: 0, // shift
    state: 198, // 'state 198'
    symbol: undefined,
  },
  // 'action 1527'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1528'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1529'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1530'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1531'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1532'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1533'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1534'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1535'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1536'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1537'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1538'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1539'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1540'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1541'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1542'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1543'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1544'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1545'
  {
    op: 0, // shift
    state: 199, // 'state 199'
    symbol: undefined,
  },
  // 'action 1546'
  {
    op: 0, // shift
    state: 200, // 'state 200'
    symbol: undefined,
  },
  // 'action 1547'
  {
    op: 0, // shift
    state: 201, // 'state 201'
    symbol: undefined,
  },
  // 'action 1548'
  {
    op: 0, // shift
    state: 202, // 'state 202'
    symbol: undefined,
  },
  // 'action 1549'
  {
    op: 0, // shift
    state: 203, // 'state 203'
    symbol: undefined,
  },
  // 'action 1550'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1551'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1552'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1553'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1554'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1555'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1556'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1557'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1558'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1559'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1560'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1561'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1562'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1563'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1564'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1565'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1566'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1567'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1568'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1569'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1570'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1571'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1572'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1573'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1574'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1575'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1576'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1577'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1578'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1579'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1580'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1581'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1582'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1583'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1584'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1585'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1586'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1587'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1588'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1589'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1590'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1591'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1592'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1593'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1594'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1595'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1596'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1597'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1598'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1599'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1600'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1601'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1602'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1603'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1604'
  {
    op: 0, // shift
    state: 204, // 'state 204'
    symbol: undefined,
  },
  // 'action 1605'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1606'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1607'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1608'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1609'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1610'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1611'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1612'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1613'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1614'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1615'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1616'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1617'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1618'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1619'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1620'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1621'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1622'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1623'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1624'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1625'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1626'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1627'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1628'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1629'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1630'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1631'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1632'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1633'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1634'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1635'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1636'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1637'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1638'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1639'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1640'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1641'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1642'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1643'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1644'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1645'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1646'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1647'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1648'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1649'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1650'
  {
    op: 0, // shift
    state: 58, // 'state 58'
    symbol: undefined,
  },
  // 'action 1651'
  {
    op: 0, // shift
    state: 59, // 'state 59'
    symbol: undefined,
  },
  // 'action 1652'
  {
    op: 0, // shift
    state: 60, // 'state 60'
    symbol: undefined,
  },
  // 'action 1653'
  {
    op: 0, // shift
    state: 62, // 'state 62'
    symbol: undefined,
  },
  // 'action 1654'
  {
    op: 0, // shift
    state: 63, // 'state 63'
    symbol: undefined,
  },
  // 'action 1655'
  {
    op: 0, // shift
    state: 64, // 'state 64'
    symbol: undefined,
  },
  // 'action 1656'
  {
    op: 0, // shift
    state: 65, // 'state 65'
    symbol: undefined,
  },
  // 'action 1657'
  {
    op: 0, // shift
    state: 66, // 'state 66'
    symbol: undefined,
  },
  // 'action 1658'
  {
    op: 0, // shift
    state: 205, // 'state 205'
    symbol: undefined,
  },
  // 'action 1659'
  {
    op: 0, // shift
    state: 156, // 'state 156'
    symbol: undefined,
  },
  // 'action 1660'
  {
    op: 0, // shift
    state: 69, // 'state 69'
    symbol: undefined,
  },
  // 'action 1661'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1662'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1663'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1664'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1665'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1666'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1667'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1668'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1669'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1670'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1671'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1672'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1673'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1674'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1675'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1676'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1677'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1678'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1679'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1680'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1681'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1682'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1683'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1684'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1685'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1686'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1687'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1688'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1689'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1690'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1691'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1692'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1693'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1694'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1695'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1696'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1697'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1698'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1699'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1700'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1701'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1702'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1703'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1704'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1705'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1706'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1707'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1708'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1709'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1710'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1711'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1712'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1713'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1714'
  {
    op: 0, // shift
    state: 206, // 'state 206'
    symbol: undefined,
  },
  // 'action 1715'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1716'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1717'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1718'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1719'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1720'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1721'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1722'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1723'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1724'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1725'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1726'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1727'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1728'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1729'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1730'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1731'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1732'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1733'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1734'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1735'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1736'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1737'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1738'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1739'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1740'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1741'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1742'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1743'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1744'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1745'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1746'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1747'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1748'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1749'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1750'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1751'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1752'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1753'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1754'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1755'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1756'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1757'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1758'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1759'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1760'
  {
    op: 0, // shift
    state: 58, // 'state 58'
    symbol: undefined,
  },
  // 'action 1761'
  {
    op: 0, // shift
    state: 59, // 'state 59'
    symbol: undefined,
  },
  // 'action 1762'
  {
    op: 0, // shift
    state: 60, // 'state 60'
    symbol: undefined,
  },
  // 'action 1763'
  {
    op: 0, // shift
    state: 62, // 'state 62'
    symbol: undefined,
  },
  // 'action 1764'
  {
    op: 0, // shift
    state: 63, // 'state 63'
    symbol: undefined,
  },
  // 'action 1765'
  {
    op: 0, // shift
    state: 64, // 'state 64'
    symbol: undefined,
  },
  // 'action 1766'
  {
    op: 0, // shift
    state: 65, // 'state 65'
    symbol: undefined,
  },
  // 'action 1767'
  {
    op: 0, // shift
    state: 66, // 'state 66'
    symbol: undefined,
  },
  // 'action 1768'
  {
    op: 0, // shift
    state: 207, // 'state 207'
    symbol: undefined,
  },
  // 'action 1769'
  {
    op: 0, // shift
    state: 156, // 'state 156'
    symbol: undefined,
  },
  // 'action 1770'
  {
    op: 0, // shift
    state: 69, // 'state 69'
    symbol: undefined,
  },
  // 'action 1771'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1772'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1773'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1774'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1775'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1776'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1777'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1778'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1779'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1780'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1781'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1782'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1783'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1784'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1785'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1786'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1787'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1788'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1789'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1790'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1791'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1792'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1793'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1794'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1795'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1796'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1797'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1798'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1799'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1800'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1801'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1802'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1803'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 20, // Group
  },
  // 'action 1804'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1805'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1806'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1807'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1808'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1809'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1810'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1811'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1812'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1813'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1814'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1815'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1816'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1817'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1818'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1819'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1820'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1821'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1822'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1823'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1824'
  {
    op: 0, // shift
    state: 208, // 'state 208'
    symbol: undefined,
  },
  // 'action 1825'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1826'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1827'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1828'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1829'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1830'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1831'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1832'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1833'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1834'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1835'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1836'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1837'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1838'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1839'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1840'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1841'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1842'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1843'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1844'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1845'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1846'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1847'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1848'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1849'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1850'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1851'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1852'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1853'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1854'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1855'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1856'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1857'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1858'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1859'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1860'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1861'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1862'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1863'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1864'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1865'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1866'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1867'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1868'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1869'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1870'
  {
    op: 0, // shift
    state: 58, // 'state 58'
    symbol: undefined,
  },
  // 'action 1871'
  {
    op: 0, // shift
    state: 59, // 'state 59'
    symbol: undefined,
  },
  // 'action 1872'
  {
    op: 0, // shift
    state: 60, // 'state 60'
    symbol: undefined,
  },
  // 'action 1873'
  {
    op: 0, // shift
    state: 62, // 'state 62'
    symbol: undefined,
  },
  // 'action 1874'
  {
    op: 0, // shift
    state: 63, // 'state 63'
    symbol: undefined,
  },
  // 'action 1875'
  {
    op: 0, // shift
    state: 64, // 'state 64'
    symbol: undefined,
  },
  // 'action 1876'
  {
    op: 0, // shift
    state: 65, // 'state 65'
    symbol: undefined,
  },
  // 'action 1877'
  {
    op: 0, // shift
    state: 66, // 'state 66'
    symbol: undefined,
  },
  // 'action 1878'
  {
    op: 0, // shift
    state: 209, // 'state 209'
    symbol: undefined,
  },
  // 'action 1879'
  {
    op: 0, // shift
    state: 156, // 'state 156'
    symbol: undefined,
  },
  // 'action 1880'
  {
    op: 0, // shift
    state: 69, // 'state 69'
    symbol: undefined,
  },
  // 'action 1881'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1882'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1883'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1884'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1885'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1886'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1887'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1888'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1889'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1890'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1891'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 1892'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1893'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1894'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1895'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1896'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1897'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1898'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1899'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1900'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 22, // CharacterClassCharacters
  },
  // 'action 1901'
  {
    op: 0, // shift
    state: 210, // 'state 210'
    symbol: undefined,
  },
  // 'action 1902'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1903'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1904'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1905'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1906'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1907'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1908'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1909'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1910'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1911'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1912'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1913'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1914'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1915'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1916'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1917'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1918'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1919'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1920'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1921'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1922'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1923'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1924'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1925'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1926'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1927'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1928'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1929'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1930'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1931'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1932'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1933'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1934'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1935'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1936'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1937'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1938'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1939'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1940'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1941'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1942'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1943'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1944'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1945'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1946'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1947'
  {
    op: 0, // shift
    state: 58, // 'state 58'
    symbol: undefined,
  },
  // 'action 1948'
  {
    op: 0, // shift
    state: 59, // 'state 59'
    symbol: undefined,
  },
  // 'action 1949'
  {
    op: 0, // shift
    state: 60, // 'state 60'
    symbol: undefined,
  },
  // 'action 1950'
  {
    op: 0, // shift
    state: 62, // 'state 62'
    symbol: undefined,
  },
  // 'action 1951'
  {
    op: 0, // shift
    state: 63, // 'state 63'
    symbol: undefined,
  },
  // 'action 1952'
  {
    op: 0, // shift
    state: 64, // 'state 64'
    symbol: undefined,
  },
  // 'action 1953'
  {
    op: 0, // shift
    state: 65, // 'state 65'
    symbol: undefined,
  },
  // 'action 1954'
  {
    op: 0, // shift
    state: 66, // 'state 66'
    symbol: undefined,
  },
  // 'action 1955'
  {
    op: 0, // shift
    state: 211, // 'state 211'
    symbol: undefined,
  },
  // 'action 1956'
  {
    op: 0, // shift
    state: 156, // 'state 156'
    symbol: undefined,
  },
  // 'action 1957'
  {
    op: 0, // shift
    state: 69, // 'state 69'
    symbol: undefined,
  },
  // 'action 1958'
  {
    op: 0, // shift
    state: 212, // 'state 212'
    symbol: undefined,
  },
  // 'action 1959'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1960'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1961'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1962'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1963'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1964'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1965'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1966'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1967'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1968'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1969'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1970'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1971'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1972'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1973'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1974'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1975'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1976'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1977'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1978'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1979'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1980'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1981'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1982'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1983'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1984'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1985'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1986'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1987'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1988'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1989'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1990'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1991'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1992'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1993'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1994'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1995'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1996'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1997'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1998'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 1999'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 2000'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 2001'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 2002'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 2003'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 23, // CharacterClassCharacter
  },
  // 'action 2004'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2005'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2006'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2007'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2008'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2009'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2010'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2011'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2012'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2013'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2014'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2015'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2016'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2017'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2018'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2019'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2020'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2021'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2022'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2023'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2024'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2025'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2026'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2027'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2028'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2029'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2030'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2031'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2032'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2033'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2034'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2035'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2036'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2037'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2038'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2039'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2040'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2041'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2042'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2043'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2044'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2045'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2046'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2047'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2048'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2049'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2050'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2051'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2052'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2053'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2054'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2055'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2056'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2057'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2058'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2059'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2060'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2061'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2062'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2063'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2064'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2065'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2066'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2067'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2068'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2069'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2070'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2071'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2072'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2073'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2074'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2075'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2076'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2077'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2078'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2079'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2080'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2081'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2082'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2083'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 21, // CharacterClass
  },
  // 'action 2084'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2085'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2086'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2087'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2088'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2089'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2090'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2091'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
  // 'action 2092'
  {
    op: 1, // reduce
    state: undefined,
    symbol: 24, // CharacterClassRange
  },
];
const actionsTable = new Uint16Array(13632).fill(0xffff);
actionsTable[0] = 0; // 'state 0' -> CHARACTER -> shift -> 'action 0'
actionsTable[1] = 1; // 'state 0' -> CONTROL_CHARACTER -> shift -> 'action 1'
actionsTable[2] = 2; // 'state 0' -> BACKSLASH -> shift -> 'action 2'
actionsTable[3] = 3; // 'state 0' -> CARET -> shift -> 'action 3'
actionsTable[4] = 4; // 'state 0' -> DASH -> shift -> 'action 4'
actionsTable[7] = 5; // 'state 0' -> PAREN_OPEN -> shift -> 'action 5'
actionsTable[10] = 6; // 'state 0' -> BRACKET_OPEN -> shift -> 'action 6'
actionsTable[15] = 7; // 'state 0' -> RegExp -> shift -> 'action 7'
actionsTable[16] = 8; // 'state 0' -> Expression -> shift -> 'action 8'
actionsTable[17] = 9; // 'state 0' -> Union -> shift -> 'action 9'
actionsTable[18] = 10; // 'state 0' -> Sequence -> shift -> 'action 10'
actionsTable[19] = 11; // 'state 0' -> Atom -> shift -> 'action 11'
actionsTable[20] = 12; // 'state 0' -> Group -> shift -> 'action 12'
actionsTable[21] = 13; // 'state 0' -> CharacterClass -> shift -> 'action 13'
actionsTable[25] = 14; // 'state 0' -> Character -> shift -> 'action 14'
actionsTable[524] = 15; // 'state 8' -> @par-gen.EOF -> done -> 'action 15'
actionsTable[588] = 16; // 'state 9' -> @par-gen.EOF -> reduce -> 'action 16'
actionsTable[646] = 17; // 'state 10' -> UNION -> shift -> 'action 17'
actionsTable[652] = 18; // 'state 10' -> @par-gen.EOF -> reduce -> 'action 18'
actionsTable[704] = 19; // 'state 11' -> CHARACTER -> shift -> 'action 19'
actionsTable[705] = 20; // 'state 11' -> CONTROL_CHARACTER -> shift -> 'action 20'
actionsTable[706] = 21; // 'state 11' -> BACKSLASH -> shift -> 'action 21'
actionsTable[707] = 22; // 'state 11' -> CARET -> shift -> 'action 22'
actionsTable[708] = 23; // 'state 11' -> DASH -> shift -> 'action 23'
actionsTable[710] = 24; // 'state 11' -> UNION -> shift -> 'action 24'
actionsTable[711] = 25; // 'state 11' -> PAREN_OPEN -> shift -> 'action 25'
actionsTable[714] = 26; // 'state 11' -> BRACKET_OPEN -> shift -> 'action 26'
actionsTable[723] = 27; // 'state 11' -> Atom -> shift -> 'action 27'
actionsTable[724] = 28; // 'state 11' -> Group -> shift -> 'action 28'
actionsTable[725] = 29; // 'state 11' -> CharacterClass -> shift -> 'action 29'
actionsTable[729] = 30; // 'state 11' -> Character -> shift -> 'action 30'
actionsTable[716] = 31; // 'state 11' -> @par-gen.EOF -> reduce -> 'action 31'
actionsTable[768] = 32; // 'state 12' -> CHARACTER -> shift -> 'action 32'
actionsTable[769] = 33; // 'state 12' -> CONTROL_CHARACTER -> shift -> 'action 33'
actionsTable[770] = 34; // 'state 12' -> BACKSLASH -> shift -> 'action 34'
actionsTable[771] = 35; // 'state 12' -> CARET -> shift -> 'action 35'
actionsTable[772] = 36; // 'state 12' -> DASH -> shift -> 'action 36'
actionsTable[774] = 37; // 'state 12' -> UNION -> shift -> 'action 37'
actionsTable[775] = 38; // 'state 12' -> PAREN_OPEN -> shift -> 'action 38'
actionsTable[778] = 39; // 'state 12' -> BRACKET_OPEN -> shift -> 'action 39'
actionsTable[787] = 40; // 'state 12' -> Atom -> shift -> 'action 40'
actionsTable[788] = 41; // 'state 12' -> Group -> shift -> 'action 41'
actionsTable[789] = 42; // 'state 12' -> CharacterClass -> shift -> 'action 42'
actionsTable[793] = 43; // 'state 12' -> Character -> shift -> 'action 43'
actionsTable[780] = 44; // 'state 12' -> @par-gen.EOF -> reduce -> 'action 44'
actionsTable[969] = 45; // 'state 15' -> QUANTIFIER -> shift -> 'action 45'
actionsTable[960] = 46; // 'state 15' -> CHARACTER -> reduce -> 'action 46'
actionsTable[961] = 47; // 'state 15' -> CONTROL_CHARACTER -> reduce -> 'action 47'
actionsTable[962] = 48; // 'state 15' -> BACKSLASH -> reduce -> 'action 48'
actionsTable[963] = 49; // 'state 15' -> CARET -> reduce -> 'action 49'
actionsTable[964] = 50; // 'state 15' -> DASH -> reduce -> 'action 50'
actionsTable[966] = 51; // 'state 15' -> UNION -> reduce -> 'action 51'
actionsTable[967] = 52; // 'state 15' -> PAREN_OPEN -> reduce -> 'action 52'
actionsTable[968] = 53; // 'state 15' -> PAREN_CLOSE -> reduce -> 'action 53'
actionsTable[970] = 54; // 'state 15' -> BRACKET_OPEN -> reduce -> 'action 54'
actionsTable[972] = 55; // 'state 15' -> @par-gen.EOF -> reduce -> 'action 55'
actionsTable[841] = 56; // 'state 13' -> QUANTIFIER -> shift -> 'action 56'
actionsTable[832] = 57; // 'state 13' -> CHARACTER -> reduce -> 'action 57'
actionsTable[833] = 58; // 'state 13' -> CONTROL_CHARACTER -> reduce -> 'action 58'
actionsTable[834] = 59; // 'state 13' -> BACKSLASH -> reduce -> 'action 59'
actionsTable[835] = 60; // 'state 13' -> CARET -> reduce -> 'action 60'
actionsTable[836] = 61; // 'state 13' -> DASH -> reduce -> 'action 61'
actionsTable[838] = 62; // 'state 13' -> UNION -> reduce -> 'action 62'
actionsTable[839] = 63; // 'state 13' -> PAREN_OPEN -> reduce -> 'action 63'
actionsTable[840] = 64; // 'state 13' -> PAREN_CLOSE -> reduce -> 'action 64'
actionsTable[842] = 65; // 'state 13' -> BRACKET_OPEN -> reduce -> 'action 65'
actionsTable[844] = 66; // 'state 13' -> @par-gen.EOF -> reduce -> 'action 66'
actionsTable[905] = 67; // 'state 14' -> QUANTIFIER -> shift -> 'action 67'
actionsTable[896] = 68; // 'state 14' -> CHARACTER -> reduce -> 'action 68'
actionsTable[897] = 69; // 'state 14' -> CONTROL_CHARACTER -> reduce -> 'action 69'
actionsTable[898] = 70; // 'state 14' -> BACKSLASH -> reduce -> 'action 70'
actionsTable[899] = 71; // 'state 14' -> CARET -> reduce -> 'action 71'
actionsTable[900] = 72; // 'state 14' -> DASH -> reduce -> 'action 72'
actionsTable[902] = 73; // 'state 14' -> UNION -> reduce -> 'action 73'
actionsTable[903] = 74; // 'state 14' -> PAREN_OPEN -> reduce -> 'action 74'
actionsTable[904] = 75; // 'state 14' -> PAREN_CLOSE -> reduce -> 'action 75'
actionsTable[906] = 76; // 'state 14' -> BRACKET_OPEN -> reduce -> 'action 76'
actionsTable[908] = 77; // 'state 14' -> @par-gen.EOF -> reduce -> 'action 77'
actionsTable[64] = 78; // 'state 1' -> CHARACTER -> reduce -> 'action 78'
actionsTable[65] = 79; // 'state 1' -> CONTROL_CHARACTER -> reduce -> 'action 79'
actionsTable[66] = 80; // 'state 1' -> BACKSLASH -> reduce -> 'action 80'
actionsTable[67] = 81; // 'state 1' -> CARET -> reduce -> 'action 81'
actionsTable[68] = 82; // 'state 1' -> DASH -> reduce -> 'action 82'
actionsTable[70] = 83; // 'state 1' -> UNION -> reduce -> 'action 83'
actionsTable[71] = 84; // 'state 1' -> PAREN_OPEN -> reduce -> 'action 84'
actionsTable[72] = 85; // 'state 1' -> PAREN_CLOSE -> reduce -> 'action 85'
actionsTable[73] = 86; // 'state 1' -> QUANTIFIER -> reduce -> 'action 86'
actionsTable[74] = 87; // 'state 1' -> BRACKET_OPEN -> reduce -> 'action 87'
actionsTable[76] = 88; // 'state 1' -> @par-gen.EOF -> reduce -> 'action 88'
actionsTable[128] = 89; // 'state 2' -> CHARACTER -> reduce -> 'action 89'
actionsTable[129] = 90; // 'state 2' -> CONTROL_CHARACTER -> reduce -> 'action 90'
actionsTable[130] = 91; // 'state 2' -> BACKSLASH -> reduce -> 'action 91'
actionsTable[131] = 92; // 'state 2' -> CARET -> reduce -> 'action 92'
actionsTable[132] = 93; // 'state 2' -> DASH -> reduce -> 'action 93'
actionsTable[134] = 94; // 'state 2' -> UNION -> reduce -> 'action 94'
actionsTable[135] = 95; // 'state 2' -> PAREN_OPEN -> reduce -> 'action 95'
actionsTable[136] = 96; // 'state 2' -> PAREN_CLOSE -> reduce -> 'action 96'
actionsTable[137] = 97; // 'state 2' -> QUANTIFIER -> reduce -> 'action 97'
actionsTable[138] = 98; // 'state 2' -> BRACKET_OPEN -> reduce -> 'action 98'
actionsTable[140] = 99; // 'state 2' -> @par-gen.EOF -> reduce -> 'action 99'
actionsTable[256] = 100; // 'state 4' -> CHARACTER -> reduce -> 'action 100'
actionsTable[257] = 101; // 'state 4' -> CONTROL_CHARACTER -> reduce -> 'action 101'
actionsTable[258] = 102; // 'state 4' -> BACKSLASH -> reduce -> 'action 102'
actionsTable[259] = 103; // 'state 4' -> CARET -> reduce -> 'action 103'
actionsTable[260] = 104; // 'state 4' -> DASH -> reduce -> 'action 104'
actionsTable[262] = 105; // 'state 4' -> UNION -> reduce -> 'action 105'
actionsTable[263] = 106; // 'state 4' -> PAREN_OPEN -> reduce -> 'action 106'
actionsTable[264] = 107; // 'state 4' -> PAREN_CLOSE -> reduce -> 'action 107'
actionsTable[265] = 108; // 'state 4' -> QUANTIFIER -> reduce -> 'action 108'
actionsTable[266] = 109; // 'state 4' -> BRACKET_OPEN -> reduce -> 'action 109'
actionsTable[268] = 110; // 'state 4' -> @par-gen.EOF -> reduce -> 'action 110'
actionsTable[320] = 111; // 'state 5' -> CHARACTER -> reduce -> 'action 111'
actionsTable[321] = 112; // 'state 5' -> CONTROL_CHARACTER -> reduce -> 'action 112'
actionsTable[322] = 113; // 'state 5' -> BACKSLASH -> reduce -> 'action 113'
actionsTable[323] = 114; // 'state 5' -> CARET -> reduce -> 'action 114'
actionsTable[324] = 115; // 'state 5' -> DASH -> reduce -> 'action 115'
actionsTable[326] = 116; // 'state 5' -> UNION -> reduce -> 'action 116'
actionsTable[327] = 117; // 'state 5' -> PAREN_OPEN -> reduce -> 'action 117'
actionsTable[328] = 118; // 'state 5' -> PAREN_CLOSE -> reduce -> 'action 118'
actionsTable[329] = 119; // 'state 5' -> QUANTIFIER -> reduce -> 'action 119'
actionsTable[330] = 120; // 'state 5' -> BRACKET_OPEN -> reduce -> 'action 120'
actionsTable[332] = 121; // 'state 5' -> @par-gen.EOF -> reduce -> 'action 121'
actionsTable[193] = 122; // 'state 3' -> CONTROL_CHARACTER -> shift -> 'action 122'
actionsTable[194] = 123; // 'state 3' -> BACKSLASH -> shift -> 'action 123'
actionsTable[197] = 124; // 'state 3' -> DOT -> shift -> 'action 124'
actionsTable[198] = 125; // 'state 3' -> UNION -> shift -> 'action 125'
actionsTable[199] = 126; // 'state 3' -> PAREN_OPEN -> shift -> 'action 126'
actionsTable[200] = 127; // 'state 3' -> PAREN_CLOSE -> shift -> 'action 127'
actionsTable[201] = 128; // 'state 3' -> QUANTIFIER -> shift -> 'action 128'
actionsTable[202] = 129; // 'state 3' -> BRACKET_OPEN -> shift -> 'action 129'
actionsTable[203] = 130; // 'state 3' -> BRACKET_CLOSE -> shift -> 'action 130'
actionsTable[218] = 131; // 'state 3' -> EscapedCharacter -> shift -> 'action 131'
actionsTable[384] = 132; // 'state 6' -> CHARACTER -> shift -> 'action 132'
actionsTable[385] = 133; // 'state 6' -> CONTROL_CHARACTER -> shift -> 'action 133'
actionsTable[386] = 134; // 'state 6' -> BACKSLASH -> shift -> 'action 134'
actionsTable[387] = 135; // 'state 6' -> CARET -> shift -> 'action 135'
actionsTable[388] = 136; // 'state 6' -> DASH -> shift -> 'action 136'
actionsTable[391] = 137; // 'state 6' -> PAREN_OPEN -> shift -> 'action 137'
actionsTable[394] = 138; // 'state 6' -> BRACKET_OPEN -> shift -> 'action 138'
actionsTable[401] = 139; // 'state 6' -> Union -> shift -> 'action 139'
actionsTable[402] = 140; // 'state 6' -> Sequence -> shift -> 'action 140'
actionsTable[403] = 141; // 'state 6' -> Atom -> shift -> 'action 141'
actionsTable[404] = 142; // 'state 6' -> Group -> shift -> 'action 142'
actionsTable[405] = 143; // 'state 6' -> CharacterClass -> shift -> 'action 143'
actionsTable[409] = 144; // 'state 6' -> Character -> shift -> 'action 144'
actionsTable[448] = 145; // 'state 7' -> CHARACTER -> shift -> 'action 145'
actionsTable[449] = 146; // 'state 7' -> CONTROL_CHARACTER -> shift -> 'action 146'
actionsTable[450] = 147; // 'state 7' -> BACKSLASH -> shift -> 'action 147'
actionsTable[451] = 148; // 'state 7' -> CARET -> shift -> 'action 148'
actionsTable[453] = 149; // 'state 7' -> DOT -> shift -> 'action 149'
actionsTable[454] = 150; // 'state 7' -> UNION -> shift -> 'action 150'
actionsTable[455] = 151; // 'state 7' -> PAREN_OPEN -> shift -> 'action 151'
actionsTable[456] = 152; // 'state 7' -> PAREN_CLOSE -> shift -> 'action 152'
actionsTable[457] = 153; // 'state 7' -> QUANTIFIER -> shift -> 'action 153'
actionsTable[470] = 154; // 'state 7' -> CharacterClassCharacters -> shift -> 'action 154'
actionsTable[471] = 155; // 'state 7' -> CharacterClassCharacter -> shift -> 'action 155'
actionsTable[472] = 156; // 'state 7' -> CharacterClassRange -> shift -> 'action 156'
actionsTable[1024] = 157; // 'state 16' -> CHARACTER -> shift -> 'action 157'
actionsTable[1025] = 158; // 'state 16' -> CONTROL_CHARACTER -> shift -> 'action 158'
actionsTable[1026] = 159; // 'state 16' -> BACKSLASH -> shift -> 'action 159'
actionsTable[1027] = 160; // 'state 16' -> CARET -> shift -> 'action 160'
actionsTable[1028] = 161; // 'state 16' -> DASH -> shift -> 'action 161'
actionsTable[1031] = 162; // 'state 16' -> PAREN_OPEN -> shift -> 'action 162'
actionsTable[1034] = 163; // 'state 16' -> BRACKET_OPEN -> shift -> 'action 163'
actionsTable[1042] = 164; // 'state 16' -> Sequence -> shift -> 'action 164'
actionsTable[1043] = 165; // 'state 16' -> Atom -> shift -> 'action 165'
actionsTable[1044] = 166; // 'state 16' -> Group -> shift -> 'action 166'
actionsTable[1045] = 167; // 'state 16' -> CharacterClass -> shift -> 'action 167'
actionsTable[1049] = 168; // 'state 16' -> Character -> shift -> 'action 168'
actionsTable[1408] = 169; // 'state 22' -> CHARACTER -> shift -> 'action 169'
actionsTable[1409] = 170; // 'state 22' -> CONTROL_CHARACTER -> shift -> 'action 170'
actionsTable[1410] = 171; // 'state 22' -> BACKSLASH -> shift -> 'action 171'
actionsTable[1411] = 172; // 'state 22' -> CARET -> shift -> 'action 172'
actionsTable[1412] = 173; // 'state 22' -> DASH -> shift -> 'action 173'
actionsTable[1415] = 174; // 'state 22' -> PAREN_OPEN -> shift -> 'action 174'
actionsTable[1418] = 175; // 'state 22' -> BRACKET_OPEN -> shift -> 'action 175'
actionsTable[1426] = 176; // 'state 22' -> Sequence -> shift -> 'action 176'
actionsTable[1427] = 177; // 'state 22' -> Atom -> shift -> 'action 177'
actionsTable[1428] = 178; // 'state 22' -> Group -> shift -> 'action 178'
actionsTable[1429] = 179; // 'state 22' -> CharacterClass -> shift -> 'action 179'
actionsTable[1433] = 180; // 'state 22' -> Character -> shift -> 'action 180'
actionsTable[1600] = 181; // 'state 25' -> CHARACTER -> reduce -> 'action 181'
actionsTable[1601] = 182; // 'state 25' -> CONTROL_CHARACTER -> reduce -> 'action 182'
actionsTable[1602] = 183; // 'state 25' -> BACKSLASH -> reduce -> 'action 183'
actionsTable[1603] = 184; // 'state 25' -> CARET -> reduce -> 'action 184'
actionsTable[1604] = 185; // 'state 25' -> DASH -> reduce -> 'action 185'
actionsTable[1606] = 186; // 'state 25' -> UNION -> reduce -> 'action 186'
actionsTable[1607] = 187; // 'state 25' -> PAREN_OPEN -> reduce -> 'action 187'
actionsTable[1608] = 188; // 'state 25' -> PAREN_CLOSE -> reduce -> 'action 188'
actionsTable[1610] = 189; // 'state 25' -> BRACKET_OPEN -> reduce -> 'action 189'
actionsTable[1612] = 190; // 'state 25' -> @par-gen.EOF -> reduce -> 'action 190'
actionsTable[1801] = 191; // 'state 28' -> QUANTIFIER -> shift -> 'action 191'
actionsTable[1792] = 192; // 'state 28' -> CHARACTER -> reduce -> 'action 192'
actionsTable[1793] = 193; // 'state 28' -> CONTROL_CHARACTER -> reduce -> 'action 193'
actionsTable[1794] = 194; // 'state 28' -> BACKSLASH -> reduce -> 'action 194'
actionsTable[1795] = 195; // 'state 28' -> CARET -> reduce -> 'action 195'
actionsTable[1796] = 196; // 'state 28' -> DASH -> reduce -> 'action 196'
actionsTable[1798] = 197; // 'state 28' -> UNION -> reduce -> 'action 197'
actionsTable[1799] = 198; // 'state 28' -> PAREN_OPEN -> reduce -> 'action 198'
actionsTable[1800] = 199; // 'state 28' -> PAREN_CLOSE -> reduce -> 'action 199'
actionsTable[1802] = 200; // 'state 28' -> BRACKET_OPEN -> reduce -> 'action 200'
actionsTable[1804] = 201; // 'state 28' -> @par-gen.EOF -> reduce -> 'action 201'
actionsTable[1673] = 202; // 'state 26' -> QUANTIFIER -> shift -> 'action 202'
actionsTable[1664] = 203; // 'state 26' -> CHARACTER -> reduce -> 'action 203'
actionsTable[1665] = 204; // 'state 26' -> CONTROL_CHARACTER -> reduce -> 'action 204'
actionsTable[1666] = 205; // 'state 26' -> BACKSLASH -> reduce -> 'action 205'
actionsTable[1667] = 206; // 'state 26' -> CARET -> reduce -> 'action 206'
actionsTable[1668] = 207; // 'state 26' -> DASH -> reduce -> 'action 207'
actionsTable[1670] = 208; // 'state 26' -> UNION -> reduce -> 'action 208'
actionsTable[1671] = 209; // 'state 26' -> PAREN_OPEN -> reduce -> 'action 209'
actionsTable[1672] = 210; // 'state 26' -> PAREN_CLOSE -> reduce -> 'action 210'
actionsTable[1674] = 211; // 'state 26' -> BRACKET_OPEN -> reduce -> 'action 211'
actionsTable[1676] = 212; // 'state 26' -> @par-gen.EOF -> reduce -> 'action 212'
actionsTable[1737] = 213; // 'state 27' -> QUANTIFIER -> shift -> 'action 213'
actionsTable[1728] = 214; // 'state 27' -> CHARACTER -> reduce -> 'action 214'
actionsTable[1729] = 215; // 'state 27' -> CONTROL_CHARACTER -> reduce -> 'action 215'
actionsTable[1730] = 216; // 'state 27' -> BACKSLASH -> reduce -> 'action 216'
actionsTable[1731] = 217; // 'state 27' -> CARET -> reduce -> 'action 217'
actionsTable[1732] = 218; // 'state 27' -> DASH -> reduce -> 'action 218'
actionsTable[1734] = 219; // 'state 27' -> UNION -> reduce -> 'action 219'
actionsTable[1735] = 220; // 'state 27' -> PAREN_OPEN -> reduce -> 'action 220'
actionsTable[1736] = 221; // 'state 27' -> PAREN_CLOSE -> reduce -> 'action 221'
actionsTable[1738] = 222; // 'state 27' -> BRACKET_OPEN -> reduce -> 'action 222'
actionsTable[1740] = 223; // 'state 27' -> @par-gen.EOF -> reduce -> 'action 223'
actionsTable[1088] = 224; // 'state 17' -> CHARACTER -> reduce -> 'action 224'
actionsTable[1089] = 225; // 'state 17' -> CONTROL_CHARACTER -> reduce -> 'action 225'
actionsTable[1090] = 226; // 'state 17' -> BACKSLASH -> reduce -> 'action 226'
actionsTable[1091] = 227; // 'state 17' -> CARET -> reduce -> 'action 227'
actionsTable[1092] = 228; // 'state 17' -> DASH -> reduce -> 'action 228'
actionsTable[1094] = 229; // 'state 17' -> UNION -> reduce -> 'action 229'
actionsTable[1095] = 230; // 'state 17' -> PAREN_OPEN -> reduce -> 'action 230'
actionsTable[1096] = 231; // 'state 17' -> PAREN_CLOSE -> reduce -> 'action 231'
actionsTable[1097] = 232; // 'state 17' -> QUANTIFIER -> reduce -> 'action 232'
actionsTable[1098] = 233; // 'state 17' -> BRACKET_OPEN -> reduce -> 'action 233'
actionsTable[1100] = 234; // 'state 17' -> @par-gen.EOF -> reduce -> 'action 234'
actionsTable[1152] = 235; // 'state 18' -> CHARACTER -> reduce -> 'action 235'
actionsTable[1153] = 236; // 'state 18' -> CONTROL_CHARACTER -> reduce -> 'action 236'
actionsTable[1154] = 237; // 'state 18' -> BACKSLASH -> reduce -> 'action 237'
actionsTable[1155] = 238; // 'state 18' -> CARET -> reduce -> 'action 238'
actionsTable[1156] = 239; // 'state 18' -> DASH -> reduce -> 'action 239'
actionsTable[1158] = 240; // 'state 18' -> UNION -> reduce -> 'action 240'
actionsTable[1159] = 241; // 'state 18' -> PAREN_OPEN -> reduce -> 'action 241'
actionsTable[1160] = 242; // 'state 18' -> PAREN_CLOSE -> reduce -> 'action 242'
actionsTable[1161] = 243; // 'state 18' -> QUANTIFIER -> reduce -> 'action 243'
actionsTable[1162] = 244; // 'state 18' -> BRACKET_OPEN -> reduce -> 'action 244'
actionsTable[1164] = 245; // 'state 18' -> @par-gen.EOF -> reduce -> 'action 245'
actionsTable[1280] = 246; // 'state 20' -> CHARACTER -> reduce -> 'action 246'
actionsTable[1281] = 247; // 'state 20' -> CONTROL_CHARACTER -> reduce -> 'action 247'
actionsTable[1282] = 248; // 'state 20' -> BACKSLASH -> reduce -> 'action 248'
actionsTable[1283] = 249; // 'state 20' -> CARET -> reduce -> 'action 249'
actionsTable[1284] = 250; // 'state 20' -> DASH -> reduce -> 'action 250'
actionsTable[1286] = 251; // 'state 20' -> UNION -> reduce -> 'action 251'
actionsTable[1287] = 252; // 'state 20' -> PAREN_OPEN -> reduce -> 'action 252'
actionsTable[1288] = 253; // 'state 20' -> PAREN_CLOSE -> reduce -> 'action 253'
actionsTable[1289] = 254; // 'state 20' -> QUANTIFIER -> reduce -> 'action 254'
actionsTable[1290] = 255; // 'state 20' -> BRACKET_OPEN -> reduce -> 'action 255'
actionsTable[1292] = 256; // 'state 20' -> @par-gen.EOF -> reduce -> 'action 256'
actionsTable[1344] = 257; // 'state 21' -> CHARACTER -> reduce -> 'action 257'
actionsTable[1345] = 258; // 'state 21' -> CONTROL_CHARACTER -> reduce -> 'action 258'
actionsTable[1346] = 259; // 'state 21' -> BACKSLASH -> reduce -> 'action 259'
actionsTable[1347] = 260; // 'state 21' -> CARET -> reduce -> 'action 260'
actionsTable[1348] = 261; // 'state 21' -> DASH -> reduce -> 'action 261'
actionsTable[1350] = 262; // 'state 21' -> UNION -> reduce -> 'action 262'
actionsTable[1351] = 263; // 'state 21' -> PAREN_OPEN -> reduce -> 'action 263'
actionsTable[1352] = 264; // 'state 21' -> PAREN_CLOSE -> reduce -> 'action 264'
actionsTable[1353] = 265; // 'state 21' -> QUANTIFIER -> reduce -> 'action 265'
actionsTable[1354] = 266; // 'state 21' -> BRACKET_OPEN -> reduce -> 'action 266'
actionsTable[1356] = 267; // 'state 21' -> @par-gen.EOF -> reduce -> 'action 267'
actionsTable[1217] = 268; // 'state 19' -> CONTROL_CHARACTER -> shift -> 'action 268'
actionsTable[1218] = 269; // 'state 19' -> BACKSLASH -> shift -> 'action 269'
actionsTable[1221] = 270; // 'state 19' -> DOT -> shift -> 'action 270'
actionsTable[1222] = 271; // 'state 19' -> UNION -> shift -> 'action 271'
actionsTable[1223] = 272; // 'state 19' -> PAREN_OPEN -> shift -> 'action 272'
actionsTable[1224] = 273; // 'state 19' -> PAREN_CLOSE -> shift -> 'action 273'
actionsTable[1225] = 274; // 'state 19' -> QUANTIFIER -> shift -> 'action 274'
actionsTable[1226] = 275; // 'state 19' -> BRACKET_OPEN -> shift -> 'action 275'
actionsTable[1227] = 276; // 'state 19' -> BRACKET_CLOSE -> shift -> 'action 276'
actionsTable[1242] = 277; // 'state 19' -> EscapedCharacter -> shift -> 'action 277'
actionsTable[1472] = 278; // 'state 23' -> CHARACTER -> shift -> 'action 278'
actionsTable[1473] = 279; // 'state 23' -> CONTROL_CHARACTER -> shift -> 'action 279'
actionsTable[1474] = 280; // 'state 23' -> BACKSLASH -> shift -> 'action 280'
actionsTable[1475] = 281; // 'state 23' -> CARET -> shift -> 'action 281'
actionsTable[1476] = 282; // 'state 23' -> DASH -> shift -> 'action 282'
actionsTable[1479] = 283; // 'state 23' -> PAREN_OPEN -> shift -> 'action 283'
actionsTable[1482] = 284; // 'state 23' -> BRACKET_OPEN -> shift -> 'action 284'
actionsTable[1489] = 285; // 'state 23' -> Union -> shift -> 'action 285'
actionsTable[1490] = 286; // 'state 23' -> Sequence -> shift -> 'action 286'
actionsTable[1491] = 287; // 'state 23' -> Atom -> shift -> 'action 287'
actionsTable[1492] = 288; // 'state 23' -> Group -> shift -> 'action 288'
actionsTable[1493] = 289; // 'state 23' -> CharacterClass -> shift -> 'action 289'
actionsTable[1497] = 290; // 'state 23' -> Character -> shift -> 'action 290'
actionsTable[1536] = 291; // 'state 24' -> CHARACTER -> shift -> 'action 291'
actionsTable[1537] = 292; // 'state 24' -> CONTROL_CHARACTER -> shift -> 'action 292'
actionsTable[1538] = 293; // 'state 24' -> BACKSLASH -> shift -> 'action 293'
actionsTable[1539] = 294; // 'state 24' -> CARET -> shift -> 'action 294'
actionsTable[1541] = 295; // 'state 24' -> DOT -> shift -> 'action 295'
actionsTable[1542] = 296; // 'state 24' -> UNION -> shift -> 'action 296'
actionsTable[1543] = 297; // 'state 24' -> PAREN_OPEN -> shift -> 'action 297'
actionsTable[1544] = 298; // 'state 24' -> PAREN_CLOSE -> shift -> 'action 298'
actionsTable[1545] = 299; // 'state 24' -> QUANTIFIER -> shift -> 'action 299'
actionsTable[1558] = 300; // 'state 24' -> CharacterClassCharacters -> shift -> 'action 300'
actionsTable[1559] = 301; // 'state 24' -> CharacterClassCharacter -> shift -> 'action 301'
actionsTable[1560] = 302; // 'state 24' -> CharacterClassRange -> shift -> 'action 302'
actionsTable[2176] = 303; // 'state 34' -> CHARACTER -> shift -> 'action 303'
actionsTable[2177] = 304; // 'state 34' -> CONTROL_CHARACTER -> shift -> 'action 304'
actionsTable[2178] = 305; // 'state 34' -> BACKSLASH -> shift -> 'action 305'
actionsTable[2179] = 306; // 'state 34' -> CARET -> shift -> 'action 306'
actionsTable[2180] = 307; // 'state 34' -> DASH -> shift -> 'action 307'
actionsTable[2183] = 308; // 'state 34' -> PAREN_OPEN -> shift -> 'action 308'
actionsTable[2186] = 309; // 'state 34' -> BRACKET_OPEN -> shift -> 'action 309'
actionsTable[2194] = 310; // 'state 34' -> Sequence -> shift -> 'action 310'
actionsTable[2195] = 311; // 'state 34' -> Atom -> shift -> 'action 311'
actionsTable[2196] = 312; // 'state 34' -> Group -> shift -> 'action 312'
actionsTable[2197] = 313; // 'state 34' -> CharacterClass -> shift -> 'action 313'
actionsTable[2201] = 314; // 'state 34' -> Character -> shift -> 'action 314'
actionsTable[2368] = 315; // 'state 37' -> CHARACTER -> reduce -> 'action 315'
actionsTable[2369] = 316; // 'state 37' -> CONTROL_CHARACTER -> reduce -> 'action 316'
actionsTable[2370] = 317; // 'state 37' -> BACKSLASH -> reduce -> 'action 317'
actionsTable[2371] = 318; // 'state 37' -> CARET -> reduce -> 'action 318'
actionsTable[2372] = 319; // 'state 37' -> DASH -> reduce -> 'action 319'
actionsTable[2374] = 320; // 'state 37' -> UNION -> reduce -> 'action 320'
actionsTable[2375] = 321; // 'state 37' -> PAREN_OPEN -> reduce -> 'action 321'
actionsTable[2376] = 322; // 'state 37' -> PAREN_CLOSE -> reduce -> 'action 322'
actionsTable[2378] = 323; // 'state 37' -> BRACKET_OPEN -> reduce -> 'action 323'
actionsTable[2380] = 324; // 'state 37' -> @par-gen.EOF -> reduce -> 'action 324'
actionsTable[2569] = 325; // 'state 40' -> QUANTIFIER -> shift -> 'action 325'
actionsTable[2560] = 326; // 'state 40' -> CHARACTER -> reduce -> 'action 326'
actionsTable[2561] = 327; // 'state 40' -> CONTROL_CHARACTER -> reduce -> 'action 327'
actionsTable[2562] = 328; // 'state 40' -> BACKSLASH -> reduce -> 'action 328'
actionsTable[2563] = 329; // 'state 40' -> CARET -> reduce -> 'action 329'
actionsTable[2564] = 330; // 'state 40' -> DASH -> reduce -> 'action 330'
actionsTable[2566] = 331; // 'state 40' -> UNION -> reduce -> 'action 331'
actionsTable[2567] = 332; // 'state 40' -> PAREN_OPEN -> reduce -> 'action 332'
actionsTable[2568] = 333; // 'state 40' -> PAREN_CLOSE -> reduce -> 'action 333'
actionsTable[2570] = 334; // 'state 40' -> BRACKET_OPEN -> reduce -> 'action 334'
actionsTable[2572] = 335; // 'state 40' -> @par-gen.EOF -> reduce -> 'action 335'
actionsTable[2441] = 336; // 'state 38' -> QUANTIFIER -> shift -> 'action 336'
actionsTable[2432] = 337; // 'state 38' -> CHARACTER -> reduce -> 'action 337'
actionsTable[2433] = 338; // 'state 38' -> CONTROL_CHARACTER -> reduce -> 'action 338'
actionsTable[2434] = 339; // 'state 38' -> BACKSLASH -> reduce -> 'action 339'
actionsTable[2435] = 340; // 'state 38' -> CARET -> reduce -> 'action 340'
actionsTable[2436] = 341; // 'state 38' -> DASH -> reduce -> 'action 341'
actionsTable[2438] = 342; // 'state 38' -> UNION -> reduce -> 'action 342'
actionsTable[2439] = 343; // 'state 38' -> PAREN_OPEN -> reduce -> 'action 343'
actionsTable[2440] = 344; // 'state 38' -> PAREN_CLOSE -> reduce -> 'action 344'
actionsTable[2442] = 345; // 'state 38' -> BRACKET_OPEN -> reduce -> 'action 345'
actionsTable[2444] = 346; // 'state 38' -> @par-gen.EOF -> reduce -> 'action 346'
actionsTable[2505] = 347; // 'state 39' -> QUANTIFIER -> shift -> 'action 347'
actionsTable[2496] = 348; // 'state 39' -> CHARACTER -> reduce -> 'action 348'
actionsTable[2497] = 349; // 'state 39' -> CONTROL_CHARACTER -> reduce -> 'action 349'
actionsTable[2498] = 350; // 'state 39' -> BACKSLASH -> reduce -> 'action 350'
actionsTable[2499] = 351; // 'state 39' -> CARET -> reduce -> 'action 351'
actionsTable[2500] = 352; // 'state 39' -> DASH -> reduce -> 'action 352'
actionsTable[2502] = 353; // 'state 39' -> UNION -> reduce -> 'action 353'
actionsTable[2503] = 354; // 'state 39' -> PAREN_OPEN -> reduce -> 'action 354'
actionsTable[2504] = 355; // 'state 39' -> PAREN_CLOSE -> reduce -> 'action 355'
actionsTable[2506] = 356; // 'state 39' -> BRACKET_OPEN -> reduce -> 'action 356'
actionsTable[2508] = 357; // 'state 39' -> @par-gen.EOF -> reduce -> 'action 357'
actionsTable[1856] = 358; // 'state 29' -> CHARACTER -> reduce -> 'action 358'
actionsTable[1857] = 359; // 'state 29' -> CONTROL_CHARACTER -> reduce -> 'action 359'
actionsTable[1858] = 360; // 'state 29' -> BACKSLASH -> reduce -> 'action 360'
actionsTable[1859] = 361; // 'state 29' -> CARET -> reduce -> 'action 361'
actionsTable[1860] = 362; // 'state 29' -> DASH -> reduce -> 'action 362'
actionsTable[1862] = 363; // 'state 29' -> UNION -> reduce -> 'action 363'
actionsTable[1863] = 364; // 'state 29' -> PAREN_OPEN -> reduce -> 'action 364'
actionsTable[1864] = 365; // 'state 29' -> PAREN_CLOSE -> reduce -> 'action 365'
actionsTable[1865] = 366; // 'state 29' -> QUANTIFIER -> reduce -> 'action 366'
actionsTable[1866] = 367; // 'state 29' -> BRACKET_OPEN -> reduce -> 'action 367'
actionsTable[1868] = 368; // 'state 29' -> @par-gen.EOF -> reduce -> 'action 368'
actionsTable[1920] = 369; // 'state 30' -> CHARACTER -> reduce -> 'action 369'
actionsTable[1921] = 370; // 'state 30' -> CONTROL_CHARACTER -> reduce -> 'action 370'
actionsTable[1922] = 371; // 'state 30' -> BACKSLASH -> reduce -> 'action 371'
actionsTable[1923] = 372; // 'state 30' -> CARET -> reduce -> 'action 372'
actionsTable[1924] = 373; // 'state 30' -> DASH -> reduce -> 'action 373'
actionsTable[1926] = 374; // 'state 30' -> UNION -> reduce -> 'action 374'
actionsTable[1927] = 375; // 'state 30' -> PAREN_OPEN -> reduce -> 'action 375'
actionsTable[1928] = 376; // 'state 30' -> PAREN_CLOSE -> reduce -> 'action 376'
actionsTable[1929] = 377; // 'state 30' -> QUANTIFIER -> reduce -> 'action 377'
actionsTable[1930] = 378; // 'state 30' -> BRACKET_OPEN -> reduce -> 'action 378'
actionsTable[1932] = 379; // 'state 30' -> @par-gen.EOF -> reduce -> 'action 379'
actionsTable[2048] = 380; // 'state 32' -> CHARACTER -> reduce -> 'action 380'
actionsTable[2049] = 381; // 'state 32' -> CONTROL_CHARACTER -> reduce -> 'action 381'
actionsTable[2050] = 382; // 'state 32' -> BACKSLASH -> reduce -> 'action 382'
actionsTable[2051] = 383; // 'state 32' -> CARET -> reduce -> 'action 383'
actionsTable[2052] = 384; // 'state 32' -> DASH -> reduce -> 'action 384'
actionsTable[2054] = 385; // 'state 32' -> UNION -> reduce -> 'action 385'
actionsTable[2055] = 386; // 'state 32' -> PAREN_OPEN -> reduce -> 'action 386'
actionsTable[2056] = 387; // 'state 32' -> PAREN_CLOSE -> reduce -> 'action 387'
actionsTable[2057] = 388; // 'state 32' -> QUANTIFIER -> reduce -> 'action 388'
actionsTable[2058] = 389; // 'state 32' -> BRACKET_OPEN -> reduce -> 'action 389'
actionsTable[2060] = 390; // 'state 32' -> @par-gen.EOF -> reduce -> 'action 390'
actionsTable[2112] = 391; // 'state 33' -> CHARACTER -> reduce -> 'action 391'
actionsTable[2113] = 392; // 'state 33' -> CONTROL_CHARACTER -> reduce -> 'action 392'
actionsTable[2114] = 393; // 'state 33' -> BACKSLASH -> reduce -> 'action 393'
actionsTable[2115] = 394; // 'state 33' -> CARET -> reduce -> 'action 394'
actionsTable[2116] = 395; // 'state 33' -> DASH -> reduce -> 'action 395'
actionsTable[2118] = 396; // 'state 33' -> UNION -> reduce -> 'action 396'
actionsTable[2119] = 397; // 'state 33' -> PAREN_OPEN -> reduce -> 'action 397'
actionsTable[2120] = 398; // 'state 33' -> PAREN_CLOSE -> reduce -> 'action 398'
actionsTable[2121] = 399; // 'state 33' -> QUANTIFIER -> reduce -> 'action 399'
actionsTable[2122] = 400; // 'state 33' -> BRACKET_OPEN -> reduce -> 'action 400'
actionsTable[2124] = 401; // 'state 33' -> @par-gen.EOF -> reduce -> 'action 401'
actionsTable[1985] = 402; // 'state 31' -> CONTROL_CHARACTER -> shift -> 'action 402'
actionsTable[1986] = 403; // 'state 31' -> BACKSLASH -> shift -> 'action 403'
actionsTable[1989] = 404; // 'state 31' -> DOT -> shift -> 'action 404'
actionsTable[1990] = 405; // 'state 31' -> UNION -> shift -> 'action 405'
actionsTable[1991] = 406; // 'state 31' -> PAREN_OPEN -> shift -> 'action 406'
actionsTable[1992] = 407; // 'state 31' -> PAREN_CLOSE -> shift -> 'action 407'
actionsTable[1993] = 408; // 'state 31' -> QUANTIFIER -> shift -> 'action 408'
actionsTable[1994] = 409; // 'state 31' -> BRACKET_OPEN -> shift -> 'action 409'
actionsTable[1995] = 410; // 'state 31' -> BRACKET_CLOSE -> shift -> 'action 410'
actionsTable[2010] = 411; // 'state 31' -> EscapedCharacter -> shift -> 'action 411'
actionsTable[2240] = 412; // 'state 35' -> CHARACTER -> shift -> 'action 412'
actionsTable[2241] = 413; // 'state 35' -> CONTROL_CHARACTER -> shift -> 'action 413'
actionsTable[2242] = 414; // 'state 35' -> BACKSLASH -> shift -> 'action 414'
actionsTable[2243] = 415; // 'state 35' -> CARET -> shift -> 'action 415'
actionsTable[2244] = 416; // 'state 35' -> DASH -> shift -> 'action 416'
actionsTable[2247] = 417; // 'state 35' -> PAREN_OPEN -> shift -> 'action 417'
actionsTable[2250] = 418; // 'state 35' -> BRACKET_OPEN -> shift -> 'action 418'
actionsTable[2257] = 419; // 'state 35' -> Union -> shift -> 'action 419'
actionsTable[2258] = 420; // 'state 35' -> Sequence -> shift -> 'action 420'
actionsTable[2259] = 421; // 'state 35' -> Atom -> shift -> 'action 421'
actionsTable[2260] = 422; // 'state 35' -> Group -> shift -> 'action 422'
actionsTable[2261] = 423; // 'state 35' -> CharacterClass -> shift -> 'action 423'
actionsTable[2265] = 424; // 'state 35' -> Character -> shift -> 'action 424'
actionsTable[2304] = 425; // 'state 36' -> CHARACTER -> shift -> 'action 425'
actionsTable[2305] = 426; // 'state 36' -> CONTROL_CHARACTER -> shift -> 'action 426'
actionsTable[2306] = 427; // 'state 36' -> BACKSLASH -> shift -> 'action 427'
actionsTable[2307] = 428; // 'state 36' -> CARET -> shift -> 'action 428'
actionsTable[2309] = 429; // 'state 36' -> DOT -> shift -> 'action 429'
actionsTable[2310] = 430; // 'state 36' -> UNION -> shift -> 'action 430'
actionsTable[2311] = 431; // 'state 36' -> PAREN_OPEN -> shift -> 'action 431'
actionsTable[2312] = 432; // 'state 36' -> PAREN_CLOSE -> shift -> 'action 432'
actionsTable[2313] = 433; // 'state 36' -> QUANTIFIER -> shift -> 'action 433'
actionsTable[2326] = 434; // 'state 36' -> CharacterClassCharacters -> shift -> 'action 434'
actionsTable[2327] = 435; // 'state 36' -> CharacterClassCharacter -> shift -> 'action 435'
actionsTable[2328] = 436; // 'state 36' -> CharacterClassRange -> shift -> 'action 436'
actionsTable[2624] = 437; // 'state 41' -> CHARACTER -> reduce -> 'action 437'
actionsTable[2625] = 438; // 'state 41' -> CONTROL_CHARACTER -> reduce -> 'action 438'
actionsTable[2626] = 439; // 'state 41' -> BACKSLASH -> reduce -> 'action 439'
actionsTable[2627] = 440; // 'state 41' -> CARET -> reduce -> 'action 440'
actionsTable[2628] = 441; // 'state 41' -> DASH -> reduce -> 'action 441'
actionsTable[2630] = 442; // 'state 41' -> UNION -> reduce -> 'action 442'
actionsTable[2631] = 443; // 'state 41' -> PAREN_OPEN -> reduce -> 'action 443'
actionsTable[2632] = 444; // 'state 41' -> PAREN_CLOSE -> reduce -> 'action 444'
actionsTable[2634] = 445; // 'state 41' -> BRACKET_OPEN -> reduce -> 'action 445'
actionsTable[2636] = 446; // 'state 41' -> @par-gen.EOF -> reduce -> 'action 446'
actionsTable[2688] = 447; // 'state 42' -> CHARACTER -> reduce -> 'action 447'
actionsTable[2689] = 448; // 'state 42' -> CONTROL_CHARACTER -> reduce -> 'action 448'
actionsTable[2690] = 449; // 'state 42' -> BACKSLASH -> reduce -> 'action 449'
actionsTable[2691] = 450; // 'state 42' -> CARET -> reduce -> 'action 450'
actionsTable[2692] = 451; // 'state 42' -> DASH -> reduce -> 'action 451'
actionsTable[2694] = 452; // 'state 42' -> UNION -> reduce -> 'action 452'
actionsTable[2695] = 453; // 'state 42' -> PAREN_OPEN -> reduce -> 'action 453'
actionsTable[2696] = 454; // 'state 42' -> PAREN_CLOSE -> reduce -> 'action 454'
actionsTable[2698] = 455; // 'state 42' -> BRACKET_OPEN -> reduce -> 'action 455'
actionsTable[2700] = 456; // 'state 42' -> @par-gen.EOF -> reduce -> 'action 456'
actionsTable[2752] = 457; // 'state 43' -> CHARACTER -> reduce -> 'action 457'
actionsTable[2753] = 458; // 'state 43' -> CONTROL_CHARACTER -> reduce -> 'action 458'
actionsTable[2754] = 459; // 'state 43' -> BACKSLASH -> reduce -> 'action 459'
actionsTable[2755] = 460; // 'state 43' -> CARET -> reduce -> 'action 460'
actionsTable[2756] = 461; // 'state 43' -> DASH -> reduce -> 'action 461'
actionsTable[2758] = 462; // 'state 43' -> UNION -> reduce -> 'action 462'
actionsTable[2759] = 463; // 'state 43' -> PAREN_OPEN -> reduce -> 'action 463'
actionsTable[2760] = 464; // 'state 43' -> PAREN_CLOSE -> reduce -> 'action 464'
actionsTable[2762] = 465; // 'state 43' -> BRACKET_OPEN -> reduce -> 'action 465'
actionsTable[2764] = 466; // 'state 43' -> @par-gen.EOF -> reduce -> 'action 466'
actionsTable[3392] = 467; // 'state 53' -> CHARACTER -> reduce -> 'action 467'
actionsTable[3393] = 468; // 'state 53' -> CONTROL_CHARACTER -> reduce -> 'action 468'
actionsTable[3394] = 469; // 'state 53' -> BACKSLASH -> reduce -> 'action 469'
actionsTable[3395] = 470; // 'state 53' -> CARET -> reduce -> 'action 470'
actionsTable[3396] = 471; // 'state 53' -> DASH -> reduce -> 'action 471'
actionsTable[3398] = 472; // 'state 53' -> UNION -> reduce -> 'action 472'
actionsTable[3399] = 473; // 'state 53' -> PAREN_OPEN -> reduce -> 'action 473'
actionsTable[3400] = 474; // 'state 53' -> PAREN_CLOSE -> reduce -> 'action 474'
actionsTable[3401] = 475; // 'state 53' -> QUANTIFIER -> reduce -> 'action 475'
actionsTable[3402] = 476; // 'state 53' -> BRACKET_OPEN -> reduce -> 'action 476'
actionsTable[3404] = 477; // 'state 53' -> @par-gen.EOF -> reduce -> 'action 477'
actionsTable[2816] = 478; // 'state 44' -> CHARACTER -> reduce -> 'action 478'
actionsTable[2817] = 479; // 'state 44' -> CONTROL_CHARACTER -> reduce -> 'action 479'
actionsTable[2818] = 480; // 'state 44' -> BACKSLASH -> reduce -> 'action 480'
actionsTable[2819] = 481; // 'state 44' -> CARET -> reduce -> 'action 481'
actionsTable[2820] = 482; // 'state 44' -> DASH -> reduce -> 'action 482'
actionsTable[2822] = 483; // 'state 44' -> UNION -> reduce -> 'action 483'
actionsTable[2823] = 484; // 'state 44' -> PAREN_OPEN -> reduce -> 'action 484'
actionsTable[2824] = 485; // 'state 44' -> PAREN_CLOSE -> reduce -> 'action 485'
actionsTable[2825] = 486; // 'state 44' -> QUANTIFIER -> reduce -> 'action 486'
actionsTable[2826] = 487; // 'state 44' -> BRACKET_OPEN -> reduce -> 'action 487'
actionsTable[2828] = 488; // 'state 44' -> @par-gen.EOF -> reduce -> 'action 488'
actionsTable[2880] = 489; // 'state 45' -> CHARACTER -> reduce -> 'action 489'
actionsTable[2881] = 490; // 'state 45' -> CONTROL_CHARACTER -> reduce -> 'action 490'
actionsTable[2882] = 491; // 'state 45' -> BACKSLASH -> reduce -> 'action 491'
actionsTable[2883] = 492; // 'state 45' -> CARET -> reduce -> 'action 492'
actionsTable[2884] = 493; // 'state 45' -> DASH -> reduce -> 'action 493'
actionsTable[2886] = 494; // 'state 45' -> UNION -> reduce -> 'action 494'
actionsTable[2887] = 495; // 'state 45' -> PAREN_OPEN -> reduce -> 'action 495'
actionsTable[2888] = 496; // 'state 45' -> PAREN_CLOSE -> reduce -> 'action 496'
actionsTable[2889] = 497; // 'state 45' -> QUANTIFIER -> reduce -> 'action 497'
actionsTable[2890] = 498; // 'state 45' -> BRACKET_OPEN -> reduce -> 'action 498'
actionsTable[2892] = 499; // 'state 45' -> @par-gen.EOF -> reduce -> 'action 499'
actionsTable[2944] = 500; // 'state 46' -> CHARACTER -> reduce -> 'action 500'
actionsTable[2945] = 501; // 'state 46' -> CONTROL_CHARACTER -> reduce -> 'action 501'
actionsTable[2946] = 502; // 'state 46' -> BACKSLASH -> reduce -> 'action 502'
actionsTable[2947] = 503; // 'state 46' -> CARET -> reduce -> 'action 503'
actionsTable[2948] = 504; // 'state 46' -> DASH -> reduce -> 'action 504'
actionsTable[2950] = 505; // 'state 46' -> UNION -> reduce -> 'action 505'
actionsTable[2951] = 506; // 'state 46' -> PAREN_OPEN -> reduce -> 'action 506'
actionsTable[2952] = 507; // 'state 46' -> PAREN_CLOSE -> reduce -> 'action 507'
actionsTable[2953] = 508; // 'state 46' -> QUANTIFIER -> reduce -> 'action 508'
actionsTable[2954] = 509; // 'state 46' -> BRACKET_OPEN -> reduce -> 'action 509'
actionsTable[2956] = 510; // 'state 46' -> @par-gen.EOF -> reduce -> 'action 510'
actionsTable[3008] = 511; // 'state 47' -> CHARACTER -> reduce -> 'action 511'
actionsTable[3009] = 512; // 'state 47' -> CONTROL_CHARACTER -> reduce -> 'action 512'
actionsTable[3010] = 513; // 'state 47' -> BACKSLASH -> reduce -> 'action 513'
actionsTable[3011] = 514; // 'state 47' -> CARET -> reduce -> 'action 514'
actionsTable[3012] = 515; // 'state 47' -> DASH -> reduce -> 'action 515'
actionsTable[3014] = 516; // 'state 47' -> UNION -> reduce -> 'action 516'
actionsTable[3015] = 517; // 'state 47' -> PAREN_OPEN -> reduce -> 'action 517'
actionsTable[3016] = 518; // 'state 47' -> PAREN_CLOSE -> reduce -> 'action 518'
actionsTable[3017] = 519; // 'state 47' -> QUANTIFIER -> reduce -> 'action 519'
actionsTable[3018] = 520; // 'state 47' -> BRACKET_OPEN -> reduce -> 'action 520'
actionsTable[3020] = 521; // 'state 47' -> @par-gen.EOF -> reduce -> 'action 521'
actionsTable[3072] = 522; // 'state 48' -> CHARACTER -> reduce -> 'action 522'
actionsTable[3073] = 523; // 'state 48' -> CONTROL_CHARACTER -> reduce -> 'action 523'
actionsTable[3074] = 524; // 'state 48' -> BACKSLASH -> reduce -> 'action 524'
actionsTable[3075] = 525; // 'state 48' -> CARET -> reduce -> 'action 525'
actionsTable[3076] = 526; // 'state 48' -> DASH -> reduce -> 'action 526'
actionsTable[3078] = 527; // 'state 48' -> UNION -> reduce -> 'action 527'
actionsTable[3079] = 528; // 'state 48' -> PAREN_OPEN -> reduce -> 'action 528'
actionsTable[3080] = 529; // 'state 48' -> PAREN_CLOSE -> reduce -> 'action 529'
actionsTable[3081] = 530; // 'state 48' -> QUANTIFIER -> reduce -> 'action 530'
actionsTable[3082] = 531; // 'state 48' -> BRACKET_OPEN -> reduce -> 'action 531'
actionsTable[3084] = 532; // 'state 48' -> @par-gen.EOF -> reduce -> 'action 532'
actionsTable[3136] = 533; // 'state 49' -> CHARACTER -> reduce -> 'action 533'
actionsTable[3137] = 534; // 'state 49' -> CONTROL_CHARACTER -> reduce -> 'action 534'
actionsTable[3138] = 535; // 'state 49' -> BACKSLASH -> reduce -> 'action 535'
actionsTable[3139] = 536; // 'state 49' -> CARET -> reduce -> 'action 536'
actionsTable[3140] = 537; // 'state 49' -> DASH -> reduce -> 'action 537'
actionsTable[3142] = 538; // 'state 49' -> UNION -> reduce -> 'action 538'
actionsTable[3143] = 539; // 'state 49' -> PAREN_OPEN -> reduce -> 'action 539'
actionsTable[3144] = 540; // 'state 49' -> PAREN_CLOSE -> reduce -> 'action 540'
actionsTable[3145] = 541; // 'state 49' -> QUANTIFIER -> reduce -> 'action 541'
actionsTable[3146] = 542; // 'state 49' -> BRACKET_OPEN -> reduce -> 'action 542'
actionsTable[3148] = 543; // 'state 49' -> @par-gen.EOF -> reduce -> 'action 543'
actionsTable[3264] = 544; // 'state 51' -> CHARACTER -> reduce -> 'action 544'
actionsTable[3265] = 545; // 'state 51' -> CONTROL_CHARACTER -> reduce -> 'action 545'
actionsTable[3266] = 546; // 'state 51' -> BACKSLASH -> reduce -> 'action 546'
actionsTable[3267] = 547; // 'state 51' -> CARET -> reduce -> 'action 547'
actionsTable[3268] = 548; // 'state 51' -> DASH -> reduce -> 'action 548'
actionsTable[3270] = 549; // 'state 51' -> UNION -> reduce -> 'action 549'
actionsTable[3271] = 550; // 'state 51' -> PAREN_OPEN -> reduce -> 'action 550'
actionsTable[3272] = 551; // 'state 51' -> PAREN_CLOSE -> reduce -> 'action 551'
actionsTable[3273] = 552; // 'state 51' -> QUANTIFIER -> reduce -> 'action 552'
actionsTable[3274] = 553; // 'state 51' -> BRACKET_OPEN -> reduce -> 'action 553'
actionsTable[3276] = 554; // 'state 51' -> @par-gen.EOF -> reduce -> 'action 554'
actionsTable[3328] = 555; // 'state 52' -> CHARACTER -> reduce -> 'action 555'
actionsTable[3329] = 556; // 'state 52' -> CONTROL_CHARACTER -> reduce -> 'action 556'
actionsTable[3330] = 557; // 'state 52' -> BACKSLASH -> reduce -> 'action 557'
actionsTable[3331] = 558; // 'state 52' -> CARET -> reduce -> 'action 558'
actionsTable[3332] = 559; // 'state 52' -> DASH -> reduce -> 'action 559'
actionsTable[3334] = 560; // 'state 52' -> UNION -> reduce -> 'action 560'
actionsTable[3335] = 561; // 'state 52' -> PAREN_OPEN -> reduce -> 'action 561'
actionsTable[3336] = 562; // 'state 52' -> PAREN_CLOSE -> reduce -> 'action 562'
actionsTable[3337] = 563; // 'state 52' -> QUANTIFIER -> reduce -> 'action 563'
actionsTable[3338] = 564; // 'state 52' -> BRACKET_OPEN -> reduce -> 'action 564'
actionsTable[3340] = 565; // 'state 52' -> @par-gen.EOF -> reduce -> 'action 565'
actionsTable[3200] = 566; // 'state 50' -> CHARACTER -> reduce -> 'action 566'
actionsTable[3201] = 567; // 'state 50' -> CONTROL_CHARACTER -> reduce -> 'action 567'
actionsTable[3202] = 568; // 'state 50' -> BACKSLASH -> reduce -> 'action 568'
actionsTable[3203] = 569; // 'state 50' -> CARET -> reduce -> 'action 569'
actionsTable[3204] = 570; // 'state 50' -> DASH -> reduce -> 'action 570'
actionsTable[3206] = 571; // 'state 50' -> UNION -> reduce -> 'action 571'
actionsTable[3207] = 572; // 'state 50' -> PAREN_OPEN -> reduce -> 'action 572'
actionsTable[3208] = 573; // 'state 50' -> PAREN_CLOSE -> reduce -> 'action 573'
actionsTable[3209] = 574; // 'state 50' -> QUANTIFIER -> reduce -> 'action 574'
actionsTable[3210] = 575; // 'state 50' -> BRACKET_OPEN -> reduce -> 'action 575'
actionsTable[3212] = 576; // 'state 50' -> @par-gen.EOF -> reduce -> 'action 576'
actionsTable[3526] = 577; // 'state 55' -> UNION -> shift -> 'action 577'
actionsTable[3528] = 578; // 'state 55' -> PAREN_CLOSE -> shift -> 'action 578'
actionsTable[3584] = 579; // 'state 56' -> CHARACTER -> shift -> 'action 579'
actionsTable[3585] = 580; // 'state 56' -> CONTROL_CHARACTER -> shift -> 'action 580'
actionsTable[3586] = 581; // 'state 56' -> BACKSLASH -> shift -> 'action 581'
actionsTable[3587] = 582; // 'state 56' -> CARET -> shift -> 'action 582'
actionsTable[3588] = 583; // 'state 56' -> DASH -> shift -> 'action 583'
actionsTable[3590] = 584; // 'state 56' -> UNION -> shift -> 'action 584'
actionsTable[3591] = 585; // 'state 56' -> PAREN_OPEN -> shift -> 'action 585'
actionsTable[3592] = 586; // 'state 56' -> PAREN_CLOSE -> shift -> 'action 586'
actionsTable[3594] = 587; // 'state 56' -> BRACKET_OPEN -> shift -> 'action 587'
actionsTable[3603] = 588; // 'state 56' -> Atom -> shift -> 'action 588'
actionsTable[3604] = 589; // 'state 56' -> Group -> shift -> 'action 589'
actionsTable[3605] = 590; // 'state 56' -> CharacterClass -> shift -> 'action 590'
actionsTable[3609] = 591; // 'state 56' -> Character -> shift -> 'action 591'
actionsTable[3648] = 592; // 'state 57' -> CHARACTER -> shift -> 'action 592'
actionsTable[3649] = 593; // 'state 57' -> CONTROL_CHARACTER -> shift -> 'action 593'
actionsTable[3650] = 594; // 'state 57' -> BACKSLASH -> shift -> 'action 594'
actionsTable[3651] = 595; // 'state 57' -> CARET -> shift -> 'action 595'
actionsTable[3652] = 596; // 'state 57' -> DASH -> shift -> 'action 596'
actionsTable[3654] = 597; // 'state 57' -> UNION -> shift -> 'action 597'
actionsTable[3655] = 598; // 'state 57' -> PAREN_OPEN -> shift -> 'action 598'
actionsTable[3656] = 599; // 'state 57' -> PAREN_CLOSE -> shift -> 'action 599'
actionsTable[3658] = 600; // 'state 57' -> BRACKET_OPEN -> shift -> 'action 600'
actionsTable[3667] = 601; // 'state 57' -> Atom -> shift -> 'action 601'
actionsTable[3668] = 602; // 'state 57' -> Group -> shift -> 'action 602'
actionsTable[3669] = 603; // 'state 57' -> CharacterClass -> shift -> 'action 603'
actionsTable[3673] = 604; // 'state 57' -> Character -> shift -> 'action 604'
actionsTable[3456] = 605; // 'state 54' -> CHARACTER -> shift -> 'action 605'
actionsTable[3457] = 606; // 'state 54' -> CONTROL_CHARACTER -> shift -> 'action 606'
actionsTable[3458] = 607; // 'state 54' -> BACKSLASH -> shift -> 'action 607'
actionsTable[3459] = 608; // 'state 54' -> CARET -> shift -> 'action 608'
actionsTable[3461] = 609; // 'state 54' -> DOT -> shift -> 'action 609'
actionsTable[3462] = 610; // 'state 54' -> UNION -> shift -> 'action 610'
actionsTable[3463] = 611; // 'state 54' -> PAREN_OPEN -> shift -> 'action 611'
actionsTable[3464] = 612; // 'state 54' -> PAREN_CLOSE -> shift -> 'action 612'
actionsTable[3465] = 613; // 'state 54' -> QUANTIFIER -> shift -> 'action 613'
actionsTable[3478] = 614; // 'state 54' -> CharacterClassCharacters -> shift -> 'action 614'
actionsTable[3479] = 615; // 'state 54' -> CharacterClassCharacter -> shift -> 'action 615'
actionsTable[3480] = 616; // 'state 54' -> CharacterClassRange -> shift -> 'action 616'
actionsTable[4288] = 617; // 'state 67' -> CHARACTER -> shift -> 'action 617'
actionsTable[4289] = 618; // 'state 67' -> CONTROL_CHARACTER -> shift -> 'action 618'
actionsTable[4290] = 619; // 'state 67' -> BACKSLASH -> shift -> 'action 619'
actionsTable[4293] = 620; // 'state 67' -> DOT -> shift -> 'action 620'
actionsTable[4294] = 621; // 'state 67' -> UNION -> shift -> 'action 621'
actionsTable[4295] = 622; // 'state 67' -> PAREN_OPEN -> shift -> 'action 622'
actionsTable[4296] = 623; // 'state 67' -> PAREN_CLOSE -> shift -> 'action 623'
actionsTable[4297] = 624; // 'state 67' -> QUANTIFIER -> shift -> 'action 624'
actionsTable[4299] = 625; // 'state 67' -> BRACKET_CLOSE -> shift -> 'action 625'
actionsTable[4311] = 626; // 'state 67' -> CharacterClassCharacter -> shift -> 'action 626'
actionsTable[4312] = 627; // 'state 67' -> CharacterClassRange -> shift -> 'action 627'
actionsTable[4352] = 628; // 'state 68' -> CHARACTER -> reduce -> 'action 628'
actionsTable[4353] = 629; // 'state 68' -> CONTROL_CHARACTER -> reduce -> 'action 629'
actionsTable[4354] = 630; // 'state 68' -> BACKSLASH -> reduce -> 'action 630'
actionsTable[4357] = 631; // 'state 68' -> DOT -> reduce -> 'action 631'
actionsTable[4358] = 632; // 'state 68' -> UNION -> reduce -> 'action 632'
actionsTable[4359] = 633; // 'state 68' -> PAREN_OPEN -> reduce -> 'action 633'
actionsTable[4360] = 634; // 'state 68' -> PAREN_CLOSE -> reduce -> 'action 634'
actionsTable[4361] = 635; // 'state 68' -> QUANTIFIER -> reduce -> 'action 635'
actionsTable[4363] = 636; // 'state 68' -> BRACKET_CLOSE -> reduce -> 'action 636'
actionsTable[3716] = 637; // 'state 58' -> DASH -> shift -> 'action 637'
actionsTable[3712] = 638; // 'state 58' -> CHARACTER -> reduce -> 'action 638'
actionsTable[3713] = 639; // 'state 58' -> CONTROL_CHARACTER -> reduce -> 'action 639'
actionsTable[3714] = 640; // 'state 58' -> BACKSLASH -> reduce -> 'action 640'
actionsTable[3717] = 641; // 'state 58' -> DOT -> reduce -> 'action 641'
actionsTable[3718] = 642; // 'state 58' -> UNION -> reduce -> 'action 642'
actionsTable[3719] = 643; // 'state 58' -> PAREN_OPEN -> reduce -> 'action 643'
actionsTable[3720] = 644; // 'state 58' -> PAREN_CLOSE -> reduce -> 'action 644'
actionsTable[3721] = 645; // 'state 58' -> QUANTIFIER -> reduce -> 'action 645'
actionsTable[3723] = 646; // 'state 58' -> BRACKET_CLOSE -> reduce -> 'action 646'
actionsTable[3776] = 647; // 'state 59' -> CHARACTER -> reduce -> 'action 647'
actionsTable[3777] = 648; // 'state 59' -> CONTROL_CHARACTER -> reduce -> 'action 648'
actionsTable[3778] = 649; // 'state 59' -> BACKSLASH -> reduce -> 'action 649'
actionsTable[3781] = 650; // 'state 59' -> DOT -> reduce -> 'action 650'
actionsTable[3782] = 651; // 'state 59' -> UNION -> reduce -> 'action 651'
actionsTable[3783] = 652; // 'state 59' -> PAREN_OPEN -> reduce -> 'action 652'
actionsTable[3784] = 653; // 'state 59' -> PAREN_CLOSE -> reduce -> 'action 653'
actionsTable[3785] = 654; // 'state 59' -> QUANTIFIER -> reduce -> 'action 654'
actionsTable[3787] = 655; // 'state 59' -> BRACKET_CLOSE -> reduce -> 'action 655'
actionsTable[3841] = 656; // 'state 60' -> CONTROL_CHARACTER -> shift -> 'action 656'
actionsTable[3842] = 657; // 'state 60' -> BACKSLASH -> shift -> 'action 657'
actionsTable[3843] = 658; // 'state 60' -> CARET -> shift -> 'action 658'
actionsTable[3844] = 659; // 'state 60' -> DASH -> shift -> 'action 659'
actionsTable[3851] = 660; // 'state 60' -> BRACKET_CLOSE -> shift -> 'action 660'
actionsTable[4224] = 661; // 'state 66' -> CHARACTER -> reduce -> 'action 661'
actionsTable[4225] = 662; // 'state 66' -> CONTROL_CHARACTER -> reduce -> 'action 662'
actionsTable[4226] = 663; // 'state 66' -> BACKSLASH -> reduce -> 'action 663'
actionsTable[4229] = 664; // 'state 66' -> DOT -> reduce -> 'action 664'
actionsTable[4230] = 665; // 'state 66' -> UNION -> reduce -> 'action 665'
actionsTable[4231] = 666; // 'state 66' -> PAREN_OPEN -> reduce -> 'action 666'
actionsTable[4232] = 667; // 'state 66' -> PAREN_CLOSE -> reduce -> 'action 667'
actionsTable[4233] = 668; // 'state 66' -> QUANTIFIER -> reduce -> 'action 668'
actionsTable[4235] = 669; // 'state 66' -> BRACKET_CLOSE -> reduce -> 'action 669'
actionsTable[4096] = 670; // 'state 64' -> CHARACTER -> reduce -> 'action 670'
actionsTable[4097] = 671; // 'state 64' -> CONTROL_CHARACTER -> reduce -> 'action 671'
actionsTable[4098] = 672; // 'state 64' -> BACKSLASH -> reduce -> 'action 672'
actionsTable[4101] = 673; // 'state 64' -> DOT -> reduce -> 'action 673'
actionsTable[4102] = 674; // 'state 64' -> UNION -> reduce -> 'action 674'
actionsTable[4103] = 675; // 'state 64' -> PAREN_OPEN -> reduce -> 'action 675'
actionsTable[4104] = 676; // 'state 64' -> PAREN_CLOSE -> reduce -> 'action 676'
actionsTable[4105] = 677; // 'state 64' -> QUANTIFIER -> reduce -> 'action 677'
actionsTable[4107] = 678; // 'state 64' -> BRACKET_CLOSE -> reduce -> 'action 678'
actionsTable[4160] = 679; // 'state 65' -> CHARACTER -> reduce -> 'action 679'
actionsTable[4161] = 680; // 'state 65' -> CONTROL_CHARACTER -> reduce -> 'action 680'
actionsTable[4162] = 681; // 'state 65' -> BACKSLASH -> reduce -> 'action 681'
actionsTable[4165] = 682; // 'state 65' -> DOT -> reduce -> 'action 682'
actionsTable[4166] = 683; // 'state 65' -> UNION -> reduce -> 'action 683'
actionsTable[4167] = 684; // 'state 65' -> PAREN_OPEN -> reduce -> 'action 684'
actionsTable[4168] = 685; // 'state 65' -> PAREN_CLOSE -> reduce -> 'action 685'
actionsTable[4169] = 686; // 'state 65' -> QUANTIFIER -> reduce -> 'action 686'
actionsTable[4171] = 687; // 'state 65' -> BRACKET_CLOSE -> reduce -> 'action 687'
actionsTable[4032] = 688; // 'state 63' -> CHARACTER -> reduce -> 'action 688'
actionsTable[4033] = 689; // 'state 63' -> CONTROL_CHARACTER -> reduce -> 'action 689'
actionsTable[4034] = 690; // 'state 63' -> BACKSLASH -> reduce -> 'action 690'
actionsTable[4037] = 691; // 'state 63' -> DOT -> reduce -> 'action 691'
actionsTable[4038] = 692; // 'state 63' -> UNION -> reduce -> 'action 692'
actionsTable[4039] = 693; // 'state 63' -> PAREN_OPEN -> reduce -> 'action 693'
actionsTable[4040] = 694; // 'state 63' -> PAREN_CLOSE -> reduce -> 'action 694'
actionsTable[4041] = 695; // 'state 63' -> QUANTIFIER -> reduce -> 'action 695'
actionsTable[4043] = 696; // 'state 63' -> BRACKET_CLOSE -> reduce -> 'action 696'
actionsTable[3968] = 697; // 'state 62' -> CHARACTER -> reduce -> 'action 697'
actionsTable[3969] = 698; // 'state 62' -> CONTROL_CHARACTER -> reduce -> 'action 698'
actionsTable[3970] = 699; // 'state 62' -> BACKSLASH -> reduce -> 'action 699'
actionsTable[3973] = 700; // 'state 62' -> DOT -> reduce -> 'action 700'
actionsTable[3974] = 701; // 'state 62' -> UNION -> reduce -> 'action 701'
actionsTable[3975] = 702; // 'state 62' -> PAREN_OPEN -> reduce -> 'action 702'
actionsTable[3976] = 703; // 'state 62' -> PAREN_CLOSE -> reduce -> 'action 703'
actionsTable[3977] = 704; // 'state 62' -> QUANTIFIER -> reduce -> 'action 704'
actionsTable[3979] = 705; // 'state 62' -> BRACKET_CLOSE -> reduce -> 'action 705'
actionsTable[4416] = 706; // 'state 69' -> CHARACTER -> reduce -> 'action 706'
actionsTable[4417] = 707; // 'state 69' -> CONTROL_CHARACTER -> reduce -> 'action 707'
actionsTable[4418] = 708; // 'state 69' -> BACKSLASH -> reduce -> 'action 708'
actionsTable[4421] = 709; // 'state 69' -> DOT -> reduce -> 'action 709'
actionsTable[4422] = 710; // 'state 69' -> UNION -> reduce -> 'action 710'
actionsTable[4423] = 711; // 'state 69' -> PAREN_OPEN -> reduce -> 'action 711'
actionsTable[4424] = 712; // 'state 69' -> PAREN_CLOSE -> reduce -> 'action 712'
actionsTable[4425] = 713; // 'state 69' -> QUANTIFIER -> reduce -> 'action 713'
actionsTable[4427] = 714; // 'state 69' -> BRACKET_CLOSE -> reduce -> 'action 714'
actionsTable[3904] = 715; // 'state 61' -> CHARACTER -> shift -> 'action 715'
actionsTable[3905] = 716; // 'state 61' -> CONTROL_CHARACTER -> shift -> 'action 716'
actionsTable[3906] = 717; // 'state 61' -> BACKSLASH -> shift -> 'action 717'
actionsTable[3909] = 718; // 'state 61' -> DOT -> shift -> 'action 718'
actionsTable[3910] = 719; // 'state 61' -> UNION -> shift -> 'action 719'
actionsTable[3911] = 720; // 'state 61' -> PAREN_OPEN -> shift -> 'action 720'
actionsTable[3912] = 721; // 'state 61' -> PAREN_CLOSE -> shift -> 'action 721'
actionsTable[3913] = 722; // 'state 61' -> QUANTIFIER -> shift -> 'action 722'
actionsTable[3926] = 723; // 'state 61' -> CharacterClassCharacters -> shift -> 'action 723'
actionsTable[3927] = 724; // 'state 61' -> CharacterClassCharacter -> shift -> 'action 724'
actionsTable[3928] = 725; // 'state 61' -> CharacterClassRange -> shift -> 'action 725'
actionsTable[4480] = 726; // 'state 70' -> CHARACTER -> shift -> 'action 726'
actionsTable[4481] = 727; // 'state 70' -> CONTROL_CHARACTER -> shift -> 'action 727'
actionsTable[4482] = 728; // 'state 70' -> BACKSLASH -> shift -> 'action 728'
actionsTable[4483] = 729; // 'state 70' -> CARET -> shift -> 'action 729'
actionsTable[4484] = 730; // 'state 70' -> DASH -> shift -> 'action 730'
actionsTable[4487] = 731; // 'state 70' -> PAREN_OPEN -> shift -> 'action 731'
actionsTable[4490] = 732; // 'state 70' -> BRACKET_OPEN -> shift -> 'action 732'
actionsTable[4499] = 733; // 'state 70' -> Atom -> shift -> 'action 733'
actionsTable[4500] = 734; // 'state 70' -> Group -> shift -> 'action 734'
actionsTable[4501] = 735; // 'state 70' -> CharacterClass -> shift -> 'action 735'
actionsTable[4505] = 736; // 'state 70' -> Character -> shift -> 'action 736'
actionsTable[4486] = 737; // 'state 70' -> UNION -> reduce -> 'action 737'
actionsTable[4488] = 738; // 'state 70' -> PAREN_CLOSE -> reduce -> 'action 738'
actionsTable[4492] = 739; // 'state 70' -> @par-gen.EOF -> reduce -> 'action 739'
actionsTable[4544] = 740; // 'state 71' -> CHARACTER -> shift -> 'action 740'
actionsTable[4545] = 741; // 'state 71' -> CONTROL_CHARACTER -> shift -> 'action 741'
actionsTable[4546] = 742; // 'state 71' -> BACKSLASH -> shift -> 'action 742'
actionsTable[4547] = 743; // 'state 71' -> CARET -> shift -> 'action 743'
actionsTable[4548] = 744; // 'state 71' -> DASH -> shift -> 'action 744'
actionsTable[4551] = 745; // 'state 71' -> PAREN_OPEN -> shift -> 'action 745'
actionsTable[4554] = 746; // 'state 71' -> BRACKET_OPEN -> shift -> 'action 746'
actionsTable[4563] = 747; // 'state 71' -> Atom -> shift -> 'action 747'
actionsTable[4564] = 748; // 'state 71' -> Group -> shift -> 'action 748'
actionsTable[4565] = 749; // 'state 71' -> CharacterClass -> shift -> 'action 749'
actionsTable[4569] = 750; // 'state 71' -> Character -> shift -> 'action 750'
actionsTable[4550] = 751; // 'state 71' -> UNION -> reduce -> 'action 751'
actionsTable[4552] = 752; // 'state 71' -> PAREN_CLOSE -> reduce -> 'action 752'
actionsTable[4556] = 753; // 'state 71' -> @par-gen.EOF -> reduce -> 'action 753'
actionsTable[4608] = 754; // 'state 72' -> CHARACTER -> shift -> 'action 754'
actionsTable[4609] = 755; // 'state 72' -> CONTROL_CHARACTER -> shift -> 'action 755'
actionsTable[4610] = 756; // 'state 72' -> BACKSLASH -> shift -> 'action 756'
actionsTable[4611] = 757; // 'state 72' -> CARET -> shift -> 'action 757'
actionsTable[4612] = 758; // 'state 72' -> DASH -> shift -> 'action 758'
actionsTable[4615] = 759; // 'state 72' -> PAREN_OPEN -> shift -> 'action 759'
actionsTable[4618] = 760; // 'state 72' -> BRACKET_OPEN -> shift -> 'action 760'
actionsTable[4627] = 761; // 'state 72' -> Atom -> shift -> 'action 761'
actionsTable[4628] = 762; // 'state 72' -> Group -> shift -> 'action 762'
actionsTable[4629] = 763; // 'state 72' -> CharacterClass -> shift -> 'action 763'
actionsTable[4633] = 764; // 'state 72' -> Character -> shift -> 'action 764'
actionsTable[4614] = 765; // 'state 72' -> UNION -> reduce -> 'action 765'
actionsTable[4616] = 766; // 'state 72' -> PAREN_CLOSE -> reduce -> 'action 766'
actionsTable[4620] = 767; // 'state 72' -> @par-gen.EOF -> reduce -> 'action 767'
actionsTable[4672] = 768; // 'state 73' -> CHARACTER -> shift -> 'action 768'
actionsTable[4673] = 769; // 'state 73' -> CONTROL_CHARACTER -> shift -> 'action 769'
actionsTable[4674] = 770; // 'state 73' -> BACKSLASH -> shift -> 'action 770'
actionsTable[4675] = 771; // 'state 73' -> CARET -> shift -> 'action 771'
actionsTable[4676] = 772; // 'state 73' -> DASH -> shift -> 'action 772'
actionsTable[4679] = 773; // 'state 73' -> PAREN_OPEN -> shift -> 'action 773'
actionsTable[4682] = 774; // 'state 73' -> BRACKET_OPEN -> shift -> 'action 774'
actionsTable[4691] = 775; // 'state 73' -> Atom -> shift -> 'action 775'
actionsTable[4692] = 776; // 'state 73' -> Group -> shift -> 'action 776'
actionsTable[4693] = 777; // 'state 73' -> CharacterClass -> shift -> 'action 777'
actionsTable[4697] = 778; // 'state 73' -> Character -> shift -> 'action 778'
actionsTable[4678] = 779; // 'state 73' -> UNION -> reduce -> 'action 779'
actionsTable[4680] = 780; // 'state 73' -> PAREN_CLOSE -> reduce -> 'action 780'
actionsTable[4684] = 781; // 'state 73' -> @par-gen.EOF -> reduce -> 'action 781'
actionsTable[4736] = 782; // 'state 74' -> CHARACTER -> reduce -> 'action 782'
actionsTable[4737] = 783; // 'state 74' -> CONTROL_CHARACTER -> reduce -> 'action 783'
actionsTable[4738] = 784; // 'state 74' -> BACKSLASH -> reduce -> 'action 784'
actionsTable[4739] = 785; // 'state 74' -> CARET -> reduce -> 'action 785'
actionsTable[4740] = 786; // 'state 74' -> DASH -> reduce -> 'action 786'
actionsTable[4742] = 787; // 'state 74' -> UNION -> reduce -> 'action 787'
actionsTable[4743] = 788; // 'state 74' -> PAREN_OPEN -> reduce -> 'action 788'
actionsTable[4744] = 789; // 'state 74' -> PAREN_CLOSE -> reduce -> 'action 789'
actionsTable[4746] = 790; // 'state 74' -> BRACKET_OPEN -> reduce -> 'action 790'
actionsTable[4748] = 791; // 'state 74' -> @par-gen.EOF -> reduce -> 'action 791'
actionsTable[4800] = 792; // 'state 75' -> CHARACTER -> reduce -> 'action 792'
actionsTable[4801] = 793; // 'state 75' -> CONTROL_CHARACTER -> reduce -> 'action 793'
actionsTable[4802] = 794; // 'state 75' -> BACKSLASH -> reduce -> 'action 794'
actionsTable[4803] = 795; // 'state 75' -> CARET -> reduce -> 'action 795'
actionsTable[4804] = 796; // 'state 75' -> DASH -> reduce -> 'action 796'
actionsTable[4806] = 797; // 'state 75' -> UNION -> reduce -> 'action 797'
actionsTable[4807] = 798; // 'state 75' -> PAREN_OPEN -> reduce -> 'action 798'
actionsTable[4808] = 799; // 'state 75' -> PAREN_CLOSE -> reduce -> 'action 799'
actionsTable[4810] = 800; // 'state 75' -> BRACKET_OPEN -> reduce -> 'action 800'
actionsTable[4812] = 801; // 'state 75' -> @par-gen.EOF -> reduce -> 'action 801'
actionsTable[4864] = 802; // 'state 76' -> CHARACTER -> reduce -> 'action 802'
actionsTable[4865] = 803; // 'state 76' -> CONTROL_CHARACTER -> reduce -> 'action 803'
actionsTable[4866] = 804; // 'state 76' -> BACKSLASH -> reduce -> 'action 804'
actionsTable[4867] = 805; // 'state 76' -> CARET -> reduce -> 'action 805'
actionsTable[4868] = 806; // 'state 76' -> DASH -> reduce -> 'action 806'
actionsTable[4870] = 807; // 'state 76' -> UNION -> reduce -> 'action 807'
actionsTable[4871] = 808; // 'state 76' -> PAREN_OPEN -> reduce -> 'action 808'
actionsTable[4872] = 809; // 'state 76' -> PAREN_CLOSE -> reduce -> 'action 809'
actionsTable[4874] = 810; // 'state 76' -> BRACKET_OPEN -> reduce -> 'action 810'
actionsTable[4876] = 811; // 'state 76' -> @par-gen.EOF -> reduce -> 'action 811'
actionsTable[5504] = 812; // 'state 86' -> CHARACTER -> reduce -> 'action 812'
actionsTable[5505] = 813; // 'state 86' -> CONTROL_CHARACTER -> reduce -> 'action 813'
actionsTable[5506] = 814; // 'state 86' -> BACKSLASH -> reduce -> 'action 814'
actionsTable[5507] = 815; // 'state 86' -> CARET -> reduce -> 'action 815'
actionsTable[5508] = 816; // 'state 86' -> DASH -> reduce -> 'action 816'
actionsTable[5510] = 817; // 'state 86' -> UNION -> reduce -> 'action 817'
actionsTable[5511] = 818; // 'state 86' -> PAREN_OPEN -> reduce -> 'action 818'
actionsTable[5512] = 819; // 'state 86' -> PAREN_CLOSE -> reduce -> 'action 819'
actionsTable[5513] = 820; // 'state 86' -> QUANTIFIER -> reduce -> 'action 820'
actionsTable[5514] = 821; // 'state 86' -> BRACKET_OPEN -> reduce -> 'action 821'
actionsTable[5516] = 822; // 'state 86' -> @par-gen.EOF -> reduce -> 'action 822'
actionsTable[4928] = 823; // 'state 77' -> CHARACTER -> reduce -> 'action 823'
actionsTable[4929] = 824; // 'state 77' -> CONTROL_CHARACTER -> reduce -> 'action 824'
actionsTable[4930] = 825; // 'state 77' -> BACKSLASH -> reduce -> 'action 825'
actionsTable[4931] = 826; // 'state 77' -> CARET -> reduce -> 'action 826'
actionsTable[4932] = 827; // 'state 77' -> DASH -> reduce -> 'action 827'
actionsTable[4934] = 828; // 'state 77' -> UNION -> reduce -> 'action 828'
actionsTable[4935] = 829; // 'state 77' -> PAREN_OPEN -> reduce -> 'action 829'
actionsTable[4936] = 830; // 'state 77' -> PAREN_CLOSE -> reduce -> 'action 830'
actionsTable[4937] = 831; // 'state 77' -> QUANTIFIER -> reduce -> 'action 831'
actionsTable[4938] = 832; // 'state 77' -> BRACKET_OPEN -> reduce -> 'action 832'
actionsTable[4940] = 833; // 'state 77' -> @par-gen.EOF -> reduce -> 'action 833'
actionsTable[4992] = 834; // 'state 78' -> CHARACTER -> reduce -> 'action 834'
actionsTable[4993] = 835; // 'state 78' -> CONTROL_CHARACTER -> reduce -> 'action 835'
actionsTable[4994] = 836; // 'state 78' -> BACKSLASH -> reduce -> 'action 836'
actionsTable[4995] = 837; // 'state 78' -> CARET -> reduce -> 'action 837'
actionsTable[4996] = 838; // 'state 78' -> DASH -> reduce -> 'action 838'
actionsTable[4998] = 839; // 'state 78' -> UNION -> reduce -> 'action 839'
actionsTable[4999] = 840; // 'state 78' -> PAREN_OPEN -> reduce -> 'action 840'
actionsTable[5000] = 841; // 'state 78' -> PAREN_CLOSE -> reduce -> 'action 841'
actionsTable[5001] = 842; // 'state 78' -> QUANTIFIER -> reduce -> 'action 842'
actionsTable[5002] = 843; // 'state 78' -> BRACKET_OPEN -> reduce -> 'action 843'
actionsTable[5004] = 844; // 'state 78' -> @par-gen.EOF -> reduce -> 'action 844'
actionsTable[5056] = 845; // 'state 79' -> CHARACTER -> reduce -> 'action 845'
actionsTable[5057] = 846; // 'state 79' -> CONTROL_CHARACTER -> reduce -> 'action 846'
actionsTable[5058] = 847; // 'state 79' -> BACKSLASH -> reduce -> 'action 847'
actionsTable[5059] = 848; // 'state 79' -> CARET -> reduce -> 'action 848'
actionsTable[5060] = 849; // 'state 79' -> DASH -> reduce -> 'action 849'
actionsTable[5062] = 850; // 'state 79' -> UNION -> reduce -> 'action 850'
actionsTable[5063] = 851; // 'state 79' -> PAREN_OPEN -> reduce -> 'action 851'
actionsTable[5064] = 852; // 'state 79' -> PAREN_CLOSE -> reduce -> 'action 852'
actionsTable[5065] = 853; // 'state 79' -> QUANTIFIER -> reduce -> 'action 853'
actionsTable[5066] = 854; // 'state 79' -> BRACKET_OPEN -> reduce -> 'action 854'
actionsTable[5068] = 855; // 'state 79' -> @par-gen.EOF -> reduce -> 'action 855'
actionsTable[5120] = 856; // 'state 80' -> CHARACTER -> reduce -> 'action 856'
actionsTable[5121] = 857; // 'state 80' -> CONTROL_CHARACTER -> reduce -> 'action 857'
actionsTable[5122] = 858; // 'state 80' -> BACKSLASH -> reduce -> 'action 858'
actionsTable[5123] = 859; // 'state 80' -> CARET -> reduce -> 'action 859'
actionsTable[5124] = 860; // 'state 80' -> DASH -> reduce -> 'action 860'
actionsTable[5126] = 861; // 'state 80' -> UNION -> reduce -> 'action 861'
actionsTable[5127] = 862; // 'state 80' -> PAREN_OPEN -> reduce -> 'action 862'
actionsTable[5128] = 863; // 'state 80' -> PAREN_CLOSE -> reduce -> 'action 863'
actionsTable[5129] = 864; // 'state 80' -> QUANTIFIER -> reduce -> 'action 864'
actionsTable[5130] = 865; // 'state 80' -> BRACKET_OPEN -> reduce -> 'action 865'
actionsTable[5132] = 866; // 'state 80' -> @par-gen.EOF -> reduce -> 'action 866'
actionsTable[5184] = 867; // 'state 81' -> CHARACTER -> reduce -> 'action 867'
actionsTable[5185] = 868; // 'state 81' -> CONTROL_CHARACTER -> reduce -> 'action 868'
actionsTable[5186] = 869; // 'state 81' -> BACKSLASH -> reduce -> 'action 869'
actionsTable[5187] = 870; // 'state 81' -> CARET -> reduce -> 'action 870'
actionsTable[5188] = 871; // 'state 81' -> DASH -> reduce -> 'action 871'
actionsTable[5190] = 872; // 'state 81' -> UNION -> reduce -> 'action 872'
actionsTable[5191] = 873; // 'state 81' -> PAREN_OPEN -> reduce -> 'action 873'
actionsTable[5192] = 874; // 'state 81' -> PAREN_CLOSE -> reduce -> 'action 874'
actionsTable[5193] = 875; // 'state 81' -> QUANTIFIER -> reduce -> 'action 875'
actionsTable[5194] = 876; // 'state 81' -> BRACKET_OPEN -> reduce -> 'action 876'
actionsTable[5196] = 877; // 'state 81' -> @par-gen.EOF -> reduce -> 'action 877'
actionsTable[5248] = 878; // 'state 82' -> CHARACTER -> reduce -> 'action 878'
actionsTable[5249] = 879; // 'state 82' -> CONTROL_CHARACTER -> reduce -> 'action 879'
actionsTable[5250] = 880; // 'state 82' -> BACKSLASH -> reduce -> 'action 880'
actionsTable[5251] = 881; // 'state 82' -> CARET -> reduce -> 'action 881'
actionsTable[5252] = 882; // 'state 82' -> DASH -> reduce -> 'action 882'
actionsTable[5254] = 883; // 'state 82' -> UNION -> reduce -> 'action 883'
actionsTable[5255] = 884; // 'state 82' -> PAREN_OPEN -> reduce -> 'action 884'
actionsTable[5256] = 885; // 'state 82' -> PAREN_CLOSE -> reduce -> 'action 885'
actionsTable[5257] = 886; // 'state 82' -> QUANTIFIER -> reduce -> 'action 886'
actionsTable[5258] = 887; // 'state 82' -> BRACKET_OPEN -> reduce -> 'action 887'
actionsTable[5260] = 888; // 'state 82' -> @par-gen.EOF -> reduce -> 'action 888'
actionsTable[5376] = 889; // 'state 84' -> CHARACTER -> reduce -> 'action 889'
actionsTable[5377] = 890; // 'state 84' -> CONTROL_CHARACTER -> reduce -> 'action 890'
actionsTable[5378] = 891; // 'state 84' -> BACKSLASH -> reduce -> 'action 891'
actionsTable[5379] = 892; // 'state 84' -> CARET -> reduce -> 'action 892'
actionsTable[5380] = 893; // 'state 84' -> DASH -> reduce -> 'action 893'
actionsTable[5382] = 894; // 'state 84' -> UNION -> reduce -> 'action 894'
actionsTable[5383] = 895; // 'state 84' -> PAREN_OPEN -> reduce -> 'action 895'
actionsTable[5384] = 896; // 'state 84' -> PAREN_CLOSE -> reduce -> 'action 896'
actionsTable[5385] = 897; // 'state 84' -> QUANTIFIER -> reduce -> 'action 897'
actionsTable[5386] = 898; // 'state 84' -> BRACKET_OPEN -> reduce -> 'action 898'
actionsTable[5388] = 899; // 'state 84' -> @par-gen.EOF -> reduce -> 'action 899'
actionsTable[5440] = 900; // 'state 85' -> CHARACTER -> reduce -> 'action 900'
actionsTable[5441] = 901; // 'state 85' -> CONTROL_CHARACTER -> reduce -> 'action 901'
actionsTable[5442] = 902; // 'state 85' -> BACKSLASH -> reduce -> 'action 902'
actionsTable[5443] = 903; // 'state 85' -> CARET -> reduce -> 'action 903'
actionsTable[5444] = 904; // 'state 85' -> DASH -> reduce -> 'action 904'
actionsTable[5446] = 905; // 'state 85' -> UNION -> reduce -> 'action 905'
actionsTable[5447] = 906; // 'state 85' -> PAREN_OPEN -> reduce -> 'action 906'
actionsTable[5448] = 907; // 'state 85' -> PAREN_CLOSE -> reduce -> 'action 907'
actionsTable[5449] = 908; // 'state 85' -> QUANTIFIER -> reduce -> 'action 908'
actionsTable[5450] = 909; // 'state 85' -> BRACKET_OPEN -> reduce -> 'action 909'
actionsTable[5452] = 910; // 'state 85' -> @par-gen.EOF -> reduce -> 'action 910'
actionsTable[5312] = 911; // 'state 83' -> CHARACTER -> reduce -> 'action 911'
actionsTable[5313] = 912; // 'state 83' -> CONTROL_CHARACTER -> reduce -> 'action 912'
actionsTable[5314] = 913; // 'state 83' -> BACKSLASH -> reduce -> 'action 913'
actionsTable[5315] = 914; // 'state 83' -> CARET -> reduce -> 'action 914'
actionsTable[5316] = 915; // 'state 83' -> DASH -> reduce -> 'action 915'
actionsTable[5318] = 916; // 'state 83' -> UNION -> reduce -> 'action 916'
actionsTable[5319] = 917; // 'state 83' -> PAREN_OPEN -> reduce -> 'action 917'
actionsTable[5320] = 918; // 'state 83' -> PAREN_CLOSE -> reduce -> 'action 918'
actionsTable[5321] = 919; // 'state 83' -> QUANTIFIER -> reduce -> 'action 919'
actionsTable[5322] = 920; // 'state 83' -> BRACKET_OPEN -> reduce -> 'action 920'
actionsTable[5324] = 921; // 'state 83' -> @par-gen.EOF -> reduce -> 'action 921'
actionsTable[5574] = 922; // 'state 87' -> UNION -> shift -> 'action 922'
actionsTable[5576] = 923; // 'state 87' -> PAREN_CLOSE -> shift -> 'action 923'
actionsTable[5632] = 924; // 'state 88' -> CHARACTER -> shift -> 'action 924'
actionsTable[5633] = 925; // 'state 88' -> CONTROL_CHARACTER -> shift -> 'action 925'
actionsTable[5634] = 926; // 'state 88' -> BACKSLASH -> shift -> 'action 926'
actionsTable[5635] = 927; // 'state 88' -> CARET -> shift -> 'action 927'
actionsTable[5636] = 928; // 'state 88' -> DASH -> shift -> 'action 928'
actionsTable[5638] = 929; // 'state 88' -> UNION -> shift -> 'action 929'
actionsTable[5639] = 930; // 'state 88' -> PAREN_OPEN -> shift -> 'action 930'
actionsTable[5640] = 931; // 'state 88' -> PAREN_CLOSE -> shift -> 'action 931'
actionsTable[5642] = 932; // 'state 88' -> BRACKET_OPEN -> shift -> 'action 932'
actionsTable[5651] = 933; // 'state 88' -> Atom -> shift -> 'action 933'
actionsTable[5652] = 934; // 'state 88' -> Group -> shift -> 'action 934'
actionsTable[5653] = 935; // 'state 88' -> CharacterClass -> shift -> 'action 935'
actionsTable[5657] = 936; // 'state 88' -> Character -> shift -> 'action 936'
actionsTable[5696] = 937; // 'state 89' -> CHARACTER -> shift -> 'action 937'
actionsTable[5697] = 938; // 'state 89' -> CONTROL_CHARACTER -> shift -> 'action 938'
actionsTable[5698] = 939; // 'state 89' -> BACKSLASH -> shift -> 'action 939'
actionsTable[5699] = 940; // 'state 89' -> CARET -> shift -> 'action 940'
actionsTable[5700] = 941; // 'state 89' -> DASH -> shift -> 'action 941'
actionsTable[5702] = 942; // 'state 89' -> UNION -> shift -> 'action 942'
actionsTable[5703] = 943; // 'state 89' -> PAREN_OPEN -> shift -> 'action 943'
actionsTable[5704] = 944; // 'state 89' -> PAREN_CLOSE -> shift -> 'action 944'
actionsTable[5706] = 945; // 'state 89' -> BRACKET_OPEN -> shift -> 'action 945'
actionsTable[5715] = 946; // 'state 89' -> Atom -> shift -> 'action 946'
actionsTable[5716] = 947; // 'state 89' -> Group -> shift -> 'action 947'
actionsTable[5717] = 948; // 'state 89' -> CharacterClass -> shift -> 'action 948'
actionsTable[5721] = 949; // 'state 89' -> Character -> shift -> 'action 949'
actionsTable[6336] = 950; // 'state 99' -> CHARACTER -> shift -> 'action 950'
actionsTable[6337] = 951; // 'state 99' -> CONTROL_CHARACTER -> shift -> 'action 951'
actionsTable[6338] = 952; // 'state 99' -> BACKSLASH -> shift -> 'action 952'
actionsTable[6341] = 953; // 'state 99' -> DOT -> shift -> 'action 953'
actionsTable[6342] = 954; // 'state 99' -> UNION -> shift -> 'action 954'
actionsTable[6343] = 955; // 'state 99' -> PAREN_OPEN -> shift -> 'action 955'
actionsTable[6344] = 956; // 'state 99' -> PAREN_CLOSE -> shift -> 'action 956'
actionsTable[6345] = 957; // 'state 99' -> QUANTIFIER -> shift -> 'action 957'
actionsTable[6347] = 958; // 'state 99' -> BRACKET_CLOSE -> shift -> 'action 958'
actionsTable[6359] = 959; // 'state 99' -> CharacterClassCharacter -> shift -> 'action 959'
actionsTable[6360] = 960; // 'state 99' -> CharacterClassRange -> shift -> 'action 960'
actionsTable[6400] = 961; // 'state 100' -> CHARACTER -> reduce -> 'action 961'
actionsTable[6401] = 962; // 'state 100' -> CONTROL_CHARACTER -> reduce -> 'action 962'
actionsTable[6402] = 963; // 'state 100' -> BACKSLASH -> reduce -> 'action 963'
actionsTable[6405] = 964; // 'state 100' -> DOT -> reduce -> 'action 964'
actionsTable[6406] = 965; // 'state 100' -> UNION -> reduce -> 'action 965'
actionsTable[6407] = 966; // 'state 100' -> PAREN_OPEN -> reduce -> 'action 966'
actionsTable[6408] = 967; // 'state 100' -> PAREN_CLOSE -> reduce -> 'action 967'
actionsTable[6409] = 968; // 'state 100' -> QUANTIFIER -> reduce -> 'action 968'
actionsTable[6411] = 969; // 'state 100' -> BRACKET_CLOSE -> reduce -> 'action 969'
actionsTable[5764] = 970; // 'state 90' -> DASH -> shift -> 'action 970'
actionsTable[5760] = 971; // 'state 90' -> CHARACTER -> reduce -> 'action 971'
actionsTable[5761] = 972; // 'state 90' -> CONTROL_CHARACTER -> reduce -> 'action 972'
actionsTable[5762] = 973; // 'state 90' -> BACKSLASH -> reduce -> 'action 973'
actionsTable[5765] = 974; // 'state 90' -> DOT -> reduce -> 'action 974'
actionsTable[5766] = 975; // 'state 90' -> UNION -> reduce -> 'action 975'
actionsTable[5767] = 976; // 'state 90' -> PAREN_OPEN -> reduce -> 'action 976'
actionsTable[5768] = 977; // 'state 90' -> PAREN_CLOSE -> reduce -> 'action 977'
actionsTable[5769] = 978; // 'state 90' -> QUANTIFIER -> reduce -> 'action 978'
actionsTable[5771] = 979; // 'state 90' -> BRACKET_CLOSE -> reduce -> 'action 979'
actionsTable[5824] = 980; // 'state 91' -> CHARACTER -> reduce -> 'action 980'
actionsTable[5825] = 981; // 'state 91' -> CONTROL_CHARACTER -> reduce -> 'action 981'
actionsTable[5826] = 982; // 'state 91' -> BACKSLASH -> reduce -> 'action 982'
actionsTable[5829] = 983; // 'state 91' -> DOT -> reduce -> 'action 983'
actionsTable[5830] = 984; // 'state 91' -> UNION -> reduce -> 'action 984'
actionsTable[5831] = 985; // 'state 91' -> PAREN_OPEN -> reduce -> 'action 985'
actionsTable[5832] = 986; // 'state 91' -> PAREN_CLOSE -> reduce -> 'action 986'
actionsTable[5833] = 987; // 'state 91' -> QUANTIFIER -> reduce -> 'action 987'
actionsTable[5835] = 988; // 'state 91' -> BRACKET_CLOSE -> reduce -> 'action 988'
actionsTable[5889] = 989; // 'state 92' -> CONTROL_CHARACTER -> shift -> 'action 989'
actionsTable[5890] = 990; // 'state 92' -> BACKSLASH -> shift -> 'action 990'
actionsTable[5891] = 991; // 'state 92' -> CARET -> shift -> 'action 991'
actionsTable[5892] = 992; // 'state 92' -> DASH -> shift -> 'action 992'
actionsTable[5899] = 993; // 'state 92' -> BRACKET_CLOSE -> shift -> 'action 993'
actionsTable[6272] = 994; // 'state 98' -> CHARACTER -> reduce -> 'action 994'
actionsTable[6273] = 995; // 'state 98' -> CONTROL_CHARACTER -> reduce -> 'action 995'
actionsTable[6274] = 996; // 'state 98' -> BACKSLASH -> reduce -> 'action 996'
actionsTable[6277] = 997; // 'state 98' -> DOT -> reduce -> 'action 997'
actionsTable[6278] = 998; // 'state 98' -> UNION -> reduce -> 'action 998'
actionsTable[6279] = 999; // 'state 98' -> PAREN_OPEN -> reduce -> 'action 999'
actionsTable[6280] = 1000; // 'state 98' -> PAREN_CLOSE -> reduce -> 'action 1000'
actionsTable[6281] = 1001; // 'state 98' -> QUANTIFIER -> reduce -> 'action 1001'
actionsTable[6283] = 1002; // 'state 98' -> BRACKET_CLOSE -> reduce -> 'action 1002'
actionsTable[6144] = 1003; // 'state 96' -> CHARACTER -> reduce -> 'action 1003'
actionsTable[6145] = 1004; // 'state 96' -> CONTROL_CHARACTER -> reduce -> 'action 1004'
actionsTable[6146] = 1005; // 'state 96' -> BACKSLASH -> reduce -> 'action 1005'
actionsTable[6149] = 1006; // 'state 96' -> DOT -> reduce -> 'action 1006'
actionsTable[6150] = 1007; // 'state 96' -> UNION -> reduce -> 'action 1007'
actionsTable[6151] = 1008; // 'state 96' -> PAREN_OPEN -> reduce -> 'action 1008'
actionsTable[6152] = 1009; // 'state 96' -> PAREN_CLOSE -> reduce -> 'action 1009'
actionsTable[6153] = 1010; // 'state 96' -> QUANTIFIER -> reduce -> 'action 1010'
actionsTable[6155] = 1011; // 'state 96' -> BRACKET_CLOSE -> reduce -> 'action 1011'
actionsTable[6208] = 1012; // 'state 97' -> CHARACTER -> reduce -> 'action 1012'
actionsTable[6209] = 1013; // 'state 97' -> CONTROL_CHARACTER -> reduce -> 'action 1013'
actionsTable[6210] = 1014; // 'state 97' -> BACKSLASH -> reduce -> 'action 1014'
actionsTable[6213] = 1015; // 'state 97' -> DOT -> reduce -> 'action 1015'
actionsTable[6214] = 1016; // 'state 97' -> UNION -> reduce -> 'action 1016'
actionsTable[6215] = 1017; // 'state 97' -> PAREN_OPEN -> reduce -> 'action 1017'
actionsTable[6216] = 1018; // 'state 97' -> PAREN_CLOSE -> reduce -> 'action 1018'
actionsTable[6217] = 1019; // 'state 97' -> QUANTIFIER -> reduce -> 'action 1019'
actionsTable[6219] = 1020; // 'state 97' -> BRACKET_CLOSE -> reduce -> 'action 1020'
actionsTable[6080] = 1021; // 'state 95' -> CHARACTER -> reduce -> 'action 1021'
actionsTable[6081] = 1022; // 'state 95' -> CONTROL_CHARACTER -> reduce -> 'action 1022'
actionsTable[6082] = 1023; // 'state 95' -> BACKSLASH -> reduce -> 'action 1023'
actionsTable[6085] = 1024; // 'state 95' -> DOT -> reduce -> 'action 1024'
actionsTable[6086] = 1025; // 'state 95' -> UNION -> reduce -> 'action 1025'
actionsTable[6087] = 1026; // 'state 95' -> PAREN_OPEN -> reduce -> 'action 1026'
actionsTable[6088] = 1027; // 'state 95' -> PAREN_CLOSE -> reduce -> 'action 1027'
actionsTable[6089] = 1028; // 'state 95' -> QUANTIFIER -> reduce -> 'action 1028'
actionsTable[6091] = 1029; // 'state 95' -> BRACKET_CLOSE -> reduce -> 'action 1029'
actionsTable[6016] = 1030; // 'state 94' -> CHARACTER -> reduce -> 'action 1030'
actionsTable[6017] = 1031; // 'state 94' -> CONTROL_CHARACTER -> reduce -> 'action 1031'
actionsTable[6018] = 1032; // 'state 94' -> BACKSLASH -> reduce -> 'action 1032'
actionsTable[6021] = 1033; // 'state 94' -> DOT -> reduce -> 'action 1033'
actionsTable[6022] = 1034; // 'state 94' -> UNION -> reduce -> 'action 1034'
actionsTable[6023] = 1035; // 'state 94' -> PAREN_OPEN -> reduce -> 'action 1035'
actionsTable[6024] = 1036; // 'state 94' -> PAREN_CLOSE -> reduce -> 'action 1036'
actionsTable[6025] = 1037; // 'state 94' -> QUANTIFIER -> reduce -> 'action 1037'
actionsTable[6027] = 1038; // 'state 94' -> BRACKET_CLOSE -> reduce -> 'action 1038'
actionsTable[6464] = 1039; // 'state 101' -> CHARACTER -> reduce -> 'action 1039'
actionsTable[6465] = 1040; // 'state 101' -> CONTROL_CHARACTER -> reduce -> 'action 1040'
actionsTable[6466] = 1041; // 'state 101' -> BACKSLASH -> reduce -> 'action 1041'
actionsTable[6469] = 1042; // 'state 101' -> DOT -> reduce -> 'action 1042'
actionsTable[6470] = 1043; // 'state 101' -> UNION -> reduce -> 'action 1043'
actionsTable[6471] = 1044; // 'state 101' -> PAREN_OPEN -> reduce -> 'action 1044'
actionsTable[6472] = 1045; // 'state 101' -> PAREN_CLOSE -> reduce -> 'action 1045'
actionsTable[6473] = 1046; // 'state 101' -> QUANTIFIER -> reduce -> 'action 1046'
actionsTable[6475] = 1047; // 'state 101' -> BRACKET_CLOSE -> reduce -> 'action 1047'
actionsTable[5952] = 1048; // 'state 93' -> CHARACTER -> shift -> 'action 1048'
actionsTable[5953] = 1049; // 'state 93' -> CONTROL_CHARACTER -> shift -> 'action 1049'
actionsTable[5954] = 1050; // 'state 93' -> BACKSLASH -> shift -> 'action 1050'
actionsTable[5957] = 1051; // 'state 93' -> DOT -> shift -> 'action 1051'
actionsTable[5958] = 1052; // 'state 93' -> UNION -> shift -> 'action 1052'
actionsTable[5959] = 1053; // 'state 93' -> PAREN_OPEN -> shift -> 'action 1053'
actionsTable[5960] = 1054; // 'state 93' -> PAREN_CLOSE -> shift -> 'action 1054'
actionsTable[5961] = 1055; // 'state 93' -> QUANTIFIER -> shift -> 'action 1055'
actionsTable[5974] = 1056; // 'state 93' -> CharacterClassCharacters -> shift -> 'action 1056'
actionsTable[5975] = 1057; // 'state 93' -> CharacterClassCharacter -> shift -> 'action 1057'
actionsTable[5976] = 1058; // 'state 93' -> CharacterClassRange -> shift -> 'action 1058'
actionsTable[6528] = 1059; // 'state 102' -> CHARACTER -> shift -> 'action 1059'
actionsTable[6529] = 1060; // 'state 102' -> CONTROL_CHARACTER -> shift -> 'action 1060'
actionsTable[6530] = 1061; // 'state 102' -> BACKSLASH -> shift -> 'action 1061'
actionsTable[6531] = 1062; // 'state 102' -> CARET -> shift -> 'action 1062'
actionsTable[6532] = 1063; // 'state 102' -> DASH -> shift -> 'action 1063'
actionsTable[6535] = 1064; // 'state 102' -> PAREN_OPEN -> shift -> 'action 1064'
actionsTable[6538] = 1065; // 'state 102' -> BRACKET_OPEN -> shift -> 'action 1065'
actionsTable[6547] = 1066; // 'state 102' -> Atom -> shift -> 'action 1066'
actionsTable[6548] = 1067; // 'state 102' -> Group -> shift -> 'action 1067'
actionsTable[6549] = 1068; // 'state 102' -> CharacterClass -> shift -> 'action 1068'
actionsTable[6553] = 1069; // 'state 102' -> Character -> shift -> 'action 1069'
actionsTable[6534] = 1070; // 'state 102' -> UNION -> reduce -> 'action 1070'
actionsTable[6536] = 1071; // 'state 102' -> PAREN_CLOSE -> reduce -> 'action 1071'
actionsTable[6540] = 1072; // 'state 102' -> @par-gen.EOF -> reduce -> 'action 1072'
actionsTable[6592] = 1073; // 'state 103' -> CHARACTER -> shift -> 'action 1073'
actionsTable[6593] = 1074; // 'state 103' -> CONTROL_CHARACTER -> shift -> 'action 1074'
actionsTable[6594] = 1075; // 'state 103' -> BACKSLASH -> shift -> 'action 1075'
actionsTable[6595] = 1076; // 'state 103' -> CARET -> shift -> 'action 1076'
actionsTable[6596] = 1077; // 'state 103' -> DASH -> shift -> 'action 1077'
actionsTable[6599] = 1078; // 'state 103' -> PAREN_OPEN -> shift -> 'action 1078'
actionsTable[6602] = 1079; // 'state 103' -> BRACKET_OPEN -> shift -> 'action 1079'
actionsTable[6611] = 1080; // 'state 103' -> Atom -> shift -> 'action 1080'
actionsTable[6612] = 1081; // 'state 103' -> Group -> shift -> 'action 1081'
actionsTable[6613] = 1082; // 'state 103' -> CharacterClass -> shift -> 'action 1082'
actionsTable[6617] = 1083; // 'state 103' -> Character -> shift -> 'action 1083'
actionsTable[6598] = 1084; // 'state 103' -> UNION -> reduce -> 'action 1084'
actionsTable[6600] = 1085; // 'state 103' -> PAREN_CLOSE -> reduce -> 'action 1085'
actionsTable[6604] = 1086; // 'state 103' -> @par-gen.EOF -> reduce -> 'action 1086'
actionsTable[6656] = 1087; // 'state 104' -> CHARACTER -> reduce -> 'action 1087'
actionsTable[6657] = 1088; // 'state 104' -> CONTROL_CHARACTER -> reduce -> 'action 1088'
actionsTable[6658] = 1089; // 'state 104' -> BACKSLASH -> reduce -> 'action 1089'
actionsTable[6659] = 1090; // 'state 104' -> CARET -> reduce -> 'action 1090'
actionsTable[6660] = 1091; // 'state 104' -> DASH -> reduce -> 'action 1091'
actionsTable[6662] = 1092; // 'state 104' -> UNION -> reduce -> 'action 1092'
actionsTable[6663] = 1093; // 'state 104' -> PAREN_OPEN -> reduce -> 'action 1093'
actionsTable[6664] = 1094; // 'state 104' -> PAREN_CLOSE -> reduce -> 'action 1094'
actionsTable[6666] = 1095; // 'state 104' -> BRACKET_OPEN -> reduce -> 'action 1095'
actionsTable[6668] = 1096; // 'state 104' -> @par-gen.EOF -> reduce -> 'action 1096'
actionsTable[6720] = 1097; // 'state 105' -> CHARACTER -> reduce -> 'action 1097'
actionsTable[6721] = 1098; // 'state 105' -> CONTROL_CHARACTER -> reduce -> 'action 1098'
actionsTable[6722] = 1099; // 'state 105' -> BACKSLASH -> reduce -> 'action 1099'
actionsTable[6723] = 1100; // 'state 105' -> CARET -> reduce -> 'action 1100'
actionsTable[6724] = 1101; // 'state 105' -> DASH -> reduce -> 'action 1101'
actionsTable[6726] = 1102; // 'state 105' -> UNION -> reduce -> 'action 1102'
actionsTable[6727] = 1103; // 'state 105' -> PAREN_OPEN -> reduce -> 'action 1103'
actionsTable[6728] = 1104; // 'state 105' -> PAREN_CLOSE -> reduce -> 'action 1104'
actionsTable[6730] = 1105; // 'state 105' -> BRACKET_OPEN -> reduce -> 'action 1105'
actionsTable[6732] = 1106; // 'state 105' -> @par-gen.EOF -> reduce -> 'action 1106'
actionsTable[6784] = 1107; // 'state 106' -> CHARACTER -> reduce -> 'action 1107'
actionsTable[6785] = 1108; // 'state 106' -> CONTROL_CHARACTER -> reduce -> 'action 1108'
actionsTable[6786] = 1109; // 'state 106' -> BACKSLASH -> reduce -> 'action 1109'
actionsTable[6787] = 1110; // 'state 106' -> CARET -> reduce -> 'action 1110'
actionsTable[6788] = 1111; // 'state 106' -> DASH -> reduce -> 'action 1111'
actionsTable[6790] = 1112; // 'state 106' -> UNION -> reduce -> 'action 1112'
actionsTable[6791] = 1113; // 'state 106' -> PAREN_OPEN -> reduce -> 'action 1113'
actionsTable[6792] = 1114; // 'state 106' -> PAREN_CLOSE -> reduce -> 'action 1114'
actionsTable[6794] = 1115; // 'state 106' -> BRACKET_OPEN -> reduce -> 'action 1115'
actionsTable[6796] = 1116; // 'state 106' -> @par-gen.EOF -> reduce -> 'action 1116'
actionsTable[7424] = 1117; // 'state 116' -> CHARACTER -> reduce -> 'action 1117'
actionsTable[7425] = 1118; // 'state 116' -> CONTROL_CHARACTER -> reduce -> 'action 1118'
actionsTable[7426] = 1119; // 'state 116' -> BACKSLASH -> reduce -> 'action 1119'
actionsTable[7427] = 1120; // 'state 116' -> CARET -> reduce -> 'action 1120'
actionsTable[7428] = 1121; // 'state 116' -> DASH -> reduce -> 'action 1121'
actionsTable[7430] = 1122; // 'state 116' -> UNION -> reduce -> 'action 1122'
actionsTable[7431] = 1123; // 'state 116' -> PAREN_OPEN -> reduce -> 'action 1123'
actionsTable[7432] = 1124; // 'state 116' -> PAREN_CLOSE -> reduce -> 'action 1124'
actionsTable[7433] = 1125; // 'state 116' -> QUANTIFIER -> reduce -> 'action 1125'
actionsTable[7434] = 1126; // 'state 116' -> BRACKET_OPEN -> reduce -> 'action 1126'
actionsTable[7436] = 1127; // 'state 116' -> @par-gen.EOF -> reduce -> 'action 1127'
actionsTable[6848] = 1128; // 'state 107' -> CHARACTER -> reduce -> 'action 1128'
actionsTable[6849] = 1129; // 'state 107' -> CONTROL_CHARACTER -> reduce -> 'action 1129'
actionsTable[6850] = 1130; // 'state 107' -> BACKSLASH -> reduce -> 'action 1130'
actionsTable[6851] = 1131; // 'state 107' -> CARET -> reduce -> 'action 1131'
actionsTable[6852] = 1132; // 'state 107' -> DASH -> reduce -> 'action 1132'
actionsTable[6854] = 1133; // 'state 107' -> UNION -> reduce -> 'action 1133'
actionsTable[6855] = 1134; // 'state 107' -> PAREN_OPEN -> reduce -> 'action 1134'
actionsTable[6856] = 1135; // 'state 107' -> PAREN_CLOSE -> reduce -> 'action 1135'
actionsTable[6857] = 1136; // 'state 107' -> QUANTIFIER -> reduce -> 'action 1136'
actionsTable[6858] = 1137; // 'state 107' -> BRACKET_OPEN -> reduce -> 'action 1137'
actionsTable[6860] = 1138; // 'state 107' -> @par-gen.EOF -> reduce -> 'action 1138'
actionsTable[6912] = 1139; // 'state 108' -> CHARACTER -> reduce -> 'action 1139'
actionsTable[6913] = 1140; // 'state 108' -> CONTROL_CHARACTER -> reduce -> 'action 1140'
actionsTable[6914] = 1141; // 'state 108' -> BACKSLASH -> reduce -> 'action 1141'
actionsTable[6915] = 1142; // 'state 108' -> CARET -> reduce -> 'action 1142'
actionsTable[6916] = 1143; // 'state 108' -> DASH -> reduce -> 'action 1143'
actionsTable[6918] = 1144; // 'state 108' -> UNION -> reduce -> 'action 1144'
actionsTable[6919] = 1145; // 'state 108' -> PAREN_OPEN -> reduce -> 'action 1145'
actionsTable[6920] = 1146; // 'state 108' -> PAREN_CLOSE -> reduce -> 'action 1146'
actionsTable[6921] = 1147; // 'state 108' -> QUANTIFIER -> reduce -> 'action 1147'
actionsTable[6922] = 1148; // 'state 108' -> BRACKET_OPEN -> reduce -> 'action 1148'
actionsTable[6924] = 1149; // 'state 108' -> @par-gen.EOF -> reduce -> 'action 1149'
actionsTable[6976] = 1150; // 'state 109' -> CHARACTER -> reduce -> 'action 1150'
actionsTable[6977] = 1151; // 'state 109' -> CONTROL_CHARACTER -> reduce -> 'action 1151'
actionsTable[6978] = 1152; // 'state 109' -> BACKSLASH -> reduce -> 'action 1152'
actionsTable[6979] = 1153; // 'state 109' -> CARET -> reduce -> 'action 1153'
actionsTable[6980] = 1154; // 'state 109' -> DASH -> reduce -> 'action 1154'
actionsTable[6982] = 1155; // 'state 109' -> UNION -> reduce -> 'action 1155'
actionsTable[6983] = 1156; // 'state 109' -> PAREN_OPEN -> reduce -> 'action 1156'
actionsTable[6984] = 1157; // 'state 109' -> PAREN_CLOSE -> reduce -> 'action 1157'
actionsTable[6985] = 1158; // 'state 109' -> QUANTIFIER -> reduce -> 'action 1158'
actionsTable[6986] = 1159; // 'state 109' -> BRACKET_OPEN -> reduce -> 'action 1159'
actionsTable[6988] = 1160; // 'state 109' -> @par-gen.EOF -> reduce -> 'action 1160'
actionsTable[7040] = 1161; // 'state 110' -> CHARACTER -> reduce -> 'action 1161'
actionsTable[7041] = 1162; // 'state 110' -> CONTROL_CHARACTER -> reduce -> 'action 1162'
actionsTable[7042] = 1163; // 'state 110' -> BACKSLASH -> reduce -> 'action 1163'
actionsTable[7043] = 1164; // 'state 110' -> CARET -> reduce -> 'action 1164'
actionsTable[7044] = 1165; // 'state 110' -> DASH -> reduce -> 'action 1165'
actionsTable[7046] = 1166; // 'state 110' -> UNION -> reduce -> 'action 1166'
actionsTable[7047] = 1167; // 'state 110' -> PAREN_OPEN -> reduce -> 'action 1167'
actionsTable[7048] = 1168; // 'state 110' -> PAREN_CLOSE -> reduce -> 'action 1168'
actionsTable[7049] = 1169; // 'state 110' -> QUANTIFIER -> reduce -> 'action 1169'
actionsTable[7050] = 1170; // 'state 110' -> BRACKET_OPEN -> reduce -> 'action 1170'
actionsTable[7052] = 1171; // 'state 110' -> @par-gen.EOF -> reduce -> 'action 1171'
actionsTable[7104] = 1172; // 'state 111' -> CHARACTER -> reduce -> 'action 1172'
actionsTable[7105] = 1173; // 'state 111' -> CONTROL_CHARACTER -> reduce -> 'action 1173'
actionsTable[7106] = 1174; // 'state 111' -> BACKSLASH -> reduce -> 'action 1174'
actionsTable[7107] = 1175; // 'state 111' -> CARET -> reduce -> 'action 1175'
actionsTable[7108] = 1176; // 'state 111' -> DASH -> reduce -> 'action 1176'
actionsTable[7110] = 1177; // 'state 111' -> UNION -> reduce -> 'action 1177'
actionsTable[7111] = 1178; // 'state 111' -> PAREN_OPEN -> reduce -> 'action 1178'
actionsTable[7112] = 1179; // 'state 111' -> PAREN_CLOSE -> reduce -> 'action 1179'
actionsTable[7113] = 1180; // 'state 111' -> QUANTIFIER -> reduce -> 'action 1180'
actionsTable[7114] = 1181; // 'state 111' -> BRACKET_OPEN -> reduce -> 'action 1181'
actionsTable[7116] = 1182; // 'state 111' -> @par-gen.EOF -> reduce -> 'action 1182'
actionsTable[7168] = 1183; // 'state 112' -> CHARACTER -> reduce -> 'action 1183'
actionsTable[7169] = 1184; // 'state 112' -> CONTROL_CHARACTER -> reduce -> 'action 1184'
actionsTable[7170] = 1185; // 'state 112' -> BACKSLASH -> reduce -> 'action 1185'
actionsTable[7171] = 1186; // 'state 112' -> CARET -> reduce -> 'action 1186'
actionsTable[7172] = 1187; // 'state 112' -> DASH -> reduce -> 'action 1187'
actionsTable[7174] = 1188; // 'state 112' -> UNION -> reduce -> 'action 1188'
actionsTable[7175] = 1189; // 'state 112' -> PAREN_OPEN -> reduce -> 'action 1189'
actionsTable[7176] = 1190; // 'state 112' -> PAREN_CLOSE -> reduce -> 'action 1190'
actionsTable[7177] = 1191; // 'state 112' -> QUANTIFIER -> reduce -> 'action 1191'
actionsTable[7178] = 1192; // 'state 112' -> BRACKET_OPEN -> reduce -> 'action 1192'
actionsTable[7180] = 1193; // 'state 112' -> @par-gen.EOF -> reduce -> 'action 1193'
actionsTable[7296] = 1194; // 'state 114' -> CHARACTER -> reduce -> 'action 1194'
actionsTable[7297] = 1195; // 'state 114' -> CONTROL_CHARACTER -> reduce -> 'action 1195'
actionsTable[7298] = 1196; // 'state 114' -> BACKSLASH -> reduce -> 'action 1196'
actionsTable[7299] = 1197; // 'state 114' -> CARET -> reduce -> 'action 1197'
actionsTable[7300] = 1198; // 'state 114' -> DASH -> reduce -> 'action 1198'
actionsTable[7302] = 1199; // 'state 114' -> UNION -> reduce -> 'action 1199'
actionsTable[7303] = 1200; // 'state 114' -> PAREN_OPEN -> reduce -> 'action 1200'
actionsTable[7304] = 1201; // 'state 114' -> PAREN_CLOSE -> reduce -> 'action 1201'
actionsTable[7305] = 1202; // 'state 114' -> QUANTIFIER -> reduce -> 'action 1202'
actionsTable[7306] = 1203; // 'state 114' -> BRACKET_OPEN -> reduce -> 'action 1203'
actionsTable[7308] = 1204; // 'state 114' -> @par-gen.EOF -> reduce -> 'action 1204'
actionsTable[7360] = 1205; // 'state 115' -> CHARACTER -> reduce -> 'action 1205'
actionsTable[7361] = 1206; // 'state 115' -> CONTROL_CHARACTER -> reduce -> 'action 1206'
actionsTable[7362] = 1207; // 'state 115' -> BACKSLASH -> reduce -> 'action 1207'
actionsTable[7363] = 1208; // 'state 115' -> CARET -> reduce -> 'action 1208'
actionsTable[7364] = 1209; // 'state 115' -> DASH -> reduce -> 'action 1209'
actionsTable[7366] = 1210; // 'state 115' -> UNION -> reduce -> 'action 1210'
actionsTable[7367] = 1211; // 'state 115' -> PAREN_OPEN -> reduce -> 'action 1211'
actionsTable[7368] = 1212; // 'state 115' -> PAREN_CLOSE -> reduce -> 'action 1212'
actionsTable[7369] = 1213; // 'state 115' -> QUANTIFIER -> reduce -> 'action 1213'
actionsTable[7370] = 1214; // 'state 115' -> BRACKET_OPEN -> reduce -> 'action 1214'
actionsTable[7372] = 1215; // 'state 115' -> @par-gen.EOF -> reduce -> 'action 1215'
actionsTable[7232] = 1216; // 'state 113' -> CHARACTER -> reduce -> 'action 1216'
actionsTable[7233] = 1217; // 'state 113' -> CONTROL_CHARACTER -> reduce -> 'action 1217'
actionsTable[7234] = 1218; // 'state 113' -> BACKSLASH -> reduce -> 'action 1218'
actionsTable[7235] = 1219; // 'state 113' -> CARET -> reduce -> 'action 1219'
actionsTable[7236] = 1220; // 'state 113' -> DASH -> reduce -> 'action 1220'
actionsTable[7238] = 1221; // 'state 113' -> UNION -> reduce -> 'action 1221'
actionsTable[7239] = 1222; // 'state 113' -> PAREN_OPEN -> reduce -> 'action 1222'
actionsTable[7240] = 1223; // 'state 113' -> PAREN_CLOSE -> reduce -> 'action 1223'
actionsTable[7241] = 1224; // 'state 113' -> QUANTIFIER -> reduce -> 'action 1224'
actionsTable[7242] = 1225; // 'state 113' -> BRACKET_OPEN -> reduce -> 'action 1225'
actionsTable[7244] = 1226; // 'state 113' -> @par-gen.EOF -> reduce -> 'action 1226'
actionsTable[7494] = 1227; // 'state 117' -> UNION -> shift -> 'action 1227'
actionsTable[7496] = 1228; // 'state 117' -> PAREN_CLOSE -> shift -> 'action 1228'
actionsTable[7552] = 1229; // 'state 118' -> CHARACTER -> shift -> 'action 1229'
actionsTable[7553] = 1230; // 'state 118' -> CONTROL_CHARACTER -> shift -> 'action 1230'
actionsTable[7554] = 1231; // 'state 118' -> BACKSLASH -> shift -> 'action 1231'
actionsTable[7555] = 1232; // 'state 118' -> CARET -> shift -> 'action 1232'
actionsTable[7556] = 1233; // 'state 118' -> DASH -> shift -> 'action 1233'
actionsTable[7558] = 1234; // 'state 118' -> UNION -> shift -> 'action 1234'
actionsTable[7559] = 1235; // 'state 118' -> PAREN_OPEN -> shift -> 'action 1235'
actionsTable[7560] = 1236; // 'state 118' -> PAREN_CLOSE -> shift -> 'action 1236'
actionsTable[7562] = 1237; // 'state 118' -> BRACKET_OPEN -> shift -> 'action 1237'
actionsTable[7571] = 1238; // 'state 118' -> Atom -> shift -> 'action 1238'
actionsTable[7572] = 1239; // 'state 118' -> Group -> shift -> 'action 1239'
actionsTable[7573] = 1240; // 'state 118' -> CharacterClass -> shift -> 'action 1240'
actionsTable[7577] = 1241; // 'state 118' -> Character -> shift -> 'action 1241'
actionsTable[7616] = 1242; // 'state 119' -> CHARACTER -> shift -> 'action 1242'
actionsTable[7617] = 1243; // 'state 119' -> CONTROL_CHARACTER -> shift -> 'action 1243'
actionsTable[7618] = 1244; // 'state 119' -> BACKSLASH -> shift -> 'action 1244'
actionsTable[7619] = 1245; // 'state 119' -> CARET -> shift -> 'action 1245'
actionsTable[7620] = 1246; // 'state 119' -> DASH -> shift -> 'action 1246'
actionsTable[7622] = 1247; // 'state 119' -> UNION -> shift -> 'action 1247'
actionsTable[7623] = 1248; // 'state 119' -> PAREN_OPEN -> shift -> 'action 1248'
actionsTable[7624] = 1249; // 'state 119' -> PAREN_CLOSE -> shift -> 'action 1249'
actionsTable[7626] = 1250; // 'state 119' -> BRACKET_OPEN -> shift -> 'action 1250'
actionsTable[7635] = 1251; // 'state 119' -> Atom -> shift -> 'action 1251'
actionsTable[7636] = 1252; // 'state 119' -> Group -> shift -> 'action 1252'
actionsTable[7637] = 1253; // 'state 119' -> CharacterClass -> shift -> 'action 1253'
actionsTable[7641] = 1254; // 'state 119' -> Character -> shift -> 'action 1254'
actionsTable[8256] = 1255; // 'state 129' -> CHARACTER -> shift -> 'action 1255'
actionsTable[8257] = 1256; // 'state 129' -> CONTROL_CHARACTER -> shift -> 'action 1256'
actionsTable[8258] = 1257; // 'state 129' -> BACKSLASH -> shift -> 'action 1257'
actionsTable[8261] = 1258; // 'state 129' -> DOT -> shift -> 'action 1258'
actionsTable[8262] = 1259; // 'state 129' -> UNION -> shift -> 'action 1259'
actionsTable[8263] = 1260; // 'state 129' -> PAREN_OPEN -> shift -> 'action 1260'
actionsTable[8264] = 1261; // 'state 129' -> PAREN_CLOSE -> shift -> 'action 1261'
actionsTable[8265] = 1262; // 'state 129' -> QUANTIFIER -> shift -> 'action 1262'
actionsTable[8267] = 1263; // 'state 129' -> BRACKET_CLOSE -> shift -> 'action 1263'
actionsTable[8279] = 1264; // 'state 129' -> CharacterClassCharacter -> shift -> 'action 1264'
actionsTable[8280] = 1265; // 'state 129' -> CharacterClassRange -> shift -> 'action 1265'
actionsTable[8320] = 1266; // 'state 130' -> CHARACTER -> reduce -> 'action 1266'
actionsTable[8321] = 1267; // 'state 130' -> CONTROL_CHARACTER -> reduce -> 'action 1267'
actionsTable[8322] = 1268; // 'state 130' -> BACKSLASH -> reduce -> 'action 1268'
actionsTable[8325] = 1269; // 'state 130' -> DOT -> reduce -> 'action 1269'
actionsTable[8326] = 1270; // 'state 130' -> UNION -> reduce -> 'action 1270'
actionsTable[8327] = 1271; // 'state 130' -> PAREN_OPEN -> reduce -> 'action 1271'
actionsTable[8328] = 1272; // 'state 130' -> PAREN_CLOSE -> reduce -> 'action 1272'
actionsTable[8329] = 1273; // 'state 130' -> QUANTIFIER -> reduce -> 'action 1273'
actionsTable[8331] = 1274; // 'state 130' -> BRACKET_CLOSE -> reduce -> 'action 1274'
actionsTable[7684] = 1275; // 'state 120' -> DASH -> shift -> 'action 1275'
actionsTable[7680] = 1276; // 'state 120' -> CHARACTER -> reduce -> 'action 1276'
actionsTable[7681] = 1277; // 'state 120' -> CONTROL_CHARACTER -> reduce -> 'action 1277'
actionsTable[7682] = 1278; // 'state 120' -> BACKSLASH -> reduce -> 'action 1278'
actionsTable[7685] = 1279; // 'state 120' -> DOT -> reduce -> 'action 1279'
actionsTable[7686] = 1280; // 'state 120' -> UNION -> reduce -> 'action 1280'
actionsTable[7687] = 1281; // 'state 120' -> PAREN_OPEN -> reduce -> 'action 1281'
actionsTable[7688] = 1282; // 'state 120' -> PAREN_CLOSE -> reduce -> 'action 1282'
actionsTable[7689] = 1283; // 'state 120' -> QUANTIFIER -> reduce -> 'action 1283'
actionsTable[7691] = 1284; // 'state 120' -> BRACKET_CLOSE -> reduce -> 'action 1284'
actionsTable[7744] = 1285; // 'state 121' -> CHARACTER -> reduce -> 'action 1285'
actionsTable[7745] = 1286; // 'state 121' -> CONTROL_CHARACTER -> reduce -> 'action 1286'
actionsTable[7746] = 1287; // 'state 121' -> BACKSLASH -> reduce -> 'action 1287'
actionsTable[7749] = 1288; // 'state 121' -> DOT -> reduce -> 'action 1288'
actionsTable[7750] = 1289; // 'state 121' -> UNION -> reduce -> 'action 1289'
actionsTable[7751] = 1290; // 'state 121' -> PAREN_OPEN -> reduce -> 'action 1290'
actionsTable[7752] = 1291; // 'state 121' -> PAREN_CLOSE -> reduce -> 'action 1291'
actionsTable[7753] = 1292; // 'state 121' -> QUANTIFIER -> reduce -> 'action 1292'
actionsTable[7755] = 1293; // 'state 121' -> BRACKET_CLOSE -> reduce -> 'action 1293'
actionsTable[7809] = 1294; // 'state 122' -> CONTROL_CHARACTER -> shift -> 'action 1294'
actionsTable[7810] = 1295; // 'state 122' -> BACKSLASH -> shift -> 'action 1295'
actionsTable[7811] = 1296; // 'state 122' -> CARET -> shift -> 'action 1296'
actionsTable[7812] = 1297; // 'state 122' -> DASH -> shift -> 'action 1297'
actionsTable[7819] = 1298; // 'state 122' -> BRACKET_CLOSE -> shift -> 'action 1298'
actionsTable[8192] = 1299; // 'state 128' -> CHARACTER -> reduce -> 'action 1299'
actionsTable[8193] = 1300; // 'state 128' -> CONTROL_CHARACTER -> reduce -> 'action 1300'
actionsTable[8194] = 1301; // 'state 128' -> BACKSLASH -> reduce -> 'action 1301'
actionsTable[8197] = 1302; // 'state 128' -> DOT -> reduce -> 'action 1302'
actionsTable[8198] = 1303; // 'state 128' -> UNION -> reduce -> 'action 1303'
actionsTable[8199] = 1304; // 'state 128' -> PAREN_OPEN -> reduce -> 'action 1304'
actionsTable[8200] = 1305; // 'state 128' -> PAREN_CLOSE -> reduce -> 'action 1305'
actionsTable[8201] = 1306; // 'state 128' -> QUANTIFIER -> reduce -> 'action 1306'
actionsTable[8203] = 1307; // 'state 128' -> BRACKET_CLOSE -> reduce -> 'action 1307'
actionsTable[8064] = 1308; // 'state 126' -> CHARACTER -> reduce -> 'action 1308'
actionsTable[8065] = 1309; // 'state 126' -> CONTROL_CHARACTER -> reduce -> 'action 1309'
actionsTable[8066] = 1310; // 'state 126' -> BACKSLASH -> reduce -> 'action 1310'
actionsTable[8069] = 1311; // 'state 126' -> DOT -> reduce -> 'action 1311'
actionsTable[8070] = 1312; // 'state 126' -> UNION -> reduce -> 'action 1312'
actionsTable[8071] = 1313; // 'state 126' -> PAREN_OPEN -> reduce -> 'action 1313'
actionsTable[8072] = 1314; // 'state 126' -> PAREN_CLOSE -> reduce -> 'action 1314'
actionsTable[8073] = 1315; // 'state 126' -> QUANTIFIER -> reduce -> 'action 1315'
actionsTable[8075] = 1316; // 'state 126' -> BRACKET_CLOSE -> reduce -> 'action 1316'
actionsTable[8128] = 1317; // 'state 127' -> CHARACTER -> reduce -> 'action 1317'
actionsTable[8129] = 1318; // 'state 127' -> CONTROL_CHARACTER -> reduce -> 'action 1318'
actionsTable[8130] = 1319; // 'state 127' -> BACKSLASH -> reduce -> 'action 1319'
actionsTable[8133] = 1320; // 'state 127' -> DOT -> reduce -> 'action 1320'
actionsTable[8134] = 1321; // 'state 127' -> UNION -> reduce -> 'action 1321'
actionsTable[8135] = 1322; // 'state 127' -> PAREN_OPEN -> reduce -> 'action 1322'
actionsTable[8136] = 1323; // 'state 127' -> PAREN_CLOSE -> reduce -> 'action 1323'
actionsTable[8137] = 1324; // 'state 127' -> QUANTIFIER -> reduce -> 'action 1324'
actionsTable[8139] = 1325; // 'state 127' -> BRACKET_CLOSE -> reduce -> 'action 1325'
actionsTable[8000] = 1326; // 'state 125' -> CHARACTER -> reduce -> 'action 1326'
actionsTable[8001] = 1327; // 'state 125' -> CONTROL_CHARACTER -> reduce -> 'action 1327'
actionsTable[8002] = 1328; // 'state 125' -> BACKSLASH -> reduce -> 'action 1328'
actionsTable[8005] = 1329; // 'state 125' -> DOT -> reduce -> 'action 1329'
actionsTable[8006] = 1330; // 'state 125' -> UNION -> reduce -> 'action 1330'
actionsTable[8007] = 1331; // 'state 125' -> PAREN_OPEN -> reduce -> 'action 1331'
actionsTable[8008] = 1332; // 'state 125' -> PAREN_CLOSE -> reduce -> 'action 1332'
actionsTable[8009] = 1333; // 'state 125' -> QUANTIFIER -> reduce -> 'action 1333'
actionsTable[8011] = 1334; // 'state 125' -> BRACKET_CLOSE -> reduce -> 'action 1334'
actionsTable[7936] = 1335; // 'state 124' -> CHARACTER -> reduce -> 'action 1335'
actionsTable[7937] = 1336; // 'state 124' -> CONTROL_CHARACTER -> reduce -> 'action 1336'
actionsTable[7938] = 1337; // 'state 124' -> BACKSLASH -> reduce -> 'action 1337'
actionsTable[7941] = 1338; // 'state 124' -> DOT -> reduce -> 'action 1338'
actionsTable[7942] = 1339; // 'state 124' -> UNION -> reduce -> 'action 1339'
actionsTable[7943] = 1340; // 'state 124' -> PAREN_OPEN -> reduce -> 'action 1340'
actionsTable[7944] = 1341; // 'state 124' -> PAREN_CLOSE -> reduce -> 'action 1341'
actionsTable[7945] = 1342; // 'state 124' -> QUANTIFIER -> reduce -> 'action 1342'
actionsTable[7947] = 1343; // 'state 124' -> BRACKET_CLOSE -> reduce -> 'action 1343'
actionsTable[8384] = 1344; // 'state 131' -> CHARACTER -> reduce -> 'action 1344'
actionsTable[8385] = 1345; // 'state 131' -> CONTROL_CHARACTER -> reduce -> 'action 1345'
actionsTable[8386] = 1346; // 'state 131' -> BACKSLASH -> reduce -> 'action 1346'
actionsTable[8389] = 1347; // 'state 131' -> DOT -> reduce -> 'action 1347'
actionsTable[8390] = 1348; // 'state 131' -> UNION -> reduce -> 'action 1348'
actionsTable[8391] = 1349; // 'state 131' -> PAREN_OPEN -> reduce -> 'action 1349'
actionsTable[8392] = 1350; // 'state 131' -> PAREN_CLOSE -> reduce -> 'action 1350'
actionsTable[8393] = 1351; // 'state 131' -> QUANTIFIER -> reduce -> 'action 1351'
actionsTable[8395] = 1352; // 'state 131' -> BRACKET_CLOSE -> reduce -> 'action 1352'
actionsTable[7872] = 1353; // 'state 123' -> CHARACTER -> shift -> 'action 1353'
actionsTable[7873] = 1354; // 'state 123' -> CONTROL_CHARACTER -> shift -> 'action 1354'
actionsTable[7874] = 1355; // 'state 123' -> BACKSLASH -> shift -> 'action 1355'
actionsTable[7877] = 1356; // 'state 123' -> DOT -> shift -> 'action 1356'
actionsTable[7878] = 1357; // 'state 123' -> UNION -> shift -> 'action 1357'
actionsTable[7879] = 1358; // 'state 123' -> PAREN_OPEN -> shift -> 'action 1358'
actionsTable[7880] = 1359; // 'state 123' -> PAREN_CLOSE -> shift -> 'action 1359'
actionsTable[7881] = 1360; // 'state 123' -> QUANTIFIER -> shift -> 'action 1360'
actionsTable[7894] = 1361; // 'state 123' -> CharacterClassCharacters -> shift -> 'action 1361'
actionsTable[7895] = 1362; // 'state 123' -> CharacterClassCharacter -> shift -> 'action 1362'
actionsTable[7896] = 1363; // 'state 123' -> CharacterClassRange -> shift -> 'action 1363'
actionsTable[8448] = 1364; // 'state 132' -> CHARACTER -> reduce -> 'action 1364'
actionsTable[8449] = 1365; // 'state 132' -> CONTROL_CHARACTER -> reduce -> 'action 1365'
actionsTable[8450] = 1366; // 'state 132' -> BACKSLASH -> reduce -> 'action 1366'
actionsTable[8451] = 1367; // 'state 132' -> CARET -> reduce -> 'action 1367'
actionsTable[8452] = 1368; // 'state 132' -> DASH -> reduce -> 'action 1368'
actionsTable[8454] = 1369; // 'state 132' -> UNION -> reduce -> 'action 1369'
actionsTable[8455] = 1370; // 'state 132' -> PAREN_OPEN -> reduce -> 'action 1370'
actionsTable[8456] = 1371; // 'state 132' -> PAREN_CLOSE -> reduce -> 'action 1371'
actionsTable[8457] = 1372; // 'state 132' -> QUANTIFIER -> reduce -> 'action 1372'
actionsTable[8458] = 1373; // 'state 132' -> BRACKET_OPEN -> reduce -> 'action 1373'
actionsTable[8460] = 1374; // 'state 132' -> @par-gen.EOF -> reduce -> 'action 1374'
actionsTable[8512] = 1375; // 'state 133' -> CHARACTER -> reduce -> 'action 1375'
actionsTable[8513] = 1376; // 'state 133' -> CONTROL_CHARACTER -> reduce -> 'action 1376'
actionsTable[8514] = 1377; // 'state 133' -> BACKSLASH -> reduce -> 'action 1377'
actionsTable[8515] = 1378; // 'state 133' -> CARET -> reduce -> 'action 1378'
actionsTable[8516] = 1379; // 'state 133' -> DASH -> reduce -> 'action 1379'
actionsTable[8518] = 1380; // 'state 133' -> UNION -> reduce -> 'action 1380'
actionsTable[8519] = 1381; // 'state 133' -> PAREN_OPEN -> reduce -> 'action 1381'
actionsTable[8520] = 1382; // 'state 133' -> PAREN_CLOSE -> reduce -> 'action 1382'
actionsTable[8521] = 1383; // 'state 133' -> QUANTIFIER -> reduce -> 'action 1383'
actionsTable[8522] = 1384; // 'state 133' -> BRACKET_OPEN -> reduce -> 'action 1384'
actionsTable[8524] = 1385; // 'state 133' -> @par-gen.EOF -> reduce -> 'action 1385'
actionsTable[8576] = 1386; // 'state 134' -> CHARACTER -> reduce -> 'action 1386'
actionsTable[8577] = 1387; // 'state 134' -> CONTROL_CHARACTER -> reduce -> 'action 1387'
actionsTable[8578] = 1388; // 'state 134' -> BACKSLASH -> reduce -> 'action 1388'
actionsTable[8579] = 1389; // 'state 134' -> CARET -> reduce -> 'action 1389'
actionsTable[8580] = 1390; // 'state 134' -> DASH -> reduce -> 'action 1390'
actionsTable[8582] = 1391; // 'state 134' -> UNION -> reduce -> 'action 1391'
actionsTable[8583] = 1392; // 'state 134' -> PAREN_OPEN -> reduce -> 'action 1392'
actionsTable[8584] = 1393; // 'state 134' -> PAREN_CLOSE -> reduce -> 'action 1393'
actionsTable[8585] = 1394; // 'state 134' -> QUANTIFIER -> reduce -> 'action 1394'
actionsTable[8586] = 1395; // 'state 134' -> BRACKET_OPEN -> reduce -> 'action 1395'
actionsTable[8588] = 1396; // 'state 134' -> @par-gen.EOF -> reduce -> 'action 1396'
actionsTable[9216] = 1397; // 'state 144' -> CHARACTER -> shift -> 'action 1397'
actionsTable[9217] = 1398; // 'state 144' -> CONTROL_CHARACTER -> shift -> 'action 1398'
actionsTable[9218] = 1399; // 'state 144' -> BACKSLASH -> shift -> 'action 1399'
actionsTable[9221] = 1400; // 'state 144' -> DOT -> shift -> 'action 1400'
actionsTable[9222] = 1401; // 'state 144' -> UNION -> shift -> 'action 1401'
actionsTable[9223] = 1402; // 'state 144' -> PAREN_OPEN -> shift -> 'action 1402'
actionsTable[9224] = 1403; // 'state 144' -> PAREN_CLOSE -> shift -> 'action 1403'
actionsTable[9225] = 1404; // 'state 144' -> QUANTIFIER -> shift -> 'action 1404'
actionsTable[9227] = 1405; // 'state 144' -> BRACKET_CLOSE -> shift -> 'action 1405'
actionsTable[9239] = 1406; // 'state 144' -> CharacterClassCharacter -> shift -> 'action 1406'
actionsTable[9240] = 1407; // 'state 144' -> CharacterClassRange -> shift -> 'action 1407'
actionsTable[9280] = 1408; // 'state 145' -> CHARACTER -> reduce -> 'action 1408'
actionsTable[9281] = 1409; // 'state 145' -> CONTROL_CHARACTER -> reduce -> 'action 1409'
actionsTable[9282] = 1410; // 'state 145' -> BACKSLASH -> reduce -> 'action 1410'
actionsTable[9285] = 1411; // 'state 145' -> DOT -> reduce -> 'action 1411'
actionsTable[9286] = 1412; // 'state 145' -> UNION -> reduce -> 'action 1412'
actionsTable[9287] = 1413; // 'state 145' -> PAREN_OPEN -> reduce -> 'action 1413'
actionsTable[9288] = 1414; // 'state 145' -> PAREN_CLOSE -> reduce -> 'action 1414'
actionsTable[9289] = 1415; // 'state 145' -> QUANTIFIER -> reduce -> 'action 1415'
actionsTable[9291] = 1416; // 'state 145' -> BRACKET_CLOSE -> reduce -> 'action 1416'
actionsTable[8644] = 1417; // 'state 135' -> DASH -> shift -> 'action 1417'
actionsTable[8640] = 1418; // 'state 135' -> CHARACTER -> reduce -> 'action 1418'
actionsTable[8641] = 1419; // 'state 135' -> CONTROL_CHARACTER -> reduce -> 'action 1419'
actionsTable[8642] = 1420; // 'state 135' -> BACKSLASH -> reduce -> 'action 1420'
actionsTable[8645] = 1421; // 'state 135' -> DOT -> reduce -> 'action 1421'
actionsTable[8646] = 1422; // 'state 135' -> UNION -> reduce -> 'action 1422'
actionsTable[8647] = 1423; // 'state 135' -> PAREN_OPEN -> reduce -> 'action 1423'
actionsTable[8648] = 1424; // 'state 135' -> PAREN_CLOSE -> reduce -> 'action 1424'
actionsTable[8649] = 1425; // 'state 135' -> QUANTIFIER -> reduce -> 'action 1425'
actionsTable[8651] = 1426; // 'state 135' -> BRACKET_CLOSE -> reduce -> 'action 1426'
actionsTable[8704] = 1427; // 'state 136' -> CHARACTER -> reduce -> 'action 1427'
actionsTable[8705] = 1428; // 'state 136' -> CONTROL_CHARACTER -> reduce -> 'action 1428'
actionsTable[8706] = 1429; // 'state 136' -> BACKSLASH -> reduce -> 'action 1429'
actionsTable[8709] = 1430; // 'state 136' -> DOT -> reduce -> 'action 1430'
actionsTable[8710] = 1431; // 'state 136' -> UNION -> reduce -> 'action 1431'
actionsTable[8711] = 1432; // 'state 136' -> PAREN_OPEN -> reduce -> 'action 1432'
actionsTable[8712] = 1433; // 'state 136' -> PAREN_CLOSE -> reduce -> 'action 1433'
actionsTable[8713] = 1434; // 'state 136' -> QUANTIFIER -> reduce -> 'action 1434'
actionsTable[8715] = 1435; // 'state 136' -> BRACKET_CLOSE -> reduce -> 'action 1435'
actionsTable[8769] = 1436; // 'state 137' -> CONTROL_CHARACTER -> shift -> 'action 1436'
actionsTable[8770] = 1437; // 'state 137' -> BACKSLASH -> shift -> 'action 1437'
actionsTable[8771] = 1438; // 'state 137' -> CARET -> shift -> 'action 1438'
actionsTable[8772] = 1439; // 'state 137' -> DASH -> shift -> 'action 1439'
actionsTable[8779] = 1440; // 'state 137' -> BRACKET_CLOSE -> shift -> 'action 1440'
actionsTable[9152] = 1441; // 'state 143' -> CHARACTER -> reduce -> 'action 1441'
actionsTable[9153] = 1442; // 'state 143' -> CONTROL_CHARACTER -> reduce -> 'action 1442'
actionsTable[9154] = 1443; // 'state 143' -> BACKSLASH -> reduce -> 'action 1443'
actionsTable[9157] = 1444; // 'state 143' -> DOT -> reduce -> 'action 1444'
actionsTable[9158] = 1445; // 'state 143' -> UNION -> reduce -> 'action 1445'
actionsTable[9159] = 1446; // 'state 143' -> PAREN_OPEN -> reduce -> 'action 1446'
actionsTable[9160] = 1447; // 'state 143' -> PAREN_CLOSE -> reduce -> 'action 1447'
actionsTable[9161] = 1448; // 'state 143' -> QUANTIFIER -> reduce -> 'action 1448'
actionsTable[9163] = 1449; // 'state 143' -> BRACKET_CLOSE -> reduce -> 'action 1449'
actionsTable[9024] = 1450; // 'state 141' -> CHARACTER -> reduce -> 'action 1450'
actionsTable[9025] = 1451; // 'state 141' -> CONTROL_CHARACTER -> reduce -> 'action 1451'
actionsTable[9026] = 1452; // 'state 141' -> BACKSLASH -> reduce -> 'action 1452'
actionsTable[9029] = 1453; // 'state 141' -> DOT -> reduce -> 'action 1453'
actionsTable[9030] = 1454; // 'state 141' -> UNION -> reduce -> 'action 1454'
actionsTable[9031] = 1455; // 'state 141' -> PAREN_OPEN -> reduce -> 'action 1455'
actionsTable[9032] = 1456; // 'state 141' -> PAREN_CLOSE -> reduce -> 'action 1456'
actionsTable[9033] = 1457; // 'state 141' -> QUANTIFIER -> reduce -> 'action 1457'
actionsTable[9035] = 1458; // 'state 141' -> BRACKET_CLOSE -> reduce -> 'action 1458'
actionsTable[9088] = 1459; // 'state 142' -> CHARACTER -> reduce -> 'action 1459'
actionsTable[9089] = 1460; // 'state 142' -> CONTROL_CHARACTER -> reduce -> 'action 1460'
actionsTable[9090] = 1461; // 'state 142' -> BACKSLASH -> reduce -> 'action 1461'
actionsTable[9093] = 1462; // 'state 142' -> DOT -> reduce -> 'action 1462'
actionsTable[9094] = 1463; // 'state 142' -> UNION -> reduce -> 'action 1463'
actionsTable[9095] = 1464; // 'state 142' -> PAREN_OPEN -> reduce -> 'action 1464'
actionsTable[9096] = 1465; // 'state 142' -> PAREN_CLOSE -> reduce -> 'action 1465'
actionsTable[9097] = 1466; // 'state 142' -> QUANTIFIER -> reduce -> 'action 1466'
actionsTable[9099] = 1467; // 'state 142' -> BRACKET_CLOSE -> reduce -> 'action 1467'
actionsTable[8960] = 1468; // 'state 140' -> CHARACTER -> reduce -> 'action 1468'
actionsTable[8961] = 1469; // 'state 140' -> CONTROL_CHARACTER -> reduce -> 'action 1469'
actionsTable[8962] = 1470; // 'state 140' -> BACKSLASH -> reduce -> 'action 1470'
actionsTable[8965] = 1471; // 'state 140' -> DOT -> reduce -> 'action 1471'
actionsTable[8966] = 1472; // 'state 140' -> UNION -> reduce -> 'action 1472'
actionsTable[8967] = 1473; // 'state 140' -> PAREN_OPEN -> reduce -> 'action 1473'
actionsTable[8968] = 1474; // 'state 140' -> PAREN_CLOSE -> reduce -> 'action 1474'
actionsTable[8969] = 1475; // 'state 140' -> QUANTIFIER -> reduce -> 'action 1475'
actionsTable[8971] = 1476; // 'state 140' -> BRACKET_CLOSE -> reduce -> 'action 1476'
actionsTable[8896] = 1477; // 'state 139' -> CHARACTER -> reduce -> 'action 1477'
actionsTable[8897] = 1478; // 'state 139' -> CONTROL_CHARACTER -> reduce -> 'action 1478'
actionsTable[8898] = 1479; // 'state 139' -> BACKSLASH -> reduce -> 'action 1479'
actionsTable[8901] = 1480; // 'state 139' -> DOT -> reduce -> 'action 1480'
actionsTable[8902] = 1481; // 'state 139' -> UNION -> reduce -> 'action 1481'
actionsTable[8903] = 1482; // 'state 139' -> PAREN_OPEN -> reduce -> 'action 1482'
actionsTable[8904] = 1483; // 'state 139' -> PAREN_CLOSE -> reduce -> 'action 1483'
actionsTable[8905] = 1484; // 'state 139' -> QUANTIFIER -> reduce -> 'action 1484'
actionsTable[8907] = 1485; // 'state 139' -> BRACKET_CLOSE -> reduce -> 'action 1485'
actionsTable[9344] = 1486; // 'state 146' -> CHARACTER -> reduce -> 'action 1486'
actionsTable[9345] = 1487; // 'state 146' -> CONTROL_CHARACTER -> reduce -> 'action 1487'
actionsTable[9346] = 1488; // 'state 146' -> BACKSLASH -> reduce -> 'action 1488'
actionsTable[9349] = 1489; // 'state 146' -> DOT -> reduce -> 'action 1489'
actionsTable[9350] = 1490; // 'state 146' -> UNION -> reduce -> 'action 1490'
actionsTable[9351] = 1491; // 'state 146' -> PAREN_OPEN -> reduce -> 'action 1491'
actionsTable[9352] = 1492; // 'state 146' -> PAREN_CLOSE -> reduce -> 'action 1492'
actionsTable[9353] = 1493; // 'state 146' -> QUANTIFIER -> reduce -> 'action 1493'
actionsTable[9355] = 1494; // 'state 146' -> BRACKET_CLOSE -> reduce -> 'action 1494'
actionsTable[8832] = 1495; // 'state 138' -> CHARACTER -> shift -> 'action 1495'
actionsTable[8833] = 1496; // 'state 138' -> CONTROL_CHARACTER -> shift -> 'action 1496'
actionsTable[8834] = 1497; // 'state 138' -> BACKSLASH -> shift -> 'action 1497'
actionsTable[8837] = 1498; // 'state 138' -> DOT -> shift -> 'action 1498'
actionsTable[8838] = 1499; // 'state 138' -> UNION -> shift -> 'action 1499'
actionsTable[8839] = 1500; // 'state 138' -> PAREN_OPEN -> shift -> 'action 1500'
actionsTable[8840] = 1501; // 'state 138' -> PAREN_CLOSE -> shift -> 'action 1501'
actionsTable[8841] = 1502; // 'state 138' -> QUANTIFIER -> shift -> 'action 1502'
actionsTable[8854] = 1503; // 'state 138' -> CharacterClassCharacters -> shift -> 'action 1503'
actionsTable[8855] = 1504; // 'state 138' -> CharacterClassCharacter -> shift -> 'action 1504'
actionsTable[8856] = 1505; // 'state 138' -> CharacterClassRange -> shift -> 'action 1505'
actionsTable[9920] = 1506; // 'state 155' -> CHARACTER -> reduce -> 'action 1506'
actionsTable[9921] = 1507; // 'state 155' -> CONTROL_CHARACTER -> reduce -> 'action 1507'
actionsTable[9922] = 1508; // 'state 155' -> BACKSLASH -> reduce -> 'action 1508'
actionsTable[9923] = 1509; // 'state 155' -> CARET -> reduce -> 'action 1509'
actionsTable[9924] = 1510; // 'state 155' -> DASH -> reduce -> 'action 1510'
actionsTable[9926] = 1511; // 'state 155' -> UNION -> reduce -> 'action 1511'
actionsTable[9927] = 1512; // 'state 155' -> PAREN_OPEN -> reduce -> 'action 1512'
actionsTable[9928] = 1513; // 'state 155' -> PAREN_CLOSE -> reduce -> 'action 1513'
actionsTable[9929] = 1514; // 'state 155' -> QUANTIFIER -> reduce -> 'action 1514'
actionsTable[9930] = 1515; // 'state 155' -> BRACKET_OPEN -> reduce -> 'action 1515'
actionsTable[9932] = 1516; // 'state 155' -> @par-gen.EOF -> reduce -> 'action 1516'
actionsTable[9984] = 1517; // 'state 156' -> CHARACTER -> reduce -> 'action 1517'
actionsTable[9985] = 1518; // 'state 156' -> CONTROL_CHARACTER -> reduce -> 'action 1518'
actionsTable[9986] = 1519; // 'state 156' -> BACKSLASH -> reduce -> 'action 1519'
actionsTable[9989] = 1520; // 'state 156' -> DOT -> reduce -> 'action 1520'
actionsTable[9990] = 1521; // 'state 156' -> UNION -> reduce -> 'action 1521'
actionsTable[9991] = 1522; // 'state 156' -> PAREN_OPEN -> reduce -> 'action 1522'
actionsTable[9992] = 1523; // 'state 156' -> PAREN_CLOSE -> reduce -> 'action 1523'
actionsTable[9993] = 1524; // 'state 156' -> QUANTIFIER -> reduce -> 'action 1524'
actionsTable[9995] = 1525; // 'state 156' -> BRACKET_CLOSE -> reduce -> 'action 1525'
actionsTable[9412] = 1526; // 'state 147' -> DASH -> shift -> 'action 1526'
actionsTable[9408] = 1527; // 'state 147' -> CHARACTER -> reduce -> 'action 1527'
actionsTable[9409] = 1528; // 'state 147' -> CONTROL_CHARACTER -> reduce -> 'action 1528'
actionsTable[9410] = 1529; // 'state 147' -> BACKSLASH -> reduce -> 'action 1529'
actionsTable[9413] = 1530; // 'state 147' -> DOT -> reduce -> 'action 1530'
actionsTable[9414] = 1531; // 'state 147' -> UNION -> reduce -> 'action 1531'
actionsTable[9415] = 1532; // 'state 147' -> PAREN_OPEN -> reduce -> 'action 1532'
actionsTable[9416] = 1533; // 'state 147' -> PAREN_CLOSE -> reduce -> 'action 1533'
actionsTable[9417] = 1534; // 'state 147' -> QUANTIFIER -> reduce -> 'action 1534'
actionsTable[9419] = 1535; // 'state 147' -> BRACKET_CLOSE -> reduce -> 'action 1535'
actionsTable[9472] = 1536; // 'state 148' -> CHARACTER -> reduce -> 'action 1536'
actionsTable[9473] = 1537; // 'state 148' -> CONTROL_CHARACTER -> reduce -> 'action 1537'
actionsTable[9474] = 1538; // 'state 148' -> BACKSLASH -> reduce -> 'action 1538'
actionsTable[9477] = 1539; // 'state 148' -> DOT -> reduce -> 'action 1539'
actionsTable[9478] = 1540; // 'state 148' -> UNION -> reduce -> 'action 1540'
actionsTable[9479] = 1541; // 'state 148' -> PAREN_OPEN -> reduce -> 'action 1541'
actionsTable[9480] = 1542; // 'state 148' -> PAREN_CLOSE -> reduce -> 'action 1542'
actionsTable[9481] = 1543; // 'state 148' -> QUANTIFIER -> reduce -> 'action 1543'
actionsTable[9483] = 1544; // 'state 148' -> BRACKET_CLOSE -> reduce -> 'action 1544'
actionsTable[9537] = 1545; // 'state 149' -> CONTROL_CHARACTER -> shift -> 'action 1545'
actionsTable[9538] = 1546; // 'state 149' -> BACKSLASH -> shift -> 'action 1546'
actionsTable[9539] = 1547; // 'state 149' -> CARET -> shift -> 'action 1547'
actionsTable[9540] = 1548; // 'state 149' -> DASH -> shift -> 'action 1548'
actionsTable[9547] = 1549; // 'state 149' -> BRACKET_CLOSE -> shift -> 'action 1549'
actionsTable[9856] = 1550; // 'state 154' -> CHARACTER -> reduce -> 'action 1550'
actionsTable[9857] = 1551; // 'state 154' -> CONTROL_CHARACTER -> reduce -> 'action 1551'
actionsTable[9858] = 1552; // 'state 154' -> BACKSLASH -> reduce -> 'action 1552'
actionsTable[9861] = 1553; // 'state 154' -> DOT -> reduce -> 'action 1553'
actionsTable[9862] = 1554; // 'state 154' -> UNION -> reduce -> 'action 1554'
actionsTable[9863] = 1555; // 'state 154' -> PAREN_OPEN -> reduce -> 'action 1555'
actionsTable[9864] = 1556; // 'state 154' -> PAREN_CLOSE -> reduce -> 'action 1556'
actionsTable[9865] = 1557; // 'state 154' -> QUANTIFIER -> reduce -> 'action 1557'
actionsTable[9867] = 1558; // 'state 154' -> BRACKET_CLOSE -> reduce -> 'action 1558'
actionsTable[9728] = 1559; // 'state 152' -> CHARACTER -> reduce -> 'action 1559'
actionsTable[9729] = 1560; // 'state 152' -> CONTROL_CHARACTER -> reduce -> 'action 1560'
actionsTable[9730] = 1561; // 'state 152' -> BACKSLASH -> reduce -> 'action 1561'
actionsTable[9733] = 1562; // 'state 152' -> DOT -> reduce -> 'action 1562'
actionsTable[9734] = 1563; // 'state 152' -> UNION -> reduce -> 'action 1563'
actionsTable[9735] = 1564; // 'state 152' -> PAREN_OPEN -> reduce -> 'action 1564'
actionsTable[9736] = 1565; // 'state 152' -> PAREN_CLOSE -> reduce -> 'action 1565'
actionsTable[9737] = 1566; // 'state 152' -> QUANTIFIER -> reduce -> 'action 1566'
actionsTable[9739] = 1567; // 'state 152' -> BRACKET_CLOSE -> reduce -> 'action 1567'
actionsTable[9792] = 1568; // 'state 153' -> CHARACTER -> reduce -> 'action 1568'
actionsTable[9793] = 1569; // 'state 153' -> CONTROL_CHARACTER -> reduce -> 'action 1569'
actionsTable[9794] = 1570; // 'state 153' -> BACKSLASH -> reduce -> 'action 1570'
actionsTable[9797] = 1571; // 'state 153' -> DOT -> reduce -> 'action 1571'
actionsTable[9798] = 1572; // 'state 153' -> UNION -> reduce -> 'action 1572'
actionsTable[9799] = 1573; // 'state 153' -> PAREN_OPEN -> reduce -> 'action 1573'
actionsTable[9800] = 1574; // 'state 153' -> PAREN_CLOSE -> reduce -> 'action 1574'
actionsTable[9801] = 1575; // 'state 153' -> QUANTIFIER -> reduce -> 'action 1575'
actionsTable[9803] = 1576; // 'state 153' -> BRACKET_CLOSE -> reduce -> 'action 1576'
actionsTable[9664] = 1577; // 'state 151' -> CHARACTER -> reduce -> 'action 1577'
actionsTable[9665] = 1578; // 'state 151' -> CONTROL_CHARACTER -> reduce -> 'action 1578'
actionsTable[9666] = 1579; // 'state 151' -> BACKSLASH -> reduce -> 'action 1579'
actionsTable[9669] = 1580; // 'state 151' -> DOT -> reduce -> 'action 1580'
actionsTable[9670] = 1581; // 'state 151' -> UNION -> reduce -> 'action 1581'
actionsTable[9671] = 1582; // 'state 151' -> PAREN_OPEN -> reduce -> 'action 1582'
actionsTable[9672] = 1583; // 'state 151' -> PAREN_CLOSE -> reduce -> 'action 1583'
actionsTable[9673] = 1584; // 'state 151' -> QUANTIFIER -> reduce -> 'action 1584'
actionsTable[9675] = 1585; // 'state 151' -> BRACKET_CLOSE -> reduce -> 'action 1585'
actionsTable[9600] = 1586; // 'state 150' -> CHARACTER -> reduce -> 'action 1586'
actionsTable[9601] = 1587; // 'state 150' -> CONTROL_CHARACTER -> reduce -> 'action 1587'
actionsTable[9602] = 1588; // 'state 150' -> BACKSLASH -> reduce -> 'action 1588'
actionsTable[9605] = 1589; // 'state 150' -> DOT -> reduce -> 'action 1589'
actionsTable[9606] = 1590; // 'state 150' -> UNION -> reduce -> 'action 1590'
actionsTable[9607] = 1591; // 'state 150' -> PAREN_OPEN -> reduce -> 'action 1591'
actionsTable[9608] = 1592; // 'state 150' -> PAREN_CLOSE -> reduce -> 'action 1592'
actionsTable[9609] = 1593; // 'state 150' -> QUANTIFIER -> reduce -> 'action 1593'
actionsTable[9611] = 1594; // 'state 150' -> BRACKET_CLOSE -> reduce -> 'action 1594'
actionsTable[10048] = 1595; // 'state 157' -> CHARACTER -> reduce -> 'action 1595'
actionsTable[10049] = 1596; // 'state 157' -> CONTROL_CHARACTER -> reduce -> 'action 1596'
actionsTable[10050] = 1597; // 'state 157' -> BACKSLASH -> reduce -> 'action 1597'
actionsTable[10053] = 1598; // 'state 157' -> DOT -> reduce -> 'action 1598'
actionsTable[10054] = 1599; // 'state 157' -> UNION -> reduce -> 'action 1599'
actionsTable[10055] = 1600; // 'state 157' -> PAREN_OPEN -> reduce -> 'action 1600'
actionsTable[10056] = 1601; // 'state 157' -> PAREN_CLOSE -> reduce -> 'action 1601'
actionsTable[10057] = 1602; // 'state 157' -> QUANTIFIER -> reduce -> 'action 1602'
actionsTable[10059] = 1603; // 'state 157' -> BRACKET_CLOSE -> reduce -> 'action 1603'
actionsTable[10112] = 1604; // 'state 158' -> CHARACTER -> shift -> 'action 1604'
actionsTable[10368] = 1605; // 'state 162' -> CHARACTER -> reduce -> 'action 1605'
actionsTable[10369] = 1606; // 'state 162' -> CONTROL_CHARACTER -> reduce -> 'action 1606'
actionsTable[10370] = 1607; // 'state 162' -> BACKSLASH -> reduce -> 'action 1607'
actionsTable[10373] = 1608; // 'state 162' -> DOT -> reduce -> 'action 1608'
actionsTable[10374] = 1609; // 'state 162' -> UNION -> reduce -> 'action 1609'
actionsTable[10375] = 1610; // 'state 162' -> PAREN_OPEN -> reduce -> 'action 1610'
actionsTable[10376] = 1611; // 'state 162' -> PAREN_CLOSE -> reduce -> 'action 1611'
actionsTable[10377] = 1612; // 'state 162' -> QUANTIFIER -> reduce -> 'action 1612'
actionsTable[10379] = 1613; // 'state 162' -> BRACKET_CLOSE -> reduce -> 'action 1613'
actionsTable[10304] = 1614; // 'state 161' -> CHARACTER -> reduce -> 'action 1614'
actionsTable[10305] = 1615; // 'state 161' -> CONTROL_CHARACTER -> reduce -> 'action 1615'
actionsTable[10306] = 1616; // 'state 161' -> BACKSLASH -> reduce -> 'action 1616'
actionsTable[10309] = 1617; // 'state 161' -> DOT -> reduce -> 'action 1617'
actionsTable[10310] = 1618; // 'state 161' -> UNION -> reduce -> 'action 1618'
actionsTable[10311] = 1619; // 'state 161' -> PAREN_OPEN -> reduce -> 'action 1619'
actionsTable[10312] = 1620; // 'state 161' -> PAREN_CLOSE -> reduce -> 'action 1620'
actionsTable[10313] = 1621; // 'state 161' -> QUANTIFIER -> reduce -> 'action 1621'
actionsTable[10315] = 1622; // 'state 161' -> BRACKET_CLOSE -> reduce -> 'action 1622'
actionsTable[10240] = 1623; // 'state 160' -> CHARACTER -> reduce -> 'action 1623'
actionsTable[10241] = 1624; // 'state 160' -> CONTROL_CHARACTER -> reduce -> 'action 1624'
actionsTable[10242] = 1625; // 'state 160' -> BACKSLASH -> reduce -> 'action 1625'
actionsTable[10245] = 1626; // 'state 160' -> DOT -> reduce -> 'action 1626'
actionsTable[10246] = 1627; // 'state 160' -> UNION -> reduce -> 'action 1627'
actionsTable[10247] = 1628; // 'state 160' -> PAREN_OPEN -> reduce -> 'action 1628'
actionsTable[10248] = 1629; // 'state 160' -> PAREN_CLOSE -> reduce -> 'action 1629'
actionsTable[10249] = 1630; // 'state 160' -> QUANTIFIER -> reduce -> 'action 1630'
actionsTable[10251] = 1631; // 'state 160' -> BRACKET_CLOSE -> reduce -> 'action 1631'
actionsTable[10176] = 1632; // 'state 159' -> CHARACTER -> reduce -> 'action 1632'
actionsTable[10177] = 1633; // 'state 159' -> CONTROL_CHARACTER -> reduce -> 'action 1633'
actionsTable[10178] = 1634; // 'state 159' -> BACKSLASH -> reduce -> 'action 1634'
actionsTable[10181] = 1635; // 'state 159' -> DOT -> reduce -> 'action 1635'
actionsTable[10182] = 1636; // 'state 159' -> UNION -> reduce -> 'action 1636'
actionsTable[10183] = 1637; // 'state 159' -> PAREN_OPEN -> reduce -> 'action 1637'
actionsTable[10184] = 1638; // 'state 159' -> PAREN_CLOSE -> reduce -> 'action 1638'
actionsTable[10185] = 1639; // 'state 159' -> QUANTIFIER -> reduce -> 'action 1639'
actionsTable[10187] = 1640; // 'state 159' -> BRACKET_CLOSE -> reduce -> 'action 1640'
actionsTable[10432] = 1641; // 'state 163' -> CHARACTER -> reduce -> 'action 1641'
actionsTable[10433] = 1642; // 'state 163' -> CONTROL_CHARACTER -> reduce -> 'action 1642'
actionsTable[10434] = 1643; // 'state 163' -> BACKSLASH -> reduce -> 'action 1643'
actionsTable[10437] = 1644; // 'state 163' -> DOT -> reduce -> 'action 1644'
actionsTable[10438] = 1645; // 'state 163' -> UNION -> reduce -> 'action 1645'
actionsTable[10439] = 1646; // 'state 163' -> PAREN_OPEN -> reduce -> 'action 1646'
actionsTable[10440] = 1647; // 'state 163' -> PAREN_CLOSE -> reduce -> 'action 1647'
actionsTable[10441] = 1648; // 'state 163' -> QUANTIFIER -> reduce -> 'action 1648'
actionsTable[10443] = 1649; // 'state 163' -> BRACKET_CLOSE -> reduce -> 'action 1649'
actionsTable[10496] = 1650; // 'state 164' -> CHARACTER -> shift -> 'action 1650'
actionsTable[10497] = 1651; // 'state 164' -> CONTROL_CHARACTER -> shift -> 'action 1651'
actionsTable[10498] = 1652; // 'state 164' -> BACKSLASH -> shift -> 'action 1652'
actionsTable[10501] = 1653; // 'state 164' -> DOT -> shift -> 'action 1653'
actionsTable[10502] = 1654; // 'state 164' -> UNION -> shift -> 'action 1654'
actionsTable[10503] = 1655; // 'state 164' -> PAREN_OPEN -> shift -> 'action 1655'
actionsTable[10504] = 1656; // 'state 164' -> PAREN_CLOSE -> shift -> 'action 1656'
actionsTable[10505] = 1657; // 'state 164' -> QUANTIFIER -> shift -> 'action 1657'
actionsTable[10507] = 1658; // 'state 164' -> BRACKET_CLOSE -> shift -> 'action 1658'
actionsTable[10519] = 1659; // 'state 164' -> CharacterClassCharacter -> shift -> 'action 1659'
actionsTable[10520] = 1660; // 'state 164' -> CharacterClassRange -> shift -> 'action 1660'
actionsTable[10560] = 1661; // 'state 165' -> CHARACTER -> reduce -> 'action 1661'
actionsTable[10561] = 1662; // 'state 165' -> CONTROL_CHARACTER -> reduce -> 'action 1662'
actionsTable[10562] = 1663; // 'state 165' -> BACKSLASH -> reduce -> 'action 1663'
actionsTable[10563] = 1664; // 'state 165' -> CARET -> reduce -> 'action 1664'
actionsTable[10564] = 1665; // 'state 165' -> DASH -> reduce -> 'action 1665'
actionsTable[10566] = 1666; // 'state 165' -> UNION -> reduce -> 'action 1666'
actionsTable[10567] = 1667; // 'state 165' -> PAREN_OPEN -> reduce -> 'action 1667'
actionsTable[10568] = 1668; // 'state 165' -> PAREN_CLOSE -> reduce -> 'action 1668'
actionsTable[10569] = 1669; // 'state 165' -> QUANTIFIER -> reduce -> 'action 1669'
actionsTable[10570] = 1670; // 'state 165' -> BRACKET_OPEN -> reduce -> 'action 1670'
actionsTable[10572] = 1671; // 'state 165' -> @par-gen.EOF -> reduce -> 'action 1671'
actionsTable[10624] = 1672; // 'state 166' -> CHARACTER -> reduce -> 'action 1672'
actionsTable[10625] = 1673; // 'state 166' -> CONTROL_CHARACTER -> reduce -> 'action 1673'
actionsTable[10626] = 1674; // 'state 166' -> BACKSLASH -> reduce -> 'action 1674'
actionsTable[10627] = 1675; // 'state 166' -> CARET -> reduce -> 'action 1675'
actionsTable[10628] = 1676; // 'state 166' -> DASH -> reduce -> 'action 1676'
actionsTable[10630] = 1677; // 'state 166' -> UNION -> reduce -> 'action 1677'
actionsTable[10631] = 1678; // 'state 166' -> PAREN_OPEN -> reduce -> 'action 1678'
actionsTable[10632] = 1679; // 'state 166' -> PAREN_CLOSE -> reduce -> 'action 1679'
actionsTable[10633] = 1680; // 'state 166' -> QUANTIFIER -> reduce -> 'action 1680'
actionsTable[10634] = 1681; // 'state 166' -> BRACKET_OPEN -> reduce -> 'action 1681'
actionsTable[10636] = 1682; // 'state 166' -> @par-gen.EOF -> reduce -> 'action 1682'
actionsTable[10688] = 1683; // 'state 167' -> CHARACTER -> reduce -> 'action 1683'
actionsTable[10689] = 1684; // 'state 167' -> CONTROL_CHARACTER -> reduce -> 'action 1684'
actionsTable[10690] = 1685; // 'state 167' -> BACKSLASH -> reduce -> 'action 1685'
actionsTable[10691] = 1686; // 'state 167' -> CARET -> reduce -> 'action 1686'
actionsTable[10692] = 1687; // 'state 167' -> DASH -> reduce -> 'action 1687'
actionsTable[10694] = 1688; // 'state 167' -> UNION -> reduce -> 'action 1688'
actionsTable[10695] = 1689; // 'state 167' -> PAREN_OPEN -> reduce -> 'action 1689'
actionsTable[10696] = 1690; // 'state 167' -> PAREN_CLOSE -> reduce -> 'action 1690'
actionsTable[10697] = 1691; // 'state 167' -> QUANTIFIER -> reduce -> 'action 1691'
actionsTable[10698] = 1692; // 'state 167' -> BRACKET_OPEN -> reduce -> 'action 1692'
actionsTable[10700] = 1693; // 'state 167' -> @par-gen.EOF -> reduce -> 'action 1693'
actionsTable[10752] = 1694; // 'state 168' -> CHARACTER -> reduce -> 'action 1694'
actionsTable[10753] = 1695; // 'state 168' -> CONTROL_CHARACTER -> reduce -> 'action 1695'
actionsTable[10754] = 1696; // 'state 168' -> BACKSLASH -> reduce -> 'action 1696'
actionsTable[10755] = 1697; // 'state 168' -> CARET -> reduce -> 'action 1697'
actionsTable[10756] = 1698; // 'state 168' -> DASH -> reduce -> 'action 1698'
actionsTable[10758] = 1699; // 'state 168' -> UNION -> reduce -> 'action 1699'
actionsTable[10759] = 1700; // 'state 168' -> PAREN_OPEN -> reduce -> 'action 1700'
actionsTable[10760] = 1701; // 'state 168' -> PAREN_CLOSE -> reduce -> 'action 1701'
actionsTable[10761] = 1702; // 'state 168' -> QUANTIFIER -> reduce -> 'action 1702'
actionsTable[10762] = 1703; // 'state 168' -> BRACKET_OPEN -> reduce -> 'action 1703'
actionsTable[10764] = 1704; // 'state 168' -> @par-gen.EOF -> reduce -> 'action 1704'
actionsTable[10816] = 1705; // 'state 169' -> CHARACTER -> reduce -> 'action 1705'
actionsTable[10817] = 1706; // 'state 169' -> CONTROL_CHARACTER -> reduce -> 'action 1706'
actionsTable[10818] = 1707; // 'state 169' -> BACKSLASH -> reduce -> 'action 1707'
actionsTable[10821] = 1708; // 'state 169' -> DOT -> reduce -> 'action 1708'
actionsTable[10822] = 1709; // 'state 169' -> UNION -> reduce -> 'action 1709'
actionsTable[10823] = 1710; // 'state 169' -> PAREN_OPEN -> reduce -> 'action 1710'
actionsTable[10824] = 1711; // 'state 169' -> PAREN_CLOSE -> reduce -> 'action 1711'
actionsTable[10825] = 1712; // 'state 169' -> QUANTIFIER -> reduce -> 'action 1712'
actionsTable[10827] = 1713; // 'state 169' -> BRACKET_CLOSE -> reduce -> 'action 1713'
actionsTable[10880] = 1714; // 'state 170' -> CHARACTER -> shift -> 'action 1714'
actionsTable[11136] = 1715; // 'state 174' -> CHARACTER -> reduce -> 'action 1715'
actionsTable[11137] = 1716; // 'state 174' -> CONTROL_CHARACTER -> reduce -> 'action 1716'
actionsTable[11138] = 1717; // 'state 174' -> BACKSLASH -> reduce -> 'action 1717'
actionsTable[11141] = 1718; // 'state 174' -> DOT -> reduce -> 'action 1718'
actionsTable[11142] = 1719; // 'state 174' -> UNION -> reduce -> 'action 1719'
actionsTable[11143] = 1720; // 'state 174' -> PAREN_OPEN -> reduce -> 'action 1720'
actionsTable[11144] = 1721; // 'state 174' -> PAREN_CLOSE -> reduce -> 'action 1721'
actionsTable[11145] = 1722; // 'state 174' -> QUANTIFIER -> reduce -> 'action 1722'
actionsTable[11147] = 1723; // 'state 174' -> BRACKET_CLOSE -> reduce -> 'action 1723'
actionsTable[11072] = 1724; // 'state 173' -> CHARACTER -> reduce -> 'action 1724'
actionsTable[11073] = 1725; // 'state 173' -> CONTROL_CHARACTER -> reduce -> 'action 1725'
actionsTable[11074] = 1726; // 'state 173' -> BACKSLASH -> reduce -> 'action 1726'
actionsTable[11077] = 1727; // 'state 173' -> DOT -> reduce -> 'action 1727'
actionsTable[11078] = 1728; // 'state 173' -> UNION -> reduce -> 'action 1728'
actionsTable[11079] = 1729; // 'state 173' -> PAREN_OPEN -> reduce -> 'action 1729'
actionsTable[11080] = 1730; // 'state 173' -> PAREN_CLOSE -> reduce -> 'action 1730'
actionsTable[11081] = 1731; // 'state 173' -> QUANTIFIER -> reduce -> 'action 1731'
actionsTable[11083] = 1732; // 'state 173' -> BRACKET_CLOSE -> reduce -> 'action 1732'
actionsTable[11008] = 1733; // 'state 172' -> CHARACTER -> reduce -> 'action 1733'
actionsTable[11009] = 1734; // 'state 172' -> CONTROL_CHARACTER -> reduce -> 'action 1734'
actionsTable[11010] = 1735; // 'state 172' -> BACKSLASH -> reduce -> 'action 1735'
actionsTable[11013] = 1736; // 'state 172' -> DOT -> reduce -> 'action 1736'
actionsTable[11014] = 1737; // 'state 172' -> UNION -> reduce -> 'action 1737'
actionsTable[11015] = 1738; // 'state 172' -> PAREN_OPEN -> reduce -> 'action 1738'
actionsTable[11016] = 1739; // 'state 172' -> PAREN_CLOSE -> reduce -> 'action 1739'
actionsTable[11017] = 1740; // 'state 172' -> QUANTIFIER -> reduce -> 'action 1740'
actionsTable[11019] = 1741; // 'state 172' -> BRACKET_CLOSE -> reduce -> 'action 1741'
actionsTable[10944] = 1742; // 'state 171' -> CHARACTER -> reduce -> 'action 1742'
actionsTable[10945] = 1743; // 'state 171' -> CONTROL_CHARACTER -> reduce -> 'action 1743'
actionsTable[10946] = 1744; // 'state 171' -> BACKSLASH -> reduce -> 'action 1744'
actionsTable[10949] = 1745; // 'state 171' -> DOT -> reduce -> 'action 1745'
actionsTable[10950] = 1746; // 'state 171' -> UNION -> reduce -> 'action 1746'
actionsTable[10951] = 1747; // 'state 171' -> PAREN_OPEN -> reduce -> 'action 1747'
actionsTable[10952] = 1748; // 'state 171' -> PAREN_CLOSE -> reduce -> 'action 1748'
actionsTable[10953] = 1749; // 'state 171' -> QUANTIFIER -> reduce -> 'action 1749'
actionsTable[10955] = 1750; // 'state 171' -> BRACKET_CLOSE -> reduce -> 'action 1750'
actionsTable[11200] = 1751; // 'state 175' -> CHARACTER -> reduce -> 'action 1751'
actionsTable[11201] = 1752; // 'state 175' -> CONTROL_CHARACTER -> reduce -> 'action 1752'
actionsTable[11202] = 1753; // 'state 175' -> BACKSLASH -> reduce -> 'action 1753'
actionsTable[11205] = 1754; // 'state 175' -> DOT -> reduce -> 'action 1754'
actionsTable[11206] = 1755; // 'state 175' -> UNION -> reduce -> 'action 1755'
actionsTable[11207] = 1756; // 'state 175' -> PAREN_OPEN -> reduce -> 'action 1756'
actionsTable[11208] = 1757; // 'state 175' -> PAREN_CLOSE -> reduce -> 'action 1757'
actionsTable[11209] = 1758; // 'state 175' -> QUANTIFIER -> reduce -> 'action 1758'
actionsTable[11211] = 1759; // 'state 175' -> BRACKET_CLOSE -> reduce -> 'action 1759'
actionsTable[11264] = 1760; // 'state 176' -> CHARACTER -> shift -> 'action 1760'
actionsTable[11265] = 1761; // 'state 176' -> CONTROL_CHARACTER -> shift -> 'action 1761'
actionsTable[11266] = 1762; // 'state 176' -> BACKSLASH -> shift -> 'action 1762'
actionsTable[11269] = 1763; // 'state 176' -> DOT -> shift -> 'action 1763'
actionsTable[11270] = 1764; // 'state 176' -> UNION -> shift -> 'action 1764'
actionsTable[11271] = 1765; // 'state 176' -> PAREN_OPEN -> shift -> 'action 1765'
actionsTable[11272] = 1766; // 'state 176' -> PAREN_CLOSE -> shift -> 'action 1766'
actionsTable[11273] = 1767; // 'state 176' -> QUANTIFIER -> shift -> 'action 1767'
actionsTable[11275] = 1768; // 'state 176' -> BRACKET_CLOSE -> shift -> 'action 1768'
actionsTable[11287] = 1769; // 'state 176' -> CharacterClassCharacter -> shift -> 'action 1769'
actionsTable[11288] = 1770; // 'state 176' -> CharacterClassRange -> shift -> 'action 1770'
actionsTable[11328] = 1771; // 'state 177' -> CHARACTER -> reduce -> 'action 1771'
actionsTable[11329] = 1772; // 'state 177' -> CONTROL_CHARACTER -> reduce -> 'action 1772'
actionsTable[11330] = 1773; // 'state 177' -> BACKSLASH -> reduce -> 'action 1773'
actionsTable[11331] = 1774; // 'state 177' -> CARET -> reduce -> 'action 1774'
actionsTable[11332] = 1775; // 'state 177' -> DASH -> reduce -> 'action 1775'
actionsTable[11334] = 1776; // 'state 177' -> UNION -> reduce -> 'action 1776'
actionsTable[11335] = 1777; // 'state 177' -> PAREN_OPEN -> reduce -> 'action 1777'
actionsTable[11336] = 1778; // 'state 177' -> PAREN_CLOSE -> reduce -> 'action 1778'
actionsTable[11337] = 1779; // 'state 177' -> QUANTIFIER -> reduce -> 'action 1779'
actionsTable[11338] = 1780; // 'state 177' -> BRACKET_OPEN -> reduce -> 'action 1780'
actionsTable[11340] = 1781; // 'state 177' -> @par-gen.EOF -> reduce -> 'action 1781'
actionsTable[11392] = 1782; // 'state 178' -> CHARACTER -> reduce -> 'action 1782'
actionsTable[11393] = 1783; // 'state 178' -> CONTROL_CHARACTER -> reduce -> 'action 1783'
actionsTable[11394] = 1784; // 'state 178' -> BACKSLASH -> reduce -> 'action 1784'
actionsTable[11395] = 1785; // 'state 178' -> CARET -> reduce -> 'action 1785'
actionsTable[11396] = 1786; // 'state 178' -> DASH -> reduce -> 'action 1786'
actionsTable[11398] = 1787; // 'state 178' -> UNION -> reduce -> 'action 1787'
actionsTable[11399] = 1788; // 'state 178' -> PAREN_OPEN -> reduce -> 'action 1788'
actionsTable[11400] = 1789; // 'state 178' -> PAREN_CLOSE -> reduce -> 'action 1789'
actionsTable[11401] = 1790; // 'state 178' -> QUANTIFIER -> reduce -> 'action 1790'
actionsTable[11402] = 1791; // 'state 178' -> BRACKET_OPEN -> reduce -> 'action 1791'
actionsTable[11404] = 1792; // 'state 178' -> @par-gen.EOF -> reduce -> 'action 1792'
actionsTable[11456] = 1793; // 'state 179' -> CHARACTER -> reduce -> 'action 1793'
actionsTable[11457] = 1794; // 'state 179' -> CONTROL_CHARACTER -> reduce -> 'action 1794'
actionsTable[11458] = 1795; // 'state 179' -> BACKSLASH -> reduce -> 'action 1795'
actionsTable[11459] = 1796; // 'state 179' -> CARET -> reduce -> 'action 1796'
actionsTable[11460] = 1797; // 'state 179' -> DASH -> reduce -> 'action 1797'
actionsTable[11462] = 1798; // 'state 179' -> UNION -> reduce -> 'action 1798'
actionsTable[11463] = 1799; // 'state 179' -> PAREN_OPEN -> reduce -> 'action 1799'
actionsTable[11464] = 1800; // 'state 179' -> PAREN_CLOSE -> reduce -> 'action 1800'
actionsTable[11465] = 1801; // 'state 179' -> QUANTIFIER -> reduce -> 'action 1801'
actionsTable[11466] = 1802; // 'state 179' -> BRACKET_OPEN -> reduce -> 'action 1802'
actionsTable[11468] = 1803; // 'state 179' -> @par-gen.EOF -> reduce -> 'action 1803'
actionsTable[11520] = 1804; // 'state 180' -> CHARACTER -> reduce -> 'action 1804'
actionsTable[11521] = 1805; // 'state 180' -> CONTROL_CHARACTER -> reduce -> 'action 1805'
actionsTable[11522] = 1806; // 'state 180' -> BACKSLASH -> reduce -> 'action 1806'
actionsTable[11523] = 1807; // 'state 180' -> CARET -> reduce -> 'action 1807'
actionsTable[11524] = 1808; // 'state 180' -> DASH -> reduce -> 'action 1808'
actionsTable[11526] = 1809; // 'state 180' -> UNION -> reduce -> 'action 1809'
actionsTable[11527] = 1810; // 'state 180' -> PAREN_OPEN -> reduce -> 'action 1810'
actionsTable[11528] = 1811; // 'state 180' -> PAREN_CLOSE -> reduce -> 'action 1811'
actionsTable[11529] = 1812; // 'state 180' -> QUANTIFIER -> reduce -> 'action 1812'
actionsTable[11530] = 1813; // 'state 180' -> BRACKET_OPEN -> reduce -> 'action 1813'
actionsTable[11532] = 1814; // 'state 180' -> @par-gen.EOF -> reduce -> 'action 1814'
actionsTable[11584] = 1815; // 'state 181' -> CHARACTER -> reduce -> 'action 1815'
actionsTable[11585] = 1816; // 'state 181' -> CONTROL_CHARACTER -> reduce -> 'action 1816'
actionsTable[11586] = 1817; // 'state 181' -> BACKSLASH -> reduce -> 'action 1817'
actionsTable[11589] = 1818; // 'state 181' -> DOT -> reduce -> 'action 1818'
actionsTable[11590] = 1819; // 'state 181' -> UNION -> reduce -> 'action 1819'
actionsTable[11591] = 1820; // 'state 181' -> PAREN_OPEN -> reduce -> 'action 1820'
actionsTable[11592] = 1821; // 'state 181' -> PAREN_CLOSE -> reduce -> 'action 1821'
actionsTable[11593] = 1822; // 'state 181' -> QUANTIFIER -> reduce -> 'action 1822'
actionsTable[11595] = 1823; // 'state 181' -> BRACKET_CLOSE -> reduce -> 'action 1823'
actionsTable[11648] = 1824; // 'state 182' -> CHARACTER -> shift -> 'action 1824'
actionsTable[11904] = 1825; // 'state 186' -> CHARACTER -> reduce -> 'action 1825'
actionsTable[11905] = 1826; // 'state 186' -> CONTROL_CHARACTER -> reduce -> 'action 1826'
actionsTable[11906] = 1827; // 'state 186' -> BACKSLASH -> reduce -> 'action 1827'
actionsTable[11909] = 1828; // 'state 186' -> DOT -> reduce -> 'action 1828'
actionsTable[11910] = 1829; // 'state 186' -> UNION -> reduce -> 'action 1829'
actionsTable[11911] = 1830; // 'state 186' -> PAREN_OPEN -> reduce -> 'action 1830'
actionsTable[11912] = 1831; // 'state 186' -> PAREN_CLOSE -> reduce -> 'action 1831'
actionsTable[11913] = 1832; // 'state 186' -> QUANTIFIER -> reduce -> 'action 1832'
actionsTable[11915] = 1833; // 'state 186' -> BRACKET_CLOSE -> reduce -> 'action 1833'
actionsTable[11840] = 1834; // 'state 185' -> CHARACTER -> reduce -> 'action 1834'
actionsTable[11841] = 1835; // 'state 185' -> CONTROL_CHARACTER -> reduce -> 'action 1835'
actionsTable[11842] = 1836; // 'state 185' -> BACKSLASH -> reduce -> 'action 1836'
actionsTable[11845] = 1837; // 'state 185' -> DOT -> reduce -> 'action 1837'
actionsTable[11846] = 1838; // 'state 185' -> UNION -> reduce -> 'action 1838'
actionsTable[11847] = 1839; // 'state 185' -> PAREN_OPEN -> reduce -> 'action 1839'
actionsTable[11848] = 1840; // 'state 185' -> PAREN_CLOSE -> reduce -> 'action 1840'
actionsTable[11849] = 1841; // 'state 185' -> QUANTIFIER -> reduce -> 'action 1841'
actionsTable[11851] = 1842; // 'state 185' -> BRACKET_CLOSE -> reduce -> 'action 1842'
actionsTable[11776] = 1843; // 'state 184' -> CHARACTER -> reduce -> 'action 1843'
actionsTable[11777] = 1844; // 'state 184' -> CONTROL_CHARACTER -> reduce -> 'action 1844'
actionsTable[11778] = 1845; // 'state 184' -> BACKSLASH -> reduce -> 'action 1845'
actionsTable[11781] = 1846; // 'state 184' -> DOT -> reduce -> 'action 1846'
actionsTable[11782] = 1847; // 'state 184' -> UNION -> reduce -> 'action 1847'
actionsTable[11783] = 1848; // 'state 184' -> PAREN_OPEN -> reduce -> 'action 1848'
actionsTable[11784] = 1849; // 'state 184' -> PAREN_CLOSE -> reduce -> 'action 1849'
actionsTable[11785] = 1850; // 'state 184' -> QUANTIFIER -> reduce -> 'action 1850'
actionsTable[11787] = 1851; // 'state 184' -> BRACKET_CLOSE -> reduce -> 'action 1851'
actionsTable[11712] = 1852; // 'state 183' -> CHARACTER -> reduce -> 'action 1852'
actionsTable[11713] = 1853; // 'state 183' -> CONTROL_CHARACTER -> reduce -> 'action 1853'
actionsTable[11714] = 1854; // 'state 183' -> BACKSLASH -> reduce -> 'action 1854'
actionsTable[11717] = 1855; // 'state 183' -> DOT -> reduce -> 'action 1855'
actionsTable[11718] = 1856; // 'state 183' -> UNION -> reduce -> 'action 1856'
actionsTable[11719] = 1857; // 'state 183' -> PAREN_OPEN -> reduce -> 'action 1857'
actionsTable[11720] = 1858; // 'state 183' -> PAREN_CLOSE -> reduce -> 'action 1858'
actionsTable[11721] = 1859; // 'state 183' -> QUANTIFIER -> reduce -> 'action 1859'
actionsTable[11723] = 1860; // 'state 183' -> BRACKET_CLOSE -> reduce -> 'action 1860'
actionsTable[11968] = 1861; // 'state 187' -> CHARACTER -> reduce -> 'action 1861'
actionsTable[11969] = 1862; // 'state 187' -> CONTROL_CHARACTER -> reduce -> 'action 1862'
actionsTable[11970] = 1863; // 'state 187' -> BACKSLASH -> reduce -> 'action 1863'
actionsTable[11973] = 1864; // 'state 187' -> DOT -> reduce -> 'action 1864'
actionsTable[11974] = 1865; // 'state 187' -> UNION -> reduce -> 'action 1865'
actionsTable[11975] = 1866; // 'state 187' -> PAREN_OPEN -> reduce -> 'action 1866'
actionsTable[11976] = 1867; // 'state 187' -> PAREN_CLOSE -> reduce -> 'action 1867'
actionsTable[11977] = 1868; // 'state 187' -> QUANTIFIER -> reduce -> 'action 1868'
actionsTable[11979] = 1869; // 'state 187' -> BRACKET_CLOSE -> reduce -> 'action 1869'
actionsTable[12032] = 1870; // 'state 188' -> CHARACTER -> shift -> 'action 1870'
actionsTable[12033] = 1871; // 'state 188' -> CONTROL_CHARACTER -> shift -> 'action 1871'
actionsTable[12034] = 1872; // 'state 188' -> BACKSLASH -> shift -> 'action 1872'
actionsTable[12037] = 1873; // 'state 188' -> DOT -> shift -> 'action 1873'
actionsTable[12038] = 1874; // 'state 188' -> UNION -> shift -> 'action 1874'
actionsTable[12039] = 1875; // 'state 188' -> PAREN_OPEN -> shift -> 'action 1875'
actionsTable[12040] = 1876; // 'state 188' -> PAREN_CLOSE -> shift -> 'action 1876'
actionsTable[12041] = 1877; // 'state 188' -> QUANTIFIER -> shift -> 'action 1877'
actionsTable[12043] = 1878; // 'state 188' -> BRACKET_CLOSE -> shift -> 'action 1878'
actionsTable[12055] = 1879; // 'state 188' -> CharacterClassCharacter -> shift -> 'action 1879'
actionsTable[12056] = 1880; // 'state 188' -> CharacterClassRange -> shift -> 'action 1880'
actionsTable[12096] = 1881; // 'state 189' -> CHARACTER -> reduce -> 'action 1881'
actionsTable[12097] = 1882; // 'state 189' -> CONTROL_CHARACTER -> reduce -> 'action 1882'
actionsTable[12098] = 1883; // 'state 189' -> BACKSLASH -> reduce -> 'action 1883'
actionsTable[12099] = 1884; // 'state 189' -> CARET -> reduce -> 'action 1884'
actionsTable[12100] = 1885; // 'state 189' -> DASH -> reduce -> 'action 1885'
actionsTable[12102] = 1886; // 'state 189' -> UNION -> reduce -> 'action 1886'
actionsTable[12103] = 1887; // 'state 189' -> PAREN_OPEN -> reduce -> 'action 1887'
actionsTable[12104] = 1888; // 'state 189' -> PAREN_CLOSE -> reduce -> 'action 1888'
actionsTable[12105] = 1889; // 'state 189' -> QUANTIFIER -> reduce -> 'action 1889'
actionsTable[12106] = 1890; // 'state 189' -> BRACKET_OPEN -> reduce -> 'action 1890'
actionsTable[12108] = 1891; // 'state 189' -> @par-gen.EOF -> reduce -> 'action 1891'
actionsTable[12160] = 1892; // 'state 190' -> CHARACTER -> reduce -> 'action 1892'
actionsTable[12161] = 1893; // 'state 190' -> CONTROL_CHARACTER -> reduce -> 'action 1893'
actionsTable[12162] = 1894; // 'state 190' -> BACKSLASH -> reduce -> 'action 1894'
actionsTable[12165] = 1895; // 'state 190' -> DOT -> reduce -> 'action 1895'
actionsTable[12166] = 1896; // 'state 190' -> UNION -> reduce -> 'action 1896'
actionsTable[12167] = 1897; // 'state 190' -> PAREN_OPEN -> reduce -> 'action 1897'
actionsTable[12168] = 1898; // 'state 190' -> PAREN_CLOSE -> reduce -> 'action 1898'
actionsTable[12169] = 1899; // 'state 190' -> QUANTIFIER -> reduce -> 'action 1899'
actionsTable[12171] = 1900; // 'state 190' -> BRACKET_CLOSE -> reduce -> 'action 1900'
actionsTable[12224] = 1901; // 'state 191' -> CHARACTER -> shift -> 'action 1901'
actionsTable[12480] = 1902; // 'state 195' -> CHARACTER -> reduce -> 'action 1902'
actionsTable[12481] = 1903; // 'state 195' -> CONTROL_CHARACTER -> reduce -> 'action 1903'
actionsTable[12482] = 1904; // 'state 195' -> BACKSLASH -> reduce -> 'action 1904'
actionsTable[12485] = 1905; // 'state 195' -> DOT -> reduce -> 'action 1905'
actionsTable[12486] = 1906; // 'state 195' -> UNION -> reduce -> 'action 1906'
actionsTable[12487] = 1907; // 'state 195' -> PAREN_OPEN -> reduce -> 'action 1907'
actionsTable[12488] = 1908; // 'state 195' -> PAREN_CLOSE -> reduce -> 'action 1908'
actionsTable[12489] = 1909; // 'state 195' -> QUANTIFIER -> reduce -> 'action 1909'
actionsTable[12491] = 1910; // 'state 195' -> BRACKET_CLOSE -> reduce -> 'action 1910'
actionsTable[12416] = 1911; // 'state 194' -> CHARACTER -> reduce -> 'action 1911'
actionsTable[12417] = 1912; // 'state 194' -> CONTROL_CHARACTER -> reduce -> 'action 1912'
actionsTable[12418] = 1913; // 'state 194' -> BACKSLASH -> reduce -> 'action 1913'
actionsTable[12421] = 1914; // 'state 194' -> DOT -> reduce -> 'action 1914'
actionsTable[12422] = 1915; // 'state 194' -> UNION -> reduce -> 'action 1915'
actionsTable[12423] = 1916; // 'state 194' -> PAREN_OPEN -> reduce -> 'action 1916'
actionsTable[12424] = 1917; // 'state 194' -> PAREN_CLOSE -> reduce -> 'action 1917'
actionsTable[12425] = 1918; // 'state 194' -> QUANTIFIER -> reduce -> 'action 1918'
actionsTable[12427] = 1919; // 'state 194' -> BRACKET_CLOSE -> reduce -> 'action 1919'
actionsTable[12352] = 1920; // 'state 193' -> CHARACTER -> reduce -> 'action 1920'
actionsTable[12353] = 1921; // 'state 193' -> CONTROL_CHARACTER -> reduce -> 'action 1921'
actionsTable[12354] = 1922; // 'state 193' -> BACKSLASH -> reduce -> 'action 1922'
actionsTable[12357] = 1923; // 'state 193' -> DOT -> reduce -> 'action 1923'
actionsTable[12358] = 1924; // 'state 193' -> UNION -> reduce -> 'action 1924'
actionsTable[12359] = 1925; // 'state 193' -> PAREN_OPEN -> reduce -> 'action 1925'
actionsTable[12360] = 1926; // 'state 193' -> PAREN_CLOSE -> reduce -> 'action 1926'
actionsTable[12361] = 1927; // 'state 193' -> QUANTIFIER -> reduce -> 'action 1927'
actionsTable[12363] = 1928; // 'state 193' -> BRACKET_CLOSE -> reduce -> 'action 1928'
actionsTable[12288] = 1929; // 'state 192' -> CHARACTER -> reduce -> 'action 1929'
actionsTable[12289] = 1930; // 'state 192' -> CONTROL_CHARACTER -> reduce -> 'action 1930'
actionsTable[12290] = 1931; // 'state 192' -> BACKSLASH -> reduce -> 'action 1931'
actionsTable[12293] = 1932; // 'state 192' -> DOT -> reduce -> 'action 1932'
actionsTable[12294] = 1933; // 'state 192' -> UNION -> reduce -> 'action 1933'
actionsTable[12295] = 1934; // 'state 192' -> PAREN_OPEN -> reduce -> 'action 1934'
actionsTable[12296] = 1935; // 'state 192' -> PAREN_CLOSE -> reduce -> 'action 1935'
actionsTable[12297] = 1936; // 'state 192' -> QUANTIFIER -> reduce -> 'action 1936'
actionsTable[12299] = 1937; // 'state 192' -> BRACKET_CLOSE -> reduce -> 'action 1937'
actionsTable[12544] = 1938; // 'state 196' -> CHARACTER -> reduce -> 'action 1938'
actionsTable[12545] = 1939; // 'state 196' -> CONTROL_CHARACTER -> reduce -> 'action 1939'
actionsTable[12546] = 1940; // 'state 196' -> BACKSLASH -> reduce -> 'action 1940'
actionsTable[12549] = 1941; // 'state 196' -> DOT -> reduce -> 'action 1941'
actionsTable[12550] = 1942; // 'state 196' -> UNION -> reduce -> 'action 1942'
actionsTable[12551] = 1943; // 'state 196' -> PAREN_OPEN -> reduce -> 'action 1943'
actionsTable[12552] = 1944; // 'state 196' -> PAREN_CLOSE -> reduce -> 'action 1944'
actionsTable[12553] = 1945; // 'state 196' -> QUANTIFIER -> reduce -> 'action 1945'
actionsTable[12555] = 1946; // 'state 196' -> BRACKET_CLOSE -> reduce -> 'action 1946'
actionsTable[12608] = 1947; // 'state 197' -> CHARACTER -> shift -> 'action 1947'
actionsTable[12609] = 1948; // 'state 197' -> CONTROL_CHARACTER -> shift -> 'action 1948'
actionsTable[12610] = 1949; // 'state 197' -> BACKSLASH -> shift -> 'action 1949'
actionsTable[12613] = 1950; // 'state 197' -> DOT -> shift -> 'action 1950'
actionsTable[12614] = 1951; // 'state 197' -> UNION -> shift -> 'action 1951'
actionsTable[12615] = 1952; // 'state 197' -> PAREN_OPEN -> shift -> 'action 1952'
actionsTable[12616] = 1953; // 'state 197' -> PAREN_CLOSE -> shift -> 'action 1953'
actionsTable[12617] = 1954; // 'state 197' -> QUANTIFIER -> shift -> 'action 1954'
actionsTable[12619] = 1955; // 'state 197' -> BRACKET_CLOSE -> shift -> 'action 1955'
actionsTable[12631] = 1956; // 'state 197' -> CharacterClassCharacter -> shift -> 'action 1956'
actionsTable[12632] = 1957; // 'state 197' -> CharacterClassRange -> shift -> 'action 1957'
actionsTable[12672] = 1958; // 'state 198' -> CHARACTER -> shift -> 'action 1958'
actionsTable[12928] = 1959; // 'state 202' -> CHARACTER -> reduce -> 'action 1959'
actionsTable[12929] = 1960; // 'state 202' -> CONTROL_CHARACTER -> reduce -> 'action 1960'
actionsTable[12930] = 1961; // 'state 202' -> BACKSLASH -> reduce -> 'action 1961'
actionsTable[12933] = 1962; // 'state 202' -> DOT -> reduce -> 'action 1962'
actionsTable[12934] = 1963; // 'state 202' -> UNION -> reduce -> 'action 1963'
actionsTable[12935] = 1964; // 'state 202' -> PAREN_OPEN -> reduce -> 'action 1964'
actionsTable[12936] = 1965; // 'state 202' -> PAREN_CLOSE -> reduce -> 'action 1965'
actionsTable[12937] = 1966; // 'state 202' -> QUANTIFIER -> reduce -> 'action 1966'
actionsTable[12939] = 1967; // 'state 202' -> BRACKET_CLOSE -> reduce -> 'action 1967'
actionsTable[12864] = 1968; // 'state 201' -> CHARACTER -> reduce -> 'action 1968'
actionsTable[12865] = 1969; // 'state 201' -> CONTROL_CHARACTER -> reduce -> 'action 1969'
actionsTable[12866] = 1970; // 'state 201' -> BACKSLASH -> reduce -> 'action 1970'
actionsTable[12869] = 1971; // 'state 201' -> DOT -> reduce -> 'action 1971'
actionsTable[12870] = 1972; // 'state 201' -> UNION -> reduce -> 'action 1972'
actionsTable[12871] = 1973; // 'state 201' -> PAREN_OPEN -> reduce -> 'action 1973'
actionsTable[12872] = 1974; // 'state 201' -> PAREN_CLOSE -> reduce -> 'action 1974'
actionsTable[12873] = 1975; // 'state 201' -> QUANTIFIER -> reduce -> 'action 1975'
actionsTable[12875] = 1976; // 'state 201' -> BRACKET_CLOSE -> reduce -> 'action 1976'
actionsTable[12800] = 1977; // 'state 200' -> CHARACTER -> reduce -> 'action 1977'
actionsTable[12801] = 1978; // 'state 200' -> CONTROL_CHARACTER -> reduce -> 'action 1978'
actionsTable[12802] = 1979; // 'state 200' -> BACKSLASH -> reduce -> 'action 1979'
actionsTable[12805] = 1980; // 'state 200' -> DOT -> reduce -> 'action 1980'
actionsTable[12806] = 1981; // 'state 200' -> UNION -> reduce -> 'action 1981'
actionsTable[12807] = 1982; // 'state 200' -> PAREN_OPEN -> reduce -> 'action 1982'
actionsTable[12808] = 1983; // 'state 200' -> PAREN_CLOSE -> reduce -> 'action 1983'
actionsTable[12809] = 1984; // 'state 200' -> QUANTIFIER -> reduce -> 'action 1984'
actionsTable[12811] = 1985; // 'state 200' -> BRACKET_CLOSE -> reduce -> 'action 1985'
actionsTable[12736] = 1986; // 'state 199' -> CHARACTER -> reduce -> 'action 1986'
actionsTable[12737] = 1987; // 'state 199' -> CONTROL_CHARACTER -> reduce -> 'action 1987'
actionsTable[12738] = 1988; // 'state 199' -> BACKSLASH -> reduce -> 'action 1988'
actionsTable[12741] = 1989; // 'state 199' -> DOT -> reduce -> 'action 1989'
actionsTable[12742] = 1990; // 'state 199' -> UNION -> reduce -> 'action 1990'
actionsTable[12743] = 1991; // 'state 199' -> PAREN_OPEN -> reduce -> 'action 1991'
actionsTable[12744] = 1992; // 'state 199' -> PAREN_CLOSE -> reduce -> 'action 1992'
actionsTable[12745] = 1993; // 'state 199' -> QUANTIFIER -> reduce -> 'action 1993'
actionsTable[12747] = 1994; // 'state 199' -> BRACKET_CLOSE -> reduce -> 'action 1994'
actionsTable[12992] = 1995; // 'state 203' -> CHARACTER -> reduce -> 'action 1995'
actionsTable[12993] = 1996; // 'state 203' -> CONTROL_CHARACTER -> reduce -> 'action 1996'
actionsTable[12994] = 1997; // 'state 203' -> BACKSLASH -> reduce -> 'action 1997'
actionsTable[12997] = 1998; // 'state 203' -> DOT -> reduce -> 'action 1998'
actionsTable[12998] = 1999; // 'state 203' -> UNION -> reduce -> 'action 1999'
actionsTable[12999] = 2000; // 'state 203' -> PAREN_OPEN -> reduce -> 'action 2000'
actionsTable[13000] = 2001; // 'state 203' -> PAREN_CLOSE -> reduce -> 'action 2001'
actionsTable[13001] = 2002; // 'state 203' -> QUANTIFIER -> reduce -> 'action 2002'
actionsTable[13003] = 2003; // 'state 203' -> BRACKET_CLOSE -> reduce -> 'action 2003'
actionsTable[13056] = 2004; // 'state 204' -> CHARACTER -> reduce -> 'action 2004'
actionsTable[13057] = 2005; // 'state 204' -> CONTROL_CHARACTER -> reduce -> 'action 2005'
actionsTable[13058] = 2006; // 'state 204' -> BACKSLASH -> reduce -> 'action 2006'
actionsTable[13061] = 2007; // 'state 204' -> DOT -> reduce -> 'action 2007'
actionsTable[13062] = 2008; // 'state 204' -> UNION -> reduce -> 'action 2008'
actionsTable[13063] = 2009; // 'state 204' -> PAREN_OPEN -> reduce -> 'action 2009'
actionsTable[13064] = 2010; // 'state 204' -> PAREN_CLOSE -> reduce -> 'action 2010'
actionsTable[13065] = 2011; // 'state 204' -> QUANTIFIER -> reduce -> 'action 2011'
actionsTable[13067] = 2012; // 'state 204' -> BRACKET_CLOSE -> reduce -> 'action 2012'
actionsTable[13120] = 2013; // 'state 205' -> CHARACTER -> reduce -> 'action 2013'
actionsTable[13121] = 2014; // 'state 205' -> CONTROL_CHARACTER -> reduce -> 'action 2014'
actionsTable[13122] = 2015; // 'state 205' -> BACKSLASH -> reduce -> 'action 2015'
actionsTable[13123] = 2016; // 'state 205' -> CARET -> reduce -> 'action 2016'
actionsTable[13124] = 2017; // 'state 205' -> DASH -> reduce -> 'action 2017'
actionsTable[13126] = 2018; // 'state 205' -> UNION -> reduce -> 'action 2018'
actionsTable[13127] = 2019; // 'state 205' -> PAREN_OPEN -> reduce -> 'action 2019'
actionsTable[13128] = 2020; // 'state 205' -> PAREN_CLOSE -> reduce -> 'action 2020'
actionsTable[13129] = 2021; // 'state 205' -> QUANTIFIER -> reduce -> 'action 2021'
actionsTable[13130] = 2022; // 'state 205' -> BRACKET_OPEN -> reduce -> 'action 2022'
actionsTable[13132] = 2023; // 'state 205' -> @par-gen.EOF -> reduce -> 'action 2023'
actionsTable[13184] = 2024; // 'state 206' -> CHARACTER -> reduce -> 'action 2024'
actionsTable[13185] = 2025; // 'state 206' -> CONTROL_CHARACTER -> reduce -> 'action 2025'
actionsTable[13186] = 2026; // 'state 206' -> BACKSLASH -> reduce -> 'action 2026'
actionsTable[13189] = 2027; // 'state 206' -> DOT -> reduce -> 'action 2027'
actionsTable[13190] = 2028; // 'state 206' -> UNION -> reduce -> 'action 2028'
actionsTable[13191] = 2029; // 'state 206' -> PAREN_OPEN -> reduce -> 'action 2029'
actionsTable[13192] = 2030; // 'state 206' -> PAREN_CLOSE -> reduce -> 'action 2030'
actionsTable[13193] = 2031; // 'state 206' -> QUANTIFIER -> reduce -> 'action 2031'
actionsTable[13195] = 2032; // 'state 206' -> BRACKET_CLOSE -> reduce -> 'action 2032'
actionsTable[13248] = 2033; // 'state 207' -> CHARACTER -> reduce -> 'action 2033'
actionsTable[13249] = 2034; // 'state 207' -> CONTROL_CHARACTER -> reduce -> 'action 2034'
actionsTable[13250] = 2035; // 'state 207' -> BACKSLASH -> reduce -> 'action 2035'
actionsTable[13251] = 2036; // 'state 207' -> CARET -> reduce -> 'action 2036'
actionsTable[13252] = 2037; // 'state 207' -> DASH -> reduce -> 'action 2037'
actionsTable[13254] = 2038; // 'state 207' -> UNION -> reduce -> 'action 2038'
actionsTable[13255] = 2039; // 'state 207' -> PAREN_OPEN -> reduce -> 'action 2039'
actionsTable[13256] = 2040; // 'state 207' -> PAREN_CLOSE -> reduce -> 'action 2040'
actionsTable[13257] = 2041; // 'state 207' -> QUANTIFIER -> reduce -> 'action 2041'
actionsTable[13258] = 2042; // 'state 207' -> BRACKET_OPEN -> reduce -> 'action 2042'
actionsTable[13260] = 2043; // 'state 207' -> @par-gen.EOF -> reduce -> 'action 2043'
actionsTable[13312] = 2044; // 'state 208' -> CHARACTER -> reduce -> 'action 2044'
actionsTable[13313] = 2045; // 'state 208' -> CONTROL_CHARACTER -> reduce -> 'action 2045'
actionsTable[13314] = 2046; // 'state 208' -> BACKSLASH -> reduce -> 'action 2046'
actionsTable[13317] = 2047; // 'state 208' -> DOT -> reduce -> 'action 2047'
actionsTable[13318] = 2048; // 'state 208' -> UNION -> reduce -> 'action 2048'
actionsTable[13319] = 2049; // 'state 208' -> PAREN_OPEN -> reduce -> 'action 2049'
actionsTable[13320] = 2050; // 'state 208' -> PAREN_CLOSE -> reduce -> 'action 2050'
actionsTable[13321] = 2051; // 'state 208' -> QUANTIFIER -> reduce -> 'action 2051'
actionsTable[13323] = 2052; // 'state 208' -> BRACKET_CLOSE -> reduce -> 'action 2052'
actionsTable[13376] = 2053; // 'state 209' -> CHARACTER -> reduce -> 'action 2053'
actionsTable[13377] = 2054; // 'state 209' -> CONTROL_CHARACTER -> reduce -> 'action 2054'
actionsTable[13378] = 2055; // 'state 209' -> BACKSLASH -> reduce -> 'action 2055'
actionsTable[13379] = 2056; // 'state 209' -> CARET -> reduce -> 'action 2056'
actionsTable[13380] = 2057; // 'state 209' -> DASH -> reduce -> 'action 2057'
actionsTable[13382] = 2058; // 'state 209' -> UNION -> reduce -> 'action 2058'
actionsTable[13383] = 2059; // 'state 209' -> PAREN_OPEN -> reduce -> 'action 2059'
actionsTable[13384] = 2060; // 'state 209' -> PAREN_CLOSE -> reduce -> 'action 2060'
actionsTable[13385] = 2061; // 'state 209' -> QUANTIFIER -> reduce -> 'action 2061'
actionsTable[13386] = 2062; // 'state 209' -> BRACKET_OPEN -> reduce -> 'action 2062'
actionsTable[13388] = 2063; // 'state 209' -> @par-gen.EOF -> reduce -> 'action 2063'
actionsTable[13440] = 2064; // 'state 210' -> CHARACTER -> reduce -> 'action 2064'
actionsTable[13441] = 2065; // 'state 210' -> CONTROL_CHARACTER -> reduce -> 'action 2065'
actionsTable[13442] = 2066; // 'state 210' -> BACKSLASH -> reduce -> 'action 2066'
actionsTable[13445] = 2067; // 'state 210' -> DOT -> reduce -> 'action 2067'
actionsTable[13446] = 2068; // 'state 210' -> UNION -> reduce -> 'action 2068'
actionsTable[13447] = 2069; // 'state 210' -> PAREN_OPEN -> reduce -> 'action 2069'
actionsTable[13448] = 2070; // 'state 210' -> PAREN_CLOSE -> reduce -> 'action 2070'
actionsTable[13449] = 2071; // 'state 210' -> QUANTIFIER -> reduce -> 'action 2071'
actionsTable[13451] = 2072; // 'state 210' -> BRACKET_CLOSE -> reduce -> 'action 2072'
actionsTable[13504] = 2073; // 'state 211' -> CHARACTER -> reduce -> 'action 2073'
actionsTable[13505] = 2074; // 'state 211' -> CONTROL_CHARACTER -> reduce -> 'action 2074'
actionsTable[13506] = 2075; // 'state 211' -> BACKSLASH -> reduce -> 'action 2075'
actionsTable[13507] = 2076; // 'state 211' -> CARET -> reduce -> 'action 2076'
actionsTable[13508] = 2077; // 'state 211' -> DASH -> reduce -> 'action 2077'
actionsTable[13510] = 2078; // 'state 211' -> UNION -> reduce -> 'action 2078'
actionsTable[13511] = 2079; // 'state 211' -> PAREN_OPEN -> reduce -> 'action 2079'
actionsTable[13512] = 2080; // 'state 211' -> PAREN_CLOSE -> reduce -> 'action 2080'
actionsTable[13513] = 2081; // 'state 211' -> QUANTIFIER -> reduce -> 'action 2081'
actionsTable[13514] = 2082; // 'state 211' -> BRACKET_OPEN -> reduce -> 'action 2082'
actionsTable[13516] = 2083; // 'state 211' -> @par-gen.EOF -> reduce -> 'action 2083'
actionsTable[13568] = 2084; // 'state 212' -> CHARACTER -> reduce -> 'action 2084'
actionsTable[13569] = 2085; // 'state 212' -> CONTROL_CHARACTER -> reduce -> 'action 2085'
actionsTable[13570] = 2086; // 'state 212' -> BACKSLASH -> reduce -> 'action 2086'
actionsTable[13573] = 2087; // 'state 212' -> DOT -> reduce -> 'action 2087'
actionsTable[13574] = 2088; // 'state 212' -> UNION -> reduce -> 'action 2088'
actionsTable[13575] = 2089; // 'state 212' -> PAREN_OPEN -> reduce -> 'action 2089'
actionsTable[13576] = 2090; // 'state 212' -> PAREN_CLOSE -> reduce -> 'action 2090'
actionsTable[13577] = 2091; // 'state 212' -> QUANTIFIER -> reduce -> 'action 2091'
actionsTable[13579] = 2092; // 'state 212' -> BRACKET_CLOSE -> reduce -> 'action 2092'

const gotoTable = new Uint16Array(13632).fill(0xffff);
gotoTable[15] = 8; // 'state 8'
gotoTable[16] = 9; // 'state 9'
gotoTable[17] = 10; // 'state 10'
gotoTable[18] = 11; // 'state 11'
gotoTable[19] = 12; // 'state 12'
gotoTable[25] = 15; // 'state 15'
gotoTable[20] = 13; // 'state 13'
gotoTable[21] = 14; // 'state 14'
gotoTable[723] = 25; // 'state 25'
gotoTable[729] = 28; // 'state 28'
gotoTable[724] = 26; // 'state 26'
gotoTable[725] = 27; // 'state 27'
gotoTable[787] = 37; // 'state 37'
gotoTable[793] = 40; // 'state 40'
gotoTable[788] = 38; // 'state 38'
gotoTable[789] = 39; // 'state 39'
gotoTable[218] = 53; // 'state 53'
gotoTable[401] = 55; // 'state 55'
gotoTable[402] = 56; // 'state 56'
gotoTable[403] = 57; // 'state 57'
gotoTable[409] = 15; // 'state 15'
gotoTable[404] = 13; // 'state 13'
gotoTable[405] = 14; // 'state 14'
gotoTable[470] = 67; // 'state 67'
gotoTable[471] = 68; // 'state 68'
gotoTable[472] = 69; // 'state 69'
gotoTable[1042] = 70; // 'state 70'
gotoTable[1043] = 71; // 'state 71'
gotoTable[1049] = 15; // 'state 15'
gotoTable[1044] = 13; // 'state 13'
gotoTable[1045] = 14; // 'state 14'
gotoTable[1426] = 72; // 'state 72'
gotoTable[1427] = 73; // 'state 73'
gotoTable[1433] = 15; // 'state 15'
gotoTable[1428] = 13; // 'state 13'
gotoTable[1429] = 14; // 'state 14'
gotoTable[1242] = 86; // 'state 86'
gotoTable[1489] = 87; // 'state 87'
gotoTable[1490] = 88; // 'state 88'
gotoTable[1491] = 89; // 'state 89'
gotoTable[1497] = 15; // 'state 15'
gotoTable[1492] = 13; // 'state 13'
gotoTable[1493] = 14; // 'state 14'
gotoTable[1558] = 99; // 'state 99'
gotoTable[1559] = 100; // 'state 100'
gotoTable[1560] = 101; // 'state 101'
gotoTable[2194] = 102; // 'state 102'
gotoTable[2195] = 103; // 'state 103'
gotoTable[2201] = 15; // 'state 15'
gotoTable[2196] = 13; // 'state 13'
gotoTable[2197] = 14; // 'state 14'
gotoTable[2010] = 116; // 'state 116'
gotoTable[2257] = 117; // 'state 117'
gotoTable[2258] = 118; // 'state 118'
gotoTable[2259] = 119; // 'state 119'
gotoTable[2265] = 15; // 'state 15'
gotoTable[2260] = 13; // 'state 13'
gotoTable[2261] = 14; // 'state 14'
gotoTable[2326] = 129; // 'state 129'
gotoTable[2327] = 130; // 'state 130'
gotoTable[2328] = 131; // 'state 131'
gotoTable[3603] = 25; // 'state 25'
gotoTable[3609] = 15; // 'state 15'
gotoTable[3604] = 13; // 'state 13'
gotoTable[3605] = 14; // 'state 14'
gotoTable[3667] = 37; // 'state 37'
gotoTable[3673] = 15; // 'state 15'
gotoTable[3668] = 13; // 'state 13'
gotoTable[3669] = 14; // 'state 14'
gotoTable[3478] = 144; // 'state 144'
gotoTable[3479] = 145; // 'state 145'
gotoTable[3480] = 146; // 'state 146'
gotoTable[4311] = 156; // 'state 156'
gotoTable[4312] = 157; // 'state 157'
gotoTable[3926] = 164; // 'state 164'
gotoTable[3927] = 68; // 'state 68'
gotoTable[3928] = 69; // 'state 69'
gotoTable[4499] = 25; // 'state 25'
gotoTable[4505] = 15; // 'state 15'
gotoTable[4500] = 13; // 'state 13'
gotoTable[4501] = 14; // 'state 14'
gotoTable[4563] = 37; // 'state 37'
gotoTable[4569] = 15; // 'state 15'
gotoTable[4564] = 13; // 'state 13'
gotoTable[4565] = 14; // 'state 14'
gotoTable[4627] = 25; // 'state 25'
gotoTable[4633] = 15; // 'state 15'
gotoTable[4628] = 13; // 'state 13'
gotoTable[4629] = 14; // 'state 14'
gotoTable[4691] = 37; // 'state 37'
gotoTable[4697] = 15; // 'state 15'
gotoTable[4692] = 13; // 'state 13'
gotoTable[4693] = 14; // 'state 14'
gotoTable[5651] = 25; // 'state 25'
gotoTable[5657] = 15; // 'state 15'
gotoTable[5652] = 13; // 'state 13'
gotoTable[5653] = 14; // 'state 14'
gotoTable[5715] = 37; // 'state 37'
gotoTable[5721] = 15; // 'state 15'
gotoTable[5716] = 13; // 'state 13'
gotoTable[5717] = 14; // 'state 14'
gotoTable[6359] = 169; // 'state 169'
gotoTable[6360] = 69; // 'state 69'
gotoTable[5974] = 176; // 'state 176'
gotoTable[5975] = 68; // 'state 68'
gotoTable[5976] = 69; // 'state 69'
gotoTable[6547] = 25; // 'state 25'
gotoTable[6553] = 15; // 'state 15'
gotoTable[6548] = 13; // 'state 13'
gotoTable[6549] = 14; // 'state 14'
gotoTable[6611] = 37; // 'state 37'
gotoTable[6617] = 15; // 'state 15'
gotoTable[6612] = 13; // 'state 13'
gotoTable[6613] = 14; // 'state 14'
gotoTable[7571] = 25; // 'state 25'
gotoTable[7577] = 15; // 'state 15'
gotoTable[7572] = 13; // 'state 13'
gotoTable[7573] = 14; // 'state 14'
gotoTable[7635] = 37; // 'state 37'
gotoTable[7641] = 15; // 'state 15'
gotoTable[7636] = 13; // 'state 13'
gotoTable[7637] = 14; // 'state 14'
gotoTable[8279] = 181; // 'state 181'
gotoTable[8280] = 69; // 'state 69'
gotoTable[7894] = 188; // 'state 188'
gotoTable[7895] = 68; // 'state 68'
gotoTable[7896] = 69; // 'state 69'
gotoTable[9239] = 190; // 'state 190'
gotoTable[9240] = 69; // 'state 69'
gotoTable[8854] = 197; // 'state 197'
gotoTable[8855] = 68; // 'state 68'
gotoTable[8856] = 69; // 'state 69'
gotoTable[10519] = 156; // 'state 156'
gotoTable[10520] = 69; // 'state 69'
gotoTable[11287] = 156; // 'state 156'
gotoTable[11288] = 69; // 'state 69'
gotoTable[12055] = 156; // 'state 156'
gotoTable[12056] = 69; // 'state 69'
gotoTable[12631] = 156; // 'state 156'
gotoTable[12632] = 69; // 'state 69'

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

const createProxy = (stream, tree, pointer) => {
  return new Proxy(
    {},
    {
      get(target, prop, receiver) {
        const nChildren = tree[pointer + 3];

        switch (prop) {
          case "name":
            return parserSymbols[tree[pointer]];
          case "start":
            return nChildren > 0 ? receiver.items[0].start : tree[pointer + 1];
          case "end":
            return nChildren > 0
              ? receiver.items[nChildren - 1].end
              : tree[pointer + 2];
          case "value":
            return stream.subarray(receiver.start, receiver.end);
          case "items":
            if (nChildren === 0) {
              return undefined;
            }

            const firstChild = tree[pointer + 4];
            const children = [createProxy(stream, tree, firstChild)];
            let nextChild = tree[firstChild + 5];

            for (let i = 1; i < nChildren; i++) {
              children.push(createProxy(stream, tree, nextChild));
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
        return ["name", "start", "end", "value", "items"];
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

    const actionLookup = actionsTable[currentState * 64 + lookahead];
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
        return createProxy(stream, tree, tp - 6);
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
            lookahead * 213 * 64 + currentState * 64 + action.symbol
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

        const nextState = gotoTable[stack[sp] * 64 + action.symbol];
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
